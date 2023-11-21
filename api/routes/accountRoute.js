const express = require("express");
const { verifyToken } = require("../utils/verifyUser");
const { totalAmount, addAmount } = require("../controller/accountController");
const router = express.Router();
router.post("/total-amount", totalAmount);
router.post("/add-amount/:id", addAmount);
module.exports = router;
