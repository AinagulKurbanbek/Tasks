function myMax (arr){
    let maxNum = arr[0]
    for( let i = 0; i < arr.length; i++){
        if ( maxNum < arr[i] ) {
           maxNum = arr[i]
        }
    }

    return maxNum
}

console.log(myMax([5,8,25,82,52,0,-13,31]))
console.log((Math.max(63,72,72,65,93,62)))
console.log(myMax([-5,-7,-10]))


 