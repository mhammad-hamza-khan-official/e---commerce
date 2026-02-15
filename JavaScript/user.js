console.log("Hellow");
const LoginPop = document.getElementById("login-pop");
const popLoginBtn = document.getElementById("pop-login-btn");
const loginUserBtn = document.getElementById("login-user-btn");
const loginAdminBtn = document.getElementById("login-admin-btn");
const crossBtn = document.getElementById("cross")

function loginPop(value) {
  if (value === "open") {
    LoginPop.style.display = "flex";
    document.body.style.overflow = "hidden";
    window.location.href = "index.html#home"
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
crossBtn.addEventListener("click",() => {
    loginPop("close")
})

//open login page as Admin
loginUserBtn.addEventListener("click", () => {
  localStorage.setItem("loginType", "user");
  window.location.href = "login.html";
});

//open login page as User
loginAdminBtn.addEventListener("click", (e) => {
  localStorage.setItem("loginType", "admin");
  window.location.href = "login.html";
});



