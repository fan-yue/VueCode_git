<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:"School",
    // data使用函数形式而不用简写形式，因为复用性比较强
    data() {
        return {
            name:'开方法学',
            address:'平谷'
        }
    },
}
</script>

<style>
    .dmeo{
        background-color: aqua;
        color: white;
    }
</style>