<template>
  <div id="app">
<!--    主页-->
    <center>
      <br><br>
      <h1 class="title">Spark Store</h1>
      <h3 class="more-info">
        Have more.
      </h3>
      <div class="buttons">
        <!--
          愿望墙: http://www.shenmo.tech:420/?p=91
          应用问题反馈: http://www.shenmo.tech:420/?p=419
          APP建议: http://www.shenmo.tech:420/?p=422
      -->
        <br><br>
        <button @click="Search" class="bt-feedback" disabled>搜索应用(暂未开放)</button>
        <button @click="Dream" class="bt-feedback">愿望墙</button>
        <button @click="FeedBack" class="bt-feedback">问题反馈</button>
        <button @click="Proposal" class="bt-feedback">APP建议</button>
      </div>
    </center>
  </div>

</template>

<script>
  export default {
    name: 'darkMainpage',
    data() {
      return {}
    },
    methods: {
      Dream: function () {
        window.open("http://www.shenmo.tech:420/?p=91", "_self", "")
      },
      FeedBack: function () {
        window.open("http://www.shenmo.tech:420/?p=419", "_self", "")
      },
      Proposal: function () {
        window.open("http://www.shenmo.tech:420/?p=422", "_self", "")
      },
      Search: function () {
        this.$router.push({name: "Search"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    height: 700px;
    overflow: hidden;
    border: transparent;
    font-family: Bahnschrift;
    background: #252525;
    padding-bottom: 15%;
  }
  ::selection{
    background: #6d7884;
  }
  .more-info {
    color: #d0d0d0;
    font-weight: lighter;
    font-size: 30px;
  }
  .title{
    color: #bababa;
    font-size: 80px;
  }
  .bt-feedback {
    padding: 10px;
    /*margin-top: 40px;*/
    border: 0;
    background: #252525;
    transition: all 0.2s;
    color: #ffffff;
    width: 150px;
  }

  .bt-feedback:hover {
    background: linear-gradient(145deg, #212121, #282828);
    box-shadow:  14px 14px 33px #1b1b1b,
    -14px -14px 33px #2f2f2f;
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

