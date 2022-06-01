"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[4449],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),c=p(a),h=l,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?o.createElement(f,i(i({ref:t},d),{},{components:a})):o.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:l,i[1]=n;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2967:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var o=a(3117),l=a(102),r=(a(7294),a(3905)),i=["components"],n={title:"Week 4",author:"Shruti Agarwal"},s=void 0,p={unversionedId:"2021/ui/updates/shruti/2021-07-06",id:"2021/ui/updates/shruti/2021-07-06",title:"Week 4",description:"\x3c!--",source:"@site/docs/2021/ui/updates/shruti/2021-07-06.md",sourceDirName:"2021/ui/updates/shruti",slug:"/2021/ui/updates/shruti/2021-07-06",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-06",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/shruti/2021-07-06.md",tags:[],version:"current",frontMatter:{title:"Week 4",author:"Shruti Agarwal"},sidebar:"2021",previous:{title:"Week 3",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-06-29"},next:{title:"Week 5",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-13"}},d={},u=[{value:"Screenshots",id:"screenshots",level:2},{value:"Home",id:"home",level:3},{value:"Search",id:"search",level:3},{value:"Upload File",id:"upload-file",level:3},{value:"Custom Alert",id:"custom-alert",level:3},{value:"Browse Page Prototype",id:"browse-page-prototype",level:3},{value:"Move Uploads",id:"move-uploads",level:3},{value:"Copy Uploads",id:"copy-uploads",level:3},{value:"Delete Uploads",id:"delete-uploads",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"Contributions",id:"contributions",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the separate button widget related to our theme and replaced the react-bootstrap button with our custom component."),(0,r.kt)("li",{parentName:"ul"},"Fixed the login button style."),(0,r.kt)("li",{parentName:"ul"},"Added the InputContainer in the widget for all the types which can be reusable by all the components."),(0,r.kt)("li",{parentName:"ul"},"Added the search page."),(0,r.kt)("li",{parentName:"ul"},"Added the Upload File page for which created the reusable components of ",(0,r.kt)("inlineCode",{parentName:"li"},"IgnoreScm"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessLevel"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional Analysis")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Upload Reuse")," which can be reused by the other uploads page of server, vcs, url and schedule analysis in Jobs."),(0,r.kt)("li",{parentName:"ul"},"On creating the upload, we are simultaneously doing three processes, creating the upload and checking that it got unpacked or not, and scheduling the analysis."),(0,r.kt)("li",{parentName:"ul"},"Created the custom component for Alert and Tooltip."),(0,r.kt)("li",{parentName:"ul"},"Replaced the login alert with the custom component."),(0,r.kt)("li",{parentName:"ul"},"Added all the pages for the routes and linked them."),(0,r.kt)("li",{parentName:"ul"},"Added the prototype for the browse page."),(0,r.kt)("li",{parentName:"ul"},"Added the delete Uploads page. Created the getFolders page from where it is fetching all the folders. Created the organizeUploads which contains deleteUploadFile and getUploadsById."),(0,r.kt)("li",{parentName:"ul"},"Added the move or copy page in the organize/uploads."),(0,r.kt)("li",{parentName:"ul"},"Added the additional information for the components with Tooltip widget."),(0,r.kt)("li",{parentName:"ul"},"Added the fossology website target attribute, updated the Move Folder title and updated the styling of search page.")),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("h3",{id:"home"},"Home"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fix-home",src:a(1155).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"search"},"Search"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search",src:a(767).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"file-search",src:a(9391).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"upload-file"},"Upload File"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upload-file-error",src:a(3527).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uploaded-file",src:a(8102).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upload-file-reusable-options",src:a(9678).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"custom-alert"},"Custom Alert"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"custom-alert",src:a(4191).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"browse-page-prototype"},"Browse Page Prototype"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"browse-page-prototype",src:a(8265).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"move-uploads"},"Move Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"move-uploads",src:a(8254).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"copy-uploads"},"Copy Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"copy-uploads",src:a(7422).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"delete-uploads"},"Delete Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete-uploads",src:a(7171).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tooltip",src:a(8645).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"contributions"},"Contributions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/33"},"feat(widget): added the Button widget and fixed the login button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/34"},"feat(search): added the search page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/issues/44"},"Widgets for the helper messages to improve the UX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(upload): added the upload file page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(analysis): added the analysis request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/47"},"feat(ui): added the custom component for alert and tooltip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/48"},"feat(upload): added the delete uploads page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/53"},"feat(browse): Added the prototype for the uploads page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/57"},"fix(routes): added the routes for all pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/59"}," feat(tooltip): added the extra information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/62"}," feat(moveUpload): Added the move upload or copy upload page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/65"}," fix(ui): fixed the bugs in search, overview, create folder page"))))}h.isMDXComponent=!0},8265:function(e,t,a){t.Z=a.p+"assets/images/browsePagePrototype-d861bb65981aa2db04b1df334e00418a.png"},1155:function(e,t,a){t.Z=a.p+"assets/images/features-f7a21050ae1e73caad93deda70cdbbee.png"},767:function(e,t,a){t.Z=a.p+"assets/images/search-c0b58d059d6cee9745e5c598ff986c21.png"},9391:function(e,t,a){t.Z=a.p+"assets/images/searchFiles-9f0f3ec472f743139c442d5931d34356.png"},7422:function(e,t,a){t.Z=a.p+"assets/images/copyUpload-3903fa9ddf88b0d0e00fd19f3e9b9fc9.png"},7171:function(e,t,a){t.Z=a.p+"assets/images/deleteUploads-60bb558a4cd905381f0875fc020960e8.png"},8254:function(e,t,a){t.Z=a.p+"assets/images/moveUpload-3139bc685e6912df15750d70e01d8318.png"},3527:function(e,t,a){t.Z=a.p+"assets/images/uploadFileError-bba80390497f6c8dc08ff0141ee64640.png"},9678:function(e,t,a){t.Z=a.p+"assets/images/uploadFileReusableOptions-f596329a8f04f0f455ab8690d82ce8f3.png"},8102:function(e,t,a){t.Z=a.p+"assets/images/uploadedFile-8d148ab22f1f71992e48ae5a75f32980.png"},4191:function(e,t,a){t.Z=a.p+"assets/images/customAlert-0484d57e939c6e186775d7e238e69049.png"},8645:function(e,t,a){t.Z=a.p+"assets/images/tooltip-8b531422e8dfe01f61cf9a7cffa3f87c.png"}}]);