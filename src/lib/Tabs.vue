<template>
    <div>
        <div v-for="(c,index) in titles" :key="index">{{c}}</div>
        <component v-for="(t,index) in defaults" :key="index" :is="t"/>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue';

    export default{
        setup(props,context){
            const defaults = context.slots.default()
            defaults.forEach((tag)=>{
                if(tag.type !== Tab){
                    throw new Error('tag 标签必须是 Tab')
                }
            })
            const titles  = defaults.map((t)=>{
                return t.props.title
            })
            return {defaults,titles}
        }
    }
</script>