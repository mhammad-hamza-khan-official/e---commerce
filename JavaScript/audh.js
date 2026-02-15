const ADMIN = {
  name: "hamzakhan",
  password: "12345",
  email: "hamzakhan@gmail.com",
};

const userCard = document.getElementById("User");
const adminCard = document.getElementById("Admin");

let loginType = localStorage.getItem("loginType", "user");
let userBtn = document.getElementById("User-btn");
let adminBtn = document.getElementById("Admin-btn");
//Admin input feild
let adminName = document.getElementById("admin-name");
let adminPassword = document.getElementById("admin-password");
let adminEmail = document.getElementById("admin-email");
//Alerts
const alertWrong = document.getElementById("wrong");
const alertEmpty = document.getElementById("empty");
//Submin as Admin btn
const submitAdmin = document.getElementById("submit-admin");

const Forms = document.getElementsByTagName("form");
console.log(Forms);

Forms[0].addEventListener("click", (e) => {
  if (!Forms[0].checkValidity()) {
    return; // let browser show validation errors
  }
  e.preventDefault();
});

function changeLoginType(value) {
  if (value === "user") {
    userCard.style.display = "flex";
    adminCard.style.display = "none";
  } else if (value === "admin") {
    userCard.style.display = "none";
    adminCard.style.display = "flex";
  }
}
changeLoginType(loginType);

//Change login type user / admin
userBtn.addEventListener("click", () => {
  localStorage.setItem("loginType", "user");
  loginType = localStorage.getItem("loginType");
  changeLoginType(loginType);
});

adminBtn.addEventListener("click", () => {
  localStorage.setItem("loginType", "admin");
  loginType = localStorage.getItem("loginType");
  changeLoginType(loginType);
});

//
submitAdmin.addEventListener("click", () => {
  let Name = adminName.value.replace(" ", "").trim().toLowerCase();
  if (
    Name === ADMIN.name &&
    adminEmail.value === ADMIN.email &&
    adminPassword.value &&
    ADMIN.password
  ) {
    window.location.href = "admin.html";
  } else if (
    adminName.value === "" &&
    adminEmail.value === "" &&
    adminPassword.value === ""
  ) {
    alertEmpty.style.display = "block";
    alertWrong.style.display = "none";
}else{
      alertEmpty.style.display = "none";
      alertWrong.style.display = "block";
  }
});
