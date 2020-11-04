const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname+"/dist"))

// Prioritizes Back end routes
app.get("/", (req, res)=>{
    // Relative path of the index.html file
    res.sendFile(__dirname+"/dist/index.html")
})

app.get("/*", (req,res)=>{
    res.redirect('back')
})

// Prioritizes Angular Routes
app.get("*", (req, res)=>{
    res.sendFile('/dist/index.html', {root: __dirname + '/'});
})
app.listen(PORT);