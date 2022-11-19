if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  // for (var i = 0; i < removeCartItemButtons.length; i++) {
  //   var button = removeCartItemButtons[i];
  //   button.addEventListener("click", removeCartItem);
  // }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  // document
  //   .getElementsByClassName("btn-purchase")[0]
  //   .addEventListener("click", purchaseClicked);
}

// function purchaseClicked() {
//   alert("Thankyou for your purchase");
//   localStorage.clear();

// }

// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateCartTotal();
// }

function addToCartClicked(event) {
  event.preventDefault();
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;



  let cart = localStorage.getItem("cart");
  if (cart == null) {
    let products = [];
    let product = { title, price, productQuantity: 1 };
    products.push(product);
    localStorage.setItem("cart", JSON.stringify(products));
    console.log("item added for the first time");
  } else {
    let pcart = JSON.parse(cart);
    let oldProduct = pcart.find((item) => item.title == title);

    if (oldProduct) {
      oldProduct.productQuantity = oldProduct.productQuantity + 1;
      pcart.map((item) => {
        if (item.title == oldProduct.title) {
          item.productQuantity = oldProduct.productQuantity;
        }
      });
      localStorage.setItem("cart", JSON.stringify(pcart));
      console.log("quantity increased");
    } else {
      let product = { title, price, productQuantity: 1 };
      pcart.push(product);
      localStorage.setItem("cart", JSON.stringify(pcart));
      console.log("item added");
    }
  }

  console.log(title, price);

  // addToCart(title, price,productQuantity);
  // addToCart()
}

//remove button
// function removeCartItem() {

//   let cart=JSON.parse(localStorage.getItem('cart'));
//   let newcart= cart.filter((item)=>item.title != title);
//   localStorage.setItem('cart',JSON.stringify(newcart));
//   addToCart();

// }

function addToCart() {
  let cartString = localStorage.getItem("cart");
  let cart = JSON.parse(cartString);
  if (cart == null || cart.length == 0) {
    console.log("cart is empty");
    // $(".text1").html("<h3> hua </h3>");
  } else {
    console.log(cart);
    let table = `
    <table class='table'>
    <thead>
    <tr>
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
    
    </tr>
    </thead>
    
    
    `;

    let totalPrice = 0;
    cart.map((item) => {
      table += `
      <tr>
        <td> ${item.title}</td>
        <td> ${item.productQuantity}</td>
        <td> ${item.productQuantity * item.price}</td>
       
      
      </tr>
      
      
      `;
      totalPrice += item.price * item.productQuantity;
    });

    table =
      table +
      ` </table>
    <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="shoping">&#8377</span>
        <span class="cart-total-price"> ${totalPrice}</span>
    </div>
    
    
   `;
    $(".cart-row").html(table);
  }
}

addToCart();

// function addToCart(title, price,productQuantity) {
//   var cartRow = document.createElement("div");
//   cartRow.classList.add("cart-row");
//   var cartItems = document.getElementsByClassName("cart-items")[0];
//   var cartItemName = cartItems.getElementsByClassName("cart-item-title");
//   let cartString = localStorage.getItem("cart")

//   for (var i = 0; i < cartItemName.length; i++) {
//     if (cartItemName[i].innerText == title) {
//       alert("this item is already added in the cart");
//       return;
//     }
//   }
//   var cartRowContents = `
//         <div class="cart-item cart-column">
//                 <span class="cart-item-title">${localStorage.getItem("title")}</span>
//             </div>
//             <span class="cart-price cart-column">${price}</span>
//             <div class="cart-quantity cart-column">
//                 <input class="cart-quantity-input" type="number" value="1">
//                 <button class="btn btn-danger" type="button">REMOVE</button>
//             </div>
//         </div>
//         `;
//   cartRow.innerHTML = cartRowContents;
//   cartItems.append(cartRow);
//   cartRow
//     .getElementsByClassName("btn-danger")[0]
//     .addEventListener("click", removeCartItem);
//   cartRow
//     .getElementsByClassName("cart-quantity-input")[0]
//     .addEventListener("change", quantityChanged);
// // }

// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName("cart-items")[0];
//   var cartRows = cartItemContainer.getElementsByClassName("cart-row");
//   var total = 0;
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i];
//     var priceElement = cartRow.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartRow.getElementsByClassName(
//       "cart-quantity-input"
//     )[0];
//     var price = parseInt(priceElement.innerText);
//     var quantity = quantityElement.value;
//     total = total + price * quantity;
//   }
//   document.getElementsByClassName("cart-total-price")[0].innerText = total;
// }

function addClick() {
  alert("Item added to cart");
}

function search() {
  let input = document.getElementById("search1").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("box");
  let y = document.getElementsByClassName("slideshow-container");
  let z = document.getElementsByClassName("heading");
  let a = document.getElementsByClassName("dot");
  

  if (input!="") {
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";

      } else {
        x[i].style.display = "inline-block";

        for (let i = 0; i < y.length; i++) {
          y[i].style.display = "none";
        }
        for (let i = 0; i < z.length; i++) {
          z[i].style.display = "none";
        }
        for (let i = 0; i < a.length; i++) {
          a[i].style.display = "none";
        }
      }
    }
  } else {
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = "block";
    }
    for (let i = 0; i < z.length; i++) {
      z[i].style.display = "block";
    }
  }

  
}
