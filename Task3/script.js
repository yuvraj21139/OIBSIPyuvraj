let celsiusInput = document.querySelector("#celsiusInput");
let fahrenheitInput = document.querySelector("#fahrenheitInput");
let kelvinInput = document.querySelector("#kelvinInput");
let clearButton = document.querySelector("#clearButton");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

function convertTemperatures() {
  let cTemp = parseFloat(celsiusInput.value);
  let fTemp = (cTemp * 9) / 5 + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
}

celsiusInput.addEventListener("input", convertTemperatures);
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = ((fTemp - 32) * 5) / 9;
  let kTemp = ((fTemp - 32) * 5) / 9 + 273.15;

  celsiusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
});

// Checking for valid Kelvin Input
kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = ((kTemp - 273.15) * 9) / 5 + 32;

  celsiusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);

  let cTemp2 = parseFloat(celsiusInput.value);
  if (!isNaN(cTemp)) {
    let fTemp = (cTemp * 9) / 5 + 32;
    let kTemp = cTemp2 + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else {
    if (celsiusInput.value === "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

// celsiusInput.addEventListener("input", convertTemperatures);

// Checking for valid Fahrenheit Input

fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  if (!isNaN(fTemp)) {
    let cTemp = ((fTemp - 32) * 5) / 9;
    let kTemp = ((fTemp - 32) * 5) / 9 + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else {
    if (fahrenheitInput.value !== "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

// Checking for Kelvin input

kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  if (!isNaN(kTemp)) {
    let cTemp = kTemp - 273.15;
    let fTemp = ((kTemp - 273.15) * 9) / 5 + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
  } else {
    if (fahrenheitInput.value !== "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

// Clear Button to reset the values

clearButton.addEventListener("click", function () {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});
