### Vue 课程笔记

#### vue基本使用

```
1、使用vue必须引入vuejs文件。<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
2、创建vue实例。let vm = new Vue({配置对象})
	配置对象：
		el: 挂载的对象（#id、.class）或使用 $mount(元素)
		data:{} - 存放变量数据。vue实例的时候会对data中的属性绑定监听器的
		methods:{} - 方法、函数。每次调用都会执行一次
		computed:{} - 计算属性，所有要return。会把函数返回的内容保存下来，只有发生改变才会重新计算，没发生改变时，访问的是之	前计算的结果。计算属性默认只有get()，所有只能读取不能设置。但是自己可以提供set()，接收一个参数newVal。
		watch:{
			监听的属性(newVal,oldVal){}。
			  
			监听引入类型：
				监听的属性:{
					handler(newVal,oldVal){},//回调
					deep:true //深度监听
				}
		} - 监听器，监听数据变动。
		
vue插值：使用双大括号({{}})的形式插值,里面可以是变量、js表达式、函数执行

考点：
	vue是单向的，但可以使用v-model实现双向绑定
	computed与watch的区别？
		computed可以监听自己定义(不是data中的变量)或动态添加的一些变量。
		watch是监测vue实例对象的变化，监听的变量必须是data中的变量。
	computed与methods的区别？
		computed是有缓存的，当数据发生改变时才会重新调用计算属性，反之使用缓存中的数据。-- 优选
		methods是没调用一次就好执行一次。
```



#### vue基本指令

```
v-html="": 以html文本格式显示

v-model="": 数据双向绑定，视图发生改变会更新视图模型，视图模型发生改变也会跟新视图。在使用复选框、单选按钮时必须指定value属性。
	v-model的修饰符：
		.lazy - 每次input事件触发后会将数据同步，使用了layz修饰符转变为change事件同步。
		.number - 将用户输入的值转为数值类型。
		.trim - 去除首位空格。
		
v-bind="":属性绑定。语法糖为":"
	class的绑定：
		1、直接绑定
		2、对象的方式绑定，可写多个 - {类名:是否添加}
		3、数组方式绑定 - [{对象方式}]或[类名...]
		4、三目运算符方式
	style样式绑定：
		对象的形式 - :style="{}"。也可以定义在data中
v-once:只渲染一次，后面更新则不会改变

显示和隐藏：
	v-if。可配合v-else、v-else-if
	v-show
考点：
	v-if和v-show的区别？
		v-if是一个重绘重建的过程，根据表达的值在DOM中生成或移除一个元素。切换消耗比较高。
		v-show则是使用display:none的样式进行显示和隐藏的。初始渲染消耗比较高。
		总结：如果频繁的切换使用v-show比较好
		
v-for="(每一项，index) in 数组或对象": 遍历数组、对象。使用v-for时应该绑定一个唯一标识(:key)，可提升性能。如果遍历的是对象参数测试(value,key,index)。
注意：不要在同一元素上使用v-if和v-for。v-for的优先级比v-if的优先级更高
	没有绑定key存在的问题：
		在一组复选框中选中一个，然后再添加一个复选框，选中的复选框会发生改变。
	在实例创建之后(也就是说没有在data中定义)，再添加新的属性到实例上是监听不了的，改变之后也不会触发视图更新的。可以通过对象上的$set(obj,键，值)方法将动态添加的属性添加到data对象中。
		
	考点：
		绑定key的作用？
		
v-on:事件="" 或@事件="" -- 事件绑定
	参数$event -- 事件对象
	修饰符：
		1、stop -- 阻止事件冒泡
		2、prevent -- 阻止默认事件
		3、once -- 只点击一次
		4、self
		5、passive
		6、capture
		7、.native将原生事件绑定到组件上
		
	常见按键修饰符(keyup)：
		1、.enter
		2、.enter
        3、.tab
        4、.delete (捕获“删除”和“退格”键)
        5、.esc
        6、.space
        7、.up
        8、.down
        9、.left
        10、.right

```



#### vue全局组件(任何地方都能使用)

```
方法一
    注意：必须在实例前
    1、创建组件
        let zj = Vue.extend({
            template:''，  //template中只能有一个只节点元素，存放html结构
            data(){ //这样是保证组件的独立
                return{

                }
            }
        })
    2、注册组件,component是全局注册
        Vue.component('组件命名'，zj)
    3、使用组件
        <组件命名></组件命名>

方法二
	Vue.component("组件名称",{
		template:''
		data(){
			retrun{
			
			}
		}
		...
	})
```

