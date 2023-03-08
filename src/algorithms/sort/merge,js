//Merge sort in JavaScript
// param {number[]} arr - The array to be sorted
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


function mergeSort(arr) {
    let n = arr.length;
    if (n < 2) {
        return arr;
    }
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}


export default mergeSort;