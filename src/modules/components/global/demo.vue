  <template>
    <div class="demo">
      <h2>全局组件（全局引用，需要在 components/index.js 文件中注册）</h2>
      {{title}}
    </div>
  </template>

  <script>
  export default {
    props: {
      title: ''
    }
  }
  </script>