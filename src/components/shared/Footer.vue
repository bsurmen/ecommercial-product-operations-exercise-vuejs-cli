<template>
  <nav
    class="navbar fixed-bottom  navbar-light"
    style="background-color: #e3f2fd;"
  >
    <span class="navbar-text mr-auto">
      <strong>burak.works</strong> | bsurmen
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Buy price : </strong>
      <span class="badge badge-danger">{{
        getTradeResult.purchase | currency
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Sale price : </strong>
      <span class="badge badge-success">{{
        getTradeResult.sale | currency
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Total amount : </strong>
      <span class="badge badge-primary">{{
        getTradeResult.balance | currency
      }}</span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getTradeResult"]),
};
</script>
