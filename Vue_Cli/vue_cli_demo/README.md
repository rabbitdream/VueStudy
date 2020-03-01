# vue_cli_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##　脚手架的好处

- 脚手架可以大大的提高开发效率
- 可以使用最主流的ECMAScript语法
- 通过Ｗebpack实现编译查看效果（非浏览器编译）
- 自动更新，可实现查看最新效果等

# 学习
- git上传项目不要上传 `node_modules`

- 因为可以在项目目录下通过`cnpm install`安装它

- `<template>`**里只能有一个根标签**

- 嵌套组件：全局/局部
    - 引入组件
    - 注册组件
    - 调用组件
    
- 遍历：一定要绑定`key`值(唯一),一般绑定数组下标

- 样式覆盖：添加域`scoped`

- 属性传值：
    - 父组件
    ```vue
    <!-- 属性传值:调用时 绑定/变量/赋值/传递 -->
    <Users :users="users" />
    ```
    - 子组件
    ```vue
    //   props: ["users1","users2"],  //多值接收
    //   另一种接收方式
    //   props: {
    //     users1: {
    //       type: Array,  //传值类型
    //       required: true    //必须传值
    //     },
    //     users2{

    //     }
    //   },
    props: ["users"],
    ```
    
- 注册事件：通过注册事件可以通过子组件修改父组件的值
```vue
// 子组件
  <h1 @click="changeTitle">{{title}}</h1>
    ...
    props: {
    title: {
      type: String
    }
  },
    methods: {
    changeTitle() {
      // 注册事件 参数1:事件名称  参数2:值
      this.$emit("titleChange", "蓝依然通过emit到app.vue修改title值");
    }
  }

//父组件  
  <Header @titleChange="updatetitle" :title="title" />
  ...
   methods: {
    updatetitle(newtitle) {
      console.log(newtitle);
    }
  }
```

- 生命周期函数
```vue
  beforeCreate() {
    alert("这时还实例没有创建，所以你无法知道data，也不能用watch监听。");
  },
  created() {
    alert("这时实例已经创建，可以得到data，调用watch，但是页面还是空白。");
  },
  beforeMount() {
    alert("页面挂载前，此时页面依然是空白的。这时render函数首次被调用。");
  },
  mounted() {
    alert("页面已经挂载，这时你可以看到页面内容，也可以访问DOM");
  },
  beforeUpdate() {
    alert(
      "数据更新之前，也就是虚拟DOM打补丁之前。这时访问到的DOM还有原有的DOM"
    );
  },
  updated() {
    alert("数据已经更新完毕");
  },
  beforeDestroy() {
    alert("页面离开之前被调用，清楚定时器，或者第三方的一些DOM结构。");
  },
  destroyed() {
    alert("实例已经完全被销毁。");
  }
```
- 传递标签`slot`
```vue
<!-- 调用组件内 -->
<SlotTest>
    <!-- 传递标签 -->
    <h2 slot="title">这是个title</h2>
    <p slot="text">这是文本</p>
</SlotTest>

<!-- 接收组件内 -->

<!-- 站位 -->
<slot name="title"></slot>
<slot name="text"></slot>
```
- 样式可以在你传递标签的组件写样式也可以在接收标签的地方写样式。但是属性的调用只能在传递标签的组件写，不能在接收边标签的组件写。

- `component`动态绑定组件
```vue
<component :is="component"></component>
<button @click="component = 'form-one'">show form one</button>
<button @click="component = 'form-two'">show form two</button>
...

data(){
    return{
        component:"form-one"  //默认显示第一个
    }
}
```

- 缓存`keep-alive`
- 当页面跳转回来时，之前输入的内容还在。
- 用`<keep-alive>组件</keep-alive>`包裹组件。
