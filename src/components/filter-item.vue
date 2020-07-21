<template>
  <form-item
    class="col-12"
    :class="['range', 'slider'].indexOf($attrs.type) !== -1 ?
            ['col-sm-8', 'col-md-6', 'col-lg-4'] :
            ['col-sm-4', 'col-md-3', 'col-lg-2']"
    :value="value"
    md
    v-bind="$attrs"
    @input="onChange"
  >
    <slot></slot>
  </form-item>
</template>

<script>
/**
 * @name filterItem
 * @description filter item component for filter-box
 * @version 1.0.0
 * @property {*} [v-model] - default input value (when slot not exists).
 */
import formItem from '../components/form-item'
export default {
  name: 'FilterItem',
  components: {
    'form-item': formItem
  },
  props: {
    value: {
      type: [String, Array, Boolean, Number, Date],
      required: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>
