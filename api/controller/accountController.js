const Account = require("../model/account");
const errorHandler = require("../utils/error");

const totalAmount = async (req, res, next) => {
  const {
    currentAmount,
    addAmount,
    removeAmount,
    transferAmount,
    remainingAmount,
    withdrawAmount,
  } = req.body;
  try {
    if (currentAmount < 1) {
      return next(errorHandler(401, "Please enter some amount"));
    }
    const newAmount = await Account.create({ currentAmount });
    console.log(totalAmount, "value in amount");
    res.status(201).json({
      success: true,
      newAmount,
      message: "amount added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: "error occured",
    });
  }
};
const addAmount = async (req, res, next) => {
  console.log("hello body");
  const { deposit } = req.body;
  try {
    const previousAmount = await Account.findById(req.params.id);
    console.log(previousAmount);
    const addmoney = await Account.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          currentAmount: deposit + previousAmount,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      addAmount,
      message: "amount added successfully",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  totalAmount,
  addAmount,
};
