const http = require("http");

const server = http.createServer((req, res) => {
    //asdsad
    console.log(req.url, req.method);
    res.writeHead(200, {
        'Content-type': 'text/plain',
    })

    res.end("Hola server Node.js");
});


server.listen(3000, () => console.log('http://localhost:3000'));