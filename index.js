// 1. Convert the string "123" to a number and add 7.
const stringValue = "123";
const numberValue = Number(stringValue);
console.log(numberValue + 7);

// 2. Check if the given variable is falsy and return "Invalid" if it is.

function checkFalsyValues(variable) {
    if (!variable) {
        return "Invalid";
    }
    return variable;
}

console.log(checkFalsyValues(0));

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// 4. Create an array of numbers and return only the even numbers using filter method.
const arrToBeFiltered = [1, 2, 3, 4, 5]
const evenNumbersFilteredArray = arrToBeFiltered.filter(number => number % 2 === 0);
console.log(evenNumbersFilteredArray);

// 5. Use the spread operator to merge two arrays, then return the merged array.
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
function getDayOfWeek(dayAsNumber) {
    switch (dayAsNumber) {
        case 1: return console.log("Sunday");
            break;
        case 2: return console.log("Monday");
            break;
        case 3: return console.log("Tuesday");
            break;
        case 4: return console.log("Wednesday");
            break;
        case 5: return console.log("Thursday");
            break;
        case 6: return console.log("Friday");
            break;
        case 7: return console.log("Saturday");
            break;
        default: return console.log("Invalid day");
    }
}
getDayOfWeek(0);

// 7. Create an array of strings and return their lengths using map method.
const arrOfStrings = ["a", "ab", "abc"]
const lengthOfStrings = arrOfStrings.map(string => string.length);
console.log(lengthOfStrings);

// 8. Write a function that checks if a number is divisible by 3 and 5.
function isDivisibleBy3And5(numberToBeChecked) {
    if (numberToBeChecked % 3 === 0 && numberToBeChecked % 5 === 0) {
        console.log("Divisible by both");
    }
}

isDivisibleBy3And5(15);
isDivisibleBy3And5(10);

// 9. Write a function using arrow syntax to return the square of a number.
const squareOfNumber = ((numberToBeSquared) => numberToBeSquared * numberToBeSquared);
console.log(squareOfNumber(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string.

function destructureObject(objectToBeDestructured) {
    const { objectName, objectAge } = objectToBeDestructured;
    return `${objectName} is ${objectAge} years old`;
}
console.log(destructureObject({ objectName: "John", objectAge: 25 }));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.
function sumOfNumbers(numbersToBeSummed) {
    let sum = 0;
    for (let i = 0; i < numbersToBeSummed.length; i++) {
        sum += numbersToBeSummed[i];
    }
    return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function returnPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    })
}

returnPromise().then((message) => {
    console.log(message);
});

// 13. Write a function to find the largest number in an array.
let arrOfNumbers = [1, 3, 7, 2, 4]
let largestNumber = arrOfNumbers[0]
for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] > largestNumber) {
        largestNumber = arrOfNumbers[i];
    }
}
console.log(largestNumber);

// 14. Write a function that takes an object and returns an array containing only its keys.

const objectToBeReturned = { 
    name: "John", 
    age: 30 
}

function returnKeysOfObject(objectToBeReturned) {
    return Object.keys(objectToBeReturned);
}

console.log(returnKeysOfObject(objectToBeReturned));

// 15. Write a function that splits a string into an array of words based on spaces.
function splitStringIntoArrayOfWords(stringToBeSplit) {
    return stringToBeSplit.trim().split(" ")
}

console.log(splitStringIntoArrayOfWords("  The quick brown fox"))