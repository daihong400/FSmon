<template>
  <div id="app">
    <my-header></my-header>
    <!--定义路由插座-->
    <router-view></router-view>
    <!--可以定义不变的内容-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './common/common-header'
  import myFooter from './common/common-footer'

  export default {
    name: 'app',
    data() {
      return {
        name1: '张三',
        age: 29
      }
    },
    components: {
      myHeader: myHeader,
      myFooter: myFooter
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
</style>


