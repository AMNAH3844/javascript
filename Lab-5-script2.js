//-------------------------------------------Math.random()-----------------------------------------

// Generate a decimal number between 0 and 0.99 Math.random();
Math.random()
// Save it to a variable:
var decimal = Math.random();

// Log the value of decimal to the console 
console.log(decimal);
// Log the value of decimal MULTIPLIED BY 10/100/1000.... depends you want value from which range
console.log(decimal * 10);



//-------------------------------------------Explanation-----------------------------------------
// Generate a decimal number between 0 and 0.99 and save it to a variable
let deci = Math.random();

// Log the value of decimal to the console 
console.log("Random Decimal:", decimal);

// Log the value of decimal multiplied by 10 (or any other range you need)
console.log("Random Number (0-9):", deci * 10);
console.log("Random Number (0-99):", deci * 100);
console.log("Random Number (0-999):", deci * 1000);

// To get an **integer** instead of a decimal, use Math.floor()
console.log("Random Integer (0-9):", Math.floor(deci * 10)); 
console.log("Random Integer (0-99):", Math.floor(deci * 100)); 
console.log("Random Integer (0-999):", Math.floor(deci * 1000)); 



//-------------------------------------------indexof()-----------------------------------------
// The indexOf() method returns the index of the first occurrence of a character
console.log("ho-ho-ho".indexOf('h'));                            // Output: 0
console.log("ho-ho-ho".indexOf('o'));                            // Output: 1
console.log("ho-ho-ho".indexOf('-'));                            // Output: 2

// The lastIndexOf() method finds the last occurrence of a character
console.log("ho-ho-ho".lastIndexOf('h'));                        // Output: 6
console.log("ho-ho-ho".lastIndexOf('o'));                        // Output: 7
console.log("ho-ho-ho".lastIndexOf('-'));                        // Output: 5



//-------------------------------------------split()-----------------------------------------------
// The split() method splits a string into an array of substrings based on a given delimiter.
console.log("ho-ho-ho".split("-"));                              // Output: ['ho', 'ho', 'ho']

// If you split using an empty string, it will split every character
console.log("hello".split(""));                                  // Output: ['h', 'e', 'l', 'l', 'o']

// Splitting a sentence into words
console.log("JavaScript is fun!".split(" "));                    // Output: ['JavaScript', 'is', 'fun!']


//------------------------------------------- Changing String Case -----------------------------------------------

var greet = "Hello, ";

// Convert to uppercase
console.log(greet.toUpperCase());                                // Output: "HELLO, "

// Convert to lowercase
console.log(greet.toLowerCase());                                // Output: "hello, "

// Convert mixed case
console.log("HeLLo WoRLd".toLowerCase());                        // Output: "hello world"
console.log("HeLLo WoRLd".toUpperCase());                        // Output: "HELLO WORLD"
