<template>
  <el-button type="primary" @click="reset">
    <slot>重置</slot>
  </el-button>
</template>

<script>
  export default {
    props: {
      form: {
        type: Object,
        default: function() {
          return {}
        }
      },
      initial: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    methods: {
      reset() {
        let change = false
        for (let key in this.form) {
          if (this.form[key] !== '') {
            change = true
            this.form[key] = this.initial[key] || ''
          }
        }
        if (change) {
          this.$emit('reset', this.form)
        }
      }
    }
  }
</script>
