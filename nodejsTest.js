var http =require("http");
http.createServer(function(request, response){    
  response.writeHead(200, {"Content-Type":"text/plain"}); // 发送 HTTP头部 http响应 内容类型 
  response.write("Welcome to Nodejs");    //输出内容
  response.end(); // 发送响应数据
  }).listen(8000,"127.0.0.1"); // 监听端口与访问地址

console.log("Creat server on http://127.0.0.1:8000/");