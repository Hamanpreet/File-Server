const net = require("net");
const fs = require("fs");
const PORT = 5000;

const server = net.createServer();
server.listen(PORT, () => {
  console.log("Server listening to port 5000");
});

server.on("connection", (server) => {

  server.setEncoding("utf8");
  server.on("data", (data) => {
    console.log(typeof data);
    fs.readFile(data, 'binary', (err,imgData) => {
      if (err) {
        console.log("error");
        return;
      }
      const path = 'final.png';
      fs.writeFile(path, imgData, {encoding: 'binary', flag:"a" }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
    
        console.log('Image file written successfully!');
      });
    });
  });
});

