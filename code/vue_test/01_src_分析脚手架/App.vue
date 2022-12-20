<template>
    <div>
        <SchoolName></SchoolName>
        <StudentName></StudentName>
    </div>
</template>

<script>
    // 引入组件,es6的模块引入
    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    export default {
        name:"App",
        components:{
            SchoolName,
            StudentName
        }
    }
</script>

<style>

</style>