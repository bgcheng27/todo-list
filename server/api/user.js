const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 15;

router.get("/", async (req, res) => {
    const data = await User.find()
    res.json({ "users": data })
})

router.post("/", async (req, res) => {
    let username = req.body.usernameInput
    let email = req.body.emailInput
    let password = req.body.passwordInput
    let confirm = req.body.confirmInput

    if (password !== confirm) {
        res.send("Passwords don't match");
        return;
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
        const newUser = await User.create({ username, email, password: hash })
        res.send(newUser).status(204)
    })
    
})

router.get("/:id", async (req, res) => {
    const data = await User.findOne({ _id: req.params.id }, )

    console.log(data);

    res.json(data)
})


module.exports = router;