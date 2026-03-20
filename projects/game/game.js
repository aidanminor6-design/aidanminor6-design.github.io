let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
// Gobal Variables
let matchNumber = 0;                                             
let swerveModuleBroken = false;                            

//If you need, add any "helper" functions here


//Make one function for each location
function outside() {
    clear()
    print("\nYou are outside hayfeild secondary school!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\ninside");
    
    function processInput(input){
        if (input.toLowerCase() === "inside") {
            inside();
        } else {
            stayHere();
            waitThenCall(outside);
        }
    }
    waitForInput(processInput);
}

function inside() {
    clear();
    print("\nYou are inside the school!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tpits\n\tstands\n\tconcession stand\n\toutside");
    
    function processInput(input){
        if (input.toLowerCase() === "pits") {
            pits();
        } else if (input.toLowerCase() === "stands") {
            stands();
        } else if (input.toLowerCase() === "concession stand") {
            concession_stand();
        } else if (input.toLowerCase() === "outside") {
            outside();
        } else {
            stayHere();
            waitThenCall(inside);
        }
    }
    waitForInput(processInput);
}
function pits() {
    clear();
    print("\nYou are in the pits!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tstands\n\tinside");
    
    function processInput(input){
        if (input.toLowerCase() === "stands") {
            stands();
        } else if (input.toLowerCase() === "inside") {
            inside();
        } else {
            stayHere();
            waitThenCall(pits);
        }
    }
}
    waitForInput(processInput);
function stands() {
    clear();
    print("\nYou are in the Stands!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tpits\n\tconcession stand\n\tinside");
    
    function processInput(input){
        if (input.toLowerCase() === "pits") {
            pits();
        } else if (input.toLowerCase() === "awards") {
            awards();
        } else if (input.toLowerCase() === "concession stand") {
            concessionstand();
        } else if (input.toLowerCase() === "inside") {
            inside();
        } else {
            stayHere();
            waitThenCall(stands);
        }
	}
}
    
    waitForInput(processInput);
function awards() {
    clear();
    print("\nYou are at Awards!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\nstands");
    
    function processInput(input){
        if (input.toLowerCase() === "stands") {
            stands();
        } else {
            stayHere();
            waitThenCall(awards);
        }
    }
    waitForInput(processInput);
}function concessionstand() {
    clear();
    print("\nYou are at the Concession Stand!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tstands\n\tinside");
    
    function processInput(input){
        if (input.toLowerCase() === "stands") {
            stands();
        } else if (input.toLowerCase() === "inside") {
            inside();
        } else {
            stayHere();
            waitThenCall(concessionstand);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    clear();
    print("\nWelcome to Hayfelid Secondary.");
	print("You are on the Koibots robotics team and are here to make it far into the competition here at Hayfeild.");
	print("\nTo exit the car, type Start");
    function processInput(input){
	if (input.toLowerCase() === "start") {
            outside();
        } else {
            print("\nThats not an option.");
            print("\nYou're going to have to leave the car, they need your help.");
            print("\nTo leave the car, type Start");
        }
    }
}
