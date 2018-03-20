const express = require("express");
const app =express();

app.get("/", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YS-SportShop server has started");
});