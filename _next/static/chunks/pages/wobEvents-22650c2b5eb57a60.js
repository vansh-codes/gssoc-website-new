(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wobEvents",function(){return n(76553)}])},76553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(85893),r=n(24027),l=(0,r.I)({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"}),o=(0,r.I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"}),c=n(9008),s=n.n(c),a=n(67294);function d(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}var u=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(i&&(i+=" "),i+=t);return i};function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function f(e){var t,n=e.current,i=e.next,r=e.className,l=e.style,o=a.useState({current:n,next:i}),c=o[0],s=o[1],d=a.useState(!1),f=d[0],x=d[1];return a.useEffect((function(){c.current!==n?(c.current===c.next&&s(m({},c,{next:i})),x(!0)):x(!1)}),[n,i]),a.createElement("div",{className:u("fcc__digit_block","_2EBbg",r),style:l},a.createElement("div",{className:"_SKh-V"},c.next),a.createElement("div",{className:"_106d2"},c.current),a.createElement("div",{className:u("_3luxx",(t={},t._2kgZC=f,t)),onTransitionEnd:function(){s({current:n,next:i}),x(!1)}},a.createElement("div",{className:u("_2v-d4","_1GZQ7")},c.current),a.createElement("div",{className:u("_2v-d4","_3AVXa")},c.next)))}function x(e){var t=new Date(e);if(isNaN(t.getTime()))throw Error("Invalid date");var n=Date.now(),i=Math.round((t.getTime()-n)/1e3);return i<0&&(i=0),{total:i,days:Math.floor(i/86400),hours:Math.floor(i/3600%24),minutes:Math.floor(i/60%60),seconds:Math.floor(i%60)}}function h(e){return("0".repeat(Math.max(0,2-String(e).length))+String(e)).split("")}function v(e){if(void 0!==e)return"string"==typeof e?e:e+"px"}var p=["to","className","style","children","onComplete","onTick","showLabels","showSeparators","labels","labelStyle","digitBlockStyle","separatorStyle","dividerStyle","duration","renderMap","hideOnComplete","stopOnHiddenVisibility","renderOnServer","spacing"],g=[!0,!0,!0,!0],b=["Days","Hours","Minutes","Seconds"];function w(e){var t,n=e.to,i=e.className,r=e.style,l=e.children,o=e.onComplete,c=void 0===o?function(){}:o,s=e.onTick,d=void 0===s?function(){}:s,w=e.showLabels,y=void 0===w||w,N=e.showSeparators,j=void 0===N||N,_=e.labels,S=void 0===_?b:_,E=e.labelStyle,k=e.digitBlockStyle,F=e.separatorStyle,C=e.dividerStyle,O=e.duration,B=void 0===O?.7:O,M=e.renderMap,D=void 0===M?g:M,I=e.hideOnComplete,T=void 0===I||I,L=e.stopOnHiddenVisibility,W=void 0!==L&&L,A=e.renderOnServer,z=void 0!==A&&A,R=e.spacing,P=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t.indexOf(n=l[i])>=0||(r[n]=e[n]);return r}(e,p),G=a.useState(q),V=G[0],H=G[1],X=a.useRef(0);function Z(){window.clearInterval(X.current)}function q(){var e=x(n);return{timeDelta:e,completed:0===e.total}}function J(){var e=q();H(e),d(e),e.completed&&(Z(),c())}(0,a.useEffect)((function(){if(W){var e=function(){"visible"===document.visibilityState?(J(),X.current=window.setInterval(J,1e3)):Z()};return e(),document.addEventListener("visibilitychange",e),function(){Z(),document.removeEventListener("visibilitychange",e)}}return Z(),J(),X.current=window.setInterval(J,1e3),function(){Z()}}),[n,W]);var Q=(0,a.useMemo)((function(){return m({"--fcc-flip-duration":B+"s","--fcc-spacing":v(null==R?void 0:R.clock),"--fcc-digit-block-width":v(null==k?void 0:k.width),"--fcc-digit-block-height":v(null==k?void 0:k.height),"--fcc-digit-block-radius":v(null==k?void 0:k.borderRadius),"--fcc-digit-block-spacing":v(null==R?void 0:R.digitBlock),"--fcc-shadow":null==k?void 0:k.boxShadow,"--fcc-digit-font-size":v(null==k?void 0:k.fontSize),"--fcc-digit-color":null==k?void 0:k.color,"--fcc-label-font-size":v(null==E?void 0:E.fontSize),"--fcc-label-color":null==E?void 0:E.color,"--fcc-divider-color":null==C?void 0:C.color,"--fcc-divider-height":v(null==C?void 0:C.height),"--fcc-background":(null==k?void 0:k.background)||(null==k?void 0:k.backgroundColor),"--fcc-separator-size":v(null==F?void 0:F.size),"--fcc-separator-color":j?null==F?void 0:F.color:"transparent"},r)}),[r,k,E,B,C,F,j,R]),K=a.useMemo((function(){if(k)return m({},k,{background:void 0,backgroundColor:void 0,width:void 0,height:void 0,boxShadow:void 0,fontSize:void 0,color:void 0,borderRadius:void 0})}),[k]),Y=a.useMemo((function(){var e,t,n=(e=V.timeDelta,t=x((new Date).getTime()+1e3*(e.total-1)),{days:{current:h(e.days),next:h(t.days)},hours:{current:h(e.hours),next:h(t.hours)},minutes:{current:h(e.minutes),next:h(t.minutes)},seconds:{current:h(e.seconds),next:h(t.seconds)}}),i=D.length>=4?D.slice(0,4):g,r=S.length>=4?S.slice(0,4):b,l=Object.values(n),o=["day","hour","minute","second"];return i.map((function(e,t){return[e,o[t],l[t],r[t]]}))}),[D,V]);return null!=V&&V.completed&&T?a.createElement(a.Fragment,null,l):z||"undefined"!=typeof window?a.createElement("div",Object.assign({},P,{className:u("fcc","_qWTcH",(t={},t._1tbqx=y,t),i),style:Q,"data-testid":"fcc-container"}),Y.map((function(e,t){var n=e[1],i=e[2];return e[0]?a.createElement(a.Fragment,{key:n},a.createElement("div",{className:"fcc__unit_time fcc__unit_time--"+n+" _3cpN7"},y&&a.createElement("div",{className:"fcc__label fcc__label--"+n+" _2aOn7",style:E},e[3]),i.current.map((function(e,t){return a.createElement(f,{key:t,current:e,next:i.next[t],style:K,className:"fcc__digit_block--"+n})}))),t<Y.length-1&&a.createElement("div",{className:"fcc__separator _2hRXr"})):null}))):a.createElement(a.Fragment,null)}n(26837);var y=n(65028),N=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"WOB 2024 Events | GirlScript Winter of Blockchain"}),(0,i.jsx)("meta",{name:"description",content:"Browse the latest events at WOB 2024, hosted by GirlScript Foundation."}),(0,i.jsx)("link",{rel:"icon",href:"/WoB/Favicon.ico"})]}),(0,i.jsxs)("div",{className:"relative bg-cover bg-center max-w-[1232px] h-[800px] md:h-[600px] lg:h-[700px] xl:h-[800px] mt-8 mx-auto rounded-[28px]",style:{backgroundImage:"url('/WoB/events_bg.png')"},children:[(0,i.jsx)(y.L,{m:"20"}),(0,i.jsxs)("div",{className:"absolute inset-0 bg-[#739aa7] bg-opacity-5 rounded-[28px] flex flex-col justify-center items-center text-center",children:[(0,i.jsx)("h1",{className:"text-[#56AAC5] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",children:"WOB 2024"}),(0,i.jsx)("h2",{className:"text-[#85C6DC] text-4xl md:text-5xl lg:text-6xl font-semibold mb-8",children:"Latest Event Name"}),(0,i.jsx)("p",{className:"text-white max-w-[917px] px-6 md:px-20 lg:px-24 text-lg md:text-xl mb-8",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nunc non ex facilisis, vel eleifend justo tempor."}),(0,i.jsx)("h2",{className:"text-[#B9EEFF] text-lg md:text-xl lg:text-3xl font-normal mb-8",children:"TIME REMAINING"}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(w,{to:(new Date).getTime()+864e5+5e3,className:"flip-clock"})})]})]}),(0,i.jsx)("div",{className:"flex justify-end px-4 md:px-24 py-6 md:py-10",children:(0,i.jsxs)("div",{className:"flex items-center h-[61px] rounded-[16px] bg-[#DBF6FF] text-[#85C6DC] w-[260px] md:w-[360px] p-2",children:[(0,i.jsx)(l,{className:"text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 mr-2"}),(0,i.jsx)("input",{type:"text",placeholder:"Search Events",className:"w-full p-2 text-white bg-[#DBF6FF] placeholder-[#85C6DC] outline-none"}),(0,i.jsx)(o,{className:"text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 ml-2"})]})}),(0,i.jsxs)("div",{className:"container mx-auto px-4 md:px-0 py-8",children:[(0,i.jsx)("h2",{className:"text-4xl md:text-6xl font-medium text-[#00008B] mb-6 md:mb-10 text-center md:text-left",children:"Past Events"}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6",children:[{name:"Open Source Guidance Session\ud83d\udce2\ud83d\ude80",description:"\ud83d\udce3 Join us for a game-changing session on Open Source \ud83c\udf10 with Winter of Blockchain featuring our esteemed speaker, Nandini Singh! \ud83e\udd29\u26a1 \nNandini is an Android developer, open-source enthusiast, and the Program Manager for Winter of Blockchain. She will share her insights and expertise on the fascinating world of open source.",image:"https://www.youtube.com/embed/V53unQsIISk?si=bfRuT1pmtLkNIC_l",logo:"/WoB/gsf_ytlogo.jpg",views:"live",time:"\u2022 Jun 30 2024"}].map((function(e,t){return(0,i.jsxs)("div",{className:"bg-[#E6F6FF] rounded-lg max-w-[325px] m-auto overflow-hidden shadow-lg",children:[(0,i.jsx)("iframe",{className:"w-full h-80",src:e.image,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.jsx)("div",{className:"p-4",children:(0,i.jsxs)("div",{className:"flex mb-2",children:[(0,i.jsx)("img",{src:e.logo,alt:"Logo",className:"w-10 h-10 mr-4 rounded-full"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{className:"text-lg md:text-xl font-bold overflow-hidden",children:[e.name.slice(0,30),"..."]}),(0,i.jsx)("div",{className:"h-20 w-full overflow-hidden mt-2",children:(0,i.jsxs)("p",{className:"text-[#606060]",children:[e.description.slice(0,90),"..."]})}),(0,i.jsxs)("div",{className:"flex items-center text-[#606060] mt-2",children:[(0,i.jsx)("p",{className:"ml-2 mr-1",children:e.views}),(0,i.jsx)("p",{children:e.time})]})]})]})})]},t)}))})]})]})}},26837:function(){},9008:function(e,t,n){e.exports=n(5443)},65028:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var i=(0,n(2169).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.displayName="Spacer"}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);