(()=>{var e={};e.id=42,e.ids=[42],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},42561:e=>{e.exports={style:{fontFamily:"'__Merriweather_9cb816', '__Merriweather_Fallback_9cb816'",fontStyle:"normal"},className:"__className_9cb816",variable:"__variable_9cb816"}},77534:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(94106),r(40598),r(68392),r(35866);var i=r(23191),s=r(88716),a=r(37922),n=r.n(a),l=r(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["(main)",{children:["verification",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,94106)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\verification\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,40598)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,68392)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\verification\\page.js"],p="/(main)/verification/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(main)/verification/page",pathname:"/verification",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},62753:(e,t,r)=>{Promise.resolve().then(r.bind(r,68761))},68761:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(10326),s=r(17577);r(9383);var a=r(54620),n=r.n(a);let l=function(){let[e,t]=(0,s.useState)(""),[r,a]=(0,s.useState)(""),[l,o]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),[p,u]=(0,s.useState)(!1),m=async()=>{if(""==e||""==r){alert("Email and username is required");return}let t=new FormData;t.append("email",e),t.append("username",r),t.append("additionalInformation",l);let i=await fetch("http://localhost/reedboss-server/api/utils/verificationRequest.php",{method:"POST",body:t});201==(await i.json()).status?d(!0):u(!0)};return i.jsx("div",{className:`verificationContainer ${n().className}`,children:c?(0,i.jsxs)(i.Fragment,{children:[i.jsx("br",{}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("div",{className:"confirmImage",children:"✅"}),i.jsx("h1",{children:"Request Recieved!"}),i.jsx("p",{children:"Our dedicated team will carefully review your application to ensure it aligns with our verification criteria. You should get a response within 3-5 days."})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx("h1",{children:"Verification Application"}),i.jsx("p",{children:"Get help with your verification request for reedboss. Information shared will only be used to respond to your request."}),p&&i.jsx("p",{className:"error",children:"An Error Occurred, Try again."}),(0,i.jsxs)("div",{className:"field",children:[(0,i.jsxs)("span",{children:["Email address ",i.jsx("sup",{children:"*"})]}),i.jsx("input",{onChange:e=>t(e.target.value),value:e,type:"email"})]}),(0,i.jsxs)("div",{className:"field",children:[(0,i.jsxs)("span",{children:["Username ",i.jsx("sup",{children:"*"})]}),i.jsx("input",{onChange:e=>a(e.target.value),value:r,type:"email"}),i.jsx("small",{children:"The username can be found on an account's reedboss profile."})]}),(0,i.jsxs)("div",{className:"field",children:[i.jsx("span",{children:"Additional Information"}),i.jsx("textarea",{onChange:e=>o(e.target.value),value:l,type:"email"}),i.jsx("small",{children:"Any other information you'll like to share."})]}),i.jsx("button",{onClick:m,children:"Submit Request"})]})})}},5420:(e,t,r)=>{"use strict";var i=r(39618);t.Z=void 0;var s=i(r(71133)),a=r(10326),n=(0,s.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=n},8910:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(87732),s=r(10326);let a=(0,i.Z)((0,s.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat")},94106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l});var i=r(68570);let s=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\app\(main)\verification\page.js`),{__esModule:a,$$typeof:n}=s;s.default;let l=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\app\(main)\verification\page.js#default`)},57371:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var i=r(670),s=r.n(i)},670:(e,t,r)=>{"use strict";let{createProxy:i}=r(68570);e.exports=i("C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\node_modules\\next\\dist\\client\\link.js")},9383:()=>{},49690:(e,t,r)=>{"use strict";r.d(t,{Analytics:()=>i}),r(17577);function i(e){return null}},36674:(e,t,r)=>{"use strict";r.d(t,{c:()=>l});var i=r(68570);let s=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\node_modules\@vercel\analytics\dist\react\index.mjs`),{__esModule:a,$$typeof:n}=s;s.default;let l=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\node_modules\@vercel\analytics\dist\react\index.mjs#track`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[276,471,578,123],()=>r(77534));module.exports=i})();