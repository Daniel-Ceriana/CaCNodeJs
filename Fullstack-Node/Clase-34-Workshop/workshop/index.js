require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.POR || 3000;

app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./src/routes/userRouter"));








app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
})