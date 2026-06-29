let item1 = {
  id: 101,
  title: "WD 2TB Elementds Portable External Hard Drive - USB 3.0",
  price: 64,
  Category: "Electronics",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  rating: 4.8,
};

let item2 = {
  id: 102,
  title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) ",
  price: 64,
  Category: "Electronics",
  image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  rating: 4.8,
};

let item3 = {
  id: 103,
  title:
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  price: 64,
  Category: "women's clothing",
  image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  rating: 4.8,
};

let item4 = {
  id: 103,
  title:
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  price: 64,
  Category: "women's clothing",
  image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  rating: 4.8,
};

let products = [item1, item2, item3, item4];
function displayProducts() {
  let str = "";
  for (let product of products) {
    let { title, price, Category, rating, image } = product;
    str =
      str +
      `<div class="col-md-4 mb-4">
    <div class="card h-100 shadow">
   
    <img src="${image}" class="card-img-top">

    </img>
    
    <div class="card-body text-center">
    <h2 class="text-primary">${Category}</h2>
    <h5>${title}</h5>
    <h3>★★★★☆${rating}</h3>
    <h4>$${price}</h4>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
    `;
  }
  console.log(str);
  let dataEle = document.getElementById("data-ele");
  dataEle.innerHTML = str;
}
displayProducts();

function incQty(id) {
  let newArr = [];
  for (let item of products) {
    if (item.id == id) {
      let newObj = { ...item, qty: ++item.qty };
      newArr.push(newObj);
    } else {
      newArr.push(item);
    }
    displayProducts(newArr);
  }
}
