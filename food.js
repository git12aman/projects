 function myFun(){
    let searchval = document.getElementById("inp").value.toUpperCase();
    console.log(searchval);
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".mainPage");

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toUpperCase().indexOf(searchval) > -1){
                tr[i].style.display=""
                front.style.display="none"
            }else{
                tr[i].style.display="none"
                 


            }
        }
    }

    if(searchval == ""){
        front.style.display="flex"

    }
 }


//  nav

function showLogin(){
    let login = document.querySelector(".log");
    login.style.display="block"
    let nav = document.querySelector(".nav");
    nav.style.display="none"


}


function showNav(){
    let nav = document.querySelector(".nav");
    nav.style.display="block"
    let login = document.querySelector(".log");
    login.style.display="none"

}

function login(){
    let login = document.querySelector(".log");
    login.style.display="none"
}


function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="none"
}



//  IMAGE SLIDER

let cust = document.querySelectorAll(".customer");
let count = 0;
console.log(cust);

cust.forEach(function(review, index){
    review.style.left=`${index * 100}%`
    console.log(review);
    console.log(index);

})


function prev(){
    count --;
    if(count == -1){
        count = cust.length - 1;
    }
    slide();

}

function next(){
    count ++;
    if(count == cust.length){
        count=0;
    }
    slide();
}

function slide(){
    cust.forEach(function(review){
        review.style.transform=`translateX(-${count * 100}%)`;
        console.log( review.style.transform=`translateX(-${count * 100}%)`);
    })
}
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('button[id^="order-button-"]');
  
    orderButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const orderName = button.previousElementSibling.previousElementSibling.textContent;
        const orderPrice = button.previousElementSibling.textContent.replace(/[^0-9.]/g, '');
  
        // Create a new URL with query parameters
        const url = new URL('order-summary.html');
        url.searchParams.set('orderName', orderName);
        url.searchParams.set('orderPrice', orderPrice);
  
        // Open the new URL in a new tab
        window.open(url);
      });
    });
  });
  function orderFood(event) {
    const orderButtonId = event.target.id;
    const orderName = orderButtonId.replace('order-button-', '');
    const orderPrice = parseFloat(document.querySelector(`#price-${orderName}`).textContent.replace('₹', ''));
  
    // Redirect to the order-summary.html page
    window.location.href = `order-summary.html?orderName=${orderName}&orderPrice=${orderPrice}`;
  }
  const orderButtons = document.querySelectorAll('.card button');
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
    const price = button.parentElement.previousElementSibling.textContent.replace('₹', '');
    window.location.href = `order-summary.html?name=${name}&price=${price}`;
  });
});
// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners for mouseover and mouseout events
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('hovered');
  });
});
