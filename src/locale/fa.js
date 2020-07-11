import { fa } from 'vuetify/lib/locale'

export default {
  ...fa,

  components: {
    login: {
      email: 'پست الکترونیکی',
      password: 'کلمه عبور',
      login: 'ورود',
      rememberMe: 'مرا به خاطر بسپار',
      forgotPassword: 'کلمه عبور خود را فراموش کرده اید!',
      notRegister: 'هنوز ثبت نام نکرده اید!',
      register: 'ثبت نام کنید',
      emailPlaceholder: 'email@example.com',
      passwordPlaceholder: '********',
      passwordRequired: 'کلمه عبور الزامی است',
      emailRequired: 'پست الکترونیکی الزامی است',
      passwordValidation: 'حداقل تعداد کلمه عبور 8 کاراکتر است',
      emailValidation: 'فرمت پست الکترونیکی صحیح نیست'
    },
    register: {
      title: 'ثبت نام',
      password: 'کلمه عبور',
      register: 'ادامه و تایید پست الکترونیکی',
      login: 'وارد شوید',
      haveAccount: 'حساب کاربری دارید؟',
      legalPerson: 'شخص حقوقی',
      realPerson: 'شخص حقیقی',
      phoneNumber: 'شماره موبایل',
      email: 'پست الکترونیکی',
      emailPlaceholder: 'email@example.com',
      name: 'نام و نام خانوادگی',
      nameRequired: 'نام و نام خانوادگی الزامی',
      rules: 'با قوانین و مقررات موافقم',
      rulesRequired: 'پذیرش قوانین و مقررات الزامی است',
      passwordInvalid: 'حداقل تعداد کاراکتر برای کلمه عبور 8 کاراکتر است',
      passwordPlaceholder: '********',
      phoneNumberPlaceholder: '*********09',
      passwordRequired: 'کلمه عبور الزامی است',
      phoneNumberRequired: 'شماره موبایل الزامی است',
      emailRequired: 'پست الکترونیکی الزامی است',
      passwordValidation: 'حداقل تعداد کاراکتر برای کلمه عبور ۸ کاراکتر است',
      emailValidation: 'فرمت پست الکترونیکی اشتباه است',
      emailStatus: 'پست الکترونیکی شما به عنوان نام کاربری بوده و غیر قابل تغییر است',
      phoneNumberValidation: 'فرمت شماره موبایل اشتباه است'
    },
    forgotPassword: {
      title: 'بازیابی کلمه عبور',
      email: 'پست الکترونیکی',
      passwordRecovery: 'بازیابی کلمه عبور',
      notRegister: 'هنوز ثبت نام نکرده اید ! ',
      register: 'ثبت نام کنید',
      emailPlaceholder: 'email@example.com',
      passwordRecoveryDetails: 'لینک بازیابی کلمه عبور به پست الکترونیک شما ارسال شده است . برای تغییر کلمه عبور لطفا به توضیحاتی که در پست الکترونیک آمده است توجه کنید .',
      changePassword: 'تغییر کلمه عبور',
      newPassword: 'کلمه عبور جدید',
      repeatNewPassword: 'تکرار کلمه عبور جدید',
      passwordPlaceholder: '********',
      emailRequired: 'پست الکترونیکی الزامی است',
      emailValidation: 'فرمت پست الکترونیکی صحیح نیست'
    },
    changePassword: {
      title: 'تغییر گذرواژه',
      changePassword: 'تغییر کلمه عبور',
      newPassword: 'کلمه عبور جدید',
      repeatNewPassword: 'تکرار کلمه عبور جدید',
      passwordPlaceholder: '********',
      passwordRequired: 'کلمه عبور جدید الزامی است',
      newPasswordRequired: 'تکرار کلمه عبور جدید الزامی است',
      passwordValidation: 'حداقل تعداد کاراکتر برای کلمه عبور 8 کاراکتر است',
      newPasswordValidation: 'کلمه عبور با تکرار کلمه عبور یکسان نیست'
    },
    filterBox: {
      fromDate: 'از تاریخ',
      toDate: 'تا تاریخ',
      buttonText: 'فیلتر کردن'
    }
  },
  pages: {
    profile: {
      title: 'حساب کاربری'
    },
    logout: {
      title: 'خروج از حساب'
    },
    reports: {
      title: 'گزارش',
      tableHeader: {
        name: 'نام',
        email: 'ایمیل',
        amount: 'مقدار',
        phone: 'شماره تماس',
        startDate: 'تاریخ شروع',
        endDate: 'تاریخ پایان',
        actions: 'عملیات',
        show: ''
      },
      campaignTypes: {
        type1: 'نوع ۱',
        type2: 'نوع ۲',
        type3: 'نوع ۳'
      },
      show: 'نمایش جزییات',
      campaignTypePlaceholder: 'نوع کمپین',
      genderPlaceholder: 'جنسیت',
      ageRangePlaceholder: 'بازه سنی',
      female: 'زن',
      male: 'مرد'
    },
    about: {
      title: 'درباره ما'
    },
    changes: {
      title: 'تغییرات'
    },
    dashboard: {
      title: 'داشبورد'
    },
    datepicker: {
      title: 'انتخابگر زمان'
    },
    forgotpass: {
      title: 'فراموشی رمز عبور'
    },
    index: {
      title: 'خانه'
    },
    login: {
      title: 'ورود'
    },
    register: {
      title: 'ثبت نام'
    },
    changePassword: {
      title: 'تغییر گذرواژه'
    },
    starter: {
      title: 'شروع کننده'
    },
    forms: {
      title: 'فرم ها',
      nameTextLabel: 'v-text-field',
      nameTextPlaceholder: 'نام',
      nameTextRuleRequired: 'نام الزامی می باشد',
      nameTextRuleMaxLength: 'تعداد کاراکتر مجاز نام حداکثر ۱۰ می باشد',
      mailTextLabel: 'v-text-field (ltr)',
      mailTextPlaceholder: 'email',
      mailTextSlotLabel: 'v-text-field (slot)',
      descTextareaLabel: 'v-textarea',
      descTextareaPlaceholder: 'توضیحات',
      itemSelectLabel: 'v-select',
      itemSelectPlaceholder: 'انتخاب کنید',
      itemSelectRuleRequired: 'انتخاب آیتم الزامی می باشد',
      itemSelectMultipleLabel: 'v-select (multiple)',
      itemSelectMultiplePlaceholder: 'انتخاب (چندتایی)',
      itemMultiselectLabel: 'Multiselect',
      itemMultiselectPlaceholder: 'انتخاب آیتم ها',
      datePickerLabel: 'date-picker',
      datetimePickerLabel: 'datetime-picker',
      timePickerLabel: 'time-picker',
      counterSliderLabel: 'v-slider',
      agreeCheckboxLabel: 'v-checkbox',
      agreeCheckboxRuleRequired: 'برای ادامه باید قبول کنید',
      agreeSwitchLabel: 'v-switch',
      agreeSwitchRuleRequired: 'برای ادامه لطفا فعال کنید',
      genderRadioLabel: 'v-radio',
      genderRadioOptionMale: 'مرد',
      genderRadioOptionFemale: 'زن',
      genderRadioRuleRequired: 'لطفا جنسیت خود را انتخاب کنید',
      docFileLabel: 'v-file-input',
      docFilePlaceholder: 'داکیومنت',
      submitButtonText: 'ثبت',
      cancelButtonText: 'لغو',
      removeButtonText: 'حذف',
      sendButtonText: 'ارسال',
      returnButtonText: 'بازگشت'
    },
    forgotPass: {
      title: 'فراموشی رمز عبور',
      email: 'پست الکترونیک',
      submit: 'ارسال',
      cancel: 'بازگشت'
    },
    authenticationDetails: {
      title: 'پیام ها',
      registerTitle: 'اطلاعات شما با موفقیت ثبت شد',
      registerDescription: 'پیام تایید به پست الکترونیکی شما ارسال شد',
      registerDetails: 'مراحل تایید :',
      registerDetails1: '1. وارد پست الکترونیکی که در هنگام ثبت نام ثبت کرده اید شوید .',
      registerDetails2: '2. پیام تاییدی را که از دیما دریافت کردید باز کنید.',
      registerDetails3: '3. روی لینک کلیک کنید.',
      changePasswordTitle: 'تغییر کلمه عبور',
      changePasswordDescription: 'کلمه عبور شما با موفقیت تغییر یافت',
      login: 'ورود'
    }
  }
}
