<template lang="html">
  <el-form
    ref="form"
    :model="form"
    label-width="82px"
    label-suffix=":"
    class="form-wrapper"
  >
    <span
      class="empty-text"
      flex="main:center cross:center"
      v-if="!itemArr.length"
      >从左侧拖拽或点击来添加字段</span
    >
    <draggable
      :list="itemArr"
      class="main"
      :clone="cloneDog"
      @start="centerDragStart"
      @end="centerDragEnd"
      @change="dragChange"
      :move="dragMove"
      v-bind="sortableOptions"
    >
      <div
        class="item-wrapper"
        :class="{
          'item-active': item.isActive,
          'is-hidden': item.actionAttribute.includes('1')
        }"
        v-for="(item, index) in itemArr"
        :key="item.id"
        @click="setCenterActive(index)"
      >
        <nested v-if="item.type === 'layout'" :tasks="item.layoutOptions" />

        <drag-item
          v-else
          :item="item"
          :form="form"
          :index="index"
          @doDel="doDel"
          @doCopy="doCopy"
        />
      </div>
    </draggable>
  </el-form>
</template>

<script>
import draggable from "vuedraggable";
import Nested from "./components/nested";
import DragItem from "./components/drag-item";

import { now } from "lodash";

export default {
  name: "",
  components: {
    draggable,
    Nested,
    DragItem
  },
  mixins: [],
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    currentObj: {
      type: Object,
      default: () => ({})
    },
    itemArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sortableOptions: {
        group: { name: "itemCenter", put: ["itemLeft"] },
        animation: 300,
        disabled: false,
        handle: ".icon-tuozhuai",
        easing: "cubic-bezier(1, 0, 0, 1)",
        ghostClass: "sortable-ghost", //拖动元素的class的占位符的类名
        chosenClass: "sortable-chosen", // 选中元素的class
        dragClass: "sortable-drag" //拖动元素的class
      }
    };
  },
  computed: {},
  watch: {},
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
        key: `input_${now()}`,
        ...val,
        isActive: false,
        tasks: []
      };
    },
    centerDragStart() {
      console.log("centerDragStart");
    },
    centerDragEnd(evt) {
      console.log(evt);
      console.log("centerDragEnd");
      console.log(this.itemArr);
    },
    dragChange() {
      console.log("dragChange");
    },
    dragMove() {
      console.log("dragMove");
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
     * 复制，快捷添加
     */
    doCopy(index) {
      this.itemArr.splice(index, 0, {
        ...this.itemArr[index],
        id: now()
      });
      this.setCenterActive(index + 1);
    },

    /**
     * 删除
     */
    async doDel(index) {
      this.itemArr.splice(index, 1);
      const tempIndex = index === this.itemArr.length ? index - 1 : index;
      this.setCenterActive(tempIndex);
    }
  }
};
</script>

<style lang="scss">
.form-wrapper {
  .el-radio__label {
    font-size: 13px !important;
  }
  position: relative;
  .empty-text {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    font-size: 20px;
    color: #ccc;
  }
  .main {
    height: calc(100vh - 66px);
    overflow: auto;
    overflow-x: hidden;
    margin: 10px;
    padding: 2px;
    border: 1px dashed #999;
    position: relative;
    .item-wrapper {
      position: relative;
      border: 1px dashed #ccc;
      margin-bottom: 2px;
      border: 1px dashed hsla(0, 0%, 66.7%, 0.5);
      background: rgba(236, 245, 255, 0.3);
      overflow: hidden;
      .empty-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        z-index: 2;
      }
      .icon-lajitong,
      .icon-fuzhi1,
      .icon-tuozhuai {
        position: absolute;

        background: #409eff;
        color: #fff;
        padding: 4px;
        z-index: 2;
      }
      .icon-tuozhuai {
        top: 0;
        left: 0;
        cursor: move;
      }
      .icon-lajitong,
      .icon-fuzhi1 {
        bottom: 0;
        cursor: pointer;
      }
      .icon-lajitong {
        right: 0;
      }
      .icon-fuzhi1 {
        right: 24px;
      }
      &:hover {
        background: #ecf5ff;
      }
      &.item-active {
        border: 2px solid #409eff;
      }
      &.is-hidden {
        background: #fef0f0;
      }
    }
    // 选中元素的class
    .sortable-chosen {
    }
    // 拖动元素的class的占位符的类名
    .sortable-ghost {
      &.item-wrapper,
      &.el-col {
        background: red;
        border: none;
        height: 4px;
        width: 100%;
      }
      &.item-wrapper {
        .form-item,
        .icon-fuzhi1,
        .icon-lajitong,
        .icon-tuozhuai {
          display: none;
        }
      }
      &.el-col {
        .item {
          display: none;
        }
      }
    }
    // 拖动元素的class
    .sortable-drag {
    }
  }
}
</style>
