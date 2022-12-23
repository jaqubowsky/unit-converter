const lengthTextEl = document.querySelector(".length-text");
const volumeTextEl = document.querySelector(".volume-text");
const massTextEl = document.querySelector(".mass-text");
const submitBtn = document.querySelector(".submit-el");
const inputEl = document.querySelector(".input-el");
const resetBtn = document.querySelector(".reset-el");

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

submitBtn.addEventListener("click", function () {
	if (inputEl.value === "") {
		inputEl.focus();
	} else {
		lengthTextEl.innerHTML = unitConversion("meters", "feet", meterToFeetRatio);
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
	}
});

resetBtn.addEventListener("click", function () {
	volumeTextEl.textContent = "";
	lengthTextEl.textContent = "";
	massTextEl.textContent = "";
  inputEl.value = ""
	inputEl.focus();
});
