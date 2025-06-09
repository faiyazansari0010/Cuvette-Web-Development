const http = require("http");

const sever = http.createServer((req, res) => {
  if(req.method === "GET"){
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("Data Received !")
  }
  else if(req.method === "POST"){
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    })

    req.on("end",() => {
      res.writeHead(200, {"content-type" : "text/plain"});
      res.end("Data Posted: " + body);
    })
  }
})

sever.listen(3000);