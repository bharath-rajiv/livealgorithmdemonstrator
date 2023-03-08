//Intoro sort in javascript
//params: array
function introSort(arr) {
    let maxDepth = Math.floor(Math.log(arr.length) * 2);
    return introSortHelper(arr, 0, arr.length - 1, maxDepth);
}
function introSortHelper(arr, lo, hi, depthLimit) {
    if (hi <= lo) return;
    if (depthLimit === 0) {
        heapSort(arr, lo, hi);
        return;
    }
    let p = partition(arr, lo, hi);
    introSortHelper(arr, lo, p - 1, depthLimit - 1);
    introSortHelper(arr, p + 1, hi, depthLimit - 1);
}
function partition(arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[hi];
    arr[hi] = temp;
    return i + 1;
}
function heapSort(arr, lo, hi) {
    let n = hi - lo + 1;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, lo);
    }
    for (let i = n - 1; i >= 0; i--) {
        let temp = arr[lo];
        arr[lo] = arr[lo + i];
        arr[lo + i] = temp;
        heapify(arr, i, 0, lo);
    }
}
function heapify(arr, n, i, lo) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[lo + l] > arr[lo + largest]) {
        largest = l;
    }
    if (r < n && arr[lo + r] > arr[lo + largest]) {
        largest = r;
    }
    if (largest !== i) {
        let temp = arr[lo + i];
        arr[lo + i] = arr[lo + largest];
        arr[lo + largest] = temp;
        heapify(arr, n, largest, lo);
    }
}
export default introSort;
