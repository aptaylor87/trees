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
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let returnVal = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      returnVal = current.val + returnVal;

      for (let child of current.children) 
        toVisitStack.push(child)
    }
    return returnVal;
  
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let countEvens = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) {
        countEvens++;
      }

      for (let child of current.children) 
        toVisitStack.push(child)
    }
    return countEvens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let countHigher = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) {
        countHigher++;
      }

      for (let child of current.children) 
        toVisitStack.push(child)
    }
    return countHigher;
  }
}

module.exports = { Tree, TreeNode };
