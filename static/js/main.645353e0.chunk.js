(this["webpackJsonpreact-ornekleri"]=this["webpackJsonpreact-ornekleri"]||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),m=t(18),i=t(9),s=t(6),o=t(8),u=function(){for(var e=[],a=0;a<1e5;a++)e[a]=a;console.time("bigNormal");e.filter((function(e){return e%2===0})).map((function(e){return 2*e}));console.timeEnd("bigNormal"),console.time("bigReduce");e.reduce((function(e,a){return a%2===0&&e.push(2*a),e}),[]);return console.timeEnd("bigReduce"),l.a.createElement("div",null,l.a.createElement("h1",null,"Reduce \xd6rne\u011fi"),l.a.createElement("p",null,"Sonu\xe7lar\u0131 g\xf6rmek i\xe7in l\xfctfen console ekran\u0131na bak\u0131n\u0131z."))};var E=function(){return l.a.createElement("h2",null,"Anasayfa")},d=function(){return l.a.createElement("div",{id:"content",className:"p-4 p-md-5 pt-5"},l.a.createElement(s.a,{path:"/",exact:!0,component:E}),l.a.createElement(s.a,{path:"/reduce",component:u}))},p=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],c=a[1];return l.a.createElement("nav",{id:"sidebar",className:t},l.a.createElement("div",{className:"custom-menu"},l.a.createElement("button",{type:"button",id:"sidebarCollapse",onClick:function(){c(null==t?"active":null)},className:"btn btn-primary"},l.a.createElement(o.d,{icon:o.c,size:"small"}),l.a.createElement("span",{className:"sr-only"},"Toggle Menu"))),l.a.createElement("div",{className:"p-4"},l.a.createElement("h3",null,"React \xd6rnekleri"),l.a.createElement("ul",{className:"list-unstyled components mb-5"},l.a.createElement("li",null,l.a.createElement(i.b,{exact:!0,to:"/",activeClassName:"active"},l.a.createElement(o.d,{icon:o.b,size:"small",className:"mr-3"}),"Anasayfa")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/reduce",activeClassName:"active"},l.a.createElement(o.d,{icon:o.a,size:"small",className:"mr-3"}),"Reduce"))),l.a.createElement("div",{className:"footer"})))},b=function(){return l.a.createElement(i.a,{basename:"/react-ornekleri"},l.a.createElement("div",{className:"wrapper d-flex align-items-stretch"},l.a.createElement(p,null),l.a.createElement(d,null)))},f=(t(29),t(30),document.getElementById("root"));r.a.render(l.a.createElement(b,null),f)}},[[19,1,2]]]);
//# sourceMappingURL=main.645353e0.chunk.js.map