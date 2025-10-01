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


const multiplesOfThreeOrFive = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            console.log(i)
    }
}

//console.log(multiplesOfThreeOrFive(20))