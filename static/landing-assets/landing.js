function eT(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var em={exports:{}},Zt={};var Fx;function tT(){if(Fx)return Zt;Fx=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function x(U,k,ve){this.props=U,this.context=k,this.refs=E,this.updater=ve||g}x.prototype.isReactComponent={},x.prototype.setState=function(U,k){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,k,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function C(U,k,ve){this.props=U,this.context=k,this.refs=E,this.updater=ve||g}var O=C.prototype=new y;O.constructor=C,S(O,x.prototype),O.isPureReactComponent=!0;var A=Array.isArray,b=Object.prototype.hasOwnProperty,R={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(U,k,ve){var De,se={},ke=null,ee=null;if(k!=null)for(De in k.ref!==void 0&&(ee=k.ref),k.key!==void 0&&(ke=""+k.key),k)b.call(k,De)&&!N.hasOwnProperty(De)&&(se[De]=k[De]);var te=arguments.length-2;if(te===1)se.children=ve;else if(1<te){for(var Pe=Array(te),Oe=0;Oe<te;Oe++)Pe[Oe]=arguments[Oe+2];se.children=Pe}if(U&&U.defaultProps)for(De in te=U.defaultProps,te)se[De]===void 0&&(se[De]=te[De]);return{$$typeof:s,type:U,key:ke,ref:ee,props:se,_owner:R.current}}function L(U,k){return{$$typeof:s,type:U.type,key:k,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function Z(U){var k={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return k[ve]})}var G=/\/+/g;function ie(U,k){return typeof U=="object"&&U!==null&&U.key!=null?Z(""+U.key):k.toString(36)}function X(U,k,ve,De,se){var ke=typeof U;(ke==="undefined"||ke==="boolean")&&(U=null);var ee=!1;if(U===null)ee=!0;else switch(ke){case"string":case"number":ee=!0;break;case"object":switch(U.$$typeof){case s:case e:ee=!0}}if(ee)return ee=U,se=se(ee),U=De===""?"."+ie(ee,0):De,A(se)?(ve="",U!=null&&(ve=U.replace(G,"$&/")+"/"),X(se,k,ve,"",function(Oe){return Oe})):se!=null&&(B(se)&&(se=L(se,ve+(!se.key||ee&&ee.key===se.key?"":(""+se.key).replace(G,"$&/")+"/")+U)),k.push(se)),1;if(ee=0,De=De===""?".":De+":",A(U))for(var te=0;te<U.length;te++){ke=U[te];var Pe=De+ie(ke,te);ee+=X(ke,k,ve,Pe,se)}else if(Pe=m(U),typeof Pe=="function")for(U=Pe.call(U),te=0;!(ke=U.next()).done;)ke=ke.value,Pe=De+ie(ke,te++),ee+=X(ke,k,ve,Pe,se);else if(ke==="object")throw k=String(U),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return ee}function j(U,k,ve){if(U==null)return U;var De=[],se=0;return X(U,De,"","",function(ke){return k.call(ve,ke,se++)}),De}function z(U){if(U._status===-1){var k=U._result;k=k(),k.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=k)}if(U._status===1)return U._result.default;throw U._result}var V={current:null},Q={transition:null},Y={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:Q,ReactCurrentOwner:R};function I(){throw Error("act(...) is not supported in production builds of React.")}return Zt.Children={map:j,forEach:function(U,k,ve){j(U,function(){k.apply(this,arguments)},ve)},count:function(U){var k=0;return j(U,function(){k++}),k},toArray:function(U){return j(U,function(k){return k})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Zt.Component=x,Zt.Fragment=t,Zt.Profiler=r,Zt.PureComponent=C,Zt.StrictMode=n,Zt.Suspense=f,Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Zt.act=I,Zt.cloneElement=function(U,k,ve){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var De=S({},U.props),se=U.key,ke=U.ref,ee=U._owner;if(k!=null){if(k.ref!==void 0&&(ke=k.ref,ee=R.current),k.key!==void 0&&(se=""+k.key),U.type&&U.type.defaultProps)var te=U.type.defaultProps;for(Pe in k)b.call(k,Pe)&&!N.hasOwnProperty(Pe)&&(De[Pe]=k[Pe]===void 0&&te!==void 0?te[Pe]:k[Pe])}var Pe=arguments.length-2;if(Pe===1)De.children=ve;else if(1<Pe){te=Array(Pe);for(var Oe=0;Oe<Pe;Oe++)te[Oe]=arguments[Oe+2];De.children=te}return{$$typeof:s,type:U.type,key:se,ref:ke,props:De,_owner:ee}},Zt.createContext=function(U){return U={$$typeof:l,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Zt.createElement=T,Zt.createFactory=function(U){var k=T.bind(null,U);return k.type=U,k},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(U){return{$$typeof:c,render:U}},Zt.isValidElement=B,Zt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:z}},Zt.memo=function(U,k){return{$$typeof:h,type:U,compare:k===void 0?null:k}},Zt.startTransition=function(U){var k=Q.transition;Q.transition={};try{U()}finally{Q.transition=k}},Zt.unstable_act=I,Zt.useCallback=function(U,k){return V.current.useCallback(U,k)},Zt.useContext=function(U){return V.current.useContext(U)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(U){return V.current.useDeferredValue(U)},Zt.useEffect=function(U,k){return V.current.useEffect(U,k)},Zt.useId=function(){return V.current.useId()},Zt.useImperativeHandle=function(U,k,ve){return V.current.useImperativeHandle(U,k,ve)},Zt.useInsertionEffect=function(U,k){return V.current.useInsertionEffect(U,k)},Zt.useLayoutEffect=function(U,k){return V.current.useLayoutEffect(U,k)},Zt.useMemo=function(U,k){return V.current.useMemo(U,k)},Zt.useReducer=function(U,k,ve){return V.current.useReducer(U,k,ve)},Zt.useRef=function(U){return V.current.useRef(U)},Zt.useState=function(U){return V.current.useState(U)},Zt.useSyncExternalStore=function(U,k,ve){return V.current.useSyncExternalStore(U,k,ve)},Zt.useTransition=function(){return V.current.useTransition()},Zt.version="18.3.1",Zt}var Ux;function Ag(){return Ux||(Ux=1,em.exports=tT()),em.exports}var yt=Ag();const Ro=eT(yt);var Vf={},tm={exports:{}},Vi={},nm={exports:{}},im={};var Ox;function nT(){return Ox||(Ox=1,(function(s){function e(Q,Y){var I=Q.length;Q.push(Y);e:for(;0<I;){var U=I-1>>>1,k=Q[U];if(0<r(k,Y))Q[U]=Y,Q[I]=k,I=U;else break e}}function t(Q){return Q.length===0?null:Q[0]}function n(Q){if(Q.length===0)return null;var Y=Q[0],I=Q.pop();if(I!==Y){Q[0]=I;e:for(var U=0,k=Q.length,ve=k>>>1;U<ve;){var De=2*(U+1)-1,se=Q[De],ke=De+1,ee=Q[ke];if(0>r(se,I))ke<k&&0>r(ee,se)?(Q[U]=ee,Q[ke]=I,U=ke):(Q[U]=se,Q[De]=I,U=De);else if(ke<k&&0>r(ee,I))Q[U]=ee,Q[ke]=I,U=ke;else break e}}return Y}function r(Q,Y){var I=Q.sortIndex-Y.sortIndex;return I!==0?I:Q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var f=[],h=[],p=1,_=null,m=3,g=!1,S=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(Q){for(var Y=t(h);Y!==null;){if(Y.callback===null)n(h);else if(Y.startTime<=Q)n(h),Y.sortIndex=Y.expirationTime,e(f,Y);else break;Y=t(h)}}function A(Q){if(E=!1,O(Q),!S)if(t(f)!==null)S=!0,z(b);else{var Y=t(h);Y!==null&&V(A,Y.startTime-Q)}}function b(Q,Y){S=!1,E&&(E=!1,y(T),T=-1),g=!0;var I=m;try{for(O(Y),_=t(f);_!==null&&(!(_.expirationTime>Y)||Q&&!Z());){var U=_.callback;if(typeof U=="function"){_.callback=null,m=_.priorityLevel;var k=U(_.expirationTime<=Y);Y=s.unstable_now(),typeof k=="function"?_.callback=k:_===t(f)&&n(f),O(Y)}else n(f);_=t(f)}if(_!==null)var ve=!0;else{var De=t(h);De!==null&&V(A,De.startTime-Y),ve=!1}return ve}finally{_=null,m=I,g=!1}}var R=!1,N=null,T=-1,L=5,B=-1;function Z(){return!(s.unstable_now()-B<L)}function G(){if(N!==null){var Q=s.unstable_now();B=Q;var Y=!0;try{Y=N(!0,Q)}finally{Y?ie():(R=!1,N=null)}}else R=!1}var ie;if(typeof C=="function")ie=function(){C(G)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=G,ie=function(){j.postMessage(null)}}else ie=function(){x(G,0)};function z(Q){N=Q,R||(R=!0,ie())}function V(Q,Y){T=x(function(){Q(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){S||g||(S=!0,z(b))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(Q){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var I=m;m=Y;try{return Q()}finally{m=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,Y){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var I=m;m=Q;try{return Y()}finally{m=I}},s.unstable_scheduleCallback=function(Q,Y,I){var U=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?U+I:U):I=U,Q){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=I+k,Q={id:p++,callback:Y,priorityLevel:Q,startTime:I,expirationTime:k,sortIndex:-1},I>U?(Q.sortIndex=I,e(h,Q),t(f)===null&&Q===t(h)&&(E?(y(T),T=-1):E=!0,V(A,I-U))):(Q.sortIndex=k,e(f,Q),S||g||(S=!0,z(b))),Q},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(Q){var Y=m;return function(){var I=m;m=Y;try{return Q.apply(this,arguments)}finally{m=I}}}})(im)),im}var kx;function iT(){return kx||(kx=1,nm.exports=nT()),nm.exports}var Bx;function rT(){if(Bx)return Vi;Bx=1;var s=Ag(),e=iT();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(r[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function m(i){return f.call(_,i)?!0:f.call(p,i)?!1:h.test(i)?_[i]=!0:(p[i]=!0,!1)}function g(i,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function S(i,o,u,d){if(o===null||typeof o>"u"||g(i,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,u,d,v,M,D){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=M,this.removeEmptyString=D}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function O(i,o,u,d){var v=x.hasOwnProperty(o)?x[o]:null;(v!==null?v.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,u,v,d)&&(u=null),d||v===null?m(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):v.mustUseProperty?i[v.propertyName]=u===null?v.type===3?!1:"":u:(o=v.attributeName,d=v.attributeNamespace,u===null?i.removeAttribute(o):(v=v.type,u=v===3||v===4&&u===!0?"":""+u,d?i.setAttributeNS(d,o,u):i.setAttribute(o,u))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Z=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),Q=Symbol.iterator;function Y(i){return i===null||typeof i!="object"?null:(i=Q&&i[Q]||i["@@iterator"],typeof i=="function"?i:null)}var I=Object.assign,U;function k(i){if(U===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);U=o&&o[1]||""}return`
`+U+i}var ve=!1;function De(i,o){if(!i||ve)return"";ve=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Ie){var d=Ie}Reflect.construct(i,[],o)}else{try{o.call()}catch(Ie){d=Ie}i.call(o.prototype)}else{try{throw Error()}catch(Ie){d=Ie}i()}}catch(Ie){if(Ie&&d&&typeof Ie.stack=="string"){for(var v=Ie.stack.split(`
`),M=d.stack.split(`
`),D=v.length-1,J=M.length-1;1<=D&&0<=J&&v[D]!==M[J];)J--;for(;1<=D&&0<=J;D--,J--)if(v[D]!==M[J]){if(D!==1||J!==1)do if(D--,J--,0>J||v[D]!==M[J]){var ce=`
`+v[D].replace(" at new "," at ");return i.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",i.displayName)),ce}while(1<=D&&0<=J);break}}}finally{ve=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?k(i):""}function se(i){switch(i.tag){case 5:return k(i.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return i=De(i.type,!1),i;case 11:return i=De(i.type.render,!1),i;case 1:return i=De(i.type,!0),i;default:return""}}function ke(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case R:return"Portal";case L:return"Profiler";case T:return"StrictMode";case ie:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Z:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case G:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case j:return o=i.displayName||null,o!==null?o:ke(i.type)||"Memo";case z:o=i._payload,i=i._init;try{return ke(i(o))}catch{}}return null}function ee(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(o);case 8:return o===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Oe(i){var o=Pe(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var v=u.get,M=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return v.call(this)},set:function(D){d=""+D,M.call(this,D)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(D){d=""+D},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function ze(i){i._valueTracker||(i._valueTracker=Oe(i))}function qe(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return i&&(d=Pe(i)?i.checked?"true":"false":i.value),i=d,i!==u?(o.setValue(i),!0):!1}function st(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ke(i,o){var u=o.checked;return I({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function $e(i,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=te(o.value!=null?o.value:u),i._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function be(i,o){o=o.checked,o!=null&&O(i,"checked",o,!1)}function fe(i,o){be(i,o);var u=te(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ze(i,o.type,u):o.hasOwnProperty("defaultValue")&&Ze(i,o.type,te(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Et(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Ze(i,o,u){(o!=="number"||st(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var it=Array.isArray;function Qe(i,o,u,d){if(i=i.options,o){o={};for(var v=0;v<u.length;v++)o["$"+u[v]]=!0;for(u=0;u<i.length;u++)v=o.hasOwnProperty("$"+i[u].value),i[u].selected!==v&&(i[u].selected=v),v&&d&&(i[u].defaultSelected=!0)}else{for(u=""+te(u),o=null,v=0;v<i.length;v++){if(i[v].value===u){i[v].selected=!0,d&&(i[v].defaultSelected=!0);return}o!==null||i[v].disabled||(o=i[v])}o!==null&&(o.selected=!0)}}function vt(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function q(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(it(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:te(u)}}function We(i,o){var u=te(o.value),d=te(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),d!=null&&(i.defaultValue=""+d)}function Le(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function F(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?F(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $,W=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,v){MSApp.execUnsafeLocalFunction(function(){return i(o,u,d,v)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=$.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function de(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(i){Fe.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ne[o]=Ne[i]})});function Ee(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Ne.hasOwnProperty(i)&&Ne[i]?(""+o).trim():o+"px"}function we(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,v=Ee(u,o[u],d);u==="float"&&(u="cssFloat"),d?i.setProperty(u,v):i[u]=v}}var Xe=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(i,o){if(o){if(Xe[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Se(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function me(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,Ge=null,K=null;function Ue(i){if(i=mu(i)){if(typeof Re!="function")throw Error(t(280));var o=i.stateNode;o&&(o=tf(o),Re(i.stateNode,i.type,o))}}function ge(i){Ge?K?K.push(i):K=[i]:Ge=i}function Ve(){if(Ge){var i=Ge,o=K;if(K=Ge=null,Ue(i),o)for(i=0;i<o.length;i++)Ue(o[i])}}function ye(i,o){return i(o)}function H(){}var oe=!1;function ne(i,o,u){if(oe)return i(o,u);oe=!0;try{return ye(i,o,u)}finally{oe=!1,(Ge!==null||K!==null)&&(H(),Ve())}}function Be(i,o){var u=i.stateNode;if(u===null)return null;var d=tf(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var _e=!1;if(c)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){_e=!0}}),window.addEventListener("test",ae,ae),window.removeEventListener("test",ae,ae)}catch{_e=!1}function Te(i,o,u,d,v,M,D,J,ce){var Ie=Array.prototype.slice.call(arguments,3);try{o.apply(u,Ie)}catch(tt){this.onError(tt)}}var Ye=!1,lt=null,dt=!1,At=null,Vt={onError:function(i){Ye=!0,lt=i}};function Rt(i,o,u,d,v,M,D,J,ce){Ye=!1,lt=null,Te.apply(Vt,arguments)}function Pt(i,o,u,d,v,M,D,J,ce){if(Rt.apply(this,arguments),Ye){if(Ye){var Ie=lt;Ye=!1,lt=null}else throw Error(t(198));dt||(dt=!0,At=Ie)}}function St(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Wt(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Ht(i){if(St(i)!==i)throw Error(t(188))}function et(i){var o=i.alternate;if(!o){if(o=St(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,d=o;;){var v=u.return;if(v===null)break;var M=v.alternate;if(M===null){if(d=v.return,d!==null){u=d;continue}break}if(v.child===M.child){for(M=v.child;M;){if(M===u)return Ht(v),i;if(M===d)return Ht(v),o;M=M.sibling}throw Error(t(188))}if(u.return!==d.return)u=v,d=M;else{for(var D=!1,J=v.child;J;){if(J===u){D=!0,u=v,d=M;break}if(J===d){D=!0,d=v,u=M;break}J=J.sibling}if(!D){for(J=M.child;J;){if(J===u){D=!0,u=M,d=v;break}if(J===d){D=!0,d=M,u=v;break}J=J.sibling}if(!D)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function He(i){return i=et(i),i!==null?pt(i):null}function pt(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=pt(i);if(o!==null)return o;i=i.sibling}return null}var Lt=e.unstable_scheduleCallback,It=e.unstable_cancelCallback,jt=e.unstable_shouldYield,Rn=e.unstable_requestPaint,Ft=e.unstable_now,tn=e.unstable_getCurrentPriorityLevel,dn=e.unstable_ImmediatePriority,vn=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,re=e.unstable_LowPriority,Me=e.unstable_IdlePriority,ue=null,le=null;function at(i){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:mt,ot=Math.log,ft=Math.LN2;function mt(i){return i>>>=0,i===0?32:31-(ot(i)/ft|0)|0}var Dt=64,Bt=4194304;function _t(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function qt(i,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,v=i.suspendedLanes,M=i.pingedLanes,D=u&268435455;if(D!==0){var J=D&~v;J!==0?d=_t(J):(M&=D,M!==0&&(d=_t(M)))}else D=u&~v,D!==0?d=_t(D):M!==0&&(d=_t(M));if(d===0)return 0;if(o!==0&&o!==d&&(o&v)===0&&(v=d&-d,M=o&-o,v>=M||v===16&&(M&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)u=31-ct(o),v=1<<u,d|=i[u],o&=~v;return d}function Mn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _n(i,o){for(var u=i.suspendedLanes,d=i.pingedLanes,v=i.expirationTimes,M=i.pendingLanes;0<M;){var D=31-ct(M),J=1<<D,ce=v[D];ce===-1?((J&u)===0||(J&d)!==0)&&(v[D]=Mn(J,o)):ce<=o&&(i.expiredLanes|=J),M&=~J}}function fn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Yn(){var i=Dt;return Dt<<=1,(Dt&4194240)===0&&(Dt=64),i}function gt(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function kn(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-ct(o),i[o]=u}function nn(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<u;){var v=31-ct(u),M=1<<v;o[v]=0,d[v]=-1,i[v]=-1,u&=~M}}function di(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var d=31-ct(u),v=1<<d;v&o|i[d]&o&&(i[d]|=o),u&=~v}}var Xt=0;function Br(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ms,an,Tn,zr,pn,Sr=!1,Vr=[],Hr=null,Js=null,Qs=null,jl=new Map,eu=new Map,js=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(i,o){switch(i){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":Qs=null;break;case"pointerover":case"pointerout":jl.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(o.pointerId)}}function tu(i,o,u,d,v,M){return i===null||i.nativeEvent!==M?(i={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:M,targetContainers:[v]},o!==null&&(o=mu(o),o!==null&&an(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),i)}function EE(i,o,u,d,v){switch(o){case"focusin":return Hr=tu(Hr,i,o,u,d,v),!0;case"dragenter":return Js=tu(Js,i,o,u,d,v),!0;case"mouseover":return Qs=tu(Qs,i,o,u,d,v),!0;case"pointerover":var M=v.pointerId;return jl.set(M,tu(jl.get(M)||null,i,o,u,d,v)),!0;case"gotpointercapture":return M=v.pointerId,eu.set(M,tu(eu.get(M)||null,i,o,u,d,v)),!0}return!1}function xv(i){var o=Ho(i.target);if(o!==null){var u=St(o);if(u!==null){if(o=u.tag,o===13){if(o=Wt(u),o!==null){i.blockedOn=o,pn(i.priority,function(){Tn(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Vc(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=bh(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var d=new u.constructor(u.type,u);xe=d,u.target.dispatchEvent(d),xe=null}else return o=mu(u),o!==null&&an(o),i.blockedOn=u,!1;o.shift()}return!0}function yv(i,o,u){Vc(i)&&u.delete(o)}function wE(){Sr=!1,Hr!==null&&Vc(Hr)&&(Hr=null),Js!==null&&Vc(Js)&&(Js=null),Qs!==null&&Vc(Qs)&&(Qs=null),jl.forEach(yv),eu.forEach(yv)}function nu(i,o){i.blockedOn===o&&(i.blockedOn=null,Sr||(Sr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wE)))}function iu(i){function o(v){return nu(v,i)}if(0<Vr.length){nu(Vr[0],i);for(var u=1;u<Vr.length;u++){var d=Vr[u];d.blockedOn===i&&(d.blockedOn=null)}}for(Hr!==null&&nu(Hr,i),Js!==null&&nu(Js,i),Qs!==null&&nu(Qs,i),jl.forEach(o),eu.forEach(o),u=0;u<js.length;u++)d=js[u],d.blockedOn===i&&(d.blockedOn=null);for(;0<js.length&&(u=js[0],u.blockedOn===null);)xv(u),u.blockedOn===null&&js.shift()}var Da=A.ReactCurrentBatchConfig,Hc=!0;function TE(i,o,u,d){var v=Xt,M=Da.transition;Da.transition=null;try{Xt=1,Ah(i,o,u,d)}finally{Xt=v,Da.transition=M}}function AE(i,o,u,d){var v=Xt,M=Da.transition;Da.transition=null;try{Xt=4,Ah(i,o,u,d)}finally{Xt=v,Da.transition=M}}function Ah(i,o,u,d){if(Hc){var v=bh(i,o,u,d);if(v===null)Wh(i,o,d,Gc,u),_v(i,d);else if(EE(v,i,o,u,d))d.stopPropagation();else if(_v(i,d),o&4&&-1<ME.indexOf(i)){for(;v!==null;){var M=mu(v);if(M!==null&&Ms(M),M=bh(i,o,u,d),M===null&&Wh(i,o,d,Gc,u),M===v)break;v=M}v!==null&&d.stopPropagation()}else Wh(i,o,d,null,u)}}var Gc=null;function bh(i,o,u,d){if(Gc=null,i=me(d),i=Ho(i),i!==null)if(o=St(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Wt(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Gc=i,null}function Sv(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case dn:return 1;case vn:return 4;case P:case re:return 16;case Me:return 536870912;default:return 16}default:return 16}}var eo=null,Rh=null,Wc=null;function Mv(){if(Wc)return Wc;var i,o=Rh,u=o.length,d,v="value"in eo?eo.value:eo.textContent,M=v.length;for(i=0;i<u&&o[i]===v[i];i++);var D=u-i;for(d=1;d<=D&&o[u-d]===v[M-d];d++);return Wc=v.slice(i,1<d?1-d:void 0)}function Xc(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Yc(){return!0}function Ev(){return!1}function ji(i){function o(u,d,v,M,D){this._reactName=u,this._targetInst=v,this.type=d,this.nativeEvent=M,this.target=D,this.currentTarget=null;for(var J in i)i.hasOwnProperty(J)&&(u=i[J],this[J]=u?u(M):M[J]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Yc:Ev,this.isPropagationStopped=Ev,this}return I(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Yc)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Yc)},persist:function(){},isPersistent:Yc}),o}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=ji(Na),ru=I({},Na,{view:0,detail:0}),bE=ji(ru),Ph,Lh,su,qc=I({},ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==su&&(su&&i.type==="mousemove"?(Ph=i.screenX-su.screenX,Lh=i.screenY-su.screenY):Lh=Ph=0,su=i),Ph)},movementY:function(i){return"movementY"in i?i.movementY:Lh}}),wv=ji(qc),RE=I({},qc,{dataTransfer:0}),CE=ji(RE),PE=I({},ru,{relatedTarget:0}),Dh=ji(PE),LE=I({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),DE=ji(LE),NE=I({},Na,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),IE=ji(NE),FE=I({},Na,{data:0}),Tv=ji(FE),UE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BE(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=kE[i])?!!o[i]:!1}function Nh(){return BE}var zE=I({},ru,{key:function(i){if(i.key){var o=UE[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Xc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?OE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nh,charCode:function(i){return i.type==="keypress"?Xc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Xc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),VE=ji(zE),HE=I({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Av=ji(HE),GE=I({},ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nh}),WE=ji(GE),XE=I({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),YE=ji(XE),qE=I({},qc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$E=ji(qE),KE=[9,13,27,32],Ih=c&&"CompositionEvent"in window,ou=null;c&&"documentMode"in document&&(ou=document.documentMode);var ZE=c&&"TextEvent"in window&&!ou,bv=c&&(!Ih||ou&&8<ou&&11>=ou),Rv=" ",Cv=!1;function Pv(i,o){switch(i){case"keyup":return KE.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ia=!1;function JE(i,o){switch(i){case"compositionend":return Lv(o);case"keypress":return o.which!==32?null:(Cv=!0,Rv);case"textInput":return i=o.data,i===Rv&&Cv?null:i;default:return null}}function QE(i,o){if(Ia)return i==="compositionend"||!Ih&&Pv(i,o)?(i=Mv(),Wc=Rh=eo=null,Ia=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return bv&&o.locale!=="ko"?null:o.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dv(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!jE[i.type]:o==="textarea"}function Nv(i,o,u,d){ge(d),o=Qc(o,"onChange"),0<o.length&&(u=new Ch("onChange","change",null,u,d),i.push({event:u,listeners:o}))}var au=null,lu=null;function ew(i){Jv(i,0)}function $c(i){var o=Ba(i);if(qe(o))return i}function tw(i,o){if(i==="change")return o}var Iv=!1;if(c){var Fh;if(c){var Uh="oninput"in document;if(!Uh){var Fv=document.createElement("div");Fv.setAttribute("oninput","return;"),Uh=typeof Fv.oninput=="function"}Fh=Uh}else Fh=!1;Iv=Fh&&(!document.documentMode||9<document.documentMode)}function Uv(){au&&(au.detachEvent("onpropertychange",Ov),lu=au=null)}function Ov(i){if(i.propertyName==="value"&&$c(lu)){var o=[];Nv(o,lu,i,me(i)),ne(ew,o)}}function nw(i,o,u){i==="focusin"?(Uv(),au=o,lu=u,au.attachEvent("onpropertychange",Ov)):i==="focusout"&&Uv()}function iw(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return $c(lu)}function rw(i,o){if(i==="click")return $c(o)}function sw(i,o){if(i==="input"||i==="change")return $c(o)}function ow(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Gr=typeof Object.is=="function"?Object.is:ow;function uu(i,o){if(Gr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var v=u[d];if(!f.call(o,v)||!Gr(i[v],o[v]))return!1}return!0}function kv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Bv(i,o){var u=kv(i);i=0;for(var d;u;){if(u.nodeType===3){if(d=i+u.textContent.length,i<=o&&d>=o)return{node:u,offset:o-i};i=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=kv(u)}}function zv(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?zv(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Vv(){for(var i=window,o=st();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=st(i.document)}return o}function Oh(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function aw(i){var o=Vv(),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&zv(u.ownerDocument.documentElement,u)){if(d!==null&&Oh(u)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var v=u.textContent.length,M=Math.min(d.start,v);d=d.end===void 0?M:Math.min(d.end,v),!i.extend&&M>d&&(v=d,d=M,M=v),v=Bv(u,M);var D=Bv(u,d);v&&D&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==D.node||i.focusOffset!==D.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),i.removeAllRanges(),M>d?(i.addRange(o),i.extend(D.node,D.offset)):(o.setEnd(D.node,D.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var lw=c&&"documentMode"in document&&11>=document.documentMode,Fa=null,kh=null,cu=null,Bh=!1;function Hv(i,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Bh||Fa==null||Fa!==st(d)||(d=Fa,"selectionStart"in d&&Oh(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),cu&&uu(cu,d)||(cu=d,d=Qc(kh,"onSelect"),0<d.length&&(o=new Ch("onSelect","select",null,o,u),i.push({event:o,listeners:d}),o.target=Fa)))}function Kc(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var Ua={animationend:Kc("Animation","AnimationEnd"),animationiteration:Kc("Animation","AnimationIteration"),animationstart:Kc("Animation","AnimationStart"),transitionend:Kc("Transition","TransitionEnd")},zh={},Gv={};c&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Zc(i){if(zh[i])return zh[i];if(!Ua[i])return i;var o=Ua[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in Gv)return zh[i]=o[u];return i}var Wv=Zc("animationend"),Xv=Zc("animationiteration"),Yv=Zc("animationstart"),qv=Zc("transitionend"),$v=new Map,Kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function to(i,o){$v.set(i,o),a(o,[i])}for(var Vh=0;Vh<Kv.length;Vh++){var Hh=Kv[Vh],uw=Hh.toLowerCase(),cw=Hh[0].toUpperCase()+Hh.slice(1);to(uw,"on"+cw)}to(Wv,"onAnimationEnd"),to(Xv,"onAnimationIteration"),to(Yv,"onAnimationStart"),to("dblclick","onDoubleClick"),to("focusin","onFocus"),to("focusout","onBlur"),to(qv,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(fu));function Zv(i,o,u){var d=i.type||"unknown-event";i.currentTarget=u,Pt(d,o,void 0,i),i.currentTarget=null}function Jv(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var d=i[u],v=d.event;d=d.listeners;e:{var M=void 0;if(o)for(var D=d.length-1;0<=D;D--){var J=d[D],ce=J.instance,Ie=J.currentTarget;if(J=J.listener,ce!==M&&v.isPropagationStopped())break e;Zv(v,J,Ie),M=ce}else for(D=0;D<d.length;D++){if(J=d[D],ce=J.instance,Ie=J.currentTarget,J=J.listener,ce!==M&&v.isPropagationStopped())break e;Zv(v,J,Ie),M=ce}}}if(dt)throw i=At,dt=!1,At=null,i}function En(i,o){var u=o[Zh];u===void 0&&(u=o[Zh]=new Set);var d=i+"__bubble";u.has(d)||(Qv(o,i,2,!1),u.add(d))}function Gh(i,o,u){var d=0;o&&(d|=4),Qv(u,i,d,o)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function du(i){if(!i[Jc]){i[Jc]=!0,n.forEach(function(u){u!=="selectionchange"&&(fw.has(u)||Gh(u,!1,i),Gh(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Jc]||(o[Jc]=!0,Gh("selectionchange",!1,o))}}function Qv(i,o,u,d){switch(Sv(o)){case 1:var v=TE;break;case 4:v=AE;break;default:v=Ah}u=v.bind(null,o,u,i),v=void 0,!_e||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),d?v!==void 0?i.addEventListener(o,u,{capture:!0,passive:v}):i.addEventListener(o,u,!0):v!==void 0?i.addEventListener(o,u,{passive:v}):i.addEventListener(o,u,!1)}function Wh(i,o,u,d,v){var M=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var D=d.tag;if(D===3||D===4){var J=d.stateNode.containerInfo;if(J===v||J.nodeType===8&&J.parentNode===v)break;if(D===4)for(D=d.return;D!==null;){var ce=D.tag;if((ce===3||ce===4)&&(ce=D.stateNode.containerInfo,ce===v||ce.nodeType===8&&ce.parentNode===v))return;D=D.return}for(;J!==null;){if(D=Ho(J),D===null)return;if(ce=D.tag,ce===5||ce===6){d=M=D;continue e}J=J.parentNode}}d=d.return}ne(function(){var Ie=M,tt=me(u),rt=[];e:{var je=$v.get(i);if(je!==void 0){var xt=Ch,Tt=i;switch(i){case"keypress":if(Xc(u)===0)break e;case"keydown":case"keyup":xt=VE;break;case"focusin":Tt="focus",xt=Dh;break;case"focusout":Tt="blur",xt=Dh;break;case"beforeblur":case"afterblur":xt=Dh;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=CE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=WE;break;case Wv:case Xv:case Yv:xt=DE;break;case qv:xt=YE;break;case"scroll":xt=bE;break;case"wheel":xt=$E;break;case"copy":case"cut":case"paste":xt=IE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=Av}var bt=(o&4)!==0,Bn=!bt&&i==="scroll",Ae=bt?je!==null?je+"Capture":null:je;bt=[];for(var he=Ie,Ce;he!==null;){Ce=he;var ut=Ce.stateNode;if(Ce.tag===5&&ut!==null&&(Ce=ut,Ae!==null&&(ut=Be(he,Ae),ut!=null&&bt.push(hu(he,ut,Ce)))),Bn)break;he=he.return}0<bt.length&&(je=new xt(je,Tt,null,u,tt),rt.push({event:je,listeners:bt}))}}if((o&7)===0){e:{if(je=i==="mouseover"||i==="pointerover",xt=i==="mouseout"||i==="pointerout",je&&u!==xe&&(Tt=u.relatedTarget||u.fromElement)&&(Ho(Tt)||Tt[Es]))break e;if((xt||je)&&(je=tt.window===tt?tt:(je=tt.ownerDocument)?je.defaultView||je.parentWindow:window,xt?(Tt=u.relatedTarget||u.toElement,xt=Ie,Tt=Tt?Ho(Tt):null,Tt!==null&&(Bn=St(Tt),Tt!==Bn||Tt.tag!==5&&Tt.tag!==6)&&(Tt=null)):(xt=null,Tt=Ie),xt!==Tt)){if(bt=wv,ut="onMouseLeave",Ae="onMouseEnter",he="mouse",(i==="pointerout"||i==="pointerover")&&(bt=Av,ut="onPointerLeave",Ae="onPointerEnter",he="pointer"),Bn=xt==null?je:Ba(xt),Ce=Tt==null?je:Ba(Tt),je=new bt(ut,he+"leave",xt,u,tt),je.target=Bn,je.relatedTarget=Ce,ut=null,Ho(tt)===Ie&&(bt=new bt(Ae,he+"enter",Tt,u,tt),bt.target=Ce,bt.relatedTarget=Bn,ut=bt),Bn=ut,xt&&Tt)t:{for(bt=xt,Ae=Tt,he=0,Ce=bt;Ce;Ce=Oa(Ce))he++;for(Ce=0,ut=Ae;ut;ut=Oa(ut))Ce++;for(;0<he-Ce;)bt=Oa(bt),he--;for(;0<Ce-he;)Ae=Oa(Ae),Ce--;for(;he--;){if(bt===Ae||Ae!==null&&bt===Ae.alternate)break t;bt=Oa(bt),Ae=Oa(Ae)}bt=null}else bt=null;xt!==null&&jv(rt,je,xt,bt,!1),Tt!==null&&Bn!==null&&jv(rt,Bn,Tt,bt,!0)}}e:{if(je=Ie?Ba(Ie):window,xt=je.nodeName&&je.nodeName.toLowerCase(),xt==="select"||xt==="input"&&je.type==="file")var Ct=tw;else if(Dv(je))if(Iv)Ct=sw;else{Ct=iw;var Ut=nw}else(xt=je.nodeName)&&xt.toLowerCase()==="input"&&(je.type==="checkbox"||je.type==="radio")&&(Ct=rw);if(Ct&&(Ct=Ct(i,Ie))){Nv(rt,Ct,u,tt);break e}Ut&&Ut(i,je,Ie),i==="focusout"&&(Ut=je._wrapperState)&&Ut.controlled&&je.type==="number"&&Ze(je,"number",je.value)}switch(Ut=Ie?Ba(Ie):window,i){case"focusin":(Dv(Ut)||Ut.contentEditable==="true")&&(Fa=Ut,kh=Ie,cu=null);break;case"focusout":cu=kh=Fa=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Hv(rt,u,tt);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Hv(rt,u,tt)}var Ot;if(Ih)e:{switch(i){case"compositionstart":var zt="onCompositionStart";break e;case"compositionend":zt="onCompositionEnd";break e;case"compositionupdate":zt="onCompositionUpdate";break e}zt=void 0}else Ia?Pv(i,u)&&(zt="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(zt="onCompositionStart");zt&&(bv&&u.locale!=="ko"&&(Ia||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Ia&&(Ot=Mv()):(eo=tt,Rh="value"in eo?eo.value:eo.textContent,Ia=!0)),Ut=Qc(Ie,zt),0<Ut.length&&(zt=new Tv(zt,i,null,u,tt),rt.push({event:zt,listeners:Ut}),Ot?zt.data=Ot:(Ot=Lv(u),Ot!==null&&(zt.data=Ot)))),(Ot=ZE?JE(i,u):QE(i,u))&&(Ie=Qc(Ie,"onBeforeInput"),0<Ie.length&&(tt=new Tv("onBeforeInput","beforeinput",null,u,tt),rt.push({event:tt,listeners:Ie}),tt.data=Ot))}Jv(rt,o)})}function hu(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Qc(i,o){for(var u=o+"Capture",d=[];i!==null;){var v=i,M=v.stateNode;v.tag===5&&M!==null&&(v=M,M=Be(i,u),M!=null&&d.unshift(hu(i,M,v)),M=Be(i,o),M!=null&&d.push(hu(i,M,v))),i=i.return}return d}function Oa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function jv(i,o,u,d,v){for(var M=o._reactName,D=[];u!==null&&u!==d;){var J=u,ce=J.alternate,Ie=J.stateNode;if(ce!==null&&ce===d)break;J.tag===5&&Ie!==null&&(J=Ie,v?(ce=Be(u,M),ce!=null&&D.unshift(hu(u,ce,J))):v||(ce=Be(u,M),ce!=null&&D.push(hu(u,ce,J)))),u=u.return}D.length!==0&&i.push({event:o,listeners:D})}var dw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function e_(i){return(typeof i=="string"?i:""+i).replace(dw,`
`).replace(hw,"")}function jc(i,o,u){if(o=e_(o),e_(i)!==o&&u)throw Error(t(425))}function ef(){}var Xh=null,Yh=null;function qh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,pw=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,mw=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(i){return t_.resolve(null).then(i).catch(gw)}:$h;function gw(i){setTimeout(function(){throw i})}function Kh(i,o){var u=o,d=0;do{var v=u.nextSibling;if(i.removeChild(u),v&&v.nodeType===8)if(u=v.data,u==="/$"){if(d===0){i.removeChild(v),iu(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=v}while(u);iu(o)}function no(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function n_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var ka=Math.random().toString(36).slice(2),is="__reactFiber$"+ka,pu="__reactProps$"+ka,Es="__reactContainer$"+ka,Zh="__reactEvents$"+ka,vw="__reactListeners$"+ka,_w="__reactHandles$"+ka;function Ho(i){var o=i[is];if(o)return o;for(var u=i.parentNode;u;){if(o=u[Es]||u[is]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=n_(i);i!==null;){if(u=i[is])return u;i=n_(i)}return o}i=u,u=i.parentNode}return null}function mu(i){return i=i[is]||i[Es],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ba(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function tf(i){return i[pu]||null}var Jh=[],za=-1;function io(i){return{current:i}}function wn(i){0>za||(i.current=Jh[za],Jh[za]=null,za--)}function Sn(i,o){za++,Jh[za]=i.current,i.current=o}var ro={},hi=io(ro),Ui=io(!1),Go=ro;function Va(i,o){var u=i.type.contextTypes;if(!u)return ro;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var v={},M;for(M in u)v[M]=o[M];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=v),v}function Oi(i){return i=i.childContextTypes,i!=null}function nf(){wn(Ui),wn(hi)}function i_(i,o,u){if(hi.current!==ro)throw Error(t(168));Sn(hi,o),Sn(Ui,u)}function r_(i,o,u){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var v in d)if(!(v in o))throw Error(t(108,ee(i)||"Unknown",v));return I({},u,d)}function rf(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ro,Go=hi.current,Sn(hi,i),Sn(Ui,Ui.current),!0}function s_(i,o,u){var d=i.stateNode;if(!d)throw Error(t(169));u?(i=r_(i,o,Go),d.__reactInternalMemoizedMergedChildContext=i,wn(Ui),wn(hi),Sn(hi,i)):wn(Ui),Sn(Ui,u)}var ws=null,sf=!1,Qh=!1;function o_(i){ws===null?ws=[i]:ws.push(i)}function xw(i){sf=!0,o_(i)}function so(){if(!Qh&&ws!==null){Qh=!0;var i=0,o=Xt;try{var u=ws;for(Xt=1;i<u.length;i++){var d=u[i];do d=d(!0);while(d!==null)}ws=null,sf=!1}catch(v){throw ws!==null&&(ws=ws.slice(i+1)),Lt(dn,so),v}finally{Xt=o,Qh=!1}}return null}var Ha=[],Ga=0,of=null,af=0,Mr=[],Er=0,Wo=null,Ts=1,As="";function Xo(i,o){Ha[Ga++]=af,Ha[Ga++]=of,of=i,af=o}function a_(i,o,u){Mr[Er++]=Ts,Mr[Er++]=As,Mr[Er++]=Wo,Wo=i;var d=Ts;i=As;var v=32-ct(d)-1;d&=~(1<<v),u+=1;var M=32-ct(o)+v;if(30<M){var D=v-v%5;M=(d&(1<<D)-1).toString(32),d>>=D,v-=D,Ts=1<<32-ct(o)+v|u<<v|d,As=M+i}else Ts=1<<M|u<<v|d,As=i}function jh(i){i.return!==null&&(Xo(i,1),a_(i,1,0))}function ep(i){for(;i===of;)of=Ha[--Ga],Ha[Ga]=null,af=Ha[--Ga],Ha[Ga]=null;for(;i===Wo;)Wo=Mr[--Er],Mr[Er]=null,As=Mr[--Er],Mr[Er]=null,Ts=Mr[--Er],Mr[Er]=null}var er=null,tr=null,An=!1,Wr=null;function l_(i,o){var u=br(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function u_(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,er=i,tr=no(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,er=i,tr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Wo!==null?{id:Ts,overflow:As}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=br(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,er=i,tr=null,!0):!1;default:return!1}}function tp(i){return(i.mode&1)!==0&&(i.flags&128)===0}function np(i){if(An){var o=tr;if(o){var u=o;if(!u_(i,o)){if(tp(i))throw Error(t(418));o=no(u.nextSibling);var d=er;o&&u_(i,o)?l_(d,u):(i.flags=i.flags&-4097|2,An=!1,er=i)}}else{if(tp(i))throw Error(t(418));i.flags=i.flags&-4097|2,An=!1,er=i}}}function c_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;er=i}function lf(i){if(i!==er)return!1;if(!An)return c_(i),An=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!qh(i.type,i.memoizedProps)),o&&(o=tr)){if(tp(i))throw f_(),Error(t(418));for(;o;)l_(i,o),o=no(o.nextSibling)}if(c_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){tr=no(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}tr=null}}else tr=er?no(i.stateNode.nextSibling):null;return!0}function f_(){for(var i=tr;i;)i=no(i.nextSibling)}function Wa(){tr=er=null,An=!1}function ip(i){Wr===null?Wr=[i]:Wr.push(i)}var yw=A.ReactCurrentBatchConfig;function gu(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,i));var v=d,M=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(D){var J=v.refs;D===null?delete J[M]:J[M]=D},o._stringRef=M,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function uf(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function d_(i){var o=i._init;return o(i._payload)}function h_(i){function o(Ae,he){if(i){var Ce=Ae.deletions;Ce===null?(Ae.deletions=[he],Ae.flags|=16):Ce.push(he)}}function u(Ae,he){if(!i)return null;for(;he!==null;)o(Ae,he),he=he.sibling;return null}function d(Ae,he){for(Ae=new Map;he!==null;)he.key!==null?Ae.set(he.key,he):Ae.set(he.index,he),he=he.sibling;return Ae}function v(Ae,he){return Ae=po(Ae,he),Ae.index=0,Ae.sibling=null,Ae}function M(Ae,he,Ce){return Ae.index=Ce,i?(Ce=Ae.alternate,Ce!==null?(Ce=Ce.index,Ce<he?(Ae.flags|=2,he):Ce):(Ae.flags|=2,he)):(Ae.flags|=1048576,he)}function D(Ae){return i&&Ae.alternate===null&&(Ae.flags|=2),Ae}function J(Ae,he,Ce,ut){return he===null||he.tag!==6?(he=$p(Ce,Ae.mode,ut),he.return=Ae,he):(he=v(he,Ce),he.return=Ae,he)}function ce(Ae,he,Ce,ut){var Ct=Ce.type;return Ct===N?tt(Ae,he,Ce.props.children,ut,Ce.key):he!==null&&(he.elementType===Ct||typeof Ct=="object"&&Ct!==null&&Ct.$$typeof===z&&d_(Ct)===he.type)?(ut=v(he,Ce.props),ut.ref=gu(Ae,he,Ce),ut.return=Ae,ut):(ut=Nf(Ce.type,Ce.key,Ce.props,null,Ae.mode,ut),ut.ref=gu(Ae,he,Ce),ut.return=Ae,ut)}function Ie(Ae,he,Ce,ut){return he===null||he.tag!==4||he.stateNode.containerInfo!==Ce.containerInfo||he.stateNode.implementation!==Ce.implementation?(he=Kp(Ce,Ae.mode,ut),he.return=Ae,he):(he=v(he,Ce.children||[]),he.return=Ae,he)}function tt(Ae,he,Ce,ut,Ct){return he===null||he.tag!==7?(he=jo(Ce,Ae.mode,ut,Ct),he.return=Ae,he):(he=v(he,Ce),he.return=Ae,he)}function rt(Ae,he,Ce){if(typeof he=="string"&&he!==""||typeof he=="number")return he=$p(""+he,Ae.mode,Ce),he.return=Ae,he;if(typeof he=="object"&&he!==null){switch(he.$$typeof){case b:return Ce=Nf(he.type,he.key,he.props,null,Ae.mode,Ce),Ce.ref=gu(Ae,null,he),Ce.return=Ae,Ce;case R:return he=Kp(he,Ae.mode,Ce),he.return=Ae,he;case z:var ut=he._init;return rt(Ae,ut(he._payload),Ce)}if(it(he)||Y(he))return he=jo(he,Ae.mode,Ce,null),he.return=Ae,he;uf(Ae,he)}return null}function je(Ae,he,Ce,ut){var Ct=he!==null?he.key:null;if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return Ct!==null?null:J(Ae,he,""+Ce,ut);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case b:return Ce.key===Ct?ce(Ae,he,Ce,ut):null;case R:return Ce.key===Ct?Ie(Ae,he,Ce,ut):null;case z:return Ct=Ce._init,je(Ae,he,Ct(Ce._payload),ut)}if(it(Ce)||Y(Ce))return Ct!==null?null:tt(Ae,he,Ce,ut,null);uf(Ae,Ce)}return null}function xt(Ae,he,Ce,ut,Ct){if(typeof ut=="string"&&ut!==""||typeof ut=="number")return Ae=Ae.get(Ce)||null,J(he,Ae,""+ut,Ct);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case b:return Ae=Ae.get(ut.key===null?Ce:ut.key)||null,ce(he,Ae,ut,Ct);case R:return Ae=Ae.get(ut.key===null?Ce:ut.key)||null,Ie(he,Ae,ut,Ct);case z:var Ut=ut._init;return xt(Ae,he,Ce,Ut(ut._payload),Ct)}if(it(ut)||Y(ut))return Ae=Ae.get(Ce)||null,tt(he,Ae,ut,Ct,null);uf(he,ut)}return null}function Tt(Ae,he,Ce,ut){for(var Ct=null,Ut=null,Ot=he,zt=he=0,ti=null;Ot!==null&&zt<Ce.length;zt++){Ot.index>zt?(ti=Ot,Ot=null):ti=Ot.sibling;var ln=je(Ae,Ot,Ce[zt],ut);if(ln===null){Ot===null&&(Ot=ti);break}i&&Ot&&ln.alternate===null&&o(Ae,Ot),he=M(ln,he,zt),Ut===null?Ct=ln:Ut.sibling=ln,Ut=ln,Ot=ti}if(zt===Ce.length)return u(Ae,Ot),An&&Xo(Ae,zt),Ct;if(Ot===null){for(;zt<Ce.length;zt++)Ot=rt(Ae,Ce[zt],ut),Ot!==null&&(he=M(Ot,he,zt),Ut===null?Ct=Ot:Ut.sibling=Ot,Ut=Ot);return An&&Xo(Ae,zt),Ct}for(Ot=d(Ae,Ot);zt<Ce.length;zt++)ti=xt(Ot,Ae,zt,Ce[zt],ut),ti!==null&&(i&&ti.alternate!==null&&Ot.delete(ti.key===null?zt:ti.key),he=M(ti,he,zt),Ut===null?Ct=ti:Ut.sibling=ti,Ut=ti);return i&&Ot.forEach(function(mo){return o(Ae,mo)}),An&&Xo(Ae,zt),Ct}function bt(Ae,he,Ce,ut){var Ct=Y(Ce);if(typeof Ct!="function")throw Error(t(150));if(Ce=Ct.call(Ce),Ce==null)throw Error(t(151));for(var Ut=Ct=null,Ot=he,zt=he=0,ti=null,ln=Ce.next();Ot!==null&&!ln.done;zt++,ln=Ce.next()){Ot.index>zt?(ti=Ot,Ot=null):ti=Ot.sibling;var mo=je(Ae,Ot,ln.value,ut);if(mo===null){Ot===null&&(Ot=ti);break}i&&Ot&&mo.alternate===null&&o(Ae,Ot),he=M(mo,he,zt),Ut===null?Ct=mo:Ut.sibling=mo,Ut=mo,Ot=ti}if(ln.done)return u(Ae,Ot),An&&Xo(Ae,zt),Ct;if(Ot===null){for(;!ln.done;zt++,ln=Ce.next())ln=rt(Ae,ln.value,ut),ln!==null&&(he=M(ln,he,zt),Ut===null?Ct=ln:Ut.sibling=ln,Ut=ln);return An&&Xo(Ae,zt),Ct}for(Ot=d(Ae,Ot);!ln.done;zt++,ln=Ce.next())ln=xt(Ot,Ae,zt,ln.value,ut),ln!==null&&(i&&ln.alternate!==null&&Ot.delete(ln.key===null?zt:ln.key),he=M(ln,he,zt),Ut===null?Ct=ln:Ut.sibling=ln,Ut=ln);return i&&Ot.forEach(function(jw){return o(Ae,jw)}),An&&Xo(Ae,zt),Ct}function Bn(Ae,he,Ce,ut){if(typeof Ce=="object"&&Ce!==null&&Ce.type===N&&Ce.key===null&&(Ce=Ce.props.children),typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case b:e:{for(var Ct=Ce.key,Ut=he;Ut!==null;){if(Ut.key===Ct){if(Ct=Ce.type,Ct===N){if(Ut.tag===7){u(Ae,Ut.sibling),he=v(Ut,Ce.props.children),he.return=Ae,Ae=he;break e}}else if(Ut.elementType===Ct||typeof Ct=="object"&&Ct!==null&&Ct.$$typeof===z&&d_(Ct)===Ut.type){u(Ae,Ut.sibling),he=v(Ut,Ce.props),he.ref=gu(Ae,Ut,Ce),he.return=Ae,Ae=he;break e}u(Ae,Ut);break}else o(Ae,Ut);Ut=Ut.sibling}Ce.type===N?(he=jo(Ce.props.children,Ae.mode,ut,Ce.key),he.return=Ae,Ae=he):(ut=Nf(Ce.type,Ce.key,Ce.props,null,Ae.mode,ut),ut.ref=gu(Ae,he,Ce),ut.return=Ae,Ae=ut)}return D(Ae);case R:e:{for(Ut=Ce.key;he!==null;){if(he.key===Ut)if(he.tag===4&&he.stateNode.containerInfo===Ce.containerInfo&&he.stateNode.implementation===Ce.implementation){u(Ae,he.sibling),he=v(he,Ce.children||[]),he.return=Ae,Ae=he;break e}else{u(Ae,he);break}else o(Ae,he);he=he.sibling}he=Kp(Ce,Ae.mode,ut),he.return=Ae,Ae=he}return D(Ae);case z:return Ut=Ce._init,Bn(Ae,he,Ut(Ce._payload),ut)}if(it(Ce))return Tt(Ae,he,Ce,ut);if(Y(Ce))return bt(Ae,he,Ce,ut);uf(Ae,Ce)}return typeof Ce=="string"&&Ce!==""||typeof Ce=="number"?(Ce=""+Ce,he!==null&&he.tag===6?(u(Ae,he.sibling),he=v(he,Ce),he.return=Ae,Ae=he):(u(Ae,he),he=$p(Ce,Ae.mode,ut),he.return=Ae,Ae=he),D(Ae)):u(Ae,he)}return Bn}var Xa=h_(!0),p_=h_(!1),cf=io(null),ff=null,Ya=null,rp=null;function sp(){rp=Ya=ff=null}function op(i){var o=cf.current;wn(cf),i._currentValue=o}function ap(i,o,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===u)break;i=i.return}}function qa(i,o){ff=i,rp=Ya=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(ki=!0),i.firstContext=null)}function wr(i){var o=i._currentValue;if(rp!==i)if(i={context:i,memoizedValue:o,next:null},Ya===null){if(ff===null)throw Error(t(308));Ya=i,ff.dependencies={lanes:0,firstContext:i}}else Ya=Ya.next=i;return o}var Yo=null;function lp(i){Yo===null?Yo=[i]:Yo.push(i)}function m_(i,o,u,d){var v=o.interleaved;return v===null?(u.next=u,lp(o)):(u.next=v.next,v.next=u),o.interleaved=u,bs(i,d)}function bs(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var oo=!1;function up(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Rs(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ao(i,o,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(on&2)!==0){var v=d.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),d.pending=o,bs(i,u)}return v=d.interleaved,v===null?(o.next=o,lp(d)):(o.next=v.next,v.next=o),d.interleaved=o,bs(i,u)}function df(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,di(i,u)}}function v_(i,o){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var v=null,M=null;if(u=u.firstBaseUpdate,u!==null){do{var D={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};M===null?v=M=D:M=M.next=D,u=u.next}while(u!==null);M===null?v=M=o:M=M.next=o}else v=M=o;u={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:M,shared:d.shared,effects:d.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function hf(i,o,u,d){var v=i.updateQueue;oo=!1;var M=v.firstBaseUpdate,D=v.lastBaseUpdate,J=v.shared.pending;if(J!==null){v.shared.pending=null;var ce=J,Ie=ce.next;ce.next=null,D===null?M=Ie:D.next=Ie,D=ce;var tt=i.alternate;tt!==null&&(tt=tt.updateQueue,J=tt.lastBaseUpdate,J!==D&&(J===null?tt.firstBaseUpdate=Ie:J.next=Ie,tt.lastBaseUpdate=ce))}if(M!==null){var rt=v.baseState;D=0,tt=Ie=ce=null,J=M;do{var je=J.lane,xt=J.eventTime;if((d&je)===je){tt!==null&&(tt=tt.next={eventTime:xt,lane:0,tag:J.tag,payload:J.payload,callback:J.callback,next:null});e:{var Tt=i,bt=J;switch(je=o,xt=u,bt.tag){case 1:if(Tt=bt.payload,typeof Tt=="function"){rt=Tt.call(xt,rt,je);break e}rt=Tt;break e;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=bt.payload,je=typeof Tt=="function"?Tt.call(xt,rt,je):Tt,je==null)break e;rt=I({},rt,je);break e;case 2:oo=!0}}J.callback!==null&&J.lane!==0&&(i.flags|=64,je=v.effects,je===null?v.effects=[J]:je.push(J))}else xt={eventTime:xt,lane:je,tag:J.tag,payload:J.payload,callback:J.callback,next:null},tt===null?(Ie=tt=xt,ce=rt):tt=tt.next=xt,D|=je;if(J=J.next,J===null){if(J=v.shared.pending,J===null)break;je=J,J=je.next,je.next=null,v.lastBaseUpdate=je,v.shared.pending=null}}while(!0);if(tt===null&&(ce=rt),v.baseState=ce,v.firstBaseUpdate=Ie,v.lastBaseUpdate=tt,o=v.shared.interleaved,o!==null){v=o;do D|=v.lane,v=v.next;while(v!==o)}else M===null&&(v.shared.lanes=0);Ko|=D,i.lanes=D,i.memoizedState=rt}}function __(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],v=d.callback;if(v!==null){if(d.callback=null,d=u,typeof v!="function")throw Error(t(191,v));v.call(d)}}}var vu={},rs=io(vu),_u=io(vu),xu=io(vu);function qo(i){if(i===vu)throw Error(t(174));return i}function cp(i,o){switch(Sn(xu,o),Sn(_u,i),Sn(rs,vu),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:w(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=w(o,i)}wn(rs),Sn(rs,o)}function $a(){wn(rs),wn(_u),wn(xu)}function x_(i){qo(xu.current);var o=qo(rs.current),u=w(o,i.type);o!==u&&(Sn(_u,i),Sn(rs,u))}function fp(i){_u.current===i&&(wn(rs),wn(_u))}var Cn=io(0);function pf(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var dp=[];function hp(){for(var i=0;i<dp.length;i++)dp[i]._workInProgressVersionPrimary=null;dp.length=0}var mf=A.ReactCurrentDispatcher,pp=A.ReactCurrentBatchConfig,$o=0,Pn=null,qn=null,jn=null,gf=!1,yu=!1,Su=0,Sw=0;function pi(){throw Error(t(321))}function mp(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!Gr(i[u],o[u]))return!1;return!0}function gp(i,o,u,d,v,M){if($o=M,Pn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,mf.current=i===null||i.memoizedState===null?Tw:Aw,i=u(d,v),yu){M=0;do{if(yu=!1,Su=0,25<=M)throw Error(t(301));M+=1,jn=qn=null,o.updateQueue=null,mf.current=bw,i=u(d,v)}while(yu)}if(mf.current=xf,o=qn!==null&&qn.next!==null,$o=0,jn=qn=Pn=null,gf=!1,o)throw Error(t(300));return i}function vp(){var i=Su!==0;return Su=0,i}function ss(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jn===null?Pn.memoizedState=jn=i:jn=jn.next=i,jn}function Tr(){if(qn===null){var i=Pn.alternate;i=i!==null?i.memoizedState:null}else i=qn.next;var o=jn===null?Pn.memoizedState:jn.next;if(o!==null)jn=o,qn=i;else{if(i===null)throw Error(t(310));qn=i,i={memoizedState:qn.memoizedState,baseState:qn.baseState,baseQueue:qn.baseQueue,queue:qn.queue,next:null},jn===null?Pn.memoizedState=jn=i:jn=jn.next=i}return jn}function Mu(i,o){return typeof o=="function"?o(i):o}function _p(i){var o=Tr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=qn,v=d.baseQueue,M=u.pending;if(M!==null){if(v!==null){var D=v.next;v.next=M.next,M.next=D}d.baseQueue=v=M,u.pending=null}if(v!==null){M=v.next,d=d.baseState;var J=D=null,ce=null,Ie=M;do{var tt=Ie.lane;if(($o&tt)===tt)ce!==null&&(ce=ce.next={lane:0,action:Ie.action,hasEagerState:Ie.hasEagerState,eagerState:Ie.eagerState,next:null}),d=Ie.hasEagerState?Ie.eagerState:i(d,Ie.action);else{var rt={lane:tt,action:Ie.action,hasEagerState:Ie.hasEagerState,eagerState:Ie.eagerState,next:null};ce===null?(J=ce=rt,D=d):ce=ce.next=rt,Pn.lanes|=tt,Ko|=tt}Ie=Ie.next}while(Ie!==null&&Ie!==M);ce===null?D=d:ce.next=J,Gr(d,o.memoizedState)||(ki=!0),o.memoizedState=d,o.baseState=D,o.baseQueue=ce,u.lastRenderedState=d}if(i=u.interleaved,i!==null){v=i;do M=v.lane,Pn.lanes|=M,Ko|=M,v=v.next;while(v!==i)}else v===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function xp(i){var o=Tr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=u.dispatch,v=u.pending,M=o.memoizedState;if(v!==null){u.pending=null;var D=v=v.next;do M=i(M,D.action),D=D.next;while(D!==v);Gr(M,o.memoizedState)||(ki=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),u.lastRenderedState=M}return[M,d]}function y_(){}function S_(i,o){var u=Pn,d=Tr(),v=o(),M=!Gr(d.memoizedState,v);if(M&&(d.memoizedState=v,ki=!0),d=d.queue,yp(w_.bind(null,u,d,i),[i]),d.getSnapshot!==o||M||jn!==null&&jn.memoizedState.tag&1){if(u.flags|=2048,Eu(9,E_.bind(null,u,d,v,o),void 0,null),ei===null)throw Error(t(349));($o&30)!==0||M_(u,o,v)}return v}function M_(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=Pn.updateQueue,o===null?(o={lastEffect:null,stores:null},Pn.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function E_(i,o,u,d){o.value=u,o.getSnapshot=d,T_(o)&&A_(i)}function w_(i,o,u){return u(function(){T_(o)&&A_(i)})}function T_(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!Gr(i,u)}catch{return!0}}function A_(i){var o=bs(i,1);o!==null&&$r(o,i,1,-1)}function b_(i){var o=ss();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mu,lastRenderedState:i},o.queue=i,i=i.dispatch=ww.bind(null,Pn,i),[o.memoizedState,i]}function Eu(i,o,u,d){return i={tag:i,create:o,destroy:u,deps:d,next:null},o=Pn.updateQueue,o===null?(o={lastEffect:null,stores:null},Pn.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,o.lastEffect=i)),i}function R_(){return Tr().memoizedState}function vf(i,o,u,d){var v=ss();Pn.flags|=i,v.memoizedState=Eu(1|o,u,void 0,d===void 0?null:d)}function _f(i,o,u,d){var v=Tr();d=d===void 0?null:d;var M=void 0;if(qn!==null){var D=qn.memoizedState;if(M=D.destroy,d!==null&&mp(d,D.deps)){v.memoizedState=Eu(o,u,M,d);return}}Pn.flags|=i,v.memoizedState=Eu(1|o,u,M,d)}function C_(i,o){return vf(8390656,8,i,o)}function yp(i,o){return _f(2048,8,i,o)}function P_(i,o){return _f(4,2,i,o)}function L_(i,o){return _f(4,4,i,o)}function D_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function N_(i,o,u){return u=u!=null?u.concat([i]):null,_f(4,4,D_.bind(null,o,i),u)}function Sp(){}function I_(i,o){var u=Tr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&mp(o,d[1])?d[0]:(u.memoizedState=[i,o],i)}function F_(i,o){var u=Tr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&mp(o,d[1])?d[0]:(i=i(),u.memoizedState=[i,o],i)}function U_(i,o,u){return($o&21)===0?(i.baseState&&(i.baseState=!1,ki=!0),i.memoizedState=u):(Gr(u,o)||(u=Yn(),Pn.lanes|=u,Ko|=u,i.baseState=!0),o)}function Mw(i,o){var u=Xt;Xt=u!==0&&4>u?u:4,i(!0);var d=pp.transition;pp.transition={};try{i(!1),o()}finally{Xt=u,pp.transition=d}}function O_(){return Tr().memoizedState}function Ew(i,o,u){var d=fo(i);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},k_(i))B_(o,u);else if(u=m_(i,o,u,d),u!==null){var v=Ai();$r(u,i,d,v),z_(u,o,d)}}function ww(i,o,u){var d=fo(i),v={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(k_(i))B_(o,v);else{var M=i.alternate;if(i.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var D=o.lastRenderedState,J=M(D,u);if(v.hasEagerState=!0,v.eagerState=J,Gr(J,D)){var ce=o.interleaved;ce===null?(v.next=v,lp(o)):(v.next=ce.next,ce.next=v),o.interleaved=v;return}}catch{}u=m_(i,o,v,d),u!==null&&(v=Ai(),$r(u,i,d,v),z_(u,o,d))}}function k_(i){var o=i.alternate;return i===Pn||o!==null&&o===Pn}function B_(i,o){yu=gf=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function z_(i,o,u){if((u&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,di(i,u)}}var xf={readContext:wr,useCallback:pi,useContext:pi,useEffect:pi,useImperativeHandle:pi,useInsertionEffect:pi,useLayoutEffect:pi,useMemo:pi,useReducer:pi,useRef:pi,useState:pi,useDebugValue:pi,useDeferredValue:pi,useTransition:pi,useMutableSource:pi,useSyncExternalStore:pi,useId:pi,unstable_isNewReconciler:!1},Tw={readContext:wr,useCallback:function(i,o){return ss().memoizedState=[i,o===void 0?null:o],i},useContext:wr,useEffect:C_,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,vf(4194308,4,D_.bind(null,o,i),u)},useLayoutEffect:function(i,o){return vf(4194308,4,i,o)},useInsertionEffect:function(i,o){return vf(4,2,i,o)},useMemo:function(i,o){var u=ss();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var d=ss();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=Ew.bind(null,Pn,i),[d.memoizedState,i]},useRef:function(i){var o=ss();return i={current:i},o.memoizedState=i},useState:b_,useDebugValue:Sp,useDeferredValue:function(i){return ss().memoizedState=i},useTransition:function(){var i=b_(!1),o=i[0];return i=Mw.bind(null,i[1]),ss().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var d=Pn,v=ss();if(An){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),ei===null)throw Error(t(349));($o&30)!==0||M_(d,o,u)}v.memoizedState=u;var M={value:u,getSnapshot:o};return v.queue=M,C_(w_.bind(null,d,M,i),[i]),d.flags|=2048,Eu(9,E_.bind(null,d,M,u,o),void 0,null),u},useId:function(){var i=ss(),o=ei.identifierPrefix;if(An){var u=As,d=Ts;u=(d&~(1<<32-ct(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Su++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Sw++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},Aw={readContext:wr,useCallback:I_,useContext:wr,useEffect:yp,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:F_,useReducer:_p,useRef:R_,useState:function(){return _p(Mu)},useDebugValue:Sp,useDeferredValue:function(i){var o=Tr();return U_(o,qn.memoizedState,i)},useTransition:function(){var i=_p(Mu)[0],o=Tr().memoizedState;return[i,o]},useMutableSource:y_,useSyncExternalStore:S_,useId:O_,unstable_isNewReconciler:!1},bw={readContext:wr,useCallback:I_,useContext:wr,useEffect:yp,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:F_,useReducer:xp,useRef:R_,useState:function(){return xp(Mu)},useDebugValue:Sp,useDeferredValue:function(i){var o=Tr();return qn===null?o.memoizedState=i:U_(o,qn.memoizedState,i)},useTransition:function(){var i=xp(Mu)[0],o=Tr().memoizedState;return[i,o]},useMutableSource:y_,useSyncExternalStore:S_,useId:O_,unstable_isNewReconciler:!1};function Xr(i,o){if(i&&i.defaultProps){o=I({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function Mp(i,o,u,d){o=i.memoizedState,u=u(d,o),u=u==null?o:I({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var yf={isMounted:function(i){return(i=i._reactInternals)?St(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var d=Ai(),v=fo(i),M=Rs(d,v);M.payload=o,u!=null&&(M.callback=u),o=ao(i,M,v),o!==null&&($r(o,i,v,d),df(o,i,v))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var d=Ai(),v=fo(i),M=Rs(d,v);M.tag=1,M.payload=o,u!=null&&(M.callback=u),o=ao(i,M,v),o!==null&&($r(o,i,v,d),df(o,i,v))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=Ai(),d=fo(i),v=Rs(u,d);v.tag=2,o!=null&&(v.callback=o),o=ao(i,v,d),o!==null&&($r(o,i,d,u),df(o,i,d))}};function V_(i,o,u,d,v,M,D){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,M,D):o.prototype&&o.prototype.isPureReactComponent?!uu(u,d)||!uu(v,M):!0}function H_(i,o,u){var d=!1,v=ro,M=o.contextType;return typeof M=="object"&&M!==null?M=wr(M):(v=Oi(o)?Go:hi.current,d=o.contextTypes,M=(d=d!=null)?Va(i,v):ro),o=new o(u,M),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=yf,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=M),o}function G_(i,o,u,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==i&&yf.enqueueReplaceState(o,o.state,null)}function Ep(i,o,u,d){var v=i.stateNode;v.props=u,v.state=i.memoizedState,v.refs={},up(i);var M=o.contextType;typeof M=="object"&&M!==null?v.context=wr(M):(M=Oi(o)?Go:hi.current,v.context=Va(i,M)),v.state=i.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Mp(i,o,M,u),v.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&yf.enqueueReplaceState(v,v.state,null),hf(i,u,v,d),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function Ka(i,o){try{var u="",d=o;do u+=se(d),d=d.return;while(d);var v=u}catch(M){v=`
Error generating stack: `+M.message+`
`+M.stack}return{value:i,source:o,stack:v,digest:null}}function wp(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function Tp(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function W_(i,o,u){u=Rs(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){bf||(bf=!0,zp=d),Tp(i,o)},u}function X_(i,o,u){u=Rs(-1,u),u.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var v=o.value;u.payload=function(){return d(v)},u.callback=function(){Tp(i,o)}}var M=i.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(u.callback=function(){Tp(i,o),typeof d!="function"&&(uo===null?uo=new Set([this]):uo.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})}),u}function Y_(i,o,u){var d=i.pingCache;if(d===null){d=i.pingCache=new Rw;var v=new Set;d.set(o,v)}else v=d.get(o),v===void 0&&(v=new Set,d.set(o,v));v.has(u)||(v.add(u),i=Hw.bind(null,i,o,u),o.then(i,i))}function q_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function $_(i,o,u,d,v){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Rs(-1,1),o.tag=2,ao(u,o,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var Cw=A.ReactCurrentOwner,ki=!1;function Ti(i,o,u,d){o.child=i===null?p_(o,null,u,d):Xa(o,i.child,u,d)}function K_(i,o,u,d,v){u=u.render;var M=o.ref;return qa(o,v),d=gp(i,o,u,d,M,v),u=vp(),i!==null&&!ki?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Cs(i,o,v)):(An&&u&&jh(o),o.flags|=1,Ti(i,o,d,v),o.child)}function Z_(i,o,u,d,v){if(i===null){var M=u.type;return typeof M=="function"&&!qp(M)&&M.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=M,J_(i,o,M,d,v)):(i=Nf(u.type,null,d,o,o.mode,v),i.ref=o.ref,i.return=o,o.child=i)}if(M=i.child,(i.lanes&v)===0){var D=M.memoizedProps;if(u=u.compare,u=u!==null?u:uu,u(D,d)&&i.ref===o.ref)return Cs(i,o,v)}return o.flags|=1,i=po(M,d),i.ref=o.ref,i.return=o,o.child=i}function J_(i,o,u,d,v){if(i!==null){var M=i.memoizedProps;if(uu(M,d)&&i.ref===o.ref)if(ki=!1,o.pendingProps=d=M,(i.lanes&v)!==0)(i.flags&131072)!==0&&(ki=!0);else return o.lanes=i.lanes,Cs(i,o,v)}return Ap(i,o,u,d,v)}function Q_(i,o,u){var d=o.pendingProps,v=d.children,M=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Sn(Ja,nr),nr|=u;else{if((u&1073741824)===0)return i=M!==null?M.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Sn(Ja,nr),nr|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:u,Sn(Ja,nr),nr|=d}else M!==null?(d=M.baseLanes|u,o.memoizedState=null):d=u,Sn(Ja,nr),nr|=d;return Ti(i,o,v,u),o.child}function j_(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Ap(i,o,u,d,v){var M=Oi(u)?Go:hi.current;return M=Va(o,M),qa(o,v),u=gp(i,o,u,d,M,v),d=vp(),i!==null&&!ki?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Cs(i,o,v)):(An&&d&&jh(o),o.flags|=1,Ti(i,o,u,v),o.child)}function ex(i,o,u,d,v){if(Oi(u)){var M=!0;rf(o)}else M=!1;if(qa(o,v),o.stateNode===null)Mf(i,o),H_(o,u,d),Ep(o,u,d,v),d=!0;else if(i===null){var D=o.stateNode,J=o.memoizedProps;D.props=J;var ce=D.context,Ie=u.contextType;typeof Ie=="object"&&Ie!==null?Ie=wr(Ie):(Ie=Oi(u)?Go:hi.current,Ie=Va(o,Ie));var tt=u.getDerivedStateFromProps,rt=typeof tt=="function"||typeof D.getSnapshotBeforeUpdate=="function";rt||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(J!==d||ce!==Ie)&&G_(o,D,d,Ie),oo=!1;var je=o.memoizedState;D.state=je,hf(o,d,D,v),ce=o.memoizedState,J!==d||je!==ce||Ui.current||oo?(typeof tt=="function"&&(Mp(o,u,tt,d),ce=o.memoizedState),(J=oo||V_(o,u,J,d,je,ce,Ie))?(rt||typeof D.UNSAFE_componentWillMount!="function"&&typeof D.componentWillMount!="function"||(typeof D.componentWillMount=="function"&&D.componentWillMount(),typeof D.UNSAFE_componentWillMount=="function"&&D.UNSAFE_componentWillMount()),typeof D.componentDidMount=="function"&&(o.flags|=4194308)):(typeof D.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=ce),D.props=d,D.state=ce,D.context=Ie,d=J):(typeof D.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{D=o.stateNode,g_(i,o),J=o.memoizedProps,Ie=o.type===o.elementType?J:Xr(o.type,J),D.props=Ie,rt=o.pendingProps,je=D.context,ce=u.contextType,typeof ce=="object"&&ce!==null?ce=wr(ce):(ce=Oi(u)?Go:hi.current,ce=Va(o,ce));var xt=u.getDerivedStateFromProps;(tt=typeof xt=="function"||typeof D.getSnapshotBeforeUpdate=="function")||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(J!==rt||je!==ce)&&G_(o,D,d,ce),oo=!1,je=o.memoizedState,D.state=je,hf(o,d,D,v);var Tt=o.memoizedState;J!==rt||je!==Tt||Ui.current||oo?(typeof xt=="function"&&(Mp(o,u,xt,d),Tt=o.memoizedState),(Ie=oo||V_(o,u,Ie,d,je,Tt,ce)||!1)?(tt||typeof D.UNSAFE_componentWillUpdate!="function"&&typeof D.componentWillUpdate!="function"||(typeof D.componentWillUpdate=="function"&&D.componentWillUpdate(d,Tt,ce),typeof D.UNSAFE_componentWillUpdate=="function"&&D.UNSAFE_componentWillUpdate(d,Tt,ce)),typeof D.componentDidUpdate=="function"&&(o.flags|=4),typeof D.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof D.componentDidUpdate!="function"||J===i.memoizedProps&&je===i.memoizedState||(o.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||J===i.memoizedProps&&je===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=Tt),D.props=d,D.state=Tt,D.context=ce,d=Ie):(typeof D.componentDidUpdate!="function"||J===i.memoizedProps&&je===i.memoizedState||(o.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||J===i.memoizedProps&&je===i.memoizedState||(o.flags|=1024),d=!1)}return bp(i,o,u,d,M,v)}function bp(i,o,u,d,v,M){j_(i,o);var D=(o.flags&128)!==0;if(!d&&!D)return v&&s_(o,u,!1),Cs(i,o,M);d=o.stateNode,Cw.current=o;var J=D&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&D?(o.child=Xa(o,i.child,null,M),o.child=Xa(o,null,J,M)):Ti(i,o,J,M),o.memoizedState=d.state,v&&s_(o,u,!0),o.child}function tx(i){var o=i.stateNode;o.pendingContext?i_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&i_(i,o.context,!1),cp(i,o.containerInfo)}function nx(i,o,u,d,v){return Wa(),ip(v),o.flags|=256,Ti(i,o,u,d),o.child}var Rp={dehydrated:null,treeContext:null,retryLane:0};function Cp(i){return{baseLanes:i,cachePool:null,transitions:null}}function ix(i,o,u){var d=o.pendingProps,v=Cn.current,M=!1,D=(o.flags&128)!==0,J;if((J=D)||(J=i!==null&&i.memoizedState===null?!1:(v&2)!==0),J?(M=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),Sn(Cn,v&1),i===null)return np(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(D=d.children,i=d.fallback,M?(d=o.mode,M=o.child,D={mode:"hidden",children:D},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=D):M=If(D,d,0,null),i=jo(i,d,u,null),M.return=o,i.return=o,M.sibling=i,o.child=M,o.child.memoizedState=Cp(u),o.memoizedState=Rp,i):Pp(o,D));if(v=i.memoizedState,v!==null&&(J=v.dehydrated,J!==null))return Pw(i,o,D,d,J,v,u);if(M){M=d.fallback,D=o.mode,v=i.child,J=v.sibling;var ce={mode:"hidden",children:d.children};return(D&1)===0&&o.child!==v?(d=o.child,d.childLanes=0,d.pendingProps=ce,o.deletions=null):(d=po(v,ce),d.subtreeFlags=v.subtreeFlags&14680064),J!==null?M=po(J,M):(M=jo(M,D,u,null),M.flags|=2),M.return=o,d.return=o,d.sibling=M,o.child=d,d=M,M=o.child,D=i.child.memoizedState,D=D===null?Cp(u):{baseLanes:D.baseLanes|u,cachePool:null,transitions:D.transitions},M.memoizedState=D,M.childLanes=i.childLanes&~u,o.memoizedState=Rp,d}return M=i.child,i=M.sibling,d=po(M,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=d,o.memoizedState=null,d}function Pp(i,o){return o=If({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Sf(i,o,u,d){return d!==null&&ip(d),Xa(o,i.child,null,u),i=Pp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function Pw(i,o,u,d,v,M,D){if(u)return o.flags&256?(o.flags&=-257,d=wp(Error(t(422))),Sf(i,o,D,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(M=d.fallback,v=o.mode,d=If({mode:"visible",children:d.children},v,0,null),M=jo(M,v,D,null),M.flags|=2,d.return=o,M.return=o,d.sibling=M,o.child=d,(o.mode&1)!==0&&Xa(o,i.child,null,D),o.child.memoizedState=Cp(D),o.memoizedState=Rp,M);if((o.mode&1)===0)return Sf(i,o,D,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var J=d.dgst;return d=J,M=Error(t(419)),d=wp(M,d,void 0),Sf(i,o,D,d)}if(J=(D&i.childLanes)!==0,ki||J){if(d=ei,d!==null){switch(D&-D){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|D))!==0?0:v,v!==0&&v!==M.retryLane&&(M.retryLane=v,bs(i,v),$r(d,i,v,-1))}return Yp(),d=wp(Error(t(421))),Sf(i,o,D,d)}return v.data==="$?"?(o.flags|=128,o.child=i.child,o=Gw.bind(null,i),v._reactRetry=o,null):(i=M.treeContext,tr=no(v.nextSibling),er=o,An=!0,Wr=null,i!==null&&(Mr[Er++]=Ts,Mr[Er++]=As,Mr[Er++]=Wo,Ts=i.id,As=i.overflow,Wo=o),o=Pp(o,d.children),o.flags|=4096,o)}function rx(i,o,u){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),ap(i.return,o,u)}function Lp(i,o,u,d,v){var M=i.memoizedState;M===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:v}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=u,M.tailMode=v)}function sx(i,o,u){var d=o.pendingProps,v=d.revealOrder,M=d.tail;if(Ti(i,o,d.children,u),d=Cn.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&rx(i,u,o);else if(i.tag===19)rx(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Sn(Cn,d),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(u=o.child,v=null;u!==null;)i=u.alternate,i!==null&&pf(i)===null&&(v=u),u=u.sibling;u=v,u===null?(v=o.child,o.child=null):(v=u.sibling,u.sibling=null),Lp(o,!1,v,u,M);break;case"backwards":for(u=null,v=o.child,o.child=null;v!==null;){if(i=v.alternate,i!==null&&pf(i)===null){o.child=v;break}i=v.sibling,v.sibling=u,u=v,v=i}Lp(o,!0,u,null,M);break;case"together":Lp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Mf(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Cs(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),Ko|=o.lanes,(u&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=po(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=po(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function Lw(i,o,u){switch(o.tag){case 3:tx(o),Wa();break;case 5:x_(o);break;case 1:Oi(o.type)&&rf(o);break;case 4:cp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,v=o.memoizedProps.value;Sn(cf,d._currentValue),d._currentValue=v;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Sn(Cn,Cn.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?ix(i,o,u):(Sn(Cn,Cn.current&1),i=Cs(i,o,u),i!==null?i.sibling:null);Sn(Cn,Cn.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(i.flags&128)!==0){if(d)return sx(i,o,u);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Sn(Cn,Cn.current),d)break;return null;case 22:case 23:return o.lanes=0,Q_(i,o,u)}return Cs(i,o,u)}var ox,Dp,ax,lx;ox=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dp=function(){},ax=function(i,o,u,d){var v=i.memoizedProps;if(v!==d){i=o.stateNode,qo(rs.current);var M=null;switch(u){case"input":v=Ke(i,v),d=Ke(i,d),M=[];break;case"select":v=I({},v,{value:void 0}),d=I({},d,{value:void 0}),M=[];break;case"textarea":v=vt(i,v),d=vt(i,d),M=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=ef)}Je(u,d);var D;u=null;for(Ie in v)if(!d.hasOwnProperty(Ie)&&v.hasOwnProperty(Ie)&&v[Ie]!=null)if(Ie==="style"){var J=v[Ie];for(D in J)J.hasOwnProperty(D)&&(u||(u={}),u[D]="")}else Ie!=="dangerouslySetInnerHTML"&&Ie!=="children"&&Ie!=="suppressContentEditableWarning"&&Ie!=="suppressHydrationWarning"&&Ie!=="autoFocus"&&(r.hasOwnProperty(Ie)?M||(M=[]):(M=M||[]).push(Ie,null));for(Ie in d){var ce=d[Ie];if(J=v?.[Ie],d.hasOwnProperty(Ie)&&ce!==J&&(ce!=null||J!=null))if(Ie==="style")if(J){for(D in J)!J.hasOwnProperty(D)||ce&&ce.hasOwnProperty(D)||(u||(u={}),u[D]="");for(D in ce)ce.hasOwnProperty(D)&&J[D]!==ce[D]&&(u||(u={}),u[D]=ce[D])}else u||(M||(M=[]),M.push(Ie,u)),u=ce;else Ie==="dangerouslySetInnerHTML"?(ce=ce?ce.__html:void 0,J=J?J.__html:void 0,ce!=null&&J!==ce&&(M=M||[]).push(Ie,ce)):Ie==="children"?typeof ce!="string"&&typeof ce!="number"||(M=M||[]).push(Ie,""+ce):Ie!=="suppressContentEditableWarning"&&Ie!=="suppressHydrationWarning"&&(r.hasOwnProperty(Ie)?(ce!=null&&Ie==="onScroll"&&En("scroll",i),M||J===ce||(M=[])):(M=M||[]).push(Ie,ce))}u&&(M=M||[]).push("style",u);var Ie=M;(o.updateQueue=Ie)&&(o.flags|=4)}},lx=function(i,o,u,d){u!==d&&(o.flags|=4)};function wu(i,o){if(!An)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function mi(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(o)for(var v=i.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=d,i.childLanes=u,o}function Dw(i,o,u){var d=o.pendingProps;switch(ep(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mi(o),null;case 1:return Oi(o.type)&&nf(),mi(o),null;case 3:return d=o.stateNode,$a(),wn(Ui),wn(hi),hp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(lf(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Wr!==null&&(Gp(Wr),Wr=null))),Dp(i,o),mi(o),null;case 5:fp(o);var v=qo(xu.current);if(u=o.type,i!==null&&o.stateNode!=null)ax(i,o,u,d,v),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return mi(o),null}if(i=qo(rs.current),lf(o)){d=o.stateNode,u=o.type;var M=o.memoizedProps;switch(d[is]=o,d[pu]=M,i=(o.mode&1)!==0,u){case"dialog":En("cancel",d),En("close",d);break;case"iframe":case"object":case"embed":En("load",d);break;case"video":case"audio":for(v=0;v<fu.length;v++)En(fu[v],d);break;case"source":En("error",d);break;case"img":case"image":case"link":En("error",d),En("load",d);break;case"details":En("toggle",d);break;case"input":$e(d,M),En("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},En("invalid",d);break;case"textarea":q(d,M),En("invalid",d)}Je(u,M),v=null;for(var D in M)if(M.hasOwnProperty(D)){var J=M[D];D==="children"?typeof J=="string"?d.textContent!==J&&(M.suppressHydrationWarning!==!0&&jc(d.textContent,J,i),v=["children",J]):typeof J=="number"&&d.textContent!==""+J&&(M.suppressHydrationWarning!==!0&&jc(d.textContent,J,i),v=["children",""+J]):r.hasOwnProperty(D)&&J!=null&&D==="onScroll"&&En("scroll",d)}switch(u){case"input":ze(d),Et(d,M,!0);break;case"textarea":ze(d),Le(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=ef)}d=v,o.updateQueue=d,d!==null&&(o.flags|=4)}else{D=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=F(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=D.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=D.createElement(u,{is:d.is}):(i=D.createElement(u),u==="select"&&(D=i,d.multiple?D.multiple=!0:d.size&&(D.size=d.size))):i=D.createElementNS(i,u),i[is]=o,i[pu]=d,ox(i,o,!1,!1),o.stateNode=i;e:{switch(D=Se(u,d),u){case"dialog":En("cancel",i),En("close",i),v=d;break;case"iframe":case"object":case"embed":En("load",i),v=d;break;case"video":case"audio":for(v=0;v<fu.length;v++)En(fu[v],i);v=d;break;case"source":En("error",i),v=d;break;case"img":case"image":case"link":En("error",i),En("load",i),v=d;break;case"details":En("toggle",i),v=d;break;case"input":$e(i,d),v=Ke(i,d),En("invalid",i);break;case"option":v=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},v=I({},d,{value:void 0}),En("invalid",i);break;case"textarea":q(i,d),v=vt(i,d),En("invalid",i);break;default:v=d}Je(u,v),J=v;for(M in J)if(J.hasOwnProperty(M)){var ce=J[M];M==="style"?we(i,ce):M==="dangerouslySetInnerHTML"?(ce=ce?ce.__html:void 0,ce!=null&&W(i,ce)):M==="children"?typeof ce=="string"?(u!=="textarea"||ce!=="")&&de(i,ce):typeof ce=="number"&&de(i,""+ce):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(r.hasOwnProperty(M)?ce!=null&&M==="onScroll"&&En("scroll",i):ce!=null&&O(i,M,ce,D))}switch(u){case"input":ze(i),Et(i,d,!1);break;case"textarea":ze(i),Le(i);break;case"option":d.value!=null&&i.setAttribute("value",""+te(d.value));break;case"select":i.multiple=!!d.multiple,M=d.value,M!=null?Qe(i,!!d.multiple,M,!1):d.defaultValue!=null&&Qe(i,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=ef)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return mi(o),null;case 6:if(i&&o.stateNode!=null)lx(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=qo(xu.current),qo(rs.current),lf(o)){if(d=o.stateNode,u=o.memoizedProps,d[is]=o,(M=d.nodeValue!==u)&&(i=er,i!==null))switch(i.tag){case 3:jc(d.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&jc(d.nodeValue,u,(i.mode&1)!==0)}M&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[is]=o,o.stateNode=d}return mi(o),null;case 13:if(wn(Cn),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(An&&tr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)f_(),Wa(),o.flags|=98560,M=!1;else if(M=lf(o),d!==null&&d.dehydrated!==null){if(i===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[is]=o}else Wa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;mi(o),M=!1}else Wr!==null&&(Gp(Wr),Wr=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Cn.current&1)!==0?$n===0&&($n=3):Yp())),o.updateQueue!==null&&(o.flags|=4),mi(o),null);case 4:return $a(),Dp(i,o),i===null&&du(o.stateNode.containerInfo),mi(o),null;case 10:return op(o.type._context),mi(o),null;case 17:return Oi(o.type)&&nf(),mi(o),null;case 19:if(wn(Cn),M=o.memoizedState,M===null)return mi(o),null;if(d=(o.flags&128)!==0,D=M.rendering,D===null)if(d)wu(M,!1);else{if($n!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(D=pf(i),D!==null){for(o.flags|=128,wu(M,!1),d=D.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)M=u,i=d,M.flags&=14680066,D=M.alternate,D===null?(M.childLanes=0,M.lanes=i,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=D.childLanes,M.lanes=D.lanes,M.child=D.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=D.memoizedProps,M.memoizedState=D.memoizedState,M.updateQueue=D.updateQueue,M.type=D.type,i=D.dependencies,M.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return Sn(Cn,Cn.current&1|2),o.child}i=i.sibling}M.tail!==null&&Ft()>Qa&&(o.flags|=128,d=!0,wu(M,!1),o.lanes=4194304)}else{if(!d)if(i=pf(D),i!==null){if(o.flags|=128,d=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),wu(M,!0),M.tail===null&&M.tailMode==="hidden"&&!D.alternate&&!An)return mi(o),null}else 2*Ft()-M.renderingStartTime>Qa&&u!==1073741824&&(o.flags|=128,d=!0,wu(M,!1),o.lanes=4194304);M.isBackwards?(D.sibling=o.child,o.child=D):(u=M.last,u!==null?u.sibling=D:o.child=D,M.last=D)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=Ft(),o.sibling=null,u=Cn.current,Sn(Cn,d?u&1|2:u&1),o):(mi(o),null);case 22:case 23:return Xp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(nr&1073741824)!==0&&(mi(o),o.subtreeFlags&6&&(o.flags|=8192)):mi(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function Nw(i,o){switch(ep(o),o.tag){case 1:return Oi(o.type)&&nf(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return $a(),wn(Ui),wn(hi),hp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return fp(o),null;case 13:if(wn(Cn),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Wa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return wn(Cn),null;case 4:return $a(),null;case 10:return op(o.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var Ef=!1,gi=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function Za(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){Fn(i,o,d)}else u.current=null}function Np(i,o,u){try{u()}catch(d){Fn(i,o,d)}}var ux=!1;function Fw(i,o){if(Xh=Hc,i=Vv(),Oh(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var v=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{u.nodeType,M.nodeType}catch{u=null;break e}var D=0,J=-1,ce=-1,Ie=0,tt=0,rt=i,je=null;t:for(;;){for(var xt;rt!==u||v!==0&&rt.nodeType!==3||(J=D+v),rt!==M||d!==0&&rt.nodeType!==3||(ce=D+d),rt.nodeType===3&&(D+=rt.nodeValue.length),(xt=rt.firstChild)!==null;)je=rt,rt=xt;for(;;){if(rt===i)break t;if(je===u&&++Ie===v&&(J=D),je===M&&++tt===d&&(ce=D),(xt=rt.nextSibling)!==null)break;rt=je,je=rt.parentNode}rt=xt}u=J===-1||ce===-1?null:{start:J,end:ce}}else u=null}u=u||{start:0,end:0}}else u=null;for(Yh={focusedElem:i,selectionRange:u},Hc=!1,Mt=o;Mt!==null;)if(o=Mt,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Mt=i;else for(;Mt!==null;){o=Mt;try{var Tt=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Tt!==null){var bt=Tt.memoizedProps,Bn=Tt.memoizedState,Ae=o.stateNode,he=Ae.getSnapshotBeforeUpdate(o.elementType===o.type?bt:Xr(o.type,bt),Bn);Ae.__reactInternalSnapshotBeforeUpdate=he}break;case 3:var Ce=o.stateNode.containerInfo;Ce.nodeType===1?Ce.textContent="":Ce.nodeType===9&&Ce.documentElement&&Ce.removeChild(Ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ut){Fn(o,o.return,ut)}if(i=o.sibling,i!==null){i.return=o.return,Mt=i;break}Mt=o.return}return Tt=ux,ux=!1,Tt}function Tu(i,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&i)===i){var M=v.destroy;v.destroy=void 0,M!==void 0&&Np(o,u,M)}v=v.next}while(v!==d)}}function wf(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Ip(i){var o=i.ref;if(o!==null){var u=i.stateNode;i.tag,i=u,typeof o=="function"?o(i):o.current=i}}function cx(i){var o=i.alternate;o!==null&&(i.alternate=null,cx(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[is],delete o[pu],delete o[Zh],delete o[vw],delete o[_w])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function fx(i){return i.tag===5||i.tag===3||i.tag===4}function dx(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||fx(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Fp(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=ef));else if(d!==4&&(i=i.child,i!==null))for(Fp(i,o,u),i=i.sibling;i!==null;)Fp(i,o,u),i=i.sibling}function Up(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Up(i,o,u),i=i.sibling;i!==null;)Up(i,o,u),i=i.sibling}var oi=null,Yr=!1;function lo(i,o,u){for(u=u.child;u!==null;)hx(i,o,u),u=u.sibling}function hx(i,o,u){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(ue,u)}catch{}switch(u.tag){case 5:gi||Za(u,o);case 6:var d=oi,v=Yr;oi=null,lo(i,o,u),oi=d,Yr=v,oi!==null&&(Yr?(i=oi,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):oi.removeChild(u.stateNode));break;case 18:oi!==null&&(Yr?(i=oi,u=u.stateNode,i.nodeType===8?Kh(i.parentNode,u):i.nodeType===1&&Kh(i,u),iu(i)):Kh(oi,u.stateNode));break;case 4:d=oi,v=Yr,oi=u.stateNode.containerInfo,Yr=!0,lo(i,o,u),oi=d,Yr=v;break;case 0:case 11:case 14:case 15:if(!gi&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var M=v,D=M.destroy;M=M.tag,D!==void 0&&((M&2)!==0||(M&4)!==0)&&Np(u,o,D),v=v.next}while(v!==d)}lo(i,o,u);break;case 1:if(!gi&&(Za(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(J){Fn(u,o,J)}lo(i,o,u);break;case 21:lo(i,o,u);break;case 22:u.mode&1?(gi=(d=gi)||u.memoizedState!==null,lo(i,o,u),gi=d):lo(i,o,u);break;default:lo(i,o,u)}}function px(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new Iw),o.forEach(function(d){var v=Ww.bind(null,i,d);u.has(d)||(u.add(d),d.then(v,v))})}}function qr(i,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var v=u[d];try{var M=i,D=o,J=D;e:for(;J!==null;){switch(J.tag){case 5:oi=J.stateNode,Yr=!1;break e;case 3:oi=J.stateNode.containerInfo,Yr=!0;break e;case 4:oi=J.stateNode.containerInfo,Yr=!0;break e}J=J.return}if(oi===null)throw Error(t(160));hx(M,D,v),oi=null,Yr=!1;var ce=v.alternate;ce!==null&&(ce.return=null),v.return=null}catch(Ie){Fn(v,o,Ie)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)mx(o,i),o=o.sibling}function mx(i,o){var u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(qr(o,i),os(i),d&4){try{Tu(3,i,i.return),wf(3,i)}catch(bt){Fn(i,i.return,bt)}try{Tu(5,i,i.return)}catch(bt){Fn(i,i.return,bt)}}break;case 1:qr(o,i),os(i),d&512&&u!==null&&Za(u,u.return);break;case 5:if(qr(o,i),os(i),d&512&&u!==null&&Za(u,u.return),i.flags&32){var v=i.stateNode;try{de(v,"")}catch(bt){Fn(i,i.return,bt)}}if(d&4&&(v=i.stateNode,v!=null)){var M=i.memoizedProps,D=u!==null?u.memoizedProps:M,J=i.type,ce=i.updateQueue;if(i.updateQueue=null,ce!==null)try{J==="input"&&M.type==="radio"&&M.name!=null&&be(v,M),Se(J,D);var Ie=Se(J,M);for(D=0;D<ce.length;D+=2){var tt=ce[D],rt=ce[D+1];tt==="style"?we(v,rt):tt==="dangerouslySetInnerHTML"?W(v,rt):tt==="children"?de(v,rt):O(v,tt,rt,Ie)}switch(J){case"input":fe(v,M);break;case"textarea":We(v,M);break;case"select":var je=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!M.multiple;var xt=M.value;xt!=null?Qe(v,!!M.multiple,xt,!1):je!==!!M.multiple&&(M.defaultValue!=null?Qe(v,!!M.multiple,M.defaultValue,!0):Qe(v,!!M.multiple,M.multiple?[]:"",!1))}v[pu]=M}catch(bt){Fn(i,i.return,bt)}}break;case 6:if(qr(o,i),os(i),d&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,M=i.memoizedProps;try{v.nodeValue=M}catch(bt){Fn(i,i.return,bt)}}break;case 3:if(qr(o,i),os(i),d&4&&u!==null&&u.memoizedState.isDehydrated)try{iu(o.containerInfo)}catch(bt){Fn(i,i.return,bt)}break;case 4:qr(o,i),os(i);break;case 13:qr(o,i),os(i),v=i.child,v.flags&8192&&(M=v.memoizedState!==null,v.stateNode.isHidden=M,!M||v.alternate!==null&&v.alternate.memoizedState!==null||(Bp=Ft())),d&4&&px(i);break;case 22:if(tt=u!==null&&u.memoizedState!==null,i.mode&1?(gi=(Ie=gi)||tt,qr(o,i),gi=Ie):qr(o,i),os(i),d&8192){if(Ie=i.memoizedState!==null,(i.stateNode.isHidden=Ie)&&!tt&&(i.mode&1)!==0)for(Mt=i,tt=i.child;tt!==null;){for(rt=Mt=tt;Mt!==null;){switch(je=Mt,xt=je.child,je.tag){case 0:case 11:case 14:case 15:Tu(4,je,je.return);break;case 1:Za(je,je.return);var Tt=je.stateNode;if(typeof Tt.componentWillUnmount=="function"){d=je,u=je.return;try{o=d,Tt.props=o.memoizedProps,Tt.state=o.memoizedState,Tt.componentWillUnmount()}catch(bt){Fn(d,u,bt)}}break;case 5:Za(je,je.return);break;case 22:if(je.memoizedState!==null){_x(rt);continue}}xt!==null?(xt.return=je,Mt=xt):_x(rt)}tt=tt.sibling}e:for(tt=null,rt=i;;){if(rt.tag===5){if(tt===null){tt=rt;try{v=rt.stateNode,Ie?(M=v.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(J=rt.stateNode,ce=rt.memoizedProps.style,D=ce!=null&&ce.hasOwnProperty("display")?ce.display:null,J.style.display=Ee("display",D))}catch(bt){Fn(i,i.return,bt)}}}else if(rt.tag===6){if(tt===null)try{rt.stateNode.nodeValue=Ie?"":rt.memoizedProps}catch(bt){Fn(i,i.return,bt)}}else if((rt.tag!==22&&rt.tag!==23||rt.memoizedState===null||rt===i)&&rt.child!==null){rt.child.return=rt,rt=rt.child;continue}if(rt===i)break e;for(;rt.sibling===null;){if(rt.return===null||rt.return===i)break e;tt===rt&&(tt=null),rt=rt.return}tt===rt&&(tt=null),rt.sibling.return=rt.return,rt=rt.sibling}}break;case 19:qr(o,i),os(i),d&4&&px(i);break;case 21:break;default:qr(o,i),os(i)}}function os(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(fx(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(de(v,""),d.flags&=-33);var M=dx(i);Up(i,M,v);break;case 3:case 4:var D=d.stateNode.containerInfo,J=dx(i);Fp(i,J,D);break;default:throw Error(t(161))}}catch(ce){Fn(i,i.return,ce)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function Uw(i,o,u){Mt=i,gx(i)}function gx(i,o,u){for(var d=(i.mode&1)!==0;Mt!==null;){var v=Mt,M=v.child;if(v.tag===22&&d){var D=v.memoizedState!==null||Ef;if(!D){var J=v.alternate,ce=J!==null&&J.memoizedState!==null||gi;J=Ef;var Ie=gi;if(Ef=D,(gi=ce)&&!Ie)for(Mt=v;Mt!==null;)D=Mt,ce=D.child,D.tag===22&&D.memoizedState!==null?xx(v):ce!==null?(ce.return=D,Mt=ce):xx(v);for(;M!==null;)Mt=M,gx(M),M=M.sibling;Mt=v,Ef=J,gi=Ie}vx(i)}else(v.subtreeFlags&8772)!==0&&M!==null?(M.return=v,Mt=M):vx(i)}}function vx(i){for(;Mt!==null;){var o=Mt;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:gi||wf(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!gi)if(u===null)d.componentDidMount();else{var v=o.elementType===o.type?u.memoizedProps:Xr(o.type,u.memoizedProps);d.componentDidUpdate(v,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&__(o,M,d);break;case 3:var D=o.updateQueue;if(D!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}__(o,D,u)}break;case 5:var J=o.stateNode;if(u===null&&o.flags&4){u=J;var ce=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":ce.autoFocus&&u.focus();break;case"img":ce.src&&(u.src=ce.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Ie=o.alternate;if(Ie!==null){var tt=Ie.memoizedState;if(tt!==null){var rt=tt.dehydrated;rt!==null&&iu(rt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gi||o.flags&512&&Ip(o)}catch(je){Fn(o,o.return,je)}}if(o===i){Mt=null;break}if(u=o.sibling,u!==null){u.return=o.return,Mt=u;break}Mt=o.return}}function _x(i){for(;Mt!==null;){var o=Mt;if(o===i){Mt=null;break}var u=o.sibling;if(u!==null){u.return=o.return,Mt=u;break}Mt=o.return}}function xx(i){for(;Mt!==null;){var o=Mt;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{wf(4,o)}catch(ce){Fn(o,u,ce)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var v=o.return;try{d.componentDidMount()}catch(ce){Fn(o,v,ce)}}var M=o.return;try{Ip(o)}catch(ce){Fn(o,M,ce)}break;case 5:var D=o.return;try{Ip(o)}catch(ce){Fn(o,D,ce)}}}catch(ce){Fn(o,o.return,ce)}if(o===i){Mt=null;break}var J=o.sibling;if(J!==null){J.return=o.return,Mt=J;break}Mt=o.return}}var Ow=Math.ceil,Tf=A.ReactCurrentDispatcher,Op=A.ReactCurrentOwner,Ar=A.ReactCurrentBatchConfig,on=0,ei=null,Hn=null,ai=0,nr=0,Ja=io(0),$n=0,Au=null,Ko=0,Af=0,kp=0,bu=null,Bi=null,Bp=0,Qa=1/0,Ps=null,bf=!1,zp=null,uo=null,Rf=!1,co=null,Cf=0,Ru=0,Vp=null,Pf=-1,Lf=0;function Ai(){return(on&6)!==0?Ft():Pf!==-1?Pf:Pf=Ft()}function fo(i){return(i.mode&1)===0?1:(on&2)!==0&&ai!==0?ai&-ai:yw.transition!==null?(Lf===0&&(Lf=Yn()),Lf):(i=Xt,i!==0||(i=window.event,i=i===void 0?16:Sv(i.type)),i)}function $r(i,o,u,d){if(50<Ru)throw Ru=0,Vp=null,Error(t(185));kn(i,u,d),((on&2)===0||i!==ei)&&(i===ei&&((on&2)===0&&(Af|=u),$n===4&&ho(i,ai)),zi(i,d),u===1&&on===0&&(o.mode&1)===0&&(Qa=Ft()+500,sf&&so()))}function zi(i,o){var u=i.callbackNode;_n(i,o);var d=qt(i,i===ei?ai:0);if(d===0)u!==null&&It(u),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(u!=null&&It(u),o===1)i.tag===0?xw(Sx.bind(null,i)):o_(Sx.bind(null,i)),mw(function(){(on&6)===0&&so()}),u=null;else{switch(Br(d)){case 1:u=dn;break;case 4:u=vn;break;case 16:u=P;break;case 536870912:u=Me;break;default:u=P}u=Cx(u,yx.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function yx(i,o){if(Pf=-1,Lf=0,(on&6)!==0)throw Error(t(327));var u=i.callbackNode;if(ja()&&i.callbackNode!==u)return null;var d=qt(i,i===ei?ai:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=Df(i,d);else{o=d;var v=on;on|=2;var M=Ex();(ei!==i||ai!==o)&&(Ps=null,Qa=Ft()+500,Jo(i,o));do try{zw();break}catch(J){Mx(i,J)}while(!0);sp(),Tf.current=M,on=v,Hn!==null?o=0:(ei=null,ai=0,o=$n)}if(o!==0){if(o===2&&(v=fn(i),v!==0&&(d=v,o=Hp(i,v))),o===1)throw u=Au,Jo(i,0),ho(i,d),zi(i,Ft()),u;if(o===6)ho(i,d);else{if(v=i.current.alternate,(d&30)===0&&!kw(v)&&(o=Df(i,d),o===2&&(M=fn(i),M!==0&&(d=M,o=Hp(i,M))),o===1))throw u=Au,Jo(i,0),ho(i,d),zi(i,Ft()),u;switch(i.finishedWork=v,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Qo(i,Bi,Ps);break;case 3:if(ho(i,d),(d&130023424)===d&&(o=Bp+500-Ft(),10<o)){if(qt(i,0)!==0)break;if(v=i.suspendedLanes,(v&d)!==d){Ai(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=$h(Qo.bind(null,i,Bi,Ps),o);break}Qo(i,Bi,Ps);break;case 4:if(ho(i,d),(d&4194240)===d)break;for(o=i.eventTimes,v=-1;0<d;){var D=31-ct(d);M=1<<D,D=o[D],D>v&&(v=D),d&=~M}if(d=v,d=Ft()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ow(d/1960))-d,10<d){i.timeoutHandle=$h(Qo.bind(null,i,Bi,Ps),d);break}Qo(i,Bi,Ps);break;case 5:Qo(i,Bi,Ps);break;default:throw Error(t(329))}}}return zi(i,Ft()),i.callbackNode===u?yx.bind(null,i):null}function Hp(i,o){var u=bu;return i.current.memoizedState.isDehydrated&&(Jo(i,o).flags|=256),i=Df(i,o),i!==2&&(o=Bi,Bi=u,o!==null&&Gp(o)),i}function Gp(i){Bi===null?Bi=i:Bi.push.apply(Bi,i)}function kw(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var v=u[d],M=v.getSnapshot;v=v.value;try{if(!Gr(M(),v))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ho(i,o){for(o&=~kp,o&=~Af,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-ct(o),d=1<<u;i[u]=-1,o&=~d}}function Sx(i){if((on&6)!==0)throw Error(t(327));ja();var o=qt(i,0);if((o&1)===0)return zi(i,Ft()),null;var u=Df(i,o);if(i.tag!==0&&u===2){var d=fn(i);d!==0&&(o=d,u=Hp(i,d))}if(u===1)throw u=Au,Jo(i,0),ho(i,o),zi(i,Ft()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Qo(i,Bi,Ps),zi(i,Ft()),null}function Wp(i,o){var u=on;on|=1;try{return i(o)}finally{on=u,on===0&&(Qa=Ft()+500,sf&&so())}}function Zo(i){co!==null&&co.tag===0&&(on&6)===0&&ja();var o=on;on|=1;var u=Ar.transition,d=Xt;try{if(Ar.transition=null,Xt=1,i)return i()}finally{Xt=d,Ar.transition=u,on=o,(on&6)===0&&so()}}function Xp(){nr=Ja.current,wn(Ja)}function Jo(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,pw(u)),Hn!==null)for(u=Hn.return;u!==null;){var d=u;switch(ep(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&nf();break;case 3:$a(),wn(Ui),wn(hi),hp();break;case 5:fp(d);break;case 4:$a();break;case 13:wn(Cn);break;case 19:wn(Cn);break;case 10:op(d.type._context);break;case 22:case 23:Xp()}u=u.return}if(ei=i,Hn=i=po(i.current,null),ai=nr=o,$n=0,Au=null,kp=Af=Ko=0,Bi=bu=null,Yo!==null){for(o=0;o<Yo.length;o++)if(u=Yo[o],d=u.interleaved,d!==null){u.interleaved=null;var v=d.next,M=u.pending;if(M!==null){var D=M.next;M.next=v,d.next=D}u.pending=d}Yo=null}return i}function Mx(i,o){do{var u=Hn;try{if(sp(),mf.current=xf,gf){for(var d=Pn.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}gf=!1}if($o=0,jn=qn=Pn=null,yu=!1,Su=0,Op.current=null,u===null||u.return===null){$n=1,Au=o,Hn=null;break}e:{var M=i,D=u.return,J=u,ce=o;if(o=ai,J.flags|=32768,ce!==null&&typeof ce=="object"&&typeof ce.then=="function"){var Ie=ce,tt=J,rt=tt.tag;if((tt.mode&1)===0&&(rt===0||rt===11||rt===15)){var je=tt.alternate;je?(tt.updateQueue=je.updateQueue,tt.memoizedState=je.memoizedState,tt.lanes=je.lanes):(tt.updateQueue=null,tt.memoizedState=null)}var xt=q_(D);if(xt!==null){xt.flags&=-257,$_(xt,D,J,M,o),xt.mode&1&&Y_(M,Ie,o),o=xt,ce=Ie;var Tt=o.updateQueue;if(Tt===null){var bt=new Set;bt.add(ce),o.updateQueue=bt}else Tt.add(ce);break e}else{if((o&1)===0){Y_(M,Ie,o),Yp();break e}ce=Error(t(426))}}else if(An&&J.mode&1){var Bn=q_(D);if(Bn!==null){(Bn.flags&65536)===0&&(Bn.flags|=256),$_(Bn,D,J,M,o),ip(Ka(ce,J));break e}}M=ce=Ka(ce,J),$n!==4&&($n=2),bu===null?bu=[M]:bu.push(M),M=D;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var Ae=W_(M,ce,o);v_(M,Ae);break e;case 1:J=ce;var he=M.type,Ce=M.stateNode;if((M.flags&128)===0&&(typeof he.getDerivedStateFromError=="function"||Ce!==null&&typeof Ce.componentDidCatch=="function"&&(uo===null||!uo.has(Ce)))){M.flags|=65536,o&=-o,M.lanes|=o;var ut=X_(M,J,o);v_(M,ut);break e}}M=M.return}while(M!==null)}Tx(u)}catch(Ct){o=Ct,Hn===u&&u!==null&&(Hn=u=u.return);continue}break}while(!0)}function Ex(){var i=Tf.current;return Tf.current=xf,i===null?xf:i}function Yp(){($n===0||$n===3||$n===2)&&($n=4),ei===null||(Ko&268435455)===0&&(Af&268435455)===0||ho(ei,ai)}function Df(i,o){var u=on;on|=2;var d=Ex();(ei!==i||ai!==o)&&(Ps=null,Jo(i,o));do try{Bw();break}catch(v){Mx(i,v)}while(!0);if(sp(),on=u,Tf.current=d,Hn!==null)throw Error(t(261));return ei=null,ai=0,$n}function Bw(){for(;Hn!==null;)wx(Hn)}function zw(){for(;Hn!==null&&!jt();)wx(Hn)}function wx(i){var o=Rx(i.alternate,i,nr);i.memoizedProps=i.pendingProps,o===null?Tx(i):Hn=o,Op.current=null}function Tx(i){var o=i;do{var u=o.alternate;if(i=o.return,(o.flags&32768)===0){if(u=Dw(u,o,nr),u!==null){Hn=u;return}}else{if(u=Nw(u,o),u!==null){u.flags&=32767,Hn=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{$n=6,Hn=null;return}}if(o=o.sibling,o!==null){Hn=o;return}Hn=o=i}while(o!==null);$n===0&&($n=5)}function Qo(i,o,u){var d=Xt,v=Ar.transition;try{Ar.transition=null,Xt=1,Vw(i,o,u,d)}finally{Ar.transition=v,Xt=d}return null}function Vw(i,o,u,d){do ja();while(co!==null);if((on&6)!==0)throw Error(t(327));u=i.finishedWork;var v=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var M=u.lanes|u.childLanes;if(nn(i,M),i===ei&&(Hn=ei=null,ai=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||Rf||(Rf=!0,Cx(P,function(){return ja(),null})),M=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||M){M=Ar.transition,Ar.transition=null;var D=Xt;Xt=1;var J=on;on|=4,Op.current=null,Fw(i,u),mx(u,i),aw(Yh),Hc=!!Xh,Yh=Xh=null,i.current=u,Uw(u),Rn(),on=J,Xt=D,Ar.transition=M}else i.current=u;if(Rf&&(Rf=!1,co=i,Cf=v),M=i.pendingLanes,M===0&&(uo=null),at(u.stateNode),zi(i,Ft()),o!==null)for(d=i.onRecoverableError,u=0;u<o.length;u++)v=o[u],d(v.value,{componentStack:v.stack,digest:v.digest});if(bf)throw bf=!1,i=zp,zp=null,i;return(Cf&1)!==0&&i.tag!==0&&ja(),M=i.pendingLanes,(M&1)!==0?i===Vp?Ru++:(Ru=0,Vp=i):Ru=0,so(),null}function ja(){if(co!==null){var i=Br(Cf),o=Ar.transition,u=Xt;try{if(Ar.transition=null,Xt=16>i?16:i,co===null)var d=!1;else{if(i=co,co=null,Cf=0,(on&6)!==0)throw Error(t(331));var v=on;for(on|=4,Mt=i.current;Mt!==null;){var M=Mt,D=M.child;if((Mt.flags&16)!==0){var J=M.deletions;if(J!==null){for(var ce=0;ce<J.length;ce++){var Ie=J[ce];for(Mt=Ie;Mt!==null;){var tt=Mt;switch(tt.tag){case 0:case 11:case 15:Tu(8,tt,M)}var rt=tt.child;if(rt!==null)rt.return=tt,Mt=rt;else for(;Mt!==null;){tt=Mt;var je=tt.sibling,xt=tt.return;if(cx(tt),tt===Ie){Mt=null;break}if(je!==null){je.return=xt,Mt=je;break}Mt=xt}}}var Tt=M.alternate;if(Tt!==null){var bt=Tt.child;if(bt!==null){Tt.child=null;do{var Bn=bt.sibling;bt.sibling=null,bt=Bn}while(bt!==null)}}Mt=M}}if((M.subtreeFlags&2064)!==0&&D!==null)D.return=M,Mt=D;else e:for(;Mt!==null;){if(M=Mt,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Tu(9,M,M.return)}var Ae=M.sibling;if(Ae!==null){Ae.return=M.return,Mt=Ae;break e}Mt=M.return}}var he=i.current;for(Mt=he;Mt!==null;){D=Mt;var Ce=D.child;if((D.subtreeFlags&2064)!==0&&Ce!==null)Ce.return=D,Mt=Ce;else e:for(D=he;Mt!==null;){if(J=Mt,(J.flags&2048)!==0)try{switch(J.tag){case 0:case 11:case 15:wf(9,J)}}catch(Ct){Fn(J,J.return,Ct)}if(J===D){Mt=null;break e}var ut=J.sibling;if(ut!==null){ut.return=J.return,Mt=ut;break e}Mt=J.return}}if(on=v,so(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(ue,i)}catch{}d=!0}return d}finally{Xt=u,Ar.transition=o}}return!1}function Ax(i,o,u){o=Ka(u,o),o=W_(i,o,1),i=ao(i,o,1),o=Ai(),i!==null&&(kn(i,1,o),zi(i,o))}function Fn(i,o,u){if(i.tag===3)Ax(i,i,u);else for(;o!==null;){if(o.tag===3){Ax(o,i,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(uo===null||!uo.has(d))){i=Ka(u,i),i=X_(o,i,1),o=ao(o,i,1),i=Ai(),o!==null&&(kn(o,1,i),zi(o,i));break}}o=o.return}}function Hw(i,o,u){var d=i.pingCache;d!==null&&d.delete(o),o=Ai(),i.pingedLanes|=i.suspendedLanes&u,ei===i&&(ai&u)===u&&($n===4||$n===3&&(ai&130023424)===ai&&500>Ft()-Bp?Jo(i,0):kp|=u),zi(i,o)}function bx(i,o){o===0&&((i.mode&1)===0?o=1:(o=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var u=Ai();i=bs(i,o),i!==null&&(kn(i,o,u),zi(i,u))}function Gw(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),bx(i,u)}function Ww(i,o){var u=0;switch(i.tag){case 13:var d=i.stateNode,v=i.memoizedState;v!==null&&(u=v.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),bx(i,u)}var Rx;Rx=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||Ui.current)ki=!0;else{if((i.lanes&u)===0&&(o.flags&128)===0)return ki=!1,Lw(i,o,u);ki=(i.flags&131072)!==0}else ki=!1,An&&(o.flags&1048576)!==0&&a_(o,af,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Mf(i,o),i=o.pendingProps;var v=Va(o,hi.current);qa(o,u),v=gp(null,o,d,i,v,u);var M=vp();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Oi(d)?(M=!0,rf(o)):M=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,up(o),v.updater=yf,o.stateNode=v,v._reactInternals=o,Ep(o,d,i,u),o=bp(null,o,d,!0,M,u)):(o.tag=0,An&&M&&jh(o),Ti(null,o,v,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Mf(i,o),i=o.pendingProps,v=d._init,d=v(d._payload),o.type=d,v=o.tag=Yw(d),i=Xr(d,i),v){case 0:o=Ap(null,o,d,i,u);break e;case 1:o=ex(null,o,d,i,u);break e;case 11:o=K_(null,o,d,i,u);break e;case 14:o=Z_(null,o,d,Xr(d.type,i),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,v=o.pendingProps,v=o.elementType===d?v:Xr(d,v),Ap(i,o,d,v,u);case 1:return d=o.type,v=o.pendingProps,v=o.elementType===d?v:Xr(d,v),ex(i,o,d,v,u);case 3:e:{if(tx(o),i===null)throw Error(t(387));d=o.pendingProps,M=o.memoizedState,v=M.element,g_(i,o),hf(o,d,null,u);var D=o.memoizedState;if(d=D.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:D.cache,pendingSuspenseBoundaries:D.pendingSuspenseBoundaries,transitions:D.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){v=Ka(Error(t(423)),o),o=nx(i,o,d,u,v);break e}else if(d!==v){v=Ka(Error(t(424)),o),o=nx(i,o,d,u,v);break e}else for(tr=no(o.stateNode.containerInfo.firstChild),er=o,An=!0,Wr=null,u=p_(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Wa(),d===v){o=Cs(i,o,u);break e}Ti(i,o,d,u)}o=o.child}return o;case 5:return x_(o),i===null&&np(o),d=o.type,v=o.pendingProps,M=i!==null?i.memoizedProps:null,D=v.children,qh(d,v)?D=null:M!==null&&qh(d,M)&&(o.flags|=32),j_(i,o),Ti(i,o,D,u),o.child;case 6:return i===null&&np(o),null;case 13:return ix(i,o,u);case 4:return cp(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=Xa(o,null,d,u):Ti(i,o,d,u),o.child;case 11:return d=o.type,v=o.pendingProps,v=o.elementType===d?v:Xr(d,v),K_(i,o,d,v,u);case 7:return Ti(i,o,o.pendingProps,u),o.child;case 8:return Ti(i,o,o.pendingProps.children,u),o.child;case 12:return Ti(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,v=o.pendingProps,M=o.memoizedProps,D=v.value,Sn(cf,d._currentValue),d._currentValue=D,M!==null)if(Gr(M.value,D)){if(M.children===v.children&&!Ui.current){o=Cs(i,o,u);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var J=M.dependencies;if(J!==null){D=M.child;for(var ce=J.firstContext;ce!==null;){if(ce.context===d){if(M.tag===1){ce=Rs(-1,u&-u),ce.tag=2;var Ie=M.updateQueue;if(Ie!==null){Ie=Ie.shared;var tt=Ie.pending;tt===null?ce.next=ce:(ce.next=tt.next,tt.next=ce),Ie.pending=ce}}M.lanes|=u,ce=M.alternate,ce!==null&&(ce.lanes|=u),ap(M.return,u,o),J.lanes|=u;break}ce=ce.next}}else if(M.tag===10)D=M.type===o.type?null:M.child;else if(M.tag===18){if(D=M.return,D===null)throw Error(t(341));D.lanes|=u,J=D.alternate,J!==null&&(J.lanes|=u),ap(D,u,o),D=M.sibling}else D=M.child;if(D!==null)D.return=M;else for(D=M;D!==null;){if(D===o){D=null;break}if(M=D.sibling,M!==null){M.return=D.return,D=M;break}D=D.return}M=D}Ti(i,o,v.children,u),o=o.child}return o;case 9:return v=o.type,d=o.pendingProps.children,qa(o,u),v=wr(v),d=d(v),o.flags|=1,Ti(i,o,d,u),o.child;case 14:return d=o.type,v=Xr(d,o.pendingProps),v=Xr(d.type,v),Z_(i,o,d,v,u);case 15:return J_(i,o,o.type,o.pendingProps,u);case 17:return d=o.type,v=o.pendingProps,v=o.elementType===d?v:Xr(d,v),Mf(i,o),o.tag=1,Oi(d)?(i=!0,rf(o)):i=!1,qa(o,u),H_(o,d,v),Ep(o,d,v,u),bp(null,o,d,!0,i,u);case 19:return sx(i,o,u);case 22:return Q_(i,o,u)}throw Error(t(156,o.tag))};function Cx(i,o){return Lt(i,o)}function Xw(i,o,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(i,o,u,d){return new Xw(i,o,u,d)}function qp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Yw(i){if(typeof i=="function")return qp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===G)return 11;if(i===j)return 14}return 2}function po(i,o){var u=i.alternate;return u===null?(u=br(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function Nf(i,o,u,d,v,M){var D=2;if(d=i,typeof i=="function")qp(i)&&(D=1);else if(typeof i=="string")D=5;else e:switch(i){case N:return jo(u.children,v,M,o);case T:D=8,v|=8;break;case L:return i=br(12,u,o,v|2),i.elementType=L,i.lanes=M,i;case ie:return i=br(13,u,o,v),i.elementType=ie,i.lanes=M,i;case X:return i=br(19,u,o,v),i.elementType=X,i.lanes=M,i;case V:return If(u,v,M,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:D=10;break e;case Z:D=9;break e;case G:D=11;break e;case j:D=14;break e;case z:D=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=br(D,u,o,v),o.elementType=i,o.type=d,o.lanes=M,o}function jo(i,o,u,d){return i=br(7,i,d,o),i.lanes=u,i}function If(i,o,u,d){return i=br(22,i,d,o),i.elementType=V,i.lanes=u,i.stateNode={isHidden:!1},i}function $p(i,o,u){return i=br(6,i,null,o),i.lanes=u,i}function Kp(i,o,u){return o=br(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function qw(i,o,u,d,v){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Zp(i,o,u,d,v,M,D,J,ce){return i=new qw(i,o,u,J,ce),o===1?(o=1,M===!0&&(o|=8)):o=0,M=br(3,null,null,o),i.current=M,M.stateNode=i,M.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(M),i}function $w(i,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:d==null?null:""+d,children:i,containerInfo:o,implementation:u}}function Px(i){if(!i)return ro;i=i._reactInternals;e:{if(St(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Oi(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Oi(u))return r_(i,u,o)}return o}function Lx(i,o,u,d,v,M,D,J,ce){return i=Zp(u,d,!0,i,v,M,D,J,ce),i.context=Px(null),u=i.current,d=Ai(),v=fo(u),M=Rs(d,v),M.callback=o??null,ao(u,M,v),i.current.lanes=v,kn(i,v,d),zi(i,d),i}function Ff(i,o,u,d){var v=o.current,M=Ai(),D=fo(v);return u=Px(u),o.context===null?o.context=u:o.pendingContext=u,o=Rs(M,D),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=ao(v,o,D),i!==null&&($r(i,v,D,M),df(i,v,D)),D}function Uf(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Dx(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function Jp(i,o){Dx(i,o),(i=i.alternate)&&Dx(i,o)}function Kw(){return null}var Nx=typeof reportError=="function"?reportError:function(i){console.error(i)};function Qp(i){this._internalRoot=i}Of.prototype.render=Qp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Ff(i,o,null,null)},Of.prototype.unmount=Qp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Zo(function(){Ff(null,i,null,null)}),o[Es]=null}};function Of(i){this._internalRoot=i}Of.prototype.unstable_scheduleHydration=function(i){if(i){var o=zr();i={blockedOn:null,target:i,priority:o};for(var u=0;u<js.length&&o!==0&&o<js[u].priority;u++);js.splice(u,0,i),u===0&&xv(i)}};function jp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function kf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Ix(){}function Zw(i,o,u,d,v){if(v){if(typeof d=="function"){var M=d;d=function(){var Ie=Uf(D);M.call(Ie)}}var D=Lx(o,d,i,0,null,!1,!1,"",Ix);return i._reactRootContainer=D,i[Es]=D.current,du(i.nodeType===8?i.parentNode:i),Zo(),D}for(;v=i.lastChild;)i.removeChild(v);if(typeof d=="function"){var J=d;d=function(){var Ie=Uf(ce);J.call(Ie)}}var ce=Zp(i,0,!1,null,null,!1,!1,"",Ix);return i._reactRootContainer=ce,i[Es]=ce.current,du(i.nodeType===8?i.parentNode:i),Zo(function(){Ff(o,ce,u,d)}),ce}function Bf(i,o,u,d,v){var M=u._reactRootContainer;if(M){var D=M;if(typeof v=="function"){var J=v;v=function(){var ce=Uf(D);J.call(ce)}}Ff(o,D,i,v)}else D=Zw(u,o,i,v,d);return Uf(D)}Ms=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=_t(o.pendingLanes);u!==0&&(di(o,u|1),zi(o,Ft()),(on&6)===0&&(Qa=Ft()+500,so()))}break;case 13:Zo(function(){var d=bs(i,1);if(d!==null){var v=Ai();$r(d,i,1,v)}}),Jp(i,1)}},an=function(i){if(i.tag===13){var o=bs(i,134217728);if(o!==null){var u=Ai();$r(o,i,134217728,u)}Jp(i,134217728)}},Tn=function(i){if(i.tag===13){var o=fo(i),u=bs(i,o);if(u!==null){var d=Ai();$r(u,i,o,d)}Jp(i,o)}},zr=function(){return Xt},pn=function(i,o){var u=Xt;try{return Xt=i,o()}finally{Xt=u}},Re=function(i,o,u){switch(o){case"input":if(fe(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==i&&d.form===i.form){var v=tf(d);if(!v)throw Error(t(90));qe(d),fe(d,v)}}}break;case"textarea":We(i,u);break;case"select":o=u.value,o!=null&&Qe(i,!!u.multiple,o,!1)}},ye=Wp,H=Zo;var Jw={usingClientEntryPoint:!1,Events:[mu,Ba,tf,ge,Ve,Wp]},Cu={findFiberByHostInstance:Ho,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:Cu.bundleType,version:Cu.version,rendererPackageName:Cu.rendererPackageName,rendererConfig:Cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=He(i),i===null?null:i.stateNode},findFiberByHostInstance:Cu.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zf.isDisabled&&zf.supportsFiber)try{ue=zf.inject(Qw),le=zf}catch{}}return Vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jw,Vi.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(o))throw Error(t(200));return $w(i,o,null,u)},Vi.createRoot=function(i,o){if(!jp(i))throw Error(t(299));var u=!1,d="",v=Nx;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Zp(i,1,!1,null,null,u,!1,d,v),i[Es]=o.current,du(i.nodeType===8?i.parentNode:i),new Qp(o)},Vi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=He(o),i=i===null?null:i.stateNode,i},Vi.flushSync=function(i){return Zo(i)},Vi.hydrate=function(i,o,u){if(!kf(o))throw Error(t(200));return Bf(null,i,o,!0,u)},Vi.hydrateRoot=function(i,o,u){if(!jp(i))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,v=!1,M="",D=Nx;if(u!=null&&(u.unstable_strictMode===!0&&(v=!0),u.identifierPrefix!==void 0&&(M=u.identifierPrefix),u.onRecoverableError!==void 0&&(D=u.onRecoverableError)),o=Lx(o,null,i,1,u??null,v,!1,M,D),i[Es]=o.current,du(i),d)for(i=0;i<d.length;i++)u=d[i],v=u._getVersion,v=v(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,v]:o.mutableSourceEagerHydrationData.push(u,v);return new Of(o)},Vi.render=function(i,o,u){if(!kf(o))throw Error(t(200));return Bf(null,i,o,!1,u)},Vi.unmountComponentAtNode=function(i){if(!kf(i))throw Error(t(40));return i._reactRootContainer?(Zo(function(){Bf(null,null,i,!1,function(){i._reactRootContainer=null,i[Es]=null})}),!0):!1},Vi.unstable_batchedUpdates=Wp,Vi.unstable_renderSubtreeIntoContainer=function(i,o,u,d){if(!kf(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Bf(i,o,u,!1,d)},Vi.version="18.3.1-next-f1338f8080-20240426",Vi}var zx;function i1(){if(zx)return tm.exports;zx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),tm.exports=rT(),tm.exports}var Vx;function sT(){if(Vx)return Vf;Vx=1;var s=i1();return Vf.createRoot=s.createRoot,Vf.hydrateRoot=s.hydrateRoot,Vf}var r1=sT(),Hx="1.3.27";function s1(s,e,t){return Math.max(s,Math.min(e,t))}function oT(s,e,t){return(1-t)*s+t*e}function aT(s,e,t,n){return oT(s,e,1-Math.exp(-t*n))}function lT(s,e){return(s%e+e)%e}var uT=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const t=s1(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=aT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:l}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=l}};function cT(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var fT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=s,this.content=e,t&&(this.debouncedResize=cT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},o1=class{events={};emit(s,...e){const t=this.events[s]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}};const dT=100/6,go={passive:!1};function Gx(s,e){return s===1?dT:s===2?e:1}var hT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new o1;constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,go),this.element.addEventListener("touchstart",this.onTouchStart,go),this.element.addEventListener("touchmove",this.onTouchMove,go),this.element.addEventListener("touchend",this.onTouchEnd,go)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,go),this.element.removeEventListener("touchstart",this.onTouchStart,go),this.element.removeEventListener("touchmove",this.onTouchMove,go),this.element.removeEventListener("touchend",this.onTouchEnd,go)}onTouchStart=s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const r=Gx(n,this.window.width),a=Gx(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Wx=s=>Math.min(1,1.001-2**(-10*s));var pT=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new uT;emitter=new o1;dimensions;virtualScroll;constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:l=1.7,duration:c,easing:f,lerp:h=.1,infinite:p=!1,orientation:_="vertical",gestureOrientation:m=_==="horizontal"?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:S=1,autoResize:E=!0,prevent:x,virtualScroll:y,overscroll:C=!0,autoRaf:O=!1,anchors:A=!1,autoToggle:b=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:N=!1,naiveDimensions:T=N,stopInertiaOnNavigate:L=!1,respectReducedMotion:B=!0}={}){window.lenisVersion=Hx,window.lenis||(window.lenis={}),window.lenis.version=Hx,_==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof c=="number"&&typeof f!="function"?f=Wx:typeof f=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:l,duration:c,easing:f,lerp:h,infinite:p,gestureOrientation:m,orientation:_,touchMultiplier:g,wheelMultiplier:S,autoResize:E,prevent:x,virtualScroll:y,overscroll:C,autoRaf:O,anchors:A,autoToggle:b,allowNestedScroll:R,naiveDimensions:T,stopInertiaOnNavigate:L,respectReducedMotion:B},this.dimensions=new fT(s,e,{autoResize:E}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new hT(t,{touchMultiplier:g,wheelMultiplier:S}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{const e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(n.hash);this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],a=n[n.length-1],l=40,c=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=l,f=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=l;return c||f}onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(l||c)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(S=>S instanceof HTMLElement&&(typeof h=="function"&&h?.(S)||S.hasAttribute?.("data-lenis-prevent")||p==="vertical"&&S.hasAttribute?.("data-lenis-prevent-vertical")||p==="horizontal"&&S.hasAttribute?.("data-lenis-prevent-horizontal")||r&&S.hasAttribute?.("data-lenis-prevent-touch")||a&&S.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(S,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let _=t;this.options.gestureOrientation==="both"?_=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=r&&this.options.syncTouch,g=r&&n.type==="touchend";g&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...m?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:l=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:f,onComplete:h,force:p=!1,userData:_}={}){if(this.prefersReducedMotion&&(r?t=!0:(a=1,l=void 0,c=void 0)),(this.isStopped||this.isLocked)&&!p)return;let m=s,g=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let S=null;if(typeof m=="string"?(S=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),S||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof Element&&(S=m),S){if(this.options.wrapper!==window){const A=this.rootElement.getBoundingClientRect();g-=this.isHorizontal?A.left:A.top}const E=S.getBoundingClientRect(),x=getComputedStyle(S),y=this.isHorizontal?Number.parseFloat(x.scrollMarginLeft):Number.parseFloat(x.scrollMarginTop),C=getComputedStyle(this.rootElement),O=this.isHorizontal?Number.parseFloat(C.scrollPaddingLeft):Number.parseFloat(C.scrollPaddingTop);m=(this.isHorizontal?E.left:E.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(O)?0:O)}}if(typeof m=="number"){if(m+=g,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const S=m-this.animatedScroll;S>this.limit/2?m-=this.limit:S<-this.limit/2&&(m+=this.limit)}}else m=s1(0,m,this.limit);if(m===this.targetScroll){f?.(this),h?.(this);return}if(this.userData=_??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=m),typeof l=="number"&&typeof c!="function"?c=Wx:typeof c=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,m,{duration:l,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f?.(this)},onUpdate:(S,E)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),r&&(this.targetScroll=S),E||this.emit(),E&&(this.reset(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now();s._lenis||(s._lenis={});const r=s._lenis;let a,l,c,f,h,p,_,m,g,S;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(s);if(r.computedStyle=R,a=["auto","overlay","scroll"].includes(R.overflowX),l=["auto","overlay","scroll"].includes(R.overflowY),h=["auto"].includes(R.overscrollBehaviorX),p=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=l,!(a||l))return!1;_=s.scrollWidth,m=s.scrollHeight,g=s.clientWidth,S=s.clientHeight,c=_>g,f=m>S,r.isScrollableX=c,r.isScrollableY=f,r.scrollWidth=_,r.scrollHeight=m,r.clientWidth=g,r.clientHeight=S,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=p}else c=r.isScrollableX,f=r.isScrollableY,a=r.hasOverflowX,l=r.hasOverflowY,_=r.scrollWidth,m=r.scrollHeight,g=r.clientWidth,S=r.clientHeight,h=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&c||l&&f))return!1;const E=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let x,y,C,O,A,b;if(E==="horizontal")x=Math.round(s.scrollLeft),y=_-g,C=e,O=a,A=c,b=h;else if(E==="vertical")x=Math.round(s.scrollTop),y=m-S,C=t,O=l,A=f,b=p;else return!1;return!b&&(x>=y||x<=0)?!0:(C>0?x<y:x>0)&&O&&A}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?lT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};function mT(){return yt.useEffect(()=>{const s=window.gsap,e=window.ScrollTrigger,t=new pT({autoRaf:!s,anchors:!0,lerp:.095,smoothWheel:!0,respectReducedMotion:!0});let n;const r=a=>{window.dispatchEvent(new CustomEvent("netguard:scroll-motion",{detail:a}))};return e&&t.on("scroll",e.update),t.on("scroll",r),s&&(n=a=>t.raf(a*1e3),s.ticker.add(n),s.ticker.lagSmoothing(0)),window.netguardLenis=t,window.dispatchEvent(new CustomEvent("netguard:lenis-ready",{detail:{lenis:t}})),()=>{window.dispatchEvent(new CustomEvent("netguard:lenis-disposing",{detail:{lenis:t}})),e&&t.off("scroll",e.update),t.off("scroll",r),n&&(s.ticker.remove(n),s.ticker.lagSmoothing(500,33)),t.destroy(),window.netguardLenis===t&&delete window.netguardLenis}},[]),null}var rm={exports:{}},Pu={};var Xx;function gT(){if(Xx)return Pu;Xx=1;var s=Ag(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,h){var p,_={},m=null,g=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(g=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(_[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)_[p]===void 0&&(_[p]=f[p]);return{$$typeof:e,type:c,key:m,ref:g,props:_,_owner:r.current}}return Pu.Fragment=t,Pu.jsx=l,Pu.jsxs=l,Pu}var Yx;function vT(){return Yx||(Yx=1,rm.exports=gT()),rm.exports}var nt=vT(),sm=i1();function Os(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function a1(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var vr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yc={duration:.5,overwrite:!1,delay:0},bg,ci,bn,Ir=1e8,yn=1/Ir,d0=Math.PI*2,_T=d0/4,xT=0,l1=Math.sqrt,yT=Math.cos,ST=Math.sin,si=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},qs=function(e){return typeof e=="number"},Rg=function(e){return typeof e>"u"},ys=function(e){return typeof e=="object"},Xi=function(e){return e!==!1},Cg=function(){return typeof window<"u"},Hf=function(e){return Un(e)||si(e)},u1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,MT=/random\([^)]+\)/g,ET=/,\s*/g,qx=/(?:-?\.?\d|\.)+/gi,c1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Al=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,om=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,f1=/[+-]=-?[.\d]+/,wT=/[^,'"\[\]\s]+/gi,TT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dn,us,h0,Pg,xr={},Wd={},d1,h1=function(e){return(Wd=Vl(e,xr))&&Ji},Lg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sc=function(e,t){return!t&&console.warn(e)},p1=function(e,t){return e&&(xr[e]=t)&&Wd&&(Wd[e]=t)||xr},Mc=function(){return 0},AT={suppressEvents:!0,isStart:!0,kill:!1},Cd={suppressEvents:!0,kill:!1},bT={suppressEvents:!0},Dg={},Io=[],p0={},m1,ur={},am={},$x=30,Pd=[],Ng="",Ig=function(e){var t=e[0],n,r;if(ys(t)||Un(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Pd.length;r--&&!Pd[r].targetTest(t););n=Pd[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new O1(e[r],n)))||e.splice(r,1);return e},ga=function(e){return e._gsap||Ig(Fr(e))[0]._gsap},g1=function(e,t,n){return(n=e[t])&&Un(n)?e[t]():Rg(n)&&e.getAttribute&&e.getAttribute(t)||n},Yi=function(e,t){return(e=e.split(",")).forEach(t)||e},zn=function(e){return Math.round(e*1e5)/1e5||0},Ln=function(e){return Math.round(e*1e7)/1e7||0},Ll=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},RT=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Xd=function(){var e=Io.length,t=Io.slice(0),n,r;for(p0={},Io.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fg=function(e){return!!(e._initted||e._startAt||e.add)},v1=function(e,t,n,r){Io.length&&!ci&&Xd(),e.render(t,n,!!(ci&&t<0&&Fg(e))),Io.length&&!ci&&Xd()},_1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wT).length<2?t:si(e)?e.trim():e},x1=function(e){return e},yr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CT=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Vl=function(e,t){for(var n in t)e[n]=t[n];return e},Kx=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ys(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Yd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},nc=function(e){var t=e.parent||Dn,n=e.keyframes?CT(wi(e.keyframes)):yr;if(Xi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PT=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},y1=function(e,t,n,r,a){var l=e[r],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},vh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},Oo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},va=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},LT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},m0=function(e,t,n,r){return e._startAt&&(ci?e._startAt.revert(Cd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},DT=function s(e){return!e||e._ts&&s(e.parent)},Zx=function(e){return e._repeat?Hl(e._tTime,e=e.duration()+e._rDelay)*e:0},Hl=function(e,t){var n=Math.floor(e=Ln(e/t));return e&&n===e?n-1:n},qd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_h=function(e){return e._end=Ln(e._start+(e._tDur/Math.abs(e._ts||e._rts||yn)||0))},xh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ln(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_h(e),n._dirty||va(n,e)),e},S1=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qd(e.rawTime(),t),(!t._dur||Fc(0,t.totalDuration(),n)-t._tTime>yn)&&t.render(n,!0)),va(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yn}},ds=function(e,t,n,r){return t.parent&&Oo(t),t._start=Ln((qs(n)?n:n||e!==Dn?Cr(e,n,t):e._time)+t._delay),t._end=Ln(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),y1(e,t,"_first","_last",e._sort?"_start":0),g0(t)||(e._recent=t),r||S1(e,t),e._ts<0&&xh(e,e._tTime),e},M1=function(e,t){return(xr.ScrollTrigger||Lg("scrollTrigger",t))&&xr.ScrollTrigger.create(t,e)},E1=function(e,t,n,r,a){if(Og(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!ci&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&m1!==fr.frame)return Io.push(e),e._lazy=[a,r],1},NT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},g0=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},IT=function(e,t,n,r){var a=e.ratio,l=t<0||!t&&(!e._start&&NT(e)&&!(!e._initted&&g0(e))||(e._ts<0||e._dp._ts<0)&&!g0(e))?0:1,c=e._rDelay,f=0,h,p,_;if(c&&e._repeat&&(f=Fc(0,e._tDur,t),p=Hl(f,c),e._yoyo&&p&1&&(l=1-l),p!==Hl(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||ci||r||e._zTime===yn||!t&&e._zTime){if(!e._initted&&E1(e,t,r,n,f))return;for(_=e._zTime,e._zTime=t||(n?yn:0),n||(n=t&&!_),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&m0(e,t,n,!0),e._onUpdate&&!n&&pr(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&pr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Oo(e,1),!n&&!ci&&(pr(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},FT=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Gl=function(e,t,n,r){var a=e._repeat,l=Ln(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:Ln(l*(a+1)+e._rDelay*a):l,c>0&&!r&&xh(e,e._tTime=e._tDur*c),e.parent&&_h(e),n||va(e.parent,e),e},Jx=function(e){return e instanceof Wi?va(e):Gl(e,e._dur)},UT={_start:0,endTime:Mc,totalDuration:Mc},Cr=function s(e,t,n){var r=e.labels,a=e._recent||UT,l=e.duration()>=Ir?a.endTime(!1):e._dur,c,f,h;return si(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=l),r[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(f=f/100*(wi(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+f:l+f)):t==null?l:+t},ic=function(e,t,n){var r=qs(t[1]),a=(r?2:1)+(e<2?0:1),l=t[a],c,f;if(r&&(l.duration=t[1]),l.parent=n,e){for(c=l,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=Xi(f.vars.inherit)&&f.parent;l.immediateRender=Xi(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new Xn(t[0],l,t[a+1])},Vo=function(e,t){return e||e===0?t(e):t},Fc=function(e,t,n){return n<e?e:n>t?t:n},Si=function(e,t){return!si(e)||!(t=TT.exec(e))?"":t[1]},OT=function(e,t,n){return Vo(n,function(r){return Fc(e,t,r)})},v0=[].slice,w1=function(e,t){return e&&ys(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ys(e[0]))&&!e.nodeType&&e!==us},kT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return si(r)&&!t||w1(r,1)?(a=n).push.apply(a,Fr(r)):n.push(r)})||n},Fr=function(e,t,n){return bn&&!t&&bn.selector?bn.selector(e):si(e)&&!n&&(h0||!Wl())?v0.call((t||Pg).querySelectorAll(e),0):wi(e)?kT(e,n):w1(e)?v0.call(e,0):e?[e]:[]},_0=function(e){return e=Fr(e)[0]||Sc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fr(t,n.querySelectorAll?n:n===e?Sc("Invalid scope")||Pg.createElement("div"):e)}},T1=function(e){return e.sort(function(){return .5-Math.random()})},A1=function(e){if(Un(e))return e;var t=ys(e)?e:{each:e},n=_a(t.ease),r=t.from||0,a=parseFloat(t.base)||0,l={},c=r>0&&r<1,f=isNaN(r)||c,h=t.axis,p=r,_=r;return si(r)?p=_={center:.5,edges:.5,end:1}[r]||0:!c&&f&&(p=r[0],_=r[1]),function(m,g,S){var E=(S||t).length,x=l[E],y,C,O,A,b,R,N,T,L;if(!x){if(L=t.grid==="auto"?0:(t.grid||[1,Ir])[1],!L){for(N=-Ir;N<(N=S[L++].getBoundingClientRect().left)&&L<E;);L<E&&L--}for(x=l[E]=[],y=f?Math.min(L,E)*p-.5:r%L,C=L===Ir?0:f?E*_/L-.5:r/L|0,N=0,T=Ir,R=0;R<E;R++)O=R%L-y,A=C-(R/L|0),x[R]=b=h?Math.abs(h==="y"?A:O):l1(O*O+A*A),b>N&&(N=b),b<T&&(T=b);r==="random"&&T1(x),x.max=N-T,x.min=T,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(L>E?E-1:h?h==="y"?E/L:L:Math.max(L,E/L))||0)*(r==="edges"?-1:1),x.b=E<0?a-E:a,x.u=Si(t.amount||t.each)||0,n=n&&E<0?JT(n):n}return E=(x[m]-x.min)/x.max||0,Ln(x.b+(n?n(E):E)*x.v)+x.u}},x0=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ln(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(qs(n)?0:Si(n))}},b1=function(e,t){var n=wi(e),r,a;return!n&&ys(e)&&(r=n=e.radius||Ir,e.values?(e=Fr(e.values),(a=!qs(e[0]))&&(r*=r)):e=x0(e.increment)),Vo(t,n?Un(e)?function(l){return a=e(l),Math.abs(a-l)<=r?a:l}:function(l){for(var c=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),h=Ir,p=0,_=e.length,m,g;_--;)a?(m=e[_].x-c,g=e[_].y-f,m=m*m+g*g):m=Math.abs(e[_]-c),m<h&&(h=m,p=_);return p=!r||h<=r?e[p]:l,a||p===l||qs(l)?p:p+Si(l)}:x0(e))},R1=function(e,t,n,r){return Vo(wi(e)?!t:n===!0?!!(n=0):!r,function(){return wi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},BT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,l){return l(a)},r)}},zT=function(e,t){return function(n){return e(parseFloat(n))+(t||Si(n))}},VT=function(e,t,n){return P1(e,t,0,1,n)},C1=function(e,t,n){return Vo(n,function(r){return e[~~t(r)]})},HT=function s(e,t,n){var r=t-e;return wi(e)?C1(e,s(0,e.length),t):Vo(n,function(a){return(r+(a-e)%r)%r+e})},GT=function s(e,t,n){var r=t-e,a=r*2;return wi(e)?C1(e,s(0,e.length-1),t):Vo(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>r?a-l:l)})},Ec=function(e){return e.replace(MT,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ET);return R1(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},P1=function(e,t,n,r,a){var l=t-e,c=r-n;return Vo(a,function(f){return n+((f-e)/l*c||0)})},WT=function s(e,t,n,r){var a=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!a){var l=si(e),c={},f,h,p,_,m;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(wi(e)&&!wi(t)){for(p=[],_=e.length,m=_-2,h=1;h<_;h++)p.push(s(e[h-1],e[h]));_--,a=function(S){S*=_;var E=Math.min(m,~~S);return p[E](S-E)},n=t}else r||(e=Vl(wi(e)?[]:{},e));if(!p){for(f in t)Ug.call(c,e,f,"get",t[f]);a=function(S){return zg(S,c)||(l?e.p:e)}}}return Vo(n,a)},Qx=function(e,t,n){var r=e.labels,a=Ir,l,c,f;for(l in r)c=r[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=l,a=c);return f},pr=function(e,t,n){var r=e.vars,a=r[t],l=bn,c=e._ctx,f,h,p;if(a)return f=r[t+"Params"],h=r.callbackScope||e,n&&Io.length&&Xd(),c&&(bn=c),p=f?a.apply(h,f):a.call(h),bn=l,p},Xu=function(e){return Oo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ci),e.progress()<1&&pr(e,"onInterrupt"),e},bl,L1=[],D1=function(e){if(e)if(e=!e.name&&e.default||e,Cg()||e.headless){var t=e.name,n=Un(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Mc,render:zg,add:Ug,kill:aA,modifier:oA,rawVars:0},l={targetTest:0,get:0,getSetter:Bg,aliases:{},register:0};if(Wl(),e!==r){if(ur[t])return;yr(r,yr(Yd(e,a),l)),Vl(r.prototype,Vl(a,Yd(e,l))),ur[r.prop=t]=r,e.targetTest&&(Pd.push(r),Dg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}p1(t,r),e.register&&e.register(Ji,r,qi)}else L1.push(e)},xn=255,Yu={aqua:[0,xn,xn],lime:[0,xn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xn],navy:[0,0,128],white:[xn,xn,xn],olive:[128,128,0],yellow:[xn,xn,0],orange:[xn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xn,0,0],pink:[xn,192,203],cyan:[0,xn,xn],transparent:[xn,xn,xn,0]},lm=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xn+.5|0},N1=function(e,t,n){var r=e?qs(e)?[e>>16,e>>8&xn,e&xn]:0:Yu.black,a,l,c,f,h,p,_,m,g,S;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yu[e])r=Yu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xn,r&xn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xn,e&xn]}else if(e.substr(0,3)==="hsl"){if(r=S=e.match(qx),!t)f=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,l=p<=.5?p*(h+1):p+h-p*h,a=p*2-l,r.length>3&&(r[3]*=1),r[0]=lm(f+1/3,a,l),r[1]=lm(f,a,l),r[2]=lm(f-1/3,a,l);else if(~e.indexOf("="))return r=e.match(c1),n&&r.length<4&&(r[3]=1),r}else r=e.match(qx)||Yu.transparent;r=r.map(Number)}return t&&!S&&(a=r[0]/xn,l=r[1]/xn,c=r[2]/xn,_=Math.max(a,l,c),m=Math.min(a,l,c),p=(_+m)/2,_===m?f=h=0:(g=_-m,h=p>.5?g/(2-_-m):g/(_+m),f=_===a?(l-c)/g+(l<c?6:0):_===l?(c-a)/g+2:(a-l)/g+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},I1=function(e){var t=[],n=[],r=-1;return e.split(Fo).forEach(function(a){var l=a.match(Al)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},jx=function(e,t,n){var r="",a=(e+r).match(Fo),l=t?"hsla(":"rgba(",c=0,f,h,p,_;if(!a)return e;if(a=a.map(function(m){return(m=N1(m,t,1))&&l+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(p=I1(e),f=n.c,f.join(r)!==p.c.join(r)))for(h=e.replace(Fo,"1").split(Al),_=h.length-1;c<_;c++)r+=h[c]+(~f.indexOf(c)?a.shift()||l+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(Fo),_=h.length-1;c<_;c++)r+=h[c]+a[c];return r+h[_]},Fo=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yu)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),XT=/hsl[a]?\(/,F1=function(e){var t=e.join(" "),n;if(Fo.lastIndex=0,Fo.test(t))return n=XT.test(t),e[1]=jx(e[1],n),e[0]=jx(e[0],n,I1(e[1])),!0},wc,fr=(function(){var s=Date.now,e=500,t=33,n=s(),r=n,a=1e3/240,l=a,c=[],f,h,p,_,m,g,S=function E(x){var y=s()-r,C=x===!0,O,A,b,R;if((y>e||y<0)&&(n+=y-t),r+=y,b=r-n,O=b-l,(O>0||C)&&(R=++_.frame,m=b-_.time*1e3,_.time=b=b/1e3,l+=O+(O>=a?4:a-O),A=1),C||(f=h(E)),A)for(g=0;g<c.length;g++)c[g](b,m,R,x)};return _={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(x){return m/(1e3/(x||60))},wake:function(){d1&&(!h0&&Cg()&&(us=h0=window,Pg=us.document||{},xr.gsap=Ji,(us.gsapVersions||(us.gsapVersions=[])).push(Ji.version),h1(Wd||us.GreenSockGlobals||!us.gsap&&us||{}),L1.forEach(D1)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&_.sleep(),h=p||function(x){return setTimeout(x,l-_.time*1e3+1|0)},wc=1,S(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),wc=0,h=Mc},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){a=1e3/(x||240),l=_.time*1e3+a},add:function(x,y,C){var O=y?function(A,b,R,N){x(A,b,R,N),_.remove(O)}:x;return _.remove(x),c[C?"unshift":"push"](O),Wl(),O},remove:function(x,y){~(y=c.indexOf(x))&&c.splice(y,1)&&g>=y&&g--},_listeners:c},_})(),Wl=function(){return!wc&&fr.wake()},sn={},YT=/^[\d.\-M][\d.\-,\s]/,qT=/["']/g,$T=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,l=n.length,c,f,h;a<l;a++)f=n[a],c=a!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,c),t[r]=isNaN(h)?h.replace(qT,"").trim():+h,r=f.substr(c+1).trim();return t},KT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},ZT=function(e){var t=(e+"").split("("),n=sn[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$T(t[1])]:KT(e).split(",").map(_1)):sn._CE&&YT.test(e)?sn._CE("",e):n},JT=function(e){return function(t){return 1-e(1-t)}},_a=function(e,t){return e&&(Un(e)?e:sn[e]||ZT(e))||t},Pa=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},l;return Yi(e,function(c){sn[c]=xr[c]=a,sn[l=c.toLowerCase()]=n;for(var f in a)sn[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=sn[c+"."+f]=a[f]}),a},U1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},um=function s(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/d0*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*ST((p-l)*a)+1},f=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:U1(c);return a=d0/a,f.config=function(h,p){return s(e,h,p)},f},cm=function s(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:U1(n);return r.config=function(a){return s(e,a)},r};Yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pa(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});sn.Linear.easeNone=sn.none=sn.Linear.easeIn;Pa("Elastic",um("in"),um("out"),um());(function(s,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<r?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};Pa("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Pa("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pa("Circ",function(s){return-(l1(1-s*s)-1)});Pa("Sine",function(s){return s===1?1:-yT(s*_T)+1});Pa("Back",cm("in"),cm("out"),cm());sn.SteppedEase=sn.steps=xr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,l=1-yn;return function(c){return((r*Fc(0,l,c)|0)+a)*n}}};yc.ease=sn["quad.out"];Yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ng+=s+","+s+"Params,"});var O1=function(e,t){this.id=xT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:g1,this.set=t?t.getSetter:Bg},Tc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gl(this,+t.duration,1,1),this.data=t.data,bn&&(this._ctx=bn,bn.data.push(this)),wc||fr.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Wl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(xh(this,n),!a._dp||a.parent||S1(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ds(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===yn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),v1(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?Hl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-yn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?qd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yn?0:this._rts,this.totalTime(Fc(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),_h(this),LT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yn&&(this._tTime-=yn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ln(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ds(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bT);var r=ci;return ci=n,Fg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ci=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Jx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Cr(this,n),Xi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Xi(r)),this._dur||(this._zTime=-yn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-yn)},e.eventCallback=function(n,r,a){var l=this.vars;return arguments.length>1?(r?(l[n]=r,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(l){var c=Un(n)?n:x1,f=function(){var p=r.then;r.then=null,a&&a(),Un(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),l(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){Xu(this)},s})();yr(Tc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yn,_prom:0,_ps:!1,_rts:1});var Wi=(function(s){a1(e,s);function e(n,r){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Xi(n.sortChildren),Dn&&ds(n.parent||Dn,Os(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&M1(Os(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,l){return ic(0,arguments,this),this},t.from=function(r,a,l){return ic(1,arguments,this),this},t.fromTo=function(r,a,l,c){return ic(2,arguments,this),this},t.set=function(r,a,l){return a.duration=0,a.parent=this,nc(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Xn(r,a,Cr(this,l),1),this},t.call=function(r,a,l){return ds(this,Xn.delayedCall(0,r,a),l)},t.staggerTo=function(r,a,l,c,f,h,p){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=h,l.onCompleteParams=p,l.parent=this,new Xn(r,l,Cr(this,f)),this},t.staggerFrom=function(r,a,l,c,f,h,p){return l.runBackwards=1,nc(l).immediateRender=Xi(l.immediateRender),this.staggerTo(r,a,l,c,f,h,p)},t.staggerFromTo=function(r,a,l,c,f,h,p,_){return c.startAt=l,nc(c).immediateRender=Xi(c.immediateRender),this.staggerTo(r,a,c,f,h,p,_)},t.render=function(r,a,l){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:Ln(r),_=this._zTime<0!=r<0&&(this._initted||!h),m,g,S,E,x,y,C,O,A,b,R,N;if(this!==Dn&&p>f&&r>=0&&(p=f),p!==this._tTime||l||_){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),m=p,A=this._start,O=this._ts,y=!O,_&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,x=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,l);if(m=Ln(p%x),p===f?(E=this._repeat,m=h):(b=Ln(p/x),E=~~b,E&&E===b&&(m=h,E--),m>h&&(m=h)),b=Hl(this._tTime,x),!c&&this._tTime&&b!==E&&this._tTime-b*x-this._dur<=0&&(b=E),R&&E&1&&(m=h-m,N=1),E!==b&&!this._lock){var T=R&&b&1,L=T===(R&&E&1);if(E<b&&(T=!T),c=T?0:p%h?h:p,this._lock=1,this.render(c||(N?0:Ln(E*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&pr(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,b=E),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,L&&(this._lock=2,c=T?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=FT(this,Ln(c),Ln(m)),C&&(p-=m-(m=C._start))),this._tTime=p,this._time=m,this._act=!!O,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!b&&(pr(this,"onStart"),this._tTime!==p))return this;if(m>=c&&r>=0)for(g=this._first;g;){if(S=g._next,(g._act||m>=g._start)&&g._ts&&C!==g){if(g.parent!==this)return this.render(r,a,l);if(g.render(g._ts>0?(m-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(m-g._start)*g._ts,a,l),m!==this._time||!this._ts&&!y){C=0,S&&(p+=this._zTime=-yn);break}}g=S}else{g=this._last;for(var B=r<0?r:m;g;){if(S=g._prev,(g._act||B<=g._end)&&g._ts&&C!==g){if(g.parent!==this)return this.render(r,a,l);if(g.render(g._ts>0?(B-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(B-g._start)*g._ts,a,l||ci&&Fg(g)),m!==this._time||!this._ts&&!y){C=0,S&&(p+=this._zTime=B?-yn:yn);break}}g=S}}if(C&&!a&&(this.pause(),C.render(m>=c?0:-yn)._zTime=m>=c?1:-1,this._ts))return this._start=A,_h(this),this.render(r,a,l);this._onUpdate&&!a&&pr(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(A===this._start||Math.abs(O)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Oo(this,1),!a&&!(r<0&&!c)&&(p||c||!f)&&(pr(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var l=this;if(qs(a)||(a=Cr(this,a,r)),!(r instanceof Tc)){if(wi(r))return r.forEach(function(c){return l.add(c,a)}),this;if(si(r))return this.addLabel(r,a);if(Un(r))r=Xn.delayedCall(0,r);else return this}return this!==r?ds(this,r,a):this},t.getChildren=function(r,a,l,c){r===void 0&&(r=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-Ir);for(var f=[],h=this._first;h;)h._start>=c&&(h instanceof Xn?a&&f.push(h):(l&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,a,l)))),h=h._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===r)return a[l]},t.remove=function(r){return si(r)?this.removeLabel(r):Un(r)?this.killTweensOf(r):(r.parent===this&&vh(this,r),r===this._recent&&(this._recent=this._last),va(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ln(fr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Cr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,l){var c=Xn.delayedCall(0,a||Mc,l);return c.data="isPause",this._hasPause=1,ds(this,c,Cr(this,r))},t.removePause=function(r){var a=this._first;for(r=Cr(this,r);a;)a._start===r&&a.data==="isPause"&&Oo(a),a=a._next},t.killTweensOf=function(r,a,l){for(var c=this.getTweensOf(r,l),f=c.length;f--;)Co!==c[f]&&c[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var l=[],c=Fr(r),f=this._first,h=qs(a),p;f;)f instanceof Xn?RT(f._targets,c)&&(h?(!Co||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(p=f.getTweensOf(c,a)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(r,a){a=a||{};var l=this,c=Cr(l,r),f=a,h=f.startAt,p=f.onStart,_=f.onStartParams,m=f.immediateRender,g,S=Xn.to(l,yr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale())||yn,onStart:function(){if(l.pause(),!g){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale());S._dur!==x&&Gl(S,x,0,1).render(S._time,!0,!0),g=1}p&&p.apply(S,_||[])}},a));return m?S.render(0):S},t.tweenFromTo=function(r,a,l){return this.tweenTo(a,yr({startAt:{time:Cr(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Qx(this,Cr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Qx(this,Cr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+yn)},t.shiftChildren=function(r,a,l){l===void 0&&(l=0);var c=this._first,f=this.labels,h;for(r=Ln(r);c;)c._start>=l&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in f)f[h]>=l&&(f[h]+=r);return va(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),va(this)},t.totalDuration=function(r){var a=0,l=this,c=l._last,f=Ir,h,p,_;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(_=l.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&l._sort&&c._ts&&!l._lock?(l._lock=1,ds(l,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!_&&!l._dp||_&&_.smoothChildTiming)&&(l._start+=Ln(p/l._ts),l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=h;Gl(l,l===Dn&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Dn._ts&&(v1(Dn,qd(r,Dn)),m1=fr.frame),fr.frame>=$x){$x+=vr.autoSleep||120;var a=Dn._first;if((!a||!a._ts)&&vr.autoSleep&&fr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||fr.sleep()}}},e})(Tc);yr(Wi.prototype,{_lock:0,_hasPause:0,_forcing:0});var QT=function(e,t,n,r,a,l,c){var f=new qi(this._pt,e,t,0,1,G1,null,a),h=0,p=0,_,m,g,S,E,x,y,C;for(f.b=n,f.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=Ec(r)),l&&(C=[n,r],l(C,e,t),n=C[0],r=C[1]),m=n.match(om)||[];_=om.exec(r);)S=_[0],E=r.substring(h,_.index),g?g=(g+1)%5:E.substr(-5)==="rgba("&&(g=1),S!==m[p++]&&(x=parseFloat(m[p-1])||0,f._pt={_next:f._pt,p:E||p===1?E:",",s:x,c:S.charAt(1)==="="?Ll(x,S)-x:parseFloat(S)-x,m:g&&g<4?Math.round:0},h=om.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=c,(f1.test(r)||y)&&(f.e=0),this._pt=f,f},Ug=function(e,t,n,r,a,l,c,f,h,p){Un(r)&&(r=r(a||0,e,l));var _=e[t],m=n!=="get"?n:Un(_)?h?e[t.indexOf("set")||!Un(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,g=Un(_)?h?iA:V1:kg,S;if(si(r)&&(~r.indexOf("random(")&&(r=Ec(r)),r.charAt(1)==="="&&(S=Ll(m,r)+(Si(m)||0),(S||S===0)&&(r=S))),!p||m!==r||y0)return!isNaN(m*r)&&r!==""?(S=new qi(this._pt,e,t,+m||0,r-(m||0),typeof _=="boolean"?sA:H1,0,g),h&&(S.fp=h),c&&S.modifier(c,this,e),this._pt=S):(!_&&!(t in e)&&Lg(t,r),QT.call(this,e,t,m,r,g,f||vr.stringFilter,h))},jT=function(e,t,n,r,a){if(Un(e)&&(e=rc(e,a,t,n,r)),!ys(e)||e.style&&e.nodeType||wi(e)||u1(e))return si(e)?rc(e,a,t,n,r):e;var l={},c;for(c in e)l[c]=rc(e[c],a,t,n,r);return l},k1=function(e,t,n,r,a,l){var c,f,h,p;if(ur[e]&&(c=new ur[e]).init(a,c.rawVars?t[e]:jT(t[e],r,a,l,n),n,r,l)!==!1&&(n._pt=f=new qi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==bl))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=f;return c},Co,y0,Og=function s(e,t,n){var r=e.vars,a=r.ease,l=r.startAt,c=r.immediateRender,f=r.lazy,h=r.onUpdate,p=r.runBackwards,_=r.yoyoEase,m=r.keyframes,g=r.autoRevert,S=e._dur,E=e._startAt,x=e._targets,y=e.parent,C=y&&y.data==="nested"?y.vars.targets:x,O=e._overwrite==="auto"&&!bg,A=e.timeline,b=r.easeReverse||_,R,N,T,L,B,Z,G,ie,X,j,z,V,Q;if(A&&(!m||!a)&&(a="none"),e._ease=_a(a,yc.ease),e._rEase=b&&(_a(b)||e._ease),e._from=!A&&!!r.runBackwards,e._from&&(e.ratio=1),!A||m&&!r.stagger){if(ie=x[0]?ga(x[0]).harness:0,V=ie&&r[ie.prop],R=Yd(r,Dg),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!g?E.render(-1,!0):E.revert(p&&S?Cd:AT),E._lazy=0),l){if(Oo(e._startAt=Xn.set(x,yr({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&Xi(f),startAt:null,delay:0,onUpdate:h&&function(){return pr(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci||!c&&!g)&&e._startAt.revert(Cd),c&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&S&&!E){if(t&&(c=!1),T=yr({overwrite:!1,data:"isFromStart",lazy:c&&!E&&Xi(f),immediateRender:c,stagger:0,parent:y},R),V&&(T[ie.prop]=V),Oo(e._startAt=Xn.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci?e._startAt.revert(Cd):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,yn,yn);else if(!t)return}for(e._pt=e._ptCache=0,f=S&&Xi(f)||f&&!S,N=0;N<x.length;N++){if(B=x[N],G=B._gsap||Ig(x)[N]._gsap,e._ptLookup[N]=j={},p0[G.id]&&Io.length&&Xd(),z=C===x?N:C.indexOf(B),ie&&(X=new ie).init(B,V||R,e,z,C)!==!1&&(e._pt=L=new qi(e._pt,B,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(Y){j[Y]=L}),X.priority&&(Z=1)),!ie||V)for(T in R)ur[T]&&(X=k1(T,R,e,z,B,C))?X.priority&&(Z=1):j[T]=L=Ug.call(e,B,T,"get",R[T],z,C,0,r.stringFilter);e._op&&e._op[N]&&e.kill(B,e._op[N]),O&&e._pt&&(Co=e,Dn.killTweensOf(B,j,e.globalTime(t)),Q=!e.parent,Co=0),e._pt&&f&&(p0[G.id]=1)}Z&&W1(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Q,m&&t<=0&&A.render(Ir,!0,!0)},eA=function(e,t,n,r,a,l,c,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,m,g;if(!h)for(h=e._ptCache[t]=[],m=e._ptLookup,g=e._targets.length;g--;){if(p=m[g][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return y0=1,e.vars[t]="+=0",Og(e,c),y0=0,f?Sc(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(g=h.length;g--;)_=h[g],p=_._pt||_,p.s=(r||r===0)&&!a?r:p.s+(r||0)+l*p.c,p.c=n-p.s,_.e&&(_.e=zn(n)+Si(_.e)),_.b&&(_.b=p.s+Si(_.b))},tA=function(e,t){var n=e[0]?ga(e[0]).harness:0,r=n&&n.aliases,a,l,c,f;if(!r)return t;a=Vl({},t);for(l in r)if(l in a)for(f=r[l].split(","),c=f.length;c--;)a[f[c]]=a[l];return a},nA=function(e,t,n,r){var a=t.ease||r||"power1.inOut",l,c;if(wi(t))c=n[e]||(n[e]=[]),t.forEach(function(f,h){return c.push({t:h/(t.length-1)*100,v:f,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},rc=function(e,t,n,r,a){return Un(e)?e.call(t,n,r,a):si(e)&&~e.indexOf("random(")?Ec(e):e},B1=Ng+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",z1={};Yi(B1+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return z1[s]=1});var Xn=(function(s){a1(e,s);function e(n,r,a,l){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=s.call(this,l?r:nc(r))||this;var f=c.vars,h=f.duration,p=f.delay,_=f.immediateRender,m=f.stagger,g=f.overwrite,S=f.keyframes,E=f.defaults,x=f.scrollTrigger,y=r.parent||Dn,C=(wi(n)||u1(n)?qs(n[0]):"length"in r)?[n]:Fr(n),O,A,b,R,N,T,L,B;if(c._targets=C.length?Ig(C):Sc("GSAP target "+n+" not found. https://gsap.com",!vr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=g,S||m||Hf(h)||Hf(p)){r=c.vars;var Z=r.easeReverse||r.yoyoEase;if(O=c.timeline=new Wi({data:"nested",defaults:E||{},targets:y&&y.data==="nested"?y.vars.targets:C}),O.kill(),O.parent=O._dp=Os(c),O._start=0,m||Hf(h)||Hf(p)){if(R=C.length,L=m&&A1(m),ys(m))for(N in m)~B1.indexOf(N)&&(B||(B={}),B[N]=m[N]);for(A=0;A<R;A++)b=Yd(r,z1),b.stagger=0,Z&&(b.easeReverse=Z),B&&Vl(b,B),T=C[A],b.duration=+rc(h,Os(c),A,T,C),b.delay=(+rc(p,Os(c),A,T,C)||0)-c._delay,!m&&R===1&&b.delay&&(c._delay=p=b.delay,c._start+=p,b.delay=0),O.to(T,b,L?L(A,T,C):0),O._ease=sn.none;O.duration()?h=p=0:c.timeline=0}else if(S){nc(yr(O.vars.defaults,{ease:"none"})),O._ease=_a(S.ease||r.ease||"none");var G=0,ie,X,j;if(wi(S))S.forEach(function(z){return O.to(C,z,">")}),O.duration();else{b={};for(N in S)N==="ease"||N==="easeEach"||nA(N,S[N],b,S.easeEach);for(N in b)for(ie=b[N].sort(function(z,V){return z.t-V.t}),G=0,A=0;A<ie.length;A++)X=ie[A],j={ease:X.e,duration:(X.t-(A?ie[A-1].t:0))/100*h},j[N]=X.v,O.to(C,j,G),G+=j.duration;O.duration()<h&&O.to({},{duration:h-O.duration()})}}h||c.duration(h=O.duration())}else c.timeline=0;return g===!0&&!bg&&(Co=Os(c),Dn.killTweensOf(C),Co=0),ds(y,Os(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(_||!h&&!S&&c._start===Ln(y._time)&&Xi(_)&&DT(Os(c))&&y.data!=="nested")&&(c._tTime=-yn,c.render(Math.max(0,-p)||0)),x&&M1(Os(c),x),c}var t=e.prototype;return t.render=function(r,a,l){var c=this._time,f=this._tDur,h=this._dur,p=r<0,_=r>f-yn&&!p?f:r<yn?0:r,m,g,S,E,x,y,C,O;if(!h)IT(this,r,a,l);else if(_!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(m=_,O=this.timeline,this._repeat){if(E=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+r,a,l);if(m=Ln(_%E),_===f?(S=this._repeat,m=h):(x=Ln(_/E),S=~~x,S&&S===x?(m=h,S--):m>h&&(m=h)),y=this._yoyo&&S&1,y&&(m=h-m),x=Hl(this._tTime,E),m===c&&!l&&this._initted&&S===x)return this._tTime=_,this;S!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&m!==E&&this._initted&&(this._lock=l=1,this.render(Ln(E*S),!0).invalidate()._lock=0)}if(!this._initted){if(E1(this,p?r:m,l,a,_))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&S!==x))return this;if(h!==this._dur)return this.render(r,a,l)}if(this._rEase){var A=m<c;if(A!==this._inv){var b=A?c:h-c;this._inv=A,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=b?(A?-1:1)/b:0,this._invScale=A?-this.ratio:1-this.ratio,this._invEase=A?this._rEase:this._ease}this.ratio=C=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=C=this._ease(m/h);if(this._from&&(this.ratio=C=1-C),this._tTime=_,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&_&&!a&&!x&&(pr(this,"onStart"),this._tTime!==_))return this;for(g=this._pt;g;)g.r(C,g.d),g=g._next;O&&O.render(r<0?r:O._dur*O._ease(m/this._dur),a,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&m0(this,r,a,l),pr(this,"onUpdate")),this._repeat&&S!==x&&this.vars.onRepeat&&!a&&this.parent&&pr(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&m0(this,r,!0,!0),(r||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Oo(this,1),!a&&!(p&&!c)&&(_||c||y)&&(pr(this,_===f?"onComplete":"onReverseComplete",!0),this._prom&&!(_<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,l,c,f){wc||fr.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Og(this,h),p=this._ease(h/this._dur),eA(this,r,a,l,c,p,h,f)?this.resetTo(r,a,l,c,1):(xh(this,0),this.parent||y1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Xu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ci),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Co&&Co.vars.overwrite!==!0)._first||Xu(this),this.parent&&l!==this.timeline.totalDuration()&&Gl(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,f=r?Fr(r):c,h=this._ptLookup,p=this._pt,_,m,g,S,E,x,y;if((!a||a==="all")&&PT(c,f))return a==="all"&&(this._pt=0),Xu(this);for(_=this._op=this._op||[],a!=="all"&&(si(a)&&(E={},Yi(a,function(C){return E[C]=1}),a=E),a=tA(c,a)),y=c.length;y--;)if(~f.indexOf(c[y])){m=h[y],a==="all"?(_[y]=a,S=m,g={}):(g=_[y]=_[y]||{},S=a);for(E in S)x=m&&m[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&vh(this,x,"_pt"),delete m[E]),g!=="all"&&(g[E]=1)}return this._initted&&!this._pt&&p&&Xu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return ic(1,arguments)},e.delayedCall=function(r,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(r,a,l){return ic(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,l){return Dn.killTweensOf(r,a,l)},e})(Tc);yr(Xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yi("staggerTo,staggerFrom,staggerFromTo",function(s){Xn[s]=function(){var e=new Wi,t=v0.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var kg=function(e,t,n){return e[t]=n},V1=function(e,t,n){return e[t](n)},iA=function(e,t,n,r){return e[t](r.fp,n)},rA=function(e,t,n){return e.setAttribute(t,n)},Bg=function(e,t){return Un(e[t])?V1:Rg(e[t])&&e.setAttribute?rA:kg},H1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},G1=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},zg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},oA=function(e,t,n,r){for(var a=this._pt,l;a;)l=a._next,a.p===r&&a.modifier(e,t,n),a=l},aA=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?vh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},lA=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},W1=function(e){for(var t=e._pt,n,r,a,l;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=a},qi=(function(){function s(t,n,r,a,l,c,f,h,p){this.t=n,this.s=a,this.c=l,this.p=r,this.r=c||H1,this.d=f||this,this.set=h||kg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=lA,this.m=n,this.mt=a,this.tween=r},s})();Yi(Ng+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Dg[s]=1});xr.TweenMax=xr.TweenLite=Xn;xr.TimelineLite=xr.TimelineMax=Wi;Dn=new Wi({sortChildren:!1,defaults:yc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vr.stringFilter=F1;var xa=[],Ld={},uA=[],ey=0,cA=0,fm=function(e){return(Ld[e]||uA).map(function(t){return t()})},S0=function(){var e=Date.now(),t=[];e-ey>2&&(fm("matchMediaInit"),xa.forEach(function(n){var r=n.queries,a=n.conditions,l,c,f,h;for(c in r)l=us.matchMedia(r[c]).matches,l&&(f=1),l!==a[c]&&(a[c]=l,h=1);h&&(n.revert(),f&&t.push(n))}),fm("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ey=e,fm("matchMedia"))},X1=(function(){function s(t,n){this.selector=n&&_0(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cA++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,r,a){Un(n)&&(a=r,r=n,n=Un);var l=this,c=function(){var h=bn,p=l.selector,_;return h&&h!==l&&h.data.push(l),a&&(l.selector=_0(a)),bn=l,_=r.apply(l,arguments),Un(_)&&l._r.push(_),bn=h,l.selector=p,l.isReverted=!1,_};return l.last=c,n===Un?c(l,function(f){return l.add(null,f)}):n?l[n]=c:c},e.ignore=function(n){var r=bn;bn=null,n(this),bn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof s?n.push.apply(n,r.getTweens()):r instanceof Xn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)h=a.data[f],h instanceof Wi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Xn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var l=xa.length;l--;)xa[l].id===this.id&&xa.splice(l,1)},e.revert=function(n){this.kill(n||{})},s})(),fA=(function(){function s(t){this.contexts=[],this.scope=t,bn&&bn.data.push(this)}var e=s.prototype;return e.add=function(n,r,a){ys(n)||(n={matches:n});var l=new X1(0,a||this.scope),c=l.conditions={},f,h,p;bn&&!l.selector&&(l.selector=bn.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(h in n)h==="all"?p=1:(f=us.matchMedia(n[h]),f&&(xa.indexOf(l)<0&&xa.push(l),(c[h]=f.matches)&&(p=1),f.addListener?f.addListener(S0):f.addEventListener("change",S0)));return p&&r(l,function(_){return l.add(null,_)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},s})(),$d={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return D1(r)})},timeline:function(e){return new Wi(e)},getTweensOf:function(e,t){return Dn.getTweensOf(e,t)},getProperty:function(e,t,n,r){si(e)&&(e=Fr(e)[0]);var a=ga(e||{}).get,l=n?x1:_1;return n==="native"&&(n=""),e&&(t?l((ur[t]&&ur[t].get||a)(e,t,n,r)):function(c,f,h){return l((ur[c]&&ur[c].get||a)(e,c,f,h))})},quickSetter:function(e,t,n){if(e=Fr(e),e.length>1){var r=e.map(function(p){return Ji.quickSetter(p,t,n)}),a=r.length;return function(p){for(var _=a;_--;)r[_](p)}}e=e[0]||{};var l=ur[t],c=ga(e),f=c.harness&&(c.harness.aliases||{})[t]||t,h=l?function(p){var _=new l;bl._pt=0,_.init(e,n?p+n:p,bl,0,[e]),_.render(1,_),bl._pt&&zg(1,bl)}:c.set(e,f);return l?h:function(p){return h(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Ji.to(e,yr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),l=function(f,h,p){return a.resetTo(t,f,h,p)};return l.tween=a,l},isTweening:function(e){return Dn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_a(e.ease,yc.ease)),Kx(yc,e||{})},config:function(e){return Kx(vr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!ur[c]&&!xr[c]&&Sc(t+" effect requires "+c+" plugin.")}),am[t]=function(c,f,h){return n(Fr(c),yr(f||{},a),h)},l&&(Wi.prototype[t]=function(c,f,h){return this.add(am[t](c,ys(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){sn[e]=_a(t)},parseEase:function(e,t){return arguments.length?_a(e,t):sn},getById:function(e){return Dn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wi(e),r,a;for(n.smoothChildTiming=Xi(e.smoothChildTiming),Dn.remove(n),n._dp=0,n._time=n._tTime=Dn._time,r=Dn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Xn&&r.vars.onComplete===r._targets[0]))&&ds(n,r,r._start-r._delay),r=a;return ds(Dn,n,0),n},context:function(e,t){return e?new X1(e,t):bn},matchMedia:function(e){return new fA(e)},matchMediaRefresh:function(){return xa.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||S0()},addEventListener:function(e,t){var n=Ld[e]||(Ld[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ld[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:HT,wrapYoyo:GT,distribute:A1,random:R1,snap:b1,normalize:VT,getUnit:Si,clamp:OT,splitColor:N1,toArray:Fr,selector:_0,mapRange:P1,pipe:BT,unitize:zT,interpolate:WT,shuffle:T1},install:h1,effects:am,ticker:fr,updateRoot:Wi.updateRoot,plugins:ur,globalTimeline:Dn,core:{PropTween:qi,globals:p1,Tween:Xn,Timeline:Wi,Animation:Tc,getCache:ga,_removeLinkedListItem:vh,reverting:function(){return ci},context:function(e){return e&&bn&&(bn.data.push(e),e._ctx=bn),bn},suppressOverwrites:function(e){return bg=e}}};Yi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return $d[s]=Xn[s]});fr.add(Wi.updateRoot);bl=$d.to({},{duration:0});var dA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hA=function(e,t){var n=e._targets,r,a,l;for(r in t)for(a=n.length;a--;)l=e._ptLookup[a][r],l&&(l=l.d)&&(l._pt&&(l=dA(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[a],r))},dm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,l){l._onInit=function(c){var f,h;if(si(a)&&(f={},Yi(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}hA(c,a)}}}},Ji=$d.registerPlugin({name:"attr",init:function(e,t,n,r,a){var l,c,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(f||0)+"",t[l],r,a,0,0,l),c.op=l,c.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)ci?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dm("roundProps",x0),dm("modifiers"),dm("snap",b1))||$d;Xn.version=Wi.version=Ji.version="3.15.0";d1=1;Cg()&&Wl();sn.Power0;sn.Power1;sn.Power2;sn.Power3;sn.Power4;sn.Linear;sn.Quad;sn.Cubic;sn.Quart;sn.Quint;sn.Strong;sn.Elastic;sn.Back;sn.SteppedEase;sn.Bounce;sn.Sine;sn.Expo;sn.Circ;var ty,Po,Dl,Vg,fa,ny,Hg,pA=function(){return typeof window<"u"},$s={},la=180/Math.PI,Nl=Math.PI/180,el=Math.atan2,iy=1e8,Gg=/([A-Z])/g,mA=/(left|right|width|margin|padding|x)/i,gA=/[\s,\(]\S/,hs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},M0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_A=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Y1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},q1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SA=function(e,t,n){return e.style[t]=n},MA=function(e,t,n){return e.style.setProperty(t,n)},EA=function(e,t,n){return e._gsap[t]=n},wA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},TA=function(e,t,n,r,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},AA=function(e,t,n,r,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Nn="transform",$i=Nn+"Origin",bA=function s(e,t){var n=this,r=this.target,a=r.style,l=r._gsap;if(e in $s&&a){if(this.tfm=this.tfm||{},e!=="transform")e=hs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Bs(r,c)}):this.tfm[e]=l.x?l[e]:Bs(r,e),e===$i&&(this.tfm.zOrigin=l.zOrigin);else return hs.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Nn)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($i,t,"")),e=Nn}(a||t)&&this.props.push(e,t,a[e])},$1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},RA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Gg,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Hg(),(!a||!a.isStart)&&!n[Nn]&&($1(n),r.zOrigin&&n[$i]&&(n[$i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},K1=function(e,t){var n={target:e,props:[],revert:RA,save:bA};return e._gsap||Ji.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Z1,E0=function(e,t){var n=Po.createElementNS?Po.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Po.createElement(e);return n&&n.style?n:Po.createElement(e)},mr=function s(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Gg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&s(e,Xl(t)||t,1)||""},ry="O,Moz,ms,Ms,Webkit".split(","),Xl=function(e,t,n){var r=t||fa,a=r.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(ry[l]+e in a););return l<0?null:(l===3?"ms":l>=0?ry[l]:"")+e},w0=function(){pA()&&window.document&&(ty=window,Po=ty.document,Dl=Po.documentElement,fa=E0("div")||{style:{}},E0("div"),Nn=Xl(Nn),$i=Nn+"Origin",fa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z1=!!Xl("perspective"),Hg=Ji.core.reverting,Vg=1)},sy=function(e){var t=e.ownerSVGElement,n=E0("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),Dl.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),Dl.removeChild(n),a},oy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},J1=function(e){var t,n;try{t=e.getBBox()}catch{t=sy(e),n=1}return t&&(t.width||t.height)||n||(t=sy(e)),t&&!t.width&&!t.x&&!t.y?{x:+oy(e,["x","cx","x1"])||0,y:+oy(e,["y","cy","y1"])||0,width:0,height:0}:t},Q1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&J1(e))},ko=function(e,t){if(t){var n=e.style,r;t in $s&&t!==$i&&(t=Nn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Gg,"-$1").toLowerCase())):n.removeAttribute(t)}},Lo=function(e,t,n,r,a,l){var c=new qi(e._pt,t,n,0,1,l?q1:Y1);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},ay={deg:1,rad:1,turn:1},CA={grid:1,flex:1},Bo=function s(e,t,n,r){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=fa.style,f=mA.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),_=100,m=r==="px",g=r==="%",S,E,x,y;if(r===l||!a||ay[r]||ay[l])return a;if(l!=="px"&&!m&&(a=s(e,t,n,"px")),y=e.getCTM&&Q1(e),(g||l==="%")&&($s[t]||~t.indexOf("adius")))return S=y?e.getBBox()[f?"width":"height"]:e[p],zn(g?a/S*_:a/100*S);if(c[f?"width":"height"]=_+(m?l:r),E=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,y&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===Po||!E.appendChild)&&(E=Po.body),x=E._gsap,x&&g&&x.width&&f&&x.time===fr.time&&!x.uncache)return zn(a/x.width*_);if(g&&(t==="height"||t==="width")){var C=e.style[t];e.style[t]=_+r,S=e[p],C?e.style[t]=C:ko(e,t)}else(g||l==="%")&&!CA[mr(E,"display")]&&(c.position=mr(e,"position")),E===e&&(c.position="static"),E.appendChild(fa),S=fa[p],E.removeChild(fa),c.position="absolute";return f&&g&&(x=ga(E),x.time=fr.time,x.width=E[p]),zn(m?S*a/_:S&&a?_/S*a:0)},Bs=function(e,t,n,r){var a;return Vg||w0(),t in hs&&t!=="transform"&&(t=hs[t],~t.indexOf(",")&&(t=t.split(",")[0])),$s[t]&&t!=="transform"?(a=bc(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Zd(mr(e,$i))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Kd[t]&&Kd[t](e,t,n)||mr(e,t)||g1(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Bo(e,t,a,n)+n:a},PA=function(e,t,n,r){if(!n||n==="none"){var a=Xl(t,e,1),l=a&&mr(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=mr(e,"borderTopColor"))}var c=new qi(this._pt,e.style,t,0,1,G1),f=0,h=0,p,_,m,g,S,E,x,y,C,O,A,b;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=mr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=e.style[t],e.style[t]=r,r=mr(e,t)||r,E?e.style[t]=E:ko(e,t)),p=[n,r],F1(p),n=p[0],r=p[1],m=n.match(Al)||[],b=r.match(Al)||[],b.length){for(;_=Al.exec(r);)x=_[0],C=r.substring(f,_.index),S?S=(S+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(S=1),x!==(E=m[h++]||"")&&(g=parseFloat(E)||0,A=E.substr((g+"").length),x.charAt(1)==="="&&(x=Ll(g,x)+A),y=parseFloat(x),O=x.substr((y+"").length),f=Al.lastIndex-O.length,O||(O=O||vr.units[t]||A,f===r.length&&(r+=O,c.e+=O)),A!==O&&(g=Bo(e,t,E,O)||0),c._pt={_next:c._pt,p:C||h===1?C:",",s:g,c:y-g,m:S&&S<4||t==="zIndex"?Math.round:0});c.c=f<r.length?r.substring(f,r.length):""}else c.r=t==="display"&&r==="none"?q1:Y1;return f1.test(r)&&(c.e=0),this._pt=c,c},ly={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ly[n]||n,t[1]=ly[r]||r,t.join(" ")},DA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,l=n._gsap,c,f,h;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],$s[c]&&(f=1,c=c==="transformOrigin"?$i:Nn),ko(n,c);f&&(ko(n,Nn),l&&(l.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",bc(n,1),l.uncache=1,$1(r)))}},Kd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var l=e._pt=new qi(e._pt,t,n,0,0,DA);return l.u=r,l.pr=-10,l.tween=a,e._props.push(n),1}}},Ac=[1,0,0,1,0,0],j1={},eM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uy=function(e){var t=mr(e,Nn);return eM(t)?Ac:t.substr(7).match(c1).map(zn)},Wg=function(e,t){var n=e._gsap||ga(e),r=e.style,a=uy(e),l,c,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Ac:a):(a===Ac&&!e.offsetParent&&e!==Dl&&!n.svg&&(f=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Dl.appendChild(e)),a=uy(e),f?r.display=f:ko(e,"display"),h&&(c?l.insertBefore(e,c):l?l.appendChild(e):Dl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},T0=function(e,t,n,r,a,l){var c=e._gsap,f=a||Wg(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,m=c.yOffset||0,g=f[0],S=f[1],E=f[2],x=f[3],y=f[4],C=f[5],O=t.split(" "),A=parseFloat(O[0])||0,b=parseFloat(O[1])||0,R,N,T,L;n?f!==Ac&&(N=g*x-S*E)&&(T=A*(x/N)+b*(-E/N)+(E*C-x*y)/N,L=A*(-S/N)+b*(g/N)-(g*C-S*y)/N,A=T,b=L):(R=J1(e),A=R.x+(~O[0].indexOf("%")?A/100*R.width:A),b=R.y+(~(O[1]||O[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&c.smooth?(y=A-h,C=b-p,c.xOffset=_+(y*g+C*E)-y,c.yOffset=m+(y*S+C*x)-C):c.xOffset=c.yOffset=0,c.xOrigin=A,c.yOrigin=b,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[$i]="0px 0px",l&&(Lo(l,c,"xOrigin",h,A),Lo(l,c,"yOrigin",p,b),Lo(l,c,"xOffset",_,c.xOffset),Lo(l,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",A+" "+b)},bc=function(e,t){var n=e._gsap||new O1(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,l="px",c="deg",f=getComputedStyle(e),h=mr(e,$i)||"0",p,_,m,g,S,E,x,y,C,O,A,b,R,N,T,L,B,Z,G,ie,X,j,z,V,Q,Y,I,U,k,ve,De,se;return p=_=m=E=x=y=C=O=A=0,g=S=1,n.svg=!!(e.getCTM&&Q1(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[Nn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Nn]!=="none"?f[Nn]:"")),r.scale=r.rotate=r.translate="none"),N=Wg(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),h=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),T0(e,V||h,!!V||n.originIsAbsolute,n.smooth!==!1,N)),b=n.xOrigin||0,R=n.yOrigin||0,N!==Ac&&(Z=N[0],G=N[1],ie=N[2],X=N[3],p=j=N[4],_=z=N[5],N.length===6?(g=Math.sqrt(Z*Z+G*G),S=Math.sqrt(X*X+ie*ie),E=Z||G?el(G,Z)*la:0,C=ie||X?el(ie,X)*la+E:0,C&&(S*=Math.abs(Math.cos(C*Nl))),n.svg&&(p-=b-(b*Z+R*ie),_-=R-(b*G+R*X))):(se=N[6],ve=N[7],I=N[8],U=N[9],k=N[10],De=N[11],p=N[12],_=N[13],m=N[14],T=el(se,k),x=T*la,T&&(L=Math.cos(-T),B=Math.sin(-T),V=j*L+I*B,Q=z*L+U*B,Y=se*L+k*B,I=j*-B+I*L,U=z*-B+U*L,k=se*-B+k*L,De=ve*-B+De*L,j=V,z=Q,se=Y),T=el(-ie,k),y=T*la,T&&(L=Math.cos(-T),B=Math.sin(-T),V=Z*L-I*B,Q=G*L-U*B,Y=ie*L-k*B,De=X*B+De*L,Z=V,G=Q,ie=Y),T=el(G,Z),E=T*la,T&&(L=Math.cos(T),B=Math.sin(T),V=Z*L+G*B,Q=j*L+z*B,G=G*L-Z*B,z=z*L-j*B,Z=V,j=Q),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,y=180-y),g=zn(Math.sqrt(Z*Z+G*G+ie*ie)),S=zn(Math.sqrt(z*z+se*se)),T=el(j,z),C=Math.abs(T)>2e-4?T*la:0,A=De?1/(De<0?-De:De):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!eM(mr(e,Nn)),V&&e.setAttribute("transform",V))),Math.abs(C)>90&&Math.abs(C)<270&&(a?(g*=-1,C+=E<=0?180:-180,E+=E<=0?180:-180):(S*=-1,C+=C<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=_-((n.yPercent=_&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=m+l,n.scaleX=zn(g),n.scaleY=zn(S),n.rotation=zn(E)+c,n.rotationX=zn(x)+c,n.rotationY=zn(y)+c,n.skewX=C+c,n.skewY=O+c,n.transformPerspective=A+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[$i]=Zd(h)),n.xOffset=n.yOffset=0,n.force3D=vr.force3D,n.renderTransform=n.svg?IA:Z1?tM:NA,n.uncache=0,n},Zd=function(e){return(e=e.split(" "))[0]+" "+e[1]},hm=function(e,t,n){var r=Si(t);return zn(parseFloat(t)+parseFloat(Bo(e,"x",n+"px",r)))+r},NA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tM(e,t)},ea="0deg",Lu="0px",ta=") ",tM=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.z,h=n.rotation,p=n.rotationY,_=n.rotationX,m=n.skewX,g=n.skewY,S=n.scaleX,E=n.scaleY,x=n.transformPerspective,y=n.force3D,C=n.target,O=n.zOrigin,A="",b=y==="auto"&&e&&e!==1||y===!0;if(O&&(_!==ea||p!==ea)){var R=parseFloat(p)*Nl,N=Math.sin(R),T=Math.cos(R),L;R=parseFloat(_)*Nl,L=Math.cos(R),l=hm(C,l,N*L*-O),c=hm(C,c,-Math.sin(R)*-O),f=hm(C,f,T*L*-O+O)}x!==Lu&&(A+="perspective("+x+ta),(r||a)&&(A+="translate("+r+"%, "+a+"%) "),(b||l!==Lu||c!==Lu||f!==Lu)&&(A+=f!==Lu||b?"translate3d("+l+", "+c+", "+f+") ":"translate("+l+", "+c+ta),h!==ea&&(A+="rotate("+h+ta),p!==ea&&(A+="rotateY("+p+ta),_!==ea&&(A+="rotateX("+_+ta),(m!==ea||g!==ea)&&(A+="skew("+m+", "+g+ta),(S!==1||E!==1)&&(A+="scale("+S+", "+E+ta),C.style[Nn]=A||"translate(0, 0)"},IA=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.rotation,h=n.skewX,p=n.skewY,_=n.scaleX,m=n.scaleY,g=n.target,S=n.xOrigin,E=n.yOrigin,x=n.xOffset,y=n.yOffset,C=n.forceCSS,O=parseFloat(l),A=parseFloat(c),b,R,N,T,L;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=Nl,h*=Nl,b=Math.cos(f)*_,R=Math.sin(f)*_,N=Math.sin(f-h)*-m,T=Math.cos(f-h)*m,h&&(p*=Nl,L=Math.tan(h-p),L=Math.sqrt(1+L*L),N*=L,T*=L,p&&(L=Math.tan(p),L=Math.sqrt(1+L*L),b*=L,R*=L)),b=zn(b),R=zn(R),N=zn(N),T=zn(T)):(b=_,T=m,R=N=0),(O&&!~(l+"").indexOf("px")||A&&!~(c+"").indexOf("px"))&&(O=Bo(g,"x",l,"px"),A=Bo(g,"y",c,"px")),(S||E||x||y)&&(O=zn(O+S-(S*b+E*N)+x),A=zn(A+E-(S*R+E*T)+y)),(r||a)&&(L=g.getBBox(),O=zn(O+r/100*L.width),A=zn(A+a/100*L.height)),L="matrix("+b+","+R+","+N+","+T+","+O+","+A+")",g.setAttribute("transform",L),C&&(g.style[Nn]=L)},FA=function(e,t,n,r,a){var l=360,c=si(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?la:1),h=f-r,p=r+h+"deg",_,m;return c&&(_=a.split("_")[1],_==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),_==="cw"&&h<0?h=(h+l*iy)%l-~~(h/l)*l:_==="ccw"&&h>0&&(h=(h-l*iy)%l-~~(h/l)*l)),e._pt=m=new qi(e._pt,t,n,r,h,vA),m.e=p,m.u="deg",e._props.push(n),m},cy=function(e,t){for(var n in t)e[n]=t[n];return e},UA=function(e,t,n){var r=cy({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,f,h,p,_,m,g,S;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[Nn]=t,c=bc(n,1),ko(n,Nn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Nn],l[Nn]=t,c=bc(n,1),l[Nn]=h);for(f in $s)h=r[f],p=c[f],h!==p&&a.indexOf(f)<0&&(g=Si(h),S=Si(p),_=g!==S?Bo(n,f,h,S):parseFloat(h),m=parseFloat(p),e._pt=new qi(e._pt,c,f,_,m-_,M0),e._pt.u=S||0,e._props.push(f));cy(c,r)};Yi("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",r="Bottom",a="Left",l=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?s+c:"border"+c+s});Kd[e>1?"border"+s:s]=function(c,f,h,p,_){var m,g;if(arguments.length<4)return m=l.map(function(S){return Bs(c,S,h)}),g=m.join(" "),g.split(m[0]).length===5?m[0]:g;m=(p+"").split(" "),g={},l.forEach(function(S,E){return g[S]=m[E]=m[E]||m[(E-1)/2|0]}),c.init(f,g,_)}});var nM={name:"css",register:w0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var l=this._props,c=e.style,f=n.vars.startAt,h,p,_,m,g,S,E,x,y,C,O,A,b,R,N,T,L;Vg||w0(),this.styles=this.styles||K1(e),T=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(ur[E]&&k1(E,t,n,r,e,a)))){if(g=typeof p,S=Kd[E],g==="function"&&(p=p.call(n,r,e,a),g=typeof p),g==="string"&&~p.indexOf("random(")&&(p=Ec(p)),S)S(this,e,E,p,n)&&(N=1);else if(E.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",Fo.lastIndex=0,Fo.test(h)||(x=Si(h),y=Si(p),y?x!==y&&(h=Bo(e,E,h,y)+y):x&&(p+=x)),this.add(c,"setProperty",h,p,r,a,0,0,E),l.push(E),T.push(E,0,c[E]);else if(g!=="undefined"){if(f&&E in f?(h=typeof f[E]=="function"?f[E].call(n,r,e,a):f[E],si(h)&&~h.indexOf("random(")&&(h=Ec(h)),Si(h+"")||h==="auto"||(h+=vr.units[E]||Si(Bs(e,E))||""),(h+"").charAt(1)==="="&&(h=Bs(e,E))):h=Bs(e,E),m=parseFloat(h),C=g==="string"&&p.charAt(1)==="="&&p.substr(0,2),C&&(p=p.substr(2)),_=parseFloat(p),E in hs&&(E==="autoAlpha"&&(m===1&&Bs(e,"visibility")==="hidden"&&_&&(m=0),T.push("visibility",0,c.visibility),Lo(this,c,"visibility",m?"inherit":"hidden",_?"inherit":"hidden",!_)),E!=="scale"&&E!=="transform"&&(E=hs[E],~E.indexOf(",")&&(E=E.split(",")[0]))),O=E in $s,O){if(this.styles.save(E),L=p,g==="string"&&p.substring(0,6)==="var(--"){if(p=mr(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var B=e.style.perspective;e.style.perspective=p,p=mr(e,"perspective"),B?e.style.perspective=B:ko(e,"perspective")}_=parseFloat(p)}if(A||(b=e._gsap,b.renderTransform&&!t.parseTransform||bc(e,t.parseTransform),R=t.smoothOrigin!==!1&&b.smooth,A=this._pt=new qi(this._pt,c,Nn,0,1,b.renderTransform,b,0,-1),A.dep=1),E==="scale")this._pt=new qi(this._pt,b,"scaleY",b.scaleY,(C?Ll(b.scaleY,C+_):_)-b.scaleY||0,M0),this._pt.u=0,l.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push($i,0,c[$i]),p=LA(p),b.svg?T0(e,p,0,R,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==b.zOrigin&&Lo(this,b,"zOrigin",b.zOrigin,y),Lo(this,c,E,Zd(h),Zd(p)));continue}else if(E==="svgOrigin"){T0(e,p,1,R,0,this);continue}else if(E in j1){FA(this,b,E,m,C?Ll(m,C+p):p);continue}else if(E==="smoothOrigin"){Lo(this,b,"smooth",b.smooth,p);continue}else if(E==="force3D"){b[E]=p;continue}else if(E==="transform"){UA(this,p,e);continue}}else E in c||(E=Xl(E)||E);if(O||(_||_===0)&&(m||m===0)&&!gA.test(p)&&E in c)x=(h+"").substr((m+"").length),_||(_=0),y=Si(p)||(E in vr.units?vr.units[E]:x),x!==y&&(m=Bo(e,E,h,y)),this._pt=new qi(this._pt,O?b:c,E,m,(C?Ll(m,C+_):_)-m,!O&&(y==="px"||E==="zIndex")&&t.autoRound!==!1?yA:M0),this._pt.u=y||0,O&&L!==p?(this._pt.b=h,this._pt.e=L,this._pt.r=xA):x!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=_A);else if(E in c)PA.call(this,e,E,h,C?C+p:p);else if(E in e)this.add(e,E,h||e[E],C?C+p:p,r,a);else if(E!=="parseTransform"){Lg(E,p);continue}O||(E in c?T.push(E,0,c[E]):typeof e[E]=="function"?T.push(E,2,e[E]()):T.push(E,1,h||e[E])),l.push(E)}}N&&W1(this)},render:function(e,t){if(t.tween._time||!Hg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bs,aliases:hs,getSetter:function(e,t,n){var r=hs[t];return r&&r.indexOf(",")<0&&(t=r),t in $s&&t!==$i&&(e._gsap.x||Bs(e,"x"))?n&&ny===n?t==="scale"?wA:EA:(ny=n||{})&&(t==="scale"?TA:AA):e.style&&!Rg(e.style[t])?SA:~t.indexOf("-")?MA:Bg(e,t)},core:{_removeProperty:ko,_getMatrix:Wg}};Ji.utils.checkPrefix=Xl;Ji.core.getStyleSaver=K1;(function(s,e,t,n){var r=Yi(s+","+e+","+t,function(a){$s[a]=1});Yi(e,function(a){vr.units[a]="deg",j1[a]=1}),hs[r[13]]=s+","+e,Yi(n,function(a){var l=a.split(":");hs[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){vr.units[s]="px"});Ji.registerPlugin(nM);var ks=Ji.registerPlugin(nM)||Ji;ks.core.Tween;function OA(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function kA(s,e,t){return e&&OA(s.prototype,e),s}var li,Dd,dr,Do,No,Il,iM,ua,Fl,rM,Gs,jr,sM,oM=function(){return li||typeof window<"u"&&(li=window.gsap)&&li.registerPlugin&&li},aM=1,Rl=[],Qt=[],vs=[],sc=Date.now,A0=function(e,t){return t},BA=function(){var e=Fl.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Qt),r.push.apply(r,vs),Qt=n,vs=r,A0=function(l,c){return t[l](c)}},Uo=function(e,t){return~vs.indexOf(e)&&vs[vs.indexOf(e)+1][t]},oc=function(e){return!!~rM.indexOf(e)},Ri=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},bi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Gf="scrollLeft",Wf="scrollTop",b0=function(){return Gs&&Gs.isPressed||Qt.cache++},Jd=function(e,t){var n=function r(a){if(a||a===0){aM&&(dr.history.scrollRestoration="manual");var l=Gs&&Gs.isPressed;a=r.v=Math.round(a)||(Gs&&Gs.iOS?1:0),e(a),r.cacheID=Qt.cache,l&&A0("ss",a)}else(t||Qt.cache!==r.cacheID||A0("ref"))&&(r.cacheID=Qt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ii={s:Gf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jd(function(s){return arguments.length?dr.scrollTo(s,Zn.sc()):dr.pageXOffset||Do[Gf]||No[Gf]||Il[Gf]||0})},Zn={s:Wf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ii,sc:Jd(function(s){return arguments.length?dr.scrollTo(Ii.sc(),s):dr.pageYOffset||Do[Wf]||No[Wf]||Il[Wf]||0})},Gi=function(e,t){return(t&&t._ctx&&t._ctx.selector||li.utils.toArray)(e)[0]||(typeof e=="string"&&li.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zA=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},zo=function(e,t){var n=t.s,r=t.sc;oc(e)&&(e=Do.scrollingElement||No);var a=Qt.indexOf(e),l=r===Zn.sc?1:2;!~a&&(a=Qt.push(e)-1),Qt[a+l]||Ri(e,"scroll",b0);var c=Qt[a+l],f=c||(Qt[a+l]=Jd(Uo(e,n),!0)||(oc(e)?r:Jd(function(h){return arguments.length?e[n]=h:e[n]})));return f.target=e,c||(f.smooth=li.getProperty(e,"scrollBehavior")==="smooth"),f},R0=function(e,t,n){var r=e,a=e,l=sc(),c=l,f=t||50,h=Math.max(500,f*3),p=function(S,E){var x=sc();E||x-l>f?(a=r,r=S,c=l,l=x):n?r+=S:r=a+(S-a)/(x-c)*(l-c)},_=function(){a=r=n?0:r,c=l=0},m=function(S){var E=c,x=a,y=sc();return(S||S===0)&&S!==r&&p(S),l===c||y-c>h?0:(r+(n?x:-x))/((n?y:l)-E)*1e3};return{update:p,reset:_,getVelocity:m}},Du=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fy=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},lM=function(){Fl=li.core.globals().ScrollTrigger,Fl&&Fl.core&&BA()},uM=function(e){return li=e||oM(),!Dd&&li&&typeof document<"u"&&document.body&&(dr=window,Do=document,No=Do.documentElement,Il=Do.body,rM=[dr,Do,No,Il],li.utils.clamp,sM=li.core.context||function(){},ua="onpointerenter"in Il?"pointer":"mouse",iM=Vn.isTouch=dr.matchMedia&&dr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in dr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jr=Vn.eventTypes=("ontouchstart"in No?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in No?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return aM=0},500),Dd=1),Fl||lM(),Dd};Ii.op=Zn;Qt.cache=0;var Vn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Dd||uM(li)||console.warn("Please gsap.registerPlugin(Observer)"),Fl||lM();var r=n.tolerance,a=n.dragMinimum,l=n.type,c=n.target,f=n.lineHeight,h=n.debounce,p=n.preventDefault,_=n.onStop,m=n.onStopDelay,g=n.ignore,S=n.wheelSpeed,E=n.event,x=n.onDragStart,y=n.onDragEnd,C=n.onDrag,O=n.onPress,A=n.onRelease,b=n.onRight,R=n.onLeft,N=n.onUp,T=n.onDown,L=n.onChangeX,B=n.onChangeY,Z=n.onChange,G=n.onToggleX,ie=n.onToggleY,X=n.onHover,j=n.onHoverEnd,z=n.onMove,V=n.ignoreCheck,Q=n.isNormalizer,Y=n.onGestureStart,I=n.onGestureEnd,U=n.onWheel,k=n.onEnable,ve=n.onDisable,De=n.onClick,se=n.scrollSpeed,ke=n.capture,ee=n.allowClicks,te=n.lockAxis,Pe=n.onLockAxis;this.target=c=Gi(c)||No,this.vars=n,g&&(g=li.utils.toArray(g)),r=r||1e-9,a=a||0,S=S||1,se=se||1,l=l||"wheel,touch,pointer",h=h!==!1,f||(f=parseFloat(dr.getComputedStyle(Il).lineHeight)||22);var Oe,ze,qe,st,Ke,$e,be,fe=this,Et=0,Ze=0,it=n.passive||!p&&n.passive!==!1,Qe=zo(c,Ii),vt=zo(c,Zn),q=Qe(),We=vt(),Le=~l.indexOf("touch")&&!~l.indexOf("pointer")&&jr[0]==="pointerdown",F=oc(c),w=c.ownerDocument||Do,$=[0,0,0],W=[0,0,0],de=0,Ne=function(){return de=sc()},Fe=function(ne,Be){return(fe.event=ne)&&g&&zA(ne.target,g)||Be&&Le&&ne.pointerType!=="touch"||V&&V(ne,Be)},Ee=function(){fe._vx.reset(),fe._vy.reset(),ze.pause(),_&&_(fe)},we=function(){var ne=fe.deltaX=fy($),Be=fe.deltaY=fy(W),_e=Math.abs(ne)>=r,ae=Math.abs(Be)>=r;Z&&(_e||ae)&&Z(fe,ne,Be,$,W),_e&&(b&&fe.deltaX>0&&b(fe),R&&fe.deltaX<0&&R(fe),L&&L(fe),G&&fe.deltaX<0!=Et<0&&G(fe),Et=fe.deltaX,$[0]=$[1]=$[2]=0),ae&&(T&&fe.deltaY>0&&T(fe),N&&fe.deltaY<0&&N(fe),B&&B(fe),ie&&fe.deltaY<0!=Ze<0&&ie(fe),Ze=fe.deltaY,W[0]=W[1]=W[2]=0),(st||qe)&&(z&&z(fe),qe&&(x&&qe===1&&x(fe),C&&C(fe),qe=0),st=!1),$e&&!($e=!1)&&Pe&&Pe(fe),Ke&&(U(fe),Ke=!1),Oe=0},Xe=function(ne,Be,_e){$[_e]+=ne,W[_e]+=Be,fe._vx.update(ne),fe._vy.update(Be),h?Oe||(Oe=requestAnimationFrame(we)):we()},Je=function(ne,Be){te&&!be&&(fe.axis=be=Math.abs(ne)>Math.abs(Be)?"x":"y",$e=!0),be!=="y"&&($[2]+=ne,fe._vx.update(ne,!0)),be!=="x"&&(W[2]+=Be,fe._vy.update(Be,!0)),h?Oe||(Oe=requestAnimationFrame(we)):we()},Se=function(ne){if(!Fe(ne,1)){ne=Du(ne,p);var Be=ne.clientX,_e=ne.clientY,ae=Be-fe.x,Te=_e-fe.y,Ye=fe.isDragging;fe.x=Be,fe.y=_e,(Ye||(ae||Te)&&(Math.abs(fe.startX-Be)>=a||Math.abs(fe.startY-_e)>=a))&&(qe||(qe=Ye?2:1),Ye||(fe.isDragging=!0),Je(ae,Te))}},xe=fe.onPress=function(oe){Fe(oe,1)||oe&&oe.button||(fe.axis=be=null,ze.pause(),fe.isPressed=!0,oe=Du(oe),Et=Ze=0,fe.startX=fe.x=oe.clientX,fe.startY=fe.y=oe.clientY,fe._vx.reset(),fe._vy.reset(),Ri(Q?c:w,jr[1],Se,it,!0),fe.deltaX=fe.deltaY=0,O&&O(fe))},me=fe.onRelease=function(oe){if(!Fe(oe,1)){bi(Q?c:w,jr[1],Se,!0);var ne=!isNaN(fe.y-fe.startY),Be=fe.isDragging,_e=Be&&(Math.abs(fe.x-fe.startX)>3||Math.abs(fe.y-fe.startY)>3),ae=Du(oe);!_e&&ne&&(fe._vx.reset(),fe._vy.reset(),p&&ee&&li.delayedCall(.08,function(){if(sc()-de>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(w.createEvent){var Te=w.createEvent("MouseEvents");Te.initMouseEvent("click",!0,!0,dr,1,ae.screenX,ae.screenY,ae.clientX,ae.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Te)}}})),fe.isDragging=fe.isGesturing=fe.isPressed=!1,_&&Be&&!Q&&ze.restart(!0),qe&&we(),y&&Be&&y(fe),A&&A(fe,_e)}},Re=function(ne){return ne.touches&&ne.touches.length>1&&(fe.isGesturing=!0)&&Y(ne,fe.isDragging)},Ge=function(){return(fe.isGesturing=!1)||I(fe)},K=function(ne){if(!Fe(ne)){var Be=Qe(),_e=vt();Xe((Be-q)*se,(_e-We)*se,1),q=Be,We=_e,_&&ze.restart(!0)}},Ue=function(ne){if(!Fe(ne)){ne=Du(ne,p),U&&(Ke=!0);var Be=(ne.deltaMode===1?f:ne.deltaMode===2?dr.innerHeight:1)*S;Xe(ne.deltaX*Be,ne.deltaY*Be,0),_&&!Q&&ze.restart(!0)}},ge=function(ne){if(!Fe(ne)){var Be=ne.clientX,_e=ne.clientY,ae=Be-fe.x,Te=_e-fe.y;fe.x=Be,fe.y=_e,st=!0,_&&ze.restart(!0),(ae||Te)&&Je(ae,Te)}},Ve=function(ne){fe.event=ne,X(fe)},ye=function(ne){fe.event=ne,j(fe)},H=function(ne){return Fe(ne)||Du(ne,p)&&De(fe)};ze=fe._dc=li.delayedCall(m||.25,Ee).pause(),fe.deltaX=fe.deltaY=0,fe._vx=R0(0,50,!0),fe._vy=R0(0,50,!0),fe.scrollX=Qe,fe.scrollY=vt,fe.isDragging=fe.isGesturing=fe.isPressed=!1,sM(this),fe.enable=function(oe){return fe.isEnabled||(Ri(F?w:c,"scroll",b0),l.indexOf("scroll")>=0&&Ri(F?w:c,"scroll",K,it,ke),l.indexOf("wheel")>=0&&Ri(c,"wheel",Ue,it,ke),(l.indexOf("touch")>=0&&iM||l.indexOf("pointer")>=0)&&(Ri(c,jr[0],xe,it,ke),Ri(w,jr[2],me),Ri(w,jr[3],me),ee&&Ri(c,"click",Ne,!0,!0),De&&Ri(c,"click",H),Y&&Ri(w,"gesturestart",Re),I&&Ri(w,"gestureend",Ge),X&&Ri(c,ua+"enter",Ve),j&&Ri(c,ua+"leave",ye),z&&Ri(c,ua+"move",ge)),fe.isEnabled=!0,fe.isDragging=fe.isGesturing=fe.isPressed=st=qe=!1,fe._vx.reset(),fe._vy.reset(),q=Qe(),We=vt(),oe&&oe.type&&xe(oe),k&&k(fe)),fe},fe.disable=function(){fe.isEnabled&&(Rl.filter(function(oe){return oe!==fe&&oc(oe.target)}).length||bi(F?w:c,"scroll",b0),fe.isPressed&&(fe._vx.reset(),fe._vy.reset(),bi(Q?c:w,jr[1],Se,!0)),bi(F?w:c,"scroll",K,ke),bi(c,"wheel",Ue,ke),bi(c,jr[0],xe,ke),bi(w,jr[2],me),bi(w,jr[3],me),bi(c,"click",Ne,!0),bi(c,"click",H),bi(w,"gesturestart",Re),bi(w,"gestureend",Ge),bi(c,ua+"enter",Ve),bi(c,ua+"leave",ye),bi(c,ua+"move",ge),fe.isEnabled=fe.isPressed=fe.isDragging=!1,ve&&ve(fe))},fe.kill=fe.revert=function(){fe.disable();var oe=Rl.indexOf(fe);oe>=0&&Rl.splice(oe,1),Gs===fe&&(Gs=0)},Rl.push(fe),Q&&oc(c)&&(Gs=fe),fe.enable(E)},kA(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Vn.version="3.15.0";Vn.create=function(s){return new Vn(s)};Vn.register=uM;Vn.getAll=function(){return Rl.slice()};Vn.getById=function(s){return Rl.filter(function(e){return e.vars.id===s})[0]};oM()&&li.registerPlugin(Vn);var wt,Ml,Jt,mn,cr,hn,Xg,Qd,Rc,ac,qu,Xf,xi,yh,C0,Di,dy,hy,El,cM,pm,fM,Li,P0,dM,hM,To,L0,Yg,Ul,qg,lc,D0,mm,Yf=1,yi=Date.now,gm=yi(),Ur=0,$u=0,py=function(e,t,n){var r=lr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},my=function(e,t){return t&&(!lr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},VA=function s(){return $u&&requestAnimationFrame(s)},gy=function(){return yh=1},vy=function(){return yh=0},cs=function(e){return e},Ku=function(e){return Math.round(e*1e5)/1e5||0},pM=function(){return typeof window<"u"},mM=function(){return wt||pM()&&(wt=window.gsap)&&wt.registerPlugin&&wt},Ea=function(e){return!!~Xg.indexOf(e)},gM=function(e){return(e==="Height"?qg:Jt["inner"+e])||cr["client"+e]||hn["client"+e]},vM=function(e){return Uo(e,"getBoundingClientRect")||(Ea(e)?function(){return Od.width=Jt.innerWidth,Od.height=qg,Od}:function(){return zs(e)})},HA=function(e,t,n){var r=n.d,a=n.d2,l=n.a;return(l=Uo(e,"getBoundingClientRect"))?function(){return l()[r]}:function(){return(t?gM(a):e["client"+a])||0}},GA=function(e,t){return!t||~vs.indexOf(e)?vM(e):function(){return Od}},ps=function(e,t){var n=t.s,r=t.d2,a=t.d,l=t.a;return Math.max(0,(n="scroll"+r)&&(l=Uo(e,n))?l()-vM(e)()[a]:Ea(e)?(cr[n]||hn[n])-gM(r):e[n]-e["offset"+r])},qf=function(e,t){for(var n=0;n<El.length;n+=3)(!t||~t.indexOf(El[n+1]))&&e(El[n],El[n+1],El[n+2])},lr=function(e){return typeof e=="string"},Mi=function(e){return typeof e=="function"},Zu=function(e){return typeof e=="number"},ca=function(e){return typeof e=="object"},Nu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},tl=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},nl=Math.abs,_M="left",xM="top",$g="right",Kg="bottom",ya="width",Sa="height",uc="Right",cc="Left",fc="Top",dc="Bottom",Wn="padding",Lr="margin",Yl="Width",Zg="Height",Kn="px",Dr=function(e){return Jt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},WA=function(e){var t=Dr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},_y=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zs=function(e,t){var n=t&&Dr(e)[C0]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},jd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},yM=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},XA=function(e){return function(t){return wt.utils.snap(yM(e),t)}},Jg=function(e){var t=wt.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,l){l===void 0&&(l=.001);var c;if(!a)return t(r);if(a>0){for(r-=l,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=l;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,l){l===void 0&&(l=.001);var c=t(r);return!a||Math.abs(c-r)<l||c-r<0==a<0?c:t(a<0?r-e:r+e)}},YA=function(e){return function(t,n){return Jg(yM(e))(t,n.direction)}},$f=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},ri=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},ii=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Kf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zf={toggleActions:"play",anticipatePin:0},eh={top:0,left:0,center:.5,bottom:1,right:1},Nd=function(e,t){if(lr(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in eh?eh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Jf=function(e,t,n,r,a,l,c,f){var h=a.startColor,p=a.endColor,_=a.fontSize,m=a.indent,g=a.fontWeight,S=mn.createElement("div"),E=Ea(n)||Uo(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,y=E?hn:n.tagName==="IFRAME"?n.contentDocument.body:n,C=e.indexOf("start")!==-1,O=C?h:p,A="border-color:"+O+";font-size:"+_+";color:"+O+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((x||f)&&E?"fixed;":"absolute;"),(x||f||!E)&&(A+=(r===Zn?$g:Kg)+":"+(l+parseFloat(m))+"px;"),c&&(A+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),S._isStart=C,S.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),S.style.cssText=A,S.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(S,y.children[0]):y.appendChild(S),S._offset=S["offset"+r.op.d2],Id(S,0,r,C),S},Id=function(e,t,n,r){var a={display:"block"},l=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+l+Yl]=1,a["border"+c+Yl]=0,a[n.p]=t+"px",wt.set(e,a)},$t=[],N0={},Cc,yy=function(){return yi()-Ur>34&&(Cc||(Cc=requestAnimationFrame(Xs)))},il=function(){(!Li||!Li.isPressed||Li.startX>hn.clientWidth)&&(Qt.cache++,Li?Cc||(Cc=requestAnimationFrame(Xs)):Xs(),Ur||Ta("scrollStart"),Ur=yi())},vm=function(){hM=Jt.innerWidth,dM=Jt.innerHeight},Ju=function(e){Qt.cache++,(e===!0||!xi&&!fM&&!mn.fullscreenElement&&!mn.webkitFullscreenElement&&(!P0||hM!==Jt.innerWidth||Math.abs(Jt.innerHeight-dM)>Jt.innerHeight*.25))&&Qd.restart(!0)},wa={},qA=[],SM=function s(){return ii(Kt,"scrollEnd",s)||da(!0)},Ta=function(e){return wa[e]&&wa[e].map(function(t){return t()})||qA},ar=[],MM=function(e){for(var t=0;t<ar.length;t+=5)(!e||ar[t+4]&&ar[t+4].query===e)&&(ar[t].style.cssText=ar[t+1],ar[t].getBBox&&ar[t].setAttribute("transform",ar[t+2]||""),ar[t+3].uncache=1)},EM=function(){return Qt.forEach(function(e){return Mi(e)&&++e.cacheID&&(e.rec=e())})},Qg=function(e,t){var n;for(Di=0;Di<$t.length;Di++)n=$t[Di],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));lc=!0,t&&MM(t),t||Ta("revert")},wM=function(e,t){Qt.cache++,(t||!Ni)&&Qt.forEach(function(n){return Mi(n)&&n.cacheID++&&(n.rec=0)}),lr(e)&&(Jt.history.scrollRestoration=Yg=e)},Ni,Ma=0,Sy,$A=function(){if(Sy!==Ma){var e=Sy=Ma;requestAnimationFrame(function(){return e===Ma&&da(!0)})}},TM=function(){hn.appendChild(Ul),qg=!Li&&Ul.offsetHeight||Jt.innerHeight,hn.removeChild(Ul)},My=function(e){return Rc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},da=function(e,t){if(cr=mn.documentElement,hn=mn.body,Xg=[Jt,mn,cr,hn],Ur&&!e&&!lc){ri(Kt,"scrollEnd",SM);return}TM(),Ni=Kt.isRefreshing=!0,lc||EM();var n=Ta("refreshInit");cM&&Kt.sort(),t||Qg(),Qt.forEach(function(r){Mi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),$t.slice(0).forEach(function(r){return r.refresh()}),lc=!1,$t.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",l=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-l),r.refresh()}}),D0=1,My(!0),$t.forEach(function(r){var a=ps(r.scroller,r._dir),l=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(l||c)&&r.setPositions(c?a-1:r.start,l?Math.max(c?a:r.start+1,a):r.end,!0)}),My(!1),D0=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Qt.forEach(function(r){Mi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),wM(Yg,1),Qd.pause(),Ma++,Ni=2,Xs(2),$t.forEach(function(r){return Mi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ni=Kt.isRefreshing=!1,Ta("refresh")},I0=0,Fd=1,hc,Xs=function(e){if(e===2||!Ni&&!lc){Kt.isUpdating=!0,hc&&hc.update(0);var t=$t.length,n=yi(),r=n-gm>=50,a=t&&$t[0].scroll();if(Fd=I0>a?-1:1,Ni||(I0=a),r&&(Ur&&!yh&&n-Ur>200&&(Ur=0,Ta("scrollEnd")),qu=gm,gm=n),Fd<0){for(Di=t;Di-- >0;)$t[Di]&&$t[Di].update(0,r);Fd=1}else for(Di=0;Di<t;Di++)$t[Di]&&$t[Di].update(0,r);Kt.isUpdating=!1}Cc=0},F0=[_M,xM,Kg,$g,Lr+dc,Lr+uc,Lr+fc,Lr+cc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ud=F0.concat([ya,Sa,"boxSizing","max"+Yl,"max"+Zg,"position",Lr,Wn,Wn+fc,Wn+uc,Wn+dc,Wn+cc]),KA=function(e,t,n){Ol(n);var r=e._gsap;if(r.spacerIsNative)Ol(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},_m=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=F0.length,l=t.style,c=e.style,f;a--;)f=F0[a],l[f]=n[f];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),c[Kg]=c[$g]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[ya]=jd(e,Ii)+Kn,l[Sa]=jd(e,Zn)+Kn,l[Wn]=c[Lr]=c[xM]=c[_M]="0",Ol(r),c[ya]=c["max"+Yl]=n[ya],c[Sa]=c["max"+Zg]=n[Sa],c[Wn]=n[Wn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ZA=/([A-Z])/g,Ol=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,l;for((e.t._gsap||wt.core.getCache(e.t)).uncache=1;r<n;r+=2)l=e[r+1],a=e[r],l?t[a]=l:t[a]&&t.removeProperty(a.replace(ZA,"-$1").toLowerCase())}},Qf=function(e){for(var t=Ud.length,n=e.style,r=[],a=0;a<t;a++)r.push(Ud[a],n[Ud[a]]);return r.t=e,r},JA=function(e,t,n){for(var r=[],a=e.length,l=n?8:0,c;l<a;l+=2)c=e[l],r.push(c,c in t?t[c]:e[l+1]);return r.t=e.t,r},Od={left:0,top:0},Ey=function(e,t,n,r,a,l,c,f,h,p,_,m,g,S){Mi(e)&&(e=e(f)),lr(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?Nd("0"+e.substr(3),n):0));var E=g?g.time():0,x,y,C;if(g&&g.seek(0),isNaN(e)||(e=+e),Zu(e))g&&(e=wt.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,m,e)),c&&Id(c,n,r,!0);else{Mi(t)&&(t=t(f));var O=(e||"0").split(" "),A,b,R,N;C=Gi(t,f)||hn,A=zs(C)||{},(!A||!A.left&&!A.top)&&Dr(C).display==="none"&&(N=C.style.display,C.style.display="block",A=zs(C),N?C.style.display=N:C.style.removeProperty("display")),b=Nd(O[0],A[r.d]),R=Nd(O[1]||"0",n),e=A[r.p]-h[r.p]-p+b+a-R,c&&Id(c,R,r,n-R<20||c._isStart&&R>20),n-=n-R}if(S&&(f[S]=e||-.001,e<0&&(e=0)),l){var T=e+n,L=l._isStart;x="scroll"+r.d2,Id(l,T,r,L&&T>20||!L&&(_?Math.max(hn[x],cr[x]):l.parentNode[x])<=T+1),_&&(h=zs(c),_&&(l.style[r.op.p]=h[r.op.p]-r.op.m-l._offset+Kn))}return g&&C&&(x=zs(C),g.seek(m),y=zs(C),g._caScrollDist=x[r.p]-y[r.p],e=e/g._caScrollDist*m),g&&g.seek(E),g?e:Math.round(e)},QA=/(webkit|moz|length|cssText|inset)/i,wy=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,l,c;if(t===hn){e._stOrig=a.cssText,c=Dr(e);for(l in c)!+l&&!QA.test(l)&&c[l]&&typeof a[l]=="string"&&l!=="0"&&(a[l]=c[l]);a.top=n,a.left=r}else a.cssText=e._stOrig;wt.core.getCache(e).uncache=1,t.appendChild(e)}},AM=function(e,t,n){var r=t,a=r;return function(l){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(l=c,n&&n()),a=r,r=Math.round(l),r}},jf=function(e,t,n){var r={};r[t.p]="+="+n,wt.set(e,r)},Ty=function(e,t){var n=zo(e,t),r="_scroll"+t.p2,a=function l(c,f,h,p,_){var m=l.tween,g=f.onComplete,S={};h=h||n();var E=AM(n,h,function(){m.kill(),l.tween=0});return _=p&&_||0,p=p||c-h,m&&m.kill(),f[r]=c,f.inherit=!1,f.modifiers=S,S[r]=function(){return E(h+p*m.ratio+_*m.ratio*m.ratio)},f.onUpdate=function(){Qt.cache++,l.tween&&Xs()},f.onComplete=function(){l.tween=0,g&&g.call(m)},m=l.tween=wt.to(e,f),m};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},ri(e,"wheel",n.wheelHandler),Kt.isTouch&&ri(e,"touchmove",n.wheelHandler),a},Kt=(function(){function s(t,n){Ml||s.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),L0(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$u){this.update=this.refresh=this.kill=cs;return}n=_y(lr(n)||Zu(n)||n.nodeType?{trigger:n}:n,Zf);var a=n,l=a.onUpdate,c=a.toggleClass,f=a.id,h=a.onToggle,p=a.onRefresh,_=a.scrub,m=a.trigger,g=a.pin,S=a.pinSpacing,E=a.invalidateOnRefresh,x=a.anticipatePin,y=a.onScrubComplete,C=a.onSnapComplete,O=a.once,A=a.snap,b=a.pinReparent,R=a.pinSpacer,N=a.containerAnimation,T=a.fastScrollEnd,L=a.preventOverlaps,B=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ii:Zn,Z=!_&&_!==0,G=Gi(n.scroller||Jt),ie=wt.core.getCache(G),X=Ea(G),j=("pinType"in n?n.pinType:Uo(G,"pinType")||X&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=Z&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Zf.markers,Y=X?0:parseFloat(Dr(G)["border"+B.p2+Yl])||0,I=this,U=n.onRefreshInit&&function(){return n.onRefreshInit(I)},k=HA(G,X,B),ve=GA(G,X),De=0,se=0,ke=0,ee=zo(G,B),te,Pe,Oe,ze,qe,st,Ke,$e,be,fe,Et,Ze,it,Qe,vt,q,We,Le,F,w,$,W,de,Ne,Fe,Ee,we,Xe,Je,Se,xe,me,Re,Ge,K,Ue,ge,Ve,ye;if(I._startClamp=I._endClamp=!1,I._dir=B,x*=45,I.scroller=G,I.scroll=N?N.time.bind(N):ee,ze=ee(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(cM=1,n.refreshPriority===-9999&&(hc=I)),ie.tweenScroll=ie.tweenScroll||{top:Ty(G,Zn),left:Ty(G,Ii)},I.tweenTo=te=ie.tweenScroll[B.p],I.scrubDuration=function(_e){Re=Zu(_e)&&_e,Re?me?me.duration(_e):me=wt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Re,paused:!0,onComplete:function(){return y&&y(I)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(_),Se=0,f||(f=r.vars.id)),A&&((!ca(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in hn.style&&wt.set(X?[hn,cr]:G,{scrollBehavior:"auto"}),Qt.forEach(function(_e){return Mi(_e)&&_e.target===(X?mn.scrollingElement||cr:G)&&(_e.smooth=!1)}),Oe=Mi(A.snapTo)?A.snapTo:A.snapTo==="labels"?XA(r):A.snapTo==="labelsDirectional"?YA(r):A.directional!==!1?function(_e,ae){return Jg(A.snapTo)(_e,yi()-se<500?0:ae.direction)}:wt.utils.snap(A.snapTo),Ge=A.duration||{min:.1,max:2},Ge=ca(Ge)?ac(Ge.min,Ge.max):ac(Ge,Ge),K=wt.delayedCall(A.delay||Re/2||.1,function(){var _e=ee(),ae=yi()-se<500,Te=te.tween;if((ae||Math.abs(I.getVelocity())<10)&&!Te&&!yh&&De!==_e){var Ye=(_e-st)/Qe,lt=r&&!Z?r.totalProgress():Ye,dt=ae?0:(lt-xe)/(yi()-qu)*1e3||0,At=wt.utils.clamp(-Ye,1-Ye,nl(dt/2)*dt/.185),Vt=Ye+(A.inertia===!1?0:At),Rt,Pt,St=A,Wt=St.onStart,Ht=St.onInterrupt,et=St.onComplete;if(Rt=Oe(Vt,I),Zu(Rt)||(Rt=Vt),Pt=Math.max(0,Math.round(st+Rt*Qe)),_e<=Ke&&_e>=st&&Pt!==_e){if(Te&&!Te._initted&&Te.data<=nl(Pt-_e))return;A.inertia===!1&&(At=Rt-Ye),te(Pt,{duration:Ge(nl(Math.max(nl(Vt-lt),nl(Rt-lt))*.185/dt/.05||0)),ease:A.ease||"power3",data:nl(Pt-_e),onInterrupt:function(){return K.restart(!0)&&Ht&&tl(I,Ht)},onComplete:function(){I.update(),De=ee(),r&&!Z&&(me?me.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),Se=xe=r&&!Z?r.totalProgress():I.progress,C&&C(I),et&&tl(I,et)}},_e,At*Qe,Pt-_e-At*Qe),Wt&&tl(I,Wt,te.tween)}}else I.isActive&&De!==_e&&K.restart(!0)}).pause()),f&&(N0[f]=I),m=I.trigger=Gi(m||g!==!0&&g),ye=m&&m._gsap&&m._gsap.stRevert,ye&&(ye=ye(I)),g=g===!0?m:Gi(g),lr(c)&&(c={targets:m,className:c}),g&&(S===!1||S===Lr||(S=!S&&g.parentNode&&g.parentNode.style&&Dr(g.parentNode).display==="flex"?!1:Wn),I.pin=g,Pe=wt.core.getCache(g),Pe.spacer?vt=Pe.pinState:(R&&(R=Gi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Pe.spacerIsNative=!!R,R&&(Pe.spacerState=Qf(R))),Pe.spacer=Le=R||mn.createElement("div"),Le.classList.add("pin-spacer"),f&&Le.classList.add("pin-spacer-"+f),Pe.pinState=vt=Qf(g)),n.force3D!==!1&&wt.set(g,{force3D:!0}),I.spacer=Le=Pe.spacer,Je=Dr(g),Ne=Je[S+B.os2],w=wt.getProperty(g),$=wt.quickSetter(g,B.a,Kn),_m(g,Le,Je),We=Qf(g)),Q){Ze=ca(Q)?_y(Q,xy):xy,fe=Jf("scroller-start",f,G,B,Ze,0),Et=Jf("scroller-end",f,G,B,Ze,0,fe),F=fe["offset"+B.op.d2];var H=Gi(Uo(G,"content")||G);$e=this.markerStart=Jf("start",f,H,B,Ze,F,0,N),be=this.markerEnd=Jf("end",f,H,B,Ze,F,0,N),N&&(Ve=wt.quickSetter([$e,be],B.a,Kn)),!j&&!(vs.length&&Uo(G,"fixedMarkers")===!0)&&(WA(X?hn:G),wt.set([fe,Et],{force3D:!0}),Ee=wt.quickSetter(fe,B.a,Kn),Xe=wt.quickSetter(Et,B.a,Kn))}if(N){var oe=N.vars.onUpdate,ne=N.vars.onUpdateParams;N.eventCallback("onUpdate",function(){I.update(0,0,1),oe&&oe.apply(N,ne||[])})}if(I.previous=function(){return $t[$t.indexOf(I)-1]},I.next=function(){return $t[$t.indexOf(I)+1]},I.revert=function(_e,ae){if(!ae)return I.kill(!0);var Te=_e!==!1||!I.enabled,Ye=xi;Te!==I.isReverted&&(Te&&(Ue=Math.max(ee(),I.scroll.rec||0),ke=I.progress,ge=r&&r.progress()),$e&&[$e,be,fe,Et].forEach(function(lt){return lt.style.display=Te?"none":"block"}),Te&&(xi=I,I.update(Te)),g&&(!b||!I.isActive)&&(Te?KA(g,Le,vt):_m(g,Le,Dr(g),Fe)),Te||I.update(Te),xi=Ye,I.isReverted=Te)},I.refresh=function(_e,ae,Te,Ye){if(!((xi||!I.enabled)&&!ae)){if(g&&_e&&Ur){ri(s,"scrollEnd",SM);return}!Ni&&U&&U(I),xi=I,te.tween&&!Te&&(te.tween.kill(),te.tween=0),me&&me.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(at){return at.vars.immediateRender&&at.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var lt=k(),dt=ve(),At=N?N.duration():ps(G,B),Vt=Qe<=.01||!Qe,Rt=0,Pt=Ye||0,St=ca(Te)?Te.end:n.end,Wt=n.endTrigger||m,Ht=ca(Te)?Te.start:n.start||(n.start===0||!m?0:g?"0 0":"0 100%"),et=I.pinnedContainer=n.pinnedContainer&&Gi(n.pinnedContainer,I),He=m&&Math.max(0,$t.indexOf(I))||0,pt=He,Lt,It,jt,Rn,Ft,tn,dn,vn,P,re,Me,ue,le;for(Q&&ca(Te)&&(ue=wt.getProperty(fe,B.p),le=wt.getProperty(Et,B.p));pt-- >0;)tn=$t[pt],tn.end||tn.refresh(0,1)||(xi=I),dn=tn.pin,dn&&(dn===m||dn===g||dn===et)&&!tn.isReverted&&(re||(re=[]),re.unshift(tn),tn.revert(!0,!0)),tn!==$t[pt]&&(He--,pt--);for(Mi(Ht)&&(Ht=Ht(I)),Ht=py(Ht,"start",I),st=Ey(Ht,m,lt,B,ee(),$e,fe,I,dt,Y,j,At,N,I._startClamp&&"_startClamp")||(g?-.001:0),Mi(St)&&(St=St(I)),lr(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(lr(Ht)?Ht.split(" ")[0]:"")+St:(Rt=Nd(St.substr(2),lt),St=lr(Ht)?Ht:(N?wt.utils.mapRange(0,N.duration(),N.scrollTrigger.start,N.scrollTrigger.end,st):st)+Rt,Wt=m)),St=py(St,"end",I),Ke=Math.max(st,Ey(St||(Wt?"100% 0":At),Wt,lt,B,ee()+Rt,be,Et,I,dt,Y,j,At,N,I._endClamp&&"_endClamp"))||-.001,Rt=0,pt=He;pt--;)tn=$t[pt]||{},dn=tn.pin,dn&&tn.start-tn._pinPush<=st&&!N&&tn.end>0&&(Lt=tn.end-(I._startClamp?Math.max(0,tn.start):tn.start),(dn===m&&tn.start-tn._pinPush<st||dn===et)&&isNaN(Ht)&&(Rt+=Lt*(1-tn.progress)),dn===g&&(Pt+=Lt));if(st+=Rt,Ke+=Rt,I._startClamp&&(I._startClamp+=Rt),I._endClamp&&!Ni&&(I._endClamp=Ke||-.001,Ke=Math.min(Ke,ps(G,B))),Qe=Ke-st||(st-=.01)&&.001,Vt&&(ke=wt.utils.clamp(0,1,wt.utils.normalize(st,Ke,Ue))),I._pinPush=Pt,$e&&Rt&&(Lt={},Lt[B.a]="+="+Rt,et&&(Lt[B.p]="-="+ee()),wt.set([$e,be],Lt)),g&&!(D0&&I.end>=ps(G,B)))Lt=Dr(g),Rn=B===Zn,jt=ee(),W=parseFloat(w(B.a))+Pt,!At&&Ke>1&&(Me=(X?mn.scrollingElement||cr:G).style,Me={style:Me,value:Me["overflow"+B.a.toUpperCase()]},X&&Dr(hn)["overflow"+B.a.toUpperCase()]!=="scroll"&&(Me.style["overflow"+B.a.toUpperCase()]="scroll")),_m(g,Le,Lt),We=Qf(g),It=zs(g,!0),vn=j&&zo(G,Rn?Ii:Zn)(),S?(Fe=[S+B.os2,Qe+Pt+Kn],Fe.t=Le,pt=S===Wn?jd(g,B)+Qe+Pt:0,pt&&(Fe.push(B.d,pt+Kn),Le.style.flexBasis!=="auto"&&(Le.style.flexBasis=pt+Kn)),Ol(Fe),et&&$t.forEach(function(at){at.pin===et&&at.vars.pinSpacing!==!1&&(at._subPinOffset=!0)}),j&&ee(Ue)):(pt=jd(g,B),pt&&Le.style.flexBasis!=="auto"&&(Le.style.flexBasis=pt+Kn)),j&&(Ft={top:It.top+(Rn?jt-st:vn)+Kn,left:It.left+(Rn?vn:jt-st)+Kn,boxSizing:"border-box",position:"fixed"},Ft[ya]=Ft["max"+Yl]=Math.ceil(It.width)+Kn,Ft[Sa]=Ft["max"+Zg]=Math.ceil(It.height)+Kn,Ft[Lr]=Ft[Lr+fc]=Ft[Lr+uc]=Ft[Lr+dc]=Ft[Lr+cc]="0",Ft[Wn]=Lt[Wn],Ft[Wn+fc]=Lt[Wn+fc],Ft[Wn+uc]=Lt[Wn+uc],Ft[Wn+dc]=Lt[Wn+dc],Ft[Wn+cc]=Lt[Wn+cc],q=JA(vt,Ft,b),Ni&&ee(0)),r?(P=r._initted,pm(1),r.render(r.duration(),!0,!0),de=w(B.a)-W+Qe+Pt,we=Math.abs(Qe-de)>1,j&&we&&q.splice(q.length-2,2),r.render(0,!0,!0),P||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),pm(0)):de=Qe,Me&&(Me.value?Me.style["overflow"+B.a.toUpperCase()]=Me.value:Me.style.removeProperty("overflow-"+B.a));else if(m&&ee()&&!N)for(It=m.parentNode;It&&It!==hn;)It._pinOffset&&(st-=It._pinOffset,Ke-=It._pinOffset),It=It.parentNode;re&&re.forEach(function(at){return at.revert(!1,!0)}),I.start=st,I.end=Ke,ze=qe=Ni?Ue:ee(),!N&&!Ni&&(ze<Ue&&ee(Ue),I.scroll.rec=0),I.revert(!1,!0),se=yi(),K&&(De=-1,K.restart(!0)),xi=0,r&&Z&&(r._initted||ge)&&r.progress()!==ge&&r.progress(ge||0,!0).render(r.time(),!0,!0),(Vt||ke!==I.progress||N||E||r&&!r._initted)&&(r&&!Z&&(r._initted||ke||r.vars.immediateRender!==!1)&&r.totalProgress(N&&st<-.001&&!ke?wt.utils.normalize(st,Ke,0):ke,!0),I.progress=Vt||(ze-st)/Qe===ke?0:ke),g&&S&&(Le._pinOffset=Math.round(I.progress*de)),me&&me.invalidate(),isNaN(ue)||(ue-=wt.getProperty(fe,B.p),le-=wt.getProperty(Et,B.p),jf(fe,B,ue),jf($e,B,ue-(Ye||0)),jf(Et,B,le),jf(be,B,le-(Ye||0))),Vt&&!Ni&&I.update(),p&&!Ni&&!it&&(it=!0,p(I),it=!1)}},I.getVelocity=function(){return(ee()-qe)/(yi()-qu)*1e3||0},I.endAnimation=function(){Nu(I.callbackAnimation),r&&(me?me.progress(1):r.paused()?Z||Nu(r,I.direction<0,1):Nu(r,r.reversed()))},I.labelToScroll=function(_e){return r&&r.labels&&(st||I.refresh()||st)+r.labels[_e]/r.duration()*Qe||0},I.getTrailing=function(_e){var ae=$t.indexOf(I),Te=I.direction>0?$t.slice(0,ae).reverse():$t.slice(ae+1);return(lr(_e)?Te.filter(function(Ye){return Ye.vars.preventOverlaps===_e}):Te).filter(function(Ye){return I.direction>0?Ye.end<=st:Ye.start>=Ke})},I.update=function(_e,ae,Te){if(!(N&&!Te&&!_e)){var Ye=Ni===!0?Ue:I.scroll(),lt=_e?0:(Ye-st)/Qe,dt=lt<0?0:lt>1?1:lt||0,At=I.progress,Vt,Rt,Pt,St,Wt,Ht,et,He;if(ae&&(qe=ze,ze=N?ee():Ye,A&&(xe=Se,Se=r&&!Z?r.totalProgress():dt)),x&&g&&!xi&&!Yf&&Ur&&(!dt&&st<Ye+(Ye-qe)/(yi()-qu)*x?dt=1e-4:dt===1&&Ke>Ye+(Ye-qe)/(yi()-qu)*x&&(dt=.9999)),dt!==At&&I.enabled){if(Vt=I.isActive=!!dt&&dt<1,Rt=!!At&&At<1,Ht=Vt!==Rt,Wt=Ht||!!dt!=!!At,I.direction=dt>At?1:-1,I.progress=dt,Wt&&!xi&&(Pt=dt&&!At?0:dt===1?1:At===1?2:3,Z&&(St=!Ht&&V[Pt+1]!=="none"&&V[Pt+1]||V[Pt],He=r&&(St==="complete"||St==="reset"||St in r))),L&&(Ht||He)&&(He||_||!r)&&(Mi(L)?L(I):I.getTrailing(L).forEach(function(jt){return jt.endAnimation()})),Z||(me&&!xi&&!Yf?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",dt,r._tTime/r._tDur):(me.vars.totalProgress=dt,me.invalidate().restart())):r&&r.totalProgress(dt,!!(xi&&(se||_e)))),g){if(_e&&S&&(Le.style[S+B.os2]=Ne),!j)$(Ku(W+de*dt));else if(Wt){if(et=!_e&&dt>At&&Ke+1>Ye&&Ye+1>=ps(G,B),b)if(!_e&&(Vt||et)){var pt=zs(g,!0),Lt=Ye-st;wy(g,hn,pt.top+(B===Zn?Lt:0)+Kn,pt.left+(B===Zn?0:Lt)+Kn)}else wy(g,Le);Ol(Vt||et?q:We),we&&dt<1&&Vt||$(W+(dt===1&&!et?de:0))}}A&&!te.tween&&!xi&&!Yf&&K.restart(!0),c&&(Ht||O&&dt&&(dt<1||!mm))&&Rc(c.targets).forEach(function(jt){return jt.classList[Vt||O?"add":"remove"](c.className)}),l&&!Z&&!_e&&l(I),Wt&&!xi?(Z&&(He&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),l&&l(I)),(Ht||!mm)&&(h&&Ht&&tl(I,h),z[Pt]&&tl(I,z[Pt]),O&&(dt===1?I.kill(!1,1):z[Pt]=0),Ht||(Pt=dt===1?1:3,z[Pt]&&tl(I,z[Pt]))),T&&!Vt&&Math.abs(I.getVelocity())>(Zu(T)?T:2500)&&(Nu(I.callbackAnimation),me?me.progress(1):Nu(r,St==="reverse"?1:!dt,1))):Z&&l&&!xi&&l(I)}if(Xe){var It=N?Ye/N.duration()*(N._caScrollDist||0):Ye;Ee(It+(fe._isFlipped?1:0)),Xe(It)}Ve&&Ve(-Ye/N.duration()*(N._caScrollDist||0))}},I.enable=function(_e,ae){I.enabled||(I.enabled=!0,ri(G,"resize",Ju),X||ri(G,"scroll",il),U&&ri(s,"refreshInit",U),_e!==!1&&(I.progress=ke=0,ze=qe=De=ee()),ae!==!1&&I.refresh())},I.getTween=function(_e){return _e&&te?te.tween:me},I.setPositions=function(_e,ae,Te,Ye){if(N){var lt=N.scrollTrigger,dt=N.duration(),At=lt.end-lt.start;_e=lt.start+At*_e/dt,ae=lt.start+At*ae/dt}I.refresh(!1,!1,{start:my(_e,Te&&!!I._startClamp),end:my(ae,Te&&!!I._endClamp)},Ye),I.update()},I.adjustPinSpacing=function(_e){if(Fe&&_e){var ae=Fe.indexOf(B.d)+1;Fe[ae]=parseFloat(Fe[ae])+_e+Kn,Fe[1]=parseFloat(Fe[1])+_e+Kn,Ol(Fe)}},I.disable=function(_e,ae){if(_e!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,ae||me&&me.pause(),Ue=0,Pe&&(Pe.uncache=1),U&&ii(s,"refreshInit",U),K&&(K.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!X)){for(var Te=$t.length;Te--;)if($t[Te].scroller===G&&$t[Te]!==I)return;ii(G,"resize",Ju),X||ii(G,"scroll",il)}},I.kill=function(_e,ae){I.disable(_e,ae),me&&!ae&&me.kill(),f&&delete N0[f];var Te=$t.indexOf(I);Te>=0&&$t.splice(Te,1),Te===Di&&Fd>0&&Di--,Te=0,$t.forEach(function(Ye){return Ye.scroller===I.scroller&&(Te=1)}),Te||Ni||(I.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),ae||r.kill()),$e&&[$e,be,fe,Et].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),hc===I&&(hc=0),g&&(Pe&&(Pe.uncache=1),Te=0,$t.forEach(function(Ye){return Ye.pin===g&&Te++}),Te||(Pe.spacer=0)),n.onKill&&n.onKill(I)},$t.push(I),I.enable(!1,!1),ye&&ye(I),r&&r.add&&!Qe){var Be=I.update;I.update=function(){I.update=Be,Qt.cache++,st||Ke||I.refresh()},wt.delayedCall(.01,I.update),Qe=.01,st=Ke=0}else I.refresh();g&&$A()},s.register=function(n){return Ml||(wt=n||mM(),pM()&&window.document&&s.enable(),Ml=$u),Ml},s.defaults=function(n){if(n)for(var r in n)Zf[r]=n[r];return Zf},s.disable=function(n,r){$u=0,$t.forEach(function(l){return l[r?"kill":"disable"](n)}),ii(Jt,"wheel",il),ii(mn,"scroll",il),clearInterval(Xf),ii(mn,"touchcancel",cs),ii(hn,"touchstart",cs),$f(ii,mn,"pointerdown,touchstart,mousedown",gy),$f(ii,mn,"pointerup,touchend,mouseup",vy),Qd.kill(),qf(ii);for(var a=0;a<Qt.length;a+=3)Kf(ii,Qt[a],Qt[a+1]),Kf(ii,Qt[a],Qt[a+2])},s.enable=function(){if(Jt=window,mn=document,cr=mn.documentElement,hn=mn.body,wt){if(Rc=wt.utils.toArray,ac=wt.utils.clamp,L0=wt.core.context||cs,pm=wt.core.suppressOverwrites||cs,Yg=Jt.history.scrollRestoration||"auto",I0=Jt.pageYOffset||0,wt.core.globals("ScrollTrigger",s),hn){$u=1,Ul=document.createElement("div"),Ul.style.height="100vh",Ul.style.position="absolute",TM(),VA(),Vn.register(wt),s.isTouch=Vn.isTouch,To=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),P0=Vn.isTouch===1,ri(Jt,"wheel",il),Xg=[Jt,mn,cr,hn],wt.matchMedia?(s.matchMedia=function(p){var _=wt.matchMedia(),m;for(m in p)_.add(m,p[m]);return _},wt.addEventListener("matchMediaInit",function(){EM(),Qg()}),wt.addEventListener("matchMediaRevert",function(){return MM()}),wt.addEventListener("matchMedia",function(){da(0,1),Ta("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return vm(),vm})):console.warn("Requires GSAP 3.11.0 or later"),vm(),ri(mn,"scroll",il);var n=hn.hasAttribute("style"),r=hn.style,a=r.borderTopStyle,l=wt.core.Animation.prototype,c,f;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=zs(hn),Zn.m=Math.round(c.top+Zn.sc())||0,Ii.m=Math.round(c.left+Ii.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(hn.setAttribute("style",""),hn.removeAttribute("style")),Xf=setInterval(yy,250),wt.delayedCall(.5,function(){return Yf=0}),ri(mn,"touchcancel",cs),ri(hn,"touchstart",cs),$f(ri,mn,"pointerdown,touchstart,mousedown",gy),$f(ri,mn,"pointerup,touchend,mouseup",vy),C0=wt.utils.checkPrefix("transform"),Ud.push(C0),Ml=yi(),Qd=wt.delayedCall(.2,da).pause(),El=[mn,"visibilitychange",function(){var p=Jt.innerWidth,_=Jt.innerHeight;mn.hidden?(dy=p,hy=_):(dy!==p||hy!==_)&&Ju()},mn,"DOMContentLoaded",da,Jt,"load",da,Jt,"resize",Ju],qf(ri),$t.forEach(function(p){return p.enable(0,1)}),f=0;f<Qt.length;f+=3)Kf(ii,Qt[f],Qt[f+1]),Kf(ii,Qt[f],Qt[f+2])}else if(mn){var h=function p(){s.enable(),mn.removeEventListener("DOMContentLoaded",p)};mn.addEventListener("DOMContentLoaded",h)}}},s.config=function(n){"limitCallbacks"in n&&(mm=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Xf)||(Xf=r)&&setInterval(yy,r),"ignoreMobileResize"in n&&(P0=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qf(ii)||qf(ri,n.autoRefreshEvents||"none"),fM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,r){var a=Gi(n),l=Qt.indexOf(a),c=Ea(a);~l&&Qt.splice(l,c?6:2),r&&(c?vs.unshift(Jt,r,hn,r,cr,r):vs.unshift(a,r))},s.clearMatchMedia=function(n){$t.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},s.isInViewport=function(n,r,a){var l=(lr(n)?Gi(n):n).getBoundingClientRect(),c=l[a?ya:Sa]*r||0;return a?l.right-c>0&&l.left+c<Jt.innerWidth:l.bottom-c>0&&l.top+c<Jt.innerHeight},s.positionInViewport=function(n,r,a){lr(n)&&(n=Gi(n));var l=n.getBoundingClientRect(),c=l[a?ya:Sa],f=r==null?c/2:r in eh?eh[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(l.left+f)/Jt.innerWidth:(l.top+f)/Jt.innerHeight},s.killAll=function(n){if($t.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=wa.killAll||[];wa={},r.forEach(function(a){return a()})}},s})();Kt.version="3.15.0";Kt.saveStyles=function(s){return s?Rc(s).forEach(function(e){if(e&&e.style){var t=ar.indexOf(e);t>=0&&ar.splice(t,5),ar.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),wt.core.getCache(e),L0())}}):ar};Kt.revert=function(s,e){return Qg(!s,e)};Kt.create=function(s,e){return new Kt(s,e)};Kt.refresh=function(s){return s?Ju(!0):(Ml||Kt.register())&&da(!0)};Kt.update=function(s){return++Qt.cache&&Xs(s===!0?2:0)};Kt.clearScrollMemory=wM;Kt.maxScroll=function(s,e){return ps(s,e?Ii:Zn)};Kt.getScrollFunc=function(s,e){return zo(Gi(s),e?Ii:Zn)};Kt.getById=function(s){return N0[s]};Kt.getAll=function(){return $t.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!Ur};Kt.snapDirectional=Jg;Kt.addEventListener=function(s,e){var t=wa[s]||(wa[s]=[]);~t.indexOf(e)||t.push(e)};Kt.removeEventListener=function(s,e){var t=wa[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Kt.batch=function(s,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,l=function(h,p){var _=[],m=[],g=wt.delayedCall(r,function(){p(_,m),_=[],m=[]}).pause();return function(S){_.length||g.restart(!0),_.push(S.trigger),m.push(S),a<=_.length&&g.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&Mi(e[c])&&c!=="onRefreshInit"?l(c,e[c]):e[c];return Mi(a)&&(a=a(),ri(Kt,"refresh",function(){return a=e.batchMax()})),Rc(s).forEach(function(f){var h={};for(c in n)h[c]=n[c];h.trigger=f,t.push(Kt.create(h))}),t};var Ay=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},xm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vn.isTouch?" pinch-zoom":""):"none",e===cr&&s(hn,t)},ed={auto:1,scroll:1},jA=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,l=a._gsap||wt.core.getCache(a),c=yi(),f;if(!l._isScrollT||c-l._isScrollT>2e3){for(;a&&a!==hn&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(ed[(f=Dr(a)).overflowY]||ed[f.overflowX]));)a=a.parentNode;l._isScroll=a&&a!==n&&!Ea(a)&&(ed[(f=Dr(a)).overflowY]||ed[f.overflowX]),l._isScrollT=c}(l._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},bM=function(e,t,n,r){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&jA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ri(mn,Vn.eventTypes[0],Ry,!1,!0)},onDisable:function(){return ii(mn,Vn.eventTypes[0],Ry,!0)}})},eb=/(input|label|select|textarea)/i,by,Ry=function(e){var t=eb.test(e.target.tagName);(t||by)&&(e._gsapAllow=!0,by=t)},tb=function(e){ca(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,l=t.onRelease,c,f,h=Gi(e.target)||cr,p=wt.core.globals().ScrollSmoother,_=p&&p.get(),m=To&&(e.content&&Gi(e.content)||_&&e.content!==!1&&!_.smooth()&&_.content()),g=zo(h,Zn),S=zo(h,Ii),E=1,x=(Vn.isTouch&&Jt.visualViewport?Jt.visualViewport.scale*Jt.visualViewport.width:Jt.outerWidth)/Jt.innerWidth,y=0,C=Mi(r)?function(){return r(c)}:function(){return r||2.8},O,A,b=bM(h,e.type,!0,a),R=function(){return A=!1},N=cs,T=cs,L=function(){f=ps(h,Zn),T=ac(To?1:0,f),n&&(N=ac(0,ps(h,Ii))),O=Ma},B=function(){m._gsap.y=Ku(parseFloat(m._gsap.y)+g.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},Z=function(){if(A){requestAnimationFrame(R);var Q=Ku(c.deltaY/2),Y=T(g.v-Q);if(m&&Y!==g.v+g.offset){g.offset=Y-g.v;var I=Ku((parseFloat(m&&m._gsap.y)||0)-g.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",m._gsap.y=I+"px",g.cacheID=Qt.cache,Xs()}return!0}g.offset&&B(),A=!0},G,ie,X,j,z=function(){L(),G.isActive()&&G.vars.scrollY>f&&(g()>f?G.progress(1)&&g(f):G.resetTo("scrollY",f))};return m&&wt.set(m,{y:"+=0"}),e.ignoreCheck=function(V){return To&&V.type==="touchmove"&&Z()||E>1.05&&V.type!=="touchstart"||c.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){A=!1;var V=E;E=Ku((Jt.visualViewport&&Jt.visualViewport.scale||1)/x),G.pause(),V!==E&&xm(h,E>1.01?!0:n?!1:"x"),ie=S(),X=g(),L(),O=Ma},e.onRelease=e.onGestureStart=function(V,Q){if(g.offset&&B(),!Q)j.restart(!0);else{Qt.cache++;var Y=C(),I,U;n&&(I=S(),U=I+Y*.05*-V.velocityX/.227,Y*=Ay(S,I,U,ps(h,Ii)),G.vars.scrollX=N(U)),I=g(),U=I+Y*.05*-V.velocityY/.227,Y*=Ay(g,I,U,ps(h,Zn)),G.vars.scrollY=T(U),G.invalidate().duration(Y).play(.01),(To&&G.vars.scrollY>=f||I>=f-1)&&wt.to({},{onUpdate:z,duration:Y})}l&&l(V)},e.onWheel=function(){G._ts&&G.pause(),yi()-y>1e3&&(O=0,y=yi())},e.onChange=function(V,Q,Y,I,U){if(Ma!==O&&L(),Q&&n&&S(N(I[2]===Q?ie+(V.startX-V.x):S()+Q-I[1])),Y){g.offset&&B();var k=U[2]===Y,ve=k?X+V.startY-V.y:g()+Y-U[1],De=T(ve);k&&ve!==De&&(X+=De-ve),g(De)}(Y||Q)&&Xs()},e.onEnable=function(){xm(h,n?!1:"x"),Kt.addEventListener("refresh",z),ri(Jt,"resize",z),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=S.smooth=!1),b.enable()},e.onDisable=function(){xm(h,!0),ii(Jt,"resize",z),Kt.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,c=new Vn(e),c.iOS=To,To&&!g()&&g(1),To&&wt.ticker.add(cs),j=c._dc,G=wt.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:AM(g,g(),function(){return G.pause()})},onUpdate:Xs,onComplete:j.vars.onComplete}),c};Kt.sort=function(s){if(Mi(s))return $t.sort(s);var e=Jt.pageYOffset||0;return Kt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Jt.innerHeight}),$t.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(s){return new Vn(s)};Kt.normalizeScroll=function(s){if(typeof s>"u")return Li;if(s===!0&&Li)return Li.enable();if(s===!1){Li&&Li.kill(),Li=s;return}var e=s instanceof Vn?s:tb(s);return Li&&Li.target===e.target&&Li.kill(),Ea(e.target)&&(Li=e),e};Kt.core={_getVelocityProp:R0,_inputObserver:bM,_scrollers:Qt,_proxies:vs,bridge:{ss:function(){Ur||Ta("scrollStart"),Ur=yi()},ref:function(){return xi}}};mM()&&wt.registerPlugin(Kt);ks.registerPlugin(Kt);const nb=typeof window<"u"?yt.useLayoutEffect:yt.useEffect,ib={up:"linear-gradient(to top, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",down:"linear-gradient(to bottom, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",left:"linear-gradient(to left, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",right:"linear-gradient(to right, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))",center:"radial-gradient(farthest-corner at 50% 50%, #000 calc(var(--ac-wipe) * 140% - 40%), transparent calc(var(--ac-wipe) * 140%))"};function rb({children:s,container:e,target:t,distance:n=100,direction:r="vertical",reverse:a=!1,duration:l=.8,ease:c="power3.out",initialOpacity:f=0,animateOpacity:h=!0,scale:p=1,blur:_=0,rotate:m=0,tilt:g=0,wipe:S="none",threshold:E=.1,delay:x=0,stagger:y=0,staggerFrom:C="start",trigger:O="scroll",once:A=!0,scrub:b=!1,disappearAfter:R=0,disappearDuration:N=.5,disappearEase:T="power3.in",onStart:L,onComplete:B,onDisappearanceComplete:Z,className:G="",style:ie,...X}){const j=yt.useRef(null),z=yt.useRef({onStart:L,onComplete:B,onDisappearanceComplete:Z});return z.current={onStart:L,onComplete:B,onDisappearanceComplete:Z},nb(()=>{const V=t||j.current;if(!V)return;let Q=e||document.getElementById("snap-main-container")||null;typeof Q=="string"&&(Q=document.querySelector(Q));const Y=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,I=ks.context(()=>{const U=y>0&&V.children.length?Array.from(V.children):[V],k=r==="horizontal",ve=k?"x":"y",De=a?-1:1,se=ib[S];if(ks.set(V,{visibility:"visible"}),Y){z.current.onComplete?.();return}const ke={[ve]:n*De,scale:p,opacity:h?f:1},ee={[ve]:0,scale:1,opacity:1,duration:l,ease:c};if(_>0&&(ke.filter=`blur(${_}px)`,ee.filter="blur(0px)"),m&&(ke.rotation=m*De,ee.rotation=0),g){const qe=k?"rotationY":"rotationX";ke[qe]=k?-g*De:g*De,ee[qe]=0,ke.transformPerspective=900,ee.transformPerspective=900}se&&(ks.set(U,{maskImage:se,webkitMaskImage:se}),ke["--ac-wipe"]=0,ee["--ac-wipe"]=1),y>0&&(ee.stagger={each:y,from:C});const te=()=>{b||ks.set(U,{clearProps:se?"filter,transform,maskImage,webkitMaskImage":"filter,transform"})},Pe=()=>{if(R<=0)return;const qe={[ve]:-n*De,scale:.8,opacity:h?f:0,delay:R,duration:N,ease:T,onComplete:()=>z.current.onDisappearanceComplete?.()};_>0&&(qe.filter=`blur(${_}px)`),y>0&&(qe.stagger={each:y,from:C}),ks.to(U,qe)},Oe=ks.timeline({paused:!0,onStart:()=>z.current.onStart?.(),onComplete:()=>{z.current.onComplete?.(),te(),A&&!b&&Pe()}});if(Oe.fromTo(U,ke,ee,b?0:Math.max(x,0)),O==="mount"){Oe.play();return}const ze=`top ${(1-E)*100}%`;if(b){Kt.create({trigger:V,scroller:Q,start:ze,end:`top ${Math.max((1-E)*100-45,5)}%`,scrub:b===!0?!0:Math.max(Number(b)||0,.01),animation:Oe});return}Kt.create({trigger:V,scroller:Q,start:ze,once:A,onEnter:()=>Oe.play(),onLeaveBack:A?void 0:()=>{se&&ks.set(U,{maskImage:se,webkitMaskImage:se}),Oe.reverse()}})},t||j);return()=>I.revert()},[t,e,n,r,a,l,c,f,h,p,_,m,g,S,E,x,y,C,O,A,b,R,N,T]),t?null:nt.jsx("div",{ref:j,className:`animated-content ${G}`.trim(),style:{visibility:"hidden",...ie},...X,children:s})}const Cy=8,td=24,ym=4,Py=1.3,sb=.06,Ly=2.6,ob=1.6,Dy=["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"],ab={linear:0,radial:1},Sm=.2,lb=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ub=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRamp[8];
uniform int uCount;
uniform int uType;
uniform vec2 uDir;
uniform float uExtent;
uniform float uBands;
uniform float uSoftness;
uniform float uFlow;
uniform float uScale;
uniform float uSilk;
uniform vec4 uStir[24];
uniform float uStirWeight[24];
uniform vec4 uTwirl[4];
uniform vec2 uSeed;
uniform float uContrast;
uniform float uSaturation;
uniform float uSettle;
uniform float uReveal;
in vec2 vUv;
out vec4 outColor;

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i), f);
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 drift(vec2 p, float t) {
  vec2 w1 = vec2(
    noise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
    noise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
  );
  vec2 w2 = vec2(
    noise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
    noise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
  );
  return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
}

vec2 warp(vec2 p) {
  vec2 q = p / uScale;
  if (uType == 1) {
    float turn = uTime * 0.35;
    q = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * q;
  } else {
    q += vec2(-uDir.y, uDir.x) * uTime * 0.45;
  }
  return p + drift(q + uSeed, uTime) * uFlow * uScale * uSettle;
}

float coord(vec2 p) {
  vec2 w = warp(p);
  return uType == 1 ? 1.0 - length(w) * 1.1 : dot(w, uDir) / uExtent + 0.5;
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  for (int i = 0; i < 24; i++) {
    float w = uStirWeight[i];
    if (w <= 0.0) continue;
    vec2 d = p - uStir[i].xy;
    p -= uStir[i].zw * w * exp(-dot(d, d) / 0.045);
  }
  for (int i = 0; i < 4; i++) {
    float angle = uTwirl[i].z;
    if (angle == 0.0) continue;
    vec2 d = p - uTwirl[i].xy;
    float a = angle * exp(-dot(d, d) / (uTwirl[i].w * uTwirl[i].w));
    float c = cos(a);
    float s = sin(a);
    p = uTwirl[i].xy + mat2(c, -s, s, c) * d;
  }
  float raw = coord(p);
  float s = raw;
  if (uBands > 1.0) {
    s *= uBands;
    float cycle = floor(s);
    s = fract(s);
    if (mod(cycle, 2.0) > 0.5) s = 1.0 - s;
  }
  s = clamp(s, 0.0, 1.0);
  float scaled = s * float(uCount - 1);
  int index = int(min(floor(scaled), float(uCount - 2)));
  float f = scaled - float(index);
  float edge = max(uSoftness * 0.5, fwidth(scaled) * 0.75);
  float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
  vec3 from = uRamp[0];
  vec3 to = uRamp[1];
  for (int i = 0; i < 7; i++) {
    if (i == index) {
      from = uRamp[i];
      to = uRamp[i + 1];
    }
  }
  vec3 lab = mix(from, to, shaped);
  if (uSilk > 0.0) {
    vec2 grad = vec2(coord(p + vec2(0.004, 0.0)) - raw, coord(p + vec2(0.0, 0.004)) - raw) / 0.004;
    vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0) * uBands) * uSilk * 4.0;
    vec3 normal = normalize(vec3(-slope, 1.0));
    vec3 light = normalize(vec3(-uDir.y, uDir.x, 1.2));
    float diffuse = dot(normal, light) - light.z;
    lab = uRamp[0] + (lab - uRamp[0]) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6) * uSilk);
  }
  lab = mix(uRamp[0], lab, smoothstep(0.0, 1.0, uReveal * 1.5 - length(vUv - 0.5) * 0.6));
  lab.x = (lab.x - 0.55) * uContrast + 0.55;
  lab.yz *= uSaturation;
  outColor = vec4(encode(labToRgb(lab)), 1.0);
}`,cb=`#version 300 es
precision highp float;
uniform sampler2D uField;
uniform float uGrain;
uniform float uGrainSize;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float clump(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec3 color = texture(uField, vUv).rgb;
  vec2 pixel = gl_FragCoord.xy + uFrame * vec2(17.0, 59.0);
  float fine = hash(pixel) + hash(pixel + 7.13) - 1.0;
  float coarse = (clump(pixel / max(uGrainSize, 1.0)) - 0.5) * 2.0;
  float grain = mix(fine, coarse, clamp(uGrainSize - 1.0, 0.0, 1.0) * 0.8);
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color += grain * uGrain * (0.45 + 2.2 * luma * (1.0 - luma));
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`,Kr=(s,e,t)=>Math.min(t,Math.max(e,s)),Mm=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4,fb=([s,e,t])=>{const n=Mm(s),r=Mm(e),a=Mm(t),l=Math.cbrt(.4122214708*n+.5363325363*r+.0514459929*a),c=Math.cbrt(.2119034982*n+.6806995451*r+.1073969566*a),f=Math.cbrt(.0883024619*n+.2817188376*r+.6299787005*a);return[.2104542553*l+.793617785*c-.0040720468*f,1.9779984951*l-2.428592205*c+.4505937099*f,.0259040371*l+.7827717662*c-.808675766*f]},Ny=(s,e,t)=>{const n=s.createShader(e);return n?(s.shaderSource(n,t),s.compileShader(n),s.getShaderParameter(n,s.COMPILE_STATUS)?n:(s.deleteShader(n),null)):null},Iy=(s,e)=>{const t=Ny(s,s.VERTEX_SHADER,lb),n=Ny(s,s.FRAGMENT_SHADER,e),r=s.createProgram();if(!t||!n||!r)return null;if(s.attachShader(r,t),s.attachShader(r,n),s.linkProgram(r),s.deleteShader(t),s.deleteShader(n),!s.getProgramParameter(r,s.LINK_STATUS))return s.deleteProgram(r),null;const a={},l=s.getProgramParameter(r,s.ACTIVE_UNIFORMS);for(let c=0;c<l;c++){const f=s.getActiveUniform(r,c);if(!f)continue;const h=f.name.replace(/\[0\]$/,"");a[h]=s.getUniformLocation(r,h)}return{program:r,uniforms:a}},db=({colors:s=Dy,type:e="linear",angle:t=55,bands:n=1,speed:r=1,flow:a=.8,scale:l=1,softness:c=1,silk:f=.35,grainAmount:h=.08,grainSize:p=1.2,grainAnimated:_=!0,contrast:m=1,saturation:g=1,variation:S=0,interactive:E=!0,stir:x=1,clickSwirl:y=!0,intro:C=!0,lightMode:O=!1,dpr:A,className:b="",style:R,...N})=>{const T=yt.useRef(null),L=yt.useRef(null),B=yt.useRef(null),Z=(Array.isArray(s)&&s.length?s:Dy).slice(0,Cy),G={colors:Z.length>1?Z:[Z[0],Z[0]],type:ab[e]??0,angle:t,bands:Kr(n,1,8),speed:Math.max(0,r),flow:Kr(a,0,3),scale:Kr(l,.25,3),softness:Kr(c,0,1),silk:Kr(f,0,1),grainAmount:Kr(h,0,.5),grainSize:Kr(p,.5,4),grainAnimated:_,contrast:Kr(m,.2,2),saturation:Kr(g,0,2),variation:Math.max(0,S),interactive:E,stir:Kr(x,0,2),clickSwirl:y,intro:C,lightMode:O,dpr:A},ie=yt.useRef(G);return ie.current=G,yt.useEffect(()=>{const X=T.current,j=L.current,z=j?.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!X||!j||!z)return;const V=Iy(z,ub),Q=Iy(z,cb);if(!V||!Q)return;const Y=V.uniforms,I=Q.uniforms,U=z.createVertexArray(),k=z.createTexture();z.bindTexture(z.TEXTURE_2D,k),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.LINEAR),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.LINEAR),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_S,z.CLAMP_TO_EDGE),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_T,z.CLAMP_TO_EDGE);const ve=z.createFramebuffer(),De={width:0,height:0},se=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ke=new Map,ee=xe=>{const me=String(xe),Re=ke.get(me);if(Re)return Re;let Ge=[0,0,0];if(se){se.clearRect(0,0,1,1),se.fillStyle="#000000",se.fillStyle=me,se.fillRect(0,0,1,1);const[K,Ue,ge]=se.getImageData(0,0,1,1).data;Ge=[K/255,Ue/255,ge/255]}return ke.set(me,Ge),Ge},te=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Pe={width:1,height:1,ratio:1},Oe=new Float32Array(Cy*3),ze=new Float32Array(td*4),qe=new Float32Array(td),st=new Float32Array(ym*4),Ke=[],$e=[],be={x:.5,y:.5,sx:.5,sy:.5,vx:0,inside:!1,fresh:!0};let fe="",Et=0,Ze=ie.current.intro&&!te?0:1,it=0,Qe=0,vt=0,q=0,We=!0;const Le=()=>{const xe=ie.current,me=`${xe.colors.join(",")}|${xe.lightMode}`;if(me===fe)return;fe=me;const Re=xe.colors.map(Ge=>fb(ee(Ge)));if(!xe.lightMode)Re.forEach((Ge,K)=>Oe.set(Ge,K*3));else{const Ge=Re.map(([Ue])=>Math.abs(Ue-Re[0][0])<.1),K=Re.filter((Ue,ge)=>!Ge[ge]).reverse();Re.forEach((Ue,ge)=>{const[Ve,ye,H]=Ge[ge]?[1,0,0]:K.shift();Oe.set([Ve+(1-Ve)*Sm,ye*(1-Sm),H*(1-Sm)],ge*3)})}},F=()=>{const xe=ie.current,me=Pe.width/Pe.height;Le(),z.bindVertexArray(U),z.disable(z.BLEND),z.bindFramebuffer(z.FRAMEBUFFER,ve),z.viewport(0,0,De.width,De.height),z.useProgram(V.program),z.uniform1f(Y.uAspect,me),z.uniform1f(Y.uTime,Et),z.uniform3fv(Y.uRamp,Oe),z.uniform1i(Y.uCount,xe.colors.length);const Re=xe.angle*Math.PI/180;z.uniform1i(Y.uType,xe.type),z.uniform2f(Y.uDir,Math.sin(Re),Math.cos(Re)),z.uniform1f(Y.uExtent,me*Math.abs(Math.sin(Re))+Math.abs(Math.cos(Re))),z.uniform1f(Y.uBands,xe.bands),z.uniform1f(Y.uSoftness,xe.softness),z.uniform1f(Y.uFlow,xe.flow),z.uniform1f(Y.uScale,xe.scale),z.uniform1f(Y.uSilk,xe.silk),z.uniform4fv(Y.uStir,ze),z.uniform1fv(Y.uStirWeight,qe),z.uniform4fv(Y.uTwirl,st),z.uniform2f(Y.uSeed,xe.variation*3.17,xe.variation*1.91),z.uniform1f(Y.uContrast,xe.contrast),z.uniform1f(Y.uSaturation,xe.saturation),z.uniform1f(Y.uSettle,Ze*Ze*(3-2*Ze)),z.uniform1f(Y.uReveal,Ze),z.drawArrays(z.TRIANGLES,0,3),z.bindFramebuffer(z.FRAMEBUFFER,null),z.viewport(0,0,j.width,j.height),z.useProgram(Q.program),z.activeTexture(z.TEXTURE0),z.bindTexture(z.TEXTURE_2D,k),z.uniform1i(I.uField,0),z.uniform1f(I.uGrain,xe.grainAmount),z.uniform1f(I.uGrainSize,xe.grainSize*Pe.ratio),z.uniform1f(I.uFrame,it),z.drawArrays(z.TRIANGLES,0,3)},w=()=>{const xe=ie.current;Pe.width=Math.max(1,X.clientWidth),Pe.height=Math.max(1,X.clientHeight),Pe.ratio=Math.min(xe.dpr||window.devicePixelRatio||1,2),j.width=Math.max(1,Math.round(Pe.width*Pe.ratio)),j.height=Math.max(1,Math.round(Pe.height*Pe.ratio));const me=Math.max(1,Math.round(j.width/2)),Re=Math.max(1,Math.round(j.height/2));(me!==De.width||Re!==De.height)&&(De.width=me,De.height=Re,z.bindTexture(z.TEXTURE_2D,k),z.texImage2D(z.TEXTURE_2D,0,z.RGBA8,me,Re,0,z.RGBA,z.UNSIGNED_BYTE,null),z.bindFramebuffer(z.FRAMEBUFFER,ve),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,k,0),z.bindFramebuffer(z.FRAMEBUFFER,null)),F(),de()},$=(xe,me)=>{const Re=ie.current,Ge=1-Math.exp(-xe/.06),K=be.sx,Ue=be.sy;be.sx+=(be.x-be.sx)*Ge,be.sy+=(be.y-be.sy)*Ge;const ge=(be.sx-K)/xe*me,Ve=(be.sy-Ue)/xe;be.vx=ge;const ye=Ke[0];if(Ke.forEach(H=>{H.done&&(H.age+=xe)}),Re.interactive&&be.inside&&Math.hypot(ge,Ve)>.02&&!te){(!ye||ye.done)&&(Ke.unshift({x:0,y:0,vx:0,vy:0,age:0,grow:0,done:!1}),Ke.length>td&&Ke.pop());const H=Ke[0];H.x=(be.sx-.5)*me,H.y=be.sy-.5,H.vx=ge,H.vy=Ve,H.grow=Math.min(1,H.grow+xe/sb),H.done=H.grow>=1}else ye&&(ye.done=!0);for(;Ke.length&&Ke[Ke.length-1].age>Py;)Ke.pop();for(let H=0;H<td;H++){const oe=Ke[H];if(!oe){qe[H]=0;continue}const ne=1-oe.age/Py,Be=Math.min(1,2.2/Math.max(Math.hypot(oe.vx,oe.vy),.001));ze.set([oe.x,oe.y,oe.vx*Be,oe.vy*Be],H*4),qe[H]=ne*ne*oe.grow*Re.stir*.05}for($e.forEach(H=>{H.age+=xe});$e.length&&$e[$e.length-1].age>Ly;)$e.pop();for(let H=0;H<ym;H++){const oe=$e[H];if(!oe){st[H*4+2]=0;continue}const ne=oe.age/Ly,Be=Math.min(1,oe.age/.18)*(1-ne)*(1-ne);st.set([oe.x,oe.y,oe.direction*2.4*Be,.16+.1*Math.min(1,oe.age/.5)],H*4)}},W=xe=>{if(vt=0,!We||document.hidden)return;const me=ie.current,Re=q?Kr((xe-q)/1e3,.001,.05):1/60;q=xe,te||(Et+=Re*me.speed*.16),Ze<1&&(Ze=Math.min(1,Ze+Re/ob)),Qe+=Re,me.grainAnimated&&!te&&Qe>1/24&&(Qe=0,it=(it+1)%97),$(Re,Pe.width/Pe.height),F(),!te&&(me.speed>0||me.grainAnimated)||Ze<1||Ke.length>0||$e.length>0?vt=requestAnimationFrame(W):q=0};function de(){!vt&&We&&!document.hidden&&(vt=requestAnimationFrame(W))}const Ne=xe=>{const me=X.getBoundingClientRect(),Re=(xe.clientX-me.left)/Math.max(1,me.width),Ge=1-(xe.clientY-me.top)/Math.max(1,me.height);be.inside=Re>=0&&Re<=1&&Ge>=0&&Ge<=1,be.x=Re,be.y=Ge,(be.fresh||!be.inside)&&(be.sx=Re,be.sy=Ge,be.fresh=!1)},Fe=xe=>{Ne(xe),(be.inside||Ke.length)&&de()},Ee=xe=>{Ne(xe);const me=ie.current;!be.inside||!me.clickSwirl||te||($e.unshift({x:(be.x-.5)*(Pe.width/Pe.height),y:be.y-.5,age:0,direction:be.vx<0?1:-1}),$e.length>ym&&$e.pop(),de())},we=()=>{be.inside=!1},Xe=()=>{q=0,de()},Je=new ResizeObserver(w);Je.observe(X);const Se=new IntersectionObserver(xe=>{We=xe.some(me=>me.isIntersecting),We&&(q=0,de())});return Se.observe(X),window.addEventListener("pointermove",Fe,{passive:!0}),window.addEventListener("pointerdown",Ee,{passive:!0}),document.documentElement.addEventListener("pointerleave",we),document.addEventListener("visibilitychange",Xe),w(),B.current=de,()=>{cancelAnimationFrame(vt),B.current=null,Je.disconnect(),Se.disconnect(),window.removeEventListener("pointermove",Fe),window.removeEventListener("pointerdown",Ee),document.documentElement.removeEventListener("pointerleave",we),document.removeEventListener("visibilitychange",Xe),z.deleteTexture(k),z.deleteFramebuffer(ve),z.deleteVertexArray(U),z.deleteProgram(V.program),z.deleteProgram(Q.program),z.getExtension("WEBGL_lose_context")?.loseContext()}},[]),yt.useEffect(()=>{B.current?.()}),nt.jsx("div",{ref:T,className:`grainient-container${b?` ${b}`:""}`,style:R,...N,children:nt.jsx("canvas",{ref:L,className:"grainient-canvas","aria-hidden":"true"})})},hb={circle:0,square:1,ring:2,sparkle:3},pb={parallax:0,repel:1,attract:2},mb={none:0,up:1,down:2,forward:3},gb=2e4,Fy=900,Uy=9e3,pc=4,th=10,nh=1/Math.tan(7.5*Math.PI/180),RM=.1,ha=100,vb=1.8,Em=1.5,CM=520,PM=46,_b=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec3 aPosition;
layout(location = 2) in vec4 aRandom;
layout(location = 3) in vec3 aColor;
uniform mat3 uRotation;
uniform vec3 uOffset;
uniform float uSpread;
uniform float uTime;
uniform float uCamera;
uniform float uAspect;
uniform vec2 uView;
uniform float uRatio;
uniform float uSize;
uniform float uRandomness;
uniform float uBlur;
uniform float uFocus;
uniform float uGlow;
uniform float uTwinkle;
uniform int uShape;
uniform int uDrift;
uniform float uTravel;
uniform vec4 uPointer;
uniform int uEffect;
uniform float uStrength;
uniform vec4 uBursts[${pc}];
uniform int uBurstCount;
uniform float uReveal;
out vec2 vLocal;
out float vRadius;
out float vBlur;
out float vAlpha;
out float vHalo;
out float vSeed;
out vec3 vColor;

vec3 bob(vec4 r, float t) {
  return vec3(
    sin(t * r.z + 6.28 * r.w) * mix(0.1, 1.5, r.x),
    sin(t * r.y + 6.28 * r.x) * mix(0.1, 1.5, r.w),
    sin(t * r.w + 6.28 * r.y) * mix(0.1, 1.5, r.z)
  );
}

void main() {
  vec3 pos = aPosition * uSpread;
  pos.z *= ${th.toFixed(1)};
  vec3 wobble = bob(aRandom, uTime);
  vec3 world = uRotation * pos + uOffset + wobble;
  float edge = 1.0;
  if (uDrift == 1 || uDrift == 2) {
    float span = uSpread * 2.0 + 3.0;
    float k = mod(aRandom.w * span + uOffset.y + wobble.y + (uDrift == 1 ? uTravel : -uTravel), span);
    world.y = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.12, k) * smoothstep(span, span * 0.88, k);
  } else if (uDrift == 3) {
    float span = uSpread * ${th.toFixed(1)} * 2.0 + 3.0;
    float k = mod(aRandom.y * span + uOffset.z + wobble.z + uTravel, span);
    world.z = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.1, k);
  }
  vec3 view = world - vec3(0.0, 0.0, uCamera);
  float dist = length(view);
  float ahead = -view.z;
  if (ahead < ${RM.toFixed(2)} || ahead > ${ha.toFixed(1)}) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  edge *= smoothstep(1.0, 4.0, ahead);
  vec2 ndc = vec2(view.x * ${nh.toFixed(6)} / uAspect, view.y * ${nh.toFixed(6)}) / ahead;
  vec2 screen = (ndc * 0.5 + 0.5) * uView;

  vec2 shift = vec2(0.0);
  float flash = 0.0;
  if (uEffect != 0 && uPointer.z > 0.001) {
    vec2 delta = screen - uPointer.xy;
    float reach = length(delta);
    float falloff = exp(-dot(delta, delta) / (uPointer.w * uPointer.w));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    shift += (uEffect == 1 ? away * uPointer.w * 0.5 : -delta * 0.6) * falloff * uStrength * uPointer.z;
  }
  for (int i = 0; i < ${pc}; i++) {
    if (i >= uBurstCount) break;
    vec4 burst = uBursts[i];
    vec2 delta = screen - burst.xy;
    float reach = length(delta);
    float wave = exp(-pow((reach - burst.z * ${CM.toFixed(1)}) / ${PM.toFixed(1)}, 2.0));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    float fade = (1.0 - burst.z) * (1.0 - burst.z) * burst.w;
    shift += away * wave * fade * 56.0 * smoothstep(0.0, 30.0, reach);
    flash += wave * fade;
  }
  screen += shift;

  float diameter = (uRandomness <= 0.0 ? uSize : uSize * (1.0 + uRandomness * (aRandom.x - 0.5)) / dist) * (1.0 + min(flash, 1.0) * 0.6);
  float device = diameter * uRatio;
  float radius = max(diameter, 1.0 / uRatio) * 0.5;
  float coverage = min(1.0, device * device);
  float blur = uBlur * max(uFocus - dist, 0.0) / max(dist, 1.0);
  float halo = uGlow > 0.0 ? radius * 2.5 + 2.0 : 0.0;
  float extent = radius * (uShape == 3 ? 1.6 : 1.0) + blur + halo + 1.5;

  float twinkle = 1.0 - uTwinkle * 0.6 * (0.5 + 0.5 * sin(uTime * (6.0 + aRandom.y * 14.0) + aRandom.w * 40.0));
  float far = smoothstep(${ha.toFixed(1)}, ${(ha*.9).toFixed(1)}, ahead);
  float focus = radius / (radius + blur);
  float reveal = clamp(uReveal * 1.6 - aRandom.z * 0.6, 0.0, 1.0);

  vLocal = aCorner * extent;
  vRadius = radius;
  vBlur = blur;
  vHalo = halo;
  vSeed = aRandom.y;
  vAlpha = min(1.0, coverage * twinkle * (1.0 + flash * 1.4)) * far * edge * max(focus, 0.35) * reveal * reveal;
  vColor = aColor;
  gl_Position = vec4((screen + aCorner * extent) / uView * 2.0 - 1.0, 0.0, 1.0);
}`,xb=`#version 300 es
precision highp float;
precision highp int;
uniform int uShape;
uniform float uGlow;
uniform float uRatio;
uniform float uTime;
uniform float uSoft;
uniform float uShimmer;
uniform float uOpacity;
in vec2 vLocal;
in float vRadius;
in float vBlur;
in float vAlpha;
in float vHalo;
in float vSeed;
in vec3 vColor;
out vec4 outColor;

float ray(vec2 q, float aa) {
  float width = 0.14 * max(0.0, 1.0 - q.x);
  return (1.0 - smoothstep(width - aa, width + aa, q.y)) * step(q.x, 1.0);
}

void main() {
  float soft = vBlur + 0.7 / uRatio + vRadius * uSoft;
  float d = length(vLocal);
  float shape;
  if (uShape == 1) {
    float box = max(abs(vLocal.x), abs(vLocal.y));
    shape = 1.0 - smoothstep(vRadius * 0.86 - soft, vRadius * 0.86 + soft, box);
  } else if (uShape == 2) {
    float edge = max(vRadius * 0.22, 0.6 / uRatio);
    shape = 1.0 - smoothstep(edge - soft, edge + soft, abs(d - vRadius * 0.8));
  } else if (uShape == 3) {
    float reach = vRadius * 1.6;
    vec2 q = abs(vLocal) / max(reach, 0.0001);
    float aa = soft / max(reach, 0.0001);
    shape = max(max(ray(q, aa), ray(q.yx, aa)), 1.0 - smoothstep(vRadius * 0.32 - soft, vRadius * 0.32 + soft, d));
  } else {
    shape = 1.0 - smoothstep(vRadius - soft, vRadius + soft, d);
  }
  float halo = vHalo > 0.0 ? exp(-d / (vHalo * 0.35)) * uGlow * 0.4 : 0.0;
  float alpha = clamp(shape + halo * (1.0 - shape), 0.0, 1.0) * vAlpha * uOpacity * (1.0 - uSoft);
  if (alpha < 0.002) discard;
  vec2 uv = vLocal / max(vRadius * 2.0, 0.0001) + 0.5;
  vec3 color = clamp(vColor + uShimmer * 0.2 * sin(uv.yxx + uTime + vSeed * 6.28), 0.0, 1.0);
  outColor = vec4(color * alpha, alpha);
}`,yb=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aEnds;
layout(location = 2) in vec4 aTint;
uniform vec2 uView;
uniform float uRatio;
uniform float uWidth;
out float vAcross;
out float vHalf;
out vec4 vTint;

void main() {
  vec2 a = aEnds.xy;
  vec2 b = aEnds.zw;
  vec2 along = b - a;
  float span = max(length(along), 0.0001);
  vec2 normal = vec2(-along.y, along.x) / span;
  float reach = uWidth * 0.5 + 1.0 / uRatio;
  vec2 point = mix(a, b, aCorner.x * 0.5 + 0.5) + normal * aCorner.y * reach;
  vAcross = aCorner.y * reach;
  vHalf = uWidth * 0.5;
  vTint = aTint;
  gl_Position = vec4(point / uView * 2.0 - 1.0, 0.0, 1.0);
}`,Sb=`#version 300 es
precision highp float;
uniform float uRatio;
uniform float uOpacity;
in float vAcross;
in float vHalf;
in vec4 vTint;
out vec4 outColor;

void main() {
  float edge = 0.6 / uRatio;
  float cover = 1.0 - smoothstep(vHalf - edge, vHalf + edge, abs(vAcross));
  float alpha = cover * vTint.a * uOpacity;
  outColor = vec4(vTint.rgb * alpha, alpha);
}`,or=(s,e,t)=>Math.min(t,Math.max(e,s)),Oy=(s,e,t)=>{const n=s.createShader(e);return n?(s.shaderSource(n,t),s.compileShader(n),s.getShaderParameter(n,s.COMPILE_STATUS)?n:(s.deleteShader(n),null)):null},ky=(s,e,t)=>{const n=Oy(s,s.VERTEX_SHADER,e),r=Oy(s,s.FRAGMENT_SHADER,t),a=s.createProgram();if(!n||!r||!a)return null;if(s.attachShader(a,n),s.attachShader(a,r),s.linkProgram(a),s.deleteShader(n),s.deleteShader(r),!s.getProgramParameter(a,s.LINK_STATUS))return s.deleteProgram(a),null;const l={},c=s.getProgramParameter(a,s.ACTIVE_UNIFORMS);for(let f=0;f<c;f++){const h=s.getActiveUniform(a,f);h&&(l[h.name.replace("[0]","")]=s.getUniformLocation(a,h.name))}return{program:a,uniforms:l}},Mb=s=>{let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Eb=s=>1-Math.pow(1-or(s,0,1),3),By=(s,e)=>(s%e+e)%e,wb=({particleCount:s=200,particleSpread:e=10,speed:t=.1,particleColors:n=["#ffffff"],moveParticlesOnHover:r=!0,particleHoverFactor:a=1,alphaParticles:l=!1,particleBaseSize:c=100,sizeRandomness:f=1,cameraDistance:h=20,disableRotation:p=!1,pixelRatio:_,shape:m="circle",glow:g=.5,twinkle:S=.3,depthOfField:E=0,connections:x=!1,connectionDistance:y=110,hoverEffect:C="parallax",hoverRadius:O=140,clickBurst:A=!0,drift:b="none",driftSpeed:R=1,variation:N=0,intro:T=!0,opacity:L=1,lightMode:B=!1,paused:Z=!1,className:G="",style:ie})=>{const X=yt.useRef(null),j=yt.useRef(null),z=yt.useRef(null),V=(Array.isArray(n)?n:[n]).filter(Boolean).map(String),Q={count:or(Math.round(s),1,gb),spread:Math.max(.1,e),speed:t,colors:V.length?V:["#ffffff"],mouse:r,hoverFactor:Math.max(0,a),soft:l,size:Math.max(0,c),randomness:Math.max(0,f),camera:Math.max(1,h),rotate:!p,dpr:_,shape:hb[m]??0,glow:Math.max(0,g),twinkle:or(S,0,1),depthOfField:Math.max(0,E),connections:x,connectionDistance:Math.max(10,y),hoverEffect:pb[C]??0,hoverRadius:Math.max(20,O),clickBurst:A,drift:mb[b]??0,driftSpeed:R,variation:Math.max(0,Math.round(N)),intro:T,opacity:or(L,0,1),lightMode:B,paused:Z},Y=yt.useRef(Q);return Y.current=Q,yt.useEffect(()=>{const I=X.current,U=j.current,k=U?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!I||!U||!k)return;const ve=ky(k,_b,xb),De=ky(k,yb,Sb);if(!ve||!De)return;const se=k.createBuffer();k.bindBuffer(k.ARRAY_BUFFER,se),k.bufferData(k.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),k.STATIC_DRAW);const ke=k.createBuffer(),ee=k.createBuffer(),te=k.createBuffer(),Pe=k.createVertexArray();k.bindVertexArray(Pe),k.bindBuffer(k.ARRAY_BUFFER,se),k.enableVertexAttribArray(0),k.vertexAttribPointer(0,2,k.FLOAT,!1,0,0);const Oe=(H,oe,ne)=>{k.bindBuffer(k.ARRAY_BUFFER,H),k.enableVertexAttribArray(oe),k.vertexAttribPointer(oe,ne,k.FLOAT,!1,0,0),k.vertexAttribDivisor(oe,1)};Oe(ke,1,3),Oe(ee,2,4),Oe(te,3,3);const ze=k.createBuffer(),qe=new Float32Array(Uy*8),st=k.createVertexArray();k.bindVertexArray(st),k.bindBuffer(k.ARRAY_BUFFER,se),k.enableVertexAttribArray(0),k.vertexAttribPointer(0,2,k.FLOAT,!1,0,0),k.bindBuffer(k.ARRAY_BUFFER,ze),k.bufferData(k.ARRAY_BUFFER,qe.byteLength,k.DYNAMIC_DRAW),k.enableVertexAttribArray(1),k.vertexAttribPointer(1,4,k.FLOAT,!1,32,0),k.vertexAttribDivisor(1,1),k.enableVertexAttribArray(2),k.vertexAttribPointer(2,4,k.FLOAT,!1,32,16),k.vertexAttribDivisor(2,1),k.bindVertexArray(null);const Ke=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),$e=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,be=new Map,fe=H=>{if(be.has(H))return be.get(H);let oe=[1,1,1];if(Ke){Ke.clearRect(0,0,1,1),Ke.fillStyle="#ffffff",Ke.fillStyle=H,Ke.fillRect(0,0,1,1);const[ne,Be,_e]=Ke.getImageData(0,0,1,1).data;oe=[ne/255,Be/255,_e/255]}return be.set(H,oe),oe},Et=H=>{const oe=H.map(_e=>Math.pow(_e,2.2)),ne=.2126*oe[0]+.7152*oe[1]+.0722*oe[2],Be=Math.min(1,.06/Math.max(ne,1e-4));return oe.map(_e=>Math.pow(_e*Be,1/2.2))},Ze={width:1,height:1,ratio:1},it={x:0,y:0,sx:0,sy:0,nx:0,ny:0,inside:!1,active:0},Qe={clock:0,spin:0,travel:0,offsetX:0,offsetY:0,reveal:Y.current.intro&&!$e?0:1},vt=[],q=new Float32Array(pc*4),We={key:"",count:0,positions:new Float32Array(0),randoms:new Float32Array(0),colors:new Float32Array(0)},Le={x:new Float32Array(0),y:new Float32Array(0),ahead:new Float32Array(0),alpha:new Float32Array(0)};let F=0,w=0,$=!0;const W=H=>{const oe=`${H.count}|${H.variation}|${H.colors.join(",")}|${H.lightMode?1:0}`;if(oe===We.key)return;We.key=oe;const ne=Mb(H.variation*7919+1),Be=H.count,_e=new Float32Array(Be*3),ae=new Float32Array(Be*4),Te=new Float32Array(Be*3),Ye=H.colors.map(dt=>H.lightMode?Et(fe(dt)):fe(dt));for(let dt=0;dt<Be;dt++){let At,Vt,Rt,Pt;do At=ne()*2-1,Vt=ne()*2-1,Rt=ne()*2-1,Pt=At*At+Vt*Vt+Rt*Rt;while(Pt>1||Pt===0);const St=Math.cbrt(ne());_e.set([At*St,Vt*St,Rt*St],dt*3),ae.set([ne(),ne(),ne(),ne()],dt*4),Te.set(Ye[Math.floor(ne()*Ye.length)],dt*3)}We.count=Be,We.positions=_e,We.randoms=ae,We.colors=Te;const lt=Math.min(Be,Fy);Le.x=new Float32Array(lt),Le.y=new Float32Array(lt),Le.ahead=new Float32Array(lt),Le.alpha=new Float32Array(lt),k.bindBuffer(k.ARRAY_BUFFER,ke),k.bufferData(k.ARRAY_BUFFER,_e,k.STATIC_DRAW),k.bindBuffer(k.ARRAY_BUFFER,ee),k.bufferData(k.ARRAY_BUFFER,ae,k.STATIC_DRAW),k.bindBuffer(k.ARRAY_BUFFER,te),k.bufferData(k.ARRAY_BUFFER,Te,k.STATIC_DRAW)},de=H=>{const oe=Qe.clock*1e3,ne=H.rotate?Math.sin(oe*2e-4)*.1:0,Be=H.rotate?Math.cos(oe*5e-4)*.15:0,_e=H.rotate?Qe.spin:0,[ae,Te,Ye,lt,dt,At]=[Math.sin(ne),Math.cos(ne),Math.sin(Be),Math.cos(Be),Math.sin(_e),Math.cos(_e)];return[lt*At+Ye*ae*dt,Te*dt,-Ye*At+lt*ae*dt,-lt*dt+Ye*ae*At,Te*At,Ye*dt+lt*ae*At,Ye*Te,-ae,lt*Te]},Ne=()=>[Qe.offsetX,Qe.offsetY,-(1-Eb(Qe.reveal))*70],Fe=(H,oe)=>{const ne=Math.min(We.count,Fy),[Be,_e,ae]=Ne(),Te=Ze.width/Ze.height,Ye=Qe.clock,lt=H.hoverRadius,dt=H.hoverEffect!==0?it.active:0,At=H.spread*2+3,Vt=H.spread*th*2+3;for(let Rt=0;Rt<ne;Rt++){const Pt=We.positions[Rt*3]*H.spread,St=We.positions[Rt*3+1]*H.spread,Wt=We.positions[Rt*3+2]*H.spread*th,Ht=We.randoms[Rt*4],et=We.randoms[Rt*4+1],He=We.randoms[Rt*4+2],pt=We.randoms[Rt*4+3],Lt=Math.sin(Ye*He+6.28*pt)*(.1+1.4*Ht),It=Math.sin(Ye*et+6.28*Ht)*(.1+1.4*pt),jt=Math.sin(Ye*pt+6.28*et)*(.1+1.4*He),Rn=oe[0]*Pt+oe[3]*St+oe[6]*Wt+Be+Lt;let Ft=oe[1]*Pt+oe[4]*St+oe[7]*Wt+_e+It,tn=oe[2]*Pt+oe[5]*St+oe[8]*Wt+ae+jt,dn=1;if(H.drift===1||H.drift===2){const ot=By(pt*At+_e+It+(H.drift===1?Qe.travel:-Qe.travel),At);Ft=ot-At/2;const ft=or(ot/(At*.12),0,1),mt=or((At-ot)/(At*.12),0,1);dn=ft*ft*(3-2*ft)*mt*mt*(3-2*mt)}else if(H.drift===3){const ot=By(et*Vt+ae+jt+Qe.travel,Vt);tn=ot-Vt/2;const ft=or(ot/(Vt*.1),0,1);dn=ft*ft*(3-2*ft)}const vn=H.camera-tn;if(vn<RM||vn>ha){Le.alpha[Rt]=0;continue}const P=or((vn-1)/3,0,1);dn*=P*P*(3-2*P);let re=Rn*nh/Te/vn*.5*Ze.width+Ze.width/2,Me=Ft*nh/vn*.5*Ze.height+Ze.height/2,ue=0,le=0;if(dt>.001){const ot=re-it.sx,ft=Me-it.sy,mt=Math.hypot(ot,ft),Dt=Math.exp(-(ot*ot+ft*ft)/(lt*lt))*H.hoverFactor*dt;H.hoverEffect===1&&mt>.001?(ue+=ot/mt*lt*.5*Dt,le+=ft/mt*lt*.5*Dt):H.hoverEffect===2&&(ue-=ot*.6*Dt,le-=ft*.6*Dt)}for(const ot of vt){const ft=ot.age/Em,mt=re-ot.x,Dt=Me-ot.y,Bt=Math.hypot(mt,Dt);if(Bt<.001)continue;const _t=Math.exp(-Math.pow((Bt-ft*CM)/PM,2)),qt=or(Bt/30,0,1),Mn=_t*(1-ft)*(1-ft)*56*qt*qt*(3-2*qt);ue+=mt/Bt*Mn,le+=Dt/Bt*Mn}re+=ue,Me+=le;const at=or((ha-vn)/(ha-ha*.9),0,1),ct=or(Qe.reveal*1.6-He*.6,0,1);Le.x[Rt]=re,Le.y[Rt]=Me,Le.ahead[Rt]=vn,Le.alpha[Rt]=at*at*(3-2*at)*dn*ct*ct}return ne},Ee=(H,oe)=>{const ne=Fe(H,oe),Be=H.connectionDistance,_e=Math.max(1,Math.ceil(Ze.width/Be)+2),ae=new Map;for(let lt=0;lt<ne;lt++){if(Le.alpha[lt]<.02)continue;const dt=(Math.floor(Le.y[lt]/Be)+1)*_e+Math.floor(Le.x[lt]/Be)+1,At=ae.get(dt);At?At.push(lt):ae.set(dt,[lt])}let Te=0;const Ye=Be*Be;for(const[lt,dt]of ae)for(const At of[0,1,_e-1,_e,_e+1]){const Vt=At===0?dt:ae.get(lt+At);if(Vt)for(let Rt=0;Rt<dt.length;Rt++){const Pt=dt[Rt];for(let St=At===0?Rt+1:0;St<Vt.length;St++){const Wt=Vt[St],Ht=Le.x[Pt]-Le.x[Wt],et=Le.y[Pt]-Le.y[Wt],He=Ht*Ht+et*et;if(He>Ye)continue;const pt=or(1-Math.abs(Le.ahead[Pt]-Le.ahead[Wt])/18,0,1);if(pt<=0)continue;if(Te>=Uy)return Te;const Lt=1-Math.sqrt(He)/Be,It=Te*8;qe[It]=Le.x[Pt],qe[It+1]=Le.y[Pt],qe[It+2]=Le.x[Wt],qe[It+3]=Le.y[Wt],qe[It+4]=(We.colors[Pt*3]+We.colors[Wt*3])/2,qe[It+5]=(We.colors[Pt*3+1]+We.colors[Wt*3+1])/2,qe[It+6]=(We.colors[Pt*3+2]+We.colors[Wt*3+2])/2,qe[It+7]=Lt*Lt*pt*.7*Math.min(Le.alpha[Pt],Le.alpha[Wt]),Te++}}}return Te},we=()=>{const H=Y.current;W(H);const oe=de(H),[ne,Be,_e]=Ne();if(k.viewport(0,0,U.width,U.height),k.clearColor(0,0,0,0),k.clear(k.COLOR_BUFFER_BIT),k.enable(k.BLEND),k.blendFunc(k.ONE,k.ONE_MINUS_SRC_ALPHA),H.connections){const Ye=Ee(H,oe);Ye&&(k.useProgram(De.program),k.bindVertexArray(st),k.bindBuffer(k.ARRAY_BUFFER,ze),k.bufferSubData(k.ARRAY_BUFFER,0,qe.subarray(0,Ye*8)),k.uniform2f(De.uniforms.uView,Ze.width,Ze.height),k.uniform1f(De.uniforms.uRatio,Ze.ratio),k.uniform1f(De.uniforms.uWidth,1),k.uniform1f(De.uniforms.uOpacity,H.opacity),k.drawArraysInstanced(k.TRIANGLE_STRIP,0,4,Ye))}const ae=ve.uniforms;let Te=0;for(let Ye=vt.length-1;Ye>=0&&Te<pc;Ye--)q.set([vt[Ye].x,vt[Ye].y,vt[Ye].age/Em,1],Te*4),Te++;k.useProgram(ve.program),k.bindVertexArray(Pe),k.uniformMatrix3fv(ae.uRotation,!1,oe),k.uniform3f(ae.uOffset,ne,Be,_e),k.uniform1f(ae.uSpread,H.spread),k.uniform1f(ae.uTime,Qe.clock),k.uniform1f(ae.uCamera,H.camera),k.uniform1f(ae.uAspect,Ze.width/Ze.height),k.uniform2f(ae.uView,Ze.width,Ze.height),k.uniform1f(ae.uRatio,Ze.ratio),k.uniform1f(ae.uSize,H.size),k.uniform1f(ae.uRandomness,H.randomness),k.uniform1f(ae.uBlur,H.depthOfField*14),k.uniform1f(ae.uFocus,H.camera+14),k.uniform1f(ae.uGlow,H.lightMode?H.glow*.3:H.glow),k.uniform1f(ae.uTwinkle,H.twinkle),k.uniform1i(ae.uShape,H.shape),k.uniform1i(ae.uDrift,H.drift),k.uniform1f(ae.uTravel,Qe.travel),k.uniform4f(ae.uPointer,it.sx,it.sy,it.active,H.hoverRadius),k.uniform1i(ae.uEffect,H.hoverEffect),k.uniform1f(ae.uStrength,H.hoverFactor),k.uniform4fv(ae.uBursts,q),k.uniform1i(ae.uBurstCount,Te),k.uniform1f(ae.uReveal,Qe.reveal),k.uniform1f(ae.uSoft,H.soft?.2:0),k.uniform1f(ae.uShimmer,H.lightMode?0:1),k.uniform1f(ae.uOpacity,H.opacity),k.drawArraysInstanced(k.TRIANGLE_STRIP,0,4,We.count),k.bindVertexArray(null)},Xe=H=>{if(F=0,!$||document.hidden)return;const oe=Y.current,ne=w?or((H-w)/1e3,5e-4,.05):1/60;if(w=H,oe.paused){Qe.reveal=1,we(),w=0;return}const Be=$e?0:1,_e=ne*oe.speed*Be;Qe.clock+=_e,oe.rotate&&(Qe.spin+=_e*.6),Qe.travel+=ne*oe.driftSpeed*Be*(oe.drift===3?6:.9);const ae=oe.mouse&&it.inside&&!$e,Te=1-Math.exp(-ne/.35),Ye=ae&&oe.hoverEffect===0?oe.hoverFactor:0;Qe.offsetX+=(-it.nx*Ye-Qe.offsetX)*Te,Qe.offsetY+=(-it.ny*Ye-Qe.offsetY)*Te,it.sx+=(it.x-it.sx)*(1-Math.exp(-ne/.06)),it.sy+=(it.y-it.sy)*(1-Math.exp(-ne/.06)),it.active+=((ae?1:0)-it.active)*(1-Math.exp(-ne/.2));for(let lt=vt.length-1;lt>=0;lt--)vt[lt].age+=ne,vt[lt].age>=Em&&vt.splice(lt,1);!oe.intro||$e?Qe.reveal=1:Qe.reveal<1&&(Qe.reveal=Math.min(1,Qe.reveal+ne/vb)),we(),F=requestAnimationFrame(Xe)},Je=()=>{!F&&$&&!document.hidden&&(F=requestAnimationFrame(Xe))},Se=()=>{const H=Y.current,oe=Math.max(1,I.clientWidth),ne=Math.max(1,I.clientHeight),Be=Math.min(H.dpr||window.devicePixelRatio||1,2);Ze.width=oe,Ze.height=ne,U.width=Math.max(1,Math.round(oe*Be)),U.height=Math.max(1,Math.round(ne*Be)),Ze.ratio=U.width/oe,we(),Je()},xe=H=>{const oe=I.getBoundingClientRect(),ne=H.clientX-oe.left,Be=H.clientY-oe.top,_e=it.inside;it.inside=ne>=0&&Be>=0&&ne<=oe.width&&Be<=oe.height,it.x=ne,it.y=oe.height-Be,it.nx=ne/Math.max(1,oe.width)*2-1,it.ny=-(Be/Math.max(1,oe.height)*2-1),it.inside&&!_e&&(it.sx=it.x,it.sy=it.y)},me=H=>{xe(H),Y.current.paused||Je()},Re=H=>{const oe=Y.current;xe(H),!(!it.inside||!oe.clickBurst||oe.paused||$e)&&(vt.push({x:it.x,y:it.y,age:0}),vt.length>pc&&vt.shift(),Je())},Ge=H=>{H.pointerType!=="mouse"&&(it.inside=!1)},K=()=>{it.inside=!1},Ue=()=>{w=0,Je()},ge=new ResizeObserver(Se);ge.observe(I);const Ve=new IntersectionObserver(H=>{$=H.some(oe=>oe.isIntersecting),$&&(w=0,Je())});Ve.observe(I),window.addEventListener("pointermove",me,{passive:!0}),window.addEventListener("pointerdown",Re,{passive:!0}),window.addEventListener("pointerup",Ge,{passive:!0}),window.addEventListener("pointercancel",Ge,{passive:!0}),document.documentElement.addEventListener("pointerleave",K),document.addEventListener("visibilitychange",Ue),Se();let ye=Y.current.dpr;return z.current=()=>{const H=Y.current;if(H.dpr!==ye){ye=H.dpr,Se();return}F||we(),Je()},()=>{cancelAnimationFrame(F),z.current=null,ge.disconnect(),Ve.disconnect(),window.removeEventListener("pointermove",me),window.removeEventListener("pointerdown",Re),window.removeEventListener("pointerup",Ge),window.removeEventListener("pointercancel",Ge),document.documentElement.removeEventListener("pointerleave",K),document.removeEventListener("visibilitychange",Ue),k.deleteProgram(ve.program),k.deleteProgram(De.program),[se,ke,ee,te,ze].forEach(H=>k.deleteBuffer(H)),k.deleteVertexArray(Pe),k.deleteVertexArray(st),k.getExtension("WEBGL_lose_context")?.loseContext()}},[]),yt.useEffect(()=>{z.current?.()}),nt.jsx("div",{ref:X,className:`particles-container${G?` ${G}`:""}`,style:ie,children:nt.jsx("canvas",{ref:j,className:"particles-canvas","aria-hidden":"true"})})},Tb="web-threads-container",Ab="web-threads-canvas",mc=24,Qu=6,gc=3,LM=1.6,DM=.05,zy=1.25,bb=Math.PI*2,Rb=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Cb=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uPhase;
uniform float uClock;
uniform int uCount;
uniform float uFrequency;
uniform float uSpread;
uniform float uTaper;
uniform float uPosition;
uniform float uPinch;
uniform float uNodes;
uniform vec2 uAngle;
uniform float uGlow;
uniform float uFalloff;
uniform float uThickness;
uniform float uBrightness;
uniform float uOpacity;
uniform float uMirror;
uniform float uShimmer;
uniform float uDepth;
uniform float uPulses;
uniform float uFade;
uniform float uGrain;
uniform vec3 uColors[${Qu}];
uniform int uColorCount;
uniform vec3 uCore;
uniform vec3 uBackground;
uniform float uOpaque;
uniform float uLight;
uniform vec4 uIntro;
uniform float uFocus[${mc}];
uniform vec2 uFocusState;
uniform vec4 uSurges[${gc}];
out vec4 outColor;

const float PI = 3.14159265;
const float TAU = 6.28318530;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float easeInOut(float t) {
  return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

vec3 palette(float t) {
  if (uColorCount <= 1) return uColors[0];
  float scaled = clamp(t, 0.0, 1.0) * float(uColorCount - 1);
  int index = int(min(floor(scaled), float(uColorCount - 2)));
  return mix(uColors[index], uColors[index + 1], scaled - float(index));
}

vec2 envelope(float x) {
  float dx = x - uPinch;
  if (uNodes <= 1.0) return vec2(uSpread * abs(dx), uSpread * sign(dx));
  float k = PI * uNodes;
  float c = cos(k * (dx + 0.5));
  return vec2(uSpread * 0.5 * abs(c), -uSpread * 0.5 * k * sin(k * (dx + 0.5)) * sign(c));
}

vec2 space(vec2 p, float aspect) {
  vec2 q = (p - 0.5) * vec2(aspect, 1.0);
  q = vec2(q.x * uAngle.x + q.y * uAngle.y, -q.x * uAngle.y + q.y * uAngle.x);
  return vec2(q.x / aspect + 0.5, q.y + 0.5);
}

float hubAt(float x) {
  if (uNodes <= 1.0) return uPinch;
  float spacing = 1.0 / uNodes;
  return uPinch - 0.5 + (floor((x - uPinch + 0.5) / spacing) + 0.5) * spacing;
}

vec3 thread(float x, float i, float n) {
  float lane = uNodes <= 1.0 ? x - uPinch : (x - uPinch + 0.5) * uNodes - 0.5;
  float side = uMirror > 0.5 ? (mod(floor(lane), 2.0) < 0.5 ? -1.0 : 1.0) : 1.0;
  vec2 env = envelope(x);
  float amp = 1.0 + i * uTaper;
  float shimmer = uShimmer > 0.5 ? sin(uClock * 1.7 + i * 1.3) * 0.35 : 0.0;
  float angle = x * uFrequency + (uPhase + i * TAU / max(n, 1.0)) * side + shimmer;
  float wave = sin(angle);
  float y = uPosition - env.x * amp * wave;
  float slope = -(env.y * amp * wave + env.x * amp * cos(angle) * uFrequency);
  return vec3(y, slope, angle);
}

void main() {
  vec2 p = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 s = space(p, aspect);
  float x = s.x;
  float y = s.y;
  float n = float(uCount);
  float pixel = 1.0 / uResolution.y;
  float hub = hubAt(x);
  float presence = uFocusState.x;
  float settle = uFocusState.y;

  vec3 color = vec3(0.0);
  float energy = 0.0;
  float ink = 0.0;
  vec3 inkColor = vec3(0.0);

  for (int idx = 0; idx < ${mc}; idx++) {
    if (idx >= uCount) break;
    float i = float(idx);
    float ci = n > 1.0 ? i / (n - 1.0) : 0.0;

    float head = 2.0;
    float bead = 0.0;
    float born = 1.0;
    if (uIntro.w > 0.5) {
      float progress = clamp((uIntro.x - i * uIntro.y) / uIntro.z, 0.0, 1.0);
      head = mix(-0.06, 1.06, easeInOut(progress));
      bead = sin(PI * progress);
      born = progress > 0.0 ? smoothstep(-0.05, 0.03, head) : 0.0;
    }
    if (born <= 0.0) continue;

    bool tip = x > head;
    vec3 lead = bead > 0.0 || tip ? thread(head, i, n) : vec3(0.0);
    vec3 t = tip ? lead : thread(x, i, n);

    float focus = uFocus[idx];
    float spot = tip ? head : x;
    float twist = uDepth * smoothstep(0.0, 0.07, abs(spot - hubAt(spot)));
    float depth = 0.5 + 0.5 * cos(t.z);
    float front = mix(1.0, 0.3 + 0.7 * depth, twist);
    float width = uThickness * mix(1.0, 0.55 + 0.7 * depth, twist) * (1.0 + 0.3 * focus * presence);

    float d;
    if (tip) {
      float back = head - 0.02;
      vec2 a = vec2(back * aspect, thread(back, i, n).x);
      vec2 b = vec2(head * aspect, lead.x);
      vec2 pa = vec2(x * aspect, y) - a;
      vec2 ba = b - a;
      d = length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0));
    } else {
      float bend = t.y * smoothstep(0.0, 0.04, abs(x - hub));
      d = abs(y - t.x) / sqrt(1.0 + bend * bend / (aspect * aspect));
    }
    float g = uGlow / pow(max(d / width, pixel * 0.35), uFalloff) * front * born;
    float onLine = exp(-d / (width * 0.012));

    if (bead > 0.0) {
      vec2 near = vec2((x - head) * aspect, y - lead.x);
      g *= 1.0 + bead * 1.6 * exp(-dot(near, near) / 0.0025);
    }

    float light = 0.0;
    for (int k = 0; k < ${gc}; k++) {
      vec4 surge = uSurges[k];
      if (surge.w <= 0.0) continue;
      float progress = clamp((surge.y - i * ${DM.toFixed(3)}) / ${LM.toFixed(2)}, 0.0, 1.0);
      if (progress <= 0.0 || progress >= 1.0) continue;
      float lead = mix(surge.x, surge.z > 0.0 ? 1.12 : -0.12, easeInOut(progress));
      float along = (x - lead) * surge.z * aspect;
      float trail = along < 0.0 ? exp(along / 0.24) : exp(-along * along / 0.0009);
      light += trail * sin(PI * progress);
    }
    g *= 1.0 + light * (0.12 + 2.8 * onLine);

    if (uPulses > 0.0) {
      float travel = abs(x - hub);
      float pulse = pow(0.5 + 0.5 * sin(travel * 16.0 + uClock * 2.2 + i * 1.9), 24.0);
      g *= 1.0 + uPulses * 5.0 * pulse * onLine;
    }

    float sheen = pow(0.5 + 0.5 * sin(abs(x - hub) * 11.0 + uClock * 1.4), 10.0);
    float lift = focus * presence;
    g *= (1.0 - settle * (1.0 - focus)) * (1.0 + lift * (0.9 + 1.4 * sheen * onLine));

    vec3 tint = mix(palette(ci), uCore, 0.3 * lift);
    color += g * tint;
    energy += g;
    float stroke = smoothstep(0.45, 1.3, g);
    inkColor += tint * stroke;
    ink += stroke;
  }

  float fade = 1.0;
  if (uFade > 0.0) {
    float edge = min(x, 1.0 - x);
    float f = clamp(edge / max(uFade * 0.5, 0.001), 0.0, 1.0);
    fade = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  }
  float core = smoothstep(0.5, 2.2, energy);
  color = mix(color, uCore * energy, core * 0.5);
  color *= uBrightness * fade;
  float alpha = clamp(energy * fade, 0.0, 1.0) * uOpacity;
  float grain = (hash(gl_FragCoord.xy + fract(uClock) * 97.0) - 0.5) * uGrain;

  if (uLight < 0.5) {
    vec3 rgb = max(color * alpha * (1.0 + grain * 2.0), 0.0);
    if (uOpaque > 0.5) {
      outColor = vec4(min(uBackground * (1.0 - alpha) + rgb, 1.0), 1.0);
    } else {
      outColor = vec4(rgb, alpha);
    }
  } else {
    ink *= fade;
    vec3 hue = ink > 0.0001 ? inkColor / ink : palette(0.5);
    float body = clamp(ink, 0.0, 1.0);
    float haze = clamp(1.0 - exp(-energy * fade * 0.3), 0.0, 1.0) * 0.12;
    float focal = smoothstep(2.0, 9.0, energy * fade) * 0.25;
    float cover = clamp((body * 0.9 + (haze + focal) * (1.0 - body)) * (1.0 + grain * 2.0), 0.0, 0.95) * uOpacity;
    vec3 stroke = hue;
    if (uOpaque > 0.5) {
      outColor = vec4(mix(uBackground, stroke, cover), 1.0);
    } else {
      outColor = vec4(stroke * cover, cover);
    }
  }
}`,rl=(s,e,t)=>Math.min(t,Math.max(e,s)),Pb=(s,e)=>(s%e+e)%e;let sl=null;const wm=(s,e)=>{if(s==="transparent")return null;if(typeof document>"u"||(sl||(sl=document.createElement("canvas").getContext("2d")),!sl))return e;sl.fillStyle="#000000",sl.fillStyle=s;const t=sl.fillStyle;if(t.startsWith("#")){const r=parseInt(t.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}const n=/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/.exec(t);return n?n[4]!==void 0&&Number(n[4])===0?null:[Number(n[1])/255,Number(n[2])/255,Number(n[3])/255]:e},Vy=s=>Math.min(.12,.9/Math.max(s-1,1)),Hy=(s,e,t)=>{const n=(s[0]-.5)*e,r=.5-s[1],a=Math.cos(t),l=Math.sin(t);return[(n*a+r*l)/e+.5,-n*l+r*a+.5]},Lb=(s,e,t,n,r)=>{const a=s.nodes<=1?e-s.pinch:(e-s.pinch+.5)*s.nodes-.5,l=s.mirror&&Pb(Math.floor(a),2)<.5?-1:1,c=e-s.pinch,f=s.nodes<=1?s.spread*Math.abs(c):s.spread*.5*Math.abs(Math.cos(Math.PI*s.nodes*(c+.5))),h=s.shimmer?Math.sin(r*1.7+t*1.3)*.35:0,p=e*s.frequency+(n+t*bb/Math.max(s.count,1))*l+h;return s.position-f*(1+t*s.taper)*Math.sin(p)},Gy=(s,e,t)=>{const n=s.createShader(e);return n?(s.shaderSource(n,t),s.compileShader(n),s.getShaderParameter(n,s.COMPILE_STATUS)?n:(s.deleteShader(n),null)):null},Wy=()=>typeof window<"u"&&(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1);function Db({colors:s=["#5227FF","#FF9FFC"],coreColor:e="#FFFFFF",backgroundColor:t="transparent",lightMode:n=!1,threadCount:r=6,speed:a=.2,frequency:l=5,spread:c=.18,taper:f=1,position:h=.5,pinch:p=.5,nodes:_=1,angle:m=0,glow:g=.02,falloff:S=.6,thickness:E=1.1,brightness:x=.6,opacity:y=1,depth:C=0,pulses:O=0,mirror:A=!0,shimmer:b=!1,fade:R=0,grain:N=.05,intro:T=!0,mouseInteraction:L=!0,mouseStrength:B=.5,pulseOnClick:Z=!0,paused:G=!1,dpr:ie=2,className:X="",style:j}){const z=yt.useRef(null),V=s.join("|"),Q=yt.useMemo(()=>V.split("|").slice(0,Qu).map(ve=>wm(ve,[1,1,1])??[1,1,1]),[V]),Y=yt.useMemo(()=>wm(e,[1,1,1])??[1,1,1],[e]),I=yt.useMemo(()=>wm(t,null),[t]),U={palette:Q.length?Q:[[1,1,1]],core:Y,paper:I,lightMode:n,count:rl(Math.round(r),1,mc),speed:a,frequency:l,spread:c,taper:f,position:h,pinch:p,nodes:rl(Math.round(_),1,6),angle:m*Math.PI/180,glow:Math.max(0,g),falloff:Math.max(.05,S),thickness:Math.max(.05,E),brightness:Math.max(0,x),opacity:rl(y,0,1),depth:rl(C,0,1),pulses:Math.max(0,O),mirror:A,shimmer:b,fade:rl(R,0,1),grain:typeof N=="number"?Math.max(0,N):N?.05:0,intro:T,mouseInteraction:L,mouseStrength:rl(B,0,1),pulseOnClick:Z,paused:G,dpr:Math.max(.5,ie)},k=yt.useRef(U);return k.current=U,yt.useEffect(()=>{const ve=z.current;if(!ve)return;const De=document.createElement("canvas");De.className=Ab,ve.appendChild(De);const se=De.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!se){De.remove();return}const ke=Gy(se,se.VERTEX_SHADER,Rb),ee=Gy(se,se.FRAGMENT_SHADER,Cb),te=se.createProgram();if(!ke||!ee||!te){De.remove();return}if(se.attachShader(te,ke),se.attachShader(te,ee),se.bindAttribLocation(te,0,"aPosition"),se.linkProgram(te),se.deleteShader(ke),se.deleteShader(ee),!se.getProgramParameter(te,se.LINK_STATUS)){se.deleteProgram(te),De.remove();return}const Pe=["uResolution","uPhase","uClock","uCount","uFrequency","uSpread","uTaper","uPosition","uPinch","uNodes","uAngle","uGlow","uFalloff","uThickness","uBrightness","uOpacity","uMirror","uShimmer","uDepth","uPulses","uFade","uGrain","uColors","uColorCount","uCore","uBackground","uOpaque","uLight","uIntro","uFocus","uFocusState","uSurges"],Oe={};Pe.forEach($=>{Oe[$]=se.getUniformLocation(te,$)});const ze=se.createVertexArray();se.bindVertexArray(ze);const qe=se.createBuffer();se.bindBuffer(se.ARRAY_BUFFER,qe),se.bufferData(se.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),se.STATIC_DRAW),se.enableVertexAttribArray(0),se.vertexAttribPointer(0,2,se.FLOAT,!1,0,0),se.useProgram(te);const st=new Float32Array(Qu*3),Ke=new Float32Array(gc*4),$e=new Float32Array(mc),be={width:1,height:1,phase:0,clock:0,last:0,raf:0,visible:!1,introAt:-1,pointer:[.5,.5],inside:!1,presence:0,settle:0,target:-1,surges:[],quiet:0,seen:null},fe=()=>{const $=k.current,W=Math.min(window.devicePixelRatio||1,$.dpr),de=Math.max(1,Math.round(ve.clientWidth*W)),Ne=Math.max(1,Math.round(ve.clientHeight*W));de===be.width&&Ne===be.height||(be.quiet=0,be.width=de,be.height=Ne,De.width=de,De.height=Ne)},Et=$=>($.count-1)*Vy($.count)+zy,Ze=($,W,de)=>{const Ne=$.mouseInteraction&&be.inside;if(Ne){const Xe=be.width/Math.max(be.height,1),[Je,Se]=Hy(be.pointer,Xe,$.angle);let xe=-1,me=1/0;for(let Re=0;Re<$.count;Re++){const Ge=Math.abs(Lb($,Je,Re,be.phase,de?0:be.clock)-Se),K=Re===be.target?.11:.085;Ge<K&&Ge<me&&(xe=Re,me=Ge)}be.target=xe}else be.target=-1;const Fe=1-Math.exp(-W/.22);let Ee=0;for(let Xe=0;Xe<mc;Xe++){const Je=Xe===be.target?1:0;$e[Xe]+=(Je-$e[Xe])*Fe,Ee=Math.max(Ee,$e[Xe])}be.presence+=((Ne?1:0)-be.presence)*(1-Math.exp(-W/.3));const we=$.mouseStrength*.65*Ee*be.presence;return be.settle+=(we-be.settle)*(1-Math.exp(-W/.3)),Ee>.002||be.presence>.002||be.settle>.002},it=$=>{const W=k.current,de=be.introAt<0?0:be.clock-be.introAt,Ne=W.intro&&!$&&de<Et(W);se.viewport(0,0,be.width,be.height),se.uniform2f(Oe.uResolution,be.width,be.height),se.uniform1f(Oe.uPhase,be.phase),se.uniform1f(Oe.uClock,$?0:be.clock),se.uniform1i(Oe.uCount,W.count),se.uniform1f(Oe.uFrequency,W.frequency),se.uniform1f(Oe.uSpread,W.spread),se.uniform1f(Oe.uTaper,W.taper),se.uniform1f(Oe.uPosition,W.position),se.uniform1f(Oe.uPinch,W.pinch),se.uniform1f(Oe.uNodes,W.nodes),se.uniform2f(Oe.uAngle,Math.cos(W.angle),Math.sin(W.angle)),se.uniform1f(Oe.uGlow,W.glow*Math.sqrt(6/Math.max(W.count,6))),se.uniform1f(Oe.uFalloff,W.falloff),se.uniform1f(Oe.uThickness,W.thickness),se.uniform1f(Oe.uBrightness,W.brightness),se.uniform1f(Oe.uOpacity,W.opacity),se.uniform1f(Oe.uMirror,W.mirror?1:0),se.uniform1f(Oe.uShimmer,W.shimmer&&!$?1:0),se.uniform1f(Oe.uDepth,W.depth),se.uniform1f(Oe.uPulses,W.pulses),se.uniform1f(Oe.uFade,W.fade),se.uniform1f(Oe.uGrain,W.grain),st.fill(0),W.palette.slice(0,Qu).forEach((Ee,we)=>st.set(Ee,we*3)),se.uniform3fv(Oe.uColors,st),se.uniform1i(Oe.uColorCount,Math.min(W.palette.length,Qu)),se.uniform3f(Oe.uCore,W.core[0],W.core[1],W.core[2]);const Fe=W.paper??[0,0,0];se.uniform3f(Oe.uBackground,Fe[0],Fe[1],Fe[2]),se.uniform1f(Oe.uOpaque,W.paper?1:0),se.uniform1f(Oe.uLight,W.lightMode?1:0),se.uniform4f(Oe.uIntro,de,Vy(W.count),zy,Ne?1:0),se.uniform1fv(Oe.uFocus,$e),se.uniform2f(Oe.uFocusState,be.presence*(.4+.6*W.mouseStrength),be.settle),Ke.fill(0),be.surges.slice(-gc).forEach((Ee,we)=>{Ke.set([Ee.x,be.clock-Ee.at,Ee.direction,1],we*4)}),se.uniform4fv(Oe.uSurges,Ke),se.bindFramebuffer(se.FRAMEBUFFER,null),se.clearColor(0,0,0,0),se.clear(se.COLOR_BUFFER_BIT),se.drawArrays(se.TRIANGLES,0,3)},Qe=$=>{if(be.raf=requestAnimationFrame(Qe),!be.visible||document.hidden){be.last=$;return}const W=k.current,de=be.last?Math.min(($-be.last)/1e3,.1):1/60;be.last=$;const Ne=Wy();be.clock+=de,be.introAt<0&&(be.introAt=be.clock),!W.paused&&!Ne&&(be.phase+=de*W.speed);const Fe=Ze(W,de,Ne);be.surges=be.surges.filter(Xe=>be.clock-Xe.at<LM+(W.count-1)*DM);const Ee=W.paused||Ne,we=be.surges.length>0||W.intro&&!Ne&&be.clock-be.introAt<Et(W)||Fe;be.seen!==W||we||!Ee?be.quiet=0:be.quiet+=1,be.seen=W,!(be.quiet>3)&&(fe(),it(Ne))},vt=$=>{const W=ve.getBoundingClientRect();return{x:($.clientX-W.left)/Math.max(W.width,1),y:($.clientY-W.top)/Math.max(W.height,1),inside:$.clientX>=W.left&&$.clientX<=W.right&&$.clientY>=W.top&&$.clientY<=W.bottom}},q=$=>{const W=vt($);be.inside=W.inside,W.inside&&(be.pointer=[W.x,W.y])},We=()=>{be.inside=!1},Le=$=>{const W=k.current;if(!W.pulseOnClick||$.button!==0||Wy()||$.target instanceof Element&&$.target.closest('a, button, input, textarea, select, label, [role="button"]'))return;const de=vt($);if(!de.inside)return;const Ne=be.width/Math.max(be.height,1),[Fe]=Hy([de.x,de.y],Ne,W.angle),Ee=Fe<=W.pinch?1:-1;be.surges.push({x:Fe,direction:Ee,at:be.clock}),be.surges.length>gc&&be.surges.shift()},F=new IntersectionObserver($=>{be.visible=$.some(W=>W.isIntersecting)});F.observe(ve);const w=new ResizeObserver(fe);return w.observe(ve),fe(),window.addEventListener("pointermove",q,{passive:!0}),window.addEventListener("pointerdown",Le),document.documentElement.addEventListener("pointerleave",We),be.raf=requestAnimationFrame(Qe),()=>{cancelAnimationFrame(be.raf),F.disconnect(),w.disconnect(),window.removeEventListener("pointermove",q),window.removeEventListener("pointerdown",Le),document.documentElement.removeEventListener("pointerleave",We),se.deleteProgram(te),se.deleteBuffer(qe),se.deleteVertexArray(ze),se.getExtension("WEBGL_lose_context")?.loseContext(),De.remove()}},[]),nt.jsx("div",{ref:z,className:[Tb,X].filter(Boolean).join(" "),style:j})}function Nb(){const[s,e]=yt.useState([]),[t,n]=yt.useState(null),[r,a]=yt.useState(null),[l,c]=yt.useState(null);return yt.useEffect(()=>{e(Array.from(document.querySelectorAll("[data-reveal]"))),n(document.querySelector("#hero-grainient")),a(document.querySelector("#contact-particles")),c(document.querySelector("#workflow-threads"))},[]),nt.jsxs(nt.Fragment,{children:[s.map((f,h)=>nt.jsx(rb,{target:f,distance:28,duration:.72,ease:"power3.out",stagger:.07,threshold:.14,once:!0},f.id||`${f.className}-${h}`)),t&&sm.createPortal(nt.jsx(db,{colors:["#11131c","#1b130f","#30160f","#5a2413","#aa4722"],type:"radial",flow:.24,scale:1.2,speed:.14,silk:.08,grainAmount:.035,grainAnimated:!1,contrast:.78,saturation:.72,interactive:!0,stir:.5,clickSwirl:!1,dpr:1.25,style:{width:"100%",height:"100%"}}),t),r&&sm.createPortal(nt.jsx(wb,{particleColors:["#ffc9a6","#f28b5e","#fff1df"],particleCount:72,particleSpread:13,speed:.07,particleBaseSize:58,sizeRandomness:.65,shape:"circle",glow:.18,twinkle:.2,alphaParticles:!0,drift:"up",driftSpeed:.12,moveParticlesOnHover:!0,hoverEffect:"parallax",particleHoverFactor:.3,clickBurst:!1,opacity:.48,pixelRatio:1.25,style:{width:"100%",height:"100%"}}),r),l&&sm.createPortal(nt.jsx(Db,{colors:["#863316","#f05a26","#ffad6d"],coreColor:"#ffd0aa",threadCount:8,speed:.12,frequency:4.8,spread:.16,taper:.34,glow:.018,falloff:.7,brightness:.48,opacity:.58,depth:.22,pulses:.06,shimmer:!0,fade:.34,grain:.02,mouseStrength:.42,dpr:1.5,style:{width:"100%",height:"100%"}}),l)]})}const Ib=typeof window>"u"?yt.useEffect:yt.useLayoutEffect,Fb={dark:{"--gn-frame":"rgba(38, 35, 46, 0.66)","--gn-frame-edge":"rgba(255, 255, 255, 0.08)","--gn-frame-highlight":"rgba(255, 255, 255, 0.07)","--gn-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--gn-ink":"#f4f4f5","--gn-muted":"rgba(244, 244, 245, 0.62)"},light:{"--gn-frame":"rgba(240, 240, 243, 0.8)","--gn-frame-edge":"rgba(24, 24, 27, 0.07)","--gn-frame-highlight":"rgba(255, 255, 255, 0.95)","--gn-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--gn-ink":"#27272a","--gn-muted":"rgba(39, 39, 42, 0.62)"}},Tm={dark:{color:"#f4f4f5",hover:"rgba(255, 255, 255, 0.08)",shadow:.4},light:{color:"#27272a",hover:"rgba(24, 24, 27, 0.06)",shadow:.2}},Xy={sm:"gooey-nav--sm",md:"gooey-nav--md",lg:"gooey-nav--lg"},Ub=[{label:"Home",href:"#"},{label:"Work",href:"#"},{label:"About",href:"#"},{label:"Contact",href:"#"}],Vs=32,ih=4,ir=72,Ob=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,kb=`#version 300 es
precision highp float;

uniform vec2 uSize;
uniform float uRatio;
uniform vec4 uPills[${ih}];
uniform vec4 uHover;
uniform vec4 uDrops[${Vs}];
uniform vec2 uTails[${Vs}];
uniform vec3 uTints[${Vs}];
uniform int uCount;
uniform float uSmooth;
uniform vec3 uPill;
uniform vec4 uHoverColor;
uniform float uShadow;

out vec4 outColor;

float sdPill(vec2 p, vec4 box) {
  vec2 extent = max(box.zw, vec2(0.0));
  float r = min(extent.x, extent.y);
  vec2 q = abs(p - box.xy) - extent + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

vec4 blend(vec4 a, vec4 b, float k) {
  float h = clamp(0.5 + 0.5 * (b.w - a.w) / k, 0.0, 1.0);
  return vec4(mix(b.rgb, a.rgb, h), mix(b.w, a.w, h) - k * h * (1.0 - h));
}

vec4 field(vec2 p) {
  vec4 shape = vec4(uPill, 1e5);
  for (int i = 0; i < ${ih}; i++) {
    vec4 pill = uPills[i];
    if (pill.z <= 0.0) continue;
    shape = blend(shape, vec4(uPill, sdPill(p, pill)), uSmooth);
  }
  for (int i = 0; i < ${Vs}; i++) {
    if (i >= uCount) break;
    vec4 drop = uDrops[i];
    if (drop.z <= 0.0) continue;
    float d = sdCapsule(p, drop.xy, drop.xy - uTails[i], drop.z);
    if (d > shape.w + uSmooth) continue;
    shape = blend(shape, vec4(uTints[i], d), uSmooth);
  }
  return shape;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uSize.y * uRatio - gl_FragCoord.y) / uRatio;
  vec4 shape = field(p);
  float d = shape.w;
  float aa = max(fwidth(d), 0.35);
  float body = clamp(0.5 - d / aa, 0.0, 1.0);

  vec2 grad = vec2(dFdx(d), -dFdy(d));
  vec2 n = length(grad) > 0.0001 ? normalize(grad) : vec2(0.0, 1.0);
  float rim = (1.0 - smoothstep(0.0, 1.6, -d)) * max(0.0, -n.y) * 0.3;
  vec3 fill = mix(shape.rgb, vec3(1.0), rim) * (1.0 - 0.06 * max(0.0, n.y) * (1.0 - smoothstep(0.0, 6.0, -d)));

  float lifted = field(p - vec2(0.0, 3.0)).w;
  float shadow = (1.0 - smoothstep(-3.0, 9.0, lifted)) * uShadow * (1.0 - body);

  float hover = clamp(0.5 - sdPill(p, uHover) / aa, 0.0, 1.0) * uHoverColor.a;

  vec4 color = vec4(0.0, 0.0, 0.0, shadow);
  color = vec4(uHoverColor.rgb * hover, hover) + color * (1.0 - hover);
  color = vec4(fill * body, body) + color * (1.0 - body);
  outColor = color;
}
`,Am=s=>{const e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(s).trim());if(e){const n=e[1].length===3?e[1].replace(/./g,r=>r+r):e[1];return[0,2,4].map(r=>parseInt(n.slice(r,r+2),16)/255).concat(1)}const t=/rgba?\(([^)]+)\)/i.exec(String(s));if(t){const n=t[1].split(",").map(r=>parseFloat(r));return[n[0]/255,n[1]/255,n[2]/255,n[3]??1]}return[1,1,1,1]},Bb=s=>.2126*s[0]+.7152*s[1]+.0722*s[2]>.55?"#18161d":"#ffffff",wl=s=>Math.min(1,Math.max(0,s)),zb=s=>{const e=wl(s);return e<.5?4*e*e*e:1-(-2*e+2)**3/2},Yy=(s,e,t,n,r)=>{const a=1-r;return a*a*a*s+3*a*a*r*e+3*a*r*r*t+r*r*r*n},Vb=(s,e,t,n)=>{if(t<=.5||n<=.5)return"";const r=Math.min(t,n)/2;return`M${s+r},${e}H${s+t-r}A${r},${r} 0 0 1 ${s+t},${e+r}V${e+n-r}A${r},${r} 0 0 1 ${s+t-r},${e+n}H${s+r}A${r},${r} 0 0 1 ${s},${e+n-r}V${e+r}A${r},${r} 0 0 1 ${s+r},${e}Z`},qy=(s,e,t)=>{const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n},Hb=["uSize","uRatio","uPills","uHover","uDrops","uTails","uTints","uCount","uSmooth","uPill","uHoverColor","uShadow"],Gb=s=>{const e=s.createProgram();if(s.attachShader(e,qy(s,s.VERTEX_SHADER,Ob)),s.attachShader(e,qy(s,s.FRAGMENT_SHADER,kb)),s.linkProgram(e),!s.getProgramParameter(e,s.LINK_STATUS))return s.deleteProgram(e),null;const t=Object.fromEntries(Hb.map(r=>[r,s.getUniformLocation(e,r)])),n=s.createBuffer();return s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),s.STATIC_DRAW),{program:e,uniforms:t,buffer:n,position:s.getAttribLocation(e,"aPosition")}},Wb=({items:s=Ub,initialActiveIndex:e=0,activeIndex:t,onChange:n,theme:r="dark",color:a,activeTextColor:l,colors:c=[],size:f="md",frame:h=!0,animationTime:p=600,particleCount:_=15,timeVariance:m=300,spread:g=56,gooeyness:S=.5,wobble:E=.5,hoverEffect:x=!0,ariaLabel:y="Navigation",className:C="",style:O})=>{const[A,b]=yt.useState(e),R=Math.min(Math.max(0,t??A),Math.max(0,s.length-1)),N=yt.useRef(null),T=yt.useRef(null),L=yt.useRef(null),B=yt.useRef(null),Z=yt.useRef(null),G=yt.useRef(null),ie=yt.useRef(R);ie.current=R;const X=r==="light"?"light":"dark",j=a||Tm[X].color,z=Am(j),V={animationTime:p,particleCount:_,timeVariance:m,spread:g,gooeyness:S,wobble:E,hoverEffect:x,pillRgb:z,tints:c.map(Am),hoverRgb:Am(Tm[X].hover),shadow:Tm[X].shadow},Q=yt.useRef(V);Q.current=V;const Y=k=>{k!==R&&(t===void 0&&b(k),n?.(k,s[k]))};Ib(()=>{const k=N.current,ve=T.current,De=L.current,se=B.current,ke=Z.current;if(!k||!ve||!De||!se||!ke)return;const ee=window.matchMedia("(prefers-reduced-motion: reduce)").matches,te=ve.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1}),Pe=te?Gb(te):null;ke.style.display=Pe?"none":"block",ve.style.display=Pe?"block":"none";const Oe={width:0,height:0};let ze=[],qe=-1;const st=new Map,Ke=[],$e={x:0,y:0,w:0,h:0,alpha:0,index:-1},be=new Float32Array(ih*4),fe=new Float32Array(Vs*4),Et=new Float32Array(Vs*2),Ze=new Float32Array(Vs*3);let it=0,Qe=0,vt=!1;const q=()=>{const Se=k.getBoundingClientRect(),xe=Math.min(window.devicePixelRatio||1,2);Oe.width=Se.width,Oe.height=Se.height;const me=Se.width+ir*2,Re=Se.height+ir*2;Object.assign(ve.style,{left:`${-ir}px`,top:`${-ir}px`,width:`${me}px`,height:`${Re}px`});const Ge=Math.max(1,Math.round(me*xe)),K=Math.max(1,Math.round(Re*xe));(ve.width!==Ge||ve.height!==K)&&(ve.width=Ge,ve.height=K),ze=Array.from(De.children).map(Ue=>{const ge=Ue.getBoundingClientRect();return{x:ge.left-Se.left,y:ge.top-Se.top,w:ge.width,h:ge.height}})},We=(Se,xe,me)=>{const Re=(Ue,ge)=>{let Ve=1e5;const ye=H=>{const oe=wl(.5+.5*(H-Ve)/me);Ve=H+(Ve-H)*oe-me*oe*(1-oe)};for(const H of Se){const oe=Math.min(H.hw,H.hh),ne=Math.abs(Ue-H.cx)-H.hw+oe,Be=Math.abs(ge-H.cy)-H.hh+oe;ye(Math.hypot(Math.max(ne,0),Math.max(Be,0))+Math.min(Math.max(ne,Be),0)-oe)}for(const H of xe){const oe=Ue-H.x,ne=ge-H.y,Be=-H.tx,_e=-H.ty,ae=Be*Be+_e*_e,Te=ae>1e-4?wl((oe*Be+ne*_e)/ae):0,Ye=Math.hypot(oe-Be*Te,ne-_e*Te)-H.r;Ye>Ve+me||ye(Ye)}return Ve},K=[];for(let Ue=0;Ue<Oe.height;Ue+=1){const ge=Ue+.5;let Ve=Re(0,ge),ye=Ve<0?0:null;for(let H=2;H<=Oe.width+2;H+=2){const oe=Re(Math.min(H,Oe.width),ge);if(Ve<0!=oe<0){const ne=H-2+2*Ve/(Ve-oe);oe<0?ye=ne:ye!==null&&(K.push(`M${ye.toFixed(1)},${Ue}H${ne.toFixed(1)}V${Ue+1}H${ye.toFixed(1)}Z`),ye=null)}Ve=oe}ye!==null&&K.push(`M${ye.toFixed(1)},${Ue}H${Oe.width}V${Ue+1}H${ye.toFixed(1)}Z`)}return K.join("")},Le=Se=>(st.has(Se)||st.set(Se,{mass:0,scale:0,velocity:0,outgoing:0}),st.get(Se)),F=(Se,xe)=>{const me=ze[Se];if(!me||xe<=.002)return null;const Re=me.h*Math.min(1.08,.42+.58*Math.sqrt(Math.max(0,xe))),Ge=Math.max(Re,me.w*Math.max(0,xe)**.75);return{x:me.x+me.w/2-Ge/2,y:me.y+me.h/2-Re/2,w:Ge,h:Re}},w=(Se,xe,me,Re)=>{const Ge=Q.current,K=ze[xe];if(!K)return;const Ue=Math.max(0,Ge.spread),ge=K.x+K.w/2+(Math.random()-.5)*K.w*.45,Ve=K.y+K.h/2+(Math.random()-.5)*K.h*.2,ye=Math.max(.15,Ge.animationTime/1e3),H=(Math.random()-.5)*(Math.max(0,Ge.timeVariance)/1e3),oe=Math.max(.15,ye*(.62+Math.random()*.32)+H*.6),ne=Math.random()*Math.PI*2,Be=Math.random()*Math.PI*2,_e=Ue*(.7+Math.random()*.6),ae=Ue*(.55+Math.random()*.55),Te=Math.min(oe/3,.12);Se.index=xe,Se.start=me,Se.duration=oe,Se.path=[Se.x,Se.y,Re?Se.x+Math.cos(ne)*_e*1.6:Se.x+Se.vx*Te,Re?Se.y+Math.sin(ne)*_e*1.6:Se.y+Se.vy*Te,ge+Math.cos(Be)*ae*1.5,Ve+Math.sin(Be)*ae*1.5,ge,Ve]},$=(Se,xe,me)=>{const Re=Q.current,Ge=st.get(Se),K=ze[Se];if(!Ge||!K||!ze[xe])return;const Ue=Ge.mass-Ge.outgoing;if(Ue<=.002)return;const ge=Vs-Ke.length,Ve=Math.min(ge,Math.max(1,Math.round(Math.max(1,Re.particleCount)*Ue)));if(Ve<=0)return;const ye=Math.max(.15,Re.animationTime/1e3)*.16;for(let H=0;H<Ve;H++){const oe=Ue/Ve;Ge.outgoing+=oe,Ke.push({x:K.x+K.w/2+(Math.random()-.5)*K.w*.6,y:K.y+K.h/2+(Math.random()-.5)*K.h*.3,vx:0,vy:0,mass:oe,size:.8+Math.random()*.4,given:0,source:Se,index:xe,leave:me+Math.random()*ye*1e3,emerged:0,absorbed:0,state:"waiting",tint:Re.tints.length?Re.tints[Math.floor(Math.random()*Re.tints.length)]:null})}},W=()=>{const Se=Q.current,xe=ze[qe]?.h??ze[0]?.h??36,me=xe*(.18+.5*wl(Se.gooeyness)),Re=[],Ge=[];for(const[ne,Be]of st){const _e=F(ne,Be.scale);_e&&Re.push({cx:_e.x+_e.w/2,cy:_e.y+_e.h/2,hw:_e.w/2,hh:_e.h/2})}for(const ne of Ke){if(ne.state==="waiting")continue;const Be=.26*xe*ne.size*Math.min(ne.emerged,1-ne.absorbed);if(Be<=.05)continue;const _e=Math.hypot(ne.vx,ne.vy),ae=Math.min(Be*1.1,_e*.018);Ge.push({x:ne.x,y:ne.y,r:Be,tx:_e>.01?ne.vx/_e*ae:0,ty:_e>.01?ne.vy/_e*ae:0,tint:ne.tint})}if(Re.length===1&&!Ge.length){const ne=Re[0];se.style.clipPath=`path('${Vb(ne.cx-ne.hw,ne.cy-ne.hh,ne.hw*2,ne.hh*2)}')`}else se.style.clipPath=`path('${We(Re,Ge,me)||"M0,0Z"}')`;if(se.style.visibility="visible",!Pe||!te){const ne=F(qe,1);ne&&(ke.style.transform=`translate(${ne.x.toFixed(2)}px, ${ne.y.toFixed(2)}px)`,ke.style.width=`${ne.w}px`,ke.style.height=`${ne.h}px`),ke.style.opacity=ne?"1":"0";return}let Ue=0;for(const ne of Re){if(Ue>=ih)break;be[Ue*4]=ne.cx+ir,be[Ue*4+1]=ne.cy+ir,be[Ue*4+2]=ne.hw,be[Ue*4+3]=ne.hh,Ue+=1}be.fill(0,Ue*4);let ge=0;for(const ne of Ge){if(ge>=Vs)break;fe[ge*4]=ne.x+ir,fe[ge*4+1]=ne.y+ir,fe[ge*4+2]=ne.r,fe[ge*4+3]=0,Et[ge*2]=ne.tx,Et[ge*2+1]=ne.ty;const Be=ne.tint||Se.pillRgb;Ze[ge*3]=Be[0],Ze[ge*3+1]=Be[1],Ze[ge*3+2]=Be[2],ge+=1}const{program:Ve,uniforms:ye,buffer:H,position:oe}=Pe;te.viewport(0,0,ve.width,ve.height),te.clearColor(0,0,0,0),te.clear(te.COLOR_BUFFER_BIT),te.useProgram(Ve),te.bindBuffer(te.ARRAY_BUFFER,H),te.enableVertexAttribArray(oe),te.vertexAttribPointer(oe,2,te.FLOAT,!1,0,0),te.uniform2f(ye.uSize,Oe.width+ir*2,Oe.height+ir*2),te.uniform1f(ye.uRatio,ve.width/Math.max(1,Oe.width+ir*2)),te.uniform4fv(ye.uPills,be),te.uniform4f(ye.uHover,$e.x+ir,$e.y+ir,$e.w/2,$e.h/2),te.uniform4fv(ye.uDrops,fe),te.uniform2fv(ye.uTails,Et),te.uniform3fv(ye.uTints,Ze),te.uniform1i(ye.uCount,ge),te.uniform1f(ye.uSmooth,me),te.uniform3f(ye.uPill,Se.pillRgb[0],Se.pillRgb[1],Se.pillRgb[2]),te.uniform4f(ye.uHoverColor,Se.hoverRgb[0],Se.hoverRgb[1],Se.hoverRgb[2],Se.hoverRgb[3]*$e.alpha),te.uniform1f(ye.uShadow,Se.shadow),te.drawArrays(te.TRIANGLE_STRIP,0,4)},de=Se=>{it=0;const xe=Q.current,me=Math.min(.05,(Se-Qe)/1e3||0);Qe=Se;const Re=.09,Ge=.12;for(let _e=Ke.length-1;_e>=0;_e--){const ae=Ke[_e];if(ae.state==="waiting"){if(Se<ae.leave)continue;ae.state="flying",w(ae,ae.index,Se,!0)}if(ae.state==="flying"){ae.emerged=Math.min(1,ae.emerged+me/Re);const Te=st.get(ae.source);if(Te&&ae.given<ae.mass){const pt=Math.min(ae.mass*(me/Re),ae.mass-ae.given);Te.mass=Math.max(0,Te.mass-pt),Te.outgoing=Math.max(0,Te.outgoing-pt),ae.given+=pt}const Ye=wl((Se-ae.start)/1e3/ae.duration),lt=zb(Ye),[dt,At,Vt,Rt,Pt,St,Wt,Ht]=ae.path,et=Yy(dt,Vt,Pt,Wt,lt),He=Yy(At,Rt,St,Ht,lt);me>0&&(ae.vx=(et-ae.x)/me,ae.vy=(He-ae.y)/me),ae.x=et,ae.y=He,Ye>=1&&(ae.state="absorbing")}if(ae.state==="absorbing"){const Te=Math.min(1-ae.absorbed,me/Ge);ae.absorbed+=Te,ae.vx*=.8,ae.vy*=.8;const Ye=Le(ae.index);Ye.mass=Math.min(1,Ye.mass+ae.mass*Te),ae.absorbed>=1&&Ke.splice(_e,1)}}const K=ee?1:1-.72*wl(xe.wobble),Ue=26,ge=Math.max(1,Math.ceil(me/(1/240))),Ve=me/ge;for(const[_e,ae]of st){for(let Te=0;Te<ge;Te++)ae.velocity+=(Ue*Ue*(ae.mass-ae.scale)-2*K*Ue*ae.velocity)*Ve,ae.scale+=ae.velocity*Ve;_e!==qe&&ae.mass<=.002&&ae.outgoing<=.002&&Math.abs(ae.scale)<.004&&st.delete(_e)}if($e.index>=0&&ze[$e.index]){const _e=ze[$e.index],ae=1-Math.exp(-me/.06);$e.x+=(_e.x+_e.w/2-$e.x)*ae,$e.y+=(_e.y+_e.h/2-$e.y)*ae,$e.w+=(_e.w-$e.w)*ae,$e.h+=(_e.h-$e.h)*ae}const ye=xe.hoverEffect&&$e.index>=0&&$e.index!==qe?1:0;$e.alpha+=(ye-$e.alpha)*(1-Math.exp(-me/.08)),W();const H=st.get(qe),oe=Ke.length===0&&st.size===1&&H&&Math.abs(H.mass-H.scale)<8e-4&&Math.abs(H.velocity)<.004,ne=ze[$e.index],Be=Math.abs(ye-$e.alpha)>.003||ne&&Math.abs(ne.x+ne.w/2-$e.x)+Math.abs(ne.w-$e.w)>.1;!oe||Be?it=requestAnimationFrame(de):(H.mass=1,H.scale=1,H.velocity=0,$e.alpha=ye,W())},Ne=()=>{it||vt||(Qe=performance.now(),it=requestAnimationFrame(de))},Fe=Se=>{st.clear(),Ke.length=0,qe=Se;const xe=Le(Se);xe.mass=1,xe.scale=1,xe.velocity=0,W()},Ee=(Se,xe)=>{if(Se===qe)return;if(!ze[Se]||ee||qe<0){Fe(Se);return}const me=performance.now();qe=Se,Le(Se);for(const Re of Ke)Re.index=Se,Re.state==="flying"&&w(Re,Se,me,!1),Re.state==="absorbing"&&(Re.state="flying",Re.mass*=1-Re.absorbed,Re.absorbed=0,w(Re,Se,me,!1));for(const Re of[...st.keys()])Re!==Se&&$(Re,Se,me);Ne()},we=Se=>{const xe=Se.target.closest("[data-gooey-index]");if(!xe||!De.contains(xe))return;const me=Number(xe.dataset.gooeyIndex),Re=ze[me];Re&&($e.alpha<.01&&($e.x=Re.x+Re.w/2,$e.y=Re.y+Re.h/2,$e.w=Re.w,$e.h=Re.h),$e.index=me,Ne())},Xe=()=>{$e.index=-1,Ne()},Je=new ResizeObserver(()=>{q(),Ke.length?W():Fe(qe<0?ie.current:qe)});return Je.observe(k),Je.observe(De),De.addEventListener("pointerover",we),De.addEventListener("pointerleave",Xe),q(),Fe(ie.current),document.fonts?.ready.then(()=>{vt||(q(),Ke.length||Fe(qe))}),G.current={go:Se=>Ee(Se),refresh:()=>{W(),Ne()}},()=>{vt=!0,cancelAnimationFrame(it),Je.disconnect(),De.removeEventListener("pointerover",we),De.removeEventListener("pointerleave",Xe),te&&Pe&&(te.deleteBuffer(Pe.buffer),te.deleteProgram(Pe.program)),G.current=null}},[s.length]),yt.useEffect(()=>{G.current?.go(R)},[R]),yt.useEffect(()=>{G.current?.refresh()},[j,X,S,f,h]);const I=l||Bb(z),U=k=>s.map((ve,De)=>{const se=nt.jsxs(nt.Fragment,{children:[ve.icon&&nt.jsx("span",{className:"gooey-nav__icon",children:ve.icon}),ve.label&&nt.jsx("span",{className:"gooey-nav__label",children:ve.label})]});if(!k)return nt.jsx("li",{className:"gooey-nav__item",children:nt.jsx("span",{className:"gooey-nav__link",children:se})},De);const ke={className:"gooey-nav__link","aria-current":De===R?"page":void 0,onClick:ee=>{(!ve.href||ve.href==="#")&&ee.preventDefault(),Y(De)}};return nt.jsx("li",{className:"gooey-nav__item","data-gooey-index":De,"data-active":De===R?"":void 0,children:ve.href?nt.jsx("a",{href:ve.href,...ke,children:se}):nt.jsx("button",{type:"button",...ke,children:se})},De)});return nt.jsxs("nav",{className:`gooey-nav ${Xy[f]??Xy.md}${h?" gooey-nav--framed":""} ${C}`.trim(),"aria-label":y,style:{...Fb[X],"--gn-pill":j,"--gn-active-ink":I,...O},children:[h&&nt.jsx("span",{className:"gooey-nav__rim"}),nt.jsxs("div",{ref:N,className:"gooey-nav__stage",children:[nt.jsx("canvas",{ref:T,className:"gooey-nav__canvas","aria-hidden":"true"}),nt.jsx("span",{ref:Z,className:"gooey-nav__fallback","aria-hidden":"true"}),nt.jsx("ul",{ref:L,className:"gooey-nav__list",children:U(!0)}),nt.jsx("ul",{ref:B,className:"gooey-nav__list gooey-nav__list--active","aria-hidden":"true",children:U(!1)})]})]})},$y=[{label:"Overview",href:"#overview",id:"overview"},{label:"Activity",href:"#threat-overview",id:"threat-overview"},{label:"Alerts",href:"#incident-lab",id:"incident-lab"},{label:"Model",href:"#isolation-forest",id:"isolation-forest"},{label:"Sources",href:"#demo-ingress",id:"demo-ingress"},{label:"Safe test",href:"#attack-lab",id:"attack-lab"},{label:"Capture",href:"#live-sniffer",id:"live-sniffer"},{label:"Blast Radius",href:"#blast-radius",id:"blast-radius"},{label:"Exposure",href:"#exposure",id:"exposure"}],Ky=()=>window.location.hash.slice(1)||"overview";function Xb(){const[s,e]=yt.useState(Ky),t=Math.max(0,$y.findIndex(n=>n.id===s));return yt.useEffect(()=>{const n=r=>e(r.detail?.id||Ky());return window.addEventListener("hashchange",n),window.addEventListener("dashboardchange",n),()=>{window.removeEventListener("hashchange",n),window.removeEventListener("dashboardchange",n)}},[]),nt.jsx("div",{className:"dashboard-nav-scroll",children:nt.jsx(Wb,{items:$y,activeIndex:t,onChange:(n,r)=>e(r.id),ariaLabel:"Dashboard sections",theme:"dark",color:"#ff795c",activeTextColor:"#171311",colors:["#ff795c","#d48c71","#f3c4aa"],size:"sm",frame:!0,animationTime:540,particleCount:16,className:"dashboard-nav",style:{"--gn-frame":"rgba(20, 21, 23, 0.96)","--gn-frame-edge":"rgba(255, 255, 255, 0.09)","--gn-frame-highlight":"rgba(255, 255, 255, 0.035)","--gn-frame-shadow":"0 3px 12px rgba(0, 0, 0, 0.14)"}})})}const ol=24,Yb=Math.PI*2,qb=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,$b=`#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform float uPx;
uniform float uSpot;
uniform vec2 uEntry;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform vec2 uWindow;
uniform float uThickness;
uniform float uGlow;
out vec4 outColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float loopPosition(vec2 p, vec2 b, float r) {
  vec2 inner = b - r;
  float arc = 1.5707963 * r;
  float quarter = inner.x + inner.y + arc;
  vec2 a = abs(p);
  vec2 q = a - inner;
  float s = q.x > 0.0 && q.y > 0.0
    ? inner.y + atan(q.y, q.x) * r
    : (q.x > q.y ? min(a.y, inner.y) : inner.y + arc + inner.x - min(a.x, inner.x));
  if (p.x < 0.0) s = p.y >= 0.0 ? 2.0 * quarter - s : 2.0 * quarter + s;
  else if (p.y < 0.0) s = 4.0 * quarter - s;
  return s / max(4.0 * quarter, 0.0001);
}

float lobe(float position, float center) {
  float gap = abs(fract(position - center + 0.5) - 0.5);
  return 1.0 - smoothstep(uWindow.x, uWindow.x + uWindow.y, gap);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = roundedBox(p, uHalf, uRadius);
  float position = loopPosition(p, uHalf, uRadius);
  float key = lobe(position, uSpot);
  float back = lobe(position, uSpot + 0.5);
  float streak = key + back * 0.45;
  float width = max(uThickness * uPx * mix(1.0, max(key, back), 0.6), 0.35);
  float band = smoothstep(-width - 0.6, -width + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float hair = smoothstep(-uPx - 0.6, -uPx + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float inside = 1.0 - smoothstep(-0.6, 0.6, d);
  vec2 pool = (p - uEntry) / (uHalf.y * vec2(1.6, 1.1));
  float glow = streak * 0.2 * exp(-abs(d + width * 0.5) / (5.0 * uPx)) + inside * 0.08 * exp(-dot(pool, pool));
  float light = clamp((band * streak + glow * uGlow) * uIntensity, 0.0, 1.0);
  vec4 base = vec4(uBaseColor, 1.0) * hair * 0.6;
  outColor = vec4(uLineColor, 1.0) * light + base * (1.0 - light);
}`,Kb=["uCenter","uHalf","uRadius","uPx","uSpot","uEntry","uLineColor","uBaseColor","uIntensity","uWindow","uThickness","uGlow"],bm=(s,e,t)=>Math.min(t,Math.max(e,s)),vc=s=>s-Math.floor(s),Zy=(s,e,t,n,r)=>{const a=t-r,l=n-r,c=Math.PI/2*r,f=a+l+c,h=Math.abs(s),p=Math.abs(e),_=h-a,m=p-l;let g;return _>0&&m>0?g=l+Math.atan2(m,_)*r:_>m?g=Math.min(p,l):g=l+c+a-Math.min(h,a),s<0?g=e>=0?2*f-g:2*f+g:e<0&&(g=4*f-g),vc(g/Math.max(4*f,1e-4))},Zb=(s,e,t,n)=>{const r=e-n,a=t-n,l=Math.PI/2*n,c=r+a+l;let f=vc(s)*4*c,h=1,p=1;f>3*c?(f=4*c-f,p=-1):f>2*c?(f-=2*c,h=-1,p=-1):f>c&&(f=2*c-f,h=-1);let _=r-(f-a-l),m=t;if(f<=a)_=e,m=f;else if(f<=a+l){const g=(f-a)/Math.max(n,1e-4);_=r+Math.cos(g)*n,m=a+Math.sin(g)*n}return[_*h,m*p]},Jy=(s,e,t)=>{const n=s.createShader(e);return n?(s.shaderSource(n,t),s.compileShader(n),s.getShaderParameter(n,s.COMPILE_STATUS)?n:(s.deleteShader(n),null)):null},Jb=s=>{const e=Jy(s,s.VERTEX_SHADER,qb),t=Jy(s,s.FRAGMENT_SHADER,$b),n=s.createProgram();return!e||!t||!n?null:(s.attachShader(n,e),s.attachShader(n,t),s.bindAttribLocation(n,0,"aPosition"),s.linkProgram(n),s.deleteShader(e),s.deleteShader(t),s.getProgramParameter(n,s.LINK_STATUS)?n:(s.deleteProgram(n),null))},Qb=({children:s="Get Started",size:e="lg",radius:t=18,tint:n="#ffffff",tintOpacity:r=.04,blur:a=0,textColor:l="#f5f5f5",lineColor:c="#ffffff",baseColor:f="#525252",intensity:h=1,idleIntensity:p=.35,shineSize:_=10,shineFade:m=34,thickness:g=1.2,glow:S=1,speed:E=.35,followMouse:x=!0,proximity:y=250,autoAnimate:C=!1,disabled:O=!1,onClick:A,className:b="",type:R="button",style:N,hostElement:T,...L})=>{const B=yt.useRef(null),Z=yt.useRef(null),G=yt.useRef(null),ie={radius:Math.max(0,t),lineColor:String(c),baseColor:String(f),intensity:Math.max(0,h),idleIntensity:bm(p,0,1),shineSize:Math.max(0,_),shineFade:Math.max(0,m),thickness:Math.max(0,g),glow:Math.max(0,S),speed:E,followMouse:x,proximity:Math.max(1,y),autoAnimate:C,disabled:O},X=yt.useRef(ie);return X.current=ie,yt.useEffect(()=>{const j=T??B.current,z=Z.current,V=z?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!j||!z||!V)return;const Q=Jb(V);if(!Q)return;const Y={};for(const Le of Kb)Y[Le]=V.getUniformLocation(Q,Le);const I=V.createBuffer(),U=V.createVertexArray();V.bindVertexArray(U),V.bindBuffer(V.ARRAY_BUFFER,I),V.bufferData(V.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),V.STATIC_DRAW),V.enableVertexAttribArray(0),V.vertexAttribPointer(0,2,V.FLOAT,!1,0,0),V.bindVertexArray(null);const k=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ve=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,De=new Map,se={width:1,height:1,ratio:1},ke={x:0,y:0,known:!1},ee={spot:0,level:0,press:0,ready:!1};let te=0,Pe=0,Oe=!0;const ze=Le=>{if(De.has(Le))return De.get(Le);let F=[1,1,1];if(k){k.clearRect(0,0,1,1),k.fillStyle="#000000",k.fillStyle=Le,k.fillRect(0,0,1,1);const[w,$,W]=k.getImageData(0,0,1,1).data;F=[w/255,$/255,W/255]}return De.set(Le,F),F},qe=Le=>Math.min(Le.radius,se.width/2,se.height/2),st=Le=>{const F=qe(Le),w=F*(1-Math.SQRT1_2);return Zy(w-se.width/2,se.height/2-w,se.width/2,se.height/2,F)},Ke=Le=>{if(!Le.followMouse||Le.disabled||!ke.known)return null;const F=j.getBoundingClientRect(),w=F.width/se.width||1,$=se.width/2,W=se.height/2,de=(ke.x-F.left-F.width/2)/w,Ne=(F.top+F.height/2-ke.y)/w,Fe=Math.hypot(Math.max(Math.abs(de)-$,0),Math.max(Math.abs(Ne)-W,0)),Ee=bm(1-Fe/Le.proximity,0,1),we=Ee*Ee*(3-2*Ee),Xe=Zy(de,Ne,$,W,qe(Le));if(Fe>0)return{spot:Xe,near:we};const Je=bm(Math.min($-Math.abs(de),W-Math.abs(Ne))/(W*.8),0,1),Se=st(Le)-de/$*.06-Ne/W*.02,xe=Se-Xe-Math.round(Se-Xe);return{spot:vc(Xe+xe*Je*Je*(3-2*Je)),near:we}},$e=Le=>{const{width:F,height:w}=se,$=z.width/(F+ol*2),W=z.height/(w+ol*2);V.viewport(0,0,z.width,z.height),V.clearColor(0,0,0,0),V.clear(V.COLOR_BUFFER_BIT),V.useProgram(Q),V.uniform2f(Y.uCenter,(ol+F/2)*$,(ol+w/2)*W),V.uniform2f(Y.uHalf,F/2*$,w/2*W),V.uniform1f(Y.uRadius,Math.min(Le.radius,F/2,w/2)*$),V.uniform1f(Y.uPx,se.ratio);const de=Math.min(Le.radius,F/2,w/2),[Ne,Fe]=Zb(ee.spot,F/2,w/2,de),Ee=1-Math.min(.35*(w/2),Math.hypot(Ne,Fe))/Math.max(Math.hypot(Ne,Fe),1e-4);V.uniform1f(Y.uSpot,ee.spot),V.uniform2f(Y.uEntry,Ne*Ee*$,Fe*Ee*W),V.uniform3fv(Y.uLineColor,ze(Le.lineColor)),V.uniform3fv(Y.uBaseColor,ze(Le.baseColor)),V.uniform1f(Y.uIntensity,Le.intensity*(ee.level+ee.press*.8)),V.uniform2f(Y.uWindow,Le.shineSize/360+ee.press*.06,Le.shineFade/360+1e-4),V.uniform1f(Y.uThickness,Le.thickness),V.uniform1f(Y.uGlow,Le.glow),V.bindVertexArray(U),V.drawArrays(V.TRIANGLES,0,3),V.bindVertexArray(null)},be=Le=>{if(te=0,!Oe)return;const F=X.current,w=Pe?Math.min(.05,(Le-Pe)/1e3):1/60;Pe=Le;const $=Ke(F),W=F.autoAnimate&&!ve,de=!!$&&$.near>0;ee.ready||(ee.spot=st(F),ee.level=F.autoAnimate?1:F.idleIntensity,ee.ready=!0);let Ne=0;W&&!de?ee.spot=vc(ee.spot+F.speed/Yb*w):(Ne=(de?$.spot:st(F))-ee.spot,Ne-=Math.round(Ne),ee.spot=vc(ee.spot+Ne*(1-Math.exp(-w*8))));const Fe=F.autoAnimate?1:F.idleIntensity+(1-F.idleIntensity)*($?$.near:0);ee.level+=(Fe-ee.level)*(1-Math.exp(-w*7)),ee.press*=Math.exp(-w*5),$e(F),Math.abs(Ne)>2e-4||Math.abs(Fe-ee.level)>.001||ee.press>.002||W&&!de?te=requestAnimationFrame(be):Pe=0},fe=()=>{!te&&Oe&&(te=requestAnimationFrame(be))},Et=Le=>{const F=Le?.borderBoxSize?.[0];se.width=Math.max(1,F?F.inlineSize:j.offsetWidth),se.height=Math.max(1,F?F.blockSize:j.offsetHeight),se.ratio=Math.min(window.devicePixelRatio||1,3),z.width=Math.max(1,Math.round((se.width+ol*2)*se.ratio)),z.height=Math.max(1,Math.round((se.height+ol*2)*se.ratio)),ee.ready&&$e(X.current),fe()},Ze=Le=>{ke.x=Le.clientX,ke.y=Le.clientY,ke.known=!0,fe()},it=Le=>{ke.x=Le.clientX,ke.y=Le.clientY,ke.known=!0,X.current.disabled||(ee.press=1),fe()},Qe=Le=>{Le.pointerType!=="mouse"&&(ke.known=!1,fe())},vt=()=>{ke.known=!1,fe()},q=new ResizeObserver(Le=>Et(Le[Le.length-1]));q.observe(j);const We=new IntersectionObserver(Le=>{Oe=Le.some(F=>F.isIntersecting),Oe&&(Pe=0,fe())});return We.observe(j),window.addEventListener("pointermove",Ze,{passive:!0}),window.addEventListener("pointerup",Qe,{passive:!0}),window.addEventListener("pointercancel",Qe,{passive:!0}),document.documentElement.addEventListener("pointerleave",vt),j.addEventListener("pointerdown",it),Et(),G.current=fe,()=>{cancelAnimationFrame(te),G.current=null,q.disconnect(),We.disconnect(),window.removeEventListener("pointermove",Ze),window.removeEventListener("pointerup",Qe),window.removeEventListener("pointercancel",Qe),document.documentElement.removeEventListener("pointerleave",vt),j.removeEventListener("pointerdown",it),V.deleteBuffer(I),V.deleteVertexArray(U),V.deleteProgram(Q),V.getExtension("WEBGL_lose_context")?.loseContext()}},[T]),yt.useEffect(()=>{G.current?.()}),T?nt.jsx("canvas",{ref:Z,className:"specular-button__light specular-button__host-light","aria-hidden":"true"}):nt.jsxs("button",{ref:B,type:R,disabled:O,onClick:A,className:`specular-button specular-button--${e}${b?` ${b}`:""}`,style:{"--sb-radius":`${t}px`,"--sb-tint":n,"--sb-tint-opacity":r,"--sb-blur":`${a}px`,"--sb-text-color":l,...N},...L,children:[nt.jsx("canvas",{ref:Z,className:"specular-button__light","aria-hidden":"true"}),nt.jsx("span",{className:"specular-button__label",children:s})]})},jb="[data-specular]";function eR(){return yt.useEffect(()=>{const s=[];return document.querySelectorAll(jb).forEach(e=>{const t=Number.parseFloat(window.getComputedStyle(e).borderTopLeftRadius)||0,n=document.createElement("span");n.className="specular-button__mount",e.appendChild(n);const r=r1.createRoot(n);r.render(nt.jsx(Qb,{hostElement:e,radius:t,lineColor:"#ffc1ae",baseColor:"#754e43",intensity:.82,idleIntensity:.12,shineSize:12,shineFade:30,thickness:1.1,glow:.72,proximity:160})),s.push({button:e,mount:n,root:r})}),()=>{s.forEach(({button:e,mount:t,root:n})=>{n.unmount(),t.remove()})}},[]),null}const tR=6,Ci=(s,e,t)=>Math.min(t,Math.max(e,s)),nR=s=>{const e=String(s||"").trim(),t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e);if(t){const r=t[1].length===3?t[1].replace(/./g,a=>a+a):t[1];return[0,2,4].map(a=>parseInt(r.slice(a,a+2),16))}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(e);return n?[n[1],n[2],n[3]].map(r=>Ci(Math.round(parseFloat(r)),0,255)):null},vo=s=>typeof s=="number"?`${s}px`:s,Rm=s=>{const e=Ci(s,0,1);return e*e*e*(e*(e*6-15)+10)},_o=(s,e,t,n,r,a)=>{const l=`v${e}`,c=Math.max(1,Math.ceil(a/(1/240))),f=a/c;for(let p=0;p<c;p++)s[l]+=(n*n*(t-s[e])-2*r*n*s[l])*f,s[e]+=s[l]*f;const h=Math.abs(t-s[e])<.001&&Math.abs(s[l])<.01;return h&&(s[e]=t,s[l]=0),!h},iR=({imageSrc:s,altText:e="Tilted card image",captionText:t="",containerHeight:n="300px",containerWidth:r="100%",imageHeight:a="300px",imageWidth:l="300px",scaleOnHover:c=1.05,rotateAmplitude:f=12,showTooltip:h=!0,overlayContent:p=null,displayOverlayContent:_=!1,overlayDepth:m=30,children:g,backContent:S=null,flipOnClick:E=!0,flipped:x,onFlip:y,radius:C=15,perspective:O=800,smoothness:A=.6,glare:b=.5,glareColor:R="#ffffff",shadow:N=.5,parallax:T=1,axis:L="both",reverse:B=!1,trackWindow:Z=!1,floating:G=!1,gyroscope:ie=!0,intro:X=!0,introDelay:j=0,onClick:z,className:V="",style:Q})=>{const Y=yt.useRef(null),I=yt.useRef(null),U=yt.useRef(null),k=yt.useRef(null),ve=yt.useRef(null),De=yt.useRef(null),[se,ke]=yt.useState(!1),ee=typeof x=="boolean",te=!!S&&(ee?x:se),Pe={amplitude:Ci(f,0,60),scale:Math.max(.5,c),smoothness:Ci(A,0,1),glare:Ci(b,0,1),shadow:Ci(N,0,1),parallax:Math.max(0,T),axis:L,reverse:B,trackWindow:Z,floating:G,gyroscope:ie,intro:X,introDelay:Math.max(0,j),flippable:!!S&&E,interactive:!!S&&E||!!z,flipped:te,tooltip:h&&!!t},Oe=yt.useRef(Pe);Oe.current=Pe,yt.useEffect(()=>{ve.current?.()}),yt.useEffect(()=>{const Ze=Y.current,it=I.current;if(!Ze||!it)return;const Qe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,vt=window.matchMedia("(hover: none) and (pointer: coarse)").matches,q={rx:0,vrx:0,ry:0,vry:0,lift:0,vlift:0,ty:0,vty:0,flip:0,vflip:0,press:0,vpress:0,tip:0,vtip:0,shown:0,vshown:0,tx:0,tyy:0},We={nx:0,ny:0,x:0,y:0,inside:!1,mouse:!1,seen:!1,vx:0,last:0},Le={active:!1,x:0,y:0,moved:!1},F={gamma:0,beta:0,baseGamma:0,baseBeta:0,calibrated:!1,live:!1,asked:!1};let w=1,$=!0,W=-1,de=Math.random()*10,Ne=!1,Fe=0,Ee=0,we=!0;Oe.current.intro&&!Qe&&($=!1,w=0,q.rx=16,q.ty=22,it.style.opacity="0");const Xe=ae=>{Fe=0;const Te=Oe.current,Ye=Ci((ae-Ee)/1e3||0,0,.05);Ee=Math.max(Ee,ae),de+=Ye;let lt=!1;const dt=Te.amplitude*(Qe?.3:1),At=We.inside&&We.mouse,Vt=Le.active&&!We.mouse,Rt=At||Vt||Te.trackWindow&&We.seen&&!vt;let Pt=0,St=0;Rt?(Pt=We.nx,St=We.ny):F.live&&Te.gyroscope?(Pt=Ci((F.gamma-F.baseGamma)/22,-1,1),St=Ci((F.beta-F.baseBeta)/22,-1,1),F.baseGamma+=(F.gamma-F.baseGamma)*(1-Math.exp(-Ye/4)),F.baseBeta+=(F.beta-F.baseBeta)*(1-Math.exp(-Ye/4)),lt=!0):Te.floating&&!Qe&&we&&(Pt=.32*Math.sin(de*.62)+.12*Math.sin(de*1.31+.7),St=.26*Math.sin(de*.83+1.9)+.1*Math.sin(de*1.57),lt=!0),Te.axis==="horizontal"&&(St=0),Te.axis==="vertical"&&(Pt=0);const Wt=Te.reverse?-1:1,Ht=20*Math.pow(.2,Te.smoothness),et=1-.3*Te.smoothness,He=At||Vt||Ne?1:0;!$&&W>=0&&ae>=W&&($=!0);const pt=$||!Te.intro||Qe;lt=_o(q,"rx",pt?-St*dt*Wt:q.rx,Ht,et,Ye)||lt,lt=_o(q,"ry",pt?Pt*dt*Wt:q.ry,Ht,et,Ye)||lt,lt=_o(q,"ty",pt?Te.floating&&!Rt&&!Qe?-4*Math.sin(de*.9):0:q.ty,Ht*.8,.9,Ye)||lt,lt=_o(q,"lift",He,Ht,Math.max(et,.85),Ye)||lt,lt=_o(q,"flip",Te.flipped?180:0,Qe?18:9.5,.72,Ye)||lt,lt=_o(q,"press",Le.active&&!Le.moved&&Te.interactive?1:0,26,.8,Ye)||lt,pt&&w<1&&(w=Math.min(1,w+Ye/.45),lt=!0);const Lt=He>0||q.lift>.01;Lt!==Ze.hasAttribute("data-active")&&Ze.toggleAttribute("data-active",Lt);const It=1+(Te.scale-1)*q.lift-.02*q.press,jt=q.rx,Rn=q.ry,Ft=jt*Math.PI/180,tn=Rn*Math.PI/180;it.style.transform=`translate3d(0, ${q.ty.toFixed(2)}px, 0) rotateX(${jt.toFixed(3)}deg) rotateY(${(Rn+q.flip).toFixed(3)}deg) scale(${It.toFixed(4)})`,it.style.opacity=w<1?Rm(w).toFixed(3):"",it.style.setProperty("--tc-px",(Math.sin(tn)*Te.parallax).toFixed(4)),it.style.setProperty("--tc-py",(-Math.sin(Ft)*Te.parallax).toFixed(4));const dn=Math.max(dt,1);it.style.setProperty("--tc-gx",`${(50+Rn/dn*46).toFixed(2)}%`),it.style.setProperty("--tc-gy",`${(50-jt/dn*46).toFixed(2)}%`);const vn=Math.min(1,Math.hypot(jt,Rn)/dn);it.style.setProperty("--tc-glare",(Te.glare*Math.max(q.lift,vn)*(w<1?Rm(w):1)).toFixed(3));const P=U.current;if(P){const Me=Te.shadow*(w<1?Rm(w):1),ue=-Math.sin(tn)*22,le=12+16*q.lift+Math.sin(Ft)*18-q.ty*.6,at=Math.abs(Math.cos(q.flip*Math.PI/180)),ct=It*(.86+.04*q.lift);P.style.transform=`translate3d(${ue.toFixed(2)}px, ${le.toFixed(2)}px, 0) scale(${(ct*(.2+.8*at)).toFixed(4)}, ${ct.toFixed(4)})`,P.style.opacity=(Me*(.6+.4*q.lift)).toFixed(3)}const re=k.current;if(re){const Me=Te.tooltip&&At?1:0;lt=_o(q,"shown",Me,16,1,Ye)||lt;const ue=1-Math.exp(-Ye/.035);q.tx+=(We.x-q.tx)*ue,q.tyy+=(We.y-q.tyy)*ue,Math.abs(We.x-q.tx)+Math.abs(We.y-q.tyy)>.2&&(lt=!0),We.vx*=Math.exp(-Ye/.08),lt=_o(q,"tip",Qe?0:Ci(-We.vx*.012,-14,14),18,.62,Ye)||lt,re.style.transform=`translate3d(${q.tx.toFixed(1)}px, ${q.tyy.toFixed(1)}px, 0) rotate(${q.tip.toFixed(2)}deg)`,re.style.opacity=Math.max(0,q.shown).toFixed(3)}(lt||!pt&&Te.intro)&&we&&(Fe=requestAnimationFrame(Xe))},Je=()=>{Fe||!we||(Ee=performance.now(),Fe=requestAnimationFrame(Xe))};ve.current=Je;const Se=(ae,Te)=>{const Ye=Te.getBoundingClientRect();return{x:ae.clientX-Ye.left,y:ae.clientY-Ye.top,width:Math.max(1,Ye.width),height:Math.max(1,Ye.height)}},xe=ae=>{const Te=Se(ae,Ze),Ye=performance.now(),lt=Math.max(8,Ye-(We.last||Ye-16))/1e3,dt=Te.x-We.x;We.vx+=(dt/lt-We.vx)*.5,We.last=Ye,We.x=Te.x,We.y=Te.y,We.nx=Ci((Te.x-Te.width/2)/(Te.width/2),-1,1),We.ny=Ci((Te.y-Te.height/2)/(Te.height/2),-1,1)},me=ae=>{We.inside=!0,We.mouse=ae.pointerType==="mouse"||ae.pointerType==="pen";const Te=Se(ae,Ze);We.x=Te.x,We.y=Te.y,q.tx=Te.x,q.tyy=Te.y,We.vx=0,xe(ae),Je()},Re=ae=>{if(We.mouse=ae.pointerType==="mouse"||ae.pointerType==="pen",!We.inside&&We.mouse){We.inside=!0;const Te=Se(ae,Ze);We.x=Te.x,We.y=Te.y,q.tx=Te.x,q.tyy=Te.y,We.vx=0}xe(ae),Le.active&&Math.hypot(ae.clientX-Le.x,ae.clientY-Le.y)>tR&&(Le.moved=!0),Je()},Ge=()=>{We.inside=!1,We.vx=0,Je()},K=ae=>{if(We.inside&&We.mouse&&!Ze.contains(ae.target)&&Ge(),!Oe.current.trackWindow||We.inside)return;const Te=Ze.getBoundingClientRect(),Ye=Te.left+Te.width/2,lt=Te.top+Te.height/2;We.seen=!0,We.nx=Ci((ae.clientX-Ye)/Math.max(1,window.innerWidth/2),-1,1),We.ny=Ci((ae.clientY-lt)/Math.max(1,window.innerHeight/2),-1,1),Je()},Ue=()=>{We.seen=!1,Je()},ge=()=>{if(!Oe.current.gyroscope||!vt||F.asked)return;F.asked=!0;const Te=window.DeviceOrientationEvent?.requestPermission;typeof Te=="function"&&Te.call(window.DeviceOrientationEvent).catch(()=>{})},Ve=ae=>{Le.active=!0,Le.moved=!1,Le.x=ae.clientX,Le.y=ae.clientY,We.mouse=ae.pointerType==="mouse"||ae.pointerType==="pen",We.mouse||(We.inside=!0,xe(ae)),ge(),Je()},ye=ae=>{Le.active&&(Le.active=!1,ae.pointerType!=="mouse"&&ae.pointerType!=="pen"&&(We.inside=!1),Je())},H=()=>{Le.active=!1,Le.moved=!0,We.inside=!1,Je()},oe=ae=>{ae.gamma==null||ae.beta==null||(F.gamma=ae.gamma,F.beta=ae.beta,F.calibrated||(F.baseGamma=ae.gamma,F.baseBeta=ae.beta,F.calibrated=!0),F.live=vt,Je())};De.current=()=>!Le.moved;const ne=()=>{Ne=Ze.matches(":focus-visible"),Je()},Be=()=>{Ne=!1,Je()};Ze.addEventListener("pointerenter",me),Ze.addEventListener("pointermove",Re),Ze.addEventListener("pointerleave",Ge),Ze.addEventListener("pointerdown",Ve),Ze.addEventListener("focus",ne),Ze.addEventListener("blur",Be),window.addEventListener("pointerup",ye,{passive:!0}),window.addEventListener("pointercancel",H,{passive:!0}),window.addEventListener("pointermove",K,{passive:!0}),document.documentElement.addEventListener("pointerleave",Ue),window.addEventListener("deviceorientation",oe);const _e=new IntersectionObserver(ae=>{we=ae.some(Te=>Te.isIntersecting),we&&!$&&W<0&&(W=performance.now()+Oe.current.introDelay),Je()});return _e.observe(Ze),Je(),()=>{cancelAnimationFrame(Fe),ve.current=null,De.current=null,_e.disconnect(),Ze.removeEventListener("pointerenter",me),Ze.removeEventListener("pointermove",Re),Ze.removeEventListener("pointerleave",Ge),Ze.removeEventListener("pointerdown",Ve),Ze.removeEventListener("focus",ne),Ze.removeEventListener("blur",Be),window.removeEventListener("pointerup",ye),window.removeEventListener("pointercancel",H),window.removeEventListener("pointermove",K),document.documentElement.removeEventListener("pointerleave",Ue),window.removeEventListener("deviceorientation",oe)}},[]);const ze=!!S&&E,qe=ze||!!z,st=()=>{const Ze=!te;ee||ke(Ze),y?.(Ze)},Ke=Ze=>{De.current&&!De.current()||(ze&&st(),z?.(Ze))},$e=Ze=>{!qe||Ze.target!==Ze.currentTarget||Ze.key!=="Enter"&&Ze.key!==" "||(Ze.preventDefault(),ze&&st(),z?.(Ze))},be=vo(C),fe=(nR(R)||[255,255,255]).join(", "),Et=Math.ceil(Math.sin(Ci(f,0,60)*Math.PI/180)*24*Math.max(0,T))+1;return nt.jsxs("figure",{ref:Y,className:`tilted-card ${V}`.trim(),style:{width:vo(r),height:vo(n),perspective:vo(O),...Q},"data-interactive":qe?"":void 0,"data-flipped":te?"":void 0,tabIndex:qe?0:void 0,role:qe?"button":void 0,"aria-pressed":ze?te:void 0,"aria-label":qe?t||e:void 0,onClick:qe?Ke:void 0,onKeyDown:$e,children:[nt.jsx("div",{ref:U,className:"tilted-card__shadow","aria-hidden":"true",style:{width:vo(l),height:vo(a),borderRadius:be}}),nt.jsxs("div",{ref:I,className:"tilted-card__body",style:{width:vo(l),height:vo(a),"--tc-radius":be,"--tc-glare-rgb":fe},children:[nt.jsxs("div",{className:"tilted-card__face tilted-card__front","aria-hidden":te,children:[s&&nt.jsx("img",{className:"tilted-card__img",src:s,alt:e,draggable:!1,style:{"--tc-depth":-24,top:`-${Et}px`,left:`-${Et}px`,width:`calc(100% + ${Et*2}px)`,height:`calc(100% + ${Et*2}px)`}}),g,nt.jsx("span",{className:"tilted-card__glare","aria-hidden":"true"}),nt.jsx("span",{className:"tilted-card__rim","aria-hidden":"true"}),nt.jsx("span",{className:"tilted-card__edge","aria-hidden":"true"})]}),S&&nt.jsxs("div",{className:"tilted-card__face tilted-card__back","aria-hidden":!te,children:[S,nt.jsx("span",{className:"tilted-card__glare","aria-hidden":"true"}),nt.jsx("span",{className:"tilted-card__rim","aria-hidden":"true"}),nt.jsx("span",{className:"tilted-card__edge","aria-hidden":"true"})]}),_&&p&&nt.jsx("div",{className:"tilted-card__overlay",style:{"--tc-lift":`${m}px`},children:p})]}),h&&t&&nt.jsx("figcaption",{ref:k,className:"tilted-card__caption",children:t})]})},xo=s=>Number(s||0).toLocaleString(),rR=s=>s.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),nd={flowsProcessed:0,packetsPerSecond:0,alerts:0,blockedSources:0,engineName:"Rules",engineStatus:"Rules active",engineCaption:"Model is not available",sourceLabel:"Demo traffic",modelLoaded:!1};function sR({title:s,description:e,reading:t,capturedAt:n,sourceLabel:r}){return nt.jsxs("div",{className:"kpi-explanation",children:[nt.jsx("span",{className:"kpi-explanation__eyebrow",children:"What this means"}),nt.jsx("h3",{children:s}),nt.jsx("p",{children:e}),nt.jsxs("div",{className:"kpi-explanation__reading",children:[nt.jsx("span",{children:n?`At flip · ${rR(n)}`:"Current reading"}),nt.jsx("strong",{children:t})]}),nt.jsx("small",{children:r})]})}function id({metric:s,title:e,value:t,footer:n,description:r,reading:a,stats:l,className:c=""}){const[f,h]=yt.useState(null),p=_=>{h(_?{reading:a(l),description:r(l),capturedAt:new Date,sourceLabel:l.sourceLabel}:null)};return nt.jsx(iR,{className:`kpi-card${c?` ${c}`:""}`,captionText:`${e}. Click for details.`,showTooltip:!1,containerWidth:"100%",containerHeight:"100%",imageWidth:"100%",imageHeight:"100%",rotateAmplitude:6,scaleOnHover:1.015,radius:14,style:{"--kpi-index":s},smoothness:.72,glare:.2,glareColor:"#ffc0ae",shadow:.12,parallax:.2,gyroscope:!1,intro:!0,introDelay:s*75,backContent:nt.jsx(sR,{title:e,description:f?.description??r(l),reading:f?.reading??a(l),capturedAt:f?.capturedAt,sourceLabel:f?.sourceLabel??l.sourceLabel}),onFlip:p,children:nt.jsxs("div",{className:"kpi-card__front",children:[nt.jsx("span",{className:"kpi-top",children:e}),t,nt.jsxs("div",{className:"kpi-foot",children:[n,nt.jsxs("span",{className:"kpi-flip-hint","aria-hidden":"true",children:["Click for details ",nt.jsx("span",{children:"↗"})]})]})]})})}function oR({initialStats:s=nd}){const[e,t]=yt.useState({...nd,...s});return yt.useEffect(()=>{const n=r=>t({...nd,...r.detail});return window.addEventListener("dashboardstats",n),window.__dashboardMetricSnapshot&&t({...nd,...window.__dashboardMetricSnapshot}),()=>window.removeEventListener("dashboardstats",n)},[]),nt.jsxs("section",{className:"kpi-grid","aria-label":"Network metrics",children:[nt.jsx(id,{metric:0,title:"Flows processed",stats:e,value:nt.jsx("span",{className:"kpi-value",id:"kpi-pps",children:xo(e.flowsProcessed)}),footer:nt.jsx(nt.Fragment,{children:nt.jsxs("span",{className:"subtle",children:[nt.jsx("b",{id:"kpi-rate",children:xo(e.packetsPerSecond)})," packets per second"]})}),description:()=>"Total flow count for this session. The small value is the current packet rate.",reading:n=>`${xo(n.flowsProcessed)} flows · ${xo(n.packetsPerSecond)} packets/s`}),nt.jsx(id,{metric:1,title:"Alerts",stats:e,className:"threat-kpi",value:nt.jsx("span",{className:"kpi-value",id:"kpi-alerts",children:xo(e.alerts)}),footer:nt.jsx("span",{className:"subtle",children:"Saved by NetGuard"}),description:n=>n.alerts>0?"Saved alerts. Open Alerts for each source and reason.":"No alerts have been saved yet.",reading:n=>`${xo(n.alerts)} ${n.alerts===1?"alert":"alerts"}`}),nt.jsx(id,{metric:2,title:"Blocked sources",stats:e,value:nt.jsx("span",{className:"kpi-value",id:"kpi-blocked",children:xo(e.blockedSources)}),footer:nt.jsx("span",{className:"subtle",children:"NetGuard local block list"}),description:n=>n.blockedSources>0?"Sources on NetGuard’s local list. Your system firewall is unchanged.":"No sources listed. Your system firewall is unchanged.",reading:n=>`${xo(n.blockedSources)} ${n.blockedSources===1?"source":"sources"}`}),nt.jsx(id,{metric:3,title:"Detection method",stats:e,value:nt.jsx("span",{className:"kpi-value kpi-value--engine",id:"engine-kpi-name",children:e.engineName}),footer:nt.jsxs(nt.Fragment,{children:[nt.jsx("span",{className:"engine-kpi__status",id:"engine-kpi-confidence",children:e.engineStatus}),nt.jsx("span",{className:"subtle",id:"engine-kpi-caption",children:e.engineCaption})]}),description:n=>n.modelLoaded?"Isolation Forest scores unusual traffic. Rules check known patterns too.":"Rules check known patterns. Anomaly scoring is off.",reading:n=>`${n.engineName} · ${n.engineStatus}`})]})}const jg="186",aR=0,Qy=1,lR=2,kd=1,uR=2,ju=3,Aa=0,Ki=1,Hs=2,_s=0,kl=1,U0=2,jy=3,eS=4,O0=5,Tl=100,cR=101,fR=102,dR=103,hR=104,NM=200,Us=201,pR=202,mR=203,IM=204,rh=205,gR=206,vR=207,_R=208,xR=209,yR=210,SR=211,MR=212,ER=213,wR=214,k0=0,B0=1,z0=2,Pc=3,V0=4,H0=5,G0=6,W0=7,FM=0,TR=1,AR=2,xs=0,UM=1,OM=2,kM=3,BM=4,zM=5,VM=6,HM=7,GM=300,ba=301,ql=302,Cm=303,Pm=304,Sh=306,X0=1e3,Ws=1001,Y0=1002,ui=1003,bR=1004,rd=1005,Ei=1006,Lm=1007,pa=1008,hr=1009,WM=1010,XM=1011,Lc=1012,ev=1013,Ss=1014,ms=1015,ns=1016,tv=1017,nv=1018,Dc=1020,YM=35902,qM=35899,$M=1021,KM=1022,ts=1023,Ks=1026,ma=1027,ZM=1028,iv=1029,Ra=1030,rv=1031,sv=1033,Bd=33776,zd=33777,Vd=33778,Hd=33779,q0=35840,$0=35841,K0=35842,Z0=35843,J0=36196,Q0=37492,j0=37496,eg=37488,tg=37489,sh=37490,ng=37491,ig=37808,rg=37809,sg=37810,og=37811,ag=37812,lg=37813,ug=37814,cg=37815,fg=37816,dg=37817,hg=37818,pg=37819,mg=37820,gg=37821,vg=36492,_g=36494,xg=36495,yg=36283,Sg=36284,oh=36285,Mg=36286,RR=3200,tS=0,CR=1,bo="",Pr="srgb",$l="srgb-linear",ah="linear",gn="srgb",Dm=7680,PR=519,LR=512,DR=513,NR=514,ov=515,IR=516,FR=517,av=518,UR=519,OR=35044,nS="300 es",gs=2e3,lh=2001;function kR(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uh(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BR(){const s=uh("canvas");return s.style.display="block",s}const iS={};function rS(...s){const e="THREE."+s.shift();console.log(e,...s)}function JM(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function kt(...s){s=JM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function un(...s){s=JM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bl(...s){const e=s.join(" ");e in iS||(iS[e]=!0,kt(...s))}function zR(s,e,t){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const VR={[k0]:B0,[z0]:G0,[V0]:W0,[Pc]:H0,[B0]:k0,[G0]:z0,[W0]:V0,[H0]:Pc};class La{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nm=Math.PI/180,Eg=180/Math.PI;function Uc(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vi[s&255]+vi[s>>8&255]+vi[s>>16&255]+vi[s>>24&255]+"-"+vi[e&255]+vi[e>>8&255]+"-"+vi[e>>16&15|64]+vi[e>>24&255]+"-"+vi[t&63|128]+vi[t>>8&255]+"-"+vi[t>>16&255]+vi[t>>24&255]+vi[n&255]+vi[n>>8&255]+vi[n>>16&255]+vi[n>>24&255]).toLowerCase()}function en(s,e,t){return Math.max(e,Math.min(t,s))}function HR(s,e){return(s%e+e)%e}function Im(s,e,t){return(1-t)*s+t*e}function Iu(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hv=class hv{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=en(this.x,e.x,t.x),this.y=en(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=en(this.x,e,t),this.y=en(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hv.prototype.isVector2=!0;let Nt=hv;class Jl{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let f=n[r+0],h=n[r+1],p=n[r+2],_=n[r+3],m=a[l+0],g=a[l+1],S=a[l+2],E=a[l+3];if(_!==E||f!==m||h!==g||p!==S){let x=f*m+h*g+p*S+_*E;x<0&&(m=-m,g=-g,S=-S,E=-E,x=-x);let y=1-c;if(x<.9995){const C=Math.acos(x),O=Math.sin(C);y=Math.sin(y*C)/O,c=Math.sin(c*C)/O,f=f*y+m*c,h=h*y+g*c,p=p*y+S*c,_=_*y+E*c}else{f=f*y+m*c,h=h*y+g*c,p=p*y+S*c,_=_*y+E*c;const C=1/Math.sqrt(f*f+h*h+p*p+_*_);f*=C,h*=C,p*=C,_*=C}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],f=n[r+1],h=n[r+2],p=n[r+3],_=a[l],m=a[l+1],g=a[l+2],S=a[l+3];return e[t]=c*S+p*_+f*g-h*m,e[t+1]=f*S+p*m+h*_-c*g,e[t+2]=h*S+p*g+c*m-f*_,e[t+3]=p*S-c*_-f*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(r/2),_=c(a/2),m=f(n/2),g=f(r/2),S=f(a/2);switch(l){case"XYZ":this._x=m*p*_+h*g*S,this._y=h*g*_-m*p*S,this._z=h*p*S+m*g*_,this._w=h*p*_-m*g*S;break;case"YXZ":this._x=m*p*_+h*g*S,this._y=h*g*_-m*p*S,this._z=h*p*S-m*g*_,this._w=h*p*_+m*g*S;break;case"ZXY":this._x=m*p*_-h*g*S,this._y=h*g*_+m*p*S,this._z=h*p*S+m*g*_,this._w=h*p*_-m*g*S;break;case"ZYX":this._x=m*p*_-h*g*S,this._y=h*g*_+m*p*S,this._z=h*p*S-m*g*_,this._w=h*p*_+m*g*S;break;case"YZX":this._x=m*p*_+h*g*S,this._y=h*g*_+m*p*S,this._z=h*p*S-m*g*_,this._w=h*p*_-m*g*S;break;case"XZY":this._x=m*p*_-h*g*S,this._y=h*g*_-m*p*S,this._z=h*p*S+m*g*_,this._w=h*p*_+m*g*S;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],f=t[9],h=t[2],p=t[6],_=t[10],m=n+c+_;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-f)*g,this._y=(a-h)*g,this._z=(l-r)*g}else if(n>c&&n>_){const g=2*Math.sqrt(1+n-c-_);this._w=(p-f)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+h)/g}else if(c>_){const g=2*Math.sqrt(1+c-n-_);this._w=(a-h)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(f+p)/g}else{const g=2*Math.sqrt(1+_-n-c);this._w=(l-r)/g,this._x=(a+h)/g,this._y=(f+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+r*h-a*f,this._y=r*p+l*f+a*c-n*h,this._z=a*p+l*h+n*f-r*c,this._w=l*p-n*c-r*f-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let f=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pv=class pv{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sS.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*r-c*n),p=2*(c*t-a*r),_=2*(a*n-l*t);return this.x=t+f*h+l*_-c*p,this.y=n+f*p+c*h-a*_,this.z=r+f*_+a*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=en(this.x,e.x,t.x),this.y=en(this.y,e.y,t.y),this.z=en(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=en(this.x,e,t),this.y=en(this.y,e,t),this.z=en(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fm.copy(this).projectOnVector(e),this.sub(Fm)}reflect(e){return this.sub(Fm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pv.prototype.isVector3=!0;let pe=pv;const Fm=new pe,sS=new Jl,mv=class mv{constructor(e,t,n,r,a,l,c,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h)}set(e,t,n,r,a,l,c,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],p=n[4],_=n[7],m=n[2],g=n[5],S=n[8],E=r[0],x=r[3],y=r[6],C=r[1],O=r[4],A=r[7],b=r[2],R=r[5],N=r[8];return a[0]=l*E+c*C+f*b,a[3]=l*x+c*O+f*R,a[6]=l*y+c*A+f*N,a[1]=h*E+p*C+_*b,a[4]=h*x+p*O+_*R,a[7]=h*y+p*A+_*N,a[2]=m*E+g*C+S*b,a[5]=m*x+g*O+S*R,a[8]=m*y+g*A+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*a*p+n*c*f+r*a*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],_=p*l-c*h,m=c*f-p*a,g=h*a-l*f,S=t*_+n*m+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(r*h-p*n)*E,e[2]=(c*n-r*l)*E,e[3]=m*E,e[4]=(p*t-r*f)*E,e[5]=(r*a-c*t)*E,e[6]=g*E,e[7]=(n*f-h*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-r*h,r*f,-r*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return Bl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Um.makeScale(e,t)),this}rotate(e){return Bl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Um.makeRotation(-e)),this}translate(e,t){return Bl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Um.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mv.prototype.isMatrix3=!0;let Gt=mv;const Um=new Gt,oS=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),aS=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GR(){const s={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===gn&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===gn&&(r.r=zl(r.r),r.g=zl(r.g),r.b=zl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bo?ah:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$l]:{primaries:e,whitePoint:n,transfer:ah,toXYZ:oS,fromXYZ:aS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pr},outputColorSpaceConfig:{drawingBufferColorSpace:Pr}},[Pr]:{primaries:e,whitePoint:n,transfer:gn,toXYZ:oS,fromXYZ:aS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pr}}}),s}const rn=GR();function Ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let al;class WR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{al===void 0&&(al=uh("canvas")),al.width=e.width,al.height=e.height;const r=al.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=al}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uh("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Ys(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ys(t[n]/255)*255):t[n]=Ys(t[n]);return{data:t,width:e.width,height:e.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XR=0;class lv{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Uc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Om(r[l].image)):a.push(Om(r[l]))}else a=Om(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Om(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?WR.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let YR=0;const km=new pe;class Fi extends La{constructor(e=Fi.DEFAULT_IMAGE,t=Fi.DEFAULT_MAPPING,n=Ws,r=Ws,a=Ei,l=pa,c=ts,f=hr,h=Fi.DEFAULT_ANISOTROPY,p=bo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=Uc(),this.name="",this.source=new lv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(km).x}get height(){return this.source.getSize(km).y}get depth(){return this.source.getSize(km).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){kt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){kt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case X0:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case Y0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case X0:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case Y0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fi.DEFAULT_IMAGE=null;Fi.DEFAULT_MAPPING=GM;Fi.DEFAULT_ANISOTROPY=1;const gv=class gv{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,h=f[0],p=f[4],_=f[8],m=f[1],g=f[5],S=f[9],E=f[2],x=f[6],y=f[10];if(Math.abs(p-m)<.01&&Math.abs(_-E)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+E)<.1&&Math.abs(S+x)<.1&&Math.abs(h+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(h+1)/2,A=(g+1)/2,b=(y+1)/2,R=(p+m)/4,N=(_+E)/4,T=(S+x)/4;return O>A&&O>b?O<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(O),r=R/n,a=N/n):A>b?A<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),n=R/r,a=T/r):b<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),n=N/a,r=T/a),this.set(n,r,a,t),this}let C=Math.sqrt((x-S)*(x-S)+(_-E)*(_-E)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(x-S)/C,this.y=(_-E)/C,this.z=(m-p)/C,this.w=Math.acos((h+g+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=en(this.x,e.x,t.x),this.y=en(this.y,e.y,t.y),this.z=en(this.z,e.z,t.z),this.w=en(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=en(this.x,e,t),this.y=en(this.y,e,t),this.z=en(this.z,e,t),this.w=en(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gv.prototype.isVector4=!0;let In=gv;class qR extends La{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new In(0,0,e,t),this.scissorTest=!1,this.viewport=new In(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Fi(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lv(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends qR{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class QM extends Fi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $R extends Fi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const gh=class gh{constructor(e,t,n,r,a,l,c,f,h,p,_,m,g,S,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h,p,_,m,g,S,E,x)}set(e,t,n,r,a,l,c,f,h,p,_,m,g,S,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=l,y[9]=c,y[13]=f,y[2]=h,y[6]=p,y[10]=_,y[14]=m,y[3]=g,y[7]=S,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ll.setFromMatrixColumn(e,0).length(),a=1/ll.setFromMatrixColumn(e,1).length(),l=1/ll.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=l*p,g=l*_,S=c*p,E=c*_;t[0]=f*p,t[4]=-f*_,t[8]=h,t[1]=g+S*h,t[5]=m-E*h,t[9]=-c*f,t[2]=E-m*h,t[6]=S+g*h,t[10]=l*f}else if(e.order==="YXZ"){const m=f*p,g=f*_,S=h*p,E=h*_;t[0]=m+E*c,t[4]=S*c-g,t[8]=l*h,t[1]=l*_,t[5]=l*p,t[9]=-c,t[2]=g*c-S,t[6]=E+m*c,t[10]=l*f}else if(e.order==="ZXY"){const m=f*p,g=f*_,S=h*p,E=h*_;t[0]=m-E*c,t[4]=-l*_,t[8]=S+g*c,t[1]=g+S*c,t[5]=l*p,t[9]=E-m*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const m=l*p,g=l*_,S=c*p,E=c*_;t[0]=f*p,t[4]=S*h-g,t[8]=m*h+E,t[1]=f*_,t[5]=E*h+m,t[9]=g*h-S,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const m=l*f,g=l*h,S=c*f,E=c*h;t[0]=f*p,t[4]=E-m*_,t[8]=S*_+g,t[1]=_,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=g*_+S,t[10]=m-E*_}else if(e.order==="XZY"){const m=l*f,g=l*h,S=c*f,E=c*h;t[0]=f*p,t[4]=-_,t[8]=h*p,t[1]=m*_+E,t[5]=l*p,t[9]=g*_-S,t[2]=S*_-g,t[6]=c*p,t[10]=E*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KR,e,ZR)}lookAt(e,t,n){const r=this.elements;return rr.subVectors(e,t),rr.lengthSq()===0&&(rr.z=1),rr.normalize(),yo.crossVectors(n,rr),yo.lengthSq()===0&&(Math.abs(n.z)===1?rr.x+=1e-4:rr.z+=1e-4,rr.normalize(),yo.crossVectors(n,rr)),yo.normalize(),sd.crossVectors(rr,yo),r[0]=yo.x,r[4]=sd.x,r[8]=rr.x,r[1]=yo.y,r[5]=sd.y,r[9]=rr.y,r[2]=yo.z,r[6]=sd.z,r[10]=rr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],p=n[1],_=n[5],m=n[9],g=n[13],S=n[2],E=n[6],x=n[10],y=n[14],C=n[3],O=n[7],A=n[11],b=n[15],R=r[0],N=r[4],T=r[8],L=r[12],B=r[1],Z=r[5],G=r[9],ie=r[13],X=r[2],j=r[6],z=r[10],V=r[14],Q=r[3],Y=r[7],I=r[11],U=r[15];return a[0]=l*R+c*B+f*X+h*Q,a[4]=l*N+c*Z+f*j+h*Y,a[8]=l*T+c*G+f*z+h*I,a[12]=l*L+c*ie+f*V+h*U,a[1]=p*R+_*B+m*X+g*Q,a[5]=p*N+_*Z+m*j+g*Y,a[9]=p*T+_*G+m*z+g*I,a[13]=p*L+_*ie+m*V+g*U,a[2]=S*R+E*B+x*X+y*Q,a[6]=S*N+E*Z+x*j+y*Y,a[10]=S*T+E*G+x*z+y*I,a[14]=S*L+E*ie+x*V+y*U,a[3]=C*R+O*B+A*X+b*Q,a[7]=C*N+O*Z+A*j+b*Y,a[11]=C*T+O*G+A*z+b*I,a[15]=C*L+O*ie+A*V+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],f=e[9],h=e[13],p=e[2],_=e[6],m=e[10],g=e[14],S=e[3],E=e[7],x=e[11],y=e[15],C=f*g-h*m,O=c*g-h*_,A=c*m-f*_,b=l*g-h*p,R=l*m-f*p,N=l*_-c*p;return t*(E*C-x*O+y*A)-n*(S*C-x*b+y*R)+r*(S*O-E*b+y*N)-a*(S*A-E*R+x*N)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],f=e[2],h=e[6],p=e[10];return t*(l*p-c*h)-n*(a*p-c*f)+r*(a*h-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],_=e[9],m=e[10],g=e[11],S=e[12],E=e[13],x=e[14],y=e[15],C=t*c-n*l,O=t*f-r*l,A=t*h-a*l,b=n*f-r*c,R=n*h-a*c,N=r*h-a*f,T=p*E-_*S,L=p*x-m*S,B=p*y-g*S,Z=_*x-m*E,G=_*y-g*E,ie=m*y-g*x,X=C*ie-O*G+A*Z+b*B-R*L+N*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/X;return e[0]=(c*ie-f*G+h*Z)*j,e[1]=(r*G-n*ie-a*Z)*j,e[2]=(E*N-x*R+y*b)*j,e[3]=(m*R-_*N-g*b)*j,e[4]=(f*B-l*ie-h*L)*j,e[5]=(t*ie-r*B+a*L)*j,e[6]=(x*A-S*N-y*O)*j,e[7]=(p*N-m*A+g*O)*j,e[8]=(l*G-c*B+h*T)*j,e[9]=(n*B-t*G-a*T)*j,e[10]=(S*R-E*A+y*C)*j,e[11]=(_*A-p*R-g*C)*j,e[12]=(c*L-l*Z-f*T)*j,e[13]=(t*Z-n*L+r*T)*j,e[14]=(E*O-S*b-x*C)*j,e[15]=(p*b-_*O+m*C)*j,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,h=a*l,p=a*c;return this.set(h*l+n,h*c-r*f,h*f+r*c,0,h*c+r*f,p*c+n,p*f-r*l,0,h*f-r*c,p*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,h=a+a,p=l+l,_=c+c,m=a*h,g=a*p,S=a*_,E=l*p,x=l*_,y=c*_,C=f*h,O=f*p,A=f*_,b=n.x,R=n.y,N=n.z;return r[0]=(1-(E+y))*b,r[1]=(g+A)*b,r[2]=(S-O)*b,r[3]=0,r[4]=(g-A)*R,r[5]=(1-(m+y))*R,r[6]=(x+C)*R,r[7]=0,r[8]=(S+O)*N,r[9]=(x-C)*N,r[10]=(1-(m+E))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=ll.set(r[0],r[1],r[2]).length();const c=ll.set(r[4],r[5],r[6]).length(),f=ll.set(r[8],r[9],r[10]).length();a<0&&(l=-l),Zr.copy(this);const h=1/l,p=1/c,_=1/f;return Zr.elements[0]*=h,Zr.elements[1]*=h,Zr.elements[2]*=h,Zr.elements[4]*=p,Zr.elements[5]*=p,Zr.elements[6]*=p,Zr.elements[8]*=_,Zr.elements[9]*=_,Zr.elements[10]*=_,t.setFromRotationMatrix(Zr),n.x=l,n.y=c,n.z=f,this}makePerspective(e,t,n,r,a,l,c=gs,f=!1){const h=this.elements,p=2*a/(t-e),_=2*a/(n-r),m=(t+e)/(t-e),g=(n+r)/(n-r);let S,E;if(f)S=a/(l-a),E=l*a/(l-a);else if(c===gs)S=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===lh)S=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=gs,f=!1){const h=this.elements,p=2/(t-e),_=2/(n-r),m=-(t+e)/(t-e),g=-(n+r)/(n-r);let S,E;if(f)S=1/(l-a),E=l/(l-a);else if(c===gs)S=-2/(l-a),E=-(l+a)/(l-a);else if(c===lh)S=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gh.prototype.isMatrix4=!0;let On=gh;const ll=new pe,Zr=new On,KR=new pe(0,0,0),ZR=new pe(1,1,1),yo=new pe,sd=new pe,rr=new pe,lS=new On,uS=new Jl;class Ca{constructor(e=0,t=0,n=0,r=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],f=r[1],h=r[5],p=r[9],_=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-en(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,g),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lS,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uS.setFromEuler(this),this.setFromQuaternion(uS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class jM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JR=0;const cS=new pe,ul=new Jl,Ls=new On,od=new pe,Fu=new pe,QR=new pe,jR=new Jl,fS=new pe(1,0,0),dS=new pe(0,1,0),hS=new pe(0,0,1),pS={type:"added"},eC={type:"removed"},cl={type:"childadded",child:null},Bm={type:"childremoved",child:null};class Zi extends La{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=Uc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zi.DEFAULT_UP.clone();const e=new pe,t=new Ca,n=new Jl,r=new pe(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new On},normalMatrix:{value:new Gt}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=Zi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ul.setFromAxisAngle(e,t),this.quaternion.multiply(ul),this}rotateOnWorldAxis(e,t){return ul.setFromAxisAngle(e,t),this.quaternion.premultiply(ul),this}rotateX(e){return this.rotateOnAxis(fS,e)}rotateY(e){return this.rotateOnAxis(dS,e)}rotateZ(e){return this.rotateOnAxis(hS,e)}translateOnAxis(e,t){return cS.copy(e).applyQuaternion(this.quaternion),this.position.add(cS.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fS,e)}translateY(e){return this.translateOnAxis(dS,e)}translateZ(e){return this.translateOnAxis(hS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?od.copy(e):od.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(Fu,od,this.up):Ls.lookAt(od,Fu,this.up),this.quaternion.setFromRotationMatrix(Ls),r&&(Ls.extractRotation(r.matrixWorld),ul.setFromRotationMatrix(Ls),this.quaternion.premultiply(ul.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(un("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pS),cl.child=e,this.dispatchEvent(cl),cl.child=null):un("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eC),Bm.child=e,this.dispatchEvent(Bm),Bm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pS),cl.child=e,this.dispatchEvent(cl),cl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fu,e,QR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fu,jR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const _=f[h];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),_=l(e.shapes),m=l(e.skeletons),g=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zi.DEFAULT_UP=new pe(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ad extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class zm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ad,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ad,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ad,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=p.position.distanceTo(_.position),g=.02,S=.005;h.inputState.pinching&&m>g+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ad;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const eE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},So={h:0,s:0,l:0},ld={h:0,s:0,l:0};function Vm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class cn{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rn.workingColorSpace){if(e=HR(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Vm(l,a,e+1/3),this.g=Vm(l,a,e),this.b=Vm(l,a,e-1/3)}return rn.colorSpaceToWorking(this,r),this}setStyle(e,t=Pr){function n(a){a!==void 0&&parseFloat(a)<1&&kt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:kt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);kt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pr){const n=eE[e.toLowerCase()];return n!==void 0?this.setHex(n,t):kt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=zl(e.r),this.g=zl(e.g),this.b=zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pr){return rn.workingToColorSpace(_i.copy(this),e),Math.round(en(_i.r*255,0,255))*65536+Math.round(en(_i.g*255,0,255))*256+Math.round(en(_i.b*255,0,255))}getHexString(e=Pr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.workingToColorSpace(_i.copy(this),t);const n=_i.r,r=_i.g,a=_i.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let f,h;const p=(c+l)/2;if(c===l)f=0,h=0;else{const _=l-c;switch(h=p<=.5?_/(l+c):_/(2-l-c),l){case n:f=(r-a)/_+(r<a?6:0);break;case r:f=(a-n)/_+2;break;case a:f=(n-r)/_+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=rn.workingColorSpace){return rn.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=Pr){rn.workingToColorSpace(_i.copy(this),e);const t=_i.r,n=_i.g,r=_i.b;return e!==Pr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(So),this.setHSL(So.h+e,So.s+t,So.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(So),e.getHSL(ld);const n=Im(So.h,ld.h,t),r=Im(So.s,ld.s,t),a=Im(So.l,ld.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _i=new cn;cn.NAMES=eE;class mS extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jr=new pe,Ds=new pe,Hm=new pe,Ns=new pe,fl=new pe,dl=new pe,gS=new pe,Gm=new pe,Wm=new pe,Xm=new pe,Ym=new In,qm=new In,$m=new In;class es{constructor(e=new pe,t=new pe,n=new pe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jr.subVectors(e,t),r.cross(Jr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Jr.subVectors(r,t),Ds.subVectors(n,t),Hm.subVectors(e,t);const l=Jr.dot(Jr),c=Jr.dot(Ds),f=Jr.dot(Hm),h=Ds.dot(Ds),p=Ds.dot(Hm),_=l*h-c*c;if(_===0)return a.set(0,0,0),null;const m=1/_,g=(h*f-c*p)*m,S=(l*p-c*f)*m;return a.set(1-g-S,S,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ns)===null?!1:Ns.x>=0&&Ns.y>=0&&Ns.x+Ns.y<=1}static getInterpolation(e,t,n,r,a,l,c,f){return this.getBarycoord(e,t,n,r,Ns)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ns.x),f.addScaledVector(l,Ns.y),f.addScaledVector(c,Ns.z),f)}static getInterpolatedAttribute(e,t,n,r,a,l){return Ym.setScalar(0),qm.setScalar(0),$m.setScalar(0),Ym.fromBufferAttribute(e,t),qm.fromBufferAttribute(e,n),$m.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Ym,a.x),l.addScaledVector(qm,a.y),l.addScaledVector($m,a.z),l}static isFrontFacing(e,t,n,r){return Jr.subVectors(n,t),Ds.subVectors(e,t),Jr.cross(Ds).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jr.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Jr.cross(Ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return es.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return es.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return es.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return es.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return es.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;fl.subVectors(r,n),dl.subVectors(a,n),Gm.subVectors(e,n);const f=fl.dot(Gm),h=dl.dot(Gm);if(f<=0&&h<=0)return t.copy(n);Wm.subVectors(e,r);const p=fl.dot(Wm),_=dl.dot(Wm);if(p>=0&&_<=p)return t.copy(r);const m=f*_-p*h;if(m<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(fl,l);Xm.subVectors(e,a);const g=fl.dot(Xm),S=dl.dot(Xm);if(S>=0&&g<=S)return t.copy(a);const E=g*h-f*S;if(E<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(dl,c);const x=p*S-g*_;if(x<=0&&_-p>=0&&g-S>=0)return gS.subVectors(a,r),c=(_-p)/(_-p+(g-S)),t.copy(r).addScaledVector(gS,c);const y=1/(x+E+m);return l=E*y,c=m*y,t.copy(n).addScaledVector(fl,l).addScaledVector(dl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oc{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Qr):Qr.fromBufferAttribute(a,l),Qr.applyMatrix4(e.matrixWorld),this.expandByPoint(Qr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ud.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ud.copy(n.boundingBox)),ud.applyMatrix4(e.matrixWorld),this.union(ud)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qr),Qr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uu),cd.subVectors(this.max,Uu),hl.subVectors(e.a,Uu),pl.subVectors(e.b,Uu),ml.subVectors(e.c,Uu),Mo.subVectors(pl,hl),Eo.subVectors(ml,pl),na.subVectors(hl,ml);let t=[0,-Mo.z,Mo.y,0,-Eo.z,Eo.y,0,-na.z,na.y,Mo.z,0,-Mo.x,Eo.z,0,-Eo.x,na.z,0,-na.x,-Mo.y,Mo.x,0,-Eo.y,Eo.x,0,-na.y,na.x,0];return!Km(t,hl,pl,ml,cd)||(t=[1,0,0,0,1,0,0,0,1],!Km(t,hl,pl,ml,cd))?!1:(fd.crossVectors(Mo,Eo),t=[fd.x,fd.y,fd.z],Km(t,hl,pl,ml,cd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Is=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Qr=new pe,ud=new Oc,hl=new pe,pl=new pe,ml=new pe,Mo=new pe,Eo=new pe,na=new pe,Uu=new pe,cd=new pe,fd=new pe,ia=new pe;function Km(s,e,t,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){ia.fromArray(s,a);const c=r.x*Math.abs(ia.x)+r.y*Math.abs(ia.y)+r.z*Math.abs(ia.z),f=e.dot(ia),h=t.dot(ia),p=n.dot(ia);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const Gn=new pe,dd=new Nt;let nC=0;class _r extends La{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=OR,this.updateRanges=[],this.gpuType=ms,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dd.fromBufferAttribute(this,t),dd.applyMatrix3(e),this.setXY(t,dd.x,dd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Iu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Iu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Iu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Iu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Iu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),n=Hi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),n=Hi(n,this.array),r=Hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),n=Hi(n,this.array),r=Hi(r,this.array),a=Hi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class tE extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nE extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fi extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}}const iC=new Oc,Ou=new pe,Zm=new pe;class Mh{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iC.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ou.subVectors(e,this.center);const t=Ou.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ou,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ou.copy(e.center).add(Zm)),this.expandByPoint(Ou.copy(e.center).sub(Zm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rC=0;const Rr=new On,Jm=new Zi,gl=new pe,sr=new Oc,ku=new Oc,ni=new pe;class Qi extends La{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Uc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kR(e)?nE:tE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Gt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rr.makeRotationFromQuaternion(e),this.applyMatrix4(Rr),this}rotateX(e){return Rr.makeRotationX(e),this.applyMatrix4(Rr),this}rotateY(e){return Rr.makeRotationY(e),this.applyMatrix4(Rr),this}rotateZ(e){return Rr.makeRotationZ(e),this.applyMatrix4(Rr),this}translate(e,t,n){return Rr.makeTranslation(e,t,n),this.applyMatrix4(Rr),this}scale(e,t,n){return Rr.makeScale(e,t,n),this.applyMatrix4(Rr),this}lookAt(e){return Jm.lookAt(e),Jm.updateMatrix(),this.applyMatrix4(Jm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gl).negate(),this.translate(gl.x,gl.y,gl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new fi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){un("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&un('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){un("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const n=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];ku.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(sr.min,ku.min),sr.expandByPoint(ni),ni.addVectors(sr.max,ku.max),sr.expandByPoint(ni)):(sr.expandByPoint(ku.min),sr.expandByPoint(ku.max))}sr.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)ni.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ni));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)ni.fromBufferAttribute(c,h),f&&(gl.fromBufferAttribute(e,h),ni.add(gl)),r=Math.max(r,n.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&un('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){un("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new _r(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],f=[];for(let T=0;T<n.count;T++)c[T]=new pe,f[T]=new pe;const h=new pe,p=new pe,_=new pe,m=new Nt,g=new Nt,S=new Nt,E=new pe,x=new pe;function y(T,L,B){h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,L),_.fromBufferAttribute(n,B),m.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),S.fromBufferAttribute(a,B),p.sub(h),_.sub(h),g.sub(m),S.sub(m);const Z=1/(g.x*S.y-S.x*g.y);isFinite(Z)&&(E.copy(p).multiplyScalar(S.y).addScaledVector(_,-g.y).multiplyScalar(Z),x.copy(_).multiplyScalar(g.x).addScaledVector(p,-S.x).multiplyScalar(Z),c[T].add(E),c[L].add(E),c[B].add(E),f[T].add(x),f[L].add(x),f[B].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const B=C[T],Z=B.start,G=B.count;for(let ie=Z,X=Z+G;ie<X;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const O=new pe,A=new pe,b=new pe,R=new pe;function N(T){b.fromBufferAttribute(r,T),R.copy(b);const L=c[T];O.copy(L),O.sub(b.multiplyScalar(b.dot(L))).normalize(),A.crossVectors(R,L);const Z=A.dot(f[T])<0?-1:1;l.setXYZW(T,O.x,O.y,O.z,Z)}for(let T=0,L=C.length;T<L;++T){const B=C[T],Z=B.start,G=B.count;for(let ie=Z,X=Z+G;ie<X;ie+=3)N(e.getX(ie+0)),N(e.getX(ie+1)),N(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _r(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new pe,a=new pe,l=new pe,c=new pe,f=new pe,h=new pe,p=new pe,_=new pe;if(e)for(let m=0,g=e.count;m<g;m+=3){const S=e.getX(m+0),E=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,x),p.subVectors(l,a),_.subVectors(r,a),p.cross(_),c.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(p),f.add(p),h.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(E,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),_.subVectors(r,a),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ni.fromBufferAttribute(e,t),ni.normalize(),e.setXYZ(t,ni.x,ni.y,ni.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,_=c.normalized,m=new h.constructor(f.length*p);let g=0,S=0;for(let E=0,x=f.length;E<x;E++){c.isInterleavedBufferAttribute?g=f[E]*c.data.stride+c.offset:g=f[E]*p;for(let y=0;y<p;y++)m[S++]=h[g++]}return new _r(m,p,_)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qi,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let p=0,_=h.length;p<_;p++){const m=h[p],g=e(m,n);f.push(g)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let _=0,m=h.length;_<m;_++){const g=h[_];p.push(g.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],_=a[h];for(let m=0,g=_.length;m<g;m++)p.push(_[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qm=new pe,sC=new pe,oC=new Gt;class Ao{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qm.subVectors(n,t).cross(sC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Qm),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||oC.getNormalMatrix(e),r=this.coplanarPoint(Qm).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let aC=0;class kc extends La{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Uc(),this.name="",this.type="Material",this.blending=kl,this.side=Aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=IM,this.blendDst=rh,this.blendEquation=Tl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new cn(0,0,0),this.blendAlpha=0,this.depthFunc=Pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=PR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dm,this.stencilZFail=Dm,this.stencilZPass=Dm,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){kt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){kt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new cn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ao().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fs=new pe,jm=new pe,hd=new pe,pd=new pe;class iE{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fs.copy(this.origin).addScaledVector(this.direction,t),Fs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jm.copy(e).add(t).multiplyScalar(.5),hd.copy(t).sub(e).normalize(),pd.copy(this.origin).sub(jm);const a=e.distanceTo(t)*.5,l=-this.direction.dot(hd),c=pd.dot(this.direction),f=-pd.dot(hd),h=pd.lengthSq(),p=Math.abs(1-l*l);let _,m,g,S;if(p>0)if(_=l*f-c,m=l*c-f,S=a*p,_>=0)if(m>=-S)if(m<=S){const E=1/p;_*=E,m*=E,g=_*(_+l*m+2*c)+m*(l*_+m+2*f)+h}else m=a,_=Math.max(0,-(l*m+c)),g=-_*_+m*(m+2*f)+h;else m=-a,_=Math.max(0,-(l*m+c)),g=-_*_+m*(m+2*f)+h;else m<=-S?(_=Math.max(0,-(-l*a+c)),m=_>0?-a:Math.min(Math.max(-a,-f),a),g=-_*_+m*(m+2*f)+h):m<=S?(_=0,m=Math.min(Math.max(-a,-f),a),g=m*(m+2*f)+h):(_=Math.max(0,-(l*a+c)),m=_>0?a:Math.min(Math.max(-a,-f),a),g=-_*_+m*(m+2*f)+h);else m=l>0?-a:a,_=Math.max(0,-(l*m+c)),g=-_*_+m*(m+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(jm).addScaledVector(hd,m),g}intersectSphere(e,t){if(e.radius<0)return null;Fs.subVectors(e.center,this.origin);const n=Fs.dot(this.direction),r=Fs.dot(Fs)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,f;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),_>=0?(c=(e.min.z-m.z)*_,f=(e.max.z-m.z)*_):(c=(e.max.z-m.z)*_,f=(e.min.z-m.z)*_),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fs)!==null}intersectTriangle(e,t,n,r,a){const l=this.origin,c=this.direction,f=c.x,h=c.y,p=c.z,_=e.x-l.x,m=e.y-l.y,g=e.z-l.z,S=t.x-l.x,E=t.y-l.y,x=t.z-l.z,y=n.x-l.x,C=n.y-l.y,O=n.z-l.z,A=Math.abs(f),b=Math.abs(h),R=Math.abs(p);let N,T,L,B,Z,G,ie,X,j,z,V,Q;if(A>=b&&A>=R?(L=f,G=_,j=S,Q=y,f>=0?(N=h,T=p,B=m,Z=g,ie=E,X=x,z=C,V=O):(N=p,T=h,B=g,Z=m,ie=x,X=E,z=O,V=C)):b>=R?(L=h,G=m,j=E,Q=C,h>=0?(N=p,T=f,B=g,Z=_,ie=x,X=S,z=O,V=y):(N=f,T=p,B=_,Z=g,ie=S,X=x,z=y,V=O)):(L=p,G=g,j=x,Q=O,p>=0?(N=f,T=h,B=_,Z=m,ie=S,X=E,z=y,V=C):(N=h,T=f,B=m,Z=_,ie=E,X=S,z=C,V=y)),L===0)return null;const Y=N/L,I=T/L,U=1/L,k=B-Y*G,ve=Z-I*G,De=ie-Y*j,se=X-I*j,ke=z-Y*Q,ee=V-I*Q,te=ke*se-ee*De,Pe=k*ee-ve*ke,Oe=De*ve-se*k;if(r){if(te<0||Pe<0||Oe<0)return null}else if((te<0||Pe<0||Oe<0)&&(te>0||Pe>0||Oe>0))return null;const ze=te+Pe+Oe;if(ze===0)return null;const qe=U*(te*G+Pe*j+Oe*Q);return(ze>0?qe<0:qe>0)?null:this.at(qe/ze,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rE extends kc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new cn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=FM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vS=new On,ra=new iE,md=new Mh,_S=new pe,gd=new pe,vd=new pe,_d=new pe,e0=new pe,xd=new pe,xS=new pe,yd=new pe;class gr extends Zi{constructor(e=new Qi,t=new rE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){xd.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=c[f],_=a[f];p!==0&&(e0.fromBufferAttribute(_,e),l?xd.addScaledVector(e0,p):xd.addScaledVector(e0.sub(t),p))}t.add(xd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),md.copy(n.boundingSphere),md.applyMatrix4(a),ra.copy(e.ray).recast(e.near),!(md.containsPoint(ra.origin)===!1&&(ra.intersectSphere(md,_S)===null||ra.origin.distanceToSquared(_S)>(e.far-e.near)**2))&&(vS.copy(a).invert(),ra.copy(e.ray).applyMatrix4(vS),!(n.boundingBox!==null&&ra.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,m=a.groups,g=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,E=m.length;S<E;S++){const x=m[S],y=l[x.materialIndex],C=Math.max(x.start,g.start),O=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let A=C,b=O;A<b;A+=3){const R=c.getX(A),N=c.getX(A+1),T=c.getX(A+2);r=Sd(this,y,e,n,h,p,_,R,N,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let x=S,y=E;x<y;x+=3){const C=c.getX(x),O=c.getX(x+1),A=c.getX(x+2);r=Sd(this,l,e,n,h,p,_,C,O,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let S=0,E=m.length;S<E;S++){const x=m[S],y=l[x.materialIndex],C=Math.max(x.start,g.start),O=Math.min(f.count,Math.min(x.start+x.count,g.start+g.count));for(let A=C,b=O;A<b;A+=3){const R=A,N=A+1,T=A+2;r=Sd(this,y,e,n,h,p,_,R,N,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(f.count,g.start+g.count);for(let x=S,y=E;x<y;x+=3){const C=x,O=x+1,A=x+2;r=Sd(this,l,e,n,h,p,_,C,O,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function lC(s,e,t,n,r,a,l,c){let f;if(e.side===Ki?f=n.intersectTriangle(l,a,r,!0,c):f=n.intersectTriangle(r,a,l,e.side===Aa,c),f===null)return null;yd.copy(c),yd.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(yd);return h<t.near||h>t.far?null:{distance:h,point:yd.clone(),object:s}}function Sd(s,e,t,n,r,a,l,c,f,h){s.getVertexPosition(c,gd),s.getVertexPosition(f,vd),s.getVertexPosition(h,_d);const p=lC(s,e,t,n,gd,vd,_d,xS);if(p){const _=new pe;es.getBarycoord(xS,gd,vd,_d,_),r&&(p.uv=es.getInterpolatedAttribute(r,c,f,h,_,new Nt)),a&&(p.uv1=es.getInterpolatedAttribute(a,c,f,h,_,new Nt)),l&&(p.normal=es.getInterpolatedAttribute(l,c,f,h,_,new pe),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:f,c:h,normal:new pe,materialIndex:0};es.getNormal(gd,vd,_d,m.normal),p.face=m,p.barycoord=_}return p}class uC extends Fi{constructor(e=null,t=1,n=1,r,a,l,c,f,h=ui,p=ui,_,m){super(null,l,c,f,h,p,r,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa extends _r{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oa=new Mh,cC=new Nt(.5,.5),Md=new pe;class sE{constructor(e=new Ao,t=new Ao,n=new Ao,r=new Ao,a=new Ao,l=new Ao){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gs,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],_=a[5],m=a[6],g=a[7],S=a[8],E=a[9],x=a[10],y=a[11],C=a[12],O=a[13],A=a[14],b=a[15];if(r[0].setComponents(h-l,g-p,y-S,b-C).normalize(),r[1].setComponents(h+l,g+p,y+S,b+C).normalize(),r[2].setComponents(h+c,g+_,y+E,b+O).normalize(),r[3].setComponents(h-c,g-_,y-E,b-O).normalize(),n)r[4].setComponents(f,m,x,A).normalize(),r[5].setComponents(h-f,g-m,y-x,b-A).normalize();else if(r[4].setComponents(h-f,g-m,y-x,b-A).normalize(),t===gs)r[5].setComponents(h+f,g+m,y+x,b+A).normalize();else if(t===lh)r[5].setComponents(f,m,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oa)}intersectsSprite(e){oa.center.set(0,0,0);const t=cC.distanceTo(e.center);return oa.radius=.7071067811865476+t,oa.applyMatrix4(e.matrixWorld),this.intersectsSphere(oa)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Md.x=r.normal.x>0?e.max.x:e.min.x,Md.y=r.normal.y>0?e.max.y:e.min.y,Md.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Md)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fC extends kc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new cn(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ch=new pe,fh=new pe,yS=new On,Bu=new iE,Ed=new Mh,t0=new pe,SS=new pe;class dC extends Zi{constructor(e=new Qi,t=new fC){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)ch.fromBufferAttribute(t,r-1),fh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ch.distanceTo(fh);e.setAttribute("lineDistance",new fi(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ed.copy(n.boundingSphere),Ed.applyMatrix4(r),Ed.radius+=a,e.ray.intersectsSphere(Ed)===!1)return;yS.copy(r).invert(),Bu.copy(e.ray).applyMatrix4(yS);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const g=Math.max(0,l.start),S=Math.min(p.count,l.start+l.count);for(let E=g,x=S-1;E<x;E+=h){const y=p.getX(E),C=p.getX(E+1),O=wd(this,e,Bu,f,y,C,E);O&&t.push(O)}if(this.isLineLoop){const E=p.getX(S-1),x=p.getX(g),y=wd(this,e,Bu,f,E,x,S-1);y&&t.push(y)}}else{const g=Math.max(0,l.start),S=Math.min(m.count,l.start+l.count);for(let E=g,x=S-1;E<x;E+=h){const y=wd(this,e,Bu,f,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=wd(this,e,Bu,f,S-1,g,S-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function wd(s,e,t,n,r,a,l){const c=s.geometry.attributes.position;if(ch.fromBufferAttribute(c,r),fh.fromBufferAttribute(c,a),t.distanceSqToSegment(ch,fh,t0,SS)>n)return;t0.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(t0);if(!(h<e.near||h>e.far))return{distance:h,point:SS.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const MS=new pe,ES=new pe;class hC extends dC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)MS.fromBufferAttribute(t,r),ES.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+MS.distanceTo(ES);e.setAttribute("lineDistance",new fi(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends Fi{constructor(e=[],t=ba,n,r,a,l,c,f,h,p){super(e,t,n,r,a,l,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends Fi{constructor(e,t,n=Ss,r,a,l,c=ui,f=ui,h,p=Ks,_=1){if(p!==Ks&&p!==ma)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,r,a,l,c,f,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pC extends Nc{constructor(e,t=Ss,n=ba,r,a,l=ui,c=ui,f,h=Ks){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,n,r,a,l,c,f,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class aE extends Fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bc extends Qi{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],p=[],_=[];let m=0,g=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,a,4),S("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new fi(h,3)),this.setAttribute("normal",new fi(p,3)),this.setAttribute("uv",new fi(_,2));function S(E,x,y,C,O,A,b,R,N,T,L){const B=A/N,Z=b/T,G=A/2,ie=b/2,X=R/2,j=N+1,z=T+1;let V=0,Q=0;const Y=new pe;for(let I=0;I<z;I++){const U=I*Z-ie;for(let k=0;k<j;k++){const ve=k*B-G;Y[E]=ve*C,Y[x]=U*O,Y[y]=X,h.push(Y.x,Y.y,Y.z),Y[E]=0,Y[x]=0,Y[y]=R>0?1:-1,p.push(Y.x,Y.y,Y.z),_.push(k/N),_.push(1-I/T),V+=1}}for(let I=0;I<T;I++)for(let U=0;U<N;U++){const k=m+U+j*I,ve=m+U+j*(I+1),De=m+(U+1)+j*(I+1),se=m+(U+1)+j*I;f.push(k,ve,se),f.push(ve,De,se),Q+=6}c.addGroup(g,Q,L),g+=Q,m+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uv extends Qi{constructor(e=1,t=1,n=1,r=32,a=1,l=!1,c=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:f};const h=this;r=Math.floor(r),a=Math.floor(a);const p=[],_=[],m=[],g=[];let S=0;const E=[],x=n/2;let y=0;C(),l===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(p),this.setAttribute("position",new fi(_,3)),this.setAttribute("normal",new fi(m,3)),this.setAttribute("uv",new fi(g,2));function C(){const A=new pe,b=new pe;let R=0;const N=(t-e)/n;for(let T=0;T<=a;T++){const L=[],B=T/a,Z=B*(t-e)+e;for(let G=0;G<=r;G++){const ie=G/r,X=ie*f+c,j=Math.sin(X),z=Math.cos(X);b.x=Z*j,b.y=-B*n+x,b.z=Z*z,_.push(b.x,b.y,b.z),A.set(j,N,z).normalize(),m.push(A.x,A.y,A.z),g.push(ie,1-B),L.push(S++)}E.push(L)}for(let T=0;T<r;T++)for(let L=0;L<a;L++){const B=E[L][T],Z=E[L+1][T],G=E[L+1][T+1],ie=E[L][T+1];(e>0||L!==0)&&(p.push(B,Z,ie),R+=3),(t>0||L!==a-1)&&(p.push(Z,G,ie),R+=3)}h.addGroup(y,R,0),y+=R}function O(A){const b=S,R=new Nt,N=new pe;let T=0;const L=A===!0?e:t,B=A===!0?1:-1;for(let G=1;G<=r;G++)_.push(0,x*B,0),m.push(0,B,0),g.push(.5,.5),S++;const Z=S;for(let G=0;G<=r;G++){const X=G/r*f+c,j=Math.cos(X),z=Math.sin(X);N.x=L*z,N.y=x*B,N.z=L*j,_.push(N.x,N.y,N.z),m.push(0,B,0),R.x=j*.5+.5,R.y=z*.5*B+.5,g.push(R.x,R.y),S++}for(let G=0;G<r;G++){const ie=b+G,X=Z+G;A===!0?p.push(X,X+1,ie):p.push(X+1,X,ie),T+=3}h.addGroup(y,T,A===!0?1:2),y+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uv(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,f=a-1,h;for(;c<=f;)if(r=Math.floor(c+(f-c)/2),h=n[r]-l,h<0)c=r+1;else if(h>0)f=r-1;else{f=r;break}if(r=f,n[r]===l)return r/(a-1);const p=n[r],m=n[r+1]-p,g=(l-p)/m;return(r+g)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const l=this.getPoint(r),c=this.getPoint(a),f=t||(l.isVector2?new Nt:new pe);return f.copy(c).sub(l).normalize(),f}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new pe,r=[],a=[],l=[],c=new pe,f=new On;for(let g=0;g<=e;g++){const S=g/e;r[g]=this.getTangentAt(S,new pe)}a[0]=new pe,l[0]=new pe;let h=Number.MAX_VALUE;const p=Math.abs(r[0].x),_=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=h&&(h=p,n.set(1,0,0)),_<=h&&(h=_,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],c),l[0].crossVectors(r[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),l[g]=l[g-1].clone(),c.crossVectors(r[g-1],r[g]),c.length()>Number.EPSILON){c.normalize();const S=Math.acos(en(r[g-1].dot(r[g]),-1,1));a[g].applyMatrix4(f.makeRotationAxis(c,S))}l[g].crossVectors(r[g],a[g])}if(t===!0){let g=Math.acos(en(a[0].dot(a[e]),-1,1));g/=e,r[0].dot(c.crossVectors(a[0],a[e]))>0&&(g=-g);for(let S=1;S<=e;S++)a[S].applyMatrix4(f.makeRotationAxis(r[S],g*S)),l[S].crossVectors(r[S],a[S])}return{tangents:r,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lE extends Zs{constructor(e=0,t=0,n=1,r=1,a=0,l=Math.PI*2,c=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=c,this.aRotation=f}getPoint(e,t=new Nt){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(l?a=0:a=r),this.aClockwise===!0&&!l&&(a===r?a=-r:a=a-r);const c=this.aStartAngle+e*a;let f=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=f-this.aX,g=h-this.aY;f=m*p-g*_+this.aX,h=m*_+g*p+this.aY}return n.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mC extends lE{constructor(e,t,n,r,a,l){super(e,t,n,n,r,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function cv(){let s=0,e=0,t=0,n=0;function r(a,l,c,f){s=a,e=c,t=-3*a+3*l-2*c-f,n=2*a-2*l+c+f}return{initCatmullRom:function(a,l,c,f,h){r(l,c,h*(c-a),h*(f-l))},initNonuniformCatmullRom:function(a,l,c,f,h,p,_){let m=(l-a)/h-(c-a)/(h+p)+(c-l)/p,g=(c-l)/p-(f-l)/(p+_)+(f-c)/_;m*=p,g*=p,r(l,c,m,g)},calc:function(a){const l=a*a,c=l*a;return s+e*a+t*l+n*c}}}const wS=new pe,TS=new pe,n0=new cv,i0=new cv,r0=new cv;class gC extends Zs{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new pe){const n=t,r=this.points,a=r.length,l=(a-(this.closed?0:1))*e;let c=Math.floor(l),f=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:f===0&&c===a-1&&(c=a-2,f=1);let h,p;this.closed||c>0?h=r[(c-1)%a]:(TS.subVectors(r[0],r[1]).add(r[0]),h=TS);const _=r[c%a],m=r[(c+1)%a];if(this.closed||c+2<a?p=r[(c+2)%a]:(wS.subVectors(r[a-1],r[a-2]).add(r[a-1]),p=wS),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(_),g),E=Math.pow(_.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(p),g);E<1e-4&&(E=1),S<1e-4&&(S=E),x<1e-4&&(x=E),n0.initNonuniformCatmullRom(h.x,_.x,m.x,p.x,S,E,x),i0.initNonuniformCatmullRom(h.y,_.y,m.y,p.y,S,E,x),r0.initNonuniformCatmullRom(h.z,_.z,m.z,p.z,S,E,x)}else this.curveType==="catmullrom"&&(n0.initCatmullRom(h.x,_.x,m.x,p.x,this.tension),i0.initCatmullRom(h.y,_.y,m.y,p.y,this.tension),r0.initCatmullRom(h.z,_.z,m.z,p.z,this.tension));return n.set(n0.calc(f),i0.calc(f),r0.calc(f)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function AS(s,e,t,n,r){const a=(n-e)*.5,l=(r-t)*.5,c=s*s,f=s*c;return(2*t-2*n+a+l)*f+(-3*t+3*n-2*a-l)*c+a*s+t}function vC(s,e){const t=1-s;return t*t*e}function _C(s,e){return 2*(1-s)*s*e}function xC(s,e){return s*s*e}function _c(s,e,t,n){return vC(s,e)+_C(s,t)+xC(s,n)}function yC(s,e){const t=1-s;return t*t*t*e}function SC(s,e){const t=1-s;return 3*t*t*s*e}function MC(s,e){return 3*(1-s)*s*s*e}function EC(s,e){return s*s*s*e}function xc(s,e,t,n,r){return yC(s,e)+SC(s,t)+MC(s,n)+EC(s,r)}class wC extends Zs{constructor(e=new Nt,t=new Nt,n=new Nt,r=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Nt){const n=t,r=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(xc(e,r.x,a.x,l.x,c.x),xc(e,r.y,a.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class TC extends Zs{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){const n=t,r=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(xc(e,r.x,a.x,l.x,c.x),xc(e,r.y,a.y,l.y,c.y),xc(e,r.z,a.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class AC extends Zs{constructor(e=new Nt,t=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Nt){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Nt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uE extends Zs{constructor(e=new pe,t=new pe){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bC extends Zs{constructor(e=new Nt,t=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Nt){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(_c(e,r.x,a.x,l.x),_c(e,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cE extends Zs{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(_c(e,r.x,a.x,l.x),_c(e,r.y,a.y,l.y),_c(e,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RC extends Zs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Nt){const n=t,r=this.points,a=(r.length-1)*e,l=Math.floor(a),c=a-l,f=r[l===0?l:l-1],h=r[l],p=r[l>r.length-2?r.length-1:l+1],_=r[l>r.length-3?r.length-1:l+2];return n.set(AS(c,f.x,h.x,p.x,_.x),AS(c,f.y,h.y,p.y,_.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Nt().fromArray(r))}return this}}var CC=Object.freeze({__proto__:null,ArcCurve:mC,CatmullRomCurve3:gC,CubicBezierCurve:wC,CubicBezierCurve3:TC,EllipseCurve:lE,LineCurve:AC,LineCurve3:uE,QuadraticBezierCurve:bC,QuadraticBezierCurve3:cE,SplineCurve:RC});class Kl extends Qi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,p=f+1,_=e/c,m=t/f,g=[],S=[],E=[],x=[];for(let y=0;y<p;y++){const C=y*m-l;for(let O=0;O<h;O++){const A=O*_-a;S.push(A,-C,0),E.push(0,0,1),x.push(O/c),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let C=0;C<c;C++){const O=C+h*y,A=C+h*(y+1),b=C+1+h*(y+1),R=C+1+h*y;g.push(O,A,R),g.push(A,b,R)}this.setIndex(g),this.setAttribute("position",new fi(S,3)),this.setAttribute("normal",new fi(E,3)),this.setAttribute("uv",new fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class fv extends Qi{constructor(e=new cE(new pe(-1,-1,0),new pe(-1,1,0),new pe(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const l=e.computeFrenetFrames(t,a);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new pe,f=new pe,h=new Nt;let p=new pe;const _=[],m=[],g=[],S=[];E(),this.setIndex(S),this.setAttribute("position",new fi(_,3)),this.setAttribute("normal",new fi(m,3)),this.setAttribute("uv",new fi(g,2));function E(){for(let O=0;O<t;O++)x(O);x(a===!1?t:0),C(),y()}function x(O){p=e.getPointAt(O/t,p);const A=l.normals[O],b=l.binormals[O];for(let R=0;R<=r;R++){const N=R/r*Math.PI*2,T=Math.sin(N),L=-Math.cos(N);f.x=L*A.x+T*b.x,f.y=L*A.y+T*b.y,f.z=L*A.z+T*b.z,f.normalize(),m.push(f.x,f.y,f.z),c.x=p.x+n*f.x,c.y=p.y+n*f.y,c.z=p.z+n*f.z,_.push(c.x,c.y,c.z)}}function y(){for(let O=1;O<=t;O++)for(let A=1;A<=r;A++){const b=(r+1)*(O-1)+(A-1),R=(r+1)*O+(A-1),N=(r+1)*O+A,T=(r+1)*(O-1)+A;S.push(b,R,T),S.push(R,N,T)}}function C(){for(let O=0;O<=t;O++)for(let A=0;A<=r;A++)h.x=O/t,h.y=A/r,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fv(new CC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Zl(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];if(bS(r))r.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(bS(r[0])){const a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Pi(s){const e={};for(let t=0;t<s.length;t++){const n=Zl(s[t]);for(const r in n)e[r]=n[r]}return e}function bS(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function PC(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fE(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rn.workingColorSpace}const LC={clone:Zl,merge:Pi};var DC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends kc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DC,this.fragmentShader=NC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zl(e.uniforms),this.uniformsGroups=PC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new cn().setHex(r.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new pe().fromArray(r.value);break;case"v4":this.uniforms[n].value=new In().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new On().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class IC extends kr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FC extends kc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UC extends kc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td=new pe,Ad=new Jl,as=new pe;class dE extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new On,this.projectionMatrix=new On,this.projectionMatrixInverse=new On,this.coordinateSystem=gs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Td,Ad,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Td,Ad,as.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Td,Ad,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Td,Ad,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wo=new pe,RS=new Nt,CS=new Nt;class Nr extends dE{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eg*2*Math.atan(Math.tan(Nm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wo.x,wo.y).multiplyScalar(-e/wo.z),wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wo.x,wo.y).multiplyScalar(-e/wo.z)}getViewSize(e,t){return this.getViewBounds(e,RS,CS),t.subVectors(CS,RS)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nm*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dv extends dE{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class OC extends Qi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const vl=-90,_l=1;class kC extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nr(vl,_l,e,t);r.layers=this.layers,this.add(r);const a=new Nr(vl,_l,e,t);a.layers=this.layers,this.add(a);const l=new Nr(vl,_l,e,t);l.layers=this.layers,this.add(l);const c=new Nr(vl,_l,e,t);c.layers=this.layers,this.add(c);const f=new Nr(vl,_l,e,t);f.layers=this.layers,this.add(f);const h=new Nr(vl,_l,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,f]=t;for(const h of t)this.remove(h);if(e===gs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===lh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,m,g),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class BC extends Nr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vv=class vv{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};vv.prototype.isMatrix2=!0;let PS=vv;function LS(s,e,t,n){const r=zC(n);switch(t){case $M:return s*e;case ZM:return s*e/r.components*r.byteLength;case iv:return s*e/r.components*r.byteLength;case Ra:return s*e*2/r.components*r.byteLength;case rv:return s*e*2/r.components*r.byteLength;case KM:return s*e*3/r.components*r.byteLength;case ts:return s*e*4/r.components*r.byteLength;case sv:return s*e*4/r.components*r.byteLength;case Bd:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $0:case Z0:return Math.max(s,16)*Math.max(e,8)/4;case q0:case K0:return Math.max(s,8)*Math.max(e,8)/2;case J0:case Q0:case eg:case tg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case j0:case sh:case ng:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ig:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rg:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sg:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case og:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ag:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lg:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ug:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cg:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fg:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dg:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hg:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pg:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case mg:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gg:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vg:case _g:case xg:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yg:case Sg:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oh:case Mg:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zC(s){switch(s){case hr:case WM:return{byteLength:1,components:1};case Lc:case XM:case ns:return{byteLength:2,components:1};case tv:case nv:return{byteLength:2,components:4};case Ss:case ev:case ms:return{byteLength:4,components:1};case YM:case qM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jg}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jg);function hE(){let s=null,e=!1,t=null,n=null;function r(a,l){n=s.requestAnimationFrame(r),t(a,l)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function VC(s){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,_=h.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,h,p),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=s.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,f,h){const p=f.array,_=f.updateRanges;if(s.bindBuffer(h,c),_.length===0)s.bufferSubData(h,0,p);else{_.sort((g,S)=>g.start-S.start);let m=0;for(let g=1;g<_.length;g++){const S=_[m],E=_[g];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++m,_[m]=E)}_.length=m+1;for(let g=0,S=_.length;g<S;g++){const E=_[g];s.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:a,update:l}}var HC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$C=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_2="gl_FragColor = linearToOutputTexel( gl_FragColor );",x2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,I2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,F2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_P=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:HC,alphahash_pars_fragment:GC,alphamap_fragment:WC,alphamap_pars_fragment:XC,alphatest_fragment:YC,alphatest_pars_fragment:qC,aomap_fragment:$C,aomap_pars_fragment:KC,batching_pars_vertex:ZC,batching_vertex:JC,begin_vertex:QC,beginnormal_vertex:jC,bsdfs:e2,iridescence_fragment:t2,bumpmap_pars_fragment:n2,clipping_planes_fragment:i2,clipping_planes_pars_fragment:r2,clipping_planes_pars_vertex:s2,clipping_planes_vertex:o2,color_fragment:a2,color_pars_fragment:l2,color_pars_vertex:u2,color_vertex:c2,common:f2,cube_uv_reflection_fragment:d2,defaultnormal_vertex:h2,displacementmap_pars_vertex:p2,displacementmap_vertex:m2,emissivemap_fragment:g2,emissivemap_pars_fragment:v2,colorspace_fragment:_2,colorspace_pars_fragment:x2,envmap_fragment:y2,envmap_common_pars_fragment:S2,envmap_pars_fragment:M2,envmap_pars_vertex:E2,envmap_physical_pars_fragment:I2,envmap_vertex:w2,fog_vertex:T2,fog_pars_vertex:A2,fog_fragment:b2,fog_pars_fragment:R2,gradientmap_pars_fragment:C2,lightmap_pars_fragment:P2,lights_lambert_fragment:L2,lights_lambert_pars_fragment:D2,lights_pars_begin:N2,lights_toon_fragment:F2,lights_toon_pars_fragment:U2,lights_phong_fragment:O2,lights_phong_pars_fragment:k2,lights_physical_fragment:B2,lights_physical_pars_fragment:z2,lights_fragment_begin:V2,lights_fragment_maps:H2,lights_fragment_end:G2,lightprobes_pars_fragment:W2,logdepthbuf_fragment:X2,logdepthbuf_pars_fragment:Y2,logdepthbuf_pars_vertex:q2,logdepthbuf_vertex:$2,map_fragment:K2,map_pars_fragment:Z2,map_particle_fragment:J2,map_particle_pars_fragment:Q2,metalnessmap_fragment:j2,metalnessmap_pars_fragment:e3,morphinstance_vertex:t3,morphcolor_vertex:n3,morphnormal_vertex:i3,morphtarget_pars_vertex:r3,morphtarget_vertex:s3,normal_fragment_begin:o3,normal_fragment_maps:a3,normal_pars_fragment:l3,normal_pars_vertex:u3,normal_vertex:c3,normalmap_pars_fragment:f3,clearcoat_normal_fragment_begin:d3,clearcoat_normal_fragment_maps:h3,clearcoat_pars_fragment:p3,iridescence_pars_fragment:m3,opaque_fragment:g3,packing:v3,premultiplied_alpha_fragment:_3,project_vertex:x3,dithering_fragment:y3,dithering_pars_fragment:S3,roughnessmap_fragment:M3,roughnessmap_pars_fragment:E3,shadowmap_pars_fragment:w3,shadowmap_pars_vertex:T3,shadowmap_vertex:A3,shadowmask_pars_fragment:b3,skinbase_vertex:R3,skinning_pars_vertex:C3,skinning_vertex:P3,skinnormal_vertex:L3,specularmap_fragment:D3,specularmap_pars_fragment:N3,tonemapping_fragment:I3,tonemapping_pars_fragment:F3,transmission_fragment:U3,transmission_pars_fragment:O3,uv_pars_fragment:k3,uv_pars_vertex:B3,uv_vertex:z3,worldpos_vertex:V3,background_vert:H3,background_frag:G3,backgroundCube_vert:W3,backgroundCube_frag:X3,cube_vert:Y3,cube_frag:q3,depth_vert:$3,depth_frag:K3,distance_vert:Z3,distance_frag:J3,equirect_vert:Q3,equirect_frag:j3,linedashed_vert:eP,linedashed_frag:tP,meshbasic_vert:nP,meshbasic_frag:iP,meshlambert_vert:rP,meshlambert_frag:sP,meshmatcap_vert:oP,meshmatcap_frag:aP,meshnormal_vert:lP,meshnormal_frag:uP,meshphong_vert:cP,meshphong_frag:fP,meshphysical_vert:dP,meshphysical_frag:hP,meshtoon_vert:pP,meshtoon_frag:mP,points_vert:gP,points_frag:vP,shadow_vert:_P,shadow_frag:xP,sprite_vert:yP,sprite_frag:SP},ht={common:{diffuse:{value:new cn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new pe},probesMax:{value:new pe},probesResolution:{value:new pe}},points:{diffuse:{value:new cn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new cn(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},fs={basic:{uniforms:Pi([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Pi([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new cn(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Pi([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new cn(0)},specular:{value:new cn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Pi([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new cn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Pi([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new cn(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Pi([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Pi([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Pi([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Pi([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Pi([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Pi([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Pi([ht.common,ht.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Pi([ht.lights,ht.fog,{color:{value:new cn(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};fs.physical={uniforms:Pi([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new cn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new cn(0)},specularColor:{value:new cn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const bd={r:0,b:0,g:0},MP=new On,pE=new Gt;pE.set(-1,0,0,0,1,0,0,0,1);function EP(s,e,t,n,r,a){const l=new cn(0);let c=r===!0?0:1,f,h,p=null,_=0,m=null;function g(C){let O=C.isScene===!0?C.background:null;if(O&&O.isTexture){const A=C.backgroundBlurriness>0;O=e.get(O,A)}return O}function S(C){let O=!1;const A=g(C);A===null?x(l,c):A&&A.isColor&&(x(A,1),O=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(C,O){const A=g(O);A&&(A.isCubeTexture||A.mapping===Sh)?(h===void 0&&(h=new gr(new Bc(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Zl(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(MP.makeRotationFromEuler(O.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pE),h.material.toneMapped=rn.getTransfer(A.colorSpace)!==gn,(p!==A||_!==A.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,p=A,_=A.version,m=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new gr(new Kl(2,2),new kr({name:"BackgroundMaterial",uniforms:Zl(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:Aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,f.material.toneMapped=rn.getTransfer(A.colorSpace)!==gn,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||_!==A.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,p=A,_=A.version,m=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function x(C,O){C.getRGB(bd,fE(s)),t.buffers.color.setClear(bd.r,bd.g,bd.b,O,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,O=1){l.set(C),c=O,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,x(l,c)},render:S,addToRenderList:E,dispose:y}}function wP(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,l=!1;function c(Z,G,ie,X,j){let z=!1;const V=_(Z,X,ie,G);a!==V&&(a=V,h(a.object)),z=g(Z,X,ie,j),z&&S(Z,X,ie,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(z||l)&&(l=!1,A(Z,G,ie,X),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return s.createVertexArray()}function h(Z){return s.bindVertexArray(Z)}function p(Z){return s.deleteVertexArray(Z)}function _(Z,G,ie,X){const j=X.wireframe===!0;let z=n[G.id];z===void 0&&(z={},n[G.id]=z);const V=Z.isInstancedMesh===!0?Z.id:0;let Q=z[V];Q===void 0&&(Q={},z[V]=Q);let Y=Q[ie.id];Y===void 0&&(Y={},Q[ie.id]=Y);let I=Y[j];return I===void 0&&(I=m(f()),Y[j]=I),I}function m(Z){const G=[],ie=[],X=[];for(let j=0;j<t;j++)G[j]=0,ie[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ie,attributeDivisors:X,object:Z,attributes:{},index:null}}function g(Z,G,ie,X){const j=a.attributes,z=G.attributes;let V=0;const Q=ie.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const U=j[Y];let k=z[Y];if(k===void 0&&(Y==="instanceMatrix"&&Z.instanceMatrix&&(k=Z.instanceMatrix),Y==="instanceColor"&&Z.instanceColor&&(k=Z.instanceColor)),U===void 0||U.attribute!==k||k&&U.data!==k.data)return!0;V++}return a.attributesNum!==V||a.index!==X}function S(Z,G,ie,X){const j={},z=G.attributes;let V=0;const Q=ie.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let U=z[Y];U===void 0&&(Y==="instanceMatrix"&&Z.instanceMatrix&&(U=Z.instanceMatrix),Y==="instanceColor"&&Z.instanceColor&&(U=Z.instanceColor));const k={};k.attribute=U,U&&U.data&&(k.data=U.data),j[Y]=k,V++}a.attributes=j,a.attributesNum=V,a.index=X}function E(){const Z=a.newAttributes;for(let G=0,ie=Z.length;G<ie;G++)Z[G]=0}function x(Z){y(Z,0)}function y(Z,G){const ie=a.newAttributes,X=a.enabledAttributes,j=a.attributeDivisors;ie[Z]=1,X[Z]===0&&(s.enableVertexAttribArray(Z),X[Z]=1),j[Z]!==G&&(s.vertexAttribDivisor(Z,G),j[Z]=G)}function C(){const Z=a.newAttributes,G=a.enabledAttributes;for(let ie=0,X=G.length;ie<X;ie++)G[ie]!==Z[ie]&&(s.disableVertexAttribArray(ie),G[ie]=0)}function O(Z,G,ie,X,j,z,V){V===!0?s.vertexAttribIPointer(Z,G,ie,j,z):s.vertexAttribPointer(Z,G,ie,X,j,z)}function A(Z,G,ie,X){E();const j=X.attributes,z=ie.getAttributes(),V=G.defaultAttributeValues;for(const Q in z){const Y=z[Q];if(Y.location>=0){let I=j[Q];if(I===void 0&&(Q==="instanceMatrix"&&Z.instanceMatrix&&(I=Z.instanceMatrix),Q==="instanceColor"&&Z.instanceColor&&(I=Z.instanceColor)),I!==void 0){const U=I.normalized,k=I.itemSize,ve=e.get(I);if(ve===void 0)continue;const De=ve.buffer,se=ve.type,ke=ve.bytesPerElement,ee=se===s.INT||se===s.UNSIGNED_INT||I.gpuType===ev;if(I.isInterleavedBufferAttribute){const te=I.data,Pe=te.stride,Oe=I.offset;if(te.isInstancedInterleavedBuffer){for(let ze=0;ze<Y.locationSize;ze++)y(Y.location+ze,te.meshPerAttribute);Z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ze=0;ze<Y.locationSize;ze++)x(Y.location+ze);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ze=0;ze<Y.locationSize;ze++)O(Y.location+ze,k/Y.locationSize,se,U,Pe*ke,(Oe+k/Y.locationSize*ze)*ke,ee)}else{if(I.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)y(Y.location+te,I.meshPerAttribute);Z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let te=0;te<Y.locationSize;te++)x(Y.location+te);s.bindBuffer(s.ARRAY_BUFFER,De);for(let te=0;te<Y.locationSize;te++)O(Y.location+te,k/Y.locationSize,se,U,k*ke,k/Y.locationSize*te*ke,ee)}}else if(V!==void 0){const U=V[Q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}C()}function b(){L();for(const Z in n){const G=n[Z];for(const ie in G){const X=G[ie];for(const j in X){const z=X[j];for(const V in z)p(z[V].object),delete z[V];delete X[j]}}delete n[Z]}}function R(Z){if(n[Z.id]===void 0)return;const G=n[Z.id];for(const ie in G){const X=G[ie];for(const j in X){const z=X[j];for(const V in z)p(z[V].object),delete z[V];delete X[j]}}delete n[Z.id]}function N(Z){for(const G in n){const ie=n[G];for(const X in ie){const j=ie[X];if(j[Z.id]===void 0)continue;const z=j[Z.id];for(const V in z)p(z[V].object),delete z[V];delete j[Z.id]}}}function T(Z){for(const G in n){const ie=n[G],X=Z.isInstancedMesh===!0?Z.id:0,j=ie[X];if(j!==void 0){for(const z in j){const V=j[z];for(const Q in V)p(V[Q].object),delete V[Q];delete j[z]}delete ie[X],Object.keys(ie).length===0&&delete n[G]}}}function L(){B(),l=!0,a!==r&&(a=r,h(a.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:x,disableUnusedAttributes:C}}function TP(s,e,t){let n;function r(f){n=f}function a(f,h){s.drawArrays(n,f,h),t.update(h,n,1)}function l(f,h,p){p!==0&&(s.drawArraysInstanced(n,f,h,p),t.update(h,n,p))}function c(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,n,1)}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function AP(s,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==ts&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const T=N===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==hr&&N!==ms&&!T&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(kt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:C,maxVaryings:O,maxFragmentUniforms:A,maxSamples:b,samples:R}}function bP(s){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Ao,c=new Gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const g=_.length!==0||m||n!==0||r;return r=m,n=_.length,g},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,g){const S=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!r||S===null||S.length===0||a&&!x)a?p(null):h();else{const C=a?0:n,O=C*4;let A=y.clippingState||null;f.value=A,A=p(S,m,O,g);for(let b=0;b!==O;++b)A[b]=t[b];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,m,g,S){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=f.value,S!==!0||x===null){const y=g+E*4,C=m.matrixWorldInverse;c.getNormalMatrix(C),(x===null||x.length<y)&&(x=new Float32Array(y));for(let O=0,A=g;O!==E;++O,A+=4)l.copy(_[O]).applyMatrix4(C,c),l.normal.toArray(x,A),x[A+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const Cl=4,RP=6,CP=20,PP=256,zu=new dv,DS=new cn;let s0=null,o0=0,a0=0,l0=!1;const LP=new pe,aa=new pe;class NS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=LP}=a;s0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=US(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(s0,o0,a0),this._renderer.xr.enabled=l0,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===ql?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),s0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ns,format:ts,colorSpace:$l,depthBuffer:!1},r=IS(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=IS(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=DP(a)),this._blurMaterial=IP(a,e,t),this._ggxMaterial=NP(a,e,t)}return r}_compileMaterial(e){const t=new gr(new Qi,e);this._renderer.compile(t,zu)}_sceneToCubeUV(e,t,n,r,a){const f=new Nr(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,g=_.toneMapping;_.getClearColor(DS),_.toneMapping=xs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gr(new Bc,new rE({name:"PMREM.Background",side:Ki,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let y=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,y=!0):(x.color.copy(DS),y=!0);for(let O=0;O<6;O++){const A=O%3;A===0?(f.up.set(0,h[O],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[O],a.y,a.z)):A===1?(f.up.set(0,0,h[O]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[O],a.z)):(f.up.set(0,h[O],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[O]));const b=this._cubeSize;xl(r,A*b,O>2?b:0,b,b),_.setRenderTarget(r),y&&_.render(E,f),_.render(e,f)}_.toneMapping=g,_.autoClear=m,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ba||e.mapping===ql;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=US()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=FS());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;xl(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,zu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-p*p),m=h*1.25,g=_*m,{_lodMax:S}=this,E=this._sizeLods[n],x=3*E*(n>S-Cl?n-S+Cl:0),y=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=g,f.mipInt.value=S-t,xl(a,x,y,3*E,2*E),r.setRenderTarget(a),r.render(c,zu),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=S-n,xl(e,x,y,3*E,2*E),r.setRenderTarget(e),r.render(c,zu)}_blur(e,t,n,r){const a=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,l),this._blurPass(a,e,n,n,l)}_blurPass(e,t,n,r,a){const l=this._renderer,c=this._blurMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-n;const p=this._sizeLods[r],_=3*p*(r>this._lodMax-Cl?r-this._lodMax+Cl:0),m=4*(this._cubeSize-p);xl(t,_,m,3*p,2*p),l.setRenderTarget(t),l.render(f,zu)}}function DP(s){const e=[],t=[];let n=s;const r=s-Cl+1+RP;for(let a=0;a<r;a++){const l=Math.pow(2,n);e.push(l);const c=1/(l-2),f=-c,h=1+c,p=[f,f,h,f,h,h,f,f,h,h,f,h],_=6,m=6,g=3,S=new Float32Array(g*m*_),E=new Float32Array(g*m*_);for(let y=0;y<_;y++){const C=y%3*2/3-1,O=y>2?0:-1,A=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];S.set(A,g*m*y);for(let b=0;b<m;b++){const R=p[b*2]*2-1,N=p[b*2+1]*2-1;y===0?aa.set(1,N,R):y===1?aa.set(-R,1,-N):y===2?aa.set(-R,N,1):y===3?aa.set(-1,N,-R):y===4?aa.set(-R,-1,N):aa.set(R,N,-1),aa.toArray(E,(y*m+b)*g)}}const x=new Qi;x.setAttribute("position",new _r(S,g)),x.setAttribute("outputDirection",new _r(E,g)),t.push(new gr(x,null)),n>Cl&&n--}return{lodMeshes:t,sizeLods:e}}function IS(s,e,t){const n=new Or(s,e,t);return n.texture.mapping=Sh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xl(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function NP(s,e,t){return new kr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function IP(s,e,t){return new kr({name:"SphericalGaussianBlur",defines:{SAMPLES:CP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function FS(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function US(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mE extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oE(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bc(5,5,5),a=new kr({name:"CubemapFromEquirect",uniforms:Zl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ki,blending:_s});a.uniforms.tEquirect.value=t;const l=new gr(r,a),c=t.minFilter;return t.minFilter===pa&&(t.minFilter=Ei),new kC(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function FP(s){let e=new WeakMap,t=new WeakMap,n=null;function r(m,g=!1){return m==null?null:g?l(m):a(m)}function a(m){if(m&&m.isTexture){const g=m.mapping;if(g===Cm||g===Pm)if(e.has(m)){const S=e.get(m).texture;return c(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const E=new mE(S.height);return E.fromEquirectangularTexture(s,m),e.set(m,E),m.addEventListener("dispose",h),c(E.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const g=m.mapping,S=g===Cm||g===Pm,E=g===ba||g===ql;if(S||E){let x=t.get(m);const y=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return n===null&&(n=new NS(s)),x=S?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const C=m.image;return S&&C&&C.height>0||E&&C&&f(C)?(n===null&&(n=new NS(s)),x=S?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",p),x.texture):null}}}return m}function c(m,g){return g===Cm?m.mapping=ba:g===Pm&&(m.mapping=ql),m}function f(m){let g=0;const S=6;for(let E=0;E<S;E++)m[E]!==void 0&&g++;return g===S}function h(m){const g=m.target;g.removeEventListener("dispose",h);const S=e.get(g);S!==void 0&&(e.delete(g),S.dispose())}function p(m){const g=m.target;g.removeEventListener("dispose",p);const S=t.get(g);S!==void 0&&(t.delete(g),S.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:_}}function UP(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=s.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Bl("WebGLRenderer: "+n+" extension not supported."),r}}}function OP(s,e,t,n){const r={},a=new WeakMap;function l(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",l),delete r[m.id];const g=a.get(m);g&&(e.remove(g),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(_,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function f(_){const m=_.attributes;for(const g in m)e.update(m[g],s.ARRAY_BUFFER)}function h(_){const m=[],g=_.index,S=_.attributes.position;let E=0;if(S===void 0)return;if(g!==null){const C=g.array;E=g.version;for(let O=0,A=C.length;O<A;O+=3){const b=C[O+0],R=C[O+1],N=C[O+2];m.push(b,R,R,N,N,b)}}else{const C=S.array;E=S.version;for(let O=0,A=C.length/3-1;O<A;O+=3){const b=O+0,R=O+1,N=O+2;m.push(b,R,R,N,N,b)}}const x=new(S.count>=65535?nE:tE)(m,1);x.version=E;const y=a.get(_);y&&e.remove(y),a.set(_,x)}function p(_){const m=a.get(_);if(m){const g=_.index;g!==null&&m.version<g.version&&h(_)}else h(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function kP(s,e,t){let n;function r(_){n=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function f(_,m){s.drawElements(n,m,a,_*l),t.update(m,n,1)}function h(_,m,g){g!==0&&(s.drawElementsInstanced(n,m,a,_*l,g),t.update(m,n,g))}function p(_,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,_,0,g);let E=0;for(let x=0;x<g;x++)E+=m[x];t.update(E,n,1)}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function BP(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:un("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zP(s,e,t){const n=new WeakMap,r=new In;function a(l,c,f){const h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==_){let B=function(){T.dispose(),n.delete(c),c.removeEventListener("dispose",B)};var g=B;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],O=c.morphAttributes.color||[];let A=0;S===!0&&(A=1),E===!0&&(A=2),x===!0&&(A=3);let b=c.attributes.position.count*A,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const N=new Float32Array(b*R*4*_),T=new QM(N,b,R,_);T.type=ms,T.needsUpdate=!0;const L=A*4;for(let Z=0;Z<_;Z++){const G=y[Z],ie=C[Z],X=O[Z],j=b*R*4*Z;for(let z=0;z<G.count;z++){const V=z*L;S===!0&&(r.fromBufferAttribute(G,z),N[j+V+0]=r.x,N[j+V+1]=r.y,N[j+V+2]=r.z,N[j+V+3]=0),E===!0&&(r.fromBufferAttribute(ie,z),N[j+V+4]=r.x,N[j+V+5]=r.y,N[j+V+6]=r.z,N[j+V+7]=0),x===!0&&(r.fromBufferAttribute(X,z),N[j+V+8]=r.x,N[j+V+9]=r.y,N[j+V+10]=r.z,N[j+V+11]=X.itemSize===4?r.w:1)}}m={count:_,texture:T,size:new Nt(b,R)},n.set(c,m),c.addEventListener("dispose",B)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let S=0;for(let x=0;x<h.length;x++)S+=h[x];const E=c.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function VP(s,e,t,n,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,m=e.get(h,_);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const g=h.skeleton;a.get(g)!==p&&(g.update(),a.set(g,p))}return m}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const HP={[UM]:"LINEAR_TONE_MAPPING",[OM]:"REINHARD_TONE_MAPPING",[kM]:"CINEON_TONE_MAPPING",[BM]:"ACES_FILMIC_TONE_MAPPING",[VM]:"AGX_TONE_MAPPING",[HM]:"NEUTRAL_TONE_MAPPING",[zM]:"CUSTOM_TONE_MAPPING"};function GP(s,e,t,n,r,a){const l=new Or(e,t,{type:s,depthBuffer:r,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,f=null;const h=new Qi;h.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fi([0,2,0,0,2,0],2));const p=new IC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new gr(h,p),m=new dv(-1,1,1,-1,0,1);let g=null,S=null,E=!1,x,y=null,C=[],O=!1;this.setSize=function(A,b){l.setSize(A,b),c!==null&&c.setSize(A,b),f!==null&&f.setSize(A,b);for(let R=0;R<C.length;R++){const N=C[R];N.setSize&&N.setSize(A,b)}},this.setEffects=function(A){C=A,O=C.length>0&&C[0].isRenderPass===!0;const b=l.width,R=l.height;C.length>0&&c===null&&(c=new Or(b,R,{type:ns,depthBuffer:!1,stencilBuffer:!1}),f=new Or(b,R,{type:ns,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<C.length;N++){const T=C[N];T.setSize&&T.setSize(b,R)}},this.begin=function(A,b){if(E||A.toneMapping===xs&&C.length===0)return!1;if(y=b,b!==null){const R=b.width,N=b.height;(l.width!==R||l.height!==N)&&this.setSize(R,N)}return O===!1&&A.setRenderTarget(l),x=A.toneMapping,A.toneMapping=xs,!0},this.hasRenderPass=function(){return O},this.end=function(A,b){A.toneMapping=x,E=!0;let R=l,N=c;for(let T=0;T<C.length;T++){const L=C[T];L.enabled!==!1&&(L.render(A,N,R,b),L.needsSwap!==!1&&(R=N,N=N===c?f:c))}if(g!==A.outputColorSpace||S!==A.toneMapping){g=A.outputColorSpace,S=A.toneMapping,p.defines={},rn.getTransfer(g)===gn&&(p.defines.SRGB_TRANSFER="");const T=HP[S];T&&(p.defines[T]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,A.setRenderTarget(y),A.render(_,m),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){l.dispose(),c!==null&&c.dispose(),f!==null&&f.dispose(),h.dispose(),p.dispose()}}const gE=new Fi,wg=new Nc(1,1),vE=new QM,_E=new $R,xE=new oE,OS=[],kS=[],BS=new Float32Array(16),zS=new Float32Array(9),VS=new Float32Array(4);function Ql(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=OS[r];if(a===void 0&&(a=new Float32Array(r),OS[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function Jn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wh(s,e){let t=kS[e];t===void 0&&(t=new Int32Array(e),kS[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function WP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function XP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2fv(this.addr,e),Qn(t,e)}}function YP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jn(t,e))return;s.uniform3fv(this.addr,e),Qn(t,e)}}function qP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4fv(this.addr,e),Qn(t,e)}}function $P(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;VS.set(n),s.uniformMatrix2fv(this.addr,!1,VS),Qn(t,n)}}function KP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;zS.set(n),s.uniformMatrix3fv(this.addr,!1,zS),Qn(t,n)}}function ZP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;BS.set(n),s.uniformMatrix4fv(this.addr,!1,BS),Qn(t,n)}}function JP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function QP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2iv(this.addr,e),Qn(t,e)}}function jP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jn(t,e))return;s.uniform3iv(this.addr,e),Qn(t,e)}}function eL(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4iv(this.addr,e),Qn(t,e)}}function tL(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nL(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2uiv(this.addr,e),Qn(t,e)}}function iL(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jn(t,e))return;s.uniform3uiv(this.addr,e),Qn(t,e)}}function rL(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4uiv(this.addr,e),Qn(t,e)}}function sL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(wg.compareFunction=t.isReversedDepthBuffer()?av:ov,a=wg):a=gE,t.setTexture2D(e||a,r)}function oL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_E,r)}function aL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xE,r)}function lL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vE,r)}function uL(s){switch(s){case 5126:return WP;case 35664:return XP;case 35665:return YP;case 35666:return qP;case 35674:return $P;case 35675:return KP;case 35676:return ZP;case 5124:case 35670:return JP;case 35667:case 35671:return QP;case 35668:case 35672:return jP;case 35669:case 35673:return eL;case 5125:return tL;case 36294:return nL;case 36295:return iL;case 36296:return rL;case 35678:case 36198:case 36298:case 36306:case 35682:return sL;case 35679:case 36299:case 36307:return oL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return lL}}function cL(s,e){s.uniform1fv(this.addr,e)}function fL(s,e){const t=Ql(e,this.size,2);s.uniform2fv(this.addr,t)}function dL(s,e){const t=Ql(e,this.size,3);s.uniform3fv(this.addr,t)}function hL(s,e){const t=Ql(e,this.size,4);s.uniform4fv(this.addr,t)}function pL(s,e){const t=Ql(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mL(s,e){const t=Ql(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gL(s,e){const t=Ql(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vL(s,e){s.uniform1iv(this.addr,e)}function _L(s,e){s.uniform2iv(this.addr,e)}function xL(s,e){s.uniform3iv(this.addr,e)}function yL(s,e){s.uniform4iv(this.addr,e)}function SL(s,e){s.uniform1uiv(this.addr,e)}function ML(s,e){s.uniform2uiv(this.addr,e)}function EL(s,e){s.uniform3uiv(this.addr,e)}function wL(s,e){s.uniform4uiv(this.addr,e)}function TL(s,e,t){const n=this.cache,r=e.length,a=wh(t,r);Jn(n,a)||(s.uniform1iv(this.addr,a),Qn(n,a));let l;this.type===s.SAMPLER_2D_SHADOW?l=wg:l=gE;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function AL(s,e,t){const n=this.cache,r=e.length,a=wh(t,r);Jn(n,a)||(s.uniform1iv(this.addr,a),Qn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||_E,a[l])}function bL(s,e,t){const n=this.cache,r=e.length,a=wh(t,r);Jn(n,a)||(s.uniform1iv(this.addr,a),Qn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||xE,a[l])}function RL(s,e,t){const n=this.cache,r=e.length,a=wh(t,r);Jn(n,a)||(s.uniform1iv(this.addr,a),Qn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||vE,a[l])}function CL(s){switch(s){case 5126:return cL;case 35664:return fL;case 35665:return dL;case 35666:return hL;case 35674:return pL;case 35675:return mL;case 35676:return gL;case 5124:case 35670:return vL;case 35667:case 35671:return _L;case 35668:case 35672:return xL;case 35669:case 35673:return yL;case 5125:return SL;case 36294:return ML;case 36295:return EL;case 36296:return wL;case 35678:case 36198:case 36298:case 36306:case 35682:return TL;case 35679:case 36299:case 36307:return AL;case 35680:case 36300:case 36308:case 36293:return bL;case 36289:case 36303:case 36311:case 36292:return RL}}class PL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uL(t.type)}}class LL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CL(t.type)}}class DL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const u0=/(\w+)(\])?(\[|\.)?/g;function HS(s,e){s.seq.push(e),s.map[e.id]=e}function NL(s,e,t){const n=s.name,r=n.length;for(u0.lastIndex=0;;){const a=u0.exec(n),l=u0.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===r){HS(t,h===void 0?new PL(c,s,e):new LL(c,s,e));break}else{let _=t.map[c];_===void 0&&(_=new DL(c),HS(t,_)),t=_}}}class Gd{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);NL(c,f,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function GS(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const IL=37297;let FL=0;function UL(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const WS=new Gt;function OL(s){rn._getMatrix(WS,rn.workingColorSpace,s);const e=`mat3( ${WS.elements.map(t=>t.toFixed(4))} )`;switch(rn.getTransfer(s)){case ah:return[e,"LinearTransferOETF"];case gn:return[e,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function XS(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+UL(s.getShaderSource(e),c)}else return a}function kL(s,e){const t=OL(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const BL={[UM]:"Linear",[OM]:"Reinhard",[kM]:"Cineon",[BM]:"ACESFilmic",[VM]:"AgX",[HM]:"Neutral",[zM]:"Custom"};function zL(s,e){const t=BL[e];return t===void 0?(kt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rd=new pe;function VL(){rn.getLuminanceCoefficients(Rd);const s=Rd.x.toFixed(4),e=Rd.y.toFixed(4),t=Rd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HL(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function GL(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WL(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function ec(s){return s!==""}function YS(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qS(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tg(s){return s.replace(XL,qL)}const YL=new Map;function qL(s,e){let t=Yt[e];if(t===void 0){const n=YL.get(e);if(n!==void 0)t=Yt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tg(t)}const $L=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $S(s){return s.replace($L,KL)}function KL(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function KS(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZL={[kd]:"SHADOWMAP_TYPE_PCF",[ju]:"SHADOWMAP_TYPE_VSM"};function JL(s){return ZL[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QL={[ba]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE",[Sh]:"ENVMAP_TYPE_CUBE_UV"};function jL(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QL[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eD={[ql]:"ENVMAP_MODE_REFRACTION"};function tD(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eD[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nD={[FM]:"ENVMAP_BLENDING_MULTIPLY",[TR]:"ENVMAP_BLENDING_MIX",[AR]:"ENVMAP_BLENDING_ADD"};function iD(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nD[s.combine]||"ENVMAP_BLENDING_NONE"}function rD(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sD(s,e,t,n){const r=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=JL(t),h=jL(t),p=tD(t),_=iD(t),m=rD(t),g=HL(t),S=GL(a),E=r.createProgram();let x,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ec).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ec).join(`
`),y.length>0&&(y+=`
`)):(x=[KS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),y=[KS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?Yt.tonemapping_pars_fragment:"",t.toneMapping!==xs?zL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,kL("linearToOutputTexel",t.outputColorSpace),VL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ec).join(`
`)),l=Tg(l),l=YS(l,t),l=qS(l,t),c=Tg(c),c=YS(c,t),c=qS(c,t),l=$S(l),c=$S(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===nS?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=C+x+l,A=C+y+c,b=GS(r,r.VERTEX_SHADER,O),R=GS(r,r.FRAGMENT_SHADER,A);r.attachShader(E,b),r.attachShader(E,R),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function N(Z){if(s.debug.checkShaderErrors){const G=r.getProgramInfoLog(E)||"",ie=r.getShaderInfoLog(b)||"",X=r.getShaderInfoLog(R)||"",j=G.trim(),z=ie.trim(),V=X.trim();let Q=!0,Y=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,E,b,R);else{const I=XS(r,b,"vertex"),U=XS(r,R,"fragment");un("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+j+`
`+I+`
`+U)}else j!==""?kt("WebGLProgram: Program Info Log:",j):(z===""||V==="")&&(Y=!1);Y&&(Z.diagnostics={runnable:Q,programLog:j,vertexShader:{log:z,prefix:x},fragmentShader:{log:V,prefix:y}})}r.deleteShader(b),r.deleteShader(R),T=new Gd(r,E),L=WL(r,E)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(E,IL)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FL++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=R,this}let oD=0;class aD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lD(e),t.set(e,n)),n}}class lD{constructor(e){this.id=oD++,this.code=e,this.usedTimes=0}}function uD(s){return s===Ra||s===sh||s===oh}function cD(s,e,t,n,r,a){const l=new jM,c=new aD,f=new Set,h=[],p=new Map,_=n.logarithmicDepthBuffer;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return f.add(T),T===0?"uv":`uv${T}`}function E(T,L,B,Z,G,ie){const X=Z.fog,j=G.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||z,V),Y=Q&&Q.mapping===Sh?Q.image.height:null,I=g[T.type];T.precision!==null&&(m=n.getMaxPrecision(T.precision),m!==T.precision&&kt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,k=U!==void 0?U.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let De,se,ke,ee;if(I){const Be=fs[I];De=Be.vertexShader,se=Be.fragmentShader}else{De=T.vertexShader,se=T.fragmentShader;const Be=c.getVertexShaderStage(T),_e=c.getFragmentShaderStage(T);c.update(T,Be,_e),ke=Be.id,ee=_e.id}const te=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,ze=G.isBatchedMesh===!0,qe=!!T.map,st=!!T.matcap,Ke=!!Q,$e=!!T.aoMap,be=!!T.lightMap,fe=!!T.bumpMap&&T.wireframe===!1,Et=!!T.normalMap,Ze=!!T.displacementMap,it=!!T.emissiveMap,Qe=!!T.metalnessMap,vt=!!T.roughnessMap,q=T.anisotropy>0,We=T.clearcoat>0,Le=T.dispersion>0,F=T.retroreflectivity>0,w=T.iridescence>0,$=T.sheen>0,W=T.transmission>0,de=q&&!!T.anisotropyMap,Ne=We&&!!T.clearcoatMap,Fe=We&&!!T.clearcoatNormalMap,Ee=We&&!!T.clearcoatRoughnessMap,we=w&&!!T.iridescenceMap,Xe=w&&!!T.iridescenceThicknessMap,Je=$&&!!T.sheenColorMap,Se=$&&!!T.sheenRoughnessMap,xe=!!T.specularMap,me=!!T.specularColorMap,Re=!!T.specularIntensityMap,Ge=W&&!!T.transmissionMap,K=W&&!!T.thicknessMap,Ue=!!T.gradientMap,ge=!!T.alphaMap,Ve=T.alphaTest>0,ye=!!T.alphaHash,H=!!T.extensions;let oe=xs;T.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(oe=s.toneMapping);const ne={shaderID:I,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:se,defines:T.defines,customVertexShaderID:ke,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ze,batchingColor:ze&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:st,envMap:Ke,envMapMode:Ke&&Q.mapping,envMapCubeUVHeight:Y,aoMap:$e,lightMap:be,bumpMap:fe,normalMap:Et,displacementMap:Ze,emissiveMap:it,normalMapObjectSpace:Et&&T.normalMapType===CR,normalMapTangentSpace:Et&&T.normalMapType===tS,packedNormalMap:Et&&T.normalMapType===tS&&uD(T.normalMap.format),metalnessMap:Qe,roughnessMap:vt,anisotropy:q,anisotropyMap:de,clearcoat:We,clearcoatMap:Ne,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Ee,dispersion:Le,retroreflection:F,iridescence:w,iridescenceMap:we,iridescenceThicknessMap:Xe,sheen:$,sheenColorMap:Je,sheenRoughnessMap:Se,specularMap:xe,specularColorMap:me,specularIntensityMap:Re,transmission:W,transmissionMap:Ge,thicknessMap:K,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===kl&&T.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ve,alphaHash:ye,combine:T.combine,mapUv:qe&&S(T.map.channel),aoMapUv:$e&&S(T.aoMap.channel),lightMapUv:be&&S(T.lightMap.channel),bumpMapUv:fe&&S(T.bumpMap.channel),normalMapUv:Et&&S(T.normalMap.channel),displacementMapUv:Ze&&S(T.displacementMap.channel),emissiveMapUv:it&&S(T.emissiveMap.channel),metalnessMapUv:Qe&&S(T.metalnessMap.channel),roughnessMapUv:vt&&S(T.roughnessMap.channel),anisotropyMapUv:de&&S(T.anisotropyMap.channel),clearcoatMapUv:Ne&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&S(T.sheenRoughnessMap.channel),specularMapUv:xe&&S(T.specularMap.channel),specularColorMapUv:me&&S(T.specularColorMap.channel),specularIntensityMapUv:Re&&S(T.specularIntensityMap.channel),transmissionMapUv:Ge&&S(T.transmissionMap.channel),thicknessMapUv:K&&S(T.thicknessMap.channel),alphaMapUv:ge&&S(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Et||q),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(qe||ge),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&Et===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ve,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&rn.getTransfer(T.map.colorSpace)===gn,decodeVideoTextureEmissive:it&&T.emissiveMap.isVideoTexture===!0&&rn.getTransfer(T.emissiveMap.colorSpace)===gn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hs,flipSided:T.side===Ki,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:H&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(H&&T.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ne.vertexUv1s=f.has(1),ne.vertexUv2s=f.has(2),ne.vertexUv3s=f.has(3),f.clear(),ne}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)L.push(B),L.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(y(L,T),C(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.retroreflection&&l.enable(24),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),L.packedNormalMap&&l.enable(22),L.vertexNormals&&l.enable(23),T.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),L.numLightProbeGrids>0&&l.enable(22),L.hasPositionAttribute&&l.enable(23),T.push(l.mask)}function O(T){const L=g[T.type];let B;if(L){const Z=fs[L];B=LC.clone(Z.uniforms)}else B=T.uniforms;return B}function A(T,L){let B=p.get(L);return B!==void 0?++B.usedTimes:(B=new sD(s,L,T,r),h.push(B),p.set(L,B)),B}function b(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function R(T){c.remove(T)}function N(){c.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:O,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:N}}function fD(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,f){s.get(l)[c]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function dD(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ZS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function JS(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function c(m,g,S,E,x,y){let C=s[e];return C===void 0?(C={id:m.id,object:m,geometry:g,material:S,materialVariant:l(m),groupOrder:E,renderOrder:m.renderOrder,z:x,group:y},s[e]=C):(C.id=m.id,C.object=m,C.geometry=g,C.material=S,C.materialVariant=l(m),C.groupOrder=E,C.renderOrder=m.renderOrder,C.z=x,C.group=y),e++,C}function f(m,g,S,E,x,y,C){C.reversedDepth===!0&&(x=-x);const O=c(m,g,S,E,x,y);S.transmission>0?n.push(O):S.transparent===!0?r.push(O):t.push(O)}function h(m,g,S,E,x,y){const C=c(m,g,S,E,x,y);S.transmission>0?n.unshift(C):S.transparent===!0?r.unshift(C):t.unshift(C)}function p(m,g){t.length>1&&t.sort(m||dD),n.length>1&&n.sort(g||ZS),r.length>1&&r.sort(g||ZS)}function _(){for(let m=e,g=s.length;m<g;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:f,unshift:h,finish:_,sort:p}}function hD(){let s=new WeakMap;function e(n,r){const a=s.get(n);let l;return a===void 0?(l=new JS,s.set(n,[l])):r>=a.length?(l=new JS,a.push(l)):l=a[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function pD(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new pe,color:new cn};break;case"SpotLight":t={position:new pe,direction:new pe,color:new cn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new cn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new cn,groundColor:new cn};break;case"RectAreaLight":t={color:new cn,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=t,t}}}function mD(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gD=0;function vD(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _D(s){const e=new pD,t=mD(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new pe);const r=new pe,a=new On,l=new On;function c(h){let p=0,_=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,S=0,E=0,x=0,y=0,C=0,O=0,A=0,b=0,R=0,N=0,T=0,L=0,B=0;h.sort(vD);for(let G=0,ie=h.length;G<ie;G++){const X=h[G],j=X.color,z=X.intensity,V=X.distance;let Q=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ra?Q=X.shadow.map.texture:Q=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)p+=j.r*z,_+=j.g*z,m+=j.b*z;else if(X.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(X.sh.coefficients[Y],z);B++}else if(X.isSunLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const I=X.shadow,U=t.get(X);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[S]=U,n.sunShadowMap[S]=Q;const k=I.getViewportCount();for(let ve=0;ve<k;ve++)n.sunShadowMatrix[E+ve]=I.getMatrix(ve),n.sunShadowCascade[E+ve]=I._cascadeData[ve];E+=k,S++}n.sun[g]=Y,g++}else if(X.isDirectionalLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const I=X.shadow,U=t.get(X);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,n.directionalShadow[x]=U,n.directionalShadowMap[x]=Q,n.directionalShadowMatrix[x]=X.shadow.matrix,b++}n.directional[x]=Y,x++}else if(X.isSpotLight){const Y=e.get(X);Y.position.setFromMatrixPosition(X.matrixWorld),Y.color.copy(j).multiplyScalar(z),Y.distance=V,Y.coneCos=Math.cos(X.angle),Y.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Y.decay=X.decay,n.spot[C]=Y;const I=X.shadow;if(X.map&&(n.spotLightMap[T]=X.map,T++,I.updateMatrices(X),X.castShadow&&L++),n.spotLightMatrix[C]=I.matrix,X.castShadow){const U=t.get(X);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,n.spotShadow[C]=U,n.spotShadowMap[C]=Q,N++}C++}else if(X.isRectAreaLight){const Y=e.get(X);Y.color.copy(j).multiplyScalar(z),Y.halfWidth.set(X.width*.5,0,0),Y.halfHeight.set(0,X.height*.5,0),n.rectArea[O]=Y,O++}else if(X.isPointLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),Y.distance=X.distance,Y.decay=X.decay,X.castShadow){const I=X.shadow,U=t.get(X);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,U.shadowCameraNear=I.camera.near,U.shadowCameraFar=I.camera.far,n.pointShadow[y]=U,n.pointShadowMap[y]=Q,n.pointShadowMatrix[y]=X.shadow.matrix,R++}n.point[y]=Y,y++}else if(X.isHemisphereLight){const Y=e.get(X);Y.skyColor.copy(X.color).multiplyScalar(z),Y.groundColor.copy(X.groundColor).multiplyScalar(z),n.hemi[A]=Y,A++}}O>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;const Z=n.hash;(Z.sunLength!==g||Z.directionalLength!==x||Z.pointLength!==y||Z.spotLength!==C||Z.rectAreaLength!==O||Z.hemiLength!==A||Z.numSunShadows!==S||Z.numDirectionalShadows!==b||Z.numPointShadows!==R||Z.numSpotShadows!==N||Z.numSpotMaps!==T||Z.numLightProbes!==B)&&(n.sun.length=g,n.directional.length=x,n.spot.length=C,n.rectArea.length=O,n.point.length=y,n.hemi.length=A,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,Z.sunLength=g,Z.directionalLength=x,Z.pointLength=y,Z.spotLength=C,Z.rectAreaLength=O,Z.hemiLength=A,Z.numSunShadows=S,Z.numDirectionalShadows=b,Z.numPointShadows=R,Z.numSpotShadows=N,Z.numSpotMaps=T,Z.numLightProbes=B,n.version=gD++)}function f(h,p){let _=0,m=0,g=0,S=0,E=0,x=0;const y=p.matrixWorldInverse;for(let C=0,O=h.length;C<O;C++){const A=h[C];if(A.isSunLight){const b=n.sun[_];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(y),_++}else if(A.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),m++}else if(A.isSpotLight){const b=n.spot[S];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),S++}else if(A.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(y),l.identity(),a.copy(A.matrixWorld),a.premultiply(y),l.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),E++}else if(A.isPointLight){const b=n.point[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(y),g++}else if(A.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(y),x++}}}return{setup:c,setupView:f,state:n}}function QS(s){const e=new _D(s),t=[],n=[],r=[];function a(m){_.camera=m,t.length=0,n.length=0,r.length=0}function l(m){t.push(m)}function c(m){n.push(m)}function f(m){r.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:_,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:c,pushLightProbeGrid:f}}function xD(s){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new QS(s),e.set(r,[c])):a>=l.length?(c=new QS(s),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const yD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MD=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],ED=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],jS=new On,Vu=new pe,c0=new pe;function wD(s,e,t){let n=new sE;const r=new Nt,a=new Nt,l=new In,c=new FC,f=new UC,h={},p=t.maxTextureSize,_={[Aa]:Ki,[Ki]:Aa,[Hs]:Hs},m=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:yD,fragmentShader:SD}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const S=new Qi;S.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new gr(S,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let y=this.type;this.render=function(R,N,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===uR&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kd);const L=s.getRenderTarget(),B=s.getActiveCubeFace(),Z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(_s),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ie=y!==this.type;ie&&N.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=R.length;X<j;X++){const z=R[X],V=z.shadow;if(V===void 0){kt("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Q=V.getFrameExtents();r.multiply(Q),a.copy(V.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/Q.x),r.x=a.x*Q.x,V.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/Q.y),r.y=a.y*Q.y,V.mapSize.y=a.y));const Y=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||ie===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ju){if(z.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Or(r.x,r.y,{format:Ra,type:ns,minFilter:Ei,magFilter:Ei,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Nc(r.x,r.y,ms),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Ks,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ui,V.map.depthTexture.magFilter=ui}else z.isPointLight?(V.map=new mE(r.x),V.map.depthTexture=new pC(r.x,Ss)):(V.map=new Or(r.x,r.y),V.map.depthTexture=new Nc(r.x,r.y,Ss)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Ks,this.type===kd?(V.map.depthTexture.compareFunction=Y?av:ov,V.map.depthTexture.minFilter=Ei,V.map.depthTexture.magFilter=Ei):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ui,V.map.depthTexture.magFilter=ui);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const I=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,T);for(let U=0;U<I;U++){const k=V.getCamera(U);if(z.isPointLight){const ve=V.camera,De=V.matrix,se=z.distance||ve.far;se!==ve.far&&(ve.far=se,ve.updateProjectionMatrix()),Vu.setFromMatrixPosition(z.matrixWorld),ve.position.copy(Vu),c0.copy(ve.position),c0.add(MD[U]),ve.up.copy(ED[U]),ve.lookAt(c0),ve.updateMatrixWorld(),De.makeTranslation(-Vu.x,-Vu.y,-Vu.z),jS.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix(jS,ve.coordinateSystem,ve.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,U),s.clear();else{U===0&&(s.setRenderTarget(V.map),s.clear());const ve=V.getViewport(U);l.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),G.viewport(l)}n=V.getFrustum(U),A(N,T,k,z,this.type)}V.isPointLightShadow!==!0&&this.type===ju&&C(V,T),V.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(L,B,Z)};function C(R,N){const T=e.update(E);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new Or(r.x,r.y,{format:Ra,type:ns}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(N,null,T,m,E,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(N,null,T,g,E,null)}function O(R,N,T,L){let B=null;const Z=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(Z!==void 0)B=Z;else if(B=T.isPointLight===!0?f:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const G=B.uuid,ie=N.uuid;let X=h[G];X===void 0&&(X={},h[G]=X);let j=X[ie];j===void 0&&(j=B.clone(),X[ie]=j,N.addEventListener("dispose",b)),B=j}if(B.visible=N.visible,B.wireframe=N.wireframe,L===ju?B.side=N.shadowSide!==null?N.shadowSide:N.side:B.side=N.shadowSide!==null?N.shadowSide:_[N.side],B.alphaMap=N.alphaMap,B.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,B.map=N.map,B.clipShadows=N.clipShadows,B.clippingPlanes=N.clippingPlanes,B.clipIntersection=N.clipIntersection,B.displacementMap=N.displacementMap,B.displacementScale=N.displacementScale,B.displacementBias=N.displacementBias,B.wireframeLinewidth=N.wireframeLinewidth,B.linewidth=N.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const G=s.properties.get(B);G.light=T}return B}function A(R,N,T,L,B){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===ju)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const ie=e.update(R),X=R.material;if(Array.isArray(X)){const j=ie.groups;for(let z=0,V=j.length;z<V;z++){const Q=j[z],Y=X[Q.materialIndex];if(Y&&Y.visible){const I=O(R,Y,L,B);R.onBeforeShadow(s,R,N,T,ie,I,Q),s.renderBufferDirect(T,null,ie,I,R,Q),R.onAfterShadow(s,R,N,T,ie,I,Q)}}}else if(X.visible){const j=O(R,X,L,B);R.onBeforeShadow(s,R,N,T,ie,j,null),s.renderBufferDirect(T,null,ie,j,R,null),R.onAfterShadow(s,R,N,T,ie,j,null)}}const G=R.children;for(let ie=0,X=G.length;ie<X;ie++)A(G[ie],N,T,L,B)}function b(R){R.target.removeEventListener("dispose",b);for(const T in h){const L=h[T],B=R.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function TD(s,e){function t(){let K=!1;const Ue=new In;let ge=null;const Ve=new In(0,0,0,0);return{setMask:function(ye){ge!==ye&&!K&&(s.colorMask(ye,ye,ye,ye),ge=ye)},setLocked:function(ye){K=ye},setClear:function(ye,H,oe,ne,Be){Be===!0&&(ye*=ne,H*=ne,oe*=ne),Ue.set(ye,H,oe,ne),Ve.equals(Ue)===!1&&(s.clearColor(ye,H,oe,ne),Ve.copy(Ue))},reset:function(){K=!1,ge=null,Ve.set(-1,0,0,0)}}}function n(){let K=!1,Ue=!1,ge=null,Ve=null,ye=null;return{setReversed:function(H){if(Ue!==H){const oe=e.get("EXT_clip_control");H?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Ue=H;const ne=ye;ye=null,this.setClear(ne)}},getReversed:function(){return Ue},setTest:function(H){H?te(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(H){ge!==H&&!K&&(s.depthMask(H),ge=H)},setFunc:function(H){if(Ue&&(H=VR[H]),Ve!==H){switch(H){case k0:s.depthFunc(s.NEVER);break;case B0:s.depthFunc(s.ALWAYS);break;case z0:s.depthFunc(s.LESS);break;case Pc:s.depthFunc(s.LEQUAL);break;case V0:s.depthFunc(s.EQUAL);break;case H0:s.depthFunc(s.GEQUAL);break;case G0:s.depthFunc(s.GREATER);break;case W0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ve=H}},setLocked:function(H){K=H},setClear:function(H){ye!==H&&(ye=H,Ue&&(H=1-H),s.clearDepth(H))},reset:function(){K=!1,ge=null,Ve=null,ye=null,Ue=!1}}}function r(){let K=!1,Ue=null,ge=null,Ve=null,ye=null,H=null,oe=null,ne=null,Be=null;return{setTest:function(_e){K||(_e?te(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(_e){Ue!==_e&&!K&&(s.stencilMask(_e),Ue=_e)},setFunc:function(_e,ae,Te){(ge!==_e||Ve!==ae||ye!==Te)&&(s.stencilFunc(_e,ae,Te),ge=_e,Ve=ae,ye=Te)},setOp:function(_e,ae,Te){(H!==_e||oe!==ae||ne!==Te)&&(s.stencilOp(_e,ae,Te),H=_e,oe=ae,ne=Te)},setLocked:function(_e){K=_e},setClear:function(_e){Be!==_e&&(s.clearStencil(_e),Be=_e)},reset:function(){K=!1,Ue=null,ge=null,Ve=null,ye=null,H=null,oe=null,ne=null,Be=null}}}const a=new t,l=new n,c=new r,f=new WeakMap,h=new WeakMap;let p={},_={},m={},g=new WeakMap,S=[],E=null,x=!1,y=null,C=null,O=null,A=null,b=null,R=null,N=null,T=new cn(0,0,0),L=0,B=!1,Z=null,G=null,ie=null,X=null,j=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=Q>=2);let I=null,U={};const k=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),De=new In().fromArray(k),se=new In().fromArray(ve);function ke(K,Ue,ge,Ve){const ye=new Uint8Array(4),H=s.createTexture();s.bindTexture(K,H),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<ge;oe++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ve,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ue+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return H}const ee={};ee[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),te(s.DEPTH_TEST),l.setFunc(Pc),fe(!1),Et(Qy),te(s.CULL_FACE),$e(_s);function te(K){p[K]!==!0&&(s.enable(K),p[K]=!0)}function Pe(K){p[K]!==!1&&(s.disable(K),p[K]=!1)}function Oe(K,Ue){return m[K]!==Ue?(s.bindFramebuffer(K,Ue),m[K]=Ue,K===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ue),K===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ze(K,Ue){let ge=S,Ve=!1;if(K){ge=g.get(Ue),ge===void 0&&(ge=[],g.set(Ue,ge));const ye=K.textures;if(ge.length!==ye.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let H=0,oe=ye.length;H<oe;H++)ge[H]=s.COLOR_ATTACHMENT0+H;ge.length=ye.length,Ve=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ve=!0);Ve&&s.drawBuffers(ge)}function qe(K){return E!==K?(s.useProgram(K),E=K,!0):!1}const st={[Tl]:s.FUNC_ADD,[cR]:s.FUNC_SUBTRACT,[fR]:s.FUNC_REVERSE_SUBTRACT};st[dR]=s.MIN,st[hR]=s.MAX;const Ke={[NM]:s.ZERO,[Us]:s.ONE,[pR]:s.SRC_COLOR,[IM]:s.SRC_ALPHA,[yR]:s.SRC_ALPHA_SATURATE,[_R]:s.DST_COLOR,[gR]:s.DST_ALPHA,[mR]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[xR]:s.ONE_MINUS_DST_COLOR,[vR]:s.ONE_MINUS_DST_ALPHA,[SR]:s.CONSTANT_COLOR,[MR]:s.ONE_MINUS_CONSTANT_COLOR,[ER]:s.CONSTANT_ALPHA,[wR]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(K,Ue,ge,Ve,ye,H,oe,ne,Be,_e){if(K===_s){x===!0&&(Pe(s.BLEND),x=!1);return}if(x===!1&&(te(s.BLEND),x=!0),K!==O0){if(K!==y||_e!==B){if((C!==Tl||b!==Tl)&&(s.blendEquation(s.FUNC_ADD),C=Tl,b=Tl),_e)switch(K){case kl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U0:s.blendFunc(s.ONE,s.ONE);break;case jy:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eS:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:un("WebGLState: Invalid blending: ",K);break}else switch(K){case kl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jy:un("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eS:un("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:un("WebGLState: Invalid blending: ",K);break}O=null,A=null,R=null,N=null,T.set(0,0,0),L=0,y=K,B=_e}return}ye=ye||Ue,H=H||ge,oe=oe||Ve,(Ue!==C||ye!==b)&&(s.blendEquationSeparate(st[Ue],st[ye]),C=Ue,b=ye),(ge!==O||Ve!==A||H!==R||oe!==N)&&(s.blendFuncSeparate(Ke[ge],Ke[Ve],Ke[H],Ke[oe]),O=ge,A=Ve,R=H,N=oe),(ne.equals(T)===!1||Be!==L)&&(s.blendColor(ne.r,ne.g,ne.b,Be),T.copy(ne),L=Be),y=K,B=!1}function be(K,Ue){K.side===Hs?Pe(s.CULL_FACE):te(s.CULL_FACE);let ge=K.side===Ki;Ue&&(ge=!ge),fe(ge),K.blending===kl&&K.transparent===!1?$e(_s):$e(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),l.setFunc(K.depthFunc),l.setTest(K.depthTest),l.setMask(K.depthWrite),a.setMask(K.colorWrite);const Ve=K.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(K.stencilWriteMask),c.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),c.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),it(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(K){Z!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),Z=K)}function Et(K){K!==aR?(te(s.CULL_FACE),K!==G&&(K===Qy?s.cullFace(s.BACK):K===lR?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),G=K}function Ze(K){K!==ie&&(V&&s.lineWidth(K),ie=K)}function it(K,Ue,ge){K?(te(s.POLYGON_OFFSET_FILL),(X!==Ue||j!==ge)&&(X=Ue,j=ge,l.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ge))):Pe(s.POLYGON_OFFSET_FILL)}function Qe(K){K?te(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function vt(K){K===void 0&&(K=s.TEXTURE0+z-1),I!==K&&(s.activeTexture(K),I=K)}function q(K,Ue,ge){ge===void 0&&(I===null?ge=s.TEXTURE0+z-1:ge=I);let Ve=U[ge];Ve===void 0&&(Ve={type:void 0,texture:void 0},U[ge]=Ve),(Ve.type!==K||Ve.texture!==Ue)&&(I!==ge&&(s.activeTexture(ge),I=ge),s.bindTexture(K,Ue||ee[K]),Ve.type=K,Ve.texture=Ue)}function We(){const K=U[I];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Le(){try{s.compressedTexImage2D(...arguments)}catch(K){un("WebGLState:",K)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(K){un("WebGLState:",K)}}function w(){try{s.texSubImage2D(...arguments)}catch(K){un("WebGLState:",K)}}function $(){try{s.texSubImage3D(...arguments)}catch(K){un("WebGLState:",K)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(K){un("WebGLState:",K)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(K){un("WebGLState:",K)}}function Ne(){try{s.texStorage2D(...arguments)}catch(K){un("WebGLState:",K)}}function Fe(){try{s.texStorage3D(...arguments)}catch(K){un("WebGLState:",K)}}function Ee(){try{s.texImage2D(...arguments)}catch(K){un("WebGLState:",K)}}function we(){try{s.texImage3D(...arguments)}catch(K){un("WebGLState:",K)}}function Xe(K){return _[K]!==void 0?_[K]:s.getParameter(K)}function Je(K,Ue){_[K]!==Ue&&(s.pixelStorei(K,Ue),_[K]=Ue)}function Se(K){De.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),De.copy(K))}function xe(K){se.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),se.copy(K))}function me(K,Ue){let ge=h.get(Ue);ge===void 0&&(ge=new WeakMap,h.set(Ue,ge));let Ve=ge.get(K);Ve===void 0&&(Ve=s.getUniformBlockIndex(Ue,K.name),ge.set(K,Ve))}function Re(K,Ue){const Ve=h.get(Ue).get(K);f.get(Ue)!==Ve&&(s.uniformBlockBinding(Ue,Ve,K.__bindingPointIndex),f.set(Ue,Ve))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},_={},I=null,U={},m={},g=new WeakMap,S=[],E=null,x=!1,y=null,C=null,O=null,A=null,b=null,R=null,N=null,T=new cn(0,0,0),L=0,B=!1,Z=null,G=null,ie=null,X=null,j=null,De.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:te,disable:Pe,bindFramebuffer:Oe,drawBuffers:ze,useProgram:qe,setBlending:$e,setMaterial:be,setFlipSided:fe,setCullFace:Et,setLineWidth:Ze,setPolygonOffset:it,setScissorTest:Qe,activeTexture:vt,bindTexture:q,unbindTexture:We,compressedTexImage2D:Le,compressedTexImage3D:F,texImage2D:Ee,texImage3D:we,pixelStorei:Je,getParameter:Xe,updateUBOMapping:me,uniformBlockBinding:Re,texStorage2D:Ne,texStorage3D:Fe,texSubImage2D:w,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:de,scissor:Se,viewport:xe,reset:Ge}}function AD(s,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,p=new WeakMap,_=new Set;let m;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,w){return S?new OffscreenCanvas(F,w):uh("canvas")}function x(F,w,$){let W=1;const de=Le(F);if((de.width>$||de.height>$)&&(W=$/Math.max(de.width,de.height)),W<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ne=Math.floor(W*de.width),Fe=Math.floor(W*de.height);m===void 0&&(m=E(Ne,Fe));const Ee=w?E(Ne,Fe):m;return Ee.width=Ne,Ee.height=Fe,Ee.getContext("2d").drawImage(F,0,0,Ne,Fe),kt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ne+"x"+Fe+")."),Ee}else return"data"in F&&kt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),F;return F}function y(F){return F.generateMipmaps}function C(F){s.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(F,w,$,W,de,Ne=!1){if(F!==null){if(s[F]!==void 0)return s[F];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Fe;W&&(Fe=e.get("EXT_texture_norm16"),Fe||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Ee=w;if(w===s.RED&&($===s.FLOAT&&(Ee=s.R32F),$===s.HALF_FLOAT&&(Ee=s.R16F),$===s.UNSIGNED_BYTE&&(Ee=s.R8),$===s.UNSIGNED_SHORT&&Fe&&(Ee=Fe.R16_EXT),$===s.SHORT&&Fe&&(Ee=Fe.R16_SNORM_EXT)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(Ee=s.R8UI),$===s.UNSIGNED_SHORT&&(Ee=s.R16UI),$===s.UNSIGNED_INT&&(Ee=s.R32UI),$===s.BYTE&&(Ee=s.R8I),$===s.SHORT&&(Ee=s.R16I),$===s.INT&&(Ee=s.R32I)),w===s.RG&&($===s.FLOAT&&(Ee=s.RG32F),$===s.HALF_FLOAT&&(Ee=s.RG16F),$===s.UNSIGNED_BYTE&&(Ee=s.RG8),$===s.UNSIGNED_SHORT&&Fe&&(Ee=Fe.RG16_EXT),$===s.SHORT&&Fe&&(Ee=Fe.RG16_SNORM_EXT)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(Ee=s.RG8UI),$===s.UNSIGNED_SHORT&&(Ee=s.RG16UI),$===s.UNSIGNED_INT&&(Ee=s.RG32UI),$===s.BYTE&&(Ee=s.RG8I),$===s.SHORT&&(Ee=s.RG16I),$===s.INT&&(Ee=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(Ee=s.RGB8UI),$===s.UNSIGNED_SHORT&&(Ee=s.RGB16UI),$===s.UNSIGNED_INT&&(Ee=s.RGB32UI),$===s.BYTE&&(Ee=s.RGB8I),$===s.SHORT&&(Ee=s.RGB16I),$===s.INT&&(Ee=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(Ee=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(Ee=s.RGBA16UI),$===s.UNSIGNED_INT&&(Ee=s.RGBA32UI),$===s.BYTE&&(Ee=s.RGBA8I),$===s.SHORT&&(Ee=s.RGBA16I),$===s.INT&&(Ee=s.RGBA32I)),w===s.RGB&&($===s.UNSIGNED_SHORT&&Fe&&(Ee=Fe.RGB16_EXT),$===s.SHORT&&Fe&&(Ee=Fe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(Ee=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(Ee=s.R11F_G11F_B10F)),w===s.RGBA){const we=Ne?ah:rn.getTransfer(de);$===s.FLOAT&&(Ee=s.RGBA32F),$===s.HALF_FLOAT&&(Ee=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Ee=we===gn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Fe&&(Ee=Fe.RGBA16_EXT),$===s.SHORT&&Fe&&(Ee=Fe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(Ee=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Ee=s.RGB5_A1)}return(Ee===s.R16F||Ee===s.R32F||Ee===s.RG16F||Ee===s.RG32F||Ee===s.RGBA16F||Ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function b(F,w){let $;return F?w===null||w===Ss||w===Dc?$=s.DEPTH24_STENCIL8:w===ms?$=s.DEPTH32F_STENCIL8:w===Lc&&($=s.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===Dc?$=s.DEPTH_COMPONENT24:w===ms?$=s.DEPTH_COMPONENT32F:w===Lc&&($=s.DEPTH_COMPONENT16),$}function R(F,w){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==ui&&F.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function N(F){const w=F.target;w.removeEventListener("dispose",N),L(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&_.delete(w)}function T(F){const w=F.target;w.removeEventListener("dispose",T),Z(w)}function L(F){const w=n.get(F);if(w.__webglInit===void 0)return;const $=F.source,W=g.get($);if(W){const de=W[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(F),Object.keys(W).length===0&&g.delete($)}n.remove(F)}function B(F){const w=n.get(F);s.deleteTexture(w.__webglTexture);const $=F.source,W=g.get($);delete W[w.__cacheKey],l.memory.textures--}function Z(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(w.__webglFramebuffer[W]))for(let de=0;de<w.__webglFramebuffer[W].length;de++)s.deleteFramebuffer(w.__webglFramebuffer[W][de]);else s.deleteFramebuffer(w.__webglFramebuffer[W]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[W])}else{if(Array.isArray(w.__webglFramebuffer))for(let W=0;W<w.__webglFramebuffer.length;W++)s.deleteFramebuffer(w.__webglFramebuffer[W]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let W=0;W<w.__webglColorRenderbuffer.length;W++)w.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[W]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=F.textures;for(let W=0,de=$.length;W<de;W++){const Ne=n.get($[W]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),l.memory.textures--),n.remove($[W])}n.remove(F)}let G=0;function ie(){G=0}function X(){return G}function j(F){G=F}function z(){const F=G;return F>=r.maxTextures&&kt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,F}function V(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function Q(F,w){const $=n.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const W=F.image;if(W===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe($,F,w);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function Y(F,w){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Pe($,F,w);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function I(F,w){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Pe($,F,w);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function U(F,w){const $=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){Oe($,F,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const k={[X0]:s.REPEAT,[Ws]:s.CLAMP_TO_EDGE,[Y0]:s.MIRRORED_REPEAT},ve={[ui]:s.NEAREST,[bR]:s.NEAREST_MIPMAP_NEAREST,[rd]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Lm]:s.LINEAR_MIPMAP_NEAREST,[pa]:s.LINEAR_MIPMAP_LINEAR},De={[LR]:s.NEVER,[UR]:s.ALWAYS,[DR]:s.LESS,[ov]:s.LEQUAL,[NR]:s.EQUAL,[av]:s.GEQUAL,[IR]:s.GREATER,[FR]:s.NOTEQUAL};function se(F,w){if(w.type===ms&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Lm||w.magFilter===rd||w.magFilter===pa||w.minFilter===Ei||w.minFilter===Lm||w.minFilter===rd||w.minFilter===pa)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,k[w.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,k[w.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,k[w.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,ve[w.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,De[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==rd&&w.minFilter!==pa||w.type===ms&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ke(F,w){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",N));const W=w.source;let de=g.get(W);de===void 0&&(de={},g.set(W,de));const Ne=V(w);if(Ne!==F.__cacheKey){de[Ne]===void 0&&(de[Ne]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,$=!0),de[Ne].usedTimes++;const Fe=de[F.__cacheKey];Fe!==void 0&&(de[F.__cacheKey].usedTimes--,Fe.usedTimes===0&&B(w)),F.__cacheKey=Ne,F.__webglTexture=de[Ne].texture}return $}function ee(F,w,$){return Math.floor(Math.floor(F/$)/w)}function te(F,w,$,W){const Ne=F.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,$,W,w.data);else{Ne.sort((Je,Se)=>Je.start-Se.start);let Fe=0;for(let Je=1;Je<Ne.length;Je++){const Se=Ne[Fe],xe=Ne[Je],me=Se.start+Se.count,Re=ee(xe.start,w.width,4),Ge=ee(Se.start,w.width,4);xe.start<=me+1&&Re===Ge&&ee(xe.start+xe.count-1,w.width,4)===Re?Se.count=Math.max(Se.count,xe.start+xe.count-Se.start):(++Fe,Ne[Fe]=xe)}Ne.length=Fe+1;const Ee=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Xe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Je=0,Se=Ne.length;Je<Se;Je++){const xe=Ne[Je],me=Math.floor(xe.start/4),Re=Math.ceil(xe.count/4),Ge=me%w.width,K=Math.floor(me/w.width),Ue=Re,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,K),t.texSubImage2D(s.TEXTURE_2D,0,Ge,K,Ue,ge,$,W,w.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function Pe(F,w,$){let W=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(W=s.TEXTURE_3D);const de=ke(F,w),Ne=w.source;t.bindTexture(W,F.__webglTexture,s.TEXTURE0+$);const Fe=n.get(Ne);if(Ne.version!==Fe.__version||de===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=rn.getPrimaries(rn.workingColorSpace),Ve=w.colorSpace===bo?null:rn.getPrimaries(w.colorSpace),ye=w.colorSpace===bo||ge===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let we=x(w.image,!1,r.maxTextureSize);we=We(w,we);const Xe=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let Se=A(w.internalFormat,Xe,Je,w.normalized,w.colorSpace,w.isVideoTexture);se(W,w);let xe;const me=w.mipmaps,Re=w.isVideoTexture!==!0,Ge=Fe.__version===void 0||de===!0,K=Ne.dataReady,Ue=R(w,we);if(w.isDepthTexture)Se=b(w.format===ma,w.type),Ge&&(Re?t.texStorage2D(s.TEXTURE_2D,1,Se,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Se,we.width,we.height,0,Xe,Je,null));else if(w.isDataTexture)if(me.length>0){Re&&Ge&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,me[0].width,me[0].height);for(let ge=0,Ve=me.length;ge<Ve;ge++)xe=me[ge],Re?K&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,xe.width,xe.height,Xe,Je,xe.data):t.texImage2D(s.TEXTURE_2D,ge,Se,xe.width,xe.height,0,Xe,Je,xe.data);w.generateMipmaps=!1}else Re?(Ge&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,we.width,we.height),K&&te(w,we,Xe,Je)):t.texImage2D(s.TEXTURE_2D,0,Se,we.width,we.height,0,Xe,Je,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Re&&Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Se,me[0].width,me[0].height,we.depth);for(let ge=0,Ve=me.length;ge<Ve;ge++)if(xe=me[ge],w.format!==ts)if(Xe!==null)if(Re){if(K)if(w.layerUpdates.size>0){const ye=LS(xe.width,xe.height,w.format,w.type);for(const H of w.layerUpdates){const oe=xe.data.subarray(H*ye/xe.data.BYTES_PER_ELEMENT,(H+1)*ye/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,H,xe.width,xe.height,1,Xe,oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,xe.width,xe.height,we.depth,Xe,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Se,xe.width,xe.height,we.depth,0,xe.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,xe.width,xe.height,we.depth,Xe,Je,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Se,xe.width,xe.height,we.depth,0,Xe,Je,xe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Re&&Ge&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,me[0].width,me[0].height);for(let ge=0,Ve=me.length;ge<Ve;ge++)xe=me[ge],w.format!==ts?Xe!==null?Re?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,xe.width,xe.height,Xe,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Se,xe.width,xe.height,0,xe.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?K&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,xe.width,xe.height,Xe,Je,xe.data):t.texImage2D(s.TEXTURE_2D,ge,Se,xe.width,xe.height,0,Xe,Je,xe.data)}else if(w.isDataArrayTexture)if(Re){if(Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Se,we.width,we.height,we.depth),K)if(w.layerUpdates.size>0){const ge=LS(we.width,we.height,w.format,w.type);for(const Ve of w.layerUpdates){const ye=we.data.subarray(Ve*ge/we.data.BYTES_PER_ELEMENT,(Ve+1)*ge/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ve,we.width,we.height,1,Xe,Je,ye)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Xe,Je,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,we.width,we.height,we.depth,0,Xe,Je,we.data);else if(w.isData3DTexture)Re?(Ge&&t.texStorage3D(s.TEXTURE_3D,Ue,Se,we.width,we.height,we.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Xe,Je,we.data)):t.texImage3D(s.TEXTURE_3D,0,Se,we.width,we.height,we.depth,0,Xe,Je,we.data);else if(w.isFramebufferTexture){if(Ge)if(Re)t.texStorage2D(s.TEXTURE_2D,Ue,Se,we.width,we.height);else{let ge=we.width,Ve=we.height;for(let ye=0;ye<Ue;ye++)t.texImage2D(s.TEXTURE_2D,ye,Se,ge,Ve,0,Xe,Je,null),ge>>=1,Ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),we.parentNode!==ge){ge.appendChild(we),_.add(w),ge.onpaint=Ve=>{const ye=Ve.changedElements;for(const H of _)ye.includes(H.image)&&(H.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const ye=s.RGBA,H=s.RGBA,oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ye,H,oe,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(me.length>0){if(Re&&Ge){const ge=Le(me[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Se,ge.width,ge.height)}for(let ge=0,Ve=me.length;ge<Ve;ge++)xe=me[ge],Re?K&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Xe,Je,xe):t.texImage2D(s.TEXTURE_2D,ge,Se,Xe,Je,xe);w.generateMipmaps=!1}else if(Re){if(Ge){const ge=Le(we);t.texStorage2D(s.TEXTURE_2D,Ue,Se,ge.width,ge.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Je,we)}else t.texImage2D(s.TEXTURE_2D,0,Se,Xe,Je,we);y(w)&&C(W),Fe.__version=Ne.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Oe(F,w,$){if(w.image.length!==6)return;const W=ke(F,w),de=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+$);const Ne=n.get(de);if(de.version!==Ne.__version||W===!0){t.activeTexture(s.TEXTURE0+$);const Fe=rn.getPrimaries(rn.workingColorSpace),Ee=w.colorSpace===bo?null:rn.getPrimaries(w.colorSpace),we=w.colorSpace===bo||Fe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Je=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let H=0;H<6;H++)!Xe&&!Je?Se[H]=x(w.image[H],!0,r.maxCubemapSize):Se[H]=Je?w.image[H].image:w.image[H],Se[H]=We(w,Se[H]);const xe=Se[0],me=a.convert(w.format,w.colorSpace),Re=a.convert(w.type),Ge=A(w.internalFormat,me,Re,w.normalized,w.colorSpace),K=w.isVideoTexture!==!0,Ue=Ne.__version===void 0||W===!0,ge=de.dataReady;let Ve=R(w,xe);se(s.TEXTURE_CUBE_MAP,w);let ye;if(Xe){K&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Ge,xe.width,xe.height);for(let H=0;H<6;H++){ye=Se[H].mipmaps;for(let oe=0;oe<ye.length;oe++){const ne=ye[oe];w.format!==ts?me!==null?K?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,ne.width,ne.height,me,ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,Ge,ne.width,ne.height,0,ne.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,0,0,ne.width,ne.height,me,Re,ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe,Ge,ne.width,ne.height,0,me,Re,ne.data)}}}else{if(ye=w.mipmaps,K&&Ue){ye.length>0&&Ve++;const H=Le(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Ge,H.width,H.height)}for(let H=0;H<6;H++)if(Je){K?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Se[H].width,Se[H].height,me,Re,Se[H].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ge,Se[H].width,Se[H].height,0,me,Re,Se[H].data);for(let oe=0;oe<ye.length;oe++){const Be=ye[oe].image[H].image;K?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,Be.width,Be.height,me,Re,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,Ge,Be.width,Be.height,0,me,Re,Be.data)}}else{K?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,me,Re,Se[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ge,me,Re,Se[H]);for(let oe=0;oe<ye.length;oe++){const ne=ye[oe];K?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,0,0,me,Re,ne.image[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,oe+1,Ge,me,Re,ne.image[H])}}}y(w)&&C(s.TEXTURE_CUBE_MAP),Ne.__version=de.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ze(F,w,$,W,de,Ne){const Fe=a.convert($.format,$.colorSpace),Ee=a.convert($.type),we=A($.internalFormat,Fe,Ee,$.normalized,$.colorSpace),Xe=n.get(w),Je=n.get($);if(Je.__renderTarget=w,!Xe.__hasExternalTextures){const Se=Math.max(1,w.width>>Ne),xe=Math.max(1,w.height>>Ne);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Ne,we,Se,xe,w.depth,0,Fe,Ee,null):t.texImage2D(de,Ne,we,Se,xe,0,Fe,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),vt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,de,Je.__webglTexture,0,Qe(w)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,de,Je.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(F,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,F),w.depthBuffer){const W=w.depthTexture,de=W&&W.isDepthTexture?W.type:null,Ne=b(w.stencilBuffer,de),Fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(w),Ne,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(w),Ne,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,F)}else{const W=w.textures;for(let de=0;de<W.length;de++){const Ne=W[de],Fe=a.convert(Ne.format,Ne.colorSpace),Ee=a.convert(Ne.type),we=A(Ne.internalFormat,Fe,Ee,Ne.normalized,Ne.colorSpace);vt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(w),we,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(w),we,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,we,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(F,w,$){const W=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(w.depthTexture);if(de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W){if(de.__webglInit===void 0&&(de.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),se(s.TEXTURE_CUBE_MAP,w.depthTexture);const Xe=a.convert(w.depthTexture.format),Je=a.convert(w.depthTexture.type);let Se;w.depthTexture.format===Ks?Se=s.DEPTH_COMPONENT24:w.depthTexture.format===ma&&(Se=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Se,w.width,w.height,0,Xe,Je,null)}}else Q(w.depthTexture,0);const Ne=de.__webglTexture,Fe=Qe(w),Ee=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,we=w.depthTexture.format===ma?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ks)vt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,Ee,Ne,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,we,Ee,Ne,0);else if(w.depthTexture.format===ma)vt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,Ee,Ne,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,we,Ee,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(F){const w=n.get(F),$=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const W=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),W){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,W.removeEventListener("dispose",de)};W.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=W}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if($)for(let W=0;W<6;W++)st(w.__webglFramebuffer[W],F,W);else{const W=F.texture.mipmaps;W&&W.length>0?st(w.__webglFramebuffer[0],F,0):st(w.__webglFramebuffer,F,0)}else if($){w.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[W]),w.__webglDepthbuffer[W]===void 0)w.__webglDepthbuffer[W]=s.createRenderbuffer(),qe(w.__webglDepthbuffer[W],F,!1);else{const de=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=w.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ne)}}else{const W=F.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),qe(w.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(F,w,$){const W=n.get(F);w!==void 0&&ze(W.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ke(F)}function be(F){const w=F.texture,$=n.get(F),W=n.get(w);F.addEventListener("dispose",T);const de=F.textures,Ne=F.isWebGLCubeRenderTarget===!0,Fe=de.length>1;if(Fe||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=w.version,l.memory.textures++),Ne){$.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ee]=[];for(let we=0;we<w.mipmaps.length;we++)$.__webglFramebuffer[Ee][we]=s.createFramebuffer()}else $.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)$.__webglFramebuffer[Ee]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Ee=0,we=de.length;Ee<we;Ee++){const Xe=n.get(de[Ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),l.memory.textures++)}if(F.samples>0&&vt(F)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ee=0;Ee<de.length;Ee++){const we=de[Ee];$.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ee]);const Xe=a.convert(we.format,we.colorSpace),Je=a.convert(we.type),Se=A(we.internalFormat,Xe,Je,we.normalized,we.colorSpace,F.isXRRenderTarget===!0),xe=Qe(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Se,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),qe($.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),se(s.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ze($.__webglFramebuffer[Ee][we],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,we);else ze($.__webglFramebuffer[Ee],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);y(w)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Ee=0,we=de.length;Ee<we;Ee++){const Xe=de[Ee],Je=n.get(Xe);let Se=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Se=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,Je.__webglTexture),se(Se,Xe),ze($.__webglFramebuffer,F,Xe,s.COLOR_ATTACHMENT0+Ee,Se,0),y(Xe)&&C(Se)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,W.__webglTexture),se(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ze($.__webglFramebuffer[we],F,w,s.COLOR_ATTACHMENT0,Ee,we);else ze($.__webglFramebuffer,F,w,s.COLOR_ATTACHMENT0,Ee,0);y(w)&&C(Ee),t.unbindTexture()}F.depthBuffer&&Ke(F)}function fe(F){const w=F.textures;for(let $=0,W=w.length;$<W;$++){const de=w[$];if(y(de)){const Ne=O(F),Fe=n.get(de).__webglTexture;t.bindTexture(Ne,Fe),C(Ne),t.unbindTexture()}}}const Et=[],Ze=[];function it(F){if(F.samples>0){if(vt(F)===!1){const w=F.textures,$=F.width,W=F.height;let de=s.COLOR_BUFFER_BIT;const Ne=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(F),Ee=w.length>1;if(Ee)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const we=F.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Xe]);const Je=n.get(w[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,$,W,0,0,$,W,de,s.NEAREST),f===!0&&(Et.length=0,Ze.length=0,Et.push(s.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Et.push(Ne),Ze.push(Ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Xe]);const Je=n.get(w[Xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&f){const w=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Qe(F){return Math.min(r.maxSamples,F.samples)}function vt(F){const w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(F){const w=l.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function We(F,w){const $=F.colorSpace,W=F.format,de=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==$l&&$!==bo&&(rn.getTransfer($)===gn?(W!==ts||de!==hr)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):un("WebGLTextures: Unsupported texture color space:",$)),w}function Le(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=ie,this.getTextureUnits=X,this.setTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=I,this.setTextureCube=U,this.rebindTextures=$e,this.setupRenderTarget=be,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bD(s,e){function t(n,r=bo){let a;const l=rn.getTransfer(r);if(n===hr)return s.UNSIGNED_BYTE;if(n===tv)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nv)return s.UNSIGNED_SHORT_5_5_5_1;if(n===YM)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qM)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===WM)return s.BYTE;if(n===XM)return s.SHORT;if(n===Lc)return s.UNSIGNED_SHORT;if(n===ev)return s.INT;if(n===Ss)return s.UNSIGNED_INT;if(n===ms)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===$M)return s.ALPHA;if(n===KM)return s.RGB;if(n===ts)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===ma)return s.DEPTH_STENCIL;if(n===ZM)return s.RED;if(n===iv)return s.RED_INTEGER;if(n===Ra)return s.RG;if(n===rv)return s.RG_INTEGER;if(n===sv)return s.RGBA_INTEGER;if(n===Bd||n===zd||n===Vd||n===Hd)if(l===gn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Bd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Bd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===q0||n===$0||n===K0||n===Z0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===q0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===K0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Z0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===J0||n===Q0||n===j0||n===eg||n===tg||n===sh||n===ng)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===J0||n===Q0)return l===gn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===j0)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===eg)return a.COMPRESSED_R11_EAC;if(n===tg)return a.COMPRESSED_SIGNED_R11_EAC;if(n===sh)return a.COMPRESSED_RG11_EAC;if(n===ng)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ig||n===rg||n===sg||n===og||n===ag||n===lg||n===ug||n===cg||n===fg||n===dg||n===hg||n===pg||n===mg||n===gg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ig)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===og)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ag)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ug)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gg)return l===gn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vg||n===_g||n===xg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===vg)return l===gn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_g)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yg||n===Sg||n===oh||n===Mg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===yg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const RD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new aE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kr({vertexShader:RD,fragmentShader:CD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gr(new Kl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LD extends La{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",f=1,h=null,p=null,_=null,m=null,g=null,S=null;const E=typeof XRWebGLBinding<"u",x=new PD,y={},C=t.getContextAttributes();let O=null,A=null;const b=[],R=[],N=new Nt;let T=null,L=null;const B=new Nr;B.viewport=new In;const Z=new Nr;Z.viewport=new In;const G=[B,Z],ie=new BC;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=b[ee];return te===void 0&&(te=new zm,b[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=b[ee];return te===void 0&&(te=new zm,b[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=b[ee];return te===void 0&&(te=new zm,b[ee]=te),te.getHandSpace()};function z(ee){const te=R.indexOf(ee.inputSource);if(te===-1)return;const Pe=b[te];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,h||l),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<b.length;ee++){const te=R[ee];te!==null&&(R[ee]=null,b[ee].disconnect(te))}X=null,j=null,x.reset();for(const ee in y)delete y[ee];if(e.setRenderTarget(O),g=null,m=null,_=null,r=null,A=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),L!==null){const ee=L.camera;ee.fov=L.fov,ee.zoom=L.zoom,ee.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(O=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Q),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Oe=null,ze=null;C.depth&&(ze=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=C.stencil?ma:Ks,Oe=C.stencil?Dc:Ss);const qe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(qe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new Or(m.textureWidth,m.textureHeight,{format:ts,type:hr,depthTexture:new Nc(m.textureWidth,m.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new Or(g.framebufferWidth,g.framebufferHeight,{format:ts,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(c),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(ee){for(let te=0;te<ee.removed.length;te++){const Pe=ee.removed[te],Oe=R.indexOf(Pe);Oe>=0&&(R[Oe]=null,b[Oe].disconnect(Pe))}for(let te=0;te<ee.added.length;te++){const Pe=ee.added[te];let Oe=R.indexOf(Pe);if(Oe===-1){for(let qe=0;qe<b.length;qe++)if(qe>=R.length){R.push(Pe),Oe=qe;break}else if(R[qe]===null){R[qe]=Pe,Oe=qe;break}if(Oe===-1)break}const ze=b[Oe];ze&&ze.connect(Pe)}}const Y=new pe,I=new pe;function U(ee,te,Pe){Y.setFromMatrixPosition(te.matrixWorld),I.setFromMatrixPosition(Pe.matrixWorld);const Oe=Y.distanceTo(I),ze=te.projectionMatrix.elements,qe=Pe.projectionMatrix.elements,st=ze[14]/(ze[10]-1),Ke=ze[14]/(ze[10]+1),$e=(ze[9]+1)/ze[5],be=(ze[9]-1)/ze[5],fe=(ze[8]-1)/ze[0],Et=(qe[8]+1)/qe[0],Ze=st*fe,it=st*Et,Qe=Oe/(-fe+Et),vt=Qe*-fe;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(vt),ee.translateZ(Qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const q=st+Qe,We=Ke+Qe,Le=Ze-vt,F=it+(Oe-vt),w=$e*Ke/We*q,$=be*Ke/We*q;ee.projectionMatrix.makePerspective(Le,F,w,$,q,We),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function k(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let te=ee.near,Pe=ee.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(Pe=x.depthFar)),ie.near=Z.near=B.near=te,ie.far=Z.far=B.far=Pe,(X!==ie.near||j!==ie.far)&&(r.updateRenderState({depthNear:ie.near,depthFar:ie.far}),X=ie.near,j=ie.far),ie.layers.mask=ee.layers.mask|6,B.layers.mask=ie.layers.mask&-5,Z.layers.mask=ie.layers.mask&-3;const Oe=ee.parent,ze=ie.cameras;k(ie,Oe);for(let qe=0;qe<ze.length;qe++)k(ze[qe],Oe);ze.length===2?U(ie,B,Z):ie.projectionMatrix.copy(B.projectionMatrix),L===null&&ee.isPerspectiveCamera&&(L={camera:ee,fov:ee.fov,zoom:ee.zoom}),ve(ee,ie,Oe)};function ve(ee,te,Pe){Pe===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Eg*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(m===null&&g===null))return f},this.setFoveation=function(ee){f=ee,m!==null&&(m.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ie)},this.getCameraTexture=function(ee){return y[ee]};let De=null;function se(ee,te){if(p=te.getViewerPose(h||l),S=te,p!==null){const Pe=p.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let Oe=!1;Pe.length!==ie.cameras.length&&(ie.cameras.length=0,Oe=!0);for(let Ke=0;Ke<Pe.length;Ke++){const $e=Pe[Ke];let be=null;if(g!==null)be=g.getViewport($e);else{const Et=_.getViewSubImage(m,$e);be=Et.viewport,Ke===0&&(e.setRenderTargetTextures(A,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(A))}let fe=G[Ke];fe===void 0&&(fe=new Nr,fe.layers.enable(Ke),fe.viewport=new In,G[Ke]=fe),fe.matrix.fromArray($e.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray($e.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(be.x,be.y,be.width,be.height),Ke===0&&(ie.matrix.copy(fe.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Oe===!0&&ie.cameras.push(fe)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){_=n.getBinding();const Ke=_.getDepthInformation(Pe[0]);Ke&&Ke.isValid&&Ke.texture&&x.init(Ke,r.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),_=n.getBinding();for(let Ke=0;Ke<Pe.length;Ke++){const $e=Pe[Ke].camera;if($e){let be=y[$e];be||(be=new aE,y[$e]=be);const fe=_.getCameraImage($e);be.sourceTexture=fe}}}}for(let Pe=0;Pe<b.length;Pe++){const Oe=R[Pe],ze=b[Pe];Oe!==null&&ze!==void 0&&ze.update(Oe,te,h||l)}De&&De(ee,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),S=null}const ke=new hE;ke.setAnimationLoop(se),this.setAnimationLoop=function(ee){De=ee},this.dispose=function(){}}}const DD=new On,yE=new Gt;yE.set(-1,0,0,0,1,0,0,0,1);function ND(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,fE(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,C,O,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(x,y):y.isMeshLambertMaterial?(a(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(x,y),_(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(x,y),m(x,y),y.isMeshPhysicalMaterial&&g(x,y,A)):y.isMeshMatcapMaterial?(a(x,y),S(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),E(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(l(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?f(x,y,C,O):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Ki&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Ki&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const C=e.get(y),O=C.envMap,A=C.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(DD.makeRotationFromEuler(A)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(yE),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function l(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,C,O){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*C,x.scale.value=O*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,C){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ki&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.retroreflectivity>0&&(x.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const C=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ID(s,e,t,n){let r={},a={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,b){const R=b.program;n.uniformBlockBinding(A,R)}function h(A,b){let R=r[A.id];R===void 0&&(x(A),R=p(A),r[A.id]=R,A.addEventListener("dispose",C));const N=b.program;n.updateUBOMapping(A,N);const T=e.render.frame;a[A.id]!==T&&(m(A),a[A.id]=T)}function p(A){const b=_();A.__bindingPointIndex=b;const R=s.createBuffer(),N=A.__size,T=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,N,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function _(){for(let A=0;A<c;A++)if(l.indexOf(A)===-1)return l.push(A),A;return un("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const b=r[A.id],R=A.uniforms,N=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,L=R.length;T<L;T++){const B=R[T];if(Array.isArray(B))for(let Z=0,G=B.length;Z<G;Z++)g(B[Z],T,Z,N);else g(B,T,0,N)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(A,b,R,N){if(E(A,b,R,N)===!0){const T=A.__offset,L=A.value;if(Array.isArray(L)){let B=0;for(let Z=0;Z<L.length;Z++){const G=L[Z],ie=y(G);S(G,A.__data,B),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(L,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,A.__data)}}function S(A,b,R){typeof A=="number"||typeof A=="boolean"?b[0]=A:A.isMatrix3?(b[0]=A.elements[0],b[1]=A.elements[1],b[2]=A.elements[2],b[3]=0,b[4]=A.elements[3],b[5]=A.elements[4],b[6]=A.elements[5],b[7]=0,b[8]=A.elements[6],b[9]=A.elements[7],b[10]=A.elements[8],b[11]=0):ArrayBuffer.isView(A)?b.set(new A.constructor(A.buffer,A.byteOffset,b.length)):A.toArray(b,R)}function E(A,b,R,N){const T=A.value,L=b+"_"+R;if(N[L]===void 0)return typeof T=="number"||typeof T=="boolean"?N[L]=T:ArrayBuffer.isView(T)?N[L]=T.slice():N[L]=T.clone(),!0;{const B=N[L];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return N[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(B.equals(T)===!1)return B.copy(T),!0}}return!1}function x(A){const b=A.uniforms;let R=0;const N=16;for(let L=0,B=b.length;L<B;L++){const Z=Array.isArray(b[L])?b[L]:[b[L]];for(let G=0,ie=Z.length;G<ie;G++){const X=Z[G],j=Array.isArray(X.value)?X.value:[X.value];for(let z=0,V=j.length;z<V;z++){const Q=j[z],Y=y(Q),I=R%N,U=I%Y.boundary,k=I+U;R+=U,k!==0&&N-k<Y.storage&&(R+=N-k),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=Y.storage}}}const T=R%N;return T>0&&(R+=N-T),A.__size=R,A.__cache={},this}function y(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",A),b}function C(A){const b=A.target;b.removeEventListener("dispose",C);const R=l.indexOf(b.__bindingPointIndex);l.splice(R,1),s.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function O(){for(const A in r)s.deleteBuffer(r[A]);l=[],r={},a={}}return{bind:f,update:h,dispose:O}}const FD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ls=null;function UD(){return ls===null&&(ls=new uC(FD,16,16,Ra,ns),ls.name="DFG_LUT",ls.minFilter=Ei,ls.magFilter=Ei,ls.wrapS=Ws,ls.wrapT=Ws,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}class OD{constructor(e={}){const{canvas:t=BR(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:g=hr}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=l;const E=g,x=new Set([sv,rv,iv]),y=new Set([hr,Ss,Lc,Dc,tv,nv]),C=new Uint32Array(4),O=new Int32Array(4),A=new pe;let b=null,R=null;const N=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let Z=!1,G=null,ie=null,X=null,j=null;this._outputColorSpace=Pr;let z=0,V=0,Q=null,Y=-1,I=null;const U=new In,k=new In;let ve=null;const De=new cn(0);let se=0,ke=t.width,ee=t.height,te=1,Pe=null,Oe=null;const ze=new In(0,0,ke,ee),qe=new In(0,0,ke,ee);let st=!1;const Ke=new sE;let $e=!1,be=!1;const fe=new On,Et=new pe,Ze=new In,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function vt(){return Q===null?te:1}let q=n;function We(P,re){return t.getContext(P,re)}let Le,F,w,$,W,de,Ne,Fe,Ee,we,Xe,Je,Se,xe,me,Re,Ge,K,Ue,ge,Ve,ye,H;try{const P={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jg}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ae,!1),q===null){const re="webgl2";if(q=We(re,P),q===null)throw We(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(P){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),un("WebGLRenderer: "+P.message),P}function oe(){Le=new UP(q),Le.init(),Ve=new bD(q,Le),F=new AP(q,Le,e,Ve),w=new TD(q,Le),F.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),ie=q.createFramebuffer(),X=q.createFramebuffer(),j=q.createFramebuffer(),$=new BP(q),W=new fD,de=new AD(q,Le,w,W,F,Ve,$),Ne=new FP(B),Fe=new VC(q),ye=new wP(q,Fe),Ee=new OP(q,Fe,$,ye),we=new VP(q,Ee,Fe,ye,$),K=new zP(q,F,de),me=new bP(W),Xe=new cD(B,Ne,Le,F,ye,me),Je=new ND(B,W),Se=new hD,xe=new xD(Le),Ge=new EP(B,Ne,w,we,S,f),Re=new wD(B,we,F),H=new ID(q,$,F,w),Ue=new TP(q,Le,$),ge=new kP(q,Le,$),$.programs=Xe.programs,B.capabilities=F,B.extensions=Le,B.properties=W,B.renderLists=Se,B.shadowMap=Re,B.state=w,B.info=$}E!==hr&&(L=new GP(E,t.width,t.height,c,r,a));const ne=new LD(B,q);this.xr=ne,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=Le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(P){P!==void 0&&(te=P,this.setSize(ke,ee,!1))},this.getSize=function(P){return P.set(ke,ee)},this.setSize=function(P,re,Me=!0){if(ne.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=P,ee=re,t.width=Math.floor(P*te),t.height=Math.floor(re*te),Me===!0&&(t.style.width=P+"px",t.style.height=re+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,re)},this.getDrawingBufferSize=function(P){return P.set(ke*te,ee*te).floor()},this.setDrawingBufferSize=function(P,re,Me){ke=P,ee=re,te=Me,t.width=Math.floor(P*Me),t.height=Math.floor(re*Me),this.setViewport(0,0,P,re)},this.setEffects=function(P){if(E===hr){un("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let re=0;re<P.length;re++)if(P[re].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ze)},this.setViewport=function(P,re,Me,ue){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,re,Me,ue),w.viewport(U.copy(ze).multiplyScalar(te).round())},this.getScissor=function(P){return P.copy(qe)},this.setScissor=function(P,re,Me,ue){P.isVector4?qe.set(P.x,P.y,P.z,P.w):qe.set(P,re,Me,ue),w.scissor(k.copy(qe).multiplyScalar(te).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(P){w.setScissorTest(st=P)},this.setOpaqueSort=function(P){Pe=P},this.setTransparentSort=function(P){Oe=P},this.getClearColor=function(P){return P.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(P=!0,re=!0,Me=!0){let ue=0;if(P){let le=!1;if(Q!==null){const at=Q.texture.format;le=x.has(at)}if(le){const at=Q.texture.type,ct=y.has(at),ot=Ge.getClearColor(),ft=Ge.getClearAlpha(),mt=ot.r,Dt=ot.g,Bt=ot.b;ct?(C[0]=mt,C[1]=Dt,C[2]=Bt,C[3]=ft,q.clearBufferuiv(q.COLOR,0,C)):(O[0]=mt,O[1]=Dt,O[2]=Bt,O[3]=ft,q.clearBufferiv(q.COLOR,0,O))}else ue|=q.COLOR_BUFFER_BIT}re&&(ue|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Me&&(ue|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&q.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ge.dispose(),Se.dispose(),xe.dispose(),W.dispose(),Ne.dispose(),we.dispose(),ye.dispose(),H.dispose(),Xe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rt),ne.removeEventListener("sessionend",Pt),St.stop()};function Be(P){P.preventDefault(),rS("WebGLRenderer: Context Lost."),Z=!0}function _e(){rS("WebGLRenderer: Context Restored."),Z=!1;const P=$.autoReset,re=Re.enabled,Me=Re.autoUpdate,ue=Re.needsUpdate,le=Re.type;oe(),$.autoReset=P,Re.enabled=re,Re.autoUpdate=Me,Re.needsUpdate=ue,Re.type=le}function ae(P){un("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Te(P){const re=P.target;re.removeEventListener("dispose",Te),Ye(re)}function Ye(P){lt(P),W.remove(P)}function lt(P){const re=W.get(P).programs;re!==void 0&&(re.forEach(function(Me){Xe.releaseProgram(Me)}),P.isShaderMaterial&&Xe.releaseShaderCache(P))}this.renderBufferDirect=function(P,re,Me,ue,le,at){re===null&&(re=it);const ct=le.isMesh&&le.matrixWorld.determinantAffine()<0,ot=Ft(P,re,Me,ue,le);w.setMaterial(ue,ct);let ft=Me.index,mt=1;if(ue.wireframe===!0){if(ft=Ee.getWireframeAttribute(Me),ft===void 0)return;mt=2}const Dt=Me.drawRange,Bt=Me.attributes.position;let _t=Dt.start*mt,qt=(Dt.start+Dt.count)*mt;at!==null&&(_t=Math.max(_t,at.start*mt),qt=Math.min(qt,(at.start+at.count)*mt)),ft!==null?(_t=Math.max(_t,0),qt=Math.min(qt,ft.count)):Bt!=null&&(_t=Math.max(_t,0),qt=Math.min(qt,Bt.count));const Mn=qt-_t;if(Mn<0||Mn===1/0)return;ye.setup(le,ue,ot,Me,ft);let _n,fn=Ue;if(ft!==null&&(_n=Fe.get(ft),fn=ge,fn.setIndex(_n)),le.isMesh)ue.wireframe===!0?(w.setLineWidth(ue.wireframeLinewidth*vt()),fn.setMode(q.LINES)):fn.setMode(q.TRIANGLES);else if(le.isLine){let Yn=ue.linewidth;Yn===void 0&&(Yn=1),w.setLineWidth(Yn*vt()),le.isLineSegments?fn.setMode(q.LINES):le.isLineLoop?fn.setMode(q.LINE_LOOP):fn.setMode(q.LINE_STRIP)}else le.isPoints?fn.setMode(q.POINTS):le.isSprite&&fn.setMode(q.TRIANGLES);if(le.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))fn.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Yn=le._multiDrawStarts,gt=le._multiDrawCounts,kn=le._multiDrawCount,nn=ft?Fe.get(ft).bytesPerElement:1,di=W.get(ue).currentProgram.getUniforms();for(let Xt=0;Xt<kn;Xt++)di.setValue(q,"_gl_DrawID",Xt),fn.render(Yn[Xt]/nn,gt[Xt])}else if(le.isInstancedMesh)fn.renderInstances(_t,Mn,le.count);else if(Me.isInstancedBufferGeometry){const Yn=Me._maxInstanceCount!==void 0?Me._maxInstanceCount:1/0,gt=Math.min(Me.instanceCount,Yn);fn.renderInstances(_t,Mn,gt)}else fn.render(_t,Mn)};function dt(P,re,Me,ue){G!==null&&P.isNodeMaterial&&G.setObject(ue,P),$e===!0&&me.setState(P,Me,!1),P.transparent===!0&&P.side===Hs&&P.forceSinglePass===!1?(P.side=Ki,P.needsUpdate=!0,Lt(P,re,ue),P.side=Aa,P.needsUpdate=!0,Lt(P,re,ue),P.side=Hs):Lt(P,re,ue)}this.compile=function(P,re,Me=null){Me===null&&(Me=P),G!==null&&G.renderStart(P,re,Me),R=xe.get(Me),R.init(re),T.push(R),Me.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(R.pushLight(le),le.castShadow&&R.pushShadow(le))}),P!==Me&&P.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(R.pushLight(le),le.castShadow&&R.pushShadow(le))}),R.setupLights(),G!==null&&G.updateLights(R.state.lightsArray),be=this.localClippingEnabled,$e=me.init(this.clippingPlanes,be),$e===!0&&me.setGlobalState(this.clippingPlanes,re),G!==null&&Re.render(R.state.shadowsArray,Me,re);const ue=new Set;return P.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const at=le.material;if(at)if(Array.isArray(at))for(let ct=0;ct<at.length;ct++){const ot=at[ct];dt(ot,Me,re,le),ue.add(ot)}else dt(at,Me,re,le),ue.add(at)}),R=T.pop(),G!==null&&G.renderEnd(),ue},this.compileAsync=function(P,re,Me=null){const ue=this.compile(P,re,Me);return new Promise(le=>{function at(){if(ue.forEach(function(ct){const ft=W.get(ct).currentProgram;(ft===void 0||ft.isReady())&&ue.delete(ct)}),ue.size===0){le(P);return}setTimeout(at,10)}Le.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let At=null;function Vt(P){At&&At(P)}function Rt(){St.stop()}function Pt(){St.start()}const St=new hE;St.setAnimationLoop(Vt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(P){At=P,ne.setAnimationLoop(P),P===null?St.stop():St.start()},ne.addEventListener("sessionstart",Rt),ne.addEventListener("sessionend",Pt),this.render=function(P,re){if(re!==void 0&&re.isCamera!==!0){un("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;G!==null&&G.renderStart(P,re);const Me=ne.enabled===!0&&ne.isPresenting===!0,ue=L!==null&&(Q===null||Me)&&L.begin(B,Q);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(re),re=ne.getCamera()),P.isScene===!0&&P.onBeforeRender(B,P,re,Q),R=xe.get(P,T.length),R.init(re),R.state.textureUnits=de.getTextureUnits(),T.push(R),fe.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Ke.setFromProjectionMatrix(fe,gs,re.reversedDepth),be=this.localClippingEnabled,$e=me.init(this.clippingPlanes,be),b=Se.get(P,N.length),b.init(),N.push(b),ne.enabled===!0&&ne.isPresenting===!0){const ct=B.xr.getDepthSensingMesh();ct!==null&&Wt(ct,re,-1/0,B.sortObjects)}Wt(P,re,0,B.sortObjects),b.finish(),G!==null&&G.updateLights(R.state.lightsArray),B.sortObjects===!0&&b.sort(Pe,Oe),Qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Qe&&Ge.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&me.beginShadows();const le=R.state.shadowsArray;if(Re.render(le,P,re),$e===!0&&me.endShadows(),(ue&&L.hasRenderPass())===!1){const ct=b.opaque,ot=b.transmissive;if(R.setupLights(),re.isArrayCamera){const ft=re.cameras;if(ot.length>0)for(let mt=0,Dt=ft.length;mt<Dt;mt++){const Bt=ft[mt];et(ct,ot,P,Bt)}Qe&&Ge.render(P);for(let mt=0,Dt=ft.length;mt<Dt;mt++){const Bt=ft[mt];Ht(b,P,Bt,Bt.viewport)}}else ot.length>0&&et(ct,ot,P,re),Qe&&Ge.render(P),Ht(b,P,re)}Q!==null&&V===0&&(de.updateMultisampleRenderTarget(Q),de.updateRenderTargetMipmap(Q)),ue&&L.end(B),P.isScene===!0&&P.onAfterRender(B,P,re),ye.resetDefaultState(),Y=-1,I=null,T.pop(),T.length>0?(R=T[T.length-1],de.setTextureUnits(R.state.textureUnits),$e===!0&&me.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?b=N[N.length-1]:b=null,G!==null&&G.renderEnd()};function Wt(P,re,Me,ue){if(P.visible===!1)return;if(P.layers.test(re.layers)){if(P.isGroup)Me=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(re);else if(P.isLightProbeGrid)R.pushLightProbeGrid(P);else if(P.isLight)R.pushLight(P),P.castShadow&&R.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Ke)){ue&&Ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);const ct=we.update(P),ot=P.material;ot.visible&&b.push(P,ct,ot,Me,Ze.z,null,re)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Ke))){const ct=we.update(P),ot=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ze.copy(P.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ze.copy(ct.boundingSphere.center)),Ze.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(ot)){const ft=ct.groups;for(let mt=0,Dt=ft.length;mt<Dt;mt++){const Bt=ft[mt],_t=ot[Bt.materialIndex];_t&&_t.visible&&b.push(P,ct,_t,Me,Ze.z,Bt,re)}}else ot.visible&&b.push(P,ct,ot,Me,Ze.z,null,re)}}const at=P.children;for(let ct=0,ot=at.length;ct<ot;ct++)Wt(at[ct],re,Me,ue)}function Ht(P,re,Me,ue){const{opaque:le,transmissive:at,transparent:ct}=P;R.setupLightsView(Me),$e===!0&&me.setGlobalState(B.clippingPlanes,Me),ue&&w.viewport(U.copy(ue)),le.length>0&&He(le,re,Me),at.length>0&&He(at,re,Me),ct.length>0&&He(ct,re,Me),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function et(P,re,Me,ue){if((Me.isScene===!0?Me.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ue.id]===void 0){const _t=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ue.id]=new Or(1,1,{generateMipmaps:!0,type:_t?ns:hr,minFilter:pa,samples:Math.max(4,F.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const at=R.state.transmissionRenderTarget[ue.id],ct=ue.viewport||U;at.setSize(ct.z*B.transmissionResolutionScale,ct.w*B.transmissionResolutionScale);const ot=B.getRenderTarget(),ft=B.getActiveCubeFace(),mt=B.getActiveMipmapLevel();B.setRenderTarget(at),B.getClearColor(De),se=B.getClearAlpha(),se<1&&B.setClearColor(16777215,.5),B.clear(),Qe&&Ge.render(Me);const Dt=B.toneMapping;B.toneMapping=xs;const Bt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),R.setupLightsView(ue),$e===!0&&me.setGlobalState(B.clippingPlanes,ue),He(P,Me,ue),de.updateMultisampleRenderTarget(at),de.updateRenderTargetMipmap(at),Le.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let qt=0,Mn=re.length;qt<Mn;qt++){const _n=re[qt],{object:fn,geometry:Yn,material:gt,group:kn}=_n;if(gt.side===Hs&&fn.layers.test(ue.layers)){const nn=gt.side;gt.side=Ki,gt.needsUpdate=!0,pt(fn,Me,ue,Yn,gt,kn),gt.side=nn,gt.needsUpdate=!0,_t=!0}}_t===!0&&(de.updateMultisampleRenderTarget(at),de.updateRenderTargetMipmap(at))}B.setRenderTarget(ot,ft,mt),B.setClearColor(De,se),Bt!==void 0&&(ue.viewport=Bt),B.toneMapping=Dt}function He(P,re,Me){const ue=re.isScene===!0?re.overrideMaterial:null;for(let le=0,at=P.length;le<at;le++){const ct=P[le],{object:ot,geometry:ft,group:mt}=ct;let Dt=ct.material;Dt.allowOverride===!0&&ue!==null&&(Dt=ue),ot.layers.test(Me.layers)&&pt(ot,re,Me,ft,Dt,mt)}}function pt(P,re,Me,ue,le,at){G!==null&&le.isNodeMaterial&&G.setObject(P,le),P.onBeforeRender(B,re,Me,ue,le,at),P.modelViewMatrix.multiplyMatrices(Me.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(B,re,Me,ue,P,at),le.transparent===!0&&le.side===Hs&&le.forceSinglePass===!1?(le.side=Ki,le.needsUpdate=!0,B.renderBufferDirect(Me,re,ue,le,P,at),le.side=Aa,le.needsUpdate=!0,B.renderBufferDirect(Me,re,ue,le,P,at),le.side=Hs):B.renderBufferDirect(Me,re,ue,le,P,at),P.onAfterRender(B,re,Me,ue,le,at)}function Lt(P,re,Me){re.isScene!==!0&&(re=it);const ue=W.get(P),le=R.state.lights,at=R.state.shadowsArray,ct=le.state.version,ot=Xe.getParameters(P,le.state,at,re,Me,R.state.lightProbeGridArray),ft=Xe.getProgramCacheKey(ot);let mt=ue.programs;ue.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?re.environment:null,ue.fog=re.fog;const Dt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ue.envMap=Ne.get(P.envMap||ue.environment,Dt),ue.envMapRotation=ue.environment!==null&&P.envMap===null?re.environmentRotation:P.envMapRotation,mt===void 0&&(P.addEventListener("dispose",Te),mt=new Map,ue.programs=mt);let Bt=mt.get(ft);if(Bt!==void 0){if(ue.currentProgram===Bt&&ue.lightsStateVersion===ct)return jt(P,ot),Bt}else ot.uniforms=Xe.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,Me,ot),P.onBeforeCompile(ot,B),Bt=Xe.acquireProgram(ot,ft),mt.set(ft,Bt),ue.uniforms=ot.uniforms;const _t=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(_t.clippingPlanes=me.uniform),jt(P,ot),ue.needsLights=dn(P),ue.lightsStateVersion=ct,ue.needsLights&&(_t.ambientLightColor.value=le.state.ambient,_t.lightProbe.value=le.state.probe,_t.sunLights.value=le.state.sun,_t.sunLightShadows.value=le.state.sunShadow,_t.directionalLights.value=le.state.directional,_t.directionalLightShadows.value=le.state.directionalShadow,_t.spotLights.value=le.state.spot,_t.spotLightShadows.value=le.state.spotShadow,_t.rectAreaLights.value=le.state.rectArea,_t.ltc_1.value=le.state.rectAreaLTC1,_t.ltc_2.value=le.state.rectAreaLTC2,_t.pointLights.value=le.state.point,_t.pointLightShadows.value=le.state.pointShadow,_t.hemisphereLights.value=le.state.hemi,_t.sunShadowMatrix.value=le.state.sunShadowMatrix,_t.sunShadowCascade.value=le.state.sunShadowCascade,_t.directionalShadowMatrix.value=le.state.directionalShadowMatrix,_t.spotLightMatrix.value=le.state.spotLightMatrix,_t.spotLightMap.value=le.state.spotLightMap,_t.pointShadowMatrix.value=le.state.pointShadowMatrix),ue.lightProbeGrid=R.state.lightProbeGridArray.length>0,ue.currentProgram=Bt,ue.uniformsList=null,Bt}function It(P){if(P.uniformsList===null){const re=P.currentProgram.getUniforms();P.uniformsList=Gd.seqWithValue(re.seq,P.uniforms)}return P.uniformsList}function jt(P,re){const Me=W.get(P);Me.outputColorSpace=re.outputColorSpace,Me.batching=re.batching,Me.batchingColor=re.batchingColor,Me.instancing=re.instancing,Me.instancingColor=re.instancingColor,Me.instancingMorph=re.instancingMorph,Me.skinning=re.skinning,Me.morphTargets=re.morphTargets,Me.morphNormals=re.morphNormals,Me.morphColors=re.morphColors,Me.morphTargetsCount=re.morphTargetsCount,Me.numClippingPlanes=re.numClippingPlanes,Me.numIntersection=re.numClipIntersection,Me.vertexAlphas=re.vertexAlphas,Me.vertexTangents=re.vertexTangents,Me.toneMapping=re.toneMapping}function Rn(P,re){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;A.setFromMatrixPosition(re.matrixWorld);for(let Me=0,ue=P.length;Me<ue;Me++){const le=P[Me];if(le.texture!==null&&le.boundingBox.containsPoint(A))return le}return null}function Ft(P,re,Me,ue,le){re.isScene!==!0&&(re=it),de.resetTextureUnits();const at=re.fog,ct=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?re.environment:null,ot=Q===null?B.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:rn.workingColorSpace,ft=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,mt=Ne.get(ue.envMap||ct,ft),Dt=ue.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,Bt=!!Me.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),_t=!!Me.morphAttributes.position,qt=!!Me.morphAttributes.normal,Mn=!!Me.morphAttributes.color;let _n=xs;ue.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(_n=B.toneMapping);const fn=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,Yn=fn!==void 0?fn.length:0,gt=W.get(ue),kn=R.state.lights;if($e===!0&&(be===!0||P!==I)){const pn=P===I&&ue.id===Y;me.setState(ue,P,pn)}let nn=!1;ue.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==kn.state.version||gt.outputColorSpace!==ot||le.isBatchedMesh&&gt.batching===!1||!le.isBatchedMesh&&gt.batching===!0||le.isBatchedMesh&&gt.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&gt.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&gt.instancing===!1||!le.isInstancedMesh&&gt.instancing===!0||le.isSkinnedMesh&&gt.skinning===!1||!le.isSkinnedMesh&&gt.skinning===!0||le.isInstancedMesh&&gt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&gt.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&gt.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&gt.instancingMorph===!1&&le.morphTexture!==null||gt.envMap!==mt||ue.fog===!0&&gt.fog!==at||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==me.numPlanes||gt.numIntersection!==me.numIntersection)||gt.vertexAlphas!==Dt||gt.vertexTangents!==Bt||gt.morphTargets!==_t||gt.morphNormals!==qt||gt.morphColors!==Mn||gt.toneMapping!==_n||gt.morphTargetsCount!==Yn||!!gt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(nn=!0):(nn=!0,gt.__version=ue.version);let di=gt.currentProgram;nn===!0&&(di=Lt(ue,re,le),G&&ue.isNodeMaterial&&G.onUpdateProgram(ue,di,gt));let Xt=!1,Br=!1,Ms=!1;const an=di.getUniforms(),Tn=gt.uniforms;if(w.useProgram(di.program)&&(Xt=!0,Br=!0,Ms=!0),ue.id!==Y&&(Y=ue.id,Br=!0),gt.needsLights){const pn=Rn(R.state.lightProbeGridArray,le);gt.lightProbeGrid!==pn&&(gt.lightProbeGrid=pn,Br=!0)}if(Xt||I!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),an.setValue(q,"projectionMatrix",P.projectionMatrix),an.setValue(q,"viewMatrix",P.matrixWorldInverse);const Sr=an.map.cameraPosition;Sr!==void 0&&Sr.setValue(q,Et.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&an.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&an.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),I!==P&&(I=P,Br=!0,Ms=!0)}if(gt.needsLights&&(kn.state.sunShadowMap.length>0&&an.setValue(q,"sunShadowMap",kn.state.sunShadowMap,de),kn.state.directionalShadowMap.length>0&&an.setValue(q,"directionalShadowMap",kn.state.directionalShadowMap,de),kn.state.spotShadowMap.length>0&&an.setValue(q,"spotShadowMap",kn.state.spotShadowMap,de),kn.state.pointShadowMap.length>0&&an.setValue(q,"pointShadowMap",kn.state.pointShadowMap,de)),le.isSkinnedMesh){an.setOptional(q,le,"bindMatrix"),an.setOptional(q,le,"bindMatrixInverse");const pn=le.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),an.setValue(q,"boneTexture",pn.boneTexture,de))}le.isBatchedMesh&&(an.setOptional(q,le,"batchingTexture"),an.setValue(q,"batchingTexture",le._matricesTexture,de),an.setOptional(q,le,"batchingIdTexture"),an.setValue(q,"batchingIdTexture",le._indirectTexture,de),an.setOptional(q,le,"batchingColorTexture"),le._colorsTexture!==null&&an.setValue(q,"batchingColorTexture",le._colorsTexture,de));const zr=Me.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&K.update(le,Me,di),(Br||gt.receiveShadow!==le.receiveShadow)&&(gt.receiveShadow=le.receiveShadow,an.setValue(q,"receiveShadow",le.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&re.environment!==null&&(Tn.envMapIntensity.value=re.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=UD()),Br){if(an.setValue(q,"toneMappingExposure",B.toneMappingExposure),gt.needsLights&&tn(Tn,Ms),at&&ue.fog===!0&&Je.refreshFogUniforms(Tn,at),Je.refreshMaterialUniforms(Tn,ue,te,ee,R.state.transmissionRenderTarget[P.id]),gt.needsLights&&gt.lightProbeGrid){const pn=gt.lightProbeGrid;Tn.probesSH.value=pn.texture,Tn.probesMin.value.copy(pn.boundingBox.min),Tn.probesMax.value.copy(pn.boundingBox.max),Tn.probesResolution.value.copy(pn.resolution)}Gd.upload(q,It(gt),Tn,de)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Gd.upload(q,It(gt),Tn,de),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&an.setValue(q,"center",le.center),an.setValue(q,"modelViewMatrix",le.modelViewMatrix),an.setValue(q,"normalMatrix",le.normalMatrix),an.setValue(q,"modelMatrix",le.matrixWorld),ue.uniformsGroups!==void 0){const pn=ue.uniformsGroups;for(let Sr=0,Vr=pn.length;Sr<Vr;Sr++){const Hr=pn[Sr];H.update(Hr,di),H.bind(Hr,di)}}return di}function tn(P,re){P.ambientLightColor.needsUpdate=re,P.lightProbe.needsUpdate=re,P.sunLights.needsUpdate=re,P.sunLightShadows.needsUpdate=re,P.directionalLights.needsUpdate=re,P.directionalLightShadows.needsUpdate=re,P.pointLights.needsUpdate=re,P.pointLightShadows.needsUpdate=re,P.spotLights.needsUpdate=re,P.spotLightShadows.needsUpdate=re,P.rectAreaLights.needsUpdate=re,P.hemisphereLights.needsUpdate=re}function dn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(P,re,Me){const ue=W.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),W.get(P.texture).__webglTexture=re,W.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:Me,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,re){const Me=W.get(P);Me.__webglFramebuffer=re,Me.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(P,re=0,Me=0){Q=P,z=re,V=Me;let ue=null,le=!1,at=!1;if(P){const ot=W.get(P);if(ot.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,ot.__webglFramebuffer),U.copy(P.viewport),k.copy(P.scissor),ve=P.scissorTest,w.viewport(U),w.scissor(k),w.setScissorTest(ve),Y=-1;return}else if(ot.__webglFramebuffer===void 0)de.setupRenderTarget(P);else if(ot.__hasExternalTextures)de.rebindTextures(P,W.get(P.texture).__webglTexture,W.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Dt=P.depthTexture;if(ot.__boundDepthTexture!==Dt){if(Dt!==null&&W.has(Dt)&&(P.width!==Dt.image.width||P.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(P)}}const ft=P.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(at=!0);const mt=W.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(mt[re])?ue=mt[re][Me]:ue=mt[re],le=!0):P.samples>0&&de.useMultisampledRTT(P)===!1?ue=W.get(P).__webglMultisampledFramebuffer:Array.isArray(mt)?ue=mt[Me]:ue=mt,U.copy(P.viewport),k.copy(P.scissor),ve=P.scissorTest}else U.copy(ze).multiplyScalar(te).floor(),k.copy(qe).multiplyScalar(te).floor(),ve=st;if(Me!==0&&(ue=ie),w.bindFramebuffer(q.FRAMEBUFFER,ue)&&w.drawBuffers(P,ue),w.viewport(U),w.scissor(k),w.setScissorTest(ve),le){const ot=W.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+re,ot.__webglTexture,Me)}else if(at){const ot=re;for(let ft=0;ft<P.textures.length;ft++){const mt=W.get(P.textures[ft]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ft,mt.__webglTexture,Me,ot)}}else if(P!==null&&Me!==0){const ot=W.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ot.__webglTexture,Me)}Y=-1};function vn(P){const re=W.get(P);return(re.__readFormat!==P.format||re.__readType!==P.type)&&(re.__readFormat=P.format,re.__readType=P.type,re.__formatReadable=F.textureFormatReadable(P.format),re.__typeReadable=F.textureTypeReadable(P.type)),re}this.readRenderTargetPixels=function(P,re,Me,ue,le,at,ct,ot=0){if(!(P&&P.isWebGLRenderTarget)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=W.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){w.bindFramebuffer(q.FRAMEBUFFER,ft);try{const mt=P.textures[ot],Dt=mt.format,Bt=mt.type;P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ot);const _t=vn(mt);if(_t.__formatReadable===!1){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_t.__typeReadable===!1){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=P.width-ue&&Me>=0&&Me<=P.height-le&&q.readPixels(re,Me,ue,le,Ve.convert(Dt),Ve.convert(Bt),at)}finally{const mt=Q!==null?W.get(Q).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(P,re,Me,ue,le,at,ct,ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=W.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(re>=0&&re<=P.width-ue&&Me>=0&&Me<=P.height-le){w.bindFramebuffer(q.FRAMEBUFFER,ft);const mt=P.textures[ot],Dt=mt.format,Bt=mt.type;P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ot);const _t=vn(mt);if(_t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,qt),q.bufferData(q.PIXEL_PACK_BUFFER,at.byteLength,q.STREAM_READ),q.readPixels(re,Me,ue,le,Ve.convert(Dt),Ve.convert(Bt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Mn=Q!==null?W.get(Q).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,Mn);const _n=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await zR(q,_n,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,qt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,at),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(qt),q.deleteSync(_n),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,re=null,Me=0){const ue=Math.pow(2,-Me),le=Math.floor(P.image.width*ue),at=Math.floor(P.image.height*ue),ct=re!==null?re.x:0,ot=re!==null?re.y:0;de.setTexture2D(P,0),q.copyTexSubImage2D(q.TEXTURE_2D,Me,0,0,ct,ot,le,at),w.unbindTexture()},this.copyTextureToTexture=function(P,re,Me=null,ue=null,le=0,at=0){let ct,ot,ft,mt,Dt,Bt,_t,qt,Mn;const _n=P.isCompressedTexture?P.mipmaps[at]:P.image;if(Me!==null)ct=Me.max.x-Me.min.x,ot=Me.max.y-Me.min.y,ft=Me.isBox3?Me.max.z-Me.min.z:1,mt=Me.min.x,Dt=Me.min.y,Bt=Me.isBox3?Me.min.z:0;else{const Tn=Math.pow(2,-le);ct=Math.floor(_n.width*Tn),ot=Math.floor(_n.height*Tn),P.isDataArrayTexture?ft=_n.depth:P.isData3DTexture?ft=Math.floor(_n.depth*Tn):ft=1,mt=0,Dt=0,Bt=0}ue!==null?(_t=ue.x,qt=ue.y,Mn=ue.z):(_t=0,qt=0,Mn=0);const fn=Ve.convert(re.format),Yn=Ve.convert(re.type);let gt;re.isData3DTexture?(de.setTexture3D(re,0),gt=q.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(de.setTexture2DArray(re,0),gt=q.TEXTURE_2D_ARRAY):(de.setTexture2D(re,0),gt=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,re.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,re.unpackAlignment);const kn=w.getParameter(q.UNPACK_ROW_LENGTH),nn=w.getParameter(q.UNPACK_IMAGE_HEIGHT),di=w.getParameter(q.UNPACK_SKIP_PIXELS),Xt=w.getParameter(q.UNPACK_SKIP_ROWS),Br=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,_n.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_n.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,mt),w.pixelStorei(q.UNPACK_SKIP_ROWS,Dt),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Bt);const Ms=P.isDataArrayTexture||P.isData3DTexture,an=re.isDataArrayTexture||re.isData3DTexture;if(P.isDepthTexture){const Tn=W.get(P),zr=W.get(re),pn=W.get(Tn.__renderTarget),Sr=W.get(zr.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,pn.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Vr=0;Vr<ft;Vr++)Ms&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,W.get(P).__webglTexture,le,Bt+Vr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,W.get(re).__webglTexture,at,Mn+Vr)),q.blitFramebuffer(mt,Dt,ct,ot,_t,qt,ct,ot,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(le!==0||P.isRenderTargetTexture||W.has(P)){const Tn=W.get(P),zr=W.get(re);w.bindFramebuffer(q.READ_FRAMEBUFFER,X),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,j);for(let pn=0;pn<ft;pn++)Ms?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Tn.__webglTexture,le,Bt+pn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Tn.__webglTexture,le),an?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,zr.__webglTexture,at,Mn+pn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zr.__webglTexture,at),le!==0?q.blitFramebuffer(mt,Dt,ct,ot,_t,qt,ct,ot,q.COLOR_BUFFER_BIT,q.NEAREST):an?q.copyTexSubImage3D(gt,at,_t,qt,Mn+pn,mt,Dt,ct,ot):q.copyTexSubImage2D(gt,at,_t,qt,mt,Dt,ct,ot);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else an?P.isDataTexture||P.isData3DTexture?q.texSubImage3D(gt,at,_t,qt,Mn,ct,ot,ft,fn,Yn,_n.data):re.isCompressedArrayTexture?q.compressedTexSubImage3D(gt,at,_t,qt,Mn,ct,ot,ft,fn,_n.data):q.texSubImage3D(gt,at,_t,qt,Mn,ct,ot,ft,fn,Yn,_n):P.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,at,_t,qt,ct,ot,fn,Yn,_n.data):P.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,at,_t,qt,_n.width,_n.height,fn,_n.data):q.texSubImage2D(q.TEXTURE_2D,at,_t,qt,ct,ot,fn,Yn,_n);w.pixelStorei(q.UNPACK_ROW_LENGTH,kn),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,nn),w.pixelStorei(q.UNPACK_SKIP_PIXELS,di),w.pixelStorei(q.UNPACK_SKIP_ROWS,Xt),w.pixelStorei(q.UNPACK_SKIP_IMAGES,Br),at===0&&re.generateMipmaps&&q.generateMipmap(gt),w.unbindTexture()},this.initRenderTarget=function(P){W.get(P).__webglFramebuffer===void 0&&de.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?de.setTextureCube(P,0):P.isData3DTexture?de.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?de.setTexture2DArray(P,0):de.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){z=0,V=0,Q=null,w.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(e),t.unpackColorSpace=rn._getUnpackColorSpace()}}const Hu=400,yl=160,Gu=80,Wu=1500,Ic=8,e1=["straight","gentle","winding","hills","racing","deep"],t1={dark:{background:"transparent",road:"#08080a",lines:"#25252d",tail:["#d856bf","#6750a2","#c247ac"],head:["#03b3c3","#0e5ea5","#324555"],poles:["#03b3c3"],dust:"#ffffff"},light:{background:"transparent",road:"#efeff2",lines:"#d0d0d7",tail:["#d856bf","#6750a2","#c247ac"],head:["#03b3c3","#0e5ea5","#324555"],poles:["#03b3c3"],dust:"#18181b"}},Th=`
  uniform float uTime;
  uniform float uCurvature;
  uniform vec4 uCurveA;
  uniform float uCurveB;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uPixel;
  #define PI 3.14159265358979
  float nsin(float v) { return sin(v) * 0.5 + 0.5; }
  vec3 gentle(float p) {
    return vec3(
      cos(p * PI * 5.0 + uTime) * 25.0 - cos(0.02 * PI * 5.0 + uTime) * 25.0,
      sin(p * PI * 2.0 + PI * 0.5 + uTime) * 15.0 - sin(0.02 * PI * 2.0 + PI * 0.5 + uTime) * 15.0,
      0.0
    );
  }
  float windX(float p) { return cos(PI * p * 4.0 + uTime) * 25.0 + pow(cos(PI * p * 8.0 + uTime * 2.0), 2.0) * 5.0; }
  float windY(float p) { return -nsin(PI * p * 8.0 + uTime) * 10.0 - pow(nsin(PI * p + uTime / 8.0), 5.0) * 10.0; }
  vec3 winding(float p) { return vec3(windX(p) - windX(0.0125), windY(p) - windY(0.0125), 0.0); }
  vec3 hills(float p) {
    return vec3(
      cos(p * PI * 3.0 + uTime) * 30.0 - cos(0.02 * PI * 3.0 + uTime) * 30.0,
      nsin(p * PI * 6.0 + uTime) * 30.0 - nsin(0.02 * PI * 6.0 + uTime) * 30.0,
      nsin(p * PI * 10.0 + uTime) * 20.0 - nsin(0.02 * PI * 10.0 + uTime) * 20.0
    );
  }
  vec3 racing(float p) {
    return vec3(
      sin(p * PI * 2.0 + uTime) * 35.0 - sin(0.0125 * PI * 2.0 + uTime) * 35.0,
      sin(p * PI * 3.0 + uTime) * 10.0 - sin(0.0125 * PI * 3.0 + uTime) * 10.0,
      0.0
    );
  }
  float deepX(float p) { return sin(p * PI * 4.0 + uTime) * 10.0; }
  float deepY(float p) { return pow(abs(p * 10.0), 2.0) + sin(p * PI * 8.0 + uTime) * 20.0; }
  vec3 deep(float p) { return vec3(deepX(p) - deepX(0.02), deepY(p) - deepY(0.02), 0.0); }
  vec3 bend(float p) {
    vec3 d = gentle(p) * uCurveA.x + winding(p) * uCurveA.y + hills(p) * uCurveA.z + racing(p) * uCurveA.w + deep(p) * uCurveB;
    return d * uCurvature;
  }
`,kD=`
  ${Th}
  attribute vec4 aSeedA;
  attribute vec4 aSeedB;
  attribute float aPair;
  attribute float aTone;
  uniform float uTravel;
  uniform float uRoadX;
  uniform float uRoadWidth;
  uniform float uLanes;
  uniform float uDirection;
  uniform vec2 uSpeedRange;
  uniform float uTrail;
  uniform float uStretch;
  uniform float uSize;
  uniform float uRadiusScale;
  uniform float uMirror;
  uniform vec3 uColors[${Ic}];
  uniform float uColorCount;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vThin;
  void main() {
    float laneWidth = uRoadWidth / uLanes;
    float lane = min(floor(aSeedA.x * uLanes), uLanes - 1.0);
    float laneX = (lane + 0.5) * laneWidth - uRoadWidth * 0.5 + (aSeedA.y - 0.5) * 0.5 * laneWidth;
    float carWidth = mix(0.3, 0.5, aSeedA.z) * laneWidth;
    float radius = mix(0.05, 0.14, aSeedA.w) * uSize;
    float len = mix(0.03, 0.2, aSeedB.x) * uTravel * uTrail * (1.0 + uStretch);
    float speed = mix(uSpeedRange.x, uSpeedRange.y, aSeedB.y) * uDirection;
    vec3 center = vec3(
      uRoadX + laneX + aPair * carWidth,
      aSeedB.w * 0.8 + radius * 1.3,
      position.z * len + len - mod(uTime * speed + aSeedB.z * uTravel, uTravel)
    );
    vAbove = center.y;
    center.y = mix(center.y, -center.y * 1.8, uMirror);
    center += bend(abs(center.z / uTravel));
    float depth = max(0.1, -(modelViewMatrix * vec4(center, 1.0)).z);
    float wanted = radius * uRadiusScale;
    float shown = max(wanted, depth * uPixel * 0.75);
    vThin = wanted / shown;
    vec3 p = center + vec3(position.x * shown, position.y * shown * mix(1.0, 2.2, uMirror), 0.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vec3 n = normal;
    n.y *= 1.0 - 2.0 * uMirror;
    vNormal = normalize(normalMatrix * n);
    vView = -mv.xyz;
    vUv = uv;
    vColor = uColors[int(min(floor(aTone * uColorCount), uColorCount - 1.0))];
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,BD=`
  uniform vec2 uFade;
  uniform float uIntensity;
  uniform float uSharp;
  uniform float uCore;
  uniform float uMirror;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vThin;
  void main() {
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float alpha = pow(facing, uSharp) * smoothstep(uFade.x, uFade.y, vUv.x) * uIntensity * vThin * (1.0 - vFog);
    alpha *= mix(1.0, exp(-vAbove * 0.9), uMirror);
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(mix(vColor, vec3(1.0), pow(facing, 12.0) * uCore), min(alpha, 1.0));
  }
`,zD=`
  ${Th}
  attribute vec4 aSeed;
  attribute float aIndex;
  attribute float aSide;
  uniform float uTravel;
  uniform float uCount;
  uniform float uEdge;
  uniform float uHeight;
  uniform float uRadiusScale;
  uniform float uMirror;
  uniform vec3 uColors[${Ic}];
  uniform float uColorCount;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vHeight;
  varying float vThin;
  void main() {
    vHeight = position.y + 0.5;
    float width = mix(0.08, 0.22, aSeed.y);
    float height = mix(1.3, 1.9, aSeed.z) * uHeight;
    float spacing = uTravel / max(uCount, 1.0);
    vec3 center = vec3(
      aSide * uEdge,
      vHeight * height,
      -uTravel + mod(uTime * 120.0 + (aIndex + aSeed.x * 0.6) * spacing, uTravel)
    );
    vAbove = center.y;
    center.y = mix(center.y, -center.y * 1.6, uMirror);
    center += bend(abs(center.z / uTravel));
    float depth = max(0.1, -(modelViewMatrix * vec4(center, 1.0)).z);
    float wanted = width * uRadiusScale;
    float shown = max(wanted, depth * uPixel * 0.75);
    vThin = wanted / shown;
    vec3 p = center + vec3(position.x * shown, 0.0, position.z * shown);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    vColor = uColors[int(min(floor(aSeed.w * uColorCount), uColorCount - 1.0))];
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,VD=`
  uniform float uIntensity;
  uniform float uSharp;
  uniform float uCore;
  uniform float uMirror;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vHeight;
  varying float vThin;
  void main() {
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float ends = smoothstep(0.0, 0.08, vHeight) * smoothstep(1.0, 0.9, vHeight);
    float alpha = pow(facing, uSharp) * ends * uIntensity * vThin * (1.0 - vFog);
    alpha *= mix(1.0, exp(-vAbove * 0.6), uMirror);
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(mix(vColor, vec3(1.0), pow(facing, 12.0) * uCore), min(alpha, 1.0));
  }
`,HD=`
  ${Th}
  attribute vec4 aSeed;
  attribute float aEnd;
  uniform float uTravel;
  uniform float uStretch;
  uniform float uSpread;
  varying float vAlpha;
  void main() {
    float x = (aSeed.x - 0.5) * uSpread;
    float y = mix(1.0, 42.0, aSeed.y * aSeed.y);
    float speed = mix(140.0, 260.0, aSeed.w);
    float z = -uTravel + mod(uTime * speed + aSeed.z * uTravel, uTravel);
    float len = (0.6 + uStretch * 7.0) * mix(0.6, 1.4, aSeed.w);
    vec3 p = vec3(x, y, z + aEnd * len);
    p += bend(abs(p.z / uTravel));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vAlpha = aEnd * (1.0 - smoothstep(uFogNear, uFogFar, -mv.z));
  }
`,GD=`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha * uIntensity);
  }
`,WD=`
  ${Th}
  uniform float uTravel;
  uniform float uWidth;
  varying vec2 vRoad;
  varying float vFog;
  void main() {
    vec3 p = position;
    p.x *= uWidth;
    vRoad = vec2(p.x, p.z);
    p += bend(abs(p.z / uTravel));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,XD=`
  uniform float uTime;
  uniform vec3 uRoadColor;
  uniform vec3 uLineColor;
  uniform vec3 uBackground;
  uniform float uRoadWidth;
  uniform float uMedian;
  uniform float uLanes;
  uniform float uTransparent;
  uniform float uOpacity;
  varying vec2 vRoad;
  varying float vFog;
  float stripe(float d, float w) {
    float aa = fwidth(d) * 1.2;
    return 1.0 - smoothstep(w - aa, w + aa, d);
  }
  void main() {
    float rx = abs(vRoad.x) - uMedian * 0.5;
    vec3 color = rx < 0.0 ? mix(uRoadColor, uLineColor, 0.12) : uRoadColor;
    if (rx >= 0.0) {
      float laneWidth = uRoadWidth / uLanes;
      float shoulder = max(stripe(abs(rx - 0.3), 0.07), stripe(abs(rx - (uRoadWidth - 0.3)), 0.07));
      float nearest = floor(rx / laneWidth + 0.5);
      float inner = step(0.5, nearest) * step(nearest, uLanes - 0.5);
      float dash = step(0.5, fract((vRoad.y - uTime * 120.0) / 14.0));
      float marks = max(shoulder, stripe(abs(rx - nearest * laneWidth), 0.06) * inner * dash);
      color = mix(color, uLineColor, marks);
    }
    float alpha = mix(1.0, 1.0 - vFog, uTransparent) * uOpacity;
    gl_FragColor = vec4(mix(color, uBackground, vFog * (1.0 - uTransparent)), alpha);
  }
`,YD=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,qD=`
  uniform sampler2D uTexture;
  uniform vec2 uTexel;
  varying vec2 vUv;
  vec4 tap(vec2 offset) {
    return min(texture2D(uTexture, vUv + uTexel * offset), vec4(1.0));
  }
  void main() {
    vec4 sum = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
    gl_FragColor = sum * 0.125;
  }
`,SE=`
  uniform sampler2D uTexture;
  uniform vec2 uTexel;
  varying vec2 vUv;
  vec4 tent() {
    vec4 sum = texture2D(uTexture, vUv + uTexel * vec2(-1.0, 0.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(1.0, 0.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.0, -1.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.0, 1.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(-0.5, -0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.5, -0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(-0.5, 0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.5, 0.5)) * 2.0;
    return sum / 12.0;
  }
`,$D=`
  ${SE}
  void main() {
    gl_FragColor = tent();
  }
`,KD=`
  ${SE}
  uniform float uStrength;
  uniform float uCeiling;
  uniform float uLight;
  void main() {
    vec4 color = tent() * uStrength;
    float peak = max(uLight > 0.5 ? color.a : max(color.r, max(color.g, color.b)), 0.0001);
    color *= uCeiling * (1.0 - exp(-peak / uCeiling)) / peak;
    gl_FragColor = uLight > 0.5 ? color : vec4(color.rgb, 0.0);
  }
`;let Sl=null;const tc=s=>{if(Sl=Sl??document.createElement("canvas").getContext("2d"),!Sl)return[1,1,1];Sl.fillStyle="#000000",Sl.fillStyle=s;const e=String(Sl.fillStyle);if(e.startsWith("#")){const n=parseInt(e.slice(1,7),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const t=e.match(/[\d.]+/g)?.map(Number)??[0,0,0];return[t[0]/255,t[1]/255,t[2]/255]},f0=(s,e,t)=>{const n=t.length?t:["#ffffff"];for(let r=0;r<Ic;r++)s.value[r].fromArray(tc(n[r%n.length]));e.value=Math.min(n.length,Ic)},n1=s=>{const e=new OC;return e.setIndex(s.index),Object.entries(s.attributes).forEach(([t,n])=>e.setAttribute(t,n)),e},Pl=s=>Math.sin(s)*.5+.5,dh=(s,e)=>Math.cos(Math.PI*s*4+e)*25+Math.cos(Math.PI*s*8+e*2)**2*5,hh=(s,e)=>-Pl(Math.PI*s*8+e)*10-Pl(Math.PI*s+e/8)**5*10,ph=(s,e)=>Math.sin(s*Math.PI*4+e)*10,mh=(s,e)=>Math.abs(s*10)**2+Math.sin(s*Math.PI*8+e)*20,ZD=(s,e)=>{const{PI:t,cos:n,sin:r}=Math;return[[n(s*t*5+e)*25-n(.02*t*5+e)*25,r(s*t*2+t*.5+e)*15-r(.02*t*2+t*.5+e)*15,0],[dh(s,e)-dh(.0125,e),hh(s,e)-hh(.0125,e),0],[n(s*t*3+e)*30-n(.02*t*3+e)*30,Pl(s*t*6+e)*30-Pl(.02*t*6+e)*30,Pl(s*t*10+e)*20-Pl(.02*t*10+e)*20],[r(s*t*2+e)*35-r(.0125*t*2+e)*35,r(s*t*3+e)*10-r(.0125*t*3+e)*10,0],[ph(s,e)-ph(.02,e),mh(s,e)-mh(.02,e),0]]},JD=(s,e)=>{const[n,,r,a]=ZD(.025,s);return[[n[0]*e*2,n[1]*e*.4,-3],[(dh(.025,s)-dh(.025+.007,s))*e*-2,(hh(.025,s)-hh(.025+.007,s))*e*-5,-10],[r[0]*e*2,r[1]*e*2,r[2]*e*2-5],[a[0]*e,a[1]*e,-5],[(ph(.025,s)-ph(.025+.01,s))*e*-2,(mh(.025,s)-mh(.025+.01,s))*e*-4,-10]]},QD=({curve:s="winding",curvature:e=1,speed:t=1,boost:n=3,fov:r=90,boostFov:a=130,lanes:l=3,roadWidth:c=10,medianWidth:f=2,density:h=40,trailLength:p=1,lightSize:_=1,poles:m=20,poleHeight:g=1,dust:S=100,glow:E=.6,reflections:x=.5,steer:y=.35,tailColors:C,headColors:O,poleColors:A,roadColor:b,roadOpacity:R=.1,lineColor:N,background:T,theme:L="dark",interactive:B=!0,boosting:Z=!1,onBoostStart:G,onBoostEnd:ie,className:X="",style:j})=>{const z=yt.useRef(null),V=t1[L]??t1.dark,Q={light:L==="light",curve:e1.includes(s)?s:"winding",curvature:Math.max(0,e),speed:Math.max(0,t),boost:Math.max(1,n),fov:Math.min(170,Math.max(20,r)),boostFov:Math.min(170,Math.max(20,a)),lanes:Math.max(1,Math.round(l)),roadWidth:Math.max(1,c),medianWidth:Math.max(0,f),density:Math.min(yl,Math.max(0,Math.round(h))),trailLength:Math.max(.05,p),lightSize:Math.max(.1,_),poles:Math.min(Gu,Math.max(0,Math.round(m))),poleHeight:Math.max(.1,g),dust:Math.min(Wu,Math.max(0,Math.round(S))),glow:Math.max(0,E),reflections:Math.max(0,x),steer:Math.max(0,y),tailColors:C?.length?C:V.tail,headColors:O?.length?O:V.head,poleColors:A?.length?A:V.poles,roadColor:b??V.road,roadOpacity:Math.min(1,Math.max(0,R)),lineColor:N??V.lines,background:T??V.background,dustColor:V.dust,interactive:B,boosting:Z},Y=yt.useRef(Q);Y.current=Q;const I=yt.useRef({onBoostStart:G,onBoostEnd:ie});return I.current={onBoostStart:G,onBoostEnd:ie},yt.useEffect(()=>{const U=z.current;if(!U)return;const k=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,ve=new OD({antialias:!0,alpha:!0,powerPreference:"high-performance"});ve.outputColorSpace=$l,ve.autoClear=!1,ve.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),U.appendChild(ve.domElement);const De=new mS,se=new Nr(Y.current.fov,1,.1,1e4);se.position.set(0,8,-5);const ke={uTime:{value:0},uCurvature:{value:1},uCurveA:{value:new In},uCurveB:{value:0},uFogNear:{value:Hu*.22},uFogFar:{value:Hu*.95},uTravel:{value:Hu},uStretch:{value:0},uPixel:{value:.001}},ee=[],te=[],Pe=(et,He,pt,Lt={})=>{const It=new kr({vertexShader:et,fragmentShader:He,uniforms:{...ke,...pt},transparent:!0,depthWrite:!1,...Lt});return ee.push(It),It},Oe=()=>({value:Array.from({length:Ic},()=>new pe(1,1,1))}),ze=new Kl(1,Hu,1,220);ze.rotateX(-Math.PI/2),ze.translate(0,0,-Hu/2),ee.push(ze);const qe={uWidth:{value:1},uRoadColor:{value:new pe},uLineColor:{value:new pe},uBackground:{value:new pe},uRoadWidth:{value:10},uMedian:{value:2},uLanes:{value:3},uTransparent:{value:0},uOpacity:{value:1}},st=Pe(WD,XD,qe,{transparent:!0,depthWrite:!0}),Ke=new gr(ze,st);Ke.frustumCulled=!1,Ke.renderOrder=0,Ke.layers.enable(1),De.add(Ke);const $e=new fv(new uE(new pe(0,0,0),new pe(0,0,-1)),24,1,7,!1);ee.push($e);const be=(et,He,pt)=>{const Lt=n1($e),It=new Float32Array(yl*2*4),jt=new Float32Array(yl*2*4),Rn=new Float32Array(yl*2),Ft=new Float32Array(yl*2);for(let vn=0;vn<yl;vn++){const P=[Math.random(),Math.random(),Math.random(),Math.random()],re=[Math.random(),Math.random(),Math.random(),Math.random()*Math.random()],Me=Math.random();for(let ue=0;ue<2;ue++){const le=vn*2+ue;It.set(P,le*4),jt.set(re,le*4),Rn[le]=ue?.5:-.5,Ft[le]=Me}}Lt.setAttribute("aSeedA",new sa(It,4)),Lt.setAttribute("aSeedB",new sa(jt,4)),Lt.setAttribute("aPair",new sa(Rn,1)),Lt.setAttribute("aTone",new sa(Ft,1)),Lt.instanceCount=0,ee.push(Lt);const tn={uRoadX:{value:0},uRoadWidth:{value:10},uLanes:{value:3},uDirection:{value:et},uSpeedRange:{value:new Nt(...pt)},uTrail:{value:1},uSize:{value:1},uColors:Oe(),uColorCount:{value:1},uFade:{value:new Nt(...He)}},dn=(vn,P,re,Me)=>{const ue=Pe(kD,BD,{...tn,uRadiusScale:{value:vn},uSharp:{value:P},uMirror:{value:re},uIntensity:{value:1},uCore:{value:0}},{depthTest:!re});te.push(ue);const le=new gr(Lt,ue);return le.frustumCulled=!1,le.renderOrder=Me,re||le.layers.enable(1),De.add(le),ue};return{geometry:Lt,uniforms:tn,reflection:dn(2.1,1.2,1,1),core:dn(1,.85,0,3)}},fe=be(1,[0,.6],[60,80]),Et=be(-1,[1,.4],[120,160]),Ze=new uv(1,1,1,8,1,!0);ee.push(Ze);const it=n1(Ze),Qe=new Float32Array(Gu*2*4),vt=new Float32Array(Gu*2),q=new Float32Array(Gu*2);for(let et=0;et<Gu;et++)for(let He=0;He<2;He++){const pt=et*2+He;Qe.set([Math.random(),Math.random(),Math.random(),Math.random()],pt*4),vt[pt]=et+(He?.5:0),q[pt]=He?1:-1}it.setAttribute("aSeed",new sa(Qe,4)),it.setAttribute("aIndex",new sa(vt,1)),it.setAttribute("aSide",new sa(q,1)),it.instanceCount=0,ee.push(it);const We={uCount:{value:20},uEdge:{value:11},uHeight:{value:1},uColors:Oe(),uColorCount:{value:1}},Le=(et,He,pt,Lt)=>{const It=Pe(zD,VD,{...We,uRadiusScale:{value:et},uSharp:{value:He},uMirror:{value:pt},uIntensity:{value:1},uCore:{value:0}},{depthTest:!pt});te.push(It);const jt=new gr(it,It);return jt.frustumCulled=!1,jt.renderOrder=Lt,pt||jt.layers.enable(1),De.add(jt),It},F={reflection:Le(2.4,1.2,1,1),core:Le(1,.8,0,3)},w=new Qi,$=new Float32Array(Wu*2*4),W=new Float32Array(Wu*2);for(let et=0;et<Wu;et++){const He=[Math.random(),Math.random(),Math.random(),Math.random()];$.set(He,et*8),$.set(He,et*8+4),W[et*2+1]=1}w.setAttribute("position",new _r(new Float32Array(Wu*2*3),3)),w.setAttribute("aSeed",new _r($,4)),w.setAttribute("aEnd",new _r(W,1)),w.setDrawRange(0,0),ee.push(w);const de={uSpread:{value:140},uColor:{value:new pe(1,1,1)},uIntensity:{value:.5}},Ne=Pe(HD,GD,de);te.push(Ne);const Fe=new hC(w,Ne);Fe.frustumCulled=!1,Fe.renderOrder=4,De.add(Fe);const Ee=ve.extensions.has("EXT_color_buffer_float")||ve.extensions.has("EXT_color_buffer_half_float"),we=Array.from({length:5},(et,He)=>{const pt=new Or(1,1,{type:Ee?ns:hr,depthBuffer:He===0});return ee.push(pt),pt}),Xe=new mS,Je=new dv(-1,1,1,-1,0,1),Se=new Kl(2,2);ee.push(Se);const xe=new gr(Se);xe.frustumCulled=!1,Xe.add(xe);const me=(et,He)=>{const pt=new kr({vertexShader:YD,fragmentShader:et,uniforms:{uTexture:{value:null},uTexel:{value:new Nt},uStrength:{value:1},uCeiling:{value:1},uLight:{value:0}},depthTest:!1,depthWrite:!1,...He});return ee.push(pt),pt},Re=me(qD,{blending:_s}),Ge=me($D,{blending:O0,blendSrc:Us,blendDst:Us,blendSrcAlpha:Us,blendDstAlpha:Us}),K=me(KD,{blending:O0,blendSrc:Us}),Ue=(et,He,pt)=>{xe.material=et,et.uniforms.uTexture.value=He.texture,et.uniforms.uTexel.value.set(1/He.width,1/He.height),ve.setRenderTarget(pt),ve.render(Xe,Je)},ge=new cn;let Ve=0;const ye={boost:0,held:!1,fov:Y.current.fov,fovVelocity:0,steerX:0,steerY:0,pointerX:0,pointerY:0,weights:[0,0,0,0,0],visible:!0},H={tail:"",head:"",poles:"",surface:"",light:null},oe=new pe;let ne=0,Be=performance.now(),_e=!0;const ae=et=>{const He=et.tailColors.join();He!==H.tail&&(H.tail=He,f0(fe.uniforms.uColors,fe.uniforms.uColorCount,et.tailColors));const pt=et.headColors.join();pt!==H.head&&(H.head=pt,f0(Et.uniforms.uColors,Et.uniforms.uColorCount,et.headColors));const Lt=et.poleColors.join();Lt!==H.poles&&(H.poles=Lt,f0(We.uColors,We.uColorCount,et.poleColors));const It=[et.roadColor,et.lineColor,et.background,et.dustColor].join();if(It!==H.surface){H.surface=It,qe.uRoadColor.value.fromArray(tc(et.roadColor)),qe.uLineColor.value.fromArray(tc(et.lineColor)),de.uColor.value.fromArray(tc(et.dustColor));const jt=et.background==="transparent",Rn=jt?[0,0,0]:tc(et.background);qe.uBackground.value.fromArray(Rn),qe.uTransparent.value=jt?1:0,ge.setRGB(...Rn,$l),Ve=jt?0:1}H.light!==et.light&&(H.light=et.light,te.forEach(jt=>{jt.blending=et.light?kl:U0,jt.needsUpdate=!0}),K.blendDst=et.light?rh:Us,K.blendSrcAlpha=et.light?Us:NM,K.blendDstAlpha=et.light?rh:Us,K.uniforms.uLight.value=et.light?1:0)},Te=()=>{const et=Math.max(1,U.clientWidth),He=Math.max(1,U.clientHeight);ve.setSize(et,He,!1),we.forEach((pt,Lt)=>pt.setSize(Math.max(1,Math.round(et/2**(Lt+1))),Math.max(1,Math.round(He/2**(Lt+1))))),se.aspect=et/He,se.updateProjectionMatrix(),lt()},Ye=et=>{if(ne=0,!_e)return;const He=Y.current,pt=Math.min(.05,Math.max(.001,(et-Be)/1e3));Be=et,ae(He);const Lt=ye.held&&He.interactive||He.boosting?1:0;ye.boost+=(Lt-ye.boost)*(1-Math.exp(-pt/(Lt>ye.boost?.28:.85)));const It=He.speed*(k?.3:1)*(1+(He.boost-1)*ye.boost);ke.uTime.value+=pt*It,ke.uStretch.value=ye.boost*1.1,ke.uCurvature.value=He.curvature;const jt=e1.indexOf(He.curve)-1,Rn=1-Math.exp(-pt/.6);ye.weights=ye.weights.map((ue,le)=>ue+((le===jt?1:0)-ue)*Rn),ke.uCurveA.value.set(ye.weights[0],ye.weights[1],ye.weights[2],ye.weights[3]),ke.uCurveB.value=ye.weights[4];const Ft=He.roadWidth/2+He.medianWidth/2,tn=.45+.55*He.roadOpacity;[fe,Et].forEach((ue,le)=>{ue.geometry.instanceCount=He.density*2,ue.uniforms.uRoadX.value=le?Ft:-Ft,ue.uniforms.uRoadWidth.value=He.roadWidth,ue.uniforms.uLanes.value=He.lanes,ue.uniforms.uTrail.value=He.trailLength,ue.uniforms.uSize.value=He.lightSize,ue.core.uniforms.uIntensity.value=He.light?.95:1+.35*ye.boost,ue.core.uniforms.uCore.value=He.light?0:.75,ue.reflection.uniforms.uIntensity.value=He.reflections*(He.light?.22:.42)*tn}),it.instanceCount=He.poles*2,We.uCount.value=Math.max(1,He.poles),We.uEdge.value=He.roadWidth+He.medianWidth/2+.8,We.uHeight.value=He.poleHeight,F.core.uniforms.uIntensity.value=He.light?.9:1,F.core.uniforms.uCore.value=He.light?0:.6,F.reflection.uniforms.uIntensity.value=He.reflections*(He.light?.2:.38)*tn,w.setDrawRange(0,He.dust*2),de.uIntensity.value=(He.light?.35:.45)*(1+ye.boost),de.uSpread.value=(He.roadWidth*2+He.medianWidth)*5,qe.uWidth.value=He.roadWidth*2+He.medianWidth+3,qe.uRoadWidth.value=He.roadWidth,qe.uMedian.value=He.medianWidth,qe.uLanes.value=He.lanes,qe.uOpacity.value=He.roadOpacity,st.depthWrite=He.roadOpacity>.5;const dn=k?He.fov:He.fov+(He.boostFov-He.fov)*ye.boost;ye.fovVelocity+=((dn-ye.fov)*90-ye.fovVelocity*13)*pt,ye.fov+=ye.fovVelocity*pt,se.fov=ye.fov,ke.uPixel.value=2*Math.tan(ye.fov*Math.PI/360)/Math.max(1,ve.domElement.height);const vn=1-Math.exp(-pt/.35),P=He.interactive?He.steer:0;ye.steerX+=(ye.pointerX*P-ye.steerX)*vn,ye.steerY+=(ye.pointerY*P-ye.steerY)*vn,se.position.set(ye.steerX*He.roadWidth*.45,8-ye.steerY*2.5,-5);const re=JD(ke.uTime.value,He.curvature),Me=1-ye.weights.reduce((ue,le)=>ue+le,0);if(oe.set(0,0,-10*Me),re.forEach((ue,le)=>{oe.x+=ue[0]*ye.weights[le],oe.y+=ue[1]*ye.weights[le],oe.z+=ue[2]*ye.weights[le]}),oe.x+=ye.steerX*2.5,oe.add(se.position),se.lookAt(oe),se.updateProjectionMatrix(),ve.setRenderTarget(null),ve.setClearColor(ge,Ve),ve.clear(),ve.render(De,se),He.glow>0){const ue=ke.uPixel.value;ke.uPixel.value=ue*(ve.domElement.height/we[0].height),se.layers.set(1),st.colorWrite=!1,ve.setRenderTarget(we[0]),ve.setClearColor(0,0),ve.clear(),ve.render(De,se),st.colorWrite=!0,se.layers.set(0),ke.uPixel.value=ue;for(let le=1;le<we.length;le++)Ue(Re,we[le-1],we[le]);for(let le=we.length-1;le>1;le--)Ue(Ge,we[le],we[le-1]);K.uniforms.uStrength.value=He.glow*(He.light?.5:1.4),K.uniforms.uCeiling.value=He.glow*(He.light?.3:.5),Ue(K,we[1],null)}ye.visible&&(ne=requestAnimationFrame(Ye))},lt=()=>{ne||!_e||!ye.visible||(Be=performance.now(),ne=requestAnimationFrame(Ye))},dt=et=>{ye.held!==et&&(ye.held=et,Y.current.interactive&&(et?I.current.onBoostStart?.():I.current.onBoostEnd?.()))},At=et=>{et.button!==0&&et.pointerType==="mouse"||dt(!0)},Vt=()=>dt(!1),Rt=et=>{const He=U.getBoundingClientRect();ye.pointerX=(et.clientX-He.left)/He.width*2-1,ye.pointerY=(et.clientY-He.top)/He.height*2-1},Pt=()=>{ye.pointerX=0,ye.pointerY=0},St=et=>{Y.current.interactive&&et.preventDefault()},Wt=new ResizeObserver(Te);Wt.observe(U);const Ht=new IntersectionObserver(et=>{ye.visible=et.some(He=>He.isIntersecting),ye.visible&&lt()});return Ht.observe(U),U.addEventListener("pointerdown",At),U.addEventListener("pointermove",Rt),U.addEventListener("pointerleave",Pt),U.addEventListener("contextmenu",St),window.addEventListener("pointerup",Vt),window.addEventListener("pointercancel",Vt),window.addEventListener("blur",Vt),Te(),()=>{_e=!1,cancelAnimationFrame(ne),Wt.disconnect(),Ht.disconnect(),U.removeEventListener("pointerdown",At),U.removeEventListener("pointermove",Rt),U.removeEventListener("pointerleave",Pt),U.removeEventListener("contextmenu",St),window.removeEventListener("pointerup",Vt),window.removeEventListener("pointercancel",Vt),window.removeEventListener("blur",Vt),ee.forEach(et=>et.dispose()),ve.dispose(),ve.domElement.remove()}},[]),nt.jsx("div",{ref:z,className:`hyperspeed${X?` ${X}`:""}`,style:j})};function jD(){const[s,e]=yt.useState(!1);return nt.jsxs("section",{className:"hyperspeed-hero-section",style:{position:"relative",width:"100%",minHeight:"calc(100vh - 160px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[nt.jsx("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:nt.jsx(QD,{curve:"winding",curvature:1,speed:1,boost:3,fov:90,boostFov:130,lanes:3,roadWidth:10,medianWidth:2,density:40,trailLength:1,lightSize:1,poles:20,dust:100,glow:.6,reflections:.5,roadOpacity:.1,steer:.35,tailColors:["#d856bf","#6750a2","#c247ac"],headColors:["#03b3c3","#0e5ea5","#324555"],poleColors:["#03b3c3"],interactive:!0,onBoostStart:()=>e(!0),onBoostEnd:()=>e(!1)})}),nt.jsxs("div",{style:{position:"relative",zIndex:10,maxWidth:"860px",margin:"0 auto",padding:"3rem 1.5rem",textAlign:"center",pointerEvents:"none"},children:[nt.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"9999px",background:"rgba(26, 29, 41, 0.75)",border:"1px solid rgba(154, 163, 255, 0.25)",backdropFilter:"blur(10px)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:s?"#03b3c3":"#9aa3ff",marginBottom:"20px",transition:"all 0.3s ease"},children:[nt.jsx("span",{style:{width:"7px",height:"7px",borderRadius:"50%",background:s?"#03b3c3":"#9aa3ff",boxShadow:s?"0 0 10px #03b3c3":"0 0 6px #9aa3ff"}}),s?"WARP SPEED ENGAGED":"SPATIAL TELEMETRY · HOLD TO BOOST"]}),nt.jsxs("h1",{style:{fontSize:"clamp(2.5rem, 6vw, 4.25rem)",fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.08,margin:"0 0 20px",color:"#f3f4fa"},children:["Every alert ",nt.jsx("br",{}),nt.jsx("span",{style:{background:"linear-gradient(135deg, #03b3c3 0%, #9aa3ff 50%, #d856bf 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"has a trail"})]}),nt.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.25rem)",lineHeight:1.6,color:"#c0c4d4",maxWidth:"620px",margin:"0 auto 32px"},children:"Follow network flows from first signal to detector decision. Explore NetGuard's safe lab, alert explanations, and local PCAP replay."}),nt.jsxs("div",{style:{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",pointerEvents:"auto"},children:[nt.jsxs("a",{href:"/dashboard",className:"button",style:{background:"#9aa3ff",color:"#11131c",fontWeight:700,padding:"14px 28px",borderRadius:"8px",display:"inline-flex",alignItems:"center",gap:"10px",textDecoration:"none",boxShadow:"0 4px 20px rgba(154, 163, 255, 0.3)"},children:["Open traffic desk ",nt.jsx("span",{style:{fontSize:"15px"},children:"↗"})]}),nt.jsxs("a",{href:"https://github.com/AmiteshBhardwaj/int-detect",target:"_blank",rel:"noreferrer",className:"button",style:{background:"rgba(26, 29, 41, 0.85)",color:"#f3f4fa",border:"1px solid #454a61",padding:"14px 24px",borderRadius:"8px",display:"inline-flex",alignItems:"center",gap:"10px",textDecoration:"none",backdropFilter:"blur(8px)"},children:["GitHub Repo ",nt.jsx("span",{children:"↗"})]})]})]})]})}function zc(s,e){s&&r1.createRoot(s).render(e)}function eN(){const s=t=>{const n=document.getElementById(t),r=n?.dataset.value??n?.textContent??0;return Number(String(r).replaceAll(",",""))||0},e=document.getElementById("engine-kpi-name")?.textContent?.trim()||"Rules";return{flowsProcessed:s("kpi-pps"),packetsPerSecond:s("kpi-rate"),alerts:s("kpi-alerts"),blockedSources:s("kpi-blocked"),engineName:e,engineStatus:document.getElementById("engine-kpi-confidence")?.textContent?.trim()||"Rules active",engineCaption:document.getElementById("engine-kpi-caption")?.textContent?.trim()||"Model is not available",modelLoaded:e.includes("Forest"),sourceLabel:document.getElementById("overview-source")?.textContent?.trim()||"Demo traffic"}}zc(document.querySelector("#smooth-scroll-root"),Ro.createElement(Ro.Fragment,null,Ro.createElement(mT),Ro.createElement(Nb)));zc(document.querySelector("#landing-root"),Ro.createElement(jD));zc(document.querySelector("#dashboard-nav-root"),Ro.createElement(Xb));zc(document.querySelector("#overview-kpi-root"),Ro.createElement(oR,{initialStats:eN()}));zc(document.querySelector("#dashboard-specular-root"),Ro.createElement(eR));
