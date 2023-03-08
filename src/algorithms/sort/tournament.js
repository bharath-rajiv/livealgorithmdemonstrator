//tournament sort
//params: array
function tournamentSort(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
    }
    temp.sort((a, b) => a - b);
    return temp;
}
export default tournamentSort;
