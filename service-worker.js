if(!self.define){let o,r={};const s=(s,n)=>(s=new URL(s+".js",n).href,r[s]||new Promise((r=>{if("document"in self){const o=document.createElement("script");o.src=s,o.onload=r,document.head.appendChild(o)}else o=s,importScripts(s),r()})).then((()=>{let o=r[s];if(!o)throw new Error(`Module ${s} didn’t register its module`);return o})));self.define=(n,l)=>{const i=o||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let e={};const f=o=>s(o,i),u={module:{uri:i},exports:e,require:f};r[i]=Promise.all(n.map((o=>u[o]||f(o)))).then((o=>(l(...o),e)))}}define(["./workbox-c894c9c5"],(function(o){"use strict";o.setCacheNameDetails({prefix:"growmodo_hub"}),self.skipWaiting(),o.precacheAndRoute([{url:"/404.html",revision:"c9334aaac1500d6a63daff78f9814c1c"},{url:"/css/100.036b2a79.css",revision:null},{url:"/css/207.036b2a79.css",revision:null},{url:"/css/23.bf699673.css",revision:null},{url:"/css/259.036b2a79.css",revision:null},{url:"/css/540.036b2a79.css",revision:null},{url:"/css/app.bd66e7bc.css",revision:null},{url:"/css/vendor.d1fd52d3.css",revision:null},{url:"/favicon.ico",revision:"73159d0b2ac9a6862e54ed2c55f0865b"},{url:"/favicon.png",revision:"afbcea4c2542b19d1aef51c320830344"},{url:"/favicon.svg",revision:"1544690c5da42d21be6a65633e852cfa"},{url:"/fonts/GrowmodoIconFont.96037e16.woff2",revision:null},{url:"/fonts/GrowmodoIconFont.woff",revision:"37daf0b56f32819033753f2a0edffb6f"},{url:"/fonts/TTNormsPro-Bd.214a5a71.woff2",revision:null},{url:"/fonts/TTNormsPro-Bd.852664e2.ttf",revision:null},{url:"/fonts/TTNormsPro-Bd.b29c9b63.woff",revision:null},{url:"/fonts/TTNormsPro-BdIt.28dc6f8a.ttf",revision:null},{url:"/fonts/TTNormsPro-BdIt.2d845be2.woff",revision:null},{url:"/fonts/TTNormsPro-BdIt.be03ed47.woff2",revision:null},{url:"/fonts/TTNormsPro-Blk.1a65835d.woff2",revision:null},{url:"/fonts/TTNormsPro-Blk.7debcdd7.woff",revision:null},{url:"/fonts/TTNormsPro-Blk.c11473f0.ttf",revision:null},{url:"/fonts/TTNormsPro-BlkIt.6aea96ce.woff2",revision:null},{url:"/fonts/TTNormsPro-BlkIt.bf355dc4.ttf",revision:null},{url:"/fonts/TTNormsPro-BlkIt.cdeecbb2.woff",revision:null},{url:"/fonts/TTNormsPro-DmBd.04a62689.ttf",revision:null},{url:"/fonts/TTNormsPro-DmBd.51cdef5a.woff",revision:null},{url:"/fonts/TTNormsPro-DmBd.8ddc788a.woff2",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.2a8b5aca.woff",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.47c252f5.woff2",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.70d5b73c.ttf",revision:null},{url:"/fonts/TTNormsPro-It.49e9b204.woff2",revision:null},{url:"/fonts/TTNormsPro-It.9adf04af.ttf",revision:null},{url:"/fonts/TTNormsPro-It.f469d2b2.woff",revision:null},{url:"/fonts/TTNormsPro-Lt.7ea4ca2c.woff2",revision:null},{url:"/fonts/TTNormsPro-Lt.7ff35678.ttf",revision:null},{url:"/fonts/TTNormsPro-Lt.c6759ed8.woff",revision:null},{url:"/fonts/TTNormsPro-LtIt.420c2afe.woff2",revision:null},{url:"/fonts/TTNormsPro-LtIt.dbbe19c0.woff",revision:null},{url:"/fonts/TTNormsPro-LtIt.f5f11219.ttf",revision:null},{url:"/fonts/TTNormsPro-Md.0b917aba.woff",revision:null},{url:"/fonts/TTNormsPro-Md.45f12098.ttf",revision:null},{url:"/fonts/TTNormsPro-Md.928754ec.woff2",revision:null},{url:"/fonts/TTNormsPro-MdIt.61c89497.woff",revision:null},{url:"/fonts/TTNormsPro-MdIt.77e54bd3.ttf",revision:null},{url:"/fonts/TTNormsPro-MdIt.bfff8bd8.woff2",revision:null},{url:"/fonts/TTNormsPro-Normal.3543b2df.woff2",revision:null},{url:"/fonts/TTNormsPro-Normal.94d783ea.ttf",revision:null},{url:"/fonts/TTNormsPro-Normal.ecb3641f.woff",revision:null},{url:"/fonts/TTNormsPro-NormalIt.0cc1c271.woff2",revision:null},{url:"/fonts/TTNormsPro-NormalIt.8b4ad67f.woff",revision:null},{url:"/fonts/TTNormsPro-NormalIt.a4705084.ttf",revision:null},{url:"/fonts/TTNormsPro-Rg.35963ea5.woff2",revision:null},{url:"/fonts/TTNormsPro-Rg.9aad210d.ttf",revision:null},{url:"/fonts/TTNormsPro-Rg.a0df4ca4.woff",revision:null},{url:"/fonts/TTNormsPro-Th.140185fe.woff",revision:null},{url:"/fonts/TTNormsPro-Th.5834aebc.woff2",revision:null},{url:"/fonts/TTNormsPro-Th.a0894dc9.ttf",revision:null},{url:"/fonts/TTNormsPro-ThIt.1ca83821.woff",revision:null},{url:"/fonts/TTNormsPro-ThIt.1ff06940.woff2",revision:null},{url:"/fonts/TTNormsPro-ThIt.55e95df6.ttf",revision:null},{url:"/fonts/TTNormsPro-XBd.1cd7b04a.woff",revision:null},{url:"/fonts/TTNormsPro-XBd.56cea59a.woff2",revision:null},{url:"/fonts/TTNormsPro-XBd.577a95f8.ttf",revision:null},{url:"/fonts/TTNormsPro-XBdIt.9e06d42b.woff",revision:null},{url:"/fonts/TTNormsPro-XBdIt.a1af1ba1.woff2",revision:null},{url:"/fonts/TTNormsPro-XBdIt.ab9c3e31.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlk.29adc471.woff",revision:null},{url:"/fonts/TTNormsPro-XBlk.49fc692d.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlk.f2c54f92.woff2",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.44f2ffcf.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.5a6c3c25.woff",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.fabde7e3.woff2",revision:null},{url:"/fonts/TTNormsPro-XLt.8678dd75.woff",revision:null},{url:"/fonts/TTNormsPro-XLt.9554226a.woff2",revision:null},{url:"/fonts/TTNormsPro-XLt.a48c9787.ttf",revision:null},{url:"/fonts/TTNormsPro-XLtIt.23aea183.ttf",revision:null},{url:"/fonts/TTNormsPro-XLtIt.a2a067f6.woff",revision:null},{url:"/fonts/TTNormsPro-XLtIt.b86c4ce8.woff2",revision:null},{url:"/fonts/index.html",revision:"fec83ef88bb311b12681c3aba1774714"},{url:"/fonts/style.css",revision:"044358da71a99b4ece112272d4be5532"},{url:"/icons/apple-icon-120x120.png",revision:"07b9e6ddf55e90129777f18a143711ff"},{url:"/icons/apple-icon-152x152.png",revision:"452da2b83a048a7d64716dc5148411fd"},{url:"/icons/apple-icon-167x167.png",revision:"109e0448b3496fdfb4cd004bf574137a"},{url:"/icons/apple-icon-180x180.png",revision:"c3d4066c8c57e19e3a6e809432e578a9"},{url:"/icons/apple-launch-1125x2436.png",revision:"83db9e195ead808587cacb22aa916b91"},{url:"/icons/apple-launch-1170x2532.png",revision:"5d653675c01dd8d4f4ac1e9f840ba14f"},{url:"/icons/apple-launch-1242x2208.png",revision:"6f472cf28d09a217481c38fb40b354b1"},{url:"/icons/apple-launch-1242x2688.png",revision:"89b0034c08e9a04dc43659908f220b93"},{url:"/icons/apple-launch-1284x2778.png",revision:"d6914e500b64734d8049e00c43fedba4"},{url:"/icons/apple-launch-1536x2048.png",revision:"399295d0e6c9e096a370e58c0c00f1a4"},{url:"/icons/apple-launch-1620x2160.png",revision:"93bf37ba626110fa940302b51a03657b"},{url:"/icons/apple-launch-1668x2224.png",revision:"75c63dc7eed6f1e7a6354f73ae65d997"},{url:"/icons/apple-launch-1668x2388.png",revision:"ef4cf5c4e12154ed6ebc605eaff52114"},{url:"/icons/apple-launch-2048x2732.png",revision:"682d39094bd0c2614f2bac0d43da9059"},{url:"/icons/apple-launch-750x1334.png",revision:"1cf58451dc53d1ad88be3bf4bb5f549c"},{url:"/icons/apple-launch-828x1792.png",revision:"7435f048f2854747a32c96ad9a20e0e7"},{url:"/icons/components/step-active.svg",revision:"7ab680e8b7449c9e73d138c6949a87d0"},{url:"/icons/components/step-done.svg",revision:"ba65fd7fb82cb6f2d997a75c345c325c"},{url:"/icons/components/step-inactive.svg",revision:"be26d9c41df0a0a4269ac2ad888e290f"},{url:"/icons/favicon-128x128.png",revision:"6eda8464e88a7afa641524f03381ffd0"},{url:"/icons/favicon-16x16.png",revision:"48cce1f63bf46991d6b1b0c9ac984a99"},{url:"/icons/favicon-32x32.png",revision:"1d6bf124c8c52d94412a77e8c5a608ce"},{url:"/icons/favicon-96x96.png",revision:"c6c0cd6a623f02f786e32dd5685c08e0"},{url:"/icons/icon-128x128.png",revision:"6eda8464e88a7afa641524f03381ffd0"},{url:"/icons/icon-192x192.png",revision:"fcc4a75a6242134037ab2651e52c40d4"},{url:"/icons/icon-256x256.png",revision:"2a9286f98444ab549530a3525a730305"},{url:"/icons/icon-384x384.png",revision:"e8956d9ef84c8e2eb9ba16f3799909e0"},{url:"/icons/icon-512x512.png",revision:"e18e58c9486767d2aff9430919e01e7b"},{url:"/icons/ms-icon-144x144.png",revision:"7b134405b85c0f2d2fc81bac3f6d1f5a"},{url:"/icons/safari-pinned-tab.svg",revision:"944905293248a50579437ad4ad8e605f"},{url:"/images/ScreenMockup-1280x800.jpg",revision:"e7039e24406c99cc97ab2dfbbd36b6bc"},{url:"/images/ScreenMockup-750x1334.jpg",revision:"64186129d8210d556de37216e59fca55"},{url:"/images/ScreenMockup.png",revision:"864154f0d8b5a3fea4feb4d325ce62b5"},{url:"/images/assets/TShirts.png",revision:"8521bdf6bd4619e228bb9a12f381e484"},{url:"/index.html",revision:"1c1fc3d514437cee3e591ee6f363dd8c"},{url:"/js/100.6f118073.js",revision:null},{url:"/js/141.d351ad59.js",revision:null},{url:"/js/207.a9210f75.js",revision:null},{url:"/js/208.574ac9ea.js",revision:null},{url:"/js/214.d28c0448.js",revision:null},{url:"/js/23.091ff72a.js",revision:null},{url:"/js/259.a145a493.js",revision:null},{url:"/js/287.45103895.js",revision:null},{url:"/js/321.210571c0.js",revision:null},{url:"/js/326.0575cb92.js",revision:null},{url:"/js/363.08451009.js",revision:null},{url:"/js/404.5889cf3e.js",revision:null},{url:"/js/405.6ec6b2f9.js",revision:null},{url:"/js/42.010256d4.js",revision:null},{url:"/js/422.ab65ab44.js",revision:null},{url:"/js/423.50fa7170.js",revision:null},{url:"/js/474.f0d398c0.js",revision:null},{url:"/js/507.89a79670.js",revision:null},{url:"/js/539.33f4b114.js",revision:null},{url:"/js/540.36b920e7.js",revision:null},{url:"/js/543.886da393.js",revision:null},{url:"/js/563.9951f409.js",revision:null},{url:"/js/582.185918da.js",revision:null},{url:"/js/591.56f49949.js",revision:null},{url:"/js/614.18c3e9d9.js",revision:null},{url:"/js/620.d0ab4b4c.js",revision:null},{url:"/js/650.b0d7e4fa.js",revision:null},{url:"/js/663.aec58bcb.js",revision:null},{url:"/js/713.827c1faa.js",revision:null},{url:"/js/737.aeba13f8.js",revision:null},{url:"/js/774.1705cfb7.js",revision:null},{url:"/js/775.7e19b7e8.js",revision:null},{url:"/js/815.69b1787c.js",revision:null},{url:"/js/869.c405d68d.js",revision:null},{url:"/js/89.987b1f8d.js",revision:null},{url:"/js/895.a3f6ff1f.js",revision:null},{url:"/js/932.a906507a.js",revision:null},{url:"/js/935.83807e4c.js",revision:null},{url:"/js/966.58e255b1.js",revision:null},{url:"/js/990.2fa22e0f.js",revision:null},{url:"/js/app.bed9f876.js",revision:null},{url:"/js/chunk-common.50863e9e.js",revision:null},{url:"/js/unsupported-spa-handler.js",revision:"ca204a80a91b2bb9ef30fb4144b3a205"},{url:"/js/vendor.302aa656.js",revision:null},{url:"/logo/GrowmodoIcon-Black.svg",revision:"b125f4d5dd216e484e6404d3312d64fe"},{url:"/logo/GrowmodoIcon-Colored-Dark.svg",revision:"e60b340b44a5dcff0897008e23df66b8"},{url:"/logo/GrowmodoIcon-Colored-Light.svg",revision:"80eebbbac01afeacc5a606eb6c6d97e2"},{url:"/logo/GrowmodoIcon-Colored.svg",revision:"80eebbbac01afeacc5a606eb6c6d97e2"},{url:"/logo/GrowmodoIcon-White.svg",revision:"c122502b52ab2c5a9252b47bf367e51d"},{url:"/logo/GrowmodoTextIcon-Black.svg",revision:"25d009101070384a49c70c74da47e032"},{url:"/logo/GrowmodoTextIcon-White.svg",revision:"c99de3a5ca5eea4f914348ceede1af73"},{url:"/manifest.json",revision:"29dd6707e6a898d1f11ec74da08648f8"},{url:"/robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"}],{}),o.registerRoute(new o.NavigationRoute(o.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),o.registerRoute(/^https:\/\/cdn.growmodo.(?:com|dev)\/public\/(?:icons|images|gif)\/(.*)/,new o.StaleWhileRevalidate({cacheName:"growmodo_hub-cdn",plugins:[new o.ExpirationPlugin({maxEntries:500})]}),"GET"),o.registerRoute(/^https:\/\/api.growmodo.dev\/api\/file\/([0-9]*)\/view?token=(.*)/,new o.StaleWhileRevalidate({cacheName:"growmodo_hub-file_view",plugins:[new o.ExpirationPlugin({maxEntries:500})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
