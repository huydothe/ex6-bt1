const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const port=8080;

let user=[];

const server=http.createServer((req, res)=>{
    if(req.method === 'GET'){
        fs.readFile('./src/demo.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Text':'text/html'});
                res.end('1');
            }
            res.writeHead(200,{'Content-Text':'text/html'});
            res.write(data);
            res.end();
        })
    }

    let form = new formidable.IncomingForm()
    form.parse(req,function (err,fields){
        let userInfo={
            Name:fields.personName,
            Email:fields.email,
            Phone:fields.phone,
            Address:fields.address,
        }
        user.push(userInfo);
        console.log(user)
    })
})

server.listen(port, function (){
    console.log('Server is running at http://localhost:8080')
});