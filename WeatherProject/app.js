const { response } = require("express");
const express = require("express");
const https = require("https");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");
    const url = "https://api.weatherapi.com/v1/current.json?key=6728903c67f34d1fb5f222855220309&q=London";
    

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.current.temp_c;
            console.log(temp);
        })
    })

    // res.send("Server Run");
})

app.post("/", function(req,res){
    // res.send("OK");
    console.log(req.body.Place);

    const url = "https://api.weatherapi.com/v1/current.json?key=6728903c67f34d1fb5f222855220309&q=" + req.body.Place;
    

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.current.temp_c;
            console.log("Temp is " + temp);
            res.send("Temp is: " + temp);
            // res.sendFile(__dirname + "/new.html");
        })
    })
    
})

https://api.weatherapi.com/v1/current.json?key=6728903c67f34d1fb5f222855220309&q=London



app.listen(3000, function(){
    console.log("Server Online");
})