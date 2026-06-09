"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log("it works!");
let yourName = prompt("whats your name?")
addToBody("Hi " + yourName);
*/
let temp = prompt("What temperature is it outside");
temp = Number(temp);
if(temp <= 32){
	addToBody("It's freezing, why are you at school?");
}else if(temp <=99){
	addToBody("Get to school you bum, it's not even freezing");

}else{
	addToBody("It's boiling, why are you at school?");
}
