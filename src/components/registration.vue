<template>
  <div class="register-component">
    <v-card
      flat
      class="transparent"
      :dark="isDark">
      <v-row class="form-title pb-4" justify="center">{{$t('components.register.title')}}</v-row>
      <v-form ref="form" v-model="valid" @submit.prevent="register">
      <!-- email -->
      <div v-if="emailEnabled" class="subtitle-2 pt-2">
        <v-icon col medium color="darken-2" class="ml-3">mdi-email</v-icon>
        <span>{{emailTitle}}</span>
        <v-text-field
          v-model="userInfo.email"
          solo
          :reverse="$vuetify.rtl"
          class="mt-2"
          :label="emailPlaceholder"
          :rules="emailValidation"
          name="email"
          type="text"
          required
        ></v-text-field>
      </div>
      <!-- name -->
      <div v-if="nameEnabled" class="subtitle-2 pt-2">
        <v-icon medium color="darken-2" class="ml-3">mdi-account-circle</v-icon>
        <span>{{nameTitle}}</span>
        <v-text-field
          v-model="userInfo.name"
          solo
          class="mt-2"
          :label="namePlaceholder"
          :rules="nameRequiredEnabled ? [nameRules.required] : [] "
          name="name"
          type="text"
          required
        ></v-text-field>
      </div>
      <!-- password  -->
      <div v-if="passwordEnabled" class="subtitle-2 pt-2">
        <v-icon medium color="darken-2" class="ml-3">mdi-lock</v-icon>
        <span>{{passwordTitle}}</span>
        <v-text-field
          v-model="userInfo.password"
          solo
          :reverse="$vuetify.rtl"
          class="mt-2"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordValidation"
          :label="passwordPlaceholder"
          name="password"
          :type="showPass ? 'text' : 'password'"
          required
          @click:append="showPass = !showPass"
        ></v-text-field>
      </div>
      <!-- phone number -->
      <div v-if="phoneNumberEnabled" class="subtitle-2 pt-2">
        <v-icon medium color="darken-2" class="ml-3">mdi-cellphone-iphone</v-icon>
        <span>{{phoneNumberTitle}}</span>
        <v-text-field
          v-model="userInfo.phoneNumber"
          solo
          :reverse="$vuetify.rtl"
          class="mt-2"
          :rules="phoneNumberValidation"
          :label="phoneNumberPlaceholder"
          name="phoneNumber"
          type="text"
          required
          ></v-text-field>
      </div>
      <!-- role -->
      <v-row justify='center'>
        <v-checkbox
          v-model="userInfo.agreeRules"
          :color="checkBoxColor"
          :label="$t('components.register.rules')"
          :rules="[agreeRulesRules.required]"
          required
        ></v-checkbox>
      </v-row>
      <!-- register btn -->
      <v-row justify="center">
        <v-btn
          type="submit"
          :disabled="!valid"
          class="white--text"
          :color="registerButtonColor">
          {{registerButtonTitle}}
        </v-btn>
      </v-row>
      <!-- login link -->
      <v-row class="py-4 subtitle-2"  justify="center">
        <span class="py-1">{{ $t('components.register.haveAccount') }}</span>
        <v-btn
          text
          :color="loginLinkColor"
          small
          class="px-0"
          :to="{ name: loginRoute}">
          {{ loginLinkTitle }}
        </v-btn>
      </v-row>
    </v-form>
    </v-card>
  </div>
