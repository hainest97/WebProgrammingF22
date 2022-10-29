<script setup lang="ts">
import FlyoutPanel from "./icons/FlyoutPanel.vue";
import cart, {} from '../stores/cart'

const { isOpen } = defineProps<{
  isOpen: boolean;
}>();

function closeCart() {}
function checkout() {}
</script>

<template>
  <FlyoutPanel :is-open="isOpen">
    <template #header>
      <h3 class="title is-3">Cart</h3>
    </template>
    <div>
      <div class="fly-out-body">
        <div v-if="!cart">
          <p>Your cart is empty</p>
        </div>
        <div v-else>
          <div v-for="item in cart" :key="item.product.id" class="box">
            <figure class="image is-96x96">
              <img :src="item.product.thumbnail" :alt="item.product.title" />
            </figure>
            <div>
              <b>{{ item.product.title }}</b>
              <div class="price">${{ item.product.price }}</div>
              <div>x {{item.quantity}} = {{item.quantity * item.product.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fly-out-footer">
        <button class="button is-success" @click="checkout">Checkout</button>
      </div>
    </div>
  </FlyoutPanel>
</template>

<style scoped>
  .box{
    text-align: center;
  }
  .image {
    border: 1px solid #000;
    margin: auto;
  }
  .price{
    font-size: 1em;
  }
</style>
