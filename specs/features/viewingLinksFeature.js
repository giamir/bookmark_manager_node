var chai = require('chai');
var expect = chai.expect;

describe('Viewing Links', function() {
  it('displays a link', function(done) {
    browser
      .url('/links')
      .getText('body', function(err, text) {
        expect(text).to.include('Hello World');
      })
      .call(done);
  });
});
