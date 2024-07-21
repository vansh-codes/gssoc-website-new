(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{7983:function(e,t,r){"use strict";r.d(t,{Od:function(){return k},s7:function(){return j},N2:function(){return y}});var n=r(5993),a=r(15031),i=r(67294),l=r(85393);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}var d=a.jU?i.useLayoutEffect:i.useEffect;function c(e,t){void 0===t&&(t={});var r=t,n=r.ssr,c=void 0===n||n,o=r.fallback,u=(0,l.O)(),m=Array.isArray(e)?e:[e],f=Array.isArray(o)?o:[o];f=f.filter((function(e){return null!=e}));var h=(0,i.useState)((function(){return m.map((function(e,t){return{media:e,matches:c?!!f[t]:u.window.matchMedia(e).matches}}))})),p=h[0],x=h[1];return d((function(){c&&x(m.map((function(e){return{media:e,matches:u.window.matchMedia(e).matches}})));var e=m.map((function(e){return u.window.matchMedia(e)})),t=function(e){x((function(t){return t.slice().map((function(t){return t.media===e.media?s({},t,{matches:e.matches}):t}))}))};return e.forEach((function(e){(0,a.mf)(e.addListener)?e.addListener(t):e.addEventListener("change",t)})),function(){e.forEach((function(e){(0,a.mf)(e.removeListener)?e.removeListener(t):e.removeEventListener("change",t)}))}}),[]),p.map((function(e){return e.matches}))}a.Ts;a.Ts;function o(e,t){var r,i=function(e){var t,r,i=(0,a.Kn)(e)?e:{fallback:null!=e?e:"base"},l=(0,n.Fg)().__breakpoints.details.map((function(e){var t=e.minMaxQuery;return{breakpoint:e.breakpoint,query:t.replace("@media screen and ","")}})),s=l.map((function(e){return e.breakpoint===i.fallback})),d=c(l.map((function(e){return e.query})),{fallback:s,ssr:i.ssr});return null!=(t=null==(r=l[d.findIndex((function(e){return 1==e}))])?void 0:r.breakpoint)?t:i.fallback}((0,a.Kn)(t)?t:{fallback:null!=t?t:"base"}),l=(0,n.Fg)();if(i){var s=Array.from((null==(r=l.__breakpoints)?void 0:r.keys)||[]);return function(e,t,r){void 0===r&&(r=a.AV);var n=Object.keys(e).indexOf(t);if(-1!==n)return e[t];for(var i=r.indexOf(t);i>=0;){if(null!=e[r[i]]){n=i;break}i-=1}return-1!==n?e[r[n]]:void 0}((0,a.kJ)(e)?(0,a.sq)(Object.entries((0,a.Yq)(e,s)).map((function(e){return[e[0],e[1]]}))):e,i,s)}}var u=r(70917),m=r(97375);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["startColor","endColor","isLoaded","fadeDuration","speed","className"],x=["noOfLines","spacing","skeletonHeight","className","startColor","endColor","isLoaded","fadeDuration","speed","children"],b=["size"],g=(0,n.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),v=(0,u.F4)({from:{opacity:0},to:{opacity:1}}),k=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Skeleton",e),l=function(){var e=i.useRef(!0);return i.useEffect((function(){e.current=!1}),[]),e.current}(),s=(0,n.Lr)(e);s.startColor,s.endColor;var d=s.isLoaded,c=s.fadeDuration;s.speed;var o=s.className,u=h(s,p),x=(0,m.D9)(d),b=(0,a.cx)("chakra-skeleton",o);if(d){var k=l||x?"none":v+" "+c+"s";return i.createElement(n.m$.div,f({ref:t,className:b,__css:{animation:k}},u))}return i.createElement(g,f({ref:t,className:b},u,{__css:r}))}));k.defaultProps={fadeDuration:.4,speed:.8},a.Ts&&(k.displayName="Skeleton");var y=function(e){var t=e.noOfLines,r=void 0===t?3:t,l=e.spacing,s=void 0===l?"0.5rem":l,d=e.skeletonHeight,c=void 0===d?"0.5rem":d,u=e.className,m=e.startColor,p=e.endColor,b=e.isLoaded,g=e.fadeDuration,v=e.speed,y=e.children,j=h(e,x),N=o("number"===typeof r?[r]:r)||3,w=Array(N).fill(1).map((function(e,t){return t+1})),A=function(e){return N>1&&e===w.length?"80%":"100%"},_=(0,a.cx)("chakra-skeleton__group",u);return i.createElement(n.m$.div,f({className:_},j),w.map((function(e,t){if(b&&t>0)return null;var r=b?null:{mb:e===w.length?"0":s,width:A(e),height:c};return i.createElement(k,f({key:w.length.toString()+e,startColor:m,endColor:p,isLoaded:b,fadeDuration:g,speed:v},r),0===t?y:void 0)})))};a.Ts&&(y.displayName="SkeletonText");var j=function(e){var t=e.size,r=void 0===t?"2rem":t,n=h(e,b);return i.createElement(k,f({borderRadius:"full",boxSize:r},n))};a.Ts&&(j.displayName="SkeletonCircle")},64907:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[...name]",function(){return r(19858)}])},19858:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(47568),a=r(29815),i=r(34051),l=r.n(i),s=r(85893),d=r(67294),c=r(82010),o=r(68527),u=r(7983),m=[{id:"No",label:"No",minWidth:50},{id:"Repository",label:"Repository",minWidth:50},{id:"Title",label:"Title",minWidth:170},{id:"Level",label:"Level",minWidth:100,align:"center"},{id:"Commits",label:"Commits",minWidth:100,align:"right"},{id:"Comments",label:"Comments",minWidth:100,align:"right"},{id:"Merged",label:"Merged At",minWidth:100,align:"right"},{id:"Related",label:"Related Issues",minWidth:100,align:"right"}];function f(){var e=function(e){return new Date(e).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})},t=function(e){return e.split("#")[0].replace(/-/g," ").trim()},r=((0,c.F)().theme,(0,d.useState)("")),i=r[0],f=r[1],h=(0,d.useState)([]),p=h[0],x=h[1],b=(0,d.useState)([]),g=(b[0],b[1]),v=(0,d.useState)(""),k=v[0],y=v[1],j=(0,d.useState)(""),N=j[0],w=j[1],A=(0,d.useState)(!1),_=A[0],S=(A[1],(0,d.useState)(1)),O=(S[0],S[1],(0,d.useState)(50));O[0],O[1];function E(){return(E=(0,n.Z)(l().mark((function r(n){var i,s,d,c,o,u,m,f,h,p,b;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=n.replace("github.com","api.github.com/repos").replace("/pull/","/pulls/"),r.next=4,fetch(i,{method:"GET",headers:{Accept:"application/vnd.github.v3+json"}});case 4:return s=r.sent,r.next=7,s.json();case 7:return s=r.sent,d=s.labels.map((function(e){return e.name})),c=d.find((function(e){return e.toLowerCase().includes("level")})),o="#"+s.issue_url.match(/\/(\d+)$/)[1],u=s.commits,m=s.comments,f=t(s.title),h=e(s.merged_at),p=s.base.repo.name,b=[f,c,u,m,h,s.issue_url,o,p],g((function(e){return(0,a.Z)(e).concat([b])})),x((function(e){return(0,a.Z)(e).concat([b])})),r.abrupt("return",b);case 22:return r.prev=22,r.t0=r.catch(0),console.error("Error fetching PR details: ".concat(r.t0.message)),r.abrupt("return",null);case 26:case"end":return r.stop()}}),r,null,[[0,22]])})))).apply(this,arguments)}(0,d.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data"));console.log(e),e.map((function(e){!function(e){E.apply(this,arguments)}(e)})),y(localStorage.getItem("login")),w(localStorage.getItem("avatar")),f(localStorage.getItem("time"))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors ",style:{margin:"auto"},children:[(0,s.jsx)("div",{className:"items-center justify-center",children:(0,s.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold",children:(0,s.jsxs)("div",{className:"text-black dark:text-white flex flex-col text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0",children:[(0,s.jsx)("img",{width:"100px",height:"100px",className:"m-auto rounded-full",src:N}),(0,s.jsx)("span",{className:"text-gray-500 text-lg font-semibold ",children:(0,s.jsx)("i",{children:i})}),(0,s.jsxs)("p",{children:[(0,s.jsxs)("span",{className:"text-primary_orange-0",children:[" ",k," "]}),"Stat's"]})]})})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center",children:(0,s.jsxs)("div",{className:" max-h-[100vh] w-full overflow-x-auto",children:[(0,s.jsxs)("div",{className:"table w-full",children:[(0,s.jsx)("div",{className:"table-header-group ",children:(0,s.jsx)("div",{className:"table-row",children:m.map((function(e){return(0,s.jsx)("div",{className:"table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black",style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),!_&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"table-row-group",children:p.map((function(e,t){return(0,s.jsx)(d.Fragment,{children:t%2?(0,s.jsxs)("div",{className:"table-row",role:"checkbox","aria-checked":"false",tabIndex:-1,children:[(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[t+1,"                                    "]},"sdsdsd"),(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[7],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[0],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[1],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[2],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[3],"                                   "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[4],"                                   "]},"sdsdsd"),(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",style:{verticalAlign:"middle"},children:[(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"text-green-500 text-center",href:e[5],children:e[6]}),"                              "]},"sdsdsd")]},e.username):(0,s.jsxs)("div",{className:"table-row",role:"checkbox","aria-checked":"false",tabIndex:-1,children:[(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[t+1,"                                    "]},"sdsdsd"),(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[7],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[0],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[1],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[2],"                                    "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[3],"                                   "]},"sdsdsd")," ",(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[e[4],"                                   "]},"sdsdsd"),(0,s.jsxs)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-[#262323] dark:text-white font-medium",style:{verticalAlign:"middle"},children:[(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"text-green-500 text-center",href:e[5],children:e[6]}),"                              "]},"sdsdsd")]},e.username)},t)}))})})]}),_&&(0,s.jsxs)(o.Kq,{style:{marginTop:"10px"},children:[(0,s.jsx)(u.Od,{height:"40px"}),(0,s.jsx)(u.Od,{height:"40px"}),(0,s.jsx)(u.Od,{height:"40px"}),(0,s.jsx)(u.Od,{height:"40px"})]})]})})})]})})}},20943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},47568:function(e,t,r){"use strict";function n(e,t,r,n,a,i,l){try{var s=e[i](l),d=s.value}catch(c){return void r(c)}s.done?t(d):Promise.resolve(d).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var l=e.apply(t,r);function s(e){n(l,a,i,s,d,"next",e)}function d(e){n(l,a,i,s,d,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return a}})},13375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},29815:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(20943);var a=r(13375);var i=r(91566);function l(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(20943);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[527,774,888,179],(function(){return t=64907,e(e.s=t);var t}));var t=e.O();_N_E=t}]);