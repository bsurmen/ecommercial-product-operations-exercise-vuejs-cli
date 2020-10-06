<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563F7A"
  >
    <router-link to="/" exact tag="a" class="navbar-brand">
      Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/product-operations"
          active-class="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Product Operations</a></router-link
        >
        <router-link
          to="/product-sale"
          active-class="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Product Sale</a></router-link
        >
      </ul>
    </div>
  </nav>
</template>
