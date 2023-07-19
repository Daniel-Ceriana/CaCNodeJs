require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.static('public'));


app.set("view engine", "ejs");
app.set("views", "./src/views");






app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./src/routes/userRouter"));

app.get("/", (req, res) => {

    res.render('index', { texto: "Hola EJS" });
})





const PORT = process.env.POR || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
})