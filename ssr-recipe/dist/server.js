!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=require("react/jsx-runtime")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";n.r(t);n(1);var r=n(5),c=n.n(r),i=n(3),o=n.n(i),u=n(6),s=n(2),l=n(0),a=function(){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.Link,{to:"/red",children:"Red"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.Link,{to:"/blue",children:"Blue"})})]})},f=function(){return Object(l.jsx)("div",{className:"Blue",children:"Blue"})},d=function(){return Object(l.jsx)(f,{})},p=function(){return Object(l.jsx)("div",{className:"Red",children:"Red"})},j=function(){return Object(l.jsx)(p,{})},b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(a,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(s.Route,{path:"/red",component:j}),Object(l.jsx)(s.Route,{path:"/blue",component:d})]})},x=n(4),h=n.n(x),m=n(7),O=n.n(m),v=JSON.parse(O.a.readFileSync(h.a.resolve("./build/asset-manifest.json"),"utf-8")),y=Object.keys(v.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(v.files[e],'"<\/script>')})).join("");var g=o()(),S=o.a.static(h.a.resolve("./build"),{index:!1});g.use(S),g.use((function(e,t,n){var r=Object(l.jsx)(u.StaticRouter,{location:e.url,context:{},children:Object(l.jsx)(b,{})}),i=c.a.renderToString(r);t.send(function(e){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(v.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,'\n      </div>\n      <script src="').concat(v.files["runtime-main.js"],'"><\/script>\n      ').concat(y,'\n      <script src="').concat(v.files["main.js"],'"><\/script>\n    </body>\n    </html>\n  ')}(i))})),g.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);