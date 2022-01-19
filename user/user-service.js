const { registerUserToDB } = require("../mysql/user");

const registerUser = async (data) => {
  await registerUserToDB(data);
};

module.exports = {
  registerUser,
};
