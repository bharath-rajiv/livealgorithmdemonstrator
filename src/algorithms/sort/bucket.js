//Bucket sort in JavaScript
//param {number[]} arr - The array to be sorted
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;

        }
        arr[j + 1] = key;
    }
    return arr;
}

function bucketSort(arr) {
    let n = arr.length;
    let buckets = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        let bucketIndex = Math.floor(n * arr[i]);
        buckets[bucketIndex].push(arr[i]);
    }
    buckets.forEach(bucket => {
        insertionSort(bucket);
    });
    return [].concat(...buckets);
}
export default bucketSort;
