import Vue from "vue";

// const state = {
//   products: [],
// };

// const getters = {
//   getProducts(state) {
//     return state.products;
//   },
//   getProduct(state) {},
// };

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

const actions = {
  // initApp({ commit }) {
  //   // Vue Resource Operations
  // },

  saveProduct({ dispatch, commit }, product) {
    // Vue Resource Operations

    Vue.http
      .post(
        "https://product-operations-9b4c7.firebaseio.com/products.json",
        product
      )
      .then((response) => {
        product.key = response.body.name;
        commit("updateProductList", product);
        let tradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count,
        };
        dispatch("setTradeResult", tradeResult);
      });
  },
  // sellProduct({ commit }, payload) {
  //   // Vue Resource Operations
  // },
};

export default {
  // state,
  // getters,
  mutations,
  actions,
};
