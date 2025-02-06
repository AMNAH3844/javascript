//------------------------------------------- Methods -----------------------------------------

// Step 1: Create an empty object
var car = {};

// Step 2: Add properties to the car object
car.mileage = 98765;                                            // Assign mileage
car.color = "red";                                              // Assign color

// Step 3: Log the car object before adding methods
console.log("Car before adding methods:", car);

// Step 4: Add a method 'turnTheKey' to the car object
car.turnTheKey = function() {
    console.log("The engine is running.");                      // Prints message when method is called
};

// Step 5: Add a method 'lightsOn' to the car object
car.lightsOn = function() {
    console.log("The lights are on.");                          // Prints message when method is called
};

// Step 6: Log the updated car object
console.log("Car after adding methods:", car);

// Step 7: Call the methods
car.turnTheKey();                                               // Output: "The engine is running."
car.lightsOn();                                                 // Output: "The lights are on."
