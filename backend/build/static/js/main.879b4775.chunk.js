(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){e.exports=a(285)},283:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(111),l=a.n(s),c=a(30),o=a(31),u=a(35),i=a(32),m=a(34),d=a(56),p=a(6),h=a.n(p),f=a(14),w=a(15),E=a(21),b=a.n(E),g={getAll:function(){return b.a.get("/api/staff").then(function(e){return e.data})},addNew:function(){var e=Object(f.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/staff",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),takeDown:function(){var e=Object(f.a)(h.a.mark(function e(t,a){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("/api/staff","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"bearer ".concat(t);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},v={creatUser:function(){var e=Object(f.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/user",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).propertyChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.register=function(e){var t={name:a.state.name,username:a.state.username,password:a.state.password};""===t.name||""===t.username||""===t.password?(e.preventDefault(),window.confirm("PLEASE ENTERS YOUR DETAILS")):v.creatUser(t).then(function(){a.setState({name:"",username:"",password:""})})},a.state={name:"",username:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-div"},r.a.createElement("h1",null,"Log into app"),r.a.createElement("form",{className:"login-form",onSubmit:this.props.submit},"Username: ",r.a.createElement("input",{className:"boxes",name:"username",onChange:this.props.handleChange,type:"text"}),r.a.createElement("br",null),"Password: ",r.a.createElement("input",{className:"boxes",name:"password",onChange:this.props.handleChange,type:"password"}),r.a.createElement("br",null),r.a.createElement("button",null,"Login")),r.a.createElement("h1",null,"Register as a user"),r.a.createElement("form",{onSubmit:this.register},"Name: ",r.a.createElement("input",{className:"boxes",name:"name",onChange:this.propertyChange,type:"text"}),"Username: ",r.a.createElement("input",{className:"boxes",name:"username",onChange:this.propertyChange,type:"text"}),r.a.createElement("br",null),"Password: ",r.a.createElement("input",{className:"boxes",name:"password",onChange:this.propertyChange,type:"password"}),r.a.createElement("br",null),r.a.createElement("button",null,"Register")))}}]),t}(r.a.Component),y={login:function(){var e=Object(f.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},C=a(287),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).login=function(){var e=Object(f.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,y.login({username:a.state.username,password:a.state.password});case 4:n=e.sent,window.localStorage.setItem("currentUser",JSON.stringify(n)),g.setToken(n.token),a.setState({username:"",password:"",user:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("wrong credentials");case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.logout=function(e){window.localStorage.clear(),window.location.reload(!0)},a.state={workers:[],name:"",address:"",title:"",password:"",user:"",username:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.addNewWorker=a.addNewWorker.bind(Object(w.a)(Object(w.a)(a))),a.login=a.login.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getAll().then(function(t){e.setState({workers:t})})}},{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"deleteItem",value:function(e){var t=this;return function(){var a=t.state.workers.find(function(t){return t.Id===e}),n=t.state.workers.find(function(t){return t.Id!==e});g.takeDown(e,a).then(function(e){console.log("res: ",e),t.setState({workers:t.state.workers.push(n)})}),window.location.reload(!0)}}},{key:"addNewWorker",value:function(e){var t=this,a={name:this.state.name,address:this.state.address,title:this.state.title};""===a.name||""===a.address||""===a.title?(e.preventDefault(),window.confirm("DETAILS FIELD CANNOT BE EMPTY")):g.addNew(a).then(function(e){t.setState({workers:t.state.workers.concat(e),name:"",address:"",title:""})})}},{key:"render",value:function(){var e=this;return null===window.localStorage.getItem("currentUser")?r.a.createElement("div",null,r.a.createElement(k,{handleChange:this.handleChange,submit:this.login})):r.a.createElement("div",{className:"login-div"},r.a.createElement("button",{onClick:this.logout},"Logout"),r.a.createElement("div",null,r.a.createElement("h2",null,"ADD NEW WORKER"),r.a.createElement("form",{onSubmit:this.addNewWorker},"Name: ",r.a.createElement("input",{className:"boxes",type:"text",name:"name",onChange:this.handleChange}),r.a.createElement("br",null),"Address: ",r.a.createElement("input",{className:"boxes",type:"text",name:"address",onChange:this.handleChange}),r.a.createElement("br",null),"Title: ",r.a.createElement("input",{className:"boxes",type:"title",name:"title",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",null,"ADD"))),r.a.createElement("h2",null,"STAFF"),r.a.createElement(C.a,{striped:!0,celled:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,null,"NAME"),r.a.createElement(C.a.HeaderCell,null,"TITLE"),r.a.createElement(C.a.HeaderCell,null,"ADDRESS"),r.a.createElement(C.a.HeaderCell,null))),r.a.createElement(C.a.Body,null,this.state.workers.map(function(t){return r.a.createElement(C.a.Row,{key:t.Id},r.a.createElement(C.a.Cell,null," ",t.Name),r.a.createElement(C.a.Cell,null,t.Title),r.a.createElement(C.a.Cell,null,t.Address),r.a.createElement(C.a.Cell,null,r.a.createElement("button",{onClick:e.deleteItem(t.Id)},"Delete")))}))))}}]),t}(r.a.Component),N=a(286),j=a(288),x=[{key:"staff",active:!0,name:"STAFF INFORMATION"},{key:"with",active:!0,name:"WITH "},{key:"react",active:!0,name:" REACT"},{key:"node",active:!0,name:" NODE"},{key:"mysql",active:!0,name:"MYSQL"},{key:"and",active:!0,name:"AND"},{key:"semantic",active:!0,name:"SEMANTIC-UI"}],S=function(e){return r.a.createElement(j.a,{items:x})},A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(S,null),r.a.createElement(O,null))}}]),t}(r.a.Component);a(283);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[133,2,1]]]);
//# sourceMappingURL=main.879b4775.chunk.js.map