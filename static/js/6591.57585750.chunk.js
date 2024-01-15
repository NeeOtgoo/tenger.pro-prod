"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[6591],{96679:function(n,e,t){t.d(e,{m:function(){return s}});var s="http://66.181.175.235:8001"},41963:function(n,e,t){t.d(e,{Hi:function(){return g},Vm:function(){return S},WP:function(){return $},Z:function(){return b},ar:function(){return y},iX:function(){return P},nA:function(){return I},qv:function(){return k},rd:function(){return C}});var s,r,o,a,i,c,d,u,l,m,h,x,j,p,f=t(30168),Z=t(27570),y=(0,Z.Ps)(s||(s=(0,f.Z)(["\n    query studentReport ($studentCode: String) {\n        studentReport (studentCode: $studentCode) {\n            school\n            textTop\n            textMid\n            textBottom\n            studentPhoto\n            studentCode\n        }\n    }\n"]))),g=(0,Z.Ps)(r||(r=(0,f.Z)(["\n    query studentReportSection ($section: Int) {\n        studentReportSection (section: $section) {\n            school\n            textTop\n            textMid\n            textBottom\n            studentPhoto\n            studentCode\n        }\n    }\n"]))),C=((0,Z.Ps)(o||(o=(0,f.Z)(["\n    query allSections {\n        allSections {\n            id\n            section\n        }\n    }\n"]))),(0,Z.Ps)(a||(a=(0,f.Z)(["\n    query studentMarkReport ($studentCode: String) {\n        studentMarkReport (studentCode: $studentCode) {\n            school\n            textTop\n            textMid0\n            textMid1\n            textMid2\n            textMid3\n            textMid4\n            textMid5\n            textMid6\n            textMid7\n            textBottom\n            studentPhoto\n            studentCode\n        }\n    }\n"])))),S=(0,Z.Ps)(i||(i=(0,f.Z)(["\n    query studentMarkReportSection ($section: Int) {\n        studentMarkReportSection (section: $section) {\n            school\n            textTop\n            textMid0\n            textMid1\n            textMid2\n            textMid3\n            textMid4\n            textMid5\n            textMid6\n            textMid7\n            textBottom\n            studentPhoto\n            studentCode\n        }\n    }\n"]))),$=(0,Z.Ps)(c||(c=(0,f.Z)(["\n    query studentSchoolyear ($student: Int) {\n        studentSchoolyear (student: $student) {\n            id\n            schoolyear\n            season\n            semesterCode\n            startDate\n            endDate\n        }\n    }\n"]))),b=(0,Z.Ps)(d||(d=(0,f.Z)(["\n    query studentMark ($student: Int, $schoolyear: Int, $part: String) {\n        studentMark (student: $student, schoolyear: $schoolyear, part: $part) {\n            id\n            markBoard {\n                subject {\n                    subject \n                    subjectCode\n                    credit\n                }\n            }\n            markRelSet {\n                markSetting {\n                    name\n                }\n                markVal\n            }\n        }\n    }\n"]))),k=((0,Z.Ps)(u||(u=(0,f.Z)(["\n    query studentMarkRel ($student: Int, $schoolyear: Int) {\n        studentMarkRel (student: $student, schoolyear: $schoolyear) {\n            id\n            mark {\n                student {\n                    studentCode \n                }\n                markBoard {\n                    subject {\n                        id\n                        subject\n                        subjectCode\n                        credit\n                    }\n                    schoolyear {\n                        schoolyear \n                        season\n                    }\n                }\n            }\n            markSetting {\n                name\n                percentage\n            }\n            markVal\n        }\n    }\n"]))),(0,Z.Ps)(l||(l=(0,f.Z)(["\n    query markPercentage ($percentage: Int) {\n        markPercentage (percentage: $percentage) {\n            type\n            percentage\n            diam\n        }\n    }\n"]))),(0,Z.Ps)(m||(m=(0,f.Z)(["\n    query markCon ($subject: Int!, $schoolyear: Int!, $student: Int!) {\n        markCon (subject: $subject, schoolyear: $schoolyear, student: $student) {\n            percentage\n            markRel {\n                markVal\n                markSetting\n            }\n            diam\n        }\n    }\n"])))),P=((0,Z.Ps)(h||(h=(0,f.Z)(["\n    query markconSubject ($schoolyear: Int!, $section: Int!, $part: String!) {\n        markconSubject (schoolyear: $schoolyear, section: $section, part: $part) {\n            subjectId\n            subject\n            subjectCode\n            subjectCredit\n        }\n    }\n"]))),(0,Z.Ps)(x||(x=(0,f.Z)(["\n    query markconStudent ($section: Int!) {\n        markconStudent (section: $section) {\n            studentId\n            familyName\n            name\n            studentCode\n            registerNo\n        }\n    }\n"]))),(0,Z.Ps)(j||(j=(0,f.Z)(['\n    query markConQuery ($section: Int!, $schoolyear: Int!) {\n        markconSubjectA: markconSubject (schoolyear: $schoolyear, section: $section, part: "A") {\n            subjectId \n            subject\n            subjectCode\n            subjectCredit\n        }\n        markconSubjectB: markconSubject (schoolyear: $schoolyear, section: $section, part: "B") {\n            subjectId \n            subject\n            subjectCode\n            subjectCredit\n        }\n        markconSubjectC: markconSubject (schoolyear: $schoolyear, section: $section, part: "C") {\n            subjectId \n            subject\n            subjectCode\n            subjectCredit\n        }\n        markconStudent (section: $section) {\n            studentId\n            familyName\n            name\n            studentCode\n            registerNo\n        }\n    },\n'])))),I=(0,Z.Ps)(p||(p=(0,f.Z)(["\n    query allStudentsReport {\n        allStudentsReport {\n            id\n            user {\n                id\n                username\n                email\n            }\n            studentCode\n            surname\n            familyName\n            familyNameMgl\n            name\n            nameMgl\n            religion\n            registerNo\n            nationality\n            state\n            photo\n            phone\n            phone2\n            address\n            citizen\n            degree {\n                id\n                name\n            }\n            activity {\n                id\n                name\n            }\n            joinDate\n            joinBefore\n            sex\n            birthdate\n            classtime {\n                id\n                name\n            }\n            birthCity {\n                id\n                name\n            }\n            birthDistrict {\n                id\n                name\n            }\n            status {\n                id\n                name\n            }\n            statusExtra {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            classes {\n                id\n                classes\n            }\n            section {\n                id\n                section\n            }\n            program {\n                id\n                program\n            }\n            joinSchoolyear {\n                id\n                schoolyear\n            }\n        }\n    }\n"])))},68694:function(n,e,t){t.d(e,{Cm:function(){return x},Cx:function(){return m},FQ:function(){return h},JX:function(){return l},dT:function(){return j},tL:function(){return p}});var s,r,o,a,i,c,d=t(30168),u=t(27570),l=(0,u.Ps)(s||(s=(0,d.Z)(["\n    query allStudents ($filter: String) {\n        allStudents (filter: $filter) {\n            id\n            familyName\n            name\n            studentCode\n        }\n\t}\n"]))),m=(0,u.Ps)(r||(r=(0,d.Z)(["\n    query allTeachers ($filter: String) {\n        allTeachers (filter: $filter) {\n            id\n            familyName\n            name\n            teacherCode\n        }\n    }\n"]))),h=(0,u.Ps)(o||(o=(0,d.Z)(["\n    query allClassess ($filter: String, $program: Int) {\n        allClassess (filter: $filter, program: $program) {\n            id\n            classes\n            classesNumeric\n        }\n\t}\n"]))),x=(0,u.Ps)(a||(a=(0,d.Z)(['\n    query allSubjects ($offset: Int!, $limit: Int!, $filter: String) {\n        count (appName: "subject", modelName: "Subject", filter: $filter) {\n            count\n        }\n        allSubjects (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            subject \n            subjectCode\n            credit\n        }\n    }\n']))),j=(0,u.Ps)(i||(i=(0,d.Z)(["\n    query selectProgram {\n        allPrograms {\n            id\n            program\n            programNumeric\n        }\n    }\n"]))),p=(0,u.Ps)(c||(c=(0,d.Z)(["\n    query sectionsByProgram ($program: Int!) {\n        sectionsByProgram (program: $program) {\n            id\n            section \n            classes {\n                classes\n            }\n        }\n    }\n"])))},26591:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var s=t(29439),r=t(72791),o=t(96578),a=t(86586),i=t(22949),c=t(73332),d=t(58361),u=t(66106),l=t(30914),m=t(66871),h=t(69421),x=t(87309),j=t(61146),p=t(41963),f=t(78803),Z=t(15671),y=t(43144),g=t(60136),C=t(29388),S=t(91333),$=t(36755),b=t(96679),k=t(1857),P=t(80184),I=function(n){(0,g.Z)(t,n);var e=(0,C.Z)(t);function t(){return(0,Z.Z)(this,t),e.apply(this,arguments)}return(0,y.Z)(t,[{key:"render",value:function(){var n=[];return this.props.datas.map((function(e,t){var s=(0,k.Z)().domainData,r=(0,P.jsx)("div",{className:"page-break",children:(0,P.jsxs)(m.Z,{style:{fontFamily:"Times New Roman",lineHeight:"17px",color:"black"},className:"aaa",bordered:!1,children:[(0,P.jsxs)("div",{className:"flex flex-row items-center justify-around",children:[(0,P.jsx)("img",{className:"w-24",src:s.logo,alt:e.studentCode}),(0,P.jsxs)("div",{className:"text-center",children:[(0,P.jsx)("p",{className:"text-3xl font-bold text-[#1a6991]",children:e.school}),(0,P.jsx)("div",{className:"text-center mt-3 text-xs text-[#1a6991]",dangerouslySetInnerHTML:{__html:e.textTop}})]}),(0,P.jsx)("img",{className:"w-24",src:b.m+e.studentPhoto,alt:e.studentPhoto})]}),(0,P.jsx)(S.Z,{}),(0,P.jsx)(u.Z,{children:(0,P.jsxs)(l.Z,{span:24,className:"text-center",children:[(0,P.jsx)("b",{className:"text-[#1a6991]",children:"\u0421\u0443\u0440\u0430\u043b\u0446\u0430\u0433\u0447\u0438\u0439\u043d \u0442\u043e\u0434\u043e\u0440\u0445\u043e\u0439\u043b\u043e\u043b\u0442"}),(0,P.jsx)("div",{className:"text-[#1a6991]",style:{fontSize:"15px"},dangerouslySetInnerHTML:{__html:e.textMid}})]})}),(0,P.jsx)(S.Z,{}),(0,P.jsx)(u.Z,{gutter:[16,16],children:(0,P.jsx)(l.Z,{span:24,children:(0,P.jsx)("div",{className:"text-center text-[#1a6991]",dangerouslySetInnerHTML:{__html:e.textBottom}})})}),(0,P.jsx)(u.Z,{children:(0,P.jsx)(l.Z,{span:24,className:"text-center",children:(0,P.jsx)($.Z,{src:"https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=http%3A%2F%2F".concat(window.location.hostname,"%2Freport/student-report%2F").concat(e.studentCode,"&chld=H&choe=UTF-8"),preview:!1})})})]})},t);return n.push(r)})),(0,P.jsx)("div",{children:n})}}]),t}(r.Component),N=I,M=t(82630),v=t(53719),q=t(68694),R=t(38937),T=i.Z.Option,w=function(){var n=(0,r.useState)(),e=(0,s.Z)(n,2),t=e[0],Z=e[1],y=(0,r.useContext)(v.S),g=(0,r.useState)(y.user),C=(0,s.Z)(g,1)[0],S=c.Z.useForm(),$=(0,s.Z)(S,1)[0],b=c.Z.useForm(),k=(0,s.Z)(b,1)[0],I=(0,r.useState)([]),w=(0,s.Z)(I,2),F=w[0],E=w[1],B=(0,r.useState)([]),_=(0,s.Z)(B,2),L=_[0],D=_[1],H=(0,r.useState)([]),A=(0,s.Z)(H,2),O=A[0],V=A[1],X=(0,o.a)(q.dT,{onCompleted:function(n){E(n.allPrograms)}}).loading,z=(0,a.t)(q.tL,{onCompleted:function(n){D(n.sectionsByProgram)}}),G=(0,s.Z)(z,2),J=G[0],Q=G[1].loading,U=(0,a.t)(q.JX,{onCompleted:function(n){V(n.allStudents)}}),W=(0,s.Z)(U,2),K=W[0],Y=W[1].loading,nn=(0,a.t)(p.ar,{onError:function(n){Z()},onCompleted:function(n){Z([n.studentReport])}}),en=(0,s.Z)(nn,2),tn=en[0],sn=en[1].loading,rn=(0,a.t)(p.Hi,{onError:function(n){Z()},onCompleted:function(n){Z(n.studentReportSection)}}),on=(0,s.Z)(rn,2),an=on[0],cn=on[1].loading,dn=(0,r.useRef)(),un=(0,j.useReactToPrint)({content:function(){return dn.current}}),ln=function(n){n.hasOwnProperty("studentCode")?tn({variables:{studentCode:n.studentCode}}):an({variables:{section:n.section}})};(0,r.useEffect)((function(){!0===C.isStudent&&tn({variables:{studentCode:C.student.studentCode}})}),[tn,C]);return(0,P.jsxs)("div",{children:[!1===C.isStudent&&(0,P.jsx)(d.Z,{active:!0,loading:X,children:(0,P.jsxs)(u.Z,{gutter:16,children:[(0,P.jsx)(l.Z,{xs:24,xl:12,children:(0,P.jsx)(m.Z,{className:"mt-4",title:(0,P.jsx)(M.Z,{id:"by-section"}),children:(0,P.jsxs)(c.Z,{id:"section",layout:"vertical",form:$,name:"control-hooks",onFinish:ln,children:[(0,P.jsx)(c.Z.Item,{name:"program",label:(0,P.jsx)(M.Z,{id:"program"}),rules:[{required:!0,message:(0,P.jsx)(M.Z,{id:"form.required"})}],children:(0,P.jsx)(i.Z,{onSelect:function(n){$.setFieldsValue({section:""}),J({variables:{program:n}})},allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:function(n,e){return e.children.toString().toLowerCase().indexOf(n.toLowerCase())>=0},children:F.map((function(n,e){return(0,P.jsxs)(T,{value:n.id,children:[n.program," / ",n.programNumeric]},e)}))})}),(0,P.jsx)(c.Z.Item,{name:"section",label:(0,P.jsx)(M.Z,{id:"section"}),rules:[{required:!0,message:(0,P.jsx)(M.Z,{id:"form.required"})}],children:(0,P.jsx)(i.Z,{allowClear:!0,notFoundContent:Q?(0,P.jsx)(R.Z,{cover:"content"}):(0,P.jsx)(h.Z,{image:h.Z.PRESENTED_IMAGE_SIMPLE}),children:L.map((function(n,e){return(0,P.jsxs)(T,{value:n.id,children:[n.classes.classes," / ",n.section]},e)}))})}),(0,P.jsx)(c.Z.Item,{className:"text-right",children:(0,P.jsx)(x.Z,{className:"mr-2",type:"primary",htmlType:"submit",loading:cn,children:"\u0421\u043e\u043d\u0433\u043e\u0445"})})]})})}),(0,P.jsx)(l.Z,{xs:24,xl:12,children:(0,P.jsx)(m.Z,{className:"mt-4",title:(0,P.jsx)(M.Z,{id:"by-student-code"}),children:(0,P.jsxs)(c.Z,{id:"student",layout:"vertical",form:k,name:"control-hooks",onFinish:ln,children:[(0,P.jsx)(c.Z.Item,{name:"studentCode",label:(0,P.jsx)(M.Z,{id:"studentCode"}),rules:[{required:!0,message:(0,P.jsx)(M.Z,{id:"form.required"})}],children:(0,P.jsx)(i.Z,{showSearch:!0,filterOption:!1,notFoundContent:Y?(0,P.jsx)(R.Z,{cover:"content"}):(0,P.jsx)(h.Z,{image:h.Z.PRESENTED_IMAGE_SIMPLE}),onSearch:function(n){""===n?V([]):K({variables:{offset:0,limit:99999999,filter:n}})},children:O.map((function(n,e){return(0,P.jsxs)(T,{value:n.studentCode,children:[" ",n.familyName," ",n.name," / ",n.studentCode]},e)}))})}),(0,P.jsx)(c.Z.Item,{className:"text-right",children:(0,P.jsx)(x.Z,{className:"mr-2",type:"primary",htmlType:"submit",loading:sn,children:"\u0421\u043e\u043d\u0433\u043e\u0445"})})]})})})]})}),t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"text-right",children:(0,P.jsxs)(x.Z,{onClick:un,type:"primary",icon:(0,P.jsx)(f.Z,{}),children:[" ",(0,P.jsx)(M.Z,{id:"print"})]})}),(0,P.jsx)(N,{ref:dn,datas:t})]})]})}}}]);
//# sourceMappingURL=6591.57585750.chunk.js.map