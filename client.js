const { connect } = require("http2");
const net = require("net");

const client = net.createConnection({
  host: 'localhost', // change to IP address of computer
  port: 5000,
});
 
client.on("connect", () => {
  client.write("img.png");
  client.on("data" ,(cats) => {
    console.log(cats);
  })
});

client.setEncoding("utf8");