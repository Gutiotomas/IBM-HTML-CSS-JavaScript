function toFahrenheit (){
    var celcius = document.getElementById("c");
    var fahrenheit = (celcius.value*9/5)+32;
    document.getElementById("f").value = fahrenheit;
}

function toPounds(){
    var kg = document.getElementById("kg");
    var pounds = kg.value*2.2;
    document.getElementById("pd").value = pounds;
}

function toMiles(){
    var km = document.getElementById("km");
    var miles = km.value*0.62137;
    document.getElementById("mile").value = miles;
}