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
            :group="{ name: 'item', pull: 'clone', put: true }"
            @change="log"
            :sort="false"
            :clone="cloneDog"
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
          v-model="itemArr"
          @change="dragChange"
          @start="dragStart"
          @end="dragEnd"
          @move="dragMove"
          class="main d2-p-10"
          v-bind="{
            ghostClass: 'ghostClass',
            dragClass: 'dragClass',
            group: 'item',
            animation: 200
          }"
        >
          <el-form-item
            :label="item.title"
            v-for="(item, index) in itemArr"
            :key="index"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
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
      .dragClass {
        // background: red;
      }
      .ghostClass {
        height: 4px;
        background: red;
        width: 100%;
        .item {
          display: none;
        }
      }
    }
  }

  .right {
    width: $width;
    height: 100vh;
  }
}
</style>
