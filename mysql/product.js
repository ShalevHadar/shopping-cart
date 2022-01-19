const dbConnection = require("./client");

const addProductToDB = async (data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO product values (null, "${data.title}", ${data.price}, "${data.description}");`,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      }
    );
  });
};

module.exports = {
  addProductToDB,
};
