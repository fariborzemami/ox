<route>
{
  "name": "datepicker",
  "meta": {
    "order": 7,
    "isVisible": false,
    "iconName": "mdi-book"
  }
}
</route>
<template>
  <div>
    <Datepicker
      v-model="selectedDate"
      :animate="datepickerConfig.animate"
      :animateSpeed="datepickerConfig.animateSpeed"
      :viewMode="datepickerConfig.viewMode"
      :inline="datepickerConfig.inline"
      :autoClose="datepickerConfig.autoClose"
      :onlyTimePicker="datepickerConfig.onlyTimePicker"
      :onlySelectOnDate="datepickerConfig.onlySelectOnDate"
      :position="datepickerConfig.position"
      :format="datepickerConfig.format"
      :altFormat="datepickerConfig.altFormat"
      :minDate="datepickerConfig.minDate"
      :maxDate="datepickerConfig.maxDate"
      :observer="datepickerConfig.observer"
      :calendarType="datepickerConfig.calendarType"
      :options="datepickerConfig"
      @onSet="eventHandler('onSet')"
      @onSelect="eventHandler('onSelect')"
      @onShow="eventHandler('onShow')"
      @onHide="eventHandler('onHide')"
      @onToggle="eventHandler('onToggle')"
      @onDestroy="eventHandler('onDestroy')"
      />
  </div>
</template>
<script>
import Datepicker from '../../node_modules/persian-datepicker-next-version/dist/pwt-datepicker-vue.js'
// eslint-disable-next-line no-unused-vars
import styles from '../../node_modules/persian-datepicker-next-version/dist/pwt-datepicker.css'
export default {
  layout: APP_CONFIG.layout.mainPanelLayout,
  components: { Datepicker },
  data () {
    return {
      selectedDate: null,
      datepickerConfig: {
        animate: true,
        animateSpeed: 80,
        calendarType: 'persian', // DONE
        calendar: {
          persian: {
            locale: 'fa', // DONE
            showHint: false, // DONE
            leapYearMode: 'algorithmic' // "astronomical" // DONE
          },
          gregorian: {
            locale: 'en', // DONE
            showHint: false // DONE
          }
        },
        responsive: true, // Deprecated
        inline: true, // Deprected
        initialValue: false, // DONE
        initialValueType: 'persian', // Works but deprecated in next version
        persianDigit: true, // Deprected
        viewMode: 'day', // DONE
        format: 'LLLL', // DONE
        formatter (unixDate, dateObject) {
          return new dateObject(unixDate).format(this.format)
        }, // DONE
        altField: '#containerAlt', // DONE
        altFormat: 'u', // DONE
        altFieldFormatter: function (unixDate, dateObject) {
          if (this.altFormat === 'gregorian' || this.altFormat === 'g') {
            return new Date(unixDate)
          } else if (this.altFormat === 'unix' || this.altFormat === 'u') {
            return unixDate
          } else {
            return new dateObject(unixDate).format(this.altFormat)
          }
        }, // DONE
        minDate: null, // DONE
        maxDate: null, // DONE,
        navigator: {
          enabled: true,
          scroll: {
            enabled: true
          },
          text: {
            btnNextText: '<', // Deprecated
            btnPrevText: '>' // Deprected
          },
          onNext: function (datepickerObject) { // DONE
            // console.log('navigator.onNext')
            // console.log(datepickerObject)
          },
          onPrev: function (datepickerObject) { // DONE
            // console.log('navigator.onPrev')
            // console.log(datepickerObject)
          },
          onSwitch: function (datepickerObject) { // DONE
            // console.log('navigator.onSwitch')
            // console.log(datepickerObject)
          }
        },
        toolbox: {
          enabled: true,
          text: { // DEPRECTED
            btnToday: 'امروز'
          },
          submitButton: {
            enabled: true, // DONE
            text: { // DEPRECTED
              fa: 'تایید',
              en: 'submit'
            },
            onSubmit: function (datepickerObject) { // DONE
              // console.log('toolbox.onSubmit')
            }
          },
          todayButton: {
            enabled: true, // DONE
            text: { // DEPRECTED
              fa: 'امروز',
              en: 'today'
            },
            onToday: function (datepickerObject) { // DONE
              // console.log('toolbox.onToday')
            }
          },
          calendarSwitch: {
            enabled: true, // DONE
            format: 'MMMM', // DEPRECATED
            onSwitch: function (datepickerObject) { // DONE
              // console.log('toolbox.onSwitch')
            }
          }
        },
        onlyTimePicker: false, // DONE
        onlySelectOnDate: true,
        checkDate: function (unix) { // DONE
          return true
        },
        checkMonth: function (y, m) { // DONE
          return true
        },
        checkYear: function (y) { // DONE
          return true
        },
        timePicker: {
          enabled: true, // DONE
          step: 1, // DONE
          titleFormat: 'YYYY MMMM',
          titleFormatter: function (unix, dateObject) {
            return new dateObject(unix).format(this.titleFormat)
          },
          hour: {
            enabled: true, // DONE
            step: null // DONE
          },
          minute: {
            enabled: true, // DONE
            step: null // DONE
          },
          second: {
            enabled: true, // DONE
            step: null // DONE
          },
          meridian: {
            enabled: true // DONE
          }
        },
        dayPicker: {
          enabled: true, // DONE
          titleFormat: 'YYYY MMMM', // DONE
          titleFormatter: function (unix, dateObject) { // DONE
            return new dateObject(unix).format(this.titleFormat)
          },
          onSelect: function (selectedDayUnix) { // DONE
            // console.log('use event onSelect date')
          }
        },
        monthPicker: {
          enabled: true,
          titleFormat: 'YYYY', // DONE
          titleFormatter: function (unix, dateObject) { // DONE
            return new dateObject(unix).format(this.titleFormat)
          },
          onSelect: function (monthIndex) { // DONE
            // console.log('use event onSelect month')
          }
        },
        yearPicker: {
          enabled: true,
          titleFormat: 'YYYY', // DONE
          titleFormatter: function (unix, dateObject) { // DONE
            const selectedYear = new dateObject(unix).year()
            const startYear = selectedYear - (selectedYear % 12)
            return new dateObject(unix).year(startYear).format(this.titleFormat) + '-' + new
            dateObject(unix).year(startYear + 11).format(this.titleFormat)
          },
          onSelect: function (year) { // DONE
            // console.log('use event onSelect year')
          }
        },
        infobox: {
          enabled: true, // DONE
          titleFormat: 'YYYY', // DONE
          titleFormatter: function (unix, dateObject) { // DONE
            return new dateObject(unix).format(this.titleFormat)
          },
          selectedDateFormat: ' dddd DD MMMM', // DONE
          selectedDateFormatter: function (unix, dateObject) { // DONE
            return new dateObject(unix).format(this.selectedDateFormat)
          }
        },
        position: 'auto', // DONE
        autoClose: false, // DONE
        template: null, // DEPRECATED
        observer: true, // DONE
        inputDelay: 800 // DEPRECATED
      }
    }
  },
  methods: {
    eventHandler (eventName) {
      console.log(`${eventName} Vue Compoenent Event`)
    }
  }
}
</script>