</template>
<script>
/**
 * @name registration component
 * @description when added to a page or layout, creates a form for new users to submit their
 profile information on the web site. On the front end of your web site, the default sign up form
 prompts new users to your app to enter their name, password,phone number, and email.
 * @version 1.0.0
 * @event register - return name , email, password, phone number
 * @property {String} [registerButtonTitle] - Specifies the title of the registration button,
 * @property {String} [registerButtonColor='teal lighten-2'] - Specifies the color of the registration button,
 * @property {String} [loginLinkColor='teal lighten-2'] - Specifies the color of the login link,
 * @property {String} [loginLinkTitle] - Specifies the title of the login link,
 * @property {String} [loginRoute='login'] - Specifies the URL of the login page,
 * @property {Boolean} [isDark=false]
 * @property {Boolean} [emailEnabled]
 * @property {String} [emailTitle]
 * @property {String} [emailPlaceholder]
 * @property {String} [emailRequiredMessage]
 * @property {String} [emailPatternRegex]
 * @property {String} [emailPatternMessage]
 * @property {Boolean} [emailRequiredEnabled=true]
 * @property {Boolean} [emailPatternEnabled=true]
 * @property {Boolean} [nameEnabled]
 * @property {String} [nameTitle]
 * @property {String} [namePlaceholder]
 * @property {String} [nameRequiredMessage]
 * @property {Boolean} [nameRequiredEnabled=true]
 * @property {Boolean} [nameEnabled]
 * @property {String} [passwordTitle]
 * @property {String} [passwordPlaceholder]
 * @property {String} [passwordRequiredMessage]
 * @property {String} [passwordPatternRegex]
 * @property {String} [passwordPatternMessage]
 * @property {Boolean} [passwordRequiredEnabled=true]
 * @property {Boolean} [passwordPatternEnabled=true]
 * @property {Boolean} [phoneNumberEnabled]
 * @property {String} [phoneNumberTitle]
 * @property {String} [phoneNumberPlaceholder]
 * @property {String} [phoneNumberRequiredMessage]
 * @property {String} [phoneNumberPatternRegex]
 * @property {String} [phoneNumberPatternMessage]
 * @property {Boolean} [phoneNumberRequiredEnabled=true]
 * @property {Boolean} [phoneNumberPatternEnabled=true]
 */
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false,
      required: false
    },
    registerButtonTitle: {
      type: String,
      default () {
        return this.$t('components.register.login')
      },
      required: false
    },
    loginLinkTitle: {
      type: String,
      default () {
        return this.$t('components.register.login')
      },
      required: false
    },
    registerButtonColor: {
      type: String,
      default: 'teal lighten-2',
      required: false
    },
    checkBoxColor: {
      type: String,
      default: 'teal lighten-2',
      required: false
    },
    loginRoute: {
      type: String,
      default: 'login',
      required: true
    },
    loginLinkColor: {
      type: String,
      default: 'teal lighten-2',
      required: false
    },
    emailEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    emailTitle: {
      type: String,
      default () {
        return this.$t('components.register.email')
      },
      required: false
    },
    emailPlaceholder: {
      type: String,
      default () {
        return this.$t('components.register.emailPlaceholder')
      },
      required: false
    },
    emailRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.register.emailRequired')
      },
      required: false
    },
    emailPatternRegex: {
      type: String,
      default: '/.+@.+..+/',
      required: false
    },
    emailPatternMessage: {
      type: String,
      default () {
        return this.$t('components.register.emailValidation')
      },
      required: false
    },
    emailRequiredEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    emailPatternEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    passwordEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    passwordTitle: {
      type: String,
      default () {
        return this.$t('components.register.password')
      },
      required: false
    },
    passwordPlaceholder: {
      type: String,
      default () {
        return this.$t('components.register.passwordPlaceholder')
      },
      required: false
    },
    passwordRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.register.passwordRequired')
      },
      required: false
    },
    passwordPatternMessage: {
      type: String,
      default () {
        return this.$t('components.register.passwordValidation')
      },
      required: false
    },
    passwordPatternRegex: {
      type: String,
      default: '/^(?=.*).{8,}/',
      required: false
    },
    passwordRequiredEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    passwordPatternEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    phoneNumberEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    phoneNumberTitle: {
      type: String,
      default () {
        return this.$t('components.register.phoneNumber')
      },
      required: false
    },
    phoneNumberPlaceholder: {
      type: String,
      default () {
        return this.$t('components.register.phoneNumberPlaceholder')
      },
      required: false
    },
    phoneNumberRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.register.phoneNumberRequired')
      },
      required: false
    },
    phoneNumberPatternMessage: {
      type: String,
      default () {
        return this.$t('components.register.phoneNumberValidation')
      },
      required: false
    },
    phoneNumberPatternRegex: {
      type: String,
      default: '/[0][9][0-9]{9}/',
      required: false
    },
    phoneNumberRequiredEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    phoneNumberPatternEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    nameEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    nameTitle: {
      type: String,
      default () {
        return this.$t('components.register.name')
      },
      required: false
    },
    namePlaceholder: {
      type: String,
      default () {
        return this.$t('components.register.name')
      },
      required: false
    },
    nameRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.register.nameRequired')
      },
      required: false
    },
    nameRequiredEnabled: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data () {
    return {
      valid: true,
      userInfo: {
        password: '',
        phoneNumber: '',
        name: '',
        email: '',
        agreeRules: true
      },
      showPass: false,
      passwordRules: {
        required: value => !!value || this.passwordRequiredMessage,
        pattern: value => RegExp(this.passwordPatternRegex.substring(1, this.passwordPatternRegex.length - 1)).test(value) || this.passwordPatternMessage
      },
      phoneNumberRules: {
        required: value => !!value || this.phoneNumberRequiredMessage,
        pattern: value => RegExp(this.phoneNumberPatternRegex.substring(1, this.phoneNumberPatternRegex.length - 1)).test(value) || this.phoneNumberPatternMessage
      },
      nameRules: {
        required: value => !!value || this.nameRequiredMessage
      },
      emailRules: {
        required: value => !!value || this.emailRequiredMessage,
        pattern: value => RegExp(this.emailPatternRegex.substring(1, this.emailPatternRegex.length - 1)).test(value) || this.emailPatternMessage
      },
      agreeRulesRules: {
        required: value => !!value
      }
    }
  },
  computed: {
    emailValidation () {
      if (this.emailRequiredEnabled === true && this.emailPatternEnabled === true) {
        return [this.emailRules.required, this.emailRules.pattern]
      } else if (this.emailRequiredEnabled === true) {
        return [this.emailRules.required]
      } else if (this.emailPatternEnabled === true) {
        return [this.emailRules.pattern]
      }
      return ''
    },
    passwordValidation () {
      if (this.passwordRequiredEnabled === true && this.passwordPatternEnabled === true) {
        return [this.passwordRules.required, this.passwordRules.pattern]
      } else if (this.passwordRequiredEnabled === true) {
        return [this.passwordRules.required]
      } else if (this.passwordPatternEnabled === true) {
        return [this.passwordRules.pattern]
      }
      return ''
    },
    phoneNumberValidation () {
      if (this.phoneNumberRequiredEnabled === true && this.phoneNumberPatternEnabled === true) {
        return [this.phoneNumberRules.required, this.phoneNumberRules.pattern]
      } else if (this.phoneNumberRequiredEnabled === true) {
        return [this.phoneNumberRules.required]
      } else if (this.phoneNumberPatternEnabled === true) {
        return [this.phoneNumberRules.pattern]
      }
      return ''
    }
  },
  methods: {
    register (event) {
      this.$emit('register', this.userInfo)
    }
  }
}
</script>

