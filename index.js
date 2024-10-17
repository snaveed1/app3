const http = require('http');

const hostname = '0.0.0.0';
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>App3</title>
            <style>
                body {
                    background-color: lightyellow;
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: flex-end;
                    align-items: start;
                    font-size: 2em;
                    font-weight: bold;
                    text-align: right;
                }
                div {
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <div>Hope you are doing well from app3</div>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
