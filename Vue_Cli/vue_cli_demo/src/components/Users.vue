<template>
  <div class="users">
    <h1>Users.vue</h1>
    <ul>
      <!-- 遍历一定要绑定key值（唯一） -->
      <li @click="user.show=!user.show" v-for="(user,index) in users" :key="index">
        <h2>{{user.name}}</h2>
        <h2 v-show="user.show">{{user.wechat}}</h2>
      </li>
    </ul>
    <!-- 传引用 -->
    <button @click="deleteUser">Delete</button>
  </div>
</template>


<script>
export default {
  //   props: ["users1","users2"],
  //   props: {
  //     users1: {
  //       type: Array,  //传值类型
  //       required: true    //必须传值
  //     },
  //     users2{

  //     }
  //   },
  props: ["users"],
  data() {
    return {};
  },
  methods: {
    deleteUser() {
      this.users.pop();
    }
  }
};
</script>


<style scoped>
h1 {
  color: green;
}
</style>