//Exponential search in Javascript
//paramters : array, value
function exponentialSearch(arr, val) {
    let len = arr.length;
    if (arr[0] == val) return 0;
    let i = 1;
    while (i < len && arr[i] <= val) i *= 2;
    return binarySearch(arr, i / 2, Math.min(i, len), val);
}
