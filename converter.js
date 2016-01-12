
function clear_input() {
  document.getElementById("inputTemp").value = null;
  document.getElementById("buttonCelcius").checked = false;
  document.getElementById("buttonFahrenheit").checked = false;
  
}

function calculate() {
  var inputTemp = document.getElementById("inputTemp").value;
  var isCelciusSelected = document.getElementById("buttonCelcius").checked;
  var convertedTemperature = document.getElementById("convertedTemperature");

  console.log("inputTemp",inputTemp);
  console.log("isCelciusSelected",isCelciusSelected);

  // do the conversion
  if (isCelciusSelected) {   // was our original temperature in degrees Celcius?
    convertedTemperature.innerHTML = ( (9/5) * inputTemp + 32 ).toFixed(2);
    convertedTemperature.innerHTML += " &deg;F";
  } else {
    convertedTemperature.innerHTML = ( (inputTemp -32) * 5/9 ).toFixed(2);
    convertedTemperature.innerHTML += " &deg;C";
  }
  
  var simpleTemp = convertedTemperature.innerHTML;

  // this is more complicated than it needs to be,
  // but it gives some practice with .indexOf and parseInt and conditionals

  if ( ( (simpleTemp.indexOf("C") > 0) && (parseInt(simpleTemp) > 32) ) || 
       ( (simpleTemp.indexOf("F") > 0) && (parseInt(simpleTemp) > 90) ) ) {
    convertedTemperature.style.color = "red";
  } else if 
     ( ( (simpleTemp.indexOf("C") > 0) && (parseInt(simpleTemp) < 0)  ) || 
       ( (simpleTemp.indexOf("F") > 0) && (parseInt(simpleTemp) < 32) ) ) {
    convertedTemperature.style.color = "blue";
  } else {
    convertedTemperature.style.color = "#00CC00"; 
  }

  console.log("convertedTemperature",convertedTemperature.innerHTML);

}
