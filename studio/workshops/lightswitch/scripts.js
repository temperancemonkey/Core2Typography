// get the button elements
var onButton = document.querySelector('button[name="on"]');
var offButton = document.querySelector('button[name="off"]');

// log elements to the console
console.log(onButton);
console.log(offButton);

// get the lightbulb element
var lightbulb = document.querySelector('.lightbulb');


// log element to console
console.log(lightbulb);

// add event listener to on button, this is a click event
onButton.addEventListener('click', () => {

    // add the is-on class to the lightbulb element
    lightbulb.classList.add('is-on');

});

// add event listener to off button
offButton.addEventListener('click', () => {

    lightbulb.classList.remove('is-on');
    
});