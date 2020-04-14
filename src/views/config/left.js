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
      // 操作属性
      actionAttribute: ["0"],
      // 操作属性中disabled项
      actionAttributeDisabledOptions: ["0"],
      // 显示的操作属性选项
      actionAttributeOptions: ["0", "1", "3", "4"],
      // 必填
      required: false,
      // 只验证必填
      simpleRequired: false,
      // 必填类型
      requiredType: "1",
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
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3"],
      required: false,
      simpleRequired: false,
      requiredType: "",
      requiredPattern: ""
    },
    {
      icon: "",
      type: "inputNumber",
      title: "计数器",
      width: "",
      labelWidth: 100,
      customizeLabelWidthDisabled: false,
      // 最小值
      min: 0,
      //最大值
      max: 9,
      // 步长
      step: 1,
      // num默认值
      numberDefaultValue: 0,
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3"],
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
      // 单选框默认值
      radioDefault: "",
      // 选项
      radioOptions: [
        {
          label: "0",
          name: "Option 1"
        },
        {
          label: "1",
          name: "Option 2"
        },
        {
          label: "2",
          name: "Option 3"
        }
      ],
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3"],
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
      // 多选框组默认值
      checkboxDefault: [],
      // 多选框配置文件
      checkboxOptions: [
        {
          label: "1",
          name: "Option 1"
        },
        {
          label: "2",
          name: "Option 2"
        },
        {
          label: "3",
          name: "Option 3"
        }
      ],
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3"],
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
      // 开始时间占位内容
      startplaceholder: "",
      // 结束时间占位内容
      endplaceholder: "",
      // 格式
      format: "HH:mm:ss",
      // 时间默认值
      timeDefaultValue: null,
      customClass: "",
      actionAttribute: ["0", "5", "6", "7"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "2", "3", "5", "6", "7"],
      required: false,
      simpleRequired: true
    },
    {
      icon: "",
      type: "datePicker",
      title: "日期选择器",
      width: "",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      placeholder: "",
      // 显示类型
      showType: "2",
      // 是否获取时间戳
      getTimestamp: false,
      // 格式
      format: "yyyy-MM-dd",
      customClass: "",
      actionAttribute: ["0", "5", "6"],
      actionAttributeDisabledOptions: ["0"],
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
      radioOptions: [
        {
          label: "1",
          name: "Option 1"
        },
        {
          label: "2",
          name: "Option 2"
        },
        {
          label: "3",
          name: "Option 3"
        }
      ],
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
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
      actionAttributeDisabledOptions: ["0"],
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
      actionAttributeDisabledOptions: ["0"],
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
      actionAttributeDisabledOptions: ["0"],
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
      actionAttributeDisabledOptions: ["0"],
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
      dynamicData: "",
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3", "6"]
    },
    {
      icon: "",
      type: "childTable",
      title: "子表单",
      customizeLabelWidthDisabled: false,
      labelWidth: 100,
      customClass: "",
      actionAttribute: ["0"],
      actionAttributeDisabledOptions: ["0"],
      actionAttributeOptions: ["0", "1", "3"]
    }
  ],
  布局字段: [
    {
      icon: "",
      // 不显示标题
      isLayoutField: true,
      type: "layout",
      title: "栅格布局",
      // 栅格间隔
      gutter: 0,
      // Flex布局
      flexLayout: true,
      // 响应式布局
      responsiveLayout: false,
      // 列配置项
      rowConfig: "",
      // 栅格初始化，默认有两个栅格
      layoutOptions: [
        { span: 12, title: 1, tasks: [] },
        { span: 12, title: 2, tasks: [] }
      ],
      rowConfigOptions: [
        {
          value: "12"
        },
        {
          value: "12"
        }
      ],
      // 水平排列方式
      horizontalArrangement: "0",
      // 垂直排列方式
      verticalArrangement: "0",
      customClass: "",
      actionAttribute: [],
      actionAttributeOptions: ["1"]
    },
    {
      icon: "",
      isLayoutField: true,
      type: "divider",
      title: "分割线",
      // 文案位置
      textPosition: "0",
      actionAttribute: [],
      actionAttributeOptions: ["1"]
    }
  ]
};
