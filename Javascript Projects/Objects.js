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
  name: 'SaltedCaramelIceCream',
  price: 2.95,
  ingredients: ['butter', 'icecream']
}

console.log(menu.name)

/*Write an expression that invokes the alerter() function in the following array, myArray:

const myArray = [ function alerter() { alert('Hello!'); } ];
*/

//ANSWER:
myArray[0]();


/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

chameleon = {
  color: 'green',
  changeColor: function() {
    if (this.color='green')
    {
      this.color='pink'
    }

    else if (this.color='pink')
    {
      this.color='green'
    }
  }
}

/*
Write an expression using Object.keys() to extract the keys (i.e., property names) from the triangle object:

const triangle = {
  type: 'polygon',
  sides: 3,
  sumOfAngles: 180,
  equilateral: true,
  equiangular: true
};
*/

//ANSWER:
Object.keys(triangle)

/* Now do the same for its values */

Object.values(triangle)