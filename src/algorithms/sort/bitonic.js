//Bitonic sort in javascript
//params: array
function bitonicSort(arr) {
    bitonicMerge(arr, 0, arr.length, 1);
    return arr;
}
function compAndSwap(arr, i, j, dir) {
    if (dir === (arr[i] > arr[j])) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
function bitonicMerge(arr, low, cnt, dir) {
    if (cnt > 1) {
        let k = Math.floor(cnt / 2);
        for (let i = low; i < low + k; i++) {
            compAndSwap(arr, i, i + k, dir);
        }
        bitonicMerge(arr, low, k, dir);
        bitonicMerge(arr, low + k, k, dir);
    }
}
export default bitonicSort;