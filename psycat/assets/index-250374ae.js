(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ou(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function xu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ue(s)?hE(s):xu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ue(t))return t;if(Oe(t))return t}}const lE=/;(?![^(]*\))/g,cE=/:([^]+)/,uE=/\/\*.*?\*\//gs;function hE(t){const e={};return t.replace(uE,"").split(lE).forEach(n=>{if(n){const s=n.split(cE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pu(t){let e="";if(Ue(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=Pu(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dE=Ou(fE);function Ag(t){return!!t||t===""}const gx=t=>Ue(t)?t:t==null?"":J(t)||Oe(t)&&(t.toString===Og||!ne(t.toString))?JSON.stringify(t,kg,2):String(t),kg=(t,e)=>e&&e.__v_isRef?kg(t,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ng(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!J(e)&&!xg(e)?String(e):e,Se={},Qs=[],en=()=>{},pE=()=>!1,gE=/^on[^a-z]/,Na=t=>gE.test(t),Mu=t=>t.startsWith("onUpdate:"),_t=Object.assign,Lu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mE=Object.prototype.hasOwnProperty,de=(t,e)=>mE.call(t,e),J=Array.isArray,Ys=t=>Da(t)==="[object Map]",Ng=t=>Da(t)==="[object Set]",ne=t=>typeof t=="function",Ue=t=>typeof t=="string",Fu=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Dg=t=>Oe(t)&&ne(t.then)&&ne(t.catch),Og=Object.prototype.toString,Da=t=>Og.call(t),_E=t=>Da(t).slice(8,-1),xg=t=>Da(t)==="[object Object]",Uu=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yE=/-(\w)/g,pn=Oa(t=>t.replace(yE,(e,n)=>n?n.toUpperCase():"")),vE=/\B([A-Z])/g,bi=Oa(t=>t.replace(vE,"-$1").toLowerCase()),xa=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=Oa(t=>t?`on${xa(t)}`:""),gr=(t,e)=>!Object.is(t,e),Dl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wE=t=>{const e=parseFloat(t);return isNaN(e)?t:e},EE=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let xf;const TE=()=>xf||(xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dt;class Pg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Mg(t){return new Pg(t)}function bE(t,e=Dt){e&&e.active&&e.effects.push(t)}function Bu(){return Dt}function Lg(t){Dt&&Dt.cleanups.push(t)}const $u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fg=t=>(t.w&Yn)>0,Ug=t=>(t.n&Yn)>0,IE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yn},CE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Fg(i)&&!Ug(i)?i.delete(t):e[n++]=i,i.w&=~Yn,i.n&=~Yn}e.length=n}},qo=new WeakMap;let Ki=0,Yn=1;const mc=30;let Yt;const vs=Symbol(""),_c=Symbol("");class Vu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bE(this,s)}run(){if(!this.active)return this.fn();let e=Yt,n=Hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Yt,Yt=this,Hn=!0,Yn=1<<++Ki,Ki<=mc?IE(this):Pf(this),this.fn()}finally{Ki<=mc&&CE(this),Yn=1<<--Ki,Yt=this.parent,Hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Yt===this?this.deferStop=!0:this.active&&(Pf(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hn=!0;const Bg=[];function Ii(){Bg.push(Hn),Hn=!1}function Ci(){const t=Bg.pop();Hn=t===void 0?!0:t}function At(t,e,n){if(Hn&&Yt){let s=qo.get(t);s||qo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=$u()),$g(i)}}function $g(t,e){let n=!1;Ki<=mc?Ug(t)||(t.n|=Yn,n=!Fg(t)):n=!t.has(Yt),n&&(t.add(Yt),Yt.deps.push(t))}function An(t,e,n,s,i,r){const o=qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Uu(n)&&a.push(o.get("length")):(a.push(o.get(vs)),Ys(t)&&a.push(o.get(_c)));break;case"delete":J(t)||(a.push(o.get(vs)),Ys(t)&&a.push(o.get(_c)));break;case"set":Ys(t)&&a.push(o.get(vs));break}if(a.length===1)a[0]&&yc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yc($u(l))}}function yc(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&Mf(s);for(const s of n)s.computed||Mf(s)}function Mf(t,e){(t!==Yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function SE(t,e){var n;return(n=qo.get(t))===null||n===void 0?void 0:n.get(e)}const RE=Ou("__proto__,__v_isRef,__isVue"),Vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fu)),AE=ju(),kE=ju(!1,!0),NE=ju(!0),Lf=DE();function DE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)At(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ii();const s=he(this)[e].apply(this,n);return Ci(),s}}),t}function OE(t){const e=he(this);return At(e,"has",t),e.hasOwnProperty(t)}function ju(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?GE:zg:e?Kg:qg).get(s))return s;const o=J(s);if(!t){if(o&&de(Lf,i))return Reflect.get(Lf,i,r);if(i==="hasOwnProperty")return OE}const a=Reflect.get(s,i,r);return(Fu(i)?Vg.has(i):RE(i))||(t||At(s,"get",i),e)?a:Pe(a)?o&&Uu(i)?a:a.value:Oe(a)?t?Wg(a):Si(a):a}}const xE=jg(),PE=jg(!0);function jg(t=!1){return function(n,s,i,r){let o=n[s];if(oi(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!Ko(i)&&!oi(i)&&(o=he(o),i=he(i)),!J(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=J(n)&&Uu(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===he(r)&&(a?gr(i,o)&&An(n,"set",s,i):An(n,"add",s,i)),l}}function ME(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&An(t,"delete",e,void 0),s}function LE(t,e){const n=Reflect.has(t,e);return(!Fu(e)||!Vg.has(e))&&At(t,"has",e),n}function FE(t){return At(t,"iterate",J(t)?"length":vs),Reflect.ownKeys(t)}const Hg={get:AE,set:xE,deleteProperty:ME,has:LE,ownKeys:FE},UE={get:NE,set(t,e){return!0},deleteProperty(t,e){return!0}},BE=_t({},Hg,{get:kE,set:PE}),Hu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(e!==r&&At(i,"get",e),At(i,"get",r));const{has:o}=Pa(i),a=s?Hu:n?zu:mr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(t!==i&&At(s,"has",t),At(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function _o(t,e=!1){return t=t.__v_raw,!e&&At(he(t),"iterate",vs),Reflect.get(t,"size",t)}function Ff(t){t=he(t);const e=he(this);return Pa(e).has.call(e,t)||(e.add(t),An(e,"add",t,t)),this}function Uf(t,e){e=he(e);const n=he(this),{has:s,get:i}=Pa(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?gr(e,o)&&An(n,"set",t,e):An(n,"add",t,e),this}function Bf(t){const e=he(this),{has:n,get:s}=Pa(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&An(e,"delete",t,void 0),r}function $f(){const t=he(this),e=t.size!==0,n=t.clear();return e&&An(t,"clear",void 0,void 0),n}function yo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=he(o),l=e?Hu:t?zu:mr;return!t&&At(a,"iterate",vs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function vo(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=Ys(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Hu:e?zu:mr;return!e&&At(r,"iterate",l?_c:vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ln(t){return function(...e){return t==="delete"?!1:this}}function $E(){const t={get(r){return go(this,r)},get size(){return _o(this)},has:mo,add:Ff,set:Uf,delete:Bf,clear:$f,forEach:yo(!1,!1)},e={get(r){return go(this,r,!1,!0)},get size(){return _o(this)},has:mo,add:Ff,set:Uf,delete:Bf,clear:$f,forEach:yo(!1,!0)},n={get(r){return go(this,r,!0)},get size(){return _o(this,!0)},has(r){return mo.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:yo(!0,!1)},s={get(r){return go(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return mo.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vo(r,!1,!1),n[r]=vo(r,!0,!1),e[r]=vo(r,!1,!0),s[r]=vo(r,!0,!0)}),[t,n,e,s]}const[VE,jE,HE,qE]=$E();function qu(t,e){const n=e?t?qE:HE:t?jE:VE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const KE={get:qu(!1,!1)},zE={get:qu(!1,!0)},WE={get:qu(!0,!1)},qg=new WeakMap,Kg=new WeakMap,zg=new WeakMap,GE=new WeakMap;function QE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YE(t){return t.__v_skip||!Object.isExtensible(t)?0:QE(_E(t))}function Si(t){return oi(t)?t:Ku(t,!1,Hg,KE,qg)}function XE(t){return Ku(t,!1,BE,zE,Kg)}function Wg(t){return Ku(t,!0,UE,WE,zg)}function Ku(t,e,n,s,i){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=YE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function qn(t){return oi(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function oi(t){return!!(t&&t.__v_isReadonly)}function Ko(t){return!!(t&&t.__v_isShallow)}function Gg(t){return qn(t)||oi(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ai(t){return Ho(t,"__v_skip",!0),t}const mr=t=>Oe(t)?Si(t):t,zu=t=>Oe(t)?Wg(t):t;function Qg(t){Hn&&Yt&&(t=he(t),$g(t.dep||(t.dep=$u())))}function Yg(t,e){t=he(t);const n=t.dep;n&&yc(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Ot(t){return Jg(t,!1)}function Xg(t){return Jg(t,!0)}function Jg(t,e){return Pe(t)?t:new JE(t,e)}class JE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:mr(e)}get value(){return Qg(this),this._value}set value(e){const n=this.__v_isShallow||Ko(e)||oi(e);e=n?e:he(e),gr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mr(e),Yg(this))}}function wt(t){return Pe(t)?t.value:t}const ZE={get:(t,e,n)=>wt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Zg(t){return qn(t)?t:new Proxy(t,ZE)}function e0(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=n0(t,n);return e}class t0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return SE(he(this._object),this._key)}}function n0(t,e,n){const s=t[e];return Pe(s)?s:new t0(t,e,n)}var em;class s0{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[em]=!1,this._dirty=!0,this.effect=new Vu(e,()=>{this._dirty||(this._dirty=!0,Yg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return Qg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}em="__v_isReadonly";function i0(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=en):(s=t.get,i=t.set),new s0(s,i,r||!i,n)}function Kn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){$r(r,e,n)}return i}function Ht(t,e,n,s){if(ne(t)){const r=Kn(t,e,n,s);return r&&Dg(r)&&r.catch(o=>{$r(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ht(t[r],e,n,s));return i}function $r(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[t,o,a]);return}}r0(t,n,i,s)}function r0(t,e,n,s=!0){console.error(t)}let _r=!1,vc=!1;const ft=[];let an=0;const Xs=[];let bn=null,hs=0;const tm=Promise.resolve();let Wu=null;function Gu(t){const e=Wu||tm;return t?e.then(this?t.bind(this):t):e}function o0(t){let e=an+1,n=ft.length;for(;e<n;){const s=e+n>>>1;yr(ft[s])<t?e=s+1:n=s}return e}function Qu(t){(!ft.length||!ft.includes(t,_r&&t.allowRecurse?an+1:an))&&(t.id==null?ft.push(t):ft.splice(o0(t.id),0,t),nm())}function nm(){!_r&&!vc&&(vc=!0,Wu=tm.then(rm))}function a0(t){const e=ft.indexOf(t);e>an&&ft.splice(e,1)}function sm(t){J(t)?Xs.push(...t):(!bn||!bn.includes(t,t.allowRecurse?hs+1:hs))&&Xs.push(t),nm()}function Vf(t,e=_r?an+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function im(t){if(Xs.length){const e=[...new Set(Xs)];if(Xs.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,s)=>yr(n)-yr(s)),hs=0;hs<bn.length;hs++)bn[hs]();bn=null,hs=0}}const yr=t=>t.id==null?1/0:t.id,l0=(t,e)=>{const n=yr(t)-yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rm(t){vc=!1,_r=!0,ft.sort(l0);const e=en;try{for(an=0;an<ft.length;an++){const n=ft[an];n&&n.active!==!1&&Kn(n,null,14)}}finally{an=0,ft.length=0,im(),_r=!1,Wu=null,(ft.length||Xs.length)&&rm()}}function c0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(i=n.map(d=>Ue(d)?d.trim():d)),h&&(i=n.map(wE))}let a,l=s[a=Nl(e)]||s[a=Nl(pn(e))];!l&&r&&(l=s[a=Nl(bi(e))]),l&&Ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(c,t,6,i)}}function om(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=om(c,e,!0);u&&(a=!0,_t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Oe(t)&&s.set(t,null),null):(J(r)?r.forEach(l=>o[l]=null):_t(o,r),Oe(t)&&s.set(t,o),o)}function Ma(t,e){return!t||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,bi(e))||de(t,e))}let nt=null,am=null;function zo(t){const e=nt;return nt=t,am=t&&t.type.__scopeId||null,e}function wc(t,e=nt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jf(-1);const r=zo(e);let o;try{o=t(...i)}finally{zo(r),s._d&&Jf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ol(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=t;let y,b;const E=zo(t);try{if(n.shapeFlag&4){const N=i||s;y=Qt(u.call(N,N,h,r,d,f,g)),b=l}else{const N=e;y=Qt(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),b=e.props?l:h0(l)}}catch(N){tr.length=0,$r(N,t,1),y=st(Rt)}let v=y;if(b&&_!==!1){const N=Object.keys(b),{shapeFlag:M}=v;N.length&&M&7&&(o&&N.some(Mu)&&(b=f0(b,o)),v=Xn(v,b))}return n.dirs&&(v=Xn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v,zo(E),y}function u0(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(wr(s)){if(s.type!==Rt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const h0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Na(n))&&((e||(e={}))[n]=t[n]);return e},f0=(t,e)=>{const n={};for(const s in t)(!Mu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function d0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?jf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ma(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jf(s,o,c):!0:!!o;return!1}function jf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ma(n,r))return!0}return!1}function Yu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const p0=t=>t.__isSuspense,g0={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?_0(e,n,s,i,r,o,a,l,c):y0(t,e,n,s,i,o,a,l,c)},hydrate:v0,create:Xu,normalize:w0},m0=g0;function vr(t,e){const n=t.props&&t.props[e];ne(n)&&n()}function _0(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Xu(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(vr(t,"onPending"),vr(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Js(f,t.ssFallback)):f.resolve()}function y0(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:y,isHydrating:b}=h;if(_)h.pendingBranch=f,ln(f,_)?(l(_,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():y&&(l(g,d,n,s,i,null,r,o,a),Js(h,d))):(h.pendingId++,b?(h.isHydrating=!1,h.activeBranch=_):c(_,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(g,d,n,s,i,null,r,o,a),Js(h,d))):g&&ln(f,g)?(l(g,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(g&&ln(f,g))l(g,f,n,s,i,h,r,o,a),Js(h,f);else if(vr(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:E,pendingId:v}=h;E>0?setTimeout(()=>{h.pendingId===v&&h.fallback(d)},E):E===0&&h.fallback(d)}}function Xu(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:g,o:{parentNode:_,remove:y}}=c,b=t.props?EE(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:N,activeBranch:M,pendingBranch:H,pendingId:B,effects:A,parentComponent:Y,container:ee}=E;if(E.isHydrating)E.isHydrating=!1;else if(!v){const ot=M&&H.transition&&H.transition.mode==="out-in";ot&&(M.transition.afterLeave=()=>{B===E.pendingId&&f(H,ee,qe,0)});let{anchor:qe}=E;M&&(qe=g(M),d(M,Y,E,!0)),ot||f(H,ee,qe,0)}Js(E,H),E.pendingBranch=null,E.isInFallback=!1;let ge=E.parent,Le=!1;for(;ge;){if(ge.pendingBranch){ge.effects.push(...A),Le=!0;break}ge=ge.parent}Le||sm(A),E.effects=[],vr(N,"onResolve")},fallback(v){if(!E.pendingBranch)return;const{vnode:N,activeBranch:M,parentComponent:H,container:B,isSVG:A}=E;vr(N,"onFallback");const Y=g(M),ee=()=>{E.isInFallback&&(h(null,v,B,Y,H,null,A,a,l),Js(E,v))},ge=v.transition&&v.transition.mode==="out-in";ge&&(M.transition.afterLeave=ee),E.isInFallback=!0,d(M,H,null,!0),ge||ee()},move(v,N,M){E.activeBranch&&f(E.activeBranch,v,N,M),E.container=v},next(){return E.activeBranch&&g(E.activeBranch)},registerDep(v,N){const M=!!E.pendingBranch;M&&E.deps++;const H=v.vnode.el;v.asyncDep.catch(B=>{$r(B,v,0)}).then(B=>{if(v.isUnmounted||E.isUnmounted||E.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:A}=v;Ac(v,B,!1),H&&(A.el=H);const Y=!H&&v.subTree.el;N(v,A,_(H||v.subTree.el),H?null:g(v.subTree),E,o,l),Y&&y(Y),Yu(v,A.el),M&&--E.deps===0&&E.resolve()})},unmount(v,N){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,v,N),E.pendingBranch&&d(E.pendingBranch,n,v,N)}};return E}function v0(t,e,n,s,i,r,o,a,l){const c=e.suspense=Xu(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function w0(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Hf(s?n.default:n),t.ssFallback=s?Hf(n.fallback):st(Rt)}function Hf(t){let e;if(ne(t)){const n=li&&t._c;n&&(t._d=!1,Vr()),t=t(),n&&(t._d=!0,e=Vt,km())}return J(t)&&(t=u0(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function E0(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):sm(t)}function Js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Yu(s,i))}function Mo(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Fe||nt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}const wo={};function Zs(t,e,n){return lm(t,e,n)}function lm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=Bu()===(Fe==null?void 0:Fe.scope)?Fe:null;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=Ko(t)):qn(t)?(l=()=>t,s=!0):J(t)?(u=!0,c=t.some(v=>qn(v)||Ko(v)),l=()=>t.map(v=>{if(Pe(v))return v.value;if(qn(v))return ds(v);if(ne(v))return Kn(v,a,2)})):ne(t)?e?l=()=>Kn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ht(t,a,3,[f])}:l=en,e&&s){const v=l;l=()=>ds(v())}let h,f=v=>{h=b.onStop=()=>{Kn(v,a,4)}},d;if(Er)if(f=en,e?n&&Ht(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const v=hT();d=v.__watcherHandles||(v.__watcherHandles=[])}else return en;let g=u?new Array(t.length).fill(wo):wo;const _=()=>{if(b.active)if(e){const v=b.run();(s||c||(u?v.some((N,M)=>gr(N,g[M])):gr(v,g)))&&(h&&h(),Ht(e,a,3,[v,g===wo?void 0:u&&g[0]===wo?[]:g,f]),g=v)}else b.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>It(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Qu(_));const b=new Vu(l,y);e?n?_():g=b.run():i==="post"?It(b.run.bind(b),a&&a.suspense):b.run();const E=()=>{b.stop(),a&&a.scope&&Lu(a.scope.effects,b)};return d&&d.push(E),E}function T0(t,e,n){const s=this.proxy,i=Ue(t)?t.includes(".")?cm(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Fe;ci(this);const a=lm(i,r.bind(s),n);return o?ci(o):ws(),a}function cm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ds(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))ds(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)ds(t[n],e);else if(Ng(t)||Ys(t))t.forEach(n=>{ds(n,e)});else if(xg(t))for(const n in t)ds(t[n],e);return t}function b0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pm(()=>{t.isMounted=!0}),gm(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],I0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},setup(t,{slots:e}){const n=jr(),s=b0();let i;return()=>{const r=e.default&&hm(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==Rt){o=_;break}}const a=he(t),{mode:l}=a;if(s.isLeaving)return xl(o);const c=qf(o);if(!c)return xl(o);const u=Ec(c,a,s,n);Tc(c,u);const h=n.subTree,f=h&&qf(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();i===void 0?i=_:_!==i&&(i=_,d=!0)}if(f&&f.type!==Rt&&(!ln(c,f)||d)){const _=Ec(f,a,s,n);if(Tc(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},xl(o);l==="in-out"&&c.type!==Rt&&(_.delayLeave=(y,b,E)=>{const v=um(s,f);v[String(f.key)]=f,y._leaveCb=()=>{b(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},C0=I0;function um(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ec(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:_,onAppear:y,onAfterAppear:b,onAppearCancelled:E}=e,v=String(t.key),N=um(n,t),M=(A,Y)=>{A&&Ht(A,s,9,Y)},H=(A,Y)=>{const ee=Y[1];M(A,Y),J(A)?A.every(ge=>ge.length<=1)&&ee():A.length<=1&&ee()},B={mode:r,persisted:o,beforeEnter(A){let Y=a;if(!n.isMounted)if(i)Y=_||a;else return;A._leaveCb&&A._leaveCb(!0);const ee=N[v];ee&&ln(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),M(Y,[A])},enter(A){let Y=l,ee=c,ge=u;if(!n.isMounted)if(i)Y=y||l,ee=b||c,ge=E||u;else return;let Le=!1;const ot=A._enterCb=qe=>{Le||(Le=!0,qe?M(ge,[A]):M(ee,[A]),B.delayedLeave&&B.delayedLeave(),A._enterCb=void 0)};Y?H(Y,[A,ot]):ot()},leave(A,Y){const ee=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return Y();M(h,[A]);let ge=!1;const Le=A._leaveCb=ot=>{ge||(ge=!0,Y(),ot?M(g,[A]):M(d,[A]),A._leaveCb=void 0,N[ee]===t&&delete N[ee])};N[ee]=t,f?H(f,[A,Le]):Le()},clone(A){return Ec(A,e,n,s)}};return B}function xl(t){if(La(t))return t=Xn(t),t.children=null,t}function qf(t){return La(t)?t.children?t.children[0]:void 0:t}function Tc(t,e){t.shapeFlag&6&&t.component?Tc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===$t?(o.patchFlag&128&&i++,s=s.concat(hm(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Xn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function fm(t){return ne(t)?{setup:t,name:t.name}:t}const Zi=t=>!!t.type.__asyncLoader,La=t=>t.type.__isKeepAlive;function S0(t,e){dm(t,"a",e)}function R0(t,e){dm(t,"da",e)}function dm(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Fa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)La(i.parent.vnode)&&A0(s,e,n,i),i=i.parent}}function A0(t,e,n,s){const i=Fa(e,t,s,!0);mm(()=>{Lu(s[e],i)},n)}function Fa(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ii(),ci(n);const a=Ht(e,n,t,o);return ws(),Ci(),a});return s?i.unshift(r):i.push(r),r}}const xn=t=>(e,n=Fe)=>(!Er||t==="sp")&&Fa(t,(...s)=>e(...s),n),k0=xn("bm"),pm=xn("m"),N0=xn("bu"),D0=xn("u"),gm=xn("bum"),mm=xn("um"),_m=xn("sp"),O0=xn("rtg"),x0=xn("rtc");function P0(t,e=Fe){Fa("ec",t,e)}function mx(t,e){const n=nt;if(n===null)return t;const s=Va(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Se]=e[r];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&ds(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function os(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ii(),Ht(l,n,8,[t.el,a,t,e]),Ci())}}const Ju="components";function M0(t,e){return vm(Ju,t,!0,e)||t}const ym=Symbol();function _x(t){return Ue(t)?vm(Ju,t,!1)||t:t||ym}function vm(t,e,n=!0,s=!1){const i=nt||Fe;if(i){const r=i.type;if(t===Ju){const a=cT(r,!1);if(a&&(a===e||a===pn(e)||a===xa(pn(e))))return r}const o=Kf(i[t]||r[t],e)||Kf(i.appContext[t],e);return!o&&s?r:o}}function Kf(t,e){return t&&(t[e]||t[pn(e)]||t[xa(pn(e))])}function yx(t,e,n,s){let i;const r=n&&n[s];if(J(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function vx(t,e,n={},s,i){if(nt.isCE||nt.parent&&Zi(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),st("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Vr();const o=r&&wm(r(n)),a=Ba($t,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function wm(t){return t.some(e=>wr(e)?!(e.type===Rt||e.type===$t&&!wm(e.children)):!0)?t:null}const bc=t=>t?Pm(t)?Va(t)||t.proxy:bc(t.parent):null,er=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$emit:t=>t.emit,$options:t=>Zu(t),$forceUpdate:t=>t.f||(t.f=()=>Qu(t.update)),$nextTick:t=>t.n||(t.n=Gu.bind(t.proxy)),$watch:t=>T0.bind(t)}),Pl=(t,e)=>t!==Se&&!t.__isScriptSetup&&de(t,e),L0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Pl(s,e))return o[e]=1,s[e];if(i!==Se&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==Se&&de(n,e))return o[e]=4,n[e];Ic&&(o[e]=0)}}const u=er[e];let h,f;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&de(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Pl(i,e)?(i[e]=n,!0):s!==Se&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&de(t,o)||Pl(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(er,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ic=!0;function F0(t){const e=Zu(t),n=t.proxy,s=t.ctx;Ic=!1,e.beforeCreate&&zf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:y,beforeDestroy:b,beforeUnmount:E,destroyed:v,unmounted:N,render:M,renderTracked:H,renderTriggered:B,errorCaptured:A,serverPrefetch:Y,expose:ee,inheritAttrs:ge,components:Le,directives:ot,filters:qe}=e;if(c&&U0(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const we=o[be];ne(we)&&(s[be]=we.bind(n))}if(i){const be=i.call(n,n);Oe(be)&&(t.data=Si(be))}if(Ic=!0,r)for(const be in r){const we=r[be],zt=ne(we)?we.bind(n,n):ne(we.get)?we.get.bind(n,n):en,rs=!ne(we)&&ne(we.set)?we.set.bind(n):en,Wt=xt({get:zt,set:rs});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:bt=>Wt.value=bt})}if(a)for(const be in a)Em(a[be],s,n,be);if(l){const be=ne(l)?l.call(n):l;Reflect.ownKeys(be).forEach(we=>{Mo(we,be[we])})}u&&zf(u,t,"c");function Be(be,we){J(we)?we.forEach(zt=>be(zt.bind(n))):we&&be(we.bind(n))}if(Be(k0,h),Be(pm,f),Be(N0,d),Be(D0,g),Be(S0,_),Be(R0,y),Be(P0,A),Be(x0,H),Be(O0,B),Be(gm,E),Be(mm,N),Be(_m,Y),J(ee))if(ee.length){const be=t.exposed||(t.exposed={});ee.forEach(we=>{Object.defineProperty(be,we,{get:()=>n[we],set:zt=>n[we]=zt})})}else t.exposed||(t.exposed={});M&&t.render===en&&(t.render=M),ge!=null&&(t.inheritAttrs=ge),Le&&(t.components=Le),ot&&(t.directives=ot)}function U0(t,e,n=en,s=!1){J(t)&&(t=Cc(t));for(const i in t){const r=t[i];let o;Oe(r)?"default"in r?o=Mt(r.from||i,r.default,!0):o=Mt(r.from||i):o=Mt(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function zf(t,e,n){Ht(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Em(t,e,n,s){const i=s.includes(".")?cm(n,s):()=>n[s];if(Ue(t)){const r=e[t];ne(r)&&Zs(i,r)}else if(ne(t))Zs(i,t.bind(n));else if(Oe(t))if(J(t))t.forEach(r=>Em(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&Zs(i,r,t)}}function Zu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),Oe(e)&&r.set(e,l),l}function Wo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Wo(t,r,n,!0),i&&i.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=B0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const B0={data:Wf,props:ls,emits:ls,methods:ls,computed:ls,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:ls,directives:ls,watch:V0,provide:Wf,inject:$0};function Wf(t,e){return e?t?function(){return _t(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function $0(t,e){return ls(Cc(t),Cc(e))}function Cc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?_t(_t(Object.create(null),t),e):e}function V0(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const s in e)n[s]=vt(t[s],e[s]);return n}function j0(t,e,n,s=!1){const i={},r={};Ho(r,$a,1),t.propsDefaults=Object.create(null),Tm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:XE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function H0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(t.emitsOptions,f))continue;const d=e[f];if(l)if(de(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=pn(f);i[g]=Sc(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Tm(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=bi(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Sc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],c=!0)}c&&An(t,"set","$attrs")}function Tm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;i&&de(i,u=pn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ma(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=he(n),c=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Sc(i,l,h,c[h],t,!de(c,h))}}return o}function Sc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ci(i),s=c[n]=l.call(null,e),ws())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===bi(n))&&(s=!0))}return s}function bm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=bm(h,e,!0);_t(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Oe(t)&&s.set(t,Qs),Qs;if(J(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Gf(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=pn(u);if(Gf(h)){const f=r[u],d=o[h]=J(f)||ne(f)?{type:f}:Object.assign({},f);if(d){const g=Xf(Boolean,d.type),_=Xf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||de(d,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&s.set(t,c),c}function Gf(t){return t[0]!=="$"}function Qf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yf(t,e){return Qf(t)===Qf(e)}function Xf(t,e){return J(e)?e.findIndex(n=>Yf(n,t)):ne(e)&&Yf(e,t)?0:-1}const Im=t=>t[0]==="_"||t==="$stable",eh=t=>J(t)?t.map(Qt):[Qt(t)],q0=(t,e,n)=>{if(e._n)return e;const s=wc((...i)=>eh(e(...i)),n);return s._c=!1,s},Cm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Im(i))continue;const r=t[i];if(ne(r))e[i]=q0(i,r,s);else if(r!=null){const o=eh(r);e[i]=()=>o}}},Sm=(t,e)=>{const n=eh(e);t.slots.default=()=>n},K0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Ho(e,"_",n)):Cm(e,t.slots={})}else t.slots={},e&&Sm(t,e);Ho(t.slots,$a,1)},z0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(_t(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Cm(e,i)),o=e}else e&&(Sm(t,e),o={default:1});if(r)for(const a in i)!Im(a)&&!(a in o)&&delete i[a]};function Rm(){return{app:null,config:{isNativeTag:pE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W0=0;function G0(t,e){return function(s,i=null){ne(s)||(s=Object.assign({},s)),i!=null&&!Oe(i)&&(i=null);const r=Rm(),o=new Set;let a=!1;const l=r.app={_uid:W0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fT,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=st(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Va(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Rc(t,e,n,s,i=!1){if(J(t)){t.forEach((f,d)=>Rc(f,e&&(J(e)?e[d]:e),n,s,i));return}if(Zi(s)&&!i)return;const r=s.shapeFlag&4?Va(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,de(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),ne(l))Kn(l,a,12,[o,u]);else{const f=Ue(l),d=Pe(l);if(f||d){const g=()=>{if(t.f){const _=f?de(h,l)?h[l]:u[l]:l.value;i?J(_)&&Lu(_,r):J(_)?_.includes(r)||_.push(r):f?(u[l]=[r],de(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,de(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,It(g,n)):g()}}}const It=E0;function Q0(t){return Y0(t)}function Y0(t,e){const n=TE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=en,insertStaticContent:g}=t,_=(p,m,w,T=null,C=null,O=null,F=!1,D=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!ln(p,m)&&(T=L(p),bt(p,C,O,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:R,ref:K,shapeFlag:$}=m;switch(R){case Ua:y(p,m,w,T);break;case Rt:b(p,m,w,T);break;case Lo:p==null&&E(m,w,T,F);break;case $t:Le(p,m,w,T,C,O,F,D,x);break;default:$&1?M(p,m,w,T,C,O,F,D,x):$&6?ot(p,m,w,T,C,O,F,D,x):($&64||$&128)&&R.process(p,m,w,T,C,O,F,D,x,fe)}K!=null&&C&&Rc(K,p&&p.ref,O,m||p,!m)},y=(p,m,w,T)=>{if(p==null)s(m.el=a(m.children),w,T);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},b=(p,m,w,T)=>{p==null?s(m.el=l(m.children||""),w,T):m.el=p.el},E=(p,m,w,T)=>{[p.el,p.anchor]=g(p.children,m,w,T,p.el,p.anchor)},v=({el:p,anchor:m},w,T)=>{let C;for(;p&&p!==m;)C=f(p),s(p,w,T),p=C;s(m,w,T)},N=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=f(p),i(p),p=w;i(m)},M=(p,m,w,T,C,O,F,D,x)=>{F=F||m.type==="svg",p==null?H(m,w,T,C,O,F,D,x):Y(p,m,C,O,F,D,x)},H=(p,m,w,T,C,O,F,D)=>{let x,R;const{type:K,props:$,shapeFlag:z,transition:Z,dirs:re}=p;if(x=p.el=o(p.type,O,$&&$.is,$),z&8?u(x,p.children):z&16&&A(p.children,x,null,T,C,O&&K!=="foreignObject",F,D),re&&os(p,null,T,"created"),B(x,p,p.scopeId,F,T),$){for(const Ee in $)Ee!=="value"&&!Po(Ee)&&r(x,Ee,null,$[Ee],O,p.children,T,C,U);"value"in $&&r(x,"value",null,$.value),(R=$.onVnodeBeforeMount)&&on(R,T,p)}re&&os(p,null,T,"beforeMount");const Ie=(!C||C&&!C.pendingBranch)&&Z&&!Z.persisted;Ie&&Z.beforeEnter(x),s(x,m,w),((R=$&&$.onVnodeMounted)||Ie||re)&&It(()=>{R&&on(R,T,p),Ie&&Z.enter(x),re&&os(p,null,T,"mounted")},C)},B=(p,m,w,T,C)=>{if(w&&d(p,w),T)for(let O=0;O<T.length;O++)d(p,T[O]);if(C){let O=C.subTree;if(m===O){const F=C.vnode;B(p,F,F.scopeId,F.slotScopeIds,C.parent)}}},A=(p,m,w,T,C,O,F,D,x=0)=>{for(let R=x;R<p.length;R++){const K=p[R]=D?Vn(p[R]):Qt(p[R]);_(null,K,m,w,T,C,O,F,D)}},Y=(p,m,w,T,C,O,F)=>{const D=m.el=p.el;let{patchFlag:x,dynamicChildren:R,dirs:K}=m;x|=p.patchFlag&16;const $=p.props||Se,z=m.props||Se;let Z;w&&as(w,!1),(Z=z.onVnodeBeforeUpdate)&&on(Z,w,m,p),K&&os(m,p,w,"beforeUpdate"),w&&as(w,!0);const re=C&&m.type!=="foreignObject";if(R?ee(p.dynamicChildren,R,D,w,T,re,O):F||we(p,m,D,null,w,T,re,O,!1),x>0){if(x&16)ge(D,m,$,z,w,T,C);else if(x&2&&$.class!==z.class&&r(D,"class",null,z.class,C),x&4&&r(D,"style",$.style,z.style,C),x&8){const Ie=m.dynamicProps;for(let Ee=0;Ee<Ie.length;Ee++){const $e=Ie[Ee],Gt=$[$e],Bs=z[$e];(Bs!==Gt||$e==="value")&&r(D,$e,Gt,Bs,C,p.children,w,T,U)}}x&1&&p.children!==m.children&&u(D,m.children)}else!F&&R==null&&ge(D,m,$,z,w,T,C);((Z=z.onVnodeUpdated)||K)&&It(()=>{Z&&on(Z,w,m,p),K&&os(m,p,w,"updated")},T)},ee=(p,m,w,T,C,O,F)=>{for(let D=0;D<m.length;D++){const x=p[D],R=m[D],K=x.el&&(x.type===$t||!ln(x,R)||x.shapeFlag&70)?h(x.el):w;_(x,R,K,null,T,C,O,F,!0)}},ge=(p,m,w,T,C,O,F)=>{if(w!==T){if(w!==Se)for(const D in w)!Po(D)&&!(D in T)&&r(p,D,w[D],null,F,m.children,C,O,U);for(const D in T){if(Po(D))continue;const x=T[D],R=w[D];x!==R&&D!=="value"&&r(p,D,R,x,F,m.children,C,O,U)}"value"in T&&r(p,"value",w.value,T.value)}},Le=(p,m,w,T,C,O,F,D,x)=>{const R=m.el=p?p.el:a(""),K=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:Z}=m;Z&&(D=D?D.concat(Z):Z),p==null?(s(R,w,T),s(K,w,T),A(m.children,w,K,C,O,F,D,x)):$>0&&$&64&&z&&p.dynamicChildren?(ee(p.dynamicChildren,z,w,C,O,F,D),(m.key!=null||C&&m===C.subTree)&&Am(p,m,!0)):we(p,m,w,K,C,O,F,D,x)},ot=(p,m,w,T,C,O,F,D,x)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?C.ctx.activate(m,w,T,F,x):qe(m,w,T,C,O,F,x):Ge(p,m,x)},qe=(p,m,w,T,C,O,F)=>{const D=p.component=iT(p,T,C);if(La(p)&&(D.ctx.renderer=fe),rT(D),D.asyncDep){if(C&&C.registerDep(D,Be),!p.el){const x=D.subTree=st(Rt);b(null,x,m,w)}return}Be(D,p,m,w,C,O,F)},Ge=(p,m,w)=>{const T=m.component=p.component;if(d0(p,m,w))if(T.asyncDep&&!T.asyncResolved){be(T,m,w);return}else T.next=m,a0(T.update),T.update();else m.el=p.el,T.vnode=m},Be=(p,m,w,T,C,O,F)=>{const D=()=>{if(p.isMounted){let{next:K,bu:$,u:z,parent:Z,vnode:re}=p,Ie=K,Ee;as(p,!1),K?(K.el=re.el,be(p,K,F)):K=re,$&&Dl($),(Ee=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ee,Z,K,re),as(p,!0);const $e=Ol(p),Gt=p.subTree;p.subTree=$e,_(Gt,$e,h(Gt.el),L(Gt),p,C,O),K.el=$e.el,Ie===null&&Yu(p,$e.el),z&&It(z,C),(Ee=K.props&&K.props.onVnodeUpdated)&&It(()=>on(Ee,Z,K,re),C)}else{let K;const{el:$,props:z}=m,{bm:Z,m:re,parent:Ie}=p,Ee=Zi(m);if(as(p,!1),Z&&Dl(Z),!Ee&&(K=z&&z.onVnodeBeforeMount)&&on(K,Ie,m),as(p,!0),$&&ie){const $e=()=>{p.subTree=Ol(p),ie($,p.subTree,p,C,null)};Ee?m.type.__asyncLoader().then(()=>!p.isUnmounted&&$e()):$e()}else{const $e=p.subTree=Ol(p);_(null,$e,w,T,p,C,O),m.el=$e.el}if(re&&It(re,C),!Ee&&(K=z&&z.onVnodeMounted)){const $e=m;It(()=>on(K,Ie,$e),C)}(m.shapeFlag&256||Ie&&Zi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&It(p.a,C),p.isMounted=!0,m=w=T=null}},x=p.effect=new Vu(D,()=>Qu(R),p.scope),R=p.update=()=>x.run();R.id=p.uid,as(p,!0),R()},be=(p,m,w)=>{m.component=p;const T=p.vnode.props;p.vnode=m,p.next=null,H0(p,m.props,T,w),z0(p,m.children,w),Ii(),Vf(),Ci()},we=(p,m,w,T,C,O,F,D,x=!1)=>{const R=p&&p.children,K=p?p.shapeFlag:0,$=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){rs(R,$,w,T,C,O,F,D,x);return}else if(z&256){zt(R,$,w,T,C,O,F,D,x);return}}Z&8?(K&16&&U(R,C,O),$!==R&&u(w,$)):K&16?Z&16?rs(R,$,w,T,C,O,F,D,x):U(R,C,O,!0):(K&8&&u(w,""),Z&16&&A($,w,T,C,O,F,D,x))},zt=(p,m,w,T,C,O,F,D,x)=>{p=p||Qs,m=m||Qs;const R=p.length,K=m.length,$=Math.min(R,K);let z;for(z=0;z<$;z++){const Z=m[z]=x?Vn(m[z]):Qt(m[z]);_(p[z],Z,w,null,C,O,F,D,x)}R>K?U(p,C,O,!0,!1,$):A(m,w,T,C,O,F,D,x,$)},rs=(p,m,w,T,C,O,F,D,x)=>{let R=0;const K=m.length;let $=p.length-1,z=K-1;for(;R<=$&&R<=z;){const Z=p[R],re=m[R]=x?Vn(m[R]):Qt(m[R]);if(ln(Z,re))_(Z,re,w,null,C,O,F,D,x);else break;R++}for(;R<=$&&R<=z;){const Z=p[$],re=m[z]=x?Vn(m[z]):Qt(m[z]);if(ln(Z,re))_(Z,re,w,null,C,O,F,D,x);else break;$--,z--}if(R>$){if(R<=z){const Z=z+1,re=Z<K?m[Z].el:T;for(;R<=z;)_(null,m[R]=x?Vn(m[R]):Qt(m[R]),w,re,C,O,F,D,x),R++}}else if(R>z)for(;R<=$;)bt(p[R],C,O,!0),R++;else{const Z=R,re=R,Ie=new Map;for(R=re;R<=z;R++){const Nt=m[R]=x?Vn(m[R]):Qt(m[R]);Nt.key!=null&&Ie.set(Nt.key,R)}let Ee,$e=0;const Gt=z-re+1;let Bs=!1,Nf=0;const Fi=new Array(Gt);for(R=0;R<Gt;R++)Fi[R]=0;for(R=Z;R<=$;R++){const Nt=p[R];if($e>=Gt){bt(Nt,C,O,!0);continue}let rn;if(Nt.key!=null)rn=Ie.get(Nt.key);else for(Ee=re;Ee<=z;Ee++)if(Fi[Ee-re]===0&&ln(Nt,m[Ee])){rn=Ee;break}rn===void 0?bt(Nt,C,O,!0):(Fi[rn-re]=R+1,rn>=Nf?Nf=rn:Bs=!0,_(Nt,m[rn],w,null,C,O,F,D,x),$e++)}const Df=Bs?X0(Fi):Qs;for(Ee=Df.length-1,R=Gt-1;R>=0;R--){const Nt=re+R,rn=m[Nt],Of=Nt+1<K?m[Nt+1].el:T;Fi[R]===0?_(null,rn,w,Of,C,O,F,D,x):Bs&&(Ee<0||R!==Df[Ee]?Wt(rn,w,Of,2):Ee--)}}},Wt=(p,m,w,T,C=null)=>{const{el:O,type:F,transition:D,children:x,shapeFlag:R}=p;if(R&6){Wt(p.component.subTree,m,w,T);return}if(R&128){p.suspense.move(m,w,T);return}if(R&64){F.move(p,m,w,fe);return}if(F===$t){s(O,m,w);for(let $=0;$<x.length;$++)Wt(x[$],m,w,T);s(p.anchor,m,w);return}if(F===Lo){v(p,m,w);return}if(T!==2&&R&1&&D)if(T===0)D.beforeEnter(O),s(O,m,w),It(()=>D.enter(O),C);else{const{leave:$,delayLeave:z,afterLeave:Z}=D,re=()=>s(O,m,w),Ie=()=>{$(O,()=>{re(),Z&&Z()})};z?z(O,re,Ie):Ie()}else s(O,m,w)},bt=(p,m,w,T=!1,C=!1)=>{const{type:O,props:F,ref:D,children:x,dynamicChildren:R,shapeFlag:K,patchFlag:$,dirs:z}=p;if(D!=null&&Rc(D,null,w,p,!0),K&256){m.ctx.deactivate(p);return}const Z=K&1&&z,re=!Zi(p);let Ie;if(re&&(Ie=F&&F.onVnodeBeforeUnmount)&&on(Ie,m,p),K&6)I(p.component,w,T);else{if(K&128){p.suspense.unmount(w,T);return}Z&&os(p,null,m,"beforeUnmount"),K&64?p.type.remove(p,m,w,C,fe,T):R&&(O!==$t||$>0&&$&64)?U(R,m,w,!1,!0):(O===$t&&$&384||!C&&K&16)&&U(x,m,w),T&&Us(p)}(re&&(Ie=F&&F.onVnodeUnmounted)||Z)&&It(()=>{Ie&&on(Ie,m,p),Z&&os(p,null,m,"unmounted")},w)},Us=p=>{const{type:m,el:w,anchor:T,transition:C}=p;if(m===$t){po(w,T);return}if(m===Lo){N(p);return}const O=()=>{i(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:F,delayLeave:D}=C,x=()=>F(w,O);D?D(p.el,O,x):x()}else O()},po=(p,m)=>{let w;for(;p!==m;)w=f(p),i(p),p=w;i(m)},I=(p,m,w)=>{const{bum:T,scope:C,update:O,subTree:F,um:D}=p;T&&Dl(T),C.stop(),O&&(O.active=!1,bt(F,p,m,w)),D&&It(D,m),It(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(p,m,w,T=!1,C=!1,O=0)=>{for(let F=O;F<p.length;F++)bt(p[F],m,w,T,C)},L=p=>p.shapeFlag&6?L(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),q=(p,m,w)=>{p==null?m._vnode&&bt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,w),Vf(),im(),m._vnode=p},fe={p:_,um:bt,m:Wt,r:Us,mt:qe,mc:A,pc:we,pbc:ee,n:L,o:t};let xe,ie;return e&&([xe,ie]=e(fe)),{render:q,hydrate:xe,createApp:G0(q,xe)}}function as({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Am(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Vn(i[r]),a.el=o.el),n||Am(o,a)),a.type===Ua&&(a.el=o.el)}}function X0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const J0=t=>t.__isTeleport,$t=Symbol(void 0),Ua=Symbol(void 0),Rt=Symbol(void 0),Lo=Symbol(void 0),tr=[];let Vt=null;function Vr(t=!1){tr.push(Vt=t?null:[])}function km(){tr.pop(),Vt=tr[tr.length-1]||null}let li=1;function Jf(t){li+=t}function Nm(t){return t.dynamicChildren=li>0?Vt||Qs:null,km(),li>0&&Vt&&Vt.push(t),t}function wx(t,e,n,s,i,r){return Nm(Om(t,e,n,s,i,r,!0))}function Ba(t,e,n,s,i){return Nm(st(t,e,n,s,i,!0))}function wr(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const $a="__vInternal",Dm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||Pe(t)||ne(t)?{i:nt,r:t,k:e,f:!!n}:t:null;function Om(t,e=null,n=null,s=0,i=null,r=t===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dm(e),ref:e&&Fo(e),scopeId:am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:nt};return a?(th(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),li>0&&!o&&Vt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Vt.push(l),l}const st=Z0;function Z0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ym)&&(t=Rt),wr(t)){const a=Xn(t,e,!0);return n&&th(a,n),li>0&&!r&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(uT(t)&&(t=t.__vccOpts),e){e=eT(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Pu(a)),Oe(l)&&(Gg(l)&&!J(l)&&(l=_t({},l)),e.style=xu(l))}const o=Ue(t)?1:p0(t)?128:J0(t)?64:Oe(t)?4:ne(t)?2:0;return Om(t,e,n,s,i,o,r,!0)}function eT(t){return t?Gg(t)||$a in t?_t({},t):t:null}function Xn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?tT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dm(a),ref:e&&e.ref?n&&i?J(i)?i.concat(Fo(e)):[i,Fo(e)]:Fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xm(t=" ",e=0){return st(Ua,null,t,e)}function Ex(t,e){const n=st(Lo,null,t);return n.staticCount=e,n}function Tx(t="",e=!1){return e?(Vr(),Ba(Rt,null,t)):st(Rt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?st(Rt):J(t)?st($t,null,t.slice()):typeof t=="object"?Vn(t):st(Ua,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xn(t)}function th(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),th(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($a in e)?e._ctx=nt:i===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[xm(e)]):n=8);t.children=e,t.shapeFlag|=n}function tT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Pu([e.class,s.class]));else if(i==="style")e.style=xu([e.style,s.style]);else if(Na(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){Ht(t,e,7,[n,s])}const nT=Rm();let sT=0;function iT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||nT,r={uid:sT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bm(s,i),emitsOptions:om(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=c0.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const jr=()=>Fe||nt,ci=t=>{Fe=t,t.scope.on()},ws=()=>{Fe&&Fe.scope.off(),Fe=null};function Pm(t){return t.vnode.shapeFlag&4}let Er=!1;function rT(t,e=!1){Er=e;const{props:n,children:s}=t.vnode,i=Pm(t);j0(t,n,i,e),K0(t,s);const r=i?oT(t,e):void 0;return Er=!1,r}function oT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ai(new Proxy(t.ctx,L0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?lT(t):null;ci(t),Ii();const r=Kn(s,t,0,[t.props,i]);if(Ci(),ws(),Dg(r)){if(r.then(ws,ws),e)return r.then(o=>{Ac(t,o,e)}).catch(o=>{$r(o,t,0)});t.asyncDep=r}else Ac(t,r,e)}else Mm(t,e)}function Ac(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Zg(e)),Mm(t,n)}let Zf;function Mm(t,e,n){const s=t.type;if(!t.render){if(!e&&Zf&&!s.render){const i=s.template||Zu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=_t(_t({isCustomElement:r,delimiters:a},o),l);s.render=Zf(i,c)}}t.render=s.render||en}ci(t),Ii(),F0(t),Ci(),ws()}function aT(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function lT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=aT(t))},slots:t.slots,emit:t.emit,expose:e}}function Va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zg(ai(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in er)return er[n](t)},has(e,n){return n in e||n in er}}))}function cT(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function uT(t){return ne(t)&&"__vccOpts"in t}const xt=(t,e)=>i0(t,e,Er);function Lm(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!J(e)?wr(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wr(n)&&(n=[n]),st(t,e,n))}const Fm=Symbol(""),hT=()=>Mt(Fm),fT="3.2.47",dT="http://www.w3.org/2000/svg",fs=typeof document<"u"?document:null,ed=fs&&fs.createElement("template"),pT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?fs.createElementNS(dT,t):fs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>fs.createTextNode(t),createComment:t=>fs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ed.innerHTML=s?`<svg>${t}</svg>`:t;const a=ed.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mT(t,e,n){const s=t.style,i=Ue(n);if(n&&!i){if(e&&!Ue(e))for(const r in e)n[r]==null&&kc(s,r,"");for(const r in n)kc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const td=/\s*!important$/;function kc(t,e,n){if(J(n))n.forEach(s=>kc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_T(t,e);td.test(n)?t.setProperty(bi(s),n.replace(td,""),"important"):t[s]=n}}const nd=["Webkit","Moz","ms"],Ml={};function _T(t,e){const n=Ml[e];if(n)return n;let s=pn(e);if(s!=="filter"&&s in t)return Ml[e]=s;s=xa(s);for(let i=0;i<nd.length;i++){const r=nd[i]+s;if(r in t)return Ml[e]=r}return e}const sd="http://www.w3.org/1999/xlink";function yT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n);else{const r=dE(e);n==null||r&&!Ag(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ag(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function wT(t,e,n,s){t.addEventListener(e,n,s)}function ET(t,e,n,s){t.removeEventListener(e,n,s)}function TT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=bT(e);if(s){const c=r[e]=ST(s,i);wT(t,a,c,l)}else o&&(ET(t,a,o,l),r[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function bT(t){let e;if(id.test(t)){e={};let s;for(;s=t.match(id);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bi(t.slice(2)),e]}let Ll=0;const IT=Promise.resolve(),CT=()=>Ll||(IT.then(()=>Ll=0),Ll=Date.now());function ST(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ht(RT(s,n.value),e,5,[s])};return n.value=t,n.attached=CT(),n}function RT(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const rd=/^on[a-z]/,AT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?gT(t,s,i):e==="style"?mT(t,n,s):Na(e)?Mu(e)||TT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kT(t,e,s,i))?vT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yT(t,e,s,i))};function kT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&rd.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||rd.test(e)&&Ue(n)?!1:e in t}const NT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};C0.props;const bx={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ui(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ui(t,!0),s.enter(t)):s.leave(t,()=>{Ui(t,!1)}):Ui(t,e))},beforeUnmount(t,{value:e}){Ui(t,e)}};function Ui(t,e){t.style.display=e?t._vod:"none"}const DT=_t({patchProp:AT},pT);let od;function OT(){return od||(od=Q0(DT))}const xT=(...t)=>{const e=OT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=PT(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function PT(t){return Ue(t)?document.querySelector(t):t}var MT=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Um;const ja=t=>Um=t,Bm=Symbol();function Nc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var nr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(nr||(nr={}));function LT(){const t=Mg(!0),e=t.run(()=>Ot({}));let n=[],s=[];const i=ai({install(r){ja(i),i._a=r,r.provide(Bm,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!MT?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const $m=()=>{};function ad(t,e,n,s=$m){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Bu()&&Lg(i),i}function $s(t,...e){t.slice().forEach(n=>{n(...e)})}function Dc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Nc(i)&&Nc(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!qn(s)?t[n]=Dc(i,s):t[n]=s}return t}const FT=Symbol();function UT(t){return!Nc(t)||!t.hasOwnProperty(FT)}const{assign:$n}=Object;function BT(t){return!!(Pe(t)&&t.effect)}function $T(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=e0(n.state.value[t]);return $n(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=ai(xt(()=>{ja(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=Vm(t,c,e,n,s,!0),l}function Vm(t,e,n={},s,i,r){let o;const a=$n({actions:{}},n),l={deep:!0};let c,u,h=ai([]),f=ai([]),d;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Ot({});let _;function y(B){let A;c=u=!1,typeof B=="function"?(B(s.state.value[t]),A={type:nr.patchFunction,storeId:t,events:d}):(Dc(s.state.value[t],B),A={type:nr.patchObject,payload:B,storeId:t,events:d});const Y=_=Symbol();Gu().then(()=>{_===Y&&(c=!0)}),u=!0,$s(h,A,s.state.value[t])}const b=r?function(){const{state:A}=n,Y=A?A():{};this.$patch(ee=>{$n(ee,Y)})}:$m;function E(){o.stop(),h=[],f=[],s._s.delete(t)}function v(B,A){return function(){ja(s);const Y=Array.from(arguments),ee=[],ge=[];function Le(Ge){ee.push(Ge)}function ot(Ge){ge.push(Ge)}$s(f,{args:Y,name:B,store:M,after:Le,onError:ot});let qe;try{qe=A.apply(this&&this.$id===t?this:M,Y)}catch(Ge){throw $s(ge,Ge),Ge}return qe instanceof Promise?qe.then(Ge=>($s(ee,Ge),Ge)).catch(Ge=>($s(ge,Ge),Promise.reject(Ge))):($s(ee,qe),qe)}}const N={_p:s,$id:t,$onAction:ad.bind(null,f),$patch:y,$reset:b,$subscribe(B,A={}){const Y=ad(h,B,A.detached,()=>ee()),ee=o.run(()=>Zs(()=>s.state.value[t],ge=>{(A.flush==="sync"?u:c)&&B({storeId:t,type:nr.direct,events:d},ge)},$n({},l,A)));return Y},$dispose:E},M=Si(N);s._s.set(t,M);const H=s._e.run(()=>(o=Mg(),o.run(()=>e())));for(const B in H){const A=H[B];if(Pe(A)&&!BT(A)||qn(A))r||(g&&UT(A)&&(Pe(A)?A.value=g[B]:Dc(A,g[B])),s.state.value[t][B]=A);else if(typeof A=="function"){const Y=v(B,A);H[B]=Y,a.actions[B]=A}}return $n(M,H),$n(he(M),H),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:B=>{y(A=>{$n(A,B)})}}),s._p.forEach(B=>{$n(M,o.run(()=>B({store:M,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(M.$state,g),c=!0,u=!0,M}function VT(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=jr();return a=a||c&&Mt(Bm,null),a&&ja(a),a=Um,a._s.has(s)||(r?Vm(s,e,i,a):$T(s,i,a)),a._s.get(s)}return o.$id=s,o}const ld=["ant","antelope","badger","bear","bee","bison","boar","bream","bull","butterfly","camel","canary","carp","cat","catfish","chick","chicken","chimpanzee","chipmunk","cock","cockroach","cod","cow","crab","crocodile","crow","crucian","cuckoo","dog","dolphin","donkey","duck","elephant","ferret","flounder","fly","foal","fox","frog","gerbil","giraffe","goat","goldfish","goose","grasshopper","hamster","hare","hedgehog","herring","hippopotamus","horse","iguana","jellyfish","kingfisher","lark","lion","lizard","lynx","mackerel","mantis","minnow","monkey","moose","mosquito","mouse","nightingale","octopus","ostrich","ostrich","owl","panther","parrot","peacock","pig","pigeon","pike","pollock","rabbit","ram","scad","seabass","seal","sheep","sparrow","spider","sprat","squid","squirrel","starfish","stingray","swan","swordfish","tiger","tuna","turtle","vulture","wasp","whale","wolf","zebra"],cd=["able","arrogant","audacious","avid","bitter","boastful","bold","bored","candid","carefree","civil","committed","competitive","complacency","considerate","content","cool","courteous","covetous","cowardly","credulous","critical","curt","daring","dauntless","dedicated","dense","depressed","desirous","determined","dexterous","dimwitted","discriminating","easygoing","egocentric","emotional","enthusiastic","fainthearted","faithful","foolish","frankness","gentle","greedy","gullible","heartbroken","idle","illmannered","impudent","inapt","indecisive","inept","inert","insolent","intelligent","introspective","jittery","keen","lazy","levelheaded","lighthearted","magnanimous","masterly","mean","melancholic","mild","narrowminded","nasty","nimble","obstinate","parsimonious","passion","pensive","relaxed","reticent","selfishness","selfreliant","selfsatisfied","sensitivity","slow","slow","smallminded","sociable","spineless","straightforward","strongwilled","stubborn","temperamental","thoughtful","thoughtful","tight","timidity","tolerance","touchy","truthful","unkind","unreliable","vulgar","wellbalanced","wildrash","wily"],ud=["alizarin","amaranth","amber","amethyst","apricot","aquamarine","asparagus","auburn","azure","bistre","blue","bronze","brown","buff","burgundy","cardinal","carmine","celadon","cerise","cerulean","champagne","charcoal","chartreuse","chestnut","chocolate","cinnabar","copper","coral","corn","cornflower","cream","crimson","cyan","dandelion","denim","ecru","eggplant","emerald","flax","fuchsia","gamboge","gold","goldenrod","grey","harlequin","heliotrope","indigo","ivory","khaki","lavender","lilac","lime","linen","magenta","magnolia","maroon","mauve","myrtle","ochre","olive","olivine","orange","orchid","peach","pear","periwinkle","persimmon","pink","platinum","puce","pumpkin","purple","razzmatazz","red","rose","russet","rust","salmon","sangria","sapphire","scarlet","seashell","sepia","silver","smalt","tan","tangerine","taupe","teal","thistle","tomato","turquoise","ultramarine","vermilion","violet","viridian","wheat","white","yellow","zucchini"];function jT(){const t=Math.floor(Math.random()*cd.length),e=Math.floor(Math.random()*ud.length),n=Math.floor(Math.random()*ld.length),s=(t<10?`0${t}`:`${t}`)+(e<10?`0${e}`:`${e}`)+(n<10?`0${n}`:`${n}`),i=cd[t]+"_"+ud[e]+"_"+ld[n];return{code:s,uid:i}}const Oc=[[3,7,5,8,1,9,11,10,6,2,4,0],[6,10,9,8,7,4,5,0,2,1,3,11],[5,1,0,6,9,7,3,8,2,11,10,4],[5,8,6,3,1,9,7,2,4,10,0,11],[7,10,0,4,5,6,9,1,3,8,11,2],[5,11,7,9,4,8,6,1,2,3,0,10],[0,4,1,10,7,5,11,9,3,6,8,2],[2,3,7,11,10,9,8,5,1,4,6,0],[5,1,3,10,11,9,7,6,2,8,0,4],[3,0,2,6,8,5,7,1,9,11,4,10],[6,2,8,1,9,7,4,10,5,0,3,11],[8,2,7,9,6,11,3,4,1,5,0,10],[7,10,11,2,9,6,4,5,3,8,0,1],[8,3,7,2,4,6,9,10,1,11,0,5],[8,3,1,4,0,7,11,6,9,5,2,10],[8,3,6,11,4,7,2,0,5,1,10,9],[11,8,0,5,1,4,2,7,6,9,3,10],[2,1,9,5,6,7,3,8,11,4,10,0],[8,5,3,0,1,11,9,10,6,4,2,7],[11,6,9,3,1,8,2,5,10,7,0,4]];function HT(t){return Math.floor(Math.random()*t)}Oc.forEach(t=>t.unshift(HT(12)));function Ix(t,e){const n=Oc[t%Oc.length];return n[e%n.length]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Ri(e)},Ri=function(t){return new Error("Firebase Database ("+jm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new KT;const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qm=function(t){const e=Hm(t);return Ha.encodeByteArray(e,!0)},Go=function(t){return qm(t).replace(/\./g,"")},Qo=function(t){try{return Ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){return Km(void 0,t)}function Km(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WT(n)||(t[n]=Km(t[n],e[n]));return t}function WT(t){return t!=="__proto__"}/**
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
 */function GT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QT=()=>GT().__FIREBASE_DEFAULTS__,YT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return QT()||YT()||XT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JT=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZT=t=>{const e=JT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eb=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},tb=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function nb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Go(JSON.stringify(n)),Go(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gn())}function sb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wm(){return jm.NODE_ADMIN===!0}function Gm(){try{return typeof indexedDB=="object"}catch{return!1}}function ib(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="FirebaseError";class Pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rb,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ob(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,a,s)}}function ob(t,e){return t.replace(ab,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ab=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=br(Qo(r[0])||""),n=br(Qo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},lb=function(t){const e=Qm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cb=function(t){const e=Qm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function xc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(fd(r)&&fd(o)){if(!xc(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hb(t,e){const n=new fb(t,e);return n.subscribe.bind(n)}class fb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fl),i.error===void 0&&(i.error=Fl),i.complete===void 0&&(i.complete=Fl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}function pb(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cs="[DEFAULT]";/**
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
 */class mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yb(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_b(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _b(t){return t===cs?void 0:t}function yb(t){return t.instantiationMode==="EAGER"}/**
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
 */class vb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const wb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Eb=pe.INFO,Tb={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},bb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Tb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=Eb,this._logHandler=bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Ib=(t,e)=>e.some(n=>t instanceof n);let dd,pd;function Cb(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sb(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,Pc=new WeakMap,Xm=new WeakMap,Ul=new WeakMap,rh=new WeakMap;function Rb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(zn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),rh.set(e,t),e}function Ab(t){if(Pc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let Mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kb(t){Mc=t(Mc)}function Nb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bl(this),e,...n);return Xm.set(s,e.sort?e.sort():[e]),zn(s)}:Sb().includes(t)?function(...e){return t.apply(Bl(this),e),zn(Ym.get(this))}:function(...e){return zn(t.apply(Bl(this),e))}}function Db(t){return typeof t=="function"?Nb(t):(t instanceof IDBTransaction&&Ab(t),Ib(t,Cb())?new Proxy(t,Mc):t)}function zn(t){if(t instanceof IDBRequest)return Rb(t);if(Ul.has(t))return Ul.get(t);const e=Db(t);return e!==t&&(Ul.set(t,e),rh.set(e,t)),e}const Bl=t=>rh.get(t);function Ob(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=zn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const xb=["get","getKey","getAll","getAllKeys","count"],Pb=["put","add","delete","clear"],$l=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $l.set(e,r),r}kb(t=>({...t,get:(e,n,s)=>gd(e,n)||t.get(e,n,s),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class Mb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",md="0.9.7";/**
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
 */const Is=new Hr("@firebase/app"),Fb="@firebase/app-compat",Ub="@firebase/analytics-compat",Bb="@firebase/analytics",$b="@firebase/app-check-compat",Vb="@firebase/app-check",jb="@firebase/auth",Hb="@firebase/auth-compat",qb="@firebase/database",Kb="@firebase/database-compat",zb="@firebase/functions",Wb="@firebase/functions-compat",Gb="@firebase/installations",Qb="@firebase/installations-compat",Yb="@firebase/messaging",Xb="@firebase/messaging-compat",Jb="@firebase/performance",Zb="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",sI="@firebase/storage-compat",iI="@firebase/firestore",rI="@firebase/firestore-compat",oI="firebase",aI="9.19.1";/**
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
 */const Fc="[DEFAULT]",lI={[Lc]:"fire-core",[Fb]:"fire-core-compat",[Bb]:"fire-analytics",[Ub]:"fire-analytics-compat",[Vb]:"fire-app-check",[$b]:"fire-app-check-compat",[jb]:"fire-auth",[Hb]:"fire-auth-compat",[qb]:"fire-rtdb",[Kb]:"fire-rtdb-compat",[zb]:"fire-fn",[Wb]:"fire-fn-compat",[Gb]:"fire-iid",[Qb]:"fire-iid-compat",[Yb]:"fire-fcm",[Xb]:"fire-fcm-compat",[Jb]:"fire-perf",[Zb]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[sI]:"fire-gcs-compat",[iI]:"fire-fst",[rI]:"fire-fst-compat","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const Xo=new Map,Uc=new Map;function cI(t,e){try{t.container.addComponent(e)}catch(n){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(Uc.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;Uc.set(e,t);for(const n of Xo.values())cI(n,t);return!0}function uI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new Ai("app","Firebase",hI);/**
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
 */class fI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=aI;function Jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=eb()),!n)throw Wn.create("no-options");const r=Xo.get(i);if(r){if(xc(n,r.options)&&xc(s,r.config))return r;throw Wn.create("duplicate-app",{appName:i})}const o=new vb(i);for(const l of Uc.values())o.addComponent(l);const a=new fI(n,s,o);return Xo.set(i,a),a}function Zm(t=Fc){const e=Xo.get(t);if(!e&&t===Fc)return Jm();if(!e)throw Wn.create("no-app",{appName:t});return e}function Lt(t,e,n){var s;let i=(s=lI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(a.join(" "));return}mn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",pI=1,Ir="firebase-heartbeat-store";let Vl=null;function e_(){return Vl||(Vl=Ob(dI,pI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ir)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function gI(t){try{return(await e_()).transaction(Ir).objectStore(Ir).get(t_(t))}catch(e){if(e instanceof Pn)Is.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Is.warn(n.message)}}}async function _d(t,e){try{const s=(await e_()).transaction(Ir,"readwrite");return await s.objectStore(Ir).put(e,t_(t)),s.done}catch(n){if(n instanceof Pn)Is.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Is.warn(s.message)}}}function t_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mI=1024,_I=30*24*60*60*1e3;class yI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=_I}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yd(),{heartbeatsToSend:n,unsentEntries:s}=vI(this._heartbeatsCache.heartbeats),i=Go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yd(){return new Date().toISOString().substring(0,10)}function vI(t,e=mI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gm()?ib().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vd(t){return Go(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EI(t){mn(new nn("platform-logger",e=>new Mb(e),"PRIVATE")),mn(new nn("heartbeat",e=>new yI(e),"PRIVATE")),Lt(Lc,md,t),Lt(Lc,md,"esm2017"),Lt("fire-js","")}EI("");var TI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,oh=oh||{},X=TI||self;function Jo(){}function Ka(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Kr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bI(t){return Object.prototype.hasOwnProperty.call(t,jl)&&t[jl]||(t[jl]=++II)}var jl="closure_uid_"+(1e9*Math.random()>>>0),II=0;function CI(t,e,n){return t.call.apply(t.bind,arguments)}function SI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=CI:gt=SI,gt.apply(null,arguments)}function Eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ns(){this.s=this.s,this.o=this.o}var RI=0;ns.prototype.s=!1;ns.prototype.na=function(){!this.s&&(this.s=!0,this.M(),RI!=0)&&bI(this)};ns.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const n_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ah(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ka(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var AI=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Jo,e),X.removeEventListener("test",Jo,e)}catch{}return t}();function Zo(t){return/^[\s\xa0]*$/.test(t)}var Ed=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hl(t,e){return t<e?-1:t>e?1:0}function za(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return za().indexOf(t)!=-1}function lh(t){return lh[" "](t),t}lh[" "]=Jo;function kI(t){var e=OI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var NI=cn("Opera"),hi=cn("Trident")||cn("MSIE"),s_=cn("Edge"),Bc=s_||hi,i_=cn("Gecko")&&!(za().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),DI=za().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function r_(){var t=X.document;return t?t.documentMode:void 0}var ea;e:{var ql="",Kl=function(){var t=za();if(i_)return/rv:([^\);]+)(\)|;)/.exec(t);if(s_)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DI)return/WebKit\/(\S+)/.exec(t);if(NI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kl&&(ql=Kl?Kl[1]:""),hi){var zl=r_();if(zl!=null&&zl>parseFloat(ql)){ea=String(zl);break e}}ea=ql}var OI={};function xI(){return kI(function(){let t=0;const e=Ed(String(ea)).split("."),n=Ed("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Hl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Hl(i[2].length==0,r[2].length==0)||Hl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var $c;if(X.document&&hi){var Td=r_();$c=Td||parseInt(ea,10)||void 0}else $c=void 0;var PI=$c;function Cr(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(i_){e:{try{lh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.X.h.call(this)}}rt(Cr,mt);var MI={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),LI=0;function FI(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++LI,this.ba=this.ea=!1}function Wa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ch(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function o_(t){const e={};for(const n in t)e[n]=t[n];return e}const bd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function a_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<bd.length;r++)n=bd[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ga(t){this.src=t,this.g={},this.h=0}Ga.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=jc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new FI(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Vc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=n_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var uh="closure_lm_"+(1e6*Math.random()|0),Wl={};function l_(t,e,n,s,i){if(s&&s.once)return u_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)l_(t,e[r],n,s,i);return null}return n=dh(n),t&&t[zr]?t.N(e,n,Kr(s)?!!s.capture:!!s,i):c_(t,e,n,!1,s,i)}function c_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Kr(i)?!!i.capture:!!i,a=fh(t);if(a||(t[uh]=a=new Ga(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=UI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)AI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(f_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UI(){function t(n){return e.call(t.src,t.listener,n)}const e=BI;return t}function u_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)u_(t,e[r],n,s,i);return null}return n=dh(n),t&&t[zr]?t.O(e,n,Kr(s)?!!s.capture:!!s,i):c_(t,e,n,!0,s,i)}function h_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)h_(t,e[r],n,s,i);else s=Kr(s)?!!s.capture:!!s,n=dh(n),t&&t[zr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=jc(r,n,s,i),-1<n&&(Wa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=fh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,s,i)),(n=-1<t?e[t]:null)&&hh(n))}function hh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zr])Vc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(f_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fh(e))?(Vc(n,t),n.h==0&&(n.src=null,e[uh]=null)):Wa(t)}}}function f_(t){return t in Wl?Wl[t]:Wl[t]="on"+t}function BI(t,e){if(t.ba)t=!0;else{e=new Cr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&hh(t),t=n.call(s,e)}return t}function fh(t){return t=t[uh],t instanceof Ga?t:null}var Gl="__closure_events_fn_"+(1e9*Math.random()>>>0);function dh(t){return typeof t=="function"?t:(t[Gl]||(t[Gl]=function(e){return t.handleEvent(e)}),t[Gl])}function Ze(){ns.call(this),this.i=new Ga(this),this.P=this,this.I=null}rt(Ze,ns);Ze.prototype[zr]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){h_(this,t,e,n,s)};function it(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(s,t),a_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=To(o,s,!0,e)&&i}if(o=e.g=t,i=To(o,s,!0,e)&&i,i=To(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=To(o,s,!1,e)&&i}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wa(n[s]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function To(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Vc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ph=X.JSON.stringify;function $I(){var t=g_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VI{constructor(){this.h=this.g=null}add(e,n){const s=d_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var d_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jI,t=>t.reset());class jI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HI(t){X.setTimeout(()=>{throw t},0)}function p_(t,e){Hc||qI(),qc||(Hc(),qc=!0),g_.add(t,e)}var Hc;function qI(){var t=X.Promise.resolve(void 0);Hc=function(){t.then(KI)}}var qc=!1,g_=new VI;function KI(){for(var t;t=$I();){try{t.h.call(t.g)}catch(n){HI(n)}var e=d_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qc=!1}function Qa(t,e){Ze.call(this),this.h=t||1,this.g=e||X,this.j=gt(this.lb,this),this.l=Date.now()}rt(Qa,Ze);V=Qa.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),it(this,"tick"),this.ca&&(gh(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Qa.X.M.call(this),gh(this),delete this.g};function mh(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function m_(t){t.g=mh(()=>{t.g=null,t.i&&(t.i=!1,m_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zI extends ns{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:m_(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(t){ns.call(this),this.h=t,this.g={}}rt(Sr,ns);var Id=[];function __(t,e,n,s){Array.isArray(n)||(n&&(Id[0]=n.toString()),n=Id);for(var i=0;i<n.length;i++){var r=l_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function y_(t){ch(t.g,function(e,n){this.g.hasOwnProperty(n)&&hh(e)},t),t.g={}}Sr.prototype.M=function(){Sr.X.M.call(this),y_(this)};Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ya(){this.g=!0}Ya.prototype.Aa=function(){this.g=!1};function WI(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function GI(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function zs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YI(t,n)+(s?" "+s:"")})}function QI(t,e){t.info(function(){return"TIMEOUT: "+e})}Ya.prototype.info=function(){};function YI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ph(n)}catch{return e}}var Os={},Cd=null;function Xa(){return Cd=Cd||new Ze}Os.Pa="serverreachability";function v_(t){mt.call(this,Os.Pa,t)}rt(v_,mt);function Rr(t){const e=Xa();it(e,new v_(e))}Os.STAT_EVENT="statevent";function w_(t,e){mt.call(this,Os.STAT_EVENT,t),this.stat=e}rt(w_,mt);function Et(t){const e=Xa();it(e,new w_(e,t))}Os.Qa="timingevent";function E_(t,e){mt.call(this,Os.Qa,t),this.size=e}rt(E_,mt);function Wr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Ja={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},T_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _h(){}_h.prototype.h=null;function Sd(t){return t.h||(t.h=t.i())}function b_(){}var Gr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yh(){mt.call(this,"d")}rt(yh,mt);function vh(){mt.call(this,"c")}rt(vh,mt);var Kc;function Za(){}rt(Za,_h);Za.prototype.g=function(){return new XMLHttpRequest};Za.prototype.i=function(){return{}};Kc=new Za;function Qr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Sr(this),this.O=XI,t=Bc?125:void 0,this.T=new Qa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new I_}function I_(){this.i=null,this.g="",this.h=!1}var XI=45e3,zc={},ta={};V=Qr.prototype;V.setTimeout=function(t){this.O=t};function Wc(t,e,n){t.K=1,t.v=tl(kn(e)),t.s=n,t.P=!0,C_(t,null)}function C_(t,e){t.F=Date.now(),Yr(t),t.A=kn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),x_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new I_,t.g=ey(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zI(gt(t.La,t,t.g),t.N)),__(t.S,t.g,"readystatechange",t.ib),e=t.H?o_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Rr(),WI(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&In(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Bc||this.g&&(this.h.h||this.g.fa()||Nd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Rr(3):Rr(2)),el(this);var n=this.g.aa();this.Y=n;t:if(S_(this)){var s=Nd(this.g);t="";var i=s.length,r=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),sr(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,GI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zo(a)){var c=a;break t}}c=null}if(n=c)zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gc(this,n);else{this.i=!1,this.o=3,Et(12),ps(this),sr(this);break e}}this.P?(R_(this,u,o),Bc&&this.i&&u==3&&(__(this.S,this.T,"tick",this.hb),this.T.start())):(zs(this.j,this.m,o,null),Gc(this,o)),u==4&&ps(this),this.i&&!this.I&&(u==4?Y_(this.l,this):(this.i=!1,Yr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Et(12)):(this.o=0,Et(13)),ps(this),sr(this)}}}catch{}finally{}};function S_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function R_(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=JI(t,n),i==ta){e==4&&(t.o=4,Et(14),s=!1),zs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zc){t.o=4,Et(15),zs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else zs(t.j,t.m,i,null),Gc(t,i);S_(t)&&i!=ta&&i!=zc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sh(e),e.K=!0,Et(11))):(zs(t.j,t.m,n,"[Invalid Chunked Response]"),ps(t),sr(t))}V.hb=function(){if(this.g){var t=In(this.g),e=this.g.fa();this.C<e.length&&(el(this),R_(this,t,e),this.i&&t!=4&&Yr(this))}};function JI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ta:(n=Number(e.substring(n,s)),isNaN(n)?zc:(s+=1,s+n>e.length?ta:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,ps(this)};function Yr(t){t.V=Date.now()+t.O,A_(t,t.O)}function A_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wr(gt(t.gb,t),e)}function el(t){t.B&&(X.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(QI(this.j,this.A),this.K!=2&&(Rr(),Et(17)),ps(this),this.o=2,sr(this)):A_(this,this.V-t)};function sr(t){t.l.G==0||t.I||Y_(t.l,t)}function ps(t){el(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,gh(t.T),y_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qc(n.h,t))){if(!t.J&&Qc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ia(n),il(n);else break e;Ch(n),Et(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wr(gt(n.cb,n),6e3));if(1>=L_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gs(n,11)}else if((t.J||n.g==t)&&ia(n),!Zo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wh(r,r.h),r.h=null))}if(s.D){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ne(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Z_(s,s.H?s.ka:null,s.V),o.J){F_(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(el(a),Yr(a)),s.g=o}else G_(s);0<n.i.length&&rl(n)}else c[0]!="stop"&&c[0]!="close"||gs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?gs(n,7):Ih(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Rr(4)}catch{}}function ZI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ka(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function eC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ka(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function k_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ka(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eC(t),s=ZI(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var N_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=e!==void 0?e:t.h,na(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l,e=t.i;var n=new Ar;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rd(this,n),this.o=t.o}else t&&(n=String(t).match(N_))?(this.h=!!e,na(this,n[1]||"",!0),this.s=zi(n[2]||""),this.g=zi(n[3]||"",!0),sa(this,n[4]),this.l=zi(n[5]||"",!0),Rd(this,n[6]||"",!0),this.o=zi(n[7]||"")):(this.h=!!e,this.i=new Ar(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,Ad,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,Ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?iC:sC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,oC)),t.join("")};function kn(t){return new Es(t)}function na(t,e,n){t.j=n?zi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rd(t,e,n){e instanceof Ar?(t.i=e,aC(t.i,t.h)):(n||(e=Wi(e,rC)),t.i=new Ar(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function tl(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ad=/[#\/\?@]/g,sC=/[#\?:]/g,iC=/[#\?]/g,rC=/[#\?@]/g,oC=/#/g;function Ar(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ss(t){t.g||(t.g=new Map,t.h=0,t.i&&tC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ar.prototype;V.add=function(t,e){ss(this),this.i=null,t=ki(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function D_(t,e){ss(t),e=ki(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function O_(t,e){return ss(t),e=ki(t,e),t.g.has(e)}V.forEach=function(t,e){ss(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ss(this);let e=[];if(typeof t=="string")O_(this,t)&&(e=e.concat(this.g.get(ki(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ss(this),this.i=null,t=ki(this,t),O_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function x_(t,e,n){D_(t,e),0<n.length&&(t.i=null,t.g.set(ki(t,e),ah(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ki(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function aC(t,e){e&&!t.j&&(ss(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(D_(this,s),x_(this,i,n))},t)),t.j=e}var lC=class{constructor(e,n){this.h=e,this.g=n}};function P_(t){this.l=t||cC,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cC=10;function M_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function L_(t){return t.h?1:t.g?t.g.size:0}function Qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wh(t,e){t.g?t.g.add(e):t.h=e}function F_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}P_.prototype.cancel=function(){if(this.i=U_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function U_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ah(t.i)}function Eh(){}Eh.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Eh.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function uC(){this.g=new Eh}function hC(t,e,n){const s=n||"";try{k_(t,function(i,r){let o=i;Kr(i)&&(o=ph(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function fC(t,e){const n=new Ya;if(X.Image){const s=new Image;s.onload=Eo(bo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Eo(bo,n,s,"TestLoadImage: error",!1,e),s.onabort=Eo(bo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Eo(bo,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Xr(t){this.l=t.ac||null,this.j=t.jb||!1}rt(Xr,_h);Xr.prototype.g=function(){return new nl(this.l,this.j)};Xr.prototype.i=function(t){return function(){return t}}({});function nl(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Th,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(nl,Ze);var Th=0;V=nl.prototype;V.open=function(t,e){if(this.readyState!=Th)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kr(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=Th};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function B_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jr(this):kr(this),this.readyState==3&&B_(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Jr(this))};V.Ua=function(t){this.g&&(this.response=t,Jr(this))};V.ga=function(){this.g&&Jr(this)};function Jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kr(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dC=X.JSON.parse;function Me(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$_,this.K=this.L=!1}rt(Me,Ze);var $_="",pC=/^https?$/i,gC=["POST","PUT"];V=Me.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kc.g(),this.C=this.u?Sd(this.u):Sd(Kc),this.g.onreadystatechange=gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){kd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=n_(gC,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{H_(this),0<this.B&&((this.K=mC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.qa,this)):this.A=mh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){kd(this,r)}};function mC(t){return hi&&xI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof oh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function kd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,V_(t),sl(t)}function V_(t){t.D||(t.D=!0,it(t,"complete"),it(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),sl(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sl(this,!0)),Me.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?j_(this):this.fb())};V.fb=function(){j_(this)};function j_(t){if(t.h&&typeof oh<"u"&&(!t.C[1]||In(t)!=4||t.aa()!=2)){if(t.v&&In(t)==4)mh(t.Ha,0,t);else if(it(t,"readystatechange"),In(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(N_)[1]||null;if(!i&&X.self&&X.self.location){var r=X.self.location.protocol;i=r.substr(0,r.length-1)}s=!pC.test(i?i.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var o=2<In(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",V_(t)}}finally{sl(t)}}}}function sl(t,e){if(t.g){H_(t);const n=t.g,s=t.C[0]?Jo:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function H_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function In(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dC(e)}};function Nd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function q_(t){let e="";return ch(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function bh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=q_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function K_(t){this.Ca=0,this.i=[],this.j=new Ya,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bi("baseRetryDelayMs",5e3,t),this.bb=Bi("retryDelaySeedMs",1e4,t),this.$a=Bi("forwardChannelMaxRetries",2,t),this.ta=Bi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new P_(t&&t.concurrentRequestLimit),this.Fa=new uC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=K_.prototype;V.ma=8;V.G=1;function Ih(t){if(z_(t),t.G==3){var e=t.U++,n=kn(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Zr(t,n),e=new Qr(t,t.j,e,void 0),e.K=2,e.v=tl(kn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=ey(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yr(e)}J_(t)}function il(t){t.g&&(Sh(t),t.g.cancel(),t.g=null)}function z_(t){il(t),t.u&&(X.clearTimeout(t.u),t.u=null),ia(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function rl(t){M_(t.h)||t.m||(t.m=!0,p_(t.Ja,t),t.C=0)}function _C(t,e){return L_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Wr(gt(t.Ja,t,e),X_(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Qr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=o_(r),a_(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=W_(this,i,e),n=kn(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Zr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(q_(r)))+"&"+e:this.o&&bh(n,this.o,r)),wh(this.h,i),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),i.Z=!0,Wc(i,n,null)):Wc(i,n,e),this.G=2}}else this.G==3&&(t?Dd(this,t):this.i.length==0||M_(this.h)||Dd(this))};function Dd(t,e){var n;e?n=e.m:n=t.U++;const s=kn(t.F);Ne(s,"SID",t.I),Ne(s,"RID",n),Ne(s,"AID",t.T),Zr(t,s),t.o&&t.s&&bh(s,t.o,t.s),n=new Qr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=W_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wh(t.h,n),Wc(n,s,e)}function Zr(t,e){t.ia&&ch(t.ia,function(n,s){Ne(e,s,n)}),t.l&&k_({},function(n,s){Ne(e,s,n)})}function W_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?gt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{hC(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function G_(t){t.g||t.u||(t.Z=1,p_(t.Ia,t),t.A=0)}function Ch(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Wr(gt(t.Ia,t),X_(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,Q_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wr(gt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Et(10),il(this),Q_(this))};function Sh(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Q_(t){t.g=new Qr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=kn(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),Zr(t,e),t.o&&t.s&&bh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=tl(kn(e)),n.s=null,n.P=!0,C_(n,t)}V.cb=function(){this.v!=null&&(this.v=null,il(this),Ch(this),Et(19))};function ia(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Y_(t,e){var n=null;if(t.g==e){ia(t),Sh(t),t.g=null;var s=2}else if(Qc(t.h,e))n=e.D,F_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Xa(),it(s,new E_(s,n)),rl(t)}else G_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&_C(t,e)||s==2&&Ch(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}}function X_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=gt(t.kb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||na(n,"https"),tl(n)),fC(n.toString(),s)}else Et(2);t.G=0,t.l&&t.l.va(e),J_(t),z_(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function J_(t){if(t.G=0,t.la=[],t.l){const e=U_(t.h);(e.length!=0||t.i.length!=0)&&(wd(t.la,e),wd(t.la,t.i),t.h.i.length=0,ah(t.i),t.i.length=0),t.l.ua()}}function Z_(t,e,n){var s=n instanceof Es?kn(n):new Es(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),sa(s,s.m);else{var i=X.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Es(null,void 0);s&&na(r,s),e&&(r.g=e),i&&sa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ma),Zr(t,s),s}function ey(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Me(new Xr({jb:!0})):new Me(t.ra),e.Ka(t.H),e}function ty(){}V=ty.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function ra(){if(hi&&!(10<=Number(PI)))throw Error("Environmental error: no available transport.")}ra.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){Ze.call(this),this.g=new K_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ni(this)}rt(Ut,Ze);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Z_(t,null,t.V),rl(t)};Ut.prototype.close=function(){Ih(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ph(t),t=n);e.i.push(new lC(e.ab++,t)),e.G==3&&rl(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,Ih(this.g),delete this.g,Ut.X.M.call(this)};function ny(t){yh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(ny,yh);function sy(){vh.call(this),this.status=1}rt(sy,vh);function Ni(t){this.g=t}rt(Ni,ty);Ni.prototype.xa=function(){it(this.g,"a")};Ni.prototype.wa=function(t){it(this.g,new ny(t))};Ni.prototype.va=function(t){it(this.g,new sy)};Ni.prototype.ua=function(){it(this.g,"b")};ra.prototype.createWebChannel=ra.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Ja.NO_ERROR=0;Ja.TIMEOUT=8;Ja.HTTP_ERROR=6;T_.COMPLETE="complete";b_.EventType=Gr;Gr.OPEN="a";Gr.CLOSE="b";Gr.ERROR="c";Gr.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.Oa;Me.prototype.getLastErrorCode=Me.prototype.Ea;Me.prototype.getStatus=Me.prototype.aa;Me.prototype.getResponseJson=Me.prototype.Sa;Me.prototype.getResponseText=Me.prototype.fa;Me.prototype.send=Me.prototype.da;Me.prototype.setWithCredentials=Me.prototype.Ka;var yC=function(){return new ra},vC=function(){return Xa()},Ql=Ja,wC=T_,EC=Os,Od={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},TC=Xr,Io=b_,bC=Me;const xd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Hr("@firebase/firestore");function Pd(){return Cs.logLevel}function j(t,...e){if(Cs.logLevel<=pe.DEBUG){const n=e.map(Rh);Cs.debug(`Firestore (${Di}): ${t}`,...n)}}function Nn(t,...e){if(Cs.logLevel<=pe.ERROR){const n=e.map(Rh);Cs.error(`Firestore (${Di}): ${t}`,...n)}}function oa(t,...e){if(Cs.logLevel<=pe.WARN){const n=e.map(Rh);Cs.warn(`Firestore (${Di}): ${t}`,...n)}}function Rh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Ae(t,e){t||Q()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class CC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SC{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new iy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new lt(e)}}class RC{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class AC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new RC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new kC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=DC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new He(0,0))}static max(){return new te(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Nr{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const OC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Nr{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return OC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(De.fromString(e))}static fromName(e){return new G(De.fromString(e).popFirst(5))}static empty(){return new G(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new De(e.slice()))}}function xC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Jn(i,G.empty(),e)}function PC(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jn(te.min(),G.empty(),-1)}static max(){return new Jn(te.max(),G.empty(),-1)}}function MC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==LC)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ah{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ah.ct=-1;function ol(t){return t==null}function aa(t){return t===0&&1/t==-1/0}function UC(t){return typeof t=="number"&&Number.isInteger(t)&&!aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Co(this.root,e,this.comparator,!1)}getReverseIterator(){return new Co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Co(this.root,e,this.comparator,!0)}}class Co{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??et.RED,this.left=i??et.EMPTY,this.right=r??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new et(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new ze(dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class BC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new BC("Invalid base64 string: "+i):i}}(e);return new yt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const $C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=$C.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ly(t){const e=t.mapValue.fields.__previous_value__;return ay(e)?ly(e):e}function Dr(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ay(t)?4:jC(t)?9007199254740991:10:Q()}function _n(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dr(t).isEqual(Dr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Zn(s.timestampValue),o=Zn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return di(s.bytesValue).isEqual(di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=je(s.doubleValue),o=je(i.doubleValue);return r===o?aa(r)===aa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Md(r)!==Md(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_n(r[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function xr(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=Ss(t),s=Ss(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=je(i.integerValue||i.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(Dr(t),Dr(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,r){const o=di(i),a=di(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=me(o[l],a[l]);if(c!==0)return c}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=me(je(i.latitude),je(r.latitude));return o!==0?o:me(je(i.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=pi(o[l],a[l]);if(c)return c}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===So.mapValue&&r===So.mapValue)return 0;if(i===So.mapValue)return 1;if(r===So.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=me(a[u],c[u]);if(h!==0)return h;const f=pi(o[a[u]],l[c[u]]);if(f!==0)return f}return me(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Zn(t),s=Zn(e),i=me(n.seconds,s.seconds);return i!==0?i:me(n.nanos,s.nanos)}function gi(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Zn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Yc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Yc(s.fields[a])}`;return r+"}"}(t.mapValue):Q();var e,n}function Xc(t){return!!t&&"integerValue"in t}function kh(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ir(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(n)}setAll(e){let n=dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ir(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){xs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ct(ir(this.value))}}function cy(t){const e=[];return xs(t.fields,(n,s)=>{const i=new dt([n]);if(Uo(s)){const r=cy(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,te.min(),te.min(),te.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,i){return new ct(e,1,n,te.min(),s,i,0)}static newNoDocument(e,n){return new ct(e,2,n,te.min(),te.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,te.min(),te.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function $d(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=pi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function HC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class uy{}class Ke extends uy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new KC(e,n,s):n==="array-contains"?new GC(e,s):n==="in"?new QC(e,s):n==="not-in"?new YC(e,s):n==="array-contains-any"?new XC(e,s):new Ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new zC(e,s):new WC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pi(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yn extends uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new yn(e,n)}matches(e){return hy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hy(t){return t.op==="and"}function fy(t){return qC(t)&&hy(t)}function qC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Jc(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+gi(t.value);if(fy(t))return t.filters.map(e=>Jc(e)).join(",");{const e=t.filters.map(n=>Jc(n)).join(",");return`${t.op}(${e})`}}function dy(t,e){return t instanceof Ke?function(n,s){return s instanceof Ke&&n.op===s.op&&n.field.isEqual(s.field)&&_n(n.value,s.value)}(t,e):t instanceof yn?function(n,s){return s instanceof yn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&dy(r,s.filters[o]),!0):!1}(t,e):void Q()}function py(t){return t instanceof Ke?function(e){return`${e.field.canonicalString()} ${e.op} ${gi(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(py).join(" ,")+"}"}(t):"Filter"}class KC extends Ke{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class zC extends Ke{constructor(e,n){super(e,"in",n),this.keys=gy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WC extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=gy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class GC extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kh(n)&&xr(n.arrayValue,this.value)}}class QC extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xr(this.value.arrayValue,n)}}class YC extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xr(this.value.arrayValue,n)}}class XC extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xr(this.value.arrayValue,s))}}/**
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
 */class JC{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function jd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new JC(t,e,n,s,i,r,o)}function Nh(t){const e=se(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Jc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gi(s)).join(",")),e.ft=n}return e.ft}function Dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vd(t.startAt,e.startAt)&&Vd(t.endAt,e.endAt)}function Zc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ZC(t,e,n,s,i,r,o,a){return new al(t,e,n,s,i,r,o,a)}function ll(t){return new al(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tS(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nS(t){return t.collectionGroup!==null}function ei(t){const e=se(t);if(e.dt===null){e.dt=[];const n=tS(e),s=eS(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new rr(n)),e.dt.push(new rr(dt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new rr(dt.keyField(),r))}}}return e.dt}function Dn(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=jd(e.path,e.collectionGroup,ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ei(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new rr(r.field,o))}const s=e.endAt?new la(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new la(e.startAt.position,e.startAt.inclusive):null;e.wt=jd(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function eu(t,e,n){return new al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cl(t,e){return Dh(Dn(t),Dn(e))&&t.limitType===e.limitType}function my(t){return`${Nh(Dn(t))}|lt:${t.limitType}`}function tu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>py(s)).join(", ")}]`),ol(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gi(s)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ei(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$d(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ei(n),s)||n.endAt&&!function(i,r,o){const a=$d(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ei(n),s))}(t,e)}function sS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _y(t){return(e,n)=>{let s=!1;for(const i of ei(t)){const r=iS(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function iS(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?pi(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return oy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new We(G.comparator);function On(){return rS}const yy=new We(G.comparator);function Gi(...t){let e=yy;for(const n of t)e=e.insert(n.key,n);return e}function vy(t){let e=yy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ms(){return or()}function wy(){return or()}function or(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oS=new We(G.comparator),aS=new ze(G.comparator);function oe(...t){let e=aS;for(const n of t)e=e.add(n);return e}const lS=new ze(me);function Ey(){return lS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aa(e)?"-0":e}}function by(t){return{integerValue:""+t}}function cS(t,e){return UC(e)?by(e):Ty(t,e)}/**
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
 */class hl{constructor(){this._=void 0}}function uS(t,e,n){return t instanceof ca?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Pr?Cy(t,e):t instanceof Mr?Sy(t,e):function(s,i){const r=Iy(s,i),o=qd(r)+qd(s._t);return Xc(r)&&Xc(s._t)?by(o):Ty(s.serializer,o)}(t,e)}function hS(t,e,n){return t instanceof Pr?Cy(t,e):t instanceof Mr?Sy(t,e):n}function Iy(t,e){return t instanceof ua?Xc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ca extends hl{}class Pr extends hl{constructor(e){super(),this.elements=e}}function Cy(t,e){const n=Ry(e);for(const s of t.elements)n.some(i=>_n(i,s))||n.push(s);return{arrayValue:{values:n}}}class Mr extends hl{constructor(e){super(),this.elements=e}}function Sy(t,e){let n=Ry(e);for(const s of t.elements)n=n.filter(i=>!_n(i,s));return{arrayValue:{values:n}}}class ua extends hl{constructor(e,n){super(),this.serializer=e,this._t=n}}function qd(t){return je(t.integerValue||t.doubleValue)}function Ry(t){return kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Pr&&s instanceof Pr||n instanceof Mr&&s instanceof Mr?fi(n.elements,s.elements,_n):n instanceof ua&&s instanceof ua?_n(n._t,s._t):n instanceof ca&&s instanceof ca}(t.transform,e.transform)}class dS{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function Ay(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ny(t.key,fn.none()):new no(t.key,t.data,fn.none());{const n=t.data,s=Ct.empty();let i=new ze(dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new is(t.key,s,new Pt(i.toArray()),fn.none())}}function pS(t,e,n){t instanceof no?function(s,i,r){const o=s.value.clone(),a=zd(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,r){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zd(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ky(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ar(t,e,n,s){return t instanceof no?function(i,r,o,a){if(!Bo(i.precondition,r))return o;const l=i.value.clone(),c=Wd(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof is?function(i,r,o,a){if(!Bo(i.precondition,r))return o;const l=Wd(i.fieldTransforms,a,r),c=r.data;return c.setAll(ky(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Bo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function gS(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Iy(s.transform,i||null);r!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,r))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fi(n,s,(i,r)=>fS(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class no extends fl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class is extends fl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ky(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zd(t,e,n){const s=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,hS(o,a,n[i]))}return s}function Wd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,uS(r,o,e))}return s}class Ny extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mS extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&pS(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ar(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ar(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ay(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,s)=>Kd(n,s))&&fi(this.baseMutations,e.baseMutations,(n,s)=>Kd(n,s))}}class Oh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ae(e.mutations.length===s.length);let i=oS;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Oh(e,n,s,i)}}/**
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
 */class yS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,le;function wS(t){switch(t){default:return Q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Dy(t){if(t===void 0)return Nn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ve.OK:return S.OK;case Ve.CANCELLED:return S.CANCELLED;case Ve.UNKNOWN:return S.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return S.INTERNAL;case Ve.UNAVAILABLE:return S.UNAVAILABLE;case Ve.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ve.NOT_FOUND:return S.NOT_FOUND;case Ve.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ve.ABORTED:return S.ABORTED;case Ve.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ve.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ro}static getOrCreateInstance(){return Ro===null&&(Ro=new xh),Ro}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ro=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new dl(te.min(),i,Ey(),On(),oe())}}class so{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new so(s,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Oy{constructor(e,n){this.targetId=e,this.Et=n}}class xy{constructor(e,n,s=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Gd{constructor(){this.At=0,this.Rt=Yd(),this.vt=yt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=oe(),n=oe(),s=oe();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Q()}}),new so(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Yd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ES{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=On(),this.qt=Qd(),this.Ut=new ze(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Zc(o))if(i===0){const a=new G(o.path);this.Qt(s,a,ct.newNoDocument(a,te.min()))}else Ae(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=xh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Zc(a.target)){const l=new G(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ct.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=oe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new dl(e,n,this.Ut,this.Lt,s);return this.Lt=On(),this.qt=Qd(),this.Ut=new ze(me),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Gd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ze(me),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Gd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Qd(){return new We(G.comparator)}function Yd(){return new We(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),IS=(()=>({and:"AND",or:"OR"}))();class CS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Py(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SS(t,e){return ha(t,e.toTimestamp())}function dn(t){return Ae(!!t),te.fromTimestamp(function(e){const n=Zn(e);return new He(n.seconds,n.nanos)}(t))}function Ph(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function My(t){const e=De.fromString(t);return Ae(By(e)),e}function nu(t,e){return Ph(t.databaseId,e.path)}function Yl(t,e){const n=My(e);if(n.get(1)!==t.databaseId.projectId)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Ly(n))}function su(t,e){return Ph(t.databaseId,e)}function RS(t){const e=My(t);return e.length===4?De.emptyPath():Ly(e)}function iu(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ly(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xd(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function AS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Ae(c===void 0||typeof c=="string"),yt.fromBase64String(c||"")):(Ae(c===void 0||c instanceof Uint8Array),yt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?S.UNKNOWN:Dy(l.code);return new W(c,l.message||"")}(o);n=new xy(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Yl(t,s.document.name),r=dn(s.document.updateTime),o=s.document.createTime?dn(s.document.createTime):te.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=ct.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new $o(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Yl(t,s.document),r=s.readTime?dn(s.readTime):te.min(),o=ct.newNoDocument(i,r),a=s.removedTargetIds||[];n=new $o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Yl(t,s.document),r=s.removedTargetIds||[];n=new $o([],r,i,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new vS(i),o=s.targetId;n=new Oy(o,r)}}return n}function kS(t,e){let n;if(e instanceof no)n={update:Xd(t,e.key,e.value)};else if(e instanceof Ny)n={delete:nu(t,e.key)};else if(e instanceof is)n={update:Xd(t,e.key,e.data),updateMask:US(e.fieldMask)};else{if(!(e instanceof mS))return Q();n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ca)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ua)return{fieldPath:r.field.canonicalString(),increment:o._t};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:SS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function NS(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?dn(s.updateTime):dn(i);return r.isEqual(te.min())&&(r=dn(i)),new dS(r,s.transformResults||[])}(n,e))):[]}function DS(t,e){return{documents:[su(t,e.path)]}}function OS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=su(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=su(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Uy(yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Hs(u.field),direction:MS(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||ol(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function xS(t){let e=RS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Fy(u);return h instanceof yn&&fy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rr(qs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ol(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new la(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new la(f,h)}(n.endAt)),ZC(e,i,o,r,a,"F",l,c)}function PS(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=qs(e.unaryFilter.field);return Ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=qs(e.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qs(e.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=qs(e.unaryFilter.field);return Ke.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Ke.create(qs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>Fy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function MS(t){return TS[t]}function LS(t){return bS[t]}function FS(t){return IS[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function qs(t){return dt.fromServerFormat(t.fieldPath)}function Uy(t){return t instanceof Ke?function(e){if(e.op==="=="){if(Bd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(e.field),op:LS(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(s=>Uy(s));return n.length===1?n[0]:{compositeFilter:{op:FS(e.op),filters:n}}}(t):Q()}function US(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function By(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s,i,r=te.min(),o=te.min(),a=yt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.se=e}}function $S(t){const e=xS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eu(e,e.limit,"L"):e}/**
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
 */class VS{constructor(){this.He=new jS}addToCollectionParentIndex(e,n){return this.He.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Jn.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class jS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ze(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ze(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new mi(0)}static bn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ar(s.mutation,i,Pt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=oe()){const i=ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Gi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=On();const o=or(),a=or();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof is)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ar(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new qS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=or();let i=new We((o,a)=>o-a),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Pt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=wy();u.forEach(f=>{if(!r.has(f)){const d=Ay(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(ms());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,oe())).next(u=>({batchId:a,changes:vy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=Gi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Gi();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(c,u){return new al(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ct.newInvalidDocument(c)))});let o=Gi();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ar(c.mutation,l,Pt.empty(),He.now()),ul(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:dn(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:$S(s.bundledQuery),readTime:dn(s.readTime)}}(n)),k.resolve()}}/**
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
 */class WS{constructor(){this.overlays=new We(G.comparator),this.ts=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ms();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=ms(),r=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new We((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ms(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ms(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yS(n,s));let r=this.ts.get(n);r===void 0&&(r=oe(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.es=new ze(Ye.ns),this.ss=new ze(Ye.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ye(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ye(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new G(new De([])),s=new Ye(n,e),i=new Ye(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new De([])),s=new Ye(n,e),i=new Ye(n,e+1);let r=oe();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ye(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ye{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||me(e.ds,n.ds)}static rs(e,n){return me(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ze(Ye.ns)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _S(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ye(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ze(me);return n.forEach(i=>{const r=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),k.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new Ye(new G(r),0);let a=new ze(me);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),k.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return k.forEach(n.mutations,i=>{const r=new Ye(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ye(n,0),i=this._s.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.Ts=e,this.docs=new We(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let s=On();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ct.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=On();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||MC(PC(u),s)<=0||(i.has(u.key)||ul(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Q()}Es(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new YS(this)}getSize(e){return k.resolve(this.size)}}class YS extends HS{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.persistence=e,this.As=new Oi(n=>Nh(n),Dh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Mh,this.targetCount=0,this.bs=mi.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),k.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Sn(n),k.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ah(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new XS(this),this.indexManager=new VS,this.remoteDocumentCache=function(s){return new QS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new BS(n),this.xs=new zS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new GS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const i=new ZS(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return k.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class ZS extends FC{constructor(e){super(),this.currentSequenceNumber=e}}class Lh{constructor(e){this.persistence=e,this.$s=new Mh,this.Ms=null}static Fs(e){return new Lh(e)}get Bs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),k.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Bs,s=>{const i=G.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,te.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return k.or([()=>k.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=oe(),i=oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fh(e,n.fromCache,s,i)}}/**
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
 */class eR{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Hd(n))return k.resolve(null);let s=Dn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=eu(n,null,"F"),s=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=oe(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,eu(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Hd(n)||i.isEqual(te.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(Pd()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tu(n)),this.Fi(e,o,n,xC(i,-1)))})}$i(e,n){let s=new ze(_y(e));return n.forEach((i,r)=>{ul(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Pd()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",tu(n)),this.xi.getDocumentsMatchingQuery(e,n,Jn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new We(me),this.qi=new Oi(r=>Nh(r),Dh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function nR(t,e,n,s){return new tR(t,e,n,s)}async function $y(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function sR(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=k.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const _=l.docVersions.get(d);Ae(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vy(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function iR(t,e){const n=se(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(yt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,_,y){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=On(),c=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(rR(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(te.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function rR(t,e,n){let s=oe(),i=oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=On();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function oR(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aR(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new Ts(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function ru(t,e,n){const s=se(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Jd(t,e,n){const s=se(t);let i=te.min(),r=oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),h=u.qi.get(c);return h!==void 0?k.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?r:oe())).next(a=>(lR(s,sS(e),a),{documents:a,Wi:r})))}function lR(t,e,n){let s=t.Ui.get(e)||te.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Zd{constructor(){this.activeTargetIds=Ey()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cR{constructor(){this.Br=new Zd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Zd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{qr(e){}shutdown(){}}/**
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
 */class ep{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Xl(){return Ao===null?Ao=268435456+Math.round(2147483648*Math.random()):Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class dR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Xl(),a=this.ao(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(j("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw oa("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Di,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=hR[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Xl();return new Promise((o,a)=>{const l=new bC;l.setWithCredentials(!0),l.listenOnce(wC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ql.NO_ERROR:const u=l.getResponseJson();j(at,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Ql.TIMEOUT:j(at,`RPC '${e}' ${r} timed out`),a(new W(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const h=l.getStatus();if(j(at,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(y)>=0?y:S.UNKNOWN}(d.status);a(new W(g,d.message))}else a(new W(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{j(at,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);j(at,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=Xl(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yC(),a=vC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new TC({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");j(at,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new fR({Wr:_=>{f?j(at,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(j(at,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),j(at,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),g=(_,y,b)=>{_.listen(y,E=>{try{b(E)}catch(v){setTimeout(()=>{throw v},0)}})};return g(u,Io.EventType.OPEN,()=>{f||j(at,`RPC '${e}' stream ${i} transport opened.`)}),g(u,Io.EventType.CLOSE,()=>{f||(f=!0,j(at,`RPC '${e}' stream ${i} transport closed`),d.so())}),g(u,Io.EventType.ERROR,_=>{f||(f=!0,oa(at,`RPC '${e}' stream ${i} transport errored:`,_),d.so(new W(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,Io.EventType.MESSAGE,_=>{var y;if(!f){const b=_.data[0];Ae(!!b);const E=b,v=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(v){j(at,`RPC '${e}' stream ${i} received error:`,v);const N=v.status;let M=function(B){const A=Ve[B];if(A!==void 0)return Dy(A)}(N),H=v.message;M===void 0&&(M=S.INTERNAL,H="Unknown error status: "+N+" with message "+v.message),f=!0,d.so(new W(M,H)),u.close()}else j(at,`RPC '${e}' stream ${i} received:`,b),d.io(b)}}),g(a,EC.STAT_EVENT,_=>{_.stat===Od.PROXY?j(at,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Od.NOPROXY&&j(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){return new CS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new jy(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new W(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pR extends Hy{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=AS(this.serializer,e),s=function(i){if(!("targetChange"in i))return te.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?te.min():r.readTime?dn(r.readTime):te.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=iu(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Zc(a)?{documents:DS(i,a)}:{query:OS(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Py(i,r.resumeToken):r.snapshotVersion.compareTo(te.min())>0&&(o.readTime=ha(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=PS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=iu(this.serializer),n.removeTarget=e,this.Fo(n)}}class gR extends Hy{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=NS(e.writeResults,e.commitTime),s=dn(e.commitTime);return this.listener.Zo(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=iu(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>kS(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(S.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(S.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class _R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Nn(n),this.ru=!1):j("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ps(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l.du.add(4),await io(l),l.mu.set("Unknown"),l.du.delete(4),await gl(l)}(this))})}),this.mu=new _R(s,i)}}async function gl(t){if(Ps(t))for(const e of t.wu)await e(!0)}async function io(t){for(const e of t.wu)await e(!1)}function qy(t,e){const n=se(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),$h(n)?Bh(n):xi(n).No()&&Uh(n,e))}function Ky(t,e){const n=se(t),s=xi(n);n.fu.delete(e),s.No()&&zy(n,e),n.fu.size===0&&(s.No()?s.$o():Ps(n)&&n.mu.set("Unknown"))}function Uh(t,e){t.gu.Ot(e.targetId),xi(t).jo(e)}function zy(t,e){t.gu.Ot(e),xi(t).Wo(e)}function Bh(t){t.gu=new ES({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),xi(t).start(),t.mu.ou()}function $h(t){return Ps(t)&&!xi(t).xo()&&t.fu.size>0}function Ps(t){return se(t).du.size===0}function Wy(t){t.gu=void 0}async function vR(t){t.fu.forEach((e,n)=>{Uh(t,e)})}async function wR(t,e){Wy(t),$h(t)?(t.mu.au(e),Bh(t)):t.mu.set("Unknown")}async function ER(t,e,n){if(t.mu.set("Online"),e instanceof xy&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fa(t,s)}else if(e instanceof $o?t.gu.Kt(e):e instanceof Oy?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(te.min()))try{const s=await Vy(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(yt.EMPTY_BYTE_STRING,l.snapshotVersion)),zy(i,a);const c=new Ts(l.target,a,1,l.sequenceNumber);Uh(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await fa(t,s)}}async function fa(t,e,n){if(!to(e))throw e;t.du.add(1),await io(t),t.mu.set("Offline"),n||(n=()=>Vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await gl(t)})}function Gy(t,e){return e().catch(n=>fa(t,n,e))}async function ml(t){const e=se(t),n=es(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;TR(e);)try{const i=await oR(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,bR(e,i)}catch(i){await fa(e,i)}Qy(e)&&Yy(e)}function TR(t){return Ps(t)&&t.lu.length<10}function bR(t,e){t.lu.push(e);const n=es(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Qy(t){return Ps(t)&&!es(t).xo()&&t.lu.length>0}function Yy(t){es(t).start()}async function IR(t){es(t).tu()}async function CR(t){const e=es(t);for(const n of t.lu)e.Yo(n.mutations)}async function SR(t,e,n){const s=t.lu.shift(),i=Oh.from(s,e,n);await Gy(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ml(t)}async function RR(t,e){e&&es(t).Jo&&await async function(n,s){if(i=s.code,wS(i)&&i!==S.ABORTED){const r=n.lu.shift();es(n).Oo(),await Gy(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ml(n)}var i}(t,e),Qy(t)&&Yy(t)}async function tp(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Ps(n);n.du.add(3),await io(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await gl(n)}async function AR(t,e){const n=se(t);e?(n.du.delete(2),await gl(n)):e||(n.du.add(2),await io(n),n.mu.set("Unknown"))}function xi(t){return t.yu||(t.yu=function(e,n,s){const i=se(e);return i.nu(),new pR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:vR.bind(null,t),Zr:wR.bind(null,t),zo:ER.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),$h(t)?Bh(t):t.mu.set("Unknown")):(await t.yu.stop(),Wy(t))})),t.yu}function es(t){return t.pu||(t.pu=function(e,n,s){const i=se(e);return i.nu(),new gR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:IR.bind(null,t),Zr:RR.bind(null,t),Xo:CR.bind(null,t),Zo:SR.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ml(t)):(await t.pu.stop(),t.lu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jh(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),to(t))return new W(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Gi(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ti;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.Iu=new We(G.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Q():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class _i{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _i(e,n,ti.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.Eu=void 0,this.listeners=[]}}class NR{constructor(){this.queries=new Oi(e=>my(e),cl),this.onlineState="Unknown",this.Au=new Set}}async function Hh(t,e){const n=se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kR),i)try{r.Eu=await n.onListen(s)}catch(o){const a=jh(o,`Initialization of query '${tu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Kh(n)}async function qh(t,e){const n=se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function DR(t,e){const n=se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Kh(n)}function OR(t,e,n){const s=se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Kh(t){t.Au.forEach(e=>{e.next()})}class zh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new _i(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.key=e}}class Jy{constructor(e){this.key=e}}class xR{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=oe(),this.mutatedKeys=oe(),this.Ku=_y(e),this.Gu=new ti(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new np,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=ul(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),_=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?g!==_&&(s.track({type:3,doc:d}),y=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),y=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),y=!0):f&&!d&&(s.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new _i(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new np,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=oe(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Jy(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Xy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=oe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return _i.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class PR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class MR{constructor(e){this.key=e,this.ec=!1}}class LR{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Oi(a=>my(a),cl),this.ic=new Map,this.rc=new Set,this.oc=new We(G.comparator),this.uc=new Map,this.cc=new Mh,this.ac={},this.hc=new Map,this.lc=mi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function FR(t,e){const n=WR(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await aR(n.localStore,Dn(e));n.isPrimaryClient&&qy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await UR(n,e,s,a==="current",o.resumeToken)}return i}async function UR(t,e,n,s,i){t.dc=(h,f,d)=>async function(g,_,y,b){let E=_.view.zu(y);E.Mi&&(E=await Jd(g.localStore,_.query,!1).then(({documents:M})=>_.view.zu(M,E)));const v=b&&b.targetChanges.get(_.targetId),N=_.view.applyChanges(E,g.isPrimaryClient,v);return ip(g,_.targetId,N.Yu),N.snapshot}(t,h,f,d);const r=await Jd(t.localStore,e,!0),o=new xR(e,r.Wi),a=o.zu(r.documents),l=so.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);ip(t,n,c.Yu);const u=new PR(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function BR(t,e){const n=se(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!cl(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ru(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ky(n.remoteStore,s.targetId),ou(n,s.targetId)}).catch(eo)):(ou(n,s.targetId),await ru(n.localStore,s.targetId,!0))}async function $R(t,e,n){const s=GR(t);try{const i=await function(r,o){const a=se(r),l=He.now(),c=o.reduce((f,d)=>f.add(d.key),oe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=On(),g=oe();return a.Ki.getEntries(f,c).next(_=>{d=_,d.forEach((y,b)=>{b.isValidDocument()||(g=g.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(_=>{u=_;const y=[];for(const b of o){const E=gS(b,u.get(b.key).overlayedDocument);E!=null&&y.push(new is(b.key,E,cy(E.value.mapValue),fn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:vy(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new We(me)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await ro(s,i.changes),await ml(s.remoteStore)}catch(i){const r=jh(i,"Failed to persist write");n.reject(r)}}async function Zy(t,e){const n=se(t);try{const s=await iR(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ae(o.ec):i.removedDocuments.size>0&&(Ae(o.ec),o.ec=!1))}),await ro(n,s,e)}catch(s){await eo(s)}}function sp(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Kh(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VR(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new We(G.comparator);o=o.insert(r,ct.newNoDocument(r,te.min()));const a=oe().add(r),l=new dl(te.min(),new Map,new ze(me),o,a);await Zy(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Wh(s)}else await ru(s.localStore,e,!1).then(()=>ou(s,e,n)).catch(eo)}async function jR(t,e){const n=se(t),s=e.batch.batchId;try{const i=await sR(n.localStore,e);tv(n,s,null),ev(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ro(n,i)}catch(i){await eo(i)}}async function HR(t,e,n){const s=se(t);try{const i=await function(r,o){const a=se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ae(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);tv(s,e,n),ev(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ro(s,i)}catch(i){await eo(i)}}function ev(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function tv(t,e,n){const s=se(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||nv(t,s)})}function nv(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ky(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Wh(t))}function ip(t,e,n){for(const s of n)s instanceof Xy?(t.cc.addReference(s.key,e),qR(t,s)):s instanceof Jy?(j("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||nv(t,s.key)):Q()}function qR(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.rc.add(s),Wh(t))}function Wh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(De.fromString(e)),s=t.lc.next();t.uc.set(s,new MR(n)),t.oc=t.oc.insert(n,s),qy(t.remoteStore,new Ts(Dn(ll(n.path)),s,2,Ah.ct))}}async function ro(t,e,n){const s=se(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Fh.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(l,h=>k.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>k.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!to(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,g)}}}(s.localStore,r))}async function KR(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await $y(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new W(S.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ro(n,s.Qi)}}function zR(t,e){const n=se(t),s=n.uc.get(e);if(s&&s.ec)return oe().add(s.key);{let i=oe();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function WR(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.nc.zo=DR.bind(null,e.eventManager),e.nc.wc=OR.bind(null,e.eventManager),e}function GR(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HR.bind(null,e),e}class rp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nR(this.persistence,new eR,e.initialUser,this.serializer)}createPersistence(e){return new JS(Lh.Fs,this.serializer)}createSharedClientState(e){return new cR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await AR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NR}createDatastore(e){const n=pl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dR(i));var i;return function(r,o,a,l){return new mR(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>sp(this.syncEngine,a,0),o=ep.D()?new ep:new uR,new yR(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new LR(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.du.add(5),await io(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=ry.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=jh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await $y(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JR(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>tp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>tp(e.remoteStore,r)),t._onlineComponents=e}function XR(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XR(n))throw n;oa("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new rp)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Zl(t,new rp);return t._offlineComponents}async function sv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await op(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await op(t,new QR))),t._onlineComponents}function ZR(t){return sv(t).then(e=>e.syncEngine)}async function da(t){const e=await sv(t),n=e.eventManager;return n.onListen=FR.bind(null,e.syncEngine),n.onUnlisten=BR.bind(null,e.syncEngine),n}function eA(t,e,n={}){const s=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Gh({next:h=>{r.enqueueAndForget(()=>qh(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new W(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new W(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new zh(ll(o.path),c,{includeMetadataChanges:!0,xu:!0});return Hh(i,u)}(await da(t),t.asyncQueue,e,n,s)),s.promise}function tA(t,e,n={}){const s=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Gh({next:h=>{r.enqueueAndForget(()=>qh(i,u)),h.fromCache&&a.source==="server"?l.reject(new W(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new zh(o,c,{includeMetadataChanges:!0,xu:!0});return Hh(i,u)}(await da(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e,n){if(!n)throw new W(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nA(t,e,n,s){if(e===!0&&s===!0)throw new W(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lp(t){if(!G.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(G.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qh(t);throw new W(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IC;switch(n.type){case"firstParty":return new AC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ap.get(e);n&&(j("ComponentProvider","Removing Datastore"),ap.delete(e),n.terminate())}(this),Promise.resolve()}}function sA(t,e,n,s={}){var i;const r=(t=qt(t,_l))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&oa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=lt.MOCK_USER;else{o=nb(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new W(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(l)}t._authCredentials=new CC(new iy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class oo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new oo(this.firestore,e,this._query)}}class Gn extends oo{constructor(e,n,s){super(e,n,ll(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new G(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function Sx(t,e,...n){if(t=kt(t),iv("collection","path",e),t instanceof _l){const s=De.fromString(e,...n);return cp(s),new Gn(t,null,s)}{if(!(t instanceof Tt||t instanceof Gn))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return cp(s),new Gn(t.firestore,null,s)}}function Qi(t,e,...n){if(t=kt(t),arguments.length===1&&(e=ry.A()),iv("doc","path",e),t instanceof _l){const s=De.fromString(e,...n);return lp(s),new Tt(t,null,new G(s))}{if(!(t instanceof Tt||t instanceof Gn))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return lp(s),new Tt(t.firestore,t instanceof Gn?t.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new jy(this,"async_queue_retry"),this.qc=()=>{const n=Jl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Sn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!to(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Nn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Vh.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function hp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Rs extends _l{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new iA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rv(this),this._firestoreClient.terminate()}}function rA(t,e){const n=typeof t=="object"?t:Zm(),s=typeof t=="string"?t:e||"(default)",i=uI(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ZT("firestore");r&&sA(i,...r)}return i}function yl(t){return t._firestoreClient||rv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rv(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new VC(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YR(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(yt.fromBase64String(e))}catch(n){throw new W(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^__.*__$/;class aA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new no(e,this.data,n,this.fieldTransforms)}}class ov{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function av(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Xh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return pa(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(av(this.Yc)&&oA.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class lA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||pl(e)}ua(e,n,s,i=!1){return new Xh({Yc:e,methodName:n,oa:s,path:dt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lv(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new lA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cA(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);Jh("Data must be an object, but it was:",o,s);const a=cv(s,o);let l,c;if(r.merge)l=new Pt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=au(e,h,n);if(!o.contains(f))throw new W(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hv(u,f)||u.push(f)}l=new Pt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new aA(new Ct(a),l,c)}class El extends Yh{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof El}}function uA(t,e,n,s){const i=t.ua(1,e,n);Jh("Data must be an object, but it was:",i,s);const r=[],o=Ct.empty();xs(s,(l,c)=>{const u=Zh(e,l,n);c=kt(c);const h=i.na(u);if(c instanceof El)r.push(u);else{const f=Tl(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Pt(r);return new ov(o,a,i.fieldTransforms)}function hA(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[au(e,s,n)],l=[i];if(r.length%2!=0)throw new W(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(au(e,r[f])),l.push(r[f+1]);const c=[],u=Ct.empty();for(let f=a.length-1;f>=0;--f)if(!hv(c,a[f])){const d=a[f];let g=l[f];g=kt(g);const _=o.na(d);if(g instanceof El)c.push(d);else{const y=Tl(g,_);y!=null&&(c.push(d),u.set(d,y))}}const h=new Pt(c);return new ov(u,h,o.fieldTransforms)}function Tl(t,e){if(uv(t=kt(t)))return Jh("Unsupported field value:",e,t),cv(t,e);if(t instanceof Yh)return function(n,s){if(!av(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Tl(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=He.fromDate(n);return{timestampValue:ha(s.serializer,i)}}if(n instanceof He){const i=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(n instanceof wl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:Py(s.serializer,n._byteString)};if(n instanceof Tt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ph(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Qh(n)}`)}(t,e)}function cv(t,e){const n={};return oy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(s,i)=>{const r=Tl(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function uv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof wl||t instanceof yi||t instanceof Tt||t instanceof Yh)}function Jh(t,e,n){if(!uv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qh(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function au(t,e,n){if((e=kt(e))instanceof vl)return e._internalPath;if(typeof e=="string")return Zh(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const fA=new RegExp("[~\\*/\\[\\]]");function Zh(t,e,n){if(e.search(fA)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new W(S.INVALID_ARGUMENT,a+t+l)}function hv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dA extends fv{data(){return super.data()}}function dv(t,e){return typeof e=="string"?Zh(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pA{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return xs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new wl(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ly(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dr(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);Ae(By(s));const i=new Or(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(n)||Nn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gv extends fv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vo extends gv{data(e={}){return super.data(e)}}class mv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vo(this._firestore,this._userDataWriter,s.key,s,new Yi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:mA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){t=qt(t,Tt);const e=qt(t.firestore,Rs);return eA(yl(e),t._key).then(n=>vv(e,t,n))}class ef extends pA{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function _A(t){t=qt(t,oo);const e=qt(t.firestore,Rs),n=yl(e),s=new ef(e);return pv(t._query),tA(n,t._query).then(i=>new mv(e,s,t,i))}function yA(t,e,n){t=qt(t,Tt);const s=qt(t.firestore,Rs),i=gA(t.converter,e,n);return yv(s,[cA(lv(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fn.none())])}function ec(t,e,n,...s){t=qt(t,Tt);const i=qt(t.firestore,Rs),r=lv(i);let o;return o=typeof(e=kt(e))=="string"||e instanceof vl?hA(r,"updateDoc",t._key,e,n,s):uA(r,"updateDoc",t._key,e),yv(i,[o.toMutation(t._key,fn.exists(!0))])}function tf(t,...e){var n,s,i;t=kt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(hp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Tt)c=qt(t.firestore,Rs),u=ll(t._key.path),l={next:h=>{e[o]&&e[o](vv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=qt(t,oo);c=qt(h.firestore,Rs),u=h._query;const f=new ef(c);l={next:d=>{e[o]&&e[o](new mv(c,f,h,d))},error:e[o+1],complete:e[o+2]},pv(t._query)}return function(h,f,d,g){const _=new Gh(g),y=new zh(f,_,d);return h.asyncQueue.enqueueAndForget(async()=>Hh(await da(h),y)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>qh(await da(h),y))}}(yl(c),u,a,l)}function yv(t,e){return function(n,s){const i=new Sn;return n.asyncQueue.enqueueAndForget(async()=>$R(await ZR(n),s,i)),i.promise}(yl(t),e)}function vv(t,e,n){const s=n.docs.get(e._key),i=new ef(t);return new gv(t,i,e._key,s,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Di=n})(qr),mn(new nn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Rs(new SC(n.getProvider("auth-internal")),new NC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Lt(xd,"3.10.0",t),Lt(xd,"3.10.0","esm2017")})();var vA="firebase",wA="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(vA,wA,"app");function wv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ev(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EA=Ev,Tv=new Ai("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Hr("@firebase/auth");function jo(t,...e){fp.logLevel<=pe.ERROR&&fp.error(`Auth (${qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,...e){throw nf(t,...e)}function bv(t,...e){return nf(t,...e)}function TA(t,e,n){const s=Object.assign(Object.assign({},EA()),{[e]:n});return new Ai("auth","Firebase",s).create(e,{appName:t.name})}function nf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Tv.create(t,...e)}function _e(t,e,...n){if(!t)throw nf(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function ga(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function _s(t){ga(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(ga(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}function bA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_s);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function IA(){return gp()==="http:"||gp()==="https:"}function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IA()||sb()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,ga(n>e,"Short delay should be less than long delay!"),this.isMobile=sh()||zm()}get(){return CA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e){ga(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new ao(3e4,6e4);async function Cv(t,e,n,s,i={}){return Sv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ih(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Iv.fetch()(Rv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Sv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},AA),e);try{const i=new NA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ko(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TA(t,u,c);dp(t,u)}}catch(i){if(i instanceof Pn)throw i;dp(t,"network-request-failed",{message:String(i)})}}function Rv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?RA(t.config,i):`${t.config.apiScheme}://${i}`}class NA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bv(this.auth,"network-request-failed")),kA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bv(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return Cv(t,"POST","/v1/accounts:delete",e)}async function OA(t,e){return Cv(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=kt(t),s=await n.getIdToken(e),i=Av(s);_e(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:cr(tc(i.auth_time)),issuedAtTime:cr(tc(i.iat)),expirationTime:cr(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function Av(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qo(n);return i?JSON.parse(i):(jo("Failed to decode base64 JWT payload"),null)}catch(i){return jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PA(t){const e=Av(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Pn&&MA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function MA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ma(t){var e;const n=t.auth,s=await t.getIdToken(),i=await lu(t,OA(n,{idToken:s}));_e(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?BA(r.providerUserInfo):[],a=UA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new kv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function FA(t){const e=kt(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function BA(t){return t.map(e=>{var{providerId:n}=e,s=wv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){const n=await Sv(t,{},async()=>{const s=ih({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Rv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _e(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $A(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Lr;return s&&(_e(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(_e(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(_e(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ni{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=wv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await lu(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return FA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lu(this,DA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:N,isAnonymous:M,providerData:H,stsTokenManager:B}=n;_e(v&&B,e,"internal-error");const A=Lr.fromJSON(this.name,B);_e(typeof v=="string",e,"internal-error"),Fn(h,e.name),Fn(f,e.name),_e(typeof N=="boolean",e,"internal-error"),_e(typeof M=="boolean",e,"internal-error"),Fn(d,e.name),Fn(g,e.name),Fn(_,e.name),Fn(y,e.name),Fn(b,e.name),Fn(E,e.name);const Y=new ni({uid:v,auth:e,email:f,emailVerified:N,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:d,tenantId:_,stsTokenManager:A,createdAt:b,lastLoginAt:E});return H&&Array.isArray(H)&&(Y.providerData=H.map(ee=>Object.assign({},ee))),y&&(Y._redirectEventId=y),Y}static async _fromIdTokenResponse(e,n,s=!1){const i=new Lr;i.updateFromServerResponse(n);const r=new ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ma(r),r}}/**
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
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nv.type="NONE";const mp=Nv;/**
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
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,r),this.fullPersistenceKey=nc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new si(_s(mp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||_s(mp);const o=nc(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ni._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new si(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new si(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zA(e))return"Blackberry";if(WA(e))return"Webos";if(jA(e))return"Safari";if((e.includes("chrome/")||HA(e))&&!e.includes("edge/"))return"Chrome";if(KA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function VA(t=gn()){return/firefox\//i.test(t)}function jA(t=gn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HA(t=gn()){return/crios\//i.test(t)}function qA(t=gn()){return/iemobile/i.test(t)}function KA(t=gn()){return/android/i.test(t)}function zA(t=gn()){return/blackberry/i.test(t)}function WA(t=gn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e=[]){let n;switch(t){case"Browser":n=_p(gn());break;case"Worker":n=`${_p(gn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${s}`}/**
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
 */class GA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new GA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_s(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_s(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[_s(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _e(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function YA(t){return kt(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hb(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new ao(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ao(2e3,1e4);/**
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
 */new ao(3e4,6e4);/**
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
 */new ao(5e3,15e3);var vp="@firebase/auth",wp="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZA(t){mn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{_e(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),_e(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dv(t)},u=new QA(a,l,c);return bA(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mn(new nn("auth-internal",e=>{const n=YA(e.getProvider("auth").getImmediate());return(s=>new XA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(vp,wp,JA(t)),Lt(vp,wp,"esm2017")}/**
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
 */const ek=5*60;tb("authIdTokenMaxAge");ZA("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Map,nk={activated:!1,tokenObservers:[]};function vn(t){return tk.get(t)||Object.assign({},nk)}const Ep={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Tr,await ik(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Tr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ik(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},_a=new Ai("appCheck","AppCheck",rk);function ok(t){if(!vn(t).activated)throw _a.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="firebase-app-check-database",lk=1,cu="firebase-app-check-store";let No=null;function ck(){return No||(No=new Promise((t,e)=>{try{const n=indexedDB.open(ak,lk);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(_a.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(cu,{keyPath:"compositeKey"})}}}catch(n){e(_a.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),No)}function uk(t,e){return hk(fk(t),e)}async function hk(t,e){const s=(await ck()).transaction(cu,"readwrite"),r=s.objectStore(cu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(_a.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function fk(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Hr("@firebase/app-check");function Tp(t,e){return Gm()?uk(t,e).catch(n=>{uu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={error:"UNKNOWN_ERROR"};function pk(t){return Ha.encodeString(JSON.stringify(t),!1)}async function hu(t,e=!1){const n=t.app;ok(n);const s=vn(n);let i=s.token,r;if(i&&!Xi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Xi(l)?i=l:await Tp(n,void 0))}if(!e&&i&&Xi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await vn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?uu.warn(l.message):uu.error(l),r=l}let a;return i?r?Xi(i)?a={token:i.token,internalError:r}:a=Ip(r):(a={token:i.token},s.token=i,await Tp(n,i)):a=Ip(r),o&&_k(n,a),a}function gk(t,e,n,s){const{app:i}=t,r=vn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Xi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),bp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>bp(t))}function Ov(t,e){const n=vn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function bp(t){const{app:e}=t,n=vn(e);let s=n.tokenRefresher;s||(s=mk(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function mk(t){const{app:e}=t;return new sk(async()=>{const n=vn(e);let s;if(n.token?s=await hu(t,!0):s=await hu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=vn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Ep.RETRIAL_MIN_WAIT,Ep.RETRIAL_MAX_WAIT)}function _k(t,e){const n=vn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Xi(t){return t.expireTimeMillis-Date.now()>0}function Ip(t){return{token:pk(dk),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=vn(this.app);for(const n of e)Ov(this.app,n.next);return Promise.resolve()}}function vk(t,e){return new yk(t,e)}function wk(t){return{getToken:e=>hu(t,e),addTokenListener:e=>gk(t,"INTERNAL",e),removeTokenListener:e=>Ov(t.app,e)}}const Ek="@firebase/app-check",Tk="0.6.4",bk="app-check",Cp="app-check-internal";function Ik(){mn(new nn(bk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return vk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Cp).initialize()})),mn(new nn(Cp,t=>{const e=t.getProvider("app-check").getImmediate();return wk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Lt(Ek,Tk)}Ik();const Ck=Symbol("firebaseApp");function xv(t){return jr()&&Mt(Ck,null)||Zm(t)}const un=()=>{};function sf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Sk(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ms(t){return!!t&&typeof t=="object"}const Rk=Object.prototype;function Ak(t){return Ms(t)&&Object.getPrototypeOf(t)===Rk}function rf(t){return Ms(t)&&t.type==="document"}function Pv(t){return Ms(t)&&t.type==="collection"}function kk(t){return rf(t)||Pv(t)}function Nk(t){return Ms(t)&&t.type==="query"}function Dk(t){return Ms(t)&&"ref"in t}function Ok(t){return Ms(t)&&typeof t.bucket=="string"}function xk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function Pk(){return!!(jr()&&Mt(Fm,null))}const Sp="@firebase/database",Rp="0.14.4";/**
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
 */let Mv="";function Mk(t){Mv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:br(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Lk(e)}}catch{}return new Fk},ys=Lv("localStorage"),fu=Lv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Hr("@firebase/database"),Uk=function(){let t=1;return function(){return t++}}(),Fv=function(t){const e=gb(t),n=new ub;n.update(e);const s=n.digest();return Ha.encodeByteArray(s)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lo.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let bs=null,Ap=!0;const Bk=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ii.logLevel=pe.VERBOSE,bs=ii.log.bind(ii),e&&fu.set("logging_enabled",!0)):typeof t=="function"?bs=t:(bs=null,fu.remove("logging_enabled"))},ut=function(...t){if(Ap===!0&&(Ap=!1,bs===null&&fu.get("logging_enabled")===!0&&Bk(!0)),bs){const e=lo.apply(null,t);bs(e)}},co=function(t){return function(...e){ut(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);ii.error(e)},As=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw ii.error(e),new Error(e)},Ft=function(...t){const e="FIREBASE WARNING: "+lo(...t);ii.warn(e)},$k=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vi="[MIN_NAME]",ks="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===vi||e===ks)return-1;if(e===vi||t===ks)return 1;{const n=kp(t),s=kp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},jk=function(t,e){return t===e?0:t<e?-1:1},$i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},of=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=of(t[e[s]]);return n+="}",n},Bv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $v=function(t){P(!Uv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Hk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Kk=new RegExp("^-?(0*)\\d{1,10}$"),zk=-2147483648,Wk=2147483647,kp=function(t){if(Kk.test(t)){const e=Number(t);if(e>=zk&&e<=Wk)return e}return null},uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ft("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ur=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ft(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ft(e)}}class pu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="5",Vv="v",jv="s",Hv="r",qv="f",Kv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zv="ls",Wv="p",gu="ac",Gv="websocket",Qv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ys.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ys.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yv(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===Gv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jk(t)&&(n.ns=t.namespace);const i=[];return Kt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={},ic={};function lf(t){const e=t.toString();return sc[e]||(sc[e]=new Zk),sc[e]}function eN(t,e){const n=t.toString();return ic[n]||(ic[n]=e()),ic[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&uo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="start",nN="close",sN="pLPCommand",iN="pRTLPCB",Xv="id",Jv="pw",Zv="ser",rN="cb",oN="seg",aN="ts",lN="d",cN="dframe",ew=1870,tw=30,uN=ew-tw,hN=25e3,fN=3e4;class Ws{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=co(e),this.stats_=lf(n),this.urlFn=l=>(this.appCheckToken&&(l[gu]=this.appCheckToken),Yv(n,Qv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fN)),Vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Np)this.id=a,this.password=l;else if(o===nN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Np]="t",s[Zv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vv]=af,this.transportSessionId&&(s[jv]=this.transportSessionId),this.lastSessionId&&(s[zv]=this.lastSessionId),this.applicationId&&(s[Wv]=this.applicationId),this.appCheckToken&&(s[gu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(s[Hv]=qv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hk()&&!qk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qm(n),i=Bv(s,uN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[cN]="t",s[Xv]=e,s[Jv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Uk(),window[sN+this.uniqueCallbackIdentifier]=e,window[iN+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ut("frame writing exception"),a.stack&&ut(a.stack),ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ut("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xv]=this.myID,e[Jv]=this.myPW,e[Zv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tw+s.length<=ew;){const o=this.pendingSegs.shift();s=s+"&"+oN+i+"="+o.seg+"&"+aN+i+"="+o.ts+"&"+lN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(hN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=16384,pN=45e3;let ya=null;typeof MozWebSocket<"u"?ya=MozWebSocket:typeof WebSocket<"u"&&(ya=WebSocket);class Xt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=co(this.connId),this.stats_=lf(n),this.connURL=Xt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Vv]=af,typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(o[Hv]=qv),n&&(o[jv]=n),s&&(o[zv]=s),i&&(o[gu]=i),r&&(o[Wv]=r),Yv(e,Gv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ys.set("previous_websocket_failure",!0);try{let s;Wm(),this.mySock=new ya(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ya!==null&&!Xt.forceDisallow_}static previouslyFailed(){return ys.isInMemoryStorage||ys.get("previous_websocket_failure")===!0}markConnectionHealthy(){ys.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=br(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bv(n,dN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xt&&Xt.isAvailable();let s=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||Ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xt];else{const i=this.transports_=[];for(const r of Fr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=6e4,mN=5e3,_N=10*1024,yN=100*1024,rc="t",Dp="d",vN="s",Op="r",wN="e",xp="o",Pp="a",Mp="n",Lp="p",EN="h";class TN{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=co("c:"+this.id+":"),this.transportManager_=new Fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ur(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_N?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rc in e){const n=e[rc];n===Pp?this.upgradeIfSecondaryHealthy_():n===Op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$i("t",e),s=$i("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$i("t",e),s=$i("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$i(rc,e);if(Dp in e){const s=e[Dp];if(n===EN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vN?this.onConnectionShutdown_(s):n===Op?this.onReset_(s):n===wN?du("Server Error: "+s):n===xp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==s&&Ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ur(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ur(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ys.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends sw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=32,Up=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Te(){return new ke("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ts(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function iw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ow(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Je(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ke(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return jt(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function aw(t,e){if(ts(t)!==ts(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ts(t)>ts(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class IN{constructor(e,n){this.errorPrefix_=n,this.parts_=rw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qa(this.parts_[s]);lw(this)}}function CN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qa(e),lw(t)}function SN(t){const e=t.parts_.pop();t.byteLength_-=qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function lw(t){if(t.byteLength_>Up)throw new Error(t.errorPrefix_+"has a key path longer than "+Up+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fp+") or object contains a cycle "+us(t))}function us(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends sw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new uf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=1e3,RN=60*5*1e3,Bp=30*1e3,AN=1.3,kN=3e4,NN="server_kill",$p=3;class Rn extends nw{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rn.nextPersistentConnectionId_++,this.log_=co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vi,this.maxReconnectDelay_=RN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Wm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(tt(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Tr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Rn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const s=ui(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kN&&(this.reconnectDelay_=Vi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new TN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{Ft(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(NN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ft(h),l())}}}interrupt(e){ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hd(this.interruptReasons_)&&(this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>of(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$p&&(this.reconnectDelay_=Bp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mv.replace(/\./g,"-")]=1,sh()?e["framework.cordova"]=1:zm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return hd(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(vi,e),i=new ue(vi,n);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class cw extends bl{static get __EMPTY_NODE(){return Do}static set __EMPTY_NODE(e){Do=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(ks,Do)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Do)}toString(){return".key"}}const ri=new cw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??St.EMPTY_NODE,this.right=r??St.EMPTY_NODE}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return St.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class DN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new DN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){return Pi(t.name,e.name)}function hf(t,e){return Pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;function xN(t){mu=t}const uw=function(t){return typeof t=="number"?"number:"+$v(t):"string:"+t},hw=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else P(t===mu||t.isEmpty(),"priority of unexpected type.");P(t===mu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vp;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hw(this.priorityNode_)}static set __childrenNodeConstructor(e){Vp=e}static get __childrenNodeConstructor(){return Vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ce(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||ts(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$v(this.value_):e+=this.value_,this.lazyHash_=Fv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),r=Qe.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fw,dw;function PN(t){fw=t}function MN(t){dw=t}class LN extends bl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Pi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(ks,new Qe("[PRIORITY-POST]",dw))}makePost(e,n){const s=fw(e);return new ue(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const pt=new LN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=Math.log(2);class UN{constructor(e){const n=r=>parseInt(Math.log(r)/FN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=i(l,d),_=i(d+1,c);return h=t[d],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,g,_)}},r=function(l){let c=null,u=null,h=t.length;const f=function(g,_){const y=h-g,b=h;h-=g;const E=i(y+1,b),v=t[y],N=n?n(v):v;d(new Xe(N,v.node,_,null,E))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));_?f(y,Xe.BLACK):(f(y,Xe.BLACK),f(y,Xe.RED))}return u},o=new UN(t.length),a=r(o);return new St(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;const Vs={};class Cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Vs&&pt,"ChildrenNode.ts has not been loaded"),oc=oc||new Cn({".priority":Vs},{".priority":pt}),oc}get(e){const n=ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ri,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=wa(s,e.getCompare()):a=Vs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const s=Yo(this.indexes_,(i,r)=>{const o=ui(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===Vs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ue.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wa(a,o.getCompare())}else return Vs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ue(e.name,a))),l.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Yo(this.indexes_,i=>{if(i===Vs)return i;{const r=n.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new Cn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&hw(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ji||(ji=new ye(new St(hf),null,Cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ji}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ji:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ji:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{P(ce(e)!==".priority"||ts(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pt,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uw(this.getPriority().val())+":"),this.forEachChild(pt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ho?-1:0}withIndex(e){if(e===ri||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ri||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pt),i=n.getIterator(pt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ri?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BN extends ye{constructor(){super(new St(hf),ye.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const ho=new BN;Object.defineProperties(ue,{MIN:{value:new ue(vi,ye.EMPTY_NODE)},MAX:{value:new ue(ks,ho)}});cw.__EMPTY_NODE=ye.EMPTY_NODE;Qe.__childrenNodeConstructor=ye;xN(ho);MN(ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=!0;function ht(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,ht(e))}if(!(t instanceof Array)&&$N){const n=[];let s=!1;if(Kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ht(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ue(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=wa(n,ON,o=>o.name,hf);if(s){const o=wa(n,pt.getCompare());return new ye(r,ht(e),new Cn({".priority":o},{".priority":pt}))}else return new ye(r,ht(e),Cn.Default)}else{let n=ye.EMPTY_NODE;return Kt(t,(s,i)=>{if(Mn(t,s)&&s.substring(0,1)!=="."){const r=ht(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ht(e))}}PN(ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN extends bl{constructor(e){super(),this.indexPath_=e,P(!ae(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Pi(e.name,n.name):r}makePost(e,n){const s=ht(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,ho);return new ue(ks,e)}toString(){return rw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN extends bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=ht(e);return new ue(n,s)}toString(){return".value"}}const HN=new jN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){return{type:"value",snapshotNode:t}}function KN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pt?n="$priority":t.index_===HN?n="$value":t.index_===ri?n="$key":(P(t.index_ instanceof VN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends nw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ea.getListenId_(e,s),a={};this.listens_[o]=a;const l=Hp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ui(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ea.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hp(e._queryParams),s=e._path.toString(),i=new Tr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ih(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=br(a.responseText)}catch{Ft("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ft("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return{value:null,children:new Map}}function pw(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,Ta());const i=t.children.get(s);e=Re(e),pw(i,e,n)}}function _u(t,e,n){t.value!==null?n(e,t.value):QN(t,(s,i)=>{const r=new ke(e.toString()+"/"+s);_u(i,r,n)})}function QN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Kt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=10*1e3,XN=30*1e3,JN=5*60*1e3;class ZN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YN(e);const s=Kp+(XN-Kp)*Math.random();ur(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Kt(e,(i,r)=>{r>0&&Mn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ur(this.reportStats_.bind(this),Math.floor(Math.random()*2*JN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function gw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _w(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=gw()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new ba(Te(),n,this.revert)}}else return P(ce(this.path)===e,"operationForChild called for unrelated child."),new ba(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return ae(this.path)?new Ns(this.source,Te(),this.snap.getImmediateChild(e)):new Ns(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=hn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new Ns(this.source,Te(),n.value):new Ur(this.source,Te(),n)}else return P(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ur(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function eD(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(WN(o.childName,o.snapshotNode))}),Hi(t,i,"child_removed",e,s,n),Hi(t,i,"child_added",e,s,n),Hi(t,i,"child_moved",r,s,n),Hi(t,i,"child_changed",e,s,n),Hi(t,i,"value",e,s,n),i}function Hi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>nD(t,a,l)),o.forEach(a=>{const l=tD(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nD(t,e,n){if(e.childName==null||n.childName==null)throw Ri("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e){return{eventCache:t,serverCache:e}}function hr(t,e,n,s){return yw(new df(e,n,s),t.serverCache)}function vw(t,e,n,s){return yw(t.eventCache,new df(e,n,s))}function yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;const sD=()=>(ac||(ac=new St(jk)),ac);class Ce{constructor(e,n=sD()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Kt(e,(s,i)=>{n=n.set(new ke(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Te(),value:this.value};if(ae(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Re(e),n);return r!=null?{path:Je(new ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Re(e)):new Ce(null)}}set(e,n){if(ae(e))return new Ce(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Ce(null)).set(Re(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(Re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Re(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ce(e),r=(this.children.get(s)||new Ce(null)).setTree(Re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(Te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Je(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Re(e),Je(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Te(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(Re(e),Je(n,i),s):new Ce(null)}}foreach(e){this.foreach_(Te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Ce(null))}}function fr(t,e,n){if(ae(e))return new tn(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=jt(i,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new tn(r)}}}function zp(t,e,n){let s=t;return Kt(n,(i,r)=>{s=fr(s,Je(e,i),r)}),s}function Wp(t,e){if(ae(e))return tn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new tn(n)}}function vu(t,e){return Ls(t,e)!=null}function Ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function Gp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pt,(s,i)=>{e.push(new ue(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function Qn(t,e){if(ae(e))return t;{const n=Ls(t,e);return n!=null?new tn(new Ce(n)):new tn(t.writeTree_.subtree(e))}}function wu(t){return t.writeTree_.isEmpty()}function wi(t,e){return ww(Te(),t.writeTree_,e)}function ww(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ww(Je(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Je(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e){return Sw(e,t)}function iD(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fr(t.visibleWrites,e,n)),t.lastWriteId=s}function rD(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function oD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aD(a,s.path)?i=!1:Jt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return lD(t),!0;if(s.snap)t.visibleWrites=Wp(t.visibleWrites,s.path);else{const a=s.children;Kt(a,l=>{t.visibleWrites=Wp(t.visibleWrites,Je(s.path,l))})}return!0}else return!1}function aD(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Je(t.path,n),e))return!0;return!1}function lD(t){t.visibleWrites=Tw(t.allWrites,cD,Te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cD(t){return t.visible}function Tw(t,e,n){let s=tn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Jt(n,o)?(a=jt(n,o),s=fr(s,a,r.snap)):Jt(o,n)&&(a=jt(o,n),s=fr(s,Te(),r.snap.getChild(a)));else if(r.children){if(Jt(n,o))a=jt(n,o),s=zp(s,a,r.children);else if(Jt(o,n))if(a=jt(o,n),ae(a))s=zp(s,Te(),r.children);else{const l=ui(r.children,ce(a));if(l){const c=l.getChild(Re(a));s=fr(s,Te(),c)}}}else throw Ri("WriteRecord should have .snap or .children")}}return s}function bw(t,e,n,s,i){if(!s&&!i){const r=Ls(t.visibleWrites,e);if(r!=null)return r;{const o=Qn(t.visibleWrites,e);if(wu(o))return n;if(n==null&&!vu(o,Te()))return null;{const a=n||ye.EMPTY_NODE;return wi(o,a)}}}else{const r=Qn(t.visibleWrites,e);if(!i&&wu(r))return n;if(!i&&n==null&&!vu(r,Te()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},a=Tw(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return wi(a,l)}}}function uD(t,e,n){let s=ye.EMPTY_NODE;const i=Ls(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Qn(t.visibleWrites,e);return n.forEachChild(pt,(o,a)=>{const l=wi(Qn(r,new ke(o)),a);s=s.updateImmediateChild(o,l)}),Gp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qn(t.visibleWrites,e);return Gp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function hD(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Je(e,n);if(vu(t.visibleWrites,r))return null;{const o=Qn(t.visibleWrites,r);return wu(o)?i.getChild(n):wi(o,i.getChild(n))}}function fD(t,e,n,s){const i=Je(e,n),r=Ls(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Qn(t.visibleWrites,i);return wi(o,s.getNode().getImmediateChild(n))}else return null}function dD(t,e){return Ls(t.visibleWrites,e)}function pD(t,e,n,s,i,r,o){let a;const l=Qn(t.visibleWrites,e),c=Ls(l,Te());if(c!=null)a=c;else if(n!=null)a=wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function gD(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Eu(t,e,n,s){return bw(t.writeTree,t.treePath,e,n,s)}function Iw(t,e){return uD(t.writeTree,t.treePath,e)}function Qp(t,e,n,s){return hD(t.writeTree,t.treePath,e,n,s)}function Ia(t,e){return dD(t.writeTree,Je(t.treePath,e))}function mD(t,e,n,s,i,r){return pD(t.writeTree,t.treePath,e,n,s,i,r)}function pf(t,e,n){return fD(t.writeTree,t.treePath,e,n)}function Cw(t,e){return Sw(Je(t.treePath,e),t.writeTree)}function Sw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,jp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,KN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,jp(s,e.snapshotNode,i.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Rw=new yD;class gf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new df(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ds(this.viewCache_),r=mD(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function vD(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wD(t,e,n,s,i){const r=new _D;let o,a;if(n.type===hn.OVERWRITE){const c=n;c.source.fromUser?o=Tu(t,e,c.path,c.snap,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=Ca(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===hn.MERGE){const c=n;c.source.fromUser?o=TD(t,e,c.path,c.children,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===hn.ACK_USER_WRITE){const c=n;c.revert?o=CD(t,e,c.path,s,i,r):o=bD(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===hn.LISTEN_COMPLETE)o=ID(t,e,n.path,s,r);else throw Ri("Unknown operation type: "+n.type);const l=r.getChanges();return ED(e,o,l),{viewCache:o,changes:l}}function ED(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(qN(yu(e)))}}function Aw(t,e,n,s,i,r){const o=e.eventCache;if(Ia(s,n)!=null)return e;{let a,l;if(ae(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ds(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=Iw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Eu(s,Ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(n);if(c===".priority"){P(ts(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Qp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Re(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Qp(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=pf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return hr(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function Ca(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ce(n);if(!l.isCompleteForPath(n)&&ts(n)>1)return e;const g=Re(n),y=l.getNode().getImmediateChild(d).updateChild(g,s);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,g,Rw,null)}const h=vw(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),f=new gf(i,h,r);return Aw(t,h,n,i,f,a)}function Tu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gf(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=hr(e,c,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=hr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Re(n),d=a.getNode().getImmediateChild(h);let g;if(ae(f))g=s;else{const _=u.getCompleteChild(h);_!=null?iw(f)===".priority"&&_.getChild(ow(f)).isEmpty()?g=_:g=_.updateChild(f,s):g=ye.EMPTY_NODE}if(d.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=hr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yp(t,e){return t.eventCache.isCompleteForChild(e)}function TD(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Je(n,l);Yp(e,ce(u))&&(a=Tu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Je(n,l);Yp(e,ce(u))||(a=Tu(t,a,u,c,i,r,o))}),a}function Xp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function bu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Xp(t,d,f);l=Ca(t,l,new ke(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),_=Xp(t,g,f);l=Ca(t,l,new ke(h),_,i,r,o,a)}}),l}function bD(t,e,n,s,i,r,o){if(Ia(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ca(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new Ce(null);return l.getNode().forEachChild(ri,(u,h)=>{c=c.set(new ke(u),h)}),bu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ce(null);return s.foreach((u,h)=>{const f=Je(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),bu(t,e,n,c,i,r,a,o)}}function ID(t,e,n,s,i){const r=e.serverCache,o=vw(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Aw(t,o,n,s,Rw,i)}function CD(t,e,n,s,i,r){let o;if(Ia(s,n)!=null)return e;{const a=new gf(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eu(s,Ds(e));else{const h=e.serverCache.getNode();P(h instanceof ye,"serverChildren would be complete if leaf node"),u=Iw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ce(n);let h=pf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Re(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,Re(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eu(s,Ds(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ia(s,Te())!=null,hr(e,c,o,t.filter.filtersNodes())}}function SD(t,e){const n=Ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Jp(t,e,n,s){e.type===hn.MERGE&&e.source.queryId!==null&&(P(Ds(t.viewCache_),"We should always have a full cache before handling merges"),P(yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=wD(t.processor_,i,e,n,s);return vD(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,RD(t,r.changes,r.viewCache.eventCache.getNode(),null)}function RD(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return eD(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp;function AD(t){P(!Zp,"__referenceConstructor has already been defined"),Zp=t}function mf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Jp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Jp(o,e,n,s));return r}}function _f(t,e){let n=null;for(const s of t.views.values())n=n||SD(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;function kD(t){P(!eg,"__referenceConstructor has already been defined"),eg=t}class tg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=gD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ND(t,e,n,s,i){return iD(t.pendingWriteTree_,e,n,s,i),i?Cl(t,new Ns(gw(),e,n)):[]}function Gs(t,e,n=!1){const s=rD(t.pendingWriteTree_,e);if(oD(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(Te(),!0):Kt(s.children,o=>{r=r.set(new ke(o),!0)}),Cl(t,new ba(s.path,r,n))}else return[]}function Il(t,e,n){return Cl(t,new Ns(mw(),e,n))}function DD(t,e,n){const s=Ce.fromObject(n);return Cl(t,new Ur(mw(),e,s))}function OD(t,e,n,s){const i=Ow(t,s);if(i!=null){const r=xw(i),o=r.path,a=r.queryId,l=jt(o,e),c=new Ns(_w(a),l,n);return Pw(t,o,c)}else return[]}function xD(t,e,n,s){const i=Ow(t,s);if(i){const r=xw(i),o=r.path,a=r.queryId,l=jt(o,e),c=Ce.fromObject(n),u=new Ur(_w(a),l,c);return Pw(t,o,u)}else return[]}function kw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=jt(o,e),c=_f(a,l);if(c)return c});return bw(i,e,r,n,!0)}function Cl(t,e){return Nw(e,t.syncPointTree_,null,Ew(t.pendingWriteTree_,Te()))}function Nw(t,e,n,s){if(ae(t.path))return Dw(t,e,n,s);{const i=e.get(Te());n==null&&i!=null&&(n=_f(i,Te()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Cw(s,o);r=r.concat(Nw(a,l,c,u))}return i&&(r=r.concat(mf(i,t,s,n))),r}}function Dw(t,e,n,s){const i=e.get(Te());n==null&&i!=null&&(n=_f(i,Te()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Cw(s,o),u=t.operationForChild(o);u&&(r=r.concat(Dw(u,a,l,c)))}),i&&(r=r.concat(mf(i,t,s,n))),r}function Ow(t,e){return t.tagToQueryMap.get(e)}function xw(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function Pw(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=Ew(t.pendingWriteTree_,e);return mf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Je(this.path_,e);return new vf(this.syncTree_,n)}node(){return kw(this.syncTree_,this.path_)}}const PD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ng=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LD(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},LD=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},FD=function(t,e,n,s){return wf(e,new vf(n,t),s)},UD=function(t,e,n){return wf(t,new yf(e),n)};function wf(t,e,n){const s=t.getPriority().val(),i=ng(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ng(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,ht(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Qe(i))),o.forEachChild(pt,(a,l)=>{const c=wf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tf(t,e){let n=e instanceof ke?e:new ke(e),s=t,i=ce(n);for(;i!==null;){const r=ui(s.node.children,i)||{children:{},childCount:0};s=new Ef(i,s,r),n=Re(n),i=ce(n)}return s}function Mi(t){return t.node.value}function Mw(t,e){t.node.value=e,Iu(t)}function Lw(t){return t.node.childCount>0}function BD(t){return Mi(t)===void 0&&!Lw(t)}function Sl(t,e){Kt(t.node.children,(n,s)=>{e(new Ef(n,t,s))})}function Fw(t,e,n,s){n&&!s&&e(t),Sl(t,i=>{Fw(i,e,!0,s)}),n&&s&&e(t)}function $D(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fo(t){return new ke(t.parent===null?t.name:fo(t.parent)+"/"+t.name)}function Iu(t){t.parent!==null&&VD(t.parent,t.name,t)}function VD(t,e,n){const s=BD(n),i=Mn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Iu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Iu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=/[\[\].#$\/\u0000-\u001F\u007F]/,HD=/[\[\].#$\u0000-\u001F\u007F]/,lc=10*1024*1024,Uw=function(t){return typeof t=="string"&&t.length!==0&&!jD.test(t)},qD=function(t){return typeof t=="string"&&t.length!==0&&!HD.test(t)},KD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qD(t)},Bw=function(t,e,n){const s=n instanceof ke?new IN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+us(s));if(typeof e=="function")throw new Error(t+"contains a function "+us(s)+" with contents = "+e.toString());if(Uv(e))throw new Error(t+"contains "+e.toString()+" "+us(s));if(typeof e=="string"&&e.length>lc/3&&qa(e)>lc)throw new Error(t+"contains a string greater than "+lc+" utf8 bytes "+us(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Uw(o)))throw new Error(t+" contains an invalid key ("+o+") "+us(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CN(s,o),Bw(t,a,s),SN(s)}),i&&r)throw new Error(t+' contains ".value" child '+us(s)+" in addition to actual children.")}},zD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Uw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KD(n))throw new Error(pb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function GD(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!aw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Fs(t,e,n){GD(t,n),QD(t,s=>Jt(s,e)||Jt(e,s))}function QD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(YD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();bs&&ut("event: "+n.toString()),uo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="repo_interrupt",JD=25;class ZD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ta(),this.transactionQueueTree_=new Ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eO(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||Gk())t.server_=new Ea(t.repoInfo_,(s,i,r,o)=>{sg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ig(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(s,i,r,o)=>{sg(t,s,i,r,o)},s=>{ig(t,s)},s=>{nO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=eN(t.repoInfo_,()=>new ZN(t.stats_,t.server_)),t.infoData_=new GN,t.infoSyncTree_=new tg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Il(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bf(t,"connected",!1),t.serverSyncTree_=new tg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Fs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function tO(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $w(t){return PD({timestamp:tO(t)})}function sg(t,e,n,s,i){t.dataUpdateCount++;const r=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Yo(n,c=>ht(c));o=xD(t.serverSyncTree_,r,l,i)}else{const l=ht(n);o=OD(t.serverSyncTree_,r,l,i)}else if(s){const l=Yo(n,c=>ht(c));o=DD(t.serverSyncTree_,r,l)}else{const l=ht(n);o=Il(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cf(t,r)),Fs(t.eventQueue_,a,o)}function ig(t,e){bf(t,"connected",e),e===!1&&iO(t)}function nO(t,e){Kt(e,(n,s)=>{bf(t,n,s)})}function bf(t,e,n){const s=new ke("/.info/"+e),i=ht(n);t.infoData_.updateSnapshot(s,i);const r=Il(t.infoSyncTree_,s,i);Fs(t.eventQueue_,s,r)}function sO(t){return t.nextWriteId_++}function iO(t){Vw(t,"onDisconnectEvents");const e=$w(t),n=Ta();_u(t.onDisconnect_,Te(),(i,r)=>{const o=FD(i,r,t.serverSyncTree_,e);pw(n,i,o)});let s=[];_u(n,Te(),(i,r)=>{s=s.concat(Il(t.serverSyncTree_,i,r));const o=lO(t,i);Cf(t,o)}),t.onDisconnect_=Ta(),Fs(t.eventQueue_,Te(),s)}function rO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XD)}function Vw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ut(n,...e)}function jw(t,e,n){return kw(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function If(t,e=t.transactionQueueTree_){if(e||Rl(t,e),Mi(e)){const n=qw(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oO(t,fo(e),n)}else Lw(e)&&Sl(e,n=>{If(t,n)})}function oO(t,e,n){const s=n.map(c=>c.currentWriteId),i=jw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=jt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Vw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Gs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Rl(t,Tf(t.transactionQueueTree_,e)),If(t,t.transactionQueueTree_),Fs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)uo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ft("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Cf(t,e)}},o)}function Cf(t,e){const n=Hw(t,e),s=fo(n),i=qw(t,n);return aO(t,i,s),s}function aO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=jt(n,l.path);let u=!1,h;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=JD)u=!0,h="maxretry",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=jw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Bw("transaction failed: Data returned ",d,l.path);let g=ht(d);typeof d=="object"&&d!=null&&Mn(d,".priority")||(g=g.updatePriority(f.getPriority()));const y=l.currentWriteId,b=$w(t),E=UD(g,f,b);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=sO(t),o.splice(o.indexOf(y),1),i=i.concat(ND(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(Gs(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0))}Fs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Rl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)uo(s[a]);If(t,t.transactionQueueTree_)}function Hw(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&Mi(s)===void 0;)s=Tf(s,n),e=Re(e),n=ce(e);return s}function qw(t,e){const n=[];return Kw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Kw(t,e,n){const s=Mi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Sl(e,i=>{Kw(t,i,n)})}function Rl(t,e){const n=Mi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Mw(e,n.length>0?n:void 0)}Sl(e,s=>{Rl(t,s)})}function lO(t,e){const n=fo(Hw(t,e)),s=Tf(t.transactionQueueTree_,e);return $D(s,i=>{cc(t,i)}),cc(t,s),Fw(s,i=>{cc(t,i)}),n}function cc(t,e){const n=Mi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mw(e,void 0):n.length=r+1,Fs(t.eventQueue_,fo(e),i);for(let o=0;o<s.length;o++)uo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ft(`Invalid query segment '${n}' in query '${t}'`)}return e}const rg=function(t,e){const n=hO(t),s=n.namespace;n.domain==="firebase.com"&&As(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&As("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$k();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ke(n.pathString)}},hO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=cO(t.substring(u,h)));const f=uO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:iw(this._path)}get ref(){return new Li(this._repo,this._path)}get _queryIdentifier(){const e=qp(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return qp(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof Sf))return!1;const n=this._repo===e._repo,s=aw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bN(this._path)}}class Li extends Sf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=ow(this._path);return e===null?null:new Li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}AD(Li);kD(Li);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let dO=!1;function pO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||As("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[fO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=rg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new pu(pu.OWNER):new Yk(t.name,t.options,e);zD("Invalid Firebase Database URL",o),ae(o.path)||As("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mO(a,t,u,new Qk(t.name,n));return new _O(h,t)}function gO(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&As(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rO(t),delete n[t.key]}function mO(t,e,n,s){let i=Cu[e.name];i||(i={},Cu[e.name]=i);let r=i[t.toURLString()];return r&&As("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZD(t,dO,n,s),i[t.toURLString()]=r,r}class _O{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Li(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&As("Cannot call "+e+" on a deleted database.")}}/**
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
 */function yO(t){Mk(qr),mn(new nn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Lt(Sp,Rp,t),Lt(Sp,Rp,"esm2017")}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firebasestorage.googleapis.com",vO="storageBucket",wO=2*60*1e3,EO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Pn{constructor(e,n,s=0){super(uc(e),`Firebase Storage: ${n} (${uc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,En.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wn||(wn={}));function uc(t){return"storage/"+t}function TO(){const t="An unknown error occurred, please check the error payload for server response.";return new En(wn.UNKNOWN,t)}function bO(){return new En(wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IO(){return new En(wn.CANCELED,"User canceled the upload/download.")}function CO(t){return new En(wn.INVALID_URL,"Invalid URL '"+t+"'.")}function SO(t){return new En(wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function og(t){return new En(wn.INVALID_ARGUMENT,t)}function Ww(){return new En(wn.APP_DELETED,"The Firebase app was deleted.")}function RO(t){return new En(wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(s.path==="")return s;throw SO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},_=n===zw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${y}`,"i"),v=[{regex:a,indices:l,postModify:r},{regex:d,indices:g,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<v.length;N++){const M=v[N],H=M.regex.exec(e);if(H){const B=H[M.indices.bucket];let A=H[M.indices.path];A||(A=""),s=new Zt(B,A),M.postModify(s);break}}if(s==null)throw CO(e);return s}}class AO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function f(){r&&clearTimeout(r)}function d(y,...b){if(c){f();return}if(y){f(),u.call(null,y,...b);return}if(l()||o){f(),u.call(null,y,...b);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,h(v)}let g=!1;function _(y){g||(g=!0,f(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function NO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){return t!==void 0}function ag(t,e,n,s){if(s<e)throw og(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw og(`Invalid value for '${t}'. Expected ${n} or less.`)}function OO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sa||(Sa={}));/**
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
 */function xO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new xo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Sa.NO_ERROR,l=r.getStatus();if(!a||xO(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Sa.ABORT;s(!1,new xo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new xo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=TO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ww():IO();o(l)}else{const l=bO();o(l)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=kO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function MO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BO(t,e,n,s,i,r,o=!0){const a=OO(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return FO(c,e),MO(c,n),LO(c,r),UO(c,s),new PO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ra{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ra(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VO(this._location.path)}get storage(){return this._service}get parent(){const e=$O(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Ra(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RO(e)}}function lg(t,e){const n=e==null?void 0:e[vO];return n==null?null:Zt.makeFromBucketSpec(n,t)}class jO{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=zw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wO,this._maxUploadRetryTime=EO,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=lg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=lg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ag("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ag("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ra(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new AO(Ww());{const o=BO(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const cg="@firebase/storage",ug="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="storage";function qO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jO(n,s,i,e,qr)}function KO(){mn(new nn(HO,qO,"PUBLIC").setMultipleInstances(!0)),Lt(cg,ug,""),Lt(cg,ug,"esm2017")}KO();const hc=new WeakMap;function Gw(t,e){return hc.has(e)||hc.set(e,t||{f:{},r:{},s:{},u:{}}),hc.get(e)}function zO(t,e,n,s){if(!t)return n;const[i,r]=Qw(t);if(!i)return n;const o=Gw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function WO(t,e,n,s){if(!t)return;const[i,r]=Qw(t);if(!i)return;const o=Gw(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(un),a}function Qw(t){return kk(t)||Nk(t)?["f",t.path]:Dk(t)?["r",t.toString()]:Ok(t)?["s",t.toString()]:[]}const fc=new WeakMap;function GO(t,e,n){const s=xv();fc.has(s)||fc.set(s,new Map);const i=fc.get(s),r=WO(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):un}const QO={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Su(t,e,n,s){if(!Ak(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const g=Object.getOwnPropertyDescriptor(a,d);g&&!g.enumerable&&Object.defineProperty(h,d,g)});for(const d in a){const g=a[d];if(g==null||g instanceof Date||g instanceof He||g instanceof wl)h[d]=g;else if(rf(g)){const _=c+d;h[d]=_ in n?l[d]:g.path,f[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[d]=Array(g.length);for(let _=0;_<g.length;_++){const y=g[_];y&&y.path in r&&(h[d][_]=r[y.path])}o(g,l[d]||h[d],c+d+".",[h[d],f])}else Ms(g)?(h[d]={},o(g,l[d],c+d+".",[h[d],f])):h[d]=g}}return o(t,e,"",i),i}const Rf={reset:!1,wait:!0,maxRefDepth:2,converter:QO,snapshotOptions:{serverTimestamps:"estimate"}};function Aa(t){for(const e in t)t[e].unsub()}function Ru(t,e,n,s,i,r,o,a,l){const[c,u]=Su(s.data(t.snapshotOptions),sf(e,n),i,t);r.set(e,n,c),Au(t,e,n,i,u,r,o,a,l)}function YO({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=un;return a.once?_v(t).then(u=>{u.exists()?Ru(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=tf(t,u=>{u.exists()?Ru(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Aa(l)}}function Au(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function g(_){_ in d&&++h>=f&&a(n)}c.forEach(_=>{const y=s[_],b=i[_],E=`${n}.${_}`;if(d[E]=!0,y)if(y.path!==b.path)y.unsub();else return;s[_]={data:()=>sf(e,E),unsub:YO({ref:b,target:e,path:E,depth:o,ops:r,resolve:g.bind(null,E),reject:l},t),path:b.path}})}function XO(t,e,n,s,i,r){const o=Object.assign({},Rf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Ot(c?[]:t.value);c||n.set(t,h,[]);const d=s;let g,_=un;const y=[],b={added:({newIndex:v,doc:N})=>{y.splice(v,0,Object.create(null));const M=y[v],[H,B]=Su(N.data(l),void 0,M,o);n.add(wt(f),v,H),Au(o,f,`${h}.${v}`,M,B,n,0,s.bind(null,N),i)},modified:({oldIndex:v,newIndex:N,doc:M})=>{const H=wt(f),B=y[v],A=H[v],[Y,ee]=Su(M.data(l),A,B,o);y.splice(N,0,B),n.remove(H,v),n.add(H,N,Y),Au(o,f,`${h}.${N}`,B,ee,n,0,s,i)},removed:({oldIndex:v})=>{const N=wt(f);n.remove(N,v),Aa(y.splice(v,1)[0])}};function E(v){const N=v.docChanges(a);if(!g&&N.length){g=!0;let M=0;const H=N.length,B=Object.create(null);for(let A=0;A<H;A++)B[N[A].doc.id]=!0;s=A=>{A&&A.id in B&&++M>=H&&(c&&(n.set(t,h,wt(f)),f=t),d(wt(f)),s=un)}}N.forEach(M=>{b[M.type](M)}),N.length||(c&&(n.set(t,h,wt(f)),f=t),s(wt(f)))}return u?_A(e).then(E).catch(i):_=tf(e,E,i),v=>{if(_(),v){const N=typeof v=="function"?v():[];n.set(t,h,N)}y.forEach(Aa)}}function JO(t,e,n,s,i,r){const o=Object.assign({},Rf,r),a="value",l=Object.create(null);s=xk(s,()=>sf(t,a));let c=un;function u(h){h.exists()?Ru(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?_v(e).then(u).catch(i):c=tf(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Aa(l)}}function Yw(t,e){let n=un;const s=Object.assign({},Rf,e),i=wt(t),r=s.target||Ot();Pk()&&(s.once=!0);const o=zO(i,s.ssrKey,r.value,xv());r.value=o;let l=!(Pv(i)?(o||[]).length>0:o!==void 0);const c=Ot(!1),u=Ot(),h=Xg(),f=Bu();let d=un;function g(){let b=wt(t);const E=new Promise((v,N)=>{if(n(s.reset),!b)return n=un,v(null);c.value=l,l=!0,b.converter||(b=b.withConverter(s.converter)),n=(rf(b)?JO:XO)(r,b,ZO,v,N,s)}).catch(v=>(h.value===E&&(u.value=v),Promise.reject(v))).finally(()=>{h.value===E&&(c.value=!1)});h.value=E}let _=un;Pe(t)&&(_=Zs(t,g)),g(),i&&(d=GO(h.value,i,s.ssrKey)),jr()&&_m(()=>h.value),f&&Lg(y);function y(b=s.reset){_(),d(),n(b)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const ZO={set:(t,e,n)=>Sk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Rx(t,e){return Yw(t,{target:Ot([]),...e})}function e1(t,e){return Yw(t,e)}const t1=Jm({apiKey:"AIzaSyBc2RPaqv4pFK7BnkU9ipHiDHPVU_armEE",authDomain:"psycat-35173.firebaseapp.com",projectId:"psycat-35173",storageBucket:"psycat-35173.appspot.com",messagingSenderId:"109673373606",appId:"1:109673373606:web:596fd11a48706cd9563967",measurementId:"G-VSVXVBRR7H"}),Ji=rA(t1),n1=Qi(Ji,"counter","counter");e1(n1);const s1=VT("useState",()=>{const t=Ot(""),e=Ot("");function n(){const u={code:window.localStorage.getItem("code"),uid:window.localStorage.getItem("uid"),gilbert_test_passed:window.localStorage.getItem("gilbert_test_passed"),stroop_test_passed:window.localStorage.getItem("stroop_test_passed"),ishihara_test_passed:window.localStorage.getItem("ishihara_test_passed")};u.code&&u.uid?(t.value=u.code,e.value=u.uid,u.gilbert_test_passed&&(i.value=u.gilbert_test_passed),u.stroop_test_passed&&(r.value=u.stroop_test_passed),u.ishihara_test_passed&&(o.value=u.ishihara_test_passed)):s()}async function s(){const u=jT();let h={datetime:new Date,code:u.code,uid:u.uid};t.value=u.code,e.value=u.uid,yA(Qi(Ji,"users",`${t.value}:${e.value}`),h).then(()=>{window.localStorage.setItem("code",u.code),window.localStorage.setItem("uid",u.uid),window.localStorage.setItem("gilbert_test_passed","no"),window.localStorage.setItem("stroop_test_passed","no"),window.localStorage.setItem("ishihara_test_passed","no"),i.value="no",r.value="no",o.value="no"})}const i=Ot("no"),r=Ot("no"),o=Ot("no");function a(u){ec(Qi(Ji,"users",`${t.value}:${e.value}`),{gilbert_test_passed:"yes",gilbert_test_results:u}).then(()=>{window.localStorage.setItem("gilbert_test_passed","yes"),i.value="yes"})}function l(u){ec(Qi(Ji,"users",`${t.value}:${e.value}`),{stroop_test_passed:"yes",stroop_test_results:u}).then(()=>{window.localStorage.setItem("stroop_test_passed","yes"),r.value="yes"})}function c(u){ec(Qi(Ji,"users",`${t.value}:${e.value}`),{ishihara_test_passed:"yes",ishihara_test_results:u}).then(()=>{window.localStorage.setItem("ishihara_test_passed","yes"),o.value="yes"})}return{code:t,uid:e,init:n,createUser:s,gilbert_test_passed:i,saveGilbertTest:a,stroop_test_passed:r,saveStroopTest:l,ishihara_test_passed:o,saveIshiharaTest:c}}),i1={__name:"MainLoader",setup(t){return s1().init(),(n,s)=>{const i=M0("router-view");return Vr(),Ba(i)}}},r1={__name:"App",setup(t){return(e,n)=>(Vr(),Ba(m0,null,{fallback:wc(()=>[xm(" Загрузка... ")]),default:wc(()=>[st(i1)]),_:1}))}};const o1="modulepreload",a1=function(t){return"/psycat/"+t},hg={},Un=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=a1(r),r in hg)return;hg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":o1,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function l1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function dc(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const dr=()=>{},sn=Array.isArray,c1=/\/$/,u1=t=>t.replace(c1,"");function pc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=p1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function h1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function f1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ei(e.matched[s],n.matched[i])&&Xw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!d1(t[n],e[n]))return!1;return!0}function d1(t,e){return sn(t)?dg(t,e):sn(e)?dg(e,t):t===e}function dg(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function p1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function g1(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u1(t)}const m1=/^[^#]+#/;function _1(t,e){return t.replace(m1,"#")+e}function y1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Al=()=>({left:window.pageXOffset,top:window.pageYOffset});function v1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=y1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pg(t,e){return(history.state?history.state.position-e:-1)+t}const ku=new Map;function w1(t,e){ku.set(t,e)}function E1(t){const e=ku.get(t);return ku.delete(t),e}let T1=()=>location.protocol+"//"+location.host;function Jw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),fg(l,"")}return fg(n,t)+s+i}function b1(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=Jw(t,location),g=n.value,_=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}y=_?f.position-_.position:0}else s(d);i.forEach(b=>{b(n.value,g,{delta:y,type:Br.pop,direction:y?y>0?pr.forward:pr.back:pr.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ve({},f.state,{scroll:Al()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function gg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Al():null}}function I1(t){const{history:e,location:n}=window,s={value:Jw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:T1()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=ve({},e.state,gg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ve({},i.value,e.state,{forward:l,scroll:Al()});r(u.current,u,!0);const h=ve({},gg(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function C1(t){t=g1(t);const e=I1(t),n=b1(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ve({location:"",base:t,go:s,createHref:_1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function S1(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),C1(t)}function R1(t){return typeof t=="string"||t&&typeof t=="object"}function Zw(t){return typeof t=="string"||typeof t=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eE=Symbol("");var mg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mg||(mg={}));function Ti(t,e){return ve(new Error,{type:t,[eE]:!0},e)}function Tn(t,e){return t instanceof Error&&eE in t&&(e==null||!!(t.type&e))}const _g="[^/]+?",A1={sensitive:!1,strict:!1,start:!0,end:!0},k1=/[.+*?^${}()[\]/\\]/g;function N1(t,e){const n=ve({},A1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(k1,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:y,regexp:b}=f;r.push({name:g,repeatable:_,optional:y});const E=b||_g;if(E!==_g){d+=10;try{new RegExp(`(${E})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+N.message)}}let v=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(v=y&&c.length<2?`(?:/${v})`:"/"+v),y&&(v+="?"),i+=v,d+=20,y&&(d+=-8),_&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:y}=d,b=g in c?c[g]:"";if(sn(b)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=sn(b)?b.join("/"):b;if(!E)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function D1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function O1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=D1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(yg(s))return 1;if(yg(i))return-1}return i.length-s.length}function yg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const x1={type:0,value:""},P1=/[a-zA-Z0-9_]/;function M1(t){if(!t)return[[]];if(t==="/")return[[x1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:P1.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function L1(t,e,n){const s=N1(M1(t.path),n),i=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function F1(t,e){const n=[],s=new Map;e=Eg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,g=U1(u);g.aliasOf=f&&f.record;const _=Eg(e,u),y=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of v)y.push(ve({},g,{components:f?f.record.components:g.components,path:N,aliasOf:f?f.record:g}))}let b,E;for(const v of y){const{path:N}=v;if(h&&N[0]!=="/"){const M=h.record.path,H=M[M.length-1]==="/"?"":"/";v.path=h.record.path+(N&&H+N)}if(b=L1(v,h,_),f?f.alias.push(b):(E=E||b,E!==b&&E.alias.push(b),d&&u.name&&!wg(b)&&o(u.name)),g.children){const M=g.children;for(let H=0;H<M.length;H++)r(M[H],b,f&&f.children[H])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return E?()=>{o(E)}:dr}function o(u){if(Zw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&O1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!tE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wg(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ti(1,{location:u});_=f.record.name,d=ve(vg(h.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&vg(u.params,f.keys.map(E=>E.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(E=>E.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!f)throw Ti(1,{location:u,currentLocation:h});_=f.record.name,d=ve({},h.params,u.params),g=f.stringify(d)}const y=[];let b=f;for(;b;)y.unshift(b.record),b=b.parent;return{name:_,path:g,params:d,matched:y,meta:$1(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function vg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function U1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:B1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function B1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $1(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Eg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function tE(t,e){return e.children.some(n=>n===t||tE(t,n))}const nE=/#/g,V1=/&/g,j1=/\//g,H1=/=/g,q1=/\?/g,sE=/\+/g,K1=/%5B/g,z1=/%5D/g,iE=/%5E/g,W1=/%60/g,rE=/%7B/g,G1=/%7C/g,oE=/%7D/g,Q1=/%20/g;function Af(t){return encodeURI(""+t).replace(G1,"|").replace(K1,"[").replace(z1,"]")}function Y1(t){return Af(t).replace(rE,"{").replace(oE,"}").replace(iE,"^")}function Nu(t){return Af(t).replace(sE,"%2B").replace(Q1,"+").replace(nE,"%23").replace(V1,"%26").replace(W1,"`").replace(rE,"{").replace(oE,"}").replace(iE,"^")}function X1(t){return Nu(t).replace(H1,"%3D")}function J1(t){return Af(t).replace(nE,"%23").replace(q1,"%3F")}function Z1(t){return t==null?"":J1(t).replace(j1,"%2F")}function ka(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ex(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(sE," "),o=r.indexOf("="),a=ka(o<0?r:r.slice(0,o)),l=o<0?null:ka(r.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tg(t){let e="";for(let n in t){const s=t[n];if(n=X1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&Nu(r)):[s&&Nu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tx(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const nx=Symbol(""),bg=Symbol(""),kl=Symbol(""),aE=Symbol(""),Du=Symbol("");function qi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ti(4,{from:n,to:e})):h instanceof Error?a(h):R1(h)?a(Ti(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function gc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(sx(a)){const c=(a.__vccOpts||a)[e];c&&i.push(jn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=l1(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&jn(f,n,s,r,o)()}))}}return i}function sx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ig(t){const e=Mt(kl),n=Mt(aE),s=xt(()=>e.resolve(wt(t.to))),i=xt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ei.bind(null,u));if(f>-1)return f;const d=Cg(l[c-2]);return c>1&&Cg(u)===d&&h[h.length-1].path!==d?h.findIndex(Ei.bind(null,l[c-2])):f}),r=xt(()=>i.value>-1&&ax(n.params,s.value.params)),o=xt(()=>i.value>-1&&i.value===n.matched.length-1&&Xw(n.params,s.value.params));function a(l={}){return ox(l)?e[wt(t.replace)?"replace":"push"](wt(t.to)).catch(dr):Promise.resolve()}return{route:s,href:xt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ix=fm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ig,setup(t,{slots:e}){const n=Si(Ig(t)),{options:s}=Mt(kl),i=xt(()=>({[Sg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Lm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),rx=ix;function ox(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ax(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Cg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sg=(t,e,n)=>t??e??n,lx=fm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Du),i=xt(()=>t.route||s.value),r=Mt(bg,0),o=xt(()=>{let c=wt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=xt(()=>i.value.matched[o.value]);Mo(bg,xt(()=>o.value+1)),Mo(nx,a),Mo(Du,i);const l=Ot();return Zs(()=>[l.value,a.value,t.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ei(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Rg(n.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Lm(f,ve({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Rg(n.default,{Component:y,route:c})||y}}});function Rg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cx=lx;function ux(t){const e=F1(t.routes,t),n=t.parseQuery||ex,s=t.stringifyQuery||Tg,i=t.history,r=qi(),o=qi(),a=qi(),l=Xg(Bn);let c=Bn;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,I=>""+I),h=dc.bind(null,Z1),f=dc.bind(null,ka);function d(I,U){let L,q;return Zw(I)?(L=e.getRecordMatcher(I),q=U):q=I,e.addRoute(q,L)}function g(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function _(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function b(I,U){if(U=ve({},U||l.value),typeof I=="string"){const p=pc(n,I,U.path),m=e.resolve({path:p.path},U),w=i.createHref(p.fullPath);return ve(p,m,{params:f(m.params),hash:ka(p.hash),redirectedFrom:void 0,href:w})}let L;if("path"in I)L=ve({},I,{path:pc(n,I.path,U.path).path});else{const p=ve({},I.params);for(const m in p)p[m]==null&&delete p[m];L=ve({},I,{params:h(I.params)}),U.params=h(U.params)}const q=e.resolve(L,U),fe=I.hash||"";q.params=u(f(q.params));const xe=h1(s,ve({},I,{hash:Y1(fe),path:q.path})),ie=i.createHref(xe);return ve({fullPath:xe,hash:fe,query:s===Tg?tx(I.query):I.query||{}},q,{redirectedFrom:void 0,href:ie})}function E(I){return typeof I=="string"?pc(n,I,l.value.path):ve({},I)}function v(I,U){if(c!==I)return Ti(8,{from:U,to:I})}function N(I){return B(I)}function M(I){return N(ve(E(I),{replace:!0}))}function H(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let q=typeof L=="function"?L(I):L;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),ve({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function B(I,U){const L=c=b(I),q=l.value,fe=I.state,xe=I.force,ie=I.replace===!0,p=H(L);if(p)return B(ve(E(p),{state:typeof p=="object"?ve({},fe,p.state):fe,force:xe,replace:ie}),U||L);const m=L;m.redirectedFrom=U;let w;return!xe&&f1(s,q,L)&&(w=Ti(16,{to:m,from:q}),rs(q,q,!0,!1)),(w?Promise.resolve(w):Y(m,q)).catch(T=>Tn(T)?Tn(T,2)?T:zt(T):be(T,m,q)).then(T=>{if(T){if(Tn(T,2))return B(ve({replace:ie},E(T.to),{state:typeof T.to=="object"?ve({},fe,T.to.state):fe,force:xe}),U||m)}else T=ge(m,q,!0,ie,fe);return ee(m,q,T),T})}function A(I,U){const L=v(I,U);return L?Promise.reject(L):Promise.resolve()}function Y(I,U){let L;const[q,fe,xe]=hx(I,U);L=gc(q.reverse(),"beforeRouteLeave",I,U);for(const p of q)p.leaveGuards.forEach(m=>{L.push(jn(m,I,U))});const ie=A.bind(null,I,U);return L.push(ie),js(L).then(()=>{L=[];for(const p of r.list())L.push(jn(p,I,U));return L.push(ie),js(L)}).then(()=>{L=gc(fe,"beforeRouteUpdate",I,U);for(const p of fe)p.updateGuards.forEach(m=>{L.push(jn(m,I,U))});return L.push(ie),js(L)}).then(()=>{L=[];for(const p of I.matched)if(p.beforeEnter&&!U.matched.includes(p))if(sn(p.beforeEnter))for(const m of p.beforeEnter)L.push(jn(m,I,U));else L.push(jn(p.beforeEnter,I,U));return L.push(ie),js(L)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),L=gc(xe,"beforeRouteEnter",I,U),L.push(ie),js(L))).then(()=>{L=[];for(const p of o.list())L.push(jn(p,I,U));return L.push(ie),js(L)}).catch(p=>Tn(p,8)?p:Promise.reject(p))}function ee(I,U,L){for(const q of a.list())q(I,U,L)}function ge(I,U,L,q,fe){const xe=v(I,U);if(xe)return xe;const ie=U===Bn,p=Ks?history.state:{};L&&(q||ie?i.replace(I.fullPath,ve({scroll:ie&&p&&p.scroll},fe)):i.push(I.fullPath,fe)),l.value=I,rs(I,U,L,ie),zt()}let Le;function ot(){Le||(Le=i.listen((I,U,L)=>{if(!po.listening)return;const q=b(I),fe=H(q);if(fe){B(ve(fe,{replace:!0}),q).catch(dr);return}c=q;const xe=l.value;Ks&&w1(pg(xe.fullPath,L.delta),Al()),Y(q,xe).catch(ie=>Tn(ie,12)?ie:Tn(ie,2)?(B(ie.to,q).then(p=>{Tn(p,20)&&!L.delta&&L.type===Br.pop&&i.go(-1,!1)}).catch(dr),Promise.reject()):(L.delta&&i.go(-L.delta,!1),be(ie,q,xe))).then(ie=>{ie=ie||ge(q,xe,!1),ie&&(L.delta&&!Tn(ie,8)?i.go(-L.delta,!1):L.type===Br.pop&&Tn(ie,20)&&i.go(-1,!1)),ee(q,xe,ie)}).catch(dr)}))}let qe=qi(),Ge=qi(),Be;function be(I,U,L){zt(I);const q=Ge.list();return q.length?q.forEach(fe=>fe(I,U,L)):console.error(I),Promise.reject(I)}function we(){return Be&&l.value!==Bn?Promise.resolve():new Promise((I,U)=>{qe.add([I,U])})}function zt(I){return Be||(Be=!I,ot(),qe.list().forEach(([U,L])=>I?L(I):U()),qe.reset()),I}function rs(I,U,L,q){const{scrollBehavior:fe}=t;if(!Ks||!fe)return Promise.resolve();const xe=!L&&E1(pg(I.fullPath,0))||(q||!L)&&history.state&&history.state.scroll||null;return Gu().then(()=>fe(I,U,xe)).then(ie=>ie&&v1(ie)).catch(ie=>be(ie,I,U))}const Wt=I=>i.go(I);let bt;const Us=new Set,po={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:y,getRoutes:_,resolve:b,options:t,push:N,replace:M,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:we,install(I){const U=this;I.component("RouterLink",rx),I.component("RouterView",cx),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(l)}),Ks&&!bt&&l.value===Bn&&(bt=!0,N(i.location).catch(fe=>{}));const L={};for(const fe in Bn)L[fe]=xt(()=>l.value[fe]);I.provide(kl,U),I.provide(aE,Si(L)),I.provide(Du,l);const q=I.unmount;Us.add(I),I.unmount=function(){Us.delete(I),Us.size<1&&(c=Bn,Le&&Le(),Le=null,l.value=Bn,bt=!1,Be=!1),q()}}};return po}function js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hx(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ei(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ei(c,l))||i.push(l))}return[n,s,i]}function Ax(){return Mt(kl)}const fx=[{path:"/",name:"home",component:()=>Un(()=>import("./HomePage-cb897847.js"),["assets/HomePage-cb897847.js","assets/TextButton-ecece62e.js","assets/fullscreen-134f38df.js"])},{path:"/pallete",name:"pallete",component:()=>Un(()=>import("./PalletePage-0ef279b1.js"),["assets/PalletePage-0ef279b1.js","assets/color-9d40ee1b.js"])},{path:"/ishihara",name:"ishihara",component:()=>Un(()=>import("./IshiharaPage-ee19fe85.js"),["assets/IshiharaPage-ee19fe85.js","assets/TextButton-ecece62e.js"])},{path:"/stroop",name:"stroop",component:()=>Un(()=>import("./StroopPage-cfb9e082.js"),["assets/StroopPage-cfb9e082.js","assets/TextButton-ecece62e.js"])},{path:"/gilbert",name:"gilbert",component:()=>Un(()=>import("./GilbertPage-e492f765.js"),["assets/GilbertPage-e492f765.js","assets/fullscreen-134f38df.js","assets/color-9d40ee1b.js","assets/SunFigure.vue_vue_type_script_setup_true_lang-03675e50.js"])},{path:"/picto",name:"picto",component:()=>Un(()=>import("./PictoPage-8ce56578.js"),["assets/PictoPage-8ce56578.js","assets/SunFigure.vue_vue_type_script_setup_true_lang-03675e50.js"])},{path:"/thanks",name:"thanks",component:()=>Un(()=>import("./ThanksPage-d70af7f0.js"),[])},{path:"/statistics",name:"statistics",component:()=>Un(()=>import("./StatisticsPage-3294927c.js"),[])}],dx=ux({history:S1(),routes:fx}),kf=xT(r1),px=LT();kf.use(px);kf.use(dx);kf.mount("#app");export{Ix as A,Rx as B,Sx as C,Ji as D,$t as F,Ax as a,Om as b,wx as c,st as d,wt as e,xm as f,fm as g,Ot as h,Si as i,xt as j,M0 as k,mx as l,Ex as m,xu as n,Vr as o,vx as p,Ba as q,yx as r,_x as s,gx as t,s1 as u,bx as v,wc as w,Pu as x,Tx as y,HT as z};
