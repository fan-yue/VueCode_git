`JavaScript`复习

1. JSON.stringify()  方法



收集表单数据：

​	如果：`<input type="text">`,则`v-model`收集的是value值，用户输入的就是value值

​	如果：`<input type="radio">`，则`v-model`收集的是value值，且要给标签配置vlaue的值

​	如果：`<input type="checkbx">`

1. 没有配置`input`的`value`属性，那么收集的就是`checked`(勾选 或者 未勾选，是布尔值)
2. 配置`input`的value属性
    1. `v-model`的初始值是非数组，那么收集的就是 `checked`(勾选 或者 未勾选，是布尔值)
    2. `v-model`的初始值是数组，那么收集的就是`value`组成的数组

​	`v-model`的三个修饰符

1. lazy：失去焦点再收集数据
2. number：输入字符转为有效数字
3. trim：输入首尾空格过滤



`例子`：使用 `v-model`收集表单信息

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="a">
        <form action="" @submit.prevent="demo">
            账号：<input type="text" v-model="userInfo.wenben"><br>
            密码：<input type="password" name="" id="" v-model="userInfo.pass"><br>
            性别：
            <!-- 单选中，vue中需要对应的 v-model方法，还需要 对应的 value值 -->
            男<input type="radio" name="sex" id="" v-model="userInfo.sex" value="male">
            女<input type="radio" name="sex" id="" v-model="userInfo.sex" value="female"><br>
            爱好：
            <!-- 多选中，vue中需要对应的 v-model方法，还需要 对应的 value值，并且接受还需要使用空数组接受 -->
            学习：<input type="checkbox" v-model="userInfo.habbit" value="study">
            打游戏：<input type="checkbox" v-model="userInfo.habbit" value="game">
            吃饭：<input type="checkbox" v-model="userInfo.habbit" value="eat">
            <br>
            所属小区
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="bj">北京</option>
                <option value="sh">上海</option>
                <option value="sz">深圳</option>
                <option value="wh">武汉</option>
            </select>
            <br>
            其他信息：
            <textarea name="" id="" cols="30" rows="10" v-model="userInfo.other"></textarea>
            <br>
            <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="#">《用户协议》</a>
            <br>
            <input type="submit" value="按钮" >
        </form>
    </div>
    <script>
        const vm = new Vue({
            el:"#a",
            data:{
                userInfo:{
                    wenben:"",
                    pass:"",
                    sex:"female",
                    habbit:[],
                    city:"bj",
                    other:"",
                    agree:""
                }
            },
            methods: {
                demo(){
                    // 第一种 this._data  返回的是一个合集
                    // console.log(this._data);
                        // 使用JSON.stringfy()  ,返回一个json格式的数据
                    // console.log(JSON.stringify(this._data));
                    // 第二种，统一使用 userInfo 返回数据,需要注意的是HTML中需要更改结构
                    console.log(JSON.stringify(this.userInfo));
                }
            },
        })
    </script>
</body>
</html>
```

### `v-model.number`  仅收集纯数字；修饰符

`v-model.number`，vue自带的属性，收到的数据仅收集纯数字形式

```
<input type="number"  v-model.number="userInfo.age">
```



### `v-model.lazy`	延迟加载，懒加载；修饰符

`v-model.lazy`	延迟加载，懒加载，当文件输入后，文本框失去焦点后，加载，运行在`data`数据中

```
<textarea name="" id="" cols="30" rows="10" v-model.lazy="userInfo.other"></textarea>
```



### `v-model.trim`	去除文本框内空格，修饰符

`v-model.trim`	去除文本框内空格，修饰符，避免用户使用空格填充内容

```
<input type="text" v-model.trim="userInfo.wenben"><br>
```

