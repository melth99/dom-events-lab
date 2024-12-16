/*-------------------------------- Variables --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
let numPair = [];
let answer = 0;

/*----------------------------- Event Listeners -----------------------------*/


calculator.addEventListener('click', (event) => {
  const clicked = event.target.innerText;

  
  console.log(`Button clicked: ${clicked}`);

  // clicking
  if (event.target.classList.contains('number')) {
    numPair.push(parseFloat(clicked)); // Convert number and add to numPair
    console.log(`Current numPair: ${numPair}`);
  }
=
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
      numPair = []; // Clearing numPair FIXES BUG
    }
  }
  if (clicked === '/') {
    if (numPair.length < 2) {
      console.log('Please provide two numbers to perform addition.');
    } else {
      answer = numPair[0] / numPair[1];
      console.log(`The answer to ${numPair[0]} / ${numPair[1]} = ${answer}`);
      numPair = []; 
    }
  }
  // clear f(x)
  if (clicked === 'C') {
    numPair = [];
    answer = 0;
    console.log('Calculator cleared!');
  }
});
