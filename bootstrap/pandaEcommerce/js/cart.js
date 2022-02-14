console.log("cart page")
// quantity add/ subtract 
// step1:jodi add hoy then quantity er moddhe jei value ase tar sathe add hobe 
// step2;else quantity er moddhe jei value ase ta theke minus 1 hobe 
// step3:quantity can't be negative
function getQuantity(isAdd){
    const quantityTag = document.getElementById("quantity");
    const quantity = parseInt(quantityTag.innerText);
    if(quantity > 0){
        if(isAdd){
            quantityTag.innerText = quantity + 1;
            
        }
        else{
            quantityTag.innerText = quantity - 1;
        }
    }

    
} 
