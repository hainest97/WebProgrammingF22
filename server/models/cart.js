const { getProduct } = require('./products');
//Cart Item = { id:1, quantity:2, productid:1, userid: tim@t.com}
const list = [];

/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const add = (userId, productId, quantity) => {
  let cartItem = list.find((cartItem) => cartItem.userId === userId && cartItem.productId === productId)
  if (cartItem) {
    cartItem.quantity += +quantity;
  } else {
    cartItem = { id: list.length + 1, quantity: +quantity, productId, userId };
    list.push(cartItem);
  };
  return {...cartItem, product: getProduct(productId)};
}

const get = (userId) => {
  return list
    .filter((cartItem) => cartItem.userId === userId)
    .map((cartItem) => ({
      ...cartItem, 
      product: getProduct(cartItem.productId)
}));
}
/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const update = (userId, productId, quantity) => {
  const index = list.findIndex((cartItem) => cartItem.userId === userId && cartItem.productId === productId);
  if (index !== -1) {
    if (quantity === 0) {
      list.splice(index, 1);
    } else {
      list[index].quantity = quantity;
    }
  } else {
    throw new Error('Cart item not found');
  }
  return index;
}

module.exports = { add, get, update };