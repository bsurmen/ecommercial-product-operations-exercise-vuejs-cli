const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {},
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

const actions = {
  initApp({ commit }) {
    // Vue Resource Operations
  },

  saveProduct({ commit }, payload) {
    // Vue Resource Operations
  },
  sellProduct({ commit }, payload) {
    // Vue Resource Operations
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
