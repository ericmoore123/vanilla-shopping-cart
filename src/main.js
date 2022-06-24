const shop = document.querySelector("#shop");

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
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                    0
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();

const increment = (id) => {
  console.log(id);
};

const decrement = (id) => {
  console.log(id);
};

const update = () => {};