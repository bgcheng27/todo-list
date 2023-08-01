const router = require("express").Router();
const Item = require("../models/Item");

// .../items/
router.get("/", async (req, res) => {
    const data = await Item.find();
    res.json({ "items": data });
})

router.post("/", async (req, res) => {
    try {
        const newItem = await Item.create({ text: req.body.itemText, completed: false });
        res.send(newItem).status(204);
    } catch (error) {
        res.send(error);
    }
})

router.patch("/:id", async (req, res) => {
    const itemToUpdate = await Item.updateOne(
        { _id: req.params.id }, 
        { $set: { completed: req.body.checked === "true" } }
    );
    res.send(itemToUpdate).status(200);
})

router.delete("/:id", async (req, res) => {
    try {
        const itemToDelete = await Item.deleteOne({ _id: req.params.id });
        res.send(itemToDelete).status(200);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;