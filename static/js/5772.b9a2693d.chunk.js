"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[5772],{68470:function(e,n,t){t(72791);var r=t(80184),a=function(e){var n=e.children,t=e.className,a=e.alignItems,i=e.justifyContent,s=e.mobileFlex,o=e.flexDirection;return(0,r.jsx)("div",{className:"".concat(s?"d-flex":"d-md-flex"," ").concat(t," ").concat(o?"flex-"+o:""," ").concat(a?"align-items-"+a:""," ").concat(i?"justify-content-"+i:""),children:n})};a.defaultProps={mobileFlex:!0,flexDirection:"row",className:""},n.Z=a},7378:function(e,n,t){t.d(n,{$1:function(){return se},$5:function(){return Y},$Z:function(){return ie},Cz:function(){return O},DQ:function(){return W},Ds:function(){return z},KB:function(){return A},LW:function(){return ne},ME:function(){return oe},N0:function(){return J},Os:function(){return _},P_:function(){return re},TQ:function(){return R},Ts:function(){return ue},UI:function(){return Q},Ui:function(){return ee},WO:function(){return G},WV:function(){return L},XJ:function(){return ae},YV:function(){return te},gi:function(){return V},jm:function(){return ce},l4:function(){return H},m1:function(){return B},qG:function(){return X},rP:function(){return de},re:function(){return U},w9:function(){return K},wZ:function(){return F}});var r,a,i,s,o,u,d,c,l,m,$,g,S,h,p,f,x,Z,b,y,j,I,D,v,P,C,N,T,M,k,E,q=t(30168),w=t(27570),F=(0,w.Ps)(r||(r=(0,q.Z)(["\n  \tquery allDegrees {\n        allDegrees {\n            id\n            name\n        }\n\t}\n"]))),A=(0,w.Ps)(a||(a=(0,q.Z)(["\n    mutation createDegree($name: String) {\n      createDegree(name: $name) {\n        degree {\n          id\n          name\n        }\n      }\n    }\n"]))),B=(0,w.Ps)(i||(i=(0,q.Z)(["\n    mutation updateDegree ($id: ID, $name: String) {\n        updateDegree (id: $id, name: $name) {\n            degree {\n                name\n            }\n        }\n    }\n"]))),O=(0,w.Ps)(s||(s=(0,q.Z)(["\n    mutation deleteDegree($id: ID!){\n        deleteDegree(id: $id){\n            degree{\n                name\n            }\n        }\n    }\n"]))),Y=(0,w.Ps)(o||(o=(0,q.Z)(["\n  \tquery allActivitys {\n        allActivitys {\n            id\n            name\n        }\n\t}\n"]))),_=(0,w.Ps)(u||(u=(0,q.Z)(["\n    mutation createActivity($name: String) {\n      createActivity(name: $name) {\n        activity {\n          id\n          name\n        }\n      }\n    }\n"]))),L=(0,w.Ps)(d||(d=(0,q.Z)(["\n    mutation updateActivity ($id: ID, $name: String) {\n        updateActivity (id: $id, name: $name) {\n            activity {\n                name\n            }\n        }\n    }\n"]))),V=(0,w.Ps)(c||(c=(0,q.Z)(["\n    mutation deleteActivity($id: ID!){\n        deleteActivity(id: $id){\n            activity{\n                name\n            }\n        }\n    }\n"]))),z=(0,w.Ps)(l||(l=(0,q.Z)(["\n    query allStudentStatuss {\n        allStudentStatuss {\n            id\n            name\n        }\n    }\n"]))),G=(0,w.Ps)(m||(m=(0,q.Z)(["\n    mutation createStudentStatus($name: String) {\n        createStudentStatus(name: $name) {\n            studentStatus {\n                id\n                name\n            }\n        }\n    }\n"]))),Q=(0,w.Ps)($||($=(0,q.Z)(["\n    mutation updateStudentStatus ($id: ID, $name: String) {\n        updateStudentStatus (id: $id, name: $name) {\n            studentStatus {\n                id\n                name\n            }\n        }\n    }\n"]))),X=(0,w.Ps)(g||(g=(0,q.Z)(["\n    mutation deleteStudentStatus ($id: ID) {\n        deleteStudentStatus (id: $id) {\n            studentStatus {\n                name\n            }\n        }\n    }\n"]))),K=(0,w.Ps)(S||(S=(0,q.Z)(["\n    query allStudentStatusExtras {\n        allStudentStatusExtras {\n            id\n            name\n        }\n    }\n"]))),R=(0,w.Ps)(h||(h=(0,q.Z)(["\n    mutation createStudentStatusExtra($name: String) {\n        createStudentStatusExtra(name: $name) {\n            studentStatusExtra {\n                id\n                name\n            }\n        }\n    }\n"]))),W=(0,w.Ps)(p||(p=(0,q.Z)(["\n    mutation updateStudentStatusExtra ($id: ID, $name: String) {\n        updateStudentStatusExtra (id: $id, name: $name) {\n            studentStatusExtra {\n                id\n                name\n            }\n        }\n    }\n"]))),U=(0,w.Ps)(f||(f=(0,q.Z)(["\n    mutation deleteStudentStatusExtra ($id: ID) {\n        deleteStudentStatusExtra (id: $id) {\n            studentStatusExtra {\n                name\n            }\n        }\n    }\n"]))),H=(0,w.Ps)(x||(x=(0,q.Z)(["\n    query allTeacherStatuss {\n        allTeacherStatuss {\n            id\n            name\n        }\n    }\n"]))),J=(0,w.Ps)(Z||(Z=(0,q.Z)(["\n    mutation createTeacherStatus($name: String) {\n        createTeacherStatus(name: $name) {\n            teacherStatus {\n                id\n                name\n            }\n        }\n    }\n"]))),ee=(0,w.Ps)(b||(b=(0,q.Z)(["\n    mutation updateTeacherStatus ($id: ID, $name: String) {\n        updateTeacherStatus (id: $id, name: $name) {\n            teacherStatus {\n                id\n                name\n            }\n        }\n    }\n"]))),ne=(0,w.Ps)(y||(y=(0,q.Z)(["\n    mutation deleteTeacherStatus ($id: ID) {\n        deleteTeacherStatus (id: $id) {\n            teacherStatus {\n                name\n            }\n        }\n    }\n"]))),te=(0,w.Ps)(j||(j=(0,q.Z)(["\n    query allClasstimes {\n        allClasstimes {\n            id\n            name\n        }\n    }\n"]))),re=(0,w.Ps)(I||(I=(0,q.Z)(["\n    mutation createClasstime($name: String) {\n        createClasstime(name: $name) {\n            classtime {\n                id\n                name\n            }\n        }\n    }\n"]))),ae=(0,w.Ps)(D||(D=(0,q.Z)(["\n    mutation updateClasstime ($id: ID, $name: String) {\n        updateClasstime (id: $id, name: $name) {\n            classtime {\n                id\n                name\n            }\n        }\n    }\n"]))),ie=(0,w.Ps)(v||(v=(0,q.Z)(["\n    mutation deleteClasstime ($id: ID) {\n        deleteClasstime (id: $id) {\n            classtime {\n                name\n            }\n        }\n    }\n"]))),se=(0,w.Ps)(P||(P=(0,q.Z)(["\n    mutation createRoutine ($classes: Int, $endDate: Date, $program: Int, $room: String, $schoolyear: Int, $section: Int, $startDate: Date, \n                            $subject: Int, $teacher: Int, $time: Int, $type: String, $weekly: Int) {\n        createRoutine (classes: $classes, endDate: $endDate, program: $program, room: $room, schoolyear: $schoolyear, section: $section, \n                        startDate: $startDate, subject: $subject, teacher: $teacher, time: $time, type: $type, weekly: $weekly) {\n            routine {\n                id\n            }\n        }\n    }\n"]))),oe=((0,w.Ps)(C||(C=(0,q.Z)(["\n    query allMenus{\n        allMenus {\n            priority\n            key\n            path\n            title\n            icon\n            breadcrumb\n            subMenu\n            menuSet {\n                priority\n                key\n                path\n                title\n                icon\n                breadcrumb\n                subMenu\n            }\n        }\n    }\n"]))),(0,w.Ps)(N||(N=(0,q.Z)(["\n    mutation updateMenu($breadcrumb: Boolean, $icon: String, $id: ID, $priority: Int, $status: String, $submenu: Int) {\n        updateMenu (breadcrumb: $breadcrumb, icon: $icon, id: $id, priority: $priority, status: $status, submenu: $submenu) {\n            menu {\n                id\n            }\n        }\n    }\n"]))),(0,w.Ps)(T||(T=(0,q.Z)(["\n    query allSchoolyears {\n        allSchoolyears {\n            id\n            schoolyear\n            season\n            semesterCode\n            startDate\n            endDate\n            isCurrent\n        }\n    }\n"])))),ue=(0,w.Ps)(M||(M=(0,q.Z)(["\n    mutation createSchoolyear ($endDate: String, $schoolyear: String, $season: String, $semesterCode: String, $startDate: String, $isCurrent: Boolean) {\n        createSchoolyear (endDate: $endDate, schoolyear: $schoolyear, season: $season, semesterCode: $semesterCode, startDate: $startDate, isCurrent: $isCurrent) {\n            schoolyear {\n                schoolyear\n            }\n        }\n    }\n"]))),de=(0,w.Ps)(k||(k=(0,q.Z)(["\n    mutation updateSchoolyear ($endDate: String, $id: ID, $schoolyear: String, $season: String, $semesterCode: String, $startDate: String, $isCurrent: Boolean) {\n        updateSchoolyear (endDate: $endDate, id: $id, schoolyear: $schoolyear, season: $season, semesterCode: $semesterCode, startDate: $startDate, isCurrent: $isCurrent) {\n            schoolyear {\n                schoolyear\n            }\n        }\n    }\n"]))),ce=(0,w.Ps)(E||(E=(0,q.Z)(["\n    mutation deleteSchoolyear ($id: ID) {\n        deleteSchoolyear (id: $id) {\n            schoolyear {\n                schoolyear\n            }\n        }\n    }\n"])))},82259:function(e,n,t){t.d(n,{Gr:function(){return I},Nb:function(){return f},XA:function(){return N},Xk:function(){return v},Y5:function(){return P},YK:function(){return D},Z_:function(){return j},aY:function(){return T},fG:function(){return b},hX:function(){return Z},uG:function(){return y},vF:function(){return x},x:function(){return C}});var r,a,i,s,o,u,d,c,l,m,$,g,S,h=t(30168),p=t(27570),f=(0,p.Ps)(r||(r=(0,h.Z)(["\n    mutation updateSubject ($credit: String, $part: String, $id: ID, $school: Int, $subSchool: Int, $subject: String, $subjectCode: String, $subjectMgl: String) {\n        updateSubject (credit: $credit id: $id, part: $part, school: $school, subSchool: $subSchool, subject: $subject, subjectCode: $subjectCode, subjectMgl: $subjectMgl) {\n            subject {\n                subject\n            }\n        }\n    }\n"]))),x=(0,p.Ps)(a||(a=(0,h.Z)(["\n    mutation updateSchool($id: ID, $name: String, $nameMgl: String){\n        updateSchool (id: $id, name: $name, nameMgl: $nameMgl){\n            school {\n                name\n                nameMgl\n            }\n        }\n    }\n"]))),Z=(0,p.Ps)(i||(i=(0,h.Z)(["\n    mutation updateSubSchool($id: ID, $name: String, $nameMgl: String, $school: Int) {\n        updateSubSchool (id: $id, name: $name, nameMgl: $nameMgl, school: $school) {\n            subSchool {\n                name\n            }\n        }\n    }\n"]))),b=(0,p.Ps)(s||(s=(0,h.Z)(["\n    mutation updateProgram ($id: ID, $program: String, $programMgl: String, $programNumeric: String, $status: String, $maxStudentNum: Int, $degree: Int, \n                            $school: Int, $subSchool: Int) {\n        updateProgram (id: $id, program: $program, programMgl: $programMgl, programNumeric: $programNumeric, status: $status, maxStudentNum: $maxStudentNum, \n                        degree: $degree, school: $school, subSchool: $subSchool) {\n            program {\n                program\n            }\n        }\n    }\n"]))),y=(0,p.Ps)(o||(o=(0,h.Z)(["\n    mutation updateClasses($id: ID, $activity: Int, $classes: String, $classesMgl: String, $classesNumeric: String, $course: String, $degree: Int, $endCourse: String,\n                          $maxStudentNum: Int, $program: Int, $school: Int, $status: String, $subSchool: Int, $teacher: Int) {\n        updateClasses(id: $id, activity: $activity, classes: $classes, classesMgl: $classesMgl, classesNumeric: $classesNumeric, course: $course, degree: $degree,\n                    endCourse: $endCourse, maxStudentNum: $maxStudentNum, program: $program, school: $school, status: $status, subSchool: $subSchool, teacher: $teacher) {\n            classes {\n                classes\n            }\n        }\n    }\n"]))),j=(0,p.Ps)(u||(u=(0,h.Z)(["\n    mutation updateSection($id: ID, $classes: Int, $program: Int, $school: Int, $subSchool: Int, $section: String) {\n        updateSection (id: $id, classes: $classes, program: $program, school: $school, subSchool: $subSchool, section: $section) {\n            section {\n                id\n            }\n        }\n    }\n"]))),I=(0,p.Ps)(d||(d=(0,h.Z)(["\n    mutation updateTeacher ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, \n                            $familyName: String, $id: ID!, $joinBefore: String, $joinDate: String, $name: String, $phone: String, $phone2: String, $registerNo: String, \n                            $school: Int, $sex: String, $status: Int, $subSchool: Int, $teacherCode: String, $username: String, $email: String) {\n        updateTeacher (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate,\n                        familyName: $familyName, id: $id, joinBefore: $joinBefore, joinDate: $joinDate, name: $name, phone: $phone, phone2: $phone2, \n                        registerNo: $registerNo, school: $school, sex: $sex, status: $status, subSchool: $subSchool, \n                        teacherCode: $teacherCode, username: $username, email: $email) {\n            teacher {\n                id\n            }\n        }\n    }\n"]))),D=(0,p.Ps)(c||(c=(0,h.Z)(["\n    mutation updateEmployee ($address: String, $birthCity: Int, $birthDistrict: Int, $birthdate: String, $employeeCode: String, $sex: String, $status: Int, \n                             $familyName: String, $group: Int, $id: Int, $name: String, $phone: String, $phone2: String, $registerNo: String, $compartment: Int,\n                             $username: String, $email: String) {\n        updateEmployee (address: $address, birthCity: $birthCity, birthDistrict: $birthDistrict, birthdate: $birthdate, employeeCode: $employeeCode, sex: $sex, status: $status,\n                        familyName: $familyName, group: $group, id: $id, name: $name, phone: $phone, phone2: $phone2, registerNo: $registerNo, compartment: $compartment,\n                        username: $username, email: $email) {\n                            employee{\n                                id\n                            }\n                        }\n                    }\n"]))),v=(0,p.Ps)(l||(l=(0,h.Z)(["\n    mutation updateParent ($address: String, $addressLive: String, $familyName: String, $id: ID, $name: String, $phone: String, $profession: String, $student: Int) {\n        updateParent (address: $address, addressLive: $addressLive, familyName: $familyName, id: $id, name: $name, phone: $phone, profession: $profession, student: $student) {\n            parent {\n                name\n            }\n        }\n    }\n"]))),P=(0,p.Ps)(m||(m=(0,h.Z)(["\n    mutation transferStudent ($activity: Int, $classes: Int, $classtime: Int, $description: String, $docDate: String, $docNum: String, $program: Int, $school: Int, \n                                $section: Int, $status: Int, $statusExtra: Int, $student: Int) {\n        transferStudent (activity: $activity, classes: $classes, classtime: $classtime, description: $description, docDate: $docDate, docNum: $docNum, program: $program, \n                        school: $school, section: $section, status: $status, statusExtra: $statusExtra, student: $student) {\n            transfer {\n                id\n            }\n        }\n    }\n"]))),C=(0,p.Ps)($||($=(0,h.Z)(["\n    mutation updateStudent (\n        $address: String\n        $birthCity: Int\n        $birthDistrict: Int\n        $birthdate: String\n        $degree: Int\n        $email: String\n        $familyName: String\n        $id: ID\n        $joinBefore: String\n        $joinDate: String\n        $joinSchoolyear: String\n        $name: String\n        $phone: String\n        $phone2: String\n        $registerNo: String\n        $sex: String\n        $studentCode: String\n        $username: String\n    ) {\n        updateStudent (\n            address: $address\n            birthCity: $birthCity\n            birthDistrict: $birthDistrict\n            birthdate: $birthdate\n            degree: $degree\n            email: $email\n            familyName: $familyName\n            id: $id\n            joinBefore: $joinBefore\n            joinDate: $joinDate\n            joinSchoolyear: $joinSchoolyear\n            name: $name\n            phone: $phone\n            phone2: $phone2\n            registerNo: $registerNo\n            sex: $sex\n            studentCode: $studentCode\n            username: $username\n        ) {\n            student {\n                id\n            }\n        }    \n    }\n"]))),N=(0,p.Ps)(g||(g=(0,h.Z)(["\n    mutation updateEventType ($color: String, $id: ID, $name: String) {\n        updateEventType (color: $color, id: $id, name: $name) {\n            eventType {\n                name\n            }\n        }\n    }\n"]))),T=(0,p.Ps)(S||(S=(0,h.Z)(["\n    mutation updateEvent ($content: String, $description: String, $endAt: String, $eventType: Int, $id: ID, $startAt: String, $title: String) {\n        updateEvent (content: $content, description: $description, endAt: $endAt, eventType: $eventType, id: $id, startAt: $startAt, title: $title) {\n            event {\n                title\n            }\n        }\n    }\n"])))},55772:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(72791),a=t(29439),i=t(20003),s=t(50419),o=t(87309),u=t(66871),d=t(49389),c=t(37083),l=t(59432),m=t(77154),$=t(36795),g=t(82464),S=t(11730),h=t(31549),p=t(64880),f=t(68470),x=t(2703),Z=t(22949),b=t(73332),y=t(76835),j=t(84376),I=t(96578),D=t(41920),v=t(7378),P=t(20077),C=t(82259),N=t(82630),T=t(80184),M=Z.Z.Option;var k=function(e){var n=e.formType,t=e.editData,i=e.setIsModalVisible,o=b.Z.useForm(),u=(0,a.Z)(o,1)[0],l=(0,j.D)(P.OM,{refetchQueries:[D.YP,"allPrograms"],onCompleted:function(e){s.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),i(!1)}}),m=(0,a.Z)(l,2),$=m[0],g=m[1].loading,S=(0,j.D)(C.fG,{refetchQueries:[D.YP,"allPrograms"],onCompleted:function(e){s.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),i(!1)}}),h=(0,a.Z)(S,2),p=h[0],f=h[1].loading,x=(0,I.a)(D.Fm,{}).data,k=(0,I.a)(v.wZ,{}).data,E=(0,I.a)(D.O8,{}),q=E.data,w=E.loading,F=(0,r.useState)(void 0),A=(0,a.Z)(F,2),B=A[0],O=A[1];(0,r.useEffect)((function(){!1===w&&q&&O(q.allSubSchools)}),[B,q,w]),(0,r.useEffect)((function(){if("edit"===n){var e={program:t.program,programMgl:t.programMgl,programNumeric:t.programNumeric,degree:t.degree.id,maxStudentNum:t.maxStudentNum,school:t.school.id,subSchool:t.subSchool.id,status:t.status,key:t.id};u.setFieldsValue(e),V(u.getFieldValue("school"))}else"create"===n&&u.resetFields()}),[t,u,n]);var Y=(0,r.useState)(""),_=(0,a.Z)(Y,2),L=_[0],V=_[1],z=null,G=null;return L&&(z=L),z&&(G=null===B||void 0===B?void 0:B.filter((function(e){return e.school.id===z})).map((function(e){return(0,T.jsx)(M,{value:e.id,children:e.name},e.id)}))),(0,T.jsx)(c.Z,{spinning:g||f,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,T.jsxs)(b.Z,{id:"ProgramForm",layout:"vertical",form:u,name:"control-hooks",onFinish:function(e){"edit"===n?(e.id=t.id,p({variables:e})):$({variables:e})},children:[(0,T.jsx)(b.Z.Item,{name:"program",label:(0,T.jsx)(N.Z,{id:"name"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(d.Z,{})}),(0,T.jsx)(b.Z.Item,{name:"programMgl",label:(0,T.jsx)(N.Z,{id:"nameMgl"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(d.Z,{})}),(0,T.jsx)(b.Z.Item,{name:"programNumeric",label:(0,T.jsx)(N.Z,{id:"programNumeric"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(d.Z,{})}),(0,T.jsx)(b.Z.Item,{name:"school",label:(0,T.jsx)(N.Z,{id:"school"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(Z.Z,{onChange:function(e){V(e)},children:null===x||void 0===x?void 0:x.allSchools.map((function(e,n){return(0,T.jsx)(M,{value:e.id,children:e.name},n)}))})}),(0,T.jsx)(b.Z.Item,{name:"subSchool",label:(0,T.jsx)(N.Z,{id:"sub-school"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(Z.Z,{placeholder:"\u0422\u044d\u043d\u0445\u0438\u043c \u0441\u043e\u043d\u0433\u043e\u0445",children:G})}),(0,T.jsx)(b.Z.Item,{name:"maxStudentNum",label:(0,T.jsx)(N.Z,{id:"maxStudentNum"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(y.Z,{})}),(0,T.jsx)(b.Z.Item,{name:"degree",label:(0,T.jsx)(N.Z,{id:"degree"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsx)(Z.Z,{placeholder:(0,T.jsx)(N.Z,{id:"degree"}),children:null===k||void 0===k?void 0:k.allDegrees.map((function(e,n){return(0,T.jsx)(M,{value:e.id,children:e.name},n)}))})}),(0,T.jsx)(b.Z.Item,{name:"status",label:(0,T.jsx)(N.Z,{id:"status"}),rules:[{required:!0,message:(0,T.jsx)(N.Z,{id:"form.required"})}],children:(0,T.jsxs)(Z.Z,{placeholder:(0,T.jsx)(N.Z,{id:"status"}),children:[(0,T.jsx)(M,{value:"OPEN",children:"\u041d\u044d\u044d\u043b\u0442\u0442\u044d\u0439"},"1"),(0,T.jsx)(M,{value:"CLOSED",children:"\u0425\u0430\u0430\u043b\u0442\u0442\u0430\u0439"},"2")]})})]})})},E=t(64856),q=t(59305);var w=function(e){var n=(0,I.a)(D.YP,{}),t=n.loading,Z=n.data,b=(0,p.k6)(),y=(0,r.useState)(void 0),v=(0,a.Z)(y,2),P=v[0],C=v[1],M=(0,r.useState)(!0),w=(0,a.Z)(M,2),F=w[0],A=w[1],B=(0,r.useState)(!0),O=(0,a.Z)(B,2),Y=O[0],_=O[1];(0,r.useEffect)((function(){!1===t&&Z&&(C(Z.allPrograms),A(!1),_(!1))}),[t,Z,F]);var L=(0,r.useState)(!1),V=(0,a.Z)(L,2),z=V[0],G=V[1],Q=(0,r.useState)([]),X=(0,a.Z)(Q,2),K=X[0],R=X[1],W=(0,r.useState)(""),U=(0,a.Z)(W,2),H=U[0],J=U[1],ee=i.Z.confirm,ne=Intl.NumberFormat(),te=(0,j.D)(E.MI,{refetchQueries:[D.YP,"allPrograms"],onCompleted:function(e){s.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0443\u0441\u0442\u043b\u0430\u0430")}}),re=(0,a.Z)(te,1)[0],ae=[{key:"program",title:(0,T.jsx)(N.Z,{id:"name"}),dataIndex:"program",sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"program")}},{key:"programMgl",title:(0,T.jsx)(N.Z,{id:"nameMgl"}),dataIndex:"programMgl",sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"programMgl")}},{key:"programNumeric",title:(0,T.jsx)(N.Z,{id:"programNumeric"}),dataIndex:"programNumeric",sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"programNumeric")}},{key:"school",title:(0,T.jsx)(N.Z,{id:"school"}),dataIndex:["school","name"],sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"school")}},{key:"subSchool",title:(0,T.jsx)(N.Z,{id:"sub-school"}),dataIndex:["subSchool","name"],sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"subSchool")}},{key:"degree",title:(0,T.jsx)(N.Z,{id:"degree"}),dataIndex:["degree","name"],sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"degree")}},{key:"maxStudentNum",title:(0,T.jsx)(N.Z,{id:"maxStudentNum"}),dataIndex:"maxStudentNum",sorter:function(e,n){return x.ZP.antdTableSorter(e,n,"maxStudentNum")},render:function(e){return(0,T.jsx)("span",{children:ne.format(e)})}}];return!0!==e.permissions.edit&&!0!==e.permissions.destroy||ae.push({key:"actions",title:(0,T.jsx)(N.Z,{id:"main.action"}),dataIndex:"actions",width:"20vw",render:function(n,t){return(0,T.jsxs)("div",{className:"text-center",children:[(0,T.jsxs)(o.Z,{size:"small",onClick:function(){return e=t,void b.push("".concat(q.sH,"/programs/").concat(e.id));var e},type:"text",icon:(0,T.jsx)(m.Z,{}),children:[" ",(0,T.jsx)(N.Z,{id:"show"})]}),!0===e.permissions.edit&&(0,T.jsxs)(o.Z,{size:"small",onClick:function(){return e=t,J("edit"),R(e),void G(!0);var e},type:"text",icon:(0,T.jsx)($.Z,{twoToneColor:"#ffdb00"}),children:[" ",(0,T.jsx)(N.Z,{id:"edit"})]}),!0===e.permissions.destroy&&(0,T.jsxs)(o.Z,{size:"small",onClick:function(){return e=t,void ee({title:"\u0423\u0441\u0442\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0423\u0441\u0442\u0433\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){re({variables:{id:e.id}})}});var e},type:"text",icon:(0,T.jsx)(g.Z,{twoToneColor:"#f42f2f"}),children:[" ",(0,T.jsx)(N.Z,{id:"delete"})," "]})]})}}),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i.Z,{title:"edit"===H?(0,T.jsx)(N.Z,{id:"edit"}):(0,T.jsx)(N.Z,{id:"add_new"}),visible:z,okText:(0,T.jsx)(N.Z,{id:"main.okText"}),cancelText:(0,T.jsx)(N.Z,{id:"main.cancelText"}),onCancel:function(){G(!1)},okButtonProps:{form:"ProgramForm",key:"submit",htmlType:"submit"},children:(0,T.jsx)(k,{setTableLoading:_,setReFill:A,formType:H,editData:K,setIsModalVisible:G})}),(0,T.jsxs)(u.Z,{children:[(0,T.jsxs)(f.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[(0,T.jsx)(f.Z,{className:"mb-1",mobileFlex:!1,children:(0,T.jsx)("div",{className:"mr-md-3 mb-3",children:(0,T.jsx)(d.Z,{placeholder:"\u0425\u0430\u0439\u0445",prefix:(0,T.jsx)(S.Z,{}),onChange:function(e){return function(e){var n=e.currentTarget.value;n||A(!0);var t=P,r=x.ZP.wildCardSearch(t,n);C(r)}(e)}})})}),!0===e.permissions.create&&(0,T.jsx)("div",{className:"mr-md-3 mb-3",children:(0,T.jsxs)(o.Z,{onClick:function(){J("create"),G(!0)},type:"primary",icon:(0,T.jsx)(h.Z,{}),block:!0,children:[" ",(0,T.jsx)(N.Z,{id:"add_new"})]})})]}),(0,T.jsx)("div",{className:"table-responsive",children:(0,T.jsx)(c.Z,{spinning:Y,children:(0,T.jsx)(l.Z,{columns:ae,size:"small",dataSource:P,rowKey:"id",bordered:!0})})})]})]})},F=t(59288),A=t(38937),B=function(e){var n={create:(0,F.C)("add_program"),edit:(0,F.C)("change_program"),destroy:(0,F.C)("delete_program")};return Object.values(n).indexOf("loading")>-1?(0,T.jsx)(A.Z,{cover:"content"}):(0,T.jsx)(w,{title:e.title,permissions:n})}}}]);
//# sourceMappingURL=5772.b9a2693d.chunk.js.map