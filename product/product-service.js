const {
  addProductToDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  editProductByID,
  searchTermInDB,
  searchProductByIdInDB,
} = require("../mysql/product");

const addProduct = async (productData) => {
  if (!productData.title || !productData.price || !productData.description) {
    throw new Error("Can't add product with empty field");
  }
  await addProductToDB(productData);
};

const getAllProducts = async () => {
  const data = await getAllProductsFromDB();
  if (!data) {
    throw new Error("Couldn't find any products");
  }
  return data;
};

const deleteProduct = async (productId) => {
  await deleteProductFromDB(productId);
};

const editProduct = async (data, productId) => {
  if (!data || !productId) {
    throw new Error("Can't edit product with empty field");
  }
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
  if (results.length === 0) {
    return `There's aren't any items matching this term '${term}'`;
  }
  return results;
};

const searchProductByID = async (productId) => {
  const product = await searchProductByIdInDB(productId);
  if (product.length === 0) {
    return `There's aren't any items matching this id '${productId}'`;
  }
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
