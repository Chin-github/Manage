<template>
  <div>
    <div>
      <el-dropdown @command='fn' class="select fr">
        <span class="el-dropdown-link">
          欢迎您!{{ info }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='a'>个人中心</el-dropdown-item>
          <el-dropdown-item command='b'>修改密码</el-dropdown-item>
          <el-dropdown-item command='c'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="date fr">
      今天是热爱生活的第<span class="days"> {{ days }} </span
      >天
    </p>
    <div class="clear"></div>
  </div>
</template>

<script>
import { get } from "@/utils/http.js";
export default {
  data() {
    return {
      time: "",
      info: sessionStorage.getItem("nickname"),
    };
  },
  created() {
    get("/in").then((res) => {
      this.time = res.time;
    });
  },
  computed: {
    days() {
      const times = new Date(this.time);
      const now = new Date();
      return Math.floor((now - times) / 1000 / 60 / 60 / 24);
    },
  },
  methods:{
    fn(command){
     if(command==='c'){
       sessionStorage.clear()
       this.$router.push('/login')
     }
    }
  }
};
</script>

<style lang="less" scoped>
.date {
  margin-right: 50px;
}
.days {
  color: #40a9ff;
  font-size: 24px;
}
</style>