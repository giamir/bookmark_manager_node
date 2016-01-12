var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('links/index', { title: 'Hello World' });
});

module.exports = router;
