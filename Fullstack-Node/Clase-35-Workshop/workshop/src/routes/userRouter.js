const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get('/create', controller.create);
router.post('/', controller.store);

router.get('/', controller.index);
//lo hacemos con show porque es mas genrealizado
router.get('/:id', controller.show);








module.exports = router;