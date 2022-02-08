"use strict";

/*

The function below (adder_three) takes an array of 3 elements as an argument
and returns the sum of all those elements.

Note: The function only works if the elements in the array (argument) are numbers.

TEST
adder_three([1, 1, 1]) should return 3
adder_three([2, 1, -2]) should return 1

*/

// let a1 = [1, 2, 3];
// console.log( adder_three( a1 ) ); // this logs 6 since 1 + 2 + 3 is 6

// function adder_three ( _array ) {
//   let sum = 0;
//   for ( let i = 0; i < 3; i++ ) { 
//     sum = sum + _array[i];
//   }
//   return sum;
// }


let a2 = [5, 2, 1, 7];

function adder(_array) { 
  let sum = 0;
  for (let i = 0; i < _array.length; i++) {
    sum = sum + _array[i];
   
  }

    return sum;
  }

  

  console.log( adder([5, 2, 1, 7]));
  // console.log( adder([i]));
  // console.log( adder([0]));

 