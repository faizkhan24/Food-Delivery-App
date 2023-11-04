const express = require("express")
const router = express.Router();
const stripe = require("stripe")("sk_test_51O7KJeSIFQNRHGYfPTGkU9AolWSjnyoTfBxGn1MWiAjmMUVmBHneJPLuh8wclzTF89LGGIlounPanuKACmZvc17C00xlUXqf3D")

router.post("/placeorder",(req , res)=>{

    const {token,calculateSubtotal, currentUser,  cartState} = req.body
    
});

module.exports = router;