var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Account = require("../../models/account");


describe('Users', function() {

  Account.collection.drop();

  beforeEach(function(done){
    done();
  });

  afterEach(function(done){
    Account.collection.drop();
    done();
  });

  it('a user should be able to sign up to the service', function(done) {
    browser
      .url('/users/new')
      .setValue('#username', 'michael@example.com')
      .setValue('#password', 'Green')
      .submitForm('#new-user-form')
      .getUrl(function(err, url) {
        expect(url).to.include('/links');
      })
      .getText('body', function(err, text) {
        expect(text).to.include('Welcome, michael@example.com');
      })
      .call(done);
  });

});
