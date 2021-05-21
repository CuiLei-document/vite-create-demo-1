<template>
    <div class="gulun-topnav">
        <router-link to="/" class="logo" >
            <svg class="icon">
                <use xlink:href="#icon-gulun"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggle">
                <use xlink:href="#icon-caidan"></use>
        </svg>
    </div>
</template>

<script lang='ts'>
    import {provide, inject, Ref} from 'vue'
    export default{
        props:{
            toggleMenuButtonVisible:{
                type:Boolean,
                default: false
            }
        },
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible')
            const toggle = ()=>{
                asideVisible.value = !asideVisible.value
            }
            return {toggle}
        }
    }
</script>

<style scoped lang="scss">
    .gulun-topnav{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        position:fixed;
        left:0;
        top:0;
        width: 100%;
        z-index: 20;
        > .logo{
            max-height: 6em;
            margin-right: auto;
            > .icon{
                width: 28px;
                height: 28px;
            }
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
            width: 26px;
            height: 26px;
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