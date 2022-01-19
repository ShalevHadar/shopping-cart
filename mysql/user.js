const dbConnection = require("./client");

const registerUserToDB = async (data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO user values (null,'${data.username}','${data.password}', '${data.role}');`,
      (err, results, field) => {
        if (err) {
          if (err.errno === 1265) {
            reject(
              new Error("Please fill in role: `admin`, `editor`, `user` ")
            );
          }
          reject(new Error("Conflict, username exists in DB"));
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
          reject(new Error("Check your username/password - can't find in db"));
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
