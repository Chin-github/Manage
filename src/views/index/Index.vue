<template>
  <div>
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div class="fl">
            <p>本月进件</p>
            <p style="font-weight: bold">2468</p>
            <p>+9.02%<span style="font-size: 12px">与上月同比</span></p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div class="fl">
            <p>本月放贷(元)</p>
            <p style="font-weight: bold">123000000</p>
            <p>+0.88% <span style="font-size: 12px">与上月同比</span></p>
          </div>
          <i class="el-icon-money ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div class="fl">
            <p>累计进件</p>
            <p style="font-weight: bold">847212</p>
            <p>+12.21%<span style="font-size: 12px">与去年同比</span></p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div class="fl">
            <p>累计放款</p>
            <p style="font-weight: bold">52321312</p>
            <p>-2.76% <span style="font-size: 12px">与去年同比</span></p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="main-left">
            <span>进件统计分析</span>
          </div>
          <div ref="pic1" class="pic1"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="main-right">
            <span>进件产品占比</span>
          </div>
          <div ref="pic2" class="pic2"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="message">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-calendar v-model="value"> </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      datas: [],
    };
  },
  mounted() {
    this.pictures1();
    this.pictures2();
  },
  methods: {
    pictures1() {
      const myChart = this.$echarts.init(this.$refs["pic1"]);

      const option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "销量",
            type: "line",
            data: [30,84,56,47,84,61,90],
            smooth: true,
          },
        ],
      };

      myChart.setOption(option);
    },
    pictures2() {
      const myChart = this.$echarts.init(this.$refs["pic2"]);
      const option1 = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "" },
              { value: 735, name: "" },
              { value: 580, name: "" },
              { value: 484, name: "" },
              { value: 300, name: "" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option1);
    },
  },
};
</script>

<style lang="less" scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.in {
  background: #4f88ff;
}
.allin {
  background: #5050ff;
}
.out {
  background: #f26075;
}
.allout {
  background: #f49b3b;
}
.pic1 {
  height: 240px;
}
.pic2 {
  height: 240px;
}
.main-left {
  text-align: center;
}
.main-right {
  text-align: center;
}
.message {
  height: 703px;
}
</style>