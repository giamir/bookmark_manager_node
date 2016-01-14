var express = require('express');
var router = express.Router();

var Link = require('../models/link');
var Tag = require('../models/tag');

router.get('/', function(req, res) {
  Link.find().populate('tags').exec(function(err, links) {
    res.render('links/index', { links: links });
  });
});

router.post('/', function(req, res) {
  var tags = req.body.tags.split(' ');
  var newLink = new Link({name: req.body.name, url: req.body.url});
  tags.forEach(function(tag) {
    var newTag = new Tag({name: '#' + tag});
    newLink.tags.push(newTag.id);
    newTag.links.push(newLink.id);
    newTag.save();
  });
  newLink.save();
  res.redirect('/links');
});

router.get('/new', function(req, res) {
  res.render('links/new');
});

module.exports = router;
