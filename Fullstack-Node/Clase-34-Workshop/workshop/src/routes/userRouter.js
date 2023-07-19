const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");


router.get('/', controller.index);
//lo hacemos con show porque es mas genrealizado
router.get('/:id', controller.show);

router.post('/', controller.store);






module.exports = router;