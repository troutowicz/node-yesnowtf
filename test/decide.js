'use strict';

var yesnowtf = require('../index.js'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    chaiProperties = require('chai-properties'),
    expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(chaiProperties)

describe('#decide()', function() {
  describe('using promises', function() {
    it('should return a random decision object if no decision parameter is passed', function () {
      return expect(yesnowtf.decide())
        .to.eventually.be.an('object')
        .and.have.property('forced', false);
    });

    it('should return a yes decision object if decision parameter equals \'yes\'', function () {
      var decision = 'yes';

      return expect(yesnowtf.decide(decision))
        .to.eventually.be.an('object')
        .then(function (data) {
          expect(data).to.have.properties({answer: 'yes', forced: true});
        });
    });

    it('should return a no decision object if decision parameter equals \'no\'', function () {
      var decision = 'no';

      return expect(yesnowtf.decide(decision))
        .to.eventually.be.an('object')
        .then(function (data) {
          expect(data).to.have.properties({answer: 'no', forced: true});
        });
    });

    it('should return a maybe decision object if decision parameter equals \'maybe\'', function () {
      var decision = 'maybe';

      return expect(yesnowtf.decide(decision))
        .to.eventually.be.an('object')
        .then(function (data) {
          expect(data).to.have.properties({answer: 'maybe', forced: true});
        });
    });
  });

  describe('using callbacks', function() {
    it('should return a random decision object if no decision parameter is passed', function (done) {
      var decide;

      yesnowtf.decide(decide, function(err, data) {
        if (err) return done(err);

        expect(data)
          .to.be.an('object')
          .and.have.property('forced', false);

        done();
      });
    });

    it('should return a yes decision object if decision parameter equals \'yes\'', function (done) {
      var decision = 'yes';

      yesnowtf.decide(decision, function(err, data) {
        if (err) return done(err);

        expect(data)
          .to.be.an('object')
          .and.have.properties({answer: 'yes', forced: true});

        done();
      });
    });

    it('should return a no decision object if decision parameter equals \'no\'', function (done) {
      var decision = 'no';

      yesnowtf.decide(decision, function(err, data) {
        if (err) return done(err);

        expect(data)
          .to.be.an('object')
          .and.have.properties({answer: 'no', forced: true});

        done();
      });
    });

    it('should return a maybe decision object if decision parameter equals \'maybe\'', function (done) {
      var decision = 'maybe';

      yesnowtf.decide(decision, function(err, data) {
        if (err) return done(err);

        expect(data)
          .to.be.an('object')
          .and.have.properties({answer: 'maybe', forced: true});

        done();
      });
    });
  });
});