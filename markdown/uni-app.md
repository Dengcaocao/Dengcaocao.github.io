# uni-app笔记

## 目录结构

**pages**：存放项目的所有页面

**static**：存放所有的静态资源 

**unpackage**：存放最终打包输出的文件

**App. vue**：是项目的根组件，所有的页面在App.vue下进行切换，是页面的入口文件

**main.js**：项目的入口文件，初始化vue实例，注册使用需要的插件

**manifest.json**：配置应用打包之后的配置文件

**pages.json：**设置整个项目的页面文件存放路径以及全局窗口外观

​		

```
"pages":[
	"path":"页面路径"，
	"style":{
		
	}
]
"globalStyle":{
	窗口全局外观
}
```

## 开发规范

- 页面文件遵循Vue单文件组件规范
- 组件标签靠近小程序规范
- 数据绑定级事件处理同Vue
- 为兼容多端运行，建议使用flex布局



## 全局配置及页面配置

### pages

```
pages数组中第一项表示应用启动页,每一项是一个对象
```

#### path

```
设置页面的路径
```

#### style

```
配置页面的窗体样式，同下方globalStyle配置
tips：可指定平台设置样式，详见文档
```

### **globalStyle进行全局配置**

| 属性                         | 类型     | 默认值 | 描述                                       |
| ---------------------------- | -------- | ------ | ------------------------------------------ |
| navigationBarBackgroundColor | HexColor | #F7*3  | 导航栏背景颜色（状态栏同色）               |
| navigationBarTitleText       |          |        | 导航栏标题                                 |
| navigationBarTextStyle       |          |        | 标题颜色 black/white                       |
| navigationStyle              |          |        | 去掉导航栏                                 |
| backgroundColor              |          |        | 下拉窗口的背景颜色                         |
| enablePullDownRefresh        | boolearn |        | 开启下拉刷新                               |
| backgroundTextStyle          |          |        | 下拉loading的样式 dark(暗色) / light(亮色) |
| onReachBottomDistance        | number   |        | 上拉刷新，触底事件(距离底部多少)           |

### **tabBar**

```
tips：
	  设置position为top时（仅支持微信），icon是不显示的
	  最少2项最多5项
	  tabBar第一次切换时可能出现渲染慢，可以在onload里面写一个加载组件
	  默认显示pages中的第一项
```

#### 属性说明：

| 属性            | 必填 | 默认值 | 描述                                  |
| --------------- | ---- | ------ | ------------------------------------- |
| color           | 是   |        | tabBar上的文字颜色                    |
| selectedColor   | 是   |        | …选中的颜色                           |
| backgroundColor | 是   |        | tabBar的背景颜色                      |
| borderStyle     | 否   | black  | tabBar上边框的颜色（black / white）   |
| list            | 是   |        | tab列表，配置tabBar的，最少2个最多5个 |
| position        |      | bottom | 设置tabBar的位置（bottom / top）      |

#### list属性说明：

```
tips：
	  list应为一个数组，每一项是一个对象，代表一个tab
```

| 属性             | 必填 | 描述                                    |
| ---------------- | ---- | --------------------------------------- |
| pagePath         | 是   | 页面路径，必须在pages中先定义           |
| text             | 是   | tab上按钮文字，H5、App非必填            |
| iconPath         | 否   | 图片路径，大小40kb，建议大小81px * 81px |
| selectedIconPath | 否   | 选中后的图片路径                        |

## condition启动模式配置

```
tips：
	  仅在开发期间生效，用于直达某个页面
	  eg：小程序转发，用户点开的页面
```

#### 属性说明

| 属性    | 类型   | 必填 | 描述                         |
| ------- | ------ | ---- | ---------------------------- |
| current | Number | 是   | 当前激活的模式，list的索引值 |
| list    | Array  | 是   | 启动模式列表                 |

#### list属性说明

| 属性  | 类型   | 必填 | 描述         |
| ----- | ------ | ---- | ------------ |
| name  | String | 是   | 启动模式名称 |
| path  | String | 是   | 启动页面路径 |
| query | String | 否   | 启动页面参数 |



