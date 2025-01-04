const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 * Реализовать стек с заданным интерфейсом через массив.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 * 
 * stack.push(1); // добавляет элемент в стек
* stack.peek(); // возвращает peek, но не удаляет его, возвращает 1
* stack.pop(); // возвращает верхний элемент из стека и удаляет его, возвращает 1
* stack.pop(); // не определено
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }
  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};
