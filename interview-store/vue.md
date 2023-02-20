## 什么是单页面应用(SPA)

只有一张Web页面的应用。加载单个HTML页面，在用户与应用程序时动态更新局部模块。

- 优点
  - 用户操作体验好，不会频繁的刷新页面。
  - 前后端分离开发

- 缺点
  - SEO不友好
  - 首页加载缓慢

## MVVM模型

即`model`(数据访问层)-`view`(视图层)-`viewmodel`(数据连接层)的响应式框架。

修改view层，model层对应的数据也会随之改变。修改model层，视图层也会更新。


- 优势

  - 低耦合：视图可独立于model的变化和修改
  - 可复用性
  - 分离开发

## vue响应式原理

监听数据变化做出响应的一种机制。

- vue2：采用数据劫持结合发布者-订阅者模式，通过`Object.defineProperty`劫持各个属性的getter、setter，
并创建收集依赖的dep对象。在获取属性值的时候会先判断是否有`target`标识，然后进行依赖收集，
当数据发生变化时发布消息给订阅者，根据依赖收集去通知页面更新。

- vue3：通过`Proxy`代理拦截对象属性的操作，然后通过`Reflect`对源对象的属性进行操作最后反射出去。


## data为什么是一个函数

确保每个组件中data的数据是独立、互不影响的。如果是个普通对象将会影响到其他组件的数据。

## v-if和v-show的区别

- v-if：动态的添加或移除DOM元素，是一个销毁重建的过程，切换消耗较高。
- v-show：使用`display`样式控制DOM元素的显示和隐藏，初始渲染消耗较高。

## v-if和v-for优先级

两者同时使用是不推荐的，优先级不够明显。

- vue2：`v-for`比`v-if`的优先级更高，不管是否渲染都会遍历整个列表，比较浪费性能。

- vue3：`v-if`比`v-for`的优先级更高，这会导致无法访问到`v-for`中定义的变量。

## computed、watch和methods的区别

- computed 有缓存机制，当依赖的数据发生改变时才会重新计算，必须return出去。

- watch 监听已存在的属性是否发生改变，然后执行一系列的操作，不要return。

- methods 没有缓存，每次调用都会执行一次。

## vue的生命周期

实例从创建到销毁的一个过程。大体分为挂载、更新、销毁三个阶段。

|周期钩子|描述|用途|
|:---|:---|:---|
|beforeCreate|实例创建前|loading的加载...|
|created|实例创建后|发送ajax请求...|
|beforeMount|实例挂载前||
|mounted|实例挂载后|当前阶段可获取到DOM节点，也可用于发送ajax请求|
|beforeUpdate|数据更新前||
|updated|数据更新后||
|beforeDestroy|销毁之前|此阶段可用于清除定时器、事件监听...|
|destroyed|销毁完成||

## 父子组件的挂载顺序

父组件
> beforeCreate > created > beforeMount

子组件
> beforeCreate > created > beforeMount > mounted

父组件
> mounted

## 组件间的通信方式

父向子
> props、$refs

子向父
> $emit、$parent

兄弟组件
> vuex

## key的作用及不建议使用index

为虚拟DOM添加唯一的标识符。当数据变化时，vue根据新旧虚拟DOM的key进行比较，
找到了相同的可以但内容未变直接复用之前的DOM，内容变量则创建新的DOM。未找到相同的key则创建新的真实DOM。

使用index作为key时，当向列表前面添加或删除数据时会导致后的key发生改变，而
重新创建DOM，不能极大的复用。存在输入类的DOM会产生错误DOM更新。

## 虚拟DOM

用js对象模拟DOM结构。

主要解决浏览器性能的问题。当视图更新后台，虚拟DOM不会立即更新，而是将它记录在一个js
对象中，最后将这个对象一次性的添加到DOM树中，避免了大量重复的DOM操作。

## vuex
## 路由模式
## 路由钩子函数
