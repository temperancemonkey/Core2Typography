// get the press button
var pressButton = document.querySelector('button[name="press"]');
var pennySelect = document.querySelector('select[name="penny"]');
var pennyImage = document.querySelector('.penny');

console.log(pressButton);




// add event listener, logging the penny value
pressButton.addEventListener('click', () => {

    console.log(pennySelect.value);
    console.log(pennyImage);

    // set the penny image src
    pennyImage.src = 'img/' + pennySelect.value;
});



