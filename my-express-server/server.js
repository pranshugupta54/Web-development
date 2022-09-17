const express = require("express");

const app = express();

app.get("/", function(request, response){
    // console.log(request);
    response.send("e");
})

app.listen(3000);