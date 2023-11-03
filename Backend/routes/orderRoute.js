const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51O7KJeSIFQNRHGYfPTGkU9AolWSjnyoTfBxGn1MWiAjmMUVmBHneJPLuh8wclzTF89LGGIlounPanuKACmZvc17C00xlUXqf3D"
);

router.post("/placeorder", async (req, res) => {
  const { token, calculateSubtotal, currentUser, cartState } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log("calculateSubtotal:", calculateSubtotal);

    const amountInPaise = calculateSubtotal * 100;

    const payment = await stripe.paymentIntents.create(
      {
        amount: amountInPaise,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        
      },

      {
        idempotencyKey: uuidv4(),
      }
    );

    console.log("payment", payment);

    if (payment) {
      res.send("Payment Done");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    console.error("Request failed with status code 400:", error);
    if (error.response) {
      console.error("Server Response:", error.response.data);
    }
    return res
      .status(400)
      .json({ message: "Bad Request", error: error.message });
  }
});

module.exports = router;
