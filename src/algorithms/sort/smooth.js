//Smooth osrt in javascript
//params: array
function smoothSort(arr) {
    let len = arr.length;
    let temp = arr[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] < temp) {
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
    return arr;
}
export default smoothSort;