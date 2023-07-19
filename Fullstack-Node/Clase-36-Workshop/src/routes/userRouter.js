const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

//para manejo de imagenes en forms
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/uploads"),
    filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});
//se puede modificar el nombre del file que sube el usuario para que sea mas amigable con algun slug
const uploadFile = multer({ storage });


router.get("/create", controller.create);
router.post("/", uploadFile.single("image"), controller.store);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;