//Counting Sort in JavaScript
// param {number[]} arr - The array to be sorted
function    countingSort(arr) {
    let n = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(n);
    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    return output;
}
export default countingSort;
