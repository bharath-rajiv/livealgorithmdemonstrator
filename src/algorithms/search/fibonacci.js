//Fibonacci Search in JavaScript
//params: array, value
function fibonacciSearch(arr, val) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;
    while (fibM < len) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
    let offset = -1;
    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, len - 1);
        if (arr[i] < val) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > val) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else return i;
    }
    if (fibMMm1 && arr[offset + 1] === val) return offset + 1;
    return -1;
}
export default fibonacciSearch;