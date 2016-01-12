
function clear_input() {
  document.getElementById("inputTemp").value = null;
}

function display_to_console() {
  var isCelciusSelected = document.getElementById("isCelcius").checked;
  var inputTemp = document.getElementById("inputTemp").value;
  var convertedTemperature = document.getElementById("convertedTemperature");

  console.log("inputTemp",inputTemp);
  console.log("isCelciusSelected",isCelciusSelected);

  // do the conversion
  if (isCelciusSelected) {
    convertedTemperature.innerHTML = (9/5) * inputTemp + 32;
    convertedTemperature.innerHTML += " F";
  } else {
    convertedTemperature.innerHTML = (inputTemp -32) * 5/9;
    convertedTemperature.innerHTML += " C";
  }
  console.log("convertedTemperature",convertedTemperature.innerHTML);
}
