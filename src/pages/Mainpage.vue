<template>
  <div id="app">
    <center>
      <br><br>
      <h1 class="title">{{ appName }}</h1>
      <h3 class="more-info">{{ appDesc }}</h3>
      <div class="buttons">
        <br />
        <button v-for="(item, index) in appMenus" :key="index" @click="handleClickMenuItem(item)" class="bt-feedback" >
          {{ item && item['title'] }}
        </button>
      </div>
    </center>
  </div>
</template>

<script>
  import * as config from "@/config"
  import * as utils from '@/utils'
  import * as middleware from '@/utils/middleware'
  export default {
    name: 'darkMainpage',
    data() {
      return {}
    },
    computed: {
      appName() {
        return config.AppName
      },
      appDesc() {
        return config.AppDesc
      },
      appMenus() {
        return config.AppMainPageMenus
      }
    },
    methods: {
      handleClickMenuItem(item) {
        const { id, router } = item
        if (id != 0) {
          const link = middleware.CreatesMainUrl(id)
          utils.open(link)
        } else {
          // console.log('router: ', router)
          this.$router.push({
            name: router
          })
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    height: 700px;
    overflow: hidden;
    border: transparent;
    background: #ffffff;
    padding-bottom: 15%;
  }
  ::selection{
    background: #a6b4c9;
  }
  .more-info {
    color: #5f5f5f;
    font-weight: lighter;
    font-size: 30px;
  }
  .title{
    color: #616161;
    font-size: 80px;
  }
  .bt-feedback {
    padding: 10px;
    margin-top: 10px;
    border: 0;
    background: #ffffff;
    transition: all 0.2s;
    color: #282828;
    width: 150px;
  }

  .bt-feedback:hover {
    box-shadow:  14px 14px 33px #bababa,
    -14px -14px 33px #ffffff;
  }

  .buttons {
    height: 150px;
    width: 400px;
    position: relative;
    top:100px;
    border:solid 1px #848484;
    border-radius: 10px;
  }
</style>

