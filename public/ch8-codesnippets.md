#A__________________________________________

    //      if (unInput.value.length < 4) {
          if (/.{4,}/.test(unInput.value) === false) {
             throw "Username must be at least 4 characters long";
          } else if (/\W/.test(unInput.value) === true) {
             throw "Username must contain only letters and numbers";
          }
________________________________________________
#B______________________________________________

    //      if (pw1Input.value.length < 8) {
          if (/.{8,}/.test(pw1Input.value) === false) {
             throw "Password must be at least 8 characters";
          } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
             throw "Passwords must match";
          } else if (/[a-zA-Z]/.test(pw1Input.value) === false) {
             throw "Password must contain at least one letter";
          } else if (/\d/.test(pw1Input.value) === false) {
             throw "Password must contain at least one number";
          } else if (/[!@#_]/.test(pw1Input.value) === false) {
             throw "Password must contain at least one of the following symbols: ! @ # _";
          }
__________________________________________________
#C________________________________________________

     var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
     try {

        if (emailCheck.test(emailInput.value) === false) {
           throw "Please provide a valid email address";
        }
__________________________________________________
#D________________________________________________

    // add lodging to profile
    function registerLodging(event) {
       if (event === undefined) { // get caller element in IE8
          event = window.event;
       }
       var callerElement = event.target || event.srcElement;
       var lodgingName = callerElement.value;
       if (callerElement.checked) { // if box has just been checked
          // add checkbox value to lodging array
          lodging.push(lodgingName);
          // add checkbox value to list in profile section
          var newLodging = document.createElement("li");
          newLodging.innerHTML = lodgingName;
          document.getElementById("profileLodgings").appendChild(newLodging);
          // make profile section and lodging section visible
          document.getElementById("profile").style.display = "block";
          document.getElementById("lodgingsSection").style.display = "block";
       } else { // if box has just been unchecked
          var listItems = document.querySelectorAll("#profileLodgings li");
          for (var i = 0; i < listItems.length; i++) {
             if (listItems[i].innerHTML === lodgingName) {
                // remove element at index i from array
                lodging.splice(i, 1); 
                // remove lodging from profile list
                listItems[i].parentNode.removeChild(listItems[i]);
                break;
             }
          }
       }
    }
_____________________________________________________ 
#E___________________________________________________

    // convert form input to strings for submission
    function convertToString() {
       // convert lodging array to string
       arrayString = lodging.toString();
       // convert profile object to string
       objectString = JSON.stringify(profile);
    }
