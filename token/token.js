const jwt = require("jsonwebtoken");

const createToken = (userData) => {
  const { user, role, id } = userData;
  const secret = process.env.TOKEN_KEY;
  const token = jwt.sign({ user, role, id }, secret, {
    expiresIn: "2h",
  });
  return `Bearer ${token}`;
};

module.exports = {
  createToken,
};
