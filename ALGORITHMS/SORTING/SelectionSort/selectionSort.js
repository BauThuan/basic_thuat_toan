function SelectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i
        let temp = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
            array[i] = array[min]
            array[min] = temp
        }

    }
    return array

}
console.log(SelectionSort([5, 2, 6, 3, 1, 8, 9, 4, 3, 7, 10, 5]))