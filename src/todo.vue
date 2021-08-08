<template>
  <div>
    <Bread></Bread>
    <el-card class="mt">
      <el-row>
        <el-col :span="12">
          <el-time-picker
          class="time1"
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker
        ></el-col>
        <el-col :span="12">
          <el-time-picker
          class="time1"
            is-range
            arrow-control
            v-model="value2"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker
        ></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Bread from "@/components/Bread.vue";
export default {
  data() {
    return {
      value1: [new Date(2022, 8, 5, 8, 40), new Date(2022, 8, 5, 10, 40)],
      value2: [new Date(2022, 8, 6, 13, 40), new Date(2016, 9, 10, 16, 40)],
    };
  },
  components: {
    Bread,
  },
};
</script>

<style lang="less" scoped>
.el-col-12{
    text-align: center;
}
</style>