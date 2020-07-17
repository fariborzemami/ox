<template>
  <div class="change-password-component">
    <v-card
      flat
      class="transparent"
      :dark="isDark">
    <v-row class="form-title pb-4" justify="center">{{$t('components.changePassword.changePassword')}}</v-row>
    <v-form ref="form" v-model="valid" @submit.prevent="onChangePassword">
      <!-- password  -->
      <div v-if="passwordEnabled" class="subtitle-2 pt-1">
        <v-icon medium color="darken-2" class="ml-3">mdi-lock</v-icon>
        <span>{{ passwordTitle}}</span>
        <v-text-field
          v-model="userPassword.password"
          solo
          :reverse="$vuetify.rtl"
          class="mt-2"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordValidation"
          :label="this.passwordPlaceholder"
          name="password"
          :type="showPass ? 'text' : 'password'"
          required
          @click:append="showPass = !showPass"
        ></v-text-field>
      </div>
      <!-- new password  -->
      <div v-if="newPasswordEnabled" class="subtitle-2 pt-1">
        <v-icon medium color="darken-2" class="ml-3">mdi-lock</v-icon>
        <span>{{ newPasswordTitle}}</span>
        <v-text-field
          v-model="userPassword.newPassword"
          solo
          :reverse="$vuetify.rtl"
          class="mt-2"
          :append-icon="showNewPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="newPasswordValidation"
          :label="this.newPasswordPlaceholder"
          name="newPassword"
          :type="showNewPass ? 'text' : 'password'"
          required
          @click:append="showNewPass = !showNewPass"
        ></v-text-field>
      </div>
      <!-- change password btn -->
      <v-row justify="center">
        <v-btn
          type="submit"
          :disabled="!valid"
          class="white--text"
          :color="changePasswordButtonColor">
          {{ changePasswordButtonTitle }}
        </v-btn>
      </v-row>
    </v-form>
    </v-card>
  </div>
</template>
<script>
/**
 * @name change password component
 * @description change user  password
 * @version 1.0.0
 * @event changepassword
 * @property {Boolean} [isDark=false] - Specifies the form theme,
 * @property {String} [changePasswordButtonTitle] - Specifies the title of the registration button,
 * @property {String} [changePasswordButtonColor='teal lighten-2'] - Specifies the color of the registration button,
 * @property {Boolean} [newPasswordEnabled=true] - Specifies whether input exists in the form,
 * @property {Boolean} [passwordEnabled=true] - Specifies whether input exists in the form,
 * @property {String} [newPasswordTitle] - Specifies the input Title text,
 * @property {String} [passwordTitle] - Specifies the input Title text,
 * @property {String} [newPasswordPlaceholder] - Specifies the input placeholder text,
 * @property {String} [passwordPlaceholder] - Specifies the input placeholder text,
 * @property {Boolean} [newPasswordRequiredEnabled=true] - Specifies whether input is required,
 * @property {Boolean} [newPasswordRequiredEnabled=true] - Specifies whether input is required,
 * @property {String} [newPasswordRequiredMessage] - If the input value is empty, the text of the error message is displayed,
 * @property {String} [passwordRequiredMessage] - If the input value is empty, the text of the error message is displayed,
 * @property {Boolean} [newPasswordPatternEnabled=true]
 * @property {Boolean} [passwordPatternEnabled=true]
 * @property {String} [newPasswordPatternRegex] - validation regex
 * @property {String} [passwordPatternRegex] - validation regex
 * @property {String} [newPasswordPatternMessage] - validation regex message
 * @property {String} [passwordPatternMessage] - validation regex message

 */
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false,
      required: false
    },
    changePasswordButtonTitle: {
      type: String,
      default () {
        return this.$t('components.changePassword.changePassword')
      },
      required: false
    },
    changePasswordButtonColor: {
      type: String,
      default: 'teal lighten-2',
      required: false
    },
    newPasswordEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    newPasswordTitle: {
      type: String,
      default () {
        return this.$t('components.changePassword.repeatNewPassword')
      },
      required: false
    },
    newPasswordPlaceholder: {
      type: String,
      default () {
        return this.$t('components.changePassword.passwordPlaceholder')
      },
      required: false
    },
    newPasswordRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.changePassword.newPasswordRequired')
      },
      required: false
    },
    newPasswordPatternMessage: {
      type: String,
      default () {
        return this.$t('components.changePassword.newPasswordValidation')
      },
      required: false
    },
    newPasswordRequiredEnabled: {
      type: Boolean,
      default: true,
      required: false
    },
    newPasswordPatternEnabled: {
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
        return this.$t('components.changePassword.newPassword')
      },
      required: false
    },
    passwordPlaceholder: {
      type: String,
      default () {
        return this.$t('components.changePassword.passwordPlaceholder')
      },
      required: false
    },
    passwordRequiredMessage: {
      type: String,
      default () {
        return this.$t('components.changePassword.passwordRequired')
      },
      required: false
    },
    passwordPatternMessage: {
      type: String,
      default () {
        return this.$t('components.changePassword.passwordValidation')
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
    }
  },
  data () {
    return {
      valid: true,
      userPassword: {
        password: '',
        newPassword: ''
      },
      showPass: false,
      showNewPass: false,
      passwordRules: {
        required: value => !!value || this.passwordRequiredMessage,
        pattern: value => RegExp(this.passwordPatternRegex.substring(1, this.passwordPatternRegex.length - 1)).test(value) || this.passwordPatternMessage
      },
      newPasswordRules: {
        required: value => !!value || this.newPasswordRequiredMessage,
        pattern: value => value === this.userPassword.password || this.newPasswordPatternMessage
      }
    }
  },
  computed: {
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
    newPasswordValidation () {
      if (this.newPasswordRequiredEnabled === true && this.newPasswordPatternEnabled === true) {
        return [this.newPasswordRules.required, this.newPasswordRules.pattern]
      } else if (this.newPasswordRequiredEnabled === true) {
        return [this.newPasswordRules.required]
      } else if (this.newPasswordPatternEnabled === true) {
        return [this.newPasswordRules.pattern]
      }
      return ''
    }
  },
  methods: {
    onChangePassword (event) {
      this.$emit('changepassword', {
        password: this.userPassword.password
      })
    }
  }
}
</script>

<style lang="scss">
  .change-password-component {
    $active-color : #26a69a;
    $input-text-color : #424242;
    $placeholder-text : #a3a3a3;
    $text-color-dark : #9c9c9c;
    $error-text : #cc4b4b;

    .v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: #B2DFDB !important;
      color: white !important;
    }
    .form-title {
      font-size : 20px;
    }
    .v-btn {
      letter-spacing: 0;
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
