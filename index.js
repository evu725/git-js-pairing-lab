// Problem 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}

// Problem 2
//write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3
//multiples of 3 are 3,6,9,12,15//

const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0)
            console.log(i)
    }
}
//console.log(multiplesOfThree());

// Problem 3
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i)
        }
    }
}

//console.log(multiplesOfThreeOrFive())


// Problem 4
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


// Problem 5
const multiply = (num1, num2) => {
    let multiply = num1 * num2;
    return multiply
}

//console.log(multiply(2, 4))     //returns 8
//console.log(multiply(10, -5))   //returns -50
//console.log(multiply(3, 7.5))  //returns 22.5


// Problem 6
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

// Problem 7
const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}

//console.log(isNegative(3))         //returns false
//console.log(isNegative(-2))        //returns true
//console.log(isNegative(Math.PI))   //returns false


// Problem 8
//Write a function triangleArea that takes in the height and base of a triangle and returns the area of the triangle.
//triangleArea(5, 7)    //returns 17.5
//triangleArea(6, 8)    //returns 24//

const triangleArea = (height, base) => {
    let area = (height * base) / 2
    return area
}

//console.log(triangleArea(5, 7))    //returns 17.5
//console.log(triangleArea(6, 8))    //returns 24

// Problem 9
const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    }
    else {
        return false
    }
}

console.log(betweenTwentyAndFourty(20))      //return false
console.log(betweenTwentyAndFourty(21))     //return true
console.log(betweenTwentyAndFourty(39))    //return true
console.log(betweenTwentyAndFourty(40))   //return false


// Problem 10
const largest = (num1, num2, num3) => {
    let max;

    // compare num 1 to num2 
    if (num1 > num2) {
        // num1 is max number
        max = num1;
    } else { // b is greater than a
        // num2 is the maximum number
        max = num2;
    }

    // num3 greater than max value
    if (num3 > max) {
        // num3 is greater than the max
        max = num3;
    }

    return max;


}

console.log(largest(4, 6, 8));        // 8
console.log(largest(30, 22, 17));     // 30
console.log(largest(41, 108, 86));    // 108








// 11
// Write a function printTime that prints out the current time in the format HH:MM:ss. Do not hard code the hour, minute, or seconds values.
const printTime = () => { //function to print current time in HH:MM:ss format
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); //get current hours, minutes, seconds

    //format to ensure two digits
    if (hours < 10) { //if hours is less than 10, add a leading zero
        hours = '0' + hours; //string concatenation
    }
    if (minutes < 10) { //if minutes is less than 10, add a leading zero
        minutes = '0' + minutes; //string concatenation
    }
    if (seconds < 10) { //if seconds is less than 10, add a leading zero
        seconds = '0' + seconds; 
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

printTime(); // prints current time in HH:MM:ss format 



// Problem 12
// Write a function isLeapYear to determine whether a given year is a leap year in the Gregorian calendar.

// isLeapYear(2000)    //returns true
// isLeapYear(1900)    //returns false
// isLeapYear(2020)    //returns true
// isLeapYear(1999)    //returns false
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { //divisible by 4 and not divisible by 100 OR divisible by 400
        return true;
    } else {
        return false; //not a leap year
    }
}

console.log(isLeapYear(2000))    //returns true
console.log(isLeapYear(1900))    //returns false
console.log(isLeapYear(2020))    //returns true
console.log(isLeapYear(1999))    //returns false





// Problem 13
// Write a function getExtention to get the extension of a filename.
getExtention("hello.txt")     //returns ".txt"
getExtention("app.js")        //returns ".js"
getExtention("README.md")     //returns ".md"
const getExtention = (filename) => {
    let extention = filename.slice(filename.lastIndexOf('.'));
    return extention;
} 

console.log(getExtention("hello.txt"))     //returns ".txt" 
console.log(getExtention("app.js"))        //returns ".js" 
console.log(getExtention("README.md"))     //returns ".md"  //returns ".md" 


// Problem 14
const absoluteNineteen = (num) => {
    abs_difference = Math.abs(num - 19);
    if (num > 19) {
        return abs_difference * 3;
    }
    return abs_difference;
};

console.log(absoluteNineteen(10));      // return 9
console.log(absoluteNineteen(0))        // return 19
console.log(absoluteNineteen(-5))       // return 24
console.log(absoluteNineteen(15.5))     // return 3.5
console.log(absoluteNineteen(30));      // return 33
console.log(absoluteNineteen(100))      // return 243
console.log('-------------')

// Problem 15
const switchLetters = (str) => {
    if (str === '') {
        return str;
    }

    if (str.length < 2) {
        return str;
    }

    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    let middleChar = str.slice(1, -1);

    let newString = lastChar + middleChar + firstChar;

    return newString;
};

console.log(switchLetters('anne')); //return "enna"
console.log(switchLetters('hello world')); //return "dello worlh"
console.log(switchLetters('a')); //return "a"
console.log(switchLetters('')); //return ""
console.log('-------------')

// Problem 16
const changeString = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const nextAlphabet = 'bcdefghijklmnopqrstuvwxyza';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            result += nextAlphabet[index];
        } else {
            result += char;
        }
    }
    return result;
}

console.log(changeString("abc"))             //return "bcd"
console.log(changeString("helloworld"))      //return "ifmmpxpsme"
console.log('-------------')