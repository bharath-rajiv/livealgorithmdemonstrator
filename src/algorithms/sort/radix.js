//Radix sort in JavaScript
// param {number[]} arr - The array to be sorted
function radixSort(arr) {
    let max = Math.max(...arr);
    let n = arr.length;
    let exp = 1;
    while (max / exp > 0) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < n; i++) {
            let digit = Math.floor(arr[i] / exp) % 10;
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
        exp *= 10;
    }
    return arr;
}
export default radixSort;
