/** Compare product schemas to the actual read-only recovery owner definitions. */
import {readFileSync,mkdtempSync,writeFileSync,rmSync,existsSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {stripTypeScriptTypes} from 'node:module';
const directory=process.argv[2];
if(!directory)throw Error('Required argument: read-only components/recovery-capability directory');
const sourcePath=join(resolve(directory),'src/schemas.ts');
const path=existsSync(sourcePath)?sourcePath:join(resolve(directory),'dist/schemas.js');
const source=readFileSync(path,'utf8');
const temporary=mkdtempSync(join(tmpdir(),'unified-recovery-contract-'));
try{
 const target=join(temporary,'schemas.mjs');
 writeFileSync(target,path.endsWith('.ts')?stripTypeScriptTypes(source,{mode:'strip'}):source);
 const actual=await import(pathToFileURL(target));
 const parts=['native.app-bundle-default','notifications.settings','notifications.credentials','updates.preferences'];
 const definitions=actual.negotiatedDefinitions(undefined,[],parts);
 let cases=0;
 for(const operation of ['prepare','apply','restore']){
  const filename='recovery-app-reset-'+operation+'.v1.json';
  const schema=JSON.parse(readFileSync(new URL('../schemas/'+filename,import.meta.url),'utf8'));
  const owner=definitions['recovery.appReset.'+operation].schema;
  for(const key of ['type','properties','required','additionalProperties'])assert.deepEqual(schema[key],owner[key],`${filename} drift at ${key}`);
  for(const row of JSON.parse(readFileSync(new URL('../fixtures/conformance/envelopes.v1.json',import.meta.url),'utf8')).filter(row=>row.schema+'.json'===filename)){
   let valid=true;try{actual.validate(owner,row.value);}catch{valid=false;}
   assert.equal(valid,row.valid,row.name);cases++;
  }
 }
 assert.equal(actual.negotiatedDefinitions(undefined,[],[])['recovery.appReset.prepare'],undefined,'Absent reset owners must not advertise reset');cases++;
 const one=actual.negotiatedDefinitions(undefined,[],['native.app-bundle-default']);
 assert.throws(()=>actual.validate(one['recovery.appReset.prepare'].schema,{parts:['notifications.settings'],privateContentReviewed:true}),'Unregistered reset part must refuse');cases++;
 process.stdout.write(JSON.stringify({cases,passed:cases,skipped:0,source:path,sha256:createHash('sha256').update(source).digest('hex'),boundary:'Actual recovery schema module only, privately transpiled. No reset effects or runtime/account/device acceptance.'},null,2)+'\n');
}finally{rmSync(temporary,{recursive:true,force:true});}
