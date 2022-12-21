// import data from '../data/products.json';

import  api  from "../services/myfetch";

export function getProducts(){
  return api<ListEnvelope<Product>>('products');
}

export function getProduct(id: number) {
  return api<Product>(`products/${id}`);
}


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

