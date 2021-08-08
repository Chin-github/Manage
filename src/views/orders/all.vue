<template>
  <div>
    <Bread></Bread>
    <el-card class="mt">
      <el-radio-group v-model="radio1">
        <el-radio-button label="1">待审核</el-radio-button>
        <el-radio-button label="2">审核中</el-radio-button>
        <el-radio-button label="3">审核通过</el-radio-button>
        <el-radio-button label="4">审核拒绝</el-radio-button>
        <el-radio-button label="5">已放款</el-radio-button>
      </el-radio-group>
      <keep-alive>
        <component :is="cur"></component>
      </keep-alive>
    </el-card>
  </div>
</template>

<script>
import Bread from "@/components/Bread.vue";
import myTabs1 from "./myTabs1.vue";
import myTabs2 from "./myTabs2.vue";
import myTabs3 from "./myTabs3.vue";
import myTabs4 from "./myTabs4.vue";
import myTabs5 from "./myTabs5.vue";
export default {
  data() {
    return {
      radio1: "2",
    };
  },
  computed: {
    cur() {
      return "myTabs" + this.radio1;
    },
  },
  components: {
    Bread,
    myTabs1,
    myTabs2,
    myTabs3,
    myTabs4,
    myTabs5
  },
};
</script>

<style lang="less" scoped>
</style>