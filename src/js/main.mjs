//slideshow
import {displayDiff, displayAdd} from './slideshow-datecalc.mjs'

const diffToggle = document.querySelector("#diff");

diffToggle.addEventListener("click", function() {displayDiff(diffSlide, addSlide, diffToggle, addToggle)});

const addToggle = document.querySelector("#add");

addToggle.addEventListener("click", function() {displayAdd(diffSlide, addSlide, addToggle, diffToggle)});

const diffSlide = document.querySelector(".differenceBetween");
const addSlide = document.querySelector(".addSubtract");

//date-calc
let value;
let date;
let time;
let startTime;
let endTime;
let addSub;
let modType;

import {calcDiff, addDays} from './date-calc.mjs';

const addEndDay = document.querySelector("#addEndDay");

const addStart = document.querySelector("#addStart");
addStart.addEventListener("change", function(){
    value = this.value;
    date = new Date(value);
    time = date.getTime();
    startTime = time;
    console.log(startTime);
});

let addAmount = document.querySelector("#addAmount");
addAmount.addEventListener("change", function(){
    addAmount = this.value;
    console.log(addAmount);
});

const addType = document.querySelector("#addType");
addType.addEventListener("change", function(){
    modType = addType.selectedIndex;
    console.log(modType);
    return modType;
});

const addSubtract = document.querySelector("#addSubtract");
addSubtract.addEventListener("change", function(){
    addSub = addSubtract.selectedIndex;
    console.log(addSub);
    return addSub;
});

const addResult = document.querySelector("#addResult");


document.querySelector('#addSubmit').addEventListener("click", function(){addDays(startTime, addAmount, addEndDay, addSubtract, addType)})

const diffEndDay = document.querySelector("#diffEndDay");

const diffResult = document.querySelector("#diffResult");

const diffStart = document.querySelector("#diffStart");

diffStart.addEventListener("change", function(){   
    value = this.value;
    date = new Date(value);
    time = date.getTime();
    startTime = time;
    console.log(startTime);
});
 
const diffEnd = document.querySelector("#diffEnd");

diffEnd.addEventListener("change", function(){   
    value = this.value;
    date = new Date(value);
    time = date.getTime();
    endTime = time;
    console.log(endTime);
});

document.querySelector('#diffSubmit').addEventListener("click", function() {calcDiff(startTime, endTime, diffEndDay)});

