import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,a as i,c as o,b as n,d as s,e as p,f as a}from"./app-997de2df.js";const c={},r=a(`<p><code>webpack</code> 是一个<strong>静态资源打包工具</strong>。以一个或多个文件作为打包入口，将项目所有的依赖文件编译成一个或多个文件输出。</p><p><code>webpack</code> 只能处理 js 文件，处理其他文件需要其他依赖包。</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><ol><li>下载依赖</li></ol><ul><li>初始化包文件</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载webpack依赖</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm i webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>执行 webpack 命令</li></ol><p>后面未跟配置信息会读取 <code>webpack.config.js</code> 中的配置。</p><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  mpx webpack [入口文件] [指定模式] [输出目录]
  npx webpack index.js --mode=development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在根目录下创建 <code>webpack.config.js</code> 文件，执行 webpack 命令时会自动读取该文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打包入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定输出文件目录及名称</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 文件输出路径(绝对路径，使用node path模块)</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 文件名</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 加载器。打包js、json外的文件需借助loader才能解析</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// loader 配置</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 扩展webpack功能</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包模式。生产模式(production) ｜ 开发模式(developmeng)</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发模式做的事" tabindex="-1"><a class="header-anchor" href="#开发模式做的事" aria-hidden="true">#</a> 开发模式做的事</h4><ol><li>编译代码，编译浏览器识别运行。</li><li>代码质量检查，树立规范。</li></ol><h2 id="处理样式资源" tabindex="-1"><a class="header-anchor" href="#处理样式资源" aria-hidden="true">#</a> 处理样式资源</h2>`,17),d={href:"https://webpack.docschina.org/loaders/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h4 id="处理css资源" tabindex="-1"><a class="header-anchor" href="#处理css资源" aria-hidden="true">#</a> 处理css资源</h4><p>在处理 css 预处理器时需要下载预处理器 loader，使用同下。</p><ol><li>下载 loader</li></ol><ul><li><code>css-loader</code>：将 css 资源编译成 webpack 能识别的模块。</li><li><code>style-loader</code>：将 webpack 编译的 css 模块以 style 标签的形式添加到 html 中。</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install --save-dev css-loader style-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置 loader</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配css文件</span>
          <span class="token comment">// 执行顺序：从右到左</span>
          <span class="token comment">// loader: &#39;&#39;, 只能处理一个loader</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理图片资源" tabindex="-1"><a class="header-anchor" href="#处理图片资源" aria-hidden="true">#</a> 处理图片资源</h2>`,8),v=n("code",null,"file-loader url-loader",-1),k={href:"https://webpack.docschina.org/guides/asset-modules/#general-asset-type",target:"_blank",rel:"noopener noreferrer"},m=a(`<ol><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 匹配所有图片</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 指定小于多少kb的图片转为 base64 格式，默认小于8kb</span>
            <span class="token comment">// 优点：减少请求数量。 缺点：图片体积变大</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">1024</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义文件输出目录-清空上次打包内容" tabindex="-1"><a class="header-anchor" href="#自定义文件输出目录-清空上次打包内容" aria-hidden="true">#</a> 自定义文件输出目录&amp;清空上次打包内容</h2><p>默认情况下，<code>asset/resource</code> 模块以 [hash][ext][query] 文件名发送到输出目录。<br> 可以通过在 webpack 配置中设置 output.assetModuleFilename 来修改此模板字符串指定输出目录。</p><ul><li>[hash]：生成一个唯一 hash 文件名，可指定去多少位 <code>[hash:10]</code>。</li><li>[ext]：文件扩展名。</li><li>[query]：查询参数。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// clean: true, 自动清空上次打包的内容</span>
      <span class="token comment">// filename: &#39;js/bundle.js&#39;,  设置js文件输出目录</span>
      <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;img/[hash][ext][query]&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方式是在配置 loader 时配置 <code>generator.filename</code> 来指定输出目录。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;img/[hash][ext][query]&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理字体资源及其他资源" tabindex="-1"><a class="header-anchor" href="#处理字体资源及其他资源" aria-hidden="true">#</a> 处理字体资源及其他资源</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(ttf|woff2?|avi|mp3)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;font/[hash][ext:10][query]&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理js资源" tabindex="-1"><a class="header-anchor" href="#处理js资源" aria-hidden="true">#</a> 处理js资源</h2><p>webpack 只处理了js中模块化的语法，不能处理 es6 的其他语法，导致不能在浏览器中正常运行，需进行兼容处理。</p><p>其次是对代码格式进行规范检查。</p><ul><li>兼容处理(babel)。</li><li>代码格式检查(eslint)。</li></ul><h4 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> Eslint</h4><p>用来检查 js 和 jsx 语法的工具。</p><p>执行 eslint 时会自动查找配置文件(位于项目根目录)根据里面配置的规则进行检查。以下方式任选其一。</p>`,17),b=a("<li><p>配置文件格式</p><ul><li><code>.eslintrc</code></li><li><code>.eslintrc.js</code></li><li><code>.eslintrc.json</code></li></ul></li><li><p>可直接在 <code>package.json</code> 中的 <code>eslintConfig</code> 选项进行配置。</p></li><li><p><code>.eslintignore</code> 排除不需要检查的目录、文件。</p></li>",3),g={href:"https://dengcaocao.github.io/nav-note/Eslint/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://eslint.bootcss.com/docs/rules/",target:"_blank",rel:"noopener noreferrer"},y=a(`<h5 id="webpack中使用" tabindex="-1"><a class="header-anchor" href="#webpack中使用" aria-hidden="true">#</a> webpack中使用</h5><ol><li>下载依赖包</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install eslint-webpack-plugin eslit --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用插件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定检查的目录</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h4><p>将 js es6 语法编译 es5 语法，使其能在浏览器中正常运行。</p><p>执行时会自动读取配置文件。</p><ul><li><p>配置文件格式(位于根目录)</p><ul><li><code>babel.config.js</code></li><li><code>babel.config.json</code></li><li><code>.babelrc</code></li><li><code>.babelrc.js</code></li><li><code>.babelrc.json</code></li></ul></li><li><p>直接在 <code>package.json</code> 中的 <code>babel</code> 选项中进行配置。</p></li></ul><h5 id="具体配置" tabindex="-1"><a class="header-anchor" href="#具体配置" aria-hidden="true">#</a> 具体配置</h5><ol><li>下载依赖包</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install -D babel-loader @babel/core @babel/preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用</li></ol><p>在 loader 中进行配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 排除不需要进行转换的目录</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>babel.config.js</code> 文件进行配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// webpack.config.js</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 排除不需要进行转换的目录</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// babel.config.js</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 预设。babel插件，扩展babel功能</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>预设</p><ul><li><code>@babel/preset-env</code>：智能预设，允许使用最新的语法。最终将 es6 语法编译成 es5 语法。</li><li><code>@babel/preset-react</code>：编译 jsx 语法。</li><li><code>@babel/preset-typescript</code>：编译 typescript 语法。</li></ul></li></ul><h2 id="处理html资源" tabindex="-1"><a class="header-anchor" href="#处理html资源" aria-hidden="true">#</a> 处理html资源</h2><p>使用 <code>HtmlWebpackPlugin</code> 插件将打包输出的文件自动引入到 html 中。</p><ol><li>安装</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 以当前文件作为模版创建新的html</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发服务器-热更新" tabindex="-1"><a class="header-anchor" href="#开发服务器-热更新" aria-hidden="true">#</a> 开发服务器(热更新)</h2><p>webpack 会创建一个开发服务器，自动监视 src 下的文件，一旦发生改变就会重新打包。</p><ol><li>安装</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install --save-dev webpack-dev-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 启动服务器的域名</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定监听端口号</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;4180&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否自动打开浏览器</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动服务器</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npx webpack serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,32),x={id:"区分开发和生产配置文件",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#区分开发和生产配置文件","aria-hidden":"true"},"#",-1),f={href:"https://webpack.docschina.org/guides/production/#setup",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>开发没有输出文件，移除 <code>output</code> 相关配置，指定模式为 <code>development</code>。</p><p>生产有输出文件，移除 <code>devServer</code> 相关配置，指定模式为 <code>production</code>。</p><ul><li>开发配置文件 <code>webpack.dev.js</code>。</li><li>生产配置文件 <code>webpack.prod.js</code>。</li></ul><p>设置快捷命令。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx webpack server --config ./config/webpack.dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx webpack --config ./config/webpack.prod.js&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提取css文件" tabindex="-1"><a class="header-anchor" href="#提取css文件" aria-hidden="true">#</a> 提取css文件</h2><p>css 目前是被打包到 js 中的，当 js 加载时才会去创建 style 标签生成样式，这样会出现闪屏的现象。</p><ol><li>安装</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  npm install --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定输出目录</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/bundle.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
          <span class="token comment">// 将 style loader 替换成 MiniCssExtractPlugin loader</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理css兼容及压缩" tabindex="-1"><a class="header-anchor" href="#处理css兼容及压缩" aria-hidden="true">#</a> 处理css兼容及压缩</h2><p>将浏览器不支持的 css3 语法进行前缀处理。</p><ol><li>安装</li></ol><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>  &lt;!-- 兼容相关依赖 --&gt;
  npm install --save-dev postcss-loader postcss-preset-env postcss
  &lt;!-- 压缩依赖 --&gt;
  npm install css-minimizer-webpack-plugin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 引入css压缩插件</span>
  <span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-minimizer-webpack-plugin&quot;</span><span class="token punctuation">)</span>

  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 兼容处理</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">[</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 执行压缩css插件，生产环境默认压缩了 js 和 html</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 <code>package.json</code> 中指定兼容的版本。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;last 2 version&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;not dead&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function _(q,E){const e=l("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[s("在处理 css、sass、less、scss、styl 样式时需要借助官方 "),n("a",d,[s("loader"),p(e)]),s(" 处理才能进行打包。")]),u,n("p",null,[s("webpack5 已经内置了 "),v,s("，只需要进行简单的 "),n("a",k,[s("配置"),p(e)]),s(" 就能处理图片资源。")]),m,n("ul",null,[b,n("li",null,[n("p",null,[n("a",g,[s("笔记文档"),p(e)])])]),n("li",null,[n("p",null,[n("a",h,[s("官网配置规则"),p(e)])])])]),y,n("h2",x,[j,s(" 区分开发和生产"),n("a",f,[s("配置文件"),p(e)])]),w])}const M=t(c,[["render",_],["__file","base.html.vue"]]);export{M as default};
