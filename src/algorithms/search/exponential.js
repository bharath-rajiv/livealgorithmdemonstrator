//Exponential search in Javascript
//paramters : array, value
function exponentialSearch(arr, val) {
    let len = arr.length;
    if (arr[0] === val) return 0;
    let i = 1;
    while (i < len && arr[i] <= val) i *= 2;
    return binarySearch(arr, i / 2, Math.min(i, len), val);
}
function binarySearch(arr, start, end, val) {
    if (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) return mid;
        if (arr[mid] > val) return binarySearch(arr, start, mid - 1, val);
        return binarySearch(arr, mid + 1, end, val);
    }
    return -1;
}

export default exponentialSearch;