var btnsmallModal = document.querySelector("#modal-sm-popup-btn")
var smallModal = document.querySelector("#sm-modal")
var cancelbtnsm = document.querySelector("#cancel-btn-sm")
btnsmallModal.addEventListener("click",()=>{
    smallModal.style.display="block"
})
cancelbtnsm.addEventListener("click",()=>{
    smallModal.style.display ="none"
})




var btnLoginModal = document.querySelector("#modal-lg-popup-btn")
var loginModal = document.querySelector("#login-modal")

btnLoginModal.addEventListener("click",()=>{
    loginModal.style.display = "block";
  })
var signupCloseBtn = document.querySelector("#signup-close-btn")
var signupCloseBtn2 = document.querySelector("#signup-close-btn2")
signupCloseBtn.addEventListener("click",()=>{
    loginModal.style.display = "none"
   
})
signupCloseBtn2.addEventListener("click",()=>{
    loginModal.style.display = "none"
})