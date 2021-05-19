<template>
    <div class="topnav">
        <div class="logo" >LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggle"></span>
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
        justify-content: center;
        align-items: center;
        padding: 16px;
        position:fixed;
        left:0;
        top:0;
        width: 100%;
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
        > .toggleAside{
            display:none;
            width: 24px;
            height: 24px;
            background: red;
            position:absolute;
            top:50%;
            left:16px;
            transform: translateY(-50%);
        }
        @media (max-width: 500px) {
            > .menu {
                display:none
            }
            > .logo{
                margin: 0 auto;
            }
            > .toggleAside{
                display: inline-block;
            }
        }
    }
</style>