<template>
<!-- Html结构:只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// Js逻辑部分
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Css样式部分 */ 
</style>
