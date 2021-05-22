<template>
    <button class="gulun-switch" :class="{'gulun-checked':value}" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">

    export default {
        props:{
           value:Boolean
        },
        setup(props,content){
            const toggle = ()=>{
                content.emit('update:value',!props.value);
            }
            return{toggle}
        }
    };
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .gulun-switch {
        height: $h;
        width: $h *2;
        background: gray;
        border: none;
        border-radius: $h/2;
        position: relative;
        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2 / 2;
            transition: all 250ms;

        }
        &.gulun-checked{
            background: #49c0f6;
        }
        &.gulun-checked > span{
            left: calc(100% - #{$h2} - 2px)
        }
        &:active{
            > span{
                width: $h2 + 10px;
            }
        }
        &.gulun-checked:active{
            > span{width: $h2 + 4px; margin-left: 2px;}
        }

    }


</style>