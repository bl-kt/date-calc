function calcDiff(startDate, endDate, wd, we){
    startDate = new Date(startDate);
    endDate = new Date (endDate);
    result = endDate.getDate() - startDate.getDate();
    return result;
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