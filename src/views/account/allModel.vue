<template>
  <div>
    <el-dialog :title="title" :visible="visible" width="30%" @close="close">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="角色" prop="character">
          <el-select v-model="ruleForm.character" style="width: 100%">
            <el-option label="业务人员" value="shanghai"></el-option>
            <el-option label="审核人员" value="beijing"></el-option>
            <el-option label="风控人员" value="shanghai"></el-option>
            <el-option label="管理员" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" prop="reason">
          <el-input v-model="ruleForm.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    visible: {
      require: true,
      type: Boolean,
    },
    title:{
      require:true,
      type:String
    }
  },
  data() {
    return {
      ruleForm: {
        charater: "",
        remark: "",
        reason: "",
      },
      rules: {
        charater: [
          { required: true, message: "请选择角色信息", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    close() {
      this.$emit("hide");
    },
  },
  computed: {
    ...mapState(["rowData"]),
  },
  watch: {
    visible() {
      this.ruleForm = {
        charater: this.rowData.charater,
        remark: this.rowData.remark,
        reason: this.rowData.reason,
      };
    },
  },
};
</script>

<style lang="less" scoped>
</style>