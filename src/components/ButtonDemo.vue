<template>
    <div>Button 实例</div>
    <Demo :component="Button1"/>
    <Demo :component="Button2"/>
    <Demo :component="Button3"/>
    <Demo :component="Button4"/>
    <Demo :component="Button5"/>
</template>

<script lang="ts">
    import Demo from '../components/Demo.vue'
    import Button1 from '../buttons/Button1.vue';
    import Button2 from '../buttons/Button2.vue';
    import Button3 from '../buttons/Button3.vue';
    import Button4 from '../buttons/Button4.vue';
    import Button5 from '../buttons/Button5.vue';
    import Button from '../lib/Button.vue';
    export default{
        components:{Demo,Button},
        setup(){
            const onClick = () => {
                console.log('hi');
            }
            return {onClick,Button1,Button2,Button3,Button4,Button5}
        }
    }
</script>