import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Cui from './components/Cuis.vue';
import Cuis2 from './components/Cuis2.vue'
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Cui
        },
        {
            path:'/xxx',
            component:Cuis2
        }
    ]
});
const app = createApp(App)
app.use(router)
app.mount('#app');
