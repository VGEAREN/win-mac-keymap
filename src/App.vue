<template>
  <div id="app">
    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
    <h1 style="margin-top: 100px">当前系统 {{userOs}}
     <i @click="changeOs" style="font-size: 15px" class="el-icon-sort"></i></h1>
    <HotkeyInput
        style="margin-top: 30px"
        class="hotkey"
        :hotkey.sync="keys"
        :os="userOs"
        :verify="handleHotkeyVerify"
        placeholder="请按需要转换的按键，支持组合按键"
        :keychange="keysChange"
    />
    <div v-if="mapKey.text != undefined">
      <h1>{{mapKey.text}}</h1>
      <b>{{mapKey.desc}}</b>
    </div>
  </div>
</template>

<script>
import HotkeyInput from "./components/hotkeyInput";
import GithubCorner from "./components/githubCorner"
export default {
  name: "App",
  components: {
    HotkeyInput,
    GithubCorner,
  },
  data() {
    return {
      keys: {},
      userAgent:"",
      userOs:"",
      keyMapList:[
        {win:"Alt + `",mac:"Control + V",desc:"显示版本控制常用操作菜单弹出层"},
        {win:"Alt + F1",mac:"Option + F1",desc:"显示当前文件选择目标弹出层，弹出层中有很多目标可以进行选择"},
        {win:"Alt + F7",mac:"Option + F7",desc:"查询所选对象/变量被引用"},
        {win:"Alt + Enter",mac:"Option + Enter",desc:"IntelliJ IDEA 根据光标所在问题，提供快速修复选择，光标放在的位置不同提示的结果也不同"},
        {win:"Alt + Insert",mac:"Command + N",desc:"代码自动生成，如生成对象的 set / get 方法，构造函数，toString() 等"},
        {win:"Alt + ←",mac:"Control + ←",desc:"切换当前已打开的窗口中的子视图，比如Debug窗口中有Output、Debugger等子视图，用此快捷键就可以在子视图中切换"},
        {win:"Alt + →",mac:"Control + →",desc:"切换当前已打开的窗口中的子视图，比如Debug窗口中有Output、Debugger等子视图，用此快捷键就可以在子视图中切换"},
        {win:"Alt + ↑",mac:"Control + ↑",desc:"当前光标跳转到当前文件的前一个方法名位置"},
        {win:"Alt + ↓",mac:"Control + ↓",desc:"当前光标跳转到当前文件的后一个方法名位置"},
        {win:"Ctrl + F",mac:"Command + F",desc:"在当前文件进行文本查找"},
        {win:"Ctrl + R",mac:"Command + R",desc:"在当前文件进行文本替换"},
        {win:"Ctrl + Z",mac:"Command + Z",desc:"撤销"},
        {win:"Ctrl + G",mac:"Command + L",desc:"跳转到指定行数位置"},
        {win:"Ctrl + Y",mac:"Command + Delete",desc:"删除光标所在行 或 删除选中的行"},
        {win:"Ctrl + D",mac:"Command + D",desc:"复制光标所在行 或 复制选择内容，并把复制内容插入光标位置下面"},
        {win:"Ctrl + W",mac:"Option + ↑",desc:"递进式选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展选中范围"},
        {win:"Ctrl + E",mac:"Command + E",desc:"显示最近打开的文件记录列表"},
        {win:"Ctrl + N",mac:"Command + O",desc:"根据输入的 类名 查找类文件"},
        {win:"Ctrl + J",mac:"Command + J",desc:"插入自定义动态代码模板"},
        {win:"Ctrl + P",mac:"Command + P",desc:"方法参数提示显示"},
        {win:"Ctrl + Q",mac:"Control + J",desc:"当前位置变量、方法的 Documentation 内容显示"},
        {win:"Ctrl + U",mac:"Command + U",desc:"前往当前光标所在的方法的父类的方法 / 接口定义"},
        {win:"Ctrl + B",mac:"Command + B",desc:"进入光标所在的方法/变量的接口或是定义处，等效于 Ctrl + 左键单击"},
        {win:"Ctrl + /",mac:"Command + /",desc:"注释光标所在行代码，会根据当前不同文件类型使用不同的注释符号"},
        {win:"Ctrl + F1",mac:"Command + F1",desc:"在光标所在的错误代码处显示错误信息"},
        {win:"Ctrl + F11",mac:"Option + F3",desc:"选中文件 / 文件夹，使用助记符设定 / 取消书签"},
        {win:"Ctrl + F12",mac:"Command + F12",desc:"弹出当前文件结构层，可以在弹出的层上直接输入，进行筛选"},
        {win:"Ctrl + Delete",mac:"Option + Fn + Delete",desc:"删除光标后面的单词或是中文句"},
        {win:"Ctrl + BackSpace",mac:"Option + Delete",desc:"删除光标前面的单词或是中文句"},
        {win:"Ctrl + +",mac:"Command + +",desc:"展开代码"},
        {win:"Ctrl + -",mac:"Command + -",desc:"折叠代码"},
        {win:"Ctrl + ←",mac:"Option + ←",desc:"光标跳转到当前单词 / 中文句的左侧开头位置"},
        {win:"Ctrl + →",mac:"Option + →",desc:"光标跳转到当前单词 / 中文句的右侧开头位置"},
        {win:"Ctrl + Space",mac:"Control + Space",desc:"基础代码补全，默认在 Windows 系统上被输入法占用，需要进行修改，建议修改为 Ctrl + 逗号"},
        {win:"Shift + F11",mac:"Command + F3",desc:"弹出书签显示层"},
        {win:"Shift + Tab",mac:"Shift + Tab",desc:"取消缩进"},
        {win:"Shift + Enter",mac:"Shift + Enter",desc:"开始新一行。光标所在行下空出一行，光标定位到新行位置"},
        {win:"Alt + Shift + N",mac:"Option + Shift + N",desc:"选择 / 添加 task"},
        {win:"Alt + Shift + ↑",mac:"Option + Shift + ↑",desc:"移动光标所在行向上移动"},
        {win:"Alt + Shift + ↓",mac:"Option + Shift + ↓",desc:"移动光标所在行向下移动"},
        {win:"Ctrl + Alt + L",mac:"Command + Option + L",desc:"格式化代码，可以对当前文件和整个包目录使用"},
        {win:"Ctrl + Alt + O",mac:"Control + Option + O",desc:"优化导入的类，可以对当前文件和整个包目录使用"},
        {win:"Ctrl + Alt + T",mac:"Command + Option + T",desc:"对选中的代码弹出环绕选项弹出层"},
        {win:"Ctrl + Alt + Enter",mac:"Command + Option + Enter",desc:"光标所在行上空出一行，光标定位到新行"},
        {win:"Ctrl + Alt + ←",mac:"Command + Option + ←",desc:"退回到上一个操作的地方"},
        {win:"Ctrl + Alt + →",mac:"Command + Option + →",desc:"前进到上一个操作的地方"},
        {win:"Ctrl + Alt + S",mac:"Command + ,",desc:"打开 IntelliJ IDEA 系统设置"},
        {win:"Ctrl + Shift + F",mac:"Command + Shift + F",desc:"根据输入内容查找整个项目 或 指定目录内文件"},
        {win:"Ctrl + Shift + R",mac:"Command + Shift + R",desc:"根据输入内容替换对应内容，范围为整个项目 或 指定目录内文件"},
        {win:"Ctrl + Shift + J",mac:"Control + Shift + J",desc:"自动将下一行合并到当前行末尾"},
        {win:"Ctrl + Shift + Z",mac:"Command + Shift + Z",desc:"取消撤销"},
        {win:"Ctrl + Shift + N",mac:"Command + Shift + O",desc:"通过文件名定位 / 打开文件 / 目录，打开目录需要在输入的内容后面多加一个正斜杠"},
        {win:"Ctrl + Shift + U",mac:"Command + Shift + U",desc:"对选中的代码进行大 / 小写轮流转换"},
        {win:"Ctrl + Shift + T",mac:"Command + Shift + T",desc:"对当前类生成单元测试类，如果已经存在的单元测试类则可以进行选择"},
        {win:"Ctrl + Shift + C",mac:"Command + Shift + C",desc:"复制当前文件磁盘路径到剪贴板"},
        {win:"Ctrl + Shift + B",mac:"Control + Shift + B",desc:"跳转到类型声明处"},
        {win:"Ctrl + Shift + /",mac:"Command + Option + /",desc:"代码块注释"},
        {win:"Ctrl + Shift + [",mac:"Command + Shift + [",desc:"选中从光标所在位置到它的顶部中括号位置"},
        {win:"Ctrl + Shift + ]",mac:"Command + Shift + ]",desc:"选中从光标所在位置到它的底部中括号位置"},
        {win:"Ctrl + Shift + 加号",mac:"Command + Shift + 加号",desc:"展开所有代码"},
        {win:"Ctrl + Shift + 减号",mac:"Command + Shift + 减号",desc:"折叠所有代码"},
        {win:"Ctrl + Shift + F7",mac:"Command + Shift + F7",desc:"高亮显示所有该选中文本，按Esc高亮消失"},
        {win:"Ctrl + Shift + F12",mac:"Command + Shift + F12",desc:"编辑器最大化"},
        {win:"Ctrl + Shift + Enter",mac:"Command + Shift + Enter",desc:"自动结束代码，行末自动添加分号"},
        {win:"Ctrl + Shift + ←",mac:"Option + Shift + ←",desc:"在代码文件上，光标跳转到当前单词 / 中文句的左侧开头位置，同时选中该单词 / 中文句"},
        {win:"Ctrl + Shift + →",mac:"Option + Shift + →",desc:"在代码文件上，光标跳转到当前单词 / 中文句的右侧开头位置，同时选中该单词 / 中文句"},
        {win:"Ctrl + Shift + ↑",mac:"Command + Shift + ↑",desc:"光标放在方法名上，将方法移动到上一个方法前面，调整方法排序"},
        {win:"Ctrl + Shift + ↓",mac:"Command + Shift + ↓",desc:"光标放在方法名上，将方法移动到下一个方法前面，调整方法排序"},
        {win:"Ctrl + Shift + W",mac:"Option + ↓",desc:"递进式取消选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展取消选中范围"},
        {win:"Ctrl + Shift + Backspace",mac:"Ctrl + Shift + Backspace",desc:"退回到上次修改的地方"},
        {win:"Ctrl + Shift + Alt + V",mac:"Command + Shift + Option + V",desc:"无格式黏贴"},
        {win:"Ctrl + Shift + Alt + S",mac:"Command + ;",desc:"打开当前项目设置"},
        {win:"F2",mac:"F2",desc:"跳转到下一个高亮错误 或 警告位置"},
        {win:"F4",mac:"F4",desc:"编辑源"},
        {win:"F11",mac:"F3",desc:"添加书签"},
        {win:"F12",mac:"F12",desc:"回到前一个工具窗口"},
        {win:"Tab",mac:"Tab",desc:"缩进"},
        {win:"ESC",mac:"ESC",desc:"从工具窗口进入代码文件窗口"},
        {win:"Ctrl + Shift + O",mac:"Ctrl + Command + I",desc:"【插件】打开翻译对话框"},
      ],
      mapKey: {}
    };
  },
  mounted() {
    var nAgt = navigator.userAgent;
    this.userOs = "Windows";
    const clientStrings = [
      {s:'Mac OS', r:/Mac OS X/},
      {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
    ];
    for (let id in clientStrings) {
      let cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
        this.userOs = cs.s;
        break;
      }
    }
  },
  methods: {
    changeOs(){
      if(this.userOs == 'Mac OS'){
        this.userOs = "Windows"
      }  else {
        this.userOs = "Mac OS"
      }
    },
    handleHotkeyVerify(hotkey) {
      console.log(hotkey)
      for (const key of this.keys) {
        if (key.text === hotkey.text) {
          this.$notify({
            title: "提示",
            message: `此快捷键已被绑定`,
            type: "warning",
          });
          return false;
        }
      }
      return true;
    },
    keysChange(hotkey){
      this.mapKey = {}
      for (let index in this.keyMapList) {
        const curKey = this.keyMapList[index]
        if(this.userOs === 'Mac OS'){
          if (curKey.mac == hotkey) {
            this.mapKey = {
              text: curKey.win,
              desc: curKey.desc
            }
            break
          }
        } else {
          if (curKey.win == hotkey) {
            this.mapKey = {
              text: curKey.mac,
              desc: curKey.desc
            }
            break
          }
        }
      }
      if(this.mapKey.text == undefined){
        this.mapKey = {
          text: "Not Found",
          desc: "Not Found"
        }
      }
    }
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 0 auto;
}
#app > h1 {
  font-size: 23px;
  text-align: center;
}
.list-item {
  margin-top: 30px;
}
.list-item > .label {
  color: #666;
  margin-top: 6px;
}
</style>
