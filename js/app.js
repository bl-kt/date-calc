
//date-calc
const addStart = document.querySelector(".addStart");
const addAmount = document.querySelector(".addAmount");

let startTime;
let endTime;

const diffResult = document.querySelector("#diffResult");

const diffStart = document.querySelector("#diffStart").addEventListener("change", function(){   
    const value = this.value;
    const date = new Date(value);
    const time = date.getTime();
    startTime = time;
    console.log(startTime);
});
 
const diffEnd = document.querySelector("#diffEnd").addEventListener("change", function(){   
    const value = this.value;
    const date = new Date(value);
    const time = date.getTime();
    endTime = time;
    console.log(endTime);
});

function calcDiff(startTime, endTime){
    let diffTime = endTime - startTime;
    //days from calculated value
    let diffDays = diffTime / (1000 * 3600 * 24);
    let diffWeeks = diffTime / (1000 * 3600 * 168);
    let diffMonths = diffTime/ (1000 * 3600 * 168 * 4.5);
    let diffYears = diffTime / (1000 * 3600 * 168 * 54);

    console.log(`The difference is ${diffDays} day(s), or ${diffWeeks} week(s), or ${diffMonths} month(s), or ${diffYears} year(s).`);
    console.log(`The rounded difference is ${Math.round(diffDays)} day(s), or ${Math.round(diffWeeks)} week(s), or ${Math.round(diffMonths)} month(s), or ${Math.round(diffYears)} year(s).`);
    
    diffResult.innerHTML = `The difference is ${diffDays} day(s), or ${diffWeeks} week(s), or ${diffMonths} month(s), or ${diffYears} year(s).`;
    return diffDays;
}

function addDays(startDate, amount) {
    startDate = new Date(startDate);
    result = startDate.getDate() + amount;
    return result;
}

function subDays(startDate, amount) {
    startDate = new Date(startDate);
    result = startDate.getDate() - amount;
    return result;
}

function differenceBetween(diffStart, diffEnd){
    calcDiff(diffStart, diffEnd);
}

//slideshow
const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract");

const diffToggle = document.querySelector(".diff");
const addToggle = document.querySelector(".add");

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
const moon = document.querySelector("#moon" );
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