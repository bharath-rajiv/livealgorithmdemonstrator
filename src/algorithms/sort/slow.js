//Slow sort in javascript
//params: array
function slowSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return slowSort(left).concat(pivot, slowSort(right));
}
export default slowSort;
