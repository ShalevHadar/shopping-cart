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

const getUserByUsername = async (username) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM user WHERE username = '${username}' `,
      (err, results, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

module.exports = {
  registerUserToDB,
  getUserByUsername,
};
