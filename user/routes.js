const express = require("express");
const { registerUser } = require("./user-service");
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
    console.log(data);
    const user = await ValidateUser(data);
    
    res.status(200).json({ message: "Success, user can login" });
  } catch (error) {
    res.status(401).json({ message: "Error, user is unauthorized" });
  }
});

module.exports = router;
