let heading = document.querySelector("#heading");
let topBackgroundPattern = document.querySelector("#top-background-pattern");
let body = document.querySelector("#body");

let toggleButton = document.querySelector("#toggle");
let toggleCircle = document.querySelector("#circle");
toggleButton.addEventListener("click", function(){
    toggleButton.classList.toggle("toggle-light-theme");
    toggleCircle.classList.toggle("circle-light-theme");

    heading.classList.toggle("heading-light-theme")
    topBackgroundPattern.classList.toggle("top-background-light-theme");
    body.classList.toggle("body-light-theme");
    
    
});