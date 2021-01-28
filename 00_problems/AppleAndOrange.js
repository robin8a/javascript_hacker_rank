function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCountInHouse = 0
    let orangesCountInHouse = 0

    // Adding a
    for (let i=0; i< apples.length; i++){
        apples[i] += a
    }

    // Adding b
    for (let i=0; i< oranges.length; i++){
        oranges[i] += b
    }

    // Comparing between s and t
    for (let i=0; i< apples.length; i++){
        if (apples[i] >= s && apples[i] <= t) {
            applesCountInHouse++
        }
    }

    // Comparing between s and t
    for (let i=0; i< oranges.length; i++){
        if (oranges[i] >= s && oranges[i] <= t) {
            orangesCountInHouse++
        }
    }

    console.log(applesCountInHouse)
    console.log(orangesCountInHouse)
}