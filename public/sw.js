if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let n={};const f=s=>a(s,t),r={module:{uri:t},exports:n,require:f};e[t]=Promise.all(c.map((s=>r[s]||f(s)))).then((s=>(i(...s),n)))}}define(["./workbox-588899ac"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dd4312588ef4d18a47cc008f8a2529b4"},{url:"/_next/static/chunks/1073-0d5de2149fef9932.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/1142-61a77716cf6f1a13.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/1198-2beb47eef12ffbde.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/1315-40b9cb86bf8dd07d.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/1416-75be801ac2ee47f5.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/2264-310fb56232b4a3f8.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/2318-16d3c10033bdbf22.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/2494-cf9cb0518c44dca5.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/3446-d8dc2866fc85a8a2.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/4314-8f70cffe8d72dd72.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/596-6f881e0eb579afe4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/6598-db5fc3f2e5ac765f.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/6685-e97e0563a2d68fd9.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/6945-0ef6e5ef47f5d36c.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/7014-81517c7d05dce06c.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/7410-55f9e0f1379f3521.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/7837-9631e9192f5613d3.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/8622-838f761261e7696a.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/8846-dde1b5f47f2415e3.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/9182-0e25784b039f2490.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/9264-efe1316ad06ab8ac.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/9777-65e4ea4dcd3f324b.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/9941-d03f4193612cb49a.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/app/layout-c9a837e3bb333a43.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/app/pesquisas-resultados/page-dbc59cacb115fbb5.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/fd9d1056-4359ca0ad29385fe.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/framework-031a103bc3b91ba7.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/main-8e242785e3236ffe.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/main-app-1d318b53feb1bb75.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/_app-6dbca6a0526787d4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/_error-3204f16f4dfccbfb.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/atas-de-julgamento-b7a71945b38f98dc.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/atas-do-colegiado-bff0339bc69d71c4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/audiencias-publicas-fdead7b3273e5ce6.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/audiencias-publicas/%5Bid%5D-b8462008e403d9c4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/beneficios-2ed0d0d59c36a2c0.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/cadastros-beefdacaeadedbe3.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/cartilhas-e1037cd1d2eb358f.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/consultas-publicas-053078c6377a1aba.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/consultas-publicas/%5Bid%5D-1faa16a65cc4b5ba.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/contato-c8fe3d8eee8af883.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/direitos-e-deveres-477d89a7e64fdeb4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/estrutura-eec3c5a01863d0ad.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/faq-3e338f8175de4d3d.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/gas-5a1531a3ef3190d4.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/index-15daa1caad16118e.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/legislacoes-197e60201a014fde.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/licitacoes-5c4927cf68cec28c.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/noticias-4028e0e3e68e7c5a.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/noticias/%5Bslug%5D-8ab3d1a27eab3285.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/organograma-f46255d579cf594f.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/ouvidoria-57bacd9f0924d85e.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/polosba-55d5b3a736164815.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/rodovias-9a566ae75cd7dfd2.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/servicos-feafdc7c84ee5461.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/sobre-71f746280c2548da.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/tarifas-2ce6f36e21f66311.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/taxas-b8bbe7ff24685330.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/terminais-55e542c00187a90a.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/pages/transportes/hidroviario-c1659460ab7101bd.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-3977d8fa25152e24.js",revision:"jax192DIs_OcpRs5sFRDx"},{url:"/_next/static/css/0185b0a1e14d3f8c.css",revision:"0185b0a1e14d3f8c"},{url:"/_next/static/css/07156fdf58d582c8.css",revision:"07156fdf58d582c8"},{url:"/_next/static/css/b8e302d41b271438.css",revision:"b8e302d41b271438"},{url:"/_next/static/jax192DIs_OcpRs5sFRDx/_buildManifest.js",revision:"6356b34711f51fe41de702fda77691b4"},{url:"/_next/static/jax192DIs_OcpRs5sFRDx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/02205c9944024f15-s.p.woff2",revision:"4cf1e387b8e1c64a73ef01c8d1e14681"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3511fdf6750b518d-s.woff2",revision:"e85775fd86060618bd4125d14654c36e"},{url:"/_next/static/media/37b0c0a51409261e-s.woff2",revision:"5ce748f413aee42a8d4723df0d18830b"},{url:"/_next/static/media/3d8af05b1dbb5df8-s.woff2",revision:"94a5fb88423f24f3981739bfbf345680"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/46c894be853ec49f-s.woff2",revision:"47891b6adb3a947dd3c594bd5196850e"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/506bd11311670951-s.woff2",revision:"7976a92314c8770252603e7813da9f67"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/80a2a8cc25a3c264-s.woff2",revision:"2d3d8a78ef164ab6c1c62a3e57c2727b"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8db47a8bf03b7d2f-s.p.woff2",revision:"49003e0ff09f1efb8323cf35b836ba8f"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/94300924a0693016-s.woff2",revision:"105927314bd3f089b99c0dda456171ed"},{url:"/_next/static/media/9e48537b1b020091-s.woff2",revision:"4b52fd954ca934c204d73ddbc640e5d4"},{url:"/_next/static/media/a50efca067c45ff7-s.woff2",revision:"0ea6e3886fc7639170a8e69463f4113e"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/af961b7eb9a15f7e-s.woff2",revision:"2bbd1a9c77461a3bfbff4c9b3a43a89e"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/c0058a8df935bb33-s.woff2",revision:"815d6a78ad78085bd8593051c2631f4a"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/dbe242b5c3b9d8cb-s.woff2",revision:"29445a64b7a514e94024e97416f26ecd"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/generic-image.b2b7bca1.png",revision:"3c4589103bcc873300b615964f017032"},{url:"/_next/static/media/organograma.ed2b47e6.jpg",revision:"826b24723258370861d696477db96d92"},{url:"/_redirects",revision:"ab0a7dc006e2a0f35e66fe425df4e35a"},{url:"/background-img.jpg",revision:"67ba288975702583f059e684b1cd03bb"},{url:"/banner-carteira-estudante.png",revision:"b7d630fb11a13697b61c35b41f66f3e2"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fluxoGasNatural.png",revision:"ca63db9994423184ff9e11483a848cfe"},{url:"/icon_192.png",revision:"78558c2c4ae96a92f4de7e33963aba82"},{url:"/icon_256.png",revision:"78558c2c4ae96a92f4de7e33963aba82"},{url:"/icon_384.png",revision:"91583e4d0844139a163a1473d9a9e30a"},{url:"/icon_512.png",revision:"6afba2f38a85c1b1f3a9db2f39736f80"},{url:"/logo-white.png",revision:"e014d0af4bf2c20bf6c4eac4238ddb22"},{url:"/manifest.json",revision:"5fb778021734abb585b40819ab7e43f2"},{url:"/portal-transparencia.png",revision:"b46049b8632b16beb9148125670618b3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:c})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
