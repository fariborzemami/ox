<template>
  <div class="filter-box-component">
    <div class="filter-inputs d-flex flex-wrap">
      <filter-item
        v-if="!disableFromDate"
        v-model="fromDate"
        type="date"
        :placeholder="$t('components.filterBox.fromDate')"
      ></filter-item>
      <filter-item
        v-if="!disableToDate"
        v-model="toDate"
        type="date"
        :placeholder="$t('components.filterBox.toDate')"
      ></filter-item>
      <slot></slot>
    </div>
    <div class="filter-actions d-flex flex-row-reverse pb-4">
      <v-btn
        outlined
        @click="onFilterClick"
      >
        {{ buttonText || $t('components.filterBox.buttonText') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
/**
 * @name filterBox
 * @description filter box component for report-table
 * @version 1.0.0
 */
import filterItem from '../components/filter-item'
export default {
  name: 'FilterBox',
  components: {
    'filter-item': filterItem
  },
  props: {
    disableFromDate: {
      type: Boolean,
      required: false,
      default: false
    },
    disableToDate: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonText: {
      type: String,
      required: false,
      default: null
    }
  },
  data: () => ({
    fromDate: null,
    toDate: null
  }),
  methods: {
    onFilterClick (e) {
      const { fromDate, toDate } = this
      const slotItems = {}
      this.$slots.default.forEach(filterItem => {
        slotItems[filterItem.data.model.expression.split('.').pop()] = filterItem.data.model.value
      })
      const payload = {
        ...(!this.disableFromDate) && { fromDate },
        ...(!this.disableToDate) && { toDate },
        ...slotItems
      }

      this.$emit('filter', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box-component{
  position: relative;
  clear: both;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #E1E7EE;
  border-radius: 10px;
  box-shadow: -2px 3px 5px hsla(0,0%,49%,.1);
}
</style>
