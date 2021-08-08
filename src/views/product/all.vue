<template>
  <div>
    <Bread></Bread>
    <el-card class="mt">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value" placeholder="利率">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <div class="block mr">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" class="ml" @click="search">查询</el-button>
          <el-button type="primary">重置</el-button>
          <span class="el-dropdown-link" @click="open" v-show="!show">
            展开<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <span class="el-dropdown-link" @click="open" v-show="show">
            收起<i class="el-icon-arrow-up el-icon--right"></i>
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="16" class="mt" v-show="!show">
        <el-col :span="6">
          <el-input placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="产品名称"></el-input>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="type" label="产品类别"></el-table-column>
        <el-table-column prop="rate" label="利率"></el-table-column>
        <el-table-column prop="date" label="开放日期"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.status == 1" effect="dark"
              >已启用</el-tag
            >
            <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="highest"
          label="最高分期数(月)"
        ></el-table-column>
        <el-table-column prop="number" label="申请客户数量"></el-table-column>
        <el-table-column prop="average" label="件均"></el-table-column>
        <el-table-column prop="remark" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.status == 2"
              type="primary"
              
              >启用</el-button
            >
            <el-button
              size="mini"
              v-else
              type="danger"
              
              >停用</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="detail(scope.row.index)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-pagination class="down mt"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40,50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="50"
      >
      </el-pagination>
  </div>
</template>

<script>
import {get} from '@/utils/http.js'
import Bread from "@/components/Bread.vue";
import moment from "moment";
export default {
  data() {
    return {
      tableData:[],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      show: false,
    };
  },
  components: {
    Bread,
  },
  created(){
    this.list()
  },
  methods: {
    open() {
      this.show = !this.show;
    },
    search() {
      const searchDay = moment(this.value1[0]).format("YYYY-MM-DD");
      const searchDay1 = moment(this.value1[1]).format("YYYY-MM-DD");
      console.log(searchDay + "至" + searchDay1);
    },
    list(){
      get('/productList').then((res)=>{
        this.tableData=res.data.list
        this.total=res.data.total
      })
    },
    detail(index){
      sessionStorage.setItem('index',index)
      this.$router.push('/product/detail')
    }
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  color: cornflowerblue;
}
.down{
  text-align: center;
}
</style>