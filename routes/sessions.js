var express = require('express');
var router = express.Router();
var passport = require('passport');

var Account = require('../models/account');

router.post('/', passport.authenticate('local'), function(req, res) {
  res.redirect('/links');
});

router.get('/new', function(req, res) {
  res.render('sessions/new', {});
});

module.exports = router;
