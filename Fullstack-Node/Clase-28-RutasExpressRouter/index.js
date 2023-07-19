const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const productosRouter = require('./src/routes/productosRouter');
const productosAPIRouter = require("./src/routes/api/productosAPIRouter");
const methodOverride = require("method-override");

const PORT = 3000;
//aca el orden importa
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', mainRoutes);

app.use(methodOverride('_method'));

app.use(express.static('./src/public'));

app.use("/productos", productosRouter);

app.use("/api/productos", productosAPIRouter);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));