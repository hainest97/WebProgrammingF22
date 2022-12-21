const { getProduct } = require('./products');
//Cart Item = { id:1, quantity:2, productid:1, userid: tim@t.com}
const list = [];

const { connect } = require("./mongo");

const COLLECTION_NAME = 'cart';

async function collection() {
  const client = await connect();
  return client.db("chopiphy").collection(COLLECTION_NAME);
  
}
/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const add = async (userId, productId, quantity) => {
  const db = await collection();
  let cartItem = await db.findOne({userId, productId});
  // let cartItem = list.find((cartItem) => cartItem.userId === userId && cartItem.productId === productId)
  if (cartItem) {
    cartItem.quantity += +quantity;
    db.updateOne({ userId, productId}, cartItem);
  } else {
    cartItem = { id: list.length + 1, quantity: +quantity, productId, userId };
    list.push(cartItem);
    await db.insertOne({cartItem})
  };
  return {...cartItem, product: getProduct(productId)};
}

const get = async (userId) => {
  const db = await collection();
  const data = await db.find({userId}).toArray();
  return data
    // .filter((cartItem) => cartItem.userId === userId)
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
const update = async (userId, productId, quantity) => {
  const db = await collection();
  const index = list.findIndex((cartItem) => cartItem.userId === userId && cartItem.productId === productId);
  if (index !== -1) {
    if (quantity === 0) {
      db.deleteOne({userId,productId});
      list.splice(index, 1);
      return "null";
    } else {
      let cartItem = db.findOne({userId,productId});
      list[index].quantity = quantity;
      db.updateOne({userId,productId},cartItem);
    }
  } else {
    throw new Error('Cart item not found');
  }
  return {...list[index], product: getProduct(productId)};
}

module.exports = { add, get, update };