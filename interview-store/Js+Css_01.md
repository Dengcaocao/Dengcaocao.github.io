## Css选择器及优先级

!important > 行内样式 > ID选择器 > 类/伪类/属性选择器 > 标签/伪元素选择器 > 关系选择器

## BFC

BFC 全称为块级格式化上下文 (Block Formatting Context) ，它决定了元素如何进行定位以及与其他元素的关系和相互作用。BFC 提供了一个环境，HTML元素在这个环境中按照规则进行布局，一个环境中的元素不会影响到其它环境中的布局。可以说BFC就是一个作用范围、独立的容器，并且这个容器的布局与这个容器外的布局互不影响。

### 触发BFC的条件

1. 浮动（float）
2. 定位（position）
3. 弹性盒模型（flex）
4. 行内块元素（inline-block）
5. overflow

### BFC可解决的问题

1. 解决外边距合并（overflow）
2. 清除浮动

## 盒模型 box-sizing

1. 普通盒模型：content-box。内容实际大小，随边距、边框的值增加而增大。
2. 怪异盒模型：border-box。内容 + padding + border。

## css实现三角形

设置`width`为0，然后添加边框。

```css
  width: 0;
  border: 20px solid transparent;
  border-bottom-color: red;
```

## 定位(position)

1. static：默认值。
2. relative：相对定位。以当前位置为基准进行偏移，任占据原来的空间。
3. absolute：绝对定位。相对于最近的父级进行定位(relative)，不存在则相对于html定位。
4. fixed：相对于浏览器窗口。

## 清除浮动

浮动会导致高度塌陷。

1. 给父级元素添加伪类。

```css
  .selector:after {
    content: "";
    display: block;
    clear: both;
  }
```
2. 父级元素设置`overflow: hidden`。
3. 在浮动元素后添加一个块级元素，然后使用`clear: both`。缺点：出现空白标签。
4. 设置固定高度。

## 实现左侧固宽右侧自适应

1. float + margin
2. flex
3. position
4. calc

## 水平垂直居中

1. transform

```css
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
```

2. position(绝对定位)，需给父元素设置相对定位。

```css
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
```

3. flex

## `display: none` 和 `visibility: hidden` 的区别

两者都是隐藏元素。前者不占据空间，后者隐藏后占据原来的空间。

## Flex布局

1. flex-direction：设置主轴排列方向
2. flex-warp：空间不够是否换行
3. justitfy-content：主轴对齐方式
4. align-item：交叉轴对齐方式
5. align-self：项目对齐方式
6. flex-grow：项目放大比例，默认为0
7. flex-shrink：项目缩小比例，默认为1等比缩小
8. flex：项目在空间中的占比

⚠️注意：当项目设置flex为1后，内容超出元素会被拉伸。

  **解决方案**
  1. 设置`width`为0
  2. 超出元素进行隐藏`overflow: hidden`

## Grid 布局

- 容器。
  - `grid-template-rows/grid-template-columns`：设置行/列数。
    - repeat(row/columns, height/width)
      - row/columns
        - 数字
        - auto-fill：根据容器大小自动填充。
      - height/width
        - 像素值
        - (n)fr：均等分，可单独设置。n表达占据的比例。
    - minmax(最小值, 占比)
  - `row-gap/columns-gap`：设置行/列之间的间距，复合属性`gap`。
  - `grid-template-areas`：为每个项目划分区域并对应一个标识符。
  - `grid-auto-flow`：排列方向。
    - row：默认，从左到右。
    - row dense：当后面项目在这放不下，会将能放下的项目移动到这。
    - cloumns：从上到下。
  - `justify-items/align-items`：每个项目在网格中(主轴/交叉轴)的对齐方式，复合属性`place-items`。
  - `justify-content/align-content`：控制整个内容区域在容器里的对齐方式。

- 项目。
  - `grid-row-start/grid-row-end`：设置跨行开始和结束的网格线，复合属性`grid-row`。
  - `grid-column-start/grid-column-end`：设置跨列开始和结束的网格线，复合属性`grid-column`。
  - `grid-area`：指定项目的区域位置，配合`grid-template-areas`使用。
  - `justify-self/align-self`：单独设置项目在主轴/交叉轴上的对齐方式。

## viewport(视口窗口)

可视区域，用于移动端适配。

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

1. width：控制viewport的宽度大小(可以是定值)，默认为设备的宽度(`device-width`)
2. initial-scale：页面初始加载时的缩放比例
3. maximum-scale：允许用户缩放的最大比例
4. minimum-scale：允许用户缩放的最小比例
5. user-scalable：是否允许用户缩放


## px、em、rem的区别

px是一个绝对单位。

em、rem是一个相对单位。em相对于当前元素的字体大小，rem相对于根元素(html、body)的字体大小。

