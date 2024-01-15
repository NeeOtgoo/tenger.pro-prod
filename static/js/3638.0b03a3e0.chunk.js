"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[3638],{93721:function(e,n,t){t.d(n,{Eo:function(){return z},Gu:function(){return W},Ik:function(){return re},Iy:function(){return ne},LL:function(){return oe},NP:function(){return N},O2:function(){return R},OY:function(){return J},Qg:function(){return O},TR:function(){return se},Ve:function(){return H},Wp:function(){return Y},_2:function(){return ue},cL:function(){return U},fW:function(){return K},gT:function(){return te},jk:function(){return B},kQ:function(){return ie},nR:function(){return M},nx:function(){return V},qC:function(){return G},qQ:function(){return F},qz:function(){return ae},rb:function(){return E},vA:function(){return le},vQ:function(){return X},wT:function(){return _},xs:function(){return D},zd:function(){return ee}});var i,s,r,a,u,o,l,d,c,m,T,p,$,v,f,Z,x,h,g,j,w,k,q,y,I,P,L,A,b,C,S=t(30168),Q=t(27570),O=(0,Q.Ps)(i||(i=(0,S.Z)(["\n    query allOnlineTests {\n        allOnlineTests {\n            id\n            title\n            description\n            subject {\n                id\n                subject\n            }\n        }\n    }\n"]))),N=(0,Q.Ps)(s||(s=(0,S.Z)(["\n    mutation createOnlineTest ($description: String, $subject: Int, $title: String) {\n        createOnlineTest (description: $description, subject: $subject, title: $title) {\n            onlineTest {\n                id\n            }\n        }\n    }\n"]))),D=(0,Q.Ps)(r||(r=(0,S.Z)(["\n    mutation updateOnlineTest ($description: String, $id: ID, $subject: Int, $title: String) {\n        updateOnlineTest (description: $description, id: $id, subject: $subject, title: $title) {\n            OnlineTest {\n                id\n            }\n        }\n    }\n"]))),E=(0,Q.Ps)(a||(a=(0,S.Z)(["\n    mutation deleteOnlineTest ($id: ID) {\n        deleteOnlineTest (id: $id) {\n            onlineTest {\n                id\n            }\n        }\n    }\n"]))),F=(0,Q.Ps)(u||(u=(0,S.Z)(["\n    query allQuestionLevels {\n        allQuestionLevels {\n            level\n            id\n        }\n    }\n"]))),z=(0,Q.Ps)(o||(o=(0,S.Z)(["\n    mutation createQuestionLevel ($level: String) {\n        createQuestionLevel (level: $level) {\n            questionLevel {\n                id\n            }\n        }\n    }\n"]))),U=(0,Q.Ps)(l||(l=(0,S.Z)(["\n    mutation updateQuestionLevel ($level: String, $id: ID) {\n        updateQuestionLevel (level: $level, id: $id) {\n            questionLevel {\n                id\n            }\n        }\n    }\n"]))),B=(0,Q.Ps)(d||(d=(0,S.Z)(["\n    mutation deleteQuestionLevel ($id: ID) {\n        deleteQuestionLevel (id: $id) {\n            questionLevel {\n                level\n            }\n        }\n    }\n"]))),M=(0,Q.Ps)(c||(c=(0,S.Z)(["\n    query allQuestionsByTest ($id: Int!) {\n        allQuestionsByTest (id: $id) {\n            id\n            question\n            hint\n            image\n            answerType\n            questionLevel {\n                id\n                level\n            }\n            questionChoiceSet {\n                id\n                answer\n                score\n            }\n        }\n    }\n"]))),H=(0,Q.Ps)(m||(m=(0,S.Z)(['\n    mutation createQuestion ($answerType: String, $image: Upload, $onlineTest: Int, $questionLevel: Int) {\n        createQuestion (answerType: $answerType, hint: "", image: $image, onlineTest: $onlineTest, questionL: "\u0410\u0441\u0443\u0443\u043b\u0442", questionLevel: $questionLevel) {\n            question {\n                id\n                answerType\n            }\n        }\n    }\n']))),V=(0,Q.Ps)(T||(T=(0,S.Z)(["\n    mutation updateQuestion ($answerType: String, $hint: String, $image: Upload, $onlineTest: Int, $questionL: String, $questionLevel: Int, $id: ID) {\n        updateQuestion (answerType: $answerType, hint: $hint, image: $image, onlineTest: $onlineTest, questionL: $questionL, questionLevel: $questionLevel, id: $id) {\n            question {\n                id\n                answerType\n            }\n        }\n    }\n"]))),G=(0,Q.Ps)(p||(p=(0,S.Z)(["\n    mutation deleteQuestion ($id: ID) {\n        deleteQuestion (id: $id) {\n            question {\n                question\n            }\n        }\n    }\n"]))),_=(0,Q.Ps)($||($=(0,S.Z)(["\n    mutation createQuestionChoice ($answer: String, $question: Int, $score: Decimal) {\n        createQuestionChoice (answer: $answer, question: $question, score: $score) {\n            questionChoice {\n                id\n            }\n        }\n    }\n"]))),R=(0,Q.Ps)(v||(v=(0,S.Z)(["\n    mutation updateQuestionChoice ($answer: String, $question: Int, $score: Decimal, $id: ID) {\n        updateQuestionChoice (answer: $answer, question: $question, score: $score, id: $id) {\n            questionChoice {\n                id\n            }\n        }\n    }\n"]))),W=(0,Q.Ps)(f||(f=(0,S.Z)(["\n    mutation deleteQuestionChoice ($id: ID) {\n        deleteQuestionChoice (id: $id) {\n            questionChoice {\n                score\n            }\n        }\n    }\n"]))),X=(0,Q.Ps)(Z||(Z=(0,S.Z)(["\n    query allTakeTests {\n        allTakeTests {\n            id\n            title\n            description\n            startAt\n            endAt\n            duration\n            status\n        }\n    }\n"]))),K=(0,Q.Ps)(x||(x=(0,S.Z)(["\n    mutation createTakeTest ($duration: Int, $endAt: String, $startAt: String, $status: String, $description: String, $title: String) {\n        createTakeTest (duration: $duration, endAt: $endAt, startAt: $startAt, status: $status, description: $description, title: $title) {\n            takeTest {\n                status\n            }\n        }\n    }\n"]))),Y=(0,Q.Ps)(h||(h=(0,S.Z)(["\n    mutation updateTakeTest ($duration: Int, $endAt: String, $startAt: String, $status: String, $id: ID, $description: String, $title: String) {\n        updateTakeTest (duration: $duration, endAt: $endAt, startAt: $startAt, status: $status, id: $id, description: $description, title: $title) {\n            takeTest {\n                status\n            }\n        }\n    }\n"]))),J=(0,Q.Ps)(g||(g=(0,S.Z)(["\n    mutation deleteTakeTest ($id: ID) {\n        deleteTakeTest (id: $id) {\n            takeTest {\n                status\n            }\n        }\n    }\n"]))),ee=(0,Q.Ps)(j||(j=(0,S.Z)(["\n    query allParticipantByTest ($takeTest: Int!) {\n        allParticipantByTest (takeTest: $takeTest) {\n            id\n            student {\n                studentCode\n                familyName\n                name\n            }\n            started\n            completed\n            answerSet {\n                answerType\n                questionText\n                choices\n                score\n                givenAnswer\n            }\n        }\n    }\n"]))),ne=(0,Q.Ps)(w||(w=(0,S.Z)(['\n    mutation createParticipant ($section: Int = 0, $studentCode: String = "", $takeTest: Int) {\n        createParticipant (section: $section, studentCode: $studentCode, takeTest: $takeTest) {\n            participant {\n                id\n            }\n        }\n    }\n']))),te=(0,Q.Ps)(k||(k=(0,S.Z)(["\n    mutation deleteParticipant ($id: ID, $takeTest: Int) {\n        deleteParticipant (id: $id, takeTest: $takeTest) {\n            participant {\n                started\n            }\n        }\n    }\n"]))),ie=(0,Q.Ps)(q||(q=(0,S.Z)(["\n    query allTakeLevelByTest ($takeTest: Int!) {\n        allTakeLevelByTest (takeTest: $takeTest) {\n            id\n            onlineTest {\n                id\n                title\n            }\n            questionLevel {\n                id\n                level\n            }\n            takeNumber\n        }\n    }\n"]))),se=(0,Q.Ps)(y||(y=(0,S.Z)(["\n    mutation createTakeLevel ($onlineTest: Int, $questionLevel: Int, $takeNumber: Int, $takeTest: Int) {\n        createTakeLevel (onlineTest: $onlineTest, questionLevel: $questionLevel, takeNumber: $takeNumber, takeTest: $takeTest) {\n            takeLevel {\n                id\n            }\n        }\n    }\n"]))),re=(0,Q.Ps)(I||(I=(0,S.Z)(["\n    mutation deleteTakeLevel ($id: ID) {\n        deleteTakeLevel (id: $id) {\n            takeLevel {\n                takeNumber\n            }\n        }\n    }\n"]))),ae=((0,Q.Ps)(P||(P=(0,S.Z)(["\n    query allSections {\n        allSections {\n            id\n            section\n            studentSet {\n                id\n                studentCode\n            }\n        }\n    }\n"]))),(0,Q.Ps)(L||(L=(0,S.Z)(["\n    query startTest ($takeTest: Int!) {\n        startTest (takeTest: $takeTest) {\n            id\n            questionText\n            choices\n            answerType\n            givenAnswer\n            question {\n                hint\n                image\n            }\n        }\n    }\n"])))),ue=(0,Q.Ps)(A||(A=(0,S.Z)(["\n    mutation updateAnswer ($givenAnswer: String, $id: ID) {\n        updateAnswer (givenAnswer: $givenAnswer, id: $id) {\n            answer {\n                id\n            }\n        }\n    }\n"]))),oe=(0,Q.Ps)(b||(b=(0,S.Z)(["\n    query testTime ($takeTest: Int!) {\n        testTime (takeTest: $takeTest) {\n            duration\n            started\n            endAt\n        }\n    }\n"]))),le=(0,Q.Ps)(C||(C=(0,S.Z)(["\n    query finishTest ($takeTest: Int!) {\n        finishTest (takeTest: $takeTest) {\n            score\n        }\n    }\n"])))},43638:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(29439),s=t(72791),r=t(86586),a=t(96578),u=t(64880),o=t(83373),l=t(50419),d=t(66106),c=t(30914),m=t(66871),T=t(93721),p=t(72426),$=t.n(p),v=t(1413),f=t(30941),Z=t(49389),x=t(20003),h=t(73332),g=t(77063),j=t(36755),w=t(50881),k=t(83099),q=t(32014),y=t(87309),I=t(76864),P=t(35542),L=t(41938),A=t(67575),b=t(84376),C=t(59305),S=t(82630),Q=t(80184),O=f.Z.Title,N=f.Z.Paragraph,D=f.Z.Text,E=Z.Z.TextArea,F=x.Z.confirm,z={labelCol:{span:3},wrapperCol:{span:24}},U={wrapperCol:{span:32}},B=function(e){var n=e.answer,t=e.refetch,r=e.next,a=e.prev,u=e.setIsFinished,o=e.page,l=e.answers,d=h.Z.useForm(),c=(0,i.Z)(d,1)[0],p=(0,s.useState)(n),$=(0,i.Z)(p,2),f=$[0],Z=$[1];(0,s.useEffect)((function(){if(n){var e=[],t="";if(Z(n),n!==n.givenAnswer){if("TEXT"===n.answerType&&c.setFieldsValue({givenAnswer:n.givenAnswer}),"MULTIPLE"===n.answerType){var i=null===n||void 0===n?void 0:n.givenAnswer.split(",|");i.pop(),i.map((function(t){return n.choices.filter((function(e){return e.text===t})).map((function(n){return e.push(n.value)}))})),c.setFieldsValue({givenAnswer:e})}"CHOOSE"===n.answerType&&(n.choices.filter((function(e){return e.text===n.givenAnswer})).map((function(e){return t=e.value})),c.setFieldsValue({givenAnswer:t}))}}}),[n,c,f]);var x=(0,b.D)(T._2,{onCompleted:function(e){t(),r()}}),B=(0,i.Z)(x,2),M=B[0],H=B[1].loading;return void 0===f?(0,Q.jsx)(g.ZP,{title:"\u0410\u0441\u0443\u0443\u043b\u0442 \u0430\u043b\u0433\u0430 \u0431\u0430\u0439\u043d\u0430!"}):(0,Q.jsxs)(m.Z,{children:[(0,Q.jsxs)(O,{level:3,children:[(0,Q.jsx)(S.Z,{id:"question"})," ",o+1]}),(0,Q.jsx)(N,{children:f.questionText}),n.hint&&(0,Q.jsxs)("div",{children:[(0,Q.jsx)(O,{type:"secondary",level:4,children:(0,Q.jsx)(S.Z,{id:"question.hint"})}),(0,Q.jsx)(D,{type:"secondary",children:n.hint})]}),n.image&&(0,Q.jsx)("div",{className:"p-2",children:(0,Q.jsx)(j.Z,{preview:!1,style:{maxHeight:"400px"},className:"img-fluid",alt:"Preview",src:C._O+n.image})}),(0,Q.jsxs)(h.Z,(0,v.Z)((0,v.Z)({},z),{},{layout:"vertical",form:c,name:"control-hooks",onFinish:function(e){e.id=f.id,"MULTIPLE"===f.answerType&&(e.givenAnswer=e.givenAnswer.map((function(e){return"".concat(e)})).join(",")),M({variables:e})},initialvaluess:{givenAnswer:f.givenAnswer},children:["TEXT"===f.answerType?(0,Q.jsx)(h.Z.Item,{name:"givenAnswer",label:(0,Q.jsx)(S.Z,{id:"question.answer"}),rules:[{required:!0,message:(0,Q.jsx)(S.Z,{id:"form.required"})}],children:(0,Q.jsx)(E,{rows:4,onChangeCapture:function(e){return console.log(e.target.value)}})}):null,"CHOOSE"===f.answerType?(0,Q.jsx)(h.Z.Item,{name:"givenAnswer",label:(0,Q.jsx)(S.Z,{id:"question.answer"}),rules:[{required:!0,message:(0,Q.jsx)(S.Z,{id:"form.required"})}],children:(0,Q.jsx)(w.ZP.Group,{children:(0,Q.jsx)(k.Z,{direction:"vertical",children:f.choices.map((function(e,n){return(0,Q.jsx)(w.ZP,{value:e.value,children:e.text},n)}))})})}):null,"MULTIPLE"===f.answerType?(0,Q.jsx)(h.Z.Item,{name:"givenAnswer",label:(0,Q.jsx)(S.Z,{id:"question.answer"}),rules:[{required:!0}],children:(0,Q.jsx)(q.Z.Group,{children:f.choices.map((function(e,n){return(0,Q.jsx)(q.Z,{value:e.value,children:e.text},n)}))})}):null,(0,Q.jsxs)(h.Z.Item,(0,v.Z)((0,v.Z)({},U),{},{children:[(0,Q.jsxs)(y.Z,{size:"small",disabled:o<1&&!0,className:"mr-2",type:"primary",htmlType:"button",loading:H,onClick:function(){return a()},children:[(0,Q.jsx)(I.Z,{}),(0,Q.jsx)(S.Z,{id:"main.previous"})]}),(0,Q.jsxs)(y.Z,{size:"small",disabled:o+1===l.length,type:"danger",className:"mr-2",htmlType:"button",loading:H,onClick:function(){return r()},children:[(0,Q.jsx)(P.Z,{}),(0,Q.jsx)(S.Z,{id:"main.skip"})]}),(0,Q.jsxs)(y.Z,{size:"small",disabled:o+1===l.length,className:"mr-2",type:"primary",htmlType:"submit",loading:H,children:[(0,Q.jsx)(S.Z,{id:"main.next"}),(0,Q.jsx)(L.Z,{})]}),o+1===l.length&&(0,Q.jsxs)(y.Z,{style:{float:"right",background:"#5aac44",borderColor:"#5aac44",color:"#fff"},size:"small",className:"mr-2",type:"danger",htmlType:"submit",onClick:function(){F({title:"\u0428\u0430\u043b\u0433\u0430\u043b\u0442 \u0434\u0443\u0443\u0441\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0414\u0443\u0443\u0441\u0433\u0430\u0445",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){u(!0)}})},children:[(0,Q.jsx)(A.Z,{}),(0,Q.jsx)(S.Z,{id:"main.finish-exam"})]})]}))]}))]})},M=t(38937),H=t(2703),V=o.Z.Countdown,G=function(e){var n=e.order,t=e.type,i=e.onClick;return(0,Q.jsx)("button",{onClick:i,className:(0,H.AK)("current"===t?"bg-blue-500":"completed"===t?"bg-green-500":"uncompleted"===t?"bg-orange-500":"","h-10 w-10 m-1 rounded-2 rounded-tl-4 text-white"),children:n})},_=function(){var e=(0,u.UO)(),n=(0,u.k6)(),t=(0,s.useState)(null),o=(0,i.Z)(t,2),p=o[0],v=o[1],f=(0,s.useState)(!1),Z=(0,i.Z)(f,2),x=Z[0],h=Z[1],g=(0,s.useState)(!0),j=(0,i.Z)(g,2),w=j[0],k=j[1],q=(0,s.useState)(0),y=(0,i.Z)(q,2),I=y[0],P=y[1],L=(0,s.useState)([]),A=(0,i.Z)(L,2),b=A[0],C=A[1],O=(0,r.t)(T.LL,{onCompleted:function(e){var n=$()(e.testTime.endAt),t=$()(e.testTime.started),i=$()();if($().duration(n.diff(i)).asMilliseconds()<0)return l.ZP.error("\u0425\u0443\u0433\u0430\u0446\u0430\u0430 \u0434\u0443\u0443\u0441\u0441\u0430\u043d \u0431\u0430\u0439\u043d\u0430!");$()(t).add(e.testTime.duration,"m").valueOf()<=$()(n).valueOf()?$().duration($()(t).add(e.testTime.duration,"m").diff(i)).asMilliseconds()<0||v($()(t).add(e.testTime.duration,"m")):v(n)}}),N=(0,i.Z)(O,1)[0],D=(0,r.t)(T.vA,{onCompleted:function(e){l.ZP.warning("\u0428\u0430\u043b\u0433\u0430\u043b\u0442 \u0434\u0443\u0443\u0441\u0441\u0430\u043d!"),n.push({pathname:"/app/my-score",state:{message:e}})}}),E=(0,i.Z)(D,1)[0],F=(0,a.a)(T.qz,{variables:{takeTest:e.test},onCompleted:function(n){N({variables:{takeTest:e.test}});var t=[];null===n.startTest?h(!0):(n.startTest.map((function(e){var n=[];if("CHOOSE"===e.answerType||"MULTIPLE"===e.answerType){var i=e.choices.split(",|");i.pop(),i.map((function(e){var t=e.split(":|");return n.push({value:t[0],text:t[1]})}))}return t.push({hint:e.question.hint,image:e.question.image,answerType:e.answerType,givenAnswer:e.givenAnswer,id:e.id,questionText:e.questionText,choices:n})})),C(t),k(!1))}}).refetch;(0,s.useEffect)((function(){x&&E({variables:{takeTest:e.test}})}),[E,x,e]);return w?(0,Q.jsx)(M.Z,{cover:"content"}):(0,Q.jsx)("div",{children:(0,Q.jsxs)(d.Z,{gutter:[8,16],children:[(0,Q.jsx)(c.Z,{xs:24,xl:18,children:(0,Q.jsx)(B,{answer:b[I],answers:b,page:I,next:function(){b.length>I+1&&P((function(e){return e+1}))},prev:function(){P((function(e){return e-1}))},refetch:F,setIsFinished:h})}),(0,Q.jsxs)(c.Z,{xs:24,xl:6,children:[(0,Q.jsx)(m.Z,{children:(0,Q.jsx)(V,{title:(0,Q.jsx)("span",{className:"mb-4",children:(0,Q.jsx)(S.Z,{id:"exam.time-left"})}),value:p,onFinish:function(){return h(!0)}})}),(0,Q.jsx)(m.Z,{title:(0,Q.jsx)(S.Z,{id:"question"}),children:b.map((function(e,n){return 1,(0,Q.jsx)(G,{order:n+1,type:n===I?"current":""!==e.givenAnswer?"completed":"uncompleted",onClick:function(){P(n)}},n)}))}),(0,Q.jsxs)(m.Z,{title:(0,Q.jsx)(S.Z,{id:"exam.recommendations"}),children:[(0,Q.jsxs)("div",{className:"mt-2",children:[(0,Q.jsx)(G,{order:1,type:"current"}),(0,Q.jsx)(S.Z,{id:"exam.current"})]}),(0,Q.jsxs)("div",{className:"mt-2",children:[(0,Q.jsx)(G,{order:1,type:"completed"}),(0,Q.jsx)(S.Z,{id:"exam.completed"})]}),(0,Q.jsxs)("div",{className:"mt-2",children:[(0,Q.jsx)(G,{order:1,type:"uncompleted"}),(0,Q.jsx)(S.Z,{id:"exam.uncompleted"})]})]})]})]})})}}}]);
//# sourceMappingURL=3638.0b03a3e0.chunk.js.map