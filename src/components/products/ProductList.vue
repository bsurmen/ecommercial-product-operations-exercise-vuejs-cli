<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr />
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <th>id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Message</th>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle text-center">
                  <span class="badge badge-info"> E564fghdE563df </span>
                </td>
                <td class="align-middle text-center">Test</td>
                <td class="align-middle text-center">1</td>
                <td style="width: 120px;">10,000</td>
                <td class="align-middle">Ex. Message</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning">
            <strong>No any record here!</strong>
            <br />
            <small
              >You can check product operations menu to add a new product.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    getCountClasses(count) {
      return {
        "btn-danger text-white": count == 0 || count == null,
        "btn-success text-white": count > 0,
      };
    },
  },
};
</script>

<style scoped></style>
