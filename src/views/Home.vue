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
              sort: false,
              onChange: log
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
            :class="[item.isActive ? 'item-active' : '']"
            v-for="(item, index) in itemArr"
            :key="item.id"
            @click="setCenterActive(index)"
          >
            <el-form-item :label="item.title" class="form-item">
              <el-input v-model="form.name" :rows="6"></el-input>
            </el-form-item>
            <div class="empty-item"></div>
            <template v-if="item.isActive">
              <i class="icon iconfont icon-tuozhuai"></i>
              <i
                class="icon iconfont icon-lajitong"
                @click.stop="doDel(index)"
              ></i>
              <i
                class="icon iconfont icon-fuzhi1"
                @click.stop="doCopy(index)"
              ></i>
            </template>
          </div>
        </draggable>
      </el-form>
    </div>
    <div class="right">
      <right-wrapper />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import leftConfig from "./config/left";

import RightWrapper from "./right-wrapper";

import { now } from "lodash";

export default {
  name: "",
  components: {
    draggable,
    RightWrapper
  },
  mixins: [],
  props: {},
  data() {
    return {
      leftConfig,
      form: {
        name: ""
      },
      itemArr: [],
      drag: false,
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
    log() {
      console.log(999);
    },
    cloneDog({ title }) {
      console.log(1111);
      return {
        id: now(),
        title,
        isActive: false
      };
    },
    leftClick(index, key) {
      this.itemArr.push({ ...this.leftConfig[key][index], id: now() });
      this.setCenterActive(this.itemArr.length - 1);
    },
    leftDragStart() {
      console.log("leftDragStart");
    },
    leftDragEnd(evt) {
      console.log("leftDragEnd");
      const { newIndex } = evt;
      this.setCenterActive(newIndex);
    },
    centerDragStart() {
      console.log("centerDragStart");
    },
    centerDragEnd() {
      console.log("centerDragEnd");
      console.log(this.itemArr);
    },
    dragMove() {
      console.log("dragMove");
    },
    dragChange() {
      console.log("dragChange");
    },
    /**
     * 点击选中，设置中间区域能够滚动
     */
    setCenterActive(index) {
      if (!this.itemArr.length) return;
      this.itemArr.map((item, idx) => {
        this.$set(this.itemArr[idx], "isActive", idx === index);
      });
    },
    /**
     * 复制，快捷添加
     */
    doCopy(index) {
      this.itemArr.splice(index, 0, { ...this.itemArr[index], id: now() });
      this.setCenterActive(index + 1);
    },
    /**
     * 删除
     */
    async doDel(index) {
      this.itemArr.splice(index, 1);
      const tempIndex = index === this.itemArr.length ? index - 1 : index;
      this.setCenterActive(tempIndex);
    },
    /**
     * 清空
     */
    doClear() {
      this.itemArr = [];
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
    .form-wrapper {
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
          .empty-item {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
          }
          .icon-lajitong,
          .icon-fuzhi1,
          .icon-tuozhuai {
            position: absolute;

            background: #409eff;
            color: #fff;
            padding: 4px;
            z-index: 1;
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
        }
        // 选中元素的class
        .sortable-chosen {
        }
        // 拖动元素的class的占位符的类名
        .sortable-ghost {
          margin-bottom: 9px;
          width: 100%;
          &.item-wrapper,
          &.el-col {
            background: red;
            border: none;
            height: 4px;
            width: 100%;
            margin-top: 9px;
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
  }
  .right {
    width: $width;
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
  }
}
</style>
