const vip = document.querySelector(".type");
const section = document.querySelector(".section");
const classique = document.querySelector(".type1")

vip.addEventListener("click", ()=>{
    section.classList.add("active")
})

classique.addEventListener("click", ()=>{
    section.classList.remove("active")
})