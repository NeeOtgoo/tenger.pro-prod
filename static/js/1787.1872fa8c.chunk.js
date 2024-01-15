"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[1787],{41787:function(t,e,h){h.r(e),h.d(e,{default:function(){return I}});var x,r=h(72791),i=h(1857),s=h(29439),c=h(30168),d=h(50419),g=h(90785),n=h(73332),l=h(49389),a=h(87309),j=h(29529),w=h(38999),o=h(15471),y=h(64880),m=h(26872),u=h(27570),f=h(84376),p=h(82630),v=h(53719),b=h(80184),N=(0,u.Ps)(x||(x=(0,c.Z)(["\n    mutation tokenAuth($username: String!, $password: String!){\n        tokenAuth(username: $username, password: $password) {\n\t\t\tsuccess,\n\t\t\terrors,\n\t\t\tunarchiving,\n\t\t\ttoken,\n\t\t\t# refreshToken,\n\t\t\tunarchiving,\n\t\t\tuser {\n\t\t\t\tid,\n\t\t\t\tfirstName,\n\t\t\t\tlastName,\n\t\t\t\tusername,\n\t\t\t}\n        }\n    }\n"]))),Z=function(t){var e=(0,y.k6)(),h=(0,r.useContext)(v.S),x=h.user,i=h.refetch,c=localStorage.getItem(o.UA),u=(0,r.useState)(!1),Z=(0,s.Z)(u,2),k=Z[0],S=Z[1];var I=(0,f.D)(N,{onCompleted:function(t){if(!0===t.tokenAuth.success)d.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u043d\u044d\u0432\u0442\u044d\u0440\u043b\u044d\u044d!"),localStorage.setItem(o.UA,t.tokenAuth.token),i();else S(!0)}}),A=(0,s.Z)(I,2),C=A[0],P=A[1].loading;return k&&setTimeout((function(){S(!1)}),3e3),(0,r.useEffect)((function(){c&&x&&e.push("/app/home")}),[x,c]),(0,b.jsxs)("div",{className:"px-10 w-full md:w-1/2",children:[(0,b.jsx)(m.ww.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:k?1:0,marginBottom:k?20:0},children:(0,b.jsx)(g.Z,{type:"error",showIcon:!0,message:(0,b.jsx)(p.Z,{id:"login-fail"})})}),(0,b.jsxs)(n.Z,{layout:"vertical",name:"login-form",onFinish:function(t){C({variables:{username:t.username,password:t.password}})},children:[(0,b.jsx)(n.Z.Item,{name:"username",label:(0,b.jsx)(p.Z,{id:"username"}),rules:[{required:!0,message:"\u041d\u044d\u0432\u0442\u0440\u044d\u0445 \u043d\u044d\u0440 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}],children:(0,b.jsx)(l.Z,{prefix:(0,b.jsx)(j.Z,{className:"text-primary"})})}),(0,b.jsx)(n.Z.Item,{name:"password",label:(0,b.jsx)("div",{children:(0,b.jsx)("span",{children:(0,b.jsx)(p.Z,{id:"password"})})}),rules:[{required:!0,message:"\u041d\u0443\u0443\u0446 \u04af\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}],children:(0,b.jsx)(l.Z.Password,{prefix:(0,b.jsx)(w.Z,{className:"text-primary"})})}),(0,b.jsx)(n.Z.Item,{children:(0,b.jsxs)(a.Z,{type:"primary",htmlType:"submit",block:!0,loading:P,children:[" ",(0,b.jsx)(p.Z,{id:"main.login"})]})})]})]})};Z.defaultProps={otherSignIn:!0,showForgetPassword:!1};var k=Z,S=h(59305),I=function(){var t=(0,i.Z)().domainData;return(0,b.jsx)("section",{className:"bg-white h-screen",children:(0,b.jsxs)("div",{className:"mx-auto flex justify-center h-full flex-col lg:flex-row",children:[(0,b.jsxs)("div",{className:"w-full lg:w-1/2 bg-gradient-to-br from-emind to-emind-300 px-2 py-40 sm:py-48 sm:px-12 hidden flex-col justify-center relative h-full md:flex",children:[(0,b.jsx)("div",{className:"absolute top-0 right-0 pt-3 pr-3 text-white",children:(0,b.jsx)("svg",{className:"fill-background",width:199,height:131,xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsxs)("g",{transform:"rotate(-90 65.5 65)",fillRule:"evenodd",children:[(0,b.jsx)("rect",{width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"})]})})}),(0,b.jsxs)("div",{className:"flex relative z-30 flex-col justify-center",children:[(0,b.jsx)("img",{className:"mx-auto w-2/3 ",src:"/img/login.png",alt:"login"}),(0,b.jsx)("p",{className:"text-center text-xl text-white leading-normal pt-3",children:S.iC})]}),(0,b.jsx)("div",{className:"z-20 absolute bottom-0 left-0 pb-3 pl-3 text-white",children:(0,b.jsx)("svg",{className:"fill-background",width:199,height:131,xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsxs)("g",{transform:"rotate(-90 65.5 65)",fillRule:"evenodd",children:[(0,b.jsx)("rect",{width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"24.015",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"48.029",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"72.044",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"96.059",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"120.073",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"144.088",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"168.103",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"31.002",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"62.003",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"93.005",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"}),(0,b.jsx)("rect",{x:"124.007",y:"192.117",width:"6.002",height:"6.005",rx:"3.001"})]})})})]}),(0,b.jsx)("div",{className:"w-full md:w-1/2 flex justify-center h-full bg-background",children:(0,b.jsxs)("div",{className:"w-full text-gray-800 mb-12 sm:mb-0 flex flex-col items-center justify-center px-2 sm:px-0",children:[(0,b.jsx)("img",{className:"mx-auto w-48",src:t.logo,alt:"logo"}),(0,b.jsx)(k,{}),(0,b.jsx)("div",{className:"absolute bottom-0",children:(0,b.jsxs)("p",{className:"text-slate-700",children:["\xa9 ",(new Date).getFullYear()," Meta Soft Guaranteed LLC "]})})]})})]})})}}}]);
//# sourceMappingURL=1787.1872fa8c.chunk.js.map