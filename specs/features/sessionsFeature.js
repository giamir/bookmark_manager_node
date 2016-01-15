var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Account = require("../../models/account");


describe('Sessions', function() {

  Account.collection.drop();

  beforeEach(function(done){
    Account.register(new Account({ username : 'michael@example.com' }), 'Green', function(err, account) {
      if (err) {
        return err
      }
      done();
    });
  });

  afterEach(function(done){
    Account.collection.drop();
    done();
  });

  it('a user should be able to sign in to the service', function(done) {
    browser
      .url('/sessions/new')
      .setValue('#username', 'michael@example.com')
      .setValue('#password', 'Green')
      .submitForm('#new-session-form')
      .getUrl(function(err, url) {
        expect(url).to.include('/links');
      })
      .getText('body', function(err, text) {
        expect(text).to.include('Welcome, michael@example.com');
      })
      .call(done);
  });

  it('a user should be able to see the sign out button', function(done) {
    browser
      .url('/sessions/new')
      .setValue('#username', 'michael@example.com')
      .setValue('#password', 'Green')
      .submitForm('#new-session-form')
      .getText('body', function(err, text) {
        expect(text).to.include('Log out');
      })
      .call(done);
  });

  it('a user should be able to sign out to the service', function(done) {
    browser
      .url('/sessions/new')
      .setValue('#username', 'michael@example.com')
      .setValue('#password', 'Green')
      .submitForm('#new-session-form')
      .submitForm('#logout-form')
      .url('/')
      .getText('body', function(err, text) {
        expect(text).not.to.include('Welcome, michael@example.com');
      })
      .call(done);
  });

});