#### vue脚手架

```
1、全局安装vue-cli
	1、npm install -g @vue/cli
	2、yarn global add @vue/cli

2、创建项目
	1、vue create 项目名称
	1、vue ui
		配置选项：
			Babel
			Router
			Vuex
			CSS pre-processors
			
项目目录结构：
	publilc - 存放静态资源
	assets - 静态目录，最好不好放在这里面，会增加代码体积。
	components - 用于存放公共的组件
	router - 路由表
	store - 数据共享
	views - 模板页面，一个页面就是一个组件
	app.vue - 根组件
	man.js - 入口文件
	
	路由和数据共享需要在vue实例中注册
```

#### .vue文件（即模板、组件、大驼峰）

```
<template></template> -- Html模板，只有一个根节点
<script>
	expotr default {
		name:'name'  //表示这个组件的名称，便于更好的查找
		//在.vue文件中data是一个函数，且必须返回一个对象
	}
</script>
<style></style> -- css样式
```



#### vue脚手架中注册全局组件

```
注意:
	是在路由表中注册
Vue.component('组件名称'，模板组件)
```

#### vue局部组件

```
在哪里使用就在哪里注册。
首先需要引入组件。 ----  @表示src目录
通过实例对象下的components对象进行注册。
components:{
	'自定义组件名称':组件
}
```

#### 父子组件传值

```
什么是父子组件？
	组件中包含另一个组件，即父子关系。

父 -> 子 传值：
都写在子组件上：
1、常量传值 -- 不会改变
	直接以属性的方式写
2、变量传值 -- vue可以监听到
	使用v-bind绑定
	
子组件接收：
	在子组件内通过props选项进行接收，同props接收的数据会自动挂载到当前组件实例上。
		1、数组形式接收-props:['变量或常量名称']
		2、对象方式接收-props:{ //这种方式用于对数据类型的校验
			变量或常量名称：类型
		}
```

#### 子组件向父组件传值

```
通过$emit()方法发射一个事件。这种方式也称为自定义事件
	参数：
		1、事件名称
		2、传递的数据
		
父组件接收：
	在子组件本身上通过v-on绑定子组件发射过来的事件并进行事件处理(函数，接收一个参数)，来接收传递过来的数据。
	
	
注意：
	vue是单向数据流。父组件数据变化了会影响子组件，子组件的数据变化正常情况下是不会影响父组件的，所以通过emit方式触发视图更新。
```

#### 兄弟组件之间传值

```
通过事件车(bus)的形式进行传值。新创建一个vue实例，并导出，在两个需要传值的组件中引入通过以下方法传值。只有实例化才能使用vue提供的方法。
$emit进行事件发射
	参数一：事件
	参数二：传递的数据
$on进行事件监听
	参数一：发射过来的事件
	参数二：callback，接收一个参数，拿到传过来的值
```



#### 动态渲染组件

```
补充：
	sytle标签上的scoped属性表示css样式时独立的，只作用于该组件。

动态渲染组件必须使用以下标签
	<component :is=""></component>
	is绑定的是要渲染的组件
```

#### vue插槽solt

```
在组件标签中写的内容是不会显示的，可以通过<solt></solt>标签将内容在组件中进行分发。
	匿名插槽：
		<solt></solt>
	有名插槽
		<solt name=""></solt>
		定义solt名称：solt="名称"
```

#### 生命周期

```
生命周期总体分为3阶段：
	1、挂载阶段
	2、更新阶段
	3、销毁阶段

挂载阶段：
    beforeCreate:实例创建之前。这个阶段是访问不到方法和数据的。可用于loading加载...
    created: 实例创建完成。可以访问到实例上的方法和数据。此时还没挂载到DOM中，所有访问不到$el,$ref属性。常用于ajax请求。
        注意：此时还没挂载在DOM中，如果ajax请求过多会出现空白现象
    beforeMount: 实例挂载之前。找到对应渲染模板并编译成render函数。模板与数据的结合，可对数据进行修改。
    mounted：实例挂载到DOM上。此时可获取真实的DOM节点
   
更新阶段：
	beforeUpdate:即将更新数据时触发。可用于更新之前访问现有的DOM
	updated: 数据更新完成时触发。
	
销毁阶段：
	beforeDestroy:销毁之前。此阶段可用于清除定时器、事件监听。
	destroyed: 销毁完成。vue指示的所有事件监听器都会被移除。
```

