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