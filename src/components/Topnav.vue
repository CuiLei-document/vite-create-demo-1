<template>
    <div class="topnav">
        <div class="logo" @click="toggle">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import {provide, inject, Ref} from 'vue'
    export default{
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible')
            console.log('Topnav 获取 asideVisible的内容是'+ asideVisible.value);
            const toggle = ()=>{
                asideVisible.value = !asideVisible.value
            }
            return {toggle}
        }
    }
</script>

<style scoped lang="scss">
    .topnav{
        background: pink;
        display: flex;
        padding: 16px;
        position: relative;
        z-index: 9;
        > .logo{
            max-height: 6em;
            margin-right: auto;
        }
        > .menu{
            display:flex;
            white-space: normal;
            flex-wrap: nowrap;
            > li{
                margin: 0 1em;
            }
        }
    }
</style>