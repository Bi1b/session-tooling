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
  pushHex(): WPushResultStruct;
  currentHashes(): StringVector;
  mergeHex(_0: MergeStructVector): StringVector;
  needsPush(): boolean;
  needsDump(): boolean;
  encryptionDomain(): string;
  makePushHex(): string;
  confirmPushed(_0: number, _1: EmbindString): void;
  dumpHex(): string;
  makeDumpHex(): string;
  delete(): void;
}

export interface UserProfile extends ConfigBase {
  getProfilePic(): ProfilePic;
  setProfilePic(_0: ProfilePic): void;
  getBlindedMsgRequests(): boolean | undefined;
  setBlindedMsgRequests(_0?: boolean): void;
  getNtsPrioritySeconds(): number;
  setNtsPrioritySeconds(_0: number): void;
  delete(): void;
}

export interface UserProfileW extends ConfigBase {
  setNtsExpiry(_0: number): void;
  getNtsExpiry(): number | undefined;
  setName(_0: EmbindString): void;
  getName(): EmbindString | undefined;
  delete(): void;
}

export interface Contacts extends ConfigBase {
  set(_0: ContactInfo): void;
  empty(): boolean;
  size(): number;
  delete(): void;
}

export interface ContactsW extends Contacts {
  all(): ContactInfoVector;
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
  setExpirySeconds(_0: EmbindString, _1: ExpirationMode, _2: number): void;
  setCreatedAtSeconds(_0: EmbindString, _1: number): void;
  erase(_0: EmbindString): boolean;
  delete(): void;
}

export interface UserGroups extends ConfigBase {
  createGroup(): GroupInfo;
  delete(): void;
}

export interface UserGroupsW extends UserGroups {
  allLegacyGroups(): LegacyGroupInfoVector;
  allGroups(): GroupInfoVector;
  allCommunities(): CommunityInfoVector;
  setLegacyGroup(_0: LegacyGroupInfo): void;
  setGroup(_0: GroupInfo): void;
  setCommunity(_0: CommunityInfo): void;
  getLegacyGroup(_0: EmbindString): LegacyGroupInfo | undefined;
  getOrConstructLegacyGroup(_0: EmbindString): LegacyGroupInfo;
  eraseLegacyGroup(_0: EmbindString): void;
  getGroup(_0: EmbindString): GroupInfo | undefined;
  getOrConstructGroup(_0: EmbindString): GroupInfo;
  eraseGroup(_0: EmbindString): void;
  getCommunity(_0: EmbindString, _1: EmbindString): CommunityInfo | undefined;
  getOrConstructCommunity(_0: EmbindString): CommunityInfo;
  eraseCommunity(_0: EmbindString, _1: EmbindString): void;
  delete(): void;
}

export interface MetaGroupW {
  getProfilePic(): ProfilePic;
  infosStorageNamespace(): Namespace;
  membersStorageNamespace(): Namespace;
  keysStorageNamespace(): Namespace;
  pushHex(): WGroupPushResultStruct;
  encryptMessages(_0: UstringVector): UstringVector;
  membersAll(): MemberInGroupVector;
  currentHashes(): StringVector;
  decryptMessages(_0: UstringVector): VectorOfKeysDecryptResult;
  setProfilePic(_0: ProfilePic): void;
  destroyGroup(): void;
  membersSet(_0: Member): void;
  needsPush(): boolean;
  needsDump(): boolean;
  isDestroyed(): boolean;
  admin(): boolean;
  merge(_0: MergeStructVector, _1: MergeStructVector, _2: MergeStructGroupKeysVector): number;
  setExpiryTimerSeconds(_0: number): void;
  getExpiryTimerSeconds(): number;
  setCreatedAtSeconds(_0: number): void;
  getCreatedAtSeconds(): number;
  setDeleteBeforeSeconds(_0: number): void;
  getDeleteBeforeSeconds(): number;
  setDeleteAttachBeforeSeconds(_0: number): void;
  getDeleteAttachBeforeSeconds(): number;
  membersLength(): number;
  keysCount(): number;
  keysCurrentGeneration(): number;
  makeDumpHex(): string;
  setName(_0: EmbindString): void;
  setNameTruncated(_0: EmbindString): void;
  setDescription(_0: EmbindString): void;
  setDescriptionTruncated(_0: EmbindString): void;
  membersGetOrConstruct(_0: EmbindString): Member;
  membersGet(_0: EmbindString): Member | undefined;
  membersErase(_0: EmbindString): boolean;
  getName(): EmbindString | undefined;
  getDescription(): EmbindString | undefined;
  loadAdminKey(_0: EmbindString): void;
  rekey(): string;
  keysSupplement(_0: StringVector): string;
  loadKeyMessage(_0: EmbindString, _1: EmbindString, _2: number): boolean;
  makeSubaccount(_0: EmbindString, _1: boolean, _2: boolean): string;
  verifySubaccount(_0: EmbindString, _1: boolean, _2: boolean): boolean;
  subaccountSign(_0: EmbindString, _1: EmbindString, _2: boolean): SwarmAuth;
  subaccountToken(_0: EmbindString, _1: boolean, _2: boolean): string;
  loadKeyMessage(_0: EmbindString, _1: EmbindString, _2: number): boolean;
  pendingConfig(): EmbindString | undefined;
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
  expireTimerSeconds: number;
  createdAtSeconds: number;
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
  clear(): void;
  empty(): boolean;
  setKey(_0: EmbindString): void;
  delete(): void;
}

