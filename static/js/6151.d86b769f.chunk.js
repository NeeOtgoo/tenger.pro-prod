"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[6151],{87241:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),o=n(72791),a={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z",fill:t}},{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z",fill:e}}]}},name:"calendar",theme:"twotone"},i=n(8711),l=function(e,t){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};l.displayName="CalendarTwoTone";var u=o.forwardRef(l)},53834:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),o=n(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},name:"rollback",theme:"outlined"},i=n(8711),l=function(e,t){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};l.displayName="RollbackOutlined";var u=o.forwardRef(l)},95354:function(e,t,n){var r=n(87462),o=n(72791),a=n(11354),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},u=o.forwardRef((function(e,t){var n=e.style,u=e.noStyle,c=e.disabled,s=i(e,["style","noStyle","disabled"]),f={};return u||(f=(0,r.Z)({},l)),c&&(f.pointerEvents="none"),f=(0,r.Z)((0,r.Z)({},f),n),o.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},s,{onKeyDown:function(e){e.keyCode===a.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===a.Z.ENTER&&r&&r()},style:f}))}));t.Z=u},75594:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(4942),o=n(71002),a=n(87462),i=n(72791),l=n(15207),u=n(81694),c=n.n(u),s=n(69077),f=n(61113),p=n(29439);function y(e){var t,n=e.prefixCls,r=e.value,o=e.current,a=e.offset,l=void 0===a?0:a;return l&&(t={position:"absolute",top:"".concat(l,"00%"),left:0}),i.createElement("span",{style:t,className:c()("".concat(n,"-only-unit"),{current:o})},r)}function d(e,t,n){for(var r=e,o=0;(r+10)%10!==t;)r+=n,o+=n;return o}function v(e){var t,n,r=e.prefixCls,o=e.count,l=e.value,u=Number(l),c=Math.abs(o),s=i.useState(u),f=(0,p.Z)(s,2),v=f[0],m=f[1],h=i.useState(c),b=(0,p.Z)(h,2),P=b[0],g=b[1],w=function(){m(u),g(c)};if(i.useEffect((function(){var e=setTimeout((function(){w()}),1e3);return function(){clearTimeout(e)}}),[u]),v===u||Number.isNaN(u)||Number.isNaN(v))t=[i.createElement(y,(0,a.Z)({},e,{key:u,current:!0}))],n={transition:"none"};else{t=[];for(var O=u+10,_=[],E=u;E<=O;E+=1)_.push(E);var S=_.findIndex((function(e){return e%10===v}));t=_.map((function(t,n){var r=t%10;return i.createElement(y,(0,a.Z)({},e,{key:t,value:r,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-d(v,u,P<c?1:-1),"00%)")}}return i.createElement("span",{className:"".concat(r,"-only"),style:n,onTransitionEnd:w},t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},h=function(e){var t=e.prefixCls,n=e.count,r=e.className,o=e.motionClassName,l=e.style,u=e.title,p=e.show,y=e.component,d=void 0===y?"sup":y,h=e.children,b=m(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),P=(0,i.useContext(s.E_).getPrefixCls)("scroll-number",t),g=(0,a.Z)((0,a.Z)({},b),{"data-show":p,style:l,className:c()(P,r,o),title:u}),w=n;if(n&&Number(n)%1===0){var O=String(n).split("");w=O.map((function(e,t){return i.createElement(v,{prefixCls:P,count:Number(n),value:e,key:O.length-t})}))}return l&&l.borderColor&&(g.style=(0,a.Z)((0,a.Z)({},l),{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),h?(0,f.Tm)(h,(function(e){return{className:c()("".concat(P,"-custom-component"),null===e||void 0===e?void 0:e.className,o)}})):i.createElement(d,g,w)},b=n(54466);function P(e){return-1!==b.Y.indexOf(e)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=function(e){var t,n,u=e.prefixCls,p=e.scrollNumberPrefixCls,y=e.children,d=e.status,v=e.text,m=e.color,b=e.count,w=void 0===b?null:b,O=e.overflowCount,_=void 0===O?99:O,E=e.dot,S=void 0!==E&&E,k=e.size,C=void 0===k?"default":k,T=e.title,R=e.offset,A=e.style,I=e.className,j=e.showZero,N=void 0!==j&&j,M=g(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),x=i.useContext(s.E_),L=x.getPrefixCls,Z=x.direction,D=L("badge",u),U=w>_?"".concat(_,"+"):w,H=null!==d&&void 0!==d||null!==m&&void 0!==m,z="0"===U||0===U,V=S&&!z,$=V?"":U,B=(0,i.useMemo)((function(){return(null===$||void 0===$||""===$||z&&!N)&&!V}),[$,z,N,V]),W=(0,i.useRef)(w);B||(W.current=w);var X=W.current,K=(0,i.useRef)($);B||(K.current=$);var F=K.current,Y=(0,i.useRef)(V);B||(Y.current=V);var q=(0,i.useMemo)((function(){if(!R)return(0,a.Z)({},A);var e={marginTop:R[1]};return"rtl"===Z?e.left=parseInt(R[0],10):e.right=-parseInt(R[0],10),(0,a.Z)((0,a.Z)({},e),A)}),[Z,R,A]),J=null!==T&&void 0!==T?T:"string"===typeof X||"number"===typeof X?X:void 0,G=B||!v?null:i.createElement("span",{className:"".concat(D,"-status-text")},v),Q=X&&"object"===(0,o.Z)(X)?(0,f.Tm)(X,(function(e){return{style:(0,a.Z)((0,a.Z)({},q),e.style)}})):void 0,ee=c()((t={},(0,r.Z)(t,"".concat(D,"-status-dot"),H),(0,r.Z)(t,"".concat(D,"-status-").concat(d),!!d),(0,r.Z)(t,"".concat(D,"-status-").concat(m),P(m)),t)),te={};m&&!P(m)&&(te.background=m);var ne=c()(D,(n={},(0,r.Z)(n,"".concat(D,"-status"),H),(0,r.Z)(n,"".concat(D,"-not-a-wrapper"),!y),(0,r.Z)(n,"".concat(D,"-rtl"),"rtl"===Z),n),I);if(!y&&H){var re=q.color;return i.createElement("span",(0,a.Z)({},M,{className:ne,style:q}),i.createElement("span",{className:ee,style:te}),i.createElement("span",{style:{color:re},className:"".concat(D,"-status-text")},v))}return i.createElement("span",(0,a.Z)({},M,{className:ne}),y,i.createElement(l.Z,{visible:!B,motionName:"".concat(D,"-zoom"),motionAppear:!1},(function(e){var t,n=e.className,o=L("scroll-number",p),l=Y.current,u=c()((t={},(0,r.Z)(t,"".concat(D,"-dot"),l),(0,r.Z)(t,"".concat(D,"-count"),!l),(0,r.Z)(t,"".concat(D,"-count-sm"),"small"===C),(0,r.Z)(t,"".concat(D,"-multiple-words"),!l&&F&&F.toString().length>1),(0,r.Z)(t,"".concat(D,"-status-").concat(d),!!d),(0,r.Z)(t,"".concat(D,"-status-").concat(m),P(m)),t)),s=(0,a.Z)({},q);return m&&!P(m)&&((s=s||{}).background=m),i.createElement(h,{prefixCls:o,show:!B,motionClassName:n,className:u,count:F,title:J,style:s,key:"scrollNumber"},Q)})),G)};w.Ribbon=function(e){var t,n=e.className,o=e.prefixCls,l=e.style,u=e.color,f=e.children,p=e.text,y=e.placement,d=void 0===y?"end":y,v=i.useContext(s.E_),m=v.getPrefixCls,h=v.direction,b=m("ribbon",o),g=P(u),w=c()(b,"".concat(b,"-placement-").concat(d),(t={},(0,r.Z)(t,"".concat(b,"-rtl"),"rtl"===h),(0,r.Z)(t,"".concat(b,"-color-").concat(u),g),t),n),O={},_={};return u&&!g&&(O.background=u,_.color=u),i.createElement("div",{className:"".concat(b,"-wrapper")},f,i.createElement("div",{className:w,style:(0,a.Z)((0,a.Z)({},O),l)},i.createElement("span",{className:"".concat(b,"-text")},p),i.createElement("div",{className:"".concat(b,"-corner"),style:_})))};var O=w},91333:function(e,t,n){var r=n(87462),o=n(4942),a=n(72791),i=n(81694),l=n.n(i),u=n(69077),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.Z=function(e){return a.createElement(u.C,null,(function(t){var n,i=t.getPrefixCls,u=t.direction,s=e.prefixCls,f=e.type,p=void 0===f?"horizontal":f,y=e.orientation,d=void 0===y?"center":y,v=e.className,m=e.children,h=e.dashed,b=e.plain,P=c(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=i("divider",s),w=d.length>0?"-".concat(d):d,O=!!m,_=l()(g,"".concat(g,"-").concat(p),(n={},(0,o.Z)(n,"".concat(g,"-with-text"),O),(0,o.Z)(n,"".concat(g,"-with-text").concat(w),O),(0,o.Z)(n,"".concat(g,"-dashed"),!!h),(0,o.Z)(n,"".concat(g,"-plain"),!!b),(0,o.Z)(n,"".concat(g,"-rtl"),"rtl"===u),n),v);return a.createElement("div",(0,r.Z)({className:_},P,{role:"separator"}),m&&a.createElement("span",{className:"".concat(g,"-inner-text")},m))}))}},81950:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(72791)),i=(o=n(50077))&&o.__esModule?o:{default:o},l=n(11363),u=n(52737);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,o=d(l);function l(){var e;f(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(m(e=o.call.apply(o,[this].concat(n))),"mounted",!1),b(m(e),"isReady",!1),b(m(e),"isPlaying",!1),b(m(e),"isLoading",!0),b(m(e),"loadOnReady",null),b(m(e),"startOnPlay",!0),b(m(e),"seekOnPlay",null),b(m(e),"onDurationCalled",!1),b(m(e),"handlePlayerMount",(function(t){e.player||(e.player=t,e.player.load(e.props.url)),e.progress()})),b(m(e),"getInternalPlayer",(function(t){return e.player?e.player[t]:null})),b(m(e),"progress",(function(){if(e.props.url&&e.player&&e.isReady){var t=e.getCurrentTime()||0,n=e.getSecondsLoaded(),r=e.getDuration();if(r){var o={playedSeconds:t,played:t/r};null!==n&&(o.loadedSeconds=n,o.loaded=n/r),o.playedSeconds===e.prevPlayed&&o.loadedSeconds===e.prevLoaded||e.props.onProgress(o),e.prevPlayed=o.playedSeconds,e.prevLoaded=o.loadedSeconds}}e.progressTimeout=setTimeout(e.progress,e.props.progressFrequency||e.props.progressInterval)})),b(m(e),"handleReady",(function(){if(e.mounted){e.isReady=!0,e.isLoading=!1;var t=e.props,n=t.onReady,r=t.playing,o=t.volume,a=t.muted;n(),a||null===o||e.player.setVolume(o),e.loadOnReady?(e.player.load(e.loadOnReady,!0),e.loadOnReady=null):r&&e.player.play(),e.handleDurationCheck()}})),b(m(e),"handlePlay",(function(){e.isPlaying=!0,e.isLoading=!1;var t=e.props,n=t.onStart,r=t.onPlay,o=t.playbackRate;e.startOnPlay&&(e.player.setPlaybackRate&&1!==o&&e.player.setPlaybackRate(o),n(),e.startOnPlay=!1),r(),e.seekOnPlay&&(e.seekTo(e.seekOnPlay),e.seekOnPlay=null),e.handleDurationCheck()})),b(m(e),"handlePause",(function(t){e.isPlaying=!1,e.isLoading||e.props.onPause(t)})),b(m(e),"handleEnded",(function(){var t=e.props,n=t.activePlayer,r=t.loop,o=t.onEnded;n.loopOnEnded&&r&&e.seekTo(0),r||(e.isPlaying=!1,o())})),b(m(e),"handleError",(function(){var t;e.isLoading=!1,(t=e.props).onError.apply(t,arguments)})),b(m(e),"handleDurationCheck",(function(){clearTimeout(e.durationCheckTimeout);var t=e.getDuration();t?e.onDurationCalled||(e.props.onDuration(t),e.onDurationCalled=!0):e.durationCheckTimeout=setTimeout(e.handleDurationCheck,100)})),b(m(e),"handleLoaded",(function(){e.isLoading=!1})),e}return t=l,n=[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.player){var n=this.props,r=n.url,o=n.playing,a=n.volume,l=n.muted,c=n.playbackRate,s=n.pip,f=n.loop,p=n.activePlayer,y=n.disableDeferredLoading;if(!(0,i.default)(e.url,r)){if(this.isLoading&&!p.forceLoad&&!y&&!(0,u.isMediaStream)(r))return console.warn("ReactPlayer: the attempt to load ".concat(r," is being deferred until the player has loaded")),void(this.loadOnReady=r);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==l&&(l?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((function(){return t.player.setVolume(a)})))),e.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c),e.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var n=this;if(this.isReady){if(t?"fraction"===t:e>0&&e<1){var r=this.player.getDuration();return r?void this.player.seekTo(r*e):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e)}else 0!==e&&(this.seekOnPlay=e,setTimeout((function(){n.seekOnPlay=null}),5e3))}},{key:"render",value:function(){var e=this.props.activePlayer;return e?a.default.createElement(e,s({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}],n&&p(t.prototype,n),r&&p(t,r),l}(a.Component);t.default=P,b(P,"displayName","Player"),b(P,"propTypes",l.propTypes),b(P,"defaultProps",l.defaultProps)},38629:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createReactPlayer=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(72791)),a=f(n(49948)),i=f(n(85781)),l=f(n(50077)),u=n(11363),c=n(52737),s=f(n(81950));function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,o.lazy)((function(){return n.e(7664).then(n.bind(n,24254))})),C="undefined"!==typeof window&&window.document,T="undefined"!==typeof n.g&&n.g.window&&n.g.window.document,R=Object.keys(u.propTypes),A=C||T?o.Suspense:function(){return null},I=[];t.createReactPlayer=function(e,t){var n,r;return r=n=function(n){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(h,n);var r,f,p,y=w(h);function h(){var n;b(this,h);for(var r=arguments.length,l=new Array(r),f=0;f<r;f++)l[f]=arguments[f];return S(_(n=y.call.apply(y,[this].concat(l))),"state",{showPreview:!!n.props.light}),S(_(n),"references",{wrapper:function(e){n.wrapper=e},player:function(e){n.player=e}}),S(_(n),"handleClickPreview",(function(e){n.setState({showPreview:!1}),n.props.onClickPreview(e)})),S(_(n),"showPreview",(function(){n.setState({showPreview:!0})})),S(_(n),"getDuration",(function(){return n.player?n.player.getDuration():null})),S(_(n),"getCurrentTime",(function(){return n.player?n.player.getCurrentTime():null})),S(_(n),"getSecondsLoaded",(function(){return n.player?n.player.getSecondsLoaded():null})),S(_(n),"getInternalPlayer",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return n.player?n.player.getInternalPlayer(e):null})),S(_(n),"seekTo",(function(e,t){if(!n.player)return null;n.player.seekTo(e,t)})),S(_(n),"handleReady",(function(){n.props.onReady(_(n))})),S(_(n),"getActivePlayer",(0,i.default)((function(n){for(var r=0,o=[].concat(I,m(e));r<o.length;r++){var a=o[r];if(a.canPlay(n))return a}return t||null}))),S(_(n),"getConfig",(0,i.default)((function(e,t){var r=n.props.config;return a.default.all([u.defaultProps.config,u.defaultProps.config[t]||{},r,r[t]||{}])}))),S(_(n),"getAttributes",(0,i.default)((function(e){return(0,c.omit)(n.props,R)}))),S(_(n),"renderActivePlayer",(function(e){if(!e)return null;var t=n.getActivePlayer(e);if(!t)return null;var r=n.getConfig(e,t.key);return o.default.createElement(s.default,v({},n.props,{key:t.key,ref:n.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:n.handleReady}))})),n}return r=h,f=[{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.light;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(e){if(!e)return null;var t=this.props,n=t.light,r=t.playIcon,a=t.previewTabIndex,i=t.oEmbedUrl;return o.default.createElement(k,{url:e,light:n,playIcon:r,previewTabIndex:a,oEmbedUrl:i,onClick:this.handleClickPreview})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.style,r=e.width,a=e.height,i=e.fallback,l=e.wrapper,u=this.state.showPreview,c=this.getAttributes(t),s="string"===typeof l?this.references.wrapper:void 0;return o.default.createElement(l,v({ref:s,style:d(d({},n),{},{width:r,height:a})},c),o.default.createElement(A,{fallback:i},u?this.renderPreview(t):this.renderActivePlayer(t)))}}],f&&P(r.prototype,f),p&&P(r,p),h}(o.Component),S(n,"displayName","ReactPlayer"),S(n,"propTypes",u.propTypes),S(n,"defaultProps",u.defaultProps),S(n,"addCustomPlayer",(function(e){I.push(e)})),S(n,"removeCustomPlayers",(function(){I.length=0})),S(n,"canPlay",(function(t){for(var n=0,r=[].concat(I,m(e));n<r.length;n++){if(r[n].canPlay(t))return!0}return!1})),S(n,"canEnablePIP",(function(t){for(var n=0,r=[].concat(I,m(e));n<r.length;n++){var o=r[n];if(o.canEnablePIP&&o.canEnablePIP(t))return!0}return!1})),r}},24112:function(e,t,n){t.Z=void 0;var r,o=(r=n(14882))&&r.__esModule?r:{default:r},a=n(38629);var i=o.default[o.default.length-1],l=(0,a.createReactPlayer)(o.default,i);t.Z=l},17709:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.canPlay=t.FLV_EXTENSIONS=t.DASH_EXTENSIONS=t.HLS_EXTENSIONS=t.VIDEO_EXTENSIONS=t.AUDIO_EXTENSIONS=t.MATCH_URL_KALTURA=t.MATCH_URL_VIDYARD=t.MATCH_URL_MIXCLOUD=t.MATCH_URL_DAILYMOTION=t.MATCH_URL_TWITCH_CHANNEL=t.MATCH_URL_TWITCH_VIDEO=t.MATCH_URL_WISTIA=t.MATCH_URL_STREAMABLE=t.MATCH_URL_FACEBOOK_WATCH=t.MATCH_URL_FACEBOOK=t.MATCH_URL_VIMEO=t.MATCH_URL_SOUNDCLOUD=t.MATCH_URL_YOUTUBE=void 0;var r=n(52737);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;t.MATCH_URL_YOUTUBE=i;var l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;t.MATCH_URL_SOUNDCLOUD=l;var u=/vimeo\.com\/(?!progressive_redirect).+/;t.MATCH_URL_VIMEO=u;var c=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;t.MATCH_URL_FACEBOOK=c;var s=/^https?:\/\/fb\.watch\/.+$/;t.MATCH_URL_FACEBOOK_WATCH=s;var f=/streamable\.com\/([a-z0-9]+)$/;t.MATCH_URL_STREAMABLE=f;var p=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;t.MATCH_URL_WISTIA=p;var y=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;t.MATCH_URL_TWITCH_VIDEO=y;var d=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;t.MATCH_URL_TWITCH_CHANNEL=d;var v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;t.MATCH_URL_DAILYMOTION=v;var m=/mixcloud\.com\/([^/]+\/[^/]+)/;t.MATCH_URL_MIXCLOUD=m;var h=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;t.MATCH_URL_VIDYARD=h;var b=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;t.MATCH_URL_KALTURA=b;var P=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;t.AUDIO_EXTENSIONS=P;var g=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;t.VIDEO_EXTENSIONS=g;var w=/\.(m3u8)($|\?)/i;t.HLS_EXTENSIONS=w;var O=/\.(mpd)($|\?)/i;t.DASH_EXTENSIONS=O;var _=/\.(flv)($|\?)/i;t.FLV_EXTENSIONS=_;var E={youtube:function(e){return e instanceof Array?e.every((function(e){return i.test(e)})):i.test(e)},soundcloud:function(e){return l.test(e)&&!P.test(e)},vimeo:function(e){return u.test(e)&&!g.test(e)&&!w.test(e)},facebook:function(e){return c.test(e)||s.test(e)},streamable:function(e){return f.test(e)},wistia:function(e){return p.test(e)},twitch:function(e){return y.test(e)||d.test(e)},dailymotion:function(e){return v.test(e)},mixcloud:function(e){return m.test(e)},vidyard:function(e){return h.test(e)},kaltura:function(e){return b.test(e)},file:function e(t){if(t instanceof Array){var n,a=o(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;if("string"===typeof i&&e(i))return!0;if(e(i.src))return!0}}catch(l){a.e(l)}finally{a.f()}return!1}return!(!(0,r.isMediaStream)(t)&&!(0,r.isBlobUrl)(t))||(P.test(t)||g.test(t)||w.test(t)||O.test(t)||_.test(t))}};t.canPlay=E},14882:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(72791),o=n(52737),a=n(17709),i=[{key:"youtube",name:"YouTube",canPlay:a.canPlay.youtube,lazyPlayer:(0,r.lazy)((function(){return n.e(4439).then(n.bind(n,19038))}))},{key:"soundcloud",name:"SoundCloud",canPlay:a.canPlay.soundcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(6125).then(n.bind(n,31816))}))},{key:"vimeo",name:"Vimeo",canPlay:a.canPlay.vimeo,lazyPlayer:(0,r.lazy)((function(){return n.e(3743).then(n.bind(n,92234))}))},{key:"facebook",name:"Facebook",canPlay:a.canPlay.facebook,lazyPlayer:(0,r.lazy)((function(){return n.e(2121).then(n.bind(n,47176))}))},{key:"streamable",name:"Streamable",canPlay:a.canPlay.streamable,lazyPlayer:(0,r.lazy)((function(){return n.e(2546).then(n.bind(n,19007))}))},{key:"wistia",name:"Wistia",canPlay:a.canPlay.wistia,lazyPlayer:(0,r.lazy)((function(){return n.e(8055).then(n.bind(n,87441))}))},{key:"twitch",name:"Twitch",canPlay:a.canPlay.twitch,lazyPlayer:(0,r.lazy)((function(){return n.e(6216).then(n.bind(n,58140))}))},{key:"dailymotion",name:"DailyMotion",canPlay:a.canPlay.dailymotion,lazyPlayer:(0,r.lazy)((function(){return n.e(7596).then(n.bind(n,30987))}))},{key:"mixcloud",name:"Mixcloud",canPlay:a.canPlay.mixcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(4667).then(n.bind(n,90001))}))},{key:"vidyard",name:"Vidyard",canPlay:a.canPlay.vidyard,lazyPlayer:(0,r.lazy)((function(){return n.e(8888).then(n.bind(n,98195))}))},{key:"kaltura",name:"Kaltura",canPlay:a.canPlay.kaltura,lazyPlayer:(0,r.lazy)((function(){return n.e(261).then(n.bind(n,72369))}))},{key:"file",name:"FilePlayer",canPlay:a.canPlay.file,canEnablePIP:function(e){return a.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,o.supportsWebKitPresentationMode)())&&!a.AUDIO_EXTENSIONS.test(e)},lazyPlayer:(0,r.lazy)((function(){return n.e(6011).then(n.bind(n,36994))}))}];t.default=i},11363:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var r,o=(r=n(52007))&&r.__esModule?r:{default:r};var a=o.default.string,i=o.default.bool,l=o.default.number,u=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,p=o.default.func,y=o.default.node,d={url:c([a,u,f]),playing:i,loop:i,controls:i,volume:l,muted:i,playbackRate:l,width:c([a,l]),height:c([a,l]),style:f,progressInterval:l,playsinline:i,pip:i,stopOnUnmount:i,light:c([i,a,f]),playIcon:y,previewTabIndex:l,fallback:y,oEmbedUrl:a,wrapper:c([a,p,s({render:p.isRequired})]),config:s({soundcloud:s({options:f}),youtube:s({playerVars:f,embedOptions:f,onUnstarted:p}),facebook:s({appId:a,version:a,playerId:a,attributes:f}),dailymotion:s({params:f}),vimeo:s({playerOptions:f,title:a}),file:s({attributes:f,tracks:u,forceVideo:i,forceAudio:i,forceHLS:i,forceDASH:i,forceFLV:i,hlsOptions:f,hlsVersion:a,dashVersion:a,flvVersion:a}),wistia:s({options:f,playerId:a,customControls:u}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a}),vidyard:s({options:f})}),onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p};t.propTypes=d;var v=function(){},m={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:v},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v};t.defaultProps=m},52737:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return p(e,u)},t.parseEndTime=function(e){return p(e,c)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},t.getSDK=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.default,i=y(t);if(i&&o(i))return Promise.resolve(i);return new Promise((function(r,o){if(d[e])d[e].push({resolve:r,reject:o});else{d[e]=[{resolve:r,reject:o}];var i=function(t){d[e].forEach((function(e){return e.resolve(t)}))};if(n){var l=window[n];window[n]=function(){l&&l(),i(y(t))}}a(e,(function(r){r?(d[e].forEach((function(e){return e.reject(r)})),d[e]=null):n||i(y(t))}))}}))},t.getConfig=function(e,t){return(0,o.default)(t.config,e.config)},t.omit=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,r),i={},l=Object.keys(e),u=0,c=l;u<c.length;u++){var s=c[u];-1===a.indexOf(s)&&(i[s]=e[s])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var n="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c \u2013 ");return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isMediaStream=function(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream},t.isBlobUrl=function(e){return/^blob:/.test(e)},t.supportsWebKitPresentationMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video"),t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t};var r=a(n(15102)),o=a(n(49948));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=/[?&#](?:start|t)=([0-9hms]+)/,c=/[?&#]end=([0-9hms]+)/,s=/(\d+)(h|m|s)/g,f=/^\d+$/;function p(e,t){if(!(e instanceof Array)){var n=e.match(t);if(n){var r=n[1];if(r.match(s))return function(e){var t=0,n=s.exec(e);for(;null!==n;){var r=i(n,3),o=r[1],a=r[2];"h"===a&&(t+=60*parseInt(o,10)*60),"m"===a&&(t+=60*parseInt(o,10)),"s"===a&&(t+=parseInt(o,10)),n=s.exec(e)}return t}(r);if(f.test(r))return parseInt(r)}}}function y(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var d={}}}]);
//# sourceMappingURL=6151.d86b769f.chunk.js.map