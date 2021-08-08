<template>
  <div class="layout">
    <el-container>
      <el-aside width="250px" class="aside">
          <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
            <headers></headers>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
       
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from '@/components/Header.vue'
import NavLeft from '@/components/NavLeft.vue'

export default {
    components:{
        Headers,NavLeft
    }
};
</script>

<style lang="less" scoped>
.aside{
    height: 100vh;
    background: #001529;
}
.el-menu{border: none;}
.el-header{
  background: #fff;
  color: #333;
  line-height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-main{
  color: #333;
  height: 70vh;
  background-color: #e9eef3;
}
</style>