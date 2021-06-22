import { createApp } from 'vue'
import {mockServiceWorker} from '../mocks/browser'
import App from './App.vue'

mockServiceWorker.start()

createApp(App).mount('#app')
