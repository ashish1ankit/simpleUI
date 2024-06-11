const EventEmiter=require('events');
const http=require('http');


class Sales extends EventEmiter{//EventEmiter is super class
    constructor(){
        super();//to get access to all variables of super class
    }
}

const myEmiter= new Sales();

// const myEmiter= new EventEmiter();

myEmiter.on('newSale',() => {
    console.log('There was new sale!');
});
myEmiter.on('newSale',() => {
    console.log('Customer was unknown!!');
});

myEmiter.on('newSale',stock=>{
    console.log(`There are ${stock} ietms in stock!!`);
});
myEmiter.emit('newSale',9);


const server=http.createServer();
server.on("request",(req,res)=>{
    console.log("request received!!");
    res.end("Request received!");
});
// server.on("request",(req,res)=>{
//     res.end("Another request received!");
// });
server.on("close",()=>{
    console.log("Server closed");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Waiting foir requests...........");
});