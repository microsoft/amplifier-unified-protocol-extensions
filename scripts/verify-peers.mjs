/** Explicit independent schema check. No missing peer is silently skipped. */
import {readFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import Ajv2020 from 'ajv/dist/2020.js';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const options=Object.fromEntries(process.argv.slice(2).map(arg=>{
  const [key,...rest]=arg.split('=');return [key,rest.join('=')];
}));
for(const name of ['--ahp','--acp','--native'])if(!options[name])throw Error(`Required ${name}=<read-only-checkout>`);
const peers={
  ahp:join(resolve(options['--ahp']),'schema/commands.schema.json'),
  ahpActions:join(resolve(options['--ahp']),'schema/actions.schema.json'),
  acp:join(resolve(options['--acp']),'schema/v1/schema.json'),
  nativeRetired:join(resolve(options['--native']),'schemas/native-retired-copy.v1.json'),
  nativeManaged:join(resolve(options['--native']),'schemas/native-managed-files.v1.json'),
};
const validators={};
const hashes={};
for(const [name,path] of Object.entries(peers)){
  const bytes=readFileSync(path),schema=JSON.parse(bytes);
  hashes[name]={path,sha256:createHash('sha256').update(bytes).digest('hex')};
  const ajv=addFormats(schema.$schema?.includes('2020-12')?new Ajv2020({strict:false,allErrors:true}):new Ajv({strict:false,allErrors:true}));
  for(const bits of [16,32,64])ajv.addFormat('uint'+bits,{type:'number',validate:value=>Number.isInteger(value)&&value>=0&&value<2**bits});
  const key=schema.$id??`urn:unified-conformance:${name}`;
  ajv.addSchema(schema,key);
  validators[name]=definition=>definition?ajv.compile({$ref:key+'#/$defs/'+definition}):ajv.getSchema(key);
}
const cases=read(new URL('../fixtures/conformance/peers.v1.json',import.meta.url));
let count=0;
for(const row of cases){
  const validate=validators[row.peer](row.definition);
  if(Boolean(validate(row.value))!==row.valid)throw Error(row.name+': '+JSON.stringify(validate.errors));
  count++;
}
process.stdout.write(JSON.stringify({cases:count,passed:count,skipped:0,hashes,boundary:'Actual upstream/native schemas over synthetic wire fixtures; no running peer, account, device or deployed adoption claim.'},null,2)+'\n');
