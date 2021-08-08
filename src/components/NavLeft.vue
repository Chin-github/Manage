<template>
  <div>
    <h1 class="title">
      <i class="el-icon-orange"></i>
      Vue-Admin
    </h1>
    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
    >
      <menus
        v-for="(item, index) in menuDate"
        :key="index"
        :menu="item"
      ></menus>
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/utils/http.js";
import Menus from "./Menus.vue";
export default {
  data() {
    return {
      menuDate: [],
    };
  },
  created() {
    get("/menu").then((res) => {
      this.menuDate = res.data;
    });
  },
  components: {
    Menus,
  },
};
</script>

<style lang="less" scoped>
.title {
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.el-menu {
  border: none;
}
</style>