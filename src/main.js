import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './style.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
      

createApp(App)
    .use(PrimeVue)
    .mount('#app')
