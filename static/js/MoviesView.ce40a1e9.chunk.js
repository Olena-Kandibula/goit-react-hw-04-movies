(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{32:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return b}));var c=n(36),r=n.n(c),a=n(37),i="https://api.themoviedb.org/3",o="37ddbc320f48fcbb375faaee253d2760";function s(){return u.apply(this,arguments)}function u(){return u=Object(a.a)(r.a.mark((function t(){var e,n,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,n);case 4:if(!(c=t.sent).ok){t.next=11;break}return t.next=8,c.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(console.log("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return s("".concat(i,"/trending/movie/day?api_key=").concat(o))}function v(t){var e=t.movieId;return s("".concat(i,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US&page=1"))}function f(t){var e=t.movieId;return s("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o))}function m(t){var e=t.movieId;return s("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o))}function b(t){var e=t.searchQuery;return s("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1&include_adult=false"))}},34:function(t,e,n){"use strict";var c=n(35),r=n.n(c),a=n(1);e.a=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:r.a.container,children:[Object(a.jsxs)("h2",{children:[" ",e]}),n]})}},35:function(t,e,n){t.exports={container:"Container_container__2Mr8N"}},38:function(t,e,n){"use strict";var c=n(42),r=n.n(c),a=n(1);e.a=function(t){var e=t.onClick,n=t.children,c=t.type;return Object(a.jsx)("button",{type:c||"button",className:r.a.button,onClick:e,children:n})}},40:function(t,e,n){"use strict";var c=n(2),r=n(8),a=n(41),i=n.n(a),o=n(1);e.a=function(t){var e=t.movies,n=Object(c.i)().url,a=Object(c.g)(),s=n.replace("movies","");return Object(o.jsx)("ul",{className:i.a.list,children:e.map((function(t){return Object(o.jsx)("li",{className:i.a.item,children:Object(o.jsx)(r.b,{to:{pathname:"".concat(s,"movies/").concat(t.id),state:{from:a}},className:i.a.link,activeClassName:i.a.activeLink,children:t.title})},t.id)}))})}},41:function(t,e,n){t.exports={list:"MoviesList_list__m_Av6",item:"MoviesList_item__4AEXM",link:"MoviesList_link__2vE06",activeLink:"MoviesList_activeLink__2nRcw"}},42:function(t,e,n){t.exports={button:"Button_button__GITcU"}},45:function(t,e,n){t.exports={searchForm:"SearchForm_searchForm__AV5PK",searchFormInput:"SearchForm_searchFormInput__29xxy"}},55:function(t,e,n){"use strict";n.r(e);var c=n(33),r=n(0),a=n(32),i=n(34),o=n(38),s=n(45),u=n.n(s),l=n(46),v=n(1);var f=function(t){var e=t.onSubmit,n=Object(r.useState)(""),a=Object(c.a)(n,2),i=a[0],s=a[1];return Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(i.trim().toLowerCase()),""!==i?(e(i),s("")):alert("Input is empty")},className:u.a.searchForm,children:[Object(v.jsx)("input",{className:u.a.searchFormInput,type:"text",autoComplete:"off",value:i,onChange:function(t){var e=t.currentTarget.value;s(e)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",autoFocus:!0,placeholder:"Search movies"}),Object(v.jsx)(o.a,{type:"submit",children:Object(v.jsx)(l.a,{size:"20"})})]})},m=n(40);var b=function(){return Object(v.jsx)("p",{children:"Unknown movie title, please try again! "})};e.default=function(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)([]),u=Object(c.a)(s,2),l=u[0],p=u[1];return Object(r.useEffect)((function(){""!==n&&a.b({searchQuery:n}).then((function(t){return 0!==t.total_results?p(t.results):o("unCorrect")})).catch((function(t){return console.warn(t)}))}),[n]),Object(v.jsxs)(i.a,{children:[Object(v.jsx)(f,{onSubmit:function(t){o(t)}}),"unCorrect"!==n?Object(v.jsx)(m.a,{movies:l}):Object(v.jsx)(b,{})]})}}}]);
//# sourceMappingURL=MoviesView.ce40a1e9.chunk.js.map