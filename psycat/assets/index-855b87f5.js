(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Su(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Au(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=$e(s)?Jw(s):Au(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if($e(t))return t;if(De(t))return t}}const Qw=/;(?![^(]*\))/g,Yw=/:([^]+)/,Xw=/\/\*.*?\*\//gs;function Jw(t){const e={};return t.replace(Xw,"").split(Qw).forEach(n=>{if(n){const s=n.split(Yw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ru(t){let e="";if($e(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=Ru(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eE=Su(Zw);function Eg(t){return!!t||t===""}const zx=t=>$e(t)?t:t==null?"":Y(t)||De(t)&&(t.toString===Cg||!Z(t.toString))?JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>e&&e.__v_isRef?Tg(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:bg(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Y(e)&&!Ig(e)?String(e):e,Se={},Ks=[],Jt=()=>{},tE=()=>!1,nE=/^on[^a-z]/,Ia=t=>nE.test(t),ku=t=>t.startsWith("onUpdate:"),pt=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sE=Object.prototype.hasOwnProperty,fe=(t,e)=>sE.call(t,e),Y=Array.isArray,zs=t=>Sa(t)==="[object Map]",bg=t=>Sa(t)==="[object Set]",Z=t=>typeof t=="function",$e=t=>typeof t=="string",Ou=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Du=t=>De(t)&&Z(t.then)&&Z(t.catch),Cg=Object.prototype.toString,Sa=t=>Cg.call(t),iE=t=>Sa(t).slice(8,-1),Ig=t=>Sa(t)==="[object Object]",xu=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,No=Su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rE=/-(\w)/g,dn=Aa(t=>t.replace(rE,(e,n)=>n?n.toUpperCase():"")),oE=/\B([A-Z])/g,vi=Aa(t=>t.replace(oE,"-$1").toLowerCase()),Ra=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cl=Aa(t=>t?`on${Ra(t)}`:""),ur=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},aE=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let If;const lE=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class cE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function uE(t,e=Nt){e&&e.active&&e.effects.push(t)}function Sg(){return Nt}function hE(t){Nt&&Nt.cleanups.push(t)}const Pu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ag=t=>(t.w&zn)>0,Rg=t=>(t.n&zn)>0,fE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zn},dE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ag(i)&&!Rg(i)?i.delete(t):e[n++]=i,i.w&=~zn,i.n&=~zn}e.length=n}},uc=new WeakMap;let $i=0,zn=1;const hc=30;let Gt;const ys=Symbol(""),fc=Symbol("");class Mu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uE(this,s)}run(){if(!this.active)return this.fn();let e=Gt,n=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,Vn=!0,zn=1<<++$i,$i<=hc?fE(this):Sf(this),this.fn()}finally{$i<=hc&&dE(this),zn=1<<--$i,Gt=this.parent,Vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Sf(this),this.onStop&&this.onStop(),this.active=!1)}}function Sf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vn=!0;const kg=[];function wi(){kg.push(Vn),Vn=!1}function Ei(){const t=kg.pop();Vn=t===void 0?!0:t}function St(t,e,n){if(Vn&&Gt){let s=uc.get(t);s||uc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Pu()),Ng(i)}}function Ng(t,e){let n=!1;$i<=hc?Rg(t)||(t.n|=zn,n=!Ag(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function An(t,e,n,s,i,r){const o=uc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?xu(n)&&a.push(o.get("length")):(a.push(o.get(ys)),zs(t)&&a.push(o.get(fc)));break;case"delete":Y(t)||(a.push(o.get(ys)),zs(t)&&a.push(o.get(fc)));break;case"set":zs(t)&&a.push(o.get(ys));break}if(a.length===1)a[0]&&dc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);dc(Pu(l))}}function dc(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&Af(s);for(const s of n)s.computed||Af(s)}function Af(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const pE=Su("__proto__,__v_isRef,__isVue"),Og=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ou)),gE=Lu(),mE=Lu(!1,!0),yE=Lu(!0),Rf=_E();function _E(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wi();const s=pe(this)[e].apply(this,n);return Ei(),s}}),t}function vE(t){const e=pe(this);return St(e,"has",t),e.hasOwnProperty(t)}function Lu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ME:Lg:e?Mg:Pg).get(s))return s;const o=Y(s);if(!t){if(o&&fe(Rf,i))return Reflect.get(Rf,i,r);if(i==="hasOwnProperty")return vE}const a=Reflect.get(s,i,r);return(Ou(i)?Og.has(i):pE(i))||(t||St(s,"get",i),e)?a:Ze(a)?o&&xu(i)?a:a.value:De(a)?t?Fg(a):Mr(a):a}}const wE=Dg(),EE=Dg(!0);function Dg(t=!1){return function(n,s,i,r){let o=n[s];if(ii(o)&&Ze(o)&&!Ze(i))return!1;if(!t&&(!Vo(i)&&!ii(i)&&(o=pe(o),i=pe(i)),!Y(n)&&Ze(o)&&!Ze(i)))return o.value=i,!0;const a=Y(n)&&xu(s)?Number(s)<n.length:fe(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?ur(i,o)&&An(n,"set",s,i):An(n,"add",s,i)),l}}function TE(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&An(t,"delete",e,void 0),s}function bE(t,e){const n=Reflect.has(t,e);return(!Ou(e)||!Og.has(e))&&St(t,"has",e),n}function CE(t){return St(t,"iterate",Y(t)?"length":ys),Reflect.ownKeys(t)}const xg={get:gE,set:wE,deleteProperty:TE,has:bE,ownKeys:CE},IE={get:yE,set(t,e){return!0},deleteProperty(t,e){return!0}},SE=pt({},xg,{get:mE,set:EE}),Fu=t=>t,ka=t=>Reflect.getPrototypeOf(t);function uo(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=ka(i),a=s?Fu:n?Vu:hr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ho(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function fo(t,e=!1){return t=t.__v_raw,!e&&St(pe(t),"iterate",ys),Reflect.get(t,"size",t)}function kf(t){t=pe(t);const e=pe(this);return ka(e).has.call(e,t)||(e.add(t),An(e,"add",t,t)),this}function Nf(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=ka(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ur(e,o)&&An(n,"set",t,e):An(n,"add",t,e),this}function Of(t){const e=pe(this),{has:n,get:s}=ka(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&An(e,"delete",t,void 0),r}function Df(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&An(t,"clear",void 0,void 0),n}function po(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?Fu:t?Vu:hr;return!t&&St(a,"iterate",ys),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function go(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=zs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Fu:e?Vu:hr;return!e&&St(r,"iterate",l?fc:ys),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Mn(t){return function(...e){return t==="delete"?!1:this}}function AE(){const t={get(r){return uo(this,r)},get size(){return fo(this)},has:ho,add:kf,set:Nf,delete:Of,clear:Df,forEach:po(!1,!1)},e={get(r){return uo(this,r,!1,!0)},get size(){return fo(this)},has:ho,add:kf,set:Nf,delete:Of,clear:Df,forEach:po(!1,!0)},n={get(r){return uo(this,r,!0)},get size(){return fo(this,!0)},has(r){return ho.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:po(!0,!1)},s={get(r){return uo(this,r,!0,!0)},get size(){return fo(this,!0)},has(r){return ho.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=go(r,!1,!1),n[r]=go(r,!0,!1),e[r]=go(r,!1,!0),s[r]=go(r,!0,!0)}),[t,n,e,s]}const[RE,kE,NE,OE]=AE();function Uu(t,e){const n=e?t?OE:NE:t?kE:RE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const DE={get:Uu(!1,!1)},xE={get:Uu(!1,!0)},PE={get:Uu(!0,!1)},Pg=new WeakMap,Mg=new WeakMap,Lg=new WeakMap,ME=new WeakMap;function LE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FE(t){return t.__v_skip||!Object.isExtensible(t)?0:LE(iE(t))}function Mr(t){return ii(t)?t:Bu(t,!1,xg,DE,Pg)}function UE(t){return Bu(t,!1,SE,xE,Mg)}function Fg(t){return Bu(t,!0,IE,PE,Lg)}function Bu(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=FE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Gs(t){return ii(t)?Gs(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function Ug(t){return Gs(t)||ii(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Bg(t){return Bo(t,"__v_skip",!0),t}const hr=t=>De(t)?Mr(t):t,Vu=t=>De(t)?Fg(t):t;function Vg(t){Vn&&Gt&&(t=pe(t),Ng(t.dep||(t.dep=Pu())))}function $g(t,e){t=pe(t);const n=t.dep;n&&dc(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function Qs(t){return Hg(t,!1)}function jg(t){return Hg(t,!0)}function Hg(t,e){return Ze(t)?t:new BE(t,e)}class BE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:hr(e)}get value(){return Vg(this),this._value}set value(e){const n=this.__v_isShallow||Vo(e)||ii(e);e=n?e:pe(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hr(e),$g(this))}}function yt(t){return Ze(t)?t.value:t}const VE={get:(t,e,n)=>yt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Wg(t){return Gs(t)?t:new Proxy(t,VE)}var qg;class $E{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qg]=!1,this._dirty=!0,this.effect=new Mu(e,()=>{this._dirty||(this._dirty=!0,$g(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return Vg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qg="__v_isReadonly";function jE(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=Jt):(s=t.get,i=t.set),new $E(s,i,r||!i,n)}function $n(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Lr(r,e,n)}return i}function Vt(t,e,n,s){if(Z(t)){const r=$n(t,e,n,s);return r&&Du(r)&&r.catch(o=>{Lr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Vt(t[r],e,n,s));return i}function Lr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){$n(l,null,10,[t,o,a]);return}}HE(t,n,i,s)}function HE(t,e,n,s=!0){console.error(t)}let fr=!1,pc=!1;const ct=[];let on=0;const Ys=[];let Tn=null,cs=0;const Kg=Promise.resolve();let $u=null;function zg(t){const e=$u||Kg;return t?e.then(this?t.bind(this):t):e}function WE(t){let e=on+1,n=ct.length;for(;e<n;){const s=e+n>>>1;dr(ct[s])<t?e=s+1:n=s}return e}function ju(t){(!ct.length||!ct.includes(t,fr&&t.allowRecurse?on+1:on))&&(t.id==null?ct.push(t):ct.splice(WE(t.id),0,t),Gg())}function Gg(){!fr&&!pc&&(pc=!0,$u=Kg.then(Xg))}function qE(t){const e=ct.indexOf(t);e>on&&ct.splice(e,1)}function Qg(t){Y(t)?Ys.push(...t):(!Tn||!Tn.includes(t,t.allowRecurse?cs+1:cs))&&Ys.push(t),Gg()}function xf(t,e=fr?on+1:0){for(;e<ct.length;e++){const n=ct[e];n&&n.pre&&(ct.splice(e,1),e--,n())}}function Yg(t){if(Ys.length){const e=[...new Set(Ys)];if(Ys.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((n,s)=>dr(n)-dr(s)),cs=0;cs<Tn.length;cs++)Tn[cs]();Tn=null,cs=0}}const dr=t=>t.id==null?1/0:t.id,KE=(t,e)=>{const n=dr(t)-dr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xg(t){pc=!1,fr=!0,ct.sort(KE);const e=Jt;try{for(on=0;on<ct.length;on++){const n=ct[on];n&&n.active!==!1&&$n(n,null,14)}}finally{on=0,ct.length=0,Yg(),fr=!1,$u=null,(ct.length||Ys.length)&&Xg()}}function zE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(i=n.map(d=>$e(d)?d.trim():d)),h&&(i=n.map(cc))}let a,l=s[a=Cl(e)]||s[a=Cl(dn(e))];!l&&r&&(l=s[a=Cl(vi(e))]),l&&Vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(c,t,6,i)}}function Jg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Jg(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(De(t)&&s.set(t,null),null):(Y(r)?r.forEach(l=>o[l]=null):pt(o,r),De(t)&&s.set(t,o),o)}function Na(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,vi(e))||fe(t,e))}let et=null,Zg=null;function $o(t){const e=et;return et=t,Zg=t&&t.type.__scopeId||null,e}function gc(t,e=et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wf(-1);const r=$o(e);let o;try{o=t(...i)}finally{$o(r),s._d&&Wf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Il(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:y}=t;let _,T;const E=$o(t);try{if(n.shapeFlag&4){const k=i||s;_=zt(u.call(k,k,h,r,d,f,g)),T=l}else{const k=e;_=zt(k.length>1?k(r,{attrs:l,slots:a,emit:c}):k(r,null)),T=e.props?l:QE(l)}}catch(k){Xi.length=0,Lr(k,t,1),_=tt(It)}let v=_;if(T&&y!==!1){const k=Object.keys(T),{shapeFlag:U}=v;k.length&&U&7&&(o&&k.some(ku)&&(T=YE(T,o)),v=Gn(v,T))}return n.dirs&&(v=Gn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),_=v,$o(E),_}function GE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(gr(s)){if(s.type!==It||s.children==="v-if"){if(e)return;e=s}}else return}return e}const QE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},YE=(t,e)=>{const n={};for(const s in t)(!ku(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function XE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Pf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Na(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pf(s,o,c):!0:!!o;return!1}function Pf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Na(n,r))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const JE=t=>t.__isSuspense,ZE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?tT(e,n,s,i,r,o,a,l,c):nT(t,e,n,s,i,o,a,l,c)},hydrate:sT,create:Wu,normalize:iT},eT=ZE;function pr(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function tT(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Wu(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(pr(t,"onPending"),pr(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Xs(f,t.ssFallback)):f.resolve()}function nT(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:_,isHydrating:T}=h;if(y)h.pendingBranch=f,an(f,y)?(l(y,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():_&&(l(g,d,n,s,i,null,r,o,a),Xs(h,d))):(h.pendingId++,T?(h.isHydrating=!1,h.activeBranch=y):c(y,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),_?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(g,d,n,s,i,null,r,o,a),Xs(h,d))):g&&an(f,g)?(l(g,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(g&&an(f,g))l(g,f,n,s,i,h,r,o,a),Xs(h,f);else if(pr(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:E,pendingId:v}=h;E>0?setTimeout(()=>{h.pendingId===v&&h.fallback(d)},E):E===0&&h.fallback(d)}}function Wu(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:g,o:{parentNode:y,remove:_}}=c,T=t.props?aE(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:k,activeBranch:U,pendingBranch:z,pendingId:te,effects:F,parentComponent:ae,container:re}=E;if(E.isHydrating)E.isHydrating=!1;else if(!v){const wt=U&&z.transition&&z.transition.mode==="out-in";wt&&(U.transition.afterLeave=()=>{te===E.pendingId&&f(z,re,Rt,0)});let{anchor:Rt}=E;U&&(Rt=g(U),d(U,ae,E,!0)),wt||f(z,re,Rt,0)}Xs(E,z),E.pendingBranch=null,E.isInFallback=!1;let Ce=E.parent,je=!1;for(;Ce;){if(Ce.pendingBranch){Ce.effects.push(...F),je=!0;break}Ce=Ce.parent}je||Qg(F),E.effects=[],pr(k,"onResolve")},fallback(v){if(!E.pendingBranch)return;const{vnode:k,activeBranch:U,parentComponent:z,container:te,isSVG:F}=E;pr(k,"onFallback");const ae=g(U),re=()=>{E.isInFallback&&(h(null,v,te,ae,z,null,F,a,l),Xs(E,v))},Ce=v.transition&&v.transition.mode==="out-in";Ce&&(U.transition.afterLeave=re),E.isInFallback=!0,d(U,z,null,!0),Ce||re()},move(v,k,U){E.activeBranch&&f(E.activeBranch,v,k,U),E.container=v},next(){return E.activeBranch&&g(E.activeBranch)},registerDep(v,k){const U=!!E.pendingBranch;U&&E.deps++;const z=v.vnode.el;v.asyncDep.catch(te=>{Lr(te,v,0)}).then(te=>{if(v.isUnmounted||E.isUnmounted||E.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:F}=v;bc(v,te,!1),z&&(F.el=z);const ae=!z&&v.subTree.el;k(v,F,y(z||v.subTree.el),z?null:g(v.subTree),E,o,l),ae&&_(ae),Hu(v,F.el),U&&--E.deps===0&&E.resolve()})},unmount(v,k){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,v,k),E.pendingBranch&&d(E.pendingBranch,n,v,k)}};return E}function sT(t,e,n,s,i,r,o,a,l){const c=e.suspense=Wu(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function iT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Mf(s?n.default:n),t.ssFallback=s?Mf(n.fallback):tt(It)}function Mf(t){let e;if(Z(t)){const n=ri&&t._c;n&&(t._d=!1,Fr()),t=t(),n&&(t._d=!0,e=Ut,wm())}return Y(t)&&(t=GE(t)),t=zt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function rT(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Qg(t)}function Xs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Hu(s,i))}function zi(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=Me||et;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const mo={};function Gi(t,e,n){return em(t,e,n)}function em(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=Sg()===(Me==null?void 0:Me.scope)?Me:null;let l,c=!1,u=!1;if(Ze(t)?(l=()=>t.value,c=Vo(t)):Gs(t)?(l=()=>t,s=!0):Y(t)?(u=!0,c=t.some(v=>Gs(v)||Vo(v)),l=()=>t.map(v=>{if(Ze(v))return v.value;if(Gs(v))return hs(v);if(Z(v))return $n(v,a,2)})):Z(t)?e?l=()=>$n(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[f])}:l=Jt,e&&s){const v=l;l=()=>hs(v())}let h,f=v=>{h=T.onStop=()=>{$n(v,a,4)}},d;if(mr)if(f=Jt,e?n&&Vt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const v=XT();d=v.__watcherHandles||(v.__watcherHandles=[])}else return Jt;let g=u?new Array(t.length).fill(mo):mo;const y=()=>{if(T.active)if(e){const v=T.run();(s||c||(u?v.some((k,U)=>ur(k,g[U])):ur(v,g)))&&(h&&h(),Vt(e,a,3,[v,g===mo?void 0:u&&g[0]===mo?[]:g,f]),g=v)}else T.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>Tt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>ju(y));const T=new Mu(l,_);e?n?y():g=T.run():i==="post"?Tt(T.run.bind(T),a&&a.suspense):T.run();const E=()=>{T.stop(),a&&a.scope&&Nu(a.scope.effects,T)};return d&&d.push(E),E}function oT(t,e,n){const s=this.proxy,i=$e(t)?t.includes(".")?tm(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Me;Qn(this);const a=em(i,r.bind(s),n);return o?Qn(o):jn(),a}function tm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function hs(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))hs(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)hs(t[n],e);else if(bg(t)||zs(t))t.forEach(n=>{hs(n,e)});else if(Ig(t))for(const n in t)hs(t[n],e);return t}function aT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return om(()=>{t.isMounted=!0}),am(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],lT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},setup(t,{slots:e}){const n=Ur(),s=aT();let i;return()=>{const r=e.default&&sm(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==It){o=y;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return Sl(o);const c=Lf(o);if(!c)return Sl(o);const u=mc(c,a,s,n);yc(c,u);const h=n.subTree,f=h&&Lf(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,d=!0)}if(f&&f.type!==It&&(!an(c,f)||d)){const y=mc(f,a,s,n);if(yc(f,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Sl(o);l==="in-out"&&c.type!==It&&(y.delayLeave=(_,T,E)=>{const v=nm(s,f);v[String(f.key)]=f,_._leaveCb=()=>{T(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},cT=lT;function nm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function mc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:T,onAppearCancelled:E}=e,v=String(t.key),k=nm(n,t),U=(F,ae)=>{F&&Vt(F,s,9,ae)},z=(F,ae)=>{const re=ae[1];U(F,ae),Y(F)?F.every(Ce=>Ce.length<=1)&&re():F.length<=1&&re()},te={mode:r,persisted:o,beforeEnter(F){let ae=a;if(!n.isMounted)if(i)ae=y||a;else return;F._leaveCb&&F._leaveCb(!0);const re=k[v];re&&an(t,re)&&re.el._leaveCb&&re.el._leaveCb(),U(ae,[F])},enter(F){let ae=l,re=c,Ce=u;if(!n.isMounted)if(i)ae=_||l,re=T||c,Ce=E||u;else return;let je=!1;const wt=F._enterCb=Rt=>{je||(je=!0,Rt?U(Ce,[F]):U(re,[F]),te.delayedLeave&&te.delayedLeave(),F._enterCb=void 0)};ae?z(ae,[F,wt]):wt()},leave(F,ae){const re=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ae();U(h,[F]);let Ce=!1;const je=F._leaveCb=wt=>{Ce||(Ce=!0,ae(),wt?U(g,[F]):U(d,[F]),F._leaveCb=void 0,k[re]===t&&delete k[re])};k[re]=t,f?z(f,[F,je]):je()},clone(F){return mc(F,e,n,s)}};return te}function Sl(t){if(Oa(t))return t=Gn(t),t.children=null,t}function Lf(t){return Oa(t)?t.children?t.children[0]:void 0:t}function yc(t,e){t.shapeFlag&6&&t.component?yc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&i++,s=s.concat(sm(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?Gn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function im(t){return Z(t)?{setup:t,name:t.name}:t}const Qi=t=>!!t.type.__asyncLoader,Oa=t=>t.type.__isKeepAlive;function uT(t,e){rm(t,"a",e)}function hT(t,e){rm(t,"da",e)}function rm(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Da(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Oa(i.parent.vnode)&&fT(s,e,n,i),i=i.parent}}function fT(t,e,n,s){const i=Da(e,t,s,!0);lm(()=>{Nu(s[e],i)},n)}function Da(t,e,n=Me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wi(),Qn(n);const a=Vt(e,n,t,o);return jn(),Ei(),a});return s?i.unshift(r):i.push(r),r}}const Dn=t=>(e,n=Me)=>(!mr||t==="sp")&&Da(t,(...s)=>e(...s),n),dT=Dn("bm"),om=Dn("m"),pT=Dn("bu"),gT=Dn("u"),am=Dn("bum"),lm=Dn("um"),cm=Dn("sp"),mT=Dn("rtg"),yT=Dn("rtc");function _T(t,e=Me){Da("ec",t,e)}function Gx(t,e){const n=et;if(n===null)return t;const s=La(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Se]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&hs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function is(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(wi(),Vt(l,n,8,[t.el,a,t,e]),Ei())}}const um="components";function vT(t,e){return ET(um,t,!0,e)||t}const wT=Symbol();function ET(t,e,n=!0,s=!1){const i=et||Me;if(i){const r=i.type;if(t===um){const a=QT(r,!1);if(a&&(a===e||a===dn(e)||a===Ra(dn(e))))return r}const o=Ff(i[t]||r[t],e)||Ff(i.appContext[t],e);return!o&&s?r:o}}function Ff(t,e){return t&&(t[e]||t[dn(e)]||t[Ra(dn(e))])}function Qx(t,e,n,s){let i;const r=n&&n[s];if(Y(t)||$e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Yx(t,e,n={},s,i){if(et.isCE||et.parent&&Qi(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),tt("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Fr();const o=r&&hm(r(n)),a=Pa(Lt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function hm(t){return t.some(e=>gr(e)?!(e.type===It||e.type===Lt&&!hm(e.children)):!0)?t:null}const _c=t=>t?Im(t)?La(t)||t.proxy:_c(t.parent):null,Yi=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$emit:t=>t.emit,$options:t=>qu(t),$forceUpdate:t=>t.f||(t.f=()=>ju(t.update)),$nextTick:t=>t.n||(t.n=zg.bind(t.proxy)),$watch:t=>oT.bind(t)}),Al=(t,e)=>t!==Se&&!t.__isScriptSetup&&fe(t,e),TT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Al(s,e))return o[e]=1,s[e];if(i!==Se&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==Se&&fe(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const u=Yi[e];let h,f;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&fe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Al(i,e)?(i[e]=n,!0):s!==Se&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&fe(t,o)||Al(e,o)||(a=r[0])&&fe(a,o)||fe(s,o)||fe(Yi,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vc=!0;function bT(t){const e=qu(t),n=t.proxy,s=t.ctx;vc=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:y,deactivated:_,beforeDestroy:T,beforeUnmount:E,destroyed:v,unmounted:k,render:U,renderTracked:z,renderTriggered:te,errorCaptured:F,serverPrefetch:ae,expose:re,inheritAttrs:Ce,components:je,directives:wt,filters:Rt}=e;if(c&&CT(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ve=o[Te];Z(ve)&&(s[Te]=ve.bind(n))}if(i){const Te=i.call(n,n);De(Te)&&(t.data=Mr(Te))}if(vc=!0,r)for(const Te in r){const ve=r[Te],Wt=Z(ve)?ve.bind(n,n):Z(ve.get)?ve.get.bind(n,n):Jt,ss=!Z(ve)&&Z(ve.set)?ve.set.bind(n):Jt,qt=Ft({get:Wt,set:ss});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Et=>qt.value=Et})}if(a)for(const Te in a)fm(a[Te],s,n,Te);if(l){const Te=Z(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ve=>{zi(ve,Te[ve])})}u&&Uf(u,t,"c");function Le(Te,ve){Y(ve)?ve.forEach(Wt=>Te(Wt.bind(n))):ve&&Te(ve.bind(n))}if(Le(dT,h),Le(om,f),Le(pT,d),Le(gT,g),Le(uT,y),Le(hT,_),Le(_T,F),Le(yT,z),Le(mT,te),Le(am,E),Le(lm,k),Le(cm,ae),Y(re))if(re.length){const Te=t.exposed||(t.exposed={});re.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:Wt=>n[ve]=Wt})})}else t.exposed||(t.exposed={});U&&t.render===Jt&&(t.render=U),Ce!=null&&(t.inheritAttrs=Ce),je&&(t.components=je),wt&&(t.directives=wt)}function CT(t,e,n=Jt,s=!1){Y(t)&&(t=wc(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=$t(r.from||i,r.default,!0):o=$t(r.from||i):o=$t(r),Ze(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Uf(t,e,n){Vt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,s){const i=s.includes(".")?tm(n,s):()=>n[s];if($e(t)){const r=e[t];Z(r)&&Gi(i,r)}else if(Z(t))Gi(i,t.bind(n));else if(De(t))if(Y(t))t.forEach(r=>fm(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&Gi(i,r,t)}}function qu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>jo(l,c,o,!0)),jo(l,e,o)),De(e)&&r.set(e,l),l}function jo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&jo(t,r,n,!0),i&&i.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=IT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IT={data:Bf,props:os,emits:os,methods:os,computed:os,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:os,directives:os,watch:AT,provide:Bf,inject:ST};function Bf(t,e){return e?t?function(){return pt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function ST(t,e){return os(wc(t),wc(e))}function wc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?pt(pt(Object.create(null),t),e):e}function AT(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const s in e)n[s]=mt(t[s],e[s]);return n}function RT(t,e,n,s=!1){const i={},r={};Bo(r,Ma,1),t.propsDefaults=Object.create(null),dm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:UE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Na(t.emitsOptions,f))continue;const d=e[f];if(l)if(fe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=dn(f);i[g]=Ec(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{dm(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=vi(h))===h||!fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ec(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!fe(e,h))&&(delete r[h],c=!0)}c&&An(t,"set","$attrs")}function dm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(No(l))continue;const c=e[l];let u;i&&fe(i,u=dn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Na(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ec(i,l,h,c[h],t,!fe(c,h))}}return o}function Ec(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Z(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Qn(i),s=c[n]=l.call(null,e),jn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===vi(n))&&(s=!0))}return s}function pm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[f,d]=pm(h,e,!0);pt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,Ks),Ks;if(Y(r))for(let u=0;u<r.length;u++){const h=dn(r[u]);Vf(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=dn(u);if(Vf(h)){const f=r[u],d=o[h]=Y(f)||Z(f)?{type:f}:Object.assign({},f);if(d){const g=Hf(Boolean,d.type),y=Hf(String,d.type);d[0]=g>-1,d[1]=y<0||g<y,(g>-1||fe(d,"default"))&&a.push(h)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function Vf(t){return t[0]!=="$"}function $f(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jf(t,e){return $f(t)===$f(e)}function Hf(t,e){return Y(e)?e.findIndex(n=>jf(n,t)):Z(e)&&jf(e,t)?0:-1}const gm=t=>t[0]==="_"||t==="$stable",Ku=t=>Y(t)?t.map(zt):[zt(t)],NT=(t,e,n)=>{if(e._n)return e;const s=gc((...i)=>Ku(e(...i)),n);return s._c=!1,s},mm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(gm(i))continue;const r=t[i];if(Z(r))e[i]=NT(i,r,s);else if(r!=null){const o=Ku(r);e[i]=()=>o}}},ym=(t,e)=>{const n=Ku(e);t.slots.default=()=>n},OT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Bo(e,"_",n)):mm(e,t.slots={})}else t.slots={},e&&ym(t,e);Bo(t.slots,Ma,1)},DT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(pt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,mm(e,i)),o=e}else e&&(ym(t,e),o={default:1});if(r)for(const a in i)!gm(a)&&!(a in o)&&delete i[a]};function _m(){return{app:null,config:{isNativeTag:tE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xT=0;function PT(t,e){return function(s,i=null){Z(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=_m(),o=new Set;let a=!1;const l=r.app={_uid:xT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:JT,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=tt(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,La(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Tc(t,e,n,s,i=!1){if(Y(t)){t.forEach((f,d)=>Tc(f,e&&(Y(e)?e[d]:e),n,s,i));return}if(Qi(s)&&!i)return;const r=s.shapeFlag&4?La(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,fe(h,c)&&(h[c]=null)):Ze(c)&&(c.value=null)),Z(l))$n(l,a,12,[o,u]);else{const f=$e(l),d=Ze(l);if(f||d){const g=()=>{if(t.f){const y=f?fe(h,l)?h[l]:u[l]:l.value;i?Y(y)&&Nu(y,r):Y(y)?y.includes(r)||y.push(r):f?(u[l]=[r],fe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,fe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Tt(g,n)):g()}}}const Tt=rT;function MT(t){return LT(t)}function LT(t,e){const n=lE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Jt,insertStaticContent:g}=t,y=(p,m,w,b=null,I=null,O=null,M=!1,N=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!an(p,m)&&(b=P(p),Et(p,I,O,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:A,ref:H,shapeFlag:B}=m;switch(A){case xa:_(p,m,w,b);break;case It:T(p,m,w,b);break;case Do:p==null&&E(m,w,b,M);break;case Lt:je(p,m,w,b,I,O,M,N,D);break;default:B&1?U(p,m,w,b,I,O,M,N,D):B&6?wt(p,m,w,b,I,O,M,N,D):(B&64||B&128)&&A.process(p,m,w,b,I,O,M,N,D,he)}H!=null&&I&&Tc(H,p&&p.ref,O,m||p,!m)},_=(p,m,w,b)=>{if(p==null)s(m.el=a(m.children),w,b);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},T=(p,m,w,b)=>{p==null?s(m.el=l(m.children||""),w,b):m.el=p.el},E=(p,m,w,b)=>{[p.el,p.anchor]=g(p.children,m,w,b,p.el,p.anchor)},v=({el:p,anchor:m},w,b)=>{let I;for(;p&&p!==m;)I=f(p),s(p,w,b),p=I;s(m,w,b)},k=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=f(p),i(p),p=w;i(m)},U=(p,m,w,b,I,O,M,N,D)=>{M=M||m.type==="svg",p==null?z(m,w,b,I,O,M,N,D):ae(p,m,I,O,M,N,D)},z=(p,m,w,b,I,O,M,N)=>{let D,A;const{type:H,props:B,shapeFlag:W,transition:X,dirs:se}=p;if(D=p.el=o(p.type,O,B&&B.is,B),W&8?u(D,p.children):W&16&&F(p.children,D,null,b,I,O&&H!=="foreignObject",M,N),se&&is(p,null,b,"created"),te(D,p,p.scopeId,M,b),B){for(const we in B)we!=="value"&&!No(we)&&r(D,we,null,B[we],O,p.children,b,I,L);"value"in B&&r(D,"value",null,B.value),(A=B.onVnodeBeforeMount)&&sn(A,b,p)}se&&is(p,null,b,"beforeMount");const be=(!I||I&&!I.pendingBranch)&&X&&!X.persisted;be&&X.beforeEnter(D),s(D,m,w),((A=B&&B.onVnodeMounted)||be||se)&&Tt(()=>{A&&sn(A,b,p),be&&X.enter(D),se&&is(p,null,b,"mounted")},I)},te=(p,m,w,b,I)=>{if(w&&d(p,w),b)for(let O=0;O<b.length;O++)d(p,b[O]);if(I){let O=I.subTree;if(m===O){const M=I.vnode;te(p,M,M.scopeId,M.slotScopeIds,I.parent)}}},F=(p,m,w,b,I,O,M,N,D=0)=>{for(let A=D;A<p.length;A++){const H=p[A]=N?Un(p[A]):zt(p[A]);y(null,H,m,w,b,I,O,M,N)}},ae=(p,m,w,b,I,O,M)=>{const N=m.el=p.el;let{patchFlag:D,dynamicChildren:A,dirs:H}=m;D|=p.patchFlag&16;const B=p.props||Se,W=m.props||Se;let X;w&&rs(w,!1),(X=W.onVnodeBeforeUpdate)&&sn(X,w,m,p),H&&is(m,p,w,"beforeUpdate"),w&&rs(w,!0);const se=I&&m.type!=="foreignObject";if(A?re(p.dynamicChildren,A,N,w,b,se,O):M||ve(p,m,N,null,w,b,se,O,!1),D>0){if(D&16)Ce(N,m,B,W,w,b,I);else if(D&2&&B.class!==W.class&&r(N,"class",null,W.class,I),D&4&&r(N,"style",B.style,W.style,I),D&8){const be=m.dynamicProps;for(let we=0;we<be.length;we++){const Fe=be[we],Kt=B[Fe],Ls=W[Fe];(Ls!==Kt||Fe==="value")&&r(N,Fe,Kt,Ls,I,p.children,w,b,L)}}D&1&&p.children!==m.children&&u(N,m.children)}else!M&&A==null&&Ce(N,m,B,W,w,b,I);((X=W.onVnodeUpdated)||H)&&Tt(()=>{X&&sn(X,w,m,p),H&&is(m,p,w,"updated")},b)},re=(p,m,w,b,I,O,M)=>{for(let N=0;N<m.length;N++){const D=p[N],A=m[N],H=D.el&&(D.type===Lt||!an(D,A)||D.shapeFlag&70)?h(D.el):w;y(D,A,H,null,b,I,O,M,!0)}},Ce=(p,m,w,b,I,O,M)=>{if(w!==b){if(w!==Se)for(const N in w)!No(N)&&!(N in b)&&r(p,N,w[N],null,M,m.children,I,O,L);for(const N in b){if(No(N))continue;const D=b[N],A=w[N];D!==A&&N!=="value"&&r(p,N,A,D,M,m.children,I,O,L)}"value"in b&&r(p,"value",w.value,b.value)}},je=(p,m,w,b,I,O,M,N,D)=>{const A=m.el=p?p.el:a(""),H=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:X}=m;X&&(N=N?N.concat(X):X),p==null?(s(A,w,b),s(H,w,b),F(m.children,w,H,I,O,M,N,D)):B>0&&B&64&&W&&p.dynamicChildren?(re(p.dynamicChildren,W,w,I,O,M,N),(m.key!=null||I&&m===I.subTree)&&vm(p,m,!0)):ve(p,m,w,H,I,O,M,N,D)},wt=(p,m,w,b,I,O,M,N,D)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,w,b,M,D):Rt(m,w,b,I,O,M,D):Di(p,m,D)},Rt=(p,m,w,b,I,O,M)=>{const N=p.component=WT(p,b,I);if(Oa(p)&&(N.ctx.renderer=he),qT(N),N.asyncDep){if(I&&I.registerDep(N,Le),!p.el){const D=N.subTree=tt(It);T(null,D,m,w)}return}Le(N,p,m,w,I,O,M)},Di=(p,m,w)=>{const b=m.component=p.component;if(XE(p,m,w))if(b.asyncDep&&!b.asyncResolved){Te(b,m,w);return}else b.next=m,qE(b.update),b.update();else m.el=p.el,b.vnode=m},Le=(p,m,w,b,I,O,M)=>{const N=()=>{if(p.isMounted){let{next:H,bu:B,u:W,parent:X,vnode:se}=p,be=H,we;rs(p,!1),H?(H.el=se.el,Te(p,H,M)):H=se,B&&Oo(B),(we=H.props&&H.props.onVnodeBeforeUpdate)&&sn(we,X,H,se),rs(p,!0);const Fe=Il(p),Kt=p.subTree;p.subTree=Fe,y(Kt,Fe,h(Kt.el),P(Kt),p,I,O),H.el=Fe.el,be===null&&Hu(p,Fe.el),W&&Tt(W,I),(we=H.props&&H.props.onVnodeUpdated)&&Tt(()=>sn(we,X,H,se),I)}else{let H;const{el:B,props:W}=m,{bm:X,m:se,parent:be}=p,we=Qi(m);if(rs(p,!1),X&&Oo(X),!we&&(H=W&&W.onVnodeBeforeMount)&&sn(H,be,m),rs(p,!0),B&&ne){const Fe=()=>{p.subTree=Il(p),ne(B,p.subTree,p,I,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=Il(p);y(null,Fe,w,b,p,I,O),m.el=Fe.el}if(se&&Tt(se,I),!we&&(H=W&&W.onVnodeMounted)){const Fe=m;Tt(()=>sn(H,be,Fe),I)}(m.shapeFlag&256||be&&Qi(be.vnode)&&be.vnode.shapeFlag&256)&&p.a&&Tt(p.a,I),p.isMounted=!0,m=w=b=null}},D=p.effect=new Mu(N,()=>ju(A),p.scope),A=p.update=()=>D.run();A.id=p.uid,rs(p,!0),A()},Te=(p,m,w)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,kT(p,m.props,b,w),DT(p,m.children,w),wi(),xf(),Ei()},ve=(p,m,w,b,I,O,M,N,D=!1)=>{const A=p&&p.children,H=p?p.shapeFlag:0,B=m.children,{patchFlag:W,shapeFlag:X}=m;if(W>0){if(W&128){ss(A,B,w,b,I,O,M,N,D);return}else if(W&256){Wt(A,B,w,b,I,O,M,N,D);return}}X&8?(H&16&&L(A,I,O),B!==A&&u(w,B)):H&16?X&16?ss(A,B,w,b,I,O,M,N,D):L(A,I,O,!0):(H&8&&u(w,""),X&16&&F(B,w,b,I,O,M,N,D))},Wt=(p,m,w,b,I,O,M,N,D)=>{p=p||Ks,m=m||Ks;const A=p.length,H=m.length,B=Math.min(A,H);let W;for(W=0;W<B;W++){const X=m[W]=D?Un(m[W]):zt(m[W]);y(p[W],X,w,null,I,O,M,N,D)}A>H?L(p,I,O,!0,!1,B):F(m,w,b,I,O,M,N,D,B)},ss=(p,m,w,b,I,O,M,N,D)=>{let A=0;const H=m.length;let B=p.length-1,W=H-1;for(;A<=B&&A<=W;){const X=p[A],se=m[A]=D?Un(m[A]):zt(m[A]);if(an(X,se))y(X,se,w,null,I,O,M,N,D);else break;A++}for(;A<=B&&A<=W;){const X=p[B],se=m[W]=D?Un(m[W]):zt(m[W]);if(an(X,se))y(X,se,w,null,I,O,M,N,D);else break;B--,W--}if(A>B){if(A<=W){const X=W+1,se=X<H?m[X].el:b;for(;A<=W;)y(null,m[A]=D?Un(m[A]):zt(m[A]),w,se,I,O,M,N,D),A++}}else if(A>W)for(;A<=B;)Et(p[A],I,O,!0),A++;else{const X=A,se=A,be=new Map;for(A=se;A<=W;A++){const kt=m[A]=D?Un(m[A]):zt(m[A]);kt.key!=null&&be.set(kt.key,A)}let we,Fe=0;const Kt=W-se+1;let Ls=!1,Tf=0;const xi=new Array(Kt);for(A=0;A<Kt;A++)xi[A]=0;for(A=X;A<=B;A++){const kt=p[A];if(Fe>=Kt){Et(kt,I,O,!0);continue}let nn;if(kt.key!=null)nn=be.get(kt.key);else for(we=se;we<=W;we++)if(xi[we-se]===0&&an(kt,m[we])){nn=we;break}nn===void 0?Et(kt,I,O,!0):(xi[nn-se]=A+1,nn>=Tf?Tf=nn:Ls=!0,y(kt,m[nn],w,null,I,O,M,N,D),Fe++)}const bf=Ls?FT(xi):Ks;for(we=bf.length-1,A=Kt-1;A>=0;A--){const kt=se+A,nn=m[kt],Cf=kt+1<H?m[kt+1].el:b;xi[A]===0?y(null,nn,w,Cf,I,O,M,N,D):Ls&&(we<0||A!==bf[we]?qt(nn,w,Cf,2):we--)}}},qt=(p,m,w,b,I=null)=>{const{el:O,type:M,transition:N,children:D,shapeFlag:A}=p;if(A&6){qt(p.component.subTree,m,w,b);return}if(A&128){p.suspense.move(m,w,b);return}if(A&64){M.move(p,m,w,he);return}if(M===Lt){s(O,m,w);for(let B=0;B<D.length;B++)qt(D[B],m,w,b);s(p.anchor,m,w);return}if(M===Do){v(p,m,w);return}if(b!==2&&A&1&&N)if(b===0)N.beforeEnter(O),s(O,m,w),Tt(()=>N.enter(O),I);else{const{leave:B,delayLeave:W,afterLeave:X}=N,se=()=>s(O,m,w),be=()=>{B(O,()=>{se(),X&&X()})};W?W(O,se,be):be()}else s(O,m,w)},Et=(p,m,w,b=!1,I=!1)=>{const{type:O,props:M,ref:N,children:D,dynamicChildren:A,shapeFlag:H,patchFlag:B,dirs:W}=p;if(N!=null&&Tc(N,null,w,p,!0),H&256){m.ctx.deactivate(p);return}const X=H&1&&W,se=!Qi(p);let be;if(se&&(be=M&&M.onVnodeBeforeUnmount)&&sn(be,m,p),H&6)C(p.component,w,b);else{if(H&128){p.suspense.unmount(w,b);return}X&&is(p,null,m,"beforeUnmount"),H&64?p.type.remove(p,m,w,I,he,b):A&&(O!==Lt||B>0&&B&64)?L(A,m,w,!1,!0):(O===Lt&&B&384||!I&&H&16)&&L(D,m,w),b&&Ms(p)}(se&&(be=M&&M.onVnodeUnmounted)||X)&&Tt(()=>{be&&sn(be,m,p),X&&is(p,null,m,"unmounted")},w)},Ms=p=>{const{type:m,el:w,anchor:b,transition:I}=p;if(m===Lt){co(w,b);return}if(m===Do){k(p);return}const O=()=>{i(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:N}=I,D=()=>M(w,O);N?N(p.el,O,D):D()}else O()},co=(p,m)=>{let w;for(;p!==m;)w=f(p),i(p),p=w;i(m)},C=(p,m,w)=>{const{bum:b,scope:I,update:O,subTree:M,um:N}=p;b&&Oo(b),I.stop(),O&&(O.active=!1,Et(M,p,m,w)),N&&Tt(N,m),Tt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},L=(p,m,w,b=!1,I=!1,O=0)=>{for(let M=O;M<p.length;M++)Et(p[M],m,w,b,I)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),j=(p,m,w)=>{p==null?m._vnode&&Et(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,w),xf(),Yg(),m._vnode=p},he={p:y,um:Et,m:qt,r:Ms,mt:Rt,mc:F,pc:ve,pbc:re,n:P,o:t};let xe,ne;return e&&([xe,ne]=e(he)),{render:j,hydrate:xe,createApp:PT(j,xe)}}function rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vm(t,e,n=!1){const s=t.children,i=e.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Un(i[r]),a.el=o.el),n||vm(o,a)),a.type===xa&&(a.el=o.el)}}function FT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const UT=t=>t.__isTeleport,Lt=Symbol(void 0),xa=Symbol(void 0),It=Symbol(void 0),Do=Symbol(void 0),Xi=[];let Ut=null;function Fr(t=!1){Xi.push(Ut=t?null:[])}function wm(){Xi.pop(),Ut=Xi[Xi.length-1]||null}let ri=1;function Wf(t){ri+=t}function Em(t){return t.dynamicChildren=ri>0?Ut||Ks:null,wm(),ri>0&&Ut&&Ut.push(t),t}function Xx(t,e,n,s,i,r){return Em(bm(t,e,n,s,i,r,!0))}function Pa(t,e,n,s,i){return Em(tt(t,e,n,s,i,!0))}function gr(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Ma="__vInternal",Tm=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Ze(t)||Z(t)?{i:et,r:t,k:e,f:!!n}:t:null;function bm(t,e=null,n=null,s=0,i=null,r=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tm(e),ref:e&&xo(e),scopeId:Zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return a?(zu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ri>0&&!o&&Ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ut.push(l),l}const tt=BT;function BT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===wT)&&(t=It),gr(t)){const a=Gn(t,e,!0);return n&&zu(a,n),ri>0&&!r&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(YT(t)&&(t=t.__vccOpts),e){e=VT(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=Ru(a)),De(l)&&(Ug(l)&&!Y(l)&&(l=pt({},l)),e.style=Au(l))}const o=$e(t)?1:JE(t)?128:UT(t)?64:De(t)?4:Z(t)?2:0;return bm(t,e,n,s,i,o,r,!0)}function VT(t){return t?Ug(t)||Ma in t?pt({},t):t:null}function Gn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?$T(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tm(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cm(t=" ",e=0){return tt(xa,null,t,e)}function Jx(t,e){const n=tt(Do,null,t);return n.staticCount=e,n}function Zx(t="",e=!1){return e?(Fr(),Pa(It,null,t)):tt(It,null,t)}function zt(t){return t==null||typeof t=="boolean"?tt(It):Y(t)?tt(Lt,null,t.slice()):typeof t=="object"?Un(t):tt(xa,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function zu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ma in e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:et},n=32):(e=String(e),s&64?(n=16,e=[Cm(e)]):n=8);t.children=e,t.shapeFlag|=n}function $T(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ru([e.class,s.class]));else if(i==="style")e.style=Au([e.style,s.style]);else if(Ia(i)){const r=e[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function sn(t,e,n,s=null){Vt(t,e,7,[n,s])}const jT=_m();let HT=0;function WT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||jT,r={uid:HT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(s,i),emitsOptions:Jg(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zE.bind(null,r),t.ce&&t.ce(r),r}let Me=null;const Ur=()=>Me||et,Qn=t=>{Me=t,t.scope.on()},jn=()=>{Me&&Me.scope.off(),Me=null};function Im(t){return t.vnode.shapeFlag&4}let mr=!1;function qT(t,e=!1){mr=e;const{props:n,children:s}=t.vnode,i=Im(t);RT(t,n,i,e),OT(t,s);const r=i?KT(t,e):void 0;return mr=!1,r}function KT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bg(new Proxy(t.ctx,TT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?GT(t):null;Qn(t),wi();const r=$n(s,t,0,[t.props,i]);if(Ei(),jn(),Du(r)){if(r.then(jn,jn),e)return r.then(o=>{bc(t,o,e)}).catch(o=>{Lr(o,t,0)});t.asyncDep=r}else bc(t,r,e)}else Sm(t,e)}function bc(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Wg(e)),Sm(t,n)}let qf;function Sm(t,e,n){const s=t.type;if(!t.render){if(!e&&qf&&!s.render){const i=s.template||qu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=pt(pt({isCustomElement:r,delimiters:a},o),l);s.render=qf(i,c)}}t.render=s.render||Jt}Qn(t),wi(),bT(t),Ei(),jn()}function zT(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function GT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zT(t))},slots:t.slots,emit:t.emit,expose:e}}function La(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wg(Bg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yi)return Yi[n](t)},has(e,n){return n in e||n in Yi}}))}function QT(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function YT(t){return Z(t)&&"__vccOpts"in t}const Ft=(t,e)=>jE(t,e,mr);function Rl(t){const e=Ur();let n=t();return jn(),Du(n)&&(n=n.catch(s=>{throw Qn(e),s})),[n,()=>Qn(e)]}function Am(t,e,n){const s=arguments.length;return s===2?De(e)&&!Y(e)?gr(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gr(n)&&(n=[n]),tt(t,e,n))}const Rm=Symbol(""),XT=()=>$t(Rm),JT="3.2.47",ZT="http://www.w3.org/2000/svg",us=typeof document<"u"?document:null,Kf=us&&us.createElement("template"),eb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?us.createElementNS(ZT,t):us.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Kf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Kf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nb(t,e,n){const s=t.style,i=$e(n);if(n&&!i){if(e&&!$e(e))for(const r in e)n[r]==null&&Cc(s,r,"");for(const r in n)Cc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const zf=/\s*!important$/;function Cc(t,e,n){if(Y(n))n.forEach(s=>Cc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=sb(t,e);zf.test(n)?t.setProperty(vi(s),n.replace(zf,""),"important"):t[s]=n}}const Gf=["Webkit","Moz","ms"],kl={};function sb(t,e){const n=kl[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return kl[e]=s;s=Ra(s);for(let i=0;i<Gf.length;i++){const r=Gf[i]+s;if(r in t)return kl[e]=r}return e}const Qf="http://www.w3.org/1999/xlink";function ib(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qf,e.slice(6,e.length)):t.setAttributeNS(Qf,e,n);else{const r=eE(e);n==null||r&&!Eg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function rb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eg(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Bs(t,e,n,s){t.addEventListener(e,n,s)}function ob(t,e,n,s){t.removeEventListener(e,n,s)}function ab(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=lb(e);if(s){const c=r[e]=hb(s,i);Bs(t,a,c,l)}else o&&(ob(t,a,o,l),r[e]=void 0)}}const Yf=/(?:Once|Passive|Capture)$/;function lb(t){let e;if(Yf.test(t)){e={};let s;for(;s=t.match(Yf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vi(t.slice(2)),e]}let Nl=0;const cb=Promise.resolve(),ub=()=>Nl||(cb.then(()=>Nl=0),Nl=Date.now());function hb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Vt(fb(s,n.value),e,5,[s])};return n.value=t,n.attached=ub(),n}function fb(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Xf=/^on[a-z]/,db=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?tb(t,s,i):e==="style"?nb(t,n,s):Ia(e)?ku(e)||ab(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pb(t,e,s,i))?rb(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ib(t,e,s,i))};function pb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Xf.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xf.test(e)&&$e(n)?!1:e in t}const gb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};cT.props;const Jf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Oo(e,n):e};function mb(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const eP={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Jf(i);const r=s||i.props&&i.props.type==="number";Bs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=cc(a)),t._assign(a)}),n&&Bs(t,"change",()=>{t.value=t.value.trim()}),e||(Bs(t,"compositionstart",mb),Bs(t,"compositionend",Zf),Bs(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Jf(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&cc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},tP={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pi(t,!0),s.enter(t)):s.leave(t,()=>{Pi(t,!1)}):Pi(t,e))},beforeUnmount(t,{value:e}){Pi(t,e)}};function Pi(t,e){t.style.display=e?t._vod:"none"}const yb=pt({patchProp:db},eb);let ed;function _b(){return ed||(ed=MT(yb))}const vb=(...t)=>{const e=_b().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=wb(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function wb(t){return $e(t)?document.querySelector(t):t}(function(){let t="",e=window.screen,n="";if(e.width){let E=e.width?e.width:"",v=e.height?e.height:"";n+=""+E+" x "+v}let s=navigator.appVersion,i=navigator.userAgent,r=navigator.appName,o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10),l,c,u;(c=i.indexOf("Opera"))!=-1?(r="Opera",o=i.substring(c+6),(c=i.indexOf("Version"))!=-1&&(o=i.substring(c+8))):(c=i.indexOf("MSIE"))!=-1?(r="Microsoft Internet Explorer",o=i.substring(c+5)):r=="Netscape"&&i.indexOf("Trident/")!=-1?(r="Microsoft Internet Explorer",o=i.substring(c+5),(c=i.indexOf("rv:"))!=-1&&(o=i.substring(c+3))):(c=i.indexOf("Chrome"))!=-1?(r="Chrome",o=i.substring(c+7)):(c=i.indexOf("Safari"))!=-1?(r="Safari",o=i.substring(c+7),(c=i.indexOf("Version"))!=-1&&(o=i.substring(c+8)),i.indexOf("CriOS")!=-1&&(r="Chrome")):(c=i.indexOf("Firefox"))!=-1?(r="Firefox",o=i.substring(c+8)):(l=i.lastIndexOf(" ")+1)<(c=i.lastIndexOf("/"))&&(r=i.substring(l,c),o=i.substring(c+1),r.toLowerCase()==r.toUpperCase()&&(r=navigator.appName)),(u=o.indexOf(";"))!=-1&&(o=o.substring(0,u)),(u=o.indexOf(" "))!=-1&&(o=o.substring(0,u)),(u=o.indexOf(")"))!=-1&&(o=o.substring(0,u)),a=parseInt(""+o,10),isNaN(a)&&(o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10));var h=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(s),f=!!navigator.cookieEnabled;typeof navigator.cookieEnabled>"u"&&!f&&(document.cookie="testcookie",f=document.cookie.indexOf("testcookie")!=-1);var d=t,g=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var y in g){var _=g[y];if(_.r.test(i)){d=_.s;break}}var T=t;switch(/Windows/.test(d)&&(T=/Windows (.*)/.exec(d)[1],d="Windows"),d){case"Mac OS X":T=/Mac OS X (10[\.\_\d]+)/.exec(i)[1];break;case"Android":T=/Android ([\.\_\d]+)/.exec(i)[1];break;case"iOS":T=/OS (\d+)_(\d+)_?(\d+)?/.exec(s),T=T[1]+"."+T[2]+"."+(T[3]|0);break}window.browserInfo={screen:n,browser:r+" "+o,mobile:h,os:d+" "+T}})();const td=["Antelope","Badger","Bear","Bison","Boar","Bat","Bull","Cat","Chimpanzee","Chipmunk","Camel","Crocodile","Cow","Calf","Deer","Dog","Donkey","Duck","Elephant","Ferret","Fox","Frog","Foal","Giraffe","Gerbil","Goat","Hare","Hamster","Hedgehog","Hippopotamus","Horse","Iguana","Lion","Lynx","Lizard","Mouse","Mantis","Monkey","Moose","Mongoose","Ostrich","Panther","Pig","Rabbit","Raccoon","Ram","Rabbit","Sable","Snake","Squirrel","Sheep","Tiger","Turtle","Wolf","Zebra","Duck","Crow","Canary","Chicken","Cock","Chick","Cuckoo","Crane","Eagle","Flamingo","Goose","Hen","Kingfisher","Lark","Nightingale","Parrot","Peacock","Pigeon","Owl","Ostrich","Sparrow","Swan","Vulture","Bream","Carp","Crucian","Catfish","Minnow","Perch","Pike","Ruff","Roach","Zander","Cod","Crab","Dolphin","Fur seal","Flounder","Goldfish","Herring","Jellyfish","Mackerel","Octopus","Pollock","Shark","Salmon","Sprat","Scad","Swordfish","Seal","Squid","Stingray","Starfish","Seabass","Tuna","Whale","Ant","Butterfly","Bee","Cockroach","Fly","Grasshopper","Spider","Mosquito","Wasp"],nd=["outgoing","extravert","carefree","lighthearted","truthful","candid","frank","easygoing","outspoken","straightforward","forthright","shy","timid","reserved","reticent","taciturn","tightlipped","sensitive","imaginative","creative","emotional","unstable","indecisive","strongwilled","determined","selfassured","strongminded","selfconfident","dominant","ambitious","demanding","mannerly","energetic","competitive","selfreliant","illbred","illmannered","badmannered","unmannerly","rude","impolite","uncivil","vulgar","coarse","inactive","inert","sluggish","torpid","slow","languid","proud","arrogant","pompous","boastful","selfish","selfseeking","selfcentered","vain","egocentric","snobbish","narrowminded","critical","petty","fussy","stubborn","obstinate","materialistic","smallminded","unpredictable","twofaced","hypocritical","dishonest","changeable","temperamental","insincere","unreliable","weakwilled","cowardly","unrefined","ungentlemanly","unladylike","devoted","loyal","true","faithful","dedicated","devout","committed","craven","fainthearted","lilylivered","spineless","chickenhearted","brave","courageous","dauntless","daring","fearless","bold","plucky","greedy","mercenary","avaricious","covetous","desirous","grasping","avid","mean","miserly","niggardly","stingy","parsimonious","close","tightfisted","tight","unkind","nasty","unpleasant","malicious","eager","desirous","ardent","fervent","enthusiastic","keen","anxious","zealous","callous","cruel","base","low","pitiless","merciless","kind","gentle","kindhearted","warm","affectionate","goodnatured","compassionate","sympathetic","mild","good","friendly","amiable","considerate","tender","thoughtful","tolerant","generous","liberal","lavish","openhanded","magnanimous","sensible","levelheaded","wellbalanced","practical","indifferent","apathetic","unconcerned","uninterested","nonchalant","cool","aloof","detached","impassive","incapable","touchy","nervous","alert","jittery","calm","fairminded","realistic","rational","logical","stupid","brainless","witless","dimwitted","feebleminded","foolish","silly","imprudent","dull","dense","clumsy","awkward","slow","clever","bright","intelligent","brainy","quickwitted","smart","shrewd","astute","sharp","keen","acute","discriminating","sagacious","inapt","inept","incompetent","maladroit","skillful","adroit","dexterous","able","masterly","expert","cunning","artful","crafty","sly","wily","foxy","credulous","gullible","na?ve","trustful","deceivable","simple","impertinent","impudent","insolent","rude","curt","pert","saucy","audacious","wellbred","wellmannered","civil","polite","courteous","gentlemanly","ladylike","refined","handy","nimble","lazy","slothful","idle","indolent","sociable","merry","playful","frivolous","selfsatisfied","vanity","complacency","obstinacy","arrogance","hypocrisy","selfishness","snobbishness","meanness","pomposity","dishonesty","stubbornness","pettiness","possessiveness","aggressiveness","creativity","compassion","tolerance","sincerity","modesty","timidity","rashness","vivacity","patience","imagination","sensitivity","frankness","generosity","passion","courage","selfassurance","ambition","humility","Moods","melancholic","pensive","thoughtful","nostalgic","longing","sentimental","bored","miserable","moody","resentful","frustrated","confused","uncertain","introspective","restless","unsure","edgy","confident","calm","refreshed","relaxed","content","optimistic","positive","excited","active","enthusiastic","ecstatic","cheerful","wildrash","weary","drained","exhausted","empty","disappointed","heartbroken","disillusioned","gloomy","depressed","disheartened","bewildered","dejected","distressed","lonely","hostile","bitter","insecure","amazed","overwhelmed"],sd=["Red","Blue","Green","Orange","White","Black","Yellow","Purple","Silver","Brown","Gray","Pink","Olive","Maroon","Violet","Charcoal","Magenta","Bronze","Cream","Gold","Tan","Teal","Mustard","Coral","Burgundy","Lavender","Mauve","Peach","Rust","Indigo","Ruby","Clay","Cyan","Azure","Beige","Turquoise","Amber","Mint"],Eb=()=>nd[Math.floor(Math.random()*nd.length)].toLowerCase(),Tb=()=>td[Math.floor(Math.random()*td.length)].toLowerCase(),bb=()=>sd[Math.floor(Math.random()*sd.length)].toLowerCase();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Ti(e)},Ti=function(t){return new Error("Firebase Database ("+km.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Ib;const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Om=function(t){const e=Nm(t);return Fa.encodeByteArray(e,!0)},Ho=function(t){return Om(t).replace(/\./g,"")},Wo=function(t){try{return Fa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){return Dm(void 0,t)}function Dm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ab(n)||(t[n]=Dm(t[n],e[n]));return t}function Ab(t){return t!=="__proto__"}/**
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
 */function Rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kb=()=>Rb().__FIREBASE_DEFAULTS__,Nb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ob=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wo(t[1]);return e&&JSON.parse(e)},Gu=()=>{try{return kb()||Nb()||Ob()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Db=t=>{var e,n;return(n=(e=Gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xb=t=>{const e=Db(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pb=()=>{var t;return(t=Gu())===null||t===void 0?void 0:t.config},Mb=t=>{var e;return(e=Gu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Lb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function Fb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pm(){return km.NODE_ADMIN===!0}function Mm(){try{return typeof indexedDB=="object"}catch{return!1}}function Ub(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Bb,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,s)}}function Vb(t,e){return t.replace($b,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $b=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=_r(Wo(r[0])||""),n=_r(Wo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},jb=function(t){const e=Lm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Hb=function(t){const e=Lm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ic(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rd(r)&&rd(o)){if(!Ic(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qb(t,e){const n=new Kb(t,e);return n.subscribe.bind(n)}class Kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ol),i.error===void 0&&(i.error=Ol),i.complete===void 0&&(i.complete=Ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}function Gb(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ua=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const as="[DEFAULT]";/**
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
 */class Yb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jb(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xb(t){return t===as?void 0:t}function Jb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const e0={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},t0=de.INFO,n0={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},s0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=n0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=t0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const i0=(t,e)=>e.some(n=>t instanceof n);let od,ad;function r0(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o0(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fm=new WeakMap,Sc=new WeakMap,Um=new WeakMap,Dl=new WeakMap,Xu=new WeakMap;function a0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Hn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fm.set(n,t)}).catch(()=>{}),Xu.set(e,t),e}function l0(t){if(Sc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c0(t){Ac=t(Ac)}function u0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xl(this),e,...n);return Um.set(s,e.sort?e.sort():[e]),Hn(s)}:o0().includes(t)?function(...e){return t.apply(xl(this),e),Hn(Fm.get(this))}:function(...e){return Hn(t.apply(xl(this),e))}}function h0(t){return typeof t=="function"?u0(t):(t instanceof IDBTransaction&&l0(t),i0(t,r0())?new Proxy(t,Ac):t)}function Hn(t){if(t instanceof IDBRequest)return a0(t);if(Dl.has(t))return Dl.get(t);const e=h0(t);return e!==t&&(Dl.set(t,e),Xu.set(e,t)),e}const xl=t=>Xu.get(t);function f0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Hn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const d0=["get","getKey","getAll","getAllKeys","count"],p0=["put","add","delete","clear"],Pl=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=p0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||d0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Pl.set(e,r),r}c0(t=>({...t,get:(e,n,s)=>ld(e,n)||t.get(e,n,s),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
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
 */class g0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function m0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",cd="0.9.7";/**
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
 */const Es=new Br("@firebase/app"),y0="@firebase/app-compat",_0="@firebase/analytics-compat",v0="@firebase/analytics",w0="@firebase/app-check-compat",E0="@firebase/app-check",T0="@firebase/auth",b0="@firebase/auth-compat",C0="@firebase/database",I0="@firebase/database-compat",S0="@firebase/functions",A0="@firebase/functions-compat",R0="@firebase/installations",k0="@firebase/installations-compat",N0="@firebase/messaging",O0="@firebase/messaging-compat",D0="@firebase/performance",x0="@firebase/performance-compat",P0="@firebase/remote-config",M0="@firebase/remote-config-compat",L0="@firebase/storage",F0="@firebase/storage-compat",U0="@firebase/firestore",B0="@firebase/firestore-compat",V0="firebase",$0="9.19.1";/**
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
 */const kc="[DEFAULT]",j0={[Rc]:"fire-core",[y0]:"fire-core-compat",[v0]:"fire-analytics",[_0]:"fire-analytics-compat",[E0]:"fire-app-check",[w0]:"fire-app-check-compat",[T0]:"fire-auth",[b0]:"fire-auth-compat",[C0]:"fire-rtdb",[I0]:"fire-rtdb-compat",[S0]:"fire-fn",[A0]:"fire-fn-compat",[R0]:"fire-iid",[k0]:"fire-iid-compat",[N0]:"fire-fcm",[O0]:"fire-fcm-compat",[D0]:"fire-perf",[x0]:"fire-perf-compat",[P0]:"fire-rc",[M0]:"fire-rc-compat",[L0]:"fire-gcs",[F0]:"fire-gcs-compat",[U0]:"fire-fst",[B0]:"fire-fst-compat","fire-js":"fire-js",[V0]:"fire-js-all"};/**
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
 */const Ko=new Map,Nc=new Map;function H0(t,e){try{t.container.addComponent(e)}catch(n){Es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Nc.has(e))return Es.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of Ko.values())H0(n,t);return!0}function W0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const q0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new bi("app","Firebase",q0);/**
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
 */class K0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=$0;function Bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=Pb()),!n)throw Wn.create("no-options");const r=Ko.get(i);if(r){if(Ic(n,r.options)&&Ic(s,r.config))return r;throw Wn.create("duplicate-app",{appName:i})}const o=new Zb(i);for(const l of Nc.values())o.addComponent(l);const a=new K0(n,s,o);return Ko.set(i,a),a}function Vm(t=kc){const e=Ko.get(t);if(!e&&t===kc)return Bm();if(!e)throw Wn.create("no-app",{appName:t});return e}function Dt(t,e,n){var s;let i=(s=j0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Es.warn(a.join(" "));return}gn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const z0="firebase-heartbeat-database",G0=1,vr="firebase-heartbeat-store";let Ml=null;function $m(){return Ml||(Ml=f0(z0,G0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function Q0(t){try{return(await $m()).transaction(vr).objectStore(vr).get(jm(t))}catch(e){if(e instanceof xn)Es.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Es.warn(n.message)}}}async function ud(t,e){try{const s=(await $m()).transaction(vr,"readwrite");return await s.objectStore(vr).put(e,jm(t)),s.done}catch(n){if(n instanceof xn)Es.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(s.message)}}}function jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y0=1024,X0=30*24*60*60*1e3;class J0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=X0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hd(),{heartbeatsToSend:n,unsentEntries:s}=Z0(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hd(){return new Date().toISOString().substring(0,10)}function Z0(t,e=Y0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mm()?Ub().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Q0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fd(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tC(t){gn(new en("platform-logger",e=>new g0(e),"PRIVATE")),gn(new en("heartbeat",e=>new J0(e),"PRIVATE")),Dt(Rc,cd,t),Dt(Rc,cd,"esm2017"),Dt("fire-js","")}tC("");var nC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Ju=Ju||{},Q=nC||self;function zo(){}function Ba(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sC(t){return Object.prototype.hasOwnProperty.call(t,Ll)&&t[Ll]||(t[Ll]=++iC)}var Ll="closure_uid_"+(1e9*Math.random()>>>0),iC=0;function rC(t,e,n){return t.call.apply(t.bind,arguments)}function oC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=rC:ft=oC,ft.apply(null,arguments)}function yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function st(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function es(){this.s=this.s,this.o=this.o}var aC=0;es.prototype.s=!1;es.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aC!=0)&&sC(this)};es.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function dd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ba(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var lC=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",zo,e),Q.removeEventListener("test",zo,e)}catch{}return t}();function Go(t){return/^[\s\xa0]*$/.test(t)}var pd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fl(t,e){return t<e?-1:t>e?1:0}function Va(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function ln(t){return Va().indexOf(t)!=-1}function eh(t){return eh[" "](t),t}eh[" "]=zo;function cC(t){var e=fC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uC=ln("Opera"),ai=ln("Trident")||ln("MSIE"),Wm=ln("Edge"),Oc=Wm||ai,qm=ln("Gecko")&&!(Va().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge"))&&!(ln("Trident")||ln("MSIE"))&&!ln("Edge"),hC=Va().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge");function Km(){var t=Q.document;return t?t.documentMode:void 0}var Qo;e:{var Ul="",Bl=function(){var t=Va();if(qm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wm)return/Edge\/([\d\.]+)/.exec(t);if(ai)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hC)return/WebKit\/(\S+)/.exec(t);if(uC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bl&&(Ul=Bl?Bl[1]:""),ai){var Vl=Km();if(Vl!=null&&Vl>parseFloat(Ul)){Qo=String(Vl);break e}}Qo=Ul}var fC={};function dC(){return cC(function(){let t=0;const e=pd(String(Qo)).split("."),n=pd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Fl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Fl(i[2].length==0,r[2].length==0)||Fl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Dc;if(Q.document&&ai){var gd=Km();Dc=gd||parseInt(Qo,10)||void 0}else Dc=void 0;var pC=Dc;function wr(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qm){e:{try{eh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wr.X.h.call(this)}}st(wr,dt);var gC={2:"touch",3:"pen",4:"mouse"};wr.prototype.h=function(){wr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),mC=0;function yC(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++mC,this.ba=this.ea=!1}function $a(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function th(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zm(t){const e={};for(const n in t)e[n]=t[n];return e}const md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gm(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<md.length;r++)n=md[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ja(t){this.src=t,this.g={},this.h=0}ja.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Pc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yC(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function xc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Hm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var nh="closure_lm_"+(1e6*Math.random()|0),$l={};function Qm(t,e,n,s,i){if(s&&s.once)return Xm(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qm(t,e[r],n,s,i);return null}return n=rh(n),t&&t[jr]?t.N(e,n,$r(s)?!!s.capture:!!s,i):Ym(t,e,n,!1,s,i)}function Ym(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=$r(i)?!!i.capture:!!i,a=ih(t);if(a||(t[nh]=a=new ja(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=_C(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Zm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _C(){function t(n){return e.call(t.src,t.listener,n)}const e=vC;return t}function Xm(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xm(t,e[r],n,s,i);return null}return n=rh(n),t&&t[jr]?t.O(e,n,$r(s)?!!s.capture:!!s,i):Ym(t,e,n,!0,s,i)}function Jm(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Jm(t,e[r],n,s,i);else s=$r(s)?!!s.capture:!!s,n=rh(n),t&&t[jr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Pc(r,n,s,i),-1<n&&($a(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ih(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pc(e,n,s,i)),(n=-1<t?e[t]:null)&&sh(n))}function sh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jr])xc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ih(e))?(xc(n,t),n.h==0&&(n.src=null,e[nh]=null)):$a(t)}}}function Zm(t){return t in $l?$l[t]:$l[t]="on"+t}function vC(t,e){if(t.ba)t=!0;else{e=new wr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&sh(t),t=n.call(s,e)}return t}function ih(t){return t=t[nh],t instanceof ja?t:null}var jl="__closure_events_fn_"+(1e9*Math.random()>>>0);function rh(t){return typeof t=="function"?t:(t[jl]||(t[jl]=function(e){return t.handleEvent(e)}),t[jl])}function Ye(){es.call(this),this.i=new ja(this),this.P=this,this.I=null}st(Ye,es);Ye.prototype[jr]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){Jm(this,t,e,n,s)};function nt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(s,t),Gm(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=_o(o,s,!0,e)&&i}if(o=e.g=t,i=_o(o,s,!0,e)&&i,i=_o(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=_o(o,s,!1,e)&&i}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$a(n[s]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _o(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var oh=Q.JSON.stringify;function wC(){var t=ny;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EC{constructor(){this.h=this.g=null}add(e,n){const s=ey.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ey=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TC,t=>t.reset());class TC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bC(t){Q.setTimeout(()=>{throw t},0)}function ty(t,e){Mc||CC(),Lc||(Mc(),Lc=!0),ny.add(t,e)}var Mc;function CC(){var t=Q.Promise.resolve(void 0);Mc=function(){t.then(IC)}}var Lc=!1,ny=new EC;function IC(){for(var t;t=wC();){try{t.h.call(t.g)}catch(n){bC(n)}var e=ey;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lc=!1}function Ha(t,e){Ye.call(this),this.h=t||1,this.g=e||Q,this.j=ft(this.lb,this),this.l=Date.now()}st(Ha,Ye);V=Ha.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nt(this,"tick"),this.ca&&(ah(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ah(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Ha.X.M.call(this),ah(this),delete this.g};function lh(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function sy(t){t.g=lh(()=>{t.g=null,t.i&&(t.i=!1,sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SC extends es{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sy(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(t){es.call(this),this.h=t,this.g={}}st(Er,es);var yd=[];function iy(t,e,n,s){Array.isArray(n)||(n&&(yd[0]=n.toString()),n=yd);for(var i=0;i<n.length;i++){var r=Qm(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ry(t){th(t.g,function(e,n){this.g.hasOwnProperty(n)&&sh(e)},t),t.g={}}Er.prototype.M=function(){Er.X.M.call(this),ry(this)};Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wa(){this.g=!0}Wa.prototype.Aa=function(){this.g=!1};function AC(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RC(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NC(t,n)+(s?" "+s:"")})}function kC(t,e){t.info(function(){return"TIMEOUT: "+e})}Wa.prototype.info=function(){};function NC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return oh(n)}catch{return e}}var ks={},_d=null;function qa(){return _d=_d||new Ye}ks.Pa="serverreachability";function oy(t){dt.call(this,ks.Pa,t)}st(oy,dt);function Tr(t){const e=qa();nt(e,new oy(e))}ks.STAT_EVENT="statevent";function ay(t,e){dt.call(this,ks.STAT_EVENT,t),this.stat=e}st(ay,dt);function _t(t){const e=qa();nt(e,new ay(e,t))}ks.Qa="timingevent";function ly(t,e){dt.call(this,ks.Qa,t),this.size=e}st(ly,dt);function Hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ka={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ch(){}ch.prototype.h=null;function vd(t){return t.h||(t.h=t.i())}function uy(){}var Wr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uh(){dt.call(this,"d")}st(uh,dt);function hh(){dt.call(this,"c")}st(hh,dt);var Fc;function za(){}st(za,ch);za.prototype.g=function(){return new XMLHttpRequest};za.prototype.i=function(){return{}};Fc=new za;function qr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Er(this),this.O=OC,t=Oc?125:void 0,this.T=new Ha(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hy}function hy(){this.i=null,this.g="",this.h=!1}var OC=45e3,Uc={},Yo={};V=qr.prototype;V.setTimeout=function(t){this.O=t};function Bc(t,e,n){t.K=1,t.v=Qa(Rn(e)),t.s=n,t.P=!0,fy(t,null)}function fy(t,e){t.F=Date.now(),Kr(t),t.A=Rn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),wy(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hy,t.g=$y(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SC(ft(t.La,t,t.g),t.N)),iy(t.S,t.g,"readystatechange",t.ib),e=t.H?zm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Tr(),AC(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&bn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Oc||this.g&&(this.h.h||this.g.fa()||bd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Tr(3):Tr(2)),Ga(this);var n=this.g.aa();this.Y=n;t:if(dy(this)){var s=bd(this.g);t="";var i=s.length,r=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),Ji(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,RC(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Go(a)){var c=a;break t}}c=null}if(n=c)Hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vc(this,n);else{this.i=!1,this.o=3,_t(12),fs(this),Ji(this);break e}}this.P?(py(this,u,o),Oc&&this.i&&u==3&&(iy(this.S,this.T,"tick",this.hb),this.T.start())):(Hs(this.j,this.m,o,null),Vc(this,o)),u==4&&fs(this),this.i&&!this.I&&(u==4?Fy(this.l,this):(this.i=!1,Kr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),fs(this),Ji(this)}}}catch{}finally{}};function dy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function py(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=DC(t,n),i==Yo){e==4&&(t.o=4,_t(14),s=!1),Hs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uc){t.o=4,_t(15),Hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Hs(t.j,t.m,i,null),Vc(t,i);dy(t)&&i!=Yo&&i!=Uc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_h(e),e.K=!0,_t(11))):(Hs(t.j,t.m,n,"[Invalid Chunked Response]"),fs(t),Ji(t))}V.hb=function(){if(this.g){var t=bn(this.g),e=this.g.fa();this.C<e.length&&(Ga(this),py(this,t,e),this.i&&t!=4&&Kr(this))}};function DC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Yo:(n=Number(e.substring(n,s)),isNaN(n)?Uc:(s+=1,s+n>e.length?Yo:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,fs(this)};function Kr(t){t.V=Date.now()+t.O,gy(t,t.O)}function gy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hr(ft(t.gb,t),e)}function Ga(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kC(this.j,this.A),this.K!=2&&(Tr(),_t(17)),fs(this),this.o=2,Ji(this)):gy(this,this.V-t)};function Ji(t){t.l.G==0||t.I||Fy(t.l,t)}function fs(t){Ga(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ah(t.T),ry(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||$c(n.h,t))){if(!t.J&&$c(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Zo(n),Ja(n);else break e;yh(n),_t(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Hr(ft(n.cb,n),6e3));if(1>=by(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ds(n,11)}else if((t.J||n.g==t)&&Zo(n),!Go(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(fh(r,r.h),r.h=null))}if(s.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ne(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vy(s,s.H?s.ka:null,s.V),o.J){Cy(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ga(a),Kr(a)),s.g=o}else My(s);0<n.i.length&&Za(n)}else c[0]!="stop"&&c[0]!="close"||ds(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ds(n,7):mh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Tr(4)}catch{}}function xC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ba(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function PC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ba(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function my(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ba(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PC(t),s=xC(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _s){this.h=e!==void 0?e:t.h,Xo(this,t.j),this.s=t.s,this.g=t.g,Jo(this,t.m),this.l=t.l,e=t.i;var n=new br;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wd(this,n),this.o=t.o}else t&&(n=String(t).match(yy))?(this.h=!!e,Xo(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),Jo(this,n[4]),this.l=ji(n[5]||"",!0),wd(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new br(null,this.h))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hi(e,Ed,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hi(e,Ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hi(n,n.charAt(0)=="/"?UC:FC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hi(n,VC)),t.join("")};function Rn(t){return new _s(t)}function Xo(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wd(t,e,n){e instanceof br?(t.i=e,$C(t.i,t.h)):(n||(e=Hi(e,BC)),t.i=new br(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Qa(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ed=/[#\/\?@]/g,FC=/[#\?:]/g,UC=/[#\?]/g,BC=/[#\?@]/g,VC=/#/g;function br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ts(t){t.g||(t.g=new Map,t.h=0,t.i&&MC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=br.prototype;V.add=function(t,e){ts(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _y(t,e){ts(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vy(t,e){return ts(t),e=Ci(t,e),t.g.has(e)}V.forEach=function(t,e){ts(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ts(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ts(this);let e=[];if(typeof t=="string")vy(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ts(this),this.i=null,t=Ci(this,t),vy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function wy(t,e,n){_y(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),Zu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $C(t,e){e&&!t.j&&(ts(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(_y(this,s),wy(this,i,n))},t)),t.j=e}var jC=class{constructor(e,n){this.h=e,this.g=n}};function Ey(t){this.l=t||HC,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HC=10;function Ty(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function by(t){return t.h?1:t.g?t.g.size:0}function $c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fh(t,e){t.g?t.g.add(e):t.h=e}function Cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ey.prototype.cancel=function(){if(this.i=Iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Iy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zu(t.i)}function dh(){}dh.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};dh.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function WC(){this.g=new dh}function qC(t,e,n){const s=n||"";try{my(t,function(i,r){let o=i;$r(i)&&(o=oh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function KC(t,e){const n=new Wa;if(Q.Image){const s=new Image;s.onload=yo(vo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yo(vo,n,s,"TestLoadImage: error",!1,e),s.onabort=yo(vo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yo(vo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function zr(t){this.l=t.ac||null,this.j=t.jb||!1}st(zr,ch);zr.prototype.g=function(){return new Ya(this.l,this.j)};zr.prototype.i=function(t){return function(){return t}}({});function Ya(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(Ya,Ye);var ph=0;V=Ya.prototype;V.open=function(t,e){if(this.readyState!=ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cr(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=ph};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gr(this):Cr(this),this.readyState==3&&Sy(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Gr(this))};V.Ua=function(t){this.g&&(this.response=t,Gr(this))};V.ga=function(){this.g&&Gr(this)};function Gr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cr(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zC=Q.JSON.parse;function Pe(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ay,this.K=this.L=!1}st(Pe,Ye);var Ay="",GC=/^https?$/i,QC=["POST","PUT"];V=Pe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fc.g(),this.C=this.u?vd(this.u):vd(Fc),this.g.onreadystatechange=ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Td(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=Hm(QC,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ny(this),0<this.B&&((this.K=YC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.qa,this)):this.A=lh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Td(this,r)}};function YC(t){return ai&&dC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function Td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ry(t),Xa(t)}function Ry(t){t.D||(t.D=!0,nt(t,"complete"),nt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Xa(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),Pe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?ky(this):this.fb())};V.fb=function(){ky(this)};function ky(t){if(t.h&&typeof Ju<"u"&&(!t.C[1]||bn(t)!=4||t.aa()!=2)){if(t.v&&bn(t)==4)lh(t.Ha,0,t);else if(nt(t,"readystatechange"),bn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(yy)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!GC.test(i?i.toLowerCase():"")}n=s}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ry(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){Ny(t);const n=t.g,s=t.C[0]?zo:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ny(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zC(e)}};function bd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ay:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Oy(t){let e="";return th(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Oy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Mi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dy(t){this.Ca=0,this.i=[],this.j=new Wa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Mi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Mi("baseRetryDelayMs",5e3,t),this.bb=Mi("retryDelaySeedMs",1e4,t),this.$a=Mi("forwardChannelMaxRetries",2,t),this.ta=Mi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ey(t&&t.concurrentRequestLimit),this.Fa=new WC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=Dy.prototype;V.ma=8;V.G=1;function mh(t){if(xy(t),t.G==3){var e=t.U++,n=Rn(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Qr(t,n),e=new qr(t,t.j,e,void 0),e.K=2,e.v=Qa(Rn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=$y(e.l,null),e.g.da(e.v)),e.F=Date.now(),Kr(e)}By(t)}function Ja(t){t.g&&(_h(t),t.g.cancel(),t.g=null)}function xy(t){Ja(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Zo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Za(t){Ty(t.h)||t.m||(t.m=!0,ty(t.Ja,t),t.C=0)}function XC(t,e){return by(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Hr(ft(t.Ja,t,e),Uy(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=zm(r),Gm(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Py(this,i,e),n=Rn(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Qr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Oy(r)))+"&"+e:this.o&&gh(n,this.o,r)),fh(this.h,i),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),i.Z=!0,Bc(i,n,null)):Bc(i,n,e),this.G=2}}else this.G==3&&(t?Cd(this,t):this.i.length==0||Ty(this.h)||Cd(this))};function Cd(t,e){var n;e?n=e.m:n=t.U++;const s=Rn(t.F);Ne(s,"SID",t.I),Ne(s,"RID",n),Ne(s,"AID",t.T),Qr(t,s),t.o&&t.s&&gh(s,t.o,t.s),n=new qr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Py(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fh(t.h,n),Bc(n,s,e)}function Qr(t,e){t.ia&&th(t.ia,function(n,s){Ne(e,s,n)}),t.l&&my({},function(n,s){Ne(e,s,n)})}function Py(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ft(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{qC(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function My(t){t.g||t.u||(t.Z=1,ty(t.Ia,t),t.A=0)}function yh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Hr(ft(t.Ia,t),Uy(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,Ly(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Hr(ft(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,_t(10),Ja(this),Ly(this))};function _h(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Ly(t){t.g=new qr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Rn(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),Qr(t,e),t.o&&t.s&&gh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qa(Rn(e)),n.s=null,n.P=!0,fy(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Ja(this),yh(this),_t(19))};function Zo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Fy(t,e){var n=null;if(t.g==e){Zo(t),_h(t),t.g=null;var s=2}else if($c(t.h,e))n=e.D,Cy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=qa(),nt(s,new ly(s,n)),Za(t)}else My(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&XC(t,e)||s==2&&yh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function Uy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ft(t.kb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Xo(n,"https"),Qa(n)),KC(n.toString(),s)}else _t(2);t.G=0,t.l&&t.l.va(e),By(t),xy(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function By(t){if(t.G=0,t.la=[],t.l){const e=Iy(t.h);(e.length!=0||t.i.length!=0)&&(dd(t.la,e),dd(t.la,t.i),t.h.i.length=0,Zu(t.i),t.i.length=0),t.l.ua()}}function Vy(t,e,n){var s=n instanceof _s?Rn(n):new _s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Jo(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new _s(null,void 0);s&&Xo(r,s),e&&(r.g=e),i&&Jo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ma),Qr(t,s),s}function $y(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new zr({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function jy(){}V=jy.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function ea(){if(ai&&!(10<=Number(pC)))throw Error("Environmental error: no available transport.")}ea.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Ye.call(this),this.g=new Dy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Go(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}st(Pt,Ye);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vy(t,null,t.V),Za(t)};Pt.prototype.close=function(){mh(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=oh(t),t=n);e.i.push(new jC(e.ab++,t)),e.G==3&&Za(e)};Pt.prototype.M=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Pt.X.M.call(this)};function Hy(t){uh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(Hy,uh);function Wy(){hh.call(this),this.status=1}st(Wy,hh);function Ii(t){this.g=t}st(Ii,jy);Ii.prototype.xa=function(){nt(this.g,"a")};Ii.prototype.wa=function(t){nt(this.g,new Hy(t))};Ii.prototype.va=function(t){nt(this.g,new Wy)};Ii.prototype.ua=function(){nt(this.g,"b")};ea.prototype.createWebChannel=ea.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Ka.NO_ERROR=0;Ka.TIMEOUT=8;Ka.HTTP_ERROR=6;cy.COMPLETE="complete";uy.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var JC=function(){return new ea},ZC=function(){return qa()},Hl=Ka,eI=cy,tI=ks,Id={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nI=zr,wo=uy,sI=Pe;const Sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Br("@firebase/firestore");function Ad(){return Ts.logLevel}function $(t,...e){if(Ts.logLevel<=de.DEBUG){const n=e.map(vh);Ts.debug(`Firestore (${Si}): ${t}`,...n)}}function kn(t,...e){if(Ts.logLevel<=de.ERROR){const n=e.map(vh);Ts.error(`Firestore (${Si}): ${t}`,...n)}}function ta(t,...e){if(Ts.logLevel<=de.WARN){const n=e.map(vh);Ts.warn(`Firestore (${Si}): ${t}`,...n)}}function vh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Re(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class rI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oI{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new qy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new rt(e)}}class aI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class lI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new aI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.T=n.token,new cI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=hI(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Ir{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const fI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ir{construct(e,n,s){return new ut(e,n,s)}static isValidIdentifier(e){return fI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Oe.fromString(e))}static fromName(e){return new K(Oe.fromString(e).popFirst(5))}static empty(){return new K(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Oe(e.slice()))}}function dI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new Yn(i,K.empty(),e)}function pI(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yn(J.min(),K.empty(),-1)}static max(){return new Yn(J.max(),K.empty(),-1)}}function gI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==mI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Xr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}wh.ct=-1;function el(t){return t==null}function na(t){return t===0&&1/t==-1/0}function _I(t){return typeof t=="number"&&Number.isInteger(t)&&!na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??Xe.EMPTY,this.right=r??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kd(this.data.getIterator())}getIteratorFrom(e){return new kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new We(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class vI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vI("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const wI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=wI.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qy(t){const e=t.mapValue.fields.__previous_value__;return Gy(e)?Qy(e):e}function Sr(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gy(t)?4:TI(t)?9007199254740991:10:G()}function mn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sr(t).isEqual(Sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Xn(s.timestampValue),o=Xn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ci(s.bytesValue).isEqual(ci(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Be(s.doubleValue),o=Be(i.doubleValue);return r===o?na(r)===na(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Rd(r)!==Rd(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mn(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Rr(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=bs(t),s=bs(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Be(i.integerValue||i.doubleValue),a=Be(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nd(t.timestampValue,e.timestampValue);case 4:return Nd(Sr(t),Sr(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ci(i),a=ci(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ge(o[l],a[l]);if(c!==0)return c}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ge(Be(i.latitude),Be(r.latitude));return o!==0?o:ge(Be(i.longitude),Be(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ui(o[l],a[l]);if(c)return c}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===To.mapValue&&r===To.mapValue)return 0;if(i===To.mapValue)return 1;if(r===To.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ge(a[u],c[u]);if(h!==0)return h;const f=ui(o[a[u]],l[c[u]]);if(f!==0)return f}return ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Xn(t),s=Xn(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function hi(t){return jc(t)}function jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Xn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ci(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=jc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${jc(s.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function Hc(t){return!!t&&"integerValue"in t}function Eh(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function Dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function Zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Zi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(n)}setAll(e){let n=ut.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Zi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Po(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ns(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new bt(Zi(this.value))}}function Yy(t){const e=[];return Ns(t.fields,(n,s)=>{const i=new ut([n]);if(Po(s)){const r=Yy(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),bt.empty(),0)}static newFoundDocument(e,n,s,i){return new ot(e,1,n,J.min(),s,i,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function xd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=ui(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class er{constructor(e,n="asc"){this.field=e,this.dir=n}}function bI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Xy{}class He extends Xy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new II(e,n,s):n==="array-contains"?new RI(e,s):n==="in"?new kI(e,s):n==="not-in"?new NI(e,s):n==="array-contains-any"?new OI(e,s):new He(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SI(e,s):new AI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ui(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yn extends Xy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new yn(e,n)}matches(e){return Jy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jy(t){return t.op==="and"}function Zy(t){return CI(t)&&Jy(t)}function CI(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Wc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+hi(t.value);if(Zy(t))return t.filters.map(e=>Wc(e)).join(",");{const e=t.filters.map(n=>Wc(n)).join(",");return`${t.op}(${e})`}}function e_(t,e){return t instanceof He?function(n,s){return s instanceof He&&n.op===s.op&&n.field.isEqual(s.field)&&mn(n.value,s.value)}(t,e):t instanceof yn?function(n,s){return s instanceof yn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&e_(r,s.filters[o]),!0):!1}(t,e):void G()}function t_(t){return t instanceof He?function(e){return`${e.field.canonicalString()} ${e.op} ${hi(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(t_).join(" ,")+"}"}(t):"Filter"}class II extends He{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class SI extends He{constructor(e,n){super(e,"in",n),this.keys=n_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AI extends He{constructor(e,n){super(e,"not-in",n),this.keys=n_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class RI extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eh(n)&&Rr(n.arrayValue,this.value)}}class kI extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rr(this.value.arrayValue,n)}}class NI extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rr(this.value.arrayValue,n)}}class OI extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rr(this.value.arrayValue,s))}}/**
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
 */class DI{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Md(t,e=null,n=[],s=[],i=null,r=null,o=null){return new DI(t,e,n,s,i,r,o)}function Th(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Wc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hi(s)).join(",")),e.ft=n}return e.ft}function bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pd(t.startAt,e.startAt)&&Pd(t.endAt,e.endAt)}function qc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function xI(t,e,n,s,i,r,o,a){return new tl(t,e,n,s,i,r,o,a)}function nl(t){return new tl(t)}function Ld(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function MI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LI(t){return t.collectionGroup!==null}function Js(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=MI(e),s=PI(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new er(n)),e.dt.push(new er(ut.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new er(ut.keyField(),r))}}}return e.dt}function Nn(t){const e=ee(t);if(!e.wt)if(e.limitType==="F")e.wt=Md(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Js(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new er(r.field,o))}const s=e.endAt?new sa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sa(e.startAt.position,e.startAt.inclusive):null;e.wt=Md(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Kc(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sl(t,e){return bh(Nn(t),Nn(e))&&t.limitType===e.limitType}function s_(t){return`${Th(Nn(t))}|lt:${t.limitType}`}function zc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>t_(s)).join(", ")}]`),el(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hi(s)).join(",")),`Target(${n})`}(Nn(t))}; limitType=${t.limitType})`}function il(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Js(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xd(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Js(n),s)||n.endAt&&!function(i,r,o){const a=xd(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Js(n),s))}(t,e)}function FI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i_(t){return(e,n)=>{let s=!1;for(const i of Js(t)){const r=UI(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function UI(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ui(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return zy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new qe(K.comparator);function On(){return BI}const r_=new qe(K.comparator);function Wi(...t){let e=r_;for(const n of t)e=e.insert(n.key,n);return e}function o_(t){let e=r_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ps(){return tr()}function a_(){return tr()}function tr(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const VI=new qe(K.comparator),$I=new We(K.comparator);function ie(...t){let e=$I;for(const n of t)e=e.add(n);return e}const jI=new We(ge);function l_(){return jI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function u_(t){return{integerValue:""+t}}function HI(t,e){return _I(e)?u_(e):c_(t,e)}/**
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
 */class rl{constructor(){this._=void 0}}function WI(t,e,n){return t instanceof ia?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof kr?f_(t,e):t instanceof Nr?d_(t,e):function(s,i){const r=h_(s,i),o=Fd(r)+Fd(s._t);return Hc(r)&&Hc(s._t)?u_(o):c_(s.serializer,o)}(t,e)}function qI(t,e,n){return t instanceof kr?f_(t,e):t instanceof Nr?d_(t,e):n}function h_(t,e){return t instanceof ra?Hc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ia extends rl{}class kr extends rl{constructor(e){super(),this.elements=e}}function f_(t,e){const n=p_(e);for(const s of t.elements)n.some(i=>mn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Nr extends rl{constructor(e){super(),this.elements=e}}function d_(t,e){let n=p_(e);for(const s of t.elements)n=n.filter(i=>!mn(i,s));return{arrayValue:{values:n}}}class ra extends rl{constructor(e,n){super(),this.serializer=e,this._t=n}}function Fd(t){return Be(t.integerValue||t.doubleValue)}function p_(t){return Eh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof kr&&s instanceof kr||n instanceof Nr&&s instanceof Nr?li(n.elements,s.elements,mn):n instanceof ra&&s instanceof ra?mn(n._t,s._t):n instanceof ia&&s instanceof ia}(t.transform,e.transform)}class zI{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ol{}function g_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new y_(t.key,hn.none()):new Jr(t.key,t.data,hn.none());{const n=t.data,s=bt.empty();let i=new We(ut.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ns(t.key,s,new Ot(i.toArray()),hn.none())}}function GI(t,e,n){t instanceof Jr?function(s,i,r){const o=s.value.clone(),a=Bd(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,r){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Bd(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(m_(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function nr(t,e,n,s){return t instanceof Jr?function(i,r,o,a){if(!Mo(i.precondition,r))return o;const l=i.value.clone(),c=Vd(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ns?function(i,r,o,a){if(!Mo(i.precondition,r))return o;const l=Vd(i.fieldTransforms,a,r),c=r.data;return c.setAll(m_(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Mo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function QI(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=h_(s.transform,i||null);r!=null&&(n===null&&(n=bt.empty()),n.set(s.field,r))}return n||null}function Ud(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&li(n,s,(i,r)=>KI(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jr extends ol{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ns extends ol{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function m_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bd(t,e,n){const s=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,qI(o,a,n[i]))}return s}function Vd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,WI(r,o,e))}return s}class y_ extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YI extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&GI(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=nr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=nr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=a_();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=g_(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,s)=>Ud(n,s))&&li(this.baseMutations,e.baseMutations,(n,s)=>Ud(n,s))}}class Ch{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Re(e.mutations.length===s.length);let i=VI;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ch(e,n,s,i)}}/**
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
 */class JI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,le;function eS(t){switch(t){default:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function __(t){if(t===void 0)return kn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ue.OK:return S.OK;case Ue.CANCELLED:return S.CANCELLED;case Ue.UNKNOWN:return S.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return S.INTERNAL;case Ue.UNAVAILABLE:return S.UNAVAILABLE;case Ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ue.NOT_FOUND:return S.NOT_FOUND;case Ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ue.ABORTED:return S.ABORTED;case Ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ue.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ih{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bo}static getOrCreateInstance(){return bo===null&&(bo=new Ih),bo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let bo=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Zr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new al(J.min(),i,l_(),On(),ie())}}class Zr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Zr(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class v_{constructor(e,n){this.targetId=e,this.Et=n}}class w_{constructor(e,n,s=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class $d{constructor(){this.At=0,this.Rt=Hd(),this.vt=gt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:G()}}),new Zr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Hd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class tS{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=On(),this.qt=jd(),this.Ut=new We(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(qc(o))if(i===0){const a=new K(o.path);this.Qt(s,a,ot.newNoDocument(a,J.min()))}else Re(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Ih.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&qc(a.target)){const l=new K(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ot.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new al(e,n,this.Ut,this.Lt,s);return this.Lt=On(),this.qt=jd(),this.Ut=new We(ge),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new $d,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new $d),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function jd(){return new qe(K.comparator)}function Hd(){return new qe(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iS=(()=>({and:"AND",or:"OR"}))();class rS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oS(t,e){return oa(t,e.toTimestamp())}function fn(t){return Re(!!t),J.fromTimestamp(function(e){const n=Xn(e);return new Ve(n.seconds,n.nanos)}(t))}function Sh(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function T_(t){const e=Oe.fromString(t);return Re(S_(e)),e}function Gc(t,e){return Sh(t.databaseId,e.path)}function Wl(t,e){const n=T_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(b_(n))}function Qc(t,e){return Sh(t.databaseId,e)}function aS(t){const e=T_(t);return e.length===4?Oe.emptyPath():b_(e)}function Yc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b_(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function lS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Re(c===void 0||typeof c=="string"),gt.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),gt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?S.UNKNOWN:__(l.code);return new q(c,l.message||"")}(o);n=new w_(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wl(t,s.document.name),r=fn(s.document.updateTime),o=s.document.createTime?fn(s.document.createTime):J.min(),a=new bt({mapValue:{fields:s.document.fields}}),l=ot.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Lo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Wl(t,s.document),r=s.readTime?fn(s.readTime):J.min(),o=ot.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Wl(t,s.document),r=s.removedTargetIds||[];n=new Lo([],r,i,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ZI(i),o=s.targetId;n=new v_(o,r)}}return n}function cS(t,e){let n;if(e instanceof Jr)n={update:Wd(t,e.key,e.value)};else if(e instanceof y_)n={delete:Gc(t,e.key)};else if(e instanceof ns)n={update:Wd(t,e.key,e.data),updateMask:_S(e.fieldMask)};else{if(!(e instanceof YI))return G();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ia)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Nr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ra)return{fieldPath:r.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function uS(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?fn(s.updateTime):fn(i);return r.isEqual(J.min())&&(r=fn(i)),new zI(r,s.transformResults||[])}(n,e))):[]}function hS(t,e){return{documents:[Qc(t,e.path)]}}function fS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Qc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return I_(yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Vs(u.field),direction:gS(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||el(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function dS(t){let e=aS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=C_(u);return h instanceof yn&&Zy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new er($s(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,el(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new sa(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new sa(f,h)}(n.endAt)),xI(e,i,o,r,a,"F",l,c)}function pS(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$s(e.unaryFilter.field);return He.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(e.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(e.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$s(e.unaryFilter.field);return He.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return He.create($s(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>C_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function gS(t){return nS[t]}function mS(t){return sS[t]}function yS(t){return iS[t]}function Vs(t){return{fieldPath:t.canonicalString()}}function $s(t){return ut.fromServerFormat(t.fieldPath)}function I_(t){return t instanceof He?function(e){if(e.op==="=="){if(Dd(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NAN"}};if(Od(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dd(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NOT_NAN"}};if(Od(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(e.field),op:mS(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(s=>I_(s));return n.length===1?n[0]:{compositeFilter:{op:yS(e.op),filters:n}}}(t):G()}function _S(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function S_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s,i,r=J.min(),o=J.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.se=e}}function wS(t){const e=dS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kc(e,e.limit,"L"):e}/**
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
 */class ES{constructor(){this.He=new TS}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Yn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class TS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new We(Oe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new We(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new fi(0)}static bn(){return new fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&nr(s.mutation,i,Ot.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=ps();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Wi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=On();const o=tr(),a=tr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ns)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),nr(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new CS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=tr();let i=new qe((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ot.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=a_();u.forEach(f=>{if(!r.has(f)){const d=g_(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(ps());let a=-1,l=r;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ie())).next(u=>({batchId:a,changes:o_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=Wi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Wi();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,u){return new tl(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ot.newInvalidDocument(c)))});let o=Wi();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&nr(c.mutation,l,Ot.empty(),Ve.now()),il(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:fn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:wS(s.bundledQuery),readTime:fn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class AS{constructor(){this.overlays=new qe(K.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ps();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=ps(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ps(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ps(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return R.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new JI(n,s));let r=this.ts.get(n);r===void 0&&(r=ie(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.es=new We(ze.ns),this.ss=new We(ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new ze(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new ze(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new K(new Oe([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new K(new Oe([])),s=new ze(n,e),i=new ze(n,e+1);let r=ie();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return K.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new We(ze.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XI(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(ge);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),R.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new ze(new K(r),0);let a=new We(ge);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return R.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new ze(n,0),i=this._s.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.Ts=e,this.docs=new qe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let s=On();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ot.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=On();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gI(pI(u),s)<=0||(i.has(u.key)||il(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,i){G()}Es(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new NS(this)}getSize(e){return R.resolve(this.size)}}class NS extends bS{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.persistence=e,this.As=new Ai(n=>Th(n),bh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ah,this.targetCount=0,this.bs=fi.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new fi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new wh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new OS(this),this.indexManager=new ES,this.remoteDocumentCache=function(s){return new kS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new vS(n),this.xs=new SS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new RS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new xS(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return R.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class xS extends yI{constructor(e){super(),this.currentSequenceNumber=e}}class Rh{constructor(e){this.persistence=e,this.$s=new Ah,this.Ms=null}static Fs(e){return new Rh(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,s=>{const i=K.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new kh(e,n.fromCache,s,i)}}/**
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
 */class PS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Ld(n))return R.resolve(null);let s=Nn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kc(n,null,"F"),s=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Kc(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Ld(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(Ad()<=de.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zc(n)),this.Fi(e,o,n,dI(i,-1)))})}$i(e,n){let s=new We(i_(e));return n.forEach((i,r)=>{il(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Ad()<=de.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",zc(n)),this.xi.getDocumentsMatchingQuery(e,n,Yn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new qe(ge),this.qi=new Ai(r=>Th(r),bh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function LS(t,e,n,s){return new MS(t,e,n,s)}async function A_(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function FS(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const y=l.docVersions.get(d);Re(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function R_(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function US(t,e){const n=ee(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(gt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=On(),c=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(BS(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(J.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function BS(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=On();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function VS(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $S(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new vs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Xc(t,e,n){const s=ee(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xr(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function qd(t,e,n){const s=ee(t);let i=J.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ee(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,Nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?r:ie())).next(a=>(jS(s,FI(e),a),{documents:a,Wi:r})))}function jS(t,e,n){let s=t.Ui.get(e)||J.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Kd{constructor(){this.activeTargetIds=l_()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HS{constructor(){this.Br=new Kd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Kd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WS{qr(e){}shutdown(){}}/**
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
 */class zd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function ql(){return Co===null?Co=268435456+Math.round(2147483648*Math.random()):Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class zS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=ql(),a=this.ao(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>($("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw ta("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Si,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=qS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=ql();return new Promise((o,a)=>{const l=new sI;l.setWithCredentials(!0),l.listenOnce(eI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hl.NO_ERROR:const u=l.getResponseJson();$(it,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Hl.TIMEOUT:$(it,`RPC '${e}' ${r} timed out`),a(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case Hl.HTTP_ERROR:const h=l.getStatus();if($(it,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(d.status);a(new q(g,d.message))}else a(new q(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(it,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(it,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=ql(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JC(),a=ZC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new nI({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");$(it,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new KS({Wr:y=>{f?$(it,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||($(it,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),$(it,`RPC '${e}' stream ${i} sending:`,y),u.send(y))},Hr:()=>u.close()}),g=(y,_,T)=>{y.listen(_,E=>{try{T(E)}catch(v){setTimeout(()=>{throw v},0)}})};return g(u,wo.EventType.OPEN,()=>{f||$(it,`RPC '${e}' stream ${i} transport opened.`)}),g(u,wo.EventType.CLOSE,()=>{f||(f=!0,$(it,`RPC '${e}' stream ${i} transport closed`),d.so())}),g(u,wo.EventType.ERROR,y=>{f||(f=!0,ta(it,`RPC '${e}' stream ${i} transport errored:`,y),d.so(new q(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,wo.EventType.MESSAGE,y=>{var _;if(!f){const T=y.data[0];Re(!!T);const E=T,v=E.error||((_=E[0])===null||_===void 0?void 0:_.error);if(v){$(it,`RPC '${e}' stream ${i} received error:`,v);const k=v.status;let U=function(te){const F=Ue[te];if(F!==void 0)return __(F)}(k),z=v.message;U===void 0&&(U=S.INTERNAL,z="Unknown error status: "+k+" with message "+v.message),f=!0,d.so(new q(U,z)),u.close()}else $(it,`RPC '${e}' stream ${i} received:`,T),d.io(T)}}),g(a,tI.STAT_EVENT,y=>{y.stat===Id.PROXY?$(it,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Id.NOPROXY&&$(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Kl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return new rS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new k_(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new q(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GS extends N_{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=lS(this.serializer,e),s=function(i){if(!("targetChange"in i))return J.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?fn(r.readTime):J.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Yc(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=qc(a)?{documents:hS(i,a)}:{query:fS(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=E_(i,r.resumeToken):r.snapshotVersion.compareTo(J.min())>0&&(o.readTime=oa(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=pS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Yc(this.serializer),n.removeTarget=e,this.Fo(n)}}class QS extends N_{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=uS(e.writeResults,e.commitTime),s=fn(e.commitTime);return this.listener.Zo(s,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Yc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cS(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(S.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(S.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class XS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(kn(n),this.ru=!1):$("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Os(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.du.add(4),await eo(l),l.mu.set("Unknown"),l.du.delete(4),await cl(l)}(this))})}),this.mu=new XS(s,i)}}async function cl(t){if(Os(t))for(const e of t.wu)await e(!0)}async function eo(t){for(const e of t.wu)await e(!1)}function O_(t,e){const n=ee(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Dh(n)?Oh(n):Ri(n).No()&&Nh(n,e))}function D_(t,e){const n=ee(t),s=Ri(n);n.fu.delete(e),s.No()&&x_(n,e),n.fu.size===0&&(s.No()?s.$o():Os(n)&&n.mu.set("Unknown"))}function Nh(t,e){t.gu.Ot(e.targetId),Ri(t).jo(e)}function x_(t,e){t.gu.Ot(e),Ri(t).Wo(e)}function Oh(t){t.gu=new tS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ri(t).start(),t.mu.ou()}function Dh(t){return Os(t)&&!Ri(t).xo()&&t.fu.size>0}function Os(t){return ee(t).du.size===0}function P_(t){t.gu=void 0}async function ZS(t){t.fu.forEach((e,n)=>{Nh(t,e)})}async function eA(t,e){P_(t),Dh(t)?(t.mu.au(e),Oh(t)):t.mu.set("Unknown")}async function tA(t,e,n){if(t.mu.set("Online"),e instanceof w_&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await aa(t,s)}else if(e instanceof Lo?t.gu.Kt(e):e instanceof v_?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const s=await R_(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),x_(i,a);const c=new vs(l.target,a,1,l.sequenceNumber);Nh(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await aa(t,s)}}async function aa(t,e,n){if(!Xr(e))throw e;t.du.add(1),await eo(t),t.mu.set("Offline"),n||(n=()=>R_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await cl(t)})}function M_(t,e){return e().catch(n=>aa(t,n,e))}async function ul(t){const e=ee(t),n=Jn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;nA(e);)try{const i=await VS(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,sA(e,i)}catch(i){await aa(e,i)}L_(e)&&F_(e)}function nA(t){return Os(t)&&t.lu.length<10}function sA(t,e){t.lu.push(e);const n=Jn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function L_(t){return Os(t)&&!Jn(t).xo()&&t.lu.length>0}function F_(t){Jn(t).start()}async function iA(t){Jn(t).tu()}async function rA(t){const e=Jn(t);for(const n of t.lu)e.Yo(n.mutations)}async function oA(t,e,n){const s=t.lu.shift(),i=Ch.from(s,e,n);await M_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ul(t)}async function aA(t,e){e&&Jn(t).Jo&&await async function(n,s){if(i=s.code,eS(i)&&i!==S.ABORTED){const r=n.lu.shift();Jn(n).Oo(),await M_(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ul(n)}var i}(t,e),L_(t)&&F_(t)}async function Gd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=Os(n);n.du.add(3),await eo(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await cl(n)}async function lA(t,e){const n=ee(t);e?(n.du.delete(2),await cl(n)):e||(n.du.add(2),await eo(n),n.mu.set("Unknown"))}function Ri(t){return t.yu||(t.yu=function(e,n,s){const i=ee(e);return i.nu(),new GS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:ZS.bind(null,t),Zr:eA.bind(null,t),zo:tA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Dh(t)?Oh(t):t.mu.set("Unknown")):(await t.yu.stop(),P_(t))})),t.yu}function Jn(t){return t.pu||(t.pu=function(e,n,s){const i=ee(e);return i.nu(),new QS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:iA.bind(null,t),Zr:aA.bind(null,t),Xo:rA.bind(null,t),Zo:oA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ul(t)):(await t.pu.stop(),t.lu.length>0&&($("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new xh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Xr(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=Wi(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.Iu=new qe(K.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class di{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new di(e,n,Zs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.Eu=void 0,this.listeners=[]}}class uA{constructor(){this.queries=new Ai(e=>s_(e),sl),this.onlineState="Unknown",this.Au=new Set}}async function Mh(t,e){const n=ee(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cA),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Ph(o,`Initialization of query '${zc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Fh(n)}async function Lh(t,e){const n=ee(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function hA(t,e){const n=ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Fh(n)}function fA(t,e,n){const s=ee(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fh(t){t.Au.forEach(e=>{e.next()})}class Uh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.key=e}}class B_{constructor(e){this.key=e}}class dA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ie(),this.mutatedKeys=ie(),this.Ku=i_(e),this.Gu=new Zs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Qd,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=il(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==y&&(s.track({type:3,doc:d}),_=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),_=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),_=!0):f&&!d&&(s.track({type:1,doc:f}),_=!0,(l||c)&&(a=!0)),_&&(d?(o=o.add(d),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new di(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Qd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ie(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new B_(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new U_(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ie();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return di.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class pA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class gA{constructor(e){this.key=e,this.ec=!1}}class mA{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ai(a=>s_(a),sl),this.ic=new Map,this.rc=new Set,this.oc=new qe(K.comparator),this.uc=new Map,this.cc=new Ah,this.ac={},this.hc=new Map,this.lc=fi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function yA(t,e){const n=AA(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await $S(n.localStore,Nn(e));n.isPrimaryClient&&O_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await _A(n,e,s,a==="current",o.resumeToken)}return i}async function _A(t,e,n,s,i){t.dc=(h,f,d)=>async function(g,y,_,T){let E=y.view.zu(_);E.Mi&&(E=await qd(g.localStore,y.query,!1).then(({documents:U})=>y.view.zu(U,E)));const v=T&&T.targetChanges.get(y.targetId),k=y.view.applyChanges(E,g.isPrimaryClient,v);return Xd(g,y.targetId,k.Yu),k.snapshot}(t,h,f,d);const r=await qd(t.localStore,e,!0),o=new dA(e,r.Wi),a=o.zu(r.documents),l=Zr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Xd(t,n,c.Yu);const u=new pA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function vA(t,e){const n=ee(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!sl(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),D_(n.remoteStore,s.targetId),Jc(n,s.targetId)}).catch(Yr)):(Jc(n,s.targetId),await Xc(n.localStore,s.targetId,!0))}async function wA(t,e,n){const s=RA(t);try{const i=await function(r,o){const a=ee(r),l=Ve.now(),c=o.reduce((f,d)=>f.add(d.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=On(),g=ie();return a.Ki.getEntries(f,c).next(y=>{d=y,d.forEach((_,T)=>{T.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const _=[];for(const T of o){const E=QI(T,u.get(T.key).overlayedDocument);E!=null&&_.push(new ns(T.key,E,Yy(E.value.mapValue),hn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:o_(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new qe(ge)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await to(s,i.changes),await ul(s.remoteStore)}catch(i){const r=Ph(i,"Failed to persist write");n.reject(r)}}async function V_(t,e){const n=ee(t);try{const s=await US(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Re(o.ec):i.removedDocuments.size>0&&(Re(o.ec),o.ec=!1))}),await to(n,s,e)}catch(s){await Yr(s)}}function Yd(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ee(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Fh(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function EA(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new qe(K.comparator);o=o.insert(r,ot.newNoDocument(r,J.min()));const a=ie().add(r),l=new al(J.min(),new Map,new We(ge),o,a);await V_(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Bh(s)}else await Xc(s.localStore,e,!1).then(()=>Jc(s,e,n)).catch(Yr)}async function TA(t,e){const n=ee(t),s=e.batch.batchId;try{const i=await FS(n.localStore,e);j_(n,s,null),$_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await to(n,i)}catch(i){await Yr(i)}}async function bA(t,e,n){const s=ee(t);try{const i=await function(r,o){const a=ee(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Re(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);j_(s,e,n),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await to(s,i)}catch(i){await Yr(i)}}function $_(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function j_(t,e,n){const s=ee(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||H_(t,s)})}function H_(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(D_(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Bh(t))}function Xd(t,e,n){for(const s of n)s instanceof U_?(t.cc.addReference(s.key,e),CA(t,s)):s instanceof B_?($("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||H_(t,s.key)):G()}function CA(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||($("SyncEngine","New document in limbo: "+n),t.rc.add(s),Bh(t))}function Bh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new K(Oe.fromString(e)),s=t.lc.next();t.uc.set(s,new gA(n)),t.oc=t.oc.insert(n,s),O_(t.remoteStore,new vs(Nn(nl(n.path)),s,2,wh.ct))}}async function to(t,e,n){const s=ee(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=kh.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ee(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Xr(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,g)}}}(s.localStore,r))}async function IA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await A_(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(S.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await to(n,s.Qi)}}function SA(t,e){const n=ee(t),s=n.uc.get(e);if(s&&s.ec)return ie().add(s.key);{let i=ie();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function AA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=V_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EA.bind(null,e),e.nc.zo=hA.bind(null,e.eventManager),e.nc.wc=fA.bind(null,e.eventManager),e}function RA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bA.bind(null,e),e}class Jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ll(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LS(this.persistence,new PS,e.initialUser,this.serializer)}createPersistence(e){return new DS(Rh.Fs,this.serializer)}createSharedClientState(e){return new HS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=IA.bind(null,this.syncEngine),await lA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uA}createDatastore(e){const n=ll(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new zS(i));var i;return function(r,o,a,l){return new YS(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Yd(this.syncEngine,a,0),o=zd.D()?new zd:new WS,new JS(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new mA(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);$("RemoteStore","RemoteStore shutting down."),n.du.add(5),await eo(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Ky.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ph(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zl(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await A_(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gd(e.remoteStore,r)),t._onlineComponents=e}function OA(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OA(n))throw n;ta("Error using user provided cache. Falling back to memory cache: "+n),await zl(t,new Jd)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await zl(t,new Jd);return t._offlineComponents}async function W_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Zd(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Zd(t,new kA))),t._onlineComponents}function xA(t){return W_(t).then(e=>e.syncEngine)}async function la(t){const e=await W_(t),n=e.eventManager;return n.onListen=yA.bind(null,e.syncEngine),n.onUnlisten=vA.bind(null,e.syncEngine),n}function PA(t,e,n={}){const s=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vh({next:h=>{r.enqueueAndForget(()=>Lh(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Uh(nl(o.path),c,{includeMetadataChanges:!0,xu:!0});return Mh(i,u)}(await la(t),t.asyncQueue,e,n,s)),s.promise}function MA(t,e,n={}){const s=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vh({next:h=>{r.enqueueAndForget(()=>Lh(i,u)),h.fromCache&&a.source==="server"?l.reject(new q(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Uh(o,c,{includeMetadataChanges:!0,xu:!0});return Mh(i,u)}(await la(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LA(t,e,n,s){if(e===!0&&s===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tp(t){if(!K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function np(t){if(K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,LA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iI;switch(n.type){case"firstParty":return new lI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ep.get(e);n&&($("ComponentProvider","Removing Datastore"),ep.delete(e),n.terminate())}(this),Promise.resolve()}}function FA(t,e,n,s={}){var i;const r=(t=jt(t,hl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ta("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=rt.MOCK_USER;else{o=Lb(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new q(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(l)}t._authCredentials=new rI(new qy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class no{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new no(this.firestore,e,this._query)}}class qn extends no{constructor(e,n,s){super(e,n,nl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new K(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function sP(t,e,...n){if(t=At(t),q_("collection","path",e),t instanceof hl){const s=Oe.fromString(e,...n);return np(s),new qn(t,null,s)}{if(!(t instanceof vt||t instanceof qn))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return np(s),new qn(t.firestore,null,s)}}function Zc(t,e,...n){if(t=At(t),arguments.length===1&&(e=Ky.A()),q_("doc","path",e),t instanceof hl){const s=Oe.fromString(e,...n);return tp(s),new vt(t,null,new K(s))}{if(!(t instanceof vt||t instanceof qn))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return tp(s),new vt(t.firestore,t instanceof qn?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new k_(this,"async_queue_retry"),this.qc=()=>{const n=Kl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new In;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Xr(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw kn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=xh.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ip(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends hl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new UA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||K_(this),this._firestoreClient.terminate()}}function BA(t,e){const n=typeof t=="object"?t:Vm(),s=typeof t=="string"?t:e||"(default)",i=W0(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=xb("firestore");r&&FA(i,...r)}return i}function fl(t){return t._firestoreClient||K_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function K_(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new EI(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new NA(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(gt.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/^__.*__$/;class $A{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jr(e,this.data,n,this.fieldTransforms)}}class z_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ns(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function G_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Hh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ca(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(G_(this.Yc)&&VA.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class jA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ll(e)}ua(e,n,s,i=!1){return new Hh({Yc:e,methodName:n,oa:s,path:ut.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Q_(t){const e=t._freezeSettings(),n=ll(t._databaseId);return new jA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HA(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);Wh("Data must be an object, but it was:",o,s);const a=Y_(s,o);let l,c;if(r.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=eu(e,h,n);if(!o.contains(f))throw new q(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);J_(u,f)||u.push(f)}l=new Ot(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new $A(new bt(a),l,c)}class gl extends jh{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gl}}function WA(t,e,n,s){const i=t.ua(1,e,n);Wh("Data must be an object, but it was:",i,s);const r=[],o=bt.empty();Ns(s,(l,c)=>{const u=qh(e,l,n);c=At(c);const h=i.na(u);if(c instanceof gl)r.push(u);else{const f=ml(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Ot(r);return new z_(o,a,i.fieldTransforms)}function qA(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[eu(e,s,n)],l=[i];if(r.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(eu(e,r[f])),l.push(r[f+1]);const c=[],u=bt.empty();for(let f=a.length-1;f>=0;--f)if(!J_(c,a[f])){const d=a[f];let g=l[f];g=At(g);const y=o.na(d);if(g instanceof gl)c.push(d);else{const _=ml(g,y);_!=null&&(c.push(d),u.set(d,_))}}const h=new Ot(c);return new z_(u,h,o.fieldTransforms)}function ml(t,e){if(X_(t=At(t)))return Wh("Unsupported field value:",e,t),Y_(t,e);if(t instanceof jh)return function(n,s){if(!G_(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ml(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=At(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:oa(s.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(n instanceof pl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pi)return{bytesValue:E_(s.serializer,n._byteString)};if(n instanceof vt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${$h(n)}`)}(t,e)}function Y_(t,e){const n={};return zy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,(s,i)=>{const r=ml(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function X_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof pl||t instanceof pi||t instanceof vt||t instanceof jh)}function Wh(t,e,n){if(!X_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=$h(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function eu(t,e,n){if((e=At(e))instanceof dl)return e._internalPath;if(typeof e=="string")return qh(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const KA=new RegExp("[~\\*/\\[\\]]");function qh(t,e,n){if(e.search(KA)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dl(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(S.INVALID_ARGUMENT,a+t+l)}function J_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ev("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zA extends Z_{data(){return super.data()}}function ev(t,e){return typeof e=="string"?qh(t,e):e instanceof dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GA{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return Ns(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new pl(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Qy(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Re(S_(s));const i=new Ar(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||kn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nv extends Z_{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ev("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Fo extends nv{data(e={}){return super.data(e)}}class sv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Fo(this._firestore,this._userDataWriter,s.key,s,new qi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:YA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){t=jt(t,vt);const e=jt(t.firestore,Cs);return PA(fl(e),t._key).then(n=>rv(e,t,n))}class zh extends GA{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function XA(t){t=jt(t,no);const e=jt(t.firestore,Cs),n=fl(e),s=new zh(e);return tv(t._query),MA(n,t._query).then(i=>new sv(e,s,t,i))}function JA(t,e,n){t=jt(t,vt);const s=jt(t.firestore,Cs),i=QA(t.converter,e,n);return iv(s,[HA(Q_(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function iP(t,e,n,...s){t=jt(t,vt);const i=jt(t.firestore,Cs),r=Q_(i);let o;return o=typeof(e=At(e))=="string"||e instanceof dl?qA(r,"updateDoc",t._key,e,n,s):WA(r,"updateDoc",t._key,e),iv(i,[o.toMutation(t._key,hn.exists(!0))])}function Gh(t,...e){var n,s,i;t=At(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ip(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ip(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof vt)c=jt(t.firestore,Cs),u=nl(t._key.path),l={next:h=>{e[o]&&e[o](rv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,no);c=jt(h.firestore,Cs),u=h._query;const f=new zh(c);l={next:d=>{e[o]&&e[o](new sv(c,f,h,d))},error:e[o+1],complete:e[o+2]},tv(t._query)}return function(h,f,d,g){const y=new Vh(g),_=new Uh(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Mh(await la(h),_)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Lh(await la(h),_))}}(fl(c),u,a,l)}function iv(t,e){return function(n,s){const i=new In;return n.asyncQueue.enqueueAndForget(async()=>wA(await xA(n),s,i)),i.promise}(fl(t),e)}function rv(t,e,n){const s=n.docs.get(e._key),i=new zh(t);return new nv(t,i,e._key,s,new qi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Si=n})(Vr),gn(new en("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Cs(new oI(n.getProvider("auth-internal")),new uI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dt(Sd,"3.10.0",t),Dt(Sd,"3.10.0","esm2017")})();var ZA="firebase",eR="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(ZA,eR,"app");function ov(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function av(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=av,lv=new bi("auth","Firebase",av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new Br("@firebase/auth");function Uo(t,...e){rp.logLevel<=de.ERROR&&rp.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,...e){throw Qh(t,...e)}function cv(t,...e){return Qh(t,...e)}function nR(t,e,n){const s=Object.assign(Object.assign({},tR()),{[e]:n});return new bi("auth","Firebase",s).create(e,{appName:t.name})}function Qh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lv.create(t,...e)}function me(t,e,...n){if(!t)throw Qh(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function ua(t,e){t||sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;function gs(t){ua(t instanceof Function,"Expected a class definition");let e=ap.get(t);return e?(ua(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ap.set(t,e),e)}function sR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iR(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||Fb()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,ua(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||xm()}get(){return rR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t,e){ua(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new so(3e4,6e4);async function hv(t,e,n,s,i={}){return fv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Yu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uv.fetch()(dv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function fv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},lR),e);try{const i=new uR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Io(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nR(t,u,c);op(t,u)}}catch(i){if(i instanceof xn)throw i;op(t,"network-request-failed",{message:String(i)})}}function dv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?aR(t.config,i):`${t.config.apiScheme}://${i}`}class uR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(cv(this.auth,"network-request-failed")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=cv(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e){return hv(t,"POST","/v1/accounts:delete",e)}async function fR(t,e){return hv(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dR(t,e=!1){const n=At(t),s=await n.getIdToken(e),i=pv(s);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ir(Gl(i.auth_time)),issuedAtTime:ir(Gl(i.iat)),expirationTime:ir(Gl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gl(t){return Number(t)*1e3}function pv(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wo(n);return i?JSON.parse(i):(Uo("Failed to decode base64 JWT payload"),null)}catch(i){return Uo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pR(t){const e=pv(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&gR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ha(t){var e;const n=t.auth,s=await t.getIdToken(),i=await tu(t,fR(n,{idToken:s}));me(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vR(r.providerUserInfo):[],a=_R(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new gv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yR(t){const e=At(t);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function vR(t){return t.map(e=>{var{providerId:n}=e,s=ov(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e){const n=await fv(t,{},async()=>{const s=Yu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=dv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return me(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await wR(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Or;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(me(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ov(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new gv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await tu(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dR(this,e)}reload(){return yR(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ha(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tu(this,hR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:k,isAnonymous:U,providerData:z,stsTokenManager:te}=n;me(v&&te,e,"internal-error");const F=Or.fromJSON(this.name,te);me(typeof v=="string",e,"internal-error"),Ln(h,e.name),Ln(f,e.name),me(typeof k=="boolean",e,"internal-error"),me(typeof U=="boolean",e,"internal-error"),Ln(d,e.name),Ln(g,e.name),Ln(y,e.name),Ln(_,e.name),Ln(T,e.name),Ln(E,e.name);const ae=new ei({uid:v,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:d,tenantId:y,stsTokenManager:F,createdAt:T,lastLoginAt:E});return z&&Array.isArray(z)&&(ae.providerData=z.map(re=>Object.assign({},re))),_&&(ae._redirectEventId=_),ae}static async _fromIdTokenResponse(e,n,s=!1){const i=new Or;i.updateFromServerResponse(n);const r=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ha(r),r}}/**
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mv.type="NONE";const cp=mv;/**
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
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ql("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ti(gs(cp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||gs(cp);const o=Ql(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ei._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ti(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ti(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ER(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SR(e))return"Blackberry";if(AR(e))return"Webos";if(TR(e))return"Safari";if((e.includes("chrome/")||bR(e))&&!e.includes("edge/"))return"Chrome";if(IR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ER(t=pn()){return/firefox\//i.test(t)}function TR(t=pn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bR(t=pn()){return/crios\//i.test(t)}function CR(t=pn()){return/iemobile/i.test(t)}function IR(t=pn()){return/android/i.test(t)}function SR(t=pn()){return/blackberry/i.test(t)}function AR(t=pn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e=[]){let n;switch(t){case"Browser":n=up(pn());break;case"Worker":n=`${up(pn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class RR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new RR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?At(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gs(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return me(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function NR(t){return At(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new so(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new so(2e3,1e4);/**
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
 */new so(3e4,6e4);/**
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
 */new so(5e3,15e3);var fp="@firebase/auth",dp="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xR(t){gn(new en("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{me(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),me(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yv(t)},u=new kR(a,l,c);return sR(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gn(new en("auth-internal",e=>{const n=NR(e.getProvider("auth").getImmediate());return(s=>new OR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(fp,dp,DR(t)),Dt(fp,dp,"esm2017")}/**
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
 */const PR=5*60;Mb("authIdTokenMaxAge");xR("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Map,LR={activated:!1,tokenObservers:[]};function _n(t){return MR.get(t)||Object.assign({},LR)}const pp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new yr,await UR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new yr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function UR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},fa=new bi("appCheck","AppCheck",BR);function VR(t){if(!_n(t).activated)throw fa.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="firebase-app-check-database",jR=1,nu="firebase-app-check-store";let So=null;function HR(){return So||(So=new Promise((t,e)=>{try{const n=indexedDB.open($R,jR);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(fa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(nu,{keyPath:"compositeKey"})}}}catch(n){e(fa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),So)}function WR(t,e){return qR(KR(t),e)}async function qR(t,e){const s=(await HR()).transaction(nu,"readwrite"),r=s.objectStore(nu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(fa.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function KR(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Br("@firebase/app-check");function gp(t,e){return Mm()?WR(t,e).catch(n=>{su.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={error:"UNKNOWN_ERROR"};function GR(t){return Fa.encodeString(JSON.stringify(t),!1)}async function iu(t,e=!1){const n=t.app;VR(n);const s=_n(n);let i=s.token,r;if(i&&!Ki(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Ki(l)?i=l:await gp(n,void 0))}if(!e&&i&&Ki(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await _n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?su.warn(l.message):su.error(l),r=l}let a;return i?r?Ki(i)?a={token:i.token,internalError:r}:a=yp(r):(a={token:i.token},s.token=i,await gp(n,i)):a=yp(r),o&&XR(n,a),a}function QR(t,e,n,s){const{app:i}=t,r=_n(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ki(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),mp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>mp(t))}function _v(t,e){const n=_n(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function mp(t){const{app:e}=t,n=_n(e);let s=n.tokenRefresher;s||(s=YR(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function YR(t){const{app:e}=t;return new FR(async()=>{const n=_n(e);let s;if(n.token?s=await iu(t,!0):s=await iu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=_n(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},pp.RETRIAL_MIN_WAIT,pp.RETRIAL_MAX_WAIT)}function XR(t,e){const n=_n(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Ki(t){return t.expireTimeMillis-Date.now()>0}function yp(t){return{token:GR(zR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=_n(this.app);for(const n of e)_v(this.app,n.next);return Promise.resolve()}}function ZR(t,e){return new JR(t,e)}function ek(t){return{getToken:e=>iu(t,e),addTokenListener:e=>QR(t,"INTERNAL",e),removeTokenListener:e=>_v(t.app,e)}}const tk="@firebase/app-check",nk="0.6.4",sk="app-check",_p="app-check-internal";function ik(){gn(new en(sk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return ZR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(_p).initialize()})),gn(new en(_p,t=>{const e=t.getProvider("app-check").getImmediate();return ek(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dt(tk,nk)}ik();const rk=Symbol("firebaseApp");function vv(t){return Ur()&&$t(rk,null)||Vm(t)}const cn=()=>{};function Yh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function ok(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ds(t){return!!t&&typeof t=="object"}const ak=Object.prototype;function lk(t){return Ds(t)&&Object.getPrototypeOf(t)===ak}function Xh(t){return Ds(t)&&t.type==="document"}function wv(t){return Ds(t)&&t.type==="collection"}function ck(t){return Xh(t)||wv(t)}function uk(t){return Ds(t)&&t.type==="query"}function hk(t){return Ds(t)&&"ref"in t}function fk(t){return Ds(t)&&typeof t.bucket=="string"}function dk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function pk(){return!!(Ur()&&$t(Rm,null))}const vp="@firebase/database",wp="0.14.4";/**
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
 */let Ev="";function gk(t){Ev=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_r(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mk(e)}}catch{}return new yk},ms=Tv("localStorage"),ru=Tv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Br("@firebase/database"),_k=function(){let t=1;return function(){return t++}}(),bv=function(t){const e=Qb(t),n=new Wb;n.update(e);const s=n.digest();return Fa.encodeByteArray(s)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=io.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let ws=null,Ep=!0;const vk=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ni.logLevel=de.VERBOSE,ws=ni.log.bind(ni),e&&ru.set("logging_enabled",!0)):typeof t=="function"?ws=t:(ws=null,ru.remove("logging_enabled"))},at=function(...t){if(Ep===!0&&(Ep=!1,ws===null&&ru.get("logging_enabled")===!0&&vk(!0)),ws){const e=io.apply(null,t);ws(e)}},ro=function(t){return function(...e){at(t,...e)}},ou=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);ni.error(e)},Is=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw ni.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+io(...t);ni.warn(e)},wk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ek=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Ss="[MAX_NAME]",ki=function(t,e){if(t===e)return 0;if(t===gi||e===Ss)return-1;if(e===gi||t===Ss)return 1;{const n=Tp(t),s=Tp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Tk=function(t,e){return t===e?0:t<e?-1:1},Li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},Jh=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=Jh(t[e[s]]);return n+="}",n},Iv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){x(!Cv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ck=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ik=new RegExp("^-?(0*)\\d{1,10}$"),Sk=-2147483648,Ak=2147483647,Tp=function(t){if(Ik.test(t)){const e=Number(t);if(e>=Sk&&e<=Ak)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class au{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}au.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="5",Av="v",Rv="s",kv="r",Nv="f",Ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dv="ls",xv="p",lu="ac",Pv="websocket",Mv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ms.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ms.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Pv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dk(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.counters_={}}incrementCounter(e,n=1){Pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl={},Xl={};function ef(t){const e=t.toString();return Yl[e]||(Yl[e]=new xk),Yl[e]}function Pk(t,e){const n=t.toString();return Xl[n]||(Xl[n]=e()),Xl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&oo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="start",Lk="close",Fk="pLPCommand",Uk="pRTLPCB",Fv="id",Uv="pw",Bv="ser",Bk="cb",Vk="seg",$k="ts",jk="d",Hk="dframe",Vv=1870,$v=30,Wk=Vv-$v,qk=25e3,Kk=3e4;class Ws{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=ef(n),this.urlFn=l=>(this.appCheckToken&&(l[lu]=this.appCheckToken),Lv(n,Mv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kk)),Ek(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bp)this.id=a,this.password=l;else if(o===Lk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[bp]="t",s[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Av]=Zh,this.transportSessionId&&(s[Rv]=this.transportSessionId),this.lastSessionId&&(s[Dv]=this.lastSessionId),this.applicationId&&(s[xv]=this.applicationId),this.appCheckToken&&(s[lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(s[kv]=Nv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bk()&&!Ck()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Om(n),i=Iv(s,Wk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Hk]="t",s[Fv]=e,s[Uv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_k(),window[Fk+this.uniqueCallbackIdentifier]=e,window[Uk+this.uniqueCallbackIdentifier]=n,this.myIFrame=tf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){at("frame writing exception"),a.stack&&at(a.stack),at(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$v+s.length<=Vv;){const o=this.pendingSegs.shift();s=s+"&"+Vk+i+"="+o.seg+"&"+$k+i+"="+o.ts+"&"+jk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=16384,Gk=45e3;let da=null;typeof MozWebSocket<"u"?da=MozWebSocket:typeof WebSocket<"u"&&(da=WebSocket);class Qt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=ef(n),this.connURL=Qt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Av]=Zh,typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(o[kv]=Nv),n&&(o[Rv]=n),s&&(o[Dv]=s),i&&(o[lu]=i),r&&(o[xv]=r),Lv(e,Pv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ms.set("previous_websocket_failure",!0);try{let s;Pm(),this.mySock=new da(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&da!==null&&!Qt.forceDisallow_}static previouslyFailed(){return ms.isInMemoryStorage||ms.get("previous_websocket_failure")===!0}markConnectionHealthy(){ms.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=_r(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Iv(n,zk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let s=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qt];else{const i=this.transports_=[];for(const r of Dr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Dr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=6e4,Yk=5e3,Xk=10*1024,Jk=100*1024,Jl="t",Cp="d",Zk="s",Ip="r",eN="e",Sp="o",Ap="a",Rp="n",kp="p",tN="h";class nN{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new Dr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jl in e){const n=e[Jl];n===Ap?this.upgradeIfSecondaryHealthy_():n===Ip?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Li("t",e),s=Li("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Li("t",e),s=Li("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Li(Jl,e);if(Cp in e){const s=e[Cp];if(n===tN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Rp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zk?this.onConnectionShutdown_(s):n===Ip?this.onReset_(s):n===eN?ou("Server Error: "+s):n===Sp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ou("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zh!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ms.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Hv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pa}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=32,Op=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new ke("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function Wv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ke(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return Bt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zv(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class iN{constructor(e,n){this.errorPrefix_=n,this.parts_=qv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ua(this.parts_[s]);Gv(this)}}function rN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ua(e),Gv(t)}function oN(t){const e=t.parts_.pop();t.byteLength_-=Ua(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gv(t){if(t.byteLength_>Op)throw new Error(t.errorPrefix_+"has a key path longer than "+Op+" bytes ("+t.byteLength_+").");if(t.parts_.length>Np)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Np+") or object contains a cycle "+ls(t))}function ls(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Hv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new nf}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=1e3,aN=60*5*1e3,Dp=30*1e3,lN=1.3,cN=3e4,uN="server_kill",xp=3;class Sn extends jv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=aN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Pm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Je(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pn(e,"w")){const s=oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ou("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cN&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new nN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{xt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(uN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),l())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],id(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xp&&(this.reconnectDelay_=Dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ev.replace(/\./g,"-")]=1,Qu()?e["framework.cordova"]=1:xm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pa.getInstance().currentlyOnline();return id(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(gi,e),i=new ue(gi,n);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class Qv extends yl{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return ki(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Ss,Ao)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Ao)}toString(){return".key"}}const si=new Qv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class hN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ro(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new hN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t,e){return ki(t.name,e.name)}function sf(t,e){return ki(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;function dN(t){cu=t}const Yv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Xv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pn(e,".sv"),"Priority must be a string or number.")}else x(t===cu||t.isEmpty(),"priority of unexpected type.");x(t===cu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xv(this.priorityNode_)}static set __childrenNodeConstructor(e){Pp=e}static get __childrenNodeConstructor(){return Pp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ce(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jv,Zv;function pN(t){Jv=t}function gN(t){Zv=t}class mN extends yl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ki(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Ss,new Ke("[PRIORITY-POST]",Zv))}makePost(e,n){const s=Jv(e);return new ue(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ht=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=Math.log(2);class _N{constructor(e){const n=r=>parseInt(Math.log(r)/yN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ga=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ge(f,h.node,Ge.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=i(l,d),y=i(d+1,c);return h=t[d],f=n?n(h):h,new Ge(f,h.node,Ge.BLACK,g,y)}},r=function(l){let c=null,u=null,h=t.length;const f=function(g,y){const _=h-g,T=h;h-=g;const E=i(_+1,T),v=t[_],k=n?n(v):v;d(new Ge(k,v.node,y,null,E))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));y?f(_,Ge.BLACK):(f(_,Ge.BLACK),f(_,Ge.RED))}return u},o=new _N(t.length),a=r(o);return new Ct(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;const Fs={};class Cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Fs&&ht,"ChildrenNode.ts has not been loaded"),Zl=Zl||new Cn({".priority":Fs},{".priority":ht}),Zl}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Pn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ga(s,e.getCompare()):a=Fs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const s=qo(this.indexes_,(i,r)=>{const o=oi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Fs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ue.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ga(a,o.getCompare())}else return Fs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ue(e.name,a))),l.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=qo(this.indexes_,i=>{if(i===Fs)return i;{const r=n.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new Cn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ui||(Ui=new ye(new Ct(sf),null,Cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ui}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ui:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ui:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{x(ce(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ht,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yv(this.getPriority().val())+":"),this.forEachChild(ht,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ao?-1:0}withIndex(e){if(e===si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ht),i=n.getIterator(ht);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===si?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vN extends ye{constructor(){super(new Ct(sf),ye.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const ao=new vN;Object.defineProperties(ue,{MIN:{value:new ue(gi,ye.EMPTY_NODE)},MAX:{value:new ue(Ss,ao)}});Qv.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;dN(ao);gN(ao);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=!0;function lt(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,lt(e))}if(!(t instanceof Array)&&wN){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=lt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ue(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=ga(n,fN,o=>o.name,sf);if(s){const o=ga(n,ht.getCompare());return new ye(r,lt(e),new Cn({".priority":o},{".priority":ht}))}else return new ye(r,lt(e),Cn.Default)}else{let n=ye.EMPTY_NODE;return Ht(t,(s,i)=>{if(Pn(t,s)&&s.substring(0,1)!=="."){const r=lt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(lt(e))}}pN(lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN extends yl{constructor(e){super(),this.indexPath_=e,x(!oe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ki(e.name,n.name):r}makePost(e,n){const s=lt(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,ao);return new ue(Ss,e)}toString(){return qv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN extends yl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ki(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=lt(e);return new ue(n,s)}toString(){return".value"}}const bN=new TN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){return{type:"value",snapshotNode:t}}function IN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function SN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new rf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ht?n="$priority":t.index_===bN?n="$value":t.index_===si?n="$key":(x(t.index_ instanceof EN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends jv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ro("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ma.getListenId_(e,s),a={};this.listens_[o]=a;const l=Lp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),oi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ma.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Lp(e._queryParams),s=e._path.toString(),i=new yr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_r(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){return{value:null,children:new Map}}function ew(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,ya());const i=t.children.get(s);e=Ae(e),ew(i,e,n)}}function uu(t,e,n){t.value!==null?n(e,t.value):kN(t,(s,i)=>{const r=new ke(e.toString()+"/"+s);uu(i,r,n)})}function kN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=10*1e3,ON=30*1e3,DN=5*60*1e3;class xN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NN(e);const s=Up+(ON-Up)*Math.random();rr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&Pn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*DN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=un.ACK_USER_WRITE,this.source=tw()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new _a(Ee(),n,this.revert)}}else return x(ce(this.path)===e,"operationForChild called for unrelated child."),new _a(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=un.OVERWRITE}operationForChild(e){return oe(this.path)?new As(this.source,Ee(),this.snap.getImmediateChild(e)):new As(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=un.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new As(this.source,Ee(),n.value):new xr(this.source,Ee(),n)}else return x(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function PN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(AN(o.childName,o.snapshotNode))}),Bi(t,i,"child_removed",e,s,n),Bi(t,i,"child_added",e,s,n),Bi(t,i,"child_moved",r,s,n),Bi(t,i,"child_changed",e,s,n),Bi(t,i,"value",e,s,n),i}function Bi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>LN(t,a,l)),o.forEach(a=>{const l=MN(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function MN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LN(t,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e){return{eventCache:t,serverCache:e}}function or(t,e,n,s){return iw(new of(e,n,s),t.serverCache)}function rw(t,e,n,s){return iw(t.eventCache,new of(e,n,s))}function hu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;const FN=()=>(ec||(ec=new Ct(Tk)),ec);class Ie{constructor(e,n=FN()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Ht(e,(s,i)=>{n=n.set(new ke(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(oe(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:Qe(new ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new Ie(null)}}set(e,n){if(oe(e))return new Ie(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Ie(null)).set(Ae(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(oe(e))return n;{const s=ce(e),r=(this.children.get(s)||new Ie(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(oe(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),Qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),Qe(n,i),s):new Ie(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ie(null))}}function ar(t,e,n){if(oe(e))return new Zt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Bt(i,e);return r=r.updateChild(o,n),new Zt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new Zt(r)}}}function Bp(t,e,n){let s=t;return Ht(n,(i,r)=>{s=ar(s,Qe(e,i),r)}),s}function Vp(t,e){if(oe(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Zt(n)}}function fu(t,e){return xs(t,e)!=null}function xs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function $p(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ht,(s,i)=>{e.push(new ue(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function Kn(t,e){if(oe(e))return t;{const n=xs(t,e);return n!=null?new Zt(new Ie(n)):new Zt(t.writeTree_.subtree(e))}}function du(t){return t.writeTree_.isEmpty()}function mi(t,e){return ow(Ee(),t.writeTree_,e)}function ow(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ow(Qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){return fw(e,t)}function UN(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ar(t.visibleWrites,e,n)),t.lastWriteId=s}function BN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function VN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$N(a,s.path)?i=!1:Yt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return jN(t),!0;if(s.snap)t.visibleWrites=Vp(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=Vp(t.visibleWrites,Qe(s.path,l))})}return!0}else return!1}function $N(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(Qe(t.path,n),e))return!0;return!1}function jN(t){t.visibleWrites=lw(t.allWrites,HN,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HN(t){return t.visible}function lw(t,e,n){let s=Zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Yt(n,o)?(a=Bt(n,o),s=ar(s,a,r.snap)):Yt(o,n)&&(a=Bt(o,n),s=ar(s,Ee(),r.snap.getChild(a)));else if(r.children){if(Yt(n,o))a=Bt(n,o),s=Bp(s,a,r.children);else if(Yt(o,n))if(a=Bt(o,n),oe(a))s=Bp(s,Ee(),r.children);else{const l=oi(r.children,ce(a));if(l){const c=l.getChild(Ae(a));s=ar(s,Ee(),c)}}}else throw Ti("WriteRecord should have .snap or .children")}}return s}function cw(t,e,n,s,i){if(!s&&!i){const r=xs(t.visibleWrites,e);if(r!=null)return r;{const o=Kn(t.visibleWrites,e);if(du(o))return n;if(n==null&&!fu(o,Ee()))return null;{const a=n||ye.EMPTY_NODE;return mi(o,a)}}}else{const r=Kn(t.visibleWrites,e);if(!i&&du(r))return n;if(!i&&n==null&&!fu(r,Ee()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Yt(c.path,e)||Yt(e,c.path))},a=lw(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return mi(a,l)}}}function WN(t,e,n){let s=ye.EMPTY_NODE;const i=xs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Kn(t.visibleWrites,e);return n.forEachChild(ht,(o,a)=>{const l=mi(Kn(r,new ke(o)),a);s=s.updateImmediateChild(o,l)}),$p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Kn(t.visibleWrites,e);return $p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qN(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(fu(t.visibleWrites,r))return null;{const o=Kn(t.visibleWrites,r);return du(o)?i.getChild(n):mi(o,i.getChild(n))}}function KN(t,e,n,s){const i=Qe(e,n),r=xs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Kn(t.visibleWrites,i);return mi(o,s.getNode().getImmediateChild(n))}else return null}function zN(t,e){return xs(t.visibleWrites,e)}function GN(t,e,n,s,i,r,o){let a;const l=Kn(t.visibleWrites,e),c=xs(l,Ee());if(c!=null)a=c;else if(n!=null)a=mi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function QN(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function pu(t,e,n,s){return cw(t.writeTree,t.treePath,e,n,s)}function uw(t,e){return WN(t.writeTree,t.treePath,e)}function jp(t,e,n,s){return qN(t.writeTree,t.treePath,e,n,s)}function va(t,e){return zN(t.writeTree,Qe(t.treePath,e))}function YN(t,e,n,s,i,r){return GN(t.writeTree,t.treePath,e,n,s,i,r)}function af(t,e,n){return KN(t.writeTree,t.treePath,e,n)}function hw(t,e){return fw(Qe(t.treePath,e),t.writeTree)}function fw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,SN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,IN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dw=new JN;class lf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new of(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return af(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rs(this.viewCache_),r=YN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function ZN(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eO(t,e,n,s,i){const r=new XN;let o,a;if(n.type===un.OVERWRITE){const c=n;c.source.fromUser?o=gu(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=wa(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===un.MERGE){const c=n;c.source.fromUser?o=nO(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=mu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===un.ACK_USER_WRITE){const c=n;c.revert?o=rO(t,e,c.path,s,i,r):o=sO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===un.LISTEN_COMPLETE)o=iO(t,e,n.path,s,r);else throw Ti("Unknown operation type: "+n.type);const l=r.getChanges();return tO(e,o,l),{viewCache:o,changes:l}}function tO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(CN(hu(e)))}}function pw(t,e,n,s,i,r){const o=e.eventCache;if(va(s,n)!=null)return e;{let a,l;if(oe(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rs(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=uw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=pu(s,Rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(n);if(c===".priority"){x(Zn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=jp(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=af(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return or(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function wa(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ce(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const g=Ae(n),_=l.getNode().getImmediateChild(d).updateChild(g,s);d===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),d,_,g,dw,null)}const h=rw(e,c,l.isFullyInitialized()||oe(n),u.filtersNodes()),f=new lf(i,h,r);return pw(t,h,n,i,f,a)}function gu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new lf(i,e,r);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=or(e,c,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=or(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ae(n),d=a.getNode().getImmediateChild(h);let g;if(oe(f))g=s;else{const y=u.getCompleteChild(h);y!=null?Wv(f)===".priority"&&y.getChild(Kv(f)).isEmpty()?g=y:g=y.updateChild(f,s):g=ye.EMPTY_NODE}if(d.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=or(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hp(t,e){return t.eventCache.isCompleteForChild(e)}function nO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Qe(n,l);Hp(e,ce(u))&&(a=gu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Qe(n,l);Hp(e,ce(u))||(a=gu(t,a,u,c,i,r,o))}),a}function Wp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;oe(n)?c=s:c=new Ie(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Wp(t,d,f);l=wa(t,l,new ke(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),y=Wp(t,g,f);l=wa(t,l,new ke(h),y,i,r,o,a)}}),l}function sO(t,e,n,s,i,r,o){if(va(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wa(t,e,n,l.getNode().getChild(n),i,r,a,o);if(oe(n)){let c=new Ie(null);return l.getNode().forEachChild(si,(u,h)=>{c=c.set(new ke(u),h)}),mu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const f=Qe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),mu(t,e,n,c,i,r,a,o)}}function iO(t,e,n,s,i){const r=e.serverCache,o=rw(e,r.getNode(),r.isFullyInitialized()||oe(n),r.isFiltered());return pw(t,o,n,s,dw,i)}function rO(t,e,n,s,i,r){let o;if(va(s,n)!=null)return e;{const a=new lf(s,e,i),l=e.eventCache.getNode();let c;if(oe(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pu(s,Rs(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=uw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ce(n);let h=af(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,Ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pu(s,Rs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||va(s,Ee())!=null,or(e,c,o,t.filter.filtersNodes())}}function oO(t,e){const n=Rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function qp(t,e,n,s){e.type===un.MERGE&&e.source.queryId!==null&&(x(Rs(t.viewCache_),"We should always have a full cache before handling merges"),x(hu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=eO(t.processor_,i,e,n,s);return ZN(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,aO(t,r.changes,r.viewCache.eventCache.getNode(),null)}function aO(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return PN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;function lO(t){x(!Kp,"__referenceConstructor has already been defined"),Kp=t}function cf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),qp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(qp(o,e,n,s));return r}}function uf(t,e){let n=null;for(const s of t.views.values())n=n||oO(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;function cO(t){x(!zp,"__referenceConstructor has already been defined"),zp=t}class Gp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=QN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uO(t,e,n,s,i){return UN(t.pendingWriteTree_,e,n,s,i),i?vl(t,new As(tw(),e,n)):[]}function qs(t,e,n=!1){const s=BN(t.pendingWriteTree_,e);if(VN(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(Ee(),!0):Ht(s.children,o=>{r=r.set(new ke(o),!0)}),vl(t,new _a(s.path,r,n))}else return[]}function _l(t,e,n){return vl(t,new As(nw(),e,n))}function hO(t,e,n){const s=Ie.fromObject(n);return vl(t,new xr(nw(),e,s))}function fO(t,e,n,s){const i=_w(t,s);if(i!=null){const r=vw(i),o=r.path,a=r.queryId,l=Bt(o,e),c=new As(sw(a),l,n);return ww(t,o,c)}else return[]}function dO(t,e,n,s){const i=_w(t,s);if(i){const r=vw(i),o=r.path,a=r.queryId,l=Bt(o,e),c=Ie.fromObject(n),u=new xr(sw(a),l,c);return ww(t,o,u)}else return[]}function gw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bt(o,e),c=uf(a,l);if(c)return c});return cw(i,e,r,n,!0)}function vl(t,e){return mw(e,t.syncPointTree_,null,aw(t.pendingWriteTree_,Ee()))}function mw(t,e,n,s){if(oe(t.path))return yw(t,e,n,s);{const i=e.get(Ee());n==null&&i!=null&&(n=uf(i,Ee()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hw(s,o);r=r.concat(mw(a,l,c,u))}return i&&(r=r.concat(cf(i,t,s,n))),r}}function yw(t,e,n,s){const i=e.get(Ee());n==null&&i!=null&&(n=uf(i,Ee()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hw(s,o),u=t.operationForChild(o);u&&(r=r.concat(yw(u,a,l,c)))}),i&&(r=r.concat(cf(i,t,s,n))),r}function _w(t,e){return t.tagToQueryMap.get(e)}function vw(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function ww(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=aw(t.pendingWriteTree_,e);return cf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hf(n)}node(){return this.node_}}class ff{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new ff(this.syncTree_,n)}node(){return gw(this.syncTree_,this.path_)}}const pO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mO(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},mO=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yO=function(t,e,n,s){return df(e,new ff(n,t),s)},_O=function(t,e,n){return df(t,new hf(e),n)};function df(t,e,n){const s=t.getPriority().val(),i=Qp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,lt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ht,(a,l)=>{const c=df(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gf(t,e){let n=e instanceof ke?e:new ke(e),s=t,i=ce(n);for(;i!==null;){const r=oi(s.node.children,i)||{children:{},childCount:0};s=new pf(i,s,r),n=Ae(n),i=ce(n)}return s}function Ni(t){return t.node.value}function Ew(t,e){t.node.value=e,yu(t)}function Tw(t){return t.node.childCount>0}function vO(t){return Ni(t)===void 0&&!Tw(t)}function wl(t,e){Ht(t.node.children,(n,s)=>{e(new pf(n,t,s))})}function bw(t,e,n,s){n&&!s&&e(t),wl(t,i=>{bw(i,e,!0,s)}),n&&s&&e(t)}function wO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function lo(t){return new ke(t.parent===null?t.name:lo(t.parent)+"/"+t.name)}function yu(t){t.parent!==null&&EO(t.parent,t.name,t)}function EO(t,e,n){const s=vO(n),i=Pn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,yu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=/[\[\].#$\/\u0000-\u001F\u007F]/,bO=/[\[\].#$\u0000-\u001F\u007F]/,tc=10*1024*1024,Cw=function(t){return typeof t=="string"&&t.length!==0&&!TO.test(t)},CO=function(t){return typeof t=="string"&&t.length!==0&&!bO.test(t)},IO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CO(t)},Iw=function(t,e,n){const s=n instanceof ke?new iN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ls(s));if(typeof e=="function")throw new Error(t+"contains a function "+ls(s)+" with contents = "+e.toString());if(Cv(e))throw new Error(t+"contains "+e.toString()+" "+ls(s));if(typeof e=="string"&&e.length>tc/3&&Ua(e)>tc)throw new Error(t+"contains a string greater than "+tc+" utf8 bytes "+ls(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Cw(o)))throw new Error(t+" contains an invalid key ("+o+") "+ls(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rN(s,o),Iw(t,a,s),oN(s)}),i&&r)throw new Error(t+' contains ".value" child '+ls(s)+" in addition to actual children.")}},SO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IO(n))throw new Error(Gb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RO(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!zv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ps(t,e,n){RO(t,n),kO(t,s=>Yt(s,e)||Yt(e,s))}function kO(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(NO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function NO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ws&&at("event: "+n.toString()),oo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="repo_interrupt",DO=25;class xO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ya(),this.transactionQueueTree_=new pf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PO(t,e,n){if(t.stats_=ef(t.repoInfo_),t.forceRestClient_||Rk())t.server_=new ma(t.repoInfo_,(s,i,r,o)=>{Yp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(s,i,r,o)=>{Yp(t,s,i,r,o)},s=>{Xp(t,s)},s=>{LO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Pk(t.repoInfo_,()=>new xN(t.stats_,t.server_)),t.infoData_=new RN,t.infoSyncTree_=new Gp({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_l(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),mf(t,"connected",!1),t.serverSyncTree_=new Gp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ps(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function MO(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sw(t){return pO({timestamp:MO(t)})}function Yp(t,e,n,s,i){t.dataUpdateCount++;const r=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=qo(n,c=>lt(c));o=dO(t.serverSyncTree_,r,l,i)}else{const l=lt(n);o=fO(t.serverSyncTree_,r,l,i)}else if(s){const l=qo(n,c=>lt(c));o=hO(t.serverSyncTree_,r,l)}else{const l=lt(n);o=_l(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=_f(t,r)),Ps(t.eventQueue_,a,o)}function Xp(t,e){mf(t,"connected",e),e===!1&&UO(t)}function LO(t,e){Ht(e,(n,s)=>{mf(t,n,s)})}function mf(t,e,n){const s=new ke("/.info/"+e),i=lt(n);t.infoData_.updateSnapshot(s,i);const r=_l(t.infoSyncTree_,s,i);Ps(t.eventQueue_,s,r)}function FO(t){return t.nextWriteId_++}function UO(t){Aw(t,"onDisconnectEvents");const e=Sw(t),n=ya();uu(t.onDisconnect_,Ee(),(i,r)=>{const o=yO(i,r,t.serverSyncTree_,e);ew(n,i,o)});let s=[];uu(n,Ee(),(i,r)=>{s=s.concat(_l(t.serverSyncTree_,i,r));const o=jO(t,i);_f(t,o)}),t.onDisconnect_=ya(),Ps(t.eventQueue_,Ee(),s)}function BO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OO)}function Aw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),at(n,...e)}function Rw(t,e,n){return gw(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function yf(t,e=t.transactionQueueTree_){if(e||El(t,e),Ni(e)){const n=Nw(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VO(t,lo(e),n)}else Tw(e)&&wl(e,n=>{yf(t,n)})}function VO(t,e,n){const s=n.map(c=>c.currentWriteId),i=Rw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Aw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(qs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();El(t,gf(t.transactionQueueTree_,e)),yf(t,t.transactionQueueTree_),Ps(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)oo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}_f(t,e)}},o)}function _f(t,e){const n=kw(t,e),s=lo(n),i=Nw(t,n);return $O(t,i,s),s}function $O(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=DO)u=!0,h="maxretry",i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Rw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Iw("transaction failed: Data returned ",d,l.path);let g=lt(d);typeof d=="object"&&d!=null&&Pn(d,".priority")||(g=g.updatePriority(f.getPriority()));const _=l.currentWriteId,T=Sw(t),E=_O(g,f,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=FO(t),o.splice(o.indexOf(_),1),i=i.concat(uO(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(qs(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0))}Ps(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}El(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)oo(s[a]);yf(t,t.transactionQueueTree_)}function kw(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&Ni(s)===void 0;)s=gf(s,n),e=Ae(e),n=ce(e);return s}function Nw(t,e){const n=[];return Ow(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ow(t,e,n){const s=Ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);wl(e,i=>{Ow(t,i,n)})}function El(t,e){const n=Ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ew(e,n.length>0?n:void 0)}wl(e,s=>{El(t,s)})}function jO(t,e){const n=lo(kw(t,e)),s=gf(t.transactionQueueTree_,e);return wO(s,i=>{nc(t,i)}),nc(t,s),bw(s,i=>{nc(t,i)}),n}function nc(t,e){const n=Ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ew(e,void 0):n.length=r+1,Ps(t.eventQueue_,lo(e),i);for(let o=0;o<s.length;o++)oo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jp=function(t,e){const n=qO(t),s=n.namespace;n.domain==="firebase.com"&&Is(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Is("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ok(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ke(n.pathString)}},qO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HO(t.substring(u,h)));const f=WO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return oe(this._path)?null:Wv(this._path)}get ref(){return new Oi(this._repo,this._path)}get _queryIdentifier(){const e=Fp(this._queryParams),n=Jh(e);return n==="{}"?"default":n}get _queryObject(){return Fp(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof vf))return!1;const n=this._repo===e._repo,s=zv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sN(this._path)}}class Oi extends vf{constructor(e,n){super(e,n,new rf,!1)}get parent(){const e=Kv(this._path);return e===null?null:new Oi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}lO(Oi);cO(Oi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="FIREBASE_DATABASE_EMULATOR_HOST",_u={};let zO=!1;function GO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Is("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jp(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[KO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Jp(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new au(au.OWNER):new Nk(t.name,t.options,e);SO("Invalid Firebase Database URL",o),oe(o.path)||Is("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YO(a,t,u,new kk(t.name,n));return new XO(h,t)}function QO(t,e){const n=_u[e];(!n||n[t.key]!==t)&&Is(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BO(t),delete n[t.key]}function YO(t,e,n,s){let i=_u[e.name];i||(i={},_u[e.name]=i);let r=i[t.toURLString()];return r&&Is("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xO(t,zO,n,s),i[t.toURLString()]=r,r}class XO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oi(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Is("Cannot call "+e+" on a deleted database.")}}/**
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
 */function JO(t){gk(Vr),gn(new en("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return GO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(vp,wp,t),Dt(vp,wp,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebasestorage.googleapis.com",ZO="storageBucket",eD=2*60*1e3,tD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends xn{constructor(e,n,s=0){super(sc(e),`Firebase Storage: ${n} (${sc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vn||(vn={}));function sc(t){return"storage/"+t}function nD(){const t="An unknown error occurred, please check the error payload for server response.";return new wn(vn.UNKNOWN,t)}function sD(){return new wn(vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iD(){return new wn(vn.CANCELED,"User canceled the upload/download.")}function rD(t){return new wn(vn.INVALID_URL,"Invalid URL '"+t+"'.")}function oD(t){return new wn(vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zp(t){return new wn(vn.INVALID_ARGUMENT,t)}function xw(){return new wn(vn.APP_DELETED,"The Firebase app was deleted.")}function aD(t){return new wn(vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(s.path==="")return s;throw oD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=n===Dw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",T=new RegExp(`^https?://${y}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:r},{regex:d,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<v.length;k++){const U=v[k],z=U.regex.exec(e);if(z){const te=z[U.indices.bucket];let F=z[U.indices.path];F||(F=""),s=new Xt(te,F),U.postModify(s);break}}if(s==null)throw rD(e);return s}}class lD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(d,l())},_)}function f(){r&&clearTimeout(r)}function d(_,...T){if(c){f();return}if(_){f(),u.call(null,_,...T);return}if(l()||o){f(),u.call(null,_,...T);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,h(v)}let g=!1;function y(_){g||(g=!0,f(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function uD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){return t!==void 0}function eg(t,e,n,s){if(s<e)throw Zp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Zp(`Invalid value for '${t}'. Expected ${n} or less.`)}function fD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ea||(Ea={}));/**
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
 */function dD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ko(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ea.NO_ERROR,l=r.getStatus();if(!a||dD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ea.ABORT;s(!1,new ko(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ko(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=nD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xw():iD();o(l)}else{const l=sD();o(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=cD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function gD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _D(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vD(t,e,n,s,i,r,o=!0){const a=fD(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yD(c,e),gD(c,n),mD(c,r),_D(c,s),new pD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ED(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ta{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ta(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ED(this._location.path)}get storage(){return this._service}get parent(){const e=wD(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new Ta(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aD(e)}}function tg(t,e){const n=e==null?void 0:e[ZO];return n==null?null:Xt.makeFromBucketSpec(n,t)}class TD{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Dw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eD,this._maxUploadRetryTime=tD,this._requests=new Set,i!=null?this._bucket=Xt.makeFromBucketSpec(i,this._host):this._bucket=tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ta(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new lD(xw());{const o=vD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ng="@firebase/storage",sg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="storage";function CD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new TD(n,s,i,e,Vr)}function ID(){gn(new en(bD,CD,"PUBLIC").setMultipleInstances(!0)),Dt(ng,sg,""),Dt(ng,sg,"esm2017")}ID();const ic=new WeakMap;function Pw(t,e){return ic.has(e)||ic.set(e,t||{f:{},r:{},s:{},u:{}}),ic.get(e)}function SD(t,e,n,s){if(!t)return n;const[i,r]=Mw(t);if(!i)return n;const o=Pw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function AD(t,e,n,s){if(!t)return;const[i,r]=Mw(t);if(!i)return;const o=Pw(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(cn),a}function Mw(t){return ck(t)||uk(t)?["f",t.path]:hk(t)?["r",t.toString()]:fk(t)?["s",t.toString()]:[]}const rc=new WeakMap;function RD(t,e,n){const s=vv();rc.has(s)||rc.set(s,new Map);const i=rc.get(s),r=AD(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):cn}const kD={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function vu(t,e,n,s){if(!lk(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const g=Object.getOwnPropertyDescriptor(a,d);g&&!g.enumerable&&Object.defineProperty(h,d,g)});for(const d in a){const g=a[d];if(g==null||g instanceof Date||g instanceof Ve||g instanceof pl)h[d]=g;else if(Xh(g)){const y=c+d;h[d]=y in n?l[d]:g.path,f[y]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[d]=Array(g.length);for(let y=0;y<g.length;y++){const _=g[y];_&&_.path in r&&(h[d][y]=r[_.path])}o(g,l[d]||h[d],c+d+".",[h[d],f])}else Ds(g)?(h[d]={},o(g,l[d],c+d+".",[h[d],f])):h[d]=g}}return o(t,e,"",i),i}const wf={reset:!1,wait:!0,maxRefDepth:2,converter:kD,snapshotOptions:{serverTimestamps:"estimate"}};function ba(t){for(const e in t)t[e].unsub()}function wu(t,e,n,s,i,r,o,a,l){const[c,u]=vu(s.data(t.snapshotOptions),Yh(e,n),i,t);r.set(e,n,c),Eu(t,e,n,i,u,r,o,a,l)}function ND({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=cn;return a.once?Kh(t).then(u=>{u.exists()?wu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Gh(t,u=>{u.exists()?wu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),ba(l)}}function Eu(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function g(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const _=s[y],T=i[y],E=`${n}.${y}`;if(d[E]=!0,_)if(_.path!==T.path)_.unsub();else return;s[y]={data:()=>Yh(e,E),unsub:ND({ref:T,target:e,path:E,depth:o,ops:r,resolve:g.bind(null,E),reject:l},t),path:T.path}})}function OD(t,e,n,s,i,r){const o=Object.assign({},wf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Qs(c?[]:t.value);c||n.set(t,h,[]);const d=s;let g,y=cn;const _=[],T={added:({newIndex:v,doc:k})=>{_.splice(v,0,Object.create(null));const U=_[v],[z,te]=vu(k.data(l),void 0,U,o);n.add(yt(f),v,z),Eu(o,f,`${h}.${v}`,U,te,n,0,s.bind(null,k),i)},modified:({oldIndex:v,newIndex:k,doc:U})=>{const z=yt(f),te=_[v],F=z[v],[ae,re]=vu(U.data(l),F,te,o);_.splice(k,0,te),n.remove(z,v),n.add(z,k,ae),Eu(o,f,`${h}.${k}`,te,re,n,0,s,i)},removed:({oldIndex:v})=>{const k=yt(f);n.remove(k,v),ba(_.splice(v,1)[0])}};function E(v){const k=v.docChanges(a);if(!g&&k.length){g=!0;let U=0;const z=k.length,te=Object.create(null);for(let F=0;F<z;F++)te[k[F].doc.id]=!0;s=F=>{F&&F.id in te&&++U>=z&&(c&&(n.set(t,h,yt(f)),f=t),d(yt(f)),s=cn)}}k.forEach(U=>{T[U.type](U)}),k.length||(c&&(n.set(t,h,yt(f)),f=t),s(yt(f)))}return u?XA(e).then(E).catch(i):y=Gh(e,E,i),v=>{if(y(),v){const k=typeof v=="function"?v():[];n.set(t,h,k)}_.forEach(ba)}}function DD(t,e,n,s,i,r){const o=Object.assign({},wf,r),a="value",l=Object.create(null);s=dk(s,()=>Yh(t,a));let c=cn;function u(h){h.exists()?wu(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Kh(e).then(u).catch(i):c=Gh(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}ba(l)}}function Lw(t,e){let n=cn;const s=Object.assign({},wf,e),i=yt(t),r=s.target||Qs();pk()&&(s.once=!0);const o=SD(i,s.ssrKey,r.value,vv());r.value=o;let l=!(wv(i)?(o||[]).length>0:o!==void 0);const c=Qs(!1),u=Qs(),h=jg(),f=Sg();let d=cn;function g(){let T=yt(t);const E=new Promise((v,k)=>{if(n(s.reset),!T)return n=cn,v(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Xh(T)?DD:OD)(r,T,xD,v,k,s)}).catch(v=>(h.value===E&&(u.value=v),Promise.reject(v))).finally(()=>{h.value===E&&(c.value=!1)});h.value=E}let y=cn;Ze(t)&&(y=Gi(t,g)),g(),i&&(d=RD(h.value,i,s.ssrKey)),Ur()&&cm(()=>h.value),f&&hE(_);function _(T=s.reset){y(),d(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>_}})}const xD={set:(t,e,n)=>ok(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function rP(t,e){return Lw(t,{target:Qs([]),...e})}function PD(t,e){return Lw(t,e)}const MD=Bm({apiKey:"AIzaSyBc2RPaqv4pFK7BnkU9ipHiDHPVU_armEE",authDomain:"psycat-35173.firebaseapp.com",projectId:"psycat-35173",storageBucket:"psycat-35173.appspot.com",messagingSenderId:"109673373606",appId:"1:109673373606:web:596fd11a48706cd9563967",measurementId:"G-VSVXVBRR7H"}),Tu=BA(MD),LD=Zc(Tu,"counter","counter");PD(LD);const FD={__name:"MainLoader",async setup(t){let e,n,s=window.localStorage.getItem("cid");s||(s=Eb(),window.localStorage.setItem("cid",s));const i=async()=>{let o=window.browserInfo;o.datetime=new Date;let a=s+"_"+bb()+"_"+Tb();return await JA(Zc(Tu,"users",a),o),window.localStorage.setItem("uid",a),a};let r=window.localStorage.getItem("uid");return r?([e,n]=Rl(()=>Kh(Zc(Tu,"users",r))),e=await e,n(),e).exists()||(r=([e,n]=Rl(()=>i()),e=await e,n(),e)):r=([e,n]=Rl(()=>i()),e=await e,n(),e),zi("uid",r),(o,a)=>{const l=vT("router-view");return Fr(),Pa(l)}}},UD={__name:"App",setup(t){return(e,n)=>(Fr(),Pa(eT,null,{fallback:gc(()=>[Cm(" Загрузка... ")]),default:gc(()=>[tt(FD)]),_:1}))}};const BD="modulepreload",VD=function(t){return"/psycat/"+t},ig={},rn=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=VD(r),r in ig)return;ig[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":BD,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof window<"u";function $D(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function oc(t,e){const n={};for(const s in e){const i=e[s];n[s]=tn(i)?i.map(t):t(i)}return n}const lr=()=>{},tn=Array.isArray,jD=/\/$/,HD=t=>t.replace(jD,"");function ac(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zD(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function WD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qD(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&yi(e.matched[s],n.matched[i])&&Fw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KD(t[n],e[n]))return!1;return!0}function KD(t,e){return tn(t)?og(t,e):tn(e)?og(e,t):t===e}function og(t,e){return tn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Pr;(function(t){t.pop="pop",t.push="push"})(Pr||(Pr={}));var cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cr||(cr={}));function GD(t){if(!t)if(js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HD(t)}const QD=/^[^#]+#/;function YD(t,e){return t.replace(QD,"#")+e}function XD(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Tl=()=>({left:window.pageXOffset,top:window.pageYOffset});function JD(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=XD(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ag(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function ZD(t,e){bu.set(t,e)}function ex(t){const e=bu.get(t);return bu.delete(t),e}let tx=()=>location.protocol+"//"+location.host;function Uw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),rg(l,"")}return rg(n,t)+s+i}function nx(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=Uw(t,location),g=n.value,y=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}_=y?f.position-y.position:0}else s(d);i.forEach(T=>{T(n.value,g,{delta:_,type:Pr.pop,direction:_?_>0?cr.forward:cr.back:cr.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(_e({},f.state,{scroll:Tl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function lg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Tl():null}}function sx(t){const{history:e,location:n}=window,s={value:Uw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tx()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=_e({},e.state,lg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=_e({},i.value,e.state,{forward:l,scroll:Tl()});r(u.current,u,!0);const h=_e({},lg(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function ix(t){t=GD(t);const e=sx(t),n=nx(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=_e({location:"",base:t,go:s,createHref:YD.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function rx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ix(t)}function ox(t){return typeof t=="string"||t&&typeof t=="object"}function Bw(t){return typeof t=="string"||typeof t=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vw=Symbol("");var cg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cg||(cg={}));function _i(t,e){return _e(new Error,{type:t,[Vw]:!0},e)}function En(t,e){return t instanceof Error&&Vw in t&&(e==null||!!(t.type&e))}const ug="[^/]+?",ax={sensitive:!1,strict:!1,start:!0,end:!0},lx=/[.+*?^${}()[\]/\\]/g;function cx(t,e){const n=_e({},ax,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(lx,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:y,optional:_,regexp:T}=f;r.push({name:g,repeatable:y,optional:_});const E=T||ug;if(E!==ug){d+=10;try{new RegExp(`(${E})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+k.message)}}let v=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(v=_&&c.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),i+=v,d+=20,_&&(d+=-8),y&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:y,optional:_}=d,T=g in c?c[g]:"";if(tn(T)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=tn(T)?T.join("/"):T;if(!E)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function ux(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hx(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ux(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hg(s))return 1;if(hg(i))return-1}return i.length-s.length}function hg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fx={type:0,value:""},dx=/[a-zA-Z0-9_]/;function px(t){if(!t)return[[]];if(t==="/")return[[fx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:dx.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function gx(t,e,n){const s=cx(px(t.path),n),i=_e(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function mx(t,e){const n=[],s=new Map;e=pg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,g=yx(u);g.aliasOf=f&&f.record;const y=pg(e,u),_=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of v)_.push(_e({},g,{components:f?f.record.components:g.components,path:k,aliasOf:f?f.record:g}))}let T,E;for(const v of _){const{path:k}=v;if(h&&k[0]!=="/"){const U=h.record.path,z=U[U.length-1]==="/"?"":"/";v.path=h.record.path+(k&&z+k)}if(T=gx(v,h,y),f?f.alias.push(T):(E=E||T,E!==T&&E.alias.push(T),d&&u.name&&!dg(T)&&o(u.name)),g.children){const U=g.children;for(let z=0;z<U.length;z++)r(U[z],T,f&&f.children[z])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return E?()=>{o(E)}:lr}function o(u){if(Bw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&hx(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$w(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!dg(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},g,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw _i(1,{location:u});y=f.record.name,d=_e(fg(h.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&fg(u.params,f.keys.map(E=>E.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(E=>E.re.test(g)),f&&(d=f.parse(g),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!f)throw _i(1,{location:u,currentLocation:h});y=f.record.name,d=_e({},h.params,u.params),g=f.stringify(d)}const _=[];let T=f;for(;T;)_.unshift(T.record),T=T.parent;return{name:y,path:g,params:d,matched:_,meta:vx(_)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function yx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_x(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _x(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function dg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vx(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function pg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function $w(t,e){return e.children.some(n=>n===t||$w(t,n))}const jw=/#/g,wx=/&/g,Ex=/\//g,Tx=/=/g,bx=/\?/g,Hw=/\+/g,Cx=/%5B/g,Ix=/%5D/g,Ww=/%5E/g,Sx=/%60/g,qw=/%7B/g,Ax=/%7C/g,Kw=/%7D/g,Rx=/%20/g;function Ef(t){return encodeURI(""+t).replace(Ax,"|").replace(Cx,"[").replace(Ix,"]")}function kx(t){return Ef(t).replace(qw,"{").replace(Kw,"}").replace(Ww,"^")}function Cu(t){return Ef(t).replace(Hw,"%2B").replace(Rx,"+").replace(jw,"%23").replace(wx,"%26").replace(Sx,"`").replace(qw,"{").replace(Kw,"}").replace(Ww,"^")}function Nx(t){return Cu(t).replace(Tx,"%3D")}function Ox(t){return Ef(t).replace(jw,"%23").replace(bx,"%3F")}function Dx(t){return t==null?"":Ox(t).replace(Ex,"%2F")}function Ca(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xx(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Hw," "),o=r.indexOf("="),a=Ca(o<0?r:r.slice(0,o)),l=o<0?null:Ca(r.slice(o+1));if(a in e){let c=e[a];tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gg(t){let e="";for(let n in t){const s=t[n];if(n=Nx(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(s)?s.map(r=>r&&Cu(r)):[s&&Cu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Px(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Mx=Symbol(""),mg=Symbol(""),bl=Symbol(""),zw=Symbol(""),Iu=Symbol("");function Vi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(_i(4,{from:n,to:e})):h instanceof Error?a(h):ox(h)?a(_i(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function lc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Lx(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=$D(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Bn(f,n,s,r,o)()}))}}return i}function Lx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yg(t){const e=$t(bl),n=$t(zw),s=Ft(()=>e.resolve(yt(t.to))),i=Ft(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(yi.bind(null,u));if(f>-1)return f;const d=_g(l[c-2]);return c>1&&_g(u)===d&&h[h.length-1].path!==d?h.findIndex(yi.bind(null,l[c-2])):f}),r=Ft(()=>i.value>-1&&Vx(n.params,s.value.params)),o=Ft(()=>i.value>-1&&i.value===n.matched.length-1&&Fw(n.params,s.value.params));function a(l={}){return Bx(l)?e[yt(t.replace)?"replace":"push"](yt(t.to)).catch(lr):Promise.resolve()}return{route:s,href:Ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Fx=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yg,setup(t,{slots:e}){const n=Mr(yg(t)),{options:s}=$t(bl),i=Ft(()=>({[vg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ux=Fx;function Bx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Vx(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function _g(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vg=(t,e,n)=>t??e??n,$x=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(Iu),i=Ft(()=>t.route||s.value),r=$t(mg,0),o=Ft(()=>{let c=yt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ft(()=>i.value.matched[o.value]);zi(mg,Ft(()=>o.value+1)),zi(Mx,a),zi(Iu,i);const l=Qs();return Gi(()=>[l.value,a.value,t.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!yi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return wg(n.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,_=Am(f,_e({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wg(n.default,{Component:_,route:c})||_}}});function wg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jx=$x;function Hx(t){const e=mx(t.routes,t),n=t.parseQuery||xx,s=t.stringifyQuery||gg,i=t.history,r=Vi(),o=Vi(),a=Vi(),l=jg(Fn);let c=Fn;js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,C=>""+C),h=oc.bind(null,Dx),f=oc.bind(null,Ca);function d(C,L){let P,j;return Bw(C)?(P=e.getRecordMatcher(C),j=L):j=C,e.addRoute(j,P)}function g(C){const L=e.getRecordMatcher(C);L&&e.removeRoute(L)}function y(){return e.getRoutes().map(C=>C.record)}function _(C){return!!e.getRecordMatcher(C)}function T(C,L){if(L=_e({},L||l.value),typeof C=="string"){const p=ac(n,C,L.path),m=e.resolve({path:p.path},L),w=i.createHref(p.fullPath);return _e(p,m,{params:f(m.params),hash:Ca(p.hash),redirectedFrom:void 0,href:w})}let P;if("path"in C)P=_e({},C,{path:ac(n,C.path,L.path).path});else{const p=_e({},C.params);for(const m in p)p[m]==null&&delete p[m];P=_e({},C,{params:h(C.params)}),L.params=h(L.params)}const j=e.resolve(P,L),he=C.hash||"";j.params=u(f(j.params));const xe=WD(s,_e({},C,{hash:kx(he),path:j.path})),ne=i.createHref(xe);return _e({fullPath:xe,hash:he,query:s===gg?Px(C.query):C.query||{}},j,{redirectedFrom:void 0,href:ne})}function E(C){return typeof C=="string"?ac(n,C,l.value.path):_e({},C)}function v(C,L){if(c!==C)return _i(8,{from:L,to:C})}function k(C){return te(C)}function U(C){return k(_e(E(C),{replace:!0}))}function z(C){const L=C.matched[C.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let j=typeof P=="function"?P(C):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=E(j):{path:j},j.params={}),_e({query:C.query,hash:C.hash,params:"path"in j?{}:C.params},j)}}function te(C,L){const P=c=T(C),j=l.value,he=C.state,xe=C.force,ne=C.replace===!0,p=z(P);if(p)return te(_e(E(p),{state:typeof p=="object"?_e({},he,p.state):he,force:xe,replace:ne}),L||P);const m=P;m.redirectedFrom=L;let w;return!xe&&qD(s,j,P)&&(w=_i(16,{to:m,from:j}),ss(j,j,!0,!1)),(w?Promise.resolve(w):ae(m,j)).catch(b=>En(b)?En(b,2)?b:Wt(b):Te(b,m,j)).then(b=>{if(b){if(En(b,2))return te(_e({replace:ne},E(b.to),{state:typeof b.to=="object"?_e({},he,b.to.state):he,force:xe}),L||m)}else b=Ce(m,j,!0,ne,he);return re(m,j,b),b})}function F(C,L){const P=v(C,L);return P?Promise.reject(P):Promise.resolve()}function ae(C,L){let P;const[j,he,xe]=Wx(C,L);P=lc(j.reverse(),"beforeRouteLeave",C,L);for(const p of j)p.leaveGuards.forEach(m=>{P.push(Bn(m,C,L))});const ne=F.bind(null,C,L);return P.push(ne),Us(P).then(()=>{P=[];for(const p of r.list())P.push(Bn(p,C,L));return P.push(ne),Us(P)}).then(()=>{P=lc(he,"beforeRouteUpdate",C,L);for(const p of he)p.updateGuards.forEach(m=>{P.push(Bn(m,C,L))});return P.push(ne),Us(P)}).then(()=>{P=[];for(const p of C.matched)if(p.beforeEnter&&!L.matched.includes(p))if(tn(p.beforeEnter))for(const m of p.beforeEnter)P.push(Bn(m,C,L));else P.push(Bn(p.beforeEnter,C,L));return P.push(ne),Us(P)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),P=lc(xe,"beforeRouteEnter",C,L),P.push(ne),Us(P))).then(()=>{P=[];for(const p of o.list())P.push(Bn(p,C,L));return P.push(ne),Us(P)}).catch(p=>En(p,8)?p:Promise.reject(p))}function re(C,L,P){for(const j of a.list())j(C,L,P)}function Ce(C,L,P,j,he){const xe=v(C,L);if(xe)return xe;const ne=L===Fn,p=js?history.state:{};P&&(j||ne?i.replace(C.fullPath,_e({scroll:ne&&p&&p.scroll},he)):i.push(C.fullPath,he)),l.value=C,ss(C,L,P,ne),Wt()}let je;function wt(){je||(je=i.listen((C,L,P)=>{if(!co.listening)return;const j=T(C),he=z(j);if(he){te(_e(he,{replace:!0}),j).catch(lr);return}c=j;const xe=l.value;js&&ZD(ag(xe.fullPath,P.delta),Tl()),ae(j,xe).catch(ne=>En(ne,12)?ne:En(ne,2)?(te(ne.to,j).then(p=>{En(p,20)&&!P.delta&&P.type===Pr.pop&&i.go(-1,!1)}).catch(lr),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Te(ne,j,xe))).then(ne=>{ne=ne||Ce(j,xe,!1),ne&&(P.delta&&!En(ne,8)?i.go(-P.delta,!1):P.type===Pr.pop&&En(ne,20)&&i.go(-1,!1)),re(j,xe,ne)}).catch(lr)}))}let Rt=Vi(),Di=Vi(),Le;function Te(C,L,P){Wt(C);const j=Di.list();return j.length?j.forEach(he=>he(C,L,P)):console.error(C),Promise.reject(C)}function ve(){return Le&&l.value!==Fn?Promise.resolve():new Promise((C,L)=>{Rt.add([C,L])})}function Wt(C){return Le||(Le=!C,wt(),Rt.list().forEach(([L,P])=>C?P(C):L()),Rt.reset()),C}function ss(C,L,P,j){const{scrollBehavior:he}=t;if(!js||!he)return Promise.resolve();const xe=!P&&ex(ag(C.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return zg().then(()=>he(C,L,xe)).then(ne=>ne&&JD(ne)).catch(ne=>Te(ne,C,L))}const qt=C=>i.go(C);let Et;const Ms=new Set,co={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:y,resolve:T,options:t,push:k,replace:U,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Di.add,isReady:ve,install(C){const L=this;C.component("RouterLink",Ux),C.component("RouterView",jx),C.config.globalProperties.$router=L,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>yt(l)}),js&&!Et&&l.value===Fn&&(Et=!0,k(i.location).catch(he=>{}));const P={};for(const he in Fn)P[he]=Ft(()=>l.value[he]);C.provide(bl,L),C.provide(zw,Mr(P)),C.provide(Iu,l);const j=C.unmount;Ms.add(C),C.unmount=function(){Ms.delete(C),Ms.size<1&&(c=Fn,je&&je(),je=null,l.value=Fn,Et=!1,Le=!1),j()}}};return co}function Us(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Wx(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>yi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yi(c,l))||i.push(l))}return[n,s,i]}function oP(){return $t(bl)}const qx=[{path:"/",name:"home",component:()=>rn(()=>import("./HomePage-f5a1d550.js"),["assets/HomePage-f5a1d550.js","assets/LinkButton-7f5582c1.js"])},{path:"/pallete",name:"pallete",component:()=>rn(()=>import("./PalletePage-0f32fe28.js"),[])},{path:"/ishihara",name:"ishihara",component:()=>rn(()=>import("./IshiharaPage-da0f1fc7.js"),["assets/IshiharaPage-da0f1fc7.js","assets/LinkButton-7f5582c1.js"])},{path:"/stroop",name:"stroop",component:()=>rn(()=>import("./StroopPage-846ccb11.js"),["assets/StroopPage-846ccb11.js","assets/LinkButton-7f5582c1.js"])},{path:"/strooptraining",name:"strooptraining",component:()=>rn(()=>import("./StroopTrainingPage-d64c8bbe.js"),[])},{path:"/gilberttraining",name:"gilberttraining",component:()=>rn(()=>import("./GilbertTrainingPage-677e73ce.js"),[])},{path:"/cameratest",name:"cameratest",component:()=>rn(()=>import("./CameraTest2Page-7b7cbe53.js"),[])},{path:"/gilbert",name:"gilbert",component:()=>rn(()=>import("./GilbertPage-9b438b56.js"),["assets/GilbertPage-9b438b56.js","assets/GilbertPage-efc6df3f.css"])},{path:"/thanks",name:"thanks",component:()=>rn(()=>import("./ThanksPage-cd861410.js"),[])},{path:"/statistics",name:"statistics",component:()=>rn(()=>import("./StatisticsPage-397ce32d.js"),[])}],Kx=Hx({history:rx(),routes:qx}),Gw=vb(UD);Gw.use(Kx);Gw.mount("#app");export{Yx as A,om as B,oP as C,eP as D,rP as E,Lt as F,sP as G,Kh as J,bm as a,Zx as b,Xx as c,tt as d,Tb as e,Cm as f,bb as g,Qx as h,$t as i,Rl as j,Qs as k,Mr as l,Ft as m,Au as n,Fr as o,Gx as p,Zc as q,vT as r,Tu as s,zx as t,yt as u,tP as v,gc as w,iP as x,Pa as y,Jx as z};
