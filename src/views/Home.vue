<template lang="html">
  <div class="home" flex>
    <div class="left d2-p-10 d2-pt">
      <div v-for="(val, key, idx) in leftConfig" :key="idx" class="d2-pb-10">
        <div class="title d2-mb-10">
          {{ key }}
        </div>
        <el-row :gutter="10">
          <draggable
            :list="val"
            :clone="cloneDog"
            @start="leftDragStart"
            @end="leftDragEnd"
            v-bind="{
              group: { name: 'itemLeft', pull: 'clone', put: false },
              sort: false
            }"
          >
            <el-col
              :span="12"
              v-for="(item, index) in val"
              :key="index"
              @click.native="leftClick(index, key)"
            >
              <div class="item  d2-mb-10">
                {{ item.title }}
              </div>
            </el-col>
          </draggable>
        </el-row>
      </div>
    </div>
    <div class="center" flex-box="1">
      <div class="top" flex="dir:right">
        <el-button
          type="text"
          class="d2-mr-10"
          @click="doClear"
          :disabled="!itemArr.length"
          ><i class="icon iconfont icon-lajitong clear"></i>清空</el-button
        >
        <el-button type="text" class="d2-mr-10">
          <i class="icon iconfont icon-yulan preview"></i>预览</el-button
        >
      </div>

      <drag-wrapper :form="form" :itemArr="itemArr" :currentObj="currentObj" />
    </div>

    <div class="right">
      <right-wrapper :currentObj="currentObj" />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import leftConfig from "./config/left";

import RightWrapper from "./right-wrapper";

import DragWrapper from "./drag-wrapper";

import { now } from "lodash";

export default {
  name: "",
  components: {
    draggable,
    RightWrapper,
    DragWrapper
  },
  mixins: [],
  props: {},
  data() {
    return {
      leftConfig,
      form: { num: "" },
      itemArr: [],
      // 当前选中的对象或者拖拽的对象
      currentObj: null
    };
  },
  computed: {},
  watch: {
    currentObj: {
      deep: true,
      handler: function(val) {
        console.log(val);
      }
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    /**
     * 拖拽结束之后，数据格式化处理
     */
    cloneDog(val) {
      return {
        id: now(),
        key: `${val.type}_${now()}`,
        ...val,
        isActive: false,
        tasks: []
      };
    },
    leftClick(index, key) {
      const tempObj = this.leftConfig[key][index];
      this.itemArr.push({
        ...tempObj,
        id: now(),
        key: `${tempObj.type}_${now()}`,
        tasks: []
      });
      this.setCenterActive(this.itemArr.length - 1);
    },
    leftDragStart() {
      console.log("leftDragStart");
    },
    /**
     * 左侧拖拽结束
     */
    leftDragEnd(evt) {
      console.log("leftDragEnd");
      const { newIndex } = evt;
      this.setCenterActive(newIndex);
    },
    /**
     * 点击选中，设置中间区域能够滚动
     */
    setCenterActive(index) {
      if (!this.itemArr.length) return;
      this.itemArr.map((item, idx) => {
        this.$set(this.itemArr[idx], "isActive", idx === index);
      });
      this.currentObj = this.itemArr[index];
    },
    /**
     * 清空
     */
    doClear() {
      this.itemArr = [];
      this.currentObj = {};
    }
  }
};
</script>

<style lang="scss">
$border: 1px solid #e0e0e0;
$width: 300px;
.home {
  color: #333;
  .left {
    width: $width;
    height: 100vh;
    user-select: none;
    flex-shrink: 0;
    .title {
      font-size: 14px;
    }
    .item {
      background: #f4f6fc;
      text-align: center;
      font-size: 13px;
      padding-top: 8px;
      padding-bottom: 8px;
      border: 1px solid #f4f6fc;
      cursor: pointer;
      &:hover {
        color: #409eff;
        border: 1px dashed #409eff;
      }
    }
  }
  .center {
    border-left: $border;
    border-right: $border;
    font-size: 13px;
    user-select: none;
    .top {
      height: 41px;
      border-bottom: $border;
      .clear {
        position: relative;
        top: 1px;
        margin-right: 2px;
      }
      .preview {
        position: relative;
        top: 1px;
        margin-right: 4px;
      }
    }
  }
  .right {
    width: $width;
    height: 100vh;
    flex-shrink: 0;
    overflow: auto;
    overflow-x: hidden;
  }
}
</style>
