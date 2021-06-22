import { createApp } from 'vue'
import {mockServiceWorker} from '../mocks/browser'
import App from './App.vue'
import './index.css'

mockServiceWorker.start()

createApp(App).mount('#app')
