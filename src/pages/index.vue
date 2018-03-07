<template>
  <!-- t-center为全局通用样式 在 src/gloable/style.less 中设置 -->
  <div class="index-page t-center">
    <!-- 使用全局组件 -->
    <my-demo title='测试'></my-demo>
    <!-- 使用通用组件 -->
    <Demo></Demo>
  </div>
</template>

<script>
  import Demo from '../modules/components/common/demo.vue'
  export default {
    components: { Demo }
  }
</script>

<!-- 引入less语法 -->
<style lang="less">
  .index-page {
    >div {
      padding: 20px;
      border: 1px solid #ccc;
    }
  }
</style>