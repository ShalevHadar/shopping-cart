const dbConnection = require("./client");

const getCaryByIdFromDB = async (id) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `select * from cart inner join product on cart.product_id = product.product_id where user_id = ${id};`,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const clearCartByID = async (id) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `delete from cart where user_id = ${id};`,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const addProductToCartDB = async (productId, userId) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `insert into cart values (${productId},${userId});`,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = { getCaryByIdFromDB, clearCartByID, addProductToCartDB };
