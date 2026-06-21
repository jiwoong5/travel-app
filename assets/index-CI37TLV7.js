var i_=Object.defineProperty;var s_=(n,e,t)=>e in n?i_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ro=(n,e,t)=>s_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function De(){}function Wf(n){return n()}function yu(){return Object.create(null)}function rt(n){n.forEach(Wf)}function Gf(n){return typeof n=="function"}function Lr(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let es;function At(n,e){return n===e?!0:(es||(es=document.createElement("a")),es.href=e,n===es.href)}function o_(n){return Object.keys(n).length===0}function a_(n,...e){if(n==null){for(const r of e)r(void 0);return De}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function nn(n,e,t){n.$$.on_destroy.push(a_(e,t))}function _(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function w(n){n.parentNode&&n.parentNode.removeChild(n)}function ot(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function y(n){return document.createElement(n)}function j(n){return document.createTextNode(n)}function L(){return j(" ")}function He(){return j("")}function x(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function q(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function mr(n){return n===""?null:+n}function l_(n){return Array.from(n.childNodes)}function ee(n,e){e=""+e,n.data!==e&&(n.data=e)}function Z(n,e){n.value=e??""}function ae(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Rt(n,e,t){for(let r=0;r<n.options.length;r+=1){const i=n.options[r];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function jn(n){const e=n.querySelector(":checked");return e&&e.__value}function vu(n,e){return new n(e)}let di;function oi(n){di=n}function Kf(){if(!di)throw new Error("Function called outside component initialization");return di}function u_(n){Kf().$$.on_mount.push(n)}function Ms(n){Kf().$$.on_destroy.push(n)}const cr=[],wu=[];let _r=[];const Tu=[],c_=Promise.resolve();let Ho=!1;function h_(){Ho||(Ho=!0,c_.then(Qf))}function Gt(n){_r.push(n)}const ko=new Set;let lr=0;function Qf(){if(lr!==0)return;const n=di;do{try{for(;lr<cr.length;){const e=cr[lr];lr++,oi(e),f_(e.$$)}}catch(e){throw cr.length=0,lr=0,e}for(oi(null),cr.length=0,lr=0;wu.length;)wu.pop()();for(let e=0;e<_r.length;e+=1){const t=_r[e];ko.has(t)||(ko.add(t),t())}_r.length=0}while(cr.length);for(;Tu.length;)Tu.pop()();Ho=!1,ko.clear(),oi(n)}function f_(n){if(n.fragment!==null){n.update(),rt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Gt)}}function d_(n){const e=[],t=[];_r.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),_r=e}const ls=new Set;let Mn;function xf(){Mn={r:0,c:[],p:Mn}}function Xf(){Mn.r||rt(Mn.c),Mn=Mn.p}function pi(n,e){n&&n.i&&(ls.delete(n),n.i(e))}function ys(n,e,t,r){if(n&&n.o){if(ls.has(n))return;ls.add(n),Mn.c.push(()=>{ls.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Eu(n){n&&n.c()}function Wo(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),Gt(()=>{const s=n.$$.on_mount.map(Wf).filter(Gf);n.$$.on_destroy?n.$$.on_destroy.push(...s):rt(s),n.$$.on_mount=[]}),i.forEach(Gt)}function Go(n,e){const t=n.$$;t.fragment!==null&&(d_(t.after_update),rt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function p_(n,e){n.$$.dirty[0]===-1&&(cr.push(n),h_(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ai(n,e,t,r,i,s,o=null,l=[-1]){const u=di;oi(n);const c=n.$$={fragment:null,ctx:[],props:s,update:De,not_equal:i,bound:yu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:yu(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(d,p,...g)=>{const v=g.length?g[0]:p;return c.ctx&&i(c.ctx[d],c.ctx[d]=v)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](v),h&&p_(n,d)),p}):[],c.update(),h=!0,rt(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=l_(e.target);c.fragment&&c.fragment.l(d),d.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&pi(n.$$.fragment),Wo(n,e.target,e.anchor),Qf()}oi(u)}class Ri{constructor(){Ro(this,"$$");Ro(this,"$$set")}$destroy(){Go(this,1),this.$destroy=De}$on(e,t){if(!Gf(t))return De;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!o_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m_="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(m_);const ur=[];function Yf(n,e=De){let t;const r=new Set;function i(l){if(Lr(n,l)&&(n=l,t)){const u=!ur.length;for(const c of r)c[1](),ur.push(c,n);if(u){for(let c=0;c<ur.length;c+=2)ur[c][0](ur[c+1]);ur.length=0}}}function s(l){i(l(n))}function o(l,u=De){const c=[l,u];return r.add(c),r.size===1&&(t=e(i,s)||De),l(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var bu={};/**
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
 */const Jf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},__=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(t[h],t[d],t[p],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):__(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new g_;const p=s<<2|l>>4;if(r.push(p),c!==64){const g=l<<4&240|c>>2;if(r.push(g),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class g_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y_=function(n){const e=Jf(n);return $f.encodeByteArray(e,!0)},vs=function(n){return y_(n).replace(/\./g,"")},Zf=function(n){try{return $f.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function v_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w_=()=>v_().__FIREBASE_DEFAULTS__,T_=()=>{if(typeof process>"u"||typeof bu>"u")return;const n=bu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},E_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zf(n[1]);return e&&JSON.parse(e)},Us=()=>{try{return w_()||T_()||E_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ed=n=>{var e,t;return(t=(e=Us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},td=n=>{const e=ed(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nd=()=>{var n;return(n=Us())===null||n===void 0?void 0:n.config},rd=n=>{var e;return(e=Us())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class b_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function id(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vs(JSON.stringify(t)),vs(JSON.stringify(o)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function A_(){var n;const e=(n=Us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function R_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P_(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function S_(){return!A_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N_(){try{return typeof indexedDB=="object"}catch{return!1}}function D_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const V_="FirebaseError";class xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=V_,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?O_(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xt(i,l,r)}}function O_(n,e){return n.replace(L_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const L_=/\{\$([^}]+)}/g;function M_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Er(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Iu(s)&&Iu(o)){if(!Er(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Iu(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U_(n,e){const t=new F_(n,e);return t.subscribe.bind(t)}class F_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");B_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Co),i.error===void 0&&(i.error=Co),i.complete===void 0&&(i.complete=Co);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Co(){}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}class En{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class j_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new b_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z_(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(n){return n===Ln?void 0:n}function z_(n){return n.instantiationMode==="EAGER"}/**
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
 */class H_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const W_={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},G_=Se.INFO,K_={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Q_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=K_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=G_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const x_=(n,e)=>e.some(t=>n instanceof t);let Au,Ru;function X_(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y_(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,Ko=new WeakMap,od=new WeakMap,Po=new WeakMap,Ta=new WeakMap;function J_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(yn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sd.set(t,n)}).catch(()=>{}),Ta.set(e,n),e}function $_(n){if(Ko.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ko.set(n,e)}let Qo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||od.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Z_(n){Qo=n(Qo)}function eg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(So(this),e,...t);return od.set(r,e.sort?e.sort():[e]),yn(r)}:Y_().includes(n)?function(...e){return n.apply(So(this),e),yn(sd.get(this))}:function(...e){return yn(n.apply(So(this),e))}}function tg(n){return typeof n=="function"?eg(n):(n instanceof IDBTransaction&&$_(n),x_(n,X_())?new Proxy(n,Qo):n)}function yn(n){if(n instanceof IDBRequest)return J_(n);if(Po.has(n))return Po.get(n);const e=tg(n);return e!==n&&(Po.set(n,e),Ta.set(e,n)),e}const So=n=>Ta.get(n);function ng(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yn(o.result),u.oldVersion,u.newVersion,yn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rg=["get","getKey","getAll","getAllKeys","count"],ig=["put","add","delete","clear"],No=new Map;function ku(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ig.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rg.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&u.done]))[0]};return No.set(e,s),s}Z_(n=>({...n,get:(e,t,r)=>ku(e,t)||n.get(e,t,r),has:(e,t)=>!!ku(e,t)||n.has(e,t)}));/**
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
 */class sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(og(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function og(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xo="@firebase/app",Cu="0.10.13";/**
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
 */const rn=new wa("@firebase/app"),ag="@firebase/app-compat",lg="@firebase/analytics-compat",ug="@firebase/analytics",cg="@firebase/app-check-compat",hg="@firebase/app-check",fg="@firebase/auth",dg="@firebase/auth-compat",pg="@firebase/database",mg="@firebase/data-connect",_g="@firebase/database-compat",gg="@firebase/functions",yg="@firebase/functions-compat",vg="@firebase/installations",wg="@firebase/installations-compat",Tg="@firebase/messaging",Eg="@firebase/messaging-compat",bg="@firebase/performance",Ig="@firebase/performance-compat",Ag="@firebase/remote-config",Rg="@firebase/remote-config-compat",kg="@firebase/storage",Cg="@firebase/storage-compat",Pg="@firebase/firestore",Sg="@firebase/vertexai-preview",Ng="@firebase/firestore-compat",Dg="firebase",Vg="10.14.1";/**
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
 */const Xo="[DEFAULT]",Og={[xo]:"fire-core",[ag]:"fire-core-compat",[ug]:"fire-analytics",[lg]:"fire-analytics-compat",[hg]:"fire-app-check",[cg]:"fire-app-check-compat",[fg]:"fire-auth",[dg]:"fire-auth-compat",[pg]:"fire-rtdb",[mg]:"fire-data-connect",[_g]:"fire-rtdb-compat",[gg]:"fire-fn",[yg]:"fire-fn-compat",[vg]:"fire-iid",[wg]:"fire-iid-compat",[Tg]:"fire-fcm",[Eg]:"fire-fcm-compat",[bg]:"fire-perf",[Ig]:"fire-perf-compat",[Ag]:"fire-rc",[Rg]:"fire-rc-compat",[kg]:"fire-gcs",[Cg]:"fire-gcs-compat",[Pg]:"fire-fst",[Ng]:"fire-fst-compat",[Sg]:"fire-vertex","fire-js":"fire-js",[Dg]:"fire-js-all"};/**
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
 */const ws=new Map,Lg=new Map,Yo=new Map;function Pu(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(Yo.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Yo.set(e,n);for(const t of ws.values())Pu(t,n);for(const t of Lg.values())Pu(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $t(n){return n.settings!==void 0}/**
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
 */const Mg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new ki("app","Firebase",Mg);/**
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
 */class Ug{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const $n=Vg;function ad(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(t||(t=nd()),!t)throw vn.create("no-options");const s=ws.get(i);if(s){if(Er(t,s.options)&&Er(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new H_(i);for(const u of Yo.values())o.addComponent(u);const l=new Ug(t,r,o);return ws.set(i,l),l}function Ea(n=Xo){const e=ws.get(n);if(!e&&n===Xo&&nd())return ad();if(!e)throw vn.create("no-app",{appName:n});return e}function jt(n,e,t){var r;let i=(r=Og[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(l.join(" "));return}Wn(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fg="firebase-heartbeat-database",Bg=1,mi="firebase-heartbeat-store";let Do=null;function ld(){return Do||(Do=ng(Fg,Bg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mi)}catch(t){console.warn(t)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),Do}async function jg(n){try{const t=(await ld()).transaction(mi),r=await t.objectStore(mi).get(ud(n));return await t.done,r}catch(e){if(e instanceof xt)rn.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(t.message)}}}async function Su(n,e){try{const r=(await ld()).transaction(mi,"readwrite");await r.objectStore(mi).put(e,ud(n)),await r.done}catch(t){if(t instanceof xt)rn.warn(t.message);else{const r=vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rn.warn(r.message)}}}function ud(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qg=1024,zg=30*24*60*60*1e3;class Hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nu(),{heartbeatsToSend:r,unsentEntries:i}=Wg(this._heartbeatsCache.heartbeats),s=vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return rn.warn(t),""}}}function Nu(){return new Date().toISOString().substring(0,10)}function Wg(n,e=qg){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Du(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Du(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N_()?D_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(n){return vs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kg(n){Wn(new En("platform-logger",e=>new sg(e),"PRIVATE")),Wn(new En("heartbeat",e=>new Hg(e),"PRIVATE")),jt(xo,Cu,n),jt(xo,Cu,"esm2017"),jt("fire-js","")}Kg("");var Qg="firebase",xg="10.14.1";/**
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
 */jt(Qg,xg,"app");function ba(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function cd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xg=cd,hd=new ki("auth","Firebase",cd());/**
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
 */const Ts=new wa("@firebase/auth");function Yg(n,...e){Ts.logLevel<=Se.WARN&&Ts.warn(`Auth (${$n}): ${n}`,...e)}function us(n,...e){Ts.logLevel<=Se.ERROR&&Ts.error(`Auth (${$n}): ${n}`,...e)}/**
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
 */function Kt(n,...e){throw Aa(n,...e)}function Lt(n,...e){return Aa(n,...e)}function Ia(n,e,t){const r=Object.assign(Object.assign({},Xg()),{[e]:t});return new ki("auth","Firebase",r).create(e,{appName:n.name})}function qn(n){return Ia(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(n,"argument-error"),Ia(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Aa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hd.create(n,...e)}function we(n,e,...t){if(!n)throw Aa(e,...t)}function Zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw us(e),new Error(e)}function sn(n,e){n||Zt(e)}/**
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
 */function Jo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $g(){return Vu()==="http:"||Vu()==="https:"}function Vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Zg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||k_()||"connection"in navigator)?navigator.onLine:!0}function ey(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=I_()||C_()}get(){return Zg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ra(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ty={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ny=new Pi(3e4,6e4);function ka(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Mr(n,e,t,r,i={}){return dd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ci(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return R_()||(c.referrerPolicy="no-referrer"),fd.fetch()(pd(n,n.config.apiHost,t,l),c)})}async function dd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ty),e);try{const i=new iy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ts(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ts(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ts(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ia(n,h,c);Kt(n,h)}}catch(i){if(i instanceof xt)throw i;Kt(n,"network-request-failed",{message:String(i)})}}async function ry(n,e,t,r,i={}){const s=await Mr(n,e,t,r,i);return"mfaPendingCredential"in s&&Kt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function pd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ra(n.config,i):`${n.config.apiScheme}://${i}`}class iy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),ny.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ts(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Lt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function sy(n,e){return Mr(n,"POST","/v1/accounts:delete",e)}async function md(n,e){return Mr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oy(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),i=Ca(r);we(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ai(Vo(i.auth_time)),issuedAtTime:ai(Vo(i.iat)),expirationTime:ai(Vo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vo(n){return Number(n)*1e3}function Ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zf(t);return i?JSON.parse(i):(us("Failed to decode base64 JWT payload"),null)}catch(i){return us("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ou(n){const e=Ca(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xt&&ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ly{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $o{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(n){var e;const t=n.auth,r=await n.getIdToken(),i=await _i(n,md(t,{idToken:r}));we(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_d(s.providerUserInfo):[],l=cy(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $o(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function uy(n){const e=Ye(n);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _d(n){return n.map(e=>{var{providerId:t}=e,r=ba(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hy(n,e){const t=await dd(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=pd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fd.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fy(n,e){return Mr(n,"POST","/v2/accounts:revokeToken",ka(n,e))}/**
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
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ou(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Ou(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await hy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new gr;return r&&(we(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(we(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(we(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function hn(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ly(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $o(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oy(this,e)}reload(){return uy(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await _i(this,sy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,u,c,h;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(l=t.tenantId)!==null&&l!==void 0?l:void 0,E=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(c=t.createdAt)!==null&&c!==void 0?c:void 0,O=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:V,emailVerified:M,isAnonymous:U,providerData:F,stsTokenManager:A}=t;we(V&&A,e,"internal-error");const b=gr.fromJSON(this.name,A);we(typeof V=="string",e,"internal-error"),hn(d,e.name),hn(p,e.name),we(typeof M=="boolean",e,"internal-error"),we(typeof U=="boolean",e,"internal-error"),hn(g,e.name),hn(v,e.name),hn(I,e.name),hn(E,e.name),hn(D,e.name),hn(O,e.name);const R=new en({uid:V,auth:e,email:p,emailVerified:M,displayName:d,isAnonymous:U,photoURL:v,phoneNumber:g,tenantId:I,stsTokenManager:b,createdAt:D,lastLoginAt:O});return F&&Array.isArray(F)&&(R.providerData=F.map(k=>Object.assign({},k))),E&&(R._redirectEventId=E),R}static async _fromIdTokenResponse(e,t,r=!1){const i=new gr;i.updateFromServerResponse(t);const s=new en({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Es(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];we(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_d(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new gr;l.updateFromIdToken(r);const u=new en({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $o(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Lu=new Map;function tn(n){sn(n instanceof Function,"Expected a class definition");let e=Lu.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Lu.set(n,e),e)}/**
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
 */class gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gd.type="NONE";const Mu=gd;/**
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
 */function cs(n,e,t){return`firebase:${n}:${e}:${t}`}class yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cs(this.userKey,i.apiKey,s),this.fullPersistenceKey=cs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new yr(tn(Mu),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tn(Mu);const o=cs(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const h=await c._get(o);if(h){const d=en._fromJSON(e,h);c!==s&&(l=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yr(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new yr(s,e,r))}}/**
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
 */function Uu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Td(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Id(e))return"Webos";if(vd(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(Ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yd(n=wt()){return/firefox\//i.test(n)}function vd(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(n=wt()){return/crios\//i.test(n)}function Td(n=wt()){return/iemobile/i.test(n)}function Ed(n=wt()){return/android/i.test(n)}function bd(n=wt()){return/blackberry/i.test(n)}function Id(n=wt()){return/webos/i.test(n)}function Pa(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dy(n=wt()){var e;return Pa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function py(){return P_()&&document.documentMode===10}function Ad(n=wt()){return Pa(n)||Ed(n)||Id(n)||bd(n)||/windows phone/i.test(n)||Td(n)}/**
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
 */function Rd(n,e=[]){let t;switch(n){case"Browser":t=Uu(wt());break;case"Worker":t=`${Uu(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${r}`}/**
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
 */class my{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _y(n,e={}){return Mr(n,"GET","/v2/passwordPolicy",ka(n,e))}/**
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
 */const gy=6;class yy{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:gy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fu(this),this.idTokenSubscription=new Fu(this),this.beforeStateQueue=new my(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await md(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(qn(this));const t=e?Ye(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _y(this),t=new yy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tn(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Yg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bs(n){return Ye(n)}class Fu{constructor(e){this.auth=e,this.observer=null,this.addObserver=U_(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wy(n){Sa=n}function Ty(n){return Sa.loadJS(n)}function Ey(){return Sa.gapiScript}function by(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Iy(n,e){const t=Fs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Er(s,e??{}))return i;Kt(i,"already-initialized")}return t.initialize({options:e})}function Ay(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ry(n,e,t){const r=Bs(n);we(r._canInitEmulator,r,"emulator-config-failed"),we(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kd(e),{host:o,port:l}=ky(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Cy()}function kd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ky(n){const e=kd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bu(o)}}}function Bu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,t){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
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
 */async function vr(n,e){return ry(n,"POST","/v1/accounts:signInWithIdp",ka(n,e))}/**
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
 */const Py="http://localhost";class Gn extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ba(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:Py,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
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
 */class Na{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Na{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends Si{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class Jt extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
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
 */class dn extends Si{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class pn extends Si{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await en._fromIdTokenResponse(e,r,i),o=ju(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ju(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ju(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bs extends xt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new bs(e,t,r,i)}}function Pd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(n,s,e,r):s})}async function Sy(n,e,t=!1){const r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}/**
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
 */async function Ny(n,e,t=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await _i(n,Pd(r,i,e,n),t);we(s.idToken,r,"internal-error");const o=Ca(s.idToken);we(o,r,"internal-error");const{sub:l}=o;return we(n.uid===l,r,"user-mismatch"),br._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function Dy(n,e,t=!1){if($t(n.app))return Promise.reject(qn(n));const r="signIn",i=await Pd(n,r,e),s=await br._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Vy(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function Oy(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function Ly(n,e,t,r){return Ye(n).onAuthStateChanged(e,t,r)}function My(n){return Ye(n).signOut()}const Is="__sak";/**
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
 */class Sd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Uy=1e3,Fy=10;class Nd extends Sd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ad(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);py()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fy):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nd.type="LOCAL";const By=Nd;/**
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
 */class Dd extends Sd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dd.type="SESSION";const Vd=Dd;/**
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
 */function jy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await jy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
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
 */function Da(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class qy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Da("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function zy(n){qt().location.href=n}/**
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
 */function Od(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function Hy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gy(){return Od()?self:null}/**
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
 */const Ld="firebaseLocalStorageDb",Ky=1,As="firebaseLocalStorage",Md="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qs(n,e){return n.transaction([As],e?"readwrite":"readonly").objectStore(As)}function Qy(){const n=indexedDB.deleteDatabase(Ld);return new Ni(n).toPromise()}function Zo(){const n=indexedDB.open(Ld,Ky);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(As,{keyPath:Md})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(As)?e(r):(r.close(),await Qy(),e(await Zo()))})})}async function qu(n,e,t){const r=qs(n,!0).put({[Md]:e,value:t});return new Ni(r).toPromise()}async function xy(n,e){const t=qs(n,!1).get(e),r=await new Ni(t).toPromise();return r===void 0?null:r.value}function zu(n,e){const t=qs(n,!0).delete(e);return new Ni(t).toPromise()}const Xy=800,Yy=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Gy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hy(),!this.activeServiceWorker)return;this.sender=new qy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zo();return await qu(e,Is,"1"),await zu(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qs(i,!1).getAll();return new Ni(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const Jy=Ud;new Pi(3e4,6e4);/**
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
 */function Fd(n,e){return e?tn(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Va extends Cd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $y(n){return Dy(n.auth,new Va(n),n.bypassAuthState)}function Zy(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),Ny(t,new Va(n),n.bypassAuthState)}async function ev(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),Sy(t,new Va(n),n.bypassAuthState)}/**
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
 */class Bd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $y;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return Zy;default:Kt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tv=new Pi(2e3,1e4);async function nv(n,e,t){if($t(n.app))return Promise.reject(Lt(n,"operation-not-supported-in-this-environment"));const r=Bs(n);Jg(n,e,Na);const i=Fd(r,t);return new Un(r,"signInViaPopup",e,i).executeNotNull()}class Un extends Bd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}Un.currentPopupAction=null;/**
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
 */const rv="pendingRedirect",hs=new Map;class iv extends Bd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const r=await sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sv(n,e){const t=lv(e),r=av(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ov(n,e){hs.set(n._key(),e)}function av(n){return tn(n._redirectPersistence)}function lv(n){return cs(rv,n.config.apiKey,n.name)}async function uv(n,e,t=!1){if($t(n.app))return Promise.reject(qn(n));const r=Bs(n),i=Fd(r,e),o=await new iv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cv=10*60*1e3;class hv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hu(e))}saveEventToCache(e){this.cachedEventUids.add(Hu(e)),this.lastProcessedEventTime=Date.now()}}function Hu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(n);default:return!1}}/**
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
 */async function dv(n,e={}){return Mr(n,"GET","/v1/projects",e)}/**
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
 */const pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function _v(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dv(n);for(const t of e)try{if(gv(t))return}catch{}Kt(n,"unauthorized-domain")}function gv(n){const e=Jo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!mv.test(t))return!1;if(pv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yv=new Pi(3e4,6e4);function Wu(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vv(n){return new Promise((e,t)=>{var r,i,s;function o(){Wu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wu(),t(Lt(n,"network-request-failed"))},timeout:yv.get()})}if(!((i=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qt().gapi)===null||s===void 0)&&s.load)o();else{const l=by("iframefcb");return qt()[l]=()=>{gapi.load?o():t(Lt(n,"network-request-failed"))},Ty(`${Ey()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw fs=null,e})}let fs=null;function wv(n){return fs=fs||vv(n),fs}/**
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
 */const Tv=new Pi(5e3,15e3),Ev="__/auth/iframe",bv="emulator/auth/iframe",Iv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rv(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ra(e,bv):`https://${n.config.authDomain}/${Ev}`,r={apiKey:e.apiKey,appName:n.name,v:$n},i=Av.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ci(r).slice(1)}`}async function kv(n){const e=await wv(n),t=qt().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:Rv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(n,"network-request-failed"),l=qt().setTimeout(()=>{s(o)},Tv.get());function u(){qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Cv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pv=500,Sv=600,Nv="_blank",Dv="http://localhost";class Gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vv(n,e,t,r=Pv,i=Sv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Cv),{width:r.toString(),height:i.toString(),top:s,left:o}),c=wt().toLowerCase();t&&(l=wd(c)?Nv:t),yd(c)&&(e=e||Dv,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(dy(c)&&l!=="_self")return Ov(e||"",l),new Gu(null);const d=window.open(e||"",l,h);we(d,n,"popup-blocked");try{d.focus()}catch{}return new Gu(d)}function Ov(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Lv="__/auth/handler",Mv="emulator/auth/handler",Uv=encodeURIComponent("fac");async function Ku(n,e,t,r,i,s){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$n,eventId:i};if(e instanceof Na){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",M_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Si){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await n._getAppCheckToken(),c=u?`#${Uv}=${encodeURIComponent(u)}`:"";return`${Fv(n)}?${Ci(l).slice(1)}${c}`}function Fv({config:n}){return n.emulator?Ra(n,Mv):`https://${n.authDomain}/${Lv}`}/**
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
 */const Oo="webStorageSupport";class Bv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=uv,this._overrideRedirectResult=ov}async _openPopup(e,t,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ku(e,t,r,Jo(),i);return Vv(e,o,Da())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ku(e,t,r,Jo(),i);return zy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kv(e),r=new hv(e);return t.register("authEvent",i=>(we(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oo,{type:Oo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oo];o!==void 0&&t(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_v(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ad()||vd()||Pa()}}const jv=Bv;var Qu="@firebase/auth",xu="1.7.9";/**
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
 */class qv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hv(n){Wn(new En("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rd(n)},c=new vy(r,i,s,u);return Ay(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new En("auth-internal",e=>{const t=Bs(e.getProvider("auth").getImmediate());return(r=>new qv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Qu,xu,zv(n)),jt(Qu,xu,"esm2017")}/**
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
 */const Wv=5*60,Gv=rd("authIdTokenMaxAge")||Wv;let Xu=null;const Kv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gv)return;const i=t==null?void 0:t.token;Xu!==i&&(Xu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qv(n=Ea()){const e=Fs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iy(n,{popupRedirectResolver:jv,persistence:[Jy,By,Vd]}),r=rd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Kv(s.toString());Oy(t,o,()=>o(t.currentUser)),Vy(t,l=>o(l))}}const i=ed("auth");return i&&Ry(t,`http://${i}`),t}function xv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}wy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",xv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hv("Browser");var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,qd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,b){function R(){}R.prototype=b.prototype,A.D=b.prototype,A.prototype=new R,A.prototype.constructor=A,A.C=function(k,P,N){for(var S=Array(arguments.length-2),le=2;le<arguments.length;le++)S[le-2]=arguments[le];return b.prototype[P].apply(k,S)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,b,R){R||(R=0);var k=Array(16);if(typeof b=="string")for(var P=0;16>P;++P)k[P]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(P=0;16>P;++P)k[P]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=A.g[0],R=A.g[1],P=A.g[2];var N=A.g[3],S=b+(N^R&(P^N))+k[0]+3614090360&4294967295;b=R+(S<<7&4294967295|S>>>25),S=N+(P^b&(R^P))+k[1]+3905402710&4294967295,N=b+(S<<12&4294967295|S>>>20),S=P+(R^N&(b^R))+k[2]+606105819&4294967295,P=N+(S<<17&4294967295|S>>>15),S=R+(b^P&(N^b))+k[3]+3250441966&4294967295,R=P+(S<<22&4294967295|S>>>10),S=b+(N^R&(P^N))+k[4]+4118548399&4294967295,b=R+(S<<7&4294967295|S>>>25),S=N+(P^b&(R^P))+k[5]+1200080426&4294967295,N=b+(S<<12&4294967295|S>>>20),S=P+(R^N&(b^R))+k[6]+2821735955&4294967295,P=N+(S<<17&4294967295|S>>>15),S=R+(b^P&(N^b))+k[7]+4249261313&4294967295,R=P+(S<<22&4294967295|S>>>10),S=b+(N^R&(P^N))+k[8]+1770035416&4294967295,b=R+(S<<7&4294967295|S>>>25),S=N+(P^b&(R^P))+k[9]+2336552879&4294967295,N=b+(S<<12&4294967295|S>>>20),S=P+(R^N&(b^R))+k[10]+4294925233&4294967295,P=N+(S<<17&4294967295|S>>>15),S=R+(b^P&(N^b))+k[11]+2304563134&4294967295,R=P+(S<<22&4294967295|S>>>10),S=b+(N^R&(P^N))+k[12]+1804603682&4294967295,b=R+(S<<7&4294967295|S>>>25),S=N+(P^b&(R^P))+k[13]+4254626195&4294967295,N=b+(S<<12&4294967295|S>>>20),S=P+(R^N&(b^R))+k[14]+2792965006&4294967295,P=N+(S<<17&4294967295|S>>>15),S=R+(b^P&(N^b))+k[15]+1236535329&4294967295,R=P+(S<<22&4294967295|S>>>10),S=b+(P^N&(R^P))+k[1]+4129170786&4294967295,b=R+(S<<5&4294967295|S>>>27),S=N+(R^P&(b^R))+k[6]+3225465664&4294967295,N=b+(S<<9&4294967295|S>>>23),S=P+(b^R&(N^b))+k[11]+643717713&4294967295,P=N+(S<<14&4294967295|S>>>18),S=R+(N^b&(P^N))+k[0]+3921069994&4294967295,R=P+(S<<20&4294967295|S>>>12),S=b+(P^N&(R^P))+k[5]+3593408605&4294967295,b=R+(S<<5&4294967295|S>>>27),S=N+(R^P&(b^R))+k[10]+38016083&4294967295,N=b+(S<<9&4294967295|S>>>23),S=P+(b^R&(N^b))+k[15]+3634488961&4294967295,P=N+(S<<14&4294967295|S>>>18),S=R+(N^b&(P^N))+k[4]+3889429448&4294967295,R=P+(S<<20&4294967295|S>>>12),S=b+(P^N&(R^P))+k[9]+568446438&4294967295,b=R+(S<<5&4294967295|S>>>27),S=N+(R^P&(b^R))+k[14]+3275163606&4294967295,N=b+(S<<9&4294967295|S>>>23),S=P+(b^R&(N^b))+k[3]+4107603335&4294967295,P=N+(S<<14&4294967295|S>>>18),S=R+(N^b&(P^N))+k[8]+1163531501&4294967295,R=P+(S<<20&4294967295|S>>>12),S=b+(P^N&(R^P))+k[13]+2850285829&4294967295,b=R+(S<<5&4294967295|S>>>27),S=N+(R^P&(b^R))+k[2]+4243563512&4294967295,N=b+(S<<9&4294967295|S>>>23),S=P+(b^R&(N^b))+k[7]+1735328473&4294967295,P=N+(S<<14&4294967295|S>>>18),S=R+(N^b&(P^N))+k[12]+2368359562&4294967295,R=P+(S<<20&4294967295|S>>>12),S=b+(R^P^N)+k[5]+4294588738&4294967295,b=R+(S<<4&4294967295|S>>>28),S=N+(b^R^P)+k[8]+2272392833&4294967295,N=b+(S<<11&4294967295|S>>>21),S=P+(N^b^R)+k[11]+1839030562&4294967295,P=N+(S<<16&4294967295|S>>>16),S=R+(P^N^b)+k[14]+4259657740&4294967295,R=P+(S<<23&4294967295|S>>>9),S=b+(R^P^N)+k[1]+2763975236&4294967295,b=R+(S<<4&4294967295|S>>>28),S=N+(b^R^P)+k[4]+1272893353&4294967295,N=b+(S<<11&4294967295|S>>>21),S=P+(N^b^R)+k[7]+4139469664&4294967295,P=N+(S<<16&4294967295|S>>>16),S=R+(P^N^b)+k[10]+3200236656&4294967295,R=P+(S<<23&4294967295|S>>>9),S=b+(R^P^N)+k[13]+681279174&4294967295,b=R+(S<<4&4294967295|S>>>28),S=N+(b^R^P)+k[0]+3936430074&4294967295,N=b+(S<<11&4294967295|S>>>21),S=P+(N^b^R)+k[3]+3572445317&4294967295,P=N+(S<<16&4294967295|S>>>16),S=R+(P^N^b)+k[6]+76029189&4294967295,R=P+(S<<23&4294967295|S>>>9),S=b+(R^P^N)+k[9]+3654602809&4294967295,b=R+(S<<4&4294967295|S>>>28),S=N+(b^R^P)+k[12]+3873151461&4294967295,N=b+(S<<11&4294967295|S>>>21),S=P+(N^b^R)+k[15]+530742520&4294967295,P=N+(S<<16&4294967295|S>>>16),S=R+(P^N^b)+k[2]+3299628645&4294967295,R=P+(S<<23&4294967295|S>>>9),S=b+(P^(R|~N))+k[0]+4096336452&4294967295,b=R+(S<<6&4294967295|S>>>26),S=N+(R^(b|~P))+k[7]+1126891415&4294967295,N=b+(S<<10&4294967295|S>>>22),S=P+(b^(N|~R))+k[14]+2878612391&4294967295,P=N+(S<<15&4294967295|S>>>17),S=R+(N^(P|~b))+k[5]+4237533241&4294967295,R=P+(S<<21&4294967295|S>>>11),S=b+(P^(R|~N))+k[12]+1700485571&4294967295,b=R+(S<<6&4294967295|S>>>26),S=N+(R^(b|~P))+k[3]+2399980690&4294967295,N=b+(S<<10&4294967295|S>>>22),S=P+(b^(N|~R))+k[10]+4293915773&4294967295,P=N+(S<<15&4294967295|S>>>17),S=R+(N^(P|~b))+k[1]+2240044497&4294967295,R=P+(S<<21&4294967295|S>>>11),S=b+(P^(R|~N))+k[8]+1873313359&4294967295,b=R+(S<<6&4294967295|S>>>26),S=N+(R^(b|~P))+k[15]+4264355552&4294967295,N=b+(S<<10&4294967295|S>>>22),S=P+(b^(N|~R))+k[6]+2734768916&4294967295,P=N+(S<<15&4294967295|S>>>17),S=R+(N^(P|~b))+k[13]+1309151649&4294967295,R=P+(S<<21&4294967295|S>>>11),S=b+(P^(R|~N))+k[4]+4149444226&4294967295,b=R+(S<<6&4294967295|S>>>26),S=N+(R^(b|~P))+k[11]+3174756917&4294967295,N=b+(S<<10&4294967295|S>>>22),S=P+(b^(N|~R))+k[2]+718787259&4294967295,P=N+(S<<15&4294967295|S>>>17),S=R+(N^(P|~b))+k[9]+3951481745&4294967295,A.g[0]=A.g[0]+b&4294967295,A.g[1]=A.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+N&4294967295}r.prototype.u=function(A,b){b===void 0&&(b=A.length);for(var R=b-this.blockSize,k=this.B,P=this.h,N=0;N<b;){if(P==0)for(;N<=R;)i(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<b;)if(k[P++]=A.charCodeAt(N++),P==this.blockSize){i(this,k),P=0;break}}else for(;N<b;)if(k[P++]=A[N++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=b},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var b=1;b<A.length-8;++b)A[b]=0;var R=8*this.o;for(b=A.length-8;b<A.length;++b)A[b]=R&255,R/=256;for(this.u(A),A=Array(16),b=R=0;4>b;++b)for(var k=0;32>k;k+=8)A[R++]=this.g[b]>>>k&255;return A};function s(A,b){var R=l;return Object.prototype.hasOwnProperty.call(R,A)?R[A]:R[A]=b(A)}function o(A,b){this.h=b;for(var R=[],k=!0,P=A.length-1;0<=P;P--){var N=A[P]|0;k&&N==b||(R[P]=N,k=!1)}this.g=R}var l={};function u(A){return-128<=A&&128>A?s(A,function(b){return new o([b|0],0>b?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return E(c(-A));for(var b=[],R=1,k=0;A>=R;k++)b[k]=A/R|0,R*=4294967296;return new o(b,0)}function h(A,b){if(A.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A.charAt(0)=="-")return E(h(A.substring(1),b));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=c(Math.pow(b,8)),k=d,P=0;P<A.length;P+=8){var N=Math.min(8,A.length-P),S=parseInt(A.substring(P,P+N),b);8>N?(N=c(Math.pow(b,N)),k=k.j(N).add(c(S))):(k=k.j(R),k=k.add(c(S)))}return k}var d=u(0),p=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(I(this))return-E(this).m();for(var A=0,b=1,R=0;R<this.g.length;R++){var k=this.i(R);A+=(0<=k?k:4294967296+k)*b,b*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(v(this))return"0";if(I(this))return"-"+E(this).toString(A);for(var b=c(Math.pow(A,6)),R=this,k="";;){var P=M(R,b).g;R=D(R,P.j(b));var N=((0<R.g.length?R.g[0]:R.h)>>>0).toString(A);if(R=P,v(R))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function v(A){if(A.h!=0)return!1;for(var b=0;b<A.g.length;b++)if(A.g[b]!=0)return!1;return!0}function I(A){return A.h==-1}n.l=function(A){return A=D(this,A),I(A)?-1:v(A)?0:1};function E(A){for(var b=A.g.length,R=[],k=0;k<b;k++)R[k]=~A.g[k];return new o(R,~A.h).add(p)}n.abs=function(){return I(this)?E(this):this},n.add=function(A){for(var b=Math.max(this.g.length,A.g.length),R=[],k=0,P=0;P<=b;P++){var N=k+(this.i(P)&65535)+(A.i(P)&65535),S=(N>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);k=S>>>16,N&=65535,S&=65535,R[P]=S<<16|N}return new o(R,R[R.length-1]&-2147483648?-1:0)};function D(A,b){return A.add(E(b))}n.j=function(A){if(v(this)||v(A))return d;if(I(this))return I(A)?E(this).j(E(A)):E(E(this).j(A));if(I(A))return E(this.j(E(A)));if(0>this.l(g)&&0>A.l(g))return c(this.m()*A.m());for(var b=this.g.length+A.g.length,R=[],k=0;k<2*b;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<A.g.length;P++){var N=this.i(k)>>>16,S=this.i(k)&65535,le=A.i(P)>>>16,ne=A.i(P)&65535;R[2*k+2*P]+=S*ne,O(R,2*k+2*P),R[2*k+2*P+1]+=N*ne,O(R,2*k+2*P+1),R[2*k+2*P+1]+=S*le,O(R,2*k+2*P+1),R[2*k+2*P+2]+=N*le,O(R,2*k+2*P+2)}for(k=0;k<b;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=b;k<2*b;k++)R[k]=0;return new o(R,0)};function O(A,b){for(;(A[b]&65535)!=A[b];)A[b+1]+=A[b]>>>16,A[b]&=65535,b++}function V(A,b){this.g=A,this.h=b}function M(A,b){if(v(b))throw Error("division by zero");if(v(A))return new V(d,d);if(I(A))return b=M(E(A),b),new V(E(b.g),E(b.h));if(I(b))return b=M(A,E(b)),new V(E(b.g),b.h);if(30<A.g.length){if(I(A)||I(b))throw Error("slowDivide_ only works with positive integers.");for(var R=p,k=b;0>=k.l(A);)R=U(R),k=U(k);var P=F(R,1),N=F(k,1);for(k=F(k,2),R=F(R,2);!v(k);){var S=N.add(k);0>=S.l(A)&&(P=P.add(R),N=S),k=F(k,1),R=F(R,1)}return b=D(A,P.j(b)),new V(P,b)}for(P=d;0<=A.l(b);){for(R=Math.max(1,Math.floor(A.m()/b.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(R),S=N.j(b);I(S)||0<S.l(A);)R-=k,N=c(R),S=N.j(b);v(N)&&(N=p),P=P.add(N),A=D(A,S)}return new V(P,A)}n.A=function(A){return M(this,A).h},n.and=function(A){for(var b=Math.max(this.g.length,A.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)&A.i(k);return new o(R,this.h&A.h)},n.or=function(A){for(var b=Math.max(this.g.length,A.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)|A.i(k);return new o(R,this.h|A.h)},n.xor=function(A){for(var b=Math.max(this.g.length,A.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)^A.i(k);return new o(R,this.h^A.h)};function U(A){for(var b=A.g.length+1,R=[],k=0;k<b;k++)R[k]=A.i(k)<<1|A.i(k-1)>>>31;return new o(R,A.h)}function F(A,b){var R=b>>5;b%=32;for(var k=A.g.length-R,P=[],N=0;N<k;N++)P[N]=0<b?A.i(N+R)>>>b|A.i(N+R+1)<<32-b:A.i(N+R);return new o(P,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,zn=o}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zd,ni,Hd,ds,ea,Wd,Gd,Kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ns=="object"&&ns];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,f){if(f)e:{var m=r;a=a.split(".");for(var C=0;C<a.length-1;C++){var B=a[C];if(!(B in m))break e;m=m[B]}a=a[a.length-1],C=m[a],f=f(C),f!=C&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var m=0,C=!1,B={next:function(){if(!C&&m<a.length){var z=m++;return{value:f(z,a[z]),done:!1}}return C=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}i("Array.prototype.values",function(a){return a||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,m){return a.call.apply(a.bind,arguments)}function d(a,f,m){if(!a)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,C),a.apply(f,B)}}return function(){return a.apply(f,arguments)}}function p(a,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var C=m.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function v(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(C,B,z){for(var J=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)J[Ke-2]=arguments[Ke];return f.prototype[B].apply(C,J)}}function I(a){const f=a.length;if(0<f){const m=Array(f);for(let C=0;C<f;C++)m[C]=a[C];return m}return[]}function E(a,f){for(let m=1;m<arguments.length;m++){const C=arguments[m];if(u(C)){const B=a.length||0,z=C.length||0;a.length=B+z;for(let J=0;J<z;J++)a[B+J]=C[J]}else a.push(C)}}class D{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var U=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function F(a,f,m){for(const C in a)f.call(m,a[C],C,a)}function A(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function b(a){const f={};for(const m in a)f[m]=a[m];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,f){let m,C;for(let B=1;B<arguments.length;B++){C=arguments[B];for(m in C)a[m]=C[m];for(let z=0;z<R.length;z++)m=R[z],Object.prototype.hasOwnProperty.call(C,m)&&(a[m]=C[m])}}function P(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function N(a){l.setTimeout(()=>{throw a},0)}function S(){var a=oe;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class le{constructor(){this.h=this.g=null}add(f,m){const C=ne.get();C.set(f,m),this.h?this.h.next=C:this.g=C,this.h=C}}var ne=new D(()=>new he,a=>a.reset());class he{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let X,me=!1,oe=new le,Ue=()=>{const a=l.Promise.resolve(void 0);X=()=>{a.then(je)}};var je=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(m){N(m)}var f=ne;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}me=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,f),l.removeEventListener("test",m,f)}catch{}return a}();function Fe(a,f){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(U){e:{try{M(f.nodeName);var B=!0;break e}catch{}B=!1}B||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ge[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Fe.aa.h.call(this)}}v(Fe,ge);var Ge={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ye(a,f,m,C,B){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!C,this.ha=B,this.key=++Me,this.da=this.fa=!1}function ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function te(a){this.src=a,this.g={},this.h=0}te.prototype.add=function(a,f,m,C,B){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var J=_e(a,f,C,B);return-1<J?(f=a[J],m||(f.fa=!1)):(f=new ye(f,this.src,z,!!C,B),f.fa=m,a.push(f)),f};function K(a,f){var m=f.type;if(m in a.g){var C=a.g[m],B=Array.prototype.indexOf.call(C,f,void 0),z;(z=0<=B)&&Array.prototype.splice.call(C,B,1),z&&(ce(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function _e(a,f,m,C){for(var B=0;B<a.length;++B){var z=a[B];if(!z.da&&z.listener==f&&z.capture==!!m&&z.ha==C)return B}return-1}var Y="closure_lm_"+(1e6*Math.random()|0),re={};function $(a,f,m,C,B){if(Array.isArray(f)){for(var z=0;z<f.length;z++)$(a,f[z],m,C,B);return null}return m=Ve(m),a&&a[ke]?a.K(f,m,c(C)?!!C.capture:!1,B):ve(a,f,m,!1,C,B)}function ve(a,f,m,C,B,z){if(!f)throw Error("Invalid event type");var J=c(B)?!!B.capture:!!B,Ke=H(a);if(Ke||(a[Y]=Ke=new te(a)),m=Ke.add(f,m,C,J,z),m.proxy)return m;if(C=Pn(),m.proxy=C,C.src=a,C.listener=m,a.addEventListener)We||(B=J),B===void 0&&(B=!1),a.addEventListener(f.toString(),C,B);else if(a.attachEvent)a.attachEvent(qe(f.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Pn(){function a(m){return f.call(a.src,a.listener,m)}const f=Q;return a}function ie(a,f,m,C,B){if(Array.isArray(f))for(var z=0;z<f.length;z++)ie(a,f[z],m,C,B);else C=c(C)?!!C.capture:!!C,m=Ve(m),a&&a[ke]?(a=a.i,f=String(f).toString(),f in a.g&&(z=a.g[f],m=_e(z,m,C,B),-1<m&&(ce(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete a.g[f],a.h--)))):a&&(a=H(a))&&(f=a.g[f.toString()],a=-1,f&&(a=_e(f,m,C,B)),(m=-1<a?f[a]:null)&&pe(m))}function pe(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[ke])K(f.i,a);else{var m=a.type,C=a.proxy;f.removeEventListener?f.removeEventListener(m,C,a.capture):f.detachEvent?f.detachEvent(qe(m),C):f.addListener&&f.removeListener&&f.removeListener(C),(m=H(f))?(K(m,a),m.h==0&&(m.src=null,f[Y]=null)):ce(a)}}}function qe(a){return a in re?re[a]:re[a]="on"+a}function Q(a,f){if(a.da)a=!0;else{f=new Fe(f,this);var m=a.listener,C=a.ha||a.src;a.fa&&pe(a),a=m.call(C,f)}return a}function H(a){return a=a[Y],a instanceof te?a:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ve(a){return typeof a=="function"?a:(a[de]||(a[de]=function(f){return a.handleEvent(f)}),a[de])}function Ee(){Pe.call(this),this.i=new te(this),this.M=this,this.F=null}v(Ee,Pe),Ee.prototype[ke]=!0,Ee.prototype.removeEventListener=function(a,f,m,C){ie(this,a,f,m,C)};function ze(a,f){var m,C=a.F;if(C)for(m=[];C;C=C.F)m.push(C);if(a=a.M,C=f.type||f,typeof f=="string")f=new ge(f,a);else if(f instanceof ge)f.target=f.target||a;else{var B=f;f=new ge(C,a),k(f,B)}if(B=!0,m)for(var z=m.length-1;0<=z;z--){var J=f.g=m[z];B=Ft(J,C,!0,f)&&B}if(J=f.g=a,B=Ft(J,C,!0,f)&&B,B=Ft(J,C,!1,f)&&B,m)for(z=0;z<m.length;z++)J=f.g=m[z],B=Ft(J,C,!1,f)&&B}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],C=0;C<m.length;C++)ce(m[C]);delete a.g[f],a.h--}}this.F=null},Ee.prototype.K=function(a,f,m,C){return this.i.add(String(a),f,!1,m,C)},Ee.prototype.L=function(a,f,m,C){return this.i.add(String(a),f,!0,m,C)};function Ft(a,f,m,C){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var B=!0,z=0;z<f.length;++z){var J=f[z];if(J&&!J.da&&J.capture==m){var Ke=J.listener,ct=J.ha||J.src;J.fa&&K(a.i,J),B=Ke.call(ct,C)!==!1&&B}}return B&&!C.defaultPrevented}function ut(a,f,m){if(typeof a=="function")m&&(a=p(a,m));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function rr(a){a.g=ut(()=>{a.g=null,a.i&&(a.i=!1,rr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class lo extends Pe{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:rr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(a){Pe.call(this),this.h=a,this.g={}}v(Sn,Pe);var Fi=[];function Rl(a){F(a.g,function(f,m){this.g.hasOwnProperty(m)&&pe(f)},a),a.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),Rl(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uo=l.JSON.stringify,Vm=l.JSON.parse,Om=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function co(){}co.prototype.h=null;function kl(a){return a.h||(a.h=a.i())}function Cl(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ho(){ge.call(this,"d")}v(ho,ge);function fo(){ge.call(this,"c")}v(fo,ge);var Nn={},Pl=null;function Bi(){return Pl=Pl||new Ee}Nn.La="serverreachability";function Sl(a){ge.call(this,Nn.La,a)}v(Sl,ge);function Hr(a){const f=Bi();ze(f,new Sl(f))}Nn.STAT_EVENT="statevent";function Nl(a,f){ge.call(this,Nn.STAT_EVENT,a),this.stat=f}v(Nl,ge);function Tt(a){const f=Bi();ze(f,new Nl(f,a))}Nn.Ma="timingevent";function Dl(a,f){ge.call(this,Nn.Ma,a),this.size=f}v(Dl,ge);function Wr(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function Lm(a,f,m,C,B,z){a.info(function(){if(a.g)if(z)for(var J="",Ke=z.split("&"),ct=0;ct<Ke.length;ct++){var Oe=Ke[ct].split("=");if(1<Oe.length){var mt=Oe[0];Oe=Oe[1];var _t=mt.split("_");J=2<=_t.length&&_t[1]=="type"?J+(mt+"="+Oe+"&"):J+(mt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+C+") [attempt "+B+"]: "+f+`
`+m+`
`+J})}function Mm(a,f,m,C,B,z,J){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+B+"]: "+f+`
`+m+`
`+z+" "+J})}function ir(a,f,m,C){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Fm(a,m)+(C?" "+C:"")})}function Um(a,f){a.info(function(){return"TIMEOUT: "+f})}Gr.prototype.info=function(){};function Fm(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var C=m[a];if(!(2>C.length)){var B=C[1];if(Array.isArray(B)&&!(1>B.length)){var z=B[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<B.length;J++)B[J]=""}}}}return uo(m)}catch{return f}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},po;function qi(){}v(qi,co),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},po=new qi;function ln(a,f,m,C){this.j=a,this.i=f,this.l=m,this.R=C||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var Ll={},mo={};function _o(a,f,m){a.L=1,a.v=Gi(Xt(f)),a.m=m,a.P=!0,Ml(a,null)}function Ml(a,f){a.F=Date.now(),zi(a),a.A=Xt(a.v);var m=a.A,C=a.R;Array.isArray(C)||(C=[String(C)]),Yl(m.i,"t",C),a.C=0,m=a.j.J,a.h=new Ol,a.g=pu(a.j,m?f:null,!a.m),0<a.O&&(a.M=new lo(p(a.Y,a,a.g),a.O)),f=a.U,m=a.g,C=a.ca;var B="readystatechange";Array.isArray(B)||(B&&(Fi[0]=B.toString()),B=Fi);for(var z=0;z<B.length;z++){var J=$(m,B[z],C||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Hr(),Lm(a.i,a.u,a.A,a.l,a.R,a.m)}ln.prototype.ca=function(a){a=a.target;const f=this.M;f&&Yt(a)==3?f.j():this.Y(a)},ln.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Yt(this.g);var f=this.g.Ba();const ar=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||ru(this.g)))){this.J||_t!=4||f==7||(f==8||0>=ar?Hr(3):Hr(2)),go(this);var m=this.g.Z();this.X=m;t:if(Ul(this)){var C=ru(this.g);a="";var B=C.length,z=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Kr(this);var J="";break t}this.h.i=new l.TextDecoder}for(f=0;f<B;f++)this.h.h=!0,a+=this.h.i.decode(C[f],{stream:!(z&&f==B-1)});C.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=m==200,Mm(this.i,this.u,this.A,this.l,this.R,_t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,ct=this.g;if((Ke=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ke)){var Oe=Ke;break t}}Oe=null}if(m=Oe)ir(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yo(this,m);else{this.o=!1,this.s=3,Tt(12),Dn(this),Kr(this);break e}}if(this.P){m=!0;let Vt;for(;!this.J&&this.C<J.length;)if(Vt=Bm(this,J),Vt==mo){_t==4&&(this.s=4,Tt(14),m=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Ll){this.s=4,Tt(15),ir(this.i,this.l,J,"[Invalid Chunk]"),m=!1;break}else ir(this.i,this.l,Vt,null),yo(this,Vt);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||J.length!=0||this.h.h||(this.s=1,Tt(16),m=!1),this.o=this.o&&m,!m)ir(this.i,this.l,J,"[Invalid Chunked Response]"),Dn(this),Kr(this);else if(0<J.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Io(mt),mt.M=!0,Tt(11))}}else ir(this.i,this.l,J,null),yo(this,J);_t==4&&Dn(this),this.o&&!this.J&&(_t==4?cu(this.j,this):(this.o=!1,zi(this)))}else n_(this.g),m==400&&0<J.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Dn(this),Kr(this)}}}catch{}finally{}};function Ul(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Bm(a,f){var m=a.C,C=f.indexOf(`
`,m);return C==-1?mo:(m=Number(f.substring(m,C)),isNaN(m)?Ll:(C+=1,C+m>f.length?mo:(f=f.slice(C,C+m),a.C=C+m,f)))}ln.prototype.cancel=function(){this.J=!0,Dn(this)};function zi(a){a.S=Date.now()+a.I,Fl(a,a.I)}function Fl(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Wr(p(a.ba,a),f)}function go(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Um(this.i,this.A),this.L!=2&&(Hr(),Tt(17)),Dn(this),this.s=2,Kr(this)):Fl(this,this.S-a)};function Kr(a){a.j.G==0||a.J||cu(a.j,a)}function Dn(a){go(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Rl(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function yo(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||vo(m.h,a))){if(!a.K&&vo(m.h,a)&&m.G==3){try{var C=m.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var B=C;if(B[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Ji(m),Xi(m);else break e;bo(m),Tt(18)}}else m.za=B[1],0<m.za-m.T&&37500>B[2]&&m.F&&m.v==0&&!m.C&&(m.C=Wr(p(m.Za,m),6e3));if(1>=ql(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else On(m,11)}else if((a.K||m.g==a)&&Ji(m),!O(f))for(B=m.Da.g.parse(f),f=0;f<B.length;f++){let Oe=B[f];if(m.T=Oe[0],Oe=Oe[1],m.G==2)if(Oe[0]=="c"){m.K=Oe[1],m.ia=Oe[2];const mt=Oe[3];mt!=null&&(m.la=mt,m.j.info("VER="+m.la));const _t=Oe[4];_t!=null&&(m.Aa=_t,m.j.info("SVER="+m.Aa));const ar=Oe[5];ar!=null&&typeof ar=="number"&&0<ar&&(C=1.5*ar,m.L=C,m.j.info("backChannelRequestTimeoutMs_="+C)),C=m;const Vt=a.g;if(Vt){const Zi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var z=C.h;z.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(wo(z,z.h),z.h=null))}if(C.D){const Ao=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(C.ya=Ao,Qe(C.I,C.D,Ao))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),C=m;var J=a;if(C.qa=du(C,C.J?C.ia:null,C.W),J.K){zl(C.h,J);var Ke=J,ct=C.L;ct&&(Ke.I=ct),Ke.B&&(go(Ke),zi(Ke)),C.g=J}else lu(C);0<m.i.length&&Yi(m)}else Oe[0]!="stop"&&Oe[0]!="close"||On(m,7);else m.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?On(m,7):Eo(m):Oe[0]!="noop"&&m.l&&m.l.ta(Oe),m.v=0)}}Hr(4)}catch{}}var jm=class{constructor(a,f){this.g=a,this.map=f}};function Bl(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ql(a){return a.h?1:a.g?a.g.size:0}function vo(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function wo(a,f){a.g?a.g.add(f):a.h=f}function zl(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Bl.prototype.cancel=function(){if(this.i=Hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return I(a.i)}function qm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],m=a.length,C=0;C<m;C++)f.push(a[C]);return f}f=[],m=0;for(C in a)f[m++]=a[C];return f}function zm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const C in a)f[m++]=C;return f}}}function Wl(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=zm(a),C=qm(a),B=C.length,z=0;z<B;z++)f.call(void 0,C[z],m&&m[z],a)}var Gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hm(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var C=a[m].indexOf("="),B=null;if(0<=C){var z=a[m].substring(0,C);B=a[m].substring(C+1)}else z=a[m];f(z,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Vn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vn){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var f=a.i,m=new Xr;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Kl(this,m),this.m=a.m}else a&&(f=String(a).match(Gl))?(this.h=!1,Hi(this,f[1]||"",!0),this.o=Qr(f[2]||""),this.g=Qr(f[3]||"",!0),Wi(this,f[4]),this.l=Qr(f[5]||"",!0),Kl(this,f[6]||"",!0),this.m=Qr(f[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}Vn.prototype.toString=function(){var a=[],f=this.j;f&&a.push(xr(f,Ql,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(xr(f,Ql,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(xr(m,m.charAt(0)=="/"?Km:Gm,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",xr(m,xm)),a.join("")};function Xt(a){return new Vn(a)}function Hi(a,f,m){a.j=m?Qr(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Kl(a,f,m){f instanceof Xr?(a.i=f,Xm(a.i,a.h)):(m||(f=xr(f,Qm)),a.i=new Xr(f,a.h))}function Qe(a,f,m){a.i.set(f,m)}function Gi(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qr(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xr(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Wm),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ql=/[#\/\?@]/g,Gm=/[#\?:]/g,Km=/[#\?]/g,Qm=/[#\?@]/g,xm=/#/g;function Xr(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function un(a){a.g||(a.g=new Map,a.h=0,a.i&&Hm(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=Xr.prototype,n.add=function(a,f){un(this),this.i=null,a=sr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function xl(a,f){un(a),f=sr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Xl(a,f){return un(a),f=sr(a,f),a.g.has(f)}n.forEach=function(a,f){un(this),this.g.forEach(function(m,C){m.forEach(function(B){a.call(f,B,C,this)},this)},this)},n.na=function(){un(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let C=0;C<f.length;C++){const B=a[C];for(let z=0;z<B.length;z++)m.push(f[C])}return m},n.V=function(a){un(this);let f=[];if(typeof a=="string")Xl(this,a)&&(f=f.concat(this.g.get(sr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},n.set=function(a,f){return un(this),this.i=null,a=sr(this,a),Xl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Yl(a,f,m){xl(a,f),0<m.length&&(a.i=null,a.g.set(sr(a,f),I(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var C=f[m];const z=encodeURIComponent(String(C)),J=this.V(C);for(C=0;C<J.length;C++){var B=z;J[C]!==""&&(B+="="+encodeURIComponent(String(J[C]))),a.push(B)}}return this.i=a.join("&")};function sr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Xm(a,f){f&&!a.j&&(un(a),a.i=null,a.g.forEach(function(m,C){var B=C.toLowerCase();C!=B&&(xl(this,C),Yl(this,B,m))},a)),a.j=f}function Ym(a,f){const m=new Gr;if(l.Image){const C=new Image;C.onload=g(cn,m,"TestLoadImage: loaded",!0,f,C),C.onerror=g(cn,m,"TestLoadImage: error",!1,f,C),C.onabort=g(cn,m,"TestLoadImage: abort",!1,f,C),C.ontimeout=g(cn,m,"TestLoadImage: timeout",!1,f,C),l.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else f(!1)}function Jm(a,f){const m=new Gr,C=new AbortController,B=setTimeout(()=>{C.abort(),cn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:C.signal}).then(z=>{clearTimeout(B),z.ok?cn(m,"TestPingServer: ok",!0,f):cn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(B),cn(m,"TestPingServer: error",!1,f)})}function cn(a,f,m,C,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),C(m)}catch{}}function $m(){this.g=new Om}function Zm(a,f,m){const C=m||"";try{Wl(a,function(B,z){let J=B;c(B)&&(J=uo(B)),f.push(C+z+"="+encodeURIComponent(J))})}catch(B){throw f.push(C+"type="+encodeURIComponent("_badmap")),B}}function Ki(a){this.l=a.Ub||null,this.j=a.eb||!1}v(Ki,co),Ki.prototype.g=function(){return new Qi(this.l,this.j)},Ki.prototype.i=function(a){return function(){return a}}({});function Qi(a,f){Ee.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Qi,Ee),n=Qi.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Jr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Yr(this):Jr(this),this.readyState==3&&Jl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Yr(this))},n.Qa=function(a){this.g&&(this.response=a,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Jr(a)}n.setRequestHeader=function(a,f){this.u.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function Jr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $l(a){let f="";return F(a,function(m,C){f+=C,f+=":",f+=m,f+=`\r
`}),f}function To(a,f,m){e:{for(C in m){var C=!1;break e}C=!0}C||(m=$l(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Qe(a,f,m))}function $e(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v($e,Ee);var e_=/^https?$/i,t_=["POST","PUT"];n=$e.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,f,m,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():po.g(),this.v=this.o?kl(this.o):kl(po),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(z){Zl(this,z);return}if(a=m||"",m=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var B in C)m.set(B,C[B]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const z of C.keys())m.set(z,C.get(z));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),B=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(t_,f,void 0))||C||B||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of m)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nu(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Zl(this,z)}};function Zl(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,eu(a),xi(a)}function eu(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ze(this,"complete"),ze(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),$e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tu(this):this.bb())},n.bb=function(){tu(this)};function tu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Yt(a)!=4||a.Z()!=2)){if(a.u&&Yt(a)==4)ut(a.Ea,0,a);else if(ze(a,"readystatechange"),Yt(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var C;if(C=J===0){var B=String(a.D).match(Gl)[1]||null;!B&&l.self&&l.self.location&&(B=l.self.location.protocol.slice(0,-1)),C=!e_.test(B?B.toLowerCase():"")}m=C}if(m)ze(a,"complete"),ze(a,"success");else{a.m=6;try{var z=2<Yt(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",eu(a)}}finally{xi(a)}}}}function xi(a,f){if(a.g){nu(a);const m=a.g,C=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ze(a,"ready");try{m.onreadystatechange=C}catch{}}}function nu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Yt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Vm(f)}};function ru(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function n_(a){const f={};a=(a.g&&2<=Yt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(O(a[C]))continue;var m=P(a[C]);const B=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=f[B]||[];f[B]=z,z.push(m)}A(f,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function iu(a){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$r("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$r("baseRetryDelayMs",5e3,a),this.cb=$r("retryDelaySeedMs",1e4,a),this.Wa=$r("forwardChannelMaxRetries",2,a),this.wa=$r("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bl(a&&a.concurrentRequestLimit),this.Da=new $m,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=iu.prototype,n.la=8,n.G=1,n.connect=function(a,f,m,C){Tt(0),this.W=a,this.H=f||{},m&&C!==void 0&&(this.H.OSID=m,this.H.OAID=C),this.F=this.X,this.I=du(this,null,this.W),Yi(this)};function Eo(a){if(su(a),a.G==3){var f=a.U++,m=Xt(a.I);if(Qe(m,"SID",a.K),Qe(m,"RID",f),Qe(m,"TYPE","terminate"),Zr(a,m),f=new ln(a,a.j,f),f.L=2,f.v=Gi(Xt(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=f.v,m=!0),m||(f.g=pu(f.j,null),f.g.ea(f.v)),f.F=Date.now(),zi(f)}fu(a)}function Xi(a){a.g&&(Io(a),a.g.cancel(),a.g=null)}function su(a){Xi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ji(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Yi(a){if(!jl(a.h)&&!a.s){a.s=!0;var f=a.Ga;X||Ue(),me||(X(),me=!0),oe.add(f,a),a.B=0}}function r_(a,f){return ql(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Wr(p(a.Ga,a,f),hu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const B=new ln(this,this.j,a);let z=this.o;if(this.S&&(z?(z=b(z),k(z,this.S)):z=this.S),this.m!==null||this.O||(B.H=z,z=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var C=this.i[m];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=au(this,B,f),m=Xt(this.I),Qe(m,"RID",a),Qe(m,"CVER",22),this.D&&Qe(m,"X-HTTP-Session-Id",this.D),Zr(this,m),z&&(this.O?f="headers="+encodeURIComponent(String($l(z)))+"&"+f:this.m&&To(m,this.m,z)),wo(this.h,B),this.Ua&&Qe(m,"TYPE","init"),this.P?(Qe(m,"$req",f),Qe(m,"SID","null"),B.T=!0,_o(B,m,null)):_o(B,m,f),this.G=2}}else this.G==3&&(a?ou(this,a):this.i.length==0||jl(this.h)||ou(this))};function ou(a,f){var m;f?m=f.l:m=a.U++;const C=Xt(a.I);Qe(C,"SID",a.K),Qe(C,"RID",m),Qe(C,"AID",a.T),Zr(a,C),a.m&&a.o&&To(C,a.m,a.o),m=new ln(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=au(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wo(a.h,m),_o(m,C,f)}function Zr(a,f){a.H&&F(a.H,function(m,C){Qe(f,C,m)}),a.l&&Wl({},function(m,C){Qe(f,C,m)})}function au(a,f,m){m=Math.min(a.i.length,m);var C=a.l?p(a.l.Na,a.l,a):null;e:{var B=a.i;let z=-1;for(;;){const J=["count="+m];z==-1?0<m?(z=B[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let Ke=!0;for(let ct=0;ct<m;ct++){let Oe=B[ct].g;const mt=B[ct].map;if(Oe-=z,0>Oe)z=Math.max(0,B[ct].g-100),Ke=!1;else try{Zm(mt,J,"req"+Oe+"_")}catch{C&&C(mt)}}if(Ke){C=J.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,C}function lu(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;X||Ue(),me||(X(),me=!0),oe.add(f,a),a.v=0}}function bo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Wr(p(a.Fa,a),hu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Wr(p(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Xi(this),uu(this))};function Io(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function uu(a){a.g=new ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Xt(a.qa);Qe(f,"RID","rpc"),Qe(f,"SID",a.K),Qe(f,"AID",a.T),Qe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(f,"TO",a.ja),Qe(f,"TYPE","xmlhttp"),Zr(a,f),a.m&&a.o&&To(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Gi(Xt(f)),m.m=null,m.P=!0,Ml(m,a)}n.Za=function(){this.C!=null&&(this.C=null,Xi(this),bo(this),Tt(19))};function Ji(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cu(a,f){var m=null;if(a.g==f){Ji(a),Io(a),a.g=null;var C=2}else if(vo(a.h,f))m=f.D,zl(a.h,f),C=1;else return;if(a.G!=0){if(f.o)if(C==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var B=a.B;C=Bi(),ze(C,new Dl(C,m)),Yi(a)}else lu(a);else if(B=f.s,B==3||B==0&&0<f.X||!(C==1&&r_(a,f)||C==2&&bo(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),B){case 1:On(a,5);break;case 4:On(a,10);break;case 3:On(a,6);break;default:On(a,2)}}}function hu(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function On(a,f){if(a.j.info("Error code "+f),f==2){var m=p(a.fb,a),C=a.Xa;const B=!C;C=new Vn(C||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Hi(C,"https"),Gi(C),B?Ym(C.toString(),m):Jm(C.toString(),m)}else Tt(2);a.G=0,a.l&&a.l.sa(f),fu(a),su(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function fu(a){if(a.G=0,a.ka=[],a.l){const f=Hl(a.h);(f.length!=0||a.i.length!=0)&&(E(a.ka,f),E(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function du(a,f,m){var C=m instanceof Vn?Xt(m):new Vn(m);if(C.g!="")f&&(C.g=f+"."+C.g),Wi(C,C.s);else{var B=l.location;C=B.protocol,f=f?f+"."+B.hostname:B.hostname,B=+B.port;var z=new Vn(null);C&&Hi(z,C),f&&(z.g=f),B&&Wi(z,B),m&&(z.l=m),C=z}return m=a.D,f=a.ya,m&&f&&Qe(C,m,f),Qe(C,"VER",a.la),Zr(a,C),C}function pu(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new $e(new Ki({eb:m})):new $e(a.pa),f.Ha(a.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mu(){}n=mu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $i(){}$i.prototype.g=function(a,f){return new kt(a,f)};function kt(a,f){Ee.call(this),this.g=new iu(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!O(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new or(this)}v(kt,Ee),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Eo(this.g)},kt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=uo(a),a=m);f.i.push(new jm(f.Ya++,a)),f.G==3&&Yi(f)},kt.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,kt.aa.N.call(this)};function _u(a){ho.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}v(_u,ho);function gu(){fo.call(this),this.status=1}v(gu,fo);function or(a){this.g=a}v(or,mu),or.prototype.ua=function(){ze(this.g,"a")},or.prototype.ta=function(a){ze(this.g,new _u(a))},or.prototype.sa=function(a){ze(this.g,new gu)},or.prototype.ra=function(){ze(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Kd=function(){return new $i},Gd=function(){return Bi()},Wd=Nn,ea={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,ds=ji,Vl.COMPLETE="complete",Hd=Vl,Cl.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,ni=Cl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,zd=$e}).apply(typeof ns<"u"?ns:typeof self<"u"?self:typeof window<"u"?window:{});const Ju="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Ur="10.14.0";/**
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
 */const Kn=new wa("@firebase/firestore");function ei(){return Kn.logLevel}function ue(n,...e){if(Kn.logLevel<=Se.DEBUG){const t=e.map(Oa);Kn.debug(`Firestore (${Ur}): ${n}`,...t)}}function on(n,...e){if(Kn.logLevel<=Se.ERROR){const t=e.map(Oa);Kn.error(`Firestore (${Ur}): ${n}`,...t)}}function Ir(n,...e){if(Kn.logLevel<=Se.WARN){const t=e.map(Oa);Kn.warn(`Firestore (${Ur}): ${n}`,...t)}}function Oa(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: `+n;throw on(e),new Error(e)}function Be(n,e){n||Te()}function Ie(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Qd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(yt.UNAUTHENTICATED))}shutdown(){}}class Yv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Jv{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new Qd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new yt(e)}}class $v{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new $v(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ew{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const r=s=>{s.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new ew(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Le(n,e){return n<e?-1:n>e?1:0}function Ar(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class at{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new at(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class be{constructor(e){this.timestamp=e}static fromTimestamp(e){return new be(e)}static min(){return new be(new at(0,0))}static max(){return new be(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(),r===void 0?r=e.length-t:r>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class xe extends gi{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const rw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends gi{construct(e,t,r){return new ft(e,t,r)}static isValidIdentifier(e){return rw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(t)}static emptyPath(){return new ft([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(xe.fromString(e))}static fromName(e){return new fe(xe.fromString(e).popFirst(5))}static empty(){return new fe(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new xe(e.slice()))}}function iw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=be.fromTimestamp(r===1e9?new at(t+1,0):new at(t,r));return new bn(i,fe.empty(),e)}function sw(n){return new bn(n.readTime,n.key,-1)}class bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bn(be.min(),fe.empty(),-1)}static max(){return new bn(be.max(),fe.empty(),-1)}}function ow(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const aw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Di(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==aw)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,r)=>{t(e)})}static reject(e){return new G((t,r)=>{r(e)})}static waitFor(e){return new G((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next(i=>i?G.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new G((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new G((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function uw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class La{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}La.oe=-1;function zs(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function cw(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function $u(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||ht.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rs(this.root,e,this.comparator,!0)}}class rs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ht(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zu(this.data.getIterator())}getIteratorFrom(e){return new Zu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new dt(this.comparator);return t.data=e,t}}class Zu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new dt(ft.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yd("Invalid base64 string: "+s):s}}(e);return new pt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const hw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(n){if(Be(!!n),typeof n=="string"){let e=0;const t=hw.exec(n);if(Be(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qn(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */function Ma(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ua(n){const e=n.mapValue.fields.__previous_value__;return Ma(e)?Ua(e):e}function yi(n){const e=In(n.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class fw{constructor(e,t,r,i,s,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class vi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const is={mapValue:{}};function xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ma(n)?4:pw(n)?9007199254740991:dw(n)?10:11:Te()}function Qt(n,e){if(n===e)return!0;const t=xn(n);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yi(n).isEqual(yi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=In(i.timestampValue),l=In(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Qn(i.bytesValue).isEqual(Qn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return tt(i.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return tt(i.integerValue)===tt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=tt(i.doubleValue),l=tt(s.doubleValue);return o===l?Rs(o)===Rs(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Ar(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($u(o)!==$u(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Qt(o[u],l[u])))return!1;return!0}(n,e);default:return Te()}}function wi(n,e){return(n.values||[]).find(t=>Qt(t,e))!==void 0}function Rr(n,e){if(n===e)return 0;const t=xn(n),r=xn(e);if(t!==r)return Le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=tt(s.integerValue||s.doubleValue),u=tt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return ec(n.timestampValue,e.timestampValue);case 4:return ec(yi(n),yi(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(s,o){const l=Qn(s),u=Qn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=Le(l[c],u[c]);if(h!==0)return h}return Le(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Le(tt(s.latitude),tt(o.latitude));return l!==0?l:Le(tt(s.longitude),tt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return tc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const d=s.fields||{},p=o.fields||{},g=(l=d.value)===null||l===void 0?void 0:l.arrayValue,v=(u=p.value)===null||u===void 0?void 0:u.arrayValue,I=Le(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:tc(g,v)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===is.mapValue&&o===is.mapValue)return 0;if(s===is.mapValue)return 1;if(o===is.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let d=0;d<u.length&&d<h.length;++d){const p=Le(u[d],h[d]);if(p!==0)return p;const g=Rr(l[u[d]],c[h[d]]);if(g!==0)return g}return Le(u.length,h.length)}(n.mapValue,e.mapValue);default:throw Te()}}function ec(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=In(n),r=In(e),i=Le(t.seconds,r.seconds);return i!==0?i:Le(t.nanos,r.nanos)}function tc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Rr(t[i],r[i]);if(s)return s}return Le(t.length,r.length)}function kr(n){return ta(n)}function ta(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=In(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ta(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ta(t.fields[o])}`;return i+"}"}(n.mapValue):Te()}function nc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function na(n){return!!n&&"integerValue"in n}function Fa(n){return!!n&&"arrayValue"in n}function rc(n){return!!n&&"nullValue"in n}function ic(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ps(n){return!!n&&"mapValue"in n}function dw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function li(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=li(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=li(n.arrayValue.values[t]);return e}return Object.assign({},n)}function pw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(t)}setAll(e){let t=ft.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=li(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ps(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(li(this.value))}}function Jd(n){const e=[];return Zn(n.fields,(t,r)=>{const i=new ft([t]);if(ps(r)){const s=Jd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class vt{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,be.min(),be.min(),be.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new vt(e,1,t,be.min(),r,i,0)}static newNoDocument(e,t){return new vt(e,2,t,be.min(),be.min(),It.empty(),0)}static newUnknownDocument(e,t){return new vt(e,3,t,be.min(),be.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ks{constructor(e,t){this.position=e,this.inclusive=t}}function sc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),t.key):r=Rr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ti{constructor(e,t="asc"){this.field=e,this.dir=t}}function mw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $d{}class st extends $d{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gw(e,t,r):t==="array-contains"?new ww(e,r):t==="in"?new Tw(e,r):t==="not-in"?new Ew(e,r):t==="array-contains-any"?new bw(e,r):new st(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new yw(e,r):new vw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Rr(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(Rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends $d{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ut(e,t)}matches(e){return Zd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zd(n){return n.op==="and"}function ep(n){return _w(n)&&Zd(n)}function _w(n){for(const e of n.filters)if(e instanceof Ut)return!1;return!0}function ra(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+kr(n.value);if(ep(n))return n.filters.map(e=>ra(e)).join(",");{const e=n.filters.map(t=>ra(t)).join(",");return`${n.op}(${e})`}}function tp(n,e){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(n,e):n instanceof Ut?function(r,i){return i instanceof Ut&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&tp(o,i.filters[l]),!0):!1}(n,e):void Te()}function np(n){return n instanceof st?function(t){return`${t.field.canonicalString()} ${t.op} ${kr(t.value)}`}(n):n instanceof Ut?function(t){return t.op.toString()+" {"+t.getFilters().map(np).join(" ,")+"}"}(n):"Filter"}class gw extends st{constructor(e,t,r){super(e,t,r),this.key=fe.fromName(r.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class yw extends st{constructor(e,t){super(e,"in",t),this.keys=rp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vw extends st{constructor(e,t){super(e,"not-in",t),this.keys=rp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>fe.fromName(r.referenceValue))}class ww extends st{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fa(t)&&wi(t.arrayValue,this.value)}}class Tw extends st{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wi(this.value.arrayValue,t)}}class Ew extends st{constructor(e,t){super(e,"not-in",t)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wi(this.value.arrayValue,t)}}class bw extends st{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
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
 */class Iw{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ac(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Iw(n,e,t,r,i,s,o)}function Ba(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ra(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>kr(r)).join(",")),e.ue=t}return e.ue}function ja(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oc(n.startAt,e.startAt)&&oc(n.endAt,e.endAt)}function ia(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fr{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Aw(n,e,t,r,i,s,o,l){return new Fr(n,e,t,r,i,s,o,l)}function qa(n){return new Fr(n)}function lc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ip(n){return n.collectionGroup!==null}function ui(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new dt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ti(s,r))}),t.has(ft.keyField().canonicalString())||e.ce.push(new Ti(ft.keyField(),r))}return e.ce}function zt(n){const e=Ie(n);return e.le||(e.le=Rw(e,ui(n))),e.le}function Rw(n,e){if(n.limitType==="F")return ac(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ti(i.field,s)});const t=n.endAt?new ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ks(n.startAt.position,n.startAt.inclusive):null;return ac(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function sa(n,e){const t=n.filters.concat([e]);return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function oa(n,e,t){return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hs(n,e){return ja(zt(n),zt(e))&&n.limitType===e.limitType}function sp(n){return`${Ba(zt(n))}|lt:${n.limitType}`}function hr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>np(i)).join(", ")}]`),zs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>kr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>kr(i)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Ws(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):fe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ui(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=sc(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ui(r),i)||r.endAt&&!function(o,l,u){const c=sc(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ui(r),i))}(n,e)}function kw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function op(n){return(e,t)=>{let r=!1;for(const i of ui(n)){const s=Cw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Cw(n,e,t){const r=n.field.isKeyField()?fe.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Rr(u,c):Te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Te()}}/**
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
 */class Br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xd(this.inner)}size(){return this.innerSize}}/**
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
 */const Pw=new Je(fe.comparator);function an(){return Pw}const ap=new Je(fe.comparator);function ri(...n){let e=ap;for(const t of n)e=e.insert(t.key,t);return e}function lp(n){let e=ap;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Fn(){return ci()}function up(){return ci()}function ci(){return new Br(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sw=new Je(fe.comparator),Nw=new dt(fe.comparator);function Ce(...n){let e=Nw;for(const t of n)e=e.add(t);return e}const Dw=new dt(Le);function Vw(){return Dw}/**
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
 */function za(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function cp(n){return{integerValue:""+n}}function hp(n,e){return cw(e)?cp(e):za(n,e)}/**
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
 */class Gs{constructor(){this._=void 0}}function Ow(n,e,t){return n instanceof Ei?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ma(s)&&(s=Ua(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Cr?dp(n,e):n instanceof Pr?pp(n,e):function(i,s){const o=fp(i,s),l=uc(o)+uc(i.Pe);return na(o)&&na(i.Pe)?cp(l):za(i.serializer,l)}(n,e)}function Lw(n,e,t){return n instanceof Cr?dp(n,e):n instanceof Pr?pp(n,e):t}function fp(n,e){return n instanceof bi?function(r){return na(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ei extends Gs{}class Cr extends Gs{constructor(e){super(),this.elements=e}}function dp(n,e){const t=mp(e);for(const r of n.elements)t.some(i=>Qt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Pr extends Gs{constructor(e){super(),this.elements=e}}function pp(n,e){let t=mp(e);for(const r of n.elements)t=t.filter(i=>!Qt(i,r));return{arrayValue:{values:t}}}class bi extends Gs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function uc(n){return tt(n.integerValue||n.doubleValue)}function mp(n){return Fa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ks{constructor(e,t){this.field=e,this.transform=t}}function Mw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Cr&&i instanceof Cr||r instanceof Pr&&i instanceof Pr?Ar(r.elements,i.elements,Qt):r instanceof bi&&i instanceof bi?Qt(r.Pe,i.Pe):r instanceof Ei&&i instanceof Ei}(n.transform,e.transform)}class Uw{constructor(e,t){this.version=e,this.transformResults=t}}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qs{}function _p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ha(n.key,Nt.none()):new Oi(n.key,n.data,Nt.none());{const t=n.data,r=It.empty();let i=new dt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kn(n.key,r,new Ct(i.toArray()),Nt.none())}}function Fw(n,e,t){n instanceof Oi?function(i,s,o){const l=i.value.clone(),u=hc(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(i,s,o){if(!ms(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=hc(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(gp(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function hi(n,e,t,r){return n instanceof Oi?function(s,o,l,u){if(!ms(s.precondition,o))return l;const c=s.value.clone(),h=fc(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(s,o,l,u){if(!ms(s.precondition,o))return l;const c=fc(s.fieldTransforms,u,o),h=o.data;return h.setAll(gp(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(n,e,t,r):function(s,o,l){return ms(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Bw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=fp(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function cc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ar(r,i,(s,o)=>Mw(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oi extends Qs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kn extends Qs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hc(n,e,t){const r=new Map;Be(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Lw(o,l,t[i]))}return r}function fc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Ow(s,o,e))}return r}class Ha extends Qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jw extends Qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qw{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fw(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=up();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=_p(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(be.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(t,r)=>cc(t,r))&&Ar(this.baseMutations,e.baseMutations,(t,r)=>cc(t,r))}}class Wa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Be(e.mutations.length===r.length);let i=function(){return Sw}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wa(e,t,r,i)}}/**
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
 */class zw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var it,Ne;function Ww(n){switch(n){default:return Te();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function yp(n){if(n===void 0)return on("GRPC error has no .code"),W.UNKNOWN;switch(n){case it.OK:return W.OK;case it.CANCELLED:return W.CANCELLED;case it.UNKNOWN:return W.UNKNOWN;case it.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case it.INTERNAL:return W.INTERNAL;case it.UNAVAILABLE:return W.UNAVAILABLE;case it.UNAUTHENTICATED:return W.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case it.NOT_FOUND:return W.NOT_FOUND;case it.ALREADY_EXISTS:return W.ALREADY_EXISTS;case it.PERMISSION_DENIED:return W.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case it.ABORTED:return W.ABORTED;case it.OUT_OF_RANGE:return W.OUT_OF_RANGE;case it.UNIMPLEMENTED:return W.UNIMPLEMENTED;case it.DATA_LOSS:return W.DATA_LOSS;default:return Te()}}(Ne=it||(it={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Gw(){return new TextEncoder}/**
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
 */const Kw=new zn([4294967295,4294967295],0);function dc(n){const e=Gw().encode(n),t=new qd;return t.update(e),new Uint8Array(t.digest())}function pc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zn([t,r],0),new zn([i,s],0)]}class Ga{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ii(`Invalid padding: ${t}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ii(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(zn.fromNumber(r)));return i.compare(Kw)===1&&(i=new zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=dc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ga(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=dc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xs(be.min(),i,new Je(Le),an(),Ce())}}class Li{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Li(r,t,Ce(),Ce(),Ce())}}/**
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
 */class _s{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class vp{constructor(e,t){this.targetId=e,this.me=t}}class wp{constructor(e,t,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mc{constructor(){this.fe=0,this.ge=gc(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),r=Ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Te()}}),new Li(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=gc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qw{constructor(e){this.Le=e,this.Be=new Map,this.ke=an(),this.qe=_c(),this.Qe=new Je(Le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ia(s))if(r===0){const o=new fe(s.path);this.Ue(t,o,vt.newNoDocument(o,be.min()))}else Be(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=Qn(r).toUint8Array()}catch(u){if(u instanceof Yd)return Ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ga(o,i,s)}catch(u){return Ir(u instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ia(l.target)){const u=new fe(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,vt.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=Ce();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new xs(e,t,this.Qe,this.ke,r);return this.ke=an(),this.qe=_c(),this.Qe=new Je(Le),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new dt(Le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function _c(){return new Je(fe.comparator)}function gc(){return new Je(fe.comparator)}const xw={asc:"ASCENDING",desc:"DESCENDING"},Xw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yw={and:"AND",or:"OR"};class Jw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function aa(n,e){return n.useProto3Json||zs(e)?e:{value:e}}function Cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $w(n,e){return Cs(n,e.toTimestamp())}function Ht(n){return Be(!!n),be.fromTimestamp(function(t){const r=In(t);return new at(r.seconds,r.nanos)}(n))}function Ka(n,e){return la(n,e).canonicalString()}function la(n,e){const t=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ep(n){const e=xe.fromString(n);return Be(kp(e)),e}function ua(n,e){return Ka(n.databaseId,e.path)}function Lo(n,e){const t=Ep(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(Ip(t))}function bp(n,e){return Ka(n.databaseId,e)}function Zw(n){const e=Ep(n);return e.length===4?xe.emptyPath():Ip(e)}function ca(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ip(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yc(n,e,t){return{name:ua(n,e),fields:t.value.mapValue.fields}}function eT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Be(h===void 0||typeof h=="string"),pt.fromBase64String(h||"")):(Be(h===void 0||h instanceof Buffer||h instanceof Uint8Array),pt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?W.UNKNOWN:yp(c.code);return new se(h,c.message||"")}(o);t=new wp(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lo(n,r.document.name),s=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):be.min(),l=new It({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];t=new _s(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lo(n,r.document),s=r.readTime?Ht(r.readTime):be.min(),o=vt.newNoDocument(i,s),l=r.removedTargetIds||[];t=new _s([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lo(n,r.document),s=r.removedTargetIds||[];t=new _s([],s,i,null)}else{if(!("filter"in e))return Te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hw(i,s),l=r.targetId;t=new vp(l,o)}}return t}function tT(n,e){let t;if(e instanceof Oi)t={update:yc(n,e.key,e.value)};else if(e instanceof Ha)t={delete:ua(n,e.key)};else if(e instanceof kn)t={update:yc(n,e.key,e.data),updateMask:cT(e.fieldMask)};else{if(!(e instanceof jw))return Te();t={verify:ua(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bi)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$w(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Te()}(n,e.precondition)),t}function nT(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ht(i.updateTime):Ht(s);return o.isEqual(be.min())&&(o=Ht(s)),new Uw(o,i.transformResults||[])}(t,e))):[]}function rT(n,e){return{documents:[bp(n,e.path)]}}function iT(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bp(n,i);const s=function(c){if(c.length!==0)return Rp(Ut.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:fr(p.field),direction:aT(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=aa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function sT(n){let e=Zw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Be(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(d){const p=Ap(d);return p instanceof Ut&&ep(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(p=>function(v){return new Ti(dr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(d){let p;return p=typeof d=="object"?d.value:d,zs(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(d){const p=!!d.before,g=d.values||[];return new ks(g,p)}(t.startAt));let c=null;return t.endAt&&(c=function(d){const p=!d.before,g=d.values||[];return new ks(g,p)}(t.endAt)),Aw(e,i,o,s,l,"F",u,c)}function oT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ap(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dr(t.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=dr(t.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=dr(t.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=dr(t.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return st.create(dr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ut.create(t.compositeFilter.filters.map(r=>Ap(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function aT(n){return xw[n]}function lT(n){return Xw[n]}function uT(n){return Yw[n]}function fr(n){return{fieldPath:n.canonicalString()}}function dr(n){return ft.fromServerFormat(n.fieldPath)}function Rp(n){return n instanceof st?function(t){if(t.op==="=="){if(ic(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ic(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(t.field),op:lT(t.op),value:t.value}}}(n):n instanceof Ut?function(t){const r=t.getFilters().map(i=>Rp(i));return r.length===1?r[0]:{compositeFilter:{op:uT(t.op),filters:r}}}(n):Te()}function cT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gn{constructor(e,t,r,i,s=be.min(),o=be.min(),l=pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hT{constructor(e){this.ct=e}}function fT(n){const e=sT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oa(e,e.limit,"L"):e}/**
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
 */class dT{constructor(){this.un=new pT}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(bn.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class pT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new dt(xe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(xe.comparator)).toArray()}}/**
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
 */class Sr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Sr(0)}static kn(){return new Sr(-1)}}/**
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
 */class mT{constructor(){this.changes=new Br(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _T{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&hi(r.mutation,i,Ct.empty(),at.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ce()){const i=Fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ri();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ce()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=an();const o=ci(),l=function(){return ci()}();return t.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof kn)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),hi(h.mutation,c,h.mutation.getFieldMask(),at.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var d;return l.set(c,new _T(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ci();let i=new Je((o,l)=>o-l),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||Ct.empty();h=l.applyToLocalView(c,h),r.set(u,h);const d=(i.get(l.batchId)||Ce()).add(u);i=i.insert(l.batchId,d)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,d=up();h.forEach(p=>{if(!s.has(p)){const g=_p(t.get(p),r.get(p));g!==null&&d.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ip(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):G.resolve(Fn());let l=-1,u=s;return o.next(c=>G.forEach(c,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ce())).next(h=>({batchId:l,changes:lp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(r=>{let i=ri();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ri();return this.indexManager.getCollectionParents(e,s).next(l=>G.forEach(l,u=>{const c=function(d,p){return new Fr(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,vt.newInvalidDocument(h)))});let l=ri();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&hi(h.mutation,c,Ct.empty(),at.now()),Ws(t,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class yT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ht(i.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:fT(i.bundledQuery),readTime:Ht(i.readTime)}}(t)),G.resolve()}}/**
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
 */class vT{constructor(){this.overlays=new Je(fe.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Fn();return G.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),G.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const i=Fn(),s=t.length+1,o=new fe(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return G.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Je((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Fn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Fn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return G.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zw(t,r));let s=this.Ir.get(t);s===void 0&&(s=Ce(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class wT{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Qa{constructor(){this.Tr=new dt(lt.Er),this.dr=new dt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new lt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new lt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new fe(new xe([])),r=new lt(t,e),i=new lt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new fe(new xe([])),r=new lt(t,e),i=new lt(t,e+1);let s=Ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new lt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return fe.comparator(e.key,t.key)||Le(e.wr,t.wr)}static Ar(e,t){return Le(e.wr,t.wr)||fe.comparator(e.key,t.key)}}/**
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
 */class TT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new dt(lt.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qw(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new lt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new lt(t,0),i=new lt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new dt(Le);return t.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),G.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;fe.isDocumentKey(s)||(s=s.child(""));const o=new lt(new fe(s),0);let l=new dt(Le);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),G.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return G.forEach(t.mutations,i=>{const s=new lt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new lt(t,0),i=this.br.firstAfterOrEqual(r);return G.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ET{constructor(e){this.Mr=e,this.docs=function(){return new Je(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(t))}getEntries(e,t){let r=an();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=an();const o=t.path,l=new fe(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ow(sw(h),r)<=0||(i.has(h.key)||Ws(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Te()}Or(e,t){return G.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new bT(this)}getSize(e){return G.resolve(this.size)}}class bT extends mT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class IT{constructor(e){this.persistence=e,this.Nr=new Br(t=>Ba(t),ja),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qa,this.targetCount=0,this.kr=Sr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Sr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
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
 */class AT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new La(0),this.Kr=!1,this.Kr=!0,this.$r=new wT,this.referenceDelegate=e(this),this.Ur=new IT(this),this.indexManager=new dT,this.remoteDocumentCache=function(i){return new ET(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hT(t),this.Gr=new yT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new TT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const i=new RT(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return G.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class RT extends lw{constructor(e){super(),this.currentSequenceNumber=e}}class xa{constructor(e){this.persistence=e,this.Jr=new Qa,this.Yr=null}static Zr(e){return new xa(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,r=>{const i=fe.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,be.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Xa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Ce(),i=Ce();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xa(e,t.fromCache,r,i)}}/**
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
 */class kT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return S_()?8:uw(wt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kT;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(ei()<=Se.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(ei()<=Se.DEBUG&&ue("QueryEngine","Query:",hr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ei()<=Se.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):G.resolve())}Yi(e,t){if(lc(t))return G.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=oa(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,l);return this.ns(t,c,o,u.readTime)?this.Yi(e,oa(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return lc(t)||i.isEqual(be.min())?G.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?G.resolve(null):(ei()<=Se.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hr(t)),this.rs(e,o,t,iw(i,-1)).next(l=>l))})}ts(e,t){let r=new dt(op(e));return t.forEach((i,s)=>{Ws(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return ei()<=Se.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",hr(t)),this.Ji.getDocumentsMatchingQuery(e,t,bn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class PT{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Je(Le),this._s=new Br(s=>Ba(s),ja),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ST(n,e,t,r){return new PT(n,e,t,r)}async function Cp(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function NT(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const d=c.batch,p=d.keys();let g=G.resolve();return p.forEach(v=>{g=g.next(()=>h.getEntry(u,v)).next(I=>{const E=c.docVersions.get(v);Be(E!==null),I.version.compareTo(E)<0&&(d.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,d))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Pp(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function DT(n,e){const t=Ie(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;l.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,d).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,d)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(pt.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(I,E,D){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,g,h)&&l.push(t.Ur.updateTargetData(s,g))});let u=an(),c=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(VT(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(be.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(d=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return G.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function VT(n,e,t){let r=Ce(),i=Ce();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=an();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(be.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ue("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function OT(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LT(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ha(n,e,t){const r=Ie(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function vc(n,e,t){const r=Ie(n);let i=be.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const d=Ie(u),p=d._s.get(h);return p!==void 0?G.resolve(d.os.get(p)):d.Ur.getTargetData(c,h)}(r,o,zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:be.min(),t?s:Ce())).next(l=>(MT(r,kw(e),l),{documents:l,Ts:s})))}function MT(n,e,t){let r=n.us.get(e)||be.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class wc{constructor(){this.activeTargetIds=Vw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UT{constructor(){this.so=new wc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FT{_o(e){}shutdown(){}}/**
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
 */class Tc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ss=null;function Mo(){return ss===null?ss=function(){return 268435456+Math.round(2147483648*Math.random())}():ss++,"0x"+ss.toString(16)}/**
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
 */const BT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class qT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const l=Mo(),u=this.xo(t,r.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(h=>(ue("RestConnection",`Received RPC '${t}' ${l}: `,h),h),h=>{throw Ir("RestConnection",`RPC '${t}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(t,r,i,s,o,l){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=BT[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Mo();return new Promise((o,l)=>{const u=new zd;u.setWithCredentials(!0),u.listenOnce(Hd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ds.NO_ERROR:const h=u.getResponseJson();ue(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ds.TIMEOUT:ue(gt,`RPC '${e}' ${s} timed out`),l(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const d=u.getStatus();if(ue(gt,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const v=function(E){const D=E.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(D)>=0?D:W.UNKNOWN}(g.status);l(new se(v,g.message))}else l(new se(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new se(W.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ue(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ue(gt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=Mo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kd(),l=Gd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const h=s.join("");ue(gt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const d=o.createWebChannel(h,u);let p=!1,g=!1;const v=new jT({Io:E=>{g?ue(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(p||(ue(gt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),ue(gt,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},To:()=>d.close()}),I=(E,D,O)=>{E.listen(D,V=>{try{O(V)}catch(M){setTimeout(()=>{throw M},0)}})};return I(d,ni.EventType.OPEN,()=>{g||(ue(gt,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),I(d,ni.EventType.CLOSE,()=>{g||(g=!0,ue(gt,`RPC '${e}' stream ${i} transport closed`),v.So())}),I(d,ni.EventType.ERROR,E=>{g||(g=!0,Ir(gt,`RPC '${e}' stream ${i} transport errored:`,E),v.So(new se(W.UNAVAILABLE,"The operation could not be completed")))}),I(d,ni.EventType.MESSAGE,E=>{var D;if(!g){const O=E.data[0];Be(!!O);const V=O,M=V.error||((D=V[0])===null||D===void 0?void 0:D.error);if(M){ue(gt,`RPC '${e}' stream ${i} received error:`,M);const U=M.status;let F=function(R){const k=it[R];if(k!==void 0)return yp(k)}(U),A=M.message;F===void 0&&(F=W.INTERNAL,A="Unknown error status: "+U+" with message "+M.message),g=!0,v.So(new se(F,A)),d.close()}else ue(gt,`RPC '${e}' stream ${i} received:`,O),v.bo(O)}}),I(l,Wd.STAT_EVENT,E=>{E.stat===ea.PROXY?ue(gt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===ea.NOPROXY&&ue(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function Uo(){return typeof document<"u"?document:null}/**
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
 */function Xs(n){return new Jw(n,!0)}/**
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
 */class Sp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Np{constructor(e,t,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(on(t.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new se(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zT extends Np{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=eT(this.serializer,e),r=function(s){if(!("targetChange"in s))return be.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?be.min():o.readTime?Ht(o.readTime):be.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ca(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=ia(u)?{documents:rT(s,u)}:{query:iT(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Tp(s,o.resumeToken);const c=aa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(be.min())>0){l.readTime=Cs(s,o.snapshotVersion.toTimestamp());const c=aa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=oT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ca(this.serializer),t.removeTarget=e,this.a_(t)}}class HT extends Np{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=nT(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ca(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>tT(this.serializer,r))};this.a_(t)}}/**
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
 */class WT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,la(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(W.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,la(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(W.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class GT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(on(t),this.D_=!1):ue("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class KT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{er(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Ie(u);c.L_.add(4),await Mi(c),c.q_.set("Unknown"),c.L_.delete(4),await Ys(c)}(this))})}),this.q_=new GT(r,i)}}async function Ys(n){if(er(n))for(const e of n.B_)await e(!0)}async function Mi(n){for(const e of n.B_)await e(!1)}function Dp(n,e){const t=Ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Za(t)?$a(t):jr(t).r_()&&Ja(t,e))}function Ya(n,e){const t=Ie(n),r=jr(t);t.N_.delete(e),r.r_()&&Vp(t,e),t.N_.size===0&&(r.r_()?r.o_():er(t)&&t.q_.set("Unknown"))}function Ja(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jr(n).A_(e)}function Vp(n,e){n.Q_.xe(e),jr(n).R_(e)}function $a(n){n.Q_=new Qw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.q_.v_()}function Za(n){return er(n)&&!jr(n).n_()&&n.N_.size>0}function er(n){return Ie(n).L_.size===0}function Op(n){n.Q_=void 0}async function QT(n){n.q_.set("Online")}async function xT(n){n.N_.forEach((e,t)=>{Ja(n,e)})}async function XT(n,e){Op(n),Za(n)?(n.q_.M_(e),$a(n)):n.q_.set("Unknown")}async function YT(n,e,t){if(n.q_.set("Online"),e instanceof wp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ps(n,r)}else if(e instanceof _s?n.Q_.Ke(e):e instanceof vp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(be.min()))try{const r=await Pp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(pt.EMPTY_BYTE_STRING,h.snapshotVersion)),Vp(s,u);const d=new gn(h.target,u,c,h.sequenceNumber);Ja(s,d)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){ue("RemoteStore","Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,e,t){if(!Vi(e))throw e;n.L_.add(1),await Mi(n),n.q_.set("Offline"),t||(t=()=>Pp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ys(n)})}function Lp(n,e){return e().catch(t=>Ps(n,t,e))}async function Js(n){const e=Ie(n),t=An(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JT(e);)try{const i=await OT(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,$T(e,i)}catch(i){await Ps(e,i)}Mp(e)&&Up(e)}function JT(n){return er(n)&&n.O_.length<10}function $T(n,e){n.O_.push(e);const t=An(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Mp(n){return er(n)&&!An(n).n_()&&n.O_.length>0}function Up(n){An(n).start()}async function ZT(n){An(n).p_()}async function e0(n){const e=An(n);for(const t of n.O_)e.m_(t.mutations)}async function t0(n,e,t){const r=n.O_.shift(),i=Wa.from(r,e,t);await Lp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Js(n)}async function n0(n,e){e&&An(n).V_&&await async function(r,i){if(function(o){return Ww(o)&&o!==W.ABORTED}(i.code)){const s=r.O_.shift();An(r).s_(),await Lp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Js(r)}}(n,e),Mp(n)&&Up(n)}async function Ec(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const r=er(t);t.L_.add(3),await Mi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ys(t)}async function r0(n,e){const t=Ie(n);e?(t.L_.delete(2),await Ys(t)):e||(t.L_.add(2),await Mi(t),t.q_.set("Unknown"))}function jr(n){return n.K_||(n.K_=function(t,r,i){const s=Ie(t);return s.w_(),new zT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:QT.bind(null,n),Ro:xT.bind(null,n),mo:XT.bind(null,n),d_:YT.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Za(n)?$a(n):n.q_.set("Unknown")):(await n.K_.stop(),Op(n))})),n.K_}function An(n){return n.U_||(n.U_=function(t,r,i){const s=Ie(t);return s.w_(),new HT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ZT.bind(null,n),mo:n0.bind(null,n),f_:e0.bind(null,n),g_:t0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Js(n)):(await n.U_.stop(),n.O_.length>0&&(ue("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class el{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new el(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tl(n,e){if(on("AsyncQueue",`${e}: ${n}`),Vi(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||fe.comparator(t.key,r.key):(t,r)=>fe.comparator(t.key,r.key),this.keyedMap=ri(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bc{constructor(){this.W_=new Je(fe.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Nr{constructor(e,t,r,i,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Nr(e,t,wr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class i0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class s0{constructor(){this.queries=Ic(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Ie(t),s=i.queries;i.queries=Ic(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new se(W.ABORTED,"Firestore shutting down"))}}function Ic(){return new Br(n=>sp(n),Hs)}async function Fp(n,e){const t=Ie(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new i0,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=tl(o,`Initialization of query '${hr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&nl(t)}async function Bp(n,e){const t=Ie(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function o0(n,e){const t=Ie(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&nl(t)}function a0(n,e,t){const r=Ie(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function nl(n){n.Y_.forEach(e=>{e.next()})}var fa,Ac;(Ac=fa||(fa={})).ea="default",Ac.Cache="cache";class jp{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fa.Cache}}/**
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
 */class qp{constructor(e){this.key=e}}class zp{constructor(e){this.key=e}}class l0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=op(e),this.Ra=new wr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bc,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),g=Ws(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;p&&g?p.data.isEqual(g.data)?v!==I&&(r.track({type:3,doc:g}),E=!0):this.ga(p,g)||(r.track({type:2,doc:g}),E=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(l=!0)):!p&&g?(r.track({type:0,doc:g}),E=!0):p&&!g&&(r.track({type:1,doc:p}),E=!0,(u||c)&&(l=!0)),E&&(g?(o=o.add(g),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,v){const I=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return I(g)-I(v)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Nr(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new zp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new qp(r))}),t}ba(e){this.Ta=e.Ts,this.da=Ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Nr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class u0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class c0{constructor(e){this.key=e,this.va=!1}}class h0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Br(l=>sp(l),Hs),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(fe.comparator),this.Na=new Map,this.La=new Qa,this.Ba={},this.ka=new Map,this.qa=Sr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function f0(n,e,t=!0){const r=xp(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Hp(r,e,t,!0),i}async function d0(n,e){const t=xp(n);await Hp(t,e,!0,!1)}async function Hp(n,e,t,r){const i=await LT(n.localStore,zt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await p0(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Dp(n.remoteStore,i),l}async function p0(n,e,t,r,i){n.Ka=(d,p,g)=>async function(I,E,D,O){let V=E.view.ma(D);V.ns&&(V=await vc(I.localStore,E.query,!1).then(({documents:A})=>E.view.ma(A,V)));const M=O&&O.targetChanges.get(E.targetId),U=O&&O.targetMismatches.get(E.targetId)!=null,F=E.view.applyChanges(V,I.isPrimaryClient,M,U);return kc(I,E.targetId,F.wa),F.snapshot}(n,d,p,g);const s=await vc(n.localStore,e,!0),o=new l0(e,s.Ts),l=o.ma(s.documents),u=Li.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,u);kc(n,t,c.wa);const h=new u0(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function m0(n,e,t){const r=Ie(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Hs(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ha(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ya(r.remoteStore,i.targetId),da(r,i.targetId)}).catch(Di)):(da(r,i.targetId),await ha(r.localStore,i.targetId,!0))}async function _0(n,e){const t=Ie(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ya(t.remoteStore,r.targetId))}async function g0(n,e,t){const r=I0(n);try{const i=await function(o,l){const u=Ie(o),c=at.now(),h=l.reduce((g,v)=>g.add(v.key),Ce());let d,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=an(),I=Ce();return u.cs.getEntries(g,h).next(E=>{v=E,v.forEach((D,O)=>{O.isValidDocument()||(I=I.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,v)).next(E=>{d=E;const D=[];for(const O of l){const V=Bw(O,d.get(O.key).overlayedDocument);V!=null&&D.push(new kn(O.key,V,Jd(V.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,D,l)}).next(E=>{p=E;const D=E.applyToLocalDocumentSet(d,I);return u.documentOverlayCache.saveOverlays(g,E.batchId,D)})}).then(()=>({batchId:p.batchId,changes:lp(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Je(Le)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Ui(r,i.changes),await Js(r.remoteStore)}catch(i){const s=tl(i,"Failed to persist write");t.reject(s)}}async function Wp(n,e){const t=Ie(n);try{const r=await DT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(Be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Be(o.va):i.removedDocuments.size>0&&(Be(o.va),o.va=!1))}),await Ui(t,r,e)}catch(r){await Di(r)}}function Rc(n,e,t){const r=Ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Ie(o);u.onlineState=l;let c=!1;u.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(l)&&(c=!0)}),c&&nl(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y0(n,e,t){const r=Ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Je(fe.comparator);o=o.insert(s,vt.newNoDocument(s,be.min()));const l=Ce().add(s),u=new xs(be.min(),new Map,new Je(Le),o,l);await Wp(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),rl(r)}else await ha(r.localStore,e,!1).then(()=>da(r,e,t)).catch(Di)}async function v0(n,e){const t=Ie(n),r=e.batch.batchId;try{const i=await NT(t.localStore,e);Kp(t,r,null),Gp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ui(t,i)}catch(i){await Di(i)}}async function w0(n,e,t){const r=Ie(n);try{const i=await function(o,l){const u=Ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(d=>(Be(d!==null),h=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Kp(r,e,t),Gp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ui(r,i)}catch(i){await Di(i)}}function Gp(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Kp(n,e,t){const r=Ie(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function da(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Qp(n,r)})}function Qp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ya(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),rl(n))}function kc(n,e,t){for(const r of t)r instanceof qp?(n.La.addReference(r.key,e),T0(n,r)):r instanceof zp?(ue("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Qp(n,r.key)):Te()}function T0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(ue("SyncEngine","New document in limbo: "+t),n.xa.add(r),rl(n))}function rl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new fe(xe.fromString(e)),r=n.qa.next();n.Na.set(r,new c0(t)),n.Oa=n.Oa.insert(t,r),Dp(n.remoteStore,new gn(zt(qa(t.path)),r,"TargetPurposeLimboResolution",La.oe))}}async function Ui(n,e,t){const r=Ie(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Xa.Wi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=Ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>G.forEach(c,p=>G.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>G.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Vi(d))throw d;ue("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),v=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(v);h.os=h.os.insert(p,I)}}}(r.localStore,s))}async function E0(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const r=await Cp(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new se(W.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ui(t,r.hs)}}function b0(n,e){const t=Ie(n),r=t.Na.get(e);if(r&&r.va)return Ce().add(r.key);{let i=Ce();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function xp(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y0.bind(null,e),e.Ca.d_=o0.bind(null,e.eventManager),e.Ca.$a=a0.bind(null,e.eventManager),e}function I0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w0.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ST(this.persistence,new CT,e.initialUser,this.serializer)}Ga(e){return new AT(xa.Zr,this.serializer)}Wa(e){return new UT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E0.bind(null,this.syncEngine),await r0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s0}()}createDatastore(e){const t=Xs(e.databaseInfo.databaseId),r=function(s){return new qT(s)}(e.databaseInfo);return function(s,o,l,u){return new WT(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new KT(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Rc(this.syncEngine,t,0),function(){return Tc.D()?new Tc:new FT}())}createSyncEngine(e,t){return function(i,s,o,l,u,c,h){const d=new h0(i,s,o,l,u,c);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Ie(i);ue("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Mi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pa.provider={build:()=>new pa};/**
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
 */class Xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class A0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ue("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ue("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=tl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fo(n,e){n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Cc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await R0(n);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ec(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ec(e.remoteStore,i)),n._onlineComponents=e}async function R0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await Fo(n,new Ss)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await Fo(n,new Ss);return n._offlineComponents}async function Yp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await Cc(n,n._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await Cc(n,new pa))),n._onlineComponents}function k0(n){return Yp(n).then(e=>e.syncEngine)}async function ma(n){const e=await Yp(n),t=e.eventManager;return t.onListen=f0.bind(null,e.syncEngine),t.onUnlisten=m0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=d0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_0.bind(null,e.syncEngine),t}function C0(n,e,t={}){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Xp({next:p=>{h.Za(),o.enqueueAndForget(()=>Bp(s,d)),p.fromCache&&u.source==="server"?c.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new jp(l,h,{includeMetadataChanges:!0,_a:!0});return Fp(s,d)}(await ma(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Jp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pc=new Map;/**
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
 */function $p(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function P0(n,e,t,r){if(e===!0&&r===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sc(n){if(!fe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nc(n){if(fe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$s(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Dc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}P0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xv;switch(r.type){case"firstParty":return new Zv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pc.get(t);r&&(ue("ComponentProvider","Removing Datastore"),Pc.delete(t),r.terminate())}(this),Promise.resolve()}}function S0(n,e,t,r={}){var i;const s=(n=Dt(n,Zs))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=id(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}n._authCredentials=new Yv(new Qd(l,u))}}/**
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
 */class Cn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class bt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Tn extends Cn{constructor(e,t,r){super(e,t,qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new fe(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function Xe(n,e,...t){if(n=Ye(n),$p("collection","path",e),n instanceof Zs){const r=xe.fromString(e,...t);return Nc(r),new Tn(n,null,r)}{if(!(n instanceof bt||n instanceof Tn))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Nc(r),new Tn(n.firestore,null,r)}}function nt(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=xd.newId()),$p("doc","path",e),n instanceof Zs){const r=xe.fromString(e,...t);return Sc(r),new bt(n,null,new fe(r))}{if(!(n instanceof bt||n instanceof Tn))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Sc(r),new bt(n.firestore,n instanceof Tn?n.converter:null,new fe(r))}}/**
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
 */class Vc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sp(this,"async_queue_retry"),this.Vu=()=>{const r=Uo();r&&ue("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Uo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Uo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Vi(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw on("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=el.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Oc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Rn extends Zs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Vc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vc(e),this._firestoreClient=void 0,await e}}}function N0(n,e){const t=typeof n=="object"?n:Ea(),r=typeof n=="string"?n:"(default)",i=Fs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=td("firestore");s&&S0(i,...s)}return i}function il(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||D0(n),n._firestoreClient}function D0(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,c,h){return new fw(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Jp(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new A0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dr(pt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dr(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class eo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
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
 */class ol{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const V0=/^__.*__$/;class O0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oi(e,this.data,t,this.fieldTransforms)}}class Zp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function em(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class to{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new to(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ns(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(em(this.Cu)&&V0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class L0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xs(e)}Qu(e,t,r,i=!1){return new to({Cu:e,methodName:t,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function no(n){const e=n._freezeSettings(),t=Xs(n._databaseId);return new L0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tm(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);hl("Data must be an object, but it was:",o,r);const l=rm(r,o);let u,c;if(s.merge)u=new Ct(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=_a(e,d,t);if(!o.contains(p))throw new se(W.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sm(h,p)||h.push(p)}u=new Ct(h),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new O0(new It(l),u,c)}class ro extends tr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ro}}function nm(n,e,t){return new to({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class al extends tr{_toFieldTransform(e){return new Ks(e.path,new Ei)}isEqual(e){return e instanceof al}}class ll extends tr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=nm(this,e,!0),r=this.Ku.map(s=>nr(s,t)),i=new Cr(r);return new Ks(e.path,i)}isEqual(e){return e instanceof ll&&Er(this.Ku,e.Ku)}}class ul extends tr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=nm(this,e,!0),r=this.Ku.map(s=>nr(s,t)),i=new Pr(r);return new Ks(e.path,i)}isEqual(e){return e instanceof ul&&Er(this.Ku,e.Ku)}}class cl extends tr{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new bi(e.serializer,hp(e.serializer,this.$u));return new Ks(e.path,t)}isEqual(e){return e instanceof cl&&this.$u===e.$u}}function M0(n,e,t,r){const i=n.Qu(1,e,t);hl("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Zn(r,(u,c)=>{const h=fl(e,u,t);c=Ye(c);const d=i.Nu(h);if(c instanceof ro)s.push(h);else{const p=nr(c,d);p!=null&&(s.push(h),o.set(h,p))}});const l=new Ct(s);return new Zp(o,l,i.fieldTransforms)}function U0(n,e,t,r,i,s){const o=n.Qu(1,e,t),l=[_a(e,r,t)],u=[i];if(s.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(_a(e,s[p])),u.push(s[p+1]);const c=[],h=It.empty();for(let p=l.length-1;p>=0;--p)if(!sm(c,l[p])){const g=l[p];let v=u[p];v=Ye(v);const I=o.Nu(g);if(v instanceof ro)c.push(g);else{const E=nr(v,I);E!=null&&(c.push(g),h.set(g,E))}}const d=new Ct(c);return new Zp(h,d,o.fieldTransforms)}function F0(n,e,t,r=!1){return nr(t,n.Qu(r?4:3,e))}function nr(n,e){if(im(n=Ye(n)))return hl("Unsupported field value:",e,n),rm(n,e);if(n instanceof tr)return function(r,i){if(!em(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=nr(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=at.fromDate(r);return{timestampValue:Cs(i.serializer,s)}}if(r instanceof at){const s=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cs(i.serializer,s)}}if(r instanceof sl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dr)return{bytesValue:Tp(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ka(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ol)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return za(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${$s(r)}`)}(n,e)}function rm(n,e){const t={};return Xd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(r,i)=>{const s=nr(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function im(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof sl||n instanceof Dr||n instanceof bt||n instanceof tr||n instanceof ol)}function hl(n,e,t){if(!im(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=$s(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function _a(n,e,t){if((e=Ye(e))instanceof eo)return e._internalPath;if(typeof e=="string")return fl(n,e);throw Ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const B0=new RegExp("[~\\*/\\[\\]]");function fl(n,e,t){if(e.search(B0)>=0)throw Ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new eo(...e.split("."))._internalPath}catch{throw Ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ns(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new se(W.INVALID_ARGUMENT,l+n+u)}function sm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class om{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(io("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class j0 extends om{data(){return super.data()}}function io(n,e){return typeof e=="string"?fl(n,e):e instanceof eo?e._internalPath:e._delegate._internalPath}/**
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
 */function am(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dl{}class lm extends dl{}function Ot(n,e,...t){let r=[];e instanceof dl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof pl).length,l=s.filter(u=>u instanceof so).length;if(o>1||o>0&&l>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class so extends lm{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new so(e,t,r)}_apply(e){const t=this._parse(e);return um(e._query,t),new Cn(e.firestore,e.converter,sa(e._query,t))}_parse(e){const t=no(e.firestore);return function(s,o,l,u,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Mc(d,h);const g=[];for(const v of d)g.push(Lc(u,s,v));p={arrayValue:{values:g}}}else p=Lc(u,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Mc(d,h),p=F0(l,o,d,h==="in"||h==="not-in");return st.create(c,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ga(n,e,t){const r=e,i=io("where",n);return so._create(i,r,t)}class pl extends dl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ut.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)um(o,u),o=sa(o,u)}(e._query,t),new Cn(e.firestore,e.converter,sa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ml extends lm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ml(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ti(s,o)}(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function mn(n,e="asc"){const t=e,r=io("orderBy",n);return ml._create(r,t)}function Lc(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ip(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(xe.fromString(t));if(!fe.isDocumentKey(r))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nc(n,new fe(r))}if(t instanceof bt)return nc(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$s(t)}.`)}function Mc(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function um(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class q0{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>tt(o.doubleValue));return new ol(s)}convertGeoPoint(e){return new sl(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ua(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yi(e));default:return null}}convertTimestamp(e){const t=In(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Be(kp(r));const i=new vi(r.get(1),r.get(3)),s=new fe(r.popFirst(5));return i.isEqual(t)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function cm(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hm extends om{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(io("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gs extends hm{data(e={}){return super.data(e)}}class fm{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gs(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new gs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:z0(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class _l extends q0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,t)}}function pr(n){n=Dt(n,Cn);const e=Dt(n.firestore,Rn),t=il(e),r=new _l(e);return am(n._query),C0(t,n._query).then(i=>new fm(e,r,n,i))}function Ds(n,e,t){n=Dt(n,bt);const r=Dt(n.firestore,Rn),i=cm(n.converter,e);return oo(r,[tm(no(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Nt.none())])}function Xn(n,e,t,...r){n=Dt(n,bt);const i=Dt(n.firestore,Rn),s=no(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof eo?U0(s,"updateDoc",n._key,e,t,r):M0(s,"updateDoc",n._key,e),oo(i,[o.toMutation(n._key,Nt.exists(!0))])}function St(n){return oo(Dt(n.firestore,Rn),[new Ha(n._key,Nt.none())])}function Yn(n,e){const t=Dt(n.firestore,Rn),r=nt(n),i=cm(n.converter,e);return oo(t,[tm(no(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function Wt(n,...e){var t,r,i;n=Ye(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Oc(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Oc(e[o])){const d=e[o];e[o]=(t=d.next)===null||t===void 0?void 0:t.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,c,h;if(n instanceof bt)c=Dt(n.firestore,Rn),h=qa(n._key.path),u={next:d=>{e[o]&&e[o](H0(c,n,d))},error:e[o+1],complete:e[o+2]};else{const d=Dt(n,Cn);c=Dt(d.firestore,Rn),h=d._query;const p=new _l(c);u={next:g=>{e[o]&&e[o](new fm(c,p,d,g))},error:e[o+1],complete:e[o+2]},am(n._query)}return function(p,g,v,I){const E=new Xp(I),D=new jp(g,E,v);return p.asyncQueue.enqueueAndForget(async()=>Fp(await ma(p),D)),()=>{E.Za(),p.asyncQueue.enqueueAndForget(async()=>Bp(await ma(p),D))}}(il(c),h,l,u)}function oo(n,e){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>g0(await k0(r),i,s)),s.promise}(il(n),e)}function H0(n,e,t){const r=t.docs.get(e._key),i=new _l(n);return new hm(n,i,e._key,r,new si(t.hasPendingWrites,t.fromCache),e.converter)}function Mt(){return new al("serverTimestamp")}function W0(...n){return new ll("arrayUnion",n)}function G0(...n){return new ul("arrayRemove",n)}function Uc(n){return new cl("increment",n)}(function(e,t=!0){(function(i){Ur=i})($n),Wn(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rn(new Jv(r.getProvider("auth-internal")),new tw(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(Ju,"4.7.3",e),jt(Ju,"4.7.3","esm2017")})();/**
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
 */const dm="firebasestorage.googleapis.com",pm="storageBucket",K0=2*60*1e3,Q0=10*60*1e3;/**
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
 */class et extends xt{constructor(e,t,r=0){super(Bo(e),`Firebase Storage: ${t} (${Bo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function Bo(n){return"storage/"+n}function gl(){const n="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,n)}function x0(n){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function X0(n){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Y0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,n)}function J0(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $0(n){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Z0(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eE(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function tE(n){return new et(Ze.INVALID_URL,"Invalid URL '"+n+"'.")}function nE(n){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rE(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pm+"' property when initializing the app?")}function iE(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sE(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oE(n){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ya(n){return new et(Ze.INVALID_ARGUMENT,n)}function mm(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function aE(n){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fi(n,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ti(n){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Pt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pt.makeFromUrl(e,t)}catch{return new Pt(e,"")}if(r.path==="")return r;throw nE(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const h="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},I=t===dm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",D=new RegExp(`^https?://${I}/${i}/${E}`,"i"),V=[{regex:l,indices:u,postModify:s},{regex:g,indices:v,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<V.length;M++){const U=V[M],F=U.regex.exec(e);if(F){const A=F[U.indices.bucket];let b=F[U.indices.path];b||(b=""),r=new Pt(A,b),U.postModify(r);break}}if(r==null)throw tE(e);return r}}class lE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function uE(n,e,t){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function h(...E){c||(c=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,n(g,u())},E)}function p(){s&&clearTimeout(s)}function g(E,...D){if(c){p();return}if(E){p(),h.call(null,E,...D);return}if(u()||o){p(),h.call(null,E,...D);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,d(V)}let v=!1;function I(E){v||(v=!0,p(),!c&&(i!==null?(E||(l=2),clearTimeout(i),d(0)):E||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,I(!0)},t),I}function cE(n){n(!1)}/**
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
 */function hE(n){return n!==void 0}function fE(n){return typeof n=="object"&&!Array.isArray(n)}function yl(n){return typeof n=="string"||n instanceof String}function Fc(n){return vl()&&n instanceof Blob}function vl(){return typeof Blob<"u"}function Bc(n,e,t,r){if(r<e)throw ya(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ya(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function ao(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function _m(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Hn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Hn||(Hn={}));/**
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
 */function dE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class pE{constructor(e,t,r,i,s,o,l,u,c,h,d,p=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new os(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Hn.NO_ERROR,u=s.getStatus();if(!l||dE(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Hn.ABORT;r(!1,new os(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new os(c,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());hE(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=gl();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mm():eE();o(u)}else{const u=Z0();o(u)}};this.canceled_?t(!1,new os(!1,null,!0)):this.backoffId_=uE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class os{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function mE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _E(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vE(n,e,t,r,i,s,o=!0){const l=_m(n.urlParams),u=n.url+l,c=Object.assign({},n.headers);return gE(c,e),mE(c,t),_E(c,s),yE(c,r),new pE(u,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function wE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TE(...n){const e=wE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(vl())return new Blob(n);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function bE(n){if(typeof atob>"u")throw oE("base-64");return atob(n)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jo{constructor(e,t){this.data=e,this.contentType=t||null}}function IE(n,e){switch(n){case Bt.RAW:return new jo(gm(e));case Bt.BASE64:case Bt.BASE64URL:return new jo(ym(n,e));case Bt.DATA_URL:return new jo(RE(e),kE(e))}throw gl()}function gm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AE(n){let e;try{e=decodeURIComponent(n)}catch{throw fi(Bt.DATA_URL,"Malformed data URL.")}return gm(e)}function ym(n,e){switch(n){case Bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw fi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw fi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=bE(e)}catch(i){throw i.message.includes("polyfill")?i:fi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class vm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw fi(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=CE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RE(n){const e=new vm(n);return e.base64?ym(Bt.BASE64,e.rest):AE(e.rest)}function kE(n){return new vm(n).contentType}function CE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class _n{constructor(e,t){let r=0,i="";Fc(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Fc(this.data_)){const r=this.data_,i=EE(r,e,t);return i===null?null:new _n(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new _n(r,!0)}}static getBlob(...e){if(vl()){const t=e.map(r=>r instanceof _n?r.data_:r);return new _n(TE.apply(null,t))}else{const t=e.map(o=>yl(o)?IE(Bt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new _n(i,!0)}}uploadData(){return this.data_}}/**
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
 */function wm(n){let e;try{e=JSON.parse(n)}catch{return null}return fE(e)?e:null}/**
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
 */function PE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function SE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Tm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function NE(n,e){return e}class Et{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||NE}}let as=null;function DE(n){return!yl(n)||n.length<2?n:Tm(n)}function Em(){if(as)return as;const n=[];n.push(new Et("bucket")),n.push(new Et("generation")),n.push(new Et("metageneration")),n.push(new Et("name","fullPath",!0));function e(s,o){return DE(o)}const t=new Et("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Et("size");return i.xform=r,n.push(i),n.push(new Et("timeCreated")),n.push(new Et("updated")),n.push(new Et("md5Hash",null,!0)),n.push(new Et("cacheControl",null,!0)),n.push(new Et("contentDisposition",null,!0)),n.push(new Et("contentEncoding",null,!0)),n.push(new Et("contentLanguage",null,!0)),n.push(new Et("contentType",null,!0)),n.push(new Et("metadata","customMetadata",!0)),as=n,as}function VE(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function OE(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return VE(r,n),r}function bm(n,e,t){const r=wm(e);return r===null?null:OE(n,r,t)}function LE(n,e,t,r){const i=wm(e);if(i===null||!yl(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=ao(p,t,r),v=_m({alt:"media",token:c});return g+v})[0]}function ME(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class wl{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Im(n){if(!n)throw gl()}function UE(n,e){function t(r,i){const s=bm(n,i,e);return Im(s!==null),s}return t}function FE(n,e){function t(r,i){const s=bm(n,i,e);return Im(s!==null),LE(s,i,n.host,n._protocol)}return t}function Am(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=J0():i=Y0():t.getStatus()===402?i=X0(n.bucket):t.getStatus()===403?i=$0(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Rm(n){const e=Am(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=x0(n.path)),s.serverResponse=i.serverResponse,s}return t}function BE(n,e,t){const r=e.fullServerUrl(),i=ao(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,l=new wl(i,s,FE(n,t),o);return l.errorHandler=Rm(e),l}function jE(n,e){const t=e.fullServerUrl(),r=ao(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(u,c){}const l=new wl(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=Rm(e),l}function qE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function zE(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=qE(null,e)),r}function HE(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let V="";for(let M=0;M<2;M++)V=V+Math.random().toString().slice(2);return V}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=zE(e,r,i),h=ME(c,t),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",g=_n.getBlob(d,r,p);if(g===null)throw iE();const v={name:c.fullPath},I=ao(s,n.host,n._protocol),E="POST",D=n.maxUploadRetryTime,O=new wl(I,E,UE(n,t),D);return O.urlParams=v,O.headers=o,O.body=g.uploadData(),O.errorHandler=Am(e),O}class WE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw ti("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ti("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ti("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ti("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ti("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GE extends WE{initXhr(){this.xhr_.responseType="text"}}function Tl(){return new GE}/**
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
 */class Jn{constructor(e,t){this._service=e,t instanceof Pt?this._location=t:this._location=Pt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jn(e,t)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tm(this._location.path)}get storage(){return this._service}get parent(){const e=PE(this._location.path);if(e===null)return null;const t=new Pt(this._location.bucket,e);return new Jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aE(e)}}function KE(n,e,t){n._throwIfRoot("uploadBytes");const r=HE(n.storage,n._location,Em(),new _n(e,!0),t);return n.storage.makeRequestWithTokens(r,Tl).then(i=>({metadata:i,ref:n}))}function QE(n){n._throwIfRoot("getDownloadURL");const e=BE(n.storage,n._location,Em());return n.storage.makeRequestWithTokens(e,Tl).then(t=>{if(t===null)throw sE();return t})}function xE(n){n._throwIfRoot("deleteObject");const e=jE(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Tl)}function XE(n,e){const t=SE(n._location.path,e),r=new Pt(n._location.bucket,t);return new Jn(n.storage,r)}/**
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
 */function YE(n){return/^[A-Za-z]+:\/\//.test(n)}function JE(n,e){return new Jn(n,e)}function km(n,e){if(n instanceof El){const t=n;if(t._bucket==null)throw rE();const r=new Jn(t,t._bucket);return e!=null?km(r,e):r}else return e!==void 0?XE(n,e):n}function $E(n,e){if(e&&YE(e)){if(n instanceof El)return JE(n,e);throw ya("To use ref(service, url), the first argument must be a Storage instance.")}else return km(n,e)}function jc(n,e){const t=e==null?void 0:e[pm];return t==null?null:Pt.makeFromBucketSpec(t,n)}function ZE(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:id(i,n.app.options.projectId))}class El{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=K0,this._maxUploadRetryTime=Q0,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=jc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=jc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new lE(mm());{const o=vE(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const qc="@firebase/storage",zc="0.13.2";/**
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
 */const Cm="storage";function eb(n,e,t){return n=Ye(n),KE(n,e,t)}function tb(n){return n=Ye(n),QE(n)}function Hc(n){return n=Ye(n),xE(n)}function qo(n,e){return n=Ye(n),$E(n,e)}function nb(n=Ea(),e){n=Ye(n);const r=Fs(n,Cm).getImmediate({identifier:e}),i=td("storage");return i&&rb(r,...i),r}function rb(n,e,t,r={}){ZE(n,e,t,r)}function ib(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new El(t,r,i,e,$n)}function sb(){Wn(new En(Cm,ib,"PUBLIC").setMultipleInstances(!0)),jt(qc,zc,""),jt(qc,zc,"esm2017")}sb();const ob={apiKey:"AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0",authDomain:"vacation-project-001.firebaseapp.com",projectId:"vacation-project-001",storageBucket:"vacation-project-001.firebasestorage.app",messagingSenderId:"378066109890",appId:"1:378066109890:web:ff054f2f5bb97d3082825b"},bl=ad(ob),va=Qv(bl),Ae=N0(bl),zo=nb(bl),qr=Yf(null);Ly(va,n=>qr.set(n));const Bn=Yf(null);function Wc(n,e,t){const r=n.slice();return r[23]=e[t],r}function ab(n){let e,t=Re(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Kc(Wc(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=He()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);T(i,e,s)},p(i,s){if(s&7361){t=Re(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Wc(i,t,o);r[o]?r[o].p(l,s):(r[o]=Kc(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function lb(n){let e;return{c(){e=y("p"),e.textContent="참여 중인 그룹이 없습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Gc(n){let e;return{c(){e=y("span"),e.textContent="← 현재 선택됨"},m(t,r){T(t,e,r)},d(t){t&&w(e)}}}function ub(n){let e,t,r;function i(){return n[15](n[23])}return{c(){e=y("button"),e.textContent="나가기"},m(s,o){T(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&w(e),t=!1,r()}}}function cb(n){let e,t,r;function i(){return n[14](n[23])}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){T(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&w(e),t=!1,r()}}}function Kc(n){var k;let e,t,r=n[23].name+"",i,s,o,l,u,c,h=n[23].inviteCode+"",d,p,g,v,I,E,D,O,V,M,U=((k=n[6])==null?void 0:k.id)===n[23].id&&Gc();function F(){return n[13](n[23])}function A(P,N){return P[23].createdBy===P[7].uid?cb:ub}let b=A(n),R=b(n);return{c(){e=y("div"),t=y("strong"),i=j(r),s=L(),U&&U.c(),o=L(),l=y("br"),u=j(`
      초대 코드: `),c=y("code"),d=j(h),p=L(),g=y("br"),v=y("br"),I=L(),E=y("button"),E.textContent="이 그룹으로 →",D=L(),R.c(),O=L(),q(e,"class","card")},m(P,N){T(P,e,N),_(e,t),_(t,i),_(e,s),U&&U.m(e,null),_(e,o),_(e,l),_(e,u),_(e,c),_(c,d),_(e,p),_(e,g),_(e,v),_(e,I),_(e,E),_(e,D),R.m(e,null),_(e,O),V||(M=x(E,"click",F),V=!0)},p(P,N){var S;n=P,N&1&&r!==(r=n[23].name+"")&&ee(i,r),((S=n[6])==null?void 0:S.id)===n[23].id?U||(U=Gc(),U.c(),U.m(e,o)):U&&(U.d(1),U=null),N&1&&h!==(h=n[23].inviteCode+"")&&ee(d,h),b===(b=A(n))&&R?R.p(n,N):(R.d(1),R=b(n),R&&(R.c(),R.m(e,O)))},d(P){P&&w(e),U&&U.d(),R.d(),V=!1,M()}}}function Qc(n){let e,t,r,i,s;return{c(){e=y("button"),e.textContent="+ 새 그룹 만들기",t=L(),r=y("button"),r.textContent="초대 코드로 참여"},m(o,l){T(o,e,l),T(o,t,l),T(o,r,l),i||(s=[x(e,"click",n[16]),x(r,"click",n[17])],i=!0)},p:De,d(o){o&&(w(e),w(t),w(r)),i=!1,rt(s)}}}function xc(n){let e,t,r,i,s,o,l,u,c,h,d,p;return{c(){e=y("h3"),e.textContent="새 그룹 만들기",t=L(),r=y("input"),i=L(),s=y("br"),o=y("br"),l=L(),u=y("button"),u.textContent="만들기",c=L(),h=y("button"),h.textContent="취소",q(r,"placeholder","그룹 이름 (예: 2025 제주 여행)"),ae(r,"width","100%")},m(g,v){T(g,e,v),T(g,t,v),T(g,r,v),Z(r,n[3]),T(g,i,v),T(g,s,v),T(g,o,v),T(g,l,v),T(g,u,v),T(g,c,v),T(g,h,v),d||(p=[x(r,"input",n[18]),x(u,"click",n[8]),x(h,"click",n[19])],d=!0)},p(g,v){v&8&&r.value!==g[3]&&Z(r,g[3])},d(g){g&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(u),w(c),w(h)),d=!1,rt(p)}}}function Xc(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I=n[5]&&Yc(n);return{c(){e=y("h3"),e.textContent="초대 코드로 참여",t=L(),r=y("input"),i=L(),s=y("br"),o=y("br"),l=L(),u=y("button"),u.textContent="참여하기",c=L(),h=y("button"),h.textContent="취소",d=L(),I&&I.c(),p=He(),q(r,"placeholder","초대 코드 6자리")},m(E,D){T(E,e,D),T(E,t,D),T(E,r,D),Z(r,n[4]),T(E,i,D),T(E,s,D),T(E,o,D),T(E,l,D),T(E,u,D),T(E,c,D),T(E,h,D),T(E,d,D),I&&I.m(E,D),T(E,p,D),g||(v=[x(r,"input",n[20]),x(u,"click",n[9]),x(h,"click",n[21])],g=!0)},p(E,D){D&16&&r.value!==E[4]&&Z(r,E[4]),E[5]?I?I.p(E,D):(I=Yc(E),I.c(),I.m(p.parentNode,p)):I&&(I.d(1),I=null)},d(E){E&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(u),w(c),w(h),w(d),w(p)),I&&I.d(E),g=!1,rt(v)}}}function Yc(n){let e,t;return{c(){e=y("p"),t=j(n[5]),ae(e,"color","red")},m(r,i){T(r,e,i),_(e,t)},p(r,i){i&32&&ee(t,r[5])},d(r){r&&w(e)}}}function hb(n){let e,t,r,i,s,o,l,u;function c(I,E){return I[0].length===0?lb:ab}let h=c(n),d=h(n),p=!n[1]&&!n[2]&&Qc(n),g=n[1]&&xc(n),v=n[2]&&Xc(n);return{c(){e=y("h2"),e.textContent="내 그룹",t=L(),d.c(),r=L(),i=y("hr"),s=L(),p&&p.c(),o=L(),g&&g.c(),l=L(),v&&v.c(),u=He()},m(I,E){T(I,e,E),T(I,t,E),d.m(I,E),T(I,r,E),T(I,i,E),T(I,s,E),p&&p.m(I,E),T(I,o,E),g&&g.m(I,E),T(I,l,E),v&&v.m(I,E),T(I,u,E)},p(I,[E]){h===(h=c(I))&&d?d.p(I,E):(d.d(1),d=h(I),d&&(d.c(),d.m(r.parentNode,r))),!I[1]&&!I[2]?p?p.p(I,E):(p=Qc(I),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),I[1]?g?g.p(I,E):(g=xc(I),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),I[2]?v?v.p(I,E):(v=Xc(I),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i:De,o:De,d(I){I&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(u)),d.d(I),p&&p.d(I),g&&g.d(I),v&&v.d(I)}}}function fb(){return Math.random().toString(36).slice(2,8).toUpperCase()}function db(n,e,t){let r,i;nn(n,Bn,k=>t(6,r=k)),nn(n,qr,k=>t(7,i=k));let s=[],o=!1,l=!1,u="",c="",h="",d;u_(()=>{const k=Ot(Xe(Ae,"groups"),ga("memberIds","array-contains",i.uid));d=Wt(k,P=>{t(0,s=P.docs.map(N=>({id:N.id,...N.data()})))})}),Ms(()=>d==null?void 0:d());async function p(){if(!u.trim())return;const k=fb(),P=await Yn(Xe(Ae,"groups"),{name:u.trim(),createdBy:i.uid,inviteCode:k,memberIds:[i.uid],createdAt:Mt()});await Ds(nt(Ae,"groups",P.id,"members",i.uid),{displayName:i.displayName,joinedAt:Mt()}),t(3,u=""),t(1,o=!1)}async function g(){if(!c.trim())return;t(5,h="");const k=await pr(Ot(Xe(Ae,"groups"),ga("inviteCode","==",c.trim().toUpperCase())));if(k.empty){t(5,h="유효하지 않은 초대 코드입니다.");return}const P=k.docs[0];await Xn(nt(Ae,"groups",P.id),{memberIds:W0(i.uid)}),await Ds(nt(Ae,"groups",P.id,"members",i.uid),{displayName:i.displayName,joinedAt:Mt()}),t(4,c=""),t(2,l=!1)}function v(k){Bn.set(k),location.hash="#vote"}async function I(k){confirm(`"${k.name}"에서 나가시겠습니까?`)&&(await Xn(nt(Ae,"groups",k.id),{memberIds:G0(i.uid)}),await St(nt(Ae,"groups",k.id,"members",i.uid)),(r==null?void 0:r.id)===k.id&&Bn.set(null))}async function E(k){confirm(`"${k.name}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`)&&(await St(nt(Ae,"groups",k.id)),(r==null?void 0:r.id)===k.id&&Bn.set(null))}const D=k=>v(k),O=k=>E(k),V=k=>I(k),M=()=>{t(1,o=!0),t(2,l=!1)},U=()=>{t(2,l=!0),t(1,o=!1)};function F(){u=this.value,t(3,u)}const A=()=>{t(1,o=!1),t(3,u="")};function b(){c=this.value,t(4,c)}return[s,o,l,u,c,h,r,i,p,g,v,I,E,D,O,V,M,U,F,A,b,()=>{t(2,l=!1),t(4,c=""),t(5,h="")}]}class Jc extends Ri{constructor(e){super(),Ai(this,e,db,hb,Lr,{})}}const Pm="AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0";function Vr(n,e){const t=Dm(n),r=t?`place_id:${t}`:encodeURIComponent(e);return`https://www.google.com/maps/embed/v1/place?key=${Pm}&q=${r}`}function pb(n){const t=Il(n).map(Nm);if(t.length<2)return null;const r=t[0],i=t[t.length-1],s=t.slice(1,-1).join("|");let o=`https://www.google.com/maps/embed/v1/directions?key=${Pm}&origin=${r}&destination=${i}`;return s&&(o+=`&waypoints=${s}`),o}function mb(n){const t=Il(n).map(Nm);return t.length<2?null:"https://www.google.com/maps/dir/"+t.join("/")}function _b(n){return n.length-Il(n).length}function Or(n){return n?/maps\.app\.goo\.gl|goo\.gl\/maps/.test(n):!1}function Sm(n){const e=Al(n);if(!e)return{lat:null,lng:null};const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}function Nm(n){var e;return n.lat&&n.lng?`${n.lat},${n.lng}`:Al(n.mapUrl)??encodeURIComponent((e=n.placeName)==null?void 0:e.trim())}function Il(n){return n.filter(e=>e.lat&&e.lng||Al(e.mapUrl)||Dm(e.mapUrl))}function Dm(n){if(!n)return null;const e=n.match(/place_id[=:]([A-Za-z0-9_-]+)/);return e?e[1]:null}function Al(n){if(!n)return null;const e=n.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/ll=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/);return e?`${e[1]},${e[2]}`:null}function $c(n,e,t){const r=n.slice();return r[59]=e[t],r}function Zc(n,e,t){const r=n.slice();r[59]=e[t],r[65]=t;const i=r[3][r[59].id]||0;r[62]=i;const s=r[13].has(r[59].id);return r[63]=s,r}function eh(n,e,t){const r=n.slice();return r[59]=e[t],r}function th(n,e,t){const r=n.slice();return r[56]=e[t],r}function nh(n,e,t){const r=n.slice();return r[53]=e[t],r}function gb(n){let e,t=n[1].title+"",r,i,s,o,l,u,c=Vs(n[1])+"",h,d,p=Tr(n[1])?" 마감":" 진행중",g,v,I,E,D,O,V,M,U,F,A=n[1].deadline&&rh(n),b=n[1].voteType==="attraction"&&n[1].linkedDestination&&ih(n);function R(N,S){return S[0]&2&&(V=null),N[1].status==="recruiting"?bb:(V==null&&(V=!!Tr(N[1])),V?Eb:Tb)}let k=R(n,[-1,-1,-1]),P=k(n);return{c(){e=y("h2"),r=j(t),i=L(),s=y("button"),s.textContent="← 목록으로",o=L(),l=y("span"),u=j("["),h=j(c),d=j(`]
    `),g=j(p),v=L(),A&&A.c(),I=L(),b&&b.c(),E=L(),D=y("hr"),O=L(),P.c(),M=He(),ae(l,"margin-left","1rem")},m(N,S){T(N,e,S),_(e,r),T(N,i,S),T(N,s,S),T(N,o,S),T(N,l,S),_(l,u),_(l,h),_(l,d),_(l,g),T(N,v,S),A&&A.m(N,S),T(N,I,S),b&&b.m(N,S),T(N,E,S),T(N,D,S),T(N,O,S),P.m(N,S),T(N,M,S),U||(F=x(s,"click",n[27]),U=!0)},p(N,S){S[0]&2&&t!==(t=N[1].title+"")&&ee(r,t),S[0]&2&&c!==(c=Vs(N[1])+"")&&ee(h,c),S[0]&2&&p!==(p=Tr(N[1])?" 마감":" 진행중")&&ee(g,p),N[1].deadline?A?A.p(N,S):(A=rh(N),A.c(),A.m(I.parentNode,I)):A&&(A.d(1),A=null),N[1].voteType==="attraction"&&N[1].linkedDestination?b?b.p(N,S):(b=ih(N),b.c(),b.m(E.parentNode,E)):b&&(b.d(1),b=null),k===(k=R(N,S))&&P?P.p(N,S):(P.d(1),P=k(N),P&&(P.c(),P.m(M.parentNode,M)))},d(N){N&&(w(e),w(i),w(s),w(o),w(l),w(v),w(I),w(E),w(D),w(O),w(M)),A&&A.d(N),b&&b.d(N),P.d(N),U=!1,F()}}}function yb(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U,F,A,b,R,k,P,N,S,le,ne,he,X,me,oe,Ue,je,Pe,ge,We,Fe,Ge,ke,Me,ye,ce,te,K,_e,Y=(n[6].voteType==="attraction"||n[6].voteType==="accommodation")&&Mh(n),re=n[6].voteType==="attraction"&&Fh(n);return{c(){e=y("h2"),e.textContent="새 투표 만들기",t=L(),r=y("button"),r.textContent="← 뒤로",i=L(),s=y("hr"),o=L(),l=y("label"),u=j("투표 유형"),c=y("br"),h=L(),d=y("select"),p=y("option"),p.textContent="여행지 투표",g=y("option"),g.textContent="관광지 투표",v=y("option"),v.textContent="숙소 투표",I=L(),E=y("br"),D=y("br"),O=L(),Y&&Y.c(),V=L(),M=y("label"),U=j("투표 제목"),F=y("br"),A=L(),b=y("input"),R=L(),k=y("br"),P=y("br"),N=L(),S=y("label"),le=j("마감 날짜 (선택)"),ne=y("br"),he=L(),X=y("input"),me=j(`
    
  `),oe=y("label"),Ue=j("1인당 최대 투표 수"),je=y("br"),Pe=L(),ge=y("input"),We=L(),re&&re.c(),Fe=L(),Ge=y("br"),ke=y("br"),Me=L(),ye=y("button"),ye.textContent="모집 시작",ce=L(),te=y("button"),te.textContent="취소",p.__value="destination",Z(p,p.__value),g.__value="attraction",Z(g,g.__value),v.__value="accommodation",Z(v,v.__value),n[6].voteType===void 0&&Gt(()=>n[33].call(d)),q(b,"placeholder","예: 여름 여행지 투표"),ae(b,"width","100%"),q(X,"type","date"),q(ge,"type","number"),q(ge,"min","1"),q(ge,"max","10"),ae(ge,"width","4rem")},m($,ve){T($,e,ve),T($,t,ve),T($,r,ve),T($,i,ve),T($,s,ve),T($,o,ve),T($,l,ve),_(l,u),_(l,c),_(l,h),_(l,d),_(d,p),_(d,g),_(d,v),Rt(d,n[6].voteType,!0),T($,I,ve),T($,E,ve),T($,D,ve),T($,O,ve),Y&&Y.m($,ve),T($,V,ve),T($,M,ve),_(M,U),_(M,F),_(M,A),_(M,b),Z(b,n[6].title),T($,R,ve),T($,k,ve),T($,P,ve),T($,N,ve),T($,S,ve),_(S,le),_(S,ne),_(S,he),_(S,X),Z(X,n[6].deadline),T($,me,ve),T($,oe,ve),_(oe,Ue),_(oe,je),_(oe,Pe),_(oe,ge),Z(ge,n[6].maxVotesPerUser),T($,We,ve),re&&re.m($,ve),T($,Fe,ve),T($,Ge,ve),T($,ke,ve),T($,Me,ve),T($,ye,ve),T($,ce,ve),T($,te,ve),K||(_e=[x(r,"click",n[27]),x(d,"change",n[33]),x(b,"input",n[35]),x(X,"input",n[36]),x(ge,"input",n[37]),x(ye,"click",n[26]),x(te,"click",n[27])],K=!0)},p($,ve){ve[0]&64&&Rt(d,$[6].voteType),$[6].voteType==="attraction"||$[6].voteType==="accommodation"?Y?Y.p($,ve):(Y=Mh($),Y.c(),Y.m(V.parentNode,V)):Y&&(Y.d(1),Y=null),ve[0]&64&&b.value!==$[6].title&&Z(b,$[6].title),ve[0]&64&&Z(X,$[6].deadline),ve[0]&64&&mr(ge.value)!==$[6].maxVotesPerUser&&Z(ge,$[6].maxVotesPerUser),$[6].voteType==="attraction"?re?re.p($,ve):(re=Fh($),re.c(),re.m(Fe.parentNode,Fe)):re&&(re.d(1),re=null)},d($){$&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(I),w(E),w(D),w(O),w(V),w(M),w(R),w(k),w(P),w(N),w(S),w(me),w(oe),w(We),w(Fe),w(Ge),w(ke),w(Me),w(ye),w(ce),w(te)),Y&&Y.d($),re&&re.d($),K=!1,rt(_e)}}}function vb(n){let e,t,r=n[10].name+"",i,s,o,l,u,c,h,d,p;function g(E,D){return E[0].length===0?Vb:Db}let v=g(n),I=v(n);return{c(){e=y("h2"),t=j("투표 — "),i=j(r),s=L(),o=y("button"),o.textContent="+ 새 투표 만들기",l=L(),u=y("hr"),c=L(),I.c(),h=He()},m(E,D){T(E,e,D),_(e,t),_(e,i),T(E,s,D),T(E,o,D),T(E,l,D),T(E,u,D),T(E,c,D),I.m(E,D),T(E,h,D),d||(p=x(o,"click",n[30]),d=!0)},p(E,D){D[0]&1024&&r!==(r=E[10].name+"")&&ee(i,r),v===(v=g(E))&&I?I.p(E,D):(I.d(1),I=v(E),I&&(I.c(),I.m(h.parentNode,h)))},d(E){E&&(w(e),w(s),w(o),w(l),w(u),w(c),w(h)),I.d(E),d=!1,p()}}}function wb(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function rh(n){let e,t,r=Os(n[1].deadline)+"",i;return{c(){e=y("small"),t=j("· 마감일: "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=Os(s[1].deadline)+"")&&ee(i,r)},d(s){s&&w(e)}}}function ih(n){let e,t,r=n[1].linkedDestination+"",i;return{c(){e=y("small"),t=j("· 여행지: "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=s[1].linkedDestination+"")&&ee(i,r)},d(s){s&&w(e)}}}function Tb(n){let e,t,r,i;function s(p,g){return p[14]?Ab:Ib}let o=s(n),l=o(n),u=Re(n[2]),c=[];for(let p=0;p<u.length;p+=1)c[p]=fh($c(n,u,p));let h=!n[14]&&dh(n),d=n[1].createdBy===n[16].uid&&ph(n);return{c(){l.c(),e=L();for(let p=0;p<c.length;p+=1)c[p].c();t=L(),h&&h.c(),r=L(),d&&d.c(),i=He()},m(p,g){l.m(p,g),T(p,e,g);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(p,g);T(p,t,g),h&&h.m(p,g),T(p,r,g),d&&d.m(p,g),T(p,i,g)},p(p,g){if(o===(o=s(p))&&l?l.p(p,g):(l.d(1),l=o(p),l&&(l.c(),l.m(e.parentNode,e))),g[0]&835646){u=Re(p[2]);let v;for(v=0;v<u.length;v+=1){const I=$c(p,u,v);c[v]?c[v].p(I,g):(c[v]=fh(I),c[v].c(),c[v].m(t.parentNode,t))}for(;v<c.length;v+=1)c[v].d(1);c.length=u.length}p[14]?h&&(h.d(1),h=null):h?h.p(p,g):(h=dh(p),h.c(),h.m(r.parentNode,r)),p[1].createdBy===p[16].uid?d?d.p(p,g):(d=ph(p),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},d(p){p&&(w(e),w(t),w(r),w(i)),l.d(p),ot(c,p),h&&h.d(p),d&&d.d(p)}}}function Eb(n){let e;function t(s,o){return s[8].length===0?Pb:Cb}let r=t(n),i=r(n);return{c(){i.c(),e=He()},m(s,o){i.m(s,o),T(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&w(e),i.d(s)}}}function bb(n){var te;let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U,F,A,b,R,k,P,N,S,le,ne=Or(n[12].mapUrl),he,X,me,oe,Ue,je,Pe,ge,We,Fe,Ge=Re(n[2]),ke=[];for(let K=0;K<Ge.length;K+=1)ke[K]=Nh(eh(n,Ge,K));let Me=ne&&Dh(),ye=(((te=n[1])==null?void 0:te.voteType)==="accommodation"||n[6].voteType==="accommodation")&&Vh(n),ce=n[1].createdBy===n[16].uid&&Oh(n);return{c(){e=y("p"),e.textContent="후보 모집 중입니다. 그룹원 누구나 후보를 추가할 수 있습니다.",t=L();for(let K=0;K<ke.length;K+=1)ke[K].c();r=L(),i=y("hr"),s=L(),o=y("strong"),o.textContent="후보 추가",l=L(),u=y("div"),c=y("label"),h=j("장소명 *"),d=y("br"),p=L(),g=y("input"),v=L(),I=y("br"),E=L(),D=y("label"),O=j("설명"),V=y("br"),M=L(),U=y("input"),F=L(),A=y("br"),b=L(),R=y("label"),k=j("Google Maps URL (선택)"),P=y("br"),N=L(),S=y("input"),le=L(),Me&&Me.c(),he=L(),ye&&ye.c(),X=L(),me=y("br"),oe=y("br"),Ue=L(),je=y("button"),je.textContent="+ 후보 등록",Pe=L(),ce&&ce.c(),ge=He(),q(g,"placeholder","예: 제주도"),ae(g,"width","100%"),q(U,"placeholder","간단한 설명"),ae(U,"width","100%"),q(S,"placeholder","https://maps.google.com/..."),ae(S,"width","100%"),q(u,"class","card")},m(K,_e){T(K,e,_e),T(K,t,_e);for(let Y=0;Y<ke.length;Y+=1)ke[Y]&&ke[Y].m(K,_e);T(K,r,_e),T(K,i,_e),T(K,s,_e),T(K,o,_e),T(K,l,_e),T(K,u,_e),_(u,c),_(c,h),_(c,d),_(c,p),_(c,g),Z(g,n[12].placeName),_(u,v),_(u,I),_(u,E),_(u,D),_(D,O),_(D,V),_(D,M),_(D,U),Z(U,n[12].description),_(u,F),_(u,A),_(u,b),_(u,R),_(R,k),_(R,P),_(R,N),_(R,S),Z(S,n[12].mapUrl),_(u,le),Me&&Me.m(u,null),_(u,he),ye&&ye.m(u,null),_(u,X),_(u,me),_(u,oe),_(u,Ue),_(u,je),T(K,Pe,_e),ce&&ce.m(K,_e),T(K,ge,_e),We||(Fe=[x(g,"input",n[40]),x(U,"input",n[41]),x(S,"input",n[42]),x(je,"click",n[22])],We=!0)},p(K,_e){var Y;if(_e[0]&8454150){Ge=Re(K[2]);let re;for(re=0;re<Ge.length;re+=1){const $=eh(K,Ge,re);ke[re]?ke[re].p($,_e):(ke[re]=Nh($),ke[re].c(),ke[re].m(r.parentNode,r))}for(;re<ke.length;re+=1)ke[re].d(1);ke.length=Ge.length}_e[0]&4096&&g.value!==K[12].placeName&&Z(g,K[12].placeName),_e[0]&4096&&U.value!==K[12].description&&Z(U,K[12].description),_e[0]&4096&&S.value!==K[12].mapUrl&&Z(S,K[12].mapUrl),_e[0]&4096&&(ne=Or(K[12].mapUrl)),ne?Me||(Me=Dh(),Me.c(),Me.m(u,he)):Me&&(Me.d(1),Me=null),((Y=K[1])==null?void 0:Y.voteType)==="accommodation"||K[6].voteType==="accommodation"?ye?ye.p(K,_e):(ye=Vh(K),ye.c(),ye.m(u,X)):ye&&(ye.d(1),ye=null),K[1].createdBy===K[16].uid?ce?ce.p(K,_e):(ce=Oh(K),ce.c(),ce.m(ge.parentNode,ge)):ce&&(ce.d(1),ce=null)},d(K){K&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(u),w(Pe),w(ge)),ot(ke,K),Me&&Me.d(),ye&&ye.d(),ce&&ce.d(K),We=!1,rt(Fe)}}}function Ib(n){let e,t,r,i,s,o,l=Ii(n[1])+"",u,c;return{c(){e=y("p"),t=j(`선택 후 제출 버튼을 누르세요.
        (남은 선택: `),r=y("strong"),i=j(n[15]),s=j("표"),o=j(" / "),u=j(l),c=j("표)")},m(h,d){T(h,e,d),_(e,t),_(e,r),_(r,i),_(r,s),_(e,o),_(e,u),_(e,c)},p(h,d){d[0]&32768&&ee(i,h[15]),d[0]&2&&l!==(l=Ii(h[1])+"")&&ee(u,l)},d(h){h&&w(e)}}}function Ab(n){let e;return{c(){e=y("p"),e.textContent="투표 완료. 마감 후 결과를 확인하세요."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function sh(n){let e,t,r=n[59].description+"",i;return{c(){e=y("span"),t=j("— "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&4&&r!==(r=s[59].description+"")&&ee(i,r)},d(s){s&&w(e)}}}function oh(n){let e,t,r,i=n[59].price&&ah(n),s=n[59].bedCount&&lh(n),o=n[59].siteUrl&&uh(n);return{c(){i&&i.c(),e=L(),s&&s.c(),t=L(),o&&o.c(),r=He()},m(l,u){i&&i.m(l,u),T(l,e,u),s&&s.m(l,u),T(l,t,u),o&&o.m(l,u),T(l,r,u)},p(l,u){l[59].price?i?i.p(l,u):(i=ah(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),l[59].bedCount?s?s.p(l,u):(s=lh(l),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),l[59].siteUrl?o?o.p(l,u):(o=uh(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(l){l&&(w(e),w(t),w(r)),i&&i.d(l),s&&s.d(l),o&&o.d(l)}}}function ah(n){let e,t=n[59].price+"",r;return{c(){e=y("span"),r=j(t)},m(i,s){T(i,e,s),_(e,r)},p(i,s){s[0]&4&&t!==(t=i[59].price+"")&&ee(r,t)},d(i){i&&w(e)}}}function lh(n){let e,t,r=n[59].bedCount+"",i,s;return{c(){e=y("span"),t=j("· 침대 "),i=j(r),s=j("개")},m(o,l){T(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&4&&r!==(r=o[59].bedCount+"")&&ee(i,r)},d(o){o&&w(e)}}}function uh(n){let e,t,r,i,s;return{c(){e=y("span"),t=j("· "),r=y("a"),i=j("예약 사이트"),q(r,"href",s=n[59].siteUrl),q(r,"target","_blank"),q(r,"rel","noopener noreferrer")},m(o,l){T(o,e,l),_(e,t),_(e,r),_(r,i)},p(o,l){l[0]&4&&s!==(s=o[59].siteUrl)&&q(r,"href",s)},d(o){o&&w(e)}}}function Rb(n){let e,t,r,i,s,o,l=(n[5][n[59].id]||0)+"",u,c,h,d,p,g,v;function I(){return n[46](n[59])}function E(){return n[47](n[59])}return{c(){e=y("div"),t=y("button"),r=j("-"),s=L(),o=y("span"),u=j(l),c=L(),h=y("button"),d=j("+"),t.disabled=i=(n[5][n[59].id]||0)<=0&&n[15]<=0,ae(o,"display","inline-block"),ae(o,"width","1.5rem"),ae(o,"text-align","center"),h.disabled=p=(n[5][n[59].id]||0)>=0&&n[15]<=0,ae(e,"text-align","right"),ae(e,"margin-top","0.3rem")},m(D,O){T(D,e,O),_(e,t),_(t,r),_(e,s),_(e,o),_(o,u),_(e,c),_(e,h),_(h,d),g||(v=[x(t,"click",I),x(h,"click",E)],g=!0)},p(D,O){n=D,O[0]&32804&&i!==(i=(n[5][n[59].id]||0)<=0&&n[15]<=0)&&(t.disabled=i),O[0]&36&&l!==(l=(n[5][n[59].id]||0)+"")&&ee(u,l),O[0]&32804&&p!==(p=(n[5][n[59].id]||0)>=0&&n[15]<=0)&&(h.disabled=p)},d(D){D&&w(e),g=!1,rt(v)}}}function kb(n){let e,t=n[4][n[59].id]&&ch(n);return{c(){t&&t.c(),e=He()},m(r,i){t&&t.m(r,i),T(r,e,i)},p(r,i){r[4][r[59].id]?t?t.p(r,i):(t=ch(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&w(e),t&&t.d(r)}}}function ch(n){let e,t,r,i=n[4][n[59].id]+"",s,o;return{c(){e=y("div"),t=y("small"),r=j("내 선택: "),s=j(i),o=j("표"),ae(e,"text-align","right"),ae(e,"margin-top","0.3rem")},m(l,u){T(l,e,u),_(e,t),_(t,r),_(t,s),_(t,o)},p(l,u){u[0]&20&&i!==(i=l[4][l[59].id]+"")&&ee(s,i)},d(l){l&&w(e)}}}function hh(n){let e,t,r;return{c(){e=y("iframe"),q(e,"class","map-embed"),At(e.src,t=Vr(n[59].mapUrl,n[59].placeName))||q(e,"src",t),q(e,"title",r=n[59].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(i,s){T(i,e,s)},p(i,s){s[0]&4&&!At(e.src,t=Vr(i[59].mapUrl,i[59].placeName))&&q(e,"src",t),s[0]&4&&r!==(r=i[59].placeName)&&q(e,"title",r)},d(i){i&&w(e)}}}function fh(n){let e,t,r,i=n[59].placeName+"",s,o,l,u,c=(n[3][n[59].id]||0)+"",h,d,p,g,v,I,E,D=n[59].description&&sh(n),O=n[1].voteType==="accommodation"&&oh(n);function V(A,b){return A[14]?kb:Rb}let M=V(n),U=M(n),F=n[59].mapUrl&&hh(n);return{c(){e=y("div"),t=y("div"),r=y("strong"),s=j(i),o=L(),D&&D.c(),l=L(),u=y("span"),h=j(c),d=j("표"),p=L(),g=y("br"),v=L(),O&&O.c(),I=L(),U.c(),E=L(),F&&F.c(),ae(u,"float","right"),ae(g,"clear","both"),q(e,"class","card")},m(A,b){T(A,e,b),_(e,t),_(t,r),_(r,s),_(t,o),D&&D.m(t,null),_(t,l),_(t,u),_(u,h),_(u,d),_(t,p),_(t,g),_(t,v),O&&O.m(t,null),_(e,I),U.m(e,null),_(e,E),F&&F.m(e,null)},p(A,b){b[0]&4&&i!==(i=A[59].placeName+"")&&ee(s,i),A[59].description?D?D.p(A,b):(D=sh(A),D.c(),D.m(t,l)):D&&(D.d(1),D=null),b[0]&12&&c!==(c=(A[3][A[59].id]||0)+"")&&ee(h,c),A[1].voteType==="accommodation"?O?O.p(A,b):(O=oh(A),O.c(),O.m(t,null)):O&&(O.d(1),O=null),M===(M=V(A))&&U?U.p(A,b):(U.d(1),U=M(A),U&&(U.c(),U.m(e,E))),A[59].mapUrl?F?F.p(A,b):(F=hh(A),F.c(),F.m(e,null)):F&&(F.d(1),F=null)},d(A){A&&w(e),D&&D.d(),O&&O.d(),U.d(),F&&F.d()}}}function dh(n){let e,t,r,i,s,o,l;return{c(){e=y("hr"),t=L(),r=y("button"),i=j("제출"),r.disabled=s=n[9]===0},m(u,c){T(u,e,c),T(u,t,c),T(u,r,c),_(r,i),o||(l=x(r,"click",n[20]),o=!0)},p(u,c){c[0]&512&&s!==(s=u[9]===0)&&(r.disabled=s)},d(u){u&&(w(e),w(t),w(r)),o=!1,l()}}}function ph(n){let e,t,r,i,s,o,l;return{c(){e=y("hr"),t=L(),r=y("button"),r.textContent="투표 마감",i=L(),s=y("button"),s.textContent="투표 삭제"},m(u,c){T(u,e,c),T(u,t,c),T(u,r,c),T(u,i,c),T(u,s,c),o||(l=[x(r,"click",n[24]),x(s,"click",n[48])],o=!0)},p:De,d(u){u&&(w(e),w(t),w(r),w(i),w(s)),o=!1,rt(l)}}}function Cb(n){let e,t,r=Re(n[8]),i=[];for(let s=0;s<r.length;s+=1)i[s]=bh(Zc(n,r,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=L(),t=y("hr")},m(s,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(s,o);T(s,e,o),T(s,t,o)},p(s,o){if(o[0]&8474){r=Re(s[8]);let l;for(l=0;l<r.length;l+=1){const u=Zc(s,r,l);i[l]?i[l].p(u,o):(i[l]=bh(u),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=r.length}},d(s){s&&(w(e),w(t)),ot(i,s)}}}function Pb(n){let e;return{c(){e=y("p"),e.textContent="투표 없이 마감되었습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function mh(n){let e;return{c(){e=y("strong"),e.textContent="[당선]"},m(t,r){T(t,e,r)},d(t){t&&w(e)}}}function _h(n){let e,t,r=n[59].description+"",i;return{c(){e=y("span"),t=j("— "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&256&&r!==(r=s[59].description+"")&&ee(i,r)},d(s){s&&w(e)}}}function gh(n){let e,t,r=n[4][n[59].id]>1?` ×${n[4][n[59].id]}`:"",i,s;return{c(){e=y("span"),t=j("(내 선택"),i=j(r),s=j(")")},m(o,l){T(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&272&&r!==(r=o[4][o[59].id]>1?` ×${o[4][o[59].id]}`:"")&&ee(i,r)},d(o){o&&w(e)}}}function yh(n){let e,t,r,i,s,o=n[59].price&&vh(n),l=n[59].bedCount&&wh(n),u=n[59].siteUrl&&Th(n);return{c(){e=y("br"),t=L(),o&&o.c(),r=L(),l&&l.c(),i=L(),u&&u.c(),s=He()},m(c,h){T(c,e,h),T(c,t,h),o&&o.m(c,h),T(c,r,h),l&&l.m(c,h),T(c,i,h),u&&u.m(c,h),T(c,s,h)},p(c,h){c[59].price?o?o.p(c,h):(o=vh(c),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null),c[59].bedCount?l?l.p(c,h):(l=wh(c),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),c[59].siteUrl?u?u.p(c,h):(u=Th(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(w(e),w(t),w(r),w(i),w(s)),o&&o.d(c),l&&l.d(c),u&&u.d(c)}}}function vh(n){let e,t=n[59].price+"",r;return{c(){e=y("span"),r=j(t)},m(i,s){T(i,e,s),_(e,r)},p(i,s){s[0]&256&&t!==(t=i[59].price+"")&&ee(r,t)},d(i){i&&w(e)}}}function wh(n){let e,t,r=n[59].bedCount+"",i,s;return{c(){e=y("span"),t=j("· 침대 "),i=j(r),s=j("개")},m(o,l){T(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&256&&r!==(r=o[59].bedCount+"")&&ee(i,r)},d(o){o&&w(e)}}}function Th(n){let e,t,r,i,s;return{c(){e=y("span"),t=j("· "),r=y("a"),i=j("예약 사이트"),q(r,"href",s=n[59].siteUrl),q(r,"target","_blank"),q(r,"rel","noopener noreferrer")},m(o,l){T(o,e,l),_(e,t),_(e,r),_(r,i)},p(o,l){l[0]&256&&s!==(s=o[59].siteUrl)&&q(r,"href",s)},d(o){o&&w(e)}}}function Eh(n){let e,t,r;return{c(){e=y("iframe"),q(e,"class","map-embed"),At(e.src,t=Vr(n[59].mapUrl,n[59].placeName))||q(e,"src",t),q(e,"title",r=n[59].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(i,s){T(i,e,s)},p(i,s){s[0]&256&&!At(e.src,t=Vr(i[59].mapUrl,i[59].placeName))&&q(e,"src",t),s[0]&256&&r!==(r=i[59].placeName)&&q(e,"title",r)},d(i){i&&w(e)}}}function bh(n){let e,t,r,i=n[59].placeName+"",s,o,l,u,c=n[62]+"",h,d,p,g,v,I=n[63]&&mh(),E=n[59].description&&_h(n),D=n[4][n[59].id]&&gh(n),O=n[1].voteType==="accommodation"&&yh(n),V=n[59].mapUrl&&Eh(n);return{c(){e=y("div"),I&&I.c(),t=L(),r=y("strong"),s=j(i),o=L(),E&&E.c(),l=L(),u=y("span"),h=j(c),d=j("표"),p=L(),D&&D.c(),g=L(),O&&O.c(),v=L(),V&&V.c(),ae(u,"float","right"),q(e,"class","card")},m(M,U){T(M,e,U),I&&I.m(e,null),_(e,t),_(e,r),_(r,s),_(e,o),E&&E.m(e,null),_(e,l),_(e,u),_(u,h),_(u,d),_(e,p),D&&D.m(e,null),_(e,g),O&&O.m(e,null),_(e,v),V&&V.m(e,null)},p(M,U){M[63]?I||(I=mh(),I.c(),I.m(e,t)):I&&(I.d(1),I=null),U[0]&256&&i!==(i=M[59].placeName+"")&&ee(s,i),M[59].description?E?E.p(M,U):(E=_h(M),E.c(),E.m(e,l)):E&&(E.d(1),E=null),U[0]&264&&c!==(c=M[62]+"")&&ee(h,c),M[4][M[59].id]?D?D.p(M,U):(D=gh(M),D.c(),D.m(e,g)):D&&(D.d(1),D=null),M[1].voteType==="accommodation"?O?O.p(M,U):(O=yh(M),O.c(),O.m(e,v)):O&&(O.d(1),O=null),M[59].mapUrl?V?V.p(M,U):(V=Eh(M),V.c(),V.m(e,null)):V&&(V.d(1),V=null)},d(M){M&&w(e),I&&I.d(),E&&E.d(),D&&D.d(),O&&O.d(),V&&V.d()}}}function Ih(n){let e,t,r=n[59].description+"",i;return{c(){e=y("span"),t=j("— "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&4&&r!==(r=s[59].description+"")&&ee(i,r)},d(s){s&&w(e)}}}function Ah(n){let e,t,r,i,s,o=n[59].price&&Rh(n),l=n[59].bedCount&&kh(n),u=n[59].siteUrl&&Ch(n);return{c(){e=y("br"),t=L(),o&&o.c(),r=L(),l&&l.c(),i=L(),u&&u.c(),s=He()},m(c,h){T(c,e,h),T(c,t,h),o&&o.m(c,h),T(c,r,h),l&&l.m(c,h),T(c,i,h),u&&u.m(c,h),T(c,s,h)},p(c,h){c[59].price?o?o.p(c,h):(o=Rh(c),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null),c[59].bedCount?l?l.p(c,h):(l=kh(c),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),c[59].siteUrl?u?u.p(c,h):(u=Ch(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(w(e),w(t),w(r),w(i),w(s)),o&&o.d(c),l&&l.d(c),u&&u.d(c)}}}function Rh(n){let e,t=n[59].price+"",r;return{c(){e=y("span"),r=j(t)},m(i,s){T(i,e,s),_(e,r)},p(i,s){s[0]&4&&t!==(t=i[59].price+"")&&ee(r,t)},d(i){i&&w(e)}}}function kh(n){let e,t,r=n[59].bedCount+"",i,s;return{c(){e=y("span"),t=j("· 침대 "),i=j(r),s=j("개")},m(o,l){T(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&4&&r!==(r=o[59].bedCount+"")&&ee(i,r)},d(o){o&&w(e)}}}function Ch(n){let e,t,r,i,s;return{c(){e=y("span"),t=j("· "),r=y("a"),i=j("예약 사이트"),q(r,"href",s=n[59].siteUrl),q(r,"target","_blank"),q(r,"rel","noopener noreferrer")},m(o,l){T(o,e,l),_(e,t),_(e,r),_(r,i)},p(o,l){l[0]&4&&s!==(s=o[59].siteUrl)&&q(r,"href",s)},d(o){o&&w(e)}}}function Ph(n){let e,t,r;return{c(){e=y("iframe"),q(e,"class","map-embed"),At(e.src,t=Vr(n[59].mapUrl,n[59].placeName))||q(e,"src",t),q(e,"title",r=n[59].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(i,s){T(i,e,s)},p(i,s){s[0]&4&&!At(e.src,t=Vr(i[59].mapUrl,i[59].placeName))&&q(e,"src",t),s[0]&4&&r!==(r=i[59].placeName)&&q(e,"title",r)},d(i){i&&w(e)}}}function Sh(n){let e,t,r,i;function s(){return n[39](n[59])}return{c(){e=y("br"),t=y("button"),t.textContent="삭제"},m(o,l){T(o,e,l),T(o,t,l),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&(w(e),w(t)),r=!1,i()}}}function Nh(n){let e,t,r=n[59].placeName+"",i,s,o,l,u,c=n[59].description&&Ih(n),h=n[1].voteType==="accommodation"&&Ah(n),d=n[59].mapUrl&&Ph(n),p=n[59].createdBy===n[16].uid&&Sh(n);return{c(){e=y("div"),t=y("strong"),i=j(r),s=L(),c&&c.c(),o=L(),h&&h.c(),l=L(),d&&d.c(),u=L(),p&&p.c(),q(e,"class","card")},m(g,v){T(g,e,v),_(e,t),_(t,i),_(e,s),c&&c.m(e,null),_(e,o),h&&h.m(e,null),_(e,l),d&&d.m(e,null),_(e,u),p&&p.m(e,null)},p(g,v){v[0]&4&&r!==(r=g[59].placeName+"")&&ee(i,r),g[59].description?c?c.p(g,v):(c=Ih(g),c.c(),c.m(e,o)):c&&(c.d(1),c=null),g[1].voteType==="accommodation"?h?h.p(g,v):(h=Ah(g),h.c(),h.m(e,l)):h&&(h.d(1),h=null),g[59].mapUrl?d?d.p(g,v):(d=Ph(g),d.c(),d.m(e,u)):d&&(d.d(1),d=null),g[59].createdBy===g[16].uid?p?p.p(g,v):(p=Sh(g),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},d(g){g&&w(e),c&&c.d(),h&&h.d(),d&&d.d(),p&&p.d()}}}function Dh(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL(maps.app.goo.gl)은 좌표 추출이 불가합니다. Google Maps 주소창의 전체 URL을 붙여넣어 주세요.",ae(t,"color","#c00")},m(r,i){T(r,e,i),T(r,t,i)},d(r){r&&(w(e),w(t))}}}function Vh(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U,F,A,b,R;return{c(){e=y("br"),t=L(),r=y("label"),i=j("가격"),s=y("br"),o=L(),l=y("input"),u=L(),c=y("br"),h=L(),d=y("label"),p=j("침대 개수"),g=y("br"),v=L(),I=y("input"),E=L(),D=y("br"),O=L(),V=y("label"),M=j("숙소 사이트 URL (선택)"),U=y("br"),F=L(),A=y("input"),q(l,"placeholder","예: 1박 12만원"),ae(l,"width","100%"),q(I,"type","number"),q(I,"min","1"),q(I,"placeholder","예: 2"),ae(I,"width","5rem"),q(A,"placeholder","https://www.airbnb.com/..."),ae(A,"width","100%")},m(k,P){T(k,e,P),T(k,t,P),T(k,r,P),_(r,i),_(r,s),_(r,o),_(r,l),Z(l,n[12].price),T(k,u,P),T(k,c,P),T(k,h,P),T(k,d,P),_(d,p),_(d,g),_(d,v),_(d,I),Z(I,n[12].bedCount),T(k,E,P),T(k,D,P),T(k,O,P),T(k,V,P),_(V,M),_(V,U),_(V,F),_(V,A),Z(A,n[12].siteUrl),b||(R=[x(l,"input",n[43]),x(I,"input",n[44]),x(A,"input",n[45])],b=!0)},p(k,P){P[0]&4096&&l.value!==k[12].price&&Z(l,k[12].price),P[0]&4096&&mr(I.value)!==k[12].bedCount&&Z(I,k[12].bedCount),P[0]&4096&&A.value!==k[12].siteUrl&&Z(A,k[12].siteUrl)},d(k){k&&(w(e),w(t),w(r),w(u),w(c),w(h),w(d),w(E),w(D),w(O),w(V)),b=!1,rt(R)}}}function Oh(n){let e,t,r,i,s,o,l,u,c,h=n[2].length===0&&Lh();return{c(){e=y("hr"),t=L(),r=y("button"),i=j("투표 시작"),o=L(),h&&h.c(),l=He(),r.disabled=s=n[2].length===0},m(d,p){T(d,e,p),T(d,t,p),T(d,r,p),_(r,i),T(d,o,p),h&&h.m(d,p),T(d,l,p),u||(c=x(r,"click",n[21]),u=!0)},p(d,p){p[0]&4&&s!==(s=d[2].length===0)&&(r.disabled=s),d[2].length===0?h||(h=Lh(),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null)},d(d){d&&(w(e),w(t),w(r),w(o),w(l)),h&&h.d(d),u=!1,c()}}}function Lh(n){let e;return{c(){e=y("small"),e.textContent="(후보가 1개 이상이어야 합니다)"},m(t,r){T(t,e,r)},d(t){t&&w(e)}}}function Mh(n){let e,t,r,i,s,o,l;function u(d,p){return d[7].length===0?Nb:Sb}let c=u(n),h=c(n);return{c(){e=y("label"),t=j("연결할 여행지"),r=y("br"),i=L(),h.c(),s=L(),o=y("br"),l=y("br")},m(d,p){T(d,e,p),_(e,t),_(e,r),_(e,i),h.m(e,null),T(d,s,p),T(d,o,p),T(d,l,p)},p(d,p){c===(c=u(d))&&h?h.p(d,p):(h.d(1),h=c(d),h&&(h.c(),h.m(e,null)))},d(d){d&&(w(e),w(s),w(o),w(l)),h.d()}}}function Sb(n){let e,t,r,i=Re(n[7]),s=[];for(let o=0;o<i.length;o+=1)s[o]=Uh(th(n,i,o));return{c(){e=y("select");for(let o=0;o<s.length;o+=1)s[o].c();n[6].linkedDestination===void 0&&Gt(()=>n[34].call(e))},m(o,l){T(o,e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);Rt(e,n[6].linkedDestination,!0),t||(r=x(e,"change",n[34]),t=!0)},p(o,l){if(l[0]&128){i=Re(o[7]);let u;for(u=0;u<i.length;u+=1){const c=th(o,i,u);s[u]?s[u].p(c,l):(s[u]=Uh(c),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=i.length}l[0]&64&&Rt(e,o[6].linkedDestination)},d(o){o&&w(e),ot(s,o),t=!1,r()}}}function Nb(n){let e;return{c(){e=y("p"),e.textContent="마감된 여행지 투표가 없습니다. 여행지를 먼저 결정해 주세요."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Uh(n){let e,t=n[56]+"",r,i;return{c(){e=y("option"),r=j(t),e.__value=i=n[56],Z(e,e.__value)},m(s,o){T(s,e,o),_(e,r)},p(s,o){o[0]&128&&t!==(t=s[56]+"")&&ee(r,t),o[0]&128&&i!==(i=s[56])&&(e.__value=i,Z(e,e.__value))},d(s){s&&w(e)}}}function Fh(n){let e,t,r,i,s,o,l,u;return{c(){e=j(`  
    `),t=y("label"),r=j("당선 인원 수"),i=y("br"),s=L(),o=y("input"),q(o,"type","number"),q(o,"min","1"),ae(o,"width","4rem")},m(c,h){T(c,e,h),T(c,t,h),_(t,r),_(t,i),_(t,s),_(t,o),Z(o,n[6].winnersCount),l||(u=x(o,"input",n[38]),l=!0)},p(c,h){h[0]&64&&mr(o.value)!==c[6].winnersCount&&Z(o,c[6].winnersCount)},d(c){c&&(w(e),w(t)),l=!1,u()}}}function Db(n){let e,t=Re(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=qh(nh(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=He()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);T(i,e,s)},p(i,s){if(s[0]&33751041){t=Re(i[0]);let o;for(o=0;o<t.length;o+=1){const l=nh(i,t,o);r[o]?r[o].p(l,s):(r[o]=qh(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function Vb(n){let e;return{c(){e=y("p"),e.textContent="진행 중인 투표가 없습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Bh(n){let e,t,r,i;function s(...o){return n[31](n[53],...o)}return{c(){e=j(" "),t=y("button"),t.textContent="삭제"},m(o,l){T(o,e,l),T(o,t,l),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&(w(e),w(t)),r=!1,i()}}}function jh(n){let e,t=Os(n[53].deadline)+"",r,i;return{c(){e=j("마감일: "),r=j(t),i=j(" ·")},m(s,o){T(s,e,o),T(s,r,o),T(s,i,o)},p(s,o){o[0]&1&&t!==(t=Os(s[53].deadline)+"")&&ee(r,t)},d(s){s&&(w(e),w(r),w(i))}}}function qh(n){let e,t,r,i=Vs(n[53])+"",s,o,l,u,c=n[53].title+"",h,d,p,g=Hh(n[53])+"",v,I,E,D,O,V,M,U=Ii(n[53])+"",F,A,b,R,k,P=n[53].createdBy===n[16].uid&&Bh(n),N=n[53].deadline&&jh(n);function S(){return n[32](n[53])}return{c(){e=y("div"),t=y("span"),r=j("["),s=j(i),o=j("]"),l=L(),u=y("strong"),h=j(c),d=L(),p=y("span"),v=j(g),I=L(),P&&P.c(),E=L(),D=y("br"),O=L(),V=y("small"),N&&N.c(),M=j(`
          1인 `),F=j(U),A=j("표"),b=L(),ae(p,"float","right"),q(e,"class","card"),ae(e,"cursor","pointer")},m(le,ne){T(le,e,ne),_(e,t),_(t,r),_(t,s),_(t,o),_(e,l),_(e,u),_(u,h),_(e,d),_(e,p),_(p,v),_(p,I),P&&P.m(p,null),_(e,E),_(e,D),_(e,O),_(e,V),N&&N.m(V,null),_(V,M),_(V,F),_(V,A),_(e,b),R||(k=x(e,"click",S),R=!0)},p(le,ne){n=le,ne[0]&1&&i!==(i=Vs(n[53])+"")&&ee(s,i),ne[0]&1&&c!==(c=n[53].title+"")&&ee(h,c),ne[0]&1&&g!==(g=Hh(n[53])+"")&&ee(v,g),n[53].createdBy===n[16].uid?P?P.p(n,ne):(P=Bh(n),P.c(),P.m(p,null)):P&&(P.d(1),P=null),n[53].deadline?N?N.p(n,ne):(N=jh(n),N.c(),N.m(V,M)):N&&(N.d(1),N=null),ne[0]&1&&U!==(U=Ii(n[53])+"")&&ee(F,U)},d(le){le&&w(e),P&&P.d(),N&&N.d(),R=!1,k()}}}function Ob(n){let e;function t(s,o){if(!s[10])return wb;if(s[11]==="list")return vb;if(s[11]==="create")return yb;if(s[11]==="detail"&&s[1])return gb}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=He()},m(s,o){i&&i.m(s,o),T(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:De,o:De,d(s){s&&w(e),i&&i.d(s)}}}function zh(){return{placeName:"",description:"",mapUrl:"",price:"",bedCount:"",siteUrl:""}}function Lb(n){const e=n==null?void 0:n.trim();return e?/^https?:\/\//i.test(e)?e:"https://"+e:null}function Hh(n){return n.status==="recruiting"?"모집중":Tr(n)?"마감":"투표중"}function Vs(n){return n.voteType==="destination"?"여행지":n.voteType==="attraction"?"관광지":n.voteType==="accommodation"?"숙소":""}function Tr(n){return n.status==="closed"?!0:n.status!=="ongoing"||!n.deadline?!1:(n.deadline.toDate?n.deadline.toDate():new Date(n.deadline))<new Date}function Os(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"없음"}function Ii(n){return n.maxVotesPerUser??1}function Mb(n,e,t){let r,i,s,o,l,u,c,h;nn(n,qr,ie=>t(16,c=ie)),nn(n,Bn,ie=>t(10,h=ie));let d="list",p=[],g=null,v=[],I={},E={},D={},O,V,M,U={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1},F=zh(),A=[];function b(){O==null||O(),t(28,O=Wt(Ot(Xe(Ae,"groups",h.id,"votes"),mn("createdAt","desc")),ie=>{t(0,p=ie.docs.map(pe=>({id:pe.id,...pe.data()})))}))}function R(ie){t(1,g=ie),t(11,d="detail"),t(2,v=[]),t(3,I={}),t(4,E={}),t(5,D={}),V==null||V(),M==null||M(),V=Wt(Xe(Ae,"groups",h.id,"votes",ie.id,"options"),pe=>{t(2,v=pe.docs.map(qe=>({id:qe.id,...qe.data()})))}),M=Wt(Xe(Ae,"groups",h.id,"votes",ie.id,"records"),pe=>{const qe={};let Q={};pe.docs.forEach(H=>{const de=H.data();if(de.votes)Object.entries(de.votes).forEach(([Ve,Ee])=>{qe[Ve]=(qe[Ve]||0)+Ee}),H.id===c.uid&&(Q={...de.votes});else{const Ve=de.optionIds??(de.optionId?[de.optionId]:[]);Ve.forEach(Ee=>{qe[Ee]=(qe[Ee]||0)+1}),H.id===c.uid&&Ve.forEach(Ee=>{Q[Ee]=(Q[Ee]||0)+1})}}),t(3,I=qe),t(4,E=Q)})}function k(ie){if(i||Tr(g))return;const pe=D[ie]||0;if(pe>=0&&o<=0)return;const qe=pe+1;if(qe===0){const{[ie]:Q,...H}=D;t(5,D=H)}else t(5,D={...D,[ie]:qe})}function P(ie){if(i||Tr(g))return;const pe=D[ie]||0;if(pe<=0&&o<=0)return;const qe=pe-1;if(qe===0){const{[ie]:Q,...H}=D;t(5,D=H)}else t(5,D={...D,[ie]:qe})}async function N(){if(s===0||i)return;const ie=nt(Ae,"groups",h.id,"votes",g.id,"records",c.uid);await Ds(ie,{votes:{...D},totalVotes:s,votedAt:Mt()}),t(5,D={})}async function S(){v.length!==0&&await Xn(nt(Ae,"groups",h.id,"votes",g.id),{status:"ongoing"})}async function le(){var Q;if(!F.placeName.trim())return;const ie=F.mapUrl.trim()||null,{lat:pe,lng:qe}=Sm(ie);await Yn(Xe(Ae,"groups",h.id,"votes",g.id,"options"),{placeName:F.placeName.trim(),description:F.description.trim(),mapUrl:ie,lat:pe,lng:qe,price:((Q=F.price)==null?void 0:Q.trim())||null,bedCount:F.bedCount?Number(F.bedCount):null,siteUrl:Lb(F.siteUrl),createdBy:c.uid}),t(12,F=zh())}async function ne(ie){await St(nt(Ae,"groups",h.id,"votes",g.id,"options",ie.id))}async function he(){const ie=g.winnersCount??1,pe=v.map(Q=>({...Q,score:I[Q.id]||0})).filter(Q=>Q.score>0).sort((Q,H)=>H.score-Q.score);let qe=[];if(pe.length>0){const Q=pe[Math.min(ie,pe.length)-1].score;qe=pe.filter(H=>H.score>=Q).map(H=>({placeName:H.placeName,description:H.description||"",mapUrl:H.mapUrl||null,lat:H.lat||null,lng:H.lng||null}))}await Xn(nt(Ae,"groups",h.id,"votes",g.id),{status:"closed",winners:qe})}async function X(ie,pe){pe==null||pe.stopPropagation(),confirm(`"${ie.title}" 투표를 삭제하시겠습니까?`)&&(await St(nt(Ae,"groups",h.id,"votes",ie.id)),(g==null?void 0:g.id)===ie.id&&oe())}async function me(){U.title.trim()&&(U.voteType==="attraction"&&!U.linkedDestination||(await Yn(Xe(Ae,"groups",h.id,"votes"),{title:U.title.trim(),voteType:U.voteType,linkedDestination:U.voteType==="attraction"?U.linkedDestination:null,deadline:U.deadline?new Date(U.deadline):null,maxVotesPerUser:Number(U.maxVotesPerUser)||1,winnersCount:U.voteType==="attraction"?Number(U.winnersCount)||1:null,status:"recruiting",createdBy:c.uid,createdAt:Mt()}),t(6,U={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1}),t(11,d="list")))}function oe(){t(11,d="list"),t(1,g=null),t(2,v=[]),t(3,I={}),t(4,E={}),t(5,D={}),V==null||V(),M==null||M()}Ms(()=>{O==null||O(),V==null||V(),M==null||M()});const Ue=()=>t(11,d="create"),je=(ie,pe)=>X(ie,pe),Pe=ie=>R(ie);function ge(){U.voteType=jn(this),t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}function We(){U.linkedDestination=jn(this),t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}function Fe(){U.title=this.value,t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}function Ge(){U.deadline=this.value,t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}function ke(){U.maxVotesPerUser=mr(this.value),t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}function Me(){U.winnersCount=mr(this.value),t(6,U),t(0,p),t(7,A),t(10,h),t(28,O)}const ye=ie=>ne(ie);function ce(){F.placeName=this.value,t(12,F)}function te(){F.description=this.value,t(12,F)}function K(){F.mapUrl=this.value,t(12,F)}function _e(){F.price=this.value,t(12,F)}function Y(){F.bedCount=mr(this.value),t(12,F)}function re(){F.siteUrl=this.value,t(12,F)}const $=ie=>P(ie.id),ve=ie=>k(ie.id),Pn=ie=>X(g,ie);return n.$$.update=()=>{if(n.$$.dirty[0]&268436480&&(h?b():(t(0,p=[]),O==null||O())),n.$$.dirty[0]&193&&(U.voteType==="attraction"||U.voteType==="accommodation")&&(t(7,A=p.filter(ie=>{var pe;return ie.voteType==="destination"&&ie.status==="closed"&&((pe=ie.winners)==null?void 0:pe.length)}).flatMap(ie=>ie.winners.map(pe=>pe.placeName??pe))),t(6,U.linkedDestination=A[0]??"",U)),n.$$.dirty[0]&3&&g&&p.length>0){const ie=p.find(pe=>pe.id===g.id);ie&&t(1,g=ie)}n.$$.dirty[0]&16&&t(29,r=Object.values(E).reduce((ie,pe)=>ie+pe,0)),n.$$.dirty[0]&536870912&&t(14,i=r>0),n.$$.dirty[0]&32&&t(9,s=Object.values(D).reduce((ie,pe)=>ie+Math.abs(pe),0)),n.$$.dirty[0]&514&&t(15,o=g?Ii(g)-s:0),n.$$.dirty[0]&12&&t(8,l=[...v].sort((ie,pe)=>(I[pe.id]||0)-(I[ie.id]||0))),n.$$.dirty[0]&264&&l[0]&&I[l[0].id],n.$$.dirty[0]&266&&t(13,u=(()=>{if(!g)return new Set;const ie=g.winnersCount??1,pe=l.map(Q=>({id:Q.id,score:I[Q.id]||0})).filter(Q=>Q.score>0);if(pe.length===0)return new Set;const qe=pe[Math.min(ie,pe.length)-1].score;return new Set(pe.filter(Q=>Q.score>=qe).map(Q=>Q.id))})())},[p,g,v,I,E,D,U,A,l,s,h,d,F,u,i,o,c,R,k,P,N,S,le,ne,he,X,me,oe,O,r,Ue,je,Pe,ge,We,Fe,Ge,ke,Me,ye,ce,te,K,_e,Y,re,$,ve,Pn]}class Ub extends Ri{constructor(e){super(),Ai(this,e,Mb,Ob,Lr,{},null,[-1,-1,-1])}}function Wh(n,e,t){const r=n.slice();r[61]=e[t],r[67]=t;const i=r[8][r[61]]??[];r[62]=i;const s=pb(r[62]);r[63]=s;const o=mb(r[62]);r[64]=o;const l=_b(r[62]);return r[65]=l,r}function Gh(n,e,t){const r=n.slice();return r[68]=e[t],r}function Kh(n,e,t){const r=n.slice();return r[71]=e[t],r}function Qh(n,e,t){const r=n.slice();return r[68]=e[t],r}function xh(n,e,t){const r=n.slice();return r[76]=e[t],r}function Xh(n,e,t){const r=n.slice();return r[58]=e[t],r}function Yh(n,e,t){const r=n.slice();return r[55]=e[t],r}function Fb(n){let e,t=n[1].title+"",r,i,s,o,l,u,c=n[1].startDate+"",h,d,p=n[1].endDate+"",g,v,I,E,D,O,V,M,U=n[1].destination&&Jh(n),F=n[9].length>0&&$h(n),A=Re(n[2]),b=[];for(let R=0;R<A.length;R+=1)b[R]=ff(Wh(n,A,R));return{c(){e=y("h2"),r=j(t),i=L(),s=y("button"),s.textContent="← 목록으로",o=L(),U&&U.c(),l=L(),u=y("small"),h=j(c),d=j(" ~ "),g=j(p),v=L(),I=y("hr"),E=L(),F&&F.c(),D=L();for(let R=0;R<b.length;R+=1)b[R].c();O=He()},m(R,k){T(R,e,k),_(e,r),T(R,i,k),T(R,s,k),T(R,o,k),U&&U.m(R,k),T(R,l,k),T(R,u,k),_(u,h),_(u,d),_(u,g),T(R,v,k),T(R,I,k),T(R,E,k),F&&F.m(R,k),T(R,D,k);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(R,k);T(R,O,k),V||(M=x(s,"click",n[21]),V=!0)},p(R,k){if(k[0]&2&&t!==(t=R[1].title+"")&&ee(r,t),R[1].destination?U?U.p(R,k):(U=Jh(R),U.c(),U.m(l.parentNode,l)):U&&(U.d(1),U=null),k[0]&2&&c!==(c=R[1].startDate+"")&&ee(h,c),k[0]&2&&p!==(p=R[1].endDate+"")&&ee(g,p),R[9].length>0?F?F.p(R,k):(F=$h(R),F.c(),F.m(D.parentNode,D)):F&&(F.d(1),F=null),k[0]&1520068){A=Re(R[2]);let P;for(P=0;P<A.length;P+=1){const N=Wh(R,A,P);b[P]?b[P].p(N,k):(b[P]=ff(N),b[P].c(),b[P].m(O.parentNode,O))}for(;P<b.length;P+=1)b[P].d(1);b.length=A.length}},d(R){R&&(w(e),w(i),w(s),w(o),w(l),w(u),w(v),w(I),w(E),w(D),w(O)),U&&U.d(R),F&&F.d(R),ot(b,R),V=!1,M()}}}function Bb(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U,F,A,b,R,k,P,N,S,le,ne,he,X,me,oe,Ue,je,Pe,ge,We,Fe,Ge,ke;function Me(te,K){return te[10].length>0?Qb:Kb}let ye=Me(n),ce=ye(n);return{c(){e=y("h2"),e.textContent="새 일정 만들기",t=L(),r=y("button"),r.textContent="← 뒤로",i=L(),s=y("hr"),o=L(),l=y("label"),u=j("여행명 *"),c=y("br"),h=L(),d=y("input"),p=L(),g=y("br"),v=y("br"),I=L(),E=y("label"),D=j("여행지"),O=y("br"),V=L(),ce.c(),M=L(),U=y("br"),F=y("br"),A=L(),b=y("label"),R=j("시작일 *"),k=y("br"),P=L(),N=y("input"),S=j(`
   
  `),le=y("label"),ne=j("종료일 *"),he=y("br"),X=L(),me=y("input"),oe=L(),Ue=y("br"),je=y("br"),Pe=L(),ge=y("button"),ge.textContent="일정 만들기",We=L(),Fe=y("button"),Fe.textContent="취소",q(d,"placeholder","예: 제주 3박 4일"),ae(d,"width","100%"),q(N,"type","date"),q(me,"type","date")},m(te,K){T(te,e,K),T(te,t,K),T(te,r,K),T(te,i,K),T(te,s,K),T(te,o,K),T(te,l,K),_(l,u),_(l,c),_(l,h),_(l,d),Z(d,n[5].title),T(te,p,K),T(te,g,K),T(te,v,K),T(te,I,K),T(te,E,K),_(E,D),_(E,O),_(E,V),ce.m(E,null),T(te,M,K),T(te,U,K),T(te,F,K),T(te,A,K),T(te,b,K),_(b,R),_(b,k),_(b,P),_(b,N),Z(N,n[5].startDate),T(te,S,K),T(te,le,K),_(le,ne),_(le,he),_(le,X),_(le,me),Z(me,n[5].endDate),T(te,oe,K),T(te,Ue,K),T(te,je,K),T(te,Pe,K),T(te,ge,K),T(te,We,K),T(te,Fe,K),Ge||(ke=[x(r,"click",n[21]),x(d,"input",n[29]),x(N,"input",n[33]),x(me,"input",n[34]),x(ge,"click",n[15]),x(Fe,"click",n[21])],Ge=!0)},p(te,K){K[0]&1056&&d.value!==te[5].title&&Z(d,te[5].title),ye===(ye=Me(te))&&ce?ce.p(te,K):(ce.d(1),ce=ye(te),ce&&(ce.c(),ce.m(E,null))),K[0]&1056&&Z(N,te[5].startDate),K[0]&1056&&Z(me,te[5].endDate)},d(te){te&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(p),w(g),w(v),w(I),w(E),w(M),w(U),w(F),w(A),w(b),w(S),w(le),w(oe),w(Ue),w(je),w(Pe),w(ge),w(We),w(Fe)),ce.d(),Ge=!1,rt(ke)}}}function jb(n){let e,t,r=n[3].name+"",i,s,o,l,u,c,h,d,p;function g(E,D){return E[0].length===0?Xb:xb}let v=g(n),I=v(n);return{c(){e=y("h2"),t=j("여행 일정 — "),i=j(r),s=L(),o=y("button"),o.textContent="+ 새 일정 만들기",l=L(),u=y("hr"),c=L(),I.c(),h=He()},m(E,D){T(E,e,D),_(e,t),_(e,i),T(E,s,D),T(E,o,D),T(E,l,D),T(E,u,D),T(E,c,D),I.m(E,D),T(E,h,D),d||(p=x(o,"click",n[26]),d=!0)},p(E,D){D[0]&8&&r!==(r=E[3].name+"")&&ee(i,r),v===(v=g(E))&&I?I.p(E,D):(I.d(1),I=v(E),I&&(I.c(),I.m(h.parentNode,h)))},d(E){E&&(w(e),w(s),w(o),w(l),w(u),w(c),w(h)),I.d(E),d=!1,p()}}}function qb(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Jh(n){let e,t,r=n[1].destination+"",i;return{c(){e=y("span"),t=j("· "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&2&&r!==(r=s[1].destination+"")&&ee(i,r)},d(s){s&&w(e)}}}function $h(n){let e,t,r,i,s,o,l,u,c,h=Re(n[9]),d=[];for(let p=0;p<h.length;p+=1)d[p]=Zh(xh(n,h,p));return{c(){e=y("div"),t=y("strong"),t.textContent="투표 당선 관광지",r=j(` —
      `),i=y("select"),s=y("option"),s.textContent="선택 시 항목 추가폼에 자동입력";for(let p=0;p<d.length;p+=1)d[p].c();o=L(),l=y("hr"),s.__value="",Z(s,s.__value),q(e,"class","card")},m(p,g){T(p,e,g),_(e,t),_(e,r),_(e,i),_(i,s);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(i,null);T(p,o,g),T(p,l,g),u||(c=x(i,"change",n[35]),u=!0)},p(p,g){if(g[0]&512){h=Re(p[9]);let v;for(v=0;v<h.length;v+=1){const I=xh(p,h,v);d[v]?d[v].p(I,g):(d[v]=Zh(I),d[v].c(),d[v].m(i,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=h.length}},d(p){p&&(w(e),w(o),w(l)),ot(d,p),u=!1,c()}}}function Zh(n){let e,t=n[76].placeName+"",r,i=n[76].description?` — ${n[76].description}`:"",s,o;return{c(){e=y("option"),r=j(t),s=j(i),e.__value=o=n[76].placeName,Z(e,e.__value)},m(l,u){T(l,e,u),_(e,r),_(e,s)},p(l,u){u[0]&512&&t!==(t=l[76].placeName+"")&&ee(r,t),u[0]&512&&i!==(i=l[76].description?` — ${l[76].description}`:"")&&ee(s,i),u[0]&512&&o!==(o=l[76].placeName)&&(e.__value=o,Z(e,e.__value))},d(l){l&&w(e)}}}function zb(n){let e,t,r,i,s,o,l=n[71].category+"",u,c,h,d,p=n[71].placeName+"",g,v,I,E,D,O,V,M,U,F=n[71].time&&ef(n),A=n[71].memo&&tf(n);function b(){return n[42](n[71])}function R(){return n[43](n[71])}return{c(){e=y("div"),t=y("div"),r=y("div"),F&&F.c(),i=L(),s=y("span"),o=j("["),u=j(l),c=j("]"),h=L(),d=y("strong"),g=j(p),v=L(),A&&A.c(),I=L(),E=y("div"),D=y("button"),D.textContent="수정",O=L(),V=y("button"),V.textContent="삭제",ae(E,"white-space","nowrap"),ae(E,"margin-left","0.5rem"),ae(t,"display","flex"),ae(t,"justify-content","space-between"),ae(t,"align-items","flex-start"),q(e,"class","card")},m(k,P){T(k,e,P),_(e,t),_(t,r),F&&F.m(r,null),_(r,i),_(r,s),_(s,o),_(s,u),_(s,c),_(r,h),_(r,d),_(d,g),_(r,v),A&&A.m(r,null),_(t,I),_(t,E),_(E,D),_(E,O),_(E,V),M||(U=[x(D,"click",b),x(V,"click",R)],M=!0)},p(k,P){n=k,n[71].time?F?F.p(n,P):(F=ef(n),F.c(),F.m(r,i)):F&&(F.d(1),F=null),P[0]&260&&l!==(l=n[71].category+"")&&ee(u,l),P[0]&260&&p!==(p=n[71].placeName+"")&&ee(g,p),n[71].memo?A?A.p(n,P):(A=tf(n),A.c(),A.m(r,null)):A&&(A.d(1),A=null)},d(k){k&&w(e),F&&F.d(),A&&A.d(),M=!1,rt(U)}}}function Hb(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U=Or(n[6].mapUrl),F,A,b,R,k,P,N,S,le=Re(n[12]),ne=[];for(let X=0;X<le.length;X+=1)ne[X]=nf(Qh(n,le,X));let he=U&&rf();return{c(){e=y("div"),t=y("input"),r=j(`
           
          `),i=y("select");for(let X=0;X<ne.length;X+=1)ne[X].c();s=L(),o=y("br"),l=y("br"),u=L(),c=y("input"),h=L(),d=y("br"),p=y("br"),g=L(),v=y("textarea"),I=L(),E=y("br"),D=y("br"),O=L(),V=y("input"),M=L(),he&&he.c(),F=L(),A=y("br"),b=L(),R=y("button"),R.textContent="저장",k=L(),P=y("button"),P.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Gt(()=>n[37].call(i)),q(c,"placeholder","장소명 *"),ae(c,"width","100%"),q(v,"placeholder","메모"),q(v,"rows","2"),ae(v,"width","100%"),q(V,"placeholder","Google Maps URL (선택)"),ae(V,"width","100%"),q(e,"class","card")},m(X,me){T(X,e,me),_(e,t),Z(t,n[6].time),_(e,r),_(e,i);for(let oe=0;oe<ne.length;oe+=1)ne[oe]&&ne[oe].m(i,null);Rt(i,n[6].category,!0),_(e,s),_(e,o),_(e,l),_(e,u),_(e,c),Z(c,n[6].placeName),_(e,h),_(e,d),_(e,p),_(e,g),_(e,v),Z(v,n[6].memo),_(e,I),_(e,E),_(e,D),_(e,O),_(e,V),Z(V,n[6].mapUrl),_(e,M),he&&he.m(e,null),_(e,F),_(e,A),_(e,b),_(e,R),_(e,k),_(e,P),N||(S=[x(t,"input",n[36]),x(i,"change",n[37]),x(c,"input",n[38]),x(v,"input",n[39]),x(V,"input",n[40]),x(R,"click",n[18]),x(P,"click",n[41])],N=!0)},p(X,me){if(me[0]&4160&&Z(t,X[6].time),me[0]&4096){le=Re(X[12]);let oe;for(oe=0;oe<le.length;oe+=1){const Ue=Qh(X,le,oe);ne[oe]?ne[oe].p(Ue,me):(ne[oe]=nf(Ue),ne[oe].c(),ne[oe].m(i,null))}for(;oe<ne.length;oe+=1)ne[oe].d(1);ne.length=le.length}me[0]&4160&&Rt(i,X[6].category),me[0]&4160&&c.value!==X[6].placeName&&Z(c,X[6].placeName),me[0]&4160&&Z(v,X[6].memo),me[0]&4160&&V.value!==X[6].mapUrl&&Z(V,X[6].mapUrl),me[0]&64&&(U=Or(X[6].mapUrl)),U?he||(he=rf(),he.c(),he.m(e,F)):he&&(he.d(1),he=null)},d(X){X&&w(e),ot(ne,X),he&&he.d(),N=!1,rt(S)}}}function ef(n){let e,t=n[71].time+"",r,i;return{c(){e=y("strong"),r=j(t),i=j(" ·")},m(s,o){T(s,e,o),_(e,r),T(s,i,o)},p(s,o){o[0]&260&&t!==(t=s[71].time+"")&&ee(r,t)},d(s){s&&(w(e),w(i))}}}function tf(n){let e,t,r=n[71].memo+"",i;return{c(){e=y("br"),t=y("small"),i=j(r)},m(s,o){T(s,e,o),T(s,t,o),_(t,i)},p(s,o){o[0]&260&&r!==(r=s[71].memo+"")&&ee(i,r)},d(s){s&&(w(e),w(t))}}}function nf(n){let e,t=n[68]+"",r;return{c(){e=y("option"),r=j(t),e.__value=n[68],Z(e,e.__value)},m(i,s){T(i,e,s),_(e,r)},p:De,d(i){i&&w(e)}}}function rf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ae(t,"color","#c00")},m(r,i){T(r,e,i),T(r,t,i)},d(r){r&&(w(e),w(t))}}}function sf(n){let e;function t(s,o){return s[6]&&!s[6].isNew&&s[6].id===s[71].id?Hb:zb}let r=t(n),i=r(n);return{c(){i.c(),e=He()},m(s,o){i.m(s,o),T(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&w(e),i.d(s)}}}function of(n){let e;return{c(){e=y("p"),e.textContent="아직 일정 없음",ae(e,"margin-left","0.5rem"),ae(e,"color","#666")},m(t,r){T(t,e,r)},d(t){t&&w(e)}}}function af(n){let e,t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기",r,i,s,o,l,u,c,h=n[7].has(n[61]),d,p,g;function v(){return n[44](n[61])}let I=n[65]>0&&lf(n),E=h&&uf(n);return{c(){e=y("button"),r=j(t),i=L(),s=y("a"),o=j("↗ Google Maps에서 열기"),u=L(),I&&I.c(),c=L(),E&&E.c(),d=He(),q(s,"href",l=n[64]),q(s,"target","_blank"),q(s,"rel","noopener noreferrer")},m(D,O){T(D,e,O),_(e,r),T(D,i,O),T(D,s,O),_(s,o),T(D,u,O),I&&I.m(D,O),T(D,c,O),E&&E.m(D,O),T(D,d,O),p||(g=x(e,"click",v),p=!0)},p(D,O){n=D,O[0]&132&&t!==(t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기")&&ee(r,t),O[0]&260&&l!==(l=n[64])&&q(s,"href",l),n[65]>0?I?I.p(n,O):(I=lf(n),I.c(),I.m(c.parentNode,c)):I&&(I.d(1),I=null),O[0]&132&&(h=n[7].has(n[61])),h?E?E.p(n,O):(E=uf(n),E.c(),E.m(d.parentNode,d)):E&&(E.d(1),E=null)},d(D){D&&(w(e),w(i),w(s),w(u),w(c),w(d)),I&&I.d(D),E&&E.d(D),p=!1,g()}}}function lf(n){let e,t,r=n[65]+"",i,s;return{c(){e=y("small"),t=j("(지도 링크 없는 항목 "),i=j(r),s=j("개 경로 제외)")},m(o,l){T(o,e,l),_(e,t),_(e,i),_(e,s)},p(o,l){l[0]&260&&r!==(r=o[65]+"")&&ee(i,r)},d(o){o&&w(e)}}}function uf(n){let e,t,r;return{c(){e=y("iframe"),q(e,"class","map-embed"),At(e.src,t=n[63])||q(e,"src",t),q(e,"title",r=n[61]+" 경로"),e.allowFullscreen=!0,q(e,"loading","lazy")},m(i,s){T(i,e,s)},p(i,s){s[0]&260&&!At(e.src,t=i[63])&&q(e,"src",t),s[0]&4&&r!==(r=i[61]+" 경로")&&q(e,"title",r)},d(i){i&&w(e)}}}function Wb(n){let e,t,r;function i(){return n[51](n[61])}return{c(){e=y("button"),e.textContent="+ 항목 추가"},m(s,o){T(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&w(e),t=!1,r()}}}function Gb(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v,I,E,D,O,V,M,U=Or(n[6].mapUrl),F,A,b,R,k,P,N,S,le=Re(n[12]),ne=[];for(let X=0;X<le.length;X+=1)ne[X]=cf(Gh(n,le,X));let he=U&&hf();return{c(){e=y("div"),t=y("input"),r=j(`
         
        `),i=y("select");for(let X=0;X<ne.length;X+=1)ne[X].c();s=L(),o=y("br"),l=y("br"),u=L(),c=y("input"),h=L(),d=y("br"),p=y("br"),g=L(),v=y("textarea"),I=L(),E=y("br"),D=y("br"),O=L(),V=y("input"),M=L(),he&&he.c(),F=L(),A=y("br"),b=L(),R=y("button"),R.textContent="저장",k=L(),P=y("button"),P.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Gt(()=>n[46].call(i)),q(c,"placeholder","장소명 *"),ae(c,"width","100%"),q(v,"placeholder","메모"),q(v,"rows","2"),ae(v,"width","100%"),q(V,"placeholder","Google Maps URL (선택)"),ae(V,"width","100%"),q(e,"class","card")},m(X,me){T(X,e,me),_(e,t),Z(t,n[6].time),_(e,r),_(e,i);for(let oe=0;oe<ne.length;oe+=1)ne[oe]&&ne[oe].m(i,null);Rt(i,n[6].category,!0),_(e,s),_(e,o),_(e,l),_(e,u),_(e,c),Z(c,n[6].placeName),_(e,h),_(e,d),_(e,p),_(e,g),_(e,v),Z(v,n[6].memo),_(e,I),_(e,E),_(e,D),_(e,O),_(e,V),Z(V,n[6].mapUrl),_(e,M),he&&he.m(e,null),_(e,F),_(e,A),_(e,b),_(e,R),_(e,k),_(e,P),N||(S=[x(t,"input",n[45]),x(i,"change",n[46]),x(c,"input",n[47]),x(v,"input",n[48]),x(V,"input",n[49]),x(R,"click",n[18]),x(P,"click",n[50])],N=!0)},p(X,me){if(me[0]&4160&&Z(t,X[6].time),me[0]&4096){le=Re(X[12]);let oe;for(oe=0;oe<le.length;oe+=1){const Ue=Gh(X,le,oe);ne[oe]?ne[oe].p(Ue,me):(ne[oe]=cf(Ue),ne[oe].c(),ne[oe].m(i,null))}for(;oe<ne.length;oe+=1)ne[oe].d(1);ne.length=le.length}me[0]&4160&&Rt(i,X[6].category),me[0]&4160&&c.value!==X[6].placeName&&Z(c,X[6].placeName),me[0]&4160&&Z(v,X[6].memo),me[0]&4160&&V.value!==X[6].mapUrl&&Z(V,X[6].mapUrl),me[0]&64&&(U=Or(X[6].mapUrl)),U?he||(he=hf(),he.c(),he.m(e,F)):he&&(he.d(1),he=null)},d(X){X&&w(e),ot(ne,X),he&&he.d(),N=!1,rt(S)}}}function cf(n){let e,t=n[68]+"",r;return{c(){e=y("option"),r=j(t),e.__value=n[68],Z(e,e.__value)},m(i,s){T(i,e,s),_(e,r)},p:De,d(i){i&&w(e)}}}function hf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ae(t,"color","#c00")},m(r,i){T(r,e,i),T(r,t,i)},d(r){r&&(w(e),w(t))}}}function ff(n){var D,O;let e,t=yf(n[61],n[67])+"",r,i,s,o,l,u,c,h=Re(n[8][n[61]]??[]),d=[];for(let V=0;V<h.length;V+=1)d[V]=sf(Kh(n,h,V));let p=(n[8][n[61]]??[]).length===0&&!((D=n[6])!=null&&D.isNew&&((O=n[6])==null?void 0:O.date)===n[61])&&of(),g=n[63]&&af(n);function v(V,M){var U,F;return(U=V[6])!=null&&U.isNew&&((F=V[6])==null?void 0:F.date)===V[61]?Gb:Wb}let I=v(n),E=I(n);return{c(){e=y("h3"),r=j(t),i=L();for(let V=0;V<d.length;V+=1)d[V].c();s=L(),p&&p.c(),o=L(),g&&g.c(),l=L(),E.c(),u=L(),c=y("hr")},m(V,M){T(V,e,M),_(e,r),T(V,i,M);for(let U=0;U<d.length;U+=1)d[U]&&d[U].m(V,M);T(V,s,M),p&&p.m(V,M),T(V,o,M),g&&g.m(V,M),T(V,l,M),E.m(V,M),T(V,u,M),T(V,c,M)},p(V,M){var U,F;if(M[0]&4&&t!==(t=yf(V[61],V[67])+"")&&ee(r,t),M[0]&1446212){h=Re(V[8][V[61]]??[]);let A;for(A=0;A<h.length;A+=1){const b=Kh(V,h,A);d[A]?d[A].p(b,M):(d[A]=sf(b),d[A].c(),d[A].m(s.parentNode,s))}for(;A<d.length;A+=1)d[A].d(1);d.length=h.length}(V[8][V[61]]??[]).length===0&&!((U=V[6])!=null&&U.isNew&&((F=V[6])==null?void 0:F.date)===V[61])?p||(p=of(),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),V[63]?g?g.p(V,M):(g=af(V),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),I===(I=v(V))&&E?E.p(V,M):(E.d(1),E=I(V),E&&(E.c(),E.m(u.parentNode,u)))},d(V){V&&(w(e),w(i),w(s),w(o),w(l),w(u),w(c)),ot(d,V),p&&p.d(V),g&&g.d(V),E.d(V)}}}function Kb(n){let e,t,r;return{c(){e=y("input"),q(e,"placeholder","예: 제주도")},m(i,s){T(i,e,s),Z(e,n[5].destination),t||(r=x(e,"input",n[32]),t=!0)},p(i,s){s[0]&1056&&e.value!==i[5].destination&&Z(e,i[5].destination)},d(i){i&&w(e),t=!1,r()}}}function Qb(n){let e,t,r,i,s,o,l=Re(n[10]),u=[];for(let h=0;h<l.length;h+=1)u[h]=df(Xh(n,l,h));let c=!n[5].destination&&pf(n);return{c(){e=y("select"),t=y("option"),t.textContent="직접 입력";for(let h=0;h<u.length;h+=1)u[h].c();r=L(),c&&c.c(),i=He(),t.__value="",Z(t,t.__value),n[5].destination===void 0&&Gt(()=>n[30].call(e))},m(h,d){T(h,e,d),_(e,t);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(e,null);Rt(e,n[5].destination,!0),T(h,r,d),c&&c.m(h,d),T(h,i,d),s||(o=x(e,"change",n[30]),s=!0)},p(h,d){if(d[0]&1024){l=Re(h[10]);let p;for(p=0;p<l.length;p+=1){const g=Xh(h,l,p);u[p]?u[p].p(g,d):(u[p]=df(g),u[p].c(),u[p].m(e,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=l.length}d[0]&1056&&Rt(e,h[5].destination),h[5].destination?c&&(c.d(1),c=null):c?c.p(h,d):(c=pf(h),c.c(),c.m(i.parentNode,i))},d(h){h&&(w(e),w(r),w(i)),ot(u,h),c&&c.d(h),s=!1,o()}}}function df(n){let e,t=n[58]+"",r,i;return{c(){e=y("option"),r=j(t),e.__value=i=n[58],Z(e,e.__value)},m(s,o){T(s,e,o),_(e,r)},p(s,o){o[0]&1024&&t!==(t=s[58]+"")&&ee(r,t),o[0]&1024&&i!==(i=s[58])&&(e.__value=i,Z(e,e.__value))},d(s){s&&w(e)}}}function pf(n){let e,t,r;return{c(){e=y("input"),q(e,"placeholder","여행지 직접 입력"),ae(e,"margin-top","0.3rem")},m(i,s){T(i,e,s),Z(e,n[5].destination),t||(r=x(e,"input",n[31]),t=!0)},p(i,s){s[0]&1056&&e.value!==i[5].destination&&Z(e,i[5].destination)},d(i){i&&w(e),t=!1,r()}}}function xb(n){let e,t=Re(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=gf(Yh(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=He()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);T(i,e,s)},p(i,s){if(s[0]&542721){t=Re(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Yh(i,t,o);r[o]?r[o].p(l,s):(r[o]=gf(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function Xb(n){let e;return{c(){e=y("p"),e.textContent="생성된 일정이 없습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function mf(n){let e,t,r=n[55].destination+"",i;return{c(){e=y("span"),t=j("· "),i=j(r)},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&1&&r!==(r=s[55].destination+"")&&ee(i,r)},d(s){s&&w(e)}}}function _f(n){let e,t,r,i;function s(...o){return n[27](n[55],...o)}return{c(){e=y("span"),t=y("button"),t.textContent="삭제",ae(e,"float","right")},m(o,l){T(o,e,l),_(e,t),r||(i=x(t,"click",s),r=!0)},p(o,l){n=o},d(o){o&&w(e),r=!1,i()}}}function gf(n){let e,t,r=n[55].title+"",i,s,o,l,u,c,h,d=n[55].startDate+"",p,g,v=n[55].endDate+"",I,E,D,O,V=n[55].destination&&mf(n),M=n[55].createdBy===n[11].uid&&_f(n);function U(){return n[28](n[55])}return{c(){e=y("div"),t=y("strong"),i=j(r),s=L(),V&&V.c(),o=L(),M&&M.c(),l=L(),u=y("br"),c=L(),h=y("small"),p=j(d),g=j(" ~ "),I=j(v),E=L(),q(e,"class","card"),ae(e,"cursor","pointer")},m(F,A){T(F,e,A),_(e,t),_(t,i),_(e,s),V&&V.m(e,null),_(e,o),M&&M.m(e,null),_(e,l),_(e,u),_(e,c),_(e,h),_(h,p),_(h,g),_(h,I),_(e,E),D||(O=x(e,"click",U),D=!0)},p(F,A){n=F,A[0]&1&&r!==(r=n[55].title+"")&&ee(i,r),n[55].destination?V?V.p(n,A):(V=mf(n),V.c(),V.m(e,o)):V&&(V.d(1),V=null),n[55].createdBy===n[11].uid?M?M.p(n,A):(M=_f(n),M.c(),M.m(e,l)):M&&(M.d(1),M=null),A[0]&1&&d!==(d=n[55].startDate+"")&&ee(p,d),A[0]&1&&v!==(v=n[55].endDate+"")&&ee(I,v)},d(F){F&&w(e),V&&V.d(),M&&M.d(),D=!1,O()}}}function Yb(n){let e;function t(s,o){if(!s[3])return qb;if(s[4]==="list")return jb;if(s[4]==="create")return Bb;if(s[4]==="detail"&&s[1])return Fb}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=He()},m(s,o){i&&i.m(s,o),T(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:De,o:De,d(s){s&&w(e),i&&i.d(s)}}}function Jb(n,e){const t=[],[r,i,s]=n.split("-").map(Number),[o,l,u]=e.split("-").map(Number),c=new Date(r,i-1,s),h=new Date(o,l-1,u);for(let d=new Date(c);d<=h;d.setDate(d.getDate()+1)){const p=d.getFullYear(),g=String(d.getMonth()+1).padStart(2,"0"),v=String(d.getDate()).padStart(2,"0");t.push(`${p}-${g}-${v}`)}return t}function yf(n,e){const[t,r,i]=n.split("-").map(Number),o=new Date(t,r-1,i).toLocaleDateString("ko-KR",{weekday:"short"});return`Day ${e+1} — ${t}.${String(r).padStart(2,"0")}.${String(i).padStart(2,"0")} (${o})`}function $b(n,e,t){let r,i,s,o,l;nn(n,Bn,Q=>t(3,o=Q)),nn(n,qr,Q=>t(11,l=Q));const u=["이동","식사","관광","숙박","기타"];let c="list",h=[],d=null,p=[],g=[],v,I,E,D={title:"",destination:"",startDate:"",endDate:""},O=null,V=new Set;function M(Q){V.has(Q)?V.delete(Q):V.add(Q),t(7,V)}let U=[];function F(){v==null||v(),t(23,v=Wt(Ot(Xe(Ae,"groups",o.id,"trips"),mn("createdAt","desc")),Q=>{t(0,h=Q.docs.map(H=>({id:H.id,...H.data()})))}))}function A(){E==null||E(),t(24,E=Wt(Ot(Xe(Ae,"groups",o.id,"votes"),ga("status","==","closed")),Q=>{t(25,U=Q.docs.map(H=>({id:H.id,...H.data()})))}))}function b(Q){t(1,d=Q),t(4,c="detail"),t(22,p=[]),t(6,O=null),I==null||I(),t(2,g=Jb(Q.startDate,Q.endDate)),I=Wt(Ot(Xe(Ae,"groups",o.id,"trips",Q.id,"items"),mn("createdAt","asc")),H=>{t(22,p=H.docs.map(de=>({id:de.id,...de.data()})))})}async function R(){!D.title.trim()||!D.startDate||!D.endDate||D.startDate>D.endDate||(await Yn(Xe(Ae,"groups",o.id,"trips"),{title:D.title.trim(),destination:D.destination.trim()||null,startDate:D.startDate,endDate:D.endDate,createdBy:l.uid,createdAt:Mt()}),t(5,D={title:"",destination:"",startDate:"",endDate:""}),t(4,c="list"))}function k(Q){t(6,O={isNew:!0,date:Q,id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""})}function P(Q){t(6,O={isNew:!1,...Q})}async function N(){var Ee;if(!O.placeName.trim())return;const Q=((Ee=O.mapUrl)==null?void 0:Ee.trim())||null,{lat:H,lng:de}=Sm(Q),Ve={date:O.date,time:O.time||null,placeName:O.placeName.trim(),category:O.category,memo:O.memo.trim(),mapUrl:Q,lat:H,lng:de,updatedAt:Mt()};O.isNew?await Yn(Xe(Ae,"groups",o.id,"trips",d.id,"items"),{...Ve,createdBy:l.uid,createdByName:l.displayName,createdAt:Mt()}):await Xn(nt(Ae,"groups",o.id,"trips",d.id,"items",O.id),Ve),t(6,O=null)}async function S(Q,H){H==null||H.stopPropagation(),confirm(`"${Q.title}" 일정을 삭제하시겠습니까?`)&&(await St(nt(Ae,"groups",o.id,"trips",Q.id)),(d==null?void 0:d.id)===Q.id&&ne())}async function le(Q){t(22,p=p.filter(H=>H.id!==Q.id)),await St(nt(Ae,"groups",o.id,"trips",d.id,"items",Q.id))}function ne(){t(4,c="list"),t(1,d=null),t(22,p=[]),t(2,g=[]),t(6,O=null),I==null||I()}Ms(()=>{v==null||v(),I==null||I(),E==null||E()});const he=()=>t(4,c="create"),X=(Q,H)=>S(Q,H),me=Q=>b(Q);function oe(){D.title=this.value,t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}function Ue(){D.destination=jn(this),t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}function je(){D.destination=this.value,t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}function Pe(){D.destination=this.value,t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}function ge(){D.startDate=this.value,t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}function We(){D.endDate=this.value,t(5,D),t(10,r),t(25,U),t(3,o),t(23,v),t(24,E)}const Fe=Q=>{const H=i.find(de=>de.placeName===Q.target.value);H&&(O||t(6,O={isNew:!0,date:g[0]??"",id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""}),t(6,O={...O,placeName:H.placeName,memo:H.description||"",mapUrl:H.mapUrl||""}),Q.target.value="")};function Ge(){O.time=this.value,t(6,O),t(12,u)}function ke(){O.category=jn(this),t(6,O),t(12,u)}function Me(){O.placeName=this.value,t(6,O),t(12,u)}function ye(){O.memo=this.value,t(6,O),t(12,u)}function ce(){O.mapUrl=this.value,t(6,O),t(12,u)}const te=()=>t(6,O=null),K=Q=>P(Q),_e=Q=>le(Q),Y=Q=>M(Q);function re(){O.time=this.value,t(6,O),t(12,u)}function $(){O.category=jn(this),t(6,O),t(12,u)}function ve(){O.placeName=this.value,t(6,O),t(12,u)}function Pn(){O.memo=this.value,t(6,O),t(12,u)}function ie(){O.mapUrl=this.value,t(6,O),t(12,u)}const pe=()=>t(6,O=null),qe=Q=>k(Q);return n.$$.update=()=>{if(n.$$.dirty[0]&25165832&&(o?(F(),A()):(t(0,h=[]),t(25,U=[]),v==null||v(),E==null||E())),n.$$.dirty[0]&33554432&&t(10,r=[...new Set(U.filter(Q=>{var H;return Q.voteType==="destination"&&((H=Q.winners)==null?void 0:H.length)}).flatMap(Q=>Q.winners.map(H=>H.placeName??H)))]),n.$$.dirty[0]&3&&d&&h.length>0){const Q=h.find(H=>H.id===d.id);Q&&t(1,d=Q)}n.$$.dirty[0]&33554434&&t(9,i=d?U.filter(Q=>{var H;return Q.voteType==="attraction"&&Q.linkedDestination===d.destination&&((H=Q.winners)==null?void 0:H.length)}).flatMap(Q=>Q.winners):[]),n.$$.dirty[0]&4194308&&t(8,s=Object.fromEntries(g.map(Q=>{const H=p.filter(de=>de.date===Q);return[Q,[...H.filter(de=>de.time).sort((de,Ve)=>de.time.localeCompare(Ve.time)),...H.filter(de=>!de.time)]]})))},[h,d,g,o,c,D,O,V,s,i,r,l,u,M,b,R,k,P,N,S,le,ne,p,v,E,U,he,X,me,oe,Ue,je,Pe,ge,We,Fe,Ge,ke,Me,ye,ce,te,K,_e,Y,re,$,ve,Pn,ie,pe,qe]}class Zb extends Ri{constructor(e){super(),Ai(this,e,$b,Yb,Lr,{},null,[-1,-1,-1])}}async function eI(n){if(!n.type.match(/^image\/(jpeg|png)$/))return n;const e=await createImageBitmap(n),t=document.createElement("canvas");let{width:r,height:i}=e;const s=1920;if(r>s||i>s){const o=Math.min(s/r,s/i);r=Math.round(r*o),i=Math.round(i*o)}return t.width=r,t.height=i,t.getContext("2d").drawImage(e,0,0,r,i),new Promise(o=>{t.toBlob(l=>o(l??n),"image/jpeg",.8)})}function vf(n,e,t){const r=n.slice();return r[73]=e[t],r}function wf(n,e,t){const r=n.slice();return r[65]=e[t],r}function Tf(n,e,t){const r=n.slice();return r[62]=e[t],r}function Ef(n,e,t){const r=n.slice();return r[65]=e[t],r}function bf(n,e,t){const r=n.slice();return r[70]=e[t],r}function If(n,e,t){const r=n.slice();return r[56]=e[t],r}function Af(n,e,t){const r=n.slice();return r[59]=e[t],r}function tI(n){let e,t,r,i=n[0].title+"",s,o,l,u,c,h,d,p,g,v,I,E,D=n[5].uploadedByName+"",O,V,M,U,F,A,b,R,k=n[31](n[5]),P,N,S,le,ne,he=n[6].length+"",X,me,oe,Ue,je,Pe,ge,We,Fe,Ge,ke,Me,ye=n[5].placeName&&Rf(n),ce=n[5].comment&&kf(n),te=k&&Cf(n),K=Re(n[6]),_e=[];for(let Y=0;Y<K.length;Y+=1)_e[Y]=Sf(vf(n,K,Y));return{c(){e=y("h2"),t=y("button"),t.textContent="← 앨범",r=L(),s=j(i),o=L(),l=y("img"),h=L(),d=y("table"),ye&&ye.c(),p=L(),ce&&ce.c(),g=L(),v=y("tr"),I=y("th"),I.textContent="업로더",E=y("td"),O=j(D),V=L(),M=y("div"),U=y("a"),F=y("button"),F.textContent="다운로드",R=L(),te&&te.c(),P=L(),N=y("hr"),S=L(),le=y("h3"),ne=j("코멘트 ("),X=j(he),me=j(")"),oe=L();for(let Y=0;Y<_e.length;Y+=1)_e[Y].c();Ue=L(),je=y("div"),Pe=y("textarea"),ge=L(),We=y("button"),Fe=j("작성"),At(l.src,u=n[5].downloadURL)||q(l,"src",u),q(l,"alt",c=n[5].originalFilename),q(l,"class","full-photo svelte-1ro9az4"),ae(d,"margin-top","0.8rem"),q(U,"href",A=n[5].downloadURL),q(U,"download",b=n[5].originalFilename),q(U,"target","_blank"),q(U,"rel","noreferrer"),ae(M,"margin-top","0.8rem"),q(Pe,"placeholder","코멘트 입력"),q(Pe,"rows","2"),q(Pe,"class","svelte-1ro9az4"),We.disabled=Ge=n[19]||!n[18].trim(),q(je,"class","comment-form svelte-1ro9az4")},m(Y,re){T(Y,e,re),_(e,t),_(e,r),_(e,s),T(Y,o,re),T(Y,l,re),T(Y,h,re),T(Y,d,re),ye&&ye.m(d,null),_(d,p),ce&&ce.m(d,null),_(d,g),_(d,v),_(v,I),_(v,E),_(E,O),T(Y,V,re),T(Y,M,re),_(M,U),_(U,F),_(M,R),te&&te.m(M,null),T(Y,P,re),T(Y,N,re),T(Y,S,re),T(Y,le,re),_(le,ne),_(le,X),_(le,me),T(Y,oe,re);for(let $=0;$<_e.length;$+=1)_e[$]&&_e[$].m(Y,re);T(Y,Ue,re),T(Y,je,re),_(je,Pe),Z(Pe,n[18]),_(je,ge),_(je,We),_(We,Fe),ke||(Me=[x(t,"click",n[24]),x(Pe,"input",n[49]),x(We,"click",n[29])],ke=!0)},p(Y,re){if(re[0]&1&&i!==(i=Y[0].title+"")&&ee(s,i),re[0]&32&&!At(l.src,u=Y[5].downloadURL)&&q(l,"src",u),re[0]&32&&c!==(c=Y[5].originalFilename)&&q(l,"alt",c),Y[5].placeName?ye?ye.p(Y,re):(ye=Rf(Y),ye.c(),ye.m(d,p)):ye&&(ye.d(1),ye=null),Y[5].comment?ce?ce.p(Y,re):(ce=kf(Y),ce.c(),ce.m(d,g)):ce&&(ce.d(1),ce=null),re[0]&32&&D!==(D=Y[5].uploadedByName+"")&&ee(O,D),re[0]&32&&A!==(A=Y[5].downloadURL)&&q(U,"href",A),re[0]&32&&b!==(b=Y[5].originalFilename)&&q(U,"download",b),re[0]&32&&(k=Y[31](Y[5])),k?te?te.p(Y,re):(te=Cf(Y),te.c(),te.m(M,null)):te&&(te.d(1),te=null),re[0]&64&&he!==(he=Y[6].length+"")&&ee(X,he),re[0]&1075839040){K=Re(Y[6]);let $;for($=0;$<K.length;$+=1){const ve=vf(Y,K,$);_e[$]?_e[$].p(ve,re):(_e[$]=Sf(ve),_e[$].c(),_e[$].m(Ue.parentNode,Ue))}for(;$<_e.length;$+=1)_e[$].d(1);_e.length=K.length}re[0]&262144&&Z(Pe,Y[18]),re[0]&786432&&Ge!==(Ge=Y[19]||!Y[18].trim())&&(We.disabled=Ge)},d(Y){Y&&(w(e),w(o),w(l),w(h),w(d),w(V),w(M),w(P),w(N),w(S),w(le),w(oe),w(Ue),w(je)),ye&&ye.d(),ce&&ce.d(),te&&te.d(),ot(_e,Y),ke=!1,rt(Me)}}}function nI(n){let e,t,r,i=n[0].title+"",s,o,l,u,c,h,d,p,g,v,I=n[12]&&Nf(n);function E(V,M){return V[1].length===0?aI:V[20]?oI:sI}let D=E(n),O=D(n);return{c(){e=y("h2"),t=y("button"),t.textContent="← 목록",r=L(),s=j(i),o=L(),l=y("button"),l.textContent="+ 사진 추가",u=L(),I&&I.c(),c=L(),h=y("hr"),d=L(),O.c(),p=He()},m(V,M){T(V,e,M),_(e,t),_(e,r),_(e,s),T(V,o,M),T(V,l,M),T(V,u,M),I&&I.m(V,M),T(V,c,M),T(V,h,M),T(V,d,M),O.m(V,M),T(V,p,M),g||(v=[x(t,"click",n[24]),x(l,"click",n[40])],g=!0)},p(V,M){M[0]&1&&i!==(i=V[0].title+"")&&ee(s,i),V[12]?I?I.p(V,M):(I=Nf(V),I.c(),I.m(c.parentNode,c)):I&&(I.d(1),I=null),D===(D=E(V))&&O?O.p(V,M):(O.d(1),O=D(V),O&&(O.c(),O.m(p.parentNode,p)))},d(V){V&&(w(e),w(o),w(l),w(u),w(c),w(h),w(d),w(p)),I&&I.d(V),O.d(V),g=!1,rt(v)}}}function rI(n){let e,t,r,i,s,o,l,u,c,h,d=n[9]&&Bf(n);function p(I,E){return I[4].length===0?uI:lI}let g=p(n),v=g(n);return{c(){e=y("h2"),e.textContent="여행 추억",t=L(),r=y("button"),r.textContent="+ 새 추억 앨범 만들기",i=L(),d&&d.c(),s=L(),o=y("hr"),l=L(),v.c(),u=He()},m(I,E){T(I,e,E),T(I,t,E),T(I,r,E),T(I,i,E),d&&d.m(I,E),T(I,s,E),T(I,o,E),T(I,l,E),v.m(I,E),T(I,u,E),c||(h=x(r,"click",n[34]),c=!0)},p(I,E){I[9]?d?d.p(I,E):(d=Bf(I),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null),g===(g=p(I))&&v?v.p(I,E):(v.d(1),v=g(I),v&&(v.c(),v.m(u.parentNode,u)))},d(I){I&&(w(e),w(t),w(r),w(i),w(s),w(o),w(l),w(u)),d&&d.d(I),v.d(I),c=!1,h()}}}function iI(n){let e;return{c(){e=y("p"),e.textContent="그룹을 먼저 선택해주세요."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Rf(n){let e,t,r,i=n[5].placeName+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="장소",r=y("td"),s=j(i)},m(o,l){T(o,e,l),_(e,t),_(e,r),_(r,s)},p(o,l){l[0]&32&&i!==(i=o[5].placeName+"")&&ee(s,i)},d(o){o&&w(e)}}}function kf(n){let e,t,r,i=n[5].comment+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="코멘트",r=y("td"),s=j(i)},m(o,l){T(o,e,l),_(e,t),_(e,r),_(r,s)},p(o,l){l[0]&32&&i!==(i=o[5].comment+"")&&ee(s,i)},d(o){o&&w(e)}}}function Cf(n){let e,t,r;return{c(){e=y("button"),e.textContent="삭제",ae(e,"margin-left","0.5rem")},m(i,s){T(i,e,s),t||(r=x(e,"click",n[47]),t=!0)},p:De,d(i){i&&w(e),t=!1,r()}}}function Pf(n){let e,t,r;function i(){return n[48](n[73])}return{c(){e=y("button"),e.textContent="삭제",q(e,"class","btn-small svelte-1ro9az4")},m(s,o){T(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&w(e),t=!1,r()}}}function Sf(n){var E;let e,t,r,i=n[73].displayName+"",s,o,l,u=Ls(n[73].createdAt)+"",c,h,d,p,g=n[73].content+"",v,I=n[73].userId===((E=n[21])==null?void 0:E.uid)&&Pf(n);return{c(){e=y("div"),t=y("div"),r=y("strong"),s=j(i),o=L(),l=y("span"),c=j(u),h=L(),I&&I.c(),d=L(),p=y("p"),v=j(g),q(l,"class","meta svelte-1ro9az4"),q(t,"class","comment-header svelte-1ro9az4"),ae(p,"margin","0.3rem 0 0"),q(e,"class","card")},m(D,O){T(D,e,O),_(e,t),_(t,r),_(r,s),_(t,o),_(t,l),_(l,c),_(t,h),I&&I.m(t,null),_(e,d),_(e,p),_(p,v)},p(D,O){var V;O[0]&64&&i!==(i=D[73].displayName+"")&&ee(s,i),O[0]&64&&u!==(u=Ls(D[73].createdAt)+"")&&ee(c,u),D[73].userId===((V=D[21])==null?void 0:V.uid)?I?I.p(D,O):(I=Pf(D),I.c(),I.m(t,null)):I&&(I.d(1),I=null),O[0]&64&&g!==(g=D[73].content+"")&&ee(v,g)},d(D){D&&w(e),I&&I.d()}}}function Nf(n){let e,t,r,i,s,o,l,u,c,h,d,p=n[16]?"업로드 중...":"업로드",g,v,I,E,D,O,V=n[0].tripId&&n[8].length&&Df(n),M=n[17]&&Of(n);return{c(){e=y("div"),t=y("div"),r=y("input"),i=L(),V&&V.c(),s=L(),o=y("div"),l=y("input"),u=L(),M&&M.c(),c=L(),h=y("div"),d=y("button"),g=j(p),I=L(),E=y("button"),E.textContent="취소",q(r,"type","file"),q(r,"accept","image/jpeg,image/png,image/gif,image/webp"),q(l,"placeholder","한 줄 코멘트 (선택)"),ae(l,"width","100%"),ae(o,"margin-top","0.4rem"),d.disabled=v=n[16]||!n[13],ae(E,"margin-left","0.4rem"),ae(h,"margin-top","0.6rem"),q(e,"class","card"),ae(e,"margin-top","0.8rem")},m(U,F){T(U,e,F),_(e,t),_(t,r),_(e,i),V&&V.m(e,null),_(e,s),_(e,o),_(o,l),Z(l,n[15]),_(e,u),M&&M.m(e,null),_(e,c),_(e,h),_(h,d),_(d,g),_(h,I),_(h,E),D||(O=[x(r,"change",n[41]),x(l,"input",n[43]),x(d,"click",n[26]),x(E,"click",n[44])],D=!0)},p(U,F){U[0].tripId&&U[8].length?V?V.p(U,F):(V=Df(U),V.c(),V.m(e,s)):V&&(V.d(1),V=null),F[0]&32768&&l.value!==U[15]&&Z(l,U[15]),U[17]?M?M.p(U,F):(M=Of(U),M.c(),M.m(e,c)):M&&(M.d(1),M=null),F[0]&65536&&p!==(p=U[16]?"업로드 중...":"업로드")&&ee(g,p),F[0]&73728&&v!==(v=U[16]||!U[13])&&(d.disabled=v)},d(U){U&&w(e),V&&V.d(),M&&M.d(),D=!1,rt(O)}}}function Df(n){let e,t,r,i,s,o=Re(n[8]),l=[];for(let u=0;u<o.length;u+=1)l[u]=Vf(bf(n,o,u));return{c(){e=y("div"),t=y("select"),r=y("option"),r.textContent="일정 항목 연결 안 함";for(let u=0;u<l.length;u+=1)l[u].c();r.__value="",Z(r,r.__value),ae(t,"width","100%"),n[14]===void 0&&Gt(()=>n[42].call(t)),ae(e,"margin-top","0.4rem")},m(u,c){T(u,e,c),_(e,t),_(t,r);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);Rt(t,n[14],!0),i||(s=x(t,"change",n[42]),i=!0)},p(u,c){if(c[0]&256|c[1]&2){o=Re(u[8]);let h;for(h=0;h<o.length;h+=1){const d=bf(u,o,h);l[h]?l[h].p(d,c):(l[h]=Vf(d),l[h].c(),l[h].m(t,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=o.length}c[0]&16640&&Rt(t,u[14])},d(u){u&&w(e),ot(l,u),i=!1,s()}}}function Vf(n){let e,t=n[32](n[70])+"",r,i;return{c(){e=y("option"),r=j(t),e.__value=i=n[70].id,Z(e,e.__value)},m(s,o){T(s,e,o),_(e,r)},p(s,o){o[0]&256&&t!==(t=s[32](s[70])+"")&&ee(r,t),o[0]&256&&i!==(i=s[70].id)&&(e.__value=i,Z(e,e.__value))},d(s){s&&w(e)}}}function Of(n){let e,t;return{c(){e=y("p"),t=j(n[17]),q(e,"class","error svelte-1ro9az4")},m(r,i){T(r,e,i),_(e,t)},p(r,i){i[0]&131072&&ee(t,r[17])},d(r){r&&w(e)}}}function sI(n){let e,t=Re(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Lf(wf(n,t,i));return{c(){e=y("div");for(let i=0;i<r.length;i+=1)r[i].c();q(e,"class","photo-grid svelte-1ro9az4")},m(i,s){T(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&8388610){t=Re(i[1]);let o;for(o=0;o<t.length;o+=1){const l=wf(i,t,o);r[o]?r[o].p(l,s):(r[o]=Lf(l),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function oI(n){let e,t=Re(n[20]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Ff(Tf(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=He()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);T(i,e,s)},p(i,s){if(s[0]&9437184){t=Re(i[20]);let o;for(o=0;o<t.length;o+=1){const l=Tf(i,t,o);r[o]?r[o].p(l,s):(r[o]=Ff(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function aI(n){let e;return{c(){e=y("p"),e.textContent="아직 추가된 사진이 없습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function Lf(n){let e,t,r,i,s,o,l=(n[65].comment||n[65].uploadedByName)+"",u,c,h,d;function p(){return n[46](n[65])}return{c(){e=y("div"),t=y("img"),s=L(),o=y("div"),u=j(l),c=L(),At(t.src,r=n[65].downloadURL)||q(t,"src",r),q(t,"alt",i=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,v){T(g,e,v),_(e,t),_(e,s),_(e,o),_(o,u),_(e,c),h||(d=x(e,"click",p),h=!0)},p(g,v){n=g,v[0]&2&&!At(t.src,r=n[65].downloadURL)&&q(t,"src",r),v[0]&2&&i!==(i=n[65].originalFilename)&&q(t,"alt",i),v[0]&2&&l!==(l=(n[65].comment||n[65].uploadedByName)+"")&&ee(u,l)},d(g){g&&w(e),h=!1,d()}}}function Mf(n){let e,t,r=n[62].date+"",i;return{c(){e=y("span"),t=j("· "),i=j(r),q(e,"class","meta svelte-1ro9az4"),ae(e,"font-weight","normal")},m(s,o){T(s,e,o),_(e,t),_(e,i)},p(s,o){o[0]&1048576&&r!==(r=s[62].date+"")&&ee(i,r)},d(s){s&&w(e)}}}function Uf(n){let e,t,r,i,s,o,l=(n[65].comment||"")+"",u,c,h,d;function p(){return n[45](n[65])}return{c(){e=y("div"),t=y("img"),s=L(),o=y("div"),u=j(l),c=L(),At(t.src,r=n[65].downloadURL)||q(t,"src",r),q(t,"alt",i=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,v){T(g,e,v),_(e,t),_(e,s),_(e,o),_(o,u),_(e,c),h||(d=x(e,"click",p),h=!0)},p(g,v){n=g,v[0]&1048576&&!At(t.src,r=n[65].downloadURL)&&q(t,"src",r),v[0]&1048576&&i!==(i=n[65].originalFilename)&&q(t,"alt",i),v[0]&1048576&&l!==(l=(n[65].comment||"")+"")&&ee(u,l)},d(g){g&&w(e),h=!1,d()}}}function Ff(n){let e,t,r=n[62].label+"",i,s,o,l,u,c=n[62].date&&Mf(n),h=Re(n[62].photos),d=[];for(let p=0;p<h.length;p+=1)d[p]=Uf(Ef(n,h,p));return{c(){e=y("div"),t=y("h3"),i=j(r),s=L(),c&&c.c(),o=L(),l=y("div");for(let p=0;p<d.length;p+=1)d[p].c();u=L(),q(t,"class","place-label svelte-1ro9az4"),q(l,"class","photo-grid svelte-1ro9az4"),q(e,"class","place-section svelte-1ro9az4")},m(p,g){T(p,e,g),_(e,t),_(t,i),_(t,s),c&&c.m(t,null),_(e,o),_(e,l);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(l,null);_(e,u)},p(p,g){if(g[0]&1048576&&r!==(r=p[62].label+"")&&ee(i,r),p[62].date?c?c.p(p,g):(c=Mf(p),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g[0]&9437184){h=Re(p[62].photos);let v;for(v=0;v<h.length;v+=1){const I=Ef(p,h,v);d[v]?d[v].p(I,g):(d[v]=Uf(I),d[v].c(),d[v].m(l,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=h.length}},d(p){p&&w(e),c&&c.d(),ot(d,p)}}}function Bf(n){let e,t,r,i,s,o,l,u,c,h,d,p=n[7].length&&jf(n);return{c(){e=y("div"),t=y("div"),r=y("input"),i=L(),p&&p.c(),s=L(),o=y("div"),l=y("button"),l.textContent="만들기",u=L(),c=y("button"),c.textContent="취소",q(r,"placeholder","앨범 제목"),ae(r,"width","100%"),ae(c,"margin-left","0.4rem"),ae(o,"margin-top","0.6rem"),q(e,"class","card"),ae(e,"margin-top","0.8rem")},m(g,v){T(g,e,v),_(e,t),_(t,r),Z(r,n[10]),_(e,i),p&&p.m(e,null),_(e,s),_(e,o),_(o,l),_(o,u),_(o,c),h||(d=[x(r,"input",n[35]),x(l,"click",n[25]),x(c,"click",n[37])],h=!0)},p(g,v){v[0]&1024&&r.value!==g[10]&&Z(r,g[10]),g[7].length?p?p.p(g,v):(p=jf(g),p.c(),p.m(e,s)):p&&(p.d(1),p=null)},d(g){g&&w(e),p&&p.d(),h=!1,rt(d)}}}function jf(n){let e,t,r,i,s,o=Re(n[7]),l=[];for(let u=0;u<o.length;u+=1)l[u]=qf(Af(n,o,u));return{c(){e=y("div"),t=y("select"),r=y("option"),r.textContent="연결된 일정 없음";for(let u=0;u<l.length;u+=1)l[u].c();r.__value="",Z(r,r.__value),ae(t,"width","100%"),n[11]===void 0&&Gt(()=>n[36].call(t)),ae(e,"margin-top","0.4rem")},m(u,c){T(u,e,c),_(e,t),_(t,r);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);Rt(t,n[11],!0),i||(s=x(t,"change",n[36]),i=!0)},p(u,c){if(c[0]&128){o=Re(u[7]);let h;for(h=0;h<o.length;h+=1){const d=Af(u,o,h);l[h]?l[h].p(d,c):(l[h]=qf(d),l[h].c(),l[h].m(t,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=o.length}c[0]&2176&&Rt(t,u[11])},d(u){u&&w(e),ot(l,u),i=!1,s()}}}function qf(n){let e,t=n[59].title+"",r,i;return{c(){e=y("option"),r=j(t),e.__value=i=n[59].id,Z(e,e.__value)},m(s,o){T(s,e,o),_(e,r)},p(s,o){o[0]&128&&t!==(t=s[59].title+"")&&ee(r,t),o[0]&128&&i!==(i=s[59].id)&&(e.__value=i,Z(e,e.__value))},d(s){s&&w(e)}}}function lI(n){let e,t=Re(n[4]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Hf(If(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=He()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);T(i,e,s)},p(i,s){if(s[0]&140509204){t=Re(i[4]);let o;for(o=0;o<t.length;o+=1){const l=If(i,t,o);r[o]?r[o].p(l,s):(r[o]=Hf(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&w(e),ot(r,i)}}}function uI(n){let e;return{c(){e=y("p"),e.textContent="아직 추억 앨범이 없습니다."},m(t,r){T(t,e,r)},p:De,d(t){t&&w(e)}}}function zf(n){let e,t,r;function i(...s){return n[38](n[56],...s)}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){T(s,e,o),t||(r=x(e,"click",i),t=!0)},p(s,o){n=s},d(s){s&&w(e),t=!1,r()}}}function Hf(n){var R,k,P;let e,t,r,i,s=n[56].title+"",o,l,u,c=(n[56].photoCount??0)+"",h,d,p,g,v=Ls(n[56].createdAt)+"",I,E,D=n[56].createdByName+"",O,V,M,U,F,A=(n[56].createdBy===((R=n[21])==null?void 0:R.uid)||((k=n[2])==null?void 0:k.createdBy)===((P=n[21])==null?void 0:P.uid))&&zf(n);function b(){return n[39](n[56])}return{c(){e=y("div"),t=y("div"),r=y("div"),i=y("strong"),o=j(s),l=L(),u=y("span"),h=j(c),d=j("장"),p=L(),g=y("div"),I=j(v),E=j(" · "),O=j(D),V=L(),A&&A.c(),M=L(),q(u,"class","count svelte-1ro9az4"),q(g,"class","meta svelte-1ro9az4"),ae(t,"display","flex"),ae(t,"justify-content","space-between"),ae(t,"align-items","flex-start"),q(e,"class","card album-card svelte-1ro9az4")},m(N,S){T(N,e,S),_(e,t),_(t,r),_(r,i),_(i,o),_(r,l),_(r,u),_(u,h),_(u,d),_(r,p),_(r,g),_(g,I),_(g,E),_(g,O),_(t,V),A&&A.m(t,null),_(e,M),U||(F=x(e,"click",b),U=!0)},p(N,S){var le,ne,he;n=N,S[0]&16&&s!==(s=n[56].title+"")&&ee(o,s),S[0]&16&&c!==(c=(n[56].photoCount??0)+"")&&ee(h,c),S[0]&16&&v!==(v=Ls(n[56].createdAt)+"")&&ee(I,v),S[0]&16&&D!==(D=n[56].createdByName+"")&&ee(O,D),n[56].createdBy===((le=n[21])==null?void 0:le.uid)||((ne=n[2])==null?void 0:ne.createdBy)===((he=n[21])==null?void 0:he.uid)?A?A.p(n,S):(A=zf(n),A.c(),A.m(t,null)):A&&(A.d(1),A=null)},d(N){N&&w(e),A&&A.d(),U=!1,F()}}}function cI(n){let e;function t(s,o){if(!s[2])return iI;if(s[3]==="albums")return rI;if(s[3]==="album")return nI;if(s[3]==="photo")return tI}let r=t(n),i=r&&r(n);return{c(){i&&i.c(),e=He()},m(s,o){i&&i.m(s,o),T(s,e,o)},p(s,o){r===(r=t(s))&&i?i.p(s,o):(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:De,o:De,d(s){s&&w(e),i&&i.d(s)}}}function hI(n){const e={};for(const t of n){const r=t.scheduleItemId||"__other__";e[r]||(e[r]={label:t.placeName||"기타",date:t.date||null,photos:[]}),e[r].photos.push(t)}return Object.values(e).sort((t,r)=>t.date?r.date?t.date.localeCompare(r.date):-1:1)}function Ls(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"-"}function fI(n,e,t){let r,i,s,o;nn(n,qr,H=>t(21,s=H)),nn(n,Bn,H=>t(2,o=H));let l="albums",u=[],c=null,h=[],d=null,p=[],g=[],v=[],I=!1,E="",D="",O=!1,V=null,M="",U="",F=!1,A="",b="",R=!1,k=null,P=null,N=null;function S(){P&&(P(),P=null),N&&(N(),N=null),t(3,l="albums"),t(0,c=null),t(5,d=null),t(1,h=[]),t(6,p=[]),t(8,v=[]),t(9,I=!1),t(12,O=!1),le(),ne()}function le(){k&&k(),k=Wt(Ot(Xe(Ae,"groups",r,"albums"),mn("createdAt","desc")),H=>{t(4,u=H.docs.map(de=>({id:de.id,...de.data()})))})}async function ne(){try{const H=await pr(Ot(Xe(Ae,"groups",r,"trips"),mn("startDate")));t(7,g=H.docs.map(de=>({id:de.id,...de.data()})))}catch{t(7,g=[])}}async function he(H){if(t(0,c=H),t(8,v=[]),t(14,M=""),t(12,O=!1),t(17,A=""),H.tripId)try{const Ve=(await pr(Ot(Xe(Ae,"groups",r,"trips",H.tripId,"items"),mn("date")))).docs.map(Ee=>({id:Ee.id,...Ee.data()}));Ve.sort((Ee,ze)=>Ee.date!==ze.date?Ee.date.localeCompare(ze.date):!Ee.time&&!ze.time?0:Ee.time?ze.time?Ee.time.localeCompare(ze.time):-1:1),t(8,v=Ve)}catch(de){console.error("일정 항목 로드 실패:",de),t(8,v=[])}P&&P(),P=Wt(Ot(Xe(Ae,"groups",r,"albums",H.id,"photos"),mn("uploadedAt","desc")),de=>{t(1,h=de.docs.map(Ve=>({id:Ve.id,...Ve.data()})))}),t(3,l="album")}function X(H){t(5,d=H),t(18,b=""),N&&N(),N=Wt(Ot(Xe(Ae,"groups",r,"albums",c.id,"photos",H.id,"comments"),mn("createdAt","asc")),de=>{t(6,p=de.docs.map(Ve=>({id:Ve.id,...Ve.data()})))}),t(3,l="photo")}function me(){l==="photo"?(N&&(N(),N=null),t(5,d=null),t(6,p=[]),t(3,l="album")):l==="album"&&(P&&(P(),P=null),t(0,c=null),t(1,h=[]),t(8,v=[]),t(12,O=!1),t(3,l="albums"))}async function oe(){E.trim()&&(await Yn(Xe(Ae,"groups",r,"albums"),{title:E.trim(),tripId:D||null,createdBy:s.uid,createdByName:s.displayName,createdAt:Mt(),photoCount:0}),t(10,E=""),t(11,D=""),t(9,I=!1))}async function Ue(){if(!V)return;if(!["image/jpeg","image/png","image/gif","image/webp"].includes(V.type)){t(17,A="jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.");return}if(V.size>10*1024*1024){t(17,A="파일 크기는 10MB 이하여야 합니다.");return}t(17,A=""),t(16,F=!0);try{const de=await eI(V),Ve=nt(Xe(Ae,"groups",r,"albums",c.id,"photos")),Ee=`groups/${r}/albums/${c.id}/${Ve.id}_${V.name}`,ze=qo(zo,Ee);await eb(ze,de);const Ft=await tb(ze),ut=v.find(rr=>rr.id===M);await Ds(Ve,{storagePath:Ee,downloadURL:Ft,originalFilename:V.name,uploadedBy:s.uid,uploadedByName:s.displayName,uploadedAt:Mt(),comment:U.trim()||null,scheduleItemId:(ut==null?void 0:ut.id)||null,placeName:(ut==null?void 0:ut.placeName)||null,date:(ut==null?void 0:ut.date)||null}),await Xn(nt(Ae,"groups",r,"albums",c.id),{photoCount:Uc(1)}),t(13,V=null),t(14,M=""),t(15,U=""),t(12,O=!1)}catch(de){t(17,A="업로드 실패: "+de.message)}finally{t(16,F=!1)}}async function je(H,de){if(de.stopPropagation(),!confirm(`"${H.title}" 앨범을 삭제하시겠습니까? 사진과 코멘트가 모두 삭제됩니다.`))return;const Ve=await pr(Xe(Ae,"groups",r,"albums",H.id,"photos"));for(const Ee of Ve.docs){const ze=Ee.data();try{await Hc(qo(zo,ze.storagePath))}catch{}const Ft=await pr(Xe(Ae,"groups",r,"albums",H.id,"photos",Ee.id,"comments"));for(const ut of Ft.docs)await St(ut.ref);await St(Ee.ref)}await St(nt(Ae,"groups",r,"albums",H.id))}async function Pe(H){if(!confirm("사진을 삭제하시겠습니까? 코멘트도 함께 삭제됩니다."))return;try{await Hc(qo(zo,H.storagePath))}catch{}const de=await pr(Xe(Ae,"groups",r,"albums",c.id,"photos",H.id,"comments"));for(const Ve of de.docs)await St(Ve.ref);await St(nt(Ae,"groups",r,"albums",c.id,"photos",H.id)),await Xn(nt(Ae,"groups",r,"albums",c.id),{photoCount:Uc(-1)}),l==="photo"&&me()}async function ge(){if(!(!b.trim()||R)){t(19,R=!0);try{await Yn(Xe(Ae,"groups",r,"albums",c.id,"photos",d.id,"comments"),{userId:s.uid,displayName:s.displayName,content:b.trim(),createdAt:Mt()}),t(18,b="")}finally{t(19,R=!1)}}}async function We(H){confirm("코멘트를 삭제하시겠습니까?")&&await St(nt(Ae,"groups",r,"albums",c.id,"photos",d.id,"comments",H.id))}function Fe(H){return H.uploadedBy===(s==null?void 0:s.uid)||(o==null?void 0:o.createdBy)===(s==null?void 0:s.uid)}function Ge(H){const de=g.find(Fi=>Fi.id===(c==null?void 0:c.tripId));if(!(de!=null&&de.startDate))return`${H.date} ${H.time??""} ${H.placeName}`.trim();const[Ve,Ee,ze]=de.startDate.split("-").map(Number),[Ft,ut,rr]=H.date.split("-").map(Number),lo=Math.round((new Date(Ft,ut-1,rr)-new Date(Ve,Ee-1,ze))/864e5),Sn=H.time?` ${H.time}`:"";return`Day ${lo+1}${Sn} — ${H.placeName}`}Ms(()=>{k&&k(),P&&P(),N&&N()});const ke=()=>{t(9,I=!I)};function Me(){E=this.value,t(10,E)}function ye(){D=jn(this),t(11,D),t(7,g)}const ce=()=>t(9,I=!1),te=(H,de)=>je(H,de),K=H=>he(H),_e=()=>{t(12,O=!O),t(17,A="")},Y=H=>{t(13,V=H.target.files[0]),t(17,A="")};function re(){M=jn(this),t(14,M),t(8,v)}function $(){U=this.value,t(15,U)}const ve=()=>{t(12,O=!1),t(17,A="")},Pn=H=>X(H),ie=H=>X(H),pe=()=>Pe(d),qe=H=>We(H);function Q(){b=this.value,t(18,b)}return n.$$.update=()=>{n.$$.dirty[0]&4&&t(33,r=o==null?void 0:o.id),n.$$.dirty[1]&4&&r&&S(),n.$$.dirty[0]&3&&t(20,i=c!=null&&c.tripId&&h.length?hI(h):null)},[c,h,o,l,u,d,p,g,v,I,E,D,O,V,M,U,F,A,b,R,i,s,he,X,me,oe,Ue,je,Pe,ge,We,Fe,Ge,r,ke,Me,ye,ce,te,K,_e,Y,re,$,ve,Pn,ie,pe,qe,Q]}class dI extends Ri{constructor(e){super(),Ai(this,e,fI,cI,Lr,{},null,[-1,-1,-1])}}function pI(n){let e,t,r,i,s;return{c(){e=y("p"),e.textContent="로그인이 필요합니다.",t=L(),r=y("button"),r.textContent="Google 로그인"},m(o,l){T(o,e,l),T(o,t,l),T(o,r,l),i||(s=x(r,"click",n[2]),i=!0)},p:De,i:De,o:De,d(o){o&&(w(e),w(t),w(r)),i=!1,s()}}}function mI(n){let e,t,r,i,s,o,l,u,c,h,d,p,g,v=n[1].displayName+"",I,E,D,O,V,M,U,F,A,b,R;var k=n[0];function P(N,S){return{}}return k&&(F=vu(k,P())),{c(){e=y("header"),t=y("h1"),t.textContent="그룹 여행",r=L(),i=y("nav"),s=y("a"),s.textContent="그룹",o=j(` |
      `),l=y("a"),l.textContent="투표",u=j(` |
      `),c=y("a"),c.textContent="일정",h=j(` |
      `),d=y("a"),d.textContent="추억",p=j(` |
      `),g=y("span"),I=j(v),E=L(),D=y("button"),D.textContent="로그아웃",O=L(),V=y("hr"),M=L(),U=y("main"),F&&Eu(F.$$.fragment),q(s,"href","#groups"),q(l,"href","#vote"),q(c,"href","#schedule"),q(d,"href","#memory")},m(N,S){T(N,e,S),_(e,t),_(e,r),_(e,i),_(i,s),_(i,o),_(i,l),_(i,u),_(i,c),_(i,h),_(i,d),_(i,p),_(i,g),_(g,I),_(i,E),_(i,D),_(e,O),_(e,V),T(N,M,S),T(N,U,S),F&&Wo(F,U,null),A=!0,b||(R=x(D,"click",n[4]),b=!0)},p(N,S){if((!A||S&2)&&v!==(v=N[1].displayName+"")&&ee(I,v),S&1&&k!==(k=N[0])){if(F){xf();const le=F;ys(le.$$.fragment,1,0,()=>{Go(le,1)}),Xf()}k?(F=vu(k,P()),Eu(F.$$.fragment),pi(F.$$.fragment,1),Wo(F,U,null)):F=null}},i(N){A||(F&&pi(F.$$.fragment,N),A=!0)},o(N){F&&ys(F.$$.fragment,N),A=!1},d(N){N&&(w(e),w(M),w(U)),F&&Go(F),b=!1,R()}}}function _I(n){let e,t,r,i;const s=[mI,pI],o=[];function l(u,c){return u[1]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),r=He()},m(u,c){o[e].m(u,c),T(u,r,c),i=!0},p(u,[c]){let h=e;e=l(u),e===h?o[e].p(u,c):(xf(),ys(o[h],1,1,()=>{o[h]=null}),Xf(),t=o[e],t?t.p(u,c):(t=o[e]=s[e](u),t.c()),pi(t,1),t.m(r.parentNode,r))},i(u){i||(pi(t),i=!0)},o(u){ys(t),i=!1},d(u){u&&w(r),o[e].d(u)}}}function gI(n,e,t){let r,i;nn(n,qr,c=>t(1,i=c));let s=location.hash||"#groups";window.addEventListener("hashchange",()=>t(3,s=location.hash));const o={"#groups":Jc,"#vote":Ub,"#schedule":Zb,"#memory":dI};async function l(){await nv(va,new Jt)}const u=()=>My(va);return n.$$.update=()=>{n.$$.dirty&8&&t(0,r=o[s]??Jc)},[r,i,l,s,u]}class yI extends Ri{constructor(e){super(),Ai(this,e,gI,_I,Lr,{})}}new yI({target:document.getElementById("app")});
