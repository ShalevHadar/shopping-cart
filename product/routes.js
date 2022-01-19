const express = require("express");
const { validateRole } = require("../role/validate-role-service");
const { verifyToken } = require("../token/verify-token");
const {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
  searchForProductByTerm,
} = require("./product-service");
const router = express.Router();

router.post("/api/product", verifyToken, async (req, res, next) => {
  try {
    const productData = req.body;
    await validateRole(req.user.role, ["admin", "editor"]);
    await addProduct(productData);
    res.status(200).json({ message: "Product was successfully added" });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.get("/api/product", verifyToken, async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ message: "Success, found all products", products });
  } catch (error) {
    res.status(404).json({ message: "Cannot find any items" });
  }
});

router.delete("/api/product/:id", verifyToken, async (req, res, next) => {
  try {
    const productId = req.params.id;
    await validateRole(req.user.role, ["admin"]);
    await deleteProduct(productId);
    res.status(200).json({ message: "Success, product was deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/api/product/:id", verifyToken, async (req, res, next) => {
  try {
    const data = req.body;
    const productId = req.params.id;
    await validateRole(req.user.role, ["admin", "editor"]);
    await editProduct(data, productId);
    res.status(200).json({ message: "Success, product was updated" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
});

router.get("/api/product/term", verifyToken, async (req, res, next) => {
  try {
    const searchTerm = req.body.term;
    const results = await searchForProductByTerm(searchTerm);
    res.status(200).json({ message: "Success, found all results", results });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
