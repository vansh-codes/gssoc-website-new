(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{89411:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return r(53135)}])},53135:function(e,t,r){"use strict";r.r(t);var s=r(85893),d=r(9669),a=r.n(d),x=r(11163),l=r(67294),n=r(49609);t.default=function(){var e=(0,x.useRouter)().query.username,t=(0,l.useState)(null),r=t[0],d=t[1],o=(0,l.useState)(!1),c=o[0],i=o[1];if((0,l.useEffect)((function(){e&&(i(!0),a().get("https://gssoc.devxprite.tech/api/user/".concat(e)).then((function(e){return d(e.data)})).catch((function(e){return alert("Something went wrong! Please try again later.")})).finally((function(){return i(!1)})))}),[e]),c)return(0,s.jsx)("div",{className:"min-h-[60vh]",children:(0,s.jsxs)("div",{className:"loader-div",children:[(0,s.jsx)("div",{className:"overlay dark:bg-darkmode_gray-0"}),(0,s.jsx)("div",{className:"loader-group-container",children:(0,s.jsxs)("div",{className:"loader-group dark:bg-black",children:[(0,s.jsx)(n.$,{className:"loader",thickness:"6px",speed:"0.65s",emptyColor:"gray.200",color:"orange.500",size:"xl"}),(0,s.jsx)("span",{className:"loading-msg dark:text-white",children:"Waiting for response from server..."})]})})]})});if(r){var m=r.pullRequests,p=(r.userStats,r.repositories),b=r.updatedAt;return(0,s.jsxs)("div",{className:"dark:text-zinc-200 px-2 my-14",children:[(0,s.jsx)("img",{src:"https://github.com/".concat(e,".png"),className:"mx-auto mb-2 block size-32 md:size-40 rounded-full border-2 border-orange-500 p-1"}),(0,s.jsxs)("h3",{className:"text-center text-2xl font-semibold md:text-4xl",children:[(0,s.jsxs)("span",{className:"text-center text-orange-500",children:["@",e]}),"'s Stats"]}),(0,s.jsxs)("p",{className:"mt-1 text-center text-xs italic text-zinc-400 md:text-base",children:["Last updated at"," ",new Date(b||new Date).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",dateStyle:"medium",timeStyle:"short"})]}),(0,s.jsxs)("div",{className:"rounded-lg border dark:border-neutral-700 dark:bg-neutral-900 p-3 shadow-lg shadow-black/50 mx-auto mt-8 max-w-screen-xl md:p-8",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-orange-500 md:text-xl",children:"List of PullRequests"}),(0,s.jsx)("div",{className:"relative mx-auto mt-3 w-full max-w-screen-xl overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full border border-zinc-700",children:[(0,s.jsx)("thead",{className:"bg-orange-500 text-black",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"No"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Repository"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Title"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Level"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Commits"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Comments"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Merged At"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",children:"Related Issues"})]})}),(0,s.jsxs)("tbody",{children:[m.map((function(e,t){var r;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base",children:t+1}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-xs md:px-3 md:text-base max-w-32 truncate text-left text-orange-400 md:max-w-40",children:e.repository.name}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-xs md:px-3 md:text-base max-w-72 truncate text-left md:max-w-96",children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.titleHTML})}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base",children:(null===e||void 0===e?void 0:e.level)||e.leval}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base",children:null===e||void 0===e||null===(r=e.commits)||void 0===r?void 0:r.totalCount}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base",children:e.totalCommentsCount}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:new Date(e.mergedAt).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"2-digit"})}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base",children:e.closingIssuesReferences.nodes.map((function(e,t){return(0,s.jsxs)("a",{target:"_blank",rel:"noreferrer",href:e.url,className:"text-green-500",children:["#",e.number]},t)}))})]},t)})),0===m.length&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-xs md:px-3 py-8 text-center text-zinc-500 md:text-lg",colSpan:"8",children:"Nothing to show"})})]})]})})]}),(0,s.jsxs)("div",{className:"rounded-lg border dark:border-neutral-700 dark:bg-neutral-900 p-3 shadow-lg shadow-black/50 mx-auto mt-8 max-w-screen-xl md:p-8",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold text-orange-500 md:text-xl",children:"Repositories Wise Stats"}),(0,s.jsx)("div",{className:"relative mx-auto mt-3 w-full max-w-screen-xl overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full border border-zinc-700",children:[(0,s.jsxs)("thead",{className:"bg-orange-500 text-black",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",rowSpan:2,children:"No"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",rowSpan:2,children:"Repository"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",rowSpan:2,children:"Total Score"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg",colSpan:5,children:"PullRequests"})]}),(0,s.jsxs)("tr",{className:"",children:[(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm",children:"Level 1"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm",children:"Level 2"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm",children:"Level 3"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm",children:"Others"}),(0,s.jsx)("th",{className:"border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm",children:"Total"})]})]}),(0,s.jsxs)("tbody",{className:"",children:[p.map((function(e,t){var r,d,a,x;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:t+1}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-xs md:px-3 md:text-base max-w-32 truncate text-left text-orange-400 md:max-w-96",children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:e.totalScore}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:null===(r=e.prBreakdown)||void 0===r?void 0:r.level1}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:null===(d=e.prBreakdown)||void 0===d?void 0:d.level2}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:null===(a=e.prBreakdown)||void 0===a?void 0:a.level3}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:null===(x=e.prBreakdown)||void 0===x?void 0:x.others}),(0,s.jsx)("td",{className:"border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap",children:e.prCount})]},t)})),0===p.length&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"8",className:"py-8 text-center text-gray-500 md:text-lg",children:"Nothing to show"})})]})]})})]})]})}return(0,s.jsx)("div",{})}}},function(e){e.O(0,[764,669,774,888,179],(function(){return t=89411,e(e.s=t);var t}));var t=e.O();_N_E=t}]);