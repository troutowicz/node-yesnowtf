(function() {
  'use strict';

  var yesnowtf = require('../index.js'),
      chai = require('chai'),
      chaiAsPromised = require('chai-as-promised'),
      expect = chai.expect;

  chai.use(chaiAsPromised);

  describe('#decide()', function() {
    it('should return a random decision if no parameters are passed', function(done) {
      expect(yesnowtf.decide())
        .to.be.fulfilled
        .and.notify(done);
    });

    it('should return a yes decision if parameter \'force\' equals \'yes\'', function(done) {
      var decision = 'yes';

      expect(yesnowtf.decide(decision))
        .to.eventually.have.property('answer', 'yes')
        .and.notify(done);
    });

    it('should return a no decision if force parameter \'force\' equals \'no\'', function(done) {
      var decision = 'no';

      expect(yesnowtf.decide(decision))
        .to.eventually.have.property('answer', 'no')
        .and.notify(done);
    });

    it('should return a maybe decision if parameter \'force\' equals \'maybe\'', function(done) {
      var decision = 'maybe';

      expect(yesnowtf.decide(decision))
        .to.eventually.have.property('answer', 'maybe')
        .and.notify(done);
    });
  });
}());