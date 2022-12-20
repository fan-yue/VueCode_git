<template>
    <div>
        <h2 v-text="msg" ref="title"></h2>
        <School ref="sch"></School>
        <button @click="showtest" ref="btn">按钮</button>
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue'
    
    export default {
        name:"App",
        components:{
            School
        },
        data(){
            return{
                msg:'文字测试'
            }
        },
        methods: {
            showtest(){
                console.log(this.$refs.title);  //真实DOM元素
                console.log(this.$refs.sch);    //School组件的实例对象
                console.log(this.$refs.btn);    //真实DOM元素
            }
        },
    }
</script>

<style>

</style>