if(!self.define){let o,r={};const s=(s,n)=>(s=new URL(s+".js",n).href,r[s]||new Promise((r=>{if("document"in self){const o=document.createElement("script");o.src=s,o.onload=r,document.head.appendChild(o)}else o=s,importScripts(s),r()})).then((()=>{let o=r[s];if(!o)throw new Error(`Module ${s} didn’t register its module`);return o})));self.define=(n,l)=>{const i=o||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let e={};const f=o=>s(o,i),u={module:{uri:i},exports:e,require:f};r[i]=Promise.all(n.map((o=>u[o]||f(o)))).then((o=>(l(...o),e)))}}define(["./workbox-d64c7665"],(function(o){"use strict";o.setCacheNameDetails({prefix:"growmodo_hub"}),self.skipWaiting(),o.precacheAndRoute([{url:"/404.html",revision:"c9334aaac1500d6a63daff78f9814c1c"},{url:"/css/175.28c14466.css",revision:null},{url:"/css/232.82f758d6.css",revision:null},{url:"/css/262.82f758d6.css",revision:null},{url:"/css/59.82f758d6.css",revision:null},{url:"/css/618.82f758d6.css",revision:null},{url:"/css/785.82f758d6.css",revision:null},{url:"/css/app.f7ea7466.css",revision:null},{url:"/css/vendor.cfe40ac1.css",revision:null},{url:"/favicon.ico",revision:"73159d0b2ac9a6862e54ed2c55f0865b"},{url:"/favicon.png",revision:"afbcea4c2542b19d1aef51c320830344"},{url:"/favicon.svg",revision:"1544690c5da42d21be6a65633e852cfa"},{url:"/fonts/GrowmodoIconFont.dd289253.woff2",revision:null},{url:"/fonts/GrowmodoIconFont.woff",revision:"02b8ca27fcb7b412e6ab59eacd8d5dd6"},{url:"/fonts/TTNormsPro-Bd.214a5a71.woff2",revision:null},{url:"/fonts/TTNormsPro-Bd.852664e2.ttf",revision:null},{url:"/fonts/TTNormsPro-Bd.b29c9b63.woff",revision:null},{url:"/fonts/TTNormsPro-BdIt.28dc6f8a.ttf",revision:null},{url:"/fonts/TTNormsPro-BdIt.2d845be2.woff",revision:null},{url:"/fonts/TTNormsPro-BdIt.be03ed47.woff2",revision:null},{url:"/fonts/TTNormsPro-Blk.1a65835d.woff2",revision:null},{url:"/fonts/TTNormsPro-Blk.7debcdd7.woff",revision:null},{url:"/fonts/TTNormsPro-Blk.c11473f0.ttf",revision:null},{url:"/fonts/TTNormsPro-BlkIt.6aea96ce.woff2",revision:null},{url:"/fonts/TTNormsPro-BlkIt.bf355dc4.ttf",revision:null},{url:"/fonts/TTNormsPro-BlkIt.cdeecbb2.woff",revision:null},{url:"/fonts/TTNormsPro-DmBd.04a62689.ttf",revision:null},{url:"/fonts/TTNormsPro-DmBd.51cdef5a.woff",revision:null},{url:"/fonts/TTNormsPro-DmBd.8ddc788a.woff2",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.2a8b5aca.woff",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.47c252f5.woff2",revision:null},{url:"/fonts/TTNormsPro-DmBdIt.70d5b73c.ttf",revision:null},{url:"/fonts/TTNormsPro-It.49e9b204.woff2",revision:null},{url:"/fonts/TTNormsPro-It.9adf04af.ttf",revision:null},{url:"/fonts/TTNormsPro-It.f469d2b2.woff",revision:null},{url:"/fonts/TTNormsPro-Lt.7ea4ca2c.woff2",revision:null},{url:"/fonts/TTNormsPro-Lt.7ff35678.ttf",revision:null},{url:"/fonts/TTNormsPro-Lt.c6759ed8.woff",revision:null},{url:"/fonts/TTNormsPro-LtIt.420c2afe.woff2",revision:null},{url:"/fonts/TTNormsPro-LtIt.dbbe19c0.woff",revision:null},{url:"/fonts/TTNormsPro-LtIt.f5f11219.ttf",revision:null},{url:"/fonts/TTNormsPro-Md.0b917aba.woff",revision:null},{url:"/fonts/TTNormsPro-Md.45f12098.ttf",revision:null},{url:"/fonts/TTNormsPro-Md.928754ec.woff2",revision:null},{url:"/fonts/TTNormsPro-MdIt.61c89497.woff",revision:null},{url:"/fonts/TTNormsPro-MdIt.77e54bd3.ttf",revision:null},{url:"/fonts/TTNormsPro-MdIt.bfff8bd8.woff2",revision:null},{url:"/fonts/TTNormsPro-Normal.3543b2df.woff2",revision:null},{url:"/fonts/TTNormsPro-Normal.94d783ea.ttf",revision:null},{url:"/fonts/TTNormsPro-Normal.ecb3641f.woff",revision:null},{url:"/fonts/TTNormsPro-NormalIt.0cc1c271.woff2",revision:null},{url:"/fonts/TTNormsPro-NormalIt.8b4ad67f.woff",revision:null},{url:"/fonts/TTNormsPro-NormalIt.a4705084.ttf",revision:null},{url:"/fonts/TTNormsPro-Rg.35963ea5.woff2",revision:null},{url:"/fonts/TTNormsPro-Rg.9aad210d.ttf",revision:null},{url:"/fonts/TTNormsPro-Rg.a0df4ca4.woff",revision:null},{url:"/fonts/TTNormsPro-Th.140185fe.woff",revision:null},{url:"/fonts/TTNormsPro-Th.5834aebc.woff2",revision:null},{url:"/fonts/TTNormsPro-Th.a0894dc9.ttf",revision:null},{url:"/fonts/TTNormsPro-ThIt.1ca83821.woff",revision:null},{url:"/fonts/TTNormsPro-ThIt.1ff06940.woff2",revision:null},{url:"/fonts/TTNormsPro-ThIt.55e95df6.ttf",revision:null},{url:"/fonts/TTNormsPro-XBd.1cd7b04a.woff",revision:null},{url:"/fonts/TTNormsPro-XBd.56cea59a.woff2",revision:null},{url:"/fonts/TTNormsPro-XBd.577a95f8.ttf",revision:null},{url:"/fonts/TTNormsPro-XBdIt.9e06d42b.woff",revision:null},{url:"/fonts/TTNormsPro-XBdIt.a1af1ba1.woff2",revision:null},{url:"/fonts/TTNormsPro-XBdIt.ab9c3e31.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlk.29adc471.woff",revision:null},{url:"/fonts/TTNormsPro-XBlk.49fc692d.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlk.f2c54f92.woff2",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.44f2ffcf.ttf",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.5a6c3c25.woff",revision:null},{url:"/fonts/TTNormsPro-XBlkIt.fabde7e3.woff2",revision:null},{url:"/fonts/TTNormsPro-XLt.8678dd75.woff",revision:null},{url:"/fonts/TTNormsPro-XLt.9554226a.woff2",revision:null},{url:"/fonts/TTNormsPro-XLt.a48c9787.ttf",revision:null},{url:"/fonts/TTNormsPro-XLtIt.23aea183.ttf",revision:null},{url:"/fonts/TTNormsPro-XLtIt.a2a067f6.woff",revision:null},{url:"/fonts/TTNormsPro-XLtIt.b86c4ce8.woff2",revision:null},{url:"/fonts/index.html",revision:"89f29c30507747c7ac670ef786392228"},{url:"/fonts/style.css",revision:"ca8769f5d6f0876758a9067f9bbfd4fa"},{url:"/icons/apple-icon-120x120.png",revision:"07b9e6ddf55e90129777f18a143711ff"},{url:"/icons/apple-icon-152x152.png",revision:"452da2b83a048a7d64716dc5148411fd"},{url:"/icons/apple-icon-167x167.png",revision:"109e0448b3496fdfb4cd004bf574137a"},{url:"/icons/apple-icon-180x180.png",revision:"c3d4066c8c57e19e3a6e809432e578a9"},{url:"/icons/apple-launch-1125x2436.png",revision:"83db9e195ead808587cacb22aa916b91"},{url:"/icons/apple-launch-1170x2532.png",revision:"5d653675c01dd8d4f4ac1e9f840ba14f"},{url:"/icons/apple-launch-1242x2208.png",revision:"6f472cf28d09a217481c38fb40b354b1"},{url:"/icons/apple-launch-1242x2688.png",revision:"89b0034c08e9a04dc43659908f220b93"},{url:"/icons/apple-launch-1284x2778.png",revision:"d6914e500b64734d8049e00c43fedba4"},{url:"/icons/apple-launch-1536x2048.png",revision:"399295d0e6c9e096a370e58c0c00f1a4"},{url:"/icons/apple-launch-1620x2160.png",revision:"93bf37ba626110fa940302b51a03657b"},{url:"/icons/apple-launch-1668x2224.png",revision:"75c63dc7eed6f1e7a6354f73ae65d997"},{url:"/icons/apple-launch-1668x2388.png",revision:"ef4cf5c4e12154ed6ebc605eaff52114"},{url:"/icons/apple-launch-2048x2732.png",revision:"682d39094bd0c2614f2bac0d43da9059"},{url:"/icons/apple-launch-750x1334.png",revision:"1cf58451dc53d1ad88be3bf4bb5f549c"},{url:"/icons/apple-launch-828x1792.png",revision:"7435f048f2854747a32c96ad9a20e0e7"},{url:"/icons/components/step-active.svg",revision:"7ab680e8b7449c9e73d138c6949a87d0"},{url:"/icons/components/step-done.svg",revision:"ba65fd7fb82cb6f2d997a75c345c325c"},{url:"/icons/components/step-inactive.svg",revision:"be26d9c41df0a0a4269ac2ad888e290f"},{url:"/icons/favicon-128x128.png",revision:"6eda8464e88a7afa641524f03381ffd0"},{url:"/icons/favicon-16x16.png",revision:"48cce1f63bf46991d6b1b0c9ac984a99"},{url:"/icons/favicon-32x32.png",revision:"1d6bf124c8c52d94412a77e8c5a608ce"},{url:"/icons/favicon-96x96.png",revision:"c6c0cd6a623f02f786e32dd5685c08e0"},{url:"/icons/icon-128x128.png",revision:"6eda8464e88a7afa641524f03381ffd0"},{url:"/icons/icon-192x192.png",revision:"fcc4a75a6242134037ab2651e52c40d4"},{url:"/icons/icon-256x256.png",revision:"2a9286f98444ab549530a3525a730305"},{url:"/icons/icon-384x384.png",revision:"e8956d9ef84c8e2eb9ba16f3799909e0"},{url:"/icons/icon-512x512.png",revision:"e18e58c9486767d2aff9430919e01e7b"},{url:"/icons/ms-icon-144x144.png",revision:"7b134405b85c0f2d2fc81bac3f6d1f5a"},{url:"/icons/safari-pinned-tab.svg",revision:"944905293248a50579437ad4ad8e605f"},{url:"/images/ScreenMockup-1280x800.jpg",revision:"e7039e24406c99cc97ab2dfbbd36b6bc"},{url:"/images/ScreenMockup-750x1334.jpg",revision:"64186129d8210d556de37216e59fca55"},{url:"/images/ScreenMockup.png",revision:"864154f0d8b5a3fea4feb4d325ce62b5"},{url:"/images/assets/TShirts.png",revision:"8521bdf6bd4619e228bb9a12f381e484"},{url:"/index.html",revision:"bc0aa02ae32367821f8d730de00709dd"},{url:"/js/144.b227344c.js",revision:null},{url:"/js/175.69f16547.js",revision:null},{url:"/js/262.f9e109c5.js",revision:null},{url:"/js/378.f29c4238.js",revision:null},{url:"/js/386.f0ae4ec2.js",revision:null},{url:"/js/397.13d28c30.js",revision:null},{url:"/js/404.edc765be.js",revision:null},{url:"/js/405.1f53fc09.js",revision:null},{url:"/js/409.c2542a5d.js",revision:null},{url:"/js/422.28a0ceb4.js",revision:null},{url:"/js/48.fe357986.js",revision:null},{url:"/js/480.7c3ce231.js",revision:null},{url:"/js/493.0b2cea49.js",revision:null},{url:"/js/507.4142185f.js",revision:null},{url:"/js/546.e6f3d455.js",revision:null},{url:"/js/563.f7b160fe.js",revision:null},{url:"/js/59.8ac4b71b.js",revision:null},{url:"/js/594.e565e9fc.js",revision:null},{url:"/js/597.85b3d961.js",revision:null},{url:"/js/620.83a173fa.js",revision:null},{url:"/js/685.ec5541c8.js",revision:null},{url:"/js/713.63f547f5.js",revision:null},{url:"/js/72.30af6a5d.js",revision:null},{url:"/js/723.7bfae9cd.js",revision:null},{url:"/js/737.b8810320.js",revision:null},{url:"/js/775.fc0b618f.js",revision:null},{url:"/js/785.b8b2a0b9.js",revision:null},{url:"/js/787.7d332418.js",revision:null},{url:"/js/79.5eb47fa5.js",revision:null},{url:"/js/872.628882c6.js",revision:null},{url:"/js/884.5d00ff5b.js",revision:null},{url:"/js/885.4771863b.js",revision:null},{url:"/js/95.adcb335f.js",revision:null},{url:"/js/966.d3f206d9.js",revision:null},{url:"/js/app.b729d29b.js",revision:null},{url:"/js/chunk-common.799a6e11.js",revision:null},{url:"/js/unsupported-spa-handler.js",revision:"ca204a80a91b2bb9ef30fb4144b3a205"},{url:"/js/vendor.d79e5640.js",revision:null},{url:"/logo/GrowmodoIcon-Black.svg",revision:"b125f4d5dd216e484e6404d3312d64fe"},{url:"/logo/GrowmodoIcon-Colored-Dark.svg",revision:"e60b340b44a5dcff0897008e23df66b8"},{url:"/logo/GrowmodoIcon-Colored-Light.svg",revision:"80eebbbac01afeacc5a606eb6c6d97e2"},{url:"/logo/GrowmodoIcon-Colored.svg",revision:"80eebbbac01afeacc5a606eb6c6d97e2"},{url:"/logo/GrowmodoIcon-White.svg",revision:"c122502b52ab2c5a9252b47bf367e51d"},{url:"/logo/GrowmodoTextIcon-Black.svg",revision:"25d009101070384a49c70c74da47e032"},{url:"/logo/GrowmodoTextIcon-White.svg",revision:"c99de3a5ca5eea4f914348ceede1af73"},{url:"/manifest.json",revision:"29dd6707e6a898d1f11ec74da08648f8"},{url:"/robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"}],{}),o.cleanupOutdatedCaches(),o.registerRoute(new o.NavigationRoute(o.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),o.registerRoute(/^https:\/\/cdn.growmodo.(?:com|dev)\/public\/(?:icons|images|gif)\/(.*)/,new o.StaleWhileRevalidate({cacheName:"growmodo_hub-cdn",plugins:[new o.ExpirationPlugin({maxEntries:500})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
