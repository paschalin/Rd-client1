"use strict";(()=>{var e={};e.id=999,e.ids=[999],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},32504:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>l,patchFetch:()=>x,requestAsyncStorage:()=>u,routeModule:()=>o,serverHooks:()=>c,staticGenerationAsyncStorage:()=>p});var s=r(49303),a=r(88716),n=r(60670),i=r(66291);let o=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/authentication/[...nextauth]/route",pathname:"/authentication/[...nextauth]",filename:"route",bundlePath:"app/authentication/[...nextauth]/route"},resolvedPagePath:"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\authentication\\[...nextauth]\\route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:u,staticGenerationAsyncStorage:p,serverHooks:c}=o,l="/authentication/[...nextauth]/route";function x(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:p})}},66291:(e,t,r)=>{r.r(t),r.d(t,{GET:()=>p,POST:()=>p,authOptions:()=>u});var s=r(75571),a=r.n(s),n=r(77234),i=r(53797);let o=process.env.API_URL,u={session:{strategy:"jwt"},providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"Credentials",async authorize(e){let{email:t,token:r}=e,s=await fetch(`${o}/users/index.php?email=${t}&with=token`,{method:"GET",headers:{Authorization:"Bearer "+r}}),a=await s.json();return 200==a.status&&a.data?a.data:null}})],callbacks:{async signIn(e){if("google"==e.account.provider){let t=await fetch(`${o}/users/checkIfUserExists.php?email=${e?.user?.email}`);return!1!==(await t.json()).message||`/signup?continue=true&email=${e?.user?.email}&name=${e?.user?.name}&image=${e?.user?.image}`}return{hello:"world"}},jwt:async({token:e,user:t,trigger:r,session:s})=>{if(t){let r=await fetch(`${o}/users/index.php?email=${t?.email}&with=token`),s=await r.json();if(console.log("response: "+s),200!==s.status)return e;e={...e,...s.data}}return"update"===r&&e?{...e,...s}:e},session:async({session:e,token:t})=>t}},p=a()(u)},49303:(e,t,r)=>{e.exports=r(30517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[276,734],()=>r(32504));module.exports=s})();