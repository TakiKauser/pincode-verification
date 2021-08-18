// pincode generator
function pinGenerator(){
    // generating pincode
    const generatedPin = Math.round(Math.random() * 1000000);
    // ensuring digits' count or handling errors
    if ((generatedPin + "").length == 6){
        return generatedPin;
    }
    return pinGenerator();
}
document.getElementById("pin-generator").addEventListener("click",function(){
    // getting display field
    const generatedPincodeDisplay = document.getElementById("generated-pincode");
    // showing generated pincode in display
    const generatedPincode = pinGenerator();
    generatedPincodeDisplay.value = generatedPincode;
});

document.getElementById("key-pad").addEventListener("click", function(event){
    // getting pressed key
    const pressedKey = event.target.innerText;
    // getting display field
    const displayedInput = document.getElementById("display");
    const display = document.getElementById("display").value;
    // checking NaN and if not, assign it's tasks
    if (isNaN(pressedKey)){
        if (pressedKey == "C"){
            // clear display
            displayedInput.value = "";
        }
        else if (pressedKey == "<"){
            // backspace
            displayedInput.value = display.substring(0, display.length - 1);
        }
    }
    else{     
        // update display
        const userInput = display + pressedKey;
        displayedInput.value = userInput;
    }
});
function actionLeft(){
    // getting action left counter
    const actions = document.getElementById("action-left-counter");
    const actionCounter = parseInt(actions.innerText);
    if (actionCounter > 0){
        // update action counter
        actions.innerText = actionCounter - 1;
    }
    else{
        // alert and unable the user to resubmit
        document.getElementById("submission-verify").style.display = "none";
        alert("This site has blocked you!!!");
    }
}
document.getElementById("submission-verify").addEventListener("click", function(){
    // getting comparable fields
    const generatedPincode = document.getElementById("generated-pincode").value;
    const userInput = document.getElementById("display").value;
    // getting allert fields
    const verified = document.getElementById("verification-success");
    const failed = document.getElementById("verification-failed");
    // compare pincode
    if (generatedPincode == userInput){
        failed.style.display = "none";
        // showing success notification
        verified.style.display = "block";
    }
    else{
        verified.style.display = "none";
        // showing failed notification
        failed.style.display = "block";
        actionLeft();
    }
});