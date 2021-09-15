function addDays(startDate, addAmount, addEndDay, addSubtract, addType) {

    let result;
    let swiVar = addType.selectedIndex;

    if (addEndDay.checked){
        result += 86400000;
        console.log(result);
    }

    switch(swiVar){
            
        case 1:
            addAmount *= 86400000;
            break;

        case 2:
            addAmount *= 604800000;
            break;

        case 3:
            addAmount *=2721600000;
            break;

        case 4:
            addAmount *=32659200000;
            break;

        case 0:
            alert("Please select a different option.") 
            break;  
    }

    if (addSubtract.selectedIndex = 1){
        result = startDate + addAmount;
    }
    else if ( addSubtract.selectedIndex = 2){
        result = startDate - addAmount;
    }
    else{
        alert("Please select a modifer.");
    }
    
    console.log(result);
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

export { calcDiff, addDays};