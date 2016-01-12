var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Link = require("../../models/link");


describe('Links', function() {

  Link.collection.drop();

  beforeEach(function(done){
    var newLink = new Link({
      name: 'Home',
      url: 'http://www.michaellennox.me/'
    });
    newLink.save(function(err) {
      done();
    });
  });

  afterEach(function(done){
    Link.collection.drop();
    done();
  });

  it('should list links at /links', function(done) {
    browser
      .url('/links')
      .getText('body', function(err, text) {
        expect(text).to.include('http://www.michaellennox.me/');
      })
      .call(done);
  });
});
