<template>
  <el-dialog
    title="预览"
    width="80%"
    top="5vh"
    :close-on-click-modal="false"
    :visible="dialogVisible"
    @close="close"
  >
    <el-form
      ref="form"
      :model="form"
      label-width="82px"
      label-suffix=":"
      class="form-wrapper"
    >
      <div
        class="item-wrapper"
        :class="{
          'item-active': item.isActive,
          'is-hidden': item.actionAttribute.includes('1')
        }"
        v-for="(item, index) in itemArr"
        :key="item.id"
      >
        <drag-item :item="item" :form="form" :index="index" :canDrag="false" />
      </div>
    </el-form>
    <span slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" :loading="btnLoading" @click="submitData"
        >确定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import dialogMixin from "@/mixins/dialogMixin";
import DragItem from "@/views/drag-wrapper/components/drag-item";

export default {
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
  components: { DragItem },
  mixins: [dialogMixin],
  data() {
    return {
      ruleForm: {}
    };
  },
  methods: {
    doSubmit() {},
    initForm() {
      console.log(this.itemArr);
    }
  }
};
</script>
