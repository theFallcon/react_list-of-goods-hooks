(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(6),r=n.n(s),o=n(5),i=n(8),a=n(1),u=n(7),l=n.n(u),b=(n(13),n(14),n(0));!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(c.NONE),u=Object(o.a)(r,2),d=u[0],h=u[1],N=function(t,e){var n=e.sortType,s=e.isReversed,r=Object(i.a)(t);return r.sort((function(t,e){switch(n){case c.LENGTH:return t.length-e.length;case c.ALPHABET:return t.localeCompare(e);default:return 0}})),s&&r.reverse(),r}(j,{sortType:d,isReversed:n}),O=n||d!==c.NONE,f=function(t){return l()("button",{"is-light":t})};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"is-info ".concat(f(d!==c.ALPHABET)),onClick:function(){return h(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"is-success ".concat(f(d!==c.LENGTH)),onClick:function(){return h(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"is-warning ".concat(f(!n)),onClick:function(){return s((function(t){return!t}))},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){return s(!1),void h(c.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};r.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16a2f405.chunk.js.map