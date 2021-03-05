

function PickingNumber(arr) {
    var frecuencia = []
    var result = 0
    var max = 0
    var count = 0

    arr.sort(function(a, b){return a - b});

    for (var i=0; i < arr.length; i++) {
        var actualNumber = arr[i]
        var countNumber = 0
        for (var j=i+1; j < arr.length; j++) {
            if (actualNumber === arr[j]) {
                countNumber++
            }
        }
        frecuencia.push(countNumber)
    }

    i       j       actualNumber    countNumber     frecuencia
    0       1       1               0               []
    0       1       1               1               []
    0       2       1               2
    
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