// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    let HEAPF32: any;
    let HEAPF64: any;
    let HEAP_DATA_VIEW: any;
    let HEAP8: any;
    let HEAPU8: any;
    let HEAP16: any;
    let HEAPU16: any;
    let HEAP32: any;
    let HEAPU32: any;
    let HEAP64: any;
    let HEAPU64: any;
}
interface WasmModule {
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
export interface ConfigBase {
  storageNamespace(): Namespace;
  currentHashes(): vector<string>;
  mergeHex(_0: vector<MergeStruct>): vector<string>;
  needsPush(): boolean;
  needsDump(): boolean;
  encryptionDomain(): string;
  makePushHex(): string;
  confirmPushed(_0: number, _1: EmbindString): void;
  dumpHex(): string;
  makeDumpHex(): string;
  push(): PushResultStruct;
  mergeHexSingle(_0: MergeStruct): vector<string>;
  delete(): void;
}

export interface UserProfile extends ConfigBase {
  getProfilePic(): ProfilePic;
  getBlindedMsgRequests(): boolean | undefined;
  setBlindedMsgRequests(_0?: boolean): void;
  getNtsPrioritySeconds(): number;
  setNtsPrioritySeconds(_0: number): void;
  setNtsExpiry(_0: number): void;
  getNtsExpiry(): number | undefined;
  setName(_0: EmbindString): void;
  getName(): EmbindString | undefined;
  setProfilePic(_0: EmbindString, _1: EmbindString): void;
  delete(): void;
}

export interface Contacts extends ConfigBase {
  all(): vector<contact_info>;
  set(_0: ContactInfo): void;
  empty(): boolean;
  size(): number;
  getOrConstruct(_0: EmbindString): ContactInfo;
  get(_0: EmbindString): ContactInfo | undefined;
  setName(_0: EmbindString, _1: EmbindString): void;
  setNickname(_0: EmbindString, _1: EmbindString): void;
  setProfilePic(_0: EmbindString, _1: ProfilePic): void;
  setApproved(_0: EmbindString, _1: boolean): void;
  setApprovedMe(_0: EmbindString, _1: boolean): void;
  setBlocked(_0: EmbindString, _1: boolean): void;
  setPriority(_0: EmbindString, _1: number): void;
  setNotifications(_0: EmbindString, _1: NotificationMode): void;
  setExpiry(_0: EmbindString, _1: ExpirationMode, _2: number): void;
  setCreated(_0: EmbindString, _1: number): void;
  erase(_0: EmbindString): boolean;
  delete(): void;
}

export interface UserGroups extends ConfigBase {
  setLegacyGroup(_0: LegacyGroupInfo): void;
  getLegacyGroup(_0: EmbindString): LegacyGroupInfo | undefined;
  getOrConstructLegacyGroup(_0: EmbindString): LegacyGroupInfo;
  delete(): void;
}

export interface ContactInfo {
  profilePicture: ProfilePic;
  notifications: NotificationMode;
  expirationMode: ExpirationMode;
  approved: boolean;
  approvedMe: boolean;
  blocked: boolean;
  priority: number;
  expireTimer: number;
  created: number;
  sessionId: EmbindString;
  name: EmbindString;
  nickname: EmbindString;
  setName(_0: EmbindString): void;
  setNickname(_0: EmbindString): void;
  delete(): void;
}

export interface ProfilePic {
  url: EmbindString;
  key: EmbindString;
  delete(): void;
}

export interface BaseGroupInfo {
  invited: boolean;
  priority: number;
  name: EmbindString;
  delete(): void;
}

export interface LegacyGroupInfo extends BaseGroupInfo {
  groupPk: EmbindString;
  encPubkey: EmbindString;
  encSeckey: EmbindString;
  insert(_0: EmbindString, _1: boolean): boolean;
  erase(_0: EmbindString): boolean;
  delete(): void;
}

export interface NamespaceValue<T extends number> {
  value: T;
}
export type Namespace = NamespaceValue<2>|NamespaceValue<3>|NamespaceValue<4>|NamespaceValue<5>|NamespaceValue<11>|NamespaceValue<12>|NamespaceValue<13>|NamespaceValue<14>;

export interface NotificationModeValue<T extends number> {
  value: T;
}
export type NotificationMode = NotificationModeValue<1>|NotificationModeValue<0>|NotificationModeValue<2>|NotificationModeValue<3>;

export interface ExpirationModeValue<T extends number> {
  value: T;
}
export type ExpirationMode = ExpirationModeValue<0>|ExpirationModeValue<1>|ExpirationModeValue<2>;

export interface vector<ustring> {
  size(): number;
  get(_0: number): EmbindString | undefined;
  push_back(_0: EmbindString): void;
  resize(_0: number, _1: EmbindString): void;
  set(_0: number, _1: EmbindString): boolean;
  delete(): void;
}

export interface vector<contact_info> {
  push_back(_0: ContactInfo): void;
  resize(_0: number, _1: ContactInfo): void;
  size(): number;
  get(_0: number): ContactInfo | undefined;
  set(_0: number, _1: ContactInfo): boolean;
  delete(): void;
}

export interface vector<string> {
  size(): number;
  get(_0: number): EmbindString | undefined;
  push_back(_0: EmbindString): void;
  resize(_0: number, _1: EmbindString): void;
  set(_0: number, _1: EmbindString): boolean;
  delete(): void;
}

export interface vector<MergeStruct> {
  size(): number;
  get(_0: number): MergeStruct | undefined;
  push_back(_0: MergeStruct): void;
  resize(_0: number, _1: MergeStruct): void;
  set(_0: number, _1: MergeStruct): boolean;
  delete(): void;
}

export type PushResultStruct = {
  seqno: number,
  dataHex: EmbindString,
  hashes: vector<string>
};

export type MergeStruct = {
  hash: EmbindString,
  dataHex: EmbindString
};

interface EmbindModule {
  ConfigBase: {};
  UserProfile: {new(_0: EmbindString, _1?: EmbindString): UserProfile};
  Contacts: {new(_0: EmbindString, _1?: EmbindString): Contacts};
  UserGroups: {new(_0: EmbindString, _1?: EmbindString): UserGroups};
  ContactInfo: {new(_0: EmbindString): ContactInfo};
  ProfilePic: {new(): ProfilePic};
  BaseGroupInfo: {};
  LegacyGroupInfo: {new(_0: EmbindString): LegacyGroupInfo};
  Namespace: {UserProfile: NamespaceValue<2>, Contacts: NamespaceValue<3>, ConvoInfoVolatile: NamespaceValue<4>, UserGroups: NamespaceValue<5>, GroupMessages: NamespaceValue<11>, GroupKeys: NamespaceValue<12>, GroupInfo: NamespaceValue<13>, GroupMembers: NamespaceValue<14>};
  NotificationMode: {All: NotificationModeValue<1>, defaulted: NotificationModeValue<0>, disabled: NotificationModeValue<2>, mentions_only: NotificationModeValue<3>};
  ExpirationMode: {None: ExpirationModeValue<0>, AfterSend: ExpirationModeValue<1>, AfterRead: ExpirationModeValue<2>};
  vector<ustring>: {new(): vector<ustring>};
  vector<contact_info>: {new(): vector<contact_info>};
  vector<string>: {new(): vector<string>};
  vector<MergeStruct>: {new(): vector<MergeStruct>};
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
