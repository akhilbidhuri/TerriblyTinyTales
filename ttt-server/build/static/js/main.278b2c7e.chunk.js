(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=(n(47),n(5)),l=n(6),s=n(8),u=n(7),p=n(9),m=(n(48),n(24),n(38)),d=n.n(m),h=n(16),f=n(22),E=Object(h.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{request:!1,result:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SENT":return console.log("aa gaya !!"),Object(f.a)({},e,{request:!0,result:[]});case"RESULT_RECIEVED":return Object(f.a)({},e,{request:!1,result:t.payload});default:return e}}),b=function(e){E.dispatch({type:"REQUEST_SENT"}),d()({method:"post",url:"http://localhost:5000/frequency",headers:{},data:{n:e}}).then(function(e){E.dispatch({type:"RESULT_RECIEVED",payload:e.data.result})}).catch(function(e){console.log(e)})},y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).submit=function(){e.input.current.value&&/^[0-9]+$/.test(e.input.current.value)?(e.setState({value:!0}),b(e.input.current.value)):e.setState({value:!1})},e.input=r.a.createRef(),e.state={value:!0},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{marginTop:"3%"}},r.a.createElement("span",{style:{marginTop:"40%"}},r.a.createElement("h1",{className:"typo"},"Number of top words"),r.a.createElement("input",{type:"text",ref:this.input,className:"container",style:{marginBottom:"2%",width:"5vw",minHeight:"5vh",fontSize:"150%",background:"#fdfdfd",border:"1px solid #000",textAlign:"center"}}),r.a.createElement("button",{className:"bu",onClick:this.submit},"Go")),!this.state.value&&r.a.createElement("div",{style:{marginLeft:"36%",paddingLeft:"2%",paddingRight:"2%",width:"fit-content",borderRadius:"20px",background:"#f9bab6",color:"#f74336"}},r.a.createElement("h2",{className:"typo"},"Enter Correct value")))}}]),t}(a.Component),g=n(40),v=n.n(g),j=function(){return r.a.createElement(v.a,{type:"Grid",color:"#000",height:"100",width:"100"})},O=n(17),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{marginTop:"3%"}},r.a.createElement("h1",{className:"typo"},"Results"),this.props.request&&r.a.createElement(j,{style:{marginBottom:"5%"}}),this.props.result.length>0&&this.props.result.map(function(e){return r.a.createElement("div",{className:"smcontainer"},r.a.createElement("span",null,r.a.createElement("h1",{className:"typo",style:{display:"inline"}},e[0]),r.a.createElement("h1",{className:"typo",style:{marginRight:"0px",display:"inline",marginLeft:"5%",padding:"0px 10px 0px 10px",background:"#d1d1d1",borderRadius:"25px"}},e[1])))}))}}]),t}(a.Component),N=Object(O.b)(function(e){return e})(w),R=n(41),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R.Column,{horizontal:"center"},r.a.createElement(y,null),r.a.createElement(N,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O.a,{store:E},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,n){},42:function(e,t,n){e.exports=n(109)},47:function(e,t,n){},48:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.278b2c7e.chunk.js.map