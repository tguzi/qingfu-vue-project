import frontPanel       from './components/front-panel.vue'
import frontPanelItem   from './components/front-panel-item.vue'

export default {
  install (Vue) {
    Vue.component('my-front-panel', frontPanel)
    Vue.component('my-front-panel-item', frontPanelItem)
  }
}
