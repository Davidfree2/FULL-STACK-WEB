(this["webpackJsonpsearch-engine"]=this["webpackJsonpsearch-engine"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(9),r=n.n(s),c=n(8),a=n.n(c),i=n(10),u=n(2),o=n(3),j=n(6),l=n(5),h=n(4),b=n(1),O=n.n(b),p=n(0),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"SearchBar",children:Object(p.jsx)("form",{onSubmit:this.props.submitAction,children:Object(p.jsx)("input",{type:"text",name:"searchQuery",placeholder:"type to search",ref:this.props.queryText})})})}}]),n}(O.a.Component),x=d,f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"SearchResults",children:this.props.results.map((function(e){return Object(p.jsxs)("div",{className:"SingleResult",children:[Object(p.jsx)("h1",{children:e.displayLink}),Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("h3",{children:e.snippet}),Object(p.jsx)("a",{target:"_blank",href:e.link,children:e.link})]})}))})}}]),n}(O.a.Component),y=f,m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"HomePageLogo",children:Object(p.jsx)("h1",{children:"ka-plink"})})}}]),n}(O.a.Component),v=m,g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"HomePageLogoMotto",children:Object(p.jsx)("h2",{children:"Hosting the greatest websites in the world"})})}}]),n}(O.a.Component),k=g,N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).searchQueryAction=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,c,i,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s.state.queryValue.value;case 3:return n=e.sent,e.next=6,fetch("http://192.168.254.17:5000/query",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({queryText:n})});case 6:return r=e.sent,e.next=9,r.text();case 9:return c=e.sent,e.next=12,fetch(c);case 12:return i=e.sent,e.next=15,i.json();case 15:return u=e.sent,e.next=18,JSON.parse(JSON.stringify(u));case 18:o=e.sent,s.setState({searchResults:o}),console.log(o);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={searchResults:null},s.searchQueryAction=s.searchQueryAction.bind(Object(j.a)(s)),s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return this.state.searchResults?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"Nav",children:[Object(p.jsx)(x,{queryText:function(t){return e.state.queryValue=t},submitAction:this.searchQueryAction}),Object(p.jsx)("div",{className:"resultInfo",children:Object(p.jsxs)("h1",{children:["Total results:",this.state.searchResults.queries.request[0].totalResults]})})]}),Object(p.jsx)(y,{results:this.state.searchResults.items})]}):Object(p.jsxs)("div",{className:"HomePage",children:[Object(p.jsx)(v,{}),Object(p.jsx)(k,{}),Object(p.jsx)(x,{queryText:function(t){return e.state.queryValue=t},submitAction:this.searchQueryAction})]})}}]),n}(O.a.Component),q=N;n(17);r.a.render(Object(p.jsx)(q,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ea3bc4c4.chunk.js.map