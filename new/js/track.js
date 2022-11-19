function purchaseClicked() {
  alert("Thankyou for your purchase");
  localStorage.clear();

  var cartss = document.getElementsByClassName("cart-row");

  for (var i = 0; i < cartss.length; i++) {
    cartss[i].style.display = "none";
  }

  var entire = document.getElementsByClassName("entire");
  console.log(entire);

  for (var i = 0; i < entire.length; i++) {
    entire[i].style.display = "block";
  }

  var point = document.getElementsByClassName("point");
  for (var i = 0; i < point.length; i++) {
    point[i].style.display = "none";
  }

  var thanks = document.getElementsByClassName("thanks");
  for (var i = 0; i < thanks.length; i++) {
    thanks[i].style.display = "block";
  }

 
}

var btnClear = document.querySelector('button');
var inputs = document.querySelectorAll('input');

btnClear.addEventListener('click',() =>{
  inputs.forEach(input => input.value = ''); 
    
});




//.style can't be used coz var entire = document.getElementsByClassName("entire"); gives elements inside div in array therefore for loop is used
