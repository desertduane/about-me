'use strict';

// 5 about-me question prompts



alert('Do you want to play a guessing game?? Answer "yes" or "no."');

var scoreCard = []

var gamingWow = prompt('Have I played over 1,000 hours of World of Warcraft?').toLowerCase();

if (gamingWow === 'yes' || gamingWow === 'y'){
  alert('Correct');
  console.log('The user said ' + gamingWow + ' to if I had played 1000 hours of Wow.');
  scoreCard.push('Q1');
}else {
  alert('Incorrect');
  console.log('The user said ' + gamingWow + ' to if I had played 1000 hours of Wow.');
}

var pets = prompt('Do I have two cute fluffy bunnies as pets?').toLowerCase();

if (pets === 'yes' || pets === 'y'){
  alert('Awe your right!!');
  console.log('The user said ' + pets + ' to if I two fluffy bunnies.');
  scoreCard.push('Q2');
}else {
  alert('My bunnies are sad!');
  console.log('The user said ' + pets + ' to if I two fluffy bunnies.');
}

var shirts = prompt('Do I own a closet full of vacation shirts?').toLowerCase();

if (shirts === 'yes' || shirts === 'y'){
  alert('Good job I have traveled a lot.');
  console.log('The user said ' + shirts + ' to do I have a closet of vacation shirts.');
  scoreCard.push('Q3');
}else{
  alert('Surprise the answer is yes!!');
  console.log('The user said ' + shirts + ' to do I have a closet of vacation shirts.');
}

var bigFish = prompt('Have I caught a 130lb Alaskan Halibut?').toLowerCase();

if (bigFish === 'yes' || bigFish === 'y'){
  alert('You are right! It put up quite the fight.');
  console.log('The user said ' + bigFish + ' to have I caught a !30lb Alaskan Halibut.');
  scoreCard.push('Q4');
}else{
  alert('I did in fact catch one that big');
  console.log('The user said ' + bigFish + ' to have I caught a !30lb Alaskan Halibut.');
}

var drinkCoffee = prompt('Have I ever had a cup of coffee?').toLowerCase();

if (drinkCoffee === 'yes' || drinkCoffee === 'y'){
  alert('Surprise the answer is actually no!');
  console.log('The user said ' + drinkCoffee + ' to if I have ever had a cup of coffee.');
}else{
  alert('Most people will not believe I have not had a cup of coffee.');
  console.log('The user said ' + drinkCoffee + ' to if I have ever had a cup of coffee.');
  scoreCard.push('Q5');
}

var x = 0;

while(x < 4){
  var age = parseInt(prompt('How old am I?'));
  if(age === 27){
    alert('You are correct!');
    scoreCard.push('Q6');
    break;
  }else if(age < 27){
    alert('Sorry I am older try again');
    x++;
  }else if(age > 27){
    alert('Sorry I am younger try again');
    x++;
  }if (x === 4){
    alert('Sorry you are out of guesses!')
  }
}


var guessesRemaining = 6;
var ansCompanies = ['microsoft', 'amazon'];

while(guessesRemaining > 0){

  var guessCompanies = prompt('What companies would I like to work for?');
  for(var i = 0; i < ansCompanies.length; i++){
    if(guessCompanies.toLowerCase() === ansCompanies[i].toLowerCase()){
      alert('correct');
      scoreCard.push('Q7');
      y = -1;
      break;
    }
  } if(guessesRemaining > 0){
    alert('guess again');
    guessesRemaining--;
  }
}








alert('You got ' + scoreCard.length + ' out of 7 correct');
