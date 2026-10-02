/** Upstream SDKs own AHP and ACP types. These interfaces own only extensions. */
export interface CapabilityManifest {
  version: 1;
  topics: Record<string, {uri:string;version:1;watch?:boolean;scope?:'context'|'host'}>;
  actions: Record<string, {topic:string;operation:string;method:'x-amplifier/capabilityAction'}>;
}
export interface CapabilityRecord<T extends object = Record<string,unknown>> {
  topic:string;
  /** AHP session URI or the literal host. Never a client supplied native path. */
  scope:string;
  /** Safe nonnegative integer; increases after authoritative owner commits. */
  revision:number;
  data:T;
}
export interface CapabilityAction {
  channel:string;topic:string;operation:string;version:1;
  args:Record<string,unknown>;commandId:string;_meta?:Record<string,unknown>;
}
export interface CapabilityResult<T=unknown> {
  accepted:boolean;updates?:CapabilityRecord[];invalidate?:string[];
  result?:T;_meta?:Record<string,unknown>;
}
