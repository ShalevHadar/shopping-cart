const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "no token, please go buy one at Ikea" });
  }
  const newToken = token.replace("Bearer ", "");

  try {
    const decodedToken = jwt.verify(newToken, process.env.TOKEN_KEY);
    req.user = {
      username: decodedToken.user,
      role: decodedToken.role,
      id: decodedToken.id,
    };
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized token" });
  }
};

module.exports = { verifyToken };
