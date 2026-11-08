const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      } else {
        return;
      }
    }
  }

  find(data) {
    let current = this.rootNode;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    let parent = null;
    let current = this.rootNode;

    while (current !== null && current.data !== data) {
      parent = current;
      current = data < current.data ? current.left : current.right;
    }

    if (current === null) {
      return;
    }

    if (current.left === null || current.right === null) {
      const replacement = current.left === null ? current.right : current.left;

      if (parent === null) {
        this.rootNode = replacement;
      } else if (parent.left === current) {
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
      return;
    }

    let minParent = current;
    let minNode = current.right;

    while (minNode.left !== null) {
      minParent = minNode;
      minNode = minNode.left;
    }

    current.data = minNode.data;

    if (minParent === current) {
      minParent.right = minNode.right;
    } else {
      minParent.left = minNode.right;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};