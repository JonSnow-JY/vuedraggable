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
          <el-form-item label="字段标识" v-if="fieldsShow('key')">
            <el-input
              v-model="ruleForm.key"
              placeholder="请输入字段标识"
            ></el-input>
          </el-form-item>

          <el-form-item label="标题" v-if="fieldsShow('title')">
            <el-input
              v-model="ruleForm.title"
              placeholder="请输入标题"
            ></el-input>
          </el-form-item>

          <el-form-item label="宽度" v-if="fieldsShow('width')">
            <el-input
              v-model="ruleForm.width"
              placeholder="请输入宽度"
            ></el-input>
          </el-form-item>

          <el-form-item label="标签宽度" v-if="fieldsShow('labelWidth')">
            <el-checkbox
              v-model="ruleForm.customizeLabelWidthDisabled"
              class="d2-mr-10"
              >自定义</el-checkbox
            >
            <el-input-number
              v-model="ruleForm.labelWidth"
              :disabled="!ruleForm.customizeLabelWidthDisabled"
              :min="1"
              :max="400"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="占位内容" v-if="fieldsShow('placeholder')">
            <el-input
              v-model="ruleForm.placeholder"
              placeholder="请输入占位内容"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="默认值"
            prop="defaultValue"
            v-if="fieldsShow('placeholder')"
          >
            <el-input
              v-model="ruleForm.defaultValue"
              placeholder="请输入默认值"
            ></el-input>
          </el-form-item>

          <el-form-item label="自定义Class" v-if="fieldsShow('customClass')">
            <el-input
              v-model="ruleForm.customClass"
              placeholder="请输入自定义Class"
            ></el-input>
          </el-form-item>

          <el-form-item label="操作属性" v-if="fieldsShow('actionAttribute')">
            <el-checkbox-group v-model="ruleForm.actionAttribute">
              <el-checkbox :label="0" :disabled="ruleForm.dataBingingDisabled"
                >数据绑定</el-checkbox
              >
              <el-checkbox :label="1">隐藏</el-checkbox>
              <el-checkbox :label="2">禁用</el-checkbox>
              <el-checkbox :label="3">显示密码</el-checkbox>
              <el-checkbox :label="4">文本框可输入</el-checkbox>
              <el-checkbox :label="5">显示清除按钮</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="校验" v-if="fieldsShow('required')">
            <div class="" flex>
              <el-checkbox v-model="ruleForm.required" class="d2-mr-10"
                >必填</el-checkbox
              >
              <el-select
                v-model="ruleForm.requiredType"
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
              v-model="ruleForm.requiredPattern"
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
      <el-tab-pane label="表单属性" name="form">
        <div class="tab-wrapper">
          <el-form-item label="表单宽度" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入表单宽度"
            ></el-input>
          </el-form-item>
          <el-form-item label="标签对齐方式" prop="routerName">
            <el-radio-group v-model="ruleForm.routerName">
              <el-radio-button label="左对齐"></el-radio-button>
              <el-radio-button label="右对齐"></el-radio-button>
              <el-radio-button label="顶部对齐"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="表单标签宽度" prop="num">
            <el-input-number
              v-model="ruleForm.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="组件尺寸" prop="routerName">
            <el-radio-group v-model="ruleForm.routerName">
              <el-radio-button label="medium"></el-radio-button>
              <el-radio-button label="small"></el-radio-button>
              <el-radio-button label="mini"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="自定义Class" prop="routerName">
            <el-input
              v-model="ruleForm.routerName"
              placeholder="请输入自定义Class"
            ></el-input>
          </el-form-item>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    // 当前选中或者拖拽的数据对象
    currentObj: {
      type: Object,
      default: () => ({})
    }
  },
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
        // 布局方式
        layoutMethod: ""
      },
      rules: {},
      activeName: "field"
    };
  },
  computed: {},
  watch: {
    currentObj: {
      deep: true,
      handler: function(val) {
        console.log(val);
        this.ruleForm = val;
      }
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    /**
     * tab切换
     */
    tabClick(val) {
      console.log(val);
    },
    /**
     * 字段是否显示（通过key字段验证）
     */
    fieldsShow(key) {
      return Object.keys(this.ruleForm).includes(key);
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
  .el-checkbox__label {
    font-size: 13px !important;
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
