const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const Message = mongoose.model('Message', {
  name: String,
  email: String,
  subject: String,
  message: String
})

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

var http = require("http");
setInterval(function() {
    http.get("https://bailey-site.herokuapp.com/");
}, 1500000);

app.get('/api/test', function(req, res) {
  res.send('success');
});

app.post('/api/contact', function (req, res) {
  console.log(req.body)
  new Message(req.body)
    .save()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log('did not work!!')
      res.status(500).end(err.message)
    })
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
