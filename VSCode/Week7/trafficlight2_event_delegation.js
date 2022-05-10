// Add event listener on the document
// When the document is clicked
document.addEventListener("click", changeLight);

function changeLight(event) {
  // if clicked element has class "button"
  if (event.target.matches(".button")) {
    // remove classes from any lights that are on
    turnOffLights();
    // get `data-target` attribute from clicked element
    let targetSelector = event.target.dataset.target;
    // find element we want to toggle class using above selector
    let targetElement = document.querySelector(targetSelector);
    // get target element's `data-color` attribute
    let color = targetElement.dataset.color;
    // add that string as a class to target element
    targetElement.classList.add(color);
  }
}

function turnOffLights() {
  // loop through elements with class "bulb"
  const els = document.querySelectorAll(".bulb");
  for (el of els) {
    // reset class attribute to `bulb` - so if class `red`/`yellow`/`green` was present, it's now gone
    el.setAttribute("class", "bulb");
  }
}