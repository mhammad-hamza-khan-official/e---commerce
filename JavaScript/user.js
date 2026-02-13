console.log("Hellow");
const LoginPop = document.getElementById("login-pop")
const popLoginBtn = document.getElementById("pop-login-btn")

function loginPop(value) {
    if (value === "open") {
        LoginPop.style.display = "flex"
        document.body.style.overflow = "hidden"
    }else if(value === "close"){
        LoginPop.style.display = "none"
        document.body.style.overflow = "auto"
    }
}

// login pop is open
popLoginBtn.addEventListener("click",() => {
        loginPop("open")
})



function hamberger(value) {
    
}


