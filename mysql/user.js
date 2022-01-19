const dbConnection = require("./client");

const registerUserToDB = async (data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO user values (null,'${data.username}','${data.password}', '${data.role}');`,
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
  registerUserToDB,
};
