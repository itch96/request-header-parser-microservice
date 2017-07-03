// server.js
// where your node app starts
// get IP address, language and OS of the client

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.get('/whoami', (request, response) => {
  var head = request.headers;
  var object = {
     "ip": head["x-forwarded-for"],
     "language": head["accept-language"],
     "os": head["user-agent"]
  };
  response.send(object);
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
