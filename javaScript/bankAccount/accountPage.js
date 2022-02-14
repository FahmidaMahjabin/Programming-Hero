// deposite 
// step1:deposite e joto taka input dibo oita ekta variable e rakhbo
// step2:oi amount ta deposite e show korbo 
// step3:Balance e joto ase tar sathe add kore show korbo

function addDeposite(){
    let deposite = document.getElementById("deposite").value;
    console.log(typeof(deposite))
    document.getElementById("showDeposite").innerText = deposite ; 
    let balance = document.getElementById("balance");
    console.log(balance.innerText)
    console.log("type of balance", typeof(balance.innerText))
    console.log(deposite)
    balance.innerText = parseFloat(balance.innerText) + parseFloat(deposite);
    document.getElementById("deposite").value = "";
}

function addWithdraw(){
    let withdraw = document.getElementById("withdraw").value;
    
    document.getElementById("showWithdraw").innerText = withdraw ; 
    let balance = document.getElementById("balance");
    console.log(balance.innerText)
    console.log("type of balance", typeof(balance.innerText))
    
    balance.innerText = parseFloat(balance.innerText) - parseFloat(withdraw);
    document.getElementById("withdraw").value = "";
}