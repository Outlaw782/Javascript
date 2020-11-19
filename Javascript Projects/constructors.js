/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread, meat, vegetables){
    this.bread = bread
    this.meat = meat;
    this.vegetables = vegetables;
}

let deliciousandwich = new Sandwich('Wheat', 'Ham', 'Lettuce');






const driver = {
    name: 'Danica',
    displayName: function () {
      console.log(`Name: ${this.name}`);
    }
  };
  
  const car = {
    name: 'Fusion'
  };
  /*
  Write an expression using bind() that allows us to "borrow" the displayName() 
  method from driver for the car object to use. Note: The expression itself is
sufficient (no need to save it to a variable))))).
  */
 driver.displayName.bind(car);