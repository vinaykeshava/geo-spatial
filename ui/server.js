const express = require("express");
const bodyParser = require("body-parser")
const path = require("path")

const enrollAdmin = require("../fabcar/javascript/enrollAdmin");
const registerUser = require("../fabcar/javascript/registerUser");
const invoke = require("../fabcar/javascript/invoke");
const query = require("../fabcar/javascript/query");
const update = require("../fabcar/javascript/update");
const { json } = require("body-parser");


const app = express()
// app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, "static")));
app.use(express.json());


app.post("/update",async (req,res)=>{
    data = {
        "uid": req.body["uid"],
        "uorg": req.body["uorg"],
        "uihash": req.body["uihash"]
    }

    result = await update.main(JSON.stringify(data))
    res.send({"status":"success",
"msg":"Updated"})       
})



app.get('/registeruser', async(req,res)=>{
    
    result = await registerUser.main();
    res.send(result);
})


app.post('/invoke', async(req,res)=>{
    
    d = req.body;
    data = {
        "tag": d["tag"],
        "organization":d["organization"],
        "imagehash":d["imagehash"],
        "imageId":d["imageId"],
        "imagename":d["imagename"]
    }
    console.log(data)
    invoke.main(JSON.stringify(data))
    res.send({"status":"success",
    "msg":"Inserted Successfully"        
})
})


app.post("/query",async (req,res)=>{
    data = {
        "qid": req.body["qid"],
        "qorg": req.body["qorg"]
    }
    result = await  query.main(JSON.stringify(data))
    console.log(result);
    res.send(result)
})

app.get('/enroll-admin',async (req,res)=>{
    result = await enrollAdmin.main2();
    console.log(result)
    res.send(result);
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/static/ind.html");
})

app.listen(5000,()=>{
    console.log("Running....")
})