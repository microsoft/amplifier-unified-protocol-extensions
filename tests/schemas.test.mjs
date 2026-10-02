import {readFileSync,readdirSync} from 'node:fs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import Ajv2020 from 'ajv/dist/2020.js';
const ajv=new Ajv2020({strict:true,allErrors:true});
const read=path=>JSON.parse(readFileSync(new URL(path,import.meta.url),'utf8'));
const schemas=new Map(readdirSync(new URL('../schemas/',import.meta.url)).map(name=>[name,ajv.compile(read('../schemas/'+name))]));
for(const [name,validate]of schemas)test(name,()=>{const value=read('../fixtures/'+name);assert.equal(validate(value),true,JSON.stringify(validate.errors));});
test('rejects unknown versions, missing command identity, and malformed revision',()=>{
  const manifest=read('../fixtures/capability-manifest.v1.json');manifest.version=2;
  assert.equal(schemas.get('capability-manifest.v1.json')(manifest),false);
  const command=read('../fixtures/capability-action.v1.json');delete command.commandId;
  assert.equal(schemas.get('capability-action.v1.json')(command),false);
  const record=read('../fixtures/capability-record.v1.json');record.revision='7';
  assert.equal(schemas.get('capability-record.v1.json')(record),false);
});
test('registry references published schema owners and no upstream type copies',()=>{
  const registry=read('../registry.json');assert.equal(registry.upstream.acp.wireVersion,1);
  for(const extension of registry.extensions)for(const name of extension.schemas)assert.ok(schemas.has(name+'.json'));
  assert.ok(![...schemas.keys()].some(name=>['session-update','ahp-action','root-state'].some(x=>name.includes(x))));
});
