const tempInput = document.querySelector(".temperature");
const fromUnitSelect = document.querySelector("#unit-from");
const toUnitSelect = document.querySelector("#unit-to");
const convertButton = document.querySelector(".convert-btn");
const outputDisplay = document.querySelector(".output");

function validateInput() {
    if (tempInput.value && fromUnitSelect.value && toUnitSelect.value) {
        convertButton.disabled = false;
    } else {
        convertButton.disabled = true;
    }
}

function convertTemperature(value, fromUnit, toUnit) {
    let result;

    if (fromUnit === toUnit) {
        result = parseFloat(value);
    } else {
        const temp = parseFloat(value);
        if (fromUnit === "Fahrenheit") {
            if (toUnit === "Celsius") {
                result = ((temp - 32) * 5) / 9;
            } else if (toUnit === "Kelvin") {
                result = ((temp - 32) * 5) / 9 + 273.15;
            }
        } else if (fromUnit === "Celsius") {
            if (toUnit === "Fahrenheit") {
                result = (temp * 9) / 5 + 32;
            } else if (toUnit === "Kelvin") {
                result = temp + 273.15;
            }
        } else if (fromUnit === "Kelvin") {
            if (toUnit === "Fahrenheit") {
                result = ((temp - 273.15) * 9) / 5 + 32;
            } else if (toUnit === "Celsius") {
                result = temp - 273.15;
            }
        }
    }

    return result.toFixed(2);
}

convertButton.addEventListener("click", (e) => {
    e.preventDefault();

    const tempValue = tempInput.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    const convertedValue = convertTemperature(tempValue, fromUnit, toUnit);

    outputDisplay.textContent = `Converted ${tempValue}° ${fromUnit} to ${convertedValue}° ${toUnit}`;
});

tempInput.addEventListener("input", validateInput);
fromUnitSelect.addEventListener("change", validateInput);
toUnitSelect.addEventListener("change", validateInput);

validateInput();
