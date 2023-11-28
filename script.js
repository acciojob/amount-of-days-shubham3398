//your JS code here. If required.

function daysOfAYear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}
