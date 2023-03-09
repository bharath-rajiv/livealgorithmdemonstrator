//Quick sort in JavaScript
// param {number[]} arr - The array to be sorted
function quickSort(arr) {
    let n = arr.length;
    if (n < 2) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < n; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
export default quickSort;
