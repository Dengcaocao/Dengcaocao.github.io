# Node

### 简介：

node服务器与传统服务器的有什么区别

​	node是基于Chrome **V8**（**负责js的执行和代码的解释**）引擎的js（单线程）**运行环境。**

### 黑窗口命令

1. **cls** -- 清除内容
2. **cd** -- 进入目录
3. **dir** -- 当前目录下的文件目录

### node的基本用法

##### 命令：

1. **tab键** -- 自动补全文件名称

##### 运行：

​	**运行** -- node  js文件地址 

### node核心概念（important）

node解决阻塞的问题

​	**事件、异步API、非阻塞I/O**

#### 非阻塞I/O或异步IO（node）

1. I -- input（**输入**）
2. O -- output（**输出**）
3. **I/O** -- 及对**数据库**的**增删改查**

概念：当线程遇到 I/O 操作时，**只是**将I/O**请求**发送给**操作系统**，**继续执行后面的语句**，当I/O操作完成时以**事件循环**的方式通知I/O的操作的线程。

#### 阻塞I/O或同步式I/O（多线程）

​	在磁盘读写或网络通信时，会消耗较长时间，操作系统会剥夺cup控制权，使其暂停执行。当I/O执行完成时才解除阻塞状态。（第一个任务执行完成后才能执行第二个任务）

![image-20200522151251881](C:\Users\邓威\AppData\Roaming\Typora\typora-user-images\image-20200522151251881.png)

#### node事件循环

​	Node.js 程序由事件循环开始，到事件循环结束，所有的逻辑都是**事件的回调函数**。

事件的回调函数在**执行的过程中**，可能会**发出 I/O 请求**或直接发射（emit）事件，执行完毕后再**返回事件循环**，事件循环会**检查**事件**队列中**有没有**未处理的事件**，直到程序结束。

### npm指令

1. **install** -- 安装

   npm  install  模块名称 -- 不指定版本，默认最新；不知道环境默认生成环境

   npm  install  模块名称@版本号 -- 指定版本

2. **uninstall**或**remove** -- 卸载

   npm  uninstall  模块名称 -- 不指定版本，默认最新

   npm  uninstall  模块名称@版本号 -- 指定版本

3. **update** -- 更新

   npm  update[-g] -- 更新模块

   npm  update[包名] -- 更新指定模块

4. **-g**或**--global** -- 全局安装；

   不加默认安装在本地模块

5. **-S**或**--save** -- 安装在生产环境依赖（**dependencies**）中

6. **-D**或**--save-dev** -- 安装在开发环境依赖（**devDependencies**）中

7. npm init 或**npm init -y**  --  **初始化包文件，生成的package.json文件保存项目所使用的第三方插件或包**。把项目发给别人时应该**删除node_modules**文件夹，后面通过**init**又可以**重新下载依赖**

   1. 重新下载依赖分为2种情况：
      1. 如果有package-lock.json锁文件，会通过锁文件中的地址**直接下载**。
      2. 没有锁文件，则会去**nmp网站**上**搜索**是否有这个包，有则下载。

8. npm login -- 登录

9. npm publish -- 发布包

10. npm unpublish 包名称 --force  ---- 删除包

### yarn

#### yarn的安装

​	**npm i yarn -g** -- 经常使用所有**全局安装**；比npm更**快速**、安全

#### 改变yarn的下载地址

​	yarn config set registry https://registry.npm.taobao.org (淘宝镜像)

#### yarn的指令

1. **add** -- 安装下载
2. yarn init -y  ---- 初始化包文件
3. yarn  -- 下载项目所依赖的第三方依赖
4. **yarn global add**  xx -- 全局安装
   1. 全局安装需要**配置环境变量**：将**yarn的bin目录**添加到环境变量中
5. **yarn global dir** -- 全局安装目录

### 模块的导入与导出

1. **require** -- 导入
2. **module.exports** -- 导出

### node的模块系统

#### node的外层函数及形参

