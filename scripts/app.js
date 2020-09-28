 
//create an alert that welcomes user to game TODO: allow user input to name the snail 
confirm('WELCOME! NAME YOUR PET SNAIL...FEED YOUR SNAIL TO LOWER HUNGER.... PLAY WITH YOUR SNAIL TO KEEP IT FROM DYING OF BOREDOM....& TURN OFF THE LIGHTS WHEN YOUR SNAIL GETS SLEEPY....');
let person = prompt("Enter the name of your snail!", "Gary the Snail");

if (person != null) {
    document.getElementById("name").innerHTML =
        person;
}





//Global Variables
const startTime = 240;
let time = startTime;
let hunger = 5;
let boredom = 5;
let sleep = 5;
let gameOver = false;



//Create 'gary' the snail class
class Pet {

    constructor(name = 'gary') {

        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.sleep = 0;
    }
};


//create new instance 'gary'
const gary = new Pet('Gary')
console.log(gary)



// --------------------------------------STEP 1
// ADD EVENT LISTENER FOR BEGIN BUTTON
$('.begin').on('click', function () {
    // console.log('clicked..')

    startTimer();
    document.getElementById('bob').src = "./images/character.png"
    document.getElementById('gary').src = "./images/garyyy.png"
});
// if (time === 120) {
//     document.getElementById('gary');
// } 
// else {
//     document.getElementById('bob');
//create function to reset the game after game over alert
const resetGame = function () {
    hunger = 5;
    sleep = 5;
    boredom = 5;
    time = 240;
    gameOver = false;

}

//CREATE TIMER FUNCTION THAT STARTS AT 240 and DECREMENTS TO 0
const startTimer = function () {
    const timer = setInterval(function () {


        if (time === 1) {

            //stop timer
            clearInterval(timer);
        }
        //decrement time from 240s to 1s
        time--;

        //update DOM
        $(`#timer`).text(`TIME TIL DEATH: ${time}s`);



        //morph gary at the 180s minute mark 
        if (time === 180) {

            alert('GARY HAS GROWN UP! HE\'S A TEENAGER!')
            $(`#age`).text(`AGE: 2`);
            //at 120s change image to morph pet
            document.getElementById('gary').src = "./images/teenager.png"
        }
        //morph gary at the 120s minute mark 
        if (time === 120) {

            alert('GARY IS OLD!')
            $(`#age`).text(`AGE: 3`);
            //at 120s change image to morph pet
            document.getElementById('gary').src = "./images/garyold.png"
        }

        //-----increment hunger,boredom, sleep every 10 seconds----//
        if (time % 10 === 0) {

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


        //if hunger reaches 10 gary dies, game over
        if (hunger >= 10) {

            gameOver = true;


        }
        //if boredom reaches 10 gary dies, game over
        if (boredom >= 10) {

            gameOver = true;

        }
        //if sleep reaches 10 gary dies, game over
        if (sleep >= 10) {


            gameOver = true;

        }
        //if gameOver is true then reset the game
        if (gameOver === true) {

            //after it alerts reset the game
            alert('BARNACLES!!! GARY IS DEAD!!');

            resetGame();

        }
    }, 1000);
    ;
}


setTimeout(function () {

    document.getElementById('backdrop').src = "./images/background.jpg";}
        , 4500
);
//ADD EVENT LISTENER FOR FEED BUTTON

$('#feed').on('click', function () {

    //change img 
    document.getElementById('backdrop').src = "./images/krusty.png";
    document.getElementById('gary').src = "./images/feeding.png";
    document.getElementById('plank').style.display="none";
    document.getElementById('puff').style.display="none";
    document.getElementById('patrick').style.display="none";
    //change img back to original

    setTimeout(function () {

        document.getElementById('gary').src = "./images/garyyy.png";
        document.getElementById('backdrop').src = "./images/background.jpg";
    }
        , 4500);


    // /click feed button to decrement hunger by 1 
    //if hunger reaches 0, stop decrementing
    if (hunger > 1) {
        hunger--;
    }

    //update DOM
    $(`#hunger`).text(`HUNGER: ${hunger}`)

});

//BOREDOM EVENT LISTENER 

$('#pet').on('click', function () {


    // /chang img
    document.getElementById('bob').src = "./images/rock.png"
    document.getElementById('gary').src = "./images/pet.png"

    //change image back to original
    setTimeout(function () {

        document.getElementById('bob').src = "./images/character.png"
        document.getElementById('gary').src = "./images/garyyy.png"
    }
        , 4500);

    //click pet me button to decrement boredom by 1, stop decrementing at 1
    if (boredom > 1) {
        boredom--;
    }
    //update DOM
    $(`#boredom`).text(`BOREDOM: ${boredom}`)
});

//ADD EVENT LISTENER FOR LIGHTS BUTTON

$('#lights').on('click', function () {

    //change image to sleeping
    document.getElementById('bob').src = "./images/bobsleep.png"
    document.getElementById('gary').src = "./images/sleeping.png"
    document.getElementById('backdrop').src = "./images/night.jpg";
    document.getElementById('plank').style.display="none";
    document.getElementById('puff').style.display="none";
    document.getElementById('patrick').style.display="none";

    //change image back to original
    setTimeout(function () {
        document.getElementById('bob').src = "./images/character.png";
        document.getElementById('gary').src = "./images/garyyy.png";
        document.getElementById('backdrop').src = "./images/background.jpg";
    }
        , 4500);
    //click lights function to decrement sleepiness by 1, stop decrementing at 1
    if (sleep > 1) {
        sleep--;
    }
    //update DOM
    $(`#sleep`).text(`SLEEPINESS: ${sleep}`)


});

//Add event listener for GO HOME button 
$('#home').on('click', function () {

    //change background image to spongebobs house 
    document.getElementById('backdrop').src = "./images/home.jpg";
    document.getElementById('plank').style.display="none";
    document.getElementById('puff').style.display="none";
    document.getElementById('patrick').style.display="none";


    setTimeout(function () {

        document.getElementById('backdrop').src = "./images/background.jpg";}
            , 4500);
    


});





