function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1],
                    array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(BubbleSort([5, 2, 6, 3, 1, 8, 9, 4, 3, 7, 10, 5]))

