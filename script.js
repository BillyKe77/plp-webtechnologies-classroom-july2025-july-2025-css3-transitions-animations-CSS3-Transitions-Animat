// Part 2: Function with parameters and return
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

let total = calculateTotal(100, 0.15);
console.log("Total with tax:", total);

// Part 2: Scope demonstration
let globalMessage = "Hello. I am from global scope";

function showMessage() {
  let localMessage = "Hello. I am from local scope";
  console.log(globalMessage); // ✅
  console.log(localMessage);  // ✅
}

showMessage();
// console.log(localMessage); // ❌ This will throw a ReferenceError because localMessage is not defined in the global scope.

// Part 2: Reusable DOM style function. For instance changing container styles
function changeContainerStyle(id, bgColor, textColor, fontSize) {
  const container = document.getElementById(id);
  container.style.backgroundColor = bgColor;
  container.style.color = textColor;
  container.style.fontSize = fontSize;
}

// Example usage:
changeContainerStyle('container', '#1be05dff', '#333', '18px');


// Part 3: Trigger box animation
function animateBox() {
  const box = document.getElementById('box');
  box.classList.toggle('animate');
}

// Part 3: Toggle modal visibility
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
}

// Bonus: Generic class toggler
function toggleClass(id, className) {
  const el = document.getElementById(id);
  el.classList.toggle(className);
}
