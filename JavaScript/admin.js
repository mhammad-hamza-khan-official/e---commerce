const overflowProduct = document.getElementById("overflow-product");
const inputName = document.getElementById("pName");
const inputPrice = document.getElementById("pPrice");
const inputRating = document.getElementById("pRating");
const inputImg = document.getElementById("fileInput pImage");
const addProductBtn = document.getElementById("pDone");

function addProduct(parent, name, rating, price, imgLink, id) {
  let product = `<div class="card-item  "> 
                                    <div class="img d-flex justify-center ">
                                        <div class="overlay"></div>
                                        <img src="${imgLink}"
                                            alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            <p>${name}</p>
                                        </div>
                                        <div class="rating">
                                            <p>
                                                ${rating}
                                            </p>
                                        </div>
                                        <div class="price">
                                            ${price}$
                                        </div>
                                        <div class="add-to-card">
                                            <button>Add To Card</button>
                                        </div>
                                    </div>
                                </div>  `;

  parent.innerHTML += product;
}

function rating(value) {
  switch (value) {
    case "1":
      return "⭐";
      break;
    case "2":
      return "⭐⭐";
      break;
    case "3":
      return "⭐⭐⭐";
      break;
    case "4":
      return "⭐⭐⭐⭐";
      break;
    case "5":
      return "error";
      break;
  }
}

//rating num must be take < 5
inputRating.addEventListener("input", () => {
  if (inputRating.value >= "5") {
    document.getElementById("errorRating").style.display = "block";
    inputRating.value = "1";
  } else {
    document.getElementById("errorRating").style.display = "none";
  }
});

console.log(overflowProduct.children.length);

//Add Product
addProductBtn.addEventListener("click", (e) => {
  let length = overflowProduct.children.length;
  console.log(inputPrice);
  let Price = inputPrice.value;
  console.log(Price);

  let Name = inputName.value;
  let Rating = rating(inputRating.value);
  let Id = `Product-${length}`;
let Image;

inputImg.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    Image = URL.createObjectURL(file);
    console.log(Image);
  }
});

  console.log(Image);


  addProduct(overflowProduct, Name, Rating, Price, Image, Id);
});
