"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[5084],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9686:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={title:"Week 2",author:"Aman Dwivedi"},p=void 0,u={unversionedId:"2021/ui/updates/aman/2021-06-22",id:"2021/ui/updates/aman/2021-06-22",title:"Week 2",description:"\x3c!--",source:"@site/docs/2021/ui/updates/aman/2021-06-22.md",sourceDirName:"2021/ui/updates/aman",slug:"/2021/ui/updates/aman/2021-06-22",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-06-22",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/aman/2021-06-22.md",tags:[],version:"current",frontMatter:{title:"Week 2",author:"Aman Dwivedi"},sidebar:"2021",previous:{title:"Week 1",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-06-15"},next:{title:"Week 3",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-06-29"}},s={},d=[{value:"Screenshots",id:"screenshots",level:2},{value:"Pull requests",id:"pull-requests",level:2}],c={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added CONTRIBUTING.md file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added the following GitHub infrastructure files"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bug_report.md"),(0,o.kt)("li",{parentName:"ul"},"feature_request.md "),(0,o.kt)("li",{parentName:"ul"},"PULL_REQUEST_TEMPLATE.md "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Created a routes.js file inside constant folder for url mapping")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added Eslint for static code analysis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added Prettier for code formating and ensuring consistent style throughout the code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added script for testing and formatting the code using ESlint and Prettier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added ",(0,o.kt)("inlineCode",{parentName:"p"},"prop-types")," to validate the props of all components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added getting started overview page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added random string generator function for generating token name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added getDate function to get a date d days from today in ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format for generating token expiry date"))),(0,o.kt)("h2",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"help overview page",src:r(5853).Z,width:"1920",height:"1365"})),(0,o.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/4"},"feat(infra): add GitHub infrastructure and Contributing.md"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/8"},"feat(routes): add routes mapping in constants folder"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/9"},"feat(linter): add proptype, eslint and prettier"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/14"},"feat(help): add getting started overview page"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/16"},"refactor(structure): divide helper file into sub-files")))))}m.isMDXComponent=!0},5853:function(e,t,r){t.Z=r.p+"assets/images/helpOverview-a5d657c6e468936e6dd91b8e1678f1dd.png"}}]);