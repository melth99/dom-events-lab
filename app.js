/*-------------------------------- Variables --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
let numPair = [];
let answer = 0;

/*----------------------------- Event Listeners -----------------------------*/

// Add a single event listener for all button clicks on the calculator
calculator.addEventListener('click', (event) => {
  const clicked = event.target.innerText;

  // Log the clicked button (for debugging)
  console.log(`Button clicked: ${clicked}`);

  // Handle number clicks
  if (event.target.classList.contains('number')) {
    numPair.push(parseFloat(clicked)); // Convert number and add to numPair
    console.log(`Current numPair: ${numPair}`);
  }

  // Handle multiplication
  if (clicked === '*') {
    if (numPair.length < 2) {
      console.log('Please provide two numbers to perform multiplication.');
    } else {
      answer = numPair[0] * numPair[1];
      console.log(`The answer to ${numPair[0]} * ${numPair[1]} = ${answer}`);
      numPair = []; // Clear numPair after calculation
    }
  }

  // Handle addition
  if (clicked === '+') {
    if (numPair.length < 2) {
      console.log('Please provide two numbers to perform addition.');
    } else {
      answer = numPair[0] + numPair[1];
      console.log(`The answer to ${numPair[0]} + ${numPair[1]} = ${answer}`);
      numPair = []; // Clear numPair after calculation
    }
  }
  if (clicked === '-') {
    if (numPair.length < 2) {
      console.log('Please provide two numbers to perform addition.');
    } else {
      answer = numPair[0] - numPair[1];
      console.log(`The answer to ${numPair[0]} - ${numPair[1]} = ${answer}`);
      numPair = []; // Clear numPair after calculation
    }
  }
  if (clicked === '/') {
    if (numPair.length < 2) {
      console.log('Please provide two numbers to perform addition.');
    } else {
      answer = numPair[0] / numPair[1];
      console.log(`The answer to ${numPair[0]} / ${numPair[1]} = ${answer}`);
      numPair = []; // Clear numPair after calculation
    }
  }
  // Handle clearing
  if (clicked === 'C') {
    numPair = [];
    answer = 0;
    console.log('Calculator cleared!');
  }
});
