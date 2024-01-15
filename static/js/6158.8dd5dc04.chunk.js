"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[6158],{68470:function(n,e,t){t(72791);var a=t(80184),r=function(n){var e=n.children,t=n.className,r=n.alignItems,i=n.justifyContent,s=n.mobileFlex,o=n.flexDirection;return(0,a.jsx)("div",{className:"".concat(s?"d-flex":"d-md-flex"," ").concat(t," ").concat(o?"flex-"+o:""," ").concat(r?"align-items-"+r:""," ").concat(i?"justify-content-"+i:""),children:e})};r.defaultProps={mobileFlex:!0,flexDirection:"row",className:""},e.Z=r},42086:function(n,e,t){var a=t(29439),r=t(72791),i=t(96578),s=t(86586),o=t(22949),l=t(73332),d=t(58361),c=t(66106),u=t(30914),m=t(66871),k=t(69421),g=t(87309),f=t(82630),$=t(68694),p=t(38937),Z=t(80184),x=o.Z.Option;e.Z=function(n){var e=n.submitData,t=n.mutationData,h=n.loading,j=l.Z.useForm(),y=(0,a.Z)(j,1)[0],S=l.Z.useForm(),b=(0,a.Z)(S,1)[0],P=(0,r.useState)([]),I=(0,a.Z)(P,2),C=I[0],v=I[1],M=(0,r.useState)([]),B=(0,a.Z)(M,2),N=B[0],A=B[1],V=(0,r.useState)([]),D=(0,a.Z)(V,2),F=D[0],q=D[1],w=(0,i.a)($.dT,{onCompleted:function(n){v(n.allPrograms)}}).loading,T=(0,s.t)($.tL,{onCompleted:function(n){A(n.sectionsByProgram)}}),R=(0,a.Z)(T,2),E=R[0],O=R[1].loading,_=(0,s.t)($.JX,{onCompleted:function(n){q(n.allStudents)}}),L=(0,a.Z)(_,2),X=L[0],z=L[1].loading,J=function(n){var a=Object.assign(n,t);e({variables:a})};return(0,Z.jsx)(d.Z,{active:!0,loading:w,children:(0,Z.jsxs)(c.Z,{gutter:16,children:[(0,Z.jsx)(u.Z,{xs:24,xl:12,children:(0,Z.jsx)(m.Z,{className:"mt-4",title:(0,Z.jsx)(f.Z,{id:"by-section"}),children:(0,Z.jsxs)(l.Z,{id:"section",layout:"vertical",form:y,name:"control-hooks",onFinish:J,children:[(0,Z.jsx)(l.Z.Item,{name:"program",label:(0,Z.jsx)(f.Z,{id:"program"}),rules:[{required:!0,message:(0,Z.jsx)(f.Z,{id:"form.required"})}],children:(0,Z.jsx)(o.Z,{onSelect:function(n){y.setFieldsValue({section:""}),E({variables:{program:n}})},allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(n,e){return e.children.toString().toLowerCase().indexOf(n.toLowerCase())>=0},children:C.map((function(n,e){return(0,Z.jsxs)(x,{value:n.id,children:[n.program," / ",n.programNumeric]},e)}))})}),(0,Z.jsx)(l.Z.Item,{name:"section",label:(0,Z.jsx)(f.Z,{id:"section"}),rules:[{required:!0,message:(0,Z.jsx)(f.Z,{id:"form.required"})}],children:(0,Z.jsx)(o.Z,{allowClear:!0,notFoundContent:O?(0,Z.jsx)(p.Z,{cover:"content"}):(0,Z.jsx)(k.Z,{image:k.Z.PRESENTED_IMAGE_SIMPLE}),children:N.map((function(n,e){return(0,Z.jsxs)(x,{value:n.id,children:[n.classes.classes," / ",n.section]},e)}))})}),(0,Z.jsx)(l.Z.Item,{className:"text-right",children:(0,Z.jsx)(g.Z,{className:"mr-2",type:"primary",htmlType:"submit",loading:h,children:(0,Z.jsx)(f.Z,{id:"main.okText"})})})]})})}),(0,Z.jsx)(u.Z,{xs:24,xl:12,children:(0,Z.jsx)(m.Z,{className:"mt-4",title:(0,Z.jsx)(f.Z,{id:"by-student-code"}),children:(0,Z.jsxs)(l.Z,{id:"student",layout:"vertical",form:b,name:"control-hooks",onFinish:J,children:[(0,Z.jsx)(l.Z.Item,{name:"studentCode",label:(0,Z.jsx)(f.Z,{id:"studentCode"}),rules:[{required:!0,message:(0,Z.jsx)(f.Z,{id:"form.required"})}],children:(0,Z.jsx)(o.Z,{showSearch:!0,filterOption:!1,notFoundContent:z?(0,Z.jsx)(p.Z,{cover:"content"}):(0,Z.jsx)(k.Z,{image:k.Z.PRESENTED_IMAGE_SIMPLE}),onSearch:function(n){""===n?q([]):X({variables:{offset:0,limit:99999999,filter:n}})},children:F.map((function(n,e){return(0,Z.jsxs)(x,{value:n.studentCode,children:[" ",n.familyName," ",n.name," / ",n.studentCode]},e)}))})}),(0,Z.jsx)(l.Z.Item,{className:"text-right",children:(0,Z.jsx)(g.Z,{className:"mr-2",type:"primary",htmlType:"submit",loading:h,children:(0,Z.jsx)(f.Z,{id:"main.okText"})})})]})})})]})})}},68120:function(n,e,t){t.d(e,{$h:function(){return R},H1:function(){return M},L8:function(){return P},R4:function(){return E},S8:function(){return _},Vw:function(){return V},Xc:function(){return D},_W:function(){return A},be:function(){return F},d3:function(){return N},d6:function(){return q},ey:function(){return O},fJ:function(){return I},iF:function(){return T},kk:function(){return v},sF:function(){return L},ux:function(){return w},yC:function(){return B},zX:function(){return C}});var a,r,i,s,o,l,d,c,u,m,k,g,f,$,p,Z,x,h,j,y,S=t(30168),b=t(27570),P=(0,b.Ps)(a||(a=(0,S.Z)(["\n    query allMarks ($markBoard: Int!) {\n        allMarks (markBoard: $markBoard) {\n            id\n            student {\n                id\n                familyName\n                name\n                studentCode\n                classes {\n                    classes\n                }\n                section {\n                    section\n                }\n            }\n            markRelSet {\n                markVal\n                markSetting {\n                    id\n                    name\n                }\n            }\n            markBoard {\n                subject {\n                    subject\n                }\n            }\n        }\n    }\n"]))),I=(0,b.Ps)(r||(r=(0,S.Z)(["\n    mutation createMark ($section: Int = 0, $studentCode: String, $markBoard: Int) {\n        createMark (section: $section, studentCode: $studentCode, markBoard: $markBoard) {\n            mark {\n                id\n            }\n        }\n    }\n"]))),C=(0,b.Ps)(i||(i=(0,S.Z)(["\n    mutation deleteMark ($id: ID) {\n        deleteMark (id: $id) {\n            mark {\n                student {\n                    id\n                }\n            }\n        }\n    }\n"]))),v=(0,b.Ps)(s||(s=(0,S.Z)(["\n    mutation createMarkRel ($mark: Int, $markSetting: Int, $markVal: String) {\n        createMarkRel (mark: $mark, markSetting: $markSetting, markVal: $markVal) {\n            markRel {\n                id\n                markVal\n                markSetting {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"]))),M=((0,b.Ps)(o||(o=(0,S.Z)(["\n    query allMarkRels ($mark: Int!) {\n        allMarkRels (mark: $mark) {\n            mark {\n                student {\n                    id\n                    studentCode\n                }\n            }\n            markSetting {\n                name\n                percentage\n            }\n            markVal\n        }\n    }\n"]))),(0,b.Ps)(l||(l=(0,S.Z)(["\n    query allMarkPercentages {\n        allMarkPercentages {\n            id\n            type\n            percentage\n            diam\n        }\n    }\n"])))),B=(0,b.Ps)(d||(d=(0,S.Z)(["\n    mutation createMarkPercentage ($diam: String, $percentage: Int, $type: String) {\n        createMarkPercentage (diam: $diam, percentage: $percentage, type: $type) {\n            markPercentage {\n                type\n            }\n        }\n    }\n"]))),N=(0,b.Ps)(c||(c=(0,S.Z)(["\n    mutation updateMarkPercentage ($diam: String, $percentage: Int, $type: String, $id: ID) {\n        updateMarkPercentage (diam: $diam, percentage: $percentage, type: $type, id: $id) {\n            markPercentage {\n                type\n            }\n        }\n    }\n"]))),A=(0,b.Ps)(u||(u=(0,S.Z)(["\n    mutation deleteMarkPercentage ($id: ID) {\n        deleteMarkPercentage (id: $id) {\n            markPercentage {\n                type\n            }\n        }\n    }\n"]))),V=(0,b.Ps)(m||(m=(0,S.Z)(["\n    query markBoardById ($id: Int!) {\n        markBoardById (id: $id) {\n            id\n            schoolyear {\n                id\n                schoolyear\n            }\n            subject {\n                id\n                part\n                subject\n            }\n            teacher {\n                id\n                name\n            }\n            startAt \n            endAt\n            status\n            createdAt\n            updatedAt\n        }\n    }\n"]))),D=(0,b.Ps)(k||(k=(0,S.Z)(['\n    query allMarkBoards ($offset: Int!, $limit: Int!, $filter: String) {\n        count (appName: "mark", modelName: "Mark_board", filter: $filter) {\n            count\n        }\n        allMarkBoards (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            schoolyear {\n                id\n                schoolyear\n                season\n            }\n            subject {\n                id\n                subject\n            }\n            teacher {\n                id\n                name\n            }\n            startAt \n            endAt\n            status\n            createdAt\n            updatedAt\n        }\n    }\n']))),F=(0,b.Ps)(g||(g=(0,S.Z)(["\n    mutation createMarkBoardFromRoutine ($endAt: String, $routine: Int, $startAt: String, $status: String) {\n        createMarkBoardFromRoutine (endAt: $endAt, routine: $routine, startAt: $startAt, status: $status) {\n            markBoard {\n                id\n            }\n        }\n    }\n"]))),q=(0,b.Ps)(f||(f=(0,S.Z)(["\n    mutation createMarkBoard ($endAt: String, $schoolyear: Int, $startAt: String, $status: String, $subject: Int, $teacher: Int) {\n        createMarkBoard (endAt: $endAt, schoolyear: $schoolyear, startAt: $startAt, status: $status, subject: $subject, teacher: $teacher) {\n            markBoard {\n                id\n            }\n        }\n    }\n"]))),w=(0,b.Ps)($||($=(0,S.Z)(["\n    mutation updateMarkBoard ($endAt: String, $schoolyear: Int, $startAt: String, $status: String, $subject: Int, $teacher: Int, $id: ID) {\n        updateMarkBoard (endAt: $endAt, schoolyear: $schoolyear, startAt: $startAt, status: $status, subject: $subject, teacher: $teacher, id: $id) {\n            markBoard {\n                id\n            }\n        }\n    }\n"]))),T=(0,b.Ps)(p||(p=(0,S.Z)(["\n    mutation deleteMarkBoard ($id: ID) {\n        deleteMarkBoard (id: $id) {\n            markBoard {\n                startAt\n            }\n        }\n    }\n"]))),R=(0,b.Ps)(Z||(Z=(0,S.Z)(["\n    query allMarkSettings {\n        allMarkSettings {\n            id\n            name\n            part\n            passVal\n            percentage\n        }\n    }\n"]))),E=(0,b.Ps)(x||(x=(0,S.Z)(["\n    query markSettingsByPart ($part: String!) {\n        markSettingsByPart (part: $part) {\n            id\n            name\n            part\n            passVal\n            percentage\n        }\n    }\n"]))),O=(0,b.Ps)(h||(h=(0,S.Z)(["\n    mutation createMarkSetting ($name: String, $percentage: Int, $part: String, $passVal: Int) {\n        createMarkSetting (name: $name, percentage: $percentage, part: $part, passVal: $passVal) {\n            markSetting {\n                id\n            }\n        }\n    }\n"]))),_=(0,b.Ps)(j||(j=(0,S.Z)(["\n    mutation updateMarkSetting ($name: String, $percentage: Int, $id: ID, $part: String, $passVal: Int) {\n        updateMarkSetting (name: $name, percentage: $percentage, id: $id, part: $part, passVal: $passVal) {\n            markSetting {\n                id\n            }\n        }\n    }\n"]))),L=(0,b.Ps)(y||(y=(0,S.Z)(["\n    mutation deleteMarkSetting($id: ID) {\n        deleteMarkSetting (id: $id) {\n            markSetting {\n                name\n            }\n        }\n    }\n"])))},68694:function(n,e,t){t.d(e,{Cm:function(){return g},Cx:function(){return m},FQ:function(){return k},JX:function(){return u},dT:function(){return f},tL:function(){return $}});var a,r,i,s,o,l,d=t(30168),c=t(27570),u=(0,c.Ps)(a||(a=(0,d.Z)(["\n    query allStudents ($filter: String) {\n        allStudents (filter: $filter) {\n            id\n            familyName\n            name\n            studentCode\n        }\n\t}\n"]))),m=(0,c.Ps)(r||(r=(0,d.Z)(["\n    query allTeachers ($filter: String) {\n        allTeachers (filter: $filter) {\n            id\n            familyName\n            name\n            teacherCode\n        }\n    }\n"]))),k=(0,c.Ps)(i||(i=(0,d.Z)(["\n    query allClassess ($filter: String, $program: Int) {\n        allClassess (filter: $filter, program: $program) {\n            id\n            classes\n            classesNumeric\n        }\n\t}\n"]))),g=(0,c.Ps)(s||(s=(0,d.Z)(['\n    query allSubjects ($offset: Int!, $limit: Int!, $filter: String) {\n        count (appName: "subject", modelName: "Subject", filter: $filter) {\n            count\n        }\n        allSubjects (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            subject \n            subjectCode\n            credit\n        }\n    }\n']))),f=(0,c.Ps)(o||(o=(0,d.Z)(["\n    query selectProgram {\n        allPrograms {\n            id\n            program\n            programNumeric\n        }\n    }\n"]))),$=(0,c.Ps)(l||(l=(0,d.Z)(["\n    query sectionsByProgram ($program: Int!) {\n        sectionsByProgram (program: $program) {\n            id\n            section \n            classes {\n                classes\n            }\n        }\n    }\n"])))},86158:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var a=t(29439),r=t(72791),i=t(4942),s=t(20003),o=t(76835),l=t(87309),d=t(50419),c=t(66871),u=t(37083),m=t(59432),k=t(82464),g=t(53834),f=t(68470),$=t(96578),p=t(86586),Z=t(84376),x=t(68120),h=t(82630),j=t(64880),y=t(42086),S=t(80184),b=s.Z.confirm;var P=function(n){var e=(0,j.k6)(),t=(0,j.UO)().id,s=(0,r.useState)(void 0),P=(0,a.Z)(s,2),I=P[0],C=P[1],v=(0,$.a)(x.Vw,{variables:{id:t}}).data,M=(0,p.t)(x.L8,{variables:{markBoard:t},onCompleted:function(n){C(n.allMarks.map((function(n){var e={};return n.markRelSet.map((function(n){var t=n.markSetting.name;return Object.assign(e,(0,i.Z)({},t,{markVal:n.markVal,settingName:n.markSetting.name,settingID:n.markSetting.id}))})),{relData:e,student:n.student.id,name:n.student.name,familyName:n.student.familyName,classes:"".concat(n.student.classes.classes," ").concat(n.student.section.section),studentCode:n.student.studentCode,mark:n.id,key:n.student.id}})))}}),B=(0,a.Z)(M,2),N=B[0],A=B[1],V=A.loading,D=A.refetch,F=(0,p.t)(x.R4),q=(0,a.Z)(F,2),w=q[0],T=q[1].data,R=(0,Z.D)(x.kk),E=(0,a.Z)(R,2),O=E[0],_=E[1].loading,L=(0,Z.D)(x.zX,{onCompleted:function(n){D()}}),X=(0,a.Z)(L,1)[0],z=[{key:"familyName",title:(0,S.jsx)(h.Z,{id:"familyName"}),dataIndex:"familyName"},{key:"name",title:(0,S.jsx)(h.Z,{id:"name"}),dataIndex:"name"},{key:"classes",title:(0,S.jsx)(h.Z,{id:"classes"}),dataIndex:"classes"},{key:"studentCode",title:(0,S.jsx)(h.Z,{id:"studentCode"}),dataIndex:"studentCode"}],J=[];null===T||void 0===T||T.markSettingsByPart.map((function(n){return z.push({key:n.name,title:n.name,dataIndex:["relData","".concat(n.name),"markVal"],render:function(e,t,a){return(0,S.jsx)("div",{children:(0,S.jsx)(o.Z,{defaultValue:e,max:n.percentage,min:0,onChange:function(e){return function(n,e,t,a){J.length?0===J.filter((function(n){return n.mark===a.mark&&n.markSetting===e})).length?J.push({mark:a.mark,markSetting:e,markVal:n}):J.filter((function(n){return n.mark===a.mark&&n.markSetting===e})).map((function(e){return e.markVal=n})):J.push({mark:a.mark,markSetting:e,markVal:n})}(e,n.id,0,t)}})})}})})),z.push({key:"delete",title:"\u0425\u0430\u0441\u0430\u0445",render:function(n,e){return(0,S.jsx)(l.Z,{size:"small",onClick:function(){return n=e.mark,void b({title:"\u0425\u0430\u0441\u0430\u0445 \u0443\u0443?",okText:"\u0425\u0430\u0441\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){X({variables:{id:n}})}});var n},type:"text",icon:(0,S.jsx)(k.Z,{twoToneColor:"#f42f2f"}),children:" \u0425\u0430\u0441\u0430\u0445 "})}});var G=(0,Z.D)(x.fJ,{onError:function(n){"Student matching query does not exist."===n.message&&d.ZP.warning("\u0421\u0443\u0440\u0430\u043b\u0446\u0430\u0433\u0447 \u043e\u043b\u0434\u0441\u043e\u043d\u0433\u04af\u0439!")},onCompleted:function(n){d.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),D()}}),H=(0,a.Z)(G,2),K=H[0],Q=H[1].loading;return(0,r.useEffect)((function(){null!==v&&void 0!==v&&v.markBoardById&&(N(),w({variables:{part:v.markBoardById.subject.part}}))}),[v]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(f.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:(0,S.jsx)(f.Z,{mobileFlex:!1,children:(0,S.jsx)("div",{className:"text-right",children:(0,S.jsxs)(l.Z,{onClick:function(){return e.goBack()},type:"default",icon:(0,S.jsx)(g.Z,{}),block:!0,children:[" ",(0,S.jsx)(h.Z,{id:"back"})]})})})}),(0,S.jsx)(y.Z,{submitData:K,loading:Q,mutationData:{markBoard:t}}),void 0!==I?(0,S.jsx)(c.Z,{className:"mt-4",children:(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsxs)(u.Z,{spinning:V,children:[(0,S.jsx)(m.Z,{columns:z,dataSource:I,rowKey:"key",size:"small",pagination:!1,bordered:!0,loading:V}),(0,S.jsxs)(f.Z,{alignItems:"left",justifyContent:"between",mobileFlex:!1,children:[(0,S.jsx)(f.Z,{className:"mb-1",mobileFlex:!1}),!0===n.permissions.create&&(0,S.jsx)(l.Z,{style:{margin:"10px"},onClick:function(){0===J.length?d.ZP.warning("\u04e8\u04e9\u0440\u0447\u043b\u04e9\u043b\u0442 \u0430\u043b\u0433\u0430 \u0431\u0430\u0439\u043d\u0430"):null===J||void 0===J||J.filter((function(n){return null!==n.markVal})).map((function(n,e){return O({variables:n}).then((function(n){J.length===++e&&d.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430")}))}))},type:"primary",loading:_,children:(0,S.jsx)(h.Z,{id:"main.okText"})})]})]})})}):null]})},I=t(59288),C=t(38937),v=function(n){var e,t=(0,I.C)("add_mark"),i=(0,I.C)("change_mark"),s=(0,I.C)("delete_mark"),o=(0,r.useState)(null===(e=n.location.state)||void 0===e?void 0:e.markBoard),l=(0,a.Z)(o,1)[0],d={create:t,edit:i,destroy:s};return Object.values(d).indexOf("loading")>-1?(0,S.jsx)(C.Z,{cover:"content"}):(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(P,{title:n.title,permissions:d,markBoard:l})})}}}]);
//# sourceMappingURL=6158.8dd5dc04.chunk.js.map