const express = require("express");
const router = express.Router();

// body parser

    const bodyParser = require("body-parser");
    router.use(bodyParser.urlencoded({extended: false}));
    router.use(bodyParser.json());

// routes

router.get("/", (req, res) => {
res.render("home")
});

router.get("/register", (req, res) => {
res.render("register")
});

router.post("/registered", (req, res) => {

res.send(`Product: ${req.body.product}<br> amount: ${req.body.amount} <br> actual value: ${req.body.value}`)
});

module.exports = router;