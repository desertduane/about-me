"use strict";

// 5 about-me question prompts

var gamingWow = prompt("Have I played over 1,000 hours of World of Warcraft?").toLowerCase();
if (gamingWow === "yes" || gamingWow === "y"){
  alert("Correct");
  console.log("The user said " + gamingWow + " to if I had played 1000 hours of Wow.");
}else {
  alert("Incorrect");
  console.log("The user said " + gamingWow + " to if I had played 1000 hours of Wow.");
}

var pets = prompt("Do I have two cute fluffy bunnies as pets?").toLowerCase();
if (pets === "yes" || pets === "y"){
  alert("Awe your right!!");
  console.log("The user said " + pets + " to if I two fluffy bunnies.");
}else {
  alert("My bunnies are sad!");
  console.log("The user said " + pets + " to if I two fluffy bunnies.");
}

var shirts = prompt("Do I own a closet full of vacation shirts?").toLowerCase();
if (shirts === "yes" || shirts === "y"){
  alert("Good job I have traveled a lot.");
  console.log("The user said " + shirts + " to do I have a closet of vacation shirts.");
}else{
  alert("Surprise the answer is yes!!");
  console.log("The user said " + shirts + " to do I have a closet of vacation shirts.");
}

var bigFish = prompt("Have I caught a 130lb Alaskan Halibut?").toLowerCase();
if (bigFish === "yes" || bigFish === "y"){
  alert("Your right! It put up quite the fight.");
  console.log("The user said " + bigFish + " to have I caught a !30lb Alaskan Halibut.");
}else{
  alert("I did in fact catch one that big");
  console.log("The user said " + bigFish + " to have I caught a !30lb Alaskan Halibut.");
}

var drinkCoffee = prompt("Have I ever had a cup of coffee?").toLowerCase();
if (drinkCoffee === "yes" || drinkCoffee === "y"){
  alert("Surprise the answer is actually no!");
  console.log("The user said " + drinkCoffee + " to if I have ever had a cup of coffee.");
}else{
  alert("Most people will not believe I have not had a cup of coffee.");
  console.log("The user said " + drinkCoffee + " to if I have ever had a cup of coffee.");
}
