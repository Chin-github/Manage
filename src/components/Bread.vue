<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in getBreadCrumb" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    getBreadCrumb() {
       return this.$route.meta ? this.$route.meta.bread : [];
    },
  },
};
</script>

<style lang="less" scoped>
</style>