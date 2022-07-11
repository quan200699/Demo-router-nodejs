const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
let server = http.createServer((req, res) => {
    // let parseUrl = url.parse(req.url, true);
    // let queryStringBuilder = parseUrl.query;
    // if (queryStringBuilder.name){
    //     let name = queryStringBuilder.name;
    //     res.write(`Hello ${name}!`);
    // }
    // res.end();
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', data => {
        buffer += decoder.write(data);
    })
    req.on('end', () => {
        res.end();
        console.log(buffer);
    })
});
server.listen(3000, () => {
    console.log('Running port 3000!');
})