## 什么是跨域，什么情况会导致跨域，怎么解决

出于浏览器同源策略限制和安全性考虑，当请求的地址与当前地址的协议、域名、端口号不一致时会出现跨域的行为。

1. JSONP

前端事先定义好一个用于获取响应数据的回调函数，通过 `script` 标签（没有同源策略的限制）发起一个请求并将回调函数作为查询参数传递过去，
然后服务端返回这个回调函数的执行将响应数据作为参数传递给回调。

2. CORS（跨域资款共享）

需要浏览器和服务器同时支持。服务器端需要设置响应头信息来允许跨域请求。
`Access-Control-Allow-Origin` 是必须的，要么是请求头的 `Origin` 字段的值，要么是一个 `*`（表示接受任意域名的请求）。

3. 配置反向代理

通过打包工具进行反向代理服务器的配置。

## 首屏加载的优化方案

1. 使用路由懒加载

2. Vue 异步组件

3. Webpack开启gzip压缩

4. 使用link标签的rel属性设置 prefetch

## JS数据类型

基本数据类型：`Number、String、Null、Undefined、Boolean`
引用类型：`Object`

## null和undefined的区别

`undefined`表示变量声明后未进行初始化，是变量声明的默认值。

`null`表示一个不存在的值或空对象，可用于主动释放引用。

## 深浅拷贝

浅拷贝：直接将变量的值进行赋值操作(assign、concat、slice、解构)。

深拷贝：改变引用内存地址。

1. 通过`JSON.stringify`转换成JSON字符串，然后使用`JSON.parse`转换成对象。
   
  ⚠️注意：在转换字符串时会过滤掉值为`undefined`的属性。

2. 递归遍历对象。

```js
  const checkType = data => {
    return ({}).toString.call(data).slice(8, -1).toLowerCase()
  }
  const deepClone = data => {
    let cloneObj = null
    if (!['array', 'object'].includes(checkType(data))) return data
    if (checkType(data) === 'object') {
      cloneObj = {}
      for (let i in data) {
        cloneObj[i] = deepClone(data[i])
      }
    }
    if (checkType(data) === 'array') {
      cloneObj = []
      data.forEach(item => {
        cloneObj.push(deepClone(item))
      })
    }
    return cloneObj
  }
```

## 什么是闭包，闭包的作用及注意点

能够访问其他函数内部变量的一个函数。

形成了一个独立的作用域，保证了变量的私有性。

闭包会把函数中变量保存到内存中，使用过多内存消耗就会过大容易导致内存泄露。

```js
  function fn() {
    let a = 10
    return () => {
      a--
    }
  }
  const changeA = fun()
```

## call和apply的区别

两者都能改变`this`的指向，区别在于`call`传递的实参可以是多个，而`apply`传递的实参是一个数组，每一项对应一个参数。

```js
  const obj = {
    firstName: 'd',
    lastName: 'w'
  }

  function getFullName(a, b) {
    return this.firstName + this.lastName + a + b
  }

  getFullName.call(obj, 1, 2)
  getFullName.apply(obj, [1, 2])
```

## 箭头函数和普通函数的区别

箭头函数的`this`是绑定到上下文中的且没有`prototype`原型。而普通函数的`this`是指向被调用的主体，默认情况下指向`window`。

## 三元表达式和if…else的区别

三元表达式有返回值，后者没有返回值。两者是可以相互转换的。

## 面向对象的理解

面向对象是一种编程思想，将复杂的问题转化为对象的问题。

ES5使用构造函数进行定义，ES6中使用关键字class进行定义

面向对象的三大特点：

  1. 封装：将属性、方法封装到类内部
  2. 继承：子类可继承父类的属性和方法
  3. 多态：子类可重写父类中的方法，实现不同的行为

## 构造函数和实例对象的区别

实例对象是通过new关键字执行构造函数创建出来的，这过程叫实例化。

在new的过程中会将this指向这个实例对象，将构造函数的原型prototype传递给实例对象的原型__proto__。

`instanceof` 判断数据类型，`a instaceof A`。

原理：用while去遍历实例对象，判断对象上的__proto__是否等于prototype。

## 作用域和作用域链

作用域：变量的可访问性。分为全局、块级、函数作用域。在预编译阶段会把变量提升到当前作用域的最前面（函数会将整体提升到最前面）

作用域链：访问一个变量时，首先会在当前作用域中查找，然后依次向上层作用域中查找直到顶层作用域。这样由多个作用域构成的链表叫作用域链。

## 事件流

执行事件的顺序。

冒泡流：从目标元素向顶层元素传递

捕获流：从顶层元素向目标元素传递

## get和post的区别

