//tree sort in javascript
//params: array
function treeSort(arr) {
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = insert(root, arr[i]);
    }
    let result = [];
    traverse(root, result);
    return result;
}
function insert(root, value) {
    if (root == null) {
        root = new Node(value);
    } else if (value < root.value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }
    return root;
}
function traverse(root, result) {
    if (root == null) return;
    traverse(root.left, result);
    result.push(root.value);
    traverse(root.right, result);
}
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export default treeSort;