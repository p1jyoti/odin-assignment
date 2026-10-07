
/*
 Write a program that takes a user’s input and 
 prints the numbers from one to the number the user entered.
 However, for multiples of three print Fizz instead of the number 
 and for the multiples of five print Buzz. 
 For numbers which are multiples of both three and five print FizzBuzz.
*/



let num = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));


for (let i = 1; i <= num; i++) {
    console.log(i)
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}



