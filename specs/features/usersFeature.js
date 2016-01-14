var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

// var User = require("../../models/user");


describe('Users', function() {

  // User.collection.drop();

  beforeEach(function(done){
    done();
  });

  afterEach(function(done){
    // User.collection.drop();
    done();
  });

  it('a user should be able to sign up to the service', function(done) {
    browser
      .url('/users/new')
      .setValue('#username', 'Michael')
      .setValue('#password', 'Green')
      .submitForm('#sign-up')
      .call(done);
  });

});
