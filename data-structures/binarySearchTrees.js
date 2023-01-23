/*
 * Trees
 * -- Definition
 * Trees are a data structure that consists of nodes in a
 * parent / child relationship.
 *
 * Binary Search Trees
 * Every parent node has at most 2 children
 * Every node to the left of a parent is always less than the parent.
 * Every node to the right of a parent is always greater than the parent.
 *
 * -- Terminology
 * - Root: the top node of the tree
 * - Child: a node directly connected to another when moving away from the Root
 * - Parent: the converse notion of a child
 * - Siblings: a group of nodes with the same parent
 * - Leaf: a node with node children
 * - Edge: the connection between a node and another
 *
 * -- Useful for
 * HTML DOM
 * Network Routing
 * Abstract Syntax Tree
 * Min/Max Trees: to implement a Tic Tac Toe winner algorithm for instance
 * Artificial Intelligence
 * Folders architecture in operating systems
 * Computer file systems
 *
 * -- Complexity
 * Insertion: O(log(n)) - Not guaranteed
 * Searching: O(log(n)) - Not guaranteed
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserting a node in the tree
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          // go on the left
          if (!current.left) {
            current.left = newNode;
            return this;
          }

          current = current.left;
        } else if (value > current.value) {
          // go on the right
          if (!current.right) {
            current.right = newNode;
            return this;
          }

          current = current.right;
        }
      }
    }
  }

  // Find a node in a BST
  find(value) {
    if (!this.root) return undefined;

    let current = this.root;
    let found = false;

    // We loop while there's something to loop
    // over and we haven't found our node.
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  /*
   * Tree Traversal
   * How to visit each node in a tree?
   *
   * -- Methods
   * Breadth First Search: going across the tree
   * Depth First Search (InOrder, PreOder, PostOrder): going down the tree
   * Time Complexity for each is the same.
   * DFS has a better space complexity on wide trees while BFS
   * will have better space complexity on deep trees than DFS.
   */
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);

    return data;
  }

  // Gives you an array with values "in order" (ascending)
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(20);
tree.insert(8);
console.log("Tree", tree);
console.log("Tree traversed with BFS", tree.BFS()); // [10,6,15,3,8,20]
console.log("Tree traversed with DFSPreOrder", tree.DFSPreOrder()); // [10,6,3,8,15,20]
console.log("Tree traversed with DFSPostOrder", tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log("Tree traversed with DFSInOrder", tree.DFSInOrder()); // [3,6,8,10,15,20]
