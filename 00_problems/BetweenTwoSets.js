// 24  | 2
// 12  | 2
// 6   | 2
// 3   | 3
// 1

// O(n log(n)) solution.
// 1. find the LCM of all the integers of array A.
// 2. find the GCD of all the integers of array B.
// 3. Count the number of multiples of LCM that evenly divides the GCD.


// 24  | 2
// 12  | 2
// 6   | 2
// 3   | 3
// 1

// 2,4,8,(12)

// 36  | 2
// 18  | 2
// 9   | 3
// 3   | 3
// 1

// 2,3,6,(12),18

// https://www.matesfacil.com/ESO/numeros/minimo-comun-multiplo-definicion-ejemplos-ejercicios-test-problemas-descomposicion-primos.html

// LCM [2,6]
// lcm(2,6) = 6
// 1   2*1=2       6*1=(6)
// 2   2*2=4       6*2=12
// 3   2*3=(6)     6*3=18
// 4   2*4=8       6*4=24
// 5   2*5=10      6*5=30


// 24

function lowerCommonMultiple(arr) {
    var max = maxArray(arr)
    var arrayOne = []
    var arrayTwo = [] 

    for(var i=1; i <= max; i++) {
        arrayOne.push(i*arr[0])
        arrayTwo.push(i*arr[1])
    }

    var maxOne = maxArray(arrayOne)
    var maxTwo = maxArray(arrayTwo)
    var mayorBetweenOneAndTwo = 0

    if (maxOne >= maxTwo) {
        mayorBetweenOneAndTwo = maxOne
    }else{
        mayorBetweenOneAndTwo = maxTwo
    }

    for(var i=0; i < arrayOne.length; i++) {
        for(var j=0; j <= arrayTwo.length; j++) {
            if (arrayOne[i] == arrayTwo[j]) {
                if (arrayOne[i] <= mayorBetweenOneAndTwo) {
                    mayorBetweenOneAndTwo = arrayOne[i]
                }
            }
        }
    }

    return mayorBetweenOneAndTwo
}

function maxArray(arr) {
    var max = 0
    for(var i=0; i < array.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
