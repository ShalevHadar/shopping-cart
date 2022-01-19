const { registerUserToDB, getUserByUsername } = require("../mysql/user");

const registerUser = async (data) => {
  await registerUserToDB(data);
};

const ValidateUser = async (data) => {
  const user = await getUserByUsername(data.username);
  return { user: user.username, role: user.role };
};

module.exports = {
  registerUser,
  ValidateUser,
};
