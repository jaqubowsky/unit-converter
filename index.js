const lengthTextEl = document.querySelector(".length-text");
const volumeTextEl = document.querySelector(".volume-text");
const massTextEl = document.querySelector(".mass-text");
const submitEl = document.querySelector(".submit-el");
const inputEl = document.querySelector(".input-el");

const meterToFeetRatio = 3.2808;
const litersToGallonsRatio = 0.264;
const kilogramsToPoundsRadio = 2.2046;

function unitConversion(initialUnit, finalUnit, conversionType) {
	return `${inputEl.value} ${initialUnit} = ${(
		inputEl.value * conversionType
	).toFixed(3)} ${finalUnit} | ${inputEl.value} ${finalUnit} = ${(
		inputEl.value / conversionType
	).toFixed(3)} ${initialUnit}`;
}

submitEl.addEventListener("click", function () {
	lengthTextEl.innerHTML = unitConversion(
    "meters", 
    "feet", 
    meterToFeetRatio
  );
	volumeTextEl.innerHTML = unitConversion(
		"liters",
		"gallons",
		litersToGallonsRatio
	);
	massTextEl.innerHTML = unitConversion(
		"kilos",
		"pounds",
		kilogramsToPoundsRadio
	);
});
