<template>
    <div class="ibox">
        <div class="ibox-title">
            <el-row type="flex" justify="space-between">
                <el-col :span='8'>
                    <h5>{{title}}</h5>
                </el-col>
                <el-col :span='16'>
                    <slot name="header-right"></slot>
                </el-col>
            </el-row>
        </div>
        <div class="ibox-content">
            <slot name="content"></slot>
        </div>
        <div class="ibox-footer" v-if="footer">
            <el-row type="flex" justify="space-between">
                <el-col :span='8'>
                    <slot name="footer-left"></slot>
                </el-col>
                <el-col :span="16" class="tar">
                    <!-- <slot name="footer-right"></slot> -->
                    <Page :total='pageConfig.totalQty' :currentPage='pageConfig.currentPage' :pageSize='pageConfig.pageSize' :pageCb="handlePage" :sizeCb="handleSize" v-if="pageConfig.on" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import Page from '@/components/page'

export default {
  components: {
    Page
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    footer: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    pageConfig() {
      const config = {
        on: false,
        totalQty: 0,
        currentPage: 1,
        pageSize: 20,
        isSize: false,
        handleOptions: () => {},
        getData: () => {}
      }
      return { ...config, ...this.page }
    }
  },
  methods: {
      handlePage(page) {
        this.pageConfig.handleOptions({ currentPage: page })
        this.pageConfig.getData()
      },
      handleSize(size) {
        let opt = {}
        opt[this.isSize ? 'size' : 'pageSize'] = size
        this.pageConfig.handleOptions(opt)
        this.pageConfig.getData()
      }
  }

}

</script>
