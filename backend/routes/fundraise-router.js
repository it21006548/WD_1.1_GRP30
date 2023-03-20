const express = require("express");
const Fundraise = require("../model/Fundraise");
const router = express.Router();
const fundraiseController= require("../controllers/fundraise-controller");

router.get("/", async (req, res, next) => {
    // This route will provide all of the fundraises
    let fundraises;
    try {
        fundraises = await Fundraise.find();
    } catch (err) {
        console.log(err);
    }

    if (!fundraises) {
        return res.status(404).json({ message: "No products found"});
    }
    return res.status(200).json({ fundraises });
});

router.get("/", fundraiseController.getAllFundraise);
router.post("/",fundraiseController.addFundraise);
router.get("/:id",fundraiseController.getById);
router.put("/:id",fundraiseController.updateFundraise);
router.delete("/:id",fundraiseController.deleteFundraise);

module.exports = router;  