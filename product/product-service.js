const {
  addProductToDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  editProductByID,
  searchTermInDB,
  searchProductByIdInDB,
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

const searchForProductByTerm = async (term) => {
  if (!term) {
    throw new Error("Term is empty, please enter a valid search term");
  }
  const results = await searchTermInDB(term);
  return results;
};

const searchProductByID = async (productId) => {
  const product = await searchProductByIdInDB(productId);
  return product;
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
  searchForProductByTerm,
  searchProductByID,
};
