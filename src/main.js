const shop = document.querySelector("#shop");
// let productData = [
//     {
//       id: "jfhgbvnscs",
//       name: "Casual Shirt",
//       price: 45,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: "images/img-1.jpg",
//     },
//     {
//       id: "ioytrhndcv",
//       name: "Office Shirt",
//       price: 100,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: "images/img-2.jpg",
//     },
//     {
//       id: "wuefbncxbsn",
//       name: "T Shirt",
//       price: 25,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: "images/img-3.jpg",
//     },
//     {
//       id: "thyfhcbcv",
//       name: "Mens Suit",
//       price: 300,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: "images/img-4.jpg",
//     },
//   ];

const generateShop = () => {
  return (shop.innerHTML = productData
    .map(({ id, img, name, desc, price }) => {
      return `
      <div class="item" id="item-id-${id}">
        <img width="233px" src="./${img}" alt="" class="img">
        <div class="details">
            <h3>${name}</h3>
                <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="btns">
                <i onclick="decrement()" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                    0
                </div>
                <i onclick="increment()" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();

const increment = () => {
  console.log("Increment");
};

const decrement = () => {
  console.log("Decrement");
};

const update = () => {};