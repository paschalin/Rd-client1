(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7774],{47774:function(e,t,o){"use strict";o.r(t);var i=o(57437);o(40758);var a=o(2265),l=o(88497),c=o(67602);o(66173),o(31760),t.default=function(e){let{uploadImages:t,setuploadImages:o,content:n,setcontent:s,setrawEntityContent:r,editorState:p,seteditorState:m}=e,[u,d]=(0,a.useState)(!1);return(0,a.useLayoutEffect)(()=>{document.querySelectorAll("iframe").forEach(e=>{e.setAttribute("scrolling","no")})},[]),(0,i.jsx)("div",{children:(0,i.jsx)(c.Editor,{editorState:p,toolbarClassName:"editorToolbar ".concat(u?"fixed":""),too:!0,wrapperClassName:"editorWrapper",editorClassName:"editorMain",toolbar:{options:["inline","blockType","fontSize","list","textAlign","history","embedded","link","emoji","image"],inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!1,popupClassName:"editorPopups"},history:{inDropdown:!0},emoji:{className:"editorEmoji"},image:{uploadCallback:e=>new Promise((t,i)=>{let a={file:e,localSrc:URL.createObjectURL(e)};o(e=>[...e,a]),t({data:{link:a.localSrc}})}),className:"uploadImage",popupClassName:"editorPopups",previewImage:!0,alignmentEnabled:!1,inputAccept:"image/jpeg,image/jpg,image/png,image/svg",urlEnabled:!1,defaultSize:{height:"100%",width:"100%",margin:"0 auto"}},embedded:{embedCallback:e=>(function(e){let t="";if(e.includes("youtube.com")||e.includes("youtu.be")){let o=e.match(/(?:\?v=|\/embed\/|\.be\/)([\w\-\_]+)/)[1];t="https://www.youtube.com/embed/".concat(o)}else if(e.includes("vimeo.com")){let o=e.match(/vimeo(?:.com\/video\/|\/)(\d+)/)[1];t="https://player.vimeo.com/video/".concat(o)}else if(e.includes("twitter.com")){let o=e.match(/\/status\/(\d+)/)[1];t="https://twitframe.com/show?url=https://twitter.com/anyuser/status/".concat(o)}else if(e.includes("facebook.com")){let o=e.match(/facebook\.com\/([^\/]+)\/posts\/(\d+)/)[2];t="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/".concat(o)}else if(e.includes("instagram.com")){let o=e.replace(/(\/\?utm.*)|\/$/,"");t="https://www.instagram.com/p/".concat(o.split("/").pop(),"/embed")}else t=e;return t})(e),popupClassName:"editorPopups",defaultSize:{height:"auto",width:"auto"}}},onEditorStateChange:e=>{m(e),r((0,l.convertToRaw)(e.getCurrentContent()))},placeholder:"Write your story..."})})}},40758:function(){},66173:function(){}}]);