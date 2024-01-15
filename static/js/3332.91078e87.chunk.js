"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[3332],{73332:function(e,t,r){r.d(t,{Z:function(){return he}});var n=r(87462),o=r(71002),i=r(29439),l=r(4942),a=r(72791),c=r(81694),u=r.n(c),s=r(43458),f=r(69077),d=r(41818),m=a.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),v=a.createContext({updateItemErrors:function(){}}),p=a.createContext({prefixCls:""});function h(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function g(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function b(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return g(r.overflowY,t)||g(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function Z(e,t,r,n,o,i,l,a){return i<e&&l>t||i>e&&l<t?0:i<=e&&a<=r||l>=t&&a>=r?i-e-n:l>t&&a<r||i<e&&a>r?l-t+o:0}var y=function(e,t){var r=window,n=t.scrollMode,o=t.block,i=t.inline,l=t.boundary,a=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!h(e))throw new TypeError("Invalid target");for(var u,s,f=document.scrollingElement||document.documentElement,d=[],m=e;h(m)&&c(m);){if((m=null==(s=(u=m).parentElement)?u.getRootNode().host||null:s)===f){d.push(m);break}null!=m&&m===document.body&&b(m)&&!b(document.documentElement)||null!=m&&b(m,a)&&d.push(m)}for(var v=r.visualViewport?r.visualViewport.width:innerWidth,p=r.visualViewport?r.visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,E=e.getBoundingClientRect(),C=E.height,w=E.width,x=E.top,F=E.right,O=E.bottom,k=E.left,I="start"===o||"nearest"===o?x:"end"===o?O:x+C/2,R="center"===i?k+w/2:"end"===i?F:k,N=[],j=0;j<d.length;j++){var P=d[j],_=P.getBoundingClientRect(),M=_.height,S=_.width,V=_.top,q=_.right,T=_.bottom,A=_.left;if("if-needed"===n&&x>=0&&k>=0&&O<=p&&F<=v&&x>=V&&O<=T&&k>=A&&F<=q)return N;var W=getComputedStyle(P),H=parseInt(W.borderLeftWidth,10),L=parseInt(W.borderTopWidth,10),D=parseInt(W.borderRightWidth,10),z=parseInt(W.borderBottomWidth,10),B=0,Y=0,U="offsetWidth"in P?P.offsetWidth-P.clientWidth-H-D:0,K="offsetHeight"in P?P.offsetHeight-P.clientHeight-L-z:0,X="offsetWidth"in P?0===P.offsetWidth?0:S/P.offsetWidth:0,Q="offsetHeight"in P?0===P.offsetHeight?0:M/P.offsetHeight:0;if(f===P)B="start"===o?I:"end"===o?I-p:"nearest"===o?Z(y,y+p,p,L,z,y+I,y+I+C,C):I-p/2,Y="start"===i?R:"center"===i?R-v/2:"end"===i?R-v:Z(g,g+v,v,H,D,g+R,g+R+w,w),B=Math.max(0,B+y),Y=Math.max(0,Y+g);else{B="start"===o?I-V-L:"end"===o?I-T+z+K:"nearest"===o?Z(V,T,M,L,z+K,I,I+C,C):I-(V+M/2)+K/2,Y="start"===i?R-A-H:"center"===i?R-(A+S/2)+U/2:"end"===i?R-q+D+U:Z(A,q,S,H,D+U,R,R+w,w);var $=P.scrollLeft,G=P.scrollTop;I+=G-(B=Math.max(0,Math.min(G+B/Q,P.scrollHeight-M/Q+K))),R+=$-(Y=Math.max(0,Math.min($+Y/X,P.scrollWidth-S/X+U)))}N.push({el:P,top:B,left:Y})}return N};function E(e){return e===Object(e)&&0!==Object.keys(e).length}var C=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(E(t)&&"function"===typeof t.behavior)return t.behavior(r?y(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:E(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,i=e.left;n.scroll&&r?n.scroll({top:o,left:i,behavior:t}):(n.scrollTop=o,n.scrollLeft=i)}))}(y(e,n),n.behavior)}};function w(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function x(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):r}}function F(e){return w(e).join("_")}function O(e){var t=(0,s.cI)(),r=(0,i.Z)(t,1)[0],o=a.useRef({}),l=a.useMemo((function(){return null!==e&&void 0!==e?e:(0,n.Z)((0,n.Z)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=F(e);t?o.current[r]=t:delete o.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=w(e),o=x(r,l.__INTERNAL__.name),i=o?document.getElementById(o):null;i&&C(i,(0,n.Z)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=F(e);return o.current[t]}})}),[e,r]);return[l]}var k=r(1815),I=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},R=function(e,t){var r,c=a.useContext(k.Z),d=a.useContext(f.E_),v=d.getPrefixCls,p=d.direction,h=d.form,g=e.prefixCls,b=e.className,Z=void 0===b?"":b,y=e.size,E=void 0===y?c:y,C=e.form,w=e.colon,x=e.labelAlign,F=e.labelCol,R=e.wrapperCol,N=e.hideRequiredMark,j=e.layout,P=void 0===j?"horizontal":j,_=e.scrollToFirstError,M=e.requiredMark,S=e.onFinishFailed,V=e.name,q=I(e,["prefixCls","className","size","form","colon","labelAlign","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),T=(0,a.useMemo)((function(){return void 0!==M?M:h&&void 0!==h.requiredMark?h.requiredMark:!N}),[N,M,h]),A=v("form",g),W=u()(A,(r={},(0,l.Z)(r,"".concat(A,"-").concat(P),!0),(0,l.Z)(r,"".concat(A,"-hide-required-mark"),!1===T),(0,l.Z)(r,"".concat(A,"-rtl"),"rtl"===p),(0,l.Z)(r,"".concat(A,"-").concat(E),E),r),Z),H=O(C),L=(0,i.Z)(H,1)[0],D=L.__INTERNAL__;D.name=V;var z=(0,a.useMemo)((function(){return{name:V,labelAlign:x,labelCol:F,wrapperCol:R,vertical:"vertical"===P,colon:w,requiredMark:T,itemRef:D.itemRef}}),[V,x,F,R,P,w,T]);a.useImperativeHandle(t,(function(){return L}));return a.createElement(k.q,{size:E},a.createElement(m.Provider,{value:z},a.createElement(s.ZP,(0,n.Z)({id:V},q,{name:V,onFinishFailed:function(e){null===S||void 0===S||S(e);var t={block:"nearest"};_&&e.errorFields.length&&("object"===(0,o.Z)(_)&&(t=_),L.scrollToField(e.errorFields[0].name,t))},form:L,className:W}))))},N=a.forwardRef(R),j=r(93433),P=r(18111),_=r.n(P),M=r(75691),S=r(88834),V=r(37545),q=r(79393),T=r(14824),A=r(1413),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},H=r(8711),L=function(e,t){return a.createElement(H.Z,(0,A.Z)((0,A.Z)({},e),{},{ref:t,icon:W}))};L.displayName="QuestionCircleOutlined";var D=a.forwardRef(L),z=r(89752),B=r(93486),Y=r(70454),U=r(64469),K=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var X=function(e){var t=e.prefixCls,r=e.label,c=e.htmlFor,s=e.labelCol,f=e.labelAlign,d=e.colon,v=e.required,p=e.requiredMark,h=e.tooltip,g=(0,B.E)("Form"),b=(0,i.Z)(g,1)[0];return r?a.createElement(m.Consumer,{key:"label"},(function(e){var i,m,g=e.vertical,Z=e.labelAlign,y=e.labelCol,E=e.colon,C=s||y||{},w=f||Z,x="".concat(t,"-item-label"),F=u()(x,"left"===w&&"".concat(x,"-left"),C.className),O=r,k=!0===d||!1!==E&&!1!==d;k&&!g&&"string"===typeof r&&""!==r.trim()&&(O=r.replace(/[:|\uff1a]\s*$/,""));var I=function(e){return e?"object"!==(0,o.Z)(e)||a.isValidElement(e)?{title:e}:e:null}(h);if(I){var R=I.icon,N=void 0===R?a.createElement(D,null):R,j=K(I,["icon"]),P=a.createElement(U.Z,j,a.cloneElement(N,{className:"".concat(t,"-item-tooltip"),title:""}));O=a.createElement(a.Fragment,null,O,P)}"optional"!==p||v||(O=a.createElement(a.Fragment,null,O,a.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===b||void 0===b?void 0:b.optional)||(null===(m=Y.Z.Form)||void 0===m?void 0:m.optional))));var _=u()((i={},(0,l.Z)(i,"".concat(t,"-item-required"),v),(0,l.Z)(i,"".concat(t,"-item-required-mark-optional"),"optional"===p),(0,l.Z)(i,"".concat(t,"-item-no-colon"),!k),i));return a.createElement(z.Z,(0,n.Z)({},C,{className:F}),a.createElement("label",{htmlFor:c,className:_,title:"string"===typeof r?r:""},O))})):null},Q=r(77106),$=r(82621),G=r(37557),J=r(10187),ee=r(15207),te=r(81534),re=r(19581);var ne=[];function oe(e){var t=e.errors,r=void 0===t?ne:t,n=e.help,o=e.onDomErrorVisibleChange,c=(0,re.Z)(),s=a.useContext(p),d=s.prefixCls,m=s.status,v=a.useContext(f.E_).getPrefixCls,h=function(e,t,r){var n=a.useRef({errors:e,visible:!!e.length}),o=(0,re.Z)(),i=function(){var r=n.current.visible,i=!!e.length,l=n.current.errors;n.current.errors=e,n.current.visible=i,r!==i?t(i):(l.length!==e.length||l.some((function(t,r){return t!==e[r]})))&&o()};return a.useEffect((function(){if(!r){var e=setTimeout(i,10);return function(){return clearTimeout(e)}}}),[e]),r&&i(),[n.current.visible,n.current.errors]}(r,(function(e){e&&Promise.resolve().then((function(){null===o||void 0===o||o(!0)})),c()}),!!n),g=(0,i.Z)(h,2),b=g[0],Z=g[1],y=(0,te.Z)((function(){return Z}),b,(function(e,t){return t})),E=a.useState(m),C=(0,i.Z)(E,2),w=C[0],x=C[1];a.useEffect((function(){b&&m&&x(m)}),[b,m]);var F="".concat(d,"-item-explain"),O=v();return a.createElement(ee.Z,{motionDeadline:500,visible:b,motionName:"".concat(O,"-show-help"),onLeaveEnd:function(){null===o||void 0===o||o(!1)}},(function(e){var t=e.className;return a.createElement("div",{className:u()(F,(0,l.Z)({},"".concat(F,"-").concat(w),w),t),key:"help"},y.map((function(e,t){return a.createElement("div",{key:t,role:"alert"},e)})))}))}var ie={success:G.Z,warning:J.Z,error:$.Z,validating:Q.Z},le=function(e){var t=e.prefixCls,r=e.status,o=e.wrapperCol,i=e.children,l=e.help,c=e.errors,s=e.onDomErrorVisibleChange,f=e.hasFeedback,d=e._internalItemRender,v=e.validateStatus,h=e.extra,g="".concat(t,"-item"),b=a.useContext(m),Z=o||b.wrapperCol||{},y=u()("".concat(g,"-control"),Z.className);a.useEffect((function(){return function(){s(!1)}}),[]);var E=v&&ie[v],C=f&&E?a.createElement("span",{className:"".concat(g,"-children-icon")},a.createElement(E,null)):null,w=(0,n.Z)({},b);delete w.labelCol,delete w.wrapperCol;var x=a.createElement("div",{className:"".concat(g,"-control-input")},a.createElement("div",{className:"".concat(g,"-control-input-content")},i),C),F=a.createElement(p.Provider,{value:{prefixCls:t,status:r}},a.createElement(oe,{errors:c,help:l,onDomErrorVisibleChange:s})),O=h?a.createElement("div",{className:"".concat(g,"-extra")},h):null,k=d&&"pro_table_render"===d.mark&&d.render?d.render(e,{input:x,errorList:F,extra:O}):a.createElement(a.Fragment,null,x,F,O);return a.createElement(m.Provider,{value:w},a.createElement(z.Z,(0,n.Z)({},Z,{className:y}),k))},ae=r(61113),ce=r(75314);var ue=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},se="__SPLIT__",fe=((0,q.b)("success","warning","error","validating",""),a.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));var de=function(e){var t=e.name,r=e.fieldKey,c=e.noStyle,p=e.dependencies,h=e.prefixCls,g=e.style,b=e.className,Z=e.shouldUpdate,y=e.hasFeedback,E=e.help,C=e.rules,F=e.validateStatus,O=e.children,k=e.required,I=e.label,R=e.messageVariables,N=e.trigger,P=void 0===N?"onChange":N,q=e.validateTrigger,A=e.hidden,W=ue(e,["name","fieldKey","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),H=(0,a.useRef)(!1),L=(0,a.useContext)(f.E_).getPrefixCls,D=(0,a.useContext)(m),z=D.name,B=D.requiredMark,Y=(0,a.useContext)(v).updateItemErrors,U=a.useState(!!E),K=(0,i.Z)(U,2),Q=K[0],$=K[1],G=function(e){var t=a.useState(e),r=(0,i.Z)(t,2),n=r[0],o=r[1],l=(0,a.useRef)(null),c=(0,a.useRef)([]),u=(0,a.useRef)(!1);return a.useEffect((function(){return function(){u.current=!0,ce.Z.cancel(l.current)}}),[]),[n,function(e){u.current||(null===l.current&&(c.current=[],l.current=(0,ce.Z)((function(){l.current=null,o((function(e){var t=e;return c.current.forEach((function(e){t=e(t)})),t}))}))),c.current.push(e))}]}({}),J=(0,i.Z)(G,2),ee=J[0],te=J[1],re=(0,a.useContext)(M.Z).validateTrigger,ne=void 0!==q?q:re;function oe(e){H.current||$(e)}var ie=function(e){return null===e&&(0,T.Z)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),de=(0,a.useRef)([]);a.useEffect((function(){return function(){H.current=!0,Y(de.current.join(se),[])}}),[]);var me=L("form",h),ve=c?Y:function(e,t,r){te((function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r&&r!==e&&delete o[r],_()(o[e],t)?o:(0,n.Z)((0,n.Z)({},o),(0,l.Z)({},e,t))}))},pe=function(){var e=a.useContext(m).itemRef,t=a.useRef({});return function(r,n){var i=n&&"object"===(0,o.Z)(n)&&n.ref,l=r.join("_");return t.current.name===l&&t.current.originRef===i||(t.current.name=l,t.current.originRef=i,t.current.ref=(0,S.sQ)(e(r),i)),t.current.ref}}();function he(t,r,o,i){var s,f;if(c&&!A)return t;var m,p=[];Object.keys(ee).forEach((function(e){p=[].concat((0,j.Z)(p),(0,j.Z)(ee[e]||[]))})),void 0!==E&&null!==E?m=w(E):(m=o?o.errors:[],m=[].concat((0,j.Z)(m),(0,j.Z)(p)));var h="";void 0!==F?h=F:(null===o||void 0===o?void 0:o.validating)?h="validating":(null===(f=null===o||void 0===o?void 0:o.errors)||void 0===f?void 0:f.length)||p.length?h="error":(null===o||void 0===o?void 0:o.touched)&&(h="success");var Z=(s={},(0,l.Z)(s,"".concat(me,"-item"),!0),(0,l.Z)(s,"".concat(me,"-item-with-help"),Q||!!E),(0,l.Z)(s,"".concat(b),!!b),(0,l.Z)(s,"".concat(me,"-item-has-feedback"),h&&y),(0,l.Z)(s,"".concat(me,"-item-has-success"),"success"===h),(0,l.Z)(s,"".concat(me,"-item-has-warning"),"warning"===h),(0,l.Z)(s,"".concat(me,"-item-has-error"),"error"===h),(0,l.Z)(s,"".concat(me,"-item-is-validating"),"validating"===h),(0,l.Z)(s,"".concat(me,"-item-hidden"),A),s);return a.createElement(V.Z,(0,n.Z)({className:u()(Z),style:g,key:"row"},(0,d.Z)(W,["colon","extra","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),a.createElement(X,(0,n.Z)({htmlFor:r,required:i,requiredMark:B},e,{prefixCls:me})),a.createElement(le,(0,n.Z)({},e,o,{errors:m,prefixCls:me,status:h,onDomErrorVisibleChange:oe,validateStatus:h}),a.createElement(v.Provider,{value:{updateItemErrors:ve}},t)))}var ge="function"===typeof O,be=(0,a.useRef)(0);if(be.current+=1,!ie&&!ge&&!p)return he(O);var Ze={};return"string"===typeof I?Ze.label=I:t&&(Ze.label=String(t)),R&&(Ze=(0,n.Z)((0,n.Z)({},Ze),R)),a.createElement(s.gN,(0,n.Z)({},e,{messageVariables:Ze,trigger:P,validateTrigger:ne,onReset:function(){oe(!1)}}),(function(i,l,u){var s=l.errors,f=w(t).length&&l?l.name:[],d=x(f,z);if(c){var m=de.current.join(se);if(de.current=(0,j.Z)(f),r){var v=Array.isArray(r)?r:[r];de.current=[].concat((0,j.Z)(f.slice(0,-1)),(0,j.Z)(v))}Y(de.current.join(se),s,m)}var h=void 0!==k?k:!(!C||!C.some((function(e){if(e&&"object"===(0,o.Z)(e)&&e.required)return!0;if("function"===typeof e){var t=e(u);return t&&t.required}return!1}))),g=(0,n.Z)({},i),b=null;if((0,T.Z)(!(Z&&p),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(O)&&ie)(0,T.Z)(!1,"Form.Item","`children` is array of render props cannot have `name`."),b=O;else if(ge&&(!Z&&!p||ie))(0,T.Z)(!(!Z&&!p),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),(0,T.Z)(!ie,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!p||ge||ie)if((0,ae.l$)(O)){(0,T.Z)(void 0===O.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var y=(0,n.Z)((0,n.Z)({},O.props),g);y.id||(y.id=d),(0,S.Yr)(O)&&(y.ref=pe(f,O)),new Set([].concat((0,j.Z)(w(P)),(0,j.Z)(w(ne)))).forEach((function(e){y[e]=function(){for(var t,r,n,o,i,l=arguments.length,a=new Array(l),c=0;c<l;c++)a[c]=arguments[c];null===(n=g[e])||void 0===n||(t=n).call.apply(t,[g].concat(a)),null===(i=(o=O.props)[e])||void 0===i||(r=i).call.apply(r,[o].concat(a))}})),b=a.createElement(fe,{value:g[e.valuePropName||"value"],update:be.current},(0,ae.Tm)(O,y))}else ge&&(Z||p)&&!ie?b=O(u):((0,T.Z)(!f.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),b=O);else(0,T.Z)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return he(b,d,l,h)}))},me=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},ve=function(e){var t=e.prefixCls,r=e.children,o=me(e,["prefixCls","children"]);(0,T.Z)(!!o.name,"Form.List","Miss `name` prop.");var i=(0,a.useContext(f.E_).getPrefixCls)("form",t);return a.createElement(s.aV,o,(function(e,t,o){return a.createElement(p.Provider,{value:{prefixCls:i,status:"error"}},r(e.map((function(e){return(0,n.Z)((0,n.Z)({},e),{fieldKey:e.key})})),t,{errors:o.errors}))}))},pe=N;pe.Item=de,pe.List=ve,pe.ErrorList=oe,pe.useForm=O,pe.Provider=function(e){var t=(0,d.Z)(e,["prefixCls"]);return a.createElement(s.RV,t)},pe.create=function(){(0,T.Z)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};var he=pe}}]);
//# sourceMappingURL=3332.91078e87.chunk.js.map