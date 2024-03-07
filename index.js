var checkForm = function(form) { /* Submit button was clicked */
        
// check form input values

form.myButton.disabled = true;
form.myButton.value = "Please wait...";
return true;
};

var resetForm = function(form) { /* Reset button was clicked */
form.myButton.disabled = false;
form.myButton.value = "Submit";
};
