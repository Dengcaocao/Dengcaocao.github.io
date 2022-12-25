#### css面试

##### px em rem的区别

    px是一个绝对单位
    em、rem是一个相对单位。em参考的是当前元素的字体大小，rem参考的是根元素（html）的字体大小

##### css选择器的优先级
    !important > 行内样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器

##### 定位的几个属性（position）
    1、static（默认值）：默认位置
    2、relative（相对定位）：以原来的位置为基准进行偏移，原来的位置仍占据空间
    3、absolute（绝对定位）：相对于最近的父级定位（relative），如果没有则相对于html定位       
    4、fixed（固定定位）：相对于浏览器窗口进行的定位，不会发生改变 
    tips: 如果上、右、下、左都设置了，上 --> 下 左 --> 右

##### 使用css实现一个三角形
    transparent：透明
    .sj{
            width: 0;
            /* border: 40px solid red; */
            border: 40px solid transparent;
            /* border-top-color: transparent;
            border-right-color: transparent;
            border-left-color: transparent; */
            border-bottom-color: red;
        }

##### 让一个盒子水平垂直居中
    eg.1-transform:
    tips: translate是相对于自身进行移动
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    
    eg.2-绝对定位：
    tips: 要给父元素设置相对定位
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    
    eg.3-弹性盒模型
        display: flex;
        justify-content: center;
        align-items: center;

##### 清除浮动的方法
    tips：浮动会导致高度塌陷
    1、给浮动的父元素添加overflow: hidden;
    2、在浮动元素后面添加一个块级元素，然后清除浮动clear:both;（缺点：页面中会出现很多空白的标签）
    3、给浮动的父元素添加一个伪类清除浮动（最优）
        .continear:after{
            content: "";
            display: block;
            clear: both;
        }
    4、设置高度

##### 图片懒加载原理
##### css3的新特性
    媒体查询、变换（transform）、盒模型、弹性盒模型、文字，盒子阴影、动画、过渡...

##### display:none;和visibility:hidden;的区别
    前者隐藏后不占据空间，后者隐藏后占据原来的空间


#### css3重要模块
    + 选择器
    + 盒模型
    + 2d/3d变换
    + 动画

##### 圆角属性
    tips：椭圆（x轴/y轴）
    border-radius：
        1个值：4个角一样
        2个值：2个对角
        3个值：左上角，(右上角,左下角)，右下角

##### 阴影属性
    tips：可指定多个，用逗号隔开
    box-shadow：水平位移，锤子位移，模糊度，尺寸大小，颜色，（内、外）阴影

##### 背景
    + background-image：url('图片地址')     可指定多个，用逗号隔开
    + background-size： 指定图片的大小
        + width(px,%) height(px,%)          %是相对于父元素，如果只设置一个值，第二个值为auto
        + cover                             保持纵横比缩放成完全覆盖背景区域
        + contain                           保持纵横比，缩放成宽高任意一边抵达容器为止

##### 背景填充位置 backgroun-origin

    + border-box    从边框位置开始填充
    + padding-box   从内边距位置开始填充
    + content-box   从内容开始填充

##### 背景定位 background-position

    + x(left | center | right) y(top | center | bottom)
    + x% y%
    + x(px) y(px)

##### 背景裁剪 background-clip

    + border-box
    + padding-box
    + content-box

##### 背景渐变

    + linear-gradient  线性渐变
        tips：可对角渐变
              重复渐变 - repeat-linear-gradient
        type.1：方向(默认上-->下),(颜色 [占比[范围]],)...
        type.2：角度(角度,(颜色 [占比[范围]],)...)
    + radial-gradient  径向渐变
        + 中心点
        + 形状(圆/椭圆)
        + 大小
            + closest-side
            + farthest-side
            + closest-corner
            + farthest-corner
        + (颜色 [占比[范围]],)...

##### 文本效果

    tips：结合overflow、text-overflow、white-space可实现文本溢出用省略号代替
    + text-shadow       文本阴影
        水平位移 垂直位移 模糊度 颜色
    + text-overflow
        + clip          裁剪文本
        + ellipsis      溢出用省略号代替
        + string(自定义)
    + white-space
        + nowrap        文本不换行

