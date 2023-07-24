const router = require("express").Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
    const data = await Item.find()
    res.json({ "items": data })
})

router.post("/", async (req, res) => {
    try {
        const newItem = await Item.create({ text: req.body.itemText, completed: false});
        res.send(newItem).status(204);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await Item.deleteOne({ _id: req.params.id })
        res.send("Successfully Deleted Item")
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;