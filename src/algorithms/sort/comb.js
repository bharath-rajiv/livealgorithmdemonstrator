//Comb sort in JavaScript
// param {number[]} arr - The array to be sorted
function combSort(arr) {
    let n = arr.length;
    let gap = n;
    let shrink = 1.3;
    let sorted = false;
    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }
        let i = 0;
        while (i + gap < n) {
            if (arr[i] > arr[i + gap]) {
                let temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i + gap] = temp;
                sorted = false;
            }
            i++;
        }
    }
    return arr;
}
export default combSort;