function countSort(arr) {
    if (arr.length <= 1) return arr;
    const { length } = arr;
    // let min = Math.min(...arr);
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    for (let i = 0; i < length; i++) {
        count[arr[i]]++;
    }
    let newArr = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            newArr.push(i);
            count[i]--;
        }
    }
    return newArr;
}

countSort([1, 3, 2, 5, 4, 6]);