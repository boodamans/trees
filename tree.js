/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;

    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
        sum += node.val;
        stack.push(...node.children);
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;

    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
        if (node.val % 2 === 0) {
          count++;
        }
        stack.push(...node.children);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (lowerBound === undefined || lowerBound === null) {
      throw new Error("lowerBound required");
    }

    let count = 0;

    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
        if (node.val > lowerBound) {
          count++;
        }
        stack.push(...node.children);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
