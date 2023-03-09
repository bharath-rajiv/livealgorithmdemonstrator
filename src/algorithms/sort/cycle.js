//Cycle sort in javascript
//params: array
function cycleSort(arr) {
    // let writes = 0;
    for (let cycleStart = 0; cycleStart <= arr.length - 2; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;
        for (let i = cycleStart + 1; i < arr.length; i++) {
            if (arr[i] < item) pos++;
        }
        if (pos === cycleStart) continue;
        while (item === arr[pos]) pos++;
        if (pos !== cycleStart) {
            let temp = item;
            item = arr[pos];
            arr[pos] = temp;
            // writes++;
        }
        while (pos !== cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart + 1; i < arr.length; i++) {
                if (arr[i] < item) pos++;
            }
            while (item === arr[pos]) pos++;
            if (item !== arr[pos]) {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;
                // writes++;
            }
        }
    }
    return arr;
}
export default cycleSort;