//slideshow
let slideIndex = 1;
const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract")

const diffToggle = document.querySelector(".diff");
const addToggle = document.querySelector(".add")

function displayDiff(){
    diffSlide.classList.add("display");
    diffToggle.style.backgroundColor = "#19191a";
    addSlide.classList.remove("display");
    addToggle.style.backgroundColor = "transparent";

}

function displayAdd(){
    diffSlide.classList.remove("display");
    diffToggle.style.backgroundColor = "transparent";
    addSlide.classList.add("display");
    addToggle.style.backgroundColor = "#19191a";
}


