(function(t){function e(e){for(var i,r,c=e[0],o=e[1],d=e[2],m=0,h=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/win-mac-keymap/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=n("5c96"),a=n.n(s),r=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticStyle:{"margin-top":"100px"}},[t._v("当前系统 "+t._s(t.userOs)+" "),n("i",{staticClass:"el-icon-sort",staticStyle:{"font-size":"15px"},on:{click:t.changeOs}})]),n("HotkeyInput",{staticClass:"hotkey",staticStyle:{"margin-top":"30px"},attrs:{hotkey:t.keys,verify:t.handleHotkeyVerify,placeholder:"请按需要转换的按键，支持组合按键",keychange:t.keysChange},on:{"update:hotkey":function(e){t.keys=e}}}),void 0!=t.mapKey.text?n("div",[n("h1",[t._v(t._s(t.mapKey.text))]),n("b",[t._v(t._s(t.mapKey.desc))])]):t._e()],1)}),c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shortcut-key-input",class:{cursor:t.focus},style:t.$props.style,attrs:{tabindex:"0"},on:{focus:t.handleFocus,blur:function(e){t.focus=!1},keydown:t.handleKeydown}},["{}"!==JSON.stringify(t.curKey)?[n("span",[t._v(t._s(t.curKey.text)+" "),n("i",{on:{click:t.handleDeleteKey}})])]:n("div",{staticClass:"placeholder"},[t._v(t._s(t.placeholder))])],2)},d=[];const l=Array.from({length:10},(t,e)=>"Digit"+(e+1)),m=Array.from({length:10},(t,e)=>"Numpad"+(e+1)),h=Array.from({length:26},(t,e)=>"Key"+String.fromCharCode(e+65).toUpperCase()),f=Array.from({length:12},(t,e)=>"F"+(e+1)),C=["Enter","Insert","Backspace","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Backquote","Slash","Backslash","Comma","Equal","Minus","Meta","Semicolon"],u=["Shift","ShiftLeft","ShiftRight","Control","ControlLeft","ControlRight","Alt","AltLeft","AltRight"];var p={name:"HotKeyInput",props:{hotkey:{type:Object,required:!0},verify:{type:Function,default:()=>!0},keychange:{type:Function,default:()=>({text:"Not Found",desc:"Not Found"})},placeholder:{type:String,default:""},max:{type:[String,Number],default:0},range:{type:Array,default:()=>["NUMBER","NUMPAD","ABC","FN","SPECIAL"]}},data(){return{focus:!1,curKey:this.hotkey,keyRange:[]}},watch:{list:function(t){t.length&&(this.focus=!1),this.$emit("update:hotkey",this.list)},hotkey:{handler:function(t){if(!t.length)return;const e=[];t.forEach(t=>{const n=t.split("+"),i={altKey:n.includes("Alt"),ctrlKey:n.includes("Control"),shiftKey:n.includes("Shift"),key:n[n.length-1],code:"Key"+n[n.length-1].toUpperCase()};e.push({text:n.reduce((t,e,n)=>(n&&(t+="+"),i.key===e?t+=e.toUpperCase():t+=e,t),""),controlKey:i})}),this.list=e},immediate:!0},range:{handler:function(t){const e={NUMBER:l,NUMPAD:m,ABC:h,FN:f,SPECIAL:C};t.forEach(t=>{this.keyRange=this.keyRange.concat(e[t.toUpperCase()])})},immediate:!0}},methods:{handleFocus(){this.curKey||(this.focus=!0)},handleDeleteKey(){this.curKey={}},handleKeydown(t){const{altKey:e,ctrlKey:n,shiftKey:i,metaKey:s,key:a,code:r}=t;if(console.log(a,r),!u.includes(a)){if(!this.keyRange.includes(r))return;let t="";if([{key:n,text:"Ctrl"},{key:s,text:"Command"},{key:i,text:"Shift"},{key:e,text:"Alt"}].forEach(e=>{e.key&&(t&&(t+=" + "),t+=e.text)}),a){t&&(t+=" + ");let e=a.toUpperCase();switch(r.toUpperCase()){case"ARROWUP":e="↑";break;case"ARROWDOWN":e="↓";break;case"ARROWLEFT":e="←";break;case"ARROWRIGHT":e="→";break;case"ENTER":e="Enter";break;case"BACKSPACE":e="Backspace";break;case"BACKQUOTE":e="`";break;case"INSERT":e="Insert";break;case"BACKSLASH":e="\\";break;case"SEMICOLON":e=";";break}-1!=r.indexOf("Key")?e=r.replace("Key",""):-1!=r.indexOf("Digit")&&(e=r.replace("Digit","")),t+=e}this.addHotkey({text:t,controlKey:{altKey:e,ctrlKey:n,shiftKey:i,key:a,code:r}})}t.preventDefault()},addHotkey(t){t.text=t.text.replace("Shift + +","+"),this.curKey=t,this.keychange(t.text)}}},w=p,S=(n("b7ff"),n("2877")),y=Object(S["a"])(w,o,d,!1,null,"4dbc34e8",null),O=y.exports,k={name:"App",components:{HotkeyInput:O},data(){return{keys:{},userAgent:"",userOs:"",keyMapList:[{win:"Alt + `",mac:"Control + V",desc:"显示版本控制常用操作菜单弹出层"},{win:"Alt + F1",mac:"Option + F1",desc:"显示当前文件选择目标弹出层，弹出层中有很多目标可以进行选择"},{win:"Alt + F7",mac:"Option + F7",desc:"查询所选对象/变量被引用"},{win:"Alt + Enter",mac:"Option + Enter",desc:"IntelliJ IDEA 根据光标所在问题，提供快速修复选择，光标放在的位置不同提示的结果也不同"},{win:"Alt + Insert",mac:"Command + N",desc:"代码自动生成，如生成对象的 set / get 方法，构造函数，toString() 等"},{win:"Alt + ←",mac:"Control + ←",desc:"切换当前已打开的窗口中的子视图，比如Debug窗口中有Output、Debugger等子视图，用此快捷键就可以在子视图中切换"},{win:"Alt + →",mac:"Control + →",desc:"切换当前已打开的窗口中的子视图，比如Debug窗口中有Output、Debugger等子视图，用此快捷键就可以在子视图中切换"},{win:"Alt + ↑",mac:"Control + ↑",desc:"当前光标跳转到当前文件的前一个方法名位置"},{win:"Alt + ↓",mac:"Control + ↓",desc:"当前光标跳转到当前文件的后一个方法名位置"},{win:"Ctrl + F",mac:"Command + F",desc:"在当前文件进行文本查找"},{win:"Ctrl + R",mac:"Command + R",desc:"在当前文件进行文本替换"},{win:"Ctrl + Z",mac:"Command + Z",desc:"撤销"},{win:"Ctrl + G",mac:"Command + L",desc:"跳转到指定行数位置"},{win:"Ctrl + Y",mac:"Command + Delete",desc:"删除光标所在行 或 删除选中的行"},{win:"Ctrl + D",mac:"Command + D",desc:"复制光标所在行 或 复制选择内容，并把复制内容插入光标位置下面"},{win:"Ctrl + W",mac:"Option + ↑",desc:"递进式选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展选中范围"},{win:"Ctrl + E",mac:"Command + E",desc:"显示最近打开的文件记录列表"},{win:"Ctrl + N",mac:"Command + O",desc:"根据输入的 类名 查找类文件"},{win:"Ctrl + J",mac:"Command + J",desc:"插入自定义动态代码模板"},{win:"Ctrl + P",mac:"Command + P",desc:"方法参数提示显示"},{win:"Ctrl + Q",mac:"Control + J",desc:"当前位置变量、方法的 Documentation 内容显示"},{win:"Ctrl + U",mac:"Command + U",desc:"前往当前光标所在的方法的父类的方法 / 接口定义"},{win:"Ctrl + B",mac:"Command + B",desc:"进入光标所在的方法/变量的接口或是定义处，等效于 Ctrl + 左键单击"},{win:"Ctrl + /",mac:"Command + /",desc:"注释光标所在行代码，会根据当前不同文件类型使用不同的注释符号"},{win:"Ctrl + F1",mac:"Command + F1",desc:"在光标所在的错误代码处显示错误信息"},{win:"Ctrl + F11",mac:"Option + F3",desc:"选中文件 / 文件夹，使用助记符设定 / 取消书签"},{win:"Ctrl + F12",mac:"Command + F12",desc:"弹出当前文件结构层，可以在弹出的层上直接输入，进行筛选"},{win:"Ctrl + Delete",mac:"Option + Fn + Delete",desc:"删除光标后面的单词或是中文句"},{win:"Ctrl + BackSpace",mac:"Option + Delete",desc:"删除光标前面的单词或是中文句"},{win:"Ctrl + +",mac:"Command + +",desc:"展开代码"},{win:"Ctrl + -",mac:"Command + -",desc:"折叠代码"},{win:"Ctrl + ←",mac:"Option + ←",desc:"光标跳转到当前单词 / 中文句的左侧开头位置"},{win:"Ctrl + →",mac:"Option + →",desc:"光标跳转到当前单词 / 中文句的右侧开头位置"},{win:"Ctrl + Space",mac:"Control + Space",desc:"基础代码补全，默认在 Windows 系统上被输入法占用，需要进行修改，建议修改为 Ctrl + 逗号"},{win:"Shift + F11",mac:"Command + F3",desc:"弹出书签显示层"},{win:"Shift + Tab",mac:"Shift + Tab",desc:"取消缩进"},{win:"Shift + Enter",mac:"Shift + Enter",desc:"开始新一行。光标所在行下空出一行，光标定位到新行位置"},{win:"Alt + Shift + N",mac:"Option + Shift + N",desc:"选择 / 添加 task"},{win:"Alt + Shift + ↑",mac:"Option + Shift + ↑",desc:"移动光标所在行向上移动"},{win:"Alt + Shift + ↓",mac:"Option + Shift + ↓",desc:"移动光标所在行向下移动"},{win:"Ctrl + Alt + L",mac:"Command + Option + L",desc:"格式化代码，可以对当前文件和整个包目录使用"},{win:"Ctrl + Alt + O",mac:"Control + Option + O",desc:"优化导入的类，可以对当前文件和整个包目录使用"},{win:"Ctrl + Alt + T",mac:"Command + Option + T",desc:"对选中的代码弹出环绕选项弹出层"},{win:"Ctrl + Alt + Enter",mac:"Command + Option + Enter",desc:"光标所在行上空出一行，光标定位到新行"},{win:"Ctrl + Alt + ←",mac:"Command + Option + ←",desc:"退回到上一个操作的地方"},{win:"Ctrl + Alt + →",mac:"Command + Option + →",desc:"前进到上一个操作的地方"},{win:"Ctrl + Alt + S",mac:"Command + ,",desc:"打开 IntelliJ IDEA 系统设置"},{win:"Ctrl + Shift + F",mac:"Command + Shift + F",desc:"根据输入内容查找整个项目 或 指定目录内文件"},{win:"Ctrl + Shift + R",mac:"Command + Shift + R",desc:"根据输入内容替换对应内容，范围为整个项目 或 指定目录内文件"},{win:"Ctrl + Shift + J",mac:"Control + Shift + J",desc:"自动将下一行合并到当前行末尾"},{win:"Ctrl + Shift + Z",mac:"Command + Shift + Z",desc:"取消撤销"},{win:"Ctrl + Shift + N",mac:"Command + Shift + O",desc:"通过文件名定位 / 打开文件 / 目录，打开目录需要在输入的内容后面多加一个正斜杠"},{win:"Ctrl + Shift + U",mac:"Command + Shift + U",desc:"对选中的代码进行大 / 小写轮流转换"},{win:"Ctrl + Shift + T",mac:"Command + Shift + T",desc:"对当前类生成单元测试类，如果已经存在的单元测试类则可以进行选择"},{win:"Ctrl + Shift + C",mac:"Command + Shift + C",desc:"复制当前文件磁盘路径到剪贴板"},{win:"Ctrl + Shift + B",mac:"Control + Shift + B",desc:"跳转到类型声明处"},{win:"Ctrl + Shift + /",mac:"Command + Option + /",desc:"代码块注释"},{win:"Ctrl + Shift + [",mac:"Command + Shift + [",desc:"选中从光标所在位置到它的顶部中括号位置"},{win:"Ctrl + Shift + ]",mac:"Command + Shift + ]",desc:"选中从光标所在位置到它的底部中括号位置"},{win:"Ctrl + Shift + 加号",mac:"Command + Shift + 加号",desc:"展开所有代码"},{win:"Ctrl + Shift + 减号",mac:"Command + Shift + 减号",desc:"折叠所有代码"},{win:"Ctrl + Shift + F7",mac:"Command + Shift + F7",desc:"高亮显示所有该选中文本，按Esc高亮消失"},{win:"Ctrl + Shift + F12",mac:"Command + Shift + F12",desc:"编辑器最大化"},{win:"Ctrl + Shift + Enter",mac:"Command + Shift + Enter",desc:"自动结束代码，行末自动添加分号"},{win:"Ctrl + Shift + ←",mac:"Option + Shift + ←",desc:"在代码文件上，光标跳转到当前单词 / 中文句的左侧开头位置，同时选中该单词 / 中文句"},{win:"Ctrl + Shift + →",mac:"Option + Shift + →",desc:"在代码文件上，光标跳转到当前单词 / 中文句的右侧开头位置，同时选中该单词 / 中文句"},{win:"Ctrl + Shift + ↑",mac:"Command + Shift + ↑",desc:"光标放在方法名上，将方法移动到上一个方法前面，调整方法排序"},{win:"Ctrl + Shift + ↓",mac:"Command + Shift + ↓",desc:"光标放在方法名上，将方法移动到下一个方法前面，调整方法排序"},{win:"Ctrl + Shift + W",mac:"Option + ↓",desc:"递进式取消选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展取消选中范围"},{win:"Ctrl + Shift + Backspace",mac:"Ctrl + Shift + Backspace",desc:"退回到上次修改的地方"},{win:"Ctrl + Shift + Alt + V",mac:"Command + Shift + Option + V",desc:"无格式黏贴"},{win:"Ctrl + Shift + Alt + S",mac:"Command + ;",desc:"打开当前项目设置"},{win:"F2",mac:"F2",desc:"跳转到下一个高亮错误 或 警告位置"},{win:"F4",mac:"F4",desc:"编辑源"},{win:"F11",mac:"F3",desc:"添加书签"},{win:"F12",mac:"F12",desc:"回到前一个工具窗口"},{win:"Tab",mac:"Tab",desc:"缩进"},{win:"ESC",mac:"ESC",desc:"从工具窗口进入代码文件窗口"}],mapKey:{}}},mounted(){var t=navigator.userAgent;this.userOs="unknown OS";const e=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS",r:/Mac OS X/},{s:"Mac OS",r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(let n in e){let i=e[n];if(i.r.test(t)){this.userOs=i.s;break}}},methods:{changeOs(){"Mac OS"==this.userOs?this.userOs="Windows":this.userOs="Mac OS"},handleHotkeyVerify(t){console.log(t);for(const e of this.keys)if(e.text===t.text)return this.$notify({title:"提示",message:"此快捷键已被绑定",type:"warning"}),!1;return!0},keysChange(t){this.mapKey={};for(let e in this.keyMapList){const n=this.keyMapList[e];if("Mac OS"===this.userOs){if(n.mac==t){this.mapKey={text:n.win,desc:n.desc};break}}else if(n.win==t){this.mapKey={text:n.mac,desc:n.desc};break}}void 0==this.mapKey.text&&(this.mapKey={text:"Not Found",desc:"Not Found"})}}},g=k,A=(n("034f"),Object(S["a"])(g,r,c,!1,null,null,null)),b=A.exports;i["default"].config.productionTip=!1,i["default"].use(a.a),new i["default"]({render:t=>t(b)}).$mount("#app")},"85ec":function(t,e,n){},b7ff:function(t,e,n){"use strict";n("ee04")},ee04:function(t,e,n){}});
//# sourceMappingURL=app.edae5988.js.map