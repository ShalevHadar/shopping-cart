const { registerUserToDB, getUserByUsername } = require("../mysql/user");

const registerUser = async (data) => {
  if (!data.username || !data.password) {
    throw new Error("Error, cant create user with empty fields");
  }
  await registerUserToDB(data);
};

const ValidateUser = async (data) => {
  if (!data.username || !data.password) {
    throw new Error("Error, cant preform login");
  }
  const user = await getUserByUsername(data.username);
  if (!user) {
    throw new Error("Username does not exist");
  }
  if (user.password === data.password) {
    return { user: user.username, role: user.role, id: user.user_id };
  } else {
    throw new Error("Password isn't correct");
  }
};

module.exports = {
  registerUser,
  ValidateUser,
};
