var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Link = require("../../models/link");
var Tag = require("../../models/tag");


describe('Tags', function() {

  Link.collection.drop();
  Tag.collection.drop();

  beforeEach(function(done){
    var newTag = new Tag({name: 'tag'});
    var newLink = new Link({name: 'Home', url: 'http://www.michaellennox.me/'});
    newLink.tags.push(newTag.id);
    newTag.links.push(newLink.id);
    newTag.save();
    newLink.save(function(err) {
      done();
    });
  });

  afterEach(function(done){
    Link.collection.drop();
    Tag.collection.drop();
    done();
  });

  it('should list links related to the tag at /tags/:name', function(done) {
    browser
      .url('/tags/tag')
      .getText('body', function(err, text) {
        expect(text).to.include('name: Home');
        expect(text).to.include('url: http://www.michaellennox.me/');
      })
      .call(done);
  });

});
