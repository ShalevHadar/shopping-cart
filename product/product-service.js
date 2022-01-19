const { addProductToDB } = require("../mysql/product");

const addProduct = async (productData) => {
  await addProductToDB(productData);
};

module.exports = {
  addProduct,
};
