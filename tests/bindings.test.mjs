import {readFileSync, mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {generate} from '../scripts/generate-types.mjs';

test('every binding regenerates exactly from the shipped schemas',()=>{
  assert.equal(readFileSync(new URL('../types/index.d.ts',import.meta.url),'utf8'),generate());
});
test('generated declarations retain consumer generic and optional-field compatibility',()=>{
  const directory=mkdtempSync(join(tmpdir(),'unified-extension-types-'));
  try {
    writeFileSync(join(directory,'index.d.ts'),generate());
    writeFileSync(join(directory,'consumer.ts'),`
import type {CapabilityAction, CapabilityRecord, CapabilityResult, CapabilityManifest, RecoveryAppResetPrepare} from './index.js';
interface Data {enabled:boolean}
const record:CapabilityRecord<Data>={topic:'configuration',scope:'host',revision:1,data:{enabled:true}};
const result:CapabilityResult<Data>={accepted:true,result:{enabled:true},updates:[{topic:'configuration',scope:'host',revision:1,data:{enabled:true}}]};
const command:CapabilityAction={channel:'ahp-root://',topic:'configuration',operation:'inspect',version:1,args:{},commandId:'fixture'};
const manifest:CapabilityManifest={version:1,topics:{configuration:{uri:'amplifier-capability://configuration',version:1}},actions:{}};
const reset:RecoveryAppResetPrepare={parts:['native.app-bundle-default'],privateContentReviewed:true};
// @ts-expect-error Existing consumer type parameter must constrain data.
const invalid:CapabilityRecord<Data>={topic:'x',scope:'host',revision:0,data:{unrelated:true}};
// @ts-expect-error Unknown v1 part is not in the current product contract.
const invalidPart:RecoveryAppResetPrepare={parts:['shared.keys'],privateContentReviewed:true};
void [record,result,command,manifest,reset,invalid,invalidPart];
`);
    const compiler=join(dirname(createRequire(import.meta.url).resolve('typescript/package.json')),'bin/tsc');
    execFileSync(process.execPath,[compiler,'--noEmit','--strict','--skipLibCheck','--ignoreConfig',join(directory,'consumer.ts')],{stdio:'pipe'});
  } finally {rmSync(directory,{recursive:true,force:true});}
});