​	node中任何一个**模块**都被一个**外层函数**所包裹

​	一个**js文件**就是一个**模块**

```
//外层函数
function (exports, require, module, __filename, __dirname) { 
	exports: 导出模块（es6是export），空对象
	require: 引入模块
	module: 用于暴露模块
	__filename: 文件路径，当前文件的绝对路径
	__dirname: 文件夹路径，当前文件所在的文件夹绝对路径
}
```

#### 浏览器与node的js组成部分

1. **浏览器**端js组成部分
   1. BOM -- 浏览器对象模型
   2. DOM -- 文档对象模型
   3. ECMAScript -- 核心语法
2. **node**端的js组成部分
   1. **只有ECMAScript核心语法**，包含了所有ES规范；**没有window**
   2. node中**全局** -- **global**

#### 下载及引入第三方模块

​	**引入：**

​		require('模块名称')，用一个变量接收

​		**注意**：引入模块时首先会在**当前目录下的node_dodules查找**，如果查找不到则会**一层一层往上查找**，直到根目录

#### require的参数路径规则

​	如果模块是在**node_modules下**，那么**直接写模块的名称**

​	如果参数不以“/”、"./"开头，表示加载的是位于各级node_modules目录的已安装模块

​	require参数**指定**一个**目录**后，会**自动查看**该目录的**package.json文件**，然后加载**main字段指定的入口文件**

#### exports导出与module.exports导出的区别

1. exports只是module.exports的一个**引用**，**真正返回**的是**module.exports**
2. 在**exports上添加的属性**同样**会添加到module.exports上**
3. 只要给m**odule.exports赋值了**，**exports**上的各种**赋值**都**会失效**

#### 模块的缓存

​	第一次加载模块时，node会缓存模块，后面再加载该模块时，从缓存中取出该模块的module.exports属性

1. require.cache
2. delete require.cache[模块名称] -- 删除缓存
3. require.main === module -- 判断是**直接执行（node xx）**还是**调用执行**

#### node的核心模块1(improtant)

不需下载，直接引入

##### 1、path模块

**notice**：会正确使用当前系统的路径分割符

1. **path.join()** -- **连接路径，字符串拼接形式**
   - 参数
     - 绝对路径
     - 目录名称
2. **path.resolve()** -- 将**相对路径转化为绝对路径**
   - 可接收**多个参数**，依次表示要**进入的路径**
3. **path.relative()** -- 返回**第二个路径**相对于**第一个路径**的**相对路径**
   - 参数：2个参数，都是**绝对路径**
4. **path.parse()** -- 返回**路径各部分的信息**（对象）
   - 参数：路径
   - 返回参数
     - root：路径的**根目录**
     - dir：绝对路径（目录）
     - base：文件信息（**文件全称**）
     - ext：文件**扩展名**
     - name：**文件名**称

##### 2、url模块  -- 生成和解析url

1. **解析url结构**（2种）
   - **url.parse()** -- 旧API，解析查询字符串，**返回**的是一个**URL对象**，可用于**拿取请求参数**
     
     '?s=detail&id=6'  //**查询字符串格式**
     
     - 参数
       - 1、要解析的路径
       - 2、布尔类型，搜索的参数是否以**对象的形式展示**
     
   - **url.URL()** -- 新API，实现了 WHATWG标准；是一个**构造函数**，**返回**的是一个**URL对象**
     - 参数
       - 1、要解析的路径（**绝对**和**相对**）
       - 2、base参数（**url地址**） ---- 如果解析的是**绝对路径**就**忽略该参数**

##### 3、querystring模块 -- 解析查询字符串

1. **querystring.parse()** -- 将**查询字符串解析**为**js对象**
   - 参数
     - 1、要解析的查询字符串
     - 2、键值对之间的分割符，默认&；可选
     - 3、键名与键值之间的分割符，默认=；可选
   - **问题**：会将‘/’、‘？’**跟第一个参数看作一个整体**
