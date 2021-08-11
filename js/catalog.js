/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);


let carts = [];

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
   const selectElement = document.getElementById('items');
     for (let i in Product.allProducts) {
     let optionsEle = document.createElement('option');
     optionsEle.textContent = Product.allProducts[i].name;
     selectElement.appendChild(optionsEle); 

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
  // TODO: Prevent the page from reloading
     event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let selectedItem = event.target.items.value;
  console.log(selectedItem);
  // TODO: get the quantity
  let quantity =  event.target.quantity.value;
  // TODO: using those, add one item to the Cart
  
   let cart1= new Cart();
  cart1.addItem(selectedItem,quantity);
  carts.push(cart1);
  console.log(carts);   
    
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  
  let itemCount=document.getElementById('itemCount');
  itemCount.textContent= carts.length;
  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let quantity1 = document.getElementById('quantity');
  let iteam1 = document.getElementById('items');

  
  // TODO: Add a new element to the cartContents div with that information
  let cartContent = document.getElementById('cartContents');
   let pEle= document.createElement('p');
   pEle.textContent= quantity1.value +" : "+ iteam1.value; 
   cartContent.appendChild(pEle);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
