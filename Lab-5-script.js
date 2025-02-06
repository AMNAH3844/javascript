// Function to list all items in an array
function listArrayItems(arr) { 
    for (var i = 0; i < arr.length; i++) {                     // Loop through each item in the array
        console.log(arr[i]);                                   // Print each item to the console
    }
}
// Creating an object 'table' with a property 'color'
var table = { color: "black" };

// Accessing the 'color' property of 'table' using bracket notation
console.log(table["color"]);                                   // Output: "black"
// Creating an object 'car' with a single property 'type'
 var car = { type: "honda" };                                //   var car = {};
                                                             //    car["car type"] = "honda";  // Property name with a space
                                                            //    console.log(car["car type"]); // Output: hond
// Adding new properties to the 'car' object
car.color = "black";                                           // Adding a 'color' property with value "black"
car.speed = 200;                                               // Adding a 'speed' property with value 200

// Printing the updated 'car' object
console.log(car);                                              // Output: { type: "honda", color: "black", speed: 200 }

//------------------------------------------Example 2----------------------------------------------
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {                     // Loop through each item in the array
        console.log(i, arr[i]);                                // Print index and item
    }
}
// Defining an array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

// Calling the function
listArrayItems(colors);



//------------------------------------------Object-------------------------------------------------
// Creating an object 'table' with properties
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100
};

console.log(table);                                            //Output: { legs: 3, color: 'brown', priceUSD: 100 } 



//------------------------------------------Overwriting Object-------------------------------------
//Overwriting Object Properties
var car = {};                                                  // Creating an empty object

// Assigning properties
car.color = "red";                                             // Initially set color to "red"
car["color"] = "green";                                        // Overwrites color to "green"
car["speed"] = 200;                                            // Set speed to 200
car.speed = 100;                                               // Overwrites speed to 100

console.log(car);                                              // Output: { color: "green", speed: 100 }



//------------------------------------------Push and Pop-------------------------------------
//Lets build a function for push and pop...
// Function to create an array from given elements
function arrayBuilder(one, two, three) {
    var arr = [];                                              // Initialize an empty array
    arr.push(one);                                             // Add first element
    arr.push(two);                                             // Add second element
    arr.push(three);                                           // Add third element
    return arr;                                                // Return the final array
}

// Example usage
console.log(arrayBuilder("apple", "banana", "cherry"));        // Output: ["apple", "banana", "cherry"]



//------------------------------------------Dynamic Property Access--------------------------------
//Useful thing that bracket notation has but is no available in the dot notation: It can evaluate expressions.
// Array of keys to be accessed dynamically
var arrOfKeys = ['speed', 'altitude', 'color'];

// Defining the 'drone' object correctly
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
};

// Loop through the keys and access properties dynamically
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);                          // Output: 100, 200, "red"
}
