import Vue from "vue";
import VueRouter from "vue-router";

import ProductList from "./components/products/ProductList";
import ProductPurchase from "./components/products/ProductPurchase";
import ProductSell from "./components/products/ProductSell";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductList },
  { path: "/product-operations", component: ProductPurchase },
  { path: "/product-sale", component: ProductSell },
  { path: "*", component: ProductList },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
