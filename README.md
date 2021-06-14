# @datastructures-js/stack

[![build:?](https://travis-ci.org/datastructures-js/stack.svg?branch=master)](https://travis-ci.org/datastructures-js/stack) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/stack.svg)](https://www.npmjs.com/package/@datastructures-js/stack)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/stack.svg)](https://www.npmjs.com/package/@datastructures-js/stack) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/stack)

A wrapper around javascript array push/pop with a standard stack interface.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">


# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [Stack.fromArray(elements)](#stackfromarrayelements)
  * [.push(element)](#pushelement)
  * [.peek()](#peek)
  * [.pop()](#pop)
  * [.isEmpty()](#isempty)
  * [.size()](#size)
  * [.clone()](#clone)
  * [.toArray()](#toarray)
  * [.clear()](#clear)
 * [Build](#build)
 * [License](#license)

## Install

```sh
npm install --save @datastructures-js/stack
```

### require
```js
const { Stack } = require('@datastructures-js/stack');
```

### import
```js
import { Stack } from '@datastructures-js/stack';
```

## API

### constructor

##### JS
```js
// empty stack
const stack = new Stack();

// from an array
const stack = new Stack([10, 3, 8, 40, 1]);
```

##### TS
```js
// empty stack
const stack = new Stack<number>();

// from an array
const stack = new Stack<number>([10, 3, 8, 40, 1]);
```

### Stack.fromArray(elements)

##### JS
```js
// empty stack
const stack = Stack.fromArray([]);

// with elements
const list = [10, 3, 8, 40, 1];
const stack = Stack.fromArray(list);

// If the list should not be mutated, use a copy of it.
const stack = Stack.fromArray(list.slice());
```

##### TS
```js
// empty stack
const stack = Stack.fromArray<number>([]);

// with elements
const list = [10, 3, 8, 40, 1];
const stack = Stack.fromArray<number>([10, 3, 8, 40, 1]);
```

### .push(element)
push an element to the top of the stack.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">element: T</td>
    <td align="center">Stack&lt;T&gt;</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
stack.push(11);
```

### .peek()
returns the top element in the stack.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(stack.peek()); // 11
```

### .pop()
removes and returns the top element of the stack.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(stack.pop()); // 11
console.log(stack.peek()); // null
```

### .isEmpty()
checks if the stack is empty.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">boolean</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
stack.push(11);
console.log(stack.isEmpty()); // false
```

### .size()
returns the number of elements in the stack.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">number</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(stack.size()); // 1
```

### .clone() 
creates a shallow copy of the stack.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">Stack&lt;T&gt;</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const stack = Stack.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  stack.clone();

clone.pop();

console.log(stack.peek()); // { id: 8 }
console.log(clone.peek()); // { id: 4 }
```

### .toArray()
returns a copy of the remaining elements as an array.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T[]</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
console.log(stack.toArray()); // [{ id: 2 }, { id: 4 } , { id: 8 }]
```

### .clear()
clears all elements from the stack.

<table>
  <tr>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
stack.clear();
stack.size(); // 0
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/stack/blob/master/LICENSE)
