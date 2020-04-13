<template lang="html">
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    label-position="top"
    class="right-wrapper"
  >
    <el-tabs v-model="activeName" @tab-click="tabClick" :stretch="true">
      <el-tab-pane label="字段属性" name="field">
        <div class="tab-wrapper">
          <el-form-item label="字段标识" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入字段标识"
            ></el-input>
          </el-form-item>
          <el-form-item label="标题" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入标题"
            ></el-input>
          </el-form-item>
          <el-form-item label="宽度" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入宽度"
            ></el-input>
          </el-form-item>
          <el-form-item label="标签宽度" prop="num">
            <el-checkbox v-model="ruleForm.routerName" class="d2-mr-10"
              >自定义</el-checkbox
            >
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="占位内容" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入占位内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="默认值" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入默认值"
            ></el-input>
          </el-form-item>
          <el-form-item label="操作属性" prop="actionAttribute">
            <el-checkbox-group v-model="ruleForm.actionAttribute">
              <el-checkbox label="数据绑定"></el-checkbox>
              <el-checkbox label="隐藏"></el-checkbox>
              <el-checkbox label="禁用"></el-checkbox>
              <el-checkbox label="显示密码"></el-checkbox>
              <el-checkbox label="文本框可输入"></el-checkbox>
              <el-checkbox label="显示清除按钮"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="校验" prop="routerName">
            <div class="" flex>
              <el-checkbox v-model="ruleForm.routerName" class="d2-mr-10"
                >必填</el-checkbox
              >
              <el-select
                v-model="ruleForm.routerName"
                placeholder="请选择"
                flex-box="1"
              >
                <el-option
                  v-for="item in regularTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <el-input
              v-model="ruleForm.routerName"
              class="d2-mt-10"
              placeholder="请填写正则表达式"
            ></el-input>
          </el-form-item>
          <el-form-item label="最小值" prop="num">
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="最大值" prop="num">
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="步长" prop="num">
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="默认值" prop="num">
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="布局方式" prop="layoutMethod">
            <el-checkbox-group v-model="ruleForm.layoutMethod">
              <el-checkbox-button
                v-for="item in layoutOptions"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox-button
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否显示标签" prop="layoutMethod">
            <el-switch v-model="ruleForm.layoutMethod"> </el-switch>
          </el-form-item>
          <el-form-item label="选项" prop="layoutMethod">
            <el-checkbox-group v-model="ruleForm.layoutMethod">
              <el-checkbox-button
                v-for="item in dataTypeOptions"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox-button
              >
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="form"></el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      regularTypes: [
        {
          value: "1",
          label: "字符串"
        },
        {
          value: "2",
          label: "数字"
        },
        {
          value: "3",
          label: "布尔值"
        },
        {
          value: "4",
          label: "整数"
        },
        {
          value: "5",
          label: "浮点数"
        },
        {
          value: "6",
          label: "URL地址"
        },
        {
          value: "7",
          label: "邮箱地址"
        },
        {
          value: "8",
          label: "十六进制"
        }
      ],
      layoutOptions: ["块级", "行内"],
      dataTypeOptions: ["静态数据", "动态数据"],
      ruleForm: {
        num: 1,
        // 操作属性
        actionAttribute: [],
        // 布局方式
        layoutMethod: ""
      },
      rules: {},
      activeName: "field"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    /**
     * tab切换
     */
    tabClick(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
.right-wrapper {
  .el-tabs__item {
    height: 41px !important;
    line-height: 41px !important;
    padding: 0 !important;
  }
  .el-tabs__active-bar {
    height: 3px !important;
  }
  .el-form-item__label {
    line-height: 14px !important;
  }
  .el-tabs__header {
    margin-bottom: 0 !important;
  }
  .tab-wrapper {
    height: calc(100vh - 40px);
    padding: 10px;
    overflow: auto;
    overflow-x: hidden;
  }
}
</style>
