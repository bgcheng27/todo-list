const router = require("express").Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
    const troll = await Item.find()
    console.log(troll);
    res.send(troll);
})

module.exports = router;