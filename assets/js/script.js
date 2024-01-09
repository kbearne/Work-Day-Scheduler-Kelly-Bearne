/* Allow a user to enter an event when they click a time block

Save the event in local storage when the save button is clicked in that time block.

Persist events between refreshes of a page */

const currentHour = dayjs().hour();
console.log(currentHour);

// display the current day at the top of the calendar when a user opens the planner
const today = dayjs();
$("#currentDay").text(today.format("dddd D MMM YYYY"));

// when the page is ready
document.addEventListener('DOMContentLoaded', function () {

    // select all hour blocks
    const hourBlocks = document.querySelectorAll('.hour');

    // loop hour blocks to check them against the current hour
    hourBlocks.forEach(function(hourBlock) {
        // get the hour block value and parse as an int
        let hourBlockValue = hourBlock.innerHTML;
        let hourBlockNumber = parseInt(hourBlockValue, 10);

        // compare hour block value against current time and colour the corresponding divs accordingly
        if (hourBlockNumber === currentHour) {
            hourBlock.style.backgroundColor = "red";
        } else if (hourBlockNumber < currentHour) {
            hourBlock.style.backgroundColor = "grey";
        } else {
            hourBlock.style.backgroundColor = "green";
        };
    });

});
