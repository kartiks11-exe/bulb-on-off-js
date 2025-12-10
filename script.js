// Get references to DOM elements
const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");

// Initial state: OFF
let isOn = false;

// Function to update UI based on state
function updateBulb() {
  if (isOn) {
    bulb.classList.add("on");
    toggleBtn.textContent = "Turn OFF";
  } else {
    bulb.classList.remove("on");
    toggleBtn.textContent = "Turn ON";
  }
}

// When button is clicked → toggle state
toggleBtn.addEventListener("click", () => {
  isOn = !isOn;
  updateBulb();
});

// Call once so UI matches initial state
updateBulb();
