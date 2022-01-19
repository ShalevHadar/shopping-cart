const dbConnection = require("./client");

const addProductToDB = async (data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO product values (null, "${data.title}", ${data.price}, "${data.description}");`,
      (err, results, field) => {
        if (err) {
          if (err.errno === 1062) {
            reject(new Error(`Duplicate entry for key ${data.title}`));
          } else {
            reject(err);
          }
          reject(err);
        } else {
          resolve(true);
        }
      }
    );
  });
};

const getAllProductsFromDB = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * from product`, (err, results, field) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteProductFromDB = async (productId) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `delete from product where product_id = ${productId};`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No products with this id: ${productId}`));
        } else {
          resolve(results);
        }
      }
    );
  });
};

const editProductByID = async (data, productId) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `update product set ${data.price ? `price=${data.price} ,` : ""}${
        data.description ? `description="${data.description}" ,` : ""
      } ${
        data.title ? `title="${data.title}"` : ""
      }where product_id = ${productId};`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No products with this id: ${productId}`));
        } else {
          resolve(results);
        }
      }
    );
  });
};

const searchTermInDB = async (term) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `select * from product where title LIKE '%${term}%';`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No products with this id: ${productId}`));
        } else {
          resolve(results);
        }
      }
    );
  });
};

const searchProductByIdInDB = async (productId) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `select * from product where product_id=${productId};`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }
        if (results.affectedRows == 0) {
          reject(new Error(`No products with this id: ${productId}`));
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  addProductToDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  editProductByID,
  searchTermInDB,
  searchProductByIdInDB,
};
