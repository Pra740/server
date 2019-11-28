var express=require("express")
var db= require("../db")
var bodyParser=require("body-parser")
var router= express()
router.use(bodyParser.json())
const util=require("../utils")


router.get("/",(request,response)=>{
    var connection=db.connect()
    queryText=`select * from Employee`
    connection.query(queryText,(err,data)=>{
        connection.end();
     var result=util.createResult(err,data)
      response.send(result)
    })
})

router.post("/",(request,response)=>{
    var {name,age}=request.body
    var connection=db.connect()
    queryText=`insert into Employee(name,age)values('${name}',${age})`
    connection.query(queryText,(err,data)=>{
        connection.end();
        var result=util.createResult(err,data)
      response.send(result)
    })
})

router.put("/:id",(request,response)=>{
    var id =request.params.id
    var {name,age}=request.body
    var connection=db.connect()
    queryText=`update Employee set name='${name}',age=${age} where id =${id}`
    connection.query(queryText,(err,data)=>{
        connection.end();
        var result=util.createResult(err,data)
      response.send(result)
    })
})

router.delete("/:id",(request,response)=>{
    var id =request.params.id
    var connection=db.connect()
    queryText=`delete from Employee where id =${id}`
    connection.query(queryText,(err,data)=>{
        connection.end();
        var result=util.createResult(err,data)
        response.send(result)
    })
})

module.exports=router


