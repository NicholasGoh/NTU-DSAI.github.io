"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[6705],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7294),i=n(9960),o=n(3725),c=n(6010),a="cardContainer_woeA",u="cardContainerLink_iOSj",l="cardTitle_pNjP",s="cardDescription_qC_k",d=n(3919),m=n(5999);function p(e){var t=e.href,n=e.children,o=(0,c.Z)("card margin-bottom--lg padding--lg",a,t&&u);return t?r.createElement(i.Z,{href:t,className:o},n):r.createElement("div",{className:o},n)}function f(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",l),title:i},n," ",i),r.createElement("div",{className:(0,c.Z)("text--truncate",s),title:o},o))}function v(e){var t=e.item,n=(0,o.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function g(e){var t,n=e.item,i=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==c?void 0:c.description})}function E(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(v,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(E,{item:e}))})))}},7165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=n(5360),a=n(3725),u=["components"],l={id:"computer-science-and-engineering",sidebar_position:1,title:"Computer Science and Engineering",description:"General overview of SCSE modules"},s=void 0,d={unversionedId:"Module-Review/BDEs/SCSE/computer-science-and-engineering",id:"Module-Review/BDEs/SCSE/computer-science-and-engineering",title:"Computer Science and Engineering",description:"General overview of SCSE modules",source:"@site/docs/Module-Review/BDEs/SCSE/index.md",sourceDirName:"Module-Review/BDEs/SCSE",slug:"/Module-Review/BDEs/SCSE/",permalink:"/docs/Module-Review/BDEs/SCSE/",editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/BDEs/SCSE/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"computer-science-and-engineering",sidebar_position:1,title:"Computer Science and Engineering",description:"General overview of SCSE modules"},sidebar:"tutorialSidebar",previous:{title:"EE8086 Astronomy",permalink:"/docs/Module-Review/BDEs/EEE/ee8086-astronomy"},next:{title:"SC4003 Computer Vision",permalink:"/docs/Module-Review/BDEs/SCSE/sc4003-computer-vision"}},m={},p=[],f={toc:p};function v(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);