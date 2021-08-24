//slideshow
let slideIndex = 1;
const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract")

function displayDiff(){
    diffSlide.classList.toggle("display");
    addSlide.classList.toggle("display");
}

function displayAdd(){
    addSlide.classList.toggle("display");
    diffSlide.classList.toggle("display");
}
