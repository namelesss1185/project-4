let username = document.querySelector("#name");
let email = document.querySelector("#usr");
let password = document.querySelector("#pwd");
let reg_btn = document.querySelector(".btn-login");
let accept = document.querySelector("#keepSigned");

reg_btn.addEventListener("click", function(e){
    e.preventDefault();

    if(username.value === "" || email.value === "" || password.value === "")
        alert("please fill data");
    else if(!accept.checked)
        alert("please accept the rules")
    else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout(() => {
            window.location = "log_in.html";
        } , 1500)
    }
})