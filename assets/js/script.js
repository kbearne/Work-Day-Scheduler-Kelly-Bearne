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

    // DESCRIPTION
    function loadDivValues() {
        let length = localStorage.length;

        // check there is at least one local storage value stored, if there isn't then break
        if (length === 0) {
            return;
        };

        // if at least one local storage item exists then proceed
            // loop divs and match where rowId === id (div)
            // populate the associated description
        for (let i = 0; i < length; i++){
            //
        }
    };

    loadDivValues();

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
                // write the values for the associated hour and entered description to local storage, prefixed with the unique row Ids
                let rowId = currentRow.id;
                localStorage.setItem(`${rowId}_hour`, hour);
                localStorage.setItem(`${rowId}_description`, description);
            } else {
                // if the user enters a blank value, prompt them to enter a value
                alert("Please enter a value to save");
            };
        });
    });
});