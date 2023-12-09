import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
import KonamiCode from "vue3-konami-code"



const app = createApp(App);
app.use(KonamiCode, {
    onKonamiCodeEntered: function() {
        const event = new CustomEvent('konami')

        document.dispatchEvent(event)
    }
});
app.use(VueFullPage)
app.mount('#app')
