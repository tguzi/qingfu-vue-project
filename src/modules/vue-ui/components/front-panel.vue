<template>
  <section class="front-panel">
    <header>
      <h3 class="fl" v-if="title">{{title}}</h3>
      <span class="fr" v-if="more" @click="moreClick">{{more}}&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></span>
      <div class="cl"></div>
    </header>
    <div class="front-panel-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: '',
      more: '',
      options: {}
    },
    methods: {
      moreClick (e) {
        this.$emit('handleMore', e)
      }
    }
  }
</script>

<style lang="less">
  .front-panel {
    color: #484848;
    margin-bottom: 50px;
    >header {
      padding: 0 8px;
      h3 {
        font-size: 28px;
        line-height: 2;
      }
      span {
        cursor: pointer;
        line-height: 56px;
        font-size: 14px;
      }
    }
    >.front-panel-container {
      width: 100%;
    }
  }
</style>