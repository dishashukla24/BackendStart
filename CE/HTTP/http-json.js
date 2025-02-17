const http =require('http');
const fs=require('fs/promises');
const server= http.createServer(async(req,res)=>{
res.writeHead(200,{'content-Type': 'application/json'});
const filedata = await fs.readFile("./aa.json", "utf-8")

// const newdata= users.map((users)=>{
//     return users.name
// });

const parsedata= JSON.parse(filedata);
res.end(JSON.stringify(parsedata));
// res.end(filedata)

});
PORT=3000
server.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
});