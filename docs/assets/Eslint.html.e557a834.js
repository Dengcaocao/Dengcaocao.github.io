import{_ as l,V as i,W as t,$ as n,a1 as s,Z as e}from"./framework.1721950b.js";const o="/docs/assets/img/eslint/eslint-src.webp",p="/docs/assets/img/eslint/npm-info.webp",r={},c=e(`<h2 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h2><h4 id="介绍-好处" tabindex="-1"><a class="header-anchor" href="#介绍-好处" aria-hidden="true">#</a> 介绍&amp;好处</h4><ul><li>eslint 是一个语法规范检查的包，内置 280 多个规则。</li><li>好处 <ul><li>统一团队编码规范</li><li>统一语法</li><li>避免低级错误，减少 git 不必要的提交</li><li>在编译时检查语法，而不是在运行时检查</li></ul></li></ul><h4 id="eslint-包" tabindex="-1"><a class="header-anchor" href="#eslint-包" aria-hidden="true">#</a> Eslint 包</h4><ul><li>安装方式 <ul><li>通过 npm 进行全局安装或本地安装（项目）<code>npm i eslint -D</code></li><li>项目创建时选择 eslint 包</li></ul></li></ul><h4 id="vscode-中-eslint-扩展" tabindex="-1"><a class="header-anchor" href="#vscode-中-eslint-扩展" aria-hidden="true">#</a> VSCode 中 Eslint 扩展</h4><ul><li>通过搜索插件的方式进行安装</li></ul><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><h4 id="生成-eslint-配置文件" tabindex="-1"><a class="header-anchor" href="#生成-eslint-配置文件" aria-hidden="true">#</a> 生成 Eslint 配置文件</h4><blockquote><p>eslint 可以创建独立的配置文件.eslintrc.js，也可以在 package 中配置</p></blockquote><ul><li>初始化 eslint 配置文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token number">1.</span> <span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init
  <span class="token number">2.</span> npx eslint <span class="token operator">--</span>init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=n("li",null,"检查规则，找出问题，强制应用规则",-1),u=n("li",null,"模块使用机制",-1),h=n("li",null,"是否使用框架",-1),m=n("li",null,"是否使用 TS",-1),v=n("li",null,"规范之后的代码在哪里运行",-1),k=n("li",null,"选择配置规则",-1),b=n("li",null,"标准的那一套",-1),g=["src"],x=n("h4",{id:"生成-eslint-配置文件报错",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生成-eslint-配置文件报错","aria-hidden":"true"},"#"),s(" 生成 Eslint 配置文件报错")],-1),f=["src"],_=e(`<ul><li><p>在后面检查代码规范时，会导致检查失败：<code>Invalid ecmaVersion</code></p></li><li><p>原因：创建文件第一步时选择了强制应用规范，会降低 eslint 版本</p></li><li><p>解决方案：修改配置文件，降低 <code>ecmaVersion</code>, 从 13 =&gt; 12</p></li></ul><h4 id="eslint-代码检查" tabindex="-1"><a class="header-anchor" href="#eslint-代码检查" aria-hidden="true">#</a> Eslint 代码检查</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 目录路径检查目录下的所有文件</span>
  <span class="token number">1.</span> npx eslint <span class="token punctuation">[</span>file path ｜ dir path<span class="token punctuation">]</span>
  <span class="token number">2.</span> npm <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token punctuation">[</span>file path ｜ dir path<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint-配置项" tabindex="-1"><a class="header-anchor" href="#eslint-配置项" aria-hidden="true">#</a> Eslint 配置项</h2><h4 id="配置文件格式" tabindex="-1"><a class="header-anchor" href="#配置文件格式" aria-hidden="true">#</a> 配置文件格式</h4><ul><li><p>javaScript</p></li><li><p>YAML</p></li><li><p>JSON</p></li><li><p>eslint 加载优先级 js&gt;yaml&gt;json。所以最好选择 js 格式</p></li></ul><h4 id="配置文件导出使用模式" tabindex="-1"><a class="header-anchor" href="#配置文件导出使用模式" aria-hidden="true">#</a> 配置文件导出使用模式</h4><ul><li><p>JavaScript modules ES6 导入导出（import/exprot）</p></li><li><p>commonJS（require/exprot）</p></li><li><p>推荐使用<code>commonJS</code></p><ul><li>vue 脚手架中，webpack 打包默认使用的是 commonJS</li></ul></li></ul><h4 id="env-节点" tabindex="-1"><a class="header-anchor" href="#env-节点" aria-hidden="true">#</a> env 节点</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 运行环境</span>
    <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在 eslint 规范中，一般不允许使用在页面中未定义的变量</p></li><li><p>在开发中常常需要用到运行环境中的全局变量或 api，在 env 中配置运行环境就可以使用全局变量或 api 了</p></li></ul><h4 id="globals-节点" tabindex="-1"><a class="header-anchor" href="#globals-节点" aria-hidden="true">#</a> globals 节点</h4><ul><li>定义全局变量。在文件中访问未定义的变量时，<code>no-undef</code>规则会提示错误。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// 可以读取，可以修改</span>
    <span class="token string-property property">&quot;$&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 可以读取，不能修改</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="extends-节点" tabindex="-1"><a class="header-anchor" href="#extends-节点" aria-hidden="true">#</a> extends 节点</h4><ul><li><p>配置 eslint 在检查时使用的规范包。</p></li><li><p>在使用第三方包时，可以省略前缀<code>eslint-config-</code>。</p></li><li><p>可以是字符串形式，也可以是数组形式。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;standard&quot;</span> <span class="token comment">// &quot;eslint-config-standard&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parseoptions-节点" tabindex="-1"><a class="header-anchor" href="#parseoptions-节点" aria-hidden="true">#</a> parseOptions 节点</h4><ul><li>指定 eslint 解析代码时使用的 js 语法检查版本。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">12</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rules-节点" tabindex="-1"><a class="header-anchor" href="#rules-节点" aria-hidden="true">#</a> rules 节点</h4><ul><li><p>配置 eslint 检查的规范。</p></li><li><p>使用了第三方包时，<code>rules</code>中的规则会重写包中的规范。（具体配置规则看文档）</p></li></ul><h2 id="eslint-检查语法的规则" tabindex="-1"><a class="header-anchor" href="#eslint-检查语法的规则" aria-hidden="true">#</a> Eslint 检查语法的规则</h2><h4 id="eslint-语法规范本质" tabindex="-1"><a class="header-anchor" href="#eslint-语法规范本质" aria-hidden="true">#</a> Eslint 语法规范本质</h4><ul><li><p>eslint 内置 285 个规则，每条规则 都是一个 create 函数。</p></li><li><p>在进行代码检查时，会进行转码。 <img src="`+o+'" alt="" loading="lazy"></p></li></ul><h2 id="语法规范包类型" tabindex="-1"><a class="header-anchor" href="#语法规范包类型" aria-hidden="true">#</a> 语法规范包类型</h2><h4 id="内置规范包" tabindex="-1"><a class="header-anchor" href="#内置规范包" aria-hidden="true">#</a> 内置规范包</h4><ul><li><p>随 eslint 一起下载</p><ul><li><code>eslint-all</code>：使用了 eslint 全部的规则（280 多个）</li><li><code>eslint-recommended</code>：使用推荐的 50 多个规则</li></ul></li></ul><h4 id="第三方规范包" tabindex="-1"><a class="header-anchor" href="#第三方规范包" aria-hidden="true">#</a> 第三方规范包</h4><blockquote><p>第三方包有很多，我们就拿标准的规范包<code>eslint-config-standard</code>来举例。</p></blockquote><ul><li><p>检查包需要的 eslint 版本：<code>npm info &quot;eslint-config-standard@latest&quot; peerDependencies</code></p></li><li><p>下载包：<code>npm i eslint-config-standard -D</code><img src="'+p+`" alt="" loading="lazy"></p></li></ul><h4 id="包的使用" tabindex="-1"><a class="header-anchor" href="#包的使用" aria-hidden="true">#</a> 包的使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;extends&quot;: &quot;eslint:all&quot;, // 内置：所有规则</span>
    <span class="token comment">// &quot;extends&quot;: &quot;eslint:recommended&quot;, // 内置：推荐规则</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 第三方：标准规则</span>
    <span class="token comment">// &quot;extends&quot;: &quot;airbnb-base&quot;, // 第三方：airbnb公司规则</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function y(a,q){return i(),t("div",null,[c,n("ul",null,[n("li",null,[s("配置选项选择 "),n("ol",null,[d,u,h,m,v,k,b,n("li",null,[s("文件使用语言 "),n("img",{src:a.$withBase("/assets/img/eslint/config.webp"),alt:"config"},null,8,g)])])])]),x,n("img",{src:a.$withBase("/assets/img/eslint/error.png"),alt:"config"},null,8,f),_])}const E=l(r,[["render",y],["__file","Eslint.html.vue"]]);export{E as default};
