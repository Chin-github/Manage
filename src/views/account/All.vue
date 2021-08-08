<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: right">
          <el-button type="primary" @click="news">新建角色</el-button>
          <el-button :disabled='!selected.length'>启动</el-button>
          <el-button :disabled='!selected.length'>冻结</el-button>
          <el-button type="danger" :disabled='!selected.length'>删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因" width="100">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "已启动" : "未启用" }}</template
          >
        </el-table-column>
        <el-table-column prop="date" label="操作" class="thressbtn">
          <template slot-scope="scope">
            <el-button size="mini" @click="emit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button size="mini">{{
              scope.row.status == 1 ? "禁用" : "启用"
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="mt"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </el-card>
    <all-model :visible='myvisible' @hide='hide' :title="mytitle"></all-model>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { get } from "@/utils/http.js";
import breadCrumb from "@/mixins/breadCrumb.js";
import allModel from './allModel.vue'
export default {
  data() {
    return {
      input3: "",
      tableData: [],
      selected:[],
      myvisible:false,
      mytitle:''
    };
  },
  created() {
    this.list();
  },
  mixins: [breadCrumb],
  methods: {
    ...mapMutations(['getRowData']),
      emit(row){
          this.mytitle='编辑'
          this.myvisible=true
          this.getRowData(row)
          console.log(row);
      },
    list() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
      });
    },
    handleSizeChange(size) {
      console.log(size);
    },
    handleCurrentChange(cur) {
      console.log(cur);
    },
    handleSelectionChange(selection) {
      console.log(selection);
      this.selected=selection
    }, 
    hide(){
        this.myvisible=false
    },
    news(){
      this.mytitle='新建'
      this.getRowData({})
      this.myvisible=true
    }
  },
  components:{
     allModel
  }
};
</script>

<style  scoped>
.el-pagination {
  text-align: center;
}
</style>