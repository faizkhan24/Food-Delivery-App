const express = require("express");
const router = express.Router();
const Dishes = require("../Models/dishesModel");

router.get("/getalldishes", async (req, res) => {
    try {
        const dishes = await Dishes.find({});
        res.send(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
