<script setup lang="ts">

  import { reactive } from 'vue'

  const items = [
    { name: 'Shoes', cost: 20},
    { name: 'Socks', cost: 10},
    { name: 'Belt',cost:40}
  ]
  const cart = reactive([
    { name: 'Shoes', cost: 20, qty:1},
    { name: 'Socks', cost: 10, qty:1},
  ])

  function addToCart(item: any){
    cart.push({...item, qty:1})
  }

</script>

<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>

    <ul>
      <li v-for="item in items" :key="item.name" @click="addToCart(item)">
        <h3>{{item.name}}</h3>
        <em>{{item.cost}}</em>
      </li>
    </ul>
    <h2 class="title is-2">Cart</h2>
    <table class="table is-bordered">
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
      <tr v-for="item in cart" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.cost}}</td>
        <td><input v-model="item.qty" /></td>
        <td>${{item.cost * item.qty}}</td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>{{cart.reduce((total,item) => total + item.cost * item.qty,0)}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  ul { 
    display: flex;
    li {
      width: 200px;
      padding: 5px;
      margin: 5px;
    }
  }
}
</style>
