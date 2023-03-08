//Stooge sort in JavaScript
// param {number[]} arr - The array to be sorted
function stoogeSort(arr) {
    let n = arr.length;
    if (n < 2) {
        return arr;
    }
    if (arr[0] > arr[n - 1]) {
        let temp = arr[0];
        arr[0] = arr[n - 1];
        arr[n - 1] = temp;
    }
    if (n > 2) {
        let m = Math.floor(n / 3);
        stoogeSort(arr.slice(0, n - m));
        stoogeSort(arr.slice(m));
        stoogeSort(arr.slice(0, n - m));
    }
    return arr;
}
export default stoogeSort;
