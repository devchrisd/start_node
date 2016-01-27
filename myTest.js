// const hostname = '127.0.0.1';
// const port = 8080;

var http = require("http");

// request handler: called once for every HTTP request that's made against the server
function onRequest(request, response){
  // magic happens here!
/**
 * Case 1: text
*/
    // explicitly write the headers to the response stream
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');

/*
    var headers = request.headers;
    var method = request.method;
    var url = request.url;  //full URL without the server, protocol or port
    var userAgent = headers['user-agent'];

    var body = [];
    request.on('data', function(chunk) {
      body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        if (request.method === 'GET' && request.url === '/echo')
        {
            response.end(body);
            // or: use 'pipe' to direct data from request to response
            // request.pipe(response);
        }
    }).on('error', function(err) {
        // This prints the error message and stack trace to `stderr`.
        console.error(err.stack);

        response.statusCode = 400;
        response.end();
    });

    response.on('error', function(err) {
        console.error(err);
    });
*/


    // implicit headers. This means you're counting on node to send the headers for
    // you at the correct time before you start sending body data.
    //
    // response.statusCode = 404; // Tell the client that the resource wasn't found.
    // response.setHeader('Content-Type', 'application/json');
    // response.setHeader('X-Powered-By', 'bacon');



/**
 * Case 2: JSON
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))
 */

    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello, World!</h1>');
    // response.write('</body>');
    // response.write('</html>');

}


// server: EventEmitter
http.createServer(onRequest).listen(3000);
//  {
//    console.log("Server running at http://${hostname}:${port}/");
// }
