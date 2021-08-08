<template>
    <div>
<!-- <el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="(item,index) in breadList" :key='index'>{{item}}</el-breadcrumb-item>
      
</el-breadcrumb> -->
<Bread class="1234"></Bread>
    </div>
</template>

<script>
// import breadCrumb from '@/mixins/breadCrumb.js'
import Bread from '@/components/Bread.vue'
    export default {
        // mixins:[breadCrumb]  
        components:{
Bread
        }     
        }
    
</script>

<style lang="less" scoped>

</style>