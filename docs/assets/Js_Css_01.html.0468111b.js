const l=JSON.parse('{"key":"v-58d72241","path":"/interview/Js+Css_01.html","title":"","lang":"en-US","frontmatter":{"sidebar":false,"description":"Css选择器及优先级 !important > 行内样式 > ID选择器 > 类/伪类/属性选择器 > 标签/伪元素选择器 > 关系选择器 BFC BFC 全称为块级格式化上下文 (Block Formatting Context) ，它决定了元素如何进行定位以及与其他元素的关系和相互作用。BFC 提供了一个环境，HTML元素在这个环境中按照规则进行布...","head":[["meta",{"property":"og:url","content":"https://dengcaocao.github.io/docs/interview/Js+Css_01.html"}],["meta",{"property":"og:site_name","content":"Deng·草草的笔记"}],["meta",{"property":"og:description","content":"Css选择器及优先级 !important > 行内样式 > ID选择器 > 类/伪类/属性选择器 > 标签/伪元素选择器 > 关系选择器 BFC BFC 全称为块级格式化上下文 (Block Formatting Context) ，它决定了元素如何进行定位以及与其他元素的关系和相互作用。BFC 提供了一个环境，HTML元素在这个环境中按照规则进行布..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:16:25.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:16:25.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Css选择器及优先级","slug":"css选择器及优先级","link":"#css选择器及优先级","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[{"level":3,"title":"触发BFC的条件","slug":"触发bfc的条件","link":"#触发bfc的条件","children":[]},{"level":3,"title":"BFC可解决的问题","slug":"bfc可解决的问题","link":"#bfc可解决的问题","children":[]}]},{"level":2,"title":"盒模型 box-sizing","slug":"盒模型-box-sizing","link":"#盒模型-box-sizing","children":[]},{"level":2,"title":"css实现三角形","slug":"css实现三角形","link":"#css实现三角形","children":[]},{"level":2,"title":"定位(position)","slug":"定位-position","link":"#定位-position","children":[]},{"level":2,"title":"清除浮动","slug":"清除浮动","link":"#清除浮动","children":[]},{"level":2,"title":"实现左侧固宽右侧自适应","slug":"实现左侧固宽右侧自适应","link":"#实现左侧固宽右侧自适应","children":[]},{"level":2,"title":"水平垂直居中","slug":"水平垂直居中","link":"#水平垂直居中","children":[]},{"level":2,"title":"display: none 和 visibility: hidden 的区别","slug":"display-none-和-visibility-hidden-的区别","link":"#display-none-和-visibility-hidden-的区别","children":[]},{"level":2,"title":"Flex布局","slug":"flex布局","link":"#flex布局","children":[]},{"level":2,"title":"Grid 布局","slug":"grid-布局","link":"#grid-布局","children":[]},{"level":2,"title":"viewport(视口窗口)","slug":"viewport-视口窗口","link":"#viewport-视口窗口","children":[]},{"level":2,"title":"px、em、rem的区别","slug":"px、em、rem的区别","link":"#px、em、rem的区别","children":[]},{"level":2,"title":"什么是跨域，什么情况会导致跨域，怎么解决","slug":"什么是跨域-什么情况会导致跨域-怎么解决","link":"#什么是跨域-什么情况会导致跨域-怎么解决","children":[]},{"level":2,"title":"首屏加载的优化方案","slug":"首屏加载的优化方案","link":"#首屏加载的优化方案","children":[]},{"level":2,"title":"JS数据类型","slug":"js数据类型","link":"#js数据类型","children":[]},{"level":2,"title":"null和undefined的区别","slug":"null和undefined的区别","link":"#null和undefined的区别","children":[]},{"level":2,"title":"深浅拷贝","slug":"深浅拷贝","link":"#深浅拷贝","children":[]},{"level":2,"title":"什么是闭包，闭包的作用及注意点","slug":"什么是闭包-闭包的作用及注意点","link":"#什么是闭包-闭包的作用及注意点","children":[]},{"level":2,"title":"call和apply的区别","slug":"call和apply的区别","link":"#call和apply的区别","children":[]},{"level":2,"title":"箭头函数和普通函数的区别","slug":"箭头函数和普通函数的区别","link":"#箭头函数和普通函数的区别","children":[]},{"level":2,"title":"三元表达式和if…else的区别","slug":"三元表达式和if-else的区别","link":"#三元表达式和if-else的区别","children":[]},{"level":2,"title":"面向对象的理解","slug":"面向对象的理解","link":"#面向对象的理解","children":[]},{"level":2,"title":"构造函数和实例对象的区别","slug":"构造函数和实例对象的区别","link":"#构造函数和实例对象的区别","children":[]},{"level":2,"title":"作用域和作用域链","slug":"作用域和作用域链","link":"#作用域和作用域链","children":[]},{"level":2,"title":"事件流","slug":"事件流","link":"#事件流","children":[]},{"level":2,"title":"get和post的区别","slug":"get和post的区别","link":"#get和post的区别","children":[]},{"level":2,"title":"内存泄露","slug":"内存泄露","link":"#内存泄露","children":[]},{"level":2,"title":"变量提升","slug":"变量提升","link":"#变量提升","children":[]},{"level":2,"title":"原型、原型链","slug":"原型、原型链","link":"#原型、原型链","children":[]},{"level":2,"title":"引用类型和值类型的区别","slug":"引用类型和值类型的区别","link":"#引用类型和值类型的区别","children":[]},{"level":2,"title":"数组去重","slug":"数组去重","link":"#数组去重","children":[]},{"level":2,"title":"for...in和for...of的区别","slug":"for-in和for-of的区别","link":"#for-in和for-of的区别","children":[]},{"level":2,"title":"typeof 和 instanceof 的区别","slug":"typeof-和-instanceof-的区别","link":"#typeof-和-instanceof-的区别","children":[]},{"level":2,"title":"判断两个对象是否相等","slug":"判断两个对象是否相等","link":"#判断两个对象是否相等","children":[]},{"level":2,"title":"== 和 === 的区别","slug":"和-的区别","link":"#和-的区别","children":[]},{"level":2,"title":"强制、隐式转换","slug":"强制、隐式转换","link":"#强制、隐式转换","children":[]},{"level":2,"title":"判断一个变量准确的数据类型","slug":"判断一个变量准确的数据类型","link":"#判断一个变量准确的数据类型","children":[]},{"level":2,"title":"cookies、sessionStorage、localStorage的区别","slug":"cookies、sessionstorage、localstorage的区别","link":"#cookies、sessionstorage、localstorage的区别","children":[]}],"git":{"createdTime":1676994959000,"updatedTime":1678544185000,"contributors":[{"name":"DW","email":"1536698087@qq.com","commits":2},{"name":"dw","email":"1536698087@qq.com","commits":1}]},"readingTime":{"minutes":11.35,"words":3404},"autoDesc":true,"localizedDate":"February 21, 2023","filePathRelative":"interview/Js+Css_01.md"}');export{l as data};
