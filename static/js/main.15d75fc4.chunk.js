(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(7),n=a.n(r),i=(a(12),a(0));function l(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"green darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"/react-movies",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/chertenokru/react-movies",children:"Repo"})})})]})})})}function h(){return Object(i.jsx)("footer",{className:"page-footer green lighten-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 2020 - ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/chertenokru/react-movies",children:"Repo"})]})})})}var o=a(2),j=a(3),d=a(5),p=a(4);function b(e){var t=e.movie,a=t.Poster,c=t.Title,s=t.Type,r=t.Year,n=t.imdbID;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"card horizontal hoverable movie ",children:[Object(i.jsx)("div",{className:"card-image",children:"N/A"===a?Object(i.jsx)("img",{alt:c,src:"https://via.placeholder.com/300x400.png?text=".concat(c)}):Object(i.jsx)("img",{alt:c,src:a})}),Object(i.jsx)("div",{className:"card-stacked",children:Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("span",{className:"green-text text-darken-4 flow-text",children:[c,"   "]})}),Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Id:"})," ",n]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Type:"})," ",s]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Year:"})," ",r]})]})})]})})}var u=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.movies,t=void 0===e?[]:e;return Object(i.jsx)("div",{className:"movies",children:t.map((function(e){return Object(i.jsx)(b,{movie:e},e.imdbID)}))})}}]),a}(s.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:e.props.search,type:e.props.type},e.handleChecked=function(t){e.setState({type:t.target.dataset.type},(function(){e.state.search.length>1&&e.props.updateSearch(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12",children:Object(i.jsxs)("div",{className:"input-field ",children:[Object(i.jsx)("input",{className:"validate",placeholder:"type english part name to search...",type:"search",value:this.state.search,minLength:"1",onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&e.props.updateSearch(e.state.search,e.state.type)}}),Object(i.jsxs)("div",{className:"searchRadio",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type","data-type":"all",checked:"all"===this.state.type,onChange:this.handleChecked}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type","data-type":"series",checked:"series"===this.state.type,onChange:this.handleChecked}),Object(i.jsx)("span",{children:"Series"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type","data-type":"movie",checked:"movie"===this.state.type,onChange:this.handleChecked}),Object(i.jsx)("span",{children:"Movie"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",type:"radio",name:"type","data-type":"game",checked:"game"===this.state.type,onChange:this.handleChecked}),Object(i.jsx)("span",{children:"Game"})]})]}),Object(i.jsx)("button",{className:"btn waves-effect waves-light search green darken-1",onClick:function(t){e.props.updateSearch(e.state.search,e.state.type)},children:"Search"})]})})})}}]),a}(s.a.Component);function O(){return Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-green-only",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}function g(e){for(var t=e.onPageChage,a=e.page,c=void 0===a?1:a,s=e.pages,r=void 0===s?1:s,n=[],l=function(e){n.push(Object(i.jsx)("li",{className:c===e?"active green darken-1":"waves-effect",onClick:function(){return t(e)},children:Object(i.jsx)("a",{href:"#!",children:e})},e))},h=1;h<r+1;h++)l(h);return Object(i.jsx)("ul",{className:"pagination",children:n})}var v="f58079a",x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!1,result:!1,error:"",pages:0,page:1,search:"",type:"all"},e.updatePage=function(t){e.updateSearch(e.state.search,e.state.type,t)},e.updateSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(t.length<3)return e.setState({loading:!1,result:!1,error:"\u0421\u0442\u0440\u043e\u043a\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0442 3\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",pages:0,page:c?1:c,search:t,type:a}),void console.log(t.length);e.setState({loading:!0,result:!1,error:"",pages:0,page:c,search:t,type:a},(function(){fetch("https://www.omdbapi.com/?apikey=".concat(v,"&s=").concat(t,"&page=").concat(c).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){return e.setState({movies:t.Search,loading:!1,result:Boolean(t.Response),error:t.Error,pages:t.totalResults?parseInt(t.totalResults/10)+1:1})})).catch((function(t){return e.setState({movies:[],loading:!1,result:!1,error:t.toString(),pages:1})}))}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.updateSearch("dune")}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.pages,c=e.page,s=e.error,r=e.result,n=e.movies,l=e.search,h=e.type,o=a>1?Object(i.jsx)(g,{page:c,pages:a,onPageChage:this.updatePage}):"";return Object(i.jsxs)("main",{className:"container content",children:[t?Object(i.jsx)(O,{}):Object(i.jsx)(m,{updateSearch:this.updateSearch,search:l,type:h}),o,!0!==r||t?"":Object(i.jsx)(u,{movies:n}),!1!==r||t?"":Object(i.jsxs)("div",{className:"errorText",children:[Object(i.jsx)("h4",{children:"\u041e\u0448\u0438\u0431\u043a\u0430:"}),Object(i.jsx)("h5",{children:s})]}),o]})}}]),a}(s.a.Component);var f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{}),Object(i.jsx)(h,{})]})};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.15d75fc4.chunk.js.map