<template>
    <div>
        <div>Dialog 示例</div>
        <h1>示例一</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :close-on-click-overlay="false"
                :ok="f1" :cancel="f2"
        >
            <template v-slot:title>
                <strong>提示</strong>
            </template>
            <template v-slot:content>
                <div>你好</div>
                <div>你好啊</div>
            </template>
        </Dialog>
    </div>

</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import {ref} from 'vue';
    import Button from '../lib/Button.vue';

    export default {
        components: {Button, Dialog},
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value;
            };
            const f1 = () => {
                return false;
            };
            const f2 = () => {
            };
            return {
                x, toggle, f1, f2
            };
        }
    };
</script>