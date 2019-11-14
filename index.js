const fs = require('fs');

module.exports.handler = function(req, res, context) {
    fs.readFile('data.txt', 'utf8', function(err, data) {
        const lines = data.split('\n');
        number = Math.floor(Math.random() * lines.length);
        result = lines[number];
        // result = result.replace(/，/g, '，<br>');
        // console.log(result);

        fs.readFile('index.html', 'utf8', function(err, originHtml) {
            const html = originHtml.replace(/to be replaced/, result);
            res.setStatusCode(200);
            res.setHeader('content-type', 'text/html');
            res.send(html);
        });
    });
};
const fs = require('fs');

module.exports.handler = function(req, res, context) {
    fs.readFile('index.html', 'utf8', function(err, html) {
        res.setStatusCode(200);
        res.setHeader('content-type', 'text/html');
        res.send(html);
    });
};
