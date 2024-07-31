

//code for display user login
let login_display = document.getElementById("login_display");

login_display.addEventListener("click", () => {
    let display_loginDetails = document.getElementById("display_loginDetails");
    if (display_loginDetails.style.display === "none" || display_loginDetails.style.display === "") {
        display_loginDetails.style.display = "block";

        let username=document.getElementById("username")
        let luname=localStorage.getItem("username")
        username.innerText=luname
        let email=document.getElementById("email")
        let lemail=localStorage.getItem("email")
        email.innerText=lemail


    } else {
        display_loginDetails.style.display = "none";
    }
});

//code for logout

let log_out=document.getElementById("logout_button")
log_out.addEventListener("click",()=>{
    window.open("Main.html")
})


//fetch data

let x=fetch("data.json")
console.log(x);
x.then((a)=>{
    return a.json()
})
.then((data)=>{
    console.log(data);
    for(ele of data){
        console.log(ele);
let item=
`<div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${ele.image}" class="card-img-top" id="product_img" alt="${ele.title}">
                    <div class="card-body">
                        <h5 class="card-title">${ele.title}</h5>
                        <p class="card-text">Price: $${ele.price}</p>
                        <button class="btn btn-primary" id="add_cart">Add to Cart</button>
                    </div>
                </div>
            </div>`;

items_section.innerHTML+=item
            


}


//target cart

// Get a reference to the cart icon
let cartIcon = document.getElementById("cart_icon");

// Add event listener to the cart icon
cartIcon.addEventListener("click", () => {
    // Toggle the offcanvas visibility
    let offcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight"));
    offcanvas.toggle();
});




//add items into cart

let cartItems = [];
let totalprice = 0;

// Function to update the total price displayed
function updateTotalPrice() {
    let total = document.getElementById("TotalPrice");
    total.textContent = totalprice.toFixed(2);
}

// Function to handle adding an item to the cart
function addToCart(productTitle, productPrice) {
    let cartBox = document.getElementById("sum");
    // Check if the item already exists in the cart
    let existingItem = cartItems.find(item => item.title === productTitle);
            
    // If the item is not already in the cart, add it       
    if (!existingItem) {
        //increment the cart
        cartBox.textContent = parseInt(cartBox.textContent) + 1;
        // add the item into cart
        cartItems.push({ title: productTitle, price: productPrice, quantity: 1 });
        totalprice += productPrice;

    } 
    else {
         // If the item already exists, display alert
         alert("Item already exists in the cart");
         b.disabled = true;   //add item only once in the cart
         console.log(existingItem);
         //productPrice = 2*productPrice;
         //cartItems.push({ title: productTitle, price: productPrice, quantity: 2 });
       
    }
}

// Event listener for "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll(".btn-primary");
for(let i=0;i<addToCartButtons.length;i++){


    addToCartButtons[i].addEventListener("click", () => {
        let productCard = addToCartButtons[i].parentElement.parentElement;
        let productTitle = productCard.querySelector(".card-title").textContent;
        let productPriceString = productCard.querySelector(".card-text").textContent;
        let productPrice = parseFloat(productPriceString.split("$")[1]);    //["","19.8"]
        addToCart(productTitle, productPrice);
          





        




        // Display the product title, price, and image in the cart
        let cartItemsList = document.getElementById("cartItems");  //(here targeting the ul)
        let cartItem = document.createElement("li");

        // Create image element
        let productImage = document.createElement("img");
        productImage.src = productCard.querySelector(".card-img-top").src;
        productImage.style.maxWidth = "60px";

        // Create text node for product information
        let titleNode = document.createTextNode(productTitle);
        let priceNode = document.createTextNode(productPriceString);

        // Append image and text to cartitem( it is list(li))
        cartItem.appendChild(productImage);
        cartItem.appendChild(titleNode);


        // Create delete icon
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-trash");
       
        // Append delete icon to cart item
        cartItem.appendChild(deleteIcon);

        cartItem.appendChild(document.createElement("br"));
        cartItem.appendChild(priceNode);
        cartItem.appendChild(document.createElement("br"));

        // Create input element for quantity
        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = "1"; // Set default 1
        quantityInput.min = "1"; // Set minimum  0
        quantityInput.max = "10";
     

        
        //deleting cart items
        deleteIcon.addEventListener("click",()=>{
            cartItemsList.removeChild(cartItem);
            let cartBox = document.getElementById("sum");
            cartBox.textContent = parseInt(cartBox.textContent) - 1;

            let existingItem = cartItems.find(item => item.title === productTitle);

            // Update the total price
             totalprice -= existingItem.quantity*productPrice
            
            
            updateTotalPrice();
        })


        // Event listener for changing quantity inputs
        quantityInput.addEventListener("change", () => {
            let newQuantity = parseInt(quantityInput.value);
            let existingItem = cartItems.find(item => item.title === productTitle);
            console.log(existingItem);
            let oldQuantity = existingItem.quantity;
            existingItem.quantity = newQuantity;
            totalprice += (newQuantity - oldQuantity) * productPrice;
            updateTotalPrice();
        });


         

        cartItem.appendChild(quantityInput);
        cartItem.appendChild(document.createElement("br"));

        // Add cart item to cart
        cartItemsList.appendChild(cartItem);

        // Update total price
        updateTotalPrice();

        // Show the cart canvas
        document.getElementById("cartCanvas").style.display = "block";
    
    });



    




}


let buynow=document.getElementById("buynow")
console.log(buynow);
buynow.addEventListener("click",()=>{
    let cartItemsList=document.getElementById("cartItems")
    
    buynow.classList.toggle("true")
    if(cartItemsList.children.length===0){
        alert("please add the item")
    }
    else{
        window.open("buynow.html");
    }
    
})


});





























 












