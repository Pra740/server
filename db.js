var mysql = require("mysql")

function connect()
{
   var connection=mysql.createConnection({
       host:"localhost",
       database:"devops",
       user:'dac',
       password:"dac",
       port:3306
   })
   connection.connect()

   return connection
}

module.exports={
    connect:connect
}