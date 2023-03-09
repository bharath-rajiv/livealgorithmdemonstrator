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
console.log(sublistSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 4, 5]));
export default sublistSearch;
