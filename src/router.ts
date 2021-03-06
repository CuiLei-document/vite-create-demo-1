import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStarted from './markdown/getstarted.md';
import MarkDown from './components/MarkDown.vue';
import { h } from 'vue';
const md = string => h(MarkDown,{content: string ,key:string})
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
                    component: md(intro)
                },
                {
                    path:'get-started',
                    component:md(getStarted)
                },
                {
                    path:'install',
                    component:md(install)
                }
            ]
        }
    ]
});
