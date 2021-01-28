let arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];

function diagonalDifference(arr) {
    var sumaDiagonalUno = 0
    var sumaDiagonalDos = 0

    for (var i = 0; i < arr.length; i++) {
        console.log('arr[i,i]: ', arr[i])
        rowArray = arr[i]
        console.log('tempArray: ', rowArray[i])
        sumaDiagonalUno += rowArray[i]
        console.log('sumaDiagonalUno: ', sumaDiagonalUno)
        // sumaDiagonalDos += rowArray[arr.length - i]
        // console.log('sumaDiagonalDos: ', sumaDiagonalDos)
    }

    // console.log(sumaDiagonalUno - sumaDiagonalDos)
    // console.log(Math.abs([sumaDiagonalUno - sumaDiagonalDos])
}

diagonalDifference(arr)