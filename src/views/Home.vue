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
            v-bind="{
              group: { name: 'itemLeft', pull: 'clone', put: false },
              sort: false,
              onChange: log
            }"
          >
            <el-col :span="12" v-for="(item, index) in val" :key="index">
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
        <el-button type="text" class="d2-mr-10">清空</el-button>
        <el-button type="text" class="d2-mr-10">预览</el-button>
      </div>
      <el-form ref="form" :model="form" label-width="100px" label-suffix=":">
        <draggable
          :list="itemArr"
          class="main d2-p-10"
          :clone="cloneDog"
          v-bind="{
            group: { name: 'itemCenter', put: ['itemLeft'] },
            animation: 200,
            easing: 'cubic-bezier(1, 0, 0, 1)',
            ghostClass: 'sortable-ghost', //拖动元素的class的占位符的类名
            chosenClass: 'sortable-chosen', // 选中元素的class
            dragClass: 'sortable-drag', //拖动元素的class
            onMove: dragMove,
            onEnd: dragEnd,
            onStart: dragStart,
            onChange: dragChange
          }"
        >
          <div
            class="item-wrapper"
            v-for="(item, index) in itemArr"
            :key="index"
          >
            <el-form-item :label="item.title" class="form-item">
              <el-input
                v-model="form.name"
                type="textarea"
                :rows="4"
              ></el-input>
            </el-form-item>
            <div class="empty-item"></div>
          </div>
        </draggable>
      </el-form>
    </div>
    <div class="right">
      1
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import leftConfig from "./config/left";

import { uniqueId } from "lodash";

export default {
  name: "",
  components: {
    draggable
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
      drag: false
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
      return {
        id: uniqueId(),
        title
      };
    },
    dragStart() {
      console.log("dragStart");
      this.drag = true;
    },
    dragEnd() {
      console.log("dragEnd");
      console.log(this.itemArr);
      this.drag = false;
    },
    dragMove() {
      console.log("dragMove");
    },
    dragChange() {
      console.log("dragChange");
    }
  }
};
</script>

<style lang="scss" scoped>
$border: 1px solid #e0e0e0;
$width: 300px;
.home {
  color: #333;
  .left {
    width: $width;
    height: 100vh;
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
    .top {
      height: 46px;
      border-bottom: $border;
    }
    .main {
      height: calc(100vh - 47px);
      .item-wrapper {
        position: relative;
        .empty-item {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
        }
      }
      // 选中元素的class
      .sortable-chosen {
        .item {
          display: none;
        }
      }
      // 拖动元素的class的占位符的类名
      .sortable-ghost {
        margin-bottom: 18px;
        width: 100%;
        &.item-wrapper {
          background: red;
          height: 4px;
          width: 100%;
          .form-item {
            display: none;
          }
        }
      }
      // 拖动元素的class
      .sortable-drag {
      }
    }
  }
  .right {
    width: $width;
    height: 100vh;
  }
}
</style>
