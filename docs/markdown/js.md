#### js基础
##### js的数据类型
    Number、String、Boolean、null、undefined、object

##### typeof 和 instanceof 的区别
    typeof：判断变量的数据类型，返回的是字符串
    instanceof：判断构造函数的原型(prototype)是否出现实例上。实例 instanceof 构造函数。也可以判断数据类型

##### 判断两个对象相等
    1、将两个对象通过JSON.stringify()转换成json字符串，然后进行比较
    tips：obj.hasOwnProperty('字段')         obj中是否有这个字段
          Object.getOwnPropertyNames(obj)   获取哦obj中的所有字段名
    2、function checkObj(obj1,obj2){
            if(typeof obj1 != 'object' && typeof obj2 != 'object') return false
            // 内存地址相同直接返回true
            if(obj1 === obj2){
                return true
            }
            for(let i in obj1) {
                // 遍历第一个对象拿到key，然后判断第二个对象中是否有这个字段
                if(obj2.hasOwnProperty(i)) {
                    if(typeof obj1[i] == 'object'){
                        checkObj(obj1[i],obj2[i])
                    }else {
                        return obj1[i] == obj2[i]
                    }
                }else {
                    return false
                }
            }
        }

##### == 和 === 的区别
    ==  只是比较两个变量的值
    === 不仅会比较值，还会对数据类型进行比较

##### js常用的内置对象
    Object、String、Math、Date

##### 列举对数组进行操作的方法
    push        向数组末尾添加元素, 可以添加多个，依次按书写顺序添加
    pop         在数组末尾删除一个元素
    shift       在数组开头删除一个元素
    unshift     在数组开头添加一个元素, 可以添加多个,看做一个整体添加到最前面
    splice      在数组指定的位置添加或删除元素

##### 列举几个字符串的操作方法
    slice       截取字符串（数组也有这个方法,返回一个新数组）
    split       以指定字符分割字符串
    indexOf     查找指定字符是否存在，存在返回下标，不存在返回-1
    charAt      返回指定下标的字符串

##### document.write、innerHTML和innerText的区别
    document.write：指定的是整个页面内容
    innerHTML：指定的是某个元素的内容，会解析html标签
    innerText：不会解析html标签

##### 列举几个强制类型转换和隐式类型转换
    强制：Number()、String()、toString()、parseInt()
    隐式：+、-、*、/、==

##### 如何判断一个变量是数组
    ({}).toString.call(foo).slice(8,-1)
    或
    Object.prototype.toString.call(foo).slice(8,-1)



#### js高级

##### 封装一个ajax请求函数


##### 什么原型对象 prototype
    每个构造器（构造函数）都有一个prototype属性，这个属性的值是一个对象，这对象叫原型对象。
    在创建实例时，构造函数的prototype属性会传递给实例对象的__proto__属性上，即实例原型(__proto__) = 构造函数原型(prototype)

##### 什么是原型链
    在创建实例时，原型对象会传递给实例对象上的__proto__属性，然后就可可以通过__proto__访问，这种访问的方式叫原型链

##### 什么是构造函数
    用new关键字来调用的函数，带有一定的初始化变量和方法，一般首字母大写。