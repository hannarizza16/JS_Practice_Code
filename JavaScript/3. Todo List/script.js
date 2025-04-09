const fahrenheit = (fahrenheitValue) => {
    return (fahrenheitValue - 32) * 5/9;
}

function convertToCelsius() {

    const fahrenheitValue = document.getElementById("fahrenheit").value;
    
    const celsius = fahrenheit(fahrenheitValue);

    document.getElementById("result").innerHTML = `Celsius: ${celsius}`;


}