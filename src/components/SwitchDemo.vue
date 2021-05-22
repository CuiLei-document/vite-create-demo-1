<template>
    <div>
        <Demo :component="Switch1Demo"/>
        <Demo :component="Switch2Demo"/>
    </div>
</template>

<script lang="ts">

    import Switch1Demo from '../components/Switch1.demo.vue';
    import Switch2Demo from '../components/Switch2.demo.vue';
    import Demo from '../components/Demo.vue';
    import {ref} from 'vue';

    export default {
        components: {Demo},
        setup() {
            const bool = ref(true);
            return {bool, Switch1Demo, Switch2Demo};
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
        margin-left: auto;
        margin-right: auto;
        width: 800px;

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

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }

    }
</style>