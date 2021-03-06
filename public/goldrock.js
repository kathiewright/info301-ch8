/*    JavaScript 6th Edition
 *    Unit 5
 *    Chapter case

 *    Golden Rocks National Park 
 *    Author: 
 *    Date:   

 *    Filename: goldrock.js
 */

"use strict";

// global variables
var profile = {}; //declares an object variable
var lodging = []; //declares an array
var objectString;
var arrayString;

// validate entered username
function validateUsername() {
  var unInput = document.getElementById("uname");
  var errorDiv = document.getElementById("usernameError");
  try {
    // replace with conditional expression

    // remove any username error styling and message
    unInput.style.background = "";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    // copy valid username value to profile object
    profile.username = unInput.value;
    // copy profile.username value to profile section
    document.getElementById("profileUsername").innerHTML = profile.username;
    // make profile section and username section visible
    document.getElementById("profile").style.display = "block";
    document.getElementById("usernameSection").style.display = "block";
  } catch (msg) {
    // display error message
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    // change input style
    unInput.style.background = "rgb(255,233,233)";
  }
}

// validate entered password
function validatePassword() {
  var pw1Input = document.getElementById("pw1");
  var pw2Input = document.getElementById("pw2");
  var errorDiv = document.getElementById("passwordError");
  try {
    // replace with conditional expression

    // remove any password error styling and message
    pw1Input.style.background = "";
    pw2Input.style.background = "";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    // copy valid password to profile object
    profile.password = pw1Input.value;
  } catch (msg) {
    // display error message
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    // change input style
    pw1Input.style.background = "rgb(255,233,233)";
    pw2Input.style.background = "rgb(255,233,233)";
  }
}

// validate entered email
function validateEmail() {
  var emailInput = document.getElementById("emailbox");
  var errorDiv = document.getElementById("emailError");
  try {
    // replace with conditional expression

    // remove any email error styling and message
    emailInput.style.background = "";
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
    // convert email address to lowercase
    // replace with code to convert email address to lowercase

    // copy valid email value to profile object
    profile.email = emailInput.value;
    // copy profile.email value to profile section
    document.getElementById("profileEmail").innerHTML = profile.email;
    // make profile section and email section visible
    document.getElementById("profile").style.display = "block";
    document.getElementById("emailSection").style.display = "block";
  } catch (msg) {
    // display error message
    errorDiv.innerHTML = msg;
    errorDiv.style.display = "block";
    // change input style
    emailInput.style.background = "rgb(255,233,233)";
  }
}

// add lodging to profile
function registerLodging(event) {}

// convert form input to strings for submission
function convertToString() {}

function createEventListeners() {
  //Event Listener #1:  validate username, password2 and email input on the "change" event
  var unInput = document.getElementById("uname");
  var pw2Input = document.getElementById("pw2");
  var emailInput = document.getElementById("emailbox");
  if (unInput.addEventListener) {
    unInput.addEventListener("change", validateUsername);
    pw2Input.addEventListener("change", validatePassword);
    emailInput.addEventListener("change", validateEmail);
  }
  //Event Listener #2:  revise the array of lodging peferences as the user makes changes
  var lodgings = document.getElementsByName("lodgings");
  if (lodgings[0].addEventListener) {
    for (var i = 0; i < lodgings.length; i++) {
      lodgings[i].addEventListener("change", registerLodging);
    }
  }
  //Event Listener #3:  call convert to string which creates a string variable from the JSON user profile data
  var button = document.getElementById("createBtn");
  if (button.addEventListener) {
    button.addEventListener("click", convertToString);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListeners);
}
