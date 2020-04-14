<template lang="html">
  <div class="">
    <el-form-item
      :label="item.title"
      class="form-item"
      :label-width="`${item.labelWidth}px`"
      :required="item.required"
    >
      <el-input
        v-if="item.type === 'inputText'"
        v-model="item.defaultValue"
        :style="{ width: item.width }"
        :class="item.customClass"
        :placeholder="item.placeholder"
        :disabled="item.actionAttribute.includes('3')"
        :show-password="item.actionAttribute.includes('4')"
      ></el-input>

      <el-input
        type="textarea"
        v-if="item.type === 'textarea'"
        :rows="4"
        v-model="item.defaultValue"
        :style="{ width: item.width }"
        :class="item.customClass"
        :placeholder="item.placeholder"
        :disabled="item.actionAttribute.includes('3')"
      ></el-input>

      <el-input-number
        v-model="item.numberDefaultValue"
        v-if="item.type === 'inputNumber'"
        :style="{ width: item.width }"
        :class="item.customClass"
        :min="item.min"
        :max="item.max"
        :step="item.step"
        :disabled="item.actionAttribute.includes('3')"
      ></el-input-number>

      <el-radio-group v-model="item.radioDefault" v-if="item.type === 'radio'">
        <el-radio
          :label="item1.label"
          v-for="(item1, index1) in item.radioOptions"
          :key="index1"
          :class="item.customClass"
          :disabled="item.actionAttribute.includes('3')"
          >{{ item1.name }}</el-radio
        >
      </el-radio-group>

      <el-checkbox-group
        v-model="item.checkboxDefault"
        v-if="item.type === 'checkbox'"
      >
        <el-checkbox
          :label="item1.label"
          v-for="(item1, index1) in item.checkboxOptions"
          :key="index1"
          :class="item.customClass"
          :disabled="item.actionAttribute.includes('3')"
          >{{ item1.name }}</el-checkbox
        >
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
