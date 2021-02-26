function subArray (arr, d, m) {
    var result = 0
    for (var i=0; i < arr.length; i++) {
        var nextIndex = i + 1
        if (nextIndex <= arr.length-1) { // Asegurando que no nos salgamos del arreglo
            if ((arr[i] + arr[nextIndex]) === d) {
                result++
            }
            if ((arr[i] + arr[nextIndex]) === m) {
                result++
            }
        }
    }
}