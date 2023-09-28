// console.log("Hello world");

window.onload = function(){

let btnin = document.getElementById("btnin");
let btnup = document.getElementById("btnup");
let nameF = document.getElementById("nameF");
let title = document.getElementById("title");
let formBox = document.getElementById("formBox");
let email = document.getElementById("email-value");
let password = document.getElementById("password-value");
let error = document.getElementById("error")

function validateForm (){
    if(email.value == "hhh" && password.value == "hhh"){
        window.location.href = "../index.html";
    }
    // else{
    //     error.innerHTML = "Wrong Details !!";
    // }
}

btnin.onclick = function(){

    nameF.style.maxHeight = "0";
    title.innerHTML = "Sign In ";
    btnup.classList.add("btn_in");
    btnin.classList.remove("btn_in");
    validateForm();

}

btnup.onclick = function(){

    nameF.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    btnup.classList.remove("btn_in");
    btnin.classList.add("btn_in");
    
}


// btnin.ondblclick = function (){
//     validateForm();
// }





}
