function findNumber(arr, k) {
    //sort arr
    let sortedArr = arr.slice().sort((a, b) => a - b)
    
    //binary search
    let min = 0
    let max = arr.length - 1
    let midpoint
    
    while (min <= max) {
        midpoint = Math.floor((min + max) / 2)
        if (sortedArr[midpoint] === k) {
            return "YES"
        } else if (sortedArr[midpoint] < k) {
            min = midpoint + 1
        } else if (sortedArr[midpoint] > k) {
            max = midpoint - 1
        }
    }
    //return string
    return "NO"
}