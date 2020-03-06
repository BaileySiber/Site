'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const Message = mongoose.model('Message', {
  name: String,
  email: String,
  subject: String,
  message: String
})

const router = express.Router();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

var http = require("http");
setInterval(function() {
    http.get("https://bailey-site.herokuapp.com/");
}, 1500000);

router.get('/api/test', function(req, res) {
  res.send('success');
});

router.post('/api/contact', function (req, res) {
  console.log(req.body)
  new Message(req.body)
    .save()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log('did not work!!')
      res.status(500).end(err.message)
    })
});

router.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);

//server.js






// 'use strict';
// const express = require('express');
// const path = require('path');
// const serverless = require('serverless-http');
// const app = express();
// const bodyParser = require('body-parser');
//
// const router = express.Router();
// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express.js!</h1>');
//   res.end();
// });
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));
//
// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
//
// module.exports = app;
// module.exports.handler = serverless(app);
