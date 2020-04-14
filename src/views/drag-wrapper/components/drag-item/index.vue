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

      <el-time-picker
        v-model="item.timeDefaultValue"
        v-if="item.type === 'timePicker'"
        :style="{ width: item.width }"
        :class="item.customClass"
        :is-range="item.rangeSelect"
        :placeholder="item.placeholder"
        :start-placeholder="item.startplaceholder"
        :end-placeholder="item.endplaceholder"
        :value-format="item.format"
        :readonly="item.actionAttribute.includes('2')"
        :disabled="item.actionAttribute.includes('3')"
        :editable="item.actionAttribute.includes('5')"
        :arrow-control="item.actionAttribute.includes('7')"
      >
      </el-time-picker>

      <el-date-picker
        v-model="item.dateDefaultValue"
        v-if="item.type === 'datePicker'"
        :type="
          showTypeOptions.find(item1 => item1.value === item.showType).label
        "
        :style="{ width: item.width }"
        :class="item.customClass"
        :value-format="item.format"
        :placeholder="item.placeholder"
        :readonly="item.actionAttribute.includes('2')"
        :disabled="item.actionAttribute.includes('3')"
        :editable="item.actionAttribute.includes('5')"
        :clearable="item.actionAttribute.includes('6')"
      >
      </el-date-picker>

      <el-select
        v-model="item.selectDefaultValue"
        v-if="item.type === 'select'"
        :style="{ width: item.width }"
        :class="item.customClass"
        :disabled="item.actionAttribute.includes('3')"
        :clearable="item.actionAttribute.includes('6')"
        :filterable="item.filterable"
        :multiple="item.multiple"
      >
        <el-option
          v-for="item1 in item.selectOptions"
          :key="item1.value"
          :label="item1.label"
          :value="item1.value"
        >
        </el-option>
      </el-select>

      <el-switch
        v-model="item.switchDefaultValue"
        v-if="item.type === 'switch'"
        :class="item.customClass"
        :disabled="item.actionAttribute.includes('3')"
      >
      </el-switch>

      <el-cascader
        v-model="item.cascaderDefaultValue"
        v-if="item.type === 'cascader'"
        :options="item.cascaderOptions"
        :style="{ width: item.width }"
        :class="item.customClass"
        :placeholder="item.placeholder"
        :disabled="item.actionAttribute.includes('3')"
        :clearable="item.actionAttribute.includes('6')"
      ></el-cascader>

      <el-upload
        multiple
        :limit="item.limit"
        :style="{ width: item.width }"
        :class="item.customClass"
        action=""
        v-if="item.type === 'file'"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip">
          {{ item.promptCaption }}
        </div>
      </el-upload>

      <el-upload
        multiple
        :limit="item.limit"
        :style="{ width: item.width }"
        :class="item.customClass"
        action=""
        v-if="item.type === 'img'"
        size="mini"
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>

      <!-- <div class="" v-if="item.type === 'text'">
        文字
      </div> -->
    </el-form-item>
    <template v-if="canDrag">
      <div class="empty-item"></div>
      <template v-if="item.isActive">
        <i class="icon iconfont icon-tuozhuai"></i>
        <i class="icon iconfont icon-lajitong" @click.stop="doDel(index)"></i>
        <i class="icon iconfont icon-fuzhi1" @click.stop="doCopy(index)"></i>
      </template>
    </template>
  </div>
</template>

<script>
import { showTypeOptions } from "@/views/right-wrapper/config";

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
    },
    canDrag: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showTypeOptions
    };
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
