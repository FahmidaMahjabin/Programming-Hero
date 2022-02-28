console.log("cart page")
// quantity add/ subtract 
// step1:jodi add hoy then quantity er moddhe jei value ase tar sathe add hobe 
// step2;else quantity er moddhe jei value ase ta theke minus 1 hobe 
// step3:quantity can't be negative
function getQuantityandPrice(isAdd, productId, initialPrice){
    const quantityTag = document.getElementById(productId);
    let quantity = parseInt(quantityTag.innerText);
    
    if(quantity > 0){
        if(isAdd){
            quantity = quantity + 1;
            
        }
        else{
            quantity = quantity - 1;
        }    
    }
    quantityTag.innerText = quantity;
    console.log(quantity)
    getPrice(quantity, initialPrice)    
} 


function getPrice(quantity, subPrice){
    priceTag = 
    
    console.log("initialPrice", subPrice)
    const totalPrice = parseFloat(subPrice) * quantity;
    priceTag.innerText = totalPrice;

}
// jei elementer buyNow e click korbo , oi element er price class er innerText e price pabe, seta show korte hobe 
// console.log(document.getElementsByClassName("buyNow"))
// document.getElementById("ladiesBag").addEventListener("click", function(event){
//     console.log(event.target)
//     const eventNode = event.target;
//     const parent = eventNode.parentNode;
//     console.log(parent)
//     console.log(parent.getElementById("bag"));
    
// })
const productDetails = [{
    id: 1,
    price: 100,
    picLocation: ""

},
]