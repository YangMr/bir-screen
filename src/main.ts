import './styles/common.scss'

import { createApp } from 'vue'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 使用乾坤渲染
renderWithQiankun({
  // 挂载时
  mount(props: any) {
    console.log('props', props)
    console.log('mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props: any) {
    console.log('unmount', props)
  },
  update(props: any) {
    console.log('vue3sub1 update')
    console.log(props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

function render(props: any) {
  const { container } = props
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}
