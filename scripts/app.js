//---------------------------USER STORIES
//When the user arrives on the page an alert should allow user input to name their pet
//The name, age(1-2), hunger(1-10), and boredom (1-10) should be shown in a 'scoreboard' format
//The user will click begin to start the life of their pet
//How long is the game? 6 minutes, the age will increment 1 at 3 minutes
//How often does the hunger and boredom increase? Increment 1 every 15 seconds
//When will pet morph? At the 3 minute mark 
//How do you feed?Toggling 'feed' button decrements 1 hunger
//How do you play? Toggling 'play' button decrements 1 boredom
//How to toggle lights? Toggling 'light' button will turn background black
//How does it die? If hunger or boredom reaches 10 the snail dies 




//Create a 'scoreboard' for the game including name,age,hunger,boredom
//Include 'begin' button
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
//style with css
//create an alert that welcomes user to game TODO: allow user input to name the snail 
// alert('WELCOME TO TOMAGOTCHI! NAME YOUR PET SNAIL...FEED IT TO LOWER HUNGER (1-10).... PET IT TO KEEP IT FROM DYING OF BOREDOM....& TURN OFF THE LIGHTS WHEN ITS TIME FOR SLEEP....');


//Global Variables
const startTime = 240;
let time = startTime;
let hunger = 5;
let boredom = 5;
let sleep = 5;




//Create 'gary' the snail class
class Pet {

    constructor(name = 'gary') {

        this.name = name;
        this.age = 5;
        this.hunger = 5;
        this.boredom = 5;
        this.sleep = 5;
    }
};


 //create new instance 'gary'
 const gary = new Pet ('Gary')
 console.log(gary)
 
 
 
 //say hello to user
// console.log(gary.sayHello());

// --------------------------------------STEP 1
// ADD EVENT LISTENER FOR BEGIN BUTTON
$('.begin').on('click', function() {
    // console.log('clicked..')

    startTimer();
});

//CREATE TIMER FUNCTION THAT STARTS AT 240 and DECREMENTS TO 0
const startTimer = function() {
    const timer = setInterval(function () {

            
            if (time === 1) {

                //stop timer
                clearInterval(timer);
            }
            //decrement time from 240s to 1s
            time--;

            //update DOM
            $(`#timer`).text(`TIME TIL DEATH: ${time}s`);



            //morph gary at the 3 minute mark 
            if (time === 120) {

                alert('GARY HAS GROWN UP! HE IS NOW 2!')
                $(`#age`).text(`AGE: 2`);
                
            }
           
           
            //-----increment hunger,boredom, sleep every 15 seconds----//
            if ( time % 10 === 0) {

                //increment hunger 1
                hunger++;
                $(`#hunger`).text(`HUNGER: ${hunger}`);     //update DOM

                //increment boredom 1
                boredom++;
                $(`#boredom`).text(`BOREDOM: ${boredom}`);  //update DOM

                //increment sleep 1
                sleep++;
                $(`#sleep`).text(`SLEEPINESS: ${sleep}`);   //update DOM
            }


            //if hunger,boredom,sleep reaches 10 gary dies, game over
            if (hunger >= 10 ) {

              alert('BARNACLES!! GARY HAS DIED!!')
                return; //after it alerts reset the game
            } 
            
            if (boredom >= 10 ) {

                alert('BARNACLES!! GARY HAS DIED!!')
                return;
            } 

            if (sleep >= 10 ) {

                alert('BARNACLES!! GARY HAS DIED!!')
                return;
            } 
        }, 1000);
        
    };


//ADD EVENT LISTENER FOR FEED BUTTON

$('#feed').on('click', function() {

    
    // /click feed button to decrement hunger by 1 
    //if hunger reaches 0, stop decrementing
    if (hunger > 1) {
        hunger--;
    }

    //update DOM
    $(`#hunger`).text(`HUNGER: ${hunger}`)

});

//BOREDOM EVENT LISTENER 

$('#pet').on('click', function() {

    //click pet me button to decrement boredom by 1, stop decrementing at 1
    if (boredom > 1) {
    boredom--;
    }
    //update DOM
    $(`#boredom`).text(`BOREDOM: ${boredom}`)
    
});

//ADD EVENT LISTENER FOR LIGHTS BUTTON

$('#lights').on('click', function() {

    //click lights function to decrement sleepiness by 1, stop decrementing at 1
    if ( sleep > 1) {
    sleep--;
    }
    //update DOM
    $(`#sleep`).text(`SLEEPINESS: ${sleep}`)

});



// Display a character of your choice on the screen to represent your pet




// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.