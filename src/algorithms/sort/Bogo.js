//Bogo sort in JavaScript
// param {number[]} arr - The array to be sorted
function bogoSort(arr) {
    let n = arr.length;
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}
function isSorted(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
function shuffle(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = Math.floor(Math.random() * n);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
export default bogoSort;