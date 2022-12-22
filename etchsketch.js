console.log('test JS link!');

//created a variable to select the div to be appended
const container = document.querySelector('#container');
//created a loop that creates 16 div containers
for (let i = 0; i < 16; i++) { // outer loop to create the rows
    const row = document.createElement('div'); // create a new div element for the row
    row.classList.add('row'); // add a class to the row for styling purposes
    
    for (let j = 0; j < 16; j++) { // inner loop to create the columns
      const col = document.createElement('div'); // create a new div element for the column
      col.classList.add('col'); // add a class to the column for styling purposes
      row.appendChild(col); // append the column to the row
    }
    
    container.appendChild(row); // append the row to the container
  }
// use CSS to style the div classes of row and col
