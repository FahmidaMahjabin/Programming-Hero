// function = generate pin 
// input = none 
// output = 6 digit pin having alphabet upper and lower case and number 
// step1: ekta string likhbo jate shob alphabet thakbe 
// step2:seta theke randomly j kono index er element nibo 6 bar and concate korbo

function generatePin(){
    const list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = list.length;
    let pin = "";
    for (let i = 0; i < 6; i++){
        pin += list[Math.floor(Math.random()*length)];
        console.log(pin)

    }
    return pin

}
generatePin()

// show the pin in input field
function showPin(){
    console.log(document.getElementById("pinShow"))
    document.getElementById("pinShow").value = generatePin();
}
// function = check pin 
function checkPin(){
    const givenPin = document.getElementById("pinShow").value;
    console.log("givenPin:", givenPin)
    const enterPin = document.getElementById("pinEnter").value;
    console.log("enter pin", enterPin)
    if (givenPin == enterPin){
        console.log(document.getElementById("success"))
        console.log("in loop")
        document.getElementById("success").style.display = "block";
        document.getElementById("danger").style.display = "none";
    }
    else{
        document.getElementById("danger").style.display = "block";
        document.getElementById("success").style.display = "none";
        console.log("into else")

    }
}

