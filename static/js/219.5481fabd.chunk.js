"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[219],{4219:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(5861),i=n(9439),c=n(7757),s=n.n(c),u=n(7689),o=n(2791),p=n(1128),f=n(168),d=n(6444).ZP.ul(r||(r=(0,f.Z)(["\n  // display: flex;\n  // flex-wrap: wrap;\n  // justify-content: center;\n  // gap: 20px;\n  // align-items: center;\n\n  // & .li {\n  //     width:calc( ( 100% - 20px ) / 6 );\n  //     position: relative;\n  //     height: 380px;\n  // }\n\n  // & img {\n  // height:250px;\n  //  display: block;\n  //   margin: 0 auto;\n  // }\n\n  // & .credentials{\n  //     position: absolute;\n  //     left: 20px;\n  //     top: 260px;\n  //     width: 100%;\n  // }\n\n  // & .credentials-item:not(:last-child) {\n  //     padding-bottom: 10px;\n  // }\n"]))),l=n(5921),h=n(5243),b=n(184),v=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=(0,u.UO)().id,f=(0,o.useState)(!1),v=(0,i.Z)(f,2),m=v[0],x=v[1],g=(0,o.useRef)("");return(0,o.useEffect)((function(){x(!0);try{var e=function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.zv)(t);case 2:if(n=e.sent,r(n),0!==n.length){e.next=7;break}return g.current.textContent="There is no info about actors available",e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(c)}catch(t){console.log(t)}finally{x(!1)}}),[c]),(0,b.jsxs)(d,{children:[!1===m?n.map((function(e){var t=e.name,n=e.character,r=e.profile_path,a=e.cast_id;return(0,b.jsxs)("li",{className:"li",children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/w200/".concat(r):l,alt:t})}),(0,b.jsx)("div",{className:"credentials",children:(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"credentials-item",children:(0,b.jsx)("b",{children:t})}),(0,b.jsxs)("div",{children:["Character: ",n]})]})})]},a)})):(0,b.jsx)(h.g4,{height:"80",width:"80",radius:"9",color:"blue",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:"loader",visible:!0}),0===n.length?(0,b.jsx)("div",{ref:g}):null]})}},1128:function(e,t,n){n.d(t,{VE:function(){return s},qH:function(){return f},tx:function(){return p},vq:function(){return u},zv:function(){return o}});var r=n(5861),a=n(7757),i=n.n(a),c=n(1243),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"fab61af76b035bb5fe60a72bbd93e670"},e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(t),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"fab61af76b035bb5fe60a72bbd93e670"},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"fab61af76b035bb5fe60a72bbd93e670"},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"fab61af76b035bb5fe60a72bbd93e670"},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={query:t,api_key:"fab61af76b035bb5fe60a72bbd93e670"},e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(n),{params:r});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},5921:function(e,t,n){e.exports=n.p+"static/media/no-image-placeholder.4d1dba3d8f0a3d9f693e.png"}}]);
//# sourceMappingURL=219.5481fabd.chunk.js.map