## 基础组件

### 视图容器

```
1、view			类似于html中的div，可用来包裹各种元素。块级元素
	属性：
		hover-class="类名"					   指定按下的样式类
		hover-stop-propagation="boolear"		阻止点击态冒泡
		hover-start-time="number"				按下多久出现点击态
		hover-stay-time="number"				松开后点击态延迟多久消失
2、scroll-view	可滚动的视图区域
	属性：
		scroll-x="boolean"						 横向滚动
		scroll-y="boolean"						 纵向滚动
		……
3、swiper		轮播
	属性见文档
4、text			文本组件，行内元素
	属性：
		selectable								长按选中（布尔）
……
```

### 表单组件

```
1、button			按钮
2、checkbox-group	复选框组，内部由多个checkbox组成
	@change			 接收一个参数，detail中记录勾选的值
3、radio-group		单选按钮组，内部由多个radio组成
4、editor			富文本编辑器
5、input				输入框
	@input			 输入时触发，e.detail获取最新的值
6、label				扩大选择区域
7、picker			从底部弹起的一个选择器
	属性：
		rang		绑定要显示的数据
8、slider			滑动选择器
9、switch			开关选择器
10、textarea			多行文本框
```

### 媒体组件

#### image

```
图片
tips：	
		图片默认300*225
```

##### 属性说明

| 属性      | 类型     | 描述                                             |
| --------- | -------- | ------------------------------------------------ |
| src       | string   | 图片的地址                                       |
| mode      | string   | 图片裁剪或缩放模式                               |
| lazy-load | boolearn | 图片懒加载，只针对page、scroll-view下的image有效 |

##### mode值说明

| 值          | 描述                                                        |
| ----------- | ----------------------------------------------------------- |
| scaleToFill | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit   | 保持纵横比缩放图片，使图片的长边能完全显示出来              |
| aspectFill  | 保持纵横比缩放图片，只保证图片的短边能完全显示出来          |



## 生命周期

### 应用生命周期（app.vue）

```
1、onLaunch		初始化完成时触发（全局只触发一次）
2、onShow		应用启动或从后台进入前台时触发
2、onHide		应用从前台进入后台时触发
```

### 页面生命周期

```
1、onLoad		监听页面加载(参数为上个页面传过来的参数)
	 参数			上个页面传递过来的(object)
2、onShow		页面显示触发
3、onHide		页面隐藏触发
4、onReady		页面渲染完成
5、onUnload		页面卸载

6、onPullDownRefresh		监听用户下路动作（下拉刷新）	
	uni.startPullDownRefresh(object)	开始下拉刷新（触发刷新动画）
		参数：成功、失败回调
	uni.stopPullDownRefresh				结束下拉刷新
7、onReachBottom			监听页面触底（上拉加载）
```

### 组件生命周期

```
组件生命周期即vue生命周期
```

## 循环tips

```
在循环时使用block标签只会去循环元素，不会循环标签
key:在循环时保证元素的唯一性
```

## 条件编译

tips：写在注释里面。html、js、css中均可使用条件编译

### #ifdef	

```
仅在某平台上编译
```

### #ifndef

```
除了某平台其他均编译
```

### #endif

```
条件编译结束
```

## Css样式

### tips

```
 uni-App中不能使用"*"选择器
 page相当于body节点
```

### 导入外链样式表

```
@import url('')			导入外链样式表
```

### 全局样式

```
定义在App.vue中的样式为全局样式，作用于每个页面
```

#### 使用字体图标

```
使用同web字体引入一样
@font-face {
	font-family: '字体名称',
	src: url('')
}

tips：
	  需要将文件路径改成绝对路径（~@/）
```

## 数据的操作

```
uni-App中的数据操作全都遵循vue中的数据操作
```

## 网络请求

### uni.request(obj)

发起网络请求

#### obj重要参数说明

