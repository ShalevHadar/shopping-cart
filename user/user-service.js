const { registerUserToDB, getUserByUsername } = require("../mysql/user");

const registerUser = async (data) => {
  await registerUserToDB(data);
};

const ValidateUser = async (data) => {
  const user = await getUserByUsername(data.username);
  if (!user) {
    throw new Error("Username does not exist");
  }
  if (user.password === data.password) {
    return { user: user.username, role: user.role };
  } else {
    throw new Error("Password isn't correct");
  }
};

module.exports = {
  registerUser,
  ValidateUser,
};
