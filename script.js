// JavaScript Functionality
const carImage = document.getElementById('car-image');
const colorPicker = document.getElementById('color-picker');
const carSelect = document.getElementById('car-select');
const resetButton = document.getElementById('reset-button');

// Function to change the car color
colorPicker.addEventListener('input', (event) => {
  const color = event.target.value;
  carImage.style.filter = `hue-rotate(${getHueRotation(color)}deg)`;
});

// Function to change the car image
carSelect.addEventListener('change', (event) => {
  const selectedImage = event.target.value;
  carImage.src = selectedImage;
});

// Function to reset the car image to original
resetButton.addEventListener('click', () => {
  carImage.src = carSelect.value;
  carImage.style.filter = 'none';
  colorPicker.value = '#ff6f61';
});

// Helper function to convert hex color to hue-rotate value
function getHueRotation(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;

  if (max === min) {
    h = 0;
  } else {
    const d = max - min;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return Math.round(h * 360);
}