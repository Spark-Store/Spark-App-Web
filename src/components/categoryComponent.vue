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
    getInfo() {
      let that=this
      axios
        .get(`http://dcstore.shenmo.tech/store/${that.category}/applist.json`)
        .then(res => {
          that.list = res.data;
        });
    }
  },
  mounted() {
    let that=this
    that.getInfo();
  }
};
</script>


<style scoped>
@import "../../static/style.css";
</style>
