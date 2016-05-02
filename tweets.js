//==============================================================================
// Resources
//==============================================================================
// Functions - http://www.w3schools.com/js/js_functions.asp
//==============================================================================
// #1 - String Property: countChars
//==============================================================================
// Given a string, return the number of characters in that string
function countChars(userString) {
  //your code here
  //don't forget to return the number of characters (use return!)

    userString = userString.length;
    return userString;
}

//==============================================================================
// #2 - String Methods: addHashtag
//==============================================================================
//Given a string, add " #yolo" to the end of that string
function addHashtag(userString) {

  userString = userString.concat(" #yolo");
  return userString;

}

//==============================================================================

//==============================================================================
// #2 - String Methods: excitedTweet

function excitedTweet(userString) {

  userString = userString.toUpperCase() + "!!!";
  return userString;
 
}

// //userString.toUpperCase() + "!!!";

// change this to

// userString = userString.toUpperCase() + "!!!"
// return userString
//==============================================================================
//upcases a user's string and adds three exclamation points

//==============================================================================

