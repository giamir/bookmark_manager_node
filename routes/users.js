var express = require('express');
var router = express.Router();
var passport = require('passport');

var Account = require('../models/account');

router.post('/', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.redirect('/users/new');
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/links');
    });
  });
});

router.get('/new', function(req, res) {
  res.render('users/new', {});
});

module.exports = router;
