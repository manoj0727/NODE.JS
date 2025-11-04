const express = require("express");
const http = require("http");
const users = require("./MOCK_DATA.json");

const app = express();

app.get("./api/users",(req,res)=>{
    res.json(users);
})

app.get("/users",(req,res)=>{
    const html = `
    ul> 
    ${users.map(user=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
   return res.json(user);
})
app.listen(8000,()=>{
    console.log("server is listening on port 8000");
})