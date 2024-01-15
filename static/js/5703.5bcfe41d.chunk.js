"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[5703],{82259:function(e,t,n){n.d(t,{Gr:function(){return N},Nb:function(){return g},XA:function(){return C},Xk:function(){return D},Y5:function(){return Y},YK:function(){return Z},Z_:function(){return y},aY:function(){return M},fG:function(){return S},hX:function(){return j},uG:function(){return b},vF:function(){return v},x:function(){return I}});var s,r,a,i,o,l,c,d,u,m,$,h,x,f=n(30168),p=n(27570),g=(0,p.Ps)(s||(s=(0,f.Z)(["\n    mutation updateSubject ($credit: String, $part: String, $id: ID, $school: Int, $subSchool: Int, $subject: String, $subjectCode: String, $subjectMgl: String) {\n        updateSubject (credit: $credit id: $id, part: $part, school: $school, subSchool: $subSchool, subject: $subject, subjectCode: $subjectCode, subjectMgl: $subjectMgl) {\n            subject {\n                subject\n            }\n        }\n    }\n"]))),v=(0,p.Ps)(r||(r=(0,f.Z)(["\n    mutation updateSchool($id: ID, $name: String, $nameMgl: String){\n        updateSchool (id: $id, name: $name, nameMgl: $nameMgl){\n            school {\n                name\n                nameMgl\n            }\n        }\n    }\n"]))),j=(0,p.Ps)(a||(a=(0,f.Z)(["\n    mutation updateSubSchool($id: ID, $name: String, $nameMgl: String, $school: Int) {\n        updateSubSchool (id: $id, name: $name, nameMgl: $nameMgl, school: $school) {\n            subSchool {\n                name\n            }\n        }\n    }\n"]))),S=(0,p.Ps)(i||(i=(0,f.Z)(["\n    mutation updateProgram ($id: ID, $program: String, $programMgl: String, $programNumeric: String, $status: String, $maxStudentNum: Int, $degree: Int, \n                            $school: Int, $subSchool: Int) {\n        updateProgram (id: $id, program: $program, programMgl: $programMgl, programNumeric: $programNumeric, status: $status, maxStudentNum: $maxStudentNum, \n                        degree: $degree, school: $school, subSchool: $subSchool) {\n            program {\n                program\n            }\n        }\n    }\n"]))),b=(0,p.Ps)(o||(o=(0,f.Z)(["\n    mutation updateClasses($id: ID, $activity: Int, $classes: String, $classesMgl: String, $classesNumeric: String, $course: String, $degree: Int, $endCourse: String,\n                          $maxStudentNum: Int, $program: Int, $school: Int, $status: String, $subSchool: Int, $teacher: Int) {\n        updateClasses(id: $id, activity: $activity, classes: $classes, classesMgl: $classesMgl, classesNumeric: $classesNumeric, course: $course, degree: $degree,\n                    endCourse: $endCourse, maxStudentNum: $maxStudentNum, program: $program, school: $school, status: $status, subSchool: $subSchool, teacher: $teacher) {\n            classes {\n                classes\n            }\n        }\n    }\n"]))),y=(0,p.Ps)(l||(l=(0,f.Z)(["\n    mutation updateSection($id: ID, $classes: Int, $program: Int, $school: Int, $subSchool: Int, $section: String) {\n        updateSection (id: $id, classes: $classes, program: $program, school: $school, subSchool: $subSchool, section: $section) {\n            section {\n                id\n            }\n        }\n    }\n"]))),N=(0,p.Ps)(c||(c=(0,f.Z)(["\n    mutation updateTeacher ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, \n                            $familyName: String, $id: ID!, $joinBefore: String, $joinDate: String, $name: String, $phone: String, $phone2: String, $registerNo: String, \n                            $school: Int, $sex: String, $status: Int, $subSchool: Int, $teacherCode: String, $username: String, $email: String) {\n        updateTeacher (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate,\n                        familyName: $familyName, id: $id, joinBefore: $joinBefore, joinDate: $joinDate, name: $name, phone: $phone, phone2: $phone2, \n                        registerNo: $registerNo, school: $school, sex: $sex, status: $status, subSchool: $subSchool, \n                        teacherCode: $teacherCode, username: $username, email: $email) {\n            teacher {\n                id\n            }\n        }\n    }\n"]))),Z=(0,p.Ps)(d||(d=(0,f.Z)(["\n    mutation updateEmployee ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, $employeeCode: String, $sex: String, $status: Int, \n                             $familyName: String, $group: Int, $id: Int, $name: String, $phone: String, $phone2: String, $registerNo: String, $compartment: Int,\n                             $username: String, $email: String) {\n        updateEmployee (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate, employeeCode: $employeeCode, sex: $sex, status: $status,\n                        familyName: $familyName, group: $group, id: $id, name: $name, phone: $phone, phone2: $phone2, registerNo: $registerNo, compartment: $compartment,\n                        username: $username, email: $email) {\n                            employee{\n                                id\n                            }\n                        }\n                    }\n"]))),D=(0,p.Ps)(u||(u=(0,f.Z)(["\n    mutation updateParent ($address: String, $addressLive: String, $familyName: String, $id: ID, $name: String, $phone: String, $profession: String, $student: Int) {\n        updateParent (address: $address, addressLive: $addressLive, familyName: $familyName, id: $id, name: $name, phone: $phone, profession: $profession, student: $student) {\n            parent {\n                name\n            }\n        }\n    }\n"]))),Y=(0,p.Ps)(m||(m=(0,f.Z)(["\n    mutation transferStudent ($activity: Int, $classes: Int, $classtime: Int, $description: String, $docDate: String, $docNum: String, $program: Int, $school: Int, \n                                $section: Int, $status: Int, $statusExtra: Int, $student: Int) {\n        transferStudent (activity: $activity, classes: $classes, classtime: $classtime, description: $description, docDate: $docDate, docNum: $docNum, program: $program, \n                        school: $school, section: $section, status: $status, statusExtra: $statusExtra, student: $student) {\n            transfer {\n                id\n            }\n        }\n    }\n"]))),I=(0,p.Ps)($||($=(0,f.Z)(["\n    mutation updateStudent (\n        $address: String\n        $birthCity: Int\n        $birthDistrict: Int\n        $birthdate: String\n        $degree: Int\n        $email: String\n        $familyName: String\n        $id: ID\n        $joinBefore: String\n        $joinDate: String\n        $joinSchoolyear: String\n        $name: String\n        $phone: String\n        $phone2: String\n        $registerNo: String\n        $sex: String\n        $studentCode: String\n        $username: String\n    ) {\n        updateStudent (\n            address: $address\n            birthCity: $birthCity\n            birthDistrict: $birthDistrict\n            birthdate: $birthdate\n            degree: $degree\n            email: $email\n            familyName: $familyName\n            id: $id\n            joinBefore: $joinBefore\n            joinDate: $joinDate\n            joinSchoolyear: $joinSchoolyear\n            name: $name\n            phone: $phone\n            phone2: $phone2\n            registerNo: $registerNo\n            sex: $sex\n            studentCode: $studentCode\n            username: $username\n        ) {\n            student {\n                id\n            }\n        }    \n    }\n"]))),C=(0,p.Ps)(h||(h=(0,f.Z)(["\n    mutation updateEventType ($color: String, $id: ID, $name: String) {\n        updateEventType (color: $color, id: $id, name: $name) {\n            eventType {\n                name\n            }\n        }\n    }\n"]))),M=(0,p.Ps)(x||(x=(0,f.Z)(["\n    mutation updateEvent ($content: String, $description: String, $endAt: String, $eventType: Int, $id: ID, $startAt: String, $title: String) {\n        updateEvent (content: $content, description: $description, endAt: $endAt, eventType: $eventType, id: $id, startAt: $startAt, title: $title) {\n            event {\n                title\n            }\n        }\n    }\n"])))},65703:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var s=n(72791),r=n(29439),a=n(20003),i=n(22949),o=n(50419),l=n(75594),c=n(66871),d=n(87309),u=n(72426),m=n.n(u),$=n(31549),h=n(41920),x=n(82630),f=n(96578),p=n(84376),g=n(38937),v=n(49389),j=n(11561),S=n(73332),b=n(20077),y=n(82259),N=n(80184),Z=i.Z.Option,D=v.Z.TextArea,Y=j.Z.RangePicker,I=function(e){var t=e.visible,n=e.cancel,c=e.refetch,u=e.allEventTypes,$=e.formType,h=e.event,f=void 0===h?{}:h,g=S.Z.useForm(),j=(0,r.Z)(g,1)[0],I=(0,p.D)(b.Gn,{onCompleted:function(e){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),c(),n()}}),C=(0,r.Z)(I,2),M=C[0],w=C[1].loading,T=(0,p.D)(y.aY,{onCompleted:function(e){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),c(),n()}}),k=(0,r.Z)(T,2),E=k[0],P=k[1].loading;(0,s.useEffect)((function(){f?function(){var e,t={title:f.title,description:f.description,content:f.content,eventType:null===(e=f.eventType)||void 0===e?void 0:e.id,dates:[m().utc(f.startAt),m().utc(f.endAt)]};j.setFieldsValue(t)}():j.resetFields()}),[f,j]);return(0,N.jsx)(a.Z,{visible:t,footer:null,destroyOnClose:!0,onCancel:n,forceRender:!0,children:(0,N.jsxs)(S.Z,{layout:"vertical",name:"event-form",id:"event-form",form:j,preserve:!1,onFinish:function(e){e.dates.map((function(t,n){return 0===n?e.startAt=m().utc(t).format("YYYY-MM-DD HH:mm"):e.endAt=m().utc(t).format("YYYY-MM-DD HH:mm")})),e.hasOwnProperty("endAt")&&("edit"===$?(e.id=f.id,E({variables:e})):M({variables:e}))},children:[(0,N.jsx)(S.Z.Item,{name:"title",label:(0,N.jsx)(x.Z,{id:"title"}),rules:[{required:!0,message:(0,N.jsx)(x.Z,{id:"form.required"})}],children:(0,N.jsx)(v.Z,{})}),(0,N.jsx)(S.Z.Item,{name:"eventType",label:(0,N.jsx)(x.Z,{id:"event-type"}),rules:[{required:!0,message:(0,N.jsx)(x.Z,{id:"form.required"})}],children:(0,N.jsx)(i.Z,{children:null===u||void 0===u?void 0:u.map((function(e,t){return(0,N.jsxs)(Z,{value:e.id,children:[(0,N.jsx)(l.Z,{color:e.color}),(0,N.jsx)("span",{className:"text-capitalize font-weight-semibold",children:e.name})]},t)}))})}),(0,N.jsx)(S.Z.Item,{name:"description",label:(0,N.jsx)(x.Z,{id:"description"}),rules:[{required:!0,message:(0,N.jsx)(x.Z,{id:"form.required"})}],children:(0,N.jsx)(D,{rows:4})}),(0,N.jsx)(S.Z.Item,{name:"content",label:(0,N.jsx)(x.Z,{id:"content"}),rules:[{required:!0,message:(0,N.jsx)(x.Z,{id:"form.required"})}],children:(0,N.jsx)(D,{rows:4})}),(0,N.jsx)(S.Z.Item,{name:"dates",label:(0,N.jsx)(x.Z,{id:"start_end_date"}),rules:[{required:!0,message:(0,N.jsx)(x.Z,{id:"form.required"})}],children:(0,N.jsx)(Y,{className:"w-100",showTime:!0})}),(0,N.jsx)(S.Z.Item,{className:"text-right mb-0",children:(0,N.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:w||P,children:(0,N.jsx)(x.Z,{id:"main.okText"})})})]})})},C=n(9168),M=n(36795),w=n(82464),T=n(74508),k=function(e){var t,n=e.data,s=e.canDelete,r=e.onDelete,a=e.onSingleEventSelect,i=e.canEdit;return(0,N.jsxs)("div",{className:"flex flex-row justify-between mt-2 hover:cursor-pointer hover:-translate-y-1 hover:scale-102 duration-300",children:[(0,N.jsx)("div",{className:"w-[5%] rounded-l-6",style:{background:n.eventType.color}}),(0,N.jsxs)("div",{className:"px-4 w-full",children:[(0,N.jsx)("p",{className:"text-base font-medium text-slate-600 dark:text-navy-100",children:n.title}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("span",{className:"flex items-center",children:[(0,N.jsx)(T.Z,{className:"h-4 text-emind mr-2"}),m().utc(n.startAt).format("HH:mm")," - ",m().utc(n.endAt).format("HH:mm")]}),(0,N.jsx)("p",{className:"font-normal text-gray-700 text-sm mb-2",children:n.description}),(0,N.jsx)("p",{className:"font-normal text-gray-700 text-sm mb-4",children:n.content})]}),s||i?(t=n,(0,N.jsxs)("div",{className:"flex justify-between p-2 border-t border-gray-light",children:[!0===i&&(0,N.jsx)(d.Z,{onClick:function(){return a(n)},type:"text",shape:"circle",icon:(0,N.jsx)(M.Z,{twoToneColor:"#ffdb00"})}),!0===s&&(0,N.jsx)(d.Z,{onClick:function(){return r(t.id)},type:"text",shape:"circle",icon:(0,N.jsx)(w.Z,{twoToneColor:"#f42f2f"})})]})):null]})]})},E=n(79335),P=function(e){var t=e.list,n=e.onDelete,a=e.canDelete,i=e.canEdit,o=e.allEventTypes,l=e.refetch,c=(0,s.useState)(!1),d=(0,r.Z)(c,2),u=d[0],m=d[1],$=(0,s.useState)({}),h=(0,r.Z)($,2),x=h[0],f=h[1],p=t.reduce((function(e,t){var n=t.startAt.split("T")[0];return e[n]||(e[n]=[]),e[n].push(t),e}),{}),g=Object.keys(p).map((function(e){return{date:e,events:p[e]}}));g.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));var v=function(e){m(!0),f(e)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(E.ZP,{className:"h-5/6",children:g.map((function(e,t){return(0,N.jsxs)("div",{className:"p-4 hidden md:block",children:[(0,N.jsxs)("h4",{children:[(0,N.jsx)(C.Z,{}),(0,N.jsx)("span",{className:"ml-2",children:e.date})]}),e.events.map((function(e,t){return(0,N.jsx)(k,{data:e,canDelete:a,canEdit:i,onDelete:n,onSingleEventSelect:v},t)}))]},t)}))}),(0,N.jsx)(I,{formType:"edit",refetch:l,cancel:function(){m(!1)},visible:u,allEventTypes:o,event:x,canEdit:i})]})},A=function(e){var t=e.visible,n=e.cancel,s=e.selectedDate,r=e.datas,i=e.canDelete,o=e.onDelete;return(0,N.jsx)(a.Z,{title:s,visible:t,footer:null,destroyOnClose:!0,onCancel:n,children:r.map((function(e,t){return(0,N.jsx)(k,{data:e,canDelete:i,onDelete:o},t)}))})},q=n(64856),B="MMMM DD",O=a.Z.confirm,H=i.Z.Option;function F(e,t){for(var n=m()(e+"-"+t,"YYYY-MM").daysInMonth(),s=[],r=1;r<=n;r++){var a=m()(e+"-"+t+"-"+r).date(r);s.push(a)}return s}var _=function(e){var t=e.permissions,n=(0,s.useState)([]),a=(0,r.Z)(n,2),u=a[0],v=a[1],j=(0,s.useState)(!1),S=(0,r.Z)(j,2),b=S[0],y=S[1],Z=(0,s.useState)(!1),D=(0,r.Z)(Z,2),Y=D[0],C=D[1],M=(0,s.useState)(),w=(0,r.Z)(M,2),T=w[0],k=w[1],E=(0,s.useState)([]),_=(0,r.Z)(E,2),G=_[0],L=_[1],V=(0,s.useState)(F(2023,10)),X=(0,r.Z)(V,2),K=X[0],R=X[1],z=(0,s.useState)(m()().format("YYYY-MM-DD")),J=(0,r.Z)(z,2),W=J[0],Q=J[1],U=(0,f.a)(h.Be).data,ee=(0,f.a)(h.Ko,{onCompleted:function(e){v(e.allEvents)}}),te=ee.loading,ne=ee.refetch,se=(0,f.a)(h.q,{variables:{date:W}}).data,re=(0,p.D)(q.Jk,{onCompleted:function(e){C(!1),y(!1),o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0443\u0441\u0442\u043b\u0430\u0430!"),ne()}}),ae=(0,r.Z)(re,1)[0],ie=function(e){var t=function(e){var t=[];return null===se||void 0===se||se.allEventsByDate.forEach((function(n){m()(n.startAt).format(B)===e&&t.push(n)})),t.sort((function(e,t){return new Date(e.startAt)-new Date(t.startAt)})),t}(e.format(B));return(0,N.jsx)("ul",{className:"calendar-event",children:t.map((function(e,t){return(0,N.jsx)("li",{children:(0,N.jsx)(l.Z,{color:e.eventType.color,text:e.title})},"".concat(e.title,"-").concat(t))}))})},oe=function(e){O({title:"\u0423\u0441\u0442\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0423\u0441\u0442\u0433\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){ae({variables:{id:e}})}})},le=function(){y(!1),C(!1)};function ce(e){for(var t=[],n=1;n<e;n++)t.push((0,N.jsx)("div",{},n));return t}return(0,s.useEffect)((function(){R(F(m()(W).format("YYYY"),m()(W).format("MM")))}),[W]),te?(0,N.jsx)(g.Z,{cover:"content"}):(0,N.jsxs)(c.Z,{className:"calendar",children:[(0,N.jsxs)("div",{className:"justify-between md:flex",children:[(0,N.jsx)("div",{className:"hidden md:block"}),(0,N.jsx)("div",{className:""})]}),(0,N.jsxs)("div",{className:"flex flex-col md:flex-row gap-3",children:[(0,N.jsxs)("div",{className:"md:basis-1/4",children:[(0,N.jsx)("h2",{className:"mb-4",children:(0,N.jsx)(x.Z,{id:"event"})}),!0===t.create&&(0,N.jsxs)(d.Z,{onClick:function(){return y(!0)},type:"primary",icon:(0,N.jsx)($.Z,{}),block:!0,children:[" ",(0,N.jsx)(x.Z,{id:"add_new"})," "]}),(0,N.jsx)("div",{className:"flex flex-col mt-4",children:null===U||void 0===U?void 0:U.allEventTypes.map((function(e,t){return(0,N.jsx)(l.Z,{className:"mr-4",color:e.color,text:e.name},t)}))}),(0,N.jsx)(P,{canDelete:t.destroy,canEdit:t.edit,list:u,onDelete:oe,allEventTypes:null===U||void 0===U?void 0:U.allEventTypes,refetch:ne})]}),(0,N.jsx)("div",{className:"md:basis-3/4",children:(0,N.jsx)("div",{className:"text-gray-700",children:(0,N.jsx)("div",{className:"flex flex-grow w-full h-full overflow-auto",children:(0,N.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,N.jsxs)("div",{className:"flex items-center mt-4",children:[(0,N.jsxs)("div",{className:"flex ml-6 space-x-4",children:[(0,N.jsxs)(i.Z,{onSelect:function(e){Q((function(t){return m()(t).set("year",e).format("YYYY-MM-DD")}))},className:"w-28",defaultValue:m()(W).format("YYYY"),children:[(0,N.jsx)(H,{value:m()().format("YYYY"),children:m()().format("YYYY")}),(0,N.jsx)(H,{value:m()().add(1,"years").format("YYYY"),children:m()().add(1,"years").format("YYYY")})]}),(0,N.jsxs)(i.Z,{onSelect:function(e){Q((function(t){return m()(t).set("month",e-1).format("YYYY-MM-DD")}))},className:"w-28",defaultValue:m()(W).format("M"),children:[(0,N.jsx)(H,{value:"1",children:"1 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"2",children:"2 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"3",children:"3 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"4",children:"4 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"5",children:"5 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"6",children:"6 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"7",children:"7 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"8",children:"8 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"9",children:"9 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"10",children:"10 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"11",children:"11 \u0441\u0430\u0440"}),(0,N.jsx)(H,{value:"12",children:"12 \u0441\u0430\u0440"})]})]}),(0,N.jsx)("h2",{className:"ml-2 text-xl font-bold leading-none",children:m()(W).format("YYYY-MMMM")})]}),(0,N.jsxs)("div",{className:"grid grid-cols-7 my-4",children:[(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(1)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(2)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(3)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(4)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(5)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(6)}),(0,N.jsx)("div",{className:"pl-1 text-sm text-slate-400 font-bold text-center ",children:m().weekdays(7)})]}),(0,N.jsx)("div",{className:"grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-1 rounded-2 pt-px mt-1 bg-background",children:K.map((function(e,t){return(0,N.jsxs)(s.Fragment,{children:[0===t&&ce(m()(e).isoWeekday()),(0,N.jsxs)("div",{className:"relative flex flex-col bg-white h-30 m-1 rounded-2 group hover:cursor-pointer",onClick:function(){return function(e){var t=m()(e).format(B),n=[];null===se||void 0===se||se.allEventsByDate.filter((function(t){return m()(t.startAt).format("YYYY-MM-DD")===e.format("YYYY-MM-DD")})).map((function(e){return n.push(e)})),n.sort((function(e,t){return new Date(e.startAt)-new Date(t.startAt)})),L(n),k(t),C(!0)}(e)},children:[(0,N.jsx)("span",{className:"mx-2 my-1 text-lg font-bold",children:m()(e).format("DD")}),ie(e)]})]},t)}))})]})})})})]}),(0,N.jsx)(A,{canDelete:t.destroy,onDelete:oe,selectedDate:T,visible:Y,cancel:le,datas:G}),(0,N.jsx)(I,{refetch:ne,visible:b,cancel:le,allEventTypes:null===U||void 0===U?void 0:U.allEventTypes})]})},G=n(59288),L=function(e){var t={create:(0,G.C)("add_event"),edit:(0,G.C)("change_event"),destroy:(0,G.C)("delete_event")};return Object.values(t).indexOf("loading")>-1?(0,N.jsx)(g.Z,{cover:"content"}):(0,N.jsx)(_,{permissions:t})}}}]);
//# sourceMappingURL=5703.5bcfe41d.chunk.js.map