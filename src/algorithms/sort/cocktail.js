//Cocktail Sort in Javascript
// param {number[]} arr - The array to be sorted
function cocktailSort(arr) {
    let n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        start++;
    }
    return arr;
}
export default cocktailSort;