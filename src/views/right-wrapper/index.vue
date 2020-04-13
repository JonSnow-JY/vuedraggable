<template lang="html">
  <el-tabs
    v-model="activeName"
    @tab-click="tabClick"
    :stretch="true"
    class="right-wrapper"
  >
    <el-tab-pane label="字段属性" name="field">
      <div
        class="empty-content"
        flex="main:center cross:center"
        v-if="!Object.keys(ruleForm).length"
      >
        请添加字段
      </div>
      <el-form :model="ruleForm" ref="ruleForm" label-position="top" v-else>
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

          <el-form-item label="大小" v-if="fieldsShow('size')">
            <div class="" flex>
              <div style="width:74px">宽度</div>
              <el-input
                v-model="ruleForm.imgWidth"
                placeholder="请输入宽度"
              ></el-input>
              <div style="width:76px;padding-left:4px;">高度</div>
              <el-input
                v-model="ruleForm.imgHeight"
                placeholder="请输入高度"
              ></el-input>
            </div>
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

          <el-form-item label="显示类型" v-if="fieldsShow('showType')">
            <el-select v-model="ruleForm.showType" placeholder="请选择显示类型">
              <el-option
                v-for="item in showTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="绑定数据类型"
            v-if="fieldsShow('bindingDataType')"
          >
            <el-select
              v-model="ruleForm.bindingDataType"
              placeholder="请选择绑定数据类型"
            >
              <el-option
                v-for="item in bindingDataTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="是否为范围选择" v-if="fieldsShow('rangeSelect')">
            <el-switch v-model="ruleForm.rangeSelect"> </el-switch>
          </el-form-item>

          <el-form-item
            label="是否获取时间戳"
            v-if="fieldsShow('getTimestamp')"
          >
            <el-switch v-model="ruleForm.getTimestamp"> </el-switch>
          </el-form-item>

          <el-form-item label="占位内容" v-if="fieldsShow('placeholder')">
            <el-input
              v-model="ruleForm.placeholder"
              placeholder="请输入占位内容"
            ></el-input>
          </el-form-item>

          <el-form-item label="提示说明文字" v-if="fieldsShow('promptCaption')">
            <el-input
              v-model="ruleForm.promptCaption"
              placeholder="请输入提示说明文字"
            ></el-input>
          </el-form-item>

          <el-form-item label="格式" v-if="fieldsShow('format')">
            <el-input
              v-model="ruleForm.format"
              placeholder="请输入格式"
            ></el-input>
          </el-form-item>

          <el-form-item label="默认值" v-if="fieldsShow('timeDefaultValue')">
            <el-time-select
              v-model="ruleForm.timeDefaultValue"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
            >
            </el-time-select>
          </el-form-item>

          <el-form-item
            label="默认值"
            prop="defaultValue"
            v-if="fieldsShow('defaultValue')"
          >
            <el-input
              v-model="ruleForm.defaultValue"
              placeholder="请输入默认值"
            ></el-input>
          </el-form-item>

          <el-form-item label="最小值" v-if="fieldsShow('min')">
            <el-input-number
              v-model="ruleForm.min"
              :min="0"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="最大值" v-if="fieldsShow('max')">
            <el-input-number
              v-model="ruleForm.max"
              :min="0"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="步长" v-if="fieldsShow('step')">
            <el-input-number
              v-model="ruleForm.step"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="默认值" v-if="fieldsShow('numberDefaultValue')">
            <el-input-number
              v-model="ruleForm.numberDefaultValue"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="布局方式" v-if="fieldsShow('layoutMethod')">
            <el-radio-group v-model="ruleForm.layoutMethod">
              <el-radio-button
                v-for="item in layoutOptions"
                :label="item.label"
                :key="item.label"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </el-form-item>

          <el-form-item label="是否多选" v-if="fieldsShow('multiSelect')">
            <el-switch v-model="ruleForm.multiSelect"> </el-switch>
          </el-form-item>

          <el-form-item label="最大上传数" v-if="fieldsShow('maxUploadsNum')">
            <el-input
              v-model="ruleForm.maxUploadsNum"
              placeholder="请输入最大上传数"
            ></el-input>
          </el-form-item>

          <el-form-item label="是否可搜索" v-if="fieldsShow('canSearch')">
            <el-switch v-model="ruleForm.canSearch"> </el-switch>
          </el-form-item>

          <el-form-item label="是否显示标签" v-if="fieldsShow('showLabel')">
            <el-switch v-model="ruleForm.showLabel"> </el-switch>
          </el-form-item>

          <el-form-item label="默认值" v-if="fieldsShow('selectDefaultValue')">
            <el-switch v-model="ruleForm.selectDefaultValue"> </el-switch>
          </el-form-item>

          <el-form-item label="选项" v-if="fieldsShow('dataType')">
            <el-radio-group v-model="ruleForm.dataType">
              <el-radio-button
                v-for="item in dataTypeOptions"
                :label="item.label"
                :key="item.label"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </el-form-item>

          <el-form-item label="自定义Class" v-if="fieldsShow('customClass')">
            <el-input
              v-model="ruleForm.customClass"
              placeholder="请输入自定义Class"
            ></el-input>
          </el-form-item>

          <el-form-item label="操作属性" v-if="fieldsShow('actionAttribute')">
            <el-checkbox-group v-model="ruleForm.actionAttribute">
              <el-checkbox
                :label="item.value"
                :disabled="ruleForm.dataBingingDisabled"
                :key="item.value"
                v-for="item in actionAttributeOptions.filter(pItem =>
                  ruleForm.actionAttributeOptions.includes(pItem.value)
                )"
                >{{ item.label }}</el-checkbox
              >
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
                v-if="!ruleForm.simpleRequired"
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
              v-if="!ruleForm.simpleRequired"
              class="d2-mt-10"
              placeholder="请填写正则表达式"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-tab-pane>

    <el-tab-pane label="表单属性" name="form">
      <el-form :model="rightRuleForm" ref="rightRuleForm" label-position="top">
        <div class="tab-wrapper">
          <el-form-item label="表单宽度" prop="formWidth">
            <el-input
              v-model="rightRuleForm.formWidth"
              placeholder="请输入表单宽度"
            ></el-input>
          </el-form-item>

          <el-form-item label="标签对齐方式" prop="tagAlignment">
            <el-radio-group v-model="rightRuleForm.tagAlignment">
              <el-radio-button
                :label="item.label"
                :key="index"
                v-for="(item, index) in alignmentOptions"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </el-form-item>

          <el-form-item label="表单标签宽度" prop="formLabelWidth">
            <el-input-number
              v-model="rightRuleForm.formLabelWidth"
              :min="0"
              :max="1000"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="自定义Class" prop="formCustomClass">
            <el-input
              v-model="rightRuleForm.formCustomClass"
              placeholder="请输入自定义Class"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {
  regularTypes,
  layoutOptions,
  dataTypeOptions,
  actionAttributeOptions,
  showTypeOptions,
  bindingDataTypeOptions,
  alignmentOptions
} from "./config";

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
      regularTypes,
      layoutOptions,
      dataTypeOptions,
      actionAttributeOptions,
      showTypeOptions,
      bindingDataTypeOptions,
      alignmentOptions,
      ruleForm: {},
      rightRuleForm: {
        // 表单宽度
        formWidth: "100%",
        // 标签对齐方式
        tagAlignment: "0",
        // 表单标签宽度
        formLabelWidth: 100,
        // 自定义Class
        formCustomClass: ""
      },
      activeName: "field"
    };
  },
  computed: {},
  watch: {
    currentObj: {
      deep: true,
      handler: function(newVal) {
        this.ruleForm = newVal;
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
      const tempArr = Object.keys(this.ruleForm);
      return tempArr.length && tempArr.includes(key);
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
  .empty-content {
    height: calc(100vh - 42px);
    font-size: 20px;
    color: #ccc;
  }
}
</style>
