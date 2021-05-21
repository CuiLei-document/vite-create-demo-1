<template>
    <div class=" gulun-topnav-banner">
        <Topnav />
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>很厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="gulun-svg-logo">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于TypeScript</h3>
                <p>源码采用 TypeScript</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-lamp"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的原代码极其简洁</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue';

    export default {
        components: {Topnav}
    };
</script>
<style lang="scss" scoped>
    $green: #02bcb0;
    $border-radius: 4px;
    $color: #28d1c9;
    .gulun-topnav-banner {
        background: rgb(227, 255, 253);
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $color;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                display: inline-block;
                color: white;
                padding: 6px 22px;
                border-radius: $border-radius;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

    .gulun-svg-logo {
        margin: 64px auto;
        width: 400px;
        /*border: 1px solid red;*/
        >ul{
            display:flex;
            flex-wrap: wrap;
            >li{
                width: 400px;
                margin: 16px 0;
                display:grid;
                /*justify-content: start;*/
                /*align-content: space-between;*/
                grid-template-areas:
                        "icon title"
                        "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;
                >svg{
                    grid-area: icon;
                    width: 72px;
                    height: 72px;
                }
                >h3{
                    grid-area: title;
                    font-size: 28px;
                }
                > p{
                    grid-area: text;
                }
            }
        }
    }
</style>