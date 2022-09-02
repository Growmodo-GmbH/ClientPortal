"use strict";(globalThis["webpackChunkgrowmodo_hub"]=globalThis["webpackChunkgrowmodo_hub"]||[]).push([[89],{4255:(e,t,o)=>{o.d(t,{Z:()=>x});var i=o(9835),s=o(6970);const n={key:1};function a(e,t,o,a,l,r){const c=(0,i.up)("q-icon"),d=((0,i.up)("q-spinner-pie"),(0,i.up)("q-item-section")),u=(0,i.up)("q-item"),p=(0,i.up)("q-item-label"),m=(0,i.up)("q-separator"),g=(0,i.up)("q-avatar"),h=(0,i.up)("q-btn"),b=(0,i.up)("q-select");return(0,i.wg)(),(0,i.j4)(b,{ref:"search",outlined:"","use-input":"","hide-selected":"","options-dense":"","hide-bottom-space":"","hide-dropdown-icon":"","menu-offset":[0,0],color:"primary","bg-color":"white","stack-label":!1,modelValue:e.requestQuery,"onUpdate:modelValue":t[1]||(t[1]=t=>e.requestQuery=t),class:"select-request","popup-content-class":"bg-white rounded-bottom shadow-1","options-selected-class":"bg-accent","input-class":"text-body1 font-medium letter-space-normal text-primary",placeholder:e.placeholder,options:e.filteredOptions,onFilter:e.filter,"transition-show":"jump-up","transition-hide":"jump-down"},(0,i.Nv)({option:(0,i.w5)((e=>[e.opt.title?((0,i.wg)(),(0,i.j4)(u,{key:e.itemProps.id+"_title",to:e.opt.url,onClick:e.opt.action,class:"q-pt-md",style:{"min-height":"unset"}},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"text-body2 font-medium color-primary2"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])):e.opt.showmore?((0,i.wg)(),(0,i.iD)("div",n,[((0,i.wg)(),(0,i.j4)(u,{clickable:"",key:e.itemProps.id+"_more",to:e.opt.url,onClick:e.opt.action,class:"q-mb-md bg-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"text-dody2 font-medium text-secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])),(0,i.Wm)(m)])):((0,i.wg)(),(0,i.j4)(u,(0,i.dG)({key:2,clickable:"",to:e.opt.url,onClick:e.opt.action},e.itemProps,{class:["q-my-xs hover-bg-accent hover-text-secondary text-body2 font-medium",e.selected?"bg-accent text-secondary":"bg-white text-primary"],key:e.itemProps.id}),{default:(0,i.w5)((()=>[(0,i.Wm)(d,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{rounded:"",class:"bg-accent hover-bg-accent auto-hw"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{size:"sm",name:e.opt.icon||"icon-browser",color:"secondary",class:"q-pa-sm hover-text-secondary hover-bg-accent"},null,8,["name"])])),_:2},1024)])),_:2},1024),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024),e.opt.type?((0,i.wg)(),(0,i.j4)(d,{key:0,side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{outline:"",dense:"","no-caps":"","text-color":"secondary",size:"12px",class:"bg-grey-1 q-px-sm hover-text-secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.opt.type)+" ",1),(0,i.Wm)(c,{size:"14px",name:"icon-corner-down-right",class:"color-primary2 q-ml-xs"})])),_:2},1024)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1040,["to","onClick","class"]))])),_:2},[e.show_button?void 0:{name:"prepend",fn:(0,i.w5)((()=>[(0,i.Wm)(c,{name:"icon-search-lg",size:"sm",class:"color-primary2"})]))},void 0,e.show_button?{name:"after",fn:(0,i.w5)((()=>[(0,i.Wm)(g,{rounded:"",size:"75px",class:"cursor-pointer rounded text-white bg-primary q-pa-sm",style:{height:"auto",width:"auto"},onClick:t[0]||(t[0]=t=>e.$root.toggleRequest())},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{name:e.leftIcon,size:"sm",class:"q-pa-sm",color:"white"},null,8,["name"])])),_:1})]))}:void 0]),1032,["modelValue","placeholder","options","onFilter"])}o(702),o(6727);var l=o(499),r=o(3100);const c=(0,i.aZ)({name:"SearchDropdown",props:{show_button:{type:Boolean,default:!1},placeholder:{type:String,default:"Search..."},requestOptions:{type:Array,default:()=>[]},leftIcon:{type:String,default:"icon-plus"}},setup(){const e=(0,l.iH)(""),t=(0,l.iH)(null),o=(0,l.iH)([]),i=(0,l.iH)(null);return{search:i,options:t,requestQuery:e,filteredOptions:o}},computed:{...(0,r.rn)("growmodo",["tasks","projects"])},data(){return{requestOptions_Internal:[],requestOptions_Internal_All:[]}},async beforeMount(){await this.updateSearch_Source()},methods:{updateSearch_Source(){if(null!==this.requestOptions){if(this.requestOptions&&this.requestOptions.length)this.requestOptions_Internal=this.requestOptions,this.requestOptions_Internal_All=this.requestOptions;else{let e=this.insertCategory("Tasks",this.tasks,{action:()=>this.$root.toggleRequest("task")}),t=this.insertCategory("Projects",this.projects,{action:()=>this.$root.toggleRequest("project")});this.requestOptions_Internal=[...e,...t],this.requestOptions_Internal_All=[...this.tasks,...this.projects]}return this.requestOptions_Internal}},insertCategory(e,t=[],o={label:"Show more",action:()=>{}}){return e&&t&&t.length?[{label:e,title:!0},...t.slice(0,4),{label:(null===o||void 0===o?void 0:o.label)||"Show more",showmore:!0,action:(null===o||void 0===o?void 0:o.action)||void 0}]:[]},filter(e,t){if(null===this.options)return setTimeout((()=>{this.options=this.requestOptions_Internal,this.search.filter("")}),100),void t();t(""!==e?()=>{let t=this.insertCategory("Tasks",this.searchInObjectArray(this.tasks,e),{action:()=>this.$root.toggleRequest("task")}),o=this.insertCategory("Projects",this.searchInObjectArray(this.projects,e),{action:()=>this.$root.toggleRequest("project")});this.filteredOptions=[...t,...o]}:()=>{this.filteredOptions=this.updateSearch_Source()})},searchInObjectArray(e=[],t){return e&&e.length?e.filter((e=>{var o,i,s,n;let a=!1;return a||(a=null===e||void 0===e||null===(o=e.description)||void 0===o||null===(i=o.toLowerCase())||void 0===i?void 0:i.includes(null===t||void 0===t?void 0:t.toLowerCase())),a||(a=null===e||void 0===e||null===(s=e.label)||void 0===s||null===(n=s.toLowerCase())||void 0===n?void 0:n.includes(null===t||void 0===t?void 0:t.toLowerCase())),a})):[]}}});var d=o(1639),u=o(2553),p=o(2857),m=o(490),g=o(1233),h=o(132),b=o(3115),w=o(926),f=o(1357),y=o(4455),v=o(9984),q=o.n(v);const _=(0,d.Z)(c,[["render",a]]),x=_;q()(c,"components",{QSelect:u.Z,QIcon:p.Z,QItem:m.Z,QItemSection:g.Z,QSpinnerPie:h.Z,QItemLabel:b.Z,QSeparator:w.Z,QAvatar:f.Z,QBtn:y.Z})},3089:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var i=o(9835),s=o(6970);const n={class:"font-medium text-h5"};function a(e,t,o,a,l,r){const c=(0,i.up)("q-toolbar-title"),d=(0,i.up)("q-toolbar"),u=(0,i.up)("Knowledge_Base"),p=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(p,{class:"container"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"q-pb-sm q-px-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i._)("div",n,(0,s.zw)(e.title),1)])),_:1})])),_:1}),(0,i.Wm)(u,{noclose:!0,bgcolor:"accent2",style:{height:"calc(100vh - 80px) !important"}})])),_:1})}o(6727);var l=o(1957);const r={key:0,class:"absolute-top-right q-pa-sm"},c=(0,i.Uk)("Close"),d={class:"col-12"},u=(0,i._)("div",{class:"q-py-md text-h4 font-bold text-primary text-center"}," How Can We Help? ",-1),p={class:"row justify-center items-center contents-center full-width"},m={key:0,class:"row items-center contents-center full-width full-height text-center q-py-md",style:{height:"calc(100vh - 400px) !important"}},g={class:"col-12"},h=(0,i._)("div",{class:"text-h5 text-grey-6"},"No Available Options",-1),b={key:1,class:"row q-py-md q-col-gutter-lg",style:{"margin-bottom":"200px"}},w={key:0,class:"col-12 col-sm-6 col-md-4 col-lg-3"},f={class:"text-body1 font-medium",style:{height:"60px"}},y={class:"q-mt-md text-subtitle2 text-grey-6"};function v(e,t,o,n,a,v){const q=(0,i.up)("tooltip-pro"),_=(0,i.up)("q-btn"),x=(0,i.up)("SearchDropdown"),k=(0,i.up)("q-toolbar"),Z=(0,i.up)("q-header"),C=(0,i.up)("q-icon"),W=(0,i.up)("q-card-section"),O=(0,i.up)("q-card"),S=(0,i.up)("q-page"),Q=(0,i.up)("q-page-container"),j=(0,i.up)("q-layout"),A=(0,i.Q2)("close-popup"),I=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.j4)(j,{container:"",view:"LHh lpR lFf",class:(0,s.C_)(["full-width full-height","bg-"+(e.bgcolor||"white")])},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{class:(0,s.C_)(["bg-"+(e.bgcolor||"white"),"q-pb-lg"])},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"q-py-md"},{default:(0,i.w5)((()=>[e.noclose?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",r,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(_,{flat:"",dense:"",round:"",size:"lg",icon:"icon-x-close",class:"text-grey-6 hover-text-secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[c])),_:1})])),_:1})),[[A]])])),(0,i._)("div",d,[u,(0,i._)("div",p,[(0,i.Wm)(x,{requestOptions:e.searchTopicsOptions,placeholder:"Search the knowledge base"},null,8,["requestOptions"])])])])),_:1})])),_:1},8,["class"]),(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,{padding:!e.noclose},{default:(0,i.w5)((()=>[!e.visibleTopicsCount||e.visibleTopicsCount<1?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",g,[(0,i._)("div",null,[(0,i.Wm)(C,{size:"200px",name:"error",class:"q-pr-sm color-primary2"})]),h])])):((0,i.wg)(),(0,i.iD)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.topics,((t,o)=>((0,i.wg)(),(0,i.j4)(l.uT,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",key:o},{default:(0,i.w5)((()=>[""===e.activeFilter||"all"===e.activeFilter||t.tags&&t.tags.includes(e.activeFilter)?((0,i.wg)(),(0,i.iD)("div",w,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(O,{flat:"",bordered:"",class:"row card-quicklinks full-height hover-border-secondary hover-shrink q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{horizontal:""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{class:"col-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{size:"md",name:t.icon,class:"bg-grey-1 hover-bg-accent hover-text-secondary q-pa-sm rounded color-primary2"},null,8,["name"])])),_:2},1024),(0,i.Wm)(W,{class:"col"},{default:(0,i.w5)((()=>[(0,i._)("div",f,(0,s.zw)(t.label),1),(0,i._)("div",y,(0,s.zw)(t.description||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)),[[I,void 0,"accent"]])])):(0,i.kq)("",!0)])),_:2},1024)))),128))])),(0,i._)("div",{class:(0,s.C_)(["full-width fixed-bottom no-pointer-events",e.noclose?"bg-gradient-color":"bg-gradient"]),style:{height:"400px"}},null,2)])),_:1},8,["padding"])])),_:1})])),_:1},8,["class"])}var q=o(4255);const _=(0,i.aZ)({name:"KnowledgeBase",components:{SearchDropdown:q.Z},props:{selected:{type:Object,default:()=>{}},noclose:{type:Boolean,default:!1},bgcolor:{type:String,default:"primary"}},computed:{visibleTopics(){return""===this.activeFilter||"all"===this.activeFilter?this.topics:this.topics.filter((e=>e.tags.includes(this.activeFilter)))},visibleTopicsCount(){return this.visibleTopics?this.visibleTopics.length:0},searchTopicsOptions(){return this.topics.map((e=>e.label))}},data(){return{containerSideMenu:!1,topics:[{label:"Account Settings",description:"Articles on managing your account including changing your email or password and deleting your account.",icon:"icon-browser",platforms:["figma"],tags:["cro","hosting"]},{label:"Getting Started",description:"Articles to get you up and running, quick and easy.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["development","ux-design"]},{label:"Billing & Payments",description:"Information about how we charge you for our services.",icon:"icon-browser",platforms:["figma"],tags:["cro","ui-design"]},{label:"Mobile App",description:"Documentation and troubleshooting our mobile app.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["seo","hosting"]},{label:"Developers",description:"Articles on managing your account including changing your email or password and deleting your account.",icon:"icon-browser",platforms:["figma"],tags:["cro","maintenance"]},{label:"Getting Started",description:"Articles to get you up and running, quick and easy.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["seo","hosting"]},{label:"Billing & Payments",description:"Information about how we charge you for our services.",icon:"icon-browser",platforms:["figma"],tags:["cro","hosting"]},{label:"Mobile App",description:"Documentation and troubleshooting our mobile app.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["seo","hosting"]},{label:"Account Settings",description:"Articles on managing your account including changing your email or password and deleting your account.",icon:"icon-browser",platforms:["figma"],tags:["cro","hosting"]},{label:"Getting Started",description:"Articles to get you up and running, quick and easy.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["development","ux-design"]},{label:"Billing & Payments",description:"Information about how we charge you for our services.",icon:"icon-browser",platforms:["figma"],tags:["cro","ui-design"]},{label:"Mobile App",description:"Documentation and troubleshooting our mobile app.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["seo","hosting"]},{label:"Developers",description:"Articles on managing your account including changing your email or password and deleting your account.",icon:"icon-browser",platforms:["figma"],tags:["cro","maintenance"]},{label:"Getting Started",description:"Articles to get you up and running, quick and easy.",icon:"icon-browser",platforms:["figma","adobe_xd"],tags:["seo","hosting"]}],platforms:{figma:{icon:"figma",label:"Figma"},adobe_xd:{icon:"xd",label:"Adobe XD"}},activeFilter:""}},methods:{updateFilter(e){this.activeFilter=e}}});var x=o(1639),k=o(249),Z=o(6602),C=o(1663),W=o(4455),O=o(2133),S=o(9885),Q=o(2857),j=o(9892),A=o(3190),I=o(2146),z=o(1136),T=o(9984),D=o.n(T);const P=(0,x.Z)(_,[["render",v]]),F=P;D()(_,"components",{QLayout:k.Z,QHeader:Z.Z,QToolbar:C.Z,QBtn:W.Z,QPageContainer:O.Z,QPage:S.Z,QIcon:Q.Z,QCard:j.Z,QCardSection:A.Z}),D()(_,"directives",{ClosePopup:I.Z,Ripple:z.Z});const B=(0,i.aZ)({name:"KnowledgeBasePage",components:{Knowledge_Base:F},setup(){return{title:"Knowledge Base"}},async mounted(){this.$root.setMeta({title:this.title})}});var H=o(1973);const L=(0,x.Z)(B,[["render",a]]),R=L;D()(B,"components",{QPage:S.Z,QToolbar:C.Z,QToolbarTitle:H.Z})}}]);