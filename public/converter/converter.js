// Get all tab buttons
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.converter-section');

// Tab switching functionality
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and sections
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding section
        const type = tab.getAttribute('data-type');
        document.getElementById(type).classList.add('active');
        
        // Clear all inputs when switching tabs
        clearInputs();
    });
});

// Temperature Converter: Celsius ↔ Fahrenheit
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
});

fahrenheitInput.addEventListener('input', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
    } else {
        celsiusInput.value = '';
    }
});

// Weight Converter: Kilograms ↔ Pounds
const kilogramsInput = document.getElementById('kilograms');
const poundsInput = document.getElementById('pounds');

kilogramsInput.addEventListener('input', () => {
    const kilograms = parseFloat(kilogramsInput.value);
    if (!isNaN(kilograms)) {
        const pounds = kilograms * 2.20462;
        poundsInput.value = pounds.toFixed(2);
    } else {
        poundsInput.value = '';
    }
});

poundsInput.addEventListener('input', () => {
    const pounds = parseFloat(poundsInput.value);
    if (!isNaN(pounds)) {
        const kilograms = pounds * 0.453592;
        kilogramsInput.value = kilograms.toFixed(2);
    } else {
        kilogramsInput.value = '';
    }
});

// Length Converter: Meters ↔ Feet
const metersInput = document.getElementById('meters');
const feetInput = document.getElementById('feet');

metersInput.addEventListener('input', () => {
    const meters = parseFloat(metersInput.value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084;
        feetInput.value = feet.toFixed(2);
    } else {
        feetInput.value = '';
    }
});

feetInput.addEventListener('input', () => {
    const feet = parseFloat(feetInput.value);
    if (!isNaN(feet)) {
        const meters = feet * 0.3048;
        metersInput.value = meters.toFixed(2);
    } else {
        metersInput.value = '';
    }
});

// Time Converter: Minutes ↔ Hours
const minutesInput = document.getElementById('minutes');
const hoursInput = document.getElementById('hours');

minutesInput.addEventListener('input', () => {
    const minutes = parseFloat(minutesInput.value);
    if (!isNaN(minutes)) {
        const hours = minutes / 60;
        hoursInput.value = hours.toFixed(2);
    } else {
        hoursInput.value = '';
    }
});

hoursInput.addEventListener('input', () => {
    const hours = parseFloat(hoursInput.value);
    if (!isNaN(hours)) {
        const minutes = hours * 60;
        minutesInput.value = minutes.toFixed(2);
    } else {
        minutesInput.value = '';
    }
});

// Currency Converter: PHP ↔ USD
const phpInput = document.getElementById('php');
const usdInput = document.getElementById('usd');

phpInput.addEventListener('input', () => {
    const php = parseFloat(phpInput.value);
    if (!isNaN(php)) {
        const usd = php / 56;
        usdInput.value = usd.toFixed(2);
    } else {
        usdInput.value = '';
    }
});

usdInput.addEventListener('input', () => {
    const usd = parseFloat(usdInput.value);
    if (!isNaN(usd)) {
        const php = usd * 56;
        phpInput.value = php.toFixed(2);
    } else {
        phpInput.value = '';
    }
});

// Clear all inputs function
function clearInputs() {
    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach(input => {
        input.value = '';
    });
}