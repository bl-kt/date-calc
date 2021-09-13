//slideshow
import {displayDiff, displayAdd} from './slideshow-datecalc.mjs'

const diffToggle = document.querySelector("#diff")
diffToggle.addEventListener("click", function() {displayDiff(diffSlide, addSlide, diffToggle, addToggle)});

const addToggle = document.querySelector("#add")
addToggle.addEventListener("click", function() {displayAdd(diffSlide, addSlide, addToggle, diffToggle)});

const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract");

//date-calc
import {calcDiff, subDays, addDays} from './date-calc.mjs';

const diffEndDay = document.querySelector("#diffEndDay");

let endDayToggle = diffEndDay.checked;

let addStart = document.querySelector(".addStart");
let addAmount = document.querySelector(".addAmount");
const addResult = document.querySelector("#addResult");

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

document.querySelector('#diffSubmit').addEventListener("click", function() {calcDiff(startTime, endTime, diffEndDay)});

