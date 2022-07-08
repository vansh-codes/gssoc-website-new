(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{5134:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify_cert",function(){return r(4172)}])},638:function(e,t,r){"use strict";var n=r(6856).Z,a=r(337).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=i.default,l={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?l.loader=function(){return e}:"function"===typeof e?l.loader=e:"object"===typeof e&&(l=a({},l,e));!1;(l=a({},l,t)).loadableGenerated&&delete(l=a({},l,l.loadableGenerated)).loadableGenerated;if("boolean"===typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,o(r,l);delete l.ssr}return r(l)},t.noSSR=o;l(r(7294));var i=l(r(4302));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,r){"use strict";var n=r(9658).Z,a=r(7222).Z,i=r(337).Z,l=r(9961).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6319);var d=r(7294).useSyncExternalStore,c=[],f=[],m=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var h=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(l(i({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return function(e,t){var r=function(){if(!o){var t=new h(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=function(){r();var e=u.default.useContext(s.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=u.default.lazy(a.loader));var o=null;if(!m){var c=a.webpack?a.webpack():a.modules;c&&f.push((function(e){var t=!0,n=!1,a=void 0;try{for(var i,l=c[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return r()}}catch(u){n=!0,a=u}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}}))}var p=a.suspense?function(e,t){return n(),u.default.createElement(a.lazy,l(i({},e),{ref:t}))}:function(e,t){n();var r=d(o.subscribe,o.getCurrentValue,o.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u.default.useMemo((function(){return r.loading||r.error?u.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:o.retry}):r.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return p.preload=function(){return r()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(p,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}x.preloadAll=function(){return new Promise((function(e,t){_(c).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};_(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var b=x;t.default=b},4172:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(8527),i=r(9008),l=r.n(i),o=r(7294),u=r(5152),s=r.n(u)()((function(){return Promise.all([r.e(682),r.e(650),r.e(954)]).then(r.bind(r,5066))}),{loadableGenerated:{webpack:function(){return[5066]}},ssr:!1});t.default=function(){var e=(0,o.useState)(""),t=e[0],r=e[1],i=(0,o.useState)(""),u=i[0],d=i[1],c=(0,o.useState)("Contributor"),f=c[0],m=c[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Verify Certifications | GirlScript Summer of Code 2022 | GirlScript Foundation India"}),(0,n.jsx)("meta",{name:"description",content:"GirlScript Summer of Code Certificates"})]}),(0,n.jsx)("div",{className:"items-center justify-center",children:(0,n.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold text-black-100",children:(0,n.jsx)("div",{className:"text-black text-5xl text center font-extrabold mb-10 dark:text-white",children:"Verify Certificates"})})}),(0,n.jsx)(a.LZ,{mt:20}),(0,n.jsxs)("div",{className:"flex flex-col bg-white shadow-2xl dark:bg-black rounded-md mx-2 sm:mx-10 md:mx-10 lg:mx-20 px-10 py-2",children:[(0,n.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Enter Registered Email"}),(0,n.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg",onChange:function(e){return r(e.target.value)}}),(0,n.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Enter Name"}),(0,n.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg",value:u,onChange:function(e){return d(e.target.value)}}),(0,n.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Select Role in GSSoC 2022"}),(0,n.jsxs)("select",{className:"text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg",defaultValue:"Contributor",onChange:function(e){return m(e.target.value)},children:[(0,n.jsx)("option",{value:"Contributor",children:"Contributor"}),(0,n.jsx)("option",{value:"Top Contributor",children:"Top 100 Contributor"}),(0,n.jsx)("option",{value:"Mentor",children:"Mentor"}),(0,n.jsx)("option",{value:"Project Admin",children:"Project Admin"}),(0,n.jsx)("option",{value:"Campus Ambassador",children:"Campus Ambassador"}),(0,n.jsx)("option",{value:"Speaker",children:"Speaker"}),(0,n.jsx)("option",{value:"Organising Team",children:"Organising Team"})]}),(0,n.jsx)(a.LZ,{mt:20}),(0,n.jsx)(s,{Name:u,Role:f,Email:t})]})]})}},5152:function(e,t,r){e.exports=r(638)}},function(e){e.O(0,[895,774,888,179],(function(){return t=5134,e(e.s=t);var t}));var t=e.O();_N_E=t}]);