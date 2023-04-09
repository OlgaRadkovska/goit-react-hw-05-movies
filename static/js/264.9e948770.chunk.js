"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[264],{9264:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i,s,o=t(5861),c=t(9439),u=t(7757),d=t.n(u),p=t(1087),f=t(7689),l=t(2791),v=t(1128),h=t(168),b=t(6444),x=b.ZP.button(r||(r=(0,h.Z)(["\n  margin: 15px 50px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 3px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #0d6efd;\n  }\n"]))),m=b.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 0 20px;\n\n  & img {\n    max-width: 200px;\n  }\n  & h1 {\n    margin: 0;\n  }\n\n  & h2 {\n    font-size: 20px;\n  }\n"]))),g=b.ZP.div(i||(i=(0,h.Z)(["\n  padding: 0 20px;\n  & h2 {\n    font-size: 20px;\n  }\n\n  & .additional:not(:last-child) {\n    padding-bottom: 10px;\n  }\n\n  & .additional {\n  }\n"]))),j=(0,b.ZP)(p.OL)(s||(s=(0,h.Z)(["\n  color: black;\n\n  &.active {\n    color: #0d6efd;\n  }\n"]))),w=t(5921),Z=t(184),k=function(){var n,e,t,r,a=(0,l.useState)({}),i=(0,c.Z)(a,2),s=i[0],u=i[1],h=(0,l.useState)([]),b=(0,c.Z)(h,2),k=b[0],_=b[1],y=(0,l.useState)(""),q=(0,c.Z)(y,2),P=q[0],z=q[1],C=(0,f.UO)().id,F=(0,f.TH)(),O=null!==(n=null===F||void 0===F||null===(e=F.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,l.useEffect)((function(){var n=function(){var n=(0,o.Z)(d().mark((function n(e){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.vq)(e);case 2:t=n.sent,u(t),_(t.genres),z("https://image.tmdb.org/t/p/w300/".concat(t.poster_path));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(C)}),[C]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.rU,{to:O,children:(0,Z.jsx)(x,{type:"button",children:"Go back"})}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("div",{children:null!==s.poster_path?(0,Z.jsx)("img",{src:P,alt:""}):(0,Z.jsx)("img",{src:w,alt:""})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h1",{children:[s.original_title," (",parseFloat(s.release_date),")"]}),(0,Z.jsxs)("p",{children:["User score: ",(10*s.vote_average).toFixed(),"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:s.overview}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("p",{children:function(n){if(n)return n.map((function(n){return n.name})).join(" ")}(k)})]})]}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)("h2",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{className:"additional",children:(0,Z.jsx)(j,{to:"cast",state:{from:null===F||void 0===F||null===(t=F.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,Z.jsx)("li",{className:"additional",children:(0,Z.jsx)(j,{to:"reviews",state:{from:null===F||void 0===F||null===(r=F.state)||void 0===r?void 0:r.from},children:"Reviews"})})]})]}),(0,Z.jsx)(f.j3,{})]})}},1128:function(n,e,t){t.d(e,{VE:function(){return o},qH:function(){return p},tx:function(){return d},vq:function(){return c},zv:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1243),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(e),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:e,api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(t),{params:r});case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},5921:function(n,e,t){n.exports=t.p+"static/media/no-image-placeholder.4d1dba3d8f0a3d9f693e.png"}}]);
//# sourceMappingURL=264.9e948770.chunk.js.map