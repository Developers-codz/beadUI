var removeBtn = document.querySelector(".remove-alert-btn");
var removableAlert = document.querySelector(".removable-alert");

removeBtn.addEventListener("click",()=>{
    removableAlert.style.display="none"
})

// card

var cardDismissed = document.querySelector(".card-dismiss")
var removeCard = document.querySelector(".dismiss-card-btn")
removeCard.addEventListener("click",()=>{
    cardDismissed.style.display = "none"
})