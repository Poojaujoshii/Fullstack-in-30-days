import http from "http"
import fs from "fs"

const app = http.createServer((req,res)=>{
    const {url,method} = req;
    if(method == "GET" && url == "/" ){
        let data = fs.readFileSync("./Home.html","utf-8")
        res.write(data);
        res.end();
    }
    else if(method == "GET" && url == "/home.css" ){
        let data = fs.readFileSync("./Home.css","utf-8")
        res.write(data);
        res.end();
    }
    else if(method == "GET" && url == "/tiger.jpg" ){
        let data = fs.readFileSync("./Assets/download.jpg","utf-8")
        res.write(data);
        res.end();
    }
})

app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000");
    
})