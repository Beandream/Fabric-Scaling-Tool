var scaleFactor = 72;
var imageWidth = 72;

const rulerSize = 3; // really don't know why i would need this.

const WidthInput = document.getElementById("width-input");
const ScaleInput = document.getElementById("scale-input");

ScaleInput.addEventListener("input", onSliderChange, false);

function changeViewScaleOptions() {
  var value = document.querySelector('input[name="scale-options"]:checked').value;
  scaleFactor = value;
  setImageScale();
}

function onSliderChange() {
  var value = ScaleInput.value;
  imageWidth = value;
  WidthInput.value = value;
  setImageScale();
}

function onWidthInput() {
  var value = WidthInput.value;
  imageWidth = value;
  ScaleInput.value = value;
  setImageScale();
}

function setImageScale() {
  var width = (imageWidth * rulerSize) / scaleFactor;
  document.documentElement.style.setProperty('--image-width', width + 'in');
}
setImageScale();

function displayImage() {
  var image = document.getElementById('output')
  var url = URL.createObjectURL(event.target.files[0]);
  image.style.setProperty('background-image', "url(" + url + ")");
}