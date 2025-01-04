// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
*Реализовать простое двоичное дерево поиска согласно описанию задачи
* с использованием Node из расширений
// */

class BinarySearchTree {
  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
    // remove line with error and write your code here
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return this.search(this.rootNode, data);
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
    // remove line with error and write your code here
  }

  min() {
    const node = this.findMinNode(this.rootNode); return node ? node.data : null;
    // remove line with error and write your code here
  }

  max() {
    let node = this.rootNode;
    while (node && node.right !== null) {
      node = node.right;
    }
    return node ? node.data : null;
  }
    // remove line with error and write your code here
  }

//  module.exports = {
//   BinarySearchTree
// };
