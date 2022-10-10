(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{298:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"clock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clock"}},[t._v("#")]),t._v(" Clock")]),t._v(" "),s("p",[t._v("该对象用于跟踪时间。")]),t._v(" "),s("h3",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Clock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autoStart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("autoStart — (可选) 是否要在第一次调用 .getDelta() 时自动开启时钟。默认值是 true。")])]),t._v(" "),s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h4",{attrs:{id:"autostart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autostart"}},[t._v("#")]),t._v(" .autoStart")]),t._v(" "),s("p",[t._v("是否在第一次调用 .getDelta() 时开启时钟。默认值是 true。")]),t._v(" "),s("h4",{attrs:{id:"starttime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starttime"}},[t._v("#")]),t._v(" .startTime")]),t._v(" "),s("p",[t._v("存储时钟最后一次调用 start 方法的时间。默认值是 0。")]),t._v(" "),s("h4",{attrs:{id:"oldtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oldtime"}},[t._v("#")]),t._v(" .oldTime")]),t._v(" "),s("p",[t._v("存储时钟最后一次调用 start, .getElapsedTime() 或 .getDelta() 方法的时间。默认值是 0。")]),t._v(" "),s("h4",{attrs:{id:"elapsedtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elapsedtime"}},[t._v("#")]),t._v(" .elapsedTime")]),t._v(" "),s("p",[t._v("保存时钟运行的总时长。默认值是 0。")]),t._v(" "),s("h4",{attrs:{id:"running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[t._v("#")]),t._v(" .running")]),t._v(" "),s("p",[t._v("判断时钟是否在运行。默认值是 false。")]),t._v(" "),s("h3",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h4",{attrs:{id:"start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" .start ()")]),t._v(" "),s("p",[t._v("启动时钟。同时将 startTime 和 oldTime 设置为当前时间。 设置 elapsedTime 为 0，并且设置 running 为 true.")]),t._v(" "),s("h4",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" .stop ()")]),t._v(" "),s("p",[t._v("停止时钟。同时将 oldTime 设置为当前时间。")]),t._v(" "),s("h4",{attrs:{id:"getelapsedtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getelapsedtime"}},[t._v("#")]),t._v(" .getElapsedTime ()")]),t._v(" "),s("p",[t._v("获取自时钟启动后的秒数，同时将 .oldTime 设置为当前时间。\n如果 .autoStart 设置为 true 且时钟并未运行，则该方法同时启动时钟。")]),t._v(" "),s("h4",{attrs:{id:"getdelta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdelta"}},[t._v("#")]),t._v(" .getDelta ()")]),t._v(" "),s("p",[t._v("获取自 .oldTime 设置后到当前的秒数。 同时将 .oldTime 设置为当前时间。\n如果 .autoStart 设置为 true 且时钟并未运行，则该方法同时启动时钟。")]),t._v(" "),s("h2",{attrs:{id:"bufferattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bufferattribute"}},[t._v("#")]),t._v(" BufferAttribute")]),t._v(" "),s("p",[t._v("用于存储与BufferGeometry相关联的 attribute（例如顶点位置向量，面片索引，法向量，颜色值，UV坐标以及任何自定义 attribute ）。\n更高效的向GPU传递数据。")]),t._v(" "),s("h3",{attrs:{id:"构造函数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数-2"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("p",[s("a",[t._v("BufferAttribute")]),t._v("( array : TypedArray, itemSize : Integer, normalized : Boolean )")]),t._v(" "),s("ul",[s("li",[t._v("array: 顶点坐标。")]),t._v(" "),s("li",[t._v("itemSize: 与顶点相关的数据值的大小。如果 attribute 存储的是三元组（例如顶点空间坐标、法向量或颜色值）则itemSize的值应该是3。")])]),t._v(" "),s("h2",{attrs:{id:"buffergeometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffergeometry"}},[t._v("#")]),t._v(" BufferGeometry")]),t._v(" "),s("p",[t._v("创建几何体的基类。包含顶点、面片(面由一个三角形创建)、法向量、UV坐标(几何体展开形成了一个平面)……。")]),t._v(" "),s("p",[t._v("减少了向 GPU 传输数据所需的开销。")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BufferAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Float32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BufferAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"属性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("p",[s("a",[t._v(".attributes")])]),t._v(" "),s("p",[t._v("几何体UV坐标、法向量、顶点相关信息。")]),t._v(" "),s("h3",{attrs:{id:"方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法-2"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[s("a",[t._v(".setAttribute")]),t._v(" ( name : String, attribute : BufferAttribute )")]),t._v(" "),s("p",[t._v("设置几何体相关信息。")])])}),[],!1,null,null,null);s.default=n.exports}}]);