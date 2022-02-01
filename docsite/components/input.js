var passInput = document.querySelector("#pass-input");
var eyeBtn = document.querySelector("#eye-btn")

  eyeBtn.addEventListener('click',  () => {
    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passInput.setAttribute('type', type);
    
});