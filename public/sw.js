if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"56ebb0e7d39598d8f54174906a97e66b"},{url:"/_next/static/XUSq0RmSO07NUEz-W6Aiz/_buildManifest.js",revision:"cf45b3c8f1413fce5320ebfcc801f6c6"},{url:"/_next/static/XUSq0RmSO07NUEz-W6Aiz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2458e504-a94e282c5342cdce.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/250-81beaf7706c11f22.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/790-5077a21fc2f607e8.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/8d1b86a7-ecf0451376c68541.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/aea5067d-65d66d358796c54e.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/aeef19d4-d6b75ab14e1627d4.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/app/_not-found/page-2900107acfb5b82e.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/app/layout-a33d016063df9a2a.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/app/page-d294f011bdda47f0.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/b140f4c8-c5614cf684991923.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/main-2545a58a2da54271.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/main-app-3099bedac0ab4da8.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/pages/_app-866c675654994a55.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/pages/_error-4eec2c730e81cc74.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-762cfd906e0b4718.js",revision:"XUSq0RmSO07NUEz-W6Aiz"},{url:"/_next/static/css/13873719d3b9e9d6.css",revision:"13873719d3b9e9d6"},{url:"/_next/static/css/1be7f965e6d68dc2.css",revision:"1be7f965e6d68dc2"},{url:"/_next/static/css/6d484eec6a459d56.css",revision:"6d484eec6a459d56"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sound/Hope.mp3",revision:"2735acf3dc44a2c1b645b084f573cc50"},{url:"/sound/Just-Relax.mp3",revision:"ead5c7cec5cc1b8b6120522928fddfc6"},{url:"/sound/Lofi-Stuty.mp3",revision:"38e68bd45cd67467e0cf7668a44910b5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
