<template>
    <div class="gulun-tabs">
        <div class="gulun-tabs-nav">
            <div class=" gulun-tabs-nav-item"
                 :class="{selected: t === selected}"
                 @click="select(t)"
                 v-for="(t,index) in titles" :key="index">{{t}}
            </div>

        </div>
        {{current}}
        <div class="gulun-tabs-content">
            <component class="gulun-tabs-content-item" :is="current"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue';
    import {computed} from 'vue';

    export default {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const defaults = context.slots.default();
            console.log(defaults);
            defaults.forEach((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('tag 标签必须是 Tab');
                }
            });
            const titles = defaults.map((t) => {
                return t.props.title;
            });
            const current = computed(() => {
                return defaults.filter((tag) => {
                    return tag.props.title === props.selected;
                })[0];
            });
            const select = (tag) => {
                context.emit('update:selected', tag);
            };
            return {defaults, titles, current, select};
        }
    };
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;

    .gulun-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }
        }

        &-content {
            padding: 8px 0;
        }

    }
</style>