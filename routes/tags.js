var express = require('express');
var router = express.Router();

var Link = require('../models/link');
var Tag = require('../models/tag');

router.get('/:name', function(req, res) {
  Tag.findOne({name: req.params.name}).populate('links').exec(function(err, tag) {
    res.render('links/index', { links: tag.links });
  });
});

module.exports = router;
