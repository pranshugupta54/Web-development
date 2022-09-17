const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Heyyy"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    // res.send("Connected");
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var day = weekday[today.getDay()];
    res.render("list", {dayName: day, newListItem: items});

});

app.post("/", function(req,res){
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
    console.log(req.body.newItem);
})

app.listen(3000, function(){
    console.log("Online on 3000");
})