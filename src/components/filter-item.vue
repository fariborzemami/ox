<template>
  <div
    class="filter-item-component col-12"
    :class="['range', 'slider'].indexOf(type) !== -1 ?
            ['col-sm-12', 'col-md-8', 'col-lg-6'] :
            ['col-sm-6', 'col-md-4', 'col-lg-3']"
  >
    <slot v-if="hasSlot"></slot>
    <template v-else>
      <date-picker
        v-if="type === 'date'"
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></date-picker>
      <v-text-field
        v-else-if="type === 'text'"
        outlined
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></v-text-field>
      <v-select
        v-else-if="type === 'select'"
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
      <div
        v-else-if="['range', 'slider'].indexOf(type) !== -1"
        class="row mx-0 theme--light"
      >
        <div class="col-4 my-auto">
          {{ label }}
        </div>
        <v-range-slider
          v-if="type === 'range'"
          class="col-8"
          :value="value"
          v-bind="$attrs"
          @change="onChange"
        >
          <template v-slot:prepend>
            {{ value[0] }}
          </template>
          <template v-slot:append>
            {{ value[1] }}
          </template>
        </v-range-slider>
        <v-slider
          v-else-if="type === 'slider'"
          class="col-8"
          :value="value"
          :label="`${value}`"
          v-bind="$attrs"
          @change="onChange"
        ></v-slider>
      </div>
      <multiselect
        v-else-if="type === 'multiselect'"
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></multiselect>
    </template>
  </div>
</template>

<script>
/**
 * @name filterItem
 * @description filter item component for filter-box
 * @version 1.0.0
 * @property {string} [type] - filter input type (when slot not exists).
 * @property {string} [label] - filter slider input label (when slot not exists).
 * @property {*} [v-model] - default input value (when slot not exists).
 */
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
import Multiselect from 'vue-multiselect'
export default {
  name: 'FilterItem',
  components: {
    'date-picker': VuePersianDatetimePicker,
    multiselect: Multiselect
  },
  props: {
    value: {
      type: [String, Array, Boolean, Number],
      required: false
    },
    type: {
      type: String,
      required: false,
      validator: (v) => ['date', 'text', 'select', 'checkbox', 'switch', 'slider', 'range', 'multiselect'].indexOf(v) !== -1
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>
