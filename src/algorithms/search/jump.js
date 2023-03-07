//Jump search in Javascript
//paramters : array, value
function jumpSearch(arr, val) {
    let len = arr.length;
    let step = Math.floor(Math.sqrt(len));
    let prev = 0;
    while (arr[Math.min(step, len) - 1] < val) {
        prev = step;
        step += Math.floor(Math.sqrt(len));
        if (prev >= len) return -1;
    }
    while (arr[prev] < val) {
        prev++;
        if (prev == Math.min(step, len)) return -1;
    }
    if (arr[prev] == val) return prev;
    return -1;
}
