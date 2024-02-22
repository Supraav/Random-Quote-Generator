const quotes = {
  motivation: [
    "The size of your problems is nothing compared with your ability to solve them. Dont overestimate your problems and underestimate yourself.",
    "Life is like a steering wheel, it only takes one small move to change your entire direction.",
    "You will never know what you are capable of until you take that first step and go for it.",
    "You make the world a better place by making yourself a better person.",
    "Success is the problem but failure is the formula. You cant solve the problem without knowing the formula.",
    "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
  ],
  wisdom: [
    "Knowledge is of no value unless you put it into practice.",
    "The hours of folly are measured by the clock; but of wisdom, no clock can measure.",
    "Think before you speak. Read before you think.",
    "The only true wisdom is in knowing you know nothing.",
    "True knowledge exists in knowing that you know nothing.",
    "Even though you know a thousand things, ask the man who knows one.",
  ],
  success: [
    "The road to success is not easy to navigate, but with hard work, drive and passion, it's possible to achieve the American dream.",
    "Successful people are not gifted; they just work hard, then succeed on purpose.",
    "I am not bound to win, but i am bound to be true. I am not bound to succeed, but i am bound to live up to what light i have.",
    "Success and failure are both part of life. Both are not permanent.",
    "To climb steep hills requires slow pace at first.",
    "Success is achieved by developing our strengths, not by eliminating our weaknesses.",
  ],
};

let currIndex = 0;
let currCategory = "wisdom";

// font increase/decrease
var increment = document.getElementById("up");
var decrement = document.getElementById("down");
var resize = document.getElementById("resize");
var fsize = document.getElementById("quotes");
var step = 2;

fsize.style.fontSize = "20px";
var defaultFontSize = fsize.style.fontSize;
resize.onclick = function () {
  fsize.style.fontSize = defaultFontSize;
};

increment.onclick = function () {
  var currentSize = parseInt(fsize.style.fontSize);
  if (currentSize <= 38) {
    fsize.style.fontSize = currentSize + step + "px";
  }
};

decrement.onclick = function () {
  var currentSize = parseInt(fsize.style.fontSize);
  if (currentSize >= 12) {
    fsize.style.fontSize = currentSize - step + "px";
  }
};

// random first quotes in #quotes
function selectQuotefromArrays() {
  const quotesField = Object.keys(quotes);
  generateRandomInteger(quotesField.length);
  currCategory = quotesField[currIndex];
  // console.log(currCategory);
  const selected_quotes_array = quotes[currCategory];
  generateRandomInteger(selected_quotes_array.length);
  const randomQuote = selected_quotes_array[currIndex];

  document.getElementById("quotes").textContent = randomQuote;

  const selectElement = document.getElementById("quotes-category");
  for (const option of selectElement.options) {
    if (option.value === currCategory) {
      option.selected = true;
      break;
    }
  }
}

selectQuotefromArrays();

function generateRandomInteger(max) {
  currIndex = Math.floor(Math.random() * max);
}

// handle changes from the options
function handleChange() {
  currCategory = document.getElementById("quotes-category").value;
  console.log(currCategory);
  const max = quotes[currCategory].length;
  generateRandomInteger(max);
  document.getElementById("quotes").textContent =
    quotes[currCategory][currIndex];
}

// generate random quote button from all the categories
function handleRandom() {
  if (currCategory === "") {
    alert("select a category");
  }
  document.getElementById("previous").disabled = false;
  document.getElementById("next").disabled = false;

  generateRandomInteger(quotes[currCategory].length);
  document.getElementById("quotes").innerHTML = quotes[currCategory][currIndex];
}

//next slider
function next() {
  document.getElementById("previous").disabled = false;
  console.log(currIndex, currCategory, quotes[currCategory]);
  const maxIndex = quotes[currCategory].length - 1;
  console.log(currIndex, currCategory, maxIndex);

  if (currIndex < maxIndex) {
    currIndex++;
    document.getElementById("quotes").innerHTML =
      quotes[currCategory][currIndex];
    document.getElementById("next").disabled = false;
  }
  if (currIndex === maxIndex) {
    document.getElementById("next").disabled = true;
  }
}

// previous slider
function previous() {
  document.getElementById("next").disabled = false;
  if (currIndex > 0) {
    currIndex--;
    document.getElementById("quotes").innerHTML =
      quotes[currCategory][currIndex];
    document.getElementById("previous").disabled = false;
  }

  if (currIndex === 0) {
    document.getElementById("previous").disabled = true;
  }
}
