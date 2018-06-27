const { expect } = require('chai');
const stack = require('./index');

describe('stack tests', () => {
  const s = stack();

  describe('.push(element)', () => {
    it('should push elements to the top of the stack', () => {
      s.push(1);
      s.push(2);
      s.push('3th');
    });
  });

  describe('.length()', () => {
    it('should have length of 3', () => expect(s.length()).to.equal(3));
  });

  describe('.isEmpty()', () => {
    it('should not be empty', () => expect(s.isEmpty()).to.equal(false));
  });

  describe('.peek()', () => {
    it('should peek the top element', () => expect(s.peek()).to.equal('3th'));
  });

  describe('.pop()', () => {
    it('should pop the elements', () => {
      expect(s.pop()).to.equal('3th');
      expect(s.pop()).to.equal(2);
    });
  });

  describe('.clear()', () => {
    it('should clear the stack', () => {
      s.clear();
      expect(s.pop()).to.equal(null);
      expect(s.peek()).to.equal(null);
      expect(s.length()).to.equal(0);
      expect(s.isEmpty()).to.equal(true);
    });
  });
});
