const { expect } = require('chai');
const stackFn = require('./index');

describe('stack tests', () => {
  const stack = stackFn();

  describe('.push(element)', () => {
    it('should push elements to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push('3th');
    });
  });

  describe('.length()', () => {
    it('should have length of 3', () => expect(stack.length()).to.equal(3));
  });

  describe('.isEmpty()', () => {
    it('should not be empty', () => expect(stack.isEmpty()).to.equal(false));
  });

  describe('.peek()', () => {
    it('should peek the top element', () =>
      expect(stack.peek()).to.equal('3th'));
  });

  describe('.pop()', () => {
    it('should pop the elements', () => {
      expect(stack.pop()).to.equal('3th');
      expect(stack.pop()).to.equal(2);
    });
  });

  describe('.clear()', () => {
    it('should clear the stack', () => {
      stack.clear();
      expect(stack.pop()).to.equal(null);
      expect(stack.peek()).to.equal(null);
      expect(stack.length()).to.equal(0);
      expect(stack.isEmpty()).to.equal(true);
    });
  });
});
