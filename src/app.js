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

document.getElementById("contactform").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Send the form using AJAX
    var form = event.target;
    var formData = new FormData(form);
    console.log(formData)
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            // Success message
            alert("Thank you! Your message has been sent.");
            form.reset(); // Reset the form
        } else {
            // Error message
            alert("Oops! Something went wrong.");
        }
    };
    xhr.send(formData);
});