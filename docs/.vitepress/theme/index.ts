import DefaultTheme from 'vitepress/theme'
import DashboardPremium from './components/DashboardPremium.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Registrar globalmente tu componente
    app.component('DashboardPremium', DashboardPremium)
  }
}

