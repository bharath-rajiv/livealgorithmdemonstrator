//Flash sort 
//params: array
function flashSort(arr) {
    let n = arr.length;
    let m = ~~(0.45 * n);
    let l = new Array(m);
    for (let i = 0; i < m; i++) l[i] = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    if (min == max) return arr;
    let c1 = (m - 1) / (max - min);
    for (let k = 0; k < n; k++) {
        let j = ~~(c1 * (arr[k] - min));
        l[j]++;
    }
    for (let p = 1; p < m; p++) l[p] = l[p] + l[p - 1];
    let hold = arr[0];
    let c2 = (n - 1) * (c1);
    let newn = 0;
    let flash;
    let j = 0;
    let k = m - 1;
    while (newn < (n - 1)) {
        while (j > (l[k] - 1)) {
            j++;
            c2 = c2 - 1;
            k = ~~(c2 * (arr[j] - min));
        }
        flash = arr[j];
        if (j < l[k]) {
            while (j < l[k]) {
                k = ~~(c2 * (flash - min));
                l[k]--;
                let temp = arr[l[k]];
                arr[l[k]] = flash;
                flash = temp;
                newn++;
            }
        }
    }
    return arr;
}
export default flashSort;