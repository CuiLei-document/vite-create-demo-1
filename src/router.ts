import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';

import MarkDown from './components/MarkDown.vue';
import { h } from 'vue';
const md = fileName => h(MarkDown,{path:`../markdown/${fileName}.md`,key:fileName})
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    component: DocDemo
                },
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                    path: 'button',
                    component: ButtonDemo
                },
                {
                    path: 'dialog',
                    component: DialogDemo
                },
                {
                    path: 'tabs',
                    component: TabsDemo
                },
                {
                    path:'intro',
                    component: md('intro')
                },
                {
                    path:'get-started',
                    component:md('getstarted')
                },
                {
                    path:'install',
                    component:md('install')
                }
            ]
        }
    ]
});
