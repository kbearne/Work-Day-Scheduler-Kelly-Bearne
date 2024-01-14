/* Save the event in local storage when the save button is clicked in that time block.

Persist events between refreshes of a page */

// when the page is ready
document.addEventListener('DOMContentLoaded', function () {

    // global variables
    const saveBtns = document.querySelectorAll('.saveBtn');
    const hourBlocks = document.querySelectorAll('.hour');
    // get the current hour with day.js
    const currentHour = dayjs().hour();

    // display the current day at the top of the calendar when a user opens the planner
    const today = dayjs();
    $('#currentDay').text(today.format('dddd D MMM YYYY'));

    // loop hour blocks to check them against the current hour
    hourBlocks.forEach(function (hourBlock) {
        // get the hour block value and parse as an int
        let hourBlockValue = hourBlock.innerHTML;
        let hourBlockNumber = parseInt(hourBlockValue, 10);

        // compare hour block value against current time and colour the corresponding divs accordingly
        if (hourBlockNumber === currentHour) {
            hourBlock.style.backgroundColor = 'red';
        } else if (hourBlockNumber < currentHour) {
            hourBlock.style.backgroundColor = 'grey';
        } else {
            hourBlock.style.backgroundColor = 'green';
        };
    });

    // allow a user to enter an event when they click a block and save it into local storage if they click 'save'
    // iterate over all buttons and listen for a click
    saveBtns.forEach(saveBtn => {
        saveBtn.addEventListener('click', function () {
            // when clicked, get the associated description and hour text values
            let currentRow = this.parentElement;
            let hour = currentRow.querySelector('.hour').innerText;
            let description = this.previousElementSibling.innerText;

            // check that the description value isn't blank
            if (description.trim() !== "") {
                // write the values for the associated hour and entered description to local storage
                localStorage.setItem('hour', hour);
                localStorage.setItem('description', description);
            } else {
                alert("Pleaase enter a value to save");
            };

        });
    });

});