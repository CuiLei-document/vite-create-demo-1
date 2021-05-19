<template>
    <div v-bind="size">
        <button v-bind="reset">
            <slot/>
        </button>
    </div>
</template>

<script lang="ts">
    export default{
        inheritAttrs: false,
        setup(props,content){
            const {size,...reset} = content.attrs
            return {size,reset}
        }
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid red;
    }
</style>