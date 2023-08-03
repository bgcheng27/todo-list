const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

// ../users/
router.post("/login", async (req, res) => {
    let { username, password } = req.body
    const user = await User.findOne({ username })

    req.login(user, (err) => {
        if (err) {
            res.send(err).status(401)
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send(user).status(201)
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

module.exports = router;