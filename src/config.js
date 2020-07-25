import fa from './locale/fa'
import en from './locale/en'
import API_JSON from '../public/swagger/openapi.json'

// NOTE: put all applciation config here
export default {
  homeURL: '/',
  locale: 'en',
  localeDateString: 'en-US',
  locales: {
    fa,
    en
  },
  rtl: false,
  darkTheme: false,
  apiBaseURL: 'https://api.exmaple.com',
  apiJson: API_JSON,
  brandLogo: '/img/brand-logo.png',
  themes: {
    light: {
      headerColor: '#5B7BDC',
      mainContent: '#ffffff',
      sidebarContent: '#f3f3f3',
      formInputColor: '#F3F7F9',
      borderColor: '#E1E7EE'
    },
    dark: {
      headerColor: '#000000',
      mainContent: '#333333',
      sidebarContent: '#222222',
      formInputColor: '#2C2C2C',
      borderColor: '#4E4E4E'
    }
  },
  layout: {
    mainPanelLayout: 'panel-full-height-side',
    panel: {
      isHeaderDark: true,
      isSidebarDark: false
    }
  }
}
