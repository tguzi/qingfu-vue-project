<template>
  <div class="airbnb-index">
    <!-- 顶部 -->
    <header>
      <div class="header-title">
        <h1>Airbnb</h1>
        <h2>
          Book unique <a href="javascript:void(0)" style="color:inherit; cursor: pointer; text-decoration: none;">homes</a> and experience a city like a local.
        </h2>
      </div>
      <div class="header-saerch">
        <span class="header-saerch-icon">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
        <input type="text" placeholder="Try 'Kuala Lumpur' ">
        <button class="header-saerch-btn">Search</button>
      </div>
    </header>
    <!-- 内容 -->
    <div class="airbnb-index-container">
      <!-- Explore Airbnb -->
      <my-front-panel
        title="Explore Airbnb"
        :options="options">
        <ul class="explore-airbnb">
          <li v-for="item in options">
            <img :src="item.img" :alt="item.name">
            <span>{{item.name}}</span>
          </li>
          <div class="cl"></div>
        </ul>
      </my-front-panel>
      <!-- Experiences -->
      <my-front-panel title="Experiences" more="See all">
        <my-front-panel-item
          :options="options1"
          length="4"
          @handleMore="showMore"></my-front-panel-item>
      </my-front-panel>
      <!-- Homes -->
      <my-front-panel title="Homes" more="See all">
        <my-front-panel-item :options="options1" length="3"></my-front-panel-item>
      </my-front-panel>
      <!-- find-out-more -->
      <section class="airbnb-index-container-find">
        <div class="airbnb-index-container-find-warp">
          <div class="fl">
            <h3>Earn up to €244 a week <br> hosting in San Nicolas, <br> Manila, Philippines</h3>
            <p>Turn your extra space into extra income.</p>
            <button>Find out more</button>
          </div>
          <img class="fr" src="https://a0.muscache.com/pictures/0a2548c9-caf3-430b-b953-26ec96feae2c.jpg" alt="">
          <div class="cl"></div>
        </div>
      </section>
      <!-- Featured destinations -->
      <my-front-panel title="Featured destinations" more="See all">
        <ul class="featured-destinations">
          <li v-for="item in options2">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
          </li>
          <div class="cl"></div>
        </ul>
      </my-front-panel>
      <!-- Experiences in London -->
      <my-front-panel title="Experiences in London" more="See all">
        <my-front-panel-item :options="options1" length="9"></my-front-panel-item>
      </my-front-panel>
      <!-- Experiences in London -->
      <my-front-panel title="Experiences in London" more="See all">
        <my-front-panel-item :options="options1" length="6"></my-front-panel-item>
      </my-front-panel>
      <!-- Experiences in London -->
      <my-front-panel title="Experiences in London" more="See all">
        <my-front-panel-item :options="options1" length="5"></my-front-panel-item>
      </my-front-panel>
      <!-- Experiences in London -->
      <my-front-panel title="Experiences in London" more="See all">
        <my-front-panel-item :options="options1" length="2"></my-front-panel-item>
      </my-front-panel>
      <!-- Experiences in London -->
      <my-front-panel title="Experiences in London" more="See all">
        <my-front-panel-item :options="options1" length="7"></my-front-panel-item>
      </my-front-panel>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [
          { name: 'Homes', img: 'https://a0.muscache.com/im/pictures/fc84f11e-bd04-4efb-bc4e-65a2070ce49a.jpg?aki_policy=large' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/9cc4d447-585d-4f4b-b810-47b75f59a339.jpg?aki_policy=large' },
          { name: 'Restaurants', img: 'https://a0.muscache.com/im/pictures/2cafd3e5-b3ee-492b-a660-3ba0096d6a78.jpg?aki_policy=large' }
        ],
        options1: [
          { name: 'Homes', img: 'https://a0.muscache.com/im/pictures/7665753c-6de6-4b28-8d13-6bfec32708c1.jpg?aki_policy=large' },
          { name: 'Restaurants', img: 'https://a0.muscache.com/im/pictures/2cafd3e5-b3ee-492b-a660-3ba0096d6a78.jpg?aki_policy=large' },
          { name: 'Restaurants', img: 'https://a0.muscache.com/im/pictures/2cafd3e5-b3ee-492b-a660-3ba0096d6a78.jpg?aki_policy=large' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/9cc4d447-585d-4f4b-b810-47b75f59a339.jpg?aki_policy=large' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/9cc4d447-585d-4f4b-b810-47b75f59a339.jpg?aki_policy=large' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/9cc4d447-585d-4f4b-b810-47b75f59a339.jpg?aki_policy=large' },
          { name: 'Homes', img: 'https://a0.muscache.com/im/pictures/fc84f11e-bd04-4efb-bc4e-65a2070ce49a.jpg?aki_policy=large' }
        ],
        options2: [
          { name: 'Homes', img: 'https://a0.muscache.com/im/pictures/8346a424-a1dc-4c50-921d-a5226b44529f.jpg?aki_policy=poster' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/0c79a1b5-333a-421b-b9e3-effb8b9b9958.jpg?aki_policy=poster' },
          { name: 'Restaurants', img: 'https://a0.muscache.com/im/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg?aki_policy=poster' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg?aki_policy=poster' },
          { name: 'Experiences', img: 'https://a0.muscache.com/im/pictures/0e2e4ace-7f04-4895-b7c6-482c99e69908.jpg?aki_policy=poster' },
          { name: 'Homes', img: 'https://a0.muscache.com/im/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg?aki_policy=poster' }
        ]
      }
    },
    methods: {
      showMore (data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="less">
  .airbnb-index {
    max-width: 1080px;
    margin: auto;
    color: #484848;
    >header {
      margin-top: 200px;
      margin-bottom: 200px;
      .header-title {
        max-width: 600px;
        margin-bottom: 15px;
        h1 {
          color: #FF5A5F;
          font-size: 46px;
          margin-top: 40px;
        }
        h2 {
          color: rgb(72, 72, 72);
          font-size: 40px;
          font-weight: normal;
          margin-bottom: 15px;
        }
      }
      .header-saerch {
        padding: 12px;
        border: 1px solid #ccc;
        width: 800px;
        border-radius: 5px;
        font-size: 20px;
        margin-top: 50px;
        box-shadow: 5px 5px 5px #eee;
        &-icon {
          font-size: 24px;
        }
        input {
          width: 640px;
          height: 46px;
          padding-left: 10px;
          padding-right: 10px;
          border: none;
          outline: none;
        }
        &-btn {
          background: #ff5a5f;
          border: none;
          color: #fff;
          padding: 10px 18px;
          border-radius: 5px;
        }
      }
    }
    &-container {
      margin-bottom: 70px;
      ul {
        li {
          float: left;
          width: 270px;
          border-radius: 5px;
          padding: 0 8px;
          img {
            width: 100%;
          }
        }
      }
      .explore-airbnb {
        li {
          img {
            width: 96px;
            height: 72px;
            float: left;
            border-radius: 5px 0 0 5px;
          }
          span {
            line-height: 72px;
            height: 72px;
            width: calc(~'100% - 96px');
            font-size: 18px;
            font-weight: bold;
            float: left;
            padding-left: 8px;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 0 5px 5px 0;
          }
        }
      }
      &-find {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 48px 0;
        margin: 24px 0;
        &-warp {
          width: 800px;
          margin: 0 auto;
          h3 {
            font-size: 28px;
            line-height: 1.5;
          }
          p {
            font-size: 20px;
            font-weight: lighter;
            line-height: 2;
          }
          button {
            cursor: pointer;
            color: #fff;
            border: 2px solid transparent;
            border-radius: 4px;
            padding: 8px 16px;
            outline: none;
            background: #008489;
          }
          img {
            width: 400px;
          }
        }
      }
      .featured-destinations {
        li {
          width: 16.66%;
          font-weight: bold;
          line-height: 1.5;
        }
      }
    }
  }
</style>