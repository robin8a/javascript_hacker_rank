
// 2 => 5
// 17 => 20

// 17/5 = 3
// 17%5 = 2 = (5 - 2) = 3

// 67/5 = 13
// 67%5 = 2 = (5 - 2) = 3


// 43/5 = 8
// 43%5 = 3 = (5 - 3) = 2

// 38/5 = 7
// 38%5 = 3 = (5 - 3) = 2

// 41 => 4
// 41/5 = 8 = 5*5 = 40 => 41-40 = 1
// 41%5 = 1 = (5 - 1) =4
// (5 - number%5)

// 41%5 == 0
// 41+1 = 42 cont = 1
// 42%5 == 0
// 42+1 = 43 cont = 2
// 43%5 == 0
// 43+1 = 44 cont = 3
// 44%5 == 0
// 44+1 = 45 cont = 4
// 45%5 == 0
// return cont


function NextFiveMultiple(number) {
    var toNextFiveMultiple = 5 - number%5

    if (number%5 == 0){
        return number
    }else {
        return number +  toNextFiveMultiple
    }
}

function NextFiveMultipleTwo(number) {
    // var i = 0
    // while (i < arr.length) {
    //     arr[i]
    //     i++
    // }
    while (number%5 != 0){
        number ++
    }
    return number
}

function NextMultiple(number, multiple) {
    var toNextFiveMultiple = multiple - number%multiple

    if (number%multiple == 0){
        return number
    }else {
        return number +  toNextFiveMultiple
    }
}


console.log('next multiple: ', NextMultiple(41,5))
console.log('next multiple: ', NextMultiple(67,5))
console.log('next multiple: ', NextMultiple(61,10))
console.log('next multiple: ', NextMultiple(13,3))