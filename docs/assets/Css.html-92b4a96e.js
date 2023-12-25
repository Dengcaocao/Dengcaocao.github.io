import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{a as n,c as s,f as e}from"./app-997de2df.js";const i={},l=e(`<h2 id="css选择器及优先级" tabindex="-1"><a class="header-anchor" href="#css选择器及优先级" aria-hidden="true">#</a> Css选择器及优先级</h2><p>!important &gt; 行内样式 &gt; ID选择器 &gt; 类/伪类/属性选择器 &gt; 标签/伪元素选择器 &gt; 关系选择器</p><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p>BFC 全称为块级格式化上下文 (Block Formatting Context) ，它决定了元素如何进行定位以及与其他元素的关系和相互作用。BFC 提供了一个环境，HTML元素在这个环境中按照规则进行布局，一个环境中的元素不会影响到其它环境中的布局。可以说BFC就是一个作用范围、独立的容器，并且这个容器的布局与这个容器外的布局互不影响。</p><h4 id="触发bfc的条件" tabindex="-1"><a class="header-anchor" href="#触发bfc的条件" aria-hidden="true">#</a> 触发BFC的条件</h4><ol><li>浮动（float）</li><li>定位（position）</li><li>弹性盒模型（flex）</li><li>行内块元素（inline-block）</li><li>overflow</li></ol><h4 id="bfc可解决的问题" tabindex="-1"><a class="header-anchor" href="#bfc可解决的问题" aria-hidden="true">#</a> BFC可解决的问题</h4><ol><li>解决外边距合并（overflow）</li><li>清除浮动</li></ol><h2 id="盒模型-box-sizing" tabindex="-1"><a class="header-anchor" href="#盒模型-box-sizing" aria-hidden="true">#</a> 盒模型 box-sizing</h2><ol><li>普通盒模型：content-box。内容实际大小，随边距、边框的值增加而增大。</li><li>怪异盒模型：border-box。内容 + padding + border。</li></ol><h2 id="css实现三角形" tabindex="-1"><a class="header-anchor" href="#css实现三角形" aria-hidden="true">#</a> css实现三角形</h2><p>设置<code>width</code>为0，然后添加边框。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位(position)</h2><ol><li>static：默认值。</li><li>relative：相对定位。以当前位置为基准进行偏移，任占据原来的空间。</li><li>absolute：绝对定位。相对于最近的父级进行定位(relative)，不存在则相对于html定位。</li><li>fixed：相对于浏览器窗口。</li></ol><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2><p>浮动会导致高度塌陷。</p><ol><li>给父级元素添加伪类。</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">.selector:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>父级元素设置<code>overflow: hidden</code>。</li><li>在浮动元素后添加一个块级元素，然后使用<code>clear: both</code>。缺点：出现空白标签。</li><li>设置固定高度。</li></ol><h2 id="实现左侧固宽右侧自适应" tabindex="-1"><a class="header-anchor" href="#实现左侧固宽右侧自适应" aria-hidden="true">#</a> 实现左侧固宽右侧自适应</h2><ol><li>float + margin</li><li>flex</li><li>position</li><li>calc</li></ol><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2><ol><li>transform</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token property">margin-top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>position(绝对定位)，需给父元素设置相对定位。</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>flex</li></ol><h2 id="display-none-和-visibility-hidden-的区别" tabindex="-1"><a class="header-anchor" href="#display-none-和-visibility-hidden-的区别" aria-hidden="true">#</a> <code>display: none</code> 和 <code>visibility: hidden</code> 的区别</h2><p>两者都是隐藏元素。</p><p>前者不占据空间，从渲染树中消失，是非继承属性</p><p>后者隐藏后占据原来的空间，保留渲染数，是继承属性。</p><h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> Flex布局</h2><ol><li>flex-direction：设置主轴排列方向</li><li>flex-warp：空间不够是否换行</li><li>justitfy-content：主轴对齐方式</li><li>align-item：交叉轴对齐方式</li><li>align-self：项目对齐方式</li><li>flex-grow：项目放大比例，默认为0</li><li>flex-shrink：项目缩小比例，默认为1等比缩小</li><li>flex：项目在空间中的占比</li></ol><p>⚠️注意：当项目设置flex为1后，内容超出元素会被拉伸。</p><p><strong>解决方案</strong></p><ol><li>设置<code>width</code>为0</li><li>超出元素进行隐藏<code>overflow: hidden</code></li></ol><h2 id="grid-布局" tabindex="-1"><a class="header-anchor" href="#grid-布局" aria-hidden="true">#</a> Grid 布局</h2><ul><li><p>容器。</p><ul><li><code>grid-template-rows/grid-template-columns</code>：设置行/列数。 <ul><li>repeat(row/columns, height/width) <ul><li>row/columns <ul><li>数字</li><li>auto-fill：根据容器大小自动填充。</li></ul></li><li>height/width <ul><li>像素值</li><li>(n)fr：均等分，可单独设置。n表达占据的比例。</li></ul></li></ul></li><li>minmax(最小值, 占比)</li></ul></li><li><code>row-gap/columns-gap</code>：设置行/列之间的间距，复合属性<code>gap</code>。</li><li><code>grid-template-areas</code>：为每个项目划分区域并对应一个标识符。</li><li><code>grid-auto-flow</code>：排列方向。 <ul><li>row：默认，从左到右。</li><li>row dense：当后面项目在这放不下，会将能放下的项目移动到这。</li><li>cloumns：从上到下。</li></ul></li><li><code>justify-items/align-items</code>：每个项目在网格中(主轴/交叉轴)的对齐方式，复合属性<code>place-items</code>。</li><li><code>justify-content/align-content</code>：控制整个内容区域在容器里的对齐方式。</li></ul></li><li><p>项目。</p><ul><li><code>grid-row-start/grid-row-end</code>：设置跨行开始和结束的网格线，复合属性<code>grid-row</code>。</li><li><code>grid-column-start/grid-column-end</code>：设置跨列开始和结束的网格线，复合属性<code>grid-column</code>。</li><li><code>grid-area</code>：指定项目的区域位置，配合<code>grid-template-areas</code>使用。</li><li><code>justify-self/align-self</code>：单独设置项目在主轴/交叉轴上的对齐方式。</li></ul></li></ul><h2 id="viewport-视口窗口" tabindex="-1"><a class="header-anchor" href="#viewport-视口窗口" aria-hidden="true">#</a> viewport(视口窗口)</h2><p>可视区域，用于移动端适配。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>width：控制viewport的宽度大小(可以是定值)，默认为设备的宽度(<code>device-width</code>)</li><li>initial-scale：页面初始加载时的缩放比例</li><li>maximum-scale：允许用户缩放的最大比例</li><li>minimum-scale：允许用户缩放的最小比例</li><li>user-scalable：是否允许用户缩放</li></ol><h2 id="px、em、rem的区别" tabindex="-1"><a class="header-anchor" href="#px、em、rem的区别" aria-hidden="true">#</a> px、em、rem的区别</h2><p>px是一个绝对单位。</p><p>em、rem是一个相对单位。em相对于当前元素的字体大小，rem相对于根元素(html、body)的字体大小。</p><h2 id="缩小最小字体的方法" tabindex="-1"><a class="header-anchor" href="#缩小最小字体的方法" aria-hidden="true">#</a> 缩小最小字体的方法</h2><p>浏览器可渲染的最小字号为 12px。</p><ol><li><code>transform: scale(0.5)</code></li></ol><ul><li>单独用标签包裹文字进行缩放。</li><li>将整个父元素尺寸放大2倍再进行缩放。</li></ul><ol start="2"><li>SVG矢量图设置<code>text</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token comment">&lt;!-- 
    可以设置1-12px任意字号
    y：字号大小
    不支持多行文本
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>10px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),t=[l];function o(c,p){return n(),s("div",null,t)}const u=a(i,[["render",o],["__file","Css.html.vue"]]);export{u as default};