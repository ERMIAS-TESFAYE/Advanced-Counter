// A counter program in every click increase or decrease

// accessing elements from DOM
const h1 = document.querySelector('h1');
const button = document.querySelectorAll('button');
let counter = 0;

// Button to increase
button[0].addEventListener('click', () => {
  h1.textContent = ++counter;
  localStorage.setItem('counter', counter);
});

//Button to decrease
button[1].addEventListener('click', () => {
  h1.textContent = --counter;
  localStorage.setItem('counter', counter);
});

// Button to Retrieve data from local storage
button[2].addEventListener('click', () => {
  // Parse the stored value to ensure it's a number
  counter = parseInt(localStorage.getItem('counter') || 0);
  h1.innerText = counter;
});

// Button to remove data from local storage
button[3].addEventListener('click', () => {
  localStorage.removeItem('counter');
  counter = 0;
  h1.innerText = counter;
});
