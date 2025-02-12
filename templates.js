/*Write a function processNumbers that:
1-Takes an array of number as an argument
2- use map() to double each function
3- use the spread op to pass the number to another function
4- uses the rest op to accept paramerters in that function
5- logs a formatted message using template literals*/
// Main function: processNumbers
function processNumbers(numbers) {
    // Step 2: Use map() to double each number
    const doubledNumbers = numbers.map(num => num * 2);

    // Step 3: Use the spread operator to pass numbers to another function
    displayNumbers(...doubledNumbers);
}

// Step 4: Another function using the rest operator to accept parameters
function displayNumbers(...numbers) {
    // Step 5: Log a formatted message using template literals
    console.log(`Processed Numbers: ${numbers.join(", ")}`);
    console.log(`Total Numbers Processed: ${numbers.length}`);
}

// Example usage
const numbersArray = [1, 2, 3, 4, 5];
processNumbers(numbersArray);


