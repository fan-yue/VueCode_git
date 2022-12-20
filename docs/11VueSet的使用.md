`js复习`

1. js数组操作方法
    1. unshift()
    2. push()
    3. splice()
    4. filter()
2. js对象结构

<hr>

Vue监视数据的原理：

1. Vue会监视`data`中所有层次的数据

2. 如何检测对象中的数据？（通过`setter`实现监视，且要在`new Vue`时就传入要监视的数据）

    1. 对象中后追加的属性，`Vue`默认不做响应式处理

    2. 如需给后添加的属性做响应式，请使用如下`API`

        - Vue.set(target,property/index,value)

        - vm.$set(target,property/index,value)

3. 如何监测数组中的数据？（通过包裹数组更新元素的方法实现，本质就是做了两件事）

    1. 通过原生对应的方法对数组进行更新
    2. 重新解析模板，进而更新页面

4. 在`Vue`修改**数组**中的某一个元素一定要用如下方法才会产生效果，**数组**不会有`getter`和`setter`，无法产生响应式，**对象**不会出现这些问题。

    1. 使用`js`这些`api`：
        - push()、pop()、shift()、unshift()、splice()、sort()、reverse()
        - Vue.set() 或 vm.$set()



`Vue`数据监视，后添加到**data**的属性，是没有**响应式**的，需要使用`Vue.set()`方法或者`this.$set()`方法进行添加，方可产生响应式，在网页实时产生数据更新。

### Vue.set()

`Vue.set(target,property/index,value)`

`例子`：通过`Vue.set()`方法添加`student`中的`age`属性

```
    <div id="a">
        <button @click="addh">添加</button>
        <p>{{student.name}}</p>
        <p>{{student.age}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#a',
            data:{
                student:{
                    name:'uf'
                }

            },
            methods: {
                addh(){
                    Vue.set(this.student,'age',18);
                }
            },
        })
    </script>
```

`例子`：使用`Vue.set()`修改`data`中的数据

```
    <div id="a">
        <h2>爱好</h2>
        <ul>
            <li v-for="(h, index) in habit" :key="index">
                {{h}}
            </li>
        </ul>
        <button @click="addh">添加爱好</button>
    </div>

    <script>
        const vm = new Vue({
            el:'#a',
            data:{
                habit:['抽烟','喝酒','烫头']
            },
            methods: {
                addh(){
                    Vue.set(this.habit,0,'客气');
                }
            },
        })
    </script>
```



### vm.$set()

`vm.$set(target,property/index,value)`

`例子`：通过`vm.$set()`方法添加`student`中的`age`属性

```
    <div id="a">
        <button @click="addh">添加</button>
        <p>{{student.name}}</p>
        <p>{{student.sex}}</p>
    </div>

    <script>
        const vm = new Vue({
            el:'#a',
            data:{
                student:{
                    name:'uf'
                }

            },
            methods: {
                addh(){
                    vm.$set(this.student,'sex','男')
                }
            },
        })
    </script>
```



### 使用数组方法，对`data`中的属性产生效果。

`例子`:`Vue`修改数组中的某一个元素一定要用如下方法才会产生效果，`push()、pop()、shift()、unshift()、splice()、sort()、reverse()`

```
    <div id="a">
        <button @click="student.age++">年龄+1岁</button>
        <br>
        <button @click="addSex">添加性别，默认值：男</button>
        <br>
        <button @click="addf">在列表首位添加一个朋友</button>
        <br>
        <button @click="changezs">修改第一个朋友名字为：张三</button>
        <br>
        <button @click="addhabbit">修改第一个爱好</button>
        <br>
        <button @click="changehabbit">修改第一个爱好为：开车</button>
        <br>

        <h3>姓名：{{student.name}}</h3>
        <h3>年龄：{{student.age}}</h3>
        <h3 v-if="student.sex">性别：{{student.sex}}</h3>
        <h3>爱好</h3>
        <ul>
            <li v-for="(h, index) in student.habbit" :key="index">
                {{h}}
            </li>
        </ul>
        <h3>朋友</h3>
        <ul>
            <li v-for="(f, index) in student.friends" :key="index">
                {{f.name}} __ {{f.age}}
            </li>
        </ul>
    </div>

    <script>
        const vm = new Vue({
            el:"#a",
            data:{
                student:{
                    name:'tom',
                    age:19,
                    habbit:['抽烟','喝酒','烫头'],
                    friends:[
                        {name:"tony",age:35},
                        {name:"马化腾",age:36},
                    ],
                }
            },
            methods: {
                addSex(){
                    // 使用Vue.set()使用
                    // Vue.set(this.student,'sex','男');
                    // this.$set()
                    this.$set(this.student,'sex','男')
                },
                addf(){
                    var f1 = {name:'一号',age:18};
                    this.student.friends.unshift(f1);
                },
                changezs(){
                    // this.student,friends[0].name  返回的是一个对象。
                    this.student.friends[0].name = '张三';
                    
                },
                addhabbit(){
                    this.student.habbit.push('哈哈');
                },
                changehabbit(){
                    // 第一种方式
                    // this.student.habbit.splice(0,1,'开车');
                    // 第二种，Vue.set()
                    Vue.set(this.student.habbit,0,'开测')
                }
            },
        })
    </script>
```

