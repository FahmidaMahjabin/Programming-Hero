// verify email password and login
document.getElementById("btn").addEventListener("click", function(){
    const emailVal = document.getElementById("email").value;
    console.log(emailVal)
    const passwordVal = document.getElementById("password").value;
    console.log(passwordVal)
    if(emailVal == "mehjabineva.ce@gmail.com" && passwordVal == "password"){
        window.location.href = "accountage.html";
    }
})



