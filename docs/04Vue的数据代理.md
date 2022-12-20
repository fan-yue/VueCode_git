不太理解

1.Vue中的数据代理

​	通过Vm对象来代理data对象中属性的操作（读/写）



2.Vue中数据代理的好处

​	更加方便的操作 data 中的数据



3.基本原理

​      通过 Object.definePropert() 把 data 对象中所有属性添加到 vm 上

​      为每一个添加到 vm 上的属性，都指定了一个 getter / setter

​      在 getter / setter 内部去操作(读/写) data 中对应的属性