// Write your code here!
// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'REHEMA-SOMO is the champion'; 

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);
