/**
 * @datastructures-js/stack
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class Stack
 * implements LIFO principle.
 */
class Stack {
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
  }

  /**
   * @public
   * checks if the stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this._elements.length === 0;
  }

  /**
   * @public
   * returns the number of elements in the stack
   * @returns {number}
   */
  size() {
    return this._elements.length;
  }

  /**
   * @public
   * returns the top element in the stack
   * @returns {object}
   */
  peek() {
    if (this.isEmpty()) return null;

    return this._elements[this._elements.length - 1];
  }

  /**
   * @public
   * adds an element to the top of the stack
   * @param {object} element
   */
  push(element) {
    this._elements.push(element);
  }

  /**
   * @public
   * removes and returns the top element in the stack
   * @returns {object}
   */
  pop() {
    if (this.isEmpty()) return null;

    return this._elements.pop();
  }

  /**
   * @public
   * returns the remaining elements as an array
   * @returns {array}
   */
  toArray() {
    return this._elements.slice(0);
  }

  /**
   * @public
   * clears all elements from the stack
   */
  clear() {
    this._elements = [];
  }

  /**
   * @public
   * creates a shallow copy from the stack
   * @return {Stack}
   */
  clone() {
    return new Stack(this._elements.slice(0));
  }

  /**
   * @public
   * @static
   * creates a stack from an existing array
   * @param {array} elements
   * @return {Stack}
   */
  static fromArray(elements) {
    return new Stack(elements);
  }
}

module.exports = Stack;
