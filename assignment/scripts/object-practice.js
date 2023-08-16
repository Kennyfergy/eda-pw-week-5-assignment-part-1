console.log("***** Object Practice *****");

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Kenny",
  lastName: "Ferguson",
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ["Pizza", "Pasta", "Pulled Pork"],
}; // end me object

console.log("A little about me:", me); //testing me object

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
const fullName = me.firstName + " " + me.lastName;
// adding properties to make full name
console.log("My full name is:", fullName); // testing property added correctly

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log("My first favorite food is:", me.favThreeFoods[0]);
console.log("My last favorite food is:", me.favThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log("My current shoe count is approximately:", me.shoeCount); //logging shoe count
me.shoeCount = me.shoeCount + 1; // added 1 to shoeCount
console.log("Updated shoe count:", me.shoeCount); //testing shoeCount

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = "green"; // adding favoriteColor property to me object
console.log("Added favoriteColor which is:", me.favoriteColor); // testing if favoriteColor added successfully
console.log(me);
