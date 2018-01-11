<template>
  <component :is="templateName"></component>
</template>

<script>
  import templateDefault from './templateDefault.vue'
  export default {
    components: { templateDefault },
    computed: {
      /**
       * 系统模板名称
       * @return {string}
       */
      templateName () {
        let t = this.$route.meta.t || 'default'
        return {
          default: 'templateDefault'
        }[t]
      }
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    * {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: inherit;
      color: inherit;
      box-sizing: border-box;
    }
    a {
      &:link{text-decoration:none;}
      &:visited{text-decoration:none;}
      &:active{text-decoration:none;}
    }
    img {
      border: none;
      max-width: 100%;
      user-select: none;
    }
    #app {
      font-family: "Hiragino Sans GB", "华文细黑","STHeiti", "Helvetica Neue", Helvetica,Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #2c3e50;
    }
  }
</style>
