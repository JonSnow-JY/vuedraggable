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
          <template v-if="fieldsShow('key')">
            <el-form-item label="字段标识">
              <el-input v-model="ruleForm.key"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('title') && !ruleForm.isLayoutField">
            <el-form-item label="标题">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('gutter')">
            <el-form-item label="栅格间隔">
              <el-input-number
                v-model="ruleForm.gutter"
                controls-position="right"
              ></el-input-number>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('width')">
            <el-form-item label="宽度">
              <el-input v-model="ruleForm.width"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('imgWidth')">
            <el-form-item label="大小">
              <div class="" flex>
                <div style="width:74px">宽度</div>
                <el-input v-model="ruleForm.imgWidth"></el-input>
                <div style="width:78px;padding-left:4px;">高度</div>
                <el-input v-model="ruleForm.imgHeight"></el-input>
              </div>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('labelWidth')">
            <el-form-item label="标签宽度">
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
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('showType')">
            <el-form-item label="显示类型">
              <el-select v-model="ruleForm.showType">
                <el-option
                  v-for="item in showTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('bindingDataType')">
            <el-form-item label="绑定数据类型">
              <el-select v-model="ruleForm.bindingDataType">
                <el-option
                  v-for="item in bindingDataTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('flexLayout')">
            <el-form-item label="Flex布局">
              <el-switch v-model="ruleForm.flexLayout"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('responsiveLayout')">
            <el-form-item label="响应式布局">
              <el-switch v-model="ruleForm.responsiveLayout"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <!-- 待完善 -->
          <template v-if="fieldsShow('rowConfig')">
            <el-form-item label="列配置项">
              <draggable
                :list="ruleForm.rowConfigOptions"
                :clone="cloneDog"
                @start="centerDragStart"
                @end="centerDragEnd"
                @change="dragChange"
                :move="dragMove"
                v-bind="sortableOptions"
              >
                <div
                  class="data-type-option data-type-option-row-config d2-mb-10"
                  flex="main:center cross:center"
                  :key="index"
                  v-for="(item, index) in ruleForm.rowConfigOptions"
                >
                  <i class="icon iconfont icon-bars"></i>
                  <el-input v-model="item.name"></el-input>
                  <div
                    class="jian-wrapper d2-ml-10"
                    flex="main:center cross:center"
                  >
                    <i class="icon iconfont icon-jian1"></i>
                  </div>
                </div>
              </draggable>
              <el-button type="text" class="add-options">添加选项</el-button>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('horizontalArrangement')">
            <el-form-item label="水平排列方式">
              <el-select v-model="ruleForm.horizontalArrangement">
                <el-option
                  v-for="item in horizontalArrangementOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('verticalArrangement')">
            <el-form-item label="垂直排列方式">
              <el-select v-model="ruleForm.verticalArrangement">
                <el-option
                  v-for="item in verticalArrangementOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('rangeSelect')">
            <el-form-item label="是否为范围选择">
              <el-switch v-model="ruleForm.rangeSelect"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('getTimestamp')">
            <el-form-item label="是否获取时间戳">
              <el-switch v-model="ruleForm.getTimestamp"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('placeholder')">
            <el-form-item label="占位内容">
              <el-input v-model="ruleForm.placeholder"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('format')">
            <el-form-item label="格式">
              <el-input v-model="ruleForm.format"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('timeDefaultValue')">
            <el-form-item label="默认值">
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
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('defaultValue')">
            <el-form-item label="默认值" prop="defaultValue">
              <el-input v-model="ruleForm.defaultValue"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('min')">
            <el-form-item label="最小值">
              <el-input-number
                v-model="ruleForm.min"
                :min="0"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('max')">
            <el-form-item label="最大值">
              <el-input-number
                v-model="ruleForm.max"
                :min="0"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('step')">
            <el-form-item label="步长">
              <el-input-number
                v-model="ruleForm.step"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('numberDefaultValue')">
            <el-form-item label="默认值">
              <el-input-number
                v-model="ruleForm.numberDefaultValue"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('layoutMethod')">
            <el-form-item label="布局方式">
              <el-radio-group v-model="ruleForm.layoutMethod">
                <el-radio-button
                  v-for="item in layoutOptions"
                  :label="item.label"
                  :key="item.label"
                  >{{ item.name }}</el-radio-button
                >
              </el-radio-group>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('multiSelect')">
            <el-form-item label="是否多选">
              <el-switch v-model="ruleForm.multiSelect"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('maxUploadsNum')">
            <el-form-item label="最大上传数">
              <el-input v-model="ruleForm.maxUploadsNum"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('promptCaption')">
            <el-form-item label="提示说明文字">
              <el-input v-model="ruleForm.promptCaption"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('canSearch')">
            <el-form-item label="是否可搜索">
              <el-switch v-model="ruleForm.canSearch"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('showLabel')">
            <el-form-item label="是否显示标签">
              <el-switch v-model="ruleForm.showLabel"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('selectDefaultValue')">
            <el-form-item label="默认值">
              <el-switch v-model="ruleForm.selectDefaultValue"> </el-switch>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('dataType')">
            <el-form-item label="选项">
              <el-radio-group v-model="ruleForm.dataType" class="d2-mb-10">
                <el-radio-button
                  v-for="item in dataTypeOptions"
                  :label="item.label"
                  :key="item.label"
                  >{{ item.name }}</el-radio-button
                >
              </el-radio-group>

              <template v-if="ruleForm.dataType === '0'">
                <draggable
                  :list="ruleForm.radioOptions"
                  :clone="cloneDog"
                  @start="centerDragStart"
                  @end="centerDragEnd"
                  @change="dragChange"
                  :move="dragMove"
                  v-bind="sortableOptions"
                >
                  <div
                    class="data-type-option d2-mb-10"
                    flex="main:center cross:center"
                    :key="index"
                    v-for="(item, index) in ruleForm.radioOptions"
                  >
                    <el-radio
                      v-model="radio"
                      size="medium"
                      v-if="ruleForm.type === 'radio'"
                    ></el-radio>
                    <el-checkbox
                      v-model="radio"
                      size="medium"
                      v-if="ruleForm.type === 'checkbox'"
                    ></el-checkbox>
                    <el-input v-model="item.name"></el-input>
                    <i class="icon iconfont icon-bars"></i>
                    <div class="jian-wrapper" flex="main:center cross:center">
                      <i class="icon iconfont icon-jian1"></i>
                    </div>
                  </div>
                </draggable>
                <el-button type="text" class="add-options">添加选项</el-button>
              </template>

              <template v-if="ruleForm.dataType === '1'">
                <el-radio-group v-model="radio" class="d2-mb-10">
                  <el-radio :label="0">赋值变量</el-radio>
                  <el-radio :label="1">方法函数</el-radio>
                </el-radio-group>
                <el-input v-model="radio" class="d2-mb-10"></el-input>
                <el-input v-model="radio" class="d2-mb-10">
                  <template slot="prepend"
                    >值<span style="padding-left:12px;"></span
                  ></template>
                </el-input>
                <el-input v-model="radio">
                  <template slot="prepend">标签</template>
                </el-input>
              </template>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('dynamicData')">
            <el-form-item label="动态数据">
              <el-radio-group v-model="radio" class="d2-mb-10">
                <el-radio :label="0">赋值变量</el-radio>
                <el-radio :label="1">方法函数</el-radio>
              </el-radio-group>
              <el-input v-model="radio" class="d2-mb-10"></el-input>
              <el-input v-model="radio" class="d2-mb-10">
                <template slot="prepend"
                  >值<span style="padding-left:24px;"></span
                ></template>
              </el-input>
              <el-input v-model="radio" class="d2-mb-10">
                <template slot="prepend"
                  >标签<span style="padding-left:12px;"></span
                ></template>
              </el-input>
              <el-input v-model="radio">
                <template slot="prepend">子选项</template>
              </el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('customClass')">
            <el-form-item label="自定义Class">
              <el-input v-model="ruleForm.customClass"></el-input>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('textPosition')">
            <el-form-item label="文案位置">
              <el-radio-group v-model="ruleForm.textPosition">
                <el-radio-button
                  v-for="item in textPositionOptions"
                  :label="item.label"
                  :key="item.label"
                  >{{ item.name }}</el-radio-button
                >
              </el-radio-group>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('actionAttribute')">
            <el-form-item label="操作属性">
              <el-checkbox-group v-model="ruleForm.actionAttribute">
                <el-checkbox
                  :label="item.value"
                  :key="item.value"
                  :disabled="
                    ruleForm.actionAttributeDisabledOptions &&
                      ruleForm.actionAttributeDisabledOptions.includes(
                        item.value
                      )
                  "
                  v-for="item in actionAttributeOptions.filter(pItem =>
                    ruleForm.actionAttributeOptions.includes(pItem.value)
                  )"
                  >{{ item.label }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
            <el-divider></el-divider>
          </template>

          <template v-if="fieldsShow('required')">
            <el-form-item label="校验">
              <div class="" flex>
                <el-checkbox v-model="ruleForm.required" class="d2-mr-10"
                  >必填</el-checkbox
                >
                <el-select
                  v-model="ruleForm.requiredType"
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
            <el-divider></el-divider>
          </template>
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
          <el-divider></el-divider>

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
          <el-divider></el-divider>

          <el-form-item label="表单标签宽度" prop="formLabelWidth">
            <el-input-number
              v-model="rightRuleForm.formLabelWidth"
              :min="0"
              :max="1000"
            ></el-input-number>
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="自定义Class" prop="formCustomClass">
            <el-input v-model="rightRuleForm.formCustomClass"></el-input>
          </el-form-item>
          <el-divider></el-divider>
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
  alignmentOptions,
  textPositionOptions,
  horizontalArrangementOptions,
  verticalArrangementOptions
} from "./config";

