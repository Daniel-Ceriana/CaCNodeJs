const express = require("express");
const router = express.Router();



router.post("/create", (req, res) => {
    console.log(req.body);
    res.send("Producto creado con API");
})


module.exports = router;