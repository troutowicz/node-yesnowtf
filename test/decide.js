'use strict';

var yesnowtf = require('../index.js'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    chaiProperties = require('chai-properties'),
    expect = chai.expect,
    should = chai.should();

chai.use(chaiAsPromised);
chai.use(chaiProperties)

describe('#decide()', function() {
  it('should return a random decision object if no decision parameter is passed', function (done) {
    expect(yesnowtf.decide())
      .to.eventually.be.an('object')
      .and.notify(done);
  });

  it('should return a yes decision object if decision parameter equals \'yes\'', function (done) {
    var decision = 'yes';

    expect(yesnowtf.decide(decision))
      .to.eventually.be.an('object')
      .then(function (data) {
        expect(data).to.have.properties({answer: 'yes', forced: true});
      }).should.notify(done);
  });

  it('should return a no decision object if decision parameter equals \'no\'', function (done) {
    var decision = 'no';

    expect(yesnowtf.decide(decision))
      .to.eventually.be.an('object')
      .then(function (data) {
        expect(data).to.have.properties({answer: 'no', forced: true});
      }).should.notify(done);
  });

  it('should return a maybe decision object if decision parameter equals \'maybe\'', function (done) {
    var decision = 'maybe';

    expect(yesnowtf.decide(decision))
      .to.eventually.be.an('object')
      .then(function (data) {
        expect(data).to.have.properties({answer: 'maybe', forced: true});
      }).should.notify(done);
  });

  it('should throw type error if callback parameter is set and not a function', function () {
    var callback = 'string';
    var err = typeof callback + ' is not a function';

    expect(function () {
      yesnowtf.decide(null, callback);
    }).to.throw(err);
  });
});