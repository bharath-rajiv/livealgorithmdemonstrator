//Heap sort in javascript
// param {number[]} arr - The array to be sorted
function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, i, n);
    }
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, 0, i);
    }
    return arr;
}
function heapify(arr, i, n) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if (left < n && arr[left] > arr[max]) {
        max = left;
    }
    if (right < n && arr[right] > arr[max]) {
        max = right;
    }
    if (max !== i) {
        let temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;
        heapify(arr, max, n);
    }
}
export default heapSort;
