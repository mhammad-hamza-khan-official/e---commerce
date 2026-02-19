console.log("Hellow");
const LoginPop = document.getElementById("login-pop");
const popLoginBtns = document.querySelectorAll(".pop-login-btn");
const loginUserBtn = document.getElementById("login-user-btn");
const loginAdminBtn = document.getElementById("login-admin-btn");
const crossBtn = document.getElementById("cross");

const Hamberger = document.getElementById("Hamberger");
const SideBar = document.getElementById("SideBar");
let IsSideBarOpen = false;
//admin btn
const AdminBtns = document.querySelectorAll(".ADMINpage");

function loginPop(value) {
  if (value === "open") {
    LoginPop.style.display = "flex";
    document.body.style.overflow = "hidden";
    window.location.href = "index.html#home";
  } else if (value === "close") {
    LoginPop.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

//toggle side bar
if (Hamberger) {
  Hamberger.addEventListener("click", () => {
    if (!IsSideBarOpen) {
      SideBar.style.width = "95%";
      IsSideBarOpen = true;
    } else {
      SideBar.style.width = "0";
      IsSideBarOpen = false;
    }
  });
}

// login pop is open
popLoginBtns.forEach((e) => {
  e.addEventListener("click", () => {
    loginPop("open");
  });
});

//login pop is close
crossBtn.addEventListener("click", () => {
  loginPop("close");
});

//open login page as Admin
loginUserBtn.addEventListener("click", () => {
  localStorage.setItem("loginType", "user");
  window.open("login.html", "_blank");
  loginPop("close");
});

//open login page as User
loginAdminBtn.addEventListener("click", (e) => {
  localStorage.setItem("loginType", "admin");
  window.open("login.html", "_blank");
  loginPop("close");
});

//Show admin btn
if (localStorage.getItem("ADMIN") === "true") {
  AdminBtns.forEach((e) => {
    e.style.display = "block";
  });
  localStorage.getItem("ADMIN");
} else {
  localStorage.getItem("ADMIN");
  AdminBtns.forEach((e) => {
    e.style.display = "none";
  });
}

//moving across admin page
AdminBtns.forEach((e) => {
  e.addEventListener("click", (e) => {
    window.location.href = "admin.html";
  });
});
