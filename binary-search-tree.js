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
    if (val === this.val) return this;
    else if (val < this.val) return this.left?.findRecursively(val);
    else if (val > this.val) return this.right?.findRecursively(val);
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if (val < this.val) {
      if (this.left === null) {
        this.left = newNode;
        return newNode;
      }
      this.left.insertRecursively(val);
    } else {
      if (this.right === null) {
        this.right = newNode;
        return newNode;
      }
      this.right.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];

    visitedNodes.push(this.val);
    if (this.left) visitedNodes.push(...this.left.dfsPreOrder());
    if (this.right) visitedNodes.push(...this.right.dfsPreOrder());

    return visitedNodes;
    // [15, (left node, (left node (left node)))]

    // traverse(node) {
    //   if (node === null) return;
    //   console.log(node.val);
    //   traverse(node.left);
    //   traverse(node.right);
    // }

    // base case: pushing this.val
    // visitedNodes.push(...dfsPreOrder())
    // return visitedNodes

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    // [left, current, right]
    let visitedNodes = [];

    if (this.left) visitedNodes.push(...this.left.dfsInOrder());
    visitedNodes.push(this.val);
    if (this.right) visitedNodes.push(...this.right.dfsInOrder());

    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    // [left, right, current]
    let visitedNodes = [];

    if (this.left) visitedNodes.push(...this.left.dfsPostOrder());
    if (this.right) visitedNodes.push(...this.right.dfsPostOrder());
    visitedNodes.push(this.val);

    return visitedNodes;
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
    if (this.root === null) this.root = new Node(val);
    else this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) return current;
      else if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
    }

    return undefined;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;
    else return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) return [];
    else return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (this.root === null) return [];

    let visitedNodes = [];
    let toVisitQueue = [this.root];

    // [current, left, right, left-left, left-right, right-left, right-right, etc]
    while (toVisitQueue.length > 0) {
      let current = toVisitQueue.shift();

      visitedNodes.push(current.val);

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return visitedNodes;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // first find the node, if not found return undefined
    // 0 children
    // 1 child
    // 2 child
    // root
  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
