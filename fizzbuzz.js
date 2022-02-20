// son 3 ga bo'linsa, Fizz qaytadi.
// son 5 ga bo'linsa, Buzz qaytadi.
// son 3 ga ham 5 ga ham bo'linsa FizzBuzz qaytadi.
// son agar raqam bo'lmasa, 'Raqam emas' qaytadi.

function FizzBuzz(son) { 
    if (typeof son !== 'number') {
        return 'Raqam emas';
    }
    if (son % 5 === 0 && input % 3 ===0) {
        return 'FizzBuzz'
    }
    if (son % 3 === 0) {
        return 'Fizz';
    }
    if (son % 5 === 0) {
        return 'Buzz'
    }
    return son
 }
 
// son kiritiladi
 let a = FizzBuzz(15)

// console da natija chiqadi
 console.log(a);
