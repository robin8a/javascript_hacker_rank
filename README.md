# javascript_hacker_rank
Javascript
- [Dillinger markdown Editor](https://dillinger.io/)

# Diagonal Difference

```js
n, array = [1,2,3,4,5,6,7,8,9]
n=3

let arr =[
[1,2,3],
[4,5,6],
[7,8,9]
]
// Diagonal 1
     i,j
arr [0,0] + arr [1,1] + arr[2,2]
i = 0,1,2
j = 0,1,2

// Diagonal 2
     i,j
arr [0,2] + arr [1,1] + arr [2,0]
i = 0,1,2
j = 2,1,0 (El 1er 2 es el tamaño del arreglo)

// Ex. matrix n = 5
n = 5
5,4,3,2,1
(n(i-1) - 1)
5 - 1 = 4
4 - 1 = 3
3 - 1 = 2
2 - 1 = 1
1 - 1 = 0

// ## j para 
(2 - i) = 2
(2 - i) = 1
(2 - 2) = 0

for (let i = 0, i < arr.length, i++) {
    sumaDiagonalUno += arr[i,i]
    sumaDiagonalDos += arr[i,arr.length-i]
}
return @kelly investigar la función valor absoluto e implementarla

return Math.abs(sumaDiagonalUno - sumaDiagonalDos)

```



# Plus Minus
1/2 = 0.5 = 50%
# toFixed
var numero = 9.46789
var conDecimal = numero.toFixed(2) 

let contPositives = 0
let contNegatives = 0
let contZeros = 0

let ratioPositives = 0
let ratioNegatives = 0
let ratioZeros = 0

for (let index = 0; index < arr.length; index++) {
     if ( arr[index] > 0)
          contPositives++
     else if (arr[index] < 0)
          contNegatives++
     else
          contZeros++
}

console.log()
console.log()
console.log()


# Staircase


# Mini-Max Sum