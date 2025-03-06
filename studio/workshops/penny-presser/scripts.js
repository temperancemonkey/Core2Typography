// get the press button
var pressButton = document.querySelector('button[name="press"]');
var studentSelect = document.querySelector('select[name="student"]');
var pennySelect = document.querySelector('select[name="penny"]');
var pennyImage = document.querySelector('.penny');

console.log(pressButton);




// add event listener, logging the penny value
pressButton.addEventListener('click', () => {

    console.log(pennySelect.value);
    console.log(pennyImage);

// log the student value

console.log(studentSelect.value);

    // set the penny image src
    // pennyImage.src = 'img/' + pennySelect.value;

    pennyImage.src = 'https://' + studentSelect.value + '.interactive.rodeo/studio/workshops/penny-presser/img/' + pennySelect.value;
});