2. **querystring.stringify()** -- 将一个**对象解析成**一个**查询字符串**
   - 参数
     - 1、要解析的查询字符串
     - 2、键值对之间的分割符，默认&；可选
     - 3、键名与键值之间的分割符，默认=；可选

##### 4、os模块 -- 提供与操作系统相关的方法

1. **os.EOL**（常量） -- 返回当前**系统**的换**行符**（widndow：\r\n;其他：\n）；**换行符是不可见的，只能看见效果**
2. **os.arch()** -- 返回当前计算机的架构（是**多少位的操作系统**）
3. **os.networkInterfaces()** -- 返回一个对象，包含被赋予网络地址的网络接口
4. **os.platform** -- 返回一个字符串（node编译时的操作系统平台）
5. **os.release()** -- 返回操作系统的版本号
6. **os.cups（**）-- 返回一个逻辑cpu内核信息

#### node核心模块2（important）

##### 	1、buffer模块（缓冲器）

​		**buffer描述：**

​			**buffer对象**是node**处理二进制数据**的一个**接口**，用于存储数据，是**node原生**提供的**全局对象**；**直接使用**

​			buffer对象时一个**构造函数**，生成的**实例**代表v8引擎分配的**一段内存**，是一个**类似数组**的对象，成员都为0到255的整数值，即一个**8位的字节**。返回的是16进制的对象

​			8bit（位） = 1byte（字节）

​			1024 byte  = 1 kb

​			1024 kb     = 1 Mb

​			1024 Mb   = 1 GB

​			1024 GB   = 1 TB

​			1024 TB   = 1 PB

​		**buffer参数（5种类型）：**

​			1、**数值**（整数）--  指定**分配多少字节内存**

​			2、数组 --  数组成员必须是整数

​			3、字符串（默认utf8编码）

​			4、字符串 + 编码类型

​			5、**buffer实例** -- 等同于**拷贝前者**

​		**buffer值的存取操作：**

​			**buffer.length** -- 表示**数据大小 字节**

​			**1、Buffer.from()**  --  把**数据写入**到**buffer对象**中，参数同上

​			**2、Buffer.alloc()**  --  创建一块**固定大小**的**空间**，创建之后就**不能改变**了；效率一般

​				参数：**数值**（整数）

​			**3、Buffer.allocUnsafe()** -- 创建一块**固定大小**的**空间**，创建之后就**不能改变**了

​				参数：**数值**（整数）

​		**new Buffer、alloc和allocUnsafe的区别！**

​			**alloc**：创建的空间是**没有人引用的空间**。在**内存中检索**没有人引用的内存空间，还**没有及时回收掉**的内存		空间。不会频繁的创建，删除文件。**效率一般**

​			**allocUnsafe**：**在内存中找**一块**能用的空间**，不要开辟，使用这块空间时**可能已经存在数据**了，没有及时被回收掉。**不安全，但效率很好**

​			**new Buffer():** 申请一块空间，这块空间**可能有残留数据**，**使用**时需要**打扫干净**，**效率很低**。即将废弃

​			**内存回收机制：**

​				**周期性的在内存中检查内存是否在使用，没有则清除**

​			**1、buffer.copy()** -- 拷贝

​				参数：

​					1、要拷贝到的**buffer实例**

​					2、拷贝到buffer实例的**位置**

​					3、**被拷贝**的**开始位置**

​					4、**被拷贝**的**结束位置**

​			**2、buffer.slice(开始位置，结束位置)** -- 剪切

​			**3、Buffer.isEncoding** -- buffer实例**是否指定编码**（布尔）

​			**4、Buffer.isBuffer()** -- 传入一个对象，**是否**是**buffer实例**

​			5、**Buffer.concat()** -- 将**一组buffer对象**连接成**一个buffer实例**；传入一个**数组**

​			**6、buffer.write()** -- 向buffer对象中**写入数据**

​				参数：

​					1、写入的内容

​					2、写入的起始位置

