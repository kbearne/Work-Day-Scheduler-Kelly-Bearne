// when the page is ready
document.addEventListener('DOMContentLoaded', function () {

    // global variables
    const saveBtns = document.querySelectorAll('.saveBtn');
    const hourBlocks = document.querySelectorAll('.hour');
    // get the current hour (with day.js)
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

    // load any div values based on previously stored local storage values
    function loadDivValues() {
        let length = localStorage.length;

        // check there is at least one local storage value stored, if there isn't then break out of function early
        if (length === 0) {
            return;
        };

        // loop local storage items (by length)
        for (let i = 0; i < length; i++) {
            // retrieve the current item key
            const key = localStorage.key(i);

            // check if the key includes 'description'
            if (key.includes("_description")) {
                // split the key (using the first instance of _ as the seperator)
                const rowId = key.split("_")[0];
                // get the current div based on the retrieved local storage value
                const currentDiv = document.getElementById(rowId);

                // if description key is found then get the description value, match it with the corresponding (div) rowId and populate it
                if (currentDiv) {
                    const descriptionValue = localStorage.getItem(key);

                    currentDiv.querySelector('.description').innerText = descriptionValue;
                };
            };
        };
    };

    loadDivValues();

    // allow a user to enter an event when they click a block and save it into local storage if they click 'save'
    saveBtns.forEach(saveBtn => {
        // iterate over all buttons and listen for a click
        saveBtn.addEventListener('click', function () {
            // when clicked, get the associated description and hour (inner) text values
            let currentRow = this.parentElement;
            let hour = currentRow.querySelector('.hour').innerText;
            let description = this.previousElementSibling.innerText;

            // check that the description value isn't blank
            if (description.trim() !== "") {
                // write the values for the associated hour and (user) entered description to local storage, prefixed with the unique row Ids
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