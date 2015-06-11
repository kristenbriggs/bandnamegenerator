var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/app"));
app.listen(port, function()  {
    console.log('server started on port ' + port);
});

var quotes = ["I have not failed.  I've just found 10,000 ways that do not work. - Thomas Edison", "No matter where you go, there you are.", "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D."];

app.get("/quote", function (req, res)  {
    var randomIndex =
    Math.floor(Math.random()*quotes.length);
    res.send(quotes[randomIndex]);
});

var adjectives = [
  "Beautiful",
  "Sick",
  "Gorgeous",
  "DumbAss",
  "Hot",
  ];
app.get('/', function(req, res)  {
    res.sendFile('index.html');
})
app.get("/adjectives", function (req, res)  {
    var randomIndex =
    Math.floor(Math.random()*adjectives.length);
    res.json(adjectives[randomIndex]);
});