​			**7、buffer.toString()** -- 将**buffer实例**按指定编码**转换成字符串**，也可以**指定位置**

​				参数：

​					1、编码类型

​					2、起始位置

​					3、开始位置

##### 	2、fs模块 -- 文件系统模块

1. **fs的方法（同步__Sync和异步）**：

   所有的异步方法都有回调函数。如果**直接在回调函数中写入数据会报错**；**原因**：检查完成后才会去执行回调函数

   **异步：**

   1. **stat(文件或目录，callback（err,stats）)** -- 用于**判断是文件还是目录**
   
      - err：错误处理对象
   
      - stats_对象：包含了文件或目录的具体信息
        - **isFile()** -- 是否是文件
        - **isDirectory()** -- 是否是目录
   2. **mkdir(目录名称，callback(err))** -- 创建目录
      1. err:错误信息
   3. **writeFile(文件名称(及路径)，写入的数据，配置对象，callback（err）)** -- 写入文件，如果文件不存在则创建文件，**文件**如果已经**存在**，则会**报错**
      1. 配置对象参数：
         1. encoding：字符编码，默认utf8
         2. mode
         3. flag：文件系统标志。默认值: 'w'
      2. 回调函数参数**err**：**错误对象**
   4. **appendFile(文件名称(及路径)，写入的数据，callback（err）)** -- 在文件后面**追加数据**
   5. **readFile(文件路径，callback(err,data))** -- 读取文件数据
      1. err：错误对象
      2. **data**：**文件数据**（内容）的buffer实例
   6. **readdir（目录路径，callback(err,files)**）-- 读取目录
      1. **files**：是一个包含该目录下的所有**文件数组**
   7. **rmdir(目录路径，callback(err))** -- 删除目录，如果**目录不为空**则**删除不了** 
   8. **unlink(文件路径，callback（err）)** -- 删除文件
   9. **watchFile(文件路径，callback(curent,last))** -- 监听一个文件，发生改变就触发这个函数
   10. **unwatchfile()** -- 解除对文件的监听
   
   **同步：**
   
   1. **statSync(文件或目录)** -- 用于**判断是文件还是目录**；返回一个对象，该对象包含文件或目录的具体信息
   
      **返回对象下的方法**
   
      1. **isFile()** -- 是否是文件
      2. **isDirectory()** -- 是否是目录
   
   2. **mkdirSync(目录名称)** -- 创建目录。如果已存在会报错，使用**try{}...catch(e){}**进行**异常捕获。**
   
   3. **exists(路径)** -- 判断**路径是否存在**（布尔）
   
2. **可读写流数据！**

    	**注意**：使用流之后必须使用可**写流对象下**的**监听(on)**事件

   - **createWriteStream(文件路径)** -- 创建一个**可写流对象**，**返回**一个**可写流对象**；文件可以是音频，视频....；如果**没有**该文件则**创建**文件
     - **流对象下方法：**
       - **流对象.on(事件名称，callback)** -- 监听事件
         - **open** -- 打开可写流事件
         - **close** -- 关闭可写流事件
       - **write(内容)** -- **写入**数据
       - **close()** -- 完成，**关闭**可写流
   - **createReadStream(要读取的文件名称，{配置对象})** -- 创建可读流，**返回**一个**可写读对象**
     - 配置对象：
       - **start**：读取起始点
       - **end**：读取的结束点
       - **highWaterMark**: 每次读取数据的大小 ，默认64*1024
     - 对象下的**方法：**
     - 对象.on(事件名称，callback(data)) -- 监听事件
       - **data** -- 数据事件，会**自动**触发流**读取文件**，分段**返回数据**
       - 回调函数参数：
         - data：**读取到 的数据**
     - **pipe()**

##### 3、事件(events)模块

​	为了**解决多状态异步操作**响应问题，node提供了Event Emitter接口，由events模块提供

