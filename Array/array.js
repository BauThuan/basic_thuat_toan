function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return `${str} không đúng định dạng`
    }
    const barkword = [];
    for (let i = str.length - 1; i >= 0; i--) {
        barkword.push(str[i])
    }
    return barkword.join('')
}


// Bubble sort
const handleArrange = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

function mergeSortedArrays(arr1, arr2) {
    const mergeDataArray = []

    if (!(Array.isArray(arr1) && Array.isArray(arr2) && arr1.length > 0 && arr2.length > 0)) {
        return 'Không đúng định dạng'
    }
    const arrange1 = handleArrange(arr1)
    const arrange2 = handleArrange(arr2)
    console.log(11111, arrange1, arrange2)
    let startIndArr1 = arrange1[0]
    let startIndArr2 = arrange2[0]
    let i = 0
    let j = 0

    while (startIndArr1 || startIndArr2) {
        console.log(startIndArr1, startIndArr2)
        if (startIndArr1 < startIndArr2) {
            mergeDataArray.push(startIndArr1)
            startIndArr1 = arrange1[i]
            i++
        } else {
            mergeDataArray.push(startIndArr2)
            startIndArr2 = arrange2[j]
            j++
        }
    }
    return mergeDataArray
}

// console.log('Kết quả:', reverse('My name is ThuanTv'))
console.log('Kết quả:', mergeSortedArrays([5, 3, 3], [4, 6, 3]))
// console.log('Kết quả:', mergeSortedArrays([3, 5, 7], [2, 6, 8]))