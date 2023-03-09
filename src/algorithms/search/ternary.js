//Ternary   Search   Algorithm in JavaScript
// param {number[]} arr - The array to be searched
function ternarySearch(arr, key) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid1 = Math.floor(left + (right - left) / 3);
        let mid2 = Math.floor(right - (right - left) / 3);
        if (arr[mid1] === key) {
            return mid1;
        }
        if (arr[mid2] === key) {
            return mid2;
        }
        if (key < arr[mid1]) {
            right = mid1 - 1;
        } else if (key > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}
export default ternarySearch;
