const express = require("express");
const { validateRole } = require("../role/validate-role-service");
const { verifyToken } = require("../token/verify-token");
const { addProduct } = require("./product-service");
const router = express.Router();

router.post("/api/product", verifyToken, async (req, res, next) => {
  try {
    const productData = req.body;
    await validateRole(req.user.role, ["admin", "editor"]);
    await addProduct(productData);
    res.status(200).json({ message: "Product was successfully added" });
  } catch (error) {
    res.status(404).json({ message: "Cannot add this item" });
  }
});

module.exports = router;
