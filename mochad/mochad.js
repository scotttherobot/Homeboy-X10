var net = require("net");

module.exports = function (host, port) {
   console.log("Connecting to mochad at %s:%s", host, port);
   var socket = net.createConnection(port, host);

   socket.on('connect', function(data) {
      console.log("Connected to mochad", data);
   });
   
   socket.on('data', function(data) {
   });

   socket.on('end', function() {
      console.log("Socket closed");
   });

   return {
      on: function (housecode, unit) {
         console.log("rf " + housecode + unit + " on");
         socket.write("rf " + housecode + unit + " on\n");
         socket.write("rf " + housecode + unit + " on\n");
      },
      off: function (housecode, unit) {
         console.log("rf " + housecode + unit + " off");
         socket.write("rf " + housecode + unit + " off\n");
         socket.write("rf " + housecode + unit + " off\n");
      }
   }
}
