//Sublist Search in Javascript
// param {number[]} arr - The array to be searched
function sublistSearch(arr, key) {
    let n = arr.length;
    let m = key.length;
    for (let i = 0; i < n - m + 1; i++) {
        let j = 0;
        while (j < m && arr[i + j] === key[j]) {
            j++;
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
}
export default sublistSearch;
