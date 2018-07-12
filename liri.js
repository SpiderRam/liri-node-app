// REQUIRE NPM MODULES
require("dotenv").config();

var keys = require("./keys");
var request = require('request');





// GLOBAL VARIABLES
var userInput = process.argv[2];
var movieChoice = process.argv[3];







// FUNCTIONS
function myTweets(){
    console.log("You chose Twitter");

}


// OMDB using Request npm module

function getMovie() {

    var movieUrl = "https://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&apikey=trilogy"; 

   request(movieUrl, function(error, response, body){
       
       console.log('BODY: ', JSON.parse(body));
   })
   
}



//LOGIC  CASE SWITCH STATEMENT
switch (userInput){
    case 'my-tweets':
    myTweets();
    break;

    case 'spotify-this-song':
    console.log("You chose Spotify");
    break;

    case 'movie-this':
    getMovie();
    break;


}







