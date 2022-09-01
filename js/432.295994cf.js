"use strict";(globalThis["webpackChunkgrowmodo_hub"]=globalThis["webpackChunkgrowmodo_hub"]||[]).push([[432],{9958:(e,t,o)=>{o.d(t,{Z:()=>_});var s=o(9835),l=o(6970);const i={key:1};function a(e,t,o,a,r,n){const c=(0,s.up)("q-icon"),d=((0,s.up)("q-spinner-pie"),(0,s.up)("q-item-section")),u=(0,s.up)("q-item"),p=(0,s.up)("q-item-label"),m=(0,s.up)("q-separator"),h=(0,s.up)("q-avatar"),w=(0,s.up)("q-btn"),f=(0,s.up)("q-select");return(0,s.wg)(),(0,s.j4)(f,{ref:"search",outlined:"","use-input":"","hide-selected":"","hide-bottom-space":"","hide-dropdown-icon":"","menu-offset":[0,0],color:"primary","bg-color":"white","stack-label":!1,modelValue:e.requestQuery,"onUpdate:modelValue":t[1]||(t[1]=t=>e.requestQuery=t),class:"select-request","popup-content-class":"bg-white rounded-bottom shadow-1","options-selected-class":"bg-accent","input-class":"text-h6 text-grey-6",placeholder:e.placeholder,options:e.filteredOptions,onFilter:e.filter,"transition-show":"jump-up","transition-hide":"jump-down"},(0,s.Nv)({option:(0,s.w5)((e=>[e.opt.title?((0,s.wg)(),(0,s.j4)(u,{key:e.itemProps.id+"_title",to:e.opt.url,onClick:e.opt.action},{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"text-subtitle1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])):e.opt.showmore?((0,s.wg)(),(0,s.iD)("div",i,[((0,s.wg)(),(0,s.j4)(u,{clickable:"",key:e.itemProps.id+"_more",to:e.opt.url,onClick:e.opt.action,class:"q-mb-md bg-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"text-subtitle1 font-medium text-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])),(0,s.Wm)(m)])):((0,s.wg)(),(0,s.j4)(u,(0,s.dG)({key:2,clickable:"",to:e.opt.url,onClick:e.opt.action},e.itemProps,{class:["q-my-xs hover-bg-accent hover-text-secondary text-body2 font-medium",e.selected?"bg-accent text-secondary":"bg-white text-primary"],key:e.itemProps.id}),{default:(0,s.w5)((()=>[(0,s.Wm)(d,{side:""},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{rounded:"",class:"bg-color hover-bg-accent auto-hw"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{size:"sm",name:e.opt.icon||"icon-browser",color:"secondary",class:"q-pa-sm hover-text-secondary hover-bg-accent"},null,8,["name"])])),_:2},1024)])),_:2},1024),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024),e.opt.type?((0,s.wg)(),(0,s.j4)(d,{key:0,side:""},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{outline:"",dense:"","no-caps":"","text-color":"blue-grey-5",size:"12px",class:"bg-grey-1 q-px-sm hover-text-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.opt.type)+" ",1),(0,s.Wm)(c,{size:"14px",name:"icon-corner-down-right",class:"color-primary2 q-ml-xs"})])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0)])),_:2},1040,["to","onClick","class"]))])),_:2},[e.show_button?void 0:{name:"prepend",fn:(0,s.w5)((()=>[(0,s.Wm)(c,{name:"icon-search-lg",size:"sm",class:"color-primary2"})]))},void 0,e.show_button?{name:"after",fn:(0,s.w5)((()=>[(0,s.Wm)(h,{rounded:"",size:"75px",class:"cursor-pointer rounded text-white bg-primary q-pa-sm",style:{height:"auto",width:"auto"},onClick:t[0]||(t[0]=t=>e.$root.toggleRequest())},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{name:e.leftIcon,size:"sm",class:"q-pa-sm",color:"white"},null,8,["name"])])),_:1})]))}:void 0]),1032,["modelValue","placeholder","options","onFilter"])}o(702),o(6727);var r=o(499),n=o(3100);const c=(0,s.aZ)({name:"SearchDropdown",props:{show_button:{type:Boolean,default:!1},placeholder:{type:String,default:"Search..."},requestOptions:{type:Array,default:()=>[]},leftIcon:{type:String,default:"icon-plus"}},setup(){const e=(0,r.iH)(""),t=(0,r.iH)(null),o=(0,r.iH)([]),s=(0,r.iH)(null);return{search:s,options:t,requestQuery:e,filteredOptions:o}},computed:{...(0,n.rn)("growmodo",["tasks","projects"])},data(){return{requestOptions_Internal:[],requestOptions_Internal_All:[]}},async beforeMount(){await this.updateSearch_Source()},methods:{updateSearch_Source(){if(null!==this.requestOptions){if(this.requestOptions&&this.requestOptions.length)this.requestOptions_Internal=this.requestOptions,this.requestOptions_Internal_All=this.requestOptions;else{let e=this.insertCategory("Tasks",this.tasks,{action:()=>this.$root.toggleRequest("task")}),t=this.insertCategory("Projects",this.projects,{action:()=>this.$root.toggleRequest("project")});this.requestOptions_Internal=[...e,...t],this.requestOptions_Internal_All=[...this.tasks,...this.projects]}return this.requestOptions_Internal}},insertCategory(e,t=[],o={label:"Show more",action:()=>{}}){return e&&t&&t.length?[{label:e,title:!0},...t.slice(0,4),{label:(null===o||void 0===o?void 0:o.label)||"Show more",showmore:!0,action:(null===o||void 0===o?void 0:o.action)||void 0}]:[]},filter(e,t){if(null===this.options)return setTimeout((()=>{this.options=this.requestOptions_Internal,this.search.filter("")}),100),void t();t(""!==e?()=>{let t=this.insertCategory("Tasks",this.searchInObjectArray(this.tasks,e),{action:()=>this.$root.toggleRequest("task")}),o=this.insertCategory("Projects",this.searchInObjectArray(this.projects,e),{action:()=>this.$root.toggleRequest("project")});this.filteredOptions=[...t,...o]}:()=>{this.filteredOptions=this.updateSearch_Source()})},searchInObjectArray(e=[],t){return e&&e.length?e.filter((e=>{var o,s,l,i;let a=!1;return a||(a=null===e||void 0===e||null===(o=e.description)||void 0===o||null===(s=o.toLowerCase())||void 0===s?void 0:s.includes(null===t||void 0===t?void 0:t.toLowerCase())),a||(a=null===e||void 0===e||null===(l=e.label)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===t||void 0===t?void 0:t.toLowerCase())),a})):[]}}});var d=o(1639),u=o(2553),p=o(2857),m=o(490),h=o(1233),w=o(132),f=o(3115),g=o(926),y=o(1357),b=o(4455),v=o(9984),k=o.n(v);const q=(0,d.Z)(c,[["render",a]]),_=q;k()(c,"components",{QSelect:u.Z,QIcon:p.Z,QItem:m.Z,QItemSection:h.Z,QSpinnerPie:w.Z,QItemLabel:f.Z,QSeparator:g.Z,QAvatar:y.Z,QBtn:b.Z})},8432:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});o(6727);var s=o(9835),l=o(6970),i=o(1957);const a=(0,s.Uk)("Task Directory"),r=(0,s.Uk)("All Categories"),n={key:0,class:"absolute-top-left q-py-sm"},c=(0,s.Uk)(" Show Menu "),d={key:1,class:"absolute-top-right q-pa-sm"},u=(0,s.Uk)("Close"),p={class:"q-mt-xl q-pt-lg row justify-center items-center full-width"},m={key:0,class:"row items-center contents-center full-width full-height text-center q-py-md",style:{height:"calc(100vh - 400px) !important"}},h={class:"col-12"},w=(0,s._)("div",{class:"text-h5 text-grey-6"},"No Available Options",-1),f={key:1,class:"row q-py-md q-col-gutter-lg",style:{"margin-bottom":"200px"}},g={key:0,class:"col-12 col-sm-6 col-md-4 col-lg-3"},y={class:"text-body1 font-medium q-pt-md",style:{height:"60px"}},b={class:"q-mt-md text-subtitle2 text-grey-6"},v={class:"q-pr-sm text-caption text-grey-8"},k={class:"q-gutter-xs"},q=(0,s._)("div",{class:"full-width fixed-bottom bg-gradient no-pointer-events",style:{height:"400px"}},null,-1),_={class:"row justify-center q-my-md relative-position",style:{"z-index":"7"}};function x(e,t,o,x,C,S){const W=(0,s.up)("q-item-section"),Z=(0,s.up)("q-item"),Q=(0,s.up)("q-list"),j=(0,s.up)("q-scroll-area"),I=(0,s.up)("q-drawer"),z=(0,s.up)("tooltip-pro"),O=(0,s.up)("q-btn"),T=(0,s.up)("SearchDropdown"),F=(0,s.up)("q-toolbar"),L=(0,s.up)("q-header"),D=(0,s.up)("q-icon"),$=(0,s.up)("q-card-section"),P=(0,s.up)("q-separator"),U=(0,s.up)("q-card-actions"),A=(0,s.up)("q-card"),M=(0,s.up)("q-spinner-dots"),H=(0,s.up)("q-infinite-scroll"),R=(0,s.up)("q-page"),V=(0,s.up)("q-page-container"),B=(0,s.up)("q-layout"),K=(0,s.Q2)("ripple"),Y=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(B,{view:"LHh lpR lFf",class:"bg-white full-width full-height"},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{"show-if-above":"",width:200,breakpoint:600,modelValue:e.containerSideMenu,"onUpdate:modelValue":t[1]||(t[1]=t=>e.containerSideMenu=t),overlay:e.$q.screen.width<=600,side:"left",class:"bg-color"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{class:"fit"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"q-pt-xl q-mt-xl"},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"text-primary text-body2 font-medium q-pl-xl q-mb-xl"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[a])),_:1})])),_:1}),(0,s.wy)(((0,s.wg)(),(0,s.j4)(Z,{clickable:"",class:(0,l.C_)(["text-body2 q-pl-xl q-my-sm hover-text-secondary",""==e.activeFilter||"all"==e.activeFilter?"text-secondary font-medium bg-none":"text-primary hover-bg-accent hanimate-headShake hanimate-delay-fast"]),onClick:t[0]||(t[0]=t=>e.updateFilter(""))},{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[r])),_:1})])),_:1},8,["class"])),[[K,void 0,"secondary"]]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.taskDirectory,((t,o)=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(Z,{clickable:"",class:(0,l.C_)(["text-body2 q-pl-xl q-my-sm hover-text-secondary",e.activeFilter==t.filter?"text-secondary font-medium bg-none":"text-primary hover-bg-accent hanimate-headShake hanimate-delay-fast"]),key:o,xclass:"filter-is-"+t.filter,onClick:o=>e.updateFilter(t.filter)},{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.label),1)])),_:2},1024)])),_:2},1032,["class","xclass","onClick"])),[[K,void 0,"secondary"]]))),128))])),_:1})])),_:1})])),_:1},8,["modelValue","overlay"]),(0,s.Wm)(L,{class:"bg-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{class:"q-py-md"},{default:(0,s.w5)((()=>[e.$q.screen.width<=650?((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(O,{flat:"",dense:"",size:"lg",icon:"icon-chevron-left",class:"text-grey-6 hover-text-secondary hover-bg-accent rounded",onClick:t[2]||(t[2]=t=>e.toogleContainerSideMenu()),style:{"border-top-left-radius":"0 !important","border-bottom-left-radius":"0 !important"}},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{anchor:"center end",self:"center left","transition-show":"slide-right","transition-hide":"slide-left"},{default:(0,s.w5)((()=>[c])),_:1})])),_:1})])):(0,s.kq)("",!0),e.noclose?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",d,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(O,{flat:"",dense:"",round:"",size:"lg",icon:"icon-x-close",class:"text-grey-6 hover-text-secondary"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[u])),_:1})])),_:1})),[[Y]])])),(0,s._)("div",p,[(0,s.Wm)(T,{requestOptions:null,placeholder:"What is your next request?"})])])),_:1})])),_:1}),(0,s.Wm)(V,null,{default:(0,s.w5)((()=>[(0,s.Wm)(R,{padding:""},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{onLoad:e.loadInfiniteScroll,offset:100},{loading:(0,s.w5)((()=>[(0,s._)("div",_,[(0,s.Wm)(M,{color:"secondary",size:"40px"})])])),default:(0,s.w5)((()=>[!e.visibleTasksCount||e.visibleTasksCount<1?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",h,[(0,s._)("div",null,[(0,s.Wm)(D,{size:"200px",name:"icon-alert-circle",class:"q-pr-sm text-grey-3"})]),w])])):((0,s.wg)(),(0,s.iD)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.tasksList,((t,o)=>((0,s.wg)(),(0,s.j4)(i.uT,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",key:o},{default:(0,s.w5)((()=>[""===e.activeFilter||"all"===e.activeFilter||t.tags&&t.tags.includes(e.activeFilter)?((0,s.wg)(),(0,s.iD)("div",g,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(A,{flat:"",bordered:"",class:"row card-quicklinks full-height hover-border-secondary hover-shrink",onClick:o=>e.openTask(t)},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D,{size:"md",name:t.icon||"icon-browser",class:"bg-grey-1 hover-bg-accent hover-text-secondary q-pa-sm rounded color-primary2"},null,8,["name"]),(0,s._)("div",y,(0,l.zw)(t.label),1),(0,s._)("div",b,(0,l.zw)(t.description||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),1)])),_:2},1024),(0,s.Wm)(P,{size:"1.5px",class:"full-width hover-secondary"}),(0,s.Wm)(U,{class:"q-pa-md full-width"},{default:(0,s.w5)((()=>[(0,s._)("span",v," Platform"+(0,l.zw)(t.platforms&&t.platforms.length>1?"s":"")+": ",1),(0,s._)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.platforms,(t=>((0,s.wg)(),(0,s.j4)(D,{size:"sm",key:t,name:e.$root.formatPlatformIconSrc(t),class:"hanimate-pulse color-primary2"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{anchor:"top middle",self:"bottom middle",offset:[10,10],bgColor:"white",color:"primary",arrow:"bottom",shadow:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.$root.getPlatformInfo(t,"label")||"Growmodo"),1)])),_:2},1024)])),_:2},1032,["name"])))),128))])])),_:2},1024)])),_:2},1032,["onClick"])),[[K,void 0,"accent"]])])):(0,s.kq)("",!0)])),_:2},1024)))),128))])),q])),_:1},8,["onLoad"])])),_:1})])),_:1})])),_:1})}var C=o(9958),S=o(3100);const W=(0,s.aZ)({name:"RequestTask",components:{SearchDropdown:C.Z},props:{selected:{type:Object,default:()=>{}},noclose:{type:Boolean,default:!1}},watch:{["$root.$q.screen.width"]:{async handler(e){e>650&&!this.containerSideMenu&&this.toogleContainerSideMenu(!0)},deep:!0},activeFilter:{async handler(e){this.tasksList=this.visibleTasks.slice(0,10)},deep:!0}},data(){return{containerSideMenu:!1,activeFilter:"",tasksList:[]}},computed:{...(0,S.rn)("growmodo",["tasks"]),...(0,S.Se)("growmodo",["taskDirectory"]),visibleTasks(){return""===this.activeFilter||"all"===this.activeFilter?this.tasks:this.tasks.filter((e=>e.tags.includes(this.activeFilter)))},visibleTasksCount(){return this.visibleTasks?this.visibleTasks.length:0}},methods:{updateFilter(e){this.activeFilter=e},openTask(e){e&&(this.$root.task.info=e,this.$root.toggleForm_Task(""))},toogleContainerSideMenu(e=null){this.containerSideMenu=null!==e?e:!this.containerSideMenu},loadInfiniteScroll(e,t){this.visibleTasks.length===this.tasksList.length&&t(),setTimeout((()=>{let e=this.visibleTasks.slice(this.tasksList.length,this.tasksList.length+10);e.forEach((e=>{this.tasksList.push(e)})),t()}),1e3)}},beforeMount(){this.tasksList=this.visibleTasks.slice(0,10)},beforeUnmount(){this.$root.task.info={}}});var Z=o(1639),Q=o(249),j=o(906),I=o(6663),z=o(3246),O=o(490),T=o(1233),F=o(6602),L=o(1663),D=o(4455),$=o(2133),P=o(9885),U=o(6870),A=o(2857),M=o(9892),H=o(3190),R=o(926),V=o(1821),B=o(7501),K=o(1136),Y=o(2146),G=o(9984),N=o.n(G);const E=(0,Z.Z)(W,[["render",x]]),J=E;N()(W,"components",{QLayout:Q.Z,QDrawer:j.Z,QScrollArea:I.Z,QList:z.Z,QItem:O.Z,QItemSection:T.Z,QHeader:F.Z,QToolbar:L.Z,QBtn:D.Z,QPageContainer:$.Z,QPage:P.Z,QInfiniteScroll:U.Z,QIcon:A.Z,QCard:M.Z,QCardSection:H.Z,QSeparator:R.Z,QCardActions:V.Z,QSpinnerDots:B.Z}),N()(W,"directives",{Ripple:K.Z,ClosePopup:Y.Z})}}]);