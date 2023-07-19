const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {

    res.send("Pagina Principal");
})

router.get("/contacto", (req, res) => {

    // res.send("Pagina de contacto");
    res.sendFile(path.join(__dirname, '../public/contacto.html'))
})


module.exports = router;