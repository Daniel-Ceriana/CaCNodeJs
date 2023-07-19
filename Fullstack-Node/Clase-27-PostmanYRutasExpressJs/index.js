const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 3000;



app.get('/', (req, res) => {
    res.send("Hola express");
})

app.get("/personajes", (req, res) => {
    const buffer = fs.readFileSync(__dirname + "/data/personajes.json");
    // res.send("Listado de personajes");

    const personajes = JSON.parse(buffer);
    //solo filtra por status - alive o lo que sea que busquen. si se pone ?status= "" (nada) devuelve un [].
    //Faltan otras validaciones
    if (req.query.status) {
        const filtrados = personajes.filter(personaje => personaje.status.toLowerCase() == req.query.status.toLowerCase());
        res.send(filtrados);
    } else {
        res.send(personajes);
    }


    // res.send(buffer); Devuelve el buffer. ReadFileSync no sabe lo que es un json, solo lee el archivo como texto
})

app.get("/personajes/:id", (req, res) => {
    const buffer = fs.readFileSync(__dirname + "/data/personajes.json");
    const personajes = JSON.parse(buffer);
    // console.log(req.params);
    const personaje = personajes.find(personaje => personaje.id == req.params.id);
    console.log(personaje);
    res.send(personaje);

})



app.post("/personajes", (req, res) => {
    res.send('Crear personaje');
})






app.listen(PORT), () => {
    //simplemente para nosotros saber que esta andando
    console.log(`http://localhost:${PORT}`);
}