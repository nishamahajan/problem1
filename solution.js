var http=require("http");
var Employee=[
  {id:1,name:"nisha",business_entity:"customers"},
  {id:2,name:"virat",business_entity:"customers"},
  {id:3,name:"anu",business_entity:"employees"},
  {id:4,name:"bhavna",business_entity:"employees"}
  ];
var controller=function(request,response)
{
 response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(Employee));
};
var server=http.createServer(controller)
server.listen(8087);
console.log("server is listening on port 8087");

  