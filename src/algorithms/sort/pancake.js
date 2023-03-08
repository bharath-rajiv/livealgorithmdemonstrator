//Pancake Sort in JavaScript
// param {number[]} arr - The array to be sorted
function pancakeSort(arr) {
    let n = arr.length;
    for (let i = n; i > 1; i--) {
        let max = Math.max(...arr.slice(0, i));
        let index = arr.indexOf(max);
        flip(arr, index + 1);
        flip(arr, i);
    }
    return arr;
}
function flip(arr, k) {
    let left = 0;
    let right = k - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
export default pancakeSort;
