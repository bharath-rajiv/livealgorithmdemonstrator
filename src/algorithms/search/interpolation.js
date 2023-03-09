//Interpolation Search in JavaScript
//params: array, value
function interpolationSearch(arr, val) {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    while (arr[start] <= val && arr[end] >= val) {
        let pos = start + Math.floor((val - arr[start]) * (end - start) / (arr[end] - arr[start]));
        if (arr[pos] === val) return pos;
        if (arr[pos] < val) start = pos + 1;
        else end = pos - 1;
    }
    return -1;
}
export default interpolationSearch;