const fs= require('fs');
const server=require('http').createServer();

server.on("request",(req,res) => {
//    sOL 1
    // fs.readFile("./test-file.txt",(err,data)=>{
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listen to request.........");
});