(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e){e.exports={products:[{id:1,name:"T-shirt",img:"shirt_small.jpg",description:"Nice shirt with a statement",price:20,size:["S","M","L"],color:["bl\xe5","r\xf6d","gul"]},{id:2,name:"Polo shirt",img:"shirt2_small.jpg",description:"Nice polo statement is futile",price:15,size:["S","M","L"],color:["bl\xe5","r\xf6d","gul"]},{id:3,name:"Cap",img:"cap_small.jpg",description:"Nice cap with a statement",price:5,size:["Onesize"],color:["svart","gul"]}]}},18:function(e,t,a){e.exports=a(28)},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(10),o=a(11),u=a(15),m=a(12),s=a(16),p=a(31),d=a(32),E=a(33),v=a(3),h=a(30),f=a(13),b=Object(n.createContext)();var g=function(e){var t=f.products.map(function(e){return null==e.inCart&&(e.inCart=1),e}),a=Object(n.useState)(t),c=Object(v.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)([]),u=Object(v.a)(o,2),m=u[0],s=u[1];return r.a.createElement(b.Provider,{value:[l,i,m,s]},e.children)};var O=function(){var e=Object(n.useContext)(b),t=Object(v.a)(e,3)[2],a=0;return 0!==t.length&&t.forEach(function(e){a+=e.inCart}),r.a.createElement("nav",{className:"mainNav"},r.a.createElement("div",{className:"navLogo"},r.a.createElement(h.a,{className:"logoLink",to:"./"},"LOGO")),r.a.createElement("div",{className:"navlinks"},r.a.createElement(h.a,{className:"link",to:"./about"},"About"),r.a.createElement(h.a,{className:"link",to:"./shop"},"Shop"),r.a.createElement(h.a,{className:"cart_link",to:"./cart"},"CART : ",a)))};var j=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home_content"},r.a.createElement("div",{className:"home_header"},r.a.createElement("h1",null,"Did you know?"),r.a.createElement("h2",null,"People are suffering")),r.a.createElement("div",{className:"home_text"},r.a.createElement("p",null,"They are 1000 of.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement("div",{className:"help_btn"},r.a.createElement("a",{href:"none"},"How can i help?")))},N=a(5);var C=function(e){var t=Object(n.useState)(String(e.item.size[0])),a=Object(v.a)(t,2),c=a[0],l=a[1],i=Object(n.useContext)(b),o=Object(v.a)(i,4),u=o[2],m=o[3];return r.a.createElement("div",{className:"product_frame"},r.a.createElement("h3",null,e.item.name),r.a.createElement("img",{className:"product_img",alt:"productimage",src:"./img/products/"+e.item.img}),r.a.createElement("p",null,e.item.description),r.a.createElement("p",null,r.a.createElement("strong",null,e.item.price,"$")),r.a.createElement("select",{value:c,onChange:function(e){return function(e){l(e.target.value)}(e)}},e.item.size.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("button",{onClick:function(){return function(e){var t=u,a=!1,n=JSON.parse(JSON.stringify(e));n.size=c,n.id=e.id+"-"+c,0!==t.length&&t.forEach(function(t){n.id===t.id&&(t.inCart++,a=!0,alert(e.name+" added to cart"))}),a?m(Object(N.a)(t)):(m([].concat(Object(N.a)(t),[n])),alert(e.name+" added to cart"))}(e.item)}},"Buy now"))};var k=function(){var e=Object(n.useContext)(b),t=Object(v.a)(e,3)[0].map(function(e){return r.a.createElement(C,{key:e.id,item:e})});return r.a.createElement("div",null,r.a.createElement("h1",{className:"shop_header"},"Products"),r.a.createElement("div",{className:"products"},t))};var x=function(){return r.a.createElement("div",null,"Hello from About page")};var w=function(){var e=Object(n.useContext)(b),t=Object(v.a)(e,4),a=t[2],c=t[3],l=null,i=0,o=Object(n.useCallback)(function(e,t){var n=Object(N.a)(a);n[t].inCart=parseInt(e.target.value),c(Object(N.a)(n))});return 0!==a.length&&(l=a.map(function(e,t){return i+=e.price*e.inCart,r.a.createElement("div",{key:e.id},r.a.createElement("li",null,r.a.createElement("input",{type:"number",value:e.inCart,onChange:function(e){return o(e,t)}}),r.a.createElement("p",null,e.name," Size:",e.size," Price:",e.price,"$"),r.a.createElement("button",{onClick:function(e){var n=Object(N.a)(a);n.splice(t,1),c(n)}},"Remove"),r.a.createElement("hr",null)))})),r.a.createElement("div",null,r.a.createElement("h1",null,"Checkout"),r.a.createElement("ul",null,l||r.a.createElement("h3",null,"No products")),r.a.createElement("h2",null,i," $"))};var y=function(){return r.a.createElement("h1",null,"404 Page not found")},_=(a(26),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,r.a.createElement(O,null),r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/calvin/",component:j}),r.a.createElement(E.a,{path:"/calvin/shop",component:k}),r.a.createElement(E.a,{path:"/calvin/about",component:x}),r.a.createElement(E.a,{path:"/calvin/cart",component:w}),r.a.createElement(E.a,{component:y}))))))}}]),t}(r.a.Component));l.a.render(r.a.createElement(function(){return r.a.createElement(_,null)},null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e28168c.chunk.js.map