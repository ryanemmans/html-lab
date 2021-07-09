// Time of day?
function getTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    if (hourNow > 18) {
      greeting = 'Good evening ';
    } else if (hourNow > 11) {
      greeting = 'Good afternoon ';
    } else if (hourNow >=0) {
      greeting = 'Good morning '
    } else {
      greeting = 'Welcome ';
}
    document.write(greeting);
}

// What is your name?
function getUserName(){
    let userName = prompt('Oh snap, an annoying JavaScript prompt.\nHi! What is your name?')
    document.write(userName + '! Get ready for some wholesome cat photos!')
    return userName;
}

// Do you like cats?
function doYouLikeCats(){
    let likecats = prompt('Sorry, another annoying prompt.\nWe are almost there.\nAre you a fan of cats??\n( yes / no )')
    if(likecats == 'yes'){
        document.write('Cool, me too! Cats are tight. Look at this silly thing!')
    } else {
        document.write("Sorry to hear. You should probably get a dog or something. I mean come on, look at this thing!")
    }
}

console.log(doYouLikeCats)

// Change image button
function imgChange(){
    document.getElementById('image').src = 'images/kitten2.jpg';
}

// Create a user guessing game
// guess a number between 1 and 5:
// if they guess outside of 1 -100, make them guess again
// may get to:
// higher or lower
// generate a random correct number

function guessingGame(){
    let correctAnswer = 5;
    let numberOfGuesses = 5;
// 1 - 20
    for(let i = 0; i < numberOfGuesses; i++){
        console.log(i);
        let userAnswer = prompt('Can you guess the age of my cat?');
        while(userAnswer <= 0 || userAnswer > 20){
            userAnswer = prompt('Enter a Number!');
            console.log('User Guess: ' + userAnswer)
        }
        if(userAnswer == correctAnswer){
          document.getElementById("gif").src = 'images/catshaq.gif';
          document.getElementById("gif").alt = 'awwwwww yeeeeahhhh';
          alert('You got it!');
          break;
        } else if (userAnswer < correctAnswer){
          alert('A little more...');
         } else if (userAnswer > correctAnswer){
          alert('A little less...');
        } else {
          alert('OOPS. Womp womp.');
        }
    }
}