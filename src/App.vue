<template>
  <div class="app">
    <Header />
    <div class="scetion">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
 
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style>
.app {
  user-select: none;
  position: relative;
}
.app > .scetion {
  background-image: url("./assets/images/bg.jpg");
}
</style>
