var zm=Object.defineProperty;var Hm=(n,e,t)=>e in n?zm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var bo=(n,e,t)=>Hm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Se(){}function Rd(n){return n()}function _u(){return Object.create(null)}function tt(n){n.forEach(Rd)}function kd(n){return typeof n=="function"}function Or(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Zi;function It(n,e){return n===e?!0:(Zi||(Zi=document.createElement("a")),Zi.href=e,n===Zi.href)}function Wm(n){return Object.keys(n).length===0}function Gm(n,...e){if(n==null){for(const r of e)r(void 0);return Se}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function rn(n,e,t){n.$$.on_destroy.push(Gm(e,t))}function _(n,e){n.appendChild(e)}function R(n,e,t){n.insertBefore(e,t||null)}function A(n){n.parentNode&&n.parentNode.removeChild(n)}function nt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function w(n){return document.createElement(n)}function q(n){return document.createTextNode(n)}function M(){return q(" ")}function We(){return q("")}function x(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function H(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Pd(n){return n===""?null:+n}function Km(n){return Array.from(n.childNodes)}function ee(n,e){e=""+e,n.data!==e&&(n.data=e)}function ie(n,e){n.value=e??""}function ue(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function bt(n,e,t){for(let r=0;r<n.options.length;r+=1){const i=n.options[r];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function jn(n){const e=n.querySelector(":checked");return e&&e.__value}function gu(n,e){return new n(e)}let di;function si(n){di=n}function Cd(){if(!di)throw new Error("Function called outside component initialization");return di}function xm(n){Cd().$$.on_mount.push(n)}function Os(n){Cd().$$.on_destroy.push(n)}const cr=[],yu=[];let mr=[];const vu=[],Qm=Promise.resolve();let qo=!1;function Xm(){qo||(qo=!0,Qm.then(Sd))}function Kt(n){mr.push(n)}const Ao=new Set;let lr=0;function Sd(){if(lr!==0)return;const n=di;do{try{for(;lr<cr.length;){const e=cr[lr];lr++,si(e),Ym(e.$$)}}catch(e){throw cr.length=0,lr=0,e}for(si(null),cr.length=0,lr=0;yu.length;)yu.pop()();for(let e=0;e<mr.length;e+=1){const t=mr[e];Ao.has(t)||(Ao.add(t),t())}mr.length=0}while(cr.length);for(;vu.length;)vu.pop()();qo=!1,Ao.clear(),si(n)}function Ym(n){if(n.fragment!==null){n.update(),tt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Kt)}}function Jm(n){const e=[],t=[];mr.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),mr=e}const as=new Set;let Mn;function Nd(){Mn={r:0,c:[],p:Mn}}function Dd(){Mn.r||tt(Mn.c),Mn=Mn.p}function fi(n,e){n&&n.i&&(as.delete(n),n.i(e))}function gs(n,e,t,r){if(n&&n.o){if(as.has(n))return;as.add(n),Mn.c.push(()=>{as.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Ee(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function wu(n){n&&n.c()}function zo(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Kt(()=>{const s=n.$$.on_mount.map(Rd).filter(kd);n.$$.on_destroy?n.$$.on_destroy.push(...s):tt(s),n.$$.on_mount=[]}),i.forEach(Kt)}function Ho(n,e){const t=n.$$;t.fragment!==null&&(Jm(t.after_update),tt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function $m(n,e){n.$$.dirty[0]===-1&&(cr.push(n),Xm(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function bi(n,e,t,r,i,s,o=null,l=[-1]){const u=di;si(n);const c=n.$$={fragment:null,ctx:[],props:s,update:Se,not_equal:i,bound:_u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:_u(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let d=!1;if(c.ctx=t?t(n,e.props||{},(f,p,...g)=>{const v=g.length?g[0]:p;return c.ctx&&i(c.ctx[f],c.ctx[f]=v)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](v),d&&$m(n,f)),p}):[],c.update(),d=!0,tt(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=Km(e.target);c.fragment&&c.fragment.l(f),f.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&fi(n.$$.fragment),zo(n,e.target,e.anchor),Sd()}si(u)}class Ai{constructor(){bo(this,"$$");bo(this,"$$set")}$destroy(){Ho(this,1),this.$destroy=Se}$on(e,t){if(!kd(t))return Se;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Wm(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Zm="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zm);const ur=[];function Vd(n,e=Se){let t;const r=new Set;function i(l){if(Or(n,l)&&(n=l,t)){const u=!ur.length;for(const c of r)c[1](),ur.push(c,n);if(u){for(let c=0;c<ur.length;c+=2)ur[c][0](ur[c+1]);ur.length=0}}}function s(l){i(l(n))}function o(l,u=Se){const c=[l,u];return r.add(c),r.size===1&&(t=e(i,s)||Se),l(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var Tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},e_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(t[d],t[f],t[p],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Od(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):e_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new t_;const p=s<<2|l>>4;if(r.push(p),c!==64){const g=l<<4&240|c>>2;if(r.push(g),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class t_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n_=function(n){const e=Od(n);return Ld.encodeByteArray(e,!0)},ys=function(n){return n_(n).replace(/\./g,"")},Md=function(n){try{return Ld.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=()=>r_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof Tu>"u")return;const n=Tu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},o_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Md(n[1]);return e&&JSON.parse(e)},Ls=()=>{try{return i_()||s_()||o_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ud=n=>{var e,t;return(t=(e=Ls())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fd=n=>{const e=Ud(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bd=()=>{var n;return(n=Ls())===null||n===void 0?void 0:n.config},jd=n=>{var e;return(e=Ls())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ys(JSON.stringify(t)),ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function u_(){var n;const e=(n=Ls())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function c_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f_(){const n=_t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function p_(){return!u_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class Xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=g_,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y_(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function y_(n,e){return n.replace(v_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function w_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Eu(s)&&Eu(o)){if(!Tr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Eu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function T_(n,e){const t=new E_(n,e);return t.subscribe.bind(t)}class E_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ro),i.error===void 0&&(i.error=Ro),i.complete===void 0&&(i.complete=Ro);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ro(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new a_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R_(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A_(n){return n===Ln?void 0:n}function R_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new b_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const P_={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},C_=Pe.INFO,S_={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},N_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=S_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=C_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const D_=(n,e)=>e.some(t=>n instanceof t);let Iu,bu;function V_(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O_(){return bu||(bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zd=new WeakMap,Wo=new WeakMap,Hd=new WeakMap,ko=new WeakMap,va=new WeakMap;function L_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(vn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zd.set(t,n)}).catch(()=>{}),va.set(e,n),e}function M_(n){if(Wo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Wo.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function U_(n){Go=n(Go)}function F_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Po(this),e,...t);return Hd.set(r,e.sort?e.sort():[e]),vn(r)}:O_().includes(n)?function(...e){return n.apply(Po(this),e),vn(zd.get(this))}:function(...e){return vn(n.apply(Po(this),e))}}function B_(n){return typeof n=="function"?F_(n):(n instanceof IDBTransaction&&M_(n),D_(n,V_())?new Proxy(n,Go):n)}function vn(n){if(n instanceof IDBRequest)return L_(n);if(ko.has(n))return ko.get(n);const e=B_(n);return e!==n&&(ko.set(n,e),va.set(e,n)),e}const Po=n=>va.get(n);function j_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=vn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vn(o.result),u.oldVersion,u.newVersion,vn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const q_=["get","getKey","getAll","getAllKeys","count"],z_=["put","add","delete","clear"],Co=new Map;function Au(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=z_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q_.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&u.done]))[0]};return Co.set(e,s),s}U_(n=>({...n,get:(e,t,r)=>Au(e,t)||n.get(e,t,r),has:(e,t)=>!!Au(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(W_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function W_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ko="@firebase/app",Ru="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ya("@firebase/app"),G_="@firebase/app-compat",K_="@firebase/analytics-compat",x_="@firebase/analytics",Q_="@firebase/app-check-compat",X_="@firebase/app-check",Y_="@firebase/auth",J_="@firebase/auth-compat",$_="@firebase/database",Z_="@firebase/data-connect",eg="@firebase/database-compat",tg="@firebase/functions",ng="@firebase/functions-compat",rg="@firebase/installations",ig="@firebase/installations-compat",sg="@firebase/messaging",og="@firebase/messaging-compat",ag="@firebase/performance",lg="@firebase/performance-compat",ug="@firebase/remote-config",cg="@firebase/remote-config-compat",hg="@firebase/storage",dg="@firebase/storage-compat",fg="@firebase/firestore",pg="@firebase/vertexai-preview",mg="@firebase/firestore-compat",_g="firebase",gg="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="[DEFAULT]",yg={[Ko]:"fire-core",[G_]:"fire-core-compat",[x_]:"fire-analytics",[K_]:"fire-analytics-compat",[X_]:"fire-app-check",[Q_]:"fire-app-check-compat",[Y_]:"fire-auth",[J_]:"fire-auth-compat",[$_]:"fire-rtdb",[Z_]:"fire-data-connect",[eg]:"fire-rtdb-compat",[tg]:"fire-fn",[ng]:"fire-fn-compat",[rg]:"fire-iid",[ig]:"fire-iid-compat",[sg]:"fire-fcm",[og]:"fire-fcm-compat",[ag]:"fire-perf",[lg]:"fire-perf-compat",[ug]:"fire-rc",[cg]:"fire-rc-compat",[hg]:"fire-gcs",[dg]:"fire-gcs-compat",[fg]:"fire-fst",[mg]:"fire-fst-compat",[pg]:"fire-vertex","fire-js":"fire-js",[_g]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map,vg=new Map,Qo=new Map;function ku(n,e){try{n.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(Qo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Qo.set(e,n);for(const t of vs.values())ku(t,n);for(const t of vg.values())ku(t,n);return!0}function Ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new Ri("app","Firebase",wg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=gg;function Wd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(t||(t=Bd()),!t)throw wn.create("no-options");const s=vs.get(i);if(s){if(Tr(t,s.options)&&Tr(r,s.config))return s;throw wn.create("duplicate-app",{appName:i})}const o=new k_(i);for(const u of Qo.values())o.addComponent(u);const l=new Tg(t,r,o);return vs.set(i,l),l}function wa(n=xo){const e=vs.get(n);if(!e&&n===xo&&Bd())return Wd();if(!e)throw wn.create("no-app",{appName:n});return e}function qt(n,e,t){var r;let i=(r=yg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(l.join(" "));return}Wn(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firebase-heartbeat-database",Ig=1,pi="firebase-heartbeat-store";let So=null;function Gd(){return So||(So=j_(Eg,Ig,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pi)}catch(t){console.warn(t)}}}}).catch(n=>{throw wn.create("idb-open",{originalErrorMessage:n.message})})),So}async function bg(n){try{const t=(await Gd()).transaction(pi),r=await t.objectStore(pi).get(Kd(n));return await t.done,r}catch(e){if(e instanceof Xt)sn.warn(e.message);else{const t=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(t.message)}}}async function Pu(n,e){try{const r=(await Gd()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,Kd(n)),await r.done}catch(t){if(t instanceof Xt)sn.warn(t.message);else{const r=wn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(r.message)}}}function Kd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=1024,Rg=30*24*60*60*1e3;class kg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Rg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cu(),{heartbeatsToSend:r,unsentEntries:i}=Pg(this._heartbeatsCache.heartbeats),s=ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return sn.warn(t),""}}}function Cu(){return new Date().toISOString().substring(0,10)}function Pg(n,e=Ag){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Su(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Su(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m_()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Su(n){return ys(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){Wn(new In("platform-logger",e=>new H_(e),"PRIVATE")),Wn(new In("heartbeat",e=>new kg(e),"PRIVATE")),qt(Ko,Ru,n),qt(Ko,Ru,"esm2017"),qt("fire-js","")}Sg("");var Ng="firebase",Dg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Ng,Dg,"app");function Ta(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vg=xd,Qd=new Ri("auth","Firebase",xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new ya("@firebase/auth");function Og(n,...e){ws.logLevel<=Pe.WARN&&ws.warn(`Auth (${$n}): ${n}`,...e)}function ls(n,...e){ws.logLevel<=Pe.ERROR&&ws.error(`Auth (${$n}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,...e){throw Ia(n,...e)}function Mt(n,...e){return Ia(n,...e)}function Ea(n,e,t){const r=Object.assign(Object.assign({},Vg()),{[e]:t});return new Ri("auth","Firebase",r).create(e,{appName:n.name})}function qn(n){return Ea(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(n,"argument-error"),Ea(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ia(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qd.create(n,...e)}function _e(n,e,...t){if(!n)throw Ia(e,...t)}function en(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ls(e),new Error(e)}function on(n,e){n||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mg(){return Nu()==="http:"||Nu()==="https:"}function Nu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mg()||h_()||"connection"in navigator)?navigator.onLine:!0}function Fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=l_()||d_()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Pi(3e4,6e4);function Aa(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lr(n,e,t,r,i={}){return Yd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ki(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return c_()||(c.referrerPolicy="no-referrer"),Xd.fetch()(Jd(n,n.config.apiHost,t,l),c)})}async function Yd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bg),e);try{const i=new zg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw es(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw es(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw es(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ea(n,d,c);xt(n,d)}}catch(i){if(i instanceof Xt)throw i;xt(n,"network-request-failed",{message:String(i)})}}async function qg(n,e,t,r,i={}){const s=await Lr(n,e,t,r,i);return"mfaPendingCredential"in s&&xt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Jd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ba(n.config,i):`${n.config.apiScheme}://${i}`}class zg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),jg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Mt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e){return Lr(n,"POST","/v1/accounts:delete",e)}async function $d(n,e){return Lr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wg(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),i=Ra(r);_e(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oi(No(i.auth_time)),issuedAtTime:oi(No(i.iat)),expirationTime:oi(No(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function No(n){return Number(n)*1e3}function Ra(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const i=Md(t);return i?JSON.parse(i):(ls("Failed to decode base64 JWT payload"),null)}catch(i){return ls("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Du(n){const e=Ra(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xt&&Gg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Gg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n){var e;const t=n.auth,r=await n.getIdToken(),i=await mi(n,$d(t,{idToken:r}));_e(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Zd(s.providerUserInfo):[],l=Qg(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function xg(n){const e=Ke(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zd(n){return n.map(e=>{var{providerId:t}=e,r=Ta(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e){const t=await Yd(n,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Jd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xd.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yg(n,e){return Lr(n,"POST","/v2/accounts:revokeToken",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Du(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new _r;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(_e(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(_e(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mi(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wg(this,e)}reload(){return xg(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await mi(this,Hg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,u,c,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(l=t.tenantId)!==null&&l!==void 0?l:void 0,y=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(c=t.createdAt)!==null&&c!==void 0?c:void 0,L=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:D,emailVerified:O,isAnonymous:U,providerData:B,stsTokenManager:k}=t;_e(D&&k,e,"internal-error");const T=_r.fromJSON(this.name,k);_e(typeof D=="string",e,"internal-error"),dn(f,e.name),dn(p,e.name),_e(typeof O=="boolean",e,"internal-error"),_e(typeof U=="boolean",e,"internal-error"),dn(g,e.name),dn(v,e.name),dn(E,e.name),dn(y,e.name),dn(V,e.name),dn(L,e.name);const I=new tn({uid:D,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:U,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:T,createdAt:V,lastLoginAt:L});return B&&Array.isArray(B)&&(I.providerData=B.map(P=>Object.assign({},P))),y&&(I._redirectEventId=y),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new _r;i.updateFromServerResponse(t);const s=new tn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ts(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];_e(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _r;l.updateFromIdToken(r);const u=new tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function nn(n){on(n instanceof Function,"Expected a class definition");let e=Vu.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ef.type="NONE";const Ou=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n,e,t){return`firebase:${n}:${e}:${t}`}class gr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new gr(nn(Ou),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||nn(Ou);const o=us(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const d=await c._get(o);if(d){const f=tn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gr(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(af(e))return"Blackberry";if(lf(e))return"Webos";if(nf(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(of(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(n=_t()){return/firefox\//i.test(n)}function nf(n=_t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(n=_t()){return/crios\//i.test(n)}function sf(n=_t()){return/iemobile/i.test(n)}function of(n=_t()){return/android/i.test(n)}function af(n=_t()){return/blackberry/i.test(n)}function lf(n=_t()){return/webos/i.test(n)}function ka(n=_t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jg(n=_t()){var e;return ka(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $g(){return f_()&&document.documentMode===10}function uf(n=_t()){return ka(n)||of(n)||lf(n)||af(n)||/windows phone/i.test(n)||sf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e=[]){let t;switch(n){case"Browser":t=Lu(_t());break;case"Worker":t=`${Lu(_t())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,e={}){return Lr(n,"GET","/v2/passwordPolicy",Aa(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=6;class ny{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ty,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new Zg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $d(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(qn(this));const t=e?Ke(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ey(this),t=new ny(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Og(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Us(n){return Ke(n)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=T_(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iy(n){Pa=n}function sy(n){return Pa.loadJS(n)}function oy(){return Pa.gapiScript}function ay(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n,e){const t=Ms(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Tr(s,e??{}))return i;xt(i,"already-initialized")}return t.initialize({options:e})}function uy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cy(n,e,t){const r=Us(n);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hf(e),{host:o,port:l}=hy(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),dy()}function hf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hy(n){const e=hf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Uu(o)}}}function Uu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,t){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e){return qg(n,"POST","/v1/accounts:signInWithIdp",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="http://localhost";class Gn extends df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ta(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yr(e,t)}buildRequest(){const e={requestUri:fy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ci{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ci{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ci{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mn.credential(t,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await tn._fromIdTokenResponse(e,r,i),o=Fu(r);return new Er({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Fu(r);return new Er({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Fu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Xt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Es(e,t,r,i)}}function ff(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(n,s,e,r):s})}async function py(n,e,t=!1){const r=await mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Er._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(n,e,t=!1){const{auth:r}=n;if(Zt(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await mi(n,ff(r,i,e,n),t);_e(s.idToken,r,"internal-error");const o=Ra(s.idToken);_e(o,r,"internal-error");const{sub:l}=o;return _e(n.uid===l,r,"user-mismatch"),Er._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e,t=!1){if(Zt(n.app))return Promise.reject(qn(n));const r="signIn",i=await ff(n,r,e),s=await Er._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function gy(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function yy(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function vy(n,e,t,r){return Ke(n).onAuthStateChanged(e,t,r)}function wy(n){return Ke(n).signOut()}const Is="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=1e3,Ey=10;class mf extends pf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$g()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ey):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mf.type="LOCAL";const Iy=mf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends pf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_f.type="SESSION";const gf=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await by(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Sa("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function Ry(n){zt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function ky(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Py(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cy(){return yf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firebaseLocalStorageDb",Sy=1,bs="firebaseLocalStorage",wf="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bs(n,e){return n.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function Ny(){const n=indexedDB.deleteDatabase(vf);return new Si(n).toPromise()}function Jo(){const n=indexedDB.open(vf,Sy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bs,{keyPath:wf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await Ny(),e(await Jo()))})})}async function Bu(n,e,t){const r=Bs(n,!0).put({[wf]:e,value:t});return new Si(r).toPromise()}async function Dy(n,e){const t=Bs(n,!1).get(e),r=await new Si(t).toPromise();return r===void 0?null:r.value}function ju(n,e){const t=Bs(n,!0).delete(e);return new Si(t).toPromise()}const Vy=800,Oy=3;class Tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Oy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fs._getInstance(Cy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ky(),!this.activeServiceWorker)return;this.sender=new Ay(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Py()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await Bu(e,Is,"1"),await ju(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ju(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bs(i,!1).getAll();return new Si(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tf.type="LOCAL";const Ly=Tf;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n,e){return e?nn(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function My(n){return _y(n.auth,new Na(n),n.bypassAuthState)}function Uy(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),my(t,new Na(n),n.bypassAuthState)}async function Fy(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),py(t,new Na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return My;case"linkViaPopup":case"linkViaRedirect":return Fy;case"reauthViaPopup":case"reauthViaRedirect":return Uy;default:xt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Pi(2e3,1e4);async function jy(n,e,t){if(Zt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=Us(n);Lg(n,e,Ca);const i=Ef(r,t);return new Un(r,"signInViaPopup",e,i).executeNotNull()}class Un extends If{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,By.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="pendingRedirect",cs=new Map;class zy extends If{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await Hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hy(n,e){const t=Ky(e),r=Gy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Wy(n,e){cs.set(n._key(),e)}function Gy(n){return nn(n._redirectPersistence)}function Ky(n){return us(qy,n.config.apiKey,n.name)}async function xy(n,e,t=!1){if(Zt(n.app))return Promise.reject(qn(n));const r=Us(n),i=Ef(r,e),o=await new zy(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=10*60*1e3;class Xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qy&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e={}){return Lr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zy=/^https?/;async function ev(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jy(n);for(const t of e)try{if(tv(t))return}catch{}xt(n,"unauthorized-domain")}function tv(n){const e=Xo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Zy.test(t))return!1;if($y.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Pi(3e4,6e4);function zu(){const n=zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rv(n){return new Promise((e,t)=>{var r,i,s;function o(){zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zu(),t(Mt(n,"network-request-failed"))},timeout:nv.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const l=ay("iframefcb");return zt()[l]=()=>{gapi.load?o():t(Mt(n,"network-request-failed"))},sy(`${oy()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw hs=null,e})}let hs=null;function iv(n){return hs=hs||rv(n),hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Pi(5e3,15e3),ov="__/auth/iframe",av="emulator/auth/iframe",lv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cv(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ba(e,av):`https://${n.config.authDomain}/${ov}`,r={apiKey:e.apiKey,appName:n.name,v:$n},i=uv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ki(r).slice(1)}`}async function hv(n){const e=await iv(n),t=zt().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(n,"network-request-failed"),l=zt().setTimeout(()=>{s(o)},sv.get());function u(){zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fv=500,pv=600,mv="_blank",_v="http://localhost";class Hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gv(n,e,t,r=fv,i=pv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dv),{width:r.toString(),height:i.toString(),top:s,left:o}),c=_t().toLowerCase();t&&(l=rf(c)?mv:t),tf(c)&&(e=e||_v,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(Jg(c)&&l!=="_self")return yv(e||"",l),new Hu(null);const f=window.open(e||"",l,d);_e(f,n,"popup-blocked");try{f.focus()}catch{}return new Hu(f)}function yv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="__/auth/handler",wv="emulator/auth/handler",Tv=encodeURIComponent("fac");async function Wu(n,e,t,r,i,s){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$n,eventId:i};if(e instanceof Ca){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",w_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ci){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await n._getAppCheckToken(),c=u?`#${Tv}=${encodeURIComponent(u)}`:"";return`${Ev(n)}?${ki(l).slice(1)}${c}`}function Ev({config:n}){return n.emulator?ba(n,wv):`https://${n.authDomain}/${vv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="webStorageSupport";class Iv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gf,this._completeRedirectFn=xy,this._overrideRedirectResult=Wy}async _openPopup(e,t,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wu(e,t,r,Xo(),i);return gv(e,o,Sa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Wu(e,t,r,Xo(),i);return Ry(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hv(e),r=new Xy(e);return t.register("authEvent",i=>(_e(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Do,{type:Do},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Do];o!==void 0&&t(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ev(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uf()||nf()||ka()}}const bv=Iv;var Gu="@firebase/auth",Ku="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kv(n){Wn(new In("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(n)},c=new ry(r,i,s,u);return uy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new In("auth-internal",e=>{const t=Us(e.getProvider("auth").getImmediate());return(r=>new Av(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Gu,Ku,Rv(n)),qt(Gu,Ku,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=5*60,Cv=jd("authIdTokenMaxAge")||Pv;let xu=null;const Sv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cv)return;const i=t==null?void 0:t.token;xu!==i&&(xu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nv(n=wa()){const e=Ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ly(n,{popupRedirectResolver:bv,persistence:[Ly,Iy,gf]}),r=jd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sv(s.toString());yy(t,o,()=>o(t.currentUser)),gy(t,l=>o(l))}}const i=Ud("auth");return i&&cy(t,`http://${i}`),t}function Dv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}iy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Dv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kv("Browser");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Af;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,T){function I(){}I.prototype=T.prototype,k.D=T.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(P,S,N){for(var C=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)C[oe-2]=arguments[oe];return T.prototype[S].apply(P,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,T,I){I||(I=0);var P=Array(16);if(typeof T=="string")for(var S=0;16>S;++S)P[S]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(S=0;16>S;++S)P[S]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=k.g[0],I=k.g[1],S=k.g[2];var N=k.g[3],C=T+(N^I&(S^N))+P[0]+3614090360&4294967295;T=I+(C<<7&4294967295|C>>>25),C=N+(S^T&(I^S))+P[1]+3905402710&4294967295,N=T+(C<<12&4294967295|C>>>20),C=S+(I^N&(T^I))+P[2]+606105819&4294967295,S=N+(C<<17&4294967295|C>>>15),C=I+(T^S&(N^T))+P[3]+3250441966&4294967295,I=S+(C<<22&4294967295|C>>>10),C=T+(N^I&(S^N))+P[4]+4118548399&4294967295,T=I+(C<<7&4294967295|C>>>25),C=N+(S^T&(I^S))+P[5]+1200080426&4294967295,N=T+(C<<12&4294967295|C>>>20),C=S+(I^N&(T^I))+P[6]+2821735955&4294967295,S=N+(C<<17&4294967295|C>>>15),C=I+(T^S&(N^T))+P[7]+4249261313&4294967295,I=S+(C<<22&4294967295|C>>>10),C=T+(N^I&(S^N))+P[8]+1770035416&4294967295,T=I+(C<<7&4294967295|C>>>25),C=N+(S^T&(I^S))+P[9]+2336552879&4294967295,N=T+(C<<12&4294967295|C>>>20),C=S+(I^N&(T^I))+P[10]+4294925233&4294967295,S=N+(C<<17&4294967295|C>>>15),C=I+(T^S&(N^T))+P[11]+2304563134&4294967295,I=S+(C<<22&4294967295|C>>>10),C=T+(N^I&(S^N))+P[12]+1804603682&4294967295,T=I+(C<<7&4294967295|C>>>25),C=N+(S^T&(I^S))+P[13]+4254626195&4294967295,N=T+(C<<12&4294967295|C>>>20),C=S+(I^N&(T^I))+P[14]+2792965006&4294967295,S=N+(C<<17&4294967295|C>>>15),C=I+(T^S&(N^T))+P[15]+1236535329&4294967295,I=S+(C<<22&4294967295|C>>>10),C=T+(S^N&(I^S))+P[1]+4129170786&4294967295,T=I+(C<<5&4294967295|C>>>27),C=N+(I^S&(T^I))+P[6]+3225465664&4294967295,N=T+(C<<9&4294967295|C>>>23),C=S+(T^I&(N^T))+P[11]+643717713&4294967295,S=N+(C<<14&4294967295|C>>>18),C=I+(N^T&(S^N))+P[0]+3921069994&4294967295,I=S+(C<<20&4294967295|C>>>12),C=T+(S^N&(I^S))+P[5]+3593408605&4294967295,T=I+(C<<5&4294967295|C>>>27),C=N+(I^S&(T^I))+P[10]+38016083&4294967295,N=T+(C<<9&4294967295|C>>>23),C=S+(T^I&(N^T))+P[15]+3634488961&4294967295,S=N+(C<<14&4294967295|C>>>18),C=I+(N^T&(S^N))+P[4]+3889429448&4294967295,I=S+(C<<20&4294967295|C>>>12),C=T+(S^N&(I^S))+P[9]+568446438&4294967295,T=I+(C<<5&4294967295|C>>>27),C=N+(I^S&(T^I))+P[14]+3275163606&4294967295,N=T+(C<<9&4294967295|C>>>23),C=S+(T^I&(N^T))+P[3]+4107603335&4294967295,S=N+(C<<14&4294967295|C>>>18),C=I+(N^T&(S^N))+P[8]+1163531501&4294967295,I=S+(C<<20&4294967295|C>>>12),C=T+(S^N&(I^S))+P[13]+2850285829&4294967295,T=I+(C<<5&4294967295|C>>>27),C=N+(I^S&(T^I))+P[2]+4243563512&4294967295,N=T+(C<<9&4294967295|C>>>23),C=S+(T^I&(N^T))+P[7]+1735328473&4294967295,S=N+(C<<14&4294967295|C>>>18),C=I+(N^T&(S^N))+P[12]+2368359562&4294967295,I=S+(C<<20&4294967295|C>>>12),C=T+(I^S^N)+P[5]+4294588738&4294967295,T=I+(C<<4&4294967295|C>>>28),C=N+(T^I^S)+P[8]+2272392833&4294967295,N=T+(C<<11&4294967295|C>>>21),C=S+(N^T^I)+P[11]+1839030562&4294967295,S=N+(C<<16&4294967295|C>>>16),C=I+(S^N^T)+P[14]+4259657740&4294967295,I=S+(C<<23&4294967295|C>>>9),C=T+(I^S^N)+P[1]+2763975236&4294967295,T=I+(C<<4&4294967295|C>>>28),C=N+(T^I^S)+P[4]+1272893353&4294967295,N=T+(C<<11&4294967295|C>>>21),C=S+(N^T^I)+P[7]+4139469664&4294967295,S=N+(C<<16&4294967295|C>>>16),C=I+(S^N^T)+P[10]+3200236656&4294967295,I=S+(C<<23&4294967295|C>>>9),C=T+(I^S^N)+P[13]+681279174&4294967295,T=I+(C<<4&4294967295|C>>>28),C=N+(T^I^S)+P[0]+3936430074&4294967295,N=T+(C<<11&4294967295|C>>>21),C=S+(N^T^I)+P[3]+3572445317&4294967295,S=N+(C<<16&4294967295|C>>>16),C=I+(S^N^T)+P[6]+76029189&4294967295,I=S+(C<<23&4294967295|C>>>9),C=T+(I^S^N)+P[9]+3654602809&4294967295,T=I+(C<<4&4294967295|C>>>28),C=N+(T^I^S)+P[12]+3873151461&4294967295,N=T+(C<<11&4294967295|C>>>21),C=S+(N^T^I)+P[15]+530742520&4294967295,S=N+(C<<16&4294967295|C>>>16),C=I+(S^N^T)+P[2]+3299628645&4294967295,I=S+(C<<23&4294967295|C>>>9),C=T+(S^(I|~N))+P[0]+4096336452&4294967295,T=I+(C<<6&4294967295|C>>>26),C=N+(I^(T|~S))+P[7]+1126891415&4294967295,N=T+(C<<10&4294967295|C>>>22),C=S+(T^(N|~I))+P[14]+2878612391&4294967295,S=N+(C<<15&4294967295|C>>>17),C=I+(N^(S|~T))+P[5]+4237533241&4294967295,I=S+(C<<21&4294967295|C>>>11),C=T+(S^(I|~N))+P[12]+1700485571&4294967295,T=I+(C<<6&4294967295|C>>>26),C=N+(I^(T|~S))+P[3]+2399980690&4294967295,N=T+(C<<10&4294967295|C>>>22),C=S+(T^(N|~I))+P[10]+4293915773&4294967295,S=N+(C<<15&4294967295|C>>>17),C=I+(N^(S|~T))+P[1]+2240044497&4294967295,I=S+(C<<21&4294967295|C>>>11),C=T+(S^(I|~N))+P[8]+1873313359&4294967295,T=I+(C<<6&4294967295|C>>>26),C=N+(I^(T|~S))+P[15]+4264355552&4294967295,N=T+(C<<10&4294967295|C>>>22),C=S+(T^(N|~I))+P[6]+2734768916&4294967295,S=N+(C<<15&4294967295|C>>>17),C=I+(N^(S|~T))+P[13]+1309151649&4294967295,I=S+(C<<21&4294967295|C>>>11),C=T+(S^(I|~N))+P[4]+4149444226&4294967295,T=I+(C<<6&4294967295|C>>>26),C=N+(I^(T|~S))+P[11]+3174756917&4294967295,N=T+(C<<10&4294967295|C>>>22),C=S+(T^(N|~I))+P[2]+718787259&4294967295,S=N+(C<<15&4294967295|C>>>17),C=I+(N^(S|~T))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+T&4294967295,k.g[1]=k.g[1]+(S+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+S&4294967295,k.g[3]=k.g[3]+N&4294967295}r.prototype.u=function(k,T){T===void 0&&(T=k.length);for(var I=T-this.blockSize,P=this.B,S=this.h,N=0;N<T;){if(S==0)for(;N<=I;)i(this,k,N),N+=this.blockSize;if(typeof k=="string"){for(;N<T;)if(P[S++]=k.charCodeAt(N++),S==this.blockSize){i(this,P),S=0;break}}else for(;N<T;)if(P[S++]=k[N++],S==this.blockSize){i(this,P),S=0;break}}this.h=S,this.o+=T},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var T=1;T<k.length-8;++T)k[T]=0;var I=8*this.o;for(T=k.length-8;T<k.length;++T)k[T]=I&255,I/=256;for(this.u(k),k=Array(16),T=I=0;4>T;++T)for(var P=0;32>P;P+=8)k[I++]=this.g[T]>>>P&255;return k};function s(k,T){var I=l;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=T(k)}function o(k,T){this.h=T;for(var I=[],P=!0,S=k.length-1;0<=S;S--){var N=k[S]|0;P&&N==T||(I[S]=N,P=!1)}this.g=I}var l={};function u(k){return-128<=k&&128>k?s(k,function(T){return new o([T|0],0>T?-1:0)}):new o([k|0],0>k?-1:0)}function c(k){if(isNaN(k)||!isFinite(k))return f;if(0>k)return y(c(-k));for(var T=[],I=1,P=0;k>=I;P++)T[P]=k/I|0,I*=4294967296;return new o(T,0)}function d(k,T){if(k.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k.charAt(0)=="-")return y(d(k.substring(1),T));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(T,8)),P=f,S=0;S<k.length;S+=8){var N=Math.min(8,k.length-S),C=parseInt(k.substring(S,S+N),T);8>N?(N=c(Math.pow(T,N)),P=P.j(N).add(c(C))):(P=P.j(I),P=P.add(c(C)))}return P}var f=u(0),p=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(E(this))return-y(this).m();for(var k=0,T=1,I=0;I<this.g.length;I++){var P=this.i(I);k+=(0<=P?P:4294967296+P)*T,T*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(v(this))return"0";if(E(this))return"-"+y(this).toString(k);for(var T=c(Math.pow(k,6)),I=this,P="";;){var S=O(I,T).g;I=V(I,S.j(T));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=S,v(I))return N+P;for(;6>N.length;)N="0"+N;P=N+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function v(k){if(k.h!=0)return!1;for(var T=0;T<k.g.length;T++)if(k.g[T]!=0)return!1;return!0}function E(k){return k.h==-1}n.l=function(k){return k=V(this,k),E(k)?-1:v(k)?0:1};function y(k){for(var T=k.g.length,I=[],P=0;P<T;P++)I[P]=~k.g[P];return new o(I,~k.h).add(p)}n.abs=function(){return E(this)?y(this):this},n.add=function(k){for(var T=Math.max(this.g.length,k.g.length),I=[],P=0,S=0;S<=T;S++){var N=P+(this.i(S)&65535)+(k.i(S)&65535),C=(N>>>16)+(this.i(S)>>>16)+(k.i(S)>>>16);P=C>>>16,N&=65535,C&=65535,I[S]=C<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function V(k,T){return k.add(y(T))}n.j=function(k){if(v(this)||v(k))return f;if(E(this))return E(k)?y(this).j(y(k)):y(y(this).j(k));if(E(k))return y(this.j(y(k)));if(0>this.l(g)&&0>k.l(g))return c(this.m()*k.m());for(var T=this.g.length+k.g.length,I=[],P=0;P<2*T;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var S=0;S<k.g.length;S++){var N=this.i(P)>>>16,C=this.i(P)&65535,oe=k.i(S)>>>16,Z=k.i(S)&65535;I[2*P+2*S]+=C*Z,L(I,2*P+2*S),I[2*P+2*S+1]+=N*Z,L(I,2*P+2*S+1),I[2*P+2*S+1]+=C*oe,L(I,2*P+2*S+1),I[2*P+2*S+2]+=N*oe,L(I,2*P+2*S+2)}for(P=0;P<T;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=T;P<2*T;P++)I[P]=0;return new o(I,0)};function L(k,T){for(;(k[T]&65535)!=k[T];)k[T+1]+=k[T]>>>16,k[T]&=65535,T++}function D(k,T){this.g=k,this.h=T}function O(k,T){if(v(T))throw Error("division by zero");if(v(k))return new D(f,f);if(E(k))return T=O(y(k),T),new D(y(T.g),y(T.h));if(E(T))return T=O(k,y(T)),new D(y(T.g),T.h);if(30<k.g.length){if(E(k)||E(T))throw Error("slowDivide_ only works with positive integers.");for(var I=p,P=T;0>=P.l(k);)I=U(I),P=U(P);var S=B(I,1),N=B(P,1);for(P=B(P,2),I=B(I,2);!v(P);){var C=N.add(P);0>=C.l(k)&&(S=S.add(I),N=C),P=B(P,1),I=B(I,1)}return T=V(k,S.j(T)),new D(S,T)}for(S=f;0<=k.l(T);){for(I=Math.max(1,Math.floor(k.m()/T.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),N=c(I),C=N.j(T);E(C)||0<C.l(k);)I-=P,N=c(I),C=N.j(T);v(N)&&(N=p),S=S.add(N),k=V(k,C)}return new D(S,k)}n.A=function(k){return O(this,k).h},n.and=function(k){for(var T=Math.max(this.g.length,k.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)&k.i(P);return new o(I,this.h&k.h)},n.or=function(k){for(var T=Math.max(this.g.length,k.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)|k.i(P);return new o(I,this.h|k.h)},n.xor=function(k){for(var T=Math.max(this.g.length,k.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)^k.i(P);return new o(I,this.h^k.h)};function U(k){for(var T=k.g.length+1,I=[],P=0;P<T;P++)I[P]=k.i(P)<<1|k.i(P-1)>>>31;return new o(I,k.h)}function B(k,T){var I=T>>5;T%=32;for(var P=k.g.length-I,S=[],N=0;N<P;N++)S[N]=0<T?k.i(N+I)>>>T|k.i(N+I+1)<<32-T:k.i(N+I);return new o(S,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Af=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,zn=o}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rf,ti,kf,ds,$o,Pf,Cf,Sf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ts=="object"&&ts];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var b=0;b<a.length-1;b++){var F=a[b];if(!(F in m))break e;m=m[F]}a=a[a.length-1],b=m[a],h=h(b),h!=b&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,b=!1,F={next:function(){if(!b&&m<a.length){var z=m++;return{value:h(z,a[z]),done:!1}}return b=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,m){return a.call.apply(a.bind,arguments)}function f(a,h,m){if(!a)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,b),a.apply(h,F)}}return function(){return a.apply(h,arguments)}}function p(a,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function g(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var b=m.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function v(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(b,F,z){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return h.prototype[F].apply(b,X)}}function E(a){const h=a.length;if(0<h){const m=Array(h);for(let b=0;b<h;b++)m[b]=a[b];return m}return[]}function y(a,h){for(let m=1;m<arguments.length;m++){const b=arguments[m];if(u(b)){const F=a.length||0,z=b.length||0;a.length=F+z;for(let X=0;X<z;X++)a[F+X]=b[X]}else a.push(b)}}class V{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var U=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function B(a,h,m){for(const b in a)h.call(m,a[b],b,a)}function k(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function T(a){const h={};for(const m in a)h[m]=a[m];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,h){let m,b;for(let F=1;F<arguments.length;F++){b=arguments[F];for(m in b)a[m]=b[m];for(let z=0;z<I.length;z++)m=I[z],Object.prototype.hasOwnProperty.call(b,m)&&(a[m]=b[m])}}function S(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=he;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,m){const b=Z.get();b.set(h,m),this.h?this.h.next=b:this.g=b,this.h=b}}var Z=new V(()=>new ce,a=>a.reset());class ce{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,de=!1,he=new oe,Ne=()=>{const a=l.Promise.resolve(void 0);Y=()=>{a.then(Fe)}};var Fe=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(m){N(m)}var h=Z;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}de=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var je=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function Le(a,h){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{O(h.nodeName);var F=!0;break e}catch{}F=!1}F||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Re[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Le.aa.h.call(this)}}v(Le,Ie);var Re={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),De=0;function $(a,h,m,b,F){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!b,this.ha=F,this.key=++De,this.da=this.fa=!1}function le(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a){this.src=a,this.g={},this.h=0}Q.prototype.add=function(a,h,m,b,F){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var X=ne(a,h,b,F);return-1<X?(h=a[X],m||(h.fa=!1)):(h=new $(h,this.src,z,!!b,F),h.fa=m,a.push(h)),h};function te(a,h){var m=h.type;if(m in a.g){var b=a.g[m],F=Array.prototype.indexOf.call(b,h,void 0),z;(z=0<=F)&&Array.prototype.splice.call(b,F,1),z&&(le(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function ne(a,h,m,b){for(var F=0;F<a.length;++F){var z=a[F];if(!z.da&&z.listener==h&&z.capture==!!m&&z.ha==b)return F}return-1}var j="closure_lm_"+(1e6*Math.random()|0),J={};function pe(a,h,m,b,F){if(Array.isArray(h)){for(var z=0;z<h.length;z++)pe(a,h[z],m,b,F);return null}return m=qe(m),a&&a[be]?a.K(h,m,c(b)?!!b.capture:!1,F):gt(a,h,m,!1,b,F)}function gt(a,h,m,b,F,z){if(!h)throw Error("Invalid event type");var X=c(F)?!!F.capture:!!F,Be=K(a);if(Be||(a[j]=Be=new Q(a)),m=Be.add(h,m,b,X,z),m.proxy)return m;if(b=At(),m.proxy=b,b.src=a,b.listener=m,a.addEventListener)je||(F=X),F===void 0&&(F=!1),a.addEventListener(h.toString(),b,F);else if(a.attachEvent)a.attachEvent(Tt(h.toString()),b);else if(a.addListener&&a.removeListener)a.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return m}function At(){function a(m){return h.call(a.src,a.listener,m)}const h=re;return a}function Rt(a,h,m,b,F){if(Array.isArray(h))for(var z=0;z<h.length;z++)Rt(a,h[z],m,b,F);else b=c(b)?!!b.capture:!!b,m=qe(m),a&&a[be]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],m=ne(z,m,b,F),-1<m&&(le(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=K(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ne(h,m,b,F)),(m=-1<a?h[a]:null)&&kt(m))}function kt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[be])te(h.i,a);else{var m=a.type,b=a.proxy;h.removeEventListener?h.removeEventListener(m,b,a.capture):h.detachEvent?h.detachEvent(Tt(m),b):h.addListener&&h.removeListener&&h.removeListener(b),(m=K(h))?(te(m,a),m.h==0&&(m.src=null,h[j]=null)):le(a)}}}function Tt(a){return a in J?J[a]:J[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Le(h,this);var m=a.listener,b=a.ha||a.src;a.fa&&kt(a),a=m.call(b,h)}return a}function K(a){return a=a[j],a instanceof Q?a:null}var me="__closure_events_fn_"+(1e9*Math.random()>>>0);function qe(a){return typeof a=="function"?a:(a[me]||(a[me]=function(h){return a.handleEvent(h)}),a[me])}function Ae(){ye.call(this),this.i=new Q(this),this.M=this,this.F=null}v(Ae,ye),Ae.prototype[be]=!0,Ae.prototype.removeEventListener=function(a,h,m,b){Rt(this,a,h,m,b)};function Ue(a,h){var m,b=a.F;if(b)for(m=[];b;b=b.F)m.push(b);if(a=a.M,b=h.type||h,typeof h=="string")h=new Ie(h,a);else if(h instanceof Ie)h.target=h.target||a;else{var F=h;h=new Ie(b,a),P(h,F)}if(F=!0,m)for(var z=m.length-1;0<=z;z--){var X=h.g=m[z];F=Bt(X,b,!0,h)&&F}if(X=h.g=a,F=Bt(X,b,!0,h)&&F,F=Bt(X,b,!1,h)&&F,m)for(z=0;z<m.length;z++)X=h.g=m[z],F=Bt(X,b,!1,h)&&F}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],b=0;b<m.length;b++)le(m[b]);delete a.g[h],a.h--}}this.F=null},Ae.prototype.K=function(a,h,m,b){return this.i.add(String(a),h,!1,m,b)},Ae.prototype.L=function(a,h,m,b){return this.i.add(String(a),h,!0,m,b)};function Bt(a,h,m,b){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var F=!0,z=0;z<h.length;++z){var X=h[z];if(X&&!X.da&&X.capture==m){var Be=X.listener,ot=X.ha||X.src;X.fa&&te(a.i,X),F=Be.call(ot,b)!==!1&&F}}return F&&!b.defaultPrevented}function st(a,h,m){if(typeof a=="function")m&&(a=p(a,m));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rr(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,rr(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class oo extends ye{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(a){ye.call(this),this.h=a,this.g={}}v(Sn,ye);var Ui=[];function bl(a){B(a.g,function(h,m){this.g.hasOwnProperty(m)&&kt(h)},a),a.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),bl(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=l.JSON.stringify,gm=l.JSON.parse,ym=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function lo(){}lo.prototype.h=null;function Al(a){return a.h||(a.h=a.i())}function Rl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uo(){Ie.call(this,"d")}v(uo,Ie);function co(){Ie.call(this,"c")}v(co,Ie);var Nn={},kl=null;function Fi(){return kl=kl||new Ae}Nn.La="serverreachability";function Pl(a){Ie.call(this,Nn.La,a)}v(Pl,Ie);function zr(a){const h=Fi();Ue(h,new Pl(h))}Nn.STAT_EVENT="statevent";function Cl(a,h){Ie.call(this,Nn.STAT_EVENT,a),this.stat=h}v(Cl,Ie);function yt(a){const h=Fi();Ue(h,new Cl(h,a))}Nn.Ma="timingevent";function Sl(a,h){Ie.call(this,Nn.Ma,a),this.size=h}v(Sl,Ie);function Hr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Wr(){this.g=!0}Wr.prototype.xa=function(){this.g=!1};function vm(a,h,m,b,F,z){a.info(function(){if(a.g)if(z)for(var X="",Be=z.split("&"),ot=0;ot<Be.length;ot++){var Ve=Be[ot].split("=");if(1<Ve.length){var ht=Ve[0];Ve=Ve[1];var dt=ht.split("_");X=2<=dt.length&&dt[1]=="type"?X+(ht+"="+Ve+"&"):X+(ht+"=redacted&")}}else X=null;else X=z;return"XMLHTTP REQ ("+b+") [attempt "+F+"]: "+h+`
`+m+`
`+X})}function wm(a,h,m,b,F,z,X){a.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+F+"]: "+h+`
`+m+`
`+z+" "+X})}function ir(a,h,m,b){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Em(a,m)+(b?" "+b:"")})}function Tm(a,h){a.info(function(){return"TIMEOUT: "+h})}Wr.prototype.info=function(){};function Em(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var b=m[a];if(!(2>b.length)){var F=b[1];if(Array.isArray(F)&&!(1>F.length)){var z=F[0];if(z!="noop"&&z!="stop"&&z!="close")for(var X=1;X<F.length;X++)F[X]=""}}}}return ao(m)}catch{return h}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ho;function ji(){}v(ji,lo),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},ho=new ji;function un(a,h,m,b){this.j=a,this.i=h,this.l=m,this.R=b||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dl}function Dl(){this.i=null,this.g="",this.h=!1}var Vl={},fo={};function po(a,h,m){a.L=1,a.v=Wi(Yt(h)),a.m=m,a.P=!0,Ol(a,null)}function Ol(a,h){a.F=Date.now(),qi(a),a.A=Yt(a.v);var m=a.A,b=a.R;Array.isArray(b)||(b=[String(b)]),Ql(m.i,"t",b),a.C=0,m=a.j.J,a.h=new Dl,a.g=du(a.j,m?h:null,!a.m),0<a.O&&(a.M=new oo(p(a.Y,a,a.g),a.O)),h=a.U,m=a.g,b=a.ca;var F="readystatechange";Array.isArray(F)||(F&&(Ui[0]=F.toString()),F=Ui);for(var z=0;z<F.length;z++){var X=pe(m,F[z],b||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),zr(),vm(a.i,a.u,a.A,a.l,a.R,a.m)}un.prototype.ca=function(a){a=a.target;const h=this.M;h&&Jt(a)==3?h.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const dt=Jt(this.g);var h=this.g.Ba();const ar=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||dt!=4||h==7||(h==8||0>=ar?zr(3):zr(2)),mo(this);var m=this.g.Z();this.X=m;t:if(Ll(this)){var b=tu(this.g);a="";var F=b.length,z=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Gr(this);var X="";break t}this.h.i=new l.TextDecoder}for(h=0;h<F;h++)this.h.h=!0,a+=this.h.i.decode(b[h],{stream:!(z&&h==F-1)});b.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,wm(this.i,this.u,this.A,this.l,this.R,dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,ot=this.g;if((Be=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Be)){var Ve=Be;break t}}Ve=null}if(m=Ve)ir(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_o(this,m);else{this.o=!1,this.s=3,yt(12),Dn(this),Gr(this);break e}}if(this.P){m=!0;let Ot;for(;!this.J&&this.C<X.length;)if(Ot=Im(this,X),Ot==fo){dt==4&&(this.s=4,yt(14),m=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Vl){this.s=4,yt(15),ir(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else ir(this.i,this.l,Ot,null),_o(this,Ot);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||X.length!=0||this.h.h||(this.s=1,yt(16),m=!1),this.o=this.o&&m,!m)ir(this.i,this.l,X,"[Invalid Chunked Response]"),Dn(this),Gr(this);else if(0<X.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Eo(ht),ht.M=!0,yt(11))}}else ir(this.i,this.l,X,null),_o(this,X);dt==4&&Dn(this),this.o&&!this.J&&(dt==4?lu(this.j,this):(this.o=!1,qi(this)))}else jm(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Dn(this),Gr(this)}}}catch{}finally{}};function Ll(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Im(a,h){var m=a.C,b=h.indexOf(`
`,m);return b==-1?fo:(m=Number(h.substring(m,b)),isNaN(m)?Vl:(b+=1,b+m>h.length?fo:(h=h.slice(b,b+m),a.C=b+m,h)))}un.prototype.cancel=function(){this.J=!0,Dn(this)};function qi(a){a.S=Date.now()+a.I,Ml(a,a.I)}function Ml(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hr(p(a.ba,a),h)}function mo(a){a.B&&(l.clearTimeout(a.B),a.B=null)}un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Tm(this.i,this.A),this.L!=2&&(zr(),yt(17)),Dn(this),this.s=2,Gr(this)):Ml(this,this.S-a)};function Gr(a){a.j.G==0||a.J||lu(a.j,a)}function Dn(a){mo(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bl(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function _o(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||go(m.h,a))){if(!a.K&&go(m.h,a)&&m.G==3){try{var b=m.Da.g.parse(h)}catch{b=null}if(Array.isArray(b)&&b.length==3){var F=b;if(F[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Yi(m),Qi(m);else break e;To(m),yt(18)}}else m.za=F[1],0<m.za-m.T&&37500>F[2]&&m.F&&m.v==0&&!m.C&&(m.C=Hr(p(m.Za,m),6e3));if(1>=Bl(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else On(m,11)}else if((a.K||m.g==a)&&Yi(m),!L(h))for(F=m.Da.g.parse(h),h=0;h<F.length;h++){let Ve=F[h];if(m.T=Ve[0],Ve=Ve[1],m.G==2)if(Ve[0]=="c"){m.K=Ve[1],m.ia=Ve[2];const ht=Ve[3];ht!=null&&(m.la=ht,m.j.info("VER="+m.la));const dt=Ve[4];dt!=null&&(m.Aa=dt,m.j.info("SVER="+m.Aa));const ar=Ve[5];ar!=null&&typeof ar=="number"&&0<ar&&(b=1.5*ar,m.L=b,m.j.info("backChannelRequestTimeoutMs_="+b)),b=m;const Ot=a.g;if(Ot){const $i=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var z=b.h;z.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(yo(z,z.h),z.h=null))}if(b.D){const Io=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(b.ya=Io,ze(b.I,b.D,Io))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),b=m;var X=a;if(b.qa=hu(b,b.J?b.ia:null,b.W),X.K){jl(b.h,X);var Be=X,ot=b.L;ot&&(Be.I=ot),Be.B&&(mo(Be),qi(Be)),b.g=X}else ou(b);0<m.i.length&&Xi(m)}else Ve[0]!="stop"&&Ve[0]!="close"||On(m,7);else m.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?On(m,7):wo(m):Ve[0]!="noop"&&m.l&&m.l.ta(Ve),m.v=0)}}zr(4)}catch{}}var bm=class{constructor(a,h){this.g=a,this.map=h}};function Ul(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bl(a){return a.h?1:a.g?a.g.size:0}function go(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yo(a,h){a.g?a.g.add(h):a.h=h}function jl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ul.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ql(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return E(a.i)}function Am(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,b=0;b<m;b++)h.push(a[b]);return h}h=[],m=0;for(b in a)h[m++]=a[b];return h}function Rm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const b in a)h[m++]=b;return h}}}function zl(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=Rm(a),b=Am(a),F=b.length,z=0;z<F;z++)h.call(void 0,b[z],m&&m[z],a)}var Hl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var b=a[m].indexOf("="),F=null;if(0<=b){var z=a[m].substring(0,b);F=a[m].substring(b+1)}else z=a[m];h(z,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Vn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vn){this.h=a.h,zi(this,a.j),this.o=a.o,this.g=a.g,Hi(this,a.s),this.l=a.l;var h=a.i,m=new Qr;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Wl(this,m),this.m=a.m}else a&&(h=String(a).match(Hl))?(this.h=!1,zi(this,h[1]||"",!0),this.o=Kr(h[2]||""),this.g=Kr(h[3]||"",!0),Hi(this,h[4]),this.l=Kr(h[5]||"",!0),Wl(this,h[6]||"",!0),this.m=Kr(h[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Vn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(xr(h,Gl,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(xr(h,Gl,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(xr(m,m.charAt(0)=="/"?Sm:Cm,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",xr(m,Dm)),a.join("")};function Yt(a){return new Vn(a)}function zi(a,h,m){a.j=m?Kr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Hi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Wl(a,h,m){h instanceof Qr?(a.i=h,Vm(a.i,a.h)):(m||(h=xr(h,Nm)),a.i=new Qr(h,a.h))}function ze(a,h,m){a.i.set(h,m)}function Wi(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Kr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xr(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,Pm),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gl=/[#\/\?@]/g,Cm=/[#\?:]/g,Sm=/[#\?]/g,Nm=/[#\?@]/g,Dm=/#/g;function Qr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cn(a){a.g||(a.g=new Map,a.h=0,a.i&&km(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}n=Qr.prototype,n.add=function(a,h){cn(this),this.i=null,a=sr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Kl(a,h){cn(a),h=sr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xl(a,h){return cn(a),h=sr(a,h),a.g.has(h)}n.forEach=function(a,h){cn(this),this.g.forEach(function(m,b){m.forEach(function(F){a.call(h,F,b,this)},this)},this)},n.na=function(){cn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let b=0;b<h.length;b++){const F=a[b];for(let z=0;z<F.length;z++)m.push(h[b])}return m},n.V=function(a){cn(this);let h=[];if(typeof a=="string")xl(this,a)&&(h=h.concat(this.g.get(sr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},n.set=function(a,h){return cn(this),this.i=null,a=sr(this,a),xl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ql(a,h,m){Kl(a,h),0<m.length&&(a.i=null,a.g.set(sr(a,h),E(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var b=h[m];const z=encodeURIComponent(String(b)),X=this.V(b);for(b=0;b<X.length;b++){var F=z;X[b]!==""&&(F+="="+encodeURIComponent(String(X[b]))),a.push(F)}}return this.i=a.join("&")};function sr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Vm(a,h){h&&!a.j&&(cn(a),a.i=null,a.g.forEach(function(m,b){var F=b.toLowerCase();b!=F&&(Kl(this,b),Ql(this,F,m))},a)),a.j=h}function Om(a,h){const m=new Wr;if(l.Image){const b=new Image;b.onload=g(hn,m,"TestLoadImage: loaded",!0,h,b),b.onerror=g(hn,m,"TestLoadImage: error",!1,h,b),b.onabort=g(hn,m,"TestLoadImage: abort",!1,h,b),b.ontimeout=g(hn,m,"TestLoadImage: timeout",!1,h,b),l.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=a}else h(!1)}function Lm(a,h){const m=new Wr,b=new AbortController,F=setTimeout(()=>{b.abort(),hn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:b.signal}).then(z=>{clearTimeout(F),z.ok?hn(m,"TestPingServer: ok",!0,h):hn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(F),hn(m,"TestPingServer: error",!1,h)})}function hn(a,h,m,b,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),b(m)}catch{}}function Mm(){this.g=new ym}function Um(a,h,m){const b=m||"";try{zl(a,function(F,z){let X=F;c(F)&&(X=ao(F)),h.push(b+z+"="+encodeURIComponent(X))})}catch(F){throw h.push(b+"type="+encodeURIComponent("_badmap")),F}}function Gi(a){this.l=a.Ub||null,this.j=a.eb||!1}v(Gi,lo),Gi.prototype.g=function(){return new Ki(this.l,this.j)},Gi.prototype.i=function(a){return function(){return a}}({});function Ki(a,h){Ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Ki,Ae),n=Ki.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Yr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yr(this)),this.g&&(this.readyState=3,Yr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Xr(this):Yr(this),this.readyState==3&&Xl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Xr(this))},n.Qa=function(a){this.g&&(this.response=a,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function Yr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yl(a){let h="";return B(a,function(m,b){h+=b,h+=":",h+=m,h+=`\r
`}),h}function vo(a,h,m){e:{for(b in m){var b=!1;break e}b=!0}b||(m=Yl(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):ze(a,h,m))}function Qe(a){Ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Qe,Ae);var Fm=/^https?$/i,Bm=["POST","PUT"];n=Qe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,m,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ho.g(),this.v=this.o?Al(this.o):Al(ho),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){Jl(this,z);return}if(a=m||"",m=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var F in b)m.set(F,b[F]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const z of b.keys())m.set(z,b.get(z));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),F=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bm,h,void 0))||b||F||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,X]of m)this.g.setRequestHeader(z,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eu(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Jl(this,z)}};function Jl(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,$l(a),xi(a)}function $l(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zl(this):this.bb())},n.bb=function(){Zl(this)};function Zl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Jt(a)!=4||a.Z()!=2)){if(a.u&&Jt(a)==4)st(a.Ea,0,a);else if(Ue(a,"readystatechange"),Jt(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var b;if(b=X===0){var F=String(a.D).match(Hl)[1]||null;!F&&l.self&&l.self.location&&(F=l.self.location.protocol.slice(0,-1)),b=!Fm.test(F?F.toLowerCase():"")}m=b}if(m)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var z=2<Jt(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",$l(a)}}finally{xi(a)}}}}function xi(a,h){if(a.g){eu(a);const m=a.g,b=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ue(a,"ready");try{m.onreadystatechange=b}catch{}}}function eu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Jt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),gm(h)}};function tu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jm(a){const h={};a=(a.g&&2<=Jt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<a.length;b++){if(L(a[b]))continue;var m=S(a[b]);const F=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=h[F]||[];h[F]=z,z.push(m)}k(h,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function nu(a){this.Aa=0,this.i=[],this.j=new Wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,a),this.cb=Jr("retryDelaySeedMs",1e4,a),this.Wa=Jr("forwardChannelMaxRetries",2,a),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ul(a&&a.concurrentRequestLimit),this.Da=new Mm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nu.prototype,n.la=8,n.G=1,n.connect=function(a,h,m,b){yt(0),this.W=a,this.H=h||{},m&&b!==void 0&&(this.H.OSID=m,this.H.OAID=b),this.F=this.X,this.I=hu(this,null,this.W),Xi(this)};function wo(a){if(ru(a),a.G==3){var h=a.U++,m=Yt(a.I);if(ze(m,"SID",a.K),ze(m,"RID",h),ze(m,"TYPE","terminate"),$r(a,m),h=new un(a,a.j,h),h.L=2,h.v=Wi(Yt(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=du(h.j,null),h.g.ea(h.v)),h.F=Date.now(),qi(h)}cu(a)}function Qi(a){a.g&&(Eo(a),a.g.cancel(),a.g=null)}function ru(a){Qi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Yi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Xi(a){if(!Fl(a.h)&&!a.s){a.s=!0;var h=a.Ga;Y||Ne(),de||(Y(),de=!0),he.add(h,a),a.B=0}}function qm(a,h){return Bl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hr(p(a.Ga,a,h),uu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const F=new un(this,this.j,a);let z=this.o;if(this.S&&(z?(z=T(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(F.H=z,z=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var b=this.i[m];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(h+=b,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=su(this,F,h),m=Yt(this.I),ze(m,"RID",a),ze(m,"CVER",22),this.D&&ze(m,"X-HTTP-Session-Id",this.D),$r(this,m),z&&(this.O?h="headers="+encodeURIComponent(String(Yl(z)))+"&"+h:this.m&&vo(m,this.m,z)),yo(this.h,F),this.Ua&&ze(m,"TYPE","init"),this.P?(ze(m,"$req",h),ze(m,"SID","null"),F.T=!0,po(F,m,null)):po(F,m,h),this.G=2}}else this.G==3&&(a?iu(this,a):this.i.length==0||Fl(this.h)||iu(this))};function iu(a,h){var m;h?m=h.l:m=a.U++;const b=Yt(a.I);ze(b,"SID",a.K),ze(b,"RID",m),ze(b,"AID",a.T),$r(a,b),a.m&&a.o&&vo(b,a.m,a.o),m=new un(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=su(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yo(a.h,m),po(m,b,h)}function $r(a,h){a.H&&B(a.H,function(m,b){ze(h,b,m)}),a.l&&zl({},function(m,b){ze(h,b,m)})}function su(a,h,m){m=Math.min(a.i.length,m);var b=a.l?p(a.l.Na,a.l,a):null;e:{var F=a.i;let z=-1;for(;;){const X=["count="+m];z==-1?0<m?(z=F[0].g,X.push("ofs="+z)):z=0:X.push("ofs="+z);let Be=!0;for(let ot=0;ot<m;ot++){let Ve=F[ot].g;const ht=F[ot].map;if(Ve-=z,0>Ve)z=Math.max(0,F[ot].g-100),Be=!1;else try{Um(ht,X,"req"+Ve+"_")}catch{b&&b(ht)}}if(Be){b=X.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,b}function ou(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Y||Ne(),de||(Y(),de=!0),he.add(h,a),a.v=0}}function To(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hr(p(a.Fa,a),uu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hr(p(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Qi(this),au(this))};function Eo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function au(a){a.g=new un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Yt(a.qa);ze(h,"RID","rpc"),ze(h,"SID",a.K),ze(h,"AID",a.T),ze(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(h,"TO",a.ja),ze(h,"TYPE","xmlhttp"),$r(a,h),a.m&&a.o&&vo(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Wi(Yt(h)),m.m=null,m.P=!0,Ol(m,a)}n.Za=function(){this.C!=null&&(this.C=null,Qi(this),To(this),yt(19))};function Yi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lu(a,h){var m=null;if(a.g==h){Yi(a),Eo(a),a.g=null;var b=2}else if(go(a.h,h))m=h.D,jl(a.h,h),b=1;else return;if(a.G!=0){if(h.o)if(b==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var F=a.B;b=Fi(),Ue(b,new Sl(b,m)),Xi(a)}else ou(a);else if(F=h.s,F==3||F==0&&0<h.X||!(b==1&&qm(a,h)||b==2&&To(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),F){case 1:On(a,5);break;case 4:On(a,10);break;case 3:On(a,6);break;default:On(a,2)}}}function uu(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function On(a,h){if(a.j.info("Error code "+h),h==2){var m=p(a.fb,a),b=a.Xa;const F=!b;b=new Vn(b||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zi(b,"https"),Wi(b),F?Om(b.toString(),m):Lm(b.toString(),m)}else yt(2);a.G=0,a.l&&a.l.sa(h),cu(a),ru(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function cu(a){if(a.G=0,a.ka=[],a.l){const h=ql(a.h);(h.length!=0||a.i.length!=0)&&(y(a.ka,h),y(a.ka,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.ra()}}function hu(a,h,m){var b=m instanceof Vn?Yt(m):new Vn(m);if(b.g!="")h&&(b.g=h+"."+b.g),Hi(b,b.s);else{var F=l.location;b=F.protocol,h=h?h+"."+F.hostname:F.hostname,F=+F.port;var z=new Vn(null);b&&zi(z,b),h&&(z.g=h),F&&Hi(z,F),m&&(z.l=m),b=z}return m=a.D,h=a.ya,m&&h&&ze(b,m,h),ze(b,"VER",a.la),$r(a,b),b}function du(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new Gi({eb:m})):new Qe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}n=fu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ji(){}Ji.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){Ae.call(this),this.g=new nu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new or(this)}v(Pt,Ae),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){wo(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=ao(a),a=m);h.i.push(new bm(h.Ya++,a)),h.G==3&&Xi(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,Pt.aa.N.call(this)};function pu(a){uo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}v(pu,uo);function mu(){co.call(this),this.status=1}v(mu,co);function or(a){this.g=a}v(or,fu),or.prototype.ua=function(){Ue(this.g,"a")},or.prototype.ta=function(a){Ue(this.g,new pu(a))},or.prototype.sa=function(a){Ue(this.g,new mu)},or.prototype.ra=function(){Ue(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Sf=function(){return new Ji},Cf=function(){return Fi()},Pf=Nn,$o={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,ds=Bi,Nl.COMPLETE="complete",kf=Nl,Rl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,ti=Rl,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Rf=Qe}).apply(typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{});const Xu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new ya("@firebase/firestore");function Zr(){return Kn.logLevel}function ae(n,...e){if(Kn.logLevel<=Pe.DEBUG){const t=e.map(Da);Kn.debug(`Firestore (${Mr}): ${n}`,...t)}}function an(n,...e){if(Kn.logLevel<=Pe.ERROR){const t=e.map(Da);Kn.error(`Firestore (${Mr}): ${n}`,...t)}}function Ir(n,...e){if(Kn.logLevel<=Pe.WARN){const t=e.map(Da);Kn.warn(`Firestore (${Mr}): ${n}`,...t)}}function Da(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+n;throw an(e),new Error(e)}function Me(n,e){n||ge()}function we(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pt.UNAUTHENTICATED))}shutdown(){}}class Ov{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lv{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new Nf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new pt(e)}}class Mv{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Mv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Me(this.o===void 0);const r=s=>{s.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string"),this.R=t.token,new Fv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Oe(n,e){return n<e?-1:n>e?1:0}function br(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new rt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new rt(0,0))}static max(){return new ve(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(),r===void 0?r=e.length-t:r>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class He extends _i{construct(e,t,r){return new He(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new He(t)}static emptyPath(){return new He([])}}const qv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends _i{construct(e,t,r){return new lt(e,t,r)}static isValidIdentifier(e){return qv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(t)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(He.fromString(e))}static fromName(e){return new fe(He.fromString(e).popFirst(5))}static empty(){return new fe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new He(e.slice()))}}function zv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new rt(t+1,0):new rt(t,r));return new bn(i,fe.empty(),e)}function Hv(n){return new bn(n.readTime,n.key,-1)}class bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bn(ve.min(),fe.empty(),-1)}static max(){return new bn(ve.max(),fe.empty(),-1)}}function Wv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==Gv)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,r)=>{t(e)})}static reject(e){return new G((t,r)=>{r(e)})}static waitFor(e){return new G((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next(i=>i?G.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new G((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new G((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function xv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Di(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Va.oe=-1;function js(n){return n==null}function As(n){return n===0&&1/n==-1/0}function Qv(n){return typeof n=="number"&&Number.isInteger(n)&&!As(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ns(this.root,e,this.comparator,!0)}}class ns{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new at(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,r,i,s){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ju(this.data.getIterator())}getIteratorFrom(e){return new Ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ut(this.comparator);return t.data=e,t}}class Ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new ut(lt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return br(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Of("Invalid base64 string: "+s):s}}(e);return new ct(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Xv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(n){if(Me(!!n),typeof n=="string"){let e=0;const t=Xv.exec(n);if(Me(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(n.seconds),nanos:Je(n.nanos)}}function Je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xn(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function La(n){const e=n.mapValue.fields.__previous_value__;return Oa(e)?La(e):e}function gi(n){const e=An(n.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,r,i,s,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class yi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={mapValue:{}};function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:$v(n)?9007199254740991:Jv(n)?10:11:ge()}function Qt(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gi(n).isEqual(gi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=An(i.timestampValue),l=An(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return xn(i.bytesValue).isEqual(xn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),l=Je(s.doubleValue);return o===l?As(o)===As(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return br(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Yu(o)!==Yu(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Qt(o[u],l[u])))return!1;return!0}(n,e);default:return ge()}}function vi(n,e){return(n.values||[]).find(t=>Qt(t,e))!==void 0}function Ar(n,e){if(n===e)return 0;const t=Qn(n),r=Qn(e);if(t!==r)return Oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Je(s.integerValue||s.doubleValue),u=Je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return $u(n.timestampValue,e.timestampValue);case 4:return $u(gi(n),gi(e));case 5:return Oe(n.stringValue,e.stringValue);case 6:return function(s,o){const l=xn(s),u=xn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Oe(l[c],u[c]);if(d!==0)return d}return Oe(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Oe(Je(s.latitude),Je(o.latitude));return l!==0?l:Oe(Je(s.longitude),Je(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zu(n.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const f=s.fields||{},p=o.fields||{},g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,v=(u=p.value)===null||u===void 0?void 0:u.arrayValue,E=Oe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0);return E!==0?E:Zu(g,v)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===rs.mapValue&&o===rs.mapValue)return 0;if(s===rs.mapValue)return 1;if(o===rs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Oe(u[f],d[f]);if(p!==0)return p;const g=Ar(l[u[f]],c[d[f]]);if(g!==0)return g}return Oe(u.length,d.length)}(n.mapValue,e.mapValue);default:throw ge()}}function $u(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=An(n),r=An(e),i=Oe(t.seconds,r.seconds);return i!==0?i:Oe(t.nanos,r.nanos)}function Zu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Ar(t[i],r[i]);if(s)return s}return Oe(t.length,r.length)}function Rr(n){return Zo(n)}function Zo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=An(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Zo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zo(t.fields[o])}`;return i+"}"}(n.mapValue):ge()}function ec(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ea(n){return!!n&&"integerValue"in n}function Ma(n){return!!n&&"arrayValue"in n}function tc(n){return!!n&&"nullValue"in n}function nc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function Jv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ai(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ai(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $v(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=lt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=ai(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(ai(this.value))}}function Lf(n){const e=[];return Zn(n.fields,(t,r)=>{const i=new lt([t]);if(fs(r)){const s=Lf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ve.min(),ve.min(),ve.min(),Et.empty(),0)}static newFoundDocument(e,t,r,i){return new mt(e,1,t,ve.min(),r,i,0)}static newNoDocument(e,t){return new mt(e,2,t,ve.min(),ve.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new mt(e,3,t,ve.min(),ve.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function rc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),t.key):r=Ar(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ic(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{}class et extends Mf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tw(e,t,r):t==="array-contains"?new iw(e,r):t==="in"?new sw(e,r):t==="not-in"?new ow(e,r):t==="array-contains-any"?new aw(e,r):new et(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nw(e,r):new rw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ar(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(Ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends Mf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ft(e,t)}matches(e){return Uf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uf(n){return n.op==="and"}function Ff(n){return ew(n)&&Uf(n)}function ew(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function ta(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Rr(n.value);if(Ff(n))return n.filters.map(e=>ta(e)).join(",");{const e=n.filters.map(t=>ta(t)).join(",");return`${n.op}(${e})`}}function Bf(n,e){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(n,e):n instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Bf(o,i.filters[l]),!0):!1}(n,e):void ge()}function jf(n){return n instanceof et?function(t){return`${t.field.canonicalString()} ${t.op} ${Rr(t.value)}`}(n):n instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(jf).join(" ,")+"}"}(n):"Filter"}class tw extends et{constructor(e,t,r){super(e,t,r),this.key=fe.fromName(r.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class nw extends et{constructor(e,t){super(e,"in",t),this.keys=qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rw extends et{constructor(e,t){super(e,"not-in",t),this.keys=qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>fe.fromName(r.referenceValue))}class iw extends et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ma(t)&&vi(t.arrayValue,this.value)}}class sw extends et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vi(this.value.arrayValue,t)}}class ow extends et{constructor(e,t){super(e,"not-in",t)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vi(this.value.arrayValue,t)}}class aw extends et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function sc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new lw(n,e,t,r,i,s,o)}function Ua(n){const e=we(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ta(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),js(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Rr(r)).join(",")),e.ue=t}return e.ue}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ic(n.startAt,e.startAt)&&ic(n.endAt,e.endAt)}function na(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uw(n,e,t,r,i,s,o,l){return new Ur(n,e,t,r,i,s,o,l)}function Ba(n){return new Ur(n)}function oc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zf(n){return n.collectionGroup!==null}function li(n){const e=we(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wi(s,r))}),t.has(lt.keyField().canonicalString())||e.ce.push(new wi(lt.keyField(),r))}return e.ce}function Ht(n){const e=we(n);return e.le||(e.le=cw(e,li(n))),e.le}function cw(n,e){if(n.limitType==="F")return sc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wi(i.field,s)});const t=n.endAt?new Rs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rs(n.startAt.position,n.startAt.inclusive):null;return sc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ra(n,e){const t=n.filters.concat([e]);return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ia(n,e,t){return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qs(n,e){return Fa(Ht(n),Ht(e))&&n.limitType===e.limitType}function Hf(n){return`${Ua(Ht(n))}|lt:${n.limitType}`}function hr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>jf(i)).join(", ")}]`),js(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Rr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Rr(i)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function zs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):fe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of li(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=rc(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,li(r),i)||r.endAt&&!function(o,l,u){const c=rc(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,li(r),i))}(n,e)}function hw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wf(n){return(e,t)=>{let r=!1;for(const i of li(n)){const s=dw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dw(n,e,t){const r=n.field.isKeyField()?fe.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ar(u,c):ge()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new xe(fe.comparator);function ln(){return fw}const Gf=new xe(fe.comparator);function ni(...n){let e=Gf;for(const t of n)e=e.insert(t.key,t);return e}function Kf(n){let e=Gf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Fn(){return ui()}function xf(){return ui()}function ui(){return new Fr(n=>n.toString(),(n,e)=>n.isEqual(e))}const pw=new xe(fe.comparator),mw=new ut(fe.comparator);function ke(...n){let e=mw;for(const t of n)e=e.add(t);return e}const _w=new ut(Oe);function gw(){return _w}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:As(e)?"-0":e}}function Qf(n){return{integerValue:""+n}}function Xf(n,e){return Qv(e)?Qf(e):ja(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this._=void 0}}function yw(n,e,t){return n instanceof Ti?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Oa(s)&&(s=La(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof kr?Jf(n,e):n instanceof Pr?$f(n,e):function(i,s){const o=Yf(i,s),l=ac(o)+ac(i.Pe);return ea(o)&&ea(i.Pe)?Qf(l):ja(i.serializer,l)}(n,e)}function vw(n,e,t){return n instanceof kr?Jf(n,e):n instanceof Pr?$f(n,e):t}function Yf(n,e){return n instanceof Ei?function(r){return ea(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ti extends Hs{}class kr extends Hs{constructor(e){super(),this.elements=e}}function Jf(n,e){const t=Zf(e);for(const r of n.elements)t.some(i=>Qt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Pr extends Hs{constructor(e){super(),this.elements=e}}function $f(n,e){let t=Zf(e);for(const r of n.elements)t=t.filter(i=>!Qt(i,r));return{arrayValue:{values:t}}}class Ei extends Hs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ac(n){return Je(n.integerValue||n.doubleValue)}function Zf(n){return Ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.field=e,this.transform=t}}function ww(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kr&&i instanceof kr||r instanceof Pr&&i instanceof Pr?br(r.elements,i.elements,Qt):r instanceof Ei&&i instanceof Ei?Qt(r.Pe,i.Pe):r instanceof Ti&&i instanceof Ti}(n.transform,e.transform)}class Tw{constructor(e,t){this.version=e,this.transformResults=t}}class Dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gs{}function ep(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qa(n.key,Dt.none()):new Vi(n.key,n.data,Dt.none());{const t=n.data,r=Et.empty();let i=new ut(lt.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pn(n.key,r,new Ct(i.toArray()),Dt.none())}}function Ew(n,e,t){n instanceof Vi?function(i,s,o){const l=i.value.clone(),u=uc(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Pn?function(i,s,o){if(!ps(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=uc(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(tp(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ci(n,e,t,r){return n instanceof Vi?function(s,o,l,u){if(!ps(s.precondition,o))return l;const c=s.value.clone(),d=cc(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pn?function(s,o,l,u){if(!ps(s.precondition,o))return l;const c=cc(s.fieldTransforms,u,o),d=o.data;return d.setAll(tp(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,l){return ps(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Iw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Yf(r.transform,i||null);s!=null&&(t===null&&(t=Et.empty()),t.set(r.field,s))}return t||null}function lc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&br(r,i,(s,o)=>ww(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vi extends Gs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pn extends Gs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function uc(n,e,t){const r=new Map;Me(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,vw(o,l,t[i]))}return r}function cc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,yw(s,o,e))}return r}class qa extends Gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bw extends Gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ew(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=ep(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&br(this.mutations,e.mutations,(t,r)=>lc(t,r))&&br(this.baseMutations,e.baseMutations,(t,r)=>lc(t,r))}}class za{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Me(e.mutations.length===r.length);let i=function(){return pw}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new za(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ce;function Pw(n){switch(n){default:return ge();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function np(n){if(n===void 0)return an("GRPC error has no .code"),W.UNKNOWN;switch(n){case Ze.OK:return W.OK;case Ze.CANCELLED:return W.CANCELLED;case Ze.UNKNOWN:return W.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return W.INTERNAL;case Ze.UNAVAILABLE:return W.UNAVAILABLE;case Ze.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ze.NOT_FOUND:return W.NOT_FOUND;case Ze.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ze.ABORTED:return W.ABORTED;case Ze.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ze.DATA_LOSS:return W.DATA_LOSS;default:return ge()}}(Ce=Ze||(Ze={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new zn([4294967295,4294967295],0);function hc(n){const e=Cw().encode(n),t=new Af;return t.update(e),new Uint8Array(t.digest())}function dc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zn([t,r],0),new zn([i,s],0)]}class Ha{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ri(`Invalid padding: ${t}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ri(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(zn.fromNumber(r)));return i.compare(Sw)===1&&(i=new zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=hc(e),[r,i]=dc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ha(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=hc(e),[r,i]=dc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ks(ve.min(),i,new xe(Oe),ln(),ke())}}class Oi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Oi(r,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class rp{constructor(e,t){this.targetId=e,this.me=t}}class ip{constructor(e,t,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class fc{constructor(){this.fe=0,this.ge=mc(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),r=ke();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ge()}}),new Oi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=mc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nw{constructor(e){this.Le=e,this.Be=new Map,this.ke=ln(),this.qe=pc(),this.Qe=new xe(Oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(na(s))if(r===0){const o=new fe(s.path);this.Ue(t,o,mt.newNoDocument(o,ve.min()))}else Me(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=xn(r).toUint8Array()}catch(u){if(u instanceof Of)return Ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ha(o,i,s)}catch(u){return Ir(u instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&na(l.target)){const u=new fe(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,mt.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ke();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ks(e,t,this.Qe,this.ke,r);return this.ke=ln(),this.qe=pc(),this.Qe=new xe(Oe),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ut(Oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function pc(){return new xe(fe.comparator)}function mc(){return new xe(fe.comparator)}const Dw={asc:"ASCENDING",desc:"DESCENDING"},Vw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ow={and:"AND",or:"OR"};class Lw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sa(n,e){return n.useProto3Json||js(e)?e:{value:e}}function ks(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Mw(n,e){return ks(n,e.toTimestamp())}function Wt(n){return Me(!!n),ve.fromTimestamp(function(t){const r=An(t);return new rt(r.seconds,r.nanos)}(n))}function Wa(n,e){return oa(n,e).canonicalString()}function oa(n,e){const t=function(i){return new He(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function op(n){const e=He.fromString(n);return Me(hp(e)),e}function aa(n,e){return Wa(n.databaseId,e.path)}function Vo(n,e){const t=op(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(lp(t))}function ap(n,e){return Wa(n.databaseId,e)}function Uw(n){const e=op(n);return e.length===4?He.emptyPath():lp(e)}function la(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lp(n){return Me(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _c(n,e,t){return{name:aa(n,e),fields:t.value.mapValue.fields}}function Fw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Me(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?W.UNKNOWN:np(c.code);return new se(d,c.message||"")}(o);t=new ip(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vo(n,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):ve.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];t=new ms(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vo(n,r.document),s=r.readTime?Wt(r.readTime):ve.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];t=new ms([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vo(n,r.document),s=r.removedTargetIds||[];t=new ms([],s,i,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kw(i,s),l=r.targetId;t=new rp(l,o)}}return t}function Bw(n,e){let t;if(e instanceof Vi)t={update:_c(n,e.key,e.value)};else if(e instanceof qa)t={delete:aa(n,e.key)};else if(e instanceof Pn)t={update:_c(n,e.key,e.data),updateMask:Qw(e.fieldMask)};else{if(!(e instanceof bw))return ge();t={verify:aa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof kr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ge()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Mw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ge()}(n,e.precondition)),t}function jw(n,e){return n&&n.length>0?(Me(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Wt(i.updateTime):Wt(s);return o.isEqual(ve.min())&&(o=Wt(s)),new Tw(o,i.transformResults||[])}(t,e))):[]}function qw(n,e){return{documents:[ap(n,e.path)]}}function zw(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ap(n,i);const s=function(c){if(c.length!==0)return cp(Ft.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:dr(p.field),direction:Gw(p.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=sa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function Hw(n){let e=Uw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Me(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const p=up(f);return p instanceof Ft&&Ff(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(p=>function(v){return new wi(fr(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,js(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new Rs(g,p)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new Rs(g,p)}(t.endAt)),uw(e,i,o,s,l,"F",u,c)}function Ww(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function up(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fr(t.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fr(t.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fr(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fr(t.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(n):n.fieldFilter!==void 0?function(t){return et.create(fr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ft.create(t.compositeFilter.filters.map(r=>up(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(n):ge()}function Gw(n){return Dw[n]}function Kw(n){return Vw[n]}function xw(n){return Ow[n]}function dr(n){return{fieldPath:n.canonicalString()}}function fr(n){return lt.fromServerFormat(n.fieldPath)}function cp(n){return n instanceof et?function(t){if(t.op==="=="){if(nc(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NAN"}};if(tc(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nc(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NAN"}};if(tc(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(t.field),op:Kw(t.op),value:t.value}}}(n):n instanceof Ft?function(t){const r=t.getFilters().map(i=>cp(i));return r.length===1?r[0]:{compositeFilter:{op:xw(t.op),filters:r}}}(n):ge()}function Qw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,r,i,s=ve.min(),o=ve.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.ct=e}}function Yw(n){const e=Hw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ia(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.un=new $w}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(bn.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class $w{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ut(He.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cr(0)}static kn(){return new Cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.changes=new Fr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ci(r.mutation,i,Ct.empty(),rt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ke()){const i=Fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ni();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ke()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=ln();const o=ui(),l=function(){return ui()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Pn)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ci(d.mutation,c,d.mutation.getFieldMask(),rt.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>{var f;return l.set(c,new eT(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ui();let i=new xe((o,l)=>o-l),s=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||Ct.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ke()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=xf();d.forEach(p=>{if(!s.has(p)){const g=ep(t.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):G.resolve(Fn());let l=-1,u=s;return o.next(c=>G.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?G.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ke())).next(d=>({batchId:l,changes:Kf(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(r=>{let i=ni();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,s).next(l=>G.forEach(l,u=>{const c=function(f,p){return new Ur(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let l=ni();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ci(d.mutation,c,Ct.empty(),rt.now()),zs(t,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Yw(i.bundledQuery),readTime:Wt(i.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.overlays=new xe(fe.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Fn();return G.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),G.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const i=Fn(),s=t.length+1,o=new fe(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return G.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Fn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Fn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return G.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rw(t,r));let s=this.Ir.get(t);s===void 0&&(s=ke(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.Tr=new ut(it.Er),this.dr=new ut(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new it(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new fe(new He([])),r=new it(t,e),i=new it(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new fe(new He([])),r=new it(t,e),i=new it(t,e+1);let s=ke();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new it(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return fe.comparator(e.key,t.key)||Oe(e.wr,t.wr)}static Ar(e,t){return Oe(e.wr,t.wr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ut(it.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Aw(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new it(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ut(Oe);return t.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),G.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;fe.isDocumentKey(s)||(s=s.child(""));const o=new it(new fe(s),0);let l=new ut(Oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),G.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Me(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return G.forEach(t.mutations,i=>{const s=new it(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new it(t,0),i=this.br.firstAfterOrEqual(r);return G.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.Mr=e,this.docs=function(){return new xe(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(t))}getEntries(e,t){let r=ln();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ln();const o=t.path,l=new fe(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Wv(Hv(d),r)<=0||(i.has(d.key)||zs(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ge()}Or(e,t){return G.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new aT(this)}getSize(e){return G.resolve(this.size)}}class aT extends Zw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.persistence=e,this.Nr=new Fr(t=>Ua(t),Fa),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ga,this.targetCount=0,this.kr=Cr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Cr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Va(0),this.Kr=!1,this.Kr=!0,this.$r=new iT,this.referenceDelegate=e(this),this.Ur=new lT(this),this.indexManager=new Jw,this.remoteDocumentCache=function(i){return new oT(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Xw(t),this.Gr=new nT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new sT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){ae("MemoryPersistence","Starting transaction:",e);const i=new cT(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return G.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class cT extends Kv{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.Jr=new Ga,this.Yr=null}static Zr(e){return new Ka(e)}get Xr(){if(this.Yr)return this.Yr;throw ge()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,r=>{const i=fe.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,ve.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ke(),i=ke();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return p_()?8:xv(_t())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hT;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Zr()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(Zr()<=Pe.DEBUG&&ae("QueryEngine","Query:",hr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Zr()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):G.resolve())}Yi(e,t){if(oc(t))return G.resolve(null);let r=Ht(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ia(t,null,"F"),r=Ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ke(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,l);return this.ns(t,c,o,u.readTime)?this.Yi(e,ia(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return oc(t)||i.isEqual(ve.min())?G.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?G.resolve(null):(Zr()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hr(t)),this.rs(e,o,t,zv(i,-1)).next(l=>l))})}ts(e,t){let r=new ut(Wf(e));return t.forEach((i,s)=>{zs(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Zr()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",hr(t)),this.Ji.getDocumentsMatchingQuery(e,t,bn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new xe(Oe),this._s=new Fr(s=>Ua(s),Fa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function pT(n,e,t,r){return new fT(n,e,t,r)}async function dp(n,e){const t=we(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ke();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function mT(n,e){const t=we(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,p=f.keys();let g=G.resolve();return p.forEach(v=>{g=g.next(()=>d.getEntry(u,v)).next(E=>{const y=c.docVersions.get(v);Me(y!==null),E.version.compareTo(y)<0&&(f.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),d.addEntry(E)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ke();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fp(n){const e=we(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function _T(n,e){const t=we(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;l.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(E,y,V){return E.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(p,g,d)&&l.push(t.Ur.updateTargetData(s,g))});let u=ln(),c=ke();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(gT(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ve.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return G.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function gT(n,e,t){let r=ke(),i=ke();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ln();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ve.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ae("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function yT(n,e){const t=we(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vT(n,e){const t=we(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ua(n,e,t){const r=we(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Di(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function gc(n,e,t){const r=we(n);let i=ve.min(),s=ke();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=we(u),p=f._s.get(d);return p!==void 0?G.resolve(f.os.get(p)):f.Ur.getTargetData(c,d)}(r,o,Ht(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:ve.min(),t?s:ke())).next(l=>(wT(r,hw(e),l),{documents:l,Ts:s})))}function wT(n,e,t){let r=n.us.get(e)||ve.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class yc{constructor(){this.activeTargetIds=gw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TT{constructor(){this.so=new yc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is=null;function Oo(){return is===null?is=function(){return 268435456+Math.round(2147483648*Math.random())}():is++,"0x"+is.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class AT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const l=Oo(),u=this.xo(t,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(d=>(ae("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw Ir("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(t,r,i,s,o,l){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=IT[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Oo();return new Promise((o,l)=>{const u=new Rf;u.setWithCredentials(!0),u.listenOnce(kf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ds.NO_ERROR:const d=u.getResponseJson();ae(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ds.TIMEOUT:ae(ft,`RPC '${e}' ${s} timed out`),l(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const f=u.getStatus();if(ae(ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const v=function(y){const V=y.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(V)>=0?V:W.UNKNOWN}(g.status);l(new se(v,g.message))}else l(new se(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new se(W.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ae(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ae(ft,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=Oo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sf(),l=Cf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ae(ft,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,g=!1;const v=new bT({Io:y=>{g?ae(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(p||(ae(ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),ae(ft,`RPC '${e}' stream ${i} sending:`,y),f.send(y))},To:()=>f.close()}),E=(y,V,L)=>{y.listen(V,D=>{try{L(D)}catch(O){setTimeout(()=>{throw O},0)}})};return E(f,ti.EventType.OPEN,()=>{g||(ae(ft,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),E(f,ti.EventType.CLOSE,()=>{g||(g=!0,ae(ft,`RPC '${e}' stream ${i} transport closed`),v.So())}),E(f,ti.EventType.ERROR,y=>{g||(g=!0,Ir(ft,`RPC '${e}' stream ${i} transport errored:`,y),v.So(new se(W.UNAVAILABLE,"The operation could not be completed")))}),E(f,ti.EventType.MESSAGE,y=>{var V;if(!g){const L=y.data[0];Me(!!L);const D=L,O=D.error||((V=D[0])===null||V===void 0?void 0:V.error);if(O){ae(ft,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let B=function(I){const P=Ze[I];if(P!==void 0)return np(P)}(U),k=O.message;B===void 0&&(B=W.INTERNAL,k="Unknown error status: "+U+" with message "+O.message),g=!0,v.So(new se(B,k)),f.close()}else ae(ft,`RPC '${e}' stream ${i} received:`,L),v.bo(L)}}),E(l,Pf.STAT_EVENT,y=>{y.stat===$o.PROXY?ae(ft,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===$o.NOPROXY&&ae(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return new Lw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&ae("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new pp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(an(t.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new se(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RT extends mp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Fw(this.serializer,e),r=function(s){if(!("targetChange"in s))return ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Wt(o.readTime):ve.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=la(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=na(u)?{documents:qw(s,u)}:{query:zw(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sp(s,o.resumeToken);const c=sa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=ks(s,o.snapshotVersion.toTimestamp());const c=sa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ww(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=la(this.serializer),t.removeTarget=e,this.a_(t)}}class kT extends mp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=jw(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=la(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bw(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,oa(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(W.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,oa(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(W.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(an(t),this.D_=!1):ae("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{er(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=we(u);c.L_.add(4),await Li(c),c.q_.set("Unknown"),c.L_.delete(4),await Qs(c)}(this))})}),this.q_=new CT(r,i)}}async function Qs(n){if(er(n))for(const e of n.B_)await e(!0)}async function Li(n){for(const e of n.B_)await e(!1)}function _p(n,e){const t=we(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ja(t)?Ya(t):Br(t).r_()&&Xa(t,e))}function Qa(n,e){const t=we(n),r=Br(t);t.N_.delete(e),r.r_()&&gp(t,e),t.N_.size===0&&(r.r_()?r.o_():er(t)&&t.q_.set("Unknown"))}function Xa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).A_(e)}function gp(n,e){n.Q_.xe(e),Br(n).R_(e)}function Ya(n){n.Q_=new Nw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.q_.v_()}function Ja(n){return er(n)&&!Br(n).n_()&&n.N_.size>0}function er(n){return we(n).L_.size===0}function yp(n){n.Q_=void 0}async function NT(n){n.q_.set("Online")}async function DT(n){n.N_.forEach((e,t)=>{Xa(n,e)})}async function VT(n,e){yp(n),Ja(n)?(n.q_.M_(e),Ya(n)):n.q_.set("Unknown")}async function OT(n,e,t){if(n.q_.set("Online"),e instanceof ip&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ps(n,r)}else if(e instanceof ms?n.Q_.Ke(e):e instanceof rp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ve.min()))try{const r=await fp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),gp(s,u);const f=new yn(d.target,u,c,d.sequenceNumber);Xa(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,e,t){if(!Di(e))throw e;n.L_.add(1),await Li(n),n.q_.set("Offline"),t||(t=()=>fp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qs(n)})}function vp(n,e){return e().catch(t=>Ps(n,t,e))}async function Xs(n){const e=we(n),t=Rn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;LT(e);)try{const i=await yT(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,MT(e,i)}catch(i){await Ps(e,i)}wp(e)&&Tp(e)}function LT(n){return er(n)&&n.O_.length<10}function MT(n,e){n.O_.push(e);const t=Rn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function wp(n){return er(n)&&!Rn(n).n_()&&n.O_.length>0}function Tp(n){Rn(n).start()}async function UT(n){Rn(n).p_()}async function FT(n){const e=Rn(n);for(const t of n.O_)e.m_(t.mutations)}async function BT(n,e,t){const r=n.O_.shift(),i=za.from(r,e,t);await vp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Xs(n)}async function jT(n,e){e&&Rn(n).V_&&await async function(r,i){if(function(o){return Pw(o)&&o!==W.ABORTED}(i.code)){const s=r.O_.shift();Rn(r).s_(),await vp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xs(r)}}(n,e),wp(n)&&Tp(n)}async function wc(n,e){const t=we(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=er(t);t.L_.add(3),await Li(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qs(t)}async function qT(n,e){const t=we(n);e?(t.L_.delete(2),await Qs(t)):e||(t.L_.add(2),await Li(t),t.q_.set("Unknown"))}function Br(n){return n.K_||(n.K_=function(t,r,i){const s=we(t);return s.w_(),new RT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:NT.bind(null,n),Ro:DT.bind(null,n),mo:VT.bind(null,n),d_:OT.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ja(n)?Ya(n):n.q_.set("Unknown")):(await n.K_.stop(),yp(n))})),n.K_}function Rn(n){return n.U_||(n.U_=function(t,r,i){const s=we(t);return s.w_(),new kT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:UT.bind(null,n),mo:jT.bind(null,n),f_:FT.bind(null,n),g_:BT.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Xs(n)):(await n.U_.stop(),n.O_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new $a(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(n,e){if(an("AsyncQueue",`${e}: ${n}`),Di(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||fe.comparator(t.key,r.key):(t,r)=>fe.comparator(t.key,r.key),this.keyedMap=ni(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.W_=new xe(fe.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ge():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sr{constructor(e,t,r,i,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Sr(e,t,vr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class HT{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=we(t),s=i.queries;i.queries=Ec(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new se(W.ABORTED,"Firestore shutting down"))}}function Ec(){return new Fr(n=>Hf(n),qs)}async function Ep(n,e){const t=we(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zT,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=Za(o,`Initialization of query '${hr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&el(t)}async function Ip(n,e){const t=we(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function WT(n,e){const t=we(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&el(t)}function GT(n,e,t){const r=we(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function el(n){n.Y_.forEach(e=>{e.next()})}var ca,Ic;(Ic=ca||(ca={})).ea="default",Ic.Cache="cache";class bp{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Sr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ca.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.key=e}}class Rp{constructor(e){this.key=e}}class KT{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ke(),this.mutatedKeys=ke(),this.Aa=Wf(e),this.Ra=new vr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Tc,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),g=zs(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;p&&g?p.data.isEqual(g.data)?v!==E&&(r.track({type:3,doc:g}),y=!0):this.ga(p,g)||(r.track({type:2,doc:g}),y=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(l=!0)):!p&&g?(r.track({type:0,doc:g}),y=!0):p&&!g&&(r.track({type:1,doc:p}),y=!0,(u||c)&&(l=!0)),y&&(g?(o=o.add(g),s=E?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,v){const E=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return E(g)-E(v)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Sr(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ke(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Rp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ap(r))}),t}ba(e){this.Ta=e.Ts,this.da=ke();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QT{constructor(e){this.key=e,this.va=!1}}class XT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Fr(l=>Hf(l),qs),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(fe.comparator),this.Na=new Map,this.La=new Ga,this.Ba={},this.ka=new Map,this.qa=Cr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YT(n,e,t=!0){const r=Dp(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await kp(r,e,t,!0),i}async function JT(n,e){const t=Dp(n);await kp(t,e,!0,!1)}async function kp(n,e,t,r){const i=await vT(n.localStore,Ht(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await $T(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&_p(n.remoteStore,i),l}async function $T(n,e,t,r,i){n.Ka=(f,p,g)=>async function(E,y,V,L){let D=y.view.ma(V);D.ns&&(D=await gc(E.localStore,y.query,!1).then(({documents:k})=>y.view.ma(k,D)));const O=L&&L.targetChanges.get(y.targetId),U=L&&L.targetMismatches.get(y.targetId)!=null,B=y.view.applyChanges(D,E.isPrimaryClient,O,U);return Ac(E,y.targetId,B.wa),B.snapshot}(n,f,p,g);const s=await gc(n.localStore,e,!0),o=new KT(e,s.Ts),l=o.ma(s.documents),u=Oi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,u);Ac(n,t,c.wa);const d=new xT(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function ZT(n,e,t){const r=we(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!qs(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ua(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qa(r.remoteStore,i.targetId),ha(r,i.targetId)}).catch(Ni)):(ha(r,i.targetId),await ua(r.localStore,i.targetId,!0))}async function eE(n,e){const t=we(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qa(t.remoteStore,r.targetId))}async function tE(n,e,t){const r=lE(n);try{const i=await function(o,l){const u=we(o),c=rt.now(),d=l.reduce((g,v)=>g.add(v.key),ke());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=ln(),E=ke();return u.cs.getEntries(g,d).next(y=>{v=y,v.forEach((V,L)=>{L.isValidDocument()||(E=E.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,v)).next(y=>{f=y;const V=[];for(const L of l){const D=Iw(L,f.get(L.key).overlayedDocument);D!=null&&V.push(new Pn(L.key,D,Lf(D.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,V,l)}).next(y=>{p=y;const V=y.applyToLocalDocumentSet(f,E);return u.documentOverlayCache.saveOverlays(g,y.batchId,V)})}).then(()=>({batchId:p.batchId,changes:Kf(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new xe(Oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Mi(r,i.changes),await Xs(r.remoteStore)}catch(i){const s=Za(i,"Failed to persist write");t.reject(s)}}async function Pp(n,e){const t=we(n);try{const r=await _T(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Me(o.va):i.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await Mi(t,r,e)}catch(r){await Ni(r)}}function bc(n,e,t){const r=we(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=we(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.j_)p.Z_(l)&&(c=!0)}),c&&el(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nE(n,e,t){const r=we(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new xe(fe.comparator);o=o.insert(s,mt.newNoDocument(s,ve.min()));const l=ke().add(s),u=new Ks(ve.min(),new Map,new xe(Oe),o,l);await Pp(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),tl(r)}else await ua(r.localStore,e,!1).then(()=>ha(r,e,t)).catch(Ni)}async function rE(n,e){const t=we(n),r=e.batch.batchId;try{const i=await mT(t.localStore,e);Sp(t,r,null),Cp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(t,i)}catch(i){await Ni(i)}}async function iE(n,e,t){const r=we(n);try{const i=await function(o,l){const u=we(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Me(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Sp(r,e,t),Cp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mi(r,i)}catch(i){await Ni(i)}}function Cp(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Sp(n,e,t){const r=we(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ha(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Np(n,r)})}function Np(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Qa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),tl(n))}function Ac(n,e,t){for(const r of t)r instanceof Ap?(n.La.addReference(r.key,e),sE(n,r)):r instanceof Rp?(ae("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Np(n,r.key)):ge()}function sE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(ae("SyncEngine","New document in limbo: "+t),n.xa.add(r),tl(n))}function tl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new fe(He.fromString(e)),r=n.qa.next();n.Na.set(r,new QT(t)),n.Oa=n.Oa.insert(t,r),_p(n.remoteStore,new yn(Ht(Ba(t.path)),r,"TargetPurposeLimboResolution",Va.oe))}}async function Mi(n,e,t){const r=we(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=xa.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=we(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>G.forEach(c,p=>G.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>G.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Di(f))throw f;ae("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=d.os.get(p),v=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(v);d.os=d.os.insert(p,E)}}}(r.localStore,s))}async function oE(n,e){const t=we(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await dp(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new se(W.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(t,r.hs)}}function aE(n,e){const t=we(n),r=t.Na.get(e);if(r&&r.va)return ke().add(r.key);{let i=ke();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Dp(n){const e=we(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nE.bind(null,e),e.Ca.d_=WT.bind(null,e.eventManager),e.Ca.$a=GT.bind(null,e.eventManager),e}function lE(n){const e=we(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iE.bind(null,e),e}class Cs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return pT(this.persistence,new dT,e.initialUser,this.serializer)}Ga(e){return new uT(Ka.Zr,this.serializer)}Wa(e){return new TT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cs.provider={build:()=>new Cs};class da{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oE.bind(null,this.syncEngine),await qT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HT}()}createDatastore(e){const t=xs(e.databaseInfo.databaseId),r=function(s){return new AT(s)}(e.databaseInfo);return function(s,o,l,u){return new PT(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new ST(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>bc(this.syncEngine,t,0),function(){return vc.D()?new vc:new ET}())}createSyncEngine(e,t){return function(i,s,o,l,u,c,d){const f=new XT(i,s,o,l,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=we(i);ae("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Li(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}da.provider={build:()=>new da};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ae("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Za(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mo(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cE(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>wc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>wc(e.remoteStore,i)),n._onlineComponents=e}async function cE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await Mo(n,new Cs)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Mo(n,new Cs);return n._offlineComponents}async function Op(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Rc(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Rc(n,new da))),n._onlineComponents}function hE(n){return Op(n).then(e=>e.syncEngine)}async function fa(n){const e=await Op(n),t=e.eventManager;return t.onListen=YT.bind(null,e.syncEngine),t.onUnlisten=ZT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eE.bind(null,e.syncEngine),t}function dE(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Vp({next:p=>{d.Za(),o.enqueueAndForget(()=>Ip(s,f)),p.fromCache&&u.source==="server"?c.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new bp(l,d,{includeMetadataChanges:!0,_a:!0});return Ep(s,f)}(await fa(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fE(n,e,t,r){if(e===!0&&r===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pc(n){if(!fe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cc(n){if(fe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ys(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge()}function Vt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ys(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Js{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vv;switch(r.type){case"firstParty":return new Uv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kc.get(t);r&&(ae("ComponentProvider","Removing Datastore"),kc.delete(t),r.terminate())}(this),Promise.resolve()}}function pE(n,e,t,r={}){var i;const s=(n=Vt(n,Js))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=pt.MOCK_USER;else{l=qd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}n._authCredentials=new Ov(new Nf(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class wt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class En extends Cn{constructor(e,t,r){super(e,t,Ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new fe(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function Ge(n,e,...t){if(n=Ke(n),Mp("collection","path",e),n instanceof Js){const r=He.fromString(e,...t);return Cc(r),new En(n,null,r)}{if(!(n instanceof wt||n instanceof En))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(He.fromString(e,...t));return Cc(r),new En(n.firestore,null,r)}}function $e(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=Df.newId()),Mp("doc","path",e),n instanceof Js){const r=He.fromString(e,...t);return Pc(r),new wt(n,null,new fe(r))}{if(!(n instanceof wt||n instanceof En))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(He.fromString(e,...t));return Pc(r),new wt(n.firestore,n instanceof En?n.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new pp(this,"async_queue_retry"),this.Vu=()=>{const r=Lo();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Di(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=$a.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ge()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Dc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class kn extends Js{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Nc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nc(e),this._firestoreClient=void 0,await e}}}function mE(n,e){const t=typeof n=="object"?n:wa(),r=typeof n=="string"?n:"(default)",i=Ms(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fd("firestore");s&&pE(i,...s)}return i}function nl(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_E(n),n._firestoreClient}function _E(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,c,d){return new Yv(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lp(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new uE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(ct.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nr(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/^__.*__$/;class yE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vi(e,this.data,t,this.fieldTransforms)}}class Up{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Zs{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ss(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Fp(this.Cu)&&gE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||xs(e)}Qu(e,t,r,i=!1){return new Zs({Cu:e,methodName:t,qu:r,path:lt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(n){const e=n._freezeSettings(),t=xs(n._databaseId);return new vE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bp(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);ul("Data must be an object, but it was:",o,r);const l=qp(r,o);let u,c;if(s.merge)u=new Ct(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=pa(e,f,t);if(!o.contains(p))throw new se(W.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Hp(d,p)||d.push(p)}u=new Ct(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new yE(new Et(l),u,c)}class to extends tr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof to}}function jp(n,e,t){return new Zs({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class sl extends tr{_toFieldTransform(e){return new Ws(e.path,new Ti)}isEqual(e){return e instanceof sl}}class ol extends tr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=jp(this,e,!0),r=this.Ku.map(s=>nr(s,t)),i=new kr(r);return new Ws(e.path,i)}isEqual(e){return e instanceof ol&&Tr(this.Ku,e.Ku)}}class al extends tr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=jp(this,e,!0),r=this.Ku.map(s=>nr(s,t)),i=new Pr(r);return new Ws(e.path,i)}isEqual(e){return e instanceof al&&Tr(this.Ku,e.Ku)}}class ll extends tr{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Ei(e.serializer,Xf(e.serializer,this.$u));return new Ws(e.path,t)}isEqual(e){return e instanceof ll&&this.$u===e.$u}}function wE(n,e,t,r){const i=n.Qu(1,e,t);ul("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();Zn(r,(u,c)=>{const d=cl(e,u,t);c=Ke(c);const f=i.Nu(d);if(c instanceof to)s.push(d);else{const p=nr(c,f);p!=null&&(s.push(d),o.set(d,p))}});const l=new Ct(s);return new Up(o,l,i.fieldTransforms)}function TE(n,e,t,r,i,s){const o=n.Qu(1,e,t),l=[pa(e,r,t)],u=[i];if(s.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(pa(e,s[p])),u.push(s[p+1]);const c=[],d=Et.empty();for(let p=l.length-1;p>=0;--p)if(!Hp(c,l[p])){const g=l[p];let v=u[p];v=Ke(v);const E=o.Nu(g);if(v instanceof to)c.push(g);else{const y=nr(v,E);y!=null&&(c.push(g),d.set(g,y))}}const f=new Ct(c);return new Up(d,f,o.fieldTransforms)}function EE(n,e,t,r=!1){return nr(t,n.Qu(r?4:3,e))}function nr(n,e){if(zp(n=Ke(n)))return ul("Unsupported field value:",e,n),qp(n,e);if(n instanceof tr)return function(r,i){if(!Fp(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=nr(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=rt.fromDate(r);return{timestampValue:ks(i.serializer,s)}}if(r instanceof rt){const s=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ks(i.serializer,s)}}if(r instanceof rl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nr)return{bytesValue:sp(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof il)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ja(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ys(r)}`)}(n,e)}function qp(n,e){const t={};return Vf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(r,i)=>{const s=nr(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function zp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof rl||n instanceof Nr||n instanceof wt||n instanceof tr||n instanceof il)}function ul(n,e,t){if(!zp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ys(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function pa(n,e,t){if((e=Ke(e))instanceof $s)return e._internalPath;if(typeof e=="string")return cl(n,e);throw Ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const IE=new RegExp("[~\\*/\\[\\]]");function cl(n,e,t){if(e.search(IE)>=0)throw Ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $s(...e.split("."))._internalPath}catch{throw Ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ss(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new se(W.INVALID_ARGUMENT,l+n+u)}function Hp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(no("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bE extends Wp{data(){return super.data()}}function no(n,e){return typeof e=="string"?cl(n,e):e instanceof $s?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hl{}class Kp extends hl{}function Lt(n,e,...t){let r=[];e instanceof hl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof dl).length,l=s.filter(u=>u instanceof ro).length;if(o>1||o>0&&l>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ro extends Kp{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ro(e,t,r)}_apply(e){const t=this._parse(e);return xp(e._query,t),new Cn(e.firestore,e.converter,ra(e._query,t))}_parse(e){const t=eo(e.firestore);return function(s,o,l,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Oc(f,d);const g=[];for(const v of f)g.push(Vc(u,s,v));p={arrayValue:{values:g}}}else p=Vc(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Oc(f,d),p=EE(l,o,f,d==="in"||d==="not-in");return et.create(c,d,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ma(n,e,t){const r=e,i=no("where",n);return ro._create(i,r,t)}class dl extends hl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)xp(o,u),o=ra(o,u)}(e._query,t),new Cn(e.firestore,e.converter,ra(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fl extends Kp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wi(s,o)}(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ur(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function _n(n,e="asc"){const t=e,r=no("orderBy",n);return fl._create(r,t)}function Vc(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zf(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(He.fromString(t));if(!fe.isDocumentKey(r))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ec(n,new fe(r))}if(t instanceof wt)return ec(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ys(t)}.`)}function Oc(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xp(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AE{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Je(o.doubleValue));return new il(s)}convertGeoPoint(e){return new rl(Je(e.latitude),Je(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=La(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const t=An(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=He.fromString(e);Me(hp(r));const i=new yi(r.get(1),r.get(3)),s=new fe(r.popFirst(5));return i.isEqual(t)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xp extends Wp{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class _s extends Xp{data(e={}){return super.data(e)}}class Yp{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ii(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _s(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new _s(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ii(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new _s(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ii(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:RE(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function RE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}class pl extends AE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function pr(n){n=Vt(n,Cn);const e=Vt(n.firestore,kn),t=nl(e),r=new pl(e);return Gp(n._query),dE(t,n._query).then(i=>new Yp(e,r,n,i))}function Ns(n,e,t){n=Vt(n,wt);const r=Vt(n.firestore,kn),i=Qp(n.converter,e);return io(r,[Bp(eo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Dt.none())])}function Xn(n,e,t,...r){n=Vt(n,wt);const i=Vt(n.firestore,kn),s=eo(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof $s?TE(s,"updateDoc",n._key,e,t,r):wE(s,"updateDoc",n._key,e),io(i,[o.toMutation(n._key,Dt.exists(!0))])}function Nt(n){return io(Vt(n.firestore,kn),[new qa(n._key,Dt.none())])}function Yn(n,e){const t=Vt(n.firestore,kn),r=$e(n),i=Qp(n.converter,e);return io(t,[Bp(eo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function Gt(n,...e){var t,r,i;n=Ke(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Dc(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Dc(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(n instanceof wt)c=Vt(n.firestore,kn),d=Ba(n._key.path),u={next:f=>{e[o]&&e[o](kE(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=Vt(n,Cn);c=Vt(f.firestore,kn),d=f._query;const p=new pl(c);u={next:g=>{e[o]&&e[o](new Yp(c,p,f,g))},error:e[o+1],complete:e[o+2]},Gp(n._query)}return function(p,g,v,E){const y=new Vp(E),V=new bp(g,y,v);return p.asyncQueue.enqueueAndForget(async()=>Ep(await fa(p),V)),()=>{y.Za(),p.asyncQueue.enqueueAndForget(async()=>Ip(await fa(p),V))}}(nl(c),d,l,u)}function io(n,e){return function(r,i){const s=new Tn;return r.asyncQueue.enqueueAndForget(async()=>tE(await hE(r),i,s)),s.promise}(nl(n),e)}function kE(n,e,t){const r=t.docs.get(e._key),i=new pl(n);return new Xp(n,i,e._key,r,new ii(t.hasPendingWrites,t.fromCache),e.converter)}function Ut(){return new sl("serverTimestamp")}function PE(...n){return new ol("arrayUnion",n)}function CE(...n){return new al("arrayRemove",n)}function Lc(n){return new ll("increment",n)}(function(e,t=!0){(function(i){Mr=i})($n),Wn(new In("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new kn(new Lv(r.getProvider("auth-internal")),new Bv(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qt(Xu,"4.7.3",e),qt(Xu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="firebasestorage.googleapis.com",$p="storageBucket",SE=2*60*1e3,NE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Xt{constructor(e,t,r=0){super(Uo(e),`Firebase Storage: ${t} (${Uo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function Uo(n){return"storage/"+n}function ml(){const n="An unknown error occurred, please check the error payload for server response.";return new Ye(Xe.UNKNOWN,n)}function DE(n){return new Ye(Xe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function VE(n){return new Ye(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(Xe.UNAUTHENTICATED,n)}function LE(){return new Ye(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ME(n){return new Ye(Xe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function UE(){return new Ye(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FE(){return new Ye(Xe.CANCELED,"User canceled the upload/download.")}function BE(n){return new Ye(Xe.INVALID_URL,"Invalid URL '"+n+"'.")}function jE(n){return new Ye(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qE(){return new Ye(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$p+"' property when initializing the app?")}function zE(){return new Ye(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HE(){return new Ye(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WE(n){return new Ye(Xe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _a(n){return new Ye(Xe.INVALID_ARGUMENT,n)}function Zp(){return new Ye(Xe.APP_DELETED,"The Firebase app was deleted.")}function GE(n){return new Ye(Xe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hi(n,e){return new Ye(Xe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ei(n){throw new Ye(Xe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=St.makeFromUrl(e,t)}catch{return new St(e,"")}if(r.path==="")return r;throw jE(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},E=t===Jp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",V=new RegExp(`^https?://${E}/${i}/${y}`,"i"),D=[{regex:l,indices:u,postModify:s},{regex:g,indices:v,postModify:c},{regex:V,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<D.length;O++){const U=D[O],B=U.regex.exec(e);if(B){const k=B[U.indices.bucket];let T=B[U.indices.path];T||(T=""),r=new St(k,T),U.postModify(r);break}}if(r==null)throw BE(e);return r}}class KE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e,t){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...y){c||(c=!0,e.apply(null,y))}function f(y){i=setTimeout(()=>{i=null,n(g,u())},y)}function p(){s&&clearTimeout(s)}function g(y,...V){if(c){p();return}if(y){p(),d.call(null,y,...V);return}if(u()||o){p(),d.call(null,y,...V);return}r<64&&(r*=2);let D;l===1?(l=2,D=0):D=(r+Math.random())*1e3,f(D)}let v=!1;function E(y){v||(v=!0,p(),!c&&(i!==null?(y||(l=2),clearTimeout(i),f(0)):y||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,E(!0)},t),E}function QE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){return n!==void 0}function YE(n){return typeof n=="object"&&!Array.isArray(n)}function _l(n){return typeof n=="string"||n instanceof String}function Mc(n){return gl()&&n instanceof Blob}function gl(){return typeof Blob<"u"}function Uc(n,e,t,r){if(r<e)throw _a(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw _a(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function em(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Hn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Hn||(Hn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r,i,s,o,l,u,c,d,f,p=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ss(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Hn.NO_ERROR,u=s.getStatus();if(!l||JE(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Hn.ABORT;r(!1,new ss(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ss(c,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());XE(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=ml();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Zp():FE();o(u)}else{const u=UE();o(u)}};this.canceled_?t(!1,new ss(!1,null,!0)):this.backoffId_=xE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ss{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ZE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function e0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function t0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function n0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function r0(n,e,t,r,i,s,o=!0){const l=em(n.urlParams),u=n.url+l,c=Object.assign({},n.headers);return t0(c,e),ZE(c,t),e0(c,s),n0(c,r),new $E(u,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function s0(...n){const e=i0();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(gl())return new Blob(n);throw new Ye(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function o0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n){if(typeof atob>"u")throw WE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fo{constructor(e,t){this.data=e,this.contentType=t||null}}function l0(n,e){switch(n){case jt.RAW:return new Fo(tm(e));case jt.BASE64:case jt.BASE64URL:return new Fo(nm(n,e));case jt.DATA_URL:return new Fo(c0(e),h0(e))}throw ml()}function tm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function u0(n){let e;try{e=decodeURIComponent(n)}catch{throw hi(jt.DATA_URL,"Malformed data URL.")}return tm(e)}function nm(n,e){switch(n){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw hi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw hi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=a0(e)}catch(i){throw i.message.includes("polyfill")?i:hi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class rm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hi(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=d0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function c0(n){const e=new rm(n);return e.base64?nm(jt.BASE64,e.rest):u0(e.rest)}function h0(n){return new rm(n).contentType}function d0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){let r=0,i="";Mc(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Mc(this.data_)){const r=this.data_,i=o0(r,e,t);return i===null?null:new gn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new gn(r,!0)}}static getBlob(...e){if(gl()){const t=e.map(r=>r instanceof gn?r.data_:r);return new gn(s0.apply(null,t))}else{const t=e.map(o=>_l(o)?l0(jt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new gn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){let e;try{e=JSON.parse(n)}catch{return null}return YE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function p0(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function sm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n,e){return e}class vt{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||m0}}let os=null;function _0(n){return!_l(n)||n.length<2?n:sm(n)}function om(){if(os)return os;const n=[];n.push(new vt("bucket")),n.push(new vt("generation")),n.push(new vt("metageneration")),n.push(new vt("name","fullPath",!0));function e(s,o){return _0(o)}const t=new vt("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,n.push(i),n.push(new vt("timeCreated")),n.push(new vt("updated")),n.push(new vt("md5Hash",null,!0)),n.push(new vt("cacheControl",null,!0)),n.push(new vt("contentDisposition",null,!0)),n.push(new vt("contentEncoding",null,!0)),n.push(new vt("contentLanguage",null,!0)),n.push(new vt("contentType",null,!0)),n.push(new vt("metadata","customMetadata",!0)),os=n,os}function g0(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new St(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function y0(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return g0(r,n),r}function am(n,e,t){const r=im(e);return r===null?null:y0(n,r,t)}function v0(n,e,t,r){const i=im(e);if(i===null||!_l(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=n.bucket,f=n.fullPath,p="/b/"+o(d)+"/o/"+o(f),g=so(p,t,r),v=em({alt:"media",token:c});return g+v})[0]}function w0(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class yl{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n){if(!n)throw ml()}function T0(n,e){function t(r,i){const s=am(n,i,e);return lm(s!==null),s}return t}function E0(n,e){function t(r,i){const s=am(n,i,e);return lm(s!==null),v0(s,i,n.host,n._protocol)}return t}function um(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=LE():i=OE():t.getStatus()===402?i=VE(n.bucket):t.getStatus()===403?i=ME(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function cm(n){const e=um(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=DE(n.path)),s.serverResponse=i.serverResponse,s}return t}function I0(n,e,t){const r=e.fullServerUrl(),i=so(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,l=new yl(i,s,E0(n,t),o);return l.errorHandler=cm(e),l}function b0(n,e){const t=e.fullServerUrl(),r=so(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(u,c){}const l=new yl(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=cm(e),l}function A0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function R0(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=A0(null,e)),r}function k0(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let O=0;O<2;O++)D=D+Math.random().toString().slice(2);return D}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=R0(e,r,i),d=w0(c,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",g=gn.getBlob(f,r,p);if(g===null)throw zE();const v={name:c.fullPath},E=so(s,n.host,n._protocol),y="POST",V=n.maxUploadRetryTime,L=new yl(E,y,T0(n,t),V);return L.urlParams=v,L.headers=o,L.body=g.uploadData(),L.errorHandler=um(e),L}class P0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw ei("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ei("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ei("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ei("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ei("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class C0 extends P0{initXhr(){this.xhr_.responseType="text"}}function vl(){return new C0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this._service=e,t instanceof St?this._location=t:this._location=St.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jn(e,t)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sm(this._location.path)}get storage(){return this._service}get parent(){const e=f0(this._location.path);if(e===null)return null;const t=new St(this._location.bucket,e);return new Jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GE(e)}}function S0(n,e,t){n._throwIfRoot("uploadBytes");const r=k0(n.storage,n._location,om(),new gn(e,!0),t);return n.storage.makeRequestWithTokens(r,vl).then(i=>({metadata:i,ref:n}))}function N0(n){n._throwIfRoot("getDownloadURL");const e=I0(n.storage,n._location,om());return n.storage.makeRequestWithTokens(e,vl).then(t=>{if(t===null)throw HE();return t})}function D0(n){n._throwIfRoot("deleteObject");const e=b0(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vl)}function V0(n,e){const t=p0(n._location.path,e),r=new St(n._location.bucket,t);return new Jn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(n){return/^[A-Za-z]+:\/\//.test(n)}function L0(n,e){return new Jn(n,e)}function hm(n,e){if(n instanceof wl){const t=n;if(t._bucket==null)throw qE();const r=new Jn(t,t._bucket);return e!=null?hm(r,e):r}else return e!==void 0?V0(n,e):n}function M0(n,e){if(e&&O0(e)){if(n instanceof wl)return L0(n,e);throw _a("To use ref(service, url), the first argument must be a Storage instance.")}else return hm(n,e)}function Fc(n,e){const t=e==null?void 0:e[$p];return t==null?null:St.makeFromBucketSpec(t,n)}function U0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:qd(i,n.app.options.projectId))}class wl{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Jp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SE,this._maxUploadRetryTime=NE,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=Fc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=Fc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new KE(Zp());{const o=r0(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Bc="@firebase/storage",jc="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="storage";function F0(n,e,t){return n=Ke(n),S0(n,e,t)}function B0(n){return n=Ke(n),N0(n)}function qc(n){return n=Ke(n),D0(n)}function Bo(n,e){return n=Ke(n),M0(n,e)}function j0(n=wa(),e){n=Ke(n);const r=Ms(n,dm).getImmediate({identifier:e}),i=Fd("storage");return i&&q0(r,...i),r}function q0(n,e,t,r={}){U0(n,e,t,r)}function z0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new wl(t,r,i,e,$n)}function H0(){Wn(new In(dm,z0,"PUBLIC").setMultipleInstances(!0)),qt(Bc,jc,""),qt(Bc,jc,"esm2017")}H0();const W0={apiKey:"AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0",authDomain:"vacation-project-001.firebaseapp.com",projectId:"vacation-project-001",storageBucket:"vacation-project-001.firebasestorage.app",messagingSenderId:"378066109890",appId:"1:378066109890:web:ff054f2f5bb97d3082825b"},Tl=Wd(W0),ga=Nv(Tl),Te=mE(Tl),jo=j0(Tl),jr=Vd(null);vy(ga,n=>jr.set(n));const Bn=Vd(null);function zc(n,e,t){const r=n.slice();return r[23]=e[t],r}function G0(n){let e,t=Ee(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Wc(zc(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=We()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);R(i,e,s)},p(i,s){if(s&7361){t=Ee(i[0]);let o;for(o=0;o<t.length;o+=1){const l=zc(i,t,o);r[o]?r[o].p(l,s):(r[o]=Wc(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function K0(n){let e;return{c(){e=w("p"),e.textContent="참여 중인 그룹이 없습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function Hc(n){let e;return{c(){e=w("span"),e.textContent="← 현재 선택됨"},m(t,r){R(t,e,r)},d(t){t&&A(e)}}}function x0(n){let e,t,r;function i(){return n[15](n[23])}return{c(){e=w("button"),e.textContent="나가기"},m(s,o){R(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&A(e),t=!1,r()}}}function Q0(n){let e,t,r;function i(){return n[14](n[23])}return{c(){e=w("button"),e.textContent="삭제"},m(s,o){R(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&A(e),t=!1,r()}}}function Wc(n){var P;let e,t,r=n[23].name+"",i,s,o,l,u,c,d=n[23].inviteCode+"",f,p,g,v,E,y,V,L,D,O,U=((P=n[6])==null?void 0:P.id)===n[23].id&&Hc();function B(){return n[13](n[23])}function k(S,N){return S[23].createdBy===S[7].uid?Q0:x0}let T=k(n),I=T(n);return{c(){e=w("div"),t=w("strong"),i=q(r),s=M(),U&&U.c(),o=M(),l=w("br"),u=q(`
      초대 코드: `),c=w("code"),f=q(d),p=M(),g=w("br"),v=w("br"),E=M(),y=w("button"),y.textContent="이 그룹으로 →",V=M(),I.c(),L=M(),H(e,"class","card")},m(S,N){R(S,e,N),_(e,t),_(t,i),_(e,s),U&&U.m(e,null),_(e,o),_(e,l),_(e,u),_(e,c),_(c,f),_(e,p),_(e,g),_(e,v),_(e,E),_(e,y),_(e,V),I.m(e,null),_(e,L),D||(O=x(y,"click",B),D=!0)},p(S,N){var C;n=S,N&1&&r!==(r=n[23].name+"")&&ee(i,r),((C=n[6])==null?void 0:C.id)===n[23].id?U||(U=Hc(),U.c(),U.m(e,o)):U&&(U.d(1),U=null),N&1&&d!==(d=n[23].inviteCode+"")&&ee(f,d),T===(T=k(n))&&I?I.p(n,N):(I.d(1),I=T(n),I&&(I.c(),I.m(e,L)))},d(S){S&&A(e),U&&U.d(),I.d(),D=!1,O()}}}function Gc(n){let e,t,r,i,s;return{c(){e=w("button"),e.textContent="+ 새 그룹 만들기",t=M(),r=w("button"),r.textContent="초대 코드로 참여"},m(o,l){R(o,e,l),R(o,t,l),R(o,r,l),i||(s=[x(e,"click",n[16]),x(r,"click",n[17])],i=!0)},p:Se,d(o){o&&(A(e),A(t),A(r)),i=!1,tt(s)}}}function Kc(n){let e,t,r,i,s,o,l,u,c,d,f,p;return{c(){e=w("h3"),e.textContent="새 그룹 만들기",t=M(),r=w("input"),i=M(),s=w("br"),o=w("br"),l=M(),u=w("button"),u.textContent="만들기",c=M(),d=w("button"),d.textContent="취소",H(r,"placeholder","그룹 이름 (예: 2025 제주 여행)"),ue(r,"width","100%")},m(g,v){R(g,e,v),R(g,t,v),R(g,r,v),ie(r,n[3]),R(g,i,v),R(g,s,v),R(g,o,v),R(g,l,v),R(g,u,v),R(g,c,v),R(g,d,v),f||(p=[x(r,"input",n[18]),x(u,"click",n[8]),x(d,"click",n[19])],f=!0)},p(g,v){v&8&&r.value!==g[3]&&ie(r,g[3])},d(g){g&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(u),A(c),A(d)),f=!1,tt(p)}}}function xc(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E=n[5]&&Qc(n);return{c(){e=w("h3"),e.textContent="초대 코드로 참여",t=M(),r=w("input"),i=M(),s=w("br"),o=w("br"),l=M(),u=w("button"),u.textContent="참여하기",c=M(),d=w("button"),d.textContent="취소",f=M(),E&&E.c(),p=We(),H(r,"placeholder","초대 코드 6자리")},m(y,V){R(y,e,V),R(y,t,V),R(y,r,V),ie(r,n[4]),R(y,i,V),R(y,s,V),R(y,o,V),R(y,l,V),R(y,u,V),R(y,c,V),R(y,d,V),R(y,f,V),E&&E.m(y,V),R(y,p,V),g||(v=[x(r,"input",n[20]),x(u,"click",n[9]),x(d,"click",n[21])],g=!0)},p(y,V){V&16&&r.value!==y[4]&&ie(r,y[4]),y[5]?E?E.p(y,V):(E=Qc(y),E.c(),E.m(p.parentNode,p)):E&&(E.d(1),E=null)},d(y){y&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(u),A(c),A(d),A(f),A(p)),E&&E.d(y),g=!1,tt(v)}}}function Qc(n){let e,t;return{c(){e=w("p"),t=q(n[5]),ue(e,"color","red")},m(r,i){R(r,e,i),_(e,t)},p(r,i){i&32&&ee(t,r[5])},d(r){r&&A(e)}}}function X0(n){let e,t,r,i,s,o,l,u;function c(E,y){return E[0].length===0?K0:G0}let d=c(n),f=d(n),p=!n[1]&&!n[2]&&Gc(n),g=n[1]&&Kc(n),v=n[2]&&xc(n);return{c(){e=w("h2"),e.textContent="내 그룹",t=M(),f.c(),r=M(),i=w("hr"),s=M(),p&&p.c(),o=M(),g&&g.c(),l=M(),v&&v.c(),u=We()},m(E,y){R(E,e,y),R(E,t,y),f.m(E,y),R(E,r,y),R(E,i,y),R(E,s,y),p&&p.m(E,y),R(E,o,y),g&&g.m(E,y),R(E,l,y),v&&v.m(E,y),R(E,u,y)},p(E,[y]){d===(d=c(E))&&f?f.p(E,y):(f.d(1),f=d(E),f&&(f.c(),f.m(r.parentNode,r))),!E[1]&&!E[2]?p?p.p(E,y):(p=Gc(E),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),E[1]?g?g.p(E,y):(g=Kc(E),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),E[2]?v?v.p(E,y):(v=xc(E),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i:Se,o:Se,d(E){E&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(u)),f.d(E),p&&p.d(E),g&&g.d(E),v&&v.d(E)}}}function Y0(){return Math.random().toString(36).slice(2,8).toUpperCase()}function J0(n,e,t){let r,i;rn(n,Bn,P=>t(6,r=P)),rn(n,jr,P=>t(7,i=P));let s=[],o=!1,l=!1,u="",c="",d="",f;xm(()=>{const P=Lt(Ge(Te,"groups"),ma("memberIds","array-contains",i.uid));f=Gt(P,S=>{t(0,s=S.docs.map(N=>({id:N.id,...N.data()})))})}),Os(()=>f==null?void 0:f());async function p(){if(!u.trim())return;const P=Y0(),S=await Yn(Ge(Te,"groups"),{name:u.trim(),createdBy:i.uid,inviteCode:P,memberIds:[i.uid],createdAt:Ut()});await Ns($e(Te,"groups",S.id,"members",i.uid),{displayName:i.displayName,joinedAt:Ut()}),t(3,u=""),t(1,o=!1)}async function g(){if(!c.trim())return;t(5,d="");const P=await pr(Lt(Ge(Te,"groups"),ma("inviteCode","==",c.trim().toUpperCase())));if(P.empty){t(5,d="유효하지 않은 초대 코드입니다.");return}const S=P.docs[0];await Xn($e(Te,"groups",S.id),{memberIds:PE(i.uid)}),await Ns($e(Te,"groups",S.id,"members",i.uid),{displayName:i.displayName,joinedAt:Ut()}),t(4,c=""),t(2,l=!1)}function v(P){Bn.set(P),location.hash="#vote"}async function E(P){confirm(`"${P.name}"에서 나가시겠습니까?`)&&(await Xn($e(Te,"groups",P.id),{memberIds:CE(i.uid)}),await Nt($e(Te,"groups",P.id,"members",i.uid)),(r==null?void 0:r.id)===P.id&&Bn.set(null))}async function y(P){confirm(`"${P.name}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`)&&(await Nt($e(Te,"groups",P.id)),(r==null?void 0:r.id)===P.id&&Bn.set(null))}const V=P=>v(P),L=P=>y(P),D=P=>E(P),O=()=>{t(1,o=!0),t(2,l=!1)},U=()=>{t(2,l=!0),t(1,o=!1)};function B(){u=this.value,t(3,u)}const k=()=>{t(1,o=!1),t(3,u="")};function T(){c=this.value,t(4,c)}return[s,o,l,u,c,d,r,i,p,g,v,E,y,V,L,D,O,U,B,k,T,()=>{t(2,l=!1),t(4,c=""),t(5,d="")}]}class Xc extends Ai{constructor(e){super(),bi(this,e,J0,X0,Or,{})}}const fm="AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0";function Dr(n,e){const t=_m(n),r=t?`place_id:${t}`:encodeURIComponent(e);return`https://www.google.com/maps/embed/v1/place?key=${fm}&q=${r}`}function $0(n){const t=El(n).map(mm);if(t.length<2)return null;const r=t[0],i=t[t.length-1],s=t.slice(1,-1).join("|");let o=`https://www.google.com/maps/embed/v1/directions?key=${fm}&origin=${r}&destination=${i}`;return s&&(o+=`&waypoints=${s}`),o}function Z0(n){const t=El(n).map(mm);return t.length<2?null:"https://www.google.com/maps/dir/"+t.join("/")}function eI(n){return n.length-El(n).length}function Vr(n){return n?/maps\.app\.goo\.gl|goo\.gl\/maps/.test(n):!1}function pm(n){const e=Il(n);if(!e)return{lat:null,lng:null};const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}function mm(n){var e;return n.lat&&n.lng?`${n.lat},${n.lng}`:Il(n.mapUrl)??encodeURIComponent((e=n.placeName)==null?void 0:e.trim())}function El(n){return n.filter(e=>e.lat&&e.lng||Il(e.mapUrl)||_m(e.mapUrl))}function _m(n){if(!n)return null;const e=n.match(/place_id[=:]([A-Za-z0-9_-]+)/);return e?e[1]:null}function Il(n){if(!n)return null;const e=n.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/ll=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/);return e?`${e[1]},${e[2]}`:null}function Yc(n,e,t){const r=n.slice();return r[54]=e[t],r}function Jc(n,e,t){const r=n.slice();r[54]=e[t],r[59]=t;const i=r[3][r[54].id]||0;return r[57]=i,r}function $c(n,e,t){const r=n.slice();return r[54]=e[t],r}function Zc(n,e,t){const r=n.slice();return r[51]=e[t],r}function eh(n,e,t){const r=n.slice();return r[48]=e[t],r}function tI(n){let e,t=n[1].title+"",r,i,s,o,l,u,c=n[1].voteType==="destination"?"여행지":"관광지",d,f,p=wr(n[1])?" 마감":" 진행중",g,v,E,y,V,L,D,O,U,B,k=n[1].deadline&&th(n),T=n[1].voteType==="attraction"&&n[1].linkedDestination&&nh(n);function I(N,C){return C[0]&2&&(D=null),N[1].status==="recruiting"?aI:(D==null&&(D=!!wr(N[1])),D?oI:sI)}let P=I(n,[-1,-1]),S=P(n);return{c(){e=w("h2"),r=q(t),i=M(),s=w("button"),s.textContent="← 목록으로",o=M(),l=w("span"),u=q("["),d=q(c),f=q(`]
    `),g=q(p),v=M(),k&&k.c(),E=M(),T&&T.c(),y=M(),V=w("hr"),L=M(),S.c(),O=We(),ue(l,"margin-left","1rem")},m(N,C){R(N,e,C),_(e,r),R(N,i,C),R(N,s,C),R(N,o,C),R(N,l,C),_(l,u),_(l,d),_(l,f),_(l,g),R(N,v,C),k&&k.m(N,C),R(N,E,C),T&&T.m(N,C),R(N,y,C),R(N,V,C),R(N,L,C),S.m(N,C),R(N,O,C),U||(B=x(s,"click",n[26]),U=!0)},p(N,C){C[0]&2&&t!==(t=N[1].title+"")&&ee(r,t),C[0]&2&&c!==(c=N[1].voteType==="destination"?"여행지":"관광지")&&ee(d,c),C[0]&2&&p!==(p=wr(N[1])?" 마감":" 진행중")&&ee(g,p),N[1].deadline?k?k.p(N,C):(k=th(N),k.c(),k.m(E.parentNode,E)):k&&(k.d(1),k=null),N[1].voteType==="attraction"&&N[1].linkedDestination?T?T.p(N,C):(T=nh(N),T.c(),T.m(y.parentNode,y)):T&&(T.d(1),T=null),P===(P=I(N,C))&&S?S.p(N,C):(S.d(1),S=P(N),S&&(S.c(),S.m(O.parentNode,O)))},d(N){N&&(A(e),A(i),A(s),A(o),A(l),A(v),A(E),A(y),A(V),A(L),A(O)),k&&k.d(N),T&&T.d(N),S.d(N),U=!1,B()}}}function nI(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E,y,V,L,D,O,U,B,k,T,I,P,S,N,C,oe,Z,ce,Y,de,he,Ne,Fe,ye,Ie,je,Le,Re,be,De,$,le,Q,te=n[6].voteType==="attraction"&&wh(n);return{c(){e=w("h2"),e.textContent="새 투표 만들기",t=M(),r=w("button"),r.textContent="← 뒤로",i=M(),s=w("hr"),o=M(),l=w("label"),u=q("투표 유형"),c=w("br"),d=M(),f=w("select"),p=w("option"),p.textContent="여행지 투표",g=w("option"),g.textContent="관광지 투표",v=M(),E=w("br"),y=w("br"),V=M(),te&&te.c(),L=M(),D=w("label"),O=q("투표 제목"),U=w("br"),B=M(),k=w("input"),T=M(),I=w("br"),P=w("br"),S=M(),N=w("label"),C=q("마감 날짜 (선택)"),oe=w("br"),Z=M(),ce=w("input"),Y=q(`
    
  `),de=w("label"),he=q("1인당 최대 투표 수"),Ne=w("br"),Fe=M(),ye=w("input"),Ie=M(),je=w("br"),Le=w("br"),Re=M(),be=w("button"),be.textContent="모집 시작",De=M(),$=w("button"),$.textContent="취소",p.__value="destination",ie(p,p.__value),g.__value="attraction",ie(g,g.__value),n[6].voteType===void 0&&Kt(()=>n[32].call(f)),H(k,"placeholder","예: 여름 여행지 투표"),ue(k,"width","100%"),H(ce,"type","date"),H(ye,"type","number"),H(ye,"min","1"),H(ye,"max","10"),ue(ye,"width","4rem")},m(ne,j){R(ne,e,j),R(ne,t,j),R(ne,r,j),R(ne,i,j),R(ne,s,j),R(ne,o,j),R(ne,l,j),_(l,u),_(l,c),_(l,d),_(l,f),_(f,p),_(f,g),bt(f,n[6].voteType,!0),R(ne,v,j),R(ne,E,j),R(ne,y,j),R(ne,V,j),te&&te.m(ne,j),R(ne,L,j),R(ne,D,j),_(D,O),_(D,U),_(D,B),_(D,k),ie(k,n[6].title),R(ne,T,j),R(ne,I,j),R(ne,P,j),R(ne,S,j),R(ne,N,j),_(N,C),_(N,oe),_(N,Z),_(N,ce),ie(ce,n[6].deadline),R(ne,Y,j),R(ne,de,j),_(de,he),_(de,Ne),_(de,Fe),_(de,ye),ie(ye,n[6].maxVotesPerUser),R(ne,Ie,j),R(ne,je,j),R(ne,Le,j),R(ne,Re,j),R(ne,be,j),R(ne,De,j),R(ne,$,j),le||(Q=[x(r,"click",n[26]),x(f,"change",n[32]),x(k,"input",n[34]),x(ce,"input",n[35]),x(ye,"input",n[36]),x(be,"click",n[25]),x($,"click",n[26])],le=!0)},p(ne,j){j[0]&64&&bt(f,ne[6].voteType),ne[6].voteType==="attraction"?te?te.p(ne,j):(te=wh(ne),te.c(),te.m(L.parentNode,L)):te&&(te.d(1),te=null),j[0]&64&&k.value!==ne[6].title&&ie(k,ne[6].title),j[0]&64&&ie(ce,ne[6].deadline),j[0]&64&&Pd(ye.value)!==ne[6].maxVotesPerUser&&ie(ye,ne[6].maxVotesPerUser)},d(ne){ne&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(v),A(E),A(y),A(V),A(L),A(D),A(T),A(I),A(P),A(S),A(N),A(Y),A(de),A(Ie),A(je),A(Le),A(Re),A(be),A(De),A($)),te&&te.d(ne),le=!1,tt(Q)}}}function rI(n){let e,t,r=n[10].name+"",i,s,o,l,u,c,d,f,p;function g(y,V){return y[0].length===0?gI:_I}let v=g(n),E=v(n);return{c(){e=w("h2"),t=q("투표 — "),i=q(r),s=M(),o=w("button"),o.textContent="+ 새 투표 만들기",l=M(),u=w("hr"),c=M(),E.c(),d=We()},m(y,V){R(y,e,V),_(e,t),_(e,i),R(y,s,V),R(y,o,V),R(y,l,V),R(y,u,V),R(y,c,V),E.m(y,V),R(y,d,V),f||(p=x(o,"click",n[29]),f=!0)},p(y,V){V[0]&1024&&r!==(r=y[10].name+"")&&ee(i,r),v===(v=g(y))&&E?E.p(y,V):(E.d(1),E=v(y),E&&(E.c(),E.m(d.parentNode,d)))},d(y){y&&(A(e),A(s),A(o),A(l),A(u),A(c),A(d)),E.d(y),f=!1,p()}}}function iI(n){let e;return{c(){e=w("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function th(n){let e,t,r=Ds(n[1].deadline)+"",i;return{c(){e=w("small"),t=q("· 마감일: "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=Ds(s[1].deadline)+"")&&ee(i,r)},d(s){s&&A(e)}}}function nh(n){let e,t,r=n[1].linkedDestination+"",i;return{c(){e=w("small"),t=q("· 여행지: "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=s[1].linkedDestination+"")&&ee(i,r)},d(s){s&&A(e)}}}function sI(n){let e,t,r,i;function s(p,g){return p[13]?uI:lI}let o=s(n),l=o(n),u=Ee(n[2]),c=[];for(let p=0;p<u.length;p+=1)c[p]=oh(Yc(n,u,p));let d=!n[13]&&ah(n),f=n[1].createdBy===n[15].uid&&lh(n);return{c(){l.c(),e=M();for(let p=0;p<c.length;p+=1)c[p].c();t=M(),d&&d.c(),r=M(),f&&f.c(),i=We()},m(p,g){l.m(p,g),R(p,e,g);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(p,g);R(p,t,g),d&&d.m(p,g),R(p,r,g),f&&f.m(p,g),R(p,i,g)},p(p,g){if(o===(o=s(p))&&l?l.p(p,g):(l.d(1),l=o(p),l&&(l.c(),l.m(e.parentNode,e))),g[0]&417852){u=Ee(p[2]);let v;for(v=0;v<u.length;v+=1){const E=Yc(p,u,v);c[v]?c[v].p(E,g):(c[v]=oh(E),c[v].c(),c[v].m(t.parentNode,t))}for(;v<c.length;v+=1)c[v].d(1);c.length=u.length}p[13]?d&&(d.d(1),d=null):d?d.p(p,g):(d=ah(p),d.c(),d.m(r.parentNode,r)),p[1].createdBy===p[15].uid?f?f.p(p,g):(f=lh(p),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},d(p){p&&(A(e),A(t),A(r),A(i)),l.d(p),nt(c,p),d&&d.d(p),f&&f.d(p)}}}function oI(n){let e;function t(s,o){return s[8].length===0?fI:dI}let r=t(n),i=r(n);return{c(){i.c(),e=We()},m(s,o){i.m(s,o),R(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&A(e),i.d(s)}}}function aI(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E,y,V,L,D,O,U,B,k,T,I,P,S,N,C,oe,Z=Vr(n[12].mapUrl),ce,Y,de,he,Ne,Fe,ye,Ie,je,Le=Ee(n[2]),Re=[];for(let $=0;$<Le.length;$+=1)Re[$]=_h($c(n,Le,$));let be=Z&&gh(),De=n[1].createdBy===n[15].uid&&yh(n);return{c(){e=w("p"),e.textContent="후보 모집 중입니다. 그룹원 누구나 후보를 추가할 수 있습니다.",t=M();for(let $=0;$<Re.length;$+=1)Re[$].c();r=M(),i=w("hr"),s=M(),o=w("strong"),o.textContent="후보 추가",l=M(),u=w("div"),c=w("label"),d=q("장소명 *"),f=w("br"),p=M(),g=w("input"),v=M(),E=w("br"),y=M(),V=w("label"),L=q("설명"),D=w("br"),O=M(),U=w("input"),B=M(),k=w("br"),T=M(),I=w("label"),P=q("Google Maps URL (선택)"),S=w("br"),N=M(),C=w("input"),oe=M(),be&&be.c(),ce=M(),Y=w("br"),de=w("br"),he=M(),Ne=w("button"),Ne.textContent="+ 후보 등록",Fe=M(),De&&De.c(),ye=We(),H(g,"placeholder","예: 제주도"),ue(g,"width","100%"),H(U,"placeholder","간단한 설명"),ue(U,"width","100%"),H(C,"placeholder","https://maps.google.com/..."),ue(C,"width","100%"),H(u,"class","card")},m($,le){R($,e,le),R($,t,le);for(let Q=0;Q<Re.length;Q+=1)Re[Q]&&Re[Q].m($,le);R($,r,le),R($,i,le),R($,s,le),R($,o,le),R($,l,le),R($,u,le),_(u,c),_(c,d),_(c,f),_(c,p),_(c,g),ie(g,n[12].placeName),_(u,v),_(u,E),_(u,y),_(u,V),_(V,L),_(V,D),_(V,O),_(V,U),ie(U,n[12].description),_(u,B),_(u,k),_(u,T),_(u,I),_(I,P),_(I,S),_(I,N),_(I,C),ie(C,n[12].mapUrl),_(u,oe),be&&be.m(u,null),_(u,ce),_(u,Y),_(u,de),_(u,he),_(u,Ne),R($,Fe,le),De&&De.m($,le),R($,ye,le),Ie||(je=[x(g,"input",n[38]),x(U,"input",n[39]),x(C,"input",n[40]),x(Ne,"click",n[21])],Ie=!0)},p($,le){if(le[0]&4227076){Le=Ee($[2]);let Q;for(Q=0;Q<Le.length;Q+=1){const te=$c($,Le,Q);Re[Q]?Re[Q].p(te,le):(Re[Q]=_h(te),Re[Q].c(),Re[Q].m(r.parentNode,r))}for(;Q<Re.length;Q+=1)Re[Q].d(1);Re.length=Le.length}le[0]&4096&&g.value!==$[12].placeName&&ie(g,$[12].placeName),le[0]&4096&&U.value!==$[12].description&&ie(U,$[12].description),le[0]&4096&&C.value!==$[12].mapUrl&&ie(C,$[12].mapUrl),le[0]&4096&&(Z=Vr($[12].mapUrl)),Z?be||(be=gh(),be.c(),be.m(u,ce)):be&&(be.d(1),be=null),$[1].createdBy===$[15].uid?De?De.p($,le):(De=yh($),De.c(),De.m(ye.parentNode,ye)):De&&(De.d(1),De=null)},d($){$&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(u),A(Fe),A(ye)),nt(Re,$),be&&be.d(),De&&De.d($),Ie=!1,tt(je)}}}function lI(n){let e,t,r,i,s,o,l=Ii(n[1])+"",u,c;return{c(){e=w("p"),t=q(`선택 후 제출 버튼을 누르세요.
        (남은 선택: `),r=w("strong"),i=q(n[14]),s=q("표"),o=q(" / "),u=q(l),c=q("표)")},m(d,f){R(d,e,f),_(e,t),_(e,r),_(r,i),_(r,s),_(e,o),_(e,u),_(e,c)},p(d,f){f[0]&16384&&ee(i,d[14]),f[0]&2&&l!==(l=Ii(d[1])+"")&&ee(u,l)},d(d){d&&A(e)}}}function uI(n){let e;return{c(){e=w("p"),e.textContent="투표 완료. 마감 후 결과를 확인하세요."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function rh(n){let e,t,r=n[54].description+"",i;return{c(){e=w("span"),t=q("— "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&4&&r!==(r=s[54].description+"")&&ee(i,r)},d(s){s&&A(e)}}}function cI(n){let e,t,r,i,s,o,l=(n[5][n[54].id]||0)+"",u,c,d,f,p,g,v;function E(){return n[41](n[54])}function y(){return n[42](n[54])}return{c(){e=w("div"),t=w("button"),r=q("-"),s=M(),o=w("span"),u=q(l),c=M(),d=w("button"),f=q("+"),t.disabled=i=(n[5][n[54].id]||0)<=0&&n[14]<=0,ue(o,"display","inline-block"),ue(o,"width","1.5rem"),ue(o,"text-align","center"),d.disabled=p=(n[5][n[54].id]||0)>=0&&n[14]<=0,ue(e,"text-align","right"),ue(e,"margin-top","0.3rem")},m(V,L){R(V,e,L),_(e,t),_(t,r),_(e,s),_(e,o),_(o,u),_(e,c),_(e,d),_(d,f),g||(v=[x(t,"click",E),x(d,"click",y)],g=!0)},p(V,L){n=V,L[0]&16420&&i!==(i=(n[5][n[54].id]||0)<=0&&n[14]<=0)&&(t.disabled=i),L[0]&36&&l!==(l=(n[5][n[54].id]||0)+"")&&ee(u,l),L[0]&16420&&p!==(p=(n[5][n[54].id]||0)>=0&&n[14]<=0)&&(d.disabled=p)},d(V){V&&A(e),g=!1,tt(v)}}}function hI(n){let e,t=n[4][n[54].id]&&ih(n);return{c(){t&&t.c(),e=We()},m(r,i){t&&t.m(r,i),R(r,e,i)},p(r,i){r[4][r[54].id]?t?t.p(r,i):(t=ih(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&A(e),t&&t.d(r)}}}function ih(n){let e,t,r,i=n[4][n[54].id]+"",s,o;return{c(){e=w("div"),t=w("small"),r=q("내 선택: "),s=q(i),o=q("표"),ue(e,"text-align","right"),ue(e,"margin-top","0.3rem")},m(l,u){R(l,e,u),_(e,t),_(t,r),_(t,s),_(t,o)},p(l,u){u[0]&20&&i!==(i=l[4][l[54].id]+"")&&ee(s,i)},d(l){l&&A(e)}}}function sh(n){let e,t,r;return{c(){e=w("iframe"),H(e,"class","map-embed"),It(e.src,t=Dr(n[54].mapUrl,n[54].placeName))||H(e,"src",t),H(e,"title",r=n[54].placeName),e.allowFullscreen=!0,H(e,"loading","lazy")},m(i,s){R(i,e,s)},p(i,s){s[0]&4&&!It(e.src,t=Dr(i[54].mapUrl,i[54].placeName))&&H(e,"src",t),s[0]&4&&r!==(r=i[54].placeName)&&H(e,"title",r)},d(i){i&&A(e)}}}function oh(n){let e,t,r,i=n[54].placeName+"",s,o,l,u,c=(n[3][n[54].id]||0)+"",d,f,p,g,v,E,y=n[54].description&&rh(n);function V(U,B){return U[13]?hI:cI}let L=V(n),D=L(n),O=n[54].mapUrl&&sh(n);return{c(){e=w("div"),t=w("div"),r=w("strong"),s=q(i),o=M(),y&&y.c(),l=M(),u=w("span"),d=q(c),f=q("표"),p=M(),g=w("br"),v=M(),D.c(),E=M(),O&&O.c(),ue(u,"float","right"),ue(g,"clear","both"),H(e,"class","card")},m(U,B){R(U,e,B),_(e,t),_(t,r),_(r,s),_(t,o),y&&y.m(t,null),_(t,l),_(t,u),_(u,d),_(u,f),_(t,p),_(t,g),_(e,v),D.m(e,null),_(e,E),O&&O.m(e,null)},p(U,B){B[0]&4&&i!==(i=U[54].placeName+"")&&ee(s,i),U[54].description?y?y.p(U,B):(y=rh(U),y.c(),y.m(t,l)):y&&(y.d(1),y=null),B[0]&12&&c!==(c=(U[3][U[54].id]||0)+"")&&ee(d,c),L===(L=V(U))&&D?D.p(U,B):(D.d(1),D=L(U),D&&(D.c(),D.m(e,E))),U[54].mapUrl?O?O.p(U,B):(O=sh(U),O.c(),O.m(e,null)):O&&(O.d(1),O=null)},d(U){U&&A(e),y&&y.d(),D.d(),O&&O.d()}}}function ah(n){let e,t,r,i,s,o,l;return{c(){e=w("hr"),t=M(),r=w("button"),i=q("제출"),r.disabled=s=n[9]===0},m(u,c){R(u,e,c),R(u,t,c),R(u,r,c),_(r,i),o||(l=x(r,"click",n[19]),o=!0)},p(u,c){c[0]&512&&s!==(s=u[9]===0)&&(r.disabled=s)},d(u){u&&(A(e),A(t),A(r)),o=!1,l()}}}function lh(n){let e,t,r,i,s,o,l;return{c(){e=w("hr"),t=M(),r=w("button"),r.textContent="투표 마감",i=M(),s=w("button"),s.textContent="투표 삭제"},m(u,c){R(u,e,c),R(u,t,c),R(u,r,c),R(u,i,c),R(u,s,c),o||(l=[x(r,"click",n[23]),x(s,"click",n[43])],o=!0)},p:Se,d(u){u&&(A(e),A(t),A(r),A(i),A(s)),o=!1,tt(l)}}}function dI(n){let e,t,r=Ee(n[8]),i=[];for(let s=0;s<r.length;s+=1)i[s]=dh(Jc(n,r,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=M(),t=w("hr")},m(s,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(s,o);R(s,e,o),R(s,t,o)},p(s,o){if(o[0]&280){r=Ee(s[8]);let l;for(l=0;l<r.length;l+=1){const u=Jc(s,r,l);i[l]?i[l].p(u,o):(i[l]=dh(u),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=r.length}},d(s){s&&(A(e),A(t)),nt(i,s)}}}function fI(n){let e;return{c(){e=w("p"),e.textContent="투표 없이 마감되었습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function uh(n){let e,t,r=n[54].description+"",i;return{c(){e=w("span"),t=q("— "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&256&&r!==(r=s[54].description+"")&&ee(i,r)},d(s){s&&A(e)}}}function ch(n){let e,t,r=n[4][n[54].id]>1?` ×${n[4][n[54].id]}`:"",i,s;return{c(){e=w("span"),t=q("(내 선택"),i=q(r),s=q(")")},m(o,l){R(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&272&&r!==(r=o[4][o[54].id]>1?` ×${o[4][o[54].id]}`:"")&&ee(i,r)},d(o){o&&A(e)}}}function hh(n){let e,t,r;return{c(){e=w("iframe"),H(e,"class","map-embed"),It(e.src,t=Dr(n[54].mapUrl,n[54].placeName))||H(e,"src",t),H(e,"title",r=n[54].placeName),e.allowFullscreen=!0,H(e,"loading","lazy")},m(i,s){R(i,e,s)},p(i,s){s[0]&256&&!It(e.src,t=Dr(i[54].mapUrl,i[54].placeName))&&H(e,"src",t),s[0]&256&&r!==(r=i[54].placeName)&&H(e,"title",r)},d(i){i&&A(e)}}}function dh(n){let e,t,r=n[54].placeName+"",i,s,o,l,u=n[57]+"",c,d,f,p,g=n[54].description&&uh(n),v=n[4][n[54].id]&&ch(n),E=n[54].mapUrl&&hh(n);return{c(){e=w("div"),t=w("strong"),i=q(r),s=M(),g&&g.c(),o=M(),l=w("span"),c=q(u),d=q("표"),f=M(),v&&v.c(),p=M(),E&&E.c(),ue(l,"float","right"),H(e,"class","card")},m(y,V){R(y,e,V),_(e,t),_(t,i),_(e,s),g&&g.m(e,null),_(e,o),_(e,l),_(l,c),_(l,d),_(e,f),v&&v.m(e,null),_(e,p),E&&E.m(e,null)},p(y,V){V[0]&256&&r!==(r=y[54].placeName+"")&&ee(i,r),y[54].description?g?g.p(y,V):(g=uh(y),g.c(),g.m(e,o)):g&&(g.d(1),g=null),V[0]&264&&u!==(u=y[57]+"")&&ee(c,u),y[4][y[54].id]?v?v.p(y,V):(v=ch(y),v.c(),v.m(e,p)):v&&(v.d(1),v=null),y[54].mapUrl?E?E.p(y,V):(E=hh(y),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},d(y){y&&A(e),g&&g.d(),v&&v.d(),E&&E.d()}}}function fh(n){let e,t,r=n[54].description+"",i;return{c(){e=w("span"),t=q("— "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&4&&r!==(r=s[54].description+"")&&ee(i,r)},d(s){s&&A(e)}}}function ph(n){let e,t,r;return{c(){e=w("iframe"),H(e,"class","map-embed"),It(e.src,t=Dr(n[54].mapUrl,n[54].placeName))||H(e,"src",t),H(e,"title",r=n[54].placeName),e.allowFullscreen=!0,H(e,"loading","lazy")},m(i,s){R(i,e,s)},p(i,s){s[0]&4&&!It(e.src,t=Dr(i[54].mapUrl,i[54].placeName))&&H(e,"src",t),s[0]&4&&r!==(r=i[54].placeName)&&H(e,"title",r)},d(i){i&&A(e)}}}function mh(n){let e,t,r,i;function s(){return n[37](n[54])}return{c(){e=w("br"),t=w("button"),t.textContent="삭제"},m(o,l){R(o,e,l),R(o,t,l),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&(A(e),A(t)),r=!1,i()}}}function _h(n){let e,t,r=n[54].placeName+"",i,s,o,l,u=n[54].description&&fh(n),c=n[54].mapUrl&&ph(n),d=n[54].createdBy===n[15].uid&&mh(n);return{c(){e=w("div"),t=w("strong"),i=q(r),s=M(),u&&u.c(),o=M(),c&&c.c(),l=M(),d&&d.c(),H(e,"class","card")},m(f,p){R(f,e,p),_(e,t),_(t,i),_(e,s),u&&u.m(e,null),_(e,o),c&&c.m(e,null),_(e,l),d&&d.m(e,null)},p(f,p){p[0]&4&&r!==(r=f[54].placeName+"")&&ee(i,r),f[54].description?u?u.p(f,p):(u=fh(f),u.c(),u.m(e,o)):u&&(u.d(1),u=null),f[54].mapUrl?c?c.p(f,p):(c=ph(f),c.c(),c.m(e,l)):c&&(c.d(1),c=null),f[54].createdBy===f[15].uid?d?d.p(f,p):(d=mh(f),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(f){f&&A(e),u&&u.d(),c&&c.d(),d&&d.d()}}}function gh(n){let e,t;return{c(){e=w("br"),t=w("small"),t.textContent="단축 URL(maps.app.goo.gl)은 좌표 추출이 불가합니다. Google Maps 주소창의 전체 URL을 붙여넣어 주세요.",ue(t,"color","#c00")},m(r,i){R(r,e,i),R(r,t,i)},d(r){r&&(A(e),A(t))}}}function yh(n){let e,t,r,i,s,o,l,u,c,d=n[2].length===0&&vh();return{c(){e=w("hr"),t=M(),r=w("button"),i=q("투표 시작"),o=M(),d&&d.c(),l=We(),r.disabled=s=n[2].length===0},m(f,p){R(f,e,p),R(f,t,p),R(f,r,p),_(r,i),R(f,o,p),d&&d.m(f,p),R(f,l,p),u||(c=x(r,"click",n[20]),u=!0)},p(f,p){p[0]&4&&s!==(s=f[2].length===0)&&(r.disabled=s),f[2].length===0?d||(d=vh(),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null)},d(f){f&&(A(e),A(t),A(r),A(o),A(l)),d&&d.d(f),u=!1,c()}}}function vh(n){let e;return{c(){e=w("small"),e.textContent="(후보가 1개 이상이어야 합니다)"},m(t,r){R(t,e,r)},d(t){t&&A(e)}}}function wh(n){let e,t,r,i,s,o,l;function u(f,p){return f[7].length===0?mI:pI}let c=u(n),d=c(n);return{c(){e=w("label"),t=q("연결할 여행지"),r=w("br"),i=M(),d.c(),s=M(),o=w("br"),l=w("br")},m(f,p){R(f,e,p),_(e,t),_(e,r),_(e,i),d.m(e,null),R(f,s,p),R(f,o,p),R(f,l,p)},p(f,p){c===(c=u(f))&&d?d.p(f,p):(d.d(1),d=c(f),d&&(d.c(),d.m(e,null)))},d(f){f&&(A(e),A(s),A(o),A(l)),d.d()}}}function pI(n){let e,t,r,i=Ee(n[7]),s=[];for(let o=0;o<i.length;o+=1)s[o]=Th(Zc(n,i,o));return{c(){e=w("select");for(let o=0;o<s.length;o+=1)s[o].c();n[6].linkedDestination===void 0&&Kt(()=>n[33].call(e))},m(o,l){R(o,e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);bt(e,n[6].linkedDestination,!0),t||(r=x(e,"change",n[33]),t=!0)},p(o,l){if(l[0]&128){i=Ee(o[7]);let u;for(u=0;u<i.length;u+=1){const c=Zc(o,i,u);s[u]?s[u].p(c,l):(s[u]=Th(c),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=i.length}l[0]&64&&bt(e,o[6].linkedDestination)},d(o){o&&A(e),nt(s,o),t=!1,r()}}}function mI(n){let e;return{c(){e=w("p"),e.textContent="마감된 여행지 투표가 없습니다. 여행지를 먼저 결정해 주세요."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function Th(n){let e,t=n[51]+"",r,i;return{c(){e=w("option"),r=q(t),e.__value=i=n[51],ie(e,e.__value)},m(s,o){R(s,e,o),_(e,r)},p(s,o){o[0]&128&&t!==(t=s[51]+"")&&ee(r,t),o[0]&128&&i!==(i=s[51])&&(e.__value=i,ie(e,e.__value))},d(s){s&&A(e)}}}function _I(n){let e,t=Ee(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=bh(eh(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=We()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);R(i,e,s)},p(i,s){if(s[0]&16875521){t=Ee(i[0]);let o;for(o=0;o<t.length;o+=1){const l=eh(i,t,o);r[o]?r[o].p(l,s):(r[o]=bh(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function gI(n){let e;return{c(){e=w("p"),e.textContent="진행 중인 투표가 없습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function Eh(n){let e,t,r,i;function s(...o){return n[30](n[48],...o)}return{c(){e=q(" "),t=w("button"),t.textContent="삭제"},m(o,l){R(o,e,l),R(o,t,l),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&(A(e),A(t)),r=!1,i()}}}function Ih(n){let e,t=Ds(n[48].deadline)+"",r,i;return{c(){e=q("마감일: "),r=q(t),i=q(" ·")},m(s,o){R(s,e,o),R(s,r,o),R(s,i,o)},p(s,o){o[0]&1&&t!==(t=Ds(s[48].deadline)+"")&&ee(r,t)},d(s){s&&(A(e),A(r),A(i))}}}function bh(n){let e,t,r,i=n[48].voteType==="destination"?"여행지":"관광지",s,o,l,u,c=n[48].title+"",d,f,p,g=Rh(n[48])+"",v,E,y,V,L,D,O,U=Ii(n[48])+"",B,k,T,I,P,S=n[48].createdBy===n[15].uid&&Eh(n),N=n[48].deadline&&Ih(n);function C(){return n[31](n[48])}return{c(){e=w("div"),t=w("span"),r=q("["),s=q(i),o=q("]"),l=M(),u=w("strong"),d=q(c),f=M(),p=w("span"),v=q(g),E=M(),S&&S.c(),y=M(),V=w("br"),L=M(),D=w("small"),N&&N.c(),O=q(`
          1인 `),B=q(U),k=q("표"),T=M(),ue(p,"float","right"),H(e,"class","card"),ue(e,"cursor","pointer")},m(oe,Z){R(oe,e,Z),_(e,t),_(t,r),_(t,s),_(t,o),_(e,l),_(e,u),_(u,d),_(e,f),_(e,p),_(p,v),_(p,E),S&&S.m(p,null),_(e,y),_(e,V),_(e,L),_(e,D),N&&N.m(D,null),_(D,O),_(D,B),_(D,k),_(e,T),I||(P=x(e,"click",C),I=!0)},p(oe,Z){n=oe,Z[0]&1&&i!==(i=n[48].voteType==="destination"?"여행지":"관광지")&&ee(s,i),Z[0]&1&&c!==(c=n[48].title+"")&&ee(d,c),Z[0]&1&&g!==(g=Rh(n[48])+"")&&ee(v,g),n[48].createdBy===n[15].uid?S?S.p(n,Z):(S=Eh(n),S.c(),S.m(p,null)):S&&(S.d(1),S=null),n[48].deadline?N?N.p(n,Z):(N=Ih(n),N.c(),N.m(D,O)):N&&(N.d(1),N=null),Z[0]&1&&U!==(U=Ii(n[48])+"")&&ee(B,U)},d(oe){oe&&A(e),S&&S.d(),N&&N.d(),I=!1,P()}}}function yI(n){let e;function t(s,o){if(!s[10])return iI;if(s[11]==="list")return rI;if(s[11]==="create")return nI;if(s[11]==="detail"&&s[1])return tI}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=We()},m(s,o){i&&i.m(s,o),R(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:Se,o:Se,d(s){s&&A(e),i&&i.d(s)}}}function Ah(){return{placeName:"",description:"",mapUrl:""}}function Rh(n){return n.status==="recruiting"?"모집중":wr(n)?"마감":"투표중"}function wr(n){return n.status==="closed"?!0:n.status!=="ongoing"||!n.deadline?!1:(n.deadline.toDate?n.deadline.toDate():new Date(n.deadline))<new Date}function Ds(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"없음"}function Ii(n){return n.maxVotesPerUser??1}function vI(n,e,t){let r,i,s,o,l,u,c;rn(n,jr,j=>t(15,u=j)),rn(n,Bn,j=>t(10,c=j));let d="list",f=[],p=null,g=[],v={},E={},y={},V,L,D,O={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1},U=Ah(),B=[];function k(){V==null||V(),t(27,V=Gt(Lt(Ge(Te,"groups",c.id,"votes"),_n("createdAt","desc")),j=>{t(0,f=j.docs.map(J=>({id:J.id,...J.data()})))}))}function T(j){t(1,p=j),t(11,d="detail"),t(2,g=[]),t(3,v={}),t(4,E={}),t(5,y={}),L==null||L(),D==null||D(),L=Gt(Ge(Te,"groups",c.id,"votes",j.id,"options"),J=>{t(2,g=J.docs.map(pe=>({id:pe.id,...pe.data()})))}),D=Gt(Ge(Te,"groups",c.id,"votes",j.id,"records"),J=>{const pe={};let gt={};J.docs.forEach(At=>{const Rt=At.data();if(Rt.votes)Object.entries(Rt.votes).forEach(([kt,Tt])=>{pe[kt]=(pe[kt]||0)+Tt}),At.id===u.uid&&(gt={...Rt.votes});else{const kt=Rt.optionIds??(Rt.optionId?[Rt.optionId]:[]);kt.forEach(Tt=>{pe[Tt]=(pe[Tt]||0)+1}),At.id===u.uid&&kt.forEach(Tt=>{gt[Tt]=(gt[Tt]||0)+1})}}),t(3,v=pe),t(4,E=gt)})}function I(j){if(i||wr(p))return;const J=y[j]||0;if(J>=0&&o<=0)return;const pe=J+1;if(pe===0){const{[j]:gt,...At}=y;t(5,y=At)}else t(5,y={...y,[j]:pe})}function P(j){if(i||wr(p))return;const J=y[j]||0;if(J<=0&&o<=0)return;const pe=J-1;if(pe===0){const{[j]:gt,...At}=y;t(5,y=At)}else t(5,y={...y,[j]:pe})}async function S(){if(s===0||i)return;const j=$e(Te,"groups",c.id,"votes",p.id,"records",u.uid);await Ns(j,{votes:{...y},totalVotes:s,votedAt:Ut()}),t(5,y={})}async function N(){g.length!==0&&await Xn($e(Te,"groups",c.id,"votes",p.id),{status:"ongoing"})}async function C(){if(!U.placeName.trim())return;const j=U.mapUrl.trim()||null,{lat:J,lng:pe}=pm(j);await Yn(Ge(Te,"groups",c.id,"votes",p.id,"options"),{placeName:U.placeName.trim(),description:U.description.trim(),mapUrl:j,lat:J,lng:pe,createdBy:u.uid}),t(12,U=Ah())}async function oe(j){await Nt($e(Te,"groups",c.id,"votes",p.id,"options",j.id))}async function Z(){const j=Math.max(0,...g.map(pe=>v[pe.id]||0)),J=j===0?[]:g.filter(pe=>(v[pe.id]||0)===j).map(pe=>({placeName:pe.placeName,description:pe.description||"",mapUrl:pe.mapUrl||null,lat:pe.lat||null,lng:pe.lng||null}));await Xn($e(Te,"groups",c.id,"votes",p.id),{status:"closed",winners:J})}async function ce(j,J){J==null||J.stopPropagation(),confirm(`"${j.title}" 투표를 삭제하시겠습니까?`)&&(await Nt($e(Te,"groups",c.id,"votes",j.id)),(p==null?void 0:p.id)===j.id&&de())}async function Y(){O.title.trim()&&(O.voteType==="attraction"&&!O.linkedDestination||(await Yn(Ge(Te,"groups",c.id,"votes"),{title:O.title.trim(),voteType:O.voteType,linkedDestination:O.voteType==="attraction"?O.linkedDestination:null,deadline:O.deadline?new Date(O.deadline):null,maxVotesPerUser:Number(O.maxVotesPerUser)||1,status:"recruiting",createdBy:u.uid,createdAt:Ut()}),t(6,O={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1}),t(11,d="list")))}function de(){t(11,d="list"),t(1,p=null),t(2,g=[]),t(3,v={}),t(4,E={}),t(5,y={}),L==null||L(),D==null||D()}Os(()=>{V==null||V(),L==null||L(),D==null||D()});const he=()=>t(11,d="create"),Ne=(j,J)=>ce(j,J),Fe=j=>T(j);function ye(){O.voteType=jn(this),t(6,O),t(0,f),t(7,B),t(10,c),t(27,V)}function Ie(){O.linkedDestination=jn(this),t(6,O),t(0,f),t(7,B),t(10,c),t(27,V)}function je(){O.title=this.value,t(6,O),t(0,f),t(7,B),t(10,c),t(27,V)}function Le(){O.deadline=this.value,t(6,O),t(0,f),t(7,B),t(10,c),t(27,V)}function Re(){O.maxVotesPerUser=Pd(this.value),t(6,O),t(0,f),t(7,B),t(10,c),t(27,V)}const be=j=>oe(j);function De(){U.placeName=this.value,t(12,U)}function $(){U.description=this.value,t(12,U)}function le(){U.mapUrl=this.value,t(12,U)}const Q=j=>P(j.id),te=j=>I(j.id),ne=j=>ce(p,j);return n.$$.update=()=>{if(n.$$.dirty[0]&134218752&&(c?k():(t(0,f=[]),V==null||V())),n.$$.dirty[0]&193&&O.voteType==="attraction"&&(t(7,B=f.filter(j=>{var J;return j.voteType==="destination"&&j.status==="closed"&&((J=j.winners)==null?void 0:J.length)}).flatMap(j=>j.winners.map(J=>J.placeName??J))),t(6,O.linkedDestination=B[0]??"",O)),n.$$.dirty[0]&3&&p&&f.length>0){const j=f.find(J=>J.id===p.id);j&&t(1,p=j)}n.$$.dirty[0]&16&&t(28,r=Object.values(E).reduce((j,J)=>j+J,0)),n.$$.dirty[0]&268435456&&t(13,i=r>0),n.$$.dirty[0]&32&&t(9,s=Object.values(y).reduce((j,J)=>j+Math.abs(J),0)),n.$$.dirty[0]&514&&t(14,o=p?Ii(p)-s:0),n.$$.dirty[0]&12&&t(8,l=[...g].sort((j,J)=>(v[J.id]||0)-(v[j.id]||0))),n.$$.dirty[0]&264&&l[0]&&v[l[0].id]},[f,p,g,v,E,y,O,B,l,s,c,d,U,i,o,u,T,I,P,S,N,C,oe,Z,ce,Y,de,V,r,he,Ne,Fe,ye,Ie,je,Le,Re,be,De,$,le,Q,te,ne]}class wI extends Ai{constructor(e){super(),bi(this,e,vI,yI,Or,{},null,[-1,-1])}}function kh(n,e,t){const r=n.slice();r[61]=e[t],r[67]=t;const i=r[8][r[61]]??[];r[62]=i;const s=$0(r[62]);r[63]=s;const o=Z0(r[62]);r[64]=o;const l=eI(r[62]);return r[65]=l,r}function Ph(n,e,t){const r=n.slice();return r[68]=e[t],r}function Ch(n,e,t){const r=n.slice();return r[71]=e[t],r}function Sh(n,e,t){const r=n.slice();return r[68]=e[t],r}function Nh(n,e,t){const r=n.slice();return r[76]=e[t],r}function Dh(n,e,t){const r=n.slice();return r[58]=e[t],r}function Vh(n,e,t){const r=n.slice();return r[55]=e[t],r}function TI(n){let e,t=n[1].title+"",r,i,s,o,l,u,c=n[1].startDate+"",d,f,p=n[1].endDate+"",g,v,E,y,V,L,D,O,U=n[1].destination&&Oh(n),B=n[9].length>0&&Lh(n),k=Ee(n[2]),T=[];for(let I=0;I<k.length;I+=1)T[I]=Qh(kh(n,k,I));return{c(){e=w("h2"),r=q(t),i=M(),s=w("button"),s.textContent="← 목록으로",o=M(),U&&U.c(),l=M(),u=w("small"),d=q(c),f=q(" ~ "),g=q(p),v=M(),E=w("hr"),y=M(),B&&B.c(),V=M();for(let I=0;I<T.length;I+=1)T[I].c();L=We()},m(I,P){R(I,e,P),_(e,r),R(I,i,P),R(I,s,P),R(I,o,P),U&&U.m(I,P),R(I,l,P),R(I,u,P),_(u,d),_(u,f),_(u,g),R(I,v,P),R(I,E,P),R(I,y,P),B&&B.m(I,P),R(I,V,P);for(let S=0;S<T.length;S+=1)T[S]&&T[S].m(I,P);R(I,L,P),D||(O=x(s,"click",n[21]),D=!0)},p(I,P){if(P[0]&2&&t!==(t=I[1].title+"")&&ee(r,t),I[1].destination?U?U.p(I,P):(U=Oh(I),U.c(),U.m(l.parentNode,l)):U&&(U.d(1),U=null),P[0]&2&&c!==(c=I[1].startDate+"")&&ee(d,c),P[0]&2&&p!==(p=I[1].endDate+"")&&ee(g,p),I[9].length>0?B?B.p(I,P):(B=Lh(I),B.c(),B.m(V.parentNode,V)):B&&(B.d(1),B=null),P[0]&1520068){k=Ee(I[2]);let S;for(S=0;S<k.length;S+=1){const N=kh(I,k,S);T[S]?T[S].p(N,P):(T[S]=Qh(N),T[S].c(),T[S].m(L.parentNode,L))}for(;S<T.length;S+=1)T[S].d(1);T.length=k.length}},d(I){I&&(A(e),A(i),A(s),A(o),A(l),A(u),A(v),A(E),A(y),A(V),A(L)),U&&U.d(I),B&&B.d(I),nt(T,I),D=!1,O()}}}function EI(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E,y,V,L,D,O,U,B,k,T,I,P,S,N,C,oe,Z,ce,Y,de,he,Ne,Fe,ye,Ie,je,Le,Re,be;function De(Q,te){return Q[10].length>0?SI:CI}let $=De(n),le=$(n);return{c(){e=w("h2"),e.textContent="새 일정 만들기",t=M(),r=w("button"),r.textContent="← 뒤로",i=M(),s=w("hr"),o=M(),l=w("label"),u=q("여행명 *"),c=w("br"),d=M(),f=w("input"),p=M(),g=w("br"),v=w("br"),E=M(),y=w("label"),V=q("여행지"),L=w("br"),D=M(),le.c(),O=M(),U=w("br"),B=w("br"),k=M(),T=w("label"),I=q("시작일 *"),P=w("br"),S=M(),N=w("input"),C=q(`
   
  `),oe=w("label"),Z=q("종료일 *"),ce=w("br"),Y=M(),de=w("input"),he=M(),Ne=w("br"),Fe=w("br"),ye=M(),Ie=w("button"),Ie.textContent="일정 만들기",je=M(),Le=w("button"),Le.textContent="취소",H(f,"placeholder","예: 제주 3박 4일"),ue(f,"width","100%"),H(N,"type","date"),H(de,"type","date")},m(Q,te){R(Q,e,te),R(Q,t,te),R(Q,r,te),R(Q,i,te),R(Q,s,te),R(Q,o,te),R(Q,l,te),_(l,u),_(l,c),_(l,d),_(l,f),ie(f,n[5].title),R(Q,p,te),R(Q,g,te),R(Q,v,te),R(Q,E,te),R(Q,y,te),_(y,V),_(y,L),_(y,D),le.m(y,null),R(Q,O,te),R(Q,U,te),R(Q,B,te),R(Q,k,te),R(Q,T,te),_(T,I),_(T,P),_(T,S),_(T,N),ie(N,n[5].startDate),R(Q,C,te),R(Q,oe,te),_(oe,Z),_(oe,ce),_(oe,Y),_(oe,de),ie(de,n[5].endDate),R(Q,he,te),R(Q,Ne,te),R(Q,Fe,te),R(Q,ye,te),R(Q,Ie,te),R(Q,je,te),R(Q,Le,te),Re||(be=[x(r,"click",n[21]),x(f,"input",n[29]),x(N,"input",n[33]),x(de,"input",n[34]),x(Ie,"click",n[15]),x(Le,"click",n[21])],Re=!0)},p(Q,te){te[0]&1056&&f.value!==Q[5].title&&ie(f,Q[5].title),$===($=De(Q))&&le?le.p(Q,te):(le.d(1),le=$(Q),le&&(le.c(),le.m(y,null))),te[0]&1056&&ie(N,Q[5].startDate),te[0]&1056&&ie(de,Q[5].endDate)},d(Q){Q&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(p),A(g),A(v),A(E),A(y),A(O),A(U),A(B),A(k),A(T),A(C),A(oe),A(he),A(Ne),A(Fe),A(ye),A(Ie),A(je),A(Le)),le.d(),Re=!1,tt(be)}}}function II(n){let e,t,r=n[3].name+"",i,s,o,l,u,c,d,f,p;function g(y,V){return y[0].length===0?DI:NI}let v=g(n),E=v(n);return{c(){e=w("h2"),t=q("여행 일정 — "),i=q(r),s=M(),o=w("button"),o.textContent="+ 새 일정 만들기",l=M(),u=w("hr"),c=M(),E.c(),d=We()},m(y,V){R(y,e,V),_(e,t),_(e,i),R(y,s,V),R(y,o,V),R(y,l,V),R(y,u,V),R(y,c,V),E.m(y,V),R(y,d,V),f||(p=x(o,"click",n[26]),f=!0)},p(y,V){V[0]&8&&r!==(r=y[3].name+"")&&ee(i,r),v===(v=g(y))&&E?E.p(y,V):(E.d(1),E=v(y),E&&(E.c(),E.m(d.parentNode,d)))},d(y){y&&(A(e),A(s),A(o),A(l),A(u),A(c),A(d)),E.d(y),f=!1,p()}}}function bI(n){let e;return{c(){e=w("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function Oh(n){let e,t,r=n[1].destination+"",i;return{c(){e=w("span"),t=q("· "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=s[1].destination+"")&&ee(i,r)},d(s){s&&A(e)}}}function Lh(n){let e,t,r,i,s,o,l,u,c,d=Ee(n[9]),f=[];for(let p=0;p<d.length;p+=1)f[p]=Mh(Nh(n,d,p));return{c(){e=w("div"),t=w("strong"),t.textContent="투표 당선 관광지",r=q(` —
      `),i=w("select"),s=w("option"),s.textContent="선택 시 항목 추가폼에 자동입력";for(let p=0;p<f.length;p+=1)f[p].c();o=M(),l=w("hr"),s.__value="",ie(s,s.__value),H(e,"class","card")},m(p,g){R(p,e,g),_(e,t),_(e,r),_(e,i),_(i,s);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(i,null);R(p,o,g),R(p,l,g),u||(c=x(i,"change",n[35]),u=!0)},p(p,g){if(g[0]&512){d=Ee(p[9]);let v;for(v=0;v<d.length;v+=1){const E=Nh(p,d,v);f[v]?f[v].p(E,g):(f[v]=Mh(E),f[v].c(),f[v].m(i,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=d.length}},d(p){p&&(A(e),A(o),A(l)),nt(f,p),u=!1,c()}}}function Mh(n){let e,t=n[76].placeName+"",r,i=n[76].description?` — ${n[76].description}`:"",s,o;return{c(){e=w("option"),r=q(t),s=q(i),e.__value=o=n[76].placeName,ie(e,e.__value)},m(l,u){R(l,e,u),_(e,r),_(e,s)},p(l,u){u[0]&512&&t!==(t=l[76].placeName+"")&&ee(r,t),u[0]&512&&i!==(i=l[76].description?` — ${l[76].description}`:"")&&ee(s,i),u[0]&512&&o!==(o=l[76].placeName)&&(e.__value=o,ie(e,e.__value))},d(l){l&&A(e)}}}function AI(n){let e,t,r,i,s,o,l=n[71].category+"",u,c,d,f,p=n[71].placeName+"",g,v,E,y,V,L,D,O,U,B=n[71].time&&Uh(n),k=n[71].memo&&Fh(n);function T(){return n[42](n[71])}function I(){return n[43](n[71])}return{c(){e=w("div"),t=w("div"),r=w("div"),B&&B.c(),i=M(),s=w("span"),o=q("["),u=q(l),c=q("]"),d=M(),f=w("strong"),g=q(p),v=M(),k&&k.c(),E=M(),y=w("div"),V=w("button"),V.textContent="수정",L=M(),D=w("button"),D.textContent="삭제",ue(y,"white-space","nowrap"),ue(y,"margin-left","0.5rem"),ue(t,"display","flex"),ue(t,"justify-content","space-between"),ue(t,"align-items","flex-start"),H(e,"class","card")},m(P,S){R(P,e,S),_(e,t),_(t,r),B&&B.m(r,null),_(r,i),_(r,s),_(s,o),_(s,u),_(s,c),_(r,d),_(r,f),_(f,g),_(r,v),k&&k.m(r,null),_(t,E),_(t,y),_(y,V),_(y,L),_(y,D),O||(U=[x(V,"click",T),x(D,"click",I)],O=!0)},p(P,S){n=P,n[71].time?B?B.p(n,S):(B=Uh(n),B.c(),B.m(r,i)):B&&(B.d(1),B=null),S[0]&260&&l!==(l=n[71].category+"")&&ee(u,l),S[0]&260&&p!==(p=n[71].placeName+"")&&ee(g,p),n[71].memo?k?k.p(n,S):(k=Fh(n),k.c(),k.m(r,null)):k&&(k.d(1),k=null)},d(P){P&&A(e),B&&B.d(),k&&k.d(),O=!1,tt(U)}}}function RI(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E,y,V,L,D,O,U=Vr(n[6].mapUrl),B,k,T,I,P,S,N,C,oe=Ee(n[12]),Z=[];for(let Y=0;Y<oe.length;Y+=1)Z[Y]=Bh(Sh(n,oe,Y));let ce=U&&jh();return{c(){e=w("div"),t=w("input"),r=q(`
           
          `),i=w("select");for(let Y=0;Y<Z.length;Y+=1)Z[Y].c();s=M(),o=w("br"),l=w("br"),u=M(),c=w("input"),d=M(),f=w("br"),p=w("br"),g=M(),v=w("textarea"),E=M(),y=w("br"),V=w("br"),L=M(),D=w("input"),O=M(),ce&&ce.c(),B=M(),k=w("br"),T=M(),I=w("button"),I.textContent="저장",P=M(),S=w("button"),S.textContent="취소",H(t,"type","time"),n[6].category===void 0&&Kt(()=>n[37].call(i)),H(c,"placeholder","장소명 *"),ue(c,"width","100%"),H(v,"placeholder","메모"),H(v,"rows","2"),ue(v,"width","100%"),H(D,"placeholder","Google Maps URL (선택)"),ue(D,"width","100%"),H(e,"class","card")},m(Y,de){R(Y,e,de),_(e,t),ie(t,n[6].time),_(e,r),_(e,i);for(let he=0;he<Z.length;he+=1)Z[he]&&Z[he].m(i,null);bt(i,n[6].category,!0),_(e,s),_(e,o),_(e,l),_(e,u),_(e,c),ie(c,n[6].placeName),_(e,d),_(e,f),_(e,p),_(e,g),_(e,v),ie(v,n[6].memo),_(e,E),_(e,y),_(e,V),_(e,L),_(e,D),ie(D,n[6].mapUrl),_(e,O),ce&&ce.m(e,null),_(e,B),_(e,k),_(e,T),_(e,I),_(e,P),_(e,S),N||(C=[x(t,"input",n[36]),x(i,"change",n[37]),x(c,"input",n[38]),x(v,"input",n[39]),x(D,"input",n[40]),x(I,"click",n[18]),x(S,"click",n[41])],N=!0)},p(Y,de){if(de[0]&4160&&ie(t,Y[6].time),de[0]&4096){oe=Ee(Y[12]);let he;for(he=0;he<oe.length;he+=1){const Ne=Sh(Y,oe,he);Z[he]?Z[he].p(Ne,de):(Z[he]=Bh(Ne),Z[he].c(),Z[he].m(i,null))}for(;he<Z.length;he+=1)Z[he].d(1);Z.length=oe.length}de[0]&4160&&bt(i,Y[6].category),de[0]&4160&&c.value!==Y[6].placeName&&ie(c,Y[6].placeName),de[0]&4160&&ie(v,Y[6].memo),de[0]&4160&&D.value!==Y[6].mapUrl&&ie(D,Y[6].mapUrl),de[0]&64&&(U=Vr(Y[6].mapUrl)),U?ce||(ce=jh(),ce.c(),ce.m(e,B)):ce&&(ce.d(1),ce=null)},d(Y){Y&&A(e),nt(Z,Y),ce&&ce.d(),N=!1,tt(C)}}}function Uh(n){let e,t=n[71].time+"",r,i;return{c(){e=w("strong"),r=q(t),i=q(" ·")},m(s,o){R(s,e,o),_(e,r),R(s,i,o)},p(s,o){o[0]&260&&t!==(t=s[71].time+"")&&ee(r,t)},d(s){s&&(A(e),A(i))}}}function Fh(n){let e,t,r=n[71].memo+"",i;return{c(){e=w("br"),t=w("small"),i=q(r)},m(s,o){R(s,e,o),R(s,t,o),_(t,i)},p(s,o){o[0]&260&&r!==(r=s[71].memo+"")&&ee(i,r)},d(s){s&&(A(e),A(t))}}}function Bh(n){let e,t=n[68]+"",r;return{c(){e=w("option"),r=q(t),e.__value=n[68],ie(e,e.__value)},m(i,s){R(i,e,s),_(e,r)},p:Se,d(i){i&&A(e)}}}function jh(n){let e,t;return{c(){e=w("br"),t=w("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ue(t,"color","#c00")},m(r,i){R(r,e,i),R(r,t,i)},d(r){r&&(A(e),A(t))}}}function qh(n){let e;function t(s,o){return s[6]&&!s[6].isNew&&s[6].id===s[71].id?RI:AI}let r=t(n),i=r(n);return{c(){i.c(),e=We()},m(s,o){i.m(s,o),R(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&A(e),i.d(s)}}}function zh(n){let e;return{c(){e=w("p"),e.textContent="아직 일정 없음",ue(e,"margin-left","0.5rem"),ue(e,"color","#666")},m(t,r){R(t,e,r)},d(t){t&&A(e)}}}function Hh(n){let e,t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기",r,i,s,o,l,u,c,d=n[7].has(n[61]),f,p,g;function v(){return n[44](n[61])}let E=n[65]>0&&Wh(n),y=d&&Gh(n);return{c(){e=w("button"),r=q(t),i=M(),s=w("a"),o=q("↗ Google Maps에서 열기"),u=M(),E&&E.c(),c=M(),y&&y.c(),f=We(),H(s,"href",l=n[64]),H(s,"target","_blank"),H(s,"rel","noopener noreferrer")},m(V,L){R(V,e,L),_(e,r),R(V,i,L),R(V,s,L),_(s,o),R(V,u,L),E&&E.m(V,L),R(V,c,L),y&&y.m(V,L),R(V,f,L),p||(g=x(e,"click",v),p=!0)},p(V,L){n=V,L[0]&132&&t!==(t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기")&&ee(r,t),L[0]&260&&l!==(l=n[64])&&H(s,"href",l),n[65]>0?E?E.p(n,L):(E=Wh(n),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),L[0]&132&&(d=n[7].has(n[61])),d?y?y.p(n,L):(y=Gh(n),y.c(),y.m(f.parentNode,f)):y&&(y.d(1),y=null)},d(V){V&&(A(e),A(i),A(s),A(u),A(c),A(f)),E&&E.d(V),y&&y.d(V),p=!1,g()}}}function Wh(n){let e,t,r=n[65]+"",i,s;return{c(){e=w("small"),t=q("(지도 링크 없는 항목 "),i=q(r),s=q("개 경로 제외)")},m(o,l){R(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&260&&r!==(r=o[65]+"")&&ee(i,r)},d(o){o&&A(e)}}}function Gh(n){let e,t,r;return{c(){e=w("iframe"),H(e,"class","map-embed"),It(e.src,t=n[63])||H(e,"src",t),H(e,"title",r=n[61]+" 경로"),e.allowFullscreen=!0,H(e,"loading","lazy")},m(i,s){R(i,e,s)},p(i,s){s[0]&260&&!It(e.src,t=i[63])&&H(e,"src",t),s[0]&4&&r!==(r=i[61]+" 경로")&&H(e,"title",r)},d(i){i&&A(e)}}}function kI(n){let e,t,r;function i(){return n[51](n[61])}return{c(){e=w("button"),e.textContent="+ 항목 추가"},m(s,o){R(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&A(e),t=!1,r()}}}function PI(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v,E,y,V,L,D,O,U=Vr(n[6].mapUrl),B,k,T,I,P,S,N,C,oe=Ee(n[12]),Z=[];for(let Y=0;Y<oe.length;Y+=1)Z[Y]=Kh(Ph(n,oe,Y));let ce=U&&xh();return{c(){e=w("div"),t=w("input"),r=q(`
         
        `),i=w("select");for(let Y=0;Y<Z.length;Y+=1)Z[Y].c();s=M(),o=w("br"),l=w("br"),u=M(),c=w("input"),d=M(),f=w("br"),p=w("br"),g=M(),v=w("textarea"),E=M(),y=w("br"),V=w("br"),L=M(),D=w("input"),O=M(),ce&&ce.c(),B=M(),k=w("br"),T=M(),I=w("button"),I.textContent="저장",P=M(),S=w("button"),S.textContent="취소",H(t,"type","time"),n[6].category===void 0&&Kt(()=>n[46].call(i)),H(c,"placeholder","장소명 *"),ue(c,"width","100%"),H(v,"placeholder","메모"),H(v,"rows","2"),ue(v,"width","100%"),H(D,"placeholder","Google Maps URL (선택)"),ue(D,"width","100%"),H(e,"class","card")},m(Y,de){R(Y,e,de),_(e,t),ie(t,n[6].time),_(e,r),_(e,i);for(let he=0;he<Z.length;he+=1)Z[he]&&Z[he].m(i,null);bt(i,n[6].category,!0),_(e,s),_(e,o),_(e,l),_(e,u),_(e,c),ie(c,n[6].placeName),_(e,d),_(e,f),_(e,p),_(e,g),_(e,v),ie(v,n[6].memo),_(e,E),_(e,y),_(e,V),_(e,L),_(e,D),ie(D,n[6].mapUrl),_(e,O),ce&&ce.m(e,null),_(e,B),_(e,k),_(e,T),_(e,I),_(e,P),_(e,S),N||(C=[x(t,"input",n[45]),x(i,"change",n[46]),x(c,"input",n[47]),x(v,"input",n[48]),x(D,"input",n[49]),x(I,"click",n[18]),x(S,"click",n[50])],N=!0)},p(Y,de){if(de[0]&4160&&ie(t,Y[6].time),de[0]&4096){oe=Ee(Y[12]);let he;for(he=0;he<oe.length;he+=1){const Ne=Ph(Y,oe,he);Z[he]?Z[he].p(Ne,de):(Z[he]=Kh(Ne),Z[he].c(),Z[he].m(i,null))}for(;he<Z.length;he+=1)Z[he].d(1);Z.length=oe.length}de[0]&4160&&bt(i,Y[6].category),de[0]&4160&&c.value!==Y[6].placeName&&ie(c,Y[6].placeName),de[0]&4160&&ie(v,Y[6].memo),de[0]&4160&&D.value!==Y[6].mapUrl&&ie(D,Y[6].mapUrl),de[0]&64&&(U=Vr(Y[6].mapUrl)),U?ce||(ce=xh(),ce.c(),ce.m(e,B)):ce&&(ce.d(1),ce=null)},d(Y){Y&&A(e),nt(Z,Y),ce&&ce.d(),N=!1,tt(C)}}}function Kh(n){let e,t=n[68]+"",r;return{c(){e=w("option"),r=q(t),e.__value=n[68],ie(e,e.__value)},m(i,s){R(i,e,s),_(e,r)},p:Se,d(i){i&&A(e)}}}function xh(n){let e,t;return{c(){e=w("br"),t=w("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ue(t,"color","#c00")},m(r,i){R(r,e,i),R(r,t,i)},d(r){r&&(A(e),A(t))}}}function Qh(n){var V,L;let e,t=ed(n[61],n[67])+"",r,i,s,o,l,u,c,d=Ee(n[8][n[61]]??[]),f=[];for(let D=0;D<d.length;D+=1)f[D]=qh(Ch(n,d,D));let p=(n[8][n[61]]??[]).length===0&&!((V=n[6])!=null&&V.isNew&&((L=n[6])==null?void 0:L.date)===n[61])&&zh(),g=n[63]&&Hh(n);function v(D,O){var U,B;return(U=D[6])!=null&&U.isNew&&((B=D[6])==null?void 0:B.date)===D[61]?PI:kI}let E=v(n),y=E(n);return{c(){e=w("h3"),r=q(t),i=M();for(let D=0;D<f.length;D+=1)f[D].c();s=M(),p&&p.c(),o=M(),g&&g.c(),l=M(),y.c(),u=M(),c=w("hr")},m(D,O){R(D,e,O),_(e,r),R(D,i,O);for(let U=0;U<f.length;U+=1)f[U]&&f[U].m(D,O);R(D,s,O),p&&p.m(D,O),R(D,o,O),g&&g.m(D,O),R(D,l,O),y.m(D,O),R(D,u,O),R(D,c,O)},p(D,O){var U,B;if(O[0]&4&&t!==(t=ed(D[61],D[67])+"")&&ee(r,t),O[0]&1446212){d=Ee(D[8][D[61]]??[]);let k;for(k=0;k<d.length;k+=1){const T=Ch(D,d,k);f[k]?f[k].p(T,O):(f[k]=qh(T),f[k].c(),f[k].m(s.parentNode,s))}for(;k<f.length;k+=1)f[k].d(1);f.length=d.length}(D[8][D[61]]??[]).length===0&&!((U=D[6])!=null&&U.isNew&&((B=D[6])==null?void 0:B.date)===D[61])?p||(p=zh(),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),D[63]?g?g.p(D,O):(g=Hh(D),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),E===(E=v(D))&&y?y.p(D,O):(y.d(1),y=E(D),y&&(y.c(),y.m(u.parentNode,u)))},d(D){D&&(A(e),A(i),A(s),A(o),A(l),A(u),A(c)),nt(f,D),p&&p.d(D),g&&g.d(D),y.d(D)}}}function CI(n){let e,t,r;return{c(){e=w("input"),H(e,"placeholder","예: 제주도")},m(i,s){R(i,e,s),ie(e,n[5].destination),t||(r=x(e,"input",n[32]),t=!0)},p(i,s){s[0]&1056&&e.value!==i[5].destination&&ie(e,i[5].destination)},d(i){i&&A(e),t=!1,r()}}}function SI(n){let e,t,r,i,s,o,l=Ee(n[10]),u=[];for(let d=0;d<l.length;d+=1)u[d]=Xh(Dh(n,l,d));let c=!n[5].destination&&Yh(n);return{c(){e=w("select"),t=w("option"),t.textContent="직접 입력";for(let d=0;d<u.length;d+=1)u[d].c();r=M(),c&&c.c(),i=We(),t.__value="",ie(t,t.__value),n[5].destination===void 0&&Kt(()=>n[30].call(e))},m(d,f){R(d,e,f),_(e,t);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(e,null);bt(e,n[5].destination,!0),R(d,r,f),c&&c.m(d,f),R(d,i,f),s||(o=x(e,"change",n[30]),s=!0)},p(d,f){if(f[0]&1024){l=Ee(d[10]);let p;for(p=0;p<l.length;p+=1){const g=Dh(d,l,p);u[p]?u[p].p(g,f):(u[p]=Xh(g),u[p].c(),u[p].m(e,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=l.length}f[0]&1056&&bt(e,d[5].destination),d[5].destination?c&&(c.d(1),c=null):c?c.p(d,f):(c=Yh(d),c.c(),c.m(i.parentNode,i))},d(d){d&&(A(e),A(r),A(i)),nt(u,d),c&&c.d(d),s=!1,o()}}}function Xh(n){let e,t=n[58]+"",r,i;return{c(){e=w("option"),r=q(t),e.__value=i=n[58],ie(e,e.__value)},m(s,o){R(s,e,o),_(e,r)},p(s,o){o[0]&1024&&t!==(t=s[58]+"")&&ee(r,t),o[0]&1024&&i!==(i=s[58])&&(e.__value=i,ie(e,e.__value))},d(s){s&&A(e)}}}function Yh(n){let e,t,r;return{c(){e=w("input"),H(e,"placeholder","여행지 직접 입력"),ue(e,"margin-top","0.3rem")},m(i,s){R(i,e,s),ie(e,n[5].destination),t||(r=x(e,"input",n[31]),t=!0)},p(i,s){s[0]&1056&&e.value!==i[5].destination&&ie(e,i[5].destination)},d(i){i&&A(e),t=!1,r()}}}function NI(n){let e,t=Ee(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Zh(Vh(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=We()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);R(i,e,s)},p(i,s){if(s[0]&542721){t=Ee(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Vh(i,t,o);r[o]?r[o].p(l,s):(r[o]=Zh(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function DI(n){let e;return{c(){e=w("p"),e.textContent="생성된 일정이 없습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function Jh(n){let e,t,r=n[55].destination+"",i;return{c(){e=w("span"),t=q("· "),i=q(r)},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&1&&r!==(r=s[55].destination+"")&&ee(i,r)},d(s){s&&A(e)}}}function $h(n){let e,t,r,i;function s(...o){return n[27](n[55],...o)}return{c(){e=w("span"),t=w("button"),t.textContent="삭제",ue(e,"float","right")},m(o,l){R(o,e,l),_(e,t),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&A(e),r=!1,i()}}}function Zh(n){let e,t,r=n[55].title+"",i,s,o,l,u,c,d,f=n[55].startDate+"",p,g,v=n[55].endDate+"",E,y,V,L,D=n[55].destination&&Jh(n),O=n[55].createdBy===n[11].uid&&$h(n);function U(){return n[28](n[55])}return{c(){e=w("div"),t=w("strong"),i=q(r),s=M(),D&&D.c(),o=M(),O&&O.c(),l=M(),u=w("br"),c=M(),d=w("small"),p=q(f),g=q(" ~ "),E=q(v),y=M(),H(e,"class","card"),ue(e,"cursor","pointer")},m(B,k){R(B,e,k),_(e,t),_(t,i),_(e,s),D&&D.m(e,null),_(e,o),O&&O.m(e,null),_(e,l),_(e,u),_(e,c),_(e,d),_(d,p),_(d,g),_(d,E),_(e,y),V||(L=x(e,"click",U),V=!0)},p(B,k){n=B,k[0]&1&&r!==(r=n[55].title+"")&&ee(i,r),n[55].destination?D?D.p(n,k):(D=Jh(n),D.c(),D.m(e,o)):D&&(D.d(1),D=null),n[55].createdBy===n[11].uid?O?O.p(n,k):(O=$h(n),O.c(),O.m(e,l)):O&&(O.d(1),O=null),k[0]&1&&f!==(f=n[55].startDate+"")&&ee(p,f),k[0]&1&&v!==(v=n[55].endDate+"")&&ee(E,v)},d(B){B&&A(e),D&&D.d(),O&&O.d(),V=!1,L()}}}function VI(n){let e;function t(s,o){if(!s[3])return bI;if(s[4]==="list")return II;if(s[4]==="create")return EI;if(s[4]==="detail"&&s[1])return TI}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=We()},m(s,o){i&&i.m(s,o),R(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:Se,o:Se,d(s){s&&A(e),i&&i.d(s)}}}function OI(n,e){const t=[],[r,i,s]=n.split("-").map(Number),[o,l,u]=e.split("-").map(Number),c=new Date(r,i-1,s),d=new Date(o,l-1,u);for(let f=new Date(c);f<=d;f.setDate(f.getDate()+1)){const p=f.getFullYear(),g=String(f.getMonth()+1).padStart(2,"0"),v=String(f.getDate()).padStart(2,"0");t.push(`${p}-${g}-${v}`)}return t}function ed(n,e){const[t,r,i]=n.split("-").map(Number),o=new Date(t,r-1,i).toLocaleDateString("ko-KR",{weekday:"short"});return`Day ${e+1} — ${t}.${String(r).padStart(2,"0")}.${String(i).padStart(2,"0")} (${o})`}function LI(n,e,t){let r,i,s,o,l;rn(n,Bn,re=>t(3,o=re)),rn(n,jr,re=>t(11,l=re));const u=["이동","식사","관광","숙박","기타"];let c="list",d=[],f=null,p=[],g=[],v,E,y,V={title:"",destination:"",startDate:"",endDate:""},L=null,D=new Set;function O(re){D.has(re)?D.delete(re):D.add(re),t(7,D)}let U=[];function B(){v==null||v(),t(23,v=Gt(Lt(Ge(Te,"groups",o.id,"trips"),_n("createdAt","desc")),re=>{t(0,d=re.docs.map(K=>({id:K.id,...K.data()})))}))}function k(){y==null||y(),t(24,y=Gt(Lt(Ge(Te,"groups",o.id,"votes"),ma("status","==","closed")),re=>{t(25,U=re.docs.map(K=>({id:K.id,...K.data()})))}))}function T(re){t(1,f=re),t(4,c="detail"),t(22,p=[]),t(6,L=null),E==null||E(),t(2,g=OI(re.startDate,re.endDate)),E=Gt(Lt(Ge(Te,"groups",o.id,"trips",re.id,"items"),_n("createdAt","asc")),K=>{t(22,p=K.docs.map(me=>({id:me.id,...me.data()})))})}async function I(){!V.title.trim()||!V.startDate||!V.endDate||V.startDate>V.endDate||(await Yn(Ge(Te,"groups",o.id,"trips"),{title:V.title.trim(),destination:V.destination.trim()||null,startDate:V.startDate,endDate:V.endDate,createdBy:l.uid,createdAt:Ut()}),t(5,V={title:"",destination:"",startDate:"",endDate:""}),t(4,c="list"))}function P(re){t(6,L={isNew:!0,date:re,id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""})}function S(re){t(6,L={isNew:!1,...re})}async function N(){var Ae;if(!L.placeName.trim())return;const re=((Ae=L.mapUrl)==null?void 0:Ae.trim())||null,{lat:K,lng:me}=pm(re),qe={date:L.date,time:L.time||null,placeName:L.placeName.trim(),category:L.category,memo:L.memo.trim(),mapUrl:re,lat:K,lng:me,updatedAt:Ut()};L.isNew?await Yn(Ge(Te,"groups",o.id,"trips",f.id,"items"),{...qe,createdBy:l.uid,createdByName:l.displayName,createdAt:Ut()}):await Xn($e(Te,"groups",o.id,"trips",f.id,"items",L.id),qe),t(6,L=null)}async function C(re,K){K==null||K.stopPropagation(),confirm(`"${re.title}" 일정을 삭제하시겠습니까?`)&&(await Nt($e(Te,"groups",o.id,"trips",re.id)),(f==null?void 0:f.id)===re.id&&Z())}async function oe(re){t(22,p=p.filter(K=>K.id!==re.id)),await Nt($e(Te,"groups",o.id,"trips",f.id,"items",re.id))}function Z(){t(4,c="list"),t(1,f=null),t(22,p=[]),t(2,g=[]),t(6,L=null),E==null||E()}Os(()=>{v==null||v(),E==null||E(),y==null||y()});const ce=()=>t(4,c="create"),Y=(re,K)=>C(re,K),de=re=>T(re);function he(){V.title=this.value,t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}function Ne(){V.destination=jn(this),t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}function Fe(){V.destination=this.value,t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}function ye(){V.destination=this.value,t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}function Ie(){V.startDate=this.value,t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}function je(){V.endDate=this.value,t(5,V),t(10,r),t(25,U),t(3,o),t(23,v),t(24,y)}const Le=re=>{const K=i.find(me=>me.placeName===re.target.value);K&&(L||t(6,L={isNew:!0,date:g[0]??"",id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""}),t(6,L={...L,placeName:K.placeName,memo:K.description||"",mapUrl:K.mapUrl||""}),re.target.value="")};function Re(){L.time=this.value,t(6,L),t(12,u)}function be(){L.category=jn(this),t(6,L),t(12,u)}function De(){L.placeName=this.value,t(6,L),t(12,u)}function $(){L.memo=this.value,t(6,L),t(12,u)}function le(){L.mapUrl=this.value,t(6,L),t(12,u)}const Q=()=>t(6,L=null),te=re=>S(re),ne=re=>oe(re),j=re=>O(re);function J(){L.time=this.value,t(6,L),t(12,u)}function pe(){L.category=jn(this),t(6,L),t(12,u)}function gt(){L.placeName=this.value,t(6,L),t(12,u)}function At(){L.memo=this.value,t(6,L),t(12,u)}function Rt(){L.mapUrl=this.value,t(6,L),t(12,u)}const kt=()=>t(6,L=null),Tt=re=>P(re);return n.$$.update=()=>{if(n.$$.dirty[0]&25165832&&(o?(B(),k()):(t(0,d=[]),t(25,U=[]),v==null||v(),y==null||y())),n.$$.dirty[0]&33554432&&t(10,r=[...new Set(U.filter(re=>{var K;return re.voteType==="destination"&&((K=re.winners)==null?void 0:K.length)}).flatMap(re=>re.winners.map(K=>K.placeName??K)))]),n.$$.dirty[0]&3&&f&&d.length>0){const re=d.find(K=>K.id===f.id);re&&t(1,f=re)}n.$$.dirty[0]&33554434&&t(9,i=f?U.filter(re=>{var K;return re.voteType==="attraction"&&re.linkedDestination===f.destination&&((K=re.winners)==null?void 0:K.length)}).flatMap(re=>re.winners):[]),n.$$.dirty[0]&4194308&&t(8,s=Object.fromEntries(g.map(re=>{const K=p.filter(me=>me.date===re);return[re,[...K.filter(me=>me.time).sort((me,qe)=>me.time.localeCompare(qe.time)),...K.filter(me=>!me.time)]]})))},[d,f,g,o,c,V,L,D,s,i,r,l,u,O,T,I,P,S,N,C,oe,Z,p,v,y,U,ce,Y,de,he,Ne,Fe,ye,Ie,je,Le,Re,be,De,$,le,Q,te,ne,j,J,pe,gt,At,Rt,kt,Tt]}class MI extends Ai{constructor(e){super(),bi(this,e,LI,VI,Or,{},null,[-1,-1,-1])}}async function UI(n){if(!n.type.match(/^image\/(jpeg|png)$/))return n;const e=await createImageBitmap(n),t=document.createElement("canvas");let{width:r,height:i}=e;const s=1920;if(r>s||i>s){const o=Math.min(s/r,s/i);r=Math.round(r*o),i=Math.round(i*o)}return t.width=r,t.height=i,t.getContext("2d").drawImage(e,0,0,r,i),new Promise(o=>{t.toBlob(l=>o(l??n),"image/jpeg",.8)})}function td(n,e,t){const r=n.slice();return r[73]=e[t],r}function nd(n,e,t){const r=n.slice();return r[65]=e[t],r}function rd(n,e,t){const r=n.slice();return r[62]=e[t],r}function id(n,e,t){const r=n.slice();return r[65]=e[t],r}function sd(n,e,t){const r=n.slice();return r[70]=e[t],r}function od(n,e,t){const r=n.slice();return r[56]=e[t],r}function ad(n,e,t){const r=n.slice();return r[59]=e[t],r}function FI(n){let e,t,r,i=n[0].title+"",s,o,l,u,c,d,f,p,g,v,E,y,V=n[5].uploadedByName+"",L,D,O,U,B,k,T,I,P=n[31](n[5]),S,N,C,oe,Z,ce=n[6].length+"",Y,de,he,Ne,Fe,ye,Ie,je,Le,Re,be,De,$=n[5].placeName&&ld(n),le=n[5].comment&&ud(n),Q=P&&cd(n),te=Ee(n[6]),ne=[];for(let j=0;j<te.length;j+=1)ne[j]=dd(td(n,te,j));return{c(){e=w("h2"),t=w("button"),t.textContent="← 앨범",r=M(),s=q(i),o=M(),l=w("img"),d=M(),f=w("table"),$&&$.c(),p=M(),le&&le.c(),g=M(),v=w("tr"),E=w("th"),E.textContent="업로더",y=w("td"),L=q(V),D=M(),O=w("div"),U=w("a"),B=w("button"),B.textContent="다운로드",I=M(),Q&&Q.c(),S=M(),N=w("hr"),C=M(),oe=w("h3"),Z=q("코멘트 ("),Y=q(ce),de=q(")"),he=M();for(let j=0;j<ne.length;j+=1)ne[j].c();Ne=M(),Fe=w("div"),ye=w("textarea"),Ie=M(),je=w("button"),Le=q("작성"),It(l.src,u=n[5].downloadURL)||H(l,"src",u),H(l,"alt",c=n[5].originalFilename),H(l,"class","full-photo svelte-1ro9az4"),ue(f,"margin-top","0.8rem"),H(U,"href",k=n[5].downloadURL),H(U,"download",T=n[5].originalFilename),H(U,"target","_blank"),H(U,"rel","noreferrer"),ue(O,"margin-top","0.8rem"),H(ye,"placeholder","코멘트 입력"),H(ye,"rows","2"),H(ye,"class","svelte-1ro9az4"),je.disabled=Re=n[19]||!n[18].trim(),H(Fe,"class","comment-form svelte-1ro9az4")},m(j,J){R(j,e,J),_(e,t),_(e,r),_(e,s),R(j,o,J),R(j,l,J),R(j,d,J),R(j,f,J),$&&$.m(f,null),_(f,p),le&&le.m(f,null),_(f,g),_(f,v),_(v,E),_(v,y),_(y,L),R(j,D,J),R(j,O,J),_(O,U),_(U,B),_(O,I),Q&&Q.m(O,null),R(j,S,J),R(j,N,J),R(j,C,J),R(j,oe,J),_(oe,Z),_(oe,Y),_(oe,de),R(j,he,J);for(let pe=0;pe<ne.length;pe+=1)ne[pe]&&ne[pe].m(j,J);R(j,Ne,J),R(j,Fe,J),_(Fe,ye),ie(ye,n[18]),_(Fe,Ie),_(Fe,je),_(je,Le),be||(De=[x(t,"click",n[24]),x(ye,"input",n[49]),x(je,"click",n[29])],be=!0)},p(j,J){if(J[0]&1&&i!==(i=j[0].title+"")&&ee(s,i),J[0]&32&&!It(l.src,u=j[5].downloadURL)&&H(l,"src",u),J[0]&32&&c!==(c=j[5].originalFilename)&&H(l,"alt",c),j[5].placeName?$?$.p(j,J):($=ld(j),$.c(),$.m(f,p)):$&&($.d(1),$=null),j[5].comment?le?le.p(j,J):(le=ud(j),le.c(),le.m(f,g)):le&&(le.d(1),le=null),J[0]&32&&V!==(V=j[5].uploadedByName+"")&&ee(L,V),J[0]&32&&k!==(k=j[5].downloadURL)&&H(U,"href",k),J[0]&32&&T!==(T=j[5].originalFilename)&&H(U,"download",T),J[0]&32&&(P=j[31](j[5])),P?Q?Q.p(j,J):(Q=cd(j),Q.c(),Q.m(O,null)):Q&&(Q.d(1),Q=null),J[0]&64&&ce!==(ce=j[6].length+"")&&ee(Y,ce),J[0]&1075839040){te=Ee(j[6]);let pe;for(pe=0;pe<te.length;pe+=1){const gt=td(j,te,pe);ne[pe]?ne[pe].p(gt,J):(ne[pe]=dd(gt),ne[pe].c(),ne[pe].m(Ne.parentNode,Ne))}for(;pe<ne.length;pe+=1)ne[pe].d(1);ne.length=te.length}J[0]&262144&&ie(ye,j[18]),J[0]&786432&&Re!==(Re=j[19]||!j[18].trim())&&(je.disabled=Re)},d(j){j&&(A(e),A(o),A(l),A(d),A(f),A(D),A(O),A(S),A(N),A(C),A(oe),A(he),A(Ne),A(Fe)),$&&$.d(),le&&le.d(),Q&&Q.d(),nt(ne,j),be=!1,tt(De)}}}function BI(n){let e,t,r,i=n[0].title+"",s,o,l,u,c,d,f,p,g,v,E=n[12]&&fd(n);function y(D,O){return D[1].length===0?WI:D[20]?HI:zI}let V=y(n),L=V(n);return{c(){e=w("h2"),t=w("button"),t.textContent="← 목록",r=M(),s=q(i),o=M(),l=w("button"),l.textContent="+ 사진 추가",u=M(),E&&E.c(),c=M(),d=w("hr"),f=M(),L.c(),p=We()},m(D,O){R(D,e,O),_(e,t),_(e,r),_(e,s),R(D,o,O),R(D,l,O),R(D,u,O),E&&E.m(D,O),R(D,c,O),R(D,d,O),R(D,f,O),L.m(D,O),R(D,p,O),g||(v=[x(t,"click",n[24]),x(l,"click",n[40])],g=!0)},p(D,O){O[0]&1&&i!==(i=D[0].title+"")&&ee(s,i),D[12]?E?E.p(D,O):(E=fd(D),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),V===(V=y(D))&&L?L.p(D,O):(L.d(1),L=V(D),L&&(L.c(),L.m(p.parentNode,p)))},d(D){D&&(A(e),A(o),A(l),A(u),A(c),A(d),A(f),A(p)),E&&E.d(D),L.d(D),g=!1,tt(v)}}}function jI(n){let e,t,r,i,s,o,l,u,c,d,f=n[9]&&Td(n);function p(E,y){return E[4].length===0?KI:GI}let g=p(n),v=g(n);return{c(){e=w("h2"),e.textContent="여행 추억",t=M(),r=w("button"),r.textContent="+ 새 추억 앨범 만들기",i=M(),f&&f.c(),s=M(),o=w("hr"),l=M(),v.c(),u=We()},m(E,y){R(E,e,y),R(E,t,y),R(E,r,y),R(E,i,y),f&&f.m(E,y),R(E,s,y),R(E,o,y),R(E,l,y),v.m(E,y),R(E,u,y),c||(d=x(r,"click",n[34]),c=!0)},p(E,y){E[9]?f?f.p(E,y):(f=Td(E),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null),g===(g=p(E))&&v?v.p(E,y):(v.d(1),v=g(E),v&&(v.c(),v.m(u.parentNode,u)))},d(E){E&&(A(e),A(t),A(r),A(i),A(s),A(o),A(l),A(u)),f&&f.d(E),v.d(E),c=!1,d()}}}function qI(n){let e;return{c(){e=w("p"),e.textContent="그룹을 먼저 선택해주세요."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function ld(n){let e,t,r,i=n[5].placeName+"",s;return{c(){e=w("tr"),t=w("th"),t.textContent="장소",r=w("td"),s=q(i)},m(o,l){R(o,e,l),_(e,t),_(e,r),_(r,s)},p(o,l){l[0]&32&&i!==(i=o[5].placeName+"")&&ee(s,i)},d(o){o&&A(e)}}}function ud(n){let e,t,r,i=n[5].comment+"",s;return{c(){e=w("tr"),t=w("th"),t.textContent="코멘트",r=w("td"),s=q(i)},m(o,l){R(o,e,l),_(e,t),_(e,r),_(r,s)},p(o,l){l[0]&32&&i!==(i=o[5].comment+"")&&ee(s,i)},d(o){o&&A(e)}}}function cd(n){let e,t,r;return{c(){e=w("button"),e.textContent="삭제",ue(e,"margin-left","0.5rem")},m(i,s){R(i,e,s),t||(r=x(e,"click",n[47]),t=!0)},p:Se,d(i){i&&A(e),t=!1,r()}}}function hd(n){let e,t,r;function i(){return n[48](n[73])}return{c(){e=w("button"),e.textContent="삭제",H(e,"class","btn-small svelte-1ro9az4")},m(s,o){R(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&A(e),t=!1,r()}}}function dd(n){var y;let e,t,r,i=n[73].displayName+"",s,o,l,u=Vs(n[73].createdAt)+"",c,d,f,p,g=n[73].content+"",v,E=n[73].userId===((y=n[21])==null?void 0:y.uid)&&hd(n);return{c(){e=w("div"),t=w("div"),r=w("strong"),s=q(i),o=M(),l=w("span"),c=q(u),d=M(),E&&E.c(),f=M(),p=w("p"),v=q(g),H(l,"class","meta svelte-1ro9az4"),H(t,"class","comment-header svelte-1ro9az4"),ue(p,"margin","0.3rem 0 0"),H(e,"class","card")},m(V,L){R(V,e,L),_(e,t),_(t,r),_(r,s),_(t,o),_(t,l),_(l,c),_(t,d),E&&E.m(t,null),_(e,f),_(e,p),_(p,v)},p(V,L){var D;L[0]&64&&i!==(i=V[73].displayName+"")&&ee(s,i),L[0]&64&&u!==(u=Vs(V[73].createdAt)+"")&&ee(c,u),V[73].userId===((D=V[21])==null?void 0:D.uid)?E?E.p(V,L):(E=hd(V),E.c(),E.m(t,null)):E&&(E.d(1),E=null),L[0]&64&&g!==(g=V[73].content+"")&&ee(v,g)},d(V){V&&A(e),E&&E.d()}}}function fd(n){let e,t,r,i,s,o,l,u,c,d,f,p=n[16]?"업로드 중...":"업로드",g,v,E,y,V,L,D=n[0].tripId&&n[8].length&&pd(n),O=n[17]&&_d(n);return{c(){e=w("div"),t=w("div"),r=w("input"),i=M(),D&&D.c(),s=M(),o=w("div"),l=w("input"),u=M(),O&&O.c(),c=M(),d=w("div"),f=w("button"),g=q(p),E=M(),y=w("button"),y.textContent="취소",H(r,"type","file"),H(r,"accept","image/jpeg,image/png,image/gif,image/webp"),H(l,"placeholder","한 줄 코멘트 (선택)"),ue(l,"width","100%"),ue(o,"margin-top","0.4rem"),f.disabled=v=n[16]||!n[13],ue(y,"margin-left","0.4rem"),ue(d,"margin-top","0.6rem"),H(e,"class","card"),ue(e,"margin-top","0.8rem")},m(U,B){R(U,e,B),_(e,t),_(t,r),_(e,i),D&&D.m(e,null),_(e,s),_(e,o),_(o,l),ie(l,n[15]),_(e,u),O&&O.m(e,null),_(e,c),_(e,d),_(d,f),_(f,g),_(d,E),_(d,y),V||(L=[x(r,"change",n[41]),x(l,"input",n[43]),x(f,"click",n[26]),x(y,"click",n[44])],V=!0)},p(U,B){U[0].tripId&&U[8].length?D?D.p(U,B):(D=pd(U),D.c(),D.m(e,s)):D&&(D.d(1),D=null),B[0]&32768&&l.value!==U[15]&&ie(l,U[15]),U[17]?O?O.p(U,B):(O=_d(U),O.c(),O.m(e,c)):O&&(O.d(1),O=null),B[0]&65536&&p!==(p=U[16]?"업로드 중...":"업로드")&&ee(g,p),B[0]&73728&&v!==(v=U[16]||!U[13])&&(f.disabled=v)},d(U){U&&A(e),D&&D.d(),O&&O.d(),V=!1,tt(L)}}}function pd(n){let e,t,r,i,s,o=Ee(n[8]),l=[];for(let u=0;u<o.length;u+=1)l[u]=md(sd(n,o,u));return{c(){e=w("div"),t=w("select"),r=w("option"),r.textContent="일정 항목 연결 안 함";for(let u=0;u<l.length;u+=1)l[u].c();r.__value="",ie(r,r.__value),ue(t,"width","100%"),n[14]===void 0&&Kt(()=>n[42].call(t)),ue(e,"margin-top","0.4rem")},m(u,c){R(u,e,c),_(e,t),_(t,r);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null);bt(t,n[14],!0),i||(s=x(t,"change",n[42]),i=!0)},p(u,c){if(c[0]&256|c[1]&2){o=Ee(u[8]);let d;for(d=0;d<o.length;d+=1){const f=sd(u,o,d);l[d]?l[d].p(f,c):(l[d]=md(f),l[d].c(),l[d].m(t,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=o.length}c[0]&16640&&bt(t,u[14])},d(u){u&&A(e),nt(l,u),i=!1,s()}}}function md(n){let e,t=n[32](n[70])+"",r,i;return{c(){e=w("option"),r=q(t),e.__value=i=n[70].id,ie(e,e.__value)},m(s,o){R(s,e,o),_(e,r)},p(s,o){o[0]&256&&t!==(t=s[32](s[70])+"")&&ee(r,t),o[0]&256&&i!==(i=s[70].id)&&(e.__value=i,ie(e,e.__value))},d(s){s&&A(e)}}}function _d(n){let e,t;return{c(){e=w("p"),t=q(n[17]),H(e,"class","error svelte-1ro9az4")},m(r,i){R(r,e,i),_(e,t)},p(r,i){i[0]&131072&&ee(t,r[17])},d(r){r&&A(e)}}}function zI(n){let e,t=Ee(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=gd(nd(n,t,i));return{c(){e=w("div");for(let i=0;i<r.length;i+=1)r[i].c();H(e,"class","photo-grid svelte-1ro9az4")},m(i,s){R(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&8388610){t=Ee(i[1]);let o;for(o=0;o<t.length;o+=1){const l=nd(i,t,o);r[o]?r[o].p(l,s):(r[o]=gd(l),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function HI(n){let e,t=Ee(n[20]),r=[];for(let i=0;i<t.length;i+=1)r[i]=wd(rd(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=We()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);R(i,e,s)},p(i,s){if(s[0]&9437184){t=Ee(i[20]);let o;for(o=0;o<t.length;o+=1){const l=rd(i,t,o);r[o]?r[o].p(l,s):(r[o]=wd(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function WI(n){let e;return{c(){e=w("p"),e.textContent="아직 추가된 사진이 없습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function gd(n){let e,t,r,i,s,o,l=(n[65].comment||n[65].uploadedByName)+"",u,c,d,f;function p(){return n[46](n[65])}return{c(){e=w("div"),t=w("img"),s=M(),o=w("div"),u=q(l),c=M(),It(t.src,r=n[65].downloadURL)||H(t,"src",r),H(t,"alt",i=n[65].originalFilename),H(t,"loading","lazy"),H(t,"class","svelte-1ro9az4"),H(o,"class","photo-meta svelte-1ro9az4"),H(e,"class","photo-thumb svelte-1ro9az4")},m(g,v){R(g,e,v),_(e,t),_(e,s),_(e,o),_(o,u),_(e,c),d||(f=x(e,"click",p),d=!0)},p(g,v){n=g,v[0]&2&&!It(t.src,r=n[65].downloadURL)&&H(t,"src",r),v[0]&2&&i!==(i=n[65].originalFilename)&&H(t,"alt",i),v[0]&2&&l!==(l=(n[65].comment||n[65].uploadedByName)+"")&&ee(u,l)},d(g){g&&A(e),d=!1,f()}}}function yd(n){let e,t,r=n[62].date+"",i;return{c(){e=w("span"),t=q("· "),i=q(r),H(e,"class","meta svelte-1ro9az4"),ue(e,"font-weight","normal")},m(s,o){R(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&1048576&&r!==(r=s[62].date+"")&&ee(i,r)},d(s){s&&A(e)}}}function vd(n){let e,t,r,i,s,o,l=(n[65].comment||"")+"",u,c,d,f;function p(){return n[45](n[65])}return{c(){e=w("div"),t=w("img"),s=M(),o=w("div"),u=q(l),c=M(),It(t.src,r=n[65].downloadURL)||H(t,"src",r),H(t,"alt",i=n[65].originalFilename),H(t,"loading","lazy"),H(t,"class","svelte-1ro9az4"),H(o,"class","photo-meta svelte-1ro9az4"),H(e,"class","photo-thumb svelte-1ro9az4")},m(g,v){R(g,e,v),_(e,t),_(e,s),_(e,o),_(o,u),_(e,c),d||(f=x(e,"click",p),d=!0)},p(g,v){n=g,v[0]&1048576&&!It(t.src,r=n[65].downloadURL)&&H(t,"src",r),v[0]&1048576&&i!==(i=n[65].originalFilename)&&H(t,"alt",i),v[0]&1048576&&l!==(l=(n[65].comment||"")+"")&&ee(u,l)},d(g){g&&A(e),d=!1,f()}}}function wd(n){let e,t,r=n[62].label+"",i,s,o,l,u,c=n[62].date&&yd(n),d=Ee(n[62].photos),f=[];for(let p=0;p<d.length;p+=1)f[p]=vd(id(n,d,p));return{c(){e=w("div"),t=w("h3"),i=q(r),s=M(),c&&c.c(),o=M(),l=w("div");for(let p=0;p<f.length;p+=1)f[p].c();u=M(),H(t,"class","place-label svelte-1ro9az4"),H(l,"class","photo-grid svelte-1ro9az4"),H(e,"class","place-section svelte-1ro9az4")},m(p,g){R(p,e,g),_(e,t),_(t,i),_(t,s),c&&c.m(t,null),_(e,o),_(e,l);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(l,null);_(e,u)},p(p,g){if(g[0]&1048576&&r!==(r=p[62].label+"")&&ee(i,r),p[62].date?c?c.p(p,g):(c=yd(p),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g[0]&9437184){d=Ee(p[62].photos);let v;for(v=0;v<d.length;v+=1){const E=id(p,d,v);f[v]?f[v].p(E,g):(f[v]=vd(E),f[v].c(),f[v].m(l,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=d.length}},d(p){p&&A(e),c&&c.d(),nt(f,p)}}}function Td(n){let e,t,r,i,s,o,l,u,c,d,f,p=n[7].length&&Ed(n);return{c(){e=w("div"),t=w("div"),r=w("input"),i=M(),p&&p.c(),s=M(),o=w("div"),l=w("button"),l.textContent="만들기",u=M(),c=w("button"),c.textContent="취소",H(r,"placeholder","앨범 제목"),ue(r,"width","100%"),ue(c,"margin-left","0.4rem"),ue(o,"margin-top","0.6rem"),H(e,"class","card"),ue(e,"margin-top","0.8rem")},m(g,v){R(g,e,v),_(e,t),_(t,r),ie(r,n[10]),_(e,i),p&&p.m(e,null),_(e,s),_(e,o),_(o,l),_(o,u),_(o,c),d||(f=[x(r,"input",n[35]),x(l,"click",n[25]),x(c,"click",n[37])],d=!0)},p(g,v){v[0]&1024&&r.value!==g[10]&&ie(r,g[10]),g[7].length?p?p.p(g,v):(p=Ed(g),p.c(),p.m(e,s)):p&&(p.d(1),p=null)},d(g){g&&A(e),p&&p.d(),d=!1,tt(f)}}}function Ed(n){let e,t,r,i,s,o=Ee(n[7]),l=[];for(let u=0;u<o.length;u+=1)l[u]=Id(ad(n,o,u));return{c(){e=w("div"),t=w("select"),r=w("option"),r.textContent="연결된 일정 없음";for(let u=0;u<l.length;u+=1)l[u].c();r.__value="",ie(r,r.__value),ue(t,"width","100%"),n[11]===void 0&&Kt(()=>n[36].call(t)),ue(e,"margin-top","0.4rem")},m(u,c){R(u,e,c),_(e,t),_(t,r);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null);bt(t,n[11],!0),i||(s=x(t,"change",n[36]),i=!0)},p(u,c){if(c[0]&128){o=Ee(u[7]);let d;for(d=0;d<o.length;d+=1){const f=ad(u,o,d);l[d]?l[d].p(f,c):(l[d]=Id(f),l[d].c(),l[d].m(t,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=o.length}c[0]&2176&&bt(t,u[11])},d(u){u&&A(e),nt(l,u),i=!1,s()}}}function Id(n){let e,t=n[59].title+"",r,i;return{c(){e=w("option"),r=q(t),e.__value=i=n[59].id,ie(e,e.__value)},m(s,o){R(s,e,o),_(e,r)},p(s,o){o[0]&128&&t!==(t=s[59].title+"")&&ee(r,t),o[0]&128&&i!==(i=s[59].id)&&(e.__value=i,ie(e,e.__value))},d(s){s&&A(e)}}}function GI(n){let e,t=Ee(n[4]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Ad(od(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=We()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);R(i,e,s)},p(i,s){if(s[0]&140509204){t=Ee(i[4]);let o;for(o=0;o<t.length;o+=1){const l=od(i,t,o);r[o]?r[o].p(l,s):(r[o]=Ad(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&A(e),nt(r,i)}}}function KI(n){let e;return{c(){e=w("p"),e.textContent="아직 추억 앨범이 없습니다."},m(t,r){R(t,e,r)},p:Se,d(t){t&&A(e)}}}function bd(n){let e,t,r;function i(...s){return n[38](n[56],...s)}return{c(){e=w("button"),e.textContent="삭제"},m(s,o){R(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&A(e),t=!1,r()}}}function Ad(n){var I,P,S;let e,t,r,i,s=n[56].title+"",o,l,u,c=(n[56].photoCount??0)+"",d,f,p,g,v=Vs(n[56].createdAt)+"",E,y,V=n[56].createdByName+"",L,D,O,U,B,k=(n[56].createdBy===((I=n[21])==null?void 0:I.uid)||((P=n[2])==null?void 0:P.createdBy)===((S=n[21])==null?void 0:S.uid))&&bd(n);function T(){return n[39](n[56])}return{c(){e=w("div"),t=w("div"),r=w("div"),i=w("strong"),o=q(s),l=M(),u=w("span"),d=q(c),f=q("장"),p=M(),g=w("div"),E=q(v),y=q(" · "),L=q(V),D=M(),k&&k.c(),O=M(),H(u,"class","count svelte-1ro9az4"),H(g,"class","meta svelte-1ro9az4"),ue(t,"display","flex"),ue(t,"justify-content","space-between"),ue(t,"align-items","flex-start"),H(e,"class","card album-card svelte-1ro9az4")},m(N,C){R(N,e,C),_(e,t),_(t,r),_(r,i),_(i,o),_(r,l),_(r,u),_(u,d),_(u,f),_(r,p),_(r,g),_(g,E),_(g,y),_(g,L),_(t,D),k&&k.m(t,null),_(e,O),U||(B=x(e,"click",T),U=!0)},p(N,C){var oe,Z,ce;n=N,C[0]&16&&s!==(s=n[56].title+"")&&ee(o,s),C[0]&16&&c!==(c=(n[56].photoCount??0)+"")&&ee(d,c),C[0]&16&&v!==(v=Vs(n[56].createdAt)+"")&&ee(E,v),C[0]&16&&V!==(V=n[56].createdByName+"")&&ee(L,V),n[56].createdBy===((oe=n[21])==null?void 0:oe.uid)||((Z=n[2])==null?void 0:Z.createdBy)===((ce=n[21])==null?void 0:ce.uid)?k?k.p(n,C):(k=bd(n),k.c(),k.m(t,null)):k&&(k.d(1),k=null)},d(N){N&&A(e),k&&k.d(),U=!1,B()}}}function xI(n){let e;function t(s,o){if(!s[2])return qI;if(s[3]==="albums")return jI;if(s[3]==="album")return BI;if(s[3]==="photo")return FI}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=We()},m(s,o){i&&i.m(s,o),R(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:Se,o:Se,d(s){s&&A(e),i&&i.d(s)}}}function QI(n){const e={};for(const t of n){const r=t.scheduleItemId||"__other__";e[r]||(e[r]={label:t.placeName||"기타",date:t.date||null,photos:[]}),e[r].photos.push(t)}return Object.values(e).sort((t,r)=>t.date?r.date?t.date.localeCompare(r.date):-1:1)}function Vs(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"-"}function XI(n,e,t){let r,i,s,o;rn(n,jr,K=>t(21,s=K)),rn(n,Bn,K=>t(2,o=K));let l="albums",u=[],c=null,d=[],f=null,p=[],g=[],v=[],E=!1,y="",V="",L=!1,D=null,O="",U="",B=!1,k="",T="",I=!1,P=null,S=null,N=null;function C(){S&&(S(),S=null),N&&(N(),N=null),t(3,l="albums"),t(0,c=null),t(5,f=null),t(1,d=[]),t(6,p=[]),t(8,v=[]),t(9,E=!1),t(12,L=!1),oe(),Z()}function oe(){P&&P(),P=Gt(Lt(Ge(Te,"groups",r,"albums"),_n("createdAt","desc")),K=>{t(4,u=K.docs.map(me=>({id:me.id,...me.data()})))})}async function Z(){try{const K=await pr(Lt(Ge(Te,"groups",r,"trips"),_n("startDate")));t(7,g=K.docs.map(me=>({id:me.id,...me.data()})))}catch{t(7,g=[])}}async function ce(K){if(t(0,c=K),t(8,v=[]),t(14,O=""),t(12,L=!1),t(17,k=""),K.tripId)try{const qe=(await pr(Lt(Ge(Te,"groups",r,"trips",K.tripId,"items"),_n("date")))).docs.map(Ae=>({id:Ae.id,...Ae.data()}));qe.sort((Ae,Ue)=>Ae.date!==Ue.date?Ae.date.localeCompare(Ue.date):!Ae.time&&!Ue.time?0:Ae.time?Ue.time?Ae.time.localeCompare(Ue.time):-1:1),t(8,v=qe)}catch(me){console.error("일정 항목 로드 실패:",me),t(8,v=[])}S&&S(),S=Gt(Lt(Ge(Te,"groups",r,"albums",K.id,"photos"),_n("uploadedAt","desc")),me=>{t(1,d=me.docs.map(qe=>({id:qe.id,...qe.data()})))}),t(3,l="album")}function Y(K){t(5,f=K),t(18,T=""),N&&N(),N=Gt(Lt(Ge(Te,"groups",r,"albums",c.id,"photos",K.id,"comments"),_n("createdAt","asc")),me=>{t(6,p=me.docs.map(qe=>({id:qe.id,...qe.data()})))}),t(3,l="photo")}function de(){l==="photo"?(N&&(N(),N=null),t(5,f=null),t(6,p=[]),t(3,l="album")):l==="album"&&(S&&(S(),S=null),t(0,c=null),t(1,d=[]),t(8,v=[]),t(12,L=!1),t(3,l="albums"))}async function he(){y.trim()&&(await Yn(Ge(Te,"groups",r,"albums"),{title:y.trim(),tripId:V||null,createdBy:s.uid,createdByName:s.displayName,createdAt:Ut(),photoCount:0}),t(10,y=""),t(11,V=""),t(9,E=!1))}async function Ne(){if(!D)return;if(!["image/jpeg","image/png","image/gif","image/webp"].includes(D.type)){t(17,k="jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.");return}if(D.size>10*1024*1024){t(17,k="파일 크기는 10MB 이하여야 합니다.");return}t(17,k=""),t(16,B=!0);try{const me=await UI(D),qe=$e(Ge(Te,"groups",r,"albums",c.id,"photos")),Ae=`groups/${r}/albums/${c.id}/${qe.id}_${D.name}`,Ue=Bo(jo,Ae);await F0(Ue,me);const Bt=await B0(Ue),st=v.find(rr=>rr.id===O);await Ns(qe,{storagePath:Ae,downloadURL:Bt,originalFilename:D.name,uploadedBy:s.uid,uploadedByName:s.displayName,uploadedAt:Ut(),comment:U.trim()||null,scheduleItemId:(st==null?void 0:st.id)||null,placeName:(st==null?void 0:st.placeName)||null,date:(st==null?void 0:st.date)||null}),await Xn($e(Te,"groups",r,"albums",c.id),{photoCount:Lc(1)}),t(13,D=null),t(14,O=""),t(15,U=""),t(12,L=!1)}catch(me){t(17,k="업로드 실패: "+me.message)}finally{t(16,B=!1)}}async function Fe(K,me){if(me.stopPropagation(),!confirm(`"${K.title}" 앨범을 삭제하시겠습니까? 사진과 코멘트가 모두 삭제됩니다.`))return;const qe=await pr(Ge(Te,"groups",r,"albums",K.id,"photos"));for(const Ae of qe.docs){const Ue=Ae.data();try{await qc(Bo(jo,Ue.storagePath))}catch{}const Bt=await pr(Ge(Te,"groups",r,"albums",K.id,"photos",Ae.id,"comments"));for(const st of Bt.docs)await Nt(st.ref);await Nt(Ae.ref)}await Nt($e(Te,"groups",r,"albums",K.id))}async function ye(K){if(!confirm("사진을 삭제하시겠습니까? 코멘트도 함께 삭제됩니다."))return;try{await qc(Bo(jo,K.storagePath))}catch{}const me=await pr(Ge(Te,"groups",r,"albums",c.id,"photos",K.id,"comments"));for(const qe of me.docs)await Nt(qe.ref);await Nt($e(Te,"groups",r,"albums",c.id,"photos",K.id)),await Xn($e(Te,"groups",r,"albums",c.id),{photoCount:Lc(-1)}),l==="photo"&&de()}async function Ie(){if(!(!T.trim()||I)){t(19,I=!0);try{await Yn(Ge(Te,"groups",r,"albums",c.id,"photos",f.id,"comments"),{userId:s.uid,displayName:s.displayName,content:T.trim(),createdAt:Ut()}),t(18,T="")}finally{t(19,I=!1)}}}async function je(K){confirm("코멘트를 삭제하시겠습니까?")&&await Nt($e(Te,"groups",r,"albums",c.id,"photos",f.id,"comments",K.id))}function Le(K){return K.uploadedBy===(s==null?void 0:s.uid)||(o==null?void 0:o.createdBy)===(s==null?void 0:s.uid)}function Re(K){const me=g.find(Ui=>Ui.id===(c==null?void 0:c.tripId));if(!(me!=null&&me.startDate))return`${K.date} ${K.time??""} ${K.placeName}`.trim();const[qe,Ae,Ue]=me.startDate.split("-").map(Number),[Bt,st,rr]=K.date.split("-").map(Number),oo=Math.round((new Date(Bt,st-1,rr)-new Date(qe,Ae-1,Ue))/864e5),Sn=K.time?` ${K.time}`:"";return`Day ${oo+1}${Sn} — ${K.placeName}`}Os(()=>{P&&P(),S&&S(),N&&N()});const be=()=>{t(9,E=!E)};function De(){y=this.value,t(10,y)}function $(){V=jn(this),t(11,V),t(7,g)}const le=()=>t(9,E=!1),Q=(K,me)=>Fe(K,me),te=K=>ce(K),ne=()=>{t(12,L=!L),t(17,k="")},j=K=>{t(13,D=K.target.files[0]),t(17,k="")};function J(){O=jn(this),t(14,O),t(8,v)}function pe(){U=this.value,t(15,U)}const gt=()=>{t(12,L=!1),t(17,k="")},At=K=>Y(K),Rt=K=>Y(K),kt=()=>ye(f),Tt=K=>je(K);function re(){T=this.value,t(18,T)}return n.$$.update=()=>{n.$$.dirty[0]&4&&t(33,r=o==null?void 0:o.id),n.$$.dirty[1]&4&&r&&C(),n.$$.dirty[0]&3&&t(20,i=c!=null&&c.tripId&&d.length?QI(d):null)},[c,d,o,l,u,f,p,g,v,E,y,V,L,D,O,U,B,k,T,I,i,s,ce,Y,de,he,Ne,Fe,ye,Ie,je,Le,Re,r,be,De,$,le,Q,te,ne,j,J,pe,gt,At,Rt,kt,Tt,re]}class YI extends Ai{constructor(e){super(),bi(this,e,XI,xI,Or,{},null,[-1,-1,-1])}}function JI(n){let e,t,r,i,s;return{c(){e=w("p"),e.textContent="로그인이 필요합니다.",t=M(),r=w("button"),r.textContent="Google 로그인"},m(o,l){R(o,e,l),R(o,t,l),R(o,r,l),i||(s=x(r,"click",n[2]),i=!0)},p:Se,i:Se,o:Se,d(o){o&&(A(e),A(t),A(r)),i=!1,s()}}}function $I(n){let e,t,r,i,s,o,l,u,c,d,f,p,g,v=n[1].displayName+"",E,y,V,L,D,O,U,B,k,T,I;var P=n[0];function S(N,C){return{}}return P&&(B=gu(P,S())),{c(){e=w("header"),t=w("h1"),t.textContent="그룹 여행",r=M(),i=w("nav"),s=w("a"),s.textContent="그룹",o=q(` |
      `),l=w("a"),l.textContent="투표",u=q(` |
      `),c=w("a"),c.textContent="일정",d=q(` |
      `),f=w("a"),f.textContent="추억",p=q(` |
      `),g=w("span"),E=q(v),y=M(),V=w("button"),V.textContent="로그아웃",L=M(),D=w("hr"),O=M(),U=w("main"),B&&wu(B.$$.fragment),H(s,"href","#groups"),H(l,"href","#vote"),H(c,"href","#schedule"),H(f,"href","#memory")},m(N,C){R(N,e,C),_(e,t),_(e,r),_(e,i),_(i,s),_(i,o),_(i,l),_(i,u),_(i,c),_(i,d),_(i,f),_(i,p),_(i,g),_(g,E),_(i,y),_(i,V),_(e,L),_(e,D),R(N,O,C),R(N,U,C),B&&zo(B,U,null),k=!0,T||(I=x(V,"click",n[4]),T=!0)},p(N,C){if((!k||C&2)&&v!==(v=N[1].displayName+"")&&ee(E,v),C&1&&P!==(P=N[0])){if(B){Nd();const oe=B;gs(oe.$$.fragment,1,0,()=>{Ho(oe,1)}),Dd()}P?(B=gu(P,S()),wu(B.$$.fragment),fi(B.$$.fragment,1),zo(B,U,null)):B=null}},i(N){k||(B&&fi(B.$$.fragment,N),k=!0)},o(N){B&&gs(B.$$.fragment,N),k=!1},d(N){N&&(A(e),A(O),A(U)),B&&Ho(B),T=!1,I()}}}function ZI(n){let e,t,r,i;const s=[$I,JI],o=[];function l(u,c){return u[1]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),r=We()},m(u,c){o[e].m(u,c),R(u,r,c),i=!0},p(u,[c]){let d=e;e=l(u),e===d?o[e].p(u,c):(Nd(),gs(o[d],1,1,()=>{o[d]=null}),Dd(),t=o[e],t?t.p(u,c):(t=o[e]=s[e](u),t.c()),fi(t,1),t.m(r.parentNode,r))},i(u){i||(fi(t),i=!0)},o(u){gs(t),i=!1},d(u){u&&A(r),o[e].d(u)}}}function eb(n,e,t){let r,i;rn(n,jr,c=>t(1,i=c));let s=location.hash||"#groups";window.addEventListener("hashchange",()=>t(3,s=location.hash));const o={"#groups":Xc,"#vote":wI,"#schedule":MI,"#memory":YI};async function l(){await jy(ga,new $t)}const u=()=>wy(ga);return n.$$.update=()=>{n.$$.dirty&8&&t(0,r=o[s]??Xc)},[r,i,l,s,u]}class tb extends Ai{constructor(e){super(),bi(this,e,eb,ZI,Or,{})}}new tb({target:document.getElementById("app")});