export interface BaseGroupInfo {
  notifications: NotificationMode;
  invited: boolean;
  priority: number;
  joinedAtSeconds: number;
  name: EmbindString;
  delete(): void;
}

export interface LegacyGroupInfo extends BaseGroupInfo {
  expiryTimerSeconds: number;
  groupPk: EmbindString;
  encPubkey: EmbindString;
  encSeckey: EmbindString;
  members(): StringVector;
  admins(): StringVector;
  insert(_0: EmbindString, _1: boolean): boolean;
  erase(_0: EmbindString): boolean;
  delete(): void;
}

export interface GroupInfo extends BaseGroupInfo {
  groupPk: EmbindString;
  adminSecretKey: EmbindString;
  authData: EmbindString;
  setKicked(): void;
  kicked(): boolean;
  delete(): void;
}

export interface Community {
  pubkeyHex(): string;
  fullUrl(): string;
  room(): string;
  pubkeyHex(): string;
  fullUrl(): string;
  room(): string;
  delete(): void;
}

export interface CommunityInfo extends BaseGroupInfo {
  delete(): void;
}

export interface Member {
  profile_picture: ProfilePic;
  admin: boolean;
  supplement: boolean;
  pubkey: EmbindString;
  name: EmbindString;
  setAccepted(): void;
  setPromoted(): void;
  setPromotionSent(): void;
  setPromotionFailed(): void;
  setPromotionAccepted(): void;
  setInvited(_0: boolean): void;
  inviteNotSent(): boolean;
  invitePending(): boolean;
  inviteFailed(): boolean;
  promotionNotSent(): boolean;
  promotionPending(): boolean;
  promotionFailed(): boolean;
  promoted(): boolean;
  setRemoved(_0: boolean): void;
  isRemoved(): boolean;
  shouldRemoveMessages(): boolean;
  setName(_0: EmbindString): void;
  setNameTruncated(_0: EmbindString): void;
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

export interface WPushResultStruct {
  storageNamespace: Namespace;
  hashes: StringVector;
  seqno: number;
  dataHex: EmbindString;
  delete(): void;
}

export interface WKeysPushResultStruct {
  storageNamespace: Namespace;
  dataHex: EmbindString;
  delete(): void;
}

export interface WGroupPushResultStruct {
  keysPush: WKeysPushResultStruct | undefined;
  infosPush: WPushResultStruct | undefined;
  membersPush: WPushResultStruct | undefined;
  delete(): void;
}

export interface KeysDecryptResult {
  author: EmbindString;
  data: EmbindString;
  delete(): void;
}

export interface UstringVector {
  size(): number;
  get(_0: number): EmbindString | undefined;
  push_back(_0: EmbindString): void;
  resize(_0: number, _1: EmbindString): void;
  set(_0: number, _1: EmbindString): boolean;
  delete(): void;
}

export interface ContactInfoVector {
  push_back(_0: ContactInfo): void;
  resize(_0: number, _1: ContactInfo): void;
  size(): number;
  get(_0: number): ContactInfo | undefined;
  set(_0: number, _1: ContactInfo): boolean;
  delete(): void;
}

export interface LegacyGroupInfoVector {
  push_back(_0: LegacyGroupInfo): void;
  resize(_0: number, _1: LegacyGroupInfo): void;
  size(): number;
  get(_0: number): LegacyGroupInfo | undefined;
  set(_0: number, _1: LegacyGroupInfo): boolean;
  delete(): void;
}

export interface GroupInfoVector {
  push_back(_0: GroupInfo): void;
  resize(_0: number, _1: GroupInfo): void;
  size(): number;
  get(_0: number): GroupInfo | undefined;
  set(_0: number, _1: GroupInfo): boolean;
  delete(): void;
}

export interface CommunityInfoVector {
  push_back(_0: CommunityInfo): void;
  resize(_0: number, _1: CommunityInfo): void;
  size(): number;
  get(_0: number): CommunityInfo | undefined;
  set(_0: number, _1: CommunityInfo): boolean;
  delete(): void;
}

export interface MemberInGroupVector {
  push_back(_0: Member): void;
  resize(_0: number, _1: Member): void;
  size(): number;
  get(_0: number): Member | undefined;
  set(_0: number, _1: Member): boolean;
  delete(): void;
}

export interface StringVector {
  size(): number;
  get(_0: number): EmbindString | undefined;
  push_back(_0: EmbindString): void;
  resize(_0: number, _1: EmbindString): void;
  set(_0: number, _1: EmbindString): boolean;
  delete(): void;
}

export interface MergeStructVector {
  size(): number;
  get(_0: number): WMergeStruct | undefined;
  push_back(_0: WMergeStruct): void;
  resize(_0: number, _1: WMergeStruct): void;
  set(_0: number, _1: WMergeStruct): boolean;
  delete(): void;
}

export interface MergeStructGroupKeysVector {
  size(): number;
  get(_0: number): WMergeStructGroupKeys | undefined;
  push_back(_0: WMergeStructGroupKeys): void;
  resize(_0: number, _1: WMergeStructGroupKeys): void;
  set(_0: number, _1: WMergeStructGroupKeys): boolean;
  delete(): void;
}

export interface VectorOfKeysDecryptResult {
  push_back(_0: KeysDecryptResult): void;
  resize(_0: number, _1: KeysDecryptResult): void;
  size(): number;
  get(_0: number): KeysDecryptResult | undefined;
  set(_0: number, _1: KeysDecryptResult): boolean;
  delete(): void;
}

export type WMergeStruct = {
  hash: EmbindString,
  dataHex: EmbindString
};

export type WMergeStructGroupKeys = {
  hash: EmbindString,
  dataHex: EmbindString,
  timestampMs: number
};

export type SwarmAuth = {
  subaccount: EmbindString,
  subaccountSig: EmbindString,
  signature: EmbindString
};

interface EmbindModule {
  ConfigBase: {};
  UserProfile: {};
  UserProfileW: {new(_0: EmbindString, _1: EmbindString): UserProfileW};
  Contacts: {};
  ContactsW: {new(_0: EmbindString, _1: EmbindString): ContactsW};
  UserGroups: {};
  UserGroupsW: {new(_0: EmbindString, _1: EmbindString): UserGroupsW};
  MetaGroupW: {new(_0: EmbindString, _1: EmbindString, _2?: EmbindString, _3?: EmbindString): MetaGroupW};
  ContactInfo: {new(_0: EmbindString): ContactInfo};
  ProfilePic: {new(): ProfilePic};
  BaseGroupInfo: {NAME_MAX_LENGTH: number};
  LegacyGroupInfo: {new(_0: EmbindString): LegacyGroupInfo};
  GroupInfo: {new(_0: EmbindString): GroupInfo};
  Community: {BASE_URL_MAX_LENGTH: number; ROOM_MAX_LENGTH: number; FULL_URL_MAX_LENGTH: number};
  CommunityInfo: {};
  Member: {new(_0: EmbindString): Member; MAX_NAME_LENGTH: number};
  Namespace: {UserProfile: NamespaceValue<2>, Contacts: NamespaceValue<3>, ConvoInfoVolatile: NamespaceValue<4>, UserGroups: NamespaceValue<5>, GroupMessages: NamespaceValue<11>, GroupKeys: NamespaceValue<12>, GroupInfo: NamespaceValue<13>, GroupMembers: NamespaceValue<14>};
  NotificationMode: {All: NotificationModeValue<1>, defaulted: NotificationModeValue<0>, disabled: NotificationModeValue<2>, mentions_only: NotificationModeValue<3>};
  ExpirationMode: {None: ExpirationModeValue<0>, AfterSend: ExpirationModeValue<1>, AfterRead: ExpirationModeValue<2>};
  WPushResultStruct: {new(_0: number, _1: EmbindString, _2: StringVector, _3: Namespace): WPushResultStruct};
  WKeysPushResultStruct: {};
  WGroupPushResultStruct: {};
  KeysDecryptResult: {};
  UstringVector: {new(): UstringVector};
  ContactInfoVector: {new(): ContactInfoVector};
  LegacyGroupInfoVector: {new(): LegacyGroupInfoVector};
  GroupInfoVector: {new(): GroupInfoVector};
  CommunityInfoVector: {new(): CommunityInfoVector};
  MemberInGroupVector: {new(): MemberInGroupVector};
  StringVector: {new(): StringVector};
  MergeStructVector: {new(): MergeStructVector};
  MergeStructGroupKeysVector: {new(): MergeStructGroupKeysVector};
  VectorOfKeysDecryptResult: {new(): VectorOfKeysDecryptResult};
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
