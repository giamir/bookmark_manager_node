var express = require('express');
var router = express.Router();
var Link = require('../models/link');

router.get('/', function(req, res) {
  Link.find(function(err, links) {
    console.log(err);
    res.render('links/index', { title: 'Links', links: links });
  });
});

module.exports = router;
