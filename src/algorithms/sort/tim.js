//Tim sort in javascript
//params: array
function timSort(arr) {
    const minRun = 32;
    for (let i = 0; i < arr.length; i += minRun) {
        insertionSort(arr, i, Math.min(i + minRun - 1, arr.length - 1));
    }
    for (let size = minRun; size < arr.length; size = 2 * size) {
        for (let left = 0; left < arr.length; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min(left + 2 * size - 1, arr.length - 1);
            merge(arr, left, mid, right);
        }
    }
    return arr;
}
function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

function merge(arr, l, m, r) {
    let len1 = m - l + 1,
        len2 = r - m;
    let left = new Array(len1);
    let right = new Array(len2);
    for (let x = 0; x < len1; x++) {
        left[x] = arr[l + x];
    }
    for (let x = 0; x < len2; x++) {
        right[x] = arr[m + 1 + x];
    }
    let i = 0;
    while (i < len1 && len1 > 0) {
        arr[l++] = left[i++];
    }
    while (i < len2 && len2 > 0) {
        arr[l++] = right[i++];
    }
}
export default timSort;