// Assigning element to variable
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const redButton = document.querySelector("#red-button");

// When click on element takes place, call makePageRed() function
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
redButton.addEventListener("click", makePageRed);

// The function changes background color of body element
// https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
function makePageRed() {
  document.body.style.backgroundColor = "red";
}

const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", makePageBlue);

function makePageBlue() {
  document.body.style.backgroundColor = "blue";
}