<template>
  <div class="header">
    <h1 @click="changeTitle">{{title}}</h1>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      // title: "Vue Components Demo"
    };
  },
  methods: {
    changeTitle() {
      // this.title="蓝依然 Vue"
      // 注册事件 参数1:事件名称  参数2:值
      this.$emit("titleChange", "蓝依然通过emit到app.vue修改title值");
    }
  }
};
</script>


<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>