1. **方法**
   1. **EventEmitter()** -- **构造函数**；**Emitter**(**发射器**（广播）)；该对象**用于监听事件**
      1. **on(自定义事件名，callback(data))** -- 事件监听
         - data：接收**发射事件**的**数据**
      2. **emit(自定义事件，data)** -- 发射一个事件
      3. **once(自定义事件名，callback(data))** -- 事件监听,**只触发一次**
      4. **removeListener(自定义事件名，监听事件的回调函数)** -- **移除监听事件** ，不能移除匿名函数
      5. **removeAllListener(事件名)**
         - 带参：移除**某个事件**上的**所有回调**
         - 不带参：移除**所有事件**上的**所有回调** 
      6. **setMaxListeners（num）**-- 设置回调函数的上限；同一事件允许设置多个回调
      7. **listeners（事件名）**-- 返回该事件绑定的所有回调（数组）



### http服务模块

#### 	1、创建服务器器

​			步骤：

​				1、**引入http模块** ---- const  http  =  require(‘http’)

​				2、调用对象下的方法**创建服务** ---- **createServe()** -- **返回**服务**对象**

​				3、监听客户端请求 ---- **on(事件名称，callback(req,res))**

​						事件：request  --  客户端请求

​									err  --  服务器错误

​						回调：res -- 响应对象

​										**writeHead(响应状态，{响应类型及编码格式})** -- **设置响应头信息及编码类型**（Content-Type）

​										end(data) -- 结束这次请求并返回数据

​									req -- 请求对象

​										**req.url** -- **请求的路由**

​				4、**监听端口** ---- **listener(端口号)**

​				5、**设置跨域问题**

​						1、**--disable-web-security --user-data-dir=c:\google**（**设置**浏览器的**目标路径**）：破坏浏览器规则使其可以跨域；

​						2、在头信息中写入：**‘Access-Control-Allow-Origin’: '*'**



#### 2、使用express框架创建服务

```
express属于第三方插件需要引入，返回的是一个函数，需要执行来得到一个express实例
步骤：
	1、引入express
	2、执行express函数来创建服务对象（app）
	3、监听客户端发起的请求
	  res：服务端发送给客户端的信息
		res.send(响应的数据) -- 响应客户端,自动的将响应的数据转为字符串，以及自动设置响应头解决编码格式
		res.end(data) -- 需要自己设置响应头，解决编码问题
		res.download('文件地址') -- 下载文件
		res.sendFile('path') -- 发送一个文件，路径必须是绝对路径
		res.redirect('path') -- 重定向网址
		res.set(key,val) -- 设置响应头信息
		res.get(key) -- 获取响应头信息
		res.status() -- 设置响应状态码
	  req：客户端发送给服务端的信息
		req.query -- 获取查询字符串参数
		req.body -- 获取post提交的数据（请求体），返回一个对象
		req.get('key') -- 获取请求头中的信息
		req.url() -- 获取url地址
		
		1、app.get(路由，callback(req,res))
		2、app.post(路由，callback(req,res))
		
	4、监听端口 -- app.listener(端口号)

路由：
	是一个url地址，根据地址响应不同的需求
	路由分级:
		最好不要超过4个（2-3个就可以了）
路由参数（动态路由）：
	设置：使用占位符“：” + 路由名称
	获取：req.params
中间件(在客户端与服务端之间)：
	app.use(第三方插件) -- 使用中间件
	第三方中间件：
	node不提供获取post请求提交的数据（请求体），如果想要获取提交的数据按如下执行：
		一、
		1、需要下载第三方插件（body-parser）
		2、引入插件 -- const bodyParser = require('body-parser')
		3、利用中间件使用该插件（bodyParser.urlencoded({extended:false})）
			bodyParser.urlencoded({extended:false}) : 解析post请求提交的数据（请求体），并挂载到req对象上
		二、通过内置中间件来获取提交的数据
		express.urlencoded({extended: false})
			1、false：表示用系统模块的queryString来处理，官方推荐
			2、true：表示使用第三方模块qs来处理
		
	内置中间件：
		被包含在服务框架内称为内置中间件
		开放静态资源。服务器上的静态资源是访问不到了，要访问就得开放
		app.use(express.static(绝对路径))
	全局中间件(任何请求都必须走)：
		app.use(function(req,res,next){
			next：函数，继续往下执行
		})
	路由中间键：
		服务框架下有一个Router（路由）构造函数,通过它来创建一个路由对象，使用路由对象对路由进行访问。
```