| 属性            | 类型         | 必填 | 描述                            |
| --------------- | ------------ | ---- | ------------------------------- |
| url             | String       | 是   | 请求的接口地址                  |
| data            | obj / string | 否   | 请求的参数                      |
| method          | String       | 否   | 请求的方式(get / post)          |
| timeout         | Number       | 否   | 请求超时时间                    |
| withCredentials | Boolearn     | 否   | 跨域请求时是否携带凭证(cookies) |
| success         | Function     | 否   | 请求成功回调                    |
| fail            | Function     | 否   | 请求失败回调                    |

## 数据缓存

### 异步

#### uni.setStorage(obj)

设置数据存储

##### obj参数说明

| 参数名  | 必填 | 描述          |
| ------- | ---- | ------------- |
| key     | 是   | 缓存指定的key |
| data    | 是   | 存储的数据    |
| success | 否   | 成功回调      |

#### uni.getStorage(obj)

从本地缓存中获取指定key的内容

##### obj参数说明

| 参数名  | 必填 | 描述                    |
| ------- | ---- | ----------------------- |
| key     | 是   | 指定要获取的key         |
| success | 是   | 成功回调，res获取的内容 |

#### uni.removeStorage(obj)

从本地缓存中移除指定的key

##### obj参数说明

| 参数名  | 必填 | 描述            |
| ------- | ---- | --------------- |
| key     | 是   | 指定要移除的key |
| success | 是   | 成功回调        |

#### uni.clearStorage(obj)

清理本地数据所有的缓存。

tips：一般不使用

### 同步

#### uni.setStorageSync(key,data)

##### 参数说明

| 参数 | 必填 | 描述                |
| ---- | ---- | ------------------- |
| key  | 是   | 设置数据要存到的key |
| data | 是   | 存储的数据          |

#### uni.getStorageSync(key)

##### 参数说明

| 参数名 | 必填 | 描述            |
| ------ | ---- | --------------- |
| key    | 是   | 要获取数据的key |

#### uni.removeStorageSync

##### 参数说明

| 参数名 | 必填 | 描述        |
| ------ | ---- | ----------- |
| key    | 是   | 要移除的key |

## 媒体

### 图片

#### uni.chooseImage(obj)

从本地相册选择图片或相机拍照

##### obj参数说明

| 参数名     | 类型            | 必填 | 描述                                              |
| ---------- | --------------- | ---- | ------------------------------------------------- |
| count      | number          | 否   | 设置最多可选择几张图片                            |
| sizeType   | Arraty / String | 否   | 设置图片类型  original(原图) / compressed(压缩图) |
| sourceType | Arraty / String | 否   | album(从相册选取) / camera(相机拍照)              |
| success    |                 | 是   | 成功回调，返回图片路径列表tempFilePaths           |

#### uni.previewImage(obj)

预览图片

##### obj参数说明

| 参数名  | 类型            | 必填 | 描述                 |
| ------- | --------------- | ---- | -------------------- |
| current | String / Number | 是   | 当前预览的图片路径   |
| urls    | Array           | 是   | 要预览的图片路径列表 |
| success |                 | 否   | 成功回调             |

## 页面跳转

### 声明式

#### navigator

类似html中a标签

#### tips

```
跳转tabbar页面，必须设置open-type="switchTab"
```

#### 属性说明

| 属性      | 类型   | 说明             |
| --------- | ------ | ---------------- |
| url       | String | 要跳转的页面路径 |
| open-type | String | 跳转的方式       |

#### open-type有效值

| 值        | 描述                                     |      |
| --------- | ---------------------------------------- | ---- |
| navigate  | 不会关闭当前页面，有返回按钮             |      |
| redirect  | 关闭当前页面跳转到下个页面，没有返回按钮 |      |
| switchTab | 跳转到tabBar页面，关闭所有非tabBar页面   |      |

### 编程式

#### uni.navigateTo(obj)

保留当前页面，跳转到应用内的某个页面

##### obj属性说明

