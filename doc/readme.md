微前端

如果没有微前端? 
- 如果项目比较庞大的话, 会导致项目比较臃肿
- 无法去进行团队独立开发
- 无法更好去提升性能
.... 

如果有微前端? 


项目中如何使用qiankun?

主应用: 
1. 下载乾坤
npm i qiankun

2. 创建一个js文件, 名称为registerMicroApp.js

3. 引入qiankun, 解构出registerMicroApp 和 star 方法

4. 在registerMicroApp方法中配置加载的子应用
- 子应用的名称
- 子应用的地址
- 渲染子应用的容器名称
- 设置子应用的路由

5. 在App.vue设置渲染的dom节点

6. 在main.js中引入registerMicroApp.js文件

子应用(微应用):  vite 乾坤不支持的, 需要下载vite的乾坤插件
1. 下载vite-plugin-qiankun -D插件

2. 在vite.config.js中注册插件
import qiankun from 'vite-plugin-qiankun'
 plugins: [
    vue(), 
    // 这里的名称要和主应用改造是配置项中的name保持一致
    qiankun('hmzs-big-screen', {
      useDevMode: true
    })
  ],

3. 在vite.config.js中设置加载资源的地址
 server: {
    // 防止开发阶段的assets 静态资源加载问题
    origin: '//localhost:5173'
},

4. 在mian.ts中使用qiankun渲染子应用
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// 使用乾坤渲染
renderWithQiankun({
  // 挂载时
  mount (props) {
    console.log('mount')
    render(props)
  },
  unmount (props) {
    console.log('unmount', props)
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

function render (props = {}) {
  const { container } = props
  const app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector("#app") : "#app")
}



5. 在主应用通过路由跳转到子应用
