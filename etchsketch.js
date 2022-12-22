console.log('test JS link!');

//created a variable to select the div to be appended
const container = document.querySelector('#container');
//created a div to hold the etch a sketch
const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = "Hey I'm red!";

//append all into the main div container
container.appendChild(content);