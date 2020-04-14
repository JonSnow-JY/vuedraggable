<template lang="html">
  <div class="">
    <el-form-item
      :label="item.title"
      class="form-item"
      :label-width="`${item.labelWidth}px`"
    >
      <el-input
        v-if="item.type === 'inputText'"
        v-model="item.defaultValue"
        :style="{ width: item.width }"
        :class="item.customClass"
        :placeholder="item.placeholder"
      ></el-input>

      <el-input
        type="textarea"
        v-if="item.type === 'textarea'"
        :rows="4"
        v-model="item.defaultValue"
        :style="{ width: item.width }"
        :class="item.customClass"
        :placeholder="item.placeholder"
      ></el-input>

      <el-input-number
        :min="0"
        :max="10"
        v-model="form.num"
        v-if="item.type === 'inputNumber'"
      ></el-input-number>

      <el-radio-group v-model="form.num" v-if="item.type === 'radio'">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>

      <el-checkbox-group v-model="form.num" v-if="item.type === 'checkbox'">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
      </el-checkbox-group>

      <el-time-select
        v-model="form.num"
        v-if="item.type === 'timePicker'"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
      >
      </el-time-select>

      <el-date-picker
        v-model="form.num"
        v-if="item.type === 'datePicker'"
        type="date"
      >
      </el-date-picker>

      <el-select v-model="form.num" v-if="item.type === 'select'">
        <el-option
          v-for="item in []"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-switch v-model="form.num" v-if="item.type === 'switch'"> </el-switch>

      <div class="" v-if="item.type === 'text'">
        文字
      </div>
    </el-form-item>
    <div class="empty-item"></div>
    <template v-if="item.isActive">
      <i class="icon iconfont icon-tuozhuai"></i>
      <i class="icon iconfont icon-lajitong" @click.stop="doDel(index)"></i>
      <i class="icon iconfont icon-fuzhi1" @click.stop="doCopy(index)"></i>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    form: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // console.log(JSON.stringify(this.item, null, 2));
  },
  destroyed() {},
  methods: {
    doDel() {
      this.$emit("doDel", this.index);
    },
    doCopy() {
      this.$emit("doCopy", this.index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
