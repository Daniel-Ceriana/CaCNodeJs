const path = require('path')
const notFound = (req, res, next) => {
    // res.status(404).send("Recurso no encontrado");
    res.status(404).sendFile(path.join(__dirname, "../../public/404.html"));
    // next();
}

module.exports = notFound