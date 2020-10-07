<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  },
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity.3s ease-out;
  opacity: 0;
}
</style>
