require("dotenv").config();
var fs = require('fs');

var keys = require("./keys");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');


var userInput = process.argv[2];
var movieChoice = process.argv[3];
var twit = process.argv[3];
var song = process.argv[3];


function getTweets(){
    
    var client = new Twitter(keys.twitter);
    
    var params = {screen_name: twit};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    };
    });
};
 
function getSongs(track) {

    var spotify = new Spotify(keys.spotify);
    
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        };  
        console.log(data); 
    });
};

function getMovie() {

    var movieUrl = "https://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&apikey=trilogy"; 

    request(movieUrl, function(error, response, body){
       
        console.log('BODY: ', JSON.parse(body));
    });
   
};

function readTxtFile() {

    fs.readFile("movie.txt", "utf8", function(err, data) {
        if (err) {
            console.log(err.message);
        } else {
            function searchSongFromRandomTxt(){
                var randomSearch = data;
                getSongs(randomSearch);
            };
            searchSongFromRandomTxt();
        };
    });
};


switch (userInput){
    
    case 'my-tweets':
    getTweets();
    break;

    case 'spotify-this-song':
    getSongs();
    break;

    case 'movie-this':
    getMovie();
    break;

    case 'do-what-it-says':
    readTxtFile();
    break;
};