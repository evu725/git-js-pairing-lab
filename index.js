//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}


//write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3
//multiples of 3 are 3,6,9,12,15//

const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0)
            console.log(i)



    }
}
//console.log(multiplesOfThree());







//write a funtion untilNum that takes in an integer parameter and console logs all positive numbers from 1 to that integer
// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
// untilNum(42)   //prints out numbers 1 through 42 //
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
//console.log(untilNum(5));
//console.log(untilNum(9));
//console.log(untilNum(42));


const multiply = (num1, num2) => {
    let multiply = num1 * num2;
    return multiply
}

//console.log(multiply(2, 4))     //returns 8
//console.log(multiply(10, -5))   //returns -50
//console.log(multiply(3, 7.5))  //returns 22.5




//write a function add that takes in two number parameters
//  and returns their sum. But if the two values are the same, return triple their sum!
//add(2, 4)     //returns 6
//add(10, -5)   //returns 5
//add(3, 7.5)   //returns 10.5
//add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
//add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that//

const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }

}

const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}

console.log(isNegative(3))         //returns false
console.log(isNegative(-2))        //returns true
console.log(isNegative(Math.PI))   //returns false