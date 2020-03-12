/**
 * datastructures-js/stack
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class Stack
 */
class Stack {
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
  }

  /**
   * checks if the stack is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * returns the number of elements in the stack
   * @public
   * @returns {number}
   */
  size() {
    return this.elements.length;
  }

  /**
   * returns the top element in the stack
   * @public
   * @returns {object}
   */
  peek() {
    if (this.isEmpty()) return null;

    return this.elements[this.elements.length - 1];
  }

  /**
   * adds an element to the top of the stack
   * @public
   * @param {object} element
   */
  push(element) {
    this.elements.push(element);
  }

  /**
   * removes and returns the top element in the stack
   * @public
   * @returns {object}
   */
  pop() {
    if (this.isEmpty()) return null;

    return this.elements.pop();
  }

  /**
   * returns the remaining elements as an array
   * @public
   * @returns {array}
   */
  toArray() {
    return this.elements.slice(0);
  }

  /**
   * clears all elements from the stack
   * @public
   */
  clear() {
    this.elements = [];
  }

  /**
   * creates a shallow copy from the stack
   * @public
   * @return {Stack}
   */
  clone() {
    return new Stack(this.elements.slice(0));
  }

  /**
   * creates a stack from an existing array
   * @public
   * @static
   * @param {array} elements
   * @return {Stack}
   */
  static fromArray(elements) {
    return new Stack(elements);
  }
}

module.exports = Stack;
