# @datastructures-js/stack

[![build:?](https://travis-ci.org/datastructures-js/stack.svg?branch=master)](https://travis-ci.org/datastructures-js/stack) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/stack.svg)](https://www.npmjs.com/package/@datastructures-js/stack)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/stack.svg)](https://www.npmjs.com/package/@datastructures-js/stack) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/stack)

A wrapper around javascript array push/pop with a standard stack interface.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Creating a Stack](#create-a-stack)
    * [Empty Stack](#empty-stack)
    * [From an Existing Array](#from-an-existing-array)
  * [.push(element)](#pushelement)
  * [.peek()](#peek)
  * [.pop()](#pop)
  * [.isEmpty()](#isempty)
  * [.size()](#size)
  * [.toArray()](#toarray)
  * [.clear()](#clear)
 * [Build](#build)
 * [License](#license)

## Install

```sh
npm install --save @datastructures-js/stack
```

## API

### require

```js
const Stack = require('@datastructures-js/stack');
```

### import

```js
import Stack from '@datastructures-js/stack';
```

### Create a Stack

#### empty stack
```js
const stack = new Stack();

// OR

const stack = Stack.fromArray([]);
```

#### from an existing array
<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   list: array&lt;object&gt;
  </td>
 </tr>
</table>

```js
const list = [10, 3, 8, 40, 1];

const stack = new Stack(list);

// OR

const stack = Stack.fromArray(list);
```

If the list should not be mutated, simply construct the stack from a copy of it.

```js
const stack = new Stack(list.slice(0));
```

### .push(element)

push an element to the top of the stack.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   element: object
  </td>
 </tr>
</table>

```js
stack.push('test');
```

### .peek()

returns the top element in the stack.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   object
  </td>
 </tr>
</table>

```js
console.log(stack.peek()); // test
```

### .pop()

removes and returns the top element of the stack.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   object
  </td>
 </tr>
</table>

```js
console.log(stack.pop()); // test
console.log(stack.peek()); // null
```

### .isEmpty()
checks if the stack is empty.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   boolean
  </td>
 </tr>
</table>

```js
stack.push('test');
console.log(stack.isEmpty()); // false
```

### .size()
returns the number of elements in the stack.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   number
  </td>
 </tr>
</table>

```js
console.log(stack.size()); // 1
```

### .clone() 
creates a shallow copy of the stack.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>
   Stack
  </td>
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
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>
   array
  </td>
 </tr>
</table>

```js
console.log(stack.toArray()); // [{ id: 2 }, { id: 4 } , { id: 8 }]
```

### .clear()
clears all elements from the stack.

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
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