#### 3、express脚手架（express-generate）

```
1、下载express-generate脚手架
2、创建项目 express-generate new 项目名称
```

#### 4、express框架解决跨域问题

```
app.all('*',function(req,res,next){
	设置响应头
	res.header("Access-Control-Allow-Origin", "*")
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	next()继续往后面执行
})
```



#### 5、koa框架

```
1、下载koa，并引入。同样返回的是一个函数，需要执行来得到一个实例。
2、执行返回的函数
3、监听端口 - listen

注意：在koa框架中把请求、响应的对象继承到了context(上下文)中。next返回的是一个promise对象。回调参数ctx，next
context中的属性：
	1、body -- 响应客户端信息
	2、params -- 获取路由参数
	3、query -- 获取查询参数
	4、request.body -- 获取请求体。需要下载第三方库koa-bodyparser,返回的是一个函数需要执行
	5、url -- 获取url地址
	6、queryString -- 获取查询字符串
	7、status -- 获取响应状态码
	
路由：
	1、koa使用路由需要下载第三方库 - koa-router。
	2、引入后创建实例。
	3、将实例对象下的routes()挂载到app上。app.use()返回的还是app对象，所有可以链式调用。然后挂载实例对象下的allowedMethods() -- 自动的设置一些头信息状态。
	
中间件：
	先进后出，后进先出（洋葱模型）。可以在路由请求中使用
	
开放静态资源：
	下载第三方库koa-static并引入。
	返回的是一个函数需要执行，参数是要开放到目录。
	
将用户信息保存在服务器上session：
	 下载并引入koa-session。是一个函数需要执行
	 session(配置对象，app)
	 
	 使用koa-session-mongoose三方库将session保存到数据库中。详解看第三库文档
	 
	 
koa解决跨域问题：
	@koa/cors第三方库
	 
```



### 服务端渲染

```
通过express脚手架创建项目，选择ejs渲染框架

ejs（使用脚手架创建的不用设置）：
	设置模板引擎(固定写法) - app.set('view engine','ejs')
	设置模板所在目录 - app.set('views','./views')
	渲染模板：res.render('文件名称'，{数据})
	
	
ejs详解见官方文档：https://ejs.bootcss.com/

koa服务端渲染：
	需要使用第三方库koa-views，下载并引入，是一个函数需要执行。同时需要下载ejs模板
		app.use(views(__dirname //模板存放位置,{extension: 'ejs' //使用的模板}))
		渲染模板：ctx.render('文件名称',{数据})
```



### 服务端获取及设置客户端cookie持久化

```
服务端使用客户端cookie必须下载第三方插件：cookie-parser;返回的是一个函数。将其挂载到res对象上；
	1、引入插件
	2、利用中间件使用cookie-parser插件：app.use(cookieParser())
req.cookies - 获取客户端cookie信息
res.cookie(key，val，{maxAge:val}) - 在服务端设置cookie
	maxAge:过期时间，以毫秒计算
```



### session信息持久化--服务器上

```
session是将信息保持在服务器上的，只有服务器能认识。session是依赖于cookie的
使用步骤：
	1、下载express-session
	2、引入express-session
	3、使用：app.use(session({
		secret: '密钥'， //加密解密
		resave: false,  //是否允许重新设置session
		saveUninitialized: true,  // 是否初始化
		cookie:{secure: true;maxAge:过期时间毫秒}  //http下secure设置为false
	))
	
req.session - 获取session（对象）
req.session.key = val - 设置session
```



### jsonwebtoken - token信息加密

