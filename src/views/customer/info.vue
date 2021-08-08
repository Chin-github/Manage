<template>
  <div>
    <Bread></Bread>
    <el-card class="mt">
      <span class="admin">客户管理界面</span>
    </el-card>
    <el-card>
      <el-input v-model="input" placeholder="请搜索姓名"></el-input>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="电话"> </el-table-column>
        <el-table-column prop="address" label="邮箱"> </el-table-column>
        <el-table-column prop="date" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="电话"> </el-table-column>
        <el-table-column prop="address" label="邮箱"> </el-table-column>
        <el-table-column prop="date" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="电话"> </el-table-column>
        <el-table-column prop="address" label="邮箱"> </el-table-column>
      </el-table>
    </el-card>
    <el-pagination
      class="down mt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="50"
    >
    </el-pagination>
  </div>
</template>

<script>
import Bread from "@/components/Bread";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
        {
          date: "王小虎",
          name: "13124553231",
          address: "1008611@email",
        },
      ],
    };
  },
  components: {
    Bread,
  },
};
</script>

<style lang="less" scoped>
.admin {
  font-size: 25px;
  color: lightslategrey;
}
.down{
    text-align: center;
}
</style>