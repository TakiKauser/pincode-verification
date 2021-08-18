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
    const pressedKey = event.target.innerText;
    const displayedInput = document.getElementById("display");
    const display = document.getElementById("display").value;
    if (isNaN(pressedKey)){
        if (pressedKey == "C"){
            displayedInput.value = "";
        }
        else if (pressedKey == "<"){
            displayedInput.value = display.substring(0, display.length - 1);
        }
    }
    else{     
        const userInput = display + pressedKey;
        displayedInput.value = userInput;
    }
});