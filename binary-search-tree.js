"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val)

    if (val < this.val) {
      if (this.left === null) {
        this.left = newNode;
        return newNode;
      }
      this.left.insertRecursively(val)
    } else {
      if (this.right === null) {
        this.right = newNode;
        return newNode;
      }
      this.right.insertRecursively(val)
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let previous;
    let direction;

    while (current) {
      if (newNode.val < current.val) {
        previous = current;
        direction = "left";
        current = current.left;
      } else {
        previous = current;
        direction = "right";
        current = current.right;
      }
    }

    // insert node at null arrival point
    previous[direction] = newNode;
    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {




  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
