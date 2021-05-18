import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Cui from './components/Cuis.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [{
        path: '/',
        component: Cui
    }]
});
createApp(App).mount('#app');
