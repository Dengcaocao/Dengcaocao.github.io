import{_ as n,W as s,X as a,a0 as e}from"./framework-b947aea2.js";const t={},p=e(`<h2 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h2><p>从申请 --&gt; 使用 --&gt; 释放的一个过程。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 申请 变量声明时自动分配</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 使用</span>
obj<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token string">&#39;stack manage&#39;</span>
<span class="token comment">// 释放</span>
obj <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="垃圾回收与-gc-算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收与-gc-算法" aria-hidden="true">#</a> 垃圾回收与 GC 算法</h2><p>JS 中内存管理是自动的，当对象不再被<strong>引用</strong>或不能从<strong>根上访问</strong>(全局作用域)时就被标记为垃圾。</p><p><strong>可达对象</strong>：从根出发可访问到的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// { test: &#39;stack manage&#39; } 仍然是个可达对象，因为从obj2上还能访问</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;stack manage&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj
obj <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">objGroup</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj1<span class="token punctuation">.</span>next <span class="token operator">=</span> obj2
  obj2<span class="token punctuation">.</span>pre <span class="token operator">=</span> obj1
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">o1</span><span class="token operator">:</span> obj1<span class="token punctuation">,</span>
    <span class="token literal-property property">o2</span><span class="token operator">:</span> obj2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> objGroup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GC 垃圾回收机制的简称，可以找到内存中的垃圾进行释放和回收。</p><ul><li>不再需要使用的对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;stack manage&#39;</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;8888&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// stack manage</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不能再访问到的对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">b</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;stack manage&#39;</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;9999&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v8-引擎的垃圾回收" tabindex="-1"><a class="header-anchor" href="#v8-引擎的垃圾回收" aria-hidden="true">#</a> V8 引擎的垃圾回收</h2><h2 id="performance-工具" tabindex="-1"><a class="header-anchor" href="#performance-工具" aria-hidden="true">#</a> performance 工具</h2><h2 id="优化实例" tabindex="-1"><a class="header-anchor" href="#优化实例" aria-hidden="true">#</a> 优化实例</h2>`,15),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
