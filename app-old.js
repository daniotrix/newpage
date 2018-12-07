const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Cotent-Type': 'application/json' })
    let salida = {
            nombre: 'Daniel',
            edad: '26',
            url: req.url
        }
        // res.write('hola mundo');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');