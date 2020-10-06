<template>
  <div>
    <app-header></app-header>
    <product-container></product-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/shared/Footer";
// import ProductPurchase from "./components/products/ProductPurchase";
import ProductList from "./components/products/ProductList";
// import ProductSell from "./components/products/ProductSell";
import Header from "./components/shared/Header";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    // appProductPurchase: ProductPurchase,
    productContainer: ProductList
  },
};
</script>

<style></style>
