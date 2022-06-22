const shop = document.querySelector('#shop');
import data from './Data.js';

let productsStorage = [];
let productData = data;

productData.forEach( item => {
    shop.innerHTML = `<div class="item">
    <img width="233px" src="./${item.img}" alt="" class="img">
    <div class="details">
      <h3>${item.name}</h3>
        <p>${item.desc}</p>
      <div class="price-quantity">
        <h2>${item.price}</h2>
        <div class="btns">
          <i class="bi bi-dash-lg"></i>
          <div class="quantity">
            0
          </div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
});

console.log(productsStorage)

// const generateShop = () => {
//     return shop.innerHTML = 
//     `<div class="item">
//     <img width="233px" src="./images/img-1.jpg" alt="" class="img">
//     <div class="details">
//       <h3>Item</h3>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//       <div class="price-quantity">
//         <h2>$45</h2>
//         <div class="btns">
//           <i class="bi bi-dash-lg"></i>
//           <div class="quantity">
//             0
//           </div>
//           <i class="bi bi-plus-lg"></i>
//         </div>
//       </div>
//     </div>
//   </div>`;
// };

// generateShop();