<style lang="scss">
  .register-component {
    $active-color : #26a69a;
    $input-text-color : #424242;
    $placeholder-text : #a3a3a3;
    $text-color-dark : #9c9c9c;

    .v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: #B2DFDB !important;
      color: white !important;
    }

    .form-title {
      font-size : 20px;
    }
    .v-ripple__animation{
      opacity: 0 !important;
    }

    .v-btn {
      letter-spacing: 0;
      &:before , &.v-btn--active {
        background-color: transparent !important;
      }
    }

    .theme--dark {
      &.v-card {
        color: $text-color-dark;
        i {
           color: $text-color-dark;
        }
      }
      .v-icon {
        color: $text-color-dark;
      }
      .form-title {
        color : white;
      }
    }

    .v-input input {
      color: $input-text-color;
    }

    .v-text-field {
      &.error--text {
        .v-input__slot{
          border: 2px solid !important;
        }
      }
    }

    .v-text-field .v-input__slot {
      background: #F3F7F9 !important;
      border-radius: 5px !important;
      box-shadow: none !important;
      .v-label {
         font-size: 12px !important;
         color: $placeholder-text !important;
      }
    }

    .v-input--checkbox {
      &.v-input--is-label-active {
        .theme--light.v-label {
          color: $active-color !important;
        }
      }
      .v-label {
        font-size: 12px !important;
      }
    }
    .v-application--is-rtl .v-input--selection-controls__input {
      margin-left: 15px !important;
    }

    .v-messages {
      min-height: 18px !important;
    }

    .v-text-field__details {
      padding: 0 !important;
      .error--text {
        display: flex;
        align-items: center;
        &:before {
          content: "\F0026";
          font: normal normal normal 24px/1 "Material Design Icons";
          font-size: 18px;
          padding-left : .5rem;
        }
      }
    }
  }
</style>
