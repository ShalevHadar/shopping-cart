const express = require("express");
const { verifyToken } = require("../token/verify-token");
const { getCartById, clearCart, addProductToCart } = require("./cart-service");
const router = express.Router();

router.get("/api/cart", verifyToken, async (req, res, next) => {
  try {
    const id = req.user.id;
    const results = await getCartById(id);
    res.status(200).json({ message: "Success ", results });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/api/cart", verifyToken, async (req, res, next) => {
  try {
    const id = req.user.id;
    await clearCart(id);
    res.status(200).json({ message: "Success, cart cleared" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/api/cart/:id", verifyToken, async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    await addProductToCart(productId, userId);
    res
      .status(200)
      .json({ message: "Success, product was added to your cart" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
