import http from "http";
import fs, { existsSync } from "fs";


const app = http.createServer((req,res)=>{
    const {method,url} = req;

    console.log(method,url);
    
    if(method == "GET" && url == "/"){
        let data = fs.readFileSync("./Pages/TodoList.html","utf-8");
        res.write(data);
        res.end()
    }
    else if(method == "POST" && url == "/todo"){
        req.on("data",(data)=>{
            let todo = JSON.parse(data.toString());
            console.log(data);
            let allTodo = fs.readFileSync("./Pages/Todo.json","utf-8")?JSON.parse(fs.readFileSync("./Pages/Todo.json","utf-8")):[];
            allTodo.push(todo);
            fs.writeFileSync("./Pages/Todo.json",JSON.stringify(allTodo))
            res.end(JSON.stringify({message:"Data Received"})) 
            
        })
    }
     if (method === "GET" && url === "/alltodo") {
        const list = fs.existsSync("./Pages/Todo.json")? JSON.parse(fs.readFileSync("./Pages/Todo.json", "utf-8")) : [];
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(list));
  }
})



app.listen(5000,()=>{
    console.log("the server is running in the http://localhost:5000");
    
})