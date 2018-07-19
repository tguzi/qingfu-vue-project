<template>
  <Box :title="title">
    <el-form slot="content"
             ref="form" :model="form"
             :label-width="labelWidth+'px'"
             label-suffix="："
             label-position="right"
             size="medium">
      <el-row :gutter="40"
              type="flex"
              justify="space-between"
              v-for="row,rid in layout"
              :key="rid">
        <el-col :span="col.col===4?24:col.type==='date'?12:6"
                v-for="col,cid in row"
                :key="cid">
          <el-form-item :label="col.name"
                        :prop="col.attr&&col.attr.toString()||''">
            <!-- input -->
            <el-input v-model.trim="form[col.attr]"
                      auto-complete="off"
                      :placeholder="'请输入'+col.name"
                      @keydown.enter.native="search"
                      v-if="col.type==='input'"
                      @change="search" />
            <!-- select -->
            <template v-else-if="col.type==='select'">
                <el-select v-model="col.default"
                           :placeholder="'请选择'+col.name"
                           disabled
                           v-if="col.disabled">
                  <el-option :label="v"
                             :value="k"
                             v-for='(v,k) in col.options'
                             :key='k' />
                </el-select>
                <el-select v-model="form[col.attr]"
                           :placeholder="'请选择'+col.name"
                           @change="search"
                           v-else>
                  <el-option label="不限"
                             :value="col.unlimited || ''" />
                  <el-option :label="v"
                             :value="k"
                             v-for='(v,k) in col.options'
                             :key='k' />
                </el-select>
            </template>
            <!-- date -->
            <el-row v-else-if="col.type==='date'">
                <el-col :span='8'>
                  <el-date-picker v-model="form[col.attr[0]]"
                                  :title="form[col.attr[0]]"
                                  type="datetime"
                                  :editable="false"
                                  :default-value="form[col.attr[0]]"
                                  :value-format="col.format?col.format:''"
                                  :placeholder="col.name+'从'"
                                  @change="search" />
                </el-col>
                <el-col :span='2' class="tac">-</el-col>
                <el-col :span='8'>
                  <el-date-picker v-model="form[col.attr[1]]"
                                  :title="form[col.attr[1]]"
                                  type="datetime"
                                  :editable="false"
                                  :default-value="form[col.attr[0]]"
                                  :value-format="col.format?col.format:''"
                                  placeholder="到"
                                  @change="search" />
                </el-col>
              </el-row>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </Box>
</template>
<script>
import Box from '@/components/box'
import DOMAIN from '@/utils/domin'

export default {
  components: {
    Box
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    layout: {
      type: Array,
      default: () => {
        return []
      }
    },
    handleOptions: {
      type: Function,
      default: () => {}
    },
    getData: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    let obj = {}
    for (let row of this.layout) {
      for (let col of row) {
        if (col.disabled) continue;
        obj[col.attr] = ''
      }
    }
    return {
      form: obj
    }
  },
  methods: {
    search() {
      this.handleOptions({ ...this.form, currentPage: 1 })
      this.getData()
    },
    reset() {
      let change = false
      for (let key in this.form) {
        if (this.form[key] !== '') {
          change = true
          this.form[key] = ''
        }
      }
      if (change) {
        this.search()
      }
    }
  }
}

</script>
