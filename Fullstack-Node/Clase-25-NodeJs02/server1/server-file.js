const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const file = fs.readFileSync(__dirname + "/index.html");
    res.writeHead(200, {
        'Content-type': 'text/html; charset=UTF-8',
    })

    res.end(file);
});


server.listen(3000, () => console.log('http://localhost:3000'));