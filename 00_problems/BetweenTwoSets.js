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
                // Tomo el mínimo
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
    for(var i=0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


// console.log('Max Array: ', maxArray([2,6]))

console.log('LCM [2,6]: ', lowerCommonMultiple([2,6]))
console.log('LCM [4,6]: ', lowerCommonMultiple([4,6]))


// https://www.matesfacil.com/ESO/numeros/MCD/maximo-comun-divisor-MCD-definicion-ejemplos-ejercicios-resueltos-test-problemas-descomposicion-primos.html
// GCD

//Primos: 2, 3, 5, 7, 11, 13, 17...n

// 24  |   2
// 12  |   2
// 6   |   2
// 3   |   3
// 1

// 24 = 2*2*2*3 = (2^3)*(3) = (2^2)*(2)*(3) 

// 36  |   2
// 18  |   2
// 9   |   3
// 3   |   3
// 1

// 36 = 2*2*3*3 = (2^2)*(3^2) = (2^2)*(3)*(3)

// GCD = (2^2)*(3) = 4*3 = 12



// 180 |   2
// 90  |   2
// 45  |   3
// 15  |   3
// 5   |   5
// 1

// 180 = 2*2*3*3*5



// 2 = 4 = 8 = 16 = 32 = 64 = 128 = 256 = 512 = 1024 
// 2^1 = 2^2 = 2^3 

// 324 |   2
// 162 |   2
// 81  |   2
// 27  |   3
// 9   |   3
// 3   |   3
// 1        

// 2*2*2*3*3*3


// GCD = 2*2*3*3 = 4*9 = 36

// Algoritmos
// 1.   Numeros primos entre 2 y maximo arreglo
// 2.   1 hasta el numero primo mayor hasta max del punto 1
// 3.   Dividos el valor de cada número del arreglo por los números hasta llegar a 1
// 3.1  Almacenamos cada numero primo en un arreglo
// 3.2  Una funcion que me saque los numero primos comunes en el arreglo del 3.1 y lo almacenas en un arreglo
// 3.3  Una funcion que multiplique los numeros del arreglo 3.3


// Metodo 1

function minArray(arr) {
    var min = 100
    for(var i=0; i < arr.length; i++){
        if (arr[i] <= min) {
            min = arr[i]
        }
    }
    return min
}

function gcdMethoOne(arr) {
    var min = minArray(arr)
    var arrOne = []
    var arrTwo = []
    var gcd = 0

    for (var i = 1; i < min; i++) {
        
        if (arr[0]%i === 0) {
            arrOne.push('SI')
        }else {
            arrOne.push('NO')
        }

        if (arr[1]%i === 0) {
            arrTwo.push('SI')
        }else {
            arrTwo.push('NO')
        }
   
    }

    for (var i = 0; i < arrOne.length; i++) {
        if ( (arrOne[i] == arrTwo[i]) && (arrOne[i] === 'SI' && arrTwo[i] === 'SI') ) {
            gcd = i
        }
    }

    return gcd+1
}

console.log('GCD [24,36]: ', gcdMethoOne([24,36]))
console.log('GCD [12,18]: ', gcdMethoOne([12,18]))

//         24      36
// 1       SI      SI
// 2       SI      SI
// 3       SI      SI
// 4       SI      SI
// 5       NO      NO
// 6       SI      SI
// 7       NO      NO
// 8       SI      NO
// 9       NO      SI
// 10      NO      NO
// 11      NO      NO
// 12      SI      SI
// 13      NO      NO
// 14      NO      NO