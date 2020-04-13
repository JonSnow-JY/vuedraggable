export default {
  基础字段: [
    {
      // 图标
      icon: "",
      // 类型
      type: "inputText",
      // 标题
      title: "单行文本",
      // 宽度
      width: "100%",
      // 标签宽度
      labelWidth: 100,
      // 自定义标签宽度
      customizeLabelWidthDisabled: false,
      // 占位内容
      placeholder: "",
      // 默认值
      defaultValue: "",
      // 自定义Class
      customClass: "",
      // 数据绑定选项的初始状态
      dataBingingDisabled: true,
      // 操作属性
      actionAttribute: ["0"],
      // 显示的操作属性选项
      actionAttributeOptions: [0, 1, 2, 3],
      // 必填
      required: false,
      // 只验证必填
      simpleRequired: false,
      // 必填类型
      requiredType: "",
      // 必填的正则
      requiredPattern: ""
    },
    {
      icon: "",
      type: "textarea",
      title: "多行文本",
      width: "100%",
      labelWidth: 100,
      customizeLabelWidthDisabled: false,
      placeholder: "",
      defaultValue: "",
      customClass: "",
      dataBingingDisabled: true,
      actionAttribute: [0],
      actionAttributeOptions: [0, 1, 2],
      required: false,
      simpleRequired: false,
      requiredType: "",
      requiredPattern: ""
    },
    {
      icon: "",
      type: "inputNumber",
      title: "计数器",
      width: "100%",
      labelWidth: 100,
      customizeLabelWidthDisabled: false,
      // 最小值
      min: 0,
      //最大值
      max: 10000,
      // 步长
      step: 1,
      // num默认值
      numberDefaultValue: 0,
      customClass: "",
      actionAttribute: [0],
      actionAttributeOptions: [0, 1, 2],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "radio",
      title: "单选框组",
      width: "100%",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      // 布局方式
      layoutMethod: "0",
      // 是否显示标签
      showLabel: false,
      // 数据类型
      dataType: "0",
      // 选项
      radioOptions: [],
      customClass: "",
      actionAttribute: [0],
      actionAttributeOptions: [0, 1, 2],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "checkbox",
      title: "多选框组",
      width: "100%",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      layoutMethod: "0",
      showLabel: false,
      dataType: "0",
      radioOptions: [],
      customClass: "",
      actionAttribute: [0],
      actionAttributeOptions: [0, 1, 2],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "timePicker",
      title: "时间选择器",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      // 范围选择
      rangeSelect: false,
      placeholder: "",
      // 格式
      format: "HH:mm:ss",
      // 时间默认值
      timeDefaultValue: null,
      customClass: "",
      actionAttribute: ["0", "5", "6", "7"],
      actionAttributeOptions: ["0", "1", "2", "3", "5", "6", "7"],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "timePicker",
      title: "日期选择器",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      placeholder: "",
      // 显示类型
      showType: "",
      // 是否获取时间戳
      getTimestamp: false,
      // 格式
      format: "yyyy-MM-dd",
      customClass: "",
      actionAttribute: ["0", "5", "6"],
      actionAttributeOptions: ["0", "1", "2", "3", "5", "6"],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "select",
      title: "下拉选择框",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      placeholder: "",
      // 是否多选
      multiSelect: false,
      // 是否可搜索
      canSearch: false,
      showLabel: false,
      dataType: "0",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1", "3", "6"],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "switch",
      title: "开关",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      // 开关默认值
      selectDefaultValue: false,
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1", "3"],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "text",
      title: "文字",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      defaultValue: "This is a text",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1"]
    }
  ],
  高级字段: [
    {
      icon: "",
      type: "customArea",
      title: "自定义区域",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      // 绑定数据类型
      bindingDataType: "0",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1"]
    },
    {
      icon: "",
      type: "file",
      title: "文件",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      // 最大上传数
      maxUploadsNum: "9",
      // 提示说明文字
      promptCaption: "",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1", "3"]
    },
    {
      icon: "",
      type: "img",
      title: "图片",
      width: "",
      // 大小
      imgWidth: "", //宽度
      imgHeight: "", //高度
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      min: 0,
      multiSelect: false,
      maxUploadsNum: 8,
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1", "2", "3", "8", "9"]
    },
    {
      icon: "",
      type: "caccader",
      title: "级联选择器",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      placeholder: "",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeOptions: ["0", "1", "3", "6"]
    },
    {
      title: "子表单",
      icon: ""
    }
  ],
  布局字段: [
    {
      title: "栅格布局",
      icon: ""
    },
    {
      title: "标签页",
      icon: ""
    },
    {
      title: "分割线",
      icon: ""
    }
  ]
};