#### this.nextTick()

```
类似于window.onload函数，页面加载完成后触发。

this.nextTick(callback) -- 在下次DOM更新完成后执行回调。 
```

#### this.$delete 

```
删除数据
```

#### vue的混入 -- mixins(实例选项)

```
一个混入对象可以包含任意  组件选项  ，用来分发组件中可复用的功能。
实例选项：
	mixins:[混入对象名称...] -- 可混入多个
```

#### 自定义指令 -- directives(实例对象)

```
directives:{
	指令名称：{ //也可以是个函数
		//提供以下钩子函数，接收一个参数，用于到所绑定的元素的内容
		bind:第一次绑定到元素时调用，只调用一次
		inserted:被绑定元素插入父节点时调用
		update:组件更新时调用
		componentUpdated:指令所在组件虚拟节点全部更新后调用
		unbind:指令与元素解绑时调用，只调用一次
	}
}
```

#### 过滤器属性 -- filters(实例选项)

```
使用方法：
	数据需要过滤的地方使用 " | 过滤器名称" 
	
过滤器是一个函数，接收一个参数。使用时如果没有传入参数，会将需要过滤的数据作为第一个参数传入。
作为属性值必须return出去


在main.js中全局注册过滤器：
Vue.filters('过滤器名称'，function(v){

})
```

#### 渲染函数

```
render函数就是用来渲染一个DOM的

render:function(createElement){
	//createElement是专门用来渲染出DOM的函数，告诉vue页面需要渲染出什么样的节点
	retrun createElement('标签'，内容)
}
```

#### 静态资源引入方式

```
1、存放在public文件中，绝对地址。项目访问的入口。
	不会被webpack打包编译
2、存放在src下assets文件中。
	经过webpack编译，会增加项目的体积
	
如果动态的绑定本地静态资源需要使用require('path')进行读取。不推荐使用command规范，推荐使用es6导入导出。

3、也可以在node_moudles中存放。
	improt 'name' from '' - 不写入相对路径会直接去mode_moudles中去找
```

##### css的引入

```
全局css样式可放在assets中，使用时在路由中或man.js中通过import 'path'方法引入。

在组件中通过@import url('path')引入css样式
```

##### 阿里图标的引入

```
通过在线链接的方式引入，以减少项目的体积。
在html文件中引入css样式表即可
```

#### UI组件库

```
1、移动端(H5端) -vant- 组件库，基于vue、小程序。详细见文档。
	vant局部注册：
		1、引入
		2、使用components进行注册。跟组件注册一样。也可以通过ui组件名称进行注册。
		3、使用
		
2、PC端(elementUI),详细见文档。

3、iview UI组件

4、ant-vue 阿里云组件库
```

#### 路由器vue-router

```
1、引入路由文件 import vueRouter from 'vue-router'
2、使用vue中间件注册路由 vue.use(vueRouter)
3、创建路由实例 const router = new vueRouter({
	//具体路由配置详细
	routers:[
		{
			path:'' //路由地址，*表示匹配任意路由地址
			component: //路由要渲染的组件
		}
	]
})
4、挂载到vue实例中

路由视图容器：
	<router-view></router-view>  //路由组件渲染的地方，写在哪里渲染到哪里。有视图容器才能渲染路由对应的页面
	
路由按需加载：
	匹配到对应路由时才去加载所需要的页面。component:() => import('组件')
	
路由跳转：
	页面导航：<router-link to="routerPath"></router-link> -- to必须指定
		1、to可以指定path路由路径
		2、to可以指定name来匹配路
		3、动态指定to（:to={}）
	编程式导航:在js中通过this.$router.push({
		name:'' //匹配路由name
		或
		path:''  //匹配路由路径
		query:{}  //查询参数，路由参数是不行的，不能传值。
	})
	
	this.$router.go()  //路由前进或后退
	
嵌套路由：
	子路由对应的组件显示在当前服路由组件中
	children:[ //子路由
		//路由对象
	]
	
路由重定向：
	redirect:{}
	
路由样式：
	在选中路由之后会添加一个类型 - router-link-active。可以对其设置样式。
	
路由参数：
	查询参数 - query(在组件中通过路由对象(this.$route)进行获取)
        静态写法：/path?查询字符串
        动态写法：:to={
            path:'',
            query:{
                //查询参数
            }
        }
    路由参数 - params。用法同上
    	动态写法不会在地址栏中显示。
```

