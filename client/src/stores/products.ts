// import data from '../data/products.json';

import myFetch from "@/services/myfetch";

export function getProducts(){
  return myFetch<ListEnvelope<Product>>('products');
}

export function getProduct(id: number) {
  return myFetch<Product>(`products/${id}`);
  // return getProducts().then(x=>x.find((product) => product.id === id));
}

// export function deleteProduct(id: number) {
//   data.products = data.products.filter((product) => product.id !== id);
// }

export interface ListEnvelope<T> {
  products: T[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

