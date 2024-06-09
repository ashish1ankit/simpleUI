const fs=require('fs');
const http=require('http');//give networkig capabilities
const url = require('url');
const slugify=require('slugify');//change anme oif end of url



const replaceTemplate=require('./modules/replaceTemplate');

////////////////////////////////////////////
///Files

// const read=fs.readFileSync('./file.txt','utf-8');
// const readFile=fs.readFile('./file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);throw err;}
// console.log(`Read Success in file: ${data}`);
// return data;
// });
// const riteData=`The file readed was: ${readFile}.\n on the time stamp: ${Date.now()}`;
// console.log(riteData);
// // fs.writeFileSync('./neFile.txt',riteData);
// fs.writeFile('./neFile.txt',riteData,(err,data)=>{
//     console.log(`Write Success: ${data}`);
//     });
// console.log("Later in code..............");
// fs.writeFile('./neFile.txt',riteData,(err,data)=>{
//     console.log("Write Success again 😂");
//     });


///////////////////////////////////






const tempOverview=fs.readFileSync('./templates/template-overview.html','utf-8');
const tempCard=fs.readFileSync('./templates/template-card.html','utf-8');
const tempProduct=fs.readFileSync('./templates/template-product.html','utf-8');




const data=fs.readFileSync('./dev-data/data.json','utf-8');
    const dataObj= JSON.parse(data);//data object is array of objects

const sluges=dataObj.map(el=>slugify(el.productName,{lower:true}));//creating a loist oif sluges


// console.log(sluges);


const server=http.createServer((req,res)=>{//req and response in callback funcation
    // console.log(req.url);
    // console.log(url.parse(req.url,true));//parsing the proudct?id=0 parts from the url when its true
    const {query,pathname}= url.parse(req.url,true);
    // const pathName=req.url;
// console.log(query);
// console.log(pathname.split("/")[2]);

const serverSlug=pathname.split("/")[2];
// console.log(sluges.includes(serverSLug));
    //overview page
    if(pathname==='/overview'||pathname==='/'){
        res.writeHead(200,{'Content-type': 'text/html'});

        const cardHtml=dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
        // console.log(cardHtml);
        const output=tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml);
        res.end(output);


       



        //product page
    }else if(sluges.includes(serverSlug)){
        // console.log(query);
        res.writeHead(200,{'Content-type': 'text/html'});
        const product=dataObj.find(data=>data.slugName===serverSlug);
        // console.log(product);
        const output=replaceTemplate(tempProduct,product);
        res.end(output);



        // api
    }else if(pathname==='/api'){
        res.writeHead(200,{'Content-type': 'application/json'});//status coder and conette n type
        res.end(data);






       //Not foubnd
    } else{
        res.writeHead(404,{//status code and headers
            'Content-Type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('Page not found!!');
    }
    // console.log(req);
    // res.end('Hello from the server!!');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is listening request on port 8000');
});