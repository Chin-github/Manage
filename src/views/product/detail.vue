<template>
  <div>
    <Bread></Bread>
    <el-card class="mt">
      <el-col>
        <el-row>
          <span
            >申请编号：YG20414913914 推送时间：2021-08-05 推送员：王铁柱
            状态：蓄势待发</span
          >
          <el-button class="btn" type="primary" @click="jump">返回</el-button>
        </el-row>
      </el-col>
    </el-card>
    <el-card class="mt">
      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
      <el-divider></el-divider>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
      <el-divider></el-divider>
      <span>头上一片晴天，心中一个想念</span>
      <el-divider content-position="left">少年包青天</el-divider>
      <span>饿了别叫妈, 叫饿了么</span>
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
      <span>为了无法计算的价值</span>
      <el-divider content-position="right">阿里云</el-divider>
      <span>雨纷纷</span>
      <el-divider direction="vertical"></el-divider>
      <span>旧故里</span>
      <el-divider direction="vertical"></el-divider>
      <span>草木深</span>
      <el-divider direction="vertical"></el-divider>
    </el-card>
    <el-card>
      <el-row :gutter="16">
        <el-col :span="12" class="text1">
          <span>《蜀先主庙》 刘禹锡</span>
          <el-divider></el-divider>
          <span>天下英雄气，千秋尚凛然。</span>
          <el-divider></el-divider>
          <span>势分三足鼎，业复五铢钱。</span>
          <el-divider></el-divider>
          <span>得相能开国，生儿不象贤。</span>
          <el-divider></el-divider>
          <span>凄凉蜀故妓，来舞魏宫前。</span>
          <el-divider></el-divider>
        </el-col>
        <el-col :span="12" class="text1">
          <span>《赤壁》 杜牧 </span>
          <el-divider></el-divider>
          <span>折戟沉沙铁未销,</span>
          <el-divider></el-divider>
          <span>自将磨洗认前朝。</span>
          <el-divider></el-divider>
          <span>东风不与周郎便，</span>
          <el-divider></el-divider>
          <span>铜雀春深锁二乔。</span>
          <el-divider></el-divider>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Bread from "@/components/Bread.vue";
export default {
  components: {
    Bread,
  },
  methods:{
      jump(){
          this.$router.push('/product/all')
      }
  }
};
</script>

<style lang="less" scoped>
.btn {
  margin-left: 650px;
  margin-bottom: 15px;
}
.text1 {
  text-align: center;
}
</style>