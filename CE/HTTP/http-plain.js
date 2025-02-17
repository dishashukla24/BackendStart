const http = require('http');
const fs= require("fs/promises");
const server = http.createServer(async(req,res) =>
{   
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write("<H1> Hello Worlddddd! </H1>");
    const data =  await fs.readFile("./home.html",'utf-8');
    res.end(data);

});
PORT=3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})