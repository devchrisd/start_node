var url = require("url");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"]       = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/load"]   = requestHandlers.load;
handle["/upload"] = requestHandlers.upload;
handle["/submit_upload"] = requestHandlers.submit_upload;

function route(response, request) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    handle['/start'](response, request);
  }
}

exports.route = route;
