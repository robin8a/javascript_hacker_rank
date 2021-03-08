

function PickingNumber(arr) {
    var frecuencia = []
    var result = 0
    var max = 0
    var count = 0

    arr.sort(function(a, b){return a - b});
    var lastIndexMatch = -1

    while (lastIndexMatch < arr.length-1 ) {

        if (lastIndexMatch === 0) {
            var actualNumber = arr[lastIndexMatch]
        }else {
            var actualNumber = arr[lastIndexMatch+1]
        }

        var countNumber = 0
        for (var j=lastIndexMatch+1; j < arr.length; j++) {
            if (actualNumber === arr[j]) {
                lastIndexMatch = j
                countNumber++
            }
        }
        frecuencia.push(countNumber)
    }

    return frecuencia

    // i       j       actualNumber    countNumber     frecuencia      lastIndexMatch
    // 0       0       1               1               []                  0
    // 0       1       1               2               []                  1
    // 0       2       2               2               []                  1
    // 0       3       2               2               [] ...              1
    // 0       7       2               2               [2]                 1
    // 1       2       2               1               [2]                 2
    // 1       3       2               2               [2]                 3
    // 1       7       2               2               [2,2]...            3
    // 2       4       4               1               [2,2]               4
    // 2       5       4               2               [2,2]               5
    // 2       6       4               2               [2,2]               5
    // 2       7       4               2               [2,2,2]             5
    //         6       5               1               [2,2,2]             6
    //         7       5               2               [2,2,2]             7
    //         8       5               3               [2,2,2]             8
    //         8       5               3               [2,2,2,3]           8 



    

    // [1,1,2,2,4,4,5,5,5]
    // [2,2,2,3]
    // 2+2 =4
    // max = 4
    // 2+2 = 4
    // max = 4
    // 2+3 = 5
    // max = 5
    // return 5


    // [4,6,5,3,3,1]
    // [1,1,1,2,1]
    // max = 2
    // max = 2
    // max = 3
    // max = 3

    // [1,2,2,3,1,2]
    // [2,3,1]
    // max = 2 + 3 = 5
    // 3 + 1 = 4
    // max = 5

}


var arrFrecuencia1 = PickingNumber([1,1,2,2,4,4,5,5,5])
console.log('Freq array1: ', arrFrecuencia1)


var arrFrecuencia2 = PickingNumber([1,2,2,3,1,2])
console.log('Freq array2: ', arrFrecuencia2)




function PickingNumberOptionTwo(arr) { 
    arr.sort(function(a, b){return a - b})

    // 1. Encontrar los sub-arreglos que cumplan con los criterios
    // 2. Encontar el mayor de esos arreglo y retornar el valor
    

}