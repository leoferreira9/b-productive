const express = require("express");
const router = express.Router();
const listController = require("./controllers/list-controller");

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;