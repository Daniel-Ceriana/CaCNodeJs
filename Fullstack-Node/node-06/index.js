require('donenv').config();

const methodOverride = require("method-override");
const express = require("express");
const app = express();
const path = require('path')



app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require("./src/routes/mainRouter");
app.use("/", mainRouter);

const productosRouter = require("./src/routes/productosRouter");
app.use("/productos", productosRouter);


const productosAPIRouter = require("./src/routes/api/productosAPIRouter");
app.use("/api/productos", productosAPIRouter);


const middlewareNotFound = require('./src/middlewares/notFound')
app.use(middlewareNotFound)
    // const PORT = 3000 || process.env.PORT;
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));