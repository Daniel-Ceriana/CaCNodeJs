const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.writeHead(200, {
        'Content-type': 'text/html; charset=UTF-8',
    })

    res.end("<h1> Hola server Node.js </h1> <p>Parrafo</p>");
});


server.listen(3000, () => console.log('http://localhost:3000'));