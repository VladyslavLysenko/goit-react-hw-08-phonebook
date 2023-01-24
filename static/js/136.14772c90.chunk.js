"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[136],{2136:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var t=r(2791),o=r(9434),a=r(4270),i="NOT_FOUND";var s=function(n,e){return n===e};function u(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?s:t,a=r.maxSize,u=void 0===a?1:a,p=r.resultEqualityCheck,x=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),c=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:i},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(x):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return i}return{get:t,put:function(e,o){t(e)===i&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,x);function d(){var e=c.get(arguments);if(e===i){if(e=n.apply(null,arguments),p){var r=c.getEntries(),t=r.find((function(n){return p(n.value,e)}));t&&(e=t.value)}c.put(arguments,e)}return e}return d.clearCache=function(){return c.clear()},d}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function x(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(s=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var x=s,c=x.memoizeOptions,d=void 0===c?r:c,l=Array.isArray(d)?d:[d],f=p(t),b=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(l)),h=n((function(){for(var n=[],e=f.length,r=0;r<e;r++)n.push(f[r].apply(null,arguments));return a=b.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:b,dependencies:f,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var c,d,l,f,b,h,m,g,v,w,y=x(u),j=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},Z=y([function(n){return n.filters},j],(function(n,e){var r=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))})),z=r(168),C=r(7691),A=C.ZP.ul(c||(c=(0,z.Z)(["\n  font: normal 20px 'Bitter', serif;\n  color: #2a88ad;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n  gap: 10px;\n"]))),P=C.ZP.li(d||(d=(0,z.Z)([""]))),S=C.ZP.div(l||(l=(0,z.Z)(["\n  ","\n"])),""),F=C.ZP.button(f||(f=(0,z.Z)(["\n  background: #2a88ad;\n  padding: 8px 20px 8px 20px;\n  border-radius: 5px;\n  -webkit-0border-radius: 5px;\n  -moz-border-radius: 5px;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n  font-size: 8px;\n  margin-left: 15px;\n"]))),N=r(3634),q=r(184),B=function(n){var e=n.contact,r=e.id,t=e.name,a=e.number,i=(0,o.I0)();return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(S,{children:[(0,q.jsxs)("span",{children:[t,":",a]}),(0,q.jsx)(F,{type:"button",onClick:function(){return i((0,N.GK)(r))},children:"Delete"})]})})},E=C.ZP.div(b||(b=(0,z.Z)(["\n  width: 450px;\n  padding: 30px;\n  margin: 40px auto;\n  background: #fff;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n"]))),I=C.ZP.div(h||(h=(0,z.Z)(["\n  padding: 5px;\n  background: #f8f8f8;\n  border-radius: 6px;\n  margin-bottom: 15px;\n"]))),O=C.ZP.section(m||(m=(0,z.Z)(["\n  font: normal 20px 'Bitter', serif;\n  color: #2a88ad;\n  margin-bottom: 5px;\n"]))),L=C.ZP.button(g||(g=(0,z.Z)(["\n  background: #2a88ad;\n  padding: 8px 20px 8px 20px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n  font-size: 15px;\n"]))),R=C.ZP.input(v||(v=(0,z.Z)(["\n  display: block;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  padding: 8px;\n  border-radius: 6px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border: 2px solid #fff;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n  -moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n  -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n"]))),T=function(){var n=(0,o.v9)(Z);return(0,q.jsx)(I,{children:(0,q.jsx)(A,{children:n.map((function(n){return(0,q.jsx)(P,{children:(0,q.jsx)(B,{contact:n})},n.id)}))})})},_=r(9439);function D(){var n=(0,o.I0)(),e=(0,o.v9)(j),r=(0,t.useState)(""),a=(0,_.Z)(r,2),i=a[0],s=a[1],u=(0,t.useState)(""),p=(0,_.Z)(u,2),x=p[0],c=p[1],d=function(n){var e=n.target,r=e.name,t=e.value;switch(r){case"name":s(t);break;case"number":c(t);break;default:return}},l=function(r){var t=e.map((function(n){return n.name.toLowerCase()})).some((function(n){return n===i.toLowerCase()}));return t?(window.alert("This contact ".concat(i," already excist ")),!1):(console.log(i,x),n((0,N.uK)({name:i,number:x})),!0)};return(0,q.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;l({name:i,number:x})&&e.reset()},children:[(0,q.jsx)(O,{children:(0,q.jsx)(I,{children:(0,q.jsxs)("label",{children:["Name",(0,q.jsx)(R,{onChange:d,type:"text",name:"name",placeholder:"Add your name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})}),(0,q.jsx)(O,{children:(0,q.jsx)(I,{children:(0,q.jsxs)("label",{children:["Number",(0,q.jsx)(R,{onChange:d,type:"tel",name:"number",placeholder:"Add your number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})}),(0,q.jsx)(L,{type:"submit",children:"Add contact"}),(0,q.jsx)("div",{})]})}var M,U=C.ZP.h2(w||(w=(0,z.Z)(["\n  background: #2a88ad;\n  padding: 20px 30px 15px 30px;\n  margin: -30px -30px 30px -30px;\n  border-radius: 10px 10px 0 0;\n  -webkit-border-radius: 10px 10px 0 0;\n  -moz-border-radius: 10px 10px 0 0;\n  color: #fff;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);\n  font: normal 30px 'Bitter', serif;\n  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);\n  border: 1px solid #257c9e;\n"]))),J=function(n){var e=n.title,r=n.children;return(0,q.jsxs)("section",{children:[e&&(0,q.jsx)(U,{children:e}),r]})},K=r(4808),G=function(){var n=(0,o.I0)();return(0,q.jsx)(I,{children:(0,q.jsx)(O,{children:(0,q.jsxs)("label",{children:["Find contacts by Name",(0,q.jsx)(R,{name:"filter",onChange:function(e){return r=e.currentTarget.value,void n((0,K.T)(r));var r},type:"text",placeholder:"Search contact..."})]})})})},H=(0,C.vJ)(M||(M=(0,z.Z)(["\n p,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\nbutton {\n  cursor: pointer;\n}\n.link {\n  text-decoration: none;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"])));function Y(){var n=(0,o.I0)(),e=(0,o.v9)(k);return(0,t.useEffect)((function(){n((0,N.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(a.q,{children:(0,q.jsx)("title",{children:"Your contacts"})}),(0,q.jsx)(E,{children:(0,q.jsx)(J,{title:"Phonebook",children:(0,q.jsx)(D,{})})}),(0,q.jsx)(E,{children:(0,q.jsxs)(J,{title:"Contacts",children:[(0,q.jsx)(G,{}),e&&(0,q.jsx)("b",{children:"Request in progress..."}),(0,q.jsx)(T,{})]})}),(0,q.jsx)(H,{})]})}}}]);
//# sourceMappingURL=136.14772c90.chunk.js.map