
import './lib/gulun.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'
import MarkDown from './components/MarkDown.vue';
const app = createApp(App);
app.component('MarkDown', MarkDown);
app.use(router);
app.mount('#app');


