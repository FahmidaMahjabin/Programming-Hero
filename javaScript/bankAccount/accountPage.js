// deposite 
// step1:deposite e joto taka input dibo oita ekta variable e rakhbo
// step2:oi amount ta deposite e show korbo 
// step3:Balance e joto ase tar sathe add kore show korbo

function addDeposite(){
    let deposite = document.getElementById("deposite").value;
    if (parseFloat(deposite) >= 0){
        console.log(typeof(deposite))
        document.getElementById("showDeposite").innerText = deposite ; 
        let balance = document.getElementById("balance");
        console.log(balance.innerText)
        console.log("type of balance", typeof(balance.innerText))
        console.log(deposite)
        balance.innerText = parseFloat(balance.innerText) + parseFloat(deposite);
        document.getElementById("deposite").value = "";
    }
    else{
        let paragraph = document.createElement("p");
        paragraph.innerText = "please enter valid amount";
        document.getElementById("depoSection").appendChild(paragraph);
        
    }
    
}

function addWithdraw(){
    let withdraw = document.getElementById("withdraw").value;
    let withdrawAmount = parseFloat(withdraw);
    let balance = parseFloat(document.getElementById("balance").innerText);
    if (withdrawAmount >= 0 && withdrawAmount < balance){
        
        document.getElementById("showWithdraw").innerText = withdraw ; 
        
        
        console.log("type of balance", typeof(balance))
        
        document.getElementById("balance").innerText = balance - withdrawAmount;
        document.getElementById("withdraw").value = "";
    }
    else{
        let paragraph = document.createElement("p");
        paragraph.innerText = "please enter valid amount for withdraw";
        document.getElementById("withdrawSection").appendChild(paragraph);
        
    }
    
    
}