var data = [
    {
        "letter": "a",
        "text": "an army of frogs"
      },
      {
        "letter": "b",
        "text": "a barrel of monkeys"
      },
      {
        "letter": "c",
        "text": "a clowder of cats"
      },
      {
        "letter": "d",
        "text": "a dule of doves"
      },
      {
        "letter": "e",
        "text": "a bed of eels"
      },
      {
        "letter": "f",
        "text": "a flamboyance of flamingos"
      },
      {
        "letter": "g",
        "text": "a gaggle of geese"
      },
      {
        "letter": "h",
        "text": "a husk of hares"
      },
      {
        "letter": "i",
        "text": "a colony of isopods"
      },
      {
        "letter": "j",
        "text": "a shadow of jaguars"
      },
      {
        "letter": "k",
        "text": "a kindle of kittens"
      },
      {
        "letter": "l",
        "text": "a lounge of lizards"
      },
      {
        "letter": "m",
        "text": "a mischief of mice"
      },
      {
        "letter": "n",
        "text": "a pod of narwhals"
      },
      {
        "letter": "o",
        "text": "a bed of oysters"
      },
      {
        "letter": "p",
        "text": "a prickle of porcupines"
      },
      {
        "letter": "q",
        "text": "a quiver of cobras"
      },
      {
        "letter": "r",
        "text": "a rhumba of rattlesnakes"
      },
      {
        "letter": "s",
        "text": "a shiver of sharks"
      },
      {
        "letter": "t",
        "text": "a troubling of goldfish"
      },
      {
        "letter": "u",
        "text": "an unkindness of ravens"
      },
      {
        "letter": "v",
        "text": "a volt of vultures"
      },
      {
        "letter": "w",
        "text": "a wisdom of wombats"
      },
      {
        "letter": "x",
        "text": "a shimmer of x-ray tetras"
      },
      {
        "letter": "y",
        "text": "a yoke of oxen"
      },
      {
        "letter": "z",
        "text": "a dazzle of zebras"
      }
  ]


// get all the buttons
var buttons = document.querySelectorAll('button');

// get input and output elements
var input = document.querySelectorAll('.input');
var output = document.querySelector('.output');

// add event listener
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    // get the name of the clicked button    
    var letter = button.name;
    
    // get the matching data entry    
    var matchingEntry = data.find((entry) => {
      return entry.letter == letter;
    });
    
    // show the output    
    output.innerHTML = `
      <p>${ matchingEntry.text }</p>
    `;  
    
    // hide the input
    input.style.display = 'none';
    
  });
});

// color changing button
var colorButton = document.getElementById('color');
const colors = ['crimson', 'navy', 'orange', 'purple', 'yellow', 'pink', 'blue', 'black'];
let colorIndex = 0;

colorButton.addEventListener('click', () => {
  var currentColor = output.style.color;

  output.style.color = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;

});

//typeface changing button
var typefaceButton = document.getElementById('typeface');
const fontFamily =[ 'Space Mono, monospace', 'Funnel Display, sans-serif', 'Finlandica, sans-serif', 'Nova Cut, system-ui', 'Arbutus, serif', 'Almendra Display, serif', 'Jacquard 24, system-ui' ];
let typefaceIndex = 0;

typefaceButton.addEventListener('click', () => {
  var currentFont = fontFamily[typefaceIndex]

  document.body.style.fontFamily = currentFont;

  typefaceIndex = (typefaceIndex + 1) % fontFamily.length;

  typefaceSelect.value = currentFont;

});

//change background color button
var backgroundcolorButton = document.getElementById('backgroundcolor');
const backgroundColor =['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

backgroundcolorButton.addEventListener('click', () => {
  var currentColor = backgroundColor[colorIndex];
  
  document.body.style.backgroundColor = backgroundColor[colorIndex];


  colorIndex = (colorIndex + 1) % backgroundColor.length;

});

//drop down selection of typefaces
var typefaceSelect = document.querySelector('select[name="differentfonts"]');

typefaceSelect.addEventListener('change', () => {

console.log(typefaceSelect.value);
var currentFont = typefaceSelect.value;

document.body.style.fontFamily = currentFont;

});

//blank slate button
var wipeButton = document.querySelector('#wipe')

wipeButton.addEventListener('click', () => {
  
  output.innerHTML = '';

  document.body.style.backgroundColor = 'white';

  
});


