//Pigeonhole Sort in JavaScript
// param {number[]} arr - The array to be sorted
function pigeonholeSort(arr) {
    let n = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;
    let holes = new Array(range).fill(0);
    for (let i = 0; i < n; i++) {
        holes[arr[i] - min]++;
    }
    let index = 0;
    for (let i = 0; i < range; i++) {
        while (holes[i]--) {
            arr[index++] = i + min;
        }
    }
    return arr;
}
export default pigeonholeSort;
