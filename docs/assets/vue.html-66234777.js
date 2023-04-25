import{_ as l,W as n,X as i,$ as a,a0 as e,a2 as t}from"./framework-a2c3bf79.js";const s={},d=a('<h2 id="什么是单页面应用-spa" tabindex="-1"><a class="header-anchor" href="#什么是单页面应用-spa" aria-hidden="true">#</a> 什么是单页面应用(SPA)</h2><p>只有一张Web页面的应用。加载单个HTML页面，在用户与应用程序时动态更新局部模块。</p><ul><li><p>优点</p><ul><li>用户操作体验好，不会频繁的刷新页面。</li><li>前后端分离开发</li></ul></li><li><p>缺点</p><ul><li>SEO不友好</li><li>首页加载缓慢</li></ul></li></ul><h2 id="mvvm模型" tabindex="-1"><a class="header-anchor" href="#mvvm模型" aria-hidden="true">#</a> MVVM模型</h2><p>即<code>model</code>(数据访问层)-<code>view</code>(视图层)-<code>viewmodel</code>(数据连接层)的响应式框架。 通过数据驱动应用，数据变化，视图更新，视图变化，数据更新。</p><ul><li><p>优势</p><ul><li>低耦合：视图可独立于model的变化和修改</li><li>可复用性</li><li>分离开发</li></ul></li></ul><h2 id="vue响应式原理" tabindex="-1"><a class="header-anchor" href="#vue响应式原理" aria-hidden="true">#</a> vue响应式原理</h2><p>监听数据变化做出响应的一种机制。</p><ul><li><p>vue2：采用数据劫持结合发布者-订阅者模式，通过<code>Object.defineProperty</code>劫持各个属性的getter、setter， 并创建收集依赖的dep对象。在获取属性值的时候会先判断是否有<code>target</code>标识，然后进行依赖收集， 当数据发生变化时发布消息给订阅者，根据依赖收集去通知页面更新。</p></li><li><p>vue3：通过<code>Proxy</code>代理拦截对象属性的操作，然后通过<code>Reflect</code>对源对象的属性进行操作最后反射出去。</p></li></ul><h2 id="data为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#data为什么是一个函数" aria-hidden="true">#</a> data为什么是一个函数</h2><p>确保每个组件中data的数据是独立、互不影响的。如果是个普通对象将会影响到其他组件的数据。</p><h2 id="v-if和v-show的区别" tabindex="-1"><a class="header-anchor" href="#v-if和v-show的区别" aria-hidden="true">#</a> v-if和v-show的区别</h2><ul><li>v-if：动态的添加或移除DOM元素，是一个销毁重建的过程，切换消耗较高。</li><li>v-show：使用<code>display</code>样式控制DOM元素的显示和隐藏，初始渲染消耗较高。</li></ul><h2 id="v-if和v-for优先级" tabindex="-1"><a class="header-anchor" href="#v-if和v-for优先级" aria-hidden="true">#</a> v-if和v-for优先级</h2><p>两者同时使用是不推荐的，优先级不够明显。</p><ul><li><p>vue2：<code>v-for</code>比<code>v-if</code>的优先级更高，不管是否渲染都会遍历整个列表，比较浪费性能。</p></li><li><p>vue3：<code>v-if</code>比<code>v-for</code>的优先级更高，这会导致无法访问到<code>v-for</code>中定义的变量。</p></li></ul><h2 id="computed、watch和methods的区别" tabindex="-1"><a class="header-anchor" href="#computed、watch和methods的区别" aria-hidden="true">#</a> computed、watch和methods的区别</h2><ul><li><p>computed 有缓存机制，当依赖的数据发生改变时才会重新计算，必须return出去。</p></li><li><p>watch 监听已存在的属性是否发生改变，然后执行一系列的操作，不要return。</p></li><li><p>methods 没有缓存，每次调用都会执行一次。</p></li></ul><h2 id="vue的生命周期" tabindex="-1"><a class="header-anchor" href="#vue的生命周期" aria-hidden="true">#</a> vue的生命周期</h2><p>实例从创建到销毁的一个过程(数据观测、模版编译、实例挂载、DOM更新)。Vue3 中的生命周期比 Vue2 的快。</p><p>大体分为以下三个阶段。</p><ol><li><p>挂载 <code>beforeCreate、created、beforeMount、mounted</code></p></li><li><p>更新 <code>beforeUpdate、updated</code></p></li><li><p>销毁 <code>beforeDestroy、destroyed</code></p></li></ol><table><thead><tr><th style="text-align:left;">2.x</th><th style="text-align:left;">3.x</th><th style="text-align:left;">描述</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;">beforeCreate</td><td style="text-align:left;">setup</td><td style="text-align:left;">实例创建前</td><td style="text-align:left;">loading的加载、插件的挂载...</td></tr><tr><td style="text-align:left;">created</td><td style="text-align:left;">setup</td><td style="text-align:left;">实例创建完成</td><td style="text-align:left;">发送ajax请求...</td></tr><tr><td style="text-align:left;">beforeMount</td><td style="text-align:left;">onBeforeMount</td><td style="text-align:left;">实例挂载前</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">mounted</td><td style="text-align:left;">onMounted</td><td style="text-align:left;">实例挂载后</td><td style="text-align:left;">可获取DOM节点、发送ajax请求</td></tr><tr><td style="text-align:left;">beforeUpdate</td><td style="text-align:left;">onBeforeUpdate</td><td style="text-align:left;">数据更新前</td><td style="text-align:left;">获取更新前各种状态</td></tr><tr><td style="text-align:left;">updated</td><td style="text-align:left;">onUpdated</td><td style="text-align:left;">数据更新后</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">beforeDestroy</td><td style="text-align:left;">onBeforeUnmount</td><td style="text-align:left;">销毁之前</td><td style="text-align:left;">定时器的清除、移除事件监听...</td></tr><tr><td style="text-align:left;">destroyed</td><td style="text-align:left;">onUnmounted</td><td style="text-align:left;">销毁完成</td><td style="text-align:left;">移除事件监听</td></tr></tbody></table><h2 id="父子组件的挂载顺序" tabindex="-1"><a class="header-anchor" href="#父子组件的挂载顺序" aria-hidden="true">#</a> 父子组件的挂载顺序</h2><p>父组件</p><blockquote><p>beforeCreate &gt; created &gt; beforeMount</p></blockquote><p>子组件</p><blockquote><p>beforeCreate &gt; created &gt; beforeMount &gt; mounted</p></blockquote><p>父组件</p><blockquote><p>mounted</p></blockquote><h2 id="组件间的通信方式" tabindex="-1"><a class="header-anchor" href="#组件间的通信方式" aria-hidden="true">#</a> 组件间的通信方式</h2><figure><img src="https://dengcaocao.github.io/resources/communication.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>父向子</p>',33),o=e("blockquote",null,[e("p",null,[t("props、"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"r"),e("mi",null,"e"),e("mi",null,"f"),e("mi",null,"s"),e("mtext",null,"、")]),e("annotation",{encoding:"application/x-tex"},"refs、")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"re"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mord cjk_fallback"},"、")])])]),t("attrs(所以未被props定义的属性)")])],-1),p=e("p",null,"子向父",-1),r=e("blockquote",null,[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"e"),e("mi",null,"m"),e("mi",null,"i"),e("mi",null,"t"),e("mtext",null,"、")]),e("annotation",{encoding:"application/x-tex"},"emit、")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord mathnormal"},"mi"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord cjk_fallback"},"、")])])]),t("parent")])],-1),c=a(`<p>兄弟组件</p><blockquote><p>vuex、$parent、</p></blockquote><p>跨层级(祖孙组件)</p><blockquote><p>vuex、provide+inject</p></blockquote><h2 id="key的作用及不建议使用index" tabindex="-1"><a class="header-anchor" href="#key的作用及不建议使用index" aria-hidden="true">#</a> key的作用及不建议使用index</h2><p>为虚拟DOM添加唯一的标识符。当数据变化时，vue根据新旧虚拟DOM的key进行比较， 找到了相同的可以但内容未变直接复用之前的DOM，内容变量则创建新的DOM。未找到相同的key则创建新的真实DOM。</p><p>使用index作为key时，当向列表前面添加或删除数据时会导致后的key发生改变，而 重新创建DOM，不能极大的复用。存在输入类的DOM会产生错误DOM更新。</p><h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟DOM</h2><p>用js对象模拟DOM结构。</p><p>主要解决浏览器性能的问题。当视图更新后台，虚拟DOM不会立即更新，而是将它记录在一个js 对象中，最后将这个对象一次性的添加到DOM树中，避免了大量重复的DOM操作。</p><h2 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式" aria-hidden="true">#</a> 路由模式</h2><ul><li><p>hash模式</p><p>在地址栏中会有一个<code>#</code>，可用<code>location.hash</code>获取hash值。 当hash值改变时不会触发http请求，不会重新加载页面。</p></li><li><p>history模式</p><p>利用H5的<code>history</code>API。通过<code>pushState、replaceState</code>方法向当前浏览器会话的历史堆栈中添加或替换一个状态， 不会触发<code>popstate</code>事件，只有在做出浏览器动作(go、back、forward)时，才会触发该事件。</p></li></ul><h2 id="路由跳转方式" tabindex="-1"><a class="header-anchor" href="#路由跳转方式" aria-hidden="true">#</a> 路由跳转方式</h2><ul><li><p>声明式导航：<code>&lt;router-link :to=&quot;...&quot; /&gt;</code></p></li><li><p>编程式导航：<code>router.push()...</code></p></li></ul><h2 id="路由钩子" tabindex="-1"><a class="header-anchor" href="#路由钩子" aria-hidden="true">#</a> 路由钩子</h2><p>路由钩子分为：</p><ol><li>全局守卫</li></ol><ul><li>beforeEach：进入路由之前。可进行用户身份的校验。</li><li>afterEach：进入路由之后</li></ul><ol start="2"><li><p>路由独享守卫(beforeEnter)</p></li><li><p>组件内守卫</p></li></ol><ul><li>beforeRouteEnter：路由进入前</li><li>beforeRouteUpdate：路由更新</li><li>beforeRouteLeave：路由离开</li></ul><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h2><p>vuex是一种状态管理模式，用于集中式状态管理、数据共享的仓库。</p><p>state：定义数据状态</p><p>getters：获取state中的数据，会进行缓存，变化时会重新计算。</p><p>mutations：修改state中的数据唯一方法是提交(<code>commit</code>) mutation，必须是同步函数。</p><p>actions：主要用来处理一些异步操作，通过<code>dispatch</code>来分发任务提交<code>mutations</code>，不能直接变更状态。</p><p>module：</p><p>将store分成多个模块，每个模块都拥有自己的state、getters、mutations、actions。</p><p>通过<code>namespaced:true</code>开启命名空间，提交分发时带上命名空间名称。避免多个模块对同一个mutation 或 action 作出响应。</p><h2 id="客户端和服务端渲染的区别" tabindex="-1"><a class="header-anchor" href="#客户端和服务端渲染的区别" aria-hidden="true">#</a> 客户端和服务端渲染的区别</h2><ul><li><p>客户端</p><p>用户输入地址向服务器发送请求后，传给浏览器相应的网页文件并解析，然后将数据渲染到页面。在客户端生成DOM，不利于SEO优化。</p></li><li><p>服务端</p><p>在服务端操作网页文件，通过render函数渲染好整个页面，最后发送给客户端。在服务端生成DOM，有利于SEO优化、爬虫。</p></li></ul><h2 id="怎么解决vue打包文件过大的问题" tabindex="-1"><a class="header-anchor" href="#怎么解决vue打包文件过大的问题" aria-hidden="true">#</a> 怎么解决Vue打包文件过大的问题</h2><ul><li><p>不常用的库通过CDN的方式引入。</p></li><li><p>使用路由懒加载。</p></li><li><p>开启gzip压缩。</p></li></ul><h2 id="vue性能优化" tabindex="-1"><a class="header-anchor" href="#vue性能优化" aria-hidden="true">#</a> Vue性能优化</h2><ul><li><p>使用for循环时绑定key，尽量不是用index作为key。</p></li><li><p>路由懒加载。</p></li><li><p>使用v-show、KeepAlive复用DOM。</p></li><li><p>打包去掉map文件。</p></li><li><p>通过CDN引入第三方库。</p></li><li><p>避免DOM的操作。</p></li><li><p>减少页面Ajax请求的数量。</p></li></ul><h2 id="怎么解决页面刷新vuex值被重置的问题" tabindex="-1"><a class="header-anchor" href="#怎么解决页面刷新vuex值被重置的问题" aria-hidden="true">#</a> 怎么解决页面刷新Vuex值被重置的问题</h2><ul><li><p>将Vuex值保存到浏览器缓存中。</p></li><li><p>页面刷新再次发送请求，动态更新Vuex。</p></li></ul><h2 id="http和https的区别" tabindex="-1"><a class="header-anchor" href="#http和https的区别" aria-hidden="true">#</a> http和https的区别</h2><p>http 是以明文的方式传输的，https是http协议更加安全的版本，通过SSL进行加密传输。</p><p>http默认端口是80，​https默认端口是443。</p><h2 id="如何扩展组件" tabindex="-1"><a class="header-anchor" href="#如何扩展组件" aria-hidden="true">#</a> 如何扩展组件</h2><p>常见的扩展方法有 <code>mixins、extends、slots</code>。</p><p>slots 属于内容扩展，精确分发时使用具名插槽。</p><p>extends 类似 mixins。与 Vue.extend 不同的是 Vue.extend 创建的是一个实例。</p><p>混入(mixins)是分发组件可复用的功能非常灵活的方式。混入对象可包含组件任意选项。在混入时可能导致变量冲突。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 复用代码：它是一个配置对象，选项和组件里面一样</span>
  <span class="token keyword">const</span> mymixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">dosomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 全局混入：将混入对象传入</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mymixin<span class="token punctuation">)</span>

  <span class="token comment">// 局部混入：做数组项设置到mixins选项，仅作用于当前组件</span>
  <span class="token keyword">const</span> Comp <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mymixin<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子组件能修改父组件的数据吗" tabindex="-1"><a class="header-anchor" href="#子组件能修改父组件的数据吗" aria-hidden="true">#</a> 子组件能修改父组件的数据吗</h2><p>vue 中数据传递是单向的，父级状态的更新会向下流到的子组件中（props自动刷新），反之则不行。 这样防止了子组件意外变更父组件状态时导致数据流向难以理解的问题。</p><p>解决方法：通过 <code>emit</code> 分发一个事件去修改父组件的状态。</p><blockquote><p>虽然不能直接修改传递过来的 props，但是可以修改内嵌的对象或属性。</p></blockquote><h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h2><p>权限管理分为页面权限和按钮权限的管理。</p><p>首先在路由 meta 信息中配置 roles 字段用于权限匹配，并把所有的路由信息配置成一个路由表， 然后通过路由守卫钩子验证用户身份，根据返回身份信息与路由中的 roles 字段匹配过滤路由表， 最后通过路由的 addRoute 方法动态添即可。</p>`,53),h=[d,o,p,r,c];function u(m,f){return n(),i("div",null,h)}const v=l(s,[["render",u],["__file","vue.html.vue"]]);export{v as default};
