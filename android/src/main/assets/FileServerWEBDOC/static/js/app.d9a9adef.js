(function(e){function t(t){for(var a,l,o=t[0],r=t[1],d=t[2],f=0,p=[];f<o.length;f++)l=o[f],s[l]&&p.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var r=i[o];0!==s[r]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=i[0]))}return e}var a={},s={app:0},n=[];function l(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=a,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(i,a,function(t){return e[t]}.bind(null,a));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=r;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"084b":function(e,t,i){"use strict";var a=i("3488"),s=i.n(a);s.a},"0bd1":function(e,t,i){},"0dc8":function(e,t,i){"use strict";var a=i("a7df"),s=i.n(a);s.a},"2edd":function(e,t,i){},"2fe1":function(e,t,i){},3488:function(e,t,i){},"3cb1":function(e,t,i){},"4daa":function(e,t,i){"use strict";var a=i("2edd"),s=i.n(a);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("3b18");var a=i("f64c"),s=(i("55ec"),i("a79d")),n=(i("c119"),i("d865")),l=(i("7f6b"),i("8592")),o=(i("5704"),i("b558")),r=(i("cd17"),i("ed3b")),d=(i("5136"),i("681b")),c=(i("dd48"),i("2fc4")),f=(i("ee00"),i("bb76")),p=(i("0032"),i("e32c")),u=(i("de6a"),i("9a63")),h=(i("d88f"),i("fe2b")),m=(i("6ba6"),i("5efb")),v=(i("8fb1"),i("0c63")),b=(i("fbd8"),i("55f1")),g=(i("1a62"),i("98c5")),k=(i("cadf"),i("551c"),i("f751"),i("097d"),i("2b0e")),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",{staticClass:"g-container"},[i("a-layout-sider",{staticClass:"sider",class:{break:e.breakpoint},attrs:{breakpoint:"xs",collapsedWidth:"0",theme:e.theme,trigger:null,collapsed:e.cancollapse},on:{breakpoint:e.onBreakpoint}},[i("nav-menu"),e.breakpoint?i("div",{staticClass:"trigger",on:{click:function(t){e.isfold=!e.isfold}}},[i("a-icon",{staticClass:"icon",attrs:{type:"menu-fold"}})],1):e._e()],1),i("router-view",{attrs:{breakpoint:e.breakpoint}})],1)},x=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-menu",{attrs:{defaultSelectedKeys:["1"],mode:"vertical",theme:e.theme,selectedKeys:[e.getcurrent]},on:{click:e.handleClick}},[i("a-menu-item",{key:"1"},[i("router-link",{attrs:{to:"/"}},[e._v("文件上传")])],1),i("a-menu-item",{key:"2"},[i("router-link",{attrs:{to:"/manage"}},[e._v("文件管理")])],1),i("a-menu-item",{key:"3"},[i("router-link",{attrs:{to:"/settings"}},[e._v("设置")])],1),i("a-menu-item",{key:"4"},[i("router-link",{attrs:{to:"/help"}},[e._v("使用帮助")])],1),i("a-menu-item",{key:"5"},[i("router-link",{attrs:{to:"/about"}},[e._v("关于")])],1)],1)},C=[],w={name:"NavMenu",data:function(){return{current:"1",theme:"dark"}},computed:{getcurrent:function(){switch(this.$route.path){case"/":return"1";case"/manage":return document.title="文件管理","2";case"/settings":return document.title="设置","3";case"/help":return document.title="使用帮助","4";case"/about":return document.title="关于","5"}}},methods:{handleClick:function(e){this.current=e.key}}},L=w,O=i("2877"),$=Object(O["a"])(L,_,C,!1,null,null,null),j=$.exports,D={name:"App",components:{NavMenu:j},data:function(){return{theme:"dark",breakpoint:!1,isfold:!0}},computed:{cancollapse:function(){return!!this.breakpoint&&!!this.isfold}},methods:{onBreakpoint:function(e){this.breakpoint=e}}},z=D,S=(i("7c55"),Object(O["a"])(z,y,x,!1,null,null,null)),I=S.exports,M=i("bc3a"),B=i.n(M),P=i("8c4f"),E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",[i("a-layout-header",{staticClass:"g-header"},[i("my-progress",{class:[e.breakpoint?"progressbreak":"progress"],attrs:{percent:e.needpersent,subpercent:e.usedpersent,strokeWidth:8}}),i("input",{ref:"inputfile",staticStyle:{display:"nono",width:"0px",height:"0px"},attrs:{type:"file",multiple:"multiple"},on:{change:e.inputfile}}),i("div",{ref:"uploadarea",staticClass:"g-uploadarea"},[i("a-button",{ref:"uploadbtn",staticClass:"g-upload",attrs:{type:"dashed",size:e.size,block:""},on:{click:e.choosefile}},[i("p",{staticClass:"g-upload-drag-icon"},[i("a-icon",{staticClass:"icon",attrs:{type:"inbox"}})],1),i("p",{staticClass:"g-upload-text"},[e._v("点击或拖拽文件到此处上传")]),i("p",{staticClass:"g-upload-hint"},[e._v("支持单个或多个文件，严禁上传被禁止的文件")])])],1)],1),i("a-layout-content",{staticClass:"g-content"},[i("a-list",e._l(e.fileList,function(t,a){return i("upload-item",{key:t.file.lastModified+""+a,attrs:{itemdata:t,index:a,disable:e.disable},on:{removefile:e.removefile}})}),1)],1),i("a-layout-footer",{staticClass:"g-footer"},[i("a-button",{attrs:{icon:"upload",size:e.size,block:""},on:{click:e.uploadfile}},[e._v("上传")])],1)],1)},T=[],F=(i("28a5"),i("7f7f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploaditem"},[i("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[i("a-col",{staticClass:"name",attrs:{xs:5}},[e._v(e._s(this.itemdata.file.name))]),i("a-col",{staticClass:"type",attrs:{xs:4}},[e._v(e._s(this.itemdata.info.type))]),i("a-col",{attrs:{xs:12,sm:14}},[i("my-progress",{attrs:{percent:this.itemdata.info.progress,subpercent:"sub"==this.itemdata.info.status?100:0,errpercent:"err"==this.itemdata.info.status?100:0,strokeWidth:8}})],1),i("a-col",{staticStyle:{"text-align":"center"},attrs:{xs:3,sm:1}},[i("a-button",{attrs:{shape:"circle",icon:"close",size:"small",disabled:this.disable},on:{click:function(t){return e.removefile(e.index)}}})],1)],1)],1)}),U=[],R=(i("c5f6"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"progress-container"},[i("div",{staticClass:"progress-pg",style:{width:this.percent+"%",height:this.strokeWidth+"px"}}),""!=this.subpercent?i("div",{staticClass:"progress-subpg",style:{width:this.subpercent+"%",height:this.strokeWidth+"px"}}):e._e(),""!=this.errpercent?i("div",{staticClass:"progress-errpg",style:{width:this.errpercent+"%",height:this.strokeWidth+"px"}}):e._e()])}),N=[],W={name:"MyProgress",data:function(){return{}},props:{percent:Number,subpercent:Number,errpercent:Number,strokeWidth:Number}},K=W,A=(i("8008"),Object(O["a"])(K,R,N,!1,null,null,null)),q=A.exports,V={name:"UploadItem",components:{MyProgress:q},data:function(){return{}},props:{itemdata:Object,disable:Boolean,index:Number},methods:{removefile:function(){this.$emit("removefile",this.index)}}},G=V,H=(i("0dc8"),Object(O["a"])(G,F,U,!1,null,null,null)),J=H.exports,Q={name:"UploadPanel",components:{UploadItem:J,MyProgress:q},props:{breakpoint:Boolean},data:function(){return{size:"default",fileList:[],uploadindex:0,disable:!1,totalspace:0,usedspace:0,needspace:0,usedpersent:0,needpersent:0}},computed:{},watch:{fileList:function(){this.computesizepersent()},usedspace:function(){this.computesizepersent()}},mounted:function(){var e=this;this.$refs.uploadarea.ondragleave=function(e){e.preventDefault()},this.$refs.uploadarea.ondrop=function(t){t.preventDefault();var i=t.dataTransfer.files;if(!(i.length<1))for(var a=0;a<t.dataTransfer.files.length;a++)if(""!=t.dataTransfer.files[a].type){var s={file:null,info:{progress:0,status:"upload",type:""}},n=e.fileList.length;if(n<1)s.file=t.dataTransfer.files[a],s.info.type=e.getfiletype(t.dataTransfer.files[a].name),e.fileList.push(s);else{for(var l=!0,o=0;o<n;o++)if(t.dataTransfer.files[a].name==e.fileList[o].name&&t.dataTransfer.files[a].lastModified==e.fileList[o].lastModified){l=!1;break}l&&(s.file=t.dataTransfer.files[a],s.info.type=e.getfiletype(t.dataTransfer.files[a].name),e.fileList.push(s))}}},this.$refs.uploadarea.ondragenter=function(e){e.preventDefault()},this.$refs.uploadarea.ondragover=function(e){e.preventDefault()},this.getdiskinfo()},methods:{computesizepersent:function(){for(var e=this.fileList.length,t=this.fileList,i=0,a=0;a<e;a++)"upload"==t[a].info.status&&(i+=t[a].file.size);this.needspace=this.usedspace+i,this.needspace>this.totalspace?(this.needpersent=100,this.$message.error("上传内容过大，请取消部分上传内容",10)):this.needpersent=this.needspace/this.totalspace*100,this.usedpersent=this.usedspace/this.totalspace*100},getdiskinfo:function(){var e=this;this.axios.post("/api/getdiskinfo").then(function(t){e.usedspace=t.data.usedspace,e.totalspace=t.data.totalspace})},getfiletype:function(e){return e.split(".").pop().toLowerCase()},inputfile:function(){var e=this.$refs.inputfile.files;if(!(e.length<1)){for(var t=0;t<e.length;t++)if(""!=e[t].type){var i={file:null,info:{progress:0,status:"upload",type:""}},a=this.fileList.length;if(a<1)i.file=e[t],i.info.type=this.getfiletype(e[t].name),this.fileList.push(i);else{for(var s=!0,n=0;n<a;n++)if(e[t].name==this.fileList[n].name&&e[t].lastModified==this.fileList[n].lastModified){s=!1;break}s&&(i.file=e[t],i.info.type=this.getfiletype(e[t].name),this.fileList.push(i))}}this.$refs.inputfile.value=""}},choosefile:function(){this.$refs.inputfile.dispatchEvent(new MouseEvent("click"))},removefile:function(e){e<=this.uploadindex&&0!=this.uploadindex&&this.uploadindex--,this.fileList.splice(e,1)},uploadfile:function(){var e=this;if(this.fileList.length>0&&this.fileList.length>this.uploadindex){this.disable=!0;var t={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){var i=t.loaded/t.total*100|0;e.fileList[e.uploadindex].info.progress=i}},i=new FormData;i.append("uploadfile",this.fileList[this.uploadindex].file,this.fileList[this.uploadindex].file.name),this.axios.post("/upload",i,t).then(function(t){e.fileList[e.uploadindex].info.status="sub",e.uploadindex++,e.uploadindex<e.fileList.length?e.uploadfile():e.disable=!1,e.getdiskinfo()}).catch(function(t){e.fileList[e.uploadindex].info.status="err",e.uploadindex++,e.$message.error("上传失败，请检查网络连接、浏览器地址或是否已关闭文件服务！",5),e.uploadindex<e.fileList.length?e.uploadfile():e.disable=!1})}}}},Y=Q,X=(i("be9e"),Object(O["a"])(Y,E,T,!1,null,null,null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",[i("a-layout-header",{staticClass:"g-header"},[i("my-progress",{staticClass:"progress",class:[e.breakpoint?"progressbreak":"progress"],attrs:{percent:e.computediskinfo,strokeWidth:8}}),i("a-row",{staticStyle:{"line-height":"1.5"}},[i("a-col",{attrs:{xs:12}},[i("a-button-group",[i("a-button",{attrs:{type:"primary",icon:"check"},on:{click:e.checkAll}}),i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){e.mkdirvisible=!e.mkdirvisible}}},[e._v(e._s(e.breakpoint?"":"新建文件夹"))]),i("a-modal",{attrs:{title:"新建文件夹",confirmLoading:e.mkdirconfirmLoading,okButtonProps:{props:{disabled:e.mkdirOkdisable}},maskClosable:!1},on:{ok:e.handlemkdirOk,cancel:function(t){e.mkdirname=""}},model:{value:e.mkdirvisible,callback:function(t){e.mkdirvisible=t},expression:"mkdirvisible"}},[i("a-input",{ref:"dirinput",attrs:{placeholder:"新文件夹名称"},on:{change:e.checkdirname,blur:e.checkdirname},model:{value:e.mkdirname,callback:function(t){e.mkdirname=t},expression:"mkdirname"}}),e.mkdirtipsvisible?i("p",{staticStyle:{color:"red"}},[e._v("输入正确的文件夹名称")]):e._e()],1)],1)],1),i("a-col",{attrs:{xs:12}},[i("div",{staticStyle:{float:"right"}},[i("a-button-group",[i("a-button",{attrs:{type:"primary",icon:"cloud-upload"},on:{click:function(t){e.uploadvisible=!0}}}),i("a-modal",{staticClass:"uploadmodal",attrs:{title:"上传文件",confirmLoading:e.uploadconfirmLoading},on:{ok:e.uploadfileOk,cancel:e.cancelupload},model:{value:e.uploadvisible,callback:function(t){e.uploadvisible=t},expression:"uploadvisible"}},[i("div",[i("input",{ref:"inputfile",staticStyle:{display:"nono",width:"0px",height:"0px"},attrs:{type:"file"},on:{change:e.inputfile}}),i("a-button",{attrs:{disabled:e.uploadbtndisable},on:{click:e.chooseuploadfile}},[i("a-icon",{attrs:{type:"upload"}}),e._v("Upload\n                ")],1),i("span",[e._v(e._s(null==e.uploadfile?"暂未选择文件":e.uploadfile.name))])],1),i("p",[e._v("文件会上传在当前文件夹下")]),i("p",[e._v("一次只能上传一个文件")])]),i("a-button",{attrs:{type:"primary",icon:"cloud-download"},on:{click:e.downloadselectfile}}),i("a-modal"),i("a-button",{attrs:{type:"primary",icon:"delete"},on:{click:function(t){e.delfilevisible=!0}}}),i("a-modal",{attrs:{title:"确认",confirmLoading:e.delfileconfirmLoading},on:{ok:e.removeAllSelectFile},model:{value:e.delfilevisible,callback:function(t){e.delfilevisible=t},expression:"delfilevisible"}},[i("p",[e._v("确认是否删除选中的文件与文件夹")])])],1)],1)])],1),i("a-row",{staticClass:"filepanel",attrs:{type:"flex",justify:"space-around",align:"middle"}},[i("a-col",{attrs:{xs:15,sm:11}},[e._v("文件名")]),i("a-col",{attrs:{xs:6}},[e._v("文件大小")]),i("a-col",{attrs:{xs:0,sm:6}},[e._v("最后修改时间")]),i("a-col",{staticStyle:{"text-align":"center"},attrs:{xs:3,sm:1}},[e._v("更多")])],1)],1),i("a-layout-content",{staticClass:"g-content"},[i("a-spin",{attrs:{spinning:e.spinning}},[i("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"}),e.hasPerent?i("file-item",{attrs:{type:"perent"},nativeOn:{click:function(t){return e.backPerent(t)}}}):e._e(),e._l(e.diritem,function(t,a){return i("file-item",{key:t+""+a,attrs:{itemdata:t,index:a,type:"folder",breakpoint:e.breakpoint,ischecked:e.isChecked("folder",a)},on:{chooseFileItem:e.chooseFileItem,ddelfile:e.showdelmodal,removefile:e.showremovemodal,renamefile:e.showrenamemodal,downloadfile:e.downloadfile,openfile:e.openfile},nativeOn:{click:function(i){return e.viewDir(t)}}})}),e._l(e.fileitem,function(t,a){return i("file-item",{key:t.size+""+a,attrs:{index:a,itemdata:t,type:"file",breakpoint:e.breakpoint,ischecked:e.isChecked("file",a)},on:{chooseFileItem:e.chooseFileItem,ddelfile:e.showdelmodal,removefile:e.showremovemodal,renamefile:e.showrenamemodal,downloadfile:e.downloadfile,openfile:e.openfile}})})],2),i("a-modal",{attrs:{title:"删除文件",confirmLoading:e.ddelfileconfirmLoading,maskClosable:!1},on:{ok:e.ddelfileOK,cancel:e.cancelddel},model:{value:e.ddelfilevisible,callback:function(t){e.ddelfilevisible=t},expression:"ddelfilevisible"}},[i("p",[e._v("是否删除文件")]),i("p",[e._v(e._s(e.getddfilename))])]),i("a-modal",{attrs:{title:"移动文件",confirmLoading:e.removefileconfirmLoading,okButtonProps:{props:{disabled:e.hasremoveselect}}},on:{ok:e.removefileOk,cancel:e.cancelremove},model:{value:e.removefilevisible,callback:function(t){e.removefilevisible=t},expression:"removefilevisible"}},[i("p",[e._v(e._s(e.getddfilename))]),i("a-tree",{attrs:{loadData:e.onLoadData,treeData:e.treeData},on:{select:e.selecttodir}})],1),i("a-modal",{attrs:{title:"文件重命名",confirmLoading:e.renamefileconfirmLoading,okButtonProps:{props:{disabled:e.renameOkdisable}},maskClosable:!1},on:{ok:e.renamefileOk,cancel:e.cancelrename},model:{value:e.renamefilevisible,callback:function(t){e.renamefilevisible=t},expression:"renamefilevisible"}},[i("p",[e._v(e._s(e.getddfilename))]),i("a-input",{attrs:{placeholder:"新文件名称"},on:{change:e.checkfilename,blur:e.checkfilename},model:{value:e.renamename,callback:function(t){e.renamename=t},expression:"renamename"}}),e.renametipsvisible?i("p",[e._v("输入合格的文件名")]):e._e()],1)],1)],1)},te=[],ie=i("75fc"),ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fileitem"},[i("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},["perent"==e.type?i("span",{staticStyle:{float:"left"}},[i("a-icon",{attrs:{type:"up"}})],1):[i("a-col",{staticClass:"name",attrs:{xs:15,sm:11}},[i("a-checkbox",{attrs:{checked:e.ischecked},on:{change:e.choosefileitem,click:function(e){e.stopPropagation()}}}),i("a-icon",{staticStyle:{"font-size":"24px",margin:"0px 5px"},attrs:{theme:"filled",type:"file"==e.type?"file":"folder"}}),e._v("\n        "+e._s("file"==e.type?this.itemdata.name:this.itemdata)+"\n      ")],1),i("a-col",{staticClass:"size",attrs:{xs:6}},[e._v(e._s("file"==e.type?e.getfilesize:"-"))]),i("a-col",{attrs:{xs:0,sm:6}},[e._v(e._s("file"==e.type?e.gettime:"-"))]),i("a-col",{staticStyle:{"text-align":"center"},attrs:{xs:3,sm:1}},[i("a-popover",{attrs:{placement:"topRight"},model:{value:e.popover,callback:function(t){e.popover=t},expression:"popover"}},[i("template",{slot:"content"},[i("a-button-group",["file"==e.type?i("a-button",{attrs:{icon:"login",size:"small"},on:{click:e.openfile}},[e._v(e._s(e.breakpoint?"":"打开"))]):e._e(),i("a-button",{attrs:{icon:"rollback",size:"small"},on:{click:e.removefile}},[e._v(e._s(e.breakpoint?"":"移动"))]),i("a-button",{attrs:{icon:"edit",size:"small"},on:{click:e.renamefile}},[e._v(e._s(e.breakpoint?"":"重命名"))]),"file"==e.type?i("a-button",{attrs:{icon:"cloud-download",size:"small"},on:{click:e.downloadfile}},[e._v(e._s(e.breakpoint?"":"下载"))]):e._e(),i("a-button",{attrs:{icon:"delete",size:"small"},on:{click:e.ddelfile}},[e._v(e._s(e.breakpoint?"":"删除"))])],1)],1),i("a-button",{attrs:{shape:"circle",icon:"ellipsis",size:"small"},on:{click:function(t){t.stopPropagation(),e.popover=!0}}})],2)],1)]],2)],1)},se=[],ne={name:"FileItem",data:function(){return{popover:!1}},props:{breakpoint:Boolean,itemdata:Object|String,type:String,show:Boolean,index:Number,ischecked:Boolean},computed:{getfilesize:function(){var e=this.itemdata.size,t="";return t=e<1048576?(e/1024).toFixed(2)+"KB":1048576==e?"1MB":e>1048576&&e<1073741824?(e/1048576).toFixed(2)+"MB":e>1048576&&1073741824==e?"1GB":e>1073741824&&e<1099511627776?(e/1073741824).toFixed(2)+"GB":"文件超过1TB",t},gettime:function(){var e=new Date(this.itemdata.time),t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),s=e.getHours(),n=e.getMinutes();return i<10&&(i="0"+i),a<10&&(a="0"+a),s<10&&(s="0"+s),n<10&&(n="0"+n),t+"-"+i+"-"+a+" "+s+":"+n}},methods:{choosefileitem:function(e){this.$emit("chooseFileItem",this.type,this.index,e.target.checked)},ddelfile:function(){this.$emit("ddelfile",this.type,this.index)},renamefile:function(){this.$emit("renamefile",this.type,this.index)},removefile:function(){this.$emit("removefile",this.type,this.index)},downloadfile:function(){this.$emit("downloadfile",this.type,this.index)},openfile:function(){this.$emit("openfile",this.type,this.index)}}},le=ne,oe=(i("af56"),Object(O["a"])(le,ae,se,!1,null,null,null)),re=oe.exports,de={name:"Manage",components:{MyProgress:q,FileItem:re},props:{breakpoint:Boolean},data:function(){return{dirs:[],fileitem:[],diritem:[],mkdirname:"",mkdirvisible:!1,mkdirconfirmLoading:!1,mkdirtipsvisible:!1,mkdirOkdisable:!0,uploadfile:null,uploadvisible:!1,uploadconfirmLoading:!1,uploadbtndisable:!1,delfilevisible:!1,delfileconfirmLoading:!1,spinning:!1,selectdir:[],selectfile:[],ddelfilevisible:!1,ddelfileconfirmLoading:!1,renamefilevisible:!1,renamefileconfirmLoading:!1,renamename:"",renameOkdisable:!0,renametipsvisible:!1,removefilevisible:!1,removefileconfirmLoading:!1,hasremoveselect:!0,newpath:[],ddselecttype:"",ddselectindex:null,treeData:[],totalspace:0,usedspace:0}},computed:{hasPerent:function(){return!(this.dirs.length<=1)},getddfilename:function(){if(this.fileitem.length>0||this.diritem.length>0){if("file"===this.ddselecttype)return this.fileitem[this.ddselectindex].name;if("folder"===this.ddselecttype)return this.diritem[this.ddselectindex]}return"没有文件被选中"},computediskinfo:function(){return this.usedspace/this.totalspace*100}},mounted:function(){var e=this;this.axios.post("/api/getuploaddirinfo").then(function(t){e.dirs=t.data.dirs,e.fileitem=t.data.allfileinfo.files,e.diritem=t.data.allfileinfo.directories}),this.getdiskinfo()},methods:{deletewarning:function(){},handlemkdirOk:function(){var e=this;this.mkdirconfirmLoading=!0;var t=this.$refs.dirinput.value;""==t?this.mkdirtipsvisible=!0:(this.mkdirtipsvisible=!1,this.axios.post("/api/mkdir",{path:this.dirs,dirname:t}).then(function(t){"suss"==t.data&&(e.mkdirvisible=!1),e.mkdirconfirmLoading=!1,e.mkdirname="",e.renewDirInfo()}))},checkdirname:function(e){/[\\\/:\*\?"<>\|\.]/.test(this.mkdirname)||""===this.mkdirname?(this.mkdirtipsvisible=!0,this.mkdirOkdisable=!0):(this.mkdirtipsvisible=!1,this.mkdirOkdisable=!1)},backPerent:function(e){var t=this;this.dirs.pop(),this.spinning=!0,this.axios.post("/api/getdirectoryallinfo",{path:this.dirs}).then(function(e){t.fileitem=e.data.files,t.diritem=e.data.directories,t.spinning=!1,t.spinning=!1,t.selectdir=[],t.selectfile=[],t.ddselecttype="",t.ddselectindex=null}),this.getdiskinfo()},viewDir:function(e){var t=this;this.dirs.push(e),this.spinning=!0,this.axios.post("/api/getdirectoryallinfo",{path:this.dirs}).then(function(e){t.fileitem=e.data.files,t.diritem=e.data.directories,t.spinning=!1,t.selectdir=[],t.selectfile=[],t.ddselecttype="",t.ddselectindex=null}),this.getdiskinfo()},renewDirInfo:function(){var e=this;this.spinning=!0,this.axios.post("/api/getdirectoryallinfo",{path:this.dirs}).then(function(t){e.fileitem=t.data.files,e.diritem=t.data.directories,e.spinning=!1,e.ddselecttype="",e.ddselectindex=null}),this.getdiskinfo()},chooseFileItem:function(e,t,i){if("file"===e){var a=this.selectfile.length;if(i){for(var s=0;s<a;s++)if(this.selectfile[s]==t)return;this.selectfile.push(t)}else for(var n=0;n<this.selectfile.length;n++)this.selectfile[n]==t&&(this.selectfile.splice(n,1),n--)}if("folder"===e){var l=this.selectdir.length;if(i){for(var o=0;o<l;o++)if(this.selectdir[o]==t)return;this.selectdir.push(t)}else for(var r=0;r<this.selectdir.length;r++)this.selectdir[r]==t&&(this.selectdir.splice(r,1),r--)}},removeAllSelectFile:function(){for(var e=this,t=[],i=this.selectdir.length,a=0;a<i;a++)t.push(this.diritem[this.selectdir[a]]);i=this.selectfile.length;for(var s=0;s<i;s++)t.push(this.fileitem[this.selectfile[s]].name);this.delfileconfirmLoading=!0,this.axios.post("/api/delallfile",{path:this.dirs,names:t}).then(function(t){e.delfileconfirmLoading=!1,e.delfilevisible=!1,e.selectdir=[],e.selectfile=[],e.renewDirInfo()})},chooseuploadfile:function(){this.$refs.inputfile.dispatchEvent(new MouseEvent("click"))},inputfile:function(){var e=this.$refs.inputfile.files;e.length<1||(this.uploadfile=e[0])},uploadfileOk:function(){var e=this;this.uploadconfirmLoading=!0,this.uploadbtndisable=!0;var t={headers:{"Content-Type":"multipart/form-data"}},i=new FormData;i.append("path",this.dirs),i.append("uploadfile",this.uploadfile,this.uploadfile.name),this.axios.post("/api/uploadtodir",i,t).then(function(t){e.uploadconfirmLoading=!1,e.uploadbtndisable=!1,e.uploadvisible=!1,e.$refs.inputfile.value="",e.uploadfile=null,e.renewDirInfo()})},cancelupload:function(){this.$refs.inputfile.value="",this.uploadfile=null},isChecked:function(e,t){if("file"==e){for(var i=this.selectfile.length,a=0;a<i;a++)if(this.selectfile[a]===t)return!0}else if("folder"==e)for(var s=this.selectdir.length,n=0;n<s;n++)if(this.selectdir[n]===t)return!0;return!1},checkAll:function(){for(var e=this.diritem.length,t=0;t<e;t++)this.selectdir.push(t);e=this.fileitem.length;for(var i=0;i<e;i++)this.selectfile.push(i)},showremovemodal:function(e,t){this.ddselecttype=e,this.ddselectindex=t,this.treeData.push({title:this.dirs[0],key:"0"}),this.removefilevisible=!0},removefileOk:function(){var e=this;this.removefileconfirmLoading=!0,console.log(this.getddfilename),this.axios.post("/api/removeto",{oldpath:this.dirs,newpath:this.newpath,name:this.getddfilename}).then(function(t){e.removefileconfirmLoading=!1,e.removefilevisible=!1,e.treeData=[],e.hasremoveselect=!0,e.renewDirInfo()})},cancelremove:function(){this.treeData=[]},onLoadData:function(e){for(var t=this,i=e.eventKey.split("-"),a=[],s=this.treeData,n=0;n<i.length;n++)a.push(s[parseInt(i[n])].title),s=s[parseInt(i[n])].children;return this.axios.post("/api/getdirs",{path:a}).then(function(i){if("fail"!=i.data){for(var a=[],s=0;s<i.data.length;s++)a.push({title:i.data[s],key:e.eventKey+"-"+s});e.dataRef.children=a,t.treeData=Object(ie["a"])(t.treeData)}})},selecttodir:function(e,t){for(var i=e[0].split("-"),a=[],s=this.treeData,n=0;n<i.length;n++)a.push(s[parseInt(i[n])].title),s=s[parseInt(i[n])].children;this.newpath=a,this.hasremoveselect=!1},showdelmodal:function(e,t){this.ddelfilevisible=!0,this.ddselecttype=e,this.ddselectindex=t},ddelfileOK:function(){var e=this,t=[];"file"===this.ddselecttype?t.push(this.fileitem[this.ddselectindex].name):"folder"===this.ddselecttype&&t.push(this.diritem[this.ddselectindex]),this.ddelfileconfirmLoading=!0,this.axios.post("/api/delallfile",{path:this.dirs,names:t}).then(function(t){e.ddelfilevisible=!1,e.ddelfileconfirmLoading=!1,e.selectdir=[],e.selectfile=[],e.renewDirInfo()})},cancelddel:function(){},showrenamemodal:function(e,t){this.renamefilevisible=!0,this.ddselecttype=e,this.ddselectindex=t},checkfilename:function(){/^\.|[\\\/:\*\?"<>]|\.$/.test(this.renamename)?(this.renameOkdisable=!0,this.renametipsvisible=!0):(this.renametipsvisible=!1,this.renameOkdisable=!1)},renamefileOk:function(){var e=this;this.renamefileconfirmLoading=!0;var t="";"file"===this.ddselecttype?t=this.fileitem[this.ddselectindex].name:"folder"===this.ddselecttype&&(t=this.diritem[this.ddselectindex]),this.axios.post("/api/rename",{path:this.dirs,oldname:t,newname:this.renamename}).then(function(t){e.renamefilevisible=!1,e.renamefileconfirmLoading=!1,e.renameOkdisable=!1,e.renamename="",e.renametipsvisible=!1,e.selectdir=[],e.selectfile=[],e.renewDirInfo()})},cancelrename:function(){this.renamename=""},downloadfile:function(e,t){this.ddselecttype=e,this.ddselectindex=t;var i=this.getddfilename;this.axios.post("/api/download",{path:this.dirs,name:this.getddfilename},{responseType:"blob"}).then(function(e){var t=new Blob([e.data],{type:"application/octet-stream"});if("download"in document.createElement("a")){var a=document.createElement("a");a.download=i,a.style.display="none;width:0px;height:0px",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}else navigator.msSaveBlob(t,fileName)})},openfile:function(e,t){var i=this;this.ddselecttype=e,this.ddselectindex=t,this.axios.post("/api/getfileinfo",{path:this.dirs,name:this.getddfilename}).then(function(e){if("fail"!=e.data){console.log(e.data);var t=document.createElement("a"),a="/api/openfile?id="+e.data.id+"&name="+i.getddfilename;t.style.display="none;width:0px;height:0px",t.href=a,t.target="_blank",document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}})},downloadselectfile:function(){var e=this;if(this.selectdir.length>0)this.$message.error("无法下载文件夹");else for(var t=this.selectfile,i=function(i){var a=e.fileitem[parseInt(t[i])].name;e.axios.post("/api/download",{path:e.dirs,name:a},{responseType:"blob"}).then(function(e){var t=new Blob([e.data],{type:"application/octet-stream"});if("download"in document.createElement("a")){var i=document.createElement("a");i.download=a,i.style.display="none;width:0px;height:0px",i.href=URL.createObjectURL(t),document.body.appendChild(i),i.click(),URL.revokeObjectURL(i.href),document.body.removeChild(i)}else navigator.msSaveBlob(t,fileName)})},a=0;a<t.length;a++)i(a)},getdiskinfo:function(){var e=this;this.axios.post("/api/getdiskinfo").then(function(t){e.usedspace=t.data.usedspace,e.totalspace=t.data.totalspace})}}},ce=de,fe=(i("4daa"),Object(O["a"])(ce,ee,te,!1,null,null,null)),pe=fe.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",{staticClass:"about-content"},[a("img",{attrs:{src:i("cf05"),width:"200px",height:"200px"}}),a("p",{staticClass:"version"},[e._v("Version："+e._s(e.version))]),a("p",[e._v("本软件用于文件上传，远程文件管理、访问等功能")]),a("p",[e._v("由setTile lzjyzq2制作")]),a("p",[e._v("可以扫描下方二维码进群反馈交流")]),a("img",{attrs:{src:i("643e"),width:"200px",height:"274px"}}),a("div",[a("a-button",{staticStyle:{margin:"5px 0px"}},[a("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5UiaOFF",target:"_blank"}},[e._v("或点击此处加入")])])],1),a("p",[e._v("觉得好用的话，可以捐助~~~")]),a("img")])},he=[],me={name:"About",data:function(){return{version:"-"}},mounted:function(){this.getVersionInfo()},methods:{getVersionInfo:function(){var e=this;this.axios.get("/api/getversioninfo").then(function(t){"fail"!=t.data&&(e.version=t.data.version)})}}},ve=me,be=(i("5795"),Object(O["a"])(ve,ue,he,!1,null,null,null)),ge=be.exports,ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout-content",{staticClass:"help-content"},[i("a-divider",{attrs:{orientation:"left"}},[e._v("注意事项")]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("注意事项")]),i("div",{staticClass:"content"},[i("p",[e._v("●由于安全考虑，建议仅在局域网环境下运行。")]),i("p",[e._v("●当前设置仅支持清理缓存。")])])]),i("a-divider",{attrs:{orientation:"left"}},[e._v("文件上传")]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("上传路径")]),i("p",{staticClass:"content"},[e._v("●"+e._s(e.uploadpath))])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("上传文件类型")]),i("p",{staticClass:"content"},[e._v("●不支持文件夹、无扩展名、或不常见的扩展类型的文件。")])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("操作")]),i("div",{staticClass:"content"},[i("p",[e._v("●拖拽或点击上传区域选择文件，支持多选。")]),i("p",[e._v("●当上传文件大小超过剩余容量容量时，会显示通知。请自行移除部分上传文件，以免上传出错。")]),i("p",[e._v("●当开始上传后，会禁止移除上传文件。")])])]),i("a-divider",{attrs:{orientation:"left"}},[e._v("文件管理")]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("上传文件")]),i("div",{staticClass:"content"},[i("p",[e._v("●不支持文件夹、无扩展名、或不常见的扩展类型的文件。")]),i("p",[e._v("●仅支持单个文件上传。")]),i("p",[e._v("●上传目录为当前浏览文件夹。")])])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("下载文件")]),i("div",{staticClass:"content"},[i("p",[e._v("●当选中文件包括文件夹时，无法下载。")]),i("p",[e._v("●下载多个文件时，若浏览器提示是否允许下载多个文件，请点击允许。")])])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("删除文件")]),i("div",{staticClass:"content"},[i("p",[e._v("●删除选中的文件夹和文件。")])])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("新建文件夹")]),i("div",{staticClass:"content"},[i("p",[e._v('●不允许新文件夹名称包含.\\/:*?"<>|')])])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("重命名文件")]),i("div",{staticClass:"content"},[i("p",[e._v('●不允许新文件夹名称包含\\/:*?"<>|')]),i("p",[e._v("●(.)不允许在开头和结尾。")])])]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("打开文件")]),i("div",{staticClass:"content"},[i("p",[e._v("●能被浏览器浏览的文件，能被正常打开浏览。（图片、txt文本文件、常见格式视频等）")])])]),i("a-divider",{attrs:{orientation:"left"}},[e._v("设置")]),i("div",{staticClass:"helpitem"},[i("p",{staticClass:"title"},[e._v("清理临时文件与缓存")]),i("div",{staticClass:"content"},[i("p",[e._v("●清理软件运行时产生的临时文件与缓存。")])])])],1)},ye=[],xe={name:"Help",data:function(){return{uploadpath:"-"}},mounted:function(){this.getdefaultuploadpath()},methods:{getdefaultuploadpath:function(){var e=this;this.axios.get("/api/getdefaultuploadpath").then(function(t){"fail"!=t.data&&(e.uploadpath=t.data)})}}},_e=xe,Ce=(i("084b"),Object(O["a"])(_e,ke,ye,!1,null,null,null)),we=Ce.exports,Le=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout-content",{staticClass:"settings-content"},[i("div",{staticClass:"settingpanel"},[i("a-divider",{attrs:{orientation:"left"}},[e._v("存储")]),i("div",{staticClass:"settingitem"},[i("p",{staticClass:"title"},[e._v("缓存")]),i("a-button",{attrs:{icon:"delete"},on:{click:e.clearTempData}},[e._v("清理缓存")])],1)],1)])},Oe=[],$e={name:"Settings",data:function(){return{}},methods:{clearTempData:function(){var e=this;this.axios.post("/api/cleartempdata").then(function(t){"suss"==t.data&&e.$message.info("清理缓存成功")})}}},je=$e,De=(i("e060"),Object(O["a"])(je,Le,Oe,!1,null,"6cd6c91e",null)),ze=De.exports;k["a"].use(P["a"]);var Se=new P["a"]({mode:"history",routes:[{path:"/",name:"uploadpanel",component:Z,meta:{title:"文件上传"}},{path:"/manage",name:"manage",component:pe,meta:{title:"文件管理"}},{path:"/settings",name:"settings",component:ze,meta:{title:"设置"}},{path:"/about",name:"about",component:ge,meta:{title:"关于"}},{path:"/help",name:"help",component:we,meta:{title:"使用帮助"}}]});k["a"].use(g["a"]),k["a"].use(b["a"]),k["a"].use(v["a"]),k["a"].use(m["a"]),k["a"].use(h["b"]),k["a"].use(u["a"]),k["a"].use(p["a"]),k["a"].use(f["a"]),k["a"].use(c["a"]),k["a"].use(d["a"]),k["a"].use(r["a"]),k["a"].use(o["a"]),k["a"].use(l["a"]),k["a"].use(n["a"]),k["a"].use(s["a"]),B.a.defaults.withCredentials=!0,k["a"].prototype.axios=B.a,k["a"].prototype.$message=a["a"],k["a"].config.productionTip=!1,new k["a"]({router:Se,render:function(e){return e(I)}}).$mount("#app"),Se.beforeEach(function(e,t,i){e.meta.title&&(document.title=e.meta.title),i()})},5795:function(e,t,i){"use strict";var a=i("7513"),s=i.n(a);s.a},"5c48":function(e,t,i){},"643e":function(e,t,i){e.exports=i.p+"static/img/joinQR.b99c3cd6.jpg"},7513:function(e,t,i){},"7c55":function(e,t,i){"use strict";var a=i("5c48"),s=i.n(a);s.a},8008:function(e,t,i){"use strict";var a=i("0bd1"),s=i.n(a);s.a},8059:function(e,t,i){},a7df:function(e,t,i){},af56:function(e,t,i){"use strict";var a=i("8059"),s=i.n(a);s.a},be9e:function(e,t,i){"use strict";var a=i("2fe1"),s=i.n(a);s.a},cf05:function(e,t,i){e.exports=i.p+"static/img/logo.c133518d.png"},e060:function(e,t,i){"use strict";var a=i("3cb1"),s=i.n(a);s.a}});