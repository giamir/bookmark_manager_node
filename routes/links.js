var express = require('express');
var router = express.Router();
var Link = require('../models/link');

router.get('/', function(req, res) {
  Link.find(function(err, links) {
    res.render('links/index', { links: links });
  });
});

router.post('/', function(req, res) {
  var newLink = new Link({name: req.body.name, url: req.body.url});
  newLink.save(function(err, link) {});
  res.redirect('');
});

router.get('/new', function(req, res) {
  res.render('links/new');
});


module.exports = router;
