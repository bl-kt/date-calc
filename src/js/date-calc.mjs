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

function calcDiff(startTime, endTime, diffEndDay){

    if (diffEndDay.checked){
        endTime += 86400000;
        console.log(endTime);
    }

    let diffTime = endTime - startTime;

    let diffDays = diffTime / (1000 * 3600 * 24);
    let diffWeeks = diffTime / (1000 * 3600 * 168);
    let diffMonths = diffTime/ (1000 * 3600 * 168 * 4.5);
    let diffYears = diffTime / (1000 * 3600 * 168 * 54);

//  console.log(`The difference is ${diffDays} day(s), or ${diffWeeks} week(s), or ${diffMonths} month(s), or ${diffYears} year(s).`);
//  console.log(`The rounded difference is ${Math.round(diffDays)} day(s), or ${Math.round(diffWeeks)} week(s), or ${Math.round(diffMonths)} month(s), or ${Math.round(diffYears)} year(s).`);
    
    diffResult.innerHTML = `The difference is ${diffDays} day(s) or  <br> ${diffWeeks.toFixed(3)} week(s) or <br> ${diffMonths.toFixed(3)} month(s) or <br> ${diffYears.toFixed(3)} year(s).`;
    return diffDays;
}

export { calcDiff, subDays, addDays};