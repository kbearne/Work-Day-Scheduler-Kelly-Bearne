/* Color-code each time block based on past, present, and future when the time block is viewed.

Allow a user to enter an event when they click a time block

Save the event in local storage when the save button is clicked in that time block.

Persist events between refreshes of a page */

// display the current day at the top of the calendar when a user opens the planner
const today = dayjs();
$("#currentDay").text(today.format("dddd D MMM YYYY"));

// colour code when clicked (event listener):
/* past
present
future

onload

check against current date/time
if less = past
if equal = present
if more = future

get current date time */

// when the page is ready
document.addEventListener('DOMContentLoaded', function () {

    // select all hour blocks
    const hourBlocks = document.querySelectorAll('.hour');

    // loop all hour blocks and check against current time
    hourBlocks.forEach(function(hourBlock) {
        // get the hour block value
        let hourBlockValue = hourBlock.innerHTML;

        // compare hour block value against current time
        // TODO 
    });

});
