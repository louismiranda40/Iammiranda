// Accessing elements in the HTML document
const logoImage = document.querySelector('.logo-image');
const navBar = document.getElementById('nav-bar');
const signUpForm = document.querySelector('.sign-up-form');
const videoFrame = document.querySelector('.video iframe');
const goatDiv = document.getElementById('goat');

// Example of using document properties
console.log('Document title:', document.title);
console.log('Document URL:', document.URL);
console.log('Document charset:', document.characterSet);
console.log('Document doctype:', document.doctype.name);

// Example of modifying HTML and CSS properties
logoImage.style.width = '300px';  // Changing logo image width

// Example of adding event listener
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission
  console.log('Form submitted!');
});

// Example of modifying iframe source
videoFrame.src = 'https://www.youtube.com/embed/RG9TMn1FJzc';

// Example of dynamically creating elements
const newLink = document.createElement('a');
newLink.textContent = 'New Link';
newLink.href = 'https://example.com';

// Adding the new link to the navigation bar
const navLinks = navBar.querySelector('ul');
const liElement = document.createElement('li');
liElement.appendChild(newLink);
navLinks.appendChild(liElement);

// Example of manipulating the goat div
goatDiv.style.backgroundSize = 'cover';
goatDiv.style.backgroundPosition = 'center';
