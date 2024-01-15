"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[2946],{49696:function(e,n,t){var r=t(29439),a=t(72791),i=t(20003),s=t(80184),l=(0,a.forwardRef)((function(e,n){var t,l=e.children,d=e.title,c=e.footer,o=e.okText,u=void 0===o?"\u0425\u0430\u0434\u0433\u0430\u043b\u0430\u0445":o,m=e.formName,x=void 0===m?"form":m,p=(0,a.useState)(!1),h=(0,r.Z)(p,2),f=h[0],y=h[1];return(0,a.useImperativeHandle)(n,(function(){return{handleOpen:function(){y(!0)},handleCancel:function(){y(!1)}}})),(0,s.jsx)(i.Z,{width:1500,title:d,visible:f,onCancel:null===(t=n.current)||void 0===t?void 0:t.handleCancel,okText:u,footer:c,cancelText:"\u0411\u043e\u043b\u0438\u0445",okButtonProps:{form:x,key:"submit",htmlType:"submit"},children:l})}));n.Z=l},77809:function(e,n,t){t.d(n,{Bf:function(){return k},DJ:function(){return A},N9:function(){return M},U8:function(){return N},Wu:function(){return $},hV:function(){return g},mW:function(){return B},o1:function(){return j},oH:function(){return I},v3:function(){return w},v8:function(){return v},wP:function(){return Z},wc:function(){return P},y4:function(){return S}});var r,a,i,s,l,d,c,o,u,m,x,p,h,f,y=t(30168),b=t(27570),g=(0,b.Ps)(r||(r=(0,y.Z)(["\n    query allPlanMarks {\n        allPlanMarks {\n            id\n            name\n        }\n    }\n"]))),j=(0,b.Ps)(a||(a=(0,y.Z)(["\n    mutation createPlanMark ($name: String) {\n        createPlanMark (name: $name) {\n            planMark {\n                id\n            }\n        }\n    }\n"]))),v=(0,b.Ps)(i||(i=(0,y.Z)(["\n    mutation updatePlanMark ($id: ID, $name: String) {\n        updatePlanMark (id: $id, name :$name) {\n            planMark {\n                id\n            }\n        }\n    }\n"]))),$=(0,b.Ps)(s||(s=(0,y.Z)(["\n    mutation deletePlanMark ($id: ID) {\n        deletePlanMark (id: $id) {\n            planMark {\n                name\n            }\n        }\n    }\n"]))),N=(0,b.Ps)(l||(l=(0,y.Z)(["\n    query allPlans {\n        allPlans {\n            id\n            title\n            teacher {\n                name\n                familyName\n            }\n            subject {\n                id\n                subject\n            }\n            section {\n                id\n                program {\n                    id\n                }\n            }\n            schoolyear {\n                id\n            }\n            approvedBy {\n                name\n                familyName\n            }\n            topic\n            subjectTopic\n            intention\n            keyword\n            consumables\n            duration\n        }\n    }\n"]))),Z=(0,b.Ps)(d||(d=(0,y.Z)(["\n    query planById($id: ID!) {\n        planById(id: $id) {\n            id\n            title\n            teacher {\n                name\n                familyName\n            }\n            subject {\n                subject\n            }\n            section {\n                classes {\n                    classes\n                }\n                section\n            }\n            schoolyear {\n                schoolyear\n            }\n            approvedBy {\n                name\n                familyName\n            }\n            topic\n            subjectTopic\n            intention\n            keyword\n            consumables\n            duration\n        }\n    }\n"]))),k=(0,b.Ps)(c||(c=(0,y.Z)(["\n    query allPlanActionsByPlan($plan: ID!) {\n        allPlanActionsByPlan(plan: $plan) {\n            id\n            planMark\n            name\n            teachingMethod\n            teacherActivity\n            studentActivity\n            studentAssignment\n            duration\n        }\n    }\n"]))),A=(0,b.Ps)(o||(o=(0,y.Z)(["\n    mutation createPlan(\n        $consumables: String\n        $duration: Int\n        $intention: String\n        $keyword: String\n        $schoolyear: ID\n        $section: ID\n        $subject: ID\n        $subjectTopic: String\n        $title: String\n        $topic: String\n    ) {\n        createPlan (\n            consumables : $consumables\n            duration : $duration\n            intention : $intention\n            keyword : $keyword\n            schoolyear : $schoolyear\n            section : $section\n            subject : $subject\n            subjectTopic : $subjectTopic\n            title: $title\n            topic : $topic\n        ) {\n            plan {\n                id\n            }\n        }\n    }\n"]))),w=(0,b.Ps)(u||(u=(0,y.Z)(["\n    mutation updatePlan(\n        $consumables: String\n        $duration: Int\n        $id: ID\n        $intention: String\n        $keyword: String\n        $schoolyear: ID\n        $section: ID\n        $subject: ID\n        $subjectTopic: String\n        $title: String\n        $topic: String\n    ) {\n        updatePlan(\n            consumables: $consumables\n            duration: $duration\n            id: $id\n            intention: $intention\n            keyword: $keyword\n            schoolyear: $schoolyear\n            section: $section\n            subject: $subject\n            subjectTopic: $subjectTopic\n            title: $title\n            topic: $topic\n        ) {\n            plan {\n                id\n            }\n        }\n    }\n"]))),P=(0,b.Ps)(m||(m=(0,y.Z)(["\n    mutation approvePlan ($plan: ID) {\n        approvePlan (plan: $plan) {\n            plan {\n                id\n            }\n        }\n    }\n"]))),I=(0,b.Ps)(x||(x=(0,y.Z)(["\n    mutation deletePlan($id: ID) {\n        deletePlan(id: $id){\n            plan {\n                topic\n            }\n        }\n    }\n"]))),M=(0,b.Ps)(p||(p=(0,y.Z)(["\n    mutation createPlanAction(\n        $duration: Int\n        $name: String\n        $plan: ID\n        $planMark: String\n        $studentActivity: String\n        $studentAssignment: String\n        $teacherActivity: String\n        $teachingMethod: String\n    ) {\n        createPlanAction (\n            duration: $duration\n            name: $name\n            plan: $plan\n            planMark: $planMark\n            studentActivity: $studentActivity\n            studentAssignment: $studentAssignment\n            teacherActivity: $teacherActivity\n            teachingMethod: $teachingMethod\n        ) {\n            planAction {\n                id\n            }\n        }\n    }\n"]))),S=(0,b.Ps)(h||(h=(0,y.Z)(["\n    mutation updatePlanAction(\n        $duration: Int\n        $id: ID\n        $name: String\n        $plan: ID\n        $planMark: String\n        $studentActivity: String\n        $studentAssignment: String\n        $teacherActivity: String\n        $teachingMethod: String\n    ) {\n        updatePlanAction (\n            duration: $duration\n            id: $id\n            name: $name\n            plan: $plan\n            planMark: $planMark\n            studentActivity: $studentActivity\n            studentAssignment: $studentAssignment\n            teacherActivity: $teacherActivity\n            teachingMethod: $teachingMethod\n        ) {\n            planAction {\n                id\n            }\n        }\n    }\n"]))),B=(0,b.Ps)(f||(f=(0,y.Z)(["\n    mutation deletePlanAction($id: ID) {\n        deletePlanAction(id: $id) {\n            planAction {\n                name\n            }\n        }\n    }\n"])))},10522:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(29439),a=t(72791),i=t(84376),s=t(96578);var l=a.forwardRef((function(e,n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}))})),d=t(20003),c=t(50419),o=t(87309),u=t(82464),m=t(53834),x=t(67575),p=t(78803),h=t(49696),f=t(38937),y=t(82630),b=t(77809),g=t(64880),j=t(91523),v=t(61146),$=t(22949),N=t(73332),Z=t(37083),k=t(49389),A=t(76835),w=t(46246),P=t.n(w),I=t(80184);$.Z.Option;var M=function(e){var n=e.closeModal,t=e.selectedData,s=N.Z.useForm(),l=(0,r.Z)(s,1)[0],d=(0,g.UO)().id,o=(0,i.D)(b.N9,{refetchQueries:[{query:b.Bf,variables:{plan:d}}],onCompleted:function(e){n(),c.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430")}}),u=(0,r.Z)(o,2),m=u[0],x=u[1].loading,p=(0,i.D)(b.y4,{refetchQueries:[{query:b.Bf,variables:{plan:d}}],onCompleted:function(e){n(),c.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430")}}),h=(0,r.Z)(p,2),f=h[0],j=h[1].loading;return(0,a.useEffect)((function(){if(t.id){var e={planMark:t.planMark,name:t.name,teachingMethod:t.teachingMethod,teacherActivity:P().createEditorState(t.teacherActivity),studentActivity:P().createEditorState(t.studentActivity),studentAssignment:P().createEditorState(t.studentAssignment),duration:t.duration};l.setFieldsValue(e)}else l.resetFields()}),[t]),(0,I.jsx)(Z.Z,{spinning:x||j,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,I.jsx)(N.Z,{id:"form",layout:"vertical",form:l,name:"form",onFinish:function(e){e.plan=d,e.teacherActivity=e.teacherActivity.toHTML(),e.studentAssignment=e.studentAssignment.toHTML(),e.studentActivity=e.studentActivity.toHTML(),t.id?(e.id=t.id,f({variables:e})):m({variables:e})},children:(0,I.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,I.jsx)(N.Z.Item,{name:"name",label:(0,I.jsx)(y.Z,{id:"name"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})},{max:50,message:(0,I.jsx)(y.Z,{id:"form.max"})}],children:(0,I.jsx)(k.Z,{})}),(0,I.jsx)(N.Z.Item,{name:"teachingMethod",label:(0,I.jsx)(y.Z,{id:"teachingMethod"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})},{max:100,message:(0,I.jsx)(y.Z,{id:"form.max"})}],children:(0,I.jsx)(k.Z,{})}),(0,I.jsx)(N.Z.Item,{name:"planMark",label:(0,I.jsx)(y.Z,{id:"planMark"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})}],children:(0,I.jsx)(k.Z.TextArea,{})}),(0,I.jsx)(N.Z.Item,{name:"duration",label:(0,I.jsx)(y.Z,{id:"duration"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})}],children:(0,I.jsx)(A.Z,{className:"w-100"})}),(0,I.jsx)(N.Z.Item,{name:"studentActivity",label:(0,I.jsx)(y.Z,{id:"studentActivity"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})}],children:(0,I.jsx)(P(),{className:"border rounded-2",language:"en"})}),(0,I.jsx)(N.Z.Item,{name:"teacherActivity",label:(0,I.jsx)(y.Z,{id:"teacherActivity"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})}],children:(0,I.jsx)(P(),{className:"border rounded-2",language:"en"})}),(0,I.jsx)(N.Z.Item,{name:"studentAssignment",label:(0,I.jsx)(y.Z,{id:"studentAssignment"}),rules:[{required:!0,message:(0,I.jsx)(y.Z,{id:"form.required"})}],children:(0,I.jsx)(P(),{className:"border rounded-2",language:"en"})})]})})})},S=t(59288),B=d.Z.confirm,C=(0,a.forwardRef)((function(e,n){var t,s,d=e.data,o=e.actions,m=e.handleOpen,x=e.onActionRowClick,p=e.permissions,h=(0,a.useState)(!1),f=(0,r.Z)(h,2),y=f[0],j=f[1],v=(0,a.useState)({x:0,y:0}),$=(0,r.Z)(v,2),N=$[0],Z=$[1],k=(0,a.useRef)(null),A=(0,g.UO)().id,w=(0,i.D)(b.mW,{refetchQueries:[{query:b.Bf,variables:{plan:A}}],onCompleted:function(e){c.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430")}}),P=(0,r.Z)(w,1)[0];return(0,a.useEffect)((function(){function e(){j(!1)}var n=function(n){k.current&&!k.current.contains(n.target)&&e&&e()};return document.addEventListener("contextmenu",n,!0),document.addEventListener("click",n,!0),function(){document.removeEventListener("contextmenu",n,!0),document.addEventListener("click",n,!0)}}),[]),(0,I.jsxs)("div",{className:"bg-white rounded-4 p-2",ref:n,children:[(0,I.jsxs)("div",{className:"flex flex-row justify-end",children:[(0,I.jsx)("h4",{className:"text-emind font-bold mr-40",children:"\u0411\u0430\u0442\u0430\u043b\u0441\u0430\u043d: "}),(0,I.jsxs)("h4",{className:" text-emind font-bold",children:[null===(t=d.planById.approvedBy)||void 0===t?void 0:t.familyName," ",null===(s=d.planById.approvedBy)||void 0===s?void 0:s.name]})]}),(0,I.jsx)("div",{children:(0,I.jsx)("h4",{className:"text-center text-emind font-bold",children:d.planById.title})}),(0,I.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,I.jsx)("div",{className:"col-span-3",children:(0,I.jsxs)("p",{className:"font-bold text-emind",children:["\u0425\u0418\u0427\u042d\u042d\u041b\u0418\u0419\u041d \u041d\u042d\u0420:  ",d.planById.subject.subject," "]})}),(0,I.jsx)("div",{children:(0,I.jsxs)("p",{className:"font-bold text-emind",children:["\u0410\u041d\u0413\u0418 : ",d.planById.section.classes.classes," ",d.planById.section.section]})}),(0,I.jsx)("div",{className:"text-end",children:(0,I.jsxs)("p",{className:"font-bold text-emind",children:[d.planById.duration,"\u043c\u0438\u043d"]})}),(0,I.jsx)("div",{className:"text-end",children:(0,I.jsx)("p",{className:"font-bold text-emind",children:d.planById.schoolyear.schoolyear})})]}),(0,I.jsx)("div",{className:"flex flex-col",children:(0,I.jsx)("div",{className:"sm:-mx-6 lg:-mx-8",children:(0,I.jsx)("div",{className:"py-2 inline-block min-w-full print:block sm:px-6 lg:px-8",children:(0,I.jsx)("div",{className:"",children:(0,I.jsx)("table",{className:"min-w-full table-fixed border text-center print:break-before-all",children:(0,I.jsxs)("tbody",{children:[(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",colSpan:2,children:"\u0411\u04af\u043b\u044d\u0433 \u0441\u044d\u0434\u044d\u0432"}),(0,I.jsx)("td",{className:"text-sm text-left text-gray-900 font-light px-6 py-4  border-r",colSpan:5,children:d.planById.topic})]}),(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",colSpan:2,children:"\u042d\u044d\u043b\u0436\u0438\u0442 \u0445\u0438\u0447\u044d\u044d\u043b\u0438\u0439\u043d \u0441\u044d\u0434\u044d\u0432"}),(0,I.jsx)("td",{className:"text-sm text-left text-gray-900 font-light px-6 py-4  border-r",colSpan:5,children:d.planById.subjectTopic})]}),(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",colSpan:2,children:"\u0421\u0443\u0440\u0430\u043b\u0446\u0430\u0445\u0443\u0439\u043d \u0437\u043e\u0440\u0438\u043b\u0442"}),(0,I.jsx)("td",{className:"text-sm text-left text-gray-900 font-light px-6 py-4  border-r",colSpan:5,children:d.planById.intention})]}),(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",colSpan:2,children:"\u0422\u04af\u043b\u0445\u04af\u04af\u0440 \u04af\u0433"}),(0,I.jsx)("td",{className:"text-sm text-left text-gray-900 font-light px-6 py-4  border-r",colSpan:5,children:d.planById.keyword})]}),(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",colSpan:2,children:"\u0425\u044d\u0440\u044d\u0433\u043b\u044d\u0433\u0434\u044d\u0445\u04af\u04af\u043d"}),(0,I.jsx)("td",{className:"text-sm text-left text-gray-900 font-light px-6 py-4  border-r",colSpan:5,children:d.planById.consumables})]}),(0,I.jsxs)("tr",{className:"border-b",children:[(0,I.jsx)("td",{className:"px-6 py-4  text-sm font-bold text-gray-900 border-r",children:"\u04ae\u0435 \u0448\u0430\u0442"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4  border-r",children:"\u0421\u0443\u0440\u0433\u0430\u043b\u0442\u044b\u043d \u0430\u0440\u0433\u0430"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4  border-r",children:"\u0411\u0430\u0433\u0448\u0438\u0439\u043d \u04af\u0439\u043b \u0430\u0436\u0438\u043b\u043b\u0430\u0433\u0430\u0430"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4  border-r",children:"\u0421\u0443\u0440\u0430\u043b\u0446\u0430\u0433\u0447\u0438\u0439\u043d \u04af\u0439\u043b \u0430\u0436\u0438\u043b\u043b\u0430\u0433\u0430\u0430"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4  border-r",children:"\u0425\u0443\u0433\u0430\u0446\u0430\u0430"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4  border-r",children:"\u0421\u0443\u0440\u0430\u043b\u0446\u0430\u0433\u0447\u0438\u0439\u043d \u0431\u0438\u0435 \u0434\u0430\u0430\u043d \u0433\u04af\u0439\u0446\u044d\u0442\u0433\u044d\u0445 \u0430\u0436\u043b\u0443\u0443\u0434, \u0433\u044d\u0440\u0438\u0439\u043d \u0434\u0430\u0430\u043b\u0433\u0430\u0432\u0430\u0440"}),(0,I.jsx)("td",{className:"text-sm text-gray-900 font-bold px-6 py-4 ",children:"\u04ae\u043d\u044d\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u044d\u043b\u0431\u044d\u0440"})]}),null===o||void 0===o?void 0:o.allPlanActionsByPlan.map((function(e,n){return(0,I.jsxs)(a.Fragment,{children:[(0,I.jsxs)("tr",{className:"border-b hover:cursor-pointer break-after-auto break-inside-avoid",onContextMenuCapture:function(e){e.preventDefault(),p.delete&&(j(!0),Z({x:e.pageX,y:e.pageY}))},onClick:function(){return x(e)},children:[(0,I.jsx)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",children:e.name}),(0,I.jsx)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",children:e.teachingMethod}),(0,I.jsx)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",dangerouslySetInnerHTML:{__html:e.teacherActivity}}),(0,I.jsx)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",dangerouslySetInnerHTML:{__html:e.studentActivity}}),(0,I.jsxs)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",children:[e.duration," \u043c\u0438\u043d"]}),(0,I.jsx)("td",{className:"text-sm text-gray-900 border-r print:break-before-auto",dangerouslySetInnerHTML:{__html:e.studentAssignment}}),(0,I.jsx)("td",{className:"text-sm text-gray-900 ",children:e.planMark})]},n),y&&(0,I.jsx)("div",{ref:k,className:"absolute z-10",style:{top:N.y,left:N.x},children:(0,I.jsx)("div",{className:"bg-white w-60 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500",children:(0,I.jsxs)("div",{className:"flex py-1 px-2 rounded hover:bg-background hover:cursor-pointer",onClick:function(){return function(e){B({title:"\u0423\u0441\u0442\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0423\u0441\u0442\u0433\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){P({variables:{id:e}})}})}(e.id)},children:[(0,I.jsx)("div",{className:"w-8",children:(0,I.jsx)(u.Z,{twoToneColor:"#eb2f96"},"delete")}),(0,I.jsx)("div",{children:"\u0423\u0441\u0442\u0433\u0430\u0445"})]})})})]},n)})),p.create&&(0,I.jsx)("tr",{className:"bg-white border-b print:hidden",children:(0,I.jsx)("td",{className:"px-6 py-4  font-bold text-gray-900 border-r",colSpan:7,children:(0,I.jsx)(l,{className:"h-6 m-auto hover:cursor-pointer",onClick:function(){return m()}})})})]})})})})})}),(0,I.jsxs)("div",{className:"flex justify-center",children:[(0,I.jsx)("p",{className:"mr-40 text-black",children:"\u0422\u04e9\u043b\u04e9\u0432\u043b\u04e9\u0433\u04e9\u04e9 \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u0443\u0443\u043b\u0441\u0430\u043d \u0431\u0430\u0433\u0448:"}),(0,I.jsxs)("p",{className:"text-black",children:[d.planById.teacher.familyName," ",d.planById.teacher.name]})]})]})})),D=function(){var e=(0,g.UO)().id,n=(0,a.useRef)(),t=(0,a.useState)({}),l=(0,r.Z)(t,2),d=l[0],c=l[1],u=(0,s.a)(b.wP,{variables:{id:e}}),$=u.data,N=u.loading,Z=u.error,k=u.refetch,A=(0,s.a)(b.Bf,{variables:{plan:e}}).data,w=(0,i.D)(b.wc,{onCompleted:function(e){k()}}),P=(0,r.Z)(w,1)[0],B={create:(0,S.C)("add_plan"),edit:(0,S.C)("change_plan"),delete:(0,S.C)("delete_plan"),approve_plan:(0,S.C)("approve_plan")},D=(0,a.useRef)();var T=(0,v.useReactToPrint)({content:function(){return n.current}});return N?(0,I.jsx)(f.Z,{cover:"content"}):Z?(0,I.jsx)("section",{className:"bg-white ",children:(0,I.jsx)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",children:(0,I.jsxs)("div",{className:"mx-auto max-w-screen-sm text-center",children:[(0,I.jsx)("h1",{className:"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-emind-600 ",children:"404"}),(0,I.jsx)("p",{className:"mb-4 text-3xl tracking-tight font-bold text-emind-600 md:text-4xl ",children:"\u0425\u0443\u0443\u0434\u0430\u0441 \u043e\u043b\u0434\u0441\u043e\u043d\u0433\u04af\u0439."}),(0,I.jsx)("p",{className:"mb-4 text-lg font-light text-gray-500 ",children:"\u0423\u0443\u0447\u043b\u0430\u0430\u0440\u0430\u0439, \u0431\u0438\u0434 \u044d\u043d\u044d \u0445\u0443\u0443\u0434\u0441\u044b\u0433 \u043e\u043b\u0436 \u0447\u0430\u0434\u0441\u0430\u043d\u0433\u04af\u0439. "}),(0,I.jsx)(j.rU,{to:"/app/plan",className:"inline-flex bg-emind text-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4",children:"\u0411\u0443\u0446\u0430\u0445"})]})})}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.Z,{ref:D,children:(0,I.jsx)(M,{selectedData:d,closeModal:function(){D.current.handleCancel()}})}),(0,I.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,I.jsx)("div",{children:(0,I.jsx)(j.rU,{to:"/app/plan",children:(0,I.jsxs)(o.Z,{type:"default",icon:(0,I.jsx)(m.Z,{}),children:[" ",(0,I.jsx)(y.Z,{id:"back"})," "]})})}),(0,I.jsxs)("div",{children:[!$.planById.approvedBy&&B.approve_plan&&(0,I.jsx)(o.Z,{className:"mr-4 bg-green-400 border-green-200",onClick:function(){P({variables:{plan:e}})},type:"primary",icon:(0,I.jsx)(x.Z,{}),children:" \u0411\u0430\u0442\u043b\u0430\u0445 "}),(0,I.jsxs)(o.Z,{onClick:T,type:"primary",icon:(0,I.jsx)(p.Z,{}),children:[" ",(0,I.jsx)(y.Z,{id:"print"})," "]})]})]}),(0,I.jsx)("div",{ref:n,children:(0,I.jsx)(C,{data:$,permissions:B,actions:A,handleOpen:function(){B.create&&(c({}),D.current.handleOpen())},onActionRowClick:function(e){B.edit&&(c(e),D.current.handleOpen())}})})]})}},82464:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),a=t(72791),i={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M292.7 840h438.6l24.2-512h-487z",fill:n}},{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z",fill:e}}]}},name:"delete",theme:"twotone"},s=t(8711),l=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="DeleteTwoTone";var d=a.forwardRef(l)},53834:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),a=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},name:"rollback",theme:"outlined"},s=t(8711),l=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="RollbackOutlined";var d=a.forwardRef(l)},96096:function(e,n,t){t.d(n,{GL:function(){return s},fk:function(){return l},jD:function(){return i}});var r,a=t(14937),i=function(){return(0,a.Z)()&&window.document.documentElement},s=function(e){if(i()){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some((function(e){return e in t.style}))}return!1},l=function(){if(!i())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}}}]);
//# sourceMappingURL=2946.a5bb2369.chunk.js.map