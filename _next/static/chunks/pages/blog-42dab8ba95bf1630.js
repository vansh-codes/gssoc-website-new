(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{82730:function(t,n,e){"use strict";var r=e(67294);function i(t){return Array.prototype.slice.call(t)}function o(t,n){var e=Math.floor(t);return e===n||e+1===n?t:n}function a(){return Date.now()}function s(t,n,e){if(n="data-keen-slider-"+n,null===e)return t.removeAttribute(n);t.setAttribute(n,e||"")}function u(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?i(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function c(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function l(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function d(){var t=[];return{add:function(n,e,r,i){n.addListener?n.addListener(r):n.addEventListener(e,r,i),t.push([n,e,r,i])},input:function(t,n,e,r){this.add(t,n,function(t){return function(n){n.nativeEvent&&(n=n.nativeEvent);var e=n.changedTouches||[],r=n.targetTouches||[],i=n.detail&&n.detail.x?n.detail:null;return t({id:i?i.identifier?i.identifier:"i":r[0]?r[0]?r[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:n,x:i&&i.x?i.x:r[0]?r[0].screenX:i?i.x:n.pageX,y:i&&i.y?i.y:r[0]?r[0].screenY:i?i.y:n.pageY})}}(e),r)},purge:function(){t.forEach((function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])})),t=[]}}}function f(t,n,e){return Math.min(Math.max(t,n),e)}function m(t){return(t>0?1:0)-(t<0?1:0)||+t}function p(t){var n=t.getBoundingClientRect();return{height:o(n.height,t.offsetHeight),width:o(n.width,t.offsetWidth)}}function h(t,n,e,r){var i=t&&t[n];return null==i?e:r&&"function"==typeof i?i():i}function v(t){return Math.round(1e6*t)/1e6}function g(t,n){if(t===n)return!0;var e=typeof t;if(e!==typeof n)return!1;if("object"!==e||null===t||null===n)return"function"===e&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var r in t)if(!g(t[r],n[r]))return!1;return!0}var x=function(){return x=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},x.apply(this,arguments)};function b(t,n,e){if(e||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return t.concat(r||Array.prototype.slice.call(n))}function y(t){var n,e,r,i,o,s,u,c,l,d,p,g,x,y,w=1/0,k=[],j=null,C=0;function N(t){O(C+t)}function M(t){var n=T(C+t).abs;return _(n)?n:null}function T(t){var n=Math.floor(Math.abs(v(t/e))),r=v((t%e+e)%e);r===e&&(r=0);var i=m(t),o=u.indexOf(b([],u,!0).reduce((function(t,n){return Math.abs(n-r)<Math.abs(t-r)?n:t}))),a=o;return i<0&&n++,o===s&&(a=0,n+=i>0?1:-1),{abs:a+n*s*i,origin:o,rel:a}}function S(t,n,e){var r;if(n||!P())return E(t,e);if(!_(t))return null;var i=T(null!=e?e:C),o=i.abs,a=t-i.rel,u=o+a;r=E(u);var c=E(u-s*m(a));return(null!==c&&Math.abs(c)<Math.abs(r)||null===r)&&(r=c),v(r)}function E(t,n){if(null==n&&(n=v(C)),!_(t)||null===t)return null;t=Math.round(t);var r=T(n),i=r.abs,o=r.rel,a=r.origin,c=A(t),l=(n%e+e)%e,d=u[a],f=Math.floor((t-(i-o))/s)*e;return v(d-l-d+u[c]+f+(a===s?e:0))}function _(t){return I(t)===t}function I(t){return f(t,l,d)}function P(){return i.loop}function A(t){return(t%s+s)%s}function O(n){var e;e=n-C,k.push({distance:e,timestamp:a()}),k.length>6&&(k=k.slice(-6)),C=v(n);var r=F().abs;if(r!==j){var i=null!==j;j=r,i&&t.emit("slideChanged")}}function F(a){var u=a?null:function(){if(s){var t=P(),n=t?(C%e+e)%e:C,a=(t?C%e:C)-o[0][2],u=0-(a<0&&t?e-Math.abs(a):a),c=0,f=T(C),h=f.abs,v=f.rel,b=o[v][2],w=o.map((function(n,r){var o=u+c;(o<0-n[0]||o>1)&&(o+=(Math.abs(o)>e-1&&t?e:0)*m(-o));var a=r-v,l=m(a),d=a+h;t&&(-1===l&&o>b&&(d+=s),1===l&&o<b&&(d-=s),null!==p&&d<p&&(o+=e),null!==g&&d>g&&(o-=e));var f=o+n[0]+n[1],x=Math.max(o>=0&&f<=1?1:f<0||o>1?0:o<0?Math.min(1,(n[0]+o)/n[0]):(1-o)/n[0],0);return c+=n[0]+n[1],{abs:d,distance:i.rtl?-1*o+1-n[0]:o,portion:x,size:n[0]}}));return h=I(h),v=A(h),{abs:I(h),length:r,max:y,maxIdx:d,min:x,minIdx:l,position:C,progress:t?n/e:C/r,rel:v,slides:w,slidesLength:e}}}();return n.details=u,t.emit("detailsChanged"),u}return n={absToRel:A,add:N,details:null,distToIdx:M,idxToDist:S,init:function(n){if(function(){if(i=t.options,o=(i.trackConfig||[]).map((function(t){return[h(t,"size",1),h(t,"spacing",0),h(t,"origin",0)]})),s=o.length){e=v(o.reduce((function(t,n){return t+n[0]+n[1]}),0));var n,a=s-1;r=v(e+o[0][2]-o[a][0]-o[a][2]-o[a][1]),u=o.reduce((function(t,e){if(!t)return[0];var r=o[t.length-1],i=t[t.length-1]+(r[0]+r[2])+r[1];return i-=e[2],t[t.length-1]>i&&(i=t[t.length-1]),i=v(i),t.push(i),(!n||n<i)&&(c=t.length-1),n=i,t}),null),0===r&&(c=0),u.push(v(e))}}(),!s)return F(!0);var a;!function(){var n=t.options.range,e=t.options.loop;p=l=e?h(e,"min",-1/0):0,g=d=e?h(e,"max",w):c;var r=h(n,"min",null),i=h(n,"max",null);null!==r&&(l=r),null!==i&&(d=i),x=l===-1/0?l:t.track.idxToDist(l||0,!0,0),y=d===w?d:S(d,!0,0),null===i&&(g=d),h(n,"align",!1)&&d!==w&&0===o[A(d)][2]&&(y-=1-o[A(d)][0],d=M(y-C)),x=v(x),y=v(y)}(),a=n,Number(a)===a?N(E(I(n))):F()},to:O,velocity:function(){var t=a(),n=k.reduce((function(n,e){var r=e.distance,i=e.timestamp;return t-i>200||(m(r)!==m(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=r),n.lastTimestamp&&(n.time+=i-n.lastTimestamp),n.lastTimestamp=i),n}),{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}function w(t){var n,e,r,i,o,a,s,u;function c(t){return 2*t}function l(t){return f(t,s,u)}function d(t){return 1-Math.pow(1-t,3)}function p(){return r?t.track.velocity():0}function h(t,n){void 0===n&&(n=1e3);var e=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/e,dur:t/e}}function v(){var n=t.track.details;n&&(o=n.min,a=n.max,s=n.minIdx,u=n.maxIdx)}function g(){t.animator.stop()}t.on("updated",v),t.on("optionsChanged",v),t.on("created",v),t.on("dragStarted",(function(){r=!1,g(),n=e=t.track.details.abs})),t.on("dragChecked",(function(){r=!0})),t.on("dragEnded",(function(){var r=t.options.mode;"snap"===r&&function(){var r=t.track,i=t.track.details,s=i.position,u=m(p());(s>a||s<o)&&(u=0);var c=n+u;0===i.slides[r.absToRel(c)].portion&&(c-=u),n!==e&&(c=e),m(r.idxToDist(c,!0))!==u&&(c+=u),c=l(c);var d=r.idxToDist(c,!0);t.animator.start([{distance:d,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])}(),"free"!==r&&"free-snap"!==r||function(){g();var n="free-snap"===t.options.mode,e=t.track,r=p();i=m(r);var s=t.track.details,u=[];if(r||!n){var f=h(r),v=f.dist,x=f.dur;if(x=c(x),v*=i,n){var b=e.idxToDist(e.distToIdx(v),!0);b&&(v=b)}u.push({distance:v,duration:x,easing:d});var y=s.position,w=y+v;if(w<o||w>a){var k=w<o?o-y:a-y,j=0,C=r;if(m(k)===i){var N=Math.min(Math.abs(k)/Math.abs(v),1),M=function(t){return 1-Math.pow(1-t,1/3)}(N)*x;u[0].earlyExit=M,C=r*(1-N)}else u[0].earlyExit=0,j+=k;var T=h(C,100),S=T.dist*i;t.options.rubberband&&(u.push({distance:S,duration:c(T.dur),easing:d}),u.push({distance:-S+j,duration:500,easing:d}))}t.animator.start(u)}else t.moveToIdx(l(s.abs),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}()})),t.on("dragged",(function(){e=t.track.details.abs}))}function k(t){var n,e,r,i,o,a,s,p,h,v,g,x,b,y,w,k,j,C,N=d();function M(n){if(a&&p===n.id){var u=_(n);if(h){if(!E(n))return S(n);v=u,h=!1,t.emit("dragChecked")}if(k)return v=u;c(n);var d=function(n){if(j===-1/0&&C===1/0)return n;var r=t.track.details,a=r.length,s=r.position,u=f(n,j-s,C-s);if(0===a)return 0;if(!t.options.rubberband)return u;if(s<=C&&s>=j)return n;if(s<j&&e>0||s>C&&e<0)return n;var c=(s<j?s-j:s-C)/a,l=i*a,d=Math.abs(c*l),m=Math.max(0,1-d/o*2);return m*m*n}(s(v-u)/i*r);e=m(d);var b=t.track.details.position;(b>j&&b<C||b===j&&e>0||b===C&&e<0)&&l(n),g+=d,!x&&Math.abs(g*i)>5&&(x=!0),t.track.add(d),v=u,t.emit("dragged")}}function T(n){!a&&t.track.details&&t.track.details.length&&(g=0,a=!0,x=!1,h=!0,p=n.id,E(n),v=_(n),t.emit("dragStarted"))}function S(n){a&&p===n.idChanged&&(a=!1,t.emit("dragEnded"))}function E(t){var n=I(),e=n?t.y:t.x,r=n?t.x:t.y,i=void 0!==b&&void 0!==y&&Math.abs(y-r)<=Math.abs(b-e);return b=e,y=r,i}function _(t){return I()?t.y:t.x}function I(){return t.options.vertical}function P(){i=t.size,o=I()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(j=n.min,C=n.max)}function A(t){x&&(l(t),c(t))}function O(){if(N.purge(),t.options.drag&&!t.options.disabled){var e;e=t.options.dragSpeed||1,s="function"==typeof e?e:function(t){return t*e},r=t.options.rtl?-1:1,P(),n=t.container,function(){var t="data-keen-slider-clickable";u("[".concat(t,"]:not([").concat(t,"=false])"),n).map((function(t){N.add(t,"dragstart",l),N.add(t,"mousedown",l),N.add(t,"touchstart",l)}))}(),N.add(n,"dragstart",(function(t){c(t)})),N.add(n,"click",A,{capture:!0}),N.input(n,"ksDragStart",T),N.input(n,"ksDrag",M),N.input(n,"ksDragEnd",S),N.input(n,"mousedown",T),N.input(n,"mousemove",M),N.input(n,"mouseleave",S),N.input(n,"mouseup",S),N.input(n,"touchstart",T,{passive:!0}),N.input(n,"touchmove",M,{passive:!1}),N.input(n,"touchend",S),N.input(n,"touchcancel",S),N.add(window,"wheel",(function(t){a&&c(t)}));var i="data-keen-slider-scrollable";u("[".concat(i,"]:not([").concat(i,"=false])"),t.container).map((function(t){return function(t){var n;N.input(t,"touchstart",(function(t){n=_(t),k=!0,w=!0}),{passive:!0}),N.input(t,"touchmove",(function(e){var r=I(),i=r?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,o=n-_(e),a=r?t.scrollTop:t.scrollLeft,s=r&&"scroll"===t.style.overflowY||!r&&"scroll"===t.style.overflowX;if(n=_(e),(o<0&&a>0||o>0&&a<i)&&w&&s)return k=!0;w=!1,c(e),k=!1})),N.input(t,"touchend",(function(){k=!1}))}(t)}))}}t.on("updated",P),t.on("optionsChanged",O),t.on("created",O),t.on("destroyed",N.purge)}function j(t){var n,e,r=null;function i(n,e,r){t.animator.active?a(n,e,r):requestAnimationFrame((function(){return a(n,e,r)}))}function o(){i(!1,!1,e)}function a(e,i,o){var a=0,s=t.size,l=t.track.details;if(l&&n){var d=l.slides;n.forEach((function(t,n){if(e)!r&&i&&u(t,null,o),c(t,null,o);else{if(!d[n])return;var l=d[n].size*s;!r&&i&&u(t,l,o),c(t,d[n].distance*s-a,o),a+=l}}))}}function s(n){return"performance"===t.options.renderMode?Math.round(n):n}function u(t,n,e){var r=e?"height":"width";null!==n&&(n=s(n)+"px"),t.style["min-"+r]=n,t.style["max-"+r]=n}function c(t,n,e){if(null!==n){n=s(n);var r=e?n:0;n="translate3d(".concat(e?0:n,"px, ").concat(r,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function l(){n&&(a(!0,!0,e),n=null),t.on("detailsChanged",o,!0)}function d(){i(!1,!0,e)}function f(){l(),e=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(r="auto"===h(t.options.slides,"perView",null),t.on("detailsChanged",o),(n=t.slides).length&&d())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",(function(){l()})),t.on("updated",d),t.on("destroyed",l)}function C(t,n){return function(e){var r,i,o,a,c,l=d();function f(t){var n;s(e.container,"reverse","rtl"!==(n=e.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||t?null:""),s(e.container,"v",e.options.vertical&&!t?"":null),s(e.container,"disabled",e.options.disabled&&!t?"":null)}function m(){v()&&k()}function v(){var t=null;if(a.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var n=t?o.breakpoints[t]:o;return e.options=x(x({},o),n),f(),T(),S(),C(),!0}function g(t){var n=p(t);return(e.options.vertical?n.height:n.width)/e.size||1}function b(){return e.options.trackConfig.length}function y(t){for(var s in r=!1,o=x(x({},n),t),l.purge(),i=e.size,a=[],o.breakpoints||[]){var u=window.matchMedia(s);u.__media=s,a.push(u),l.add(u,"change",m)}l.add(window,"orientationchange",M),l.add(window,"resize",N),v()}function w(t){e.animator.stop();var n=e.track.details;e.track.init(null!=t?t:n?n.abs:0)}function k(t){w(t),e.emit("optionsChanged")}function j(t,n){if(t)return y(t),void k(n);T(),S();var r=b();C(),b()!==r?k(n):w(n),e.emit("updated")}function C(){var t=e.options.slides;if("function"==typeof t)return e.options.trackConfig=t(e.size,e.slides);for(var n=e.slides,r=n.length,i="number"==typeof t?t:h(t,"number",r,!0),o=[],a=h(t,"perView",1,!0),s=h(t,"spacing",0,!0)/e.size||0,u="auto"===a?s:s/a,c=h(t,"origin","auto"),l=0,d=0;d<i;d++){var f="auto"===a?g(n[d]):1/a-s+u,m="center"===c?.5-f/2:"auto"===c?0:c;o.push({origin:m,size:f,spacing:s}),l+=f}if(l+=s*(i-1),"auto"===c&&!e.options.loop&&1!==a){var p=0;o.map((function(t){var n=l-p;return p+=t.size+s,n>=1||(t.origin=1-n-(l>1?0:1-l)),t}))}e.options.trackConfig=o}function N(){T();var t=e.size;e.options.disabled||t===i||(i=t,j())}function M(){N(),setTimeout(N,500),setTimeout(N,2e3)}function T(){var t=p(e.container);e.size=(e.options.vertical?t.height:t.width)||1}function S(){e.slides=u(e.options.selector,e.container)}e.container=(c=u(t,document)).length?c[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),f(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=j,y(e.options)}}var N=function(t,n,e){try{return function(t,n){var e,r={};return e={emit:function(t){r[t]&&r[t].forEach((function(t){t(e)}));var n=e.options&&e.options[t];n&&n(e)},moveToIdx:function(t,n,r){var i=e.track.idxToDist(t,n);if(i){var o=e.options.defaultAnimation;e.animator.start([{distance:i,duration:h(r||o,"duration",500),easing:h(r||o,"easing",(function(t){return 1+--t*t*t*t*t}))}])}},on:function(t,n,e){void 0===e&&(e=!1),r[t]||(r[t]=[]);var i=r[t].indexOf(n);i>-1?e&&delete r[t][i]:e||r[t].push(n)},options:t},function(){if(e.track=y(e),e.animator=function(t){var n,e,r,i,o,a;function s(n){a||(a=n),u(!0);var o=n-a;o>r&&(o=r);var d=i[e];if(d[3]<o)return e++,s(n);var f=d[2],m=d[4],p=d[0],h=d[1]*(0,d[5])(0===m?1:(o-f)/m);if(h&&t.track.to(p+h),o<r)return l();a=null,u(!1),c(null),t.emit("animationEnded")}function u(t){n.active=t}function c(t){n.targetIdx=t}function l(){var t;t=s,o=window.requestAnimationFrame(t)}function d(){var n;n=o,window.cancelAnimationFrame(n),u(!1),c(null),a&&t.emit("animationStopped"),a=null}return n={active:!1,start:function(n){if(d(),t.track.details){var o=0,a=t.track.details.position;e=0,r=0,i=n.map((function(t){var n,e=Number(a),i=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,s=t.easing,u=t.distance*s(i/t.duration)||0;a+=u;var c=r;return r+=i,o+=u,[e,t.distance,c,r,t.duration,s]})),c(t.track.distToIdx(o)),l(),t.emit("animationStarted")}},stop:d,targetIdx:null}}(e),n)for(var t=0,r=n;t<r.length;t++)(0,r[t])(e);e.track.init(e.options.initial||0),e.emit("created")}(),e}(n,b([C(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),j,k,w],e||[],!0))}catch(t){console.error(t)}};n.E=function(t,n){var e=r.useRef(null),i=r.useRef(!1),o=r.useRef(t),a=r.useCallback((function(r){r?(o.current=t,e.current=new N(r,t,n),i.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)}),[]);return r.useEffect((function(){g(o.current,t)||(o.current=t,e.current&&e.current.update(o.current))}),[t]),[a,e]}},13899:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(98248)}])},98248:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var r=e(47568),i=e(97582),o=e(85893),a=e(67294),s=e(65028),u=e(9008),c=e.n(u),l=e(41664),d=e.n(l),f=e(20967),m=(e(99603),e(828)),p=(e(19409),e(82730));function h(t){var n=t.disabled?" arrow--disabled":"";return(0,o.jsxs)("svg",{onClick:t.onClick,className:"arrow ".concat(t.left?"arrow--left":"arrow--right"," ").concat(n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[t.left&&(0,o.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!t.left&&(0,o.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}var v=function(){var t=(0,a.useState)(0),n=t[0],e=t[1],r=(0,a.useState)(!1),i=r[0],s=r[1],u=(0,m.Z)((0,p.E)({initial:0,slideChanged:function(t){e(t.track.details.rel)},created:function(){s(!0)},loop:!0,slides:{perView:1,spacing:15}},[function(t){var n,e=function(){clearTimeout(n)},r=function(){clearTimeout(n),i||(n=setTimeout((function(){t.next()}),2e3))},i=!1;t.on("created",(function(){t.container.addEventListener("mouseover",(function(){i=!0,e()})),t.container.addEventListener("mouseout",(function(){i=!1,r()})),r()})),t.on("dragStarted",e),t.on("animationEnded",r),t.on("updated",r)}]),2),c=u[0],l=u[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"navigation-wrapper relative",children:[(0,o.jsx)("div",{ref:c,className:"keen-slider cursor-grab rounded-xl h-96",children:(0,o.jsx)("div",{id:"IPFSCon",className:"keen-slider__slide number-slide1 flex flex-col items-center justify-center p-10",children:(0,o.jsxs)("div",{className:"flex justify-between items-center text-white text-md",children:[(0,o.jsxs)("div",{className:"left__container md:mr-10",children:[(0,o.jsx)("div",{className:"text-md md:text-xl lg:text-3xl mb-5 text-primary_orange-0 font-sans font-semibold",children:"Deep Dive on Filecoin & IPFS use cases in the Solana ecosystem"}),(0,o.jsxs)("div",{className:"text-sm md:text-md lg:text-xl mb-5 text-white",children:[(0,o.jsx)("em",{className:"font-bold",children:'What are Filecoin and IPFS, and what problems it"s solving in the blockchain ecosystem?'}),(0,o.jsxs)("ol",{className:"hidden md:block",children:[(0,o.jsx)("li",{children:"\u2022 Using IPFS to store NFTs and metadata of Candy Machine V2"}),(0,o.jsx)("li",{children:"\u2022 Using the various IPFS libraries for storage in your dapps"}),(0,o.jsx)("li",{children:"\u2022 Deploying and hosting dapps on IPFS"})]}),(0,o.jsxs)("div",{className:"hidden md:block",children:[(0,o.jsx)("em",{className:"font-bold",children:"Awesome Developer Tools:"}),"\xa0\xa0 \u2022 Pinata \xa0\xa0 \u2022 Fleek \xa0\xa0 \u2022 Web3.Storage \xa0\xa0 \u2022 NFT.Storage"]})]}),(0,o.jsx)("a",{className:"text-primary_orange-0 hover:text-white text-lg font-bold",href:"https://9yearoldtechkid.medium.com/deep-dive-on-filecoin-ipfs-use-cases-in-the-solana-ecosystem-decff70c60af",children:"Read More here >>"})]}),(0,o.jsx)("div",{className:"right__container hidden md:block relative md:left-20",children:(0,o.jsx)("img",{className:"w-1/2 h-auto",src:"https://user-images.githubusercontent.com/63473496/176965873-5c457a6b-cfae-4107-87ea-823c25ceea66.png",alt:"top3"})})]})})}),i&&l.current&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{left:!0,onClick:function(t){var n;return t.stopPropagation()||(null===(n=l.current)||void 0===n?void 0:n.prev())},disabled:0===n}),(0,o.jsx)(h,{onClick:function(t){var n;return t.stopPropagation()||(null===(n=l.current)||void 0===n?void 0:n.next())},disabled:n===l.current.track.details.slides.length-1})]})]})})},g=function(){var t=(0,a.useState)([]),n=t[0],e=t[1],u=a.useRef(),l=(0,f.q)(),m=(l.isOpen,l.onOpen),p=(l.onClose,function(){var t=(0,r.Z)((function(){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("https://opensheet.elk.sh/1yAcu1TICHh2BHOTk82WjD68oukbPwAQPWJCKdNxlAss/Blogs2022")];case 1:return[4,t.sent().json()];case 2:return e.apply(void 0,[t.sent()]),[2]}}))}));return function(){return t.apply(this,arguments)}}());return(0,a.useEffect)((function(){p()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"Blog | GirlScript Summer of Code 2024 | GirlScript Foundation India"}),(0,o.jsx)("meta",{name:"description",content:"GirlScript Summer of Code Team"})]}),(0,o.jsx)("div",{className:"items-center justify-center",children:(0,o.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold text-black-100",children:(0,o.jsx)("p",{className:"text-black text-5xl text center font-extrabold mb-10 dark:text-white",children:"Blogs"})})}),(0,o.jsx)(s.L,{mt:20}),(0,o.jsx)("div",{className:"items-center justify-center px-20",children:(0,o.jsx)(v,{})}),(0,o.jsx)(s.L,{mt:20}),(0,o.jsx)("div",{className:"flex flex-row justify-center flex-wrap items-center gap-x-32 gap-y-10 w-100",children:n.map((function(t,n){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"flex items-center justify-center w-60",children:(0,o.jsxs)("div",{className:"justify-center shadow dark:bg-black text-black dark:text-white rounded-xl w-full overflow-y-clip rounded-lg h-fit md:h-60 shadow-xl dark:shadow-none shadow-slate-400",children:[(0,o.jsx)("div",{className:"flex items-center justify-center mb-4 font-semibold px-1 pt-2",children:(0,o.jsx)("div",{className:"flex justify-center bg-orange-100 dark:bg-gradient-to-b dark:from-primary_orange-0 to-orange-600 text-md rounded-lg m-2 h-28",children:(0,o.jsx)("div",{className:"text-primary_orange-0 dark:text-black text-md m-2",children:t.title})})}),(0,o.jsx)("div",{className:"flex flex-col items-center justify-center pb-3.5 px-3",children:(0,o.jsx)("div",{className:"flex flex-col items-center justify-center font-bold text-center dark:text-white md:text-lg light:bg-orange-50 border-orange-500 border my-1 w-full rounded-lg",children:t.author})}),(0,o.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,o.jsx)("div",{className:"font-bold text-center text-black md:text-xl w-full",children:(0,o.jsx)(d(),{href:t.link,children:(0,o.jsx)("button",{ref:u,onClick:m,className:" bottom-0 bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full",children:"Read Blog"})})})})]})},n)})}))}),(0,o.jsx)(s.L,{mt:20})]})}},19409:function(){},20967:function(t,n,e){"use strict";e.d(n,{q:function(){return c}});var r=e(67294);function i(t,n){const e=(0,r.useId)();return(0,r.useMemo)((()=>t||[n,e].filter(Boolean).join("-")),[t,n,e])}function o(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var a=o()?r.useLayoutEffect:r.useEffect;function s(t,n=[]){const e=(0,r.useRef)(t);return a((()=>{e.current=t})),(0,r.useCallback)(((...t)=>{var n;return null==(n=e.current)?void 0:n.call(e,...t)}),n)}var u=e(36597);function c(t={}){const{onClose:n,onOpen:e,isOpen:o,id:a}=t,c=s(e),l=s(n),[d,f]=(0,r.useState)(t.defaultIsOpen||!1),[m,p]=function(t,n){const e=void 0!==t;return[e,e&&"undefined"!==typeof t?t:n]}(o,d),h=i(a,"disclosure"),v=(0,r.useCallback)((()=>{m||f(!1),null==l||l()}),[m,l]),g=(0,r.useCallback)((()=>{m||f(!0),null==c||c()}),[m,c]),x=(0,r.useCallback)((()=>{(p?v:g)()}),[p,g,v]);return{isOpen:!!p,onOpen:g,onClose:v,onToggle:x,isControlled:m,getButtonProps:(t={})=>({...t,"aria-expanded":p,"aria-controls":h,onClick:(0,u.v0)(t.onClick,x)}),getDisclosureProps:(t={})=>({...t,hidden:!p,id:h})}}},65028:function(t,n,e){"use strict";e.d(n,{L:function(){return r}});var r=(0,e(2169).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},20943:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:function(){return r}})},47568:function(t,n,e){"use strict";function r(t,n,e,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function s(t){r(a,i,o,s,u,"next",t)}function u(t){r(a,i,o,s,u,"throw",t)}s(void 0)}))}}e.d(n,{Z:function(){return i}})},13375:function(t,n,e){"use strict";function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(n,{Z:function(){return r}})},828:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(13375);var i=e(91566);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||(0,r.Z)(t,n)||(0,i.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(20943);function i(t,n){if(t){if("string"===typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}}},function(t){t.O(0,[870,774,888,179],(function(){return n=13899,t(t.s=n);var n}));var n=t.O();_N_E=n}]);