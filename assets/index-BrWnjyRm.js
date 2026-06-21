var b_=Object.defineProperty;var w_=(n,e,t)=>e in n?b_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ro=(n,e,t)=>w_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oe(){}function ad(n){return n()}function vu(){return Object.create(null)}function tt(n){n.forEach(ad)}function ld(n){return typeof n=="function"}function Ui(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ts;function Ct(n,e){return n===e?!0:(ts||(ts=document.createElement("a")),ts.href=e,n===ts.href)}function E_(n){return Object.keys(n).length===0}function I_(n,...e){if(n==null){for(const i of e)i(void 0);return Oe}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function an(n,e,t){n.$$.on_destroy.push(I_(e,t))}function m(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function v(n){n.parentNode&&n.parentNode.removeChild(n)}function lt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function y(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function O(){return B(" ")}function qe(){return B("")}function Q(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function q(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ko(n,e,t){const i=new Set;for(let r=0;r<n.length;r+=1)n[r].checked&&i.add(n[r].__value);return t||i.delete(e),Array.from(i)}function A_(n){let e;return{p(...t){e=t,e.forEach(i=>n.push(i))},r(){e.forEach(t=>n.splice(n.indexOf(t),1))}}}function gi(n){return n===""?null:+n}function R_(n){return Array.from(n.childNodes)}function Y(n,e){e=""+e,n.data!==e&&(n.data=e)}function J(n,e){n.value=e??""}function ie(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Pt(n,e,t){for(let i=0;i<n.options.length;i+=1){const r=n.options[i];if(r.__value===e){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Hn(n){const e=n.querySelector(":checked");return e&&e.__value}function Tu(n,e){return new n(e)}let mr;function lr(n){mr=n}function ud(){if(!mr)throw new Error("Function called outside component initialization");return mr}function k_(n){ud().$$.on_mount.push(n)}function Us(n){ud().$$.on_destroy.push(n)}const fi=[],bu=[];let yi=[];const wu=[],C_=Promise.resolve();let Wo=!1;function P_(){Wo||(Wo=!0,C_.then(cd))}function Yt(n){yi.push(n)}const Co=new Set;let ci=0;function cd(){if(ci!==0)return;const n=mr;do{try{for(;ci<fi.length;){const e=fi[ci];ci++,lr(e),S_(e.$$)}}catch(e){throw fi.length=0,ci=0,e}for(lr(null),fi.length=0,ci=0;bu.length;)bu.pop()();for(let e=0;e<yi.length;e+=1){const t=yi[e];Co.has(t)||(Co.add(t),t())}yi.length=0}while(fi.length);for(;wu.length;)wu.pop()();Wo=!1,Co.clear(),lr(n)}function S_(n){if(n.fragment!==null){n.update(),tt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Yt)}}function N_(n){const e=[],t=[];yi.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),yi=e}const us=new Set;let Bn;function hd(){Bn={r:0,c:[],p:Bn}}function fd(){Bn.r||tt(Bn.c),Bn=Bn.p}function _r(n,e){n&&n.i&&(us.delete(n),n.i(e))}function vs(n,e,t,i){if(n&&n.o){if(us.has(n))return;us.add(n),Bn.c.push(()=>{us.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Pe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Eu(n){n&&n.c()}function Go(n,e,t){const{fragment:i,after_update:r}=n.$$;i&&i.m(e,t),Yt(()=>{const s=n.$$.on_mount.map(ad).filter(ld);n.$$.on_destroy?n.$$.on_destroy.push(...s):tt(s),n.$$.on_mount=[]}),r.forEach(Yt)}function Ko(n,e){const t=n.$$;t.fragment!==null&&(N_(t.after_update),tt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function D_(n,e){n.$$.dirty[0]===-1&&(fi.push(n),P_(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function kr(n,e,t,i,r,s,o=null,l=[-1]){const u=mr;lr(n);const c=n.$$={fragment:null,ctx:[],props:s,update:Oe,not_equal:r,bound:vu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:vu(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(d,p,...g)=>{const b=g.length?g[0]:p;return c.ctx&&r(c.ctx[d],c.ctx[d]=b)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](b),h&&D_(n,d)),p}):[],c.update(),h=!0,tt(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=R_(e.target);c.fragment&&c.fragment.l(d),d.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&_r(n.$$.fragment),Go(n,e.target,e.anchor),cd()}lr(u)}class Cr{constructor(){Ro(this,"$$");Ro(this,"$$set")}$destroy(){Ko(this,1),this.$destroy=Oe}$on(e,t){if(!ld(t))return Oe;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!E_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V_="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(V_);const hi=[];function dd(n,e=Oe){let t;const i=new Set;function r(l){if(Ui(n,l)&&(n=l,t)){const u=!hi.length;for(const c of i)c[1](),hi.push(c,n);if(u){for(let c=0;c<hi.length;c+=2)hi[c][0](hi[c+1]);hi.length=0}}}function s(l){r(l(n))}function o(l,u=Oe){const c=[l,u];return i.add(c),i.size===1&&(t=e(r,s)||Oe),l(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}var Iu={};/**
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
 */const pd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},O_=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],u=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,u=r+2<n.length,c=u?n[r+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),i.push(t[h],t[d],t[p],t[g])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):O_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const d=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||c==null||d==null)throw new L_;const p=s<<2|l>>4;if(i.push(p),c!==64){const g=l<<4&240|c>>2;if(i.push(g),d!==64){const b=c<<6&192|d;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class L_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M_=function(n){const e=pd(n);return md.encodeByteArray(e,!0)},Ts=function(n){return M_(n).replace(/\./g,"")},_d=function(n){try{return md.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function U_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F_=()=>U_().__FIREBASE_DEFAULTS__,B_=()=>{if(typeof process>"u"||typeof Iu>"u")return;const n=Iu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},j_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_d(n[1]);return e&&JSON.parse(e)},Fs=()=>{try{return F_()||B_()||j_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gd=n=>{var e,t;return(t=(e=Fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},yd=n=>{const e=gd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},vd=()=>{var n;return(n=Fs())===null||n===void 0?void 0:n.config},Td=n=>{var e;return(e=Fs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class q_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function bd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ts(JSON.stringify(t)),Ts(JSON.stringify(o)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function H_(){var n;const e=(n=Fs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function G_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function X_(){return!H_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const x_="FirebaseError";class $t extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=x_,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?$_(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new $t(r,l,i)}}function $_(n,e){return n.replace(Z_,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Z_=/\{\$([^}]+)}/g;function eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ii(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Au(s)&&Au(o)){if(!Ii(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Au(n){return n!==null&&typeof n=="object"}/**
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
 */function Sr(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tg(n,e){const t=new ng(n,e);return t.subscribe.bind(t)}class ng{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ig(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Po),r.error===void 0&&(r.error=Po),r.complete===void 0&&(r.complete=Po);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ig(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Po(){}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class rg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new q_;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(og(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sg(n){return n===Fn?void 0:n}function og(n){return n.instantiationMode==="EAGER"}/**
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
 */class ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const lg={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},ug=De.INFO,cg={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},hg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=cg[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=ug,this._logHandler=hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const fg=(n,e)=>e.some(t=>n instanceof t);let Ru,ku;function dg(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pg(){return ku||(ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wd=new WeakMap,Qo=new WeakMap,Ed=new WeakMap,So=new WeakMap,wa=new WeakMap;function mg(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(En(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&wd.set(t,n)}).catch(()=>{}),wa.set(e,n),e}function _g(n){if(Qo.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Qo.set(n,e)}let Xo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ed.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gg(n){Xo=n(Xo)}function yg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(No(this),e,...t);return Ed.set(i,e.sort?e.sort():[e]),En(i)}:pg().includes(n)?function(...e){return n.apply(No(this),e),En(wd.get(this))}:function(...e){return En(n.apply(No(this),e))}}function vg(n){return typeof n=="function"?yg(n):(n instanceof IDBTransaction&&_g(n),fg(n,dg())?new Proxy(n,Xo):n)}function En(n){if(n instanceof IDBRequest)return mg(n);if(So.has(n))return So.get(n);const e=vg(n);return e!==n&&(So.set(n,e),wa.set(e,n)),e}const No=n=>wa.get(n);function Tg(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),l=En(o);return i&&o.addEventListener("upgradeneeded",u=>{i(En(o.result),u.oldVersion,u.newVersion,En(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const bg=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],Do=new Map;function Cu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=wg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||bg.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),r&&u.done]))[0]};return Do.set(e,s),s}gg(n=>({...n,get:(e,t,i)=>Cu(e,t)||n.get(e,t,i),has:(e,t)=>!!Cu(e,t)||n.has(e,t)}));/**
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
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ig(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ig(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",Pu="0.10.13";/**
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
 */const ln=new ba("@firebase/app"),Ag="@firebase/app-compat",Rg="@firebase/analytics-compat",kg="@firebase/analytics",Cg="@firebase/app-check-compat",Pg="@firebase/app-check",Sg="@firebase/auth",Ng="@firebase/auth-compat",Dg="@firebase/database",Vg="@firebase/data-connect",Og="@firebase/database-compat",Lg="@firebase/functions",Mg="@firebase/functions-compat",Ug="@firebase/installations",Fg="@firebase/installations-compat",Bg="@firebase/messaging",jg="@firebase/messaging-compat",qg="@firebase/performance",zg="@firebase/performance-compat",Hg="@firebase/remote-config",Wg="@firebase/remote-config-compat",Gg="@firebase/storage",Kg="@firebase/storage-compat",Qg="@firebase/firestore",Xg="@firebase/vertexai-preview",Yg="@firebase/firestore-compat",Jg="firebase",xg="10.14.1";/**
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
 */const Jo="[DEFAULT]",$g={[Yo]:"fire-core",[Ag]:"fire-core-compat",[kg]:"fire-analytics",[Rg]:"fire-analytics-compat",[Pg]:"fire-app-check",[Cg]:"fire-app-check-compat",[Sg]:"fire-auth",[Ng]:"fire-auth-compat",[Dg]:"fire-rtdb",[Vg]:"fire-data-connect",[Og]:"fire-rtdb-compat",[Lg]:"fire-fn",[Mg]:"fire-fn-compat",[Ug]:"fire-iid",[Fg]:"fire-iid-compat",[Bg]:"fire-fcm",[jg]:"fire-fcm-compat",[qg]:"fire-perf",[zg]:"fire-perf-compat",[Hg]:"fire-rc",[Wg]:"fire-rc-compat",[Gg]:"fire-gcs",[Kg]:"fire-gcs-compat",[Qg]:"fire-fst",[Yg]:"fire-fst-compat",[Xg]:"fire-vertex","fire-js":"fire-js",[Jg]:"fire-js-all"};/**
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
 */const bs=new Map,Zg=new Map,xo=new Map;function Su(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(xo.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,n);for(const t of bs.values())Su(t,n);for(const t of Zg.values())Su(t,n);return!0}function Bs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nn(n){return n.settings!==void 0}/**
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
 */const ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Pr("app","Firebase",ey);/**
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
 */class ty{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=xg;function Id(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jo,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw In.create("bad-app-name",{appName:String(r)});if(t||(t=vd()),!t)throw In.create("no-options");const s=bs.get(r);if(s){if(Ii(t,s.options)&&Ii(i,s.config))return s;throw In.create("duplicate-app",{appName:r})}const o=new ag(r);for(const u of xo.values())o.addComponent(u);const l=new ty(t,i,o);return bs.set(r,l),l}function Ea(n=Jo){const e=bs.get(n);if(!e&&n===Jo&&vd())return Id();if(!e)throw In.create("no-app",{appName:n});return e}function Wt(n,e,t){var i;let r=(i=$g[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(l.join(" "));return}Qn(new kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ny="firebase-heartbeat-database",iy=1,gr="firebase-heartbeat-store";let Vo=null;function Ad(){return Vo||(Vo=Tg(ny,iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gr)}catch(t){console.warn(t)}}}}).catch(n=>{throw In.create("idb-open",{originalErrorMessage:n.message})})),Vo}async function ry(n){try{const t=(await Ad()).transaction(gr),i=await t.objectStore(gr).get(Rd(n));return await t.done,i}catch(e){if(e instanceof $t)ln.warn(e.message);else{const t=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(t.message)}}}async function Nu(n,e){try{const i=(await Ad()).transaction(gr,"readwrite");await i.objectStore(gr).put(e,Rd(n)),await i.done}catch(t){if(t instanceof $t)ln.warn(t.message);else{const i=In.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ln.warn(i.message)}}}function Rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sy=1024,oy=30*24*60*60*1e3;class ay{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uy(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Du();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=oy}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ln.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Du(),{heartbeatsToSend:i,unsentEntries:r}=ly(this._heartbeatsCache.heartbeats),s=Ts(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ln.warn(t),""}}}function Du(){return new Date().toISOString().substring(0,10)}function ly(n,e=sy){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Vu(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Vu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vu(n){return Ts(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cy(n){Qn(new kn("platform-logger",e=>new Eg(e),"PRIVATE")),Qn(new kn("heartbeat",e=>new ay(e),"PRIVATE")),Wt(Yo,Pu,n),Wt(Yo,Pu,"esm2017"),Wt("fire-js","")}cy("");var hy="firebase",fy="10.14.1";/**
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
 */Wt(hy,fy,"app");function Ia(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function kd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dy=kd,Cd=new Pr("auth","Firebase",kd());/**
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
 */const ws=new ba("@firebase/auth");function py(n,...e){ws.logLevel<=De.WARN&&ws.warn(`Auth (${ti}): ${n}`,...e)}function cs(n,...e){ws.logLevel<=De.ERROR&&ws.error(`Auth (${ti}): ${n}`,...e)}/**
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
 */function Jt(n,...e){throw Ra(n,...e)}function jt(n,...e){return Ra(n,...e)}function Aa(n,e,t){const i=Object.assign(Object.assign({},dy()),{[e]:t});return new Pr("auth","Firebase",i).create(e,{appName:n.name})}function Wn(n){return Aa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function my(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Jt(n,"argument-error"),Aa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ra(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Cd.create(n,...e)}function be(n,e,...t){if(!n)throw Ra(e,...t)}function rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cs(e),new Error(e)}function un(n,e){n||rn(e)}/**
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
 */function $o(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _y(){return Ou()==="http:"||Ou()==="https:"}function Ou(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||G_()||"connection"in navigator)?navigator.onLine:!0}function yy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=z_()||K_()}get(){return gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ka(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Pd{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ty=new Nr(3e4,6e4);function Ca(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,i,r={}){return Sd(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=Sr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return W_()||(c.referrerPolicy="no-referrer"),Pd.fetch()(Nd(n,n.config.apiHost,t,l),c)})}async function Sd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vy),e);try{const r=new wy(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ns(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ns(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ns(n,"user-disabled",o);const h=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Aa(n,h,c);Jt(n,h)}}catch(r){if(r instanceof $t)throw r;Jt(n,"network-request-failed",{message:String(r)})}}async function by(n,e,t,i,r={}){const s=await Fi(n,e,t,i,r);return"mfaPendingCredential"in s&&Jt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Nd(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?ka(n.config,r):`${n.config.apiScheme}://${r}`}class wy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(jt(this.auth,"network-request-failed")),Ty.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=jt(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Ey(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function Dd(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ur(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(n,e=!1){const t=xe(n),i=await t.getIdToken(e),r=Pa(i);be(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ur(Oo(r.auth_time)),issuedAtTime:ur(Oo(r.iat)),expirationTime:ur(Oo(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oo(n){return Number(n)*1e3}function Pa(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=_d(t);return r?JSON.parse(r):(cs("Failed to decode base64 JWT payload"),null)}catch(r){return cs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Lu(n){const e=Pa(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof $t&&Ay(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(n){var e;const t=n.auth,i=await n.getIdToken(),r=await yr(n,Dd(t,{idToken:i}));be(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vd(s.providerUserInfo):[],l=Cy(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function ky(n){const e=xe(n);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cy(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Vd(n){return n.map(e=>{var{providerId:t}=e,i=Ia(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Py(n,e){const t=await Sd(n,{},async()=>{const i=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Nd(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Pd.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sy(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",Ca(n,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=Lu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Py(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new vi;return i&&(be(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(be(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(be(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function _n(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Iy(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Es(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await yr(this,Ey(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,l,u,c,h;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,p=(r=t.email)!==null&&r!==void 0?r:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(l=t.tenantId)!==null&&l!==void 0?l:void 0,I=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(c=t.createdAt)!==null&&c!==void 0?c:void 0,L=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:M,isAnonymous:U,providerData:F,stsTokenManager:R}=t;be(D&&R,e,"internal-error");const A=vi.fromJSON(this.name,R);be(typeof D=="string",e,"internal-error"),_n(d,e.name),_n(p,e.name),be(typeof M=="boolean",e,"internal-error"),be(typeof U=="boolean",e,"internal-error"),_n(g,e.name),_n(b,e.name),_n(w,e.name),_n(I,e.name),_n(V,e.name),_n(L,e.name);const E=new sn({uid:D,auth:e,email:p,emailVerified:M,displayName:d,isAnonymous:U,photoURL:b,phoneNumber:g,tenantId:w,stsTokenManager:A,createdAt:V,lastLoginAt:L});return F&&Array.isArray(F)&&(E.providerData=F.map(k=>Object.assign({},k))),I&&(E._redirectEventId=I),E}static async _fromIdTokenResponse(e,t,i=!1){const r=new vi;r.updateFromServerResponse(t);const s=new sn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Es(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];be(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Vd(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),l=new vi;l.updateFromIdToken(i);const u=new sn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Zo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Mu=new Map;function on(n){un(n instanceof Function,"Expected a class definition");let e=Mu.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mu.set(n,e),e)}/**
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
 */class Od{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Od.type="NONE";const Uu=Od;/**
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
 */function hs(n,e,t){return`firebase:${n}:${e}:${t}`}class Ti{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,s),this.fullPersistenceKey=hs("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ti(on(Uu),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||on(Uu);const o=hs(i,e.config.apiKey,e.name);let l=null;for(const c of t)try{const h=await c._get(o);if(h){const d=sn._fromJSON(e,h);c!==s&&(l=d),s=c;break}}catch{}const u=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ti(s,e,i):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ti(s,e,i))}}/**
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
 */function Fu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ld(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jd(e))return"Blackberry";if(qd(e))return"Webos";if(Md(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(Bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ld(n=wt()){return/firefox\//i.test(n)}function Md(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(n=wt()){return/crios\//i.test(n)}function Fd(n=wt()){return/iemobile/i.test(n)}function Bd(n=wt()){return/android/i.test(n)}function jd(n=wt()){return/blackberry/i.test(n)}function qd(n=wt()){return/webos/i.test(n)}function Sa(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ny(n=wt()){var e;return Sa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dy(){return Q_()&&document.documentMode===10}function zd(n=wt()){return Sa(n)||Bd(n)||qd(n)||jd(n)||/windows phone/i.test(n)||Fd(n)}/**
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
 */function Hd(n,e=[]){let t;switch(n){case"Browser":t=Fu(wt());break;case"Worker":t=`${Fu(wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ti}/${i}`}/**
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
 */class Vy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Oy(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",Ca(n,e))}/**
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
 */const Ly=6;class My{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ly,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Uy{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bu(this),this.idTokenSubscription=new Bu(this),this.beforeStateQueue=new Vy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dd(this,{idToken:e}),i=await sn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Wn(this));const t=e?xe(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oy(this),t=new My(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Sy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,r);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&py(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function js(n){return xe(n)}class Bu{constructor(e){this.auth=e,this.observer=null,this.addObserver=tg(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fy(n){Na=n}function By(n){return Na.loadJS(n)}function jy(){return Na.gapiScript}function qy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function zy(n,e){const t=Bs(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Ii(s,e??{}))return r;Jt(r,"already-initialized")}return t.initialize({options:e})}function Hy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(on);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Wy(n,e,t){const i=js(n);be(i._canInitEmulator,i,"emulator-config-failed"),be(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Wd(e),{host:o,port:l}=Gy(e),u=l===null?"":`:${l}`;i.config.emulator={url:`${s}//${o}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),Ky()}function Wd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gy(n){const e=Wd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ju(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ju(o)}}}function ju(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ky(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
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
 */async function bi(n,e){return by(n,"POST","/v1/accounts:signInWithIdp",Ca(n,e))}/**
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
 */const Qy="http://localhost";class Xn extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Ia(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Xn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bi(e,t)}buildRequest(){const e={requestUri:Qy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sr(t)}return e}}/**
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
 */class Da{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends Da{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends Dr{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class tn extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return tn.credential(t,i)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class yn extends Dr{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class vn extends Dr{constructor(){super("twitter.com")}static credential(e,t){return Xn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vn.credential(t,i)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await sn._fromIdTokenResponse(e,i,r),o=qu(i);return new Ai({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=qu(i);return new Ai({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Is extends $t{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Is(e,t,i,r)}}function Kd(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(n,s,e,i):s})}async function Xy(n,e,t=!1){const i=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ai._forOperation(n,"link",i)}/**
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
 */async function Yy(n,e,t=!1){const{auth:i}=n;if(nn(i.app))return Promise.reject(Wn(i));const r="reauthenticate";try{const s=await yr(n,Kd(i,r,e,n),t);be(s.idToken,i,"internal-error");const o=Pa(s.idToken);be(o,i,"internal-error");const{sub:l}=o;return be(n.uid===l,i,"user-mismatch"),Ai._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),s}}/**
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
 */async function Jy(n,e,t=!1){if(nn(n.app))return Promise.reject(Wn(n));const i="signIn",r=await Kd(n,i,e),s=await Ai._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function xy(n,e,t,i){return xe(n).onIdTokenChanged(e,t,i)}function $y(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function Zy(n,e,t,i){return xe(n).onAuthStateChanged(e,t,i)}function ev(n){return xe(n).signOut()}const As="__sak";/**
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
 */class Qd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tv=1e3,nv=10;class Xd extends Qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Dy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nv):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xd.type="LOCAL";const iv=Xd;/**
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
 */class Yd extends Qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yd.type="SESSION";const Jd=Yd;/**
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
 */function rv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new qs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await rv(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
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
 */function Va(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Va("",20);r.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function ov(n){Gt().location.href=n}/**
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
 */function xd(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function av(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uv(){return xd()?self:null}/**
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
 */const $d="firebaseLocalStorageDb",cv=1,Rs="firebaseLocalStorage",Zd="fbase_key";class Vr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zs(n,e){return n.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function hv(){const n=indexedDB.deleteDatabase($d);return new Vr(n).toPromise()}function ea(){const n=indexedDB.open($d,cv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rs,{keyPath:Zd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rs)?e(i):(i.close(),await hv(),e(await ea()))})})}async function zu(n,e,t){const i=zs(n,!0).put({[Zd]:e,value:t});return new Vr(i).toPromise()}async function fv(n,e){const t=zs(n,!1).get(e),i=await new Vr(t).toPromise();return i===void 0?null:i.value}function Hu(n,e){const t=zs(n,!0).delete(e);return new Vr(t).toPromise()}const dv=800,pv=3;class ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ea(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>pv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(uv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await av(),!this.activeServiceWorker)return;this.sender=new sv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ea();return await zu(e,As,"1"),await Hu(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>zu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=zs(r,!1).getAll();return new Vr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ep.type="LOCAL";const mv=ep;new Nr(3e4,6e4);/**
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
 */function tp(n,e){return e?on(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Oa extends Gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _v(n){return Jy(n.auth,new Oa(n),n.bypassAuthState)}function gv(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),Yy(t,new Oa(n),n.bypassAuthState)}async function yv(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),Xy(t,new Oa(n),n.bypassAuthState)}/**
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
 */class np{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _v;case"linkViaPopup":case"linkViaRedirect":return yv;case"reauthViaPopup":case"reauthViaRedirect":return gv;default:Jt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vv=new Nr(2e3,1e4);async function Tv(n,e,t){if(nn(n.app))return Promise.reject(jt(n,"operation-not-supported-in-this-environment"));const i=js(n);my(n,e,Da);const r=tp(i,t);return new jn(i,"signInViaPopup",e,r).executeNotNull()}class jn extends np{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vv.get())};e()}}jn.currentPopupAction=null;/**
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
 */const bv="pendingRedirect",fs=new Map;class wv extends np{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const i=await Ev(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ev(n,e){const t=Rv(e),i=Av(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Iv(n,e){fs.set(n._key(),e)}function Av(n){return on(n._redirectPersistence)}function Rv(n){return hs(bv,n.config.apiKey,n.name)}async function kv(n,e,t=!1){if(nn(n.app))return Promise.reject(Wn(n));const i=js(n),r=tp(i,e),o=await new wv(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Cv=10*60*1e3;class Pv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ip(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wu(e))}saveEventToCache(e){this.cachedEventUids.add(Wu(e)),this.lastProcessedEventTime=Date.now()}}function Wu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ip({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(n);default:return!1}}/**
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
 */async function Nv(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
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
 */const Dv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vv=/^https?/;async function Ov(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Nv(n);for(const t of e)try{if(Lv(t))return}catch{}Jt(n,"unauthorized-domain")}function Lv(n){const e=$o(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Vv.test(t))return!1;if(Dv.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Mv=new Nr(3e4,6e4);function Gu(){const n=Gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Uv(n){return new Promise((e,t)=>{var i,r,s;function o(){Gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gu(),t(jt(n,"network-request-failed"))},timeout:Mv.get()})}if(!((r=(i=Gt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const l=qy("iframefcb");return Gt()[l]=()=>{gapi.load?o():t(jt(n,"network-request-failed"))},By(`${jy()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw ds=null,e})}let ds=null;function Fv(n){return ds=ds||Uv(n),ds}/**
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
 */const Bv=new Nr(5e3,15e3),jv="__/auth/iframe",qv="emulator/auth/iframe",zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wv(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ka(e,qv):`https://${n.config.authDomain}/${jv}`,i={apiKey:e.apiKey,appName:n.name,v:ti},r=Hv.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Sr(i).slice(1)}`}async function Gv(n){const e=await Fv(n),t=Gt().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:Wv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zv,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=jt(n,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},Bv.get());function u(){Gt().clearTimeout(l),r(i)}i.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Kv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qv=500,Xv=600,Yv="_blank",Jv="http://localhost";class Ku{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xv(n,e,t,i=Qv,r=Xv){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Kv),{width:i.toString(),height:r.toString(),top:s,left:o}),c=wt().toLowerCase();t&&(l=Ud(c)?Yv:t),Ld(c)&&(e=e||Jv,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,b])=>`${p}${g}=${b},`,"");if(Ny(c)&&l!=="_self")return $v(e||"",l),new Ku(null);const d=window.open(e||"",l,h);be(d,n,"popup-blocked");try{d.focus()}catch{}return new Ku(d)}function $v(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Zv="__/auth/handler",e0="emulator/auth/handler",t0=encodeURIComponent("fac");async function Qu(n,e,t,i,r,s){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ti,eventId:r};if(e instanceof Da){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",eg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Dr){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await n._getAppCheckToken(),c=u?`#${t0}=${encodeURIComponent(u)}`:"";return`${n0(n)}?${Sr(l).slice(1)}${c}`}function n0({config:n}){return n.emulator?ka(n,e0):`https://${n.authDomain}/${Zv}`}/**
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
 */const Lo="webStorageSupport";class i0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jd,this._completeRedirectFn=kv,this._overrideRedirectResult=Iv}async _openPopup(e,t,i,r){var s;un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qu(e,t,i,$o(),r);return xv(e,o,Va())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Qu(e,t,i,$o(),r);return ov(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(un(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Gv(e),i=new Pv(e);return t.register("authEvent",r=>(be(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lo,{type:Lo},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Lo];o!==void 0&&t(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ov(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zd()||Md()||Sa()}}const r0=i0;var Xu="@firebase/auth",Yu="1.7.9";/**
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
 */class s0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function o0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a0(n){Qn(new kn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hd(n)},c=new Uy(i,r,s,u);return Hy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qn(new kn("auth-internal",e=>{const t=js(e.getProvider("auth").getImmediate());return(i=>new s0(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Xu,Yu,o0(n)),Wt(Xu,Yu,"esm2017")}/**
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
 */const l0=5*60,u0=Td("authIdTokenMaxAge")||l0;let Ju=null;const c0=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>u0)return;const r=t==null?void 0:t.token;Ju!==r&&(Ju=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function h0(n=Ea()){const e=Bs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zy(n,{popupRedirectResolver:r0,persistence:[mv,iv,Jd]}),i=Td("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=c0(s.toString());$y(t,o,()=>o(t.currentUser)),xy(t,l=>o(l))}}const r=gd("auth");return r&&Wy(t,`http://${r}`),t}function f0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fy({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=jt("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",f0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a0("Browser");var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gn,rp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function E(){}E.prototype=A.prototype,R.D=A.prototype,R.prototype=new E,R.prototype.constructor=R,R.C=function(k,P,N){for(var S=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)S[ne-2]=arguments[ne];return A.prototype[P].apply(k,S)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,A,E){E||(E=0);var k=Array(16);if(typeof A=="string")for(var P=0;16>P;++P)k[P]=A.charCodeAt(E++)|A.charCodeAt(E++)<<8|A.charCodeAt(E++)<<16|A.charCodeAt(E++)<<24;else for(P=0;16>P;++P)k[P]=A[E++]|A[E++]<<8|A[E++]<<16|A[E++]<<24;A=R.g[0],E=R.g[1],P=R.g[2];var N=R.g[3],S=A+(N^E&(P^N))+k[0]+3614090360&4294967295;A=E+(S<<7&4294967295|S>>>25),S=N+(P^A&(E^P))+k[1]+3905402710&4294967295,N=A+(S<<12&4294967295|S>>>20),S=P+(E^N&(A^E))+k[2]+606105819&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(A^P&(N^A))+k[3]+3250441966&4294967295,E=P+(S<<22&4294967295|S>>>10),S=A+(N^E&(P^N))+k[4]+4118548399&4294967295,A=E+(S<<7&4294967295|S>>>25),S=N+(P^A&(E^P))+k[5]+1200080426&4294967295,N=A+(S<<12&4294967295|S>>>20),S=P+(E^N&(A^E))+k[6]+2821735955&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(A^P&(N^A))+k[7]+4249261313&4294967295,E=P+(S<<22&4294967295|S>>>10),S=A+(N^E&(P^N))+k[8]+1770035416&4294967295,A=E+(S<<7&4294967295|S>>>25),S=N+(P^A&(E^P))+k[9]+2336552879&4294967295,N=A+(S<<12&4294967295|S>>>20),S=P+(E^N&(A^E))+k[10]+4294925233&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(A^P&(N^A))+k[11]+2304563134&4294967295,E=P+(S<<22&4294967295|S>>>10),S=A+(N^E&(P^N))+k[12]+1804603682&4294967295,A=E+(S<<7&4294967295|S>>>25),S=N+(P^A&(E^P))+k[13]+4254626195&4294967295,N=A+(S<<12&4294967295|S>>>20),S=P+(E^N&(A^E))+k[14]+2792965006&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(A^P&(N^A))+k[15]+1236535329&4294967295,E=P+(S<<22&4294967295|S>>>10),S=A+(P^N&(E^P))+k[1]+4129170786&4294967295,A=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(A^E))+k[6]+3225465664&4294967295,N=A+(S<<9&4294967295|S>>>23),S=P+(A^E&(N^A))+k[11]+643717713&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^A&(P^N))+k[0]+3921069994&4294967295,E=P+(S<<20&4294967295|S>>>12),S=A+(P^N&(E^P))+k[5]+3593408605&4294967295,A=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(A^E))+k[10]+38016083&4294967295,N=A+(S<<9&4294967295|S>>>23),S=P+(A^E&(N^A))+k[15]+3634488961&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^A&(P^N))+k[4]+3889429448&4294967295,E=P+(S<<20&4294967295|S>>>12),S=A+(P^N&(E^P))+k[9]+568446438&4294967295,A=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(A^E))+k[14]+3275163606&4294967295,N=A+(S<<9&4294967295|S>>>23),S=P+(A^E&(N^A))+k[3]+4107603335&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^A&(P^N))+k[8]+1163531501&4294967295,E=P+(S<<20&4294967295|S>>>12),S=A+(P^N&(E^P))+k[13]+2850285829&4294967295,A=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(A^E))+k[2]+4243563512&4294967295,N=A+(S<<9&4294967295|S>>>23),S=P+(A^E&(N^A))+k[7]+1735328473&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^A&(P^N))+k[12]+2368359562&4294967295,E=P+(S<<20&4294967295|S>>>12),S=A+(E^P^N)+k[5]+4294588738&4294967295,A=E+(S<<4&4294967295|S>>>28),S=N+(A^E^P)+k[8]+2272392833&4294967295,N=A+(S<<11&4294967295|S>>>21),S=P+(N^A^E)+k[11]+1839030562&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^A)+k[14]+4259657740&4294967295,E=P+(S<<23&4294967295|S>>>9),S=A+(E^P^N)+k[1]+2763975236&4294967295,A=E+(S<<4&4294967295|S>>>28),S=N+(A^E^P)+k[4]+1272893353&4294967295,N=A+(S<<11&4294967295|S>>>21),S=P+(N^A^E)+k[7]+4139469664&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^A)+k[10]+3200236656&4294967295,E=P+(S<<23&4294967295|S>>>9),S=A+(E^P^N)+k[13]+681279174&4294967295,A=E+(S<<4&4294967295|S>>>28),S=N+(A^E^P)+k[0]+3936430074&4294967295,N=A+(S<<11&4294967295|S>>>21),S=P+(N^A^E)+k[3]+3572445317&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^A)+k[6]+76029189&4294967295,E=P+(S<<23&4294967295|S>>>9),S=A+(E^P^N)+k[9]+3654602809&4294967295,A=E+(S<<4&4294967295|S>>>28),S=N+(A^E^P)+k[12]+3873151461&4294967295,N=A+(S<<11&4294967295|S>>>21),S=P+(N^A^E)+k[15]+530742520&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^A)+k[2]+3299628645&4294967295,E=P+(S<<23&4294967295|S>>>9),S=A+(P^(E|~N))+k[0]+4096336452&4294967295,A=E+(S<<6&4294967295|S>>>26),S=N+(E^(A|~P))+k[7]+1126891415&4294967295,N=A+(S<<10&4294967295|S>>>22),S=P+(A^(N|~E))+k[14]+2878612391&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~A))+k[5]+4237533241&4294967295,E=P+(S<<21&4294967295|S>>>11),S=A+(P^(E|~N))+k[12]+1700485571&4294967295,A=E+(S<<6&4294967295|S>>>26),S=N+(E^(A|~P))+k[3]+2399980690&4294967295,N=A+(S<<10&4294967295|S>>>22),S=P+(A^(N|~E))+k[10]+4293915773&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~A))+k[1]+2240044497&4294967295,E=P+(S<<21&4294967295|S>>>11),S=A+(P^(E|~N))+k[8]+1873313359&4294967295,A=E+(S<<6&4294967295|S>>>26),S=N+(E^(A|~P))+k[15]+4264355552&4294967295,N=A+(S<<10&4294967295|S>>>22),S=P+(A^(N|~E))+k[6]+2734768916&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~A))+k[13]+1309151649&4294967295,E=P+(S<<21&4294967295|S>>>11),S=A+(P^(E|~N))+k[4]+4149444226&4294967295,A=E+(S<<6&4294967295|S>>>26),S=N+(E^(A|~P))+k[11]+3174756917&4294967295,N=A+(S<<10&4294967295|S>>>22),S=P+(A^(N|~E))+k[2]+718787259&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~A))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+N&4294967295}i.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var E=A-this.blockSize,k=this.B,P=this.h,N=0;N<A;){if(P==0)for(;N<=E;)r(this,R,N),N+=this.blockSize;if(typeof R=="string"){for(;N<A;)if(k[P++]=R.charCodeAt(N++),P==this.blockSize){r(this,k),P=0;break}}else for(;N<A;)if(k[P++]=R[N++],P==this.blockSize){r(this,k),P=0;break}}this.h=P,this.o+=A},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var E=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=E&255,E/=256;for(this.u(R),R=Array(16),A=E=0;4>A;++A)for(var k=0;32>k;k+=8)R[E++]=this.g[A]>>>k&255;return R};function s(R,A){var E=l;return Object.prototype.hasOwnProperty.call(E,R)?E[R]:E[R]=A(R)}function o(R,A){this.h=A;for(var E=[],k=!0,P=R.length-1;0<=P;P--){var N=R[P]|0;k&&N==A||(E[P]=N,k=!1)}this.g=E}var l={};function u(R){return-128<=R&&128>R?s(R,function(A){return new o([A|0],0>A?-1:0)}):new o([R|0],0>R?-1:0)}function c(R){if(isNaN(R)||!isFinite(R))return d;if(0>R)return I(c(-R));for(var A=[],E=1,k=0;R>=E;k++)A[k]=R/E|0,E*=4294967296;return new o(A,0)}function h(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return I(h(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(A,8)),k=d,P=0;P<R.length;P+=8){var N=Math.min(8,R.length-P),S=parseInt(R.substring(P,P+N),A);8>N?(N=c(Math.pow(A,N)),k=k.j(N).add(c(S))):(k=k.j(E),k=k.add(c(S)))}return k}var d=u(0),p=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(w(this))return-I(this).m();for(var R=0,A=1,E=0;E<this.g.length;E++){var k=this.i(E);R+=(0<=k?k:4294967296+k)*A,A*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(b(this))return"0";if(w(this))return"-"+I(this).toString(R);for(var A=c(Math.pow(R,6)),E=this,k="";;){var P=M(E,A).g;E=V(E,P.j(A));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(R);if(E=P,b(E))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function b(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function w(R){return R.h==-1}n.l=function(R){return R=V(this,R),w(R)?-1:b(R)?0:1};function I(R){for(var A=R.g.length,E=[],k=0;k<A;k++)E[k]=~R.g[k];return new o(E,~R.h).add(p)}n.abs=function(){return w(this)?I(this):this},n.add=function(R){for(var A=Math.max(this.g.length,R.g.length),E=[],k=0,P=0;P<=A;P++){var N=k+(this.i(P)&65535)+(R.i(P)&65535),S=(N>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);k=S>>>16,N&=65535,S&=65535,E[P]=S<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function V(R,A){return R.add(I(A))}n.j=function(R){if(b(this)||b(R))return d;if(w(this))return w(R)?I(this).j(I(R)):I(I(this).j(R));if(w(R))return I(this.j(I(R)));if(0>this.l(g)&&0>R.l(g))return c(this.m()*R.m());for(var A=this.g.length+R.g.length,E=[],k=0;k<2*A;k++)E[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<R.g.length;P++){var N=this.i(k)>>>16,S=this.i(k)&65535,ne=R.i(P)>>>16,ee=R.i(P)&65535;E[2*k+2*P]+=S*ee,L(E,2*k+2*P),E[2*k+2*P+1]+=N*ee,L(E,2*k+2*P+1),E[2*k+2*P+1]+=S*ne,L(E,2*k+2*P+1),E[2*k+2*P+2]+=N*ne,L(E,2*k+2*P+2)}for(k=0;k<A;k++)E[k]=E[2*k+1]<<16|E[2*k];for(k=A;k<2*A;k++)E[k]=0;return new o(E,0)};function L(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function D(R,A){this.g=R,this.h=A}function M(R,A){if(b(A))throw Error("division by zero");if(b(R))return new D(d,d);if(w(R))return A=M(I(R),A),new D(I(A.g),I(A.h));if(w(A))return A=M(R,I(A)),new D(I(A.g),A.h);if(30<R.g.length){if(w(R)||w(A))throw Error("slowDivide_ only works with positive integers.");for(var E=p,k=A;0>=k.l(R);)E=U(E),k=U(k);var P=F(E,1),N=F(k,1);for(k=F(k,2),E=F(E,2);!b(k);){var S=N.add(k);0>=S.l(R)&&(P=P.add(E),N=S),k=F(k,1),E=F(E,1)}return A=V(R,P.j(A)),new D(P,A)}for(P=d;0<=R.l(A);){for(E=Math.max(1,Math.floor(R.m()/A.m())),k=Math.ceil(Math.log(E)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(E),S=N.j(A);w(S)||0<S.l(R);)E-=k,N=c(E),S=N.j(A);b(N)&&(N=p),P=P.add(N),R=V(R,S)}return new D(P,R)}n.A=function(R){return M(this,R).h},n.and=function(R){for(var A=Math.max(this.g.length,R.g.length),E=[],k=0;k<A;k++)E[k]=this.i(k)&R.i(k);return new o(E,this.h&R.h)},n.or=function(R){for(var A=Math.max(this.g.length,R.g.length),E=[],k=0;k<A;k++)E[k]=this.i(k)|R.i(k);return new o(E,this.h|R.h)},n.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),E=[],k=0;k<A;k++)E[k]=this.i(k)^R.i(k);return new o(E,this.h^R.h)};function U(R){for(var A=R.g.length+1,E=[],k=0;k<A;k++)E[k]=R.i(k)<<1|R.i(k-1)>>>31;return new o(E,R.h)}function F(R,A){var E=A>>5;A%=32;for(var k=R.g.length-E,P=[],N=0;N<k;N++)P[N]=0<A?R.i(N+E)>>>A|R.i(N+E+1)<<32-A:R.i(N+E);return new o(P,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,rp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Gn=o}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});var is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sp,rr,op,ps,ta,ap,lp,up;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,_){return a==Array.prototype||a==Object.prototype||(a[f]=_.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof is=="object"&&is];for(var f=0;f<a.length;++f){var _=a[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function r(a,f){if(f)e:{var _=i;a=a.split(".");for(var C=0;C<a.length-1;C++){var j=a[C];if(!(j in _))break e;_=_[j]}a=a[a.length-1],C=_[a],f=f(C),f!=C&&f!=null&&e(_,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var _=0,C=!1,j={next:function(){if(!C&&_<a.length){var z=_++;return{value:f(z,a[z]),done:!1}}return C=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}r("Array.prototype.values",function(a){return a||function(){return s(this,function(f,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,_){return a.call.apply(a.bind,arguments)}function d(a,f,_){if(!a)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,C),a.apply(f,j)}}return function(){return a.apply(f,arguments)}}function p(a,f,_){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(a,f){var _=Array.prototype.slice.call(arguments,1);return function(){var C=_.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function b(a,f){function _(){}_.prototype=f.prototype,a.aa=f.prototype,a.prototype=new _,a.prototype.constructor=a,a.Qb=function(C,j,z){for(var Z=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)Z[Qe-2]=arguments[Qe];return f.prototype[j].apply(C,Z)}}function w(a){const f=a.length;if(0<f){const _=Array(f);for(let C=0;C<f;C++)_[C]=a[C];return _}return[]}function I(a,f){for(let _=1;_<arguments.length;_++){const C=arguments[_];if(u(C)){const j=a.length||0,z=C.length||0;a.length=j+z;for(let Z=0;Z<z;Z++)a[j+Z]=C[Z]}else a.push(C)}}class V{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function L(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var U=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function F(a,f,_){for(const C in a)f.call(_,a[C],C,a)}function R(a,f){for(const _ in a)f.call(void 0,a[_],_,a)}function A(a){const f={};for(const _ in a)f[_]=a[_];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,f){let _,C;for(let j=1;j<arguments.length;j++){C=arguments[j];for(_ in C)a[_]=C[_];for(let z=0;z<E.length;z++)_=E[z],Object.prototype.hasOwnProperty.call(C,_)&&(a[_]=C[_])}}function P(a){var f=1;a=a.split(":");const _=[];for(;0<f&&a.length;)_.push(a.shift()),f--;return a.length&&_.push(a.join(":")),_}function N(a){l.setTimeout(()=>{throw a},0)}function S(){var a=ce;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ne{constructor(){this.h=this.g=null}add(f,_){const C=ee.get();C.set(f,_),this.h?this.h.next=C:this.g=C,this.h=C}}var ee=new V(()=>new fe,a=>a.reset());class fe{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let x,me=!1,ce=new ne,Te=()=>{const a=l.Promise.resolve(void 0);x=()=>{a.then(ze)}};var ze=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(_){N(_)}var f=ee;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}me=!1};function Se(){this.s=this.s,this.C=this.C}Se.prototype.s=!1,Se.prototype.ma=function(){this.s||(this.s=!0,this.N())},Se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const _=()=>{};l.addEventListener("test",_,f),l.removeEventListener("test",_,f)}catch{}return a}();function Le(a,f){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var _=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(U){e:{try{M(f.nodeName);var j=!0;break e}catch{}j=!1}j||(f=null)}}else _=="mouseover"?f=a.fromElement:_=="mouseout"&&(f=a.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:He[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Le.aa.h.call(this)}}b(Le,Ce);var He={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),pe=0;function se(a,f,_,C,j){this.listener=a,this.proxy=null,this.src=f,this.type=_,this.capture=!!C,this.ha=j,this.key=++pe,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $(a){this.src=a,this.g={},this.h=0}$.prototype.add=function(a,f,_,C,j){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var Z=Me(a,f,C,j);return-1<Z?(f=a[Z],_||(f.fa=!1)):(f=new se(f,this.src,z,!!C,j),f.fa=_,a.push(f)),f};function re(a,f){var _=f.type;if(_ in a.g){var C=a.g[_],j=Array.prototype.indexOf.call(C,f,void 0),z;(z=0<=j)&&Array.prototype.splice.call(C,j,1),z&&(_e(f),a.g[_].length==0&&(delete a.g[_],a.h--))}}function Me(a,f,_,C){for(var j=0;j<a.length;++j){var z=a[j];if(!z.da&&z.listener==f&&z.capture==!!_&&z.ha==C)return j}return-1}var le="closure_lm_"+(1e6*Math.random()|0),W={};function he(a,f,_,C,j){if(Array.isArray(f)){for(var z=0;z<f.length;z++)he(a,f[z],_,C,j);return null}return _=Ge(_),a&&a[je]?a.K(f,_,c(C)?!!C.capture:!1,j):oe(a,f,_,!1,C,j)}function oe(a,f,_,C,j,z){if(!f)throw Error("Invalid event type");var Z=c(j)?!!j.capture:!!j,Qe=X(a);if(Qe||(a[le]=Qe=new $(a)),_=Qe.add(f,_,C,Z,z),_.proxy)return _;if(C=ye(),_.proxy=C,C.src=a,C.listener=_,a.addEventListener)Ee||(j=Z),j===void 0&&(j=!1),a.addEventListener(f.toString(),C,j);else if(a.attachEvent)a.attachEvent(fn(f.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ye(){function a(_){return f.call(a.src,a.listener,_)}const f=ae;return a}function it(a,f,_,C,j){if(Array.isArray(f))for(var z=0;z<f.length;z++)it(a,f[z],_,C,j);else C=c(C)?!!C.capture:!!C,_=Ge(_),a&&a[je]?(a=a.i,f=String(f).toString(),f in a.g&&(z=a.g[f],_=Me(z,_,C,j),-1<_&&(_e(z[_]),Array.prototype.splice.call(z,_,1),z.length==0&&(delete a.g[f],a.h--)))):a&&(a=X(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Me(f,_,C,j)),(_=-1<a?f[a]:null)&&Ot(_))}function Ot(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[je])re(f.i,a);else{var _=a.type,C=a.proxy;f.removeEventListener?f.removeEventListener(_,C,a.capture):f.detachEvent?f.detachEvent(fn(_),C):f.addListener&&f.removeListener&&f.removeListener(C),(_=X(f))?(re(_,a),_.h==0&&(_.src=null,f[le]=null)):_e(a)}}}function fn(a){return a in W?W[a]:W[a]="on"+a}function ae(a,f){if(a.da)a=!0;else{f=new Le(f,this);var _=a.listener,C=a.ha||a.src;a.fa&&Ot(a),a=_.call(C,f)}return a}function X(a){return a=a[le],a instanceof $?a:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ge(a){return typeof a=="function"?a:(a[ve]||(a[ve]=function(f){return a.handleEvent(f)}),a[ve])}function G(){Se.call(this),this.i=new $(this),this.M=this,this.F=null}b(G,Se),G.prototype[je]=!0,G.prototype.removeEventListener=function(a,f,_,C){it(this,a,f,_,C)};function te(a,f){var _,C=a.F;if(C)for(_=[];C;C=C.F)_.push(C);if(a=a.M,C=f.type||f,typeof f=="string")f=new Ce(f,a);else if(f instanceof Ce)f.target=f.target||a;else{var j=f;f=new Ce(C,a),k(f,j)}if(j=!0,_)for(var z=_.length-1;0<=z;z--){var Z=f.g=_[z];j=Ue(Z,C,!0,f)&&j}if(Z=f.g=a,j=Ue(Z,C,!0,f)&&j,j=Ue(Z,C,!1,f)&&j,_)for(z=0;z<_.length;z++)Z=f.g=_[z],j=Ue(Z,C,!1,f)&&j}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var _=a.g[f],C=0;C<_.length;C++)_e(_[C]);delete a.g[f],a.h--}}this.F=null},G.prototype.K=function(a,f,_,C){return this.i.add(String(a),f,!1,_,C)},G.prototype.L=function(a,f,_,C){return this.i.add(String(a),f,!0,_,C)};function Ue(a,f,_,C){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var j=!0,z=0;z<f.length;++z){var Z=f[z];if(Z&&!Z.da&&Z.capture==_){var Qe=Z.listener,ht=Z.ha||Z.src;Z.fa&&re(a.i,Z),j=Qe.call(ht,C)!==!1&&j}}return j&&!C.defaultPrevented}function Ie(a,f,_){if(typeof a=="function")_&&(a=p(a,_));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Ke(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,Ke(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class St extends Se{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){Se.call(this),this.h=a,this.g={}}b(_t,Se);var Et=[];function kl(a){F(a.g,function(f,_){this.g.hasOwnProperty(_)&&Ot(f)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),kl(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uo=l.JSON.stringify,Jm=l.JSON.parse,xm=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function co(){}co.prototype.h=null;function Cl(a){return a.h||(a.h=a.i())}function Pl(){}var Wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ho(){Ce.call(this,"d")}b(ho,Ce);function fo(){Ce.call(this,"c")}b(fo,Ce);var On={},Sl=null;function jr(){return Sl=Sl||new G}On.La="serverreachability";function Nl(a){Ce.call(this,On.La,a)}b(Nl,Ce);function Gi(a){const f=jr();te(f,new Nl(f))}On.STAT_EVENT="statevent";function Dl(a,f){Ce.call(this,On.STAT_EVENT,a),this.stat=f}b(Dl,Ce);function It(a){const f=jr();te(f,new Dl(f,a))}On.Ma="timingevent";function Vl(a,f){Ce.call(this,On.Ma,a),this.size=f}b(Vl,Ce);function Ki(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Qi(){this.g=!0}Qi.prototype.xa=function(){this.g=!1};function $m(a,f,_,C,j,z){a.info(function(){if(a.g)if(z)for(var Z="",Qe=z.split("&"),ht=0;ht<Qe.length;ht++){var Fe=Qe[ht].split("=");if(1<Fe.length){var gt=Fe[0];Fe=Fe[1];var yt=gt.split("_");Z=2<=yt.length&&yt[1]=="type"?Z+(gt+"="+Fe+"&"):Z+(gt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+C+") [attempt "+j+"]: "+f+`
`+_+`
`+Z})}function Zm(a,f,_,C,j,z,Z){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+j+"]: "+f+`
`+_+`
`+z+" "+Z})}function oi(a,f,_,C){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+t_(a,_)+(C?" "+C:"")})}function e_(a,f){a.info(function(){return"TIMEOUT: "+f})}Qi.prototype.info=function(){};function t_(a,f){if(!a.g)return f;if(!f)return null;try{var _=JSON.parse(f);if(_){for(a=0;a<_.length;a++)if(Array.isArray(_[a])){var C=_[a];if(!(2>C.length)){var j=C[1];if(Array.isArray(j)&&!(1>j.length)){var z=j[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<j.length;Z++)j[Z]=""}}}}return uo(_)}catch{return f}}var qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},po;function zr(){}b(zr,co),zr.prototype.g=function(){return new XMLHttpRequest},zr.prototype.i=function(){return{}},po=new zr;function dn(a,f,_,C){this.j=a,this.i=f,this.l=_,this.R=C||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var Ml={},mo={};function _o(a,f,_){a.L=1,a.v=Kr(Zt(f)),a.m=_,a.P=!0,Ul(a,null)}function Ul(a,f){a.F=Date.now(),Hr(a),a.A=Zt(a.v);var _=a.A,C=a.R;Array.isArray(C)||(C=[String(C)]),xl(_.i,"t",C),a.C=0,_=a.j.J,a.h=new Ll,a.g=mu(a.j,_?f:null,!a.m),0<a.O&&(a.M=new St(p(a.Y,a,a.g),a.O)),f=a.U,_=a.g,C=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(Et[0]=j.toString()),j=Et);for(var z=0;z<j.length;z++){var Z=he(_,j[z],C||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=a.H?A(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Gi(),$m(a.i,a.u,a.A,a.l,a.R,a.m)}dn.prototype.ca=function(a){a=a.target;const f=this.M;f&&en(a)==3?f.j():this.Y(a)},dn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=en(this.g);var f=this.g.Ba();const ui=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||ru(this.g)))){this.J||yt!=4||f==7||(f==8||0>=ui?Gi(3):Gi(2)),go(this);var _=this.g.Z();this.X=_;t:if(Fl(this)){var C=ru(this.g);a="";var j=C.length,z=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Xi(this);var Z="";break t}this.h.i=new l.TextDecoder}for(f=0;f<j;f++)this.h.h=!0,a+=this.h.i.decode(C[f],{stream:!(z&&f==j-1)});C.length=0,this.h.g+=a,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=_==200,Zm(this.i,this.u,this.A,this.l,this.R,yt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,ht=this.g;if((Qe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Qe)){var Fe=Qe;break t}}Fe=null}if(_=Fe)oi(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yo(this,_);else{this.o=!1,this.s=3,It(12),Ln(this),Xi(this);break e}}if(this.P){_=!0;let Ft;for(;!this.J&&this.C<Z.length;)if(Ft=n_(this,Z),Ft==mo){yt==4&&(this.s=4,It(14),_=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Ml){this.s=4,It(15),oi(this.i,this.l,Z,"[Invalid Chunk]"),_=!1;break}else oi(this.i,this.l,Ft,null),yo(this,Ft);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||Z.length!=0||this.h.h||(this.s=1,It(16),_=!1),this.o=this.o&&_,!_)oi(this.i,this.l,Z,"[Invalid Chunked Response]"),Ln(this),Xi(this);else if(0<Z.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Io(gt),gt.M=!0,It(11))}}else oi(this.i,this.l,Z,null),yo(this,Z);yt==4&&Ln(this),this.o&&!this.J&&(yt==4?hu(this.j,this):(this.o=!1,Hr(this)))}else v_(this.g),_==400&&0<Z.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Ln(this),Xi(this)}}}catch{}finally{}};function Fl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function n_(a,f){var _=a.C,C=f.indexOf(`
`,_);return C==-1?mo:(_=Number(f.substring(_,C)),isNaN(_)?Ml:(C+=1,C+_>f.length?mo:(f=f.slice(C,C+_),a.C=C+_,f)))}dn.prototype.cancel=function(){this.J=!0,Ln(this)};function Hr(a){a.S=Date.now()+a.I,Bl(a,a.I)}function Bl(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ki(p(a.ba,a),f)}function go(a){a.B&&(l.clearTimeout(a.B),a.B=null)}dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(e_(this.i,this.A),this.L!=2&&(Gi(),It(17)),Ln(this),this.s=2,Xi(this)):Bl(this,this.S-a)};function Xi(a){a.j.G==0||a.J||hu(a.j,a)}function Ln(a){go(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,kl(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function yo(a,f){try{var _=a.j;if(_.G!=0&&(_.g==a||vo(_.h,a))){if(!a.K&&vo(_.h,a)&&_.G==3){try{var C=_.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var j=C;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<a.F)$r(_),Jr(_);else break e;Eo(_),It(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ki(p(_.Za,_),6e3));if(1>=zl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Un(_,11)}else if((a.K||_.g==a)&&$r(_),!L(f))for(j=_.Da.g.parse(f),f=0;f<j.length;f++){let Fe=j[f];if(_.T=Fe[0],Fe=Fe[1],_.G==2)if(Fe[0]=="c"){_.K=Fe[1],_.ia=Fe[2];const gt=Fe[3];gt!=null&&(_.la=gt,_.j.info("VER="+_.la));const yt=Fe[4];yt!=null&&(_.Aa=yt,_.j.info("SVER="+_.Aa));const ui=Fe[5];ui!=null&&typeof ui=="number"&&0<ui&&(C=1.5*ui,_.L=C,_.j.info("backChannelRequestTimeoutMs_="+C)),C=_;const Ft=a.g;if(Ft){const es=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var z=C.h;z.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(To(z,z.h),z.h=null))}if(C.D){const Ao=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(C.ya=Ao,Xe(C.I,C.D,Ao))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-a.F,_.j.info("Handshake RTT: "+_.R+"ms")),C=_;var Z=a;if(C.qa=pu(C,C.J?C.ia:null,C.W),Z.K){Hl(C.h,Z);var Qe=Z,ht=C.L;ht&&(Qe.I=ht),Qe.B&&(go(Qe),Hr(Qe)),C.g=Z}else uu(C);0<_.i.length&&xr(_)}else Fe[0]!="stop"&&Fe[0]!="close"||Un(_,7);else _.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Un(_,7):wo(_):Fe[0]!="noop"&&_.l&&_.l.ta(Fe),_.v=0)}}Gi(4)}catch{}}var i_=class{constructor(a,f){this.g=a,this.map=f}};function jl(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ql(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zl(a){return a.h?1:a.g?a.g.size:0}function vo(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function To(a,f){a.g?a.g.add(f):a.h=f}function Hl(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}jl.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const _ of a.g.values())f=f.concat(_.D);return f}return w(a.i)}function r_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],_=a.length,C=0;C<_;C++)f.push(a[C]);return f}f=[],_=0;for(C in a)f[_++]=a[C];return f}function s_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var _=0;_<a;_++)f.push(_);return f}f=[],_=0;for(const C in a)f[_++]=C;return f}}}function Gl(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var _=s_(a),C=r_(a),j=C.length,z=0;z<j;z++)f.call(void 0,C[z],_&&_[z],a)}var Kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o_(a,f){if(a){a=a.split("&");for(var _=0;_<a.length;_++){var C=a[_].indexOf("="),j=null;if(0<=C){var z=a[_].substring(0,C);j=a[_].substring(C+1)}else z=a[_];f(z,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Mn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mn){this.h=a.h,Wr(this,a.j),this.o=a.o,this.g=a.g,Gr(this,a.s),this.l=a.l;var f=a.i,_=new xi;_.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),Ql(this,_),this.m=a.m}else a&&(f=String(a).match(Kl))?(this.h=!1,Wr(this,f[1]||"",!0),this.o=Yi(f[2]||""),this.g=Yi(f[3]||"",!0),Gr(this,f[4]),this.l=Yi(f[5]||"",!0),Ql(this,f[6]||"",!0),this.m=Yi(f[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}Mn.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Ji(f,Xl,!0),":");var _=this.g;return(_||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Ji(f,Xl,!0),"@"),a.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&a.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&a.push("/"),a.push(Ji(_,_.charAt(0)=="/"?u_:l_,!0))),(_=this.i.toString())&&a.push("?",_),(_=this.m)&&a.push("#",Ji(_,h_)),a.join("")};function Zt(a){return new Mn(a)}function Wr(a,f,_){a.j=_?Yi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Gr(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ql(a,f,_){f instanceof xi?(a.i=f,f_(a.i,a.h)):(_||(f=Ji(f,c_)),a.i=new xi(f,a.h))}function Xe(a,f,_){a.i.set(f,_)}function Kr(a){return Xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Yi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ji(a,f,_){return typeof a=="string"?(a=encodeURI(a).replace(f,a_),_&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function a_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xl=/[#\/\?@]/g,l_=/[#\?:]/g,u_=/[#\?]/g,c_=/[#\?@]/g,h_=/#/g;function xi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function pn(a){a.g||(a.g=new Map,a.h=0,a.i&&o_(a.i,function(f,_){a.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}n=xi.prototype,n.add=function(a,f){pn(this),this.i=null,a=ai(this,a);var _=this.g.get(a);return _||this.g.set(a,_=[]),_.push(f),this.h+=1,this};function Yl(a,f){pn(a),f=ai(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Jl(a,f){return pn(a),f=ai(a,f),a.g.has(f)}n.forEach=function(a,f){pn(this),this.g.forEach(function(_,C){_.forEach(function(j){a.call(f,j,C,this)},this)},this)},n.na=function(){pn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),_=[];for(let C=0;C<f.length;C++){const j=a[C];for(let z=0;z<j.length;z++)_.push(f[C])}return _},n.V=function(a){pn(this);let f=[];if(typeof a=="string")Jl(this,a)&&(f=f.concat(this.g.get(ai(this,a))));else{a=Array.from(this.g.values());for(let _=0;_<a.length;_++)f=f.concat(a[_])}return f},n.set=function(a,f){return pn(this),this.i=null,a=ai(this,a),Jl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function xl(a,f,_){Yl(a,f),0<_.length&&(a.i=null,a.g.set(ai(a,f),w(_)),a.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var _=0;_<f.length;_++){var C=f[_];const z=encodeURIComponent(String(C)),Z=this.V(C);for(C=0;C<Z.length;C++){var j=z;Z[C]!==""&&(j+="="+encodeURIComponent(String(Z[C]))),a.push(j)}}return this.i=a.join("&")};function ai(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function f_(a,f){f&&!a.j&&(pn(a),a.i=null,a.g.forEach(function(_,C){var j=C.toLowerCase();C!=j&&(Yl(this,C),xl(this,j,_))},a)),a.j=f}function d_(a,f){const _=new Qi;if(l.Image){const C=new Image;C.onload=g(mn,_,"TestLoadImage: loaded",!0,f,C),C.onerror=g(mn,_,"TestLoadImage: error",!1,f,C),C.onabort=g(mn,_,"TestLoadImage: abort",!1,f,C),C.ontimeout=g(mn,_,"TestLoadImage: timeout",!1,f,C),l.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else f(!1)}function p_(a,f){const _=new Qi,C=new AbortController,j=setTimeout(()=>{C.abort(),mn(_,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:C.signal}).then(z=>{clearTimeout(j),z.ok?mn(_,"TestPingServer: ok",!0,f):mn(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(j),mn(_,"TestPingServer: error",!1,f)})}function mn(a,f,_,C,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),C(_)}catch{}}function m_(){this.g=new xm}function __(a,f,_){const C=_||"";try{Gl(a,function(j,z){let Z=j;c(j)&&(Z=uo(j)),f.push(C+z+"="+encodeURIComponent(Z))})}catch(j){throw f.push(C+"type="+encodeURIComponent("_badmap")),j}}function Qr(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Qr,co),Qr.prototype.g=function(){return new Xr(this.l,this.j)},Qr.prototype.i=function(a){return function(){return a}}({});function Xr(a,f){G.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Xr,G),n=Xr.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Zi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$l(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $l(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?$i(this):Zi(this),this.readyState==3&&$l(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,$i(this))},n.Qa=function(a){this.g&&(this.response=a,$i(this))},n.ga=function(){this.g&&$i(this)};function $i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zi(a)}n.setRequestHeader=function(a,f){this.u.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,a.push(_[0]+": "+_[1]),_=f.next();return a.join(`\r
`)};function Zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zl(a){let f="";return F(a,function(_,C){f+=C,f+=":",f+=_,f+=`\r
`}),f}function bo(a,f,_){e:{for(C in _){var C=!1;break e}C=!0}C||(_=Zl(_),typeof a=="string"?_!=null&&encodeURIComponent(String(_)):Xe(a,f,_))}function Ze(a){G.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ze,G);var g_=/^https?$/i,y_=["POST","PUT"];n=Ze.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,f,_,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():po.g(),this.v=this.o?Cl(this.o):Cl(po),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(z){eu(this,z);return}if(a=_||"",_=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var j in C)_.set(j,C[j]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const z of C.keys())_.set(z,C.get(z));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(y_,f,void 0))||C||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of _)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{iu(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){eu(this,z)}};function eu(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,tu(a),Yr(a)}function tu(a){a.A||(a.A=!0,te(a,"complete"),te(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,te(this,"complete"),te(this,"abort"),Yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yr(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nu(this):this.bb())},n.bb=function(){nu(this)};function nu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||en(a)!=4||a.Z()!=2)){if(a.u&&en(a)==4)Ie(a.Ea,0,a);else if(te(a,"readystatechange"),en(a)==4){a.h=!1;try{const Z=a.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var _;if(!(_=f)){var C;if(C=Z===0){var j=String(a.D).match(Kl)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),C=!g_.test(j?j.toLowerCase():"")}_=C}if(_)te(a,"complete"),te(a,"success");else{a.m=6;try{var z=2<en(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",tu(a)}}finally{Yr(a)}}}}function Yr(a,f){if(a.g){iu(a);const _=a.g,C=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||te(a,"ready");try{_.onreadystatechange=C}catch{}}}function iu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function en(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Jm(f)}};function ru(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function v_(a){const f={};a=(a.g&&2<=en(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(L(a[C]))continue;var _=P(a[C]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=f[j]||[];f[j]=z,z.push(_)}R(f,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(a,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[a]||f}function su(a){this.Aa=0,this.i=[],this.j=new Qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,a),this.cb=er("retryDelaySeedMs",1e4,a),this.Wa=er("forwardChannelMaxRetries",2,a),this.wa=er("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new jl(a&&a.concurrentRequestLimit),this.Da=new m_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=su.prototype,n.la=8,n.G=1,n.connect=function(a,f,_,C){It(0),this.W=a,this.H=f||{},_&&C!==void 0&&(this.H.OSID=_,this.H.OAID=C),this.F=this.X,this.I=pu(this,null,this.W),xr(this)};function wo(a){if(ou(a),a.G==3){var f=a.U++,_=Zt(a.I);if(Xe(_,"SID",a.K),Xe(_,"RID",f),Xe(_,"TYPE","terminate"),tr(a,_),f=new dn(a,a.j,f),f.L=2,f.v=Kr(Zt(_)),_=!1,l.navigator&&l.navigator.sendBeacon)try{_=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!_&&l.Image&&(new Image().src=f.v,_=!0),_||(f.g=mu(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Hr(f)}du(a)}function Jr(a){a.g&&(Io(a),a.g.cancel(),a.g=null)}function ou(a){Jr(a),a.u&&(l.clearTimeout(a.u),a.u=null),$r(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xr(a){if(!ql(a.h)&&!a.s){a.s=!0;var f=a.Ga;x||Te(),me||(x(),me=!0),ce.add(f,a),a.B=0}}function T_(a,f){return zl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ki(p(a.Ga,a,f),fu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new dn(this,this.j,a);let z=this.o;if(this.S&&(z?(z=A(z),k(z,this.S)):z=this.S),this.m!==null||this.O||(j.H=z,z=null),this.P)e:{for(var f=0,_=0;_<this.i.length;_++){t:{var C=this.i[_];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=_;break e}if(f===4096||_===this.i.length-1){f=_+1;break e}}f=1e3}else f=1e3;f=lu(this,j,f),_=Zt(this.I),Xe(_,"RID",a),Xe(_,"CVER",22),this.D&&Xe(_,"X-HTTP-Session-Id",this.D),tr(this,_),z&&(this.O?f="headers="+encodeURIComponent(String(Zl(z)))+"&"+f:this.m&&bo(_,this.m,z)),To(this.h,j),this.Ua&&Xe(_,"TYPE","init"),this.P?(Xe(_,"$req",f),Xe(_,"SID","null"),j.T=!0,_o(j,_,null)):_o(j,_,f),this.G=2}}else this.G==3&&(a?au(this,a):this.i.length==0||ql(this.h)||au(this))};function au(a,f){var _;f?_=f.l:_=a.U++;const C=Zt(a.I);Xe(C,"SID",a.K),Xe(C,"RID",_),Xe(C,"AID",a.T),tr(a,C),a.m&&a.o&&bo(C,a.m,a.o),_=new dn(a,a.j,_,a.B+1),a.m===null&&(_.H=a.o),f&&(a.i=f.D.concat(a.i)),f=lu(a,_,1e3),_.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),To(a.h,_),_o(_,C,f)}function tr(a,f){a.H&&F(a.H,function(_,C){Xe(f,C,_)}),a.l&&Gl({},function(_,C){Xe(f,C,_)})}function lu(a,f,_){_=Math.min(a.i.length,_);var C=a.l?p(a.l.Na,a.l,a):null;e:{var j=a.i;let z=-1;for(;;){const Z=["count="+_];z==-1?0<_?(z=j[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let Qe=!0;for(let ht=0;ht<_;ht++){let Fe=j[ht].g;const gt=j[ht].map;if(Fe-=z,0>Fe)z=Math.max(0,j[ht].g-100),Qe=!1;else try{__(gt,Z,"req"+Fe+"_")}catch{C&&C(gt)}}if(Qe){C=Z.join("&");break e}}}return a=a.i.splice(0,_),f.D=a,C}function uu(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;x||Te(),me||(x(),me=!0),ce.add(f,a),a.v=0}}function Eo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ki(p(a.Fa,a),fu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ki(p(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Jr(this),cu(this))};function Io(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cu(a){a.g=new dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Zt(a.qa);Xe(f,"RID","rpc"),Xe(f,"SID",a.K),Xe(f,"AID",a.T),Xe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Xe(f,"TO",a.ja),Xe(f,"TYPE","xmlhttp"),tr(a,f),a.m&&a.o&&bo(f,a.m,a.o),a.L&&(a.g.I=a.L);var _=a.g;a=a.ia,_.L=1,_.v=Kr(Zt(f)),_.m=null,_.P=!0,Ul(_,a)}n.Za=function(){this.C!=null&&(this.C=null,Jr(this),Eo(this),It(19))};function $r(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hu(a,f){var _=null;if(a.g==f){$r(a),Io(a),a.g=null;var C=2}else if(vo(a.h,f))_=f.D,Hl(a.h,f),C=1;else return;if(a.G!=0){if(f.o)if(C==1){_=f.m?f.m.length:0,f=Date.now()-f.F;var j=a.B;C=jr(),te(C,new Vl(C,_)),xr(a)}else uu(a);else if(j=f.s,j==3||j==0&&0<f.X||!(C==1&&T_(a,f)||C==2&&Eo(a)))switch(_&&0<_.length&&(f=a.h,f.i=f.i.concat(_)),j){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function fu(a,f){let _=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(_*=2),_*f}function Un(a,f){if(a.j.info("Error code "+f),f==2){var _=p(a.fb,a),C=a.Xa;const j=!C;C=new Mn(C||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wr(C,"https"),Kr(C),j?d_(C.toString(),_):p_(C.toString(),_)}else It(2);a.G=0,a.l&&a.l.sa(f),du(a),ou(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function du(a){if(a.G=0,a.ka=[],a.l){const f=Wl(a.h);(f.length!=0||a.i.length!=0)&&(I(a.ka,f),I(a.ka,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.ra()}}function pu(a,f,_){var C=_ instanceof Mn?Zt(_):new Mn(_);if(C.g!="")f&&(C.g=f+"."+C.g),Gr(C,C.s);else{var j=l.location;C=j.protocol,f=f?f+"."+j.hostname:j.hostname,j=+j.port;var z=new Mn(null);C&&Wr(z,C),f&&(z.g=f),j&&Gr(z,j),_&&(z.l=_),C=z}return _=a.D,f=a.ya,_&&f&&Xe(C,_,f),Xe(C,"VER",a.la),tr(a,C),C}function mu(a,f,_){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ze(new Qr({eb:_})):new Ze(a.pa),f.Ha(a.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _u(){}n=_u.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zr(){}Zr.prototype.g=function(a,f){return new Nt(a,f)};function Nt(a,f){G.call(this),this.g=new su(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!L(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!L(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new li(this)}b(Nt,G),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){wo(this.g)},Nt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var _={};_.__data__=a,a=_}else this.u&&(_={},_.__data__=uo(a),a=_);f.i.push(new i_(f.Ya++,a)),f.G==3&&xr(f)},Nt.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,Nt.aa.N.call(this)};function gu(a){ho.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const _ in f){a=_;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}b(gu,ho);function yu(){fo.call(this),this.status=1}b(yu,fo);function li(a){this.g=a}b(li,_u),li.prototype.ua=function(){te(this.g,"a")},li.prototype.ta=function(a){te(this.g,new gu(a))},li.prototype.sa=function(a){te(this.g,new yu)},li.prototype.ra=function(){te(this.g,"b")},Zr.prototype.createWebChannel=Zr.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,up=function(){return new Zr},lp=function(){return jr()},ap=On,ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,ps=qr,Ol.COMPLETE="complete",op=Ol,Pl.EventType=Wi,Wi.OPEN="a",Wi.CLOSE="b",Wi.ERROR="c",Wi.MESSAGE="d",G.prototype.listen=G.prototype.K,rr=Pl,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,sp=Ze}).apply(typeof is<"u"?is:typeof self<"u"?self:typeof window<"u"?window:{});const $u="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Bi="10.14.0";/**
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
 */const Yn=new ba("@firebase/firestore");function nr(){return Yn.logLevel}function de(n,...e){if(Yn.logLevel<=De.DEBUG){const t=e.map(La);Yn.debug(`Firestore (${Bi}): ${n}`,...t)}}function cn(n,...e){if(Yn.logLevel<=De.ERROR){const t=e.map(La);Yn.error(`Firestore (${Bi}): ${n}`,...t)}}function Ri(n,...e){if(Yn.logLevel<=De.WARN){const t=e.map(La);Yn.warn(`Firestore (${Bi}): ${n}`,...t)}}function La(n){if(typeof n=="string")return n;try{/**
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
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+n;throw cn(e),new Error(e)}function We(n,e){n||we()}function Re(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends $t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class An{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class cp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Tt.UNAUTHENTICATED))}shutdown(){}}class p0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class m0{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(We(typeof i.accessToken=="string"),new cp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Tt(e)}}class _0{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class g0{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new _0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const i=s=>{s.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,de("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string"),this.R=t.token,new y0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function T0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class hp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=T0(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function Be(n,e){return n<e?-1:n>e?1:0}function ki(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class ut{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ut(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ut(0,0))}static max(){return new Ae(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vr{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends vr{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const b0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends vr{construct(e,t,i){return new dt(e,t,i)}static isValidIdentifier(e){return b0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ue(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ue(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ue(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(i+=l,r++):(s(),r++)}if(s(),o)throw new ue(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function w0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=Ae.fromTimestamp(i===1e9?new ut(t+1,0):new ut(t,i));return new Cn(r,ge.empty(),e)}function E0(n){return new Cn(n.readTime,n.key,-1)}class Cn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Cn(Ae.min(),ge.empty(),-1)}static max(){return new Cn(Ae.max(),ge.empty(),-1)}}function I0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
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
 */const A0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Or(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==A0)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let r=0,s=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++s,o&&s===r&&t()},u=>i(u))}),o=!0,s===r&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(r=>r?K.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new K((i,r)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++l,l===s&&i(o)},h=>r(h))}})}static doWhile(e,t){return new K((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function k0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ma{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ma.oe=-1;function Hs(n){return n==null}function ks(n){return n===0&&1/n==-1/0}function C0(n){return typeof n=="number"&&Number.isInteger(n)&&!ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ni(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class $e{constructor(e,t){this.comparator=e,this.root=t||ft.EMPTY}insert(e,t){return new $e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rs(this.root,e,this.comparator,!0)}}class rs{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??ft.RED,this.left=r??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new ft(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ft.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,r,s){return this}insert(e,t,i){return new ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(e){return new ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new pt(dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dp("Invalid base64 string: "+s):s}}(e);return new mt(t)}static fromUint8Array(e){const t=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const P0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(n){if(We(!!n),typeof n=="string"){let e=0;const t=P0.exec(n);if(We(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jn(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
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
 */function Ua(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fa(n){const e=n.mapValue.fields.__previous_value__;return Ua(e)?Fa(e):e}function Tr(n){const e=Pn(n.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class S0{constructor(e,t,i,r,s,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class br{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ss={mapValue:{}};function xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ua(n)?4:D0(n)?9007199254740991:N0(n)?10:11:we()}function xt(n,e){if(n===e)return!0;const t=xn(n);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tr(n).isEqual(Tr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Pn(r.timestampValue),l=Pn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return Jn(r.bytesValue).isEqual(Jn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return rt(r.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(r.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return rt(r.integerValue)===rt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=rt(r.doubleValue),l=rt(s.doubleValue);return o===l?ks(o)===ks(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return ki(n.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},l=s.mapValue.fields||{};if(Zu(o)!==Zu(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xt(o[u],l[u])))return!1;return!0}(n,e);default:return we()}}function wr(n,e){return(n.values||[]).find(t=>xt(t,e))!==void 0}function Ci(n,e){if(n===e)return 0;const t=xn(n),i=xn(e);if(t!==i)return Be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=rt(s.integerValue||s.doubleValue),u=rt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return tc(n.timestampValue,e.timestampValue);case 4:return tc(Tr(n),Tr(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(s,o){const l=Jn(s),u=Jn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=Be(l[c],u[c]);if(h!==0)return h}return Be(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Be(rt(s.latitude),rt(o.latitude));return l!==0?l:Be(rt(s.longitude),rt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const d=s.fields||{},p=o.fields||{},g=(l=d.value)===null||l===void 0?void 0:l.arrayValue,b=(u=p.value)===null||u===void 0?void 0:u.arrayValue,w=Be(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0);return w!==0?w:nc(g,b)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ss.mapValue&&o===ss.mapValue)return 0;if(s===ss.mapValue)return 1;if(o===ss.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let d=0;d<u.length&&d<h.length;++d){const p=Be(u[d],h[d]);if(p!==0)return p;const g=Ci(l[u[d]],c[h[d]]);if(g!==0)return g}return Be(u.length,h.length)}(n.mapValue,e.mapValue);default:throw we()}}function tc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=Pn(n),i=Pn(e),r=Be(t.seconds,i.seconds);return r!==0?r:Be(t.nanos,i.nanos)}function nc(n,e){const t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){const s=Ci(t[r],i[r]);if(s)return s}return Be(t.length,i.length)}function Pi(n){return na(n)}function na(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Pn(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=na(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${na(t.fields[o])}`;return r+"}"}(n.mapValue):we()}function ic(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ia(n){return!!n&&"integerValue"in n}function Ba(n){return!!n&&"arrayValue"in n}function rc(n){return!!n&&"nullValue"in n}function sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ms(n){return!!n&&"mapValue"in n}function N0(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function cr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ni(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=cr(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function D0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cr(t)}setAll(e){let t=dt.emptyPath(),i={},r=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,i,r),i={},r=[],t=l.popLast()}o?i[l.lastSegment()]=cr(o):r.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];ms(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){ni(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new kt(cr(this.value))}}function pp(n){const e=[];return ni(n.fields,(t,i)=>{const r=new dt([t]);if(ms(i)){const s=pp(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Dt(e)}/**
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
 */class bt{constructor(e,t,i,r,s,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,Ae.min(),Ae.min(),Ae.min(),kt.empty(),0)}static newFoundDocument(e,t,i,r){return new bt(e,1,t,Ae.min(),i,r,0)}static newNoDocument(e,t){return new bt(e,2,t,Ae.min(),Ae.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,Ae.min(),Ae.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cs{constructor(e,t){this.position=e,this.inclusive=t}}function oc(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=ge.comparator(ge.fromName(o.referenceValue),t.key):i=Ci(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function ac(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Er{constructor(e,t="asc"){this.field=e,this.dir=t}}function V0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class mp{}class at extends mp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new L0(e,t,i):t==="array-contains"?new F0(e,i):t==="in"?new B0(e,i):t==="not-in"?new j0(e,i):t==="array-contains-any"?new q0(e,i):new at(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new M0(e,i):new U0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ci(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(Ci(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new zt(e,t)}matches(e){return _p(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _p(n){return n.op==="and"}function gp(n){return O0(n)&&_p(n)}function O0(n){for(const e of n.filters)if(e instanceof zt)return!1;return!0}function ra(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Pi(n.value);if(gp(n))return n.filters.map(e=>ra(e)).join(",");{const e=n.filters.map(t=>ra(t)).join(",");return`${n.op}(${e})`}}function yp(n,e){return n instanceof at?function(i,r){return r instanceof at&&i.op===r.op&&i.field.isEqual(r.field)&&xt(i.value,r.value)}(n,e):n instanceof zt?function(i,r){return r instanceof zt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,l)=>s&&yp(o,r.filters[l]),!0):!1}(n,e):void we()}function vp(n){return n instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${Pi(t.value)}`}(n):n instanceof zt?function(t){return t.op.toString()+" {"+t.getFilters().map(vp).join(" ,")+"}"}(n):"Filter"}class L0 extends at{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class M0 extends at{constructor(e,t){super(e,"in",t),this.keys=Tp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class U0 extends at{constructor(e,t){super(e,"not-in",t),this.keys=Tp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ge.fromName(i.referenceValue))}class F0 extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ba(t)&&wr(t.arrayValue,this.value)}}class B0 extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wr(this.value.arrayValue,t)}}class j0 extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wr(this.value.arrayValue,t)}}class q0 extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>wr(this.value.arrayValue,i))}}/**
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
 */class z0{constructor(e,t=null,i=[],r=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function lc(n,e=null,t=[],i=[],r=null,s=null,o=null){return new z0(n,e,t,i,r,s,o)}function ja(n){const e=Re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>ra(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Hs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Pi(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Pi(i)).join(",")),e.ue=t}return e.ue}function qa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!V0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ac(n.startAt,e.startAt)&&ac(n.endAt,e.endAt)}function sa(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ji{constructor(e,t=null,i=[],r=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function H0(n,e,t,i,r,s,o,l){return new ji(n,e,t,i,r,s,o,l)}function za(n){return new ji(n)}function uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bp(n){return n.collectionGroup!==null}function hr(n){const e=Re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Er(s,i))}),t.has(dt.keyField().canonicalString())||e.ce.push(new Er(dt.keyField(),i))}return e.ce}function Kt(n){const e=Re(n);return e.le||(e.le=W0(e,hr(n))),e.le}function W0(n,e){if(n.limitType==="F")return lc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Er(r.field,s)});const t=n.endAt?new Cs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Cs(n.startAt.position,n.startAt.inclusive):null;return lc(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function oa(n,e){const t=n.filters.concat([e]);return new ji(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function aa(n,e,t){return new ji(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ws(n,e){return qa(Kt(n),Kt(e))&&n.limitType===e.limitType}function wp(n){return`${ja(Kt(n))}|lt:${n.limitType}`}function di(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>vp(r)).join(", ")}]`),Hs(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Pi(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Pi(r)).join(",")),`Target(${i})`}(Kt(n))}; limitType=${n.limitType})`}function Gs(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):ge.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of hr(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(o,l,u){const c=oc(o,l,u);return o.inclusive?c<=0:c<0}(i.startAt,hr(i),r)||i.endAt&&!function(o,l,u){const c=oc(o,l,u);return o.inclusive?c>=0:c>0}(i.endAt,hr(i),r))}(n,e)}function G0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ep(n){return(e,t)=>{let i=!1;for(const r of hr(n)){const s=K0(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function K0(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ci(u,c):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
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
 */class qi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return fp(this.inner)}size(){return this.innerSize}}/**
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
 */const Q0=new $e(ge.comparator);function hn(){return Q0}const Ip=new $e(ge.comparator);function sr(...n){let e=Ip;for(const t of n)e=e.insert(t.key,t);return e}function Ap(n){let e=Ip;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function qn(){return fr()}function Rp(){return fr()}function fr(){return new qi(n=>n.toString(),(n,e)=>n.isEqual(e))}const X0=new $e(ge.comparator),Y0=new pt(ge.comparator);function Ne(...n){let e=Y0;for(const t of n)e=e.add(t);return e}const J0=new pt(Be);function x0(){return J0}/**
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
 */function Ha(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(e)?"-0":e}}function kp(n){return{integerValue:""+n}}function Cp(n,e){return C0(e)?kp(e):Ha(n,e)}/**
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
 */class Ks{constructor(){this._=void 0}}function $0(n,e,t){return n instanceof Ir?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Ua(s)&&(s=Fa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Si?Sp(n,e):n instanceof Ni?Np(n,e):function(r,s){const o=Pp(r,s),l=cc(o)+cc(r.Pe);return ia(o)&&ia(r.Pe)?kp(l):Ha(r.serializer,l)}(n,e)}function Z0(n,e,t){return n instanceof Si?Sp(n,e):n instanceof Ni?Np(n,e):t}function Pp(n,e){return n instanceof Ar?function(i){return ia(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class Ir extends Ks{}class Si extends Ks{constructor(e){super(),this.elements=e}}function Sp(n,e){const t=Dp(e);for(const i of n.elements)t.some(r=>xt(r,i))||t.push(i);return{arrayValue:{values:t}}}class Ni extends Ks{constructor(e){super(),this.elements=e}}function Np(n,e){let t=Dp(e);for(const i of n.elements)t=t.filter(r=>!xt(r,i));return{arrayValue:{values:t}}}class Ar extends Ks{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function cc(n){return rt(n.integerValue||n.doubleValue)}function Dp(n){return Ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Qs{constructor(e,t){this.field=e,this.transform=t}}function eT(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof Si&&r instanceof Si||i instanceof Ni&&r instanceof Ni?ki(i.elements,r.elements,xt):i instanceof Ar&&r instanceof Ar?xt(i.Pe,r.Pe):i instanceof Ir&&r instanceof Ir}(n.transform,e.transform)}class tT{constructor(e,t){this.version=e,this.transformResults=t}}class Mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _s(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xs{}function Vp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wa(n.key,Mt.none()):new Mr(n.key,n.data,Mt.none());{const t=n.data,i=kt.empty();let r=new pt(dt.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Dn(n.key,i,new Dt(r.toArray()),Mt.none())}}function nT(n,e,t){n instanceof Mr?function(r,s,o){const l=r.value.clone(),u=fc(r.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Dn?function(r,s,o){if(!_s(r.precondition,s))return void s.convertToUnknownDocument(o.version);const l=fc(r.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Op(r)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,i){return n instanceof Mr?function(s,o,l,u){if(!_s(s.precondition,o))return l;const c=s.value.clone(),h=dc(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof Dn?function(s,o,l,u){if(!_s(s.precondition,o))return l;const c=dc(s.fieldTransforms,u,o),h=o.data;return h.setAll(Op(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(n,e,t,i):function(s,o,l){return _s(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function iT(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=Pp(i.transform,r||null);s!=null&&(t===null&&(t=kt.empty()),t.set(i.field,s))}return t||null}function hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&ki(i,r,(s,o)=>eT(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mr extends Xs{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Dn extends Xs{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Op(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function fc(n,e,t){const i=new Map;We(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,l=e.data.field(s.field);i.set(s.field,Z0(o,l,t[r]))}return i}function dc(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,$0(s,o,e))}return i}class Wa extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rT extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sT{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&nT(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dr(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dr(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Rp();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(r.key)?null:l;const u=Vp(o,l);u!==null&&i.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(t,i)=>hc(t,i))&&ki(this.baseMutations,e.baseMutations,(t,i)=>hc(t,i))}}class Ga{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){We(e.mutations.length===i.length);let r=function(){return X0}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Ga(e,t,i,r)}}/**
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
 */class oT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,Ve;function lT(n){switch(n){default:return we();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function Lp(n){if(n===void 0)return cn("GRPC error has no .code"),H.UNKNOWN;switch(n){case ot.OK:return H.OK;case ot.CANCELLED:return H.CANCELLED;case ot.UNKNOWN:return H.UNKNOWN;case ot.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ot.INTERNAL:return H.INTERNAL;case ot.UNAVAILABLE:return H.UNAVAILABLE;case ot.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ot.NOT_FOUND:return H.NOT_FOUND;case ot.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ot.ABORTED:return H.ABORTED;case ot.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ot.DATA_LOSS:return H.DATA_LOSS;default:return we()}}(Ve=ot||(ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uT(){return new TextEncoder}/**
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
 */const cT=new Gn([4294967295,4294967295],0);function pc(n){const e=uT().encode(n),t=new rp;return t.update(e),new Uint8Array(t.digest())}function mc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gn([t,i],0),new Gn([r,s],0)]}class Ka{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(i<0)throw new or(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Gn.fromNumber(this.Ie)}Ee(e,t,i){let r=e.add(t.multiply(Gn.fromNumber(i)));return r.compare(cT)===1&&(r=new Gn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=pc(e),[i,r]=mc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ka(s,r,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=pc(e),[i,r]=mc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ys{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ys(Ae.min(),r,new $e(Be),hn(),Ne())}}class Ur{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ur(i,t,Ne(),Ne(),Ne())}}/**
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
 */class gs{constructor(e,t,i,r){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=r}}class Mp{constructor(e,t){this.targetId=e,this.me=t}}class Up{constructor(e,t,i=mt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class _c{constructor(){this.fe=0,this.ge=yc(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:we()}}),new Ur(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=yc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hT{constructor(e){this.Le=e,this.Be=new Map,this.ke=hn(),this.qe=gc(),this.Qe=new $e(Be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,r)=>{this.ze(r)&&t(r)})}He(e){const t=e.targetId,i=e.me.count,r=this.Je(t);if(r){const s=r.target;if(sa(s))if(i===0){const o=new ge(s.path);this.Ue(t,o,bt.newNoDocument(o,Ae.min()))}else We(i===1);else{const o=this.Ye(t);if(o!==i){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=t;let o,l;try{o=Jn(i).toUint8Array()}catch(u){if(u instanceof dp)return Ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ka(o,r,s)}catch(u){return Ri(u instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let r=0;return i.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&sa(l.target)){const u=new ge(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,bt.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let i=Ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new Ys(e,t,this.Qe,this.ke,i);return this.ke=hn(),this.qe=gc(),this.Qe=new $e(Be),r}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new _c,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(Be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _c),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gc(){return new $e(ge.comparator)}function yc(){return new $e(ge.comparator)}const fT={asc:"ASCENDING",desc:"DESCENDING"},dT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pT={and:"AND",or:"OR"};class mT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function la(n,e){return n.useProto3Json||Hs(e)?e:{value:e}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _T(n,e){return Ps(n,e.toTimestamp())}function Qt(n){return We(!!n),Ae.fromTimestamp(function(t){const i=Pn(t);return new ut(i.seconds,i.nanos)}(n))}function Qa(n,e){return ua(n,e).canonicalString()}function ua(n,e){const t=function(r){return new Ye(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Bp(n){const e=Ye.fromString(n);return We(Wp(e)),e}function ca(n,e){return Qa(n.databaseId,e.path)}function Mo(n,e){const t=Bp(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(qp(t))}function jp(n,e){return Qa(n.databaseId,e)}function gT(n){const e=Bp(n);return e.length===4?Ye.emptyPath():qp(e)}function ha(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qp(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vc(n,e,t){return{name:ca(n,e),fields:t.value.mapValue.fields}}function yT(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(We(h===void 0||typeof h=="string"),mt.fromBase64String(h||"")):(We(h===void 0||h instanceof Buffer||h instanceof Uint8Array),mt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?H.UNKNOWN:Lp(c.code);return new ue(h,c.message||"")}(o);t=new Up(i,r,s,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Mo(n,i.document.name),s=Qt(i.document.updateTime),o=i.document.createTime?Qt(i.document.createTime):Ae.min(),l=new kt({mapValue:{fields:i.document.fields}}),u=bt.newFoundDocument(r,s,o,l),c=i.targetIds||[],h=i.removedTargetIds||[];t=new gs(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Mo(n,i.document),s=i.readTime?Qt(i.readTime):Ae.min(),o=bt.newNoDocument(r,s),l=i.removedTargetIds||[];t=new gs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Mo(n,i.document),s=i.removedTargetIds||[];t=new gs([],s,r,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new aT(r,s),l=i.targetId;t=new Mp(l,o)}}return t}function vT(n,e){let t;if(e instanceof Mr)t={update:vc(n,e.key,e.value)};else if(e instanceof Wa)t={delete:ca(n,e.key)};else if(e instanceof Dn)t={update:vc(n,e.key,e.data),updateMask:CT(e.fieldMask)};else{if(!(e instanceof rT))return we();t={verify:ca(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const l=o.transform;if(l instanceof Ir)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ar)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:_T(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:we()}(n,e.precondition)),t}function TT(n,e){return n&&n.length>0?(We(e!==void 0),n.map(t=>function(r,s){let o=r.updateTime?Qt(r.updateTime):Qt(s);return o.isEqual(Ae.min())&&(o=Qt(s)),new tT(o,r.transformResults||[])}(t,e))):[]}function bT(n,e){return{documents:[jp(n,e.path)]}}function wT(n,e){const t={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=jp(n,r);const s=function(c){if(c.length!==0)return Hp(zt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:pi(p.field),direction:AT(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=la(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:r}}function ET(n){let e=gT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){We(i===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(d){const p=zp(d);return p instanceof zt&&gp(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(p=>function(b){return new Er(mi(b.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(d){let p;return p=typeof d=="object"?d.value:d,Hs(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(d){const p=!!d.before,g=d.values||[];return new Cs(g,p)}(t.startAt));let c=null;return t.endAt&&(c=function(d){const p=!d.before,g=d.values||[];return new Cs(g,p)}(t.endAt)),H0(e,r,o,s,l,"F",u,c)}function IT(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=mi(t.unaryFilter.field);return at.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=mi(t.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(t.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return at.create(mi(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return zt.create(t.compositeFilter.filters.map(i=>zp(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function AT(n){return fT[n]}function RT(n){return dT[n]}function kT(n){return pT[n]}function pi(n){return{fieldPath:n.canonicalString()}}function mi(n){return dt.fromServerFormat(n.fieldPath)}function Hp(n){return n instanceof at?function(t){if(t.op==="=="){if(sc(t.value))return{unaryFilter:{field:pi(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:pi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sc(t.value))return{unaryFilter:{field:pi(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:pi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(t.field),op:RT(t.op),value:t.value}}}(n):n instanceof zt?function(t){const i=t.getFilters().map(r=>Hp(r));return i.length===1?i[0]:{compositeFilter:{op:kT(t.op),filters:i}}}(n):we()}function CT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wn{constructor(e,t,i,r,s=Ae.min(),o=Ae.min(),l=mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PT{constructor(e){this.ct=e}}function ST(n){const e=ET({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?aa(e,e.limit,"L"):e}/**
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
 */class NT{constructor(){this.un=new DT}addToCollectionParentIndex(e,t){return this.un.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Cn.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class DT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new pt(Ye.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new pt(Ye.comparator)).toArray()}}/**
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
 */class Di{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Di(0)}static kn(){return new Di(-1)}}/**
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
 */class VT{constructor(){this.changes=new qi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class LT{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&dr(i.mutation,r,Dt.empty(),ut.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const r=qn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=sr();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=qn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,r){let s=hn();const o=fr(),l=function(){return fr()}();return t.forEach((u,c)=>{const h=i.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Dn)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),dr(h.mutation,c,h.mutation.getFieldMask(),ut.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var d;return l.set(c,new OT(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,t){const i=fr();let r=new $e((o,l)=>o-l),s=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=i.get(u)||Dt.empty();h=l.applyToLocalView(c,h),i.set(u,h);const d=(r.get(l.batchId)||Ne()).add(u);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,d=Rp();h.forEach(p=>{if(!s.has(p)){const g=Vp(t.get(p),i.get(p));g!==null&&d.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return K.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):K.resolve(qn());let l=-1,u=s;return o.next(c=>K.forEach(c,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ne())).next(h=>({batchId:l,changes:Ap(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(i=>{let r=sr();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const s=t.collectionGroup;let o=sr();return this.indexManager.getCollectionParents(e,s).next(l=>K.forEach(l,u=>{const c=function(d,p){return new ji(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i,r).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s,r))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let l=sr();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&dr(h.mutation,c,Dt.empty(),ut.now()),Gs(t,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class MT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return K.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Qt(r.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(r){return{name:r.name,query:ST(r.bundledQuery),readTime:Qt(r.readTime)}}(t)),K.resolve()}}/**
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
 */class UT{constructor(){this.overlays=new $e(ge.comparator),this.Ir=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=qn();return K.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.ht(e,t,s)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const r=qn(),s=t.length+1,o=new ge(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return K.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new $e((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let h=s.get(c.largestBatchId);h===null&&(h=qn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=qn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=r)););return K.resolve(l)}ht(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new oT(t,i));let s=this.Ir.get(t);s===void 0&&(s=Ne(),this.Ir.set(t,s)),this.Ir.set(t,s.add(i.key))}}/**
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
 */class FT{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Xa{constructor(){this.Tr=new pt(ct.Er),this.dr=new pt(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new ct(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new ct(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ge(new Ye([])),i=new ct(t,e),r=new ct(t,e+1),s=[];return this.dr.forEachInRange([i,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ge(new Ye([])),i=new ct(t,e),r=new ct(t,e+1);let s=Ne();return this.dr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ct(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ct{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ge.comparator(e.key,t.key)||Be(e.wr,t.wr)}static Ar(e,t){return Be(e.wr,t.wr)||ge.comparator(e.key,t.key)}}/**
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
 */class BT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pt(ct.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sT(s,t,i,r);this.mutationQueue.push(o);for(const l of r)this.br=this.br.add(new ct(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,t){return K.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.vr(i),s=r<0?0:r;return K.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ct(t,0),r=new ct(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],o=>{const l=this.Dr(o.wr);s.push(l)}),K.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new pt(Be);return t.forEach(r=>{const s=new ct(r,0),o=new ct(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{i=i.add(l.wr)})}),K.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;ge.isDocumentKey(s)||(s=s.child(""));const o=new ct(new ge(s),0);let l=new pt(Be);return this.br.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(l=l.add(u.wr)),!0)},o),K.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(i=>{const r=this.Dr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){We(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return K.forEach(t.mutations,r=>{const s=new ct(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new ct(t,0),r=this.br.firstAfterOrEqual(i);return K.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jT{constructor(e){this.Mr=e,this.docs=function(){return new $e(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let i=hn();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():bt.newInvalidDocument(r))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=hn();const o=t.path,l=new ge(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||I0(E0(h),i)<=0||(r.has(h.key)||Gs(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return K.resolve(s)}getAllFromCollectionGroup(e,t,i,r){we()}Or(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new qT(this)}getSize(e){return K.resolve(this.size)}}class qT extends VT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class zT{constructor(e){this.persistence=e,this.Nr=new qi(t=>ja(t),qa),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xa,this.targetCount=0,this.kr=Di.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,r)=>t(r)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),K.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Di(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Kn(t),K.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),K.waitFor(s).next(()=>r)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),K.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
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
 */class HT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ma(0),this.Kr=!1,this.Kr=!0,this.$r=new FT,this.referenceDelegate=e(this),this.Ur=new zT(this),this.indexManager=new NT,this.remoteDocumentCache=function(r){return new jT(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new PT(t),this.Gr=new MT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new UT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new BT(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){de("MemoryPersistence","Starting transaction:",e);const r=new WT(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(e,t){return K.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class WT extends R0{constructor(e){super(),this.currentSequenceNumber=e}}class Ya{constructor(e){this.persistence=e,this.Jr=new Xa,this.Yr=null}static Zr(e){return new Ya(e)}get Xr(){if(this.Yr)return this.Yr;throw we()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,i=>{const r=ge.fromPath(i);return this.ei(e,r).next(s=>{s||t.removeEntry(r,Ae.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return K.or([()=>K.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ja{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=r}static Wi(e,t){let i=Ne(),r=Ne();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ja(e,t.fromCache,i,r)}}/**
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
 */class GT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return X_()?8:k0(wt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,r){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GT;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,i,r){return i.documentReadCount<this.ji?(nr()<=De.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",di(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(nr()<=De.DEBUG&&de("QueryEngine","Query:",di(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(nr()<=De.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",di(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):K.resolve())}Yi(e,t){if(uc(t))return K.resolve(null);let i=Kt(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=aa(t,null,"F"),i=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=Ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(u=>{const c=this.ts(t,l);return this.ns(t,c,o,u.readTime)?this.Yi(e,aa(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,i,r){return uc(t)||r.isEqual(Ae.min())?K.resolve(null):this.Ji.getDocuments(e,i).next(s=>{const o=this.ts(t,s);return this.ns(t,o,i,r)?K.resolve(null):(nr()<=De.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),di(t)),this.rs(e,o,t,w0(r,-1)).next(l=>l))})}ts(e,t){let i=new pt(Ep(e));return t.forEach((r,s)=>{Gs(e,s)&&(i=i.add(s))}),i}ns(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(e,t,i){return nr()<=De.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",di(t)),this.Ji.getDocumentsMatchingQuery(e,t,Cn.min(),i)}rs(e,t,i,r){return this.Ji.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class QT{constructor(e,t,i,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new $e(Be),this._s=new qi(s=>ja(s),qa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function XT(n,e,t,i){return new QT(n,e,t,i)}async function Gp(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],l=[];let u=Ne();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(i,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function YT(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const d=c.batch,p=d.keys();let g=K.resolve();return p.forEach(b=>{g=g.next(()=>h.getEntry(u,b)).next(w=>{const I=c.docVersions.get(b);We(I!==null),w.version.compareTo(I)<0&&(d.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),h.addEntry(w)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,d))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=Ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function Kp(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function JT(n,e){const t=Re(n),i=e.snapshotVersion;let r=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});r=t.os;const l=[];e.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;l.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,d).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,d)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,i)),r=r.insert(d,g),function(w,I,V){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(p,g,h)&&l.push(t.Ur.updateTargetData(s,g))});let u=hn(),c=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(xT(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!i.isEqual(Ae.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(d=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(h)}return K.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=r,s))}function xT(n,e,t){let i=Ne(),r=Ne();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=hn();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(Ae.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):de("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:r}})}function $T(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function ZT(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Ur.getTargetData(i,e).next(s=>s?(r=s,K.resolve(r)):t.Ur.allocateTargetId(i).next(o=>(r=new wn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function fa(n,e,t){const i=Re(n),r=i.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Lr(o))throw o;de("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.os=i.os.remove(e),i._s.delete(r.target)}function Tc(n,e,t){const i=Re(n);let r=Ae.min(),s=Ne();return i.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const d=Re(u),p=d._s.get(h);return p!==void 0?K.resolve(d.os.get(p)):d.Ur.getTargetData(c,h)}(i,o,Kt(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>i.ss.getDocumentsMatchingQuery(o,e,t?r:Ae.min(),t?s:Ne())).next(l=>(eb(i,G0(e),l),{documents:l,Ts:s})))}function eb(n,e,t){let i=n.us.get(e)||Ae.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(e,i)}class bc{constructor(){this.activeTargetIds=x0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tb{constructor(){this.so=new bc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bc,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nb{_o(e){}shutdown(){}}/**
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
 */class wc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){de("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){de("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let os=null;function Uo(){return os===null?os=function(){return 268435456+Math.round(2147483648*Math.random())}():os++,"0x"+os.toString(16)}/**
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
 */const ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class sb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(t,i,r,s,o){const l=Uo(),u=this.xo(t,i.toUriEncodedString());de("RestConnection",`Sending RPC '${t}' ${l}:`,u,r);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,r).then(h=>(de("RestConnection",`Received RPC '${t}' ${l}: `,h),h),h=>{throw Ri("RestConnection",`RPC '${t}' ${l} failed with error: `,h,"url: ",u,"request:",r),h})}Lo(t,i,r,s,o,l){return this.Mo(t,i,r,s,o)}Oo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}xo(t,i){const r=ib[t];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,r){const s=Uo();return new Promise((o,l)=>{const u=new sp;u.setWithCredentials(!0),u.listenOnce(op.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ps.NO_ERROR:const h=u.getResponseJson();de(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ps.TIMEOUT:de(vt,`RPC '${e}' ${s} timed out`),l(new ue(H.DEADLINE_EXCEEDED,"Request time out"));break;case ps.HTTP_ERROR:const d=u.getStatus();if(de(vt,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const b=function(I){const V=I.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(V)>=0?V:H.UNKNOWN}(g.status);l(new ue(b,g.message))}else l(new ue(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ue(H.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{de(vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);de(vt,`RPC '${e}' ${s} sending request:`,r),u.send(t,"POST",c,i,15)})}Bo(e,t,i){const r=Uo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=up(),l=lp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const h=s.join("");de(vt,`Creating RPC '${e}' stream ${r}: ${h}`,u);const d=o.createWebChannel(h,u);let p=!1,g=!1;const b=new rb({Io:I=>{g?de(vt,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(p||(de(vt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),de(vt,`RPC '${e}' stream ${r} sending:`,I),d.send(I))},To:()=>d.close()}),w=(I,V,L)=>{I.listen(V,D=>{try{L(D)}catch(M){setTimeout(()=>{throw M},0)}})};return w(d,rr.EventType.OPEN,()=>{g||(de(vt,`RPC '${e}' stream ${r} transport opened.`),b.yo())}),w(d,rr.EventType.CLOSE,()=>{g||(g=!0,de(vt,`RPC '${e}' stream ${r} transport closed`),b.So())}),w(d,rr.EventType.ERROR,I=>{g||(g=!0,Ri(vt,`RPC '${e}' stream ${r} transport errored:`,I),b.So(new ue(H.UNAVAILABLE,"The operation could not be completed")))}),w(d,rr.EventType.MESSAGE,I=>{var V;if(!g){const L=I.data[0];We(!!L);const D=L,M=D.error||((V=D[0])===null||V===void 0?void 0:V.error);if(M){de(vt,`RPC '${e}' stream ${r} received error:`,M);const U=M.status;let F=function(E){const k=ot[E];if(k!==void 0)return Lp(k)}(U),R=M.message;F===void 0&&(F=H.INTERNAL,R="Unknown error status: "+U+" with message "+M.message),g=!0,b.So(new ue(F,R)),d.close()}else de(vt,`RPC '${e}' stream ${r} received:`,L),b.bo(L)}}),w(l,ap.STAT_EVENT,I=>{I.stat===ta.PROXY?de(vt,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===ta.NOPROXY&&de(vt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Fo(){return typeof document<"u"?document:null}/**
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
 */function Js(n){return new mT(n,!0)}/**
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
 */class Qp{constructor(e,t,i=1e3,r=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-i);r>0&&de("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Xp{constructor(e,t,i,r,s,o,l,u){this.ui=e,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(cn(t.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===t&&this.P_(i,r)},i=>{e(()=>{const r=new ue(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return de("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(de("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ob extends Xp{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yT(this.serializer,e),i=function(s){if(!("targetChange"in s))return Ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Ae.min():o.readTime?Qt(o.readTime):Ae.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=ha(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=sa(u)?{documents:bT(s,u)}:{query:wT(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Fp(s,o.resumeToken);const c=la(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Ae.min())>0){l.readTime=Ps(s,o.snapshotVersion.toTimestamp());const c=la(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const i=IT(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=ha(this.serializer),t.removeTarget=e,this.a_(t)}}class ab extends Xp{constructor(e,t,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=TT(e.writeResults,e.commitTime),i=Qt(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=ha(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>vT(this.serializer,i))};this.a_(t)}}/**
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
 */class lb extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ua(t,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ue(H.UNKNOWN,s.toString())})}Lo(e,t,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ua(t,i),r,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ub{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(cn(t),this.D_=!1):de("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cb{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{i.enqueueAndForget(async()=>{ii(this)&&(de("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Re(u);c.L_.add(4),await Fr(c),c.q_.set("Unknown"),c.L_.delete(4),await xs(c)}(this))})}),this.q_=new ub(i,r)}}async function xs(n){if(ii(n))for(const e of n.B_)await e(!0)}async function Fr(n){for(const e of n.B_)await e(!1)}function Yp(n,e){const t=Re(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),el(t)?Za(t):zi(t).r_()&&$a(t,e))}function xa(n,e){const t=Re(n),i=zi(t);t.N_.delete(e),i.r_()&&Jp(t,e),t.N_.size===0&&(i.r_()?i.o_():ii(t)&&t.q_.set("Unknown"))}function $a(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zi(n).A_(e)}function Jp(n,e){n.Q_.xe(e),zi(n).R_(e)}function Za(n){n.Q_=new hT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zi(n).start(),n.q_.v_()}function el(n){return ii(n)&&!zi(n).n_()&&n.N_.size>0}function ii(n){return Re(n).L_.size===0}function xp(n){n.Q_=void 0}async function hb(n){n.q_.set("Online")}async function fb(n){n.N_.forEach((e,t)=>{$a(n,e)})}async function db(n,e){xp(n),el(n)?(n.q_.M_(e),Za(n)):n.q_.set("Unknown")}async function pb(n,e,t){if(n.q_.set("Online"),e instanceof Up&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const l of s.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(n,e)}catch(i){de("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ss(n,i)}else if(e instanceof gs?n.Q_.Ke(e):e instanceof Mp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ae.min()))try{const i=await Kp(n.localStore);t.compareTo(i)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(mt.EMPTY_BYTE_STRING,h.snapshotVersion)),Jp(s,u);const d=new wn(h.target,u,c,h.sequenceNumber);$a(s,d)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){de("RemoteStore","Failed to raise snapshot:",i),await Ss(n,i)}}async function Ss(n,e,t){if(!Lr(e))throw e;n.L_.add(1),await Fr(n),n.q_.set("Offline"),t||(t=()=>Kp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{de("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await xs(n)})}function $p(n,e){return e().catch(t=>Ss(n,t,e))}async function $s(n){const e=Re(n),t=Sn(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mb(e);)try{const r=await $T(e.localStore,i);if(r===null){e.O_.length===0&&t.o_();break}i=r.batchId,_b(e,r)}catch(r){await Ss(e,r)}Zp(e)&&em(e)}function mb(n){return ii(n)&&n.O_.length<10}function _b(n,e){n.O_.push(e);const t=Sn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Zp(n){return ii(n)&&!Sn(n).n_()&&n.O_.length>0}function em(n){Sn(n).start()}async function gb(n){Sn(n).p_()}async function yb(n){const e=Sn(n);for(const t of n.O_)e.m_(t.mutations)}async function vb(n,e,t){const i=n.O_.shift(),r=Ga.from(i,e,t);await $p(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await $s(n)}async function Tb(n,e){e&&Sn(n).V_&&await async function(i,r){if(function(o){return lT(o)&&o!==H.ABORTED}(r.code)){const s=i.O_.shift();Sn(i).s_(),await $p(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $s(i)}}(n,e),Zp(n)&&em(n)}async function Ec(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),de("RemoteStore","RemoteStore received new credentials");const i=ii(t);t.L_.add(3),await Fr(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await xs(t)}async function bb(n,e){const t=Re(n);e?(t.L_.delete(2),await xs(t)):e||(t.L_.add(2),await Fr(t),t.q_.set("Unknown"))}function zi(n){return n.K_||(n.K_=function(t,i,r){const s=Re(t);return s.w_(),new ob(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:hb.bind(null,n),Ro:fb.bind(null,n),mo:db.bind(null,n),d_:pb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),el(n)?Za(n):n.q_.set("Unknown")):(await n.K_.stop(),xp(n))})),n.K_}function Sn(n){return n.U_||(n.U_=function(t,i,r){const s=Re(t);return s.w_(),new ab(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:gb.bind(null,n),mo:Tb.bind(null,n),f_:yb.bind(null,n),g_:vb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await $s(n)):(await n.U_.stop(),n.O_.length>0&&(de("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class tl{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,l=new tl(e,t,o,r,s);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nl(n,e){if(cn("AsyncQueue",`${e}: ${n}`),Lr(n))return new ue(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wi{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=sr(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new wi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Ic{constructor(){this.W_=new $e(ge.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):we():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Vi{constructor(e,t,i,r,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Vi(e,t,wi.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class wb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Eb{constructor(){this.queries=Ac(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const r=Re(t),s=r.queries;r.queries=Ac(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(i)})})(this,new ue(H.ABORTED,"Firestore shutting down"))}}function Ac(){return new qi(n=>wp(n),Ws)}async function tm(n,e){const t=Re(n);let i=3;const r=e.query;let s=t.queries.get(r);s?!s.H_()&&e.J_()&&(i=2):(s=new wb,i=e.J_()?0:1);try{switch(i){case 0:s.z_=await t.onListen(r,!0);break;case 1:s.z_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=nl(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&il(t)}async function nm(n,e){const t=Re(n),i=e.query;let r=3;const s=t.queries.get(i);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=e.J_()?0:1:!s.H_()&&e.J_()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ib(n,e){const t=Re(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(r)&&(i=!0);o.z_=r}}i&&il(t)}function Ab(n,e,t){const i=Re(n),r=i.queries.get(e);if(r)for(const s of r.j_)s.onError(t);i.queries.delete(e)}function il(n){n.Y_.forEach(e=>{e.next()})}var da,Rc;(Rc=da||(da={})).ea="default",Rc.Cache="cache";class im{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Vi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==da.Cache}}/**
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
 */class rm{constructor(e){this.key=e}}class sm{constructor(e){this.key=e}}class Rb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ne(),this.mutatedKeys=Ne(),this.Aa=Ep(e),this.Ra=new wi(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Ic,r=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const p=r.get(h),g=Gs(this.query,d)?d:null,b=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;p&&g?p.data.isEqual(g.data)?b!==w&&(i.track({type:3,doc:g}),I=!0):this.ga(p,g)||(i.track({type:2,doc:g}),I=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(l=!0)):!p&&g?(i.track({type:0,doc:g}),I=!0):p&&!g&&(i.track({type:1,doc:p}),I=!0,(u||c)&&(l=!0)),I&&(g?(o=o.add(g),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),i.track({type:1,doc:h})}return{Ra:o,fa:i,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,b){const w=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return w(g)-w(b)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(i),r=r!=null&&r;const l=t&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Vi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ic,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ne(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new sm(i))}),this.da.forEach(i=>{e.has(i)||t.push(new rm(i))}),t}ba(e){this.Ta=e.Ts,this.da=Ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Vi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Cb{constructor(e){this.key=e,this.va=!1}}class Pb{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new qi(l=>wp(l),Ws),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(ge.comparator),this.Na=new Map,this.La=new Xa,this.Ba={},this.ka=new Map,this.qa=Di.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Sb(n,e,t=!0){const i=hm(n);let r;const s=i.Fa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await om(i,e,t,!0),r}async function Nb(n,e){const t=hm(n);await om(t,e,!0,!1)}async function om(n,e,t,i){const r=await ZT(n.localStore,Kt(e)),s=r.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return i&&(l=await Db(n,e,s,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&Yp(n.remoteStore,r),l}async function Db(n,e,t,i,r){n.Ka=(d,p,g)=>async function(w,I,V,L){let D=I.view.ma(V);D.ns&&(D=await Tc(w.localStore,I.query,!1).then(({documents:R})=>I.view.ma(R,D)));const M=L&&L.targetChanges.get(I.targetId),U=L&&L.targetMismatches.get(I.targetId)!=null,F=I.view.applyChanges(D,w.isPrimaryClient,M,U);return Cc(w,I.targetId,F.wa),F.snapshot}(n,d,p,g);const s=await Tc(n.localStore,e,!0),o=new Rb(e,s.Ts),l=o.ma(s.documents),u=Ur.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),c=o.applyChanges(l,n.isPrimaryClient,u);Cc(n,t,c.wa);const h=new kb(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function Vb(n,e,t){const i=Re(n),r=i.Fa.get(e),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(o=>!Ws(o,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await fa(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&xa(i.remoteStore,r.targetId),pa(i,r.targetId)}).catch(Or)):(pa(i,r.targetId),await fa(i.localStore,r.targetId,!0))}async function Ob(n,e){const t=Re(n),i=t.Fa.get(e),r=t.Ma.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),xa(t.remoteStore,i.targetId))}async function Lb(n,e,t){const i=zb(n);try{const r=await function(o,l){const u=Re(o),c=ut.now(),h=l.reduce((g,b)=>g.add(b.key),Ne());let d,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let b=hn(),w=Ne();return u.cs.getEntries(g,h).next(I=>{b=I,b.forEach((V,L)=>{L.isValidDocument()||(w=w.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,b)).next(I=>{d=I;const V=[];for(const L of l){const D=iT(L,d.get(L.key).overlayedDocument);D!=null&&V.push(new Dn(L.key,D,pp(D.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,V,l)}).next(I=>{p=I;const V=I.applyToLocalDocumentSet(d,w);return u.documentOverlayCache.saveOverlays(g,I.batchId,V)})}).then(()=>({batchId:p.batchId,changes:Ap(d)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new $e(Be)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(i,r.batchId,t),await Br(i,r.changes),await $s(i.remoteStore)}catch(r){const s=nl(r,"Failed to persist write");t.reject(s)}}async function am(n,e){const t=Re(n);try{const i=await JT(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.Na.get(s);o&&(We(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?We(o.va):r.removedDocuments.size>0&&(We(o.va),o.va=!1))}),await Br(t,i,e)}catch(i){await Or(i)}}function kc(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const u=Re(o);u.onlineState=l;let c=!1;u.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(l)&&(c=!0)}),c&&il(u)}(i.eventManager,e),r.length&&i.Ca.d_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Mb(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Na.get(e),s=r&&r.key;if(s){let o=new $e(ge.comparator);o=o.insert(s,bt.newNoDocument(s,Ae.min()));const l=Ne().add(s),u=new Ys(Ae.min(),new Map,new $e(Be),o,l);await am(i,u),i.Oa=i.Oa.remove(s),i.Na.delete(e),rl(i)}else await fa(i.localStore,e,!1).then(()=>pa(i,e,t)).catch(Or)}async function Ub(n,e){const t=Re(n),i=e.batch.batchId;try{const r=await YT(t.localStore,e);um(t,i,null),lm(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Br(t,r)}catch(r){await Or(r)}}async function Fb(n,e,t){const i=Re(n);try{const r=await function(o,l){const u=Re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(d=>(We(d!==null),h=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(i.localStore,e);um(i,e,t),lm(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Br(i,r)}catch(r){await Or(r)}}function lm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function um(n,e,t){const i=Re(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.Ba[i.currentUser.toKey()]=r}}function pa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||cm(n,i)})}function cm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(xa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),rl(n))}function Cc(n,e,t){for(const i of t)i instanceof rm?(n.La.addReference(i.key,e),Bb(n,i)):i instanceof sm?(de("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||cm(n,i.key)):we()}function Bb(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(de("SyncEngine","New document in limbo: "+t),n.xa.add(i),rl(n))}function rl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ge(Ye.fromString(e)),i=n.qa.next();n.Na.set(i,new Cb(t)),n.Oa=n.Oa.insert(t,i),Yp(n.remoteStore,new wn(Kt(za(t.path)),i,"TargetPurposeLimboResolution",Ma.oe))}}async function Br(n,e,t){const i=Re(n),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach((l,u)=>{o.push(i.Ka(u,e,t).then(c=>{var h;if((c||t)&&i.isPrimaryClient){const d=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;i.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){r.push(c);const d=Ja.Wi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),i.Ca.d_(r),await async function(u,c){const h=Re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>K.forEach(c,p=>K.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>K.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Lr(d))throw d;de("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),b=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(b);h.os=h.os.insert(p,w)}}}(i.localStore,s))}async function jb(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){de("SyncEngine","User change. New user:",e.toKey());const i=await Gp(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new ue(H.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Br(t,i.hs)}}function qb(n,e){const t=Re(n),i=t.Na.get(e);if(i&&i.va)return Ne().add(i.key);{let r=Ne();const s=t.Ma.get(e);if(!s)return r;for(const o of s){const l=t.Fa.get(o);r=r.unionWith(l.view.Va)}return r}}function hm(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mb.bind(null,e),e.Ca.d_=Ib.bind(null,e.eventManager),e.Ca.$a=Ab.bind(null,e.eventManager),e}function zb(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fb.bind(null,e),e}class Ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Js(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return XT(this.persistence,new KT,e.initialUser,this.serializer)}Ga(e){return new HT(Ya.Zr,this.serializer)}Wa(e){return new tb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ns.provider={build:()=>new Ns};class ma{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>kc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Eb}()}createDatastore(e){const t=Js(e.databaseInfo.databaseId),i=function(s){return new sb(s)}(e.databaseInfo);return function(s,o,l,u){return new lb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,o,l){return new cb(i,r,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>kc(this.syncEngine,t,0),function(){return wc.D()?new wc:new nb}())}createSyncEngine(e,t){return function(r,s,o,l,u,c,h){const d=new Pb(r,s,o,l,u,c);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const s=Re(r);de("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Fr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ma.provider={build:()=>new ma};/**
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
 */class fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Hb{constructor(e,t,i,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=Tt.UNAUTHENTICATED,this.clientId=hp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{de("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(de("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=nl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Bo(n,e){n.asyncQueue.verifyOperationInProgress(),de("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Gp(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wb(n);de("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Ec(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Ec(e.remoteStore,r)),n._onlineComponents=e}async function Wb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===H.FAILED_PRECONDITION||r.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Ri("Error using user provided cache. Falling back to memory cache: "+t),await Bo(n,new Ns)}}else de("FirestoreClient","Using default OfflineComponentProvider"),await Bo(n,new Ns);return n._offlineComponents}async function dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de("FirestoreClient","Using user provided OnlineComponentProvider"),await Pc(n,n._uninitializedComponentsProvider._online)):(de("FirestoreClient","Using default OnlineComponentProvider"),await Pc(n,new ma))),n._onlineComponents}function Gb(n){return dm(n).then(e=>e.syncEngine)}async function _a(n){const e=await dm(n),t=e.eventManager;return t.onListen=Sb.bind(null,e.syncEngine),t.onUnlisten=Vb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ob.bind(null,e.syncEngine),t}function Kb(n,e,t={}){const i=new An;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new fm({next:p=>{h.Za(),o.enqueueAndForget(()=>nm(s,d)),p.fromCache&&u.source==="server"?c.reject(new ue(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new im(l,h,{includeMetadataChanges:!0,_a:!0});return tm(s,d)}(await _a(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function pm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Sc=new Map;/**
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
 */function mm(n,e,t){if(!t)throw new ue(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qb(n,e,t,i){if(e===!0&&i===!0)throw new ue(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nc(n){if(!ge.isDocumentKey(n))throw new ue(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(ge.isDocumentKey(n))throw new ue(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function Ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zs(n);throw new ue(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Vc{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eo{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new d0;switch(i.type){case"firstParty":return new g0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Sc.get(t);i&&(de("ComponentProvider","Removing Datastore"),Sc.delete(t),i.terminate())}(this),Promise.resolve()}}function Xb(n,e,t,i={}){var r;const s=(n=Ut(n,eo))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=Tt.MOCK_USER;else{l=bd(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new ue(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Tt(c)}n._authCredentials=new p0(new cp(l,u))}}/**
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
 */class Vn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class Rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Rn extends Vn{constructor(e,t,i){super(e,t,za(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new ge(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Je(n,e,...t){if(n=xe(n),mm("collection","path",e),n instanceof eo){const i=Ye.fromString(e,...t);return Dc(i),new Rn(n,null,i)}{if(!(n instanceof Rt||n instanceof Rn))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Dc(i),new Rn(n.firestore,null,i)}}function st(n,e,...t){if(n=xe(n),arguments.length===1&&(e=hp.newId()),mm("doc","path",e),n instanceof eo){const i=Ye.fromString(e,...t);return Nc(i),new Rt(n,null,new ge(i))}{if(!(n instanceof Rt||n instanceof Rn))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Nc(i),new Rt(n.firestore,n instanceof Rn?n.converter:null,new ge(i))}}/**
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
 */class Oc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qp(this,"async_queue_retry"),this.Vu=()=>{const i=Fo();i&&de("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new An;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Lr(e))throw e;de("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw cn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=tl.createAndSchedule(this,e,t,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&we()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Lc(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Nn extends eo{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Oc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oc(e),this._firestoreClient=void 0,await e}}}function Yb(n,e){const t=typeof n=="object"?n:Ea(),i=typeof n=="string"?n:"(default)",r=Bs(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=yd("firestore");s&&Xb(r,...s)}return r}function sl(n){if(n._terminated)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jb(n),n._firestoreClient}function Jb(n){var e,t,i;const r=n._freezeSettings(),s=function(l,u,c,h){return new S0(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,pm(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Hb(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(mt.fromBase64String(e))}catch(t){throw new ue(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oi(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class to{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ri{constructor(e){this._methodName=e}}/**
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
 */class ol{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
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
 */class al{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const xb=/^__.*__$/;class $b{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}class _m{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Dn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class no{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new no(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:i,xu:!1});return r.Ou(e),r}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ds(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gm(this.Cu)&&xb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Zb{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Js(e)}Qu(e,t,i,r=!1){return new no({Cu:e,methodName:t,qu:i,path:dt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function io(n){const e=n._freezeSettings(),t=Js(n._databaseId);return new Zb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ym(n,e,t,i,r,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,r);fl("Data must be an object, but it was:",o,i);const l=Tm(i,o);let u,c;if(s.merge)u=new Dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=ga(e,d,t);if(!o.contains(p))throw new ue(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);wm(h,p)||h.push(p)}u=new Dt(h),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new $b(new kt(l),u,c)}class ro extends ri{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ro}}function vm(n,e,t){return new no({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ll extends ri{_toFieldTransform(e){return new Qs(e.path,new Ir)}isEqual(e){return e instanceof ll}}class ul extends ri{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=vm(this,e,!0),i=this.Ku.map(s=>si(s,t)),r=new Si(i);return new Qs(e.path,r)}isEqual(e){return e instanceof ul&&Ii(this.Ku,e.Ku)}}class cl extends ri{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=vm(this,e,!0),i=this.Ku.map(s=>si(s,t)),r=new Ni(i);return new Qs(e.path,r)}isEqual(e){return e instanceof cl&&Ii(this.Ku,e.Ku)}}class hl extends ri{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Ar(e.serializer,Cp(e.serializer,this.$u));return new Qs(e.path,t)}isEqual(e){return e instanceof hl&&this.$u===e.$u}}function ew(n,e,t,i){const r=n.Qu(1,e,t);fl("Data must be an object, but it was:",r,i);const s=[],o=kt.empty();ni(i,(u,c)=>{const h=dl(e,u,t);c=xe(c);const d=r.Nu(h);if(c instanceof ro)s.push(h);else{const p=si(c,d);p!=null&&(s.push(h),o.set(h,p))}});const l=new Dt(s);return new _m(o,l,r.fieldTransforms)}function tw(n,e,t,i,r,s){const o=n.Qu(1,e,t),l=[ga(e,i,t)],u=[r];if(s.length%2!=0)throw new ue(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(ga(e,s[p])),u.push(s[p+1]);const c=[],h=kt.empty();for(let p=l.length-1;p>=0;--p)if(!wm(c,l[p])){const g=l[p];let b=u[p];b=xe(b);const w=o.Nu(g);if(b instanceof ro)c.push(g);else{const I=si(b,w);I!=null&&(c.push(g),h.set(g,I))}}const d=new Dt(c);return new _m(h,d,o.fieldTransforms)}function nw(n,e,t,i=!1){return si(t,n.Qu(i?4:3,e))}function si(n,e){if(bm(n=xe(n)))return fl("Unsupported field value:",e,n),Tm(n,e);if(n instanceof ri)return function(i,r){if(!gm(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const l of i){let u=si(l,r.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(i,r){if((i=xe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Cp(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=ut.fromDate(i);return{timestampValue:Ps(r.serializer,s)}}if(i instanceof ut){const s=new ut(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ps(r.serializer,s)}}if(i instanceof ol)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Oi)return{bytesValue:Fp(r.serializer,i._byteString)};if(i instanceof Rt){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qa(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof al)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ha(l.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${Zs(i)}`)}(n,e)}function Tm(n,e){const t={};return fp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(n,(i,r)=>{const s=si(r,e.Mu(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function bm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof ol||n instanceof Oi||n instanceof Rt||n instanceof ri||n instanceof al)}function fl(n,e,t){if(!bm(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const i=Zs(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function ga(n,e,t){if((e=xe(e))instanceof to)return e._internalPath;if(typeof e=="string")return dl(n,e);throw Ds("Field path arguments must be of type string or ",n,!1,void 0,t)}const iw=new RegExp("[~\\*/\\[\\]]");function dl(n,e,t){if(e.search(iw)>=0)throw Ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new to(...e.split("."))._internalPath}catch{throw Ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ds(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${i}`),o&&(u+=` in document ${r}`),u+=")"),new ue(H.INVALID_ARGUMENT,l+n+u)}function wm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Em{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(so("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rw extends Em{data(){return super.data()}}function so(n,e){return typeof e=="string"?dl(n,e):e instanceof to?e._internalPath:e._delegate._internalPath}/**
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
 */function Im(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}class Am extends pl{}function Bt(n,e,...t){let i=[];e instanceof pl&&i.push(e),i=i.concat(t),function(s){const o=s.filter(u=>u instanceof ml).length,l=s.filter(u=>u instanceof oo).length;if(o>1||o>0&&l>0)throw new ue(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class oo extends Am{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new oo(e,t,i)}_apply(e){const t=this._parse(e);return Rm(e._query,t),new Vn(e.firestore,e.converter,oa(e._query,t))}_parse(e){const t=io(e.firestore);return function(s,o,l,u,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ue(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Uc(d,h);const g=[];for(const b of d)g.push(Mc(u,s,b));p={arrayValue:{values:g}}}else p=Mc(u,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Uc(d,h),p=nw(l,o,d,h==="in"||h==="not-in");return at.create(c,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ya(n,e,t){const i=e,r=so("where",n);return oo._create(r,i,t)}class ml extends pl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ml(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:zt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let o=r;const l=s.getFlattenedFilters();for(const u of l)Rm(o,u),o=oa(o,u)}(e._query,t),new Vn(e.firestore,e.converter,oa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _l extends Am{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _l(e,t)}_apply(e){const t=function(r,s,o){if(r.startAt!==null)throw new ue(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new ue(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Er(s,o)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new ji(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Tn(n,e="asc"){const t=e,i=so("orderBy",n);return _l._create(i,t)}function Mc(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new ue(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bp(e)&&t.indexOf("/")!==-1)throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!ge.isDocumentKey(i))throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ic(n,new ge(i))}if(t instanceof Rt)return ic(n,t._key);throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zs(t)}.`)}function Uc(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rm(n,e){const t=function(r,s){for(const o of r)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sw{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ni(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertVectorValue(e){var t,i,r;const s=(r=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>rt(o.doubleValue));return new al(s)}convertGeoPoint(e){return new ol(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fa(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Tr(e));default:return null}}convertTimestamp(e){const t=Pn(e);return new ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);We(Wp(i));const r=new br(i.get(1),i.get(3)),s=new ge(i.popFirst(5));return r.isEqual(t)||cn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function km(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cm extends Em{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(so("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ys extends Cm{data(e={}){return super.data(e)}}class Pm{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ar(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ys(this._firestore,this._userDataWriter,i.key,i,new ar(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const u=new ys(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ar(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ys(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ar(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:ow(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ow(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class gl extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function _i(n){n=Ut(n,Vn);const e=Ut(n.firestore,Nn),t=sl(e),i=new gl(e);return Im(n._query),Kb(t,n._query).then(r=>new Pm(e,i,n,r))}function Vs(n,e,t){n=Ut(n,Rt);const i=Ut(n.firestore,Nn),r=km(n.converter,e);return ao(i,[ym(io(i),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Mt.none())])}function $n(n,e,t,...i){n=Ut(n,Rt);const r=Ut(n.firestore,Nn),s=io(r);let o;return o=typeof(e=xe(e))=="string"||e instanceof to?tw(s,"updateDoc",n._key,e,t,i):ew(s,"updateDoc",n._key,e),ao(r,[o.toMutation(n._key,Mt.exists(!0))])}function Lt(n){return ao(Ut(n.firestore,Nn),[new Wa(n._key,Mt.none())])}function Zn(n,e){const t=Ut(n.firestore,Nn),i=st(n),r=km(n.converter,e);return ao(t,[ym(io(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,Mt.exists(!1))]).then(()=>i)}function Xt(n,...e){var t,i,r;n=xe(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Lc(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Lc(e[o])){const d=e[o];e[o]=(t=d.next)===null||t===void 0?void 0:t.bind(d),e[o+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let u,c,h;if(n instanceof Rt)c=Ut(n.firestore,Nn),h=za(n._key.path),u={next:d=>{e[o]&&e[o](aw(c,n,d))},error:e[o+1],complete:e[o+2]};else{const d=Ut(n,Vn);c=Ut(d.firestore,Nn),h=d._query;const p=new gl(c);u={next:g=>{e[o]&&e[o](new Pm(c,p,d,g))},error:e[o+1],complete:e[o+2]},Im(n._query)}return function(p,g,b,w){const I=new fm(w),V=new im(g,I,b);return p.asyncQueue.enqueueAndForget(async()=>tm(await _a(p),V)),()=>{I.Za(),p.asyncQueue.enqueueAndForget(async()=>nm(await _a(p),V))}}(sl(c),h,l,u)}function ao(n,e){return function(i,r){const s=new An;return i.asyncQueue.enqueueAndForget(async()=>Lb(await Gb(i),r,s)),s.promise}(sl(n),e)}function aw(n,e,t){const i=t.docs.get(e._key),r=new gl(n);return new Cm(n,r,e._key,i,new ar(t.hasPendingWrites,t.fromCache),e.converter)}function qt(){return new ll("serverTimestamp")}function lw(...n){return new ul("arrayUnion",n)}function uw(...n){return new cl("arrayRemove",n)}function Fc(n){return new hl("increment",n)}(function(e,t=!0){(function(r){Bi=r})(ti),Qn(new kn("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),l=new Nn(new m0(i.getProvider("auth-internal")),new v0(i.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ue(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(c.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt($u,"4.7.3",e),Wt($u,"4.7.3","esm2017")})();/**
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
 */const Sm="firebasestorage.googleapis.com",Nm="storageBucket",cw=2*60*1e3,hw=10*60*1e3;/**
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
 */class nt extends $t{constructor(e,t,i=0){super(jo(e),`Firebase Storage: ${t} (${jo(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function jo(n){return"storage/"+n}function yl(){const n="An unknown error occurred, please check the error payload for server response.";return new nt(et.UNKNOWN,n)}function fw(n){return new nt(et.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function dw(n){return new nt(et.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(et.UNAUTHENTICATED,n)}function mw(){return new nt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _w(n){return new nt(et.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function gw(){return new nt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yw(){return new nt(et.CANCELED,"User canceled the upload/download.")}function vw(n){return new nt(et.INVALID_URL,"Invalid URL '"+n+"'.")}function Tw(n){return new nt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bw(){return new nt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nm+"' property when initializing the app?")}function ww(){return new nt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ew(){return new nt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Iw(n){return new nt(et.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function va(n){return new nt(et.INVALID_ARGUMENT,n)}function Dm(){return new nt(et.APP_DELETED,"The Firebase app was deleted.")}function Aw(n){return new nt(et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pr(n,e){return new nt(et.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ir(n){throw new nt(et.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Vt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Vt.makeFromUrl(e,t)}catch{return new Vt(e,"")}if(i.path==="")return i;throw Tw(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const h="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${p}`,"i"),b={bucket:1,path:3},w=t===Sm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",V=new RegExp(`^https?://${w}/${r}/${I}`,"i"),D=[{regex:l,indices:u,postModify:s},{regex:g,indices:b,postModify:c},{regex:V,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<D.length;M++){const U=D[M],F=U.regex.exec(e);if(F){const R=F[U.indices.bucket];let A=F[U.indices.path];A||(A=""),i=new Vt(R,A),U.postModify(i);break}}if(i==null)throw vw(e);return i}}class Rw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kw(n,e,t){let i=1,r=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function h(...I){c||(c=!0,e.apply(null,I))}function d(I){r=setTimeout(()=>{r=null,n(g,u())},I)}function p(){s&&clearTimeout(s)}function g(I,...V){if(c){p();return}if(I){p(),h.call(null,I,...V);return}if(u()||o){p(),h.call(null,I,...V);return}i<64&&(i*=2);let D;l===1?(l=2,D=0):D=(i+Math.random())*1e3,d(D)}let b=!1;function w(I){b||(b=!0,p(),!c&&(r!==null?(I||(l=2),clearTimeout(r),d(0)):I||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},t),w}function Cw(n){n(!1)}/**
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
 */function Pw(n){return n!==void 0}function Sw(n){return typeof n=="object"&&!Array.isArray(n)}function vl(n){return typeof n=="string"||n instanceof String}function Bc(n){return Tl()&&n instanceof Blob}function Tl(){return typeof Blob<"u"}function jc(n,e,t,i){if(i<e)throw va(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw va(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function lo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Vm(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}var Kn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
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
 */function Nw(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||r||s}/**
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
 */class Dw{constructor(e,t,i,r,s,o,l,u,c,h,d,p=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new as(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Kn.NO_ERROR,u=s.getStatus();if(!l||Nw(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Kn.ABORT;i(!1,new as(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;i(!0,new as(c,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Pw(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=yl();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(r.canceled){const u=this.appDelete_?Dm():yw();o(u)}else{const u=gw();o(u)}};this.canceled_?t(!1,new as(!1,null,!0)):this.backoffId_=kw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class as{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Vw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Ow(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Lw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Mw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Uw(n,e,t,i,r,s,o=!0){const l=Vm(n.urlParams),u=n.url+l,c=Object.assign({},n.headers);return Lw(c,e),Vw(c,t),Ow(c,s),Mw(c,i),new Dw(u,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function Fw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Bw(...n){const e=Fw();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Tl())return new Blob(n);throw new nt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jw(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function qw(n){if(typeof atob>"u")throw Iw("base-64");return atob(n)}/**
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
 */const Ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qo{constructor(e,t){this.data=e,this.contentType=t||null}}function zw(n,e){switch(n){case Ht.RAW:return new qo(Om(e));case Ht.BASE64:case Ht.BASE64URL:return new qo(Lm(n,e));case Ht.DATA_URL:return new qo(Ww(e),Gw(e))}throw yl()}function Om(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=i,o=n.charCodeAt(++t);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Hw(n){let e;try{e=decodeURIComponent(n)}catch{throw pr(Ht.DATA_URL,"Malformed data URL.")}return Om(e)}function Lm(n,e){switch(n){case Ht.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw pr(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ht.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw pr(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=qw(e)}catch(r){throw r.message.includes("polyfill")?r:pr(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}class Mm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw pr(Ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Kw(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Ww(n){const e=new Mm(n);return e.base64?Lm(Ht.BASE64,e.rest):Hw(e.rest)}function Gw(n){return new Mm(n).contentType}function Kw(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class bn{constructor(e,t){let i=0,r="";Bc(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Bc(this.data_)){const i=this.data_,r=jw(i,e,t);return r===null?null:new bn(r)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new bn(i,!0)}}static getBlob(...e){if(Tl()){const t=e.map(i=>i instanceof bn?i.data_:i);return new bn(Bw.apply(null,t))}else{const t=e.map(o=>vl(o)?zw(Ht.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)r[s++]=o[l]}),new bn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Um(n){let e;try{e=JSON.parse(n)}catch{return null}return Sw(e)?e:null}/**
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
 */function Qw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Xw(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Fm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Yw(n,e){return e}class At{constructor(e,t,i,r){this.server=e,this.local=t||e,this.writable=!!i,this.xform=r||Yw}}let ls=null;function Jw(n){return!vl(n)||n.length<2?n:Fm(n)}function Bm(){if(ls)return ls;const n=[];n.push(new At("bucket")),n.push(new At("generation")),n.push(new At("metageneration")),n.push(new At("name","fullPath",!0));function e(s,o){return Jw(o)}const t=new At("name");t.xform=e,n.push(t);function i(s,o){return o!==void 0?Number(o):o}const r=new At("size");return r.xform=i,n.push(r),n.push(new At("timeCreated")),n.push(new At("updated")),n.push(new At("md5Hash",null,!0)),n.push(new At("cacheControl",null,!0)),n.push(new At("contentDisposition",null,!0)),n.push(new At("contentEncoding",null,!0)),n.push(new At("contentLanguage",null,!0)),n.push(new At("contentType",null,!0)),n.push(new At("metadata","customMetadata",!0)),ls=n,ls}function xw(n,e){function t(){const i=n.bucket,r=n.fullPath,s=new Vt(i,r);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function $w(n,e,t){const i={};i.type="file";const r=t.length;for(let s=0;s<r;s++){const o=t[s];i[o.local]=o.xform(i,e[o.server])}return xw(i,n),i}function jm(n,e,t){const i=Um(e);return i===null?null:$w(n,i,t)}function Zw(n,e,t,i){const r=Um(e);if(r===null||!vl(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=lo(p,t,i),b=Vm({alt:"media",token:c});return g+b})[0]}function eE(n,e){const t={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class bl{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function qm(n){if(!n)throw yl()}function tE(n,e){function t(i,r){const s=jm(n,r,e);return qm(s!==null),s}return t}function nE(n,e){function t(i,r){const s=jm(n,r,e);return qm(s!==null),Zw(s,r,n.host,n._protocol)}return t}function zm(n){function e(t,i){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=mw():r=pw():t.getStatus()===402?r=dw(n.bucket):t.getStatus()===403?r=_w(n.path):r=i,r.status=t.getStatus(),r.serverResponse=i.serverResponse,r}return e}function Hm(n){const e=zm(n);function t(i,r){let s=e(i,r);return i.getStatus()===404&&(s=fw(n.path)),s.serverResponse=r.serverResponse,s}return t}function iE(n,e,t){const i=e.fullServerUrl(),r=lo(i,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,l=new bl(r,s,nE(n,t),o);return l.errorHandler=Hm(e),l}function rE(n,e){const t=e.fullServerUrl(),i=lo(t,n.host,n._protocol),r="DELETE",s=n.maxOperationRetryTime;function o(u,c){}const l=new bl(i,r,o,s);return l.successCodes=[200,204],l.errorHandler=Hm(e),l}function sE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function oE(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=sE(null,e)),i}function aE(n,e,t,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let M=0;M<2;M++)D=D+Math.random().toString().slice(2);return D}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=oE(e,i,r),h=eE(c,t),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",g=bn.getBlob(d,i,p);if(g===null)throw ww();const b={name:c.fullPath},w=lo(s,n.host,n._protocol),I="POST",V=n.maxUploadRetryTime,L=new bl(w,I,tE(n,t),V);return L.urlParams=b,L.headers=o,L.body=g.uploadData(),L.errorHandler=zm(e),L}class lE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,r){if(this.sent_)throw ir("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ir("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ir("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ir("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ir("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uE extends lE{initXhr(){this.xhr_.responseType="text"}}function wl(){return new uE}/**
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
 */class ei{constructor(e,t){this._service=e,t instanceof Vt?this._location=t:this._location=Vt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ei(e,t)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fm(this._location.path)}get storage(){return this._service}get parent(){const e=Qw(this._location.path);if(e===null)return null;const t=new Vt(this._location.bucket,e);return new ei(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Aw(e)}}function cE(n,e,t){n._throwIfRoot("uploadBytes");const i=aE(n.storage,n._location,Bm(),new bn(e,!0),t);return n.storage.makeRequestWithTokens(i,wl).then(r=>({metadata:r,ref:n}))}function hE(n){n._throwIfRoot("getDownloadURL");const e=iE(n.storage,n._location,Bm());return n.storage.makeRequestWithTokens(e,wl).then(t=>{if(t===null)throw Ew();return t})}function fE(n){n._throwIfRoot("deleteObject");const e=rE(n.storage,n._location);return n.storage.makeRequestWithTokens(e,wl)}function dE(n,e){const t=Xw(n._location.path,e),i=new Vt(n._location.bucket,t);return new ei(n.storage,i)}/**
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
 */function pE(n){return/^[A-Za-z]+:\/\//.test(n)}function mE(n,e){return new ei(n,e)}function Wm(n,e){if(n instanceof El){const t=n;if(t._bucket==null)throw bw();const i=new ei(t,t._bucket);return e!=null?Wm(i,e):i}else return e!==void 0?dE(n,e):n}function _E(n,e){if(e&&pE(e)){if(n instanceof El)return mE(n,e);throw va("To use ref(service, url), the first argument must be a Storage instance.")}else return Wm(n,e)}function qc(n,e){const t=e==null?void 0:e[Nm];return t==null?null:Vt.makeFromBucketSpec(t,n)}function gE(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:bd(r,n.app.options.projectId))}class El{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Sm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cw,this._maxUploadRetryTime=hw,this._requests=new Set,r!=null?this._bucket=Vt.makeFromBucketSpec(r,this._host):this._bucket=qc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=qc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ei(this,e)}_makeRequest(e,t,i,r,s=!0){if(this._deleted)return new Rw(Dm());{const o=Uw(e,this._appId,i,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const zc="@firebase/storage",Hc="0.13.2";/**
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
 */const Gm="storage";function yE(n,e,t){return n=xe(n),cE(n,e,t)}function vE(n){return n=xe(n),hE(n)}function Wc(n){return n=xe(n),fE(n)}function zo(n,e){return n=xe(n),_E(n,e)}function TE(n=Ea(),e){n=xe(n);const i=Bs(n,Gm).getImmediate({identifier:e}),r=yd("storage");return r&&bE(i,...r),i}function bE(n,e,t,i={}){gE(n,e,t,i)}function wE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new El(t,i,r,e,ti)}function EE(){Qn(new kn(Gm,wE,"PUBLIC").setMultipleInstances(!0)),Wt(zc,Hc,""),Wt(zc,Hc,"esm2017")}EE();const IE={apiKey:"AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0",authDomain:"vacation-project-001.firebaseapp.com",projectId:"vacation-project-001",storageBucket:"vacation-project-001.firebasestorage.app",messagingSenderId:"378066109890",appId:"1:378066109890:web:ff054f2f5bb97d3082825b"},Il=Id(IE),Ta=h0(Il),ke=Yb(Il),Ho=TE(Il),Hi=dd(null);Zy(Ta,n=>Hi.set(n));const zn=dd(null);function Gc(n,e,t){const i=n.slice();return i[23]=e[t],i}function AE(n){let e,t=Pe(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Qc(Gc(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);T(r,e,s)},p(r,s){if(s&7361){t=Pe(r[0]);let o;for(o=0;o<t.length;o+=1){const l=Gc(r,t,o);i[o]?i[o].p(l,s):(i[o]=Qc(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function RE(n){let e;return{c(){e=y("p"),e.textContent="참여 중인 그룹이 없습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Kc(n){let e;return{c(){e=y("span"),e.textContent="← 현재 선택됨"},m(t,i){T(t,e,i)},d(t){t&&v(e)}}}function kE(n){let e,t,i;function r(){return n[15](n[23])}return{c(){e=y("button"),e.textContent="나가기"},m(s,o){T(s,e,o),t||(i=Q(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function CE(n){let e,t,i;function r(){return n[14](n[23])}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){T(s,e,o),t||(i=Q(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function Qc(n){var k;let e,t,i=n[23].name+"",r,s,o,l,u,c,h=n[23].inviteCode+"",d,p,g,b,w,I,V,L,D,M,U=((k=n[6])==null?void 0:k.id)===n[23].id&&Kc();function F(){return n[13](n[23])}function R(P,N){return P[23].createdBy===P[7].uid?CE:kE}let A=R(n),E=A(n);return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),U&&U.c(),o=O(),l=y("br"),u=B(`
      초대 코드: `),c=y("code"),d=B(h),p=O(),g=y("br"),b=y("br"),w=O(),I=y("button"),I.textContent="이 그룹으로 →",V=O(),E.c(),L=O(),q(e,"class","card")},m(P,N){T(P,e,N),m(e,t),m(t,r),m(e,s),U&&U.m(e,null),m(e,o),m(e,l),m(e,u),m(e,c),m(c,d),m(e,p),m(e,g),m(e,b),m(e,w),m(e,I),m(e,V),E.m(e,null),m(e,L),D||(M=Q(I,"click",F),D=!0)},p(P,N){var S;n=P,N&1&&i!==(i=n[23].name+"")&&Y(r,i),((S=n[6])==null?void 0:S.id)===n[23].id?U||(U=Kc(),U.c(),U.m(e,o)):U&&(U.d(1),U=null),N&1&&h!==(h=n[23].inviteCode+"")&&Y(d,h),A===(A=R(n))&&E?E.p(n,N):(E.d(1),E=A(n),E&&(E.c(),E.m(e,L)))},d(P){P&&v(e),U&&U.d(),E.d(),D=!1,M()}}}function Xc(n){let e,t,i,r,s;return{c(){e=y("button"),e.textContent="+ 새 그룹 만들기",t=O(),i=y("button"),i.textContent="초대 코드로 참여"},m(o,l){T(o,e,l),T(o,t,l),T(o,i,l),r||(s=[Q(e,"click",n[16]),Q(i,"click",n[17])],r=!0)},p:Oe,d(o){o&&(v(e),v(t),v(i)),r=!1,tt(s)}}}function Yc(n){let e,t,i,r,s,o,l,u,c,h,d,p;return{c(){e=y("h3"),e.textContent="새 그룹 만들기",t=O(),i=y("input"),r=O(),s=y("br"),o=y("br"),l=O(),u=y("button"),u.textContent="만들기",c=O(),h=y("button"),h.textContent="취소",q(i,"placeholder","그룹 이름 (예: 2025 제주 여행)"),ie(i,"width","100%")},m(g,b){T(g,e,b),T(g,t,b),T(g,i,b),J(i,n[3]),T(g,r,b),T(g,s,b),T(g,o,b),T(g,l,b),T(g,u,b),T(g,c,b),T(g,h,b),d||(p=[Q(i,"input",n[18]),Q(u,"click",n[8]),Q(h,"click",n[19])],d=!0)},p(g,b){b&8&&i.value!==g[3]&&J(i,g[3])},d(g){g&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(u),v(c),v(h)),d=!1,tt(p)}}}function Jc(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w=n[5]&&xc(n);return{c(){e=y("h3"),e.textContent="초대 코드로 참여",t=O(),i=y("input"),r=O(),s=y("br"),o=y("br"),l=O(),u=y("button"),u.textContent="참여하기",c=O(),h=y("button"),h.textContent="취소",d=O(),w&&w.c(),p=qe(),q(i,"placeholder","초대 코드 6자리")},m(I,V){T(I,e,V),T(I,t,V),T(I,i,V),J(i,n[4]),T(I,r,V),T(I,s,V),T(I,o,V),T(I,l,V),T(I,u,V),T(I,c,V),T(I,h,V),T(I,d,V),w&&w.m(I,V),T(I,p,V),g||(b=[Q(i,"input",n[20]),Q(u,"click",n[9]),Q(h,"click",n[21])],g=!0)},p(I,V){V&16&&i.value!==I[4]&&J(i,I[4]),I[5]?w?w.p(I,V):(w=xc(I),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},d(I){I&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(u),v(c),v(h),v(d),v(p)),w&&w.d(I),g=!1,tt(b)}}}function xc(n){let e,t;return{c(){e=y("p"),t=B(n[5]),ie(e,"color","red")},m(i,r){T(i,e,r),m(e,t)},p(i,r){r&32&&Y(t,i[5])},d(i){i&&v(e)}}}function PE(n){let e,t,i,r,s,o,l,u;function c(w,I){return w[0].length===0?RE:AE}let h=c(n),d=h(n),p=!n[1]&&!n[2]&&Xc(n),g=n[1]&&Yc(n),b=n[2]&&Jc(n);return{c(){e=y("h2"),e.textContent="내 그룹",t=O(),d.c(),i=O(),r=y("hr"),s=O(),p&&p.c(),o=O(),g&&g.c(),l=O(),b&&b.c(),u=qe()},m(w,I){T(w,e,I),T(w,t,I),d.m(w,I),T(w,i,I),T(w,r,I),T(w,s,I),p&&p.m(w,I),T(w,o,I),g&&g.m(w,I),T(w,l,I),b&&b.m(w,I),T(w,u,I)},p(w,[I]){h===(h=c(w))&&d?d.p(w,I):(d.d(1),d=h(w),d&&(d.c(),d.m(i.parentNode,i))),!w[1]&&!w[2]?p?p.p(w,I):(p=Xc(w),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),w[1]?g?g.p(w,I):(g=Yc(w),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),w[2]?b?b.p(w,I):(b=Jc(w),b.c(),b.m(u.parentNode,u)):b&&(b.d(1),b=null)},i:Oe,o:Oe,d(w){w&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(u)),d.d(w),p&&p.d(w),g&&g.d(w),b&&b.d(w)}}}function SE(){return Math.random().toString(36).slice(2,8).toUpperCase()}function NE(n,e,t){let i,r;an(n,zn,k=>t(6,i=k)),an(n,Hi,k=>t(7,r=k));let s=[],o=!1,l=!1,u="",c="",h="",d;k_(()=>{const k=Bt(Je(ke,"groups"),ya("memberIds","array-contains",r.uid));d=Xt(k,P=>{t(0,s=P.docs.map(N=>({id:N.id,...N.data()})))})}),Us(()=>d==null?void 0:d());async function p(){if(!u.trim())return;const k=SE(),P=await Zn(Je(ke,"groups"),{name:u.trim(),createdBy:r.uid,inviteCode:k,memberIds:[r.uid],createdAt:qt()});await Vs(st(ke,"groups",P.id,"members",r.uid),{displayName:r.displayName,joinedAt:qt()}),t(3,u=""),t(1,o=!1)}async function g(){if(!c.trim())return;t(5,h="");const k=await _i(Bt(Je(ke,"groups"),ya("inviteCode","==",c.trim().toUpperCase())));if(k.empty){t(5,h="유효하지 않은 초대 코드입니다.");return}const P=k.docs[0];await $n(st(ke,"groups",P.id),{memberIds:lw(r.uid)}),await Vs(st(ke,"groups",P.id,"members",r.uid),{displayName:r.displayName,joinedAt:qt()}),t(4,c=""),t(2,l=!1)}function b(k){zn.set(k),location.hash="#vote"}async function w(k){confirm(`"${k.name}"에서 나가시겠습니까?`)&&(await $n(st(ke,"groups",k.id),{memberIds:uw(r.uid)}),await Lt(st(ke,"groups",k.id,"members",r.uid)),(i==null?void 0:i.id)===k.id&&zn.set(null))}async function I(k){confirm(`"${k.name}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`)&&(await Lt(st(ke,"groups",k.id)),(i==null?void 0:i.id)===k.id&&zn.set(null))}const V=k=>b(k),L=k=>I(k),D=k=>w(k),M=()=>{t(1,o=!0),t(2,l=!1)},U=()=>{t(2,l=!0),t(1,o=!1)};function F(){u=this.value,t(3,u)}const R=()=>{t(1,o=!1),t(3,u="")};function A(){c=this.value,t(4,c)}return[s,o,l,u,c,h,i,r,p,g,b,w,I,V,L,D,M,U,F,R,A,()=>{t(2,l=!1),t(4,c=""),t(5,h="")}]}class $c extends Cr{constructor(e){super(),kr(this,e,NE,PE,Ui,{})}}const Km="AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0";function Li(n,e){const t=Ym(n),i=t?`place_id:${t}`:encodeURIComponent(e);return`https://www.google.com/maps/embed/v1/place?key=${Km}&q=${i}`}function DE(n){const t=Al(n).map(Xm);if(t.length<2)return null;const i=t[0],r=t[t.length-1],s=t.slice(1,-1).join("|");let o=`https://www.google.com/maps/embed/v1/directions?key=${Km}&origin=${i}&destination=${r}`;return s&&(o+=`&waypoints=${s}`),o}function VE(n){const t=Al(n).map(Xm);return t.length<2?null:"https://www.google.com/maps/dir/"+t.join("/")}function OE(n){return n.length-Al(n).length}function Mi(n){return n?/maps\.app\.goo\.gl|goo\.gl\/maps/.test(n):!1}function Qm(n){const e=Rl(n);if(!e)return{lat:null,lng:null};const[t,i]=e.split(",").map(Number);return{lat:t,lng:i}}function Xm(n){var e;return n.lat&&n.lng?`${n.lat},${n.lng}`:Rl(n.mapUrl)??encodeURIComponent((e=n.placeName)==null?void 0:e.trim())}function Al(n){return n.filter(e=>e.lat&&e.lng||Rl(e.mapUrl)||Ym(e.mapUrl))}function Ym(n){if(!n)return null;const e=n.match(/place_id[=:]([A-Za-z0-9_-]+)/);return e?e[1]:null}function Rl(n){if(!n)return null;const e=n.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/ll=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/);return e?`${e[1]},${e[2]}`:null}function Zc(n,e,t){const i=n.slice();return i[66]=e[t],i}function eh(n,e,t){const i=n.slice();i[66]=e[t],i[72]=t;const r=i[3][i[66].id]||0;i[69]=r;const s=i[13].has(i[66].id);return i[70]=s,i}function th(n,e,t){const i=n.slice();return i[66]=e[t],i}function nh(n,e,t){const i=n.slice();return i[63]=e[t],i}function ih(n,e,t){const i=n.slice();return i[60]=e[t],i}function LE(n){let e,t=n[1].title+"",i,r,s,o,l,u,c=Os(n[1])+"",h,d,p=Ei(n[1])?" 마감":" 진행중",g,b,w,I,V,L,D,M,U,F,R=n[1].deadline&&rh(n),A=(n[1].voteType==="attraction"||n[1].voteType==="accommodation"||n[1].voteType==="restaurant")&&n[1].linkedDestination&&sh(n);function E(N,S){return S[0]&2&&(D=null),N[1].status==="recruiting"?qE:(D==null&&(D=!!Ei(N[1])),D?jE:BE)}let k=E(n,[-1,-1,-1]),P=k(n);return{c(){e=y("h2"),i=B(t),r=O(),s=y("button"),s.textContent="← 목록으로",o=O(),l=y("span"),u=B("["),h=B(c),d=B(`]
    `),g=B(p),b=O(),R&&R.c(),w=O(),A&&A.c(),I=O(),V=y("hr"),L=O(),P.c(),M=qe(),ie(l,"margin-left","1rem")},m(N,S){T(N,e,S),m(e,i),T(N,r,S),T(N,s,S),T(N,o,S),T(N,l,S),m(l,u),m(l,h),m(l,d),m(l,g),T(N,b,S),R&&R.m(N,S),T(N,w,S),A&&A.m(N,S),T(N,I,S),T(N,V,S),T(N,L,S),P.m(N,S),T(N,M,S),U||(F=Q(s,"click",n[27]),U=!0)},p(N,S){S[0]&2&&t!==(t=N[1].title+"")&&Y(i,t),S[0]&2&&c!==(c=Os(N[1])+"")&&Y(h,c),S[0]&2&&p!==(p=Ei(N[1])?" 마감":" 진행중")&&Y(g,p),N[1].deadline?R?R.p(N,S):(R=rh(N),R.c(),R.m(w.parentNode,w)):R&&(R.d(1),R=null),(N[1].voteType==="attraction"||N[1].voteType==="accommodation"||N[1].voteType==="restaurant")&&N[1].linkedDestination?A?A.p(N,S):(A=sh(N),A.c(),A.m(I.parentNode,I)):A&&(A.d(1),A=null),k===(k=E(N,S))&&P?P.p(N,S):(P.d(1),P=k(N),P&&(P.c(),P.m(M.parentNode,M)))},d(N){N&&(v(e),v(r),v(s),v(o),v(l),v(b),v(w),v(I),v(V),v(L),v(M)),R&&R.d(N),A&&A.d(N),P.d(N),U=!1,F()}}}function ME(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E,k,P,N,S,ne,ee,fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je,pe,se,_e,$,re,Me,le,W=(n[6].voteType==="attraction"||n[6].voteType==="accommodation"||n[6].voteType==="restaurant")&&Zh(n),he=n[6].voteType==="attraction"&&tf(n);return{c(){e=y("h2"),e.textContent="새 투표 만들기",t=O(),i=y("button"),i.textContent="← 뒤로",r=O(),s=y("hr"),o=O(),l=y("label"),u=B("투표 유형"),c=y("br"),h=O(),d=y("select"),p=y("option"),p.textContent="여행지 투표",g=y("option"),g.textContent="관광지 투표",b=y("option"),b.textContent="숙소 투표",w=y("option"),w.textContent="맛집 투표",I=O(),V=y("br"),L=y("br"),D=O(),W&&W.c(),M=O(),U=y("label"),F=B("투표 제목"),R=y("br"),A=O(),E=y("input"),k=O(),P=y("br"),N=y("br"),S=O(),ne=y("label"),ee=B("마감 날짜 (선택)"),fe=y("br"),x=O(),me=y("input"),ce=B(`
    
  `),Te=y("label"),ze=B("1인당 최대 투표 수"),Se=y("br"),Ce=O(),Ee=y("input"),Le=O(),he&&he.c(),He=O(),je=y("br"),pe=y("br"),se=O(),_e=y("button"),_e.textContent="모집 시작",$=O(),re=y("button"),re.textContent="취소",p.__value="destination",J(p,p.__value),g.__value="attraction",J(g,g.__value),b.__value="accommodation",J(b,b.__value),w.__value="restaurant",J(w,w.__value),n[6].voteType===void 0&&Yt(()=>n[33].call(d)),q(E,"placeholder","예: 여름 여행지 투표"),ie(E,"width","100%"),q(me,"type","date"),q(Ee,"type","number"),q(Ee,"min","1"),q(Ee,"max","10"),ie(Ee,"width","4rem")},m(oe,ye){T(oe,e,ye),T(oe,t,ye),T(oe,i,ye),T(oe,r,ye),T(oe,s,ye),T(oe,o,ye),T(oe,l,ye),m(l,u),m(l,c),m(l,h),m(l,d),m(d,p),m(d,g),m(d,b),m(d,w),Pt(d,n[6].voteType,!0),T(oe,I,ye),T(oe,V,ye),T(oe,L,ye),T(oe,D,ye),W&&W.m(oe,ye),T(oe,M,ye),T(oe,U,ye),m(U,F),m(U,R),m(U,A),m(U,E),J(E,n[6].title),T(oe,k,ye),T(oe,P,ye),T(oe,N,ye),T(oe,S,ye),T(oe,ne,ye),m(ne,ee),m(ne,fe),m(ne,x),m(ne,me),J(me,n[6].deadline),T(oe,ce,ye),T(oe,Te,ye),m(Te,ze),m(Te,Se),m(Te,Ce),m(Te,Ee),J(Ee,n[6].maxVotesPerUser),T(oe,Le,ye),he&&he.m(oe,ye),T(oe,He,ye),T(oe,je,ye),T(oe,pe,ye),T(oe,se,ye),T(oe,_e,ye),T(oe,$,ye),T(oe,re,ye),Me||(le=[Q(i,"click",n[27]),Q(d,"change",n[33]),Q(E,"input",n[35]),Q(me,"input",n[36]),Q(Ee,"input",n[37]),Q(_e,"click",n[26]),Q(re,"click",n[27])],Me=!0)},p(oe,ye){ye[0]&64&&Pt(d,oe[6].voteType),oe[6].voteType==="attraction"||oe[6].voteType==="accommodation"||oe[6].voteType==="restaurant"?W?W.p(oe,ye):(W=Zh(oe),W.c(),W.m(M.parentNode,M)):W&&(W.d(1),W=null),ye[0]&64&&E.value!==oe[6].title&&J(E,oe[6].title),ye[0]&64&&J(me,oe[6].deadline),ye[0]&64&&gi(Ee.value)!==oe[6].maxVotesPerUser&&J(Ee,oe[6].maxVotesPerUser),oe[6].voteType==="attraction"?he?he.p(oe,ye):(he=tf(oe),he.c(),he.m(He.parentNode,He)):he&&(he.d(1),he=null)},d(oe){oe&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(I),v(V),v(L),v(D),v(M),v(U),v(k),v(P),v(N),v(S),v(ne),v(ce),v(Te),v(Le),v(He),v(je),v(pe),v(se),v(_e),v($),v(re)),W&&W.d(oe),he&&he.d(oe),Me=!1,tt(le)}}}function UE(n){let e,t,i=n[10].name+"",r,s,o,l,u,c,h,d,p;function g(I,V){return I[0].length===0?xE:JE}let b=g(n),w=b(n);return{c(){e=y("h2"),t=B("투표 — "),r=B(i),s=O(),o=y("button"),o.textContent="+ 새 투표 만들기",l=O(),u=y("hr"),c=O(),w.c(),h=qe()},m(I,V){T(I,e,V),m(e,t),m(e,r),T(I,s,V),T(I,o,V),T(I,l,V),T(I,u,V),T(I,c,V),w.m(I,V),T(I,h,V),d||(p=Q(o,"click",n[30]),d=!0)},p(I,V){V[0]&1024&&i!==(i=I[10].name+"")&&Y(r,i),b===(b=g(I))&&w?w.p(I,V):(w.d(1),w=b(I),w&&(w.c(),w.m(h.parentNode,h)))},d(I){I&&(v(e),v(s),v(o),v(l),v(u),v(c),v(h)),w.d(I),d=!1,p()}}}function FE(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function rh(n){let e,t,i=Ls(n[1].deadline)+"",r;return{c(){e=y("small"),t=B("· 마감일: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=Ls(s[1].deadline)+"")&&Y(r,i)},d(s){s&&v(e)}}}function sh(n){let e,t,i=n[1].linkedDestination+"",r;return{c(){e=y("small"),t=B("· 여행지: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=s[1].linkedDestination+"")&&Y(r,i)},d(s){s&&v(e)}}}function BE(n){let e,t,i,r;function s(p,g){return p[14]?HE:zE}let o=s(n),l=o(n),u=Pe(n[2]),c=[];for(let p=0;p<u.length;p+=1)c[p]=yh(Zc(n,u,p));let h=!n[14]&&vh(n),d=n[1].createdBy===n[16].uid&&Th(n);return{c(){l.c(),e=O();for(let p=0;p<c.length;p+=1)c[p].c();t=O(),h&&h.c(),i=O(),d&&d.c(),r=qe()},m(p,g){l.m(p,g),T(p,e,g);for(let b=0;b<c.length;b+=1)c[b]&&c[b].m(p,g);T(p,t,g),h&&h.m(p,g),T(p,i,g),d&&d.m(p,g),T(p,r,g)},p(p,g){if(o===(o=s(p))&&l?l.p(p,g):(l.d(1),l=o(p),l&&(l.c(),l.m(e.parentNode,e))),g[0]&835646){u=Pe(p[2]);let b;for(b=0;b<u.length;b+=1){const w=Zc(p,u,b);c[b]?c[b].p(w,g):(c[b]=yh(w),c[b].c(),c[b].m(t.parentNode,t))}for(;b<c.length;b+=1)c[b].d(1);c.length=u.length}p[14]?h&&(h.d(1),h=null):h?h.p(p,g):(h=vh(p),h.c(),h.m(i.parentNode,i)),p[1].createdBy===p[16].uid?d?d.p(p,g):(d=Th(p),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},d(p){p&&(v(e),v(t),v(i),v(r)),l.d(p),lt(c,p),h&&h.d(p),d&&d.d(p)}}}function jE(n){let e;function t(s,o){return s[8].length===0?QE:KE}let i=t(n),r=i(n);return{c(){r.c(),e=qe()},m(s,o){r.m(s,o),T(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&v(e),r.d(s)}}}function qE(n){var Me,le;let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E,k,P,N,S,ne,ee=Mi(n[12].mapUrl),fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je=Pe(n[2]),pe=[];for(let W=0;W<je.length;W+=1)pe[W]=Qh(th(n,je,W));let se=ee&&Xh(),_e=((Me=n[1])==null?void 0:Me.voteType)==="accommodation"&&Yh(n),$=((le=n[1])==null?void 0:le.voteType)==="restaurant"&&Jh(n),re=n[1].createdBy===n[16].uid&&xh(n);return{c(){e=y("p"),e.textContent="후보 모집 중입니다. 그룹원 누구나 후보를 추가할 수 있습니다.",t=O();for(let W=0;W<pe.length;W+=1)pe[W].c();i=O(),r=y("hr"),s=O(),o=y("strong"),o.textContent="후보 추가",l=O(),u=y("div"),c=y("label"),h=B("장소명 *"),d=y("br"),p=O(),g=y("input"),b=O(),w=y("br"),I=O(),V=y("label"),L=B("설명"),D=y("br"),M=O(),U=y("input"),F=O(),R=y("br"),A=O(),E=y("label"),k=B("Google Maps URL (선택)"),P=y("br"),N=O(),S=y("input"),ne=O(),se&&se.c(),fe=O(),_e&&_e.c(),x=O(),$&&$.c(),me=O(),ce=y("br"),Te=y("br"),ze=O(),Se=y("button"),Se.textContent="+ 후보 등록",Ce=O(),re&&re.c(),Ee=qe(),q(g,"placeholder","예: 제주도"),ie(g,"width","100%"),q(U,"placeholder","간단한 설명"),ie(U,"width","100%"),q(S,"placeholder","https://maps.google.com/..."),ie(S,"width","100%"),q(u,"class","card")},m(W,he){T(W,e,he),T(W,t,he);for(let oe=0;oe<pe.length;oe+=1)pe[oe]&&pe[oe].m(W,he);T(W,i,he),T(W,r,he),T(W,s,he),T(W,o,he),T(W,l,he),T(W,u,he),m(u,c),m(c,h),m(c,d),m(c,p),m(c,g),J(g,n[12].placeName),m(u,b),m(u,w),m(u,I),m(u,V),m(V,L),m(V,D),m(V,M),m(V,U),J(U,n[12].description),m(u,F),m(u,R),m(u,A),m(u,E),m(E,k),m(E,P),m(E,N),m(E,S),J(S,n[12].mapUrl),m(u,ne),se&&se.m(u,null),m(u,fe),_e&&_e.m(u,null),m(u,x),$&&$.m(u,null),m(u,me),m(u,ce),m(u,Te),m(u,ze),m(u,Se),T(W,Ce,he),re&&re.m(W,he),T(W,Ee,he),Le||(He=[Q(g,"input",n[40]),Q(U,"input",n[41]),Q(S,"input",n[42]),Q(Se,"click",n[22])],Le=!0)},p(W,he){var oe,ye;if(he[0]&8454150){je=Pe(W[2]);let it;for(it=0;it<je.length;it+=1){const Ot=th(W,je,it);pe[it]?pe[it].p(Ot,he):(pe[it]=Qh(Ot),pe[it].c(),pe[it].m(i.parentNode,i))}for(;it<pe.length;it+=1)pe[it].d(1);pe.length=je.length}he[0]&4096&&g.value!==W[12].placeName&&J(g,W[12].placeName),he[0]&4096&&U.value!==W[12].description&&J(U,W[12].description),he[0]&4096&&S.value!==W[12].mapUrl&&J(S,W[12].mapUrl),he[0]&4096&&(ee=Mi(W[12].mapUrl)),ee?se||(se=Xh(),se.c(),se.m(u,fe)):se&&(se.d(1),se=null),((oe=W[1])==null?void 0:oe.voteType)==="accommodation"?_e?_e.p(W,he):(_e=Yh(W),_e.c(),_e.m(u,x)):_e&&(_e.d(1),_e=null),((ye=W[1])==null?void 0:ye.voteType)==="restaurant"?$?$.p(W,he):($=Jh(W),$.c(),$.m(u,me)):$&&($.d(1),$=null),W[1].createdBy===W[16].uid?re?re.p(W,he):(re=xh(W),re.c(),re.m(Ee.parentNode,Ee)):re&&(re.d(1),re=null)},d(W){W&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(u),v(Ce),v(Ee)),lt(pe,W),se&&se.d(),_e&&_e.d(),$&&$.d(),re&&re.d(W),Le=!1,tt(He)}}}function zE(n){let e,t,i,r,s,o,l=Rr(n[1])+"",u,c;return{c(){e=y("p"),t=B(`선택 후 제출 버튼을 누르세요.
        (남은 선택: `),i=y("strong"),r=B(n[15]),s=B("표"),o=B(" / "),u=B(l),c=B("표)")},m(h,d){T(h,e,d),m(e,t),m(e,i),m(i,r),m(i,s),m(e,o),m(e,u),m(e,c)},p(h,d){d[0]&32768&&Y(r,h[15]),d[0]&2&&l!==(l=Rr(h[1])+"")&&Y(u,l)},d(h){h&&v(e)}}}function HE(n){let e;return{c(){e=y("p"),e.textContent="투표 완료. 마감 후 결과를 확인하세요."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function oh(n){let e,t,i=n[66].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].description+"")&&Y(r,i)},d(s){s&&v(e)}}}function ah(n){let e,t,i,r=n[66].price&&lh(n),s=n[66].bedCount&&uh(n),o=n[66].siteUrl&&ch(n);return{c(){r&&r.c(),e=O(),s&&s.c(),t=O(),o&&o.c(),i=qe()},m(l,u){r&&r.m(l,u),T(l,e,u),s&&s.m(l,u),T(l,t,u),o&&o.m(l,u),T(l,i,u)},p(l,u){l[66].price?r?r.p(l,u):(r=lh(l),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l[66].bedCount?s?s.p(l,u):(s=uh(l),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),l[66].siteUrl?o?o.p(l,u):(o=ch(l),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(l){l&&(v(e),v(t),v(i)),r&&r.d(l),s&&s.d(l),o&&o.d(l)}}}function lh(n){let e,t=n[66].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[66].price+"")&&Y(i,t)},d(r){r&&v(e)}}}function uh(n){let e,t,i=n[66].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,l){T(o,e,l),m(e,t),m(e,r),m(e,s)},p(o,l){l[0]&4&&i!==(i=o[66].bedCount+"")&&Y(r,i)},d(o){o&&v(e)}}}function ch(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[66].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,l){T(o,e,l),m(e,t),m(e,i),m(i,r)},p(o,l){l[0]&4&&s!==(s=o[66].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function hh(n){var c;let e,t,i,r,s=((c=n[66].mealType)==null?void 0:c.length)&&fh(n),o=n[66].priceRange&&dh(n),l=n[66].hours&&ph(n),u=n[66].mainMenu&&mh(n);return{c(){s&&s.c(),e=O(),o&&o.c(),t=O(),l&&l.c(),i=O(),u&&u.c(),r=qe()},m(h,d){s&&s.m(h,d),T(h,e,d),o&&o.m(h,d),T(h,t,d),l&&l.m(h,d),T(h,i,d),u&&u.m(h,d),T(h,r,d)},p(h,d){var p;(p=h[66].mealType)!=null&&p.length?s?s.p(h,d):(s=fh(h),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),h[66].priceRange?o?o.p(h,d):(o=dh(h),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),h[66].hours?l?l.p(h,d):(l=ph(h),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),h[66].mainMenu?u?u.p(h,d):(u=mh(h),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},d(h){h&&(v(e),v(t),v(i),v(r)),s&&s.d(h),o&&o.d(h),l&&l.d(h),u&&u.d(h)}}}function fh(n){let e,t=n[66].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[66].mealType.join("·")+"")&&Y(i,t)},d(r){r&&v(e)}}}function dh(n){var o;let e,t=(o=n[66].mealType)!=null&&o.length?" · ":"",i,r=n[66].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(l,u){T(l,e,u),m(e,i),m(e,s)},p(l,u){var c;u[0]&4&&t!==(t=(c=l[66].mealType)!=null&&c.length?" · ":"")&&Y(i,t),u[0]&4&&r!==(r=l[66].priceRange+"")&&Y(s,r)},d(l){l&&v(e)}}}function ph(n){let e,t,i=n[66].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].hours+"")&&Y(r,i)},d(s){s&&v(e)}}}function mh(n){let e,t,i=n[66].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].mainMenu+"")&&Y(r,i)},d(s){s&&v(e)}}}function WE(n){let e,t,i,r,s,o,l=(n[5][n[66].id]||0)+"",u,c,h,d,p,g,b;function w(){return n[53](n[66])}function I(){return n[54](n[66])}return{c(){e=y("div"),t=y("button"),i=B("-"),s=O(),o=y("span"),u=B(l),c=O(),h=y("button"),d=B("+"),t.disabled=r=(n[5][n[66].id]||0)<=0&&n[15]<=0,ie(o,"display","inline-block"),ie(o,"width","1.5rem"),ie(o,"text-align","center"),h.disabled=p=(n[5][n[66].id]||0)>=0&&n[15]<=0,ie(e,"text-align","right"),ie(e,"margin-top","0.3rem")},m(V,L){T(V,e,L),m(e,t),m(t,i),m(e,s),m(e,o),m(o,u),m(e,c),m(e,h),m(h,d),g||(b=[Q(t,"click",w),Q(h,"click",I)],g=!0)},p(V,L){n=V,L[0]&32804&&r!==(r=(n[5][n[66].id]||0)<=0&&n[15]<=0)&&(t.disabled=r),L[0]&36&&l!==(l=(n[5][n[66].id]||0)+"")&&Y(u,l),L[0]&32804&&p!==(p=(n[5][n[66].id]||0)>=0&&n[15]<=0)&&(h.disabled=p)},d(V){V&&v(e),g=!1,tt(b)}}}function GE(n){let e,t=n[4][n[66].id]&&_h(n);return{c(){t&&t.c(),e=qe()},m(i,r){t&&t.m(i,r),T(i,e,r)},p(i,r){i[4][i[66].id]?t?t.p(i,r):(t=_h(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){i&&v(e),t&&t.d(i)}}}function _h(n){let e,t,i,r=n[4][n[66].id]+"",s,o;return{c(){e=y("div"),t=y("small"),i=B("내 선택: "),s=B(r),o=B("표"),ie(e,"text-align","right"),ie(e,"margin-top","0.3rem")},m(l,u){T(l,e,u),m(e,t),m(t,i),m(t,s),m(t,o)},p(l,u){u[0]&20&&r!==(r=l[4][l[66].id]+"")&&Y(s,r)},d(l){l&&v(e)}}}function gh(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Ct(e.src,t=Li(n[66].mapUrl,n[66].placeName))||q(e,"src",t),q(e,"title",i=n[66].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){T(r,e,s)},p(r,s){s[0]&4&&!Ct(e.src,t=Li(r[66].mapUrl,r[66].placeName))&&q(e,"src",t),s[0]&4&&i!==(i=r[66].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function yh(n){let e,t,i,r=n[66].placeName+"",s,o,l,u,c=(n[3][n[66].id]||0)+"",h,d,p,g,b,w,I,V,L=n[66].description&&oh(n),D=n[1].voteType==="accommodation"&&ah(n),M=n[1].voteType==="restaurant"&&hh(n);function U(E,k){return E[14]?GE:WE}let F=U(n),R=F(n),A=n[66].mapUrl&&gh(n);return{c(){e=y("div"),t=y("div"),i=y("strong"),s=B(r),o=O(),L&&L.c(),l=O(),u=y("span"),h=B(c),d=B("표"),p=O(),g=y("br"),b=O(),D&&D.c(),w=O(),M&&M.c(),I=O(),R.c(),V=O(),A&&A.c(),ie(u,"float","right"),ie(g,"clear","both"),q(e,"class","card")},m(E,k){T(E,e,k),m(e,t),m(t,i),m(i,s),m(t,o),L&&L.m(t,null),m(t,l),m(t,u),m(u,h),m(u,d),m(t,p),m(t,g),m(t,b),D&&D.m(t,null),m(t,w),M&&M.m(t,null),m(e,I),R.m(e,null),m(e,V),A&&A.m(e,null)},p(E,k){k[0]&4&&r!==(r=E[66].placeName+"")&&Y(s,r),E[66].description?L?L.p(E,k):(L=oh(E),L.c(),L.m(t,l)):L&&(L.d(1),L=null),k[0]&12&&c!==(c=(E[3][E[66].id]||0)+"")&&Y(h,c),E[1].voteType==="accommodation"?D?D.p(E,k):(D=ah(E),D.c(),D.m(t,w)):D&&(D.d(1),D=null),E[1].voteType==="restaurant"?M?M.p(E,k):(M=hh(E),M.c(),M.m(t,null)):M&&(M.d(1),M=null),F===(F=U(E))&&R?R.p(E,k):(R.d(1),R=F(E),R&&(R.c(),R.m(e,V))),E[66].mapUrl?A?A.p(E,k):(A=gh(E),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},d(E){E&&v(e),L&&L.d(),D&&D.d(),M&&M.d(),R.d(),A&&A.d()}}}function vh(n){let e,t,i,r,s,o,l;return{c(){e=y("hr"),t=O(),i=y("button"),r=B("제출"),i.disabled=s=n[9]===0},m(u,c){T(u,e,c),T(u,t,c),T(u,i,c),m(i,r),o||(l=Q(i,"click",n[20]),o=!0)},p(u,c){c[0]&512&&s!==(s=u[9]===0)&&(i.disabled=s)},d(u){u&&(v(e),v(t),v(i)),o=!1,l()}}}function Th(n){let e,t,i,r,s,o,l;return{c(){e=y("hr"),t=O(),i=y("button"),i.textContent="투표 마감",r=O(),s=y("button"),s.textContent="투표 삭제"},m(u,c){T(u,e,c),T(u,t,c),T(u,i,c),T(u,r,c),T(u,s,c),o||(l=[Q(i,"click",n[24]),Q(s,"click",n[55])],o=!0)},p:Oe,d(u){u&&(v(e),v(t),v(i),v(r),v(s)),o=!1,tt(l)}}}function KE(n){let e,t,i=Pe(n[8]),r=[];for(let s=0;s<i.length;s+=1)r[s]=Oh(eh(n,i,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=O(),t=y("hr")},m(s,o){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(s,o);T(s,e,o),T(s,t,o)},p(s,o){if(o[0]&8474){i=Pe(s[8]);let l;for(l=0;l<i.length;l+=1){const u=eh(s,i,l);r[l]?r[l].p(u,o):(r[l]=Oh(u),r[l].c(),r[l].m(e.parentNode,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},d(s){s&&(v(e),v(t)),lt(r,s)}}}function QE(n){let e;return{c(){e=y("p"),e.textContent="투표 없이 마감되었습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function bh(n){let e;return{c(){e=y("strong"),e.textContent="[당선]"},m(t,i){T(t,e,i)},d(t){t&&v(e)}}}function wh(n){let e,t,i=n[66].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[66].description+"")&&Y(r,i)},d(s){s&&v(e)}}}function Eh(n){let e,t,i=n[4][n[66].id]>1?` ×${n[4][n[66].id]}`:"",r,s;return{c(){e=y("span"),t=B("(내 선택"),r=B(i),s=B(")")},m(o,l){T(o,e,l),m(e,t),m(e,r),m(e,s)},p(o,l){l[0]&272&&i!==(i=o[4][o[66].id]>1?` ×${o[4][o[66].id]}`:"")&&Y(r,i)},d(o){o&&v(e)}}}function Ih(n){let e,t,i,r,s,o=n[66].price&&Ah(n),l=n[66].bedCount&&Rh(n),u=n[66].siteUrl&&kh(n);return{c(){e=y("br"),t=O(),o&&o.c(),i=O(),l&&l.c(),r=O(),u&&u.c(),s=qe()},m(c,h){T(c,e,h),T(c,t,h),o&&o.m(c,h),T(c,i,h),l&&l.m(c,h),T(c,r,h),u&&u.m(c,h),T(c,s,h)},p(c,h){c[66].price?o?o.p(c,h):(o=Ah(c),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),c[66].bedCount?l?l.p(c,h):(l=Rh(c),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null),c[66].siteUrl?u?u.p(c,h):(u=kh(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(v(e),v(t),v(i),v(r),v(s)),o&&o.d(c),l&&l.d(c),u&&u.d(c)}}}function Ah(n){let e,t=n[66].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&256&&t!==(t=r[66].price+"")&&Y(i,t)},d(r){r&&v(e)}}}function Rh(n){let e,t,i=n[66].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,l){T(o,e,l),m(e,t),m(e,r),m(e,s)},p(o,l){l[0]&256&&i!==(i=o[66].bedCount+"")&&Y(r,i)},d(o){o&&v(e)}}}function kh(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[66].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,l){T(o,e,l),m(e,t),m(e,i),m(i,r)},p(o,l){l[0]&256&&s!==(s=o[66].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function Ch(n){var d;let e,t,i,r,s,o,l=((d=n[66].mealType)==null?void 0:d.length)&&Ph(n),u=n[66].priceRange&&Sh(n),c=n[66].hours&&Nh(n),h=n[66].mainMenu&&Dh(n);return{c(){e=y("br"),t=O(),l&&l.c(),i=O(),u&&u.c(),r=O(),c&&c.c(),s=O(),h&&h.c(),o=qe()},m(p,g){T(p,e,g),T(p,t,g),l&&l.m(p,g),T(p,i,g),u&&u.m(p,g),T(p,r,g),c&&c.m(p,g),T(p,s,g),h&&h.m(p,g),T(p,o,g)},p(p,g){var b;(b=p[66].mealType)!=null&&b.length?l?l.p(p,g):(l=Ph(p),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),p[66].priceRange?u?u.p(p,g):(u=Sh(p),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),p[66].hours?c?c.p(p,g):(c=Nh(p),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),p[66].mainMenu?h?h.p(p,g):(h=Dh(p),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},d(p){p&&(v(e),v(t),v(i),v(r),v(s),v(o)),l&&l.d(p),u&&u.d(p),c&&c.d(p),h&&h.d(p)}}}function Ph(n){let e,t=n[66].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&256&&t!==(t=r[66].mealType.join("·")+"")&&Y(i,t)},d(r){r&&v(e)}}}function Sh(n){var o;let e,t=(o=n[66].mealType)!=null&&o.length?" · ":"",i,r=n[66].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(l,u){T(l,e,u),m(e,i),m(e,s)},p(l,u){var c;u[0]&256&&t!==(t=(c=l[66].mealType)!=null&&c.length?" · ":"")&&Y(i,t),u[0]&256&&r!==(r=l[66].priceRange+"")&&Y(s,r)},d(l){l&&v(e)}}}function Nh(n){let e,t,i=n[66].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[66].hours+"")&&Y(r,i)},d(s){s&&v(e)}}}function Dh(n){let e,t,i=n[66].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[66].mainMenu+"")&&Y(r,i)},d(s){s&&v(e)}}}function Vh(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Ct(e.src,t=Li(n[66].mapUrl,n[66].placeName))||q(e,"src",t),q(e,"title",i=n[66].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){T(r,e,s)},p(r,s){s[0]&256&&!Ct(e.src,t=Li(r[66].mapUrl,r[66].placeName))&&q(e,"src",t),s[0]&256&&i!==(i=r[66].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function Oh(n){let e,t,i,r=n[66].placeName+"",s,o,l,u,c=n[69]+"",h,d,p,g,b,w,I=n[70]&&bh(),V=n[66].description&&wh(n),L=n[4][n[66].id]&&Eh(n),D=n[1].voteType==="accommodation"&&Ih(n),M=n[1].voteType==="restaurant"&&Ch(n),U=n[66].mapUrl&&Vh(n);return{c(){e=y("div"),I&&I.c(),t=O(),i=y("strong"),s=B(r),o=O(),V&&V.c(),l=O(),u=y("span"),h=B(c),d=B("표"),p=O(),L&&L.c(),g=O(),D&&D.c(),b=O(),M&&M.c(),w=O(),U&&U.c(),ie(u,"float","right"),q(e,"class","card")},m(F,R){T(F,e,R),I&&I.m(e,null),m(e,t),m(e,i),m(i,s),m(e,o),V&&V.m(e,null),m(e,l),m(e,u),m(u,h),m(u,d),m(e,p),L&&L.m(e,null),m(e,g),D&&D.m(e,null),m(e,b),M&&M.m(e,null),m(e,w),U&&U.m(e,null)},p(F,R){F[70]?I||(I=bh(),I.c(),I.m(e,t)):I&&(I.d(1),I=null),R[0]&256&&r!==(r=F[66].placeName+"")&&Y(s,r),F[66].description?V?V.p(F,R):(V=wh(F),V.c(),V.m(e,l)):V&&(V.d(1),V=null),R[0]&264&&c!==(c=F[69]+"")&&Y(h,c),F[4][F[66].id]?L?L.p(F,R):(L=Eh(F),L.c(),L.m(e,g)):L&&(L.d(1),L=null),F[1].voteType==="accommodation"?D?D.p(F,R):(D=Ih(F),D.c(),D.m(e,b)):D&&(D.d(1),D=null),F[1].voteType==="restaurant"?M?M.p(F,R):(M=Ch(F),M.c(),M.m(e,w)):M&&(M.d(1),M=null),F[66].mapUrl?U?U.p(F,R):(U=Vh(F),U.c(),U.m(e,null)):U&&(U.d(1),U=null)},d(F){F&&v(e),I&&I.d(),V&&V.d(),L&&L.d(),D&&D.d(),M&&M.d(),U&&U.d()}}}function Lh(n){let e,t,i=n[66].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].description+"")&&Y(r,i)},d(s){s&&v(e)}}}function Mh(n){let e,t,i,r,s,o=n[66].price&&Uh(n),l=n[66].bedCount&&Fh(n),u=n[66].siteUrl&&Bh(n);return{c(){e=y("br"),t=O(),o&&o.c(),i=O(),l&&l.c(),r=O(),u&&u.c(),s=qe()},m(c,h){T(c,e,h),T(c,t,h),o&&o.m(c,h),T(c,i,h),l&&l.m(c,h),T(c,r,h),u&&u.m(c,h),T(c,s,h)},p(c,h){c[66].price?o?o.p(c,h):(o=Uh(c),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),c[66].bedCount?l?l.p(c,h):(l=Fh(c),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null),c[66].siteUrl?u?u.p(c,h):(u=Bh(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(v(e),v(t),v(i),v(r),v(s)),o&&o.d(c),l&&l.d(c),u&&u.d(c)}}}function Uh(n){let e,t=n[66].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[66].price+"")&&Y(i,t)},d(r){r&&v(e)}}}function Fh(n){let e,t,i=n[66].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,l){T(o,e,l),m(e,t),m(e,r),m(e,s)},p(o,l){l[0]&4&&i!==(i=o[66].bedCount+"")&&Y(r,i)},d(o){o&&v(e)}}}function Bh(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[66].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,l){T(o,e,l),m(e,t),m(e,i),m(i,r)},p(o,l){l[0]&4&&s!==(s=o[66].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function jh(n){var d;let e,t,i,r,s,o,l=((d=n[66].mealType)==null?void 0:d.length)&&qh(n),u=n[66].priceRange&&zh(n),c=n[66].hours&&Hh(n),h=n[66].mainMenu&&Wh(n);return{c(){e=y("br"),t=O(),l&&l.c(),i=O(),u&&u.c(),r=O(),c&&c.c(),s=O(),h&&h.c(),o=qe()},m(p,g){T(p,e,g),T(p,t,g),l&&l.m(p,g),T(p,i,g),u&&u.m(p,g),T(p,r,g),c&&c.m(p,g),T(p,s,g),h&&h.m(p,g),T(p,o,g)},p(p,g){var b;(b=p[66].mealType)!=null&&b.length?l?l.p(p,g):(l=qh(p),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),p[66].priceRange?u?u.p(p,g):(u=zh(p),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),p[66].hours?c?c.p(p,g):(c=Hh(p),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),p[66].mainMenu?h?h.p(p,g):(h=Wh(p),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},d(p){p&&(v(e),v(t),v(i),v(r),v(s),v(o)),l&&l.d(p),u&&u.d(p),c&&c.d(p),h&&h.d(p)}}}function qh(n){let e,t=n[66].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){T(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[66].mealType.join("·")+"")&&Y(i,t)},d(r){r&&v(e)}}}function zh(n){var o;let e,t=(o=n[66].mealType)!=null&&o.length?" · ":"",i,r=n[66].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(l,u){T(l,e,u),m(e,i),m(e,s)},p(l,u){var c;u[0]&4&&t!==(t=(c=l[66].mealType)!=null&&c.length?" · ":"")&&Y(i,t),u[0]&4&&r!==(r=l[66].priceRange+"")&&Y(s,r)},d(l){l&&v(e)}}}function Hh(n){let e,t,i=n[66].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].hours+"")&&Y(r,i)},d(s){s&&v(e)}}}function Wh(n){let e,t,i=n[66].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[66].mainMenu+"")&&Y(r,i)},d(s){s&&v(e)}}}function Gh(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Ct(e.src,t=Li(n[66].mapUrl,n[66].placeName))||q(e,"src",t),q(e,"title",i=n[66].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){T(r,e,s)},p(r,s){s[0]&4&&!Ct(e.src,t=Li(r[66].mapUrl,r[66].placeName))&&q(e,"src",t),s[0]&4&&i!==(i=r[66].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function Kh(n){let e,t,i,r;function s(){return n[39](n[66])}return{c(){e=y("br"),t=y("button"),t.textContent="삭제"},m(o,l){T(o,e,l),T(o,t,l),i||(r=Q(t,"click",s),i=!0)},p(o,l){n=o},d(o){o&&(v(e),v(t)),i=!1,r()}}}function Qh(n){let e,t,i=n[66].placeName+"",r,s,o,l,u,c,h=n[66].description&&Lh(n),d=n[1].voteType==="accommodation"&&Mh(n),p=n[1].voteType==="restaurant"&&jh(n),g=n[66].mapUrl&&Gh(n),b=n[66].createdBy===n[16].uid&&Kh(n);return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),h&&h.c(),o=O(),d&&d.c(),l=O(),p&&p.c(),u=O(),g&&g.c(),c=O(),b&&b.c(),q(e,"class","card")},m(w,I){T(w,e,I),m(e,t),m(t,r),m(e,s),h&&h.m(e,null),m(e,o),d&&d.m(e,null),m(e,l),p&&p.m(e,null),m(e,u),g&&g.m(e,null),m(e,c),b&&b.m(e,null)},p(w,I){I[0]&4&&i!==(i=w[66].placeName+"")&&Y(r,i),w[66].description?h?h.p(w,I):(h=Lh(w),h.c(),h.m(e,o)):h&&(h.d(1),h=null),w[1].voteType==="accommodation"?d?d.p(w,I):(d=Mh(w),d.c(),d.m(e,l)):d&&(d.d(1),d=null),w[1].voteType==="restaurant"?p?p.p(w,I):(p=jh(w),p.c(),p.m(e,u)):p&&(p.d(1),p=null),w[66].mapUrl?g?g.p(w,I):(g=Gh(w),g.c(),g.m(e,c)):g&&(g.d(1),g=null),w[66].createdBy===w[16].uid?b?b.p(w,I):(b=Kh(w),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},d(w){w&&v(e),h&&h.d(),d&&d.d(),p&&p.d(),g&&g.d(),b&&b.d()}}}function Xh(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL(maps.app.goo.gl)은 좌표 추출이 불가합니다. Google Maps 주소창의 전체 URL을 붙여넣어 주세요.",ie(t,"color","#c00")},m(i,r){T(i,e,r),T(i,t,r)},d(i){i&&(v(e),v(t))}}}function Yh(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E;return{c(){e=y("br"),t=O(),i=y("label"),r=B("가격"),s=y("br"),o=O(),l=y("input"),u=O(),c=y("br"),h=O(),d=y("label"),p=B("침대 개수"),g=y("br"),b=O(),w=y("input"),I=O(),V=y("br"),L=O(),D=y("label"),M=B("숙소 사이트 URL (선택)"),U=y("br"),F=O(),R=y("input"),q(l,"placeholder","예: 1박 12만원"),ie(l,"width","100%"),q(w,"type","number"),q(w,"min","1"),q(w,"placeholder","예: 2"),ie(w,"width","5rem"),q(R,"placeholder","https://www.airbnb.com/..."),ie(R,"width","100%")},m(k,P){T(k,e,P),T(k,t,P),T(k,i,P),m(i,r),m(i,s),m(i,o),m(i,l),J(l,n[12].price),T(k,u,P),T(k,c,P),T(k,h,P),T(k,d,P),m(d,p),m(d,g),m(d,b),m(d,w),J(w,n[12].bedCount),T(k,I,P),T(k,V,P),T(k,L,P),T(k,D,P),m(D,M),m(D,U),m(D,F),m(D,R),J(R,n[12].siteUrl),A||(E=[Q(l,"input",n[43]),Q(w,"input",n[44]),Q(R,"input",n[45])],A=!0)},p(k,P){P[0]&4096&&l.value!==k[12].price&&J(l,k[12].price),P[0]&4096&&gi(w.value)!==k[12].bedCount&&J(w,k[12].bedCount),P[0]&4096&&R.value!==k[12].siteUrl&&J(R,k[12].siteUrl)},d(k){k&&(v(e),v(t),v(i),v(u),v(c),v(h),v(d),v(I),v(V),v(L),v(D)),A=!1,tt(E)}}}function Jh(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E,k,P,N,S,ne,ee,fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je;return Le=A_(n[47][0]),{c(){e=y("br"),t=O(),i=y("fieldset"),r=y("legend"),r.textContent="식사 유형",s=O(),o=y("label"),l=y("input"),u=B(" 조식"),c=B(`
           
          `),h=y("label"),d=y("input"),p=B(" 중식"),g=B(`
           
          `),b=y("label"),w=y("input"),I=B(" 석식"),V=O(),L=y("br"),D=O(),M=y("label"),U=B("가격대"),F=y("br"),R=O(),A=y("input"),E=O(),k=y("br"),P=O(),N=y("label"),S=B("영업시간"),ne=y("br"),ee=O(),fe=y("input"),x=O(),me=y("br"),ce=O(),Te=y("label"),ze=B("주메뉴"),Se=y("br"),Ce=O(),Ee=y("input"),q(l,"type","checkbox"),l.__value="조식",J(l,l.__value),q(d,"type","checkbox"),d.__value="중식",J(d,d.__value),q(w,"type","checkbox"),w.__value="석식",J(w,w.__value),ie(i,"border","none"),ie(i,"padding","0"),ie(i,"margin","0"),q(A,"placeholder","예: 1인 1만원대"),ie(A,"width","100%"),q(fe,"placeholder","예: 11:00 - 21:00"),ie(fe,"width","100%"),q(Ee,"placeholder","예: 삼겹살, 냉면"),ie(Ee,"width","100%"),Le.p(l,d,w)},m(pe,se){T(pe,e,se),T(pe,t,se),T(pe,i,se),m(i,r),m(i,s),m(i,o),m(o,l),l.checked=~(n[12].mealType||[]).indexOf(l.__value),m(o,u),m(i,c),m(i,h),m(h,d),d.checked=~(n[12].mealType||[]).indexOf(d.__value),m(h,p),m(i,g),m(i,b),m(b,w),w.checked=~(n[12].mealType||[]).indexOf(w.__value),m(b,I),T(pe,V,se),T(pe,L,se),T(pe,D,se),T(pe,M,se),m(M,U),m(M,F),m(M,R),m(M,A),J(A,n[12].priceRange),T(pe,E,se),T(pe,k,se),T(pe,P,se),T(pe,N,se),m(N,S),m(N,ne),m(N,ee),m(N,fe),J(fe,n[12].hours),T(pe,x,se),T(pe,me,se),T(pe,ce,se),T(pe,Te,se),m(Te,ze),m(Te,Se),m(Te,Ce),m(Te,Ee),J(Ee,n[12].mainMenu),He||(je=[Q(l,"change",n[46]),Q(d,"change",n[48]),Q(w,"change",n[49]),Q(A,"input",n[50]),Q(fe,"input",n[51]),Q(Ee,"input",n[52])],He=!0)},p(pe,se){se[0]&4096&&(l.checked=~(pe[12].mealType||[]).indexOf(l.__value)),se[0]&4096&&(d.checked=~(pe[12].mealType||[]).indexOf(d.__value)),se[0]&4096&&(w.checked=~(pe[12].mealType||[]).indexOf(w.__value)),se[0]&4096&&A.value!==pe[12].priceRange&&J(A,pe[12].priceRange),se[0]&4096&&fe.value!==pe[12].hours&&J(fe,pe[12].hours),se[0]&4096&&Ee.value!==pe[12].mainMenu&&J(Ee,pe[12].mainMenu)},d(pe){pe&&(v(e),v(t),v(i),v(V),v(L),v(D),v(M),v(E),v(k),v(P),v(N),v(x),v(me),v(ce),v(Te)),Le.r(),He=!1,tt(je)}}}function xh(n){let e,t,i,r,s,o,l,u,c,h=n[2].length===0&&$h();return{c(){e=y("hr"),t=O(),i=y("button"),r=B("투표 시작"),o=O(),h&&h.c(),l=qe(),i.disabled=s=n[2].length===0},m(d,p){T(d,e,p),T(d,t,p),T(d,i,p),m(i,r),T(d,o,p),h&&h.m(d,p),T(d,l,p),u||(c=Q(i,"click",n[21]),u=!0)},p(d,p){p[0]&4&&s!==(s=d[2].length===0)&&(i.disabled=s),d[2].length===0?h||(h=$h(),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null)},d(d){d&&(v(e),v(t),v(i),v(o),v(l)),h&&h.d(d),u=!1,c()}}}function $h(n){let e;return{c(){e=y("small"),e.textContent="(후보가 1개 이상이어야 합니다)"},m(t,i){T(t,e,i)},d(t){t&&v(e)}}}function Zh(n){let e,t,i,r,s,o,l;function u(d,p){return d[7].length===0?YE:XE}let c=u(n),h=c(n);return{c(){e=y("label"),t=B("연결할 여행지"),i=y("br"),r=O(),h.c(),s=O(),o=y("br"),l=y("br")},m(d,p){T(d,e,p),m(e,t),m(e,i),m(e,r),h.m(e,null),T(d,s,p),T(d,o,p),T(d,l,p)},p(d,p){c===(c=u(d))&&h?h.p(d,p):(h.d(1),h=c(d),h&&(h.c(),h.m(e,null)))},d(d){d&&(v(e),v(s),v(o),v(l)),h.d()}}}function XE(n){let e,t,i,r=Pe(n[7]),s=[];for(let o=0;o<r.length;o+=1)s[o]=ef(nh(n,r,o));return{c(){e=y("select");for(let o=0;o<s.length;o+=1)s[o].c();n[6].linkedDestination===void 0&&Yt(()=>n[34].call(e))},m(o,l){T(o,e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);Pt(e,n[6].linkedDestination,!0),t||(i=Q(e,"change",n[34]),t=!0)},p(o,l){if(l[0]&128){r=Pe(o[7]);let u;for(u=0;u<r.length;u+=1){const c=nh(o,r,u);s[u]?s[u].p(c,l):(s[u]=ef(c),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=r.length}l[0]&64&&Pt(e,o[6].linkedDestination)},d(o){o&&v(e),lt(s,o),t=!1,i()}}}function YE(n){let e;return{c(){e=y("p"),e.textContent="마감된 여행지 투표가 없습니다. 여행지를 먼저 결정해 주세요."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function ef(n){let e,t=n[63]+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[63],J(e,e.__value)},m(s,o){T(s,e,o),m(e,i)},p(s,o){o[0]&128&&t!==(t=s[63]+"")&&Y(i,t),o[0]&128&&r!==(r=s[63])&&(e.__value=r,J(e,e.__value))},d(s){s&&v(e)}}}function tf(n){let e,t,i,r,s,o,l,u;return{c(){e=B(`  
    `),t=y("label"),i=B("당선 인원 수"),r=y("br"),s=O(),o=y("input"),q(o,"type","number"),q(o,"min","1"),ie(o,"width","4rem")},m(c,h){T(c,e,h),T(c,t,h),m(t,i),m(t,r),m(t,s),m(t,o),J(o,n[6].winnersCount),l||(u=Q(o,"input",n[38]),l=!0)},p(c,h){h[0]&64&&gi(o.value)!==c[6].winnersCount&&J(o,c[6].winnersCount)},d(c){c&&(v(e),v(t)),l=!1,u()}}}function JE(n){let e,t=Pe(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=sf(ih(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);T(r,e,s)},p(r,s){if(s[0]&33751041){t=Pe(r[0]);let o;for(o=0;o<t.length;o+=1){const l=ih(r,t,o);i[o]?i[o].p(l,s):(i[o]=sf(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function xE(n){let e;return{c(){e=y("p"),e.textContent="진행 중인 투표가 없습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function nf(n){let e,t,i,r;function s(...o){return n[31](n[60],...o)}return{c(){e=B(" "),t=y("button"),t.textContent="삭제"},m(o,l){T(o,e,l),T(o,t,l),i||(r=Q(t,"click",s),i=!0)},p(o,l){n=o},d(o){o&&(v(e),v(t)),i=!1,r()}}}function rf(n){let e,t=Ls(n[60].deadline)+"",i,r;return{c(){e=B("마감일: "),i=B(t),r=B(" ·")},m(s,o){T(s,e,o),T(s,i,o),T(s,r,o)},p(s,o){o[0]&1&&t!==(t=Ls(s[60].deadline)+"")&&Y(i,t)},d(s){s&&(v(e),v(i),v(r))}}}function sf(n){let e,t,i,r=Os(n[60])+"",s,o,l,u,c=n[60].title+"",h,d,p,g=af(n[60])+"",b,w,I,V,L,D,M,U=Rr(n[60])+"",F,R,A,E,k,P=n[60].createdBy===n[16].uid&&nf(n),N=n[60].deadline&&rf(n);function S(){return n[32](n[60])}return{c(){e=y("div"),t=y("span"),i=B("["),s=B(r),o=B("]"),l=O(),u=y("strong"),h=B(c),d=O(),p=y("span"),b=B(g),w=O(),P&&P.c(),I=O(),V=y("br"),L=O(),D=y("small"),N&&N.c(),M=B(`
          1인 `),F=B(U),R=B("표"),A=O(),ie(p,"float","right"),q(e,"class","card"),ie(e,"cursor","pointer")},m(ne,ee){T(ne,e,ee),m(e,t),m(t,i),m(t,s),m(t,o),m(e,l),m(e,u),m(u,h),m(e,d),m(e,p),m(p,b),m(p,w),P&&P.m(p,null),m(e,I),m(e,V),m(e,L),m(e,D),N&&N.m(D,null),m(D,M),m(D,F),m(D,R),m(e,A),E||(k=Q(e,"click",S),E=!0)},p(ne,ee){n=ne,ee[0]&1&&r!==(r=Os(n[60])+"")&&Y(s,r),ee[0]&1&&c!==(c=n[60].title+"")&&Y(h,c),ee[0]&1&&g!==(g=af(n[60])+"")&&Y(b,g),n[60].createdBy===n[16].uid?P?P.p(n,ee):(P=nf(n),P.c(),P.m(p,null)):P&&(P.d(1),P=null),n[60].deadline?N?N.p(n,ee):(N=rf(n),N.c(),N.m(D,M)):N&&(N.d(1),N=null),ee[0]&1&&U!==(U=Rr(n[60])+"")&&Y(F,U)},d(ne){ne&&v(e),P&&P.d(),N&&N.d(),E=!1,k()}}}function $E(n){let e;function t(s,o){if(!s[10])return FE;if(s[11]==="list")return UE;if(s[11]==="create")return ME;if(s[11]==="detail"&&s[1])return LE}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),T(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function of(){return{placeName:"",description:"",mapUrl:"",price:"",bedCount:"",siteUrl:"",priceRange:"",mealType:[],hours:"",mainMenu:""}}function ZE(n){const e=n==null?void 0:n.trim();return e?/^https?:\/\//i.test(e)?e:"https://"+e:null}function af(n){return n.status==="recruiting"?"모집중":Ei(n)?"마감":"투표중"}function Os(n){return n.voteType==="destination"?"여행지":n.voteType==="attraction"?"관광지":n.voteType==="accommodation"?"숙소":n.voteType==="restaurant"?"맛집":""}function Ei(n){return n.status==="closed"?!0:n.status!=="ongoing"||!n.deadline?!1:(n.deadline.toDate?n.deadline.toDate():new Date(n.deadline))<new Date}function Ls(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"없음"}function Rr(n){return n.maxVotesPerUser??1}function eI(n,e,t){let i,r,s,o,l,u,c,h;an(n,Hi,G=>t(16,c=G)),an(n,zn,G=>t(10,h=G));let d="list",p=[],g=null,b=[],w={},I={},V={},L,D,M,U={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1},F=of(),R=[];function A(){L==null||L(),t(28,L=Xt(Bt(Je(ke,"groups",h.id,"votes"),Tn("createdAt","desc")),G=>{t(0,p=G.docs.map(te=>({id:te.id,...te.data()})))}))}function E(G){t(1,g=G),t(11,d="detail"),t(2,b=[]),t(3,w={}),t(4,I={}),t(5,V={}),D==null||D(),M==null||M(),D=Xt(Je(ke,"groups",h.id,"votes",G.id,"options"),te=>{t(2,b=te.docs.map(Ue=>({id:Ue.id,...Ue.data()})))}),M=Xt(Je(ke,"groups",h.id,"votes",G.id,"records"),te=>{const Ue={};let Ie={};te.docs.forEach(Ke=>{const St=Ke.data();if(St.votes)Object.entries(St.votes).forEach(([_t,Et])=>{Ue[_t]=(Ue[_t]||0)+Et}),Ke.id===c.uid&&(Ie={...St.votes});else{const _t=St.optionIds??(St.optionId?[St.optionId]:[]);_t.forEach(Et=>{Ue[Et]=(Ue[Et]||0)+1}),Ke.id===c.uid&&_t.forEach(Et=>{Ie[Et]=(Ie[Et]||0)+1})}}),t(3,w=Ue),t(4,I=Ie)})}function k(G){if(r||Ei(g))return;const te=V[G]||0;if(te>=0&&o<=0)return;const Ue=te+1;if(Ue===0){const{[G]:Ie,...Ke}=V;t(5,V=Ke)}else t(5,V={...V,[G]:Ue})}function P(G){if(r||Ei(g))return;const te=V[G]||0;if(te<=0&&o<=0)return;const Ue=te-1;if(Ue===0){const{[G]:Ie,...Ke}=V;t(5,V=Ke)}else t(5,V={...V,[G]:Ue})}async function N(){if(s===0||r)return;const G=st(ke,"groups",h.id,"votes",g.id,"records",c.uid);await Vs(G,{votes:{...V},totalVotes:s,votedAt:qt()}),t(5,V={})}async function S(){b.length!==0&&await $n(st(ke,"groups",h.id,"votes",g.id),{status:"ongoing"})}async function ne(){var Ie,Ke,St,_t,Et;if(!F.placeName.trim())return;const G=F.mapUrl.trim()||null,{lat:te,lng:Ue}=Qm(G);await Zn(Je(ke,"groups",h.id,"votes",g.id,"options"),{placeName:F.placeName.trim(),description:F.description.trim(),mapUrl:G,lat:te,lng:Ue,price:((Ie=F.price)==null?void 0:Ie.trim())||null,bedCount:F.bedCount?Number(F.bedCount):null,siteUrl:ZE(F.siteUrl),priceRange:((Ke=F.priceRange)==null?void 0:Ke.trim())||null,mealType:(St=F.mealType)!=null&&St.length?F.mealType:null,hours:((_t=F.hours)==null?void 0:_t.trim())||null,mainMenu:((Et=F.mainMenu)==null?void 0:Et.trim())||null,createdBy:c.uid}),t(12,F=of())}async function ee(G){await Lt(st(ke,"groups",h.id,"votes",g.id,"options",G.id))}async function fe(){const G=g.winnersCount??1,te=b.map(Ie=>({...Ie,score:w[Ie.id]||0})).filter(Ie=>Ie.score>0).sort((Ie,Ke)=>Ke.score-Ie.score);let Ue=[];if(te.length>0){const Ie=te[Math.min(G,te.length)-1].score;Ue=te.filter(Ke=>Ke.score>=Ie).map(Ke=>({placeName:Ke.placeName,description:Ke.description||"",mapUrl:Ke.mapUrl||null,lat:Ke.lat||null,lng:Ke.lng||null}))}await $n(st(ke,"groups",h.id,"votes",g.id),{status:"closed",winners:Ue})}async function x(G,te){te==null||te.stopPropagation(),confirm(`"${G.title}" 투표를 삭제하시겠습니까?`)&&(await Lt(st(ke,"groups",h.id,"votes",G.id)),(g==null?void 0:g.id)===G.id&&ce())}async function me(){if(!U.title.trim()||(U.voteType==="attraction"||U.voteType==="restaurant")&&!U.linkedDestination)return;const G=U.voteType==="attraction"||U.voteType==="accommodation"||U.voteType==="restaurant";await Zn(Je(ke,"groups",h.id,"votes"),{title:U.title.trim(),voteType:U.voteType,linkedDestination:G?U.linkedDestination:null,deadline:U.deadline?new Date(U.deadline):null,maxVotesPerUser:Number(U.maxVotesPerUser)||1,winnersCount:U.voteType==="attraction"?Number(U.winnersCount)||1:null,status:"recruiting",createdBy:c.uid,createdAt:qt()}),t(6,U={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1}),t(11,d="list")}function ce(){t(11,d="list"),t(1,g=null),t(2,b=[]),t(3,w={}),t(4,I={}),t(5,V={}),D==null||D(),M==null||M()}Us(()=>{L==null||L(),D==null||D(),M==null||M()});const Te=[[]],ze=()=>t(11,d="create"),Se=(G,te)=>x(G,te),Ce=G=>E(G);function Ee(){U.voteType=Hn(this),t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}function Le(){U.linkedDestination=Hn(this),t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}function He(){U.title=this.value,t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}function je(){U.deadline=this.value,t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}function pe(){U.maxVotesPerUser=gi(this.value),t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}function se(){U.winnersCount=gi(this.value),t(6,U),t(0,p),t(7,R),t(10,h),t(28,L)}const _e=G=>ee(G);function $(){F.placeName=this.value,t(12,F)}function re(){F.description=this.value,t(12,F)}function Me(){F.mapUrl=this.value,t(12,F)}function le(){F.price=this.value,t(12,F)}function W(){F.bedCount=gi(this.value),t(12,F)}function he(){F.siteUrl=this.value,t(12,F)}function oe(){F.mealType=ko(Te[0],this.__value,this.checked),t(12,F)}function ye(){F.mealType=ko(Te[0],this.__value,this.checked),t(12,F)}function it(){F.mealType=ko(Te[0],this.__value,this.checked),t(12,F)}function Ot(){F.priceRange=this.value,t(12,F)}function fn(){F.hours=this.value,t(12,F)}function ae(){F.mainMenu=this.value,t(12,F)}const X=G=>P(G.id),ve=G=>k(G.id),Ge=G=>x(g,G);return n.$$.update=()=>{if(n.$$.dirty[0]&268436480&&(h?A():(t(0,p=[]),L==null||L())),n.$$.dirty[0]&193&&(U.voteType==="attraction"||U.voteType==="accommodation"||U.voteType==="restaurant")&&(t(7,R=p.filter(G=>{var te;return G.voteType==="destination"&&G.status==="closed"&&((te=G.winners)==null?void 0:te.length)}).flatMap(G=>G.winners.map(te=>te.placeName??te))),t(6,U.linkedDestination=R[0]??"",U)),n.$$.dirty[0]&3&&g&&p.length>0){const G=p.find(te=>te.id===g.id);G&&t(1,g=G)}n.$$.dirty[0]&16&&t(29,i=Object.values(I).reduce((G,te)=>G+te,0)),n.$$.dirty[0]&536870912&&t(14,r=i>0),n.$$.dirty[0]&32&&t(9,s=Object.values(V).reduce((G,te)=>G+Math.abs(te),0)),n.$$.dirty[0]&514&&t(15,o=g?Rr(g)-s:0),n.$$.dirty[0]&12&&t(8,l=[...b].sort((G,te)=>(w[te.id]||0)-(w[G.id]||0))),n.$$.dirty[0]&264&&l[0]&&w[l[0].id],n.$$.dirty[0]&266&&t(13,u=(()=>{if(!g)return new Set;const G=g.winnersCount??1,te=l.map(Ie=>({id:Ie.id,score:w[Ie.id]||0})).filter(Ie=>Ie.score>0);if(te.length===0)return new Set;const Ue=te[Math.min(G,te.length)-1].score;return new Set(te.filter(Ie=>Ie.score>=Ue).map(Ie=>Ie.id))})())},[p,g,b,w,I,V,U,R,l,s,h,d,F,u,r,o,c,E,k,P,N,S,ne,ee,fe,x,me,ce,L,i,ze,Se,Ce,Ee,Le,He,je,pe,se,_e,$,re,Me,le,W,he,oe,Te,ye,it,Ot,fn,ae,X,ve,Ge]}class tI extends Cr{constructor(e){super(),kr(this,e,eI,$E,Ui,{},null,[-1,-1,-1])}}function lf(n,e,t){const i=n.slice();i[61]=e[t],i[67]=t;const r=i[8][i[61]]??[];i[62]=r;const s=DE(i[62]);i[63]=s;const o=VE(i[62]);i[64]=o;const l=OE(i[62]);return i[65]=l,i}function uf(n,e,t){const i=n.slice();return i[68]=e[t],i}function cf(n,e,t){const i=n.slice();return i[71]=e[t],i}function hf(n,e,t){const i=n.slice();return i[68]=e[t],i}function ff(n,e,t){const i=n.slice();return i[76]=e[t],i}function df(n,e,t){const i=n.slice();return i[58]=e[t],i}function pf(n,e,t){const i=n.slice();return i[55]=e[t],i}function nI(n){let e,t=n[1].title+"",i,r,s,o,l,u,c=n[1].startDate+"",h,d,p=n[1].endDate+"",g,b,w,I,V,L,D,M,U=n[1].destination&&mf(n),F=n[9].length>0&&_f(n),R=Pe(n[2]),A=[];for(let E=0;E<R.length;E+=1)A[E]=Pf(lf(n,R,E));return{c(){e=y("h2"),i=B(t),r=O(),s=y("button"),s.textContent="← 목록으로",o=O(),U&&U.c(),l=O(),u=y("small"),h=B(c),d=B(" ~ "),g=B(p),b=O(),w=y("hr"),I=O(),F&&F.c(),V=O();for(let E=0;E<A.length;E+=1)A[E].c();L=qe()},m(E,k){T(E,e,k),m(e,i),T(E,r,k),T(E,s,k),T(E,o,k),U&&U.m(E,k),T(E,l,k),T(E,u,k),m(u,h),m(u,d),m(u,g),T(E,b,k),T(E,w,k),T(E,I,k),F&&F.m(E,k),T(E,V,k);for(let P=0;P<A.length;P+=1)A[P]&&A[P].m(E,k);T(E,L,k),D||(M=Q(s,"click",n[21]),D=!0)},p(E,k){if(k[0]&2&&t!==(t=E[1].title+"")&&Y(i,t),E[1].destination?U?U.p(E,k):(U=mf(E),U.c(),U.m(l.parentNode,l)):U&&(U.d(1),U=null),k[0]&2&&c!==(c=E[1].startDate+"")&&Y(h,c),k[0]&2&&p!==(p=E[1].endDate+"")&&Y(g,p),E[9].length>0?F?F.p(E,k):(F=_f(E),F.c(),F.m(V.parentNode,V)):F&&(F.d(1),F=null),k[0]&1520068){R=Pe(E[2]);let P;for(P=0;P<R.length;P+=1){const N=lf(E,R,P);A[P]?A[P].p(N,k):(A[P]=Pf(N),A[P].c(),A[P].m(L.parentNode,L))}for(;P<A.length;P+=1)A[P].d(1);A.length=R.length}},d(E){E&&(v(e),v(r),v(s),v(o),v(l),v(u),v(b),v(w),v(I),v(V),v(L)),U&&U.d(E),F&&F.d(E),lt(A,E),D=!1,M()}}}function iI(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E,k,P,N,S,ne,ee,fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je;function pe($,re){return $[10].length>0?hI:cI}let se=pe(n),_e=se(n);return{c(){e=y("h2"),e.textContent="새 일정 만들기",t=O(),i=y("button"),i.textContent="← 뒤로",r=O(),s=y("hr"),o=O(),l=y("label"),u=B("여행명 *"),c=y("br"),h=O(),d=y("input"),p=O(),g=y("br"),b=y("br"),w=O(),I=y("label"),V=B("여행지"),L=y("br"),D=O(),_e.c(),M=O(),U=y("br"),F=y("br"),R=O(),A=y("label"),E=B("시작일 *"),k=y("br"),P=O(),N=y("input"),S=B(`
   
  `),ne=y("label"),ee=B("종료일 *"),fe=y("br"),x=O(),me=y("input"),ce=O(),Te=y("br"),ze=y("br"),Se=O(),Ce=y("button"),Ce.textContent="일정 만들기",Ee=O(),Le=y("button"),Le.textContent="취소",q(d,"placeholder","예: 제주 3박 4일"),ie(d,"width","100%"),q(N,"type","date"),q(me,"type","date")},m($,re){T($,e,re),T($,t,re),T($,i,re),T($,r,re),T($,s,re),T($,o,re),T($,l,re),m(l,u),m(l,c),m(l,h),m(l,d),J(d,n[5].title),T($,p,re),T($,g,re),T($,b,re),T($,w,re),T($,I,re),m(I,V),m(I,L),m(I,D),_e.m(I,null),T($,M,re),T($,U,re),T($,F,re),T($,R,re),T($,A,re),m(A,E),m(A,k),m(A,P),m(A,N),J(N,n[5].startDate),T($,S,re),T($,ne,re),m(ne,ee),m(ne,fe),m(ne,x),m(ne,me),J(me,n[5].endDate),T($,ce,re),T($,Te,re),T($,ze,re),T($,Se,re),T($,Ce,re),T($,Ee,re),T($,Le,re),He||(je=[Q(i,"click",n[21]),Q(d,"input",n[29]),Q(N,"input",n[33]),Q(me,"input",n[34]),Q(Ce,"click",n[15]),Q(Le,"click",n[21])],He=!0)},p($,re){re[0]&1056&&d.value!==$[5].title&&J(d,$[5].title),se===(se=pe($))&&_e?_e.p($,re):(_e.d(1),_e=se($),_e&&(_e.c(),_e.m(I,null))),re[0]&1056&&J(N,$[5].startDate),re[0]&1056&&J(me,$[5].endDate)},d($){$&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(p),v(g),v(b),v(w),v(I),v(M),v(U),v(F),v(R),v(A),v(S),v(ne),v(ce),v(Te),v(ze),v(Se),v(Ce),v(Ee),v(Le)),_e.d(),He=!1,tt(je)}}}function rI(n){let e,t,i=n[3].name+"",r,s,o,l,u,c,h,d,p;function g(I,V){return I[0].length===0?dI:fI}let b=g(n),w=b(n);return{c(){e=y("h2"),t=B("여행 일정 — "),r=B(i),s=O(),o=y("button"),o.textContent="+ 새 일정 만들기",l=O(),u=y("hr"),c=O(),w.c(),h=qe()},m(I,V){T(I,e,V),m(e,t),m(e,r),T(I,s,V),T(I,o,V),T(I,l,V),T(I,u,V),T(I,c,V),w.m(I,V),T(I,h,V),d||(p=Q(o,"click",n[26]),d=!0)},p(I,V){V[0]&8&&i!==(i=I[3].name+"")&&Y(r,i),b===(b=g(I))&&w?w.p(I,V):(w.d(1),w=b(I),w&&(w.c(),w.m(h.parentNode,h)))},d(I){I&&(v(e),v(s),v(o),v(l),v(u),v(c),v(h)),w.d(I),d=!1,p()}}}function sI(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function mf(n){let e,t,i=n[1].destination+"",r;return{c(){e=y("span"),t=B("· "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=s[1].destination+"")&&Y(r,i)},d(s){s&&v(e)}}}function _f(n){let e,t,i,r,s,o,l,u,c,h=Pe(n[9]),d=[];for(let p=0;p<h.length;p+=1)d[p]=gf(ff(n,h,p));return{c(){e=y("div"),t=y("strong"),t.textContent="투표 당선 관광지",i=B(` —
      `),r=y("select"),s=y("option"),s.textContent="선택 시 항목 추가폼에 자동입력";for(let p=0;p<d.length;p+=1)d[p].c();o=O(),l=y("hr"),s.__value="",J(s,s.__value),q(e,"class","card")},m(p,g){T(p,e,g),m(e,t),m(e,i),m(e,r),m(r,s);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(r,null);T(p,o,g),T(p,l,g),u||(c=Q(r,"change",n[35]),u=!0)},p(p,g){if(g[0]&512){h=Pe(p[9]);let b;for(b=0;b<h.length;b+=1){const w=ff(p,h,b);d[b]?d[b].p(w,g):(d[b]=gf(w),d[b].c(),d[b].m(r,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=h.length}},d(p){p&&(v(e),v(o),v(l)),lt(d,p),u=!1,c()}}}function gf(n){let e,t=n[76].placeName+"",i,r=n[76].description?` — ${n[76].description}`:"",s,o;return{c(){e=y("option"),i=B(t),s=B(r),e.__value=o=n[76].placeName,J(e,e.__value)},m(l,u){T(l,e,u),m(e,i),m(e,s)},p(l,u){u[0]&512&&t!==(t=l[76].placeName+"")&&Y(i,t),u[0]&512&&r!==(r=l[76].description?` — ${l[76].description}`:"")&&Y(s,r),u[0]&512&&o!==(o=l[76].placeName)&&(e.__value=o,J(e,e.__value))},d(l){l&&v(e)}}}function oI(n){let e,t,i,r,s,o,l=n[71].category+"",u,c,h,d,p=n[71].placeName+"",g,b,w,I,V,L,D,M,U,F=n[71].time&&yf(n),R=n[71].memo&&vf(n);function A(){return n[42](n[71])}function E(){return n[43](n[71])}return{c(){e=y("div"),t=y("div"),i=y("div"),F&&F.c(),r=O(),s=y("span"),o=B("["),u=B(l),c=B("]"),h=O(),d=y("strong"),g=B(p),b=O(),R&&R.c(),w=O(),I=y("div"),V=y("button"),V.textContent="수정",L=O(),D=y("button"),D.textContent="삭제",ie(I,"white-space","nowrap"),ie(I,"margin-left","0.5rem"),ie(t,"display","flex"),ie(t,"justify-content","space-between"),ie(t,"align-items","flex-start"),q(e,"class","card")},m(k,P){T(k,e,P),m(e,t),m(t,i),F&&F.m(i,null),m(i,r),m(i,s),m(s,o),m(s,u),m(s,c),m(i,h),m(i,d),m(d,g),m(i,b),R&&R.m(i,null),m(t,w),m(t,I),m(I,V),m(I,L),m(I,D),M||(U=[Q(V,"click",A),Q(D,"click",E)],M=!0)},p(k,P){n=k,n[71].time?F?F.p(n,P):(F=yf(n),F.c(),F.m(i,r)):F&&(F.d(1),F=null),P[0]&260&&l!==(l=n[71].category+"")&&Y(u,l),P[0]&260&&p!==(p=n[71].placeName+"")&&Y(g,p),n[71].memo?R?R.p(n,P):(R=vf(n),R.c(),R.m(i,null)):R&&(R.d(1),R=null)},d(k){k&&v(e),F&&F.d(),R&&R.d(),M=!1,tt(U)}}}function aI(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U=Mi(n[6].mapUrl),F,R,A,E,k,P,N,S,ne=Pe(n[12]),ee=[];for(let x=0;x<ne.length;x+=1)ee[x]=Tf(hf(n,ne,x));let fe=U&&bf();return{c(){e=y("div"),t=y("input"),i=B(`
           
          `),r=y("select");for(let x=0;x<ee.length;x+=1)ee[x].c();s=O(),o=y("br"),l=y("br"),u=O(),c=y("input"),h=O(),d=y("br"),p=y("br"),g=O(),b=y("textarea"),w=O(),I=y("br"),V=y("br"),L=O(),D=y("input"),M=O(),fe&&fe.c(),F=O(),R=y("br"),A=O(),E=y("button"),E.textContent="저장",k=O(),P=y("button"),P.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Yt(()=>n[37].call(r)),q(c,"placeholder","장소명 *"),ie(c,"width","100%"),q(b,"placeholder","메모"),q(b,"rows","2"),ie(b,"width","100%"),q(D,"placeholder","Google Maps URL (선택)"),ie(D,"width","100%"),q(e,"class","card")},m(x,me){T(x,e,me),m(e,t),J(t,n[6].time),m(e,i),m(e,r);for(let ce=0;ce<ee.length;ce+=1)ee[ce]&&ee[ce].m(r,null);Pt(r,n[6].category,!0),m(e,s),m(e,o),m(e,l),m(e,u),m(e,c),J(c,n[6].placeName),m(e,h),m(e,d),m(e,p),m(e,g),m(e,b),J(b,n[6].memo),m(e,w),m(e,I),m(e,V),m(e,L),m(e,D),J(D,n[6].mapUrl),m(e,M),fe&&fe.m(e,null),m(e,F),m(e,R),m(e,A),m(e,E),m(e,k),m(e,P),N||(S=[Q(t,"input",n[36]),Q(r,"change",n[37]),Q(c,"input",n[38]),Q(b,"input",n[39]),Q(D,"input",n[40]),Q(E,"click",n[18]),Q(P,"click",n[41])],N=!0)},p(x,me){if(me[0]&4160&&J(t,x[6].time),me[0]&4096){ne=Pe(x[12]);let ce;for(ce=0;ce<ne.length;ce+=1){const Te=hf(x,ne,ce);ee[ce]?ee[ce].p(Te,me):(ee[ce]=Tf(Te),ee[ce].c(),ee[ce].m(r,null))}for(;ce<ee.length;ce+=1)ee[ce].d(1);ee.length=ne.length}me[0]&4160&&Pt(r,x[6].category),me[0]&4160&&c.value!==x[6].placeName&&J(c,x[6].placeName),me[0]&4160&&J(b,x[6].memo),me[0]&4160&&D.value!==x[6].mapUrl&&J(D,x[6].mapUrl),me[0]&64&&(U=Mi(x[6].mapUrl)),U?fe||(fe=bf(),fe.c(),fe.m(e,F)):fe&&(fe.d(1),fe=null)},d(x){x&&v(e),lt(ee,x),fe&&fe.d(),N=!1,tt(S)}}}function yf(n){let e,t=n[71].time+"",i,r;return{c(){e=y("strong"),i=B(t),r=B(" ·")},m(s,o){T(s,e,o),m(e,i),T(s,r,o)},p(s,o){o[0]&260&&t!==(t=s[71].time+"")&&Y(i,t)},d(s){s&&(v(e),v(r))}}}function vf(n){let e,t,i=n[71].memo+"",r;return{c(){e=y("br"),t=y("small"),r=B(i)},m(s,o){T(s,e,o),T(s,t,o),m(t,r)},p(s,o){o[0]&260&&i!==(i=s[71].memo+"")&&Y(r,i)},d(s){s&&(v(e),v(t))}}}function Tf(n){let e,t=n[68]+"",i;return{c(){e=y("option"),i=B(t),e.__value=n[68],J(e,e.__value)},m(r,s){T(r,e,s),m(e,i)},p:Oe,d(r){r&&v(e)}}}function bf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ie(t,"color","#c00")},m(i,r){T(i,e,r),T(i,t,r)},d(i){i&&(v(e),v(t))}}}function wf(n){let e;function t(s,o){return s[6]&&!s[6].isNew&&s[6].id===s[71].id?aI:oI}let i=t(n),r=i(n);return{c(){r.c(),e=qe()},m(s,o){r.m(s,o),T(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&v(e),r.d(s)}}}function Ef(n){let e;return{c(){e=y("p"),e.textContent="아직 일정 없음",ie(e,"margin-left","0.5rem"),ie(e,"color","#666")},m(t,i){T(t,e,i)},d(t){t&&v(e)}}}function If(n){let e,t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기",i,r,s,o,l,u,c,h=n[7].has(n[61]),d,p,g;function b(){return n[44](n[61])}let w=n[65]>0&&Af(n),I=h&&Rf(n);return{c(){e=y("button"),i=B(t),r=O(),s=y("a"),o=B("↗ Google Maps에서 열기"),u=O(),w&&w.c(),c=O(),I&&I.c(),d=qe(),q(s,"href",l=n[64]),q(s,"target","_blank"),q(s,"rel","noopener noreferrer")},m(V,L){T(V,e,L),m(e,i),T(V,r,L),T(V,s,L),m(s,o),T(V,u,L),w&&w.m(V,L),T(V,c,L),I&&I.m(V,L),T(V,d,L),p||(g=Q(e,"click",b),p=!0)},p(V,L){n=V,L[0]&132&&t!==(t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기")&&Y(i,t),L[0]&260&&l!==(l=n[64])&&q(s,"href",l),n[65]>0?w?w.p(n,L):(w=Af(n),w.c(),w.m(c.parentNode,c)):w&&(w.d(1),w=null),L[0]&132&&(h=n[7].has(n[61])),h?I?I.p(n,L):(I=Rf(n),I.c(),I.m(d.parentNode,d)):I&&(I.d(1),I=null)},d(V){V&&(v(e),v(r),v(s),v(u),v(c),v(d)),w&&w.d(V),I&&I.d(V),p=!1,g()}}}function Af(n){let e,t,i=n[65]+"",r,s;return{c(){e=y("small"),t=B("(지도 링크 없는 항목 "),r=B(i),s=B("개 경로 제외)")},m(o,l){T(o,e,l),m(e,t),m(e,r),m(e,s)},p(o,l){l[0]&260&&i!==(i=o[65]+"")&&Y(r,i)},d(o){o&&v(e)}}}function Rf(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Ct(e.src,t=n[63])||q(e,"src",t),q(e,"title",i=n[61]+" 경로"),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){T(r,e,s)},p(r,s){s[0]&260&&!Ct(e.src,t=r[63])&&q(e,"src",t),s[0]&4&&i!==(i=r[61]+" 경로")&&q(e,"title",i)},d(r){r&&v(e)}}}function lI(n){let e,t,i;function r(){return n[51](n[61])}return{c(){e=y("button"),e.textContent="+ 항목 추가"},m(s,o){T(s,e,o),t||(i=Q(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function uI(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b,w,I,V,L,D,M,U=Mi(n[6].mapUrl),F,R,A,E,k,P,N,S,ne=Pe(n[12]),ee=[];for(let x=0;x<ne.length;x+=1)ee[x]=kf(uf(n,ne,x));let fe=U&&Cf();return{c(){e=y("div"),t=y("input"),i=B(`
         
        `),r=y("select");for(let x=0;x<ee.length;x+=1)ee[x].c();s=O(),o=y("br"),l=y("br"),u=O(),c=y("input"),h=O(),d=y("br"),p=y("br"),g=O(),b=y("textarea"),w=O(),I=y("br"),V=y("br"),L=O(),D=y("input"),M=O(),fe&&fe.c(),F=O(),R=y("br"),A=O(),E=y("button"),E.textContent="저장",k=O(),P=y("button"),P.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Yt(()=>n[46].call(r)),q(c,"placeholder","장소명 *"),ie(c,"width","100%"),q(b,"placeholder","메모"),q(b,"rows","2"),ie(b,"width","100%"),q(D,"placeholder","Google Maps URL (선택)"),ie(D,"width","100%"),q(e,"class","card")},m(x,me){T(x,e,me),m(e,t),J(t,n[6].time),m(e,i),m(e,r);for(let ce=0;ce<ee.length;ce+=1)ee[ce]&&ee[ce].m(r,null);Pt(r,n[6].category,!0),m(e,s),m(e,o),m(e,l),m(e,u),m(e,c),J(c,n[6].placeName),m(e,h),m(e,d),m(e,p),m(e,g),m(e,b),J(b,n[6].memo),m(e,w),m(e,I),m(e,V),m(e,L),m(e,D),J(D,n[6].mapUrl),m(e,M),fe&&fe.m(e,null),m(e,F),m(e,R),m(e,A),m(e,E),m(e,k),m(e,P),N||(S=[Q(t,"input",n[45]),Q(r,"change",n[46]),Q(c,"input",n[47]),Q(b,"input",n[48]),Q(D,"input",n[49]),Q(E,"click",n[18]),Q(P,"click",n[50])],N=!0)},p(x,me){if(me[0]&4160&&J(t,x[6].time),me[0]&4096){ne=Pe(x[12]);let ce;for(ce=0;ce<ne.length;ce+=1){const Te=uf(x,ne,ce);ee[ce]?ee[ce].p(Te,me):(ee[ce]=kf(Te),ee[ce].c(),ee[ce].m(r,null))}for(;ce<ee.length;ce+=1)ee[ce].d(1);ee.length=ne.length}me[0]&4160&&Pt(r,x[6].category),me[0]&4160&&c.value!==x[6].placeName&&J(c,x[6].placeName),me[0]&4160&&J(b,x[6].memo),me[0]&4160&&D.value!==x[6].mapUrl&&J(D,x[6].mapUrl),me[0]&64&&(U=Mi(x[6].mapUrl)),U?fe||(fe=Cf(),fe.c(),fe.m(e,F)):fe&&(fe.d(1),fe=null)},d(x){x&&v(e),lt(ee,x),fe&&fe.d(),N=!1,tt(S)}}}function kf(n){let e,t=n[68]+"",i;return{c(){e=y("option"),i=B(t),e.__value=n[68],J(e,e.__value)},m(r,s){T(r,e,s),m(e,i)},p:Oe,d(r){r&&v(e)}}}function Cf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",ie(t,"color","#c00")},m(i,r){T(i,e,r),T(i,t,r)},d(i){i&&(v(e),v(t))}}}function Pf(n){var V,L;let e,t=Lf(n[61],n[67])+"",i,r,s,o,l,u,c,h=Pe(n[8][n[61]]??[]),d=[];for(let D=0;D<h.length;D+=1)d[D]=wf(cf(n,h,D));let p=(n[8][n[61]]??[]).length===0&&!((V=n[6])!=null&&V.isNew&&((L=n[6])==null?void 0:L.date)===n[61])&&Ef(),g=n[63]&&If(n);function b(D,M){var U,F;return(U=D[6])!=null&&U.isNew&&((F=D[6])==null?void 0:F.date)===D[61]?uI:lI}let w=b(n),I=w(n);return{c(){e=y("h3"),i=B(t),r=O();for(let D=0;D<d.length;D+=1)d[D].c();s=O(),p&&p.c(),o=O(),g&&g.c(),l=O(),I.c(),u=O(),c=y("hr")},m(D,M){T(D,e,M),m(e,i),T(D,r,M);for(let U=0;U<d.length;U+=1)d[U]&&d[U].m(D,M);T(D,s,M),p&&p.m(D,M),T(D,o,M),g&&g.m(D,M),T(D,l,M),I.m(D,M),T(D,u,M),T(D,c,M)},p(D,M){var U,F;if(M[0]&4&&t!==(t=Lf(D[61],D[67])+"")&&Y(i,t),M[0]&1446212){h=Pe(D[8][D[61]]??[]);let R;for(R=0;R<h.length;R+=1){const A=cf(D,h,R);d[R]?d[R].p(A,M):(d[R]=wf(A),d[R].c(),d[R].m(s.parentNode,s))}for(;R<d.length;R+=1)d[R].d(1);d.length=h.length}(D[8][D[61]]??[]).length===0&&!((U=D[6])!=null&&U.isNew&&((F=D[6])==null?void 0:F.date)===D[61])?p||(p=Ef(),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),D[63]?g?g.p(D,M):(g=If(D),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),w===(w=b(D))&&I?I.p(D,M):(I.d(1),I=w(D),I&&(I.c(),I.m(u.parentNode,u)))},d(D){D&&(v(e),v(r),v(s),v(o),v(l),v(u),v(c)),lt(d,D),p&&p.d(D),g&&g.d(D),I.d(D)}}}function cI(n){let e,t,i;return{c(){e=y("input"),q(e,"placeholder","예: 제주도")},m(r,s){T(r,e,s),J(e,n[5].destination),t||(i=Q(e,"input",n[32]),t=!0)},p(r,s){s[0]&1056&&e.value!==r[5].destination&&J(e,r[5].destination)},d(r){r&&v(e),t=!1,i()}}}function hI(n){let e,t,i,r,s,o,l=Pe(n[10]),u=[];for(let h=0;h<l.length;h+=1)u[h]=Sf(df(n,l,h));let c=!n[5].destination&&Nf(n);return{c(){e=y("select"),t=y("option"),t.textContent="직접 입력";for(let h=0;h<u.length;h+=1)u[h].c();i=O(),c&&c.c(),r=qe(),t.__value="",J(t,t.__value),n[5].destination===void 0&&Yt(()=>n[30].call(e))},m(h,d){T(h,e,d),m(e,t);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(e,null);Pt(e,n[5].destination,!0),T(h,i,d),c&&c.m(h,d),T(h,r,d),s||(o=Q(e,"change",n[30]),s=!0)},p(h,d){if(d[0]&1024){l=Pe(h[10]);let p;for(p=0;p<l.length;p+=1){const g=df(h,l,p);u[p]?u[p].p(g,d):(u[p]=Sf(g),u[p].c(),u[p].m(e,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=l.length}d[0]&1056&&Pt(e,h[5].destination),h[5].destination?c&&(c.d(1),c=null):c?c.p(h,d):(c=Nf(h),c.c(),c.m(r.parentNode,r))},d(h){h&&(v(e),v(i),v(r)),lt(u,h),c&&c.d(h),s=!1,o()}}}function Sf(n){let e,t=n[58]+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[58],J(e,e.__value)},m(s,o){T(s,e,o),m(e,i)},p(s,o){o[0]&1024&&t!==(t=s[58]+"")&&Y(i,t),o[0]&1024&&r!==(r=s[58])&&(e.__value=r,J(e,e.__value))},d(s){s&&v(e)}}}function Nf(n){let e,t,i;return{c(){e=y("input"),q(e,"placeholder","여행지 직접 입력"),ie(e,"margin-top","0.3rem")},m(r,s){T(r,e,s),J(e,n[5].destination),t||(i=Q(e,"input",n[31]),t=!0)},p(r,s){s[0]&1056&&e.value!==r[5].destination&&J(e,r[5].destination)},d(r){r&&v(e),t=!1,i()}}}function fI(n){let e,t=Pe(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Of(pf(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);T(r,e,s)},p(r,s){if(s[0]&542721){t=Pe(r[0]);let o;for(o=0;o<t.length;o+=1){const l=pf(r,t,o);i[o]?i[o].p(l,s):(i[o]=Of(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function dI(n){let e;return{c(){e=y("p"),e.textContent="생성된 일정이 없습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Df(n){let e,t,i=n[55].destination+"",r;return{c(){e=y("span"),t=B("· "),r=B(i)},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&1&&i!==(i=s[55].destination+"")&&Y(r,i)},d(s){s&&v(e)}}}function Vf(n){let e,t,i,r;function s(...o){return n[27](n[55],...o)}return{c(){e=y("span"),t=y("button"),t.textContent="삭제",ie(e,"float","right")},m(o,l){T(o,e,l),m(e,t),i||(r=Q(t,"click",s),i=!0)},p(o,l){n=o},d(o){o&&v(e),i=!1,r()}}}function Of(n){let e,t,i=n[55].title+"",r,s,o,l,u,c,h,d=n[55].startDate+"",p,g,b=n[55].endDate+"",w,I,V,L,D=n[55].destination&&Df(n),M=n[55].createdBy===n[11].uid&&Vf(n);function U(){return n[28](n[55])}return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),D&&D.c(),o=O(),M&&M.c(),l=O(),u=y("br"),c=O(),h=y("small"),p=B(d),g=B(" ~ "),w=B(b),I=O(),q(e,"class","card"),ie(e,"cursor","pointer")},m(F,R){T(F,e,R),m(e,t),m(t,r),m(e,s),D&&D.m(e,null),m(e,o),M&&M.m(e,null),m(e,l),m(e,u),m(e,c),m(e,h),m(h,p),m(h,g),m(h,w),m(e,I),V||(L=Q(e,"click",U),V=!0)},p(F,R){n=F,R[0]&1&&i!==(i=n[55].title+"")&&Y(r,i),n[55].destination?D?D.p(n,R):(D=Df(n),D.c(),D.m(e,o)):D&&(D.d(1),D=null),n[55].createdBy===n[11].uid?M?M.p(n,R):(M=Vf(n),M.c(),M.m(e,l)):M&&(M.d(1),M=null),R[0]&1&&d!==(d=n[55].startDate+"")&&Y(p,d),R[0]&1&&b!==(b=n[55].endDate+"")&&Y(w,b)},d(F){F&&v(e),D&&D.d(),M&&M.d(),V=!1,L()}}}function pI(n){let e;function t(s,o){if(!s[3])return sI;if(s[4]==="list")return rI;if(s[4]==="create")return iI;if(s[4]==="detail"&&s[1])return nI}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),T(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function mI(n,e){const t=[],[i,r,s]=n.split("-").map(Number),[o,l,u]=e.split("-").map(Number),c=new Date(i,r-1,s),h=new Date(o,l-1,u);for(let d=new Date(c);d<=h;d.setDate(d.getDate()+1)){const p=d.getFullYear(),g=String(d.getMonth()+1).padStart(2,"0"),b=String(d.getDate()).padStart(2,"0");t.push(`${p}-${g}-${b}`)}return t}function Lf(n,e){const[t,i,r]=n.split("-").map(Number),o=new Date(t,i-1,r).toLocaleDateString("ko-KR",{weekday:"short"});return`Day ${e+1} — ${t}.${String(i).padStart(2,"0")}.${String(r).padStart(2,"0")} (${o})`}function _I(n,e,t){let i,r,s,o,l;an(n,zn,ae=>t(3,o=ae)),an(n,Hi,ae=>t(11,l=ae));const u=["이동","식사","관광","숙박","기타"];let c="list",h=[],d=null,p=[],g=[],b,w,I,V={title:"",destination:"",startDate:"",endDate:""},L=null,D=new Set;function M(ae){D.has(ae)?D.delete(ae):D.add(ae),t(7,D)}let U=[];function F(){b==null||b(),t(23,b=Xt(Bt(Je(ke,"groups",o.id,"trips"),Tn("createdAt","desc")),ae=>{t(0,h=ae.docs.map(X=>({id:X.id,...X.data()})))}))}function R(){I==null||I(),t(24,I=Xt(Bt(Je(ke,"groups",o.id,"votes"),ya("status","==","closed")),ae=>{t(25,U=ae.docs.map(X=>({id:X.id,...X.data()})))}))}function A(ae){t(1,d=ae),t(4,c="detail"),t(22,p=[]),t(6,L=null),w==null||w(),t(2,g=mI(ae.startDate,ae.endDate)),w=Xt(Bt(Je(ke,"groups",o.id,"trips",ae.id,"items"),Tn("createdAt","asc")),X=>{t(22,p=X.docs.map(ve=>({id:ve.id,...ve.data()})))})}async function E(){!V.title.trim()||!V.startDate||!V.endDate||V.startDate>V.endDate||(await Zn(Je(ke,"groups",o.id,"trips"),{title:V.title.trim(),destination:V.destination.trim()||null,startDate:V.startDate,endDate:V.endDate,createdBy:l.uid,createdAt:qt()}),t(5,V={title:"",destination:"",startDate:"",endDate:""}),t(4,c="list"))}function k(ae){t(6,L={isNew:!0,date:ae,id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""})}function P(ae){t(6,L={isNew:!1,...ae})}async function N(){var G;if(!L.placeName.trim())return;const ae=((G=L.mapUrl)==null?void 0:G.trim())||null,{lat:X,lng:ve}=Qm(ae),Ge={date:L.date,time:L.time||null,placeName:L.placeName.trim(),category:L.category,memo:L.memo.trim(),mapUrl:ae,lat:X,lng:ve,updatedAt:qt()};L.isNew?await Zn(Je(ke,"groups",o.id,"trips",d.id,"items"),{...Ge,createdBy:l.uid,createdByName:l.displayName,createdAt:qt()}):await $n(st(ke,"groups",o.id,"trips",d.id,"items",L.id),Ge),t(6,L=null)}async function S(ae,X){X==null||X.stopPropagation(),confirm(`"${ae.title}" 일정을 삭제하시겠습니까?`)&&(await Lt(st(ke,"groups",o.id,"trips",ae.id)),(d==null?void 0:d.id)===ae.id&&ee())}async function ne(ae){t(22,p=p.filter(X=>X.id!==ae.id)),await Lt(st(ke,"groups",o.id,"trips",d.id,"items",ae.id))}function ee(){t(4,c="list"),t(1,d=null),t(22,p=[]),t(2,g=[]),t(6,L=null),w==null||w()}Us(()=>{b==null||b(),w==null||w(),I==null||I()});const fe=()=>t(4,c="create"),x=(ae,X)=>S(ae,X),me=ae=>A(ae);function ce(){V.title=this.value,t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}function Te(){V.destination=Hn(this),t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}function ze(){V.destination=this.value,t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}function Se(){V.destination=this.value,t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}function Ce(){V.startDate=this.value,t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}function Ee(){V.endDate=this.value,t(5,V),t(10,i),t(25,U),t(3,o),t(23,b),t(24,I)}const Le=ae=>{const X=r.find(ve=>ve.placeName===ae.target.value);X&&(L||t(6,L={isNew:!0,date:g[0]??"",id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""}),t(6,L={...L,placeName:X.placeName,memo:X.description||"",mapUrl:X.mapUrl||""}),ae.target.value="")};function He(){L.time=this.value,t(6,L),t(12,u)}function je(){L.category=Hn(this),t(6,L),t(12,u)}function pe(){L.placeName=this.value,t(6,L),t(12,u)}function se(){L.memo=this.value,t(6,L),t(12,u)}function _e(){L.mapUrl=this.value,t(6,L),t(12,u)}const $=()=>t(6,L=null),re=ae=>P(ae),Me=ae=>ne(ae),le=ae=>M(ae);function W(){L.time=this.value,t(6,L),t(12,u)}function he(){L.category=Hn(this),t(6,L),t(12,u)}function oe(){L.placeName=this.value,t(6,L),t(12,u)}function ye(){L.memo=this.value,t(6,L),t(12,u)}function it(){L.mapUrl=this.value,t(6,L),t(12,u)}const Ot=()=>t(6,L=null),fn=ae=>k(ae);return n.$$.update=()=>{if(n.$$.dirty[0]&25165832&&(o?(F(),R()):(t(0,h=[]),t(25,U=[]),b==null||b(),I==null||I())),n.$$.dirty[0]&33554432&&t(10,i=[...new Set(U.filter(ae=>{var X;return ae.voteType==="destination"&&((X=ae.winners)==null?void 0:X.length)}).flatMap(ae=>ae.winners.map(X=>X.placeName??X)))]),n.$$.dirty[0]&3&&d&&h.length>0){const ae=h.find(X=>X.id===d.id);ae&&t(1,d=ae)}n.$$.dirty[0]&33554434&&t(9,r=d?U.filter(ae=>{var X;return ae.voteType==="attraction"&&ae.linkedDestination===d.destination&&((X=ae.winners)==null?void 0:X.length)}).flatMap(ae=>ae.winners):[]),n.$$.dirty[0]&4194308&&t(8,s=Object.fromEntries(g.map(ae=>{const X=p.filter(ve=>ve.date===ae);return[ae,[...X.filter(ve=>ve.time).sort((ve,Ge)=>ve.time.localeCompare(Ge.time)),...X.filter(ve=>!ve.time)]]})))},[h,d,g,o,c,V,L,D,s,r,i,l,u,M,A,E,k,P,N,S,ne,ee,p,b,I,U,fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je,pe,se,_e,$,re,Me,le,W,he,oe,ye,it,Ot,fn]}class gI extends Cr{constructor(e){super(),kr(this,e,_I,pI,Ui,{},null,[-1,-1,-1])}}async function yI(n){if(!n.type.match(/^image\/(jpeg|png)$/))return n;const e=await createImageBitmap(n),t=document.createElement("canvas");let{width:i,height:r}=e;const s=1920;if(i>s||r>s){const o=Math.min(s/i,s/r);i=Math.round(i*o),r=Math.round(r*o)}return t.width=i,t.height=r,t.getContext("2d").drawImage(e,0,0,i,r),new Promise(o=>{t.toBlob(l=>o(l??n),"image/jpeg",.8)})}function Mf(n,e,t){const i=n.slice();return i[73]=e[t],i}function Uf(n,e,t){const i=n.slice();return i[65]=e[t],i}function Ff(n,e,t){const i=n.slice();return i[62]=e[t],i}function Bf(n,e,t){const i=n.slice();return i[65]=e[t],i}function jf(n,e,t){const i=n.slice();return i[70]=e[t],i}function qf(n,e,t){const i=n.slice();return i[56]=e[t],i}function zf(n,e,t){const i=n.slice();return i[59]=e[t],i}function vI(n){let e,t,i,r=n[0].title+"",s,o,l,u,c,h,d,p,g,b,w,I,V=n[5].uploadedByName+"",L,D,M,U,F,R,A,E,k=n[31](n[5]),P,N,S,ne,ee,fe=n[6].length+"",x,me,ce,Te,ze,Se,Ce,Ee,Le,He,je,pe,se=n[5].placeName&&Hf(n),_e=n[5].comment&&Wf(n),$=k&&Gf(n),re=Pe(n[6]),Me=[];for(let le=0;le<re.length;le+=1)Me[le]=Qf(Mf(n,re,le));return{c(){e=y("h2"),t=y("button"),t.textContent="← 앨범",i=O(),s=B(r),o=O(),l=y("img"),h=O(),d=y("table"),se&&se.c(),p=O(),_e&&_e.c(),g=O(),b=y("tr"),w=y("th"),w.textContent="업로더",I=y("td"),L=B(V),D=O(),M=y("div"),U=y("a"),F=y("button"),F.textContent="다운로드",E=O(),$&&$.c(),P=O(),N=y("hr"),S=O(),ne=y("h3"),ee=B("코멘트 ("),x=B(fe),me=B(")"),ce=O();for(let le=0;le<Me.length;le+=1)Me[le].c();Te=O(),ze=y("div"),Se=y("textarea"),Ce=O(),Ee=y("button"),Le=B("작성"),Ct(l.src,u=n[5].downloadURL)||q(l,"src",u),q(l,"alt",c=n[5].originalFilename),q(l,"class","full-photo svelte-1ro9az4"),ie(d,"margin-top","0.8rem"),q(U,"href",R=n[5].downloadURL),q(U,"download",A=n[5].originalFilename),q(U,"target","_blank"),q(U,"rel","noreferrer"),ie(M,"margin-top","0.8rem"),q(Se,"placeholder","코멘트 입력"),q(Se,"rows","2"),q(Se,"class","svelte-1ro9az4"),Ee.disabled=He=n[19]||!n[18].trim(),q(ze,"class","comment-form svelte-1ro9az4")},m(le,W){T(le,e,W),m(e,t),m(e,i),m(e,s),T(le,o,W),T(le,l,W),T(le,h,W),T(le,d,W),se&&se.m(d,null),m(d,p),_e&&_e.m(d,null),m(d,g),m(d,b),m(b,w),m(b,I),m(I,L),T(le,D,W),T(le,M,W),m(M,U),m(U,F),m(M,E),$&&$.m(M,null),T(le,P,W),T(le,N,W),T(le,S,W),T(le,ne,W),m(ne,ee),m(ne,x),m(ne,me),T(le,ce,W);for(let he=0;he<Me.length;he+=1)Me[he]&&Me[he].m(le,W);T(le,Te,W),T(le,ze,W),m(ze,Se),J(Se,n[18]),m(ze,Ce),m(ze,Ee),m(Ee,Le),je||(pe=[Q(t,"click",n[24]),Q(Se,"input",n[49]),Q(Ee,"click",n[29])],je=!0)},p(le,W){if(W[0]&1&&r!==(r=le[0].title+"")&&Y(s,r),W[0]&32&&!Ct(l.src,u=le[5].downloadURL)&&q(l,"src",u),W[0]&32&&c!==(c=le[5].originalFilename)&&q(l,"alt",c),le[5].placeName?se?se.p(le,W):(se=Hf(le),se.c(),se.m(d,p)):se&&(se.d(1),se=null),le[5].comment?_e?_e.p(le,W):(_e=Wf(le),_e.c(),_e.m(d,g)):_e&&(_e.d(1),_e=null),W[0]&32&&V!==(V=le[5].uploadedByName+"")&&Y(L,V),W[0]&32&&R!==(R=le[5].downloadURL)&&q(U,"href",R),W[0]&32&&A!==(A=le[5].originalFilename)&&q(U,"download",A),W[0]&32&&(k=le[31](le[5])),k?$?$.p(le,W):($=Gf(le),$.c(),$.m(M,null)):$&&($.d(1),$=null),W[0]&64&&fe!==(fe=le[6].length+"")&&Y(x,fe),W[0]&1075839040){re=Pe(le[6]);let he;for(he=0;he<re.length;he+=1){const oe=Mf(le,re,he);Me[he]?Me[he].p(oe,W):(Me[he]=Qf(oe),Me[he].c(),Me[he].m(Te.parentNode,Te))}for(;he<Me.length;he+=1)Me[he].d(1);Me.length=re.length}W[0]&262144&&J(Se,le[18]),W[0]&786432&&He!==(He=le[19]||!le[18].trim())&&(Ee.disabled=He)},d(le){le&&(v(e),v(o),v(l),v(h),v(d),v(D),v(M),v(P),v(N),v(S),v(ne),v(ce),v(Te),v(ze)),se&&se.d(),_e&&_e.d(),$&&$.d(),lt(Me,le),je=!1,tt(pe)}}}function TI(n){let e,t,i,r=n[0].title+"",s,o,l,u,c,h,d,p,g,b,w=n[12]&&Xf(n);function I(D,M){return D[1].length===0?AI:D[20]?II:EI}let V=I(n),L=V(n);return{c(){e=y("h2"),t=y("button"),t.textContent="← 목록",i=O(),s=B(r),o=O(),l=y("button"),l.textContent="+ 사진 추가",u=O(),w&&w.c(),c=O(),h=y("hr"),d=O(),L.c(),p=qe()},m(D,M){T(D,e,M),m(e,t),m(e,i),m(e,s),T(D,o,M),T(D,l,M),T(D,u,M),w&&w.m(D,M),T(D,c,M),T(D,h,M),T(D,d,M),L.m(D,M),T(D,p,M),g||(b=[Q(t,"click",n[24]),Q(l,"click",n[40])],g=!0)},p(D,M){M[0]&1&&r!==(r=D[0].title+"")&&Y(s,r),D[12]?w?w.p(D,M):(w=Xf(D),w.c(),w.m(c.parentNode,c)):w&&(w.d(1),w=null),V===(V=I(D))&&L?L.p(D,M):(L.d(1),L=V(D),L&&(L.c(),L.m(p.parentNode,p)))},d(D){D&&(v(e),v(o),v(l),v(u),v(c),v(h),v(d),v(p)),w&&w.d(D),L.d(D),g=!1,tt(b)}}}function bI(n){let e,t,i,r,s,o,l,u,c,h,d=n[9]&&nd(n);function p(w,I){return w[4].length===0?kI:RI}let g=p(n),b=g(n);return{c(){e=y("h2"),e.textContent="여행 추억",t=O(),i=y("button"),i.textContent="+ 새 추억 앨범 만들기",r=O(),d&&d.c(),s=O(),o=y("hr"),l=O(),b.c(),u=qe()},m(w,I){T(w,e,I),T(w,t,I),T(w,i,I),T(w,r,I),d&&d.m(w,I),T(w,s,I),T(w,o,I),T(w,l,I),b.m(w,I),T(w,u,I),c||(h=Q(i,"click",n[34]),c=!0)},p(w,I){w[9]?d?d.p(w,I):(d=nd(w),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null),g===(g=p(w))&&b?b.p(w,I):(b.d(1),b=g(w),b&&(b.c(),b.m(u.parentNode,u)))},d(w){w&&(v(e),v(t),v(i),v(r),v(s),v(o),v(l),v(u)),d&&d.d(w),b.d(w),c=!1,h()}}}function wI(n){let e;return{c(){e=y("p"),e.textContent="그룹을 먼저 선택해주세요."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Hf(n){let e,t,i,r=n[5].placeName+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="장소",i=y("td"),s=B(r)},m(o,l){T(o,e,l),m(e,t),m(e,i),m(i,s)},p(o,l){l[0]&32&&r!==(r=o[5].placeName+"")&&Y(s,r)},d(o){o&&v(e)}}}function Wf(n){let e,t,i,r=n[5].comment+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="코멘트",i=y("td"),s=B(r)},m(o,l){T(o,e,l),m(e,t),m(e,i),m(i,s)},p(o,l){l[0]&32&&r!==(r=o[5].comment+"")&&Y(s,r)},d(o){o&&v(e)}}}function Gf(n){let e,t,i;return{c(){e=y("button"),e.textContent="삭제",ie(e,"margin-left","0.5rem")},m(r,s){T(r,e,s),t||(i=Q(e,"click",n[47]),t=!0)},p:Oe,d(r){r&&v(e),t=!1,i()}}}function Kf(n){let e,t,i;function r(){return n[48](n[73])}return{c(){e=y("button"),e.textContent="삭제",q(e,"class","btn-small svelte-1ro9az4")},m(s,o){T(s,e,o),t||(i=Q(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function Qf(n){var I;let e,t,i,r=n[73].displayName+"",s,o,l,u=Ms(n[73].createdAt)+"",c,h,d,p,g=n[73].content+"",b,w=n[73].userId===((I=n[21])==null?void 0:I.uid)&&Kf(n);return{c(){e=y("div"),t=y("div"),i=y("strong"),s=B(r),o=O(),l=y("span"),c=B(u),h=O(),w&&w.c(),d=O(),p=y("p"),b=B(g),q(l,"class","meta svelte-1ro9az4"),q(t,"class","comment-header svelte-1ro9az4"),ie(p,"margin","0.3rem 0 0"),q(e,"class","card")},m(V,L){T(V,e,L),m(e,t),m(t,i),m(i,s),m(t,o),m(t,l),m(l,c),m(t,h),w&&w.m(t,null),m(e,d),m(e,p),m(p,b)},p(V,L){var D;L[0]&64&&r!==(r=V[73].displayName+"")&&Y(s,r),L[0]&64&&u!==(u=Ms(V[73].createdAt)+"")&&Y(c,u),V[73].userId===((D=V[21])==null?void 0:D.uid)?w?w.p(V,L):(w=Kf(V),w.c(),w.m(t,null)):w&&(w.d(1),w=null),L[0]&64&&g!==(g=V[73].content+"")&&Y(b,g)},d(V){V&&v(e),w&&w.d()}}}function Xf(n){let e,t,i,r,s,o,l,u,c,h,d,p=n[16]?"업로드 중...":"업로드",g,b,w,I,V,L,D=n[0].tripId&&n[8].length&&Yf(n),M=n[17]&&xf(n);return{c(){e=y("div"),t=y("div"),i=y("input"),r=O(),D&&D.c(),s=O(),o=y("div"),l=y("input"),u=O(),M&&M.c(),c=O(),h=y("div"),d=y("button"),g=B(p),w=O(),I=y("button"),I.textContent="취소",q(i,"type","file"),q(i,"accept","image/jpeg,image/png,image/gif,image/webp"),q(l,"placeholder","한 줄 코멘트 (선택)"),ie(l,"width","100%"),ie(o,"margin-top","0.4rem"),d.disabled=b=n[16]||!n[13],ie(I,"margin-left","0.4rem"),ie(h,"margin-top","0.6rem"),q(e,"class","card"),ie(e,"margin-top","0.8rem")},m(U,F){T(U,e,F),m(e,t),m(t,i),m(e,r),D&&D.m(e,null),m(e,s),m(e,o),m(o,l),J(l,n[15]),m(e,u),M&&M.m(e,null),m(e,c),m(e,h),m(h,d),m(d,g),m(h,w),m(h,I),V||(L=[Q(i,"change",n[41]),Q(l,"input",n[43]),Q(d,"click",n[26]),Q(I,"click",n[44])],V=!0)},p(U,F){U[0].tripId&&U[8].length?D?D.p(U,F):(D=Yf(U),D.c(),D.m(e,s)):D&&(D.d(1),D=null),F[0]&32768&&l.value!==U[15]&&J(l,U[15]),U[17]?M?M.p(U,F):(M=xf(U),M.c(),M.m(e,c)):M&&(M.d(1),M=null),F[0]&65536&&p!==(p=U[16]?"업로드 중...":"업로드")&&Y(g,p),F[0]&73728&&b!==(b=U[16]||!U[13])&&(d.disabled=b)},d(U){U&&v(e),D&&D.d(),M&&M.d(),V=!1,tt(L)}}}function Yf(n){let e,t,i,r,s,o=Pe(n[8]),l=[];for(let u=0;u<o.length;u+=1)l[u]=Jf(jf(n,o,u));return{c(){e=y("div"),t=y("select"),i=y("option"),i.textContent="일정 항목 연결 안 함";for(let u=0;u<l.length;u+=1)l[u].c();i.__value="",J(i,i.__value),ie(t,"width","100%"),n[14]===void 0&&Yt(()=>n[42].call(t)),ie(e,"margin-top","0.4rem")},m(u,c){T(u,e,c),m(e,t),m(t,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);Pt(t,n[14],!0),r||(s=Q(t,"change",n[42]),r=!0)},p(u,c){if(c[0]&256|c[1]&2){o=Pe(u[8]);let h;for(h=0;h<o.length;h+=1){const d=jf(u,o,h);l[h]?l[h].p(d,c):(l[h]=Jf(d),l[h].c(),l[h].m(t,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=o.length}c[0]&16640&&Pt(t,u[14])},d(u){u&&v(e),lt(l,u),r=!1,s()}}}function Jf(n){let e,t=n[32](n[70])+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[70].id,J(e,e.__value)},m(s,o){T(s,e,o),m(e,i)},p(s,o){o[0]&256&&t!==(t=s[32](s[70])+"")&&Y(i,t),o[0]&256&&r!==(r=s[70].id)&&(e.__value=r,J(e,e.__value))},d(s){s&&v(e)}}}function xf(n){let e,t;return{c(){e=y("p"),t=B(n[17]),q(e,"class","error svelte-1ro9az4")},m(i,r){T(i,e,r),m(e,t)},p(i,r){r[0]&131072&&Y(t,i[17])},d(i){i&&v(e)}}}function EI(n){let e,t=Pe(n[1]),i=[];for(let r=0;r<t.length;r+=1)i[r]=$f(Uf(n,t,r));return{c(){e=y("div");for(let r=0;r<i.length;r+=1)i[r].c();q(e,"class","photo-grid svelte-1ro9az4")},m(r,s){T(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,s){if(s[0]&8388610){t=Pe(r[1]);let o;for(o=0;o<t.length;o+=1){const l=Uf(r,t,o);i[o]?i[o].p(l,s):(i[o]=$f(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function II(n){let e,t=Pe(n[20]),i=[];for(let r=0;r<t.length;r+=1)i[r]=td(Ff(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);T(r,e,s)},p(r,s){if(s[0]&9437184){t=Pe(r[20]);let o;for(o=0;o<t.length;o+=1){const l=Ff(r,t,o);i[o]?i[o].p(l,s):(i[o]=td(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function AI(n){let e;return{c(){e=y("p"),e.textContent="아직 추가된 사진이 없습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function $f(n){let e,t,i,r,s,o,l=(n[65].comment||n[65].uploadedByName)+"",u,c,h,d;function p(){return n[46](n[65])}return{c(){e=y("div"),t=y("img"),s=O(),o=y("div"),u=B(l),c=O(),Ct(t.src,i=n[65].downloadURL)||q(t,"src",i),q(t,"alt",r=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,b){T(g,e,b),m(e,t),m(e,s),m(e,o),m(o,u),m(e,c),h||(d=Q(e,"click",p),h=!0)},p(g,b){n=g,b[0]&2&&!Ct(t.src,i=n[65].downloadURL)&&q(t,"src",i),b[0]&2&&r!==(r=n[65].originalFilename)&&q(t,"alt",r),b[0]&2&&l!==(l=(n[65].comment||n[65].uploadedByName)+"")&&Y(u,l)},d(g){g&&v(e),h=!1,d()}}}function Zf(n){let e,t,i=n[62].date+"",r;return{c(){e=y("span"),t=B("· "),r=B(i),q(e,"class","meta svelte-1ro9az4"),ie(e,"font-weight","normal")},m(s,o){T(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&1048576&&i!==(i=s[62].date+"")&&Y(r,i)},d(s){s&&v(e)}}}function ed(n){let e,t,i,r,s,o,l=(n[65].comment||"")+"",u,c,h,d;function p(){return n[45](n[65])}return{c(){e=y("div"),t=y("img"),s=O(),o=y("div"),u=B(l),c=O(),Ct(t.src,i=n[65].downloadURL)||q(t,"src",i),q(t,"alt",r=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,b){T(g,e,b),m(e,t),m(e,s),m(e,o),m(o,u),m(e,c),h||(d=Q(e,"click",p),h=!0)},p(g,b){n=g,b[0]&1048576&&!Ct(t.src,i=n[65].downloadURL)&&q(t,"src",i),b[0]&1048576&&r!==(r=n[65].originalFilename)&&q(t,"alt",r),b[0]&1048576&&l!==(l=(n[65].comment||"")+"")&&Y(u,l)},d(g){g&&v(e),h=!1,d()}}}function td(n){let e,t,i=n[62].label+"",r,s,o,l,u,c=n[62].date&&Zf(n),h=Pe(n[62].photos),d=[];for(let p=0;p<h.length;p+=1)d[p]=ed(Bf(n,h,p));return{c(){e=y("div"),t=y("h3"),r=B(i),s=O(),c&&c.c(),o=O(),l=y("div");for(let p=0;p<d.length;p+=1)d[p].c();u=O(),q(t,"class","place-label svelte-1ro9az4"),q(l,"class","photo-grid svelte-1ro9az4"),q(e,"class","place-section svelte-1ro9az4")},m(p,g){T(p,e,g),m(e,t),m(t,r),m(t,s),c&&c.m(t,null),m(e,o),m(e,l);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(l,null);m(e,u)},p(p,g){if(g[0]&1048576&&i!==(i=p[62].label+"")&&Y(r,i),p[62].date?c?c.p(p,g):(c=Zf(p),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g[0]&9437184){h=Pe(p[62].photos);let b;for(b=0;b<h.length;b+=1){const w=Bf(p,h,b);d[b]?d[b].p(w,g):(d[b]=ed(w),d[b].c(),d[b].m(l,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=h.length}},d(p){p&&v(e),c&&c.d(),lt(d,p)}}}function nd(n){let e,t,i,r,s,o,l,u,c,h,d,p=n[7].length&&id(n);return{c(){e=y("div"),t=y("div"),i=y("input"),r=O(),p&&p.c(),s=O(),o=y("div"),l=y("button"),l.textContent="만들기",u=O(),c=y("button"),c.textContent="취소",q(i,"placeholder","앨범 제목"),ie(i,"width","100%"),ie(c,"margin-left","0.4rem"),ie(o,"margin-top","0.6rem"),q(e,"class","card"),ie(e,"margin-top","0.8rem")},m(g,b){T(g,e,b),m(e,t),m(t,i),J(i,n[10]),m(e,r),p&&p.m(e,null),m(e,s),m(e,o),m(o,l),m(o,u),m(o,c),h||(d=[Q(i,"input",n[35]),Q(l,"click",n[25]),Q(c,"click",n[37])],h=!0)},p(g,b){b[0]&1024&&i.value!==g[10]&&J(i,g[10]),g[7].length?p?p.p(g,b):(p=id(g),p.c(),p.m(e,s)):p&&(p.d(1),p=null)},d(g){g&&v(e),p&&p.d(),h=!1,tt(d)}}}function id(n){let e,t,i,r,s,o=Pe(n[7]),l=[];for(let u=0;u<o.length;u+=1)l[u]=rd(zf(n,o,u));return{c(){e=y("div"),t=y("select"),i=y("option"),i.textContent="연결된 일정 없음";for(let u=0;u<l.length;u+=1)l[u].c();i.__value="",J(i,i.__value),ie(t,"width","100%"),n[11]===void 0&&Yt(()=>n[36].call(t)),ie(e,"margin-top","0.4rem")},m(u,c){T(u,e,c),m(e,t),m(t,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);Pt(t,n[11],!0),r||(s=Q(t,"change",n[36]),r=!0)},p(u,c){if(c[0]&128){o=Pe(u[7]);let h;for(h=0;h<o.length;h+=1){const d=zf(u,o,h);l[h]?l[h].p(d,c):(l[h]=rd(d),l[h].c(),l[h].m(t,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=o.length}c[0]&2176&&Pt(t,u[11])},d(u){u&&v(e),lt(l,u),r=!1,s()}}}function rd(n){let e,t=n[59].title+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[59].id,J(e,e.__value)},m(s,o){T(s,e,o),m(e,i)},p(s,o){o[0]&128&&t!==(t=s[59].title+"")&&Y(i,t),o[0]&128&&r!==(r=s[59].id)&&(e.__value=r,J(e,e.__value))},d(s){s&&v(e)}}}function RI(n){let e,t=Pe(n[4]),i=[];for(let r=0;r<t.length;r+=1)i[r]=od(qf(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);T(r,e,s)},p(r,s){if(s[0]&140509204){t=Pe(r[4]);let o;for(o=0;o<t.length;o+=1){const l=qf(r,t,o);i[o]?i[o].p(l,s):(i[o]=od(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function kI(n){let e;return{c(){e=y("p"),e.textContent="아직 추억 앨범이 없습니다."},m(t,i){T(t,e,i)},p:Oe,d(t){t&&v(e)}}}function sd(n){let e,t,i;function r(...s){return n[38](n[56],...s)}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){T(s,e,o),t||(i=Q(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function od(n){var E,k,P;let e,t,i,r,s=n[56].title+"",o,l,u,c=(n[56].photoCount??0)+"",h,d,p,g,b=Ms(n[56].createdAt)+"",w,I,V=n[56].createdByName+"",L,D,M,U,F,R=(n[56].createdBy===((E=n[21])==null?void 0:E.uid)||((k=n[2])==null?void 0:k.createdBy)===((P=n[21])==null?void 0:P.uid))&&sd(n);function A(){return n[39](n[56])}return{c(){e=y("div"),t=y("div"),i=y("div"),r=y("strong"),o=B(s),l=O(),u=y("span"),h=B(c),d=B("장"),p=O(),g=y("div"),w=B(b),I=B(" · "),L=B(V),D=O(),R&&R.c(),M=O(),q(u,"class","count svelte-1ro9az4"),q(g,"class","meta svelte-1ro9az4"),ie(t,"display","flex"),ie(t,"justify-content","space-between"),ie(t,"align-items","flex-start"),q(e,"class","card album-card svelte-1ro9az4")},m(N,S){T(N,e,S),m(e,t),m(t,i),m(i,r),m(r,o),m(i,l),m(i,u),m(u,h),m(u,d),m(i,p),m(i,g),m(g,w),m(g,I),m(g,L),m(t,D),R&&R.m(t,null),m(e,M),U||(F=Q(e,"click",A),U=!0)},p(N,S){var ne,ee,fe;n=N,S[0]&16&&s!==(s=n[56].title+"")&&Y(o,s),S[0]&16&&c!==(c=(n[56].photoCount??0)+"")&&Y(h,c),S[0]&16&&b!==(b=Ms(n[56].createdAt)+"")&&Y(w,b),S[0]&16&&V!==(V=n[56].createdByName+"")&&Y(L,V),n[56].createdBy===((ne=n[21])==null?void 0:ne.uid)||((ee=n[2])==null?void 0:ee.createdBy)===((fe=n[21])==null?void 0:fe.uid)?R?R.p(n,S):(R=sd(n),R.c(),R.m(t,null)):R&&(R.d(1),R=null)},d(N){N&&v(e),R&&R.d(),U=!1,F()}}}function CI(n){let e;function t(s,o){if(!s[2])return wI;if(s[3]==="albums")return bI;if(s[3]==="album")return TI;if(s[3]==="photo")return vI}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),T(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function PI(n){const e={};for(const t of n){const i=t.scheduleItemId||"__other__";e[i]||(e[i]={label:t.placeName||"기타",date:t.date||null,photos:[]}),e[i].photos.push(t)}return Object.values(e).sort((t,i)=>t.date?i.date?t.date.localeCompare(i.date):-1:1)}function Ms(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"-"}function SI(n,e,t){let i,r,s,o;an(n,Hi,X=>t(21,s=X)),an(n,zn,X=>t(2,o=X));let l="albums",u=[],c=null,h=[],d=null,p=[],g=[],b=[],w=!1,I="",V="",L=!1,D=null,M="",U="",F=!1,R="",A="",E=!1,k=null,P=null,N=null;function S(){P&&(P(),P=null),N&&(N(),N=null),t(3,l="albums"),t(0,c=null),t(5,d=null),t(1,h=[]),t(6,p=[]),t(8,b=[]),t(9,w=!1),t(12,L=!1),ne(),ee()}function ne(){k&&k(),k=Xt(Bt(Je(ke,"groups",i,"albums"),Tn("createdAt","desc")),X=>{t(4,u=X.docs.map(ve=>({id:ve.id,...ve.data()})))})}async function ee(){try{const X=await _i(Bt(Je(ke,"groups",i,"trips"),Tn("startDate")));t(7,g=X.docs.map(ve=>({id:ve.id,...ve.data()})))}catch{t(7,g=[])}}async function fe(X){if(t(0,c=X),t(8,b=[]),t(14,M=""),t(12,L=!1),t(17,R=""),X.tripId)try{const Ge=(await _i(Bt(Je(ke,"groups",i,"trips",X.tripId,"items"),Tn("date")))).docs.map(G=>({id:G.id,...G.data()}));Ge.sort((G,te)=>G.date!==te.date?G.date.localeCompare(te.date):!G.time&&!te.time?0:G.time?te.time?G.time.localeCompare(te.time):-1:1),t(8,b=Ge)}catch(ve){console.error("일정 항목 로드 실패:",ve),t(8,b=[])}P&&P(),P=Xt(Bt(Je(ke,"groups",i,"albums",X.id,"photos"),Tn("uploadedAt","desc")),ve=>{t(1,h=ve.docs.map(Ge=>({id:Ge.id,...Ge.data()})))}),t(3,l="album")}function x(X){t(5,d=X),t(18,A=""),N&&N(),N=Xt(Bt(Je(ke,"groups",i,"albums",c.id,"photos",X.id,"comments"),Tn("createdAt","asc")),ve=>{t(6,p=ve.docs.map(Ge=>({id:Ge.id,...Ge.data()})))}),t(3,l="photo")}function me(){l==="photo"?(N&&(N(),N=null),t(5,d=null),t(6,p=[]),t(3,l="album")):l==="album"&&(P&&(P(),P=null),t(0,c=null),t(1,h=[]),t(8,b=[]),t(12,L=!1),t(3,l="albums"))}async function ce(){I.trim()&&(await Zn(Je(ke,"groups",i,"albums"),{title:I.trim(),tripId:V||null,createdBy:s.uid,createdByName:s.displayName,createdAt:qt(),photoCount:0}),t(10,I=""),t(11,V=""),t(9,w=!1))}async function Te(){if(!D)return;if(!["image/jpeg","image/png","image/gif","image/webp"].includes(D.type)){t(17,R="jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.");return}if(D.size>10*1024*1024){t(17,R="파일 크기는 10MB 이하여야 합니다.");return}t(17,R=""),t(16,F=!0);try{const ve=await yI(D),Ge=st(Je(ke,"groups",i,"albums",c.id,"photos")),G=`groups/${i}/albums/${c.id}/${Ge.id}_${D.name}`,te=zo(Ho,G);await yE(te,ve);const Ue=await vE(te),Ie=b.find(Ke=>Ke.id===M);await Vs(Ge,{storagePath:G,downloadURL:Ue,originalFilename:D.name,uploadedBy:s.uid,uploadedByName:s.displayName,uploadedAt:qt(),comment:U.trim()||null,scheduleItemId:(Ie==null?void 0:Ie.id)||null,placeName:(Ie==null?void 0:Ie.placeName)||null,date:(Ie==null?void 0:Ie.date)||null}),await $n(st(ke,"groups",i,"albums",c.id),{photoCount:Fc(1)}),t(13,D=null),t(14,M=""),t(15,U=""),t(12,L=!1)}catch(ve){t(17,R="업로드 실패: "+ve.message)}finally{t(16,F=!1)}}async function ze(X,ve){if(ve.stopPropagation(),!confirm(`"${X.title}" 앨범을 삭제하시겠습니까? 사진과 코멘트가 모두 삭제됩니다.`))return;const Ge=await _i(Je(ke,"groups",i,"albums",X.id,"photos"));for(const G of Ge.docs){const te=G.data();try{await Wc(zo(Ho,te.storagePath))}catch{}const Ue=await _i(Je(ke,"groups",i,"albums",X.id,"photos",G.id,"comments"));for(const Ie of Ue.docs)await Lt(Ie.ref);await Lt(G.ref)}await Lt(st(ke,"groups",i,"albums",X.id))}async function Se(X){if(!confirm("사진을 삭제하시겠습니까? 코멘트도 함께 삭제됩니다."))return;try{await Wc(zo(Ho,X.storagePath))}catch{}const ve=await _i(Je(ke,"groups",i,"albums",c.id,"photos",X.id,"comments"));for(const Ge of ve.docs)await Lt(Ge.ref);await Lt(st(ke,"groups",i,"albums",c.id,"photos",X.id)),await $n(st(ke,"groups",i,"albums",c.id),{photoCount:Fc(-1)}),l==="photo"&&me()}async function Ce(){if(!(!A.trim()||E)){t(19,E=!0);try{await Zn(Je(ke,"groups",i,"albums",c.id,"photos",d.id,"comments"),{userId:s.uid,displayName:s.displayName,content:A.trim(),createdAt:qt()}),t(18,A="")}finally{t(19,E=!1)}}}async function Ee(X){confirm("코멘트를 삭제하시겠습니까?")&&await Lt(st(ke,"groups",i,"albums",c.id,"photos",d.id,"comments",X.id))}function Le(X){return X.uploadedBy===(s==null?void 0:s.uid)||(o==null?void 0:o.createdBy)===(s==null?void 0:s.uid)}function He(X){const ve=g.find(Et=>Et.id===(c==null?void 0:c.tripId));if(!(ve!=null&&ve.startDate))return`${X.date} ${X.time??""} ${X.placeName}`.trim();const[Ge,G,te]=ve.startDate.split("-").map(Number),[Ue,Ie,Ke]=X.date.split("-").map(Number),St=Math.round((new Date(Ue,Ie-1,Ke)-new Date(Ge,G-1,te))/864e5),_t=X.time?` ${X.time}`:"";return`Day ${St+1}${_t} — ${X.placeName}`}Us(()=>{k&&k(),P&&P(),N&&N()});const je=()=>{t(9,w=!w)};function pe(){I=this.value,t(10,I)}function se(){V=Hn(this),t(11,V),t(7,g)}const _e=()=>t(9,w=!1),$=(X,ve)=>ze(X,ve),re=X=>fe(X),Me=()=>{t(12,L=!L),t(17,R="")},le=X=>{t(13,D=X.target.files[0]),t(17,R="")};function W(){M=Hn(this),t(14,M),t(8,b)}function he(){U=this.value,t(15,U)}const oe=()=>{t(12,L=!1),t(17,R="")},ye=X=>x(X),it=X=>x(X),Ot=()=>Se(d),fn=X=>Ee(X);function ae(){A=this.value,t(18,A)}return n.$$.update=()=>{n.$$.dirty[0]&4&&t(33,i=o==null?void 0:o.id),n.$$.dirty[1]&4&&i&&S(),n.$$.dirty[0]&3&&t(20,r=c!=null&&c.tripId&&h.length?PI(h):null)},[c,h,o,l,u,d,p,g,b,w,I,V,L,D,M,U,F,R,A,E,r,s,fe,x,me,ce,Te,ze,Se,Ce,Ee,Le,He,i,je,pe,se,_e,$,re,Me,le,W,he,oe,ye,it,Ot,fn,ae]}class NI extends Cr{constructor(e){super(),kr(this,e,SI,CI,Ui,{},null,[-1,-1,-1])}}function DI(n){let e,t,i,r,s;return{c(){e=y("p"),e.textContent="로그인이 필요합니다.",t=O(),i=y("button"),i.textContent="Google 로그인"},m(o,l){T(o,e,l),T(o,t,l),T(o,i,l),r||(s=Q(i,"click",n[2]),r=!0)},p:Oe,i:Oe,o:Oe,d(o){o&&(v(e),v(t),v(i)),r=!1,s()}}}function VI(n){let e,t,i,r,s,o,l,u,c,h,d,p,g,b=n[1].displayName+"",w,I,V,L,D,M,U,F,R,A,E;var k=n[0];function P(N,S){return{}}return k&&(F=Tu(k,P())),{c(){e=y("header"),t=y("h1"),t.textContent="그룹 여행",i=O(),r=y("nav"),s=y("a"),s.textContent="그룹",o=B(` |
      `),l=y("a"),l.textContent="투표",u=B(` |
      `),c=y("a"),c.textContent="일정",h=B(` |
      `),d=y("a"),d.textContent="추억",p=B(` |
      `),g=y("span"),w=B(b),I=O(),V=y("button"),V.textContent="로그아웃",L=O(),D=y("hr"),M=O(),U=y("main"),F&&Eu(F.$$.fragment),q(s,"href","#groups"),q(l,"href","#vote"),q(c,"href","#schedule"),q(d,"href","#memory")},m(N,S){T(N,e,S),m(e,t),m(e,i),m(e,r),m(r,s),m(r,o),m(r,l),m(r,u),m(r,c),m(r,h),m(r,d),m(r,p),m(r,g),m(g,w),m(r,I),m(r,V),m(e,L),m(e,D),T(N,M,S),T(N,U,S),F&&Go(F,U,null),R=!0,A||(E=Q(V,"click",n[4]),A=!0)},p(N,S){if((!R||S&2)&&b!==(b=N[1].displayName+"")&&Y(w,b),S&1&&k!==(k=N[0])){if(F){hd();const ne=F;vs(ne.$$.fragment,1,0,()=>{Ko(ne,1)}),fd()}k?(F=Tu(k,P()),Eu(F.$$.fragment),_r(F.$$.fragment,1),Go(F,U,null)):F=null}},i(N){R||(F&&_r(F.$$.fragment,N),R=!0)},o(N){F&&vs(F.$$.fragment,N),R=!1},d(N){N&&(v(e),v(M),v(U)),F&&Ko(F),A=!1,E()}}}function OI(n){let e,t,i,r;const s=[VI,DI],o=[];function l(u,c){return u[1]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=qe()},m(u,c){o[e].m(u,c),T(u,i,c),r=!0},p(u,[c]){let h=e;e=l(u),e===h?o[e].p(u,c):(hd(),vs(o[h],1,1,()=>{o[h]=null}),fd(),t=o[e],t?t.p(u,c):(t=o[e]=s[e](u),t.c()),_r(t,1),t.m(i.parentNode,i))},i(u){r||(_r(t),r=!0)},o(u){vs(t),r=!1},d(u){u&&v(i),o[e].d(u)}}}function LI(n,e,t){let i,r;an(n,Hi,c=>t(1,r=c));let s=location.hash||"#groups";window.addEventListener("hashchange",()=>t(3,s=location.hash));const o={"#groups":$c,"#vote":tI,"#schedule":gI,"#memory":NI};async function l(){await Tv(Ta,new tn)}const u=()=>ev(Ta);return n.$$.update=()=>{n.$$.dirty&8&&t(0,i=o[s]??$c)},[i,r,l,s,u]}class MI extends Cr{constructor(e){super(),kr(this,e,LI,OI,Ui,{})}}new MI({target:document.getElementById("app")});
