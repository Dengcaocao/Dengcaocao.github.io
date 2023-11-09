import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{a as o,c as t,f as c}from"./app-997de2df.js";const a={},u=c('<h2 id="usememo-和-usecallback-有什么区别" tabindex="-1"><a class="header-anchor" href="#usememo-和-usecallback-有什么区别" aria-hidden="true">#</a> useMemo 和 useCallback 有什么区别</h2><blockquote><p>这两个钩子都是组件优化的一种方式，使用 memoization(空间换时间) 的思想。</p></blockquote><blockquote><p>useMemo 缓存的是函数的返回值，并保证返回值的引用地址不变。当依赖项变化时才会重新计算函数的返回值。</p></blockquote><blockquote><p>useCallback 缓存的是函数的本体。</p></blockquote><blockquote><p>memo 缓存组件的渲染结果，减少主线程的阻塞。当 props 未发生改变时，组件不会重新渲染。</p></blockquote><h2 id="useeffect-和-uselayouteffect-有什么区别" tabindex="-1"><a class="header-anchor" href="#useeffect-和-uselayouteffect-有什么区别" aria-hidden="true">#</a> useEffect 和 useLayoutEffect 有什么区别</h2><blockquote><p>useEffect 在组件渲染完成后异步执行，不会阻塞浏览器渲染。</p></blockquote><blockquote><p>useLayoutEffect 在 DOM 变更之后，浏览器绘制之前同步执行，会阻塞渲染。</p></blockquote><h2 id="useeffect-的用法" tabindex="-1"><a class="header-anchor" href="#useeffect-的用法" aria-hidden="true">#</a> useEffect 的用法</h2><blockquote><p>接收一个回调和一个依赖项，只能在组件的顶层或自己的钩子中调用。可以替代 class 中的以下生命周期。</p></blockquote><ul><li><blockquote><p><code>componentDidMount</code> 组件挂载完成(获取数据、DOM)。依赖项为空数组或不存在。</p></blockquote></li><li><blockquote><p><code>componentDidUpdate</code> 组件更新完成(获取更新后的数据)。依赖项发生改变。</p></blockquote></li><li><blockquote><p><code>componentWillUnmount</code> 组件卸载之前(清除定时器、事件监听)。回调返回一个函数。</p></blockquote></li></ul><h2 id="useeffect-第二个参数内部是怎么比较的" tabindex="-1"><a class="header-anchor" href="#useeffect-第二个参数内部是怎么比较的" aria-hidden="true">#</a> useEffect 第二个参数内部是怎么比较的</h2><blockquote><p>使用 <code>for</code> 循环结合 <code>Object.is</code> 方法进行浅比较。</p></blockquote><h2 id="介绍一下-hooks" tabindex="-1"><a class="header-anchor" href="#介绍一下-hooks" aria-hidden="true">#</a> 介绍一下 Hooks</h2><blockquote><p>本质上是一个纯函数，允许在函数式组件中使用 state、生命周期及其他特性。hooks 只能在组件的顶层中使用。</p></blockquote><h2 id="react-中-setstate-什么时候是同步的-什么时候是异步的" tabindex="-1"><a class="header-anchor" href="#react-中-setstate-什么时候是同步的-什么时候是异步的" aria-hidden="true">#</a> React 中 setState 什么时候是同步的，什么时候是异步的？</h2><blockquote><p>setState 执行的过程是同步的，只是合成事件和钩子调用顺序在更新之前，导致没法立即拿到更新的值。<br> 异步是指执行 setState 时，会将需要更新的 state 浅合并后加入状态队列中，不会立即更新，后面通过批量处理更新 state。</p></blockquote>',17),s=[u];function l(r,d){return o(),t("div",null,s)}const h=e(a,[["render",l],["__file","react.html.vue"]]);export{h as default};
