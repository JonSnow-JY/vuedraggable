export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 提交按钮loading
      btnLoading: false,
      // 面板loading
      wrapperLoading: false
    };
  },
  methods: {
    /**
     * 关闭弹窗
     */
    close() {
      // 添加其他的数据处理
      this.resetData && this.resetData();
      this.$refs.ruleForm && this.$refs.ruleForm.resetFields();
      this.$emit("update:dialogVisible", false);
    },
    /**
     * 提交数据
     */
    submitData() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.btnLoading = true;
          this.doSubmit();
        } else {
          this.btnLoading = false;
          return false;
        }
      });
    },
    /**
     * 提交数据、关闭弹窗
     */
    doEmitAndClose(val) {
      this.$emit("success", val);
      this.close();
    }
  },
  watch: {
    dialogVisible(val) {
      if (val) {
        this.initForm && this.initForm();
      } else {
        // 重置data中的数据到最原始状态
        Object.assign(this.$data, this.$options.data());
      }
    }
  }
};
