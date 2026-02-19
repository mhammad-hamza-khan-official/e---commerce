console.log("Hellow");
const LoginPop = document.getElementById("login-pop");
const popLoginBtn = document.getElementById("pop-login-btn");
const loginUserBtn = document.getElementById("login-user-btn");
const loginAdminBtn = document.getElementById("login-admin-btn");
const crossBtn = document.getElementById("cross");
//admin btn
const AdminBtn = document.getElementById("ADMINpage")

// Rander container
const randerContainer = document.getElementById("RanderContainer")

function loginPop(value) {
  if (value === "open") {
    LoginPop.style.display = "flex";
    document.body.style.overflow = "hidden";
  } else if (value === "close") {
    LoginPop.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// login pop is open
popLoginBtn.addEventListener("click", () => {
  loginPop("open");
});

//login pop is close
crossBtn.addEventListener("click", () => {
  loginPop("close");
});

//open login page as Admin
loginUserBtn.addEventListener("click", () => {
  localStorage.setItem("loginType", "user");
  window.open("login.html", "_blank");
  loginPop("close")
});

//open login page as User
loginAdminBtn.addEventListener("click", (e) => {
  localStorage.setItem("loginType", "admin");
  window.open("login.html", "_blank");
  
});

//show admin btn
if(localStorage.getItem("ADMIN") === "true"){
    AdminBtn.style.display = "block"
    console.log("if",localStorage.getItem("ADMIN"));
    
}else{
    console.log("else",localStorage.getItem("ADMIN"));
    AdminBtn.style.display = "none"
}

//moving across admin page
AdminBtn.addEventListener("click",(e) => {
  window.location.href = "admin.html"
})





//

//Load from localStorage
for (const key in localStorage) {
  const element = localStorage[key];

  if (key.startsWith("Product-")) {
    randerContainer.innerHTML += element;
  }
}

//Show message 
if (randerContainer.children.length === 1) {
    //target message
    randerContainer.children[0].style.display = "block"
    
} else {

    //target message
    randerContainer.children[0].style.display = "none"
}

//justify center
if (randerContainer.children.length >= 5) {
    randerContainer.style.justifyContent = "center "
} 