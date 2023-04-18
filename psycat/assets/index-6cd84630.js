(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Au(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ru(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=$e(s)?Zw(s):Ru(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if($e(t))return t;if(be(t))return t}}const Yw=/;(?![^(]*\))/g,Xw=/:([^]+)/,Jw=/\/\*.*?\*\//gs;function Zw(t){const e={};return t.replace(Jw,"").split(Yw).forEach(n=>{if(n){const s=n.split(Xw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ku(t){let e="";if($e(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=ku(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tE=Au(eE);function Eg(t){return!!t||t===""}function nE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=si(t[s],e[s]);return n}function si(t,e){if(t===e)return!0;let n=Af(t),s=Af(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=fr(t),s=fr(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?nE(t,e):!1;if(n=be(t),s=be(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!si(t[o],e[o]))return!1}}return String(t)===String(e)}function Tg(t,e){return t.findIndex(n=>si(n,e))}const Qx=t=>$e(t)?t:t==null?"":G(t)||be(t)&&(t.toString===bg||!Z(t.toString))?JSON.stringify(t,Cg,2):String(t),Cg=(t,e)=>e&&e.__v_isRef?Cg(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ka(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!G(e)&&!Ig(e)?String(e):e,Ae={},Ks=[],Yt=()=>{},sE=()=>!1,iE=/^on[^a-z]/,Ra=t=>iE.test(t),Nu=t=>t.startsWith("onUpdate:"),pt=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rE=Object.prototype.hasOwnProperty,fe=(t,e)=>rE.call(t,e),G=Array.isArray,zs=t=>Ur(t)==="[object Map]",ka=t=>Ur(t)==="[object Set]",Af=t=>Ur(t)==="[object Date]",Z=t=>typeof t=="function",$e=t=>typeof t=="string",fr=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Du=t=>be(t)&&Z(t.then)&&Z(t.catch),bg=Object.prototype.toString,Ur=t=>bg.call(t),oE=t=>Ur(t).slice(8,-1),Ig=t=>Ur(t)==="[object Object]",xu=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aE=/-(\w)/g,fn=Na(t=>t.replace(aE,(e,n)=>n?n.toUpperCase():"")),lE=/\B([A-Z])/g,wi=Na(t=>t.replace(lE,"-$1").toLowerCase()),Oa=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sl=Na(t=>t?`on${Oa(t)}`:""),dr=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cE=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Rf;const uE=()=>Rf||(Rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class hE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function fE(t,e=Nt){e&&e.active&&e.effects.push(t)}function Sg(){return Nt}function dE(t){Nt&&Nt.cleanups.push(t)}const Pu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ag=t=>(t.w&Gn)>0,Rg=t=>(t.n&Gn)>0,pE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gn},gE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ag(i)&&!Rg(i)?i.delete(t):e[n++]=i,i.w&=~Gn,i.n&=~Gn}e.length=n}},fc=new WeakMap;let ji=0,Gn=1;const dc=30;let Kt;const ys=Symbol(""),pc=Symbol("");class Mu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fE(this,s)}run(){if(!this.active)return this.fn();let e=Kt,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,$n=!0,Gn=1<<++ji,ji<=dc?pE(this):kf(this),this.fn()}finally{ji<=dc&&gE(this),Gn=1<<--ji,Kt=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(kf(this),this.onStop&&this.onStop(),this.active=!1)}}function kf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const kg=[];function Ei(){kg.push($n),$n=!1}function Ti(){const t=kg.pop();$n=t===void 0?!0:t}function St(t,e,n){if($n&&Kt){let s=fc.get(t);s||fc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Pu()),Ng(i)}}function Ng(t,e){let n=!1;ji<=dc?Rg(t)||(t.n|=Gn,n=!Ag(t)):n=!t.has(Kt),n&&(t.add(Kt),Kt.deps.push(t))}function Sn(t,e,n,s,i,r){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?xu(n)&&a.push(o.get("length")):(a.push(o.get(ys)),zs(t)&&a.push(o.get(pc)));break;case"delete":G(t)||(a.push(o.get(ys)),zs(t)&&a.push(o.get(pc)));break;case"set":zs(t)&&a.push(o.get(ys));break}if(a.length===1)a[0]&&gc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gc(Pu(l))}}function gc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Nf(s);for(const s of n)s.computed||Nf(s)}function Nf(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mE=Au("__proto__,__v_isRef,__isVue"),Og=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fr)),_E=Lu(),yE=Lu(!1,!0),vE=Lu(!0),Of=wE();function wE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ei();const s=pe(this)[e].apply(this,n);return Ti(),s}}),t}function EE(t){const e=pe(this);return St(e,"has",t),e.hasOwnProperty(t)}function Lu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?FE:Lg:e?Mg:Pg).get(s))return s;const o=G(s);if(!t){if(o&&fe(Of,i))return Reflect.get(Of,i,r);if(i==="hasOwnProperty")return EE}const a=Reflect.get(s,i,r);return(fr(i)?Og.has(i):mE(i))||(t||St(s,"get",i),e)?a:Ze(a)?o&&xu(i)?a:a.value:be(a)?t?Fg(a):Br(a):a}}const TE=Dg(),CE=Dg(!0);function Dg(t=!1){return function(n,s,i,r){let o=n[s];if(ii(o)&&Ze(o)&&!Ze(i))return!1;if(!t&&(!Ho(i)&&!ii(i)&&(o=pe(o),i=pe(i)),!G(n)&&Ze(o)&&!Ze(i)))return o.value=i,!0;const a=G(n)&&xu(s)?Number(s)<n.length:fe(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?dr(i,o)&&Sn(n,"set",s,i):Sn(n,"add",s,i)),l}}function bE(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Sn(t,"delete",e,void 0),s}function IE(t,e){const n=Reflect.has(t,e);return(!fr(e)||!Og.has(e))&&St(t,"has",e),n}function SE(t){return St(t,"iterate",G(t)?"length":ys),Reflect.ownKeys(t)}const xg={get:_E,set:TE,deleteProperty:bE,has:IE,ownKeys:SE},AE={get:vE,set(t,e){return!0},deleteProperty(t,e){return!0}},RE=pt({},xg,{get:yE,set:CE}),Fu=t=>t,Da=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=Da(i),a=s?Fu:n?Vu:pr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function _o(t,e=!1){return t=t.__v_raw,!e&&St(pe(t),"iterate",ys),Reflect.get(t,"size",t)}function Df(t){t=pe(t);const e=pe(this);return Da(e).has.call(e,t)||(e.add(t),Sn(e,"add",t,t)),this}function xf(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=Da(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?dr(e,o)&&Sn(n,"set",t,e):Sn(n,"add",t,e),this}function Pf(t){const e=pe(this),{has:n,get:s}=Da(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Sn(e,"delete",t,void 0),r}function Mf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Sn(t,"clear",void 0,void 0),n}function yo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?Fu:t?Vu:pr;return!t&&St(a,"iterate",ys),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function vo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=zs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Fu:e?Vu:pr;return!e&&St(r,"iterate",l?pc:ys),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:this}}function kE(){const t={get(r){return go(this,r)},get size(){return _o(this)},has:mo,add:Df,set:xf,delete:Pf,clear:Mf,forEach:yo(!1,!1)},e={get(r){return go(this,r,!1,!0)},get size(){return _o(this)},has:mo,add:Df,set:xf,delete:Pf,clear:Mf,forEach:yo(!1,!0)},n={get(r){return go(this,r,!0)},get size(){return _o(this,!0)},has(r){return mo.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:yo(!0,!1)},s={get(r){return go(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return mo.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vo(r,!1,!1),n[r]=vo(r,!0,!1),e[r]=vo(r,!1,!0),s[r]=vo(r,!0,!0)}),[t,n,e,s]}const[NE,OE,DE,xE]=kE();function Uu(t,e){const n=e?t?xE:DE:t?OE:NE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const PE={get:Uu(!1,!1)},ME={get:Uu(!1,!0)},LE={get:Uu(!0,!1)},Pg=new WeakMap,Mg=new WeakMap,Lg=new WeakMap,FE=new WeakMap;function UE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BE(t){return t.__v_skip||!Object.isExtensible(t)?0:UE(oE(t))}function Br(t){return ii(t)?t:Bu(t,!1,xg,PE,Pg)}function VE(t){return Bu(t,!1,RE,ME,Mg)}function Fg(t){return Bu(t,!0,AE,LE,Lg)}function Bu(t,e,n,s,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=BE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Gs(t){return ii(t)?Gs(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function Ho(t){return!!(t&&t.__v_isShallow)}function Ug(t){return Gs(t)||ii(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Bg(t){return jo(t,"__v_skip",!0),t}const pr=t=>be(t)?Br(t):t,Vu=t=>be(t)?Fg(t):t;function Vg(t){$n&&Kt&&(t=pe(t),Ng(t.dep||(t.dep=Pu())))}function $g(t,e){t=pe(t);const n=t.dep;n&&gc(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function Gi(t){return Hg(t,!1)}function jg(t){return Hg(t,!0)}function Hg(t,e){return Ze(t)?t:new $E(t,e)}class $E{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:pr(e)}get value(){return Vg(this),this._value}set value(e){const n=this.__v_isShallow||Ho(e)||ii(e);e=n?e:pe(e),dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),$g(this))}}function _t(t){return Ze(t)?t.value:t}const jE={get:(t,e,n)=>_t(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Wg(t){return Gs(t)?t:new Proxy(t,jE)}var qg;class HE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qg]=!1,this._dirty=!0,this.effect=new Mu(e,()=>{this._dirty||(this._dirty=!0,$g(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return Vg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qg="__v_isReadonly";function WE(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=Yt):(s=t.get,i=t.set),new HE(s,i,r||!i,n)}function jn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Vr(r,e,n)}return i}function Vt(t,e,n,s){if(Z(t)){const r=jn(t,e,n,s);return r&&Du(r)&&r.catch(o=>{Vr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Vt(t[r],e,n,s));return i}function Vr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[t,o,a]);return}}qE(t,n,i,s)}function qE(t,e,n,s=!0){console.error(t)}let gr=!1,mc=!1;const lt=[];let rn=0;const Qs=[];let En=null,us=0;const Kg=Promise.resolve();let $u=null;function zg(t){const e=$u||Kg;return t?e.then(this?t.bind(this):t):e}function KE(t){let e=rn+1,n=lt.length;for(;e<n;){const s=e+n>>>1;mr(lt[s])<t?e=s+1:n=s}return e}function ju(t){(!lt.length||!lt.includes(t,gr&&t.allowRecurse?rn+1:rn))&&(t.id==null?lt.push(t):lt.splice(KE(t.id),0,t),Gg())}function Gg(){!gr&&!mc&&(mc=!0,$u=Kg.then(Xg))}function zE(t){const e=lt.indexOf(t);e>rn&&lt.splice(e,1)}function Qg(t){G(t)?Qs.push(...t):(!En||!En.includes(t,t.allowRecurse?us+1:us))&&Qs.push(t),Gg()}function Lf(t,e=gr?rn+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function Yg(t){if(Qs.length){const e=[...new Set(Qs)];if(Qs.length=0,En){En.push(...e);return}for(En=e,En.sort((n,s)=>mr(n)-mr(s)),us=0;us<En.length;us++)En[us]();En=null,us=0}}const mr=t=>t.id==null?1/0:t.id,GE=(t,e)=>{const n=mr(t)-mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xg(t){mc=!1,gr=!0,lt.sort(GE);const e=Yt;try{for(rn=0;rn<lt.length;rn++){const n=lt[rn];n&&n.active!==!1&&jn(n,null,14)}}finally{rn=0,lt.length=0,Yg(),gr=!1,$u=null,(lt.length||Qs.length)&&Xg()}}function QE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f&&(i=n.map(d=>$e(d)?d.trim():d)),h&&(i=n.map(hc))}let a,l=s[a=Sl(e)]||s[a=Sl(fn(e))];!l&&r&&(l=s[a=Sl(wi(e))]),l&&Vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(c,t,6,i)}}function Jg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Jg(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(be(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):pt(o,r),be(t)&&s.set(t,o),o)}function xa(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,wi(e))||fe(t,e))}let et=null,Zg=null;function Wo(t){const e=et;return et=t,Zg=t&&t.type.__scopeId||null,e}function _c(t,e=et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zf(-1);const r=Wo(e);let o;try{o=t(...i)}finally{Wo(r),s._d&&zf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Al(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=t;let y,T;const E=Wo(t);try{if(n.shapeFlag&4){const k=i||s;y=qt(u.call(k,k,h,r,d,f,g)),T=l}else{const k=e;y=qt(k.length>1?k(r,{attrs:l,slots:a,emit:c}):k(r,null)),T=e.props?l:XE(l)}}catch(k){Zi.length=0,Vr(k,t,1),y=ut(bt)}let v=y;if(T&&_!==!1){const k=Object.keys(T),{shapeFlag:U}=v;k.length&&U&7&&(o&&k.some(Nu)&&(T=JE(T,o)),v=Qn(v,T))}return n.dirs&&(v=Qn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v,Wo(E),y}function YE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(yr(s)){if(s.type!==bt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const XE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},JE=(t,e)=>{const n={};for(const s in t)(!Nu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ZE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ff(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!xa(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ff(s,o,c):!0:!!o;return!1}function Ff(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xa(n,r))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const eT=t=>t.__isSuspense,tT={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?sT(e,n,s,i,r,o,a,l,c):iT(t,e,n,s,i,o,a,l,c)},hydrate:rT,create:Wu,normalize:oT},nT=tT;function _r(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function sT(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Wu(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(_r(t,"onPending"),_r(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Ys(f,t.ssFallback)):f.resolve()}function iT(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:y,isHydrating:T}=h;if(_)h.pendingBranch=f,on(f,_)?(l(_,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():y&&(l(g,d,n,s,i,null,r,o,a),Ys(h,d))):(h.pendingId++,T?(h.isHydrating=!1,h.activeBranch=_):c(_,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(g,d,n,s,i,null,r,o,a),Ys(h,d))):g&&on(f,g)?(l(g,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(g&&on(f,g))l(g,f,n,s,i,h,r,o,a),Ys(h,f);else if(_r(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:E,pendingId:v}=h;E>0?setTimeout(()=>{h.pendingId===v&&h.fallback(d)},E):E===0&&h.fallback(d)}}function Wu(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:g,o:{parentNode:_,remove:y}}=c,T=t.props?cE(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:k,activeBranch:U,pendingBranch:z,pendingId:te,effects:F,parentComponent:ae,container:re}=E;if(E.isHydrating)E.isHydrating=!1;else if(!v){const vt=U&&z.transition&&z.transition.mode==="out-in";vt&&(U.transition.afterLeave=()=>{te===E.pendingId&&f(z,re,Rt,0)});let{anchor:Rt}=E;U&&(Rt=g(U),d(U,ae,E,!0)),vt||f(z,re,Rt,0)}Ys(E,z),E.pendingBranch=null,E.isInFallback=!1;let Ie=E.parent,je=!1;for(;Ie;){if(Ie.pendingBranch){Ie.effects.push(...F),je=!0;break}Ie=Ie.parent}je||Qg(F),E.effects=[],_r(k,"onResolve")},fallback(v){if(!E.pendingBranch)return;const{vnode:k,activeBranch:U,parentComponent:z,container:te,isSVG:F}=E;_r(k,"onFallback");const ae=g(U),re=()=>{E.isInFallback&&(h(null,v,te,ae,z,null,F,a,l),Ys(E,v))},Ie=v.transition&&v.transition.mode==="out-in";Ie&&(U.transition.afterLeave=re),E.isInFallback=!0,d(U,z,null,!0),Ie||re()},move(v,k,U){E.activeBranch&&f(E.activeBranch,v,k,U),E.container=v},next(){return E.activeBranch&&g(E.activeBranch)},registerDep(v,k){const U=!!E.pendingBranch;U&&E.deps++;const z=v.vnode.el;v.asyncDep.catch(te=>{Vr(te,v,0)}).then(te=>{if(v.isUnmounted||E.isUnmounted||E.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:F}=v;Ic(v,te,!1),z&&(F.el=z);const ae=!z&&v.subTree.el;k(v,F,_(z||v.subTree.el),z?null:g(v.subTree),E,o,l),ae&&y(ae),Hu(v,F.el),U&&--E.deps===0&&E.resolve()})},unmount(v,k){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,v,k),E.pendingBranch&&d(E.pendingBranch,n,v,k)}};return E}function rT(t,e,n,s,i,r,o,a,l){const c=e.suspense=Wu(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function oT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Uf(s?n.default:n),t.ssFallback=s?Uf(n.fallback):ut(bt)}function Uf(t){let e;if(Z(t)){const n=ri&&t._c;n&&(t._d=!1,$r()),t=t(),n&&(t._d=!0,e=Ut,wm())}return G(t)&&(t=YE(t)),t=qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function aT(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Qg(t)}function Ys(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Hu(s,i))}function Qi(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Xt(t,e,n=!1){const s=Me||et;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const wo={};function Yi(t,e,n){return em(t,e,n)}function em(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ae){const a=Sg()===(Me==null?void 0:Me.scope)?Me:null;let l,c=!1,u=!1;if(Ze(t)?(l=()=>t.value,c=Ho(t)):Gs(t)?(l=()=>t,s=!0):G(t)?(u=!0,c=t.some(v=>Gs(v)||Ho(v)),l=()=>t.map(v=>{if(Ze(v))return v.value;if(Gs(v))return fs(v);if(Z(v))return jn(v,a,2)})):Z(t)?e?l=()=>jn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[f])}:l=Yt,e&&s){const v=l;l=()=>fs(v())}let h,f=v=>{h=T.onStop=()=>{jn(v,a,4)}},d;if(vr)if(f=Yt,e?n&&Vt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const v=e0();d=v.__watcherHandles||(v.__watcherHandles=[])}else return Yt;let g=u?new Array(t.length).fill(wo):wo;const _=()=>{if(T.active)if(e){const v=T.run();(s||c||(u?v.some((k,U)=>dr(k,g[U])):dr(v,g)))&&(h&&h(),Vt(e,a,3,[v,g===wo?void 0:u&&g[0]===wo?[]:g,f]),g=v)}else T.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>Et(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>ju(_));const T=new Mu(l,y);e?n?_():g=T.run():i==="post"?Et(T.run.bind(T),a&&a.suspense):T.run();const E=()=>{T.stop(),a&&a.scope&&Ou(a.scope.effects,T)};return d&&d.push(E),E}function lT(t,e,n){const s=this.proxy,i=$e(t)?t.includes(".")?tm(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Me;Yn(this);const a=em(i,r.bind(s),n);return o?Yn(o):Hn(),a}function tm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fs(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))fs(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)fs(t[n],e);else if(ka(t)||zs(t))t.forEach(n=>{fs(n,e)});else if(Ig(t))for(const n in t)fs(t[n],e);return t}function cT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return om(()=>{t.isMounted=!0}),am(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],uT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},setup(t,{slots:e}){const n=jr(),s=cT();let i;return()=>{const r=e.default&&sm(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==bt){o=_;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return Rl(o);const c=Bf(o);if(!c)return Rl(o);const u=yc(c,a,s,n);vc(c,u);const h=n.subTree,f=h&&Bf(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();i===void 0?i=_:_!==i&&(i=_,d=!0)}if(f&&f.type!==bt&&(!on(c,f)||d)){const _=yc(f,a,s,n);if(vc(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Rl(o);l==="in-out"&&c.type!==bt&&(_.delayLeave=(y,T,E)=>{const v=nm(s,f);v[String(f.key)]=f,y._leaveCb=()=>{T(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},hT=uT;function nm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:_,onAppear:y,onAfterAppear:T,onAppearCancelled:E}=e,v=String(t.key),k=nm(n,t),U=(F,ae)=>{F&&Vt(F,s,9,ae)},z=(F,ae)=>{const re=ae[1];U(F,ae),G(F)?F.every(Ie=>Ie.length<=1)&&re():F.length<=1&&re()},te={mode:r,persisted:o,beforeEnter(F){let ae=a;if(!n.isMounted)if(i)ae=_||a;else return;F._leaveCb&&F._leaveCb(!0);const re=k[v];re&&on(t,re)&&re.el._leaveCb&&re.el._leaveCb(),U(ae,[F])},enter(F){let ae=l,re=c,Ie=u;if(!n.isMounted)if(i)ae=y||l,re=T||c,Ie=E||u;else return;let je=!1;const vt=F._enterCb=Rt=>{je||(je=!0,Rt?U(Ie,[F]):U(re,[F]),te.delayedLeave&&te.delayedLeave(),F._enterCb=void 0)};ae?z(ae,[F,vt]):vt()},leave(F,ae){const re=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ae();U(h,[F]);let Ie=!1;const je=F._leaveCb=vt=>{Ie||(Ie=!0,ae(),vt?U(g,[F]):U(d,[F]),F._leaveCb=void 0,k[re]===t&&delete k[re])};k[re]=t,f?z(f,[F,je]):je()},clone(F){return yc(F,e,n,s)}};return te}function Rl(t){if(Pa(t))return t=Qn(t),t.children=null,t}function Bf(t){return Pa(t)?t.children?t.children[0]:void 0:t}function vc(t,e){t.shapeFlag&6&&t.component?vc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&i++,s=s.concat(sm(o.children,e,a))):(e||o.type!==bt)&&s.push(a!=null?Qn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function im(t){return Z(t)?{setup:t,name:t.name}:t}const Xi=t=>!!t.type.__asyncLoader,Pa=t=>t.type.__isKeepAlive;function fT(t,e){rm(t,"a",e)}function dT(t,e){rm(t,"da",e)}function rm(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ma(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pa(i.parent.vnode)&&pT(s,e,n,i),i=i.parent}}function pT(t,e,n,s){const i=Ma(e,t,s,!0);lm(()=>{Ou(s[e],i)},n)}function Ma(t,e,n=Me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ei(),Yn(n);const a=Vt(e,n,t,o);return Hn(),Ti(),a});return s?i.unshift(r):i.push(r),r}}const On=t=>(e,n=Me)=>(!vr||t==="sp")&&Ma(t,(...s)=>e(...s),n),gT=On("bm"),om=On("m"),mT=On("bu"),_T=On("u"),am=On("bum"),lm=On("um"),cm=On("sp"),yT=On("rtg"),vT=On("rtc");function wT(t,e=Me){Ma("ec",t,e)}function Yx(t,e){const n=et;if(n===null)return t;const s=Ba(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ae]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&fs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ei(),Vt(l,n,8,[t.el,a,t,e]),Ti())}}const um="components";function ET(t,e){return CT(um,t,!0,e)||t}const TT=Symbol();function CT(t,e,n=!0,s=!1){const i=et||Me;if(i){const r=i.type;if(t===um){const a=XT(r,!1);if(a&&(a===e||a===fn(e)||a===Oa(fn(e))))return r}const o=Vf(i[t]||r[t],e)||Vf(i.appContext[t],e);return!o&&s?r:o}}function Vf(t,e){return t&&(t[e]||t[fn(e)]||t[Oa(fn(e))])}function Xx(t,e,n,s){let i;const r=n&&n[s];if(G(t)||$e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(be(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Jx(t,e,n={},s,i){if(et.isCE||et.parent&&Xi(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),ut("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),$r();const o=r&&hm(r(n)),a=Fa(Lt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function hm(t){return t.some(e=>yr(e)?!(e.type===bt||e.type===Lt&&!hm(e.children)):!0)?t:null}const wc=t=>t?Im(t)?Ba(t)||t.proxy:wc(t.parent):null,Ji=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wc(t.parent),$root:t=>wc(t.root),$emit:t=>t.emit,$options:t=>qu(t),$forceUpdate:t=>t.f||(t.f=()=>ju(t.update)),$nextTick:t=>t.n||(t.n=zg.bind(t.proxy)),$watch:t=>lT.bind(t)}),kl=(t,e)=>t!==Ae&&!t.__isScriptSetup&&fe(t,e),bT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(kl(s,e))return o[e]=1,s[e];if(i!==Ae&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==Ae&&fe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=Ji[e];let h,f;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&fe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return kl(i,e)?(i[e]=n,!0):s!==Ae&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ae&&fe(t,o)||kl(e,o)||(a=r[0])&&fe(a,o)||fe(s,o)||fe(Ji,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ec=!0;function IT(t){const e=qu(t),n=t.proxy,s=t.ctx;Ec=!1,e.beforeCreate&&$f(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:y,beforeDestroy:T,beforeUnmount:E,destroyed:v,unmounted:k,render:U,renderTracked:z,renderTriggered:te,errorCaptured:F,serverPrefetch:ae,expose:re,inheritAttrs:Ie,components:je,directives:vt,filters:Rt}=e;if(c&&ST(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ve=o[Te];Z(ve)&&(s[Te]=ve.bind(n))}if(i){const Te=i.call(n,n);be(Te)&&(t.data=Br(Te))}if(Ec=!0,r)for(const Te in r){const ve=r[Te],jt=Z(ve)?ve.bind(n,n):Z(ve.get)?ve.get.bind(n,n):Yt,is=!Z(ve)&&Z(ve.set)?ve.set.bind(n):Yt,Ht=Ft({get:jt,set:is});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:wt=>Ht.value=wt})}if(a)for(const Te in a)fm(a[Te],s,n,Te);if(l){const Te=Z(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ve=>{Qi(ve,Te[ve])})}u&&$f(u,t,"c");function Le(Te,ve){G(ve)?ve.forEach(jt=>Te(jt.bind(n))):ve&&Te(ve.bind(n))}if(Le(gT,h),Le(om,f),Le(mT,d),Le(_T,g),Le(fT,_),Le(dT,y),Le(wT,F),Le(vT,z),Le(yT,te),Le(am,E),Le(lm,k),Le(cm,ae),G(re))if(re.length){const Te=t.exposed||(t.exposed={});re.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:jt=>n[ve]=jt})})}else t.exposed||(t.exposed={});U&&t.render===Yt&&(t.render=U),Ie!=null&&(t.inheritAttrs=Ie),je&&(t.components=je),vt&&(t.directives=vt)}function ST(t,e,n=Yt,s=!1){G(t)&&(t=Tc(t));for(const i in t){const r=t[i];let o;be(r)?"default"in r?o=Xt(r.from||i,r.default,!0):o=Xt(r.from||i):o=Xt(r),Ze(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function $f(t,e,n){Vt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,s){const i=s.includes(".")?tm(n,s):()=>n[s];if($e(t)){const r=e[t];Z(r)&&Yi(i,r)}else if(Z(t))Yi(i,t.bind(n));else if(be(t))if(G(t))t.forEach(r=>fm(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&Yi(i,r,t)}}function qu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),be(e)&&r.set(e,l),l}function qo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qo(t,r,n,!0),i&&i.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=AT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const AT={data:jf,props:as,emits:as,methods:as,computed:as,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:as,directives:as,watch:kT,provide:jf,inject:RT};function jf(t,e){return e?t?function(){return pt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function RT(t,e){return as(Tc(t),Tc(e))}function Tc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function as(t,e){return t?pt(pt(Object.create(null),t),e):e}function kT(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const s in e)n[s]=mt(t[s],e[s]);return n}function NT(t,e,n,s=!1){const i={},r={};jo(r,Ua,1),t.propsDefaults=Object.create(null),dm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:VE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function OT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xa(t.emitsOptions,f))continue;const d=e[f];if(l)if(fe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=fn(f);i[g]=Cc(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{dm(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=wi(h))===h||!fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Cc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!fe(e,h))&&(delete r[h],c=!0)}c&&Sn(t,"set","$attrs")}function dm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;i&&fe(i,u=fn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:xa(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||Ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Cc(i,l,h,c[h],t,!fe(c,h))}}return o}function Cc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Z(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Yn(i),s=c[n]=l.call(null,e),Hn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===wi(n))&&(s=!0))}return s}function pm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[f,d]=pm(h,e,!0);pt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return be(t)&&s.set(t,Ks),Ks;if(G(r))for(let u=0;u<r.length;u++){const h=fn(r[u]);Hf(h)&&(o[h]=Ae)}else if(r)for(const u in r){const h=fn(u);if(Hf(h)){const f=r[u],d=o[h]=G(f)||Z(f)?{type:f}:Object.assign({},f);if(d){const g=Kf(Boolean,d.type),_=Kf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||fe(d,"default"))&&a.push(h)}}}const c=[o,a];return be(t)&&s.set(t,c),c}function Hf(t){return t[0]!=="$"}function Wf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qf(t,e){return Wf(t)===Wf(e)}function Kf(t,e){return G(e)?e.findIndex(n=>qf(n,t)):Z(e)&&qf(e,t)?0:-1}const gm=t=>t[0]==="_"||t==="$stable",Ku=t=>G(t)?t.map(qt):[qt(t)],DT=(t,e,n)=>{if(e._n)return e;const s=_c((...i)=>Ku(e(...i)),n);return s._c=!1,s},mm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(gm(i))continue;const r=t[i];if(Z(r))e[i]=DT(i,r,s);else if(r!=null){const o=Ku(r);e[i]=()=>o}}},_m=(t,e)=>{const n=Ku(e);t.slots.default=()=>n},xT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),jo(e,"_",n)):mm(e,t.slots={})}else t.slots={},e&&_m(t,e);jo(t.slots,Ua,1)},PT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(pt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,mm(e,i)),o=e}else e&&(_m(t,e),o={default:1});if(r)for(const a in i)!gm(a)&&!(a in o)&&delete i[a]};function ym(){return{app:null,config:{isNativeTag:sE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let MT=0;function LT(t,e){return function(s,i=null){Z(s)||(s=Object.assign({},s)),i!=null&&!be(i)&&(i=null);const r=ym(),o=new Set;let a=!1;const l=r.app={_uid:MT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:t0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ut(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ba(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function bc(t,e,n,s,i=!1){if(G(t)){t.forEach((f,d)=>bc(f,e&&(G(e)?e[d]:e),n,s,i));return}if(Xi(s)&&!i)return;const r=s.shapeFlag&4?Ba(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,fe(h,c)&&(h[c]=null)):Ze(c)&&(c.value=null)),Z(l))jn(l,a,12,[o,u]);else{const f=$e(l),d=Ze(l);if(f||d){const g=()=>{if(t.f){const _=f?fe(h,l)?h[l]:u[l]:l.value;i?G(_)&&Ou(_,r):G(_)?_.includes(r)||_.push(r):f?(u[l]=[r],fe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,fe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Et(g,n)):g()}}}const Et=aT;function FT(t){return UT(t)}function UT(t,e){const n=uE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Yt,insertStaticContent:g}=t,_=(p,m,w,C=null,I=null,O=null,M=!1,N=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!on(p,m)&&(C=P(p),wt(p,I,O,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:A,ref:H,shapeFlag:B}=m;switch(A){case La:y(p,m,w,C);break;case bt:T(p,m,w,C);break;case Nl:p==null&&E(m,w,C,M);break;case Lt:je(p,m,w,C,I,O,M,N,D);break;default:B&1?U(p,m,w,C,I,O,M,N,D):B&6?vt(p,m,w,C,I,O,M,N,D):(B&64||B&128)&&A.process(p,m,w,C,I,O,M,N,D,he)}H!=null&&I&&bc(H,p&&p.ref,O,m||p,!m)},y=(p,m,w,C)=>{if(p==null)s(m.el=a(m.children),w,C);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},T=(p,m,w,C)=>{p==null?s(m.el=l(m.children||""),w,C):m.el=p.el},E=(p,m,w,C)=>{[p.el,p.anchor]=g(p.children,m,w,C,p.el,p.anchor)},v=({el:p,anchor:m},w,C)=>{let I;for(;p&&p!==m;)I=f(p),s(p,w,C),p=I;s(m,w,C)},k=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=f(p),i(p),p=w;i(m)},U=(p,m,w,C,I,O,M,N,D)=>{M=M||m.type==="svg",p==null?z(m,w,C,I,O,M,N,D):ae(p,m,I,O,M,N,D)},z=(p,m,w,C,I,O,M,N)=>{let D,A;const{type:H,props:B,shapeFlag:W,transition:X,dirs:se}=p;if(D=p.el=o(p.type,O,B&&B.is,B),W&8?u(D,p.children):W&16&&F(p.children,D,null,C,I,O&&H!=="foreignObject",M,N),se&&rs(p,null,C,"created"),te(D,p,p.scopeId,M,C),B){for(const we in B)we!=="value"&&!Po(we)&&r(D,we,null,B[we],O,p.children,C,I,L);"value"in B&&r(D,"value",null,B.value),(A=B.onVnodeBeforeMount)&&sn(A,C,p)}se&&rs(p,null,C,"beforeMount");const Ce=(!I||I&&!I.pendingBranch)&&X&&!X.persisted;Ce&&X.beforeEnter(D),s(D,m,w),((A=B&&B.onVnodeMounted)||Ce||se)&&Et(()=>{A&&sn(A,C,p),Ce&&X.enter(D),se&&rs(p,null,C,"mounted")},I)},te=(p,m,w,C,I)=>{if(w&&d(p,w),C)for(let O=0;O<C.length;O++)d(p,C[O]);if(I){let O=I.subTree;if(m===O){const M=I.vnode;te(p,M,M.scopeId,M.slotScopeIds,I.parent)}}},F=(p,m,w,C,I,O,M,N,D=0)=>{for(let A=D;A<p.length;A++){const H=p[A]=N?Un(p[A]):qt(p[A]);_(null,H,m,w,C,I,O,M,N)}},ae=(p,m,w,C,I,O,M)=>{const N=m.el=p.el;let{patchFlag:D,dynamicChildren:A,dirs:H}=m;D|=p.patchFlag&16;const B=p.props||Ae,W=m.props||Ae;let X;w&&os(w,!1),(X=W.onVnodeBeforeUpdate)&&sn(X,w,m,p),H&&rs(m,p,w,"beforeUpdate"),w&&os(w,!0);const se=I&&m.type!=="foreignObject";if(A?re(p.dynamicChildren,A,N,w,C,se,O):M||ve(p,m,N,null,w,C,se,O,!1),D>0){if(D&16)Ie(N,m,B,W,w,C,I);else if(D&2&&B.class!==W.class&&r(N,"class",null,W.class,I),D&4&&r(N,"style",B.style,W.style,I),D&8){const Ce=m.dynamicProps;for(let we=0;we<Ce.length;we++){const Fe=Ce[we],Wt=B[Fe],Fs=W[Fe];(Fs!==Wt||Fe==="value")&&r(N,Fe,Wt,Fs,I,p.children,w,C,L)}}D&1&&p.children!==m.children&&u(N,m.children)}else!M&&A==null&&Ie(N,m,B,W,w,C,I);((X=W.onVnodeUpdated)||H)&&Et(()=>{X&&sn(X,w,m,p),H&&rs(m,p,w,"updated")},C)},re=(p,m,w,C,I,O,M)=>{for(let N=0;N<m.length;N++){const D=p[N],A=m[N],H=D.el&&(D.type===Lt||!on(D,A)||D.shapeFlag&70)?h(D.el):w;_(D,A,H,null,C,I,O,M,!0)}},Ie=(p,m,w,C,I,O,M)=>{if(w!==C){if(w!==Ae)for(const N in w)!Po(N)&&!(N in C)&&r(p,N,w[N],null,M,m.children,I,O,L);for(const N in C){if(Po(N))continue;const D=C[N],A=w[N];D!==A&&N!=="value"&&r(p,N,A,D,M,m.children,I,O,L)}"value"in C&&r(p,"value",w.value,C.value)}},je=(p,m,w,C,I,O,M,N,D)=>{const A=m.el=p?p.el:a(""),H=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:X}=m;X&&(N=N?N.concat(X):X),p==null?(s(A,w,C),s(H,w,C),F(m.children,w,H,I,O,M,N,D)):B>0&&B&64&&W&&p.dynamicChildren?(re(p.dynamicChildren,W,w,I,O,M,N),(m.key!=null||I&&m===I.subTree)&&vm(p,m,!0)):ve(p,m,w,H,I,O,M,N,D)},vt=(p,m,w,C,I,O,M,N,D)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,w,C,M,D):Rt(m,w,C,I,O,M,D):xi(p,m,D)},Rt=(p,m,w,C,I,O,M)=>{const N=p.component=KT(p,C,I);if(Pa(p)&&(N.ctx.renderer=he),zT(N),N.asyncDep){if(I&&I.registerDep(N,Le),!p.el){const D=N.subTree=ut(bt);T(null,D,m,w)}return}Le(N,p,m,w,I,O,M)},xi=(p,m,w)=>{const C=m.component=p.component;if(ZE(p,m,w))if(C.asyncDep&&!C.asyncResolved){Te(C,m,w);return}else C.next=m,zE(C.update),C.update();else m.el=p.el,C.vnode=m},Le=(p,m,w,C,I,O,M)=>{const N=()=>{if(p.isMounted){let{next:H,bu:B,u:W,parent:X,vnode:se}=p,Ce=H,we;os(p,!1),H?(H.el=se.el,Te(p,H,M)):H=se,B&&Mo(B),(we=H.props&&H.props.onVnodeBeforeUpdate)&&sn(we,X,H,se),os(p,!0);const Fe=Al(p),Wt=p.subTree;p.subTree=Fe,_(Wt,Fe,h(Wt.el),P(Wt),p,I,O),H.el=Fe.el,Ce===null&&Hu(p,Fe.el),W&&Et(W,I),(we=H.props&&H.props.onVnodeUpdated)&&Et(()=>sn(we,X,H,se),I)}else{let H;const{el:B,props:W}=m,{bm:X,m:se,parent:Ce}=p,we=Xi(m);if(os(p,!1),X&&Mo(X),!we&&(H=W&&W.onVnodeBeforeMount)&&sn(H,Ce,m),os(p,!0),B&&ne){const Fe=()=>{p.subTree=Al(p),ne(B,p.subTree,p,I,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=Al(p);_(null,Fe,w,C,p,I,O),m.el=Fe.el}if(se&&Et(se,I),!we&&(H=W&&W.onVnodeMounted)){const Fe=m;Et(()=>sn(H,Ce,Fe),I)}(m.shapeFlag&256||Ce&&Xi(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&Et(p.a,I),p.isMounted=!0,m=w=C=null}},D=p.effect=new Mu(N,()=>ju(A),p.scope),A=p.update=()=>D.run();A.id=p.uid,os(p,!0),A()},Te=(p,m,w)=>{m.component=p;const C=p.vnode.props;p.vnode=m,p.next=null,OT(p,m.props,C,w),PT(p,m.children,w),Ei(),Lf(),Ti()},ve=(p,m,w,C,I,O,M,N,D=!1)=>{const A=p&&p.children,H=p?p.shapeFlag:0,B=m.children,{patchFlag:W,shapeFlag:X}=m;if(W>0){if(W&128){is(A,B,w,C,I,O,M,N,D);return}else if(W&256){jt(A,B,w,C,I,O,M,N,D);return}}X&8?(H&16&&L(A,I,O),B!==A&&u(w,B)):H&16?X&16?is(A,B,w,C,I,O,M,N,D):L(A,I,O,!0):(H&8&&u(w,""),X&16&&F(B,w,C,I,O,M,N,D))},jt=(p,m,w,C,I,O,M,N,D)=>{p=p||Ks,m=m||Ks;const A=p.length,H=m.length,B=Math.min(A,H);let W;for(W=0;W<B;W++){const X=m[W]=D?Un(m[W]):qt(m[W]);_(p[W],X,w,null,I,O,M,N,D)}A>H?L(p,I,O,!0,!1,B):F(m,w,C,I,O,M,N,D,B)},is=(p,m,w,C,I,O,M,N,D)=>{let A=0;const H=m.length;let B=p.length-1,W=H-1;for(;A<=B&&A<=W;){const X=p[A],se=m[A]=D?Un(m[A]):qt(m[A]);if(on(X,se))_(X,se,w,null,I,O,M,N,D);else break;A++}for(;A<=B&&A<=W;){const X=p[B],se=m[W]=D?Un(m[W]):qt(m[W]);if(on(X,se))_(X,se,w,null,I,O,M,N,D);else break;B--,W--}if(A>B){if(A<=W){const X=W+1,se=X<H?m[X].el:C;for(;A<=W;)_(null,m[A]=D?Un(m[A]):qt(m[A]),w,se,I,O,M,N,D),A++}}else if(A>W)for(;A<=B;)wt(p[A],I,O,!0),A++;else{const X=A,se=A,Ce=new Map;for(A=se;A<=W;A++){const kt=m[A]=D?Un(m[A]):qt(m[A]);kt.key!=null&&Ce.set(kt.key,A)}let we,Fe=0;const Wt=W-se+1;let Fs=!1,bf=0;const Pi=new Array(Wt);for(A=0;A<Wt;A++)Pi[A]=0;for(A=X;A<=B;A++){const kt=p[A];if(Fe>=Wt){wt(kt,I,O,!0);continue}let nn;if(kt.key!=null)nn=Ce.get(kt.key);else for(we=se;we<=W;we++)if(Pi[we-se]===0&&on(kt,m[we])){nn=we;break}nn===void 0?wt(kt,I,O,!0):(Pi[nn-se]=A+1,nn>=bf?bf=nn:Fs=!0,_(kt,m[nn],w,null,I,O,M,N,D),Fe++)}const If=Fs?BT(Pi):Ks;for(we=If.length-1,A=Wt-1;A>=0;A--){const kt=se+A,nn=m[kt],Sf=kt+1<H?m[kt+1].el:C;Pi[A]===0?_(null,nn,w,Sf,I,O,M,N,D):Fs&&(we<0||A!==If[we]?Ht(nn,w,Sf,2):we--)}}},Ht=(p,m,w,C,I=null)=>{const{el:O,type:M,transition:N,children:D,shapeFlag:A}=p;if(A&6){Ht(p.component.subTree,m,w,C);return}if(A&128){p.suspense.move(m,w,C);return}if(A&64){M.move(p,m,w,he);return}if(M===Lt){s(O,m,w);for(let B=0;B<D.length;B++)Ht(D[B],m,w,C);s(p.anchor,m,w);return}if(M===Nl){v(p,m,w);return}if(C!==2&&A&1&&N)if(C===0)N.beforeEnter(O),s(O,m,w),Et(()=>N.enter(O),I);else{const{leave:B,delayLeave:W,afterLeave:X}=N,se=()=>s(O,m,w),Ce=()=>{B(O,()=>{se(),X&&X()})};W?W(O,se,Ce):Ce()}else s(O,m,w)},wt=(p,m,w,C=!1,I=!1)=>{const{type:O,props:M,ref:N,children:D,dynamicChildren:A,shapeFlag:H,patchFlag:B,dirs:W}=p;if(N!=null&&bc(N,null,w,p,!0),H&256){m.ctx.deactivate(p);return}const X=H&1&&W,se=!Xi(p);let Ce;if(se&&(Ce=M&&M.onVnodeBeforeUnmount)&&sn(Ce,m,p),H&6)b(p.component,w,C);else{if(H&128){p.suspense.unmount(w,C);return}X&&rs(p,null,m,"beforeUnmount"),H&64?p.type.remove(p,m,w,I,he,C):A&&(O!==Lt||B>0&&B&64)?L(A,m,w,!1,!0):(O===Lt&&B&384||!I&&H&16)&&L(D,m,w),C&&Ls(p)}(se&&(Ce=M&&M.onVnodeUnmounted)||X)&&Et(()=>{Ce&&sn(Ce,m,p),X&&rs(p,null,m,"unmounted")},w)},Ls=p=>{const{type:m,el:w,anchor:C,transition:I}=p;if(m===Lt){po(w,C);return}if(m===Nl){k(p);return}const O=()=>{i(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:N}=I,D=()=>M(w,O);N?N(p.el,O,D):D()}else O()},po=(p,m)=>{let w;for(;p!==m;)w=f(p),i(p),p=w;i(m)},b=(p,m,w)=>{const{bum:C,scope:I,update:O,subTree:M,um:N}=p;C&&Mo(C),I.stop(),O&&(O.active=!1,wt(M,p,m,w)),N&&Et(N,m),Et(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},L=(p,m,w,C=!1,I=!1,O=0)=>{for(let M=O;M<p.length;M++)wt(p[M],m,w,C,I)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),j=(p,m,w)=>{p==null?m._vnode&&wt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,w),Lf(),Yg(),m._vnode=p},he={p:_,um:wt,m:Ht,r:Ls,mt:Rt,mc:F,pc:ve,pbc:re,n:P,o:t};let xe,ne;return e&&([xe,ne]=e(he)),{render:j,hydrate:xe,createApp:LT(j,xe)}}function os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vm(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Un(i[r]),a.el=o.el),n||vm(o,a)),a.type===La&&(a.el=o.el)}}function BT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const VT=t=>t.__isTeleport,Lt=Symbol(void 0),La=Symbol(void 0),bt=Symbol(void 0),Nl=Symbol(void 0),Zi=[];let Ut=null;function $r(t=!1){Zi.push(Ut=t?null:[])}function wm(){Zi.pop(),Ut=Zi[Zi.length-1]||null}let ri=1;function zf(t){ri+=t}function Em(t){return t.dynamicChildren=ri>0?Ut||Ks:null,wm(),ri>0&&Ut&&Ut.push(t),t}function Zx(t,e,n,s,i,r){return Em(Cm(t,e,n,s,i,r,!0))}function Fa(t,e,n,s,i){return Em(ut(t,e,n,s,i,!0))}function yr(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Ua="__vInternal",Tm=({key:t})=>t??null,Lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Ze(t)||Z(t)?{i:et,r:t,k:e,f:!!n}:t:null;function Cm(t,e=null,n=null,s=0,i=null,r=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tm(e),ref:e&&Lo(e),scopeId:Zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return a?(zu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ri>0&&!o&&Ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ut.push(l),l}const ut=$T;function $T(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===TT)&&(t=bt),yr(t)){const a=Qn(t,e,!0);return n&&zu(a,n),ri>0&&!r&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(JT(t)&&(t=t.__vccOpts),e){e=jT(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=ku(a)),be(l)&&(Ug(l)&&!G(l)&&(l=pt({},l)),e.style=Ru(l))}const o=$e(t)?1:eT(t)?128:VT(t)?64:be(t)?4:Z(t)?2:0;return Cm(t,e,n,s,i,o,r,!0)}function jT(t){return t?Ug(t)||Ua in t?pt({},t):t:null}function Qn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?HT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tm(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bm(t=" ",e=0){return ut(La,null,t,e)}function e1(t="",e=!1){return e?($r(),Fa(bt,null,t)):ut(bt,null,t)}function qt(t){return t==null||typeof t=="boolean"?ut(bt):G(t)?ut(Lt,null,t.slice()):typeof t=="object"?Un(t):ut(La,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function zu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ua in e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:et},n=32):(e=String(e),s&64?(n=16,e=[bm(e)]):n=8);t.children=e,t.shapeFlag|=n}function HT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ku([e.class,s.class]));else if(i==="style")e.style=Ru([e.style,s.style]);else if(Ra(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function sn(t,e,n,s=null){Vt(t,e,7,[n,s])}const WT=ym();let qT=0;function KT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||WT,r={uid:qT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new hE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(s,i),emitsOptions:Jg(s,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=QE.bind(null,r),t.ce&&t.ce(r),r}let Me=null;const jr=()=>Me||et,Yn=t=>{Me=t,t.scope.on()},Hn=()=>{Me&&Me.scope.off(),Me=null};function Im(t){return t.vnode.shapeFlag&4}let vr=!1;function zT(t,e=!1){vr=e;const{props:n,children:s}=t.vnode,i=Im(t);NT(t,n,i,e),xT(t,s);const r=i?GT(t,e):void 0;return vr=!1,r}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bg(new Proxy(t.ctx,bT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?YT(t):null;Yn(t),Ei();const r=jn(s,t,0,[t.props,i]);if(Ti(),Hn(),Du(r)){if(r.then(Hn,Hn),e)return r.then(o=>{Ic(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=r}else Ic(t,r,e)}else Sm(t,e)}function Ic(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Wg(e)),Sm(t,n)}let Gf;function Sm(t,e,n){const s=t.type;if(!t.render){if(!e&&Gf&&!s.render){const i=s.template||qu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=pt(pt({isCustomElement:r,delimiters:a},o),l);s.render=Gf(i,c)}}t.render=s.render||Yt}Yn(t),Ei(),IT(t),Ti(),Hn()}function QT(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function YT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=QT(t))},slots:t.slots,emit:t.emit,expose:e}}function Ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wg(Bg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ji)return Ji[n](t)},has(e,n){return n in e||n in Ji}}))}function XT(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function JT(t){return Z(t)&&"__vccOpts"in t}const Ft=(t,e)=>WE(t,e,vr);function ZT(t){const e=jr();let n=t();return Hn(),Du(n)&&(n=n.catch(s=>{throw Yn(e),s})),[n,()=>Yn(e)]}function Am(t,e,n){const s=arguments.length;return s===2?be(e)&&!G(e)?yr(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&yr(n)&&(n=[n]),ut(t,e,n))}const Rm=Symbol(""),e0=()=>Xt(Rm),t0="3.2.47",n0="http://www.w3.org/2000/svg",hs=typeof document<"u"?document:null,Qf=hs&&hs.createElement("template"),s0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?hs.createElementNS(n0,t):hs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Qf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Qf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function i0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function r0(t,e,n){const s=t.style,i=$e(n);if(n&&!i){if(e&&!$e(e))for(const r in e)n[r]==null&&Sc(s,r,"");for(const r in n)Sc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Yf=/\s*!important$/;function Sc(t,e,n){if(G(n))n.forEach(s=>Sc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=o0(t,e);Yf.test(n)?t.setProperty(wi(s),n.replace(Yf,""),"important"):t[s]=n}}const Xf=["Webkit","Moz","ms"],Ol={};function o0(t,e){const n=Ol[e];if(n)return n;let s=fn(e);if(s!=="filter"&&s in t)return Ol[e]=s;s=Oa(s);for(let i=0;i<Xf.length;i++){const r=Xf[i]+s;if(r in t)return Ol[e]=r}return e}const Jf="http://www.w3.org/1999/xlink";function a0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jf,e.slice(6,e.length)):t.setAttributeNS(Jf,e,n);else{const r=tE(e);n==null||r&&!Eg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function l0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eg(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Vn(t,e,n,s){t.addEventListener(e,n,s)}function c0(t,e,n,s){t.removeEventListener(e,n,s)}function u0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=h0(e);if(s){const c=r[e]=p0(s,i);Vn(t,a,c,l)}else o&&(c0(t,a,o,l),r[e]=void 0)}}const Zf=/(?:Once|Passive|Capture)$/;function h0(t){let e;if(Zf.test(t)){e={};let s;for(;s=t.match(Zf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wi(t.slice(2)),e]}let Dl=0;const f0=Promise.resolve(),d0=()=>Dl||(f0.then(()=>Dl=0),Dl=Date.now());function p0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Vt(g0(s,n.value),e,5,[s])};return n.value=t,n.attached=d0(),n}function g0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ed=/^on[a-z]/,m0=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?i0(t,s,i):e==="style"?r0(t,n,s):Ra(e)?Nu(e)||u0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_0(t,e,s,i))?l0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),a0(t,e,s,i))};function _0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ed.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ed.test(e)&&$e(n)?!1:e in t}const y0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hT.props;const oi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Mo(e,n):e};function v0(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const t1={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=oi(i);const r=s||i.props&&i.props.type==="number";Vn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=hc(a)),t._assign(a)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",v0),Vn(t,"compositionend",td),Vn(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=oi(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&hc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},n1={deep:!0,created(t,e,n){t._assign=oi(n),Vn(t,"change",()=>{const s=t._modelValue,i=km(t),r=t.checked,o=t._assign;if(G(s)){const a=Tg(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(ka(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Nm(t,r))})},mounted:nd,beforeUpdate(t,e,n){t._assign=oi(n),nd(t,e,n)}};function nd(t,{value:e,oldValue:n},s){t._modelValue=e,G(e)?t.checked=Tg(e,s.props.value)>-1:ka(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=si(e,Nm(t,!0)))}const s1={created(t,{value:e},n){t.checked=si(e,n.props.value),t._assign=oi(n),Vn(t,"change",()=>{t._assign(km(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=oi(s),e!==n&&(t.checked=si(e,s.props.value))}};function km(t){return"_value"in t?t._value:t.value}function Nm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const i1={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Mi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Mi(t,!0),s.enter(t)):s.leave(t,()=>{Mi(t,!1)}):Mi(t,e))},beforeUnmount(t,{value:e}){Mi(t,e)}};function Mi(t,e){t.style.display=e?t._vod:"none"}const w0=pt({patchProp:m0},s0);let sd;function E0(){return sd||(sd=FT(w0))}const T0=(...t)=>{const e=E0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=C0(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function C0(t){return $e(t)?document.querySelector(t):t}(function(){let t="",e=window.screen,n="";if(e.width){let E=e.width?e.width:"",v=e.height?e.height:"";n+=""+E+" x "+v}let s=navigator.appVersion,i=navigator.userAgent,r=navigator.appName,o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10),l,c,u;(c=i.indexOf("Opera"))!=-1?(r="Opera",o=i.substring(c+6),(c=i.indexOf("Version"))!=-1&&(o=i.substring(c+8))):(c=i.indexOf("MSIE"))!=-1?(r="Microsoft Internet Explorer",o=i.substring(c+5)):r=="Netscape"&&i.indexOf("Trident/")!=-1?(r="Microsoft Internet Explorer",o=i.substring(c+5),(c=i.indexOf("rv:"))!=-1&&(o=i.substring(c+3))):(c=i.indexOf("Chrome"))!=-1?(r="Chrome",o=i.substring(c+7)):(c=i.indexOf("Safari"))!=-1?(r="Safari",o=i.substring(c+7),(c=i.indexOf("Version"))!=-1&&(o=i.substring(c+8)),i.indexOf("CriOS")!=-1&&(r="Chrome")):(c=i.indexOf("Firefox"))!=-1?(r="Firefox",o=i.substring(c+8)):(l=i.lastIndexOf(" ")+1)<(c=i.lastIndexOf("/"))&&(r=i.substring(l,c),o=i.substring(c+1),r.toLowerCase()==r.toUpperCase()&&(r=navigator.appName)),(u=o.indexOf(";"))!=-1&&(o=o.substring(0,u)),(u=o.indexOf(" "))!=-1&&(o=o.substring(0,u)),(u=o.indexOf(")"))!=-1&&(o=o.substring(0,u)),a=parseInt(""+o,10),isNaN(a)&&(o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10));var h=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(s),f=!!navigator.cookieEnabled;typeof navigator.cookieEnabled>"u"&&!f&&(document.cookie="testcookie",f=document.cookie.indexOf("testcookie")!=-1);var d=t,g=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var _ in g){var y=g[_];if(y.r.test(i)){d=y.s;break}}var T=t;switch(/Windows/.test(d)&&(T=/Windows (.*)/.exec(d)[1],d="Windows"),d){case"Mac OS X":T=/Mac OS X (10[\.\_\d]+)/.exec(i)[1];break;case"Android":T=/Android ([\.\_\d]+)/.exec(i)[1];break;case"iOS":T=/OS (\d+)_(\d+)_?(\d+)?/.exec(s),T=T[1]+"."+T[2]+"."+(T[3]|0);break}window.browserInfo={screen:n,browser:r+" "+o,mobile:h,os:d+" "+T}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+Om.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},b0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new I0;const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class I0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xm=function(t){const e=Dm(t);return Va.encodeByteArray(e,!0)},Ko=function(t){return xm(t).replace(/\./g,"")},zo=function(t){try{return Va.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){return Pm(void 0,t)}function Pm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!A0(n)||(t[n]=Pm(t[n],e[n]));return t}function A0(t){return t!=="__proto__"}/**
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
 */function R0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k0=()=>R0().__FIREBASE_DEFAULTS__,N0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},Gu=()=>{try{return k0()||N0()||O0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D0=t=>{var e,n;return(n=(e=Gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},x0=t=>{const e=D0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},P0=()=>{var t;return(t=Gu())===null||t===void 0?void 0:t.config},M0=t=>{var e;return(e=Gu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function L0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function F0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){return Om.NODE_ADMIN===!0}function Fm(){try{return typeof indexedDB=="object"}catch{return!1}}function U0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=B0,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?V0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,s)}}function V0(t,e){return t.replace($0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Er(zo(r[0])||""),n=Er(zo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},j0=function(t){const e=Um(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},H0=function(t){const e=Um(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rd(r)&&rd(o)){if(!Ac(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class W0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function q0(t,e){const n=new K0(t,e);return n.subscribe.bind(n)}class K0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");z0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=xl),i.error===void 0&&(i.error=xl),i.complete===void 0&&(i.complete=xl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xl(){}function G0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$a=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const ls="[DEFAULT]";/**
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
 */class Y0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J0(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:X0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X0(t){return t===ls?void 0:t}function J0(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const eC={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},tC=de.INFO,nC={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=nC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=tC,this._logHandler=sC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const iC=(t,e)=>e.some(n=>t instanceof n);let od,ad;function rC(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oC(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bm=new WeakMap,Rc=new WeakMap,Vm=new WeakMap,Pl=new WeakMap,Xu=new WeakMap;function aC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bm.set(n,t)}).catch(()=>{}),Xu.set(e,t),e}function lC(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cC(t){kc=t(kc)}function uC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ml(this),e,...n);return Vm.set(s,e.sort?e.sort():[e]),Wn(s)}:oC().includes(t)?function(...e){return t.apply(Ml(this),e),Wn(Bm.get(this))}:function(...e){return Wn(t.apply(Ml(this),e))}}function hC(t){return typeof t=="function"?uC(t):(t instanceof IDBTransaction&&lC(t),iC(t,rC())?new Proxy(t,kc):t)}function Wn(t){if(t instanceof IDBRequest)return aC(t);if(Pl.has(t))return Pl.get(t);const e=hC(t);return e!==t&&(Pl.set(t,e),Xu.set(e,t)),e}const Ml=t=>Xu.get(t);function fC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Wn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Wn(o.result),l.oldVersion,l.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dC=["get","getKey","getAll","getAllKeys","count"],pC=["put","add","delete","clear"],Ll=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=pC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||dC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ll.set(e,r),r}cC(t=>({...t,get:(e,n,s)=>ld(e,n)||t.get(e,n,s),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
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
 */class gC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",cd="0.9.7";/**
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
 */const Ts=new Hr("@firebase/app"),_C="@firebase/app-compat",yC="@firebase/analytics-compat",vC="@firebase/analytics",wC="@firebase/app-check-compat",EC="@firebase/app-check",TC="@firebase/auth",CC="@firebase/auth-compat",bC="@firebase/database",IC="@firebase/database-compat",SC="@firebase/functions",AC="@firebase/functions-compat",RC="@firebase/installations",kC="@firebase/installations-compat",NC="@firebase/messaging",OC="@firebase/messaging-compat",DC="@firebase/performance",xC="@firebase/performance-compat",PC="@firebase/remote-config",MC="@firebase/remote-config-compat",LC="@firebase/storage",FC="@firebase/storage-compat",UC="@firebase/firestore",BC="@firebase/firestore-compat",VC="firebase",$C="9.19.1";/**
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
 */const Oc="[DEFAULT]",jC={[Nc]:"fire-core",[_C]:"fire-core-compat",[vC]:"fire-analytics",[yC]:"fire-analytics-compat",[EC]:"fire-app-check",[wC]:"fire-app-check-compat",[TC]:"fire-auth",[CC]:"fire-auth-compat",[bC]:"fire-rtdb",[IC]:"fire-rtdb-compat",[SC]:"fire-fn",[AC]:"fire-fn-compat",[RC]:"fire-iid",[kC]:"fire-iid-compat",[NC]:"fire-fcm",[OC]:"fire-fcm-compat",[DC]:"fire-perf",[xC]:"fire-perf-compat",[PC]:"fire-rc",[MC]:"fire-rc-compat",[LC]:"fire-gcs",[FC]:"fire-gcs-compat",[UC]:"fire-fst",[BC]:"fire-fst-compat","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const Qo=new Map,Dc=new Map;function HC(t,e){try{t.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Dc.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of Qo.values())HC(n,t);return!0}function WC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const qC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new bi("app","Firebase",qC);/**
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
 */class KC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=$C;function $m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=P0()),!n)throw qn.create("no-options");const r=Qo.get(i);if(r){if(Ac(n,r.options)&&Ac(s,r.config))return r;throw qn.create("duplicate-app",{appName:i})}const o=new Z0(i);for(const l of Dc.values())o.addComponent(l);const a=new KC(n,s,o);return Qo.set(i,a),a}function jm(t=Oc){const e=Qo.get(t);if(!e&&t===Oc)return $m();if(!e)throw qn.create("no-app",{appName:t});return e}function Dt(t,e,n){var s;let i=(s=jC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(a.join(" "));return}pn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zC="firebase-heartbeat-database",GC=1,Tr="firebase-heartbeat-store";let Fl=null;function Hm(){return Fl||(Fl=fC(zC,GC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tr)}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Fl}async function QC(t){try{return(await Hm()).transaction(Tr).objectStore(Tr).get(Wm(t))}catch(e){if(e instanceof Dn)Ts.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ts.warn(n.message)}}}async function ud(t,e){try{const s=(await Hm()).transaction(Tr,"readwrite");return await s.objectStore(Tr).put(e,Wm(t)),s.done}catch(n){if(n instanceof Dn)Ts.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ts.warn(s.message)}}}function Wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YC=1024,XC=30*24*60*60*1e3;class JC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=XC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hd(),{heartbeatsToSend:n,unsentEntries:s}=ZC(this._heartbeatsCache.heartbeats),i=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hd(){return new Date().toISOString().substring(0,10)}function ZC(t,e=YC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fm()?U0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fd(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tb(t){pn(new en("platform-logger",e=>new gC(e),"PRIVATE")),pn(new en("heartbeat",e=>new JC(e),"PRIVATE")),Dt(Nc,cd,t),Dt(Nc,cd,"esm2017"),Dt("fire-js","")}tb("");var nb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Ju=Ju||{},Y=nb||self;function Yo(){}function ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sb(t){return Object.prototype.hasOwnProperty.call(t,Ul)&&t[Ul]||(t[Ul]=++ib)}var Ul="closure_uid_"+(1e9*Math.random()>>>0),ib=0;function rb(t,e,n){return t.call.apply(t.bind,arguments)}function ob(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=rb:ft=ob,ft.apply(null,arguments)}function Eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ts(){this.s=this.s,this.o=this.o}var ab=0;ts.prototype.s=!1;ts.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ab!=0)&&sb(this)};ts.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function dd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ja(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var lb=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Yo,e),Y.removeEventListener("test",Yo,e)}catch{}return t}();function Xo(t){return/^[\s\xa0]*$/.test(t)}var pd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bl(t,e){return t<e?-1:t>e?1:0}function Ha(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Ha().indexOf(t)!=-1}function eh(t){return eh[" "](t),t}eh[" "]=Yo;function cb(t){var e=fb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ub=an("Opera"),li=an("Trident")||an("MSIE"),Km=an("Edge"),xc=Km||li,zm=an("Gecko")&&!(Ha().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),hb=Ha().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function Gm(){var t=Y.document;return t?t.documentMode:void 0}var Jo;e:{var Vl="",$l=function(){var t=Ha();if(zm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Km)return/Edge\/([\d\.]+)/.exec(t);if(li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hb)return/WebKit\/(\S+)/.exec(t);if(ub)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($l&&(Vl=$l?$l[1]:""),li){var jl=Gm();if(jl!=null&&jl>parseFloat(Vl)){Jo=String(jl);break e}}Jo=Vl}var fb={};function db(){return cb(function(){let t=0;const e=pd(String(Jo)).split("."),n=pd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Bl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Bl(i[2].length==0,r[2].length==0)||Bl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Pc;if(Y.document&&li){var gd=Gm();Pc=gd||parseInt(Jo,10)||void 0}else Pc=void 0;var pb=Pc;function Cr(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zm){e:{try{eh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.X.h.call(this)}}nt(Cr,dt);var gb={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kr="closure_listenable_"+(1e6*Math.random()|0),mb=0;function _b(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++mb,this.ba=this.ea=!1}function Wa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function th(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Qm(t){const e={};for(const n in t)e[n]=t[n];return e}const md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ym(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<md.length;r++)n=md[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Lc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _b(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Mc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=qm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var nh="closure_lm_"+(1e6*Math.random()|0),Hl={};function Xm(t,e,n,s,i){if(s&&s.once)return Zm(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xm(t,e[r],n,s,i);return null}return n=rh(n),t&&t[Kr]?t.N(e,n,qr(s)?!!s.capture:!!s,i):Jm(t,e,n,!1,s,i)}function Jm(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=qr(i)?!!i.capture:!!i,a=ih(t);if(a||(t[nh]=a=new qa(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(t_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yb(){function t(n){return e.call(t.src,t.listener,n)}const e=vb;return t}function Zm(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Zm(t,e[r],n,s,i);return null}return n=rh(n),t&&t[Kr]?t.O(e,n,qr(s)?!!s.capture:!!s,i):Jm(t,e,n,!0,s,i)}function e_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)e_(t,e[r],n,s,i);else s=qr(s)?!!s.capture:!!s,n=rh(n),t&&t[Kr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Lc(r,n,s,i),-1<n&&(Wa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ih(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lc(e,n,s,i)),(n=-1<t?e[t]:null)&&sh(n))}function sh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Kr])Mc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(t_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ih(e))?(Mc(n,t),n.h==0&&(n.src=null,e[nh]=null)):Wa(t)}}}function t_(t){return t in Hl?Hl[t]:Hl[t]="on"+t}function vb(t,e){if(t.ba)t=!0;else{e=new Cr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&sh(t),t=n.call(s,e)}return t}function ih(t){return t=t[nh],t instanceof qa?t:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function rh(t){return typeof t=="function"?t:(t[Wl]||(t[Wl]=function(e){return t.handleEvent(e)}),t[Wl])}function Ye(){ts.call(this),this.i=new qa(this),this.P=this,this.I=null}nt(Ye,ts);Ye.prototype[Kr]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){e_(this,t,e,n,s)};function tt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(s,t),Ym(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=To(o,s,!0,e)&&i}if(o=e.g=t,i=To(o,s,!0,e)&&i,i=To(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=To(o,s,!1,e)&&i}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wa(n[s]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function To(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Mc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var oh=Y.JSON.stringify;function wb(){var t=i_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Eb{constructor(){this.h=this.g=null}add(e,n){const s=n_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var n_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tb,t=>t.reset());class Tb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cb(t){Y.setTimeout(()=>{throw t},0)}function s_(t,e){Fc||bb(),Uc||(Fc(),Uc=!0),i_.add(t,e)}var Fc;function bb(){var t=Y.Promise.resolve(void 0);Fc=function(){t.then(Ib)}}var Uc=!1,i_=new Eb;function Ib(){for(var t;t=wb();){try{t.h.call(t.g)}catch(n){Cb(n)}var e=n_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Uc=!1}function Ka(t,e){Ye.call(this),this.h=t||1,this.g=e||Y,this.j=ft(this.lb,this),this.l=Date.now()}nt(Ka,Ye);V=Ka.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tt(this,"tick"),this.ca&&(ah(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ah(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Ka.X.M.call(this),ah(this),delete this.g};function lh(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function r_(t){t.g=lh(()=>{t.g=null,t.i&&(t.i=!1,r_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sb extends ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:r_(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(t){ts.call(this),this.h=t,this.g={}}nt(br,ts);var _d=[];function o_(t,e,n,s){Array.isArray(n)||(n&&(_d[0]=n.toString()),n=_d);for(var i=0;i<n.length;i++){var r=Xm(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function a_(t){th(t.g,function(e,n){this.g.hasOwnProperty(n)&&sh(e)},t),t.g={}}br.prototype.M=function(){br.X.M.call(this),a_(this)};br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Aa=function(){this.g=!1};function Ab(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Rb(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nb(t,n)+(s?" "+s:"")})}function kb(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function Nb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return oh(n)}catch{return e}}var Ns={},yd=null;function Ga(){return yd=yd||new Ye}Ns.Pa="serverreachability";function l_(t){dt.call(this,Ns.Pa,t)}nt(l_,dt);function Ir(t){const e=Ga();tt(e,new l_(e))}Ns.STAT_EVENT="statevent";function c_(t,e){dt.call(this,Ns.STAT_EVENT,t),this.stat=e}nt(c_,dt);function yt(t){const e=Ga();tt(e,new c_(e,t))}Ns.Qa="timingevent";function u_(t,e){dt.call(this,Ns.Qa,t),this.size=e}nt(u_,dt);function zr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Qa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},h_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ch(){}ch.prototype.h=null;function vd(t){return t.h||(t.h=t.i())}function f_(){}var Gr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uh(){dt.call(this,"d")}nt(uh,dt);function hh(){dt.call(this,"c")}nt(hh,dt);var Bc;function Ya(){}nt(Ya,ch);Ya.prototype.g=function(){return new XMLHttpRequest};Ya.prototype.i=function(){return{}};Bc=new Ya;function Qr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new br(this),this.O=Ob,t=xc?125:void 0,this.T=new Ka(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new d_}function d_(){this.i=null,this.g="",this.h=!1}var Ob=45e3,Vc={},Zo={};V=Qr.prototype;V.setTimeout=function(t){this.O=t};function $c(t,e,n){t.K=1,t.v=Ja(An(e)),t.s=n,t.P=!0,p_(t,null)}function p_(t,e){t.F=Date.now(),Yr(t),t.A=An(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),T_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new d_,t.g=H_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sb(ft(t.La,t,t.g),t.N)),o_(t.S,t.g,"readystatechange",t.ib),e=t.H?Qm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ir(),Ab(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&Tn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=Tn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||xc||this.g&&(this.h.h||this.g.fa()||Cd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ir(3):Ir(2)),Xa(this);var n=this.g.aa();this.Y=n;t:if(g_(this)){var s=Cd(this.g);t="";var i=s.length,r=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),er(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Rb(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xo(a)){var c=a;break t}}c=null}if(n=c)Hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jc(this,n);else{this.i=!1,this.o=3,yt(12),ds(this),er(this);break e}}this.P?(m_(this,u,o),xc&&this.i&&u==3&&(o_(this.S,this.T,"tick",this.hb),this.T.start())):(Hs(this.j,this.m,o,null),jc(this,o)),u==4&&ds(this),this.i&&!this.I&&(u==4?B_(this.l,this):(this.i=!1,Yr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),ds(this),er(this)}}}catch{}finally{}};function g_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function m_(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Db(t,n),i==Zo){e==4&&(t.o=4,yt(14),s=!1),Hs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vc){t.o=4,yt(15),Hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Hs(t.j,t.m,i,null),jc(t,i);g_(t)&&i!=Zo&&i!=Vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yh(e),e.K=!0,yt(11))):(Hs(t.j,t.m,n,"[Invalid Chunked Response]"),ds(t),er(t))}V.hb=function(){if(this.g){var t=Tn(this.g),e=this.g.fa();this.C<e.length&&(Xa(this),m_(this,t,e),this.i&&t!=4&&Yr(this))}};function Db(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Zo:(n=Number(e.substring(n,s)),isNaN(n)?Vc:(s+=1,s+n>e.length?Zo:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,ds(this)};function Yr(t){t.V=Date.now()+t.O,__(t,t.O)}function __(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zr(ft(t.gb,t),e)}function Xa(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kb(this.j,this.A),this.K!=2&&(Ir(),yt(17)),ds(this),this.o=2,er(this)):__(this,this.V-t)};function er(t){t.l.G==0||t.I||B_(t.l,t)}function ds(t){Xa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ah(t.T),a_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.h,t))){if(!t.J&&Hc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)na(n),tl(n);else break e;_h(n),yt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zr(ft(n.cb,n),6e3));if(1>=I_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ps(n,11)}else if((t.J||n.g==t)&&na(n),!Xo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(fh(r,r.h),r.h=null))}if(s.D){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Oe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=j_(s,s.H?s.ka:null,s.V),o.J){S_(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Xa(a),Yr(a)),s.g=o}else F_(s);0<n.i.length&&nl(n)}else c[0]!="stop"&&c[0]!="close"||ps(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ps(n,7):mh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ir(4)}catch{}}function xb(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Pb(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function y_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Pb(t),s=xb(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var v_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vs){this.h=e!==void 0?e:t.h,ea(this,t.j),this.s=t.s,this.g=t.g,ta(this,t.m),this.l=t.l,e=t.i;var n=new Sr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wd(this,n),this.o=t.o}else t&&(n=String(t).match(v_))?(this.h=!!e,ea(this,n[1]||"",!0),this.s=Hi(n[2]||""),this.g=Hi(n[3]||"",!0),ta(this,n[4]),this.l=Hi(n[5]||"",!0),wd(this,n[6]||"",!0),this.o=Hi(n[7]||"")):(this.h=!!e,this.i=new Sr(null,this.h))}vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,Ed,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,Ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?Ub:Fb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,Vb)),t.join("")};function An(t){return new vs(t)}function ea(t,e,n){t.j=n?Hi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ta(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wd(t,e,n){e instanceof Sr?(t.i=e,$b(t.i,t.h)):(n||(e=Wi(e,Bb)),t.i=new Sr(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Ja(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ed=/[#\/\?@]/g,Fb=/[#\?:]/g,Ub=/[#\?]/g,Bb=/[#\?@]/g,Vb=/#/g;function Sr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ns(t){t.g||(t.g=new Map,t.h=0,t.i&&Mb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Sr.prototype;V.add=function(t,e){ns(this),this.i=null,t=Ii(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function w_(t,e){ns(t),e=Ii(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function E_(t,e){return ns(t),e=Ii(t,e),t.g.has(e)}V.forEach=function(t,e){ns(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ns(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ns(this);let e=[];if(typeof t=="string")E_(this,t)&&(e=e.concat(this.g.get(Ii(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ns(this),this.i=null,t=Ii(this,t),E_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function T_(t,e,n){w_(t,e),0<n.length&&(t.i=null,t.g.set(Ii(t,e),Zu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ii(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $b(t,e){e&&!t.j&&(ns(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(w_(this,s),T_(this,i,n))},t)),t.j=e}var jb=class{constructor(e,n){this.h=e,this.g=n}};function C_(t){this.l=t||Hb,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hb=10;function b_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function I_(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fh(t,e){t.g?t.g.add(e):t.h=e}function S_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}C_.prototype.cancel=function(){if(this.i=A_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function A_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zu(t.i)}function dh(){}dh.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};dh.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function Wb(){this.g=new dh}function qb(t,e,n){const s=n||"";try{y_(t,function(i,r){let o=i;qr(i)&&(o=oh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Kb(t,e){const n=new za;if(Y.Image){const s=new Image;s.onload=Eo(Co,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Eo(Co,n,s,"TestLoadImage: error",!1,e),s.onabort=Eo(Co,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Eo(Co,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Co(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Xr(t){this.l=t.ac||null,this.j=t.jb||!1}nt(Xr,ch);Xr.prototype.g=function(){return new Za(this.l,this.j)};Xr.prototype.i=function(t){return function(){return t}}({});function Za(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Za,Ye);var ph=0;V=Za.prototype;V.open=function(t,e){if(this.readyState!=ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ar(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=ph};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;R_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function R_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jr(this):Ar(this),this.readyState==3&&R_(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Jr(this))};V.Ua=function(t){this.g&&(this.response=t,Jr(this))};V.ga=function(){this.g&&Jr(this)};function Jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ar(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zb=Y.JSON.parse;function Pe(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=k_,this.K=this.L=!1}nt(Pe,Ye);var k_="",Gb=/^https?$/i,Qb=["POST","PUT"];V=Pe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bc.g(),this.C=this.u?vd(this.u):vd(Bc),this.g.onreadystatechange=ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Td(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=qm(Qb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{D_(this),0<this.B&&((this.K=Yb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.qa,this)):this.A=lh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Td(this,r)}};function Yb(t){return li&&db()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,N_(t),el(t)}function N_(t){t.D||(t.D=!0,tt(t,"complete"),tt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),el(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),el(this,!0)),Pe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?O_(this):this.fb())};V.fb=function(){O_(this)};function O_(t){if(t.h&&typeof Ju<"u"&&(!t.C[1]||Tn(t)!=4||t.aa()!=2)){if(t.v&&Tn(t)==4)lh(t.Ha,0,t);else if(tt(t,"readystatechange"),Tn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(v_)[1]||null;if(!i&&Y.self&&Y.self.location){var r=Y.self.location.protocol;i=r.substr(0,r.length-1)}s=!Gb.test(i?i.toLowerCase():"")}n=s}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",N_(t)}}finally{el(t)}}}}function el(t,e){if(t.g){D_(t);const n=t.g,s=t.C[0]?Yo:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=s}catch{}}}function D_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zb(e)}};function Cd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case k_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function x_(t){let e="";return th(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=x_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function P_(t){this.Ca=0,this.i=[],this.j=new za,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Li("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Li("baseRetryDelayMs",5e3,t),this.bb=Li("retryDelaySeedMs",1e4,t),this.$a=Li("forwardChannelMaxRetries",2,t),this.ta=Li("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new C_(t&&t.concurrentRequestLimit),this.Fa=new Wb,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=P_.prototype;V.ma=8;V.G=1;function mh(t){if(M_(t),t.G==3){var e=t.U++,n=An(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Zr(t,n),e=new Qr(t,t.j,e,void 0),e.K=2,e.v=Ja(An(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=H_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yr(e)}$_(t)}function tl(t){t.g&&(yh(t),t.g.cancel(),t.g=null)}function M_(t){tl(t),t.u&&(Y.clearTimeout(t.u),t.u=null),na(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function nl(t){b_(t.h)||t.m||(t.m=!0,s_(t.Ja,t),t.C=0)}function Xb(t,e){return I_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zr(ft(t.Ja,t,e),V_(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Qr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Qm(r),Ym(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=L_(this,i,e),n=An(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),Zr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(x_(r)))+"&"+e:this.o&&gh(n,this.o,r)),fh(this.h,i),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),i.Z=!0,$c(i,n,null)):$c(i,n,e),this.G=2}}else this.G==3&&(t?bd(this,t):this.i.length==0||b_(this.h)||bd(this))};function bd(t,e){var n;e?n=e.m:n=t.U++;const s=An(t.F);Oe(s,"SID",t.I),Oe(s,"RID",n),Oe(s,"AID",t.T),Zr(t,s),t.o&&t.s&&gh(s,t.o,t.s),n=new Qr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=L_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fh(t.h,n),$c(n,s,e)}function Zr(t,e){t.ia&&th(t.ia,function(n,s){Oe(e,s,n)}),t.l&&y_({},function(n,s){Oe(e,s,n)})}function L_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ft(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{qb(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function F_(t){t.g||t.u||(t.Z=1,s_(t.Ia,t),t.A=0)}function _h(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zr(ft(t.Ia,t),V_(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,U_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zr(ft(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,yt(10),tl(this),U_(this))};function yh(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function U_(t){t.g=new Qr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=An(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),Zr(t,e),t.o&&t.s&&gh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ja(An(e)),n.s=null,n.P=!0,p_(n,t)}V.cb=function(){this.v!=null&&(this.v=null,tl(this),_h(this),yt(19))};function na(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function B_(t,e){var n=null;if(t.g==e){na(t),yh(t),t.g=null;var s=2}else if(Hc(t.h,e))n=e.D,S_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ga(),tt(s,new u_(s,n)),nl(t)}else F_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Xb(t,e)||s==2&&_h(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ps(t,5);break;case 4:ps(t,10);break;case 3:ps(t,6);break;default:ps(t,2)}}}function V_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ps(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ft(t.kb,t);n||(n=new vs("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||ea(n,"https"),Ja(n)),Kb(n.toString(),s)}else yt(2);t.G=0,t.l&&t.l.va(e),$_(t),M_(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function $_(t){if(t.G=0,t.la=[],t.l){const e=A_(t.h);(e.length!=0||t.i.length!=0)&&(dd(t.la,e),dd(t.la,t.i),t.h.i.length=0,Zu(t.i),t.i.length=0),t.l.ua()}}function j_(t,e,n){var s=n instanceof vs?An(n):new vs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ta(s,s.m);else{var i=Y.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new vs(null,void 0);s&&ea(r,s),e&&(r.g=e),i&&ta(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ma),Zr(t,s),s}function H_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new Xr({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function W_(){}V=W_.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function sa(){if(li&&!(10<=Number(pb)))throw Error("Environmental error: no available transport.")}sa.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Ye.call(this),this.g=new P_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}nt(Pt,Ye);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=j_(t,null,t.V),nl(t)};Pt.prototype.close=function(){mh(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=oh(t),t=n);e.i.push(new jb(e.ab++,t)),e.G==3&&nl(e)};Pt.prototype.M=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Pt.X.M.call(this)};function q_(t){uh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(q_,uh);function K_(){hh.call(this),this.status=1}nt(K_,hh);function Si(t){this.g=t}nt(Si,W_);Si.prototype.xa=function(){tt(this.g,"a")};Si.prototype.wa=function(t){tt(this.g,new q_(t))};Si.prototype.va=function(t){tt(this.g,new K_)};Si.prototype.ua=function(){tt(this.g,"b")};sa.prototype.createWebChannel=sa.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;h_.COMPLETE="complete";f_.EventType=Gr;Gr.OPEN="a";Gr.CLOSE="b";Gr.ERROR="c";Gr.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var Jb=function(){return new sa},Zb=function(){return Ga()},ql=Qa,eI=h_,tI=Ns,Id={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nI=Xr,bo=f_,sI=Pe;const Sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Hr("@firebase/firestore");function Ad(){return Cs.logLevel}function $(t,...e){if(Cs.logLevel<=de.DEBUG){const n=e.map(vh);Cs.debug(`Firestore (${Ai}): ${t}`,...n)}}function Rn(t,...e){if(Cs.logLevel<=de.ERROR){const n=e.map(vh);Cs.error(`Firestore (${Ai}): ${t}`,...n)}}function ia(t,...e){if(Cs.logLevel<=de.WARN){const n=e.map(vh);Cs.warn(`Firestore (${Ai}): ${t}`,...n)}}function vh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function ke(t,e){t||Q()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class rI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oI{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new z_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new it(e)}}class aI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class lI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new aI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.T=n.token,new cI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=hI(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Rr{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const fI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Rr{construct(e,n,s){return new ct(e,n,s)}static isValidIdentifier(e){return fI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(De.fromString(e))}static fromName(e){return new K(De.fromString(e).popFirst(5))}static empty(){return new K(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new De(e.slice()))}}function dI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new Xn(i,K.empty(),e)}function pI(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Xn(J.min(),K.empty(),-1)}static max(){return new Xn(J.max(),K.empty(),-1)}}function gI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _I{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==mI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}wh.ct=-1;function sl(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function yI(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??Xe.EMPTY,this.right=r??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ot{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new We(ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vI("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const wI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(ke(!!t),typeof t=="string"){let e=0;const n=wI.exec(t);if(ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function X_(t){const e=t.mapValue.fields.__previous_value__;return Y_(e)?X_(e):e}function kr(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Nr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Y_(t)?4:TI(t)?9007199254740991:10:Q()}function gn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kr(t).isEqual(kr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Jn(s.timestampValue),o=Jn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ui(s.bytesValue).isEqual(ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Be(s.doubleValue),o=Be(i.doubleValue);return r===o?ra(r)===ra(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Rd(r)!==Rd(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!gn(r[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Or(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function hi(t,e){if(t===e)return 0;const n=bs(t),s=bs(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Be(i.integerValue||i.doubleValue),a=Be(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nd(t.timestampValue,e.timestampValue);case 4:return Nd(kr(t),kr(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ui(i),a=ui(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ge(o[l],a[l]);if(c!==0)return c}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ge(Be(i.latitude),Be(r.latitude));return o!==0?o:ge(Be(i.longitude),Be(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=hi(o[l],a[l]);if(c)return c}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===So.mapValue&&r===So.mapValue)return 0;if(i===So.mapValue)return 1;if(r===So.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ge(a[u],c[u]);if(h!==0)return h;const f=hi(o[a[u]],l[c[u]]);if(f!==0)return f}return ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Jn(t),s=Jn(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function fi(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Jn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Wc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Wc(s.fields[a])}`;return r+"}"}(t.mapValue):Q();var e,n}function qc(t){return!!t&&"integerValue"in t}function Eh(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function Dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Os(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tr(n)}setAll(e){let n=ct.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=tr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Os(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Tt(tr(this.value))}}function J_(t){const e=[];return Os(t.fields,(n,s)=>{const i=new ct([n]);if(Fo(s)){const r=J_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,J.min(),J.min(),J.min(),Tt.empty(),0)}static newFoundDocument(e,n,s,i){return new rt(e,1,n,J.min(),s,i,0)}static newNoDocument(e,n){return new rt(e,2,n,J.min(),J.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,J.min(),J.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function xd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=hi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nr{constructor(e,n="asc"){this.field=e,this.dir=n}}function CI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Z_{}class He extends Z_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new II(e,n,s):n==="array-contains"?new RI(e,s):n==="in"?new kI(e,s):n==="not-in"?new NI(e,s):n==="array-contains-any"?new OI(e,s):new He(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SI(e,s):new AI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hi(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mn extends Z_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new mn(e,n)}matches(e){return ey(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ey(t){return t.op==="and"}function ty(t){return bI(t)&&ey(t)}function bI(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Kc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(ty(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function ny(t,e){return t instanceof He?function(n,s){return s instanceof He&&n.op===s.op&&n.field.isEqual(s.field)&&gn(n.value,s.value)}(t,e):t instanceof mn?function(n,s){return s instanceof mn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ny(r,s.filters[o]),!0):!1}(t,e):void Q()}function sy(t){return t instanceof He?function(e){return`${e.field.canonicalString()} ${e.op} ${fi(e.value)}`}(t):t instanceof mn?function(e){return e.op.toString()+" {"+e.getFilters().map(sy).join(" ,")+"}"}(t):"Filter"}class II extends He{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class SI extends He{constructor(e,n){super(e,"in",n),this.keys=iy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AI extends He{constructor(e,n){super(e,"not-in",n),this.keys=iy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class RI extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eh(n)&&Or(n.arrayValue,this.value)}}class kI extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Or(this.value.arrayValue,n)}}class NI extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Or(this.value.arrayValue,n)}}class OI extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Or(this.value.arrayValue,s))}}/**
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
 */class DI{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Md(t,e=null,n=[],s=[],i=null,r=null,o=null){return new DI(t,e,n,s,i,r,o)}function Th(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Kc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fi(s)).join(",")),e.ft=n}return e.ft}function Ch(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ny(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pd(t.startAt,e.startAt)&&Pd(t.endAt,e.endAt)}function zc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function xI(t,e,n,s,i,r,o,a){return new il(t,e,n,s,i,r,o,a)}function rl(t){return new il(t)}function Ld(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function MI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LI(t){return t.collectionGroup!==null}function Xs(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=MI(e),s=PI(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new nr(n)),e.dt.push(new nr(ct.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new nr(ct.keyField(),r))}}}return e.dt}function kn(t){const e=ee(t);if(!e.wt)if(e.limitType==="F")e.wt=Md(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Xs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new nr(r.field,o))}const s=e.endAt?new oa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new oa(e.startAt.position,e.startAt.inclusive):null;e.wt=Md(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Gc(t,e,n){return new il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ol(t,e){return Ch(kn(t),kn(e))&&t.limitType===e.limitType}function ry(t){return`${Th(kn(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>sy(s)).join(", ")}]`),sl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fi(s)).join(",")),`Target(${n})`}(kn(t))}; limitType=${t.limitType})`}function al(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Xs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xd(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Xs(n),s)||n.endAt&&!function(i,r,o){const a=xd(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Xs(n),s))}(t,e)}function FI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oy(t){return(e,n)=>{let s=!1;for(const i of Xs(t)){const r=UI(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function UI(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?hi(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Os(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new qe(K.comparator);function Nn(){return BI}const ay=new qe(K.comparator);function qi(...t){let e=ay;for(const n of t)e=e.insert(n.key,n);return e}function ly(t){let e=ay;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function gs(){return sr()}function cy(){return sr()}function sr(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const VI=new qe(K.comparator),$I=new We(K.comparator);function ie(...t){let e=$I;for(const n of t)e=e.add(n);return e}const jI=new We(ge);function uy(){return jI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function fy(t){return{integerValue:""+t}}function HI(t,e){return yI(e)?fy(e):hy(t,e)}/**
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
 */class ll{constructor(){this._=void 0}}function WI(t,e,n){return t instanceof aa?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Dr?py(t,e):t instanceof xr?gy(t,e):function(s,i){const r=dy(s,i),o=Fd(r)+Fd(s._t);return qc(r)&&qc(s._t)?fy(o):hy(s.serializer,o)}(t,e)}function qI(t,e,n){return t instanceof Dr?py(t,e):t instanceof xr?gy(t,e):n}function dy(t,e){return t instanceof la?qc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class aa extends ll{}class Dr extends ll{constructor(e){super(),this.elements=e}}function py(t,e){const n=my(e);for(const s of t.elements)n.some(i=>gn(i,s))||n.push(s);return{arrayValue:{values:n}}}class xr extends ll{constructor(e){super(),this.elements=e}}function gy(t,e){let n=my(e);for(const s of t.elements)n=n.filter(i=>!gn(i,s));return{arrayValue:{values:n}}}class la extends ll{constructor(e,n){super(),this.serializer=e,this._t=n}}function Fd(t){return Be(t.integerValue||t.doubleValue)}function my(t){return Eh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Dr&&s instanceof Dr||n instanceof xr&&s instanceof xr?ci(n.elements,s.elements,gn):n instanceof la&&s instanceof la?gn(n._t,s._t):n instanceof aa&&s instanceof aa}(t.transform,e.transform)}class zI{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cl{}function _y(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vy(t.key,un.none()):new no(t.key,t.data,un.none());{const n=t.data,s=Tt.empty();let i=new We(ct.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ss(t.key,s,new Ot(i.toArray()),un.none())}}function GI(t,e,n){t instanceof no?function(s,i,r){const o=s.value.clone(),a=Bd(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,r){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Bd(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(yy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ir(t,e,n,s){return t instanceof no?function(i,r,o,a){if(!Uo(i.precondition,r))return o;const l=i.value.clone(),c=Vd(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ss?function(i,r,o,a){if(!Uo(i.precondition,r))return o;const l=Vd(i.fieldTransforms,a,r),c=r.data;return c.setAll(yy(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Uo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function QI(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=dy(s.transform,i||null);r!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,r))}return n||null}function Ud(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ci(n,s,(i,r)=>KI(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class no extends cl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ss extends cl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bd(t,e,n){const s=new Map;ke(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,qI(o,a,n[i]))}return s}function Vd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,WI(r,o,e))}return s}class vy extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YI extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&GI(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ir(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ir(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=cy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=_y(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,s)=>Ud(n,s))&&ci(this.baseMutations,e.baseMutations,(n,s)=>Ud(n,s))}}class bh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ke(e.mutations.length===s.length);let i=VI;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new bh(e,n,s,i)}}/**
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
 */var Ue,le;function eS(t){switch(t){default:return Q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function wy(t){if(t===void 0)return Rn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ue.OK:return S.OK;case Ue.CANCELLED:return S.CANCELLED;case Ue.UNKNOWN:return S.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return S.INTERNAL;case Ue.UNAVAILABLE:return S.UNAVAILABLE;case Ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ue.NOT_FOUND:return S.NOT_FOUND;case Ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ue.ABORTED:return S.ABORTED;case Ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ue.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ih{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ao}static getOrCreateInstance(){return Ao===null&&(Ao=new Ih),Ao}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ao=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ul(J.min(),i,uy(),Nn(),ie())}}class so{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new so(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Ey{constructor(e,n){this.targetId=e,this.Et=n}}class Ty{constructor(e,n,s=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class $d{constructor(){this.At=0,this.Rt=Hd(),this.vt=gt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Q()}}),new so(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Hd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class tS{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Nn(),this.qt=jd(),this.Ut=new We(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(zc(o))if(i===0){const a=new K(o.path);this.Qt(s,a,rt.newNoDocument(a,J.min()))}else ke(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Ih.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&zc(a.target)){const l=new K(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,rt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ul(e,n,this.Ut,this.Lt,s);return this.Lt=Nn(),this.qt=jd(),this.Ut=new We(ge),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new $d,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new $d),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function jd(){return new qe(K.comparator)}function Hd(){return new qe(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iS=(()=>({and:"AND",or:"OR"}))();class rS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oS(t,e){return ca(t,e.toTimestamp())}function hn(t){return ke(!!t),J.fromTimestamp(function(e){const n=Jn(e);return new Ve(n.seconds,n.nanos)}(t))}function Sh(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function by(t){const e=De.fromString(t);return ke(Ry(e)),e}function Yc(t,e){return Sh(t.databaseId,e.path)}function Kl(t,e){const n=by(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Iy(n))}function Xc(t,e){return Sh(t.databaseId,e)}function aS(t){const e=by(t);return e.length===4?De.emptyPath():Iy(e)}function Jc(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iy(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:Yc(t,e),fields:n.value.mapValue.fields}}function lS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(ke(c===void 0||typeof c=="string"),gt.fromBase64String(c||"")):(ke(c===void 0||c instanceof Uint8Array),gt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?S.UNKNOWN:wy(l.code);return new q(c,l.message||"")}(o);n=new Ty(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Kl(t,s.document.name),r=hn(s.document.updateTime),o=s.document.createTime?hn(s.document.createTime):J.min(),a=new Tt({mapValue:{fields:s.document.fields}}),l=rt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Bo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Kl(t,s.document),r=s.readTime?hn(s.readTime):J.min(),o=rt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Kl(t,s.document),r=s.removedTargetIds||[];n=new Bo([],r,i,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ZI(i),o=s.targetId;n=new Ey(o,r)}}return n}function cS(t,e){let n;if(e instanceof no)n={update:Wd(t,e.key,e.value)};else if(e instanceof vy)n={delete:Yc(t,e.key)};else if(e instanceof ss)n={update:Wd(t,e.key,e.data),updateMask:yS(e.fieldMask)};else{if(!(e instanceof YI))return Q();n={verify:Yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof aa)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Dr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof la)return{fieldPath:r.field.canonicalString(),increment:o._t};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function uS(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?hn(s.updateTime):hn(i);return r.isEqual(J.min())&&(r=hn(i)),new zI(r,s.transformResults||[])}(n,e))):[]}function hS(t,e){return{documents:[Xc(t,e.path)]}}function fS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Xc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Ay(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Vs(u.field),direction:gS(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||sl(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function dS(t){let e=aS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ke(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Sy(u);return h instanceof mn&&ty(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new nr($s(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new oa(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new oa(f,h)}(n.endAt)),xI(e,i,o,r,a,"F",l,c)}function pS(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$s(e.unaryFilter.field);return He.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(e.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(e.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$s(e.unaryFilter.field);return He.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return He.create($s(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return mn.create(e.compositeFilter.filters.map(n=>Sy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function gS(t){return nS[t]}function mS(t){return sS[t]}function _S(t){return iS[t]}function Vs(t){return{fieldPath:t.canonicalString()}}function $s(t){return ct.fromServerFormat(t.fieldPath)}function Ay(t){return t instanceof He?function(e){if(e.op==="=="){if(Dd(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NAN"}};if(Od(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dd(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NOT_NAN"}};if(Od(e.value))return{unaryFilter:{field:Vs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(e.field),op:mS(e.op),value:e.value}}}(t):t instanceof mn?function(e){const n=e.getFilters().map(s=>Ay(s));return n.length===1?n[0]:{compositeFilter:{op:_S(e.op),filters:n}}}(t):Q()}function yS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ry(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s,i,r=J.min(),o=J.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.se=e}}function wS(t){const e=dS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
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
 */class ES{constructor(){this.He=new TS}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Xn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class TS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new We(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new We(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new di(0)}static bn(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ir(s.mutation,i,Ot.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=qi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Nn();const o=sr(),a=sr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ss)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ir(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=sr();let i=new qe((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ot.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=cy();u.forEach(f=>{if(!r.has(f)){const d=_y(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(gs());let a=-1,l=r;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ie())).next(u=>({batchId:a,changes:ly(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=qi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=qi();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,u){return new il(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,rt.newInvalidDocument(c)))});let o=qi();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ir(c.mutation,l,Ot.empty(),Ve.now()),al(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:hn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:wS(s.bundledQuery),readTime:hn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class AS{constructor(){this.overlays=new qe(K.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gs();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=gs(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=gs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=gs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return R.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new JI(n,s));let r=this.ts.get(n);r===void 0&&(r=ie(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.es=new We(ze.ns),this.ss=new We(ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new ze(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new ze(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new K(new De([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new K(new De([])),s=new ze(n,e),i=new ze(n,e+1);let r=ie();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return K.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new We(ze.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XI(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(ge);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),R.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new ze(new K(r),0);let a=new We(ge);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ke(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return R.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new ze(n,0),i=this._s.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.Ts=e,this.docs=new qe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let s=Nn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():rt.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Nn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gI(pI(u),s)<=0||(i.has(u.key)||al(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Q()}Es(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new NS(this)}getSize(e){return R.resolve(this.size)}}class NS extends CS{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.persistence=e,this.As=new Ri(n=>Th(n),Ch),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ah,this.targetCount=0,this.bs=di.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new di(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new wh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new OS(this),this.indexManager=new ES,this.remoteDocumentCache=function(s){return new kS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new vS(n),this.xs=new SS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new RS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new xS(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return R.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class xS extends _I{constructor(e){super(),this.currentSequenceNumber=e}}class Rh{constructor(e){this.persistence=e,this.$s=new Ah,this.Ms=null}static Fs(e){return new Rh(e)}get Bs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,s=>{const i=K.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Ld(n))return R.resolve(null);let s=kn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gc(n,null,"F"),s=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Gc(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Ld(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(Ad()<=de.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qc(n)),this.Fi(e,o,n,dI(i,-1)))})}$i(e,n){let s=new We(oy(e));return n.forEach((i,r)=>{al(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Ad()<=de.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.xi.getDocumentsMatchingQuery(e,n,Xn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new qe(ge),this.qi=new Ri(r=>Th(r),Ch),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function LS(t,e,n,s){return new MS(t,e,n,s)}async function ky(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function FS(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const _=l.docVersions.get(d);ke(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Ny(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function US(t,e){const n=ee(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(gt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,_,y){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=Nn(),c=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(BS(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(J.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function BS(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Nn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function VS(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $S(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new ws(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Zc(t,e,n){const s=ee(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function qd(t,e,n){const s=ee(t);let i=J.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ee(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?r:ie())).next(a=>(jS(s,FI(e),a),{documents:a,Wi:r})))}function jS(t,e,n){let s=t.Ui.get(e)||J.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Kd{constructor(){this.activeTargetIds=uy()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HS{constructor(){this.Br=new Kd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Kd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */let Ro=null;function zl(){return Ro===null?Ro=268435456+Math.round(2147483648*Math.random()):Ro++,"0x"+Ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const st="WebChannelConnection";class zS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=zl(),a=this.ao(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>($("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw ia("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=qS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=zl();return new Promise((o,a)=>{const l=new sI;l.setWithCredentials(!0),l.listenOnce(eI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ql.NO_ERROR:const u=l.getResponseJson();$(st,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case ql.TIMEOUT:$(st,`RPC '${e}' ${r} timed out`),a(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case ql.HTTP_ERROR:const h=l.getStatus();if($(st,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(y)>=0?y:S.UNKNOWN}(d.status);a(new q(g,d.message))}else a(new q(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{$(st,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(st,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=zl(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jb(),a=Zb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new nI({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");$(st,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new KS({Wr:_=>{f?$(st,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||($(st,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),$(st,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),g=(_,y,T)=>{_.listen(y,E=>{try{T(E)}catch(v){setTimeout(()=>{throw v},0)}})};return g(u,bo.EventType.OPEN,()=>{f||$(st,`RPC '${e}' stream ${i} transport opened.`)}),g(u,bo.EventType.CLOSE,()=>{f||(f=!0,$(st,`RPC '${e}' stream ${i} transport closed`),d.so())}),g(u,bo.EventType.ERROR,_=>{f||(f=!0,ia(st,`RPC '${e}' stream ${i} transport errored:`,_),d.so(new q(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,bo.EventType.MESSAGE,_=>{var y;if(!f){const T=_.data[0];ke(!!T);const E=T,v=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(v){$(st,`RPC '${e}' stream ${i} received error:`,v);const k=v.status;let U=function(te){const F=Ue[te];if(F!==void 0)return wy(F)}(k),z=v.message;U===void 0&&(U=S.INTERNAL,z="Unknown error status: "+k+" with message "+v.message),f=!0,d.so(new q(U,z)),u.close()}else $(st,`RPC '${e}' stream ${i} received:`,T),d.io(T)}}),g(a,tI.STAT_EVENT,_=>{_.stat===Id.PROXY?$(st,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Id.NOPROXY&&$(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return new rS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Oy(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new q(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GS extends Dy{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=lS(this.serializer,e),s=function(i){if(!("targetChange"in i))return J.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?hn(r.readTime):J.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Jc(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=zc(a)?{documents:hS(i,a)}:{query:fS(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Cy(i,r.resumeToken):r.snapshotVersion.compareTo(J.min())>0&&(o.readTime=ca(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=pS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Jc(this.serializer),n.removeTarget=e,this.Fo(n)}}class QS extends Dy{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=uS(e.writeResults,e.commitTime),s=hn(e.commitTime);return this.listener.Zo(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Jc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cS(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Rn(n),this.ru=!1):$("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ds(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.du.add(4),await io(l),l.mu.set("Unknown"),l.du.delete(4),await fl(l)}(this))})}),this.mu=new XS(s,i)}}async function fl(t){if(Ds(t))for(const e of t.wu)await e(!0)}async function io(t){for(const e of t.wu)await e(!1)}function xy(t,e){const n=ee(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Dh(n)?Oh(n):ki(n).No()&&Nh(n,e))}function Py(t,e){const n=ee(t),s=ki(n);n.fu.delete(e),s.No()&&My(n,e),n.fu.size===0&&(s.No()?s.$o():Ds(n)&&n.mu.set("Unknown"))}function Nh(t,e){t.gu.Ot(e.targetId),ki(t).jo(e)}function My(t,e){t.gu.Ot(e),ki(t).Wo(e)}function Oh(t){t.gu=new tS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ki(t).start(),t.mu.ou()}function Dh(t){return Ds(t)&&!ki(t).xo()&&t.fu.size>0}function Ds(t){return ee(t).du.size===0}function Ly(t){t.gu=void 0}async function ZS(t){t.fu.forEach((e,n)=>{Nh(t,e)})}async function eA(t,e){Ly(t),Dh(t)?(t.mu.au(e),Oh(t)):t.mu.set("Unknown")}async function tA(t,e,n){if(t.mu.set("Online"),e instanceof Ty&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ua(t,s)}else if(e instanceof Bo?t.gu.Kt(e):e instanceof Ey?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const s=await Ny(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),My(i,a);const c=new ws(l.target,a,1,l.sequenceNumber);Nh(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await ua(t,s)}}async function ua(t,e,n){if(!to(e))throw e;t.du.add(1),await io(t),t.mu.set("Offline"),n||(n=()=>Ny(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await fl(t)})}function Fy(t,e){return e().catch(n=>ua(t,n,e))}async function dl(t){const e=ee(t),n=Zn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;nA(e);)try{const i=await VS(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,sA(e,i)}catch(i){await ua(e,i)}Uy(e)&&By(e)}function nA(t){return Ds(t)&&t.lu.length<10}function sA(t,e){t.lu.push(e);const n=Zn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Uy(t){return Ds(t)&&!Zn(t).xo()&&t.lu.length>0}function By(t){Zn(t).start()}async function iA(t){Zn(t).tu()}async function rA(t){const e=Zn(t);for(const n of t.lu)e.Yo(n.mutations)}async function oA(t,e,n){const s=t.lu.shift(),i=bh.from(s,e,n);await Fy(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dl(t)}async function aA(t,e){e&&Zn(t).Jo&&await async function(n,s){if(i=s.code,eS(i)&&i!==S.ABORTED){const r=n.lu.shift();Zn(n).Oo(),await Fy(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await dl(n)}var i}(t,e),Uy(t)&&By(t)}async function Gd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=Ds(n);n.du.add(3),await io(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await fl(n)}async function lA(t,e){const n=ee(t);e?(n.du.delete(2),await fl(n)):e||(n.du.add(2),await io(n),n.mu.set("Unknown"))}function ki(t){return t.yu||(t.yu=function(e,n,s){const i=ee(e);return i.nu(),new GS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:ZS.bind(null,t),Zr:eA.bind(null,t),zo:tA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Dh(t)?Oh(t):t.mu.set("Unknown")):(await t.yu.stop(),Ly(t))})),t.yu}function Zn(t){return t.pu||(t.pu=function(e,n,s){const i=ee(e);return i.nu(),new QS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:iA.bind(null,t),Zr:aA.bind(null,t),Xo:rA.bind(null,t),Zo:oA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await dl(t)):(await t.pu.stop(),t.lu.length>0&&($("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new xh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),to(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=qi(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Js;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.Iu=new qe(K.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Q():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class pi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pi(e,n,Js.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.Eu=void 0,this.listeners=[]}}class uA{constructor(){this.queries=new Ri(e=>ry(e),ol),this.onlineState="Unknown",this.Au=new Set}}async function Mh(t,e){const n=ee(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cA),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Ph(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Fh(n)}async function Lh(t,e){const n=ee(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function hA(t,e){const n=ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Fh(n)}function fA(t,e,n){const s=ee(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fh(t){t.Au.forEach(e=>{e.next()})}class Uh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new pi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.key=e}}class $y{constructor(e){this.key=e}}class dA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ie(),this.mutatedKeys=ie(),this.Ku=oy(e),this.Gu=new Js(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Qd,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=al(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),_=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?g!==_&&(s.track({type:3,doc:d}),y=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),y=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),y=!0):f&&!d&&(s.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new pi(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Qd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ie(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new $y(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Vy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ie();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return pi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class pA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class gA{constructor(e){this.key=e,this.ec=!1}}class mA{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ri(a=>ry(a),ol),this.ic=new Map,this.rc=new Set,this.oc=new qe(K.comparator),this.uc=new Map,this.cc=new Ah,this.ac={},this.hc=new Map,this.lc=di.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function _A(t,e){const n=AA(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await $S(n.localStore,kn(e));n.isPrimaryClient&&xy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await yA(n,e,s,a==="current",o.resumeToken)}return i}async function yA(t,e,n,s,i){t.dc=(h,f,d)=>async function(g,_,y,T){let E=_.view.zu(y);E.Mi&&(E=await qd(g.localStore,_.query,!1).then(({documents:U})=>_.view.zu(U,E)));const v=T&&T.targetChanges.get(_.targetId),k=_.view.applyChanges(E,g.isPrimaryClient,v);return Xd(g,_.targetId,k.Yu),k.snapshot}(t,h,f,d);const r=await qd(t.localStore,e,!0),o=new dA(e,r.Wi),a=o.zu(r.documents),l=so.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Xd(t,n,c.Yu);const u=new pA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function vA(t,e){const n=ee(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!ol(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Py(n.remoteStore,s.targetId),eu(n,s.targetId)}).catch(eo)):(eu(n,s.targetId),await Zc(n.localStore,s.targetId,!0))}async function wA(t,e,n){const s=RA(t);try{const i=await function(r,o){const a=ee(r),l=Ve.now(),c=o.reduce((f,d)=>f.add(d.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Nn(),g=ie();return a.Ki.getEntries(f,c).next(_=>{d=_,d.forEach((y,T)=>{T.isValidDocument()||(g=g.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(_=>{u=_;const y=[];for(const T of o){const E=QI(T,u.get(T.key).overlayedDocument);E!=null&&y.push(new ss(T.key,E,J_(E.value.mapValue),un.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:ly(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new qe(ge)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await ro(s,i.changes),await dl(s.remoteStore)}catch(i){const r=Ph(i,"Failed to persist write");n.reject(r)}}async function jy(t,e){const n=ee(t);try{const s=await US(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ke(o.ec):i.removedDocuments.size>0&&(ke(o.ec),o.ec=!1))}),await ro(n,s,e)}catch(s){await eo(s)}}function Yd(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ee(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Fh(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function EA(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new qe(K.comparator);o=o.insert(r,rt.newNoDocument(r,J.min()));const a=ie().add(r),l=new ul(J.min(),new Map,new We(ge),o,a);await jy(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Bh(s)}else await Zc(s.localStore,e,!1).then(()=>eu(s,e,n)).catch(eo)}async function TA(t,e){const n=ee(t),s=e.batch.batchId;try{const i=await FS(n.localStore,e);Wy(n,s,null),Hy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ro(n,i)}catch(i){await eo(i)}}async function CA(t,e,n){const s=ee(t);try{const i=await function(r,o){const a=ee(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ke(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Wy(s,e,n),Hy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ro(s,i)}catch(i){await eo(i)}}function Hy(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Wy(t,e,n){const s=ee(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||qy(t,s)})}function qy(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Py(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Bh(t))}function Xd(t,e,n){for(const s of n)s instanceof Vy?(t.cc.addReference(s.key,e),bA(t,s)):s instanceof $y?($("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||qy(t,s.key)):Q()}function bA(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||($("SyncEngine","New document in limbo: "+n),t.rc.add(s),Bh(t))}function Bh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new K(De.fromString(e)),s=t.lc.next();t.uc.set(s,new gA(n)),t.oc=t.oc.insert(n,s),xy(t.remoteStore,new ws(kn(rl(n.path)),s,2,wh.ct))}}async function ro(t,e,n){const s=ee(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=kh.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ee(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!to(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,g)}}}(s.localStore,r))}async function IA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await ky(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(S.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ro(n,s.Qi)}}function SA(t,e){const n=ee(t),s=n.uc.get(e);if(s&&s.ec)return ie().add(s.key);{let i=ie();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function AA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EA.bind(null,e),e.nc.zo=hA.bind(null,e.eventManager),e.nc.wc=fA.bind(null,e.eventManager),e}function RA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CA.bind(null,e),e}class Jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LS(this.persistence,new PS,e.initialUser,this.serializer)}createPersistence(e){return new DS(Rh.Fs,this.serializer)}createSharedClientState(e){return new HS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=IA.bind(null,this.syncEngine),await lA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uA}createDatastore(e){const n=hl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new zS(i));var i;return function(r,o,a,l){return new YS(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Yd(this.syncEngine,a,0),o=zd.D()?new zd:new WS,new JS(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new mA(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);$("RemoteStore","RemoteStore shutting down."),n.du.add(5),await io(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=G_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ph(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ky(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gd(e.remoteStore,r)),t._onlineComponents=e}function OA(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OA(n))throw n;ia("Error using user provided cache. Falling back to memory cache: "+n),await Ql(t,new Jd)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Ql(t,new Jd);return t._offlineComponents}async function Ky(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Zd(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Zd(t,new kA))),t._onlineComponents}function xA(t){return Ky(t).then(e=>e.syncEngine)}async function ha(t){const e=await Ky(t),n=e.eventManager;return n.onListen=_A.bind(null,e.syncEngine),n.onUnlisten=vA.bind(null,e.syncEngine),n}function PA(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vh({next:h=>{r.enqueueAndForget(()=>Lh(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Uh(rl(o.path),c,{includeMetadataChanges:!0,xu:!0});return Mh(i,u)}(await ha(t),t.asyncQueue,e,n,s)),s.promise}function MA(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vh({next:h=>{r.enqueueAndForget(()=>Lh(i,u)),h.fromCache&&a.source==="server"?l.reject(new q(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Uh(o,c,{includeMetadataChanges:!0,xu:!0});return Mh(i,u)}(await ha(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zy(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LA(t,e,n,s){if(e===!0&&s===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tp(t){if(!K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function np(t){if(K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iI;switch(n.type){case"firstParty":return new lI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ep.get(e);n&&($("ComponentProvider","Removing Datastore"),ep.delete(e),n.terminate())}(this),Promise.resolve()}}function FA(t,e,n,s={}){var i;const r=(t=Jt(t,pl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ia("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=it.MOCK_USER;else{o=L0(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new q(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(l)}t._authCredentials=new rI(new z_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class oo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new oo(this.firestore,e,this._query)}}class Kn extends oo{constructor(e,n,s){super(e,n,rl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new K(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function UA(t,e,...n){if(t=At(t),zy("collection","path",e),t instanceof pl){const s=De.fromString(e,...n);return np(s),new Kn(t,null,s)}{if(!(t instanceof It||t instanceof Kn))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return np(s),new Kn(t.firestore,null,s)}}function jh(t,e,...n){if(t=At(t),arguments.length===1&&(e=G_.A()),zy("doc","path",e),t instanceof pl){const s=De.fromString(e,...n);return tp(s),new It(t,null,new K(s))}{if(!(t instanceof It||t instanceof Kn))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return tp(s),new It(t.firestore,t instanceof Kn?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Oy(this,"async_queue_retry"),this.qc=()=>{const n=Gl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Gl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new bn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!to(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Rn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=xh.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ip(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Is extends pl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new BA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gy(this),this._firestoreClient.terminate()}}function VA(t,e){const n=typeof t=="object"?t:jm(),s=typeof t=="string"?t:e||"(default)",i=WC(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=x0("firestore");r&&FA(i,...r)}return i}function gl(t){return t._firestoreClient||Gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gy(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new EI(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new NA(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(gt.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=/^__.*__$/;class jA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new no(e,this.data,n,this.fieldTransforms)}}class Qy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Wh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Wh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return fa(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Yy(this.Yc)&&$A.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class HA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||hl(e)}ua(e,n,s,i=!1){return new Wh({Yc:e,methodName:n,oa:s,path:ct.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xy(t){const e=t._freezeSettings(),n=hl(t._databaseId);return new HA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WA(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);qh("Data must be an object, but it was:",o,s);const a=Jy(s,o);let l,c;if(r.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=tu(e,h,n);if(!o.contains(f))throw new q(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ev(u,f)||u.push(f)}l=new Ot(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new jA(new Tt(a),l,c)}class yl extends Hh{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yl}}function qA(t,e,n,s){const i=t.ua(1,e,n);qh("Data must be an object, but it was:",i,s);const r=[],o=Tt.empty();Os(s,(l,c)=>{const u=Kh(e,l,n);c=At(c);const h=i.na(u);if(c instanceof yl)r.push(u);else{const f=vl(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Ot(r);return new Qy(o,a,i.fieldTransforms)}function KA(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[tu(e,s,n)],l=[i];if(r.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(tu(e,r[f])),l.push(r[f+1]);const c=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!ev(c,a[f])){const d=a[f];let g=l[f];g=At(g);const _=o.na(d);if(g instanceof yl)c.push(d);else{const y=vl(g,_);y!=null&&(c.push(d),u.set(d,y))}}const h=new Ot(c);return new Qy(u,h,o.fieldTransforms)}function vl(t,e){if(Zy(t=At(t)))return qh("Unsupported field value:",e,t),Jy(t,e);if(t instanceof Hh)return function(n,s){if(!Yy(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=vl(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=At(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:ca(s.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(n instanceof _l)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gi)return{bytesValue:Cy(s.serializer,n._byteString)};if(n instanceof It){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${$h(n)}`)}(t,e)}function Jy(t,e){const n={};return Q_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Os(t,(s,i)=>{const r=vl(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Zy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof _l||t instanceof gi||t instanceof It||t instanceof Hh)}function qh(t,e,n){if(!Zy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=$h(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function tu(t,e,n){if((e=At(e))instanceof ml)return e._internalPath;if(typeof e=="string")return Kh(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const zA=new RegExp("[~\\*/\\[\\]]");function Kh(t,e,n){if(e.search(zA)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ml(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(S.INVALID_ARGUMENT,a+t+l)}function ev(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GA extends tv{data(){return super.data()}}function nv(t,e){return typeof e=="string"?Kh(t,e):e instanceof ml?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QA{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return Os(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new _l(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=X_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);ke(Ry(s));const i=new Nr(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||Rn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iv extends tv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(nv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vo extends iv{data(e={}){return super.data(e)}}class rv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vo(this._firestore,this._userDataWriter,s.key,s,new Ki(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:XA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){t=Jt(t,It);const e=Jt(t.firestore,Is);return PA(gl(e),t._key).then(n=>av(e,t,n))}class Gh extends QA{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function JA(t){t=Jt(t,oo);const e=Jt(t.firestore,Is),n=gl(e),s=new Gh(e);return sv(t._query),MA(n,t._query).then(i=>new rv(e,s,t,i))}function o1(t,e,n,...s){t=Jt(t,It);const i=Jt(t.firestore,Is),r=Xy(i);let o;return o=typeof(e=At(e))=="string"||e instanceof ml?KA(r,"updateDoc",t._key,e,n,s):qA(r,"updateDoc",t._key,e),ov(i,[o.toMutation(t._key,un.exists(!0))])}function ZA(t,e){const n=Jt(t.firestore,Is),s=jh(t),i=YA(t.converter,e);return ov(n,[WA(Xy(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,un.exists(!1))]).then(()=>s)}function Qh(t,...e){var n,s,i;t=At(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ip(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ip(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof It)c=Jt(t.firestore,Is),u=rl(t._key.path),l={next:h=>{e[o]&&e[o](av(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Jt(t,oo);c=Jt(h.firestore,Is),u=h._query;const f=new Gh(c);l={next:d=>{e[o]&&e[o](new rv(c,f,h,d))},error:e[o+1],complete:e[o+2]},sv(t._query)}return function(h,f,d,g){const _=new Vh(g),y=new Uh(f,_,d);return h.asyncQueue.enqueueAndForget(async()=>Mh(await ha(h),y)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>Lh(await ha(h),y))}}(gl(c),u,a,l)}function ov(t,e){return function(n,s){const i=new bn;return n.asyncQueue.enqueueAndForget(async()=>wA(await xA(n),s,i)),i.promise}(gl(t),e)}function av(t,e,n){const s=n.docs.get(e._key),i=new Gh(t);return new iv(t,i,e._key,s,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ai=n})(Wr),pn(new en("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Is(new oI(n.getProvider("auth-internal")),new uI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dt(Sd,"3.10.0",t),Dt(Sd,"3.10.0","esm2017")})();var eR="firebase",tR="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(eR,tR,"app");function lv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function cv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nR=cv,uv=new bi("auth","Firebase",cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new Hr("@firebase/auth");function $o(t,...e){rp.logLevel<=de.ERROR&&rp.error(`Auth (${Wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,...e){throw Yh(t,...e)}function hv(t,...e){return Yh(t,...e)}function sR(t,e,n){const s=Object.assign(Object.assign({},nR()),{[e]:n});return new bi("auth","Firebase",s).create(e,{appName:t.name})}function Yh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return uv.create(t,...e)}function me(t,e,...n){if(!t)throw Yh(e,...n)}function rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function da(t,e){t||rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;function ms(t){da(t instanceof Function,"Expected a class definition");let e=ap.get(t);return e?(da(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ap.set(t,e),e)}function iR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ms);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rR(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rR()||F0()||"connection"in navigator)?navigator.onLine:!0}function aR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,da(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||Mm()}get(){return oR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e){da(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new ao(3e4,6e4);async function dv(t,e,n,s,i={}){return pv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Yu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fv.fetch()(gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function pv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cR),e);try{const i=new hR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ko(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sR(t,u,c);op(t,u)}}catch(i){if(i instanceof Dn)throw i;op(t,"network-request-failed",{message:String(i)})}}function gv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?lR(t.config,i):`${t.config.apiScheme}://${i}`}class hR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hv(this.auth,"network-request-failed")),uR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=hv(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return dv(t,"POST","/v1/accounts:delete",e)}async function dR(t,e){return dv(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pR(t,e=!1){const n=At(t),s=await n.getIdToken(e),i=mv(s);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:or(Yl(i.auth_time)),issuedAtTime:or(Yl(i.iat)),expirationTime:or(Yl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function mv(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gR(t){const e=mv(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&mR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await nu(t,dR(n,{idToken:s}));me(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wR(r.providerUserInfo):[],a=vR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _v(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yR(t){const e=At(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vR(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function wR(t){return t.map(e=>{var{providerId:n}=e,s=lv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){const n=await pv(t,{},async()=>{const s=Yu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=gv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return me(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await ER(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Pr;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(me(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=lv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _v(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await nu(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pR(this,e)}reload(){return yR(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nu(this,fR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:k,isAnonymous:U,providerData:z,stsTokenManager:te}=n;me(v&&te,e,"internal-error");const F=Pr.fromJSON(this.name,te);me(typeof v=="string",e,"internal-error"),Mn(h,e.name),Mn(f,e.name),me(typeof k=="boolean",e,"internal-error"),me(typeof U=="boolean",e,"internal-error"),Mn(d,e.name),Mn(g,e.name),Mn(_,e.name),Mn(y,e.name),Mn(T,e.name),Mn(E,e.name);const ae=new Zs({uid:v,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:d,tenantId:_,stsTokenManager:F,createdAt:T,lastLoginAt:E});return z&&Array.isArray(z)&&(ae.providerData=z.map(re=>Object.assign({},re))),y&&(ae._redirectEventId=y),ae}static async _fromIdTokenResponse(e,n,s=!1){const i=new Pr;i.updateFromServerResponse(n);const r=new Zs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await pa(r),r}}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const cp=yv;/**
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
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class ei{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ei(ms(cp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ms(cp);const o=Xl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ei(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ei(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AR(e))return"Blackberry";if(RR(e))return"Webos";if(CR(e))return"Safari";if((e.includes("chrome/")||bR(e))&&!e.includes("edge/"))return"Chrome";if(SR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function TR(t=dn()){return/firefox\//i.test(t)}function CR(t=dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bR(t=dn()){return/crios\//i.test(t)}function IR(t=dn()){return/iemobile/i.test(t)}function SR(t=dn()){return/android/i.test(t)}function AR(t=dn()){return/blackberry/i.test(t)}function RR(t=dn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t,e=[]){let n;switch(t){case"Browser":n=up(dn());break;case"Worker":n=`${up(dn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${s}`}/**
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
 */class kR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new kR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ms(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?At(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ms(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[ms(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return me(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function OR(t){return At(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=q0(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new ao(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */new ao(5e3,15e3);var fp="@firebase/auth",dp="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PR(t){pn(new en("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{me(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),me(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(t)},u=new NR(a,l,c);return iR(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pn(new en("auth-internal",e=>{const n=OR(e.getProvider("auth").getImmediate());return(s=>new DR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(fp,dp,xR(t)),Dt(fp,dp,"esm2017")}/**
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
 */const MR=5*60;M0("authIdTokenMaxAge");PR("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new Map,FR={activated:!1,tokenObservers:[]};function _n(t){return LR.get(t)||Object.assign({},FR)}const pp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new wr,await BR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new wr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ga=new bi("appCheck","AppCheck",VR);function $R(t){if(!_n(t).activated)throw ga.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="firebase-app-check-database",HR=1,su="firebase-app-check-store";let No=null;function WR(){return No||(No=new Promise((t,e)=>{try{const n=indexedDB.open(jR,HR);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ga.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(su,{keyPath:"compositeKey"})}}}catch(n){e(ga.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),No)}function qR(t,e){return KR(zR(t),e)}async function KR(t,e){const s=(await WR()).transaction(su,"readwrite"),r=s.objectStore(su).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(ga.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function zR(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Hr("@firebase/app-check");function gp(t,e){return Fm()?qR(t,e).catch(n=>{iu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={error:"UNKNOWN_ERROR"};function QR(t){return Va.encodeString(JSON.stringify(t),!1)}async function ru(t,e=!1){const n=t.app;$R(n);const s=_n(n);let i=s.token,r;if(i&&!zi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(zi(l)?i=l:await gp(n,void 0))}if(!e&&i&&zi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await _n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?iu.warn(l.message):iu.error(l),r=l}let a;return i?r?zi(i)?a={token:i.token,internalError:r}:a=_p(r):(a={token:i.token},s.token=i,await gp(n,i)):a=_p(r),o&&JR(n,a),a}function YR(t,e,n,s){const{app:i}=t,r=_n(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&zi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),mp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>mp(t))}function wv(t,e){const n=_n(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function mp(t){const{app:e}=t,n=_n(e);let s=n.tokenRefresher;s||(s=XR(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function XR(t){const{app:e}=t;return new UR(async()=>{const n=_n(e);let s;if(n.token?s=await ru(t,!0):s=await ru(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=_n(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},pp.RETRIAL_MIN_WAIT,pp.RETRIAL_MAX_WAIT)}function JR(t,e){const n=_n(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function zi(t){return t.expireTimeMillis-Date.now()>0}function _p(t){return{token:QR(GR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=_n(this.app);for(const n of e)wv(this.app,n.next);return Promise.resolve()}}function ek(t,e){return new ZR(t,e)}function tk(t){return{getToken:e=>ru(t,e),addTokenListener:e=>YR(t,"INTERNAL",e),removeTokenListener:e=>wv(t.app,e)}}const nk="@firebase/app-check",sk="0.6.4",ik="app-check",yp="app-check-internal";function rk(){pn(new en(ik,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return ek(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(yp).initialize()})),pn(new en(yp,t=>{const e=t.getProvider("app-check").getImmediate();return tk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dt(nk,sk)}rk();const ok=Symbol("firebaseApp");function Ev(t){return jr()&&Xt(ok,null)||jm(t)}const ln=()=>{};function Xh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function ak(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function xs(t){return!!t&&typeof t=="object"}const lk=Object.prototype;function ck(t){return xs(t)&&Object.getPrototypeOf(t)===lk}function Jh(t){return xs(t)&&t.type==="document"}function Tv(t){return xs(t)&&t.type==="collection"}function uk(t){return Jh(t)||Tv(t)}function hk(t){return xs(t)&&t.type==="query"}function fk(t){return xs(t)&&"ref"in t}function dk(t){return xs(t)&&typeof t.bucket=="string"}function pk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function gk(){return!!(jr()&&Xt(Rm,null))}const vp="@firebase/database",wp="0.14.4";/**
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
 */let Cv="";function mk(t){Cv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _k(e)}}catch{}return new yk},_s=bv("localStorage"),ou=bv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Hr("@firebase/database"),vk=function(){let t=1;return function(){return t++}}(),Iv=function(t){const e=Q0(t),n=new W0;n.update(e);const s=n.digest();return Va.encodeByteArray(s)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lo.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let Es=null,Ep=!0;const wk=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ti.logLevel=de.VERBOSE,Es=ti.log.bind(ti),e&&ou.set("logging_enabled",!0)):typeof t=="function"?Es=t:(Es=null,ou.remove("logging_enabled"))},ot=function(...t){if(Ep===!0&&(Ep=!1,Es===null&&ou.get("logging_enabled")===!0&&wk(!0)),Es){const e=lo.apply(null,t);Es(e)}},co=function(t){return function(...e){ot(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);ti.error(e)},Ss=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw ti.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+lo(...t);ti.warn(e)},Ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Tk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",As="[MAX_NAME]",Ni=function(t,e){if(t===e)return 0;if(t===mi||e===As)return-1;if(e===mi||t===As)return 1;{const n=Tp(t),s=Tp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ck=function(t,e){return t===e?0:t<e?-1:1},Fi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},Zh=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=Zh(t[e[s]]);return n+="}",n},Av=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function $t(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rv=function(t){x(!Sv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ik=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Sk=new RegExp("^-?(0*)\\d{1,10}$"),Ak=-2147483648,Rk=2147483647,Tp=function(t){if(Sk.test(t)){const e=Number(t);if(e>=Ak&&e<=Rk)return e}return null},uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},kk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ar=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Nk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class lu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="5",kv="v",Nv="s",Ov="r",Dv="f",xv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pv="ls",Mv="p",cu="ac",Lv="websocket",Fv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Lv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xk(t)&&(n.ns=t.namespace);const i=[];return $t(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.counters_={}}incrementCounter(e,n=1){xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return S0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={},Zl={};function tf(t){const e=t.toString();return Jl[e]||(Jl[e]=new Pk),Jl[e]}function Mk(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&uo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="start",Fk="close",Uk="pLPCommand",Bk="pRTLPCB",Bv="id",Vv="pw",$v="ser",Vk="cb",$k="seg",jk="ts",Hk="d",Wk="dframe",jv=1870,Hv=30,qk=jv-Hv,Kk=25e3,zk=3e4;class Ws{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=co(e),this.stats_=tf(n),this.urlFn=l=>(this.appCheckToken&&(l[cu]=this.appCheckToken),Uv(n,Fv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zk)),Tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cp)this.id=a,this.password=l;else if(o===Fk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Cp]="t",s[$v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Vk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[kv]=ef,this.transportSessionId&&(s[Nv]=this.transportSessionId),this.lastSessionId&&(s[Pv]=this.lastSessionId),this.applicationId&&(s[Mv]=this.applicationId),this.appCheckToken&&(s[cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&xv.test(location.hostname)&&(s[Ov]=Dv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bk()&&!Ik()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xm(n),i=Av(s,qk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wk]="t",s[Bv]=e,s[Vv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vk(),window[Uk+this.uniqueCallbackIdentifier]=e,window[Bk+this.uniqueCallbackIdentifier]=n,this.myIFrame=nf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bv]=this.myID,e[Vv]=this.myPW,e[$v]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hv+s.length<=jv;){const o=this.pendingSegs.shift();s=s+"&"+$k+i+"="+o.seg+"&"+jk+i+"="+o.ts+"&"+Hk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Kk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=16384,Qk=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class zt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=co(this.connId),this.stats_=tf(n),this.connURL=zt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[kv]=ef,typeof location<"u"&&location.hostname&&xv.test(location.hostname)&&(o[Ov]=Dv),n&&(o[Nv]=n),s&&(o[Pv]=s),i&&(o[cu]=i),r&&(o[Mv]=r),Uv(e,Lv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_s.set("previous_websocket_failure",!0);try{let s;Lm(),this.mySock=new ma(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ma!==null&&!zt.forceDisallow_}static previouslyFailed(){return _s.isInMemoryStorage||_s.get("previous_websocket_failure")===!0}markConnectionHealthy(){_s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Er(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Av(n,Gk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let s=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of Mr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=6e4,Xk=5e3,Jk=10*1024,Zk=100*1024,ec="t",bp="d",eN="s",Ip="r",tN="e",Sp="o",Ap="a",Rp="n",kp="p",nN="h";class sN{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=co("c:"+this.id+":"),this.transportManager_=new Mr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ar(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ec in e){const n=e[ec];n===Ap?this.upgradeIfSecondaryHealthy_():n===Ip?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fi("t",e),s=Fi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fi("t",e),s=Fi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fi(ec,e);if(bp in e){const s=e[bp];if(n===nN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Rp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eN?this.onConnectionShutdown_(s):n===Ip?this.onReset_(s):n===tN?au("Server Error: "+s):n===Sp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ef!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ar(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ar(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends qv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _a}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=32,Op=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new Ne("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function es(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function Kv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function Qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ne(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return Bt(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Qv(t,e){if(es(t)!==es(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(es(t)>es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rN{constructor(e,n){this.errorPrefix_=n,this.parts_=zv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$a(this.parts_[s]);Yv(this)}}function oN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$a(e),Yv(t)}function aN(t){const e=t.parts_.pop();t.byteLength_-=$a(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yv(t){if(t.byteLength_>Op)throw new Error(t.errorPrefix_+"has a key path longer than "+Op+" bytes ("+t.byteLength_+").");if(t.parts_.length>Np)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Np+") or object contains a cycle "+cs(t))}function cs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends qv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new sf}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=1e3,lN=60*5*1e3,Dp=30*1e3,cN=1.3,uN=3e4,hN="server_kill",xp=3;class In extends Wv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=In.nextPersistentConnectionId_++,this.log_=co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=lN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_a.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Je(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;In.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xn(e,"w")){const s=ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=j0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uN&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+In.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new sN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{xt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(hN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],id(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Zh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xp&&(this.reconnectDelay_=Dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cv.replace(/\./g,"-")]=1,Qu()?e["framework.cordova"]=1:Mm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_a.getInstance().currentlyOnline();return id(this.interruptReasons_)&&e}}In.nextPersistentConnectionId_=0;In.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(mi,e),i=new ue(mi,n);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;class Xv extends wl{static get __EMPTY_NODE(){return Oo}static set __EMPTY_NODE(e){Oo=e}compare(e,n){return Ni(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(As,Oo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Oo)}toString(){return".key"}}const ni=new Xv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class fN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Do(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Do(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Do(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Do(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new fN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){return Ni(t.name,e.name)}function rf(t,e){return Ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function pN(t){uu=t}const Jv=function(t){return typeof t=="number"?"number:"+Rv(t):"string:"+t},Zv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xn(e,".sv"),"Priority must be a string or number.")}else x(t===uu||t.isEmpty(),"priority of unexpected type.");x(t===uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zv(this.priorityNode_)}static set __childrenNodeConstructor(e){Pp=e}static get __childrenNodeConstructor(){return Pp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ce(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rv(this.value_):e+=this.value_,this.lazyHash_=Iv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew,tw;function gN(t){ew=t}function mN(t){tw=t}class _N extends wl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ni(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(As,new Ke("[PRIORITY-POST]",tw))}makePost(e,n){const s=ew(e);return new ue(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ht=new _N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=Math.log(2);class vN{constructor(e){const n=r=>parseInt(Math.log(r)/yN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ge(f,h.node,Ge.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=i(l,d),_=i(d+1,c);return h=t[d],f=n?n(h):h,new Ge(f,h.node,Ge.BLACK,g,_)}},r=function(l){let c=null,u=null,h=t.length;const f=function(g,_){const y=h-g,T=h;h-=g;const E=i(y+1,T),v=t[y],k=n?n(v):v;d(new Ge(k,v.node,_,null,E))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));_?f(y,Ge.BLACK):(f(y,Ge.BLACK),f(y,Ge.RED))}return u},o=new vN(t.length),a=r(o);return new Ct(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;const Us={};class Cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Us&&ht,"ChildrenNode.ts has not been loaded"),tc=tc||new Cn({".priority":Us},{".priority":ht}),tc}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return xn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ya(s,e.getCompare()):a=Us;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const s=Go(this.indexes_,(i,r)=>{const o=ai(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Us)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ue.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ya(a,o.getCompare())}else return Us;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ue(e.name,a))),l.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Go(this.indexes_,i=>{if(i===Us)return i;{const r=n.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new Cn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class _e{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new _e(new Ct(rf),null,Cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new _e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new _e(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{x(ce(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ht,(o,a)=>{n[o]=a.val(e),s++,r&&_e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jv(this.getPriority().val())+":"),this.forEachChild(ht,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Iv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ho?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new _e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ht),i=n.getIterator(ht);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}_e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wN extends _e{constructor(){super(new Ct(rf),_e.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _e.EMPTY_NODE}isEmpty(){return!1}}const ho=new wN;Object.defineProperties(ue,{MIN:{value:new ue(mi,_e.EMPTY_NODE)},MAX:{value:new ue(As,ho)}});Xv.__EMPTY_NODE=_e.EMPTY_NODE;Ke.__childrenNodeConstructor=_e;pN(ho);mN(ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=!0;function at(t,e=null){if(t===null)return _e.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,at(e))}if(!(t instanceof Array)&&EN){const n=[];let s=!1;if($t(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ue(o,l)))}}),n.length===0)return _e.EMPTY_NODE;const r=ya(n,dN,o=>o.name,rf);if(s){const o=ya(n,ht.getCompare());return new _e(r,at(e),new Cn({".priority":o},{".priority":ht}))}else return new _e(r,at(e),Cn.Default)}else{let n=_e.EMPTY_NODE;return $t(t,(s,i)=>{if(xn(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}gN(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN extends wl{constructor(e){super(),this.indexPath_=e,x(!oe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ni(e.name,n.name):r}makePost(e,n){const s=at(e),i=_e.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,i)}maxPost(){const e=_e.EMPTY_NODE.updateChild(this.indexPath_,ho);return new ue(As,e)}toString(){return zv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN extends wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ni(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=at(e);return new ue(n,s)}toString(){return".value"}}const bN=new CN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){return{type:"value",snapshotNode:t}}function SN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function AN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:As}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new of;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ht?n="$priority":t.index_===bN?n="$value":t.index_===ni?n="$key":(x(t.index_ instanceof TN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Wv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=va.getListenId_(e,s),a={};this.listens_[o]=a;const l=Lp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ai(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=va.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Lp(e._queryParams),s=e._path.toString(),i=new wr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Er(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.rootNode_=_e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return{value:null,children:new Map}}function nw(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,wa());const i=t.children.get(s);e=Re(e),nw(i,e,n)}}function hu(t,e,n){t.value!==null?n(e,t.value):NN(t,(s,i)=>{const r=new Ne(e.toString()+"/"+s);hu(i,r,n)})}function NN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$t(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=10*1e3,DN=30*1e3,xN=5*60*1e3;class PN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ON(e);const s=Up+(DN-Up)*Math.random();ar(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;$t(e,(i,r)=>{r>0&&xn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ar(this.reportStats_.bind(this),Math.floor(Math.random()*2*xN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function sw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=cn.ACK_USER_WRITE,this.source=sw()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new Ea(Ee(),n,this.revert)}}else return x(ce(this.path)===e,"operationForChild called for unrelated child."),new Ea(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=cn.OVERWRITE}operationForChild(e){return oe(this.path)?new Rs(this.source,Ee(),this.snap.getImmediateChild(e)):new Rs(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=cn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new Rs(this.source,Ee(),n.value):new Lr(this.source,Ee(),n)}else return x(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lr(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function MN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(RN(o.childName,o.snapshotNode))}),Vi(t,i,"child_removed",e,s,n),Vi(t,i,"child_added",e,s,n),Vi(t,i,"child_moved",r,s,n),Vi(t,i,"child_changed",e,s,n),Vi(t,i,"value",e,s,n),i}function Vi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>FN(t,a,l)),o.forEach(a=>{const l=LN(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function LN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FN(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e){return{eventCache:t,serverCache:e}}function lr(t,e,n,s){return ow(new af(e,n,s),t.serverCache)}function aw(t,e,n,s){return ow(t.eventCache,new af(e,n,s))}function fu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;const UN=()=>(nc||(nc=new Ct(Ck)),nc);class Se{constructor(e,n=UN()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return $t(e,(s,i)=>{n=n.set(new Ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(oe(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Re(e),n);return r!=null?{path:Qe(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Re(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Se(null)).set(Re(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(Re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Re(e)):null}}setTree(e,n){if(oe(e))return n;{const s=ce(e),r=(this.children.get(s)||new Se(null)).setTree(Re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(oe(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Re(e),Qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(Re(e),Qe(n,i),s):new Se(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Se(null))}}function cr(t,e,n){if(oe(e))return new Zt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Bt(i,e);return r=r.updateChild(o,n),new Zt(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new Zt(r)}}}function Bp(t,e,n){let s=t;return $t(n,(i,r)=>{s=cr(s,Qe(e,i),r)}),s}function Vp(t,e){if(oe(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Zt(n)}}function du(t,e){return Ps(t,e)!=null}function Ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function $p(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ht,(s,i)=>{e.push(new ue(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function zn(t,e){if(oe(e))return t;{const n=Ps(t,e);return n!=null?new Zt(new Se(n)):new Zt(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function _i(t,e){return lw(Ee(),t.writeTree_,e)}function lw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=lw(Qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e){return pw(e,t)}function BN(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=cr(t.visibleWrites,e,n)),t.lastWriteId=s}function VN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $N(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jN(a,s.path)?i=!1:Gt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return HN(t),!0;if(s.snap)t.visibleWrites=Vp(t.visibleWrites,s.path);else{const a=s.children;$t(a,l=>{t.visibleWrites=Vp(t.visibleWrites,Qe(s.path,l))})}return!0}else return!1}function jN(t,e){if(t.snap)return Gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gt(Qe(t.path,n),e))return!0;return!1}function HN(t){t.visibleWrites=uw(t.allWrites,WN,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WN(t){return t.visible}function uw(t,e,n){let s=Zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Gt(n,o)?(a=Bt(n,o),s=cr(s,a,r.snap)):Gt(o,n)&&(a=Bt(o,n),s=cr(s,Ee(),r.snap.getChild(a)));else if(r.children){if(Gt(n,o))a=Bt(n,o),s=Bp(s,a,r.children);else if(Gt(o,n))if(a=Bt(o,n),oe(a))s=Bp(s,Ee(),r.children);else{const l=ai(r.children,ce(a));if(l){const c=l.getChild(Re(a));s=cr(s,Ee(),c)}}}else throw Ci("WriteRecord should have .snap or .children")}}return s}function hw(t,e,n,s,i){if(!s&&!i){const r=Ps(t.visibleWrites,e);if(r!=null)return r;{const o=zn(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!du(o,Ee()))return null;{const a=n||_e.EMPTY_NODE;return _i(o,a)}}}else{const r=zn(t.visibleWrites,e);if(!i&&pu(r))return n;if(!i&&n==null&&!du(r,Ee()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Gt(c.path,e)||Gt(e,c.path))},a=uw(t.allWrites,o,e),l=n||_e.EMPTY_NODE;return _i(a,l)}}}function qN(t,e,n){let s=_e.EMPTY_NODE;const i=Ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=zn(t.visibleWrites,e);return n.forEachChild(ht,(o,a)=>{const l=_i(zn(r,new Ne(o)),a);s=s.updateImmediateChild(o,l)}),$p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=zn(t.visibleWrites,e);return $p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function KN(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(du(t.visibleWrites,r))return null;{const o=zn(t.visibleWrites,r);return pu(o)?i.getChild(n):_i(o,i.getChild(n))}}function zN(t,e,n,s){const i=Qe(e,n),r=Ps(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=zn(t.visibleWrites,i);return _i(o,s.getNode().getImmediateChild(n))}else return null}function GN(t,e){return Ps(t.visibleWrites,e)}function QN(t,e,n,s,i,r,o){let a;const l=zn(t.visibleWrites,e),c=Ps(l,Ee());if(c!=null)a=c;else if(n!=null)a=_i(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function YN(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function gu(t,e,n,s){return hw(t.writeTree,t.treePath,e,n,s)}function fw(t,e){return qN(t.writeTree,t.treePath,e)}function jp(t,e,n,s){return KN(t.writeTree,t.treePath,e,n,s)}function Ta(t,e){return GN(t.writeTree,Qe(t.treePath,e))}function XN(t,e,n,s,i,r){return QN(t.writeTree,t.treePath,e,n,s,i,r)}function lf(t,e,n){return zN(t.writeTree,t.treePath,e,n)}function dw(t,e){return pw(Qe(t.treePath,e),t.writeTree)}function pw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,AN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,SN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const gw=new ZN;class cf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new af(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),r=XN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function eO(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tO(t,e,n,s,i){const r=new JN;let o,a;if(n.type===cn.OVERWRITE){const c=n;c.source.fromUser?o=mu(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Ca(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===cn.MERGE){const c=n;c.source.fromUser?o=sO(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_u(t,e,c.path,c.children,s,i,a,r))}else if(n.type===cn.ACK_USER_WRITE){const c=n;c.revert?o=oO(t,e,c.path,s,i,r):o=iO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===cn.LISTEN_COMPLETE)o=rO(t,e,n.path,s,r);else throw Ci("Unknown operation type: "+n.type);const l=r.getChanges();return nO(e,o,l),{viewCache:o,changes:l}}function nO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(IN(fu(e)))}}function mw(t,e,n,s,i,r){const o=e.eventCache;if(Ta(s,n)!=null)return e;{let a,l;if(oe(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ks(e),u=c instanceof _e?c:_e.EMPTY_NODE,h=fw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=gu(s,ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(n);if(c===".priority"){x(es(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Re(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=jp(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=lf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return lr(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Ca(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ce(n);if(!l.isCompleteForPath(n)&&es(n)>1)return e;const g=Re(n),y=l.getNode().getImmediateChild(d).updateChild(g,s);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,g,gw,null)}const h=aw(e,c,l.isFullyInitialized()||oe(n),u.filtersNodes()),f=new cf(i,h,r);return mw(t,h,n,i,f,a)}function mu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new cf(i,e,r);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=lr(e,c,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=lr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Re(n),d=a.getNode().getImmediateChild(h);let g;if(oe(f))g=s;else{const _=u.getCompleteChild(h);_!=null?Kv(f)===".priority"&&_.getChild(Gv(f)).isEmpty()?g=_:g=_.updateChild(f,s):g=_e.EMPTY_NODE}if(d.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=lr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hp(t,e){return t.eventCache.isCompleteForChild(e)}function sO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Qe(n,l);Hp(e,ce(u))&&(a=mu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Qe(n,l);Hp(e,ce(u))||(a=mu(t,a,u,c,i,r,o))}),a}function Wp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function _u(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;oe(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Wp(t,d,f);l=Ca(t,l,new Ne(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),_=Wp(t,g,f);l=Ca(t,l,new Ne(h),_,i,r,o,a)}}),l}function iO(t,e,n,s,i,r,o){if(Ta(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ca(t,e,n,l.getNode().getChild(n),i,r,a,o);if(oe(n)){let c=new Se(null);return l.getNode().forEachChild(ni,(u,h)=>{c=c.set(new Ne(u),h)}),_u(t,e,n,c,i,r,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,h)=>{const f=Qe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),_u(t,e,n,c,i,r,a,o)}}function rO(t,e,n,s,i){const r=e.serverCache,o=aw(e,r.getNode(),r.isFullyInitialized()||oe(n),r.isFiltered());return mw(t,o,n,s,gw,i)}function oO(t,e,n,s,i,r){let o;if(Ta(s,n)!=null)return e;{const a=new cf(s,e,i),l=e.eventCache.getNode();let c;if(oe(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gu(s,ks(e));else{const h=e.serverCache.getNode();x(h instanceof _e,"serverChildren would be complete if leaf node"),u=fw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ce(n);let h=lf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Re(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,_e.EMPTY_NODE,Re(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gu(s,ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ta(s,Ee())!=null,lr(e,c,o,t.filter.filtersNodes())}}function aO(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function qp(t,e,n,s){e.type===cn.MERGE&&e.source.queryId!==null&&(x(ks(t.viewCache_),"We should always have a full cache before handling merges"),x(fu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tO(t.processor_,i,e,n,s);return eO(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lO(t,r.changes,r.viewCache.eventCache.getNode(),null)}function lO(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return MN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;function cO(t){x(!Kp,"__referenceConstructor has already been defined"),Kp=t}function uf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),qp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(qp(o,e,n,s));return r}}function hf(t,e){let n=null;for(const s of t.views.values())n=n||aO(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;function uO(t){x(!zp,"__referenceConstructor has already been defined"),zp=t}class Gp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=YN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hO(t,e,n,s,i){return BN(t.pendingWriteTree_,e,n,s,i),i?Tl(t,new Rs(sw(),e,n)):[]}function qs(t,e,n=!1){const s=VN(t.pendingWriteTree_,e);if($N(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(Ee(),!0):$t(s.children,o=>{r=r.set(new Ne(o),!0)}),Tl(t,new Ea(s.path,r,n))}else return[]}function El(t,e,n){return Tl(t,new Rs(iw(),e,n))}function fO(t,e,n){const s=Se.fromObject(n);return Tl(t,new Lr(iw(),e,s))}function dO(t,e,n,s){const i=ww(t,s);if(i!=null){const r=Ew(i),o=r.path,a=r.queryId,l=Bt(o,e),c=new Rs(rw(a),l,n);return Tw(t,o,c)}else return[]}function pO(t,e,n,s){const i=ww(t,s);if(i){const r=Ew(i),o=r.path,a=r.queryId,l=Bt(o,e),c=Se.fromObject(n),u=new Lr(rw(a),l,c);return Tw(t,o,u)}else return[]}function _w(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bt(o,e),c=hf(a,l);if(c)return c});return hw(i,e,r,n,!0)}function Tl(t,e){return yw(e,t.syncPointTree_,null,cw(t.pendingWriteTree_,Ee()))}function yw(t,e,n,s){if(oe(t.path))return vw(t,e,n,s);{const i=e.get(Ee());n==null&&i!=null&&(n=hf(i,Ee()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dw(s,o);r=r.concat(yw(a,l,c,u))}return i&&(r=r.concat(uf(i,t,s,n))),r}}function vw(t,e,n,s){const i=e.get(Ee());n==null&&i!=null&&(n=hf(i,Ee()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dw(s,o),u=t.operationForChild(o);u&&(r=r.concat(vw(u,a,l,c)))}),i&&(r=r.concat(uf(i,t,s,n))),r}function ww(t,e){return t.tagToQueryMap.get(e)}function Ew(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function Tw(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=cw(t.pendingWriteTree_,e);return uf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ff(n)}node(){return this.node_}}class df{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new df(this.syncTree_,n)}node(){return _w(this.syncTree_,this.path_)}}const gO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _O(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},_O=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yO=function(t,e,n,s){return pf(e,new df(n,t),s)},vO=function(t,e,n){return pf(t,new ff(e),n)};function pf(t,e,n){const s=t.getPriority().val(),i=Qp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ht,(a,l)=>{const c=pf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mf(t,e){let n=e instanceof Ne?e:new Ne(e),s=t,i=ce(n);for(;i!==null;){const r=ai(s.node.children,i)||{children:{},childCount:0};s=new gf(i,s,r),n=Re(n),i=ce(n)}return s}function Oi(t){return t.node.value}function Cw(t,e){t.node.value=e,yu(t)}function bw(t){return t.node.childCount>0}function wO(t){return Oi(t)===void 0&&!bw(t)}function Cl(t,e){$t(t.node.children,(n,s)=>{e(new gf(n,t,s))})}function Iw(t,e,n,s){n&&!s&&e(t),Cl(t,i=>{Iw(i,e,!0,s)}),n&&s&&e(t)}function EO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fo(t){return new Ne(t.parent===null?t.name:fo(t.parent)+"/"+t.name)}function yu(t){t.parent!==null&&TO(t.parent,t.name,t)}function TO(t,e,n){const s=wO(n),i=xn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,yu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=/[\[\].#$\/\u0000-\u001F\u007F]/,bO=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,Sw=function(t){return typeof t=="string"&&t.length!==0&&!CO.test(t)},IO=function(t){return typeof t=="string"&&t.length!==0&&!bO.test(t)},SO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IO(t)},Aw=function(t,e,n){const s=n instanceof Ne?new rN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cs(s));if(typeof e=="function")throw new Error(t+"contains a function "+cs(s)+" with contents = "+e.toString());if(Sv(e))throw new Error(t+"contains "+e.toString()+" "+cs(s));if(typeof e=="string"&&e.length>sc/3&&$a(e)>sc)throw new Error(t+"contains a string greater than "+sc+" utf8 bytes "+cs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($t(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sw(o)))throw new Error(t+" contains an invalid key ("+o+") "+cs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oN(s,o),Aw(t,a,s),aN(s)}),i&&r)throw new Error(t+' contains ".value" child '+cs(s)+" in addition to actual children.")}},AO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SO(n))throw new Error(G0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kO(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Qv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ms(t,e,n){kO(t,n),NO(t,s=>Gt(s,e)||Gt(e,s))}function NO(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(OO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Es&&ot("event: "+n.toString()),uo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="repo_interrupt",xO=25;class PO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wa(),this.transactionQueueTree_=new gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MO(t,e,n){if(t.stats_=tf(t.repoInfo_),t.forceRestClient_||kk())t.server_=new va(t.repoInfo_,(s,i,r,o)=>{Yp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new In(t.repoInfo_,e,(s,i,r,o)=>{Yp(t,s,i,r,o)},s=>{Xp(t,s)},s=>{FO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Mk(t.repoInfo_,()=>new PN(t.stats_,t.server_)),t.infoData_=new kN,t.infoSyncTree_=new Gp({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=El(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_f(t,"connected",!1),t.serverSyncTree_=new Gp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ms(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function LO(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Rw(t){return gO({timestamp:LO(t)})}function Yp(t,e,n,s,i){t.dataUpdateCount++;const r=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Go(n,c=>at(c));o=pO(t.serverSyncTree_,r,l,i)}else{const l=at(n);o=dO(t.serverSyncTree_,r,l,i)}else if(s){const l=Go(n,c=>at(c));o=fO(t.serverSyncTree_,r,l)}else{const l=at(n);o=El(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=vf(t,r)),Ms(t.eventQueue_,a,o)}function Xp(t,e){_f(t,"connected",e),e===!1&&BO(t)}function FO(t,e){$t(e,(n,s)=>{_f(t,n,s)})}function _f(t,e,n){const s=new Ne("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=El(t.infoSyncTree_,s,i);Ms(t.eventQueue_,s,r)}function UO(t){return t.nextWriteId_++}function BO(t){kw(t,"onDisconnectEvents");const e=Rw(t),n=wa();hu(t.onDisconnect_,Ee(),(i,r)=>{const o=yO(i,r,t.serverSyncTree_,e);nw(n,i,o)});let s=[];hu(n,Ee(),(i,r)=>{s=s.concat(El(t.serverSyncTree_,i,r));const o=HO(t,i);vf(t,o)}),t.onDisconnect_=wa(),Ms(t.eventQueue_,Ee(),s)}function VO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DO)}function kw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Nw(t,e,n){return _w(t.serverSyncTree_,e,n)||_e.EMPTY_NODE}function yf(t,e=t.transactionQueueTree_){if(e||bl(t,e),Oi(e)){const n=Dw(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$O(t,fo(e),n)}else bw(e)&&Cl(e,n=>{yf(t,n)})}function $O(t,e,n){const s=n.map(c=>c.currentWriteId),i=Nw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{kw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(qs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();bl(t,mf(t.transactionQueueTree_,e)),yf(t,t.transactionQueueTree_),Ms(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)uo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}vf(t,e)}},o)}function vf(t,e){const n=Ow(t,e),s=fo(n),i=Dw(t,n);return jO(t,i,s),s}function jO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=xO)u=!0,h="maxretry",i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Nw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Aw("transaction failed: Data returned ",d,l.path);let g=at(d);typeof d=="object"&&d!=null&&xn(d,".priority")||(g=g.updatePriority(f.getPriority()));const y=l.currentWriteId,T=Rw(t),E=vO(g,f,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=UO(t),o.splice(o.indexOf(y),1),i=i.concat(hO(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(qs(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(qs(t.serverSyncTree_,l.currentWriteId,!0))}Ms(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}bl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)uo(s[a]);yf(t,t.transactionQueueTree_)}function Ow(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&Oi(s)===void 0;)s=mf(s,n),e=Re(e),n=ce(e);return s}function Dw(t,e){const n=[];return xw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function xw(t,e,n){const s=Oi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Cl(e,i=>{xw(t,i,n)})}function bl(t,e){const n=Oi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Cw(e,n.length>0?n:void 0)}Cl(e,s=>{bl(t,s)})}function HO(t,e){const n=fo(Ow(t,e)),s=mf(t.transactionQueueTree_,e);return EO(s,i=>{ic(t,i)}),ic(t,s),Iw(s,i=>{ic(t,i)}),n}function ic(t,e){const n=Oi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cw(e,void 0):n.length=r+1,Ms(t.eventQueue_,fo(e),i);for(let o=0;o<s.length;o++)uo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jp=function(t,e){const n=KO(t),s=n.namespace;n.domain==="firebase.com"&&Ss(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ek();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},KO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=WO(t.substring(u,h)));const f=qO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return oe(this._path)?null:Kv(this._path)}get ref(){return new Di(this._repo,this._path)}get _queryIdentifier(){const e=Fp(this._queryParams),n=Zh(e);return n==="{}"?"default":n}get _queryObject(){return Fp(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof wf))return!1;const n=this._repo===e._repo,s=Qv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iN(this._path)}}class Di extends wf{constructor(e,n){super(e,n,new of,!1)}get parent(){const e=Gv(this._path);return e===null?null:new Di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}cO(Di);uO(Di);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="FIREBASE_DATABASE_EMULATOR_HOST",vu={};let GO=!1;function QO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jp(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[zO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Jp(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new lu(lu.OWNER):new Ok(t.name,t.options,e);AO("Invalid Firebase Database URL",o),oe(o.path)||Ss("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XO(a,t,u,new Nk(t.name,n));return new JO(h,t)}function YO(t,e){const n=vu[e];(!n||n[t.key]!==t)&&Ss(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VO(t),delete n[t.key]}function XO(t,e,n,s){let i=vu[e.name];i||(i={},vu[e.name]=i);let r=i[t.toURLString()];return r&&Ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PO(t,GO,n,s),i[t.toURLString()]=r,r}class JO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Di(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ss("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ZO(t){mk(Wr),pn(new en("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(vp,wp,t),Dt(vp,wp,"esm2017")}In.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};In.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebasestorage.googleapis.com",eD="storageBucket",tD=2*60*1e3,nD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Dn{constructor(e,n,s=0){super(rc(e),`Firebase Storage: ${n} (${rc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function rc(t){return"storage/"+t}function sD(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(yn.UNKNOWN,t)}function iD(){return new vn(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rD(){return new vn(yn.CANCELED,"User canceled the upload/download.")}function oD(t){return new vn(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function aD(t){return new vn(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zp(t){return new vn(yn.INVALID_ARGUMENT,t)}function Mw(){return new vn(yn.APP_DELETED,"The Firebase app was deleted.")}function lD(t){return new vn(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(s.path==="")return s;throw aD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},_=n===Pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",T=new RegExp(`^https?://${_}/${i}/${y}`,"i"),v=[{regex:a,indices:l,postModify:r},{regex:d,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<v.length;k++){const U=v[k],z=U.regex.exec(e);if(z){const te=z[U.indices.bucket];let F=z[U.indices.path];F||(F=""),s=new Qt(te,F),U.postModify(s);break}}if(s==null)throw oD(e);return s}}class cD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function f(){r&&clearTimeout(r)}function d(y,...T){if(c){f();return}if(y){f(),u.call(null,y,...T);return}if(l()||o){f(),u.call(null,y,...T);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,h(v)}let g=!1;function _(y){g||(g=!0,f(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function hD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t){return t!==void 0}function eg(t,e,n,s){if(s<e)throw Zp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Zp(`Invalid value for '${t}'. Expected ${n} or less.`)}function dD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ba;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ba||(ba={}));/**
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
 */function pD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new xo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ba.NO_ERROR,l=r.getStatus();if(!a||pD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ba.ABORT;s(!1,new xo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new xo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=sD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Mw():rD();o(l)}else{const l=iD();o(l)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=uD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function mD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _D(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wD(t,e,n,s,i,r,o=!0){const a=dD(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yD(c,e),mD(c,n),_D(c,r),vD(c,s),new gD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ia{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ia(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TD(this._location.path)}get storage(){return this._service}get parent(){const e=ED(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Ia(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lD(e)}}function tg(t,e){const n=e==null?void 0:e[eD];return n==null?null:Qt.makeFromBucketSpec(n,t)}class CD{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tD,this._maxUploadRetryTime=nD,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ia(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new cD(Mw());{const o=wD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ng="@firebase/storage",sg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="storage";function ID(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new CD(n,s,i,e,Wr)}function SD(){pn(new en(bD,ID,"PUBLIC").setMultipleInstances(!0)),Dt(ng,sg,""),Dt(ng,sg,"esm2017")}SD();const oc=new WeakMap;function Lw(t,e){return oc.has(e)||oc.set(e,t||{f:{},r:{},s:{},u:{}}),oc.get(e)}function AD(t,e,n,s){if(!t)return n;const[i,r]=Fw(t);if(!i)return n;const o=Lw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function RD(t,e,n,s){if(!t)return;const[i,r]=Fw(t);if(!i)return;const o=Lw(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(ln),a}function Fw(t){return uk(t)||hk(t)?["f",t.path]:fk(t)?["r",t.toString()]:dk(t)?["s",t.toString()]:[]}const ac=new WeakMap;function kD(t,e,n){const s=Ev();ac.has(s)||ac.set(s,new Map);const i=ac.get(s),r=RD(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):ln}const ND={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function wu(t,e,n,s){if(!ck(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const g=Object.getOwnPropertyDescriptor(a,d);g&&!g.enumerable&&Object.defineProperty(h,d,g)});for(const d in a){const g=a[d];if(g==null||g instanceof Date||g instanceof Ve||g instanceof _l)h[d]=g;else if(Jh(g)){const _=c+d;h[d]=_ in n?l[d]:g.path,f[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[d]=Array(g.length);for(let _=0;_<g.length;_++){const y=g[_];y&&y.path in r&&(h[d][_]=r[y.path])}o(g,l[d]||h[d],c+d+".",[h[d],f])}else xs(g)?(h[d]={},o(g,l[d],c+d+".",[h[d],f])):h[d]=g}}return o(t,e,"",i),i}const Ef={reset:!1,wait:!0,maxRefDepth:2,converter:ND,snapshotOptions:{serverTimestamps:"estimate"}};function Sa(t){for(const e in t)t[e].unsub()}function Eu(t,e,n,s,i,r,o,a,l){const[c,u]=wu(s.data(t.snapshotOptions),Xh(e,n),i,t);r.set(e,n,c),Tu(t,e,n,i,u,r,o,a,l)}function OD({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=ln;return a.once?zh(t).then(u=>{u.exists()?Eu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Qh(t,u=>{u.exists()?Eu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Sa(l)}}function Tu(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function g(_){_ in d&&++h>=f&&a(n)}c.forEach(_=>{const y=s[_],T=i[_],E=`${n}.${_}`;if(d[E]=!0,y)if(y.path!==T.path)y.unsub();else return;s[_]={data:()=>Xh(e,E),unsub:OD({ref:T,target:e,path:E,depth:o,ops:r,resolve:g.bind(null,E),reject:l},t),path:T.path}})}function DD(t,e,n,s,i,r){const o=Object.assign({},Ef,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Gi(c?[]:t.value);c||n.set(t,h,[]);const d=s;let g,_=ln;const y=[],T={added:({newIndex:v,doc:k})=>{y.splice(v,0,Object.create(null));const U=y[v],[z,te]=wu(k.data(l),void 0,U,o);n.add(_t(f),v,z),Tu(o,f,`${h}.${v}`,U,te,n,0,s.bind(null,k),i)},modified:({oldIndex:v,newIndex:k,doc:U})=>{const z=_t(f),te=y[v],F=z[v],[ae,re]=wu(U.data(l),F,te,o);y.splice(k,0,te),n.remove(z,v),n.add(z,k,ae),Tu(o,f,`${h}.${k}`,te,re,n,0,s,i)},removed:({oldIndex:v})=>{const k=_t(f);n.remove(k,v),Sa(y.splice(v,1)[0])}};function E(v){const k=v.docChanges(a);if(!g&&k.length){g=!0;let U=0;const z=k.length,te=Object.create(null);for(let F=0;F<z;F++)te[k[F].doc.id]=!0;s=F=>{F&&F.id in te&&++U>=z&&(c&&(n.set(t,h,_t(f)),f=t),d(_t(f)),s=ln)}}k.forEach(U=>{T[U.type](U)}),k.length||(c&&(n.set(t,h,_t(f)),f=t),s(_t(f)))}return u?JA(e).then(E).catch(i):_=Qh(e,E,i),v=>{if(_(),v){const k=typeof v=="function"?v():[];n.set(t,h,k)}y.forEach(Sa)}}function xD(t,e,n,s,i,r){const o=Object.assign({},Ef,r),a="value",l=Object.create(null);s=pk(s,()=>Xh(t,a));let c=ln;function u(h){h.exists()?Eu(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?zh(e).then(u).catch(i):c=Qh(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Sa(l)}}function PD(t,e){let n=ln;const s=Object.assign({},Ef,e),i=_t(t),r=s.target||Gi();gk()&&(s.once=!0);const o=AD(i,s.ssrKey,r.value,Ev());r.value=o;let l=!(Tv(i)?(o||[]).length>0:o!==void 0);const c=Gi(!1),u=Gi(),h=jg(),f=Sg();let d=ln;function g(){let T=_t(t);const E=new Promise((v,k)=>{if(n(s.reset),!T)return n=ln,v(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Jh(T)?xD:DD)(r,T,MD,v,k,s)}).catch(v=>(h.value===E&&(u.value=v),Promise.reject(v))).finally(()=>{h.value===E&&(c.value=!1)});h.value=E}let _=ln;Ze(t)&&(_=Yi(t,g)),g(),i&&(d=kD(h.value,i,s.ssrKey)),jr()&&cm(()=>h.value),f&&dE(y);function y(T=s.reset){_(),d(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const MD={set:(t,e,n)=>ak(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function LD(t,e){return PD(t,e)}const FD=$m({apiKey:"AIzaSyBc2RPaqv4pFK7BnkU9ipHiDHPVU_armEE",authDomain:"psycat-35173.firebaseapp.com",projectId:"psycat-35173",storageBucket:"psycat-35173.appspot.com",messagingSenderId:"109673373606",appId:"1:109673373606:web:596fd11a48706cd9563967",measurementId:"G-VSVXVBRR7H"}),Cu=VA(FD),UD=jh(Cu,"counter","counter"),a1=LD(UD),BD={__name:"MainLoader",async setup(t){let e,n;const s=UA(Cu,"users");let i;const r=async()=>(i=await ZA(s,window.browserInfo),window.localStorage.setItem("uid",i.id),i);let o=window.localStorage.getItem("uid");return o?(i=([e,n]=ZT(()=>zh(jh(Cu,"users",o))),e=await e,n(),e),i.exists()||(i=r())):i=r(),o=i.id,console.log(o),Qi("uid",o),(a,l)=>{const c=ET("router-view");return $r(),Fa(c)}}},VD={__name:"App",setup(t){return(e,n)=>($r(),Fa(nT,null,{fallback:_c(()=>[bm(" Загрузка... ")]),default:_c(()=>[ut(BD)]),_:1}))}};const $D="modulepreload",jD=function(t){return"/psycat/"+t},ig={},Ln=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=jD(r),r in ig)return;ig[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":$D,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof window<"u";function HD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function lc(t,e){const n={};for(const s in e){const i=e[s];n[s]=tn(i)?i.map(t):t(i)}return n}const ur=()=>{},tn=Array.isArray,WD=/\/$/,qD=t=>t.replace(WD,"");function cc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=QD(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function KD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zD(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&yi(e.matched[s],n.matched[i])&&Uw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!GD(t[n],e[n]))return!1;return!0}function GD(t,e){return tn(t)?og(t,e):tn(e)?og(e,t):t===e}function og(t,e){return tn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function QD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hr||(hr={}));function YD(t){if(!t)if(js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qD(t)}const XD=/^[^#]+#/;function JD(t,e){return t.replace(XD,"#")+e}function ZD(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Il=()=>({left:window.pageXOffset,top:window.pageYOffset});function ex(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ZD(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ag(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function tx(t,e){bu.set(t,e)}function nx(t){const e=bu.get(t);return bu.delete(t),e}let sx=()=>location.protocol+"//"+location.host;function Bw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),rg(l,"")}return rg(n,t)+s+i}function ix(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=Bw(t,location),g=n.value,_=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}y=_?f.position-_.position:0}else s(d);i.forEach(T=>{T(n.value,g,{delta:y,type:Fr.pop,direction:y?y>0?hr.forward:hr.back:hr.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:Il()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function lg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Il():null}}function rx(t){const{history:e,location:n}=window,s={value:Bw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:sx()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=ye({},e.state,lg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ye({},i.value,e.state,{forward:l,scroll:Il()});r(u.current,u,!0);const h=ye({},lg(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function ox(t){t=YD(t);const e=rx(t),n=ix(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ye({location:"",base:t,go:s,createHref:JD.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ax(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ox(t)}function lx(t){return typeof t=="string"||t&&typeof t=="object"}function Vw(t){return typeof t=="string"||typeof t=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$w=Symbol("");var cg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cg||(cg={}));function vi(t,e){return ye(new Error,{type:t,[$w]:!0},e)}function wn(t,e){return t instanceof Error&&$w in t&&(e==null||!!(t.type&e))}const ug="[^/]+?",cx={sensitive:!1,strict:!1,start:!0,end:!0},ux=/[.+*?^${}()[\]/\\]/g;function hx(t,e){const n=ye({},cx,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(ux,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:y,regexp:T}=f;r.push({name:g,repeatable:_,optional:y});const E=T||ug;if(E!==ug){d+=10;try{new RegExp(`(${E})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+k.message)}}let v=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(v=y&&c.length<2?`(?:/${v})`:"/"+v),y&&(v+="?"),i+=v,d+=20,y&&(d+=-8),_&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:y}=d,T=g in c?c[g]:"";if(tn(T)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=tn(T)?T.join("/"):T;if(!E)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function fx(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dx(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=fx(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hg(s))return 1;if(hg(i))return-1}return i.length-s.length}function hg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const px={type:0,value:""},gx=/[a-zA-Z0-9_]/;function mx(t){if(!t)return[[]];if(t==="/")return[[px]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:gx.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function _x(t,e,n){const s=hx(mx(t.path),n),i=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function yx(t,e){const n=[],s=new Map;e=pg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,g=vx(u);g.aliasOf=f&&f.record;const _=pg(e,u),y=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of v)y.push(ye({},g,{components:f?f.record.components:g.components,path:k,aliasOf:f?f.record:g}))}let T,E;for(const v of y){const{path:k}=v;if(h&&k[0]!=="/"){const U=h.record.path,z=U[U.length-1]==="/"?"":"/";v.path=h.record.path+(k&&z+k)}if(T=_x(v,h,_),f?f.alias.push(T):(E=E||T,E!==T&&E.alias.push(T),d&&u.name&&!dg(T)&&o(u.name)),g.children){const U=g.children;for(let z=0;z<U.length;z++)r(U[z],T,f&&f.children[z])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return E?()=>{o(E)}:ur}function o(u){if(Vw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&dx(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!dg(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw vi(1,{location:u});_=f.record.name,d=ye(fg(h.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&fg(u.params,f.keys.map(E=>E.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(E=>E.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!f)throw vi(1,{location:u,currentLocation:h});_=f.record.name,d=ye({},h.params,u.params),g=f.stringify(d)}const y=[];let T=f;for(;T;)y.unshift(T.record),T=T.parent;return{name:_,path:g,params:d,matched:y,meta:Ex(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function dg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ex(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function pg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function jw(t,e){return e.children.some(n=>n===t||jw(t,n))}const Hw=/#/g,Tx=/&/g,Cx=/\//g,bx=/=/g,Ix=/\?/g,Ww=/\+/g,Sx=/%5B/g,Ax=/%5D/g,qw=/%5E/g,Rx=/%60/g,Kw=/%7B/g,kx=/%7C/g,zw=/%7D/g,Nx=/%20/g;function Tf(t){return encodeURI(""+t).replace(kx,"|").replace(Sx,"[").replace(Ax,"]")}function Ox(t){return Tf(t).replace(Kw,"{").replace(zw,"}").replace(qw,"^")}function Iu(t){return Tf(t).replace(Ww,"%2B").replace(Nx,"+").replace(Hw,"%23").replace(Tx,"%26").replace(Rx,"`").replace(Kw,"{").replace(zw,"}").replace(qw,"^")}function Dx(t){return Iu(t).replace(bx,"%3D")}function xx(t){return Tf(t).replace(Hw,"%23").replace(Ix,"%3F")}function Px(t){return t==null?"":xx(t).replace(Cx,"%2F")}function Aa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Mx(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ww," "),o=r.indexOf("="),a=Aa(o<0?r:r.slice(0,o)),l=o<0?null:Aa(r.slice(o+1));if(a in e){let c=e[a];tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gg(t){let e="";for(let n in t){const s=t[n];if(n=Dx(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(s)?s.map(r=>r&&Iu(r)):[s&&Iu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Lx(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Fx=Symbol(""),mg=Symbol(""),Cf=Symbol(""),Gw=Symbol(""),Su=Symbol("");function $i(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(vi(4,{from:n,to:e})):h instanceof Error?a(h):lx(h)?a(vi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function uc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Ux(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=HD(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Bn(f,n,s,r,o)()}))}}return i}function Ux(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _g(t){const e=Xt(Cf),n=Xt(Gw),s=Ft(()=>e.resolve(_t(t.to))),i=Ft(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(yi.bind(null,u));if(f>-1)return f;const d=yg(l[c-2]);return c>1&&yg(u)===d&&h[h.length-1].path!==d?h.findIndex(yi.bind(null,l[c-2])):f}),r=Ft(()=>i.value>-1&&jx(n.params,s.value.params)),o=Ft(()=>i.value>-1&&i.value===n.matched.length-1&&Uw(n.params,s.value.params));function a(l={}){return $x(l)?e[_t(t.replace)?"replace":"push"](_t(t.to)).catch(ur):Promise.resolve()}return{route:s,href:Ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Bx=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_g,setup(t,{slots:e}){const n=Br(_g(t)),{options:s}=Xt(Cf),i=Ft(()=>({[vg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Vx=Bx;function $x(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jx(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function yg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vg=(t,e,n)=>t??e??n,Hx=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Xt(Su),i=Ft(()=>t.route||s.value),r=Xt(mg,0),o=Ft(()=>{let c=_t(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ft(()=>i.value.matched[o.value]);Qi(mg,Ft(()=>o.value+1)),Qi(Fx,a),Qi(Su,i);const l=Gi();return Yi(()=>[l.value,a.value,t.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!yi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return wg(n.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Am(f,ye({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wg(n.default,{Component:y,route:c})||y}}});function wg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wx=Hx;function qx(t){const e=yx(t.routes,t),n=t.parseQuery||Mx,s=t.stringifyQuery||gg,i=t.history,r=$i(),o=$i(),a=$i(),l=jg(Fn);let c=Fn;js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lc.bind(null,b=>""+b),h=lc.bind(null,Px),f=lc.bind(null,Aa);function d(b,L){let P,j;return Vw(b)?(P=e.getRecordMatcher(b),j=L):j=b,e.addRoute(j,P)}function g(b){const L=e.getRecordMatcher(b);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(b=>b.record)}function y(b){return!!e.getRecordMatcher(b)}function T(b,L){if(L=ye({},L||l.value),typeof b=="string"){const p=cc(n,b,L.path),m=e.resolve({path:p.path},L),w=i.createHref(p.fullPath);return ye(p,m,{params:f(m.params),hash:Aa(p.hash),redirectedFrom:void 0,href:w})}let P;if("path"in b)P=ye({},b,{path:cc(n,b.path,L.path).path});else{const p=ye({},b.params);for(const m in p)p[m]==null&&delete p[m];P=ye({},b,{params:h(b.params)}),L.params=h(L.params)}const j=e.resolve(P,L),he=b.hash||"";j.params=u(f(j.params));const xe=KD(s,ye({},b,{hash:Ox(he),path:j.path})),ne=i.createHref(xe);return ye({fullPath:xe,hash:he,query:s===gg?Lx(b.query):b.query||{}},j,{redirectedFrom:void 0,href:ne})}function E(b){return typeof b=="string"?cc(n,b,l.value.path):ye({},b)}function v(b,L){if(c!==b)return vi(8,{from:L,to:b})}function k(b){return te(b)}function U(b){return k(ye(E(b),{replace:!0}))}function z(b){const L=b.matched[b.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let j=typeof P=="function"?P(b):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=E(j):{path:j},j.params={}),ye({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function te(b,L){const P=c=T(b),j=l.value,he=b.state,xe=b.force,ne=b.replace===!0,p=z(P);if(p)return te(ye(E(p),{state:typeof p=="object"?ye({},he,p.state):he,force:xe,replace:ne}),L||P);const m=P;m.redirectedFrom=L;let w;return!xe&&zD(s,j,P)&&(w=vi(16,{to:m,from:j}),is(j,j,!0,!1)),(w?Promise.resolve(w):ae(m,j)).catch(C=>wn(C)?wn(C,2)?C:jt(C):Te(C,m,j)).then(C=>{if(C){if(wn(C,2))return te(ye({replace:ne},E(C.to),{state:typeof C.to=="object"?ye({},he,C.to.state):he,force:xe}),L||m)}else C=Ie(m,j,!0,ne,he);return re(m,j,C),C})}function F(b,L){const P=v(b,L);return P?Promise.reject(P):Promise.resolve()}function ae(b,L){let P;const[j,he,xe]=Kx(b,L);P=uc(j.reverse(),"beforeRouteLeave",b,L);for(const p of j)p.leaveGuards.forEach(m=>{P.push(Bn(m,b,L))});const ne=F.bind(null,b,L);return P.push(ne),Bs(P).then(()=>{P=[];for(const p of r.list())P.push(Bn(p,b,L));return P.push(ne),Bs(P)}).then(()=>{P=uc(he,"beforeRouteUpdate",b,L);for(const p of he)p.updateGuards.forEach(m=>{P.push(Bn(m,b,L))});return P.push(ne),Bs(P)}).then(()=>{P=[];for(const p of b.matched)if(p.beforeEnter&&!L.matched.includes(p))if(tn(p.beforeEnter))for(const m of p.beforeEnter)P.push(Bn(m,b,L));else P.push(Bn(p.beforeEnter,b,L));return P.push(ne),Bs(P)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),P=uc(xe,"beforeRouteEnter",b,L),P.push(ne),Bs(P))).then(()=>{P=[];for(const p of o.list())P.push(Bn(p,b,L));return P.push(ne),Bs(P)}).catch(p=>wn(p,8)?p:Promise.reject(p))}function re(b,L,P){for(const j of a.list())j(b,L,P)}function Ie(b,L,P,j,he){const xe=v(b,L);if(xe)return xe;const ne=L===Fn,p=js?history.state:{};P&&(j||ne?i.replace(b.fullPath,ye({scroll:ne&&p&&p.scroll},he)):i.push(b.fullPath,he)),l.value=b,is(b,L,P,ne),jt()}let je;function vt(){je||(je=i.listen((b,L,P)=>{if(!po.listening)return;const j=T(b),he=z(j);if(he){te(ye(he,{replace:!0}),j).catch(ur);return}c=j;const xe=l.value;js&&tx(ag(xe.fullPath,P.delta),Il()),ae(j,xe).catch(ne=>wn(ne,12)?ne:wn(ne,2)?(te(ne.to,j).then(p=>{wn(p,20)&&!P.delta&&P.type===Fr.pop&&i.go(-1,!1)}).catch(ur),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Te(ne,j,xe))).then(ne=>{ne=ne||Ie(j,xe,!1),ne&&(P.delta&&!wn(ne,8)?i.go(-P.delta,!1):P.type===Fr.pop&&wn(ne,20)&&i.go(-1,!1)),re(j,xe,ne)}).catch(ur)}))}let Rt=$i(),xi=$i(),Le;function Te(b,L,P){jt(b);const j=xi.list();return j.length?j.forEach(he=>he(b,L,P)):console.error(b),Promise.reject(b)}function ve(){return Le&&l.value!==Fn?Promise.resolve():new Promise((b,L)=>{Rt.add([b,L])})}function jt(b){return Le||(Le=!b,vt(),Rt.list().forEach(([L,P])=>b?P(b):L()),Rt.reset()),b}function is(b,L,P,j){const{scrollBehavior:he}=t;if(!js||!he)return Promise.resolve();const xe=!P&&nx(ag(b.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return zg().then(()=>he(b,L,xe)).then(ne=>ne&&ex(ne)).catch(ne=>Te(ne,b,L))}const Ht=b=>i.go(b);let wt;const Ls=new Set,po={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:y,getRoutes:_,resolve:T,options:t,push:k,replace:U,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:xi.add,isReady:ve,install(b){const L=this;b.component("RouterLink",Vx),b.component("RouterView",Wx),b.config.globalProperties.$router=L,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(l)}),js&&!wt&&l.value===Fn&&(wt=!0,k(i.location).catch(he=>{}));const P={};for(const he in Fn)P[he]=Ft(()=>l.value[he]);b.provide(Cf,L),b.provide(Gw,Br(P)),b.provide(Su,l);const j=b.unmount;Ls.add(b),b.unmount=function(){Ls.delete(b),Ls.size<1&&(c=Fn,je&&je(),je=null,l.value=Fn,wt=!1,Le=!1),j()}}};return po}function Bs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Kx(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>yi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yi(c,l))||i.push(l))}return[n,s,i]}const zx=[{path:"/",name:"home",component:()=>Ln(()=>import("./HomePage-0b7307cb.js"),["assets/HomePage-0b7307cb.js","assets/LinkButton-deb11134.js"])},{path:"/anketa",name:"anketa",component:()=>Ln(()=>import("./AnketaPage-bd00badb.js"),["assets/AnketaPage-bd00badb.js","assets/LinkButton-deb11134.js"])},{path:"/testfirebase",name:"testfirebase",component:()=>Ln(()=>import("./TestFireBasePage-50149dde.js"),[])},{path:"/annet",name:"annet",component:()=>Ln(()=>import("./AnnetPage-c95ec899.js"),["assets/AnnetPage-c95ec899.js","assets/LinkButton-deb11134.js"])},{path:"/ishihara",name:"ishihara",component:()=>Ln(()=>import("./IshiharaPage-19bbf596.js"),["assets/IshiharaPage-19bbf596.js","assets/LinkButton-deb11134.js"])},{path:"/stroop",name:"stroop",component:()=>Ln(()=>import("./StroopPage-7f362d72.js"),[])},{path:"/delaystroop",name:"delaystroop",component:()=>Ln(()=>import("./DelayStroopPage-fc1e72a3.js"),[])},{path:"/cat",name:"cat",component:()=>Ln(()=>import("./CatPage-ee3e5b3e.js"),[])}],Gx=qx({history:ax(),routes:zx}),Qw=T0(VD);Qw.use(Gx);Qw.mount("#app");export{Jx as A,Ru as B,Lt as F,zh as J,Cm as a,bm as b,Zx as c,e1 as d,ut as e,ZT as f,Br as g,Ft as h,Xt as i,Yx as j,t1 as k,jh as l,Cu as m,o1 as n,$r as o,a1 as p,UD as q,ET as r,n1 as s,Qx as t,_t as u,s1 as v,_c as w,Gi as x,i1 as y,Xx as z};
