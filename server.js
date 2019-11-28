var express = require("express");
var app = express();
var empRouter= require("./routes/emp");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use("/emp",empRouter)

  app.listen(9898,()=>{
      console.log("Server Started")
  })


