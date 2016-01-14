var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Link = require("../../models/link");
var Tag = require("../../models/tag");


describe('Links', function() {

  Link.collection.drop();
  Tag.collection.drop();

  beforeEach(function(done){
    var newTag = new Tag({name: 'tag'});
    var newLink = new Link({name: 'Home', url: 'http://www.michaellennox.me/'});
    newLink.tags.push(newTag.id);
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

  it('should list links at /links', function(done) {
    browser
      .url('/links')
      .getText('body', function(err, text) {
        expect(text).to.include('name: Home');
        expect(text).to.include('url: http://www.michaellennox.me/');
      })
      .call(done);
  });

  it('should be able to create a new link via /links/new', function(done) {
    browser
      .url('/links/new')
      .setValue('#name', 'Blog')
      .setValue('#url', 'http://www.michaellennox.me/blog/')
      .setValue('#tags', 'blog me myblog')
      .submitForm('#new-link-form')
      .getUrl(function(err, url) {
        expect(url).to.include('/links');
      })
      .getText('body', function(err, text) {
        expect(text).to.include('name: Blog');
        expect(text).to.include('url: http://www.michaellennox.me/blog/');
        expect(text).to.include('tags: #blog #me #myblog');
      })
      .call(done);
  });
});
