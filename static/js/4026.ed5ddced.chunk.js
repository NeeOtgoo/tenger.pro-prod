"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[4026],{74021:function(e,t,n){var r=n(29439),s=n(72791),i=n(66871),o=n(49389),a=n(87309),d=n(59432),c=n(11730),l=n(31549),u=n(82630),$=n(68470),m=n(80184);t.Z=function(e){var t=e.fetchData,n=e.loading,h=e.columns,g=e.data,b=e.permissions,S=e.showModal,j=(0,s.useState)(""),p=(0,r.Z)(j,2),f=(p[0],p[1]);return(0,m.jsxs)(i.Z,{children:[(0,m.jsxs)($.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[(0,m.jsx)($.Z,{className:"mb-1",mobileFlex:!1,children:(0,m.jsx)("div",{className:"mr-md-3 mb-3",children:(0,m.jsx)(o.Z,{placeholder:"\u0425\u0430\u0439\u0445",prefix:(0,m.jsx)(c.Z,{}),onChange:function(e){return function(e){var n=e.currentTarget.value;t({variables:{offset:0,limit:1e7,filter:n,program:0}}),f(n)}(e)}})})}),!0===b.create&&(0,m.jsx)("div",{className:"mr-md-3 mb-3",children:(0,m.jsxs)(a.Z,{onClick:S,type:"primary",icon:(0,m.jsx)(l.Z,{}),block:!0,children:[" ",(0,m.jsx)(u.Z,{id:"add_new"})]})})]}),(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsx)(d.Z,{size:"small",columns:h,dataSource:g,rowKey:"id",bordered:!0,loading:n})})]})}},68470:function(e,t,n){n(72791);var r=n(80184),s=function(e){var t=e.children,n=e.className,s=e.alignItems,i=e.justifyContent,o=e.mobileFlex,a=e.flexDirection;return(0,r.jsx)("div",{className:"".concat(o?"d-flex":"d-md-flex"," ").concat(n," ").concat(a?"flex-"+a:""," ").concat(s?"align-items-"+s:""," ").concat(i?"justify-content-"+i:""),children:t})};s.defaultProps={mobileFlex:!0,flexDirection:"row",className:""},t.Z=s},82259:function(e,t,n){n.d(t,{Gr:function(){return y},Nb:function(){return j},XA:function(){return P},Xk:function(){return C},Y5:function(){return N},YK:function(){return v},Z_:function(){return I},aY:function(){return T},fG:function(){return x},hX:function(){return f},uG:function(){return Z},vF:function(){return p},x:function(){return D}});var r,s,i,o,a,d,c,l,u,$,m,h,g,b=n(30168),S=n(27570),j=(0,S.Ps)(r||(r=(0,b.Z)(["\n    mutation updateSubject ($credit: String, $part: String, $id: ID, $school: Int, $subSchool: Int, $subject: String, $subjectCode: String, $subjectMgl: String) {\n        updateSubject (credit: $credit id: $id, part: $part, school: $school, subSchool: $subSchool, subject: $subject, subjectCode: $subjectCode, subjectMgl: $subjectMgl) {\n            subject {\n                subject\n            }\n        }\n    }\n"]))),p=(0,S.Ps)(s||(s=(0,b.Z)(["\n    mutation updateSchool($id: ID, $name: String, $nameMgl: String){\n        updateSchool (id: $id, name: $name, nameMgl: $nameMgl){\n            school {\n                name\n                nameMgl\n            }\n        }\n    }\n"]))),f=(0,S.Ps)(i||(i=(0,b.Z)(["\n    mutation updateSubSchool($id: ID, $name: String, $nameMgl: String, $school: Int) {\n        updateSubSchool (id: $id, name: $name, nameMgl: $nameMgl, school: $school) {\n            subSchool {\n                name\n            }\n        }\n    }\n"]))),x=(0,S.Ps)(o||(o=(0,b.Z)(["\n    mutation updateProgram ($id: ID, $program: String, $programMgl: String, $programNumeric: String, $status: String, $maxStudentNum: Int, $degree: Int, \n                            $school: Int, $subSchool: Int) {\n        updateProgram (id: $id, program: $program, programMgl: $programMgl, programNumeric: $programNumeric, status: $status, maxStudentNum: $maxStudentNum, \n                        degree: $degree, school: $school, subSchool: $subSchool) {\n            program {\n                program\n            }\n        }\n    }\n"]))),Z=(0,S.Ps)(a||(a=(0,b.Z)(["\n    mutation updateClasses($id: ID, $activity: Int, $classes: String, $classesMgl: String, $classesNumeric: String, $course: String, $degree: Int, $endCourse: String,\n                          $maxStudentNum: Int, $program: Int, $school: Int, $status: String, $subSchool: Int, $teacher: Int) {\n        updateClasses(id: $id, activity: $activity, classes: $classes, classesMgl: $classesMgl, classesNumeric: $classesNumeric, course: $course, degree: $degree,\n                    endCourse: $endCourse, maxStudentNum: $maxStudentNum, program: $program, school: $school, status: $status, subSchool: $subSchool, teacher: $teacher) {\n            classes {\n                classes\n            }\n        }\n    }\n"]))),I=(0,S.Ps)(d||(d=(0,b.Z)(["\n    mutation updateSection($id: ID, $classes: Int, $program: Int, $school: Int, $subSchool: Int, $section: String) {\n        updateSection (id: $id, classes: $classes, program: $program, school: $school, subSchool: $subSchool, section: $section) {\n            section {\n                id\n            }\n        }\n    }\n"]))),y=(0,S.Ps)(c||(c=(0,b.Z)(["\n    mutation updateTeacher ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, \n                            $familyName: String, $id: ID!, $joinBefore: String, $joinDate: String, $name: String, $phone: String, $phone2: String, $registerNo: String, \n                            $school: Int, $sex: String, $status: Int, $subSchool: Int, $teacherCode: String, $username: String, $email: String) {\n        updateTeacher (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate,\n                        familyName: $familyName, id: $id, joinBefore: $joinBefore, joinDate: $joinDate, name: $name, phone: $phone, phone2: $phone2, \n                        registerNo: $registerNo, school: $school, sex: $sex, status: $status, subSchool: $subSchool, \n                        teacherCode: $teacherCode, username: $username, email: $email) {\n            teacher {\n                id\n            }\n        }\n    }\n"]))),v=(0,S.Ps)(l||(l=(0,b.Z)(["\n    mutation updateEmployee ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, $employeeCode: String, $sex: String, $status: Int, \n                             $familyName: String, $group: Int, $id: Int, $name: String, $phone: String, $phone2: String, $registerNo: String, $compartment: Int,\n                             $username: String, $email: String) {\n        updateEmployee (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate, employeeCode: $employeeCode, sex: $sex, status: $status,\n                        familyName: $familyName, group: $group, id: $id, name: $name, phone: $phone, phone2: $phone2, registerNo: $registerNo, compartment: $compartment,\n                        username: $username, email: $email) {\n                            employee{\n                                id\n                            }\n                        }\n                    }\n"]))),C=(0,S.Ps)(u||(u=(0,b.Z)(["\n    mutation updateParent ($address: String, $addressLive: String, $familyName: String, $id: ID, $name: String, $phone: String, $profession: String, $student: Int) {\n        updateParent (address: $address, addressLive: $addressLive, familyName: $familyName, id: $id, name: $name, phone: $phone, profession: $profession, student: $student) {\n            parent {\n                name\n            }\n        }\n    }\n"]))),N=(0,S.Ps)($||($=(0,b.Z)(["\n    mutation transferStudent ($activity: Int, $classes: Int, $classtime: Int, $description: String, $docDate: String, $docNum: String, $program: Int, $school: Int, \n                                $section: Int, $status: Int, $statusExtra: Int, $student: Int) {\n        transferStudent (activity: $activity, classes: $classes, classtime: $classtime, description: $description, docDate: $docDate, docNum: $docNum, program: $program, \n                        school: $school, section: $section, status: $status, statusExtra: $statusExtra, student: $student) {\n            transfer {\n                id\n            }\n        }\n    }\n"]))),D=(0,S.Ps)(m||(m=(0,b.Z)(["\n    mutation updateStudent (\n        $address: String\n        $birthCity: Int\n        $birthDistrict: Int\n        $birthdate: String\n        $degree: Int\n        $email: String\n        $familyName: String\n        $id: ID\n        $joinBefore: String\n        $joinDate: String\n        $joinSchoolyear: String\n        $name: String\n        $phone: String\n        $phone2: String\n        $registerNo: String\n        $sex: String\n        $studentCode: String\n        $username: String\n    ) {\n        updateStudent (\n            address: $address\n            birthCity: $birthCity\n            birthDistrict: $birthDistrict\n            birthdate: $birthdate\n            degree: $degree\n            email: $email\n            familyName: $familyName\n            id: $id\n            joinBefore: $joinBefore\n            joinDate: $joinDate\n            joinSchoolyear: $joinSchoolyear\n            name: $name\n            phone: $phone\n            phone2: $phone2\n            registerNo: $registerNo\n            sex: $sex\n            studentCode: $studentCode\n            username: $username\n        ) {\n            student {\n                id\n            }\n        }    \n    }\n"]))),P=(0,S.Ps)(h||(h=(0,b.Z)(["\n    mutation updateEventType ($color: String, $id: ID, $name: String) {\n        updateEventType (color: $color, id: $id, name: $name) {\n            eventType {\n                name\n            }\n        }\n    }\n"]))),T=(0,S.Ps)(g||(g=(0,b.Z)(["\n    mutation updateEvent ($content: String, $description: String, $endAt: String, $eventType: Int, $id: ID, $startAt: String, $title: String) {\n        updateEvent (content: $content, description: $description, endAt: $endAt, eventType: $eventType, id: $id, startAt: $startAt, title: $title) {\n            event {\n                title\n            }\n        }\n    }\n"])))},54026:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(72791),s=n(29439),i=n(20003),o=n(50419),a=n(87309),d=n(36795),c=n(82464),l=n(2703),u=n(22949),$=n(73332),m=n(37083),h=n(49389),g=n(76835),b=n(84376),S=n(96578),j=n(41920),p=n(20077),f=n(82259),x=n(82630),Z=n(80184),I=u.Z.Option;var y=function(e){var t=e.editData,n=e.formType,i=e.setIsModalVisible,a=e.refetch,d=$.Z.useForm(),c=(0,s.Z)(d,1)[0],l=(0,b.D)(p.Lp,{refetchQueries:[j.TW,"allSubjects"],onCompleted:function(e){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),a(),i(!1),c.resetFields()}}),y=(0,s.Z)(l,2),v=y[0],C=y[1].loading,N=(0,b.D)(f.Nb,{onCompleted:function(e){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),a(),i(!1),c.resetFields()}}),D=(0,s.Z)(N,2),P=D[0],T=D[1].loading,M=(0,S.a)(j.Fm,{}).data,k=(0,S.a)(j.O8,{}).data,F=(0,r.useState)(""),w=(0,s.Z)(F,2),q=w[0],E=w[1],A=null,B=null;return q&&(A=q),A&&(B=null===k||void 0===k?void 0:k.allSubSchools.filter((function(e){return e.school.id===A})).map((function(e){return(0,Z.jsx)(I,{value:e.id,children:e.name},e.id)}))),(0,r.useEffect)((function(){if("edit"===n){var e={subject:t.subject,subjectMgl:t.subjectMgl,school:t.school.id,subSchool:t.subSchool.id,subjectCode:t.subjectCode,credit:t.credit,key:t.id,part:t.part};c.setFieldsValue(e),E(c.getFieldValue("school"))}else"create"===n&&c.resetFields()}),[t,c,n]),(0,Z.jsx)(m.Z,{spinning:C||T,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,Z.jsxs)($.Z,{id:"SubjectForm",layout:"vertical",form:c,name:"control-hooks",onFinish:function(e){"edit"===n?(e.id=t.id,P({variables:e})):v({variables:e})},children:[(0,Z.jsx)($.Z.Item,{name:"subject",label:(0,Z.jsx)(x.Z,{id:"subject"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)($.Z.Item,{name:"subjectMgl",label:(0,Z.jsx)(x.Z,{id:"subjectMgl"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)($.Z.Item,{name:"school",label:(0,Z.jsx)(x.Z,{id:"school"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(u.Z,{onChange:function(e){E(e),c.setFieldsValue({subSchool:null})},children:null===M||void 0===M?void 0:M.allSchools.map((function(e,t){return(0,Z.jsx)(I,{value:e.id,children:e.name},t)}))})}),(0,Z.jsx)($.Z.Item,{name:"subSchool",label:(0,Z.jsx)(x.Z,{id:"sub-school"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(u.Z,{placeholder:"\u0422\u044d\u043d\u0445\u0438\u043c",children:B})}),(0,Z.jsx)($.Z.Item,{name:"subjectCode",label:(0,Z.jsx)(x.Z,{id:"subjectCode"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)($.Z.Item,{name:"credit",label:(0,Z.jsx)(x.Z,{id:"credit"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsx)(g.Z,{className:"w-full"})}),(0,Z.jsx)($.Z.Item,{name:"part",label:(0,Z.jsx)(x.Z,{id:"subjectPart"}),rules:[{required:!0,message:(0,Z.jsx)(x.Z,{id:"form.required"})}],children:(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(I,{value:"A",children:"\u041c\u044d\u0440\u0433\u044d\u0448\u04af\u04af\u043b\u044d\u0445"}),(0,Z.jsx)(I,{value:"B",children:"\u0422\u0443\u0441\u0433\u0430\u0439"})]})})]})})},v=n(86586),C=n(64856),N=n(74021);var D=function(e){var t=(0,r.useState)([]),n=(0,s.Z)(t,2),u=n[0],$=n[1],m=(0,v.t)(j.TW,{fetchPolicy:"network-only",onCompleted:function(e){$(e.allSubjects)}}),h=(0,s.Z)(m,2),g=h[0],S=h[1],p=S.loading,f=S.refetch;(0,r.useEffect)((function(){g({variables:{offset:0,limit:10,filter:""}})}),[g]);var I=(0,r.useState)([]),D=(0,s.Z)(I,2),P=D[0],T=D[1],M=(0,r.useState)(""),k=(0,s.Z)(M,2),F=k[0],w=k[1],q=i.Z.confirm,E=(0,b.D)(C.DO,{onCompleted:function(e){f(),o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0443\u0441\u0442\u043b\u0430\u0430")}}),A=(0,s.Z)(E,1)[0],B=[{title:(0,Z.jsx)(x.Z,{id:"subject"}),key:"subject",dataIndex:"subject",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"subject")}},{title:(0,Z.jsx)(x.Z,{id:"subjectMgl"}),key:"subjectMgl",dataIndex:"subjectMgl",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"subjectMgl")}},{title:(0,Z.jsx)(x.Z,{id:"subjectCode"}),dataIndex:"subjectCode",key:"subjectCode",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"subjectCode")}},{title:(0,Z.jsx)(x.Z,{id:"school"}),dataIndex:["school","name"],key:"school",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"school")}},{title:(0,Z.jsx)(x.Z,{id:"sub-school"}),dataIndex:["subSchool","name"],key:"subSchool",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"subSchool")}},{title:(0,Z.jsx)(x.Z,{id:"subjectPart"}),dataIndex:"part",key:"subjectPart",sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"subjectPart")},render:function(e){return(0,Z.jsx)("span",{children:(t=e,{A:"\u041c\u044d\u0440\u0433\u044d\u0448\u04af\u04af\u043b\u044d\u0445",B:"\u0422\u0443\u0441\u0433\u0430\u0439"}[t])});var t}},{title:(0,Z.jsx)(x.Z,{id:"credit"}),dataIndex:"credit",key:"credit",render:function(e){return(0,Z.jsx)("span",{children:parseFloat(e).toString()})},sorter:function(e,t){return l.ZP.antdTableSorter(e,t,"credit")}}];!0!==e.permissions.edit&&!0!==e.permissions.destroy||B.push({title:(0,Z.jsx)(x.Z,{id:"main.action"}),key:"actions",dataIndex:"actions",width:"15vw",render:function(t,n){return(0,Z.jsxs)("div",{className:"text-center",children:[!0===e.permissions.edit&&(0,Z.jsxs)(a.Z,{size:"small",onClick:function(){return T(n),w("edit"),void L(!0)},type:"text",icon:(0,Z.jsx)(d.Z,{twoToneColor:"#ffdb00"}),children:[" ",(0,Z.jsx)(x.Z,{id:"edit"})]}),!0===e.permissions.destroy&&(0,Z.jsxs)(a.Z,{size:"small",onClick:function(){return e=n,void q({title:"\u0423\u0441\u0442\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0423\u0441\u0442\u0433\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){A({variables:{id:e.id}})}});var e},type:"text",icon:(0,Z.jsx)(c.Z,{twoToneColor:"#f42f2f"}),children:[" ",(0,Z.jsx)(x.Z,{id:"delete"})]})]})}});var O=(0,r.useState)(!1),_=(0,s.Z)(O,2),V=_[0],L=_[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(N.Z,{fetchData:g,loading:p,columns:B,data:u,permissions:e.permissions,showModal:function(){w("create"),L(!0)}}),(0,Z.jsx)(i.Z,{forceRender:!0,title:P?(0,Z.jsx)(x.Z,{id:"edit"}):(0,Z.jsx)(x.Z,{id:"add_new"}),visible:V,okText:(0,Z.jsx)(x.Z,{id:"main.okText"}),cancelText:(0,Z.jsx)(x.Z,{id:"main.cancelText"}),onCancel:function(){L(!1)},okButtonProps:{form:"SubjectForm",key:"submit",htmlType:"submit"},children:(0,Z.jsx)(y,{refetch:f,editData:P,formType:F,setIsModalVisible:L})})]})},P=n(59288),T=n(38937),M=function(){var e={create:(0,P.C)("add_subject"),edit:(0,P.C)("change_subject"),destroy:(0,P.C)("delete_subject")};return Object.values(e).indexOf("loading")>-1?(0,Z.jsx)(T.Z,{cover:"content"}):(0,Z.jsx)(D,{permissions:e})}}}]);
//# sourceMappingURL=4026.ed5ddced.chunk.js.map