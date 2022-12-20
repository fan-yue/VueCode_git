<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名称{{schoolName}}</h2>
        <h2>学生年龄{{address}}</h2>
    </div>    
</template>

<script>
    // vue文件，组件的简写形式
    export default{
        // 命名规范
        name:'School',
        // 组件定义时，不能写 el 配置项，因为最终所有组件都要被一个 VM 管理，由 VM 决定服务与谁
        data(){
            return{
                schoolName:'上地',
                address:'天堂'
            }
        }
    }



    /* 组件交互的相关代码（数据、方法等等） */
    
    // 创建 student 组件
    /* const student = Vue.extend({
        // 组件定义时，不能写 el 配置项，因为最终所有组件都要被一个 VM 管理，由 VM 决定服务与谁
        data(){
            return{
                stdnentName:'zs',
                age:18
            }
        }
    }) */

    // ES6 暴露
    // export default school
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color:aqua;
    }
</style>