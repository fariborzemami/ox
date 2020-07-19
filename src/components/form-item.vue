<template>
  <div class="form-item-component">
    <div class="form-label">
      <v-icon> {{ icon }} </v-icon>
      <label> {{ label }} </label>
    </div>
    <slot v-if="hasSlot"></slot>
    <template v-else>
      <v-text-field
        v-if="type === 'textbox'"
        :dir="ltr ? 'ltr' : 'rtl'"
        outlined
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></v-text-field>
      <v-textarea
        v-else-if="type === 'textarea'"
        :dir="ltr ? 'ltr' : 'rtl'"
        no-resize
        outlined
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></v-textarea>
      <v-select
        v-else-if="type === 'select'"
        :dir="ltr ? 'ltr' : 'rtl'"
        outlined
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></v-select>
      <v-checkbox
        v-else-if="type === 'checkbox'"
        :value="value"
        v-bind="$attrs"
        @change="onChange"
      ></v-checkbox>
      <v-switch
        v-else-if="type === 'switch'"
        dense
        inset
        :value="value"
        v-bind="$attrs"
        @change="onChange"
      ></v-switch>
      <v-radio-group
        v-else-if="type === 'radio'"
        row
        :value="value"
        v-bind="$attrs"
        @change="onChange"
      >
        <v-radio
          v-for="(option, index) in $attrs.options"
          :key="index"
          :label="option.text"
          :value="option.value"
        ></v-radio>
      </v-radio-group>
      <v-slider
        v-else-if="type === 'slider'"
        :value="value"
        :label="`${value}`"
        v-bind="$attrs"
        @change="onChange"
      ></v-slider>
      <div
        v-else-if="type === 'file'"
        class="form-uploader"
      >
        <v-file-input
          outlined
          :value="value"
          truncate-length="10"
          v-bind="$attrs"
          @change="onChange"
        ></v-file-input>
        <v-img
          v-if="value"
          :src="url"
        ></v-img>
      </div>
      <multiselect
        v-else-if="type === 'multiselect'"
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></multiselect>
      <date-picker
        v-else-if="type === 'date' || type === 'datetime' || type === 'time'"
        :type="type"
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      >
      </date-picker>
    </template>
  </div>
</template>

<script>
/**
 * @name formItem
 * @description form item component for horizontal-form
 * @version 1.0.0
 * @property {string} [icon] - form label icon name.
 * @property {string} [label] - form label text.
 * @property {string} [type] - form input type (when slot not exists).
 * @property {Boolean} [ltr=false] - form input ltr direction. (default is rtl).
 * @property {*} [v-model] - default input value (when slot not exists).
 */
import Multiselect from 'vue-multiselect'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  name: 'FormItem',
  components: {
    multiselect: Multiselect,
    'date-picker': VuePersianDatetimePicker
  },
  props: {
    label: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      validator: (v) => ['textbox', 'textarea', 'select', 'checkbox', 'switch', 'radio', 'file',
        'multiselect', 'date', 'datetime', 'time', 'slider'].indexOf(v) !== -1
    },
    value: {
      type: [String, Boolean, Array, Number, File],
      required: false
    },
    ltr: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    },
    url () {
      if (typeof this.value === 'string') {
        return this.value
      }
      return URL.createObjectURL(this.value)
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style scoped lang="scss">
.form-item-component > * + *{
  margin-top: 10px;
}
.form-label{
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 200px;
  max-width: 200px;
  i + label{
    color: #9C9C9C;
    margin: 0 20px 0 10px;
  }
  @media (max-width: 780px) {
    margin-bottom: 20px;
    max-width: 100%;
  }
}
</style>
