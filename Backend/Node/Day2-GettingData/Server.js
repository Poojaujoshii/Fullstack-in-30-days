import http from "http";
import fs from "fs"

function collectBody(req) {
  return new Promise(resolve => {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => resolve(body));
  });
}
const app = http.createServer((req,res)=>{
    const {method,url} = req;
    console.log(method,url);
    
    if(method == "GET" && url == "/"){
        let data = fs.readFileSync("./Home.html","utf-8");
        res.write(data);
        res.end();
    }else if(method == "GET" && url == "/home.css"){
        let data = fs.readFileSync("./Home.css","utf-8")
        res.write(data)
        res.end()
    }
    else if(method == "POST" && url == "/post"){
        req.on("data",(data)=>{
           let details = JSON.parse(data);
           console.log(data);
            let creds = fs.readFileSync("./Login.json","utf-8")?JSON.parse(fs.readFileSync("./Login.json","utf-8")):[]
            creds.push(data);
            fs.writeFileSync("./Login.json",JSON.stringify(creds));
            res.end(JSON.stringify({message:"Data Received"}))  
        })
    }
    
})
app.listen(4040,()=>{
    console.log("The Server is running in http://localhost:4040");
})