<template>
  <div class="mozan-header">
    <div class="inner">
      <div class="header-main">
        <div>
          <span class="iconfont icon-toggle"></span>
        </div>
        <div>
          <img @click="goHome" src="./../assets/images/logo.png" alt />
        </div>
        <div>
          <span class="iconfont icon-sousuo"></span>
          <span class="iconfont icon-gouwu"></span>
          <div>
            <span>登录</span>
            <span>/</span>
            <span>注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "mozanHeader",
  methods: {
    goHome() {
      this.$router.push(`${this.$publicUrl}`);
    }
  }
};
</script>

<style>
.inner {
  width: 1200px;
  /* max-width: 1000px; */
  margin: 0 auto;
}
.mozan-header {
  background-color: #2b2e33;
}
.mozan-header .header-main {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.mozan-header .header-main > div:first-child {
  flex-shrink: 0;
}
.mozan-header .header-main > div:nth-child(2) {
  flex-grow: 1;
  text-align: center;
}
.mozan-header .header-main > div:last-child {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.mozan-header .header-main > div:last-child > div {
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.mozan-header .header-main span {
  color: #707378;
  font-size: 20px;
  line-height: 65px;
}
</style>