```
1、引入jsonwebtoken包
	jwt.sign({要加密的字段},'密钥')
	jwt.verify(要解密的字段，‘密钥)
```



### 密码加密方式

1. **MD5**
2. **bcrypt**

```
1、安装库，并引入
2、在需要加密的字段使用：
	set(v){
		return bcrypt.hashSync(v,10) //hash值方式加密，等级为10
	}
```



### mongodb数据库

```
数据库类型：
	关系型数据库
	no sql - 非关系型数据库
mongodb属于非关系型数据库

下载mongodb数据库：
配置mongodb的环境变量
启动服务：mongod --dbpath D:\StudyCoding\software\mongodb\data --logpath D:\StudyCoding\software\mongodb\log\mongod.log
数据的GUI：
	1、mongodb官方GUI：
	2、Navicai：https://www.navicat.com.cn/products
```



### 项目中连接数据库

```
在项目中连接数据库需要下载第三方插件（mongoose）。mongoose是对象mongoDB进行便捷操作的对象模型工具，是针对操作（增删改查）数据库的一个模型库。

远程连接数据库：
	connect('mongodb://用户:密码@服务器地址：27017/数据库?authSource=admin')
步骤：
connect('mongodb://数据库服务地址/数据库',配置对象) -- 连接数据库
	{  //解决警告问题
		useNewUrlParser: true,
    	useUnifiedTopology: true
	}
mongoose.connection -- 获取连接对象，用于监听数据库连接的情况（成功还是失败），返回一个对象。
	监听事件：once(事件，回调) -- 监听一次
			on(事件，回调)
		事件：open -- 数据库打开触发
			 error -- 连接失败触发
			 close -- 数据库关闭触发
			 disconnected -- 数据库断开连接
			 
mongon一切始于mongoose.Schema（构造函数）。每个Schema都会映射到一个mongoDB collection(集合/表),并且定义这个collection里的文档构成。管理数据安全的，约束规则，校验数据；

定义collection构造（规则）
	const Schema = mongoose.Schema
	const df = Schema({字段:{
		type：类型（String Number Date Buffer Boolean Schema.Types.Mixed(任意数据类型) Array）
		required: 必填
		unique: 是否唯一
		maxLength：最大长度
		minLength：最小长度
        default: 任何值或函数 设置此路径默认值。如果是函数，函数返回值为默认值
        ...
	}})
	
生成数据模型对象：
	mongoose.model('表'，Schema对象) -- 返回的对象用于对数据的增删改查
	对象下的方法：
		只传入一个对象，返回一个promise对象；也可以传入一个回调函数callback(err,data)
		create(data) -- 创建数据；
		find() -- 查询所有信息
		find({查询条件}) -- 查询指定信息
		findOne() -- 查询一条数据
		update(条件，更新的数据)
		deleteOne(条件) -- 删除一条数据
		deleteMany() -- 删除多条数据
		
```



### 扩展

#### 1、文件的上传

```
1、下载@koa/multer multer第三方库
	upload.single('input框name的名称')  -- 单文件上传。file中
	upload.array('input框name的名称',num) -- 多文件上传，num是上限个数。files中
	upload.fields([{name:'input框name的名称',maxCount:},{}) -- 多区域上传文件files中
	upload.none() -- 只有文本域的表单
	
	multer.diskStorage({  //设置文件存放路径，以及文件名称
		
	})
	
	
	详解见npm
	
上传文件需要用到formData。
$.ajax({
	//必须配置的项
	contentType:false,
    processData:false,
})
```

#### 2、爬虫

```
使用axios进行数据爬去
cheerio第三库 -- 解析html字符串，可当作文档对象来获取元素

axios.get('爬取的地址') -- 返回一个promise对象，数据在这个对象下data中。

```

![](D:\StudyCoding\潭州教育课程体系\8-H5+Node+Vue\QQ截图20200619163038.png)

### **nodemon** -- 解决手动执行js

​	yarn global add nodemon ;保存后自动执行

