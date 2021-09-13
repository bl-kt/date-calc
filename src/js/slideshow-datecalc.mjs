//slideshow
function displayDiff(diffSlide, addSlide, diffToggle, addToggle){
    diffSlide.classList.add("display");
    addSlide.classList.remove("display");

    diffToggle.style.background = "linear-gradient(to bottom, #ccc, #fff)";
    addToggle.style.background = "#fff"

}

function displayAdd(diffSlide, addSlide, addToggle, diffToggle){
    diffSlide.classList.remove("display");
    addSlide.classList.add("display");

    addToggle.style.background = "linear-gradient(to bottom, #ccc, #fff)";
    diffToggle.style.background = "#fff"
}

export { displayDiff, displayAdd}