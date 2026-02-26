let username = document.querySelector("#name");
let email = document.querySelector("#usr");
let password = document.querySelector("#pwd");
let reg_btn = document.querySelector(".btn-login");
let get_email = localStorage.getItem("email");
let get_password = localStorage.getItem("password");

reg_btn.addEventListener("click", function(e){
    e.preventDefault();

    if(email.value === "" || password.value === "")
        alert("please fill data");
    else{
        if(get_email && get_email.trim() === email.value && get_password && get_password.trim() === password.value){
                setTimeout(() => {
                window.location = "index.html";
                localStorage.setItem("check", true)
            } , 1500)
        }else
            alert("email or password is wrong");
            localStorage.setItem("check", false)
    }
})

let check = localStorage.getItem("check") === "true";

if (!check) {
    localStorage.setItem("check" , false)
}