var http = require("http");

function start(route) {

  function onRequest(request, response) {
    route(response, request);
  }

  server = http.createServer(onRequest)
  var port_number = server.listen(process.env.PORT || 3000);
  console.log("Server has started. Listen on port :" + port_number);
}

exports.start = start;
