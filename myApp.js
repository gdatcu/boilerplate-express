require('dotenv').config();
let express = require('express')
let app = express();

app.use('/', function name(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});                                 /* app.get("/:word/echo",function(req, res) {
  word = req.params.word;
  res.json({echo: word});
});
*/

// Chain middleware to the route "/now"
app.get('/now', function(req, res, next) {
  // Middleware function to add current time to req.time
  req.time = new Date().toString();
  next(); // Pass control to the next handler
}, function(req, res) {
  // Final handler to respond with the JSON object
  res.json({ time: req.time });
});

/* app.get('/json', function(req, res) {
res.json(process.env.MESSAGE_STYLE === 'uppercase' ? {"message": "HELLO JSON"}: {"message": "Hello json"});
});
*/

/* app.get('/json', function(req, res) {
  res.json({"message": "Hello json"})
});
*/

/* app.get('/', function(req, res){
  const absolutePath = __dirname + "/views/index.html";  res.sendFile(absolutePath)
});
*/


app.use('/public', express.static(__dirname + "/public"));
module.exports = app;
