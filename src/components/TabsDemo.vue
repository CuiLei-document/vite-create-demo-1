<template>
    <div>Tabs示例</div>
    <Demo :component="TabDemo" />
</template>

<script>
    import Demo from '../components/Demo.vue'
    import TabDemo from '../tabs/Tab.demo.vue'
    export default{
        components: {Demo},
       setup(){
           return{TabDemo}
       }
    }
</script>