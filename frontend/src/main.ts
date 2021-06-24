import { createApp } from 'vue'
import {mockServiceWorker} from '../mocks/browser'
import App from './App.vue'
import './index.css'
import { router } from './utils/router/router'

mockServiceWorker.start().then(() => {
    const app = createApp(App);
    app.use(router)
    app.mount('#app')
  }
)

