<template>
    <button class="GuLun-button" :class="classes">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from 'vue';

    export default {
        props: {
            theme: {
                type: String,
                default: 'button'
            },
            size:{
                type: String,
                default:'normal'
            },
            level:{
                type:String,
                default:'normal'
            }
        },
        setup(props) {
            const {theme,size,level} = props;
            const classes = computed(() => {
                return {
                    [`gulun-theme-${theme}`]: theme,
                    [`gulun-size-${size}`]: size,
                    [`gulun-level-${level}`]: level
                };
            });
            return {classes};
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333333;
    $blue: #40a9ff;
    $radius: 4px;
    $red: red;
    .GuLun-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.85);
        transition: background 250ms;
        & + & {
            margin-left: 8px;
        }
        &.gulun-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,
            &:focus{
                background:darken(white,5%);
            }
        }
        &.gulun-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,
            &:focus{
                color: lighten($blue,10%);
            }
        }

        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        &::-moz-focus-inner {
            border: 0;
        }
        &.gulun-size-big{
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }
        &.gulun-size-small{
            font-size: 16px;
            height: 22px;
            padding: 0 6px;
        }
        &.gulun-theme-button{
            &.gulun-level-main{
                background: $blue;
                border-color: $blue;
                color: white;
                &:hover,
                &:focus{
                    background: darken($blue,10%);
                    border-color: darken($blue,10%);
                }
            }
            &.gulun-level-danger{
                background:$red;
                border-color: $red;
                color: white;
                &:hover,
                &:focus{
                    background:darken($red,20%);
                    border-color: darken($red,10%);
                }
            }
        }
        &.gulun-theme-link{
            &.gulun-level-danger{
                color: $red;
                &:hover,&:focus{
                    color: darken($red,20%);
                }
            }
        }
        &.gulun-theme-text{
            &.gulun-level-main{
                color: $blue;
                &:hover,
                &:focus{
                    color: darken($blue,10%);
                }
            }
            &.gulun-level-danger{
                color: $red;
                &:hover,
                &:focus{
                    color: darken($red,10%);
                }
            }
        }
    }

</style>