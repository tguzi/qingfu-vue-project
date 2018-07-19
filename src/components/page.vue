<template>
    <el-pagination background
                   @size-change="sizeCb"
                   @current-change="pageCb"
                   :current-page="currentPage"
                   :page-sizes="pageSizes"
                   :page-size="pageSize"
                   layout=" total, prev, pager, next, sizes, jumper"
                   :total="total"
                   v-if="total>0" />
</template>
<script>
export default {
  name: 'page',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      default: 1
    },
    sizeCb: {
      type: Function,
      default: size => {}
    },
    pageCb: {
      type: Function,
      default: page => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
    pageSizes: function() {
      let arr = [],
        baseSize = 20
      for (let i = 0, len = Math.ceil(this.total / baseSize); i < len; i++) {
        arr.push(baseSize * (i + 1))
        if (baseSize * (i + 1) >= 200) {
          break;
        }
      }
      return arr
    }
  },
  methods: {
  }
}

</script>
