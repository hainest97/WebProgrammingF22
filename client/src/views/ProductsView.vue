<script setup lang="ts">
import { addProductToCart } from "@/stores/cart";
import { isLoading } from "@/stores/session";
import { reactive, ref, computed, watch } from "vue";
import { getProducts, type Product } from "../stores/products";
import { RouterLink } from "vue-router";

const products = reactive([] as Product[]);
getProducts().then(x => products.push(...x.products));
const search = ref("");
function addToCart(product: Product) {
  addProductToCart(product);
}
// IMPERATIVE PROGRAMMING
// const results = ref(products);

// function searchProducts() {
//   results.value = products.filter((product) =>
//     product.title.toLowerCase().includes(search.value.toLowerCase())
//   );
// }
// watch(search,searchProducts);
// FUNCTIONAL PROGRAMMING
// const results = computed(() => products.filter((product) => product.title.toLowerCase().includes(search.value.toLowerCase())));
</script>

<template>
  <div>
    <div class="control">
      <input
        type="text"
        class="input"
        placeholder="Search"
        v-model="search"
      />
    </div>
    <div class="products">
      <router-link
        class="product"
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        v-show="product.title.toLowerCase().includes(search.toLowerCase())"
      >
        <div class="product-name">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="product-info">
          <p>{{ product.title }}</p>
          <p>{{ product.description }}</p>
          <button class="button is-small is-primary is-rounded add" :class="{ 'isLoading': isLoading}" @click.prevent="addToCart(product)">+</button>
          <p class="price">
            <span class="currency">$</span>
            <span class="amount">{{ product.price }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  background-color: aliceblue;
}
.add {
  float: right;
}
.is-disabled {
  pointer-events: none;
  opacity: .7;
}
.product {
  flex-basis: 10em;
  margin: 1em;
  padding: 1em;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
}
.product-info {
  font-size: small;
}
.price {
  display: flex;
  align-items: flex-start;
}
.amount {
  font-size: x-large;
}
</style>
