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
通过数据驱动应用，数据变化，视图更新，视图变化，数据更新。

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

实例从创建到销毁的一个过程(数据观测、模版编译、实例挂载、DOM更新)。Vue3 中的生命周期比 Vue2 的快。

大体分为以下三个阶段。

1. 挂载 `beforeCreate、created、beforeMount、mounted`

2. 更新 `beforeUpdate、updated`

3. 销毁 `beforeDestroy、destroyed`

| 2.x | 3.x | 描述 | 用途 |
| :--- | :--- | :--- |
| beforeCreate | setup | 实例创建前 | loading的加载、插件的挂载... |
| created | setup | 实例创建完成 | 发送ajax请求... |
| beforeMount | onBeforeMount | 实例挂载前 | |
| mounted | onMounted | 实例挂载后 | 可获取DOM节点、发送ajax请求 |
| beforeUpdate | onBeforeUpdate | 数据更新前 | 获取更新前各种状态 |
| updated | onUpdated | 数据更新后 | |
| beforeDestroy | onBeforeUnmount | 销毁之前 | 定时器的清除、移除事件监听... |
| destroyed | onUnmounted | 销毁完成 | 移除事件监听 |

## 父子组件的挂载顺序

父组件
> beforeCreate > created > beforeMount

子组件
> beforeCreate > created > beforeMount > mounted

父组件
> mounted

## 组件间的通信方式

父向子
> props、$refs、$attrs(所以未被props定义的属性)

子向父
> $emit、$parent

兄弟组件
> vuex、$parent、

跨层级(祖孙组件)
> vuex、provide+inject

## key的作用及不建议使用index

为虚拟DOM添加唯一的标识符。当数据变化时，vue根据新旧虚拟DOM的key进行比较，
找到了相同的可以但内容未变直接复用之前的DOM，内容变量则创建新的DOM。未找到相同的key则创建新的真实DOM。

使用index作为key时，当向列表前面添加或删除数据时会导致后的key发生改变，而
重新创建DOM，不能极大的复用。存在输入类的DOM会产生错误DOM更新。

## 虚拟DOM

用js对象模拟DOM结构。

主要解决浏览器性能的问题。当视图更新后台，虚拟DOM不会立即更新，而是将它记录在一个js
对象中，最后将这个对象一次性的添加到DOM树中，避免了大量重复的DOM操作。

## 路由模式

- hash模式

  在地址栏中会有一个`#`，可用`location.hash`获取hash值。
  当hash值改变时不会触发http请求，不会重新加载页面。

- history模式

  利用H5的`history`API。通过`pushState、replaceState`方法向当前浏览器会话的历史堆栈中添加或替换一个状态，
  不会触发`popstate`事件，只有在做出浏览器动作(go、back、forward)时，才会触发该事件。

## 路由跳转方式

- 声明式导航：`<router-link :to="..." />`

- 编程式导航：`router.push()...`

## 路由钩子

路由钩子分为：
1. 全局守卫

  - beforeEach：进入路由之前。可进行用户身份的校验。
  - afterEach：进入路由之后

2. 路由独享守卫(beforeEnter)

3. 组件内守卫

  - beforeRouteEnter：路由进入前
  - beforeRouteUpdate：路由更新
  - beforeRouteLeave：路由离开


## vuex

vuex是一种状态管理模式，用于集中式状态管理、数据共享的仓库。

state：定义数据状态

getters：获取state中的数据，会进行缓存，变化时会重新计算。

mutations：修改state中的数据唯一方法是提交(`commit`) mutation，必须是同步函数。

actions：主要用来处理一些异步操作，通过`dispatch`来分发任务提交`mutations`，不能直接变更状态。

module：

  将store分成多个模块，每个模块都拥有自己的state、getters、mutations、actions。

  通过`namespaced:true`开启命名空间，提交分发时带上命名空间名称。避免多个模块对同一个mutation 或 action 作出响应。

## 客户端和服务端渲染的区别

- 客户端

  用户输入地址向服务器发送请求后，传给浏览器相应的网页文件并解析，然后将数据渲染到页面。在客户端生成DOM，不利于SEO优化。

- 服务端

  在服务端操作网页文件，通过render函数渲染好整个页面，最后发送给客户端。在服务端生成DOM，有利于SEO优化、爬虫。

## 怎么解决Vue打包文件过大的问题

- 不常用的库通过CDN的方式引入。

- 使用路由懒加载。

- 开启gzip压缩。

## Vue性能优化

- 使用for循环时绑定key，尽量不是用index作为key。

- 路由懒加载。

- 使用v-show、KeepAlive复用DOM。

- 打包去掉map文件。

- 通过CDN引入第三方库。

- 避免DOM的操作。

- 减少页面Ajax请求的数量。

## 怎么解决页面刷新Vuex值被重置的问题

- 将Vuex值保存到浏览器缓存中。

- 页面刷新再次发送请求，动态更新Vuex。

## http和https的区别

http 是以明文的方式传输的，https是http协议更加安全的版本，通过SSL进行加密传输。

http默认端口是80，​https默认端口是443。

## 如何扩展组件

常见的扩展方法有 `mixins、extends、slots`。

slots 属于内容扩展，精确分发时使用具名插槽。

extends 类似 mixins。与 Vue.extend 不同的是 Vue.extend 创建的是一个实例。

混入(mixins)是分发组件可复用的功能非常灵活的方式。混入对象可包含组件任意选项。在混入时可能导致变量冲突。

```js
  // 复用代码：它是一个配置对象，选项和组件里面一样
  const mymixin = {
    methods: {
      dosomething(){}
    }
  }
  // 全局混入：将混入对象传入
  Vue.mixin(mymixin)

  // 局部混入：做数组项设置到mixins选项，仅作用于当前组件
  const Comp = {
    mixins: [mymixin]
  }
```

## 子组件能修改父组件的数据吗

vue 中数据传递是单向的，父级状态的更新会向下流到的子组件中（props自动刷新），反之则不行。 
这样防止了子组件意外变更父组件状态时导致数据流向难以理解的问题。

解决方法：通过 `emit` 分发一个事件去修改父组件的状态。

> 虽然不能直接修改传递过来的 props，但是可以修改内嵌的对象或属性。

## 权限管理

权限管理分为页面权限和按钮权限的管理。

首先在路由 meta 信息中配置 roles 字段用于权限匹配，并把所有的路由信息配置成一个路由表， 
然后通过路由守卫钩子验证用户身份，根据返回身份信息与路由中的 roles 字段匹配过滤路由表， 
最后通过路由的 addRoute 方法动态添即可。
