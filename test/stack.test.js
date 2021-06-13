const { expect } = require('chai');
const { Stack } = require('../src/stack');

describe('stack tests', () => {
  const stack = new Stack();

  describe('.push(element)', () => {
    it('should push elements to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push('3th');
    });
  });

  describe('.size()', () => {
    it('should have length of 3', () => {
      expect(stack.size()).to.equal(3);
    });
  });

  describe('.isEmpty()', () => {
    it('should not be empty', () => {
      expect(stack.isEmpty()).to.equal(false);
    });
  });

  describe('.peek()', () => {
    it('should peek the top element', () => {
      expect(stack.peek()).to.equal('3th');
    });
  });

  describe('.toArray()', () => {
    it('returns an array copy', () => {
      expect(stack.toArray()).to.deep.equal([1, 2, '3th']);
    });
  });

  describe('.clone()', () => {
    it('clones the stack', () => {
      const clone = stack.clone();
      clone.pop();

      expect(stack.peek()).to.equal('3th');
      expect(clone.peek()).to.equal(2);
    });
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
      expect(stack.size()).to.equal(0);
      expect(stack.isEmpty()).to.equal(true);
    });
  });

  describe('Stack.fromArray(list)', () => {
    it('creates a stack from an existing array', () => {
      const s = Stack.fromArray([1, 2, 3]);
      expect(s.peek()).to.equal(3);
      expect(s.size()).to.equal(3);
    });
  });
});
