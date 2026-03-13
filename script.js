function addToCart(){
    alert("Sneaker added to cart!");
}

function searchSneaker(){

    let input = document.getElementById("searchBar").ariaValueMax.toLower-case();

    let products = document.getElementsByClassName("product");

    for(let i=0;<products.length;++){
        let text = products[i].innerText.toLowerCase();

        if(text.includes(input)){
            products[i].computedStyleMap.display="flex";
        }
        else{
            products[i].computedStyleMap.display="name";
        }
    }
}
