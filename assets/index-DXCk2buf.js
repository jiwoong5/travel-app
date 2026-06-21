var D_=Object.defineProperty;var V_=(n,e,t)=>e in n?D_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Bo=(n,e,t)=>V_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oe(){}function kd(n){return n()}function Ru(){return Object.create(null)}function Xe(n){n.forEach(kd)}function Rd(n){return typeof n=="function"}function Ki(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let _s;function Dt(n,e){return n===e?!0:(_s||(_s=document.createElement("a")),_s.href=e,n===_s.href)}function O_(n){return Object.keys(n).length===0}function L_(n,...e){if(n==null){for(const i of e)i(void 0);return Oe}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function mn(n,e,t){n.$$.on_destroy.push(L_(e,t))}function m(n,e){n.appendChild(e)}function b(n,e,t){n.insertBefore(e,t||null)}function v(n){n.parentNode&&n.parentNode.removeChild(n)}function lt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function y(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function O(){return B(" ")}function qe(){return B("")}function W(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function q(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function jo(n,e,t){const i=new Set;for(let r=0;r<n.length;r+=1)n[r].checked&&i.add(n[r].__value);return t||i.delete(e),Array.from(i)}function M_(n){let e;return{p(...t){e=t,e.forEach(i=>n.push(i))},r(){e.forEach(t=>n.splice(n.indexOf(t),1))}}}function Xt(n){return n===""?null:+n}function U_(n){return Array.from(n.childNodes)}function Z(n,e){e=""+e,n.data!==e&&(n.data=e)}function G(n,e){n.value=e??""}function $(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function kt(n,e,t){for(let i=0;i<n.options.length;i+=1){const r=n.options[i];if(r.__value===e){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Vn(n){const e=n.querySelector(":checked");return e&&e.__value}function Cu(n,e){return new n(e)}let Ar;function yr(n){Ar=n}function Cd(){if(!Ar)throw new Error("Function called outside component initialization");return Ar}function F_(n){Cd().$$.on_mount.push(n)}function xs(n){Cd().$$.on_destroy.push(n)}const Ii=[],Pu=[];let Pi=[];const Su=[],B_=Promise.resolve();let ia=!1;function j_(){ia||(ia=!0,B_.then(Pd))}function Kt(n){Pi.push(n)}const qo=new Set;let wi=0;function Pd(){if(wi!==0)return;const n=Ar;do{try{for(;wi<Ii.length;){const e=Ii[wi];wi++,yr(e),q_(e.$$)}}catch(e){throw Ii.length=0,wi=0,e}for(yr(null),Ii.length=0,wi=0;Pu.length;)Pu.pop()();for(let e=0;e<Pi.length;e+=1){const t=Pi[e];qo.has(t)||(qo.add(t),t())}Pi.length=0}while(Ii.length);for(;Su.length;)Su.pop()();ia=!1,qo.clear(),yr(n)}function q_(n){if(n.fragment!==null){n.update(),Xe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Kt)}}function z_(n){const e=[],t=[];Pi.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Pi=e}const Is=new Set;let xn;function Sd(){xn={r:0,c:[],p:xn}}function Nd(){xn.r||Xe(xn.c),xn=xn.p}function kr(n,e){n&&n.i&&(Is.delete(n),n.i(e))}function Os(n,e,t,i){if(n&&n.o){if(Is.has(n))return;Is.add(n),xn.c.push(()=>{Is.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Nu(n){n&&n.c()}function ra(n,e,t){const{fragment:i,after_update:r}=n.$$;i&&i.m(e,t),Kt(()=>{const s=n.$$.on_mount.map(kd).filter(Rd);n.$$.on_destroy?n.$$.on_destroy.push(...s):Xe(s),n.$$.on_mount=[]}),r.forEach(Kt)}function sa(n,e){const t=n.$$;t.fragment!==null&&(z_(t.after_update),Xe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function H_(n,e){n.$$.dirty[0]===-1&&(Ii.push(n),j_(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ur(n,e,t,i,r,s,o=null,a=[-1]){const u=Ar;yr(n);const c=n.$$={fragment:null,ctx:[],props:s,update:Oe,not_equal:r,bound:Ru(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ru(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(p,d,...g)=>{const E=g.length?g[0]:d;return c.ctx&&r(c.ctx[p],c.ctx[p]=E)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](E),h&&H_(n,p)),d}):[],c.update(),h=!0,Xe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const p=U_(e.target);c.fragment&&c.fragment.l(p),p.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&kr(n.$$.fragment),ra(n,e.target,e.anchor),Pd()}yr(u)}class Fr{constructor(){Bo(this,"$$");Bo(this,"$$set")}$destroy(){sa(this,1),this.$destroy=Oe}$on(e,t){if(!Rd(t))return Oe;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!O_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W_="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W_);const Ei=[];function Dd(n,e=Oe){let t;const i=new Set;function r(a){if(Ki(n,a)&&(n=a,t)){const u=!Ei.length;for(const c of i)c[1](),Ei.push(c,n);if(u){for(let c=0;c<Ei.length;c+=2)Ei[c][0](Ei[c+1]);Ei.length=0}}}function s(a){r(a(n))}function o(a,u=Oe){const c=[a,u];return i.add(c),i.size===1&&(t=e(r,s)||Oe),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}var Du={};/**
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
 */const Vd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},G_=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],u=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,u=r+2<n.length,c=u?n[r+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(d=64)),i.push(t[h],t[p],t[d],t[g])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):G_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||p==null)throw new K_;const d=s<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),p!==64){const E=c<<6&192|p;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class K_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q_=function(n){const e=Vd(n);return Od.encodeByteArray(e,!0)},Ls=function(n){return Q_(n).replace(/\./g,"")},Ld=function(n){try{return Od.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Y_=()=>X_().__FIREBASE_DEFAULTS__,J_=()=>{if(typeof process>"u"||typeof Du>"u")return;const n=Du.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Z_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ld(n[1]);return e&&JSON.parse(e)},$s=()=>{try{return Y_()||J_()||Z_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Md=n=>{var e,t;return(t=(e=$s())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ud=n=>{const e=Md(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Fd=()=>{var n;return(n=$s())===null||n===void 0?void 0:n.config},Bd=n=>{var e;return(e=$s())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class x_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ls(JSON.stringify(t)),Ls(JSON.stringify(o)),""].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function eg(){var n;const e=(n=$s())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ng(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rg(){const n=Rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sg(){return!eg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function og(){try{return typeof indexedDB=="object"}catch{return!1}}function ag(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const lg="FirebaseError";class rn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lg,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ug(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,i)}}function ug(n,e){return n.replace(cg,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const cg=/\{\$([^}]+)}/g;function hg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Vu(s)&&Vu(o)){if(!Oi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}/**
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
 */function jr(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fg(n,e){const t=new dg(n,e);return t.subscribe.bind(t)}class dg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");pg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=zo),r.error===void 0&&(r.error=zo),r.complete===void 0&&(r.complete=zo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zo(){}/**
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
 */function tt(n){return n&&n._delegate?n._delegate:n}class Fn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class mg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new x_;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gg(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(n){return n===Zn?void 0:n}function gg(n){return n.instantiationMode==="EAGER"}/**
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
 */class yg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const vg={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},bg=Ve.INFO,Tg={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},wg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Tg[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=bg,this._logHandler=wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const Eg=(n,e)=>e.some(t=>n instanceof t);let Ou,Lu;function Ig(){return Ou||(Ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ag(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qd=new WeakMap,oa=new WeakMap,zd=new WeakMap,Ho=new WeakMap,Ua=new WeakMap;function kg(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(On(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qd.set(t,n)}).catch(()=>{}),Ua.set(e,n),e}function Rg(n){if(oa.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});oa.set(n,e)}let aa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cg(n){aa=n(aa)}function Pg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wo(this),e,...t);return zd.set(i,e.sort?e.sort():[e]),On(i)}:Ag().includes(n)?function(...e){return n.apply(Wo(this),e),On(qd.get(this))}:function(...e){return On(n.apply(Wo(this),e))}}function Sg(n){return typeof n=="function"?Pg(n):(n instanceof IDBTransaction&&Rg(n),Eg(n,Ig())?new Proxy(n,aa):n)}function On(n){if(n instanceof IDBRequest)return kg(n);if(Ho.has(n))return Ho.get(n);const e=Sg(n);return e!==n&&(Ho.set(n,e),Ua.set(e,n)),e}const Wo=n=>Ua.get(n);function Ng(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=On(o);return i&&o.addEventListener("upgradeneeded",u=>{i(On(o.result),u.oldVersion,u.newVersion,On(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dg=["get","getKey","getAll","getAllKeys","count"],Vg=["put","add","delete","clear"],Go=new Map;function Mu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Go.get(e))return Go.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Vg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Dg.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&u.done]))[0]};return Go.set(e,s),s}Cg(n=>({...n,get:(e,t,i)=>Mu(e,t)||n.get(e,t,i),has:(e,t)=>!!Mu(e,t)||n.has(e,t)}));/**
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
 */class Og{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lg(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Lg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const la="@firebase/app",Uu="0.10.13";/**
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
 */const _n=new Ma("@firebase/app"),Mg="@firebase/app-compat",Ug="@firebase/analytics-compat",Fg="@firebase/analytics",Bg="@firebase/app-check-compat",jg="@firebase/app-check",qg="@firebase/auth",zg="@firebase/auth-compat",Hg="@firebase/database",Wg="@firebase/data-connect",Gg="@firebase/database-compat",Kg="@firebase/functions",Qg="@firebase/functions-compat",Xg="@firebase/installations",Yg="@firebase/installations-compat",Jg="@firebase/messaging",Zg="@firebase/messaging-compat",xg="@firebase/performance",$g="@firebase/performance-compat",ey="@firebase/remote-config",ty="@firebase/remote-config-compat",ny="@firebase/storage",iy="@firebase/storage-compat",ry="@firebase/firestore",sy="@firebase/vertexai-preview",oy="@firebase/firestore-compat",ay="firebase",ly="10.14.1";/**
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
 */const ua="[DEFAULT]",uy={[la]:"fire-core",[Mg]:"fire-core-compat",[Fg]:"fire-analytics",[Ug]:"fire-analytics-compat",[jg]:"fire-app-check",[Bg]:"fire-app-check-compat",[qg]:"fire-auth",[zg]:"fire-auth-compat",[Hg]:"fire-rtdb",[Wg]:"fire-data-connect",[Gg]:"fire-rtdb-compat",[Kg]:"fire-fn",[Qg]:"fire-fn-compat",[Xg]:"fire-iid",[Yg]:"fire-iid-compat",[Jg]:"fire-fcm",[Zg]:"fire-fcm-compat",[xg]:"fire-perf",[$g]:"fire-perf-compat",[ey]:"fire-rc",[ty]:"fire-rc-compat",[ny]:"fire-gcs",[iy]:"fire-gcs-compat",[ry]:"fire-fst",[oy]:"fire-fst-compat",[sy]:"fire-vertex","fire-js":"fire-js",[ay]:"fire-js-all"};/**
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
 */const Ms=new Map,cy=new Map,ca=new Map;function Fu(n,e){try{n.container.addComponent(e)}catch(t){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function si(n){const e=n.name;if(ca.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,n);for(const t of Ms.values())Fu(t,n);for(const t of cy.values())Fu(t,n);return!0}function eo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function cn(n){return n.settings!==void 0}/**
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
 */const hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Br("app","Firebase",hy);/**
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
 */class fy{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=ly;function Hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ua,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});if(t||(t=Fd()),!t)throw Ln.create("no-options");const s=Ms.get(r);if(s){if(Oi(t,s.options)&&Oi(i,s.config))return s;throw Ln.create("duplicate-app",{appName:r})}const o=new yg(r);for(const u of ca.values())o.addComponent(u);const a=new fy(t,i,o);return Ms.set(r,a),a}function Fa(n=ua){const e=Ms.get(n);if(!e&&n===ua&&Fd())return Hd();if(!e)throw Ln.create("no-app",{appName:n});return e}function Jt(n,e,t){var i;let r=(i=uy[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}si(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const dy="firebase-heartbeat-database",py=1,Rr="firebase-heartbeat-store";let Ko=null;function Wd(){return Ko||(Ko=Ng(dy,py,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ln.create("idb-open",{originalErrorMessage:n.message})})),Ko}async function my(n){try{const t=(await Wd()).transaction(Rr),i=await t.objectStore(Rr).get(Gd(n));return await t.done,i}catch(e){if(e instanceof rn)_n.warn(e.message);else{const t=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(t.message)}}}async function Bu(n,e){try{const i=(await Wd()).transaction(Rr,"readwrite");await i.objectStore(Rr).put(e,Gd(n)),await i.done}catch(t){if(t instanceof rn)_n.warn(t.message);else{const i=Ln.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_n.warn(i.message)}}}function Gd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _y=1024,gy=30*24*60*60*1e3;class yy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new by(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ju();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gy}),this._storage.overwrite(this._heartbeatsCache))}catch(i){_n.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ju(),{heartbeatsToSend:i,unsentEntries:r}=vy(this._heartbeatsCache.heartbeats),s=Ls(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return _n.warn(t),""}}}function ju(){return new Date().toISOString().substring(0,10)}function vy(n,e=_y){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),qu(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),qu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class by{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return og()?ag().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await my(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qu(n){return Ls(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ty(n){si(new Fn("platform-logger",e=>new Og(e),"PRIVATE")),si(new Fn("heartbeat",e=>new yy(e),"PRIVATE")),Jt(la,Uu,n),Jt(la,Uu,"esm2017"),Jt("fire-js","")}Ty("");var wy="firebase",Ey="10.14.1";/**
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
 */Jt(wy,Ey,"app");function Ba(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Kd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Iy=Kd,Qd=new Br("auth","Firebase",Kd());/**
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
 */const Us=new Ma("@firebase/auth");function Ay(n,...e){Us.logLevel<=Ve.WARN&&Us.warn(`Auth (${fi}): ${n}`,...e)}function As(n,...e){Us.logLevel<=Ve.ERROR&&Us.error(`Auth (${fi}): ${n}`,...e)}/**
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
 */function tn(n,...e){throw qa(n,...e)}function Wt(n,...e){return qa(n,...e)}function ja(n,e,t){const i=Object.assign(Object.assign({},Iy()),{[e]:t});return new Br("auth","Firebase",i).create(e,{appName:n.name})}function ni(n){return ja(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ky(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&tn(n,"argument-error"),ja(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qa(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Qd.create(n,...e)}function we(n,e,...t){if(!n)throw qa(e,...t)}function hn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw As(e),new Error(e)}function gn(n,e){n||hn(e)}/**
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
 */function ha(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ry(){return zu()==="http:"||zu()==="https:"}function zu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Cy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ry()||ng()||"connection"in navigator)?navigator.onLine:!0}function Py(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class qr{constructor(e,t){this.shortDelay=e,this.longDelay=t,gn(t>e,"Short delay should be less than long delay!"),this.isMobile=$_()||ig()}get(){return Cy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function za(n,e){gn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xd{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ny=new qr(3e4,6e4);function Ha(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qi(n,e,t,i,r={}){return Yd(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=jr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return tg()||(c.referrerPolicy="no-referrer"),Xd.fetch()(Jd(n,n.config.apiHost,t,a),c)})}async function Yd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Sy),e);try{const r=new Vy(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gs(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw gs(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw gs(n,"user-disabled",o);const h=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ja(n,h,c);tn(n,h)}}catch(r){if(r instanceof rn)throw r;tn(n,"network-request-failed",{message:String(r)})}}async function Dy(n,e,t,i,r={}){const s=await Qi(n,e,t,i,r);return"mfaPendingCredential"in s&&tn(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Jd(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?za(n.config,r):`${n.config.apiScheme}://${r}`}class Vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wt(this.auth,"network-request-failed")),Ny.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Wt(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Oy(n,e){return Qi(n,"POST","/v1/accounts:delete",e)}async function Zd(n,e){return Qi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ly(n,e=!1){const t=tt(n),i=await t.getIdToken(e),r=Wa(i);we(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:vr(Qo(r.auth_time)),issuedAtTime:vr(Qo(r.iat)),expirationTime:vr(Qo(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qo(n){return Number(n)*1e3}function Wa(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return As("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ld(t);return r?JSON.parse(r):(As("Failed to decode base64 JWT payload"),null)}catch(r){return As("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Hu(n){const e=Wa(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof rn&&My(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function My({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Uy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Cr(n,Zd(t,{idToken:i}));we(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xd(s.providerUserInfo):[],a=By(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Fy(n){const e=tt(n);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function By(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function xd(n){return n.map(e=>{var{providerId:t}=e,i=Ba(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function jy(n,e){const t=await Yd(n,{},async()=>{const i=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Jd(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qy(n,e){return Qi(n,"POST","/v2/accounts:revokeToken",Ha(n,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Hu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await jy(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Si;return i&&(we(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(we(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(we(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function An(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ly(this,e)}reload(){return Fy(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(ni(this.auth));const e=await this.getIdToken();return await Cr(this,Oy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,u,c,h;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(c=t.createdAt)!==null&&c!==void 0?c:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:U,isAnonymous:M,providerData:F,stsTokenManager:R}=t;we(S&&R,e,"internal-error");const A=Si.fromJSON(this.name,R);we(typeof S=="string",e,"internal-error"),An(p,e.name),An(d,e.name),we(typeof U=="boolean",e,"internal-error"),we(typeof M=="boolean",e,"internal-error"),An(g,e.name),An(E,e.name),An(T,e.name),An(w,e.name),An(N,e.name),An(V,e.name);const I=new fn({uid:S,auth:e,email:d,emailVerified:U,displayName:p,isAnonymous:M,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:A,createdAt:N,lastLoginAt:V});return F&&Array.isArray(F)&&(I.providerData=F.map(k=>Object.assign({},k))),w&&(I._redirectEventId=w),I}static async _fromIdTokenResponse(e,t,i=!1){const r=new Si;r.updateFromServerResponse(t);const s=new fn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Fs(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];we(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?xd(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Si;a.updateFromIdToken(i);const u=new fn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new fa(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Wu=new Map;function dn(n){gn(n instanceof Function,"Expected a class definition");let e=Wu.get(n);return e?(gn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wu.set(n,e),e)}/**
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
 */class $d{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$d.type="NONE";const Gu=$d;/**
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
 */function ks(n,e,t){return`firebase:${n}:${e}:${t}`}class Ni{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ks(this.userKey,r.apiKey,s),this.fullPersistenceKey=ks("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ni(dn(Gu),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||dn(Gu);const o=ks(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const p=fn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ni(s,e,i):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ni(s,e,i))}}/**
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
 */function Ku(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ip(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sp(e))return"Blackberry";if(op(e))return"Webos";if(tp(e))return"Safari";if((e.includes("chrome/")||np(e))&&!e.includes("edge/"))return"Chrome";if(rp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ep(n=Rt()){return/firefox\//i.test(n)}function tp(n=Rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function np(n=Rt()){return/crios\//i.test(n)}function ip(n=Rt()){return/iemobile/i.test(n)}function rp(n=Rt()){return/android/i.test(n)}function sp(n=Rt()){return/blackberry/i.test(n)}function op(n=Rt()){return/webos/i.test(n)}function Ga(n=Rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zy(n=Rt()){var e;return Ga(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hy(){return rg()&&document.documentMode===10}function ap(n=Rt()){return Ga(n)||rp(n)||op(n)||sp(n)||/windows phone/i.test(n)||ip(n)}/**
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
 */function lp(n,e=[]){let t;switch(n){case"Browser":t=Ku(Rt());break;case"Worker":t=`${Ku(Rt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fi}/${i}`}/**
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
 */class Wy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Gy(n,e={}){return Qi(n,"GET","/v2/passwordPolicy",Ha(n,e))}/**
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
 */const Ky=6;class Qy{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ky,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Xy{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new Wy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zd(this,{idToken:e}),i=await fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Py()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(ni(this));const t=e?tt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gy(this),t=new Qy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await qy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,r);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ay(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function to(n){return tt(n)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=fg(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yy(n){Ka=n}function Jy(n){return Ka.loadJS(n)}function Zy(){return Ka.gapiScript}function xy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $y(n,e){const t=eo(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Oi(s,e??{}))return r;tn(r,"already-initialized")}return t.initialize({options:e})}function ev(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function tv(n,e,t){const i=to(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=up(e),{host:o,port:a}=nv(e),u=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),iv()}function up(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nv(n){const e=up(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Xu(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Xu(o)}}}function Xu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class cp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,t){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
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
 */async function Di(n,e){return Dy(n,"POST","/v1/accounts:signInWithIdp",Ha(n,e))}/**
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
 */const rv="http://localhost";class oi extends cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Ba(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new oi(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Di(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Di(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Di(e,t)}buildRequest(){const e={requestUri:rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jr(t)}return e}}/**
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
 */class Qa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zr extends Qa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends zr{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class un extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oi._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return un.credential(t,i)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class Rn extends zr{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */class Cn extends zr{constructor(){super("twitter.com")}static credential(e,t){return oi._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Cn.credential(t,i)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */class Li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await fn._fromIdTokenResponse(e,i,r),o=Yu(i);return new Li({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Yu(i);return new Li({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Yu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Bs extends rn{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Bs(e,t,i,r)}}function hp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(n,s,e,i):s})}async function sv(n,e,t=!1){const i=await Cr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Li._forOperation(n,"link",i)}/**
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
 */async function ov(n,e,t=!1){const{auth:i}=n;if(cn(i.app))return Promise.reject(ni(i));const r="reauthenticate";try{const s=await Cr(n,hp(i,r,e,n),t);we(s.idToken,i,"internal-error");const o=Wa(s.idToken);we(o,i,"internal-error");const{sub:a}=o;return we(n.uid===a,i,"user-mismatch"),Li._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(i,"user-mismatch"),s}}/**
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
 */async function av(n,e,t=!1){if(cn(n.app))return Promise.reject(ni(n));const i="signIn",r=await hp(n,i,e),s=await Li._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function lv(n,e,t,i){return tt(n).onIdTokenChanged(e,t,i)}function uv(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function cv(n,e,t,i){return tt(n).onAuthStateChanged(e,t,i)}function hv(n){return tt(n).signOut()}const js="__sak";/**
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
 */class fp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fv=1e3,dv=10;class dp extends fp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ap(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Hy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dv):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dp.type="LOCAL";const pv=dp;/**
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
 */class pp extends fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pp.type="SESSION";const mp=pp;/**
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
 */function mv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new no(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await mv(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
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
 */function Xa(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Xa("",20);r.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const d=p;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zt(){return window}function gv(n){Zt().location.href=n}/**
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
 */function _p(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function yv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bv(){return _p()?self:null}/**
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
 */const gp="firebaseLocalStorageDb",Tv=1,qs="firebaseLocalStorage",yp="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function wv(){const n=indexedDB.deleteDatabase(gp);return new Hr(n).toPromise()}function da(){const n=indexedDB.open(gp,Tv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(qs,{keyPath:yp})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(qs)?e(i):(i.close(),await wv(),e(await da()))})})}async function Ju(n,e,t){const i=io(n,!0).put({[yp]:e,value:t});return new Hr(i).toPromise()}async function Ev(n,e){const t=io(n,!1).get(e),i=await new Hr(t).toPromise();return i===void 0?null:i.value}function Zu(n,e){const t=io(n,!0).delete(e);return new Hr(t).toPromise()}const Iv=800,Av=3;class vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await da(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Av)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(bv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await da();return await Ju(e,js,"1"),await Zu(e,js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ju(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ev(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=io(r,!1).getAll();return new Hr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vp.type="LOCAL";const kv=vp;new qr(3e4,6e4);/**
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
 */function bp(n,e){return e?dn(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ya extends cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rv(n){return av(n.auth,new Ya(n),n.bypassAuthState)}function Cv(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),ov(t,new Ya(n),n.bypassAuthState)}async function Pv(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),sv(t,new Ya(n),n.bypassAuthState)}/**
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
 */class Tp{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rv;case"linkViaPopup":case"linkViaRedirect":return Pv;case"reauthViaPopup":case"reauthViaRedirect":return Cv;default:tn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Sv=new qr(2e3,1e4);async function Nv(n,e,t){if(cn(n.app))return Promise.reject(Wt(n,"operation-not-supported-in-this-environment"));const i=to(n);ky(n,e,Qa);const r=bp(i,t);return new $n(i,"signInViaPopup",e,r).executeNotNull()}class $n extends Tp{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sv.get())};e()}}$n.currentPopupAction=null;/**
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
 */const Dv="pendingRedirect",Rs=new Map;class Vv extends Tp{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const i=await Ov(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ov(n,e){const t=Uv(e),i=Mv(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Lv(n,e){Rs.set(n._key(),e)}function Mv(n){return dn(n._redirectPersistence)}function Uv(n){return ks(Dv,n.config.apiKey,n.name)}async function Fv(n,e,t=!1){if(cn(n.app))return Promise.reject(ni(n));const i=to(n),r=bp(i,e),o=await new Vv(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Bv=10*60*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!wp(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(xu(e))}saveEventToCache(e){this.cachedEventUids.add(xu(e)),this.lastProcessedEventTime=Date.now()}}function xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wp(n);default:return!1}}/**
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
 */async function zv(n,e={}){return Qi(n,"GET","/v1/projects",e)}/**
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
 */const Hv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Gv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zv(n);for(const t of e)try{if(Kv(t))return}catch{}tn(n,"unauthorized-domain")}function Kv(n){const e=ha(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Wv.test(t))return!1;if(Hv.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Qv=new qr(3e4,6e4);function $u(){const n=Zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xv(n){return new Promise((e,t)=>{var i,r,s;function o(){$u(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$u(),t(Wt(n,"network-request-failed"))},timeout:Qv.get()})}if(!((r=(i=Zt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Zt().gapi)===null||s===void 0)&&s.load)o();else{const a=xy("iframefcb");return Zt()[a]=()=>{gapi.load?o():t(Wt(n,"network-request-failed"))},Jy(`${Zy()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function Yv(n){return Cs=Cs||Xv(n),Cs}/**
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
 */const Jv=new qr(5e3,15e3),Zv="__/auth/iframe",xv="emulator/auth/iframe",$v={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t0(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?za(e,xv):`https://${n.config.authDomain}/${Zv}`,i={apiKey:e.apiKey,appName:n.name,v:fi},r=e0.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${jr(i).slice(1)}`}async function n0(n){const e=await Yv(n),t=Zt().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:t0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$v,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Wt(n,"network-request-failed"),a=Zt().setTimeout(()=>{s(o)},Jv.get());function u(){Zt().clearTimeout(a),r(i)}i.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const i0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r0=500,s0=600,o0="_blank",a0="http://localhost";class ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l0(n,e,t,i=r0,r=s0){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const u=Object.assign(Object.assign({},i0),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Rt().toLowerCase();t&&(a=np(c)?o0:t),ep(c)&&(e=e||a0,u.scrollbars="yes");const h=Object.entries(u).reduce((d,[g,E])=>`${d}${g}=${E},`,"");if(zy(c)&&a!=="_self")return u0(e||"",a),new ec(null);const p=window.open(e||"",a,h);we(p,n,"popup-blocked");try{p.focus()}catch{}return new ec(p)}function u0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const c0="__/auth/handler",h0="emulator/auth/handler",f0=encodeURIComponent("fac");async function tc(n,e,t,i,r,s){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:fi,eventId:r};if(e instanceof Qa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",hg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof zr){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),c=u?`#${f0}=${encodeURIComponent(u)}`:"";return`${d0(n)}?${jr(a).slice(1)}${c}`}function d0({config:n}){return n.emulator?za(n,h0):`https://${n.authDomain}/${c0}`}/**
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
 */const Xo="webStorageSupport";class p0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mp,this._completeRedirectFn=Fv,this._overrideRedirectResult=Lv}async _openPopup(e,t,i,r){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tc(e,t,i,ha(),r);return l0(e,o,Xa())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await tc(e,t,i,ha(),r);return gv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(gn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await n0(e),i=new jv(e);return t.register("authEvent",r=>(we(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Xo];o!==void 0&&t(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ap()||tp()||Ga()}}const m0=p0;var nc="@firebase/auth",ic="1.7.9";/**
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
 */class _0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function g0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y0(n){si(new Fn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lp(n)},c=new Xy(i,r,s,u);return ev(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),si(new Fn("auth-internal",e=>{const t=to(e.getProvider("auth").getImmediate());return(i=>new _0(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(nc,ic,g0(n)),Jt(nc,ic,"esm2017")}/**
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
 */const v0=5*60,b0=Bd("authIdTokenMaxAge")||v0;let rc=null;const T0=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>b0)return;const r=t==null?void 0:t.token;rc!==r&&(rc=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function w0(n=Fa()){const e=eo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$y(n,{popupRedirectResolver:m0,persistence:[kv,pv,mp]}),i=Bd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=T0(s.toString());uv(t,o,()=>o(t.currentUser)),lv(t,a=>o(a))}}const r=Md("auth");return r&&tv(t,`http://${r}`),t}function E0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yy({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Wt("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",E0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y0("Browser");var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii,Ep;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function I(){}I.prototype=A.prototype,R.D=A.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(k,C,L){for(var D=Array(arguments.length-2),re=2;re<arguments.length;re++)D[re-2]=arguments[re];return A.prototype[C].apply(k,D)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,A,I){I||(I=0);var k=Array(16);if(typeof A=="string")for(var C=0;16>C;++C)k[C]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(C=0;16>C;++C)k[C]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=R.g[0],I=R.g[1],C=R.g[2];var L=R.g[3],D=A+(L^I&(C^L))+k[0]+3614090360&4294967295;A=I+(D<<7&4294967295|D>>>25),D=L+(C^A&(I^C))+k[1]+3905402710&4294967295,L=A+(D<<12&4294967295|D>>>20),D=C+(I^L&(A^I))+k[2]+606105819&4294967295,C=L+(D<<17&4294967295|D>>>15),D=I+(A^C&(L^A))+k[3]+3250441966&4294967295,I=C+(D<<22&4294967295|D>>>10),D=A+(L^I&(C^L))+k[4]+4118548399&4294967295,A=I+(D<<7&4294967295|D>>>25),D=L+(C^A&(I^C))+k[5]+1200080426&4294967295,L=A+(D<<12&4294967295|D>>>20),D=C+(I^L&(A^I))+k[6]+2821735955&4294967295,C=L+(D<<17&4294967295|D>>>15),D=I+(A^C&(L^A))+k[7]+4249261313&4294967295,I=C+(D<<22&4294967295|D>>>10),D=A+(L^I&(C^L))+k[8]+1770035416&4294967295,A=I+(D<<7&4294967295|D>>>25),D=L+(C^A&(I^C))+k[9]+2336552879&4294967295,L=A+(D<<12&4294967295|D>>>20),D=C+(I^L&(A^I))+k[10]+4294925233&4294967295,C=L+(D<<17&4294967295|D>>>15),D=I+(A^C&(L^A))+k[11]+2304563134&4294967295,I=C+(D<<22&4294967295|D>>>10),D=A+(L^I&(C^L))+k[12]+1804603682&4294967295,A=I+(D<<7&4294967295|D>>>25),D=L+(C^A&(I^C))+k[13]+4254626195&4294967295,L=A+(D<<12&4294967295|D>>>20),D=C+(I^L&(A^I))+k[14]+2792965006&4294967295,C=L+(D<<17&4294967295|D>>>15),D=I+(A^C&(L^A))+k[15]+1236535329&4294967295,I=C+(D<<22&4294967295|D>>>10),D=A+(C^L&(I^C))+k[1]+4129170786&4294967295,A=I+(D<<5&4294967295|D>>>27),D=L+(I^C&(A^I))+k[6]+3225465664&4294967295,L=A+(D<<9&4294967295|D>>>23),D=C+(A^I&(L^A))+k[11]+643717713&4294967295,C=L+(D<<14&4294967295|D>>>18),D=I+(L^A&(C^L))+k[0]+3921069994&4294967295,I=C+(D<<20&4294967295|D>>>12),D=A+(C^L&(I^C))+k[5]+3593408605&4294967295,A=I+(D<<5&4294967295|D>>>27),D=L+(I^C&(A^I))+k[10]+38016083&4294967295,L=A+(D<<9&4294967295|D>>>23),D=C+(A^I&(L^A))+k[15]+3634488961&4294967295,C=L+(D<<14&4294967295|D>>>18),D=I+(L^A&(C^L))+k[4]+3889429448&4294967295,I=C+(D<<20&4294967295|D>>>12),D=A+(C^L&(I^C))+k[9]+568446438&4294967295,A=I+(D<<5&4294967295|D>>>27),D=L+(I^C&(A^I))+k[14]+3275163606&4294967295,L=A+(D<<9&4294967295|D>>>23),D=C+(A^I&(L^A))+k[3]+4107603335&4294967295,C=L+(D<<14&4294967295|D>>>18),D=I+(L^A&(C^L))+k[8]+1163531501&4294967295,I=C+(D<<20&4294967295|D>>>12),D=A+(C^L&(I^C))+k[13]+2850285829&4294967295,A=I+(D<<5&4294967295|D>>>27),D=L+(I^C&(A^I))+k[2]+4243563512&4294967295,L=A+(D<<9&4294967295|D>>>23),D=C+(A^I&(L^A))+k[7]+1735328473&4294967295,C=L+(D<<14&4294967295|D>>>18),D=I+(L^A&(C^L))+k[12]+2368359562&4294967295,I=C+(D<<20&4294967295|D>>>12),D=A+(I^C^L)+k[5]+4294588738&4294967295,A=I+(D<<4&4294967295|D>>>28),D=L+(A^I^C)+k[8]+2272392833&4294967295,L=A+(D<<11&4294967295|D>>>21),D=C+(L^A^I)+k[11]+1839030562&4294967295,C=L+(D<<16&4294967295|D>>>16),D=I+(C^L^A)+k[14]+4259657740&4294967295,I=C+(D<<23&4294967295|D>>>9),D=A+(I^C^L)+k[1]+2763975236&4294967295,A=I+(D<<4&4294967295|D>>>28),D=L+(A^I^C)+k[4]+1272893353&4294967295,L=A+(D<<11&4294967295|D>>>21),D=C+(L^A^I)+k[7]+4139469664&4294967295,C=L+(D<<16&4294967295|D>>>16),D=I+(C^L^A)+k[10]+3200236656&4294967295,I=C+(D<<23&4294967295|D>>>9),D=A+(I^C^L)+k[13]+681279174&4294967295,A=I+(D<<4&4294967295|D>>>28),D=L+(A^I^C)+k[0]+3936430074&4294967295,L=A+(D<<11&4294967295|D>>>21),D=C+(L^A^I)+k[3]+3572445317&4294967295,C=L+(D<<16&4294967295|D>>>16),D=I+(C^L^A)+k[6]+76029189&4294967295,I=C+(D<<23&4294967295|D>>>9),D=A+(I^C^L)+k[9]+3654602809&4294967295,A=I+(D<<4&4294967295|D>>>28),D=L+(A^I^C)+k[12]+3873151461&4294967295,L=A+(D<<11&4294967295|D>>>21),D=C+(L^A^I)+k[15]+530742520&4294967295,C=L+(D<<16&4294967295|D>>>16),D=I+(C^L^A)+k[2]+3299628645&4294967295,I=C+(D<<23&4294967295|D>>>9),D=A+(C^(I|~L))+k[0]+4096336452&4294967295,A=I+(D<<6&4294967295|D>>>26),D=L+(I^(A|~C))+k[7]+1126891415&4294967295,L=A+(D<<10&4294967295|D>>>22),D=C+(A^(L|~I))+k[14]+2878612391&4294967295,C=L+(D<<15&4294967295|D>>>17),D=I+(L^(C|~A))+k[5]+4237533241&4294967295,I=C+(D<<21&4294967295|D>>>11),D=A+(C^(I|~L))+k[12]+1700485571&4294967295,A=I+(D<<6&4294967295|D>>>26),D=L+(I^(A|~C))+k[3]+2399980690&4294967295,L=A+(D<<10&4294967295|D>>>22),D=C+(A^(L|~I))+k[10]+4293915773&4294967295,C=L+(D<<15&4294967295|D>>>17),D=I+(L^(C|~A))+k[1]+2240044497&4294967295,I=C+(D<<21&4294967295|D>>>11),D=A+(C^(I|~L))+k[8]+1873313359&4294967295,A=I+(D<<6&4294967295|D>>>26),D=L+(I^(A|~C))+k[15]+4264355552&4294967295,L=A+(D<<10&4294967295|D>>>22),D=C+(A^(L|~I))+k[6]+2734768916&4294967295,C=L+(D<<15&4294967295|D>>>17),D=I+(L^(C|~A))+k[13]+1309151649&4294967295,I=C+(D<<21&4294967295|D>>>11),D=A+(C^(I|~L))+k[4]+4149444226&4294967295,A=I+(D<<6&4294967295|D>>>26),D=L+(I^(A|~C))+k[11]+3174756917&4294967295,L=A+(D<<10&4294967295|D>>>22),D=C+(A^(L|~I))+k[2]+718787259&4294967295,C=L+(D<<15&4294967295|D>>>17),D=I+(L^(C|~A))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(C+(D<<21&4294967295|D>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+L&4294967295}i.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var I=A-this.blockSize,k=this.B,C=this.h,L=0;L<A;){if(C==0)for(;L<=I;)r(this,R,L),L+=this.blockSize;if(typeof R=="string"){for(;L<A;)if(k[C++]=R.charCodeAt(L++),C==this.blockSize){r(this,k),C=0;break}}else for(;L<A;)if(k[C++]=R[L++],C==this.blockSize){r(this,k),C=0;break}}this.h=C,this.o+=A},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var I=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=I&255,I/=256;for(this.u(R),R=Array(16),A=I=0;4>A;++A)for(var k=0;32>k;k+=8)R[I++]=this.g[A]>>>k&255;return R};function s(R,A){var I=a;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=A(R)}function o(R,A){this.h=A;for(var I=[],k=!0,C=R.length-1;0<=C;C--){var L=R[C]|0;k&&L==A||(I[C]=L,k=!1)}this.g=I}var a={};function u(R){return-128<=R&&128>R?s(R,function(A){return new o([A|0],0>A?-1:0)}):new o([R|0],0>R?-1:0)}function c(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return w(c(-R));for(var A=[],I=1,k=0;R>=I;k++)A[k]=R/I|0,I*=4294967296;return new o(A,0)}function h(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return w(h(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(A,8)),k=p,C=0;C<R.length;C+=8){var L=Math.min(8,R.length-C),D=parseInt(R.substring(C,C+L),A);8>L?(L=c(Math.pow(A,L)),k=k.j(L).add(c(D))):(k=k.j(I),k=k.add(c(D)))}return k}var p=u(0),d=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(T(this))return-w(this).m();for(var R=0,A=1,I=0;I<this.g.length;I++){var k=this.i(I);R+=(0<=k?k:4294967296+k)*A,A*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(E(this))return"0";if(T(this))return"-"+w(this).toString(R);for(var A=c(Math.pow(R,6)),I=this,k="";;){var C=U(I,A).g;I=N(I,C.j(A));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=C,E(I))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function E(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function T(R){return R.h==-1}n.l=function(R){return R=N(this,R),T(R)?-1:E(R)?0:1};function w(R){for(var A=R.g.length,I=[],k=0;k<A;k++)I[k]=~R.g[k];return new o(I,~R.h).add(d)}n.abs=function(){return T(this)?w(this):this},n.add=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],k=0,C=0;C<=A;C++){var L=k+(this.i(C)&65535)+(R.i(C)&65535),D=(L>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);k=D>>>16,L&=65535,D&=65535,I[C]=D<<16|L}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(R,A){return R.add(w(A))}n.j=function(R){if(E(this)||E(R))return p;if(T(this))return T(R)?w(this).j(w(R)):w(w(this).j(R));if(T(R))return w(this.j(w(R)));if(0>this.l(g)&&0>R.l(g))return c(this.m()*R.m());for(var A=this.g.length+R.g.length,I=[],k=0;k<2*A;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(var C=0;C<R.g.length;C++){var L=this.i(k)>>>16,D=this.i(k)&65535,re=R.i(C)>>>16,ne=R.i(C)&65535;I[2*k+2*C]+=D*ne,V(I,2*k+2*C),I[2*k+2*C+1]+=L*ne,V(I,2*k+2*C+1),I[2*k+2*C+1]+=D*re,V(I,2*k+2*C+1),I[2*k+2*C+2]+=L*re,V(I,2*k+2*C+2)}for(k=0;k<A;k++)I[k]=I[2*k+1]<<16|I[2*k];for(k=A;k<2*A;k++)I[k]=0;return new o(I,0)};function V(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function S(R,A){this.g=R,this.h=A}function U(R,A){if(E(A))throw Error("division by zero");if(E(R))return new S(p,p);if(T(R))return A=U(w(R),A),new S(w(A.g),w(A.h));if(T(A))return A=U(R,w(A)),new S(w(A.g),A.h);if(30<R.g.length){if(T(R)||T(A))throw Error("slowDivide_ only works with positive integers.");for(var I=d,k=A;0>=k.l(R);)I=M(I),k=M(k);var C=F(I,1),L=F(k,1);for(k=F(k,2),I=F(I,2);!E(k);){var D=L.add(k);0>=D.l(R)&&(C=C.add(I),L=D),k=F(k,1),I=F(I,1)}return A=N(R,C.j(A)),new S(C,A)}for(C=p;0<=R.l(A);){for(I=Math.max(1,Math.floor(R.m()/A.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=c(I),D=L.j(A);T(D)||0<D.l(R);)I-=k,L=c(I),D=L.j(A);E(L)&&(L=d),C=C.add(L),R=N(R,D)}return new S(C,R)}n.A=function(R){return U(this,R).h},n.and=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],k=0;k<A;k++)I[k]=this.i(k)&R.i(k);return new o(I,this.h&R.h)},n.or=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],k=0;k<A;k++)I[k]=this.i(k)|R.i(k);return new o(I,this.h|R.h)},n.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],k=0;k<A;k++)I[k]=this.i(k)^R.i(k);return new o(I,this.h^R.h)};function M(R){for(var A=R.g.length+1,I=[],k=0;k<A;k++)I[k]=R.i(k)<<1|R.i(k-1)>>>31;return new o(I,R.h)}function F(R,A){var I=A>>5;A%=32;for(var k=R.g.length-I,C=[],L=0;L<k;L++)C[L]=0<A?R.i(L+I)>>>A|R.i(L+I+1)<<32-A:R.i(L+I);return new o(C,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Ep=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ii=o}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ip,pr,Ap,Ps,pa,kp,Rp,Cp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,_){return l==Array.prototype||l==Object.prototype||(l[f]=_.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var f=0;f<l.length;++f){var _=l[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function r(l,f){if(f)e:{var _=i;l=l.split(".");for(var P=0;P<l.length-1;P++){var j=l[P];if(!(j in _))break e;_=_[j]}l=l[l.length-1],P=_[l],f=f(P),f!=P&&f!=null&&e(_,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var _=0,P=!1,j={next:function(){if(!P&&_<l.length){var H=_++;return{value:f(H,l[H]),done:!1}}return P=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}r("Array.prototype.values",function(l){return l||function(){return s(this,function(f,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,_){return l.call.apply(l.bind,arguments)}function p(l,f,_){if(!l)throw Error();if(2<arguments.length){var P=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,P),l.apply(f,j)}}return function(){return l.apply(f,arguments)}}function d(l,f,_){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,d.apply(null,arguments)}function g(l,f){var _=Array.prototype.slice.call(arguments,1);return function(){var P=_.slice();return P.push.apply(P,arguments),l.apply(this,P)}}function E(l,f){function _(){}_.prototype=f.prototype,l.aa=f.prototype,l.prototype=new _,l.prototype.constructor=l,l.Qb=function(P,j,H){for(var te=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)te[Ye-2]=arguments[Ye];return f.prototype[j].apply(P,te)}}function T(l){const f=l.length;if(0<f){const _=Array(f);for(let P=0;P<f;P++)_[P]=l[P];return _}return[]}function w(l,f){for(let _=1;_<arguments.length;_++){const P=arguments[_];if(u(P)){const j=l.length||0,H=P.length||0;l.length=j+H;for(let te=0;te<H;te++)l[j+te]=P[te]}else l.push(P)}}class N{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function U(l){return U[" "](l),l}U[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(l,f,_){for(const P in l)f.call(_,l[P],P,l)}function R(l,f){for(const _ in l)f.call(void 0,l[_],_,l)}function A(l){const f={};for(const _ in l)f[_]=l[_];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let _,P;for(let j=1;j<arguments.length;j++){P=arguments[j];for(_ in P)l[_]=P[_];for(let H=0;H<I.length;H++)_=I[H],Object.prototype.hasOwnProperty.call(P,_)&&(l[_]=P[_])}}function C(l){var f=1;l=l.split(":");const _=[];for(;0<f&&l.length;)_.push(l.shift()),f--;return l.length&&_.push(l.join(":")),_}function L(l){a.setTimeout(()=>{throw l},0)}function D(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class re{constructor(){this.h=this.g=null}add(f,_){const P=ne.get();P.set(f,_),this.h?this.h.next=P:this.g=P,this.h=P}}var ne=new N(()=>new ie,l=>l.reset());class ie{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let z,J=!1,fe=new re,Te=()=>{const l=a.Promise.resolve(void 0);z=()=>{l.then(me)}};var me=()=>{for(var l;l=D();){try{l.h.call(l.g)}catch(_){L(_)}var f=ne;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function Se(){this.s=this.s,this.C=this.C}Se.prototype.s=!1,Se.prototype.ma=function(){this.s||(this.s=!0,this.N())},Se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const _=()=>{};a.addEventListener("test",_,f),a.removeEventListener("test",_,f)}catch{}return l}();function Me(l,f){if(Pe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var _=this.type=l.type,P=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(M){e:{try{U(f.nodeName);var j=!0;break e}catch{}j=!1}j||(f=null)}}else _=="mouseover"?f=l.fromElement:_=="mouseout"&&(f=l.toElement);this.relatedTarget=f,P?(this.clientX=P.clientX!==void 0?P.clientX:P.pageX,this.clientY=P.clientY!==void 0?P.clientY:P.pageY,this.screenX=P.screenX||0,this.screenY=P.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ze[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Me.aa.h.call(this)}}E(Me,Pe);var ze={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),de=0;function se(l,f,_,P,j){this.listener=l,this.proxy=null,this.src=f,this.type=_,this.capture=!!P,this.ha=j,this.key=++de,this.da=this.fa=!1}function ge(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ee(l){this.src=l,this.g={},this.h=0}ee.prototype.add=function(l,f,_,P,j){var H=l.toString();l=this.g[H],l||(l=this.g[H]=[],this.h++);var te=Ue(l,f,P,j);return-1<te?(f=l[te],_||(f.fa=!1)):(f=new se(f,this.src,H,!!P,j),f.fa=_,l.push(f)),f};function oe(l,f){var _=f.type;if(_ in l.g){var P=l.g[_],j=Array.prototype.indexOf.call(P,f,void 0),H;(H=0<=j)&&Array.prototype.splice.call(P,j,1),H&&(ge(f),l.g[_].length==0&&(delete l.g[_],l.h--))}}function Ue(l,f,_,P){for(var j=0;j<l.length;++j){var H=l[j];if(!H.da&&H.listener==f&&H.capture==!!_&&H.ha==P)return j}return-1}var ue="closure_lm_"+(1e6*Math.random()|0),Q={};function he(l,f,_,P,j){if(Array.isArray(f)){for(var H=0;H<f.length;H++)he(l,f[H],_,P,j);return null}return _=Qe(_),l&&l[He]?l.K(f,_,c(P)?!!P.capture:!1,j):ae(l,f,_,!1,P,j)}function ae(l,f,_,P,j,H){if(!f)throw Error("Invalid event type");var te=c(j)?!!j.capture:!!j,Ye=Y(l);if(Ye||(l[ue]=Ye=new ee(l)),_=Ye.add(f,_,P,te,H),_.proxy)return _;if(P=ve(),_.proxy=P,P.src=l,P.listener=_,l.addEventListener)Ie||(j=te),j===void 0&&(j=!1),l.addEventListener(f.toString(),P,j);else if(l.attachEvent)l.attachEvent(bn(f.toString()),P);else if(l.addListener&&l.removeListener)l.addListener(P);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ve(){function l(_){return f.call(l.src,l.listener,_)}const f=le;return l}function ot(l,f,_,P,j){if(Array.isArray(f))for(var H=0;H<f.length;H++)ot(l,f[H],_,P,j);else P=c(P)?!!P.capture:!!P,_=Qe(_),l&&l[He]?(l=l.i,f=String(f).toString(),f in l.g&&(H=l.g[f],_=Ue(H,_,P,j),-1<_&&(ge(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete l.g[f],l.h--)))):l&&(l=Y(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Ue(f,_,P,j)),(_=-1<l?f[l]:null)&&Ut(_))}function Ut(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[He])oe(f.i,l);else{var _=l.type,P=l.proxy;f.removeEventListener?f.removeEventListener(_,P,l.capture):f.detachEvent?f.detachEvent(bn(_),P):f.addListener&&f.removeListener&&f.removeListener(P),(_=Y(f))?(oe(_,l),_.h==0&&(_.src=null,f[ue]=null)):ge(l)}}}function bn(l){return l in Q?Q[l]:Q[l]="on"+l}function le(l,f){if(l.da)l=!0;else{f=new Me(f,this);var _=l.listener,P=l.ha||l.src;l.fa&&Ut(l),l=_.call(P,f)}return l}function Y(l){return l=l[ue],l instanceof ee?l:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qe(l){return typeof l=="function"?l:(l[be]||(l[be]=function(f){return l.handleEvent(f)}),l[be])}function Ne(){Se.call(this),this.i=new ee(this),this.M=this,this.F=null}E(Ne,Se),Ne.prototype[He]=!0,Ne.prototype.removeEventListener=function(l,f,_,P){ot(this,l,f,_,P)};function We(l,f){var _,P=l.F;if(P)for(_=[];P;P=P.F)_.push(P);if(l=l.M,P=f.type||f,typeof f=="string")f=new Pe(f,l);else if(f instanceof Pe)f.target=f.target||l;else{var j=f;f=new Pe(P,l),k(f,j)}if(j=!0,_)for(var H=_.length-1;0<=H;H--){var te=f.g=_[H];j=Ft(te,P,!0,f)&&j}if(te=f.g=l,j=Ft(te,P,!0,f)&&j,j=Ft(te,P,!1,f)&&j,_)for(H=0;H<_.length;H++)te=f.g=_[H],j=Ft(te,P,!1,f)&&j}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var _=l.g[f],P=0;P<_.length;P++)ge(_[P]);delete l.g[f],l.h--}}this.F=null},Ne.prototype.K=function(l,f,_,P){return this.i.add(String(l),f,!1,_,P)},Ne.prototype.L=function(l,f,_,P){return this.i.add(String(l),f,!0,_,P)};function Ft(l,f,_,P){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var j=!0,H=0;H<f.length;++H){var te=f[H];if(te&&!te.da&&te.capture==_){var Ye=te.listener,_t=te.ha||te.src;te.fa&&oe(l.i,te),j=Ye.call(_t,P)!==!1&&j}}return j&&!P.defaultPrevented}function ht(l,f,_){if(typeof l=="function")_&&(l=d(l,_));else if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Tn(l){l.g=ht(()=>{l.g=null,l.i&&(l.i=!1,Tn(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class $i extends Se{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sn(l){Se.call(this),this.h=l,this.g={}}E(sn,Se);var gi=[];function Jr(l){F(l.g,function(f,_){this.g.hasOwnProperty(_)&&Ut(f)},l),l.g={}}sn.prototype.N=function(){sn.aa.N.call(this),Jr(this)},sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=a.JSON.stringify,Ao=a.JSON.parse,ko=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function tr(){}tr.prototype.h=null;function Zr(l){return l.h||(l.h=l.i())}function xr(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nr(){Pe.call(this,"d")}E(nr,Pe);function ir(){Pe.call(this,"c")}E(ir,Pe);var on={},$r=null;function yi(){return $r=$r||new Ne}on.La="serverreachability";function es(l){Pe.call(this,on.La,l)}E(es,Pe);function Qn(l){const f=yi();We(f,new es(f))}on.STAT_EVENT="statevent";function ts(l,f){Pe.call(this,on.STAT_EVENT,l),this.stat=f}E(ts,Pe);function mt(l){const f=yi();We(f,new ts(f,l))}on.Ma="timingevent";function x(l,f){Pe.call(this,on.Ma,l),this.size=f}E(x,Pe);function _e(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function Fe(l,f,_,P,j,H){l.info(function(){if(l.g)if(H)for(var te="",Ye=H.split("&"),_t=0;_t<Ye.length;_t++){var Be=Ye[_t].split("=");if(1<Be.length){var Tt=Be[0];Be=Be[1];var wt=Tt.split("_");te=2<=wt.length&&wt[1]=="type"?te+(Tt+"="+Be+"&"):te+(Tt+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+P+") [attempt "+j+"]: "+f+`
`+_+`
`+te})}function Je(l,f,_,P,j,H,te){l.info(function(){return"XMLHTTP RESP ("+P+") [ attempt "+j+"]: "+f+`
`+_+`
`+H+" "+te})}function ft(l,f,_,P){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ct(l,_)+(P?" "+P:"")})}function Vt(l,f){l.info(function(){return"TIMEOUT: "+f})}Ge.prototype.info=function(){};function Ct(l,f){if(!l.g)return f;if(!f)return null;try{var _=JSON.parse(f);if(_){for(l=0;l<_.length;l++)if(Array.isArray(_[l])){var P=_[l];if(!(2>P.length)){var j=P[1];if(Array.isArray(j)&&!(1>j.length)){var H=j[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<j.length;te++)j[te]=""}}}}return er(_)}catch{return f}}var ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function is(){}E(is,tr),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Ro=new is;function wn(l,f,_,P){this.j=l,this.i=f,this.l=_,this.R=P||1,this.U=new sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var Wl={},Co={};function Po(l,f,_){l.L=1,l.v=as(an(f)),l.m=_,l.P=!0,Gl(l,null)}function Gl(l,f){l.F=Date.now(),rs(l),l.A=an(l.v);var _=l.A,P=l.R;Array.isArray(P)||(P=[String(P)]),su(_.i,"t",P),l.C=0,_=l.j.J,l.h=new Hl,l.g=Eu(l.j,_?f:null,!l.m),0<l.O&&(l.M=new $i(d(l.Y,l,l.g),l.O)),f=l.U,_=l.g,P=l.ca;var j="readystatechange";Array.isArray(j)||(j&&(gi[0]=j.toString()),j=gi);for(var H=0;H<j.length;H++){var te=he(_,j[H],P||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?A(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Qn(),Fe(l.i,l.u,l.A,l.l,l.R,l.m)}wn.prototype.ca=function(l){l=l.target;const f=this.M;f&&ln(l)==3?f.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const wt=ln(this.g);var f=this.g.Ba();const Ti=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||fu(this.g)))){this.J||wt!=4||f==7||(f==8||0>=Ti?Qn(3):Qn(2)),So(this);var _=this.g.Z();this.X=_;t:if(Kl(this)){var P=fu(this.g);l="";var j=P.length,H=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),rr(this);var te="";break t}this.h.i=new a.TextDecoder}for(f=0;f<j;f++)this.h.h=!0,l+=this.h.i.decode(P[f],{stream:!(H&&f==j-1)});P.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Je(this.i,this.u,this.A,this.l,this.R,wt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,_t=this.g;if((Ye=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Ye)){var Be=Ye;break t}}Be=null}if(_=Be)ft(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,_);else{this.o=!1,this.s=3,mt(12),Xn(this),rr(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<te.length;)if(zt=d_(this,te),zt==Co){wt==4&&(this.s=4,mt(14),_=!1),ft(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Wl){this.s=4,mt(15),ft(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else ft(this.i,this.l,zt,null),No(this,zt);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||te.length!=0||this.h.h||(this.s=1,mt(16),_=!1),this.o=this.o&&_,!_)ft(this.i,this.l,te,"[Invalid Chunked Response]"),Xn(this),rr(this);else if(0<te.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Uo(Tt),Tt.M=!0,mt(11))}}else ft(this.i,this.l,te,null),No(this,te);wt==4&&Xn(this),this.o&&!this.J&&(wt==4?vu(this.j,this):(this.o=!1,rs(this)))}else S_(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Xn(this),rr(this)}}}catch{}finally{}};function Kl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function d_(l,f){var _=l.C,P=f.indexOf(`
`,_);return P==-1?Co:(_=Number(f.substring(_,P)),isNaN(_)?Wl:(P+=1,P+_>f.length?Co:(f=f.slice(P,P+_),l.C=P+_,f)))}wn.prototype.cancel=function(){this.J=!0,Xn(this)};function rs(l){l.S=Date.now()+l.I,Ql(l,l.I)}function Ql(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_e(d(l.ba,l),f)}function So(l){l.B&&(a.clearTimeout(l.B),l.B=null)}wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Vt(this.i,this.A),this.L!=2&&(Qn(),mt(17)),Xn(this),this.s=2,rr(this)):Ql(this,this.S-l)};function rr(l){l.j.G==0||l.J||vu(l.j,l)}function Xn(l){So(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Jr(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function No(l,f){try{var _=l.j;if(_.G!=0&&(_.g==l||Do(_.h,l))){if(!l.K&&Do(_.h,l)&&_.G==3){try{var P=_.Da.g.parse(f)}catch{P=null}if(Array.isArray(P)&&P.length==3){var j=P;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<l.F)ds(_),hs(_);else break e;Mo(_),mt(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=_e(d(_.Za,_),6e3));if(1>=Jl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Jn(_,11)}else if((l.K||_.g==l)&&ds(_),!V(f))for(j=_.Da.g.parse(f),f=0;f<j.length;f++){let Be=j[f];if(_.T=Be[0],Be=Be[1],_.G==2)if(Be[0]=="c"){_.K=Be[1],_.ia=Be[2];const Tt=Be[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const wt=Be[4];wt!=null&&(_.Aa=wt,_.j.info("SVER="+_.Aa));const Ti=Be[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(P=1.5*Ti,_.L=P,_.j.info("backChannelRequestTimeoutMs_="+P)),P=_;const zt=l.g;if(zt){const ms=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var H=P.h;H.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Vo(H,H.h),H.h=null))}if(P.D){const Fo=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(P.ya=Fo,Ze(P.I,P.D,Fo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-l.F,_.j.info("Handshake RTT: "+_.R+"ms")),P=_;var te=l;if(P.qa=wu(P,P.J?P.ia:null,P.W),te.K){Zl(P.h,te);var Ye=te,_t=P.L;_t&&(Ye.I=_t),Ye.B&&(So(Ye),rs(Ye)),P.g=te}else gu(P);0<_.i.length&&fs(_)}else Be[0]!="stop"&&Be[0]!="close"||Jn(_,7);else _.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Jn(_,7):Lo(_):Be[0]!="noop"&&_.l&&_.l.ta(Be),_.v=0)}}Qn(4)}catch{}}var p_=class{constructor(l,f){this.g=l,this.map=f}};function Xl(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Jl(l){return l.h?1:l.g?l.g.size:0}function Do(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Vo(l,f){l.g?l.g.add(f):l.h=f}function Zl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Xl.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function xl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const _ of l.g.values())f=f.concat(_.D);return f}return T(l.i)}function m_(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],_=l.length,P=0;P<_;P++)f.push(l[P]);return f}f=[],_=0;for(P in l)f[_++]=l[P];return f}function __(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var _=0;_<l;_++)f.push(_);return f}f=[],_=0;for(const P in l)f[_++]=P;return f}}}function $l(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var _=__(l),P=m_(l),j=P.length,H=0;H<j;H++)f.call(void 0,P[H],_&&_[H],l)}var eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g_(l,f){if(l){l=l.split("&");for(var _=0;_<l.length;_++){var P=l[_].indexOf("="),j=null;if(0<=P){var H=l[_].substring(0,P);j=l[_].substring(P+1)}else H=l[_];f(H,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Yn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Yn){this.h=l.h,ss(this,l.j),this.o=l.o,this.g=l.g,os(this,l.s),this.l=l.l;var f=l.i,_=new ar;_.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),tu(this,_),this.m=l.m}else l&&(f=String(l).match(eu))?(this.h=!1,ss(this,f[1]||"",!0),this.o=sr(f[2]||""),this.g=sr(f[3]||"",!0),os(this,f[4]),this.l=sr(f[5]||"",!0),tu(this,f[6]||"",!0),this.m=sr(f[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Yn.prototype.toString=function(){var l=[],f=this.j;f&&l.push(or(f,nu,!0),":");var _=this.g;return(_||f=="file")&&(l.push("//"),(f=this.o)&&l.push(or(f,nu,!0),"@"),l.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&l.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&l.push("/"),l.push(or(_,_.charAt(0)=="/"?b_:v_,!0))),(_=this.i.toString())&&l.push("?",_),(_=this.m)&&l.push("#",or(_,w_)),l.join("")};function an(l){return new Yn(l)}function ss(l,f,_){l.j=_?sr(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function os(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function tu(l,f,_){f instanceof ar?(l.i=f,E_(l.i,l.h)):(_||(f=or(f,T_)),l.i=new ar(f,l.h))}function Ze(l,f,_){l.i.set(f,_)}function as(l){return Ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function sr(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function or(l,f,_){return typeof l=="string"?(l=encodeURI(l).replace(f,y_),_&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function y_(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var nu=/[#\/\?@]/g,v_=/[#\?:]/g,b_=/[#\?]/g,T_=/[#\?@]/g,w_=/#/g;function ar(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function En(l){l.g||(l.g=new Map,l.h=0,l.i&&g_(l.i,function(f,_){l.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}n=ar.prototype,n.add=function(l,f){En(this),this.i=null,l=vi(this,l);var _=this.g.get(l);return _||this.g.set(l,_=[]),_.push(f),this.h+=1,this};function iu(l,f){En(l),f=vi(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function ru(l,f){return En(l),f=vi(l,f),l.g.has(f)}n.forEach=function(l,f){En(this),this.g.forEach(function(_,P){_.forEach(function(j){l.call(f,j,P,this)},this)},this)},n.na=function(){En(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),_=[];for(let P=0;P<f.length;P++){const j=l[P];for(let H=0;H<j.length;H++)_.push(f[P])}return _},n.V=function(l){En(this);let f=[];if(typeof l=="string")ru(this,l)&&(f=f.concat(this.g.get(vi(this,l))));else{l=Array.from(this.g.values());for(let _=0;_<l.length;_++)f=f.concat(l[_])}return f},n.set=function(l,f){return En(this),this.i=null,l=vi(this,l),ru(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function su(l,f,_){iu(l,f),0<_.length&&(l.i=null,l.g.set(vi(l,f),T(_)),l.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var _=0;_<f.length;_++){var P=f[_];const H=encodeURIComponent(String(P)),te=this.V(P);for(P=0;P<te.length;P++){var j=H;te[P]!==""&&(j+="="+encodeURIComponent(String(te[P]))),l.push(j)}}return this.i=l.join("&")};function vi(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function E_(l,f){f&&!l.j&&(En(l),l.i=null,l.g.forEach(function(_,P){var j=P.toLowerCase();P!=j&&(iu(this,P),su(this,j,_))},l)),l.j=f}function I_(l,f){const _=new Ge;if(a.Image){const P=new Image;P.onload=g(In,_,"TestLoadImage: loaded",!0,f,P),P.onerror=g(In,_,"TestLoadImage: error",!1,f,P),P.onabort=g(In,_,"TestLoadImage: abort",!1,f,P),P.ontimeout=g(In,_,"TestLoadImage: timeout",!1,f,P),a.setTimeout(function(){P.ontimeout&&P.ontimeout()},1e4),P.src=l}else f(!1)}function A_(l,f){const _=new Ge,P=new AbortController,j=setTimeout(()=>{P.abort(),In(_,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:P.signal}).then(H=>{clearTimeout(j),H.ok?In(_,"TestPingServer: ok",!0,f):In(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(j),In(_,"TestPingServer: error",!1,f)})}function In(l,f,_,P,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),P(_)}catch{}}function k_(){this.g=new ko}function R_(l,f,_){const P=_||"";try{$l(l,function(j,H){let te=j;c(j)&&(te=er(j)),f.push(P+H+"="+encodeURIComponent(te))})}catch(j){throw f.push(P+"type="+encodeURIComponent("_badmap")),j}}function ls(l){this.l=l.Ub||null,this.j=l.eb||!1}E(ls,tr),ls.prototype.g=function(){return new us(this.l,this.j)},ls.prototype.i=function(l){return function(){return l}}({});function us(l,f){Ne.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(us,Ne),n=us.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,ur(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ou(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ou(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?lr(this):ur(this),this.readyState==3&&ou(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,lr(this))},n.Qa=function(l){this.g&&(this.response=l,lr(this))},n.ga=function(){this.g&&lr(this)};function lr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ur(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,l.push(_[0]+": "+_[1]),_=f.next();return l.join(`\r
`)};function ur(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function au(l){let f="";return F(l,function(_,P){f+=P,f+=":",f+=_,f+=`\r
`}),f}function Oo(l,f,_){e:{for(P in _){var P=!1;break e}P=!0}P||(_=au(_),typeof l=="string"?_!=null&&encodeURIComponent(String(_)):Ze(l,f,_))}function it(l){Ne.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(it,Ne);var C_=/^https?$/i,P_=["POST","PUT"];n=it.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,_,P){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Zr(this.o):Zr(Ro),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(H){lu(this,H);return}if(l=_||"",_=new Map(this.headers),P)if(Object.getPrototypeOf(P)===Object.prototype)for(var j in P)_.set(j,P[j]);else if(typeof P.keys=="function"&&typeof P.get=="function")for(const H of P.keys())_.set(H,P.get(H));else throw Error("Unknown input type for opt_headers: "+String(P));P=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),j=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(P_,f,void 0))||P||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of _)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hu(this),this.u=!0,this.g.send(l),this.u=!1}catch(H){lu(this,H)}};function lu(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,uu(l),cs(l)}function uu(l){l.A||(l.A=!0,We(l,"complete"),We(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,We(this,"complete"),We(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cu(this):this.bb())},n.bb=function(){cu(this)};function cu(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ln(l)!=4||l.Z()!=2)){if(l.u&&ln(l)==4)ht(l.Ea,0,l);else if(We(l,"readystatechange"),ln(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var _;if(!(_=f)){var P;if(P=te===0){var j=String(l.D).match(eu)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),P=!C_.test(j?j.toLowerCase():"")}_=P}if(_)We(l,"complete"),We(l,"success");else{l.m=6;try{var H=2<ln(l)?l.g.statusText:""}catch{H=""}l.l=H+" ["+l.Z()+"]",uu(l)}}finally{cs(l)}}}}function cs(l,f){if(l.g){hu(l);const _=l.g,P=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||We(l,"ready");try{_.onreadystatechange=P}catch{}}}function hu(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function ln(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Ao(f)}};function fu(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function S_(l){const f={};l=(l.g&&2<=ln(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let P=0;P<l.length;P++){if(V(l[P]))continue;var _=C(l[P]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=f[j]||[];f[j]=H,H.push(_)}R(f,function(P){return P.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(l,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[l]||f}function du(l){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,l),this.cb=cr("retryDelaySeedMs",1e4,l),this.Wa=cr("forwardChannelMaxRetries",2,l),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Xl(l&&l.concurrentRequestLimit),this.Da=new k_,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=du.prototype,n.la=8,n.G=1,n.connect=function(l,f,_,P){mt(0),this.W=l,this.H=f||{},_&&P!==void 0&&(this.H.OSID=_,this.H.OAID=P),this.F=this.X,this.I=wu(this,null,this.W),fs(this)};function Lo(l){if(pu(l),l.G==3){var f=l.U++,_=an(l.I);if(Ze(_,"SID",l.K),Ze(_,"RID",f),Ze(_,"TYPE","terminate"),hr(l,_),f=new wn(l,l.j,f),f.L=2,f.v=as(an(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=f.v,_=!0),_||(f.g=Eu(f.j,null),f.g.ea(f.v)),f.F=Date.now(),rs(f)}Tu(l)}function hs(l){l.g&&(Uo(l),l.g.cancel(),l.g=null)}function pu(l){hs(l),l.u&&(a.clearTimeout(l.u),l.u=null),ds(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function fs(l){if(!Yl(l.h)&&!l.s){l.s=!0;var f=l.Ga;z||Te(),J||(z(),J=!0),fe.add(f,l),l.B=0}}function N_(l,f){return Jl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_e(d(l.Ga,l,f),bu(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const j=new wn(this,this.j,l);let H=this.o;if(this.S&&(H?(H=A(H),k(H,this.S)):H=this.S),this.m!==null||this.O||(j.H=H,H=null),this.P)e:{for(var f=0,_=0;_<this.i.length;_++){t:{var P=this.i[_];if("__data__"in P.map&&(P=P.map.__data__,typeof P=="string")){P=P.length;break t}P=void 0}if(P===void 0)break;if(f+=P,4096<f){f=_;break e}if(f===4096||_===this.i.length-1){f=_+1;break e}}f=1e3}else f=1e3;f=_u(this,j,f),_=an(this.I),Ze(_,"RID",l),Ze(_,"CVER",22),this.D&&Ze(_,"X-HTTP-Session-Id",this.D),hr(this,_),H&&(this.O?f="headers="+encodeURIComponent(String(au(H)))+"&"+f:this.m&&Oo(_,this.m,H)),Vo(this.h,j),this.Ua&&Ze(_,"TYPE","init"),this.P?(Ze(_,"$req",f),Ze(_,"SID","null"),j.T=!0,Po(j,_,null)):Po(j,_,f),this.G=2}}else this.G==3&&(l?mu(this,l):this.i.length==0||Yl(this.h)||mu(this))};function mu(l,f){var _;f?_=f.l:_=l.U++;const P=an(l.I);Ze(P,"SID",l.K),Ze(P,"RID",_),Ze(P,"AID",l.T),hr(l,P),l.m&&l.o&&Oo(P,l.m,l.o),_=new wn(l,l.j,_,l.B+1),l.m===null&&(_.H=l.o),f&&(l.i=f.D.concat(l.i)),f=_u(l,_,1e3),_.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vo(l.h,_),Po(_,P,f)}function hr(l,f){l.H&&F(l.H,function(_,P){Ze(f,P,_)}),l.l&&$l({},function(_,P){Ze(f,P,_)})}function _u(l,f,_){_=Math.min(l.i.length,_);var P=l.l?d(l.l.Na,l.l,l):null;e:{var j=l.i;let H=-1;for(;;){const te=["count="+_];H==-1?0<_?(H=j[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let Ye=!0;for(let _t=0;_t<_;_t++){let Be=j[_t].g;const Tt=j[_t].map;if(Be-=H,0>Be)H=Math.max(0,j[_t].g-100),Ye=!1;else try{R_(Tt,te,"req"+Be+"_")}catch{P&&P(Tt)}}if(Ye){P=te.join("&");break e}}}return l=l.i.splice(0,_),f.D=l,P}function gu(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;z||Te(),J||(z(),J=!0),fe.add(f,l),l.v=0}}function Mo(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_e(d(l.Fa,l),bu(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_e(d(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),hs(this),yu(this))};function Uo(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function yu(l){l.g=new wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=an(l.qa);Ze(f,"RID","rpc"),Ze(f,"SID",l.K),Ze(f,"AID",l.T),Ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ze(f,"TO",l.ja),Ze(f,"TYPE","xmlhttp"),hr(l,f),l.m&&l.o&&Oo(f,l.m,l.o),l.L&&(l.g.I=l.L);var _=l.g;l=l.ia,_.L=1,_.v=as(an(f)),_.m=null,_.P=!0,Gl(_,l)}n.Za=function(){this.C!=null&&(this.C=null,hs(this),Mo(this),mt(19))};function ds(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function vu(l,f){var _=null;if(l.g==f){ds(l),Uo(l),l.g=null;var P=2}else if(Do(l.h,f))_=f.D,Zl(l.h,f),P=1;else return;if(l.G!=0){if(f.o)if(P==1){_=f.m?f.m.length:0,f=Date.now()-f.F;var j=l.B;P=yi(),We(P,new x(P,_)),fs(l)}else gu(l);else if(j=f.s,j==3||j==0&&0<f.X||!(P==1&&N_(l,f)||P==2&&Mo(l)))switch(_&&0<_.length&&(f=l.h,f.i=f.i.concat(_)),j){case 1:Jn(l,5);break;case 4:Jn(l,10);break;case 3:Jn(l,6);break;default:Jn(l,2)}}}function bu(l,f){let _=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(_*=2),_*f}function Jn(l,f){if(l.j.info("Error code "+f),f==2){var _=d(l.fb,l),P=l.Xa;const j=!P;P=new Yn(P||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ss(P,"https"),as(P),j?I_(P.toString(),_):A_(P.toString(),_)}else mt(2);l.G=0,l.l&&l.l.sa(f),Tu(l),pu(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Tu(l){if(l.G=0,l.ka=[],l.l){const f=xl(l.h);(f.length!=0||l.i.length!=0)&&(w(l.ka,f),w(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function wu(l,f,_){var P=_ instanceof Yn?an(_):new Yn(_);if(P.g!="")f&&(P.g=f+"."+P.g),os(P,P.s);else{var j=a.location;P=j.protocol,f=f?f+"."+j.hostname:j.hostname,j=+j.port;var H=new Yn(null);P&&ss(H,P),f&&(H.g=f),j&&os(H,j),_&&(H.l=_),P=H}return _=l.D,f=l.ya,_&&f&&Ze(P,_,f),Ze(P,"VER",l.la),hr(l,P),P}function Eu(l,f,_){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new it(new ls({eb:_})):new it(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}n=Iu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ps(){}ps.prototype.g=function(l,f){return new Ot(l,f)};function Ot(l,f){Ne.call(this),this.g=new du(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!V(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!V(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new bi(this)}E(Ot,Ne),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Lo(this.g)},Ot.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var _={};_.__data__=l,l=_}else this.u&&(_={},_.__data__=er(l),l=_);f.i.push(new p_(f.Ya++,l)),f.G==3&&fs(f)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Ot.aa.N.call(this)};function Au(l){nr.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const _ in f){l=_;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}E(Au,nr);function ku(){ir.call(this),this.status=1}E(ku,ir);function bi(l){this.g=l}E(bi,Iu),bi.prototype.ua=function(){We(this.g,"a")},bi.prototype.ta=function(l){We(this.g,new Au(l))},bi.prototype.sa=function(l){We(this.g,new ku)},bi.prototype.ra=function(){We(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,Cp=function(){return new ps},Rp=function(){return yi()},kp=on,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,Ps=ns,zl.COMPLETE="complete",Ap=zl,xr.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,pr=xr,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Ip=it}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const oc="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Xi="10.14.0";/**
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
 */const ai=new Ma("@firebase/firestore");function fr(){return ai.logLevel}function pe(n,...e){if(ai.logLevel<=Ve.DEBUG){const t=e.map(Ja);ai.debug(`Firestore (${Xi}): ${n}`,...t)}}function yn(n,...e){if(ai.logLevel<=Ve.ERROR){const t=e.map(Ja);ai.error(`Firestore (${Xi}): ${n}`,...t)}}function Mi(n,...e){if(ai.logLevel<=Ve.WARN){const t=e.map(Ja);ai.warn(`Firestore (${Xi}): ${n}`,...t)}}function Ja(n){if(typeof n=="string")return n;try{/**
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
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+n;throw yn(e),new Error(e)}function Ke(n,e){n||Ee()}function Re(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Pp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(It.UNAUTHENTICATED))}shutdown(){}}class A0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k0{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ke(typeof i.accessToken=="string"),new Pp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new It(e)}}class R0{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C0{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new R0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ke(this.o===void 0);const i=s=>{s.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string"),this.R=t.token,new P0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function N0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Sp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=N0(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function je(n,e){return n<e?-1:n>e?1:0}function Ui(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class dt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new dt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ke{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ke(e)}static min(){return new ke(new dt(0,0))}static max(){return new ke(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class xe extends Pr{construct(e,t,i){return new xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const D0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Pr{construct(e,t,i){return new yt(e,t,i)}static isValidIdentifier(e){return D0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new ce(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ce(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new ce(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(t)}static emptyPath(){return new yt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(xe.fromString(e))}static fromName(e){return new ye(xe.fromString(e).popFirst(5))}static empty(){return new ye(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new xe(e.slice()))}}function V0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=ke.fromTimestamp(i===1e9?new dt(t+1,0):new dt(t,i));return new Bn(r,ye.empty(),e)}function O0(n){return new Bn(n.readTime,n.key,-1)}class Bn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Bn(ke.min(),ye.empty(),-1)}static max(){return new Bn(ke.max(),ye.empty(),-1)}}function L0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:je(n.largestBatchId,e.largestBatchId))}/**
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
 */const M0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wr(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==M0)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):X.reject(t)}static resolve(e){return new X((t,i)=>{t(e)})}static reject(e){return new X((t,i)=>{i(e)})}static waitFor(e){return new X((t,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&t()},u=>i(u))}),o=!0,s===r&&t()})}static or(e){let t=X.resolve(!1);for(const i of e)t=t.next(r=>r?X.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new X((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===s&&i(o)},h=>r(h))}})}static doWhile(e,t){return new X((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function F0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Za.oe=-1;function ro(n){return n==null}function zs(n){return n===0&&1/n==-1/0}function B0(n){return typeof n=="number"&&Number.isInteger(n)&&!zs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ac(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function di(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Np(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??gt.RED,this.left=r??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new gt(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,r,s){return this}insert(e,t,i){return new gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lc(this.data.getIterator())}getIteratorFrom(e){return new lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Lt([])}unionWith(e){let t=new vt(yt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dp("Invalid base64 string: "+s):s}}(e);return new bt(t)}static fromUint8Array(e){const t=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const j0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(n){if(Ke(!!n),typeof n=="string"){let e=0;const t=j0.exec(n);if(Ke(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function li(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */function xa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $a(n){const e=n.mapValue.fields.__previous_value__;return xa(e)?$a(e):e}function Sr(n){const e=jn(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class q0{constructor(e,t,i,r,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bs={mapValue:{}};function ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xa(n)?4:H0(n)?9007199254740991:z0(n)?10:11:Ee()}function nn(n,e){if(n===e)return!0;const t=ui(n);if(t!==ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sr(n).isEqual(Sr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=jn(r.timestampValue),a=jn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return li(r.bytesValue).isEqual(li(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return at(r.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(r.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return at(r.integerValue)===at(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=at(r.doubleValue),a=at(s.doubleValue);return o===a?zs(o)===zs(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ui(n.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(ac(o)!==ac(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!nn(o[u],a[u])))return!1;return!0}(n,e);default:return Ee()}}function Dr(n,e){return(n.values||[]).find(t=>nn(t,e))!==void 0}function Fi(n,e){if(n===e)return 0;const t=ui(n),i=ui(e);if(t!==i)return je(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),u=at(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return uc(n.timestampValue,e.timestampValue);case 4:return uc(Sr(n),Sr(e));case 5:return je(n.stringValue,e.stringValue);case 6:return function(s,o){const a=li(s),u=li(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=je(a[c],u[c]);if(h!==0)return h}return je(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=je(at(s.latitude),at(o.latitude));return a!==0?a:je(at(s.longitude),at(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return cc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},d=o.fields||{},g=(a=p.value)===null||a===void 0?void 0:a.arrayValue,E=(u=d.value)===null||u===void 0?void 0:u.arrayValue,T=je(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:cc(g,E)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===bs.mapValue&&o===bs.mapValue)return 0;if(s===bs.mapValue)return 1;if(o===bs.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const d=je(u[p],h[p]);if(d!==0)return d;const g=Fi(a[u[p]],c[h[p]]);if(g!==0)return g}return je(u.length,h.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function uc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return je(n,e);const t=jn(n),i=jn(e),r=je(t.seconds,i.seconds);return r!==0?r:je(t.nanos,i.nanos)}function cc(n,e){const t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){const s=Fi(t[r],i[r]);if(s)return s}return je(t.length,i.length)}function Bi(n){return ma(n)}function ma(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=jn(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return li(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=ma(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${ma(t.fields[o])}`;return r+"}"}(n.mapValue):Ee()}function hc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _a(n){return!!n&&"integerValue"in n}function el(n){return!!n&&"arrayValue"in n}function fc(n){return!!n&&"nullValue"in n}function dc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function z0(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function br(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return di(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=br(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=br(n.arrayValue.values[t]);return e}return Object.assign({},n)}function H0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=br(t)}setAll(e){let t=yt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=br(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){di(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Nt(br(this.value))}}function Vp(n){const e=[];return di(n.fields,(t,i)=>{const r=new yt([t]);if(Ss(i)){const s=Vp(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
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
 */class At{constructor(e,t,i,r,s,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,ke.min(),ke.min(),ke.min(),Nt.empty(),0)}static newFoundDocument(e,t,i,r){return new At(e,1,t,ke.min(),i,r,0)}static newNoDocument(e,t){return new At(e,2,t,ke.min(),ke.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new At(e,3,t,ke.min(),ke.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hs{constructor(e,t){this.position=e,this.inclusive=t}}function pc(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=ye.comparator(ye.fromName(o.referenceValue),t.key):i=Fi(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function mc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function W0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Op{}class ct extends Op{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new K0(e,t,i):t==="array-contains"?new Y0(e,i):t==="in"?new J0(e,i):t==="not-in"?new Z0(e,i):t==="array-contains-any"?new x0(e,i):new ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Q0(e,i):new X0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fi(t,this.value)):t!==null&&ui(this.value)===ui(t)&&this.matchesComparison(Fi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends Op{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qt(e,t)}matches(e){return Lp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lp(n){return n.op==="and"}function Mp(n){return G0(n)&&Lp(n)}function G0(n){for(const e of n.filters)if(e instanceof Qt)return!1;return!0}function ga(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+Bi(n.value);if(Mp(n))return n.filters.map(e=>ga(e)).join(",");{const e=n.filters.map(t=>ga(t)).join(",");return`${n.op}(${e})`}}function Up(n,e){return n instanceof ct?function(i,r){return r instanceof ct&&i.op===r.op&&i.field.isEqual(r.field)&&nn(i.value,r.value)}(n,e):n instanceof Qt?function(i,r){return r instanceof Qt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&Up(o,r.filters[a]),!0):!1}(n,e):void Ee()}function Fp(n){return n instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Bi(t.value)}`}(n):n instanceof Qt?function(t){return t.op.toString()+" {"+t.getFilters().map(Fp).join(" ,")+"}"}(n):"Filter"}class K0 extends ct{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q0 extends ct{constructor(e,t){super(e,"in",t),this.keys=Bp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class X0 extends ct{constructor(e,t){super(e,"not-in",t),this.keys=Bp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class Y0 extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return el(t)&&Dr(t.arrayValue,this.value)}}class J0 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dr(this.value.arrayValue,t)}}class Z0 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Dr(this.value.arrayValue,t)}}class x0 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!el(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Dr(this.value.arrayValue,i))}}/**
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
 */class $0{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function _c(n,e=null,t=[],i=[],r=null,s=null,o=null){return new $0(n,e,t,i,r,s,o)}function tl(n){const e=Re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>ga(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ro(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Bi(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Bi(i)).join(",")),e.ue=t}return e.ue}function nl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!W0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mc(n.startAt,e.startAt)&&mc(n.endAt,e.endAt)}function ya(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yi{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e1(n,e,t,i,r,s,o,a){return new Yi(n,e,t,i,r,s,o,a)}function il(n){return new Yi(n)}function gc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jp(n){return n.collectionGroup!==null}function Tr(n){const e=Re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(yt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vr(s,i))}),t.has(yt.keyField().canonicalString())||e.ce.push(new Vr(yt.keyField(),i))}return e.ce}function xt(n){const e=Re(n);return e.le||(e.le=t1(e,Tr(n))),e.le}function t1(n,e){if(n.limitType==="F")return _c(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Vr(r.field,s)});const t=n.endAt?new Hs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hs(n.startAt.position,n.startAt.inclusive):null;return _c(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function va(n,e){const t=n.filters.concat([e]);return new Yi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ba(n,e,t){return new Yi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function so(n,e){return nl(xt(n),xt(e))&&n.limitType===e.limitType}function qp(n){return`${tl(xt(n))}|lt:${n.limitType}`}function Ai(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>Fp(r)).join(", ")}]`),ro(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Bi(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Bi(r)).join(",")),`Target(${i})`}(xt(n))}; limitType=${n.limitType})`}function oo(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):ye.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of Tr(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(o,a,u){const c=pc(o,a,u);return o.inclusive?c<=0:c<0}(i.startAt,Tr(i),r)||i.endAt&&!function(o,a,u){const c=pc(o,a,u);return o.inclusive?c>=0:c>0}(i.endAt,Tr(i),r))}(n,e)}function n1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zp(n){return(e,t)=>{let i=!1;for(const r of Tr(n)){const s=i1(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function i1(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Fi(u,c):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
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
 */class Ji{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Np(this.inner)}size(){return this.innerSize}}/**
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
 */const r1=new nt(ye.comparator);function vn(){return r1}const Hp=new nt(ye.comparator);function mr(...n){let e=Hp;for(const t of n)e=e.insert(t.key,t);return e}function Wp(n){let e=Hp;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ei(){return wr()}function Gp(){return wr()}function wr(){return new Ji(n=>n.toString(),(n,e)=>n.isEqual(e))}const s1=new nt(ye.comparator),o1=new vt(ye.comparator);function De(...n){let e=o1;for(const t of n)e=e.add(t);return e}const a1=new vt(je);function l1(){return a1}/**
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
 */function rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(e)?"-0":e}}function Kp(n){return{integerValue:""+n}}function Qp(n,e){return B0(e)?Kp(e):rl(n,e)}/**
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
 */class ao{constructor(){this._=void 0}}function u1(n,e,t){return n instanceof Or?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&xa(s)&&(s=$a(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof ji?Yp(n,e):n instanceof qi?Jp(n,e):function(r,s){const o=Xp(r,s),a=yc(o)+yc(r.Pe);return _a(o)&&_a(r.Pe)?Kp(a):rl(r.serializer,a)}(n,e)}function c1(n,e,t){return n instanceof ji?Yp(n,e):n instanceof qi?Jp(n,e):t}function Xp(n,e){return n instanceof Lr?function(i){return _a(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class Or extends ao{}class ji extends ao{constructor(e){super(),this.elements=e}}function Yp(n,e){const t=Zp(e);for(const i of n.elements)t.some(r=>nn(r,i))||t.push(i);return{arrayValue:{values:t}}}class qi extends ao{constructor(e){super(),this.elements=e}}function Jp(n,e){let t=Zp(e);for(const i of n.elements)t=t.filter(r=>!nn(r,i));return{arrayValue:{values:t}}}class Lr extends ao{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yc(n){return at(n.integerValue||n.doubleValue)}function Zp(n){return el(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class lo{constructor(e,t){this.field=e,this.transform=t}}function h1(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof ji&&r instanceof ji||i instanceof qi&&r instanceof qi?Ui(i.elements,r.elements,nn):i instanceof Lr&&r instanceof Lr?nn(i.Pe,r.Pe):i instanceof Or&&r instanceof Or}(n.transform,e.transform)}class f1{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ns(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class uo{}function xp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sl(n.key,jt.none()):new Kr(n.key,n.data,jt.none());{const t=n.data,i=Nt.empty();let r=new vt(yt.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Wn(n.key,i,new Lt(r.toArray()),jt.none())}}function d1(n,e,t){n instanceof Kr?function(r,s,o){const a=r.value.clone(),u=bc(r.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Wn?function(r,s,o){if(!Ns(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bc(r.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($p(r)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,i){return n instanceof Kr?function(s,o,a,u){if(!Ns(s.precondition,o))return a;const c=s.value.clone(),h=Tc(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof Wn?function(s,o,a,u){if(!Ns(s.precondition,o))return a;const c=Tc(s.fieldTransforms,u,o),h=o.data;return h.setAll($p(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,i):function(s,o,a){return Ns(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function p1(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=Xp(i.transform,r||null);s!=null&&(t===null&&(t=Nt.empty()),t.set(i.field,s))}return t||null}function vc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Ui(i,r,(s,o)=>h1(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Kr extends uo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wn extends uo{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $p(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function bc(n,e,t){const i=new Map;Ke(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,c1(o,a,t[r]))}return i}function Tc(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,u1(s,o,e))}return i}class sl extends uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m1 extends uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _1{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&d1(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Er(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Er(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Gp();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const u=xp(o,a);u!==null&&i.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(ke.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(t,i)=>vc(t,i))&&Ui(this.baseMutations,e.baseMutations,(t,i)=>vc(t,i))}}class ol{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){Ke(e.mutations.length===i.length);let r=function(){return s1}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new ol(e,t,i,r)}}/**
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
 */class g1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,Le;function v1(n){switch(n){default:return Ee();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function em(n){if(n===void 0)return yn("GRPC error has no .code"),K.UNKNOWN;switch(n){case ut.OK:return K.OK;case ut.CANCELLED:return K.CANCELLED;case ut.UNKNOWN:return K.UNKNOWN;case ut.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ut.INTERNAL:return K.INTERNAL;case ut.UNAVAILABLE:return K.UNAVAILABLE;case ut.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ut.NOT_FOUND:return K.NOT_FOUND;case ut.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ut.ABORTED:return K.ABORTED;case ut.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ut.DATA_LOSS:return K.DATA_LOSS;default:return Ee()}}(Le=ut||(ut={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b1(){return new TextEncoder}/**
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
 */const T1=new ii([4294967295,4294967295],0);function wc(n){const e=b1().encode(n),t=new Ep;return t.update(e),new Uint8Array(t.digest())}function Ec(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ii([t,i],0),new ii([r,s],0)]}class al{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new _r(`Invalid padding: ${t}`);if(i<0)throw new _r(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new _r(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ii.fromNumber(this.Ie)}Ee(e,t,i){let r=e.add(t.multiply(ii.fromNumber(i)));return r.compare(T1)===1&&(r=new ii([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wc(e),[i,r]=Ec(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new al(s,r,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=wc(e),[i,r]=Ec(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class co{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new co(ke.min(),r,new nt(je),vn(),De())}}class Qr{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Qr(i,t,De(),De(),De())}}/**
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
 */class Ds{constructor(e,t,i,r){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=r}}class tm{constructor(e,t){this.targetId=e,this.me=t}}class nm{constructor(e,t,i=bt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Ic{constructor(){this.fe=0,this.ge=kc(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),t=De(),i=De();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:Ee()}}),new Qr(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=kc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class w1{constructor(e){this.Le=e,this.Be=new Map,this.ke=vn(),this.qe=Ac(),this.Qe=new nt(je)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,r)=>{this.ze(r)&&t(r)})}He(e){const t=e.targetId,i=e.me.count,r=this.Je(t);if(r){const s=r.target;if(ya(s))if(i===0){const o=new ye(s.path);this.Ue(t,o,At.newNoDocument(o,ke.min()))}else Ke(i===1);else{const o=this.Ye(t);if(o!==i){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=t;let o,a;try{o=li(i).toUint8Array()}catch(u){if(u instanceof Dp)return Mi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new al(o,r,s)}catch(u){return Mi(u instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let r=0;return i.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ya(a.target)){const u=new ye(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,At.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let i=De();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new co(e,t,this.Qe,this.ke,i);return this.ke=vn(),this.qe=Ac(),this.Qe=new nt(je),r}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ic,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new vt(je),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ic),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ac(){return new nt(ye.comparator)}function kc(){return new nt(ye.comparator)}const E1={asc:"ASCENDING",desc:"DESCENDING"},I1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},A1={and:"AND",or:"OR"};class k1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ta(n,e){return n.useProto3Json||ro(e)?e:{value:e}}function Ws(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function im(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R1(n,e){return Ws(n,e.toTimestamp())}function $t(n){return Ke(!!n),ke.fromTimestamp(function(t){const i=jn(t);return new dt(i.seconds,i.nanos)}(n))}function ll(n,e){return wa(n,e).canonicalString()}function wa(n,e){const t=function(r){return new xe(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rm(n){const e=xe.fromString(n);return Ke(um(e)),e}function Ea(n,e){return ll(n.databaseId,e.path)}function Yo(n,e){const t=rm(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(om(t))}function sm(n,e){return ll(n.databaseId,e)}function C1(n){const e=rm(n);return e.length===4?xe.emptyPath():om(e)}function Ia(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function om(n){return Ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rc(n,e,t){return{name:Ea(n,e),fields:t.value.mapValue.fields}}function P1(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ke(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?K.UNKNOWN:em(c.code);return new ce(h,c.message||"")}(o);t=new nm(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Yo(n,i.document.name),s=$t(i.document.updateTime),o=i.document.createTime?$t(i.document.createTime):ke.min(),a=new Nt({mapValue:{fields:i.document.fields}}),u=At.newFoundDocument(r,s,o,a),c=i.targetIds||[],h=i.removedTargetIds||[];t=new Ds(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Yo(n,i.document),s=i.readTime?$t(i.readTime):ke.min(),o=At.newNoDocument(r,s),a=i.removedTargetIds||[];t=new Ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Yo(n,i.document),s=i.removedTargetIds||[];t=new Ds([],s,r,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new y1(r,s),a=i.targetId;t=new tm(a,o)}}return t}function S1(n,e){let t;if(e instanceof Kr)t={update:Rc(n,e.key,e.value)};else if(e instanceof sl)t={delete:Ea(n,e.key)};else if(e instanceof Wn)t={update:Rc(n,e.key,e.data),updateMask:B1(e.fieldMask)};else{if(!(e instanceof m1))return Ee();t={verify:Ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Or)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lr)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:R1(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ee()}(n,e.precondition)),t}function N1(n,e){return n&&n.length>0?(Ke(e!==void 0),n.map(t=>function(r,s){let o=r.updateTime?$t(r.updateTime):$t(s);return o.isEqual(ke.min())&&(o=$t(s)),new f1(o,r.transformResults||[])}(t,e))):[]}function D1(n,e){return{documents:[sm(n,e.path)]}}function V1(n,e){const t={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=sm(n,r);const s=function(c){if(c.length!==0)return lm(Qt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(d){return{field:ki(d.field),direction:M1(d.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ta(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:r}}function O1(n){let e=C1(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){Ke(i===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(p){const d=am(p);return d instanceof Qt&&Mp(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(d=>function(E){return new Vr(Ri(E.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(p){let d;return d=typeof p=="object"?p.value:p,ro(d)?null:d}(t.limit));let u=null;t.startAt&&(u=function(p){const d=!!p.before,g=p.values||[];return new Hs(g,d)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const d=!p.before,g=p.values||[];return new Hs(g,d)}(t.endAt)),e1(e,r,o,s,a,"F",u,c)}function L1(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function am(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ri(t.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Ri(t.unaryFilter.field);return ct.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ri(t.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ri(t.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return ct.create(Ri(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qt.create(t.compositeFilter.filters.map(i=>am(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function M1(n){return E1[n]}function U1(n){return I1[n]}function F1(n){return A1[n]}function ki(n){return{fieldPath:n.canonicalString()}}function Ri(n){return yt.fromServerFormat(n.fieldPath)}function lm(n){return n instanceof ct?function(t){if(t.op==="=="){if(dc(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NAN"}};if(fc(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dc(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NOT_NAN"}};if(fc(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(t.field),op:U1(t.op),value:t.value}}}(n):n instanceof Qt?function(t){const i=t.getFilters().map(r=>lm(r));return i.length===1?i[0]:{compositeFilter:{op:F1(t.op),filters:i}}}(n):Ee()}function B1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function um(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dn{constructor(e,t,i,r,s=ke.min(),o=ke.min(),a=bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j1{constructor(e){this.ct=e}}function q1(n){const e=O1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
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
 */class z1{constructor(){this.un=new H1}addToCollectionParentIndex(e,t){return this.un.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Bn.min())}updateCollectionGroup(e,t,i){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class H1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new vt(xe.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new vt(xe.comparator)).toArray()}}/**
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
 */class zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zi(0)}static kn(){return new zi(-1)}}/**
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
 */class W1{constructor(){this.changes=new Ji(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?X.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class K1{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Er(i.mutation,r,Lt.empty(),dt.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,De()).next(()=>i))}getLocalViewOfDocuments(e,t,i=De()){const r=ei();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=mr();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=ei();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,De()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,r){let s=vn();const o=wr(),a=function(){return wr()}();return t.forEach((u,c)=>{const h=i.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Wn)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Er(h.mutation,c,h.mutation.getFieldMask(),dt.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var p;return a.set(c,new G1(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,t){const i=wr();let r=new nt((o,a)=>o-a),s=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=i.get(u)||Lt.empty();h=a.applyToLocalView(c,h),i.set(u,h);const p=(r.get(a.batchId)||De()).add(u);r=r.insert(a.batchId,p)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=Gp();h.forEach(d=>{if(!s.has(d)){const g=xp(t.get(d),i.get(d));g!==null&&p.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return X.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(o){return ye.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):X.resolve(ei());let a=-1,u=s;return o.next(c=>X.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?X.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,De())).next(h=>({batchId:a,changes:Wp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let r=mr();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const s=t.collectionGroup;let o=mr();return this.indexManager.getCollectionParents(e,s).next(a=>X.forEach(a,u=>{const c=function(p,d){return new Yi(d,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i,r).next(h=>{h.forEach((p,d)=>{o=o.insert(p,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s,r))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,At.newInvalidDocument(h)))});let a=mr();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Er(h.mutation,c,Lt.empty(),dt.now()),oo(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class Q1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return X.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:$t(r.createTime)}}(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(r){return{name:r.name,query:q1(r.bundledQuery),readTime:$t(r.readTime)}}(t)),X.resolve()}}/**
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
 */class X1{constructor(){this.overlays=new nt(ye.comparator),this.Ir=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ei();return X.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.ht(e,t,s)}),X.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),X.resolve()}getOverlaysForCollection(e,t,i){const r=ei(),s=t.length+1,o=new ye(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return X.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new nt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let h=s.get(c.largestBatchId);h===null&&(h=ei(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return X.resolve(a)}ht(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new g1(t,i));let s=this.Ir.get(t);s===void 0&&(s=De(),this.Ir.set(t,s)),this.Ir.set(t,s.add(i.key))}}/**
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
 */class Y1{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class ul{constructor(){this.Tr=new vt(pt.Er),this.dr=new vt(pt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new pt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new pt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ye(new xe([])),i=new pt(t,e),r=new pt(t,e+1),s=[];return this.dr.forEachInRange([i,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new xe([])),i=new pt(t,e),r=new pt(t,e+1);let s=De();return this.dr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class pt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||je(e.wr,t.wr)}static Ar(e,t){return je(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
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
 */class J1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new vt(pt.Er)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _1(s,t,i,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return X.resolve(o)}lookupMutationBatch(e,t){return X.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.vr(i),s=r<0?0:r;return X.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new pt(t,0),r=new pt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],o=>{const a=this.Dr(o.wr);s.push(a)}),X.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(je);return t.forEach(r=>{const s=new pt(r,0),o=new pt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{i=i.add(a.wr)})}),X.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;ye.isDocumentKey(s)||(s=s.child(""));const o=new pt(new ye(s),0);let a=new vt(je);return this.br.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.wr)),!0)},o),X.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(i=>{const r=this.Dr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Ke(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return X.forEach(t.mutations,r=>{const s=new pt(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new pt(t,0),r=this.br.firstAfterOrEqual(i);return X.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Z1{constructor(e){this.Mr=e,this.docs=function(){return new nt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return X.resolve(i?i.document.mutableCopy():At.newInvalidDocument(t))}getEntries(e,t){let i=vn();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():At.newInvalidDocument(r))}),X.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=vn();const o=t.path,a=new ye(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||L0(O0(h),i)<=0||(r.has(h.key)||oo(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return X.resolve(s)}getAllFromCollectionGroup(e,t,i,r){Ee()}Or(e,t){return X.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new x1(this)}getSize(e){return X.resolve(this.size)}}class x1 extends W1{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(i)}),X.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class $1{constructor(e){this.persistence=e,this.Nr=new Ji(t=>tl(t),nl),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ul,this.targetCount=0,this.kr=zi.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,r)=>t(r)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),X.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new zi(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Kn(t),X.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),X.waitFor(s).next(()=>r)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return X.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),X.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),X.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return X.resolve(i)}containsKey(e,t){return X.resolve(this.Br.containsKey(t))}}/**
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
 */class eb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Za(0),this.Kr=!1,this.Kr=!0,this.$r=new Y1,this.referenceDelegate=e(this),this.Ur=new $1(this),this.indexManager=new z1,this.remoteDocumentCache=function(r){return new Z1(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new j1(t),this.Gr=new Q1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new X1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new J1(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){pe("MemoryPersistence","Starting transaction:",e);const r=new tb(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(e,t){return X.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class tb extends U0{constructor(e){super(),this.currentSequenceNumber=e}}class cl{constructor(e){this.persistence=e,this.Jr=new ul,this.Yr=null}static Zr(e){return new cl(e)}get Xr(){if(this.Yr)return this.Yr;throw Ee()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),X.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),X.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Xr,i=>{const r=ye.fromPath(i);return this.ei(e,r).next(s=>{s||t.removeEntry(r,ke.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return X.or([()=>X.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class hl{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=r}static Wi(e,t){let i=De(),r=De();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new hl(e,t.fromCache,i,r)}}/**
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
 */class nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ib{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sg()?8:F0(Rt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,r){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nb;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,i,r){return i.documentReadCount<this.ji?(fr()<=Ve.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Ai(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),X.resolve()):(fr()<=Ve.DEBUG&&pe("QueryEngine","Query:",Ai(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(fr()<=Ve.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Ai(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):X.resolve())}Yi(e,t){if(gc(t))return X.resolve(null);let i=xt(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=ba(t,null,"F"),i=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=De(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,ba(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,i,r){return gc(t)||r.isEqual(ke.min())?X.resolve(null):this.Ji.getDocuments(e,i).next(s=>{const o=this.ts(t,s);return this.ns(t,o,i,r)?X.resolve(null):(fr()<=Ve.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ai(t)),this.rs(e,o,t,V0(r,-1)).next(a=>a))})}ts(e,t){let i=new vt(zp(e));return t.forEach((r,s)=>{oo(e,s)&&(i=i.add(s))}),i}ns(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(e,t,i){return fr()<=Ve.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Ai(t)),this.Ji.getDocumentsMatchingQuery(e,t,Bn.min(),i)}rs(e,t,i,r){return this.Ji.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class rb{constructor(e,t,i,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new nt(je),this._s=new Ji(s=>tl(s),nl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function sb(n,e,t,i){return new rb(n,e,t,i)}async function cm(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let u=De();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(i,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function ob(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,d=p.keys();let g=X.resolve();return d.forEach(E=>{g=g.next(()=>h.getEntry(u,E)).next(T=>{const w=c.docVersions.get(E);Ke(w!==null),T.version.compareTo(w)<0&&(p.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),h.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let u=De();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function hm(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function ab(n,e){const t=Re(n),i=e.snapshotVersion;let r=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});r=t.os;const a=[];e.targetChanges.forEach((h,p)=>{const d=r.get(p);if(!d)return;a.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,p)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,i)),r=r.insert(p,g),function(T,w,N){return T.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,g,h)&&a.push(t.Ur.updateTargetData(s,g))});let u=vn(),c=De();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(lb(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!i.isEqual(ke.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(h)}return X.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=r,s))}function lb(n,e,t){let i=De(),r=De();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=vn();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(ke.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):pe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:r}})}function ub(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function cb(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Ur.getTargetData(i,e).next(s=>s?(r=s,X.resolve(r)):t.Ur.allocateTargetId(i).next(o=>(r=new Dn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function Aa(n,e,t){const i=Re(n),r=i.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Gr(o))throw o;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.os=i.os.remove(e),i._s.delete(r.target)}function Cc(n,e,t){const i=Re(n);let r=ke.min(),s=De();return i.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=Re(u),d=p._s.get(h);return d!==void 0?X.resolve(p.os.get(d)):p.Ur.getTargetData(c,h)}(i,o,xt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>i.ss.getDocumentsMatchingQuery(o,e,t?r:ke.min(),t?s:De())).next(a=>(hb(i,n1(e),a),{documents:a,Ts:s})))}function hb(n,e,t){let i=n.us.get(e)||ke.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(e,i)}class Pc{constructor(){this.activeTargetIds=l1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fb{constructor(){this.so=new Pc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pc,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class db{_o(e){}shutdown(){}}/**
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
 */class Sc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ts=null;function Jo(){return Ts===null?Ts=function(){return 268435456+Math.round(2147483648*Math.random())}():Ts++,"0x"+Ts.toString(16)}/**
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
 */const pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Et="WebChannelConnection";class _b extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(t,i,r,s,o){const a=Jo(),u=this.xo(t,i.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${a}:`,u,r);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,r).then(h=>(pe("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Mi("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",r),h})}Lo(t,i,r,s,o,a){return this.Mo(t,i,r,s,o)}Oo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}xo(t,i){const r=pb[t];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,r){const s=Jo();return new Promise((o,a)=>{const u=new Ip;u.setWithCredentials(!0),u.listenOnce(Ap.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ps.NO_ERROR:const h=u.getResponseJson();pe(Et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ps.TIMEOUT:pe(Et,`RPC '${e}' ${s} timed out`),a(new ce(K.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const p=u.getStatus();if(pe(Et,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const E=function(w){const N=w.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(N)>=0?N:K.UNKNOWN}(g.status);a(new ce(E,g.message))}else a(new ce(K.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ce(K.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{pe(Et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);pe(Et,`RPC '${e}' ${s} sending request:`,r),u.send(t,"POST",c,i,15)})}Bo(e,t,i){const r=Jo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cp(),a=Rp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const h=s.join("");pe(Et,`Creating RPC '${e}' stream ${r}: ${h}`,u);const p=o.createWebChannel(h,u);let d=!1,g=!1;const E=new mb({Io:w=>{g?pe(Et,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(d||(pe(Et,`Opening RPC '${e}' stream ${r} transport.`),p.open(),d=!0),pe(Et,`RPC '${e}' stream ${r} sending:`,w),p.send(w))},To:()=>p.close()}),T=(w,N,V)=>{w.listen(N,S=>{try{V(S)}catch(U){setTimeout(()=>{throw U},0)}})};return T(p,pr.EventType.OPEN,()=>{g||(pe(Et,`RPC '${e}' stream ${r} transport opened.`),E.yo())}),T(p,pr.EventType.CLOSE,()=>{g||(g=!0,pe(Et,`RPC '${e}' stream ${r} transport closed`),E.So())}),T(p,pr.EventType.ERROR,w=>{g||(g=!0,Mi(Et,`RPC '${e}' stream ${r} transport errored:`,w),E.So(new ce(K.UNAVAILABLE,"The operation could not be completed")))}),T(p,pr.EventType.MESSAGE,w=>{var N;if(!g){const V=w.data[0];Ke(!!V);const S=V,U=S.error||((N=S[0])===null||N===void 0?void 0:N.error);if(U){pe(Et,`RPC '${e}' stream ${r} received error:`,U);const M=U.status;let F=function(I){const k=ut[I];if(k!==void 0)return em(k)}(M),R=U.message;F===void 0&&(F=K.INTERNAL,R="Unknown error status: "+M+" with message "+U.message),g=!0,E.So(new ce(F,R)),p.close()}else pe(Et,`RPC '${e}' stream ${r} received:`,V),E.bo(V)}}),T(a,kp.STAT_EVENT,w=>{w.stat===pa.PROXY?pe(Et,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===pa.NOPROXY&&pe(Et,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Zo(){return typeof document<"u"?document:null}/**
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
 */function ho(n){return new k1(n,!0)}/**
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
 */class fm{constructor(e,t,i=1e3,r=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-i);r>0&&pe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dm{constructor(e,t,i,r,s,o,a,u){this.ui=e,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(yn(t.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===t&&this.P_(i,r)},i=>{e(()=>{const r=new ce(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends dm{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=P1(this.serializer,e),i=function(s){if(!("targetChange"in s))return ke.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ke.min():o.readTime?$t(o.readTime):ke.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=Ia(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=ya(u)?{documents:D1(s,u)}:{query:V1(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=im(s,o.resumeToken);const c=Ta(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ke.min())>0){a.readTime=Ws(s,o.snapshotVersion.toTimestamp());const c=Ta(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=L1(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=Ia(this.serializer),t.removeTarget=e,this.a_(t)}}class yb extends dm{constructor(e,t,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=N1(e.writeResults,e.commitTime),i=$t(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=Ia(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>S1(this.serializer,i))};this.a_(t)}}/**
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
 */class vb extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,wa(t,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(K.UNKNOWN,s.toString())})}Lo(e,t,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,wa(t,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(K.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yn(t),this.D_=!1):pe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Tb{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{i.enqueueAndForget(async()=>{pi(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Re(u);c.L_.add(4),await Xr(c),c.q_.set("Unknown"),c.L_.delete(4),await fo(c)}(this))})}),this.q_=new bb(i,r)}}async function fo(n){if(pi(n))for(const e of n.B_)await e(!0)}async function Xr(n){for(const e of n.B_)await e(!1)}function pm(n,e){const t=Re(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ml(t)?pl(t):Zi(t).r_()&&dl(t,e))}function fl(n,e){const t=Re(n),i=Zi(t);t.N_.delete(e),i.r_()&&mm(t,e),t.N_.size===0&&(i.r_()?i.o_():pi(t)&&t.q_.set("Unknown"))}function dl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zi(n).A_(e)}function mm(n,e){n.Q_.xe(e),Zi(n).R_(e)}function pl(n){n.Q_=new w1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Zi(n).start(),n.q_.v_()}function ml(n){return pi(n)&&!Zi(n).n_()&&n.N_.size>0}function pi(n){return Re(n).L_.size===0}function _m(n){n.Q_=void 0}async function wb(n){n.q_.set("Online")}async function Eb(n){n.N_.forEach((e,t)=>{dl(n,e)})}async function Ib(n,e){_m(n),ml(n)?(n.q_.M_(e),pl(n)):n.q_.set("Unknown")}async function Ab(n,e,t){if(n.q_.set("Online"),e instanceof nm&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(n,e)}catch(i){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Gs(n,i)}else if(e instanceof Ds?n.Q_.Ke(e):e instanceof tm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ke.min()))try{const i=await hm(n.localStore);t.compareTo(i)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),mm(s,u);const p=new Dn(h.target,u,c,h.sequenceNumber);dl(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){pe("RemoteStore","Failed to raise snapshot:",i),await Gs(n,i)}}async function Gs(n,e,t){if(!Gr(e))throw e;n.L_.add(1),await Xr(n),n.q_.set("Offline"),t||(t=()=>hm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await fo(n)})}function gm(n,e){return e().catch(t=>Gs(n,t,e))}async function po(n){const e=Re(n),t=qn(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kb(e);)try{const r=await ub(e.localStore,i);if(r===null){e.O_.length===0&&t.o_();break}i=r.batchId,Rb(e,r)}catch(r){await Gs(e,r)}ym(e)&&vm(e)}function kb(n){return pi(n)&&n.O_.length<10}function Rb(n,e){n.O_.push(e);const t=qn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ym(n){return pi(n)&&!qn(n).n_()&&n.O_.length>0}function vm(n){qn(n).start()}async function Cb(n){qn(n).p_()}async function Pb(n){const e=qn(n);for(const t of n.O_)e.m_(t.mutations)}async function Sb(n,e,t){const i=n.O_.shift(),r=ol.from(i,e,t);await gm(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await po(n)}async function Nb(n,e){e&&qn(n).V_&&await async function(i,r){if(function(o){return v1(o)&&o!==K.ABORTED}(r.code)){const s=i.O_.shift();qn(i).s_(),await gm(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await po(i)}}(n,e),ym(n)&&vm(n)}async function Nc(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const i=pi(t);t.L_.add(3),await Xr(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await fo(t)}async function Db(n,e){const t=Re(n);e?(t.L_.delete(2),await fo(t)):e||(t.L_.add(2),await Xr(t),t.q_.set("Unknown"))}function Zi(n){return n.K_||(n.K_=function(t,i,r){const s=Re(t);return s.w_(),new gb(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:wb.bind(null,n),Ro:Eb.bind(null,n),mo:Ib.bind(null,n),d_:Ab.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ml(n)?pl(n):n.q_.set("Unknown")):(await n.K_.stop(),_m(n))})),n.K_}function qn(n){return n.U_||(n.U_=function(t,i,r){const s=Re(t);return s.w_(),new yb(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Cb.bind(null,n),mo:Nb.bind(null,n),f_:Pb.bind(null,n),g_:Sb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await po(n)):(await n.U_.stop(),n.O_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class _l{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new _l(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gl(n,e){if(yn("AsyncQueue",`${e}: ${n}`),Gr(n))return new ce(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vi{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=mr(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Dc{constructor(){this.W_=new nt(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Ee():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Hi{constructor(e,t,i,r,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Hi(e,t,Vi.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&so(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Vb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ob{constructor(){this.queries=Vc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const r=Re(t),s=r.queries;r.queries=Vc(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(i)})})(this,new ce(K.ABORTED,"Firestore shutting down"))}}function Vc(){return new Ji(n=>qp(n),so)}async function bm(n,e){const t=Re(n);let i=3;const r=e.query;let s=t.queries.get(r);s?!s.H_()&&e.J_()&&(i=2):(s=new Vb,i=e.J_()?0:1);try{switch(i){case 0:s.z_=await t.onListen(r,!0);break;case 1:s.z_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=gl(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&yl(t)}async function Tm(n,e){const t=Re(n),i=e.query;let r=3;const s=t.queries.get(i);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=e.J_()?0:1:!s.H_()&&e.J_()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Lb(n,e){const t=Re(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(r)&&(i=!0);o.z_=r}}i&&yl(t)}function Mb(n,e,t){const i=Re(n),r=i.queries.get(e);if(r)for(const s of r.j_)s.onError(t);i.queries.delete(e)}function yl(n){n.Y_.forEach(e=>{e.next()})}var ka,Oc;(Oc=ka||(ka={})).ea="default",Oc.Cache="cache";class wm{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Hi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ka.Cache}}/**
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
 */class Em{constructor(e){this.key=e}}class Im{constructor(e){this.key=e}}class Ub{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=De(),this.mutatedKeys=De(),this.Aa=zp(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Dc,r=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,p)=>{const d=r.get(h),g=oo(this.query,p)?p:null,E=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?E!==T&&(i.track({type:3,doc:g}),w=!0):this.ga(d,g)||(i.track({type:2,doc:g}),w=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!d&&g?(i.track({type:0,doc:g}),w=!0):d&&!g&&(i.track({type:1,doc:d}),w=!0,(u||c)&&(a=!0)),w&&(g?(o=o.add(g),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),i.track({type:1,doc:h})}return{Ra:o,fa:i,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(g,E){const T=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return T(g)-T(E)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(i),r=r!=null&&r;const a=t&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Hi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=De(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new Im(i))}),this.da.forEach(i=>{e.has(i)||t.push(new Em(i))}),t}ba(e){this.Ta=e.Ts,this.da=De();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Hi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Bb{constructor(e){this.key=e,this.va=!1}}class jb{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ji(a=>qp(a),so),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(ye.comparator),this.Na=new Map,this.La=new ul,this.Ba={},this.ka=new Map,this.qa=zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qb(n,e,t=!0){const i=Sm(n);let r;const s=i.Fa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await Am(i,e,t,!0),r}async function zb(n,e){const t=Sm(n);await Am(t,e,!0,!1)}async function Am(n,e,t,i){const r=await cb(n.localStore,xt(e)),s=r.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return i&&(a=await Hb(n,e,s,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&pm(n.remoteStore,r),a}async function Hb(n,e,t,i,r){n.Ka=(p,d,g)=>async function(T,w,N,V){let S=w.view.ma(N);S.ns&&(S=await Cc(T.localStore,w.query,!1).then(({documents:R})=>w.view.ma(R,S)));const U=V&&V.targetChanges.get(w.targetId),M=V&&V.targetMismatches.get(w.targetId)!=null,F=w.view.applyChanges(S,T.isPrimaryClient,U,M);return Mc(T,w.targetId,F.wa),F.snapshot}(n,p,d,g);const s=await Cc(n.localStore,e,!0),o=new Ub(e,s.Ts),a=o.ma(s.documents),u=Qr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,u);Mc(n,t,c.wa);const h=new Fb(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function Wb(n,e,t){const i=Re(n),r=i.Fa.get(e),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(o=>!so(o,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Aa(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&fl(i.remoteStore,r.targetId),Ra(i,r.targetId)}).catch(Wr)):(Ra(i,r.targetId),await Aa(i.localStore,r.targetId,!0))}async function Gb(n,e){const t=Re(n),i=t.Fa.get(e),r=t.Ma.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),fl(t.remoteStore,i.targetId))}async function Kb(n,e,t){const i=$b(n);try{const r=await function(o,a){const u=Re(o),c=dt.now(),h=a.reduce((g,E)=>g.add(E.key),De());let p,d;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=vn(),T=De();return u.cs.getEntries(g,h).next(w=>{E=w,E.forEach((N,V)=>{V.isValidDocument()||(T=T.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,E)).next(w=>{p=w;const N=[];for(const V of a){const S=p1(V,p.get(V.key).overlayedDocument);S!=null&&N.push(new Wn(V.key,S,Vp(S.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,N,a)}).next(w=>{d=w;const N=w.applyToLocalDocumentSet(p,T);return u.documentOverlayCache.saveOverlays(g,w.batchId,N)})}).then(()=>({batchId:d.batchId,changes:Wp(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new nt(je)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(i,r.batchId,t),await Yr(i,r.changes),await po(i.remoteStore)}catch(r){const s=gl(r,"Failed to persist write");t.reject(s)}}async function km(n,e){const t=Re(n);try{const i=await ab(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.Na.get(s);o&&(Ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?Ke(o.va):r.removedDocuments.size>0&&(Ke(o.va),o.va=!1))}),await Yr(t,i,e)}catch(i){await Wr(i)}}function Lc(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const u=Re(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const d of p.j_)d.Z_(a)&&(c=!0)}),c&&yl(u)}(i.eventManager,e),r.length&&i.Ca.d_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Qb(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Na.get(e),s=r&&r.key;if(s){let o=new nt(ye.comparator);o=o.insert(s,At.newNoDocument(s,ke.min()));const a=De().add(s),u=new co(ke.min(),new Map,new nt(je),o,a);await km(i,u),i.Oa=i.Oa.remove(s),i.Na.delete(e),vl(i)}else await Aa(i.localStore,e,!1).then(()=>Ra(i,e,t)).catch(Wr)}async function Xb(n,e){const t=Re(n),i=e.batch.batchId;try{const r=await ob(t.localStore,e);Cm(t,i,null),Rm(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Yr(t,r)}catch(r){await Wr(r)}}async function Yb(n,e,t){const i=Re(n);try{const r=await function(o,a){const u=Re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(Ke(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(i.localStore,e);Cm(i,e,t),Rm(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Yr(i,r)}catch(r){await Wr(r)}}function Rm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Cm(n,e,t){const i=Re(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.Ba[i.currentUser.toKey()]=r}}function Ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||Pm(n,i)})}function Pm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(fl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),vl(n))}function Mc(n,e,t){for(const i of t)i instanceof Em?(n.La.addReference(i.key,e),Jb(n,i)):i instanceof Im?(pe("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||Pm(n,i.key)):Ee()}function Jb(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(pe("SyncEngine","New document in limbo: "+t),n.xa.add(i),vl(n))}function vl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(xe.fromString(e)),i=n.qa.next();n.Na.set(i,new Bb(t)),n.Oa=n.Oa.insert(t,i),pm(n.remoteStore,new Dn(xt(il(t.path)),i,"TargetPurposeLimboResolution",Za.oe))}}async function Yr(n,e,t){const i=Re(n),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach((a,u)=>{o.push(i.Ka(u,e,t).then(c=>{var h;if((c||t)&&i.isPrimaryClient){const p=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;i.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){r.push(c);const p=hl.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),i.Ca.d_(r),await async function(u,c){const h=Re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>X.forEach(c,d=>X.forEach(d.$i,g=>h.persistence.referenceDelegate.addReference(p,d.targetId,g)).next(()=>X.forEach(d.Ui,g=>h.persistence.referenceDelegate.removeReference(p,d.targetId,g)))))}catch(p){if(!Gr(p))throw p;pe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const d=p.targetId;if(!p.fromCache){const g=h.os.get(d),E=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(d,T)}}}(i.localStore,s))}async function Zb(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const i=await cm(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new ce(K.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Yr(t,i.hs)}}function xb(n,e){const t=Re(n),i=t.Na.get(e);if(i&&i.va)return De().add(i.key);{let r=De();const s=t.Ma.get(e);if(!s)return r;for(const o of s){const a=t.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function Sm(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=km.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qb.bind(null,e),e.Ca.d_=Lb.bind(null,e.eventManager),e.Ca.$a=Mb.bind(null,e.eventManager),e}function $b(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ho(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return sb(this.persistence,new ib,e.initialUser,this.serializer)}Ga(e){return new eb(cl.Zr,this.serializer)}Wa(e){return new fb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class Ca{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Lc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zb.bind(null,this.syncEngine),await Db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ob}()}createDatastore(e){const t=ho(e.databaseInfo.databaseId),i=function(s){return new _b(s)}(e.databaseInfo);return function(s,o,a,u){return new vb(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,o,a){return new Tb(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Lc(this.syncEngine,t,0),function(){return Sc.D()?new Sc:new db}())}createSyncEngine(e,t){return function(r,s,o,a,u,c,h){const p=new jb(r,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const s=Re(r);pe("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ca.provider={build:()=>new Ca};/**
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
 */class Nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class eT{constructor(e,t,i,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=It.UNAUTHENTICATED,this.clientId=Sp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{pe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(pe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=gl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function xo(n,e){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await cm(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Uc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tT(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Nc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Nc(e.remoteStore,r)),n._onlineComponents=e}async function tT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{await xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===K.FAILED_PRECONDITION||r.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Mi("Error using user provided cache. Falling back to memory cache: "+t),await xo(n,new Ks)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),await xo(n,new Ks);return n._offlineComponents}async function Dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),await Uc(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),await Uc(n,new Ca))),n._onlineComponents}function nT(n){return Dm(n).then(e=>e.syncEngine)}async function Pa(n){const e=await Dm(n),t=e.eventManager;return t.onListen=qb.bind(null,e.syncEngine),t.onUnlisten=Wb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gb.bind(null,e.syncEngine),t}function iT(n,e,t={}){const i=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Nm({next:d=>{h.Za(),o.enqueueAndForget(()=>Tm(s,p)),d.fromCache&&u.source==="server"?c.reject(new ce(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),p=new wm(a,h,{includeMetadataChanges:!0,_a:!0});return bm(s,p)}(await Pa(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Vm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Fc=new Map;/**
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
 */function Om(n,e,t){if(!t)throw new ce(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rT(n,e,t,i){if(e===!0&&i===!0)throw new ce(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bc(n){if(!ye.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jc(n){if(ye.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mo(n);throw new ce(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class qc{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _o{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new I0;switch(i.type){case"firstParty":return new C0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Fc.get(t);i&&(pe("ComponentProvider","Removing Datastore"),Fc.delete(t),i.terminate())}(this),Promise.resolve()}}function sT(n,e,t,i={}){var r;const s=(n=qt(n,_o))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,u;if(typeof i.mockUserToken=="string")a=i.mockUserToken,u=It.MOCK_USER;else{a=jd(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new ce(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}n._authCredentials=new A0(new Pp(a,u))}}/**
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
 */class Gn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Gn(this.firestore,e,this._query)}}class St{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Un extends Gn{constructor(e,t,i){super(e,t,il(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new ye(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function $e(n,e,...t){if(n=tt(n),Om("collection","path",e),n instanceof _o){const i=xe.fromString(e,...t);return jc(i),new Un(n,null,i)}{if(!(n instanceof St||n instanceof Un))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(xe.fromString(e,...t));return jc(i),new Un(n.firestore,null,i)}}function et(n,e,...t){if(n=tt(n),arguments.length===1&&(e=Sp.newId()),Om("doc","path",e),n instanceof _o){const i=xe.fromString(e,...t);return Bc(i),new St(n,null,new ye(i))}{if(!(n instanceof St||n instanceof Un))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(xe.fromString(e,...t));return Bc(i),new St(n.firestore,n instanceof Un?n.converter:null,new ye(i))}}/**
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
 */class zc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fm(this,"async_queue_retry"),this.Vu=()=>{const i=Zo();i&&pe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Zo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Zo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Mn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gr(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw yn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=_l.createAndSchedule(this,e,t,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&Ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Hc(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class zn extends _o{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new zc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zc(e),this._firestoreClient=void 0,await e}}}function oT(n,e){const t=typeof n=="object"?n:Fa(),i=typeof n=="string"?n:"(default)",r=eo(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Ud("firestore");s&&sT(r,...s)}return r}function bl(n){if(n._terminated)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aT(n),n._firestoreClient}function aT(n){var e,t,i;const r=n._freezeSettings(),s=function(a,u,c,h){return new q0(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Vm(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new eT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(bt.fromBase64String(e))}catch(t){throw new ce(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class go{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mi{constructor(e){this._methodName=e}}/**
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
 */class Tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
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
 */class wl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const lT=/^__.*__$/;class uT{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kr(e,this.data,t,this.fieldTransforms)}}class Lm{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class yo{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:i,xu:!1});return r.Ou(e),r}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Mm(this.Cu)&&lT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cT{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ho(e)}Qu(e,t,i,r=!1){return new yo({Cu:e,methodName:t,qu:i,path:yt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vo(n){const e=n._freezeSettings(),t=ho(n._databaseId);return new cT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Um(n,e,t,i,r,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,r);Rl("Data must be an object, but it was:",o,i);const a=Bm(i,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const d=Sa(e,p,t);if(!o.contains(d))throw new ce(K.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qm(h,d)||h.push(d)}u=new Lt(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new uT(new Nt(a),u,c)}class bo extends mi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bo}}function Fm(n,e,t){return new yo({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class El extends mi{_toFieldTransform(e){return new lo(e.path,new Or)}isEqual(e){return e instanceof El}}class Il extends mi{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Fm(this,e,!0),i=this.Ku.map(s=>_i(s,t)),r=new ji(i);return new lo(e.path,r)}isEqual(e){return e instanceof Il&&Oi(this.Ku,e.Ku)}}class Al extends mi{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Fm(this,e,!0),i=this.Ku.map(s=>_i(s,t)),r=new qi(i);return new lo(e.path,r)}isEqual(e){return e instanceof Al&&Oi(this.Ku,e.Ku)}}class kl extends mi{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Lr(e.serializer,Qp(e.serializer,this.$u));return new lo(e.path,t)}isEqual(e){return e instanceof kl&&this.$u===e.$u}}function hT(n,e,t,i){const r=n.Qu(1,e,t);Rl("Data must be an object, but it was:",r,i);const s=[],o=Nt.empty();di(i,(u,c)=>{const h=Cl(e,u,t);c=tt(c);const p=r.Nu(h);if(c instanceof bo)s.push(h);else{const d=_i(c,p);d!=null&&(s.push(h),o.set(h,d))}});const a=new Lt(s);return new Lm(o,a,r.fieldTransforms)}function fT(n,e,t,i,r,s){const o=n.Qu(1,e,t),a=[Sa(e,i,t)],u=[r];if(s.length%2!=0)throw new ce(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Sa(e,s[d])),u.push(s[d+1]);const c=[],h=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!qm(c,a[d])){const g=a[d];let E=u[d];E=tt(E);const T=o.Nu(g);if(E instanceof bo)c.push(g);else{const w=_i(E,T);w!=null&&(c.push(g),h.set(g,w))}}const p=new Lt(c);return new Lm(h,p,o.fieldTransforms)}function dT(n,e,t,i=!1){return _i(t,n.Qu(i?4:3,e))}function _i(n,e){if(jm(n=tt(n)))return Rl("Unsupported field value:",e,n),Bm(n,e);if(n instanceof mi)return function(i,r){if(!Mm(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let u=_i(a,r.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(i,r){if((i=tt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Qp(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=dt.fromDate(i);return{timestampValue:Ws(r.serializer,s)}}if(i instanceof dt){const s=new dt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ws(r.serializer,s)}}if(i instanceof Tl)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Wi)return{bytesValue:im(r.serializer,i._byteString)};if(i instanceof St){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ll(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof wl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return rl(a.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${mo(i)}`)}(n,e)}function Bm(n,e){const t={};return Np(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(n,(i,r)=>{const s=_i(r,e.Mu(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function jm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Tl||n instanceof Wi||n instanceof St||n instanceof mi||n instanceof wl)}function Rl(n,e,t){if(!jm(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const i=mo(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Sa(n,e,t){if((e=tt(e))instanceof go)return e._internalPath;if(typeof e=="string")return Cl(n,e);throw Qs("Field path arguments must be of type string or ",n,!1,void 0,t)}const pT=new RegExp("[~\\*/\\[\\]]");function Cl(n,e,t){if(e.search(pT)>=0)throw Qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new go(...e.split("."))._internalPath}catch{throw Qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qs(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${i}`),o&&(u+=` in document ${r}`),u+=")"),new ce(K.INVALID_ARGUMENT,a+n+u)}function qm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class zm{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(To("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mT extends zm{data(){return super.data()}}function To(n,e){return typeof e=="string"?Cl(n,e):e instanceof go?e._internalPath:e._delegate._internalPath}/**
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
 */function Hm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pl{}class Wm extends Pl{}function Ht(n,e,...t){let i=[];e instanceof Pl&&i.push(e),i=i.concat(t),function(s){const o=s.filter(u=>u instanceof Sl).length,a=s.filter(u=>u instanceof wo).length;if(o>1||o>0&&a>0)throw new ce(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class wo extends Wm{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new wo(e,t,i)}_apply(e){const t=this._parse(e);return Gm(e._query,t),new Gn(e.firestore,e.converter,va(e._query,t))}_parse(e){const t=vo(e.firestore);return function(s,o,a,u,c,h,p){let d;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ce(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Gc(p,h);const g=[];for(const E of p)g.push(Wc(u,s,E));d={arrayValue:{values:g}}}else d=Wc(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Gc(p,h),d=dT(a,o,p,h==="in"||h==="not-in");return ct.create(c,h,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Na(n,e,t){const i=e,r=To("where",n);return wo._create(r,i,t)}class Sl extends Pl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sl(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const u of a)Gm(o,u),o=va(o,u)}(e._query,t),new Gn(e.firestore,e.converter,va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nl extends Wm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Nl(e,t)}_apply(e){const t=function(r,s,o){if(r.startAt!==null)throw new ce(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new ce(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vr(s,o)}(e._query,this._field,this._direction);return new Gn(e.firestore,e.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new Yi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Pn(n,e="asc"){const t=e,i=To("orderBy",n);return Nl._create(i,t)}function Wc(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new ce(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jp(e)&&t.indexOf("/")!==-1)throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(xe.fromString(t));if(!ye.isDocumentKey(i))throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return hc(n,new ye(i))}if(t instanceof St)return hc(n,t._key);throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mo(t)}.`)}function Gc(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gm(n,e){const t=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _T{convertValue(e,t="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return di(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertVectorValue(e){var t,i,r;const s=(r=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>at(o.doubleValue));return new wl(s)}convertGeoPoint(e){return new Tl(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=$a(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=jn(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=xe.fromString(e);Ke(um(i));const r=new Nr(i.get(1),i.get(3)),s=new ye(i.popFirst(5));return r.isEqual(t)||yn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Km(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qm extends zm{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(To("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Vs extends Qm{data(e={}){return super.data(e)}}class Xm{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Vs(this._firestore,this._userDataWriter,i.key,i,new gr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const u=new Vs(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Vs(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:gT(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}class Dl extends _T{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function Ci(n){n=qt(n,Gn);const e=qt(n.firestore,zn),t=bl(e),i=new Dl(e);return Hm(n._query),iT(t,n._query).then(r=>new Xm(e,i,n,r))}function Xs(n,e,t){n=qt(n,St);const i=qt(n.firestore,zn),r=Km(n.converter,e);return Eo(i,[Um(vo(i),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,jt.none())])}function pn(n,e,t,...i){n=qt(n,St);const r=qt(n.firestore,zn),s=vo(r);let o;return o=typeof(e=tt(e))=="string"||e instanceof go?fT(s,"updateDoc",n._key,e,t,i):hT(s,"updateDoc",n._key,e),Eo(r,[o.toMutation(n._key,jt.exists(!0))])}function Bt(n){return Eo(qt(n.firestore,zn),[new sl(n._key,jt.none())])}function ci(n,e){const t=qt(n.firestore,zn),i=et(n),r=Km(n.converter,e);return Eo(t,[Um(vo(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,jt.exists(!1))]).then(()=>i)}function en(n,...e){var t,i,r;n=tt(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Hc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Hc(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),e[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let u,c,h;if(n instanceof St)c=qt(n.firestore,zn),h=il(n._key.path),u={next:p=>{e[o]&&e[o](yT(c,n,p))},error:e[o+1],complete:e[o+2]};else{const p=qt(n,Gn);c=qt(p.firestore,zn),h=p._query;const d=new Dl(c);u={next:g=>{e[o]&&e[o](new Xm(c,d,p,g))},error:e[o+1],complete:e[o+2]},Hm(n._query)}return function(d,g,E,T){const w=new Nm(T),N=new wm(g,w,E);return d.asyncQueue.enqueueAndForget(async()=>bm(await Pa(d),N)),()=>{w.Za(),d.asyncQueue.enqueueAndForget(async()=>Tm(await Pa(d),N))}}(bl(c),h,a,u)}function Eo(n,e){return function(i,r){const s=new Mn;return i.asyncQueue.enqueueAndForget(async()=>Kb(await nT(i),r,s)),s.promise}(bl(n),e)}function yT(n,e,t){const i=t.docs.get(e._key),r=new Dl(n);return new Qm(n,r,e._key,i,new gr(t.hasPendingWrites,t.fromCache),e.converter)}function Gt(){return new El("serverTimestamp")}function vT(...n){return new Il("arrayUnion",n)}function bT(...n){return new Al("arrayRemove",n)}function Kc(n){return new kl("increment",n)}(function(e,t=!0){(function(r){Xi=r})(fi),si(new Fn("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new zn(new k0(i.getProvider("auth-internal")),new S0(i.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ce(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(c.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Jt(oc,"4.7.3",e),Jt(oc,"4.7.3","esm2017")})();/**
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
 */const Ym="firebasestorage.googleapis.com",Jm="storageBucket",TT=2*60*1e3,wT=10*60*1e3;/**
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
 */class st extends rn{constructor(e,t,i=0){super($o(e),`Firebase Storage: ${t} (${$o(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $o(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function $o(n){return"storage/"+n}function Vl(){const n="An unknown error occurred, please check the error payload for server response.";return new st(rt.UNKNOWN,n)}function ET(n){return new st(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function IT(n){return new st(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(rt.UNAUTHENTICATED,n)}function kT(){return new st(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RT(n){return new st(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function CT(){return new st(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PT(){return new st(rt.CANCELED,"User canceled the upload/download.")}function ST(n){return new st(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function NT(n){return new st(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function DT(){return new st(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Jm+"' property when initializing the app?")}function VT(){return new st(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OT(){return new st(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LT(n){return new st(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Da(n){return new st(rt.INVALID_ARGUMENT,n)}function Zm(){return new st(rt.APP_DELETED,"The Firebase app was deleted.")}function MT(n){return new st(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ir(n,e){return new st(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function dr(n){throw new st(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Mt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Mt.makeFromUrl(e,t)}catch{return new Mt(e,"")}if(i.path==="")return i;throw NT(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function c(U){U.path_=decodeURIComponent(U.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${p}/${h}/b/${r}/o${d}`,"i"),E={bucket:1,path:3},T=t===Ym?"(?:storage.googleapis.com|storage.cloud.google.com)":t,w="([^?#]*)",N=new RegExp(`^https?://${T}/${r}/${w}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:g,indices:E,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let U=0;U<S.length;U++){const M=S[U],F=M.regex.exec(e);if(F){const R=F[M.indices.bucket];let A=F[M.indices.path];A||(A=""),i=new Mt(R,A),M.postModify(i);break}}if(i==null)throw ST(e);return i}}class UT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FT(n,e,t){let i=1,r=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...w){c||(c=!0,e.apply(null,w))}function p(w){r=setTimeout(()=>{r=null,n(g,u())},w)}function d(){s&&clearTimeout(s)}function g(w,...N){if(c){d();return}if(w){d(),h.call(null,w,...N);return}if(u()||o){d(),h.call(null,w,...N);return}i<64&&(i*=2);let S;a===1?(a=2,S=0):S=(i+Math.random())*1e3,p(S)}let E=!1;function T(w){E||(E=!0,d(),!c&&(r!==null?(w||(a=2),clearTimeout(r),p(0)):w||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,T(!0)},t),T}function BT(n){n(!1)}/**
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
 */function jT(n){return n!==void 0}function qT(n){return typeof n=="object"&&!Array.isArray(n)}function Ol(n){return typeof n=="string"||n instanceof String}function Qc(n){return Ll()&&n instanceof Blob}function Ll(){return typeof Blob<"u"}function Xc(n,e,t,i){if(i<e)throw Da(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Da(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Io(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function xm(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}var ri;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function zT(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||r||s}/**
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
 */class HT{constructor(e,t,i,r,s,o,a,u,c,h,p,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,E)=>{this.resolve_=g,this.reject_=E,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new ws(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ri.NO_ERROR,u=s.getStatus();if(!a||zT(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ri.ABORT;i(!1,new ws(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;i(!0,new ws(c,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());jT(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Vl();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(r.canceled){const u=this.appDelete_?Zm():PT();o(u)}else{const u=CT();o(u)}};this.canceled_?t(!1,new ws(!1,null,!0)):this.backoffId_=FT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ws{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function WT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function GT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function QT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function XT(n,e,t,i,r,s,o=!0){const a=xm(n.urlParams),u=n.url+a,c=Object.assign({},n.headers);return KT(c,e),WT(c,t),GT(c,s),QT(c,i),new HT(u,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function YT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JT(...n){const e=YT();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Ll())return new Blob(n);throw new st(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function xT(n){if(typeof atob>"u")throw LT("base-64");return atob(n)}/**
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
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ea{constructor(e,t){this.data=e,this.contentType=t||null}}function $T(n,e){switch(n){case Yt.RAW:return new ea($m(e));case Yt.BASE64:case Yt.BASE64URL:return new ea(e_(n,e));case Yt.DATA_URL:return new ea(tw(e),nw(e))}throw Vl()}function $m(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=i,o=n.charCodeAt(++t);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function ew(n){let e;try{e=decodeURIComponent(n)}catch{throw Ir(Yt.DATA_URL,"Malformed data URL.")}return $m(e)}function e_(n,e){switch(n){case Yt.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw Ir(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw Ir(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=xT(e)}catch(r){throw r.message.includes("polyfill")?r:Ir(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}class t_{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ir(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=iw(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function tw(n){const e=new t_(n);return e.base64?e_(Yt.BASE64,e.rest):ew(e.rest)}function nw(n){return new t_(n).contentType}function iw(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Sn{constructor(e,t){let i=0,r="";Qc(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Qc(this.data_)){const i=this.data_,r=ZT(i,e,t);return r===null?null:new Sn(r)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Sn(i,!0)}}static getBlob(...e){if(Ll()){const t=e.map(i=>i instanceof Sn?i.data_:i);return new Sn(JT.apply(null,t))}else{const t=e.map(o=>Ol(o)?$T(Yt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new Sn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function n_(n){let e;try{e=JSON.parse(n)}catch{return null}return qT(e)?e:null}/**
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
 */function rw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sw(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function i_(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function ow(n,e){return e}class Pt{constructor(e,t,i,r){this.server=e,this.local=t||e,this.writable=!!i,this.xform=r||ow}}let Es=null;function aw(n){return!Ol(n)||n.length<2?n:i_(n)}function r_(){if(Es)return Es;const n=[];n.push(new Pt("bucket")),n.push(new Pt("generation")),n.push(new Pt("metageneration")),n.push(new Pt("name","fullPath",!0));function e(s,o){return aw(o)}const t=new Pt("name");t.xform=e,n.push(t);function i(s,o){return o!==void 0?Number(o):o}const r=new Pt("size");return r.xform=i,n.push(r),n.push(new Pt("timeCreated")),n.push(new Pt("updated")),n.push(new Pt("md5Hash",null,!0)),n.push(new Pt("cacheControl",null,!0)),n.push(new Pt("contentDisposition",null,!0)),n.push(new Pt("contentEncoding",null,!0)),n.push(new Pt("contentLanguage",null,!0)),n.push(new Pt("contentType",null,!0)),n.push(new Pt("metadata","customMetadata",!0)),Es=n,Es}function lw(n,e){function t(){const i=n.bucket,r=n.fullPath,s=new Mt(i,r);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function uw(n,e,t){const i={};i.type="file";const r=t.length;for(let s=0;s<r;s++){const o=t[s];i[o.local]=o.xform(i,e[o.server])}return lw(i,n),i}function s_(n,e,t){const i=n_(e);return i===null?null:uw(n,i,t)}function cw(n,e,t,i){const r=n_(e);if(r===null||!Ol(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=n.bucket,p=n.fullPath,d="/b/"+o(h)+"/o/"+o(p),g=Io(d,t,i),E=xm({alt:"media",token:c});return g+E})[0]}function hw(n,e){const t={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Ml{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function o_(n){if(!n)throw Vl()}function fw(n,e){function t(i,r){const s=s_(n,r,e);return o_(s!==null),s}return t}function dw(n,e){function t(i,r){const s=s_(n,r,e);return o_(s!==null),cw(s,r,n.host,n._protocol)}return t}function a_(n){function e(t,i){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=kT():r=AT():t.getStatus()===402?r=IT(n.bucket):t.getStatus()===403?r=RT(n.path):r=i,r.status=t.getStatus(),r.serverResponse=i.serverResponse,r}return e}function l_(n){const e=a_(n);function t(i,r){let s=e(i,r);return i.getStatus()===404&&(s=ET(n.path)),s.serverResponse=r.serverResponse,s}return t}function pw(n,e,t){const i=e.fullServerUrl(),r=Io(i,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Ml(r,s,dw(n,t),o);return a.errorHandler=l_(e),a}function mw(n,e){const t=e.fullServerUrl(),i=Io(t,n.host,n._protocol),r="DELETE",s=n.maxOperationRetryTime;function o(u,c){}const a=new Ml(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=l_(e),a}function _w(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function gw(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=_w(null,e)),i}function yw(n,e,t,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let U=0;U<2;U++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=gw(e,i,r),h=hw(c,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=Sn.getBlob(p,i,d);if(g===null)throw VT();const E={name:c.fullPath},T=Io(s,n.host,n._protocol),w="POST",N=n.maxUploadRetryTime,V=new Ml(T,w,fw(n,t),N);return V.urlParams=E,V.headers=o,V.body=g.uploadData(),V.errorHandler=a_(e),V}class vw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,r){if(this.sent_)throw dr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bw extends vw{initXhr(){this.xhr_.responseType="text"}}function Ul(){return new bw}/**
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
 */class hi{constructor(e,t){this._service=e,t instanceof Mt?this._location=t:this._location=Mt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hi(e,t)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i_(this._location.path)}get storage(){return this._service}get parent(){const e=rw(this._location.path);if(e===null)return null;const t=new Mt(this._location.bucket,e);return new hi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw MT(e)}}function Tw(n,e,t){n._throwIfRoot("uploadBytes");const i=yw(n.storage,n._location,r_(),new Sn(e,!0),t);return n.storage.makeRequestWithTokens(i,Ul).then(r=>({metadata:r,ref:n}))}function ww(n){n._throwIfRoot("getDownloadURL");const e=pw(n.storage,n._location,r_());return n.storage.makeRequestWithTokens(e,Ul).then(t=>{if(t===null)throw OT();return t})}function Ew(n){n._throwIfRoot("deleteObject");const e=mw(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ul)}function Iw(n,e){const t=sw(n._location.path,e),i=new Mt(n._location.bucket,t);return new hi(n.storage,i)}/**
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
 */function Aw(n){return/^[A-Za-z]+:\/\//.test(n)}function kw(n,e){return new hi(n,e)}function u_(n,e){if(n instanceof Fl){const t=n;if(t._bucket==null)throw DT();const i=new hi(t,t._bucket);return e!=null?u_(i,e):i}else return e!==void 0?Iw(n,e):n}function Rw(n,e){if(e&&Aw(e)){if(n instanceof Fl)return kw(n,e);throw Da("To use ref(service, url), the first argument must be a Storage instance.")}else return u_(n,e)}function Yc(n,e){const t=e==null?void 0:e[Jm];return t==null?null:Mt.makeFromBucketSpec(t,n)}function Cw(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:jd(r,n.app.options.projectId))}class Fl{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Ym,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TT,this._maxUploadRetryTime=wT,this._requests=new Set,r!=null?this._bucket=Mt.makeFromBucketSpec(r,this._host):this._bucket=Yc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=Yc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hi(this,e)}_makeRequest(e,t,i,r,s=!0){if(this._deleted)return new UT(Zm());{const o=XT(e,this._appId,i,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const Jc="@firebase/storage",Zc="0.13.2";/**
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
 */const c_="storage";function Pw(n,e,t){return n=tt(n),Tw(n,e,t)}function Sw(n){return n=tt(n),ww(n)}function xc(n){return n=tt(n),Ew(n)}function ta(n,e){return n=tt(n),Rw(n,e)}function Nw(n=Fa(),e){n=tt(n);const i=eo(n,c_).getImmediate({identifier:e}),r=Ud("storage");return r&&Dw(i,...r),i}function Dw(n,e,t,i={}){Cw(n,e,t,i)}function Vw(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Fl(t,i,r,e,fi)}function Ow(){si(new Fn(c_,Vw,"PUBLIC").setMultipleInstances(!0)),Jt(Jc,Zc,""),Jt(Jc,Zc,"esm2017")}Ow();const Lw={apiKey:"AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0",authDomain:"vacation-project-001.firebaseapp.com",projectId:"vacation-project-001",storageBucket:"vacation-project-001.firebasestorage.app",messagingSenderId:"378066109890",appId:"1:378066109890:web:ff054f2f5bb97d3082825b"},Bl=Hd(Lw),Va=w0(Bl),Ae=oT(Bl),na=Nw(Bl),xi=Dd(null);cv(Va,n=>xi.set(n));const ti=Dd(null);function $c(n,e,t){const i=n.slice();return i[23]=e[t],i}function Mw(n){let e,t=Ce(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=th($c(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);b(r,e,s)},p(r,s){if(s&7361){t=Ce(r[0]);let o;for(o=0;o<t.length;o+=1){const a=$c(r,t,o);i[o]?i[o].p(a,s):(i[o]=th(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function Uw(n){let e;return{c(){e=y("p"),e.textContent="참여 중인 그룹이 없습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function eh(n){let e;return{c(){e=y("span"),e.textContent="← 현재 선택됨"},m(t,i){b(t,e,i)},d(t){t&&v(e)}}}function Fw(n){let e,t,i;function r(){return n[15](n[23])}return{c(){e=y("button"),e.textContent="나가기"},m(s,o){b(s,e,o),t||(i=W(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function Bw(n){let e,t,i;function r(){return n[14](n[23])}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){b(s,e,o),t||(i=W(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function th(n){var k;let e,t,i=n[23].name+"",r,s,o,a,u,c,h=n[23].inviteCode+"",p,d,g,E,T,w,N,V,S,U,M=((k=n[6])==null?void 0:k.id)===n[23].id&&eh();function F(){return n[13](n[23])}function R(C,L){return C[23].createdBy===C[7].uid?Bw:Fw}let A=R(n),I=A(n);return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),M&&M.c(),o=O(),a=y("br"),u=B(`
      초대 코드: `),c=y("code"),p=B(h),d=O(),g=y("br"),E=y("br"),T=O(),w=y("button"),w.textContent="이 그룹으로 →",N=O(),I.c(),V=O(),q(e,"class","card")},m(C,L){b(C,e,L),m(e,t),m(t,r),m(e,s),M&&M.m(e,null),m(e,o),m(e,a),m(e,u),m(e,c),m(c,p),m(e,d),m(e,g),m(e,E),m(e,T),m(e,w),m(e,N),I.m(e,null),m(e,V),S||(U=W(w,"click",F),S=!0)},p(C,L){var D;n=C,L&1&&i!==(i=n[23].name+"")&&Z(r,i),((D=n[6])==null?void 0:D.id)===n[23].id?M||(M=eh(),M.c(),M.m(e,o)):M&&(M.d(1),M=null),L&1&&h!==(h=n[23].inviteCode+"")&&Z(p,h),A===(A=R(n))&&I?I.p(n,L):(I.d(1),I=A(n),I&&(I.c(),I.m(e,V)))},d(C){C&&v(e),M&&M.d(),I.d(),S=!1,U()}}}function nh(n){let e,t,i,r,s;return{c(){e=y("button"),e.textContent="+ 새 그룹 만들기",t=O(),i=y("button"),i.textContent="초대 코드로 참여"},m(o,a){b(o,e,a),b(o,t,a),b(o,i,a),r||(s=[W(e,"click",n[16]),W(i,"click",n[17])],r=!0)},p:Oe,d(o){o&&(v(e),v(t),v(i)),r=!1,Xe(s)}}}function ih(n){let e,t,i,r,s,o,a,u,c,h,p,d;return{c(){e=y("h3"),e.textContent="새 그룹 만들기",t=O(),i=y("input"),r=O(),s=y("br"),o=y("br"),a=O(),u=y("button"),u.textContent="만들기",c=O(),h=y("button"),h.textContent="취소",q(i,"placeholder","그룹 이름 (예: 2025 제주 여행)"),$(i,"width","100%")},m(g,E){b(g,e,E),b(g,t,E),b(g,i,E),G(i,n[3]),b(g,r,E),b(g,s,E),b(g,o,E),b(g,a,E),b(g,u,E),b(g,c,E),b(g,h,E),p||(d=[W(i,"input",n[18]),W(u,"click",n[8]),W(h,"click",n[19])],p=!0)},p(g,E){E&8&&i.value!==g[3]&&G(i,g[3])},d(g){g&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u),v(c),v(h)),p=!1,Xe(d)}}}function rh(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T=n[5]&&sh(n);return{c(){e=y("h3"),e.textContent="초대 코드로 참여",t=O(),i=y("input"),r=O(),s=y("br"),o=y("br"),a=O(),u=y("button"),u.textContent="참여하기",c=O(),h=y("button"),h.textContent="취소",p=O(),T&&T.c(),d=qe(),q(i,"placeholder","초대 코드 6자리")},m(w,N){b(w,e,N),b(w,t,N),b(w,i,N),G(i,n[4]),b(w,r,N),b(w,s,N),b(w,o,N),b(w,a,N),b(w,u,N),b(w,c,N),b(w,h,N),b(w,p,N),T&&T.m(w,N),b(w,d,N),g||(E=[W(i,"input",n[20]),W(u,"click",n[9]),W(h,"click",n[21])],g=!0)},p(w,N){N&16&&i.value!==w[4]&&G(i,w[4]),w[5]?T?T.p(w,N):(T=sh(w),T.c(),T.m(d.parentNode,d)):T&&(T.d(1),T=null)},d(w){w&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u),v(c),v(h),v(p),v(d)),T&&T.d(w),g=!1,Xe(E)}}}function sh(n){let e,t;return{c(){e=y("p"),t=B(n[5]),$(e,"color","red")},m(i,r){b(i,e,r),m(e,t)},p(i,r){r&32&&Z(t,i[5])},d(i){i&&v(e)}}}function jw(n){let e,t,i,r,s,o,a,u;function c(T,w){return T[0].length===0?Uw:Mw}let h=c(n),p=h(n),d=!n[1]&&!n[2]&&nh(n),g=n[1]&&ih(n),E=n[2]&&rh(n);return{c(){e=y("h2"),e.textContent="내 그룹",t=O(),p.c(),i=O(),r=y("hr"),s=O(),d&&d.c(),o=O(),g&&g.c(),a=O(),E&&E.c(),u=qe()},m(T,w){b(T,e,w),b(T,t,w),p.m(T,w),b(T,i,w),b(T,r,w),b(T,s,w),d&&d.m(T,w),b(T,o,w),g&&g.m(T,w),b(T,a,w),E&&E.m(T,w),b(T,u,w)},p(T,[w]){h===(h=c(T))&&p?p.p(T,w):(p.d(1),p=h(T),p&&(p.c(),p.m(i.parentNode,i))),!T[1]&&!T[2]?d?d.p(T,w):(d=nh(T),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),T[1]?g?g.p(T,w):(g=ih(T),g.c(),g.m(a.parentNode,a)):g&&(g.d(1),g=null),T[2]?E?E.p(T,w):(E=rh(T),E.c(),E.m(u.parentNode,u)):E&&(E.d(1),E=null)},i:Oe,o:Oe,d(T){T&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u)),p.d(T),d&&d.d(T),g&&g.d(T),E&&E.d(T)}}}function qw(){return Math.random().toString(36).slice(2,8).toUpperCase()}function zw(n,e,t){let i,r;mn(n,ti,k=>t(6,i=k)),mn(n,xi,k=>t(7,r=k));let s=[],o=!1,a=!1,u="",c="",h="",p;F_(()=>{const k=Ht($e(Ae,"groups"),Na("memberIds","array-contains",r.uid));p=en(k,C=>{t(0,s=C.docs.map(L=>({id:L.id,...L.data()})))})}),xs(()=>p==null?void 0:p());async function d(){if(!u.trim())return;const k=qw(),C=await ci($e(Ae,"groups"),{name:u.trim(),createdBy:r.uid,inviteCode:k,memberIds:[r.uid],createdAt:Gt()});await Xs(et(Ae,"groups",C.id,"members",r.uid),{displayName:r.displayName,joinedAt:Gt()}),t(3,u=""),t(1,o=!1)}async function g(){if(!c.trim())return;t(5,h="");const k=await Ci(Ht($e(Ae,"groups"),Na("inviteCode","==",c.trim().toUpperCase())));if(k.empty){t(5,h="유효하지 않은 초대 코드입니다.");return}const C=k.docs[0];await pn(et(Ae,"groups",C.id),{memberIds:vT(r.uid)}),await Xs(et(Ae,"groups",C.id,"members",r.uid),{displayName:r.displayName,joinedAt:Gt()}),t(4,c=""),t(2,a=!1)}function E(k){ti.set(k),location.hash="#vote"}async function T(k){confirm(`"${k.name}"에서 나가시겠습니까?`)&&(await pn(et(Ae,"groups",k.id),{memberIds:bT(r.uid)}),await Bt(et(Ae,"groups",k.id,"members",r.uid)),(i==null?void 0:i.id)===k.id&&ti.set(null))}async function w(k){confirm(`"${k.name}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`)&&(await Bt(et(Ae,"groups",k.id)),(i==null?void 0:i.id)===k.id&&ti.set(null))}const N=k=>E(k),V=k=>w(k),S=k=>T(k),U=()=>{t(1,o=!0),t(2,a=!1)},M=()=>{t(2,a=!0),t(1,o=!1)};function F(){u=this.value,t(3,u)}const R=()=>{t(1,o=!1),t(3,u="")};function A(){c=this.value,t(4,c)}return[s,o,a,u,c,h,i,r,d,g,E,T,w,N,V,S,U,M,F,R,A,()=>{t(2,a=!1),t(4,c=""),t(5,h="")}]}class oh extends Fr{constructor(e){super(),Ur(this,e,zw,jw,Ki,{})}}const Oa="AIzaSyCoi2snj1M3Ajz7AwVwOagZG1RJRXpGbH0";function Gi(n,e,t,i){if(t&&i)return`https://www.google.com/maps/embed/v1/place?key=${Oa}&q=${t},${i}`;const r=f_(n),s=r?`place_id:${r}`:encodeURIComponent(e);return`https://www.google.com/maps/embed/v1/place?key=${Oa}&q=${s}`}function Hw(n){const t=jl(n).map(h_);if(t.length<2)return null;const i=t[0],r=t[t.length-1],s=t.slice(1,-1).join("|");let o=`https://www.google.com/maps/embed/v1/directions?key=${Oa}&origin=${i}&destination=${r}`;return s&&(o+=`&waypoints=${s}`),o}function Ww(n){const t=jl(n).map(h_);return t.length<2?null:"https://www.google.com/maps/dir/"+t.join("/")}function Gw(n){return n.length-jl(n).length}function Hn(n){return n?/maps\.app\.goo\.gl|goo\.gl\/maps/.test(n):!1}function La(n){const e=ql(n);if(!e)return{lat:null,lng:null};const[t,i]=e.split(",").map(Number);return{lat:t,lng:i}}function h_(n){var e;return n.lat&&n.lng?`${n.lat},${n.lng}`:ql(n.mapUrl)??encodeURIComponent((e=n.placeName)==null?void 0:e.trim())}function jl(n){return n.filter(e=>e.lat&&e.lng||ql(e.mapUrl)||f_(e.mapUrl))}function f_(n){if(!n)return null;const e=n.match(/place_id[=:]([A-Za-z0-9_-]+)/);return e?e[1]:null}function ql(n){if(!n)return null;const e=n.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/)||n.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)||n.match(/ll=(-?\d+\.\d+),(-?\d+\.\d+)/);return e?`${e[1]},${e[2]}`:null}function ah(n,e,t){const i=n.slice();return i[91]=e[t],i}function lh(n,e,t){const i=n.slice();i[91]=e[t],i[97]=t;const r=i[3][i[91].id]||0;i[94]=r;const s=i[17].has(i[91].id);return i[95]=s,i}function uh(n,e,t){const i=n.slice();return i[91]=e[t],i}function ch(n,e,t){const i=n.slice();return i[88]=e[t],i}function hh(n,e,t){const i=n.slice();return i[88]=e[t],i}function fh(n,e,t){const i=n.slice();return i[85]=e[t],i}function Kw(n){let e,t=n[1].title+"",i,r,s,o,a,u,c=Ys(n[1])+"",h,p,d=Nn(n[1])?" 마감":n[1].status==="recruiting"?" 모집중":" 투표중",g,E,T,w,N=n[1].createdBy===n[20].uid&&!Nn(n[1]),V,S,U,M,F,R,A,I,k=n[1].deadline&&dh(n),C=(n[1].voteType==="attraction"||n[1].voteType==="accommodation"||n[1].voteType==="restaurant")&&n[1].linkedDestination&&ph(n),L=N&&mh(n),D=n[13]&&_h(n);function re(z,J){return J[0]&2&&(F=null),z[1].status==="recruiting"?xw:(F==null&&(F=!!Nn(z[1])),F?Zw:Jw)}let ne=re(n,[-1,-1,-1,-1]),ie=ne(n);return{c(){e=y("h2"),i=B(t),r=O(),s=y("button"),s.textContent="← 목록으로",o=O(),a=y("span"),u=B("["),h=B(c),p=B(`]
    `),g=B(d),E=O(),k&&k.c(),T=O(),C&&C.c(),w=O(),L&&L.c(),V=O(),D&&D.c(),S=O(),U=y("hr"),M=O(),ie.c(),R=qe(),$(a,"margin-left","1rem")},m(z,J){b(z,e,J),m(e,i),b(z,r,J),b(z,s,J),b(z,o,J),b(z,a,J),m(a,u),m(a,h),m(a,p),m(a,g),b(z,E,J),k&&k.m(z,J),b(z,T,J),C&&C.m(z,J),b(z,w,J),L&&L.m(z,J),b(z,V,J),D&&D.m(z,J),b(z,S,J),b(z,U,J),b(z,M,J),ie.m(z,J),b(z,R,J),A||(I=W(s,"click",n[36]),A=!0)},p(z,J){J[0]&2&&t!==(t=z[1].title+"")&&Z(i,t),J[0]&2&&c!==(c=Ys(z[1])+"")&&Z(h,c),J[0]&2&&d!==(d=Nn(z[1])?" 마감":z[1].status==="recruiting"?" 모집중":" 투표중")&&Z(g,d),z[1].deadline?k?k.p(z,J):(k=dh(z),k.c(),k.m(T.parentNode,T)):k&&(k.d(1),k=null),(z[1].voteType==="attraction"||z[1].voteType==="accommodation"||z[1].voteType==="restaurant")&&z[1].linkedDestination?C?C.p(z,J):(C=ph(z),C.c(),C.m(w.parentNode,w)):C&&(C.d(1),C=null),J[0]&1048578&&(N=z[1].createdBy===z[20].uid&&!Nn(z[1])),N?L?L.p(z,J):(L=mh(z),L.c(),L.m(V.parentNode,V)):L&&(L.d(1),L=null),z[13]?D?D.p(z,J):(D=_h(z),D.c(),D.m(S.parentNode,S)):D&&(D.d(1),D=null),ne===(ne=re(z,J))&&ie?ie.p(z,J):(ie.d(1),ie=ne(z),ie&&(ie.c(),ie.m(R.parentNode,R)))},d(z){z&&(v(e),v(r),v(s),v(o),v(a),v(E),v(T),v(w),v(V),v(S),v(U),v(M),v(R)),k&&k.d(z),C&&C.d(z),L&&L.d(z),D&&D.d(z),ie.d(z),A=!1,I()}}}function Qw(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I,k,C,L,D,re,ne,ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He,de,se,ge,ee,oe,Ue,ue,Q=(n[6].voteType==="attraction"||n[6].voteType==="accommodation"||n[6].voteType==="restaurant")&&yf(n),he=n[6].voteType==="attraction"&&bf(n);return{c(){e=y("h2"),e.textContent="새 투표 만들기",t=O(),i=y("button"),i.textContent="← 뒤로",r=O(),s=y("hr"),o=O(),a=y("label"),u=B("투표 유형"),c=y("br"),h=O(),p=y("select"),d=y("option"),d.textContent="여행지 투표",g=y("option"),g.textContent="관광지 투표",E=y("option"),E.textContent="숙소 투표",T=y("option"),T.textContent="맛집 투표",w=O(),N=y("br"),V=y("br"),S=O(),Q&&Q.c(),U=O(),M=y("label"),F=B("투표 제목"),R=y("br"),A=O(),I=y("input"),k=O(),C=y("br"),L=y("br"),D=O(),re=y("label"),ne=B("마감 날짜 (선택)"),ie=y("br"),z=O(),J=y("input"),fe=B(`
    
  `),Te=y("label"),me=B("1인당 최대 투표 수"),Se=y("br"),Pe=O(),Ie=y("input"),Me=O(),he&&he.c(),ze=O(),He=y("br"),de=y("br"),se=O(),ge=y("button"),ge.textContent="모집 시작",ee=O(),oe=y("button"),oe.textContent="취소",d.__value="destination",G(d,d.__value),g.__value="attraction",G(g,g.__value),E.__value="accommodation",G(E,E.__value),T.__value="restaurant",G(T,T.__value),n[6].voteType===void 0&&Kt(()=>n[42].call(p)),q(I,"placeholder","예: 여름 여행지 투표"),$(I,"width","100%"),q(J,"type","date"),q(Ie,"type","number"),q(Ie,"min","1"),q(Ie,"max","10"),$(Ie,"width","4rem")},m(ae,ve){b(ae,e,ve),b(ae,t,ve),b(ae,i,ve),b(ae,r,ve),b(ae,s,ve),b(ae,o,ve),b(ae,a,ve),m(a,u),m(a,c),m(a,h),m(a,p),m(p,d),m(p,g),m(p,E),m(p,T),kt(p,n[6].voteType,!0),b(ae,w,ve),b(ae,N,ve),b(ae,V,ve),b(ae,S,ve),Q&&Q.m(ae,ve),b(ae,U,ve),b(ae,M,ve),m(M,F),m(M,R),m(M,A),m(M,I),G(I,n[6].title),b(ae,k,ve),b(ae,C,ve),b(ae,L,ve),b(ae,D,ve),b(ae,re,ve),m(re,ne),m(re,ie),m(re,z),m(re,J),G(J,n[6].deadline),b(ae,fe,ve),b(ae,Te,ve),m(Te,me),m(Te,Se),m(Te,Pe),m(Te,Ie),G(Ie,n[6].maxVotesPerUser),b(ae,Me,ve),he&&he.m(ae,ve),b(ae,ze,ve),b(ae,He,ve),b(ae,de,ve),b(ae,se,ve),b(ae,ge,ve),b(ae,ee,ve),b(ae,oe,ve),Ue||(ue=[W(i,"click",n[36]),W(p,"change",n[42]),W(I,"input",n[44]),W(J,"input",n[45]),W(Ie,"input",n[46]),W(ge,"click",n[35]),W(oe,"click",n[36])],Ue=!0)},p(ae,ve){ve[0]&64&&kt(p,ae[6].voteType),ae[6].voteType==="attraction"||ae[6].voteType==="accommodation"||ae[6].voteType==="restaurant"?Q?Q.p(ae,ve):(Q=yf(ae),Q.c(),Q.m(U.parentNode,U)):Q&&(Q.d(1),Q=null),ve[0]&64&&I.value!==ae[6].title&&G(I,ae[6].title),ve[0]&64&&G(J,ae[6].deadline),ve[0]&64&&Xt(Ie.value)!==ae[6].maxVotesPerUser&&G(Ie,ae[6].maxVotesPerUser),ae[6].voteType==="attraction"?he?he.p(ae,ve):(he=bf(ae),he.c(),he.m(ze.parentNode,ze)):he&&(he.d(1),he=null)},d(ae){ae&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(w),v(N),v(V),v(S),v(U),v(M),v(k),v(C),v(L),v(D),v(re),v(fe),v(Te),v(Me),v(ze),v(He),v(de),v(se),v(ge),v(ee),v(oe)),Q&&Q.d(ae),he&&he.d(ae),Ue=!1,Xe(ue)}}}function Xw(n){let e,t,i=n[10].name+"",r,s,o,a,u,c,h,p,d;function g(w,N){return w[0].length===0?lE:aE}let E=g(n),T=E(n);return{c(){e=y("h2"),t=B("투표 — "),r=B(i),s=O(),o=y("button"),o.textContent="+ 새 투표 만들기",a=O(),u=y("hr"),c=O(),T.c(),h=qe()},m(w,N){b(w,e,N),m(e,t),m(e,r),b(w,s,N),b(w,o,N),b(w,a,N),b(w,u,N),b(w,c,N),T.m(w,N),b(w,h,N),p||(d=W(o,"click",n[39]),p=!0)},p(w,N){N[0]&1024&&i!==(i=w[10].name+"")&&Z(r,i),E===(E=g(w))&&T?T.p(w,N):(T.d(1),T=E(w),T&&(T.c(),T.m(h.parentNode,h)))},d(w){w&&(v(e),v(s),v(o),v(a),v(u),v(c),v(h)),T.d(w),p=!1,d()}}}function Yw(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function dh(n){let e,t,i=Js(n[1].deadline)+"",r;return{c(){e=y("small"),t=B("· 마감일: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=Js(s[1].deadline)+"")&&Z(r,i)},d(s){s&&v(e)}}}function ph(n){let e,t,i=n[1].linkedDestination+"",r;return{c(){e=y("small"),t=B("· 여행지: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=s[1].linkedDestination+"")&&Z(r,i)},d(s){s&&v(e)}}}function mh(n){let e,t,i;return{c(){e=y("button"),e.textContent="투표 수정",$(e,"margin-left","0.5rem")},m(r,s){b(r,e,s),t||(i=W(e,"click",n[28]),t=!0)},p:Oe,d(r){r&&v(e),t=!1,i()}}}function _h(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T=n[1].status==="recruiting"&&gh(n);return{c(){e=y("div"),T&&T.c(),t=O(),i=y("label"),r=B("마감일"),s=y("br"),o=y("input"),a=y("br"),u=y("br"),c=O(),h=y("button"),h.textContent="저장",p=O(),d=y("button"),d.textContent="취소",q(o,"type","date"),q(e,"class","card"),$(e,"margin-top","0.8rem")},m(w,N){b(w,e,N),T&&T.m(e,null),m(e,t),m(e,i),m(i,r),m(i,s),m(i,o),G(o,n[14].deadline),m(e,a),m(e,u),m(e,c),m(e,h),m(e,p),m(e,d),g||(E=[W(o,"input",n[51]),W(h,"click",n[29]),W(d,"click",n[52])],g=!0)},p(w,N){w[1].status==="recruiting"?T?T.p(w,N):(T=gh(w),T.c(),T.m(e,t)):T&&(T.d(1),T=null),N[0]&16512&&G(o,w[14].deadline)},d(w){w&&v(e),T&&T.d(),g=!1,Xe(E)}}}function gh(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U=n[1].voteType!=="destination"&&yh(n);return{c(){e=y("label"),t=B("제목"),i=y("br"),r=y("input"),s=y("br"),o=y("br"),a=O(),u=y("label"),c=B("1인당 최대 투표 수"),h=y("br"),p=O(),d=y("input"),g=O(),E=y("br"),T=y("br"),w=O(),U&&U.c(),N=qe(),$(r,"width","100%"),q(d,"type","number"),q(d,"min","1"),q(d,"max","10"),$(d,"width","4rem")},m(M,F){b(M,e,F),m(e,t),m(e,i),m(e,r),G(r,n[14].title),b(M,s,F),b(M,o,F),b(M,a,F),b(M,u,F),m(u,c),m(u,h),m(u,p),m(u,d),G(d,n[14].maxVotesPerUser),m(u,g),b(M,E,F),b(M,T,F),b(M,w,F),U&&U.m(M,F),b(M,N,F),V||(S=[W(r,"input",n[48]),W(d,"input",n[49])],V=!0)},p(M,F){F[0]&16512&&r.value!==M[14].title&&G(r,M[14].title),F[0]&16512&&Xt(d.value)!==M[14].maxVotesPerUser&&G(d,M[14].maxVotesPerUser),M[1].voteType!=="destination"?U?U.p(M,F):(U=yh(M),U.c(),U.m(N.parentNode,N)):U&&(U.d(1),U=null)},d(M){M&&(v(e),v(s),v(o),v(a),v(u),v(E),v(T),v(w),v(N)),U&&U.d(M),V=!1,Xe(S)}}}function yh(n){let e,t,i,r,s,o,a,u,c,h,p,d=Ce(n[7]),g=[];for(let E=0;E<d.length;E+=1)g[E]=vh(ch(n,d,E));return{c(){e=y("label"),t=B("연결 여행지"),i=y("br"),r=O(),s=y("select"),o=y("option"),o.textContent="없음";for(let E=0;E<g.length;E+=1)g[E].c();a=O(),u=y("br"),c=y("br"),o.__value="",G(o,o.__value),n[14].linkedDestination===void 0&&Kt(()=>n[50].call(s))},m(E,T){b(E,e,T),m(e,t),m(e,i),m(e,r),m(e,s),m(s,o);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(s,null);kt(s,n[14].linkedDestination,!0),m(e,a),b(E,u,T),b(E,c,T),h||(p=W(s,"change",n[50]),h=!0)},p(E,T){if(T[0]&128){d=Ce(E[7]);let w;for(w=0;w<d.length;w+=1){const N=ch(E,d,w);g[w]?g[w].p(N,T):(g[w]=vh(N),g[w].c(),g[w].m(s,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=d.length}T[0]&16512&&kt(s,E[14].linkedDestination)},d(E){E&&(v(e),v(u),v(c)),lt(g,E),h=!1,p()}}}function vh(n){let e,t=n[88]+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[88],G(e,e.__value)},m(s,o){b(s,e,o),m(e,i)},p(s,o){o[0]&128&&t!==(t=s[88]+"")&&Z(i,t),o[0]&128&&r!==(r=s[88])&&(e.__value=r,G(e,e.__value))},d(s){s&&v(e)}}}function Jw(n){let e,t,i,r;function s(d,g){return d[18]?eE:$w}let o=s(n),a=o(n),u=Ce(n[2]),c=[];for(let d=0;d<u.length;d+=1)c[d]=Dh(ah(n,u,d));let h=!n[18]&&Vh(n),p=n[1].createdBy===n[20].uid&&Oh(n);return{c(){a.c(),e=O();for(let d=0;d<c.length;d+=1)c[d].c();t=O(),h&&h.c(),i=O(),p&&p.c(),r=qe()},m(d,g){a.m(d,g),b(d,e,g);for(let E=0;E<c.length;E+=1)c[E]&&c[E].m(d,g);b(d,t,g),h&&h.m(d,g),b(d,i,g),p&&p.m(d,g),b(d,r,g)},p(d,g){if(o===(o=s(d))&&a?a.p(d,g):(a.d(1),a=o(d),a&&(a.c(),a.m(e.parentNode,e))),g[0]&13369406){u=Ce(d[2]);let E;for(E=0;E<u.length;E+=1){const T=ah(d,u,E);c[E]?c[E].p(T,g):(c[E]=Dh(T),c[E].c(),c[E].m(t.parentNode,t))}for(;E<c.length;E+=1)c[E].d(1);c.length=u.length}d[18]?h&&(h.d(1),h=null):h?h.p(d,g):(h=Vh(d),h.c(),h.m(i.parentNode,i)),d[1].createdBy===d[20].uid?p?p.p(d,g):(p=Oh(d),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},d(d){d&&(v(e),v(t),v(i),v(r)),a.d(d),lt(c,d),h&&h.d(d),p&&p.d(d)}}}function Zw(n){let e;function t(s,o){return s[8].length===0?rE:iE}let i=t(n),r=i(n);return{c(){r.c(),e=qe()},m(s,o){r.m(s,o),b(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&v(e),r.d(s)}}}function xw(n){var Ue,ue;let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I,k,C,L,D,re,ne=Hn(n[12].mapUrl),ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He=Ce(n[2]),de=[];for(let Q=0;Q<He.length;Q+=1)de[Q]=ff(uh(n,He,Q));let se=ne&&df(),ge=((Ue=n[1])==null?void 0:Ue.voteType)==="accommodation"&&pf(n),ee=((ue=n[1])==null?void 0:ue.voteType)==="restaurant"&&mf(n),oe=n[1].createdBy===n[20].uid&&_f(n);return{c(){e=y("p"),e.textContent="후보 모집 중입니다. 그룹원 누구나 후보를 추가할 수 있습니다.",t=O();for(let Q=0;Q<de.length;Q+=1)de[Q].c();i=O(),r=y("hr"),s=O(),o=y("strong"),o.textContent="후보 추가",a=O(),u=y("div"),c=y("label"),h=B("장소명 *"),p=y("br"),d=O(),g=y("input"),E=O(),T=y("br"),w=O(),N=y("label"),V=B("설명"),S=y("br"),U=O(),M=y("input"),F=O(),R=y("br"),A=O(),I=y("label"),k=B("Google Maps URL (선택)"),C=y("br"),L=O(),D=y("input"),re=O(),se&&se.c(),ie=O(),ge&&ge.c(),z=O(),ee&&ee.c(),J=O(),fe=y("br"),Te=y("br"),me=O(),Se=y("button"),Se.textContent="+ 후보 등록",Pe=O(),oe&&oe.c(),Ie=qe(),q(g,"placeholder","예: 제주도"),$(g,"width","100%"),q(M,"placeholder","간단한 설명"),$(M,"width","100%"),q(D,"placeholder","https://maps.google.com/..."),$(D,"width","100%"),q(u,"class","card")},m(Q,he){b(Q,e,he),b(Q,t,he);for(let ae=0;ae<de.length;ae+=1)de[ae]&&de[ae].m(Q,he);b(Q,i,he),b(Q,r,he),b(Q,s,he),b(Q,o,he),b(Q,a,he),b(Q,u,he),m(u,c),m(c,h),m(c,p),m(c,d),m(c,g),G(g,n[12].placeName),m(u,E),m(u,T),m(u,w),m(u,N),m(N,V),m(N,S),m(N,U),m(N,M),G(M,n[12].description),m(u,F),m(u,R),m(u,A),m(u,I),m(I,k),m(I,C),m(I,L),m(I,D),G(D,n[12].mapUrl),m(u,re),se&&se.m(u,null),m(u,ie),ge&&ge.m(u,null),m(u,z),ee&&ee.m(u,null),m(u,J),m(u,fe),m(u,Te),m(u,me),m(u,Se),b(Q,Pe,he),oe&&oe.m(Q,he),b(Q,Ie,he),Me||(ze=[W(g,"input",n[65]),W(M,"input",n[66]),W(D,"input",n[67]),W(Se,"click",n[26])],Me=!0)},p(Q,he){var ae,ve;if(he[0]&1208057862|he[1]&3){He=Ce(Q[2]);let ot;for(ot=0;ot<He.length;ot+=1){const Ut=uh(Q,He,ot);de[ot]?de[ot].p(Ut,he):(de[ot]=ff(Ut),de[ot].c(),de[ot].m(i.parentNode,i))}for(;ot<de.length;ot+=1)de[ot].d(1);de.length=He.length}he[0]&4096&&g.value!==Q[12].placeName&&G(g,Q[12].placeName),he[0]&4096&&M.value!==Q[12].description&&G(M,Q[12].description),he[0]&4096&&D.value!==Q[12].mapUrl&&G(D,Q[12].mapUrl),he[0]&4096&&(ne=Hn(Q[12].mapUrl)),ne?se||(se=df(),se.c(),se.m(u,ie)):se&&(se.d(1),se=null),((ae=Q[1])==null?void 0:ae.voteType)==="accommodation"?ge?ge.p(Q,he):(ge=pf(Q),ge.c(),ge.m(u,z)):ge&&(ge.d(1),ge=null),((ve=Q[1])==null?void 0:ve.voteType)==="restaurant"?ee?ee.p(Q,he):(ee=mf(Q),ee.c(),ee.m(u,J)):ee&&(ee.d(1),ee=null),Q[1].createdBy===Q[20].uid?oe?oe.p(Q,he):(oe=_f(Q),oe.c(),oe.m(Ie.parentNode,Ie)):oe&&(oe.d(1),oe=null)},d(Q){Q&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u),v(Pe),v(Ie)),lt(de,Q),se&&se.d(),ge&&ge.d(),ee&&ee.d(),oe&&oe.d(Q),Me=!1,Xe(ze)}}}function $w(n){let e,t,i,r,s,o,a=Mr(n[1])+"",u,c;return{c(){e=y("p"),t=B(`선택 후 제출 버튼을 누르세요.
        (남은 선택: `),i=y("strong"),r=B(n[19]),s=B("표"),o=B(" / "),u=B(a),c=B("표)")},m(h,p){b(h,e,p),m(e,t),m(e,i),m(i,r),m(i,s),m(e,o),m(e,u),m(e,c)},p(h,p){p[0]&524288&&Z(r,h[19]),p[0]&2&&a!==(a=Mr(h[1])+"")&&Z(u,a)},d(h){h&&v(e)}}}function eE(n){let e;return{c(){e=y("p"),e.textContent="투표 완료. 마감 후 결과를 확인하세요."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function bh(n){let e,t,i=n[91].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].description+"")&&Z(r,i)},d(s){s&&v(e)}}}function Th(n){let e,t,i,r=n[91].price&&wh(n),s=n[91].bedCount&&Eh(n),o=n[91].siteUrl&&Ih(n);return{c(){r&&r.c(),e=O(),s&&s.c(),t=O(),o&&o.c(),i=qe()},m(a,u){r&&r.m(a,u),b(a,e,u),s&&s.m(a,u),b(a,t,u),o&&o.m(a,u),b(a,i,u)},p(a,u){a[91].price?r?r.p(a,u):(r=wh(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),a[91].bedCount?s?s.p(a,u):(s=Eh(a),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),a[91].siteUrl?o?o.p(a,u):(o=Ih(a),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(a){a&&(v(e),v(t),v(i)),r&&r.d(a),s&&s.d(a),o&&o.d(a)}}}function wh(n){let e,t=n[91].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[91].price+"")&&Z(i,t)},d(r){r&&v(e)}}}function Eh(n){let e,t,i=n[91].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,a){b(o,e,a),m(e,t),m(e,r),m(e,s)},p(o,a){a[0]&4&&i!==(i=o[91].bedCount+"")&&Z(r,i)},d(o){o&&v(e)}}}function Ih(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[91].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,a){b(o,e,a),m(e,t),m(e,i),m(i,r)},p(o,a){a[0]&4&&s!==(s=o[91].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function Ah(n){var c;let e,t,i,r,s=((c=n[91].mealType)==null?void 0:c.length)&&kh(n),o=n[91].priceRange&&Rh(n),a=n[91].hours&&Ch(n),u=n[91].mainMenu&&Ph(n);return{c(){s&&s.c(),e=O(),o&&o.c(),t=O(),a&&a.c(),i=O(),u&&u.c(),r=qe()},m(h,p){s&&s.m(h,p),b(h,e,p),o&&o.m(h,p),b(h,t,p),a&&a.m(h,p),b(h,i,p),u&&u.m(h,p),b(h,r,p)},p(h,p){var d;(d=h[91].mealType)!=null&&d.length?s?s.p(h,p):(s=kh(h),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),h[91].priceRange?o?o.p(h,p):(o=Rh(h),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),h[91].hours?a?a.p(h,p):(a=Ch(h),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),h[91].mainMenu?u?u.p(h,p):(u=Ph(h),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},d(h){h&&(v(e),v(t),v(i),v(r)),s&&s.d(h),o&&o.d(h),a&&a.d(h),u&&u.d(h)}}}function kh(n){let e,t=n[91].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[91].mealType.join("·")+"")&&Z(i,t)},d(r){r&&v(e)}}}function Rh(n){var o;let e,t=(o=n[91].mealType)!=null&&o.length?" · ":"",i,r=n[91].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(a,u){b(a,e,u),m(e,i),m(e,s)},p(a,u){var c;u[0]&4&&t!==(t=(c=a[91].mealType)!=null&&c.length?" · ":"")&&Z(i,t),u[0]&4&&r!==(r=a[91].priceRange+"")&&Z(s,r)},d(a){a&&v(e)}}}function Ch(n){let e,t,i=n[91].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].hours+"")&&Z(r,i)},d(s){s&&v(e)}}}function Ph(n){let e,t,i=n[91].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].mainMenu+"")&&Z(r,i)},d(s){s&&v(e)}}}function tE(n){let e,t,i,r,s,o,a=(n[5][n[91].id]||0)+"",u,c,h,p,d,g,E;function T(){return n[78](n[91])}function w(){return n[79](n[91])}return{c(){e=y("div"),t=y("button"),i=B("-"),s=O(),o=y("span"),u=B(a),c=O(),h=y("button"),p=B("+"),t.disabled=r=(n[5][n[91].id]||0)<=0&&n[19]<=0,$(o,"display","inline-block"),$(o,"width","1.5rem"),$(o,"text-align","center"),h.disabled=d=(n[5][n[91].id]||0)>=0&&n[19]<=0,$(e,"text-align","right"),$(e,"margin-top","0.3rem")},m(N,V){b(N,e,V),m(e,t),m(t,i),m(e,s),m(e,o),m(o,u),m(e,c),m(e,h),m(h,p),g||(E=[W(t,"click",T),W(h,"click",w)],g=!0)},p(N,V){n=N,V[0]&524324&&r!==(r=(n[5][n[91].id]||0)<=0&&n[19]<=0)&&(t.disabled=r),V[0]&36&&a!==(a=(n[5][n[91].id]||0)+"")&&Z(u,a),V[0]&524324&&d!==(d=(n[5][n[91].id]||0)>=0&&n[19]<=0)&&(h.disabled=d)},d(N){N&&v(e),g=!1,Xe(E)}}}function nE(n){let e,t=n[4][n[91].id]&&Sh(n);return{c(){t&&t.c(),e=qe()},m(i,r){t&&t.m(i,r),b(i,e,r)},p(i,r){i[4][i[91].id]?t?t.p(i,r):(t=Sh(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){i&&v(e),t&&t.d(i)}}}function Sh(n){let e,t,i,r=n[4][n[91].id]+"",s,o;return{c(){e=y("div"),t=y("small"),i=B("내 선택: "),s=B(r),o=B("표"),$(e,"text-align","right"),$(e,"margin-top","0.3rem")},m(a,u){b(a,e,u),m(e,t),m(t,i),m(t,s),m(t,o)},p(a,u){u[0]&20&&r!==(r=a[4][a[91].id]+"")&&Z(s,r)},d(a){a&&v(e)}}}function Nh(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Dt(e.src,t=Gi(n[91].mapUrl,n[91].placeName,n[91].lat,n[91].lng))||q(e,"src",t),q(e,"title",i=n[91].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){b(r,e,s)},p(r,s){s[0]&4&&!Dt(e.src,t=Gi(r[91].mapUrl,r[91].placeName,r[91].lat,r[91].lng))&&q(e,"src",t),s[0]&4&&i!==(i=r[91].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function Dh(n){let e,t,i,r=n[91].placeName+"",s,o,a,u,c=(n[3][n[91].id]||0)+"",h,p,d,g,E,T,w,N,V=n[91].description&&bh(n),S=n[1].voteType==="accommodation"&&Th(n),U=n[1].voteType==="restaurant"&&Ah(n);function M(I,k){return I[18]?nE:tE}let F=M(n),R=F(n),A=n[91].mapUrl&&Nh(n);return{c(){e=y("div"),t=y("div"),i=y("strong"),s=B(r),o=O(),V&&V.c(),a=O(),u=y("span"),h=B(c),p=B("표"),d=O(),g=y("br"),E=O(),S&&S.c(),T=O(),U&&U.c(),w=O(),R.c(),N=O(),A&&A.c(),$(u,"float","right"),$(g,"clear","both"),q(e,"class","card")},m(I,k){b(I,e,k),m(e,t),m(t,i),m(i,s),m(t,o),V&&V.m(t,null),m(t,a),m(t,u),m(u,h),m(u,p),m(t,d),m(t,g),m(t,E),S&&S.m(t,null),m(t,T),U&&U.m(t,null),m(e,w),R.m(e,null),m(e,N),A&&A.m(e,null)},p(I,k){k[0]&4&&r!==(r=I[91].placeName+"")&&Z(s,r),I[91].description?V?V.p(I,k):(V=bh(I),V.c(),V.m(t,a)):V&&(V.d(1),V=null),k[0]&12&&c!==(c=(I[3][I[91].id]||0)+"")&&Z(h,c),I[1].voteType==="accommodation"?S?S.p(I,k):(S=Th(I),S.c(),S.m(t,T)):S&&(S.d(1),S=null),I[1].voteType==="restaurant"?U?U.p(I,k):(U=Ah(I),U.c(),U.m(t,null)):U&&(U.d(1),U=null),F===(F=M(I))&&R?R.p(I,k):(R.d(1),R=F(I),R&&(R.c(),R.m(e,N))),I[91].mapUrl?A?A.p(I,k):(A=Nh(I),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},d(I){I&&v(e),V&&V.d(),S&&S.d(),U&&U.d(),R.d(),A&&A.d()}}}function Vh(n){let e,t,i,r,s,o,a;return{c(){e=y("hr"),t=O(),i=y("button"),r=B("제출"),i.disabled=s=n[9]===0},m(u,c){b(u,e,c),b(u,t,c),b(u,i,c),m(i,r),o||(a=W(i,"click",n[24]),o=!0)},p(u,c){c[0]&512&&s!==(s=u[9]===0)&&(i.disabled=s)},d(u){u&&(v(e),v(t),v(i)),o=!1,a()}}}function Oh(n){let e,t,i,r,s,o,a;return{c(){e=y("hr"),t=O(),i=y("button"),i.textContent="투표 마감",r=O(),s=y("button"),s.textContent="투표 삭제"},m(u,c){b(u,e,c),b(u,t,c),b(u,i,c),b(u,r,c),b(u,s,c),o||(a=[W(i,"click",n[33]),W(s,"click",n[80])],o=!0)},p:Oe,d(u){u&&(v(e),v(t),v(i),v(r),v(s)),o=!1,Xe(a)}}}function iE(n){let e,t,i=Ce(n[8]),r=[];for(let s=0;s<i.length;s+=1)r[s]=Xh(lh(n,i,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=O(),t=y("hr")},m(s,o){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(s,o);b(s,e,o),b(s,t,o)},p(s,o){if(o[0]&131354){i=Ce(s[8]);let a;for(a=0;a<i.length;a+=1){const u=lh(s,i,a);r[a]?r[a].p(u,o):(r[a]=Xh(u),r[a].c(),r[a].m(e.parentNode,e))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},d(s){s&&(v(e),v(t)),lt(r,s)}}}function rE(n){let e;return{c(){e=y("p"),e.textContent="투표 없이 마감되었습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Lh(n){let e;return{c(){e=y("strong"),e.textContent="[당선]"},m(t,i){b(t,e,i)},d(t){t&&v(e)}}}function Mh(n){let e,t,i=n[91].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[91].description+"")&&Z(r,i)},d(s){s&&v(e)}}}function Uh(n){let e,t,i=n[4][n[91].id]>1?` ×${n[4][n[91].id]}`:"",r,s;return{c(){e=y("span"),t=B("(내 선택"),r=B(i),s=B(")")},m(o,a){b(o,e,a),m(e,t),m(e,r),m(e,s)},p(o,a){a[0]&272&&i!==(i=o[4][o[91].id]>1?` ×${o[4][o[91].id]}`:"")&&Z(r,i)},d(o){o&&v(e)}}}function Fh(n){let e,t,i,r,s,o=n[91].price&&Bh(n),a=n[91].bedCount&&jh(n),u=n[91].siteUrl&&qh(n);return{c(){e=y("br"),t=O(),o&&o.c(),i=O(),a&&a.c(),r=O(),u&&u.c(),s=qe()},m(c,h){b(c,e,h),b(c,t,h),o&&o.m(c,h),b(c,i,h),a&&a.m(c,h),b(c,r,h),u&&u.m(c,h),b(c,s,h)},p(c,h){c[91].price?o?o.p(c,h):(o=Bh(c),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),c[91].bedCount?a?a.p(c,h):(a=jh(c),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),c[91].siteUrl?u?u.p(c,h):(u=qh(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(v(e),v(t),v(i),v(r),v(s)),o&&o.d(c),a&&a.d(c),u&&u.d(c)}}}function Bh(n){let e,t=n[91].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&256&&t!==(t=r[91].price+"")&&Z(i,t)},d(r){r&&v(e)}}}function jh(n){let e,t,i=n[91].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,a){b(o,e,a),m(e,t),m(e,r),m(e,s)},p(o,a){a[0]&256&&i!==(i=o[91].bedCount+"")&&Z(r,i)},d(o){o&&v(e)}}}function qh(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[91].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,a){b(o,e,a),m(e,t),m(e,i),m(i,r)},p(o,a){a[0]&256&&s!==(s=o[91].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function zh(n){var p;let e,t,i,r,s,o,a=((p=n[91].mealType)==null?void 0:p.length)&&Hh(n),u=n[91].priceRange&&Wh(n),c=n[91].hours&&Gh(n),h=n[91].mainMenu&&Kh(n);return{c(){e=y("br"),t=O(),a&&a.c(),i=O(),u&&u.c(),r=O(),c&&c.c(),s=O(),h&&h.c(),o=qe()},m(d,g){b(d,e,g),b(d,t,g),a&&a.m(d,g),b(d,i,g),u&&u.m(d,g),b(d,r,g),c&&c.m(d,g),b(d,s,g),h&&h.m(d,g),b(d,o,g)},p(d,g){var E;(E=d[91].mealType)!=null&&E.length?a?a.p(d,g):(a=Hh(d),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),d[91].priceRange?u?u.p(d,g):(u=Wh(d),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),d[91].hours?c?c.p(d,g):(c=Gh(d),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),d[91].mainMenu?h?h.p(d,g):(h=Kh(d),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},d(d){d&&(v(e),v(t),v(i),v(r),v(s),v(o)),a&&a.d(d),u&&u.d(d),c&&c.d(d),h&&h.d(d)}}}function Hh(n){let e,t=n[91].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&256&&t!==(t=r[91].mealType.join("·")+"")&&Z(i,t)},d(r){r&&v(e)}}}function Wh(n){var o;let e,t=(o=n[91].mealType)!=null&&o.length?" · ":"",i,r=n[91].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(a,u){b(a,e,u),m(e,i),m(e,s)},p(a,u){var c;u[0]&256&&t!==(t=(c=a[91].mealType)!=null&&c.length?" · ":"")&&Z(i,t),u[0]&256&&r!==(r=a[91].priceRange+"")&&Z(s,r)},d(a){a&&v(e)}}}function Gh(n){let e,t,i=n[91].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[91].hours+"")&&Z(r,i)},d(s){s&&v(e)}}}function Kh(n){let e,t,i=n[91].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&256&&i!==(i=s[91].mainMenu+"")&&Z(r,i)},d(s){s&&v(e)}}}function Qh(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Dt(e.src,t=Gi(n[91].mapUrl,n[91].placeName,n[91].lat,n[91].lng))||q(e,"src",t),q(e,"title",i=n[91].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){b(r,e,s)},p(r,s){s[0]&256&&!Dt(e.src,t=Gi(r[91].mapUrl,r[91].placeName,r[91].lat,r[91].lng))&&q(e,"src",t),s[0]&256&&i!==(i=r[91].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function Xh(n){let e,t,i,r=n[91].placeName+"",s,o,a,u,c=n[94]+"",h,p,d,g,E,T,w=n[95]&&Lh(),N=n[91].description&&Mh(n),V=n[4][n[91].id]&&Uh(n),S=n[1].voteType==="accommodation"&&Fh(n),U=n[1].voteType==="restaurant"&&zh(n),M=n[91].mapUrl&&Qh(n);return{c(){e=y("div"),w&&w.c(),t=O(),i=y("strong"),s=B(r),o=O(),N&&N.c(),a=O(),u=y("span"),h=B(c),p=B("표"),d=O(),V&&V.c(),g=O(),S&&S.c(),E=O(),U&&U.c(),T=O(),M&&M.c(),$(u,"float","right"),q(e,"class","card")},m(F,R){b(F,e,R),w&&w.m(e,null),m(e,t),m(e,i),m(i,s),m(e,o),N&&N.m(e,null),m(e,a),m(e,u),m(u,h),m(u,p),m(e,d),V&&V.m(e,null),m(e,g),S&&S.m(e,null),m(e,E),U&&U.m(e,null),m(e,T),M&&M.m(e,null)},p(F,R){F[95]?w||(w=Lh(),w.c(),w.m(e,t)):w&&(w.d(1),w=null),R[0]&256&&r!==(r=F[91].placeName+"")&&Z(s,r),F[91].description?N?N.p(F,R):(N=Mh(F),N.c(),N.m(e,a)):N&&(N.d(1),N=null),R[0]&264&&c!==(c=F[94]+"")&&Z(h,c),F[4][F[91].id]?V?V.p(F,R):(V=Uh(F),V.c(),V.m(e,g)):V&&(V.d(1),V=null),F[1].voteType==="accommodation"?S?S.p(F,R):(S=Fh(F),S.c(),S.m(e,E)):S&&(S.d(1),S=null),F[1].voteType==="restaurant"?U?U.p(F,R):(U=zh(F),U.c(),U.m(e,T)):U&&(U.d(1),U=null),F[91].mapUrl?M?M.p(F,R):(M=Qh(F),M.c(),M.m(e,null)):M&&(M.d(1),M=null)},d(F){F&&v(e),w&&w.d(),N&&N.d(),V&&V.d(),S&&S.d(),U&&U.d(),M&&M.d()}}}function Yh(n){let e,t,i=n[91].description+"",r;return{c(){e=y("span"),t=B("— "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].description+"")&&Z(r,i)},d(s){s&&v(e)}}}function Jh(n){let e,t,i,r,s,o=n[91].price&&Zh(n),a=n[91].bedCount&&xh(n),u=n[91].siteUrl&&$h(n);return{c(){e=y("br"),t=O(),o&&o.c(),i=O(),a&&a.c(),r=O(),u&&u.c(),s=qe()},m(c,h){b(c,e,h),b(c,t,h),o&&o.m(c,h),b(c,i,h),a&&a.m(c,h),b(c,r,h),u&&u.m(c,h),b(c,s,h)},p(c,h){c[91].price?o?o.p(c,h):(o=Zh(c),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),c[91].bedCount?a?a.p(c,h):(a=xh(c),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),c[91].siteUrl?u?u.p(c,h):(u=$h(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&(v(e),v(t),v(i),v(r),v(s)),o&&o.d(c),a&&a.d(c),u&&u.d(c)}}}function Zh(n){let e,t=n[91].price+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[91].price+"")&&Z(i,t)},d(r){r&&v(e)}}}function xh(n){let e,t,i=n[91].bedCount+"",r,s;return{c(){e=y("span"),t=B("· 침대 "),r=B(i),s=B("개")},m(o,a){b(o,e,a),m(e,t),m(e,r),m(e,s)},p(o,a){a[0]&4&&i!==(i=o[91].bedCount+"")&&Z(r,i)},d(o){o&&v(e)}}}function $h(n){let e,t,i,r,s;return{c(){e=y("span"),t=B("· "),i=y("a"),r=B("예약 사이트"),q(i,"href",s=n[91].siteUrl),q(i,"target","_blank"),q(i,"rel","noopener noreferrer")},m(o,a){b(o,e,a),m(e,t),m(e,i),m(i,r)},p(o,a){a[0]&4&&s!==(s=o[91].siteUrl)&&q(i,"href",s)},d(o){o&&v(e)}}}function ef(n){var p;let e,t,i,r,s,o,a=((p=n[91].mealType)==null?void 0:p.length)&&tf(n),u=n[91].priceRange&&nf(n),c=n[91].hours&&rf(n),h=n[91].mainMenu&&sf(n);return{c(){e=y("br"),t=O(),a&&a.c(),i=O(),u&&u.c(),r=O(),c&&c.c(),s=O(),h&&h.c(),o=qe()},m(d,g){b(d,e,g),b(d,t,g),a&&a.m(d,g),b(d,i,g),u&&u.m(d,g),b(d,r,g),c&&c.m(d,g),b(d,s,g),h&&h.m(d,g),b(d,o,g)},p(d,g){var E;(E=d[91].mealType)!=null&&E.length?a?a.p(d,g):(a=tf(d),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),d[91].priceRange?u?u.p(d,g):(u=nf(d),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),d[91].hours?c?c.p(d,g):(c=rf(d),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),d[91].mainMenu?h?h.p(d,g):(h=sf(d),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},d(d){d&&(v(e),v(t),v(i),v(r),v(s),v(o)),a&&a.d(d),u&&u.d(d),c&&c.d(d),h&&h.d(d)}}}function tf(n){let e,t=n[91].mealType.join("·")+"",i;return{c(){e=y("span"),i=B(t)},m(r,s){b(r,e,s),m(e,i)},p(r,s){s[0]&4&&t!==(t=r[91].mealType.join("·")+"")&&Z(i,t)},d(r){r&&v(e)}}}function nf(n){var o;let e,t=(o=n[91].mealType)!=null&&o.length?" · ":"",i,r=n[91].priceRange+"",s;return{c(){e=y("span"),i=B(t),s=B(r)},m(a,u){b(a,e,u),m(e,i),m(e,s)},p(a,u){var c;u[0]&4&&t!==(t=(c=a[91].mealType)!=null&&c.length?" · ":"")&&Z(i,t),u[0]&4&&r!==(r=a[91].priceRange+"")&&Z(s,r)},d(a){a&&v(e)}}}function rf(n){let e,t,i=n[91].hours+"",r;return{c(){e=y("span"),t=B("· 영업시간: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].hours+"")&&Z(r,i)},d(s){s&&v(e)}}}function sf(n){let e,t,i=n[91].mainMenu+"",r;return{c(){e=y("span"),t=B("· 주메뉴: "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&4&&i!==(i=s[91].mainMenu+"")&&Z(r,i)},d(s){s&&v(e)}}}function of(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Dt(e.src,t=Gi(n[91].mapUrl,n[91].placeName,n[91].lat,n[91].lng))||q(e,"src",t),q(e,"title",i=n[91].placeName),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){b(r,e,s)},p(r,s){s[0]&4&&!Dt(e.src,t=Gi(r[91].mapUrl,r[91].placeName,r[91].lat,r[91].lng))&&q(e,"src",t),s[0]&4&&i!==(i=r[91].placeName)&&q(e,"title",i)},d(r){r&&v(e)}}}function af(n){let e,t,i,r,s,o,a;function u(){return n[53](n[91])}function c(){return n[54](n[91])}return{c(){e=y("br"),t=O(),i=y("button"),i.textContent="수정",r=O(),s=y("button"),s.textContent="삭제"},m(h,p){b(h,e,p),b(h,t,p),b(h,i,p),b(h,r,p),b(h,s,p),o||(a=[W(i,"click",u),W(s,"click",c)],o=!0)},p(h,p){n=h},d(h){h&&(v(e),v(t),v(i),v(r),v(s)),o=!1,Xe(a)}}}function lf(n){let e,t,i,r,s,o,a,u,c,h,p,d=Hn(n[16].mapUrl),g,E,T,w,N,V,S,U,M,F,R,A=d&&uf(),I=n[1].voteType==="accommodation"&&cf(n),k=n[1].voteType==="restaurant"&&hf(n);return{c(){e=y("div"),t=y("input"),i=y("br"),r=y("br"),s=O(),o=y("input"),a=y("br"),u=y("br"),c=O(),h=y("input"),p=O(),A&&A.c(),g=O(),I&&I.c(),E=O(),k&&k.c(),T=O(),w=y("br"),N=y("br"),V=O(),S=y("button"),S.textContent="저장",U=O(),M=y("button"),M.textContent="취소",q(t,"placeholder","장소명 *"),$(t,"width","100%"),q(o,"placeholder","설명"),$(o,"width","100%"),q(h,"placeholder","Google Maps URL"),$(h,"width","100%"),$(e,"margin-top","0.5rem")},m(C,L){b(C,e,L),m(e,t),G(t,n[16].placeName),m(e,i),m(e,r),m(e,s),m(e,o),G(o,n[16].description),m(e,a),m(e,u),m(e,c),m(e,h),G(h,n[16].mapUrl),m(e,p),A&&A.m(e,null),m(e,g),I&&I.m(e,null),m(e,E),k&&k.m(e,null),m(e,T),m(e,w),m(e,N),m(e,V),m(e,S),m(e,U),m(e,M),F||(R=[W(t,"input",n[55]),W(o,"input",n[56]),W(h,"input",n[57]),W(S,"click",n[31]),W(M,"click",n[64])],F=!0)},p(C,L){L[0]&65536&&t.value!==C[16].placeName&&G(t,C[16].placeName),L[0]&65536&&o.value!==C[16].description&&G(o,C[16].description),L[0]&65536&&h.value!==C[16].mapUrl&&G(h,C[16].mapUrl),L[0]&65536&&(d=Hn(C[16].mapUrl)),d?A||(A=uf(),A.c(),A.m(e,g)):A&&(A.d(1),A=null),C[1].voteType==="accommodation"?I?I.p(C,L):(I=cf(C),I.c(),I.m(e,E)):I&&(I.d(1),I=null),C[1].voteType==="restaurant"?k?k.p(C,L):(k=hf(C),k.c(),k.m(e,T)):k&&(k.d(1),k=null)},d(C){C&&v(e),A&&A.d(),I&&I.d(),k&&k.d(),F=!1,Xe(R)}}}function uf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 전체 URL을 사용해 주세요.",$(t,"color","#c00")},m(i,r){b(i,e,r),b(i,t,r)},d(i){i&&(v(e),v(t))}}}function cf(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E;return{c(){e=y("br"),t=y("br"),i=O(),r=y("input"),s=y("br"),o=y("br"),a=O(),u=y("input"),c=y("br"),h=y("br"),p=O(),d=y("input"),q(r,"placeholder","가격"),$(r,"width","100%"),q(u,"type","number"),q(u,"placeholder","침대 개수"),$(u,"width","5rem"),q(d,"placeholder","숙소 사이트 URL"),$(d,"width","100%")},m(T,w){b(T,e,w),b(T,t,w),b(T,i,w),b(T,r,w),G(r,n[16].price),b(T,s,w),b(T,o,w),b(T,a,w),b(T,u,w),G(u,n[16].bedCount),b(T,c,w),b(T,h,w),b(T,p,w),b(T,d,w),G(d,n[16].siteUrl),g||(E=[W(r,"input",n[58]),W(u,"input",n[59]),W(d,"input",n[60])],g=!0)},p(T,w){w[0]&65536&&r.value!==T[16].price&&G(r,T[16].price),w[0]&65536&&Xt(u.value)!==T[16].bedCount&&G(u,T[16].bedCount),w[0]&65536&&d.value!==T[16].siteUrl&&G(d,T[16].siteUrl)},d(T){T&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u),v(c),v(h),v(p),v(d)),g=!1,Xe(E)}}}function hf(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E;return{c(){e=y("br"),t=y("br"),i=O(),r=y("input"),s=y("br"),o=y("br"),a=O(),u=y("input"),c=y("br"),h=y("br"),p=O(),d=y("input"),q(r,"placeholder","가격대"),$(r,"width","100%"),q(u,"placeholder","영업시간"),$(u,"width","100%"),q(d,"placeholder","주메뉴"),$(d,"width","100%")},m(T,w){b(T,e,w),b(T,t,w),b(T,i,w),b(T,r,w),G(r,n[16].priceRange),b(T,s,w),b(T,o,w),b(T,a,w),b(T,u,w),G(u,n[16].hours),b(T,c,w),b(T,h,w),b(T,p,w),b(T,d,w),G(d,n[16].mainMenu),g||(E=[W(r,"input",n[61]),W(u,"input",n[62]),W(d,"input",n[63])],g=!0)},p(T,w){w[0]&65536&&r.value!==T[16].priceRange&&G(r,T[16].priceRange),w[0]&65536&&u.value!==T[16].hours&&G(u,T[16].hours),w[0]&65536&&d.value!==T[16].mainMenu&&G(d,T[16].mainMenu)},d(T){T&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u),v(c),v(h),v(p),v(d)),g=!1,Xe(E)}}}function ff(n){let e,t,i=n[91].placeName+"",r,s,o,a,u,c,h=n[32](n[91]),p,d=n[91].description&&Yh(n),g=n[1].voteType==="accommodation"&&Jh(n),E=n[1].voteType==="restaurant"&&ef(n),T=n[91].mapUrl&&of(n),w=h&&af(n),N=n[15]===n[91].id&&lf(n);return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),d&&d.c(),o=O(),g&&g.c(),a=O(),E&&E.c(),u=O(),T&&T.c(),c=O(),w&&w.c(),p=O(),N&&N.c(),q(e,"class","card")},m(V,S){b(V,e,S),m(e,t),m(t,r),m(e,s),d&&d.m(e,null),m(e,o),g&&g.m(e,null),m(e,a),E&&E.m(e,null),m(e,u),T&&T.m(e,null),m(e,c),w&&w.m(e,null),m(e,p),N&&N.m(e,null)},p(V,S){S[0]&4&&i!==(i=V[91].placeName+"")&&Z(r,i),V[91].description?d?d.p(V,S):(d=Yh(V),d.c(),d.m(e,o)):d&&(d.d(1),d=null),V[1].voteType==="accommodation"?g?g.p(V,S):(g=Jh(V),g.c(),g.m(e,a)):g&&(g.d(1),g=null),V[1].voteType==="restaurant"?E?E.p(V,S):(E=ef(V),E.c(),E.m(e,u)):E&&(E.d(1),E=null),V[91].mapUrl?T?T.p(V,S):(T=of(V),T.c(),T.m(e,c)):T&&(T.d(1),T=null),S[0]&4&&(h=V[32](V[91])),h?w?w.p(V,S):(w=af(V),w.c(),w.m(e,p)):w&&(w.d(1),w=null),V[15]===V[91].id?N?N.p(V,S):(N=lf(V),N.c(),N.m(e,null)):N&&(N.d(1),N=null)},d(V){V&&v(e),d&&d.d(),g&&g.d(),E&&E.d(),T&&T.d(),w&&w.d(),N&&N.d()}}}function df(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL(maps.app.goo.gl)은 좌표 추출이 불가합니다. Google Maps 주소창의 전체 URL을 붙여넣어 주세요.",$(t,"color","#c00")},m(i,r){b(i,e,r),b(i,t,r)},d(i){i&&(v(e),v(t))}}}function pf(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I;return{c(){e=y("br"),t=O(),i=y("label"),r=B("가격"),s=y("br"),o=O(),a=y("input"),u=O(),c=y("br"),h=O(),p=y("label"),d=B("침대 개수"),g=y("br"),E=O(),T=y("input"),w=O(),N=y("br"),V=O(),S=y("label"),U=B("숙소 사이트 URL (선택)"),M=y("br"),F=O(),R=y("input"),q(a,"placeholder","예: 1박 12만원"),$(a,"width","100%"),q(T,"type","number"),q(T,"min","1"),q(T,"placeholder","예: 2"),$(T,"width","5rem"),q(R,"placeholder","https://www.airbnb.com/..."),$(R,"width","100%")},m(k,C){b(k,e,C),b(k,t,C),b(k,i,C),m(i,r),m(i,s),m(i,o),m(i,a),G(a,n[12].price),b(k,u,C),b(k,c,C),b(k,h,C),b(k,p,C),m(p,d),m(p,g),m(p,E),m(p,T),G(T,n[12].bedCount),b(k,w,C),b(k,N,C),b(k,V,C),b(k,S,C),m(S,U),m(S,M),m(S,F),m(S,R),G(R,n[12].siteUrl),A||(I=[W(a,"input",n[68]),W(T,"input",n[69]),W(R,"input",n[70])],A=!0)},p(k,C){C[0]&4096&&a.value!==k[12].price&&G(a,k[12].price),C[0]&4096&&Xt(T.value)!==k[12].bedCount&&G(T,k[12].bedCount),C[0]&4096&&R.value!==k[12].siteUrl&&G(R,k[12].siteUrl)},d(k){k&&(v(e),v(t),v(i),v(u),v(c),v(h),v(p),v(w),v(N),v(V),v(S)),A=!1,Xe(I)}}}function mf(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I,k,C,L,D,re,ne,ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He;return Me=M_(n[72][0]),{c(){e=y("br"),t=O(),i=y("fieldset"),r=y("legend"),r.textContent="식사 유형",s=O(),o=y("label"),a=y("input"),u=B(" 조식"),c=B(`
           
          `),h=y("label"),p=y("input"),d=B(" 중식"),g=B(`
           
          `),E=y("label"),T=y("input"),w=B(" 석식"),N=O(),V=y("br"),S=O(),U=y("label"),M=B("가격대"),F=y("br"),R=O(),A=y("input"),I=O(),k=y("br"),C=O(),L=y("label"),D=B("영업시간"),re=y("br"),ne=O(),ie=y("input"),z=O(),J=y("br"),fe=O(),Te=y("label"),me=B("주메뉴"),Se=y("br"),Pe=O(),Ie=y("input"),q(a,"type","checkbox"),a.__value="조식",G(a,a.__value),q(p,"type","checkbox"),p.__value="중식",G(p,p.__value),q(T,"type","checkbox"),T.__value="석식",G(T,T.__value),$(i,"border","none"),$(i,"padding","0"),$(i,"margin","0"),q(A,"placeholder","예: 1인 1만원대"),$(A,"width","100%"),q(ie,"placeholder","예: 11:00 - 21:00"),$(ie,"width","100%"),q(Ie,"placeholder","예: 삼겹살, 냉면"),$(Ie,"width","100%"),Me.p(a,p,T)},m(de,se){b(de,e,se),b(de,t,se),b(de,i,se),m(i,r),m(i,s),m(i,o),m(o,a),a.checked=~(n[12].mealType||[]).indexOf(a.__value),m(o,u),m(i,c),m(i,h),m(h,p),p.checked=~(n[12].mealType||[]).indexOf(p.__value),m(h,d),m(i,g),m(i,E),m(E,T),T.checked=~(n[12].mealType||[]).indexOf(T.__value),m(E,w),b(de,N,se),b(de,V,se),b(de,S,se),b(de,U,se),m(U,M),m(U,F),m(U,R),m(U,A),G(A,n[12].priceRange),b(de,I,se),b(de,k,se),b(de,C,se),b(de,L,se),m(L,D),m(L,re),m(L,ne),m(L,ie),G(ie,n[12].hours),b(de,z,se),b(de,J,se),b(de,fe,se),b(de,Te,se),m(Te,me),m(Te,Se),m(Te,Pe),m(Te,Ie),G(Ie,n[12].mainMenu),ze||(He=[W(a,"change",n[71]),W(p,"change",n[73]),W(T,"change",n[74]),W(A,"input",n[75]),W(ie,"input",n[76]),W(Ie,"input",n[77])],ze=!0)},p(de,se){se[0]&4096&&(a.checked=~(de[12].mealType||[]).indexOf(a.__value)),se[0]&4096&&(p.checked=~(de[12].mealType||[]).indexOf(p.__value)),se[0]&4096&&(T.checked=~(de[12].mealType||[]).indexOf(T.__value)),se[0]&4096&&A.value!==de[12].priceRange&&G(A,de[12].priceRange),se[0]&4096&&ie.value!==de[12].hours&&G(ie,de[12].hours),se[0]&4096&&Ie.value!==de[12].mainMenu&&G(Ie,de[12].mainMenu)},d(de){de&&(v(e),v(t),v(i),v(N),v(V),v(S),v(U),v(I),v(k),v(C),v(L),v(z),v(J),v(fe),v(Te)),Me.r(),ze=!1,Xe(He)}}}function _f(n){let e,t,i,r,s,o,a,u,c,h=n[2].length===0&&gf();return{c(){e=y("hr"),t=O(),i=y("button"),r=B("투표 시작"),o=O(),h&&h.c(),a=qe(),i.disabled=s=n[2].length===0},m(p,d){b(p,e,d),b(p,t,d),b(p,i,d),m(i,r),b(p,o,d),h&&h.m(p,d),b(p,a,d),u||(c=W(i,"click",n[25]),u=!0)},p(p,d){d[0]&4&&s!==(s=p[2].length===0)&&(i.disabled=s),p[2].length===0?h||(h=gf(),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},d(p){p&&(v(e),v(t),v(i),v(o),v(a)),h&&h.d(p),u=!1,c()}}}function gf(n){let e;return{c(){e=y("small"),e.textContent="(후보가 1개 이상이어야 합니다)"},m(t,i){b(t,e,i)},d(t){t&&v(e)}}}function yf(n){let e,t,i,r,s,o,a;function u(p,d){return p[7].length===0?oE:sE}let c=u(n),h=c(n);return{c(){e=y("label"),t=B("연결할 여행지"),i=y("br"),r=O(),h.c(),s=O(),o=y("br"),a=y("br")},m(p,d){b(p,e,d),m(e,t),m(e,i),m(e,r),h.m(e,null),b(p,s,d),b(p,o,d),b(p,a,d)},p(p,d){c===(c=u(p))&&h?h.p(p,d):(h.d(1),h=c(p),h&&(h.c(),h.m(e,null)))},d(p){p&&(v(e),v(s),v(o),v(a)),h.d()}}}function sE(n){let e,t,i,r=Ce(n[7]),s=[];for(let o=0;o<r.length;o+=1)s[o]=vf(hh(n,r,o));return{c(){e=y("select");for(let o=0;o<s.length;o+=1)s[o].c();n[6].linkedDestination===void 0&&Kt(()=>n[43].call(e))},m(o,a){b(o,e,a);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);kt(e,n[6].linkedDestination,!0),t||(i=W(e,"change",n[43]),t=!0)},p(o,a){if(a[0]&128){r=Ce(o[7]);let u;for(u=0;u<r.length;u+=1){const c=hh(o,r,u);s[u]?s[u].p(c,a):(s[u]=vf(c),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=r.length}a[0]&64&&kt(e,o[6].linkedDestination)},d(o){o&&v(e),lt(s,o),t=!1,i()}}}function oE(n){let e;return{c(){e=y("p"),e.textContent="마감된 여행지 투표가 없습니다. 여행지를 먼저 결정해 주세요."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function vf(n){let e,t=n[88]+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[88],G(e,e.__value)},m(s,o){b(s,e,o),m(e,i)},p(s,o){o[0]&128&&t!==(t=s[88]+"")&&Z(i,t),o[0]&128&&r!==(r=s[88])&&(e.__value=r,G(e,e.__value))},d(s){s&&v(e)}}}function bf(n){let e,t,i,r,s,o,a,u;return{c(){e=B(`  
    `),t=y("label"),i=B("당선 인원 수"),r=y("br"),s=O(),o=y("input"),q(o,"type","number"),q(o,"min","1"),$(o,"width","4rem")},m(c,h){b(c,e,h),b(c,t,h),m(t,i),m(t,r),m(t,s),m(t,o),G(o,n[6].winnersCount),a||(u=W(o,"input",n[47]),a=!0)},p(c,h){h[0]&64&&Xt(o.value)!==c[6].winnersCount&&G(o,c[6].winnersCount)},d(c){c&&(v(e),v(t)),a=!1,u()}}}function aE(n){let e,t=Ce(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ef(fh(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);b(r,e,s)},p(r,s){if(s[0]&3145729|s[1]&8){t=Ce(r[0]);let o;for(o=0;o<t.length;o+=1){const a=fh(r,t,o);i[o]?i[o].p(a,s):(i[o]=Ef(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function lE(n){let e;return{c(){e=y("p"),e.textContent="진행 중인 투표가 없습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Tf(n){let e,t,i,r;function s(...o){return n[40](n[85],...o)}return{c(){e=B(" "),t=y("button"),t.textContent="삭제"},m(o,a){b(o,e,a),b(o,t,a),i||(r=W(t,"click",s),i=!0)},p(o,a){n=o},d(o){o&&(v(e),v(t)),i=!1,r()}}}function wf(n){let e,t=Js(n[85].deadline)+"",i,r;return{c(){e=B("마감일: "),i=B(t),r=B(" ·")},m(s,o){b(s,e,o),b(s,i,o),b(s,r,o)},p(s,o){o[0]&1&&t!==(t=Js(s[85].deadline)+"")&&Z(i,t)},d(s){s&&(v(e),v(i),v(r))}}}function Ef(n){let e,t,i,r=Ys(n[85])+"",s,o,a,u,c=n[85].title+"",h,p,d,g=kf(n[85])+"",E,T,w,N,V,S,U,M=Mr(n[85])+"",F,R,A,I,k,C=n[85].createdBy===n[20].uid&&Tf(n),L=n[85].deadline&&wf(n);function D(){return n[41](n[85])}return{c(){e=y("div"),t=y("span"),i=B("["),s=B(r),o=B("]"),a=O(),u=y("strong"),h=B(c),p=O(),d=y("span"),E=B(g),T=O(),C&&C.c(),w=O(),N=y("br"),V=O(),S=y("small"),L&&L.c(),U=B(`
          1인 `),F=B(M),R=B("표"),A=O(),$(d,"float","right"),q(e,"class","card"),$(e,"cursor","pointer")},m(re,ne){b(re,e,ne),m(e,t),m(t,i),m(t,s),m(t,o),m(e,a),m(e,u),m(u,h),m(e,p),m(e,d),m(d,E),m(d,T),C&&C.m(d,null),m(e,w),m(e,N),m(e,V),m(e,S),L&&L.m(S,null),m(S,U),m(S,F),m(S,R),m(e,A),I||(k=W(e,"click",D),I=!0)},p(re,ne){n=re,ne[0]&1&&r!==(r=Ys(n[85])+"")&&Z(s,r),ne[0]&1&&c!==(c=n[85].title+"")&&Z(h,c),ne[0]&1&&g!==(g=kf(n[85])+"")&&Z(E,g),n[85].createdBy===n[20].uid?C?C.p(n,ne):(C=Tf(n),C.c(),C.m(d,null)):C&&(C.d(1),C=null),n[85].deadline?L?L.p(n,ne):(L=wf(n),L.c(),L.m(S,U)):L&&(L.d(1),L=null),ne[0]&1&&M!==(M=Mr(n[85])+"")&&Z(F,M)},d(re){re&&v(e),C&&C.d(),L&&L.d(),I=!1,k()}}}function uE(n){let e;function t(s,o){if(!s[10])return Yw;if(s[11]==="list")return Xw;if(s[11]==="create")return Qw;if(s[11]==="detail"&&s[1])return Kw}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),b(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function If(){return{placeName:"",description:"",mapUrl:"",price:"",bedCount:"",siteUrl:"",priceRange:"",mealType:[],hours:"",mainMenu:""}}function Af(n){const e=n==null?void 0:n.trim();return e?/^https?:\/\//i.test(e)?e:"https://"+e:null}function kf(n){return n.status==="recruiting"?"모집중":Nn(n)?"마감":"투표중"}function Ys(n){return n.voteType==="destination"?"여행지":n.voteType==="attraction"?"관광지":n.voteType==="accommodation"?"숙소":n.voteType==="restaurant"?"맛집":""}function Nn(n){return n.status==="closed"?!0:n.status!=="ongoing"||!n.deadline?!1:(n.deadline.toDate?n.deadline.toDate():new Date(n.deadline))<new Date}function Js(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"없음"}function Mr(n){return n.maxVotesPerUser??1}function cE(n,e,t){let i,r,s,o,a,u,c,h;mn(n,xi,x=>t(20,c=x)),mn(n,ti,x=>t(10,h=x));let p="list",d=[],g=null,E=[],T={},w={},N={},V,S,U,M={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1},F=If(),R=[];function A(){V==null||V(),t(37,V=en(Ht($e(Ae,"groups",h.id,"votes"),Pn("createdAt","desc")),x=>{t(0,d=x.docs.map(_e=>({id:_e.id,..._e.data()})))}))}function I(x){t(1,g=x),t(11,p="detail"),t(2,E=[]),t(3,T={}),t(4,w={}),t(5,N={}),S==null||S(),U==null||U(),S=en($e(Ae,"groups",h.id,"votes",x.id,"options"),_e=>{t(2,E=_e.docs.map(Ge=>({id:Ge.id,...Ge.data()})))}),U=en($e(Ae,"groups",h.id,"votes",x.id,"records"),_e=>{const Ge={};let Fe={};_e.docs.forEach(Je=>{const ft=Je.data();if(ft.votes)Object.entries(ft.votes).forEach(([Vt,Ct])=>{Ge[Vt]=(Ge[Vt]||0)+Ct}),Je.id===c.uid&&(Fe={...ft.votes});else{const Vt=ft.optionIds??(ft.optionId?[ft.optionId]:[]);Vt.forEach(Ct=>{Ge[Ct]=(Ge[Ct]||0)+1}),Je.id===c.uid&&Vt.forEach(Ct=>{Fe[Ct]=(Fe[Ct]||0)+1})}}),t(3,T=Ge),t(4,w=Fe)})}function k(x){if(r||Nn(g))return;const _e=N[x]||0;if(_e>=0&&o<=0)return;const Ge=_e+1;if(Ge===0){const{[x]:Fe,...Je}=N;t(5,N=Je)}else t(5,N={...N,[x]:Ge})}function C(x){if(r||Nn(g))return;const _e=N[x]||0;if(_e<=0&&o<=0)return;const Ge=_e-1;if(Ge===0){const{[x]:Fe,...Je}=N;t(5,N=Je)}else t(5,N={...N,[x]:Ge})}async function L(){if(s===0||r)return;const x=et(Ae,"groups",h.id,"votes",g.id,"records",c.uid);await Xs(x,{votes:{...N},totalVotes:s,votedAt:Gt()}),t(5,N={})}async function D(){E.length!==0&&await pn(et(Ae,"groups",h.id,"votes",g.id),{status:"ongoing"})}async function re(){var Fe,Je,ft,Vt,Ct;if(!F.placeName.trim())return;const x=F.mapUrl.trim()||null,{lat:_e,lng:Ge}=La(x);await ci($e(Ae,"groups",h.id,"votes",g.id,"options"),{placeName:F.placeName.trim(),description:F.description.trim(),mapUrl:x,lat:_e,lng:Ge,price:((Fe=F.price)==null?void 0:Fe.trim())||null,bedCount:F.bedCount?Number(F.bedCount):null,siteUrl:Af(F.siteUrl),priceRange:((Je=F.priceRange)==null?void 0:Je.trim())||null,mealType:(ft=F.mealType)!=null&&ft.length?F.mealType:null,hours:((Vt=F.hours)==null?void 0:Vt.trim())||null,mainMenu:((Ct=F.mainMenu)==null?void 0:Ct.trim())||null,createdBy:c.uid}),t(12,F=If())}async function ne(x){await Bt(et(Ae,"groups",h.id,"votes",g.id,"options",x.id))}let ie=!1,z={};function J(){var x,_e;t(14,z={title:g.title,deadline:g.deadline?(((_e=(x=g.deadline).toDate)==null?void 0:_e.call(x))??new Date(g.deadline)).toISOString().slice(0,10):"",maxVotesPerUser:g.maxVotesPerUser??1,linkedDestination:g.linkedDestination??""}),t(13,ie=!0)}async function fe(){const x=g.status==="recruiting",_e={deadline:z.deadline?new Date(z.deadline):null};x&&(_e.title=z.title.trim()||g.title,_e.maxVotesPerUser=Number(z.maxVotesPerUser)||1,_e.linkedDestination=z.linkedDestination||null),await pn(et(Ae,"groups",h.id,"votes",g.id),_e),t(13,ie=!1)}let Te=null,me={};function Se(x){t(16,me={placeName:x.placeName??"",description:x.description??"",mapUrl:x.mapUrl??"",price:x.price??"",bedCount:x.bedCount??"",siteUrl:x.siteUrl??"",priceRange:x.priceRange??"",mealType:x.mealType??[],hours:x.hours??"",mainMenu:x.mainMenu??""}),t(15,Te=x.id)}async function Pe(){var Fe,Je,ft,Vt,Ct;const x=me.mapUrl.trim()||null,{lat:_e,lng:Ge}=La(x);await pn(et(Ae,"groups",h.id,"votes",g.id,"options",Te),{placeName:me.placeName.trim(),description:me.description.trim(),mapUrl:x,lat:_e,lng:Ge,price:((Fe=me.price)==null?void 0:Fe.trim())||null,bedCount:me.bedCount?Number(me.bedCount):null,siteUrl:Af(me.siteUrl),priceRange:((Je=me.priceRange)==null?void 0:Je.trim())||null,mealType:(ft=me.mealType)!=null&&ft.length?me.mealType:null,hours:((Vt=me.hours)==null?void 0:Vt.trim())||null,mainMenu:((Ct=me.mainMenu)==null?void 0:Ct.trim())||null}),t(15,Te=null)}function Ie(x){return g.status==="recruiting"&&(x.createdBy===c.uid||g.createdBy===c.uid)}async function Me(){const x=g.winnersCount??1,_e=E.map(Fe=>({...Fe,score:T[Fe.id]||0})).filter(Fe=>Fe.score>0).sort((Fe,Je)=>Je.score-Fe.score);let Ge=[];if(_e.length>0){const Fe=_e[Math.min(x,_e.length)-1].score;Ge=_e.filter(Je=>Je.score>=Fe).map(Je=>({placeName:Je.placeName,description:Je.description||"",mapUrl:Je.mapUrl||null,lat:Je.lat||null,lng:Je.lng||null}))}await pn(et(Ae,"groups",h.id,"votes",g.id),{status:"closed",winners:Ge})}async function ze(x,_e){_e==null||_e.stopPropagation(),confirm(`"${x.title}" 투표를 삭제하시겠습니까?`)&&(await Bt(et(Ae,"groups",h.id,"votes",x.id)),(g==null?void 0:g.id)===x.id&&de())}async function He(){if(!M.title.trim()||(M.voteType==="attraction"||M.voteType==="restaurant")&&!M.linkedDestination)return;const x=M.voteType==="attraction"||M.voteType==="accommodation"||M.voteType==="restaurant";await ci($e(Ae,"groups",h.id,"votes"),{title:M.title.trim(),voteType:M.voteType,linkedDestination:x?M.linkedDestination:null,deadline:M.deadline?new Date(M.deadline):null,maxVotesPerUser:Number(M.maxVotesPerUser)||1,winnersCount:M.voteType==="attraction"?Number(M.winnersCount)||1:null,status:"recruiting",createdBy:c.uid,createdAt:Gt()}),t(6,M={title:"",voteType:"destination",linkedDestination:"",deadline:"",maxVotesPerUser:1,winnersCount:1}),t(11,p="list")}function de(){t(11,p="list"),t(1,g=null),t(2,E=[]),t(3,T={}),t(4,w={}),t(5,N={}),S==null||S(),U==null||U()}xs(()=>{V==null||V(),S==null||S(),U==null||U()});const se=[[]],ge=()=>t(11,p="create"),ee=(x,_e)=>ze(x,_e),oe=x=>I(x);function Ue(){M.voteType=Vn(this),t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function ue(){M.linkedDestination=Vn(this),t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function Q(){M.title=this.value,t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function he(){M.deadline=this.value,t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function ae(){M.maxVotesPerUser=Xt(this.value),t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function ve(){M.winnersCount=Xt(this.value),t(6,M),t(0,d),t(7,R),t(10,h),t(37,V)}function ot(){z.title=this.value,t(14,z),t(7,R),t(6,M),t(0,d),t(10,h),t(37,V)}function Ut(){z.maxVotesPerUser=Xt(this.value),t(14,z),t(7,R),t(6,M),t(0,d),t(10,h),t(37,V)}function bn(){z.linkedDestination=Vn(this),t(14,z),t(7,R),t(6,M),t(0,d),t(10,h),t(37,V)}function le(){z.deadline=this.value,t(14,z),t(7,R),t(6,M),t(0,d),t(10,h),t(37,V)}const Y=()=>t(13,ie=!1),be=x=>Se(x),Qe=x=>ne(x);function Ne(){me.placeName=this.value,t(16,me)}function We(){me.description=this.value,t(16,me)}function Ft(){me.mapUrl=this.value,t(16,me)}function ht(){me.price=this.value,t(16,me)}function Tn(){me.bedCount=Xt(this.value),t(16,me)}function $i(){me.siteUrl=this.value,t(16,me)}function sn(){me.priceRange=this.value,t(16,me)}function gi(){me.hours=this.value,t(16,me)}function Jr(){me.mainMenu=this.value,t(16,me)}const er=()=>t(15,Te=null);function Ao(){F.placeName=this.value,t(12,F)}function ko(){F.description=this.value,t(12,F)}function tr(){F.mapUrl=this.value,t(12,F)}function Zr(){F.price=this.value,t(12,F)}function xr(){F.bedCount=Xt(this.value),t(12,F)}function Kn(){F.siteUrl=this.value,t(12,F)}function nr(){F.mealType=jo(se[0],this.__value,this.checked),t(12,F)}function ir(){F.mealType=jo(se[0],this.__value,this.checked),t(12,F)}function on(){F.mealType=jo(se[0],this.__value,this.checked),t(12,F)}function $r(){F.priceRange=this.value,t(12,F)}function yi(){F.hours=this.value,t(12,F)}function es(){F.mainMenu=this.value,t(12,F)}const Qn=x=>C(x.id),ts=x=>k(x.id),mt=x=>ze(g,x);return n.$$.update=()=>{if(n.$$.dirty[0]&1024|n.$$.dirty[1]&64&&(h?A():(t(0,d=[]),V==null||V())),n.$$.dirty[0]&193&&(M.voteType==="attraction"||M.voteType==="accommodation"||M.voteType==="restaurant")&&(t(7,R=d.filter(x=>{var _e;return x.voteType==="destination"&&x.status==="closed"&&((_e=x.winners)==null?void 0:_e.length)}).flatMap(x=>x.winners.map(_e=>_e.placeName??_e))),t(6,M.linkedDestination=R[0]??"",M)),n.$$.dirty[0]&3&&g&&d.length>0){const x=d.find(_e=>_e.id===g.id);x&&t(1,g=x)}n.$$.dirty[0]&16&&t(38,i=Object.values(w).reduce((x,_e)=>x+_e,0)),n.$$.dirty[1]&128&&t(18,r=i>0),n.$$.dirty[0]&32&&t(9,s=Object.values(N).reduce((x,_e)=>x+Math.abs(_e),0)),n.$$.dirty[0]&514&&t(19,o=g?Mr(g)-s:0),n.$$.dirty[0]&12&&t(8,a=[...E].sort((x,_e)=>(T[_e.id]||0)-(T[x.id]||0))),n.$$.dirty[0]&264&&a[0]&&T[a[0].id],n.$$.dirty[0]&266&&t(17,u=(()=>{if(!g)return new Set;const x=g.winnersCount??1,_e=a.map(Fe=>({id:Fe.id,score:T[Fe.id]||0})).filter(Fe=>Fe.score>0);if(_e.length===0)return new Set;const Ge=_e[Math.min(x,_e.length)-1].score;return new Set(_e.filter(Fe=>Fe.score>=Ge).map(Fe=>Fe.id))})())},[d,g,E,T,w,N,M,R,a,s,h,p,F,ie,z,Te,me,u,r,o,c,I,k,C,L,D,re,ne,J,fe,Se,Pe,Ie,Me,ze,He,de,V,i,ge,ee,oe,Ue,ue,Q,he,ae,ve,ot,Ut,bn,le,Y,be,Qe,Ne,We,Ft,ht,Tn,$i,sn,gi,Jr,er,Ao,ko,tr,Zr,xr,Kn,nr,se,ir,on,$r,yi,es,Qn,ts,mt]}class hE extends Fr{constructor(e){super(),Ur(this,e,cE,uE,Ki,{},null,[-1,-1,-1,-1])}}function Rf(n,e,t){const i=n.slice();i[61]=e[t],i[67]=t;const r=i[8][i[61]]??[];i[62]=r;const s=Hw(i[62]);i[63]=s;const o=Ww(i[62]);i[64]=o;const a=Gw(i[62]);return i[65]=a,i}function Cf(n,e,t){const i=n.slice();return i[68]=e[t],i}function Pf(n,e,t){const i=n.slice();return i[71]=e[t],i}function Sf(n,e,t){const i=n.slice();return i[68]=e[t],i}function Nf(n,e,t){const i=n.slice();return i[76]=e[t],i}function Df(n,e,t){const i=n.slice();return i[58]=e[t],i}function Vf(n,e,t){const i=n.slice();return i[55]=e[t],i}function fE(n){let e,t=n[1].title+"",i,r,s,o,a,u,c=n[1].startDate+"",h,p,d=n[1].endDate+"",g,E,T,w,N,V,S,U,M=n[1].destination&&Of(n),F=n[9].length>0&&Lf(n),R=Ce(n[2]),A=[];for(let I=0;I<R.length;I+=1)A[I]=Xf(Rf(n,R,I));return{c(){e=y("h2"),i=B(t),r=O(),s=y("button"),s.textContent="← 목록으로",o=O(),M&&M.c(),a=O(),u=y("small"),h=B(c),p=B(" ~ "),g=B(d),E=O(),T=y("hr"),w=O(),F&&F.c(),N=O();for(let I=0;I<A.length;I+=1)A[I].c();V=qe()},m(I,k){b(I,e,k),m(e,i),b(I,r,k),b(I,s,k),b(I,o,k),M&&M.m(I,k),b(I,a,k),b(I,u,k),m(u,h),m(u,p),m(u,g),b(I,E,k),b(I,T,k),b(I,w,k),F&&F.m(I,k),b(I,N,k);for(let C=0;C<A.length;C+=1)A[C]&&A[C].m(I,k);b(I,V,k),S||(U=W(s,"click",n[21]),S=!0)},p(I,k){if(k[0]&2&&t!==(t=I[1].title+"")&&Z(i,t),I[1].destination?M?M.p(I,k):(M=Of(I),M.c(),M.m(a.parentNode,a)):M&&(M.d(1),M=null),k[0]&2&&c!==(c=I[1].startDate+"")&&Z(h,c),k[0]&2&&d!==(d=I[1].endDate+"")&&Z(g,d),I[9].length>0?F?F.p(I,k):(F=Lf(I),F.c(),F.m(N.parentNode,N)):F&&(F.d(1),F=null),k[0]&1520068){R=Ce(I[2]);let C;for(C=0;C<R.length;C+=1){const L=Rf(I,R,C);A[C]?A[C].p(L,k):(A[C]=Xf(L),A[C].c(),A[C].m(V.parentNode,V))}for(;C<A.length;C+=1)A[C].d(1);A.length=R.length}},d(I){I&&(v(e),v(r),v(s),v(o),v(a),v(u),v(E),v(T),v(w),v(N),v(V)),M&&M.d(I),F&&F.d(I),lt(A,I),S=!1,U()}}}function dE(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I,k,C,L,D,re,ne,ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He;function de(ee,oe){return ee[10].length>0?TE:bE}let se=de(n),ge=se(n);return{c(){e=y("h2"),e.textContent="새 일정 만들기",t=O(),i=y("button"),i.textContent="← 뒤로",r=O(),s=y("hr"),o=O(),a=y("label"),u=B("여행명 *"),c=y("br"),h=O(),p=y("input"),d=O(),g=y("br"),E=y("br"),T=O(),w=y("label"),N=B("여행지"),V=y("br"),S=O(),ge.c(),U=O(),M=y("br"),F=y("br"),R=O(),A=y("label"),I=B("시작일 *"),k=y("br"),C=O(),L=y("input"),D=B(`
   
  `),re=y("label"),ne=B("종료일 *"),ie=y("br"),z=O(),J=y("input"),fe=O(),Te=y("br"),me=y("br"),Se=O(),Pe=y("button"),Pe.textContent="일정 만들기",Ie=O(),Me=y("button"),Me.textContent="취소",q(p,"placeholder","예: 제주 3박 4일"),$(p,"width","100%"),q(L,"type","date"),q(J,"type","date")},m(ee,oe){b(ee,e,oe),b(ee,t,oe),b(ee,i,oe),b(ee,r,oe),b(ee,s,oe),b(ee,o,oe),b(ee,a,oe),m(a,u),m(a,c),m(a,h),m(a,p),G(p,n[5].title),b(ee,d,oe),b(ee,g,oe),b(ee,E,oe),b(ee,T,oe),b(ee,w,oe),m(w,N),m(w,V),m(w,S),ge.m(w,null),b(ee,U,oe),b(ee,M,oe),b(ee,F,oe),b(ee,R,oe),b(ee,A,oe),m(A,I),m(A,k),m(A,C),m(A,L),G(L,n[5].startDate),b(ee,D,oe),b(ee,re,oe),m(re,ne),m(re,ie),m(re,z),m(re,J),G(J,n[5].endDate),b(ee,fe,oe),b(ee,Te,oe),b(ee,me,oe),b(ee,Se,oe),b(ee,Pe,oe),b(ee,Ie,oe),b(ee,Me,oe),ze||(He=[W(i,"click",n[21]),W(p,"input",n[29]),W(L,"input",n[33]),W(J,"input",n[34]),W(Pe,"click",n[15]),W(Me,"click",n[21])],ze=!0)},p(ee,oe){oe[0]&1056&&p.value!==ee[5].title&&G(p,ee[5].title),se===(se=de(ee))&&ge?ge.p(ee,oe):(ge.d(1),ge=se(ee),ge&&(ge.c(),ge.m(w,null))),oe[0]&1056&&G(L,ee[5].startDate),oe[0]&1056&&G(J,ee[5].endDate)},d(ee){ee&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(d),v(g),v(E),v(T),v(w),v(U),v(M),v(F),v(R),v(A),v(D),v(re),v(fe),v(Te),v(me),v(Se),v(Pe),v(Ie),v(Me)),ge.d(),ze=!1,Xe(He)}}}function pE(n){let e,t,i=n[3].name+"",r,s,o,a,u,c,h,p,d;function g(w,N){return w[0].length===0?EE:wE}let E=g(n),T=E(n);return{c(){e=y("h2"),t=B("여행 일정 — "),r=B(i),s=O(),o=y("button"),o.textContent="+ 새 일정 만들기",a=O(),u=y("hr"),c=O(),T.c(),h=qe()},m(w,N){b(w,e,N),m(e,t),m(e,r),b(w,s,N),b(w,o,N),b(w,a,N),b(w,u,N),b(w,c,N),T.m(w,N),b(w,h,N),p||(d=W(o,"click",n[26]),p=!0)},p(w,N){N[0]&8&&i!==(i=w[3].name+"")&&Z(r,i),E===(E=g(w))&&T?T.p(w,N):(T.d(1),T=E(w),T&&(T.c(),T.m(h.parentNode,h)))},d(w){w&&(v(e),v(s),v(o),v(a),v(u),v(c),v(h)),T.d(w),p=!1,d()}}}function mE(n){let e;return{c(){e=y("p"),e.innerHTML='먼저 <a href="#groups">그룹</a>을 선택해 주세요.'},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Of(n){let e,t,i=n[1].destination+"",r;return{c(){e=y("span"),t=B("· "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&2&&i!==(i=s[1].destination+"")&&Z(r,i)},d(s){s&&v(e)}}}function Lf(n){let e,t,i,r,s,o,a,u,c,h=Ce(n[9]),p=[];for(let d=0;d<h.length;d+=1)p[d]=Mf(Nf(n,h,d));return{c(){e=y("div"),t=y("strong"),t.textContent="투표 당선 관광지",i=B(` —
      `),r=y("select"),s=y("option"),s.textContent="선택 시 항목 추가폼에 자동입력";for(let d=0;d<p.length;d+=1)p[d].c();o=O(),a=y("hr"),s.__value="",G(s,s.__value),q(e,"class","card")},m(d,g){b(d,e,g),m(e,t),m(e,i),m(e,r),m(r,s);for(let E=0;E<p.length;E+=1)p[E]&&p[E].m(r,null);b(d,o,g),b(d,a,g),u||(c=W(r,"change",n[35]),u=!0)},p(d,g){if(g[0]&512){h=Ce(d[9]);let E;for(E=0;E<h.length;E+=1){const T=Nf(d,h,E);p[E]?p[E].p(T,g):(p[E]=Mf(T),p[E].c(),p[E].m(r,null))}for(;E<p.length;E+=1)p[E].d(1);p.length=h.length}},d(d){d&&(v(e),v(o),v(a)),lt(p,d),u=!1,c()}}}function Mf(n){let e,t=n[76].placeName+"",i,r=n[76].description?` — ${n[76].description}`:"",s,o;return{c(){e=y("option"),i=B(t),s=B(r),e.__value=o=n[76].placeName,G(e,e.__value)},m(a,u){b(a,e,u),m(e,i),m(e,s)},p(a,u){u[0]&512&&t!==(t=a[76].placeName+"")&&Z(i,t),u[0]&512&&r!==(r=a[76].description?` — ${a[76].description}`:"")&&Z(s,r),u[0]&512&&o!==(o=a[76].placeName)&&(e.__value=o,G(e,e.__value))},d(a){a&&v(e)}}}function _E(n){let e,t,i,r,s,o,a=n[71].category+"",u,c,h,p,d=n[71].placeName+"",g,E,T,w,N,V,S,U,M,F=n[71].time&&Uf(n),R=n[71].memo&&Ff(n);function A(){return n[42](n[71])}function I(){return n[43](n[71])}return{c(){e=y("div"),t=y("div"),i=y("div"),F&&F.c(),r=O(),s=y("span"),o=B("["),u=B(a),c=B("]"),h=O(),p=y("strong"),g=B(d),E=O(),R&&R.c(),T=O(),w=y("div"),N=y("button"),N.textContent="수정",V=O(),S=y("button"),S.textContent="삭제",$(w,"white-space","nowrap"),$(w,"margin-left","0.5rem"),$(t,"display","flex"),$(t,"justify-content","space-between"),$(t,"align-items","flex-start"),q(e,"class","card")},m(k,C){b(k,e,C),m(e,t),m(t,i),F&&F.m(i,null),m(i,r),m(i,s),m(s,o),m(s,u),m(s,c),m(i,h),m(i,p),m(p,g),m(i,E),R&&R.m(i,null),m(t,T),m(t,w),m(w,N),m(w,V),m(w,S),U||(M=[W(N,"click",A),W(S,"click",I)],U=!0)},p(k,C){n=k,n[71].time?F?F.p(n,C):(F=Uf(n),F.c(),F.m(i,r)):F&&(F.d(1),F=null),C[0]&260&&a!==(a=n[71].category+"")&&Z(u,a),C[0]&260&&d!==(d=n[71].placeName+"")&&Z(g,d),n[71].memo?R?R.p(n,C):(R=Ff(n),R.c(),R.m(i,null)):R&&(R.d(1),R=null)},d(k){k&&v(e),F&&F.d(),R&&R.d(),U=!1,Xe(M)}}}function gE(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M=Hn(n[6].mapUrl),F,R,A,I,k,C,L,D,re=Ce(n[12]),ne=[];for(let z=0;z<re.length;z+=1)ne[z]=Bf(Sf(n,re,z));let ie=M&&jf();return{c(){e=y("div"),t=y("input"),i=B(`
           
          `),r=y("select");for(let z=0;z<ne.length;z+=1)ne[z].c();s=O(),o=y("br"),a=y("br"),u=O(),c=y("input"),h=O(),p=y("br"),d=y("br"),g=O(),E=y("textarea"),T=O(),w=y("br"),N=y("br"),V=O(),S=y("input"),U=O(),ie&&ie.c(),F=O(),R=y("br"),A=O(),I=y("button"),I.textContent="저장",k=O(),C=y("button"),C.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Kt(()=>n[37].call(r)),q(c,"placeholder","장소명 *"),$(c,"width","100%"),q(E,"placeholder","메모"),q(E,"rows","2"),$(E,"width","100%"),q(S,"placeholder","Google Maps URL (선택)"),$(S,"width","100%"),q(e,"class","card")},m(z,J){b(z,e,J),m(e,t),G(t,n[6].time),m(e,i),m(e,r);for(let fe=0;fe<ne.length;fe+=1)ne[fe]&&ne[fe].m(r,null);kt(r,n[6].category,!0),m(e,s),m(e,o),m(e,a),m(e,u),m(e,c),G(c,n[6].placeName),m(e,h),m(e,p),m(e,d),m(e,g),m(e,E),G(E,n[6].memo),m(e,T),m(e,w),m(e,N),m(e,V),m(e,S),G(S,n[6].mapUrl),m(e,U),ie&&ie.m(e,null),m(e,F),m(e,R),m(e,A),m(e,I),m(e,k),m(e,C),L||(D=[W(t,"input",n[36]),W(r,"change",n[37]),W(c,"input",n[38]),W(E,"input",n[39]),W(S,"input",n[40]),W(I,"click",n[18]),W(C,"click",n[41])],L=!0)},p(z,J){if(J[0]&4160&&G(t,z[6].time),J[0]&4096){re=Ce(z[12]);let fe;for(fe=0;fe<re.length;fe+=1){const Te=Sf(z,re,fe);ne[fe]?ne[fe].p(Te,J):(ne[fe]=Bf(Te),ne[fe].c(),ne[fe].m(r,null))}for(;fe<ne.length;fe+=1)ne[fe].d(1);ne.length=re.length}J[0]&4160&&kt(r,z[6].category),J[0]&4160&&c.value!==z[6].placeName&&G(c,z[6].placeName),J[0]&4160&&G(E,z[6].memo),J[0]&4160&&S.value!==z[6].mapUrl&&G(S,z[6].mapUrl),J[0]&64&&(M=Hn(z[6].mapUrl)),M?ie||(ie=jf(),ie.c(),ie.m(e,F)):ie&&(ie.d(1),ie=null)},d(z){z&&v(e),lt(ne,z),ie&&ie.d(),L=!1,Xe(D)}}}function Uf(n){let e,t=n[71].time+"",i,r;return{c(){e=y("strong"),i=B(t),r=B(" ·")},m(s,o){b(s,e,o),m(e,i),b(s,r,o)},p(s,o){o[0]&260&&t!==(t=s[71].time+"")&&Z(i,t)},d(s){s&&(v(e),v(r))}}}function Ff(n){let e,t,i=n[71].memo+"",r;return{c(){e=y("br"),t=y("small"),r=B(i)},m(s,o){b(s,e,o),b(s,t,o),m(t,r)},p(s,o){o[0]&260&&i!==(i=s[71].memo+"")&&Z(r,i)},d(s){s&&(v(e),v(t))}}}function Bf(n){let e,t=n[68]+"",i;return{c(){e=y("option"),i=B(t),e.__value=n[68],G(e,e.__value)},m(r,s){b(r,e,s),m(e,i)},p:Oe,d(r){r&&v(e)}}}function jf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",$(t,"color","#c00")},m(i,r){b(i,e,r),b(i,t,r)},d(i){i&&(v(e),v(t))}}}function qf(n){let e;function t(s,o){return s[6]&&!s[6].isNew&&s[6].id===s[71].id?gE:_E}let i=t(n),r=i(n);return{c(){r.c(),e=qe()},m(s,o){r.m(s,o),b(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&v(e),r.d(s)}}}function zf(n){let e;return{c(){e=y("p"),e.textContent="아직 일정 없음",$(e,"margin-left","0.5rem"),$(e,"color","#666")},m(t,i){b(t,e,i)},d(t){t&&v(e)}}}function Hf(n){let e,t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기",i,r,s,o,a,u,c,h=n[7].has(n[61]),p,d,g;function E(){return n[44](n[61])}let T=n[65]>0&&Wf(n),w=h&&Gf(n);return{c(){e=y("button"),i=B(t),r=O(),s=y("a"),o=B("↗ Google Maps에서 열기"),u=O(),T&&T.c(),c=O(),w&&w.c(),p=qe(),q(s,"href",a=n[64]),q(s,"target","_blank"),q(s,"rel","noopener noreferrer")},m(N,V){b(N,e,V),m(e,i),b(N,r,V),b(N,s,V),m(s,o),b(N,u,V),T&&T.m(N,V),b(N,c,V),w&&w.m(N,V),b(N,p,V),d||(g=W(e,"click",E),d=!0)},p(N,V){n=N,V[0]&132&&t!==(t=n[7].has(n[61])?"▲ 경로 닫기":"▼ 경로 보기")&&Z(i,t),V[0]&260&&a!==(a=n[64])&&q(s,"href",a),n[65]>0?T?T.p(n,V):(T=Wf(n),T.c(),T.m(c.parentNode,c)):T&&(T.d(1),T=null),V[0]&132&&(h=n[7].has(n[61])),h?w?w.p(n,V):(w=Gf(n),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},d(N){N&&(v(e),v(r),v(s),v(u),v(c),v(p)),T&&T.d(N),w&&w.d(N),d=!1,g()}}}function Wf(n){let e,t,i=n[65]+"",r,s;return{c(){e=y("small"),t=B("(지도 링크 없는 항목 "),r=B(i),s=B("개 경로 제외)")},m(o,a){b(o,e,a),m(e,t),m(e,r),m(e,s)},p(o,a){a[0]&260&&i!==(i=o[65]+"")&&Z(r,i)},d(o){o&&v(e)}}}function Gf(n){let e,t,i;return{c(){e=y("iframe"),q(e,"class","map-embed"),Dt(e.src,t=n[63])||q(e,"src",t),q(e,"title",i=n[61]+" 경로"),e.allowFullscreen=!0,q(e,"loading","lazy")},m(r,s){b(r,e,s)},p(r,s){s[0]&260&&!Dt(e.src,t=r[63])&&q(e,"src",t),s[0]&4&&i!==(i=r[61]+" 경로")&&q(e,"title",i)},d(r){r&&v(e)}}}function yE(n){let e,t,i;function r(){return n[51](n[61])}return{c(){e=y("button"),e.textContent="+ 항목 추가"},m(s,o){b(s,e,o),t||(i=W(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function vE(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E,T,w,N,V,S,U,M=Hn(n[6].mapUrl),F,R,A,I,k,C,L,D,re=Ce(n[12]),ne=[];for(let z=0;z<re.length;z+=1)ne[z]=Kf(Cf(n,re,z));let ie=M&&Qf();return{c(){e=y("div"),t=y("input"),i=B(`
         
        `),r=y("select");for(let z=0;z<ne.length;z+=1)ne[z].c();s=O(),o=y("br"),a=y("br"),u=O(),c=y("input"),h=O(),p=y("br"),d=y("br"),g=O(),E=y("textarea"),T=O(),w=y("br"),N=y("br"),V=O(),S=y("input"),U=O(),ie&&ie.c(),F=O(),R=y("br"),A=O(),I=y("button"),I.textContent="저장",k=O(),C=y("button"),C.textContent="취소",q(t,"type","time"),n[6].category===void 0&&Kt(()=>n[46].call(r)),q(c,"placeholder","장소명 *"),$(c,"width","100%"),q(E,"placeholder","메모"),q(E,"rows","2"),$(E,"width","100%"),q(S,"placeholder","Google Maps URL (선택)"),$(S,"width","100%"),q(e,"class","card")},m(z,J){b(z,e,J),m(e,t),G(t,n[6].time),m(e,i),m(e,r);for(let fe=0;fe<ne.length;fe+=1)ne[fe]&&ne[fe].m(r,null);kt(r,n[6].category,!0),m(e,s),m(e,o),m(e,a),m(e,u),m(e,c),G(c,n[6].placeName),m(e,h),m(e,p),m(e,d),m(e,g),m(e,E),G(E,n[6].memo),m(e,T),m(e,w),m(e,N),m(e,V),m(e,S),G(S,n[6].mapUrl),m(e,U),ie&&ie.m(e,null),m(e,F),m(e,R),m(e,A),m(e,I),m(e,k),m(e,C),L||(D=[W(t,"input",n[45]),W(r,"change",n[46]),W(c,"input",n[47]),W(E,"input",n[48]),W(S,"input",n[49]),W(I,"click",n[18]),W(C,"click",n[50])],L=!0)},p(z,J){if(J[0]&4160&&G(t,z[6].time),J[0]&4096){re=Ce(z[12]);let fe;for(fe=0;fe<re.length;fe+=1){const Te=Cf(z,re,fe);ne[fe]?ne[fe].p(Te,J):(ne[fe]=Kf(Te),ne[fe].c(),ne[fe].m(r,null))}for(;fe<ne.length;fe+=1)ne[fe].d(1);ne.length=re.length}J[0]&4160&&kt(r,z[6].category),J[0]&4160&&c.value!==z[6].placeName&&G(c,z[6].placeName),J[0]&4160&&G(E,z[6].memo),J[0]&4160&&S.value!==z[6].mapUrl&&G(S,z[6].mapUrl),J[0]&64&&(M=Hn(z[6].mapUrl)),M?ie||(ie=Qf(),ie.c(),ie.m(e,F)):ie&&(ie.d(1),ie=null)},d(z){z&&v(e),lt(ne,z),ie&&ie.d(),L=!1,Xe(D)}}}function Kf(n){let e,t=n[68]+"",i;return{c(){e=y("option"),i=B(t),e.__value=n[68],G(e,e.__value)},m(r,s){b(r,e,s),m(e,i)},p:Oe,d(r){r&&v(e)}}}function Qf(n){let e,t;return{c(){e=y("br"),t=y("small"),t.textContent="단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.",$(t,"color","#c00")},m(i,r){b(i,e,r),b(i,t,r)},d(i){i&&(v(e),v(t))}}}function Xf(n){var N,V;let e,t=ed(n[61],n[67])+"",i,r,s,o,a,u,c,h=Ce(n[8][n[61]]??[]),p=[];for(let S=0;S<h.length;S+=1)p[S]=qf(Pf(n,h,S));let d=(n[8][n[61]]??[]).length===0&&!((N=n[6])!=null&&N.isNew&&((V=n[6])==null?void 0:V.date)===n[61])&&zf(),g=n[63]&&Hf(n);function E(S,U){var M,F;return(M=S[6])!=null&&M.isNew&&((F=S[6])==null?void 0:F.date)===S[61]?vE:yE}let T=E(n),w=T(n);return{c(){e=y("h3"),i=B(t),r=O();for(let S=0;S<p.length;S+=1)p[S].c();s=O(),d&&d.c(),o=O(),g&&g.c(),a=O(),w.c(),u=O(),c=y("hr")},m(S,U){b(S,e,U),m(e,i),b(S,r,U);for(let M=0;M<p.length;M+=1)p[M]&&p[M].m(S,U);b(S,s,U),d&&d.m(S,U),b(S,o,U),g&&g.m(S,U),b(S,a,U),w.m(S,U),b(S,u,U),b(S,c,U)},p(S,U){var M,F;if(U[0]&4&&t!==(t=ed(S[61],S[67])+"")&&Z(i,t),U[0]&1446212){h=Ce(S[8][S[61]]??[]);let R;for(R=0;R<h.length;R+=1){const A=Pf(S,h,R);p[R]?p[R].p(A,U):(p[R]=qf(A),p[R].c(),p[R].m(s.parentNode,s))}for(;R<p.length;R+=1)p[R].d(1);p.length=h.length}(S[8][S[61]]??[]).length===0&&!((M=S[6])!=null&&M.isNew&&((F=S[6])==null?void 0:F.date)===S[61])?d||(d=zf(),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),S[63]?g?g.p(S,U):(g=Hf(S),g.c(),g.m(a.parentNode,a)):g&&(g.d(1),g=null),T===(T=E(S))&&w?w.p(S,U):(w.d(1),w=T(S),w&&(w.c(),w.m(u.parentNode,u)))},d(S){S&&(v(e),v(r),v(s),v(o),v(a),v(u),v(c)),lt(p,S),d&&d.d(S),g&&g.d(S),w.d(S)}}}function bE(n){let e,t,i;return{c(){e=y("input"),q(e,"placeholder","예: 제주도")},m(r,s){b(r,e,s),G(e,n[5].destination),t||(i=W(e,"input",n[32]),t=!0)},p(r,s){s[0]&1056&&e.value!==r[5].destination&&G(e,r[5].destination)},d(r){r&&v(e),t=!1,i()}}}function TE(n){let e,t,i,r,s,o,a=Ce(n[10]),u=[];for(let h=0;h<a.length;h+=1)u[h]=Yf(Df(n,a,h));let c=!n[5].destination&&Jf(n);return{c(){e=y("select"),t=y("option"),t.textContent="직접 입력";for(let h=0;h<u.length;h+=1)u[h].c();i=O(),c&&c.c(),r=qe(),t.__value="",G(t,t.__value),n[5].destination===void 0&&Kt(()=>n[30].call(e))},m(h,p){b(h,e,p),m(e,t);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(e,null);kt(e,n[5].destination,!0),b(h,i,p),c&&c.m(h,p),b(h,r,p),s||(o=W(e,"change",n[30]),s=!0)},p(h,p){if(p[0]&1024){a=Ce(h[10]);let d;for(d=0;d<a.length;d+=1){const g=Df(h,a,d);u[d]?u[d].p(g,p):(u[d]=Yf(g),u[d].c(),u[d].m(e,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=a.length}p[0]&1056&&kt(e,h[5].destination),h[5].destination?c&&(c.d(1),c=null):c?c.p(h,p):(c=Jf(h),c.c(),c.m(r.parentNode,r))},d(h){h&&(v(e),v(i),v(r)),lt(u,h),c&&c.d(h),s=!1,o()}}}function Yf(n){let e,t=n[58]+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[58],G(e,e.__value)},m(s,o){b(s,e,o),m(e,i)},p(s,o){o[0]&1024&&t!==(t=s[58]+"")&&Z(i,t),o[0]&1024&&r!==(r=s[58])&&(e.__value=r,G(e,e.__value))},d(s){s&&v(e)}}}function Jf(n){let e,t,i;return{c(){e=y("input"),q(e,"placeholder","여행지 직접 입력"),$(e,"margin-top","0.3rem")},m(r,s){b(r,e,s),G(e,n[5].destination),t||(i=W(e,"input",n[31]),t=!0)},p(r,s){s[0]&1056&&e.value!==r[5].destination&&G(e,r[5].destination)},d(r){r&&v(e),t=!1,i()}}}function wE(n){let e,t=Ce(n[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=$f(Vf(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);b(r,e,s)},p(r,s){if(s[0]&542721){t=Ce(r[0]);let o;for(o=0;o<t.length;o+=1){const a=Vf(r,t,o);i[o]?i[o].p(a,s):(i[o]=$f(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function EE(n){let e;return{c(){e=y("p"),e.textContent="생성된 일정이 없습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Zf(n){let e,t,i=n[55].destination+"",r;return{c(){e=y("span"),t=B("· "),r=B(i)},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&1&&i!==(i=s[55].destination+"")&&Z(r,i)},d(s){s&&v(e)}}}function xf(n){let e,t,i,r;function s(...o){return n[27](n[55],...o)}return{c(){e=y("span"),t=y("button"),t.textContent="삭제",$(e,"float","right")},m(o,a){b(o,e,a),m(e,t),i||(r=W(t,"click",s),i=!0)},p(o,a){n=o},d(o){o&&v(e),i=!1,r()}}}function $f(n){let e,t,i=n[55].title+"",r,s,o,a,u,c,h,p=n[55].startDate+"",d,g,E=n[55].endDate+"",T,w,N,V,S=n[55].destination&&Zf(n),U=n[55].createdBy===n[11].uid&&xf(n);function M(){return n[28](n[55])}return{c(){e=y("div"),t=y("strong"),r=B(i),s=O(),S&&S.c(),o=O(),U&&U.c(),a=O(),u=y("br"),c=O(),h=y("small"),d=B(p),g=B(" ~ "),T=B(E),w=O(),q(e,"class","card"),$(e,"cursor","pointer")},m(F,R){b(F,e,R),m(e,t),m(t,r),m(e,s),S&&S.m(e,null),m(e,o),U&&U.m(e,null),m(e,a),m(e,u),m(e,c),m(e,h),m(h,d),m(h,g),m(h,T),m(e,w),N||(V=W(e,"click",M),N=!0)},p(F,R){n=F,R[0]&1&&i!==(i=n[55].title+"")&&Z(r,i),n[55].destination?S?S.p(n,R):(S=Zf(n),S.c(),S.m(e,o)):S&&(S.d(1),S=null),n[55].createdBy===n[11].uid?U?U.p(n,R):(U=xf(n),U.c(),U.m(e,a)):U&&(U.d(1),U=null),R[0]&1&&p!==(p=n[55].startDate+"")&&Z(d,p),R[0]&1&&E!==(E=n[55].endDate+"")&&Z(T,E)},d(F){F&&v(e),S&&S.d(),U&&U.d(),N=!1,V()}}}function IE(n){let e;function t(s,o){if(!s[3])return mE;if(s[4]==="list")return pE;if(s[4]==="create")return dE;if(s[4]==="detail"&&s[1])return fE}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),b(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function AE(n,e){const t=[],[i,r,s]=n.split("-").map(Number),[o,a,u]=e.split("-").map(Number),c=new Date(i,r-1,s),h=new Date(o,a-1,u);for(let p=new Date(c);p<=h;p.setDate(p.getDate()+1)){const d=p.getFullYear(),g=String(p.getMonth()+1).padStart(2,"0"),E=String(p.getDate()).padStart(2,"0");t.push(`${d}-${g}-${E}`)}return t}function ed(n,e){const[t,i,r]=n.split("-").map(Number),o=new Date(t,i-1,r).toLocaleDateString("ko-KR",{weekday:"short"});return`Day ${e+1} — ${t}.${String(i).padStart(2,"0")}.${String(r).padStart(2,"0")} (${o})`}function kE(n,e,t){let i,r,s,o,a;mn(n,ti,le=>t(3,o=le)),mn(n,xi,le=>t(11,a=le));const u=["이동","식사","관광","숙박","기타"];let c="list",h=[],p=null,d=[],g=[],E,T,w,N={title:"",destination:"",startDate:"",endDate:""},V=null,S=new Set;function U(le){S.has(le)?S.delete(le):S.add(le),t(7,S)}let M=[];function F(){E==null||E(),t(23,E=en(Ht($e(Ae,"groups",o.id,"trips"),Pn("createdAt","desc")),le=>{t(0,h=le.docs.map(Y=>({id:Y.id,...Y.data()})))}))}function R(){w==null||w(),t(24,w=en(Ht($e(Ae,"groups",o.id,"votes"),Na("status","==","closed")),le=>{t(25,M=le.docs.map(Y=>({id:Y.id,...Y.data()})))}))}function A(le){t(1,p=le),t(4,c="detail"),t(22,d=[]),t(6,V=null),T==null||T(),t(2,g=AE(le.startDate,le.endDate)),T=en(Ht($e(Ae,"groups",o.id,"trips",le.id,"items"),Pn("createdAt","asc")),Y=>{t(22,d=Y.docs.map(be=>({id:be.id,...be.data()})))})}async function I(){!N.title.trim()||!N.startDate||!N.endDate||N.startDate>N.endDate||(await ci($e(Ae,"groups",o.id,"trips"),{title:N.title.trim(),destination:N.destination.trim()||null,startDate:N.startDate,endDate:N.endDate,createdBy:a.uid,createdAt:Gt()}),t(5,N={title:"",destination:"",startDate:"",endDate:""}),t(4,c="list"))}function k(le){t(6,V={isNew:!0,date:le,id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""})}function C(le){t(6,V={isNew:!1,...le})}async function L(){var Ne;if(!V.placeName.trim())return;const le=((Ne=V.mapUrl)==null?void 0:Ne.trim())||null,{lat:Y,lng:be}=La(le),Qe={date:V.date,time:V.time||null,placeName:V.placeName.trim(),category:V.category,memo:V.memo.trim(),mapUrl:le,lat:Y,lng:be,updatedAt:Gt()};V.isNew?await ci($e(Ae,"groups",o.id,"trips",p.id,"items"),{...Qe,createdBy:a.uid,createdByName:a.displayName,createdAt:Gt()}):await pn(et(Ae,"groups",o.id,"trips",p.id,"items",V.id),Qe),t(6,V=null)}async function D(le,Y){Y==null||Y.stopPropagation(),confirm(`"${le.title}" 일정을 삭제하시겠습니까?`)&&(await Bt(et(Ae,"groups",o.id,"trips",le.id)),(p==null?void 0:p.id)===le.id&&ne())}async function re(le){t(22,d=d.filter(Y=>Y.id!==le.id)),await Bt(et(Ae,"groups",o.id,"trips",p.id,"items",le.id))}function ne(){t(4,c="list"),t(1,p=null),t(22,d=[]),t(2,g=[]),t(6,V=null),T==null||T()}xs(()=>{E==null||E(),T==null||T(),w==null||w()});const ie=()=>t(4,c="create"),z=(le,Y)=>D(le,Y),J=le=>A(le);function fe(){N.title=this.value,t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}function Te(){N.destination=Vn(this),t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}function me(){N.destination=this.value,t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}function Se(){N.destination=this.value,t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}function Pe(){N.startDate=this.value,t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}function Ie(){N.endDate=this.value,t(5,N),t(10,i),t(25,M),t(3,o),t(23,E),t(24,w)}const Me=le=>{const Y=r.find(be=>be.placeName===le.target.value);Y&&(V||t(6,V={isNew:!0,date:g[0]??"",id:null,time:"",placeName:"",category:"관광",memo:"",mapUrl:""}),t(6,V={...V,placeName:Y.placeName,memo:Y.description||"",mapUrl:Y.mapUrl||""}),le.target.value="")};function ze(){V.time=this.value,t(6,V),t(12,u)}function He(){V.category=Vn(this),t(6,V),t(12,u)}function de(){V.placeName=this.value,t(6,V),t(12,u)}function se(){V.memo=this.value,t(6,V),t(12,u)}function ge(){V.mapUrl=this.value,t(6,V),t(12,u)}const ee=()=>t(6,V=null),oe=le=>C(le),Ue=le=>re(le),ue=le=>U(le);function Q(){V.time=this.value,t(6,V),t(12,u)}function he(){V.category=Vn(this),t(6,V),t(12,u)}function ae(){V.placeName=this.value,t(6,V),t(12,u)}function ve(){V.memo=this.value,t(6,V),t(12,u)}function ot(){V.mapUrl=this.value,t(6,V),t(12,u)}const Ut=()=>t(6,V=null),bn=le=>k(le);return n.$$.update=()=>{if(n.$$.dirty[0]&25165832&&(o?(F(),R()):(t(0,h=[]),t(25,M=[]),E==null||E(),w==null||w())),n.$$.dirty[0]&33554432&&t(10,i=[...new Set(M.filter(le=>{var Y;return le.voteType==="destination"&&((Y=le.winners)==null?void 0:Y.length)}).flatMap(le=>le.winners.map(Y=>Y.placeName??Y)))]),n.$$.dirty[0]&3&&p&&h.length>0){const le=h.find(Y=>Y.id===p.id);le&&t(1,p=le)}n.$$.dirty[0]&33554434&&t(9,r=p?M.filter(le=>{var Y;return le.voteType==="attraction"&&le.linkedDestination===p.destination&&((Y=le.winners)==null?void 0:Y.length)}).flatMap(le=>le.winners):[]),n.$$.dirty[0]&4194308&&t(8,s=Object.fromEntries(g.map(le=>{const Y=d.filter(be=>be.date===le);return[le,[...Y.filter(be=>be.time).sort((be,Qe)=>be.time.localeCompare(Qe.time)),...Y.filter(be=>!be.time)]]})))},[h,p,g,o,c,N,V,S,s,r,i,a,u,U,A,I,k,C,L,D,re,ne,d,E,w,M,ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He,de,se,ge,ee,oe,Ue,ue,Q,he,ae,ve,ot,Ut,bn]}class RE extends Fr{constructor(e){super(),Ur(this,e,kE,IE,Ki,{},null,[-1,-1,-1])}}async function CE(n){if(!n.type.match(/^image\/(jpeg|png)$/))return n;const e=await createImageBitmap(n),t=document.createElement("canvas");let{width:i,height:r}=e;const s=1920;if(i>s||r>s){const o=Math.min(s/i,s/r);i=Math.round(i*o),r=Math.round(r*o)}return t.width=i,t.height=r,t.getContext("2d").drawImage(e,0,0,i,r),new Promise(o=>{t.toBlob(a=>o(a??n),"image/jpeg",.8)})}function td(n,e,t){const i=n.slice();return i[73]=e[t],i}function nd(n,e,t){const i=n.slice();return i[65]=e[t],i}function id(n,e,t){const i=n.slice();return i[62]=e[t],i}function rd(n,e,t){const i=n.slice();return i[65]=e[t],i}function sd(n,e,t){const i=n.slice();return i[70]=e[t],i}function od(n,e,t){const i=n.slice();return i[56]=e[t],i}function ad(n,e,t){const i=n.slice();return i[59]=e[t],i}function PE(n){let e,t,i,r=n[0].title+"",s,o,a,u,c,h,p,d,g,E,T,w,N=n[5].uploadedByName+"",V,S,U,M,F,R,A,I,k=n[31](n[5]),C,L,D,re,ne,ie=n[6].length+"",z,J,fe,Te,me,Se,Pe,Ie,Me,ze,He,de,se=n[5].placeName&&ld(n),ge=n[5].comment&&ud(n),ee=k&&cd(n),oe=Ce(n[6]),Ue=[];for(let ue=0;ue<oe.length;ue+=1)Ue[ue]=fd(td(n,oe,ue));return{c(){e=y("h2"),t=y("button"),t.textContent="← 앨범",i=O(),s=B(r),o=O(),a=y("img"),h=O(),p=y("table"),se&&se.c(),d=O(),ge&&ge.c(),g=O(),E=y("tr"),T=y("th"),T.textContent="업로더",w=y("td"),V=B(N),S=O(),U=y("div"),M=y("a"),F=y("button"),F.textContent="다운로드",I=O(),ee&&ee.c(),C=O(),L=y("hr"),D=O(),re=y("h3"),ne=B("코멘트 ("),z=B(ie),J=B(")"),fe=O();for(let ue=0;ue<Ue.length;ue+=1)Ue[ue].c();Te=O(),me=y("div"),Se=y("textarea"),Pe=O(),Ie=y("button"),Me=B("작성"),Dt(a.src,u=n[5].downloadURL)||q(a,"src",u),q(a,"alt",c=n[5].originalFilename),q(a,"class","full-photo svelte-1ro9az4"),$(p,"margin-top","0.8rem"),q(M,"href",R=n[5].downloadURL),q(M,"download",A=n[5].originalFilename),q(M,"target","_blank"),q(M,"rel","noreferrer"),$(U,"margin-top","0.8rem"),q(Se,"placeholder","코멘트 입력"),q(Se,"rows","2"),q(Se,"class","svelte-1ro9az4"),Ie.disabled=ze=n[19]||!n[18].trim(),q(me,"class","comment-form svelte-1ro9az4")},m(ue,Q){b(ue,e,Q),m(e,t),m(e,i),m(e,s),b(ue,o,Q),b(ue,a,Q),b(ue,h,Q),b(ue,p,Q),se&&se.m(p,null),m(p,d),ge&&ge.m(p,null),m(p,g),m(p,E),m(E,T),m(E,w),m(w,V),b(ue,S,Q),b(ue,U,Q),m(U,M),m(M,F),m(U,I),ee&&ee.m(U,null),b(ue,C,Q),b(ue,L,Q),b(ue,D,Q),b(ue,re,Q),m(re,ne),m(re,z),m(re,J),b(ue,fe,Q);for(let he=0;he<Ue.length;he+=1)Ue[he]&&Ue[he].m(ue,Q);b(ue,Te,Q),b(ue,me,Q),m(me,Se),G(Se,n[18]),m(me,Pe),m(me,Ie),m(Ie,Me),He||(de=[W(t,"click",n[24]),W(Se,"input",n[49]),W(Ie,"click",n[29])],He=!0)},p(ue,Q){if(Q[0]&1&&r!==(r=ue[0].title+"")&&Z(s,r),Q[0]&32&&!Dt(a.src,u=ue[5].downloadURL)&&q(a,"src",u),Q[0]&32&&c!==(c=ue[5].originalFilename)&&q(a,"alt",c),ue[5].placeName?se?se.p(ue,Q):(se=ld(ue),se.c(),se.m(p,d)):se&&(se.d(1),se=null),ue[5].comment?ge?ge.p(ue,Q):(ge=ud(ue),ge.c(),ge.m(p,g)):ge&&(ge.d(1),ge=null),Q[0]&32&&N!==(N=ue[5].uploadedByName+"")&&Z(V,N),Q[0]&32&&R!==(R=ue[5].downloadURL)&&q(M,"href",R),Q[0]&32&&A!==(A=ue[5].originalFilename)&&q(M,"download",A),Q[0]&32&&(k=ue[31](ue[5])),k?ee?ee.p(ue,Q):(ee=cd(ue),ee.c(),ee.m(U,null)):ee&&(ee.d(1),ee=null),Q[0]&64&&ie!==(ie=ue[6].length+"")&&Z(z,ie),Q[0]&1075839040){oe=Ce(ue[6]);let he;for(he=0;he<oe.length;he+=1){const ae=td(ue,oe,he);Ue[he]?Ue[he].p(ae,Q):(Ue[he]=fd(ae),Ue[he].c(),Ue[he].m(Te.parentNode,Te))}for(;he<Ue.length;he+=1)Ue[he].d(1);Ue.length=oe.length}Q[0]&262144&&G(Se,ue[18]),Q[0]&786432&&ze!==(ze=ue[19]||!ue[18].trim())&&(Ie.disabled=ze)},d(ue){ue&&(v(e),v(o),v(a),v(h),v(p),v(S),v(U),v(C),v(L),v(D),v(re),v(fe),v(Te),v(me)),se&&se.d(),ge&&ge.d(),ee&&ee.d(),lt(Ue,ue),He=!1,Xe(de)}}}function SE(n){let e,t,i,r=n[0].title+"",s,o,a,u,c,h,p,d,g,E,T=n[12]&&dd(n);function w(S,U){return S[1].length===0?LE:S[20]?OE:VE}let N=w(n),V=N(n);return{c(){e=y("h2"),t=y("button"),t.textContent="← 목록",i=O(),s=B(r),o=O(),a=y("button"),a.textContent="+ 사진 추가",u=O(),T&&T.c(),c=O(),h=y("hr"),p=O(),V.c(),d=qe()},m(S,U){b(S,e,U),m(e,t),m(e,i),m(e,s),b(S,o,U),b(S,a,U),b(S,u,U),T&&T.m(S,U),b(S,c,U),b(S,h,U),b(S,p,U),V.m(S,U),b(S,d,U),g||(E=[W(t,"click",n[24]),W(a,"click",n[40])],g=!0)},p(S,U){U[0]&1&&r!==(r=S[0].title+"")&&Z(s,r),S[12]?T?T.p(S,U):(T=dd(S),T.c(),T.m(c.parentNode,c)):T&&(T.d(1),T=null),N===(N=w(S))&&V?V.p(S,U):(V.d(1),V=N(S),V&&(V.c(),V.m(d.parentNode,d)))},d(S){S&&(v(e),v(o),v(a),v(u),v(c),v(h),v(p),v(d)),T&&T.d(S),V.d(S),g=!1,Xe(E)}}}function NE(n){let e,t,i,r,s,o,a,u,c,h,p=n[9]&&Td(n);function d(T,w){return T[4].length===0?UE:ME}let g=d(n),E=g(n);return{c(){e=y("h2"),e.textContent="여행 추억",t=O(),i=y("button"),i.textContent="+ 새 추억 앨범 만들기",r=O(),p&&p.c(),s=O(),o=y("hr"),a=O(),E.c(),u=qe()},m(T,w){b(T,e,w),b(T,t,w),b(T,i,w),b(T,r,w),p&&p.m(T,w),b(T,s,w),b(T,o,w),b(T,a,w),E.m(T,w),b(T,u,w),c||(h=W(i,"click",n[34]),c=!0)},p(T,w){T[9]?p?p.p(T,w):(p=Td(T),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null),g===(g=d(T))&&E?E.p(T,w):(E.d(1),E=g(T),E&&(E.c(),E.m(u.parentNode,u)))},d(T){T&&(v(e),v(t),v(i),v(r),v(s),v(o),v(a),v(u)),p&&p.d(T),E.d(T),c=!1,h()}}}function DE(n){let e;return{c(){e=y("p"),e.textContent="그룹을 먼저 선택해주세요."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function ld(n){let e,t,i,r=n[5].placeName+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="장소",i=y("td"),s=B(r)},m(o,a){b(o,e,a),m(e,t),m(e,i),m(i,s)},p(o,a){a[0]&32&&r!==(r=o[5].placeName+"")&&Z(s,r)},d(o){o&&v(e)}}}function ud(n){let e,t,i,r=n[5].comment+"",s;return{c(){e=y("tr"),t=y("th"),t.textContent="코멘트",i=y("td"),s=B(r)},m(o,a){b(o,e,a),m(e,t),m(e,i),m(i,s)},p(o,a){a[0]&32&&r!==(r=o[5].comment+"")&&Z(s,r)},d(o){o&&v(e)}}}function cd(n){let e,t,i;return{c(){e=y("button"),e.textContent="삭제",$(e,"margin-left","0.5rem")},m(r,s){b(r,e,s),t||(i=W(e,"click",n[47]),t=!0)},p:Oe,d(r){r&&v(e),t=!1,i()}}}function hd(n){let e,t,i;function r(){return n[48](n[73])}return{c(){e=y("button"),e.textContent="삭제",q(e,"class","btn-small svelte-1ro9az4")},m(s,o){b(s,e,o),t||(i=W(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function fd(n){var w;let e,t,i,r=n[73].displayName+"",s,o,a,u=Zs(n[73].createdAt)+"",c,h,p,d,g=n[73].content+"",E,T=n[73].userId===((w=n[21])==null?void 0:w.uid)&&hd(n);return{c(){e=y("div"),t=y("div"),i=y("strong"),s=B(r),o=O(),a=y("span"),c=B(u),h=O(),T&&T.c(),p=O(),d=y("p"),E=B(g),q(a,"class","meta svelte-1ro9az4"),q(t,"class","comment-header svelte-1ro9az4"),$(d,"margin","0.3rem 0 0"),q(e,"class","card")},m(N,V){b(N,e,V),m(e,t),m(t,i),m(i,s),m(t,o),m(t,a),m(a,c),m(t,h),T&&T.m(t,null),m(e,p),m(e,d),m(d,E)},p(N,V){var S;V[0]&64&&r!==(r=N[73].displayName+"")&&Z(s,r),V[0]&64&&u!==(u=Zs(N[73].createdAt)+"")&&Z(c,u),N[73].userId===((S=N[21])==null?void 0:S.uid)?T?T.p(N,V):(T=hd(N),T.c(),T.m(t,null)):T&&(T.d(1),T=null),V[0]&64&&g!==(g=N[73].content+"")&&Z(E,g)},d(N){N&&v(e),T&&T.d()}}}function dd(n){let e,t,i,r,s,o,a,u,c,h,p,d=n[16]?"업로드 중...":"업로드",g,E,T,w,N,V,S=n[0].tripId&&n[8].length&&pd(n),U=n[17]&&_d(n);return{c(){e=y("div"),t=y("div"),i=y("input"),r=O(),S&&S.c(),s=O(),o=y("div"),a=y("input"),u=O(),U&&U.c(),c=O(),h=y("div"),p=y("button"),g=B(d),T=O(),w=y("button"),w.textContent="취소",q(i,"type","file"),q(i,"accept","image/jpeg,image/png,image/gif,image/webp"),q(a,"placeholder","한 줄 코멘트 (선택)"),$(a,"width","100%"),$(o,"margin-top","0.4rem"),p.disabled=E=n[16]||!n[13],$(w,"margin-left","0.4rem"),$(h,"margin-top","0.6rem"),q(e,"class","card"),$(e,"margin-top","0.8rem")},m(M,F){b(M,e,F),m(e,t),m(t,i),m(e,r),S&&S.m(e,null),m(e,s),m(e,o),m(o,a),G(a,n[15]),m(e,u),U&&U.m(e,null),m(e,c),m(e,h),m(h,p),m(p,g),m(h,T),m(h,w),N||(V=[W(i,"change",n[41]),W(a,"input",n[43]),W(p,"click",n[26]),W(w,"click",n[44])],N=!0)},p(M,F){M[0].tripId&&M[8].length?S?S.p(M,F):(S=pd(M),S.c(),S.m(e,s)):S&&(S.d(1),S=null),F[0]&32768&&a.value!==M[15]&&G(a,M[15]),M[17]?U?U.p(M,F):(U=_d(M),U.c(),U.m(e,c)):U&&(U.d(1),U=null),F[0]&65536&&d!==(d=M[16]?"업로드 중...":"업로드")&&Z(g,d),F[0]&73728&&E!==(E=M[16]||!M[13])&&(p.disabled=E)},d(M){M&&v(e),S&&S.d(),U&&U.d(),N=!1,Xe(V)}}}function pd(n){let e,t,i,r,s,o=Ce(n[8]),a=[];for(let u=0;u<o.length;u+=1)a[u]=md(sd(n,o,u));return{c(){e=y("div"),t=y("select"),i=y("option"),i.textContent="일정 항목 연결 안 함";for(let u=0;u<a.length;u+=1)a[u].c();i.__value="",G(i,i.__value),$(t,"width","100%"),n[14]===void 0&&Kt(()=>n[42].call(t)),$(e,"margin-top","0.4rem")},m(u,c){b(u,e,c),m(e,t),m(t,i);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null);kt(t,n[14],!0),r||(s=W(t,"change",n[42]),r=!0)},p(u,c){if(c[0]&256|c[1]&2){o=Ce(u[8]);let h;for(h=0;h<o.length;h+=1){const p=sd(u,o,h);a[h]?a[h].p(p,c):(a[h]=md(p),a[h].c(),a[h].m(t,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}c[0]&16640&&kt(t,u[14])},d(u){u&&v(e),lt(a,u),r=!1,s()}}}function md(n){let e,t=n[32](n[70])+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[70].id,G(e,e.__value)},m(s,o){b(s,e,o),m(e,i)},p(s,o){o[0]&256&&t!==(t=s[32](s[70])+"")&&Z(i,t),o[0]&256&&r!==(r=s[70].id)&&(e.__value=r,G(e,e.__value))},d(s){s&&v(e)}}}function _d(n){let e,t;return{c(){e=y("p"),t=B(n[17]),q(e,"class","error svelte-1ro9az4")},m(i,r){b(i,e,r),m(e,t)},p(i,r){r[0]&131072&&Z(t,i[17])},d(i){i&&v(e)}}}function VE(n){let e,t=Ce(n[1]),i=[];for(let r=0;r<t.length;r+=1)i[r]=gd(nd(n,t,r));return{c(){e=y("div");for(let r=0;r<i.length;r+=1)i[r].c();q(e,"class","photo-grid svelte-1ro9az4")},m(r,s){b(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,s){if(s[0]&8388610){t=Ce(r[1]);let o;for(o=0;o<t.length;o+=1){const a=nd(r,t,o);i[o]?i[o].p(a,s):(i[o]=gd(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function OE(n){let e,t=Ce(n[20]),i=[];for(let r=0;r<t.length;r+=1)i[r]=bd(id(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);b(r,e,s)},p(r,s){if(s[0]&9437184){t=Ce(r[20]);let o;for(o=0;o<t.length;o+=1){const a=id(r,t,o);i[o]?i[o].p(a,s):(i[o]=bd(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function LE(n){let e;return{c(){e=y("p"),e.textContent="아직 추가된 사진이 없습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function gd(n){let e,t,i,r,s,o,a=(n[65].comment||n[65].uploadedByName)+"",u,c,h,p;function d(){return n[46](n[65])}return{c(){e=y("div"),t=y("img"),s=O(),o=y("div"),u=B(a),c=O(),Dt(t.src,i=n[65].downloadURL)||q(t,"src",i),q(t,"alt",r=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,E){b(g,e,E),m(e,t),m(e,s),m(e,o),m(o,u),m(e,c),h||(p=W(e,"click",d),h=!0)},p(g,E){n=g,E[0]&2&&!Dt(t.src,i=n[65].downloadURL)&&q(t,"src",i),E[0]&2&&r!==(r=n[65].originalFilename)&&q(t,"alt",r),E[0]&2&&a!==(a=(n[65].comment||n[65].uploadedByName)+"")&&Z(u,a)},d(g){g&&v(e),h=!1,p()}}}function yd(n){let e,t,i=n[62].date+"",r;return{c(){e=y("span"),t=B("· "),r=B(i),q(e,"class","meta svelte-1ro9az4"),$(e,"font-weight","normal")},m(s,o){b(s,e,o),m(e,t),m(e,r)},p(s,o){o[0]&1048576&&i!==(i=s[62].date+"")&&Z(r,i)},d(s){s&&v(e)}}}function vd(n){let e,t,i,r,s,o,a=(n[65].comment||"")+"",u,c,h,p;function d(){return n[45](n[65])}return{c(){e=y("div"),t=y("img"),s=O(),o=y("div"),u=B(a),c=O(),Dt(t.src,i=n[65].downloadURL)||q(t,"src",i),q(t,"alt",r=n[65].originalFilename),q(t,"loading","lazy"),q(t,"class","svelte-1ro9az4"),q(o,"class","photo-meta svelte-1ro9az4"),q(e,"class","photo-thumb svelte-1ro9az4")},m(g,E){b(g,e,E),m(e,t),m(e,s),m(e,o),m(o,u),m(e,c),h||(p=W(e,"click",d),h=!0)},p(g,E){n=g,E[0]&1048576&&!Dt(t.src,i=n[65].downloadURL)&&q(t,"src",i),E[0]&1048576&&r!==(r=n[65].originalFilename)&&q(t,"alt",r),E[0]&1048576&&a!==(a=(n[65].comment||"")+"")&&Z(u,a)},d(g){g&&v(e),h=!1,p()}}}function bd(n){let e,t,i=n[62].label+"",r,s,o,a,u,c=n[62].date&&yd(n),h=Ce(n[62].photos),p=[];for(let d=0;d<h.length;d+=1)p[d]=vd(rd(n,h,d));return{c(){e=y("div"),t=y("h3"),r=B(i),s=O(),c&&c.c(),o=O(),a=y("div");for(let d=0;d<p.length;d+=1)p[d].c();u=O(),q(t,"class","place-label svelte-1ro9az4"),q(a,"class","photo-grid svelte-1ro9az4"),q(e,"class","place-section svelte-1ro9az4")},m(d,g){b(d,e,g),m(e,t),m(t,r),m(t,s),c&&c.m(t,null),m(e,o),m(e,a);for(let E=0;E<p.length;E+=1)p[E]&&p[E].m(a,null);m(e,u)},p(d,g){if(g[0]&1048576&&i!==(i=d[62].label+"")&&Z(r,i),d[62].date?c?c.p(d,g):(c=yd(d),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g[0]&9437184){h=Ce(d[62].photos);let E;for(E=0;E<h.length;E+=1){const T=rd(d,h,E);p[E]?p[E].p(T,g):(p[E]=vd(T),p[E].c(),p[E].m(a,null))}for(;E<p.length;E+=1)p[E].d(1);p.length=h.length}},d(d){d&&v(e),c&&c.d(),lt(p,d)}}}function Td(n){let e,t,i,r,s,o,a,u,c,h,p,d=n[7].length&&wd(n);return{c(){e=y("div"),t=y("div"),i=y("input"),r=O(),d&&d.c(),s=O(),o=y("div"),a=y("button"),a.textContent="만들기",u=O(),c=y("button"),c.textContent="취소",q(i,"placeholder","앨범 제목"),$(i,"width","100%"),$(c,"margin-left","0.4rem"),$(o,"margin-top","0.6rem"),q(e,"class","card"),$(e,"margin-top","0.8rem")},m(g,E){b(g,e,E),m(e,t),m(t,i),G(i,n[10]),m(e,r),d&&d.m(e,null),m(e,s),m(e,o),m(o,a),m(o,u),m(o,c),h||(p=[W(i,"input",n[35]),W(a,"click",n[25]),W(c,"click",n[37])],h=!0)},p(g,E){E[0]&1024&&i.value!==g[10]&&G(i,g[10]),g[7].length?d?d.p(g,E):(d=wd(g),d.c(),d.m(e,s)):d&&(d.d(1),d=null)},d(g){g&&v(e),d&&d.d(),h=!1,Xe(p)}}}function wd(n){let e,t,i,r,s,o=Ce(n[7]),a=[];for(let u=0;u<o.length;u+=1)a[u]=Ed(ad(n,o,u));return{c(){e=y("div"),t=y("select"),i=y("option"),i.textContent="연결된 일정 없음";for(let u=0;u<a.length;u+=1)a[u].c();i.__value="",G(i,i.__value),$(t,"width","100%"),n[11]===void 0&&Kt(()=>n[36].call(t)),$(e,"margin-top","0.4rem")},m(u,c){b(u,e,c),m(e,t),m(t,i);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null);kt(t,n[11],!0),r||(s=W(t,"change",n[36]),r=!0)},p(u,c){if(c[0]&128){o=Ce(u[7]);let h;for(h=0;h<o.length;h+=1){const p=ad(u,o,h);a[h]?a[h].p(p,c):(a[h]=Ed(p),a[h].c(),a[h].m(t,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}c[0]&2176&&kt(t,u[11])},d(u){u&&v(e),lt(a,u),r=!1,s()}}}function Ed(n){let e,t=n[59].title+"",i,r;return{c(){e=y("option"),i=B(t),e.__value=r=n[59].id,G(e,e.__value)},m(s,o){b(s,e,o),m(e,i)},p(s,o){o[0]&128&&t!==(t=s[59].title+"")&&Z(i,t),o[0]&128&&r!==(r=s[59].id)&&(e.__value=r,G(e,e.__value))},d(s){s&&v(e)}}}function ME(n){let e,t=Ce(n[4]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ad(od(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=qe()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);b(r,e,s)},p(r,s){if(s[0]&140509204){t=Ce(r[4]);let o;for(o=0;o<t.length;o+=1){const a=od(r,t,o);i[o]?i[o].p(a,s):(i[o]=Ad(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&v(e),lt(i,r)}}}function UE(n){let e;return{c(){e=y("p"),e.textContent="아직 추억 앨범이 없습니다."},m(t,i){b(t,e,i)},p:Oe,d(t){t&&v(e)}}}function Id(n){let e,t,i;function r(...s){return n[38](n[56],...s)}return{c(){e=y("button"),e.textContent="삭제"},m(s,o){b(s,e,o),t||(i=W(e,"click",r),t=!0)},p(s,o){n=s},d(s){s&&v(e),t=!1,i()}}}function Ad(n){var I,k,C;let e,t,i,r,s=n[56].title+"",o,a,u,c=(n[56].photoCount??0)+"",h,p,d,g,E=Zs(n[56].createdAt)+"",T,w,N=n[56].createdByName+"",V,S,U,M,F,R=(n[56].createdBy===((I=n[21])==null?void 0:I.uid)||((k=n[2])==null?void 0:k.createdBy)===((C=n[21])==null?void 0:C.uid))&&Id(n);function A(){return n[39](n[56])}return{c(){e=y("div"),t=y("div"),i=y("div"),r=y("strong"),o=B(s),a=O(),u=y("span"),h=B(c),p=B("장"),d=O(),g=y("div"),T=B(E),w=B(" · "),V=B(N),S=O(),R&&R.c(),U=O(),q(u,"class","count svelte-1ro9az4"),q(g,"class","meta svelte-1ro9az4"),$(t,"display","flex"),$(t,"justify-content","space-between"),$(t,"align-items","flex-start"),q(e,"class","card album-card svelte-1ro9az4")},m(L,D){b(L,e,D),m(e,t),m(t,i),m(i,r),m(r,o),m(i,a),m(i,u),m(u,h),m(u,p),m(i,d),m(i,g),m(g,T),m(g,w),m(g,V),m(t,S),R&&R.m(t,null),m(e,U),M||(F=W(e,"click",A),M=!0)},p(L,D){var re,ne,ie;n=L,D[0]&16&&s!==(s=n[56].title+"")&&Z(o,s),D[0]&16&&c!==(c=(n[56].photoCount??0)+"")&&Z(h,c),D[0]&16&&E!==(E=Zs(n[56].createdAt)+"")&&Z(T,E),D[0]&16&&N!==(N=n[56].createdByName+"")&&Z(V,N),n[56].createdBy===((re=n[21])==null?void 0:re.uid)||((ne=n[2])==null?void 0:ne.createdBy)===((ie=n[21])==null?void 0:ie.uid)?R?R.p(n,D):(R=Id(n),R.c(),R.m(t,null)):R&&(R.d(1),R=null)},d(L){L&&v(e),R&&R.d(),M=!1,F()}}}function FE(n){let e;function t(s,o){if(!s[2])return DE;if(s[3]==="albums")return NE;if(s[3]==="album")return SE;if(s[3]==="photo")return PE}let i=t(n),r=i&&i(n);return{c(){r&&r.c(),e=qe()},m(s,o){r&&r.m(s,o),b(s,e,o)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r&&r.d(1),r=i&&i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&v(e),r&&r.d(s)}}}function BE(n){const e={};for(const t of n){const i=t.scheduleItemId||"__other__";e[i]||(e[i]={label:t.placeName||"기타",date:t.date||null,photos:[]}),e[i].photos.push(t)}return Object.values(e).sort((t,i)=>t.date?i.date?t.date.localeCompare(i.date):-1:1)}function Zs(n){return n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("ko-KR"):"-"}function jE(n,e,t){let i,r,s,o;mn(n,xi,Y=>t(21,s=Y)),mn(n,ti,Y=>t(2,o=Y));let a="albums",u=[],c=null,h=[],p=null,d=[],g=[],E=[],T=!1,w="",N="",V=!1,S=null,U="",M="",F=!1,R="",A="",I=!1,k=null,C=null,L=null;function D(){C&&(C(),C=null),L&&(L(),L=null),t(3,a="albums"),t(0,c=null),t(5,p=null),t(1,h=[]),t(6,d=[]),t(8,E=[]),t(9,T=!1),t(12,V=!1),re(),ne()}function re(){k&&k(),k=en(Ht($e(Ae,"groups",i,"albums"),Pn("createdAt","desc")),Y=>{t(4,u=Y.docs.map(be=>({id:be.id,...be.data()})))})}async function ne(){try{const Y=await Ci(Ht($e(Ae,"groups",i,"trips"),Pn("startDate")));t(7,g=Y.docs.map(be=>({id:be.id,...be.data()})))}catch{t(7,g=[])}}async function ie(Y){if(t(0,c=Y),t(8,E=[]),t(14,U=""),t(12,V=!1),t(17,R=""),Y.tripId)try{const Qe=(await Ci(Ht($e(Ae,"groups",i,"trips",Y.tripId,"items"),Pn("date")))).docs.map(Ne=>({id:Ne.id,...Ne.data()}));Qe.sort((Ne,We)=>Ne.date!==We.date?Ne.date.localeCompare(We.date):!Ne.time&&!We.time?0:Ne.time?We.time?Ne.time.localeCompare(We.time):-1:1),t(8,E=Qe)}catch(be){console.error("일정 항목 로드 실패:",be),t(8,E=[])}C&&C(),C=en(Ht($e(Ae,"groups",i,"albums",Y.id,"photos"),Pn("uploadedAt","desc")),be=>{t(1,h=be.docs.map(Qe=>({id:Qe.id,...Qe.data()})))}),t(3,a="album")}function z(Y){t(5,p=Y),t(18,A=""),L&&L(),L=en(Ht($e(Ae,"groups",i,"albums",c.id,"photos",Y.id,"comments"),Pn("createdAt","asc")),be=>{t(6,d=be.docs.map(Qe=>({id:Qe.id,...Qe.data()})))}),t(3,a="photo")}function J(){a==="photo"?(L&&(L(),L=null),t(5,p=null),t(6,d=[]),t(3,a="album")):a==="album"&&(C&&(C(),C=null),t(0,c=null),t(1,h=[]),t(8,E=[]),t(12,V=!1),t(3,a="albums"))}async function fe(){w.trim()&&(await ci($e(Ae,"groups",i,"albums"),{title:w.trim(),tripId:N||null,createdBy:s.uid,createdByName:s.displayName,createdAt:Gt(),photoCount:0}),t(10,w=""),t(11,N=""),t(9,T=!1))}async function Te(){if(!S)return;if(!["image/jpeg","image/png","image/gif","image/webp"].includes(S.type)){t(17,R="jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.");return}if(S.size>10*1024*1024){t(17,R="파일 크기는 10MB 이하여야 합니다.");return}t(17,R=""),t(16,F=!0);try{const be=await CE(S),Qe=et($e(Ae,"groups",i,"albums",c.id,"photos")),Ne=`groups/${i}/albums/${c.id}/${Qe.id}_${S.name}`,We=ta(na,Ne);await Pw(We,be);const Ft=await Sw(We),ht=E.find(Tn=>Tn.id===U);await Xs(Qe,{storagePath:Ne,downloadURL:Ft,originalFilename:S.name,uploadedBy:s.uid,uploadedByName:s.displayName,uploadedAt:Gt(),comment:M.trim()||null,scheduleItemId:(ht==null?void 0:ht.id)||null,placeName:(ht==null?void 0:ht.placeName)||null,date:(ht==null?void 0:ht.date)||null}),await pn(et(Ae,"groups",i,"albums",c.id),{photoCount:Kc(1)}),t(13,S=null),t(14,U=""),t(15,M=""),t(12,V=!1)}catch(be){t(17,R="업로드 실패: "+be.message)}finally{t(16,F=!1)}}async function me(Y,be){if(be.stopPropagation(),!confirm(`"${Y.title}" 앨범을 삭제하시겠습니까? 사진과 코멘트가 모두 삭제됩니다.`))return;const Qe=await Ci($e(Ae,"groups",i,"albums",Y.id,"photos"));for(const Ne of Qe.docs){const We=Ne.data();try{await xc(ta(na,We.storagePath))}catch{}const Ft=await Ci($e(Ae,"groups",i,"albums",Y.id,"photos",Ne.id,"comments"));for(const ht of Ft.docs)await Bt(ht.ref);await Bt(Ne.ref)}await Bt(et(Ae,"groups",i,"albums",Y.id))}async function Se(Y){if(!confirm("사진을 삭제하시겠습니까? 코멘트도 함께 삭제됩니다."))return;try{await xc(ta(na,Y.storagePath))}catch{}const be=await Ci($e(Ae,"groups",i,"albums",c.id,"photos",Y.id,"comments"));for(const Qe of be.docs)await Bt(Qe.ref);await Bt(et(Ae,"groups",i,"albums",c.id,"photos",Y.id)),await pn(et(Ae,"groups",i,"albums",c.id),{photoCount:Kc(-1)}),a==="photo"&&J()}async function Pe(){if(!(!A.trim()||I)){t(19,I=!0);try{await ci($e(Ae,"groups",i,"albums",c.id,"photos",p.id,"comments"),{userId:s.uid,displayName:s.displayName,content:A.trim(),createdAt:Gt()}),t(18,A="")}finally{t(19,I=!1)}}}async function Ie(Y){confirm("코멘트를 삭제하시겠습니까?")&&await Bt(et(Ae,"groups",i,"albums",c.id,"photos",p.id,"comments",Y.id))}function Me(Y){return Y.uploadedBy===(s==null?void 0:s.uid)||(o==null?void 0:o.createdBy)===(s==null?void 0:s.uid)}function ze(Y){const be=g.find(gi=>gi.id===(c==null?void 0:c.tripId));if(!(be!=null&&be.startDate))return`${Y.date} ${Y.time??""} ${Y.placeName}`.trim();const[Qe,Ne,We]=be.startDate.split("-").map(Number),[Ft,ht,Tn]=Y.date.split("-").map(Number),$i=Math.round((new Date(Ft,ht-1,Tn)-new Date(Qe,Ne-1,We))/864e5),sn=Y.time?` ${Y.time}`:"";return`Day ${$i+1}${sn} — ${Y.placeName}`}xs(()=>{k&&k(),C&&C(),L&&L()});const He=()=>{t(9,T=!T)};function de(){w=this.value,t(10,w)}function se(){N=Vn(this),t(11,N),t(7,g)}const ge=()=>t(9,T=!1),ee=(Y,be)=>me(Y,be),oe=Y=>ie(Y),Ue=()=>{t(12,V=!V),t(17,R="")},ue=Y=>{t(13,S=Y.target.files[0]),t(17,R="")};function Q(){U=Vn(this),t(14,U),t(8,E)}function he(){M=this.value,t(15,M)}const ae=()=>{t(12,V=!1),t(17,R="")},ve=Y=>z(Y),ot=Y=>z(Y),Ut=()=>Se(p),bn=Y=>Ie(Y);function le(){A=this.value,t(18,A)}return n.$$.update=()=>{n.$$.dirty[0]&4&&t(33,i=o==null?void 0:o.id),n.$$.dirty[1]&4&&i&&D(),n.$$.dirty[0]&3&&t(20,r=c!=null&&c.tripId&&h.length?BE(h):null)},[c,h,o,a,u,p,d,g,E,T,w,N,V,S,U,M,F,R,A,I,r,s,ie,z,J,fe,Te,me,Se,Pe,Ie,Me,ze,i,He,de,se,ge,ee,oe,Ue,ue,Q,he,ae,ve,ot,Ut,bn,le]}class qE extends Fr{constructor(e){super(),Ur(this,e,jE,FE,Ki,{},null,[-1,-1,-1])}}function zE(n){let e,t,i,r,s;return{c(){e=y("p"),e.textContent="로그인이 필요합니다.",t=O(),i=y("button"),i.textContent="Google 로그인"},m(o,a){b(o,e,a),b(o,t,a),b(o,i,a),r||(s=W(i,"click",n[2]),r=!0)},p:Oe,i:Oe,o:Oe,d(o){o&&(v(e),v(t),v(i)),r=!1,s()}}}function HE(n){let e,t,i,r,s,o,a,u,c,h,p,d,g,E=n[1].displayName+"",T,w,N,V,S,U,M,F,R,A,I;var k=n[0];function C(L,D){return{}}return k&&(F=Cu(k,C())),{c(){e=y("header"),t=y("h1"),t.textContent="그룹 여행",i=O(),r=y("nav"),s=y("a"),s.textContent="그룹",o=B(` |
      `),a=y("a"),a.textContent="투표",u=B(` |
      `),c=y("a"),c.textContent="일정",h=B(` |
      `),p=y("a"),p.textContent="추억",d=B(` |
      `),g=y("span"),T=B(E),w=O(),N=y("button"),N.textContent="로그아웃",V=O(),S=y("hr"),U=O(),M=y("main"),F&&Nu(F.$$.fragment),q(s,"href","#groups"),q(a,"href","#vote"),q(c,"href","#schedule"),q(p,"href","#memory")},m(L,D){b(L,e,D),m(e,t),m(e,i),m(e,r),m(r,s),m(r,o),m(r,a),m(r,u),m(r,c),m(r,h),m(r,p),m(r,d),m(r,g),m(g,T),m(r,w),m(r,N),m(e,V),m(e,S),b(L,U,D),b(L,M,D),F&&ra(F,M,null),R=!0,A||(I=W(N,"click",n[4]),A=!0)},p(L,D){if((!R||D&2)&&E!==(E=L[1].displayName+"")&&Z(T,E),D&1&&k!==(k=L[0])){if(F){Sd();const re=F;Os(re.$$.fragment,1,0,()=>{sa(re,1)}),Nd()}k?(F=Cu(k,C()),Nu(F.$$.fragment),kr(F.$$.fragment,1),ra(F,M,null)):F=null}},i(L){R||(F&&kr(F.$$.fragment,L),R=!0)},o(L){F&&Os(F.$$.fragment,L),R=!1},d(L){L&&(v(e),v(U),v(M)),F&&sa(F),A=!1,I()}}}function WE(n){let e,t,i,r;const s=[HE,zE],o=[];function a(u,c){return u[1]?0:1}return e=a(n),t=o[e]=s[e](n),{c(){t.c(),i=qe()},m(u,c){o[e].m(u,c),b(u,i,c),r=!0},p(u,[c]){let h=e;e=a(u),e===h?o[e].p(u,c):(Sd(),Os(o[h],1,1,()=>{o[h]=null}),Nd(),t=o[e],t?t.p(u,c):(t=o[e]=s[e](u),t.c()),kr(t,1),t.m(i.parentNode,i))},i(u){r||(kr(t),r=!0)},o(u){Os(t),r=!1},d(u){u&&v(i),o[e].d(u)}}}function GE(n,e,t){let i,r;mn(n,xi,c=>t(1,r=c));let s=location.hash||"#groups";window.addEventListener("hashchange",()=>t(3,s=location.hash));const o={"#groups":oh,"#vote":hE,"#schedule":RE,"#memory":qE};async function a(){await Nv(Va,new un)}const u=()=>hv(Va);return n.$$.update=()=>{n.$$.dirty&8&&t(0,i=o[s]??oh)},[i,r,a,s,u]}class KE extends Fr{constructor(e){super(),Ur(this,e,GE,WE,Ki,{})}}new KE({target:document.getElementById("app")});
