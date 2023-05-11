import{_ as a,W as n,X as e,$ as s}from"./framework-a2c3bf79.js";const i={},l=s(`<h2 id="外边距合并" tabindex="-1"><a class="header-anchor" href="#外边距合并" aria-hidden="true">#</a> 外边距合并</h2><h4 id="嵌套块元素-父、子-垂直合并" tabindex="-1"><a class="header-anchor" href="#嵌套块元素-父、子-垂直合并" aria-hidden="true">#</a> 嵌套块元素(父、子)垂直合并</h4><p>取父、子中边距最大的一个。</p><p><strong>解决方案：</strong></p><ul><li><p>给父元素内填充内容。</p></li><li><p>给父元素添加 <code>padding</code> 属性。</p></li><li><p>给父元素添加 <code>border</code> 属性。</p></li><li><p>给父元素添加 <code>overflow: hidden</code>样式。</p></li></ul><h4 id="相邻块元素垂直-兄弟-合并" tabindex="-1"><a class="header-anchor" href="#相邻块元素垂直-兄弟-合并" aria-hidden="true">#</a> 相邻块元素垂直(兄弟)合并</h4><p>上面的元素设置了 <code>margin-bottom</code>，小面的元素设置了 <code>margin-top</code>。由最大的 <code>margin</code> 值撑开。不能进行处理。</p><h2 id="行内元素特点" tabindex="-1"><a class="header-anchor" href="#行内元素特点" aria-hidden="true">#</a> 行内元素特点</h2><ul><li><p>不能设置宽高，由内容撑开。</p></li><li><p>不能设置上下外边距，但可以设置左边距。</p></li><li><p>可与其他元素并列一排。不支持 <code>auto</code></p></li></ul><h2 id="字体引入" tabindex="-1"><a class="header-anchor" href="#字体引入" aria-hidden="true">#</a> 字体引入</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* 指定字体名称 */</span>
    <span class="token property">font-famliy</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">/* 字体文件路径 */</span>
    <span class="token property">src</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空白格解析" tabindex="-1"><a class="header-anchor" href="#空白格解析" aria-hidden="true">#</a> 空白格解析</h2><p><code>html</code> 会默认解析文档中多个空白格为单个空白格。行内元素会支持空白格解析。</p><p><strong>解决方案：</strong></p><ul><li><p>并排展示或上一个行内元素结束标签与下一个行内元素开始标签并排。</p></li><li><p>设置 <code>font-size</code> 的值为0。</p></li><li><p><code>display</code> 指定元素类型为块级元素。</p><ul><li><p>块级-block</p></li><li><p>行内块级-inline-block</p></li><li><p>行内-inline</p></li></ul></li></ul><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><h4 id="平铺-background-repeat" tabindex="-1"><a class="header-anchor" href="#平铺-background-repeat" aria-hidden="true">#</a> 平铺(background-repeat)</h4><ul><li><p>no-repeat：不平铺</p></li><li><p>round：改变图片大小，平铺整个盒子</p></li><li><p>space：按相同的间距进行平铺</p></li></ul><h4 id="大小-background-size" tabindex="-1"><a class="header-anchor" href="#大小-background-size" aria-hidden="true">#</a> 大小(background-size)</h4><ul><li><p>contain：使图片长的一边完全展示</p></li><li><p>cover：改变图片大小，使图片完全填充</p></li><li><p>通过像素或百分比设置 x、y 的大小</p></li></ul><h4 id="定位-background-position" tabindex="-1"><a class="header-anchor" href="#定位-background-position" aria-hidden="true">#</a> 定位(background-position)</h4><ul><li><p>通过方向(top、left、right、bottom、center)的值盛泽 x、y 的位置</p></li><li><p>通过像素或百分比设置 x、y 的位置</p></li></ul><h4 id="起始位置-background-origin" tabindex="-1"><a class="header-anchor" href="#起始位置-background-origin" aria-hidden="true">#</a> 起始位置(background-origin)</h4><ul><li><p>padding-box：从内边距开始，默认</p></li><li><p>border-box：从边框开始</p></li><li><p>content-box：从内容开始</p></li></ul><h4 id="剪裁-background-clip" tabindex="-1"><a class="header-anchor" href="#剪裁-background-clip" aria-hidden="true">#</a> 剪裁(background-clip)</h4><ul><li><p>border-box：从边框开始</p></li><li><p>padding-box：从内边距开始</p></li><li><p>content-box：从内容开始</p></li><li><p>text：以文本内容剪裁，注意兼容</p></li></ul><h4 id="关联-background-attachment" tabindex="-1"><a class="header-anchor" href="#关联-background-attachment" aria-hidden="true">#</a> 关联(background-attachment)</h4><ul><li><p>scoll：随页面滚动而滚动</p></li><li><p>fixed：固定位置</p></li></ul><h2 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h2><ul><li><p>boder-radius：px、em、%</p><ul><li>4个值：4个角</li><li>3个值：左上、右上左下、右下(对角线)</li><li>2个值：左上右下、右上左下(对角线)</li><li>1个值：4个角相等</li></ul></li><li><p>可单独设置某个角</p><ul><li>border-top-left-radius</li><li>...</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 20px 30px 40px/40px 30px 20px 10px<span class="token punctuation">;</span>
  <span class="token comment">/* /前的四个数值表示圆角的水平半径，后面四个值表示圆角的垂直半径。 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渐变色" tabindex="-1"><a class="header-anchor" href="#渐变色" aria-hidden="true">#</a> 渐变色</h2><h4 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h4><ul><li><p>linear-gradient(direction, color1 [position], ...)</p><ul><li><p>direction：渐变方向。默认从上到下 <code>to bottom</code></p><ul><li>方向值(to top left)</li><li>角度值：0deg-top 90deg-right 180deg-bottom 270deg-left 360deg-top</li></ul></li><li><p>position：渐变开始位置(百分比、px)</p></li></ul></li><li><p>repeating-linear-gradient：重复线性渐变</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> red <span class="token punctuation">,</span> red 66px<span class="token punctuation">,</span> yellow 33px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h4><ul><li><p>radial-gradient(shape size at position-1, start-color[position], ..., last-color[position])</p><ul><li>shape：指定渐变的形状</li><li><a target="_blank" href="https://www.runoob.com/cssref/func-radial-gradient.html">size</a>：定义渐变的大小</li><li>position-1：x、y的值</li></ul></li><li><p>repeating-radial-gradient：重复径向渐变</p></li></ul><h2 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h2><ul><li><p>目的：实现文字环绕效果</p></li><li><p>原理：改变元素的层级。普通层级为1，浮动层级1.5。浏览器层级渲染从低到高</p></li><li><p>特性：</p><ul><li>设置浮动后会变成块级元素，拥有块级元素特性</li><li>并排展示</li><li>脱离文档流</li></ul></li></ul><h4 id="对比-inline-block" tabindex="-1"><a class="header-anchor" href="#对比-inline-block" aria-hidden="true">#</a> 对比 inline-block</h4><ul><li><p>解析空白格</p></li><li><p>未脱离文档流</p></li></ul><h4 id="浮动带来的问题" tabindex="-1"><a class="header-anchor" href="#浮动带来的问题" aria-hidden="true">#</a> 浮动带来的问题</h4><ul><li><p>高度塌陷</p></li><li><p>可能会覆盖后面的元素</p></li><li><p>元素高度不一时，元素会被卡住</p></li></ul><h4 id="解决高度塌陷" tabindex="-1"><a class="header-anchor" href="#解决高度塌陷" aria-hidden="true">#</a> 解决高度塌陷</h4><ul><li><p>在浮动元素后面添加一个空标签并设置 clear 属性（×）</p></li><li><p>指定父元素高度（×）</p></li><li><p>块级元素格式化上下文(BFC化)</p><ul><li>转为行内块级元素(inline-block)（×）</li><li>overflow: hidden;（×）</li><li>绝对定位</li></ul></li><li><p>伪元素（√）</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/* before\\after */</span>
  <span class="token selector">.clearFix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2><p>指定 <code>top left right bottom</code> 的位置。可通过 <code>z-index</code> 改变层级，默认为 0 可指定为负</p><p>层级关系：块级 &lt; 浮动 &lt; 文本 &lt; 定位</p><ul><li><p>fixed：固定定位。相对于窗口，不占据空间</p></li><li><p>relative：相对定位。相对于自身位置，占据空间，不脱离文档流</p></li><li><p>absolute：绝对定位。相对于定位元素，不占据空间，脱离文档流。配合绝对定位使用(父相子绝)，以最近的 relative 为准，默认窗口</p></li><li><p>sticky：粘性定位。</p></li></ul><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/* 关键字形式 */</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> mymove</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 百分比形式 */</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> mymove</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新颖的选择器" tabindex="-1"><a class="header-anchor" href="#新颖的选择器" aria-hidden="true">#</a> 新颖的选择器</h2><ul><li><p>a[href]：匹配所有带 <code>href</code> 属性的 <code>a</code> 标签</p></li><li><p>a[href=&quot;#&quot;]：匹配所有 <code>href=&quot;#&quot;</code> 的 <code>a</code> 标签</p></li><li><p>img[alt][src=&quot;./img.png&quot;]：匹配所有带 <code>alt</code> 并且 <code>src=&quot;./img.png&quot;</code> 的 <code>img</code> 标签</p></li><li><p>img[src^=&quot;.ima&quot;]：匹配所有 <code>src</code> 以 .ima 开头的 <code>img</code> 元素</p><ul><li>^ 表示以什么开头</li><li>$ 表示以什么结尾</li><li>~ 包含</li></ul></li></ul><h2 id="伪元素-伪类的区别" tabindex="-1"><a class="header-anchor" href="#伪元素-伪类的区别" aria-hidden="true">#</a> 伪元素&amp;伪类的区别</h2><ul><li><p>伪元素是创建了一个新元素，而伪类是通过特殊的类名对元素进行选择</p></li><li><p>伪元素使用 <code>:</code> 或者 <code>::</code> 声明(前者是css2的声明方式，后者是css3)，而伪类只能使用 <code>:</code></p></li><li><p>伪元素只能同时使用一个，伪类可以同时使用多个</p></li></ul><h2 id="在线教程" tabindex="-1"><a class="header-anchor" href="#在线教程" aria-hidden="true">#</a> <a target="_blank" href="https://www.runoob.com/">在线教程</a></h2>`,57),p=[l];function t(o,c){return n(),e("div",null,p)}const r=a(i,[["render",t],["__file","Css3.html.vue"]]);export{r as default};