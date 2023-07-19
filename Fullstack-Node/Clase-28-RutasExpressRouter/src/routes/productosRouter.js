const express = require("express");
const router = express.Router();



router.post("/create", (req, res) => {
    const body = req.body;
    console.log(req.body);
    res.send("Producto creado " + req.body.nombre);
})


router.put("/update", (req, res) => {
    console.log(req.body);
    res.send("producto modificado " + req.body.nombre);
})



module.exports = router;