| 属性    | 类型   | 描述                                                   |
| ------- | ------ | ------------------------------------------------------ |
| url     | String | 要跳转的页面路径，路径后面可带参                       |
| events  | object | 页面间通信接口，用于监听被打开页面发送到当前页面的数据 |
| success |        | 成功回调                                               |

#### uni.redirectTo(obj)

关闭当前页面，跳转到应用内的某个页面

##### obj属性说明

| 属性    | 类型   | 描述                             |
| ------- | ------ | -------------------------------- |
| url     | String | 要跳转的页面路径，路径后面可带参 |
| success |        | 成功回调                         |

#### uni.switchTab(obj)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

##### obj属性说明

| 属性    | 类型   | 描述             |
| ------- | ------ | ---------------- |
| url     | String | 要跳转的页面路径 |
| success |        | 成功回调         |

## 页面通信

### uni.$on(eventName,callback)

监听全局自定义事件

#### 参数说明

| 参数      | 类型     | 描述                   |
| --------- | -------- | ---------------------- |
| eventName | String   | 事件名称               |
| callback  | function | 事件回调，用于接收参数 |

### uni.$emit(eventName,obj)

触发全局自定义事件

#### 参数说明

| 参数      | 类型   | 描述             |
| --------- | ------ | ---------------- |
| eventName | String | 要触发的事件名称 |
| obj       | object | 传入的参数       |

### uni.$once

监听全局自定义事件，只触发一次，在第一次触发后一次该监听器

使用方法同$on

### uni.$off(enventName,callback)

移除监听事件

## 设备

### 系统信息

#### uni.getSystemInfo(obj)

获取系统信息(窗口信息，手机信息……)

##### obj参数说明

| 参数     | 类型     | 描述     |
| -------- | -------- | -------- |
| success  | function | 成功回调 |
| fail     |          |          |
| complete |          |          |

##### success返回参数说明

| 参数         |      | 描述           |
| ------------ | ---- | -------------- |
| screenWidth  |      | 屏幕宽度       |
| screenHeight |      | 屏幕高度       |
| windowWidth  |      | 可使用窗口宽度 |
| windowHeight |      | 可使用窗口高度 |

##### tips

```
屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
windowHeight不包含NavigationBar和TabBar的高度
```

## 界面

### 交互反馈

#### uni.showToast(obj)

消息提示框

##### obj参数说明

| 属性  | 必填 | 说明                           |
| ----- | ---- | ------------------------------ |
| title | 是   | 提示的内容                     |
| icon  | 否   | 图标                           |
| mask  | 否   | 是否显示透明蒙层，防止触摸穿透 |

#### uni.showActionSheet(obj)

在底部显示操作菜单

##### obj参数说明

| 属性      | 必填 | 说明                                               |
| --------- | ---- | -------------------------------------------------- |
| itemList  | 是   | 菜单列表                                           |
| itemColoe | 否   | 菜单项的文字颜色                                   |
| popover   | 否   | 大屏设备弹出原生选择按钮框的指示区域，默认居中显示 |
| success   | 否   | 选择菜单后的成功回调                               |

**success返回参数说明**

| 属性     | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tapIndex | Number | 用户点击的按钮，从上到下的顺序，从0开始 |

#### uni.showModel(obj)

显示模态弹窗，类似于标准 html 的消息框：alert、confirm。

##### obj参数说明

| 属性        | 必填 | 说明                                               |
| ----------- | ---- | -------------------------------------------------- |
| title       | 否   | 提示的标题                                         |
| itemColoe   | 否   | 提示的内容                                         |
| showCancel  | 否   | 大屏设备弹出原生选择按钮框的指示区域，默认居中显示 |
| cancelText  | 否   | 取消按钮的文本内容                                 |
| confirmText | 否   | 确认按钮的文本内容                                 |
| success     | 否   | 成功回调                                           |

##### **success返回参数说明**

| 参数    | 类型    | 说明                                                         |
| ------- | ------- | ------------------------------------------------------------ |
| confirm | Boolean | 为 true 时，表示用户点击了确定按钮                           |
| cancel  | Boolean | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） |
|         |         |                                                              |

