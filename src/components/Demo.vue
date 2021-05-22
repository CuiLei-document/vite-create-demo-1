<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component"/>
        </div>
        <div class="demo-actions">
            <Button @click="toggleCode">查看代码</Button>
        </div>
        <div   class="demo-code" v-if="codeVisible">
            <pre class="language-css" v-html="Prism.highlight(component.__demo,Prism.languages.html,'html')"></pre>
        </div>
    </div>
</template>

<script lang="ts">
    import 'prismjs';
    import '../assets/prism.css';
    import Button from '../lib/Button.vue';
    import {ref} from 'vue';

    const Prism = (window as any).Prism;
    console.log(Prism);
    export default {
        components: {Button},
        props: {
            component: Object
        },
        setup(props) {
            const codeVisible = ref(false);
            const toggleCode = () => {
                codeVisible.value = !codeVisible.value;
            };
            return {Prism, codeVisible, toggleCode};
        }

    };
</script>

<style lang="scss">
    $border-color: #d9d9d9;
    $color: fade_out(green, 0.5);
    .demo {
        border: 1px solid $border-color;
        padding: 8px 16px;
        margin: 16px 0 32px;

        > h2 {
            color: $color;
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            transition: height 150ms;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }

    }
</style>