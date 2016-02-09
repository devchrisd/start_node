var http = require("http");

function start(route) {

  function onRequest(request, response) {
    route(response, request);
  }

  server = http.createServer(onRequest).listen(process.env.PORT || 3000);
  console.log("Server has started. Listen on port :" + server.address().port);
}

exports.start = start;
