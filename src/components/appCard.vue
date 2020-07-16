<template>
  <span class="show">
    <img
      :src="`http://dcstore.shenmo.tech/store/${category}/${Pkgname}/icon.png`"
      alt="icon"
      class="icon-m"
      @click="GotoJson(Pkgname)"
    />
    <span class="app-title">
      <h3 class="app-name">{{Name}}</h3>
    </span>
    <a target="_blank">
      <button class="download-bt" :title="downloadContent" @click="GotoJson(Pkgname)">{{btnText}}</button>
    </a>
  </span>
</template>
<script>
export default {
  props: {
    downloadContent: { type: String, required: true },
    Pkgname: { type: String, required: true },
    Name: { type: String, required: true },
    category: { type: String, required: true },
    btnText: { default: "详情>>" }
  },
  data() {
    return {};
  },
  methods: {
    GotoJson(pkgName) {
      let that = this;
      window.open(
        `http://dcstore.shenmo.tech/store/${that.category}/${pkgName}/app.json`,
        "_self",
        ""
      );
    }
  }
};
</script>
<style scoped>
@import "../../static/style.css";
</style>