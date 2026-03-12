// Author: Aman | SVVV Internship 2026

// Get all the strip elements (6 total: 2 for hours, 2 for minutes, 2 for seconds)
var strips = document.querySelectorAll(".strip");

// Each number block is 8vmin tall — used to slide the strip up/down
var numberSize = 8;

// Briefly highlight (pop) a specific digit on a strip
function highlight(stripIndex, digit) {
  var number = strips[stripIndex].querySelector(".number:nth-of-type(" + (digit + 1) + ")");
  number.classList.add("pop");

  // Remove highlight after 950ms
  setTimeout(function () {
    number.classList.remove("pop");
  }, 950);
}

// Slide a strip to show the correct digit and highlight it
function showDigit(stripIndex, number) {
  var firstDigit  = Math.floor(number / 10); // e.g. for 47 → 4
  var secondDigit = number % 10;             // e.g. for 47 → 7

  // Slide first digit strip up
  strips[stripIndex].style.transform = "translateY(" + (firstDigit * -numberSize) + "vmin)";
  highlight(stripIndex, firstDigit);

  // Slide second digit strip up
  strips[stripIndex + 1].style.transform = "translateY(" + (secondDigit * -numberSize) + "vmin)";
  highlight(stripIndex + 1, secondDigit);
}

// Read current time and update all strips
function updateClock() {
  var now     = new Date();
  var hours   = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  showDigit(0, hours);   // strips 0 & 1 → hours
  showDigit(2, minutes); // strips 2 & 3 → minutes
  showDigit(4, seconds); // strips 4 & 5 → seconds
}

// Run every 1 second
setInterval(updateClock, 1000);
