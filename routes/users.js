var express = require('express');
var router = express.Router();
var coolRoute = require('../routes/cool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

router.get('/cool', function(req, res, next) {
  res.send('you are cool');
});

module.exports = router;
