<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>

<script>
    // 引入组件,es6的模块引入
    import School from './School'
    import Student from './Student'

    export default {
        name:"App",
        components:{
            School:'School',
            Student:'Student'
        }
    }
</script>

<style>

</style>