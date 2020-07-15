<template>
  <div class="app">
    <br />
    <br />
    <center>
      <div class="list">
        <appCard
          class="item"
          v-for="item in list"
          :key="item.tip"
          :downloadContent="downloadContent"
          :Pkgname="item.Pkgname"
          :Name="item.Name"
          :category="category"
        ></appCard>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import appCard from "./appCard";
export default {
  name: "categoryComponent",
  props: ["category"],
  components: { appCard },
  data() {
    return {
      list: [],
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    async getInfo() {
      let that=this
      let {data}=await axios({url:`http://dcstore.shenmo.tech/store/${that.category}/applist.json`,method:"get"})
      that.list=data
    }
  },
 async mounted() {
    let that=this
   await that.getInfo();
  }
};
</script>


<style scoped>
@import "../../static/style.css";
</style>
