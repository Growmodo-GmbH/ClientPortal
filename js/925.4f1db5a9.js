"use strict";(globalThis["webpackChunkgrowmodo_hub"]=globalThis["webpackChunkgrowmodo_hub"]||[]).push([[925],{3210:(e,t,l)=>{l.d(t,{Z:()=>q});var a=l(9835),s=l(6970);const o={class:"text-center"};function r(e,t,l,r,i,c){const d=(0,a.up)("q-icon"),n=(0,a.up)("q-spinner-pie"),m=(0,a.up)("q-item-section"),u=(0,a.up)("q-item"),p=(0,a.up)("q-item-label"),w=(0,a.up)("q-btn"),f=(0,a.up)("q-avatar"),h=(0,a.up)("q-select");return(0,a.wg)(),(0,a.j4)(h,{ref:"search",outlined:"","use-input":"","hide-selected":"","hide-bottom-space":"","hide-dropdown-icon":"","menu-offset":[0,10],color:"primary","bg-color":"white","stack-label":!1,modelValue:e.requestQuery,"onUpdate:modelValue":t[1]||(t[1]=t=>e.requestQuery=t),class:"select-request","popup-content-class":"bg-color rounded no-shadow q-py-sm","options-selected-class":"bg-accent","input-class":"text-h6 font-medium text-primary",placeholder:e.placeholder,options:e.filteredOptions,onFilter:e.filter},(0,a.Nv)({prepend:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"search",size:"md",class:"color-primary2"})])),"no-option":(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(n,{color:"primary",size:"24px"})])])),_:1})])),_:1})])),option:(0,a.w5)((e=>[(0,a.Wm)(u,(0,a.dG)(e.itemProps,{class:"bg-white q-my-xs shadow-1 hover-bg-accent text-grey-8 hover-shrink hover-text-secondary",style:{"margin-left":"auto","margin-right":"auto","max-width":"calc(100% - 30px)"}}),{default:(0,a.w5)((()=>[(0,a.Wm)(m,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"hover-text-secondary",name:e.opt.icon||"calendar_today"},null,8,["name"])])),_:2},1024),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024),e.opt.type?((0,a.wg)(),(0,a.j4)(m,{key:0,side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{outline:"",dense:"","no-caps":"","text-color":"blue-grey-5",size:"12px",class:"bg-grey-1 q-px-sm hover-text-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.opt.type)+" ",1),(0,a.Wm)(d,{size:"14px",name:"subdirectory_arrow_left",class:"color-primary2"})])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1040)])),_:2},[e.show_button?{name:"after",fn:(0,a.w5)((()=>[(0,a.Wm)(f,{rounded:"",size:"75px",class:"cursor-pointer rounded text-white bg-primary q-pa-sm",style:{height:"auto",width:"auto"},onClick:t[0]||(t[0]=t=>e.$root.toggleRequest())},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"add",color:"white"})])),_:1})]))}:void 0]),1032,["modelValue","placeholder","options","onFilter"])}l(702),l(6727);var i=l(499);const c=(0,a.aZ)({name:"Search_Dropdown",props:{show_button:{type:Boolean,default:!1},placeholder:{type:String,default:"Search..."},requestOptions:{type:Array,default:()=>["Homepage Design Concept","Homepage Development","Website Content Update","Website Sitemap","Workflow Setup Between Apps","Presentation Design"]}},setup(){const e=(0,i.iH)(""),t=(0,i.iH)(null),l=(0,i.iH)([]),a=(0,i.iH)(null);return{search:a,options:t,requestQuery:e,filteredOptions:l}},methods:{filter(e,t){if(null===this.options)return setTimeout((()=>{this.options=this.requestOptions,this.search.filter("")}),1500),void t();t(""!==e?()=>{this.filteredOptions=[{label:e,icon:"search",type:"Search"},...this.options.filter((t=>t.toLowerCase().includes(e.toLowerCase()))).map((e=>({label:e})))]}:()=>{this.filteredOptions=this.options.map((e=>({label:e})))})}}});var d=l(1639),n=l(4581),m=l(2857),u=l(490),p=l(1233),w=l(132),f=l(3115),h=l(4455),g=l(1357),_=l(8149),y=l(9984),b=l.n(y);const v=(0,d.Z)(c,[["render",r]]),q=v;b()(c,"components",{QSelect:n.Z,QIcon:m.Z,QItem:u.Z,QItemSection:p.Z,QSpinnerPie:w.Z,QItemLabel:f.Z,QBtn:h.Z,QAvatar:g.Z,QField:_.Z})},9925:(e,t,l)=>{l.r(t),l.d(t,{default:()=>re});var a=l(9835),s=l(1957);const o=(0,a._)("div",{class:"font-medium text-h5"},[(0,a.Uk)("Howdy, "),(0,a._)("span",null,"Growmodo"),(0,a.Uk)("!")],-1),r={class:"text-caption font-medium text-grey-8"},i=(0,a._)("span",{class:"q-pr-sm"},"ACME Inc.",-1),c=(0,a.Uk)("1 Active Task"),d={class:"q-mt-xl q-pt-xl row justify-center items-center"},n={class:"q-pt-xl"},m=(0,a.Uk)(" Quick Links "),u={class:"row q-py-md q-col-gutter-lg"},p={class:"col-12 col-sm-6 col-md-3"},w={class:"full-width row q-pa-lg justify-end items-end"},f=(0,a._)("div",{class:"text-h5 font-medium"},"Task Board",-1),h={class:"q-mt-md text-subtitle2"},g={class:"col-12 col-sm-6 col-md-3"},_={class:"full-width row q-pa-lg justify-end items-end"},y=(0,a._)("div",{class:"text-h5 font-medium"},"Files",-1),b={class:"q-mt-md text-subtitle2"},v={class:"col-12 col-sm-6 col-md-3"},q={class:"row q-gutter-lg"},W=(0,a.Uk)("Task Directory"),k=(0,a.Uk)("Knowledge Base"),x={class:"col-12 col-sm-6 col-md-3"},Z={class:"row q-gutter-lg"},Q=(0,a.Uk)(" Book a Strategy Call "),z=(0,a.Uk)(" Get a Gift "),j={class:"full-width row justify-end"},C=(0,a.Uk)("See All Project Briefs"),S={class:"q-pt-md"},U=(0,a.Uk)(" Project Briefs "),B={class:"row q-py-md q-col-gutter-lg"},I={class:"col-12 col-sm-6 col-md-3"},T=(0,a._)("div",{class:"text-body1 font-medium q-pt-md"},"Add a New Brand",-1),H=(0,a._)("div",{class:"q-mt-md text-subtitle2"},null,-1),A=(0,a._)("div",{class:"col-12 col-sm-6 col-md-3"},null,-1),P=(0,a._)("div",{class:"col-12 col-sm-6 col-md-3"},null,-1),D=(0,a._)("div",{class:"col-12 col-sm-6 col-md-3"},null,-1);function O(e,t,l,O,$,L){const F=(0,a.up)("q-badge"),G=(0,a.up)("q-toolbar-title"),R=(0,a.up)("q-btn"),V=(0,a.up)("q-toolbar"),M=(0,a.up)("Search_Dropdown"),N=(0,a.up)("q-icon"),E=(0,a.up)("q-card-section"),K=(0,a.up)("q-card"),X=(0,a.up)("q-avatar"),Y=(0,a.up)("q-item-section"),J=(0,a.up)("q-item-label"),ee=(0,a.up)("q-item"),te=(0,a.up)("q-page"),le=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(te,{class:"container"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{class:"q-pb-sm q-px-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,null,{default:(0,a.w5)((()=>[o,(0,a._)("small",r,[i,(0,a.Wm)(F,{class:"badge-green text-caption font-medium"},{default:(0,a.w5)((()=>[c])),_:1})])])),_:1}),(0,a.Wm)(R,{flat:"","no-caps":"",size:"18px",ripple:{color:"accent"},class:"bg-secondary text-white hover-dark font-medium text-body2 rounded",label:"Upgrade Your Plan"})])),_:1}),(0,a._)("div",d,[(0,a.Wm)(s.uT,{appear:"",duration:500,"enter-active-class":"animated flipInX","leave-active-class":"animated fadeOut"},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{show_button:!0,placeholder:"What is your next request?"})])),_:1})]),(0,a._)("div",n,[m,(0,a._)("div",u,[(0,a._)("div",p,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",class:"row items-center card-quicklinks full-height slide-hover"},{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a.Wm)(N,{name:"circle",size:"175px",class:"card-bg-circle"}),(0,a.Wm)(N,{size:"xl",name:"space_dashboard",class:"material-icons-outlined card-icon color-primary2"})]),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[f,(0,a._)("div",h,[(0,a.Wm)(N,{name:"east",class:"slide-hover-left-lg color-primary2"})])])),_:1})])),_:1})),[[le,void 0,"accent"]])]),(0,a._)("div",g,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",onClick:t[0]||(t[0]=t=>e.$router.push("files")),class:"row items-center card-quicklinks full-height slide-hover"},{default:(0,a.w5)((()=>[(0,a._)("div",_,[(0,a.Wm)(N,{name:"circle",size:"175px",class:"card-bg-circle"}),(0,a.Wm)(N,{size:"xl",name:"folder",class:"material-icons-outlined card-icon color-primary2"})]),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[y,(0,a._)("div",b,[(0,a.Wm)(N,{name:"east",class:"slide-hover-left-lg color-primary2"})])])),_:1})])),_:1})),[[le,void 0,"accent"]])]),(0,a._)("div",v,[(0,a._)("div",q,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",class:"row items-center card-quicklinks card-quicklinks-mini q-py-lg q-px-md",onClick:t[1]||(t[1]=t=>e.$root.toggleRequest("task"))},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{rounded:"",class:"bg-grey-1 hover-bg-accent hover-text-secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{size:"md",name:"grid_view",class:"material-icons-outlined color-primary2"})])),_:1})])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"text-body1 font-medium"},{default:(0,a.w5)((()=>[W])),_:1})])),_:1})])),_:1})])),_:1})),[[le,void 0,"accent"]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",class:"row items-center card-quicklinks card-quicklinks-mini q-py-lg q-px-md",onClick:t[2]||(t[2]=t=>e.$router.push("knowledge"))},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{rounded:"",class:"bg-grey-1 hover-bg-accent hover-text-secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{size:"md",name:"lightbulb",class:"material-icons-outlined color-primary2"})])),_:1})])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"text-body1 font-medium"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1})])),_:1})])),_:1})),[[le,void 0,"accent"]])])]),(0,a._)("div",x,[(0,a._)("div",Z,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",class:"row items-center card-quicklinks card-quicklinks-mini q-py-lg q-px-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{rounded:"",class:"bg-grey-1 hover-bg-accent hover-text-secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{size:"md",name:"call",class:"material-icons-outlined color-primary2"})])),_:1})])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"text-body1 font-medium"},{default:(0,a.w5)((()=>[Q])),_:1})])),_:1})])),_:1})])),_:1})),[[le,void 0,"accent"]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(K,{flat:"",bordered:"",class:"row items-center card-quicklinks card-quicklinks-mini q-py-lg q-px-md",onClick:t[3]||(t[3]=t=>e.$router.push("gift"))},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{rounded:"",class:"bg-grey-1 hover-bg-accent hover-text-secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{size:"md",name:"redeem",class:"material-icons-outlined color-primary2"})])),_:1})])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"text-body1 font-medium"},{default:(0,a.w5)((()=>[z])),_:1})])),_:1})])),_:1})])),_:1})),[[le,void 0,"accent"]])])])]),(0,a._)("div",j,[(0,a.Wm)(ee,{to:"brands",class:"bg-none q-py-none slide-hover items-center text-grey-8 font-medium"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)(Y,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{name:"east",class:"slide-hover-left-sm color-primary2"})])),_:1})])),_:1})])]),(0,a._)("div",S,[U,(0,a._)("div",B,[(0,a._)("div",I,[(0,a.Wm)(K,{flat:"",bordered:"",class:"row items-center justify-center card-quicklinks c-card-new bg-transparent full-height q-py-md hover-shrink",onClick:t[4]||(t[4]=t=>e.$router.push("brands"))},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{rounded:"",size:"75px",class:"cursor-pointer rounded text-white bg-primary q-pa-sm",style:{height:"auto",width:"auto"}},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{name:"add",color:"white"})])),_:1}),T,H])),_:1})])),_:1})]),A,P,D])])])),_:1})}var $=l(3210);const L=(0,a.aZ)({name:"HomePage",components:{Search_Dropdown:$.Z},data(){return{title:"Home"}},async mounted(){this.$root.setMeta({title:this.title})}});var F=l(1639),G=l(9885),R=l(1663),V=l(1973),M=l(990),N=l(4455),E=l(4458),K=l(2857),X=l(3190),Y=l(490),J=l(1233),ee=l(1357),te=l(3115),le=l(1136),ae=l(9984),se=l.n(ae);const oe=(0,F.Z)(L,[["render",O]]),re=oe;se()(L,"components",{QPage:G.Z,QToolbar:R.Z,QToolbarTitle:V.Z,QBadge:M.Z,QBtn:N.Z,QCard:E.Z,QIcon:K.Z,QCardSection:X.Z,QItem:Y.Z,QItemSection:J.Z,QAvatar:ee.Z,QItemLabel:te.Z}),se()(L,"directives",{Ripple:le.Z})}}]);