<template>
  <div>
    <el-row type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2><i class="el-icon-discover"></i> Vue Manage System</h2>
        </div>
        <el-form
          :model="myform"
          :rules="myrules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="myform.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="myform.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="login" type="primary" @click="login"
              >立即登陆</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { post } from "@/utils/http.js";
import { setToken } from "@/utils/auth.js";
export default {
  data() {
    var checkpsd = (rule, value, callback) => {
      const reg = /^\w{4,8}$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入4-8位数字字母组合"));
      }
    };
    return {
      myform: {
        username: "",
        password: "",
      },
      myrules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { validator: checkpsd, trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          post("/login", this.myform)
            .then((res) => {
              const { nickname, token } = res;
              setToken(token);
              sessionStorage.setItem("nickname", nickname);
              this.$router.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  width: 500px;
  margin-top: 200px;
}
.clearfix {
  text-align: center;
}
.login {
  width: 100%;
}
</style>