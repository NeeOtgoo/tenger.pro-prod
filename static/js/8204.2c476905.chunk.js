"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[8204],{98925:function(e,t,n){n.r(t);var r=n(73332),c=n(22949),o=n(87309),a=(n(72791),n(80184));t.default=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{layout:"vertical",children:[(0,a.jsx)(r.Z.Item,{label:"\u041e\u0433\u043d\u043e\u043e",children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)(r.Z.Item,{children:(0,a.jsx)(o.Z,{type:"primary",children:"\u0416\u0443\u0440\u043d\u0430\u043b \u0445\u0430\u0440\u0430\u0445"})})]})})}},19911:function(e,t,n){var r=n(29439),c=n(72791),o=n(96096);t.Z=function(){var e=c.useState(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1];return c.useEffect((function(){a((0,o.fk)())}),[]),n}},19581:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(29439),c=n(72791);function o(){var e=c.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},96096:function(e,t,n){n.d(t,{GL:function(){return a},fk:function(){return i},jD:function(){return o}});var r,c=n(14937),o=function(){return(0,c.Z)()&&window.document.documentElement},a=function(e){if(o()){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},i=function(){if(!o())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},79426:function(e,t,n){var r=(0,n(72791).createContext)({});t.Z=r},89752:function(e,t,n){var r=n(4942),c=n(87462),o=n(71002),a=n(72791),i=n(81694),u=n.n(i),l=n(79426),s=n(69077),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var d=["xs","sm","md","lg","xl","xxl"],p=a.forwardRef((function(e,t){var n,i=a.useContext(s.E_),p=i.getPrefixCls,m=i.direction,v=a.useContext(l.Z),y=v.gutter,Z=v.wrap,x=v.supportFlexGap,h=e.prefixCls,b=e.span,g=e.order,w=e.offset,j=e.push,O=e.pull,C=e.className,E=e.children,P=e.flex,A=e.style,N=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=p("col",h),R={};d.forEach((function(t){var n,a={},i=e[t];"number"===typeof i?a.span=i:"object"===(0,o.Z)(i)&&(a=i||{}),delete N[t],R=(0,c.Z)((0,c.Z)({},R),(n={},(0,r.Z)(n,"".concat(k,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(k,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(k,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(k,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(k,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===m),n))}));var S=u()(k,(n={},(0,r.Z)(n,"".concat(k,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(k,"-order-").concat(g),g),(0,r.Z)(n,"".concat(k,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(k,"-push-").concat(j),j),(0,r.Z)(n,"".concat(k,"-pull-").concat(O),O),n),C,R),G={};if(y&&y[0]>0){var I=y[0]/2;G.paddingLeft=I,G.paddingRight=I}if(y&&y[1]>0&&!x){var F=y[1]/2;G.paddingTop=F,G.paddingBottom=F}return P&&(G.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==Z||G.minWidth||(G.minWidth=0)),a.createElement("div",(0,c.Z)({},N,{style:(0,c.Z)((0,c.Z)({},G),A),className:S,ref:t}),E)}));p.displayName="Col",t.Z=p},37545:function(e,t,n){var r=n(87462),c=n(4942),o=n(71002),a=n(29439),i=n(72791),u=n(81694),l=n.n(u),s=n(69077),f=n(79426),d=n(79393),p=n(78295),m=n(19911),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},y=((0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var n,u=e.prefixCls,d=e.justify,y=e.align,Z=e.className,x=e.style,h=e.children,b=e.gutter,g=void 0===b?0:b,w=e.wrap,j=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=i.useContext(s.E_),C=O.getPrefixCls,E=O.direction,P=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=(0,a.Z)(P,2),N=A[0],k=A[1],R=(0,m.Z)(),S=i.useRef(g);i.useEffect((function(){var e=p.ZP.subscribe((function(e){var t=S.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&k(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var G=C("row",u),I=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,n){if("object"===(0,o.Z)(t))for(var r=0;r<p.c4.length;r++){var c=p.c4[r];if(N[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),F=l()(G,(n={},(0,c.Z)(n,"".concat(G,"-no-wrap"),!1===w),(0,c.Z)(n,"".concat(G,"-").concat(d),d),(0,c.Z)(n,"".concat(G,"-").concat(y),y),(0,c.Z)(n,"".concat(G,"-rtl"),"rtl"===E),n),Z),L={},B=I[0]>0?I[0]/-2:void 0,D=I[1]>0?I[1]/-2:void 0;if(B&&(L.marginLeft=B,L.marginRight=B),R){var T=(0,a.Z)(I,2);L.rowGap=T[1]}else D&&(L.marginTop=D,L.marginBottom=D);var W=i.useMemo((function(){return{gutter:I,wrap:w,supportFlexGap:R}}),[I,w,R]);return i.createElement(f.Z.Provider,{value:W},i.createElement("div",(0,r.Z)({},j,{className:F,style:(0,r.Z)((0,r.Z)({},L),x),ref:t}),h))})));y.displayName="Row",t.Z=y}}]);
//# sourceMappingURL=8204.2c476905.chunk.js.map