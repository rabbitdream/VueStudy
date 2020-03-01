<template>
  <div id="app">
    <!-- 3.调用组件 -->
    <Header @titleChange="updatetitle" :title="title" />
    <h1>App.vue</h1>

    <SlotTest>
      <!-- 传递标签 -->
      <h2 slot="title">这是个title</h2>
      <p slot="text">这是文本</p>
    </SlotTest>
    <!-- 属性传值:调用时 绑定/变量/赋值/传递 -->
    <!-- 1.传值  2.传引用（数组、对象）<址> -->
    <Users :users="users" />
    <hr />
    <Users :users="users" />
    <Footer />
  </div>
</template>

<script>
//局部调用组件
//1.引入组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SlotTest from "./components/SlotTest";

export default {
  name: "App",
  data() {
    return {
      users: [
        { name: "蓝依然1", wechat: "Z18864262766", show: false },
        { name: "蓝依然2", wechat: "Z18864262766", show: false },
        { name: "蓝依然3", wechat: "Z18864262766", show: false },
        { name: "蓝依然4", wechat: "Z18864262766", show: false }
      ],
      title: "Vue 蓝依然"
    };
  },
  components: {
    //2.注册组件
    Header,
    Users,
    Footer,
    SlotTest
  },
  methods: {
    updatetitle(newtitle) {
      console.log(newtitle);
    }
  },
  // 生命周期函数
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
};
</script>

<style>
h1 {
  color: purple;
}
</style>
