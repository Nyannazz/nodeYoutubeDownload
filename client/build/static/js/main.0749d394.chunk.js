(this["webpackJsonpyt-downloader"]=this["webpackJsonpyt-downloader"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=(a(40),a(2)),l=(a(41),a(4)),u=a(8),m=function(){return r.a.createElement("nav",{id:"nav"},r.a.createElement("div",{className:"inner"},r.a.createElement(l.b,{to:"/",id:"logo",className:"pointer undecoratedLink"},"YOUTUBE COON"),r.a.createElement("section",null,r.a.createElement(l.b,{to:"/search",className:"pointer undecoratedLink"},"SEARCH"),r.a.createElement("a",{href:"info"},"INFO"),r.a.createElement("a",{href:"contact"},"CONTACT"))))},s=function(e){var t=e.onSubmit,a=e.placeholder,c=void 0===a?"SEARCH FOR YOUTUBE URL":a,o=e.match,l=Object(n.useState)(""),u=Object(i.a)(l,2),m=u[0],s=u[1];return Object(n.useEffect)((function(){o.params.query?s(decodeURIComponent(o.params.query)):s("")}),[o.params.query]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(m)},id:"searchbar",className:"margin0Auto"},r.a.createElement("input",{value:m,onChange:function(e){return s(e.target.value)},placeholder:c,type:"text",id:"searchText",required:!0}),r.a.createElement("input",{type:"submit",value:"SEARCH",id:"searchSubmit"}))},d=function(e){var t=e.thumbnail,a=e.title,n=e.length;return r.a.createElement("div",{id:"videoCard"},r.a.createElement("img",{src:t,alt:"video thumbnail"}),r.a.createElement("h3",null,a),r.a.createElement("p",null,"duration: ",r.a.createElement("strong",null,n?(n/60).toFixed(2):0," minutes")),r.a.createElement("div",null))},f=a(9),v=a.n(f),p=a(12),h=a(33),E=a.n(h),b=a(18),O=a(14),y=a.n(O),g="/api",w=g+"/ytdl";function j(){return(j=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/simpleinfo?videolink=").concat(t));case 2:if(!((a=e.sent).status>=400)){e.next=5;break}throw new Error(a);case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,a){arguments.length>3&&void 0!==arguments[3]&&arguments[3];S(e,t).then((function(n){y()({url:"".concat(w,"/download?videolink=").concat(e).concat(t?"&format=".concat(t):""),method:"GET",responseType:"arraybuffer",onDownloadProgress:function(e){Math.round(100*e.loaded/n.data.size)}}).then((function(e){var t=n.data.format.container||"mp4";Object(b.saveAs)(new Blob([e.data]),a?"".concat(a,".").concat(t):"video".concat(Date.now(),".mp4"))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}function D(e,t,a,n,r,c){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(e){return console.log(e)};S(e,t).then((function(c){y()({url:"".concat(w,"/downloadmp3?videolink=").concat(e).concat(t?"&format=".concat(t):""),method:"GET",responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.round(100*e.loaded/c.data.size);o(t)}}).then((function(e){var t=new E.a(e.data);r&&t.setFrame("TIT2",r),n&&t.setFrame("TPE1",[n]),t.addTag();var c=t.getBlob();Object(b.saveAs)(c,a?"".concat(a,".mp3"):"music".concat(Date.now(),".mp3"))})).catch((function(e){return console.log(e)}))}))}function S(e,t){return y()({url:"".concat(w,"/getsize?videolink=").concat(e).concat(t?"&format=".concat(t):""),method:"GET"})}var T=function(){return r.a.createElement("div",null,"LOADING...")},k=function(e){var t=e.container,a=e.type,n=e.audioBitrate,c=e.qualityLabel,o=e.url,i=e.itag,l=e.onDownload;return r.a.createElement("tr",{id:"formatItem"},r.a.createElement("td",{id:"format"},a),r.a.createElement("td",{id:"quality"},c||n+" bitrate"),r.a.createElement("td",{className:"centerText"},r.a.createElement("a",{href:o},"SOURCE")),r.a.createElement("td",{className:"pointer"},r.a.createElement("div",{onClick:function(){return l(i,t)},id:"download"},"DOWNLOAD")))},C=function(e){var t=e.formats,a=void 0===t?[]:t,n=e.onDownload,c=e.convertMp3;return r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement(k,Object.assign({onDownload:n},e,{type:c?"mp3":e.type,key:"videoFormat_".concat(t)}))})))},q=function(e){var t=e.formatList,a=void 0===t?[]:t,c=e.onDownload,o=e.onDownloadMp3;console.log(Date.now());var l=Object(n.useState)("video"),u=Object(i.a)(l,2),m=u[0],s=u[1],d=a.filter((function(e){return e.type.match(/^audio/)})),f=a.filter((function(e){return e.type.match(/^video/)&&e.audioBitrate})),v=a.filter((function(e){return e.type.match(/^video/)&&!e.audioBitrate}));return r.a.createElement("div",{id:"formatSelect"},r.a.createElement("div",{id:"tabSwitch"},r.a.createElement("div",{onClick:function(){return s("video")},className:"video"===m?"activeTab":"inactiveTab"},"VIDEO"),r.a.createElement("div",{onClick:function(){return s("audio")},className:"audio"===m?"activeTab":"inactiveTab"},"AUDIO"),r.a.createElement("div",{onClick:function(){return s("mp3")},className:"mp3"===m?"activeTab":"inactiveTab"},"MP3"),r.a.createElement("div",{onClick:function(){return s("videoOnly")},className:"videoOnly"===m?"activeTab":"inactiveTab"},"VIDEO ONLY")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{id:"tableHeader"},r.a.createElement("th",null,"FORMAT"),r.a.createElement("th",null,"QUALITY"),r.a.createElement("th",null,"LINK"),r.a.createElement("th",null,"DOWNLOAD"))),"video"===m&&r.a.createElement(C,{onDownload:c,formats:f}),"audio"===m&&r.a.createElement(C,{onDownload:c,formats:d}),"mp3"===m&&r.a.createElement(C,{convertMp3:!0,onDownload:o,formats:d}),"videoOnly"===m&&r.a.createElement(C,{onDownload:c,formats:v})))},x=function(e){var t=e.match,a=e.history,c=e.video,o=e.setVideo;console.log(a);var l=Object(n.useState)(null),u=Object(i.a)(l,2),m=u[0],s=u[1],f=t.params.query;Object(n.useEffect)((function(){o(null),s(null),function(e){return j.apply(this,arguments)}(f).then((function(e){return o(e)})).catch((function(e){return s(!0)}))}),[f]);return m?r.a.createElement("div",{id:"error"},"error"):c?r.a.createElement("div",{id:"videoView"},r.a.createElement(d,{thumbnail:c.thumbnail,title:c.title,length:c.length}),r.a.createElement(q,{onDownload:function(e,t){c.title&&e&&t&&a.push("/video/".concat(f,"/confirm/").concat(e,"/").concat(t))},onDownloadMp3:function(e){c.title&&e&&a.push("/video/".concat(f,"/confirm_mp3/").concat(e))},formatList:c.formats})):r.a.createElement(T,null)},A=function(){return r.a.createElement("div",{id:"banner",className:"centerText"},r.a.createElement("h1",null,"YOUTUBE COON"))},L=function(e){var t=e.video,a=e.setVideo,n=e.history;return r.a.createElement("div",{id:"downloader",className:"inner"},r.a.createElement(A,null),r.a.createElement(u.a,{path:["/video/:query?","/"],render:function(e){var t=e.match;return r.a.createElement(s,{match:t,placeholder:"ENTER VIDEO URL",onSubmit:function(e){return n.push("/video/".concat(encodeURIComponent(e)))}})}}),r.a.createElement(u.a,{path:"/video/:query",render:function(e){return r.a.createElement(x,Object.assign({video:t,setVideo:a},e))}}))},I=a(13),R=a(34),M=function(e){var t=e.video;return r.a.createElement(l.b,{to:"/video/".concat(encodeURIComponent("https://youtube.com".concat(t.link)))},r.a.createElement("div",{id:"videoListCard",className:"pointer"},r.a.createElement("img",{alt:"video thumbnail",src:t.thumbnail}),r.a.createElement("h3",null,t.title)))},U=function(e){var t=e.videos,a=void 0===t?[]:t;return r.a.createElement("section",{id:"videoList"},a.map((function(e){return r.a.createElement(M,{key:e.link,video:e})})))};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e,t){for(var a=t.length-1;a>=0;a--)for(var n=0;n<e.length;n++)if(e[n].link===t[a].link){t.splice(a,1);break}return t},V=new Set,W=function(e){var t=e.page,a=void 0===t?1:t,n=e.query;return r.a.createElement("div",{id:"pageNavContainer"},a>1&&r.a.createElement(l.b,{to:"/search/".concat(n,"/").concat(Number(a)-1),className:"undecoratedLink centerText"},r.a.createElement("h3",{id:"videoSearchNav"},"PREV")),r.a.createElement(l.b,{to:"/search/".concat(n,"/").concat(Number(a)+1),className:"undecoratedLink centerText"},r.a.createElement("h3",{id:"videoSearchNav"},"NEXT")))},G=function(e){var t=e.match,a=(e.history,Object(n.useState)(null)),c=Object(i.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(null),s=Object(i.a)(m,2),d=s[0],f=s[1],v=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(t.params.page||1);return Object(n.useEffect)((function(){var e,a;f(null),V.has(t.params.page)||(e=t.params.query,a=t.params.page,fetch("".concat(g,"/search?q=").concat(e).concat(a?"&page="+a:"")).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))).catch((function(e){console.log(e),f(!0)})).then((function(e){V.add(t.params.page),v>t.params.page?u(P({},e,{videos:[].concat(Object(I.a)(B(o.videos,e.videos)),Object(I.a)(o.videos))})):v<t.params.page?u(P({},e,{videos:[].concat(Object(I.a)(o.videos),Object(I.a)(B(o.videos,e.videos)))})):u(e)}))}),[t.params.query,t.params.page]),Object(n.useEffect)((function(){return function(){V.clear()}}),[]),d?r.a.createElement(l.b,{to:"/search"},r.a.createElement("h1",{className:"centerText"},"SEARCH FAILED!")):o&&o.videos.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{videos:o.videos}),r.a.createElement(W,{page:t.params.page,query:t.params.query})):r.a.createElement(T,null)},H=function(e){var t=e.history;e.match;return r.a.createElement("div",{className:"inner"},r.a.createElement(u.a,{path:"/search/:query?",render:function(e){var a=e.match;return r.a.createElement(s,{match:a,placeholder:"SEARCH FOR VIDEO",onSubmit:function(e){return t.push("/search/".concat(encodeURIComponent(e),"/1"))}})}}),r.a.createElement(u.a,{path:"/search/:query/:page?",component:G}))},z=function(e){var t=e.onClick;e.className;return r.a.createElement("div",{onClick:t,id:"closeIcon",className:"centerAll pointer"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})))},Y=function(e){var t=e.match,a=e.video,c=e.history,o=Object(n.useState)(null),l=Object(i.a)(o,2),u=(l[0],l[1]),m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],f=s[1],h=function(){var e=Object(p.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),u("requested"),e.next=4,N(t.params.query,t.params.itag,d);case 4:u("finished");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a&&f(a.title)}),[a,t.params.query,t.params.itag],t.params.container),a?r.a.createElement("div",{id:"confirmModal",className:"centerAll"},r.a.createElement("form",{id:"customNameForm",onSubmit:h},r.a.createElement(z,{onClick:function(){return c.push("/video/".concat(t.params.query))}}),r.a.createElement("h1",{className:"centerText"},"CONFIRM DOWNLOAD"),r.a.createElement("input",{value:d,onChange:function(e){return f(e.target.value)},type:"text"}),r.a.createElement("input",{className:"submit hoverShadow",value:"DOWNLOAD",type:"submit"}))):r.a.createElement("div",{id:"confirmModal",className:"centerAll"},r.a.createElement("h1",null,"LOADING"))},_=function(e){var t=e.match,a=e.video,c=e.history,o=Object(n.useState)(null),l=Object(i.a)(o,2),u=(l[0],l[1]),m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],f=s[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),b=E[0],O=E[1],y=Object(n.useState)(""),g=Object(i.a)(y,2),w=g[0],j=g[1],N=function(){var e=Object(p.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),u("requested"),e.next=4,D(t.params.query,t.params.itag,d,b,w);case 4:u("finished");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a&&f(a.title)}),[a,t.params.query,t.params.itag]),a?r.a.createElement("div",{id:"confirmModal",className:"centerAll"},r.a.createElement("form",{id:"customNameForm",onSubmit:N},r.a.createElement(z,{onClick:function(){return c.push("/video/".concat(t.params.query))}}),r.a.createElement("h1",{className:"centerText"},"CONFIRM DOWNLOAD"),r.a.createElement("input",{value:d,onChange:function(e){return f(e.target.value)},type:"text"}),r.a.createElement("input",{value:b,placeholder:"add an artist if you want",onChange:function(e){return O(e.target.value)},type:"text"}),r.a.createElement("input",{value:w,placeholder:"add song name",onChange:function(e){return j(e.target.value)},type:"text"}),r.a.createElement("input",{className:"submit hoverShadow",value:"DOWNLOAD",type:"submit"}))):r.a.createElement("div",{id:"confirmModal",className:"centerAll"},r.a.createElement("h1",null,"LOADING"))};var J=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(l.a,null,r.a.createElement("div",{className:"fullSizeContainer borderBox"},r.a.createElement(m,null),r.a.createElement("main",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/search",component:H}),r.a.createElement(u.a,{path:"/",render:function(e){var t=e.history;return r.a.createElement(L,{history:t,video:a,setVideo:c})}})),r.a.createElement(u.a,{path:"/video/:query/confirm/:itag/:container",render:function(e){return r.a.createElement(Y,Object.assign({},e,{video:a}))}}),r.a.createElement(u.a,{path:"/video/:query/confirm_mp3/:itag",render:function(e){return r.a.createElement(_,Object.assign({},e,{video:a}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0749d394.chunk.js.map