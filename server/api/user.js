const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

// ../users/
router.get("/", async (req, res) => {
    const data = await User.find()
    res.json({ "users": data })
})

router.post("/login", async (req, res) => {
    let { username, password } = req.body
    const user = new User({ username, password })

    req.login(user, (err) => {
        if (err) {
            res.send(err)
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send(user).status(200)
            })
        }
    })
})

router.post("/register", async (req, res) => {
    let { username, email, password, confirmPassword } = req.body

    if (password !== confirmPassword) {
        res.send("Passwords don't match");
        return;
    }

    User.register({ username, email }, password, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            User.authenticate("local")(req, res, () => {
                res.send(user).status(204);
            })
        }
    })
})

router.post("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send("Successfully logged out")
        }
    });
})

router.get("/:id", async (req, res) => {
    const data = await User.findOne({ _id: req.params.id }, )
    console.log(data);
    res.json(data)
})


module.exports = router;