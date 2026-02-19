const overflowProduct = document.getElementById("overflow-product");

const inputName = document.getElementById("pName");
const inputPrice = document.getElementById("pPrice");
const inputRating = document.getElementById("pRating");
const inputImg = document.getElementById("fileInput pImage");
const addProductInput = document.getElementById("ADD");
const addProductBtn = document.getElementById("pDone");

// Alert section
const emptyAlert = document.getElementById("Empty-alert");

emptyAlert.style.display = "none";

function addProduct(parent, name, rating, price, imgLink, id) {
  let product = `<div class="card-item  " id="${id}" > 
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
                                     <div class="delete">
                                <img src="./assets/icon/Bin.svg" alt="">
                            </div>
                                </div>  `;

  parent.innerHTML += product;
  console.log("id ", id);
  localStorage.setItem(id, product);
}

function rating(value) {
  switch (value) {
    case "0":
      return "";
      break;
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
    case "":
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

let ImageSrc;

inputImg.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      const base64 = reader.result;
      localStorage.setItem("productImage", base64);
      ImageSrc = base64;
    };
    reader.readAsDataURL(file);
  }
});

//Add Product
addProductBtn.addEventListener("click", (e) => {
  let length = overflowProduct.children.length;
  console.log(inputPrice);
  let Price = inputPrice.value;
  console.log(Price);

  let Name = inputName.value;
  let Rating = rating(inputRating.value);
  let Id = `Product-${length}`;

  console.log("name ", Name);
  console.log("Price ", Price);
  console.log("Rating ", Rating);

  if (Name !== "" && Price !== "" && Rating !== "error" &&( ImageSrc !== undefined && ImageSrc !== "")) {
    console.log("field");

    console.log("ImageSrc :",ImageSrc);
    
    emptyAlert.children[0].innerHTML = "Fill The Feilds."

    addProduct(overflowProduct, Name, Rating, Price, ImageSrc, Id);

  } else if (Name !== "" && Price !== "" && Rating !== "error" && ( ImageSrc === undefined || ImageSrc === "")) {

    console.log("image");
    
    emptyAlert.children[0].innerHTML = "Image is not defined."
    
    emptyAlert.style.display = "flex";
    setTimeout(() => {
      emptyAlert.style.display = "none";
    }, 9000);

  } else {
    console.error("Error Feild Empty");
    emptyAlert.children[0].innerHTML = "Fill The Feilds.";
    emptyAlert.style.display = "flex";
    setTimeout(() => {
      emptyAlert.style.display = "none";
    }, 9000);
  }

  //Reset.
  addProductInput.checked = false;
  inputName.value = "";
  inputPrice.value = "";
  inputRating.value = "";
  ImageSrc = "";
});

//load from localStorage
localStorage.setItem("hellow", true);

for (const key in localStorage) {
  const element = localStorage[key];

  if (key.startsWith("Product-")) {
    overflowProduct.innerHTML += element;
  }
}
