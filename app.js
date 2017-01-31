var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});


var server = app.listen(process.env.PORT || 3000 , function(){
  console.log('Server listening');
});
