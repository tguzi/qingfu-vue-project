<template>
  <div class="front-panel-item">
    <div><ul>
      <li v-for="item in options">
        <img :src="item.img" alt="">
        <p class="front-panel-item-tip">Entertainment · Vancouver</p>
        <h4 class="front-panel-item-title">Tour with an Enthusiastic Local!</h4>
        <p class="front-panel-item-price">€3 per person</p>
        <p class="front-panel-item-star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          140
        </p>
      </li>
      <div class="cl"></div>
    </ul></div>
    <button class="front-panel-item-left" @click="left">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button class="front-panel-item-right" @click="right">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      options: {},
      length: ''
    },
    mounted () {
      this.setEleStyle(this.$el)
      this.checkBtn(this.$el)
    },
    methods: {
      /**
       * 设置元素样式
       * 图片宽高比 1.5
       * @param {[type]} el [description]
       */
      setEleStyle (el) {
        let uLis = el.querySelector('ul').querySelectorAll('li')
        let btns = el.querySelectorAll('button')
        let imgs = el.querySelectorAll('img')
        let width = el.offsetWidth / this.length
        let height = (el.offsetWidth / this.length) * 2 / 3
        uLis.forEach((item) => {
          item.style.width = width + 'px'
        })
        btns.forEach((item) => {
          item.style.top = (height / 2 - 20) + 'px'
        })
        imgs.forEach((item) => {
          item.style.width = width + 'px'
          item.style.height = height + 'px'
        })
      },
      /**
       * 判断按钮是否应该显示
       * @param  {[type]} el     [description]
       * @param  {[type]} left   [description]
       * @param  {[type]} length [description]
       * @return {[type]}        [description]
       */
      checkBtn (el, left, num) {
        let leftBtn = el.querySelector('.front-panel-item-left')
        let rightBtn = el.querySelector('.front-panel-item-right')
        let width = el.offsetWidth / this.length
        leftBtn.style.display = 'block'
        rightBtn.style.display = 'block'
        if (this.options.length <= parseFloat(this.length) || left === -(width * (num - this.length))) {
          rightBtn.style.display = 'none'
        }
        if (!left || left === 0) {
          leftBtn.style.display = 'none'
        }
      },
      /**
       * 获取偏移的距离
       * @param  {[type]} el [description]
       * @return {[type]}    [description]
       */
      checkTran (el, type) {
        let count = el.querySelectorAll('li').length
        let width = parseInt(this.$el.offsetWidth / this.length)
        let left = parseFloat(el.style.transform.slice(11, -3))
        // 如果当前无法满足偏移，则不进行操作
        if ((type === 'right' && left === -(width * (length - this.length))) || (type === 'left' && left === 0)) return false
        // 如果有数据的时候
        if (left) {
          let value = type === 'left' ? (left + width) : (left - width)
          this.checkBtn(el.parentNode.parentNode, value, count)
          return value
        }
        else {
          let value = type === 'right' ? (0 - width) : 0
          this.checkBtn(el.parentNode.parentNode, value, count)
          return value
        }
      },
      /**
       * 向左按钮
       * @param  {[type]} e [description]
       * @return {[type]}   [description]
       */
      left (e) {
        let ul = this.$el.querySelector('ul')
        let left = this.checkTran(ul, 'left')
        ul.style.transform = 'translateX(' + left + 'px)'
      },
      /**
       * 向右按钮
       * @param  {[type]}   e [description]
       * @return {Function}   [description]
       */
      right (e) {
        let ul = this.$el.querySelector('ul')
        let left = this.checkTran(ul, 'right')
        ul.style.transform = 'translateX(' + left + 'px)'
      }
    }
  }
</script>

<style lang="less">
  .front-panel-item {
    color: #484848;
    position: relative;
    >div {
      width: 100%;
      overflow: hidden;
    }
    ul {
      width: 10000px;
      transition: all 0.25s linear;
    }
    &-tip {
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
    }
    &-title {
      margin: 5px 0;
    }
    &-price {
      font-weight: lighter;
      font-size: 14px;
      line-height: 2;
    }
    &-star {
      font-size: 14px;
      color: rgb(0, 132, 137);
    }
    button {
      width: 40px;
      height: 40px;
      cursor: pointer;
      background: #fff;
      border: none;
      border-radius: 40px;
      position: absolute;
      box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
      outline: none;
      &:active {
        box-shadow: 2px 2px 2px #abcdef, -2px -2px 2px #abcdef;
      }
      &:nth-of-type(1) {
        left: -15px;
      }
      &:nth-of-type(2) {
        right: -15px;
      }
    }
  }
</style>