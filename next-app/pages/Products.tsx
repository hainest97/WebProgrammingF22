
import { addProductToCart } from "../stores/cart";
import { isLoading } from "../stores/session";
import { reactive, ref, computed, watch } from "vue";
import { getProducts, type Product } from "../stores/products";
import { RouterLink } from "vue-router";
import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";

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

export default () => {
  return (
  <div>
    <div className="control">
      <input
        type="text"
        className="input"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
    <div className="products">
      <router-link
        className="product"
        v-for="product in products"
        key={product.id}
        to={`/product/${product.id}`}
        v-show="product.title.toLowerCase().includes(search.toLowerCase())"
      >
        <div className="product-name">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-info">
          <p>{{ product.title }}</p>
          <p>{{ product.description }}</p>
          <button className="button is-small is-primary is-rounded add" className={{ 'isLoading': isLoading}} @click.prevent="addToCart(product)">+</button>
          <p className="price">
            <span className="currency">$</span>
            <span className="amount">{{ product.price }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
  )
}
