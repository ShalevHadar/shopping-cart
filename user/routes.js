const express = require("express");
const { createToken } = require("../token/token");
const { registerUser, ValidateUser } = require("./user-service");
const router = express.Router();

router.post("/api/user/register", async (req, res) => {
  try {
    const data = req.body;
    await registerUser(data);
    res.status(201).json({ message: "Success, user created" });
  } catch (error) {
    res.status(409).json({ message: "Conflict, user already exist" });
  }
});

router.post("/api/user/login", async (req, res) => {
  try {
    const data = req.body;

    const user = await ValidateUser(data);
    const token = await createToken(user);
    res.status(200).json({ message: "Success, user can login", token });
  } catch (error) {
    res.status(401).json({ message: "Error, user is unauthorized" });
  }
});

module.exports = router;
