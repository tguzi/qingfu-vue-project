<template>
  <img v-if="src" class="img-placehoder" :src="src">
  <div v-else="src" class="img-placehoder">
    暂无图像
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'img-placeholder',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .img-placehoder{
    width: 200px;
    height: 200px;
    border: 2px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
</style>