const threeDot = document.querySelector("#threedot")
const navElement = document.querySelector("nav")
const closeNav = document.querySelector("#close")
const allList = document.querySelectorAll("li")
threeDot.addEventListener('click', ()=>{
    navElement.classList.toggle("flex")
    navElement.classList.toggle("hidden")
})
closeNav.addEventListener('click', ()=> {
   
})
allList.forEach(li=> {
    li.addEventListener("click", ()=>{
         navElement.classList.toggle("flex")
    navElement.classList.toggle("hidden")
    })
})
console.log("HI")