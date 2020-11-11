/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/


menu = {
    name: 'Salted Caramel Ice Cream',
    price: 2.95,
    ingredients: ['butter', 'ice cream', 'salt', 'sugar']
}



/*
Write an expression that outputs how to say hello in Portuguese:
*/

greetings = {
  hello: {
    english: 'hi',
    french: 'bonjour',
    portuguese: 'oi'
  },
  goodbye: {
    english: 'bye',
    french: 'au revoir',
    portuguese: 'tchau'
  }
};


console.log(greetings.hello.portuguese)




/* Write an expression to delete the numWindows property from house. */

let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
  };

  delete house.numWindows


/*Write an expression to add a new hasGarage property to house. Set the value of the hasGarage property to true. */
  let house = {
    color: 'green',
    numRooms: 4,
    forSale: false
  };

  house.hasGarage = true