(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/treefrog.52b16bf8.jpg"},18:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(6),m=a(1),u=a(17),i=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,a?r.a.createElement("div",null,"Your form entry was ",a.get("myText")," and ",a.get("myDropdown")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);l(t)}},r.a.createElement("label",{htmlFor:"myTextId"},"Input"),r.a.createElement("input",{type:"text",name:"myText",id:"myTextId"}),r.a.createElement("label",{htmlFor:"myDropdownId"},"Input"),r.a.createElement("select",{name:"myDropdown",id:"myDropdownId"},r.a.createElement("option",{value:"foo"},"Foo"),r.a.createElement("option",{value:"bar"},"Bar"),r.a.createElement("option",{value:"baz"},"Baz")),r.a.createElement("input",{type:"submit",value:"Send it"})))},d=a(15),p=a.n(d),E=function(){return r.a.createElement("div",null,"The home page",r.a.createElement("h1",null,"I changed this homepage"),r.a.createElement("img",{src:p.a,alt:"tree frog"}),r.a.createElement(i,null))},h=function(){return r.a.createElement("div",null,"The foo page")},f=function(e){return r.a.createElement("div",null,"The bar page with categoryId of ",e.categoryId," and productId of ",e.productId)},b=function(e){return r.a.createElement("div",null,"The baz page",r.a.createElement("article",null,r.a.createElement("h1",null,e.content.title),r.a.createElement("address",null,"Author: ",e.content.author),r.a.createElement("p",null,e.content.text)))},g=function(){return r.a.createElement("div",null,"The error page")},s={id:"article-1",title:"An Article",author:"April Bingham",text:"Some text in the article"};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/foo"},"Foo")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/bar/hats/sombrero"},"Bar")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/baz"},"Baz"))))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:E}),r.a.createElement(m.a,{path:"/foo",exact:!0,component:h}),r.a.createElement(m.a,{path:"/bar/:categoryId/:productId",exact:!0,render:function(e){var t=e.match;return r.a.createElement(f,{categoryId:t.params.categoryId,productId:t.params.productId})}}),r.a.createElement(m.a,{path:"/baz",exact:!0,render:function(){return r.a.createElement(b,{content:s})}}),r.a.createElement(m.a,{component:g})))};o.a.render(r.a.createElement(c.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},r.a.createElement(v,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1a3b1af7.chunk.js.map