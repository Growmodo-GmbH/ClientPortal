"use strict";(globalThis["webpackChunkgrowmodo_hub"]=globalThis["webpackChunkgrowmodo_hub"]||[]).push([[277],{5277:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var o=n(9835);function i(e,t,n,i,s,a){const r=(0,o.up)("AuthorizationForm"),l=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(l,{padding:"",class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{onSuccess:e.onLoginResponse,onFailed:e.onLoginResponse},null,8,["onSuccess","onFailed"])])),_:1})}const s=(0,o.Uk)(" Authentication "),a={class:"row"},r=(0,o._)("span",{class:"text-body2"},"Login",-1),l=(0,o.Uk)(" Verifying ");function u(e,t,n,i,u,c){const d=(0,o.up)("q-icon"),p=(0,o.up)("q-toolbar-title"),m=(0,o.up)("q-toolbar"),g=(0,o.up)("q-input"),h=(0,o.up)("InputPassword"),w=(0,o.up)("q-space"),_=(0,o.up)("q-spinner"),b=(0,o.up)("q-btn"),y=(0,o.up)("q-form"),f=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(f,{class:"rounded",style:{width:"500px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"bg-primary text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{size:"lg",color:"white",name:"icon-growmodo"}),(0,o.Wm)(p,{class:"text-body1 font-medium"},{default:(0,o.w5)((()=>[s])),_:1})])),_:1}),(0,o.Wm)(y,{onSubmit:e.loginWithPwd,ref:"authorization_form",class:"q-pa-md q-gutter-xs"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(g,{rounded:"",outlined:"",autofocus:"",clearable:"","lazy-rules":"",autocomplete:"",tabindex:"1","clear-icon":"icon-x-close",label:"Username or Userid",modelValue:e.u_useridentity,"onUpdate:modelValue":t[0]||(t[0]=t=>e.u_useridentity=t),rules:[t=>e.checker.input(!!t||"",250)]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(d,{size:"xs",name:"icon-user-03"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",null,[(0,o.Wm)(h,{withicon:"",rounded:"",outlined:"",clearable:"","lazy-rules":"",autocomplete:"",tabindex:"2",dense:!1,label:"Password","clear-icon":"icon-x-close",modelValue:e.u_password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.u_password=t),rules:[t=>e.checker.input(!!t||"",250)]},null,8,["modelValue","rules"])]),(0,o._)("div",a,[(0,o.Wm)(w),(0,o.Wm)(b,{ripple:"","no-caps":"",rounded:"",size:"md",unelevated:"",tabindex:"3",color:"primary",class:"text-body2 font-medium q-px-xl",percentage:e.decrypting.percentage,onClick:e.submitValidation},{loading:(0,o.w5)((()=>[e.decrypting.status?((0,o.wg)(),(0,o.j4)(_,{key:0,size:"xs",class:"on-left"})):(0,o.kq)("",!0),l])),default:(0,o.w5)((()=>[r])),_:1},8,["percentage","onClick"])])])),_:1},8,["onSubmit"])])),_:1})}var c=n(4877),d=n(1179),p=n(1809),m=n(7838);const g=(0,o.aZ)({name:"AuthorizationForm",components:{InputPassword:d.Z},data(){return{checker:c.ZZ,loginAnimate:null,u_useridentity:null,u_password:null,interval:null,login_response:null,decrypting:{status:!1,percentage:0}}},watch:{login_response:{async handler(e){},deep:!0}},emits:["success","failed","loading"],methods:{...(0,p.nv)(m.Z,["loginWithPassword"]),submitValidation(){const e=this.$refs.authorization_form;e&&e.submit()},async loginWithPwd(){var e;this.loginLoading(),this.login_response=null;const t={username:this.u_useridentity,password:this.u_password};this.$emit("loading",t);const n=await this.loginWithPassword(t);this.login_response=n||{},this.$emit(null!==(e=this.login_response)&&void 0!==e&&e.success?"success":"failed",this.login_response||{})},async loginLoading(e){this.decrypting.status=!0,this.loginAnimate=setInterval((()=>{this.decrypting.percentage+=Math.floor(8*Math.random()+10),this.decrypting.percentage>=100&&(e&&e(),this.decrypting.status=!1)}),1e3)}}});var h=n(1639),w=n(4458),_=n(1663),b=n(2857),y=n(1973),f=n(8326),x=n(6611),Z=n(136),q=n(4455),v=n(3902),k=n(9984),W=n.n(k);const z=(0,h.Z)(g,[["render",u]]),L=z;W()(g,"components",{QCard:w.Z,QToolbar:_.Z,QIcon:b.Z,QToolbarTitle:y.Z,QForm:f.Z,QInput:x.Z,QSpace:Z.Z,QBtn:q.Z,QSpinner:v.Z});const Q=(0,o.aZ)({name:"AuthorizationPage",data(){return{title:"Authorization"}},components:{AuthorizationForm:L},async mounted(){this.$root.setMeta({title:this.title})},methods:{onLoginResponse(e){null!==e&&void 0!==e&&e.success?(this.redirectOnLogin(),this.$q.notify({message:"Login Success",icon:"icon-check-circle-broken",timeout:500})):this.$q.notify({message:"Login Failed",icon:"icon-alert-circle",color:"negative",timeout:1e3})},redirectOnLogin(){this.$router.push(this.$route.query.redirect||"/")}}});var P=n(9885);const V=(0,h.Z)(Q,[["render",i]]),A=V;W()(Q,"components",{QPage:P.Z})}}]);