get请求是不安全的，请求的参数会拼接在url后面，传输的数据比post小(url有长度限制)。

post请求相对于get请求比较安全，请求参数在请求体中，用户是看不见的。

## 内存泄露

程序不再使用一块内存，由于某种原因内存空间没有被释放，导致内存不断占用。

1. 错误的调用递归方法
2. 闭包

## 变量提升

js在执行时分为预编译阶段和执行阶段。

变量提升发生在预编译阶段，在各自作用域最前面声明所有变量，var会忽略块级作用域提升到上一层作用域。此时只提升了变量并没有赋值。

let、const变量也进行了提升，但只能在初始化时才能访问，在这之前是暂时性死区。

函数声明会将整个函数提升到最前面，函数在声明的时候就已经赋值了。函数提升会跳出块级作用域，但内容还保留在里面。函数表达式提升时不会将整体提升。

## 原型、原型链

原型：函数的原型是`prototype`，对象的原型是`__proto__`。在创建实例对象时函数原型`prototype`会传递给实例对象的原型`__proto__`，即实例对象的原型等于构造函数的原型。通过`constructor`可以访问实例的构造器。

原型链：在访问对象属性时，首先会在对象内部去查找，如果不存在则去对象的`__proto__`上查找，`__proto__`指向构造函数的原型，原型对象又有自己的`__proto`，直到最顶层。这样由多个原型对象构成的链表叫原型链。

## 引用类型和值类型的区别

值类型就是一个简单的赋值过程。

引用类型则是保存对象的内存地址，当一个属性值被修改后，其他被引用的地方也会改变。

## 数组去重

1. 使用ES6的`Set`构造函数，然后使用`Array.from`或结构可以得到一个去重的数组。

```js
  Array.from(new Set([1,2,2,3]))
  [...new Set([1,2,2,3])]
```

2. 定义一个空的新数组，然后通过遍历原数组，用`indexOf/includes`判断新数组中是否存在，不存在就push进去。

```js
  const arr = [1,2,2,3]
  const newArr = []
  arr.forEach(item => {
    if(newArr.indexOf(item) === -1) newArr.push(item)
    // if(!newArr.includes(item)) newArr.push(item)
  })
```

3. 使用`filter`过滤。

```js
  const arr = [1,2,2,3]
  arr.filter((item, index) => arr.indexOf(item) === index)
```

## for...in和for...of的区别

`for...in`用于可枚举(`enumerable`)类型的数据(对象，数组，字符串)，遍历的是key，遍历类数组(dom节点列表...)时会遍历到原型中去。

`for...of`用于可迭代(`iterator`)类型的数据(数组，字符串)，遍历的是value。

## typeof 和 instanceof 的区别

两者都是判断数据类型的方法。

`typeof`返回的是变量的数据类型，不能准确的判断引用类型的数据(除function)。

`instanceof`返回的是布尔值，可以准确的判断引用类型数据。

## 判断两个对象是否相等

1. 使用`JSON.stringify`转换成JSON字符串再进行比较(注意值为undefined的属性)。
2. 递归。

```js
  function checkObj(obj1,obj2){
    if(typeof obj1 != 'object' || typeof obj2 != 'object') return false
    // 内存地址相同直接返回true
    if(obj1 === obj2) return true
    // 获取对象的所有属性
    const obj1Keys = Object.getOwnPropertyNames(obj1)
    const obj2Keys = Object.getOwnPropertyNames(obj2)
    if (obj1Keys.length !== obj2Keys.length) return false
    for (let i = 0; i < obj1Keys.length; i++) {
      if (obj2Keys.includes(obj1Keys[i])) {
        if (typeof obj1[obj1Keys[i]] === 'object') {
          return checkObj(obj1[obj1Keys[i]], obj2[obj1Keys[i]])
        } else {
          if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) return false
        }
      } else {
        return false
      }
    }
    return true
  }
```

## == 和 === 的区别

- `==`会进行类型转换，`===`不会进行类型转换。
- `==`先进行类型转换再进行值的比较。
- `===`会先判断数据类型是否相等，再判断两边的值是否相等。

## 强制、隐式转换

强制：`Number、String、toString、parseInt…`
隐式：`+、-、*、/、==…`

## 判断一个变量准确的数据类型

```js
// 1
({}).toString.call(obj).toLowerCase().slice(8, -1)
// 2
Object.prototype.toString.call(obj).toLowerCase().slice(8, -1)
```

## cookies、sessionStorage、localStorage的区别

`cookies`是网站标记用户身份的一段加密的数据，最大4k，最多20个。

`sessionStorage`浏览器本地存储的一种方式，以键值对的形式进行存储，在浏览器关闭时会自动删除

`localStorage`~存储的是持久化的数据，不主动删除，数据会一直保留