#### 路由守卫

```
1、路由前置守卫(全局) - 进入页面之前
	router.beforeEach((to,from,next){
		to//去到哪个页面
		from//从哪个路由过来的
		next()//是否放行
			参数：可接收路由，然后进入到路由
	})
	
```

#### vuex状态管理(stroe)

```
1、state:{
	数据存放的地方
}
	使用state中的数据：
		1、$stroe.state.字段名称 -- 直接使用
		2、this.$stroe.state.字段名称 -- js
	简化拿去数据的操作：
		从vuex中结构MapState方法，在计算属性中操作
		import {mapState} from 'vuex'
            1、mapState(options)
                options-数组：直接将states中的字段写入进来（string），然后直接使用
                options-对象：将state中的字段写成函数，接收一个参数（state本身）
            2、对象展开形式-...mapState(options-对象),这种形式可定义别的计算属性
            
2、getters:{
	直接获取state中数据的
	自定义方法，接收参数(state本身,getter本身)
}
	getter的使用：
    	1、this.$stroe.getters.字段名称
    简化拿取getters数据的操作：
    	从vuex中结构mapGetters方法，在计算属性中操作
		import {mapGetters} from 'vuex'
			用法同state
			
3、mutations:{
	主要是一些用户交互、操作state数据，触发事件等。同步操作，直接改变状态
	自定义一些操作方法，接收参数：
		1、state本身
		2、自定义的数据
}
	mutations的使用：
		commit提交事件
		在组件中通过this.$stroe.commit('mutation中定义的方法'，传递过去的数据)
		
	简化mutations的操作：
    	从vuex中结构mapMutations方法，在计算属性中操作
		import {mapGetters} from 'vuex'
			用法同state
			
4、actions:{
	对mutations进行操作。异步操作
	自定义事件，接收一个参数(mutations本身)
}
	actions的使用:
		通过参数下的commit对事件进行提交，接收一个mutations事件
		
	简化actions的操作：
	从vuex中结构mapActions方法，在计算属性中操作
		import {mapActions} from 'vuex'
		用法同state
```

#### 全局配置(vue.config.js)

```
如果根目录下存在这个文件会自动加载。
```

##### publicPath

```
项目的部署路径，默认在根目录下 "/"。
如果部署在子路径(children)下应为 "/children"
```

##### outputDir

```
打包输出的文件目录。默认dist
```

##### assetsDir

```
静态文件 (js、css、img、fonts) 放置目录。相对于outputDir
```

##### indexPath

```
指定html文件生成的目录。相对于outputDir
```

##### filenameHashing

```
生成的静态资源名称是否以hsah命名。
优点：
	有利于清除缓存
```

##### lintOnSave

```
是否在每次保存时，代码都经过eslint检测。设置false可避免黄色警告。
```

##### producationSourceMap

```
是否生成map文件。
```

##### devServer

###### host

```
主机名称。
```

###### https

```
是否启用https协议。
```

###### index

```
设置html文件名称。
```

###### open

```
服务器启动时是否打开浏览器。
```

###### port

```
指定端口号，如果被占用自动会提升1。
```

###### proxy

```
解决请求跨域问题。如果前端应用和后端api没运行到同一主机上可通过此项来配置。
如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象
```

###### options属性

| 属性         | 类型    | 说明                                                  |
| ------------ | ------- | ----------------------------------------------------- |
| target       |         | 目标服务器地址。最后会拼接成  目标服务器地址 + path。 |
| pathRewrite  | obj     | 重写路径。key：匹配path，val：""。                    |
| changeOrigin | boolean | 开启代理服务。代理时会保留主机头的来源。              |

#### 模式和环境变量

| 模式            | 说明                      |      |
| --------------- | ------------------------- | ---- |
| **development** | 开发环境。该模式用于serve |      |
| **production**  | 生成环境。该模式用于build |      |
| **test**        | 测试环境。                |      |

##### 环境变量

```
可以在项目的根目录下创建.env.[mode]文件来指定环境变量。
在特定的模式下执行对应的环境变量文件。
        eg：
            在开发模式下会加载.env.development文件。环境文件只包含环境变量（键值对形式）。
      tips：
            只有 特殊变量(NODE_ENV，BASE_URL) 和以 VUE_APP_ 开头的变量才会嵌入代码中。
  		
使用环境变量：
			process.env.环境变量。
```

