switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log(day);

function getMonthName(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number";
    }
    return monthName;
}

console.log(getMonthName(3)); // Output: March
console.log(getMonthName(11)); // Output: November
console.log(getMonthName(15)); // Output: Invalid month number

console.log("=====Example 1============");

let coffeeType = "latte";

switch (coffeeType) {
    case "latte":
        console.log('latte')
        break;
    case "espresso":
        console.log('espresso')
        break;
    case "cappuccinno":
        console.log('cappuccino')
        break;
    default:
        console.log('Invalid Coffee Type')
}


console.log("===========");

let getDayOfWeek = (dayNumber) => {

    const daysOfTheWeek ={
        1 : "Sunday",
        2 : "Monday",
        3 : "Tuesday",
        4 : "Wednesday",
        5 : "Thursday",
        6 : "Friday",
        7 : "Saturday",

    };

    return daysOfTheWeek[dayNumber] ||"Enter from 1 - 7";
} 
console.log(getDayOfWeek(9)); // Enter from 1-7
