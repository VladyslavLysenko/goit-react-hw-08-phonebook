"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{760:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var o,t,a,i,x,s,d,p,c,l,b=r(2791),u=r(9434),h=r(4270),m=r(6916),f=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},w=(0,m.P1)([function(n){return n.filters},f],(function(n,e){var r=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))})),j=r(168),k=r(6444),v=k.ZP.ul(o||(o=(0,j.Z)(["\n  font: normal 20px 'Bitter', serif;\n  color: #2a88ad;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n  gap:10px;\n"]))),Z=k.ZP.li(t||(t=(0,j.Z)(["\n \n"]))),y=k.ZP.div(a||(a=(0,j.Z)(["\n  ","\n \n"])),""),z=k.ZP.button(i||(i=(0,j.Z)(["\n  background: #2a88ad;\n  padding: 8px 20px 8px 20px;\n  border-radius: 5px;\n  -webkit-0border-radius: 5px;\n  -moz-border-radius: 5px;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n  font-size: 8px;\n  margin-left: 15px;\n"]))),C=r(9924),P=r(184),A=function(n){var e=n.contact,r=e.id,o=e.name,t=e.phone,a=(0,u.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(y,{children:[(0,P.jsxs)("span",{children:[o,":",t]}),(0,P.jsx)(z,{type:"button",onClick:function(){return a((0,C.GK)(r))},children:"Delete"})]})})},S=k.ZP.div(x||(x=(0,j.Z)(["\n  width: 450px;\n  padding: 30px;\n  margin: 40px auto;\n  background: #fff;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n"]))),B=k.ZP.div(s||(s=(0,j.Z)(["\n  padding: 5px;\n  background: #f8f8f8;\n  border-radius: 6px;\n  margin-bottom: 15px;\n"]))),F=k.ZP.section(d||(d=(0,j.Z)(["\n  font: normal 20px 'Bitter', serif;\n  color: #2a88ad;\n  margin-bottom: 5px;\n"]))),N=k.ZP.button(p||(p=(0,j.Z)(["\n  background: #2a88ad;\n  padding: 8px 20px 8px 20px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n  font-size: 15px;\n"]))),I=k.ZP.input(c||(c=(0,j.Z)(["\n  display: block;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  padding: 8px;\n  border-radius: 6px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border: 2px solid #fff;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n  -moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n  -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n"]))),L=function(){var n=(0,u.v9)(w);return console.log("visibleContacts",n),(0,P.jsx)(B,{children:(0,P.jsx)(v,{children:n.map((function(n){return(0,P.jsx)(Z,{children:(0,P.jsx)(A,{contact:n})},n.id)}))})})},q=r(9439);function M(){var n=(0,u.I0)(),e=(0,u.v9)(f),r=(0,b.useState)(""),o=(0,q.Z)(r,2),t=o[0],a=o[1],i=(0,b.useState)(""),x=(0,q.Z)(i,2),s=x[0],d=x[1],p=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":a(o);break;case"number":d(o);break;default:return}},c=function(r){var o=e.map((function(n){return n.name.toLowerCase()})).some((function(n){return n===t.toLowerCase()}));return o?(window.alert("This contact ".concat(t," already excist ")),!1):(n((0,C.uK)({name:t,phone:s})),!0)};return(0,P.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;c({name:t,phone:s})&&e.reset()},children:[(0,P.jsx)(F,{children:(0,P.jsx)(B,{children:(0,P.jsxs)("label",{children:["Name",(0,P.jsx)(I,{onChange:p,type:"text",name:"name",placeholder:"Add your name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})}),(0,P.jsx)(F,{children:(0,P.jsx)(B,{children:(0,P.jsxs)("label",{children:["Number",(0,P.jsx)(I,{onChange:p,type:"tel",name:"number",placeholder:"Add your number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})}),(0,P.jsx)(N,{type:"submit",children:"Add contact"}),(0,P.jsx)("div",{})]})}var T,_=k.ZP.h2(l||(l=(0,j.Z)(["\n  background: #2a88ad;\n  padding: 20px 30px 15px 30px;\n  margin: -30px -30px 30px -30px;\n  border-radius: 10px 10px 0 0;\n  -webkit-border-radius: 10px 10px 0 0;\n  -moz-border-radius: 10px 10px 0 0;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n"]))),D=function(n){var e=n.title,r=n.children;return(0,P.jsxs)("section",{children:[e&&(0,P.jsx)(_,{children:e}),r]})},J=r(8833),K=function(){var n=(0,u.I0)();return(0,P.jsx)(B,{children:(0,P.jsx)(F,{children:(0,P.jsxs)("label",{children:["Find contacts by Name",(0,P.jsx)(I,{name:"filter",onChange:function(e){return r=e.currentTarget.value,void n((0,J.T)(r));var r},type:"text",placeholder:"Search contact..."})]})})})},R=(r(7021),(0,k.vJ)(T||(T=(0,j.Z)(["\n p,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\nbutton {\n  cursor: pointer;\n}\n.link {\n  text-decoration: none;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"]))));function U(){var n=(0,u.I0)(),e=(0,u.v9)(g);return(0,b.useEffect)((function(){n((0,C.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h.q,{children:(0,P.jsx)("title",{children:"Your contacts"})}),(0,P.jsx)(S,{children:(0,P.jsx)(D,{title:"Phonebook",children:(0,P.jsx)(M,{})})}),(0,P.jsx)(S,{children:(0,P.jsxs)(D,{title:"Contacts",children:[(0,P.jsx)(K,{}),e&&(0,P.jsx)("b",{children:"Request in progress..."}),(0,P.jsx)(L,{})]})}),(0,P.jsx)(R,{})]})}}}]);
//# sourceMappingURL=132.a334ccdc.chunk.js.map