//date-calc

import {calcDiff, subDays, addDays} from './date-calc.mjs';


let addStart = document.querySelector(".addStart");
let addAmount = document.querySelector(".addAmount");
const addResult = document.querySelector("#addResult");

let startTime;
let endTime;
const diffResult = document.querySelector("#diffResult");

document.querySelector('#diffSubmit').addEventListener("click", function() {calcDiff(startTime, endTime)});

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

//slideshow
const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract");

const diffToggle = document.querySelector("#diff").addEventListener("click", function() {displayDiff()});
const addToggle = document.querySelector("#add").addEventListener("click", function() {displayAdd()});

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