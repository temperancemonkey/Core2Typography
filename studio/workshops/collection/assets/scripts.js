// get the entries
var request = await fetch('assets/entries.json');
var entries = await request.json();

console.log(entries);

// get the input elements
var locationSelect = document.querySelector('select[name="location"]');
var colorSelect = document.querySelector('select[name="color"]');
var subjectSelect = document.querySelector('select[name="subject"]');

console.log(locationSelect, colorSelect, subjectSelect);

//get the submit button
var submitButton = document.querySelector('button[name="submit"]');

console.log(submitButton);

//add event listener to the button
submitButton.addEventListener('click', () => {
    
    // get the active settings
    var location = locationSelect.value;
    var color = colorSelect.value;
    var subject = subjectSelect.value;

    console.log(location, color, subject);

    //get the matching entry
    var matchingEntry = entries.find((entry) => {
        return entry.location == location
            && entry.color == color
            && entry.subject == subject;
    });

    console.log(matchingEntry);

})