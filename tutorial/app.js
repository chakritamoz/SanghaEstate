const myElement = document.getElementById("demo");

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }else {
    myElement.innerHTML = "Geolocation is not support by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude:" + position.coords.latitude + 
    "<br>Longitude:" + position.coords.longitude;
}

function myFunction() {
  const inpObj = document.getElementById("id1");
  if(!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}

function myFunction2() {
  const inpObj = document.getElementById("id2");
  if(inpObj.validity.rangeOverflow) {
    document.getElementById("demo").innerHTML = "Value too large";
  }else if(inpObj.validity.rangeUnderflow){
    document.getElementById("demo").innerHTML = "Value too small";
  }else if(inpObj.validity.valueMissing){
    document.getElementById("demo").innerHTML = "Value is missing";
  }else {
    document.getElementById("demo").innerHTML = "Value OK";
  }
}