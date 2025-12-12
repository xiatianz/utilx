import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "503eb991-6d94-42ba-9612-c734855fc9ea",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/blog/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2e5-GivDGS2VON3Gbi8UrZdXgq1l4tg\"",
    "mtime": "2025-12-12T04:22:24.667Z",
    "size": 741,
    "path": "../public/favicon.ico"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"326-2FtGHlWP/EBAMRIJwdEYVI0q7VY\"",
    "mtime": "2025-12-12T04:22:24.668Z",
    "size": 806,
    "path": "../public/favicon.png"
  },
  "/icon-192.png": {
    "type": "image/png",
    "etag": "\"326-2FtGHlWP/EBAMRIJwdEYVI0q7VY\"",
    "mtime": "2025-12-12T04:22:24.666Z",
    "size": 806,
    "path": "../public/icon-192.png"
  },
  "/icon-256.png": {
    "type": "image/png",
    "etag": "\"136f-c353DH8+BnNQGNuU4n89Xn1WbZ8\"",
    "mtime": "2025-12-12T04:22:24.667Z",
    "size": 4975,
    "path": "../public/icon-256.png"
  },
  "/icon-512.png": {
    "type": "image/png",
    "etag": "\"16d9-ra1ljKQyxGWhbCUhj497chUniAY\"",
    "mtime": "2025-12-12T04:22:24.667Z",
    "size": 5849,
    "path": "../public/icon-512.png"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"365e-TB69duPD8GnjmkXMRML3s+tF+PY\"",
    "mtime": "2025-12-12T04:22:24.668Z",
    "size": 13918,
    "path": "../public/logo.png"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"453-Lb9OraSGZSg+0PzUFemW6No7FKY\"",
    "mtime": "2025-12-12T04:22:24.667Z",
    "size": 1107,
    "path": "../public/logo.svg"
  },
  "/manifest.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"47f-yQQup1C2dm+2TC5v9d4/fVBtPMg\"",
    "mtime": "2025-12-12T04:22:24.593Z",
    "size": 1151,
    "path": "../public/manifest.webmanifest"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"387-yP8M/yw8xB7jXqiTsDzIQgXNGo4\"",
    "mtime": "2025-12-12T04:22:24.668Z",
    "size": 903,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"cdb-dkyCdzmcpC7lJ/1jV0wCudS/bgs\"",
    "mtime": "2025-12-12T04:22:24.667Z",
    "size": 3291,
    "path": "../public/sitemap.xml"
  },
  "/snapshot.png": {
    "type": "image/png",
    "etag": "\"73de3-E1vCpzv3IPGWKvFJTNLSXfDSwoU\"",
    "mtime": "2025-12-12T04:22:24.676Z",
    "size": 474595,
    "path": "../public/snapshot.png"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3661-BXKV9az9BrCF+/t9ugr014Q2H7Q\"",
    "mtime": "2025-12-12T04:22:26.282Z",
    "size": 13921,
    "path": "../public/sw.js"
  },
  "/workbox-66610c77.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"53c5-mgzUyuLPVfNfn2QRhXQ5JPeCVf0\"",
    "mtime": "2025-12-12T04:22:26.282Z",
    "size": 21445,
    "path": "../public/workbox-66610c77.js"
  },
  "/blog/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f3-p3B5GGZFSNMY/QbhDdpLUEqw/lU\"",
    "mtime": "2025-12-12T04:22:24.666Z",
    "size": 243,
    "path": "../public/blog/index.html"
  },
  "/ai/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-gf61nqX2lA8GRFkTG7iZxD3tsOA\"",
    "mtime": "2025-12-12T04:22:24.575Z",
    "size": 69,
    "path": "../public/ai/_payload.json"
  },
  "/ai/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"2e690-FIk9sbpQ7KzG+kM25MzfYauxgvI\"",
    "mtime": "2025-12-12T04:22:24.565Z",
    "size": 190096,
    "path": "../public/ai/index.html"
  },
  "/crypto/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-pPvDt5u7uBEI+M3GWBUWzLRaekg\"",
    "mtime": "2025-12-12T04:22:24.574Z",
    "size": 69,
    "path": "../public/crypto/_payload.json"
  },
  "/crypto/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"28256-6dIk1rxnX9vG4MAYGpXbaYxZp/Y\"",
    "mtime": "2025-12-12T04:22:24.564Z",
    "size": 164438,
    "path": "../public/crypto/index.html"
  },
  "/dev/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-pPvDt5u7uBEI+M3GWBUWzLRaekg\"",
    "mtime": "2025-12-12T04:22:24.574Z",
    "size": 69,
    "path": "../public/dev/_payload.json"
  },
  "/dev/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"27881-42zdgrPYeL2uPC3l22nEErKD8AY\"",
    "mtime": "2025-12-12T04:22:24.564Z",
    "size": 161921,
    "path": "../public/dev/index.html"
  },
  "/_nuxt/-DQJA1LI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c62-VWxAWK6A5kZXi85KV5IFTyVlHCA\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 15458,
    "path": "../public/_nuxt/-DQJA1LI.js"
  },
  "/_nuxt/-eVnGmxg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41a2-0sCy235ayoRJYPsLjUSny3aRViM\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 16802,
    "path": "../public/_nuxt/-eVnGmxg.js"
  },
  "/_nuxt/2jMXb9Tp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c-lTw7mWiDjhslsSdQ9Z0QPAJvct4\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 156,
    "path": "../public/_nuxt/2jMXb9Tp.js"
  },
  "/_nuxt/3CRSV-47.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"387a-1hGuQdaULTq7nSOdiacMcFQNpLU\"",
    "mtime": "2025-12-12T04:22:24.620Z",
    "size": 14458,
    "path": "../public/_nuxt/3CRSV-47.js"
  },
  "/_nuxt/3IwUeceH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd-VfYvqg+SkDytFg4XD3T5H1ecBKY\"",
    "mtime": "2025-12-12T04:22:24.620Z",
    "size": 973,
    "path": "../public/_nuxt/3IwUeceH.js"
  },
  "/_nuxt/47TDPxKH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d31-pdoouP2FLaYDb0sfPFNuKgZUMAE\"",
    "mtime": "2025-12-12T04:22:24.620Z",
    "size": 11569,
    "path": "../public/_nuxt/47TDPxKH.js"
  },
  "/_nuxt/4T928kbW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"104-XSROICWk401G1kXFP2fYpq3hO0E\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 260,
    "path": "../public/_nuxt/4T928kbW.js"
  },
  "/_nuxt/6cSan2Wg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5833-ZyXNc2TxU7APuG0JNEZO4Mn5s5c\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 22579,
    "path": "../public/_nuxt/6cSan2Wg.js"
  },
  "/_nuxt/6zB4auHk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a11-YNEhua5cBZOpKFq95StxrlC86yU\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 14865,
    "path": "../public/_nuxt/6zB4auHk.js"
  },
  "/_nuxt/7xNl1BXv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1339-4E5hPsUIoiV5zYo/2FjqplcluvY\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 4921,
    "path": "../public/_nuxt/7xNl1BXv.js"
  },
  "/_nuxt/AUJSDaV8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"147-5iQSxdD5fPoxAtcxF49NAXU7E5Y\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 327,
    "path": "../public/_nuxt/AUJSDaV8.js"
  },
  "/_nuxt/B-BKX88A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5661-MRodBhSXyHB5ZXTcbS37GqVqaIk\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 22113,
    "path": "../public/_nuxt/B-BKX88A.js"
  },
  "/_nuxt/B-fbZyPE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ae0-bRJpPpJb+pFXnaHTS8bkuwG9j/E\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 19168,
    "path": "../public/_nuxt/B-fbZyPE.js"
  },
  "/_nuxt/B-mTY5Tg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d9-w3x/NnpHx+Q/reyfdbizIMoPWv4\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 473,
    "path": "../public/_nuxt/B-mTY5Tg.js"
  },
  "/_nuxt/B03HrVNV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ad-dPbomH/o/YUVpUhjvFnbEp8BGEE\"",
    "mtime": "2025-12-12T04:22:24.621Z",
    "size": 1197,
    "path": "../public/_nuxt/B03HrVNV.js"
  },
  "/_nuxt/B4LEj4Rd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36e9-BDBx3spq6j9ypXXJ9aFWSZ0P48A\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 14057,
    "path": "../public/_nuxt/B4LEj4Rd.js"
  },
  "/_nuxt/B4tAs4Np.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4223-jHkRsT3AyVEMsJLKs5SaaHDKfdc\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 16931,
    "path": "../public/_nuxt/B4tAs4Np.js"
  },
  "/_nuxt/B5bNAPSc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"135-/LZV8vOT3+yzMEb1bOt1ZZZunLc\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 309,
    "path": "../public/_nuxt/B5bNAPSc.js"
  },
  "/_nuxt/B7U6Cv8W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2789-9mZhRt+kV5Ca4t7CSxI85Z1ODxY\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 10121,
    "path": "../public/_nuxt/B7U6Cv8W.js"
  },
  "/_nuxt/B8CJtVZ5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e62-SgiDmvGeHSv/7MRfX+ozKSxlFwc\"",
    "mtime": "2025-12-12T04:22:24.622Z",
    "size": 11874,
    "path": "../public/_nuxt/B8CJtVZ5.js"
  },
  "/_nuxt/B8QRyNMs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e9-29LkxRtmqFo5VmiRmALoapUe7lA\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 233,
    "path": "../public/_nuxt/B8QRyNMs.js"
  },
  "/_nuxt/B9nKIxkR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33d4-uHiwlwJbu4kOQWGWVYBQoxe6iHw\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 13268,
    "path": "../public/_nuxt/B9nKIxkR.js"
  },
  "/_nuxt/BAQf7uUj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"639f-A1cJmIsXBxRAF/+zTF/T9RInS14\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 25503,
    "path": "../public/_nuxt/BAQf7uUj.js"
  },
  "/_nuxt/BAefu-We.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18e8-N8SYs1kFLe/vZ5QdcYyPVkcs9rg\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 6376,
    "path": "../public/_nuxt/BAefu-We.js"
  },
  "/_nuxt/BAjQDks2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3601-S9ntLd3IKdfVI9Lwyp2mvVAF1YM\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 13825,
    "path": "../public/_nuxt/BAjQDks2.js"
  },
  "/_nuxt/BBggiToW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"306f-jI9EJ6jkfa9vdQ26LdVtvb+9aIQ\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 12399,
    "path": "../public/_nuxt/BBggiToW.js"
  },
  "/_nuxt/BCHSGQTj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"382c-z/y37+pZYIyNuP0wK5OSUcxAQ1Q\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 14380,
    "path": "../public/_nuxt/BCHSGQTj.js"
  },
  "/_nuxt/BDYE61or.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"119-Nf5ub/U8m1jBvIs4zuuk8auAy5g\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 281,
    "path": "../public/_nuxt/BDYE61or.js"
  },
  "/_nuxt/BFRCNNe4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5-4kU6+Lp51xzQ7MpyYz+LAaBgONo\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 245,
    "path": "../public/_nuxt/BFRCNNe4.js"
  },
  "/_nuxt/BGnBrJB7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c6-bepALOI3Di8yDkvtjBbCmhmDv70\"",
    "mtime": "2025-12-12T04:22:24.624Z",
    "size": 198,
    "path": "../public/_nuxt/BGnBrJB7.js"
  },
  "/_nuxt/BHpD2E-p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5310-hhmcUT6V0CQP0oP0Q2N233ZOefs\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 21264,
    "path": "../public/_nuxt/BHpD2E-p.js"
  },
  "/_nuxt/BHtPH9dt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"640c-DI8IyUvhd4P5bxXtDxZ6UTNs58s\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 25612,
    "path": "../public/_nuxt/BHtPH9dt.js"
  },
  "/_nuxt/BIbbmz6B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"143-sOew1nrOke2NudZOOmRHH1+8pM8\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 323,
    "path": "../public/_nuxt/BIbbmz6B.js"
  },
  "/_nuxt/BIl4cyR9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1681-8OY0+UaG+gUiKJSGiH59s2B32fM\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 5761,
    "path": "../public/_nuxt/BIl4cyR9.js"
  },
  "/_nuxt/BJDHZFrW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f2-rRzLccpRwr85lwbgmGLXnbXk3z4\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 242,
    "path": "../public/_nuxt/BJDHZFrW.js"
  },
  "/_nuxt/BJZYosCy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"189-A6OofKgyDQGDuPGocoohWY2IBQ8\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 393,
    "path": "../public/_nuxt/BJZYosCy.js"
  },
  "/_nuxt/BJyqfcRx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1eb-f38VNppksbvl89XeeK5Za1JsyoE\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 491,
    "path": "../public/_nuxt/BJyqfcRx.js"
  },
  "/_nuxt/BNVVpiwn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e9-CrutDwPQ0y4/NvMd6WpdkzgwdTU\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 1513,
    "path": "../public/_nuxt/BNVVpiwn.js"
  },
  "/_nuxt/BNoZUaGA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13a4-AFC+PdC1ldfb3Z0Ws93A+HWUAbA\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 5028,
    "path": "../public/_nuxt/BNoZUaGA.js"
  },
  "/_nuxt/BP6Cft7q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7-dLLWNWJIy9b3lQHw61QLSWPBCMo\"",
    "mtime": "2025-12-12T04:22:24.625Z",
    "size": 247,
    "path": "../public/_nuxt/BP6Cft7q.js"
  },
  "/_nuxt/BR9uVBAU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e3d1-xS73qMoe8PHpxtTQTE1pkMf73/E\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 58321,
    "path": "../public/_nuxt/BR9uVBAU.js"
  },
  "/_nuxt/BS7_P6T3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ce2-x2juCoD3YqYPwC5O/eIeFu7HG7M\"",
    "mtime": "2025-12-12T04:22:24.626Z",
    "size": 11490,
    "path": "../public/_nuxt/BS7_P6T3.js"
  },
  "/_nuxt/BSLClKPP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ca-PzC+q1fatD50ByY9iZUtTTpN3UU\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 202,
    "path": "../public/_nuxt/BSLClKPP.js"
  },
  "/_nuxt/BTH2Dn6y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"262-2NnJwKfGcCnC/anqppR/LpWejWU\"",
    "mtime": "2025-12-12T04:22:24.626Z",
    "size": 610,
    "path": "../public/_nuxt/BTH2Dn6y.js"
  },
  "/_nuxt/BUYFD_dQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10f-G/JRqtIPhQa7EJaIXS4nhSOgA5Y\"",
    "mtime": "2025-12-12T04:22:24.628Z",
    "size": 271,
    "path": "../public/_nuxt/BUYFD_dQ.js"
  },
  "/_nuxt/BVbWQf7J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e5-6XgsIHIEK7yLbGpqzk4PKtSeQC8\"",
    "mtime": "2025-12-12T04:22:24.626Z",
    "size": 229,
    "path": "../public/_nuxt/BVbWQf7J.js"
  },
  "/_nuxt/BVomMt70.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a11-C3l9ZB9pOZKZ9l0xXj/RG6Mm/d0\"",
    "mtime": "2025-12-12T04:22:24.626Z",
    "size": 23057,
    "path": "../public/_nuxt/BVomMt70.js"
  },
  "/_nuxt/BW9AuMMm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39d1-WRf9pPCv2/wOFD0xqArdGj6RZoA\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 14801,
    "path": "../public/_nuxt/BW9AuMMm.js"
  },
  "/_nuxt/B_Rzv376.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec1-R6oPJsNYx8c5kNRY/i+AE5ehojc\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 3777,
    "path": "../public/_nuxt/B_Rzv376.js"
  },
  "/_nuxt/BaG5JeHk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"131-FRrz/mv0rRS7tqLOpp+ejDzdLNE\"",
    "mtime": "2025-12-12T04:22:24.626Z",
    "size": 305,
    "path": "../public/_nuxt/BaG5JeHk.js"
  },
  "/_nuxt/Bbet6lDt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"100-WhZ2VBXtztNwLl1R45pjvfYObQ8\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 256,
    "path": "../public/_nuxt/Bbet6lDt.js"
  },
  "/_nuxt/BdEdv-PL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4374-HEWk4EtjRP1eIwd78iaHRZcskbo\"",
    "mtime": "2025-12-12T04:22:24.627Z",
    "size": 17268,
    "path": "../public/_nuxt/BdEdv-PL.js"
  },
  "/_nuxt/Bf3vhxf0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6-PsnBZL6RQurW608YvB17zdo7oAs\"",
    "mtime": "2025-12-12T04:22:24.628Z",
    "size": 166,
    "path": "../public/_nuxt/Bf3vhxf0.js"
  },
  "/_nuxt/BfGcQNJd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4424-yBUox86v7K+4mKQoxJp6DD3BFoc\"",
    "mtime": "2025-12-12T04:22:24.628Z",
    "size": 17444,
    "path": "../public/_nuxt/BfGcQNJd.js"
  },
  "/_nuxt/BfJpgO3B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-e8b7zKbh8eIeiyhgIU3ZKTe1N9Q\"",
    "mtime": "2025-12-12T04:22:24.628Z",
    "size": 181,
    "path": "../public/_nuxt/BfJpgO3B.js"
  },
  "/_nuxt/Bh8kGaIw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"138-KVeQ2+UOFcwBB6MpUgKzDs4Ky6w\"",
    "mtime": "2025-12-12T04:22:24.628Z",
    "size": 312,
    "path": "../public/_nuxt/Bh8kGaIw.js"
  },
  "/_nuxt/BhVxfbsb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e1-XVgW4WU9cPQlFX3qwY9yxgrYJjE\"",
    "mtime": "2025-12-12T04:22:24.629Z",
    "size": 225,
    "path": "../public/_nuxt/BhVxfbsb.js"
  },
  "/_nuxt/Bj5LElQw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"533e-eRhyIbtix1Xe4vtq4EUrmgewmJw\"",
    "mtime": "2025-12-12T04:22:24.630Z",
    "size": 21310,
    "path": "../public/_nuxt/Bj5LElQw.js"
  },
  "/_nuxt/Bluep4Ee.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c-IWJNtMLvF0vZTF1XVxj4o1yg4p8\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 156,
    "path": "../public/_nuxt/Bluep4Ee.js"
  },
  "/_nuxt/Bmuwy9O7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"137-pcbfhDvhlvcIrWHXCcoxlK4ZGEo\"",
    "mtime": "2025-12-12T04:22:24.629Z",
    "size": 311,
    "path": "../public/_nuxt/Bmuwy9O7.js"
  },
  "/_nuxt/Bnwop3Xl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6225-2PhS3CiRyFH9Emmm/8vK+eFHedE\"",
    "mtime": "2025-12-12T04:22:24.630Z",
    "size": 25125,
    "path": "../public/_nuxt/Bnwop3Xl.js"
  },
  "/_nuxt/BoWXJKm8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3da0-0hHPtIgjoSjhucOUU4cL4BJxr/k\"",
    "mtime": "2025-12-12T04:22:24.629Z",
    "size": 15776,
    "path": "../public/_nuxt/BoWXJKm8.js"
  },
  "/_nuxt/BqQSQS-L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4889-vJDvDNFQSORIgoQR9DeU8BSfhEY\"",
    "mtime": "2025-12-12T04:22:24.630Z",
    "size": 18569,
    "path": "../public/_nuxt/BqQSQS-L.js"
  },
  "/_nuxt/Bt5p-un4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de-bnH5Ofp3NpEocH4LghggiFqcGks\"",
    "mtime": "2025-12-12T04:22:24.630Z",
    "size": 222,
    "path": "../public/_nuxt/Bt5p-un4.js"
  },
  "/_nuxt/BuCd20m7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b-cZxyMjvVBgMoO1CLHRFriARTYSc\"",
    "mtime": "2025-12-12T04:22:24.631Z",
    "size": 155,
    "path": "../public/_nuxt/BuCd20m7.js"
  },
  "/_nuxt/BvJ6sVhS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18537-zrEHvYYV5RYdN13gXAPzPd0D/hg\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 99639,
    "path": "../public/_nuxt/BvJ6sVhS.js"
  },
  "/_nuxt/BwieboK4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"169-svxvGgTkd+ix2YD3q6wQG5h5IRQ\"",
    "mtime": "2025-12-12T04:22:24.631Z",
    "size": 361,
    "path": "../public/_nuxt/BwieboK4.js"
  },
  "/_nuxt/ByBUCkMP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8-b/LvierdBtglqnATDv739p6MoP8\"",
    "mtime": "2025-12-12T04:22:24.631Z",
    "size": 248,
    "path": "../public/_nuxt/ByBUCkMP.js"
  },
  "/_nuxt/BzNXGlgu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8-V7AWZGXRDXLmKnb0Ehi4pNxUuRM\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 248,
    "path": "../public/_nuxt/BzNXGlgu.js"
  },
  "/_nuxt/C-IdLXny.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32ad-HlgKyivMLMG0WBbY54tOFOdPzso\"",
    "mtime": "2025-12-12T04:22:24.631Z",
    "size": 12973,
    "path": "../public/_nuxt/C-IdLXny.js"
  },
  "/_nuxt/C-LEKrTT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cc-OVRcihy0zPCwQA7HR8bJKAYL5eE\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 460,
    "path": "../public/_nuxt/C-LEKrTT.js"
  },
  "/_nuxt/C-pOhJ0D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13f-T7VhiZ+LpeLf68D4gd5J6WegKKw\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 319,
    "path": "../public/_nuxt/C-pOhJ0D.js"
  },
  "/_nuxt/C-xPEUWP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45d2-6Lfisuspu2jocm9axXp6s2UcpfM\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 17874,
    "path": "../public/_nuxt/C-xPEUWP.js"
  },
  "/_nuxt/C0Rlrcoy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b9c-sPbZRCii4LQs1AA2sMQvCzqiMD4\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 39836,
    "path": "../public/_nuxt/C0Rlrcoy.js"
  },
  "/_nuxt/C19KnIO2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"451a-NaGO4He7iistA8k455iZ6C2uf28\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 17690,
    "path": "../public/_nuxt/C19KnIO2.js"
  },
  "/_nuxt/C1JgnPlw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e5-Z3D98kRf6EXI3ZHgdzB2dHzCxsQ\"",
    "mtime": "2025-12-12T04:22:24.632Z",
    "size": 229,
    "path": "../public/_nuxt/C1JgnPlw.js"
  },
  "/_nuxt/C1Xt7uBH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f1-D8aeghAfFlUJweu7NAgLEgno4zQ\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 241,
    "path": "../public/_nuxt/C1Xt7uBH.js"
  },
  "/_nuxt/C2-wA9Ee.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bbb-PG5LL0L15A2phjj+632KoBFV/No\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 3003,
    "path": "../public/_nuxt/C2-wA9Ee.js"
  },
  "/_nuxt/C2LxMhrj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a5d-veRZxwQ0tbz7efpN5xJCUQZ4z4g\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 14941,
    "path": "../public/_nuxt/C2LxMhrj.js"
  },
  "/_nuxt/C4qu3Zn0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"356a-8cfLsEDvfUSFcChVpHk9PVcCBMY\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 13674,
    "path": "../public/_nuxt/C4qu3Zn0.js"
  },
  "/_nuxt/C5_DC4Ru.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3470-e+cVQJ4AAFxnlzzhTmVcggtuyIo\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 13424,
    "path": "../public/_nuxt/C5_DC4Ru.js"
  },
  "/_nuxt/C6C7R36d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34f6-5kYJ1GkgM87WEIAY2Qh5TC+HmSI\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 13558,
    "path": "../public/_nuxt/C6C7R36d.js"
  },
  "/_nuxt/C71nLTaj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1048-/RPgDUhlgjYVw/GREC1J48ezjtM\"",
    "mtime": "2025-12-12T04:22:24.633Z",
    "size": 4168,
    "path": "../public/_nuxt/C71nLTaj.js"
  },
  "/_nuxt/C857Gq_t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51e2-h/GaNRX0w9a0J/Y8HiwKrL/bXfs\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 20962,
    "path": "../public/_nuxt/C857Gq_t.js"
  },
  "/_nuxt/C9fgGo0o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"383e-IMG5evj4Q6myyQMx7blpjP2GGLQ\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 14398,
    "path": "../public/_nuxt/C9fgGo0o.js"
  },
  "/_nuxt/C9j_v7P4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25b6-ATr+iGuXhgClhZutIUyI2bMyel4\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 9654,
    "path": "../public/_nuxt/C9j_v7P4.js"
  },
  "/_nuxt/CAc88mq4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f4a-I4WMpS51i0u/k6dMYiJ3KiD2cN0\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 12106,
    "path": "../public/_nuxt/CAc88mq4.js"
  },
  "/_nuxt/CE1G-McA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f3-ZzFXd6i6fqKCtUh5P1kdubTrulk\"",
    "mtime": "2025-12-12T04:22:24.634Z",
    "size": 755,
    "path": "../public/_nuxt/CE1G-McA.js"
  },
  "/_nuxt/CEc21t2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7233-97KdXfccC3nbRt8VMlykoFX1pjY\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 29235,
    "path": "../public/_nuxt/CEc21t2U.js"
  },
  "/_nuxt/CFiHDJfE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"298-riW1OalMMx04WyRmCxIkmtMo0mg\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 664,
    "path": "../public/_nuxt/CFiHDJfE.js"
  },
  "/_nuxt/CGE3EZBC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3bc7-nV4OUNPF3UppqrvipLmO8Ur8aOo\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 15303,
    "path": "../public/_nuxt/CGE3EZBC.js"
  },
  "/_nuxt/CGFaHWDL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"769c-7UBsHDMylDv11MZ5L355AWgqIAM\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 30364,
    "path": "../public/_nuxt/CGFaHWDL.js"
  },
  "/_nuxt/CHQKEZUX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20e0-DiKCQx8MRo/9MnnCy7XrQP41oHU\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 8416,
    "path": "../public/_nuxt/CHQKEZUX.js"
  },
  "/_nuxt/CI3NYAWI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45ab-sFsmOqMAmeIANNW1vXezUhxi1EM\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 17835,
    "path": "../public/_nuxt/CI3NYAWI.js"
  },
  "/_nuxt/CIhFwY30.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3188-IIrcPPlLvGKcnERKz7UzumMoJI8\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 12680,
    "path": "../public/_nuxt/CIhFwY30.js"
  },
  "/_nuxt/CJqtj3AY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"194a-6L08ruZ0zAh2vTLByHDtxhWiMsQ\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 6474,
    "path": "../public/_nuxt/CJqtj3AY.js"
  },
  "/_nuxt/CL3xdsPI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"394e-vdHjR2vS6lipoe/8t+0MdBc2rmE\"",
    "mtime": "2025-12-12T04:22:24.635Z",
    "size": 14670,
    "path": "../public/_nuxt/CL3xdsPI.js"
  },
  "/_nuxt/CM9H2kK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1de-7bP63FOE6w7NqWl+6ltvzh+uxcE\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 478,
    "path": "../public/_nuxt/CM9H2kK5.js"
  },
  "/_nuxt/CMkM_5ka.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6f53-T9Qzj1RmfklheanRH38+5LjUI0Q\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 28499,
    "path": "../public/_nuxt/CMkM_5ka.js"
  },
  "/_nuxt/COAnJI-g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"364e-VHDhkaIEo4iMtsP/Z+vyHuel8Vg\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 13902,
    "path": "../public/_nuxt/COAnJI-g.js"
  },
  "/_nuxt/CQWucd-R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d9-aWuGA2qmJBSB2kzBvrWCD9zitz4\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 1497,
    "path": "../public/_nuxt/CQWucd-R.js"
  },
  "/_nuxt/CQX6j-KH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"501c-hMb/RpJ2QYmLC2NELA9zszuWX5Q\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 20508,
    "path": "../public/_nuxt/CQX6j-KH.js"
  },
  "/_nuxt/CQYC_IK1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16b-cK1Duwma6XXFrgthed0E4QR7b+k\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 363,
    "path": "../public/_nuxt/CQYC_IK1.js"
  },
  "/_nuxt/CRvidJJ3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"178-f8/l6d9INbSKffphhDDdr5kNGa0\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 376,
    "path": "../public/_nuxt/CRvidJJ3.js"
  },
  "/_nuxt/CT111hnL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fa-wa3u7GwVn1E1q+2Hy6RSDvzBxAI\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 250,
    "path": "../public/_nuxt/CT111hnL.js"
  },
  "/_nuxt/CUgNkTIC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3044-O3nhB4eW55dE6BRVrO7Y8t2yJPo\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 12356,
    "path": "../public/_nuxt/CUgNkTIC.js"
  },
  "/_nuxt/CWGBtgjI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9aa-YmLyXEthoYa+gZFHwU+1Cbi42ho\"",
    "mtime": "2025-12-12T04:22:24.636Z",
    "size": 2474,
    "path": "../public/_nuxt/CWGBtgjI.js"
  },
  "/_nuxt/CXxkUGDY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41f5-aHHU931h9xHI8QphLGfygrVwB84\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 16885,
    "path": "../public/_nuxt/CXxkUGDY.js"
  },
  "/_nuxt/CYtIltmC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"151-5M8ECTclAPQDtpMNacUEjGlJl3k\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 337,
    "path": "../public/_nuxt/CYtIltmC.js"
  },
  "/_nuxt/CcTULTlZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b5-q96OodmYwFmTJ80JB9mvmwasojk\"",
    "mtime": "2025-12-12T04:22:24.640Z",
    "size": 2229,
    "path": "../public/_nuxt/CcTULTlZ.js"
  },
  "/_nuxt/CdEk-1Ol.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bb-QzHThXPdwVZNn5dPepgvAhRKZTc\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 187,
    "path": "../public/_nuxt/CdEk-1Ol.js"
  },
  "/_nuxt/Cf13R2hq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30a9-2wLHUaPEa9pJY3oUdc7h7TjlEJU\"",
    "mtime": "2025-12-12T04:22:24.637Z",
    "size": 12457,
    "path": "../public/_nuxt/Cf13R2hq.js"
  },
  "/_nuxt/CgBn4Hdk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fd-fuKbGlRT6CSWkkKZuESKaCgdDbY\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 253,
    "path": "../public/_nuxt/CgBn4Hdk.js"
  },
  "/_nuxt/CgLtbCVP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0-psAfJrbuls2R2lVXyFJ6hgk4MGY\"",
    "mtime": "2025-12-12T04:22:24.638Z",
    "size": 160,
    "path": "../public/_nuxt/CgLtbCVP.js"
  },
  "/_nuxt/CiHxL17y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"251c-r8qbdCq3fJQOGwlLmBRrxtvGAFc\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 9500,
    "path": "../public/_nuxt/CiHxL17y.js"
  },
  "/_nuxt/CkGXSZag.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d02-P7uUfdBIgZFfsxVe8vCA2tkIeiM\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 15618,
    "path": "../public/_nuxt/CkGXSZag.js"
  },
  "/_nuxt/CkOcrEfA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"209-qPhRKggTx3bX7Gt8YtV6d0Y1QFg\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 521,
    "path": "../public/_nuxt/CkOcrEfA.js"
  },
  "/_nuxt/CkuNl3aW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-LlhvjOQ/pEPp0NKVI+nKoao21KE\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 199,
    "path": "../public/_nuxt/CkuNl3aW.js"
  },
  "/_nuxt/ClT_iCD-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"df-qIrjhtW/zgRUGHjQo75Z2KYwI8A\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 223,
    "path": "../public/_nuxt/ClT_iCD-.js"
  },
  "/_nuxt/CoYN_0Tw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"55dd-ByvUBIPUGF82nn7yB80ku5zLWR4\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 21981,
    "path": "../public/_nuxt/CoYN_0Tw.js"
  },
  "/_nuxt/CpRRYx09.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3801-nvdL9QE7SCekDQfxtnki1j1mySM\"",
    "mtime": "2025-12-12T04:22:24.640Z",
    "size": 14337,
    "path": "../public/_nuxt/CpRRYx09.js"
  },
  "/_nuxt/CqOJjmyM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4011-Onp9/OKLKzCQ3Rlk161lBkV6Jac\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 16401,
    "path": "../public/_nuxt/CqOJjmyM.js"
  },
  "/_nuxt/CrH2arjp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24ef-ZiU75jB1fgw8Tupnon6nNmePHDA\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 9455,
    "path": "../public/_nuxt/CrH2arjp.js"
  },
  "/_nuxt/CrsSu3IW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2881-cNpZbOO//5CdoVQY74Vc9JNA4kc\"",
    "mtime": "2025-12-12T04:22:24.641Z",
    "size": 10369,
    "path": "../public/_nuxt/CrsSu3IW.js"
  },
  "/_nuxt/CxYhlnSH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"607-KstkGFsef8kdOtXHO2H1z6rNJoU\"",
    "mtime": "2025-12-12T04:22:24.641Z",
    "size": 1543,
    "path": "../public/_nuxt/CxYhlnSH.js"
  },
  "/_nuxt/CylPS_YL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24b8-Tzx5V3sefxFNOPoeKasZiXR/Ev8\"",
    "mtime": "2025-12-12T04:22:24.640Z",
    "size": 9400,
    "path": "../public/_nuxt/CylPS_YL.js"
  },
  "/_nuxt/CzywK5mu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1106-LZH5X7KRH1Fz7NJP33htqbnqLgo\"",
    "mtime": "2025-12-12T04:22:24.639Z",
    "size": 4358,
    "path": "../public/_nuxt/CzywK5mu.js"
  },
  "/_nuxt/D3dtfl-B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"56b4-Gem/kGBuLZBwqLWS5vRvAYG5Jew\"",
    "mtime": "2025-12-12T04:22:24.641Z",
    "size": 22196,
    "path": "../public/_nuxt/D3dtfl-B.js"
  },
  "/_nuxt/D4_WiTKY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22df-AD4rSnql+T/9IcH+g4FRRxbM5zw\"",
    "mtime": "2025-12-12T04:22:24.641Z",
    "size": 8927,
    "path": "../public/_nuxt/D4_WiTKY.js"
  },
  "/_nuxt/D4g1_bQ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13ff-2IG7xCjJcf8KVSLKWa4w5oNUVLo\"",
    "mtime": "2025-12-12T04:22:24.640Z",
    "size": 5119,
    "path": "../public/_nuxt/D4g1_bQ7.js"
  },
  "/_nuxt/D5zKZgwy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f70-HwSxboNAHcnPGE10UPz8rPE1gVk\"",
    "mtime": "2025-12-12T04:22:24.641Z",
    "size": 16240,
    "path": "../public/_nuxt/D5zKZgwy.js"
  },
  "/_nuxt/D6vmm9zy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f1-OMs5HgYgqUPGR68RR11Unun8xMM\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 1521,
    "path": "../public/_nuxt/D6vmm9zy.js"
  },
  "/_nuxt/D7HZbR80.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"87-3dzHk9degZ3BAfU+6k9xsAZnBL8\"",
    "mtime": "2025-12-12T04:22:24.643Z",
    "size": 135,
    "path": "../public/_nuxt/D7HZbR80.js"
  },
  "/_nuxt/DCE4Sux3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d54-kKrBfQxnMojIo8gFK6SVU4h5q6Y\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 7508,
    "path": "../public/_nuxt/DCE4Sux3.js"
  },
  "/_nuxt/DE5Dj-IL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e5-mCDpfvlk8LpD58iQ2ytdeAWzPVw\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 485,
    "path": "../public/_nuxt/DE5Dj-IL.js"
  },
  "/_nuxt/DESX2TF9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ea-jyvKUvYb3qjPg/JcvJCS1K/FpW4\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 234,
    "path": "../public/_nuxt/DESX2TF9.js"
  },
  "/_nuxt/DEsTSaKd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3454d-XbQjWDRFIaOiBAeUIRyyF0kr/sU\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 214349,
    "path": "../public/_nuxt/DEsTSaKd.js"
  },
  "/_nuxt/DG6vcccW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0a7-AuyS++ob0i/nyqDPS0X9huTXaio\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 41127,
    "path": "../public/_nuxt/DG6vcccW.js"
  },
  "/_nuxt/DGYVGxSA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8bb-zkgookdI+aScsn1Sc/FGqLsCfeA\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 2235,
    "path": "../public/_nuxt/DGYVGxSA.js"
  },
  "/_nuxt/DHIZlIKs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5352-B4qZ82+q3LaieJQEo4RCJpKu2Tg\"",
    "mtime": "2025-12-12T04:22:24.643Z",
    "size": 21330,
    "path": "../public/_nuxt/DHIZlIKs.js"
  },
  "/_nuxt/DILFbJzj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bf-nuVB2kMVBIHLDo2vVTRRqZLQv3M\"",
    "mtime": "2025-12-12T04:22:24.643Z",
    "size": 191,
    "path": "../public/_nuxt/DILFbJzj.js"
  },
  "/_nuxt/DJb2aM7w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"91-JyXqv3iuKppMyv/h/waL2ssiY1o\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 145,
    "path": "../public/_nuxt/DJb2aM7w.js"
  },
  "/_nuxt/DK3LAqEg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32ef-xbqRHgsZg/7GrVWGfuKXsh2lZkA\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 13039,
    "path": "../public/_nuxt/DK3LAqEg.js"
  },
  "/_nuxt/DKw_i5g2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c1-UFUxINU2kZ4xY0yHyQQjcSB10aw\"",
    "mtime": "2025-12-12T04:22:24.642Z",
    "size": 193,
    "path": "../public/_nuxt/DKw_i5g2.js"
  },
  "/_nuxt/DLiRRvGw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"604a-DrRGbiBcvTrdCgX092Hn0INbJrc\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 24650,
    "path": "../public/_nuxt/DLiRRvGw.js"
  },
  "/_nuxt/DMbfTJbs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3170-7rK8L/mABRYtKwco9z08fKev+Jo\"",
    "mtime": "2025-12-12T04:22:24.643Z",
    "size": 12656,
    "path": "../public/_nuxt/DMbfTJbs.js"
  },
  "/_nuxt/DPX0DEOu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f0-3qkskdMrQruNUTg5HKDfrtVtcu0\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 496,
    "path": "../public/_nuxt/DPX0DEOu.js"
  },
  "/_nuxt/DQRuqLVm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47e8-iwcJATHmebgu9bTtzIDe9TcPC2M\"",
    "mtime": "2025-12-12T04:22:24.643Z",
    "size": 18408,
    "path": "../public/_nuxt/DQRuqLVm.js"
  },
  "/_nuxt/DQcAei-x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0-RcCv01plKVJzV55rDBCluBgYN5o\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 208,
    "path": "../public/_nuxt/DQcAei-x.js"
  },
  "/_nuxt/DSVLKhcF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"760a-PNMZkRRb0D6zE87wBhAWP+0vKeQ\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 30218,
    "path": "../public/_nuxt/DSVLKhcF.js"
  },
  "/_nuxt/DToIq0UE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b67-KLTZzJ0noYORvwo3k6tGyzyMLH8\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 15207,
    "path": "../public/_nuxt/DToIq0UE.js"
  },
  "/_nuxt/DU2eUrP5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16b-EJZ4zxtPa+lYTdvFnoOcgMzpua0\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 363,
    "path": "../public/_nuxt/DU2eUrP5.js"
  },
  "/_nuxt/DUGW_D6E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d7-C/Gj63W5ue2J06TcAwbXgE/TzxY\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 215,
    "path": "../public/_nuxt/DUGW_D6E.js"
  },
  "/_nuxt/DUPD8JlR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"90-qv/IpcjvVKOfu6oiuGvKfbYhwl0\"",
    "mtime": "2025-12-12T04:22:24.644Z",
    "size": 144,
    "path": "../public/_nuxt/DUPD8JlR.js"
  },
  "/_nuxt/DUrx9CVo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e0-OlA83Y69zIkqq9aWr/MwgRvvpY0\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 224,
    "path": "../public/_nuxt/DUrx9CVo.js"
  },
  "/_nuxt/DWUU0Dvk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"124a-vD2hQqQ3WkbTNyBHU9NqZ4CwlhM\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 4682,
    "path": "../public/_nuxt/DWUU0Dvk.js"
  },
  "/_nuxt/DWwXOJOw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3770-igrkHziyu45MkPwxeGNTN+zA+8w\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 14192,
    "path": "../public/_nuxt/DWwXOJOw.js"
  },
  "/_nuxt/DX5CPuAb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ac8-dPtha28szYJYHCx2s2PCiPeF3OA\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 19144,
    "path": "../public/_nuxt/DX5CPuAb.js"
  },
  "/_nuxt/DYg6tsTl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e5-VXK6KJqw4x9utxFf9K1b1IRiByA\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 485,
    "path": "../public/_nuxt/DYg6tsTl.js"
  },
  "/_nuxt/DYmlGizd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d55-5Pu3XiMxIxXuUUcrAIwNSK7lOlc\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 11605,
    "path": "../public/_nuxt/DYmlGizd.js"
  },
  "/_nuxt/D_UkRux6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"332d-u4FdmvtLlgDN4okmKBIi4nX/U/k\"",
    "mtime": "2025-12-12T04:22:24.645Z",
    "size": 13101,
    "path": "../public/_nuxt/D_UkRux6.js"
  },
  "/_nuxt/DaapzKNk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3be7-S64j7Yd9tNbqsklTGjowwttwhlo\"",
    "mtime": "2025-12-12T04:22:24.646Z",
    "size": 15335,
    "path": "../public/_nuxt/DaapzKNk.js"
  },
  "/_nuxt/DbWJs76d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c5-yzSRlzf04adzKy47FxCSnK2RYsw\"",
    "mtime": "2025-12-12T04:22:24.646Z",
    "size": 197,
    "path": "../public/_nuxt/DbWJs76d.js"
  },
  "/_nuxt/Dbf_u826.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35d4-H3HOdRdcdHyAhq0ljdi+YBYHE2Q\"",
    "mtime": "2025-12-12T04:22:24.646Z",
    "size": 13780,
    "path": "../public/_nuxt/Dbf_u826.js"
  },
  "/_nuxt/DcS0tRMx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b46-TMwQtisHjgMj7Gjq2mtQUSlBhyE\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 15174,
    "path": "../public/_nuxt/DcS0tRMx.js"
  },
  "/_nuxt/DcTup8dn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66c7-/laOZ0VnWtR3PR857yBZlSgzIuY\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 26311,
    "path": "../public/_nuxt/DcTup8dn.js"
  },
  "/_nuxt/DdNFCvto.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e-3HIGJVUlgKf03NTlSCeJhr7giDQ\"",
    "mtime": "2025-12-12T04:22:24.647Z",
    "size": 110,
    "path": "../public/_nuxt/DdNFCvto.js"
  },
  "/_nuxt/DdR6vUJO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"149-V3xiUCjOUQ3M4FDLAagYzTSLlio\"",
    "mtime": "2025-12-12T04:22:24.647Z",
    "size": 329,
    "path": "../public/_nuxt/DdR6vUJO.js"
  },
  "/_nuxt/DdcmlNq-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5db-Qp6XL7vxy5QWRV5fViIwsHL4Gl0\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 1499,
    "path": "../public/_nuxt/DdcmlNq-.js"
  },
  "/_nuxt/DdwoZ5Mw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2489-AEqtENSPV4ztgCh6eEG6SobULEA\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 9353,
    "path": "../public/_nuxt/DdwoZ5Mw.js"
  },
  "/_nuxt/DelPE2GJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7a2c-SINTY8DP16byqs9jyz0pss9/vc0\"",
    "mtime": "2025-12-12T04:22:24.649Z",
    "size": 31276,
    "path": "../public/_nuxt/DelPE2GJ.js"
  },
  "/_nuxt/Dfde5gNO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f9-9u5YyoSNbW0//e5aH1sA6z/89x4\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 249,
    "path": "../public/_nuxt/Dfde5gNO.js"
  },
  "/_nuxt/DgpKRUf-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b4-EGyF1wXNjzk8brXxt7B3byXfQLY\"",
    "mtime": "2025-12-12T04:22:24.650Z",
    "size": 180,
    "path": "../public/_nuxt/DgpKRUf-.js"
  },
  "/_nuxt/Dhydd5YK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ff-3MYRilftVHPFHgzMDG/ATUZvPns\"",
    "mtime": "2025-12-12T04:22:24.650Z",
    "size": 1535,
    "path": "../public/_nuxt/Dhydd5YK.js"
  },
  "/_nuxt/DiR2oiIA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36b2-un/fqb44+C1ukxIvM+o8rSKRDT8\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 14002,
    "path": "../public/_nuxt/DiR2oiIA.js"
  },
  "/_nuxt/Dje4vGlh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"486b-kP78w3WcwejQNPvIeU7OAkzAGIk\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 18539,
    "path": "../public/_nuxt/Dje4vGlh.js"
  },
  "/_nuxt/DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 91,
    "path": "../public/_nuxt/DlAUqK2U.js"
  },
  "/_nuxt/DmM1wYz5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dd-3cQAH4eQSC8j2AjDm5yE7C1sVVw\"",
    "mtime": "2025-12-12T04:22:24.648Z",
    "size": 221,
    "path": "../public/_nuxt/DmM1wYz5.js"
  },
  "/_nuxt/DoUJ5c6w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e7a-tXjaetEldfJd5wlpoXF6ulQKfwk\"",
    "mtime": "2025-12-12T04:22:24.649Z",
    "size": 11898,
    "path": "../public/_nuxt/DoUJ5c6w.js"
  },
  "/_nuxt/DuvvCszs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99-+COv+BjohuC+8Wy4cTuHTPECk/E\"",
    "mtime": "2025-12-12T04:22:24.650Z",
    "size": 153,
    "path": "../public/_nuxt/DuvvCszs.js"
  },
  "/_nuxt/Dw5Y31bD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"281-dF653aBR6p55XHePDGK9L8Kmnvc\"",
    "mtime": "2025-12-12T04:22:24.650Z",
    "size": 641,
    "path": "../public/_nuxt/Dw5Y31bD.js"
  },
  "/_nuxt/DxJsqdFX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4d37-cemf9LBk2G7jhaKHzvZHyk/djGo\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 19767,
    "path": "../public/_nuxt/DxJsqdFX.js"
  },
  "/_nuxt/DxMdhrZm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19c-h8Pf8zKpNmLvnk0QhAMFwvsJQv4\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 412,
    "path": "../public/_nuxt/DxMdhrZm.js"
  },
  "/_nuxt/Dy2XHmet.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44ab-EhhXMeKGLTNGlfIt0ZwSrZ7u+oc\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 17579,
    "path": "../public/_nuxt/Dy2XHmet.js"
  },
  "/_nuxt/DzBoWp25.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"77-M3070gbmDJ3mjCzqaEqq0uWpREI\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 119,
    "path": "../public/_nuxt/DzBoWp25.js"
  },
  "/_nuxt/DzFNJJuE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"125-XIMibeV35ARMLed8QnSHWO2RifY\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 293,
    "path": "../public/_nuxt/DzFNJJuE.js"
  },
  "/_nuxt/DzIz3tx4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3203-Agle1Wufdh0QNB0Eu6RiC042g0Y\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 12803,
    "path": "../public/_nuxt/DzIz3tx4.js"
  },
  "/_nuxt/FngiIwmu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed-HCtJTtEIIz2CwBIhqiHnSpHAuY8\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 237,
    "path": "../public/_nuxt/FngiIwmu.js"
  },
  "/_nuxt/H8nPFHej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2700-661WVJGQ8AwrVWhWkLD6gQRs4Lc\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 9984,
    "path": "../public/_nuxt/H8nPFHej.js"
  },
  "/_nuxt/H_9p8MlS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c15-e2KrVuj+o6Uz0exoP4C/DT1YdL0\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 15381,
    "path": "../public/_nuxt/H_9p8MlS.js"
  },
  "/_nuxt/I_A6WscT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27b4-hSM9lPu3EflgPPVFnhawEGluTkQ\"",
    "mtime": "2025-12-12T04:22:24.651Z",
    "size": 10164,
    "path": "../public/_nuxt/I_A6WscT.js"
  },
  "/_nuxt/J-guzsm3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f2-ALY2IAxdlKXT2HWhcWpDYZFYSpM\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 242,
    "path": "../public/_nuxt/J-guzsm3.js"
  },
  "/_nuxt/JCzq_naB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10d0d-/GvghpWyr8BagZu9g8ivtrMgras\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 68877,
    "path": "../public/_nuxt/JCzq_naB.js"
  },
  "/_nuxt/KP_Dlcgk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"179a7-SwUW4o5jpvpfGRZmQ+N0pEsV61Y\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 96679,
    "path": "../public/_nuxt/KP_Dlcgk.js"
  },
  "/_nuxt/L6VuDbV7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d59-GbPuTS+L4LV0Q9APD818OcYkQtQ\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 3417,
    "path": "../public/_nuxt/L6VuDbV7.js"
  },
  "/_nuxt/MarkdownRenderer.DA-7MIs8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f0-YfHChMsfpIBDMnDdhz12DIB7XzY\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 2032,
    "path": "../public/_nuxt/MarkdownRenderer.DA-7MIs8.css"
  },
  "/_nuxt/MvNwXCJb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"be-DX3iWZ4xXfgZ1d1PuTpDDJnl6pQ\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 190,
    "path": "../public/_nuxt/MvNwXCJb.js"
  },
  "/_nuxt/OWHW6ZUB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11b-7pKJ6lB3csfly6nsn4iECz5miic\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 283,
    "path": "../public/_nuxt/OWHW6ZUB.js"
  },
  "/_nuxt/P9o3T7B_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"137-AkZkWjejgKedYKIn/ysjRkQhxWc\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 311,
    "path": "../public/_nuxt/P9o3T7B_.js"
  },
  "/_nuxt/PP8gjLfB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a8-Sp25qSDDEMwp3OUWKYVudUF1Pfc\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 424,
    "path": "../public/_nuxt/PP8gjLfB.js"
  },
  "/_nuxt/QVXil_r9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a8b-SGdiKPxF3mbNC+xuQT5eBvOAz5Q\"",
    "mtime": "2025-12-12T04:22:24.652Z",
    "size": 2699,
    "path": "../public/_nuxt/QVXil_r9.js"
  },
  "/_nuxt/RBZbX8X2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d81-XYWB2dHj8P42J+rQSTpJswfI6T8\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 11649,
    "path": "../public/_nuxt/RBZbX8X2.js"
  },
  "/_nuxt/TDtrdbi3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ef-6ksjCgqoQ3jaCb39TGNgg/+X0qI\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 239,
    "path": "../public/_nuxt/TDtrdbi3.js"
  },
  "/_nuxt/UpeSPMEY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e4-4okVtRBUzfXOD8y4vUsvinGF+Bc\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 228,
    "path": "../public/_nuxt/UpeSPMEY.js"
  },
  "/_nuxt/X1Xtuohp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4306-8jeX5j21Bq4JlfRWt1NFO4E89FA\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 17158,
    "path": "../public/_nuxt/X1Xtuohp.js"
  },
  "/_nuxt/X9Qh8rRD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f36-hbuawP3ksPDggaFA9rBkzbge6NM\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 12086,
    "path": "../public/_nuxt/X9Qh8rRD.js"
  },
  "/_nuxt/ZC22Qqbx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11f-iG/x3BspNNLM+CI+jSplm7DUw+s\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 287,
    "path": "../public/_nuxt/ZC22Qqbx.js"
  },
  "/_nuxt/ZTw24Ey6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9bf-i8ZiJB1lj7S7ddeDFYWV1QFlJIQ\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 2495,
    "path": "../public/_nuxt/ZTw24Ey6.js"
  },
  "/_nuxt/Z_ZHHb8E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-ksr2GKrcdIxgwljYowix2Q1x0tI\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 211,
    "path": "../public/_nuxt/Z_ZHHb8E.js"
  },
  "/_nuxt/ZuiteR-U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39a8-iC6Er84ijJY+E4M4KFlROqsWc/o\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 14760,
    "path": "../public/_nuxt/ZuiteR-U.js"
  },
  "/_nuxt/ascii-table.DHdvt386.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18e-NmqJUPEfOjH83EQcO77o2IUAGKc\"",
    "mtime": "2025-12-12T04:22:24.653Z",
    "size": 398,
    "path": "../public/_nuxt/ascii-table.DHdvt386.css"
  },
  "/_nuxt/aw_EWXeF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a820-S2jCwLYTF9FkXo76TGZsPWSnne4\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 43040,
    "path": "../public/_nuxt/aw_EWXeF.js"
  },
  "/_nuxt/b4Up8kzW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12d-n5/LN9dkvKu7D2o8IiJhpVYaO38\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 301,
    "path": "../public/_nuxt/b4Up8kzW.js"
  },
  "/_nuxt/b974dusj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"967-AKHVqKmCryQh93AkQSrae51NN90\"",
    "mtime": "2025-12-12T04:22:24.656Z",
    "size": 2407,
    "path": "../public/_nuxt/b974dusj.js"
  },
  "/_nuxt/base64-decode.CIsssbCg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75-QcSCfOSGjvIAvNxH2lTs53+OnMY\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 117,
    "path": "../public/_nuxt/base64-decode.CIsssbCg.css"
  },
  "/_nuxt/base64-encode.C3pZLL7x.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75-H4mpmWKGvfELwDEAIWWwIsVygVM\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 117,
    "path": "../public/_nuxt/base64-encode.C3pZLL7x.css"
  },
  "/_nuxt/binary-convert.BB4Zxz2P.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18e-nR6SuQq5lGnh81gvvli+Dy8mHig\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 398,
    "path": "../public/_nuxt/binary-convert.BB4Zxz2P.css"
  },
  "/_nuxt/bw1FTdH7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dee-hKjh7AC53JXdmobAKp43M+kX5NU\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 15854,
    "path": "../public/_nuxt/bw1FTdH7.js"
  },
  "/_nuxt/dQPpYmMP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35c4-4jvdmsOGsTWrZQaPseNBmkQskZQ\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 13764,
    "path": "../public/_nuxt/dQPpYmMP.js"
  },
  "/_nuxt/dSo0mf-W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"333f-CW+Ig1zjNmJR+Lwp83Th41LKAeg\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 13119,
    "path": "../public/_nuxt/dSo0mf-W.js"
  },
  "/_nuxt/default.DY5glizC.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16a-7qB65Ujj275Q0LYdgiBgohTTFvo\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 362,
    "path": "../public/_nuxt/default.DY5glizC.css"
  },
  "/_nuxt/error-404.Ba9jMujY.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dca-7BgM9xYHu79zcKpePVeJcMaFPeE\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 3530,
    "path": "../public/_nuxt/error-404.Ba9jMujY.css"
  },
  "/_nuxt/error-500.5Kem8BTR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75a-TNIOJuVrCycmtPUqqs6RRMLKnII\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 1882,
    "path": "../public/_nuxt/error-500.5Kem8BTR.css"
  },
  "/_nuxt/favorites.DupzASff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a7-enijOGY5r21QyldPuWDSnovfNyY\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 423,
    "path": "../public/_nuxt/favorites.DupzASff.css"
  },
  "/_nuxt/gTp7f-wA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a0-Ur/JauSCoxvIrChNqO4d20myQfU\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 416,
    "path": "../public/_nuxt/gTp7f-wA.js"
  },
  "/_nuxt/hOIeySVb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"311d-mIcZhYPaJ9nZslKLftHfJ7q4bb4\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 12573,
    "path": "../public/_nuxt/hOIeySVb.js"
  },
  "/_nuxt/hQXpuJvN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"db-votLbdLa6bTGsdFfpCdSOGx8uEw\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 219,
    "path": "../public/_nuxt/hQXpuJvN.js"
  },
  "/_nuxt/hex-convert.C4A5BOgF.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18e-O9Qz5IIUK92UE/2cTOKhqIf+I10\"",
    "mtime": "2025-12-12T04:22:24.657Z",
    "size": 398,
    "path": "../public/_nuxt/hex-convert.C4A5BOgF.css"
  },
  "/_nuxt/html-decode.oNaAoZkC.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75-bpk9k6Ob3lyFP+SaswEm3EIcjok\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 117,
    "path": "../public/_nuxt/html-decode.oNaAoZkC.css"
  },
  "/_nuxt/html-encode.CBTtF9p7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75-JaFvqkHbA532/03n/ZcXSPAH/7k\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 117,
    "path": "../public/_nuxt/html-encode.CBTtF9p7.css"
  },
  "/_nuxt/icon-generator.dZaP-7km.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13e-lQBx208hEy0FJhe3ndxZcH479Z0\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 318,
    "path": "../public/_nuxt/icon-generator.dZaP-7km.css"
  },
  "/_nuxt/image-resize.j-N7bbR6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"143-c8tniuHVvpTOSyhgPn/e6yPdzBE\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 323,
    "path": "../public/_nuxt/image-resize.j-N7bbR6.css"
  },
  "/_nuxt/image-watermark.MOQnGG_U.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13e-r66WVr+DBEQIhmMV1GM8pdaN48c\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 318,
    "path": "../public/_nuxt/image-watermark.MOQnGG_U.css"
  },
  "/_nuxt/index.BEishKRN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"274-se7JYfJFbg2aaxpAtASb2QjfAR8\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 628,
    "path": "../public/_nuxt/index.BEishKRN.css"
  },
  "/_nuxt/j6X7MxmV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ed-G5tvUAasyCggraQgWXyBJF7M4jI\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 1517,
    "path": "../public/_nuxt/j6X7MxmV.js"
  },
  "/_nuxt/kYlSmsOS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b0-8hXhouXKmPO8nym+OrXZSSZfTRE\"",
    "mtime": "2025-12-12T04:22:24.658Z",
    "size": 176,
    "path": "../public/_nuxt/kYlSmsOS.js"
  },
  "/_nuxt/lEwUO4VB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36b7-ufBlYtCPW9FTl2b3egwBmN83M1g\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 14007,
    "path": "../public/_nuxt/lEwUO4VB.js"
  },
  "/_nuxt/markdown-editor.R1_xRNwz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c1-AczeH85F550hoyn70PldlDGs/j8\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 1729,
    "path": "../public/_nuxt/markdown-editor.R1_xRNwz.css"
  },
  "/_nuxt/morse-code.CLMQbf_0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"424-COfsfvQwFoFR9803DXh+EAePSOA\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 1060,
    "path": "../public/_nuxt/morse-code.CLMQbf_0.css"
  },
  "/_nuxt/pRcMpV7K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e0f-DHouWFPMH6BGMd30RDlCzKmf2+g\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 15887,
    "path": "../public/_nuxt/pRcMpV7K.js"
  },
  "/_nuxt/qrcode-generate.CZaTEPPy.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"274-YPKT9IsOtx4QwBx7LH2EMW2UTpo\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 628,
    "path": "../public/_nuxt/qrcode-generate.CZaTEPPy.css"
  },
  "/_nuxt/regex-generator.DRwjD0hd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"96-uM0TXuYjt3IKxsvQFrvkFxJAPaA\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 150,
    "path": "../public/_nuxt/regex-generator.DRwjD0hd.css"
  },
  "/_nuxt/regex-tester.B3XYPego.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b6-k4lDGaZtgS1fHii6/EGmAhv6qb4\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 182,
    "path": "../public/_nuxt/regex-tester.B3XYPego.css"
  },
  "/_nuxt/sCtjrDU-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10a-CgEFM9D4xPdPwk/jAx00efEHjpg\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 266,
    "path": "../public/_nuxt/sCtjrDU-.js"
  },
  "/_nuxt/sitemap.CTzs4zF6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13f-7hNVzDYM+5xj5609rbDINnCJOm0\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 319,
    "path": "../public/_nuxt/sitemap.CTzs4zF6.css"
  },
  "/_nuxt/text-diff.Z7ITXPkh.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"218-qt9SRgd4py7rJbjEEzLNe7SzE6Q\"",
    "mtime": "2025-12-12T04:22:24.660Z",
    "size": 536,
    "path": "../public/_nuxt/text-diff.Z7ITXPkh.css"
  },
  "/_nuxt/uGB4-4JB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a27-yZjS3NiEDIrpEwogeJSq/mWk7GY\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 14887,
    "path": "../public/_nuxt/uGB4-4JB.js"
  },
  "/_nuxt/unicode-convert.Cc9zOLEa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18e-8M8beCn9MUJM1Tecxy5XlrG4STM\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 398,
    "path": "../public/_nuxt/unicode-convert.Cc9zOLEa.css"
  },
  "/_nuxt/url-decode.BQ_lyS-k.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75-7ESzr5NfxbF/pO8Oy5gJqR14F64\"",
    "mtime": "2025-12-12T04:22:24.659Z",
    "size": 117,
    "path": "../public/_nuxt/url-decode.BQ_lyS-k.css"
  },
  "/_nuxt/url-encode.DDou1uSv.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"72-KiPnizbeSkKosK+G6Y8584sB62w\"",
    "mtime": "2025-12-12T04:22:24.661Z",
    "size": 114,
    "path": "../public/_nuxt/url-encode.DDou1uSv.css"
  },
  "/_nuxt/vEvaw0F6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99-A5/PGswb+hoYH5qPW9Ik54fzGvk\"",
    "mtime": "2025-12-12T04:22:24.660Z",
    "size": 153,
    "path": "../public/_nuxt/vEvaw0F6.js"
  },
  "/_nuxt/vbWN-aRu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"110-C30iv3NMqklBD3NM+4imB6G3Ofc\"",
    "mtime": "2025-12-12T04:22:24.661Z",
    "size": 272,
    "path": "../public/_nuxt/vbWN-aRu.js"
  },
  "/_nuxt/w5JABn4e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"107-Z0lA6Rf9E+7POWZFQm7CwdG+YKc\"",
    "mtime": "2025-12-12T04:22:24.661Z",
    "size": 263,
    "path": "../public/_nuxt/w5JABn4e.js"
  },
  "/_nuxt/wERbHxDK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"434-w8BdQ/050TK77U47nXeZhSbJv1E\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 1076,
    "path": "../public/_nuxt/wERbHxDK.js"
  },
  "/_nuxt/y7DIHwUK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39e9-IWOTzAtkFsxdzXT5ncLgRXA/xjQ\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 14825,
    "path": "../public/_nuxt/y7DIHwUK.js"
  },
  "/_nuxt/yBh40oZr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"298b-itTKQua9U5SH0X/n+m1dIMX5lcM\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 10635,
    "path": "../public/_nuxt/yBh40oZr.js"
  },
  "/_nuxt/yjlb2Dos.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-jy1bx7i9nghX8UooaCXHnVT1X/Y\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 64,
    "path": "../public/_nuxt/yjlb2Dos.js"
  },
  "/_nuxt/zpH-NRIU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"191-ZOBiHNmvmqHggBjN2h1b5ajMtjw\"",
    "mtime": "2025-12-12T04:22:24.662Z",
    "size": 401,
    "path": "../public/_nuxt/zpH-NRIU.js"
  },
  "/encode/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-pPvDt5u7uBEI+M3GWBUWzLRaekg\"",
    "mtime": "2025-12-12T04:22:24.574Z",
    "size": 69,
    "path": "../public/encode/_payload.json"
  },
  "/encode/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"27518-BVwUnR/7fkLHv6xQfaNU5+5iU0k\"",
    "mtime": "2025-12-12T04:22:24.564Z",
    "size": 161048,
    "path": "../public/encode/index.html"
  },
  "/format/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-pPvDt5u7uBEI+M3GWBUWzLRaekg\"",
    "mtime": "2025-12-12T04:22:24.574Z",
    "size": 69,
    "path": "../public/format/_payload.json"
  },
  "/format/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"26dc2-6QcQHgfAZp56ITkYVMUvEPWMeVw\"",
    "mtime": "2025-12-12T04:22:24.564Z",
    "size": 159170,
    "path": "../public/format/index.html"
  },
  "/all/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-JcKmFSGLr+5658qZxskHjOmD6R0\"",
    "mtime": "2025-12-12T04:22:24.575Z",
    "size": 69,
    "path": "../public/all/_payload.json"
  },
  "/all/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"612a5-nXMvbqgTbcP1Tpr29lOfoT2Zerc\"",
    "mtime": "2025-12-12T04:22:24.566Z",
    "size": 397989,
    "path": "../public/all/index.html"
  },
  "/image/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-pPvDt5u7uBEI+M3GWBUWzLRaekg\"",
    "mtime": "2025-12-12T04:22:24.574Z",
    "size": 69,
    "path": "../public/image/_payload.json"
  },
  "/image/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"26dde-xxRJNbHHldhpC/tf05v37mJTsJs\"",
    "mtime": "2025-12-12T04:22:24.564Z",
    "size": 159198,
    "path": "../public/image/index.html"
  },
  "/text/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-JcKmFSGLr+5658qZxskHjOmD6R0\"",
    "mtime": "2025-12-12T04:22:24.575Z",
    "size": 69,
    "path": "../public/text/_payload.json"
  },
  "/text/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"27919-BmtcFC06T0Bs5Rn8kd789LGp/Vg\"",
    "mtime": "2025-12-12T04:22:24.565Z",
    "size": 162073,
    "path": "../public/text/index.html"
  },
  "/network/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-JcKmFSGLr+5658qZxskHjOmD6R0\"",
    "mtime": "2025-12-12T04:22:24.575Z",
    "size": 69,
    "path": "../public/network/_payload.json"
  },
  "/network/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"26e31-gWEqchSnrbwucFEBjrj/mhr8UMo\"",
    "mtime": "2025-12-12T04:22:24.565Z",
    "size": 159281,
    "path": "../public/network/index.html"
  },
  "/time/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-JcKmFSGLr+5658qZxskHjOmD6R0\"",
    "mtime": "2025-12-12T04:22:24.575Z",
    "size": 69,
    "path": "../public/time/_payload.json"
  },
  "/time/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"2629a-IjBGLeix//W9jo7nPahH/aKM/Ss\"",
    "mtime": "2025-12-12T04:22:24.565Z",
    "size": 156314,
    "path": "../public/time/index.html"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-5ppX6qIbYgyNSVqzKbRTLNuJZNI\"",
    "mtime": "2025-12-12T04:22:24.592Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/503eb991-6d94-42ba-9612-c734855fc9ea.json": {
    "type": "application/json",
    "etag": "\"e0-ipA0G76DPP6v9J58lD6Z9yjS/0o\"",
    "mtime": "2025-12-12T04:22:24.589Z",
    "size": 224,
    "path": "../public/_nuxt/builds/meta/503eb991-6d94-42ba-9612-c734855fc9ea.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/blog/":{"maxAge":31536000},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _koJFbf = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_UgoLj5 = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _koJFbf, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_UgoLj5, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_UgoLj5, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, getResponseStatus as a, getQuery as b, createError$1 as c, defineRenderHandler as d, getRouteRules as e, useNitroApp as f, getResponseStatusText as g, hasProtocol as h, isScriptProtocol as i, joinRelativeURL as j, joinURL as k, getContext as l, createHooks as m, executeAsync as n, createRouter$1 as o, defu as p, parseQuery as q, withTrailingSlash as r, sanitizeStatusCode as s, toRouteMatcher as t, useRuntimeConfig as u, withoutTrailingSlash as v, withQuery as w, nodeServer as x };
//# sourceMappingURL=nitro.mjs.map
