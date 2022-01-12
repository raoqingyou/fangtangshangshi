<template>
  <div id="app">
      <div
    id="ie-show"
    style="display: none; padding: 20px; text-align: center; margin-top: 60px"
  >
    <h2>
      您当前的浏览器版本过低，请更新您的浏览器或选择
      <a target="_blank" href="https://www.google.cn/chrome/">谷歌浏览器</a>,
      <a target="_blank" href="https://browser.360.cn/">360安全浏览器</a>或
      <a target="_blank" href="https://ie.sogou.com/">搜狗浏览器</a
      >等高级浏览器打开
    </h2>
  </div>
  <div id="root">
    <section class="main-layout ant-layout">
      <Header></Header>
       <router-view/>
      <Footer></Footer>
    </section>
  </div>
  </div>
</template>

<script>
import Header from '@/view/components/Header'
import Footer from '@/view/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>
