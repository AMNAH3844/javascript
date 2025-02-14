//Little Lemon Recepit Maker

const dishes = [
    { name: "Pizza", price: 15 },
    { name: "Burger", price: 10 },
    { name: "LavaCake", price: 9 },
  ];
  // Tax value
  const tax = 1.4;
  function getPrices(taxBoolean) {
    for (let dish of dishes) {
      let finalPrice;
      if (taxBoolean === true) {
        finalPrice = dish.price * tax;
      } 
      else if (taxBoolean === false) {
        finalPrice = dish.price;
      } 
      else {
        console.log("You need to pass a boolean to the getPrices call!");
        return; // Exit the function
      }
    }
}
  // Function to get discount
  function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && guests > 0 && guests < 30) {
      let discount = 0;
      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
      console.log("Discount is: $" + discount);
    } 
    // Step 12: Handle invalid guests parameter
    else {
      console.log("The second argument must be a number between 0 and 30");
    }
  }
  // Test cases
  getDiscount(true, 2);  // Valid case
  getDiscount(false, 10); // Valid case
  getDiscount(true);      // Missing guests argument
  getDiscount(false, 35); // Invalid guest number
  getDiscount("yes", 10); // Invalid taxBoolean
  getDiscount(true, "5"); // Invalid guest type
  getDiscount();          //missing arguments
  