//Fizz Buzz
const fizzbuzz = (i=1, add=1, range=100) => {

    //If we have reached the range, end the function.
    if (i > range) return;
 
    //Create an empty string to add to if the number gets fizzed or buzzed. 
    let fizzedOrBuzzed = "";

    //Multiples of 3 add "Fizz" to the "fizzedOrBuzzed" string.
    if (i%3 === 0) fizzedOrBuzzed += "Fizz";

    //Multiples of 5 add "Buzz" to the "fizzedOrBuzzed" string.     
    if (i%5 === 0) fizzedOrBuzzed += "Buzz";

    //If the string is still empty, console log the number. Otherwise, console log the string. 
    fizzedOrBuzzed === "" ? console.log(i) : console.log(`--${fizzedOrBuzzed} on ${i}--`);
    
    //Add the "add" amount to the current number
    i+=add;
    
    //Run again. 
    fizzbuzz(i, add, range);    
}

//Call FizzBuzz. Pass in arguments if you want. 
//EX: fizzbuzz(1, 2, 50) <-- "start at 1, add 2 each time, until 50"
fizzbuzz();