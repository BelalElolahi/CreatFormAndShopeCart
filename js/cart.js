/* global Cart */
'use strict';
console.log(localStorage.cart);

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
const cart2 = new Cart([]);

function loadCart() {
  const cartItems = JSON.parse(localStorage.cart) || [];
  
  for(let i =0;i<cartItems.length;i++)
  {
    console.log(cartItems[i]);
    
    cart2.addItem(cartItems[i].product, cartItems[i].quantity);

    
  }

  console.log(cart2.items);
  
  


}




// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableRows = document.querySelectorAll('#cart tbody tr');
  for(let i = 0; i < tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
      
    }
    
  }
 

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.querySelector("tbody");

  

  // TODO: Iterate over the items in the cart
  for(let i=0;i<cart2.items.length;i++)
  {
    
    let trElement = document.createElement('tr');
     /* 
       */
        /* let deleteLink = document.createElement('td');
        let button = document.createElement('button');
        button.textContent= 'X' ; */
        let tdElement1 = document.createElement('td');
         tdElement1.textContent='X';
        tdElement1.setAttribute('id', cart2.items[i].product);
        tdElement1.addEventListener('click', removeItemFromCart);
        trElement.appendChild(tdElement1);
    


    let tdElement2 = document.createElement('td');
      tdElement2.textContent=cart2.items[i].quantity;
       trElement.appendChild(tdElement2);

       let tdElement3 = document.createElement('td');
      tdElement3.textContent=cart2.items[i].product;
       trElement.appendChild(tdElement3);


       tableBody.appendChild(trElement);
  

  /* // TODO: Create a TR
  let trEle = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteLink = document.createElement('td');
  let button = document.createElement('button');
  button.textContent= 'X' ;
  button.setAttribute('id', i);
    button.addEventListener('click', removeItemFromCart);
    deleteLink.appendChild(button);

    let td1 = document.createElement('td');
    td1.textContent = cart2.items[i].quantity;
    
  
    let td2=document.createElement('td');
    td2.textContent = cart2.items[i].product;
    
    
       
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  trEle.appendChild(td1);
  trEle.appendChild(td2);
  tableBody.appendChild(trEle); */
 
    

  }
  


 
}

function removeItemFromCart(event) {
 

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  /* cart2.removeItem(cart2.items[event.target.id]); */
  let itemToRemove = event.target.id;
  console.log(itemToRemove);
  for (let i = 1; i < cart2.items.length; i++)
  {
    console.log(cart2.items[i]);
    
    if (cart2.items[i].product == itemToRemove)
    {
      
      cart2.removeItem(cart2.items[i]);
    }
  }
  
  // TODO: Save the cart back to local storage
  cart2.saveToLocalStorage();
  // TODO: Re-draw the cart table
  showCart();


}

// This will initialize the page and draw the cart on screen
renderCart();
