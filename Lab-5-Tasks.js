// TASK 01
// Create a new empty array literal and assign it to the variable clothes.
// Add 5 of your favorite items of clothing as strings using the push() method. 
// Remove the fifth piece of clothing from the array using the pop() method.
// Add a new piece of clothing using the push() method.
// Use console.log to show the third item from the clothes array in the console.

let clothes = [];

clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Hoodie");
clothes.push("Jacket");
clothes.push("Sneakers");

clothes.pop();                                                 // Removes "Sneakers"

clothes.push("Cap");  

console.log("Third clothing item:", clothes[2]);               // Output: Third clothing item: Hoodie

// Display the final array
console.log("Final clothes array:", clothes);                  // Output: Final clothes array: [ 'T-shirt', 'Jeans', 'Hoodie', 'Jacket', 'Cap' ]



// TASK 02
// Create a new empty object literal and assign it to the variable favCar.
// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.
// Use the console to log the entire favCar object.

let favCar = {};

favCar.color = "Red";

favCar.convertible = true;

console.log("Favorite Car Object:", favCar);                   // Output: Favorite Car Object: { color: 'Red', convertible: true }
