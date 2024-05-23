function highAndLow(numbers){
  
  numbers = numbers
              .split(' ')
              .map( e => +e )
              .sort( (a, b) => b - a )

  // console.log(numbers)

  let maxAndMin = `${numbers[0]} ${numbers[numbers.length - 1]}`

  return maxAndMin
}

console.log(highAndLow('5 2 1 10 11'))


// params: numbers    // a string of space-separated numbers
// return: maxAndMin    // a string of the max and min numbers
// e.g. highAndLow('5 2 1 10 11')
// results in '11 1'


// convert string to an array, separated by ' '
// sort the array in descending order
// declare a variable maxAndMinand assign it to `${numbers[0]} ${numbers[numbers.length - 1]}`
// return maxAndMin
