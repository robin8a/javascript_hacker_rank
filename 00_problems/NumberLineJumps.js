// 0 3 4 2

var x1 = 0
var v1 = 3

var x2 = 4
var v2 = 2

// x1  v1  x2  v2
// 0   3   4   2
// 3   3   6   2
// 6   3   8   2
// 9   3   10  2
// 12  3   12  2

result = true
jumps = 0
if (v2 > v1) {
    console.log('NO')
}else {
    while (result) {

        if (x1 == x2) {
            result = false
            jumps += 1
            // break
        }

        x1 += v1
        x2 += v2
    }
    console.log('YES')
}

var result = false
while (!result) {

    if (v2 > v1) {
        console.log('NO')
        break
    }

    if (x1 == x2) {
        result = true
        jumps += 1
    }

    x1 += v1
    x2 += v2
}
if (result){
    console.log('YES')
}


