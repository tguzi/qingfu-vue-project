<template>
  <el-table :data='list' v-loading="loading" border size='medium'>
    <template v-for="col,cid in layout">
      <!-- index -->
      <el-table-column type='index'
                       :index="indexMethod"
                       label='序号'
                       align='center'
                       width='80px'
                       v-if="col.origin==='index'" />
      <!-- handle -->
      <el-table-column fixed="right"
                       label='操作'
                       align='center'
                       :width='col.width||100'
                       v-else-if="col.origin==='handle'">
        <template slot-scope="scope">
          <slot :scope="scope" name="handle"></slot>
        </template>
      </el-table-column>
      <!-- slot -->
      <el-table-column :prop='col.attr'
                       :label='col.name'
                       :sortable="col.sortable"
                       align='center'
                       v-else-if="col.slot">
        <template slot-scope="props">
          <slot :props="props" :name="col.slot"></slot>
        </template>
      </el-table-column>
      <!-- normal -->
      <el-table-column :prop='col.attr'
                       :label='col.name'
                       align='center'
                       :sortable="col.sortable"
                       v-else />
    </template>
  </el-table>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    curPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    layout: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    indexMethod(idx) {
      return (this.curPage - 1) * this.pageSize + idx + 1
    }
  }
}

</script>
