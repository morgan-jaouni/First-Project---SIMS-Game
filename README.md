### Spongebob SIMS

##### The goal of my first project ever was to create a SIMS like game where you can interact and keep a pet alive.


### USER STORIES

* When the user arrives on the page an alert should state the directions and allow user input to name their pet

* The name, age(1-2), hunger(1-10), and boredom (1-10) should be shown in a 'scoreboard' format

* The user will click begin to start the life of their pet

* How long is the game? 240s, the age will increment 1 at 180s and 120s

* How often does the hunger and boredom increase? Increment 1 every 15 seconds

* When will pet morph? At the 180s,120s minute mark 

* How do you feed?Toggling 'feed' button decrements 1 hunger

* How do you play? Toggling 'play' button decrements 1 boredom, the characters will change 

* How to toggle lights? Toggling 'light' button will turn dark, characters will change

* How does it die? If hunger or boredom reaches 10 the snail dies


### Technologies used: 
* html 
* CSS 
* JavaScript 
* jQuery

##### My approach to this game was to create the most basic game I possibly could. I started with a simple scoreboard that used Javascript to increment the hunger, etc. Then, I created buttons that decremented the scoreboard. Once I had these components working, I began to add on to the game. 

### Unsolved problems:  

After the user clicks 'OK' on the alert that their pet died, I wanted the page to refresh so the user can play again. Currently, It will reset, but the increments reset at 10 instead of 5. 

CSS issues - there is a sliver of white at the bottom of the screen when the window is full screen. 
When the size of the window is altered, the characters move positions on the screen. 
Some of the png characters are pixelated. 

I wanted the png characters in the background to return after the duration of the click button. 

### Triumphs

* Creating animations using keyframes and png characters

* Writing a function for the animations that toggle different png characters and changes the background for a period of time based on which button is clicked, before returning back to the main screen

* Creating buttons that allow the background to change for a period of time

* I thought I did a satisfactory job utilizing comments in JavaScript/html


### Challenges


* Creating an alert that allowed the user to input the name of their pet


* Creating keyframes that allowed the animation to move along the 
x-axis


* Failed to utilize comments in css


### Code snippets 

set an alert when the page loads that allows user input 
confirm('WELCOME!....');
let person = prompt("Enter the name of your snail!", "Gary the Snail");

if (person != null) {
    document.getElementById("name").innerHTML =
        person;
}

Removes a character from the screen for the duration of the function 
document.getElementById('puff').style.display="none";
