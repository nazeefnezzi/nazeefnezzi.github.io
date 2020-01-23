// firebase config

const firebaseConfig = {
    apiKey: "AIzaSyD4fBzmD79dbn9jYBoySQnJeIzlI7zu624",
    authDomain: "quickestore-51c47.firebaseapp.com",
    databaseURL: "https://quickestore-51c47.firebaseio.com",
    projectId: "quickestore-51c47",
    storageBucket: "quickestore-51c47.appspot.com",
    messagingSenderId: "1051126521812",
    appId: "1:1051126521812:web:764f096edf577ca5754041"
  };

  var products = [];
  var cartItems= [];
  var cart_n = document.getElementById('cart_n');

  // div
  var computerDiv = document.getElementById('computersDiv');
  var PhonesDiv = document.getElementById('PhonesDiv');
  var accessoriesDiv = document.getElementById('accessoriesDiv');

  // properties of products

  var computers = [
      {name: 'Lenovo',price: 300},
      {name: 'MacproBlack',price: 1000},
      {name: 'Acer',price: 250},
      {name: 'MacAir',price: 950},
      {name: 'MacAirSE',price: 1050},
      {name: 'DELL_eco',price: 200}
];
  var phones = [
      {name: 'iPhone',price: 800},
      {name: 'motorolaONE',price: 200},
      {name: 'gPIXEL4',price: 650}
];
  var accessories = [
      {name: 'W-Keyboard Set',price: 110},
      {name: 'GameKeypad',price: 70},
      {name: 'JBL Loudspeaker',price: 50},
      {name: 'BT_Headphone',price: 45}
];

// dom manipulation

function computerProduct(con) {
  let URL = `imges/computers/computers${con}.jpg`;
  let btn = `btnComputer${con}`;
  return `
      <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style=""height:16rem; src="${URL}" alt="CARD IMG">
              <div class="card-body"> 
                <p class="card-text">${computers[con-1].name}</p>
                <p class="card-text">Price: ${computers[con-1].price}.00 €</p>
                  <div class="d-flex justify-content-between align-item-center">
                    <div class="btn-group">
                      <button type="button"
                      onclick="cart2('${computers[con-1].name}', '${computers[con-1].price}', '${URL}', '${con}','${btn}')"
                      class="btn btn-sm btn-outline-success">
                      <a href="cart.html" style="color:inherit;">Buy </a>
                      
                      </button>

                      <button 
                      id="${btn}" type="button"
                      onclick="cart('${computers[con-1].name}', '${computers[con-1].price}', '${URL}', '${con}','${btn}')"
                      class="btn btn-sm btn-outline-success">
                      Add to Cart 
                      </button>
                    </div>
                      <small> Free shiping only above €100.
                  
                  </div>
              </div>
          
          </div>
          
      </div>
  `;
}


// MB

function phoneProduct(con) {
  let URL = `imges/mobails/mobails${con}.jpg`;
  let btn = `btnMobails${con}`;
  return `
      <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style=""height:16rem; src="${URL}" alt="CARD IMG">
              <div class="card-body"> 
                <p class="card-text">${phones[con-1].name}</p>
                <p class="card-text">Price: ${phones[con-1].price}.00 €</p>
                  <div class="d-flex justify-content-between align-item-center">
                  <div class="btn-group">
                  <button type="button"
                  onclick="cart2('${phones[con-1].name}', '${phones[con-1].price}', '${URL}', '${con}','${btn}')"
                  class="btn btn-sm btn-outline-success">
                  Buy 
                  </button>

                  <button 
                  id="${btn}" type="button"
                  onclick="cart('${phones[con-1].name}', '${phones[con-1].price}', '${URL}', '${con}','${btn}')"
                  class="btn btn-sm btn-outline-success">
                  Add to Cart 
                  </button>
                </div>
                      <small> Free shiping only above €80.
                  
                  </div>
              </div>
          
          </div>
          
      </div>
  `;
}

// accesories
function accessoriesProduct(con) {
  let URL = `imges/accsories/accsories${con}.jpg`;
  let btn = `btnAccessories${con}`;
  return `
      <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style=""height:16rem; src="${URL}" alt="CARD IMG">
              <div class="card-body"> 
                <p class="card-text">${accessories[con-1].name}</p>
                <p class="card-text">Price: ${accessories[con-1].price}.00 €</p>
                  <div class="d-flex justify-content-between align-item-center">
                  <div class="btn-group">
                  <button type="button"
                  onclick="cart2('${accessories[con-1].name}', '${accessories[con-1].price}', '${URL}', '${con}','${btn}')"
                  class="btn btn-sm btn-outline-success">
                  Buy 
                  </button>

                  <button 
                  id="${btn}" type="button"
                  onclick="cart('${accessories[con-1].name}', '${accessories[con-1].price}', '${URL}', '${con}','${btn}')"
                  class="btn btn-sm btn-outline-success">
                  Add to Cart 
                  </button>
                </div>
                      <small> Free shiping only above €25.
                  
                  </div>
              </div>
          
          </div>
          
      </div>
  `;
}

// animation function swtalert.
function animation() {
  const toast= swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000

  });
  toast({
    type:'success',
    title: 'Added to shoping cart'
  })
}

// cart functon
function cart(name,price,url,con,btncart) {
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage == null) {
    products.push(item);
    localStorage.setItem('cart',JSON.stringify(products));
    
  } else {
    products = JSON.parse(localStorage.getItem('cart'));
    products.push(item);
    localStorage.setItem('cart', JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem('cart'));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display='none';
  animation();
}

// cart2 function
function cart2(name,price,url,con,btncart){
  var item = {
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage == null) {
    products.push(item);
    localStorage.setItem('cart',JSON.stringify(products));
    
  } else {
    products = JSON.parse(localStorage.getItem('cart'));
    products.push(item);
    localStorage.setItem('cart', JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem('cart'));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display='none';
  animation();
}


// render function
function render() {
  // loop
  for (let index = 1; index <= 6; index++) {
    computerDiv.innerHTML += `${computerProduct(index)}`;
    //PhonesDiv.innerHTML+=`${mobailProduct(index)}`;
  }
  for (let index = 1; index <= 3; index++) {
    //computerDiv.innerHTML+=`${computerProduct(index)}`;
    PhonesDiv.innerHTML += `${phoneProduct(index)}`;
  }

  for (let index = 1; index <= 3; index++) {
    //computerDiv.innerHTML+=`${computerProduct(index)}`;
    accessoriesDiv.innerHTML += `${accessoriesProduct(index)}`;
  }

  // cart localstorage
  if(localStorage.getItem('cart') == null) {
    
  } else {
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML=`[${products.length}]`;
  }
  
}
