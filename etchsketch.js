console.log('test JS link!');

//create a function to wrap the grid generator to be called by a button
function generateGrid() {
 //create a const to hold user prompt
 var number;
 //create a popup prompt to ask user how many squares with an if statement to check if input is less than 101, more than 0 and not a number. If over 100 or less than 0 or not a number, then prompt user to enter a correct number or Quit.
 //if user enter acceptable number, store number in a const
 while (true) {
    number = prompt("Please enter a number between 0 and 100:");
    if (number === null) {
      return; // quit if user clicks Cancel
    }
    number = parseInt(number);
    if (!isNaN(number) && number >= 0 && number <= 100) {
      break; // valid input, exit loop
    }
    alert("Invalid input. Please try again or click Cancel to quit.");
  }

//created a variable to select the div to be appended
const container = document.querySelector('#container');
//created a loop that creates 16 div containers
for (let i = 0; i < number; i++) { // outer loop to create the rows
    const row = document.createElement('div'); // create a new div element for the row
    row.classList.add('row'); // add a class to the row for styling purposes
    
    for (let j = 0; j < number; j++) { // inner loop to create the columns
      const col = document.createElement('div'); // create a new div element for the column
      col.classList.add('col'); // add a class to the column for styling purposes
      row.appendChild(col); // append the column to the row
    }
    
    container.appendChild(row); // append the row to the container
  }
}

// use CSS to style the div classes of row and col
