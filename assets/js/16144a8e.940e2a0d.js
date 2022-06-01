"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[1162],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Week 1",author:"Kaushlendra"},l=void 0,u={unversionedId:"2021/copyrights/updates/2021-06-07",id:"2021/copyrights/updates/2021-06-07",title:"Week 1",description:"\x3c!--",source:"@site/docs/2021/copyrights/updates/2021-06-07.md",sourceDirName:"2021/copyrights/updates",slug:"/2021/copyrights/updates/2021-06-07",permalink:"/gsoc/docs/2021/copyrights/updates/2021-06-07",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/copyrights/updates/2021-06-07.md",tags:[],version:"current",frontMatter:{title:"Week 1",author:"Kaushlendra"},sidebar:"2021",previous:{title:"Introduction",permalink:"/gsoc/docs/2021/copyrights/"},next:{title:"Week 2",permalink:"/gsoc/docs/2021/copyrights/updates/2021-06-15"}},c={},p=[{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Week 1 Progress",id:"week-1-progress",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-week-1-meeting"},"Coding Week 1 Meeting"),(0,o.kt)("h3",{id:"attendees"},"Attendees"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anupam Ghosh"),(0,o.kt)("li",{parentName:"ul"},"Gaurav Mishra"),(0,o.kt)("li",{parentName:"ul"},"Vasudev "),(0,o.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,o.kt)("li",{parentName:"ul"},"Shreya Singh"),(0,o.kt)("li",{parentName:"ul"},"Kaushlendra Pratap Singh"),(0,o.kt)("li",{parentName:"ul"},"Omar AbdelSamea ")),(0,o.kt)("h3",{id:"discussions"},"Discussions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get Started with Implementing the NER and POS tagging on a sample Copyright"),(0,o.kt)("li",{parentName:"ul"},"Implement NER and POS tagging on a larger dataset that was observed from Fossology itself."),(0,o.kt)("li",{parentName:"ul"},"Look for and Relations that can be implemented and defined as our logical checks for Detection of False Positives."),(0,o.kt)("li",{parentName:"ul"},"Use of Spacy/NLTK/Others")),(0,o.kt)("h3",{id:"week-1-progress"},"Week 1 Progress"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spacy was decided to be used as the library prompt for NER and POS tagging. As it supports both the functionalities in other languages as well and it is very future proof."),(0,o.kt)("li",{parentName:"ul"},"NER and POS Tagging pre-trained models were set up and implemented on test copyright statements."),(0,o.kt)("li",{parentName:"ul"},"Set up fossology and gathered a Synthetic dataset by using pre-existed Copyright Agent, which helped us give a dataset with all four quadrants of the prediction."),(0,o.kt)("li",{parentName:"ul"},"Codebase has been written in such a way that can help in comparing and finding the relations"),(0,o.kt)("li",{parentName:"ul"},"Wiki has been Updated")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/Kaushl2208/e7962f6f895912246a0bd813bba399ed"},"Collaboratory Gist")," can be visited."),(0,o.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,o.kt)("p",null,"Implementation of POS tagging and NER was planned for next few weeks."))}f.isMDXComponent=!0}}]);