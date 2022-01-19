const { getCaryByIdFromDB, clearCartByID, addProductToCartDB } = require("../mysql/cart");

const getCartById = async (id) => {
  const results = await getCaryByIdFromDB(id);
  if (results.length === 0) {
    return "0 items in the cart";
  }
  return results;
};

const clearCart = async (id) => {
  await clearCartByID(id);
};

const addProductToCart = async (productId, userId) => {
  await addProductToCartDB(productId, userId);
};

module.exports = { getCartById, clearCart, addProductToCart };
