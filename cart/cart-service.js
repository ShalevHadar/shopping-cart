const { getCaryByIdFromDB, clearCartByID } = require("../mysql/cart");

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

module.exports = { getCartById, clearCart };
