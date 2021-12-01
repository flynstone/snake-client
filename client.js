const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
    conn.write("Move: Up");
  });

  conn.on("connect", () => {
    console.log("Conected to the server");
    //conn.write("Name: empty");
    conn.write("Move: up");
  });

  return conn;
};

module.exports = { connect };