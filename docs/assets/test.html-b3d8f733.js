import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{a as s,c as a,f as t}from"./app-997de2df.js";const e={},p=t(`<h2 id="介绍下深度优先遍历和广度优先遍历-如何实现" tabindex="-1"><a class="header-anchor" href="#介绍下深度优先遍历和广度优先遍历-如何实现" aria-hidden="true">#</a> 介绍下深度优先遍历和广度优先遍历，如何实现？</h2><blockquote><p>深度优先: 首先访问顶点，然后依次从未被访问的邻节点出发进行访问，直到所有与顶点相通的节点被访问到。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> nodeList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  nodeList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nodeList<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nodeList
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","test.html.vue"]]);export{d as default};
