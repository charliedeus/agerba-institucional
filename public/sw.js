if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0v1SpjgtwUq_DeVGMZ3Ph/_buildManifest.js",revision:"d29d29ecd2be749ed9df142507995f97"},{url:"/_next/static/0v1SpjgtwUq_DeVGMZ3Ph/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1073-5193223d0bcbab5e.js",revision:"5193223d0bcbab5e"},{url:"/_next/static/chunks/1198-03d076f233f94cc4.js",revision:"03d076f233f94cc4"},{url:"/_next/static/chunks/1315-4b227ba89ce359a5.js",revision:"4b227ba89ce359a5"},{url:"/_next/static/chunks/2264-3e62e321ee26de4d.js",revision:"3e62e321ee26de4d"},{url:"/_next/static/chunks/2318-b02a12f2079b8ab5.js",revision:"b02a12f2079b8ab5"},{url:"/_next/static/chunks/2494-937f5a4d5030d52f.js",revision:"937f5a4d5030d52f"},{url:"/_next/static/chunks/29107295-d51e9dc531ba6ced.js",revision:"d51e9dc531ba6ced"},{url:"/_next/static/chunks/3446-a572ab6dbd53cee5.js",revision:"a572ab6dbd53cee5"},{url:"/_next/static/chunks/4314-9ae6ed3daa35aff7.js",revision:"9ae6ed3daa35aff7"},{url:"/_next/static/chunks/4470-1eb23b84a75c4c98.js",revision:"1eb23b84a75c4c98"},{url:"/_next/static/chunks/4930-fcc0c6de600151b0.js",revision:"fcc0c6de600151b0"},{url:"/_next/static/chunks/6546-915509ac9664ef24.js",revision:"915509ac9664ef24"},{url:"/_next/static/chunks/6945-a2ef6cac2195ef83.js",revision:"a2ef6cac2195ef83"},{url:"/_next/static/chunks/7014-48fda8aa4275d3c1.js",revision:"48fda8aa4275d3c1"},{url:"/_next/static/chunks/7410-64416b42774e96cf.js",revision:"64416b42774e96cf"},{url:"/_next/static/chunks/7837-9975aa3c6f0e2b4a.js",revision:"9975aa3c6f0e2b4a"},{url:"/_next/static/chunks/7971-8d11c66dac7fd59a.js",revision:"8d11c66dac7fd59a"},{url:"/_next/static/chunks/8622-72663fb82902e615.js",revision:"72663fb82902e615"},{url:"/_next/static/chunks/9264-9ebe84a02cbd0ef9.js",revision:"9ebe84a02cbd0ef9"},{url:"/_next/static/chunks/9941-343c18935db4c195.js",revision:"343c18935db4c195"},{url:"/_next/static/chunks/framework-3671d8951bf44e4e.js",revision:"3671d8951bf44e4e"},{url:"/_next/static/chunks/main-111a8657f1d7de54.js",revision:"111a8657f1d7de54"},{url:"/_next/static/chunks/pages/_app-429db083e45bad99.js",revision:"429db083e45bad99"},{url:"/_next/static/chunks/pages/_error-bd1da5a6907513b5.js",revision:"bd1da5a6907513b5"},{url:"/_next/static/chunks/pages/atas-de-julgamento-ae542d5665da4d96.js",revision:"ae542d5665da4d96"},{url:"/_next/static/chunks/pages/atas-do-colegiado-6cdb0b84493924e5.js",revision:"6cdb0b84493924e5"},{url:"/_next/static/chunks/pages/audiencias-publicas-83dfc721b48a1796.js",revision:"83dfc721b48a1796"},{url:"/_next/static/chunks/pages/audiencias-publicas/%5Bid%5D-b90c025dc946caea.js",revision:"b90c025dc946caea"},{url:"/_next/static/chunks/pages/beneficios-f32c64cb7ddcd37b.js",revision:"f32c64cb7ddcd37b"},{url:"/_next/static/chunks/pages/cadastros-7a48443948412b6e.js",revision:"7a48443948412b6e"},{url:"/_next/static/chunks/pages/cartilhas-2dfeaaa3c36a5559.js",revision:"2dfeaaa3c36a5559"},{url:"/_next/static/chunks/pages/consultas-publicas-795b0f85ae2d7702.js",revision:"795b0f85ae2d7702"},{url:"/_next/static/chunks/pages/consultas-publicas/%5Bid%5D-5fa01acf9ba6e3fd.js",revision:"5fa01acf9ba6e3fd"},{url:"/_next/static/chunks/pages/contato-345dd270f3019776.js",revision:"345dd270f3019776"},{url:"/_next/static/chunks/pages/direitos-e-deveres-25d82d94e2eaed38.js",revision:"25d82d94e2eaed38"},{url:"/_next/static/chunks/pages/estrutura-ea39df048d6583b0.js",revision:"ea39df048d6583b0"},{url:"/_next/static/chunks/pages/faq-e3cfeb94da163c3f.js",revision:"e3cfeb94da163c3f"},{url:"/_next/static/chunks/pages/gas-c2687ec50a2c2798.js",revision:"c2687ec50a2c2798"},{url:"/_next/static/chunks/pages/index-d646239a29e1e641.js",revision:"d646239a29e1e641"},{url:"/_next/static/chunks/pages/legislacoes-cdf80728a8e48b6f.js",revision:"cdf80728a8e48b6f"},{url:"/_next/static/chunks/pages/licitacoes-6b43e86c31fefa9e.js",revision:"6b43e86c31fefa9e"},{url:"/_next/static/chunks/pages/noticias-ef413c0c9bdc479b.js",revision:"ef413c0c9bdc479b"},{url:"/_next/static/chunks/pages/noticias/%5Bslug%5D-788c89600b1fca5b.js",revision:"788c89600b1fca5b"},{url:"/_next/static/chunks/pages/organograma-580f921efa9aa5fa.js",revision:"580f921efa9aa5fa"},{url:"/_next/static/chunks/pages/ouvidoria-927ba0cc3a32bd20.js",revision:"927ba0cc3a32bd20"},{url:"/_next/static/chunks/pages/polosba-56b5b3fb27685cc0.js",revision:"56b5b3fb27685cc0"},{url:"/_next/static/chunks/pages/rodovias-dc980c73025b9e82.js",revision:"dc980c73025b9e82"},{url:"/_next/static/chunks/pages/servicos-09c8cd48fd37461f.js",revision:"09c8cd48fd37461f"},{url:"/_next/static/chunks/pages/sobre-e32a26c2c0a50436.js",revision:"e32a26c2c0a50436"},{url:"/_next/static/chunks/pages/tarifas-6204f82175fe7e90.js",revision:"6204f82175fe7e90"},{url:"/_next/static/chunks/pages/taxas-01a382c5f1f73d73.js",revision:"01a382c5f1f73d73"},{url:"/_next/static/chunks/pages/terminais-cc2759a1bfd8046f.js",revision:"cc2759a1bfd8046f"},{url:"/_next/static/chunks/pages/transportes/hidroviario-ffd48391c603a9ed.js",revision:"ffd48391c603a9ed"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-dd8919a572f3efbe.js",revision:"dd8919a572f3efbe"},{url:"/_next/static/css/b8e302d41b271438.css",revision:"b8e302d41b271438"},{url:"/_next/static/css/f907cf92e1c4253f.css",revision:"f907cf92e1c4253f"},{url:"/_next/static/media/generic-image.b2b7bca1.png",revision:"3c4589103bcc873300b615964f017032"},{url:"/_next/static/media/organograma.ed2b47e6.jpg",revision:"826b24723258370861d696477db96d92"},{url:"/_redirects",revision:"ab0a7dc006e2a0f35e66fe425df4e35a"},{url:"/background-img.jpg",revision:"67ba288975702583f059e684b1cd03bb"},{url:"/banner-carteira-estudante.png",revision:"b7d630fb11a13697b61c35b41f66f3e2"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fluxoGasNatural.png",revision:"ca63db9994423184ff9e11483a848cfe"},{url:"/icon_192.png",revision:"78558c2c4ae96a92f4de7e33963aba82"},{url:"/icon_256.png",revision:"78558c2c4ae96a92f4de7e33963aba82"},{url:"/icon_384.png",revision:"91583e4d0844139a163a1473d9a9e30a"},{url:"/icon_512.png",revision:"6afba2f38a85c1b1f3a9db2f39736f80"},{url:"/logo-white.png",revision:"e014d0af4bf2c20bf6c4eac4238ddb22"},{url:"/manifest.json",revision:"5fb778021734abb585b40819ab7e43f2"},{url:"/portal-transparencia.png",revision:"b46049b8632b16beb9148125670618b3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
