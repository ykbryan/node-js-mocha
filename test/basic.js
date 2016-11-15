var expect = require("chai").expect;
var request = require("request");
var index = require("../app/index");

describe("Testing", function() {
  describe("Method 1 should return 100", function() {
    var url = "http://localhost:3000/returns?number=100";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("returns 100", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal(100);
        done();
      });
    });
  });

  describe("Method 2 should return 200", function() {
    var url = "http://localhost:3000/returns?number=200";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("returns 200", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal(200);
        done();
      });
    });
  });
});
