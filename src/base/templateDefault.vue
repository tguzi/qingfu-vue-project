<template>
  <div class="template-deafult">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isMore: false
      }
    }
  }
</script>

<style lang="less">
  @headerHeight: 64px;
  .template-deafult {
    >header {
      height: @headerHeight;
      position: relative;
      font-size: 14px;
      overflow: hidden;
      .header-icon {
        color: #FF5A5F;
        display: inline-block;
        vertical-align: middle;
        font-size: 34px;
        -webkit-transition: 0.25s color;
        -moz-transition: 0.25s color;
        transition: 0.25s color;
        padding: 16px 20px;
        svg {
          height: 1em;
          width: 1em;
          display: block;
          fill: currentColor;
        }
      }
      .header-icon-small {
        padding-right: 5px;
        display: none;
      }
      .header-small-down {
        display: none;
        font-size: 20px;
      }
      nav {
        li {
          float: left;
          height: auto;
          a {
            display: block;
            height: 100%;
            line-height: @headerHeight;
            padding: 0 16px;
            span {
              padding-bottom: 10px;
            }
            &:hover{
              color: inherit;
              span {
                border-bottom: 2px solid rgb(118, 118, 118);
              }
            }
          }
        }
      }
    }
    .down-meun {
      .header-icon {
        cursor: pointer;
        color: #FF5A5F;
        display: inline-block;
        vertical-align: middle;
        font-size: 34px;
        -webkit-transition: 0.25s color;
        -moz-transition: 0.25s color;
        transition: 0.25s color;
        padding: 16px 5px 16px 0;
        svg {
          height: 1em;
          width: 1em;
          display: block;
          fill: currentColor;
        }
      }
      width: 100vw;
      height: 100vh;
      padding: 0 20px;
      background: #fff;
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      ul {
        li {
          line-height: 50px;
          padding: 10px 0;
          font-size: 18px;
          border-bottom: 1px solid #ccc;
          &:last-child {
            border-bottom: none;
          }
          p.make-money {
            line-height: 1.5;
            span {
              font-size: 14px;
              line-height: 1;
            }
            svg {
              float: right;
              margin-top: -20px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    #content {
      border-bottom: 1px solid #ccc;
    }
    >footer{
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 8px;
      color: #484848;
      .footer-companion {
        padding: 48px 25px;
        ul {
          li {
            width: 25%;
            float: left;
            text-align: left;
            padding-left: 80px;
            &:nth-of-type(1) {
              padding-left: 0;
            }
            .seclect-item {
              width: 200px;
              font-size: 20px;
              line-height: 24px;
              position: relative;
              border: 1px solid #ccc;
              select {
                color: #888;
                border: none;
                padding: 11px;
                padding-right: 40px;
                height: 46px;
                display: block;
                appearance:none;
                -moz-appearance:none;
                -webkit-appearance:none;
                outline: none;
                width: 100%;
                &:focus {
                  box-shadow: 1px 1px 1px #fff inset;
                }
              }
              span {
                position: absolute;
                right: 10px;
                top: 10px;
              }
              &:nth-of-type(2) {
                margin-top: 10px;
              }
            }
            dl {
              dt {
                font-size: 15px;
                font-weight: bold;
                line-height: 18px;
                margin-bottom: 16px;
              }
              dd {
                color: #767676;
                font-size: 14px;
                line-height: 1.5;
                margin-bottom: 4px;
              }
            }
          }
        }
      }
      hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: 48px 0 24px;
      }
      a:hover {
        text-decoration: underline;
      }
      .footer-copyright {
        margin-bottom: 20px;
        font-size: 14px;
        ul {
          li {
            float: left;
            margin-right: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .template-deafult {
      >header {
        .header-icon {
          display: none;
        }
        .header-icon-small {
          cursor: pointer;
          display: inline-block;
        }
        .header-small-down {
          cursor: pointer;
          display: inline-block;
        }
        nav {
          display: none;
        }
      }
      >footer {
        .footer-companion {
          li {
            display: none;
            width: 100% !important;
            &:nth-of-type(1) {
              display: block;
            }
            .seclect-item {
              float: left;
              width: 49% !important;
              &:nth-of-type(2) {
                margin: 0 !important;
                margin-left: 2% !important;
                &::after {
                  clear: both;
                }
              }
            }
          }
        }
        .footer-copyright {
          ul {
            margin-top: 10px;
            float: left;
            clear: both;
          }
        }
      }
    }
  }
</style>