(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.f9ebcc13.png"},20:function(e,a,t){e.exports=t(42)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},33:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(16),l=t.n(s),o=t(3),c=t(4),i=t(7),m=t(6),u=t(8),d=(t(14),t(26),t(17)),p=t.n(d),h=(t(28),t(30),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"redirectToUrl",value:function(e,a){a.preventDefault(),window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"news-container",onClick:function(a){return e.redirectToUrl(e.props.news.url,a)}},r.a.createElement("div",{className:"card-panel z-depth-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4 fill"},r.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),r.a.createElement("div",{className:"col s1"}),r.a.createElement("div",{className:"col s7"},r.a.createElement("div",{className:"news-intro-col"},r.a.createElement("div",{className:"news-intro-panel"},r.a.createElement("h4",null,this.props.news.title),r.a.createElement("div",{className:"news-description"},r.a.createElement("p",null,this.props.news.description),r.a.createElement("div",null,null!=this.props.news.source&&r.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&r.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.time&&r.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time)))))))))}}]),a}(r.a.Component)),w=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"authenticateUser",value:function(e,a){localStorage.setItem("token",e),localStorage.setItem("email",a)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token"),localStorage.removeItem("email")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getEmail",value:function(){return localStorage.getItem("email")}}]),e}(),v=t(18),g=t.n(v),E=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={news:null},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.loadMoreNews(),this.loadMoreNews=g.a.debounce(this.loadMoreNews,1e3),window.addEventListener("scroll",function(){return e.handleScroll()})}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-50&&(console.log("Loading more news..."),this.loadMoreNews())}},{key:"loadMoreNews",value:function(){var e=this;console.log("Actually triggered loading more news");var a="http://"+window.location.hostname+":3000/news",t=new Request(a,{method:"GET",headers:{Authorization:"bearer "+w.getToken()}});fetch(t).then(function(e){return e.json()}).then(function(a){e.setState({news:e.state.news?e.state.news.concat(a):a})})}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return r.a.createElement("a",{className:"list-group-item",href:"#"},r.a.createElement(h,{news:e}))});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?r.a.createElement("div",null,this.renderNews()):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),f=(t(15),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:p.a,alt:"logo"}),r.a.createElement("div",{className:"container"},r.a.createElement(E,null)))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(45),b=t(43),y=t(44),j=(t(33),function(e){var a=e.onSubmit,t=e.onChange,n=e.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-panel login-panel"},r.a.createElement("form",{className:"col s12",action:"/",onSubmit:a},r.a.createElement("h4",{className:"center-align"},"Login"),n.summary&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.summary)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"validate",id:"email",type:"email",name:"email",onChange:t}),r.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.email)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"validate",id:"password",type:"password",name:"password",onChange:t}),r.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.password)),r.a.createElement("div",{className:"row right-align"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Log in"})),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"right-align"}," New to Tap News?  ",r.a.createElement(b.a,{to:"/signup"},"Sign Up"))))))}),k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={errors:{},user:{email:"",password:""}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"processForm",value:function(e){var a=this;e.preventDefault();var t=this.state.user.email,n=this.state.user.password;console.log("email:",t),console.log("password:",n);var r="http://"+window.location.hostname+":3000/auth/login",s=new Request(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});fetch(s).then(function(e){200===e.status?(a.setState({errors:{}}),e.json().then(function(e){console.log(e),w.authenticateUser(e.token,t),window.location.replace("/")})):(console.log("Login failed."),e.json().then(function(e){var t=e.errors?e.errors:{};t.summary=e.message,a.setState({errors:t})}))})}},{key:"changeUser",value:function(e){var a=e.target.name,t=this.state.user;t[a]=e.target.value,this.setState({user:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(j,{onSubmit:function(a){return e.processForm(a)},onChange:function(a){return e.changeUser(a)},errors:this.state.errors})}}]),a}(r.a.Component),O=(t(37),function(e){var a=e.onSubmit,t=e.onChange,n=e.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-panel signup-panel"},r.a.createElement("form",{className:"col s12",action:"/",onSubmit:a},r.a.createElement("h4",{className:"center-align"},"Sign Up"),n.summary&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.summary)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"email",type:"email",name:"email",className:"validate",onChange:t}),r.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.email)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",type:"password",name:"password",className:"validate",onChange:t}),r.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.password)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"confirm_password",type:"password",name:"confirm_password",className:"validate",onChange:t}),r.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"))),r.a.createElement("div",{className:"row right-align"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Sign Up"})),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"right-align"}," Already have an account? ",r.a.createElement(b.a,{to:"/login"},"Login"))))))}),S=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={errors:{},user:{email:"",password:"",confirm_password:""}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"processForm",value:function(e){var a=this;e.preventDefault();var t=this.state.user.email,n=this.state.user.password,r=this.state.user.confirm_password;if(console.log("email:",t),console.log("password:",n),console.log("confirm_password:",r),n===r){var s="http://"+window.location.hostname+":3000/auth/signup",l=new Request(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});fetch(l).then(function(e){200===e.status?(a.setState({errors:{}}),window.location.replace("/")):(console.log("Signup failed."),e.json().then(function(e){var t=e.errors?e.errors:{};t.summary=e.message,a.setState({errors:t})}))})}}},{key:"changeUser",value:function(e){var a=e.target.name,t=this.state.user;t[a]=e.target.value,this.setState({user:t});var n=this.state.errors;this.state.user.password!==this.state.user.confirm_password?n.password="Password and confirm password don't match":n.password="",this.setState({errors:n})}},{key:"render",value:function(){var e=this;return r.a.createElement(O,{onSubmit:function(a){return e.processForm(a)},onChange:function(a){return e.changeUser(a)},errors:this.state.errors})}}]),a}(r.a.Component),C=(t(39),function(){w.deauthenticateUser(),window.location.replace("/login")}),U=function(){return r.a.createElement(N.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-bar indigo lighten-1"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo"}," Tap News"),r.a.createElement("ul",{id:"nav-mobile",className:"right"},w.isUserAuthenticated()?r.a.createElement("div",null,r.a.createElement("li",null,w.getEmail()),r.a.createElement("li",null,r.a.createElement("a",{onClick:C},"Log out"))):r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/login"},"Log in")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/signup"},"Sign up")))))),r.a.createElement("br",null),r.a.createElement(y.a,{exact:!0,path:"/",render:function(){return w.isUserAuthenticated()?r.a.createElement(f,null):r.a.createElement(k,null)}}),r.a.createElement(y.a,{exact:!0,path:"/login",component:k}),r.a.createElement(y.a,{exact:!0,path:"/signup",component:S})))};l.a.render(r.a.createElement(N.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.8aa02b8d.chunk.js.map