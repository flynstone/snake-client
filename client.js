const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.15',
    port: 50541// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Conected to the server");
    conn.write("Say: Hey");
  });

  return conn;
};

module.exports = { connect };