<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Operations</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="product name"
            />
          </div>
          <div class="form-group">
            <label>Quantity</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="quantity"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="price"
            />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="message"
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" @click="saveProduct">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        product: {
          title: "",
          count: null,
          price: null,
          description: "",
        },
        saveButtonClicked: false
      }
    },
    methods: {
      saveProduct() {
        this.saveButtonClicked = true;
        this.$store.dispatch("saveProduct", this.product)
      }
    },
    computed: {
      saveEnabled() {
        if (this.product.title.length > 0 && this.product.count > 0 && this.product.price > 0 && this.product.description.length > 0) {
          return false;
        } else {
          return true;
        }
      },
      isLoading() {
        if (this.saveButtonClicked) {
          return {
            display: "block"
          }
        } else {
          return {
            display: "none"
          }
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      if ((this.product.title.length > 0 || this.product.count > 0 || this.product.price > 0 || this.product.description.length > 0) && !this.saveButtonClicked) {
        if (confirm("Kaydedilmemiş değişiklikler var. Yine de çıkmak istiyor musunuz?")) {
          next();
        } else {
          next(false);
        }
      } else {
        next();
      }
    }
  }
};
</script>

<style scoped></style>
