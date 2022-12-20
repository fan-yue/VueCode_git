## 初识Vue

1.想让Vue工作，必须创建一个Vue实例，且要传入一个配置对象

2.root容器里的代码依然符合HTML规范，只不过深入了一些特殊的Vue语法

3.root容器里的代码被称为 【Vue模板】

4.Vue实例和容器时一一对应的

5.真实开发只有一个Vue实例，并且会配置着组件一起使用

6.{{xxx}} 中的 xxx 要写 js表达式，并且 xxx 可以自动读取到 **data** 中的所有属性

7.一旦data中的数据发生改变，那么模板中用到该数据的地方也会更新。



`例子：`

```vue
<!-- 准备一个容器 -->
    <div id="root">
        <h1>hello,{{name}},{{age}}</h1>
    </div>
    
    <script>
        Vue.config.productionTip = false;   //阻止 vue 在启动时生成生产提示。

        // 创建vue实例
        const x = new Vue({
            el:'#root',//el用于指定当前Vue实例为哪一个容器，值通常为css选择器字符串
            data:{      //data中用于存储容器，数据供el所指定的容器去使用，值我们先暂时写一个对象
                name:"YF",
                age:18
            }
        })
    </script>
```



