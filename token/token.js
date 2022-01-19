const jwt = require("jsonwebtoken");

const createToken = (userData) => {
  const { user, role } = userData;
  const secret = process.env.TOKEN_KEY;
  const token = jwt.sign({ user, role }, secret, {
    expiresIn: "2h",
  });
  return token;
};

module.exports = {
  createToken,
};
