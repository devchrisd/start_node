// var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs"); // file system
var mime = require("mime");
var path = require("path");

function start(response, request) {
  console.log("Request handler 'start' was called.");

    var filePath = false;

    if (request.url == '/') {
        filePath = "public/index.html";
    } else {
        filePath = "public" + request.url;
    }

    var absPath = "./" + filePath;
    console.log("Load " + absPath);

    sendContent(response, absPath);
}

function upload(response) {
  console.log("Request handler 'upload' was called.");

  sendContent(response, 'public/upload.html');
}

function submit_upload(response, request) {
  console.log("Request handler 'submit_upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done. files.upload.path = " + files.upload.path);

    uploadPath = "/tmp/test.png";
    /* Possible error on Windows systems:
       tried to rename to an already existing file */
    fs.rename(files.upload.path, uploadPath, function(err) {
      if (err) {
        fs.unlink(uploadPath);
        fs.rename(files.upload.path, uploadPath);
      }
    });

    sendContent(response, uploadPath);
  });
}

function send404(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function showPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function sendContent(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          showPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.submit_upload = submit_upload;
