const {
  addProductToDB,
  getAllProductsFromDB,
  deleteProductFromDB,
} = require("../mysql/product");

const addProduct = async (productData) => {
  await addProductToDB(productData);
};

const getAllProducts = async () => {
  const data = await getAllProductsFromDB();
  return data;
};

const deleteProduct = async (productId) => {
  await deleteProductFromDB(productId);
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
};
