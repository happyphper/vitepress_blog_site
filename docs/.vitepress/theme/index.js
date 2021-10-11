import Theme from 'vitepress/theme'

import MyLayout from './layouts/Layout.vue'

import HomeFooter from './components/HomeFooter.vue'

const MyTheme = {...Theme, Layout: {...MyLayout}}

export default {
  ...MyTheme
}