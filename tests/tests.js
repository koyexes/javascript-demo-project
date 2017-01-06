// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    assert(myApp.computeAverage(1,2,3) == 2);
  })
  it("should return 2 as average for string values'1','2','3'", function () {
      expect(myApp.computeAverage("1","2","3")).to.be.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    assert(myApp.computeAverage(3, 7, 5) == 5);
  })
  it("should return 5 as average for string values 3, 7, 5", function() {
     expect(myApp.computeAverage("3","7","5")).to.be.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
  it("should return 120 as factorial for string value 5", function () {
      expect(myApp.computeFactorial("5")).to.be.equal(120);
  })

})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(40) == 104);
  })
  it("should return X for Celcius string value Y", function () {
      expect(myApp.convertTempCtoF("40")).to.be.equal(104);
  })

  it("should return number type for X for string Celcius value Y", function () {
      (typeof myApp.convertTempCtoF("40")).should.equal("number");
  })

  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })

  it("should return X for Celcius string value Y", function () {
      expect(myApp.convertTempCtoF("60")).to.be.equal(140);
  })

  it("should return number type for X for string Celcius value Y", function () {
      (typeof myApp.convertTempCtoF("60")).should.equal("number");
  })

  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })

  it("should return Y for Farenheit string value X", function() {
    expect(myApp.convertTempFtoC("140")).to.be.equal(60);
  })

  it("should return data type of number  for Y for Farenheit string value X", function () {
      (typeof myApp.convertTempFtoC("140")).should.equal("number");
  })

  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })

  it("should return Y for Farenheit string value X", function() {
    expect(myApp.convertTempFtoC("104")).to.be.equal(40);
  })

  it("should return data type of number  for Y for Farenheit string value X", function () {
      (typeof myApp.convertTempFtoC("104")).should.equal("number");
  })
})
