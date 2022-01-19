const {
  addProductToDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  editProductByID,
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

const editProduct = async (data, productId) => {
  if (data.price) {
    if (isNaN(data.price)) {
      throw new Error("price is not a number");
    }
  }

  await editProductByID(data, productId);
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
};
