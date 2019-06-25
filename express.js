var express=require("express");
var app=express();
var businessController=function(req,resp)
{
  console.log("the list of enities");
  var entities=[
   {id:1,name:"kurkure",quantity:40,price:30},
     {id:2,name:"lays",quantity:45,price:70},
	   {id:3,name:"balaji",quantity:37,price:60},
	     {id:4,name:"wheelos",quantity:54,price:50},
		 {id:5,name:"lays2",quantity:45,price:60}
		 ];
	resp.send(entities);
};
app.get('/entities',businessController);
var server=app.listen(8085,function(req,resp)
{
  var host=server.address().address
  var port=server.address().port
  console.log("server is listening on port 8085",host,port);
})
