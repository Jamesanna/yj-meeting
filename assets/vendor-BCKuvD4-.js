function NT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Am={exports:{}},Fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function Tw(){if(xv)return Fl;xv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Fl.Fragment=e,Fl.jsx=t,Fl.jsxs=t,Fl}var zv;function Aw(){return zv||(zv=1,Am.exports=Tw()),Am.exports}var tP=Aw(),Sm={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function Sw(){if(Bv)return Te;Bv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.iterator;function P(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function le(M,K,ie){this.props=M,this.context=K,this.refs=Y,this.updater=ie||H}le.prototype.isReactComponent={},le.prototype.setState=function(M,K){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,K,"setState")},le.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function re(){}re.prototype=le.prototype;function Z(M,K,ie){this.props=M,this.context=K,this.refs=Y,this.updater=ie||H}var me=Z.prototype=new re;me.constructor=Z,X(me,le.prototype),me.isPureReactComponent=!0;var Re=Array.isArray;function Oe(){}var D={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(M,K,ie){var ae=ie.ref;return{$$typeof:r,type:M,key:K,ref:ae!==void 0?ae:null,props:ie}}function k(M,K){return C(M.type,K,M.props)}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function L(M){var K={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ie){return K[ie]})}var I=/\/+/g;function He(M,K){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):K.toString(36)}function Ke(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Oe,Oe):(M.status="pending",M.then(function(K){M.status==="pending"&&(M.status="fulfilled",M.value=K)},function(K){M.status==="pending"&&(M.status="rejected",M.reason=K)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function j(M,K,ie,ae,ve){var be=typeof M;(be==="undefined"||be==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(be){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case r:case e:ze=!0;break;case v:return ze=M._init,j(ze(M._payload),K,ie,ae,ve)}}if(ze)return ve=ve(M),ze=ae===""?"."+He(M,0):ae,Re(ve)?(ie="",ze!=null&&(ie=ze.replace(I,"$&/")+"/"),j(ve,K,ie,"",function(Sa){return Sa})):ve!=null&&(N(ve)&&(ve=k(ve,ie+(ve.key==null||M&&M.key===ve.key?"":(""+ve.key).replace(I,"$&/")+"/")+ze)),K.push(ve)),1;ze=0;var Ut=ae===""?".":ae+":";if(Re(M))for(var ct=0;ct<M.length;ct++)ae=M[ct],be=Ut+He(ae,ct),ze+=j(ae,K,ie,be,ve);else if(ct=P(M),typeof ct=="function")for(M=ct.call(M),ct=0;!(ae=M.next()).done;)ae=ae.value,be=Ut+He(ae,ct++),ze+=j(ae,K,ie,be,ve);else if(be==="object"){if(typeof M.then=="function")return j(Ke(M),K,ie,ae,ve);throw K=String(M),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ze}function ne(M,K,ie){if(M==null)return M;var ae=[],ve=0;return j(M,ae,"","",function(be){return K.call(ie,be,ve++)}),ae}function he(M){if(M._status===-1){var K=M._result;K=K(),K.then(function(ie){(M._status===0||M._status===-1)&&(M._status=1,M._result=ie)},function(ie){(M._status===0||M._status===-1)&&(M._status=2,M._result=ie)}),M._status===-1&&(M._status=0,M._result=K)}if(M._status===1)return M._result.default;throw M._result}var Me=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},qe={map:ne,forEach:function(M,K,ie){ne(M,function(){K.apply(this,arguments)},ie)},count:function(M){var K=0;return ne(M,function(){K++}),K},toArray:function(M){return ne(M,function(K){return K})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Te.Activity=T,Te.Children=qe,Te.Component=le,Te.Fragment=t,Te.Profiler=o,Te.PureComponent=Z,Te.StrictMode=a,Te.Suspense=m,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Te.__COMPILER_RUNTIME={__proto__:null,c:function(M){return D.H.useMemoCache(M)}},Te.cache=function(M){return function(){return M.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(M,K,ie){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ae=X({},M.props),ve=M.key;if(K!=null)for(be in K.key!==void 0&&(ve=""+K.key),K)!b.call(K,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&K.ref===void 0||(ae[be]=K[be]);var be=arguments.length-2;if(be===1)ae.children=ie;else if(1<be){for(var ze=Array(be),Ut=0;Ut<be;Ut++)ze[Ut]=arguments[Ut+2];ae.children=ze}return C(M.type,ve,ae)},Te.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Te.createElement=function(M,K,ie){var ae,ve={},be=null;if(K!=null)for(ae in K.key!==void 0&&(be=""+K.key),K)b.call(K,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ve[ae]=K[ae]);var ze=arguments.length-2;if(ze===1)ve.children=ie;else if(1<ze){for(var Ut=Array(ze),ct=0;ct<ze;ct++)Ut[ct]=arguments[ct+2];ve.children=Ut}if(M&&M.defaultProps)for(ae in ze=M.defaultProps,ze)ve[ae]===void 0&&(ve[ae]=ze[ae]);return C(M,be,ve)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(M){return{$$typeof:p,render:M}},Te.isValidElement=N,Te.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:he}},Te.memo=function(M,K){return{$$typeof:g,type:M,compare:K===void 0?null:K}},Te.startTransition=function(M){var K=D.T,ie={};D.T=ie;try{var ae=M(),ve=D.S;ve!==null&&ve(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(Oe,Me)}catch(be){Me(be)}finally{K!==null&&ie.types!==null&&(K.types=ie.types),D.T=K}},Te.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Te.use=function(M){return D.H.use(M)},Te.useActionState=function(M,K,ie){return D.H.useActionState(M,K,ie)},Te.useCallback=function(M,K){return D.H.useCallback(M,K)},Te.useContext=function(M){return D.H.useContext(M)},Te.useDebugValue=function(){},Te.useDeferredValue=function(M,K){return D.H.useDeferredValue(M,K)},Te.useEffect=function(M,K){return D.H.useEffect(M,K)},Te.useEffectEvent=function(M){return D.H.useEffectEvent(M)},Te.useId=function(){return D.H.useId()},Te.useImperativeHandle=function(M,K,ie){return D.H.useImperativeHandle(M,K,ie)},Te.useInsertionEffect=function(M,K){return D.H.useInsertionEffect(M,K)},Te.useLayoutEffect=function(M,K){return D.H.useLayoutEffect(M,K)},Te.useMemo=function(M,K){return D.H.useMemo(M,K)},Te.useOptimistic=function(M,K){return D.H.useOptimistic(M,K)},Te.useReducer=function(M,K,ie){return D.H.useReducer(M,K,ie)},Te.useRef=function(M){return D.H.useRef(M)},Te.useState=function(M){return D.H.useState(M)},Te.useSyncExternalStore=function(M,K,ie){return D.H.useSyncExternalStore(M,K,ie)},Te.useTransition=function(){return D.H.useTransition()},Te.version="19.2.4",Te}var Hv;function yg(){return Hv||(Hv=1,Sm.exports=Sw()),Sm.exports}var fo=yg();const Bt=NT(fo);var wm={exports:{}},jl={},bm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function ww(){return qv||(qv=1,(function(r){function e(j,ne){var he=j.length;j.push(ne);e:for(;0<he;){var Me=he-1>>>1,qe=j[Me];if(0<o(qe,ne))j[Me]=ne,j[he]=qe,he=Me;else break e}}function t(j){return j.length===0?null:j[0]}function a(j){if(j.length===0)return null;var ne=j[0],he=j.pop();if(he!==ne){j[0]=he;e:for(var Me=0,qe=j.length,M=qe>>>1;Me<M;){var K=2*(Me+1)-1,ie=j[K],ae=K+1,ve=j[ae];if(0>o(ie,he))ae<qe&&0>o(ve,ie)?(j[Me]=ve,j[ae]=he,Me=ae):(j[Me]=ie,j[K]=he,Me=K);else if(ae<qe&&0>o(ve,he))j[Me]=ve,j[ae]=he,Me=ae;else break e}}return ne}function o(j,ne){var he=j.sortIndex-ne.sortIndex;return he!==0?he:j.id-ne.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],g=[],v=1,T=null,w=3,P=!1,H=!1,X=!1,Y=!1,le=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function me(j){for(var ne=t(g);ne!==null;){if(ne.callback===null)a(g);else if(ne.startTime<=j)a(g),ne.sortIndex=ne.expirationTime,e(m,ne);else break;ne=t(g)}}function Re(j){if(X=!1,me(j),!H)if(t(m)!==null)H=!0,Oe||(Oe=!0,L());else{var ne=t(g);ne!==null&&Ke(Re,ne.startTime-j)}}var Oe=!1,D=-1,b=5,C=-1;function k(){return Y?!0:!(r.unstable_now()-C<b)}function N(){if(Y=!1,Oe){var j=r.unstable_now();C=j;var ne=!0;try{e:{H=!1,X&&(X=!1,re(D),D=-1),P=!0;var he=w;try{t:{for(me(j),T=t(m);T!==null&&!(T.expirationTime>j&&k());){var Me=T.callback;if(typeof Me=="function"){T.callback=null,w=T.priorityLevel;var qe=Me(T.expirationTime<=j);if(j=r.unstable_now(),typeof qe=="function"){T.callback=qe,me(j),ne=!0;break t}T===t(m)&&a(m),me(j)}else a(m);T=t(m)}if(T!==null)ne=!0;else{var M=t(g);M!==null&&Ke(Re,M.startTime-j),ne=!1}}break e}finally{T=null,w=he,P=!1}ne=void 0}}finally{ne?L():Oe=!1}}}var L;if(typeof Z=="function")L=function(){Z(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,He=I.port2;I.port1.onmessage=N,L=function(){He.postMessage(null)}}else L=function(){le(N,0)};function Ke(j,ne){D=le(function(){j(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var he=w;w=ne;try{return j()}finally{w=he}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(j,ne){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var he=w;w=j;try{return ne()}finally{w=he}},r.unstable_scheduleCallback=function(j,ne,he){var Me=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?Me+he:Me):he=Me,j){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=he+qe,j={id:v++,callback:ne,priorityLevel:j,startTime:he,expirationTime:qe,sortIndex:-1},he>Me?(j.sortIndex=he,e(g,j),t(m)===null&&j===t(g)&&(X?(re(D),D=-1):X=!0,Ke(Re,he-Me))):(j.sortIndex=qe,e(m,j),H||P||(H=!0,Oe||(Oe=!0,L()))),j},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(j){var ne=w;return function(){var he=w;w=ne;try{return j.apply(this,arguments)}finally{w=he}}}})(Im)),Im}var Fv;function bw(){return Fv||(Fv=1,bm.exports=ww()),bm.exports}var Rm={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function Iw(){if(jv)return rn;jv=1;var r=yg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:m,containerInfo:g,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,v)},rn.flushSync=function(m){var g=f.T,v=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=g,a.p=v,a.d.f()}},rn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},rn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},rn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,T=p(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:P}):v==="script"&&a.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},rn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},rn.requestFormReset=function(m){a.d.r(m)},rn.unstable_batchedUpdates=function(m,g){return m(g)},rn.useFormState=function(m,g,v){return f.H.useFormState(m,g,v)},rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},rn.version="19.2.4",rn}var Gv;function Rw(){if(Gv)return Rm.exports;Gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rm.exports=Iw(),Rm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function Cw(){if(Yv)return jl;Yv=1;var r=bw(),e=yg(),t=Rw();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function f(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function m(n){if(u(n)!==n)throw Error(a(188))}function g(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,l=i;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),n;if(d===l)return m(h),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var _=!1,A=h.child;A;){if(A===s){_=!0,s=h,l=d;break}if(A===l){_=!0,l=h,s=d;break}A=A.sibling}if(!_){for(A=d.child;A;){if(A===s){_=!0,s=d,l=h;break}if(A===l){_=!0,l=d,s=h;break}A=A.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function v(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=v(n),i!==null)return i;n=n.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=N&&n[N]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function He(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case X:return"Fragment";case le:return"Profiler";case Y:return"StrictMode";case Re:return"Suspense";case Oe:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case H:return"Portal";case Z:return n.displayName||"Context";case re:return(n._context.displayName||"Context")+".Consumer";case me:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:He(n.type)||"Memo";case b:i=n._payload,n=n._init;try{return He(n(i))}catch{}}return null}var Ke=Array.isArray,j=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},Me=[],qe=-1;function M(n){return{current:n}}function K(n){0>qe||(n.current=Me[qe],Me[qe]=null,qe--)}function ie(n,i){qe++,Me[qe]=n.current,n.current=i}var ae=M(null),ve=M(null),be=M(null),ze=M(null);function Ut(n,i){switch(ie(be,i),ie(ve,n),ie(ae,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?ov(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=ov(i),n=lv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}K(ae),ie(ae,n)}function ct(){K(ae),K(ve),K(be)}function Sa(n){n.memoizedState!==null&&ie(ze,n);var i=ae.current,s=lv(i,n.type);i!==s&&(ie(ve,n),ie(ae,s))}function ps(n){ve.current===n&&(K(ae),K(ve)),ze.current===n&&(K(ze),zl._currentValue=he)}var ys,_s;function fi(n){if(ys===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ys=i&&i[1]||"",_s=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+n+_s}var zo=!1;function wa(n,i){if(!n||zo)return"";zo=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(F){var B=F}Reflect.construct(n,[],W)}else{try{W.call()}catch(F){B=F}n.call(W.prototype)}}else{try{throw Error()}catch(F){B=F}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],A=d[1];if(_&&A){var R=_.split(`
`),z=A.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===z.length)for(l=R.length-1,h=z.length-1;1<=l&&0<=h&&R[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==z[h]){var G=`
`+R[l].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=l&&0<=h);break}}}finally{zo=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?fi(s):""}function Bo(n,i){switch(n.tag){case 26:case 27:case 5:return fi(n.type);case 16:return fi("Lazy");case 13:return n.child!==i&&i!==null?fi("Suspense Fallback"):fi("Suspense");case 19:return fi("SuspenseList");case 0:case 15:return wa(n.type,!1);case 11:return wa(n.type.render,!1);case 1:return wa(n.type,!0);case 31:return fi("Activity");default:return""}}function Ho(n){try{var i="",s=null;do i+=Bo(n,s),s=n,n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wt=Object.prototype.hasOwnProperty,xt=r.unstable_scheduleCallback,br=r.unstable_cancelCallback,wf=r.unstable_shouldYield,Mu=r.unstable_requestPaint,un=r.unstable_now,ba=r.unstable_getCurrentPriorityLevel,qo=r.unstable_ImmediatePriority,Fo=r.unstable_UserBlockingPriority,Ir=r.unstable_NormalPriority,bf=r.unstable_LowPriority,ku=r.unstable_IdlePriority,Pu=r.log,Vu=r.unstable_setDisableYieldValue,$n=null,Kt=null;function Vn(n){if(typeof Pu=="function"&&Vu(n),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode($n,n)}catch{}}var vt=Math.clz32?Math.clz32:Uu,Lu=Math.log,vs=Math.LN2;function Uu(n){return n>>>=0,n===0?32:31-(Lu(n)/vs|0)|0}var di=256,Ia=262144,bt=4194304;function mi(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function gi(n,i,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?h=mi(l):(_&=A,_!==0?h=mi(_):s||(s=A&~n,s!==0&&(h=mi(s))))):(A=l&~d,A!==0?h=mi(A):_!==0?h=mi(_):s||(s=l&~n,s!==0&&(h=mi(s)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:h}function Jn(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function If(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xu(){var n=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),n}function pi(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Ra(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Rf(n,i,s,l,h,d){var _=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var A=n.entanglements,R=n.expirationTimes,z=n.hiddenUpdates;for(s=_&~s;0<s;){var G=31-vt(s),W=1<<G;A[G]=0,R[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var F=B[G];F!==null&&(F.lane&=-536870913)}s&=~W}l!==0&&Ca(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~i))}function Ca(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-vt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function jo(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var l=31-vt(s),h=1<<l;h&i|n[l]&i&&(n[l]|=i),s&=~h}}function Go(n,i){var s=i&-i;return s=(s&42)!==0?1:Da(s),(s&(n.suspendedLanes|i))!==0?0:s}function Da(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ji(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function zu(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:Ov(n.type))}function Zn(n,i){var s=ne.p;try{return ne.p=n,i()}finally{ne.p=s}}var ei=Math.random().toString(36).slice(2),It="__reactFiber$"+ei,Ft="__reactProps$"+ei,yi="__reactContainer$"+ei,Es="__reactEvents$"+ei,Cf="__reactListeners$"+ei,Bu="__reactHandles$"+ei,Hu="__reactResources$"+ei,_i="__reactMarker$"+ei;function Ts(n){delete n[It],delete n[Ft],delete n[Es],delete n[Cf],delete n[Bu]}function vi(n){var i=n[It];if(i)return i;for(var s=n.parentNode;s;){if(i=s[yi]||s[It]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=gv(n);n!==null;){if(s=n[It])return s;n=gv(n)}return i}n=s,s=n.parentNode}return null}function Ln(n){if(n=n[It]||n[yi]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function wn(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Ei(n){var i=n[Hu];return i||(i=n[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Rt(n){n[_i]=!0}var Yo=new Set,Qo={};function Ti(n,i){Ai(n,i),Ai(n+"Capture",i)}function Ai(n,i){for(Qo[n]=i,n=0;n<i.length;n++)Yo.add(i[n])}var Ko=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wo={},Xo={};function qu(n){return wt.call(Xo,n)?!0:wt.call(Wo,n)?!1:Ko.test(n)?Xo[n]=!0:(Wo[n]=!0,!1)}function As(n,i,s){if(qu(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function bn(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Ct(n,i,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+l)}}function jt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rr(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $o(n,i,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){s=""+_,d.call(this,_)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(_){s=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function We(n){if(!n._valueTracker){var i=Rr(n)?"checked":"value";n._valueTracker=$o(n,i,""+n[i])}}function Na(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return n&&(l=Rr(n)?n.checked?"true":"false":n.value),n=l,n!==s?(i.setValue(n),!0):!1}function Si(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Oa=/[\n"\\]/g;function mn(n){return n.replace(Oa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ss(n,i,s,l,h,d,_,A){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),i!=null?_==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+jt(i)):n.value!==""+jt(i)&&(n.value=""+jt(i)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),i!=null?Jo(n,_,jt(i)):s!=null?Jo(n,_,jt(s)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+jt(A):n.removeAttribute("name")}function Fu(n,i,s,l,h,d,_,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){We(n);return}s=s!=null?""+jt(s):"",i=i!=null?""+jt(i):s,A||i===n.value||(n.value=i),n.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=A?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_),We(n)}function Jo(n,i,s){i==="number"&&Si(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Cr(n,i,s,l){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&l&&(n[s].defaultSelected=!0)}else{for(s=""+jt(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function ju(n,i,s){if(i!=null&&(i=""+jt(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+jt(s):""}function Dr(n,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Ke(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=jt(i),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),We(n)}function gn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Gu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zo(n,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,s):typeof s!="number"||s===0||Gu.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function el(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Zo(n,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Zo(n,d,i[d])}function ws(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(n){return Nr.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function ti(){}var tl=null;function Un(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Or=null,wi=null;function Ma(n){var i=Ln(n);if(i&&(n=i.stateNode)){var s=n[Ft]||null;e:switch(n=i.stateNode,i.type){case"input":if(Ss(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==n&&l.form===n.form){var h=l[Ft]||null;if(!h)throw Error(a(90));Ss(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===n.form&&Na(l)}break e;case"textarea":ju(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Cr(n,!!s.multiple,i,!1)}}}var Is=!1;function Mr(n,i,s){if(Is)return n(i,s);Is=!0;try{var l=n(i);return l}finally{if(Is=!1,(Or!==null||wi!==null)&&(zc(),Or&&(i=Or,n=wi,wi=Or=null,Ma(i),n)))for(i=0;i<n.length;i++)Ma(n[i])}}function ni(n,i){var s=n.stateNode;if(s===null)return null;var l=s[Ft]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=!1;if(xn)try{var Ze={};Object.defineProperty(Ze,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Ze,Ze),window.removeEventListener("test",Ze,Ze)}catch{ka=!1}var bi=null,nl=null,Pa=null;function il(){if(Pa)return Pa;var n,i=nl,s=i.length,l,h="value"in bi?bi.value:bi.textContent,d=h.length;for(n=0;n<s&&i[n]===h[n];n++);var _=s-n;for(l=1;l<=_&&i[s-l]===h[d-l];l++);return Pa=h.slice(n,1<l?1-l:void 0)}function Va(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Gi(){return!0}function ii(){return!1}function Wt(n){function i(s,l,h,d,_){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(s=n[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gi:ii,this.isPropagationStopped=ii,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),i}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=Wt(Yi),kr=T({},Yi,{view:0,detail:0}),rl=Wt(kr),Pr,Rs,Ri,Cs=T({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ri&&(Ri&&n.type==="mousemove"?(Pr=n.screenX-Ri.screenX,Rs=n.screenY-Ri.screenY):Rs=Pr=0,Ri=n),Pr)},movementY:function(n){return"movementY"in n?n.movementY:Rs}}),al=Wt(Cs),La=T({},Cs,{dataTransfer:0}),Qu=Wt(La),Ku=T({},kr,{relatedTarget:0}),Ua=Wt(Ku),sl=T({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),Wu=Wt(sl),Ds=T({},Yi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xu=Wt(Ds),$u=T({},Yi,{data:0}),Ci=Wt($u),Ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ec={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tc(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ec[n])?!!i[n]:!1}function Vr(){return tc}var cn=T({},kr,{key:function(n){if(n.key){var i=Ju[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Zu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vr,charCode:function(n){return n.type==="keypress"?Va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),nc=Wt(cn),ic=T({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qi=Wt(ic),c=T({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vr}),y=Wt(c),E=T({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S=Wt(E),U=T({},Cs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q=Wt(U),te=T({},Yi,{newState:0,oldState:0}),Se=Wt(te),Et=[9,13,27,32],Ge=xn&&"CompositionEvent"in window,ht=null;xn&&"documentMode"in document&&(ht=document.documentMode);var zn=xn&&"TextEvent"in window&&!ht,Di=xn&&(!Ge||ht&&8<ht&&11>=ht),ri=" ",ai=!1;function xa(n,i){switch(n){case"keyup":return Et.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ns(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function GA(n,i){switch(n){case"compositionend":return Ns(i);case"keypress":return i.which!==32?null:(ai=!0,ri);case"textInput":return n=i.data,n===ri&&ai?null:n;default:return null}}function YA(n,i){if(Os)return n==="compositionend"||!Ge&&xa(n,i)?(n=il(),Pa=nl=bi=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Di&&i.locale!=="ko"?null:i.data;default:return null}}var QA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!QA[n.type]:i==="textarea"}function vp(n,i,s,l){Or?wi?wi.push(l):wi=[l]:Or=l,i=Yc(i,"onChange"),0<i.length&&(s=new Ii("onChange","change",null,s,l),n.push({event:s,listeners:i}))}var ol=null,ll=null;function KA(n){tv(n,0)}function rc(n){var i=wn(n);if(Na(i))return n}function Ep(n,i){if(n==="change")return i}var Tp=!1;if(xn){var Df;if(xn){var Nf="oninput"in document;if(!Nf){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Nf=typeof Ap.oninput=="function"}Df=Nf}else Df=!1;Tp=Df&&(!document.documentMode||9<document.documentMode)}function Sp(){ol&&(ol.detachEvent("onpropertychange",wp),ll=ol=null)}function wp(n){if(n.propertyName==="value"&&rc(ll)){var i=[];vp(i,ll,n,Un(n)),Mr(KA,i)}}function WA(n,i,s){n==="focusin"?(Sp(),ol=i,ll=s,ol.attachEvent("onpropertychange",wp)):n==="focusout"&&Sp()}function XA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rc(ll)}function $A(n,i){if(n==="click")return rc(i)}function JA(n,i){if(n==="input"||n==="change")return rc(i)}function ZA(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var In=typeof Object.is=="function"?Object.is:ZA;function ul(n,i){if(In(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!wt.call(i,h)||!In(n[h],i[h]))return!1}return!0}function bp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ip(n,i){var s=bp(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=i&&l>=i)return{node:s,offset:i-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bp(s)}}function Rp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Rp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Si(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Si(n.document)}return i}function Of(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var eS=xn&&"documentMode"in document&&11>=document.documentMode,Ms=null,Mf=null,cl=null,kf=!1;function Dp(n,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;kf||Ms==null||Ms!==Si(l)||(l=Ms,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cl&&ul(cl,l)||(cl=l,l=Yc(Mf,"onSelect"),0<l.length&&(i=new Ii("onSelect","select",null,i,s),n.push({event:i,listeners:l}),i.target=Ms)))}function za(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var ks={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Pf={},Np={};xn&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Ba(n){if(Pf[n])return Pf[n];if(!ks[n])return n;var i=ks[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in Np)return Pf[n]=i[s];return n}var Op=Ba("animationend"),Mp=Ba("animationiteration"),kp=Ba("animationstart"),tS=Ba("transitionrun"),nS=Ba("transitionstart"),iS=Ba("transitioncancel"),Pp=Ba("transitionend"),Vp=new Map,Vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vf.push("scrollEnd");function si(n,i){Vp.set(n,i),Ti(i,[n])}var ac=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Bn=[],Ps=0,Lf=0;function sc(){for(var n=Ps,i=Lf=Ps=0;i<n;){var s=Bn[i];Bn[i++]=null;var l=Bn[i];Bn[i++]=null;var h=Bn[i];Bn[i++]=null;var d=Bn[i];if(Bn[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&Lp(s,h,d)}}function oc(n,i,s,l){Bn[Ps++]=n,Bn[Ps++]=i,Bn[Ps++]=s,Bn[Ps++]=l,Lf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Uf(n,i,s,l){return oc(n,i,s,l),lc(n)}function Ha(n,i){return oc(n,null,null,i),lc(n)}function Lp(n,i,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=n.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,h&&i!==null&&(h=31-vt(s),n=d.hiddenUpdates,l=n[h],l===null?n[h]=[i]:l.push(i),i.lane=s|536870912),d):null}function lc(n){if(50<Ml)throw Ml=0,Yd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Vs={};function rS(n,i,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,i,s,l){return new rS(n,i,s,l)}function xf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ki(n,i){var s=n.alternate;return s===null?(s=Rn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Up(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function uc(n,i,s,l,h,d){var _=0;if(l=n,typeof n=="function")xf(n)&&(_=1);else if(typeof n=="string")_=uw(n,s,ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Rn(31,s,i,h),n.elementType=C,n.lanes=d,n;case X:return qa(s.children,h,d,i);case Y:_=8,h|=24;break;case le:return n=Rn(12,s,i,h|2),n.elementType=le,n.lanes=d,n;case Re:return n=Rn(13,s,i,h),n.elementType=Re,n.lanes=d,n;case Oe:return n=Rn(19,s,i,h),n.elementType=Oe,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z:_=10;break e;case re:_=9;break e;case me:_=11;break e;case D:_=14;break e;case b:_=16,l=null;break e}_=29,s=Error(a(130,n===null?"null":typeof n,"")),l=null}return i=Rn(_,s,i,h),i.elementType=n,i.type=l,i.lanes=d,i}function qa(n,i,s,l){return n=Rn(7,n,l,i),n.lanes=s,n}function zf(n,i,s){return n=Rn(6,n,null,i),n.lanes=s,n}function xp(n){var i=Rn(18,null,null,0);return i.stateNode=n,i}function Bf(n,i,s){return i=Rn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var zp=new WeakMap;function Hn(n,i){if(typeof n=="object"&&n!==null){var s=zp.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Ho(i)},zp.set(n,i),i)}return{value:n,source:i,stack:Ho(i)}}var Ls=[],Us=0,cc=null,hl=0,qn=[],Fn=0,Lr=null,Ni=1,Oi="";function Wi(n,i){Ls[Us++]=hl,Ls[Us++]=cc,cc=n,hl=i}function Bp(n,i,s){qn[Fn++]=Ni,qn[Fn++]=Oi,qn[Fn++]=Lr,Lr=n;var l=Ni;n=Oi;var h=32-vt(l)-1;l&=~(1<<h),s+=1;var d=32-vt(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Ni=1<<32-vt(i)+h|s<<h|l,Oi=d+n}else Ni=1<<d|s<<h|l,Oi=n}function Hf(n){n.return!==null&&(Wi(n,1),Bp(n,1,0))}function qf(n){for(;n===cc;)cc=Ls[--Us],Ls[Us]=null,hl=Ls[--Us],Ls[Us]=null;for(;n===Lr;)Lr=qn[--Fn],qn[Fn]=null,Oi=qn[--Fn],qn[Fn]=null,Ni=qn[--Fn],qn[Fn]=null}function Hp(n,i){qn[Fn++]=Ni,qn[Fn++]=Oi,qn[Fn++]=Lr,Ni=i.id,Oi=i.overflow,Lr=n}var Xt=null,rt=null,xe=!1,Ur=null,jn=!1,Ff=Error(a(519));function xr(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(Hn(i,n)),Ff}function qp(n){var i=n.stateNode,s=n.type,l=n.memoizedProps;switch(i[It]=n,i[Ft]=l,s){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(s=0;s<Pl.length;s++)De(Pl[s],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),Fu(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),Dr(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||av(i.textContent,s)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=ti),i=!0):i=!1,i||xr(n,!0)}function Fp(n){for(Xt=n.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:Xt=Xt.return}}function xs(n){if(n!==Xt)return!1;if(!xe)return Fp(n),xe=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||om(n.type,n.memoizedProps)),s=!s),s&&rt&&xr(n),Fp(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));rt=mv(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));rt=mv(n)}else i===27?(i=rt,Jr(n.type)?(n=fm,fm=null,rt=n):rt=i):rt=Xt?Yn(n.stateNode.nextSibling):null;return!0}function Fa(){rt=Xt=null,xe=!1}function jf(){var n=Ur;return n!==null&&(vn===null?vn=n:vn.push.apply(vn,n),Ur=null),n}function fl(n){Ur===null?Ur=[n]:Ur.push(n)}var Gf=M(null),ja=null,Xi=null;function zr(n,i,s){ie(Gf,i._currentValue),i._currentValue=s}function $i(n){n._currentValue=Gf.current,K(Gf)}function Yf(n,i,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===s)break;n=n.return}}function Qf(n,i,s,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=h;for(var R=0;R<i.length;R++)if(A.context===i[R]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),Yf(d.return,s,n),l||(_=null);break e}d=A.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),Yf(_,s,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function zs(n,i,s,l){n=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=h.type;In(h.pendingProps.value,_.value)||(n!==null?n.push(A):n=[A])}}else if(h===ze.current){if(_=h.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(zl):n=[zl])}h=h.return}n!==null&&Qf(i,n,s,l),i.flags|=262144}function hc(n){for(n=n.firstContext;n!==null;){if(!In(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ga(n){ja=n,Xi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $t(n){return jp(ja,n)}function fc(n,i){return ja===null&&Ga(n),jp(n,i)}function jp(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Xi===null){if(n===null)throw Error(a(308));Xi=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Xi=Xi.next=i;return s}var aS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},sS=r.unstable_scheduleCallback,oS=r.unstable_NormalPriority,Dt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kf(){return{controller:new aS,data:new Map,refCount:0}}function dl(n){n.refCount--,n.refCount===0&&sS(oS,function(){n.controller.abort()})}var ml=null,Wf=0,Bs=0,Hs=null;function lS(n,i){if(ml===null){var s=ml=[];Wf=0,Bs=Jd(),Hs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Wf++,i.then(Gp,Gp),i}function Gp(){if(--Wf===0&&ml!==null){Hs!==null&&(Hs.status="fulfilled");var n=ml;ml=null,Bs=0,Hs=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function uS(n,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Yp=j.S;j.S=function(n,i){D_=un(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&lS(n,i),Yp!==null&&Yp(n,i)};var Ya=M(null);function Xf(){var n=Ya.current;return n!==null?n:it.pooledCache}function dc(n,i){i===null?ie(Ya,Ya.current):ie(Ya,i.pool)}function Qp(){var n=Xf();return n===null?null:{parent:Dt._currentValue,pool:n}}var qs=Error(a(460)),$f=Error(a(474)),mc=Error(a(542)),gc={then:function(){}};function Kp(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Wp(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(ti,ti),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,$p(n),n;default:if(typeof i.status=="string")i.then(ti,ti);else{if(n=it,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,$p(n),n}throw Ka=i,qs}}function Qa(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ka=s,qs):s}}var Ka=null;function Xp(){if(Ka===null)throw Error(a(459));var n=Ka;return Ka=null,n}function $p(n){if(n===qs||n===mc)throw Error(a(483))}var Fs=null,gl=0;function pc(n){var i=gl;return gl+=1,Fs===null&&(Fs=[]),Wp(Fs,n,i)}function pl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function yc(n,i){throw i.$$typeof===w?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Jp(n){function i(V,O){if(n){var x=V.deletions;x===null?(V.deletions=[O],V.flags|=16):x.push(O)}}function s(V,O){if(!n)return null;for(;O!==null;)i(V,O),O=O.sibling;return null}function l(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function h(V,O){return V=Ki(V,O),V.index=0,V.sibling=null,V}function d(V,O,x){return V.index=x,n?(x=V.alternate,x!==null?(x=x.index,x<O?(V.flags|=67108866,O):x):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function _(V){return n&&V.alternate===null&&(V.flags|=67108866),V}function A(V,O,x,Q){return O===null||O.tag!==6?(O=zf(x,V.mode,Q),O.return=V,O):(O=h(O,x),O.return=V,O)}function R(V,O,x,Q){var fe=x.type;return fe===X?G(V,O,x.props.children,Q,x.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Qa(fe)===O.type)?(O=h(O,x.props),pl(O,x),O.return=V,O):(O=uc(x.type,x.key,x.props,null,V.mode,Q),pl(O,x),O.return=V,O)}function z(V,O,x,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==x.containerInfo||O.stateNode.implementation!==x.implementation?(O=Bf(x,V.mode,Q),O.return=V,O):(O=h(O,x.children||[]),O.return=V,O)}function G(V,O,x,Q,fe){return O===null||O.tag!==7?(O=qa(x,V.mode,Q,fe),O.return=V,O):(O=h(O,x),O.return=V,O)}function W(V,O,x){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=zf(""+O,V.mode,x),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case P:return x=uc(O.type,O.key,O.props,null,V.mode,x),pl(x,O),x.return=V,x;case H:return O=Bf(O,V.mode,x),O.return=V,O;case b:return O=Qa(O),W(V,O,x)}if(Ke(O)||L(O))return O=qa(O,V.mode,x,null),O.return=V,O;if(typeof O.then=="function")return W(V,pc(O),x);if(O.$$typeof===Z)return W(V,fc(V,O),x);yc(V,O)}return null}function B(V,O,x,Q){var fe=O!==null?O.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return fe!==null?null:A(V,O,""+x,Q);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case P:return x.key===fe?R(V,O,x,Q):null;case H:return x.key===fe?z(V,O,x,Q):null;case b:return x=Qa(x),B(V,O,x,Q)}if(Ke(x)||L(x))return fe!==null?null:G(V,O,x,Q,null);if(typeof x.then=="function")return B(V,O,pc(x),Q);if(x.$$typeof===Z)return B(V,O,fc(V,x),Q);yc(V,x)}return null}function F(V,O,x,Q,fe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return V=V.get(x)||null,A(O,V,""+Q,fe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case P:return V=V.get(Q.key===null?x:Q.key)||null,R(O,V,Q,fe);case H:return V=V.get(Q.key===null?x:Q.key)||null,z(O,V,Q,fe);case b:return Q=Qa(Q),F(V,O,x,Q,fe)}if(Ke(Q)||L(Q))return V=V.get(x)||null,G(O,V,Q,fe,null);if(typeof Q.then=="function")return F(V,O,x,pc(Q),fe);if(Q.$$typeof===Z)return F(V,O,x,fc(O,Q),fe);yc(O,Q)}return null}function oe(V,O,x,Q){for(var fe=null,Fe=null,ce=O,Ie=O=0,Pe=null;ce!==null&&Ie<x.length;Ie++){ce.index>Ie?(Pe=ce,ce=null):Pe=ce.sibling;var je=B(V,ce,x[Ie],Q);if(je===null){ce===null&&(ce=Pe);break}n&&ce&&je.alternate===null&&i(V,ce),O=d(je,O,Ie),Fe===null?fe=je:Fe.sibling=je,Fe=je,ce=Pe}if(Ie===x.length)return s(V,ce),xe&&Wi(V,Ie),fe;if(ce===null){for(;Ie<x.length;Ie++)ce=W(V,x[Ie],Q),ce!==null&&(O=d(ce,O,Ie),Fe===null?fe=ce:Fe.sibling=ce,Fe=ce);return xe&&Wi(V,Ie),fe}for(ce=l(ce);Ie<x.length;Ie++)Pe=F(ce,V,Ie,x[Ie],Q),Pe!==null&&(n&&Pe.alternate!==null&&ce.delete(Pe.key===null?Ie:Pe.key),O=d(Pe,O,Ie),Fe===null?fe=Pe:Fe.sibling=Pe,Fe=Pe);return n&&ce.forEach(function(ia){return i(V,ia)}),xe&&Wi(V,Ie),fe}function ge(V,O,x,Q){if(x==null)throw Error(a(151));for(var fe=null,Fe=null,ce=O,Ie=O=0,Pe=null,je=x.next();ce!==null&&!je.done;Ie++,je=x.next()){ce.index>Ie?(Pe=ce,ce=null):Pe=ce.sibling;var ia=B(V,ce,je.value,Q);if(ia===null){ce===null&&(ce=Pe);break}n&&ce&&ia.alternate===null&&i(V,ce),O=d(ia,O,Ie),Fe===null?fe=ia:Fe.sibling=ia,Fe=ia,ce=Pe}if(je.done)return s(V,ce),xe&&Wi(V,Ie),fe;if(ce===null){for(;!je.done;Ie++,je=x.next())je=W(V,je.value,Q),je!==null&&(O=d(je,O,Ie),Fe===null?fe=je:Fe.sibling=je,Fe=je);return xe&&Wi(V,Ie),fe}for(ce=l(ce);!je.done;Ie++,je=x.next())je=F(ce,V,Ie,je.value,Q),je!==null&&(n&&je.alternate!==null&&ce.delete(je.key===null?Ie:je.key),O=d(je,O,Ie),Fe===null?fe=je:Fe.sibling=je,Fe=je);return n&&ce.forEach(function(Ew){return i(V,Ew)}),xe&&Wi(V,Ie),fe}function nt(V,O,x,Q){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case P:e:{for(var fe=x.key;O!==null;){if(O.key===fe){if(fe=x.type,fe===X){if(O.tag===7){s(V,O.sibling),Q=h(O,x.props.children),Q.return=V,V=Q;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Qa(fe)===O.type){s(V,O.sibling),Q=h(O,x.props),pl(Q,x),Q.return=V,V=Q;break e}s(V,O);break}else i(V,O);O=O.sibling}x.type===X?(Q=qa(x.props.children,V.mode,Q,x.key),Q.return=V,V=Q):(Q=uc(x.type,x.key,x.props,null,V.mode,Q),pl(Q,x),Q.return=V,V=Q)}return _(V);case H:e:{for(fe=x.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===x.containerInfo&&O.stateNode.implementation===x.implementation){s(V,O.sibling),Q=h(O,x.children||[]),Q.return=V,V=Q;break e}else{s(V,O);break}else i(V,O);O=O.sibling}Q=Bf(x,V.mode,Q),Q.return=V,V=Q}return _(V);case b:return x=Qa(x),nt(V,O,x,Q)}if(Ke(x))return oe(V,O,x,Q);if(L(x)){if(fe=L(x),typeof fe!="function")throw Error(a(150));return x=fe.call(x),ge(V,O,x,Q)}if(typeof x.then=="function")return nt(V,O,pc(x),Q);if(x.$$typeof===Z)return nt(V,O,fc(V,x),Q);yc(V,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,O!==null&&O.tag===6?(s(V,O.sibling),Q=h(O,x),Q.return=V,V=Q):(s(V,O),Q=zf(x,V.mode,Q),Q.return=V,V=Q),_(V)):s(V,O)}return function(V,O,x,Q){try{gl=0;var fe=nt(V,O,x,Q);return Fs=null,fe}catch(ce){if(ce===qs||ce===mc)throw ce;var Fe=Rn(29,ce,null,V.mode);return Fe.lanes=Q,Fe.return=V,Fe}finally{}}}var Wa=Jp(!0),Zp=Jp(!1),Br=!1;function Jf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Hr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function qr(n,i,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=lc(n),Lp(n,null,s),i}return oc(n,l,i,s),lc(n)}function yl(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,jo(n,s)}}function ed(n,i){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?h=d=i:d=d.next=i}else h=d=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var td=!1;function _l(){if(td){var n=Hs;if(n!==null)throw n}}function vl(n,i,s,l){td=!1;var h=n.updateQueue;Br=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var R=A,z=R.next;R.next=null,_===null?d=z:_.next=z,_=R;var G=n.alternate;G!==null&&(G=G.updateQueue,A=G.lastBaseUpdate,A!==_&&(A===null?G.firstBaseUpdate=z:A.next=z,G.lastBaseUpdate=R))}if(d!==null){var W=h.baseState;_=0,G=z=R=null,A=d;do{var B=A.lane&-536870913,F=B!==A.lane;if(F?(ke&B)===B:(l&B)===B){B!==0&&B===Bs&&(td=!0),G!==null&&(G=G.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var oe=n,ge=A;B=i;var nt=s;switch(ge.tag){case 1:if(oe=ge.payload,typeof oe=="function"){W=oe.call(nt,W,B);break e}W=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ge.payload,B=typeof oe=="function"?oe.call(nt,W,B):oe,B==null)break e;W=T({},W,B);break e;case 2:Br=!0}}B=A.callback,B!==null&&(n.flags|=64,F&&(n.flags|=8192),F=h.callbacks,F===null?h.callbacks=[B]:F.push(B))}else F={lane:B,tag:A.tag,payload:A.payload,callback:A.callback,next:null},G===null?(z=G=F,R=W):G=G.next=F,_|=B;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;F=A,A=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);G===null&&(R=W),h.baseState=R,h.firstBaseUpdate=z,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Qr|=_,n.lanes=_,n.memoizedState=W}}function ey(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function ty(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)ey(s[n],i)}var js=M(null),_c=M(0);function ny(n,i){n=sr,ie(_c,n),ie(js,i),sr=n|i.baseLanes}function nd(){ie(_c,sr),ie(js,js.current)}function id(){sr=_c.current,K(js),K(_c)}var Cn=M(null),Gn=null;function Fr(n){var i=n.alternate;ie(Tt,Tt.current&1),ie(Cn,n),Gn===null&&(i===null||js.current!==null||i.memoizedState!==null)&&(Gn=n)}function rd(n){ie(Tt,Tt.current),ie(Cn,n),Gn===null&&(Gn=n)}function iy(n){n.tag===22?(ie(Tt,Tt.current),ie(Cn,n),Gn===null&&(Gn=n)):jr()}function jr(){ie(Tt,Tt.current),ie(Cn,Cn.current)}function Dn(n){K(Cn),Gn===n&&(Gn=null),K(Tt)}var Tt=M(0);function vc(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||cm(s)||hm(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ji=0,we=null,et=null,Nt=null,Ec=!1,Gs=!1,Xa=!1,Tc=0,El=0,Ys=null,cS=0;function gt(){throw Error(a(321))}function ad(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!In(n[s],i[s]))return!1;return!0}function sd(n,i,s,l,h,d){return Ji=d,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=n===null||n.memoizedState===null?By:Td,Xa=!1,d=s(l,h),Xa=!1,Gs&&(d=ay(i,s,l,h)),ry(n),d}function ry(n){j.H=Sl;var i=et!==null&&et.next!==null;if(Ji=0,Nt=et=we=null,Ec=!1,El=0,Ys=null,i)throw Error(a(300));n===null||Ot||(n=n.dependencies,n!==null&&hc(n)&&(Ot=!0))}function ay(n,i,s,l){we=n;var h=0;do{if(Gs&&(Ys=null),El=0,Gs=!1,25<=h)throw Error(a(301));if(h+=1,Nt=et=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=Hy,d=i(s,l)}while(Gs);return d}function hS(){var n=j.H,i=n.useState()[0];return i=typeof i.then=="function"?Tl(i):i,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(we.flags|=1024),i}function od(){var n=Tc!==0;return Tc=0,n}function ld(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function ud(n){if(Ec){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ec=!1}Ji=0,Nt=et=we=null,Gs=!1,El=Tc=0,Ys=null}function hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?we.memoizedState=Nt=n:Nt=Nt.next=n,Nt}function At(){if(et===null){var n=we.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var i=Nt===null?we.memoizedState:Nt.next;if(i!==null)Nt=i,et=n;else{if(n===null)throw we.alternate===null?Error(a(467)):Error(a(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Nt===null?we.memoizedState=Nt=n:Nt=Nt.next=n}return Nt}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(n){var i=El;return El+=1,Ys===null&&(Ys=[]),n=Wp(Ys,n,i),i=we,(Nt===null?i.memoizedState:Nt.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?By:Td),n}function Sc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Tl(n);if(n.$$typeof===Z)return $t(n)}throw Error(a(438,String(n)))}function cd(n){var i=null,s=we.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ac(),we.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),l=0;l<n;l++)s[l]=k;return i.index++,s}function Zi(n,i){return typeof i=="function"?i(n):i}function wc(n){var i=At();return hd(i,et,n)}function hd(n,i,s){var l=n.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{i=h.next;var A=_=null,R=null,z=i,G=!1;do{var W=z.lane&-536870913;if(W!==z.lane?(ke&W)===W:(Ji&W)===W){var B=z.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),W===Bs&&(G=!0);else if((Ji&B)===B){z=z.next,B===Bs&&(G=!0);continue}else W={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(A=R=W,_=d):R=R.next=W,we.lanes|=B,Qr|=B;W=z.action,Xa&&s(d,W),d=z.hasEagerState?z.eagerState:s(d,W)}else B={lane:W,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(A=R=B,_=d):R=R.next=B,we.lanes|=W,Qr|=W;z=z.next}while(z!==null&&z!==i);if(R===null?_=d:R.next=A,!In(d,n.memoizedState)&&(Ot=!0,G&&(s=Hs,s!==null)))throw s;n.memoizedState=d,n.baseState=_,n.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function fd(n){var i=At(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var l=s.dispatch,h=s.pending,d=i.memoizedState;if(h!==null){s.pending=null;var _=h=h.next;do d=n(d,_.action),_=_.next;while(_!==h);In(d,i.memoizedState)||(Ot=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function sy(n,i,s){var l=we,h=At(),d=xe;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var _=!In((et||h).memoizedState,s);if(_&&(h.memoizedState=s,Ot=!0),h=h.queue,gd(uy.bind(null,l,h,n),[n]),h.getSnapshot!==i||_||Nt!==null&&Nt.memoizedState.tag&1){if(l.flags|=2048,Qs(9,{destroy:void 0},ly.bind(null,l,h,s,i),null),it===null)throw Error(a(349));d||(Ji&127)!==0||oy(l,i,s)}return s}function oy(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=we.updateQueue,i===null?(i=Ac(),we.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function ly(n,i,s,l){i.value=s,i.getSnapshot=l,cy(i)&&hy(n)}function uy(n,i,s){return s(function(){cy(i)&&hy(n)})}function cy(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!In(n,s)}catch{return!0}}function hy(n){var i=Ha(n,2);i!==null&&En(i,n,2)}function dd(n){var i=hn();if(typeof n=="function"){var s=n;if(n=s(),Xa){Vn(!0);try{s()}finally{Vn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:n},i}function fy(n,i,s,l){return n.baseState=s,hd(n,et,typeof l=="function"?l:Zi)}function fS(n,i,s,l,h){if(Rc(n))throw Error(a(485));if(n=i.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};j.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,dy(i,d)):(d.next=s.next,i.pending=s.next=d)}}function dy(n,i){var s=i.action,l=i.payload,h=n.state;if(i.isTransition){var d=j.T,_={};j.T=_;try{var A=s(h,l),R=j.S;R!==null&&R(_,A),my(n,i,A)}catch(z){md(n,i,z)}finally{d!==null&&_.types!==null&&(d.types=_.types),j.T=d}}else try{d=s(h,l),my(n,i,d)}catch(z){md(n,i,z)}}function my(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gy(n,i,l)},function(l){return md(n,i,l)}):gy(n,i,s)}function gy(n,i,s){i.status="fulfilled",i.value=s,py(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,dy(n,s)))}function md(n,i,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,py(i),i=i.next;while(i!==l)}n.action=null}function py(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function yy(n,i){return i}function _y(n,i){if(xe){var s=it.formState;if(s!==null){e:{var l=we;if(xe){if(rt){t:{for(var h=rt,d=jn;h.nodeType!==8;){if(!d){h=null;break t}if(h=Yn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){rt=Yn(h.nextSibling),l=h.data==="F!";break e}}xr(l)}l=!1}l&&(i=s[0])}}return s=hn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yy,lastRenderedState:i},s.queue=l,s=Uy.bind(null,we,l),l.dispatch=s,l=dd(!1),d=Ed.bind(null,we,!1,l.queue),l=hn(),h={state:i,dispatch:null,action:n,pending:null},l.queue=h,s=fS.bind(null,we,h,d,s),h.dispatch=s,l.memoizedState=n,[i,s,!1]}function vy(n){var i=At();return Ey(i,et,n)}function Ey(n,i,s){if(i=hd(n,i,yy)[0],n=wc(Zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Tl(i)}catch(_){throw _===qs?mc:_}else l=i;i=At();var h=i.queue,d=h.dispatch;return s!==i.memoizedState&&(we.flags|=2048,Qs(9,{destroy:void 0},dS.bind(null,h,s),null)),[l,d,n]}function dS(n,i){n.action=i}function Ty(n){var i=At(),s=et;if(s!==null)return Ey(i,s,n);At(),i=i.memoizedState,s=At();var l=s.queue.dispatch;return s.memoizedState=n,[i,l,!1]}function Qs(n,i,s,l){return n={tag:n,create:s,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=Ac(),we.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,i.lastEffect=n),n}function Ay(){return At().memoizedState}function bc(n,i,s,l){var h=hn();we.flags|=n,h.memoizedState=Qs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Ic(n,i,s,l){var h=At();l=l===void 0?null:l;var d=h.memoizedState.inst;et!==null&&l!==null&&ad(l,et.memoizedState.deps)?h.memoizedState=Qs(i,d,s,l):(we.flags|=n,h.memoizedState=Qs(1|i,d,s,l))}function Sy(n,i){bc(8390656,8,n,i)}function gd(n,i){Ic(2048,8,n,i)}function mS(n){we.flags|=4;var i=we.updateQueue;if(i===null)i=Ac(),we.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function wy(n){var i=At().memoizedState;return mS({ref:i,nextImpl:n}),function(){if((Ye&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function by(n,i){return Ic(4,2,n,i)}function Iy(n,i){return Ic(4,4,n,i)}function Ry(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cy(n,i,s){s=s!=null?s.concat([n]):null,Ic(4,4,Ry.bind(null,i,n),s)}function pd(){}function Dy(n,i){var s=At();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ad(i,l[1])?l[0]:(s.memoizedState=[n,i],n)}function Ny(n,i){var s=At();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ad(i,l[1]))return l[0];if(l=n(),Xa){Vn(!0);try{n()}finally{Vn(!1)}}return s.memoizedState=[l,i],l}function yd(n,i,s){return s===void 0||(Ji&1073741824)!==0&&(ke&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=O_(),we.lanes|=n,Qr|=n,s)}function Oy(n,i,s,l){return In(s,i)?s:js.current!==null?(n=yd(n,s,l),In(n,i)||(Ot=!0),n):(Ji&42)===0||(Ji&1073741824)!==0&&(ke&261930)===0?(Ot=!0,n.memoizedState=s):(n=O_(),we.lanes|=n,Qr|=n,i)}function My(n,i,s,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var _=j.T,A={};j.T=A,Ed(n,!1,i,s);try{var R=h(),z=j.S;if(z!==null&&z(A,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var G=uS(R,l);Al(n,i,G,Mn(n))}else Al(n,i,l,Mn(n))}catch(W){Al(n,i,{then:function(){},status:"rejected",reason:W},Mn())}finally{ne.p=d,_!==null&&A.types!==null&&(_.types=A.types),j.T=_}}function gS(){}function _d(n,i,s,l){if(n.tag!==5)throw Error(a(476));var h=ky(n).queue;My(n,h,i,he,s===null?gS:function(){return Py(n),s(l)})}function ky(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:he},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Py(n){var i=ky(n);i.next===null&&(i=n.alternate.memoizedState),Al(n,i.next.queue,{},Mn())}function vd(){return $t(zl)}function Vy(){return At().memoizedState}function Ly(){return At().memoizedState}function pS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=Mn();n=Hr(s);var l=qr(i,n,s);l!==null&&(En(l,i,s),yl(l,i,s)),i={cache:Kf()},n.payload=i;return}i=i.return}}function yS(n,i,s){var l=Mn();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rc(n)?xy(i,s):(s=Uf(n,i,s,l),s!==null&&(En(s,n,l),zy(s,i,l)))}function Uy(n,i,s){var l=Mn();Al(n,i,s,l)}function Al(n,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Rc(n))xy(i,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,A=d(_,s);if(h.hasEagerState=!0,h.eagerState=A,In(A,_))return oc(n,i,h,0),it===null&&sc(),!1}catch{}finally{}if(s=Uf(n,i,h,l),s!==null)return En(s,n,l),zy(s,i,l),!0}return!1}function Ed(n,i,s,l){if(l={lane:2,revertLane:Jd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Rc(n)){if(i)throw Error(a(479))}else i=Uf(n,s,l,2),i!==null&&En(i,n,2)}function Rc(n){var i=n.alternate;return n===we||i!==null&&i===we}function xy(n,i){Gs=Ec=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function zy(n,i,s){if((s&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,jo(n,s)}}var Sl={readContext:$t,use:Sc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt};Sl.useEffectEvent=gt;var By={readContext:$t,use:Sc,useCallback:function(n,i){return hn().memoizedState=[n,i===void 0?null:i],n},useContext:$t,useEffect:Sy,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,bc(4194308,4,Ry.bind(null,i,n),s)},useLayoutEffect:function(n,i){return bc(4194308,4,n,i)},useInsertionEffect:function(n,i){bc(4,2,n,i)},useMemo:function(n,i){var s=hn();i=i===void 0?null:i;var l=n();if(Xa){Vn(!0);try{n()}finally{Vn(!1)}}return s.memoizedState=[l,i],l},useReducer:function(n,i,s){var l=hn();if(s!==void 0){var h=s(i);if(Xa){Vn(!0);try{s(i)}finally{Vn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=yS.bind(null,we,n),[l.memoizedState,n]},useRef:function(n){var i=hn();return n={current:n},i.memoizedState=n},useState:function(n){n=dd(n);var i=n.queue,s=Uy.bind(null,we,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:pd,useDeferredValue:function(n,i){var s=hn();return yd(s,n,i)},useTransition:function(){var n=dd(!1);return n=My.bind(null,we,n.queue,!0,!1),hn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var l=we,h=hn();if(xe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),it===null)throw Error(a(349));(ke&127)!==0||oy(l,i,s)}h.memoizedState=s;var d={value:s,getSnapshot:i};return h.queue=d,Sy(uy.bind(null,l,d,n),[n]),l.flags|=2048,Qs(9,{destroy:void 0},ly.bind(null,l,d,s,i),null),s},useId:function(){var n=hn(),i=it.identifierPrefix;if(xe){var s=Oi,l=Ni;s=(l&~(1<<32-vt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Tc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=cS++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:vd,useFormState:_y,useActionState:_y,useOptimistic:function(n){var i=hn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ed.bind(null,we,!0,s),s.dispatch=i,[n,i]},useMemoCache:cd,useCacheRefresh:function(){return hn().memoizedState=pS.bind(null,we)},useEffectEvent:function(n){var i=hn(),s={impl:n};return i.memoizedState=s,function(){if((Ye&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Td={readContext:$t,use:Sc,useCallback:Dy,useContext:$t,useEffect:gd,useImperativeHandle:Cy,useInsertionEffect:by,useLayoutEffect:Iy,useMemo:Ny,useReducer:wc,useRef:Ay,useState:function(){return wc(Zi)},useDebugValue:pd,useDeferredValue:function(n,i){var s=At();return Oy(s,et.memoizedState,n,i)},useTransition:function(){var n=wc(Zi)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Tl(n),i]},useSyncExternalStore:sy,useId:Vy,useHostTransitionStatus:vd,useFormState:vy,useActionState:vy,useOptimistic:function(n,i){var s=At();return fy(s,et,n,i)},useMemoCache:cd,useCacheRefresh:Ly};Td.useEffectEvent=wy;var Hy={readContext:$t,use:Sc,useCallback:Dy,useContext:$t,useEffect:gd,useImperativeHandle:Cy,useInsertionEffect:by,useLayoutEffect:Iy,useMemo:Ny,useReducer:fd,useRef:Ay,useState:function(){return fd(Zi)},useDebugValue:pd,useDeferredValue:function(n,i){var s=At();return et===null?yd(s,n,i):Oy(s,et.memoizedState,n,i)},useTransition:function(){var n=fd(Zi)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Tl(n),i]},useSyncExternalStore:sy,useId:Vy,useHostTransitionStatus:vd,useFormState:Ty,useActionState:Ty,useOptimistic:function(n,i){var s=At();return et!==null?fy(s,et,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:cd,useCacheRefresh:Ly};Hy.useEffectEvent=wy;function Ad(n,i,s,l){i=n.memoizedState,s=s(l,i),s=s==null?i:T({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Sd={enqueueSetState:function(n,i,s){n=n._reactInternals;var l=Mn(),h=Hr(l);h.payload=i,s!=null&&(h.callback=s),i=qr(n,h,l),i!==null&&(En(i,n,l),yl(i,n,l))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var l=Mn(),h=Hr(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=qr(n,h,l),i!==null&&(En(i,n,l),yl(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Mn(),l=Hr(s);l.tag=2,i!=null&&(l.callback=i),i=qr(n,l,s),i!==null&&(En(i,n,s),yl(i,n,s))}};function qy(n,i,s,l,h,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!ul(s,l)||!ul(h,d):!0}function Fy(n,i,s,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==n&&Sd.enqueueReplaceState(i,i.state,null)}function $a(n,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(n=n.defaultProps){s===i&&(s=T({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}function jy(n){ac(n)}function Gy(n){console.error(n)}function Yy(n){ac(n)}function Cc(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Qy(n,i,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function wd(n,i,s){return s=Hr(s),s.tag=3,s.payload={element:null},s.callback=function(){Cc(n,i)},s}function Ky(n){return n=Hr(n),n.tag=3,n}function Wy(n,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){Qy(i,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){Qy(i,s,l),typeof h!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function _S(n,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&zs(i,s,h,!0),s=Cn.current,s!==null){switch(s.tag){case 31:case 13:return Gn===null?Bc():s.alternate===null&&pt===0&&(pt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===gc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Wd(n,l,h)),!1;case 22:return s.flags|=65536,l===gc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Wd(n,l,h)),!1}throw Error(a(435,s.tag))}return Wd(n,l,h),Bc(),!1}if(xe)return i=Cn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Ff&&(n=Error(a(422),{cause:l}),fl(Hn(n,s)))):(l!==Ff&&(i=Error(a(423),{cause:l}),fl(Hn(i,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Hn(l,s),h=wd(n.stateNode,l,h),ed(n,h),pt!==4&&(pt=2)),!1;var d=Error(a(520),{cause:l});if(d=Hn(d,s),Ol===null?Ol=[d]:Ol.push(d),pt!==4&&(pt=2),i===null)return!0;l=Hn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=wd(s.stateNode,l,n),ed(s,n),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Kr===null||!Kr.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ky(h),Wy(h,n,s,l),ed(s,h),!1}s=s.return}while(s!==null);return!1}var bd=Error(a(461)),Ot=!1;function Jt(n,i,s,l){i.child=n===null?Zp(i,null,s,l):Wa(i,n.child,s,l)}function Xy(n,i,s,l,h){s=s.render;var d=i.ref;if("ref"in l){var _={};for(var A in l)A!=="ref"&&(_[A]=l[A])}else _=l;return Ga(i),l=sd(n,i,s,_,d,h),A=od(),n!==null&&!Ot?(ld(n,i,h),er(n,i,h)):(xe&&A&&Hf(i),i.flags|=1,Jt(n,i,l,h),i.child)}function $y(n,i,s,l,h){if(n===null){var d=s.type;return typeof d=="function"&&!xf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Jy(n,i,d,l,h)):(n=uc(s.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!kd(n,h)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:ul,s(_,l)&&n.ref===i.ref)return er(n,i,h)}return i.flags|=1,n=Ki(d,l),n.ref=i.ref,n.return=i,i.child=n}function Jy(n,i,s,l,h){if(n!==null){var d=n.memoizedProps;if(ul(d,l)&&n.ref===i.ref)if(Ot=!1,i.pendingProps=l=d,kd(n,h))(n.flags&131072)!==0&&(Ot=!0);else return i.lanes=n.lanes,er(n,i,h)}return Id(n,i,s,l,h)}function Zy(n,i,s,l){var h=l.children,d=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,n!==null){for(l=i.child=n.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return e_(n,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&dc(i,d!==null?d.cachePool:null),d!==null?ny(i,d):nd(),iy(i);else return l=i.lanes=536870912,e_(n,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(dc(i,d.cachePool),ny(i,d),jr(),i.memoizedState=null):(n!==null&&dc(i,null),nd(),jr());return Jt(n,i,h,s),i.child}function wl(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function e_(n,i,s,l,h){var d=Xf();return d=d===null?null:{parent:Dt._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},n!==null&&dc(i,null),nd(),iy(i),n!==null&&zs(n,i,l,!0),i.childLanes=h,null}function Dc(n,i){return i=Oc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function t_(n,i,s){return Wa(i,n.child,null,s),n=Dc(i,i.pendingProps),n.flags|=2,Dn(i),i.memoizedState=null,n}function vS(n,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(xe){if(l.mode==="hidden")return n=Dc(i,l),i.lanes=536870912,wl(null,n);if(rd(i),(n=rt)?(n=dv(n,jn),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Lr!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},s=xp(n),s.return=i,i.child=s,Xt=i,rt=null)):n=null,n===null)throw xr(i);return i.lanes=536870912,null}return Dc(i,l)}var d=n.memoizedState;if(d!==null){var _=d.dehydrated;if(rd(i),h)if(i.flags&256)i.flags&=-257,i=t_(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(Ot||zs(n,i,s,!1),h=(s&n.childLanes)!==0,Ot||h){if(l=it,l!==null&&(_=Go(l,s),_!==0&&_!==d.retryLane))throw d.retryLane=_,Ha(n,_),En(l,n,_),bd;Bc(),i=t_(n,i,s)}else n=d.treeContext,rt=Yn(_.nextSibling),Xt=i,xe=!0,Ur=null,jn=!1,n!==null&&Hp(i,n),i=Dc(i,l),i.flags|=4096;return i}return n=Ki(n.child,{mode:l.mode,children:l.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Nc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function Id(n,i,s,l,h){return Ga(i),s=sd(n,i,s,l,void 0,h),l=od(),n!==null&&!Ot?(ld(n,i,h),er(n,i,h)):(xe&&l&&Hf(i),i.flags|=1,Jt(n,i,s,h),i.child)}function n_(n,i,s,l,h,d){return Ga(i),i.updateQueue=null,s=ay(i,l,s,h),ry(n),l=od(),n!==null&&!Ot?(ld(n,i,d),er(n,i,d)):(xe&&l&&Hf(i),i.flags|=1,Jt(n,i,s,d),i.child)}function i_(n,i,s,l,h){if(Ga(i),i.stateNode===null){var d=Vs,_=s.contextType;typeof _=="object"&&_!==null&&(d=$t(_)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Jf(i),_=s.contextType,d.context=typeof _=="object"&&_!==null?$t(_):Vs,d.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Ad(i,s,_,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Sd.enqueueReplaceState(d,d.state,null),vl(i,l,d,h),_l(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var A=i.memoizedProps,R=$a(s,A);d.props=R;var z=d.context,G=s.contextType;_=Vs,typeof G=="object"&&G!==null&&(_=$t(G));var W=s.getDerivedStateFromProps;G=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||z!==_)&&Fy(i,d,l,_),Br=!1;var B=i.memoizedState;d.state=B,vl(i,l,d,h),_l(),z=i.memoizedState,A||B!==z||Br?(typeof W=="function"&&(Ad(i,s,W,l),z=i.memoizedState),(R=Br||qy(i,s,R,l,B,z,_))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Zf(n,i),_=i.memoizedProps,G=$a(s,_),d.props=G,W=i.pendingProps,B=d.context,z=s.contextType,R=Vs,typeof z=="object"&&z!==null&&(R=$t(z)),A=s.getDerivedStateFromProps,(z=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==W||B!==R)&&Fy(i,d,l,R),Br=!1,B=i.memoizedState,d.state=B,vl(i,l,d,h),_l();var F=i.memoizedState;_!==W||B!==F||Br||n!==null&&n.dependencies!==null&&hc(n.dependencies)?(typeof A=="function"&&(Ad(i,s,A,l),F=i.memoizedState),(G=Br||qy(i,s,G,l,B,F,R)||n!==null&&n.dependencies!==null&&hc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=R,l=G):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,Nc(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=Wa(i,n.child,null,h),i.child=Wa(i,null,s,h)):Jt(n,i,s,h),i.memoizedState=d.state,n=i.child):n=er(n,i,h),n}function r_(n,i,s,l){return Fa(),i.flags|=256,Jt(n,i,s,l),i.child}var Rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cd(n){return{baseLanes:n,cachePool:Qp()}}function Dd(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=On),n}function a_(n,i,s){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(Tt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,n===null){if(xe){if(h?Fr(i):jr(),(n=rt)?(n=dv(n,jn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Lr!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},s=xp(n),s.return=i,i.child=s,Xt=i,rt=null)):n=null,n===null)throw xr(i);return hm(n)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,h?(jr(),h=i.mode,A=Oc({mode:"hidden",children:A},h),l=qa(l,h,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Cd(s),l.childLanes=Dd(n,_,s),i.memoizedState=Rd,wl(null,l)):(Fr(i),Nd(i,A))}var R=n.memoizedState;if(R!==null&&(A=R.dehydrated,A!==null)){if(d)i.flags&256?(Fr(i),i.flags&=-257,i=Od(n,i,s)):i.memoizedState!==null?(jr(),i.child=n.child,i.flags|=128,i=null):(jr(),A=l.fallback,h=i.mode,l=Oc({mode:"visible",children:l.children},h),A=qa(A,h,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Wa(i,n.child,null,s),l=i.child,l.memoizedState=Cd(s),l.childLanes=Dd(n,_,s),i.memoizedState=Rd,i=wl(null,l));else if(Fr(i),hm(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(a(419)),l.stack="",l.digest=_,fl({value:l,source:null,stack:null}),i=Od(n,i,s)}else if(Ot||zs(n,i,s,!1),_=(s&n.childLanes)!==0,Ot||_){if(_=it,_!==null&&(l=Go(_,s),l!==0&&l!==R.retryLane))throw R.retryLane=l,Ha(n,l),En(_,n,l),bd;cm(A)||Bc(),i=Od(n,i,s)}else cm(A)?(i.flags|=192,i.child=n.child,i=null):(n=R.treeContext,rt=Yn(A.nextSibling),Xt=i,xe=!0,Ur=null,jn=!1,n!==null&&Hp(i,n),i=Nd(i,l.children),i.flags|=4096);return i}return h?(jr(),A=l.fallback,h=i.mode,R=n.child,z=R.sibling,l=Ki(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,z!==null?A=Ki(z,A):(A=qa(A,h,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,wl(null,l),l=i.child,A=n.child.memoizedState,A===null?A=Cd(s):(h=A.cachePool,h!==null?(R=Dt._currentValue,h=h.parent!==R?{parent:R,pool:R}:h):h=Qp(),A={baseLanes:A.baseLanes|s,cachePool:h}),l.memoizedState=A,l.childLanes=Dd(n,_,s),i.memoizedState=Rd,wl(n.child,l)):(Fr(i),s=n.child,n=s.sibling,s=Ki(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,n!==null&&(_=i.deletions,_===null?(i.deletions=[n],i.flags|=16):_.push(n)),i.child=s,i.memoizedState=null,s)}function Nd(n,i){return i=Oc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Oc(n,i){return n=Rn(22,n,null,i),n.lanes=0,n}function Od(n,i,s){return Wa(i,n.child,null,s),n=Nd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function s_(n,i,s){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Yf(n.return,i,s)}function Md(n,i,s,l,h,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=s,_.tailMode=h,_.treeForkCount=d)}function o_(n,i,s){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=Tt.current,A=(_&2)!==0;if(A?(_=_&1|2,i.flags|=128):_&=1,ie(Tt,_),Jt(n,i,l,s),l=xe?hl:0,!A&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&s_(n,s,i);else if(n.tag===19)s_(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&vc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Md(i,!1,h,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&vc(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Md(i,!0,s,null,d,l);break;case"together":Md(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function er(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Qr|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(zs(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=Ki(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=Ki(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function kd(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&hc(n)))}function ES(n,i,s){switch(i.tag){case 3:Ut(i,i.stateNode.containerInfo),zr(i,Dt,n.memoizedState.cache),Fa();break;case 27:case 5:Sa(i);break;case 4:Ut(i,i.stateNode.containerInfo);break;case 10:zr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,rd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Fr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?a_(n,i,s):(Fr(i),n=er(n,i,s),n!==null?n.sibling:null);Fr(i);break;case 19:var h=(n.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(zs(n,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return o_(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ie(Tt,Tt.current),l)break;return null;case 22:return i.lanes=0,Zy(n,i,s,i.pendingProps);case 24:zr(i,Dt,n.memoizedState.cache)}return er(n,i,s)}function l_(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)Ot=!0;else{if(!kd(n,s)&&(i.flags&128)===0)return Ot=!1,ES(n,i,s);Ot=(n.flags&131072)!==0}else Ot=!1,xe&&(i.flags&1048576)!==0&&Bp(i,hl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(n=Qa(i.elementType),i.type=n,typeof n=="function")xf(n)?(l=$a(n,l),i.tag=1,i=i_(null,i,n,l,s)):(i.tag=0,i=Id(null,i,n,l,s));else{if(n!=null){var h=n.$$typeof;if(h===me){i.tag=11,i=Xy(null,i,n,l,s);break e}else if(h===D){i.tag=14,i=$y(null,i,n,l,s);break e}}throw i=He(n)||n,Error(a(306,i,""))}}return i;case 0:return Id(n,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=$a(l,i.pendingProps),i_(n,i,l,h,s);case 3:e:{if(Ut(i,i.stateNode.containerInfo),n===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Zf(n,i),vl(i,l,null,s);var _=i.memoizedState;if(l=_.cache,zr(i,Dt,l),l!==d.cache&&Qf(i,[Dt],s,!0),_l(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=r_(n,i,l,s);break e}else if(l!==h){h=Hn(Error(a(424)),i),fl(h),i=r_(n,i,l,s);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=Yn(n.firstChild),Xt=i,xe=!0,Ur=null,jn=!0,s=Zp(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fa(),l===h){i=er(n,i,s);break e}Jt(n,i,l,s)}i=i.child}return i;case 26:return Nc(n,i),n===null?(s=vv(i.type,null,i.pendingProps,null))?i.memoizedState=s:xe||(s=i.type,n=i.pendingProps,l=Qc(be.current).createElement(s),l[It]=i,l[Ft]=n,Zt(l,s,n),Rt(l),i.stateNode=l):i.memoizedState=vv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Sa(i),n===null&&xe&&(l=i.stateNode=pv(i.type,i.pendingProps,be.current),Xt=i,jn=!0,h=rt,Jr(i.type)?(fm=h,rt=Yn(l.firstChild)):rt=h),Jt(n,i,i.pendingProps.children,s),Nc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&xe&&((h=l=rt)&&(l=XS(l,i.type,i.pendingProps,jn),l!==null?(i.stateNode=l,Xt=i,rt=Yn(l.firstChild),jn=!1,h=!0):h=!1),h||xr(i)),Sa(i),h=i.type,d=i.pendingProps,_=n!==null?n.memoizedProps:null,l=d.children,om(h,d)?l=null:_!==null&&om(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=sd(n,i,hS,null,null,s),zl._currentValue=h),Nc(n,i),Jt(n,i,l,s),i.child;case 6:return n===null&&xe&&((n=s=rt)&&(s=$S(s,i.pendingProps,jn),s!==null?(i.stateNode=s,Xt=i,rt=null,n=!0):n=!1),n||xr(i)),null;case 13:return a_(n,i,s);case 4:return Ut(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=Wa(i,null,l,s):Jt(n,i,l,s),i.child;case 11:return Xy(n,i,i.type,i.pendingProps,s);case 7:return Jt(n,i,i.pendingProps,s),i.child;case 8:return Jt(n,i,i.pendingProps.children,s),i.child;case 12:return Jt(n,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,zr(i,i.type,l.value),Jt(n,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ga(i),h=$t(h),l=l(h),i.flags|=1,Jt(n,i,l,s),i.child;case 14:return $y(n,i,i.type,i.pendingProps,s);case 15:return Jy(n,i,i.type,i.pendingProps,s);case 19:return o_(n,i,s);case 31:return vS(n,i,s);case 22:return Zy(n,i,s,i.pendingProps);case 24:return Ga(i),l=$t(Dt),n===null?(h=Xf(),h===null&&(h=it,d=Kf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),i.memoizedState={parent:l,cache:h},Jf(i),zr(i,Dt,h)):((n.lanes&s)!==0&&(Zf(n,i),vl(i,null,null,s),_l()),h=n.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),zr(i,Dt,l)):(l=d.cache,zr(i,Dt,l),l!==h.cache&&Qf(i,[Dt],s,!0))),Jt(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function tr(n){n.flags|=4}function Pd(n,i,s,l,h){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(h&335544128)===h)if(n.stateNode.complete)n.flags|=8192;else if(V_())n.flags|=8192;else throw Ka=gc,$f}else n.flags&=-16777217}function u_(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!wv(i))if(V_())n.flags|=8192;else throw Ka=gc,$f}function Mc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?xu():536870912,n.lanes|=i,$s|=i)}function bl(n,i){if(!xe)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function at(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=s,i}function TS(n,i,s){var l=i.pendingProps;switch(qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(i),null;case 1:return at(i),null;case 3:return s=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(Dt),ct(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(xs(i)?tr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jf())),at(i),null;case 26:var h=i.type,d=i.memoizedState;return n===null?(tr(i),d!==null?(at(i),u_(i,d)):(at(i),Pd(i,h,null,l,s))):d?d!==n.memoizedState?(tr(i),at(i),u_(i,d)):(at(i),i.flags&=-16777217):(n=n.memoizedProps,n!==l&&tr(i),at(i),Pd(i,h,n,l,s)),null;case 27:if(ps(i),s=be.current,h=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&tr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return at(i),null}n=ae.current,xs(i)?qp(i):(n=pv(h,l,s),i.stateNode=n,tr(i))}return at(i),null;case 5:if(ps(i),h=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&tr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return at(i),null}if(d=ae.current,xs(i))qp(i);else{var _=Qc(be.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[It]=i,d[Ft]=l;e:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break e;for(;_.sibling===null;){if(_.return===null||_.return===i)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;e:switch(Zt(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&tr(i)}}return at(i),Pd(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&tr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(n=be.current,xs(i)){if(n=i.stateNode,s=i.memoizedProps,l=null,h=Xt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[It]=i,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||av(n.nodeValue,s)),n||xr(i,!0)}else n=Qc(n).createTextNode(l),n[It]=i,i.stateNode=n}return at(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(l=xs(i),s!==null){if(n===null){if(!l)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[It]=i}else Fa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),n=!1}else s=jf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(Dn(i),i):(Dn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return at(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=xs(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[It]=i}else Fa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),h=!1}else h=jf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Dn(i),i):(Dn(i),null)}return Dn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),at(i),null);case 4:return ct(),n===null&&nm(i.stateNode.containerInfo),at(i),null;case 10:return $i(i.type),at(i),null;case 19:if(K(Tt),l=i.memoizedState,l===null)return at(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)bl(l,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=vc(n),d!==null){for(i.flags|=128,bl(l,!1),n=d.updateQueue,i.updateQueue=n,Mc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)Up(s,n),s=s.sibling;return ie(Tt,Tt.current&1|2),xe&&Wi(i,l.treeForkCount),i.child}n=n.sibling}l.tail!==null&&un()>Uc&&(i.flags|=128,h=!0,bl(l,!1),i.lanes=4194304)}else{if(!h)if(n=vc(d),n!==null){if(i.flags|=128,h=!0,n=n.updateQueue,i.updateQueue=n,Mc(i,n),bl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!xe)return at(i),null}else 2*un()-l.renderingStartTime>Uc&&s!==536870912&&(i.flags|=128,h=!0,bl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(n=l.last,n!==null?n.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=un(),n.sibling=null,s=Tt.current,ie(Tt,h?s&1|2:s&1),xe&&Wi(i,l.treeForkCount),n):(at(i),null);case 22:case 23:return Dn(i),id(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(at(i),i.subtreeFlags&6&&(i.flags|=8192)):at(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),n!==null&&K(Ya),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),$i(Dt),at(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function AS(n,i){switch(qf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return $i(Dt),ct(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return ps(i),null;case 31:if(i.memoizedState!==null){if(Dn(i),i.alternate===null)throw Error(a(340));Fa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Dn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return K(Tt),null;case 4:return ct(),null;case 10:return $i(i.type),null;case 22:case 23:return Dn(i),id(),n!==null&&K(Ya),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return $i(Dt),null;case 25:return null;default:return null}}function c_(n,i){switch(qf(i),i.tag){case 3:$i(Dt),ct();break;case 26:case 27:case 5:ps(i);break;case 4:ct();break;case 31:i.memoizedState!==null&&Dn(i);break;case 13:Dn(i);break;case 19:K(Tt);break;case 10:$i(i.type);break;case 22:case 23:Dn(i),id(),n!==null&&K(Ya);break;case 24:$i(Dt)}}function Il(n,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&n)===n){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==h)}}catch(A){$e(i,i.return,A)}}function Gr(n,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var _=l.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,h=i;var R=s,z=A;try{z()}catch(G){$e(h,R,G)}}}l=l.next}while(l!==d)}}catch(G){$e(i,i.return,G)}}function h_(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{ty(i,s)}catch(l){$e(n,n.return,l)}}}function f_(n,i,s){s.props=$a(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){$e(n,i,l)}}function Rl(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(h){$e(n,i,h)}}function Mi(n,i){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){$e(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){$e(n,i,h)}else s.current=null}function d_(n){var i=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){$e(n,n.return,h)}}function Vd(n,i,s){try{var l=n.stateNode;jS(l,n.type,s,i),l[Ft]=i}catch(h){$e(n,n.return,h)}}function m_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Jr(n.type)||n.tag===4}function Ld(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||m_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Jr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ud(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ti));else if(l!==4&&(l===27&&Jr(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(Ud(n,i,s),n=n.sibling;n!==null;)Ud(n,i,s),n=n.sibling}function kc(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(l!==4&&(l===27&&Jr(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(kc(n,i,s),n=n.sibling;n!==null;)kc(n,i,s),n=n.sibling}function g_(n){var i=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Zt(i,l,s),i[It]=n,i[Ft]=s}catch(d){$e(n,n.return,d)}}var nr=!1,Mt=!1,xd=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function SS(n,i){if(n=n.containerInfo,am=eh,n=Cp(n),Of(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var _=0,A=-1,R=-1,z=0,G=0,W=n,B=null;t:for(;;){for(var F;W!==s||h!==0&&W.nodeType!==3||(A=_+h),W!==d||l!==0&&W.nodeType!==3||(R=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(F=W.firstChild)!==null;)B=W,W=F;for(;;){if(W===n)break t;if(B===s&&++z===h&&(A=_),B===d&&++G===l&&(R=_),(F=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=F}s=A===-1||R===-1?null:{start:A,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(sm={focusedElem:n,selectionRange:s},eh=!1,Gt=i;Gt!==null;)if(i=Gt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Gt=n;else for(;Gt!==null;){switch(i=Gt,d=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)h=n[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,s=i,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var oe=$a(s.type,h);n=l.getSnapshotBeforeUpdate(oe,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){$e(s,s.return,ge)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)um(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":um(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Gt=n;break}Gt=i.return}}function y_(n,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:rr(n,s),l&4&&Il(5,s);break;case 1:if(rr(n,s),l&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(_){$e(s,s.return,_)}else{var h=$a(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(_){$e(s,s.return,_)}}l&64&&h_(s),l&512&&Rl(s,s.return);break;case 3:if(rr(n,s),l&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ty(n,i)}catch(_){$e(s,s.return,_)}}break;case 27:i===null&&l&4&&g_(s);case 26:case 5:rr(n,s),i===null&&l&4&&d_(s),l&512&&Rl(s,s.return);break;case 12:rr(n,s);break;case 31:rr(n,s),l&4&&E_(n,s);break;case 13:rr(n,s),l&4&&T_(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=MS.bind(null,s),JS(n,s))));break;case 22:if(l=s.memoizedState!==null||nr,!l){i=i!==null&&i.memoizedState!==null||Mt,h=nr;var d=Mt;nr=l,(Mt=i)&&!d?ar(n,s,(s.subtreeFlags&8772)!==0):rr(n,s),nr=h,Mt=d}break;case 30:break;default:rr(n,s)}}function __(n){var i=n.alternate;i!==null&&(n.alternate=null,__(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ts(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ft=null,pn=!1;function ir(n,i,s){for(s=s.child;s!==null;)v_(n,i,s),s=s.sibling}function v_(n,i,s){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount($n,s)}catch{}switch(s.tag){case 26:Mt||Mi(s,i),ir(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mt||Mi(s,i);var l=ft,h=pn;Jr(s.type)&&(ft=s.stateNode,pn=!1),ir(n,i,s),Ll(s.stateNode),ft=l,pn=h;break;case 5:Mt||Mi(s,i);case 6:if(l=ft,h=pn,ft=null,ir(n,i,s),ft=l,pn=h,ft!==null)if(pn)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(s.stateNode)}catch(d){$e(s,i,d)}else try{ft.removeChild(s.stateNode)}catch(d){$e(s,i,d)}break;case 18:ft!==null&&(pn?(n=ft,hv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),ao(n)):hv(ft,s.stateNode));break;case 4:l=ft,h=pn,ft=s.stateNode.containerInfo,pn=!0,ir(n,i,s),ft=l,pn=h;break;case 0:case 11:case 14:case 15:Gr(2,s,i),Mt||Gr(4,s,i),ir(n,i,s);break;case 1:Mt||(Mi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&f_(s,i,l)),ir(n,i,s);break;case 21:ir(n,i,s);break;case 22:Mt=(l=Mt)||s.memoizedState!==null,ir(n,i,s),Mt=l;break;default:ir(n,i,s)}}function E_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{ao(n)}catch(s){$e(i,i.return,s)}}}function T_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ao(n)}catch(s){$e(i,i.return,s)}}function wS(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new p_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new p_),i;default:throw Error(a(435,n.tag))}}function Pc(n,i){var s=wS(n);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=kS.bind(null,n,l);l.then(h,h)}})}function yn(n,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=n,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Jr(A.type)){ft=A.stateNode,pn=!1;break e}break;case 5:ft=A.stateNode,pn=!1;break e;case 3:case 4:ft=A.stateNode.containerInfo,pn=!0;break e}A=A.return}if(ft===null)throw Error(a(160));v_(d,_,h),ft=null,pn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)A_(i,n),i=i.sibling}var oi=null;function A_(n,i){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:yn(i,n),_n(n),l&4&&(Gr(3,n,n.return),Il(3,n),Gr(5,n,n.return));break;case 1:yn(i,n),_n(n),l&512&&(Mt||s===null||Mi(s,s.return)),l&64&&nr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=oi;if(yn(i,n),_n(n),l&512&&(Mt||s===null||Mi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[_i]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Zt(d,l,s),d[It]=n,Rt(d),l=d;break e;case"link":var _=Av("link","href",h).get(l+(s.href||""));if(_){for(var A=0;A<_.length;A++)if(d=_[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(A,1);break t}}d=h.createElement(l),Zt(d,l,s),h.head.appendChild(d);break;case"meta":if(_=Av("meta","content",h).get(l+(s.content||""))){for(A=0;A<_.length;A++)if(d=_[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(A,1);break t}}d=h.createElement(l),Zt(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[It]=n,Rt(d),l=d}n.stateNode=l}else Sv(h,n.type,n.stateNode);else n.stateNode=Tv(h,l,n.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Sv(h,n.type,n.stateNode):Tv(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Vd(n,n.memoizedProps,s.memoizedProps)}break;case 27:yn(i,n),_n(n),l&512&&(Mt||s===null||Mi(s,s.return)),s!==null&&l&4&&Vd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(yn(i,n),_n(n),l&512&&(Mt||s===null||Mi(s,s.return)),n.flags&32){h=n.stateNode;try{gn(h,"")}catch(oe){$e(n,n.return,oe)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Vd(n,h,s!==null?s.memoizedProps:h)),l&1024&&(xd=!0);break;case 6:if(yn(i,n),_n(n),l&4){if(n.stateNode===null)throw Error(a(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(oe){$e(n,n.return,oe)}}break;case 3:if(Xc=null,h=oi,oi=Kc(i.containerInfo),yn(i,n),oi=h,_n(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(oe){$e(n,n.return,oe)}xd&&(xd=!1,S_(n));break;case 4:l=oi,oi=Kc(n.stateNode.containerInfo),yn(i,n),_n(n),oi=l;break;case 12:yn(i,n),_n(n);break;case 31:yn(i,n),_n(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Pc(n,l)));break;case 13:yn(i,n),_n(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Lc=un()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Pc(n,l)));break;case 22:h=n.memoizedState!==null;var R=s!==null&&s.memoizedState!==null,z=nr,G=Mt;if(nr=z||h,Mt=G||R,yn(i,n),Mt=G,nr=z,_n(n),l&8192)e:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||R||nr||Mt||Ja(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){R=s=i;try{if(d=R.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=R.stateNode;var W=R.memoizedProps.style,B=W!=null&&W.hasOwnProperty("display")?W.display:null;A.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(oe){$e(R,R.return,oe)}}}else if(i.tag===6){if(s===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(oe){$e(R,R.return,oe)}}}else if(i.tag===18){if(s===null){R=i;try{var F=R.stateNode;h?fv(F,!0):fv(R.stateNode,!1)}catch(oe){$e(R,R.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Pc(n,s))));break;case 19:yn(i,n),_n(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Pc(n,l)));break;case 30:break;case 21:break;default:yn(i,n),_n(n)}}function _n(n){var i=n.flags;if(i&2){try{for(var s,l=n.return;l!==null;){if(m_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=Ld(n);kc(n,d,h);break;case 5:var _=s.stateNode;s.flags&32&&(gn(_,""),s.flags&=-33);var A=Ld(n);kc(n,A,_);break;case 3:case 4:var R=s.stateNode.containerInfo,z=Ld(n);Ud(n,z,R);break;default:throw Error(a(161))}}catch(G){$e(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function S_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;S_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function rr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)y_(n,i.alternate,i),i=i.sibling}function Ja(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Gr(4,i,i.return),Ja(i);break;case 1:Mi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&f_(i,i.return,s),Ja(i);break;case 27:Ll(i.stateNode);case 26:case 5:Mi(i,i.return),Ja(i);break;case 22:i.memoizedState===null&&Ja(i);break;case 30:Ja(i);break;default:Ja(i)}n=n.sibling}}function ar(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=n,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:ar(h,d,s),Il(4,d);break;case 1:if(ar(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){$e(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var A=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)ey(R[h],A)}catch(z){$e(l,l.return,z)}}s&&_&64&&h_(d),Rl(d,d.return);break;case 27:g_(d);case 26:case 5:ar(h,d,s),s&&l===null&&_&4&&d_(d),Rl(d,d.return);break;case 12:ar(h,d,s);break;case 31:ar(h,d,s),s&&_&4&&E_(h,d);break;case 13:ar(h,d,s),s&&_&4&&T_(h,d);break;case 22:d.memoizedState===null&&ar(h,d,s),Rl(d,d.return);break;case 30:break;default:ar(h,d,s)}i=i.sibling}}function zd(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&dl(s))}function Bd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&dl(n))}function li(n,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)w_(n,i,s,l),i=i.sibling}function w_(n,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(n,i,s,l),h&2048&&Il(9,i);break;case 1:li(n,i,s,l);break;case 3:li(n,i,s,l),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&dl(n)));break;case 12:if(h&2048){li(n,i,s,l),n=i.stateNode;try{var d=i.memoizedProps,_=d.id,A=d.onPostCommit;typeof A=="function"&&A(_,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){$e(i,i.return,R)}}else li(n,i,s,l);break;case 31:li(n,i,s,l);break;case 13:li(n,i,s,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?li(n,i,s,l):Cl(n,i):d._visibility&2?li(n,i,s,l):(d._visibility|=2,Ks(n,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&zd(_,i);break;case 24:li(n,i,s,l),h&2048&&Bd(i.alternate,i);break;default:li(n,i,s,l)}}function Ks(n,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=n,_=i,A=s,R=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ks(d,_,A,R,h),Il(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?Ks(d,_,A,R,h):Cl(d,_):(G._visibility|=2,Ks(d,_,A,R,h)),h&&z&2048&&zd(_.alternate,_);break;case 24:Ks(d,_,A,R,h),h&&z&2048&&Bd(_.alternate,_);break;default:Ks(d,_,A,R,h)}i=i.sibling}}function Cl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,l=i,h=l.flags;switch(l.tag){case 22:Cl(s,l),h&2048&&zd(l.alternate,l);break;case 24:Cl(s,l),h&2048&&Bd(l.alternate,l);break;default:Cl(s,l)}i=i.sibling}}var Dl=8192;function Ws(n,i,s){if(n.subtreeFlags&Dl)for(n=n.child;n!==null;)b_(n,i,s),n=n.sibling}function b_(n,i,s){switch(n.tag){case 26:Ws(n,i,s),n.flags&Dl&&n.memoizedState!==null&&cw(s,oi,n.memoizedState,n.memoizedProps);break;case 5:Ws(n,i,s);break;case 3:case 4:var l=oi;oi=Kc(n.stateNode.containerInfo),Ws(n,i,s),oi=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Dl,Dl=16777216,Ws(n,i,s),Dl=l):Ws(n,i,s));break;default:Ws(n,i,s)}}function I_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Nl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Gt=l,C_(l,n)}I_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)R_(n),n=n.sibling}function R_(n){switch(n.tag){case 0:case 11:case 15:Nl(n),n.flags&2048&&Gr(9,n,n.return);break;case 3:Nl(n);break;case 12:Nl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Vc(n)):Nl(n);break;default:Nl(n)}}function Vc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Gt=l,C_(l,n)}I_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Gr(8,i,i.return),Vc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Vc(i));break;default:Vc(i)}n=n.sibling}}function C_(n,i){for(;Gt!==null;){var s=Gt;switch(s.tag){case 0:case 11:case 15:Gr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:dl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Gt=l;else e:for(s=n;Gt!==null;){l=Gt;var h=l.sibling,d=l.return;if(__(l),l===s){Gt=null;break e}if(h!==null){h.return=d,Gt=h;break e}Gt=d}}}var bS={getCacheForType:function(n){var i=$t(Dt),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return $t(Dt).controller.signal}},IS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,it=null,Ce=null,ke=0,Xe=0,Nn=null,Yr=!1,Xs=!1,Hd=!1,sr=0,pt=0,Qr=0,Za=0,qd=0,On=0,$s=0,Ol=null,vn=null,Fd=!1,Lc=0,D_=0,Uc=1/0,xc=null,Kr=null,zt=0,Wr=null,Js=null,or=0,jd=0,Gd=null,N_=null,Ml=0,Yd=null;function Mn(){return(Ye&2)!==0&&ke!==0?ke&-ke:j.T!==null?Jd():zu()}function O_(){if(On===0)if((ke&536870912)===0||xe){var n=Ia;Ia<<=1,(Ia&3932160)===0&&(Ia=262144),On=n}else On=536870912;return n=Cn.current,n!==null&&(n.flags|=32),On}function En(n,i,s){(n===it&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(Zs(n,0),Xr(n,ke,On,!1)),Ra(n,s),((Ye&2)===0||n!==it)&&(n===it&&((Ye&2)===0&&(Za|=s),pt===4&&Xr(n,ke,On,!1)),ki(n))}function M_(n,i,s){if((Ye&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Jn(n,i),h=l?DS(n,i):Kd(n,i,!0),d=l;do{if(h===0){Xs&&!l&&Xr(n,i,0,!1);break}else{if(s=n.current.alternate,d&&!RS(s)){h=Kd(n,i,!1),d=!1;continue}if(h===2){if(d=i,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var A=n;h=Ol;var R=A.current.memoizedState.isDehydrated;if(R&&(Zs(A,_).flags|=256),_=Kd(A,_,!1),_!==2){if(Hd&&!R){A.errorRecoveryDisabledLanes|=d,Za|=d,h=4;break e}d=vn,vn=h,d!==null&&(vn===null?vn=d:vn.push.apply(vn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Zs(n,0),Xr(n,i,0,!0);break}e:{switch(l=n,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Xr(l,i,On,!Yr);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Lc+300-un(),10<h)){if(Xr(l,i,On,!Yr),gi(l,0,!0)!==0)break e;or=i,l.timeoutHandle=uv(k_.bind(null,l,s,vn,xc,Fd,i,On,Za,$s,Yr,d,"Throttled",-0,0),h);break e}k_(l,s,vn,xc,Fd,i,On,Za,$s,Yr,d,null,-0,0)}}break}while(!0);ki(n)}function k_(n,i,s,l,h,d,_,A,R,z,G,W,B,F){if(n.timeoutHandle=-1,W=i.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ti},b_(i,d,W);var oe=(d&62914560)===d?Lc-un():(d&4194048)===d?D_-un():0;if(oe=hw(W,oe),oe!==null){or=d,n.cancelPendingCommit=oe(H_.bind(null,n,i,d,s,l,h,_,A,R,G,W,null,B,F)),Xr(n,d,_,!z);return}}H_(n,i,d,s,l,h,_,A,R)}function RS(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!In(d(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xr(n,i,s,l){i&=~qd,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var h=i;0<h;){var d=31-vt(h),_=1<<d;l[d]=-1,h&=~_}s!==0&&Ca(n,s,i)}function zc(){return(Ye&6)===0?(kl(0),!1):!0}function Qd(){if(Ce!==null){if(Xe===0)var n=Ce.return;else n=Ce,Xi=ja=null,ud(n),Fs=null,gl=0,n=Ce;for(;n!==null;)c_(n.alternate,n),n=n.return;Ce=null}}function Zs(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,QS(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),or=0,Qd(),it=n,Ce=s=Ki(n.current,null),ke=i,Xe=0,Nn=null,Yr=!1,Xs=Jn(n,i),Hd=!1,$s=On=qd=Za=Qr=pt=0,vn=Ol=null,Fd=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var h=31-vt(l),d=1<<h;i|=n[h],l&=~d}return sr=i,sc(),s}function P_(n,i){we=null,j.H=Sl,i===qs||i===mc?(i=Xp(),Xe=3):i===$f?(i=Xp(),Xe=4):Xe=i===bd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Nn=i,Ce===null&&(pt=1,Cc(n,Hn(i,n.current)))}function V_(){var n=Cn.current;return n===null?!0:(ke&4194048)===ke?Gn===null:(ke&62914560)===ke||(ke&536870912)!==0?n===Gn:!1}function L_(){var n=j.H;return j.H=Sl,n===null?Sl:n}function U_(){var n=j.A;return j.A=bS,n}function Bc(){pt=4,Yr||(ke&4194048)!==ke&&Cn.current!==null||(Xs=!0),(Qr&134217727)===0&&(Za&134217727)===0||it===null||Xr(it,ke,On,!1)}function Kd(n,i,s){var l=Ye;Ye|=2;var h=L_(),d=U_();(it!==n||ke!==i)&&(xc=null,Zs(n,i)),i=!1;var _=pt;e:do try{if(Xe!==0&&Ce!==null){var A=Ce,R=Nn;switch(Xe){case 8:Qd(),_=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(i=!0);var z=Xe;if(Xe=0,Nn=null,eo(n,A,R,z),s&&Xs){_=0;break e}break;default:z=Xe,Xe=0,Nn=null,eo(n,A,R,z)}}CS(),_=pt;break}catch(G){P_(n,G)}while(!0);return i&&n.shellSuspendCounter++,Xi=ja=null,Ye=l,j.H=h,j.A=d,Ce===null&&(it=null,ke=0,sc()),_}function CS(){for(;Ce!==null;)x_(Ce)}function DS(n,i){var s=Ye;Ye|=2;var l=L_(),h=U_();it!==n||ke!==i?(xc=null,Uc=un()+500,Zs(n,i)):Xs=Jn(n,i);e:do try{if(Xe!==0&&Ce!==null){i=Ce;var d=Nn;t:switch(Xe){case 1:Xe=0,Nn=null,eo(n,i,d,1);break;case 2:case 9:if(Kp(d)){Xe=0,Nn=null,z_(i);break}i=function(){Xe!==2&&Xe!==9||it!==n||(Xe=7),ki(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Kp(d)?(Xe=0,Nn=null,z_(i)):(Xe=0,Nn=null,eo(n,i,d,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var A=Ce;if(_?wv(_):A.stateNode.complete){Xe=0,Nn=null;var R=A.sibling;if(R!==null)Ce=R;else{var z=A.return;z!==null?(Ce=z,Hc(z)):Ce=null}break t}}Xe=0,Nn=null,eo(n,i,d,5);break;case 6:Xe=0,Nn=null,eo(n,i,d,6);break;case 8:Qd(),pt=6;break e;default:throw Error(a(462))}}NS();break}catch(G){P_(n,G)}while(!0);return Xi=ja=null,j.H=l,j.A=h,Ye=s,Ce!==null?0:(it=null,ke=0,sc(),pt)}function NS(){for(;Ce!==null&&!wf();)x_(Ce)}function x_(n){var i=l_(n.alternate,n,sr);n.memoizedProps=n.pendingProps,i===null?Hc(n):Ce=i}function z_(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=n_(s,i,i.pendingProps,i.type,void 0,ke);break;case 11:i=n_(s,i,i.pendingProps,i.type.render,i.ref,ke);break;case 5:ud(i);default:c_(s,i),i=Ce=Up(i,sr),i=l_(s,i,sr)}n.memoizedProps=n.pendingProps,i===null?Hc(n):Ce=i}function eo(n,i,s,l){Xi=ja=null,ud(i),Fs=null,gl=0;var h=i.return;try{if(_S(n,h,i,s,ke)){pt=1,Cc(n,Hn(s,n.current)),Ce=null;return}}catch(d){if(h!==null)throw Ce=h,d;pt=1,Cc(n,Hn(s,n.current)),Ce=null;return}i.flags&32768?(xe||l===1?n=!0:Xs||(ke&536870912)!==0?n=!1:(Yr=n=!0,(l===2||l===9||l===3||l===6)&&(l=Cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),B_(i,n)):Hc(i)}function Hc(n){var i=n;do{if((i.flags&32768)!==0){B_(i,Yr);return}n=i.return;var s=TS(i.alternate,i,sr);if(s!==null){Ce=s;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=n}while(i!==null);pt===0&&(pt=5)}function B_(n,i){do{var s=AS(n.alternate,n);if(s!==null){s.flags&=32767,Ce=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){Ce=n;return}Ce=n=s}while(n!==null);pt=6,Ce=null}function H_(n,i,s,l,h,d,_,A,R){n.cancelPendingCommit=null;do qc();while(zt!==0);if((Ye&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Lf,Rf(n,s,d,_,A,R),n===it&&(Ce=it=null,ke=0),Js=i,Wr=n,or=s,jd=d,Gd=h,N_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,PS(Ir,function(){return Y_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=ne.p,ne.p=2,_=Ye,Ye|=4;try{SS(n,i,s)}finally{Ye=_,ne.p=h,j.T=l}}zt=1,q_(),F_(),j_()}}function q_(){if(zt===1){zt=0;var n=Wr,i=Js,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=j.T,j.T=null;var l=ne.p;ne.p=2;var h=Ye;Ye|=4;try{A_(i,n);var d=sm,_=Cp(n.containerInfo),A=d.focusedElem,R=d.selectionRange;if(_!==A&&A&&A.ownerDocument&&Rp(A.ownerDocument.documentElement,A)){if(R!==null&&Of(A)){var z=R.start,G=R.end;if(G===void 0&&(G=z),"selectionStart"in A)A.selectionStart=z,A.selectionEnd=Math.min(G,A.value.length);else{var W=A.ownerDocument||document,B=W&&W.defaultView||window;if(B.getSelection){var F=B.getSelection(),oe=A.textContent.length,ge=Math.min(R.start,oe),nt=R.end===void 0?ge:Math.min(R.end,oe);!F.extend&&ge>nt&&(_=nt,nt=ge,ge=_);var V=Ip(A,ge),O=Ip(A,nt);if(V&&O&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var x=W.createRange();x.setStart(V.node,V.offset),F.removeAllRanges(),ge>nt?(F.addRange(x),F.extend(O.node,O.offset)):(x.setEnd(O.node,O.offset),F.addRange(x))}}}}for(W=[],F=A;F=F.parentNode;)F.nodeType===1&&W.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<W.length;A++){var Q=W[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}eh=!!am,sm=am=null}finally{Ye=h,ne.p=l,j.T=s}}n.current=i,zt=2}}function F_(){if(zt===2){zt=0;var n=Wr,i=Js,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=j.T,j.T=null;var l=ne.p;ne.p=2;var h=Ye;Ye|=4;try{y_(n,i.alternate,i)}finally{Ye=h,ne.p=l,j.T=s}}zt=3}}function j_(){if(zt===4||zt===3){zt=0,Mu();var n=Wr,i=Js,s=or,l=N_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?zt=5:(zt=0,Js=Wr=null,G_(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Kr=null),ji(s),i=i.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot($n,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,h=ne.p,ne.p=2,j.T=null;try{for(var d=n.onRecoverableError,_=0;_<l.length;_++){var A=l[_];d(A.value,{componentStack:A.stack})}}finally{j.T=i,ne.p=h}}(or&3)!==0&&qc(),ki(n),h=n.pendingLanes,(s&261930)!==0&&(h&42)!==0?n===Yd?Ml++:(Ml=0,Yd=n):Ml=0,kl(0)}}function G_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,dl(i)))}function qc(){return q_(),F_(),j_(),Y_()}function Y_(){if(zt!==5)return!1;var n=Wr,i=jd;jd=0;var s=ji(or),l=j.T,h=ne.p;try{ne.p=32>s?32:s,j.T=null,s=Gd,Gd=null;var d=Wr,_=or;if(zt=0,Js=Wr=null,or=0,(Ye&6)!==0)throw Error(a(331));var A=Ye;if(Ye|=4,R_(d.current),w_(d,d.current,_,s),Ye=A,kl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot($n,d)}catch{}return!0}finally{ne.p=h,j.T=l,G_(n,i)}}function Q_(n,i,s){i=Hn(s,i),i=wd(n.stateNode,i,2),n=qr(n,i,2),n!==null&&(Ra(n,2),ki(n))}function $e(n,i,s){if(n.tag===3)Q_(n,n,s);else for(;i!==null;){if(i.tag===3){Q_(i,n,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kr===null||!Kr.has(l))){n=Hn(s,n),s=Ky(2),l=qr(i,s,2),l!==null&&(Wy(s,l,i,n),Ra(l,2),ki(l));break}}i=i.return}}function Wd(n,i,s){var l=n.pingCache;if(l===null){l=n.pingCache=new IS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(Hd=!0,h.add(s),n=OS.bind(null,n,i,s),i.then(n,n))}function OS(n,i,s){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,it===n&&(ke&s)===s&&(pt===4||pt===3&&(ke&62914560)===ke&&300>un()-Lc?(Ye&2)===0&&Zs(n,0):qd|=s,$s===ke&&($s=0)),ki(n)}function K_(n,i){i===0&&(i=xu()),n=Ha(n,i),n!==null&&(Ra(n,i),ki(n))}function MS(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),K_(n,s)}function kS(n,i){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),K_(n,s)}function PS(n,i){return xt(n,i)}var Fc=null,to=null,Xd=!1,jc=!1,$d=!1,$r=0;function ki(n){n!==to&&n.next===null&&(to===null?Fc=to=n:to=to.next=n),jc=!0,Xd||(Xd=!0,LS())}function kl(n,i){if(!$d&&jc){$d=!0;do for(var s=!1,l=Fc;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-vt(42|n)+1)-1,d&=h&~(_&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,J_(l,d))}else d=ke,d=gi(l,l===it?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Jn(l,d)||(s=!0,J_(l,d));l=l.next}while(s);$d=!1}}function VS(){W_()}function W_(){jc=Xd=!1;var n=0;$r!==0&&YS()&&(n=$r);for(var i=un(),s=null,l=Fc;l!==null;){var h=l.next,d=X_(l,i);d===0?(l.next=null,s===null?Fc=h:s.next=h,h===null&&(to=s)):(s=l,(n!==0||(d&3)!==0)&&(jc=!0)),l=h}zt!==0&&zt!==5||kl(n),$r!==0&&($r=0)}function X_(n,i){for(var s=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-vt(d),A=1<<_,R=h[_];R===-1?((A&s)===0||(A&l)!==0)&&(h[_]=If(A,i)):R<=i&&(n.expiredLanes|=A),d&=~A}if(i=it,s=ke,s=gi(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&br(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Jn(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(l!==null&&br(l),ji(s)){case 2:case 8:s=Fo;break;case 32:s=Ir;break;case 268435456:s=ku;break;default:s=Ir}return l=$_.bind(null,n),s=xt(s,l),n.callbackPriority=i,n.callbackNode=s,i}return l!==null&&l!==null&&br(l),n.callbackPriority=2,n.callbackNode=null,2}function $_(n,i){if(zt!==0&&zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(qc()&&n.callbackNode!==s)return null;var l=ke;return l=gi(n,n===it?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(M_(n,l,i),X_(n,un()),n.callbackNode!=null&&n.callbackNode===s?$_.bind(null,n):null)}function J_(n,i){if(qc())return null;M_(n,i,!0)}function LS(){KS(function(){(Ye&6)!==0?xt(qo,VS):W_()})}function Jd(){if($r===0){var n=Bs;n===0&&(n=di,di<<=1,(di&261888)===0&&(di=256)),$r=n}return $r}function Z_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:bs(""+n)}function ev(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function US(n,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var d=Z_((h[Ft]||null).action),_=l.submitter;_&&(i=(i=_[Ft]||null)?Z_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var A=new Ii("action","action",null,l,h);n.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($r!==0){var R=_?ev(h,_):new FormData(h);_d(s,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(A.preventDefault(),R=_?ev(h,_):new FormData(h),_d(s,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Zd=0;Zd<Vf.length;Zd++){var em=Vf[Zd],xS=em.toLowerCase(),zS=em[0].toUpperCase()+em.slice(1);si(xS,"on"+zS)}si(Op,"onAnimationEnd"),si(Mp,"onAnimationIteration"),si(kp,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(tS,"onTransitionRun"),si(nS,"onTransitionStart"),si(iS,"onTransitionCancel"),si(Pp,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function tv(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var A=l[_],R=A.instance,z=A.currentTarget;if(A=A.listener,R!==d&&h.isPropagationStopped())break e;d=A,h.currentTarget=z;try{d(h)}catch(G){ac(G)}h.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(A=l[_],R=A.instance,z=A.currentTarget,A=A.listener,R!==d&&h.isPropagationStopped())break e;d=A,h.currentTarget=z;try{d(h)}catch(G){ac(G)}h.currentTarget=null,d=R}}}}function De(n,i){var s=i[Es];s===void 0&&(s=i[Es]=new Set);var l=n+"__bubble";s.has(l)||(nv(i,n,2,!1),s.add(l))}function tm(n,i,s){var l=0;i&&(l|=4),nv(s,n,l,i)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function nm(n){if(!n[Gc]){n[Gc]=!0,Yo.forEach(function(s){s!=="selectionchange"&&(BS.has(s)||tm(s,!1,n),tm(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Gc]||(i[Gc]=!0,tm("selectionchange",!1,i))}}function nv(n,i,s,l){switch(Ov(i)){case 2:var h=mw;break;case 8:h=gw;break;default:h=ym}s=h.bind(null,i,s,n),h=void 0,!ka||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function im(n,i,s,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var A=l.stateNode.containerInfo;if(A===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;A!==null;){if(_=vi(A),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue e}A=A.parentNode}}l=l.return}Mr(function(){var z=d,G=Un(s),W=[];e:{var B=Vp.get(n);if(B!==void 0){var F=Ii,oe=n;switch(n){case"keypress":if(Va(s)===0)break e;case"keydown":case"keyup":F=nc;break;case"focusin":oe="focus",F=Ua;break;case"focusout":oe="blur",F=Ua;break;case"beforeblur":case"afterblur":F=Ua;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Qu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=y;break;case Op:case Mp:case kp:F=Wu;break;case Pp:F=S;break;case"scroll":case"scrollend":F=rl;break;case"wheel":F=q;break;case"copy":case"cut":case"paste":F=Xu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Qi;break;case"toggle":case"beforetoggle":F=Se}var ge=(i&4)!==0,nt=!ge&&(n==="scroll"||n==="scrollend"),V=ge?B!==null?B+"Capture":null:B;ge=[];for(var O=z,x;O!==null;){var Q=O;if(x=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||x===null||V===null||(Q=ni(O,V),Q!=null&&ge.push(Vl(O,Q,x))),nt)break;O=O.return}0<ge.length&&(B=new F(B,oe,null,s,G),W.push({event:B,listeners:ge}))}}if((i&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",B&&s!==tl&&(oe=s.relatedTarget||s.fromElement)&&(vi(oe)||oe[yi]))break e;if((F||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,F?(oe=s.relatedTarget||s.toElement,F=z,oe=oe?vi(oe):null,oe!==null&&(nt=u(oe),ge=oe.tag,oe!==nt||ge!==5&&ge!==27&&ge!==6)&&(oe=null)):(F=null,oe=z),F!==oe)){if(ge=al,Q="onMouseLeave",V="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ge=Qi,Q="onPointerLeave",V="onPointerEnter",O="pointer"),nt=F==null?B:wn(F),x=oe==null?B:wn(oe),B=new ge(Q,O+"leave",F,s,G),B.target=nt,B.relatedTarget=x,Q=null,vi(G)===z&&(ge=new ge(V,O+"enter",oe,s,G),ge.target=x,ge.relatedTarget=nt,Q=ge),nt=Q,F&&oe)t:{for(ge=HS,V=F,O=oe,x=0,Q=V;Q;Q=ge(Q))x++;Q=0;for(var fe=O;fe;fe=ge(fe))Q++;for(;0<x-Q;)V=ge(V),x--;for(;0<Q-x;)O=ge(O),Q--;for(;x--;){if(V===O||O!==null&&V===O.alternate){ge=V;break t}V=ge(V),O=ge(O)}ge=null}else ge=null;F!==null&&iv(W,B,F,ge,!1),oe!==null&&nt!==null&&iv(W,nt,oe,ge,!0)}}e:{if(B=z?wn(z):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var Fe=Ep;else if(_p(B))if(Tp)Fe=JA;else{Fe=XA;var ce=WA}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&ws(z.elementType)&&(Fe=Ep):Fe=$A;if(Fe&&(Fe=Fe(n,z))){vp(W,Fe,s,G);break e}ce&&ce(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Jo(B,"number",B.value)}switch(ce=z?wn(z):window,n){case"focusin":(_p(ce)||ce.contentEditable==="true")&&(Ms=ce,Mf=z,cl=null);break;case"focusout":cl=Mf=Ms=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,Dp(W,s,G);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Dp(W,s,G)}var Ie;if(Ge)e:{switch(n){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Os?xa(n,s)&&(Pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Pe="onCompositionStart");Pe&&(Di&&s.locale!=="ko"&&(Os||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Os&&(Ie=il()):(bi=G,nl="value"in bi?bi.value:bi.textContent,Os=!0)),ce=Yc(z,Pe),0<ce.length&&(Pe=new Ci(Pe,n,null,s,G),W.push({event:Pe,listeners:ce}),Ie?Pe.data=Ie:(Ie=Ns(s),Ie!==null&&(Pe.data=Ie)))),(Ie=zn?GA(n,s):YA(n,s))&&(Pe=Yc(z,"onBeforeInput"),0<Pe.length&&(ce=new Ci("onBeforeInput","beforeinput",null,s,G),W.push({event:ce,listeners:Pe}),ce.data=Ie)),US(W,n,z,s,G)}tv(W,i)})}function Vl(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Yc(n,i){for(var s=i+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ni(n,s),h!=null&&l.unshift(Vl(n,h,d)),h=ni(n,i),h!=null&&l.push(Vl(n,h,d))),n.tag===3)return l;n=n.return}return[]}function HS(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function iv(n,i,s,l,h){for(var d=i._reactName,_=[];s!==null&&s!==l;){var A=s,R=A.alternate,z=A.stateNode;if(A=A.tag,R!==null&&R===l)break;A!==5&&A!==26&&A!==27||z===null||(R=z,h?(z=ni(s,d),z!=null&&_.unshift(Vl(s,z,R))):h||(z=ni(s,d),z!=null&&_.push(Vl(s,z,R)))),s=s.return}_.length!==0&&n.push({event:i,listeners:_})}var qS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function rv(n){return(typeof n=="string"?n:""+n).replace(qS,`
`).replace(FS,"")}function av(n,i){return i=rv(i),rv(n)===i}function tt(n,i,s,l,h,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||gn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&gn(n,""+l);break;case"className":bn(n,"class",l);break;case"tabIndex":bn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bn(n,s,l);break;case"style":el(n,l,d);break;case"data":if(i!=="object"){bn(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=bs(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&tt(n,i,"name",h.name,h,null),tt(n,i,"formEncType",h.formEncType,h,null),tt(n,i,"formMethod",h.formMethod,h,null),tt(n,i,"formTarget",h.formTarget,h,null)):(tt(n,i,"encType",h.encType,h,null),tt(n,i,"method",h.method,h,null),tt(n,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=bs(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=ti);break;case"onScroll":l!=null&&De("scroll",n);break;case"onScrollEnd":l!=null&&De("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=bs(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":De("beforetoggle",n),De("toggle",n),As(n,"popover",l);break;case"xlinkActuate":Ct(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":As(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yu.get(s)||s,As(n,s,l))}}function rm(n,i,s,l,h,d){switch(s){case"style":el(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof l=="string"?gn(n,l):(typeof l=="number"||typeof l=="bigint")&&gn(n,""+l);break;case"onScroll":l!=null&&De("scroll",n);break;case"onScrollEnd":l!=null&&De("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),d=n[Ft]||null,d=d!=null?d[s]:null,typeof d=="function"&&n.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,l,h);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):As(n,s,l)}}}function Zt(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",n),De("load",n);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(n,i,d,_,s,null)}}h&&tt(n,i,"srcSet",s.srcSet,s,null),l&&tt(n,i,"src",s.src,s,null);return;case"input":De("invalid",n);var A=d=_=h=null,R=null,z=null;for(l in s)if(s.hasOwnProperty(l)){var G=s[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":R=G;break;case"defaultChecked":z=G;break;case"value":d=G;break;case"defaultValue":A=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:tt(n,i,l,G,s,null)}}Fu(n,d,A,R,z,_,h,!1);return;case"select":De("invalid",n),l=_=d=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":d=A;break;case"defaultValue":_=A;break;case"multiple":l=A;default:tt(n,i,h,A,s,null)}i=d,s=_,n.multiple=!!l,i!=null?Cr(n,!!l,i,!1):s!=null&&Cr(n,!!l,s,!0);return;case"textarea":De("invalid",n),d=h=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(A=s[_],A!=null))switch(_){case"value":l=A;break;case"defaultValue":h=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:tt(n,i,_,A,s,null)}Dr(n,l,h,d);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(l=s[R],l!=null))switch(R){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(n,i,R,l,s,null)}return;case"dialog":De("beforetoggle",n),De("toggle",n),De("cancel",n),De("close",n);break;case"iframe":case"object":De("load",n);break;case"video":case"audio":for(l=0;l<Pl.length;l++)De(Pl[l],n);break;case"image":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"embed":case"source":case"link":De("error",n),De("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(n,i,z,l,s,null)}return;default:if(ws(i)){for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!==void 0&&rm(n,i,G,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&tt(n,i,A,l,s,null))}function jS(n,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,A=null,R=null,z=null,G=null;for(F in s){var W=s[F];if(s.hasOwnProperty(F)&&W!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=W;default:l.hasOwnProperty(F)||tt(n,i,F,null,l,W)}}for(var B in l){var F=l[B];if(W=s[B],l.hasOwnProperty(B)&&(F!=null||W!=null))switch(B){case"type":d=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":_=F;break;case"defaultValue":A=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,i));break;default:F!==W&&tt(n,i,B,F,l,W)}}Ss(n,_,A,R,z,G,d,h);return;case"select":F=_=A=B=null;for(d in s)if(R=s[d],s.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":F=R;default:l.hasOwnProperty(d)||tt(n,i,d,null,l,R)}for(h in l)if(d=l[h],R=s[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":B=d;break;case"defaultValue":A=d;break;case"multiple":_=d;default:d!==R&&tt(n,i,h,d,l,R)}i=A,s=_,l=F,B!=null?Cr(n,!!s,B,!1):!!l!=!!s&&(i!=null?Cr(n,!!s,i,!0):Cr(n,!!s,s?[]:"",!1));return;case"textarea":F=B=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(n,i,A,null,l,h)}for(_ in l)if(h=l[_],d=s[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":B=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&tt(n,i,_,h,l,d)}ju(n,B,F);return;case"option":for(var oe in s)if(B=s[oe],s.hasOwnProperty(oe)&&B!=null&&!l.hasOwnProperty(oe))switch(oe){case"selected":n.selected=!1;break;default:tt(n,i,oe,null,l,B)}for(R in l)if(B=l[R],F=s[R],l.hasOwnProperty(R)&&B!==F&&(B!=null||F!=null))switch(R){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:tt(n,i,R,B,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in s)B=s[ge],s.hasOwnProperty(ge)&&B!=null&&!l.hasOwnProperty(ge)&&tt(n,i,ge,null,l,B);for(z in l)if(B=l[z],F=s[z],l.hasOwnProperty(z)&&B!==F&&(B!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,i));break;default:tt(n,i,z,B,l,F)}return;default:if(ws(i)){for(var nt in s)B=s[nt],s.hasOwnProperty(nt)&&B!==void 0&&!l.hasOwnProperty(nt)&&rm(n,i,nt,void 0,l,B);for(G in l)B=l[G],F=s[G],!l.hasOwnProperty(G)||B===F||B===void 0&&F===void 0||rm(n,i,G,B,l,F);return}}for(var V in s)B=s[V],s.hasOwnProperty(V)&&B!=null&&!l.hasOwnProperty(V)&&tt(n,i,V,null,l,B);for(W in l)B=l[W],F=s[W],!l.hasOwnProperty(W)||B===F||B==null&&F==null||tt(n,i,W,B,l,F)}function sv(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],d=h.transferSize,_=h.initiatorType,A=h.duration;if(d&&A&&sv(_)){for(_=0,A=h.responseEnd,l+=1;l<s.length;l++){var R=s[l],z=R.startTime;if(z>A)break;var G=R.transferSize,W=R.initiatorType;G&&sv(W)&&(R=R.responseEnd,_+=G*(R<A?1:(A-z)/(R-z)))}if(--l,i+=8*(d+_)/(h.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var am=null,sm=null;function Qc(n){return n.nodeType===9?n:n.ownerDocument}function ov(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function om(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lm=null;function YS(){var n=window.event;return n&&n.type==="popstate"?n===lm?!1:(lm=n,!0):(lm=null,!1)}var uv=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(n){return cv.resolve(null).then(n).catch(WS)}:uv;function WS(n){setTimeout(function(){throw n})}function Jr(n){return n==="head"}function hv(n,i){var s=i,l=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(h),ao(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ll(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,Ll(s);for(var d=s.firstChild;d;){var _=d.nextSibling,A=d.nodeName;d[_i]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=_}}else s==="body"&&Ll(n.ownerDocument.body);s=h}while(s);ao(i)}function fv(n,i){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function um(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":um(s),Ts(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function XS(n,i,s,l){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[_i])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Yn(n.nextSibling),n===null)break}return null}function $S(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Yn(n.nextSibling),n===null))return null;return n}function dv(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Yn(n.nextSibling),n===null))return null;return n}function cm(n){return n.data==="$?"||n.data==="$~"}function hm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function JS(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Yn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var fm=null;function mv(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return Yn(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function gv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function pv(n,i,s){switch(i=Qc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ll(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ts(n)}var Qn=new Map,yv=new Set;function Kc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var lr=ne.d;ne.d={f:ZS,r:ew,D:tw,C:nw,L:iw,m:rw,X:sw,S:aw,M:ow};function ZS(){var n=lr.f(),i=zc();return n||i}function ew(n){var i=Ln(n);i!==null&&i.tag===5&&i.type==="form"?Py(i):lr.r(n)}var no=typeof document>"u"?null:document;function _v(n,i,s){var l=no;if(l&&typeof i=="string"&&i){var h=mn(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),yv.has(h)||(yv.add(h),n={rel:n,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Zt(i,"link",n),Rt(i),l.head.appendChild(i)))}}function tw(n){lr.D(n),_v("dns-prefetch",n,null)}function nw(n,i){lr.C(n,i),_v("preconnect",n,i)}function iw(n,i,s){lr.L(n,i,s);var l=no;if(l&&n&&i){var h='link[rel="preload"][as="'+mn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+mn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+mn(s.imageSizes)+'"]')):h+='[href="'+mn(n)+'"]';var d=h;switch(i){case"style":d=io(n);break;case"script":d=ro(n)}Qn.has(d)||(n=T({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Qn.set(d,n),l.querySelector(h)!==null||i==="style"&&l.querySelector(Ul(d))||i==="script"&&l.querySelector(xl(d))||(i=l.createElement("link"),Zt(i,"link",n),Rt(i),l.head.appendChild(i)))}}function rw(n,i){lr.m(n,i);var s=no;if(s&&n){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ro(n)}if(!Qn.has(d)&&(n=T({rel:"modulepreload",href:n},i),Qn.set(d,n),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(xl(d)))return}l=s.createElement("link"),Zt(l,"link",n),Rt(l),s.head.appendChild(l)}}}function aw(n,i,s){lr.S(n,i,s);var l=no;if(l&&n){var h=Ei(l).hoistableStyles,d=io(n);i=i||"default";var _=h.get(d);if(!_){var A={loading:0,preload:null};if(_=l.querySelector(Ul(d)))A.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Qn.get(d))&&dm(n,s);var R=_=l.createElement("link");Rt(R),Zt(R,"link",n),R._p=new Promise(function(z,G){R.onload=z,R.onerror=G}),R.addEventListener("load",function(){A.loading|=1}),R.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:A},h.set(d,_)}}}function sw(n,i){lr.X(n,i);var s=no;if(s&&n){var l=Ei(s).hoistableScripts,h=ro(n),d=l.get(h);d||(d=s.querySelector(xl(h)),d||(n=T({src:n,async:!0},i),(i=Qn.get(h))&&mm(n,i),d=s.createElement("script"),Rt(d),Zt(d,"link",n),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ow(n,i){lr.M(n,i);var s=no;if(s&&n){var l=Ei(s).hoistableScripts,h=ro(n),d=l.get(h);d||(d=s.querySelector(xl(h)),d||(n=T({src:n,async:!0,type:"module"},i),(i=Qn.get(h))&&mm(n,i),d=s.createElement("script"),Rt(d),Zt(d,"link",n),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function vv(n,i,s,l){var h=(h=be.current)?Kc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=io(s.href),s=Ei(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=io(s.href);var d=Ei(h).hoistableStyles,_=d.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=h.querySelector(Ul(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Qn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Qn.set(n,s),d||lw(h,n,s,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ro(s),s=Ei(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function io(n){return'href="'+mn(n)+'"'}function Ul(n){return'link[rel="stylesheet"]['+n+"]"}function Ev(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function lw(n,i,s,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Zt(i,"link",s),Rt(i),n.head.appendChild(i))}function ro(n){return'[src="'+mn(n)+'"]'}function xl(n){return"script[async]"+n}function Tv(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+mn(s.href)+'"]');if(l)return i.instance=l,Rt(l),l;var h=T({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Rt(l),Zt(l,"style",h),Wc(l,s.precedence,n),i.instance=l;case"stylesheet":h=io(s.href);var d=n.querySelector(Ul(h));if(d)return i.state.loading|=4,i.instance=d,Rt(d),d;l=Ev(s),(h=Qn.get(h))&&dm(l,h),d=(n.ownerDocument||n).createElement("link"),Rt(d);var _=d;return _._p=new Promise(function(A,R){_.onload=A,_.onerror=R}),Zt(d,"link",l),i.state.loading|=4,Wc(d,s.precedence,n),i.instance=d;case"script":return d=ro(s.src),(h=n.querySelector(xl(d)))?(i.instance=h,Rt(h),h):(l=s,(h=Qn.get(d))&&(l=T({},s),mm(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),Rt(h),Zt(h,"link",l),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Wc(l,s.precedence,n));return i.instance}function Wc(n,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var A=l[_];if(A.dataset.precedence===i)d=A;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function dm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function mm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Xc=null;function Av(n,i,s){if(Xc===null){var l=new Map,h=Xc=new Map;h.set(s,l)}else h=Xc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var d=s[h];if(!(d[_i]||d[It]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=n+_;var A=l.get(_);A?A.push(d):l.set(_,[d])}}return l}function Sv(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function uw(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function wv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function cw(n,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=io(l.href),d=i.querySelector(Ul(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=$c.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=d,Rt(d);return}d=i.ownerDocument||i,l=Ev(l),(h=Qn.get(h))&&dm(l,h),d=d.createElement("link"),Rt(d);var _=d;_._p=new Promise(function(A,R){_.onload=A,_.onerror=R}),Zt(d,"link",l),s.instance=d}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=$c.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var gm=0;function hw(n,i){return n.stylesheets&&n.count===0&&Zc(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&Zc(n,n.stylesheets),n.unsuspend){var d=n.unsuspend;n.unsuspend=null,d()}},6e4+i);0<n.imgBytes&&gm===0&&(gm=62500*GS());var h=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Zc(n,n.stylesheets),n.unsuspend)){var d=n.unsuspend;n.unsuspend=null,d()}},(n.imgBytes>gm?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function $c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Jc=null;function Zc(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Jc=new Map,i.forEach(fw,n),Jc=null,$c.call(n))}function fw(n,i){if(!(i.state.loading&4)){var s=Jc.get(n);if(s)var l=s.get(null);else{s=new Map,Jc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,h),s.set(_,h),this.count++,l=$c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var zl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function dw(n,i,s,l,h,d,_,A,R){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function bv(n,i,s,l,h,d,_,A,R,z,G,W){return n=new dw(n,i,s,_,R,z,G,W,A),i=1,d===!0&&(i|=24),d=Rn(3,null,null,i),n.current=d,d.stateNode=n,i=Kf(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Jf(d),n}function Iv(n){return n?(n=Vs,n):Vs}function Rv(n,i,s,l,h,d){h=Iv(h),l.context===null?l.context=h:l.pendingContext=h,l=Hr(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=qr(n,l,i),s!==null&&(En(s,n,i),yl(s,n,i))}function Cv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function pm(n,i){Cv(n,i),(n=n.alternate)&&Cv(n,i)}function Dv(n){if(n.tag===13||n.tag===31){var i=Ha(n,67108864);i!==null&&En(i,n,67108864),pm(n,67108864)}}function Nv(n){if(n.tag===13||n.tag===31){var i=Mn();i=Da(i);var s=Ha(n,i);s!==null&&En(s,n,i),pm(n,i)}}var eh=!0;function mw(n,i,s,l){var h=j.T;j.T=null;var d=ne.p;try{ne.p=2,ym(n,i,s,l)}finally{ne.p=d,j.T=h}}function gw(n,i,s,l){var h=j.T;j.T=null;var d=ne.p;try{ne.p=8,ym(n,i,s,l)}finally{ne.p=d,j.T=h}}function ym(n,i,s,l){if(eh){var h=_m(l);if(h===null)im(n,i,l,th,s),Mv(n,l);else if(yw(h,n,i,s,l))l.stopPropagation();else if(Mv(n,l),i&4&&-1<pw.indexOf(n)){for(;h!==null;){var d=Ln(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=mi(d.pendingLanes);if(_!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var R=1<<31-vt(_);A.entanglements[1]|=R,_&=~R}ki(d),(Ye&6)===0&&(Uc=un()+500,kl(0))}}break;case 31:case 13:A=Ha(d,2),A!==null&&En(A,d,2),zc(),pm(d,2)}if(d=_m(l),d===null&&im(n,i,l,th,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else im(n,i,l,null,s)}}function _m(n){return n=Un(n),vm(n)}var th=null;function vm(n){if(th=null,n=vi(n),n!==null){var i=u(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=f(i),n!==null)return n;n=null}else if(s===31){if(n=p(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return th=n,null}function Ov(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ba()){case qo:return 2;case Fo:return 8;case Ir:case bf:return 32;case ku:return 268435456;default:return 32}default:return 32}}var Em=!1,Zr=null,ea=null,ta=null,Bl=new Map,Hl=new Map,na=[],pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(n,i){switch(n){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":Bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(i.pointerId)}}function ql(n,i,s,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ln(i),i!==null&&Dv(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function yw(n,i,s,l,h){switch(i){case"focusin":return Zr=ql(Zr,n,i,s,l,h),!0;case"dragenter":return ea=ql(ea,n,i,s,l,h),!0;case"mouseover":return ta=ql(ta,n,i,s,l,h),!0;case"pointerover":var d=h.pointerId;return Bl.set(d,ql(Bl.get(d)||null,n,i,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Hl.set(d,ql(Hl.get(d)||null,n,i,s,l,h)),!0}return!1}function kv(n){var i=vi(n.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){n.blockedOn=i,Zn(n.priority,function(){Nv(s)});return}}else if(i===31){if(i=p(s),i!==null){n.blockedOn=i,Zn(n.priority,function(){Nv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=_m(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);tl=l,s.target.dispatchEvent(l),tl=null}else return i=Ln(s),i!==null&&Dv(i),n.blockedOn=s,!1;i.shift()}return!0}function Pv(n,i,s){nh(n)&&s.delete(i)}function _w(){Em=!1,Zr!==null&&nh(Zr)&&(Zr=null),ea!==null&&nh(ea)&&(ea=null),ta!==null&&nh(ta)&&(ta=null),Bl.forEach(Pv),Hl.forEach(Pv)}function ih(n,i){n.blockedOn===i&&(n.blockedOn=null,Em||(Em=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_w)))}var rh=null;function Vv(n){rh!==n&&(rh=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rh===n&&(rh=null);for(var i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],h=n[i+2];if(typeof l!="function"){if(vm(l||s)===null)continue;break}var d=Ln(s);d!==null&&(n.splice(i,3),i-=3,_d(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function ao(n){function i(R){return ih(R,n)}Zr!==null&&ih(Zr,n),ea!==null&&ih(ea,n),ta!==null&&ih(ta,n),Bl.forEach(i),Hl.forEach(i);for(var s=0;s<na.length;s++){var l=na[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<na.length&&(s=na[0],s.blockedOn===null);)kv(s),s.blockedOn===null&&na.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],_=h[Ft]||null;if(typeof d=="function")_||Vv(s);else if(_){var A=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Ft]||null)A=_.formAction;else if(vm(h)!==null)continue}else A=_.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Vv(s)}}}function Lv(){function n(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Tm(n){this._internalRoot=n}ah.prototype.render=Tm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Mn();Rv(s,l,n,i,null,null)},ah.prototype.unmount=Tm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Rv(n.current,2,null,n,null,null),zc(),i[yi]=null}};function ah(n){this._internalRoot=n}ah.prototype.unstable_scheduleHydration=function(n){if(n){var i=zu();n={blockedOn:null,target:n,priority:i};for(var s=0;s<na.length&&i!==0&&i<na[s].priority;s++);na.splice(s,0,n),s===0&&kv(n)}};var Uv=e.version;if(Uv!=="19.2.4")throw Error(a(527,Uv,"19.2.4"));ne.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=g(i),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var vw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sh.isDisabled&&sh.supportsFiber)try{$n=sh.inject(vw),Kt=sh}catch{}}return jl.createRoot=function(n,i){if(!o(n))throw Error(a(299));var s=!1,l="",h=jy,d=Gy,_=Yy;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=bv(n,1,!1,null,null,s,l,null,h,d,_,Lv),n[yi]=i.current,nm(n),new Tm(i)},jl.hydrateRoot=function(n,i,s){if(!o(n))throw Error(a(299));var l=!1,h="",d=jy,_=Gy,A=Yy,R=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(R=s.formState)),i=bv(n,1,!0,i,s??null,l,h,R,d,_,A,Lv),i.context=Iv(null),s=i.current,l=Mn(),l=Da(l),h=Hr(l),h.callback=null,qr(s,h,l),s=l,i.current.lanes=s,Ra(i,s),ki(i),n[yi]=i.current,nm(n),new ah(i)},jl.version="19.2.4",jl}var Qv;function Dw(){if(Qv)return wm.exports;Qv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wm.exports=Cw(),wm.exports}var Nw=Dw();const nP=NT(Nw),Ow=()=>{};var Kv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=function(r){const e=[];let t=0;for(let a=0;a<r.length;a++){let o=r.charCodeAt(a);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++a)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Mw=function(r){const e=[];let t=0,a=0;for(;t<r.length;){const o=r[t++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],f=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],f=r[t++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},MT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,v=u>>2,T=(u&3)<<4|p>>4;let w=(p&15)<<2|g>>6,P=g&63;m||(P=64,f||(w=64)),a.push(t[v],t[T],t[w],t[P])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(OT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Mw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||T==null)throw new kw;const w=u<<2|p>>4;if(a.push(w),g!==64){const P=p<<4&240|g>>2;if(a.push(P),T!==64){const H=g<<6&192|T;a.push(H)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pw=function(r){const e=OT(r);return MT.encodeByteArray(e,!0)},wh=function(r){return Pw(r).replace(/\./g,"")},kT=function(r){try{return MT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lw=()=>Vw().__FIREBASE_DEFAULTS__,Uw=()=>{if(typeof process>"u"||typeof Kv>"u")return;const r=Kv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},xw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&kT(r[1]);return e&&JSON.parse(e)},Qh=()=>{try{return Ow()||Lw()||Uw()||xw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},PT=r=>{var e,t;return(t=(e=Qh())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},zw=r=>{const e=PT(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},VT=()=>{var r;return(r=Qh())==null?void 0:r.config},LT=r=>{var e;return(e=Qh())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function UT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Hw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[wh(JSON.stringify(t)),wh(JSON.stringify(f)),""].join(".")}const eu={};function qw(){const r={prod:[],emulator:[]};for(const e of Object.keys(eu))eu[e]?r.emulator.push(e):r.prod.push(e);return r}function Fw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Wv=!1;function xT(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||eu[r]===e||eu[r]||Wv)return;eu[r]=e;function t(w){return`__firebase__banner__${w}`}const a="__firebase__banner",u=qw().prod.length>0;function f(){const w=document.getElementById(a);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Wv=!0,f()},w}function v(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=Fw(a),P=t("text"),H=document.getElementById(P)||document.createElement("span"),X=t("learnmore"),Y=document.getElementById(X)||document.createElement("a"),le=t("preprendIcon"),re=document.getElementById(le)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Z=w.element;p(Z),v(Y,X);const me=g();m(re,le),Z.append(re,H,Y,me),document.body.appendChild(Z)}u?(H.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function Gw(){var e;const r=(e=Qh())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const r=ln();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Xw(){return!Gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $w(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((r,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(a),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="FirebaseError";class Ar extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=Zw,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Au.prototype.create)}}class Au{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?eb(u,a):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new Ar(o,p,a)}}function eb(r,e){return r.replace(tb,(t,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const tb=/\{\$([^}]+)}/g;function nb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ss(r,e){if(r===e)return!0;const t=Object.keys(r),a=Object.keys(e);for(const o of t){if(!a.includes(o))return!1;const u=r[o],f=e[o];if(Xv(u)&&Xv(f)){if(!ss(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!t.includes(o))return!1;return!0}function Xv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(r){const e=[];for(const[t,a]of Object.entries(r))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Ql(r){const e={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Kl(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function ib(r,e){const t=new rb(r,e);return t.subscribe.bind(t)}class rb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let o;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");ab(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:a},o.next===void 0&&(o.next=Cm),o.error===void 0&&(o.error=Cm),o.complete===void 0&&(o.complete=Cm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ab(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Cm(){}/**
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
 */function ye(r){return r&&r._delegate?r._delegate:r}class os{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class sb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new Bw;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lb(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&f.resolve(o)}return o}onInit(e,t){const a=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const o of a)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ob(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ob(r){return r===es?void 0:r}function lb(r){return r.instantiationMode==="EAGER"}/**
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
 */class ub{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ve||(Ve={}));const cb={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},hb=Ve.INFO,fb={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},db=(r,e,...t)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),o=fb[e];if(o)console[o](`[${a}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _g{constructor(e){this.name=e,this._logLevel=hb,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const mb=(r,e)=>e.some(t=>r instanceof t);let $v,Jv;function gb(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zT=new WeakMap,Gm=new WeakMap,BT=new WeakMap,Dm=new WeakMap,vg=new WeakMap;function yb(r){const e=new Promise((t,a)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{t(oa(r.result)),o()},f=()=>{a(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&zT.set(t,r)}).catch(()=>{}),vg.set(e,r),e}function _b(r){if(Gm.has(r))return;const e=new Promise((t,a)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{a(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Gm.set(r,e)}let Ym={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Gm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||BT.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oa(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function vb(r){Ym=r(Ym)}function Eb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=r.call(Nm(this),e,...t);return BT.set(a,e.sort?e.sort():[e]),oa(a)}:pb().includes(r)?function(...e){return r.apply(Nm(this),e),oa(zT.get(this))}:function(...e){return oa(r.apply(Nm(this),e))}}function Tb(r){return typeof r=="function"?Eb(r):(r instanceof IDBTransaction&&_b(r),mb(r,gb())?new Proxy(r,Ym):r)}function oa(r){if(r instanceof IDBRequest)return yb(r);if(Dm.has(r))return Dm.get(r);const e=Tb(r);return e!==r&&(Dm.set(r,e),vg.set(e,r)),e}const Nm=r=>vg.get(r);function Ab(r,e,{blocked:t,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),p=oa(f);return a&&f.addEventListener("upgradeneeded",m=>{a(oa(f.result),m.oldVersion,m.newVersion,oa(f.transaction),m)}),t&&f.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const Sb=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],Om=new Map;function Zv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Om.get(e))return Om.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,o=wb.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(o||Sb.includes(t)))return;const u=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Om.set(e,u),u}vb(r=>({...r,get:(e,t,a)=>Zv(e,t)||r.get(e,t,a),has:(e,t)=>!!Zv(e,t)||r.has(e,t)}));/**
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
 */class bb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ib(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function Ib(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qm="@firebase/app",eE="0.14.8";/**
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
 */const yr=new _g("@firebase/app"),Rb="@firebase/app-compat",Cb="@firebase/analytics-compat",Db="@firebase/analytics",Nb="@firebase/app-check-compat",Ob="@firebase/app-check",Mb="@firebase/auth",kb="@firebase/auth-compat",Pb="@firebase/database",Vb="@firebase/data-connect",Lb="@firebase/database-compat",Ub="@firebase/functions",xb="@firebase/functions-compat",zb="@firebase/installations",Bb="@firebase/installations-compat",Hb="@firebase/messaging",qb="@firebase/messaging-compat",Fb="@firebase/performance",jb="@firebase/performance-compat",Gb="@firebase/remote-config",Yb="@firebase/remote-config-compat",Qb="@firebase/storage",Kb="@firebase/storage-compat",Wb="@firebase/firestore",Xb="@firebase/ai",$b="@firebase/firestore-compat",Jb="firebase",Zb="12.9.0";/**
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
 */const Km="[DEFAULT]",eI={[Qm]:"fire-core",[Rb]:"fire-core-compat",[Db]:"fire-analytics",[Cb]:"fire-analytics-compat",[Ob]:"fire-app-check",[Nb]:"fire-app-check-compat",[Mb]:"fire-auth",[kb]:"fire-auth-compat",[Pb]:"fire-rtdb",[Vb]:"fire-data-connect",[Lb]:"fire-rtdb-compat",[Ub]:"fire-fn",[xb]:"fire-fn-compat",[zb]:"fire-iid",[Bb]:"fire-iid-compat",[Hb]:"fire-fcm",[qb]:"fire-fcm-compat",[Fb]:"fire-perf",[jb]:"fire-perf-compat",[Gb]:"fire-rc",[Yb]:"fire-rc-compat",[Qb]:"fire-gcs",[Kb]:"fire-gcs-compat",[Wb]:"fire-fst",[$b]:"fire-fst-compat",[Xb]:"fire-vertex","fire-js":"fire-js",[Jb]:"fire-js-all"};/**
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
 */const bh=new Map,tI=new Map,Wm=new Map;function tE(r,e){try{r.container.addComponent(e)}catch(t){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function To(r){const e=r.name;if(Wm.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Wm.set(e,r);for(const t of bh.values())tE(t,r);for(const t of tI.values())tE(t,r);return!0}function Eg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},la=new Au("app","Firebase",nI);/**
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
 */class iI{constructor(e,t,a){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw la.create("app-deleted",{appName:this._name})}}/**
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
 */const No=Zb;function rI(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const a={name:Km,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw la.create("bad-app-name",{appName:String(o)});if(t||(t=VT()),!t)throw la.create("no-options");const u=bh.get(o);if(u){if(ss(t,u.options)&&ss(a,u.config))return u;throw la.create("duplicate-app",{appName:o})}const f=new ub(o);for(const m of Wm.values())f.addComponent(m);const p=new iI(t,a,f);return bh.set(o,p),p}function HT(r=Km){const e=bh.get(r);if(!e&&r===Km&&VT())return rI();if(!e)throw la.create("no-app",{appName:r});return e}function ua(r,e,t){let a=eI[r]??r;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${e}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(f.join(" "));return}To(new os(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",sI=1,uu="firebase-heartbeat-store";let Mm=null;function qT(){return Mm||(Mm=Ab(aI,sI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(uu)}catch(t){console.warn(t)}}}}).catch(r=>{throw la.create("idb-open",{originalErrorMessage:r.message})})),Mm}async function oI(r){try{const t=(await qT()).transaction(uu),a=await t.objectStore(uu).get(FT(r));return await t.done,a}catch(e){if(e instanceof Ar)yr.warn(e.message);else{const t=la.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(t.message)}}}async function nE(r,e){try{const a=(await qT()).transaction(uu,"readwrite");await a.objectStore(uu).put(e,FT(r)),await a.done}catch(t){if(t instanceof Ar)yr.warn(t.message);else{const a=la.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yr.warn(a.message)}}}function FT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const lI=1024,uI=30;class cI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fI(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=iE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>uI){const f=dI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){yr.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iE(),{heartbeatsToSend:a,unsentEntries:o}=hI(this._heartbeatsCache.heartbeats),u=wh(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return yr.warn(t),""}}}function iE(){return new Date().toISOString().substring(0,10)}function hI(r,e=lI){const t=[];let a=r.slice();for(const o of r){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),rE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),rE(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class fI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return nE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return nE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function rE(r){return wh(JSON.stringify({version:2,heartbeats:r})).length}function dI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let a=1;a<r.length;a++)r[a].date<t&&(t=r[a].date,e=a);return e}/**
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
 */function mI(r){To(new os("platform-logger",e=>new bb(e),"PRIVATE")),To(new os("heartbeat",e=>new cI(e),"PRIVATE")),ua(Qm,eE,r),ua(Qm,eE,"esm2020"),ua("fire-js","")}mI("");var gI="firebase",pI="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ua(gI,pI,"app");var aE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ca,jT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,b){function C(){}C.prototype=b.prototype,D.F=b.prototype,D.prototype=new C,D.prototype.constructor=D,D.D=function(k,N,L){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return b.prototype[N].apply(k,I)}}function t(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(a,t),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,b,C){C||(C=0);const k=Array(16);if(typeof b=="string")for(var N=0;N<16;++N)k[N]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(N=0;N<16;++N)k[N]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=D.g[0],C=D.g[1],N=D.g[2];let L=D.g[3],I;I=b+(L^C&(N^L))+k[0]+3614090360&4294967295,b=C+(I<<7&4294967295|I>>>25),I=L+(N^b&(C^N))+k[1]+3905402710&4294967295,L=b+(I<<12&4294967295|I>>>20),I=N+(C^L&(b^C))+k[2]+606105819&4294967295,N=L+(I<<17&4294967295|I>>>15),I=C+(b^N&(L^b))+k[3]+3250441966&4294967295,C=N+(I<<22&4294967295|I>>>10),I=b+(L^C&(N^L))+k[4]+4118548399&4294967295,b=C+(I<<7&4294967295|I>>>25),I=L+(N^b&(C^N))+k[5]+1200080426&4294967295,L=b+(I<<12&4294967295|I>>>20),I=N+(C^L&(b^C))+k[6]+2821735955&4294967295,N=L+(I<<17&4294967295|I>>>15),I=C+(b^N&(L^b))+k[7]+4249261313&4294967295,C=N+(I<<22&4294967295|I>>>10),I=b+(L^C&(N^L))+k[8]+1770035416&4294967295,b=C+(I<<7&4294967295|I>>>25),I=L+(N^b&(C^N))+k[9]+2336552879&4294967295,L=b+(I<<12&4294967295|I>>>20),I=N+(C^L&(b^C))+k[10]+4294925233&4294967295,N=L+(I<<17&4294967295|I>>>15),I=C+(b^N&(L^b))+k[11]+2304563134&4294967295,C=N+(I<<22&4294967295|I>>>10),I=b+(L^C&(N^L))+k[12]+1804603682&4294967295,b=C+(I<<7&4294967295|I>>>25),I=L+(N^b&(C^N))+k[13]+4254626195&4294967295,L=b+(I<<12&4294967295|I>>>20),I=N+(C^L&(b^C))+k[14]+2792965006&4294967295,N=L+(I<<17&4294967295|I>>>15),I=C+(b^N&(L^b))+k[15]+1236535329&4294967295,C=N+(I<<22&4294967295|I>>>10),I=b+(N^L&(C^N))+k[1]+4129170786&4294967295,b=C+(I<<5&4294967295|I>>>27),I=L+(C^N&(b^C))+k[6]+3225465664&4294967295,L=b+(I<<9&4294967295|I>>>23),I=N+(b^C&(L^b))+k[11]+643717713&4294967295,N=L+(I<<14&4294967295|I>>>18),I=C+(L^b&(N^L))+k[0]+3921069994&4294967295,C=N+(I<<20&4294967295|I>>>12),I=b+(N^L&(C^N))+k[5]+3593408605&4294967295,b=C+(I<<5&4294967295|I>>>27),I=L+(C^N&(b^C))+k[10]+38016083&4294967295,L=b+(I<<9&4294967295|I>>>23),I=N+(b^C&(L^b))+k[15]+3634488961&4294967295,N=L+(I<<14&4294967295|I>>>18),I=C+(L^b&(N^L))+k[4]+3889429448&4294967295,C=N+(I<<20&4294967295|I>>>12),I=b+(N^L&(C^N))+k[9]+568446438&4294967295,b=C+(I<<5&4294967295|I>>>27),I=L+(C^N&(b^C))+k[14]+3275163606&4294967295,L=b+(I<<9&4294967295|I>>>23),I=N+(b^C&(L^b))+k[3]+4107603335&4294967295,N=L+(I<<14&4294967295|I>>>18),I=C+(L^b&(N^L))+k[8]+1163531501&4294967295,C=N+(I<<20&4294967295|I>>>12),I=b+(N^L&(C^N))+k[13]+2850285829&4294967295,b=C+(I<<5&4294967295|I>>>27),I=L+(C^N&(b^C))+k[2]+4243563512&4294967295,L=b+(I<<9&4294967295|I>>>23),I=N+(b^C&(L^b))+k[7]+1735328473&4294967295,N=L+(I<<14&4294967295|I>>>18),I=C+(L^b&(N^L))+k[12]+2368359562&4294967295,C=N+(I<<20&4294967295|I>>>12),I=b+(C^N^L)+k[5]+4294588738&4294967295,b=C+(I<<4&4294967295|I>>>28),I=L+(b^C^N)+k[8]+2272392833&4294967295,L=b+(I<<11&4294967295|I>>>21),I=N+(L^b^C)+k[11]+1839030562&4294967295,N=L+(I<<16&4294967295|I>>>16),I=C+(N^L^b)+k[14]+4259657740&4294967295,C=N+(I<<23&4294967295|I>>>9),I=b+(C^N^L)+k[1]+2763975236&4294967295,b=C+(I<<4&4294967295|I>>>28),I=L+(b^C^N)+k[4]+1272893353&4294967295,L=b+(I<<11&4294967295|I>>>21),I=N+(L^b^C)+k[7]+4139469664&4294967295,N=L+(I<<16&4294967295|I>>>16),I=C+(N^L^b)+k[10]+3200236656&4294967295,C=N+(I<<23&4294967295|I>>>9),I=b+(C^N^L)+k[13]+681279174&4294967295,b=C+(I<<4&4294967295|I>>>28),I=L+(b^C^N)+k[0]+3936430074&4294967295,L=b+(I<<11&4294967295|I>>>21),I=N+(L^b^C)+k[3]+3572445317&4294967295,N=L+(I<<16&4294967295|I>>>16),I=C+(N^L^b)+k[6]+76029189&4294967295,C=N+(I<<23&4294967295|I>>>9),I=b+(C^N^L)+k[9]+3654602809&4294967295,b=C+(I<<4&4294967295|I>>>28),I=L+(b^C^N)+k[12]+3873151461&4294967295,L=b+(I<<11&4294967295|I>>>21),I=N+(L^b^C)+k[15]+530742520&4294967295,N=L+(I<<16&4294967295|I>>>16),I=C+(N^L^b)+k[2]+3299628645&4294967295,C=N+(I<<23&4294967295|I>>>9),I=b+(N^(C|~L))+k[0]+4096336452&4294967295,b=C+(I<<6&4294967295|I>>>26),I=L+(C^(b|~N))+k[7]+1126891415&4294967295,L=b+(I<<10&4294967295|I>>>22),I=N+(b^(L|~C))+k[14]+2878612391&4294967295,N=L+(I<<15&4294967295|I>>>17),I=C+(L^(N|~b))+k[5]+4237533241&4294967295,C=N+(I<<21&4294967295|I>>>11),I=b+(N^(C|~L))+k[12]+1700485571&4294967295,b=C+(I<<6&4294967295|I>>>26),I=L+(C^(b|~N))+k[3]+2399980690&4294967295,L=b+(I<<10&4294967295|I>>>22),I=N+(b^(L|~C))+k[10]+4293915773&4294967295,N=L+(I<<15&4294967295|I>>>17),I=C+(L^(N|~b))+k[1]+2240044497&4294967295,C=N+(I<<21&4294967295|I>>>11),I=b+(N^(C|~L))+k[8]+1873313359&4294967295,b=C+(I<<6&4294967295|I>>>26),I=L+(C^(b|~N))+k[15]+4264355552&4294967295,L=b+(I<<10&4294967295|I>>>22),I=N+(b^(L|~C))+k[6]+2734768916&4294967295,N=L+(I<<15&4294967295|I>>>17),I=C+(L^(N|~b))+k[13]+1309151649&4294967295,C=N+(I<<21&4294967295|I>>>11),I=b+(N^(C|~L))+k[4]+4149444226&4294967295,b=C+(I<<6&4294967295|I>>>26),I=L+(C^(b|~N))+k[11]+3174756917&4294967295,L=b+(I<<10&4294967295|I>>>22),I=N+(b^(L|~C))+k[2]+718787259&4294967295,N=L+(I<<15&4294967295|I>>>17),I=C+(L^(N|~b))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+b&4294967295,D.g[1]=D.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+N&4294967295,D.g[3]=D.g[3]+L&4294967295}a.prototype.v=function(D,b){b===void 0&&(b=D.length);const C=b-this.blockSize,k=this.C;let N=this.h,L=0;for(;L<b;){if(N==0)for(;L<=C;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<b;)if(k[N++]=D.charCodeAt(L++),N==this.blockSize){o(this,k),N=0;break}}else for(;L<b;)if(k[N++]=D[L++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=b},a.prototype.A=function(){var D=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);D[0]=128;for(var b=1;b<D.length-8;++b)D[b]=0;b=this.o*8;for(var C=D.length-8;C<D.length;++C)D[C]=b&255,b/=256;for(this.v(D),D=Array(16),b=0,C=0;C<4;++C)for(let k=0;k<32;k+=8)D[b++]=this.g[C]>>>k&255;return D};function u(D,b){var C=p;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=b(D)}function f(D,b){this.h=b;const C=[];let k=!0;for(let N=D.length-1;N>=0;N--){const L=D[N]|0;k&&L==b||(C[N]=L,k=!1)}this.g=C}var p={};function m(D){return-128<=D&&D<128?u(D,function(b){return new f([b|0],b<0?-1:0)}):new f([D|0],D<0?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(D<0)return Y(g(-D));const b=[];let C=1;for(let k=0;D>=C;k++)b[k]=D/C|0,C*=4294967296;return new f(b,0)}function v(D,b){if(D.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D.charAt(0)=="-")return Y(v(D.substring(1),b));if(D.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(b,8));let k=T;for(let L=0;L<D.length;L+=8){var N=Math.min(8,D.length-L);const I=parseInt(D.substring(L,L+N),b);N<8?(N=g(Math.pow(b,N)),k=k.j(N).add(g(I))):(k=k.j(C),k=k.add(g(I)))}return k}var T=m(0),w=m(1),P=m(16777216);r=f.prototype,r.m=function(){if(X(this))return-Y(this).m();let D=0,b=1;for(let C=0;C<this.g.length;C++){const k=this.i(C);D+=(k>=0?k:4294967296+k)*b,b*=4294967296}return D},r.toString=function(D){if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(H(this))return"0";if(X(this))return"-"+Y(this).toString(D);const b=g(Math.pow(D,6));var C=this;let k="";for(;;){const N=me(C,b).g;C=le(C,N.j(b));let L=((C.g.length>0?C.g[0]:C.h)>>>0).toString(D);if(C=N,H(C))return L+k;for(;L.length<6;)L="0"+L;k=L+k}},r.i=function(D){return D<0?0:D<this.g.length?this.g[D]:this.h};function H(D){if(D.h!=0)return!1;for(let b=0;b<D.g.length;b++)if(D.g[b]!=0)return!1;return!0}function X(D){return D.h==-1}r.l=function(D){return D=le(this,D),X(D)?-1:H(D)?0:1};function Y(D){const b=D.g.length,C=[];for(let k=0;k<b;k++)C[k]=~D.g[k];return new f(C,~D.h).add(w)}r.abs=function(){return X(this)?Y(this):this},r.add=function(D){const b=Math.max(this.g.length,D.g.length),C=[];let k=0;for(let N=0;N<=b;N++){let L=k+(this.i(N)&65535)+(D.i(N)&65535),I=(L>>>16)+(this.i(N)>>>16)+(D.i(N)>>>16);k=I>>>16,L&=65535,I&=65535,C[N]=I<<16|L}return new f(C,C[C.length-1]&-2147483648?-1:0)};function le(D,b){return D.add(Y(b))}r.j=function(D){if(H(this)||H(D))return T;if(X(this))return X(D)?Y(this).j(Y(D)):Y(Y(this).j(D));if(X(D))return Y(this.j(Y(D)));if(this.l(P)<0&&D.l(P)<0)return g(this.m()*D.m());const b=this.g.length+D.g.length,C=[];for(var k=0;k<2*b;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(let N=0;N<D.g.length;N++){const L=this.i(k)>>>16,I=this.i(k)&65535,He=D.i(N)>>>16,Ke=D.i(N)&65535;C[2*k+2*N]+=I*Ke,re(C,2*k+2*N),C[2*k+2*N+1]+=L*Ke,re(C,2*k+2*N+1),C[2*k+2*N+1]+=I*He,re(C,2*k+2*N+1),C[2*k+2*N+2]+=L*He,re(C,2*k+2*N+2)}for(D=0;D<b;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=b;D<2*b;D++)C[D]=0;return new f(C,0)};function re(D,b){for(;(D[b]&65535)!=D[b];)D[b+1]+=D[b]>>>16,D[b]&=65535,b++}function Z(D,b){this.g=D,this.h=b}function me(D,b){if(H(b))throw Error("division by zero");if(H(D))return new Z(T,T);if(X(D))return b=me(Y(D),b),new Z(Y(b.g),Y(b.h));if(X(b))return b=me(D,Y(b)),new Z(Y(b.g),b.h);if(D.g.length>30){if(X(D)||X(b))throw Error("slowDivide_ only works with positive integers.");for(var C=w,k=b;k.l(D)<=0;)C=Re(C),k=Re(k);var N=Oe(C,1),L=Oe(k,1);for(k=Oe(k,2),C=Oe(C,2);!H(k);){var I=L.add(k);I.l(D)<=0&&(N=N.add(C),L=I),k=Oe(k,1),C=Oe(C,1)}return b=le(D,N.j(b)),new Z(N,b)}for(N=T;D.l(b)>=0;){for(C=Math.max(1,Math.floor(D.m()/b.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),L=g(C),I=L.j(b);X(I)||I.l(D)>0;)C-=k,L=g(C),I=L.j(b);H(L)&&(L=w),N=N.add(L),D=le(D,I)}return new Z(N,D)}r.B=function(D){return me(this,D).h},r.and=function(D){const b=Math.max(this.g.length,D.g.length),C=[];for(let k=0;k<b;k++)C[k]=this.i(k)&D.i(k);return new f(C,this.h&D.h)},r.or=function(D){const b=Math.max(this.g.length,D.g.length),C=[];for(let k=0;k<b;k++)C[k]=this.i(k)|D.i(k);return new f(C,this.h|D.h)},r.xor=function(D){const b=Math.max(this.g.length,D.g.length),C=[];for(let k=0;k<b;k++)C[k]=this.i(k)^D.i(k);return new f(C,this.h^D.h)};function Re(D){const b=D.g.length+1,C=[];for(let k=0;k<b;k++)C[k]=D.i(k)<<1|D.i(k-1)>>>31;return new f(C,D.h)}function Oe(D,b){const C=b>>5;b%=32;const k=D.g.length-C,N=[];for(let L=0;L<k;L++)N[L]=b>0?D.i(L+C)>>>b|D.i(L+C+1)<<32-b:D.i(L+C);return new f(N,D.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,jT=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=v,ca=f}).apply(typeof aE<"u"?aE:typeof self<"u"?self:typeof window<"u"?window:{});var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GT,Wl,YT,mh,Xm,QT,KT,WT;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oh=="object"&&oh];for(var y=0;y<c.length;++y){var E=c[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var a=t(this);function o(c,y){if(y)e:{var E=a;c=c.split(".");for(var S=0;S<c.length-1;S++){var U=c[S];if(!(U in E))break e;E=E[U]}c=c[c.length-1],S=E[c],y=y(S),y!=S&&y!=null&&e(E,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var E=[],S;for(S in y)Object.prototype.hasOwnProperty.call(y,S)&&E.push([S,y[S]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,E){return c.call.apply(c.bind,arguments)}function g(c,y,E){return g=m,g.apply(null,arguments)}function v(c,y){var E=Array.prototype.slice.call(arguments,1);return function(){var S=E.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function T(c,y){function E(){}E.prototype=y.prototype,c.Z=y.prototype,c.prototype=new E,c.prototype.constructor=c,c.Ob=function(S,U,q){for(var te=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)te[Se-2]=arguments[Se];return y.prototype[U].apply(S,te)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function P(c){const y=c.length;if(y>0){const E=Array(y);for(let S=0;S<y;S++)E[S]=c[S];return E}return[]}function H(c,y){for(let S=1;S<arguments.length;S++){const U=arguments[S];var E=typeof U;if(E=E!="object"?E:U?Array.isArray(U)?"array":E:"null",E=="array"||E=="object"&&typeof U.length=="number"){E=c.length||0;const q=U.length||0;c.length=E+q;for(let te=0;te<q;te++)c[E+te]=U[te]}else c.push(U)}}class X{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Y(c){f.setTimeout(()=>{throw c},0)}function le(){var c=D;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class re{constructor(){this.h=this.g=null}add(y,E){const S=Z.get();S.set(y,E),this.h?this.h.next=S:this.g=S,this.h=S}}var Z=new X(()=>new me,c=>c.reset());class me{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Oe=!1,D=new re,b=()=>{const c=Promise.resolve(void 0);Re=()=>{c.then(C)}};function C(){for(var c;c=le();){try{c.h.call(c.g)}catch(E){Y(E)}var y=Z;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}Oe=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};f.addEventListener("test",E,y),f.removeEventListener("test",E,y)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function He(c,y){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}T(He,N),He.prototype.init=function(c,y){const E=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(E=="mouseover"?y=c.fromElement:E=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),j=0;function ne(c,y,E,S,U){this.listener=c,this.proxy=null,this.src=y,this.type=E,this.capture=!!S,this.ha=U,this.key=++j,this.da=this.fa=!1}function he(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Me(c,y,E){for(const S in c)y.call(E,c[S],S,c)}function qe(c,y){for(const E in c)y.call(void 0,c[E],E,c)}function M(c){const y={};for(const E in c)y[E]=c[E];return y}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(c,y){let E,S;for(let U=1;U<arguments.length;U++){S=arguments[U];for(E in S)c[E]=S[E];for(let q=0;q<K.length;q++)E=K[q],Object.prototype.hasOwnProperty.call(S,E)&&(c[E]=S[E])}}function ae(c){this.src=c,this.g={},this.h=0}ae.prototype.add=function(c,y,E,S,U){const q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);const te=be(c,y,S,U);return te>-1?(y=c[te],E||(y.fa=!1)):(y=new ne(y,this.src,q,!!S,U),y.fa=E,c.push(y)),y};function ve(c,y){const E=y.type;if(E in c.g){var S=c.g[E],U=Array.prototype.indexOf.call(S,y,void 0),q;(q=U>=0)&&Array.prototype.splice.call(S,U,1),q&&(he(y),c.g[E].length==0&&(delete c.g[E],c.h--))}}function be(c,y,E,S){for(let U=0;U<c.length;++U){const q=c[U];if(!q.da&&q.listener==y&&q.capture==!!E&&q.ha==S)return U}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Ut={};function ct(c,y,E,S,U){if(Array.isArray(y)){for(let q=0;q<y.length;q++)ct(c,y[q],E,S,U);return null}return E=Ho(E),c&&c[Ke]?c.J(y,E,p(S)?!!S.capture:!1,U):Sa(c,y,E,!1,S,U)}function Sa(c,y,E,S,U,q){if(!y)throw Error("Invalid event type");const te=p(U)?!!U.capture:!!U;let Se=wa(c);if(Se||(c[ze]=Se=new ae(c)),E=Se.add(y,E,S,te,q),E.proxy)return E;if(S=ps(),E.proxy=S,S.src=c,S.listener=E,c.addEventListener)L||(U=te),U===void 0&&(U=!1),c.addEventListener(y.toString(),S,U);else if(c.attachEvent)c.attachEvent(fi(y.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return E}function ps(){function c(E){return y.call(c.src,c.listener,E)}const y=zo;return c}function ys(c,y,E,S,U){if(Array.isArray(y))for(var q=0;q<y.length;q++)ys(c,y[q],E,S,U);else S=p(S)?!!S.capture:!!S,E=Ho(E),c&&c[Ke]?(c=c.i,q=String(y).toString(),q in c.g&&(y=c.g[q],E=be(y,E,S,U),E>-1&&(he(y[E]),Array.prototype.splice.call(y,E,1),y.length==0&&(delete c.g[q],c.h--)))):c&&(c=wa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=be(y,E,S,U)),(E=c>-1?y[c]:null)&&_s(E))}function _s(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Ke])ve(y.i,c);else{var E=c.type,S=c.proxy;y.removeEventListener?y.removeEventListener(E,S,c.capture):y.detachEvent?y.detachEvent(fi(E),S):y.addListener&&y.removeListener&&y.removeListener(S),(E=wa(y))?(ve(E,c),E.h==0&&(E.src=null,y[ze]=null)):he(c)}}}function fi(c){return c in Ut?Ut[c]:Ut[c]="on"+c}function zo(c,y){if(c.da)c=!0;else{y=new He(y,this);const E=c.listener,S=c.ha||c.src;c.fa&&_s(c),c=E.call(S,y)}return c}function wa(c){return c=c[ze],c instanceof ae?c:null}var Bo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ho(c){return typeof c=="function"?c:(c[Bo]||(c[Bo]=function(y){return c.handleEvent(y)}),c[Bo])}function wt(){k.call(this),this.i=new ae(this),this.M=this,this.G=null}T(wt,k),wt.prototype[Ke]=!0,wt.prototype.removeEventListener=function(c,y,E,S){ys(this,c,y,E,S)};function xt(c,y){var E,S=c.G;if(S)for(E=[];S;S=S.G)E.push(S);if(c=c.M,S=y.type||y,typeof y=="string")y=new N(y,c);else if(y instanceof N)y.target=y.target||c;else{var U=y;y=new N(S,c),ie(y,U)}U=!0;let q,te;if(E)for(te=E.length-1;te>=0;te--)q=y.g=E[te],U=br(q,S,!0,y)&&U;if(q=y.g=c,U=br(q,S,!0,y)&&U,U=br(q,S,!1,y)&&U,E)for(te=0;te<E.length;te++)q=y.g=E[te],U=br(q,S,!1,y)&&U}wt.prototype.N=function(){if(wt.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const E=c.g[y];for(let S=0;S<E.length;S++)he(E[S]);delete c.g[y],c.h--}}this.G=null},wt.prototype.J=function(c,y,E,S){return this.i.add(String(c),y,!1,E,S)},wt.prototype.K=function(c,y,E,S){return this.i.add(String(c),y,!0,E,S)};function br(c,y,E,S){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let U=!0;for(let q=0;q<y.length;++q){const te=y[q];if(te&&!te.da&&te.capture==E){const Se=te.listener,Et=te.ha||te.src;te.fa&&ve(c.i,te),U=Se.call(Et,S)!==!1&&U}}return U&&!S.defaultPrevented}function wf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function Mu(c){c.g=wf(()=>{c.g=null,c.i&&(c.i=!1,Mu(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class un extends k{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Mu(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ba(c){k.call(this),this.h=c,this.g={}}T(ba,k);var qo=[];function Fo(c){Me(c.g,function(y,E){this.g.hasOwnProperty(E)&&_s(y)},c),c.g={}}ba.prototype.N=function(){ba.Z.N.call(this),Fo(this)},ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=f.JSON.stringify,bf=f.JSON.parse,ku=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function Pu(){}function Vu(){}var $n={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kt(){N.call(this,"d")}T(Kt,N);function Vn(){N.call(this,"c")}T(Vn,N);var vt={},Lu=null;function vs(){return Lu=Lu||new wt}vt.Ia="serverreachability";function Uu(c){N.call(this,vt.Ia,c)}T(Uu,N);function di(c){const y=vs();xt(y,new Uu(y))}vt.STAT_EVENT="statevent";function Ia(c,y){N.call(this,vt.STAT_EVENT,c),this.stat=y}T(Ia,N);function bt(c){const y=vs();xt(y,new Ia(y,c))}vt.Ja="timingevent";function mi(c,y){N.call(this,vt.Ja,c),this.size=y}T(mi,N);function gi(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function Jn(){this.g=!0}Jn.prototype.ua=function(){this.g=!1};function If(c,y,E,S,U,q){c.info(function(){if(c.g)if(q){var te="",Se=q.split("&");for(let Ge=0;Ge<Se.length;Ge++){var Et=Se[Ge].split("=");if(Et.length>1){const ht=Et[0];Et=Et[1];const zn=ht.split("_");te=zn.length>=2&&zn[1]=="type"?te+(ht+"="+Et+"&"):te+(ht+"=redacted&")}}}else te=null;else te=q;return"XMLHTTP REQ ("+S+") [attempt "+U+"]: "+y+`
`+E+`
`+te})}function xu(c,y,E,S,U,q,te){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+U+"]: "+y+`
`+E+`
`+q+" "+te})}function pi(c,y,E,S){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rf(c,E)+(S?" "+S:"")})}function Ra(c,y){c.info(function(){return"TIMEOUT: "+y})}Jn.prototype.info=function(){};function Rf(c,y){if(!c.g)return y;if(!y)return null;try{const q=JSON.parse(y);if(q){for(c=0;c<q.length;c++)if(Array.isArray(q[c])){var E=q[c];if(!(E.length<2)){var S=E[1];if(Array.isArray(S)&&!(S.length<1)){var U=S[0];if(U!="noop"&&U!="stop"&&U!="close")for(let te=1;te<S.length;te++)S[te]=""}}}}return Ir(q)}catch{return y}}var Ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Go;function Da(){}T(Da,Pu),Da.prototype.g=function(){return new XMLHttpRequest},Go=new Da;function ji(c){return encodeURIComponent(String(c))}function zu(c){var y=1;c=c.split(":");const E=[];for(;y>0&&c.length;)E.push(c.shift()),y--;return c.length&&E.push(c.join(":")),E}function Zn(c,y,E,S){this.j=c,this.i=y,this.l=E,this.S=S||1,this.V=new ba(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}var It={},Ft={};function yi(c,y,E){c.M=1,c.A=Na(Ct(y)),c.u=E,c.R=!0,Es(c,null)}function Es(c,y){c.F=Date.now(),_i(c),c.B=Ct(c.A);var E=c.B,S=c.S;Array.isArray(S)||(S=[String(S)]),ws(E.i,"t",S),c.C=0,E=c.j.L,c.h=new ei,c.g=ec(c.j,E?y:null,!c.u),c.P>0&&(c.O=new un(g(c.Y,c,c.g),c.P)),y=c.V,E=c.g,S=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(qo[0]=U.toString()),U=qo);for(let q=0;q<U.length;q++){const te=ct(E,U[q],S||y.handleEvent,!1,y.h||y);if(!te)break;y.g[te.key]=te}y=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),di(),If(c.i,c.v,c.B,c.l,c.S,c.u)}Zn.prototype.ba=function(c){c=c.target;const y=this.O;y&&ii(c)==3?y.j():this.Y(c)},Zn.prototype.Y=function(c){try{if(c==this.g)e:{const Se=ii(this.g),Et=this.g.ya(),Ge=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||Wt(this.g)))){this.K||Se!=4||Et==7||(Et==8||Ge<=0?di(3):di(2)),vi(this);var y=this.g.ca();this.X=y;var E=Cf(this);if(this.o=y==200,xu(this.i,this.v,this.B,this.l,this.S,Se,y),this.o){if(this.U&&!this.L){t:{if(this.g){var S,U=this.g;if((S=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(S)){var q=S;break t}}q=null}if(c=q)pi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ei(this,c);else{this.o=!1,this.m=3,bt(12),wn(this),Ln(this);break e}}if(this.R){c=!0;let ht;for(;!this.K&&this.C<E.length;)if(ht=Hu(this,E),ht==Ft){Se==4&&(this.m=4,bt(14),c=!1),pi(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==It){this.m=4,bt(15),pi(this.i,this.l,E,"[Invalid Chunk]"),c=!1;break}else pi(this.i,this.l,ht,null),Ei(this,ht);if(Bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||E.length!=0||this.h.h||(this.m=1,bt(16),c=!1),this.o=this.o&&c,!c)pi(this.i,this.l,E,"[Invalid Chunked Response]"),wn(this),Ln(this);else if(E.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),sl(te),te.P=!0,bt(11))}}else pi(this.i,this.l,E,null),Ei(this,E);Se==4&&wn(this),this.o&&!this.K&&(Se==4?Xu(this.j,this):(this.o=!1,_i(this)))}else Yi(this.g),y==400&&E.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),wn(this),Ln(this)}}}catch{}finally{}};function Cf(c){if(!Bu(c))return c.g.la();const y=Wt(c.g);if(y==="")return"";let E="";const S=y.length,U=ii(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return wn(c),Ln(c),"";c.h.i=new f.TextDecoder}for(let q=0;q<S;q++)c.h.h=!0,E+=c.h.i.decode(y[q],{stream:!(U&&q==S-1)});return y.length=0,c.h.g+=E,c.C=0,c.h.g}function Bu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Hu(c,y){var E=c.C,S=y.indexOf(`
`,E);return S==-1?Ft:(E=Number(y.substring(E,S)),isNaN(E)?It:(S+=1,S+E>y.length?Ft:(y=y.slice(S,S+E),c.C=S+E,y)))}Zn.prototype.cancel=function(){this.K=!0,wn(this)};function _i(c){c.T=Date.now()+c.H,Ts(c,c.H)}function Ts(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=gi(g(c.aa,c),y)}function vi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Zn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Ra(this.i,this.B),this.M!=2&&(di(),bt(17)),wn(this),this.m=2,Ln(this)):Ts(this,this.T-c)};function Ln(c){c.j.I==0||c.K||Xu(c.j,c)}function wn(c){vi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Fo(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function Ei(c,y){try{var E=c.j;if(E.I!=0&&(E.g==c||Ai(E.h,c))){if(!c.L&&Ai(E.h,c)&&E.I==3){try{var S=E.Ba.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var U=S;if(U[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<c.F)Ds(E),Pr(E);else break e;Ua(E),bt(18)}}else E.xa=U[1],0<E.xa-E.K&&U[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=gi(g(E.Va,E),6e3));Ti(E.h)<=1&&E.ta&&(E.ta=void 0)}else Ci(E,11)}else if((c.L||E.g==c)&&Ds(E),!I(y))for(U=E.Ba.g.parse(y),y=0;y<U.length;y++){let Ge=U[y];const ht=Ge[0];if(!(ht<=E.K))if(E.K=ht,Ge=Ge[1],E.I==2)if(Ge[0]=="c"){E.M=Ge[1],E.ba=Ge[2];const zn=Ge[3];zn!=null&&(E.ka=zn,E.j.info("VER="+E.ka));const Di=Ge[4];Di!=null&&(E.za=Di,E.j.info("SVER="+E.za));const ri=Ge[5];ri!=null&&typeof ri=="number"&&ri>0&&(S=1.5*ri,E.O=S,E.j.info("backChannelRequestTimeoutMs_="+S)),S=E;const ai=c.g;if(ai){const xa=ai.g?ai.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xa){var q=S.h;q.g||xa.indexOf("spdy")==-1&&xa.indexOf("quic")==-1&&xa.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ko(q,q.h),q.h=null))}if(S.G){const Ns=ai.g?ai.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(S.wa=Ns,We(S.J,S.G,Ns))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-c.F,E.j.info("Handshake RTT: "+E.T+"ms")),S=E;var te=c;if(S.na=Zu(S,S.L?S.ba:null,S.W),te.L){Wo(S.h,te);var Se=te,Et=S.O;Et&&(Se.H=Et),Se.D&&(vi(Se),_i(Se)),S.g=te}else Ku(S);E.i.length>0&&Ri(E)}else Ge[0]!="stop"&&Ge[0]!="close"||Ci(E,7);else E.I==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?Ci(E,7):rl(E):Ge[0]!="noop"&&E.l&&E.l.qa(Ge),E.A=0)}}di(4)}catch{}}var Rt=class{constructor(c,y){this.g=c,this.map=y}};function Yo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ti(c){return c.h?1:c.g?c.g.size:0}function Ai(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ko(c,y){c.g?c.g.add(y):c.h=y}function Wo(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Yo.prototype.cancel=function(){if(this.i=Xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Xo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const E of c.g.values())y=y.concat(E.G);return y}return P(c.i)}var qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function As(c,y){if(c){c=c.split("&");for(let E=0;E<c.length;E++){const S=c[E].indexOf("=");let U,q=null;S>=0?(U=c[E].substring(0,S),q=c[E].substring(S+1)):U=c[E],y(U,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function bn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof bn?(this.l=c.l,jt(this,c.j),this.o=c.o,this.g=c.g,Rr(this,c.u),this.h=c.h,$o(this,Yu(c.i)),this.m=c.m):c&&(y=String(c).match(qu))?(this.l=!1,jt(this,y[1]||"",!0),this.o=Si(y[2]||""),this.g=Si(y[3]||"",!0),Rr(this,y[4]),this.h=Si(y[5]||"",!0),$o(this,y[6]||"",!0),this.m=Si(y[7]||"")):(this.l=!1,this.i=new Dr(null,this.l))}bn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Oa(y,Ss,!0),":");var E=this.g;return(E||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Oa(y,Ss,!0),"@"),c.push(ji(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&c.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Oa(E,E.charAt(0)=="/"?Jo:Fu,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Oa(E,ju)),c.join("")},bn.prototype.resolve=function(c){const y=Ct(this);let E=!!c.j;E?jt(y,c.j):E=!!c.o,E?y.o=c.o:E=!!c.g,E?y.g=c.g:E=c.u!=null;var S=c.h;if(E)Rr(y,c.u);else if(E=!!c.h){if(S.charAt(0)!="/")if(this.g&&!this.h)S="/"+S;else{var U=y.h.lastIndexOf("/");U!=-1&&(S=y.h.slice(0,U+1)+S)}if(U=S,U==".."||U==".")S="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){S=U.lastIndexOf("/",0)==0,U=U.split("/");const q=[];for(let te=0;te<U.length;){const Se=U[te++];Se=="."?S&&te==U.length&&q.push(""):Se==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),S&&te==U.length&&q.push("")):(q.push(Se),S=!0)}S=q.join("/")}else S=U}return E?y.h=S:E=c.i.toString()!=="",E?$o(y,Yu(c.i)):E=!!c.m,E&&(y.m=c.m),y};function Ct(c){return new bn(c)}function jt(c,y,E){c.j=E?Si(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Rr(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function $o(c,y,E){y instanceof Dr?(c.i=y,bs(c.i,c.l)):(E||(y=Oa(y,Cr)),c.i=new Dr(y,c.l))}function We(c,y,E){c.i.set(y,E)}function Na(c){return We(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Si(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Oa(c,y,E){return typeof c=="string"?(c=encodeURI(c).replace(y,mn),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ss=/[#\/\?@]/g,Fu=/[#\?:]/g,Jo=/[#\?]/g,Cr=/[#\?@]/g,ju=/#/g;function Dr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function gn(c){c.g||(c.g=new Map,c.h=0,c.i&&As(c.i,function(y,E){c.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}r=Dr.prototype,r.add=function(c,y){gn(this),this.i=null,c=Nr(this,c);let E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(y),this.h+=1,this};function Gu(c,y){gn(c),y=Nr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Zo(c,y){return gn(c),y=Nr(c,y),c.g.has(y)}r.forEach=function(c,y){gn(this),this.g.forEach(function(E,S){E.forEach(function(U){c.call(y,U,S,this)},this)},this)};function el(c,y){gn(c);let E=[];if(typeof y=="string")Zo(c,y)&&(E=E.concat(c.g.get(Nr(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)E=E.concat(c[y]);return E}r.set=function(c,y){return gn(this),this.i=null,c=Nr(this,c),Zo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=el(this,c),c.length>0?String(c[0]):y):y};function ws(c,y,E){Gu(c,y),E.length>0&&(c.i=null,c.g.set(Nr(c,y),P(E)),c.h+=E.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let S=0;S<y.length;S++){var E=y[S];const U=ji(E);E=el(this,E);for(let q=0;q<E.length;q++){let te=U;E[q]!==""&&(te+="="+ji(E[q])),c.push(te)}}return this.i=c.join("&")};function Yu(c){const y=new Dr;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Nr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function bs(c,y){y&&!c.j&&(gn(c),c.i=null,c.g.forEach(function(E,S){const U=S.toLowerCase();S!=U&&(Gu(this,S),ws(this,U,E))},c)),c.j=y}function ti(c,y){const E=new Jn;if(f.Image){const S=new Image;S.onload=v(Un,E,"TestLoadImage: loaded",!0,y,S),S.onerror=v(Un,E,"TestLoadImage: error",!1,y,S),S.onabort=v(Un,E,"TestLoadImage: abort",!1,y,S),S.ontimeout=v(Un,E,"TestLoadImage: timeout",!1,y,S),f.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else y(!1)}function tl(c,y){const E=new Jn,S=new AbortController,U=setTimeout(()=>{S.abort(),Un(E,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:S.signal}).then(q=>{clearTimeout(U),q.ok?Un(E,"TestPingServer: ok",!0,y):Un(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Un(E,"TestPingServer: error",!1,y)})}function Un(c,y,E,S,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),S(E)}catch{}}function Or(){this.g=new ku}function wi(c){this.i=c.Sb||null,this.h=c.ab||!1}T(wi,Pu),wi.prototype.g=function(){return new Ma(this.i,this.h)};function Ma(c,y){wt.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Ma,wt),r=Ma.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,ni(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Is(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Is(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Mr(this):ni(this),this.readyState==3&&Is(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,Mr(this))},r.Na=function(c){this.g&&(this.response=c,Mr(this))},r.ga=function(){this.g&&Mr(this)};function Mr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ni(c)}r.setRequestHeader=function(c,y){this.A.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=y.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function xn(c){let y="";return Me(c,function(E,S){y+=S,y+=":",y+=E,y+=`\r
`}),y}function ka(c,y,E){e:{for(S in E){var S=!1;break e}S=!0}S||(E=xn(E),typeof c=="string"?E!=null&&ji(E):We(c,y,E))}function Ze(c){wt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Ze,wt);var bi=/^https?$/i,nl=["POST","PUT"];r=Ze.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,y,E,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Go.g(),this.g.onreadystatechange=w(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(q){Pa(this,q);return}if(c=E||"",E=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var U in S)E.set(U,S[U]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())E.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(E.keys()).find(q=>q.toLowerCase()=="content-type"),U=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(nl,y,void 0)>=0)||S||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of E)this.g.setRequestHeader(q,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(q){Pa(this,q)}};function Pa(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,il(c),Gi(c)}function il(c){c.A||(c.A=!0,xt(c,"complete"),xt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,xt(this,"complete"),xt(this,"abort"),Gi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),Ze.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Va(this):this.Xa())},r.Xa=function(){Va(this)};function Va(c){if(c.h&&typeof u<"u"){if(c.v&&ii(c)==4)setTimeout(c.Ca.bind(c),0);else if(xt(c,"readystatechange"),ii(c)==4){c.h=!1;try{const q=c.ca();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var S;if(S=q===0){let te=String(c.D).match(qu)[1]||null;!te&&f.self&&f.self.location&&(te=f.self.location.protocol.slice(0,-1)),S=!bi.test(te?te.toLowerCase():"")}E=S}if(E)xt(c,"complete"),xt(c,"success");else{c.o=6;try{var U=ii(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",il(c)}}finally{Gi(c)}}}}function Gi(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const E=c.g;c.g=null,y||xt(c,"ready");try{E.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ii(c){return c.g?c.g.readyState:0}r.ca=function(){try{return ii(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),bf(y)}};function Wt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Yi(c){const y={};c=(c.g&&ii(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(I(c[S]))continue;var E=zu(c[S]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const q=y[U]||[];y[U]=q,q.push(E)}qe(y,function(S){return S.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ii(c,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||y}function kr(c){this.za=0,this.i=[],this.j=new Jn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ii("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ii("baseRetryDelayMs",5e3,c),this.Za=Ii("retryDelaySeedMs",1e4,c),this.Ta=Ii("forwardChannelMaxRetries",2,c),this.va=Ii("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Yo(c&&c.concurrentRequestLimit),this.Ba=new Or,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=kr.prototype,r.ka=8,r.I=1,r.connect=function(c,y,E,S){bt(0),this.W=c,this.H=y||{},E&&S!==void 0&&(this.H.OSID=E,this.H.OAID=S),this.F=this.X,this.J=Zu(this,null,this.W),Ri(this)};function rl(c){if(Rs(c),c.I==3){var y=c.V++,E=Ct(c.J);if(We(E,"SID",c.M),We(E,"RID",y),We(E,"TYPE","terminate"),La(c,E),y=new Zn(c,c.j,y),y.M=2,y.A=Na(Ct(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!E&&f.Image&&(new Image().src=y.A,E=!0),E||(y.g=ec(y.j,null),y.g.ea(y.A)),y.F=Date.now(),_i(y)}Ju(c)}function Pr(c){c.g&&(sl(c),c.g.cancel(),c.g=null)}function Rs(c){Pr(c),c.v&&(f.clearTimeout(c.v),c.v=null),Ds(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ri(c){if(!Qo(c.h)&&!c.m){c.m=!0;var y=c.Ea;Re||b(),Oe||(Re(),Oe=!0),D.add(y,c),c.D=0}}function Cs(c,y){return Ti(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=gi(g(c.Ea,c,y),$u(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new Zn(this,this.j,c);let q=this.o;if(this.U&&(q?(q=M(q),ie(q,this.U)):q=this.U),this.u!==null||this.R||(U.J=q,q=null),this.S)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var S=this.i[E];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,y>4096){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Qu(this,U,y),E=Ct(this.J),We(E,"RID",c),We(E,"CVER",22),this.G&&We(E,"X-HTTP-Session-Id",this.G),La(this,E),q&&(this.R?y="headers="+ji(xn(q))+"&"+y:this.u&&ka(E,this.u,q)),Ko(this.h,U),this.Ra&&We(E,"TYPE","init"),this.S?(We(E,"$req",y),We(E,"SID","null"),U.U=!0,yi(U,E,null)):yi(U,E,y),this.I=2}}else this.I==3&&(c?al(this,c):this.i.length==0||Qo(this.h)||al(this))};function al(c,y){var E;y?E=y.l:E=c.V++;const S=Ct(c.J);We(S,"SID",c.M),We(S,"RID",E),We(S,"AID",c.K),La(c,S),c.u&&c.o&&ka(S,c.u,c.o),E=new Zn(c,c.j,E,c.D+1),c.u===null&&(E.J=c.o),y&&(c.i=y.G.concat(c.i)),y=Qu(c,E,1e3),E.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ko(c.h,E),yi(E,S,y)}function La(c,y){c.H&&Me(c.H,function(E,S){We(y,S,E)}),c.l&&Me({},function(E,S){We(y,S,E)})}function Qu(c,y,E){E=Math.min(c.i.length,E);const S=c.l?g(c.l.Ka,c.l,c):null;e:{var U=c.i;let Se=-1;for(;;){const Et=["count="+E];Se==-1?E>0?(Se=U[0].g,Et.push("ofs="+Se)):Se=0:Et.push("ofs="+Se);let Ge=!0;for(let ht=0;ht<E;ht++){var q=U[ht].g;const zn=U[ht].map;if(q-=Se,q<0)Se=Math.max(0,U[ht].g-100),Ge=!1;else try{q="req"+q+"_"||"";try{var te=zn instanceof Map?zn:Object.entries(zn);for(const[Di,ri]of te){let ai=ri;p(ri)&&(ai=Ir(ri)),Et.push(q+Di+"="+encodeURIComponent(ai))}}catch(Di){throw Et.push(q+"type="+encodeURIComponent("_badmap")),Di}}catch{S&&S(zn)}}if(Ge){te=Et.join("&");break e}}te=void 0}return c=c.i.splice(0,E),y.G=c,te}function Ku(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;Re||b(),Oe||(Re(),Oe=!0),D.add(y,c),c.A=0}}function Ua(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=gi(g(c.Da,c),$u(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Wu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=gi(g(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Pr(this),Wu(this))};function sl(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Wu(c){c.g=new Zn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Ct(c.na);We(y,"RID","rpc"),We(y,"SID",c.M),We(y,"AID",c.K),We(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&We(y,"TO",c.ia),We(y,"TYPE","xmlhttp"),La(c,y),c.u&&c.o&&ka(y,c.u,c.o),c.O&&(c.g.H=c.O);var E=c.g;c=c.ba,E.M=1,E.A=Na(Ct(y)),E.u=null,E.R=!0,Es(E,c)}r.Va=function(){this.C!=null&&(this.C=null,Pr(this),Ua(this),bt(19))};function Ds(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Xu(c,y){var E=null;if(c.g==y){Ds(c),sl(c),c.g=null;var S=2}else if(Ai(c.h,y))E=y.G,Wo(c.h,y),S=1;else return;if(c.I!=0){if(y.o)if(S==1){E=y.u?y.u.length:0,y=Date.now()-y.F;var U=c.D;S=vs(),xt(S,new mi(S,E)),Ri(c)}else Ku(c);else if(U=y.m,U==3||U==0&&y.X>0||!(S==1&&Cs(c,y)||S==2&&Ua(c)))switch(E&&E.length>0&&(y=c.h,y.i=y.i.concat(E)),U){case 1:Ci(c,5);break;case 4:Ci(c,10);break;case 3:Ci(c,6);break;default:Ci(c,2)}}}function $u(c,y){let E=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(E*=2),E*y}function Ci(c,y){if(c.j.info("Error code "+y),y==2){var E=g(c.bb,c),S=c.Ua;const U=!S;S=new bn(S||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||jt(S,"https"),Na(S),U?ti(S.toString(),E):tl(S.toString(),E)}else bt(2);c.I=0,c.l&&c.l.pa(y),Ju(c),Rs(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Ju(c){if(c.I=0,c.ja=[],c.l){const y=Xo(c.h);(y.length!=0||c.i.length!=0)&&(H(c.ja,y),H(c.ja,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.oa()}}function Zu(c,y,E){var S=E instanceof bn?Ct(E):new bn(E);if(S.g!="")y&&(S.g=y+"."+S.g),Rr(S,S.u);else{var U=f.location;S=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;const q=new bn(null);S&&jt(q,S),y&&(q.g=y),U&&Rr(q,U),E&&(q.h=E),S=q}return E=c.G,y=c.wa,E&&y&&We(S,E,y),We(S,"VER",c.ka),La(c,S),S}function ec(c,y,E){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new Ze(new wi({ab:E})):new Ze(c.ma),y.Fa(c.L),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function tc(){}r=tc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Vr(){}Vr.prototype.g=function(c,y){return new cn(c,y)};function cn(c,y){wt.call(this),this.g=new kr(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!I(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!I(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Qi(this)}T(cn,wt),cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){rl(this.g)},cn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.v&&(E={},E.__data__=Ir(c),c=E);y.i.push(new Rt(y.Ya++,c)),y.I==3&&Ri(y)},cn.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,cn.Z.N.call(this)};function nc(c){Kt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const E in y){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}T(nc,Kt);function ic(){Vn.call(this),this.status=1}T(ic,Vn);function Qi(c){this.g=c}T(Qi,tc),Qi.prototype.ra=function(){xt(this.g,"a")},Qi.prototype.qa=function(c){xt(this.g,new nc(c))},Qi.prototype.pa=function(c){xt(this.g,new ic)},Qi.prototype.oa=function(){xt(this.g,"b")},Vr.prototype.createWebChannel=Vr.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,WT=function(){return new Vr},KT=function(){return vs()},QT=vt,Xm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,mh=Ca,jo.COMPLETE="complete",YT=jo,Vu.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",wt.prototype.listen=wt.prototype.J,Wl=Vu,Ze.prototype.listenOnce=Ze.prototype.K,Ze.prototype.getLastError=Ze.prototype.Ha,Ze.prototype.getLastErrorCode=Ze.prototype.ya,Ze.prototype.getStatus=Ze.prototype.ca,Ze.prototype.getResponseJson=Ze.prototype.La,Ze.prototype.getResponseText=Ze.prototype.la,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Fa,GT=Ze}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="12.9.0";function yI(r){Oo=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ls=new _g("@firebase/firestore");function oo(){return ls.logLevel}function se(r,...e){if(ls.logLevel<=Ve.DEBUG){const t=e.map(Tg);ls.debug(`Firestore (${Oo}): ${r}`,...t)}}function _r(r,...e){if(ls.logLevel<=Ve.ERROR){const t=e.map(Tg);ls.error(`Firestore (${Oo}): ${r}`,...t)}}function us(r,...e){if(ls.logLevel<=Ve.WARN){const t=e.map(Tg);ls.warn(`Firestore (${Oo}): ${r}`,...t)}}function Tg(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(r,e,t){let a="Unexpected state";typeof e=="string"?a=e:t=e,XT(r,a,t)}function XT(r,e,t){let a=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{a+=" CONTEXT: "+JSON.stringify(t)}catch{a+=" CONTEXT: "+t}throw _r(a),new Error(a)}function Qe(r,e,t,a){let o="Unexpected state";typeof t=="string"?o=t:a=t,r||XT(e,o,a)}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(sn.UNAUTHENTICATED)))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class EI{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,t(m)):Promise.resolve();let u=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new gr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const m=u;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new gr)}}),0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((a=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Qe(typeof a.accessToken=="string",31837,{l:a}),new $T(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class TI{constructor(e,t,a){this.P=e,this.T=t,this.I=a,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class AI{constructor(e,t,a){this.P=e,this.T=t,this.I=a}getToken(){return Promise.resolve(new TI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const a=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>a(u)))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new sE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<r;a++)t[a]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=wI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<t&&(a+=e.charAt(o[u]%62))}return a}}function Le(r,e){return r<e?-1:r>e?1:0}function $m(r,e){const t=Math.min(r.length,e.length);for(let a=0;a<t;a++){const o=r.charAt(a),u=e.charAt(a);if(o!==u)return km(o)===km(u)?Le(o,u):km(o)?1:-1}return Le(r.length,e.length)}const bI=55296,II=57343;function km(r){const e=r.charCodeAt(0);return e>=bI&&e<=II}function Ao(r,e,t){return r.length===e.length&&r.every(((a,o)=>t(a,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="__name__";class Pi{constructor(e,t,a){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),a===void 0?a=e.length-t:a>e.length-t&&pe(1746,{length:a,range:e.length-t}),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach((a=>{t.push(a)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let o=0;o<a;o++){const u=Pi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Le(e.length,t.length)}static compareSegments(e,t){const a=Pi.isNumericId(e),o=Pi.isNumericId(t);return a&&!o?-1:!a&&o?1:a&&o?Pi.extractNumericId(e).compare(Pi.extractNumericId(t)):$m(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ca.fromString(e.substring(4,e.length-2))}}class st extends Pi{construct(e,t,a){return new st(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new ue(J.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const RI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Pi{construct(e,t,a){return new tn(e,t,a)}static isValidIdentifier(e){return RI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oE}static keyField(){return new tn([oE])}static fromServerFormat(e){const t=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ue(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ue(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ue(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(a+=p,o++):(u(),o++)}if(u(),f)throw new ue(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(st.fromString(e))}static fromName(e){return new de(st.fromString(e).popFirst(5))}static empty(){return new de(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new st(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(r,e,t){if(!t)throw new ue(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function CI(r,e,t,a){if(e===!0&&a===!0)throw new ue(J.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function lE(r){if(!de.isDocumentKey(r))throw new ue(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function uE(r){if(de.isDocumentKey(r))throw new ue(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ZT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Sg(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":pe(12329,{type:typeof r})}function hi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sg(r);throw new ue(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Su(r,e){if(!ZT(r))throw new ue(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const a in e)if(e[a]){const o=e[a].typeString,u="value"in e[a]?{value:e[a].value}:void 0;if(!(a in r)){t=`JSON missing required field: '${a}'`;break}const f=r[a];if(o&&typeof f!==o){t=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){t=`Expected '${a}' field to equal '${u.value}'`;break}}if(t)throw new ue(J.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=-62135596800,hE=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor((e-1e3*t)*hE);return new ot(t,a)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cE)throw new ue(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hE}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Su(e,ot._jsonSchema))return new ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:Vt("string",ot._jsonSchemaVersion),seconds:Vt("number"),nanoseconds:Vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new ot(0,0))}static max(){return new Ee(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cu=-1;function DI(r,e){const t=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(a===1e9?new ot(t+1,0):new ot(t,a));return new ma(o,de.empty(),e)}function NI(r){return new ma(r.readTime,r.key,cu)}class ma{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new ma(Ee.min(),de.empty(),cu)}static max(){return new ma(Ee.max(),de.empty(),cu)}}function OI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Le(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==MI)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(a,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,a)=>{t(e)}))}static reject(e){return new $(((t,a)=>{a(e)}))}static waitFor(e){return new $(((t,a)=>{let o=0,u=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++u,f&&u===o&&t()}),(m=>a(m)))})),f=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const a of e)t=t.next((o=>o?$.resolve(o):a()));return t}static forEach(e,t){const a=[];return e.forEach(((o,u)=>{a.push(t.call(this,o,u))})),this.waitFor(a)}static mapArray(e,t){return new $(((a,o)=>{const u=e.length,f=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next((v=>{f[g]=v,++p,p===u&&a(f)}),(v=>o(v)))}}))}static doWhile(e,t){return new $(((a,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):a()};u()}))}}function PI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Kh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>t.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=-1;function Wh(r){return r==null}function Ih(r){return r===0&&1/r==-1/0}function VI(r){return typeof r=="number"&&Number.isInteger(r)&&!Ih(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="";function LI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=fE(e)),e=UI(r.get(t),e);return fE(e)}function UI(r,e){let t=e;const a=r.length;for(let o=0;o<a;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case e0:t+="";break;default:t+=u}}return t}function fE(r){return r+e0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ea(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function t0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.comparator=e,this.root=t||en.EMPTY}insert(e,t){return new mt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,en.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,en.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return t+a.left.size;o<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,a)=>(e(t,a),!1)))}toString(){const e=[];return this.inorderTraversal(((t,a)=>(e.push(`${t}:${a}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lh(this.root,e,this.comparator,!1)}getReverseIterator(){return new lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lh(this.root,e,this.comparator,!0)}}class lh{constructor(e,t,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?a(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class en{constructor(e,t,a,o,u){this.key=e,this.value=t,this.color=a??en.RED,this.left=o??en.EMPTY,this.right=u??en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,o,u){return new en(e??this.key,t??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let o=this;const u=a(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,a),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return en.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1;en.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,a,o,u){return this}insert(e,t,a){return new en(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,a)=>(e(t),!1)))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mE(this.data.getIterator())}getIteratorFrom(e){return new mE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((a=>{t=t.add(a)})),t}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qt(this.comparator);return t.data=e,t}}class mE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new kn([])}unionWith(e){let t=new qt(tn.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((t,a)=>t.isEqual(a)))}}/**
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
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new n0("Invalid base64 string: "+u):u}})(e);return new nn(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const a=new Uint8Array(t.length);for(let o=0;o<t.length;o++)a[o]=t.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const xI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ga(r){if(Qe(!!r,39018),typeof r=="string"){let e=0;const t=xI.exec(r);if(Qe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:St(r.seconds),nanos:St(r.nanos)}}function St(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function pa(r){return typeof r=="string"?nn.fromBase64String(r):nn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="server_timestamp",r0="__type__",a0="__previous_value__",s0="__local_write_time__";function bg(r){var t,a;return((a=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[r0])==null?void 0:a.stringValue)===i0}function Xh(r){const e=r.mapValue.fields[a0];return bg(e)?Xh(e):e}function hu(r){const e=ga(r.mapValue.fields[s0].timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t,a,o,u,f,p,m,g,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v,this.apiKey=T}}const Rh="(default)";class fu{constructor(e,t){this.projectId=e,this.database=t||Rh}static empty(){return new fu("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof fu&&e.projectId===this.projectId&&e.database===this.database}}function BI(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ue(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fu(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="__type__",HI="__max__",uh={mapValue:{}},l0="__vector__",Ch="value";function ya(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?bg(r)?4:FI(r)?9007199254740991:qI(r)?10:11:pe(28295,{value:r})}function Hi(r,e){if(r===e)return!0;const t=ya(r);if(t!==ya(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return hu(r).isEqual(hu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ga(o.timestampValue),p=ga(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return pa(o.bytesValue).isEqual(pa(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return St(o.geoPointValue.latitude)===St(u.geoPointValue.latitude)&&St(o.geoPointValue.longitude)===St(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return St(o.integerValue)===St(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=St(o.doubleValue),p=St(u.doubleValue);return f===p?Ih(f)===Ih(p):isNaN(f)&&isNaN(p)}return!1})(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],Hi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(dE(f)!==dE(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!Hi(f[m],p[m])))return!1;return!0})(r,e);default:return pe(52216,{left:r})}}function du(r,e){return(r.values||[]).find((t=>Hi(t,e)))!==void 0}function So(r,e){if(r===e)return 0;const t=ya(r),a=ya(e);if(t!==a)return Le(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const p=St(u.integerValue||u.doubleValue),m=St(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(r,e);case 3:return gE(r.timestampValue,e.timestampValue);case 4:return gE(hu(r),hu(e));case 5:return $m(r.stringValue,e.stringValue);case 6:return(function(u,f){const p=pa(u),m=pa(f);return p.compareTo(m)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const p=u.split("/"),m=f.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Le(p[g],m[g]);if(v!==0)return v}return Le(p.length,m.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const p=Le(St(u.latitude),St(f.latitude));return p!==0?p:Le(St(u.longitude),St(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return pE(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var w,P,H,X;const p=u.fields||{},m=f.fields||{},g=(w=p[Ch])==null?void 0:w.arrayValue,v=(P=m[Ch])==null?void 0:P.arrayValue,T=Le(((H=g==null?void 0:g.values)==null?void 0:H.length)||0,((X=v==null?void 0:v.values)==null?void 0:X.length)||0);return T!==0?T:pE(g,v)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===uh.mapValue&&f===uh.mapValue)return 0;if(u===uh.mapValue)return 1;if(f===uh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=f.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const w=$m(m[T],v[T]);if(w!==0)return w;const P=So(p[m[T]],g[v[T]]);if(P!==0)return P}return Le(m.length,v.length)})(r.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function gE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const t=ga(r),a=ga(e),o=Le(t.seconds,a.seconds);return o!==0?o:Le(t.nanos,a.nanos)}function pE(r,e){const t=r.values||[],a=e.values||[];for(let o=0;o<t.length&&o<a.length;++o){const u=So(t[o],a[o]);if(u)return u}return Le(t.length,a.length)}function wo(r){return Jm(r)}function Jm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const a=ga(t);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return pa(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let a="[",o=!0;for(const u of t.values||[])o?o=!1:a+=",",a+=Jm(u);return a+"]"})(r.arrayValue):"mapValue"in r?(function(t){const a=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${Jm(t.fields[f])}`;return o+"}"})(r.mapValue):pe(61005,{value:r})}function gh(r){switch(ya(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(r);return e?16+gh(e):16;case 5:return 2*r.stringValue.length;case 6:return pa(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+gh(u)),0)})(r.arrayValue);case 10:case 11:return(function(a){let o=0;return Ea(a.fields,((u,f)=>{o+=u.length+gh(f)})),o})(r.mapValue);default:throw pe(13486,{value:r})}}function Zm(r){return!!r&&"integerValue"in r}function Ig(r){return!!r&&"arrayValue"in r}function yE(r){return!!r&&"nullValue"in r}function _E(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ph(r){return!!r&&"mapValue"in r}function qI(r){var t,a;return((a=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[o0])==null?void 0:a.stringValue)===l0}function tu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Ea(r.mapValue.fields,((t,a)=>e.mapValue.fields[t]=tu(a))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tu(r.arrayValue.values[t]);return e}return{...r}}function FI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===HI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!ph(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tu(t)}setAll(e){let t=tn.emptyPath(),a={},o=[];e.forEach(((f,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,a,o),a={},o=[],t=p.popLast()}f?a[p.lastSegment()]=tu(f):o.push(p.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,a,o)}delete(e){const t=this.field(e.popLast());ph(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=t.mapValue.fields[e.get(a)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,a){Ea(t,((o,u)=>e[o]=u));for(const o of a)delete e[o]}clone(){return new An(tu(this.value))}}function u0(r){const e=[];return Ea(r.fields,((t,a)=>{const o=new tn([t]);if(ph(a)){const u=u0(a.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,a,o,u,f,p){this.key=e,this.documentType=t,this.version=a,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new on(e,0,Ee.min(),Ee.min(),Ee.min(),An.empty(),0)}static newFoundDocument(e,t,a,o){return new on(e,1,t,Ee.min(),a,o,0)}static newNoDocument(e,t){return new on(e,2,t,Ee.min(),Ee.min(),An.empty(),0)}static newUnknownDocument(e,t){return new on(e,3,t,Ee.min(),Ee.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dh{constructor(e,t){this.position=e,this.inclusive=t}}function vE(r,e,t){let a=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?a=de.comparator(de.fromName(f.referenceValue),t.key):a=So(f,t.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function EE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Hi(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nh{constructor(e,t="asc"){this.field=e,this.dir=t}}function jI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class c0{}class Ht extends c0{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new YI(e,t,a):t==="array-contains"?new WI(e,a):t==="in"?new XI(e,a):t==="not-in"?new $I(e,a):t==="array-contains-any"?new JI(e,a):new Ht(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new QI(e,a):new KI(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(So(t,this.value)):t!==null&&ya(this.value)===ya(t)&&this.matchesComparison(So(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qi extends c0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qi(e,t)}matches(e){return h0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h0(r){return r.op==="and"}function f0(r){return GI(r)&&h0(r)}function GI(r){for(const e of r.filters)if(e instanceof qi)return!1;return!0}function eg(r){if(r instanceof Ht)return r.field.canonicalString()+r.op.toString()+wo(r.value);if(f0(r))return r.filters.map((e=>eg(e))).join(",");{const e=r.filters.map((t=>eg(t))).join(",");return`${r.op}(${e})`}}function d0(r,e){return r instanceof Ht?(function(a,o){return o instanceof Ht&&a.op===o.op&&a.field.isEqual(o.field)&&Hi(a.value,o.value)})(r,e):r instanceof qi?(function(a,o){return o instanceof qi&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,f,p)=>u&&d0(f,o.filters[p])),!0):!1})(r,e):void pe(19439)}function m0(r){return r instanceof Ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(r):r instanceof qi?(function(t){return t.op.toString()+" {"+t.getFilters().map(m0).join(" ,")+"}"})(r):"Filter"}class YI extends Ht{constructor(e,t,a){super(e,t,a),this.key=de.fromName(a.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class QI extends Ht{constructor(e,t){super(e,"in",t),this.keys=g0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KI extends Ht{constructor(e,t){super(e,"not-in",t),this.keys=g0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function g0(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((a=>de.fromName(a.referenceValue)))}class WI extends Ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ig(t)&&du(t.arrayValue,this.value)}}class XI extends Ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&du(this.value.arrayValue,t)}}class $I extends Ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!du(this.value.arrayValue,t)}}class JI extends Ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ig(t)||!t.arrayValue.values)&&t.arrayValue.values.some((a=>du(this.value.arrayValue,a)))}}/**
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
 */class ZI{constructor(e,t=null,a=[],o=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function TE(r,e=null,t=[],a=[],o=null,u=null,f=null){return new ZI(r,e,t,a,o,u,f)}function Rg(r){const e=Ae(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((a=>eg(a))).join(","),t+="|ob:",t+=e.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Wh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((a=>wo(a))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((a=>wo(a))).join(",")),e.Te=t}return e.Te}function Cg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!jI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!d0(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!EE(r.startAt,e.startAt)&&EE(r.endAt,e.endAt)}function tg(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t=null,a=[],o=[],u=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function eR(r,e,t,a,o,u,f,p){return new $h(r,e,t,a,o,u,f,p)}function Dg(r){return new $h(r)}function AE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tR(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function nR(r){return r.collectionGroup!==null}function nu(r){const e=Ae(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new qt(tn.comparator);return f.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Nh(u,a))})),t.has(tn.keyField().canonicalString())||e.Ie.push(new Nh(tn.keyField(),a))}return e.Ie}function xi(r){const e=Ae(r);return e.Ee||(e.Ee=iR(e,nu(r))),e.Ee}function iR(r,e){if(r.limitType==="F")return TE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Nh(o.field,u)}));const t=r.endAt?new Dh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Dh(r.startAt.position,r.startAt.inclusive):null;return TE(r.path,r.collectionGroup,e,r.filters,r.limit,t,a)}}function ng(r,e,t){return new $h(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Jh(r,e){return Cg(xi(r),xi(e))&&r.limitType===e.limitType}function p0(r){return`${Rg(xi(r))}|lt:${r.limitType}`}function lo(r){return`Query(target=${(function(t){let a=t.path.canonicalString();return t.collectionGroup!==null&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map((o=>m0(o))).join(", ")}]`),Wh(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),t.startAt&&(a+=", startAt: ",a+=t.startAt.inclusive?"b:":"a:",a+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(a+=", endAt: ",a+=t.endAt.inclusive?"a:":"b:",a+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${a})`})(xi(r))}; limitType=${r.limitType})`}function Zh(r,e){return e.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):de.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(r,e)&&(function(a,o){for(const u of nu(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(a,o){return!(a.startAt&&!(function(f,p,m){const g=vE(f,p,m);return f.inclusive?g<=0:g<0})(a.startAt,nu(a),o)||a.endAt&&!(function(f,p,m){const g=vE(f,p,m);return f.inclusive?g>=0:g>0})(a.endAt,nu(a),o))})(r,e)}function rR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function y0(r){return(e,t)=>{let a=!1;for(const o of nu(r)){const u=aR(o,e,t);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function aR(r,e,t){const a=r.field.isKeyField()?de.comparator(e.key,t.key):(function(u,f,p){const m=f.data.field(u),g=p.data.field(u);return m!==null&&g!==null?So(m,g):pe(42886)})(r.field,e,t);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return pe(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[t]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ea(this.inner,((t,a)=>{for(const[o,u]of a)e(o,u)}))}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new mt(de.comparator);function vr(){return sR}const _0=new mt(de.comparator);function Xl(...r){let e=_0;for(const t of r)e=e.insert(t.key,t);return e}function v0(r){let e=_0;return r.forEach(((t,a)=>e=e.insert(t,a.overlayedDocument))),e}function ns(){return iu()}function E0(){return iu()}function iu(){return new fs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oR=new mt(de.comparator),lR=new qt(de.comparator);function Ue(...r){let e=lR;for(const t of r)e=e.add(t);return e}const uR=new qt(Le);function cR(){return uR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ih(e)?"-0":e}}function T0(r){return{integerValue:""+r}}function hR(r,e){return VI(e)?T0(e):Ng(r,e)}/**
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
 */class ef{constructor(){this._=void 0}}function fR(r,e,t){return r instanceof Oh?(function(o,u){const f={fields:{[r0]:{stringValue:i0},[s0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&bg(u)&&(u=Xh(u)),u&&(f.fields[a0]=u),{mapValue:f}})(t,e):r instanceof mu?S0(r,e):r instanceof gu?w0(r,e):(function(o,u){const f=A0(o,u),p=SE(f)+SE(o.Ae);return Zm(f)&&Zm(o.Ae)?T0(p):Ng(o.serializer,p)})(r,e)}function dR(r,e,t){return r instanceof mu?S0(r,e):r instanceof gu?w0(r,e):t}function A0(r,e){return r instanceof Mh?(function(a){return Zm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(e)?e:{integerValue:0}:null}class Oh extends ef{}class mu extends ef{constructor(e){super(),this.elements=e}}function S0(r,e){const t=b0(e);for(const a of r.elements)t.some((o=>Hi(o,a)))||t.push(a);return{arrayValue:{values:t}}}class gu extends ef{constructor(e){super(),this.elements=e}}function w0(r,e){let t=b0(e);for(const a of r.elements)t=t.filter((o=>!Hi(o,a)));return{arrayValue:{values:t}}}class Mh extends ef{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function SE(r){return St(r.integerValue||r.doubleValue)}function b0(r){return Ig(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function mR(r,e){return r.field.isEqual(e.field)&&(function(a,o){return a instanceof mu&&o instanceof mu||a instanceof gu&&o instanceof gu?Ao(a.elements,o.elements,Hi):a instanceof Mh&&o instanceof Mh?Hi(a.Ae,o.Ae):a instanceof Oh&&o instanceof Oh})(r.transform,e.transform)}class gR{constructor(e,t){this.version=e,this.transformResults=t}}class Wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class tf{}function I0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Og(r.key,Wn.none()):new wu(r.key,r.data,Wn.none());{const t=r.data,a=An.empty();let o=new qt(tn.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new Ta(r.key,a,new kn(o.toArray()),Wn.none())}}function pR(r,e,t){r instanceof wu?(function(o,u,f){const p=o.value.clone(),m=bE(o.fieldTransforms,u,f.transformResults);p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Ta?(function(o,u,f){if(!yh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=bE(o.fieldTransforms,u,f.transformResults),m=u.data;m.setAll(R0(o)),m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,t):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,t)}function ru(r,e,t,a){return r instanceof wu?(function(u,f,p,m){if(!yh(u.precondition,f))return p;const g=u.value.clone(),v=IE(u.fieldTransforms,m,f);return g.setAll(v),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(r,e,t,a):r instanceof Ta?(function(u,f,p,m){if(!yh(u.precondition,f))return p;const g=IE(u.fieldTransforms,m,f),v=f.data;return v.setAll(R0(u)),v.setAll(g),f.convertToFoundDocument(f.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,t,a):(function(u,f,p){return yh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,e,t)}function yR(r,e){let t=null;for(const a of r.fieldTransforms){const o=e.data.field(a.field),u=A0(a.transform,o||null);u!=null&&(t===null&&(t=An.empty()),t.set(a.field,u))}return t||null}function wE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&Ao(a,o,((u,f)=>mR(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wu extends tf{constructor(e,t,a,o=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ta extends tf{constructor(e,t,a,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function R0(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const a=r.data.field(t);e.set(t,a)}})),e}function bE(r,e,t){const a=new Map;Qe(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],f=u.transform,p=e.data.field(u.field);a.set(u.field,dR(f,p,t[o]))}return a}function IE(r,e,t){const a=new Map;for(const o of r){const u=o.transform,f=t.data.field(o.field);a.set(o.field,fR(u,f,e))}return a}class Og extends tf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _R extends tf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,t,a,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&pR(u,e,a[o])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=ru(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=ru(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=E0();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=t.has(o.key)?null:p;const m=I0(f,p);m!==null&&a.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(Ee.min())})),a}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ue())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((t,a)=>wE(t,a)))&&Ao(this.baseMutations,e.baseMutations,((t,a)=>wE(t,a)))}}class Mg{constructor(e,t,a,o){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=o}static from(e,t,a){Qe(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let o=(function(){return oR})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,a[f].version);return new Mg(e,t,a,o)}}/**
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
 */class ER{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,Be;function AR(r){switch(r){case J.OK:return pe(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return pe(15467,{code:r})}}function C0(r){if(r===void 0)return _r("GRPC error has no .code"),J.UNKNOWN;switch(r){case kt.OK:return J.OK;case kt.CANCELLED:return J.CANCELLED;case kt.UNKNOWN:return J.UNKNOWN;case kt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case kt.INTERNAL:return J.INTERNAL;case kt.UNAVAILABLE:return J.UNAVAILABLE;case kt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case kt.NOT_FOUND:return J.NOT_FOUND;case kt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case kt.ABORTED:return J.ABORTED;case kt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case kt.DATA_LOSS:return J.DATA_LOSS;default:return pe(39323,{code:r})}}(Be=kt||(kt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SR(){return new TextEncoder}/**
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
 */const wR=new ca([4294967295,4294967295],0);function RE(r){const e=SR().encode(r),t=new jT;return t.update(e),new Uint8Array(t.digest())}function CE(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ca([t,a],0),new ca([o,u],0)]}class kg{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new $l(`Invalid padding: ${t}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new $l(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ca.fromNumber(this.ge)}ye(e,t,a){let o=e.add(t.multiply(ca.fromNumber(a)));return o.compare(wR)===1&&(o=new ca([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=RE(e),[a,o]=CE(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);if(!this.we(f))return!1}return!0}static create(e,t,a){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new kg(u,o,t);return a.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const t=RE(e),[a,o]=CE(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(a,o,u);this.be(f)}}be(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,a,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const o=new Map;return o.set(e,bu.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new nf(Ee.min(),o,new mt(Le),vr(),Ue())}}class bu{constructor(e,t,a,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new bu(a,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,a,o){this.Se=e,this.removedTargetIds=t,this.key=a,this.De=o}}class D0{constructor(e,t){this.targetId=e,this.Ce=t}}class N0{constructor(e,t,a=nn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=o}}class DE{constructor(){this.ve=0,this.Fe=NE(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),t=Ue(),a=Ue();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:a=a.add(o);break;default:pe(38017,{changeType:u})}})),new bu(this.Me,this.xe,e,t,a)}Ke(){this.Oe=!1,this.Fe=NE()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bR{constructor(e){this.Ge=e,this.ze=new Map,this.je=vr(),this.He=ch(),this.Je=ch(),this.Ze=new mt(Le)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const a=this.nt(t);switch(e.state){case 0:this.rt(t)&&a.Le(e.resumeToken);break;case 1:a.We(),a.Ne||a.Ke(),a.Le(e.resumeToken);break;case 2:a.We(),a.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(a.Qe(),a.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),a.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((a,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,a=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(tg(u))if(a===0){const f=new de(u.path);this.et(t,f,on.newNoDocument(f,Ee.min()))}else Qe(a===1,20013,{expectedCount:a});else{const f=this._t(t);if(f!==a){const p=this.ut(e),m=p?this.ct(p,e,f):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=t;let f,p;try{f=pa(a).toUint8Array()}catch(m){if(m instanceof n0)return us("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new kg(f,o,u)}catch(m){return us(m instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,a){return t.Ce.count===a-this.Pt(e,t.targetId)?0:2}Pt(e,t){const a=this.Ge.getRemoteKeysForTarget(t);let o=0;return a.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&tg(p.target)){const m=new de(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,on.newNoDocument(m,e))}u.Be&&(t.set(f,u.ke()),u.Ke())}}));let a=Ue();this.Je.forEach(((u,f)=>{let p=!0;f.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new nf(e,t,this.Ze,this.je,a);return this.je=vr(),this.He=ch(),this.Je=ch(),this.Ze=new mt(Le),o}Ye(e,t){if(!this.rt(e))return;const a=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,a),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,a){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),a&&(this.je=this.je.insert(t,a))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new DE,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new qt(Le),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new qt(Le),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new DE),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ch(){return new mt(de.comparator)}function NE(){return new mt(de.comparator)}const IR={asc:"ASCENDING",desc:"DESCENDING"},RR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CR={and:"AND",or:"OR"};class DR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ig(r,e){return r.useProto3Json||Wh(e)?e:{value:e}}function kh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function NR(r,e){return kh(r,e.toTimestamp())}function zi(r){return Qe(!!r,49232),Ee.fromTimestamp((function(t){const a=ga(t);return new ot(a.seconds,a.nanos)})(r))}function Pg(r,e){return rg(r,e).canonicalString()}function rg(r,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function M0(r){const e=st.fromString(r);return Qe(U0(e),10190,{key:e.toString()}),e}function ag(r,e){return Pg(r.databaseId,e.path)}function Pm(r,e){const t=M0(e);if(t.get(1)!==r.databaseId.projectId)throw new ue(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ue(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(P0(t))}function k0(r,e){return Pg(r.databaseId,e)}function OR(r){const e=M0(r);return e.length===4?st.emptyPath():P0(e)}function sg(r){return new st(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function P0(r){return Qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function OE(r,e,t){return{name:ag(r,e),fields:t.value.mapValue.fields}}function MR(r,e){let t;if("targetChange"in e){e.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:pe(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Qe(v===void 0||typeof v=="string",58123),nn.fromBase64String(v||"")):(Qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),nn.fromUint8Array(v||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(g){const v=g.code===void 0?J.UNKNOWN:C0(g.code);return new ue(v,g.message||"")})(f);t=new N0(a,o,u,p||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const o=Pm(r,a.document.name),u=zi(a.document.updateTime),f=a.document.createTime?zi(a.document.createTime):Ee.min(),p=new An({mapValue:{fields:a.document.fields}}),m=on.newFoundDocument(o,u,f,p),g=a.targetIds||[],v=a.removedTargetIds||[];t=new _h(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const o=Pm(r,a.document),u=a.readTime?zi(a.readTime):Ee.min(),f=on.newNoDocument(o,u),p=a.removedTargetIds||[];t=new _h([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const o=Pm(r,a.document),u=a.removedTargetIds||[];t=new _h([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const a=e.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new TR(o,u),p=a.targetId;t=new D0(p,f)}}return t}function kR(r,e){let t;if(e instanceof wu)t={update:OE(r,e.key,e.value)};else if(e instanceof Og)t={delete:ag(r,e.key)};else if(e instanceof Ta)t={update:OE(r,e.key,e.data),updateMask:qR(e.fieldMask)};else{if(!(e instanceof _R))return pe(16599,{dt:e.type});t={verify:ag(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((a=>(function(u,f){const p=f.transform;if(p instanceof Oh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof mu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof gu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Mh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw pe(20930,{transform:f.transform})})(0,a)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:NR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)})(r,e.precondition)),t}function PR(r,e){return r&&r.length>0?(Qe(e!==void 0,14353),r.map((t=>(function(o,u){let f=o.updateTime?zi(o.updateTime):zi(u);return f.isEqual(Ee.min())&&(f=zi(u)),new gR(f,o.transformResults||[])})(t,e)))):[]}function VR(r,e){return{documents:[k0(r,e.path)]}}function LR(r,e){const t={structuredQuery:{}},a=e.path;let o;e.collectionGroup!==null?(o=a,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=a.popLast(),t.structuredQuery.from=[{collectionId:a.lastSegment()}]),t.parent=k0(r,o);const u=(function(g){if(g.length!==0)return L0(qi.create(g,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:uo(w.field),direction:zR(w.dir)}})(v)))})(e.orderBy);f&&(t.structuredQuery.orderBy=f);const p=ig(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:o}}function UR(r){let e=OR(r.parent);const t=r.structuredQuery,a=t.from?t.from.length:0;let o=null;if(a>0){Qe(a===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=(function(T){const w=V0(T);return w instanceof qi&&f0(w)?w.getFilters():[w]})(t.where));let f=[];t.orderBy&&(f=(function(T){return T.map((w=>(function(H){return new Nh(co(H.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(w)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let w;return w=typeof T=="object"?T.value:T,Wh(w)?null:w})(t.limit));let m=null;t.startAt&&(m=(function(T){const w=!!T.before,P=T.values||[];return new Dh(P,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,P=T.values||[];return new Dh(P,w)})(t.endAt)),eR(e,o,f,u,p,"F",m,g)}function xR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function V0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const a=co(t.unaryFilter.field);return Ht.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return Ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=co(t.unaryFilter.field);return Ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=co(t.unaryFilter.field);return Ht.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Ht.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return qi.create(t.compositeFilter.filters.map((a=>V0(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(r):pe(30097,{filter:r})}function zR(r){return IR[r]}function BR(r){return RR[r]}function HR(r){return CR[r]}function uo(r){return{fieldPath:r.canonicalString()}}function co(r){return tn.fromServerFormat(r.fieldPath)}function L0(r){return r instanceof Ht?(function(t){if(t.op==="=="){if(_E(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(yE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_E(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(yE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:BR(t.op),value:t.value}}})(r):r instanceof qi?(function(t){const a=t.getFilters().map((o=>L0(o)));return a.length===1?a[0]:{compositeFilter:{op:HR(t.op),filters:a}}})(r):pe(54877,{filter:r})}function qR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function U0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function x0(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,a,o,u=Ee.min(),f=Ee.min(),p=nn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new sa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.yt=e}}function jR(r){const e=UR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ng(e,e.limit,"L"):e}/**
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
 */class GR{constructor(){this.Sn=new YR}addToCollectionParentIndex(e,t){return this.Sn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ma.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ma.min())}updateCollectionGroup(e,t,a){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class YR{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t]||new qt(st.comparator),u=!o.has(a);return this.index[t]=o.add(a),u}has(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t];return o&&o.has(a)}getEntries(e){return(this.index[e]||new qt(st.comparator)).toArray()}}/**
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
 */const ME={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},z0=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(z0,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new bo(0)}static ar(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="LruGarbageCollector",QR=1048576;function PE([r,e],[t,a]){const o=Le(r,t);return o===0?Le(e,a):o}class KR{constructor(e){this.Pr=e,this.buffer=new qt(PE),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const a=this.buffer.last();PE(t,a)<0&&(this.buffer=this.buffer.delete(a).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WR{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){se(kE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?se(kE,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Ar(3e5)}))}}class XR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((a=>Math.floor(t/100*a)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Kh.ce);const a=new KR(t);return this.Vr.forEachTarget(e,(o=>a.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>a.Er(o))))).next((()=>a.maxValue))}removeTargets(e,t,a){return this.Vr.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ME)):this.getCacheSize(e).next((a=>a<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ME):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let a,o,u,f,p,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(a=T,p=Date.now(),this.removeTargets(e,a,t)))).next((T=>(u=T,m=Date.now(),this.removeOrphanedDocuments(e,a)))).next((T=>(g=Date.now(),oo()<=Ve.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-v}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function $R(r,e){return new XR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.changes=new fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?$.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t,a,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(a=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(a!==null&&ru(a.mutation,o,kn.empty(),ot.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((a=>this.getLocalViewOfDocuments(e,a,Ue()).next((()=>a))))}getLocalViewOfDocuments(e,t,a=Ue()){const o=ns();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,a).next((u=>{let f=Xl();return u.forEach(((p,m)=>{f=f.insert(p,m.overlayedDocument)})),f}))))}getOverlayedDocuments(e,t){const a=ns();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,Ue())))}populateOverlays(e,t,a){const o=[];return a.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,p)=>{t.set(f,p)}))}))}computeViews(e,t,a,o){let u=vr();const f=iu(),p=(function(){return iu()})();return t.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof Ta)?u=u.insert(g.key,g):v!==void 0?(f.set(g.key,v.mutation.getFieldMask()),ru(v.mutation,g,v.mutation.getFieldMask(),ot.now())):f.set(g.key,kn.empty())})),this.recalculateAndSaveOverlays(e,u).next((m=>(m.forEach(((g,v)=>f.set(g,v))),t.forEach(((g,v)=>p.set(g,new ZR(v,f.get(g)??null)))),p)))}recalculateAndSaveOverlays(e,t){const a=iu();let o=new mt(((f,p)=>f-p)),u=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((f=>{for(const p of f)p.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let v=a.get(m)||kn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const T=(o.get(p.batchId)||Ue()).add(m);o=o.insert(p.batchId,T)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,T=E0();v.forEach((w=>{if(!u.has(w)){const P=I0(t.get(w),a.get(w));P!==null&&T.set(w,P),u=u.add(w)}})),f.push(this.documentOverlayCache.saveOverlays(e,g,T))}return $.waitFor(f)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((a=>this.recalculateAndSaveOverlays(e,a)))}getDocumentsMatchingQuery(e,t,a,o){return tR(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,o):this.getDocumentsMatchingCollectionQuery(e,t,a,o)}getNextDocuments(e,t,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,o-u.size):$.resolve(ns());let p=cu,m=u;return f.next((g=>$.forEach(g,((v,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),u.get(v)?$.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{m=m.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,u))).next((()=>this.computeViews(e,m,g,Ue()))).next((v=>({batchId:p,changes:v0(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((a=>{let o=Xl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,a,o){const u=t.collectionGroup;let f=Xl();return this.indexManager.getCollectionParents(e,u).next((p=>$.forEach(p,(m=>{const g=(function(T,w){return new $h(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,a,o).next((v=>{v.forEach(((T,w)=>{f=f.insert(T,w)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,t,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,u,o)))).next((f=>{u.forEach(((m,g)=>{const v=g.getKey();f.get(v)===null&&(f=f.insert(v,on.newInvalidDocument(v)))}));let p=Xl();return f.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&ru(v.mutation,g,kn.empty(),ot.now()),Zh(t,g)&&(p=p.insert(m,g))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:zi(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:jR(o.bundledQuery),readTime:zi(o.readTime)}})(t)),$.resolve()}}/**
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
 */class n2{constructor(){this.overlays=new mt(de.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const a=ns();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(e,t,a){return a.forEach(((o,u)=>{this.bt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,a){const o=this.Lr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(a)),$.resolve()}getOverlaysForCollection(e,t,a){const o=ns(),u=t.length+1,f=new de(t.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,a,o){let u=new mt(((g,v)=>g-v));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=ns(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=ns(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return $.resolve(p)}bt(e,t,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(a.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new ER(t,a));let u=this.Lr.get(t);u===void 0&&(u=Ue(),this.Lr.set(t,u)),this.Lr.set(t,u.add(a.key))}}/**
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
 */class i2{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.kr=new qt(Yt.Kr),this.qr=new qt(Yt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const a=new Yt(e,t);this.kr=this.kr.add(a),this.qr=this.qr.add(a)}$r(e,t){e.forEach((a=>this.addReference(a,t)))}removeReference(e,t){this.Wr(new Yt(e,t))}Qr(e,t){e.forEach((a=>this.removeReference(a,t)))}Gr(e){const t=new de(new st([])),a=new Yt(t,e),o=new Yt(t,e+1),u=[];return this.qr.forEachInRange([a,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new de(new st([])),a=new Yt(t,e),o=new Yt(t,e+1);let u=Ue();return this.qr.forEachInRange([a,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const t=new Yt(e,0),a=this.kr.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class Yt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return de.comparator(e.key,t.key)||Le(e.Hr,t.Hr)}static Ur(e,t){return Le(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new qt(Yt.Kr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new vR(u,t,a,o);this.mutationQueue.push(f);for(const p of o)this.Jr=this.Jr.add(new Yt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return $.resolve(f)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,o=this.Xr(a),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?wg:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new Yt(t,0),o=new Yt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([a,o],(f=>{const p=this.Zr(f.Hr);u.push(p)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new qt(Le);return t.forEach((o=>{const u=new Yt(o,0),f=new Yt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,f],(p=>{a=a.add(p.Hr)}))})),$.resolve(this.Yr(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,o=a.length+1;let u=a;de.isDocumentKey(u)||(u=u.child(""));const f=new Yt(new de(u),0);let p=new qt(Le);return this.Jr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Hr)),!0)}),f),$.resolve(this.Yr(p))}Yr(e){const t=[];return e.forEach((a=>{const o=this.Zr(a);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Qe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Jr;return $.forEach(t.mutations,(o=>{const u=new Yt(o.key,t.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=a}))}nr(e){}containsKey(e,t){const a=new Yt(t,0),o=this.Jr.firstAfterOrEqual(a);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.ti=e,this.docs=(function(){return new mt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,o=this.docs.get(a),u=o?o.size:0,f=this.ti(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return $.resolve(a?a.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let a=vr();return t.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))})),$.resolve(a)}getDocumentsMatchingQuery(e,t,a,o){let u=vr();const f=t.path,p=new de(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||OI(NI(v),a)<=0||(o.has(v.key)||Zh(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,a,o){pe(9500)}ni(e,t){return $.forEach(this.docs,(a=>t(a)))}newChangeBuffer(e){return new s2(this)}getSize(e){return $.resolve(this.size)}}class s2 extends JR{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(a)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.persistence=e,this.ri=new fs((t=>Rg(t)),Cg),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Vg,this.targetCount=0,this.oi=bo._r()}forEachTarget(e,t){return this.ri.forEach(((a,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,a){let o=0;const u=[];return this.ri.forEach(((f,p)=>{p.sequenceNumber<=t&&a.get(p.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const a=this.ri.get(t)||null;return $.resolve(a)}addMatchingKeys(e,t,a){return this.si.$r(t,a),$.resolve()}removeMatchingKeys(e,t,a){this.si.Qr(t,a);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const a=this.si.jr(t);return $.resolve(a)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t){this._i={},this.overlays={},this.ai=new Kh(0),this.ui=!1,this.ui=!0,this.ci=new i2,this.referenceDelegate=e(this),this.li=new o2(this),this.indexManager=new GR,this.remoteDocumentCache=(function(o){return new a2(o)})((a=>this.referenceDelegate.hi(a))),this.serializer=new FR(t),this.Pi=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this._i[e.toKey()];return a||(a=new r2(t,this.referenceDelegate),this._i[e.toKey()]=a),a}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,a){se("MemoryPersistence","Starting transaction:",e);const o=new l2(this.ai.next());return this.referenceDelegate.Ti(),a(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this._i).map((a=>()=>a.containsKey(e,t))))}}class l2 extends kI{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Ri=new Vg,this.Ai=null}static Vi(e){return new Lg(e)}get di(){if(this.Ai)return this.Ai;throw pe(60996)}addReference(e,t,a){return this.Ri.addReference(a,t),this.di.delete(a.toString()),$.resolve()}removeReference(e,t,a){return this.Ri.removeReference(a,t),this.di.add(a.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>a.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(a=>{const o=de.fromPath(a);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((a=>{a?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ph{constructor(e,t){this.persistence=e,this.fi=new fs((a=>LI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=$R(this,t)}static Vi(e,t){return new Ph(e,t)}Ti(){}Ii(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((a=>t.next((o=>a+o))))}pr(e){let t=0;return this.mr(e,(a=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((a,o)=>this.wr(e,a,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,a){return this.persistence.getTargetCache().removeTargets(e,t,a)}removeOrphanedDocuments(e,t){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,t).next((p=>{p||(a++,u.removeEntry(f,Ee.min()))})))).next((()=>u.apply(e))).next((()=>a))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,t,a){return this.fi.set(a,e.currentSequenceNumber),$.resolve()}removeReference(e,t,a){return this.fi.set(a,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gh(e.data.value)),t}wr(e,t,a){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,a,o){this.targetId=e,this.fromCache=t,this.Ts=a,this.Is=o}static Es(e,t){let a=Ue(),o=Ue();for(const u of t.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ug(e,t.fromCache,a,o)}}/**
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
 */class u2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Xw()?8:PI(ln())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,a,o){const u={result:null};return this.gs(e,t).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,t,o,a).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new u2;return this.ys(e,t,f).next((p=>{if(u.result=p,this.As)return this.ws(e,t,f,p.size)}))})).next((()=>u.result))}ws(e,t,a,o){return a.documentReadCount<this.Vs?(oo()<=Ve.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(oo()<=Ve.DEBUG&&se("QueryEngine","Query:",lo(t),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ds*o?(oo()<=Ve.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xi(t))):$.resolve())}gs(e,t){if(AE(t))return $.resolve(null);let a=xi(t);return this.indexManager.getIndexType(e,a).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ng(t,null,"F"),a=xi(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next((u=>{const f=Ue(...u);return this.fs.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,a).next((m=>{const g=this.bs(t,p);return this.Ss(t,g,f,m.readTime)?this.gs(e,ng(t,null,"F")):this.Ds(e,g,t,m)}))))})))))}ps(e,t,a,o){return AE(t)||o.isEqual(Ee.min())?$.resolve(null):this.fs.getDocuments(e,a).next((u=>{const f=this.bs(t,u);return this.Ss(t,f,a,o)?$.resolve(null):(oo()<=Ve.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.Ds(e,f,t,DI(o,cu)).next((p=>p)))}))}bs(e,t){let a=new qt(y0(e));return t.forEach(((o,u)=>{Zh(e,u)&&(a=a.add(u))})),a}Ss(e,t,a,o){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,a){return oo()<=Ve.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",lo(t)),this.fs.getDocumentsMatchingQuery(e,t,ma.min(),a)}Ds(e,t,a,o){return this.fs.getDocumentsMatchingQuery(e,a,o).next((u=>(t.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="LocalStore",h2=3e8;class f2{constructor(e,t,a,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new mt(Le),this.Fs=new fs((u=>Rg(u)),Cg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(a)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function d2(r,e,t,a){return new f2(r,e,t,a)}async function H0(r,e){const t=Ae(r);return await t.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return t.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(a)))).next((u=>{const f=[],p=[];let m=Ue();for(const g of o){f.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(a,m).next((g=>({Ns:g,removedBatchIds:f,addedBatchIds:p})))}))}))}function m2(r,e){const t=Ae(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const T=g.batch,w=T.keys();let P=$.resolve();return w.forEach((H=>{P=P.next((()=>v.getEntry(m,H))).next((X=>{const Y=g.docVersions.get(H);Qe(Y!==null,48541),X.version.compareTo(Y)<0&&(T.applyToRemoteDocument(X,g),X.isValidDocument()&&(X.setReadTime(g.commitVersion),v.addEntry(X)))}))})),P.next((()=>p.mutationQueue.removeMutationBatch(m,T)))})(t,a,e,u).next((()=>u.apply(a))).next((()=>t.mutationQueue.performConsistencyCheck(a))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Ue();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(a,o)))}))}function q0(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function g2(r,e){const t=Ae(r),a=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const p=[];e.targetChanges.forEach(((v,T)=>{const w=o.get(T);if(!w)return;p.push(t.li.removeMatchingKeys(u,v.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,v.addedDocuments,T))));let P=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(nn.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):v.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(v.resumeToken,a)),o=o.insert(T,P),(function(X,Y,le){return X.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=h2?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0})(w,P,v)&&p.push(t.li.updateTargetData(u,P))}));let m=vr(),g=Ue();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(p2(u,f,e.documentUpdates).next((v=>{m=v.Bs,g=v.Ls}))),!a.isEqual(Ee.min())){const v=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return $.waitFor(p).next((()=>f.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(t.vs=o,u)))}function p2(r,e,t){let a=Ue(),o=Ue();return t.forEach((u=>a=a.add(u))),e.getEntries(r,a).next((u=>{let f=vr();return t.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(p,m.readTime),f=f.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),f=f.insert(p,m)):se(xg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{Bs:f,Ls:o}}))}function y2(r,e){const t=Ae(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(a=>(e===void 0&&(e=wg),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e))))}function _2(r,e){const t=Ae(r);return t.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return t.li.getTargetData(a,e).next((u=>u?(o=u,$.resolve(o)):t.li.allocateTargetId(a).next((f=>(o=new sa(e,f,"TargetPurposeListen",a.currentSequenceNumber),t.li.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=t.vs.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(a.targetId,a),t.Fs.set(e,a.targetId)),a}))}async function og(r,e,t){const a=Ae(r),o=a.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",u,(f=>a.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!ko(f))throw f;se(xg,`Failed to update sequence numbers for target ${e}: ${f}`)}a.vs=a.vs.remove(e),a.Fs.delete(o.target)}function VE(r,e,t){const a=Ae(r);let o=Ee.min(),u=Ue();return a.persistence.runTransaction("Execute query","readwrite",(f=>(function(m,g,v){const T=Ae(m),w=T.Fs.get(v);return w!==void 0?$.resolve(T.vs.get(w)):T.li.getTargetData(g,v)})(a,f,xi(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.li.getMatchingKeysForTargetId(f,p.targetId).next((m=>{u=m}))})).next((()=>a.Cs.getDocumentsMatchingQuery(f,e,t?o:Ee.min(),t?u:Ue()))).next((p=>(v2(a,rR(e),p),{documents:p,ks:u})))))}function v2(r,e,t){let a=r.Ms.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),r.Ms.set(e,a)}class LE{constructor(){this.activeTargetIds=cR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.vo=new LE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,a){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new LE,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T2{Mo(e){}shutdown(){}}/**
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
 */const UE="ConnectivityMonitor";class xE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){se(UE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){se(UE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hh=null;function lg(){return hh===null?hh=(function(){return 268435456+Math.round(2147483648*Math.random())})():hh++,"0x"+hh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="RestConnection",A2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class S2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${a}/databases/${o}`,this.$o=this.databaseId.database===Rh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Wo(e,t,a,o,u){const f=lg(),p=this.Qo(e,t.toUriEncodedString());se(Vm,`Sending RPC '${e}' ${f}:`,p,a);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,o,u);const{host:g}=new URL(p),v=Co(g);return this.zo(e,p,m,a,v).then((T=>(se(Vm,`Received RPC '${e}' ${f}: `,T),T)),(T=>{throw us(Vm,`RPC '${e}' ${f} failed with error: `,T,"url: ",p,"request:",a),T}))}jo(e,t,a,o,u,f){return this.Wo(e,t,a,o,u)}Go(e,t,a){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),a&&a.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const a=A2[e];let o=`${this.qo}/v1/${t}:${a}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection",Gl=(r,e,t)=>{r.listen(e,(a=>{try{t(a)}catch(o){setTimeout((()=>{throw o}),0)}}))};class mo extends S2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!mo.c_){const e=KT();Gl(e,QT.STAT_EVENT,(t=>{t.stat===Xm.PROXY?se(an,"STAT_EVENT: detected buffering proxy"):t.stat===Xm.NOPROXY&&se(an,"STAT_EVENT: detected no buffering proxy")})),mo.c_=!0}}zo(e,t,a,o,u){const f=lg();return new Promise(((p,m)=>{const g=new GT;g.setWithCredentials(!0),g.listenOnce(YT.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case mh.NO_ERROR:const T=g.getResponseJson();se(an,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(T)),p(T);break;case mh.TIMEOUT:se(an,`RPC '${e}' ${f} timed out`),m(new ue(J.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const w=g.getStatus();if(se(an,`RPC '${e}' ${f} failed with status:`,w,"response text:",g.getResponseText()),w>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const H=P==null?void 0:P.error;if(H&&H.status&&H.message){const X=(function(le){const re=le.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(re)>=0?re:J.UNKNOWN})(H.status);m(new ue(X,H.message))}else m(new ue(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ue(J.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{se(an,`RPC '${e}' ${f} completed.`)}}));const v=JSON.stringify(o);se(an,`RPC '${e}' ${f} sending request:`,o),g.send(t,"POST",v,a,15)}))}T_(e,t,a){const o=lg(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,t,a),p.encodeInitMessageHeaders=!0;const g=u.join("");se(an,`Creating RPC '${e}' stream ${o}: ${g}`,p);const v=f.createWebChannel(g,p);this.I_(v);let T=!1,w=!1;const P=new w2({Ho:H=>{w?se(an,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(T||(se(an,`Opening RPC '${e}' stream ${o} transport.`),v.open(),T=!0),se(an,`RPC '${e}' stream ${o} sending:`,H),v.send(H))},Jo:()=>v.close()});return Gl(v,Wl.EventType.OPEN,(()=>{w||(se(an,`RPC '${e}' stream ${o} transport opened.`),P.i_())})),Gl(v,Wl.EventType.CLOSE,(()=>{w||(w=!0,se(an,`RPC '${e}' stream ${o} transport closed`),P.o_(),this.E_(v))})),Gl(v,Wl.EventType.ERROR,(H=>{w||(w=!0,us(an,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),P.o_(new ue(J.UNAVAILABLE,"The operation could not be completed")))})),Gl(v,Wl.EventType.MESSAGE,(H=>{var X;if(!w){const Y=H.data[0];Qe(!!Y,16349);const le=Y,re=(le==null?void 0:le.error)||((X=le[0])==null?void 0:X.error);if(re){se(an,`RPC '${e}' stream ${o} received error:`,re);const Z=re.status;let me=(function(D){const b=kt[D];if(b!==void 0)return C0(b)})(Z),Re=re.message;Z==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=J.INTERNAL,Re="Unknown error status: "+Z+" with message "+re.message),w=!0,P.o_(new ue(me,Re)),v.close()}else se(an,`RPC '${e}' stream ${o} received:`,Y),P.__(Y)}})),mo.u_(),setTimeout((()=>{P.s_()}),0),P}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,a){super.Go(e,t,a),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return WT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(r){return new mo(r)}function Lm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(r){return new DR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mo.c_=!1;class F0{constructor(e,t,a=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=a,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-a);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="PersistentStream";class j0{constructor(e,t,a,o,u,f,p,m){this.Ci=e,this.b_=a,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new F0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(_r(t.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===t&&this.G_(a,o)}),(a=>{e((()=>{const o=new ue(J.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(e,t){const a=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{a((()=>this.listener.Zo()))})),this.stream.Yo((()=>{a((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(zE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(se(zE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class I2 extends j0{constructor(e,t,a,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,o,f),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=MR(this.serializer,e),a=(function(u){if(!("targetChange"in u))return Ee.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ee.min():f.readTime?zi(f.readTime):Ee.min()})(e);return this.listener.J_(t,a)}Z_(e){const t={};t.database=sg(this.serializer),t.addTarget=(function(u,f){let p;const m=f.target;if(p=tg(m)?{documents:VR(u,m)}:{query:LR(u,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=O0(u,f.resumeToken);const g=ig(u,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(Ee.min())>0){p.readTime=kh(u,f.snapshotVersion.toTimestamp());const g=ig(u,f.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,e);const a=xR(this.serializer,e);a&&(t.labels=a),this.K_(t)}X_(e){const t={};t.database=sg(this.serializer),t.removeTarget=e,this.K_(t)}}class R2 extends j0{constructor(e,t,a,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,o,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=PR(e.writeResults,e.commitTime),a=zi(e.commitTime);return this.listener.na(a,t)}ra(){const e={};e.database=sg(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((a=>kR(this.serializer,a)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{}class D2 extends C2{constructor(e,t,a,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,rg(t,a),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(J.UNKNOWN,u.toString())}))}jo(e,t,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.jo(e,rg(t,a),o,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ue(J.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function N2(r,e,t,a){return new D2(r,e,t,a)}class O2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_r(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class M2{constructor(e,t,a,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{a.enqueueAndForget((async()=>{ds(this)&&(se(cs,"Restarting streams for network reachability change."),await(async function(m){const g=Ae(m);g.Ea.add(4),await Iu(g),g.Va.set("Unknown"),g.Ea.delete(4),await af(g)})(this))}))})),this.Va=new O2(a,o)}}async function af(r){if(ds(r))for(const e of r.Ra)await e(!0)}async function Iu(r){for(const e of r.Ra)await e(!1)}function G0(r,e){const t=Ae(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),qg(t)?Hg(t):Po(t).O_()&&Bg(t,e))}function zg(r,e){const t=Ae(r),a=Po(t);t.Ia.delete(e),a.O_()&&Y0(t,e),t.Ia.size===0&&(a.O_()?a.L_():ds(t)&&t.Va.set("Unknown"))}function Bg(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(r).Z_(e)}function Y0(r,e){r.da.$e(e),Po(r).X_(e)}function Hg(r){r.da=new bR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Po(r).start(),r.Va.ua()}function qg(r){return ds(r)&&!Po(r).x_()&&r.Ia.size>0}function ds(r){return Ae(r).Ea.size===0}function Q0(r){r.da=void 0}async function k2(r){r.Va.set("Online")}async function P2(r){r.Ia.forEach(((e,t)=>{Bg(r,e)}))}async function V2(r,e){Q0(r),qg(r)?(r.Va.ha(e),Hg(r)):r.Va.set("Unknown")}async function L2(r,e,t){if(r.Va.set("Online"),e instanceof N0&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.da.removeTarget(p))})(r,e)}catch(a){se(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Vh(r,a)}else if(e instanceof _h?r.da.Xe(e):e instanceof D0?r.da.st(e):r.da.tt(e),!t.isEqual(Ee.min()))try{const a=await q0(r.localStore);t.compareTo(a)>=0&&await(function(u,f){const p=u.da.Tt(f);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,f))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(nn.EMPTY_BYTE_STRING,v.snapshotVersion)),Y0(u,m);const T=new sa(v.target,m,g,v.sequenceNumber);Bg(u,T)})),u.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(a){se(cs,"Failed to raise snapshot:",a),await Vh(r,a)}}async function Vh(r,e,t){if(!ko(e))throw e;r.Ea.add(1),await Iu(r),r.Va.set("Offline"),t||(t=()=>q0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(cs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await af(r)}))}function K0(r,e){return e().catch((t=>Vh(r,t,e)))}async function sf(r){const e=Ae(r),t=_a(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wg;for(;U2(e);)try{const o=await y2(e.localStore,a);if(o===null){e.Ta.length===0&&t.L_();break}a=o.batchId,x2(e,o)}catch(o){await Vh(e,o)}W0(e)&&X0(e)}function U2(r){return ds(r)&&r.Ta.length<10}function x2(r,e){r.Ta.push(e);const t=_a(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function W0(r){return ds(r)&&!_a(r).x_()&&r.Ta.length>0}function X0(r){_a(r).start()}async function z2(r){_a(r).ra()}async function B2(r){const e=_a(r);for(const t of r.Ta)e.ea(t.mutations)}async function H2(r,e,t){const a=r.Ta.shift(),o=Mg.from(a,e,t);await K0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await sf(r)}async function q2(r,e){e&&_a(r).Y_&&await(async function(a,o){if((function(f){return AR(f)&&f!==J.ABORTED})(o.code)){const u=a.Ta.shift();_a(a).B_(),await K0(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await sf(a)}})(r,e),W0(r)&&X0(r)}async function BE(r,e){const t=Ae(r);t.asyncQueue.verifyOperationInProgress(),se(cs,"RemoteStore received new credentials");const a=ds(t);t.Ea.add(3),await Iu(t),a&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await af(t)}async function F2(r,e){const t=Ae(r);e?(t.Ea.delete(2),await af(t)):e||(t.Ea.add(2),await Iu(t),t.Va.set("Unknown"))}function Po(r){return r.ma||(r.ma=(function(t,a,o){const u=Ae(t);return u.sa(),new I2(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:k2.bind(null,r),Yo:P2.bind(null,r),t_:V2.bind(null,r),J_:L2.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),qg(r)?Hg(r):r.Va.set("Unknown")):(await r.ma.stop(),Q0(r))}))),r.ma}function _a(r){return r.fa||(r.fa=(function(t,a,o){const u=Ae(t);return u.sa(),new R2(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:z2.bind(null,r),t_:q2.bind(null,r),ta:B2.bind(null,r),na:H2.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await sf(r)):(await r.fa.stop(),r.Ta.length>0&&(se(cs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,a,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,o,u){const f=Date.now()+a,p=new Fg(e,t,f,o,u);return p.start(a),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jg(r,e){if(_r("AsyncQueue",`${e}: ${r}`),ko(r))return new ue(J.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{static emptySet(e){return new go(e.comparator)}constructor(e){this.comparator=e?(t,a)=>e(t,a)||de.comparator(t.key,a.key):(t,a)=>de.comparator(t.key,a.key),this.keyedMap=Xl(),this.sortedSet=new mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,a)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new go;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.ga=new mt(de.comparator)}track(e){const t=e.doc.key,a=this.ga.get(t);a?e.type!==0&&a.type===3?this.ga=this.ga.insert(t,e):e.type===3&&a.type!==1?this.ga=this.ga.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ga=this.ga.remove(t):e.type===1&&a.type===2?this.ga=this.ga.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,pa:a}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,a)=>{e.push(a)})),e}}class Io{constructor(e,t,a,o,u,f,p,m,g){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,a,o,u){const f=[];return t.forEach((p=>{f.push({type:0,doc:p})})),new Io(e,t,go.emptySet(t),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==a[o].type||!t[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class G2{constructor(){this.queries=qE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,a){const o=Ae(t),u=o.queries;o.queries=qE(),u.forEach(((f,p)=>{for(const m of p.ba)m.onError(a)}))})(this,new ue(J.ABORTED,"Firestore shutting down"))}}function qE(){return new fs((r=>p0(r)),Jh)}async function $0(r,e){const t=Ae(r);let a=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(a=2):(u=new j2,a=e.Da()?0:1);try{switch(a){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const p=jg(f,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Gg(t)}async function J0(r,e){const t=Ae(r),a=e.query;let o=3;const u=t.queries.get(a);if(u){const f=u.ba.indexOf(e);f>=0&&(u.ba.splice(f,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(a),t.onUnlisten(a,!0);case 1:return t.queries.delete(a),t.onUnlisten(a,!1);case 2:return t.onLastRemoteStoreUnlisten(a);default:return}}function Y2(r,e){const t=Ae(r);let a=!1;for(const o of e){const u=o.query,f=t.queries.get(u);if(f){for(const p of f.ba)p.Fa(o)&&(a=!0);f.wa=o}}a&&Gg(t)}function Q2(r,e,t){const a=Ae(r),o=a.queries.get(e);if(o)for(const u of o.ba)u.onError(t);a.queries.delete(e)}function Gg(r){r.Ca.forEach((e=>{e.next()}))}var ug,FE;(FE=ug||(ug={})).Ma="default",FE.Cache="cache";class Z0{constructor(e,t,a){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(e){if(!this.options.includeMetadataChanges){const a=[];for(const o of e.docChanges)o.type!==3&&a.push(o);e=new Io(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const a=t!=="Offline";return(!this.options.Ka||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ug.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.key=e}}class t1{constructor(e){this.key=e}}class K2{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ue(),this.mutatedKeys=Ue(),this.eu=y0(e),this.tu=new go(this.eu)}get nu(){return this.Za}ru(e,t){const a=t?t.iu:new HE,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const w=o.get(v),P=Zh(this.query,T)?T:null,H=!!w&&this.mutatedKeys.has(w.key),X=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let Y=!1;w&&P?w.data.isEqual(P.data)?H!==X&&(a.track({type:3,doc:P}),Y=!0):this.su(w,P)||(a.track({type:2,doc:P}),Y=!0,(m&&this.eu(P,m)>0||g&&this.eu(P,g)<0)&&(p=!0)):!w&&P?(a.track({type:0,doc:P}),Y=!0):w&&!P&&(a.track({type:1,doc:w}),Y=!0,(m||g)&&(p=!0)),Y&&(P?(f=f.add(P),u=X?u.add(v):u.delete(v)):(f=f.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const v=this.query.limitType==="F"?f.last():f.first();f=f.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:f,iu:a,Ss:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((v,T)=>(function(P,H){const X=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:Y})}};return X(P)-X(H)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(a),o=o??!1;const p=t&&!o?this._u():[],m=this.Ya.size===0&&this.current&&!o?1:0,g=m!==this.Xa;return this.Xa=m,f.length!==0||g?{snapshot:new Io(this.query,e.tu,u,f,e.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new HE,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ue(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Ya=this.Ya.add(a.key))}));const t=[];return e.forEach((a=>{this.Ya.has(a)||t.push(new t1(a))})),this.Ya.forEach((a=>{e.has(a)||t.push(new e1(a))})),t}cu(e){this.Za=e.ks,this.Ya=Ue();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yg="SyncEngine";class W2{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class X2{constructor(e){this.key=e,this.hu=!1}}class $2{constructor(e,t,a,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new fs((p=>p0(p)),Jh),this.Iu=new Map,this.Eu=new Set,this.Ru=new mt(de.comparator),this.Au=new Map,this.Vu=new Vg,this.du={},this.mu=new Map,this.fu=bo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function J2(r,e,t=!0){const a=o1(r);let o;const u=a.Tu.get(e);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await n1(a,e,t,!0),o}async function Z2(r,e){const t=o1(r);await n1(t,e,!0,!1)}async function n1(r,e,t,a){const o=await _2(r.localStore,xi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,t);let p;return a&&(p=await eC(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&t&&G0(r.remoteStore,o),p}async function eC(r,e,t,a,o){r.pu=(T,w,P)=>(async function(X,Y,le,re){let Z=Y.view.ru(le);Z.Ss&&(Z=await VE(X.localStore,Y.query,!1).then((({documents:D})=>Y.view.ru(D,Z))));const me=re&&re.targetChanges.get(Y.targetId),Re=re&&re.targetMismatches.get(Y.targetId)!=null,Oe=Y.view.applyChanges(Z,X.isPrimaryClient,me,Re);return GE(X,Y.targetId,Oe.au),Oe.snapshot})(r,T,w,P);const u=await VE(r.localStore,e,!0),f=new K2(e,u.ks),p=f.ru(u.documents),m=bu.createSynthesizedTargetChangeForCurrentChange(t,a&&r.onlineState!=="Offline",o),g=f.applyChanges(p,r.isPrimaryClient,m);GE(r,t,g.au);const v=new W2(e,t,f);return r.Tu.set(e,v),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function tC(r,e,t){const a=Ae(r),o=a.Tu.get(e),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((f=>!Jh(f,e)))),void a.Tu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await og(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),t&&zg(a.remoteStore,o.targetId),cg(a,o.targetId)})).catch(Mo)):(cg(a,o.targetId),await og(a.localStore,o.targetId,!0))}async function nC(r,e){const t=Ae(r),a=t.Tu.get(e),o=t.Iu.get(a.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(a.targetId),zg(t.remoteStore,a.targetId))}async function iC(r,e,t){const a=cC(r);try{const o=await(function(f,p){const m=Ae(f),g=ot.now(),v=p.reduce(((P,H)=>P.add(H.key)),Ue());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let H=vr(),X=Ue();return m.xs.getEntries(P,v).next((Y=>{H=Y,H.forEach(((le,re)=>{re.isValidDocument()||(X=X.add(le))}))})).next((()=>m.localDocuments.getOverlayedDocuments(P,H))).next((Y=>{T=Y;const le=[];for(const re of p){const Z=yR(re,T.get(re.key).overlayedDocument);Z!=null&&le.push(new Ta(re.key,Z,u0(Z.value.mapValue),Wn.exists(!0)))}return m.mutationQueue.addMutationBatch(P,g,le,p)})).next((Y=>{w=Y;const le=Y.applyToLocalDocumentSet(T,X);return m.documentOverlayCache.saveOverlays(P,Y.batchId,le)}))})).then((()=>({batchId:w.batchId,changes:v0(T)})))})(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),(function(f,p,m){let g=f.du[f.currentUser.toKey()];g||(g=new mt(Le)),g=g.insert(p,m),f.du[f.currentUser.toKey()]=g})(a,o.batchId,t),await Ru(a,o.changes),await sf(a.remoteStore)}catch(o){const u=jg(o,"Failed to persist write");t.reject(u)}}async function i1(r,e){const t=Ae(r);try{const a=await g2(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=t.Au.get(u);f&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qe(f.hu,14607):o.removedDocuments.size>0&&(Qe(f.hu,42227),f.hu=!1))})),await Ru(t,a,e)}catch(a){await Mo(a)}}function jE(r,e,t){const a=Ae(r);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const o=[];a.Tu.forEach(((u,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const m=Ae(f);m.onlineState=p;let g=!1;m.queries.forEach(((v,T)=>{for(const w of T.ba)w.va(p)&&(g=!0)})),g&&Gg(m)})(a.eventManager,e),o.length&&a.Pu.J_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function rC(r,e,t){const a=Ae(r);a.sharedClientState.updateQueryState(e,"rejected",t);const o=a.Au.get(e),u=o&&o.key;if(u){let f=new mt(de.comparator);f=f.insert(u,on.newNoDocument(u,Ee.min()));const p=Ue().add(u),m=new nf(Ee.min(),new Map,new mt(Le),f,p);await i1(a,m),a.Ru=a.Ru.remove(u),a.Au.delete(e),Qg(a)}else await og(a.localStore,e,!1).then((()=>cg(a,e,t))).catch(Mo)}async function aC(r,e){const t=Ae(r),a=e.batch.batchId;try{const o=await m2(t.localStore,e);a1(t,a,null),r1(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await Ru(t,o)}catch(o){await Mo(o)}}async function sC(r,e,t){const a=Ae(r);try{const o=await(function(f,p){const m=Ae(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((T=>(Qe(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,e);a1(a,e,t),r1(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await Ru(a,o)}catch(o){await Mo(o)}}function r1(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function a1(r,e,t){const a=Ae(r);let o=a.du[a.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),a.du[a.currentUser.toKey()]=o}}function cg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const a of r.Iu.get(e))r.Tu.delete(a),t&&r.Pu.yu(a,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((a=>{r.Vu.containsKey(a)||s1(r,a)}))}function s1(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(zg(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),Qg(r))}function GE(r,e,t){for(const a of t)a instanceof e1?(r.Vu.addReference(a.key,e),oC(r,a)):a instanceof t1?(se(Yg,"Document no longer in limbo: "+a.key),r.Vu.removeReference(a.key,e),r.Vu.containsKey(a.key)||s1(r,a.key)):pe(19791,{wu:a})}function oC(r,e){const t=e.key,a=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(a)||(se(Yg,"New document in limbo: "+t),r.Eu.add(a),Qg(r))}function Qg(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new de(st.fromString(e)),a=r.fu.next();r.Au.set(a,new X2(t)),r.Ru=r.Ru.insert(t,a),G0(r.remoteStore,new sa(xi(Dg(t.path)),a,"TargetPurposeLimboResolution",Kh.ce))}}async function Ru(r,e,t){const a=Ae(r),o=[],u=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{f.push(a.pu(m,e,t).then((g=>{var v;if((g||t)&&a.isPrimaryClient){const T=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:v.current;a.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){o.push(g);const T=Ug.Es(m.targetId,g);u.push(T)}})))})),await Promise.all(f),a.Pu.J_(o),await(async function(m,g){const v=Ae(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>$.forEach(g,(w=>$.forEach(w.Ts,(P=>v.persistence.referenceDelegate.addReference(T,w.targetId,P))).next((()=>$.forEach(w.Is,(P=>v.persistence.referenceDelegate.removeReference(T,w.targetId,P)))))))))}catch(T){if(!ko(T))throw T;se(xg,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const P=v.vs.get(w),H=P.snapshotVersion,X=P.withLastLimboFreeSnapshotVersion(H);v.vs=v.vs.insert(w,X)}}})(a.localStore,u))}async function lC(r,e){const t=Ae(r);if(!t.currentUser.isEqual(e)){se(Yg,"User change. New user:",e.toKey());const a=await H0(t.localStore,e);t.currentUser=e,(function(u,f){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new ue(J.CANCELLED,f))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Ru(t,a.Ns)}}function uC(r,e){const t=Ae(r),a=t.Au.get(e);if(a&&a.hu)return Ue().add(a.key);{let o=Ue();const u=t.Iu.get(e);if(!u)return o;for(const f of u){const p=t.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function o1(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=i1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rC.bind(null,e),e.Pu.J_=Y2.bind(null,e.eventManager),e.Pu.yu=Q2.bind(null,e.eventManager),e}function cC(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sC.bind(null,e),e}class Lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return d2(this.persistence,new c2,e.initialUser,this.serializer)}Cu(e){return new B0(Lg.Vi,this.serializer)}Du(e){return new E2}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lh.provider={build:()=>new Lh};class hC extends Lh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Qe(this.persistence.referenceDelegate instanceof Ph,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new WR(a,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new B0((a=>Ph.Vi(a,t)),this.serializer)}}class hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>jE(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await F2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new G2})()}createDatastore(e){const t=rf(e.databaseInfo.databaseId),a=b2(e.databaseInfo);return N2(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return(function(a,o,u,f,p){return new M2(a,o,u,f,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>jE(this.syncEngine,t,0)),(function(){return xE.v()?new xE:new T2})())}createSyncEngine(e,t){return(function(o,u,f,p,m,g,v){const T=new $2(o,u,f,p,m,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);se(cs,"RemoteStore shutting down."),u.Ea.add(5),await Iu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}hg.provider={build:()=>new hg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="FirestoreClient";class fC{constructor(e,t,a,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this._databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=Ag.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async f=>{se(va,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(a,(f=>(se(va,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=jg(t,"Failed to shutdown persistence");e.reject(a)}})),e.promise}}async function Um(r,e){r.asyncQueue.verifyOperationInProgress(),se(va,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let a=t.initialUser;r.setCredentialChangeListener((async o=>{a.isEqual(o)||(await H0(e.localStore,o),a=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function YE(r,e){r.asyncQueue.verifyOperationInProgress();const t=await dC(r);se(va,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((a=>BE(e.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,o)=>BE(e.remoteStore,o))),r._onlineComponents=e}async function dC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(va,"Using user provided OfflineComponentProvider");try{await Um(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;us("Error using user provided cache. Falling back to memory cache: "+t),await Um(r,new Lh)}}else se(va,"Using default OfflineComponentProvider"),await Um(r,new hC(void 0));return r._offlineComponents}async function u1(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(va,"Using user provided OnlineComponentProvider"),await YE(r,r._uninitializedComponentsProvider._online)):(se(va,"Using default OnlineComponentProvider"),await YE(r,new hg))),r._onlineComponents}function mC(r){return u1(r).then((e=>e.syncEngine))}async function c1(r){const e=await u1(r),t=e.eventManager;return t.onListen=J2.bind(null,e.syncEngine),t.onUnlisten=tC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z2.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nC.bind(null,e.syncEngine),t}function gC(r,e,t={}){const a=new gr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,m,g){const v=new l1({next:w=>{v.Nu(),f.enqueueAndForget((()=>J0(u,T)));const P=w.docs.has(p);!P&&w.fromCache?g.reject(new ue(J.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&m&&m.source==="server"?g.reject(new ue(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Z0(Dg(p.path),v,{includeMetadataChanges:!0,Ka:!0});return $0(u,T)})(await c1(r),r.asyncQueue,e,t,a))),a.promise}function pC(r,e,t={}){const a=new gr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,m,g){const v=new l1({next:w=>{v.Nu(),f.enqueueAndForget((()=>J0(u,T))),w.fromCache&&m.source==="server"?g.reject(new ue(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Z0(p,v,{includeMetadataChanges:!0,Ka:!0});return $0(u,T)})(await c1(r),r.asyncQueue,e,t,a))),a.promise}function yC(r,e){const t=new gr;return r.asyncQueue.enqueueAndForget((async()=>iC(await mC(r),e,t))),t.promise}/**
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
 */function h1(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="ComponentProvider",QE=new Map;function vC(r,e,t,a,o){return new zI(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,h1(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firestore.googleapis.com",KE=!0;class WE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=f1,this.ssl=KE}else this.host=e.host,this.ssl=e.ssl??KE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=z0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QR)throw new ue(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h1(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,t,a,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new WE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new WE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new _I;switch(a.type){case"firstParty":return new AI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ue(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const a=QE.get(t);a&&(se(_C,"Removing Datastore"),QE.delete(t),a.terminate())})(this),Promise.resolve()}}function EC(r,e,t,a={}){var g;r=hi(r,of);const o=Co(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(UT(`https://${p}`),xT("Firestore",!0)),u.host!==f1&&u.host!==p&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!ss(m,f)&&(r._setSettings(m),a.mockUserToken)){let v,T;if(typeof a.mockUserToken=="string")v=a.mockUserToken,T=sn.MOCK_USER;else{v=Hw(a.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new ue(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new sn(w)}r._authCredentials=new vI(new $T(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new lf(this.firestore,e,this._query)}}class Lt{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,a){if(Su(t,Lt._jsonSchema))return new Lt(e,a||null,new de(st.fromString(t.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Vt("string",Lt._jsonSchemaVersion),referencePath:Vt("string")};class ha extends lf{constructor(e,t,a){super(e,t,Dg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new de(e))}withConverter(e){return new ha(this.firestore,e,this._path)}}function rP(r,e,...t){if(r=ye(r),JT("collection","path",e),r instanceof of){const a=st.fromString(e,...t);return uE(a),new ha(r,null,a)}{if(!(r instanceof Lt||r instanceof ha))throw new ue(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(st.fromString(e,...t));return uE(a),new ha(r.firestore,null,a)}}function TC(r,e,...t){if(r=ye(r),arguments.length===1&&(e=Ag.newId()),JT("doc","path",e),r instanceof of){const a=st.fromString(e,...t);return lE(a),new Lt(r,null,new de(a))}{if(!(r instanceof Lt||r instanceof ha))throw new ue(J.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(st.fromString(e,...t));return lE(a),new Lt(r.firestore,r instanceof ha?r.converter:null,new de(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="AsyncQueue";class $E{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new F0(this,"async_queue_retry"),this._c=()=>{const a=Lm();a&&se(XE,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const t=Lm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Lm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new gr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;se(XE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,_r("INTERNAL UNHANDLED ERROR: ",JE(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=t,t}enqueueAfterDelay(e,t,a){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Fg.createAndSchedule(this,e,t,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:JE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,a)=>t.targetTimeMs-a.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function JE(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ms extends of{constructor(e,t,a,o){super(e,t,a,o),this.type="firestore",this._queue=new $E,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $E(e),this._firestoreClient=void 0,await e}}}function aP(r,e){const t=typeof r=="object"?r:HT(),a=typeof r=="string"?r:Rh,o=Eg(t,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=zw("firestore");u&&EC(o,...u)}return o}function Kg(r){if(r._terminated)throw new ue(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||AC(r),r._firestoreClient}function AC(r){var a,o,u,f;const e=r._freezeSettings(),t=vC(r._databaseId,((a=r._app)==null?void 0:a.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new fC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(nn.fromBase64String(e))}catch(t){throw new ue(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Kn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Su(e,Kn._jsonSchema))return Kn.fromBase64String(e.bytes)}}Kn._jsonSchemaVersion="firestore/bytes/1.0",Kn._jsonSchema={type:Vt("string",Kn._jsonSchemaVersion),bytes:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bi._jsonSchemaVersion}}static fromJSON(e){if(Su(e,Bi._jsonSchema))return new Bi(e.latitude,e.longitude)}}Bi._jsonSchemaVersion="firestore/geoPoint/1.0",Bi._jsonSchema={type:Vt("string",Bi._jsonSchemaVersion),latitude:Vt("number"),longitude:Vt("number")};/**
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
 */class ci{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ci._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Su(e,ci._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ci(e.vectorValues);throw new ue(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ci._jsonSchemaVersion="firestore/vectorValue/1.0",ci._jsonSchema={type:Vt("string",ci._jsonSchemaVersion),vectorValues:Vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=/^__.*__$/;class wC{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms):new wu(e,this.data,t,this.fieldTransforms)}}class d1{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function m1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{dataSource:r})}}class $g{constructor(e,t,a,o,u,f){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new $g({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),a=this.contextWith({path:t,arrayElement:!1});return a.validatePathSegment(e),a}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),a=this.contextWith({path:t,arrayElement:!1});return a.validatePath(),a}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Uh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(m1(this.dataSource)&&SC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class bC{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||rf(e)}createContext(e,t,a,o=!1){return new $g({dataSource:e,methodName:t,targetDoc:a,path:tn.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jg(r){const e=r._freezeSettings(),t=rf(r._databaseId);return new bC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function g1(r,e,t,a,o,u={}){const f=r.createContext(u.merge||u.mergeFields?2:0,e,t,o);Zg("Data must be an object, but it was:",f,a);const p=p1(a,f);let m,g;if(u.merge)m=new kn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const v=[];for(const T of u.mergeFields){const w=pu(e,T,t);if(!f.contains(w))throw new ue(J.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);v1(v,w)||v.push(w)}m=new kn(v),g=f.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=f.fieldTransforms;return new wC(new An(p),m,g)}class uf extends Xg{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uf}}function IC(r,e,t,a){const o=r.createContext(1,e,t);Zg("Data must be an object, but it was:",o,a);const u=[],f=An.empty();Ea(a,((m,g)=>{const v=_1(e,m,t);g=ye(g);const T=o.childContextForFieldPath(v);if(g instanceof uf)u.push(v);else{const w=cf(g,T);w!=null&&(u.push(v),f.set(v,w))}}));const p=new kn(u);return new d1(f,p,o.fieldTransforms)}function RC(r,e,t,a,o,u){const f=r.createContext(1,e,t),p=[pu(e,a,t)],m=[o];if(u.length%2!=0)throw new ue(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)p.push(pu(e,u[w])),m.push(u[w+1]);const g=[],v=An.empty();for(let w=p.length-1;w>=0;--w)if(!v1(g,p[w])){const P=p[w];let H=m[w];H=ye(H);const X=f.childContextForFieldPath(P);if(H instanceof uf)g.push(P);else{const Y=cf(H,X);Y!=null&&(g.push(P),v.set(P,Y))}}const T=new kn(g);return new d1(v,T,f.fieldTransforms)}function cf(r,e){if(y1(r=ye(r)))return Zg("Unsupported field value:",e,r),p1(r,e);if(r instanceof Xg)return(function(a,o){if(!m1(o.dataSource))throw o.createError(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(a,o){const u=[];let f=0;for(const p of a){let m=cf(p,o.childContextForArray(f));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),f++}return{arrayValue:{values:u}}})(r,e)}return(function(a,o){if((a=ye(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return hR(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ot.fromDate(a);return{timestampValue:kh(o.serializer,u)}}if(a instanceof ot){const u=new ot(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:kh(o.serializer,u)}}if(a instanceof Bi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Kn)return{bytesValue:O0(o.serializer,a._byteString)};if(a instanceof Lt){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.createError(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Pg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof ci)return(function(f,p){const m=f instanceof ci?f.toArray():f;return{mapValue:{fields:{[o0]:{stringValue:l0},[Ch]:{arrayValue:{values:m.map((v=>{if(typeof v!="number")throw p.createError("VectorValues must only contain numeric values.");return Ng(p.serializer,v)}))}}}}}})(a,o);if(x0(a))return a._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Sg(a)}`)})(r,e)}function p1(r,e){const t={};return t0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ea(r,((a,o)=>{const u=cf(o,e.childContextForField(a));u!=null&&(t[a]=u)})),{mapValue:{fields:t}}}function y1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof Bi||r instanceof Kn||r instanceof Lt||r instanceof Xg||r instanceof ci||x0(r))}function Zg(r,e,t){if(!y1(t)||!ZT(t)){const a=Sg(t);throw a==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+a)}}function pu(r,e,t){if((e=ye(e))instanceof Wg)return e._internalPath;if(typeof e=="string")return _1(r,e);throw Uh("Field path arguments must be of type string or ",r,!1,void 0,t)}const CC=new RegExp("[~\\*/\\[\\]]");function _1(r,e,t){if(e.search(CC)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Wg(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Uh(r,e,t,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||f)&&(m+=" (found",u&&(m+=` in field ${a}`),f&&(m+=` in document ${o}`),m+=")"),new ue(J.INVALID_ARGUMENT,p+r+m)}function v1(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{convertValue(e,t="none"){switch(ya(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return Ea(e,((o,u)=>{a[o]=this.convertValue(u,t)})),a}convertVectorValue(e){var a,o,u;const t=(u=(o=(a=e.fields)==null?void 0:a[Ch].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>St(f.doubleValue)));return new ci(t)}convertGeoPoint(e){return new Bi(St(e.latitude),St(e.longitude))}convertArray(e,t){return(e.values||[]).map((a=>this.convertValue(a,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const a=Xh(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(hu(e));default:return null}}convertTimestamp(e){const t=ga(e);return new ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=st.fromString(e);Qe(U0(a),9688,{name:e});const o=new fu(a.get(1),a.get(3)),u=new de(a.popFirst(5));return o.isEqual(t)||_r(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class E1 extends DC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}const ZE="@firebase/firestore",eT="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t,a,o,u){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(pu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NC extends T1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function A1(r,e,t){let a;return a=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,a}class Jl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends T1{constructor(e,t,a,o,u,f){super(e,t,a,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(pu("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:Vt("string",rs._jsonSchemaVersion),bundleSource:Vt("string","DocumentSnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class vh extends rs{data(e={}){return super.data(e)}}class po{constructor(e,t,a,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Jl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((a=>{e.call(t,new vh(this._firestore,this._userDataWriter,a.key,a,new Jl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Jl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new vh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Jl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),v=f.indexOf(p.doc.key)),{type:MC(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ag.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:r})}}/**
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
 */po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:Vt("string",po._jsonSchemaVersion),bundleSource:Vt("string","QuerySnapshot"),bundleName:Vt("string"),bundle:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(r){r=hi(r,Lt);const e=hi(r.firestore,ms),t=Kg(e);return gC(t,r._key).then((a=>kC(e,r,a)))}function oP(r){r=hi(r,lf);const e=hi(r.firestore,ms),t=Kg(e),a=new E1(e);return OC(r._query),pC(t,r._query).then((o=>new po(e,a,r,o)))}function lP(r,e,t){r=hi(r,Lt);const a=hi(r.firestore,ms),o=A1(r.converter,e,t),u=Jg(a);return hf(a,[g1(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Wn.none())])}function uP(r,e,t,...a){r=hi(r,Lt);const o=hi(r.firestore,ms),u=Jg(o);let f;return f=typeof(e=ye(e))=="string"||e instanceof Wg?RC(u,"updateDoc",r._key,e,t,a):IC(u,"updateDoc",r._key,e),hf(o,[f.toMutation(r._key,Wn.exists(!0))])}function cP(r){return hf(hi(r.firestore,ms),[new Og(r._key,Wn.none())])}function hP(r,e){const t=hi(r.firestore,ms),a=TC(r),o=A1(r.converter,e),u=Jg(r.firestore);return hf(t,[g1(u,"addDoc",a._key,o,r.converter!==null,{}).toMutation(a._key,Wn.exists(!1))]).then((()=>a))}function hf(r,e){const t=Kg(r);return yC(t,e)}function kC(r,e,t){const a=t.docs.get(e._key),o=new E1(r);return new rs(r,o,e._key,a,new Jl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yI(No),To(new os("firestore",((a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),p=new ms(new EI(a.getProvider("auth-internal")),new SI(f,a.getProvider("app-check-internal")),BI(f,o),f);return u={useFetchStreams:t,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),ua(ZE,eT,e),ua(ZE,eT,"esm2020")})();/**
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
 */const PC={PHONE:"phone",TOTP:"totp"},VC={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},LC={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},UC={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},xC={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function S1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BC=zC,w1=S1,b1=new Au("auth","Firebase",S1()),HC={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new _g("@firebase/auth");function qC(r,...e){xh.logLevel<=Ve.WARN&&xh.warn(`Auth (${No}): ${r}`,...e)}function Eh(r,...e){xh.logLevel<=Ve.ERROR&&xh.error(`Auth (${No}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(r,...e){throw tp(r,...e)}function fn(r,...e){return tp(r,...e)}function ep(r,e,t){const a={...w1(),[e]:t};return new Au("auth","Firebase",a).create(e,{appName:r.name})}function Qt(r){return ep(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vo(r,e,t){const a=t;if(!(e instanceof a))throw a.name!==e.constructor.name&&Sn(r,"argument-error"),ep(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tp(r,...e){if(typeof r!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(t,...a)}return b1.create(r,...e)}function ee(r,e,...t){if(!r)throw tp(e,...t)}function Ui(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Eh(e),new Error(e)}function Er(r,e){r||Ui(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function np(){return tT()==="http:"||tT()==="https:"}function tT(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(np()||Qw()||"connection"in navigator)?navigator.onLine:!0}function jC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Er(t>e,"Short delay should be less than long delay!"),this.isMobile=jw()||Kw()}get(){return FC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(r,e){Er(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QC=new Cu(3e4,6e4);function lt(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ut(r,e,t,a,o={}){return R1(r,o,async()=>{let u={},f={};a&&(e==="GET"?f=a:u={body:JSON.stringify(a)});const p=Do({key:r.config.apiKey,...f}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return Yw()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),I1.fetch()(await C1(r,r.config.apiHost,t,p),g)})}async function R1(r,e,t){r._canInitEmulator=!1;const a={...GC,...e};try{const o=new WC(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Zl(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(r,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw Zl(r,"email-already-in-use",f);if(m==="USER_DISABLED")throw Zl(r,"user-disabled",f);const v=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ep(r,v,g);Sn(r,v)}}catch(o){if(o instanceof Ar)throw o;Sn(r,"network-request-failed",{message:String(o)})}}async function Sr(r,e,t,a,o={}){const u=await ut(r,e,t,a,o);return"mfaPendingCredential"in u&&Sn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function C1(r,e,t,a){const o=`${e}${t}?${a}`,u=r,f=u.config.emulator?ip(r.config,o):`${r.config.apiScheme}://${o}`;return YC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function KC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(fn(this.auth,"network-request-failed")),QC.get())})}}function Zl(r,e,t){const a={appName:r.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const o=fn(r,e,a);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r){return r!==void 0&&r.getResponse!==void 0}function iT(r){return r!==void 0&&r.enterprise!==void 0}class D1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return KC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(r){return(await ut(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function N1(r,e){return ut(r,"GET","/v2/recaptchaConfig",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(r,e){return ut(r,"POST","/v1/accounts:delete",e)}async function JC(r,e){return ut(r,"POST","/v1/accounts:update",e)}async function zh(r,e){return ut(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r,e=!1){return ye(r).getIdToken(e)}async function O1(r,e=!1){const t=ye(r),a=await t.getIdToken(e),o=ff(a);ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:a,authTime:au(xm(o.auth_time)),issuedAtTime:au(xm(o.iat)),expirationTime:au(xm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function xm(r){return Number(r)*1e3}function ff(r){const[e,t,a]=r.split(".");if(e===void 0||t===void 0||a===void 0)return Eh("JWT malformed, contained fewer than 3 sections"),null;try{const o=kT(t);return o?JSON.parse(o):(Eh("Failed to decode base64 JWT payload"),null)}catch(o){return Eh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function rT(r){const e=ff(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(r,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof Ar&&eD(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function eD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=au(this.lastLoginAt),this.creationTime=au(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(r){var T;const e=r.auth,t=await r.getIdToken(),a=await Tr(r,zh(e,{idToken:t}));ee(a==null?void 0:a.users.length,e,"internal-error");const o=a.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?k1(o.providerUserInfo):[],f=nD(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),g=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new fg(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,v)}async function M1(r){const e=ye(r);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nD(r,e){return[...r.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function k1(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(r,e){const t=await R1(r,{},async()=>{const a=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await C1(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:a};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(m.credentials="include"),I1.fetch()(f,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rD(r,e){return ut(r,"POST","/v2/accounts:revokeToken",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=rT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:o,expiresIn:u}=await iD(e,t);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:o,expirationTime:u}=t,f=new yo;return a&&(ee(typeof a=="string","internal-error",{appName:e}),f.refreshToken=a),o&&(ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ee(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return Ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ui{constructor({uid:e,auth:t,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new tD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O1(this,e)}reload(){return M1(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await _u(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Qt(this.auth));const e=await this.getIdToken();return await Tr(this,$C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const a=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,f=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:P,providerData:H,stsTokenManager:X}=t;ee(T&&X,e,"internal-error");const Y=yo.fromJSON(this.name,X);ee(typeof T=="string",e,"internal-error"),ra(a,e.name),ra(o,e.name),ee(typeof w=="boolean",e,"internal-error"),ee(typeof P=="boolean",e,"internal-error"),ra(u,e.name),ra(f,e.name),ra(p,e.name),ra(m,e.name),ra(g,e.name),ra(v,e.name);const le=new ui({uid:T,auth:e,email:o,emailVerified:w,displayName:a,isAnonymous:P,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:Y,createdAt:g,lastLoginAt:v});return H&&Array.isArray(H)&&(le.providerData=H.map(re=>({...re}))),m&&(le._redirectEventId=m),le}static async _fromIdTokenResponse(e,t,a=!1){const o=new yo;o.updateFromServerResponse(t);const u=new ui({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await _u(u),u}static async _fromGetAccountInfoResponse(e,t,a){const o=t.users[0];ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?k1(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new yo;p.updateFromIdToken(a);const m=new ui({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fg(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Map;function dr(r){Er(r instanceof Function,"Expected a class definition");let e=aT.get(r);return e?(Er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,aT.set(r,e),e)}/**
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
 */class P1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}P1.type="NONE";const dg=P1;/**
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
 */function Th(r,e,t){return`firebase:${r}:${e}:${t}`}class _o{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=Th(this.userKey,o.apiKey,u),this.fullPersistenceKey=Th("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zh(this.auth,{idToken:e}).catch(()=>{});return t?ui._fromGetAccountInfoResponse(this.auth,t,e):null}return ui._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new _o(dr(dg),e,a);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||dr(dg);const f=Th(a,e.config.apiKey,e.name);let p=null;for(const g of t)try{const v=await g._get(f);if(v){let T;if(typeof v=="string"){const w=await zh(e,{idToken:v}).catch(()=>{});if(!w)break;T=await ui._fromGetAccountInfoResponse(e,w,v)}else T=ui._fromJSON(e,v);g!==u&&(p=T),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new _o(u,e,a):(u=m[0],p&&await u._set(f,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new _o(u,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B1(e))return"Blackberry";if(H1(e))return"Webos";if(L1(e))return"Safari";if((e.includes("chrome/")||U1(e))&&!e.includes("edge/"))return"Chrome";if(z1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function V1(r=ln()){return/firefox\//i.test(r)}function L1(r=ln()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U1(r=ln()){return/crios\//i.test(r)}function x1(r=ln()){return/iemobile/i.test(r)}function z1(r=ln()){return/android/i.test(r)}function B1(r=ln()){return/blackberry/i.test(r)}function H1(r=ln()){return/webos/i.test(r)}function rp(r=ln()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function aD(r=ln()){var e;return rp(r)&&!!((e=window.navigator)!=null&&e.standalone)}function sD(){return Ww()&&document.documentMode===10}function q1(r=ln()){return rp(r)||z1(r)||H1(r)||B1(r)||/windows phone/i.test(r)||x1(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(r,e=[]){let t;switch(r){case"Browser":t=sT(ln());break;case"Worker":t=`${sT(ln())}-${r}`;break;default:t=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${a}`}/**
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
 */class oD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=u=>new Promise((f,p)=>{try{const m=e(u);f(m)}catch(m){p(m)}});a.onAbort=t,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function lD(r,e={}){return ut(r,"GET","/v2/passwordPolicy",lt(r,e))}/**
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
 */const uD=6;class cD{constructor(e){var a;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((a=e.allowedNonAlphanumericCharacters)==null?void 0:a.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,t,a,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oT(this),this.idTokenSubscription=new oT(this),this.beforeStateQueue=new oD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dr(t)),this._initializationPromise=this.queue(async()=>{var a,o,u;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),(a=this._resolvePersistenceManagerAvailable)==null||a.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zh(this,{idToken:e}),a=await ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(dt(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let a=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!f||f===p)&&(m!=null&&m.user)&&(a=m.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(f){a=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Qt(this));const t=e?ye(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lD(this),t=new cD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Au("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await rD(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dr(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)==null?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,a,o);return()=>{f=!0,m()}}else{const m=e.addObserver(t);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){var t;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(r){return ye(r)}class oT{constructor(e){this.auth=e,this.observer=null,this.addObserver=ib(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fD(r){Du=r}function ap(r){return Du.loadJS(r)}function dD(){return Du.recaptchaV2Script}function mD(){return Du.recaptchaEnterpriseScript}function gD(){return Du.gapiScript}function j1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=500,yD=6e4,fh=1e12;class _D{constructor(e){this.auth=e,this.counter=fh,this._widgets=new Map}render(e,t){const a=this.counter;return this._widgets.set(a,new TD(e,this.auth.name,t||{})),this.counter++,a}reset(e){var a;const t=e||fh;(a=this._widgets.get(t))==null||a.delete(),this._widgets.delete(t)}getResponse(e){var a;const t=e||fh;return((a=this._widgets.get(t))==null?void 0:a.getResponse())||""}async execute(e){var a;const t=e||fh;return(a=this._widgets.get(t))==null||a.execute(),""}}class vD{constructor(){this.enterprise=new ED}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ED{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class TD{constructor(e,t,a){this.params=a,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;ee(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AD(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},yD)},pD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AD(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<r;a++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const SD="recaptcha-enterprise",su="NO_RECAPTCHA";class G1{constructor(e){this.type=SD,this.auth=_t(e)}async verify(e="verify",t=!1){async function a(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{N1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new D1(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,f,p){const m=window.grecaptcha;iT(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(su)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vD().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{a(this.auth).then(p=>{if(!t&&iT(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=mD();m.length!==0&&(m+=p),ap(m).then(()=>{o(p,u,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function Yl(r,e,t,a=!1,o=!1){const u=new G1(r);let f;if(o)f=su;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function fa(r,e,t,a,o){var u,f;if(o==="EMAIL_PASSWORD_PROVIDER")if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const p=await Yl(r,e,t,t==="getOobCode");return a(r,p)}else return a(r,e).catch(async p=>{if(p.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Yl(r,e,t,t==="getOobCode");return a(r,m)}else return Promise.reject(p)});else if(o==="PHONE_PROVIDER")if((f=r._getRecaptchaConfig())!=null&&f.isProviderEnabled("PHONE_PROVIDER")){const p=await Yl(r,e,t);return a(r,p).catch(async m=>{var g;if(((g=r._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await Yl(r,e,t,!1,!0);return a(r,v)}return Promise.reject(m)})}else{const p=await Yl(r,e,t,!1,!0);return a(r,p)}else return Promise.reject(o+" provider is not supported.")}async function Y1(r){const e=_t(r),t=await N1(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),a=new D1(t);e.tenantId==null?e._agentRecaptchaConfig=a:e._tenantRecaptchaConfigs[e.tenantId]=a,a.isAnyProviderEnabled()&&new G1(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(r,e){const t=Eg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ss(u,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function wD(r,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function K1(r,e,t){const a=_t(r);ee(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),u=W1(e),{host:f,port:p}=bD(e),m=p===null?"":`:${p}`,g={url:`${u}//${f}${m}/`},v=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){ee(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ee(ss(g,a.config.emulator)&&ss(v,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=v,a.settings.appVerificationDisabledForTesting=!0,Co(f)?(UT(`${u}//${f}${m}`),xT("Auth",!0)):o||ID()}function W1(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bD(r){const e=W1(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:lT(a.substr(u.length+1))}}else{const[u,f]=a.split(":");return{host:u,port:lT(f)}}}function lT(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ID(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ui("not implemented")}_getIdTokenResponse(e){return Ui("not implemented")}_linkToIdToken(e,t){return Ui("not implemented")}_getReauthenticationResolver(e){return Ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(r,e){return ut(r,"POST","/v1/accounts:resetPassword",lt(r,e))}async function RD(r,e){return ut(r,"POST","/v1/accounts:update",e)}async function CD(r,e){return ut(r,"POST","/v1/accounts:signUp",e)}async function DD(r,e){return ut(r,"POST","/v1/accounts:update",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(r,e){return Sr(r,"POST","/v1/accounts:signInWithPassword",lt(r,e))}async function df(r,e){return ut(r,"POST","/v1/accounts:sendOobCode",lt(r,e))}async function OD(r,e){return df(r,e)}async function MD(r,e){return df(r,e)}async function kD(r,e){return df(r,e)}async function PD(r,e){return df(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(r,e){return Sr(r,"POST","/v1/accounts:signInWithEmailLink",lt(r,e))}async function LD(r,e){return Sr(r,"POST","/v1/accounts:signInWithEmailLink",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Lo{constructor(e,t,a,o=null){super("password",a),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ro(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new Ro(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,t,"signInWithPassword",ND,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VD(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const a={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,a,"signUpPassword",CD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return LD(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(r,e){return Sr(r,"POST","/v1/accounts:signInWithIdp",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="http://localhost";class Fi extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...u}=t;if(!a||!o)return null;const f=new Fi(a,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return pr(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,pr(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pr(e,t)}buildRequest(){const e={requestUri:UD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Do(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(r,e){return ut(r,"POST","/v1/accounts:sendVerificationCode",lt(r,e))}async function xD(r,e){return Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",lt(r,e))}async function zD(r,e){const t=await Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",lt(r,e));if(t.temporaryProof)throw Zl(r,"account-exists-with-different-credential",t);return t}const BD={USER_NOT_FOUND:"user-not-found"};async function HD(r,e){const t={...e,operation:"REAUTH"};return Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",lt(r,t),BD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new da({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new da({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return xD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zD(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return HD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:a,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:a,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:a,phoneNumber:o,temporaryProof:u}=e;return!a&&!t&&!o&&!u?null:new da({verificationId:t,verificationCode:a,phoneNumber:o,temporaryProof:u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FD(r){const e=Ql(Kl(r)).link,t=e?Ql(Kl(e)).deep_link_id:null,a=Ql(Kl(r)).deep_link_id;return(a?Ql(Kl(a)).link:null)||a||t||e||r}class Uo{constructor(e){const t=Ql(Kl(e)),a=t.apiKey??null,o=t.oobCode??null,u=qD(t.mode??null);ee(a&&o&&u,"argument-error"),this.apiKey=a,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=FD(e);try{return new Uo(t)}catch{return null}}}function jD(r){return Uo.parseLink(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.providerId=Aa.PROVIDER_ID}static credential(e,t){return Ro._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=Uo.parseLink(t);return ee(a,"argument-error"),Ro._fromEmailAndCode(e,a.code,a.tenantId)}}Aa.PROVIDER_ID="password";Aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xo extends wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ou extends xo{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ee("providerId"in t&&"signInMethod"in t,"argument-error"),Fi._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return ee(e.idToken||e.accessToken,"argument-error"),Fi._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ou.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ou.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a,oauthTokenSecret:o,pendingToken:u,nonce:f,providerId:p}=e;if(!a&&!o&&!t&&!u||!p)return null;try{return new ou(p)._credential({idToken:t,accessToken:a,nonce:f,pendingToken:u})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends xo{constructor(){super("facebook.com")}static credential(e){return Fi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return cr.credential(t,a)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends xo{constructor(){super("github.com")}static credential(e){return Fi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="http://localhost";class vu extends Lo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return pr(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,pr(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,pendingToken:u}=t;return!a||!o||!u||a!==o?null:new vu(a,u)}static _create(e,t){return new vu(e,t)}buildRequest(){return{requestUri:GD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="saml.";class Bh extends wr{constructor(e){ee(e.startsWith(YD),"argument-error"),super(e)}static credentialFromResult(e){return Bh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Bh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=vu.fromJSON(e);return ee(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:a}=e;if(!t||!a)return null;try{return vu._create(a,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends xo{constructor(){super("twitter.com")}static credential(e,t){return Fi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return fr.credential(t,a)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(r,e){return Sr(r,"POST","/v1/accounts:signUp",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,o=!1){const u=await ui._fromIdTokenResponse(e,a,o),f=cT(a);return new Xn({user:u,providerId:f,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const o=cT(a);return new Xn({user:e,providerId:o,_tokenResponse:a,operationType:t})}}function cT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(r){var o;if(dt(r.app))return Promise.reject(Qt(r));const e=_t(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Xn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await $1(e,{returnSecureToken:!0}),a=await Xn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Ar{constructor(e,t,a,o){super(t.code,t.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Hh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,o){return new Hh(e,t,a,o)}}function J1(r,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hh._fromErrorAndOperation(r,u,e,a):u})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function KD(r,e){const t=ye(r);await mf(!0,t,e);const{providerUserInfo:a}=await JC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),o=Z1(a||[]);return t.providerData=t.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function sp(r,e,t=!1){const a=await Tr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Xn._forOperation(r,"link",a)}async function mf(r,e,t){await _u(e);const a=Z1(e.providerData),o=r===!1?"provider-already-linked":"no-such-provider";ee(a.has(t)===r,e.auth,o)}/**
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
 */async function eA(r,e,t=!1){const{auth:a}=r;if(dt(a.app))return Promise.reject(Qt(a));const o="reauthenticate";try{const u=await Tr(r,J1(a,o,e,r),t);ee(u.idToken,a,"internal-error");const f=ff(u.idToken);ee(f,a,"internal-error");const{sub:p}=f;return ee(r.uid===p,a,"user-mismatch"),Xn._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(r,e,t=!1){if(dt(r.app))return Promise.reject(Qt(r));const a="signIn",o=await J1(r,a,e),u=await Xn._fromIdTokenResponse(r,a,o);return t||await r._updateCurrentUser(u.user),u}async function gf(r,e){return tA(_t(r),e)}async function nA(r,e){const t=ye(r);return await mf(!1,t,e.providerId),sp(t,e)}async function iA(r,e){return eA(ye(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(r,e){return Sr(r,"POST","/v1/accounts:signInWithCustomToken",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(r,e){if(dt(r.app))return Promise.reject(Qt(r));const t=_t(r),a=await WD(t,{token:e,returnSecureToken:!0}),o=await Xn._fromIdTokenResponse(t,"signIn",a);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?op._fromServerResponse(e,t):"totpInfo"in t?lp._fromServerResponse(e,t):Sn(e,"internal-error")}}class op extends Nu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new op(t)}}class lp extends Nu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new lp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(r,e,t){var a;ee(((a=t.url)==null?void 0:a.length)>0,r,"invalid-continue-uri"),ee(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),ee(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ee(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ee(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(r){const e=_t(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $D(r,e,t){const a=_t(r),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&pf(a,o,t),await fa(a,o,"getOobCode",MD,"EMAIL_PASSWORD_PROVIDER")}async function JD(r,e,t){await X1(ye(r),{oobCode:e,newPassword:t}).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&up(r),a})}async function ZD(r,e){await DD(ye(r),{oobCode:e})}async function rA(r,e){const t=ye(r),a=await X1(t,{oobCode:e}),o=a.requestType;switch(ee(o,t,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ee(a.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ee(a.mfaInfo,t,"internal-error");default:ee(a.email,t,"internal-error")}let u=null;return a.mfaInfo&&(u=Nu._fromServerResponse(_t(t),a.mfaInfo)),{data:{email:(a.requestType==="VERIFY_AND_CHANGE_EMAIL"?a.newEmail:a.email)||null,previousEmail:(a.requestType==="VERIFY_AND_CHANGE_EMAIL"?a.email:a.newEmail)||null,multiFactorInfo:u},operation:o}}async function eN(r,e){const{data:t}=await rA(ye(r),e);return t.email}async function tN(r,e,t){if(dt(r.app))return Promise.reject(Qt(r));const a=_t(r),f=await fa(a,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$1,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&up(r),m}),p=await Xn._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(p.user),p}function nN(r,e,t){return dt(r.app)?Promise.reject(Qt(r)):gf(ye(r),Aa.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&up(r),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(r,e,t){const a=_t(r),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,p){ee(p.handleCodeInApp,a,"argument-error"),p&&pf(a,f,p)}u(o,t),await fa(a,o,"getOobCode",kD,"EMAIL_PASSWORD_PROVIDER")}function rN(r,e){const t=Uo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function aN(r,e,t){if(dt(r.app))return Promise.reject(Qt(r));const a=ye(r),o=Aa.credentialWithLink(e,t||yu());return ee(o._tenantId===(a.tenantId||null),a,"tenant-id-mismatch"),gf(a,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(r,e){return ut(r,"POST","/v1/accounts:createAuthUri",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(r,e){const t=np()?yu():"http://localhost",a={identifier:e,continueUri:t},{signinMethods:o}=await sN(ye(r),a);return o||[]}async function lN(r,e){const t=ye(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&pf(t.auth,o,e);const{email:u}=await OD(t.auth,o);u!==r.email&&await r.reload()}async function uN(r,e,t){const a=ye(r),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&pf(a.auth,u,t);const{email:f}=await PD(a.auth,u);f!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(r,e){return ut(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const a=ye(r),u={idToken:await a.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},f=await Tr(a,cN(a.auth,u));a.displayName=f.displayName||null,a.photoURL=f.photoUrl||null;const p=a.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=a.displayName,p.photoURL=a.photoURL),await a._updateTokensIfNecessary(f)}function fN(r,e){const t=ye(r);return dt(t.auth.app)?Promise.reject(Qt(t.auth)):aA(t,e,null)}function dN(r,e){return aA(ye(r),null,e)}async function aA(r,e,t){const{auth:a}=r,u={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(u.email=e),t&&(u.password=t);const f=await Tr(r,RD(a,u));await r._updateTokensIfNecessary(f,!0)}/**
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
 */function mN(r){var o,u;if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},a=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const f=(u=(o=ff(r.idToken))==null?void 0:o.firebase)==null?void 0:u.sign_in_provider;if(f){const p=f!=="anonymous"&&f!=="custom"?f:null;return new vo(a,p)}}if(!e)return null;switch(e){case"facebook.com":return new gN(a,t);case"github.com":return new pN(a,t);case"google.com":return new yN(a,t);case"twitter.com":return new _N(a,t,r.screenName||null);case"custom":case"anonymous":return new vo(a,null);default:return new vo(a,e,t)}}class vo{constructor(e,t,a={}){this.isNewUser=e,this.providerId=t,this.profile=a}}class sA extends vo{constructor(e,t,a,o){super(e,t,a),this.username=o}}class gN extends vo{constructor(e,t){super(e,"facebook.com",t)}}class pN extends sA{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class yN extends vo{constructor(e,t){super(e,"google.com",t)}}class _N extends sA{constructor(e,t,a){super(e,"twitter.com",t,a)}}function vN(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:mN(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(r,e){return ye(r).setPersistence(e)}function TN(r){return Y1(r)}async function AN(r,e){return _t(r).validatePassword(e)}function oA(r,e,t,a){return ye(r).onIdTokenChanged(e,t,a)}function lA(r,e,t){return ye(r).beforeAuthStateChanged(e,t)}function SN(r,e,t,a){return ye(r).onAuthStateChanged(e,t,a)}function wN(r){ye(r).useDeviceLanguage()}function bN(r,e){return ye(r).updateCurrentUser(e)}function IN(r){return ye(r).signOut()}function RN(r,e){return _t(r).revokeAccessToken(e)}async function CN(r){return ye(r).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,a){this.type=e,this.credential=t,this.user=a}static _fromIdtoken(e,t){return new is("enroll",e,t)}static _fromMfaPendingCredential(e){return new is("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,a;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return is._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((a=e.multiFactorSession)!=null&&a.idToken)return is._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,a){this.session=e,this.hints=t,this.signInResolver=a}static _fromError(e,t){const a=_t(e),o=t.customData._serverResponse,u=(o.mfaInfo||[]).map(p=>Nu._fromServerResponse(a,p));ee(o.mfaPendingCredential,a,"internal-error");const f=is._fromMfaPendingCredential(o.mfaPendingCredential);return new cp(f,u,async p=>{const m=await p._process(a,f);delete o.mfaInfo,delete o.mfaPendingCredential;const g={...o,idToken:m.idToken,refreshToken:m.refreshToken};switch(t.operationType){case"signIn":const v=await Xn._fromIdTokenResponse(a,t.operationType,g);return await a._updateCurrentUser(v.user),v;case"reauthenticate":return ee(t.user,a,"internal-error"),Xn._forOperation(t.user,t.operationType,g);default:Sn(a,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function DN(r,e){var o;const t=ye(r),a=e;return ee(e.customData.operationType,t,"argument-error"),ee((o=a.customData._serverResponse)==null?void 0:o.mfaPendingCredential,t,"argument-error"),cp._fromError(t,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r,e){return ut(r,"POST","/v2/accounts/mfaEnrollment:start",lt(r,e))}function NN(r,e){return ut(r,"POST","/v2/accounts/mfaEnrollment:finalize",lt(r,e))}function ON(r,e){return ut(r,"POST","/v2/accounts/mfaEnrollment:start",lt(r,e))}function MN(r,e){return ut(r,"POST","/v2/accounts/mfaEnrollment:finalize",lt(r,e))}function kN(r,e){return ut(r,"POST","/v2/accounts/mfaEnrollment:withdraw",lt(r,e))}class hp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(a=>Nu._fromServerResponse(e.auth,a)))})}static _fromUser(e){return new hp(e)}async getSession(){return is._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const a=e,o=await this.getSession(),u=await Tr(this.user,a._process(this.user.auth,o,t));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,a=await this.user.getIdToken();try{const o=await Tr(this.user,kN(this.user.auth,{idToken:a,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==t),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const zm=new WeakMap;function PN(r){const e=ye(r);return zm.has(e)||zm.set(e,hp._fromUser(e)),zm.get(e)}const qh="__sak";/**
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
 */class uA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qh,"1"),this.storage.removeItem(qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=1e3,LN=10;class cA extends uA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),o=this.localCache[t];a!==o&&e(t,o,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const a=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(a);!t&&this.localCache[a]===f||this.notifyListeners(a,f)},u=this.storage.getItem(a);sD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,LN):o()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cA.type="LOCAL";const hA=cA;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=1e3;function Bm(r){var a;const e=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((a=document.cookie.match(t))==null?void 0:a[1])??null}function Hm(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}class fA{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Hm(e);if(window.cookieStore){const a=await window.cookieStore.get(t);return a==null?void 0:a.value}return Bm(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const a=Hm(e);document.cookie=`${a}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const a=Hm(e);if(window.cookieStore){const p=(g=>{const v=g.changed.find(w=>w.name===a);v&&t(v.value),g.deleted.find(w=>w.name===a)&&t(null)}),m=()=>window.cookieStore.removeEventListener("change",p);return this.listenerUnsubscribes.set(t,m),window.cookieStore.addEventListener("change",p)}let o=Bm(a);const u=setInterval(()=>{const p=Bm(a);p!==o&&(t(p),o=p)},UN),f=()=>clearInterval(u);this.listenerUnsubscribes.set(t,f)}_removeListener(e,t){const a=this.listenerUnsubscribes.get(t);a&&(a(),this.listenerUnsubscribes.delete(t))}}fA.type="COOKIE";const xN=fA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA extends uA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dA.type="SESSION";const fp=dA;/**
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
 */function zN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const a=new yf(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const p=Array.from(f).map(async g=>g(t.origin,u)),m=await zN(p);t.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(r="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class BN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,m)=>{const g=_f("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},a);f={messageChannel:o,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(v),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function HN(r){Pt().location.href=r}/**
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
 */function dp(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function qN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function jN(){return dp()?self:null}/**
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
 */const mA="firebaseLocalStorageDb",GN=1,Fh="firebaseLocalStorage",gA="fbase_key";class Ou{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vf(r,e){return r.transaction([Fh],e?"readwrite":"readonly").objectStore(Fh)}function YN(){const r=indexedDB.deleteDatabase(mA);return new Ou(r).toPromise()}function mg(){const r=indexedDB.open(mA,GN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Fh,{keyPath:gA})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Fh)?e(a):(a.close(),await YN(),e(await mg()))})})}async function fT(r,e,t){const a=vf(r,!0).put({[gA]:e,value:t});return new Ou(a).toPromise()}async function QN(r,e){const t=vf(r,!1).get(e),a=await new Ou(t).toPromise();return a===void 0?null:a.value}function dT(r,e){const t=vf(r,!0).delete(e);return new Ou(t).toPromise()}const KN=800,WN=3;class pA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>WN)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yf._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,a;if(this.activeServiceWorker=await qN(),!this.activeServiceWorker)return;this.sender=new BN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(a=e[0])!=null&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mg();return await fT(e,qh,"1"),await dT(e,qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>fT(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>QN(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=vf(o,!1).getAll();return new Ou(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pA.type="LOCAL";const yA=pA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(r,e){return ut(r,"POST","/v2/accounts/mfaSignIn:start",lt(r,e))}function XN(r,e){return ut(r,"POST","/v2/accounts/mfaSignIn:finalize",lt(r,e))}function $N(r,e){return ut(r,"POST","/v2/accounts/mfaSignIn:finalize",lt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=j1("rcb"),JN=new Cu(3e4,6e4);class ZN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Pt().grecaptcha)!=null&&e.render)}load(e,t=""){return ee(eO(t),e,"argument-error"),this.shouldResolveImmediately(t)&&nT(Pt().grecaptcha)?Promise.resolve(Pt().grecaptcha):new Promise((a,o)=>{const u=Pt().setTimeout(()=>{o(fn(e,"network-request-failed"))},JN.get());Pt()[qm]=()=>{Pt().clearTimeout(u),delete Pt()[qm];const p=Pt().grecaptcha;if(!p||!nT(p)){o(fn(e,"internal-error"));return}const m=p.render;p.render=(g,v)=>{const T=m(g,v);return this.counter++,T},this.hostLanguage=t,a(p)};const f=`${dD()}?${Do({onload:qm,render:"explicit",hl:t})}`;ap(f).catch(()=>{clearTimeout(u),o(fn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Pt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eO(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class tO{async load(e){return new _D(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="recaptcha",nO={theme:"light",type:"image"};class iO{constructor(e,t,a={...nO}){this.parameters=a,this.type=lu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_t(e),this.isInvisible=this.parameters.size==="invisible",ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;ee(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tO:new ZN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),a=t.getResponse(e);return a||new Promise(o=>{const u=f=>{f&&(this.tokenChangeListeners.delete(u),o(f))};this.tokenChangeListeners.add(u),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ee(!this.parameters.sitekey,this.auth,"argument-error"),ee(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(a=>a(t)),typeof e=="function")e(t);else if(typeof e=="string"){const a=Pt()[e];typeof a=="function"&&a(t)}}}assertNotDestroyed(){ee(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ee(np()&&!dp(),this.auth,"internal-error"),await rO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await XC(this.auth);ee(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ee(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function rO(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=da._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function aO(r,e,t){if(dt(r.app))return Promise.reject(Qt(r));const a=_t(r),o=await Ef(a,e,ye(t));return new mp(o,u=>gf(a,u))}async function sO(r,e,t){const a=ye(r);await mf(!1,a,"phone");const o=await Ef(a.auth,e,ye(t));return new mp(o,u=>nA(a,u))}async function oO(r,e,t){const a=ye(r);if(dt(a.auth.app))return Promise.reject(Qt(a.auth));const o=await Ef(a.auth,e,ye(t));return new mp(o,u=>iA(a,u))}async function Ef(r,e,t){var a;if(!r._getRecaptchaConfig())try{await Y1(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){ee(u.type==="enroll",r,"internal-error");const f={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await fa(r,f,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===su){ee((t==null?void 0:t.type)===lu,v,"argument-error");const w=await Fm(v,T,t);return hT(v,w)}return hT(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{ee(u.type==="signin",r,"internal-error");const f=((a=o.multiFactorHint)==null?void 0:a.uid)||o.multiFactorUid;ee(f,r,"missing-multi-factor-info");const p={mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await fa(r,p,"mfaSmsSignIn",async(T,w)=>{if(w.phoneSignInInfo.captchaResponse===su){ee((t==null?void 0:t.type)===lu,T,"argument-error");const P=await Fm(T,w,t);return mT(T,P)}return mT(T,w)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await fa(r,u,"sendVerificationCode",async(g,v)=>{if(v.captchaResponse===su){ee((t==null?void 0:t.type)===lu,g,"argument-error");const T=await Fm(g,v,t);return uT(g,T)}return uT(g,v)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function lO(r,e){const t=ye(r);if(dt(t.auth.app))return Promise.reject(Qt(t.auth));await sp(t,e)}async function Fm(r,e,t){ee(t.type===lu,r,"argument-error");const a=await t.verify();ee(typeof a=="string",r,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,f=o.phoneEnrollmentInfo.captchaResponse,p=o.phoneEnrollmentInfo.clientType,m=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:a,captchaResponse:f,clientType:p,recaptchaVersion:m}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,f=o.phoneSignInInfo.clientType,p=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:u,clientType:f,recaptchaVersion:p}}),o}else return Object.assign(o,{recaptchaToken:a}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.providerId=as.PROVIDER_ID,this.auth=_t(e)}verifyPhoneNumber(e,t){return Ef(this.auth,e,ye(t))}static credential(e,t){return da._fromVerification(e,t)}static credentialFromResult(e){const t=e;return as.credentialFromTaggedObject(t)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:a}=e;return t&&a?da._fromTokenResponse(t,a):null}}as.PROVIDER_ID="phone";as.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function gs(r,e){return e?dr(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class gp extends Lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uO(r){return tA(r.auth,new gp(r),r.bypassAuthState)}function cO(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),eA(t,new gp(r),r.bypassAuthState)}async function hO(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),sp(t,new gp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,t,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:o,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:t,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uO;case"linkViaPopup":case"linkViaRedirect":return hO;case"reauthViaPopup":case"reauthViaRedirect":return cO;default:Sn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=new Cu(2e3,1e4);async function dO(r,e,t){if(dt(r.app))return Promise.reject(fn(r,"operation-not-supported-in-this-environment"));const a=_t(r);Vo(r,e,wr);const o=gs(a,t);return new mr(a,"signInViaPopup",e,o).executeNotNull()}async function mO(r,e,t){const a=ye(r);if(dt(a.auth.app))return Promise.reject(fn(a.auth,"operation-not-supported-in-this-environment"));Vo(a.auth,e,wr);const o=gs(a.auth,t);return new mr(a.auth,"reauthViaPopup",e,o,a).executeNotNull()}async function gO(r,e,t){const a=ye(r);Vo(a.auth,e,wr);const o=gs(a.auth,t);return new mr(a.auth,"linkViaPopup",e,o,a).executeNotNull()}class mr extends _A{constructor(e,t,a,o,u){super(e,t,o,u),this.provider=a,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if((a=(t=this.authWindow)==null?void 0:t.window)!=null&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fO.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="pendingRedirect",Ah=new Map;class yO extends _A{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=Ah.get(this.auth._key());if(!e){try{const a=await _O(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}Ah.set(this.auth._key(),e)}return this.bypassAuthState||Ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _O(r,e){const t=EA(e),a=vA(r);if(!await a._isAvailable())return!1;const o=await a._get(t)==="true";return await a._remove(t),o}async function pp(r,e){return vA(r)._set(EA(e),"true")}function vO(r,e){Ah.set(r._key(),e)}function vA(r){return dr(r._redirectPersistence)}function EA(r){return Th(pO,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(r,e,t){return TO(r,e,t)}async function TO(r,e,t){if(dt(r.app))return Promise.reject(Qt(r));const a=_t(r);Vo(r,e,wr),await a._initializationPromise;const o=gs(a,t);return await pp(o,a),o._openRedirect(a,e,"signInViaRedirect")}function AO(r,e,t){return SO(r,e,t)}async function SO(r,e,t){const a=ye(r);if(Vo(a.auth,e,wr),dt(a.auth.app))return Promise.reject(Qt(a.auth));await a.auth._initializationPromise;const o=gs(a.auth,t);await pp(o,a.auth);const u=await AA(a);return o._openRedirect(a.auth,e,"reauthViaRedirect",u)}function wO(r,e,t){return bO(r,e,t)}async function bO(r,e,t){const a=ye(r);Vo(a.auth,e,wr),await a.auth._initializationPromise;const o=gs(a.auth,t);await mf(!1,a,e.providerId),await pp(o,a.auth);const u=await AA(a);return o._openRedirect(a.auth,e,"linkViaRedirect",u)}async function IO(r,e){return await _t(r)._initializationPromise,TA(r,e,!1)}async function TA(r,e,t=!1){if(dt(r.app))return Promise.reject(Qt(r));const a=_t(r),o=gs(a,e),f=await new yO(a,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await a._persistUserIfCurrent(f.user),await a._setRedirectUser(null,e)),f}async function AA(r){const e=_f(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=600*1e3;class CO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!SA(e)){const o=((a=e.error.code)==null?void 0:a.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RO&&this.cachedEventUids.clear(),this.cachedEventUids.has(gT(e))}saveEventToCache(e){this.cachedEventUids.add(gT(e)),this.lastProcessedEventTime=Date.now()}}function gT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function SA({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SA(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(r,e={}){return ut(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MO=/^https?/;async function kO(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NO(r);for(const t of e)try{if(PO(t))return}catch{}Sn(r,"unauthorized-domain")}function PO(r){const e=yu(),{protocol:t,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&a===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===a}if(!MO.test(t))return!1;if(OO.test(r))return a===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const VO=new Cu(3e4,6e4);function pT(){const r=Pt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function LO(r){return new Promise((e,t)=>{var o,u,f;function a(){pT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pT(),t(fn(r,"network-request-failed"))},timeout:VO.get()})}if((u=(o=Pt().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Pt().gapi)!=null&&f.load)a();else{const p=j1("iframefcb");return Pt()[p]=()=>{gapi.load?a():t(fn(r,"network-request-failed"))},ap(`${gD()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Sh=null,e})}let Sh=null;function UO(r){return Sh=Sh||LO(r),Sh}/**
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
 */const xO=new Cu(5e3,15e3),zO="__/auth/iframe",BO="emulator/auth/iframe",HO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FO(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ip(e,BO):`https://${r.config.authDomain}/${zO}`,a={apiKey:e.apiKey,appName:r.name,v:No},o=qO.get(r.config.apiHost);o&&(a.eid=o);const u=r._getFrameworks();return u.length&&(a.fw=u.join(",")),`${t}?${Do(a).slice(1)}`}async function jO(r){const e=await UO(r),t=Pt().gapi;return ee(t,r,"internal-error"),e.open({where:document.body,url:FO(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HO,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const f=fn(r,"network-request-failed"),p=Pt().setTimeout(()=>{u(f)},xO.get());function m(){Pt().clearTimeout(p),o(a)}a.ping(m).then(m,()=>{u(f)})}))}/**
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
 */const GO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YO=500,QO=600,KO="_blank",WO="http://localhost";class yT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XO(r,e,t,a=YO,o=QO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const m={...GO,width:a.toString(),height:o.toString(),top:u,left:f},g=ln().toLowerCase();t&&(p=U1(g)?KO:t),V1(g)&&(e=e||WO,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[P,H])=>`${w}${P}=${H},`,"");if(aD(g)&&p!=="_self")return $O(e||"",p),new yT(null);const T=window.open(e||"",p,v);ee(T,r,"popup-blocked");try{T.focus()}catch{}return new yT(T)}function $O(r,e){const t=document.createElement("a");t.href=r,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const JO="__/auth/handler",ZO="emulator/auth/handler",eM=encodeURIComponent("fac");async function _T(r,e,t,a,o,u){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:a,v:No,eventId:o};if(e instanceof wr){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",nb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))f[v]=T}if(e instanceof xo){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(f.scopes=v.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const m=await r._getAppCheckToken(),g=m?`#${eM}=${encodeURIComponent(m)}`:"";return`${tM(r)}?${Do(p).slice(1)}${g}`}function tM({config:r}){return r.emulator?ip(r,ZO):`https://${r.authDomain}/${JO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="webStorageSupport";class nM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fp,this._completeRedirectFn=TA,this._overrideRedirectResult=vO}async _openPopup(e,t,a,o){var f;Er((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await _T(e,t,a,yu(),o);return XO(e,u,_f())}async _openRedirect(e,t,a,o){await this._originValidation(e);const u=await _T(e,t,a,yu(),o);return HN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Er(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await jO(e),a=new CO(e);return t.register("authEvent",o=>(ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jm,{type:jm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[jm];u!==void 0&&t(!!u),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q1()||L1()||rp()}}const wA=nM;class bA{constructor(e){this.factorId=e}_process(e,t,a){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,a);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ui("unexpected MultiFactorSessionType")}}}class yp extends bA{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new yp(e)}_finalizeEnroll(e,t,a){return NN(e,{idToken:t,displayName:a,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return XN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class IA{constructor(){}static assertion(e){return yp._fromCredential(e)}}IA.FACTOR_ID="phone";class RA{static assertionForEnrollment(e,t){return Eu._fromSecret(e,t)}static assertionForSignIn(e,t){return Eu._fromEnrollmentId(e,t)}static async generateSecret(e){var o;const t=e;ee(typeof((o=t.user)==null?void 0:o.auth)<"u","internal-error");const a=await ON(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Tf._fromStartTotpMfaEnrollmentResponse(a,t.user.auth)}}RA.FACTOR_ID="totp";class Eu extends bA{constructor(e,t,a){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=a}static _fromSecret(e,t){return new Eu(t,void 0,e)}static _fromEnrollmentId(e,t){return new Eu(t,e)}async _finalizeEnroll(e,t,a){return ee(typeof this.secret<"u",e,"argument-error"),MN(e,{idToken:t,displayName:a,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){ee(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const a={verificationCode:this.otp};return $N(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:a})}}class Tf{constructor(e,t,a,o,u,f,p){this.sessionInfo=f,this.auth=p,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=a,this.codeIntervalSeconds=o,this.enrollmentCompletionDeadline=u}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Tf(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var o;let a=!1;return(dh(e)||dh(t))&&(a=!0),a&&(dh(e)&&(e=((o=this.auth.currentUser)==null?void 0:o.email)||"unknownuser"),dh(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function dh(r){return typeof r>"u"||(r==null?void 0:r.length)===0}var vT="@firebase/auth",ET="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aM(r){To(new os("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=a.options;ee(f&&!f.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F1(r)},g=new hD(a,o,u,m);return wD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),To(new os("auth-internal",e=>{const t=_t(e.getProvider("auth").getImmediate());return(a=>new iM(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ua(vT,ET,rM(r)),ua(vT,ET,"esm2020")}/**
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
 */const sM=300,oM=LT("authIdTokenMaxAge")||sM;let TT=null;const lM=r=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>oM)return;const o=t==null?void 0:t.token;TT!==o&&(TT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function uM(r=HT()){const e=Eg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Q1(r,{popupRedirectResolver:wA,persistence:[yA,hA,fp]}),a=LT("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const f=lM(u.toString());lA(t,f,()=>f(t.currentUser)),oA(t,p=>f(p))}}const o=PT("auth");return o&&K1(t,`http://${o}`),t}function cM(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}fD({loadJS(r){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=o=>{const u=fn("internal-error");u.customData=o,t(u)},a.type="text/javascript",a.charset="UTF-8",cM().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aM("Browser");const fP=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:xC,ActionCodeURL:Uo,AuthCredential:Lo,AuthErrorCodes:HC,EmailAuthCredential:Ro,EmailAuthProvider:Aa,FacebookAuthProvider:ur,FactorId:PC,GithubAuthProvider:hr,GoogleAuthProvider:cr,OAuthCredential:Fi,OAuthProvider:ou,OperationType:UC,PhoneAuthCredential:da,PhoneAuthProvider:as,PhoneMultiFactorGenerator:IA,ProviderId:VC,RecaptchaVerifier:iO,SAMLAuthProvider:Bh,SignInMethod:LC,TotpMultiFactorGenerator:RA,TotpSecret:Tf,TwitterAuthProvider:fr,applyActionCode:ZD,beforeAuthStateChanged:lA,browserCookiePersistence:xN,browserLocalPersistence:hA,browserPopupRedirectResolver:wA,browserSessionPersistence:fp,checkActionCode:rA,confirmPasswordReset:JD,connectAuthEmulator:K1,createUserWithEmailAndPassword:tN,debugErrorMap:BC,deleteUser:CN,fetchSignInMethodsForEmail:oN,getAdditionalUserInfo:vN,getAuth:uM,getIdToken:ZC,getIdTokenResult:O1,getMultiFactorResolver:DN,getRedirectResult:IO,inMemoryPersistence:dg,indexedDBLocalPersistence:yA,initializeAuth:Q1,initializeRecaptchaConfig:TN,isSignInWithEmailLink:rN,linkWithCredential:nA,linkWithPhoneNumber:sO,linkWithPopup:gO,linkWithRedirect:wO,multiFactor:PN,onAuthStateChanged:SN,onIdTokenChanged:oA,parseActionCodeURL:jD,prodErrorMap:w1,reauthenticateWithCredential:iA,reauthenticateWithPhoneNumber:oO,reauthenticateWithPopup:mO,reauthenticateWithRedirect:AO,reload:M1,revokeAccessToken:RN,sendEmailVerification:lN,sendPasswordResetEmail:$D,sendSignInLinkToEmail:iN,setPersistence:EN,signInAnonymously:QD,signInWithCredential:gf,signInWithCustomToken:XD,signInWithEmailAndPassword:nN,signInWithEmailLink:aN,signInWithPhoneNumber:aO,signInWithPopup:dO,signInWithRedirect:EO,signOut:IN,unlink:KD,updateCurrentUser:bN,updateEmail:fN,updatePassword:dN,updatePhoneNumber:lO,updateProfile:hN,useDeviceLanguage:wN,validatePassword:AN,verifyBeforeUpdateEmail:uN,verifyPasswordResetCode:eN},Symbol.toStringTag,{value:"Module"})),CA=6048e5,hM=864e5,AT=Symbol.for("constructDateFrom");function Pn(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&AT in r?r[AT](e):r instanceof Date?new r.constructor(e):new Date(e)}function dn(r,e){return Pn(e||r,r)}function dP(r,e,t){const a=dn(r,t==null?void 0:t.in);if(isNaN(e))return Pn(r,NaN);if(!e)return a;const o=a.getDate(),u=Pn(r,a.getTime());u.setMonth(a.getMonth()+e+1,0);const f=u.getDate();return o>=f?u:(a.setFullYear(u.getFullYear(),u.getMonth(),o),a)}let fM={};function Af(){return fM}function Tu(r,e){var p,m,g,v;const t=Af(),a=(e==null?void 0:e.weekStartsOn)??((m=(p=e==null?void 0:e.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??t.weekStartsOn??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,o=dn(r,e==null?void 0:e.in),u=o.getDay(),f=(u<a?7:0)+u-a;return o.setDate(o.getDate()-f),o.setHours(0,0,0,0),o}function jh(r,e){return Tu(r,{...e,weekStartsOn:1})}function DA(r,e){const t=dn(r,e==null?void 0:e.in),a=t.getFullYear(),o=Pn(t,0);o.setFullYear(a+1,0,4),o.setHours(0,0,0,0);const u=jh(o),f=Pn(t,0);f.setFullYear(a,0,4),f.setHours(0,0,0,0);const p=jh(f);return t.getTime()>=u.getTime()?a+1:t.getTime()>=p.getTime()?a:a-1}function ST(r){const e=dn(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Sf(r,...e){const t=Pn.bind(null,e.find(a=>typeof a=="object"));return e.map(t)}function Gh(r,e){const t=dn(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function dM(r,e,t){const[a,o]=Sf(t==null?void 0:t.in,r,e),u=Gh(a),f=Gh(o),p=+u-ST(u),m=+f-ST(f);return Math.round((p-m)/hM)}function mM(r,e){const t=DA(r,e),a=Pn(r,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),jh(a)}function gM(r){return Pn(r,Date.now())}function pM(r,e,t){const[a,o]=Sf(t==null?void 0:t.in,r,e);return+Gh(a)==+Gh(o)}function yM(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function _M(r){return!(!yM(r)&&typeof r!="number"||isNaN(+dn(r)))}function mP(r,e){const t=dn(r,e==null?void 0:e.in),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function vM(r,e){const[t,a]=Sf(r,e.start,e.end);return{start:t,end:a}}function gP(r,e){const{start:t,end:a}=vM(e==null?void 0:e.in,r);let o=+t>+a;const u=o?+t:+a,f=o?a:t;f.setHours(0,0,0,0);let p=1;const m=[];for(;+f<=u;)m.push(Pn(t,f)),f.setDate(f.getDate()+p),f.setHours(0,0,0,0);return o?m.reverse():m}function EM(r,e){const t=dn(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function pP(r,e){const t=e==null?void 0:e.weekStartsOn,a=dn(r,e==null?void 0:e.in),o=a.getDay(),u=(o<t?-7:0)+6-(o-t);return a.setDate(a.getDate()+u),a.setHours(23,59,59,999),a}const TM={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},AM=(r,e,t)=>{let a;const o=TM[r];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+a:a+" ago":a};function Eo(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const SM={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wM={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bM={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},IM={date:Eo({formats:SM,defaultWidth:"full"}),time:Eo({formats:wM,defaultWidth:"full"}),dateTime:Eo({formats:bM,defaultWidth:"full"})},RM={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},CM=(r,e,t,a)=>RM[r];function Vi(r){return(e,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let o;if(a==="formatting"&&r.formattingValues){const f=r.defaultFormattingWidth||r.defaultWidth,p=t!=null&&t.width?String(t.width):f;o=r.formattingValues[p]||r.formattingValues[f]}else{const f=r.defaultWidth,p=t!=null&&t.width?String(t.width):r.defaultWidth;o=r.values[p]||r.values[f]}const u=r.argumentCallback?r.argumentCallback(e):e;return o[u]}}const DM={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},NM={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},OM={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},MM={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kM={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PM={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},VM=(r,e)=>{const t=Number(r),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},LM={ordinalNumber:VM,era:Vi({values:DM,defaultWidth:"wide"}),quarter:Vi({values:NM,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Vi({values:OM,defaultWidth:"wide"}),day:Vi({values:MM,defaultWidth:"wide"}),dayPeriod:Vi({values:kM,defaultWidth:"wide",formattingValues:PM,defaultFormattingWidth:"wide"})};function Li(r){return(e,t={})=>{const a=t.width,o=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],u=e.match(o);if(!u)return null;const f=u[0],p=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],m=Array.isArray(p)?xM(p,T=>T.test(f)):UM(p,T=>T.test(f));let g;g=r.valueCallback?r.valueCallback(m):m,g=t.valueCallback?t.valueCallback(g):g;const v=e.slice(f.length);return{value:g,rest:v}}}function UM(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function xM(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function NA(r){return(e,t={})=>{const a=e.match(r.matchPattern);if(!a)return null;const o=a[0],u=e.match(r.parsePattern);if(!u)return null;let f=r.valueCallback?r.valueCallback(u[0]):u[0];f=t.valueCallback?t.valueCallback(f):f;const p=e.slice(o.length);return{value:f,rest:p}}}const zM=/^(\d+)(th|st|nd|rd)?/i,BM=/\d+/i,HM={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qM={any:[/^b/i,/^(a|c)/i]},FM={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jM={any:[/1/i,/2/i,/3/i,/4/i]},GM={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},YM={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},QM={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},KM={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},WM={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},XM={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$M={ordinalNumber:NA({matchPattern:zM,parsePattern:BM,valueCallback:r=>parseInt(r,10)}),era:Li({matchPatterns:HM,defaultMatchWidth:"wide",parsePatterns:qM,defaultParseWidth:"any"}),quarter:Li({matchPatterns:FM,defaultMatchWidth:"wide",parsePatterns:jM,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Li({matchPatterns:GM,defaultMatchWidth:"wide",parsePatterns:YM,defaultParseWidth:"any"}),day:Li({matchPatterns:QM,defaultMatchWidth:"wide",parsePatterns:KM,defaultParseWidth:"any"}),dayPeriod:Li({matchPatterns:WM,defaultMatchWidth:"any",parsePatterns:XM,defaultParseWidth:"any"})},JM={code:"en-US",formatDistance:AM,formatLong:IM,formatRelative:CM,localize:LM,match:$M,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ZM(r,e){const t=dn(r,e==null?void 0:e.in);return dM(t,EM(t))+1}function e4(r,e){const t=dn(r,e==null?void 0:e.in),a=+jh(t)-+mM(t);return Math.round(a/CA)+1}function OA(r,e){var v,T,w,P;const t=dn(r,e==null?void 0:e.in),a=t.getFullYear(),o=Af(),u=(e==null?void 0:e.firstWeekContainsDate)??((T=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:T.firstWeekContainsDate)??o.firstWeekContainsDate??((P=(w=o.locale)==null?void 0:w.options)==null?void 0:P.firstWeekContainsDate)??1,f=Pn((e==null?void 0:e.in)||r,0);f.setFullYear(a+1,0,u),f.setHours(0,0,0,0);const p=Tu(f,e),m=Pn((e==null?void 0:e.in)||r,0);m.setFullYear(a,0,u),m.setHours(0,0,0,0);const g=Tu(m,e);return+t>=+p?a+1:+t>=+g?a:a-1}function t4(r,e){var p,m,g,v;const t=Af(),a=(e==null?void 0:e.firstWeekContainsDate)??((m=(p=e==null?void 0:e.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??t.firstWeekContainsDate??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,o=OA(r,e),u=Pn((e==null?void 0:e.in)||r,0);return u.setFullYear(o,0,a),u.setHours(0,0,0,0),Tu(u,e)}function n4(r,e){const t=dn(r,e==null?void 0:e.in),a=+Tu(t,e)-+t4(t,e);return Math.round(a/CA)+1}function Je(r,e){const t=r<0?"-":"",a=Math.abs(r).toString().padStart(e,"0");return t+a}const aa={y(r,e){const t=r.getFullYear(),a=t>0?t:1-t;return Je(e==="yy"?a%100:a,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Je(t+1,2)},d(r,e){return Je(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Je(r.getHours()%12||12,e.length)},H(r,e){return Je(r.getHours(),e.length)},m(r,e){return Je(r.getMinutes(),e.length)},s(r,e){return Je(r.getSeconds(),e.length)},S(r,e){const t=e.length,a=r.getMilliseconds(),o=Math.trunc(a*Math.pow(10,t-3));return Je(o,e.length)}},so={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wT={G:function(r,e,t){const a=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(a,{width:"abbreviated"});case"GGGGG":return t.era(a,{width:"narrow"});case"GGGG":default:return t.era(a,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const a=r.getFullYear(),o=a>0?a:1-a;return t.ordinalNumber(o,{unit:"year"})}return aa.y(r,e)},Y:function(r,e,t,a){const o=OA(r,a),u=o>0?o:1-o;if(e==="YY"){const f=u%100;return Je(f,2)}return e==="Yo"?t.ordinalNumber(u,{unit:"year"}):Je(u,e.length)},R:function(r,e){const t=DA(r);return Je(t,e.length)},u:function(r,e){const t=r.getFullYear();return Je(t,e.length)},Q:function(r,e,t){const a=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return Je(a,2);case"Qo":return t.ordinalNumber(a,{unit:"quarter"});case"QQQ":return t.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(a,{width:"wide",context:"formatting"})}},q:function(r,e,t){const a=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return Je(a,2);case"qo":return t.ordinalNumber(a,{unit:"quarter"});case"qqq":return t.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(a,{width:"wide",context:"standalone"})}},M:function(r,e,t){const a=r.getMonth();switch(e){case"M":case"MM":return aa.M(r,e);case"Mo":return t.ordinalNumber(a+1,{unit:"month"});case"MMM":return t.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(a,{width:"wide",context:"formatting"})}},L:function(r,e,t){const a=r.getMonth();switch(e){case"L":return String(a+1);case"LL":return Je(a+1,2);case"Lo":return t.ordinalNumber(a+1,{unit:"month"});case"LLL":return t.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(a,{width:"wide",context:"standalone"})}},w:function(r,e,t,a){const o=n4(r,a);return e==="wo"?t.ordinalNumber(o,{unit:"week"}):Je(o,e.length)},I:function(r,e,t){const a=e4(r);return e==="Io"?t.ordinalNumber(a,{unit:"week"}):Je(a,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):aa.d(r,e)},D:function(r,e,t){const a=ZM(r);return e==="Do"?t.ordinalNumber(a,{unit:"dayOfYear"}):Je(a,e.length)},E:function(r,e,t){const a=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(a,{width:"short",context:"formatting"});case"EEEE":default:return t.day(a,{width:"wide",context:"formatting"})}},e:function(r,e,t,a){const o=r.getDay(),u=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(u);case"ee":return Je(u,2);case"eo":return t.ordinalNumber(u,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(r,e,t,a){const o=r.getDay(),u=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(u);case"cc":return Je(u,e.length);case"co":return t.ordinalNumber(u,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(r,e,t){const a=r.getDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return Je(o,e.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(a,{width:"short",context:"formatting"});case"iiii":default:return t.day(a,{width:"wide",context:"formatting"})}},a:function(r,e,t){const o=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(r,e,t){const a=r.getHours();let o;switch(a===12?o=so.noon:a===0?o=so.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(r,e,t){const a=r.getHours();let o;switch(a>=17?o=so.evening:a>=12?o=so.afternoon:a>=4?o=so.morning:o=so.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let a=r.getHours()%12;return a===0&&(a=12),t.ordinalNumber(a,{unit:"hour"})}return aa.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):aa.H(r,e)},K:function(r,e,t){const a=r.getHours()%12;return e==="Ko"?t.ordinalNumber(a,{unit:"hour"}):Je(a,e.length)},k:function(r,e,t){let a=r.getHours();return a===0&&(a=24),e==="ko"?t.ordinalNumber(a,{unit:"hour"}):Je(a,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):aa.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):aa.s(r,e)},S:function(r,e){return aa.S(r,e)},X:function(r,e,t){const a=r.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return IT(a);case"XXXX":case"XX":return ts(a);case"XXXXX":case"XXX":default:return ts(a,":")}},x:function(r,e,t){const a=r.getTimezoneOffset();switch(e){case"x":return IT(a);case"xxxx":case"xx":return ts(a);case"xxxxx":case"xxx":default:return ts(a,":")}},O:function(r,e,t){const a=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+bT(a,":");case"OOOO":default:return"GMT"+ts(a,":")}},z:function(r,e,t){const a=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+bT(a,":");case"zzzz":default:return"GMT"+ts(a,":")}},t:function(r,e,t){const a=Math.trunc(+r/1e3);return Je(a,e.length)},T:function(r,e,t){return Je(+r,e.length)}};function bT(r,e=""){const t=r>0?"-":"+",a=Math.abs(r),o=Math.trunc(a/60),u=a%60;return u===0?t+String(o):t+String(o)+e+Je(u,2)}function IT(r,e){return r%60===0?(r>0?"-":"+")+Je(Math.abs(r)/60,2):ts(r,e)}function ts(r,e=""){const t=r>0?"-":"+",a=Math.abs(r),o=Je(Math.trunc(a/60),2),u=Je(a%60,2);return t+o+e+u}const RT=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},MA=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},i4=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],a=t[1],o=t[2];if(!o)return RT(r,e);let u;switch(a){case"P":u=e.dateTime({width:"short"});break;case"PP":u=e.dateTime({width:"medium"});break;case"PPP":u=e.dateTime({width:"long"});break;case"PPPP":default:u=e.dateTime({width:"full"});break}return u.replace("{{date}}",RT(a,e)).replace("{{time}}",MA(o,e))},r4={p:MA,P:i4},a4=/^D+$/,s4=/^Y+$/,o4=["D","DD","YY","YYYY"];function l4(r){return a4.test(r)}function u4(r){return s4.test(r)}function c4(r,e,t){const a=h4(r,e,t);if(console.warn(a),o4.includes(r))throw new RangeError(a)}function h4(r,e,t){const a=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const f4=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,d4=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,m4=/^'([^]*?)'?$/,g4=/''/g,p4=/[a-zA-Z]/;function yP(r,e,t){var v,T,w,P,H,X,Y,le;const a=Af(),o=(t==null?void 0:t.locale)??a.locale??JM,u=(t==null?void 0:t.firstWeekContainsDate)??((T=(v=t==null?void 0:t.locale)==null?void 0:v.options)==null?void 0:T.firstWeekContainsDate)??a.firstWeekContainsDate??((P=(w=a.locale)==null?void 0:w.options)==null?void 0:P.firstWeekContainsDate)??1,f=(t==null?void 0:t.weekStartsOn)??((X=(H=t==null?void 0:t.locale)==null?void 0:H.options)==null?void 0:X.weekStartsOn)??a.weekStartsOn??((le=(Y=a.locale)==null?void 0:Y.options)==null?void 0:le.weekStartsOn)??0,p=dn(r,t==null?void 0:t.in);if(!_M(p))throw new RangeError("Invalid time value");let m=e.match(d4).map(re=>{const Z=re[0];if(Z==="p"||Z==="P"){const me=r4[Z];return me(re,o.formatLong)}return re}).join("").match(f4).map(re=>{if(re==="''")return{isToken:!1,value:"'"};const Z=re[0];if(Z==="'")return{isToken:!1,value:y4(re)};if(wT[Z])return{isToken:!0,value:re};if(Z.match(p4))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Z+"`");return{isToken:!1,value:re}});o.localize.preprocessor&&(m=o.localize.preprocessor(p,m));const g={firstWeekContainsDate:u,weekStartsOn:f,locale:o};return m.map(re=>{if(!re.isToken)return re.value;const Z=re.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&u4(Z)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&l4(Z))&&c4(Z,e,String(r));const me=wT[Z[0]];return me(p,Z,o.localize,g)}).join("")}function y4(r){const e=r.match(m4);return e?e[1].replace(g4,"'"):r}function _P(r,e){return dn(r,e==null?void 0:e.in).getDay()}function vP(r,e,t){const[a,o]=Sf(t==null?void 0:t.in,r,e);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}function EP(r,e){return pM(Pn(r,r),gM(r))}const _4={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}},v4=(r,e,t)=>{let a;const o=_4[r];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?a+"內":a+"前":a},E4={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},T4={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},A4={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},S4={date:Eo({formats:E4,defaultWidth:"full"}),time:Eo({formats:T4,defaultWidth:"full"}),dateTime:Eo({formats:A4,defaultWidth:"full"})},w4={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"},b4=(r,e,t,a)=>w4[r],I4={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},R4={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},C4={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},D4={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},N4={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},O4={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},M4=(r,e)=>{const t=Number(r);switch(e==null?void 0:e.unit){case"date":return t+"日";case"hour":return t+"時";case"minute":return t+"分";case"second":return t+"秒";default:return"第 "+t}},k4={ordinalNumber:M4,era:Vi({values:I4,defaultWidth:"wide"}),quarter:Vi({values:R4,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Vi({values:C4,defaultWidth:"wide"}),day:Vi({values:D4,defaultWidth:"wide"}),dayPeriod:Vi({values:N4,defaultWidth:"wide",formattingValues:O4,defaultFormattingWidth:"wide"})},P4=/^(第\s*)?\d+(日|時|分|秒)?/i,V4=/\d+/i,L4={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},U4={any:[/^(前)/i,/^(公元)/i]},x4={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},z4={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},B4={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},H4={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},q4={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},F4={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},j4={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},G4={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},Y4={ordinalNumber:NA({matchPattern:P4,parsePattern:V4,valueCallback:r=>parseInt(r,10)}),era:Li({matchPatterns:L4,defaultMatchWidth:"wide",parsePatterns:U4,defaultParseWidth:"any"}),quarter:Li({matchPatterns:x4,defaultMatchWidth:"wide",parsePatterns:z4,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Li({matchPatterns:B4,defaultMatchWidth:"wide",parsePatterns:H4,defaultParseWidth:"any"}),day:Li({matchPatterns:q4,defaultMatchWidth:"wide",parsePatterns:F4,defaultParseWidth:"any"}),dayPeriod:Li({matchPatterns:j4,defaultMatchWidth:"any",parsePatterns:G4,defaultParseWidth:"any"})},TP={code:"zh-TW",formatDistance:v4,formatLong:S4,formatRelative:b4,localize:k4,match:Y4,options:{weekStartsOn:1,firstWeekContainsDate:4}};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=(...r)=>r.filter((e,t,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=r=>{const e=K4(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=fo.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:o="",children:u,iconNode:f,...p},m)=>fo.createElement("svg",{ref:m,...W4,width:e,height:e,stroke:r,strokeWidth:a?Number(t)*24/Number(e):t,className:kA("lucide",o),...!u&&!X4(p)&&{"aria-hidden":"true"},...p},[...f.map(([g,v])=>fo.createElement(g,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(r,e)=>{const t=fo.forwardRef(({className:a,...o},u)=>fo.createElement($4,{ref:u,iconNode:e,className:kA(`lucide-${Q4(CT(r))}`,`lucide-${r}`,a),...o}));return t.displayName=CT(r),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],AP=_e("arrow-right",J4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],SP=_e("ban",Z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wP=_e("book-open",ek);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],bP=_e("building-2",tk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],IP=_e("calendar",nk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],RP=_e("check",ik);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],CP=_e("chevron-left",rk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],DP=_e("chevron-right",ak);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],NP=_e("circle-alert",sk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],OP=_e("circle-check",ok);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],MP=_e("circle-user",lk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],kP=_e("clock",uk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]],PP=_e("cloud-sun",ck);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],VP=_e("coffee",hk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],LP=_e("copy",fk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],UP=_e("database",dk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xP=_e("external-link",mk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],zP=_e("eye-off",gk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],BP=_e("eye",pk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],HP=_e("globe",yk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],qP=_e("history",_k);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],FP=_e("info",vk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],jP=_e("layout-grid",Ek);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],GP=_e("list",Tk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],YP=_e("lock",Ak);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],QP=_e("log-out",Sk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],KP=_e("mail",wk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],WP=_e("megaphone",bk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],XP=_e("menu",Ik);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],$P=_e("monitor",Rk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],JP=_e("pen",Ck);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ZP=_e("plus",Dk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],eV=_e("qr-code",Nk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],tV=_e("settings-2",Ok);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],nV=_e("settings",Mk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],iV=_e("shield-alert",kk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],rV=_e("shield-check",Pk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],aV=_e("smartphone",Vk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],sV=_e("sparkles",Lk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],oV=_e("sun",Uk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],lV=_e("toggle-left",xk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],uV=_e("toggle-right",zk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],cV=_e("trash-2",Bk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],hV=_e("user-check",Hk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],fV=_e("wifi",qk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dV=_e("x",Fk);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],mV=_e("zap",jk);var Gk=Object.defineProperty,Yh=Object.getOwnPropertySymbols,PA=Object.prototype.hasOwnProperty,VA=Object.prototype.propertyIsEnumerable,DT=(r,e,t)=>e in r?Gk(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,gg=(r,e)=>{for(var t in e||(e={}))PA.call(e,t)&&DT(r,t,e[t]);if(Yh)for(var t of Yh(e))VA.call(e,t)&&DT(r,t,e[t]);return r},pg=(r,e)=>{var t={};for(var a in r)PA.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&Yh)for(var a of Yh(r))e.indexOf(a)<0&&VA.call(r,a)&&(t[a]=r[a]);return t};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var hs;(r=>{const e=class Ne{constructor(m,g,v,T){if(this.version=m,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],m<Ne.MIN_VERSION||m>Ne.MAX_VERSION)throw new RangeError("Version value out of range");if(T<-1||T>7)throw new RangeError("Mask value out of range");this.size=m*4+17;let w=[];for(let H=0;H<this.size;H++)w.push(!1);for(let H=0;H<this.size;H++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const P=this.addEccAndInterleave(v);if(this.drawCodewords(P),T==-1){let H=1e9;for(let X=0;X<8;X++){this.applyMask(X),this.drawFormatBits(X);const Y=this.getPenaltyScore();Y<H&&(T=X,H=Y),this.applyMask(X)}}o(0<=T&&T<=7),this.mask=T,this.applyMask(T),this.drawFormatBits(T),this.isFunction=[]}static encodeText(m,g){const v=r.QrSegment.makeSegments(m);return Ne.encodeSegments(v,g)}static encodeBinary(m,g){const v=r.QrSegment.makeBytes(m);return Ne.encodeSegments([v],g)}static encodeSegments(m,g,v=1,T=40,w=-1,P=!0){if(!(Ne.MIN_VERSION<=v&&v<=T&&T<=Ne.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let H,X;for(H=v;;H++){const Z=Ne.getNumDataCodewords(H,g)*8,me=f.getTotalBits(m,H);if(me<=Z){X=me;break}if(H>=T)throw new RangeError("Data too long")}for(const Z of[Ne.Ecc.MEDIUM,Ne.Ecc.QUARTILE,Ne.Ecc.HIGH])P&&X<=Ne.getNumDataCodewords(H,Z)*8&&(g=Z);let Y=[];for(const Z of m){t(Z.mode.modeBits,4,Y),t(Z.numChars,Z.mode.numCharCountBits(H),Y);for(const me of Z.getData())Y.push(me)}o(Y.length==X);const le=Ne.getNumDataCodewords(H,g)*8;o(Y.length<=le),t(0,Math.min(4,le-Y.length),Y),t(0,(8-Y.length%8)%8,Y),o(Y.length%8==0);for(let Z=236;Y.length<le;Z^=253)t(Z,8,Y);let re=[];for(;re.length*8<Y.length;)re.push(0);return Y.forEach((Z,me)=>re[me>>>3]|=Z<<7-(me&7)),new Ne(H,g,re,w)}getModule(m,g){return 0<=m&&m<this.size&&0<=g&&g<this.size&&this.modules[g][m]}getModules(){return this.modules}drawFunctionPatterns(){for(let v=0;v<this.size;v++)this.setFunctionModule(6,v,v%2==0),this.setFunctionModule(v,6,v%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const m=this.getAlignmentPatternPositions(),g=m.length;for(let v=0;v<g;v++)for(let T=0;T<g;T++)v==0&&T==0||v==0&&T==g-1||v==g-1&&T==0||this.drawAlignmentPattern(m[v],m[T]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(m){const g=this.errorCorrectionLevel.formatBits<<3|m;let v=g;for(let w=0;w<10;w++)v=v<<1^(v>>>9)*1335;const T=(g<<10|v)^21522;o(T>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,a(T,w));this.setFunctionModule(8,7,a(T,6)),this.setFunctionModule(8,8,a(T,7)),this.setFunctionModule(7,8,a(T,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,a(T,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,a(T,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,a(T,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let m=this.version;for(let v=0;v<12;v++)m=m<<1^(m>>>11)*7973;const g=this.version<<12|m;o(g>>>18==0);for(let v=0;v<18;v++){const T=a(g,v),w=this.size-11+v%3,P=Math.floor(v/3);this.setFunctionModule(w,P,T),this.setFunctionModule(P,w,T)}}drawFinderPattern(m,g){for(let v=-4;v<=4;v++)for(let T=-4;T<=4;T++){const w=Math.max(Math.abs(T),Math.abs(v)),P=m+T,H=g+v;0<=P&&P<this.size&&0<=H&&H<this.size&&this.setFunctionModule(P,H,w!=2&&w!=4)}}drawAlignmentPattern(m,g){for(let v=-2;v<=2;v++)for(let T=-2;T<=2;T++)this.setFunctionModule(m+T,g+v,Math.max(Math.abs(T),Math.abs(v))!=1)}setFunctionModule(m,g,v){this.modules[g][m]=v,this.isFunction[g][m]=!0}addEccAndInterleave(m){const g=this.version,v=this.errorCorrectionLevel;if(m.length!=Ne.getNumDataCodewords(g,v))throw new RangeError("Invalid argument");const T=Ne.NUM_ERROR_CORRECTION_BLOCKS[v.ordinal][g],w=Ne.ECC_CODEWORDS_PER_BLOCK[v.ordinal][g],P=Math.floor(Ne.getNumRawDataModules(g)/8),H=T-P%T,X=Math.floor(P/T);let Y=[];const le=Ne.reedSolomonComputeDivisor(w);for(let Z=0,me=0;Z<T;Z++){let Re=m.slice(me,me+X-w+(Z<H?0:1));me+=Re.length;const Oe=Ne.reedSolomonComputeRemainder(Re,le);Z<H&&Re.push(0),Y.push(Re.concat(Oe))}let re=[];for(let Z=0;Z<Y[0].length;Z++)Y.forEach((me,Re)=>{(Z!=X-w||Re>=H)&&re.push(me[Z])});return o(re.length==P),re}drawCodewords(m){if(m.length!=Math.floor(Ne.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let v=this.size-1;v>=1;v-=2){v==6&&(v=5);for(let T=0;T<this.size;T++)for(let w=0;w<2;w++){const P=v-w,X=(v+1&2)==0?this.size-1-T:T;!this.isFunction[X][P]&&g<m.length*8&&(this.modules[X][P]=a(m[g>>>3],7-(g&7)),g++)}}o(g==m.length*8)}applyMask(m){if(m<0||m>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let v=0;v<this.size;v++){let T;switch(m){case 0:T=(v+g)%2==0;break;case 1:T=g%2==0;break;case 2:T=v%3==0;break;case 3:T=(v+g)%3==0;break;case 4:T=(Math.floor(v/3)+Math.floor(g/2))%2==0;break;case 5:T=v*g%2+v*g%3==0;break;case 6:T=(v*g%2+v*g%3)%2==0;break;case 7:T=((v+g)%2+v*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][v]&&T&&(this.modules[g][v]=!this.modules[g][v])}}getPenaltyScore(){let m=0;for(let w=0;w<this.size;w++){let P=!1,H=0,X=[0,0,0,0,0,0,0];for(let Y=0;Y<this.size;Y++)this.modules[w][Y]==P?(H++,H==5?m+=Ne.PENALTY_N1:H>5&&m++):(this.finderPenaltyAddHistory(H,X),P||(m+=this.finderPenaltyCountPatterns(X)*Ne.PENALTY_N3),P=this.modules[w][Y],H=1);m+=this.finderPenaltyTerminateAndCount(P,H,X)*Ne.PENALTY_N3}for(let w=0;w<this.size;w++){let P=!1,H=0,X=[0,0,0,0,0,0,0];for(let Y=0;Y<this.size;Y++)this.modules[Y][w]==P?(H++,H==5?m+=Ne.PENALTY_N1:H>5&&m++):(this.finderPenaltyAddHistory(H,X),P||(m+=this.finderPenaltyCountPatterns(X)*Ne.PENALTY_N3),P=this.modules[Y][w],H=1);m+=this.finderPenaltyTerminateAndCount(P,H,X)*Ne.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let P=0;P<this.size-1;P++){const H=this.modules[w][P];H==this.modules[w][P+1]&&H==this.modules[w+1][P]&&H==this.modules[w+1][P+1]&&(m+=Ne.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((P,H)=>P+(H?1:0),g);const v=this.size*this.size,T=Math.ceil(Math.abs(g*20-v*10)/v)-1;return o(0<=T&&T<=9),m+=T*Ne.PENALTY_N4,o(0<=m&&m<=2568888),m}getAlignmentPatternPositions(){if(this.version==1)return[];{const m=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(m*2-2))*2;let v=[6];for(let T=this.size-7;v.length<m;T-=g)v.splice(1,0,T);return v}}static getNumRawDataModules(m){if(m<Ne.MIN_VERSION||m>Ne.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*m+128)*m+64;if(m>=2){const v=Math.floor(m/7)+2;g-=(25*v-10)*v-55,m>=7&&(g-=36)}return o(208<=g&&g<=29648),g}static getNumDataCodewords(m,g){return Math.floor(Ne.getNumRawDataModules(m)/8)-Ne.ECC_CODEWORDS_PER_BLOCK[g.ordinal][m]*Ne.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][m]}static reedSolomonComputeDivisor(m){if(m<1||m>255)throw new RangeError("Degree out of range");let g=[];for(let T=0;T<m-1;T++)g.push(0);g.push(1);let v=1;for(let T=0;T<m;T++){for(let w=0;w<g.length;w++)g[w]=Ne.reedSolomonMultiply(g[w],v),w+1<g.length&&(g[w]^=g[w+1]);v=Ne.reedSolomonMultiply(v,2)}return g}static reedSolomonComputeRemainder(m,g){let v=g.map(T=>0);for(const T of m){const w=T^v.shift();v.push(0),g.forEach((P,H)=>v[H]^=Ne.reedSolomonMultiply(P,w))}return v}static reedSolomonMultiply(m,g){if(m>>>8||g>>>8)throw new RangeError("Byte out of range");let v=0;for(let T=7;T>=0;T--)v=v<<1^(v>>>7)*285,v^=(g>>>T&1)*m;return o(v>>>8==0),v}finderPenaltyCountPatterns(m){const g=m[1];o(g<=this.size*3);const v=g>0&&m[2]==g&&m[3]==g*3&&m[4]==g&&m[5]==g;return(v&&m[0]>=g*4&&m[6]>=g?1:0)+(v&&m[6]>=g*4&&m[0]>=g?1:0)}finderPenaltyTerminateAndCount(m,g,v){return m&&(this.finderPenaltyAddHistory(g,v),g=0),g+=this.size,this.finderPenaltyAddHistory(g,v),this.finderPenaltyCountPatterns(v)}finderPenaltyAddHistory(m,g){g[0]==0&&(m+=this.size),g.pop(),g.unshift(m)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],r.QrCode=e;function t(p,m,g){if(m<0||m>31||p>>>m)throw new RangeError("Value out of range");for(let v=m-1;v>=0;v--)g.push(p>>>v&1)}function a(p,m){return(p>>>m&1)!=0}function o(p){if(!p)throw new Error("Assertion error")}const u=class yt{constructor(m,g,v){if(this.mode=m,this.numChars=g,this.bitData=v,g<0)throw new RangeError("Invalid argument");this.bitData=v.slice()}static makeBytes(m){let g=[];for(const v of m)t(v,8,g);return new yt(yt.Mode.BYTE,m.length,g)}static makeNumeric(m){if(!yt.isNumeric(m))throw new RangeError("String contains non-numeric characters");let g=[];for(let v=0;v<m.length;){const T=Math.min(m.length-v,3);t(parseInt(m.substring(v,v+T),10),T*3+1,g),v+=T}return new yt(yt.Mode.NUMERIC,m.length,g)}static makeAlphanumeric(m){if(!yt.isAlphanumeric(m))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],v;for(v=0;v+2<=m.length;v+=2){let T=yt.ALPHANUMERIC_CHARSET.indexOf(m.charAt(v))*45;T+=yt.ALPHANUMERIC_CHARSET.indexOf(m.charAt(v+1)),t(T,11,g)}return v<m.length&&t(yt.ALPHANUMERIC_CHARSET.indexOf(m.charAt(v)),6,g),new yt(yt.Mode.ALPHANUMERIC,m.length,g)}static makeSegments(m){return m==""?[]:yt.isNumeric(m)?[yt.makeNumeric(m)]:yt.isAlphanumeric(m)?[yt.makeAlphanumeric(m)]:[yt.makeBytes(yt.toUtf8ByteArray(m))]}static makeEci(m){let g=[];if(m<0)throw new RangeError("ECI assignment value out of range");if(m<128)t(m,8,g);else if(m<16384)t(2,2,g),t(m,14,g);else if(m<1e6)t(6,3,g),t(m,21,g);else throw new RangeError("ECI assignment value out of range");return new yt(yt.Mode.ECI,0,g)}static isNumeric(m){return yt.NUMERIC_REGEX.test(m)}static isAlphanumeric(m){return yt.ALPHANUMERIC_REGEX.test(m)}getData(){return this.bitData.slice()}static getTotalBits(m,g){let v=0;for(const T of m){const w=T.mode.numCharCountBits(g);if(T.numChars>=1<<w)return 1/0;v+=4+w+T.bitData.length}return v}static toUtf8ByteArray(m){m=encodeURI(m);let g=[];for(let v=0;v<m.length;v++)m.charAt(v)!="%"?g.push(m.charCodeAt(v)):(g.push(parseInt(m.substring(v+1,v+3),16)),v+=2);return g}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let f=u;r.QrSegment=u})(hs||(hs={}));(r=>{(e=>{const t=class{constructor(o,u){this.ordinal=o,this.formatBits=u}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(r.QrCode||(r.QrCode={}))})(hs||(hs={}));(r=>{(e=>{const t=class{constructor(o,u){this.modeBits=o,this.numBitsCharCount=u}numCharCountBits(o){return this.numBitsCharCount[Math.floor((o+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(r.QrSegment||(r.QrSegment={}))})(hs||(hs={}));var ho=hs;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Yk={L:ho.QrCode.Ecc.LOW,M:ho.QrCode.Ecc.MEDIUM,Q:ho.QrCode.Ecc.QUARTILE,H:ho.QrCode.Ecc.HIGH},LA=128,UA="L",xA="#FFFFFF",zA="#000000",BA=!1,HA=1,Qk=4,Kk=0,Wk=.1;function qA(r,e=0){const t=[];return r.forEach(function(a,o){let u=null;a.forEach(function(f,p){if(!f&&u!==null){t.push(`M${u+e} ${o+e}h${p-u}v1H${u+e}z`),u=null;return}if(p===a.length-1){if(!f)return;u===null?t.push(`M${p+e},${o+e} h1v1H${p+e}z`):t.push(`M${u+e},${o+e} h${p+1-u}v1H${u+e}z`);return}f&&u===null&&(u=p)})}),t.join("")}function FA(r,e){return r.slice().map((t,a)=>a<e.y||a>=e.y+e.h?t:t.map((o,u)=>u<e.x||u>=e.x+e.w?o:!1))}function Xk(r,e,t,a){if(a==null)return null;const o=r.length+t*2,u=Math.floor(e*Wk),f=o/e,p=(a.width||u)*f,m=(a.height||u)*f,g=a.x==null?r.length/2-p/2:a.x*f,v=a.y==null?r.length/2-m/2:a.y*f,T=a.opacity==null?1:a.opacity;let w=null;if(a.excavate){let H=Math.floor(g),X=Math.floor(v),Y=Math.ceil(p+g-H),le=Math.ceil(m+v-X);w={x:H,y:X,w:Y,h:le}}const P=a.crossOrigin;return{x:g,y:v,h:m,w:p,excavation:w,opacity:T,crossOrigin:P}}function $k(r,e){return e!=null?Math.max(Math.floor(e),0):r?Qk:Kk}function jA({value:r,level:e,minVersion:t,includeMargin:a,marginSize:o,imageSettings:u,size:f,boostLevel:p}){let m=Bt.useMemo(()=>{const H=(Array.isArray(r)?r:[r]).reduce((X,Y)=>(X.push(...ho.QrSegment.makeSegments(Y)),X),[]);return ho.QrCode.encodeSegments(H,Yk[e],t,void 0,void 0,p)},[r,e,t,p]);const{cells:g,margin:v,numCells:T,calculatedImageSettings:w}=Bt.useMemo(()=>{let P=m.getModules();const H=$k(a,o),X=P.length+H*2,Y=Xk(P,f,H,u);return{cells:P,margin:H,numCells:X,calculatedImageSettings:Y}},[m,f,u,a,o]);return{qrcode:m,margin:v,cells:g,numCells:T,calculatedImageSettings:w}}var Jk=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Zk=Bt.forwardRef(function(e,t){const a=e,{value:o,size:u=LA,level:f=UA,bgColor:p=xA,fgColor:m=zA,includeMargin:g=BA,minVersion:v=HA,boostLevel:T,marginSize:w,imageSettings:P}=a,X=pg(a,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:Y}=X,le=pg(X,["style"]),re=P==null?void 0:P.src,Z=Bt.useRef(null),me=Bt.useRef(null),Re=Bt.useCallback(He=>{Z.current=He,typeof t=="function"?t(He):t&&(t.current=He)},[t]),[Oe,D]=Bt.useState(!1),{margin:b,cells:C,numCells:k,calculatedImageSettings:N}=jA({value:o,level:f,minVersion:v,boostLevel:T,includeMargin:g,marginSize:w,imageSettings:P,size:u});Bt.useEffect(()=>{if(Z.current!=null){const He=Z.current,Ke=He.getContext("2d");if(!Ke)return;let j=C;const ne=me.current,he=N!=null&&ne!==null&&ne.complete&&ne.naturalHeight!==0&&ne.naturalWidth!==0;he&&N.excavation!=null&&(j=FA(C,N.excavation));const Me=window.devicePixelRatio||1;He.height=He.width=u*Me;const qe=u/k*Me;Ke.scale(qe,qe),Ke.fillStyle=p,Ke.fillRect(0,0,k,k),Ke.fillStyle=m,Jk?Ke.fill(new Path2D(qA(j,b))):C.forEach(function(M,K){M.forEach(function(ie,ae){ie&&Ke.fillRect(ae+b,K+b,1,1)})}),N&&(Ke.globalAlpha=N.opacity),he&&Ke.drawImage(ne,N.x+b,N.y+b,N.w,N.h)}}),Bt.useEffect(()=>{D(!1)},[re]);const L=gg({height:u,width:u},Y);let I=null;return re!=null&&(I=Bt.createElement("img",{src:re,key:re,style:{display:"none"},onLoad:()=>{D(!0)},ref:me,crossOrigin:N==null?void 0:N.crossOrigin})),Bt.createElement(Bt.Fragment,null,Bt.createElement("canvas",gg({style:L,height:u,width:u,ref:Re,role:"img"},le)),I)});Zk.displayName="QRCodeCanvas";var eP=Bt.forwardRef(function(e,t){const a=e,{value:o,size:u=LA,level:f=UA,bgColor:p=xA,fgColor:m=zA,includeMargin:g=BA,minVersion:v=HA,boostLevel:T,title:w,marginSize:P,imageSettings:H}=a,X=pg(a,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:Y,cells:le,numCells:re,calculatedImageSettings:Z}=jA({value:o,level:f,minVersion:v,boostLevel:T,includeMargin:g,marginSize:P,imageSettings:H,size:u});let me=le,Re=null;H!=null&&Z!=null&&(Z.excavation!=null&&(me=FA(le,Z.excavation)),Re=Bt.createElement("image",{href:H.src,height:Z.h,width:Z.w,x:Z.x+Y,y:Z.y+Y,preserveAspectRatio:"none",opacity:Z.opacity,crossOrigin:Z.crossOrigin}));const Oe=qA(me,Y);return Bt.createElement("svg",gg({height:u,width:u,viewBox:`0 0 ${re} ${re}`,ref:t,role:"img"},X),!!w&&Bt.createElement("title",null,w),Bt.createElement("path",{fill:p,d:`M0,0 h${re}v${re}H0z`,shapeRendering:"crispEdges"}),Bt.createElement("path",{fill:m,d:Oe,shapeRendering:"crispEdges"}),Re)});eP.displayName="QRCodeSVG";export{eV as $,NP as A,SP as B,CP as C,OP as D,MP as E,IP as F,oV as G,PP as H,nV as I,xP as J,iV as K,QP as L,KP as M,WP as N,$P as O,wP as P,qP as Q,HP as R,rV as S,LP as T,hV as U,tV as V,UP as W,dV as X,fV as Y,mV as Z,YP as _,uM as a,uV as a0,lV as a1,aV as a2,AP as a3,GP as a4,jP as a5,ZP as a6,JP as a7,cV as a8,bP as a9,XP as aa,sV as ab,FP as ac,Zk as ad,zP as ae,BP as af,RP as ag,nP as ah,Bt as ai,fP as aj,cP as b,hP as c,TC as d,rP as e,oP as f,aP as g,sP as h,rI as i,tP as j,mP as k,_P as l,pP as m,gP as n,yP as o,DP as p,vP as q,fo as r,lP as s,pM as t,uP as u,EP as v,kP as w,VP as x,dP as y,TP as z};
