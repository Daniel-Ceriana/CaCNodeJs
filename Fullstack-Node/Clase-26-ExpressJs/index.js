const express = require("express");
const res = require("express/lib/response");

const app = express();

const PORT = 3001;

// para determinar que carpeta se puede acceder de forma publica
//cuidado con poner claves y esas cosas
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hola Express");
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/nosotros.html');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));