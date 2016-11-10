var expect = require('chai').expect;
var first = require('../src/first');

describe('myFirst', function() {
    it('returns message from second', function() {
        expect('second').to.equal(first.myFirst());
    });
});