#####  转换属性

    + transform         应用2d、3d转换
    + transform-style   所有子元素在3d中呈现(设置在父级中)
        + flat          子元素不保留3d位置
        + preserve      子元素保留3d位置
    + transform-origin  改变转换点
    + perspective       查看3d的视距
        tips：  
            该属性给父级设置时，是以父级的某一个点位视点的，查看子元素时样式是不一样的（多个子元素）
            给每个子元素设置transform:perspevtive(800px)时,会以元素自身的某个点作为视点，呈现出来的样式是一样的


##### 2D转换(transform)

    + translate     从当前元素位置移动(如果是%,是根据自身来计算的)
    + translateX    x轴移动
    + translateY    y轴移动
    
    + scale         缩放元素大小，默认为1不缩放
    + scaleX        x轴缩放
    + scaleY        y轴缩放
    
    + rotate        旋转元素（可+-）
    
    + skew          元素倾斜度
    + skewX( )      表示只在X轴(水平方向)倾斜。
    + skewY( )      表示只在Y轴(垂直方向)倾斜。

##### 3D转换

    translateZ      z轴移动
    translate3d(x,y,z)
    
    + scaleZ        z轴缩放
    + scale3d()
    
    + rotateX       x轴旋转
    + rotateY       y轴旋转
    + rotateZ       z轴旋转
    + rotate3d()

##### css布局

###### 1.flex

###### 2.grid

​	**display: grid; **开启grid布局

```
容器(父元素)：
	+ grid-template-rows		行
		值：每行高度
			repeat(行数/auto-fill,高度值/nfr)
				auto-fill: 根据容器大小自动填充
				nfr: 均等分。可单个写，n表示占多数等份
			minmax(最小值，占比)
			auto 自动
	+ grid-template-columns		列
		值：每列的宽度
			repeat(列数/auto-fill,宽度值/xfr)
				auto-fill: 根据容器大小自动填充
				nfr: 均等分。可单个写，n表示占多数等份
	+ row-gap
		行与行之间的间距
	+ columns-gap
		列与列之间的间距
	+ gap
		row-gap和columns-gap的复合属性
		值：row columns。如果值是一样的可以只写一个
	+ grid-template-areas
		划分区域
		值：string。每个项目对应一个标识符
	+ grid-auto-flow
		排列方向
		row：从左到右,默认
		row dense：当后面项目在这放不下，会将能放下的项目移动到这
		columns：从上到下
	+ justify-items
		每个项目在网格中(主轴)的对齐方式
		start	左对齐
		end		右对齐
		center	居中对齐
	+ align-items
		每个项目在网格中(交叉轴)的对齐方式
		start	左对齐
		end		右对齐
		center	居中对齐
	+ place-items
		justify-items和align-items的复合属性
	+ justify-content 同flex布局
	+ align-content   同flex布局
	+ grid-auto-columns
		设置多出来的项目的宽度或高度
项目(子元素)： 
	+ grid-row-start / grid-row-end 		行的开始和结束
		值：第几根网格线 或 (span 跨几根网格线。start向下跨，end向上跨)
		简写：grid-row
			值：	开始 / 结束
	+ grid-column-start / grid-column-end	列的开始和结束
	  	简写：grid-column
	  		值：	开始 / 结束
	  根据网格线来指定项目的具体位置
	+ grid-area
		指定项目放在哪个区域，需配合grid-template-areas使用
		可指定网格线
		column-start / row-start / column-end / row-end
	+ justify-self
		设置项目在主轴上的对齐方式
	+ align-self
		设置项目在交叉轴上的对齐方式
```

##### 响应式web设计

###### viewport

​	用户可视区域

​	响应式一般会在头部加入

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	1、width：控制viewport的宽度大小
		可以是一个指定的值
		device-width：为设备吧宽度
	2、initial-scale：页面初始加载时的缩放比例
	3、maximum-scale：允许用户缩放的最大比例
	4、minimum-scale：允许用户缩放的最小比例
	5、user-scalable：是否允许用户缩放

###### 网格视图

```
网格视图及百分比适配。响应式网格视图通常是 12 列，宽度为100%。

​	设置每列的百分比
```

###### 媒体查询

​	根据窗口的大小动态的使用对应的样式

```
@media only screen and (max-width: 500px) {
    body {
        background-color: lightblue;
    }
}
```

###### 图片、video

​	设置width为100%，height为auto来实现自适应

​	tips：设置width为指定值时，图片会自动等比缩放

###### 响应式框架

​	bootstrap