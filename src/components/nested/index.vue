<template>
  <el-row :gutter="0" class="nested">
    <draggable :list="tasks" v-bind="sortableOptions" class="draggable">
      <el-col :span="el.span || 24" v-for="el in tasks" :key="el.id">
        <div class="box">
          <nested-draggable :tasks="el.tasks" />
        </div>
      </el-col>
    </draggable>
  </el-row>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "nested-draggable",
  components: {
    draggable
  },
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      sortableOptions: {
        group: { name: "itemCenter", put: ["itemLeft", "itemCenter"] },
        animation: 200,
        disabled: false,
        emptyInsertThreshold: 10,
        handle: ".icon-tuozhuai",
        easing: "cubic-bezier(1, 0, 0, 1)",
        ghostClass: "sortable-ghost", //拖动元素的class的占位符的类名
        chosenClass: "sortable-chosen", // 选中元素的class
        dragClass: "sortable-drag" //拖动元素的class
      }
    };
  }
};
</script>
<style lang="scss">
.nested {
  margin: 5px;
  .draggable {
    height: 100px;
  }
  .box {
    border: 1px dashed #ccc;
  }
}
</style>