import draggable from "vuedraggable";

export default {
  name: "",
  components: { draggable },
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
      textPositionOptions,
      horizontalArrangementOptions,
      verticalArrangementOptions,
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
      activeName: "field",
      radio: 0,
      sortableOptions: {
        animation: 300,
        handle: ".icon-bars",
        ghostClass: "sortable-ghost", //拖动元素的class的占位符的类名
        chosenClass: "sortable-chosen", // 选中元素的class
        dragClass: "sortable-drag" //拖动元素的class
      }
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
    },
    cloneDog() {},
    centerDragStart() {},
    centerDragEnd() {},
    dragChange() {},
    dragMove() {}
  }
};
</script>

<style lang="scss">
.right-wrapper {
  .el-date-editor,
  .el-select,
  .is-controls-right {
    width: 100% !important;
  }
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
  .el-divider--horizontal {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .data-type-option {
    .el-radio {
      margin-right: 0 !important;
    }
    .el-checkbox {
      margin-right: 10px;
    }
    .icon-bars {
      margin: 0 8px;
      font-size: 20px;
      color: #606266;
      cursor: move;
    }
    .jian-wrapper {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      color: #f56c6c;
      background: #fef0f0;
      border: 1px solid #fbc4c4;
      cursor: pointer;
      flex-shrink: 0;
      &:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
  }

  .add-options {
    margin-left: 24px;
  }
}
</style>
