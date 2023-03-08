//Gnome sort in JavaScript
// param {number[]} arr - The array to be sorted
function gnomeSort(arr) {
    let n = arr.length;
    let i = 0;
    while (i < n) {
        if (i === 0 || arr[i] >= arr[i - 1]) {
            i++;
        } else {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            i--;
        }
    }
    return arr;
}
export default gnomeSort;