//slideshow
let slideIndex = 1;
const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract")

const diffToggle = document.querySelector(".diff");
const addToggle = document.querySelector(".add")

function displayDiff(){
    diffSlide.classList.add("display");
    diffToggle.style.backgroundColor = "#0000002f";
    
    addSlide.classList.remove("display");
    addToggle.style.backgroundColor = "transparent";

}

function displayAdd(){
    diffSlide.classList.remove("display");
    diffToggle.style.backgroundColor = "transparent";

    addSlide.classList.add("display");
    addToggle.style.backgroundColor = "#0000002f";
}

//dark mode

const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

function lightMode(){
    body.classList.toggle('light');
    if (body.classList.contains('light')){
        moon.style.display = "inline-block";
        sun.style.display = "none";
    }
    else {
        sun.style.display = "inline-block";
        moon.style.display = "none";
    }
}