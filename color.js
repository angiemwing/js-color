// select the element

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

// listing to a user event

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});
