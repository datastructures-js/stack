/**
 * datastructures-js/Stack
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const stack = () => {
  let top = 0;
  let elements = [];

  /**
   * @returns {number}
   */
  const length = () => top;

  /**
   * @returns {boolean}
   */
  const isEmpty = () => top === 0;

  /**
   * @param {object} el
   */
  const push = (el) => {
    elements.push(el);
    top += 1;
  };

  /**
   * removes popped elements only when reaching half the stack
   * to improve performance for high frequency data
   */
  const removedPopped = () => {
    if (top * 2 <= elements.length) {
      elements = elements.slice(0, top);
    }
  };

  /**
   * @returns {object}
   */
  const pop = () => {
    if (!isEmpty()) {
      top -= 1;
      const last = elements[top];
      removedPopped();
      return last;
    }
    return null;
  };

  /**
   * @returns {object}
   */
  const peek = () => {
    if (!isEmpty()) {
      return elements[top - 1];
    }
    return null;
  };

  /**
   * clears the stack
   */
  const clear = () => {
    top = 0;
    elements = [];
  };

  // stack api
  return {
    length,
    isEmpty,
    push,
    pop,
    peek,
    clear
  };
};

module.exports = stack;
