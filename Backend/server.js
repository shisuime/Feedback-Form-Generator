const express=require("express")

const app=express()

//APIS
app.get("/",(req,res)=>{
    res.send("hello my first api")
})

app.get("/forms",(req,res)=>{

    res.send("Forms");

});

app.get("/users",(req,res)=>{

    res.send("Users");

});




app.listen(5000)
