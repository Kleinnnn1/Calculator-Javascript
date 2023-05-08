// Get the HTML elements that we need
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');


// Add click event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button text and the current input value
    const buttonText = button.textContent;
    let inputValue = input.value;

    // Handle each button click based on its text
    if (buttonText === 'AC') {
      // Clear the input
      input.value = '';
    } else if (buttonText === 'del') {
      // Delete the last character from the input
      input.value = inputValue.slice(0, -1);
    } else if (buttonText === '%') {
      // Calculate the percentage of the input value
      input.value = inputValue / 100;
    } else if (buttonText === '=') {
      // Calculate the result of the expression entered in the input
      input.value = eval(inputValue);
      
    } else {
      // Append the clicked button's text to the input value
      input.value = inputValue + buttonText;
    }
  });
});


